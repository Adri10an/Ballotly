// Colores por partido
const colores = { PP:"#0000FF", PSOE:"#FF0000", VOX:"#6ae80d", PA: "#C42065", AA: "#24C87E", SALF: "#5f4238"};

// Todas las encuestas
const encuestas = [
{ nombre: "CENTRA", fecha: "24 de octubre de 2022", escanos:["PP","PP","PSOE","PP","PP","PA","VOX","PP","PSOE","PP","PP","PSOE","PP","PA","VOX","PP","PP"] },
  { nombre: "CEA", fecha: "19 de diciembre de 2022", escanos:["PP","PP","PSOE","PP","VOX","PA","PP","PP","PSOE","PP","PP","VOX","PA","PP","PSOE","PP","AA"] }, 
 { nombre: "ELECTOPANEL", fecha: "23 de febrero de 2023", escanos:["PP","PP","PSOE","PP","PP","VOX","PSOE","PP","PA","PP","PP","PSOE","PP","VOX","PP","PSOE","PP"] }, 
{ nombre: "CEA", fecha: "10 de abril de 2023", escanos:["PP","PP","PSOE","PP","VOX","PP","PSOE","PP","PA","PP","PSOE","VOX","PP","PP","PSOE","PP","PP"] }, 
 { nombre: "CEA", fecha: "3 de julio de 2023", escanos:["PP","PP","PSOE","PP","VOX","PP","PSOE","PP","PA","PP","PSOE","PP","VOX","PP","PP","PSOE","PP"] }, 
  { nombre: "CENTRA", fecha: "29 de abril de 2024", escanos:["PP","PP","PSOE","PP","VOX","PP","PP","PSOE","PA","PP","PP","VOX","PP","PSOE","PP","PP","VOX"] },  
 { nombre: "CENTRA", fecha: "21 de octubre de 2024", escanos:["PP","PSOE","PP","PP","PSOE","PP","VOX","PA","PP","PSOE","PP","PP","PSOE","PP","VOX","PP","PA"] }, 
  { nombre: "DATA10", fecha: "25 de noviembre de 2024", escanos:["PP","PP","PSOE","PP","VOX","PP","PSOE","PP","PA","PP","VOX","PP","PSOE","PP","PP","PSOE","PP"] }, 
{ nombre: "SOCIAL DATA", fecha: "28 de noviembre de 2024", escanos:["PP","PP","PSOE","PP","VOX","PP","PSOE","PP","PP","VOX","PA","PSOE","PP","PP","PSOE","PP","AA"] },
 { nombre: "SIGMA 2", fecha: "8 de diciembre de 2024", escanos:["PP","PP","PSOE","PP","VOX","PP","PA","PSOE","PP","PP","VOX","PP","PSOE","PP","PA","PP","PSOE"] }, 
 { nombre: "CENTRA", fecha: "16 de diciembre de 2024", escanos:["PP","PP","PSOE","PP","VOX","PP","PP","PSOE","PP","PA","PP","VOX","PSOE","PP","PP","PP","PSOE"] }, 
 { nombre: "NCREPORT", fecha: "27 de enero de 2025", escanos:["PP","PP","PSOE","PP","VOX","PP","PP","PSOE","PP","PA","PP","VOX","PSOE","PP","PP","PP","PSOE",] }, 
 { nombre: "SOCIOMÉTRICA", fecha: "27 de febrero de 2025", escanos:["PP","PSOE","PP","PP","PSOE","PP","VOX","PP","PSOE","PP","PP","PA","PSOE","PP","VOX","PP","PSOE"] },  
 { nombre: "SIGMA 2", fecha: "2 de marzo de 2025", escanos:["PP","PP","PSOE","PP","VOX","PP","PSOE","PP","PA","PP","PSOE","PP","VOX","PP","PP","PSOE","PP"] },
 { nombre: "CENTRA", fecha: "23 de abril de 2025", escanos:["PP","PP","PSOE","PP","VOX","PP","PSOE","PP","PA","PP","VOX","PSOE","PP","PP","PP","PSOE","VOX"] }, 
 { nombre: "ELECTOPANEL", fecha: "30 de abril de 2025", escanos:["PP","PP","PSOE","PP","PP","VOX","PSOE","PP","PP","PSOE","PP","PA","PP","VOX","PSOE","PP","AA"] },  
 { nombre: "GAD 3", fecha: "16 de junio de 2025", escanos:["PP","PP","PSOE","PP","VOX","PP","PSOE","PP","PP","PA","VOX","PSOE","PP","PP","PP","PSOE","VOX"] },  
  { nombre: "CENTRA", fecha: "17 de julio de 2025", escanos:["PP","PP","PSOE","VOX","PP","PP","PA","PP","PSOE","VOX","PP","PP","PP","PSOE","PA","VOX","PP"] }, 
 { nombre: "ELECTOPANEL", fecha: "30 de septiembre de 2025", escanos:["PP","PP","PSOE","PP","VOX","PP","PSOE","PA","PP","PP","PSOE","PP","VOX","PP","PP","PSOE","PA"] }, 
 { nombre: "SOCIOMÉTRICA", fecha: "13 de octubre de 2025", escanos:["PP","PP","PSOE","PP","VOX","PP","PSOE","PP","PP","PA","PSOE","VOX","PP","PP","PSOE","PP","PP"] }, 
 { nombre: "CENTRA", fecha: "20 de octubre de 2025", escanos:["PP","PP","PSOE","VOX","PP","PP","PSOE","PP","PA","VOX","PP","PSOE","PP","PP","VOX","PSOE","PP"] }, 
 { nombre: "ELECTOPANEL", fecha: "31 de octubre de 2025", escanos:["PP","PP","PSOE","PP","VOX","PP","PSOE","PA","PP","PP","VOX","PSOE","PP","PP","PSOE","PP","PA"] },  
 { nombre: "CENTRA", fecha: "15 de diciembre de 2025", escanos:["PP","PP","PSOE","VOX","PP","PP","PSOE","VOX","PP","PA","PP","PP","PSOE","VOX","PP","AA","PP"] }, 
 { nombre: "SOCIALDATA", fecha: "17 de febrero de 2026", escanos:["PP","PP","VOX","PSOE","PP","PP","PP","VOX","PSOE","PP","PP","AA","PA","VOX","PP","PSOE","PP"] }, 
  { nombre: "SIGMA 2", fecha: "28 de febrero de 2026", escanos:["PP","PP","VOX","PSOE","PP","PP","PA","VOX","PSOE","PP","PP","PP","VOX","PSOE","AA","PP","PP"] }, 
  { nombre: "GESOP", fecha: "28 de febrero de 2026", escanos:["PP","PP","VOX","PSOE","PP","PP","VOX","PSOE","PP","PP","VOX","PA","PP","PSOE","PP","VOX","PP"] },
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
  const yLabels = Array.from({length:17}, (_,i)=> (i+1).toString());
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