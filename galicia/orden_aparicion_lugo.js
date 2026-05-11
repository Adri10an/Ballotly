// Colores por partido
const colores = { PP:"#0000FF", PSOE:"#FF0000", VOX:"#008000", PODEMOS:"#800080", BNG: "#74b1e0",  };

// Todas las encuestas
const encuestas = [
   { nombre: "SONDAXE", fecha: "6 de octubre de 2024", escanos:["PP","BNG","PP","PP","PSOE","BNG","PP","PP","BNG","PP","PSOE","PP","BNG","PP"] },
   { nombre: "SONDAXE", fecha: "16 de diciembre de 2024", escanos:["PP","BNG","PP","PP","PSOE","BNG","PP","PP","BNG","PP","PSOE","PP","BNG","PP"] },
   { nombre: "SONDAXE", fecha: "15 de febrero de 2025", escanos:["PP","PP","BNG","PSOE","PP","PP","BNG","PP","PSOE","PP","BNG","PP","PP","BNG"] },
   { nombre: "SIGMA 2", fecha: "25 de julio de 2025", escanos:["PP","PP","BNG","PP","PSOE","PP","BNG","PP","PP","BNG","PP","PSOE","PP","PP"] },
   { nombre: "SONDAXE", fecha: "28 de septiembre de 2025", escanos:["PP","PP","BNG","PP","PSOE","PP","BNG","PP","PP","BNG","PSOE","PP","PP","BNG"] },
   { nombre: "ELECTOPANEL", fecha: "30 de octubre de 2025", escanos:["PP","BNG","PP","PP","BNG","PSOE","PP","PP","BNG","PP","BNG","PP","PSOE","PP"] },
   { nombre: "SONDAXE", fecha: "15 de diciembre de 2025", escanos:["PP","BNG","PP","PP","PSOE","BNG","PP","PP","BNG","PP","PSOE","PP","BNG","PP"] },
   { nombre: "SONDAXE", fecha: "1 de marzo de 2026", escanos:["PP","PP","BNG","PP","PSOE","PP","BNG","PP","PP","BNG","PSOE","PP","PP","BNG"] },
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