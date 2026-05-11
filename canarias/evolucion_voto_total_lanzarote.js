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
const datosPSOELanzarote = [9595, 12727, 7386, 9405, 13802, 13705];
const etiquetasPSOELanzarote = ['1983', '2007', '2011', '2015', '2019', '2023'];
const partidosPSOELanzarote = ['PSOE','PSOE','PSOE','PSOE','PSOE','PSOE'];

const ctxPSOELanzarote = document.getElementById('psoeLanzaroteChart').getContext('2d');

new Chart(ctxPSOELanzarote, {
  data: {
    labels: etiquetasPSOELanzarote,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPSOELanzarote,
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
        data: datosPSOELanzarote,
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
      id: 'etiquetaPartidoPSOELanzarote',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSOELanzarote.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSOELanzarote[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosCCLanzarote = [8303, 14901, 10009, 15566, 12985];
const etiquetasCCLanzarote = ['2007', '2011', '2015', '2019', '2023'];
const partidosCCLanzarote = ['CC','CC','CC','CC','CC'];

const ctxCCLanzarote = document.getElementById('ccLanzaroteChart').getContext('2d');

new Chart(ctxCCLanzarote, {
  data: {
    labels: etiquetasCCLanzarote,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCCLanzarote,
        backgroundColor: 'rgba(1,173,215,0.7)', // cian CC
        borderColor: '#01ADD7',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#01ADD7', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCCLanzarote,
        borderColor: '#01ADD7',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#01ADD7'
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
      id: 'etiquetaPartidoCCLanzarote',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCCLanzarote.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#01ADD7';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCCLanzarote[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosPPLanzarote = [3687, 6751, 9582, 5835, 6169, 8113];
const etiquetasPPLanzarote = ['1983', '2007', '2011', '2015', '2019', '2023'];
const partidosPPLanzarote = ['PP','PP','PP','PP','PP','PP'];

const ctxPPLanzarote = document.getElementById('ppLanzaroteChart').getContext('2d');

new Chart(ctxPPLanzarote, {
  data: {
    labels: etiquetasPPLanzarote,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPPLanzarote,
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
        data: datosPPLanzarote,
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
      id: 'etiquetaPartidoPPLanzarote',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPLanzarote.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPLanzarote[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosNCLanzarote = [2863, 5840, 3692, 2560, 4083];
const etiquetasNCLanzarote = ['2007', '2011', '2015', '2019', '2023'];
const partidosNCLanzarote = ['NC','NC','NC','NC','NC'];

const ctxNCLanzarote = document.getElementById('ncLanzaroteChart').getContext('2d');

new Chart(ctxNCLanzarote, {
  data: {
    labels: etiquetasNCLanzarote,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosNCLanzarote,
        backgroundColor: 'rgba(129,192,59,0.7)', // verde NC
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
        data: datosNCLanzarote,
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
      id: 'etiquetaPartidoNCLanzarote',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosNCLanzarote.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B8B00';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosNCLanzarote[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosVOXLanzarote = [1293, 3239];
const etiquetasVOXLanzarote = ['2019', '2023'];
const partidosVOXLanzarote = ['VOX','VOX'];

const ctxVOXLanzarote = document.getElementById('voxLanzaroteChart').getContext('2d');

new Chart(ctxVOXLanzarote, {
  data: {
    labels: etiquetasVOXLanzarote,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosVOXLanzarote,
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
        data: datosVOXLanzarote,
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
      id: 'etiquetaPartidoVOXLanzarote',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXLanzarote.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXLanzarote[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosPodemosLanzarote = [6507, 3936, 2043];
const etiquetasPodemosLanzarote = ['2015', '2019', '2023'];
const partidosPodemosLanzarote = ['Podemos','Podemos','Podemos'];

const ctxPodemosLanzarote = document.getElementById('podemosLanzaroteChart').getContext('2d');

new Chart(ctxPodemosLanzarote, {
  data: {
    labels: etiquetasPodemosLanzarote,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPodemosLanzarote,
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
        data: datosPodemosLanzarote,
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
      id: 'etiquetaPartidoPodemosLanzarote',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosLanzarote.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosLanzarote[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosDVCLanzarote = [1189];
const etiquetasDVCLanzarote = ['2023'];
const partidosDVCLanzarote = ['DVC'];

const ctxDVCLanzarote = document.getElementById('dvcLanzaroteChart').getContext('2d');

new Chart(ctxDVCLanzarote, {
  data: {
    labels: etiquetasDVCLanzarote,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosDVCLanzarote,
        backgroundColor: 'rgba(86,152,113,0.7)', // verde DVC
        borderColor: '#569871',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#38644D', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosDVCLanzarote,
        borderColor: '#569871',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#569871'
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
      id: 'etiquetaPartidoDVCLanzarote',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosDVCLanzarote.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#38644D';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosDVCLanzarote[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosCSLanzarote = [2698, 2708];
const etiquetasCSLanzarote = ['2015', '2019'];
const partidosCSLanzarote = ['CS','CS'];

const ctxCSLanzarote = document.getElementById('csLanzaroteChart').getContext('2d');

new Chart(ctxCSLanzarote, {
  data: {
    labels: etiquetasCSLanzarote,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCSLanzarote,
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
        data: datosCSLanzarote,
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
      id: 'etiquetaPartidoCSLanzarote',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSLanzarote.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSLanzarote[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosCCNLanzarote = [864];
const etiquetasCCNLanzarote = ['1983'];
const partidosCCNLanzarote = ['CCN'];

// Color oficial CCN
const colorCCNLanzarote = '#B9BD3F';

const ctxCCNLanzarote = document.getElementById('ccnLanzaroteChart').getContext('2d');

new Chart(ctxCCNLanzarote, {
  data: {
    labels: etiquetasCCNLanzarote,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCCNLanzarote,
        backgroundColor: 'rgba(185,189,63,0.7)',
        borderColor: colorCCNLanzarote,
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: colorCCNLanzarote,
          font: { weight: 'bold' },
          formatter: v => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCCNLanzarote,
        borderColor: colorCCNLanzarote,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorCCNLanzarote
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
      id: 'etiquetaPartidoCCNLanzarote',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCCNLanzarote.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = colorCCNLanzarote;
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCCNLanzarote[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosPILLanzarote = [9701];
const etiquetasPILLanzarote = ['2007'];
const partidosPILLanzarote = ['PIL'];

// Color oficial PIL
const colorPILLanzarote = '#BFBCA5';

const ctxPILLanzarote = document.getElementById('pilLanzaroteChart').getContext('2d');

new Chart(ctxPILLanzarote, {
  data: {
    labels: etiquetasPILLanzarote,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPILLanzarote,
        backgroundColor: 'rgba(191,188,165,0.7)',
        borderColor: colorPILLanzarote,
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: colorPILLanzarote,
          font: { weight: 'bold' },
          formatter: v => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPILLanzarote,
        borderColor: colorPILLanzarote,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorPILLanzarote
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
      id: 'etiquetaPartidoPILLanzarote',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPILLanzarote.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = colorPILLanzarote;
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPILLanzarote[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosAILLanzarote = [2718];
const etiquetasAILLanzarote = ['1983'];
const partidosAILLanzarote = ['AIL'];

// Color oficial AIL
const colorAILLanzarote = '#5A5EA2';

const ctxAILLanzarote = document.getElementById('ailLanzaroteChart').getContext('2d');

new Chart(ctxAILLanzarote, {
  data: {
    labels: etiquetasAILLanzarote,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosAILLanzarote,
        backgroundColor: 'rgba(90,94,162,0.7)',
        borderColor: colorAILLanzarote,
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: colorAILLanzarote,
          font: { weight: 'bold' },
          formatter: v => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosAILLanzarote,
        borderColor: colorAILLanzarote,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorAILLanzarote
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
      id: 'etiquetaPartidoAILLanzarote',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosAILLanzarote.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = colorAILLanzarote;
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosAILLanzarote[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosCDSLanzarote = [2435];
const etiquetasCDSLanzarote = ['1983'];
const partidosCDSLanzarote = ['CDS'];

// Color oficial CDS
const colorCDSLanzarote = '#00BFFF';

const ctxCDSLanzarote = document.getElementById('cdsLanzaroteChart').getContext('2d');

new Chart(ctxCDSLanzarote, {
  data: {
    labels: etiquetasCDSLanzarote,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCDSLanzarote,
        backgroundColor: 'rgba(0,191,255,0.7)',
        borderColor: colorCDSLanzarote,
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: colorCDSLanzarote,
          font: { weight: 'bold' },
          formatter: v => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCDSLanzarote,
        borderColor: colorCDSLanzarote,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorCDSLanzarote
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
      id: 'etiquetaPartidoCDSLanzarote',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSLanzarote.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = colorCDSLanzarote;
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSLanzarote[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosIULanzarote = [284, 813, 981, 809];
const etiquetasIULanzarote = ['2007','2011','2015','2019'];
const partidosIULanzarote = ['IU','IU','IU','IU'];

// Color oficial IU
const colorIULanzarote = '#B22222';

const ctxIULanzarote = document.getElementById('iuLanzaroteChart').getContext('2d');

new Chart(ctxIULanzarote, {
  data: {
    labels: etiquetasIULanzarote,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosIULanzarote,
        backgroundColor: 'rgba(178,34,34,0.7)',
        borderColor: colorIULanzarote,
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#8B0000', 
          font: { weight: 'bold' }, 
          formatter: v => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosIULanzarote,
        borderColor: colorIULanzarote,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorIULanzarote
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
      id: 'etiquetaPartidoIULanzarote',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIULanzarote.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIULanzarote[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosUPyDLanzarote = [427, 194];
const etiquetasUPyDLanzarote = ['2011','2015'];
const partidosUPyDLanzarote = ['UPyD','UPyD'];

// Color oficial UPyD
const colorUPyDLanzarote = '#FF60DA';

const ctxUPyDLanzarote = document.getElementById('upydLanzaroteChart').getContext('2d');

new Chart(ctxUPyDLanzarote, {
  data: {
    labels: etiquetasUPyDLanzarote,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUPyDLanzarote,
        backgroundColor: 'rgba(255,96,218,0.7)',
        borderColor: colorUPyDLanzarote,
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: colorUPyDLanzarote, 
          font: { weight: 'bold' }, 
          formatter: v => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosUPyDLanzarote,
        borderColor: colorUPyDLanzarote,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorUPyDLanzarote
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
      id: 'etiquetaPartidoUPyDLanzarote',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDLanzarote.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = colorUPyDLanzarote;
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDLanzarote[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// Datos Lanzarote por partido
const etiquetasLanzarote = ['1983','2007','2011','2015','2019','2023'];

const datosLanzarote = {
  'PSOE': [9595, 12727, 7386, 9405, 13802, 13705],
  'PP': [3687, 6751, 9582, 5835, 6169, 8113],
  'NC': [null, 2863, 5840, 3692, 2560, 4083],
  'CC': [null, 8303, 14901, 10009, 15566, 12985],
  'VOX': [null, null, null, null, 1293, 3239],
  'DVC': [null, null, null, null, null, 1189],
  'Podemos/IU': [null, null, null, 6507, 3936, 2043],
  'CS': [null, null, null, 2698, 2708, null],
  'CCN': [864, null, null, null, null, null],
  'PIL': [null, 9701, null, null, null, null],
  'AIL': [2718, null, null, null, null, null],
  'CDS': [2435, null, null, null, null, null],
  'IU': [null, 284, 813, 981, 809, null],
  'UPyD': [null, null, 427, 194, null, null]
};

const coloresPartidosLanzarote = {
  'PSOE': '#FF0000',
  'PP': '#0000FF',
  'NC': '#81C03B',
  'CC': '#01ADD7',
  'VOX': '#008000',
  'DVC': '#569871',
  'Podemos/IU': '#800080',
  'CS': '#FF8C00',
  'CCN': '#B9BD3F',
  'PIL': '#BFBCA5',
  'AIL': '#5A5EA2',
  'CDS': '#00BFFF',
  'IU': '#B22222',
  'UPyD': '#FF60DA'
};

const datasetsLanzarote = Object.keys(datosLanzarote).map(partido => ({
  type: 'line',
  label: partido,
  data: datosLanzarote[partido],
  borderColor: coloresPartidosLanzarote[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresPartidosLanzarote[partido],
  datalabels: {
    display: true,
    color: coloresPartidosLanzarote[partido],
    font: { weight: 'bold', size: 12 },
    formatter: v => v != null ? v.toLocaleString() : ''
  }
}));

const ctxLanzarote = document.getElementById('votosTotalesLanzaroteChart')?.getContext('2d');

if(ctxLanzarote) {
  new Chart(ctxLanzarote, {
    data: {
      labels: etiquetasLanzarote,
      datasets: datasetsLanzarote
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
}