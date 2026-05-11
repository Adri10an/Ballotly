// Colores por partido
const colores = { PP:"#0000FF", PSOE:"#FF0000", VOX:"#008000" };

// Todas las encuestas
const encuestas = [
  { nombre: "ELECTOPANEL", fecha: "31 de enero de 2024", escanos:["PSOE","PP","PSOE","PP","PSOE"] },  
   { nombre: "INTERNA PSOE", fecha: "28 de mayo de 2024", escanos:["PSOE","PP","PSOE","PSOE","PP"] },
  { nombre: "NCREPORT", fecha: "6 de enero de 2025", escanos:["PSOE","PP","PSOE","PP","PSOE"] },
  { nombre: "IDUS3", fecha: "17 de enero de 2025", escanos:["PSOE","PP","PSOE","PSOE","PP"] },
  { nombre: "INTERNA PSOE", fecha: "30 de mayo de 2025", escanos:["PSOE","PP","PSOE","PP","PSOE"] },
  { nombre: "SIGMA 2", fecha: "31 de mayo de 2025", escanos:["PSOE","PP","PSOE","PSOE","PP"] },
  { nombre: "TARGET POINT", fecha: "31 de mayo de 2025", escanos:["PSOE","PP","PSOE","PP","PSOE"] },
  { nombre: "ELECTOPANEL", fecha: "30 de agosto de 2025", escanos:["PSOE","PP","PSOE","PP","PSOE"] },
  { nombre: "ELECTOPANEL", fecha: "30 de diciembre de 2025", escanos:["PSOE","PP","PSOE","PP","PSOE"] },
   { nombre: "INTERNA PSOE", fecha: "2 de enero de 2026", escanos:["PSOE","PP","PSOE","PP","PSOE"] },
   { nombre: "TARGET POINT", fecha: "7 de enero de 2026", escanos:["PSOE","PP","PSOE","PP","VOX"] },
   { nombre: "ELECTOPANEL", fecha: "30 de enero de 2026", escanos:["PSOE","PP","PSOE","PP","PSOE"] },
   { nombre: "ELECTOPANEL", fecha: "27 de febrero de 2026", escanos:["PSOE","PP","PSOE","VOX","PP"] },
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
  const yLabels = Array.from({length:5}, (_,i)=> (i+1).toString());
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