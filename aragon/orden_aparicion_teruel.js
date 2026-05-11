// Colores por partido
const colores = { PP:"#0000FF", PSOE:"#FF0000", VOX:"#6ae80d", IU:"#B22222", AE: "#037252", PAR: "#c99f00"};

// Todas las encuestas
const encuestas = [
  { nombre: "ELECTOPANEL", fecha: "abril de 2024", escanos:["PP","PSOE","PP","PSOE","PP","AE","VOX","PP","PSOE","PP","PSOE","PP","AE","VOX"] },
  { nombre: "DATA 10", fecha: "Abril de 2024", escanos:["PP", "PSOE","PP","AE","PSOE","PP","VOX","PSOE","PP","AE","PSOE","PP","PSOE","PP"] },
  { nombre: "HERALDO ARAGÓN", fecha: "julio de 2024", escanos:["PP","PSOE","PP","PSOE","AE","VOX","PP","PSOE","PP","PSOE","PP","PSOE","AE","VOX"] },
  { nombre: "NC REPORT", fecha: "agosto de 2024", escanos:["PP","PSOE","PP","AE","PSOE","VOX","PP","PSOE","PP","AE","PP","PSOE","VOX","PP"] },
  { nombre: "ELECTOPANEL", fecha: "septiembre de 2024", escanos:["PP","PSOE","PP","AE","PSOE","PP","VOX","PSOE","PP","AE","PSOE","PP","PSOE","PP"] },
  { nombre: "SOCIOMÉTRICA", fecha: "agosto de 2024", escanos:["PP","PSOE","AE","PP","PSOE","VOX","PP","AE","PSOE","PP","PP","PSOE","AE","VOX"] },
  { nombre: "ELECTOPANEL", fecha: "marzo de 2025", escanos:["PP","PSOE","PP","PSOE","AE","VOX","PP","PSOE","PP","PSOE","PP","AE","PAR","PSOE"] },
  { nombre: "HERALDO ARAGÓN", fecha: "abril de 2025", escanos:["PP","PSOE","PP","PSOE","VOX","PP","AE","PSOE","PP","PP","PSOE","VOX","PP","AE"] },
  { nombre: "SOCIOMÉTRICA", fecha: "Abril de 2025", escanos:["PP","AE","PSOE","VOX","PP","AE","PSOE","PP","VOX","PP","AE","PSOE","PP","AE"] },
  { nombre: "SIGMA 2", fecha: "mayo de 2025", escanos:["PP","PSOE","VOX","PP","AE","PSOE","PP","VOX","PP","AE","PSOE","PP","PAR","PSOE"] },
  { nombre: "SIGMA 2", fecha: "julio de 2025", escanos:["PP","PSOE","PP","VOX","AE","PP","PSOE","PP","VOX","PSOE","PP","AE","PP","PAR"] },
  { nombre: "SOCIOMÉTRICA", fecha: "4 de diciembre de 2025", escanos:["PP","PSOE","AE","PP","VOX","PP","PSOE","AE","PP","VOX","PP","PSOE","AE","PP"] },
  { nombre: "ELECTOPANEL", fecha: "14 de diciembre de 2025", escanos:["PP","PSOE","PP","PP","AE","VOX","PSOE","PP","PP","PSOE","PP","AE","VOX","PSOE"] },
  { nombre: "HERALDO ARAGÓN", fecha: "20 de diciembre de 2025", escanos:["PP","PSOE","PP","AE","VOX","PP","PSOE","PP","PP","AE","VOX","IU","PSOE","PP"] },
  { nombre: "SYM", fecha: "26 de diciembre de 2025", escanos:["PP","PSOE","AE","PP","VOX","PP","PSOE","AE","PP","VOX","PP","PSOE","AE","PAR"] },
  { nombre: "ELECTOPANEL", fecha: "5 de enero de 2026", escanos:["PP","PSOE","PP","VOX","AE","PP","PSOE","PP","VOX","AE","PP","PSOE","PP","VOX"], },
  { nombre: "ELECTOPANEL", fecha: "8 de enero de 2026", escanos:["PP","PSOE","PP","VOX","AE","PP","PSOE","PP","VOX","AE","PP","PSOE","PP","VOX"] },
  { nombre: "ELECTOPANEL", fecha: "12 de enero de 2026", escanos:["PP","PSOE","PP","VOX","AE","PP","PSOE","PP","VOX","AE","PP","PSOE","PP","VOX"] },
  { nombre: "SIGMA 2", fecha: "18 de enero de 2026", escanos:["PP","PSOE","PP","VOX","PP","AE","PSOE","PP","VOX","PP","PSOE","PP","AE","VOX"] },
  { nombre: "NCREPORT", fecha: "19 de enero de 2026", escanos:["PP","PSOE","PP","VOX","AE","PP","PSOE","PP","VOX","AE","PP","PSOE","PP","VOX"] },
  { nombre: "SOCIOMÉTRICA", fecha: "19 de enero de 2026", escanos:["PP","PSOE","PP","VOX","AE","PP","PSOE","PP","VOX","AE","PSOE","PP","PAR","PP"] },
  { nombre: "HAMALGAMA MÉTRICA", fecha: "19 de enero de 2026", escanos:["PP","PSOE","PP","VOX","AE","PP","PSOE","PP","VOX","AE","PP","PSOE","PP","VOX"] },
  { nombre: "ELECTOPANEL", fecha: "19 de enero de 2026", escanos:["PP","PSOE","PP","VOX","AE","PP","PSOE","PP","VOX","AE","PP","PSOE","PP","VOX"] },
  { nombre: "CIS", fecha: "22 de enero de 2026", escanos:["PP","PSOE","PP","VOX","PSOE","PP","AE","PP","VOX","PSOE","PP","PSOE","PP","VOX"] },
  { nombre: "40DB", fecha: "23 de enero de 2026", escanos:["PP","PSOE","VOX","PP","AE","PP","PSOE","VOX","PP","AE","PP","PSOE","VOX","PP"] },
  { nombre: "HERALDO ARAGÓN", fecha: "23 de enero de 2026", escanos:["PP","PSOE","PP","AE","VOX","PP","PSOE","PP","AE","VOX","PP","PSOE","PP","PP"] },
  { nombre: "GAD3", fecha: "24 de enero de 2026", escanos:["PP","PSOE","AE","PP","VOX","PP","PSOE","AE","PP","VOX","PP","PSOE","AE","PP"] },
  { nombre: "ELECTOPANEL", fecha: "26 de enero de 2026", escanos:["PP","PSOE","PP","VOX","AE","PP","PSOE","PP","VOX","AE","PP","PSOE","PP","VOX"] },
  { nombre: "CELESTE TEL", fecha: "28 de enero de 2026", escanos:["PP","PSOE","PP","VOX","AE","PP","PSOE","PP","VOX","AE","PP","PSOE","PP","VOX"] },
  { nombre: "HERALDO ARAGÓN", fecha: "1 de febrero de 2026", escanos:["PP","PSOE","PP","VOX","AE","PP","PSOE","PP","VOX","PP","PSOE","AE","PP","VOX"] },
  { nombre: "GESOP", fecha: "1 de febrero de 2026", escanos:["PP","PSOE","PP","VOX","AE","PP","PSOE","PP","VOX","AE","PSOE","PP","PP","PSOE"] },
  { nombre: "GAD3", fecha: "1 de febrero de 2026", escanos:["PP","PSOE","VOX","AE","PP","PSOE","PP","VOX","AE","PP","PSOE","PP","VOX","PSOE"] },
  { nombre: "SIGMA 2", fecha: "1 de febrero de 2026", escanos:["PP","PSOE","VOX","PP","AE","PSOE","PP","VOX","PP","AE","PSOE","PP","VOX","PSOE"] },
  { nombre: "TARGET POINT", fecha: "2 de febrero de 2026", escanos:["PP","PSOE","AE","PP","VOX","PP","PSOE","AE","PP","VOX","PP","PSOE","AE","PP"] },
  { nombre: "NCREPORT", fecha: "2 de febrero de 2026", escanos:["PP","PSOE","PP","VOX","AE","PP","PSOE","PP","VOX","AE","PP","PSOE","PP","VOX"] },
  { nombre: "40DB", fecha: "2 de febrero de 2026", escanos:["PP","PSOE","PP","VOX","AE","PP","PSOE","PP","VOX","AE","PP","PSOE","PP","VOX"] },
  { nombre: "ELECTOPANEL", fecha: "2 de febrero de 2026", escanos:["PP","PSOE","VOX","PP","AE","PP","PSOE","VOX","PP","PP","AE","PSOE","VOX","PP"] },
  { nombre: "SOCIOMÉTRICA", fecha: "2 de febrero de 2026", escanos:["PP","PSOE","AE","VOX","PP","PP","PSOE","AE","VOX","PP","PP","PSOE","AE","VOX"] },
  { nombre: "DATA10", fecha: "2 de febrero de 2026", escanos:["PP","PSOE","PP","VOX","AE","PP","PSOE","PP","VOX","AE","PP","PSOE","PP","VOX"] },
];

// Encuestas precampaña 2025 (seleccionadas manualmente)
const encuestas2025 = [
  encuestas[11],
  encuestas[12],
  encuestas[13],
  encuestas[14],
  encuestas[15],
  encuestas[16],
  encuestas[17],
  encuestas[18],
  encuestas[19],
  encuestas[20],
  encuestas[21],
  encuestas[22],
  encuestas[23],
  encuestas[24],
  encuestas[25],
  encuestas[26],
  encuestas[27],
  encuestas[28],
  encuestas[29],
  encuestas[30],
  encuestas[31],
  encuestas[32],
  encuestas[33],
  encuestas[34],
  encuestas[35],
  encuestas[36],
  encuestas[37],
  encuestas[38],
];

// Funciones para calcular recuento y mostrarlo
function calcularRecuentoPorEncuesta(encuesta) {
  const recuento = {};
  encuesta.escanos.forEach(p => recuento[p] = (recuento[p] || 0) + 1);
  return recuento;
}

function mostrarRecuento(encuestasFiltradas, idDiv) {
  const div = document.getElementById(idDiv);
  div.innerHTML = encuestasFiltradas.map(e => {
    const r = calcularRecuentoPorEncuesta(e);
    return `<strong>${e.nombre} (${e.fecha}):</strong> ${Object.entries(r).map(([p,n]) => `<span style="color:${colores[p]}">${p}: ${n} escaños</span>`).join(" | ")}`;
  }).join("<br>");
}

// Función para crear gráfico
function crearGrafico(encuestasFiltradas, idCanvas) {
  const xLabels = encuestasFiltradas.map(e => `${e.nombre} ${e.fecha}`);
  const yLabels = Array.from({length:14}, (_,i)=> (i+1).toString());
  const datasets = encuestasFiltradas.map((e,idx)=>({
    label: `${e.nombre} ${e.fecha}`,
    data: e.escanos.map((p,i)=>({ x:xLabels[idx], y:yLabels[i] })),
    showLine:false,
    pointRadius: 10,
    pointBackgroundColor: e.escanos.map(p => colores[p]),
    pointBorderColor: "#000"
  }));
  new Chart(document.getElementById(idCanvas), {
    type:'scatter',
    data:{datasets},
    options:{
      responsive:true,
      aspectRatio:0.5,
      scales:{
        x:{ 
          type:'category',
          labels:xLabels,
          offset:true,
          title:{display:true,text:"Encuesta (encuestadora + fecha)"},
          ticks:{autoSkip:false,maxRotation:45,minRotation:45}
        },
        y:{
          type:'category',
          labels:yLabels,
          title:{display:true,text:"Puesto (1 = mejor)"},
          ticks:{autoSkip:false}  // <--- todos los números del 1 al 36
        }
      },
      plugins:{
        tooltip:{
          callbacks:{
            label: ctx => {
              const e = encuestasFiltradas[ctx.datasetIndex];
              const idx = parseInt(ctx.raw.y)-1;
              return `${e.escanos[idx]} - puesto ${ctx.raw.y}`;
            }
          }
        },
        legend:{display:false}
      }
    }
  });
}

// Crear gráficos y recuentos
crearGrafico(encuestas2025, "escanosChart2025");
mostrarRecuento(encuestas2025, "recuento2025");

crearGrafico(encuestas, "escanosChartTodos");
mostrarRecuento(encuestas, "recuentoTodos");