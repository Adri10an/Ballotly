// Colores por partido
const colores = { PP:"#0000FF", PSOE:"#FF0000", VOX:"#6ae80d",PODEMOS:"#800080",PNV: "#298242", EHBILDU: "#01B59C", SUMAR: "#FF69B4"  };

// Todas las encuestas
const encuestas = [
  { nombre: "ELECTOPANEL", fecha: "30 de octubre de 2024", escanos:["PNV","EHBILDU","PNV","EHBILDU","PNV","PSOE","PNV","PP","EHBILDU","PNV","EHBILDU","PNV","PSOE","EHBILDU","PNV","PNV","PP","EHBILDU","PODEMOS","PNV","PSOE","EHBILDU","PNV","EHBILDU","PNV"] },
    {nombre: "IKERFEL", fecha: "15 de noviembre de 2024", escanos:["PNV","EHBILDU","PNV","PSOE","EHBILDU","PNV","PNV","EHBILDU","PP","PNV","PSOE","EHBILDU","PNV","PNV","EHBILDU","PNV","PSOE","EHBILDU","PP","PNV","EHBILDU","PNV","PSOE","PNV","EHBILDU",] },
   { nombre: "ELECTOPANEL", fecha: "31 de enero de 2025", escanos:["PNV","EHBILDU","PNV","EHBILDU","PNV","PSOE","PNV","EHBILDU","PP","PNV","EHBILDU","PNV","PSOE","EHBILDU","PNV","PNV","EHBILDU","PP","PNV","PSOE","EHBILDU","PNV","EHBILDU","PNV","PODEMOS"] },
    {nombre: "IKERFEL", fecha: "7 de febrero de 2025", escanos:["PNV","EHBILDU","PNV","EHBILDU","PSOE","PNV","PNV","EHBILDU","PP","PNV","EHBILDU","PSOE","PNV","PNV","EHBILDU","PNV","EHBILDU","PSOE","PP","PNV","EHBILDU","PNV","PNV","EHBILDU","PSOE"] },
     { nombre: "IKERFEL", fecha: "27 de junio de 2025", escanos:["PNV","EHBILDU","PNV","PSOE","EHBILDU","PNV","PNV","EHBILDU","PP","PNV","PSOE","EHBILDU","PNV","PNV","EHBILDU","PNV","PSOE","EHBILDU","PNV","PP","PNV","EHBILDU","PNV","PSOE","EHBILDU"] },
    { nombre: "ELECTOPANEL", fecha: "31 de agosto de 2025", escanos:["PNV","EHBILDU","PNV","EHBILDU","PSOE","PNV","EHBILDU","PNV","PP","PNV","EHBILDU","PSOE","PNV","EHBILDU","PNV","EHBILDU","PODEMOS","PNV","PP","PSOE","EHBILDU","PNV","PNV","EHBILDU","PNV"] },
 { nombre: "IKERFEL", fecha: "1 de diciembre de 2025", escanos:["PNV","EHBILDU","PNV","EHBILDU","PNV","PSOE","PNV","EHBILDU","PP","PNV","EHBILDU","PNV","PSOE","PNV","EHBILDU","PNV","EHBILDU","PNV","PSOE","PP","PNV","EHBILDU","PNV","EHBILDU","PNV"] },
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
  const yLabels = Array.from({length:25}, (_,i)=> (i+1).toString());
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