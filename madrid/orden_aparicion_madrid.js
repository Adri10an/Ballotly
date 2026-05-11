// Colores por partido
const colores = { PP:"#0000FF", PSOE:"#FF0000", VOX:"#008000",PODEMOS: "#800080", MASMADRID: "#53efa5" };

// Todas las encuestas
const encuestas = [
  { nombre: "ELECTOPANEL", fecha: "9 de julio de 2023", escanos:["PP","PP","PSOE","MASMADRID","PP","PP","PSOE","PP","MASMADRID","PP","VOX","PP","PSOE","MASMADRID","PP","PP","PSOE","PP","MASMADRID","PP","PP","PSOE","MASMADRID","VOX","PP","PP","PSOE","PP","MASMADRID","PP","PP","PSOE","MASMADRID","PP","PP","VOX","PSOE","PP","MASMADRID","PP","PP","PSOE","PP","MASMADRID","PP","PSOE","PP","MASMADRID","VOX","PP","PSOE","PP","PP","MASMADRID","PP","PSOE","PP","MASMADRID","PP","PSOE","PP","VOX","PP","MASMADRID","PP","PSOE","PP","MASMADRID","PP","PSOE","PP","PP","MASMADRID","VOX","PP","PSOE","PP","MASMADRID","PP","PSOE","PP","PP","MASMADRID","PP","PSOE","PP","VOX","PP","MASMADRID","PSOE","PP","PP","MASMADRID","PP","PSOE","PP","PP","MASMADRID","PSOE","VOX","PP","PP","MASMADRID","PSOE","PP","PP","PP","MASMADRID","PSOE","PP","PP","VOX","PSOE","MASMADRID","PP","PP","PP","PSOE","MASMADRID","PP","PP","PSOE","MASMADRID","PP","VOX","PP","PP","PSOE","MASMADRID","PP","PP","PSOE","PP","MASMADRID","PP","PP","PSOE","VOX","MASMADRID","PP","PP","PSOE","PP"] },
  { nombre: "ELECTOPANEL", fecha: "31 de marzo de 2024", escanos:["PP", "PSOE", "PP", "MASMADRID", "PP", "PSOE", "PP", "MASMADRID", "VOX", "PP", "PSOE", "PP", "MASMADRID", "PP", "PSOE", "PP", "PP", "MASMADRID", "PSOE", "VOX", "PP", "PP", "PSOE", "MASMADRID", "PP", "PP", "PSOE", "MASMADRID", "PP", "VOX", "PSOE", "PP", "MASMADRID", "PP", "PSOE", "PP", "PP", "MASMADRID", "PSOE", "PP", "VOX", "PP", "MASMADRID", "PSOE", "PP", "PP", "PSOE", "MASMADRID", "PP", "PP", "PSOE", "VOX", "MASMADRID", "PP", "PP", "PSOE", "PP", "MASMADRID", "PSOE", "PP", "PP", "VOX", "MASMADRID", "PSOE", "PP", "PP", "PSOE", "MASMADRID", "PP", "PP", "PSOE", "MASMADRID", "VOX", "PP", "PP", "PSOE", "PP", "MASMADRID", "PP", "PSOE", "PP", "MASMADRID", "VOX", "PP", "PSOE", "PP", "MASMADRID", "PSOE", "PP", "PP", "PSOE", "MASMADRID", "PP", "VOX", "PP", "PSOE", "PP", "MASMADRID", "PP", "PSOE", "PP", "MASMADRID", "PP", "PSOE", "VOX", "PP", "MASMADRID", "PP", "PSOE", "PP", "PP", "MASMADRID", "PSOE", "PP", "VOX", "PP", "PSOE", "MASMADRID", "PP", "PSOE", "PP", "MASMADRID", "PP", "PSOE", "PP", "VOX", "MASMADRID", "PP", "PSOE", "PP", "PP", "MASMADRID", "PSOE", "PP", "PP", "VOX", "PSOE", "MASMADRID", "PP", "PP", "PSOE", "MASMADRID", "PP"] },
  { nombre: "DATA10", fecha: "31 de marzo de 2024", escanos:["PP", "PP", "MASMADRID", "PSOE", "PP", "PP", "MASMADRID", "PP", "PSOE", "VOX", "PP", "MASMADRID", "PP", "PP", "PSOE", "MASMADRID", "PP", "PP", "PSOE", "PP", "MASMADRID", "VOX", "PP", "PP", "MASMADRID", "PSOE", "PP", "PP", "MASMADRID", "PP", "PSOE", "PP", "VOX", "MASMADRID", "PP", "PSOE", "PP", "PP", "MASMADRID", "PP", "PSOE", "PP", "MASMADRID", "PP", "VOX", "PP", "PSOE", "MASMADRID", "PP", "PP", "MASMADRID", "PSOE", "PP", "PP", "VOX", "PP", "MASMADRID", "PSOE", "PP", "PP", "MASMADRID", "PP", "PSOE", "PP", "MASMADRID", "PP", "VOX", "PSOE", "PP", "MASMADRID", "PP", "PP", "PSOE", "MASMADRID", "PP", "PP", "PP", "MASMADRID", "PSOE", "VOX", "PP", "PP", "MASMADRID", "PSOE", "PP", "PP", "MASMADRID", "PP", "PSOE", "PP", "VOX", "MASMADRID", "PP", "PP", "PSOE", "PP", "MASMADRID", "PP", "PP", "PSOE", "MASMADRID", "VOX", "PP", "PP", "MASMADRID", "PSOE", "PP", "PP", "MASMADRID", "PP", "PSOE", "PP", "VOX", "PP", "MASMADRID", "PP", "PSOE", "PP", "MASMADRID", "PP", "PSOE", "PP", "MASMADRID", "PP", "VOX", "PP", "PSOE", "MASMADRID", "PP", "PP", "MASMADRID", "PP", "PSOE", "PP", "PP", "MASMADRID", "VOX", "PSOE", "PP", "PP", "MASMADRID", "PP", "PSOE"] },
  { nombre: "INTERNA PP", fecha: "3 de abril de 2024", escanos:["PP", "PP", "MASMADRID", "PSOE", "PP", "PP", "PP", "MASMADRID", "PSOE", "PP", "PP", "VOX", "PP", "MASMADRID", "PSOE", "PP", "PP", "MASMADRID", "PP", "PSOE", "PP", "PP", "MASMADRID", "PP", "PSOE", "PP", "VOX", "PP", "MASMADRID", "PP", "PSOE", "PP", "PP", "MASMADRID", "PP", "PSOE", "PP", "MASMADRID", "PP", "PP", "PSOE", "VOX", "PP", "MASMADRID", "PP", "PP", "PSOE", "PP", "MASMADRID", "PP", "PSOE", "PP", "MASMADRID", "PP", "VOX", "PP", "PSOE", "PP", "MASMADRID", "PP", "PP", "PSOE", "PP", "MASMADRID", "PP", "PP", "PSOE", "PP", "MASMADRID", "VOX", "PP", "PP", "PSOE", "MASMADRID", "PP", "PP", "PP", "PSOE", "MASMADRID", "PP", "PP", "PP", "PSOE", "VOX", "MASMADRID", "PP", "PP", "PP", "MASMADRID", "PSOE", "PP", "PP", "MASMADRID", "PP", "PSOE", "PP", "PP", "VOX", "MASMADRID", "PP", "PSOE", "PP", "PP", "MASMADRID", "PSOE", "PP", "PP", "MASMADRID", "PP", "PSOE", "PP", "VOX", "PP", "MASMADRID", "PP", "PSOE", "PP", "PP", "MASMADRID", "PP", "PSOE", "PP", "PP", "MASMADRID", "PP", "PSOE", "VOX", "PP", "MASMADRID", "PP", "PP", "PSOE", "PP", "MASMADRID", "PP", "PP", "PSOE", "PP", "MASMADRID", "PP", "VOX", "PP", "PSOE"] },
  { nombre: "ELECTOPANEL", fecha: "2 de mayo de 2024", escanos:["PP", "PSOE", "PP", "MASMADRID", "PP", "PSOE", "PP", "MASMADRID", "PP", "VOX", "PSOE", "PP", "MASMADRID", "PP", "PSOE", "PP", "PP", "MASMADRID", "PSOE", "PP", "VOX", "PP", "MASMADRID", "PSOE", "PP", "PP", "PSOE", "MASMADRID", "PP", "PP", "VOX", "PSOE", "MASMADRID", "PP", "PP", "PSOE", "PP", "MASMADRID", "PP", "PSOE", "PP", "MASMADRID", "VOX", "PP", "PSOE", "PP", "MASMADRID", "PP", "PSOE", "PP", "MASMADRID", "PSOE", "PP", "VOX", "PP", "PSOE", "PP", "MASMADRID", "PP", "PSOE", "PP", "MASMADRID", "PP", "VOX", "PSOE", "PP", "MASMADRID", "PP", "PSOE", "PP", "PP", "MASMADRID", "PSOE", "PP", "VOX", "PP", "MASMADRID", "PSOE", "PP", "PP", "PSOE", "MASMADRID", "PP", "PP", "PSOE", "MASMADRID", "VOX", "PP", "PP", "PSOE", "PP", "MASMADRID", "PP", "PSOE", "PP", "MASMADRID", "PP", "VOX", "PSOE", "PP", "MASMADRID", "PP", "PSOE", "PP", "MASMADRID", "PSOE", "PP", "PP", "VOX", "PSOE", "PP", "MASMADRID", "PP", "PSOE", "PP", "MASMADRID", "PP", "PSOE", "PP", "VOX", "MASMADRID", "PP", "PSOE", "PP", "MASMADRID", "PP", "PSOE", "PP", "PP", "MASMADRID", "VOX", "PSOE", "PP", "PP", "PSOE", "MASMADRID", "PP", "PP", "PSOE", "MASMADRID", "PP", "VOX", "PP"] },
  { nombre: "SYM", fecha: "22 de octubre de 2024", escanos:["PP" , "MASMADRID" , "PP" , "PSOE" , "PP" , "MASMADRID" , "PP" , "PP" , "VOX" , "PSOE" , "MASMADRID" , "PP" , "PP" , "PSOE" , "MASMADRID" , "PP" , "PP" , "MASMADRID" , "PP" , "VOX" , "PSOE" , "PP" , "MASMADRID" , "PP" , "PSOE" , "PP" , "MASMADRID" , "PP" , "PP" , "VOX" , "PSOE" , "MASMADRID" , "PP" , "PP" , "MASMADRID" , "PP" , "PSOE" , "PP" , "MASMADRID" , "PP" , "VOX" , "PSOE" , "PP" , "MASMADRID" , "PP" , "PP" , "PSOE" , "MASMADRID" , "PP" , "PP" , "VOX" , "MASMADRID" , "PSOE" , "PP" , "PP" , "MASMADRID" , "PP" , "PSOE" , "PP" , "MASMADRID" , "PP" , "VOX" , "PP" , "PSOE" , "MASMADRID" , "PP" , "PP" , "PSOE" , "MASMADRID" , "PP" , "PP" , "VOX" , "MASMADRID" , "PP" , "PSOE" , "PP" , "MASMADRID" , "PP" , "PSOE" , "PP" , "MASMADRID" , "PP" , "VOX" , "PP" , "PSOE" , "MASMADRID" , "PP" , "PP" , "MASMADRID" , "PP" , "PSOE" , "PP" , "VOX" , "MASMADRID" , "PP" , "PSOE" , "PP" , "MASMADRID" , "PP" , "PP" , "PSOE" , "MASMADRID" , "PP" , "VOX" , "PP" , "MASMADRID" , "PSOE" , "PP" , "PP" , "MASMADRID" , "PP" , "PSOE" , "PP" , "VOX" , "MASMADRID" , "PP" , "PP" , "PSOE" , "MASMADRID" , "PP" , "PP" , "MASMADRID" , "PSOE" , "PP" , "VOX" , "PP" , "MASMADRID" , "PP" , "PSOE" , "PP" , "MASMADRID" , "PP" , "PSOE" , "PP" , "VOX" , "MASMADRID" , "PP" , "PP" , "PSOE" , "MASMADRID" , "PP" , "PP" , "MASMADRID"] },
  { nombre: "ELECTOPANEL", fecha: "30 de noviembre de 2024", escanos:[ "PP" , "PP" , "MASMADRID" , "PSOE" , "PP" , "PP" , "VOX" , "MASMADRID" , "PSOE" , "PP" , "PP" , "PP" , "MASMADRID" , "PSOE" , "PP" , "VOX" , "PP" , "MASMADRID" , "PSOE" , "PP" , "PP" , "PP" , "MASMADRID" , "PSOE" , "PP" , "VOX" , "PP" , "MASMADRID" , "PSOE" , "PP" , "PP" , "PP" , "MASMADRID" , "PSOE" , "VOX" , "PP" , "PP" , "MASMADRID" , "PSOE" , "PP" , "PP" , "VOX" , "MASMADRID" , "PP" , "PSOE" , "PP" , "PP" , "MASMADRID" , "PSOE" , "PP" , "PP" , "VOX" , "MASMADRID" , "PP" , "PSOE" , "PP" , "PP" , "MASMADRID" , "PSOE" , "PP" , "VOX" , "PP" , "MASMADRID" , "PSOE" , "PP" , "PP" , "PP" , "MASMADRID" , "PSOE" , "VOX" , "PP" , "PP" , "MASMADRID" , "PSOE" , "PP" , "PP" , "MASMADRID" , "PP" , "PSOE" , "VOX" , "PP" , "PP" , "MASMADRID" , "PSOE" , "PP" , "PP" , "VOX" , "MASMADRID" , "PP" , "PSOE" , "PP" , "PP" , "MASMADRID" , "PSOE" , "PP" , "PP" , "VOX" , "MASMADRID" , "PP" , "PSOE" , "PP" , "PP" , "MASMADRID" , "PSOE" , "PP" , "VOX" , "PP" , "MASMADRID" , "PP" , "PSOE" , "PP" , "MASMADRID" , "PP" , "PSOE" , "VOX" , "PP" , "PP" , "MASMADRID" , "PSOE" , "PP" , "PP" , "MASMADRID" , "PP" , "VOX" , "PSOE" , "PP" , "PP" , "MASMADRID" , "PSOE" , "PP" , "PP" , "VOX" , "MASMADRID" , "PP" , "PSOE" , "PP" , "PP" , "MASMADRID" , "PSOE" , "PP" , "VOX" , "PP" , "MASMADRID"] },
  { nombre: "SOCIOMÉTRICA", fecha: "1 de mayo de 2025", escanos:["PP" , "PP" , "PSOE" , "PP" , "MASMADRID" , "PP" , "PSOE" , "PP" , "VOX" , "PP" , "PSOE" , "PP" , "MASMADRID" , "PP" , "PP" , "PSOE" , "PP" , "VOX" , "PP" , "PSOE" , "MASMADRID" , "PP" , "PP" , "PSOE" , "PP" , "PP" , "MASMADRID" , "PSOE" , "VOX" , "PP" , "PP" , "PP" , "PSOE" , "PP" , "MASMADRID" , "PP" , "PSOE" , "PP" , "VOX" , "PP" , "PSOE" , "PP" , "MASMADRID" , "PP" , "PSOE" , "PP" , "PP" , "VOX" , "PP" , "PSOE" , "MASMADRID" , "PP" , "PP" , "PSOE" , "PP" , "PP" , "MASMADRID" , "PSOE" , "VOX" , "PP" , "PP" , "PP" , "PSOE" , "PP" , "MASMADRID" , "PP" , "PSOE" , "PP" , "VOX" , "PP" , "PSOE" , "PP" , "MASMADRID" , "PP" , "PSOE" , "PP" , "PP" , "VOX" , "PP" , "MASMADRID" , "PSOE" , "PP" , "PP" , "PSOE" , "PP" , "MASMADRID" , "PP" , "PSOE" , "VOX" , "PP" , "PP" , "PSOE" , "PP" , "MASMADRID" , "PP" , "PP" , "PSOE" , "PP" , "VOX" , "PP" , "PSOE" , "MASMADRID" , "PP" , "PP" , "PSOE" , "PP" , "PP" , "VOX" , "MASMADRID" , "PP" , "PSOE" , "PP" , "PP" , "PSOE" , "PP" , "MASMADRID" , "PP" , "PSOE" , "VOX" , "PP" , "PP" , "PSOE" , "PP" , "MASMADRID" , "PP" , "PP" , "PSOE" , "VOX" , "PP" , "PP" , "MASMADRID" , "PSOE" , "PP" , "PP" , "PSOE" , "PP" , "PP" , "VOX" , "MASMADRID" , "PSOE" , "PP" , "PP" , "PP"] },
  { nombre: "SIGMA2", fecha: "1 de mayo de 2025", escanos:["PP" , "PP" , "PSOE" , "PP" , "MASMADRID" , "PP" , "PSOE" , "PP" , "VOX" , "PP" , "MASMADRID" , "PP" , "PSOE" , "PP" , "PP" , "PSOE" , "PP" , "MASMADRID" , "PP" , "VOX" , "PP" , "PSOE" , "PP" , "MASMADRID" , "PP" , "PSOE" , "PP" , "PP" , "MASMADRID" , "PSOE" , "PP" , "VOX" , "PP" , "PP" , "PSOE" , "PP" , "MASMADRID" , "PP" , "PSOE" , "PP" , "PP" , "VOX" , "MASMADRID" , "PP" , "PSOE" , "PP" , "PP" , "PSOE" , "MASMADRID" , "PP" , "PP" , "PP" , "VOX" , "PSOE" , "PP" , "MASMADRID" , "PP" , "PSOE" , "PP" , "PP" , "MASMADRID" , "PSOE" , "PP" , "VOX" , "PP" , "PP" , "PSOE" , "MASMADRID" , "PP" , "PP" , "PSOE" , "PP" , "PP" , "MASMADRID" , "VOX" , "PP" , "PSOE" , "PP" , "PP" , "MASMADRID" , "PSOE" , "PP" , "PP" , "PP" , "PSOE" , "VOX" , "MASMADRID" , "PP" , "PP" , "PSOE" , "PP" , "PP" , "MASMADRID" , "PSOE" , "PP" , "PP" , "VOX" , "PP" , "PSOE" , "MASMADRID" , "PP" , "PP" , "PSOE" , "PP" , "MASMADRID" , "PP" , "PP" , "VOX" , "PSOE" , "PP" , "PP" , "MASMADRID" , "PSOE" , "PP" , "PP" , "PSOE" , "PP" , "MASMADRID" , "VOX" , "PP" , "PP" , "PSOE" , "PP" , "MASMADRID" , "PP" , "PSOE" , "PP" , "PP" , "VOX" , "PP" , "MASMADRID" , "PSOE" , "PP" , "PP" , "PSOE" , "PP" , "MASMADRID" , "PP" , "PP" , "PSOE" , "VOX" , "PP" , "MASMADRID"] },
  { nombre: "GAD3", fecha: "1 de mayo de 2025", escanos:["PP" , "PP" , "PSOE" , "PP" , "MASMADRID" , "PP" , "PSOE" , "VOX" , "PP" , "PP" , "PSOE" , "PP" , "MASMADRID" , "PP" , "PSOE" , "PP" , "VOX" , "PP" , "PSOE" , "PP" , "MASMADRID" , "PP" , "PSOE" , "PP" , "PP" , "PSOE" , "MASMADRID" , "VOX" , "PP" , "PP" , "PSOE" , "PP" , "PP" , "MASMADRID" , "PSOE" , "PP" , "VOX" , "PP" , "PSOE" , "PP" , "PP" , "MASMADRID" , "PP" , "PSOE" , "PP" , "VOX" , "PP" , "PSOE" , "MASMADRID" , "PP" , "PP" , "PSOE" , "PP" , "PP" , "PSOE" , "MASMADRID" , "VOX" , "PP" , "PP" , "PSOE" , "PP" , "PP" , "MASMADRID" , "PSOE" , "PP" , "VOX" , "PP" , "PSOE" , "PP" , "PP" , "MASMADRID" , "PSOE" , "PP" , "PP" , "PSOE" , "VOX" , "PP" , "MASMADRID" , "PP" , "PSOE" , "PP" , "PP" , "PP" , "PSOE" , "MASMADRID" , "VOX" , "PP" , "PP" , "PSOE" , "PP" , "PP" , "MASMADRID" , "PSOE" , "PP" , "VOX" , "PP" , "PSOE" , "PP" , "MASMADRID" , "PP" , "PSOE" , "PP" , "PP" , "PSOE" , "VOX" , "PP" , "MASMADRID" , "PP" , "PSOE" , "PP" , "PP" , "PSOE" , "PP" , "MASMADRID" , "VOX" , "PP" , "PSOE" , "PP" , "PP" , "MASMADRID" , "PSOE" , "PP" , "PP" , "VOX" , "PP" , "PSOE" , "PP" , "MASMADRID" , "PP" , "PSOE" , "PP" , "PP" , "PSOE" , "VOX" , "PP" , "MASMADRID" , "PP" , "PSOE" , "PP" , "PP" , "PSOE" , "PP" , "MASMADRID"] },
  { nombre: "SYM", fecha: "6 de mayo de 2025", escanos:["PP" , "PP" , "PP" , "PSOE" , "MASMADRID" , "PP" , "PP" , "VOX" , "PP" , "PSOE" , "MASMADRID" , "PP" , "PP" , "PP" , "PSOE" , "PP" , "MASMADRID" , "VOX" , "PP" , "PP" , "PP" , "PSOE" , "MASMADRID" , "PP" , "PP" , "PP" , "VOX" , "PSOE" , "MASMADRID" , "PP" , "PP" , "PP" , "PSOE" , "PP" , "MASMADRID" , "PP" , "VOX" , "PP" , "PP" , "PSOE" , "MASMADRID" , "PP" , "PP" , "PP" , "PSOE" , "MASMADRID" , "PP" , "VOX" , "PP" , "PP" , "PSOE" , "PP" , "MASMADRID" , "PP" , "PP" , "VOX" , "PSOE" , "PP" , "MASMADRID" , "PP" , "PP" , "PP" , "PSOE" , "MASMADRID" , "PP" , "PP" , "VOX" , "PP" , "PSOE" , "PP" , "MASMADRID" , "PP" , "PP" , "PSOE" , "PP" , "MASMADRID" , "VOX" , "PP" , "PP" , "PP" , "PSOE" , "MASMADRID" , "PP" , "PP" , "PP" , "VOX" , "PSOE" , "PP" , "MASMADRID" , "PP" , "PP" , "PSOE" , "PP" , "MASMADRID" , "PP" , "VOX" , "PP" , "PSOE" , "PP" , "MASMADRID" , "PP" , "PP" , "PP" , "PSOE" , "PP" , "MASMADRID" , "VOX" , "PP" , "PP" , "PSOE" , "PP" , "MASMADRID" , "PP" , "PP" , "VOX" , "PSOE" , "PP" , "MASMADRID" , "PP" , "PP" , "PP" , "PSOE" , "PP" , "MASMADRID" , "PP" , "VOX" , "PP" , "PSOE" , "PP" , "MASMADRID" , "PP" , "PP" , "PSOE" , "PP" , "MASMADRID" , "VOX" , "PP" , "PP" , "PP" , "PSOE" , "PP" , "MASMADRID" , "PP"] },
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
  const yLabels = Array.from({length:143}, (_,i)=> (i+1).toString());
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