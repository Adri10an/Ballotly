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
const datosVotoJuntsGirona = [
  84451,   // 1980
  147208,  // 1984
  135146,  // 1988
  134621,  // 1992
  140012,  // 1995
  137079,  // 1999
  118286,  // 2003
  104840,  // 2006
  131690,  // 2010
  147827,  // 2012
  215485,  // 2015
  149638,  // 2017
  89770,   // 2021
  102900   // 2024
];

const etiquetasJuntsGirona = [
  '1980', '1984', '1988', '1992', '1995', '1999',
  '2003', '2006', '2010', '2012', '2015', '2017', '2021', '2024'
];

const ctxJuntsGirona = document.getElementById('juntsGironaChart').getContext('2d');

const dataJuntsGirona = {
  labels: etiquetasJuntsGirona,
  datasets: [
    {
      type: 'bar',
      label: 'Votos',
      data: datosVotoJuntsGirona,
      backgroundColor: 'rgba(64, 224, 208, 0.7)', // turquesa CIU/Junts
      borderColor: '#40E0D0',
      borderWidth: 1,
      datalabels: {
        anchor: 'end',
        align: 'top',
        color: '#008B8B',
        font: { weight: 'bold' },
        formatter: (value) => value.toLocaleString('es-ES')
      }
    },
    {
      type: 'line',
      label: 'Tendencia',
      data: datosVotoJuntsGirona,
      borderColor: '#40E0D0',
      backgroundColor: 'transparent',
      fill: false,
      tension: 0.3,
      pointRadius: 4,
      pointBackgroundColor: '#40E0D0'
    }
  ]
};

const configJuntsGirona = {
  data: dataJuntsGirona,
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
      id: 'variacionPluginJuntsGirona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;

        const partidos = [
          'CIU', 'CIU', 'CIU', 'CIU', 'CIU', 'CIU',
          'CIU', 'CIU', 'CIU', 'CIU',
          'JxSí', 'Junts', 'Junts', 'Junts'
        ];

        datosVotoJuntsGirona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;

          ctx.save();
          ctx.fillStyle = '#008B8B';
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

new Chart(ctxJuntsGirona, configJuntsGirona);

const ctxPPGirona = document.getElementById('ppGironaChart').getContext('2d');

const datosPPGirona = [
  34482,  // 1980 (AP-PDP-UL)
  13807,  // 1984 (AP)
  8941,   // 1988 (AP)
  9817,   // 1992 (PP)
  22618,  // 1995
  17079,  // 1999
  24698,  // 2003
  19808,  // 2006
  25050,  // 2010
  32912,  // 2012
  22572,  // 2015
  11646,  // 2017
  5470,   // 2021
  19447   // 2024
];

const etiquetasPPGirona = [
  '1980','1984','1988','1992','1995','1999','2003','2006',
  '2010','2012','2015','2017','2021','2024'
];

const partidosPPGirona = [
  'AP-PDP-UL','AP','AP','PP','PP','PP','PP','PP',
  'PP','PP','PP','PP','PP','PP'
];

new Chart(ctxPPGirona, {
  data: {
    labels: etiquetasPPGirona,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPPGirona,
        backgroundColor: 'rgba(0,0,255,0.7)', // azul PP Lleida
        borderColor: '#0000FF',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#00008B', // igual que Lleida
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString('es-ES') 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPPGirona,
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
      id: 'etiquetaPartidoPPGirona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPGirona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B'; // igual que Lleida
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPGirona[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxPSOEGirona = document.getElementById('psoeGironaChart').getContext('2d');

const datosPSOEGirona = [
  44691,  // 1980
  53058,  // 1984
  56765,  // 1988
  54085,  // 1992
  74124,  // 1995
  82502,  // 1999
  72352,  // 2003
  60755,  // 2006
  41498,  // 2010
  34567,  // 2012
  33336,  // 2015
  35197,  // 2017
  41678,  // 2021
  57777   // 2024
];

const etiquetasPSOEGirona = [
  '1980','1984','1988','1992','1995','1999','2003','2006',
  '2010','2012','2015','2017','2021','2024'
];

const partidosPSOEGirona = Array(datosPSOEGirona.length).fill('PSOE');

new Chart(ctxPSOEGirona, {
  data: {
    labels: etiquetasPSOEGirona,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPSOEGirona,
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
        data: datosPSOEGirona,
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
      id: 'etiquetaPartidoPSOEGirona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSOEGirona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSOEGirona[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxERCGirona = document.getElementById('ercGironaChart').getContext('2d');

const datosERCGirona = [
  24201,  // 1980
  15175,  // 1984
  13175,  // 1988
  28764,  // 1992
  35338,  // 1995
  36159,  // 1999
  66989,  // 2003
  52799,  // 2006
  26828,  // 2010
  61020,  // 2012
  215485, // 2015
  88582,  // 2017
  59893,  // 2021
  35456   // 2024
];

const etiquetasERCGirona = [
  '1980','1984','1988','1992','1995','1999','2003','2006',
  '2010','2012','2015','2017','2021','2024'
];

const partidosERCGirona = Array(datosERCGirona.length).fill('ERC');

new Chart(ctxERCGirona, {
  data: {
    labels: etiquetasERCGirona,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosERCGirona,
        backgroundColor: 'rgba(201,159,0,0.7)', // amarillo ERC
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
        data: datosERCGirona,
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
      id: 'etiquetaPartidoERCGirona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosERCGirona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#c99f00';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosERCGirona[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxACGirona = document.getElementById('acGironaChart').getContext('2d');

const datosACGirona = [27028];
const etiquetasACGirona = ['2024'];
const partidosACGirona = ['AC'];

new Chart(ctxACGirona, {
  data: {
    labels: etiquetasACGirona,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosACGirona,
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
        data: datosACGirona,
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
      id: 'etiquetaPartidoACGirona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosACGirona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#014983';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosACGirona[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxVOXGirona = document.getElementById('voxGironaChart').getContext('2d');

const datosVOXGirona = [
  16917, // 2021
  18891  // 2024
];

const etiquetasVOXGirona = ['2021','2024'];
const partidosVOXGirona = ['VOX','VOX'];

new Chart(ctxVOXGirona, {
  data: {
    labels: etiquetasVOXGirona,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosVOXGirona,
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
        data: datosVOXGirona,
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
      datalabels: { display: true },
      tooltip: {
        callbacks: {
          label: (ctx) => ctx.raw.toLocaleString('es-ES') + ' votos'
        }
      }
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
      id: 'etiquetaPartidoVOXGirona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXGirona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXGirona[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxCSGirona = document.getElementById('csGironaChart').getContext('2d');

const datosCSGirona = [2584, 4926, 12325, 48244, 79634, 8935, 965];
const etiquetasCSGirona = ['2006','2010','2012','2015','2017','2021','2024'];
const partidosCSGirona = Array(datosCSGirona.length).fill('CS');

new Chart(ctxCSGirona, {
  data: {
    labels: etiquetasCSGirona,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCSGirona,
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
        data: datosCSGirona,
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
      datalabels: { display: true },
      tooltip: {
        callbacks: {
          label: (ctx) => ctx.raw.toLocaleString('es-ES') + ' votos'
        }
      }
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
      id: 'etiquetaPartidoCSGirona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSGirona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSGirona[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxCUPGirona = document.getElementById('cupGironaChart').getContext('2d');

const datosCUPGirona = [
  14502, // 2012
  32971, // 2015
  21708, // 2017
  24837, // 2021
  14621  // 2024
];

const etiquetasCUPGirona = ['2012','2015','2017','2021','2024'];
const partidosCUPGirona = ['CUP','CUP','CUP','CUP','CUP'];

new Chart(ctxCUPGirona, {
  data: {
    labels: etiquetasCUPGirona,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCUPGirona,
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
        data: datosCUPGirona,
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
      datalabels: { display: true },
      tooltip: {
        callbacks: {
          label: (ctx) => ctx.raw.toLocaleString('es-ES') + ' votos'
        }
      }
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
      id: 'etiquetaPartidoCUPGirona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCUPGirona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#010101';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCUPGirona[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxPodemosGirona = document.getElementById('podemosGironaChart').getContext('2d');

const datosPodemosGirona = [
  18331, // 2015
  16482, // 2017
  11101, // 2021
  9701   // 2024
];

const etiquetasPodemosGirona = ['2015','2017','2021','2024'];
const partidosPodemosGirona = ['Podemos','Podemos','Podemos','Podemos'];

new Chart(ctxPodemosGirona, {
  data: {
    labels: etiquetasPodemosGirona,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPodemosGirona,
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
        data: datosPodemosGirona,
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
      datalabels: { display: true },
      tooltip: {
        callbacks: {
          label: (ctx) => ctx.raw.toLocaleString('es-ES') + ' votos'
        }
      }
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
      id: 'etiquetaPartidoPodemosGirona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosGirona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosGirona[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxCDSGirona = document.getElementById('cdsGironaChart').getContext('2d');

const datosCDSGirona = [7631, 1391];
const etiquetasCDSGirona = ['1988','1992'];
const partidosCDSGirona = Array(datosCDSGirona.length).fill('CDS');

new Chart(ctxCDSGirona, {
  data: {
    labels: etiquetasCDSGirona,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCDSGirona,
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
        data: datosCDSGirona,
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
      datalabels: { display: true },
      tooltip: {
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
      id: 'etiquetaPartidoCDSGirona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSGirona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#005f80';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSGirona[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxEntesaICVGirona = document.getElementById('entesaICVGironaChart').getContext('2d');

const datosEntesaICVGirona = [
  3861, 9363, 8333, 11546, 82502,
  16328, 20978, 14057, 20317,
  18331, 16482, 11101, 9701
];

const etiquetasEntesaICVGirona = [
  '1984','1988','1992','1995','1999',
  '2003','2006','2010','2012',
  '2015','2017','2021','2024'
];

const partidosEntesaICVGirona = [
  'Entesa','Entesa','Entesa','ICV','ICV',
  'ICV','ICV','ICV','CatComú',
  'ECP','ECP','ECP','ECP'
];

new Chart(ctxEntesaICVGirona, {
  data: {
    labels: etiquetasEntesaICVGirona,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosEntesaICVGirona,
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
        data: datosEntesaICVGirona,
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
      datalabels: { display: true },
      tooltip: {
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
      id: 'etiquetaPartidoEntesaICVGirona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosEntesaICVGirona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosEntesaICVGirona[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxUPyDGirona = document.getElementById('upydGironaChart').getContext('2d');

const datosUPyDGirona = [222, 696];
const etiquetasUPyDGirona = ['2010','2012'];
const partidosUPyDGirona = ['UPyD','UPyD'];

new Chart(ctxUPyDGirona, {
  data: {
    labels: etiquetasUPyDGirona,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUPyDGirona,
        backgroundColor: 'rgba(255,96,218,0.7)', // rosa UPyD
        borderColor: '#ff60da',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#ff60da', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString('es-ES') 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosUPyDGirona,
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
      datalabels: { display: true },
      tooltip: {
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
      id: 'etiquetaPartidoUPyDGirona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDGirona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#ff60da';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDGirona[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxPSUCGirona = document.getElementById('psucGironaChart').getContext('2d');

const datosPSUCGirona = [21253, 7811];
const etiquetasPSUCGirona = ['1980','1984'];
const partidosPSUCGirona = Array(datosPSUCGirona.length).fill('PSUC');

new Chart(ctxPSUCGirona, {
  data: {
    labels: etiquetasPSUCGirona,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPSUCGirona,
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
        data: datosPSUCGirona,
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
      datalabels: { display: true },
      tooltip: {
        callbacks: {
          label: (ctx) => ctx.raw.toLocaleString('es-ES') + ' votos'
        }
      }
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
      id: 'etiquetaPartidoPSUCGirona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSUCGirona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#c50042';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSUCGirona[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxPDECatGirona = document.getElementById('pdecatGironaChart').getContext('2d');

const datosPDECatGirona = [8755];
const etiquetasPDECatGirona = ['2021'];
const partidosPDECatGirona = ['PDECat'];

new Chart(ctxPDECatGirona, {
  data: {
    labels: etiquetasPDECatGirona,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPDECatGirona,
        backgroundColor: 'rgba(1,131,203,0.7)', // azul PDECat
        borderColor: '#0183cb',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#0183cb', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString('es-ES') 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPDECatGirona,
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
      datalabels: { display: true },
      tooltip: {
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
      id: 'etiquetaPartidoPDECatGirona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPDECatGirona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#0183cb';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPDECatGirona[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

  // Etiquetas (años) usadas en los gráficos de Girona
  const etiquetasGirona = ['1980','1984','1988','1992','1995','1999','2003','2006','2010','2012','2015','2017','2021','2024'];

  // Datos por partido alineados con 'etiquetasGirona' (null donde no hay dato)
  const datosGironaTotal = {
    'CIU / JxSí / Junts': [84451,147208,135146,134621,140012,137079,118286,104840,131690,147827,215485,149638,89770,102900],
    'PSOE': [44691,53058,56765,54085,74124,82502,72352,60755,41498,34567,33336,35197,41678,57777],
    'ERC': [24201,15175,13175,28764,35338,36159,66989,52799,26828,61020,215485,88582,59893,35456],
    'PP / AP': [34482,13807,8941,9817,22618,17079,24698,19808,25050,32912,22572,11646,5470,19447],
    'AC': [null,null,null,null,null,null,null,null,null,null,null,null,null,27028],
    'VOX': [null,null,null,null,null,null,null,null,null,null,null,null,16917,18891],
    'CUP': [null,null,null,null,null,null,null,null,null,14502,32971,21708,24837,14621],
    'Podemos': [null,null,null,null,null,null,null,null,null,null,18331,16482,11101,9701],
    'CS': [null,null,null, null,null,null,null,2584,4926,12325,48244,79634,8935,965],
    'PSUC': [21253,7811,null,null,null,null,null,null,null,null,null,null,null,null],
    'CDS': [null,null,7631,1391,null,null,null,null,null,null,null,null,null,null],
    'Entesa/ICV/CatComú/ECP': [null,3861,9363,8333,11546,82502,16328,20978,14057,20317,18331,16482,11101,9701],
    'UPyD': [null,null,null,null,null,null,null,null,222,696,null,null,null,null],
    'PDECat': [null,null,null,null,null,null,null,null,null,null,null,null,8755,null]
  };

  // Colores por partido
  const coloresGirona = {
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

  // Construir datasets
  const datasetsGirona = Object.keys(datosGironaTotal).map(partido => ({
    type: 'line',
    label: partido,
    data: datosGironaTotal[partido],
    borderColor: coloresGirona[partido] || '#666',
    backgroundColor: 'transparent',
    fill: false,
    tension: 0.3,
    spanGaps: true,
    pointRadius: 4,
    pointBackgroundColor: coloresGirona[partido] || '#666',
    datalabels: {
      display: true,
      color: coloresGirona[partido] || '#666',
      font: { weight: 'bold', size: 11 },
      formatter: v => v != null ? v.toLocaleString('es-ES') : ''
    }
  }));

  // Crear el chart
  const ctxGirona = document.getElementById('gironaChart').getContext('2d');
  new Chart(ctxGirona, {
    data: {
      labels: etiquetasGirona,
      datasets: datasetsGirona
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