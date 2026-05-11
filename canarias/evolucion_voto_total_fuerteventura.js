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
// ================= Coalición Canaria Fuerteventura =================
const datosCCFuerteventura = [10135, 11380, 9886, 9074, 8957];
const etiquetasCCFuerteventura = ['2007', '2011', '2015', '2019', '2023'];
const partidosCCFuerteventura = ['CC', 'CC', 'CC', 'CC', 'CC'];

const ctxCCFuerteventura = document.getElementById('ccFuerteventuraChart').getContext('2d');

new Chart(ctxCCFuerteventura, {
  data: {
    labels: etiquetasCCFuerteventura,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCCFuerteventura,
        backgroundColor: 'rgba(1, 173, 215, 0.7)', // color CC
        borderColor: '#01ADD7',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#017A9E', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() // separador de miles
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCCFuerteventura,
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
      id: 'etiquetaPartidoCCFuerteventura',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCCFuerteventura.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#017A9E';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCCFuerteventura[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PSOE Fuerteventura =================
const datosPSOEFuerteventura = [1707, 10814, 5842, 5979, 9349, 7567];
const etiquetasPSOEFuerteventura = ['1983', '2007', '2011', '2015', '2019', '2023'];
const partidosPSOEFuerteventura = ['PSOE', 'PSOE', 'PSOE', 'PSOE', 'PSOE', 'PSOE'];

const ctxPSOEFuerteventura = document.getElementById('psoeFuerteventuraChart').getContext('2d');

new Chart(ctxPSOEFuerteventura, {
  data: {
    labels: etiquetasPSOEFuerteventura,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPSOEFuerteventura,
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
        data: datosPSOEFuerteventura,
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
      id: 'etiquetaPartidoPSOEFuerteventura',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSOEFuerteventura.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSOEFuerteventura[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PP Fuerteventura =================
const datosPPFuerteventura = [2265, 8004, 6885, 4715, 4991, 6764];
const etiquetasPPFuerteventura = ['1983', '2007', '2011', '2015', '2019', '2023'];
const partidosPPFuerteventura = ['PP', 'PP', 'PP', 'PP', 'PP', 'PP'];

const ctxPPFuerteventura = document.getElementById('ppFuerteventuraChart').getContext('2d');

new Chart(ctxPPFuerteventura, {
  data: {
    labels: etiquetasPPFuerteventura,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPPFuerteventura,
        backgroundColor: 'rgba(0,0,255,0.7)', // azul PP
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
        data: datosPPFuerteventura,
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
      id: 'etiquetaPartidoPPFuerteventura',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPFuerteventura.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPFuerteventura[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= NC Fuerteventura =================
const datosNCFuerteventura = [673, 2915, 2348, 4045, 3881];
const etiquetasNCFuerteventura = ['2007', '2011', '2015', '2019', '2023'];
const partidosNCFuerteventura = ['NC','NC','NC','NC','NC'];

const ctxNCFuerteventura = document.getElementById('ncFuerteventuraChart').getContext('2d');

new Chart(ctxNCFuerteventura, {
  data: {
    labels: etiquetasNCFuerteventura,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosNCFuerteventura,
        backgroundColor: 'rgba(129,192,59,0.7)', // verde NC
        borderColor: '#81C03B',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#4B8B00', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() // separador de miles
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosNCFuerteventura,
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
      id: 'etiquetaPartidoNCFuerteventura',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosNCFuerteventura.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B8B00';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosNCFuerteventura[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= AMF Fuerteventura =================
const datosAMFFuerteventura = [1429, 2574];
const etiquetasAMFFuerteventura = ['2015', '2023'];
const partidosAMFFuerteventura = ['AMF','AMF'];

const ctxAMFFuerteventura = document.getElementById('amfFuerteventuraChart').getContext('2d');

new Chart(ctxAMFFuerteventura, {
  data: {
    labels: etiquetasAMFFuerteventura,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosAMFFuerteventura,
        backgroundColor: 'rgba(20,30,108,0.7)', // azul oscuro AMF
        borderColor: '#141E6C',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#141E6C', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() // separador de miles
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosAMFFuerteventura,
        borderColor: '#141E6C',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#141E6C'
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
      id: 'etiquetaPartidoAMFFuerteventura',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosAMFFuerteventura.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#141E6C';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosAMFFuerteventura[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= VOX Fuerteventura =================
const datosVOXFuerteventura = [1183, 2108];
const etiquetasVOXFuerteventura = ['2019', '2023'];
const partidosVOXFuerteventura = ['VOX','VOX'];

const ctxVOXFuerteventura = document.getElementById('voxFuerteventuraChart').getContext('2d');

new Chart(ctxVOXFuerteventura, {
  data: {
    labels: etiquetasVOXFuerteventura,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosVOXFuerteventura,
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
        data: datosVOXFuerteventura,
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
      id: 'etiquetaPartidoVOXFuerteventura',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXFuerteventura.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXFuerteventura[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= DVC Fuerteventura =================
const datosDVCFuerteventura = [1510];
const etiquetasDVCFuerteventura = ['2023'];
const partidosDVCFuerteventura = ['DVC'];

const ctxDVCFuerteventura = document.getElementById('dvcFuerteventuraChart').getContext('2d');

new Chart(ctxDVCFuerteventura, {
  data: {
    labels: etiquetasDVCFuerteventura,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosDVCFuerteventura,
        backgroundColor: 'rgba(86,152,113,0.7)', // color DVC
        borderColor: '#569871',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#38644D', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() // separador de miles
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosDVCFuerteventura,
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
      id: 'etiquetaPartidoDVCFuerteventura',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosDVCFuerteventura.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#38644D';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosDVCFuerteventura[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Podemos Fuerteventura =================
const datosPodemosFuerteventura = [4233, 2524, 759];
const etiquetasPodemosFuerteventura = ['2015', '2019', '2023'];
const partidosPodemosFuerteventura = ['Podemos','Podemos','Podemos'];

const ctxPodemosFuerteventura = document.getElementById('podemosFuerteventuraChart').getContext('2d');

new Chart(ctxPodemosFuerteventura, {
  data: {
    labels: etiquetasPodemosFuerteventura,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPodemosFuerteventura,
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
        data: datosPodemosFuerteventura,
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
      id: 'etiquetaPartidoPodemosFuerteventura',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosFuerteventura.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosFuerteventura[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CS Fuerteventura =================
const datosCSFuerteventura = [1423, 2068];
const etiquetasCSFuerteventura = ['2015', '2019'];
const partidosCSFuerteventura = ['CS','CS'];

const ctxCSFuerteventura = document.getElementById('csFuerteventuraChart').getContext('2d');

new Chart(ctxCSFuerteventura, {
  data: {
    labels: etiquetasCSFuerteventura,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCSFuerteventura,
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
        data: datosCSFuerteventura,
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
      id: 'etiquetaPartidoCSFuerteventura',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSFuerteventura.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSFuerteventura[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Asamblea Majorera Fuerteventura =================
const datosAsambleaMajoreraFuerteventura = [5551]; // Aquí van los datos de Fuerteventura
const etiquetasAsambleaMajoreraFuerteventura = ['1983'];
const partidosAsambleaMajoreraFuerteventura = ['Asamblea Majorera'];

const ctxAsambleaMajoreraFuerteventura = document.getElementById('amFuerteventuraChart').getContext('2d');

new Chart(ctxAsambleaMajoreraFuerteventura, {
  data: {
    labels: etiquetasAsambleaMajoreraFuerteventura,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosAsambleaMajoreraFuerteventura,
        backgroundColor: 'rgba(47,36,132,0.7)', // color Asamblea Majorera
        borderColor: '#2F2484',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#2F2484', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosAsambleaMajoreraFuerteventura,
        borderColor: '#2F2484',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#2F2484'
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
      id: 'etiquetaPartidoAsambleaMajoreraFuerteventura',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosAsambleaMajoreraFuerteventura.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#2F2484';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosAsambleaMajoreraFuerteventura[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PP Majorero Fuerteventura =================
const datosPPMajoreroFuerteventura = [4334]; // votos totales
const etiquetasPPMajoreroFuerteventura = ['2011'];
const partidosPPMajoreroFuerteventura = ['PP Majorero'];

const ctxPPMajoreroFuerteventura = document.getElementById('ppMajoreroFuerteventuraChart').getContext('2d');

new Chart(ctxPPMajoreroFuerteventura, {
  data: {
    labels: etiquetasPPMajoreroFuerteventura,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPPMajoreroFuerteventura,
        backgroundColor: 'rgba(179,145,106,0.7)', // color PP Majorero
        borderColor: '#B3916A',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#B3916A', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPPMajoreroFuerteventura,
        borderColor: '#B3916A',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#B3916A'
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
      id: 'etiquetaPartidoPPMajoreroFuerteventura',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPMajoreroFuerteventura.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#B3916A';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPMajoreroFuerteventura[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// Datos CCN Fuerteventura (votos totales)
const datosCCNFuerteventuraTotales = [1769];
const etiquetasCCNFuerteventuraTotales = ['2007'];
const partidosCCNFuerteventuraTotales = ['CCN'];

// Color CCN
const colorCCNFuerteventura = '#B9BD3F';

// Chart
const ctxCCNFuerteventuraTotales = document.getElementById('ccnFuerteventuraTotalesChart').getContext('2d');

new Chart(ctxCCNFuerteventuraTotales, {
  data: {
    labels: etiquetasCCNFuerteventuraTotales,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCCNFuerteventuraTotales,
        backgroundColor: 'rgba(185,189,63,0.7)',
        borderColor: colorCCNFuerteventura,
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: colorCCNFuerteventura,
          font: { weight: 'bold' },
          formatter: v => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCCNFuerteventuraTotales,
        borderColor: colorCCNFuerteventura,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorCCNFuerteventura
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
  plugins: [ChartDataLabels]
});

// ================= CDS Fuerteventura =================
const datosCDSFuerteventura = [2815]; // votos totales
const etiquetasCDSFuerteventura = ['1983'];
const partidosCDSFuerteventura = ['CDS'];

const ctxCDSFuerteventura = document.getElementById('cdsFuerteventuraChart').getContext('2d');

new Chart(ctxCDSFuerteventura, {
  data: {
    labels: etiquetasCDSFuerteventura,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCDSFuerteventura,
        backgroundColor: 'rgba(0,191,255,0.7)', // color CDS
        borderColor: '#00BFFF',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#00BFFF', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCDSFuerteventura,
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
      id: 'etiquetaPartidoCDSFuerteventura',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSFuerteventura.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00BFFF';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSFuerteventura[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= IU/Podemos Fuerteventura =================
const datosIUFuerteventura = [161, 480, 372]; // votos totales
const etiquetasIUFuerteventura = ['2007','2015','2019'];
const partidosIUFuerteventura = ['IU','IU','IU'];

const ctxIUFuerteventura = document.getElementById('iuFuerteventuraChart').getContext('2d');

new Chart(ctxIUFuerteventura, {
  data: {
    labels: etiquetasIUFuerteventura,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosIUFuerteventura,
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
        data: datosIUFuerteventura,
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
      id: 'etiquetaPartidoIUFuerteventura',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIUFuerteventura.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIUFuerteventura[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UPyD Fuerteventura =================
const datosUPyDFuerteventura = [362, 265]; // votos totales
const etiquetasUPyDFuerteventura = ['2011','2015'];
const partidosUPyDFuerteventura = ['UPyD','UPyD'];

const ctxUPyDFuerteventura = document.getElementById('upydFuerteventuraChart').getContext('2d');

new Chart(ctxUPyDFuerteventura, {
  data: {
    labels: etiquetasUPyDFuerteventura,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUPyDFuerteventura,
        backgroundColor: 'rgba(255,96,218,0.7)', // color UPyD
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
        data: datosUPyDFuerteventura,
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
      id: 'etiquetaPartidoUPyDFuerteventura',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDFuerteventura.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF60DA';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDFuerteventura[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// Datos Fuerteventura por partido
const etiquetasFuerteventura = ['1983','2007','2011','2015','2019','2023'];

const datosFuerteventura = {
  'CC': [null, 10135, 11380, 9886, 9074, 8957],
  'PSOE': [1707, 10814, 5842, 5979, 9349, 7567],
  'PP': [2265, 8004, 6885, 4715, 4991, 6764],
  'NC': [null, 673, 2915, 2348, 4045, 3881],
  'AMF': [null, null, null, 1429, null, 2574],
  'VOX': [null, null, null, null, 1183, 2108],
  'DVC': [null, null, null, null, null, 1510],
  'Podemos/IU': [null, null, null, 4233, 2524, 759],
  'CS': [null, null, null, 1423, 2068, null],
  'Asamblea Majorera': [5551, null, null, null, null, null],
  'PP Majorero': [null, null, 4334, null, null, null],
  'CDS': [2815, null, null, null, null, null],
  'IU': [null, 161, null, 480, 372, null],
  'UPyD': [null, null,362, 265,null, null],
  'CCN': [null,1769,null,null,null,null]
};

const coloresPartidosFuerteventura = {
  'CC': '#01ADD7',
  'PSOE': '#FF0000',
  'PP': '#0000FF',
  'NC': '#81C03B',
  'AMF': '#141E6C',
  'VOX': '#008000',
  'DVC': '#569871',
  'Podemos/IU': '#800080',
  'CS': '#FF8C00',
  'Asamblea Majorera': '#2F2484',
  'PP Majorero': '#B3916A',
  'CDS': '#00BFFF',
  'IU': '#B22222',
  'UPyD': '#FF60DA',
  'CCN': '#B9BD3F'
};

const datasetsFuerteventura = Object.keys(datosFuerteventura).map(partido => ({
  type: 'line',
  label: partido,
  data: datosFuerteventura[partido],
  borderColor: coloresPartidosFuerteventura[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresPartidosFuerteventura[partido],
  datalabels: { 
    display: true,
    color: coloresPartidosFuerteventura[partido],
    font: { weight: 'bold', size: 12 },
    formatter: v => v != null ? v.toLocaleString() : ''
  }
}));

const ctxFuerteventura = document.getElementById('votosTotalesFuerteventuraChart').getContext('2d');

new Chart(ctxFuerteventura, {
  data: {
    labels: etiquetasFuerteventura,
    datasets: datasetsFuerteventura
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