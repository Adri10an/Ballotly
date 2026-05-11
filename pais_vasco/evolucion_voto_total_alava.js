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
// ================= EH Bildu / HB / EH Álava (votos totales) =================
const datosEHBilduAlava = [
  14804, 13539, 17912, 16139, 13865,
  20567, 11836, 34193, 26899, 30934, 44652
];

const etiquetasEHBilduAlava = [
  '1980','1984','1986','1990','1994',
  '1998','2001','2012','2016','2020','2024'
];

const partidosEHBilduAlava = [
  'HB','HB','HB','HB','HB',
  'EH','EH','EHBildu','EHBildu','EHBildu','EHBildu'
];

const ctxEHBilduAlava = document.getElementById('ehbilduAlavaChart').getContext('2d');

new Chart(ctxEHBilduAlava, {
  data: {
    labels: etiquetasEHBilduAlava,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosEHBilduAlava,
        backgroundColor: '#01B59C', // color EH Bildu
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
        data: datosEHBilduAlava,
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
      id: 'etiquetaEHBilduAlava',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosEHBilduAlava.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#3D8070';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosEHBilduAlava[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PNV Álava (votos totales) =================
const datosPNVAlava = [
  31640, 44583, 28103, 28341, 29911,
  36923, 64832, 51986, 45767, 40116,
  42327, 40067, 40939
];

const etiquetasPNVAlava = [
  '1980','1984','1986','1990','1994',
  '1998','2001','2005','2009','2012',
  '2016','2020','2024'
];

const partidosPNVAlava = [
  'PNV','PNV','PNV','PNV','PNV',
  'PNV','PNV','PNV','PNV','PNV',
  'PNV','PNV','PNV'
];

const ctxPNVAlava = document.getElementById('pnvAlavaChart').getContext('2d');

new Chart(ctxPNVAlava, {
  data: {
    labels: etiquetasPNVAlava,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPNVAlava,
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
        data: datosPNVAlava,
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
      id: 'etiquetaPNVAlava',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPNVAlava.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#2F5A2D';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPNVAlava[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PSOE Álava (votos totales) =================
const datosPSOEAlava = [
  14694, 31485, 34806, 26894, 21431,
  28670, 39469, 43216, 47523, 30358,
  19489, 19452, 24783
];

const etiquetasPSOEAlava = [
  '1980','1984','1986','1990','1994',
  '1998','2001','2005','2009','2012',
  '2016','2020','2024'
];

const partidosPSOEAlava = [
  'PSOE','PSOE','PSOE','PSOE','PSOE',
  'PSOE','PSOE','PSOE','PSOE','PSOE',
  'PSOE','PSOE','PSOE'
];

const ctxPSOEAlava = document.getElementById('psoeAlavaChart').getContext('2d');

new Chart(ctxPSOEAlava, {
  data: {
    labels: etiquetasPSOEAlava,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPSOEAlava,
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
        data: datosPSOEAlava,
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
      id: 'etiquetaPartidoPSOEAlava',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSOEAlava.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSOEAlava[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});
    
// ================= PP Álava (votos totales) =================
const datosPPAlava = [
  6029, 20380, 9584, 13758, 21885, 45470, 62737,
  43989, 32188, 29374, 27877, 14316, 24298
];

const etiquetasPPAlava = [
  '1980','1984','1986','1990','1994','1998',
  '2001','2005','2009','2012','2016','2020','2024'
];

const partidosPPAlava = [
  'PP','PP','PP','PP','PP','PP',
  'PP','PP','PP','PP','PP','PP','PP'
];

const ctxPPAlava = document.getElementById('ppAlavaChart').getContext('2d');

new Chart(ctxPPAlava, {
  data: {
    labels: etiquetasPPAlava,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPPAlava,
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
        data: datosPPAlava,
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
      id: 'etiquetaPartidoPPAlava',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPAlava.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPAlava[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= VOX Álava (votos totales) =================
const datosVOXAlava = [
  771,    // 2016
  4734,   // 2020
  5623    // 2024
];

const etiquetasVOXAlava = ['2016','2020','2024'];
const partidosVOXAlava = ['VOX','VOX','VOX'];

const ctxVOXAlava = document.getElementById('voxAlavaChart').getContext('2d');

new Chart(ctxVOXAlava, {
  data: {
    labels: etiquetasVOXAlava,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosVOXAlava,
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
        data: datosVOXAlava,
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
      id: 'etiquetaPartidoVOXAlava',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXAlava.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXAlava[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Podemos Álava (votos totales) =================
const datosPodemosAlava = [
  24339,   // 2016
  10092,   // 2020
  3644     // 2024
];

const etiquetasPodemosAlava = ['2016','2020','2024'];
const partidosPodemosAlava = ['Podemos','Podemos','Podemos'];

const ctxPodemosAlava = document.getElementById('podemosAlavaChart').getContext('2d');

new Chart(ctxPodemosAlava, {
  data: {
    labels: etiquetasPodemosAlava,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPodemosAlava,
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
        data: datosPodemosAlava,
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
      id: 'etiquetaPartidoPodemosAlava',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosAlava.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosAlava[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Sumar Álava (votos totales) =================
const datosSumarAlava = [5603];
const etiquetasSumarAlava = ['2024'];
const partidosSumarAlava = ['Sumar'];

const ctxSumarAlava = document.getElementById('sumarAlavaChart').getContext('2d');

new Chart(ctxSumarAlava, {
  data: {
    labels: etiquetasSumarAlava,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosSumarAlava,
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
        data: datosSumarAlava,
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
      id: 'etiquetaPartidoSumarAlava',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosSumarAlava.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#B35487';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosSumarAlava[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CS Álava (votos totales) =================
const datosCSAlava = [4784];
const etiquetasCSAlava = ['2016'];
const partidosCSAlava = ['CS'];

const ctxCSAlava = document.getElementById('csAlavaChart').getContext('2d');

new Chart(ctxCSAlava, {
  data: {
    labels: etiquetasCSAlava,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCSAlava,
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
        data: datosCSAlava,
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
      id: 'etiquetaPartidoCSAlava',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSAlava.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSAlava[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Aralar Álava (votos totales) =================
const datosAralarAlava = [2542, 6613];
const etiquetasAralarAlava = ['2005','2009'];
const partidosAralarAlava = ['Aralar','Aralar'];

const ctxAralarAlava = document.getElementById('aralarAlavaChart').getContext('2d');

new Chart(ctxAralarAlava, {
  data: {
    labels: etiquetasAralarAlava,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosAralarAlava,
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
        data: datosAralarAlava,
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
      id: 'etiquetaPartidoAralarAlava',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosAralarAlava.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#6b5057';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosAralarAlava[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PCTV-EHAK Álava (votos totales) =================
const datosPCTVAlava = [14187];
const etiquetasPCTVAlava = ['2005'];
const partidosPCTVAlava = ['PCTV-EHAK'];

const ctxPCTVAlava = document.getElementById('pctvAlavaChart').getContext('2d');

new Chart(ctxPCTVAlava, {
  data: {
    labels: etiquetasPCTVAlava,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPCTVAlava,
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
        data: datosPCTVAlava,
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
      id: 'etiquetaPartidoPCTVAlava',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPCTVAlava.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#7d5048';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPCTVAlava[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= EB Álava (votos totales) =================
const datosEBAlava = [429, 1451, 12484, 9606, 11430, 8409, 5053];
const etiquetasEBAlava = ['1986','1990','1994','1998','2001','2005','2009'];
const partidosEBAlava = ['EB','EB','EB','EB','EB','EB','EB'];

const ctxEBAlava = document.getElementById('ebAlavaChart').getContext('2d');

new Chart(ctxEBAlava, {
  data: {
    labels: etiquetasEBAlava,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosEBAlava,
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
        data: datosEBAlava,
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
      id: 'etiquetaPartidoEBAlava',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosEBAlava.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#a86f64';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosEBAlava[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UA Álava (votos totales) =================
const datosUAAlava = [14034, 25469, 14305, 3765];
const etiquetasUAAlava = ['1990','1994','1998','2005'];
const partidosUAAlava = ['UA','UA','UA','UA'];

const ctxUAAlava = document.getElementById('uaAlavaChart').getContext('2d');

new Chart(ctxUAAlava, {
  data: {
    labels: etiquetasUAAlava,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUAAlava,
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
        data: datosUAAlava,
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
      id: 'etiquetaPartidoUAAlava',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUAAlava.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8e6f87';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUAAlava[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= EA Álava (votos totales) =================
const datosEAAlava = [20349, 10332, 9958, 10718, 5280];
const etiquetasEAAlava = ['1986','1990','1994','1998','2009'];
const partidosEAAlava = ['EA','EA','EA','EA','EA'];

const ctxEAAlava = document.getElementById('eaAlavaChart').getContext('2d');

new Chart(ctxEAAlava, {
  data: {
    labels: etiquetasEAAlava,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosEAAlava,
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
        data: datosEAAlava,
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
      id: 'etiquetaPartidoEAAlava',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosEAAlava.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#5d7c5c';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosEAAlava[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= EE Álava (votos totales) =================
const datosEEAlava = [9658, 9633, 15277, 8526];
const etiquetasEEAlava = ['1980','1984','1986','1990'];
const partidosEEAlava = ['EE','EE','EE','EE'];

const ctxEEAlava = document.getElementById('eeAlavaChart').getContext('2d');

new Chart(ctxEEAlava, {
  data: {
    labels: etiquetasEEAlava,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosEEAlava,
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
        data: datosEEAlava,
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
      id: 'etiquetaPartidoEEAlava',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosEEAlava.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#9e5259';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosEEAlava[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UCD Álava (votos totales) =================
const datosUCDAlava = [20716];
const etiquetasUCDAlava = ['1980'];
const partidosUCDAlava = ['UCD'];

const ctxUCDAlava = document.getElementById('ucdAlavaChart').getContext('2d');

new Chart(ctxUCDAlava, {
  data: {
    labels: etiquetasUCDAlava,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUCDAlava,
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
        data: datosUCDAlava,
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
      id: 'etiquetaPartidoUCDAlava',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUCDAlava.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#b48f55';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUCDAlava[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CDS Álava (votos totales) =================
const datosCDSAlava = [11195, 2436];
const etiquetasCDSAlava = ['1986','1990'];
const partidosCDSAlava = ['CDS','CDS'];

const ctxCDSAlava = document.getElementById('cdsAlavaChart').getContext('2d');

new Chart(ctxCDSAlava, {
  data: {
    labels: etiquetasCDSAlava,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCDSAlava,
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
        data: datosCDSAlava,
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
      id: 'etiquetaPartidoCDSAlava',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSAlava.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1E90FF';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSAlava[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UPyD Álava (votos totales) =================
const datosUPyDAlava = [5990, 5435];
const etiquetasUPyDAlava = ['2009','2012'];
const partidosUPyDAlava = ['UPyD','UPyD'];

const ctxUPyDAlava = document.getElementById('upydAlavaChart').getContext('2d');

new Chart(ctxUPyDAlava, {
  data: {
    labels: etiquetasUPyDAlava,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUPyDAlava,
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
        data: datosUPyDAlava,
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
      id: 'etiquetaPartidoUPyDAlava',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDAlava.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#ff60da';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDAlava[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Datos Álava por partido =================
const etiquetasAlava = [
  '1980','1984','1986','1990','1994','1998','2001','2005','2009','2012','2016','2020','2024'
];

const datosAlava = {
  'HB/EH/EH Bildu': [14804, 13539, 17912, 16139, 13865, 20567, 11836, null, null, 34193, 26899, 30934, 44652],
  'PNV':           [31640, 44583, 28103, 28341, 29911, 36923, 64832, 51986, 45767, 40116, 42327, 40067, 40939],
  'PSOE':          [14694, 31485, 34806, 26894, 21431, 28670, 39469, 43216, 47523, 30358, 19489, 19452, 24783],
  'PP':            [6029, 20380, 9584, 13758, 21885, 45470, 62737, 43989, 32188, 29374, 27877, 14316, 24298],
  'VOX':           [null,null,null,null,null,null,null,null,null,null,771,4734,5623],
  'Podemos':       [null,null,null,null,null,null,null,null,null,null,24339,10092,3644],
  'Sumar':         [null,null,null,null,null,null,null,null,null,null,null,null,5603],
  'CS':            [null,null,null,null,null,null,null,null,null,null,4784,null,null],
  'Aralar':        [null,null,null,null,null,null,null,2542,6613,null,null,null,null],
  'PCTV-EHAK':     [null,null,null,null,null,null,null,14187,null,null,null,null,null],
  'EB':            [null,null,429,1451,12484,9606,11430,8409,5053,null,null,null,null],
  'UA':            [null,null,null,14034,25469,14305,null,3765,null,null,null,null,null],
  'EA':            [null,null,20349,10332,9958,10718,null,null,5280,null,null,null,null],
  'EE':            [9658,9633,15277,8526,null,null,null,null,null,null,null,null,null],
  'UCD':           [20716,null,null,null,null,null,null,null,null,null,null,null,null],
  'CDS':           [null,null,11195,2436,null,null,null,null,null,null,null,null,null],
  'UPyD':          [null,null,null,null,null,null,null,null,5990,5435,null,null,null]
};

const coloresPartidosAlava = {
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

const datasetsAlava = Object.keys(datosAlava).map(partido => ({
  type: 'line',
  label: partido,
  data: datosAlava[partido],
  borderColor: coloresPartidosAlava[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresPartidosAlava[partido],
  datalabels: { 
    display: true,
    color: coloresPartidosAlava[partido],
    font: { weight: 'bold', size: 12 },
    formatter: v => v != null ? v.toLocaleString() : ''
  }
}));

const ctxAlava = document.getElementById('votosTotalesAlavaChart').getContext('2d');

new Chart(ctxAlava, {
  data: {
    labels: etiquetasAlava,
    datasets: datasetsAlava
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