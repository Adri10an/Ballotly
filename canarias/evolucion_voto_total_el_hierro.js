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
const datosPPElHierro = [1022, 1251, 1533, 1033, 1161, 1269]; // votos totales
const etiquetasPPElHierro = ['1983', '2007', '2011', '2015', '2019', '2023'];
const partidosPPElHierro = ['PP','PP','PP','PP','PP','PP'];

const ctxPPElHierro = document.getElementById('ppElHierroChart').getContext('2d');

new Chart(ctxPPElHierro, {
  data: {
    labels: etiquetasPPElHierro,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPPElHierro,
        backgroundColor: 'rgba(0,0,255,0.7)', // azul intenso PP
        borderColor: '#0000FF',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#00008B', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() // separador de miles
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
const datosPSOEElHierro = [974, 1486, 2054, 1333, 2014, 1366]; // votos totales
const etiquetasPSOEElHierro = ['1983', '2007', '2011', '2015', '2019', '2023'];
const partidosPSOEElHierro = ['PSOE','PSOE','PSOE','PSOE','PSOE','PSOE'];

const ctxPSOEElHierro = document.getElementById('psoeElHierroChart').getContext('2d');

new Chart(ctxPSOEElHierro, {
  data: {
    labels: etiquetasPSOEElHierro,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPSOEElHierro,
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
      id: 'etiquetaPartidoPSOEElHierro',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSOEElHierro.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF0000';
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

// ================= AHÍ El Hierro =================
const datosAHIElHierro = [944, 2163, 2105, 1644]; // votos totales
const etiquetasAHIElHierro = ['1983', '2011', '2019', '2023'];
const partidosAHIElHierro = ['AHÍ','AHÍ','AHÍ','AHÍ'];

const ctxAHIElHierro = document.getElementById('ahiElHierroChart').getContext('2d');

new Chart(ctxAHIElHierro, {
  data: {
    labels: etiquetasAHIElHierro,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosAHIElHierro,
        backgroundColor: 'rgba(1, 128, 1, 0.7)', // verde AHÍ
        borderColor: '#018001',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#018001', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() // separador de miles
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
      id: 'etiquetaPartidoAHIElHierro',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosAHIElHierro.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#018001';
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
const datosAsambleaHerreñaElHierro = [1085]; // votos totales
const etiquetasAsambleaHerreñaElHierro = ['2023'];
const partidosAsambleaHerreñaElHierro = ['Asamblea Herreña'];

const ctxAsambleaHerreñaElHierro = document.getElementById('asambleaHerreraElHierroChart').getContext('2d');

new Chart(ctxAsambleaHerreñaElHierro, {
  data: {
    labels: etiquetasAsambleaHerreñaElHierro,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosAsambleaHerreñaElHierro,
        backgroundColor: 'rgba(188, 206, 68, 0.7)', // color Asamblea Herreña
        borderColor: '#BCCE44',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#BCCE44', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() // separador de miles
        }
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
      id: 'etiquetaPartidoAsambleaHerreñaElHierro',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosAsambleaHerreñaElHierro.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#BCCE44';
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
const datosVOXElHierro = [95]; // votos totales
const etiquetasVOXElHierro = ['2023'];
const partidosVOXElHierro = ['VOX'];

const ctxVOXElHierro = document.getElementById('voxElHierroChart').getContext('2d');

new Chart(ctxVOXElHierro, {
  data: {
    labels: etiquetasVOXElHierro,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosVOXElHierro,
        backgroundColor: 'rgba(0,128,0,0.7)', // verde VOX
        borderColor: '#008000',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#006400', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() // separador de miles
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosVOXElHierro,
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
const datosCSElHierro = [85, 234]; // votos totales
const etiquetasCSElHierro = ['2015', '2019'];
const partidosCSElHierro = ['CS','CS'];

const ctxCSElHierro = document.getElementById('csElHierroChart').getContext('2d');

new Chart(ctxCSElHierro, {
  data: {
    labels: etiquetasCSElHierro,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCSElHierro,
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
const datosPodemosElHierro = [403, 157]; // votos totales
const etiquetasPodemosElHierro = ['2015','2023'];
const partidosPodemosElHierro = ['Podemos','Podemos'];

const ctxPodemosElHierro = document.getElementById('podemosElHierroChart').getContext('2d');

new Chart(ctxPodemosElHierro, {
  data: {
    labels: etiquetasPodemosElHierro,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPodemosElHierro,
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

// ================= IU/Podemos El Hierro =================
const datosIUElHierro = [122, 128, 295]; // votos totales
const etiquetasIUElHierro = ['2011','2015','2019'];
const partidosIUElHierro = ['IU','IU','IU'];

const ctxIUElHierro = document.getElementById('iuElHierroChart').getContext('2d');

new Chart(ctxIUElHierro, {
  data: {
    labels: etiquetasIUElHierro,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosIUElHierro,
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

// ================= NCA / Nueva Canarias El Hierro =================
const datosNCAElHierro = [392, 323]; // votos totales
const etiquetasNCAElHierro = ['2015','2019'];
const partidosNCAElHierro = ['NCA','NCA'];

const ctxNCAElHierro = document.getElementById('ncaElHierroChart').getContext('2d');

new Chart(ctxNCAElHierro, {
  data: {
    labels: etiquetasNCAElHierro,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosNCAElHierro,
        backgroundColor: 'rgba(129,192,59,0.7)', // verde NCA
        borderColor: '#81C03B',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#4B8A00', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosNCAElHierro,
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
      id: 'etiquetaPartidoNCAElHierro',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosNCAElHierro.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B8A00';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosNCAElHierro[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CC / Coalición Canaria El Hierro =================
const datosCCElHierro = [2973, 2503]; // votos totales
const etiquetasCCElHierro = ['2007','2015'];
const partidosCCElHierro = ['CC','CC'];

const ctxCCElHierro = document.getElementById('ccElHierroChart').getContext('2d');

new Chart(ctxCCElHierro, {
  data: {
    labels: etiquetasCCElHierro,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCCElHierro,
        backgroundColor: 'rgba(1,173,215,0.7)', // azul CC
        borderColor: '#01ADD7',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#017A9F', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
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
      id: 'etiquetaPartidoCCElHierro',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCCElHierro.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#017A9F';
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

const datosCCNElHierro = [152];
const etiquetasCCNElHierro = ['2007'];
const partidosCCNElHierro = ['CCN'];

const ctxCCNElHierro = document.getElementById('ccnElHierroChart').getContext('2d');

new Chart(ctxCCNElHierro, {
  data: {
    labels: etiquetasCCNElHierro,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCCNElHierro,
        backgroundColor: 'rgba(185,189,63,0.7)', // color CCN
        borderColor: '#B9BD3F',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#B9BD3F', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
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
      id: 'etiquetaPartidoCCNElHierro',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCCNElHierro.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#B9BD3F';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCCNElHierro[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// Datos El Hierro por partido
const etiquetasElHierro = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023'];

const datosElHierro = {
  'PP':           [1022,null,null,null,null,null, 1251, 1533, 1033, 1161, 1269],
  'PSOE':         [974,null,null,null,null,null, 1486, 2054, 1333, 2014, 1366],
  'AHI':          [944, null,null,null,null,null,null, 2163,null, 2105, 1644],
  'Asamblea Herreña':[null,null,null,null,null,null,null,null,null,null,1085],
  'VOX':          [null,null,null,null,null,null,null,null,null,null,95],
  'CS':           [null,null,null,null,null,null,null,null,85,234,null],
  'Podemos/IU':   [null,null,null,null,null,null,null,null,403,null,157],
  'IU':           [null,null,null,null,null,null,null,122,128,295,null],
  'NCA':          [null,null,null,null,null,null,null,null,392,323,null],
  'CC':           [null,null,null,null,null,null,2973,null,2503,null,null],
  'CCN': [null,null,null,null,null,null,152,null,null,null,null]

};

const coloresPartidosElHierro = {
  'PP': '#0000FF',
  'PSOE': '#FF0000',
  'AHI': '#018001',
  'Asamblea Herreña': '#BCCE44',
  'VOX': '#008000',
  'CS': '#FF8C00',
  'Podemos/IU': '#800080',
  'IU': '#B22222',
  'NCA': '#81C03B',
  'CC': '#01ADD7',
  'CCN': '#B9BD3F'
};

const datasetsElHierro = Object.keys(datosElHierro).map(partido => ({
  type: 'line',
  label: partido,
  data: datosElHierro[partido],
  borderColor: coloresPartidosElHierro[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresPartidosElHierro[partido],
  datalabels: { 
    display: true,
    color: coloresPartidosElHierro[partido],
    font: { weight: 'bold', size: 12 },
    formatter: v => v != null ? v.toLocaleString() : ''
  }
}));

const ctxElHierro = document.getElementById('votosTotalesElHierroChart').getContext('2d');

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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [ChartDataLabels]
});