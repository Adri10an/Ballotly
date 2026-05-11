// Colores por partido
const colores = { PP:"#0000FF", PSOE:"#FF0000", VOX:"#008000", PODEMOS: "#800080", IU :"#B22222"};

// Todas las encuestas
const encuestas = [
 { nombre: "ELECTOPANEL", fecha: "30 de enero de 2026", escanos:["PP","PSOE","PP","VOX","PSOE","PP","PSOE","PP","VOX","PSOE","PP"] }, 
 { nombre: "ELECTOPANEL", fecha: "9 de febrero de 2026", escanos:["PP","PSOE","PP","VOX","PSOE","PP","PSOE","PP","VOX","PSOE","PP"] },
 { nombre: "ELECTOPANEL", fecha: "16 de febrero de 2026", escanos:["PP","PSOE","VOX","PP","PSOE","PP","PSOE","VOX","PP","PSOE","PP"] },
 { nombre: "ELECTOPANEL", fecha: "19 de febrero de 2026", escanos:["PP","PSOE","VOX","PP","PSOE","PP","PSOE","VOX","PP","PSOE","PP"] },
 { nombre: "CIS", fecha: "20 de febrero de 2026", escanos:["PSOE","PP","PSOE","PP","VOX","PSOE","PP","PSOE","PP","VOX","IU"] },
 { nombre: "SIGMA2", fecha: "23 de febrero de 2026", escanos:["PP","PSOE","PP","PSOE","VOX","PP","PSOE","PP","PSOE","VOX","PP"] },
 { nombre: "ELECTOPANEL", fecha: "23 de febrero de 2026", escanos:["PP","PSOE","VOX","PP","PSOE","PP","PSOE","VOX","PP","PSOE","PP"] },
 { nombre: "NCREPORT", fecha: "2 de marzo de 2026", escanos:["PP","PSOE","VOX","PP","PSOE","PP","PSOE","VOX","PP","PSOE","VOX"] },
 { nombre: "SOCIOMÉTRICA", fecha: "2 de marzo de 2026", escanos:["PP","PSOE","VOX","PP","PSOE","PP","PSOE","VOX","PP","PSOE","VOX",] },
 { nombre: "ELECTOPANEL", fecha: "2 de marzo de 2026", escanos:["PP","PSOE","VOX","PP","PSOE","PP","PSOE","VOX","PP","PSOE","PP"] },
  { nombre: "SIGMA2", fecha: "6 de marzo de 2026", escanos:["PP","PSOE","VOX","PP","PSOE","PP","PSOE","VOX","PP","PSOE","PP"] },
 { nombre: "GESOP", fecha: "8 de marzo de 2026", escanos:["PSOE","PP","VOX","PSOE","PP","PSOE","PP","VOX","PSOE","PP","VOX"] },
 { nombre: "SIGMA2", fecha: "8 de marzo de 2026", escanos:["PP","PSOE","VOX","PP","PSOE","PP","PSOE","VOX","PP","PSOE","PP"] },
 { nombre: "GAD3", fecha: "8 de marzo de 2026", escanos:["PP","PSOE","VOX","PP","PSOE","PP","PSOE","VOX","PP","PSOE","PP"] },
 { nombre: "40DB", fecha: "9 de marzo de 2026", escanos:["PSOE","PP","VOX","PSOE","PP","PSOE","PP","VOX","PSOE","PP","VOX"] },
 { nombre: "NCREPORT", fecha: "9 de marzo de 2026", escanos:["PP","PSOE","VOX","PP","PSOE","PP","PSOE","VOX","PP","PSOE","PP"] },
 { nombre: "HAMALGAMA MÉTRICA", fecha: "9 de marzo de 2026", escanos:["PP","PSOE","VOX","PP","PSOE","PP","PSOE","VOX","PP","PSOE","VOX"] },
 { nombre: "TARGET POINT", fecha: "9 de marzo de 2026", escanos:["PSOE","PP","VOX","PSOE","PP","PSOE","VOX","PP","PSOE","PP","VOX"] },
 { nombre: "CELESTE TEL", fecha: "9 de marzo de 2026", escanos:["PP","PSOE","VOX","PP","PSOE","PP","PSOE","VOX","PP","PSOE","PP"] },
 { nombre: "ELECTOPANEL", fecha: "9 de marzo de 2026", escanos:["PP","PSOE","VOX","PP","PSOE","PP","PSOE","VOX","PP","PSOE","PP"] },
 { nombre: "SOCIOMÉTRICA", fecha: "9 de marzo de 2026", escanos:["PP","PSOE","VOX","PP","PSOE","PP","PSOE","VOX","PP","PSOE","PP"] },
 { nombre: "DATA10", fecha: "9 de marzo de 2026", escanos:["PP","PSOE","VOX","PP","PSOE","PP","PSOE","VOX","PP","PSOE","PP"] },
];

// Encuestas precampaña 2025 (seleccionadas manualmente)
const encuestas2025 = [
  encuestas[0],
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
  const yLabels = Array.from({length:11}, (_,i)=> (i+1).toString());
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