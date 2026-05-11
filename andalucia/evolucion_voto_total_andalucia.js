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
 
// ================= PP · Andalucía =================
const datosPPAndaluciaVotos = [
  484474, 745485, 611734, 1238252, 1467700, 1535987,
  1426774, 1730154, 1567207, 1066458, 750778, 1589272
];

const etiquetasPPAndaluciaVotos = [
  '1982','1986','1990','1994','1996','2000',
  '2004','2008','2012','2015','2018','2022'
];

const partidosPPAndaluciaVotos = [
  'AP','AP','PP','PP','PP','PP','PP','PP','PP','PP','PP','PP'
];

const ctxPPAndaluciaVotos = document.getElementById('ppAndaluciaChart').getContext('2d');

new Chart(ctxPPAndaluciaVotos, {
  data: {
    labels: etiquetasPPAndaluciaVotos,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPPAndaluciaVotos,
        backgroundColor: 'rgba(0,0,255,0.7)', // azul PP oficial
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
        data: datosPPAndaluciaVotos,
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
      id: 'etiquetaPartidoPPAndaluciaVotos',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPAndaluciaVotos.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPAndaluciaVotos[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PSOE · Andalucía =================
const datosPSOEAndaluciaVotos = [
  1498619, 1576513, 1368576, 1395131, 1909160, 1790653,
  2260545, 2178296, 1523465, 1411278, 1010889, 888325
];

const etiquetasPSOEAndaluciaVotos = [
  '1982','1986','1990','1994','1996','2000',
  '2004','2008','2012','2015','2018','2022'
];

const partidosPSOEAndaluciaVotos = Array(etiquetasPSOEAndaluciaVotos.length).fill('PSOE');

const ctxPSOEAndaluciaVotos = document.getElementById('psoeAndaluciaChart').getContext('2d');

new Chart(ctxPSOEAndaluciaVotos, {
  data: {
    labels: etiquetasPSOEAndaluciaVotos,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPSOEAndaluciaVotos,
        backgroundColor: 'rgba(255,0,0,0.7)', // rojo PSOE
        borderColor: '#FF0000',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#B22222', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString('es-ES')
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPSOEAndaluciaVotos,
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
      id: 'etiquetaPartidoPSOEAndaluciaVotos',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSOEAndaluciaVotos.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#B22222';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSOEAndaluciaVotos[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= VOX · Andalucía =================
const datosVOXAndaluciaVotos = [18422, 396607, 496618];
const etiquetasVOXAndaluciaVotos = ['2015','2018','2022'];
const partidosVOXAndaluciaVotos = ['VOX','VOX','VOX'];

const ctxVOXAndaluciaVotos = document.getElementById('voxAndaluciaChart').getContext('2d');

new Chart(ctxVOXAndaluciaVotos, {
  data: {
    labels: etiquetasVOXAndaluciaVotos,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosVOXAndaluciaVotos,
        backgroundColor: 'rgba(0,128,0,0.7)', // verde VOX exacto
        borderColor: '#008000',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#004d00', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString('es-ES')
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosVOXAndaluciaVotos,
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
      id: 'etiquetaPartidoVOXAndaluciaVotos',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXAndaluciaVotos.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#004d00';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXAndaluciaVotos[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= POR ANDALUCÍA ANDALUCÍA =================
const datosPorAndalucia = [284027];
const etiquetasPorAndalucia = ['2022'];
const partidosPorAndalucia = ['Por Andalucía'];

const ctxPorAndalucia = document.getElementById('porAndaluciaChart').getContext('2d');

new Chart(ctxPorAndalucia, {
  data: {
    labels: etiquetasPorAndalucia,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPorAndalucia,
        backgroundColor: 'rgba(196,32,101,0.7)', // color Por Andalucía
        borderColor: '#C42065',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#7A0F3E', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() // separador de miles
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPorAndalucia,
        borderColor: '#C42065',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#C42065'
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
      id: 'etiquetaPartidoPorAndalucia',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPorAndalucia.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#7A0F3E';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPorAndalucia[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= JAÉN MERECE MÁS ANDALUCÍA =================
const datosJMMAndalucia = [18873];
const etiquetasJMMAndalucia = ['2022'];
const partidosJMMAndalucia = ['Jaén Merece Más'];

const ctxJMMAndalucia = document.getElementById('jaenMereceMasAndaluciaChart').getContext('2d');

new Chart(ctxJMMAndalucia, {
  data: {
    labels: etiquetasJMMAndalucia,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosJMMAndalucia,
        backgroundColor: 'rgba(71,119,62,0.7)', // verde institucional JMM
        borderColor: '#47773e',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#355334', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() // separador de miles
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosJMMAndalucia,
        borderColor: '#47773e',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#47773e'
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
      id: 'etiquetaPartidoJMMAndalucia',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosJMMAndalucia.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#355334';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosJMMAndalucia[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Adelante Andalucía ANDALUCÍA =================
const datosAdelante = [585949, 168960];
const etiquetasAdelante = ['2018','2022'];
const partidosAdelante = ['Adelante Andalucía','Adelante Andalucía'];

const ctxAdelante = document.getElementById('adelanteAndaluciaChart').getContext('2d');

new Chart(ctxAdelante, {
  data: {
    labels: etiquetasAdelante,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosAdelante,
        backgroundColor: 'rgba(36,200,126,0.7)', // verde Adelante Andalucía
        borderColor: '#24C87E',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#15895A', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() // separador de miles
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosAdelante,
        borderColor: '#24C87E',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#24C87E'
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
      id: 'etiquetaPartidoAdelante',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosAdelante.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#15895A';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosAdelante[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CS ANDALUCÍA =================
const datosCS = [369896, 661371, 121567];
const etiquetasCS = ['2015','2018','2022'];
const partidosCS = ['CS','CS','CS'];

const ctxCS = document.getElementById('csAndaluciaChart').getContext('2d');

const csAndaluciaChart = new Chart(ctxCS, {
  data: {
    labels: etiquetasCS,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCS,
        backgroundColor: 'rgba(255,140,0,0.7)', // naranja CS
        borderColor: '#FF8C00',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#FF4500', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() // separador de miles
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCS,
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
      id: 'etiquetaPartidoCS',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCS.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCS[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Podemos/IU ANDALUCÍA =================
const datosPodemos = [592133]; // votos totales Andalucía
const etiquetasPodemos = ['2015'];
const partidosPodemos = ['Podemos-IU'];

const ctxPodemos = document.getElementById('podemosAndaluciaChart').getContext('2d');

const podemosAndaluciaChart = new Chart(ctxPodemos, {
  data: {
    labels: etiquetasPodemos,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPodemos,
        backgroundColor: 'rgba(128,0,128,0.7)', // morado Podemos/IU
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
        data: datosPodemos,
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
      id: 'etiquetaPartidoPodemos',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemos.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemos[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PA ANDALUCÍA =================
const datosPA = [153709, 196947, 296558, 208862, 287764, 300356, 276674, 96608, 60645];
const etiquetasPA = ['1982','1986','1990','1994','1996','2000','2004','2012','2015'];
const partidosPA = ['PA','PA','PA','PA','PA','PA','PA','PA','PA'];

const ctxPA = document.getElementById('paAndaluciaChart').getContext('2d');

const paAndaluciaChart = new Chart(ctxPA, {
  data: {
    labels: etiquetasPA,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPA,
        backgroundColor: 'rgba(21,170,53,0.7)', // verde PA
        borderColor: '#15AA35',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#0F7A28', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPA,
        borderColor: '#15AA35',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#15AA35'
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
      id: 'etiquetaPartidoPA',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPA.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#0F7A28';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPA[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UCD ANDALUCÍA =================
const datosUCD = [371154]; // 1982
const etiquetasUCD = ['1982'];
const partidosUCD = ['UCD'];

const ctxUCD = document.getElementById('ucdAndaluciaChart').getContext('2d');

const ucdAndaluciaChart = new Chart(ctxUCD, {
  data: {
    labels: etiquetasUCD,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUCD,
        backgroundColor: 'rgba(255,165,0,0.7)', // naranja UCD
        borderColor: '#FFA500',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#CC8400', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosUCD,
        borderColor: '#FFA500',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#FFA500'
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
      id: 'etiquetaPartidoUCD',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUCD.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#CC8400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUCD[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CDS ANDALUCÍA =================
const datosCDS = [109678, 32712, 9875]; // 1986, 1990, 1994
const etiquetasCDS = ['1986','1990','1994'];
const partidosCDS = ['CDS','CDS','CDS'];

const ctxCDS = document.getElementById('cdsAndaluciaChart').getContext('2d');

const cdsAndaluciaChart = new Chart(ctxCDS, {
  data: {
    labels: etiquetasCDS,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCDS,
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
        data: datosCDS,
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
      id: 'etiquetaPartidoCDS',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDS.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1E90FF';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDS[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= IU ANDALUCÍA =================
const datosIU = [598889, 349640, 689815, 603495, 327435, 337030, 317562, 437445, 274426]; 
const etiquetasIU = ['1986','1990','1994','1996','2000','2004','2008','2012','2015'];
const partidosIU = ['IU','IU','IU','IU','IU','IU','IU','IU','Podemos-IU'];

const ctxIU = document.getElementById('iuAndaluciaChart').getContext('2d');

const iuAndaluciaChart = new Chart(ctxIU, {
  data: {
    labels: etiquetasIU,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosIU,
        backgroundColor: 'rgba(178,34,34,0.7)', // rojo IU
        borderColor: '#B22222',
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
        data: datosIU,
        borderColor: '#B22222',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#B22222'
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
      id: 'etiquetaPartidoIU',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIU.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIU[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UPyD ANDALUCÍA =================
const datosUPyD = [27712, 129180, 76839, 6384]; 
const etiquetasUPyD = ['2008','2012','2015','2018'];
const partidosUPyD = ['UPyD','UPyD','UPyD','UPyD'];

const ctxUPyD = document.getElementById('upydAndaluciaChart').getContext('2d');

const upydAndaluciaChart = new Chart(ctxUPyD, {
  data: {
    labels: etiquetasUPyD,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUPyD,
        backgroundColor: 'rgba(255,96,218,0.7)', // rosa UPyD
        borderColor: '#FF60DA',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#FF60DA', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosUPyD,
        borderColor: '#FF60DA',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#FF60DA'
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
      id: 'etiquetaPartidoUPyD',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyD.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF60DA';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyD[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// Datos Andalucía por partido
const etiquetasAndalucia = ['1982','1986','1990','1994','1996','2000','2004','2008','2012','2015','2018','2022'];

const datosAndalucia = {
  'PP/AP':       [484474, 745485, 611734, 1238252, 1467700, 1535987, 1426774, 1730154, 1567207, 1066458, 750778, 1589272],
  'PSOE':        [1498619, 1576513, 1368576, 1395131, 1909160, 1790653, 2260545, 2178296, 1523465, 1411278, 1010889, 888325],
  'VOX':         [null,null,null,null,null,null,null,null,null,18422,396607,496618],
  'CS':          [null,null,null,null,null,null,null,null,null,369896,661371,121567],
  'Podemos/IU':  [null,null,null,null,null,null,null,null,null,592133,null,null],
  'CDS':         [null,109678,32712,9875,null,null,null,null,null,null,null,null],
  'IU':          [null,598889,349640,689815,603495,327435,337030,317562,437445,274426,null,null],
  'UPyD':        [null,null,null,null,null,null,null,27712,129180,76839,6384,null],
  'PA':          [153709,196947,296558,208862,287764,300356,276674,null,96608,60645,null,null],
  'UCD':         [371154,null,null,null,null,null,null,null,null,null,null,null],
  'Por Andalucía':[null,null,null,null,null,null,null,null,null,null,null,284027],
  'Adelante Andalucía':[null,null,null,null,null,null,null,null,null,null,585949,168960],
  'Jaén Merece Más':[null,null,null,null,null,null,null,null,null,null,null,18873]
};

const coloresPartidosAndalucia = {
  'PP/AP': '#0000FF',
  'PSOE': '#FF0000',
  'VOX': '#008000',
  'CS': '#FF8C00',
  'Podemos/IU': '#800080',
  'CDS': '#00BFFF',
  'IU': '#B22222',
  'UPyD': '#FF60DA',
  'PA': '#15AA35',
  'UCD': '#FFA500',
  'Por Andalucía': '#C42065',
  'Adelante Andalucía': '#24C87E',
  'Jaén Merece Más': '#47773e'
};

const datasetsAndalucia = Object.keys(datosAndalucia).map(partido => ({
  type: 'line',
  label: partido,
  data: datosAndalucia[partido],
  borderColor: coloresPartidosAndalucia[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresPartidosAndalucia[partido],
  datalabels: { 
    display: true,
    color: coloresPartidosAndalucia[partido],
    font: { weight: 'bold', size: 12 },
    formatter: v => v != null ? v.toLocaleString('es-ES') : ''
  }
}));

const ctxAndalucia = document.getElementById('votosTotalesAndaluciaChart').getContext('2d');

new Chart(ctxAndalucia, {
  data: {
    labels: etiquetasAndalucia,
    datasets: datasetsAndalucia
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