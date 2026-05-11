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

const etiquetasJuntsTarragona = [
  '1980', '1984', '1988', '1992', '1995', '1999',
  '2003', '2006', '2010', '2012', '2015', '2017', '2021', '2024'
];

const ctxJuntsTarragona = document.getElementById('juntsTarragonaChart').getContext('2d');

const datosJuntsTarragona = [
  52660,  // 1980
  118106, // 1984
  111867, // 1988
  111644, // 1992
  127645, // 1995
  116974, // 1999
  106589, // 2003
  93277,  // 2006
  121607, // 2010
  113250, // 2012
  172026, // 2015
  96031,  // 2017
  53706,  // 2021
  69296   // 2024
];

const partidosJuntsTarragona = [
  'CIU', 'CIU', 'CIU', 'CIU', 'CIU', 'CIU',
  'CIU', 'CIU', 'CIU', 'CIU',
  'JxSí', 'Junts', 'Junts', 'Junts'
];

const dataJuntsTarragona = {
  labels: etiquetasJuntsTarragona,
  datasets: [
    {
      type: 'bar',
      label: 'Votos',
      data: datosJuntsTarragona,
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
      data: datosJuntsTarragona,
      borderColor: '#40E0D0',
      backgroundColor: 'transparent',
      fill: false,
      tension: 0.3,
      pointRadius: 4,
      pointBackgroundColor: '#40E0D0'
    }
  ]
};

const configJuntsTarragona = {
  data: dataJuntsTarragona,
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
      id: 'variacionPluginJuntsTarragona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosJuntsTarragona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#008B8B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosJuntsTarragona[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
};

new Chart(ctxJuntsTarragona, configJuntsTarragona);

const ctxPPTarragona = document.getElementById('ppTarragonaChart').getContext('2d');

const datosPPTarragona = [
  43913,  // 1980 (AP-PDP-UL)
  25138,  // 1984 (AP)
  16596,  // 1988 (AP)
  18722,  // 1992 (PP)
  42398,  // 1995
  30108,  // 1999
  37183,  // 2003
  31644,  // 2006
  41250,  // 2010
  53435,  // 2012
  36898,  // 2015
  20188,  // 2017
  11970,  // 2021
  38109   // 2024
];

const etiquetasPPTarragona = [
  '1980','1984','1988','1992','1995','1999','2003','2006',
  '2010','2012','2015','2017','2021','2024'
];

const partidosPPTarragona = [
  'AP-PDP-UL','AP','AP','PP','PP','PP','PP','PP',
  'PP','PP','PP','PP','PP','PP'
];

new Chart(ctxPPTarragona, {
  data: {
    labels: etiquetasPPTarragona,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPPTarragona,
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
        data: datosPPTarragona,
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
      id: 'etiquetaPartidoPPTarragona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPTarragona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPTarragona[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxPSCTarragona = document.getElementById('pscTarragonaChart').getContext('2d');

const datosPSCTarragona = [
  45890,  // 1980
  65439,  // 1984
  63384,  // 1988
  64639,  // 1992
  68576,  // 1995
  96632,  // 1999
  89109,  // 2003
  74720,  // 2006
  56173,  // 2010
  48453,  // 2012
  48936,  // 2015
  52017,  // 2017
  55558,  // 2021
  82501   // 2024
];

const etiquetasPSCTarragona = [
  '1980','1984','1988','1992','1995','1999','2003','2006',
  '2010','2012','2015','2017','2021','2024'
];

const partidosPSCTarragona = Array(datosPSCTarragona.length).fill('PSC');

new Chart(ctxPSCTarragona, {
  data: {
    labels: etiquetasPSCTarragona,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPSCTarragona,
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
        data: datosPSCTarragona,
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
      id: 'etiquetaPartidoPSCTarragona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSCTarragona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSCTarragona[i], xPos, yPos);
          ctx.restore();
        });
      }
    },  
    ChartDataLabels
  ]
});

const ctxERCTarragona = document.getElementById('ercTarragonaChart').getContext('2d');

const datosERCTarragona = [
  23290,  // 1980
  11342,  // 1984
  12359,  // 1988
  22382,  // 1992
  32661,  // 1995
  29733,  // 1999
  60092,  // 2003
  50686,  // 2006
  26280,  // 2010
  53853,  // 2012
  172026, // 2015
  104832, // 2017
  67903,  // 2021
  51936   // 2024
];

const etiquetasERCTarragona = [
  '1980','1984','1988','1992','1995','1999','2003','2006',
  '2010','2012','2015','2017','2021','2024'
];

const partidosERCTarragona = Array(datosERCTarragona.length).fill('ERC');

new Chart(ctxERCTarragona, {
  data: {
    labels: etiquetasERCTarragona,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosERCTarragona,
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
        data: datosERCTarragona,
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
      id: 'etiquetaPartidoERCTarragona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosERCTarragona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#c99f00';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosERCTarragona[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxACTarragona = document.getElementById('acTarragonaChart').getContext('2d');

const datosACTarragona = [11160]; // 2024 Tarragona
const etiquetasACTarragona = ['2024'];
const partidosACTarragona = ['AC'];

new Chart(ctxACTarragona, {
  data: {
    labels: etiquetasACTarragona,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosACTarragona,
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
        data: datosACTarragona,
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
      id: 'etiquetaPartidoACTarragona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosACTarragona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#014983';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosACTarragona[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxVOXTarragona = document.getElementById('voxTarragonaChart').getContext('2d');

const datosVOXTarragona = [
  26071, // 2021
  32466  // 2024
];

const etiquetasVOXTarragona = ['2021','2024'];
const partidosVOXTarragona = ['VOX','VOX'];

new Chart(ctxVOXTarragona, {
  data: {
    labels: etiquetasVOXTarragona,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosVOXTarragona,
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
        data: datosVOXTarragona,
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
      id: 'etiquetaPartidoVOXTarragona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXTarragona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXTarragona[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxCSTarragona = document.getElementById('csTarragonaChart').getContext('2d');

const datosCSTarragona = [6970, 8427, 25998, 80273, 120825, 14502, 1660]; // votos Tarragona
const etiquetasCSTarragona = ['2006','2010','2012','2015','2017','2021','2024'];
const partidosCSTarragona = Array(datosCSTarragona.length).fill('CS');

new Chart(ctxCSTarragona, {
  data: {
    labels: etiquetasCSTarragona,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCSTarragona,
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
        data: datosCSTarragona,
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
      id: 'etiquetaPartidoCSTarragona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSTarragona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSTarragona[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxCUPTarragona = document.getElementById('cupTarragonaChart').getContext('2d');

const datosCUPTarragona = [
  12807, // 2012
  30531, // 2015
  17687, // 2017
  18831, // 2021
  12808  // 2024
];

const etiquetasCUPTarragona = ['2012','2015','2017','2021','2024'];
const partidosCUPTarragona = ['CUP','CUP','CUP','CUP','CUP'];

new Chart(ctxCUPTarragona, {
  data: {
    labels: etiquetasCUPTarragona,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCUPTarragona,
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
        data: datosCUPTarragona,
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
      id: 'etiquetaPartidoCUPTarragona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCUPTarragona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#010101';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCUPTarragona[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxPodemosTarragona = document.getElementById('podemosTarragonaChart').getContext('2d');

const datosPodemosTarragona = [
  26745, // 2015
  23653, // 2017
  13615, // 2021
  12023  // 2024
];

const etiquetasPodemosTarragona = ['2015','2017','2021','2024'];
const partidosPodemosTarragona = ['Podemos','Podemos','Podemos','Podemos'];

new Chart(ctxPodemosTarragona, {
  data: {
    labels: etiquetasPodemosTarragona,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPodemosTarragona,
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
        data: datosPodemosTarragona,
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
      id: 'etiquetaPartidoPodemosTarragona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosTarragona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosTarragona[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxCDSTarragona = document.getElementById('cdsTarragonaChart').getContext('2d');

const datosCDSTarragona = [9508, 1890]; // votos Tarragona
const etiquetasCDSTarragona = ['1988','1992'];
const partidosCDSTarragona = Array(datosCDSTarragona.length).fill('CDS');

new Chart(ctxCDSTarragona, {
  data: {
    labels: etiquetasCDSTarragona,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCDSTarragona,
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
        data: datosCDSTarragona,
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
      id: 'etiquetaPartidoCDSTarragona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSTarragona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#005f80';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSTarragona[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxEntesaICVTarragona = document.getElementById('entesaICVTarragonaChart').getContext('2d');

const datosEntesaICVTarragona = [
  4461, 12896, 11578, 19042, 96632,
  16419, 18729, 15708, 24448,
  26745, 23653, 13615, 12023
];

const etiquetasEntesaICVTarragona = [
  '1984','1988','1992','1995','1999',
  '2003','2006','2010','2012',
  '2015','2017','2021','2024'
];

const partidosEntesaICVTarragona = [
  'Entesa','Entesa','Entesa','ICV','ICV',
  'ICV','ICV','ICV','CatComú',
  'ECP','ECP','ECP','ECP'
];

new Chart(ctxEntesaICVTarragona, {
  data: {
    labels: etiquetasEntesaICVTarragona,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosEntesaICVTarragona,
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
        data: datosEntesaICVTarragona,
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
      id: 'etiquetaPartidoEntesaICVTarragona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosEntesaICVTarragona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosEntesaICVTarragona[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxUPyDTarragona = document.getElementById('upydTarragonaChart').getContext('2d');

const datosUPyDTarragona = [446, 1360];
const etiquetasUPyDTarragona = ['2010','2012'];
const partidosUPyDTarragona = ['UPyD','UPyD'];

new Chart(ctxUPyDTarragona, {
  data: {
    labels: etiquetasUPyDTarragona,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUPyDTarragona,
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
        data: datosUPyDTarragona,
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
      id: 'etiquetaPartidoUPyDTarragona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDTarragona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#ff60da';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDTarragona[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxPSUCTarragona = document.getElementById('psucTarragonaChart').getContext('2d');

const datosPSUCTarragona = [33645, 13029]; // votos Tarragona
const etiquetasPSUCTarragona = ['1980', '1984'];
const partidosPSUCTarragona = Array(datosPSUCTarragona.length).fill('PSUC');

new Chart(ctxPSUCTarragona, {
  data: {
    labels: etiquetasPSUCTarragona,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPSUCTarragona,
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
        data: datosPSUCTarragona,
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
      id: 'etiquetaPartidoPSUCTarragona',
      afterDatasetsDraw(chart, args, options) {
        const { ctx, chartArea: { left, bottom, right }, scales: { x, y } } = chart;
        datosPSUCTarragona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 20;
          ctx.save();
          ctx.fillStyle = '#c50042';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSUCTarragona[i], xPos, yPos);
          ctx.restore();
        });
      }
    }
  ]
});

const ctxPDECatTarragona = document.getElementById('pdecatTarragonaChart').getContext('2d');

const datosPDECatTarragona = [7699];
const etiquetasPDECatTarragona = ['2021'];
const partidosPDECatTarragona = ['PDECat'];

new Chart(ctxPDECatTarragona, {
  data: {
    labels: etiquetasPDECatTarragona,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPDECatTarragona,
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
        data: datosPDECatTarragona,
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
      id: 'etiquetaPartidoPDECatTarragona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPDECatTarragona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#0183cb';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPDECatTarragona[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

  // Etiquetas (años) usadas en los gráficos de Tarragona
  const etiquetasTarragona = ['1980','1984','1988','1992','1995','1999','2003','2006','2010','2012','2015','2017','2021','2024'];

  // Datos por partido alineados con 'etiquetasTarragona' (null donde no hay dato)
  const datosTarragonaTotal = {
    'CIU / JxSí / Junts': [52660,118106,111867,111644,127645,116974,106589,93277,121607,113250,172026,96031,53706,69296],
    'PSOE / PSC': [45890,65439,63384,64639,68576,96632,89109,74720,56173,48453,48936,52017,55558,82501],
    'ERC': [23290,11342,12359,22382,32661,29733,60092,50686,26280,53853,172026,104832,67903,51936],
    'PP / AP-PDP-UL': [43913,25138,16596,18722,42398,30108,37183,31644,41250,53435,36898,20188,11970,38109],
    'AC': [null,null,null,null,null,null,null,null,null,null,null,null,null,11160],
    'VOX': [null,null,null,null,null,null,null,null,null,null,null,null,26071,32466],
    'CUP': [null,null,null,null,null,null,null,null,null,12807,30531,17687,18831,12808],
    'Podemos': [null,null,null,null,null,null,null,null,null,null,26745,23653,13615,12023],
    'CS': [null,null,null,null,null,null,null,6970,8427,25998,80273,120825,14502,1660],
    'PSUC': [33645,13029,null,null,null,null,null,null,null,null,null,null,null,null],
    'CDS': [null,null,9508,1890,null,null,null,null,null,null,null,null,null,null],
    'Entesa/ICV/CatComú/ECP': [null,4461,12896,11578,19042,96632,16419,18729,15708,24448,26745,23653,13615,12023],
    'UPyD': [null,null,null,null,null,null,null,null,446,1360,null,null,null,null],
    'PDECat': [null,null,null,null,null,null,null,null,null,null,null,null,null,7699] // sin dato relevante en Tarragona
  };

  // Colores por partido
  const coloresTarragona = {
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
    'CDS': '#00BFFF',
    'Entesa/ICV/CatComú/ECP': '#8B0000',
    'UPyD': '#ff60da',
    'PDECat': '#0183cb'
  };

  // Construir datasets
  const datasetsTarragona = Object.keys(datosTarragonaTotal).map(partido => ({
    type: 'line',
    label: partido,
    data: datosTarragonaTotal[partido],
    borderColor: coloresTarragona[partido] || '#666',
    backgroundColor: 'transparent',
    fill: false,
    tension: 0.3,
    spanGaps: true,
    pointRadius: 4,
    pointBackgroundColor: coloresTarragona[partido] || '#666',
    datalabels: {
      display: true,
      color: coloresTarragona[partido] || '#666',
      font: { weight: 'bold', size: 11 },
      formatter: v => v != null ? v.toLocaleString('es-ES') : ''
    }
  }));

  // Crear el chart
  const ctxTarragona = document.getElementById('tarragonaChart').getContext('2d');
  new Chart(ctxTarragona, {
    data: {
      labels: etiquetasTarragona,
      datasets: datasetsTarragona
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