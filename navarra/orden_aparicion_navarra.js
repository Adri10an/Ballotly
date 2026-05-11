// Colores por partido
const colores = { PP:"#0000FF", PSOE:"#FF0000", VOX:"#008000", UPN: "#8B4513", PODEMOS: "#800080", EHBILDU: "#03cfb5", GBAI: "#eeb5b0"  };

// Todas las encuestas
const encuestas = [
  { nombre: "ELECTOPANEL", fecha: "29 de mayo de 2024", escanos:["UPN","PSOE","EHBILDU","UPN","PSOE","PP","UPN","EHBILDU","GBAI","UPN","PSOE","UPN","EHBILDU","PSOE","PP","UPN","PSOE","EHBILDU","GBAI","UPN","VOX","PODEMOS","UPN","PSOE","PP","EHBILDU","UPN","PSOE","UPN","EHBILDU","GBAI","PSOE","UPN","PP","EHBILDU","UPN","PSOE","UPN","PSOE","EHBILDU","GBAI","UPN","PP","PSOE","UPN","EHBILDU","VOX","PODEMOS","UPN","PSOE"] },
  { nombre: "INTERNA UPN", fecha: "29 de mayo de 2024", escanos:["UPN","EHBILDU","PSOE","UPN","GBAI","UPN","EHBILDU","PSOE","UPN","EHBILDU","UPN","PSOE","GBAI","PP","PODEMOS","UPN","EHBILDU","VOX","PSOE","UPN","EHBILDU","UPN","GBAI","PSOE","UPN","EHBILDU","UPN","PSOE","EHBILDU","UPN","GBAI","PP","PSOE","PODEMOS","UPN","EHBILDU","VOX","UPN","PSOE","EHBILDU","GBAI","UPN","UPN","EHBILDU","PSOE","UPN","GBAI","EHBILDU","UPN","PSOE"] },
  { nombre: "SIGMA 2", fecha: "1 de febrero de 2025", escanos:["UPN","PSOE","EHBILDU","UPN","PSOE","EHBILDU","UPN","GBAI","PSOE","PP","UPN","EHBILDU","PSOE","UPN","PODEMOS","EHBILDU","UPN","VOX","PSOE","UPN","GBAI","PSOE","EHBILDU","PP","UPN","PSOE","EHBILDU","UPN","PSOE","UPN","EHBILDU","PODEMOS","GBAI","UPN","PSOE","EHBILDU","PP","UPN","VOX","PSOE","UPN","EHBILDU","PSOE","UPN","GBAI","PSOE","EHBILDU","UPN","PODEMOS","PP"] },
  { nombre: "SIGMA 2", fecha: "2 de mayo de 2025", escanos:["UPN","PSOE","EHBILDU","UPN","PSOE","EHBILDU","UPN","PSOE","PP","GBAI","UPN","EHBILDU","PSOE","UPN","PODEMOS","EHBILDU","PSOE","UPN","VOX","UPN","EHBILDU","PSOE","PP","GBAI","UPN","PSOE","EHBILDU","UPN","PSOE","EHBILDU","UPN","PODEMOS","PSOE","UPN","EHBILDU","PP","GBAI","PSOE","UPN","EHBILDU","VOX","UPN","PSOE","UPN","EHBILDU","PSOE","UPN","PP","GBAI","EHBILDU"] },
  { nombre: "ELECTOPANEL", fecha: "30 de junio de 2025", escanos:["UPN","PSOE","EHBILDU","UPN","PSOE","EHBILDU","UPN","PP","PSOE","UPN","EHBILDU","GBAI","UPN","PSOE","EHBILDU","UPN","PP","PSOE","UPN","EHBILDU","PSOE","UPN","EHBILDU","PSOE","UPN","PP","GBAI","UPN","PODEMOS","PSOE","EHBILDU","UPN","PSOE","EHBILDU","UPN","PP","PSOE","UPN","EHBILDU","UPN","PSOE","GBAI","EHBILDU","UPN","PP","PSOE","UPN","EHBILDU","PSOE","UPN"] },
  { nombre: "SIGMA 2", fecha: "2 de diciembre de 2025", escanos:["UPN","EHBILDU","PSOE","UPN","EHBILDU","GBAI","UPN","PSOE","PP","VOX","UPN","EHBILDU","PODEMOS","PSOE","UPN","EHBILDU","GBAI","UPN","PSOE","EHBILDU","UPN","PP","VOX","PSOE","UPN","EHBILDU","GBAI","PODEMOS","UPN","EHBILDU","PSOE","UPN","EHBILDU","GBAI","PP","PSOE","UPN","VOX","UPN","EHBILDU","PSOE","UPN","PODEMOS","EHBILDU","GBAI","UPN","PSOE","PP","EHBILDU","UPN"] },
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
  const yLabels = Array.from({length:50}, (_,i)=> (i+1).toString());
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