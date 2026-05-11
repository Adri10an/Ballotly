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
// ================= ASG La Gomera =================
const datosASGLaGomera = [5089, 6215, 6112];
const etiquetasASGLaGomera = ['2015', '2019', '2023'];
const partidosASGLaGomera = ['ASG','ASG','ASG'];

const colorASGLaGomera = '#BF5B5B';

const ctxASGLaGomera = document.getElementById('asgLaGomeraChart').getContext('2d');

new Chart(ctxASGLaGomera, {
  data: {
    labels: etiquetasASGLaGomera,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosASGLaGomera,
        backgroundColor: 'rgba(191,91,91,0.7)',
        borderColor: colorASGLaGomera,
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: colorASGLaGomera, 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosASGLaGomera,
        borderColor: colorASGLaGomera,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorASGLaGomera
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
      y: { 
        beginAtZero: true, 
        title: { display: true, text: 'Votos totales', color: '#333' }, 
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
      id: 'etiquetaPartidoASGLaGomera',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosASGLaGomera.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = colorASGLaGomera;
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosASGLaGomera[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PSOE La Gomera =================
const datosPSOELaGomera = [3367, 8155, 5324, 1945, 2401, 2077];
const etiquetasPSOELaGomera = ['1983', '2007', '2011', '2015', '2019', '2023'];
const partidosPSOELaGomera = ['PSOE','PSOE','PSOE','PSOE','PSOE','PSOE'];

const ctxPSOELaGomera = document.getElementById('psoeLaGomeraChart').getContext('2d');

new Chart(ctxPSOELaGomera, {
  data: {
    labels: etiquetasPSOELaGomera,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPSOELaGomera,
        backgroundColor: 'rgba(255,0,0,0.7)', // rojo PSOE
        borderColor: '#FF0000',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#FF0000', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() // separador de miles
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPSOELaGomera,
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
      y: { 
        beginAtZero: true, 
        title: { display: true, text: 'Votos totales', color: '#333' }, 
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
      id: 'etiquetaPartidoPSOELaGomera',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSOELaGomera.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSOELaGomera[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= IXLG La Gomera =================
const datosIXLGLaGomera = [1259];
const etiquetasIXLGLaGomera = ['2023'];
const partidosIXLGLaGomera = ['IXLG'];

const colorIXLGLaGomera = '#787E61';

const ctxIXLGLaGomera = document.getElementById('ixlgLaGomeraChart').getContext('2d');

new Chart(ctxIXLGLaGomera, {
  data: {
    labels: etiquetasIXLGLaGomera,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosIXLGLaGomera,
        backgroundColor: 'rgba(120,126,97,0.7)',
        borderColor: colorIXLGLaGomera,
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: colorIXLGLaGomera, 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosIXLGLaGomera,
        borderColor: colorIXLGLaGomera,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 5,
        pointBackgroundColor: colorIXLGLaGomera
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
      y: { 
        beginAtZero: true, 
        suggestedMax: 2000,
        title: { display: true, text: 'Votos totales', color: '#333' }, 
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
      id: 'etiquetaPartidoIXLGLaGomera',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIXLGLaGomera.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = colorIXLGLaGomera;
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIXLGLaGomera[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CC La Gomera =================
const datosCCLaGomera = [4742, 2472, 1239, 904, 796];
const etiquetasCCLaGomera = ['2007', '2011', '2015', '2019', '2023'];
const partidosCCLaGomera = ['CC','CC','CC','CC','CC'];

const colorCCLaGomera = '#01ADD7';

const ctxCCLaGomera = document.getElementById('ccLaGomeraChart').getContext('2d');

new Chart(ctxCCLaGomera, {
  data: {
    labels: etiquetasCCLaGomera,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCCLaGomera,
        backgroundColor: 'rgba(1,173,215,0.7)',
        borderColor: colorCCLaGomera,
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: colorCCLaGomera, 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCCLaGomera,
        borderColor: colorCCLaGomera,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorCCLaGomera
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
      y: { 
        beginAtZero: true, 
        suggestedMax: 5000,
        title: { display: true, text: 'Votos totales', color: '#333' }, 
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
      id: 'etiquetaPartidoCCLaGomera',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCCLaGomera.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = colorCCLaGomera;
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCCLaGomera[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PP La Gomera =================
const datosPPLaGomera = [1306, 747, 2931, 1216, 501, 475];
const etiquetasPPLaGomera = ['1983', '2007', '2011', '2015', '2019', '2023'];
const partidosPPLaGomera = ['PP','PP','PP','PP','PP','PP'];

const colorPPLaGomera = '#0000FF';

const ctxPPLaGomera = document.getElementById('ppLaGomeraChart').getContext('2d');

new Chart(ctxPPLaGomera, {
  data: {
    labels: etiquetasPPLaGomera,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPPLaGomera,
        backgroundColor: 'rgba(0,0,255,0.7)', // azul PP
        borderColor: colorPPLaGomera,
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: colorPPLaGomera, 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPPLaGomera,
        borderColor: colorPPLaGomera,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorPPLaGomera
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
      y: { 
        beginAtZero: true, 
        suggestedMax: 3000,
        title: { display: true, text: 'Votos totales', color: '#333' }, 
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
      id: 'etiquetaPartidoPPLaGomera',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPLaGomera.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = colorPPLaGomera;
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPLaGomera[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= VOX La Gomera =================
const datosVOXLaGomera = [227];
const etiquetasVOXLaGomera = ['2023'];
const partidosVOXLaGomera = ['VOX'];

const ctxVOXLaGomera = document.getElementById('voxLaGomeraChart').getContext('2d');

new Chart(ctxVOXLaGomera, {
  data: {
    labels: etiquetasVOXLaGomera,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosVOXLaGomera,
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
        data: datosVOXLaGomera,
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
      y: {
        beginAtZero: true,
        suggestedMax: 300,
        title: { display: true, text: 'Votos totales', color: '#333' },
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
      id: 'etiquetaPartidoVOXLaGomera',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXLaGomera.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXLaGomera[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= NCA La Gomera =================
const datosNCALaGomera = [500, 743, 473];
const etiquetasNCALaGomera = ['2011', '2015', '2019'];
const partidosNCALaGomera = ['NCA', 'NCA', 'NCA'];

const ctxNCALaGomera = document.getElementById('ncaLaGomeraChart').getContext('2d');

new Chart(ctxNCALaGomera, {
  data: {
    labels: etiquetasNCALaGomera,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosNCALaGomera,
        backgroundColor: 'rgba(129,192,59,0.7)', // verde NCA
        borderColor: '#81C03B',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#4B8B00',
          font: { weight: 'bold' },
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosNCALaGomera,
        borderColor: '#81C03B',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#81C03B'
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
      y: {
        beginAtZero: true,
        suggestedMax: 900,
        title: { display: true, text: 'Votos totales', color: '#333' },
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
      id: 'etiquetaPartidoNCALaGomera',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosNCALaGomera.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B8B00';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosNCALaGomera[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Podemos La Gomera =================
const datosPodemosLaGomera = [1037, 747];
const etiquetasPodemosLaGomera = ['2015', '2019'];
const partidosPodemosLaGomera = ['Podemos', 'Podemos'];

const ctxPodemosLaGomera = document.getElementById('podemosLaGomeraChart').getContext('2d');

new Chart(ctxPodemosLaGomera, {
  data: {
    labels: etiquetasPodemosLaGomera,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPodemosLaGomera,
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
        data: datosPodemosLaGomera,
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
      y: {
        beginAtZero: true,
        suggestedMax: 1200,
        title: { display: true, text: 'Votos totales', color: '#333' },
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
      id: 'etiquetaPartidoPodemosLaGomera',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosLaGomera.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosLaGomera[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CS La Gomera =================
const datosCSLaGomera = [250, 185];
const etiquetasCSLaGomera = ['2015', '2019'];
const partidosCSLaGomera = ['CS', 'CS'];

const ctxCSLaGomera = document.getElementById('csLaGomeraChart').getContext('2d');

new Chart(ctxCSLaGomera, {
  data: {
    labels: etiquetasCSLaGomera,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCSLaGomera,
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
        data: datosCSLaGomera,
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
      y: { 
        beginAtZero: true, 
        suggestedMax: 300,
        title: { display: true, text: 'Votos totales', color: '#333' }, 
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
      id: 'etiquetaPartidoCSLaGomera',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSLaGomera.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSLaGomera[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CCN La Gomera =================
const datosCCNLaGomera = [803];
const etiquetasCCNLaGomera = ['2007'];
const partidosCCNLaGomera = ['CCN'];

// Color CCN
const colorCCNLaGomera = '#B9BD3F';

// Chart
const ctxCCNLaGomera = document.getElementById('ccnLaGomeraChart').getContext('2d');

new Chart(ctxCCNLaGomera, {
  data: {
    labels: etiquetasCCNLaGomera,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCCNLaGomera,
        backgroundColor: 'rgba(185,189,63,0.7)',
        borderColor: colorCCNLaGomera,
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: colorCCNLaGomera,
          font: { weight: 'bold' },
          formatter: v => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCCNLaGomera,
        borderColor: colorCCNLaGomera,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorCCNLaGomera
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
      y: {
        beginAtZero: true,
        suggestedMax: 1000,
        title: { display: true, text: 'Votos totales', color: '#333' },
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

// ================= AGI La Gomera =================
const datosAGILaGomera = [3294];
const etiquetasAGILaGomera = ['1983'];
const partidosAGILaGomera = ['AGI'];

// Color AGI
const colorAGILaGomera = '#FFA500';

const ctxAGILaGomera = document.getElementById('agiLaGomeraChart').getContext('2d');

new Chart(ctxAGILaGomera, {
  data: {
    labels: etiquetasAGILaGomera,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosAGILaGomera,
        backgroundColor: 'rgba(255,165,0,0.7)',
        borderColor: colorAGILaGomera,
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#FF8C00',
          font: { weight: 'bold' },
          formatter: v => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosAGILaGomera,
        borderColor: colorAGILaGomera,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorAGILaGomera
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
      y: {
        beginAtZero: true,
        suggestedMax: 4000,
        title: { display: true, text: 'Votos totales', color: '#333' },
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

// ================= IU La Gomera =================
const datosIULaGomera = [143, 54];
const etiquetasIULaGomera = ['2015', '2019'];
const partidosIULaGomera = ['IU', 'IU'];

// Color IU
const colorIULaGomera = '#B22222';

const ctxIULaGomera = document.getElementById('iuLaGomeraChart').getContext('2d');

new Chart(ctxIULaGomera, {
  data: {
    labels: etiquetasIULaGomera,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosIULaGomera,
        backgroundColor: 'rgba(178,34,34,0.7)',
        borderColor: colorIULaGomera,
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#8B0000', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosIULaGomera,
        borderColor: colorIULaGomera,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorIULaGomera
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
      y: { 
        beginAtZero: true,
        suggestedMax: 200,
        title: { display: true, text: 'Votos totales', color: '#333' }, 
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
      id: 'etiquetaPartidoIULaGomera',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIULaGomera.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIULaGomera[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UPyD La Gomera =================
const datosUPyDLaGomera = [13];
const etiquetasUPyDLaGomera = ['2015'];
const partidosUPyDLaGomera = ['UPyD'];

// Color UPyD
const colorUPyDLaGomera = '#FF60DA';

const ctxUPyDLaGomera = document.getElementById('upydLaGomeraChart').getContext('2d');

new Chart(ctxUPyDLaGomera, {
  data: {
    labels: etiquetasUPyDLaGomera,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUPyDLaGomera,
        backgroundColor: 'rgba(255,96,218,0.7)',
        borderColor: colorUPyDLaGomera,
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: colorUPyDLaGomera, 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosUPyDLaGomera,
        borderColor: colorUPyDLaGomera,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorUPyDLaGomera
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
      y: { 
        beginAtZero: true,
        suggestedMax: 20,
        title: { display: true, text: 'Votos totales', color: '#333' }, 
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
      id: 'etiquetaPartidoUPyDLaGomera',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDLaGomera.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = colorUPyDLaGomera;
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDLaGomera[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Datos La Gomera por partido =================
const etiquetasLaGomera = [
  '1983', '2007', '2011', '2015', '2019', '2023'
];

const datosLaGomera = {
  'PSOE': [3367, 8155, 5324, 1945, 2401, 2077],
  'PP': [1306, 747, 2931, 1216, 501, 475],
  'NC': [null, null, 500, 743, 473, null],
  'CC': [null, 4742, 2472, 1239, 904, 796],
  'VOX': [null, null, null, null, null, 227],
  'Podemos/IU': [null, null, null, 1037, 747, null], 
  'CS': [null, null, null, 250, 185, null],
  'CCN': [null, 803, null, null, null, null],
  'AGI': [3294, null, null, null, null, null],
  'IU': [null, null, null, 143, 54, null],
  'UPyD': [null, null, null, 13, null, null],
  'ASG': [null, null, null, 5089, 6215, 6112],
  'IXLG': [null, null, null, null, null, 1259]
};

const coloresPartidosLaGomera = {
  'PSOE': '#FF0000',
  'PP': '#0000FF',
  'NC': '#81C03B',
  'CC': '#01ADD7',
  'VOX': '#008000',
  'Podemos/IU': '#800080',
  'CS': '#FF8C00',
  'CCN': '#B9BD3F',
  'AGI': '#FFA500',
  'IU': '#B22222',
  'UPyD': '#FF60DA',
  'ASG': '#BF5B5B',
  'IXLG': '#787E61'
};

const datasetsLaGomera = Object.keys(datosLaGomera).map(partido => ({
  type: 'line',
  label: partido,
  data: datosLaGomera[partido],
  borderColor: coloresPartidosLaGomera[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresPartidosLaGomera[partido],
  datalabels: {
    display: true,
    color: coloresPartidosLaGomera[partido],
    font: { weight: 'bold', size: 12 },
    formatter: v => v != null ? v.toLocaleString() : ''
  }
}));

const ctxLaGomera = document.getElementById('votosTotalesLaGomeraChart').getContext('2d');

new Chart(ctxLaGomera, {
  data: {
    labels: etiquetasLaGomera,
    datasets: datasetsLaGomera
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
        title: { display: true, text: 'Votos totales', color: '#333' },
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
