// ═══════════════════════════════════════════════════════════
// BALLOTLY AUTH SYSTEM — Real CRUD with localStorage DB
// ═══════════════════════════════════════════════════════════

const AUTH = (() => {
  const DB_KEY = 'ballotly_users_v1';
  const SESSION_KEY = 'ballotly_session_v1';

  // ── DB helpers (CRUD) ────────────────────────────────────
  function dbRead() {
    try { return JSON.parse(localStorage.getItem(DB_KEY) || '{}'); } catch { return {}; }
  }
  function dbWrite(data) {
    localStorage.setItem(DB_KEY, JSON.stringify(data));
  }
  // CREATE user
  function createUser(email, password, name) {
    const db = dbRead();
    const key = email.toLowerCase().trim();
    if (db[key]) return { ok: false, error: 'Este email ya está registrado.' };
    db[key] = {
      email: key,
      name: name.trim(),
      password: btoa(password), // simple encoding
      createdAt: Date.now(),
      updatedAt: Date.now()
    };
    dbWrite(db);
    return { ok: true, user: { email: key, name: name.trim() } };
  }
  // READ user
  function getUser(email) {
    const db = dbRead();
    return db[email.toLowerCase().trim()] || null;
  }
  // UPDATE user
  function updateUser(email, changes) {
    const db = dbRead();
    const key = email.toLowerCase().trim();
    if (!db[key]) return { ok: false, error: 'Usuario no encontrado.' };
    db[key] = { ...db[key], ...changes, updatedAt: Date.now() };
    dbWrite(db);
    return { ok: true };
  }
  // DELETE user
  function deleteUser(email) {
    const db = dbRead();
    const key = email.toLowerCase().trim();
    if (!db[key]) return { ok: false, error: 'Usuario no encontrado.' };
    delete db[key];
    dbWrite(db);
    return { ok: true };
  }
  // LIST users (for admin purposes, not exposed in UI)
  function listUsers() {
    const db = dbRead();
    return Object.values(db).map(u => ({ email: u.email, name: u.name, createdAt: u.createdAt }));
  }

  // ── Session management ────────────────────────────────────
  function getSession() {
    try { return JSON.parse(sessionStorage.getItem(SESSION_KEY) || 'null'); } catch { return null; }
  }
  function setSession(user) {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(user));
  }
  function clearSession() {
    sessionStorage.removeItem(SESSION_KEY);
  }
  function isLoggedIn() {
    return getSession() !== null;
  }
  function currentUser() {
    return getSession();
  }

  // ── Email validation ──────────────────────────────────────
  function isValidEmailFormat(email) {
    // RFC 5322 simplified - must have @ and valid domain
    const re = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
    return re.test(email.trim());
  }

  // ── Auth operations ───────────────────────────────────────
  function login(email, password) {
    const user = getUser(email);
    if (!user) return { ok: false, error: 'Email no registrado. ¿Quieres crear una cuenta?' };
    if (atob(user.password) !== password) return { ok: false, error: 'Contraseña incorrecta.' };
    const sessionUser = { email: user.email, name: user.name };
    setSession(sessionUser);
    return { ok: true, user: sessionUser };
  }
  function register(email, password, name) {
    if (!isValidEmailFormat(email)) return { ok: false, error: 'Formato de email inválido.' };
    if (!name || name.trim().length < 2) return { ok: false, error: 'El nombre debe tener al menos 2 caracteres.' };
    if (password.length < 6) return { ok: false, error: 'La contraseña debe tener al menos 6 caracteres.' };
    const result = createUser(email, password, name);
    if (!result.ok) return result;
    setSession(result.user);
    return { ok: true, user: result.user };
  }
  function logout() {
    clearSession();
    updateAuthUI();
  }
  function changePassword(email, oldPwd, newPwd) {
    const user = getUser(email);
    if (!user) return { ok: false, error: 'Usuario no encontrado.' };
    if (atob(user.password) !== oldPwd) return { ok: false, error: 'Contraseña actual incorrecta.' };
    if (newPwd.length < 6) return { ok: false, error: 'La nueva contraseña debe tener al menos 6 caracteres.' };
    return updateUser(email, { password: btoa(newPwd) });
  }

  // ── UI ────────────────────────────────────────────────────
  function requireAuth(onSuccess, message) {
    if (isLoggedIn()) { if (onSuccess) onSuccess(); return; }
    showAuthModal(message || '¿Quieres acceder a esta función?', onSuccess);
  }

  function updateAuthUI() {
    const user = getSession();
    const btn = document.getElementById('auth-user-btn');
    if (!btn) return;
    if (user) {
      btn.innerHTML = `<span style="font-size:18px;">👤</span> ${user.name.split(' ')[0]}`;
      btn.onclick = () => showProfileModal();
    } else {
      btn.innerHTML = '🔐 Iniciar sesión';
      btn.onclick = () => showAuthModal();
    }
  }

  function showAuthModal(message, onSuccess) {
    const existing = document.getElementById('auth-modal-overlay');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.id = 'auth-modal-overlay';
    overlay.style.cssText = `
      position:fixed;inset:0;background:rgba(0,0,0,0.75);z-index:9999;
      display:flex;align-items:center;justify-content:center;
      font-family:var(--font,'Sora',sans-serif);
    `;

    overlay.innerHTML = `
      <div id="auth-modal" style="
        background:var(--bg2,#10141c);border:1px solid var(--border,rgba(255,255,255,0.1));
        border-radius:16px;padding:32px;width:100%;max-width:400px;margin:16px;
        box-shadow:0 20px 60px rgba(0,0,0,0.5);position:relative;
      ">
        <button onclick="document.getElementById('auth-modal-overlay').remove()"
          style="position:absolute;top:12px;right:16px;background:none;border:none;
          color:var(--text3,#5c6478);font-size:22px;cursor:pointer;line-height:1;">×</button>

        <div id="auth-tabs" style="display:flex;gap:0;margin-bottom:24px;border-bottom:1px solid var(--border,rgba(255,255,255,0.1));">
          <button id="tab-login" onclick="AUTH._switchTab('login')" style="
            flex:1;padding:10px;border:none;background:none;
            color:var(--accent,#4f8ef7);font-family:var(--font,'Sora',sans-serif);
            font-size:14px;font-weight:700;cursor:pointer;
            border-bottom:2px solid var(--accent,#4f8ef7);
          ">Iniciar Sesión</button>
          <button id="tab-register" onclick="AUTH._switchTab('register')" style="
            flex:1;padding:10px;border:none;background:none;
            color:var(--text3,#5c6478);font-family:var(--font,'Sora',sans-serif);
            font-size:14px;font-weight:600;cursor:pointer;border-bottom:2px solid transparent;
          ">Registrarse</button>
        </div>

        ${message ? `<p style="color:var(--text2,#8e97ad);font-size:13px;margin-bottom:16px;text-align:center;">${message}</p>` : ''}

        <!-- LOGIN FORM -->
        <div id="auth-login-form">
          <div style="margin-bottom:14px;">
            <label style="font-size:12px;color:var(--text2,#8e97ad);font-weight:600;display:block;margin-bottom:6px;">EMAIL</label>
            <input id="login-email" type="email" placeholder="tu@email.com"
              style="width:100%;box-sizing:border-box;background:var(--bg3,#161b27);border:1px solid var(--border2,rgba(255,255,255,0.12));
              border-radius:9px;padding:11px 14px;color:var(--text,#e8ecf4);font-family:var(--font,'Sora',sans-serif);
              font-size:14px;outline:none;" onkeydown="if(event.key==='Enter') AUTH._doLogin()" />
          </div>
          <div style="margin-bottom:20px;">
            <label style="font-size:12px;color:var(--text2,#8e97ad);font-weight:600;display:block;margin-bottom:6px;">CONTRASEÑA</label>
            <input id="login-password" type="password" placeholder="••••••••"
              style="width:100%;box-sizing:border-box;background:var(--bg3,#161b27);border:1px solid var(--border2,rgba(255,255,255,0.12));
              border-radius:9px;padding:11px 14px;color:var(--text,#e8ecf4);font-family:var(--font,'Sora',sans-serif);
              font-size:14px;outline:none;" onkeydown="if(event.key==='Enter') AUTH._doLogin()" />
          </div>
          <p id="login-error" style="color:#ef5350;font-size:12px;margin-bottom:10px;display:none;"></p>
          <button onclick="AUTH._doLogin()" style="
            width:100%;padding:13px;border:none;border-radius:10px;
            background:var(--accent,#4f8ef7);color:#fff;font-family:var(--font,'Sora',sans-serif);
            font-size:14px;font-weight:700;cursor:pointer;transition:background .2s;
          " onmouseover="this.style.background='var(--accent2,#3a7aee)'" onmouseout="this.style.background='var(--accent,#4f8ef7)'">
            Entrar
          </button>
        </div>

        <!-- REGISTER FORM -->
        <div id="auth-register-form" style="display:none;">
          <div style="margin-bottom:14px;">
            <label style="font-size:12px;color:var(--text2,#8e97ad);font-weight:600;display:block;margin-bottom:6px;">NOMBRE</label>
            <input id="reg-name" type="text" placeholder="Tu nombre"
              style="width:100%;box-sizing:border-box;background:var(--bg3,#161b27);border:1px solid var(--border2,rgba(255,255,255,0.12));
              border-radius:9px;padding:11px 14px;color:var(--text,#e8ecf4);font-family:var(--font,'Sora',sans-serif);
              font-size:14px;outline:none;" />
          </div>
          <div style="margin-bottom:14px;">
            <label style="font-size:12px;color:var(--text2,#8e97ad);font-weight:600;display:block;margin-bottom:6px;">EMAIL</label>
            <input id="reg-email" type="email" placeholder="tu@email.com"
              style="width:100%;box-sizing:border-box;background:var(--bg3,#161b27);border:1px solid var(--border2,rgba(255,255,255,0.12));
              border-radius:9px;padding:11px 14px;color:var(--text,#e8ecf4);font-family:var(--font,'Sora',sans-serif);
              font-size:14px;outline:none;" />
          </div>
          <div style="margin-bottom:20px;">
            <label style="font-size:12px;color:var(--text2,#8e97ad);font-weight:600;display:block;margin-bottom:6px;">CONTRASEÑA <span style="color:var(--text3,#5c6478);font-weight:400;">(mín. 6 caracteres)</span></label>
            <input id="reg-password" type="password" placeholder="••••••••"
              style="width:100%;box-sizing:border-box;background:var(--bg3,#161b27);border:1px solid var(--border2,rgba(255,255,255,0.12));
              border-radius:9px;padding:11px 14px;color:var(--text,#e8ecf4);font-family:var(--font,'Sora',sans-serif);
              font-size:14px;outline:none;" onkeydown="if(event.key==='Enter') AUTH._doRegister()" />
          </div>
          <p id="reg-error" style="color:#ef5350;font-size:12px;margin-bottom:10px;display:none;"></p>
          <p id="reg-success" style="color:#4caf50;font-size:12px;margin-bottom:10px;display:none;"></p>
          <button onclick="AUTH._doRegister()" id="reg-btn" style="
            width:100%;padding:13px;border:none;border-radius:10px;
            background:var(--accent,#4f8ef7);color:#fff;font-family:var(--font,'Sora',sans-serif);
            font-size:14px;font-weight:700;cursor:pointer;
          ">Crear cuenta</button>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
    // Store callback
    overlay._onSuccess = onSuccess;
    overlay.addEventListener('click', e => { if(e.target === overlay) overlay.remove(); });
    setTimeout(() => document.getElementById('login-email')?.focus(), 100);
  }

  function showProfileModal() {
    const user = getSession();
    if (!user) return;
    const existing = document.getElementById('profile-modal-overlay');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.id = 'profile-modal-overlay';
    overlay.style.cssText = `
      position:fixed;inset:0;background:rgba(0,0,0,0.75);z-index:9999;
      display:flex;align-items:center;justify-content:center;
      font-family:var(--font,'Sora',sans-serif);
    `;
    overlay.innerHTML = `
      <div style="
        background:var(--bg2,#10141c);border:1px solid var(--border,rgba(255,255,255,0.1));
        border-radius:16px;padding:32px;width:100%;max-width:380px;margin:16px;
        box-shadow:0 20px 60px rgba(0,0,0,0.5);position:relative;
      ">
        <button onclick="document.getElementById('profile-modal-overlay').remove()"
          style="position:absolute;top:12px;right:16px;background:none;border:none;
          color:var(--text3,#5c6478);font-size:22px;cursor:pointer;">×</button>
        <div style="text-align:center;margin-bottom:20px;">
          <div style="width:56px;height:56px;border-radius:50%;background:var(--accent,#4f8ef7);
            display:inline-flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:10px;">
            👤
          </div>
          <div style="font-size:18px;font-weight:700;color:var(--text,#e8ecf4);">${user.name}</div>
          <div style="font-size:13px;color:var(--text2,#8e97ad);margin-top:4px;">${user.email}</div>
        </div>
        <div style="margin-bottom:16px;">
          <div style="font-size:11px;color:var(--text3,#5c6478);font-weight:700;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:10px;">Cambiar nombre</div>
          <input id="profile-name" type="text" value="${user.name}"
            style="width:100%;box-sizing:border-box;background:var(--bg3,#161b27);border:1px solid var(--border2,rgba(255,255,255,0.12));
            border-radius:9px;padding:10px 12px;color:var(--text,#e8ecf4);font-family:var(--font,'Sora',sans-serif);font-size:14px;outline:none;margin-bottom:8px;" />
          <button onclick="AUTH._updateName()" style="
            padding:9px 18px;border:none;border-radius:8px;
            background:var(--accent,#4f8ef7);color:#fff;
            font-family:var(--font,'Sora',sans-serif);font-size:13px;font-weight:600;cursor:pointer;
          ">Actualizar nombre</button>
        </div>
        <hr style="border:none;border-top:1px solid var(--border,rgba(255,255,255,0.1));margin:20px 0;">
        <div style="margin-bottom:16px;">
          <div style="font-size:11px;color:var(--text3,#5c6478);font-weight:700;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:10px;">Cambiar contraseña</div>
          <input id="profile-old-pwd" type="password" placeholder="Contraseña actual"
            style="width:100%;box-sizing:border-box;background:var(--bg3,#161b27);border:1px solid var(--border2,rgba(255,255,255,0.12));
            border-radius:9px;padding:10px 12px;color:var(--text,#e8ecf4);font-family:var(--font,'Sora',sans-serif);font-size:14px;outline:none;margin-bottom:8px;" />
          <input id="profile-new-pwd" type="password" placeholder="Nueva contraseña"
            style="width:100%;box-sizing:border-box;background:var(--bg3,#161b27);border:1px solid var(--border2,rgba(255,255,255,0.12));
            border-radius:9px;padding:10px 12px;color:var(--text,#e8ecf4);font-family:var(--font,'Sora',sans-serif);font-size:14px;outline:none;margin-bottom:8px;" />
          <p id="pwd-msg" style="font-size:12px;display:none;margin-bottom:8px;"></p>
          <button onclick="AUTH._changePwd()" style="
            padding:9px 18px;border:none;border-radius:8px;
            background:var(--surface2,#252e42);color:var(--text,#e8ecf4);
            font-family:var(--font,'Sora',sans-serif);font-size:13px;font-weight:600;cursor:pointer;border:1px solid var(--border2,rgba(255,255,255,0.12));
          ">Cambiar contraseña</button>
        </div>
        <hr style="border:none;border-top:1px solid var(--border,rgba(255,255,255,0.1));margin:20px 0;">
        <div style="display:flex;gap:10px;">
          <button onclick="AUTH.logout();document.getElementById('profile-modal-overlay').remove();" style="
            flex:1;padding:10px;border:none;border-radius:9px;
            background:rgba(239,83,80,0.1);color:#ef5350;
            font-family:var(--font,'Sora',sans-serif);font-size:13px;font-weight:600;cursor:pointer;
            border:1px solid rgba(239,83,80,0.3);
          ">Cerrar sesión</button>
          <button onclick="AUTH._deleteAccount()" style="
            padding:10px 14px;border:none;border-radius:9px;
            background:rgba(239,83,80,0.05);color:#ef5350;
            font-family:var(--font,'Sora',sans-serif);font-size:12px;cursor:pointer;
            border:1px solid rgba(239,83,80,0.2);
          ">Eliminar cuenta</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
    overlay.addEventListener('click', e => { if(e.target===overlay) overlay.remove(); });
  }

  // Internal UI handlers
  function _switchTab(tab) {
    const loginF = document.getElementById('auth-login-form');
    const regF = document.getElementById('auth-register-form');
    const tabL = document.getElementById('tab-login');
    const tabR = document.getElementById('tab-register');
    const accent = 'var(--accent,#4f8ef7)';
    const muted = 'var(--text3,#5c6478)';
    if (tab === 'login') {
      loginF.style.display = ''; regF.style.display = 'none';
      tabL.style.color = accent; tabL.style.borderBottomColor = accent;
      tabR.style.color = muted; tabR.style.borderBottomColor = 'transparent';
      setTimeout(() => document.getElementById('login-email')?.focus(), 50);
    } else {
      loginF.style.display = 'none'; regF.style.display = '';
      tabR.style.color = accent; tabR.style.borderBottomColor = accent;
      tabL.style.color = muted; tabL.style.borderBottomColor = 'transparent';
      setTimeout(() => document.getElementById('reg-name')?.focus(), 50);
    }
  }

  function _doLogin() {
    const email = document.getElementById('login-email').value;
    const pwd = document.getElementById('login-password').value;
    const err = document.getElementById('login-error');
    const result = login(email, pwd);
    if (!result.ok) {
      err.textContent = result.error; err.style.display = '';
      return;
    }
    err.style.display = 'none';
    updateAuthUI();
    const overlay = document.getElementById('auth-modal-overlay');
    const cb = overlay?._onSuccess;
    overlay?.remove();
    if (cb) cb();
  }

  async function _doRegister() {
    const name = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const pwd = document.getElementById('reg-password').value;
    const err = document.getElementById('reg-error');
    const suc = document.getElementById('reg-success');
    const btn = document.getElementById('reg-btn');
    err.style.display = 'none'; suc.style.display = 'none';

    if (!isValidEmailFormat(email)) {
      err.textContent = 'Formato de email inválido.'; err.style.display = ''; return;
    }

    btn.textContent = 'Verificando...'; btn.disabled = true;

    // Validate email domain via Anthropic API
    const valid = await _validateEmailDomain(email);
    btn.textContent = 'Crear cuenta'; btn.disabled = false;

    if (!valid) {
      err.textContent = 'El dominio de este email no parece ser válido. Usa un email real.';
      err.style.display = ''; return;
    }

    const result = register(email, pwd, name);
    if (!result.ok) {
      err.textContent = result.error; err.style.display = ''; return;
    }
    suc.textContent = '¡Cuenta creada! Bienvenido/a, ' + result.user.name + '.';
    suc.style.display = '';
    updateAuthUI();
    const overlay = document.getElementById('auth-modal-overlay');
    const cb = overlay?._onSuccess;
    setTimeout(() => {
      overlay?.remove();
      if (cb) cb();
    }, 1200);
  }

  async function _validateEmailDomain(email) {
    // Use Anthropic API to validate email domain existence
    const domain = email.split('@')[1];
    const commonDomains = [
      'gmail.com','hotmail.com','outlook.com','yahoo.com','icloud.com',
      'protonmail.com','tutanota.com','gmx.com','mail.com','live.com',
      'msn.com','me.com','aol.com','yandex.com','proton.me'
    ];
    // Well-known domains are automatically valid
    if (commonDomains.includes(domain.toLowerCase())) return true;
    
    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 50,
          messages: [{
            role: 'user',
            content: `Is "${domain}" a valid, real email domain that actually exists and accepts emails? Answer ONLY "yes" or "no".`
          }]
        })
      });
      if (!response.ok) return true; // If API fails, allow registration
      const data = await response.json();
      const answer = data.content?.[0]?.text?.toLowerCase()?.trim() || '';
      return answer.startsWith('yes');
    } catch {
      return true; // Network error - allow registration
    }
  }

  function _updateName() {
    const user = getSession();
    if (!user) return;
    const name = document.getElementById('profile-name').value;
    if (!name || name.trim().length < 2) { alert('Nombre demasiado corto.'); return; }
    updateUser(user.email, { name: name.trim() });
    setSession({ ...user, name: name.trim() });
    updateAuthUI();
    alert('Nombre actualizado.');
    document.getElementById('profile-modal-overlay')?.remove();
  }

  function _changePwd() {
    const user = getSession();
    if (!user) return;
    const old = document.getElementById('profile-old-pwd').value;
    const nw = document.getElementById('profile-new-pwd').value;
    const msg = document.getElementById('pwd-msg');
    const result = changePassword(user.email, old, nw);
    if (!result.ok) {
      msg.textContent = result.error; msg.style.color = '#ef5350'; msg.style.display = '';
    } else {
      msg.textContent = 'Contraseña cambiada correctamente.'; msg.style.color = '#4caf50'; msg.style.display = '';
    }
  }

  function _deleteAccount() {
    const user = getSession();
    if (!user) return;
    if (!confirm(`¿Seguro que quieres eliminar tu cuenta (${user.email})? Esta acción es irreversible.`)) return;
    deleteUser(user.email);
    clearSession();
    updateAuthUI();
    document.getElementById('profile-modal-overlay')?.remove();
    alert('Cuenta eliminada.');
  }

  return {
    login, register, logout, isLoggedIn, currentUser,
    requireAuth, updateAuthUI, showAuthModal, showProfileModal,
    createUser, getUser, updateUser, deleteUser, listUsers,
    _switchTab, _doLogin, _doRegister, _validateEmailDomain,
    _updateName, _changePwd, _deleteAccount
  };
})();

// Init on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  AUTH.updateAuthUI();
});
