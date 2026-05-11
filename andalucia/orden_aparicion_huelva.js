// Colores por partido
const colores = { PP:"#0000FF", PSOE:"#FF0000", VOX:"#008000", PA: "#C42065", AA: "#24C87E", SALF: "#5f4238"};

// Todas las encuestas
const encuestas = [
{ nombre: "CENTRA", fecha: "24 de octubre de 2022", escanos:["PP","PSOE","PP","PP","PSOE","PP","VOX","PA","PP","PSOE","PP"] },
  { nombre: "CEA", fecha: "19 de diciembre de 2022", escanos:["PP","PSOE","PP","PP","VOX","PSOE","PP","PA","PP","PSOE","AA"] }, 
 { nombre: "ELECTOPANEL", fecha: "23 de febrero de 2023", escanos:["PP","PSOE","PP","PP","PSOE","PP","VOX","PP","PSOE","PP","PA"] }, 
 { nombre: "CEA", fecha: "10 de abril de 2023", escanos:["PP","PSOE","PP","PP","PSOE","VOX","PP","PSOE","PP","PA","PP"] }, 
 { nombre: "CEA", fecha: "3 de julio de 2023", escanos:["PP","PSOE","PP","PP","PSOE","VOX","PP","PSOE","PP","PP","PSOE"] },
  { nombre: "CENTRA", fecha: "29 de abril de 2024", escanos:["PP","PSOE","PP","PP","VOX","PSOE","PP","PP","PSOE","PP","PA"] },  
 { nombre: "CENTRA", fecha: "21 de octubre de 2024", escanos:["PP","PSOE","PP","PSOE","PP","PP","VOX","PSOE","PP","PSOE","PP"] },  
  { nombre: "DATA10", fecha: "25 de noviembre de 2024", escanos:["PP","PSOE","PP","PP","PSOE","VOX","PP","PSOE","PP","PP","PSOE"] }, 
 { nombre: "SOCIAL DATA", fecha: "28 de noviembre de 2024", escanos:["PP","PSOE","PP","PP","PSOE","VOX","PP","PSOE","PP","PP","PSOE"] },
 { nombre: "SIGMA 2", fecha: "8 de diciembre de 2024", escanos:["PP","PSOE","PP","PP","PSOE","VOX","PP","PA","PSOE","PP","PP"] }, 
 { nombre: "CENTRA", fecha: "16 de diciembre de 2024", escanos:["PP","PSOE","PP","PP","VOX","PSOE","PP","PP","PSOE","PP","PA"] }, 
 { nombre: "NCREPORT", fecha: "27 de enero de 2025", escanos:["PP","PSOE","PP","PP","PSOE","VOX","PP","PP","PSOE","PP","PSOE"] },  
 { nombre: "SOCIOMÉTRICA", fecha: "27 de febrero de 2025", escanos:["PP","PSOE","PP","PSOE","PP","PSOE","PP","VOX","PP","PSOE","PP"] }, 
 { nombre: "SIGMA 2", fecha: "2 de marzo de 2025", escanos:["PP","PSOE","PP","PP","PSOE","VOX","PP","PSOE","PP","PP","PA"] },
 { nombre: "CENTRA", fecha: "23 de abril de 2025", escanos:["PP","PSOE","PP","PP","VOX","PSOE","PP","PSOE","PP","PA","PP"] },
 { nombre: "ELECTOPANEL", fecha: "30 de abril de 2025", escanos:["PP","PSOE","PP","PP","PSOE","PP","VOX","PSOE","PP","PP","PSOE"] },  
 { nombre: "GAD 3", fecha: "16 de junio de 2025", escanos:["PP","PSOE","PP","PSOE","PP","VOX","PP","PSOE","PP","PSOE","PP"] }, 
  { nombre: "CENTRA", fecha: "17 de julio de 2025", escanos:["PP","PSOE","PP","PP","VOX","PSOE","PP","PA","PP","PSOE","PP"] }, 
 { nombre: "ELECTOPANEL", fecha: "30 de septiembre de 2025", escanos:["PP","PSOE","PP","PP","PSOE","VOX","PP","PSOE","PP","PA","PP"] }, 
 { nombre: "SOCIOMÉTRICA", fecha: "13 de octubre de 2025", escanos:["PP","PSOE","PP","PSOE","PP","VOX","PP","PSOE","PP","PSOE","PP"] }, 
 { nombre: "CENTRA", fecha: "20 de octubre de 2025", escanos:["PP","PSOE","PP","PP","VOX","PSOE","PP","PSOE","PP","PA","PP"] }, 
 { nombre: "ELECTOPANEL", fecha: "31 de octubre de 2025", escanos:["PP","PSOE","PP","PP","PSOE","VOX","PP","PSOE","PP","PA","PP"] },  
 { nombre: "CENTRA", fecha: "15 de diciembre de 2025", escanos:["PP","PSOE","PP","VOX","PP","PSOE","PP","VOX","PSOE","PP","PP"] }, 
 { nombre: "SOCIALDATA", fecha: "17 de febrero de 2026", escanos:["PP","PSOE","PP","VOX","PP","PSOE","PP","PP","VOX","PSOE","PP"] }, 
  { nombre: "SIGMA 2", fecha: "28 de febrero de 2026", escanos:["PP","PSOE","PP","VOX","PP","PSOE","PP","VOX","PP","PSOE","PA"] }, 
  { nombre: "GESOP", fecha: "28 de febrero de 2026", escanos:["PP","PSOE","PP","VOX","PP","PSOE","PP","VOX","PP","PSOE","PP"] },
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