// Colores por partido
const colores = { PP:"#0000FF", PSOE:"#FF0000", VOX:"#008000", UXE:"#800080" };

// Todas las encuestas
const encuestas = [
  { nombre: "El Confidencial", fecha: "21 de junio de 2023", escanos:["PSOE","PP","PSOE","PP","PSOE","PP","PSOE","PP","PSOE","PP","VOX","PSOE","PP","UXE","PSOE","PP","PSOE","PP","PSOE","PP","PSOE","PP","VOX","PSOE","PP","PSOE","PP","UXE","PSOE"] },
  { nombre: "DATA 10", fecha: "22 de junio de 2023", escanos:["PP","PSOE","PP","PSOE","PP","PSOE","PP","PSOE","PP","PSOE","PP","VOX","PSOE","PP","PSOE","PP","PSOE","PP","PSOE","PP","PSOE","PP","PSOE","PP","VOX","PSOE","PP","PSOE","PP"] },
  { nombre: "ELECTOPANEL", fecha: "24 de junio de 2023", escanos:["PSOE","PP","PSOE","PP","PSOE","PP","PSOE","PP","VOX","PSOE","PP","PSOE","PP","PSOE","PP","UXE","PSOE","PP","PSOE","VOX","PP","PSOE","PP","PSOE","PP","PSOE","PP","PSOE","PP"] },
  { nombre: "ELECTOPANEL", fecha: "26 de diciembre de 2023", escanos:["PSOE","PP","PSOE","PP","PSOE","PP","PSOE","PP","VOX","PSOE","PP","PSOE","PP","PSOE","PP","PSOE","UXE","PP","VOX","PSOE","PP","PSOE","PP","PSOE","PP","PSOE","PP","VOX","PSOE"] },
  { nombre: "NCREPORT", fecha: "2 de agosto de 2024", escanos:["PP","PSOE","PP","PSOE","PP","PSOE","PP","PSOE","PP","PP","PSOE","VOX","PP","PSOE","PP","PSOE","PP","PSOE","PP","PSOE","PP","PP","PSOE","VOX","PP","PSOE","PP","PSOE","PP"] },
  { nombre: "SIGMA 2", fecha: "24 de mayo de 2025", escanos:["PP","PSOE","PP","PSOE","PP","PSOE","PP","VOX","PSOE","PP","PP","PSOE","UXE","PP","PSOE","PP","PSOE","VOX","PP","PSOE","PP","PP","PSOE","PP","PSOE","UXE","PP","VOX","PSOE"] },
  { nombre: "ELECTOPANEL", fecha: "30 de mayo de 2025", escanos:["PP","PSOE","PP","PSOE","PP","PSOE","PP","VOX","PSOE","PP","PSOE","PP","PSOE","PP","PP","PSOE","VOX","PP","PSOE","PP","PSOE","PP","PSOE","PP","VOX","PSOE","PP","PSOE","PP"] },
  { nombre: "ELECTOPANEL", fecha: "27 de octubre de 2025", escanos:["PP","PSOE","PP","PSOE","PP","VOX","PSOE","PP","PSOE","PP","PSOE","PP","VOX","PP","PSOE","PP","PSOE","PP","PSOE","VOX","PP","PSOE","PP","PSOE","PP","VOX","PP","PSOE","PP"] },
  { nombre: "ELECTOPANEL", fecha: "30 de octubre de 2025", escanos:["PP","PSOE","PP","PSOE","PP","VOX","PSOE","PP","PP","PSOE","PP","PSOE","VOX","PP","UXE","PSOE","PP","PP","PSOE","PP","VOX","PSOE","PP","PSOE","PP","PSOE","PP","VOX","PP"] },
  { nombre: "ELECTOPANEL", fecha: "20 de noviembre de 2025", escanos:["PP","PSOE","PP","PSOE","PP","VOX","PP","PSOE","PP","PSOE","PP","PSOE","UXE","PP","VOX","PP","PSOE","PP","PSOE","PP","VOX","PSOE","PP","PP","PSOE","PP","PSOE","UXE","PP"] },
  { nombre: "ELECTOPANEL", fecha: "24 de noviembre de 2025", escanos:["PP","PSOE","PP","PSOE","PP","VOX","PSOE","PP","PP","PSOE","PP","PSOE","UXE","VOX","PP","PSOE","PP","PP","PSOE","PP","VOX","PSOE","PP","PSOE","PP","PP","PSOE","UXE","VOX"] },
  { nombre: "SYM", fecha: "27 de noviembre de 2025", escanos:["PP","PSOE","PP","PSOE","PP","VOX","PSOE","PP","PP","PSOE","PP","PSOE","PP","VOX","PSOE","PP","UXE","PSOE","PP","PP","PSOE","PP","VOX","PSOE","PP","PSOE","PP","PSOE","PP"] },
  { nombre: "CIS", fecha: "28 de noviembre de 2025", escanos:["PP","PSOE","PP","VOX","PSOE","PP","PP","PSOE","UXE","VOX","PP","PSOE","PP","VOX","PSOE","PP","PP","PSOE","UXE","VOX","PP","PSOE","PP","PSOE","PP","VOX","PP","PSOE","UXE"] },
  { nombre: "CIS REESTIMADO", fecha: "28 de noviembre de 2025", escanos:["PP","PSOE","PP","PSOE","PP","VOX","PSOE","PP","PP","PSOE","UXE","PP","VOX","PSOE","PP","PSOE","PP","PP","PSOE","VOX","PP","PSOE","PP","UXE","PSOE","PP","VOX","PSOE","PP"] },
  { nombre: "SIGMA 2", fecha: "29 de noviembre de 2025", escanos:["PP","PSOE","PP","PSOE","PP","VOX","PP","PSOE","PP","UXE","PSOE","PP","VOX","PSOE","PP","PP","PSOE","PP","PSOE","VOX","PP","UXE","PP","PSOE","PP","PSOE","VOX","PP","PSOE"] },
  { nombre: "ELECTOPANEL", fecha: "1 de diciembre de 2025", escanos:["PP","PSOE","PP","PSOE","PP","VOX","PP","PSOE","PP","PSOE","PP","VOX","PSOE","UXE","PP","PP","PSOE","PP","PSOE","VOX","PP","PSOE","PP","PP","PSOE","PP","VOX","PSOE","UXE"] },
  { nombre: "SOCIOMÉTRICA", fecha: "7 de diciembre de 2025", escanos:["PP","PSOE","PP","PP","PSOE","VOX","PP","PSOE","PP","UXE","PP","PSOE","VOX","PP","PP","PSOE","PP","PSOE","PP","VOX","PP","UXE","PSOE","PP","PSOE","PP","VOX","PP","PSOE"] },
  { nombre: "NC REPORT", fecha: "8 de diciembre de 2025", escanos:["PP","PSOE","PP","PSOE","PP","VOX","PP","PSOE","PP","UXE","PSOE","PP","PSOE","PP","VOX","PP","PSOE","PP","PSOE","PP","UXE","PP","PSOE","VOX","PP","PSOE","PP","PSOE","PP"] },
  { nombre: "ELECTOPANEL", fecha: "8 de diciembre de 2025", escanos:["PP","PSOE","PP","PSOE","PP","VOX","PSOE","PP","PP","PSOE","PP","VOX","UXE","PSOE","PP","PSOE","PP","PP","PSOE","VOX","PP","PSOE","PP","PSOE","PP","VOX","UXE","PP","PSOE"] },
  { nombre: "GESOP", fecha: "14 de diciembre de 2025", escanos:["PP","PSOE","PP","VOX","PSOE","PP","PP","UXE","VOX","PSOE","PP","PSOE","PP","VOX","PP","PSOE","PP","UXE","VOX","PSOE","PP","PP","PSOE","VOX","PP","PSOE","PP","UXE","VOX"] },
  { nombre: "GAD3", fecha: "14 de diciembre de 2025", escanos:["PP","PSOE","PP","PP","VOX","PSOE","PP","UXE","PP","PSOE","PP","VOX","PSOE","PP","PP","PSOE","UXE","PP","PP","VOX","PSOE","PP","PP","PSOE","PP","UXE","VOX","PSOE","PP"] },
  { nombre: "SIGMA 2", fecha: "14 de diciembre de 2025", escanos:["PP","PSOE","PP","VOX","PP","PSOE","PP","UXE","PSOE","PP","VOX","PP","PSOE","PP","VOX","PP","PSOE","PP","UXE","PSOE","PP","VOX","PP","PSOE","PP","PSOE","PP","VOX","UXE"] },
  { nombre: "ELECTOPANEL", fecha: "14 de diciembre de 2025", escanos:["PP","PSOE","PP","PSOE","PP","VOX","PP","PSOE","PP","UXE","PSOE","PP","VOX","PP","PSOE","PP","PSOE","PP","VOX","PP","PSOE","UXE","PP","PSOE","PP","VOX","PP","PSOE","PP"] },
  { nombre: "DYM", fecha: "15 de diciembre de 2025", escanos:["PP","PSOE","PP","PP","PSOE","VOX","PP","PSOE","PP","UXE","PP","PSOE","VOX","PP","PSOE","PP","PP","PSOE","PP","VOX","PSOE","UXE","PP","PP","PSOE","PP","PSOE","VOX","PP"] },
  { nombre: "40DB", fecha: "15 de diciembre de 2025", escanos:["PP","PSOE","PP","VOX","PSOE","PP","PP","PSOE","PP","UXE","VOX","PSOE","PP","PP","PSOE","PP","VOX","PSOE","PP","PP","UXE","PSOE","PP","VOX","PSOE","PP","PP","PSOE","PP"] },
  { nombre: "TARGET POINT", fecha: "15 de diciembre de 2025", escanos:["PP","PSOE","PP","PP","VOX","PSOE","PP","UXE","PP","PSOE","PP","VOX","PSOE","PP","PP","PSOE","UXE","PP","VOX","PP","PSOE","PP","PP","PSOE","VOX","PP","UXE","PSOE","PP"] },
  { nombre: "CELESTE TEL", fecha: "15 de diciembre de 2025", escanos:["PP","PSOE","PP","PSOE","PP","VOX","PP","PSOE","UXE","PP","PSOE","PP","VOX","PP","PSOE","PP","PSOE","PP","UXE","PP","PSOE","VOX","PP","PSOE","PP","PSOE","PP","VOX","PP"] },
  { nombre: "SOCIOMÉTRICA", fecha: "15 de diciembre de 2025", escanos:["PP","PSOE","PP","PP","PSOE","VOX","PP","PSOE","PP","UXE","PP","PSOE","VOX","PP","PP","PSOE","PP","PSOE","PP","VOX","PP","UXE","PSOE","PP","PP","PSOE","VOX","PP","PSOE"] },
  { nombre: "DATA 10", fecha: "15 de diciembre de 2025", escanos:["PP","PSOE","PP","PP","VOX","PSOE","PP","PP","UXE","PSOE","PP","VOX","PP","PSOE","PP","PP","PSOE","PP","UXE","VOX","PP","PSOE","PP","PP","PSOE","VOX","PP","PP","PSOE"] },
];

// Encuestas precampaña 2025 (seleccionadas manualmente)
const encuestas2025 = [
  encuestas[7],
  encuestas[8],
  encuestas[9],
  encuestas[10],
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
  const yLabels = Array.from({length:29}, (_,i)=> (i+1).toString());
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
          ticks:{autoSkip:false}  // <--- todos los números del 1 al 29
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