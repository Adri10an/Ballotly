Chart.register(ChartDataLabels);

// función auxiliar para crear gráficos individuales
function crearGrafico(id, datos, etiquetas, partido, color, borde) {
  new Chart(document.getElementById(id).getContext('2d'), {
    data: {
      labels: etiquetas,
      datasets: [
        {
          type: 'bar',
          label: 'Porcentaje de voto (%)',
          data: datos,
          backgroundColor: color,
          borderColor: borde,
          borderWidth: 1,
          datalabels: {
            anchor: 'end',
            align: 'top',
            color: borde,
            font: { weight: 'bold' },
            formatter: v => v.toFixed(2) + '%'
          }
        },
        {
          type: 'line',
          label: 'Tendencia',
          data: datos,
          borderColor: borde,
          backgroundColor: 'transparent',
          fill: false,
          tension: 0.3,
          pointRadius: 4,
          pointBackgroundColor: borde
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'top', labels: { color: '#333' } },
        datalabels: { display: true }
      },
      scales: {
        y: { beginAtZero: true, title: { display: true, text: 'Porcentaje (%)', color: '#333' }, ticks: { color: '#333' } },
        x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
      }
    },
    plugins: [ChartDataLabels]
  });
}

// datos por partido
crearGrafico('ppLugoChart', [31.35,45.17,48.24,56.93,58.36,56.72,49.40,47.81,51.46,52.85,54.64,53.33], ['1981','1985','1989','1993','1997','2001','2005','2009','2012','2016','2020','2024'], 'PP', 'rgba(0,0,255,0.7)', '#0000FF');
crearGrafico('bngLugoChart', [8.03,3.29,6.63,16.58,20.00,19.77,14.67,14.58,8.74,7.40,21.53,25.00], ['1981','1985','1989','1993','1997','2001','2005','2009','2012','2016','2020','2024'], 'BNG', 'rgba(116,177,224,0.7)', '#74b1e0');
crearGrafico('psoeLugoChart', [16.08,24.52,31.03,23.26,19.15,21.87,34.90,32.70,22.59,19.02,17.42,17.26], ['1981','1985','1989','1993','1997','2001','2005','2009','2012','2016','2020','2024'], 'PSOE', 'rgba(255,0,0,0.7)', '#FF0000');
crearGrafico('voxLugoChart', [2.07,1.87], ['2020','2024'], 'VOX', 'rgba(0,128,0,0.7)', '#008000');
crearGrafico('sumarLugoChart', [0.64], ['2024'], 'SUMAR', 'rgba(255,192,203,0.7)', '#FF69B4');
crearGrafico('podemosLugoChart', [15.37,2.27,0.20], ['2016','2020','2024'], 'Podemos/IU', 'rgba(128,0,128,0.7)', '#800080');
crearGrafico('csLugoChart', [2.77,0.36], ['2016','2020'], 'CS', 'rgba(255,140,0,0.7)', '#FF8C00');
crearGrafico('cgLugoChart', [20.55,7.27,0.43], ['1985','1989','1993'], 'CG', 'rgba(4,21,149,0.7)', '#041595');
crearGrafico('psgegLugoChart', [2.01,1.71], ['1985','1989'], 'PSG-EG', 'rgba(1,173,215,0.7)', '#01add7');
crearGrafico('ageLugoChart', [10.3], ['2012'], 'AGE', 'rgba(173,160,245,0.7)', '#ada0f5');
crearGrafico('ucdLugoChart', [35.03], ['1981'], 'UCD', 'rgba(255,165,0,0.7)', '#FFA500');
crearGrafico('cdsLugoChart', [2.49,2.62], ['1985','1989'], 'CDS', 'rgba(0,191,255,0.7)', '#00BFFF');
crearGrafico('iuLugoChart', [0.77,1.54,0.87,0.55,0.36,0.64], ['1989','1993','1997','2001','2005','2009'], 'IU', 'rgba(178,34,34,0.7)', '#B22222');
crearGrafico('upydLugoChart', [1.13,0.90], ['2009','2012'], 'UPyD', 'rgba(255,96,218,0.7)', '#FF60DA');

// gráfico combinado total
const etiquetasLugo = ['1981','1985','1989','1993','1997','2001','2005','2009','2012','2016','2020','2024'];
const datosLugo = {
  'UCD': [35.03,null,null,null,null,null,null,null,null,null,null,null],
  'PP': [31.35,45.17,48.24,56.93,58.36,56.72,49.40,47.81,51.46,52.85,54.64,53.33],
  'BNG': [8.03,3.29,6.63,16.58,20.00,19.77,14.67,14.58,8.74,7.40,21.53,25.00],
  'PSOE': [16.08,24.52,31.03,23.26,19.15,21.87,34.90,32.70,22.59,19.02,17.42,17.26],
  'VOX': [null,null,null,null,null,null,null,null,null,null,2.07,1.87],
  'SUMAR': [null,null,null,null,null,null,null,null,null,null,null,0.64],
  'Podemos/IU':[null,null,null,null,null,null,null,null,null,15.37,2.27,0.20],
  'CS': [null,null,null,null,null,null,null,null,null,2.77,0.36,null],
  'CG': [null,20.55,7.27,0.43,null,null,null,null,null,null,null,null],
  'PSG-EG': [null,2.01,1.71,null,null,null,null,null,null,null,null,null],
  'AGE': [null,null,null,null,null,null,null,null,10.3,null,null,null],
  'CDS': [null,2.49,2.62,null,null,null,null,null,null,null,null,null],
  'IU': [null,null,0.77,1.54,0.87,0.55,0.36,0.64,null,null,null,null],
  'UPyD': [null,null,null,null,null,null,null,null,1.13,0.90,null,null]
};
const colores = {'UCD':'#FFA500','PP':'#0000FF','BNG':'#74b1e0','PSOE':'#FF0000','VOX':'#008000','SUMAR':'#FF69B4','Podemos/IU':'#800080','CS':'#FF8C00','CG':'#041595','PSG-EG':'#01add7','AGE':'#ada0f5','CDS':'#00BFFF','IU':'#B22222','UPyD':'#FF60DA'};
const datasets = Object.keys(datosLugo).map(p => ({
  type: 'line', label: p, data: datosLugo[p], borderColor: colores[p], backgroundColor: 'transparent', fill: false, tension: 0.3, spanGaps: true, pointRadius: 4, pointBackgroundColor: colores[p],
  datalabels: { display: true, color: colores[p], font: { weight: 'bold', size: 12 }, formatter: v => v != null ? v.toFixed(2) + '%' : '' }
}));
new Chart(document.getElementById('lugoChart').getContext('2d'), {
  data: { labels: etiquetasLugo, datasets },
  options: { responsive: true, plugins: { legend: { position: 'top', labels: { color: '#333' } }, datalabels: { display: true } }, scales: { y: { beginAtZero: true, title: { display: true, text: 'Porcentaje (%)', color: '#333' }, ticks: { color: '#333' } }, x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } } } },
  plugins: [ChartDataLabels]
});