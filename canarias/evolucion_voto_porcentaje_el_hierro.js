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
// ================= PP El Hierro =================
const datosPPElHierro = [29.9, 19.8, 25.28, 17.19, 18.64, 21.27];
const etiquetasPPElHierro = ['1983', '2007', '2011', '2015', '2019', '2023'];
const partidosPPElHierro = ['PP', 'PP', 'PP', 'PP', 'PP', 'PP'];

const ctxPPElHierro = document.getElementById('ppElHierroChart').getContext('2d');

new Chart(ctxPPElHierro, {
  data: {
    labels: etiquetasPPElHierro,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPPElHierro,
        backgroundColor: 'rgba(0,0,255,0.7)', // azul intenso
        borderColor: '#0000FF',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#00008B', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPPElHierro,
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
        title: { display: true, text: 'Porcentaje (%)', color: '#333' }, 
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
      id: 'etiquetaPartidoPPElHierro',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPElHierro.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPElHierro[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PSOE El Hierro =================
const datosPSOEElHierro = [28.5, 23.52, 33.87, 22.18, 32.33, 22.9];
const etiquetasPSOEElHierro = ['1983', '2007', '2011', '2015', '2019', '2023'];
const partidosPSOEElHierro = ['PSOE', 'PSOE', 'PSOE', 'PSOE', 'PSOE', 'PSOE'];

const ctxPSOEElHierro = document.getElementById('psoeElHierroChart').getContext('2d');

new Chart(ctxPSOEElHierro, {
  data: {
    labels: etiquetasPSOEElHierro,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPSOEElHierro,
        backgroundColor: 'rgba(255,0,0,0.7)', // rojo PSOE
        borderColor: '#FF0000',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#B22222', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPSOEElHierro,
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
        title: { display: true, text: 'Porcentaje (%)', color: '#333' }, 
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
      id: 'etiquetaPartidoPSOEElHierro',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSOEElHierro.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#B22222';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSOEElHierro[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= AHI El Hierro =================
const datosAHIElHierro = [27.6, 35.67, 33.79, 27.56];
const etiquetasAHIElHierro = ['1983', '2011', '2019', '2023'];
const partidosAHIElHierro = ['AHÍ', 'AHÍ', 'AHÍ', 'AHÍ'];

const ctxAHIElHierro = document.getElementById('ahiElHierroChart').getContext('2d');

new Chart(ctxAHIElHierro, {
  data: {
    labels: etiquetasAHIElHierro,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosAHIElHierro,
        backgroundColor: 'rgba(1, 128, 1, 0.7)', // verde AHI
        borderColor: '#018001',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#004d00', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosAHIElHierro,
        borderColor: '#018001',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#018001'
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
        title: { display: true, text: 'Porcentaje (%)', color: '#333' }, 
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
      id: 'etiquetaPartidoAHIElHierro',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosAHIElHierro.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#004d00';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosAHIElHierro[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Asamblea Herreña El Hierro =================
const datosAsambleaHerreñaElHierro = [18.18];
const etiquetasAsambleaHerreñaElHierro = ['2023'];
const partidosAsambleaHerreñaElHierro = ['Asamblea Herreña'];

const ctxAsambleaHerreñaElHierro = document.getElementById('asambleaHerreraElHierroChart').getContext('2d');

new Chart(ctxAsambleaHerreñaElHierro, {
  data: {
    labels: etiquetasAsambleaHerreñaElHierro,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosAsambleaHerreñaElHierro,
        backgroundColor: 'rgba(188, 206, 68, 0.7)', // color Asamblea Herreña El Hierro
        borderColor: '#BCCE44',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#666600', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
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
        title: { display: true, text: 'Porcentaje (%)', color: '#333' }, 
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
      id: 'etiquetaPartidoAsambleaHerreñaElHierro',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosAsambleaHerreñaElHierro.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#666600';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosAsambleaHerreñaElHierro[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= VOX El Hierro =================
const datosVOXElHierro = [1.59];
const etiquetasVOXElHierro = ['2023'];
const partidosVOXElHierro = ['VOX'];

const ctxVOXElHierro = document.getElementById('voxElHierroChart').getContext('2d');

new Chart(ctxVOXElHierro, {
  data: {
    labels: etiquetasVOXElHierro,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosVOXElHierro,
        backgroundColor: 'rgba(0,128,0,0.7)', // verde VOX El Hierro
        borderColor: '#008000',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#006400', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
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
        title: { display: true, text: 'Porcentaje (%)', color: '#333' }, 
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
      id: 'etiquetaPartidoVOXElHierro',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXElHierro.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXElHierro[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CS El Hierro =================
const datosCSElHierro = [1.41, 3.76];
const etiquetasCSElHierro = ['2015', '2019'];
const partidosCSElHierro = ['CS', 'CS'];

const ctxCSElHierro = document.getElementById('csElHierroChart').getContext('2d');

new Chart(ctxCSElHierro, {
  data: {
    labels: etiquetasCSElHierro,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCSElHierro,
        backgroundColor: 'rgba(255,140,0,0.7)', // naranja CS
        borderColor: '#FF8C00',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#FF4500', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCSElHierro,
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
      y: { 
        beginAtZero: true, 
        title: { display: true, text: 'Porcentaje (%)', color: '#333' }, 
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
      id: 'etiquetaPartidoCSElHierro',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSElHierro.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSElHierro[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Podemos El Hierro =================
const datosPodemosElHierro = [6.7, 2.63];
const etiquetasPodemosElHierro = ['2015', '2023'];
const partidosPodemosElHierro = ['Podemos', 'Podemos'];

const ctxPodemosElHierro = document.getElementById('podemosElHierroChart').getContext('2d');

new Chart(ctxPodemosElHierro, {
  data: {
    labels: etiquetasPodemosElHierro,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPodemosElHierro,
        backgroundColor: 'rgba(128, 0, 128, 0.7)', // morado Podemos El Hierro
        borderColor: '#800080',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#4B0082', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPodemosElHierro,
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
      y: { 
        beginAtZero: true, 
        title: { display: true, text: 'Porcentaje (%)', color: '#333' }, 
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
      id: 'etiquetaPartidoPodemosElHierro',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosElHierro.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosElHierro[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Coalición Canaria El Hierro =================
const datosCCElHierro = [47.06, 41.64];
const etiquetasCCElHierro = ['2007', '2015'];
const partidosCCElHierro = ['CC', 'CC'];

const ctxCCElHierro = document.getElementById('ccElHierroChart').getContext('2d');

new Chart(ctxCCElHierro, {
  data: {
    labels: etiquetasCCElHierro,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCCElHierro,
        backgroundColor: 'rgba(1, 173, 215, 0.7)', // color CC El Hierro
        borderColor: '#01ADD7',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#017A9E', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCCElHierro,
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
    animation: { duration: 1500, easing: 'easeOutBounce' },
    plugins: { 
      legend: { position: 'top', labels: { color: '#333' } }, 
      datalabels: { display: true } 
    },
    scales: {
      y: { 
        beginAtZero: true, 
        title: { display: true, text: 'Porcentaje (%)', color: '#333' }, 
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
      id: 'etiquetaPartidoCCElHierro',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCCElHierro.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#017A9E';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCCElHierro[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// Datos CCN El Hierro
const datosCCNElHierro = [2.41]; // porcentaje
const etiquetasCCNElHierro = ['2007'];
const partidosCCNElHierro = ['CCN'];

const ctxCCNElHierro = document.getElementById('ccnElHierroChart').getContext('2d');

new Chart(ctxCCNElHierro, {
  data: {
    labels: etiquetasCCNElHierro,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCCNElHierro,
        backgroundColor: 'rgba(185,189,63,0.7)', // color CCN
        borderColor: '#B9BD3F',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#B9BD3F', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCCNElHierro,
        borderColor: '#B9BD3F',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#B9BD3F'
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
        title: { display: true, text: 'Porcentaje (%)', color: '#333' }, 
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

// ================= IU El Hierro =================
const datosIUElHierro = [2.01, 2.13, 4.74];
const etiquetasIUElHierro = ['2011', '2015', '2019'];
const partidosIUElHierro = ['IU', 'IU', 'IU'];

const ctxIUElHierro = document.getElementById('iuElHierroChart').getContext('2d');

new Chart(ctxIUElHierro, {
  data: {
    labels: etiquetasIUElHierro,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosIUElHierro,
        backgroundColor: 'rgba(178,34,34,0.7)', // rojo IU
        borderColor: '#B22222',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#8B0000', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosIUElHierro,
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
    animation: { duration: 1500, easing: 'easeOutBounce' },
    plugins: { 
      legend: { position: 'top', labels: { color: '#333' } }, 
      datalabels: { display: true } 
    },
    scales: {
      y: { 
        beginAtZero: true, 
        title: { display: true, text: 'Porcentaje (%)', color: '#333' }, 
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
      id: 'etiquetaPartidoIUElHierro',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIUElHierro.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIUElHierro[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Nueva Canarias El Hierro =================
const datosNCEIElHierro = [6.52, 5.19];
const etiquetasNCEIElHierro = ['2015', '2019'];
const partidosNCEIElHierro = ['NC', 'NC'];

const ctxNCEIElHierro = document.getElementById('ncElHierroChart').getContext('2d');

new Chart(ctxNCEIElHierro, {
  data: {
    labels: etiquetasNCEIElHierro,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosNCEIElHierro,
        backgroundColor: 'rgba(129,192,59,0.7)', // color NC El Hierro
        borderColor: '#81C03B',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#5B7A2C', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosNCEIElHierro,
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
    animation: { duration: 1500, easing: 'easeOutBounce' },
    plugins: { 
      legend: { position: 'top', labels: { color: '#333' } }, 
      datalabels: { display: true } 
    },
    scales: {
      y: { 
        beginAtZero: true, 
        title: { display: true, text: 'Porcentaje (%)', color: '#333' }, 
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
      id: 'etiquetaPartidoNCEIElHierro',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosNCEIElHierro.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#5B7A2C';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosNCEIElHierro[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Datos y colores de partidos de El Hierro =================
const etiquetasElHierro = [
  '1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023'
];

// Datos combinados por partido
const datosElHierro = {
  'PP': [29.9,null,null,null,null,null, 19.8, 25.28, 17.19, 18.64, 21.27],
  'PSOE': [28.5,null,null,null,null,null, 23.52, 33.87, 22.18, 32.33, 22.9],
  'AHÍ': [27.6,null,null,null,null,null,null, 35.67,null, 33.79, 27.56],
  'Asamblea Herreña': [null,null,null,null,null,null,null,null,null,null,18.18],
  'VOX': [null,null,null,null,null,null,null,null,null,null,1.59],
  'CS': [null,null,null,null,null,null,null,null,1.41,3.76,null],
  'Podemos': [null,null,null,null,null,null,null,null,6.7,null,2.63],
  'CC': [null,null,null,null,null,null,47.06,null,41.64,null,null],
  'IU': [null,null,null,null,null,null,null,2.01,2.13,4.74,null],
  'NC': [null,null,null,null,null,null,null,null,6.52,5.19,null],
  'CCN': [null,null,null,null,null,null,2.41,null,null,null,null]
};

// Colores de cada partido
const coloresElHierro = {
  'PP': '#0000FF',
  'PSOE': '#FF0000',
  'AHÍ': '#018001',
  'Asamblea Herreña': '#BCCE44',
  'VOX': '#008000',
  'CS': '#FF8C00',
  'Podemos': '#800080',
  'CC': '#01ADD7',
  'IU': '#B22222',
  'NC': '#81C03B',
  'CCN': '#B9BD3F'
};

// Crear datasets para Chart.js
const datasetsElHierro = Object.keys(datosElHierro).map(partido => ({
  type: 'line',
  label: partido,
  data: datosElHierro[partido],
  borderColor: coloresElHierro[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresElHierro[partido],
  datalabels: {
    display: true,
    color: coloresElHierro[partido],
    font: { weight: 'bold', size: 12 },
    formatter: v => v != null ? v.toFixed(2) + '%' : ''
  }
}));

// Crear el gráfico combinado
const ctxElHierro = document.getElementById('elHierroChart').getContext('2d');

new Chart(ctxElHierro, {
  data: {
    labels: etiquetasElHierro,
    datasets: datasetsElHierro
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
        title: { display: true, text: 'Porcentaje (%)', color: '#333' },
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