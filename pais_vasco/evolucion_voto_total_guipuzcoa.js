    // Función genérica para crear gráficos
    function crearChart(ctx, datos, etiquetas, partidos, color, borderColor) {
      new Chart(ctx, {
        data: {
          labels: etiquetas,
          datasets: [
            {
              type: 'bar',
              label: 'Porcentaje de voto (%)',
              data: datos,
              backgroundColor: color,
              borderColor: borderColor,
              borderWidth: 1,
              datalabels: {
                anchor: 'end',
                align: 'top',
                color: borderColor,
                font: { weight: 'bold' },
                formatter: (v) => v + '%'
              }
            },
            {
              type: 'line',
              label: 'Tendencia',
              data: datos,
              borderColor: borderColor,
              backgroundColor: 'transparent',
              fill: false,
              tension: 0.3,
              pointRadius: 4,
              pointBackgroundColor: borderColor
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
            id: 'etiquetaPartido',
            afterDatasetsDraw(chart) {
              const { ctx, scales: { x, y } } = chart;
              datos.forEach((valor, i) => {
                const xPos = x.getPixelForValue(i);
                const yPos = y.getPixelForValue(0) + 30;
                ctx.save();
                ctx.fillStyle = borderColor;
                ctx.font = '12px Segoe UI';
                ctx.textAlign = 'center';
                ctx.fillText(partidos[i], xPos, yPos);
                ctx.restore();
              });
            }
          },
          ChartDataLabels
        ]
      });
    }

    // Datos de los partidos
// ================= EH Bildu / HB / EH Guipuzcoa (votos totales) =================
const datosEHBilduGuipuzcoa = [
  52559, 66443, 80255, 79224, 75294,
  103057, 69409, 115086, 98663, 106027, 136301
];

const etiquetasEHBilduGuipuzcoa = [
  '1980','1984','1986','1990','1994',
  '1998','2001','2012','2016','2020','2024'
];

const partidosEHBilduGuipuzcoa = [
  'HB','HB','HB','HB','HB',
  'EH','EH','EHBildu','EHBildu','EHBildu','EHBildu'
];

const ctxEHBilduGuipuzcoa = document.getElementById('ehbilduGuipuzcoaChart').getContext('2d');

new Chart(ctxEHBilduGuipuzcoa, {
  data: {
    labels: etiquetasEHBilduGuipuzcoa,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosEHBilduGuipuzcoa,
        backgroundColor: '#01B59C',
        borderColor: '#01B59C',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end',
          align: 'top',
          color: '#3D8070',
          font: { weight: 'bold' },
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosEHBilduGuipuzcoa,
        borderColor: '#5FB19D',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#5FB19D'
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaEHBilduGuipuzcoa',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosEHBilduGuipuzcoa.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#3D8070';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosEHBilduGuipuzcoa[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PNV Guipuzcoa (votos totales) =================
const datosPNVGuipuzcoa = [
  111411, 144684, 59339, 68457, 72602,
  88857, 203445, 148884, 112101, 114446,
  117260, 109554, 107523
];

const etiquetasPNVGuipuzcoa = [
  '1980','1984','1986','1990','1994',
  '1998','2001','2005','2009','2012',
  '2016','2020','2024'
];

const partidosPNVGuipuzcoa = [
  'PNV','PNV','PNV','PNV','PNV',
  'PNV','PNV','PNV','PNV','PNV',
  'PNV','PNV','PNV'
];

const ctxPNVGuipuzcoa = document.getElementById('pnvGuipuzcoaChart').getContext('2d');

new Chart(ctxPNVGuipuzcoa, {
  data: {
    labels: etiquetasPNVGuipuzcoa,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPNVGuipuzcoa,
        backgroundColor: '#298242', // verde PNV
        borderColor: '#298242',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end',
          align: 'top',
          color: '#2F5A2D',
          font: { weight: 'bold' },
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPNVGuipuzcoa,
        borderColor: '#4A7F49',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#4A7F49'
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPNVGuipuzcoa',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPNVGuipuzcoa.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#2F5A2D';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPNVGuipuzcoa[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PSOE Guipuzcoa (votos totales) =================
const datosPSOEGUIPUZCOA = [
  41148, 78208, 74040, 63922, 53320,
  65548, 74042, 78871, 92714, 68915,
  40425, 38795, 45887
];

const etiquetasPSOEGUIPUZCOA = [
  '1980','1984','1986','1990','1994',
  '1998','2001','2005','2009','2012',
  '2016','2020','2024'
];

const partidosPSOEGUIPUZCOA = [
  'PSOE','PSOE','PSOE','PSOE','PSOE',
  'PSOE','PSOE','PSOE','PSOE','PSOE',
  'PSOE','PSOE','PSOE'
];

const ctxPSOEGUIPUZCOA = document.getElementById('psoeGuipuzcoaChart').getContext('2d');

new Chart(ctxPSOEGUIPUZCOA, {
  data: {
    labels: etiquetasPSOEGUIPUZCOA,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPSOEGUIPUZCOA,
        backgroundColor: 'rgba(255,0,0,0.7)', // rojo PSOE
        borderColor: '#FF0000',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end',
          align: 'top',
          color: '#FF0000',
          font: { weight: 'bold' },
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPSOEGUIPUZCOA,
        borderColor: '#FF0000',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#FF0000'
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoPSOEGUIPUZCOA',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSOEGUIPUZCOA.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSOEGUIPUZCOA[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});
    
// ================= PP Guipuzcoa (votos totales) =================
const datosPPGuipuzcoa = [
  7975, 23994, 13258, 21556, 38677,
  67112, 82792, 51780, 32123, 30461,
  24766, 14086, 21722
];

const etiquetasPPGuipuzcoa = [
  '1980','1984','1986','1990','1994',
  '1998','2001','2005','2009','2012',
  '2016','2020','2024'
];

const partidosPPGuipuzcoa = [
  'PP','PP','PP','PP','PP',
  'PP','PP','PP','PP','PP',
  'PP','PP','PP'
];

const ctxPPGuipuzcoa = document.getElementById('ppGuipuzcoaChart').getContext('2d');

new Chart(ctxPPGuipuzcoa, {
  data: {
    labels: etiquetasPPGuipuzcoa,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPPGuipuzcoa,
        backgroundColor: 'rgba(0,0,255,0.7)', // azul PP
        borderColor: '#0000FF',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#00008B', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPPGuipuzcoa,
        borderColor: '#0000FF',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#0000FF'
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoPPGuipuzcoa',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPGuipuzcoa.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPGuipuzcoa[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Sumar Guipuzcoa (votos totales) =================
const datosSumarGuipuzcoa = [10479];
const etiquetasSumarGuipuzcoa = ['2024'];
const partidosSumarGuipuzcoa = ['Sumar'];

const ctxSumarGuipuzcoa = document.getElementById('sumarGuipuzcoaChart').getContext('2d');

new Chart(ctxSumarGuipuzcoa, {
  data: {
    labels: etiquetasSumarGuipuzcoa,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosSumarGuipuzcoa,
        backgroundColor: '#FF69B4', // rosa Sumar
        borderColor: '#FF69B4',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end',
          align: 'top',
          color: '#B35487',
          font: { weight: 'bold' },
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosSumarGuipuzcoa,
        borderColor: '#E677B1',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#E677B1'
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoSumarGuipuzcoa',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosSumarGuipuzcoa.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#B35487';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosSumarGuipuzcoa[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Podemos Guipuzcoa (votos totales) =================
const datosPodemosGuipuzcoa = [
  48800,   // 2016
  21568,   // 2020
  7384     // 2024
];

const etiquetasPodemosGuipuzcoa = ['2016','2020','2024'];
const partidosPodemosGuipuzcoa = ['Podemos','Podemos','Podemos'];

const ctxPodemosGuipuzcoa = document.getElementById('podemosGuipuzcoaChart').getContext('2d');

new Chart(ctxPodemosGuipuzcoa, {
  data: {
    labels: etiquetasPodemosGuipuzcoa,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPodemosGuipuzcoa,
        backgroundColor: 'rgba(128,0,128,0.7)', // morado Podemos
        borderColor: '#800080',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end',
          align: 'top',
          color: '#4B0082',
          font: { weight: 'bold' },
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPodemosGuipuzcoa,
        borderColor: '#800080',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#800080'
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoPodemosGuipuzcoa',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosGuipuzcoa.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosGuipuzcoa[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= VOX Guipuzcoa (votos totales) =================
const datosVOXGuipuzcoa = [
  4020,   // 2020
  5122    // 2024
];

const etiquetasVOXGuipuzcoa = ['2020','2024'];
const partidosVOXGuipuzcoa = ['VOX','VOX'];

const ctxVOXGuipuzcoa = document.getElementById('voxGuipuzcoaChart').getContext('2d');

new Chart(ctxVOXGuipuzcoa, {
  data: {
    labels: etiquetasVOXGuipuzcoa,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosVOXGuipuzcoa,
        backgroundColor: 'rgba(0,128,0,0.7)', // verde VOX
        borderColor: '#008000',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end',
          align: 'top',
          color: '#006400',
          font: { weight: 'bold' },
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosVOXGuipuzcoa,
        borderColor: '#008000',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#008000'
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoVOXGuipuzcoa',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXGuipuzcoa.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXGuipuzcoa[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CS Guipuzcoa (votos totales) =================
const datosCSGuipuzcoa = [5730];
const etiquetasCSGuipuzcoa = ['2016'];
const partidosCSGuipuzcoa = ['CS'];

const ctxCSGuipuzcoa = document.getElementById('csGuipuzcoaChart').getContext('2d');

new Chart(ctxCSGuipuzcoa, {
  data: {
    labels: etiquetasCSGuipuzcoa,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCSGuipuzcoa,
        backgroundColor: 'rgba(255,140,0,0.7)', // naranja CS
        borderColor: '#FF8C00',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end',
          align: 'top',
          color: '#FF4500',
          font: { weight: 'bold' },
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCSGuipuzcoa,
        borderColor: '#FF8C00',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#FF8C00'
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoCSGuipuzcoa',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSGuipuzcoa.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSGuipuzcoa[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Aralar Guipuzcoa (votos totales) =================
const datosAralarGuipuzcoa = [15396, 31262];
const etiquetasAralarGuipuzcoa = ['2005','2009'];
const partidosAralarGuipuzcoa = ['Aralar','Aralar'];

const ctxAralarGuipuzcoa = document.getElementById('aralarGuipuzcoaChart').getContext('2d');

new Chart(ctxAralarGuipuzcoa, {
  data: {
    labels: etiquetasAralarGuipuzcoa,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosAralarGuipuzcoa,
        backgroundColor: '#692D3E', // color Aralar
        borderColor: '#692D3E',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#6b5057',
          font: { weight: 'bold' },
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosAralarGuipuzcoa,
        borderColor: '#8d6d76',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#8d6d76'
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoAralarGuipuzcoa',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosAralarGuipuzcoa.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#6b5057';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosAralarGuipuzcoa[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PCTV-EHAK Guipuzcoa (votos totales) =================
const datosPCTVEHAKGuipuzcoa = [70834];
const etiquetasPCTVEHAKGuipuzcoa = ['2005'];
const partidosPCTVEHAKGuipuzcoa = ['PCTV-EHAK'];

const ctxPCTVEHAKGuipuzcoa = document.getElementById('pctvGuipuzcoaChart').getContext('2d');

new Chart(ctxPCTVEHAKGuipuzcoa, {
  data: {
    labels: etiquetasPCTVEHAKGuipuzcoa,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPCTVEHAKGuipuzcoa,
        backgroundColor: '#9C231B', // color PCTV-EHAK
        borderColor: '#9C231B',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#7d5048',
          font: { weight: 'bold' },
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPCTVEHAKGuipuzcoa,
        borderColor: '#ab6c62',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#ab6c62'
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoPCTVEHAKGuipuzcoa',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPCTVEHAKGuipuzcoa.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#7d5048';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPCTVEHAKGuipuzcoa[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= EB Guipuzcoa (votos totales) =================
const datosEBGuipuzcoa = [1266, 3380, 23042, 18744, 23731, 20388, 11240];
const etiquetasEBGuipuzcoa = ['1986','1990','1994','1998','2001','2005','2009'];
const partidosEBGuipuzcoa = ['EB','EB','EB','EB','EB','EB','EB'];

const ctxEBGuipuzcoa = document.getElementById('ebGuipuzcoaChart').getContext('2d');

new Chart(ctxEBGuipuzcoa, {
  data: {
    labels: etiquetasEBGuipuzcoa,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosEBGuipuzcoa,
        backgroundColor: '#D25644', // EB
        borderColor: '#D25644',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#a86f64',
          font: { weight: 'bold' },
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosEBGuipuzcoa,
        borderColor: '#ce8c7f',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#ce8c7f'
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoEBGuipuzcoa',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosEBGuipuzcoa.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#a86f64';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosEBGuipuzcoa[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UA Guipuzcoa (votos totales) =================
const datosUAGuipuzcoa = [134, 839, 520, 136];
const etiquetasUAGuipuzcoa = ['1990','1994','1998','2005'];
const partidosUAGuipuzcoa = ['UA','UA','UA','UA'];

const ctxUAGuipuzcoa = document.getElementById('uaGuipuzcoaChart').getContext('2d');

new Chart(ctxUAGuipuzcoa, {
  data: {
    labels: etiquetasUAGuipuzcoa,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUAGuipuzcoa,
        backgroundColor: '#AE6293', // color UA
        borderColor: '#AE6293',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#8e6f87',
          font: { weight: 'bold' },
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosUAGuipuzcoa,
        borderColor: '#ba93af',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#ba93af'
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoUAGuipuzcoa',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUAGuipuzcoa.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8e6f87';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUAGuipuzcoa[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= EA Guipuzcoa (votos totales) =================
const datosEAGuipuzcoa = [85905, 60449, 54426, 56821, 15885];
const etiquetasEAGuipuzcoa = ['1986','1990','1994','1998','2009'];
const partidosEAGuipuzcoa = ['EA','EA','EA','EA','EA'];

const ctxEAGuipuzcoa = document.getElementById('eaGuipuzcoaChart').getContext('2d');

new Chart(ctxEAGuipuzcoa, {
  data: {
    labels: etiquetasEAGuipuzcoa,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosEAGuipuzcoa,
        backgroundColor: '#298242', // verde EA
        borderColor: '#298242',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#5d7c5c',
          font: { weight: 'bold' },
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosEAGuipuzcoa,
        borderColor: '#7ea37d',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#7ea37d'
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoEAGuipuzcoa',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosEAGuipuzcoa.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#5d7c5c';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosEAGuipuzcoa[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= EE Guipuzcoa (votos totales) =================
const datosEEGuipuzcoa = [40210, 31538, 44030, 29596];
const etiquetasEEGuipuzcoa = ['1980','1984','1986','1990'];
const partidosEEGuipuzcoa = ['EE','EE','EE','EE'];

const ctxEEGuipuzcoa = document.getElementById('eeGuipuzcoaChart').getContext('2d');

new Chart(ctxEEGuipuzcoa, {
  data: {
    labels: etiquetasEEGuipuzcoa,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosEEGuipuzcoa,
        backgroundColor: '#DC143C', // rosa EE
        borderColor: '#DC143C',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#9e5259',
          font: { weight: 'bold' },
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosEEGuipuzcoa,
        borderColor: '#d26f77',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#d26f77'
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoEEGuipuzcoa',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosEEGuipuzcoa.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#9e5259';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosEEGuipuzcoa[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UCD Guipuzcoa (votos totales) =================
const datosUCDGuipuzcoa = [22598];
const etiquetasUCDGuipuzcoa = ['1980'];
const partidosUCDGuipuzcoa = ['UCD'];

const ctxUCDGuipuzcoa = document.getElementById('ucdGuipuzcoaChart').getContext('2d');

new Chart(ctxUCDGuipuzcoa, {
  data: {
    labels: etiquetasUCDGuipuzcoa,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUCDGuipuzcoa,
        backgroundColor: '#FFA500', // color UCD
        borderColor: '#FFA500',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#b48f55',
          font: { weight: 'bold' },
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosUCDGuipuzcoa,
        borderColor: '#efc074',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#efc074'
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoUCDGuipuzcoa',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUCDGuipuzcoa.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#b48f55';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUCDGuipuzcoa[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CDS Guipuzcoa (votos totales) =================
const datosCDSGuipuzcoa = [8863, 1175];
const etiquetasCDSGuipuzcoa = ['1986','1990'];
const partidosCDSGuipuzcoa = ['CDS','CDS'];

const ctxCDSGuipuzcoa = document.getElementById('cdsGuipuzcoaChart').getContext('2d');

new Chart(ctxCDSGuipuzcoa, {
  data: {
    labels: etiquetasCDSGuipuzcoa,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCDSGuipuzcoa,
        backgroundColor: 'rgba(0,191,255,0.7)', // azul CDS
        borderColor: '#00BFFF',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end',
          align: 'top',
          color: '#1E90FF',
          font: { weight: 'bold' },
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCDSGuipuzcoa,
        borderColor: '#00BFFF',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#00BFFF'
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoCDSGuipuzcoa',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSGuipuzcoa.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1E90FF';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSGuipuzcoa[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UPyD Guipuzcoa (votos totales) =================
const datosUPyDGuipuzcoa = [5327, 5231];
const etiquetasUPyDGuipuzcoa = ['2009','2012'];
const partidosUPyDGuipuzcoa = ['UPyD','UPyD'];

const ctxUPyDGuipuzcoa = document.getElementById('upydGuipuzcoaChart').getContext('2d');

new Chart(ctxUPyDGuipuzcoa, {
  data: {
    labels: etiquetasUPyDGuipuzcoa,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUPyDGuipuzcoa,
        backgroundColor: 'rgba(255,96,218,0.7)', // color UPyD
        borderColor: '#ff60da',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#ff60da', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosUPyDGuipuzcoa,
        borderColor: '#ff60da',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#ff60da'
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoUPyDGuipuzcoa',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDGuipuzcoa.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#ff60da';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDGuipuzcoa[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Datos Guipuzcoa por partido =================
const etiquetasGuipuzcoa = [
  '1980','1984','1986','1990','1994','1998','2001','2005','2009','2012','2016','2020','2024'
];

const datosGuipuzcoa = {
  'HB/EH/EH Bildu': [52559, 66443, 80255, 79224, 75294, 103057, 69409,null,null, 115086, 98663, 106027, 136301],
  'PNV':           [111411, 144684, 59339, 68457, 72602, 88857, 203445, 148884, 112101, 114446, 117260, 109554, 107523],
  'PSOE':          [41148, 78208, 74040, 63922, 53320, 65548, 74042, 78871, 92714, 68915, 40425, 38795, 45887],
  'PP':            [7975, 23994, 13258, 21556, 38677, 67112, 82792, 51780, 32123, 30461, 24766, 14086, 21722],
  'VOX':           [null,null,null,null,null,null,null,null,null,null,null,4020,5122],
  'Podemos':       [null,null,null,null,null,null,null,null,null,null,48800,21568,7384],
  'Sumar':         [null,null,null,null,null,null,null,null,null,null,null,null,10479],
  'CS':            [null,null,null,null,null,null,null,null,null,null,5730,null,null],
  'Aralar':        [null,null,null,null,null,null,null,15396,31262,null,null,null,null],
  'PCTV-EHAK':     [null,null,null,null,null,null,null,70834,null,null,null,null,null],
  'EB':            [null,null,1266,3380,23042,18744,23731,20388,11240,null,null,null,null],
  'UA':            [null,null,null,134,839,520,null,136,null,null,null,null,null],
  'EA':            [null,null,85905,60449,54426,56821,null,null,15885,null,null,null,null],
  'EE':            [40210,31538,44030,29596,null,null,null,null,null,null,null,null,null],
  'UCD':           [22598,null,null,null,null,null,null,null,null,null,null,null,null],
  'CDS':           [null,null,8863,1175,null,null,null,null,null,null,null,null,null],
  'UPyD':          [null,null,null,null,null,null,null,null,5327,5231,null,null,null]
};

const coloresPartidosGuipuzcoa = {
  'HB/EH/EH Bildu': '#01B59C',
  'PNV': '#298242',
  'PSOE': '#FF0000',
  'PP': '#0000FF',
  'VOX': '#008000',
  'Podemos': '#800080',
  'Sumar': '#FF69B4',
  'CS': '#FF8C00',
  'Aralar': '#692D3E',
  'PCTV-EHAK': '#9C231B',
  'EB': '#D25644',
  'UA': '#AE6293',
  'EA': '#298242',
  'EE': '#DC143C',
  'UCD': '#FFA500',
  'CDS': '#00BFFF',
  'UPyD': '#ff60da'
};

const datasetsGuipuzcoa = Object.keys(datosGuipuzcoa).map(partido => ({
  type: 'line',
  label: partido,
  data: datosGuipuzcoa[partido],
  borderColor: coloresPartidosGuipuzcoa[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresPartidosGuipuzcoa[partido],
  datalabels: { 
    display: true,
    color: coloresPartidosGuipuzcoa[partido],
    font: { weight: 'bold', size: 12 },
    formatter: v => v != null ? v.toLocaleString() : ''
  }
}));

const ctxGuipuzcoa = document.getElementById('guipuzcoaChart').getContext('2d');

new Chart(ctxGuipuzcoa, {
  data: {
    labels: etiquetasGuipuzcoa,
    datasets: datasetsGuipuzcoa
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'top', labels: { color: '#333' } },
      datalabels: { display: true }
    },
    scales: {
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [ChartDataLabels]
});