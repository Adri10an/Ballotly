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
// ================= PP Palencia =================
// ================= PP Valladolid =================
const datosVoto = [
  45162,  // 1980
  102839, // 1984
  91381,  // 1988
  92210,  // 1992
  98995,  // 1995
  91199,  // 1999
  84410,  // 2003
  72916,  // 2006
  86525,  // 2010
  88636,  // 2012
  126064, // 2015
  78303,  // 2017
  44787,  // 2021
  50461   // 2024
];

const etiquetas = ['1980', '1984', '1988', '1992', '1995', '1999', '2003', '2006', '2010', '2012', '2015', '2017', '2021', '2024'];

const ctx = document.getElementById('ciuJuntsChart').getContext('2d');

const data = {
  labels: etiquetas,
  datasets: [
    {
      type: 'bar',
      label: 'Votos',
      data: datosVoto,
      backgroundColor: 'rgba(64, 224, 208, 0.7)', // turquesa CIU/Junts
      borderColor: '#40E0D0',
      borderWidth: 1,
      datalabels: {
        anchor: 'end',
        align: 'top',
        color: '#008B8B',
        font: { weight: 'bold' },
        formatter: (value) => value.toLocaleString('es-ES') // separador de miles
      }
    },
    {
      type: 'line',
      label: 'Tendencia',
      data: datosVoto,
      borderColor: '#40E0D0',
      backgroundColor: 'transparent',
      fill: false,
      tension: 0.3,
      pointRadius: 4,
      pointBackgroundColor: '#40E0D0'
    }
  ]
};

const config = {
  data: data,
  options: {
    responsive: true,
    animation: {
      duration: 1500,
      easing: 'easeOutBounce',
    },
    plugins: {
      legend: {
        position: 'top',
        labels: { color: '#333' }
      },
      datalabels: {
        display: true
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (ctx) => ctx.raw.toLocaleString('es-ES') + ' votos'
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Número de votos',
          color: '#333'
        },
        ticks: { color: '#333' }
      },
      x: {
        title: {
          display: true,
          text: 'Año',
          color: '#333'
        },
        ticks: { color: '#333' }
      }
    }
  },
  plugins: [
    {
      id: 'variacionPlugin',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;

        const partidos = ['CIU', 'CIU', 'CIU', 'CIU', 'CIU', 'CIU', 'CIU', 'CIU', 'CIU', 'CIU', 'JxSí', 'Junts', 'Junts', 'Junts'];
        datosVoto.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;

          ctx.save();
          ctx.fillStyle = '#888';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidos[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
};

new Chart(ctx, config);


const datosPPLleida = [
  37405,  // 1980 (AP-PDP-UL)
  15751,  // 1984 (AP)
  10487,  // 1988 (AP)
  11824,  // 1992 (PP)
  24319,  // 1995
  15121,  // 1999
  19690,  // 2003
  16605,  // 2006
  18863,  // 2010
  23269,  // 2012
  16694,  // 2015
  10902,  // 2017
  5660,   // 2021
  15304   // 2024
];

const etiquetasPPLleida = ['1980','1984','1988','1992','1995','1999','2003','2006','2010','2012','2015','2017','2021','2024'];
const partidosPPLleida = ['AP-PDP-UL','AP','AP','PP','PP','PP','PP','PP','PP','PP','PP','PP','PP','PP'];

const ctxPPLleida = document.getElementById('ppLleidaChart').getContext('2d');

new Chart(ctxPPLleida, {
  data: {
    labels: etiquetasPPLleida,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPPLleida,
        backgroundColor: 'rgba(0,0,255,0.7)', // azul PP
        borderColor: '#0000FF',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#00008B', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString('es-ES') 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPPLleida,
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
    animation: { duration: 1500, easing: 'easeOutBounce' },
    plugins: { 
      legend: { position: 'top', labels: { color: '#333' } }, 
      datalabels: { display: true },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (ctx) => ctx.raw.toLocaleString('es-ES') + ' votos'
        }
      }
    },
    scales: {
      y: { beginAtZero: true, title: { display: true, text: 'Número de votos', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoPPLleida',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPLleida.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPLleida[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxPSEOLleida = document.getElementById('psoeLleidaChart').getContext('2d');

const datosPSEOLleida = [
  30812,  35506,  39144,  37551,  38796,  55963,  45723,  40097,
  27242,  21466,  19314,  21795,  23965,  34103
];

const etiquetasPSEOLleida = [
  '1980','1984','1988','1992','1995','1999','2003','2006',
  '2010','2012','2015','2017','2021','2024'
];

const partidosPSEOLleida = Array(datosPSEOLleida.length).fill('PSOE');

new Chart(ctxPSEOLleida, {
  data: {
    labels: etiquetasPSEOLleida,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPSEOLleida,
        backgroundColor: 'rgba(255,0,0,0.7)', // rojo PSOE
        borderColor: '#FF0000',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#FF0000',
          font: { weight: 'bold' },
          formatter: (v) => v.toLocaleString('es-ES')
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPSEOLleida,
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
    animation: { duration: 1500, easing: 'easeOutBounce' },
    plugins: {
      legend: { position: 'top', labels: { color: '#333' } },
      tooltip: {
        callbacks: {
          label: (ctx) => ctx.raw.toLocaleString('es-ES') + ' votos'
        }
      },
      datalabels: { display: true }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: 'Número de votos', color: '#333' },
        ticks: { color: '#333' }
      },
      x: {
        title: { display: true, text: 'Año', color: '#333' },
        ticks: { color: '#333' }
      }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoPSEOLleida',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSEOLleida.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSEOLleida[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosERCLleida = [
  19565,  // 1980
  10171,  // 1984
  10014,  // 1988
  16839,  // 1992
  25533,  // 1995
  22011,  // 1999
  40574,  // 2003
  32304,  // 2006
  16877,  // 2010
  35833,  // 2012
  126064, // 2015
  64417,  // 2017
  42455,  // 2021
  27155   // 2024
];

const etiquetasERCLleida = ['1980','1984','1988','1992','1995','1999','2003','2006','2010','2012','2015','2017','2021','2024'];
const partidosERCLleida = ['ERC','ERC','ERC','ERC','ERC','ERC','ERC','ERC','ERC','ERC','ERC','ERC','ERC','ERC'];

const ctxERCLleida = document.getElementById('ercLleidaChart').getContext('2d');

new Chart(ctxERCLleida, {
  data: {
    labels: etiquetasERCLleida,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosERCLleida,
        backgroundColor: 'rgba(201,159,0,0.7)', // color ERC
        borderColor: '#c99f00',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#c99f00', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString('es-ES') 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosERCLleida,
        borderColor: '#c99f00',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#c99f00'
      }
    ]
  },
  options: {
    responsive: true,
    animation: { duration: 1500, easing: 'easeOutBounce' },
    plugins: { 
      legend: { position: 'top', labels: { color: '#333' } }, 
      datalabels: { display: true },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (ctx) => ctx.raw.toLocaleString('es-ES') + ' votos'
        }
      }
    },
    scales: {
      y: { beginAtZero: true, title: { display: true, text: 'Número de votos', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoERCLleida',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosERCLleida.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#c99f00';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosERCLleida[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});


const ctxACLleida = document.getElementById('acLleidaChart').getContext('2d');

const datosACLleida = [13053];
const etiquetasACLleida = ['2024'];
const partidosACLleida = ['AC'];

new Chart(ctxACLleida, {
  data: {
    labels: etiquetasACLleida,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosACLleida,
        backgroundColor: 'rgba(1,73,131,0.7)', // azul oscuro AC
        borderColor: '#014983',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#014983',
          font: { weight: 'bold' },
          formatter: (v) => v.toLocaleString('es-ES')
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosACLleida,
        borderColor: '#014983',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#014983'
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'top', labels: { color: '#333' } },
      tooltip: {
        callbacks: {
          label: (ctx) => ctx.raw.toLocaleString('es-ES') + ' votos'
        }
      },
      datalabels: { display: true }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: 'Número de votos', color: '#333' },
        ticks: { color: '#333' }
      },
      x: {
        title: { display: true, text: 'Año', color: '#333' },
        ticks: { color: '#333' }
      }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoACLleida',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosACLleida.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#014983';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosACLleida[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxVOXLleida = document.getElementById('voxLleidaChart').getContext('2d');

const datosVOXLleida = [8839, 10397];
const etiquetasVOXLleida = ['2017', '2021'];
const partidosVOXLleida = ['VOX', 'VOX'];

new Chart(ctxVOXLleida, {
  data: {
    labels: etiquetasVOXLleida,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosVOXLleida,
        backgroundColor: 'rgba(0,128,0,0.7)', // verde VOX
        borderColor: '#008000',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#006400', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString('es-ES') 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosVOXLleida,
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
    animation: { duration: 1500, easing: 'easeOutBounce' },
    plugins: { 
      legend: { position: 'top', labels: { color: '#333' } }, 
      datalabels: { display: true } 
    },
    scales: {
      y: { beginAtZero: true, title: { display: true, text: 'Número de votos', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoVOXLleida',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXLleida.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXLleida[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxCSLleida = document.getElementById('csLleidaChart').getContext('2d');

const datosCSLleida = [1761, 2744, 6877, 26543, 40908, 5127, 559];
const etiquetasCSLleida = ['2006','2010','2012','2015','2017','2021','2024'];
const partidosCSLleida = Array(datosCSLleida.length).fill('CS');

new Chart(ctxCSLleida, {
  data: {
    labels: etiquetasCSLleida,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCSLleida,
        backgroundColor: 'rgba(255,140,0,0.7)', // naranja CS
        borderColor: '#FF8C00',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#FF4500', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString('es-ES') 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCSLleida,
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
    animation: { duration: 1500, easing: 'easeOutBounce' },
    plugins: { 
      legend: { position: 'top', labels: { color: '#333' } }, 
      datalabels: { display: true } 
    },
    scales: {
      y: { beginAtZero: true, title: { display: true, text: 'Número de votos', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoCSLleida',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSLleida.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSLleida[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxCUPLleida = document.getElementById('cupLleidaChart').getContext('2d');

const datosCUPLleida = [6289, 18627, 12140, 11812, 7097];
const etiquetasCUPLleida = ['2012','2015','2017','2021','2024'];
const partidosCUPLleida = ['CUP','CUP','CUP','CUP','CUP'];

new Chart(ctxCUPLleida, {
  data: {
    labels: etiquetasCUPLleida,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCUPLleida,
        backgroundColor: 'rgba(1,1,1,0.7)', // negro CUP
        borderColor: '#010101',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#010101', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString('es-ES') 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCUPLleida,
        borderColor: '#010101',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#010101'
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
      y: { beginAtZero: true, title: { display: true, text: 'Número de votos', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoCUPLleida',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCUPLleida.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#010101';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCUPLleida[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxPodemosLleida = document.getElementById('podemosLleidaChart').getContext('2d');

const datosPodemosLleida = [9806, 9415, 5155, 3597];
const etiquetasPodemosLleida = ['2015','2017','2021','2024'];
const partidosPodemosLleida = ['Podemos','Podemos','Podemos','Podemos'];

new Chart(ctxPodemosLleida, {
  data: {
    labels: etiquetasPodemosLleida,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPodemosLleida,
        backgroundColor: 'rgba(128,0,128,0.7)', // morado Podemos
        borderColor: '#800080',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#4B0082', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString('es-ES') 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPodemosLleida,
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
    animation: { duration: 1500, easing: 'easeOutBounce' },
    plugins: { 
      legend: { position: 'top', labels: { color: '#333' } }, 
      datalabels: { display: true } 
    },
    scales: {
      y: { beginAtZero: true, title: { display: true, text: 'Número de votos', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoPodemosLleida',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosLleida.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosLleida[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxCDSLleida = document.getElementById('cdsLleidaChart').getContext('2d');

const datosCDSLleida = [7285, 1247];
const etiquetasCDSLleida = ['1988','1992'];
const partidosCDSLleida = Array(datosCDSLleida.length).fill('CDS');

new Chart(ctxCDSLleida, {
  data: {
    labels: etiquetasCDSLleida,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCDSLleida,
        backgroundColor: 'rgba(0,191,255,0.7)', // azul celeste CDS
        borderColor: '#00BFFF',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#005f80', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString('es-ES') 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCDSLleida,
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
    animation: { duration: 1500, easing: 'easeOutBounce' },
    plugins: { 
      legend: { position: 'top', labels: { color: '#333' } }, 
      datalabels: { display: true } 
    },
    scales: {
      y: { beginAtZero: true, title: { display: true, text: 'Número de votos', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoCDSLleida',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSLleida.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#005f80';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSLleida[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxEntesaICVLleida = document.getElementById('entesaICVLleidaChart').getContext('2d');

const datosEntesaICVLleida = [
  2913, 6080, 4946, 8282, 55963,
  8863, 12018, 7384, 11079,
  9806, 9415, 5155, 3597
];

const etiquetasEntesaICVLleida = [
  '1984','1988','1992','1995','1999',
  '2003','2006','2010','2012',
  '2015','2017','2021','2024'
];

const partidosEntesaICVLleida = [
  'Entesa','Entesa','Entesa','ICV','ICV',
  'ICV','ICV','ICV','CatComú',
  'ECP','ECP','ECP','ECP'
];

new Chart(ctxEntesaICVLleida, {
  data: {
    labels: etiquetasEntesaICVLleida,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosEntesaICVLleida,
        backgroundColor: 'rgba(139,0,0,0.7)', // rojo oscuro
        borderColor: '#8B0000',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#8B0000', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString('es-ES') 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosEntesaICVLleida,
        borderColor: '#8B0000',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#8B0000'
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
      y: { beginAtZero: true, title: { display: true, text: 'Número de votos', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoEntesaICV',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosEntesaICVLleida.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosEntesaICVLleida[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxUPyDLleida = document.getElementById('upydLleidaChart').getContext('2d');

const datosUPyDLleida = [88, 390];
const etiquetasUPyDLleida = ['2010','2012'];
const partidosUPyDLleida = ['UPyD','UPyD'];

new Chart(ctxUPyDLleida, {
  data: {
    labels: etiquetasUPyDLleida,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUPyDLleida,
        backgroundColor: 'rgba(255,96,218,0.7)',
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
        data: datosUPyDLleida,
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
    animation: { duration: 1500, easing: 'easeOutBounce' },
    plugins: { 
      legend: { position: 'top', labels: { color: '#333' } }, 
      datalabels: { display: true } 
    },
    scales: {
      y: { beginAtZero: true, title: { display: true, text: 'Número de votos', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoUPyDLleida',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDLleida.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#ff60da';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDLleida[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxPSUCLleida = document.getElementById('psucLleidaChart').getContext('2d');

const datosPSUCLleida = [16968, 4964];
const etiquetasPSUCLleida = ['1980','1984'];
const partidosPSUCLleida = Array(datosPSUCLleida.length).fill('PSUC');

new Chart(ctxPSUCLleida, {
  data: {
    labels: etiquetasPSUCLleida,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPSUCLleida,
        backgroundColor: 'rgba(197,0,66,0.7)', // rojo PSUC
        borderColor: '#c50042',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#c50042', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString('es-ES') 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPSUCLleida,
        borderColor: '#c50042',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#c50042'
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
      y: { beginAtZero: true, title: { display: true, text: 'Número de votos', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoPSUCLleida',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSUCLleida.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#c50042';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSUCLleida[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxPDECatLleida = document.getElementById('pdecatLleidaChart').getContext('2d');

const datosPDECatLleida = [7345];
const etiquetasPDECatLleida = ['2021'];
const partidosPDECatLleida = ['PDECat'];

new Chart(ctxPDECatLleida, {
  data: {
    labels: etiquetasPDECatLleida,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPDECatLleida,
        backgroundColor: 'rgba(1,131,203,0.7)',
        borderColor: '#0183cb',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#0183cb', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPDECatLleida,
        borderColor: '#0183cb',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#0183cb'
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
      y: { beginAtZero: true, title: { display: true, text: 'Número de votos', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoPDECatLleida',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPDECatLleida.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#0183cb';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPDECatLleida[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});


  // Etiquetas (años) usadas en los gráficos de Lleida
  const etiquetasLleida = ['1980','1984','1988','1992','1995','1999','2003','2006','2010','2012','2015','2017','2021','2024'];

  // Datos por partido alineados con 'etiquetasLleida' (null donde no hay dato)
  const datosLleidaTotal = {
    'CIU / JxSí / Junts': [
      45162, 102839, 91381, 92210, 98995, 91199, 84410, 72916, 86525, 88636, 126064, 78303, 44787, 50461
    ],
    'PSOE': [
      30812, 35506, 39144, 37551, 38796, 55963, 45723, 40097, 27242, 21466, 19314, 21795, 23965, 34103
    ],
    'ERC': [
      19565, 10171, 10014, 16839, 25533, 22011, 40574, 32304, 16877, 35833, 126064, 64417, 42455, 27155
    ],
    'PP / AP': [
      37405, 15751, 10487, 11824, 24319, 15121, 19690, 16605, 18863, 23269, 16694, 10902, 5660, 15304
    ],
    'AC': [
      null,null,null,null,null,null,null,null,null,null,null,null,null,13053
    ],
    'VOX': [
      null,null,null,null,null,null,null,null,null,null,null,null,8839,10397
    ],
    'CUP': [
      null,null,null,null,null,null,null,null,null,6289,18627,12140,11812,7097
    ],
    'Podemos': [
      null,null,null,null,null,null,null,null,null,null,9806,9415,5155,3597
    ],
    'CS': [
      null,null,null,null,null,null,null,1761,2744,6877,26543,40908,5127,559
    ],
    'PSUC': [
      16968,4964,null,null,null,null,null,null,null,null,null,null,null,null
    ],
    'CDS': [
      null,null,7285,1247,null,null,null,null,null,null,null,null,null,null
    ],
    'Entesa/ICV/CatComú/ECP': [
      null,2913,6080,4946,8282,55963,8863,12018,7384,11079,9806,9415,5155,3597
    ],
    'UPyD': [
      null,null,null,null,null,null,null,null,null,88,390,null,null,null
    ],
    'PDECat': [
      null,null,null,null,null,null,null,null,null,null,null,null,7345,null
    ]
  };

  // Colores por partido (ajusta si quieres)
  const coloresLleida = {
    'CIU / JxSí / Junts': '#40E0D0',
    'PSOE': '#FF0000',
    'ERC': '#c99f00',
    'PP / AP': '#0000FF',
    'AC': '#014983',
    'VOX': '#008000',
    'CUP': '#010101',
    'Podemos': '#800080',
    'CS': '#FF8C00',
    'PSUC': '#c50042',
    'CDS': '#00BFFF',
    'Entesa/ICV/CatComú/ECP': '#8B0000',
    'UPyD': '#ff60da',
    'PDECat': '#0183cb'
  };

  // Construir datasets (líneas) a partir de datosLleidaTotal
  const datasetsLleida = Object.keys(datosLleidaTotal).map(partido => ({
    type: 'line',
    label: partido,
    data: datosLleidaTotal[partido],
    borderColor: coloresLleida[partido] || '#666',
    backgroundColor: 'transparent',
    fill: false,
    tension: 0.3,
    spanGaps: true,
    pointRadius: 4,
    pointBackgroundColor: coloresLleida[partido] || '#666',
    datalabels: {
      display: true,
      color: coloresLleida[partido] || '#666',
      font: { weight: 'bold', size: 11 },
      formatter: v => v != null ? v.toLocaleString('es-ES') : ''
    }
  }));

  // Crear el chart (idéntico estilo general al que tenías para Madrid)
  const ctxLleida = document.getElementById('lleidaChart').getContext('2d');
  new Chart(ctxLleida, {
    data: {
      labels: etiquetasLleida,
      datasets: datasetsLleida
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'top', labels: { color: '#333' } },
        datalabels: { display: true },
        tooltip: {
          callbacks: {
            label: (ctx) => {
              const v = ctx.raw;
              return (v == null ? '—' : v.toLocaleString('es-ES')) + ' votos';
            }
          }
        }
      },
      scales: {
        y: { beginAtZero: true, title: { display: true, text: 'Votos', color: '#333' }, ticks: { color: '#333' } },
        x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
      }
    },
    plugins: [ ChartDataLabels ]
  });