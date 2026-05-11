// =========================================================
// DATOS VERIFICADOS — Fuente: datoselecciones.com + Wikipedia
// =========================================================
const datosPSOE = [42.36, 27.95, 33.28, 23.35, 24.40, 25.75, 34.56, 21.57, 20.24, 29.22, 27.65];
const etiqPSOE  = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023'];

const datosCC = [null, 20.26, 22.87, 33.18, 37.50, 33.33, 24.18, 25.65, 18.53, 21.82, 22.08];
const etiqCC  = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023'];

const datosPP = [29.64, 11.25, 12.93, 31.42, 27.55, 31.00, 24.07, 32.85, 18.94, 15.38, 19.75];
const etiqPP  = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023'];

const datosNC = [5.43, 9.33, 10.43, 9.13, 8.22];
const etiqNC  = ['2007','2011','2015','2019','2023'];

const datosVOX = [0.21, 2.50, 8.00];
const etiqVOX  = ['2015','2019','2023'];

const datosPodemos = [14.80, 8.87, 3.99];
const etiqPodemos  = ['2015','2019','2023'];

const datosDrago = [0.32, 1.49, 2.01, 1.90, 2.14, 3.23];
const etiqDrago  = ['1991','1999','2003','2007','2011','2023'];

const datosUGC = [3.96, 3.66, 1.94];
const etiqUGC  = ['2007','2015','2023'];

const datosPACMA = [0.31, 1.26, 1.18, 1.25];
const etiqPACMA  = ['2011','2015','2019','2023'];

const datosASG = [0.57, 0.71, 0.71];
const etiqASG  = ['2015','2019','2023'];

const datosCs = [6.05, 7.47, 0.39];
const etiqCs  = ['2015','2019','2023'];

const datosIXLG = [0.15];
const etiqIXLG  = ['2023'];

const datosAsamH = [0.13];
const etiqAsamH  = ['2023'];

const datosAMF = [0.16, 0.30];
const etiqAMF  = ['2015','2023'];

const datosAHI = [0.17, 0.21, 0.22, 0.27, 0.34, 0.19];
const etiqAHI  = ['1983','1987','1991','1995','1999','2023'];

const datosIUC = [3.21, 6.14, 5.15, 2.78, 1.33, 0.70, 0.77, 2.24, 1.04];
const etiqIUC  = ['1983','1987','1995','1999','2003','2007','2011','2015','2019'];

const datosICAN = [6.96, 12.32];
const etiqICAN  = ['1987','1991'];

const datosCDS = [7.35, 19.60, 14.52, 0.68, 0.54];
const etiqCDS  = ['1983','1987','1991','1995','1999'];

const datosUPyD = [1.03, 0.92];
const etiqUPyD  = ['2011','2015'];

const datosFNC = [4.88, 4.89];
const etiqFNC  = ['1999','2003'];

const datosPIL = [3.03, 1.04];
const etiqPIL  = ['1995','2007'];

const datosAIC = [20.26, 22.87];
const etiqAIC  = ['1987','1991'];

const datosUPC = [8.48, 6.96];
const etiqUPC  = ['1983','1987'];

const datosAM = [1.00, 0.82, 0.71];
const etiqAM  = ['1983','1987','1991'];

const datosAGI = [0.89];
const etiqAGI  = ['1983'];

const datosAIL = [0.49];
const etiqAIL  = ['1983'];

const datosCCNC = [4.42];
const etiqCCNC  = ['1983'];

// =========================================================
// FUNCIÓN GENÉRICA
// =========================================================
function crearChart(canvasId, datos, etiquetas, nombrePartido, bgColor, borderColor) {
  const ctx = document.getElementById(canvasId).getContext('2d');
  new Chart(ctx, {
    data: {
      labels: etiquetas,
      datasets: [
        {
          type: 'bar',
          label: 'Porcentaje de voto (%)',
          data: datos,
          backgroundColor: bgColor,
          borderColor: borderColor,
          borderWidth: 1,
          datalabels: {
            anchor: 'end', align: 'top',
            color: borderColor, font: { weight: 'bold' },
            formatter: (v) => v.toFixed(2) + '%'
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
        y: { beginAtZero: true, title: { display: true, text: 'Porcentaje (%)', color: '#333' }, ticks: { color: '#333' } },
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
crearChart('psoeChart',   datosPSOE,    etiqPSOE,    'PSOE',           'rgba(255,0,0,0.7)',        '#FF0000');
crearChart('ccChart',     datosCC.filter(d=>d!==null), etiqCC.filter((_,i)=>datosCC[i]!==null), 'CC/AIC', 'rgba(1,173,215,0.7)', '#01ADD7');
crearChart('ppChart',     datosPP,      etiqPP,      'PP/AP',          'rgba(0,0,255,0.7)',        '#0000FF');
crearChart('ncChart',     datosNC,      etiqNC,      'NC',             'rgba(129,192,59,0.7)',     '#81C03B');
crearChart('voxChart',    datosVOX,     etiqVOX,     'VOX',            'rgba(0,128,0,0.7)',        '#008000');
crearChart('podemosChart',datosPodemos, etiqPodemos, 'Podemos/USP',    'rgba(128,0,128,0.7)',      '#800080');
crearChart('dragoChart',  datosDrago,   etiqDrago,   'Drago/Verdes',   'rgba(34,197,94,0.7)',      '#16A34A');
crearChart('ugcChart',    datosUGC,     etiqUGC,     'UxGC/CCN',       'rgba(185,189,63,0.7)',     '#8C8D2F');
crearChart('pacmaChart',  datosPACMA,   etiqPACMA,   'PACMA',          'rgba(255,165,0,0.7)',      '#D97706');
crearChart('asgChart',    datosASG,     etiqASG,     'ASG',            'rgba(20,184,166,0.7)',     '#0D9488');
crearChart('csChart',     datosCs,      etiqCs,      'Cs',             'rgba(255,140,0,0.7)',      '#FF8C00');
crearChart('ixlgChart',   datosIXLG,    etiqIXLG,    'IXLG',           'rgba(100,116,139,0.7)',    '#475569');
crearChart('asamHChart',  datosAsamH,   etiqAsamH,   'Asam.Herr.',     'rgba(251,191,36,0.7)',     '#B45309');
crearChart('amfChart',    datosAMF,     etiqAMF,     'AMF',            'rgba(234,179,8,0.7)',      '#A16207');
crearChart('ahiChart',    datosAHI,     etiqAHI,     'AHI',            'rgba(251,191,36,0.7)',     '#D97706');
crearChart('iucChart',    datosIUC,     etiqIUC,     'IUC/PCC',        'rgba(178,34,34,0.7)',      '#B22222');
crearChart('icanChart',   datosICAN,    etiqICAN,    'ICAN/AC-INC',    'rgba(234,88,12,0.7)',      '#EA580C');
crearChart('cdsChart',    datosCDS,     etiqCDS,     'CDS',            'rgba(0,191,255,0.7)',      '#00BFFF');
crearChart('upydChart',   datosUPyD,    etiqUPyD,    'UPyD',           'rgba(255,96,218,0.7)',     '#FF60DA');
crearChart('fncChart',    datosFNC,     etiqFNC,     'FNC',            'rgba(99,179,237,0.7)',     '#3182CE');
crearChart('pilChart',    datosPIL,     etiqPIL,     'PIL/PCN',        'rgba(160,174,192,0.7)',    '#718096');
crearChart('aicChart',    datosAIC,     etiqAIC,     'AIC',            'rgba(56,178,172,0.7)',     '#0D9488');
crearChart('upcChart',    datosUPC,     etiqUPC,     'UPC-AC/AC-INC',  'rgba(186,0,51,0.7)',       '#BA0033');
crearChart('amChart',     datosAM,      etiqAM,      'AM',             'rgba(246,173,85,0.7)',     '#B45309');
crearChart('agiChart',    datosAGI,     etiqAGI,     'AGI',            'rgba(134,239,172,0.7)',    '#16A34A');
crearChart('ailChart',    datosAIL,     etiqAIL,     'AIL',            'rgba(104,211,145,0.7)',    '#059669');
crearChart('ccncChart',   datosCCNC,    etiqCCNC,    'CCNC',           'rgba(185,189,63,0.7)',     '#6B7280');

// =========================================================
// GRÁFICO COMBINADO TOTAL
// =========================================================
const AÑOS_T = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023'];

const totalPartidos = {
  'PSOE':      [42.36,27.95,33.28,23.35,24.40,25.75,34.56,21.57,20.24,29.22,27.65],
  'CC/AIC':    [null, 20.26,22.87,33.18,37.50,33.33,24.18,25.65,18.53,21.82,22.08],
  'PP/AP':     [29.64,11.25,12.93,31.42,27.55,31.00,24.07,32.85,18.94,15.38,19.75],
  'NC':        [null, null, null, null, null, null, 5.43, 9.33,10.43, 9.13, 8.22],
  'VOX':       [null, null, null, null, null, null, null, null, 0.21, 2.50, 8.00],
  'Podemos/USP':[null,null, null, null, null, null, null, null,14.80, 8.87, 3.99],
  'Drago/Verd':[null, null, 0.32, null, 1.49, 2.01, 1.90, 2.14, null, null, 3.23],
  'UxGC/CCN':  [null, null, null, null, null, null, 3.96, null, 3.66, null, 1.94],
  'PACMA':     [null, null, null, null, null, null, null, 0.31, 1.26, 1.18, 1.25],
  'ASG':       [null, null, null, null, null, null, null, null, 0.57, 0.71, 0.71],
  'Cs':        [null, null, null, null, null, null, null, null, 6.05, 7.47, 0.39],
  'AMF':       [null, null, null, null, null, null, null, null, 0.16, null, 0.30],
  'AHI':       [0.17, 0.21, 0.22, 0.27, 0.34, null, null, null, null, null, 0.19],
  'IUC/PCC':   [3.21, 6.14, null, 5.15, 2.78, 1.33, 0.70, 0.77, 2.24, 1.04, null],
  'ICAN/AC-INC':[null,6.96,12.32, null, null, null, null, null, null, null, null],
  'CDS':       [7.35,19.60,14.52, 0.68, 0.54, null, null, null, null, null, null],
  'UPyD':      [null, null, null, null, null, null, null, 1.03, 0.92, null, null],
  'FNC':       [null, null, null, null, 4.88, 4.89, null, null, null, null, null],
  'PIL/PCN':   [null, null, null, 3.03, null, null, 1.04, null, null, null, null],
  'UPC-AC':    [8.48, 6.96, null, null, null, null, null, null, null, null, null],
  'AM':        [1.00, 0.82, 0.71, null, null, null, null, null, null, null, null],
  'AGI':       [0.89, null, null, null, null, null, null, null, null, null, null],
  'AIL':       [0.49, null, null, null, null, null, null, null, null, null, null],
  'CCNC':      [4.42, null, null, null, null, null, null, null, null, null, null],
};

const coloresTotal = {
  'PSOE':'#FF0000','CC/AIC':'#01ADD7','PP/AP':'#0000FF','NC':'#81C03B',
  'VOX':'#008000','Podemos/USP':'#800080','Drago/Verd':'#16A34A','UxGC/CCN':'#8C8D2F',
  'PACMA':'#D97706','ASG':'#0D9488','Cs':'#FF8C00','AMF':'#A16207',
  'AHI':'#B45309','IUC/PCC':'#B22222','ICAN/AC-INC':'#EA580C','CDS':'#00BFFF',
  'UPyD':'#FF60DA','FNC':'#3182CE','PIL/PCN':'#718096','UPC-AC':'#BA0033',
  'AM':'#F59E0B','AGI':'#22863A','AIL':'#059669','CCNC':'#6B7280',
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
    formatter: v => v != null ? v.toFixed(2) + '%' : ''
  }
}));

const ctxTotal = document.getElementById('totalChart').getContext('2d');

new Chart(ctxTotal, {
  data: {
    labels: AÑOS_T,
    datasets: datasetsTotal
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'top', labels: { color: '#333' } },
      datalabels: { display: true }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: 'Porcentaje (%)', color: '#333' },
        ticks: { color: '#333' }
      },
      x: {
        title: { display: true, text: 'Año', color: '#333' },
        ticks: { color: '#333' }
      }
    }
  },
  plugins: [ChartDataLabels]
});