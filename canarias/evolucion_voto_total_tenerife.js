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
// ================= CC Tenerife =================
const datosCCTenerife = [155385, 142401, 105097, 111573, 118298];
const etiquetasCCTenerife = ['2007', '2011', '2015', '2019', '2023'];
const partidosCCTenerife = ['CC','CC','CC','CC','CC'];

const ctxCCTenerife = document.getElementById('ccTenerifeChart').getContext('2d');

new Chart(ctxCCTenerife, {
  data: {
    labels: etiquetasCCTenerife,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCCTenerife,
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
        data: datosCCTenerife,
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
      id: 'etiquetaPartidoCCTenerife',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCCTenerife.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#01ADD7';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCCTenerife[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PSOE Tenerife =================
const datosPSOETenerife = [106492, 126422, 78645, 83859, 115507, 103643];
const etiquetasPSOETenerife = ['1983', '2007', '2011', '2015', '2019', '2023'];
const partidosPSOETenerife = ['PSOE','PSOE','PSOE','PSOE','PSOE','PSOE'];

const ctxPSOETenerife = document.getElementById('psoeTenerifeChart').getContext('2d');

new Chart(ctxPSOETenerife, {
  data: {
    labels: etiquetasPSOETenerife,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPSOETenerife,
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
        data: datosPSOETenerife,
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
      id: 'etiquetaPartidoPSOETenerife',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSOETenerife.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSOETenerife[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PP Tenerife =================
const datosPPTenerife = [69011, 64907, 99673, 66901, 51757, 68985];
const etiquetasPPTenerife = ['1983', '2007', '2011', '2015', '2019', '2023'];
const partidosPPTenerife = ['PP','PP','PP','PP','PP','PP'];

const ctxPPTenerife = document.getElementById('ppTenerifeChart').getContext('2d');

new Chart(ctxPPTenerife, {
  data: {
    labels: etiquetasPPTenerife,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPPTenerife,
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
        data: datosPPTenerife,
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
      id: 'etiquetaPartidoPPTenerife',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPTenerife.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPTenerife[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= VOX Tenerife =================
const datosVOXTenerife = [852, 8954, 26620];
const etiquetasVOXTenerife = ['2015', '2019', '2023'];
const partidosVOXTenerife = ['VOX','VOX','VOX'];

const ctxVOXTenerife = document.getElementById('voxTenerifeChart').getContext('2d');

new Chart(ctxVOXTenerife, {
  data: {
    labels: etiquetasVOXTenerife,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosVOXTenerife,
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
        data: datosVOXTenerife,
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
      id: 'etiquetaPartidoVOXTenerife',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXTenerife.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXTenerife[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= DVC Tenerife =================
const datosDVCTenerife = [16761];
const etiquetasDVCTenerife = ['2023'];
const partidosDVCTenerife = ['DVC'];

const ctxDVCTenerife = document.getElementById('dvcTenerifeChart').getContext('2d');

new Chart(ctxDVCTenerife, {
  data: {
    labels: etiquetasDVCTenerife,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosDVCTenerife,
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
        data: datosDVCTenerife,
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
      id: 'etiquetaPartidoDVCTenerife',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosDVCTenerife.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#38644D';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosDVCTenerife[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Podemos Tenerife =================
const datosPodemosTenerife = [51075, 36638, 15859];
const etiquetasPodemosTenerife = ['2015', '2019', '2023'];
const partidosPodemosTenerife = ['Podemos','Podemos','Podemos'];

const ctxPodemosTenerife = document.getElementById('podemosTenerifeChart').getContext('2d');

new Chart(ctxPodemosTenerife, {
  data: {
    labels: etiquetasPodemosTenerife,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPodemosTenerife,
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
        data: datosPodemosTenerife,
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
      id: 'etiquetaPartidoPodemosTenerife',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosTenerife.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosTenerife[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= NC Tenerife =================
const datosNCTenerife = [18205, 13189, 7853, 9513];
const etiquetasNCTenerife = ['2011', '2015', '2019', '2023'];
const partidosNCTenerife = ['NC','NC','NC','NC'];

const ctxNCTenerife = document.getElementById('ncTenerifeChart').getContext('2d');

new Chart(ctxNCTenerife, {
  data: {
    labels: etiquetasNCTenerife,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosNCTenerife,
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
        data: datosNCTenerife,
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
      id: 'etiquetaPartidoNCTenerife',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosNCTenerife.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B8B00';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosNCTenerife[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CS Tenerife =================
const datosCSTenerife = [23245, 26955, 2051];
const etiquetasCSTenerife = ['2015', '2019', '2023'];
const partidosCSTenerife = ['CS','CS','CS'];

const ctxCSTenerife = document.getElementById('csTenerifeChart').getContext('2d');

new Chart(ctxCSTenerife, {
  data: {
    labels: etiquetasCSTenerife,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCSTenerife,
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
        data: datosCSTenerife,
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
      id: 'etiquetaPartidoCSTenerife',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSTenerife.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSTenerife[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CCN Tenerife =================
const datosCCNTenerife = [19632, 3747];
const etiquetasCCNTenerife = ['2007', '2015'];
const partidosCCNTenerife = ['CCN','CCN'];

// Color CCN
const colorCCNTenerife = '#B9BD3F';

// Chart
const ctxCCNTenerife = document.getElementById('ccnTenerifeChart').getContext('2d');

new Chart(ctxCCNTenerife, {
  data: {
    labels: etiquetasCCNTenerife,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCCNTenerife,
        backgroundColor: 'rgba(185,189,63,0.7)',
        borderColor: colorCCNTenerife,
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: colorCCNTenerife,
          font: { weight: 'bold' },
          formatter: v => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCCNTenerife,
        borderColor: colorCCNTenerife,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorCCNTenerife
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
      id: 'etiquetaPartidoCCNTenerife',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCCNTenerife.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = colorCCNTenerife;
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCCNTenerife[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UPC Tenerife =================
const datosUPCTenerife = [22289];
const etiquetasUPCTenerife = ['1983'];
const partidosUPCTenerife = ['UPC'];

// Color UPC
const colorUPCTenerife = '#BA0033';

// Chart
const ctxUPCTenerife = document.getElementById('upcTenerifeChart').getContext('2d');

new Chart(ctxUPCTenerife, {
  data: {
    labels: etiquetasUPCTenerife,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUPCTenerife,
        backgroundColor: 'rgba(186,0,51,0.7)',
        borderColor: colorUPCTenerife,
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: colorUPCTenerife,
          font: { weight: 'bold' },
          formatter: v => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosUPCTenerife,
        borderColor: colorUPCTenerife,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorUPCTenerife
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
      id: 'etiquetaPartidoUPCTenerife',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPCTenerife.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = colorUPCTenerife;
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPCTenerife[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CDS Tenerife =================
const datosCDSTenerife = [16438];
const etiquetasCDSTenerife = ['1983'];
const partidosCDSTenerife = ['CDS'];

// Color CDS
const colorCDSTenerife = '#00BFFF';

// Chart
const ctxCDSTenerife = document.getElementById('cdsTenerifeChart').getContext('2d');

new Chart(ctxCDSTenerife, {
  data: {
    labels: etiquetasCDSTenerife,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCDSTenerife,
        backgroundColor: 'rgba(0,191,255,0.7)',
        borderColor: colorCDSTenerife,
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: colorCDSTenerife,
          font: { weight: 'bold' },
          formatter: v => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCDSTenerife,
        borderColor: colorCDSTenerife,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorCDSTenerife
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
      id: 'etiquetaPartidoCDSTenerife',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSTenerife.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = colorCDSTenerife;
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSTenerife[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= IU Tenerife =================
const datosIUTenerife = [3658, 9950, 4113];
const etiquetasIUTenerife = ['2007','2015','2019'];
const partidosIUTenerife = ['IU','IU','IU'];

// Color IU
const colorIUTenerife = '#B22222';

// Chart
const ctxIUTenerife = document.getElementById('iuTenerifeChart').getContext('2d');

new Chart(ctxIUTenerife, {
  data: {
    labels: etiquetasIUTenerife,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosIUTenerife,
        backgroundColor: 'rgba(178,34,34,0.7)',
        borderColor: colorIUTenerife,
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
        data: datosIUTenerife,
        borderColor: colorIUTenerife,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorIUTenerife
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
      id: 'etiquetaPartidoIUTenerife',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIUTenerife.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIUTenerife[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UPyD Tenerife =================
const datosUPyDTenerife = [3530, 3631];
const etiquetasUPyDTenerife = ['2011','2015'];
const partidosUPyDTenerife = ['UPyD','UPyD'];

// Color UPyD
const colorUPyDTenerife = '#FF60DA';

// Chart
const ctxUPyDTenerife = document.getElementById('upydTenerifeChart').getContext('2d');

new Chart(ctxUPyDTenerife, {
  data: {
    labels: etiquetasUPyDTenerife,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUPyDTenerife,
        backgroundColor: 'rgba(255,96,218,0.7)',
        borderColor: colorUPyDTenerife,
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: colorUPyDTenerife, 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosUPyDTenerife,
        borderColor: colorUPyDTenerife,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorUPyDTenerife
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
      id: 'etiquetaPartidoUPyDTenerife',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDTenerife.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = colorUPyDTenerife;
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDTenerife[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// Datos Tenerife por partido
const etiquetasTenerife = ['1983','2007','2011','2015','2019','2023'];

const datosTenerife = {
  'PSOE': [106492, 126422, 78645, 83859, 115507, 103643],
  'PP': [69011, 64907, 99673, 66901, 51757, 68985],
  'NC': [null, null, 18205, 9513, 7853, 9513], // ajustado según tus datos
  'CC': [null, 155385, 105097, 111573, 118298, null],
  'VOX': [null, null, null, 852, 8954, 26620],
  'DVC': [null, null, null, null, null, 16761],
  'Podemos/IU': [null, null, null, 51075, 36638, 15859],
  'CS': [null, null, null, 23245, 26955, 2051],
  'CCN': [null, 19632, null, 3747, null, null],
  'UPC': [22289, null, null, null, null, null],
  'CDS': [16438, null, null, null, null, null],
  'IU': [null, 3658, null, 9950, 4113, null],
  'UPyD': [null, null, 3530, 3631, null, null]
};

const coloresPartidosTenerife = {
  'PSOE': '#FF0000',
  'PP': '#0000FF',
  'NC': '#81C03B',
  'CC': '#01ADD7',
  'VOX': '#008000',
  'DVC': '#569871',
  'Podemos/IU': '#800080',
  'CS': '#FF8C00',
  'CCN': '#B9BD3F',
  'UPC': '#BA0033',
  'CDS': '#00BFFF',
  'IU': '#B22222',
  'UPyD': '#FF60DA'
};

const datasetsTenerife = Object.keys(datosTenerife).map(partido => ({
  type: 'line',
  label: partido,
  data: datosTenerife[partido],
  borderColor: coloresPartidosTenerife[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresPartidosTenerife[partido],
  datalabels: {
    display: true,
    color: coloresPartidosTenerife[partido],
    font: { weight: 'bold', size: 12 },
    formatter: v => v != null ? v.toLocaleString() : ''
  }
}));

const ctxTenerife = document.getElementById('votosTotalesTenerifeChart').getContext('2d');

new Chart(ctxTenerife, {
  data: {
    labels: etiquetasTenerife,
    datasets: datasetsTenerife
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