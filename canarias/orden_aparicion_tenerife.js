// Colores por partido
const colores = { PP:"#0000FF", PSOE:"#FF0000", VOX:"#008000", CCA:"#01ADD7"};

// Todas las encuestas
const encuestas = [
  { nombre: "EM ANALYTICS", fecha: "28 de mayo de 2024", escanos:["CCA","PSOE","PP","CCA","PSOE","CCA","PSOE","PP","CCA","PSOE","CCA","PSOE","PP","VOX","CCA"] }, 
  { nombre: "ÁGORA INTEGRAL", fecha: "30 de mayo de 2025", escanos:["CCA","PSOE","PP","CCA","PSOE","CCA","VOX","PP","PSOE","CCA","CCA","PP","PSOE","CCA","PSOE"] }, 
  { nombre: "SIGMA 2", fecha: "31 de mayo de 2025", escanos:["CCA","PSOE","PP","CCA","PSOE","CCA","PP","PSOE","VOX","CCA","CCA","PP","PSOE","CCA","PSOE"] }, 
  { nombre: "OEI", fecha: "14 de enero de 2026", escanos:["CCA","PSOE","CCA","PP","PSOE","CCA","VOX","CCA","PSOE","PP","CCA","PSOE","CCA","PP","PSOE"] },  
  
];

// Encuestas precampaña 2025 (seleccionadas manualmente)
const encuestas2025 = [
  encuestas[1],
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
  const yLabels = Array.from({length:15}, (_,i)=> (i+1).toString());
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