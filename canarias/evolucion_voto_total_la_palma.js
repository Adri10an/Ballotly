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
// ================= CC La Palma =================
const datosCCLaPalma = [23002, 17700, 12407, 13117, 17862];
const etiquetasCCLaPalma = ['2007', '2011', '2015', '2019', '2023'];
const partidosCCLaPalma = ['CC','CC','CC','CC','CC'];

const ctxCCLaPalma = document.getElementById('ccLaPalmaChart').getContext('2d');

new Chart(ctxCCLaPalma, {
  data: {
    labels: etiquetasCCLaPalma,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCCLaPalma,
        backgroundColor: 'rgba(1,173,215,0.7)', // cian CC
        borderColor: '#01ADD7',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#01ADD7', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() // separador de miles
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCCLaPalma,
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
      id: 'etiquetaPartidoCCLaPalma',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCCLaPalma.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#01ADD7';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCCLaPalma[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PSOE La Palma =================
const datosPSOELaPalma = [11193, 14046, 11133, 10134, 11678,10187];
const etiquetasPSOELaPalma = ['1983', '2007', '2011', '2015', '2019','2023'];
const partidosPSOELaPalma = ['PSOE','PSOE','PSOE','PSOE','PSOE','PSOE'];

const ctxPSOELaPalma = document.getElementById('psoeLaPalmaChart').getContext('2d');

new Chart(ctxPSOELaPalma, {
  data: {
    labels: etiquetasPSOELaPalma,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPSOELaPalma,
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
        data: datosPSOELaPalma,
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
      id: 'etiquetaPartidoPSOELaPalma',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSOELaPalma.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSOELaPalma[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PP La Palma =================
const datosPPLaPalma = [13069, 8479, 12577, 10262, 10711, 8595];
const etiquetasPPLaPalma = ['1983', '2007', '2011', '2015', '2019', '2023'];
const partidosPPLaPalma = ['PP','PP','PP','PP','PP','PP'];

const ctxPPLaPalma = document.getElementById('ppLaPalmaChart').getContext('2d');

new Chart(ctxPPLaPalma, {
  data: {
    labels: etiquetasPPLaPalma,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPPLaPalma,
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
        data: datosPPLaPalma,
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
      id: 'etiquetaPartidoPPLaPalma',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPLaPalma.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPLaPalma[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= NC La Palma =================
const datosNCLaPalma = [910, 795, 1155, 1587, 1309];
const etiquetasNCLaPalma = ['2007', '2011', '2015', '2019', '2023'];
const partidosNCLaPalma = ['NC','NC','NC','NC','NC'];

const ctxNCLaPalma = document.getElementById('ncLaPalmaChart').getContext('2d');

new Chart(ctxNCLaPalma, {
  data: {
    labels: etiquetasNCLaPalma,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosNCLaPalma,
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
        data: datosNCLaPalma,
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
      id: 'etiquetaPartidoNCLaPalma',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosNCLaPalma.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B8B00';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosNCLaPalma[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= VOX La Palma =================
const datosVOXLaPalma = [760, 1291];
const etiquetasVOXLaPalma = ['2019', '2023'];
const partidosVOXLaPalma = ['VOX','VOX'];

const ctxVOXLaPalma = document.getElementById('voxLaPalmaChart').getContext('2d');

new Chart(ctxVOXLaPalma, {
  data: {
    labels: etiquetasVOXLaPalma,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosVOXLaPalma,
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
        data: datosVOXLaPalma,
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
      id: 'etiquetaPartidoVOXLaPalma',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXLaPalma.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXLaPalma[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= DVC La Palma =================
const datosDVCLaPalma = [1001];
const etiquetasDVCLaPalma = ['2023'];
const partidosDVCLaPalma = ['DVC'];

const ctxDVCLaPalma = document.getElementById('dvcLaPalmaChart').getContext('2d');

new Chart(ctxDVCLaPalma, {
  data: {
    labels: etiquetasDVCLaPalma,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosDVCLaPalma,
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
        data: datosDVCLaPalma,
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
      id: 'etiquetaPartidoDVCLaPalma',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosDVCLaPalma.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#38644D';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosDVCLaPalma[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Podemos La Palma =================
const datosPodemosLaPalma = [2703, 1799, 848];
const etiquetasPodemosLaPalma = ['2015', '2019', '2023'];
const partidosPodemosLaPalma = ['Podemos','Podemos','Podemos'];

const ctxPodemosLaPalma = document.getElementById('podemosLaPalmaChart').getContext('2d');

new Chart(ctxPodemosLaPalma, {
  data: {
    labels: etiquetasPodemosLaPalma,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPodemosLaPalma,
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
        data: datosPodemosLaPalma,
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
      id: 'etiquetaPartidoPodemosLaPalma',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosLaPalma.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosLaPalma[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CS La Palma =================
const datosCSLaPalma = [1820, 1370];
const etiquetasCSLaPalma = ['2015', '2019'];
const partidosCSLaPalma = ['CS','CS'];

const ctxCSLaPalma = document.getElementById('csLaPalmaChart').getContext('2d');

new Chart(ctxCSLaPalma, {
  data: {
    labels: etiquetasCSLaPalma,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCSLaPalma,
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
        data: datosCSLaPalma,
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
      id: 'etiquetaPartidoCSLaPalma',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSLaPalma.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSLaPalma[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CCN La Palma =================
const datosCCNLaPalma = [2017];
const etiquetasCCNLaPalma = ['2007'];
const partidosCCNLaPalma = ['CCN'];

// Color CCN
const colorCCNLaPalma = '#B9BD3F';

// Chart
const ctxCCNLaPalma = document.getElementById('ccnLaPalmaChart').getContext('2d');

new Chart(ctxCCNLaPalma, {
  data: {
    labels: etiquetasCCNLaPalma,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCCNLaPalma,
        backgroundColor: 'rgba(185,189,63,0.7)',
        borderColor: colorCCNLaPalma,
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: colorCCNLaPalma,
          font: { weight: 'bold' },
          formatter: v => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCCNLaPalma,
        borderColor: colorCCNLaPalma,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorCCNLaPalma
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
      id: 'etiquetaPartidoCCNLaPalma',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCCNLaPalma.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = colorCCNLaPalma;
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCCNLaPalma[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CDS La Palma =================
const datosCDSLaPalma = [5540];
const etiquetasCDSLaPalma = ['1983'];
const partidosCDSLaPalma = ['CDS'];

// Color CDS
const colorCDSLaPalma = '#00BFFF';

// Chart
const ctxCDSLaPalma = document.getElementById('cdsLaPalmaChart').getContext('2d');

new Chart(ctxCDSLaPalma, {
  data: {
    labels: etiquetasCDSLaPalma,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCDSLaPalma,
        backgroundColor: 'rgba(0,191,255,0.7)',
        borderColor: colorCDSLaPalma,
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: colorCDSLaPalma,
          font: { weight: 'bold' },
          formatter: v => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCDSLaPalma,
        borderColor: colorCDSLaPalma,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorCDSLaPalma
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
      id: 'etiquetaPartidoCDSLaPalma',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSLaPalma.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = colorCDSLaPalma;
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSLaPalma[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= IU/Podemos La Palma =================
const datosIULaPalma = [269, 631, 1068, 912];
const etiquetasIULaPalma = ['2007','2011','2015','2019'];
const partidosIULaPalma = ['IU','IU','IU','IU'];

// Color IU
const colorIULaPalma = '#B22222';

const ctxIULaPalma = document.getElementById('iuLaPalmaChart').getContext('2d');

new Chart(ctxIULaPalma, {
  data: {
    labels: etiquetasIULaPalma,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosIULaPalma,
        backgroundColor: 'rgba(178,34,34,0.7)',
        borderColor: colorIULaPalma,
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
        data: datosIULaPalma,
        borderColor: colorIULaPalma,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorIULaPalma
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
      id: 'etiquetaPartidoIULaPalma',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIULaPalma.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIULaPalma[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UPyD La Palma =================
const datosUPyDLaPalma = [318, 451];
const etiquetasUPyDLaPalma = ['2011','2015'];
const partidosUPyDLaPalma = ['UPyD','UPyD'];

// Color UPyD
const colorUPyDLaPalma = '#FF60DA';

const ctxUPyDLaPalma = document.getElementById('upydLaPalmaChart').getContext('2d');

new Chart(ctxUPyDLaPalma, {
  data: {
    labels: etiquetasUPyDLaPalma,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUPyDLaPalma,
        backgroundColor: 'rgba(255,96,218,0.7)',
        borderColor: colorUPyDLaPalma,
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: colorUPyDLaPalma, 
          font: { weight: 'bold' }, 
          formatter: v => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosUPyDLaPalma,
        borderColor: colorUPyDLaPalma,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorUPyDLaPalma
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
      id: 'etiquetaPartidoUPyDLaPalma',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDLaPalma.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = colorUPyDLaPalma;
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDLaPalma[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// Datos La Palma por partido
const etiquetasLaPalma = ['1983','2007','2011','2015','2019','2023'];

const datosLaPalma = {
  'PSOE': [11193, 14046, 11133, 10134, 11678, 10187],
  'PP': [13069, 8479, 12577, 10262, 10711, 8595],
  'NC': [null, 910, 795, 1155, 1587, 1309],
  'CC': [null, 23002, 17700, 12407, 13117, 17862],
  'VOX': [null,null, null, null, 760, 1291],
  'DVC': [null, null, null, null, null, 1001],
  'Podemos/IU': [null, null, null, 2703, 1799, 848],
  'CS': [null, null, null, 1820, 1370, null],
  'CCN': [null, 2017, null, null, null, null],
  'CDS': [5540, null, null, null, null, null],
  'IU': [null, 269, 631, 1068, 912, null],
  'UPyD': [null, null, 318, 451, null, null]
};

const coloresPartidosLaPalma = {
  'PSOE': '#FF0000',
  'PP': '#0000FF',
  'NC': '#81C03B',
  'CC': '#01ADD7',
  'VOX': '#008000',
  'DVC': '#569871',
  'Podemos/IU': '#800080',
  'CS': '#FF8C00',
  'CCN': '#B9BD3F',
  'CDS': '#00BFFF',
  'IU': '#B22222',
  'UPyD': '#FF60DA'
};

const datasetsLaPalma = Object.keys(datosLaPalma).map(partido => ({
  type: 'line',
  label: partido,
  data: datosLaPalma[partido],
  borderColor: coloresPartidosLaPalma[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresPartidosLaPalma[partido],
  datalabels: {
    display: true,
    color: coloresPartidosLaPalma[partido],
    font: { weight: 'bold', size: 12 },
    formatter: v => v != null ? v.toLocaleString() : ''
  }
}));

const ctxLaPalma = document.getElementById('votosTotalesLaPalmaChart').getContext('2d');

new Chart(ctxLaPalma, {
  data: {
    labels: etiquetasLaPalma,
    datasets: datasetsLaPalma
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