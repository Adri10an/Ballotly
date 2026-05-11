// Colores por partido
const colores = { PP:"#0000FF", PSOE:"#FF0000", VOX:"#008000",PODEMOS: "#800080", SALF: "#84654e" };

// Todas las encuestas
const encuestas = [
  { nombre: "CEMOP", fecha: "17 de julio de 2023", escanos:["PP","PSOE","PP","VOX","PP","PSOE","PP","PP","VOX","PSOE","PP","PP","PSOE","VOX","PODEMOS","PP","PSOE","PP","PP","VOX","PSOE","PP","PP","PSOE","VOX","PP","PP","PSOE","PP","VOX","PODEMOS","PSOE","PP","PP","PSOE","VOX","PP","PP","PSOE","PP","VOX","PP","PSOE","PP","PSOE"] },
  { nombre: "CEMOP", fecha: "18 de enero de de 2024", escanos:["PP","PSOE","PP","VOX","PP","PSOE","PP","VOX","PP","PSOE","PP","VOX","PSOE","PP","PP","PODEMOS","VOX","PSOE","PP","PP","PSOE","VOX","PP","PP","PSOE","VOX","PP","PSOE","PP","VOX","PP","PSOE","PP","PODEMOS","VOX","PP","PSOE","PP","VOX","PSOE","PP","PP","PSOE","VOX","PP"] },
  { nombre: "CEMOP", fecha: "18 de abril de de 2024", escanos:["PP","PSOE","PP","VOX","PP","PSOE","PP","PP","VOX","PSOE","PP","PP","PSOE","PP","VOX","PODEMOS","PP","PSOE","PP","PP","VOX","PSOE","PP","PP","PSOE","PP","VOX","PP","PSOE","PP","PP","VOX","PODEMOS","PSOE","PP","PP","PSOE","VOX","PP","PP","PSOE","PP","VOX","PP","PSOE"] },
  { nombre: "CEMOP", fecha: "20 de junio de de 2024", escanos:["PP","PSOE","PP","VOX","PP","PSOE","PP","PP","PSOE","VOX","PP","PSOE","PP","VOX","PP","PSOE","PP","PODEMOS","PP","PSOE","VOX","PP","PSOE","PP","VOX","PP","PSOE","PP","PP","PSOE","VOX","PP","PP","PSOE","PP","VOX","PSOE","PP","PODEMOS","PP","PSOE","VOX","PP","PP","PSOE"] },
  { nombre: "DATA10", fecha: "17 de julio de de 2024", escanos:["PP","PSOE","PP","PP","VOX","PSOE","PP","PP","PSOE","PP","VOX","PSOE","PP","PP","PSOE","PP","VOX","PP","PSOE","PP","PSOE","PP","PP","VOX","PSOE","PODEMOS","PP","PP","PSOE","PP","VOX","PSOE","PP","PP","PSOE","PP","VOX","PP","PSOE","PP","PSOE","PP","VOX","PP","PSOE"] },
  { nombre: "NCREPORT", fecha: "22 de julio de de 2024", escanos:["PP","PSOE","PP","VOX","PP","PSOE","PP","PP","VOX","PSOE","PP","PP","PSOE","PP","VOX","PP","PSOE","PP","PP","VOX","PSOE","PP","PP","PSOE","PP","VOX","PP","PODEMOS","PSOE","PP","PP","VOX","PSOE","PP","PP","PSOE","PP","VOX","PP","PSOE","PP","PP","VOX","PSOE","PP"] },
  { nombre: "SIGMA 2", fecha: "23 de septiembre de 2024", escanos:["PP","PSOE","PP","VOX","PP","PSOE","PP","PP","PSOE","VOX","PP","PP","PSOE","PP","VOX","PSOE","PP","PP","PSOE","PODEMOS","PP","VOX","PP","PSOE","PP","PP","PSOE","VOX","PP","SALF","PSOE","PP","PP","VOX","PSOE","PP","PP","PSOE","VOX","PP","PP","PSOE","PODEMOS","PP","VOX"] },
  { nombre: "SYM", fecha: "21 de octubre de 2024", escanos:["PP","PSOE","PP","VOX","PP","PSOE","PP","VOX","PP","PSOE","PP","PSOE","VOX","PP","PP","PSOE","PP","VOX","PP","PSOE","PP","PODEMOS","VOX","PP","PSOE","PP","PSOE","VOX","PP","PP","PSOE","PP","VOX","PP","PSOE","PP","VOX","PP","PSOE","PP","PSOE","VOX","PP","PP","PSOE"] },
  { nombre: "CEMOP", fecha: "24 de octubre de 2024", escanos:["PP","PSOE","PP","VOX","PP","PSOE","PP","VOX","PP","PSOE","PP","PP","VOX","PSOE","PP","PODEMOS","PSOE","PP","VOX","PP","PSOE","PP","VOX","PP","PSOE","PP","PP","VOX","PSOE","PP","PSOE","PP","VOX","PP","PODEMOS","PSOE","PP","VOX","PP","PSOE","PP","PP","VOX","PSOE","PP"] },
  { nombre: "OBEDE", fecha: "4 de diciembre de 2024", escanos:["PP","PSOE","PP","VOX","PP","PSOE","PP","VOX","PP","PSOE","PP","PP","VOX","PSOE","PP","PP","VOX","PSOE","PP","PP","VOX","PSOE","PP","PP","PSOE","PP","VOX","PP","PSOE","PP","VOX","PP","PSOE","PP","VOX","PP","PSOE","PP","PP","VOX","PSOE","PP","PP","VOX","PSOE"] },
  { nombre: "ELECTOPANEL", fecha: "30 de diciembre de 2024", escanos:["PP","PSOE","PP","PSOE","PP","VOX","PP","PSOE","PP","PSOE","PP","VOX","PSOE","PP","PP","PSOE","PP","VOX","PSOE","PP","PSOE","PP","PP","PSOE","VOX","PODEMOS","PP","PSOE","PP","PSOE","PP","VOX","PP","PSOE","PP","PSOE","PP","VOX","PSOE","PP","PP","PSOE","PP","VOX","PSOE"] },
  { nombre: "CEMOP", fecha: "20 de enero de 2025", escanos:["PP","PSOE","PP","VOX","PP","PSOE","PP","VOX","PP","PSOE","PP","VOX","PP","PSOE","PP","PP","VOX","PSOE","PP","PP","VOX","PSOE","PP","PP","VOX","PSOE","PP","PP","PODEMOS","PSOE","VOX","PP","PP","PSOE","PP","VOX","PP","PSOE","PP","VOX","PP","PSOE","PP","VOX","PP"] },
  { nombre: "CEMOP", fecha: "2 de mayo de 2025", escanos:["PP","PSOE","VOX","PP","PP","PSOE","VOX","PP","PP","PSOE","VOX","PP","PSOE","PP","VOX","PP","PSOE","PP","VOX","PP","PODEMOS","PSOE","PP","VOX","PP","PSOE","PP","VOX","PSOE","PP","PP","VOX","PSOE","PP","PP","VOX","PSOE","PP","PP","VOX","PSOE","PP","PODEMOS","PSOE","PP"] },
  { nombre: "SYM", fecha: "5 de mayo de 2025", escanos:["PP","PSOE","VOX","PP","PP","PSOE","VOX","PP","PSOE","PP","VOX","PP","PSOE","PP","VOX","PSOE","PP","VOX","PP","PSOE","PODEMOS","PP","VOX","PSOE","PP","PP","VOX","PSOE","PP","PSOE","PP","VOX","PP","PSOE","VOX","PP","PP","PSOE","VOX","PP","PSOE","PP","PODEMOS","VOX","PP"] },
  { nombre: "SIGMA 2", fecha: "8 de junio de 2025", escanos:["PP","PSOE","PP","VOX","PP","PSOE","PP","PSOE","PP","VOX","PP","PSOE","PP","VOX","PP","PSOE","PP","PSOE","PP","VOX","PP","PSOE","PODEMOS","PP","VOX","PSOE","PP","PP","PSOE","PP","VOX","PP","PSOE","PP","VOX","PSOE","PP","PP","PSOE","PP","VOX","PSOE","PP","PP","PSOE"] },
  { nombre: "ELECTOPANEL", fecha: "29 de septiembre de 2025", escanos:["PP","PSOE","PP","PSOE","VOX","PP","PP","PSOE","PP","PSOE","VOX","PP","PSOE","PP","PODEMOS","PP","PSOE","VOX","PP","PSOE","PP","PP","PSOE","VOX","PP","PSOE","PP","PSOE","PP","VOX","PP","PSOE","PODEMOS","PP","PSOE","VOX","PP","PP","PSOE","PP","PSOE","VOX","PP","PSOE","PP"] },
  { nombre: "CEMOP", fecha: "1 de octubre de 2025", escanos:["PP","VOX","PSOE","PP","VOX","PSOE","PP","VOX","PP","PSOE","PP","VOX","PSOE","PP","PODEMOS","VOX","PSOE","PP","VOX","PP","PSOE","PP","VOX","PSOE","PP","VOX","PP","PSOE","VOX","PP","PSOE","PODEMOS","VOX","PP","PSOE","PP","VOX","PP","PSOE","VOX","PP","PSOE","VOX","PP","PP"] },
  { nombre: "UCAM", fecha: "16 de diciembre de 2025", escanos:["PP","VOX","PSOE","PP","VOX","PP","PSOE","PP","VOX","PSOE","PP","VOX","PP","PSOE","PP","VOX","PP","PSOE","VOX","PP","PODEMOS","PSOE","VOX","PP","PP","VOX","PSOE","PP","VOX","PP","PSOE","PP","VOX","PSOE","PP","VOX","PP","PSOE","VOX","PP","PSOE","PP","VOX","PP","PODEMOS"] },
  { nombre: "CEMOP", fecha: "19 de diciembre de 2025", escanos:["PP","VOX","PSOE","PP","PP","VOX","PSOE","PP","VOX","PSOE","PP","PP","VOX","PSOE","PODEMOS","PP","VOX","PP","PSOE","PP","VOX","PSOE","PP","VOX","PP","PSOE","PP","VOX","PSOE","PP","VOX","PODEMOS","PP","PSOE","PP","VOX","PP","PSOE","VOX","PP","PSOE","PP","VOX","PP","PSOE"] },
  { nombre: "CEMOP", fecha: "2 de marzo de 2026", escanos:["PP","VOX","PSOE","PP","VOX","PP","PSOE","PP","VOX","PSOE","PP","VOX","PP","PSOE","PP","VOX","PSOE","PP","PODEMOS","VOX","PP","PSOE","PP","VOX","PSOE","PP","VOX","PP","PSOE","PP","VOX","PP","PSOE","VOX","PP","PSOE","PP","VOX","PP","PSOE","PODEMOS","VOX","PP","PSOE","PP"] },
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
  const yLabels = Array.from({length:45}, (_,i)=> (i+1).toString());
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
// Precampaña 2027: encuestas de 2026 en adelante
const encuestas2027 = encuestas.filter(e => e.fecha.includes("2026"));

// Dibujar ambos gráficos
crearGrafico(encuestas2027, "escanosChart2025");
crearGrafico(encuestas, "escanosChartTodos");

// Mostrar recuentos
mostrarRecuento(encuestas2027, "recuento2025");
mostrarRecuento(encuestas, "recuentoTodos");
