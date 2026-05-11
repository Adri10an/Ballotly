// Colores por partido
const colores = { PP:"#0000FF", PSOE:"#FF0000", VOX:"#008000", SUMAR:"#800080", JUNTS: "#40E0D0", ERC:"#c99f00", AC: "#014983", CUP: "#010101", SALF: "#5f4238", JUNTSYERC: "#dbdc54"   };

// Todas las encuestas
const encuestas = [
   { nombre: "NCREPORT", fecha: "12 de junio de 2024", escanos:["JUNTS","PSOE","JUNTS","ERC","PSOE","JUNTS","PP","AC","JUNTS","PSOE","ERC","JUNTS","VOX","PSOE","CUP"] },
   { nombre: "EM ANALYTICS", fecha: "17 de junio de 2024", escanos:["JUNTS","PSOE","JUNTS","ERC","PSOE","JUNTS","PP","AC","JUNTS","PSOE","ERC","JUNTS","VOX","PSOE","JUNTS"] },
   { nombre: "DYS", fecha: "28 de junio de 2024", escanos:["JUNTS","PSOE","JUNTS","ERC","JUNTS","PSOE","PP","AC","JUNTS","ERC","PSOE","JUNTS","JUNTS","PSOE","VOX"] },
   { nombre: "DYS", fecha: "29 de junio de 2024", escanos:["JUNTSYERC","JUNTSYERC","PSOE","JUNTSYERC","JUNTSYERC","PSOE","JUNTSYERC","PP","JUNTSYERC","AC","JUNTSYERC","PSOE","JUNTSYERC","JUNTSYERC","VOX"] },
   { nombre: "VOZ PÓPULI", fecha: "8 de julio de 2024", escanos:["JUNTS","PSOE","JUNTS","ERC","PSOE","PP","JUNTS","AC","JUNTS","PSOE","ERC","VOX","JUNTS","PSOE","PP"] },
   { nombre: "CEO", fecha: "18 de julio de 2024", escanos:["JUNTS","PSOE","ERC","JUNTS","PP","PSOE","JUNTS","ERC","JUNTS","PSOE","AC","JUNTS","ERC","PP","PSOE"] },
   { nombre: "NCREPORT", fecha: "19 de julio de 2024", escanos:["JUNTS","PSOE","JUNTS","ERC","PSOE","PP","JUNTS","AC","JUNTS","PSOE","ERC","JUNTS","PSOE","VOX","PP"] },
   { nombre: "CEO", fecha: "27 de marzo de 2025", escanos:["JUNTS","PSOE","ERC","JUNTS","AC","PSOE","PP","ERC","JUNTS","PSOE","VOX","JUNTS","ERC","AC","PSOE"] },
   { nombre: "THE OBJECTIVE", fecha: "15 de mayo de 2025", escanos:["JUNTS","PSOE","ERC","JUNTS","PP","PSOE","VOX","AC","JUNTS","ERC","PSOE","JUNTS","PP","PSOE","VOX"] },
   { nombre: "CEO", fecha: "16 de julio de 2025", escanos:["JUNTS","PSOE","ERC","AC","JUNTS","PSOE","PP","ERC","JUNTS","VOX","AC","PSOE","JUNTS","ERC","PSOE"] },
   { nombre: "INTERNO VOX", fecha: "2 de septiembre de 2025", escanos:["JUNTS","PSOE","ERC","JUNTS","PP","PSOE","AC","ERC","JUNTS","VOX","PSOE","JUNTS","ERC","PP","JUNTS"] },
   { nombre: "SIGMA 2", fecha: "14 de septiembre de 2025", escanos:["JUNTS","PSOE","ERC","AC","PP","JUNTS","PSOE","ERC","AC","JUNTS","VOX","PSOE","ERC","PP","JUNTS"] },
   { nombre: "IPSOS", fecha: "21 de septiembre de 2025", escanos:["AC","JUNTS","PSOE","ERC","AC","VOX","JUNTS","PSOE","ERC","AC","PP","JUNTS","AC","PSOE","ERC"] },
   { nombre: "CEO", fecha: "24 de noviembre de 2025", escanos:["AC","PSOE","JUNTS","ERC","AC","PSOE","JUNTS","ERC","AC","PSOE","VOX","PP","JUNTS","AC","PSOE"] },
   { nombre: "ELECTOPANEL", fecha: "30 de enero de 2026", escanos:["AC","JUNTS","ERC","PSOE","AC","JUNTS","ERC","PSOE","AC","PP","JUNTS","VOX","ERC","AC","PSOE"] },
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