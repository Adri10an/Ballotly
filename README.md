# 🗳️ Ballotly v3

**Plataforma de análisis y visualización de datos electorales españoles.**  
Explora resultados históricos por comunidad autónoma, provincia, partido y convocatoria electoral — todo desde el navegador, sin dependencias de servidor.

---

## ✨ Funcionalidades

| Sección | Descripción |
|---|---|
| 📊 Datos electorales | Mapas y gráficos provinciales por comunidad, generales y europeas |
| ⏱ Mandatómetro | Duración y análisis de mandatos autonómicos |
| 🗳 Calculadora D'Hondt | Simulador de reparto de escaños |
| 🏛️ Calc. Amplificada | Calculadora electoral ampliada |
| 📈 Encuestas | Histórico de encuestas electorales |
| 🌍 Sistemas electorales | Comparativa de sistemas electorales mundiales |
| 📅 Calendario electoral | Calendario de elecciones pasadas y futuras |
| 🗺️ Mapa Electoral | Mapa interactivo de resultados |
| 🏆 Ranking Autonómico | Ranking de partidos por comunidad |
| 🎖️ Ranking por Partidos | Resultados históricos por partido |
| 🗺️ Ranking por Provincias | Comparativa provincial |
| 🏆 Ganador por Provincia | Partido ganador provincia a provincia |
| 📈 Evolución Electoral | Tendencias de voto a lo largo del tiempo |
| ↕️ Cambio de Voto | Variación de voto entre convocatorias |
| 📏 Brecha Territorial | Diferencias geográficas en el voto |
| ⚡ Polarización | Índice de polarización electoral |
| 🔬 Comparador | Comparativa entre comunidades y partidos |
| ⚖️ Izq vs Der | Análisis del bloque ideológico |
| 💰 Gasto en Pensiones | Datos de gasto por territorio |
| 🗺️ Pensiones por Provincia | Distribución provincial de pensiones |
| 🗣️ Valoración de Líderes | Evolución de la valoración de líderes |
| 🧑‍🤝‍🧑 Voto Joven y Mayor | Análisis del voto por franja de edad |
| 🪞 Ohios Autonómicos | Comunidades termómetro de tendencia nacional |
| 🔄 Translación Electoral | Trasvase de votos entre elecciones |
| 🗳️ España Calculadora | Simulador de resultados nacionales |
| 🧪 Tests Políticos | Tests de orientación política |
| 📊 Comparativa | Comparativa de resultados entre convocatorias |
| 🔗 Recursos | Enlaces y fuentes de datos electorales |

---

## 🗂️ Estructura del proyecto

```
Ballotly_output/
├── html/
│   ├── index.html                  # Entrada principal
│   ├── generales/                  # Elecciones Generales
│   │   ├── provincial_mejorado_generales.html
│   │   ├── provincial_mejorado_simulacion.html
│   │   ├── provincial_comunidades.html
│   │   ├── provincial_comunidades_simulacion.html
│   │   └── evolucion_generales_voto_porcentaje.html
│   ├── europeas/                   # Elecciones Europeas
│   │   ├── provincial_europeas.html
│   │   ├── evolucion_europeas_voto_porcentaje.html
│   │   └── evolucion_europeas_voto_total.html
│   ├── andalucia/                  # Una carpeta por comunidad autónoma
│   ├── aragon/
│   ├── asturias/
│   ├── baleares/
│   ├── canarias/
│   ├── cantabria/
│   ├── castilla_la_mancha/
│   ├── castilla_y_leon/
│   ├── cataluna/
│   ├── ceuta/
│   ├── comunidad_valenciana/
│   ├── extremadura/
│   ├── galicia/
│   ├── la_rioja/
│   ├── madrid/
│   ├── melilla/
│   ├── murcia/
│   ├── navarra/
│   └── pais_vasco/
├── css/
│   ├── index.css                   # Estilos globales + tema claro/oscuro
│   └── [comunidad]/                # CSS separado por comunidad/sección
├── js/
│   ├── index.js                    # Lógica principal de navegación
│   ├── theme.js                    # Toggle tema claro / oscuro
│   ├── auth.js                     # Autenticación de usuario
│   ├── json_data.js                # Datos electorales centralizados
│   ├── calendar_map.js             # Lógica del mapa-calendario
│   └── [comunidad]/                # JS separado por comunidad/sección
```

> **241 HTML · 241 CSS · 245 JS** — CSS y JS completamente separados del HTML en todos los archivos.

---

## 🚀 Uso

Al ser un proyecto de HTML/CSS/JS estático, no necesita ningún servidor ni instalación:

1. Clona o descarga el repositorio
2. Abre `html/index.html` en tu navegador
3. Selecciona una comunidad autónoma, elecciones generales o europeas

```bash
git clone https://github.com/tu-usuario/ballotly.git
# Abre directamente en el navegador:
open Ballotly_output/html/index.html
```

> ⚠️ Algunos navegadores bloquean la carga de archivos locales por políticas CORS.  
> Si ocurre, sirve el proyecto con cualquier servidor local:
> ```bash
> # Con Python
> python3 -m http.server 8080
> # Con Node
> npx serve .
> ```
> Luego accede a `http://localhost:8080/html/index.html`

---

## 🌗 Tema claro / oscuro

Ballotly incluye un toggle **☀️ Claro / 🌙 Oscuro** en la barra superior.  
La preferencia se guarda automáticamente en `localStorage` y persiste entre sesiones.  
Por defecto se inicia en modo oscuro.

---

## 📊 Cobertura de datos

- **19 comunidades autónomas** + Ceuta y Melilla
- **Elecciones autonómicas** históricas por comunidad
- **Elecciones Generales** desde 1977 — provincial, por comunidades y simulaciones
- **Elecciones Europeas** — provincial, evolución de voto % y total
- Datos de **encuestas**, **pensiones**, **valoración de líderes** y **voto joven**

---

## 🛠️ Tecnologías

- **HTML5 / CSS3 / JavaScript** vanilla — sin frameworks ni bundlers
- **Chart.js** + **chartjs-plugin-datalabels** — gráficos de evolución electoral
- **SVG** — mapas provinciales interactivos
- Variables CSS custom properties para el sistema de temas

---

## 📄 Licencia

Este proyecto es un Trabajo de Fin de Grado (TFG). Datos electorales de fuentes oficiales (Ministerio del Interior, Junta Electoral Central).
