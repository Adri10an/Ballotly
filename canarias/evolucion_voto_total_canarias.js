// =========================================================
// DATOS — Fuente: ISTAC, Wikipedia, elDiario.es
// 2019 y 2023: SOLO circunscripción insular
// =========================================================

// Totales de votos a candidatura insular:
// 1983: 564.722 | 1987: 663.642 | 1991: 690.138 | 1995: 787.981
// 1999: 817.794 | 2003: 913.442 | 2007: 922.223 | 2011: 880.942
// 2015: 892.846 | 2019: ~880.000 insular | 2023: ~863.000 insular

const datosPSOE    = [233991, 185916, 229692, 183969, 199503, 235234, 322833, 190028, 180669, 258440, 239255];
const etiqPSOE     = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023'];

const datosCC      = [null, 135091, 159344, 261424, 306658, 301686, 222905, 223785, 162943, 196080, 192203];
const etiqCC       = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023'];

const datosPP      = [163419, 74799, 89251, 247609, 225316, 283186, 224883, 289381, 169065, 136850, 174000];
const etiqPP       = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023'];

const datosNC      = [46303, 53893, 93152, 81810, 71200];
const etiqNC       = ['2007','2011','2015','2019','2023'];

const datosVOX     = [1853, 21700, 69700];
const etiqVOX      = ['2015','2019','2023'];

const datosPodemos = [132159, 78532, 34531];
const etiqPodemos  = ['2015','2019','2023'];

const datosDrago   = [2198, 12146, 18340, 17793, 18831, 28800];
const etiqDrago    = ['1991','1999','2003','2007','2011','2023'];

const datosUGC     = [36975, 28954, 16800];
const etiqUGC      = ['2007','2015','2023'];

const datosPACMA   = [2715, 11266, 12300, 11100];
const etiqPACMA    = ['2011','2015','2019','2023'];

const datosASG     = [5089, 6260, 6150];
const etiqASG      = ['2015','2019','2023'];

const datosCs      = [53981, 61000, 3400];
const etiqCs       = ['2015','2019','2023'];

const datosAHI     = [944, 1415, null, 2105, 2773, 2727, null, null, null, null, 1644];
const etiqAHI      = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023'];

const datosIUC     = [24868, 40748, 40614, 22768, 12128, 6558, 6696, 8187, 8570];
const etiqIUC      = ['1983','1987','1995','1999','2003','2007','2011','2015','2019'];

const datosICAN    = [46105, 85015];
const etiqICAN     = ['1987','1991'];

const datosCDS     = [40789, 130339, 100197, 5340, 4442];
const etiqCDS      = ['1983','1987','1991','1995','1999'];

const datosUPyD    = [9069, 8187];
const etiqUPyD     = ['2011','2015'];

const datosFNC     = [39947, 44877];
const etiqFNC      = ['1999','2003'];

const datosPIL     = [23914, 9701];
const etiqPIL      = ['1995','2007'];

const datosAIC     = [135091, 159344];
const etiqAIC      = ['1987','1991'];

const datosUPC     = [46784, 46105];
const etiqUPC      = ['1983','1987'];

const datosAM      = [5551, 5423, 4906];
const etiqAM       = ['1983','1987','1991'];

const datosAGI     = [3294];
const etiqAGI      = ['1983'];

const datosCCNC    = [24479];
const etiqCCNC     = ['1983'];

// =========================================================
// FUNCIÓN GENÉRICA — igual que El Hierro
// =========================================================
function crearChart(canvasId, datos, etiquetas, nombrePartido, bgColor, borderColor) {
  const ctx = document.getElementById(canvasId).getContext('2d');
  new Chart(ctx, {
    data: {
      labels: etiquetas,
      datasets: [
        {
          type: 'bar',
          label: 'Votos totales',
          data: datos,
          backgroundColor: bgColor,
          borderColor: borderColor,
          borderWidth: 1,
          datalabels: {
            anchor: 'end', align: 'top',
            color: borderColor, font: { weight: 'bold' },
            formatter: (v) => v.toLocaleString('es-ES')
          }
        },
        {
          type: 'line',
          label: 'Tendencia',
          data: datos,
          borderColor: borderColor,
          backgroundColor: 'transparent',
          fill: false, tension: 0.3, pointRadius: 4,
          pointBackgroundColor: borderColor,
          datalabels: { display: false }
        }
      ]
    },
    options: {
      responsive: true,
      animation: { duration: 1500, easing: 'easeOutBounce' },
      plugins: {
        legend: { position: 'top', labels: { color: '#333' } },
        datalabels: { display: true }
      },
      scales: {
        y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333', callback: v => v.toLocaleString('es-ES') } },
        x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
      }
    },
    plugins: [
      {
        id: 'etiq_' + canvasId,
        afterDatasetsDraw(chart) {
          const { ctx: c, scales: { x, y } } = chart;
          datos.forEach((valor, i) => {
            const xPos = x.getPixelForValue(i);
            const yPos = y.getPixelForValue(0) + 30;
            c.save();
            c.fillStyle = borderColor;
            c.font = '12px Segoe UI';
            c.textAlign = 'center';
            c.fillText(nombrePartido, xPos, yPos);
            c.restore();
          });
        }
      },
      ChartDataLabels
    ]
  });
}

// =========================================================
// CREAR TODOS LOS CHARTS
// =========================================================
crearChart('psoeChart',   datosPSOE,    etiqPSOE,    'PSOE',         'rgba(255,0,0,0.7)',        '#FF0000');
crearChart('ccChart',     datosCC.filter(d=>d!==null), etiqCC.filter((_,i)=>datosCC[i]!==null), 'CC/AIC', 'rgba(1,173,215,0.7)', '#01ADD7');
crearChart('ppChart',     datosPP,      etiqPP,      'PP/AP',        'rgba(0,0,255,0.7)',        '#0000FF');
crearChart('ncChart',     datosNC,      etiqNC,      'NC',           'rgba(129,192,59,0.7)',     '#81C03B');
crearChart('voxChart',    datosVOX,     etiqVOX,     'VOX',          'rgba(0,128,0,0.7)',        '#008000');
crearChart('podemosChart',datosPodemos, etiqPodemos, 'Podemos/USP',  'rgba(128,0,128,0.7)',      '#800080');
crearChart('dragoChart',  datosDrago,   etiqDrago,   'Drago/Verdes', 'rgba(34,197,94,0.7)',      '#16A34A');
crearChart('ugcChart',    datosUGC,     etiqUGC,     'UxGC/CCN',     'rgba(185,189,63,0.7)',     '#8C8D2F');
crearChart('pacmaChart',  datosPACMA,   etiqPACMA,   'PACMA',        'rgba(255,165,0,0.7)',      '#D97706');
crearChart('asgChart',    datosASG,     etiqASG,     'ASG',          'rgba(20,184,166,0.7)',     '#0D9488');
crearChart('csChart',     datosCs,      etiqCs,      'Cs',           'rgba(255,140,0,0.7)',      '#FF8C00');
crearChart('ahiChart',    datosAHI.filter(d=>d!==null), etiqAHI.filter((_,i)=>datosAHI[i]!==null), 'AHI', 'rgba(251,191,36,0.7)', '#D97706');
crearChart('iucChart',    datosIUC,     etiqIUC,     'IUC/PCC',      'rgba(178,34,34,0.7)',      '#B22222');
crearChart('icanChart',   datosICAN,    etiqICAN,    'ICAN/AC-INC',  'rgba(234,88,12,0.7)',      '#EA580C');
crearChart('cdsChart',    datosCDS,     etiqCDS,     'CDS',          'rgba(0,191,255,0.7)',      '#00BFFF');
crearChart('upydChart',   datosUPyD,    etiqUPyD,    'UPyD',         'rgba(255,96,218,0.7)',     '#FF60DA');
crearChart('fncChart',    datosFNC,     etiqFNC,     'FNC',          'rgba(99,179,237,0.7)',     '#3182CE');
crearChart('pilChart',    datosPIL,     etiqPIL,     'PIL/PCN',      'rgba(160,174,192,0.7)',    '#718096');
crearChart('aicChart',    datosAIC,     etiqAIC,     'AIC',          'rgba(56,178,172,0.7)',     '#0D9488');
crearChart('upcChart',    datosUPC,     etiqUPC,     'UPC-AC',       'rgba(186,0,51,0.7)',       '#BA0033');
crearChart('amChart',     datosAM,      etiqAM,      'AM',           'rgba(246,173,85,0.7)',     '#B45309');
crearChart('agiChart',    datosAGI,     etiqAGI,     'AGI',          'rgba(134,239,172,0.7)',    '#16A34A');
crearChart('ccncChart',   datosCCNC,    etiqCCNC,    'CCNC',         'rgba(185,189,63,0.7)',     '#6B7280');

// =========================================================
// GRÁFICO COMBINADO — igual que El Hierro
// =========================================================
const ANOS_T = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023'];

const totalPartidos = {
  'PSOE':        [233991,185916,229692,183969,199503,235234,322833,190028,180669,258440,239255],
  'CC/AIC':      [null,135091,159344,261424,306658,301686,222905,223785,162943,196080,192203],
  'PP/AP':       [163419,74799,89251,247609,225316,283186,224883,289381,169065,136850,174000],
  'NC':          [null,null,null,null,null,null,46303,53893,93152,81810,71200],
  'VOX':         [null,null,null,null,null,null,null,null,1853,21700,69700],
  'Podemos/USP': [null,null,null,null,null,null,null,null,132159,78532,34531],
  'Drago/Verd':  [null,null,2198,null,12146,18340,17793,18831,null,null,28800],
  'UxGC/CCN':    [null,null,null,null,null,null,36975,null,28954,null,16800],
  'PACMA':       [null,null,null,null,null,null,null,2715,11266,12300,11100],
  'ASG':         [null,null,null,null,null,null,null,null,5089,6260,6150],
  'Cs':          [null,null,null,null,null,null,null,null,53981,61000,3400],
  'AHI':         [944,1415,null,2105,2773,2727,null,null,null,null,1644],
  'IUC/PCC':     [24868,40748,null,40614,22768,12128,6558,6696,8187,8570,null],
  'ICAN/AC-INC': [null,46105,85015,null,null,null,null,null,null,null,null],
  'CDS':         [40789,130339,100197,5340,4442,null,null,null,null,null,null],
  'UPyD':        [null,null,null,null,null,null,null,9069,8187,null,null],
  'FNC':         [null,null,null,null,39947,44877,null,null,null,null,null],
  'PIL/PCN':     [null,null,null,23914,null,null,9701,null,null,null,null],
  'UPC-AC':      [46784,46105,null,null,null,null,null,null,null,null,null],
  'AM':          [5551,5423,4906,null,null,null,null,null,null,null,null],
  'AGI':         [3294,null,null,null,null,null,null,null,null,null,null],
  'CCNC':        [24479,null,null,null,null,null,null,null,null,null,null],
};

const coloresTotal = {
  'PSOE':'#FF0000','CC/AIC':'#01ADD7','PP/AP':'#0000FF','NC':'#81C03B',
  'VOX':'#008000','Podemos/USP':'#800080','Drago/Verd':'#16A34A','UxGC/CCN':'#8C8D2F',
  'PACMA':'#D97706','ASG':'#0D9488','Cs':'#FF8C00',
  'AHI':'#B45309','IUC/PCC':'#B22222','ICAN/AC-INC':'#EA580C','CDS':'#00BFFF',
  'UPyD':'#FF60DA','FNC':'#3182CE','PIL/PCN':'#718096','UPC-AC':'#BA0033',
  'AM':'#F59E0B','AGI':'#22863A','CCNC':'#6B7280',
};

const datasetsTotal = Object.keys(totalPartidos).map(p => ({
  type: 'line',
  label: p,
  data: totalPartidos[p],
  borderColor: coloresTotal[p],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresTotal[p],
  datalabels: {
    display: true,
    color: coloresTotal[p],
    font: { weight: 'bold', size: 12 },
    formatter: v => v != null ? v.toLocaleString('es-ES') : ''
  }
}));

new Chart(document.getElementById('totalChart').getContext('2d'), {
  data: { labels: ANOS_T, datasets: datasetsTotal },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'top', labels: { color: '#333' } },
      datalabels: { display: true }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: 'Votos totales', color: '#333' },
        ticks: { color: '#333', callback: v => v.toLocaleString('es-ES') }
      },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [ChartDataLabels]
});