// Colores por partido
const colores = { PP:"#0000FF", PSOE:"#FF0000", VOX:"#008000", SUMAR:"#800080", JUNTS:"#40E0D0", ERC: "#c99f00", AC:"#014983", CUP: "#010101", SALF: "#5f4238", JUNTSYERC: "#dbdc54" };

// Todas las encuestas
const encuestas = [
   { nombre: "NCREPORT", fecha: "12 de junio de 2024", escanos:["PSOE","JUNTS","PSOE","PP","ERC","PSOE","JUNTS","PSOE","VOX","JUNTS","PSOE","PP","SUMAR","ERC","PSOE","JUNTS","PSOE","PP","PSOE","JUNTS","ERC","CUP","VOX","PSOE","JUNTS","PSOE","PP","SUMAR","PSOE","ERC","JUNTS","PSOE","PP","PSOE","JUNTS","VOX","PSOE","ERC","JUNTS","PSOE","PP","SUMAR","PSOE","JUNTS","PSOE","ERC","CUP","VOX","PSOE","PP","JUNTS","PSOE","JUNTS","ERC","PSOE","PP","PSOE","SUMAR","JUNTS","PSOE","VOX","ERC","JUNTS","PSOE","PP","PSOE","JUNTS","PSOE","ERC","PP","CUP","PSOE","JUNTS","SUMAR","VOX","PSOE","JUNTS","PSOE","PP","ERC","PSOE","JUNTS","PSOE","PP","PSOE"] },
   { nombre: "EM ANALYTICS", fecha: "17 de junio de 2024", escanos:["PSOE","JUNTS","PSOE","PP","PSOE","ERC","JUNTS","PSOE","VOX","JUNTS","PSOE","PP","SUMAR","PSOE","ERC","JUNTS","PSOE","PP","JUNTS","PSOE","VOX","PSOE","ERC","JUNTS","CUP","AC","PSOE","PP","PSOE","JUNTS","SUMAR","PSOE","ERC","VOX","JUNTS","PP","PSOE","PSOE","JUNTS","PSOE","ERC","PP","JUNTS","PSOE","VOX","SUMAR","PSOE","JUNTS","PSOE","PP","ERC","JUNTS","PSOE","CUP","AC","PSOE","JUNTS","VOX","PP","PSOE","ERC","PSOE","JUNTS","SUMAR","PSOE","PP","JUNTS","PSOE","ERC","VOX","PSOE","JUNTS","PP","PSOE","JUNTS","PSOE","ERC","PSOE","SUMAR","PP","JUNTS","VOX","PSOE","CUP","AC"] },
   { nombre: "DYS", fecha: "28 de junio de 2024", escanos:["PSOE","JUNTS","PSOE","PP","ERC","PSOE","JUNTS","PSOE","JUNTS","VOX","PP","PSOE","SUMAR","ERC","PSOE","JUNTS","PSOE","PP","JUNTS","ERC","PSOE","PSOE","CUP","JUNTS","VOX","PP","PSOE","AC","SUMAR","ERC","JUNTS","PSOE","PSOE","PP","JUNTS","PSOE","ERC","JUNTS","VOX","PSOE","PP","PSOE","JUNTS","SUMAR","ERC","PSOE","JUNTS","PP","PSOE","PSOE","CUP","JUNTS","ERC","VOX","PSOE","PP","JUNTS","PSOE","AC","SUMAR","PSOE","ERC","JUNTS","PP","PSOE","JUNTS","PSOE","VOX","ERC","PSOE","PP","JUNTS","PSOE","PSOE","JUNTS","SUMAR","ERC","PP","PSOE","CUP","JUNTS","VOX","PSOE","PSOE","PP"] },
   { nombre: "DYS", fecha: "29 de junio de 2024", escanos:["JUNTSYERC","PSOE","JUNTSYERC","PSOE","PP","JUNTSYERC","PSOE","JUNTSYERC","PSOE","VOX","PP","JUNTSYERC","PSOE","JUNTSYERC","PSOE","SUMAR","JUNTSYERC","PSOE","PP","JUNTSYERC","PSOE","JUNTSYERC","PSOE","VOX","PP","JUNTSYERC","PSOE","CUP","JUNTSYERC","PSOE","PP","JUNTSYERC","PSOE","SUMAR","JUNTSYERC","PSOE","VOX","JUNTSYERC","PSOE","PP","JUNTSYERC","PSOE","JUNTSYERC","PSOE","PP","JUNTSYERC","PSOE","JUNTSYERC","PSOE","VOX","SUMAR","JUNTSYERC","PP","PSOE","JUNTSYERC","PSOE","CUP","JUNTSYERC","PSOE","PP","JUNTSYERC","PSOE","JUNTSYERC","VOX","PSOE","PP","JUNTSYERC","PSOE","SUMAR","JUNTSYERC","PSOE","JUNTSYERC","PP","PSOE","JUNTSYERC","PSOE","VOX","JUNTSYERC","PSOE","PP","JUNTSYERC","PSOE","JUNTSYERC","PSOE","PP"] },
   { nombre: "VOZ PÓPULI", fecha: "8 de julio de 2024", escanos:["PSOE","JUNTS","PSOE","PP","ERC","PSOE","JUNTS","VOX","PSOE","JUNTS","PSOE","PP","SUMAR","ERC","PSOE","JUNTS","PSOE","VOX","PP","JUNTS","PSOE","ERC","CUP","PSOE","JUNTS","PSOE","PP","JUNTS","SUMAR","PSOE","ERC","VOX","PSOE","JUNTS","PP","PSOE","ERC","JUNTS","PSOE","PSOE","VOX","PP","JUNTS","PSOE","SUMAR","ERC","JUNTS","PSOE","PP","CUP","PSOE","JUNTS","VOX","PSOE","ERC","PSOE","JUNTS","PP","PSOE","JUNTS","SUMAR","PSOE","ERC","VOX","PP","PSOE","JUNTS","PSOE","JUNTS","ERC","PSOE","PP","PSOE","JUNTS","VOX","CUP","PSOE","SUMAR","ERC","JUNTS","PSOE","PP","PSOE","JUNTS","PSOE"] },
   { nombre: "CEO", fecha: "18 de julio de 2024", escanos:["PSOE","JUNTS","PSOE","ERC","PP","PSOE","JUNTS","PSOE","ERC","VOX","SUMAR","JUNTS","PSOE","PP","PSOE","JUNTS","ERC","PSOE","PP","PSOE","JUNTS","CUP","ERC","VOX","PSOE","SUMAR","JUNTS","PSOE","PP","PSOE","ERC","JUNTS","PSOE","JUNTS","PSOE","PP","ERC","VOX","SUMAR","PSOE","JUNTS","PSOE","ERC","PP","PSOE","JUNTS","CUP","PSOE","JUNTS","ERC","VOX","PSOE","PP","SUMAR","PSOE","JUNTS","PSOE","ERC","PP","JUNTS","PSOE","PSOE","ERC","VOX","JUNTS","SUMAR","PSOE","PP","PSOE","JUNTS","CUP","ERC","PSOE","JUNTS","PSOE","PP","ERC","VOX","PSOE","SUMAR","JUNTS","PSOE","PP","ERC","JUNTS"] },
   { nombre: "NCREPORT", fecha: "19 de julio de 2024", escanos:["PSOE","JUNTS","PSOE","PP","PSOE","ERC","JUNTS","PSOE","SUMAR","VOX","JUNTS","PSOE","PP","PSOE","ERC","JUNTS","PSOE","PP","JUNTS","PSOE","SUMAR","CUP","PSOE","ERC","VOX","JUNTS","PSOE","PP","AC","PSOE","JUNTS","PSOE","ERC","JUNTS","PP","PSOE","SUMAR","PSOE","VOX","JUNTS","PSOE","ERC","PP","JUNTS","PSOE","PSOE","JUNTS","SUMAR","CUP","PP","PSOE","ERC","VOX","PSOE","JUNTS","PSOE","PP","AC","JUNTS","PSOE","ERC","PSOE","SUMAR","JUNTS","PSOE","PP","VOX","JUNTS","PSOE","ERC","PSOE","JUNTS","PP","PSOE","SUMAR","CUP","PSOE","ERC","JUNTS","PSOE","PP","VOX","JUNTS","PSOE","PSOE"] },
   { nombre: "CEO", fecha: "27 de marzo de 2025", escanos:["PSOE","JUNTS","PSOE","ERC","PP","PSOE","VOX","JUNTS","PSOE","SUMAR","ERC","PSOE","PP","JUNTS","PSOE","ERC","PSOE","VOX","AC","PP","JUNTS","PSOE","SUMAR","CUP","ERC","PSOE","JUNTS","PSOE","PP","VOX","ERC","PSOE","JUNTS","PSOE","SUMAR","PP","ERC","PSOE","JUNTS","PSOE","VOX","AC","ERC","PSOE","PP","JUNTS","PSOE","SUMAR","CUP","ERC","PSOE","JUNTS","VOX","PP","PSOE","ERC","PSOE","JUNTS","PSOE","SUMAR","PP","PSOE","VOX","ERC","JUNTS","AC","PSOE","PP","PSOE","ERC","JUNTS","PSOE","SUMAR","VOX","PSOE","CUP","JUNTS","PP","ERC","PSOE","PSOE","JUNTS","ERC","PP","PSOE"] },
   { nombre: "THE OBJECTIVE", fecha: "15 de mayo de 2025", escanos:["PSOE","PSOE","JUNTS","ERC","PP","PSOE","VOX","PSOE","JUNTS","PSOE","ERC","PP","PSOE","SUMAR","JUNTS","VOX","PSOE","AC","ERC","PSOE","JUNTS","PP","PSOE","VOX","PSOE","ERC","JUNTS","CUP","PSOE","PP","PSOE","SUMAR","JUNTS","ERC","PSOE","VOX","PSOE","AC","PP","JUNTS","PSOE","ERC","PSOE","VOX","JUNTS","PSOE","PP","ERC","PSOE","SUMAR","JUNTS","PSOE","VOX","PP","PSOE","ERC","JUNTS","PSOE","CUP","AC","PSOE","ERC","PP","VOX","JUNTS","PSOE","PSOE","SUMAR","PSOE","JUNTS","ERC","PP","PSOE","VOX","PSOE","JUNTS","ERC","PSOE","AC","PP","PSOE","JUNTS","VOX","PSOE","SUMAR"] },
   { nombre: "CEO", fecha: "16 de julio de 2025", escanos:["PSOE","JUNTS","PSOE","ERC","PP","PSOE","VOX","JUNTS","PSOE","ERC","SUMAR","PSOE","PP","AC","JUNTS","PSOE","VOX","ERC","PSOE","JUNTS","CUP","PSOE","PP","ERC","PSOE","SUMAR","VOX","JUNTS","PSOE","ERC","PP","PSOE","AC","JUNTS","PSOE","VOX","ERC","PSOE","JUNTS","PP","PSOE","SUMAR","ERC","PSOE","JUNTS","CUP","VOX","PSOE","PP","ERC","AC","JUNTS","PSOE","PSOE","SUMAR","VOX","PP","ERC","JUNTS","PSOE","PSOE","JUNTS","ERC","PSOE","PP","VOX","PSOE","AC","JUNTS","CUP","ERC","PSOE","SUMAR","PSOE","PP","JUNTS","VOX","PSOE","ERC","PSOE","JUNTS","PP","PSOE","ERC","PSOE"] },
   { nombre: "INTERNO VOX", fecha: "2 de septiembre de 2025", escanos:["PSOE","JUNTS","ERC","PSOE","VOX","PP","PSOE","JUNTS","ERC","SUMAR","PSOE","VOX","JUNTS","PP","ERC","PSOE","PSOE","AC","JUNTS","VOX","ERC","PSOE","SUMAR","PP","JUNTS","PSOE","CUP","ERC","VOX","PSOE","JUNTS","PP","ERC","PSOE","SUMAR","JUNTS","VOX","PSOE","ERC","PSOE","PP","AC","JUNTS","PSOE","VOX","ERC","JUNTS","PSOE","SUMAR","PP","ERC","PSOE","VOX","JUNTS","PSOE","CUP","ERC","PP","PSOE","JUNTS","SUMAR","VOX","PSOE","AC","ERC","JUNTS","PSOE","PP","VOX","ERC","PSOE","JUNTS","PSOE","SUMAR","ERC","PP","JUNTS","VOX","PSOE","PSOE","ERC","JUNTS","PSOE","PP","VOX"] },
   { nombre: "SIGMA 2", fecha: "14 de septiembre de 2025", escanos:["PSOE","PSOE","JUNTS","ERC","PP","VOX","PSOE","PSOE","JUNTS","AC","ERC","SUMAR","PSOE","PP","VOX","PSOE","JUNTS","ERC","CUP","PSOE","PSOE","PP","JUNTS","AC","ERC","VOX","PSOE","SUMAR","PSOE","JUNTS","ERC","PP","PSOE","VOX","PSOE","JUNTS","AC","ERC","PSOE","CUP","PP","PSOE","JUNTS","ERC","VOX","SUMAR","PSOE","PSOE","PP","JUNTS","AC","ERC","PSOE","VOX","PSOE","JUNTS","ERC","PP","PSOE","SUMAR","PSOE","CUP","JUNTS","AC","ERC","VOX","PSOE","PP","PSOE","JUNTS","ERC","PSOE","VOX","PSOE","PP","JUNTS","AC","ERC","SUMAR","PSOE","PSOE","CUP","JUNTS","VOX","PSOE"] },
   { nombre: "IPSOS", fecha: "21 de septiembre de 2025", escanos:["PSOE","ERC","PSOE","VOX","JUNTS","PP","AC","PSOE","ERC","PSOE","VOX","JUNTS","SUMAR","PSOE","PP","ERC","AC","PSOE","CUP","VOX","JUNTS","PSOE","ERC","PP","PSOE","VOX","AC","PSOE","JUNTS","ERC","SUMAR","PSOE","PP","PSOE","VOX","ERC","JUNTS","AC","PSOE","PSOE","ERC","CUP","VOX","PP","JUNTS","PSOE","SUMAR","AC","ERC","PSOE","VOX","JUNTS","PP","PSOE","ERC","PSOE","VOX","AC","PSOE","JUNTS","PP","ERC","PSOE","SUMAR","CUP","VOX","PSOE","JUNTS","ERC","AC","PSOE","PP","PSOE","VOX","ERC","JUNTS","PSOE","SUMAR","AC","PP","PSOE","ERC","VOX","JUNTS","PSOE"] },
   { nombre: "CEO", fecha: "24 de noviembre de 2025", escanos:["PSOE","ERC","PSOE","JUNTS","AC","VOX","PSOE","PP","ERC","PSOE","SUMAR","JUNTS","PSOE","AC","ERC","VOX","PSOE","PP","CUP","PSOE","JUNTS","ERC","PSOE","AC","SUMAR","VOX","PSOE","PP","ERC","JUNTS","PSOE","AC","PSOE","ERC","VOX","PSOE","JUNTS","PP","SUMAR","PSOE","ERC","CUP","AC","PSOE","VOX","JUNTS","PSOE","ERC","PP","PSOE","AC","SUMAR","JUNTS","ERC","PSOE","VOX","PSOE","PP","ERC","PSOE","AC","JUNTS","VOX","CUP","PSOE","SUMAR","ERC","PSOE","PP","JUNTS","AC","PSOE","ERC","VOX","PSOE","PSOE","JUNTS","PP","ERC","AC","SUMAR","PSOE","VOX","PSOE","ERC"] },
   { nombre: "ELECTOPANEL", fecha: "30 de enero de 2026", escanos:["PSOE","ERC","JUNTS","PSOE","PP","VOX","AC","PSOE","ERC","JUNTS","PSOE","ERC","PSOE","PP","JUNTS","VOX","AC","PSOE","ERC","SUMAR","PSOE","JUNTS","ERC","PP","CUP","PSOE","VOX","AC","PSOE","ERC","JUNTS","PSOE","PP","ERC","PSOE","JUNTS","VOX","AC","PSOE","ERC","SUMAR","JUNTS","PP","PSOE","ERC","VOX","PSOE","AC","JUNTS","PSOE","ERC","PP","CUP","PSOE","JUNTS","VOX","ERC","PSOE","AC","PSOE","PP","ERC","JUNTS","PSOE","SUMAR","VOX","ERC","PSOE","AC","JUNTS","PP","PSOE","ERC","PSOE","JUNTS","VOX","ERC","PSOE","AC","PP","CUP","JUNTS","PSOE","ERC","VOX"] },
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
  const yLabels = Array.from({length:85}, (_,i)=> (i+1).toString());
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