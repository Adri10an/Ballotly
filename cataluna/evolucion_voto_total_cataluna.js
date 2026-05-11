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
const ctxJuntsCatalunya = document.getElementById('juntsCatalunyaChart').getContext('2d');

const datosJuntsCatalunya = [
  752943,   // 1980
  1346729,  // 1984
  1232514,  // 1988
  1221233,  // 1992
  1320071,  // 1995
  1178420,  // 1999
  1024425,  // 2003
  935756,   // 2006
  1198010,  // 2010
  1112341,  // 2012
  1620973,  // 2015
  948233,   // 2017
  568002,   // 2021
  681470    // 2024
];

const etiquetasJuntsCatalunya = [
  '1980','1984','1988','1992','1995','1999','2003','2006',
  '2010','2012','2015','2017','2021','2024'
];

const partidosJuntsCatalunya = [
  'CIU','CIU','CIU','CIU','CIU','CIU',
  'CIU','CIU','CIU','CIU',
  'JxSí','Junts','Junts','Junts'
];

new Chart(ctxJuntsCatalunya, {
  data: {
    labels: etiquetasJuntsCatalunya,
    datasets: [
      {
        type: 'bar',
        label: 'Votos',
        data: datosJuntsCatalunya,
        backgroundColor: 'rgba(64, 224, 208, 0.7)', // turquesa
        borderColor: '#40E0D0',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#008B8B',
          font: { weight: 'bold' },
          formatter: (v) => v.toLocaleString('es-ES')
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosJuntsCatalunya,
        borderColor: '#40E0D0',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#40E0D0'
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
      id: 'etiquetaPartidoJuntsCatalunya',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosJuntsCatalunya.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#008B8B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosJuntsCatalunya[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxPPCatalunya = document.getElementById('ppCatalunyaChart').getContext('2d');

const datosPPCatalunya = [
  286922,  // 1980 (AP-PDP-UL)
  221601,  // 1984 (AP)
  143241,  // 1988 (AP)
  157772,  // 1992 (PP)
  421752,  // 1995
  297265,  // 1999
  393499,  // 2003
  316222,  // 2006
  384019,  // 2010
  471197,  // 2012
  348444,  // 2015
  185670,  // 2017
  109067,  // 2021
  347170   // 2024
];

const etiquetasPPCatalunya = [
  '1980','1984','1988','1992','1995','1999','2003','2006',
  '2010','2012','2015','2017','2021','2024'
];

const partidosPPCatalunya = [
  'AP-PDP-UL','AP','AP','PP','PP','PP','PP','PP',
  'PP','PP','PP','PP','PP','PP'
];

new Chart(ctxPPCatalunya, {
  data: {
    labels: etiquetasPPCatalunya,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPPCatalunya,
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
        data: datosPPCatalunya,
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
      id: 'etiquetaPartidoPPCatalunya',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPCatalunya.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPCatalunya[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxPSCCatalunya = document.getElementById('pscCatalunyaChart').getContext('2d');

const datosPSCCatalunya = [
  606717,  // 1980
  866281,  // 1984
  802828,  // 1988
  728311,  // 1992
  802252,  // 1995
  948202,  // 1999
  1031454, // 2003
  796173,  // 2006
  570361,  // 2010
  523333,  // 2012
  522209,  // 2015
  606659,  // 2017
  652858,  // 2021
  882589   // 2024
];

const etiquetasPSCCatalunya = [
  '1980','1984','1988','1992','1995','1999','2003','2006',
  '2010','2012','2015','2017','2021','2024'
];

const partidosPSCCatalunya = Array(datosPSCCatalunya.length).fill('PSC');

new Chart(ctxPSCCatalunya, {
  data: {
    labels: etiquetasPSCCatalunya,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPSCCatalunya,
        backgroundColor: 'rgba(255,0,0,0.7)', // rojo PSC
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
        data: datosPSCCatalunya,
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
      id: 'etiquetaPartidoPSCCatalunya',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSCCatalunya.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSCCatalunya[i], xPos, yPos);
          ctx.restore();
        });
      }
    },  
    ChartDataLabels
  ]
});

const ctxERCCatalunya = document.getElementById('ercCatalunyaChart').getContext('2d');

const datosERCCatalunya = [
  240871,   // 1980
  126943,   // 1984
  111647,   // 1988
  210366,   // 1992
  305867,   // 1995
  271173,   // 1999
  544324,   // 2003
  416355,   // 2006
  218046,   // 2010
  496292,   // 2012
  1620973,  // 2015
  935861,   // 2017
  603607,   // 2021
  431128    // 2024
];

const etiquetasERCCatalunya = [
  '1980','1984','1988','1992','1995','1999','2003','2006',
  '2010','2012','2015','2017','2021','2024'
];

const partidosERCCatalunya = Array(datosERCCatalunya.length).fill('ERC');

new Chart(ctxERCCatalunya, {
  data: {
    labels: etiquetasERCCatalunya,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosERCCatalunya,
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
        data: datosERCCatalunya,
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
      id: 'etiquetaPartidoERCCatalunya',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosERCCatalunya.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#c99f00';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosERCCatalunya[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxACCatalunya = document.getElementById('acCatalunyaChart').getContext('2d');

const datosACCatalunya = [119149]; // 2024 Catalunya
const etiquetasACCatalunya = ['2024'];
const partidosACCatalunya = ['AC'];

new Chart(ctxACCatalunya, {
  data: {
    labels: etiquetasACCatalunya,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosACCatalunya,
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
        data: datosACCatalunya,
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
      id: 'etiquetaPartidoACCatalunya',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosACCatalunya.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#014983';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosACCatalunya[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxVOXCatalunya = document.getElementById('voxCatalunyaChart').getContext('2d');

const datosVOXCatalunya = [
  217883,  // 2021
  251096   // 2024
];

const etiquetasVOXCatalunya = ['2021','2024'];
const partidosVOXCatalunya = ['VOX','VOX'];

new Chart(ctxVOXCatalunya, {
  data: {
    labels: etiquetasVOXCatalunya,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosVOXCatalunya,
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
        data: datosVOXCatalunya,
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
      id: 'etiquetaPartidoVOXCatalunya',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXCatalunya.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXCatalunya[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxCSCatalunya = document.getElementById('csCatalunyaChart').getContext('2d');

const datosCSCatalunya = [89840, 105827, 274925, 734910, 1109732, 157903, 22947];
const etiquetasCSCatalunya = ['2006','2010','2012','2015','2017','2021','2024'];
const partidosCSCatalunya = Array(datosCSCatalunya.length).fill('CS');

new Chart(ctxCSCatalunya, {
  data: {
    labels: etiquetasCSCatalunya,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCSCatalunya,
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
        data: datosCSCatalunya,
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
      id: 'etiquetaPartidoCSCatalunya',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSCatalunya.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSCatalunya[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxCUPCatalunya = document.getElementById('cupCatalunyaChart').getContext('2d');

const datosCUPCatalunya = [
  126219, // 2012
  336375, // 2015
  195246, // 2017
  189087, // 2021
  129059  // 2024
];

const etiquetasCUPCatalunya = ['2012','2015','2017','2021','2024'];
const partidosCUPCatalunya = ['CUP','CUP','CUP','CUP','CUP'];

new Chart(ctxCUPCatalunya, {
  data: {
    labels: etiquetasCUPCatalunya,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCUPCatalunya,
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
        data: datosCUPCatalunya,
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
      id: 'etiquetaPartidoCUPCatalunya',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCUPCatalunya.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#010101';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCUPCatalunya[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxPodemosCatalunya = document.getElementById('podemosCatalunyaChart').getContext('2d');

const datosPodemosCatalunya = [
  366494, // 2015
  326360, // 2017
  194626, // 2021
  184297  // 2024
];

const etiquetasPodemosCatalunya = ['2015','2017','2021','2024'];
const partidosPodemosCatalunya = ['Podemos','Podemos','Podemos','Sumar'];

new Chart(ctxPodemosCatalunya, {
  data: {
    labels: etiquetasPodemosCatalunya,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPodemosCatalunya,
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
        data: datosPodemosCatalunya,
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
      id: 'etiquetaPartidoPodemosCatalunya',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosCatalunya.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosCatalunya[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxEntesaICVCatalunya = document.getElementById('entesaICVCatalunyaChart').getContext('2d');

const datosEntesaICVCatalunya = [
  35937, 209211, 171794, 313092, 235097,
  241163, 282693, 229985, 358857,
  366494, 326360, 194626, 180455
];

const etiquetasEntesaICVCatalunya = [
  '1984','1988','1992','1995','1999',
  '2003','2006','2010','2012',
  '2015','2017','2021','2024'
];

const partidosEntesaICVCatalunya = [
  'Entesa','Entesa','Entesa','ICV','ICV',
  'ICV','ICV','ICV','CatComú',
  'ECP','ECP','ECP','ECP'
];

new Chart(ctxEntesaICVCatalunya, {
  data: {
    labels: etiquetasEntesaICVCatalunya,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosEntesaICVCatalunya,
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
        data: datosEntesaICVCatalunya,
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
      id: 'etiquetaPartidoEntesaICVCatalunya',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosEntesaICVCatalunya.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosEntesaICVCatalunya[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxPSUCCatalunya = document.getElementById('psucCatalunyaChart').getContext('2d');

const datosPSUCCatalunya = [507753, 160581];
const etiquetasPSUCCatalunya = ['1980','1984'];
const partidosPSUCCatalunya = Array(datosPSUCCatalunya.length).fill('PSUC');

new Chart(ctxPSUCCatalunya, {
  data: {
    labels: etiquetasPSUCCatalunya,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPSUCCatalunya,
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
        data: datosPSUCCatalunya,
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
    ChartDataLabels,
    {
      id: 'etiquetaPartidoPSUCCatalunya',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSUCCatalunya.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 20;
          ctx.save();
          ctx.fillStyle = '#c50042';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSUCCatalunya[i], xPos, yPos);
          ctx.restore();
        });
      }
    }
  ]
});

const ctxUPyDCatalunya = document.getElementById('upydCatalunyaChart').getContext('2d');

const datosUPyDCatalunya = [5293, 14552];
const etiquetasUPyDCatalunya = ['2010','2012'];
const partidosUPyDCatalunya = ['UPyD','UPyD'];

new Chart(ctxUPyDCatalunya, {
  data: {
    labels: etiquetasUPyDCatalunya,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUPyDCatalunya,
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
        data: datosUPyDCatalunya,
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
      id: 'etiquetaPartidoUPyDCatalunya',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDCatalunya.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#ff60da';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDCatalunya[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxCDSCataluña = document.getElementById('cdsCatalunyaChart').getContext('2d');

const datosCDSCataluña = [103351, 24033];
const etiquetasCDSCataluña = ['1988', '1992'];
const partidosCDSCataluña = ['CDS', 'CDS'];

new Chart(ctxCDSCataluña, {
  data: {
    labels: etiquetasCDSCataluña,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCDSCataluña,
        backgroundColor: 'rgba(0,191,255,0.7)', // azul CDS
        borderColor: '#00BFFF',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#007ACC',
          font: { weight: 'bold' },
          formatter: (v) => v.toLocaleString('es-ES')
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCDSCataluña,
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
      tooltip: { callbacks: { label: (ctx) => ctx.raw.toLocaleString('es-ES') + ' votos' } }
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
      id: 'etiquetaPartidoCDSCataluña',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSCataluña.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;

          ctx.save();
          ctx.fillStyle = '#007ACC';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSCataluña[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxPDECatCatalunya = document.getElementById('pdecatCatalunyaChart').getContext('2d');

const datosPDECatCatalunya = [77059];
const etiquetasPDECatCatalunya = ['2021'];
const partidosPDECatCatalunya = ['PDECat'];

new Chart(ctxPDECatCatalunya, {
  data: {
    labels: etiquetasPDECatCatalunya,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPDECatCatalunya,
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
        data: datosPDECatCatalunya,
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
      id: 'etiquetaPartidoPDECatCatalunya',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPDECatCatalunya.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#0183cb';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPDECatCatalunya[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

  // Años
  const etiquetasCatalunya = [
    '1980','1984','1988','1992','1995','1999','2003','2006',
    '2010','2012','2015','2017','2021','2024'
  ];

  // Datos por partido (alineados con los años; null donde no hay datos)
  const datosCatalunyaTotal = {
    'CIU / JxSí / Junts': [752943,1346729,1232514,1221233,1320071,1178420,1024425,935756,1198010,1112341,1620973,948233,568002,681470],
    'PSOE / PSC': [606717,866281,802828,728311,802252,948202,1031454,796173,570361,523333,522209,606659,652858,882589],
    'ERC': [240871,126943,111647,210366,305867,271173,544324,416355,218046,496292,1620973,935861,603607,431128],
    'PP / AP-PDP-UL': [286922,221601,143241,157772,421752,297265,393499,316222,384019,471197,348444,185670,109067,347170],
    'AC': [null,null,null,null,null,null,null,null,null,null,null,null,null,119149],
    'VOX': [null,null,null,null,null,null,null,null,null,null,null,null,217883,251096],
    'CUP': [null,null,null,null,null,null,null,null,null,126219,336375,195246,189087,129059],
    'Podemos / Sumar': [null,null,null,null,null,null,null,null,null,null,366494,326360,194626,184297],
    'CS': [null,null,null,null,null,null,null,89840,105827,274925,734910,1109732,157903,22947],
    'PSUC': [507753,160581,null,null,null,null,null,null,null,null,null,null,null,null],
    'CDS': [null,null,103351,24033,null,null,null,null,null,null,null,null,null,null],
    'UPyD': [null,null,null,null,null,null,null,null,5293,14552,null,null,null,null],
    'Entesa/ICV/CatComú/ECP': [null,35937,209211,171794,313092,235097,241163,282693,229985,358857,366494,326360,194626,180455],
    'PDECat': [null,null,null,null,null,null,null,null,null,null,null,null,77059,null]
  };

  // Colores por partido
  const coloresCatalunya = {
    'CIU / JxSí / Junts': '#40E0D0',
    'PSOE / PSC': '#FF0000',
    'ERC': '#c99f00',
    'PP / AP-PDP-UL': '#0000FF',
    'AC': '#014983',
    'VOX': '#008000',
    'CUP': '#010101',
    'Podemos / Sumar': '#800080',
    'CS': '#FF8C00',
    'PSUC': '#c50042',
    'UPyD': '#ff60da',
    'Entesa/ICV/CatComú/ECP': '#8B0000',
    'PDECat': '#0183cb',
    'CDS': '#00BFFF'
  };

  // Construir datasets
  const datasetsCatalunya = Object.keys(datosCatalunyaTotal).map(partido => ({
    type: 'line',
    label: partido,
    data: datosCatalunyaTotal[partido],
    borderColor: coloresCatalunya[partido] || '#666',
    backgroundColor: 'transparent',
    fill: false,
    tension: 0.3,
    spanGaps: true,
    pointRadius: 4,
    pointBackgroundColor: coloresCatalunya[partido] || '#666',
    datalabels: {
      display: true,
      color: coloresCatalunya[partido] || '#666',
      font: { weight: 'bold', size: 11 },
      formatter: v => v != null ? v.toLocaleString('es-ES') : ''
    }
  }));

  // Crear el chart
  const ctxCatalunya = document.getElementById('catalunyaChart').getContext('2d');
  new Chart(ctxCatalunya, {
    data: {
      labels: etiquetasCatalunya,
      datasets: datasetsCatalunya
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