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
const ctxJuntsBarcelona = document.getElementById('juntsBarcelonaChart').getContext('2d');

const datosJuntsBarcelona = [
  570670,  // 1980
  978576,  // 1984
  894120,  // 1988
  882758,  // 1992
  953419,  // 1995
  833168,  // 1999
  715140,  // 2003
  664723,  // 2006
  858188,  // 2010
  762628,  // 2012
  1107398, // 2015
  624261,  // 2017
  379739,  // 2021
  449121   // 2024
];

const etiquetasJuntsBarcelona = [
  '1980','1984','1988','1992','1995','1999','2003','2006',
  '2010','2012','2015','2017','2021','2024'
];

const partidosJuntsBarcelona = [
  'CIU','CIU','CIU','CIU','CIU','CIU',
  'CIU','CIU','CIU','CIU',
  'JxSí','Junts','Junts','Junts'
];

const dataJuntsBarcelona = {
  labels: etiquetasJuntsBarcelona,
  datasets: [
    {
      type: 'bar',
      label: 'Votos',
      data: datosJuntsBarcelona,
      backgroundColor: 'rgba(64, 224, 208, 0.7)', // turquesa
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
      data: datosJuntsBarcelona,
      borderColor: '#40E0D0',
      backgroundColor: 'transparent',
      fill: false,
      tension: 0.3,
      pointRadius: 4,
      pointBackgroundColor: '#40E0D0'
    }
  ]
};

const configJuntsBarcelona = {
  data: dataJuntsBarcelona,
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
      id: 'variacionPluginJuntsBarcelona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosJuntsBarcelona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#008B8B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosJuntsBarcelona[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
};

new Chart(ctxJuntsBarcelona, configJuntsBarcelona);

const ctxPPBarcelona = document.getElementById('ppBarcelonaChart').getContext('2d');

const datosPPBarcelona = [
  171122, // 1980 (AP-PDP-UL)
  166905, // 1984 (AP)
  107217, // 1988 (AP)
  117409, // 1992 (PP)
  332417, // 1995
  234957, // 1999
  311928, // 2003
  248165, // 2006
  298856, // 2010
  361581, // 2012
  272280, // 2015
  142934, // 2017
  85967,  // 2021
  267569  // 2024
];

const etiquetasPPBarcelona = [
  '1980','1984','1988','1992','1995','1999','2003','2006',
  '2010','2012','2015','2017','2021','2024'
];

const partidosPPBarcelona = [
  'AP-PDP-UL','AP','AP','PP','PP','PP','PP','PP',
  'PP','PP','PP','PP','PP','PP'
];

new Chart(ctxPPBarcelona, {
  data: {
    labels: etiquetasPPBarcelona,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPPBarcelona,
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
        data: datosPPBarcelona,
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
      id: 'etiquetaPartidoPPBarcelona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPBarcelona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPBarcelona[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxPSCBarcelona = document.getElementById('pscBarcelonaChart').getContext('2d');

const datosPSCBarcelona = [
  485324,  // 1980
  712278,  // 1984
  643535,  // 1988
  572036,  // 1992
  620756,  // 1995
  948202,  // 1999
  824270,  // 2003
  620601,  // 2006
  445448,  // 2010
  418847,  // 2012
  420623,  // 2015
  497650,  // 2017
  531657,  // 2021
  692847   // 2024
];

const etiquetasPSCBarcelona = [
  '1980','1984','1988','1992','1995','1999','2003','2006',
  '2010','2012','2015','2017','2021','2024'
];

const partidosPSCBarcelona = Array(datosPSCBarcelona.length).fill('PSC');

new Chart(ctxPSCBarcelona, {
  data: {
    labels: etiquetasPSCBarcelona,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPSCBarcelona,
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
        data: datosPSCBarcelona,
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
      id: 'etiquetaPartidoPSCBarcelona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSCBarcelona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSCBarcelona[i], xPos, yPos);
          ctx.restore();
        });
      }
    },  
    ChartDataLabels
  ]
});

const ctxERCBarcelona = document.getElementById('ercBarcelonaChart').getContext('2d');

const datosERCBarcelona = [
  173815,  // 1980
  90255,   // 1984
  76099,   // 1988
  142381,  // 1992
  212335,  // 1995
  183270,  // 1999
  376669,  // 2003
  280566,  // 2006
  148061,  // 2010
  345586,  // 2012
  1107398, // 2015
  678030,  // 2017
  433356,  // 2021
  310106   // 2024
];

const etiquetasERCBarcelona = [
  '1980','1984','1988','1992','1995','1999','2003','2006',
  '2010','2012','2015','2017','2021','2024'
];

const partidosERCBarcelona = Array(datosERCBarcelona.length).fill('ERC');

new Chart(ctxERCBarcelona, {
  data: {
    labels: etiquetasERCBarcelona,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosERCBarcelona,
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
        data: datosERCBarcelona,
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
      id: 'etiquetaPartidoERCBarcelona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosERCBarcelona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#c99f00';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosERCBarcelona[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxACBarcelona = document.getElementById('acBarcelonaChart').getContext('2d');

const datosACBarcelona = [66563]; // 2024 Barcelona
const etiquetasACBarcelona = ['2024'];
const partidosACBarcelona = ['AC'];

new Chart(ctxACBarcelona, {
  data: {
    labels: etiquetasACBarcelona,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosACBarcelona,
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
        data: datosACBarcelona,
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
      id: 'etiquetaPartidoACBarcelona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosACBarcelona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#014983';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosACBarcelona[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxVOXBarcelona = document.getElementById('voxBarcelonaChart').getContext('2d');

const datosVOXBarcelona = [
  166056, // 2021
  185076  // 2024
];

const etiquetasVOXBarcelona = ['2021','2024'];
const partidosVOXBarcelona = ['VOX','VOX'];

new Chart(ctxVOXBarcelona, {
  data: {
    labels: etiquetasVOXBarcelona,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosVOXBarcelona,
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
        data: datosVOXBarcelona,
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
      id: 'etiquetaPartidoVOXBarcelona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXBarcelona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXBarcelona[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});


const ctxCSBarcelona = document.getElementById('csBarcelonaChart').getContext('2d');

const datosCSBarcelona = [78525, 89730, 229725, 579850, 868365, 129339, 19138];
const etiquetasCSBarcelona = ['2006','2010','2012','2015','2017','2021','2024'];
const partidosCSBarcelona = Array(datosCSBarcelona.length).fill('CS');

new Chart(ctxCSBarcelona, {
  data: {
    labels: etiquetasCSBarcelona,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCSBarcelona,
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
        data: datosCSBarcelona,
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
      id: 'etiquetaPartidoCSBarcelona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSBarcelona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSBarcelona[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxCUPBarcelona = document.getElementById('cupBarcelonaChart').getContext('2d');

const datosCUPBarcelona = [
  92621,  // 2012
  254246, // 2015
  143711, // 2017
  133607, // 2021
  92507   // 2024
];

const etiquetasCUPBarcelona = ['2012','2015','2017','2021','2024'];
const partidosCUPBarcelona = ['CUP','CUP','CUP','CUP','CUP'];

new Chart(ctxCUPBarcelona, {
  data: {
    labels: etiquetasCUPBarcelona,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCUPBarcelona,
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
        data: datosCUPBarcelona,
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
      id: 'etiquetaPartidoCUPBarcelona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCUPBarcelona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#010101';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCUPBarcelona[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxCDSBarcelona = document.getElementById('cdsBarcelonaChart').getContext('2d');

const datosCDSBarcelona = [
  78927, // 1988
  19505  // 1992
];

const etiquetasCDSBarcelona = ['1988','1992'];
const partidosCDSBarcelona = ['CDS','CDS'];

new Chart(ctxCDSBarcelona, {
  data: {
    labels: etiquetasCDSBarcelona,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCDSBarcelona,
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
        data: datosCDSBarcelona,
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
      id: 'etiquetaPartidoCDSBarcelona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSBarcelona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#007ACC';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSBarcelona[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxPodemosBarcelona = document.getElementById('podemosBarcelonaChart').getContext('2d');

const datosPodemosBarcelona = [
  311612, // 2015
  276810, // 2017
  164755, // 2021
  155134  // 2024
];

const etiquetasPodemosBarcelona = ['2015','2017','2021','2024'];
const partidosPodemosBarcelona = ['Podemos','Podemos','Podemos','Sumar'];

new Chart(ctxPodemosBarcelona, {
  data: {
    labels: etiquetasPodemosBarcelona,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPodemosBarcelona,
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
        data: datosPodemosBarcelona,
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
      id: 'etiquetaPartidoPodemosBarcelona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosBarcelona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosBarcelona[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxEntesaICVBarcelona = document.getElementById('entesaICVBarcelonaChart').getContext('2d');

const datosEntesaICVBarcelona = [
  24702, 180872, 146937, 274222, 78441,
  199553, 230968, 192836, 303013,
  311612, 276810, 164755, 155134
];

const etiquetasEntesaICVBarcelona = [
  '1984','1988','1992','1995','1999',
  '2003','2006','2010','2012',
  '2015','2017','2021','2024'
];

const partidosEntesaICVBarcelona = [
  'Entesa','Entesa','Entesa','ICV','ICV',
  'ICV','ICV','ICV','CatComú',
  'ECP','ECP','ECP','ECP'
];

new Chart(ctxEntesaICVBarcelona, {
  data: {
    labels: etiquetasEntesaICVBarcelona,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosEntesaICVBarcelona,
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
        data: datosEntesaICVBarcelona,
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
      id: 'etiquetaPartidoEntesaICVBarcelona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosEntesaICVBarcelona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosEntesaICVBarcelona[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxPSUCBarcelona = document.getElementById('psucBarcelonaChart').getContext('2d');

const datosPSUCBarcelona = [435887, 134777];
const etiquetasPSUCBarcelona = ['1980', '1984'];
const partidosPSUCBarcelona = Array(datosPSUCBarcelona.length).fill('PSUC');

new Chart(ctxPSUCBarcelona, {
  data: {
    labels: etiquetasPSUCBarcelona,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPSUCBarcelona,
        backgroundColor: 'rgba(197,0,66,0.7)',
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
        data: datosPSUCBarcelona,
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
      id: 'etiquetaPartidoPSUCBarcelona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSUCBarcelona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 20;
          ctx.save();
          ctx.fillStyle = '#c50042';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSUCBarcelona[i], xPos, yPos);
          ctx.restore();
        });
      }
    }
  ]
});

const ctxUPyDBarcelona = document.getElementById('upydBarcelonaChart').getContext('2d');

const datosUPyDBarcelona = [4537, 12106];
const etiquetasUPyDBarcelona = ['2010','2012'];
const partidosUPyDBarcelona = ['UPyD','UPyD'];

new Chart(ctxUPyDBarcelona, {
  data: {
    labels: etiquetasUPyDBarcelona,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUPyDBarcelona,
        backgroundColor: 'rgba(255,96,218,0.7)',
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
        data: datosUPyDBarcelona,
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
      id: 'etiquetaPartidoUPyDBarcelona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDBarcelona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#ff60da';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDBarcelona[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});


const ctxPDECatBarcelona = document.getElementById('pdecatBarcelonaChart').getContext('2d');

const datosPDECatBarcelona = [53260];
const etiquetasPDECatBarcelona = ['2021'];
const partidosPDECatBarcelona = ['PDECat'];

new Chart(ctxPDECatBarcelona, {
  data: {
    labels: etiquetasPDECatBarcelona,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPDECatBarcelona,
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
        data: datosPDECatBarcelona,
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
      id: 'etiquetaPartidoPDECatBarcelona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPDECatBarcelona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#0183cb';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPDECatBarcelona[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

  // Etiquetas (años) usados en los gráficos de Barcelona
  const etiquetasBarcelona = [
    '1980','1984','1988','1992','1995','1999','2003','2006',
    '2010','2012','2015','2017','2021','2024'
  ];

  // Datos por partido alineados con 'etiquetasBarcelona' (null donde no hay dato)
  const datosBarcelonaTotal = {
    'CIU / JxSí / Junts': [570670,978576,894120,882758,953419,833168,715140,664723,858188,762628,1107398,624261,379739,449121],
    'PSOE / PSC': [485324,712278,643535,572036,620756,948202,824270,620601,445448,418847,420623,497650,531657,692847],
    'ERC': [173815,90255,76099,142381,212335,183270,376669,280566,148061,345586,1107398,678030,433356,310106],
    'PP / AP-PDP-UL': [171122,166905,107217,117409,332417,234957,311928,248165,298856,361581,272280,142934,85967,267569],
    'AC': [null,null,null,null,null,null,null,null,null,null,null,null,null,66563],
    'VOX': [null,null,null,null,null,null,null,null,null,null,null,null,166056,185076],
    'CUP': [null,null,null,null,null,null,null,null,null,92621,254246,143711,133607,92507],
    'Podemos': [null,null,null,null,null,null,null,null,null,null,311612,276810,164755,155134],
    'CS': [null,null,null,null,null,null,null,78525,89730,229725,579850,868365,129339,19138],
    'PSUC': [435887,134777,null,null,null,null,null,null,null,null,null,null,null,null],
    'CDS': [null,null,78927,19505,null,null,null,null,null,null,null,null,null,null],
    'UPyD': [null,null,null,null,null,null,null,null,4537,12106,null,null,null,null],
    'Entesa/ICV/CatComú/ECP': [null,24702,180872,146937,274222,78441,199553,230968,192836,303013,311612,276810,164755,155134],
    'PDECat': [null,null,null,null,null,null,null,null,null,null,null,null,53260,null]
  };

  // Colores por partido
  const coloresBarcelona = {
    'CIU / JxSí / Junts': '#40E0D0',
    'PSOE / PSC': '#FF0000',
    'ERC': '#c99f00',
    'PP / AP-PDP-UL': '#0000FF',
    'AC': '#014983',
    'VOX': '#008000',
    'CUP': '#010101',
    'Podemos': '#800080',
    'CS': '#FF8C00',
    'PSUC': '#c50042',
    'UPyD': '#ff60da',
    'Entesa/ICV/CatComú/ECP': '#8B0000',
    'PDECat': '#0183cb',
    'CDS': '#00BFFF'
  };

  // Construir datasets
  const datasetsBarcelona = Object.keys(datosBarcelonaTotal).map(partido => ({
    type: 'line',
    label: partido,
    data: datosBarcelonaTotal[partido],
    borderColor: coloresBarcelona[partido] || '#666',
    backgroundColor: 'transparent',
    fill: false,
    tension: 0.3,
    spanGaps: true,
    pointRadius: 4,
    pointBackgroundColor: coloresBarcelona[partido] || '#666',
    datalabels: {
      display: true,
      color: coloresBarcelona[partido] || '#666',
      font: { weight: 'bold', size: 11 },
      formatter: v => v != null ? v.toLocaleString('es-ES') : ''
    }
  }));

  // Crear el chart
  const ctxBarcelona = document.getElementById('barcelonaChart').getContext('2d');
  new Chart(ctxBarcelona, {
    data: {
      labels: etiquetasBarcelona,
      datasets: datasetsBarcelona
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
