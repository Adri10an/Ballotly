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
// ================= PNV Vizcaya (votos totales) =================
const datosPNVVizcaya = [
  206051, 261911, 183766, 192903, 201833,
  224542, 335945, 267247, 241732, 230204,
  238581, 200339, 220967
];

const etiquetasPNVVizcaya = [
  '1980','1984','1986','1990','1994',
  '1998','2001','2005','2009','2012',
  '2016','2020','2024'
];

const partidosPNVVizcaya = Array(etiquetasPNVVizcaya.length).fill('PNV');

const ctxPNVVizcaya = document.getElementById('pnvVizcayaChart').getContext('2d');

new Chart(ctxPNVVizcaya, {
  data: {
    labels: etiquetasPNVVizcaya,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPNVVizcaya,
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
        data: datosPNVVizcaya,
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
      id: 'etiquetaPNVVizcaya',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPNVVizcaya.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#2F5A2D';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPNVVizcaya[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= EH Bildu Vizcaya (votos totales) =================
const datosEHBilduVizcaya = [
  84273, 77407, 101733, 91047, 76988,
  100377, 61894, 128644, 99610, 112619, 160194
];

const etiquetasEHBilduVizcaya = [
  '1980','1984','1986','1990','1994',
  '1998','2001','2012','2016','2020','2024'
];

const partidosEHBilduVizcaya = [
  'HB','HB','HB','HB','HB',
  'EH','EH','EHBildu','EHBildu','EHBildu','EHBildu'
];

const ctxEHBilduVizcaya = document.getElementById('ehbilduVizcayaChart').getContext('2d');

new Chart(ctxEHBilduVizcaya, {
  data: {
    labels: etiquetasEHBilduVizcaya,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosEHBilduVizcaya,
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
        data: datosEHBilduVizcaya,
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
      id: 'etiquetaEHBilduVizcaya',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosEHBilduVizcaya.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#3D8070';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosEHBilduVizcaya[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PSOE Vizcaya (votos totales) =================
const datosPSOEVizcaya = [
  74379, 138093, 143387, 111920, 99931,
  125834, 139684, 152459, 177875, 113536,
  66506, 64001, 78791
];

const etiquetasPSOEVizcaya = [
  '1980','1984','1986','1990','1994',
  '1998','2001','2005','2009','2012',
  '2016','2020','2024'
];

const partidosPSOEVizcaya = [
  'PSOE','PSOE','PSOE','PSOE','PSOE',
  'PSOE','PSOE','PSOE','PSOE','PSOE',
  'PSOE','PSOE','PSOE'
];

const ctxPSOEVizcaya = document.getElementById('psoeVizcayaChart').getContext('2d');

new Chart(ctxPSOEVizcaya, {
  data: {
    labels: etiquetasPSOEVizcaya,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPSOEVizcaya,
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
        data: datosPSOEVizcaya,
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
      id: 'etiquetaPartidoPSOEVizcaya',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSOEVizcaya.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSOEVizcaya[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});
    
// ================= PP Vizcaya (votos totales) =================
const datosPPVizcaya = [
  29747, 56207, 32764, 48405, 86398,
  139161, 181404, 114845, 81837, 70749,
  55128, 32248, 50819
];

const etiquetasPPVizcaya = [
  '1980','1984','1986','1990','1994','1998',
  '2001','2005','2009','2012','2016','2020','2024'
];

const partidosPPVizcaya = [
  'PP','PP','PP','PP','PP','PP',
  'PP','PP','PP','PP','PP','PP','PP'
];

const ctxPPVizcaya = document.getElementById('ppVizcayaChart').getContext('2d');

new Chart(ctxPPVizcaya, {
  data: {
    labels: etiquetasPPVizcaya,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPPVizcaya,
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
        data: datosPPVizcaya,
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
      id: 'etiquetaPartidoPPVizcaya',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPVizcaya.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPVizcaya[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Sumar Vizcaya (votos totales) =================
const datosSumarVizcaya = [18941];
const etiquetasSumarVizcaya = ['2024'];
const partidosSumarVizcaya = ['Sumar'];

const ctxSumarVizcaya = document.getElementById('sumarVizcayaChart').getContext('2d');

new Chart(ctxSumarVizcaya, {
  data: {
    labels: etiquetasSumarVizcaya,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosSumarVizcaya,
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
        data: datosSumarVizcaya,
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
      id: 'etiquetaPartidoSumarVizcaya',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosSumarVizcaya.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#B35487';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosSumarVizcaya[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Podemos Vizcaya (votos totales) =================
const datosPodemosVizcaya = [
  84195,   // 2016
  40453,   // 2020
  12609    // 2024
];

const etiquetasPodemosVizcaya = ['2016','2020','2024'];
const partidosPodemosVizcaya = ['Podemos','Podemos','Podemos'];

const ctxPodemosVizcaya = document.getElementById('podemosVizcayaChart').getContext('2d');

new Chart(ctxPodemosVizcaya, {
  data: {
    labels: etiquetasPodemosVizcaya,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPodemosVizcaya,
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
        data: datosPodemosVizcaya,
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
      id: 'etiquetaPartidoPodemosVizcaya',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosVizcaya.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosVizcaya[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= VOX Vizcaya (votos totales) =================
const datosVOXVizcaya = [
  8815,   // 2020
  10596   // 2024
];

const etiquetasVOXVizcaya = ['2020','2024'];
const partidosVOXVizcaya = ['VOX','VOX'];

const ctxVOXVizcaya = document.getElementById('voxVizcayaChart').getContext('2d');

new Chart(ctxVOXVizcaya, {
  data: {
    labels: etiquetasVOXVizcaya,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosVOXVizcaya,
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
        data: datosVOXVizcaya,
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
      id: 'etiquetaPartidoVOXVizcaya',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXVizcaya.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXVizcaya[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CS Vizcaya (votos totales) =================
const datosCSVizcaya = [10963];
const etiquetasCSVizcaya = ['2016'];
const partidosCSVizcaya = ['CS'];

const ctxCSVizcaya = document.getElementById('csVizcayaChart').getContext('2d');

new Chart(ctxCSVizcaya, {
  data: {
    labels: etiquetasCSVizcaya,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCSVizcaya,
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
        data: datosCSVizcaya,
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
      id: 'etiquetaPartidoCSVizcaya',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSVizcaya.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSVizcaya[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Aralar Vizcaya (votos totales) =================
const datosAralarVizcaya = [10242, 24639];
const etiquetasAralarVizcaya = ['2005','2009'];
const partidosAralarVizcaya = ['Aralar','Aralar'];

const ctxAralarVizcaya = document.getElementById('aralarVizcayaChart').getContext('2d');

new Chart(ctxAralarVizcaya, {
  data: {
    labels: etiquetasAralarVizcaya,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosAralarVizcaya,
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
        data: datosAralarVizcaya,
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
      id: 'etiquetaPartidoAralarVizcaya',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosAralarVizcaya.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#6b5057';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosAralarVizcaya[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PCTV-EHAK Vizcaya (votos totales) =================
const datosPCTVVizcaya = [65623];
const etiquetasPCTVVizcaya = ['2005'];
const partidosPCTVVizcaya = ['PCTV-EHAK'];

const ctxPCTVVizcaya = document.getElementById('pctvVizcayaChart').getContext('2d');

new Chart(ctxPCTVVizcaya, {
  data: {
    labels: etiquetasPCTVVizcaya,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPCTVVizcaya,
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
        data: datosPCTVVizcaya,
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
      id: 'etiquetaPartidoPCTVVizcaya',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPCTVVizcaya.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#7d5048';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPCTVVizcaya[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= EB Vizcaya (votos totales) =================
const datosEBVizcaya = [5055, 9609, 57765, 42714, 43701, 36226, 20080];
const etiquetasEBVizcaya = ['1986','1990','1994','1998','2001','2005','2009'];
const partidosEBVizcaya = ['EB','EB','EB','EB','EB','EB','EB'];

const ctxEBVizcaya = document.getElementById('ebVizcayaChart').getContext('2d');

new Chart(ctxEBVizcaya, {
  data: {
    labels: etiquetasEBVizcaya,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosEBVizcaya,
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
        data: datosEBVizcaya,
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
      id: 'etiquetaPartidoEBVizcaya',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosEBVizcaya.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#a86f64';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosEBVizcaya[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UA Vizcaya (votos totales) =================
const datosUAVizcaya = [183, 1489, 913, 216];
const etiquetasUAVizcaya = ['1990','1994','1998','2005'];
const partidosUAVizcaya = ['UA','UA','UA','UA'];

const ctxUAVizcaya = document.getElementById('uaVizcayaChart').getContext('2d');

new Chart(ctxUAVizcaya, {
  data: {
    labels: etiquetasUAVizcaya,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUAVizcaya,
        backgroundColor: '#AE6293', // UA
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
        data: datosUAVizcaya,
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
      id: 'etiquetaPartidoUAVizcaya',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUAVizcaya.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8e6f87';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUAVizcaya[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= EA Vizcaya (votos totales) =================
const datosEAVizcaya = [74921, 44922, 40752, 41096, 17033];
const etiquetasEAVizcaya = ['1986','1990','1994','1998','2009'];
const partidosEAVizcaya = ['EA','EA','EA','EA','EA'];

const ctxEAVizcaya = document.getElementById('eaVizcayaChart').getContext('2d');

new Chart(ctxEAVizcaya, {
  data: {
    labels: etiquetasEAVizcaya,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosEAVizcaya,
        backgroundColor: '#298242', // EA
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
        data: datosEAVizcaya,
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
      id: 'etiquetaPartidoEAVizcaya',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosEAVizcaya.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#5d7c5c';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosEAVizcaya[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= EE Vizcaya (votos totales) =================
const datosEEVizcaya = [40085, 44500, 65116, 40983];
const etiquetasEEVizcaya = ['1980','1984','1986','1990'];
const partidosEEVizcaya = ['EE','EE','EE','EE'];

const ctxEEVizcaya = document.getElementById('eeVizcayaChart').getContext('2d');

new Chart(ctxEEVizcaya, {
  data: {
    labels: etiquetasEEVizcaya,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosEEVizcaya,
        backgroundColor: '#DC143C', // EE
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
        data: datosEEVizcaya,
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
      id: 'etiquetaPartidoEEVizcaya',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosEEVizcaya.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#9e5259';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosEEVizcaya[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UCD Vizcaya (votos totales) =================
const datosUCDVizcaya = [34781];
const etiquetasUCDVizcaya = ['1980'];
const partidosUCDVizcaya = ['UCD'];

const ctxUCDVizcaya = document.getElementById('ucdVizcayaChart').getContext('2d');

new Chart(ctxUCDVizcaya, {
  data: {
    labels: etiquetasUCDVizcaya,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUCDVizcaya,
        backgroundColor: '#FFA500', // UCD
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
        data: datosUCDVizcaya,
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
      id: 'etiquetaPartidoUCDVizcaya',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUCDVizcaya.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#b48f55';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUCDVizcaya[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CDS Vizcaya (votos totales) =================
const datosCDSVizcaya = [20387, 3069];
const etiquetasCDSVizcaya = ['1986','1990'];
const partidosCDSVizcaya = ['CDS','CDS'];

const ctxCDSVizcaya = document.getElementById('cdsVizcayaChart').getContext('2d');

new Chart(ctxCDSVizcaya, {
  data: {
    labels: etiquetasCDSVizcaya,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCDSVizcaya,
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
        data: datosCDSVizcaya,
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
      id: 'etiquetaPartidoCDSVizcaya',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSVizcaya.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1E90FF';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSVizcaya[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UPyD Vizcaya (votos totales) =================
const datosUPyDVizcaya = [10916, 10855];
const etiquetasUPyDVizcaya = ['2009','2012'];
const partidosUPyDVizcaya = ['UPyD','UPyD'];

const ctxUPyDVizcaya = document.getElementById('upydVizcayaChart').getContext('2d');

new Chart(ctxUPyDVizcaya, {
  data: {
    labels: etiquetasUPyDVizcaya,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUPyDVizcaya,
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
        data: datosUPyDVizcaya,
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
      id: 'etiquetaPartidoUPyDVizcaya',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDVizcaya.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#ff60da';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDVizcaya[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Datos Vizcaya por partido ================= 
const etiquetasVizcaya = [
  '1980','1984','1986','1990','1994','1998','2001','2005','2009','2012','2016','2020','2024'
];

const datosVizcaya = {
  'PNV':           [206051, 261911, 183766, 192903, 201833, 224542, 335945, 267247, 241732, 230204, 238581, 200339, 220967],
  'HB/EH/EH Bildu':[84273, 77407, 101733, 91047, 76988, 100377, 61894,null,null, 128644, 99610, 112619, 160194],
  'PSOE':          [74379, 138093, 143387, 111920, 99931, 125834, 139684, 152459, 177875, 113536, 66506, 64001, 78791],
  'PP':            [29747, 56207, 32764, 48405, 86398, 139161, 181404, 114845, 81837, 70749, 55128, 32248, 50819],
  'VOX':           [null, null, null, null, null, null, null, null, null,null, null, 8815, 10596],
  'Podemos':       [null, null, null, null, null, null, null, null, null, null, 84195, 40453, 12609],
  'Sumar':         [null, null, null, null, null, null, null, null, null, null, null, null, 18941],
  'CS':            [null, null, null, null, null, null, null, null, null, null, 10963, null, null],
  'Aralar':        [null, null, null, null, null, null, null, 10242, 24639, null, null, null, null],
  'PCTV-EHAK':     [null, null, null, null, null, null, null, 65623, null, null, null, null, null],
  'EB':            [null, null, 5055, 9609, 57765, 42714, 43701, 36226, 20080, null, null, null, null],
  'UA':            [null, null, null, 183, 1489, 913, null, 216, null, null, null, null, null],
  'EA':            [null, null, 74921, 44922, 40752, 41096, null, null, 17033, null, null, null, null],
  'EE':            [40085, 44500, 65116, 40983, null, null, null, null, null, null, null, null, null],
  'UCD':           [34781, null, null, null, null, null, null, null, null, null, null, null, null],
  'CDS':           [null, null, 20387, 3069, null, null, null, null, null, null, null, null, null],
  'UPyD':          [null, null, null, null, null, null, null, null, 10916, 10855, null, null, null]
};

const coloresPartidosVizcaya = {
  'PNV': '#298242',
  'HB/EH/EH Bildu': '#01B59C',
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

const datasetsVizcaya = Object.keys(datosVizcaya).map(partido => ({
  type: 'line',
  label: partido,
  data: datosVizcaya[partido],
  borderColor: coloresPartidosVizcaya[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresPartidosVizcaya[partido],
  datalabels: {
    display: true,
    color: coloresPartidosVizcaya[partido],
    font: { weight: 'bold', size: 12 },
    formatter: v => v != null ? v.toLocaleString() : ''
  }
}));

const ctxVizcaya = document.getElementById('votosTotalesVizcayaChart').getContext('2d');

new Chart(ctxVizcaya, {
  data: {
    labels: etiquetasVizcaya,
    datasets: datasetsVizcaya
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