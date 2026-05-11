// Colores por partido
const colores = { PP:"#0000FF", PSOE:"#FF0000", VOX:"#008000", PODEMOS:"#800080",COMPROMIS: "#d64a26", SALF: "#5f4238"};

// Todas las encuestas
const encuestas = [
   { nombre: "DYS", fecha: "9 de octubre de 2023", escanos:["PP","PSOE","PP","COMPROMIS","PSOE","PP","VOX","PP","PSOE","PP","COMPROMIS","PSOE","PP","PSOE","VOX","PP","COMPROMIS","PP","PSOE","PP","PSOE","PP","COMPROMIS","VOX"] },
   { nombre: "DYS", fecha: "30 de diciembre de 2023 ", escanos:["PP","PSOE","PP","PSOE","COMPROMIS","PP","VOX","PP","PSOE","PP","PSOE","COMPROMIS","PP","PP","PSOE","VOX","PP","PSOE","COMPROMIS","PP","PP","PSOE","PP","PSOE"] },
   { nombre: "ELECTOPANEL", fecha: "28 de febrero de 2024", escanos:["PP","PSOE","PP","PSOE","COMPROMIS","VOX","PP","PSOE","PP","PSOE","COMPROMIS","PP","PSOE","VOX","PP","PSOE","PP","COMPROMIS","PSOE","PP","VOX","PP","PSOE","COMPROMIS"] },
   { nombre: "DYS", fecha: "24 de marzo de 2024", escanos:["PP","PSOE","PP","COMPROMIS","PSOE","PP","VOX","PP","PSOE","PP","COMPROMIS","PSOE","PP","PP","PSOE","VOX","PP","COMPROMIS","PSOE","PP","PP","PSOE","PP","COMPROMIS"] },
   { nombre: "DATA10", fecha: "15 de julio de 2024", escanos:["PP","PSOE","PP","PSOE","PP","PP","PSOE","VOX","COMPROMIS","PP","PSOE","PP","PSOE","PP","PP","PSOE","VOX","COMPROMIS","PP","PSOE","PP","PSOE","PP","PP"] },
   { nombre: "NCREPORT", fecha: "27 de julio de 2024", escanos:["PP","PSOE","PP","PSOE","PP","COMPROMIS","PSOE","VOX","PP","PP","PSOE","PP","PSOE","COMPROMIS","PP","PSOE","VOX","PP","PP","PSOE","PP","COMPROMIS","PSOE","PP"] },
   { nombre: "SOCIOMÉTRICA", fecha: "7 de octubre de 2024", escanos:["PP","PSOE","PP","PSOE","PP","VOX","COMPROMIS","PSOE","PP","PP","PSOE","PP","PSOE","VOX","PP","COMPROMIS","PSOE","PP","PP","PSOE","PP","VOX","PSOE","PP"] },
   { nombre: "DYS", fecha: "8 de octubre de 2024", escanos:["PP","PSOE","PP","PSOE","PP","COMPROMIS","PP","PSOE","VOX","PP","PSOE","PP","PP","PSOE","COMPROMIS","PP","PSOE","VOX","PP","PSOE","PP","PP","PSOE","COMPROMIS"] },
   { nombre: "LÁPIZ ESTRATÉGICO", fecha: "9 de octubre de 2024", escanos:["PP","PSOE","PP","PSOE","PP","PSOE","PP","COMPROMIS","VOX","PP","PSOE","PP","PSOE","PP","PSOE","PP","COMPROMIS","PSOE","PP","VOX","PP","PSOE","PP","PSOE"] },
   { nombre: "ELECTOPANEL", fecha: "31 de octubre de 2024", escanos:["PP","PSOE","PP","PSOE","COMPROMIS","PP","PSOE","VOX","PP","PSOE","PP","COMPROMIS","PP","PSOE","PP","PSOE","VOX","COMPROMIS","PP","PSOE","PP","PSOE","PP","COMPROMIS"] },
   { nombre: "ELECTOPANEL", fecha: "8 de noviembre de 2024", escanos:["PSOE","PP","VOX","COMPROMIS","PSOE","PP","PSOE","VOX","COMPROMIS","PP","PSOE","VOX","COMPROMIS","PP","PSOE","PSOE","VOX","PP","COMPROMIS","PSOE","PP","VOX","COMPROMIS","PSOE"] },
   { nombre: "DYS", fecha: "11 de noviembre de 2024", escanos:["PP","PSOE","PP","VOX","PSOE","COMPROMIS","PP","PSOE","PP","VOX","PSOE","COMPROMIS","PP","PSOE","PP","SALF","VOX","PSOE","PP","COMPROMIS","PP","PSOE","PP","VOX"] },
   { nombre: "EPDA", fecha: "14 de noviembre de 2024", escanos:["PP","PSOE","VOX","PP","COMPROMIS","PSOE","PP","PSOE","VOX","PP","COMPROMIS","PSOE","PP","PSOE","VOX","PP","COMPROMIS","PSOE","PP","VOX","PSOE","PP","COMPROMIS","PSOE"] },
   { nombre: "ELECTOPANEL", fecha: "18 de noviembre de 2024", escanos:["PSOE","PP","VOX","COMPROMIS","PSOE","PP","PSOE","VOX","COMPROMIS","PP","PSOE","VOX","COMPROMIS","PSOE","PP","PSOE","VOX","PP","COMPROMIS","PSOE","VOX","PP","PSOE","COMPROMIS"] },
   { nombre: "SOCIALDATA", fecha: "28 de noviembre de 2024", escanos:["PSOE","PP","VOX","COMPROMIS","PSOE","PP","VOX","PSOE","PP","COMPROMIS","PSOE","PP","VOX","COMPROMIS","PSOE","PP","VOX","PSOE","PP","COMPROMIS","PSOE","VOX","PP","COMPROMIS"] },
   { nombre: "SIGMA 2", fecha: "8 de diciembre de 2024", escanos:["PSOE","PP","VOX","COMPROMIS","PSOE","PP","PSOE","VOX","COMPROMIS","PP","PSOE","PP","VOX","COMPROMIS","PSOE","PP","PSOE","VOX","COMPROMIS","PP","PSOE","PP","VOX","PSOE"] },
   { nombre: "40DB", fecha: "9 de diciembre de 2024", escanos:["PP","PSOE","VOX","PP","PSOE","COMPROMIS","PP","PSOE","VOX","PP","PSOE","COMPROMIS","PP","PSOE","VOX","PP","PSOE","PP","COMPROMIS","PSOE","VOX","PP","PSOE","PP"] },
   { nombre: "ELECTOPANEL", fecha: "27 de febrero de 2025", escanos:["PSOE","PP","VOX","COMPROMIS","PSOE","PP","VOX","COMPROMIS","PSOE","PP","VOX","PSOE","COMPROMIS","PSOE","PP","VOX","COMPROMIS","PSOE","PP","VOX","PSOE","COMPROMIS","PP","VOX"] },
   { nombre: "SYM", fecha: "19 de marzo de 2025", escanos:["PP","PSOE","PP","VOX","PSOE","COMPROMIS","PP","PSOE","PP","VOX","PP","PSOE","COMPROMIS","PP","PSOE","VOX","PP","PSOE","COMPROMIS","PP","PSOE","PP","VOX","PP"] },
   { nombre: "SIGMA 2", fecha: "23 de marzo de 2025", escanos:["PP","PSOE","COMPROMIS","VOX","PP","PSOE","PP","PSOE","COMPROMIS","VOX","PP","PSOE","COMPROMIS","PP","PSOE","VOX","PP","PSOE","COMPROMIS","PP","VOX","PSOE","COMPROMIS","PP"] },
   { nombre: "DYS", fecha: "21 de abril de 2025", escanos:["PP","PSOE","PP","PSOE","VOX","COMPROMIS","PP","PSOE","PP","PSOE","VOX","PP","PSOE","COMPROMIS","PP","PSOE","VOX","PP","PSOE","PP","COMPROMIS","PSOE","PP","VOX"] },
   { nombre: "SYM", fecha: "12 de junio de 2025", escanos:["PP","PSOE","PP","VOX","PSOE","COMPROMIS","PP","PSOE","PP","VOX","PP","PSOE","COMPROMIS","PP","PSOE","VOX","PP","PSOE","COMPROMIS","PP","PP","VOX","PSOE","PP"] },
   { nombre: "DYS", fecha: "7 de julio de 2025", escanos:["PP","PSOE","PP","VOX","PSOE","COMPROMIS","PP","PSOE","PP","VOX","PSOE","PP","COMPROMIS","PSOE","PP","VOX","PSOE","PP","PSOE","COMPROMIS","PP","VOX","PSOE","PP"] },
   { nombre: "ELECTOPANEL", fecha: "30 de septiembre de 2025", escanos:["PSOE","PP","VOX","COMPROMIS","PSOE","PP","VOX","PSOE","COMPROMIS","PP","PSOE","VOX","PP","COMPROMIS","PSOE","VOX","PP","PSOE","COMPROMIS","VOX","PP","PSOE","PP","COMPROMIS"] },
   { nombre: "DYS", fecha: "8 de octubre de 2025", escanos:["PP","PSOE","VOX","PP","COMPROMIS","PSOE","PP","PSOE","VOX","PP","COMPROMIS","PSOE","PP","VOX","PSOE","PP","COMPROMIS","PSOE","VOX","PP","PSOE","PP","COMPROMIS","PSOE"] },
   { nombre: "LÁPIZ ESTRATÉGICO", fecha: "9 de octubre de 2025", escanos:["PP","PSOE","VOX","PP","PSOE","COMPROMIS","PP","PSOE","VOX","PP","PSOE","COMPROMIS","PP","PSOE","VOX","PP","PSOE","COMPROMIS","PP","PSOE","VOX","PP","PSOE","COMPROMIS"] },
   { nombre: "GAD3", fecha: "28 de octubre de 2025", escanos:["PP","PSOE","VOX","COMPROMIS","PP","PSOE","VOX","PP","PSOE","COMPROMIS","PP","VOX","PSOE","PP","COMPROMIS","PSOE","VOX","PP","PSOE","COMPROMIS","PP","VOX","PSOE","PP"] },
   { nombre: "ELECTOPANEL", fecha: "30 de noviembre de 2025", escanos:["PSOE","PP","VOX","COMPROMIS","PSOE","PP","VOX","PSOE","COMPROMIS","PP","VOX","PSOE","PP","COMPROMIS","PSOE","VOX","PP","PSOE","COMPROMIS","VOX","PP","PSOE","COMPROMIS","PP"] },
   { nombre: "INTERNO COMPROMIS", fecha: "2 de febrero de 2026", escanos:["VOX","PP","PSOE","COMPROMIS","VOX","PP","PSOE","COMPROMIS","VOX","PP","PSOE","COMPROMIS","VOX","PP","PSOE","COMPROMIS","VOX","PP","PSOE","COMPROMIS","VOX","PP","PSOE","VOX"] },  
   { nombre: "INTERNA PP", fecha: "23 de febrero de 2026", escanos:["PP","PSOE","VOX","COMPROMIS","PP","PSOE","PP","VOX","PSOE","COMPROMIS","PP","VOX","PSOE","PP","COMPROMIS","PP","PSOE","VOX","PP","PSOE","COMPROMIS","VOX","PP","PSOE"] },
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
  const yLabels = Array.from({length:24}, (_,i)=> (i+1).toString());
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