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
// ================= PP Ceuta =================
const datosPPCeuta = [31.16, 28.33, 63.02, 65.61, 65.16, 45.77, 31.12, 34.37];
const etiquetasPPCeuta = ['1995','1999','2003','2007','2011','2015','2019','2023'];
const partidosPPCeuta = ['PP','PP','PP','PP','PP','PP','PP','PP'];

const ctxPPCeuta = document.getElementById('ppCeutaChart').getContext('2d');

new Chart(ctxPPCeuta, {
  data: {
    labels: etiquetasPPCeuta,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPPCeuta,
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
        data: datosPPCeuta,
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
      y: { beginAtZero: true, title: { display: true, text: 'Porcentaje (%)', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoPPCeuta',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPCeuta.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPCeuta[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PSOE Ceuta =================
const datosPSOECeuta = [13.25, 7.53, 8.76, 8.71, 11.70, 14.04, 25.59, 20.96];
const etiquetasPSOECeuta = ['1995','1999','2003','2007','2011','2015','2019','2023'];
const partidosPSOECeuta = ['PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE'];

const ctxPSOECeuta = document.getElementById('psoeCeutaChart').getContext('2d');

new Chart(ctxPSOECeuta, {
  data: {
    labels: etiquetasPSOECeuta,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPSOECeuta,
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
        data: datosPSOECeuta,
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
      y: { beginAtZero: true, title: { display: true, text: 'Porcentaje (%)', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoPSOECeuta',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSOECeuta.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#B22222';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSOECeuta[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= VOX Ceuta =================
const datosVOXCeuta = [1.32, 22.37, 20.64];
const etiquetasVOXCeuta = ['2015','2019','2023'];
const partidosVOXCeuta = ['VOX','VOX','VOX'];

const ctxVOXCeuta = document.getElementById('voxCeutaChart').getContext('2d');

new Chart(ctxVOXCeuta, {
  data: {
    labels: etiquetasVOXCeuta,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosVOXCeuta,
        backgroundColor: 'rgba(0,128,0,0.7)', // verde VOX
        borderColor: '#008000',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#006400', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosVOXCeuta,
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
      datalabels: { display: true } 
    },
    scales: {
      y: { beginAtZero: true, title: { display: true, text: 'Porcentaje (%)', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoVOXCeuta',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXCeuta.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXCeuta[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CS Ceuta =================
const datosCSCeuta = [6.02, 4.54, 0.69];
const etiquetasCSCeuta = ['2015','2019','2023'];
const partidosCSCeuta = ['CS','CS','CS'];

const ctxCSCeuta = document.getElementById('csCeutaChart').getContext('2d');

new Chart(ctxCSCeuta, {
  data: {
    labels: etiquetasCSCeuta,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCSCeuta,
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
        data: datosCSCeuta,
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
      y: { beginAtZero: true, title: { display: true, text: 'Porcentaje (%)', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoCSCeuta',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSCeuta.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSCeuta[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Podemos Ceuta =================
const datosPodemosCeuta = [1.49, 0.54];
const etiquetasPodemosCeuta = ['2019','2023'];
const partidosPodemosCeuta = ['Podemos','Podemos'];

const ctxPodemosCeuta = document.getElementById('podemosCeutaChart').getContext('2d');

new Chart(ctxPodemosCeuta, {
  data: {
    labels: etiquetasPodemosCeuta,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPodemosCeuta,
        backgroundColor: 'rgba(128,0,128,0.7)', // morado Podemos
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
        data: datosPodemosCeuta,
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
      y: { beginAtZero: true, title: { display: true, text: 'Porcentaje (%)', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoPodemosCeuta',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosCeuta.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosCeuta[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= IU Ceuta =================
const datosIUCeuta = [1.79, 4.01, 0.97, 16.51, 1.56, 1.49, 0.54];
const etiquetasIUCeuta = ['1995','1999','2003','2007','2015','2019','2023'];
const partidosIUCeuta = ['IU','IU','IU','IU','IU','IU','IU'];

const ctxIUCeuta = document.getElementById('iuCeutaChart').getContext('2d');

new Chart(ctxIUCeuta, {
  data: {
    labels: etiquetasIUCeuta,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosIUCeuta,
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
        data: datosIUCeuta,
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
      y: { beginAtZero: true, title: { display: true, text: 'Porcentaje (%)', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoIUCeuta',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIUCeuta.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIUCeuta[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UPyD Ceuta =================
const datosUPyDCeuta = [2.66, 1.11];
const etiquetasUPyDCeuta = ['2011','2015'];
const partidosUPyDCeuta = ['UPyD','UPyD'];

const ctxUPyDCeuta = document.getElementById('upydCeutaChart').getContext('2d');

new Chart(ctxUPyDCeuta, {
  data: {
    labels: etiquetasUPyDCeuta,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosUPyDCeuta,
        backgroundColor: 'rgba(255,96,218,0.7)', // magenta UPyD
        borderColor: '#FF60DA',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#FF1493', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosUPyDCeuta,
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
      id: 'etiquetaPartidoUPyDCeuta',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDCeuta.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF1493';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDCeuta[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PFC Ceuta =================
const datosPFCCeuta = [20.30, 1.90];
const etiquetasPFCCeuta = ['1995','1999'];
const partidosPFCCeuta = ['PFC','PFC'];

const ctxPFCCeuta = document.getElementById('pfcCeutaChart').getContext('2d');

new Chart(ctxPFCCeuta, {
  data: {
    labels: etiquetasPFCCeuta,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPFCCeuta,
        backgroundColor: 'rgba(111,17,23,0.7)', // color PFC
        borderColor: '#6f1117',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#45090D', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPFCCeuta,
        borderColor: '#6f1117',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#6f1117'
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
      id: 'etiquetaPartidoPFCCeuta',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPFCCeuta.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#45090D';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPFCCeuta[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CEU Ceuta =================
const datosCEUCeuta = [14.66, 3.94];
const etiquetasCEUCeuta = ['1995','1999'];
const partidosCEUCeuta = ['CEU','CEU'];

const ctxCEUCeuta = document.getElementById('ceuCeutaChart').getContext('2d');

new Chart(ctxCEUCeuta, {
  data: {
    labels: etiquetasCEUCeuta,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCEUCeuta,
        backgroundColor: 'rgba(107,122,145,0.7)', // color CEU
        borderColor: '#6b7a91',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#454C55', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCEUCeuta,
        borderColor: '#6b7a91',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#6b7a91'
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
      id: 'etiquetaPartidoCEUCeuta',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCEUCeuta.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#454C55';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCEUCeuta[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PSPC Ceuta =================
const datosPSPCCeuta = [8.11, 4.45, 4.23,4.54 ];
const etiquetasPSPCCeuta = ['1995', '1999','2003','2007'];
const partidosPSPCCeuta = ['PSPC', 'PSPC','PSPC','PSPC'];

const ctxPSPCCeuta = document.getElementById('pspcCeutaChart').getContext('2d');

new Chart(ctxPSPCCeuta, {
  data: {
    labels: etiquetasPSPCCeuta,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPSPCCeuta,
        backgroundColor: 'rgba(255,103,103,0.7)', // color PSPC
        borderColor: '#ff6767',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#cc5252', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPSPCCeuta,
        borderColor: '#ff6767',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#ff6767'
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
      id: 'etiquetaPartidoPSPCCeuta',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSPCCeuta.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#cc5252';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSPCCeuta[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PDSC Ceuta =================
const datosPDSCCeuta = [5.09, 10.14, 5.19, 3.67, 2.34, 1.82, 0.97];
const etiquetasPDSCCeuta = ['1995','1999','2003','2007','2011','2015','2019'];
const partidosPDSCCeuta = ['PDSC','PDSC','PDSC','PDSC','PDSC','PDSC','PDSC'];

const ctxPDSCCeuta = document.getElementById('pdscCeutaChart').getContext('2d');

new Chart(ctxPDSCCeuta, {
  data: {
    labels: etiquetasPDSCCeuta,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPDSCCeuta,
        backgroundColor: 'rgba(58,98,25,0.7)', // color PDSC
        borderColor: '#3a6219',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#2a4513', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPDSCCeuta,
        borderColor: '#3a6219',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#3a6219'
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
      id: 'etiquetaPartidoPDSCCeuta',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPDSCCeuta.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#2a4513';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPDSCCeuta[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= GIL Ceuta =================
const datosGILCeuta = [38.62]; // 1995 vacío, 1999 38.62%, 2003 no informado
const etiquetasGILCeuta = ['1999'];
const partidosGILCeuta = ['GIL','GIL','GIL'];

const ctxGILCeuta = document.getElementById('gilCeutaChart').getContext('2d');

new Chart(ctxGILCeuta, {
  data: {
    labels: etiquetasGILCeuta,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosGILCeuta,
        backgroundColor: 'rgba(83,126,0,0.7)', // color GIL
        borderColor: '#537e00',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#375800', 
          font: { weight: 'bold' }, 
          formatter: (v) => v !== null ? v.toFixed(2) + '%' : '' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosGILCeuta,
        borderColor: '#537e00',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#537e00'
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
      id: 'etiquetaPartidoGILCeuta',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosGILCeuta.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#375800';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosGILCeuta[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UDCE Ceuta =================
const datosUDCECeuta = [10.82, 16.51]; // 1995, 1999 vacío, 2003 y 2007 datos
const etiquetasUDCECeuta = ['2003','2007'];
const partidosUDCECeuta = ['UDCE','UDCE','UDCE','UDCE'];

const ctxUDCECeuta = document.getElementById('udceCeutaChart').getContext('2d');

new Chart(ctxUDCECeuta, {
  data: {
    labels: etiquetasUDCECeuta,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosUDCECeuta,
        backgroundColor: 'rgba(136,51,51,0.7)', // color UDCE
        borderColor: '#83363',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#661f1f', 
          font: { weight: 'bold' }, 
          formatter: (v) => v !== null ? v.toFixed(2) + '%' : '' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosUDCECeuta,
        borderColor: '#83363',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#83363'
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
      id: 'etiquetaPartidoUDCECeuta',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUDCECeuta.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#661f1f';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUDCECeuta[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Caballas Ceuta =================
const datosCaballasCeuta = [14.32, 13.29, 6.22, 10.03]; // años 2011, 2015, 2019, 2023
const etiquetasCaballasCeuta = ['2011','2015','2019','2023'];
const partidosCaballasCeuta = ['Caballas','Caballas','Caballas','Caballas','Caballas','Caballas','Caballas'];

const ctxCaballasCeuta = document.getElementById('caballasCeutaChart').getContext('2d');

new Chart(ctxCaballasCeuta, {
  data: {
    labels: etiquetasCaballasCeuta,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCaballasCeuta,
        backgroundColor: 'rgba(221,188,102,0.7)', // color Caballas
        borderColor: '#ddbc66',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#aa9933', 
          font: { weight: 'bold' }, 
          formatter: (v) => v !== null ? v.toFixed(2) + '%' : '' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCaballasCeuta,
        borderColor: '#ddbc66',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#ddbc66'
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
      id: 'etiquetaPartidoCaballasCeuta',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCaballasCeuta.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#aa9933';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCaballasCeuta[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= MDyC Ceuta =================
const datosMDyCCeuta = [11.19, 6.96, 11.24];
const etiquetasMDyCCeuta = ['2015','2019','2023'];
const partidosMDyCCeuta = ['MDyC','MDyC','MDyC'];

const ctxMDyCCeuta = document.getElementById('mdycCeutaChart').getContext('2d');

new Chart(ctxMDyCCeuta, {
  data: {
    labels: etiquetasMDyCCeuta,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosMDyCCeuta,
        backgroundColor: 'rgba(185,191,1,0.7)', // color MDyC
        borderColor: '#b9bf01',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#808000', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosMDyCCeuta,
        borderColor: '#b9bf01',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#b9bf01'
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
      id: 'etiquetaPartidoMDyCCeuta',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosMDyCCeuta.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#808000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosMDyCCeuta[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PC Ceuta =================
const datosPCCeuta = [0.31, 1.08];
const etiquetasPCCeuta = ['1995','1999'];
const partidosPCCeuta = ['PC','PC'];

const ctxPCCeuta = document.getElementById('pcCeutaChart').getContext('2d');

new Chart(ctxPCCeuta, {
  data: {
    labels: etiquetasPCCeuta,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPCCeuta,
        backgroundColor: 'rgba(203,97,23,0.7)', // color PC
        borderColor: '#cb6117',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#a04012', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPCCeuta,
        borderColor: '#cb6117',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#cb6117'
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
      id: 'etiquetaPartidoPCCeuta',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPCCeuta.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#a04012';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPCCeuta[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

  // Etiquetas de años de Ceuta
  const etiquetasCeuta = ['1995','1999','2003','2007','2011','2015','2019','2023'];

  // Datos combinados por partido en Ceuta
  const datosCeuta = {
    'PP':       [31.16, 28.33, 63.02, 65.61, 65.16, 45.77, 31.12, 34.37],
    'PSOE':     [13.25, 7.53, 8.76, 8.71, 11.70, 14.04, 25.59, 20.96],
    'VOX':      [null,null,null,null,null,1.32,22.37,20.64],
    'CS':       [null,null,null,null,null,6.02,4.54,0.69],
    'Podemos/IU': [null,null,null,null,null,null,1.49,0.54],
    'MDyC':     [null,null,null,null,null,11.19,6.96,11.24],
    'Caballas/Ceuta Ya!': [null,null,null,null,14.32,13.29,6.22,10.03],
    'IU':       [1.79, 4.01, 0.97, 16.51,null, 1.56, 1.49, 0.54],
    'UPyD':     [null,null,null,null,2.66,1.11,null,null],
    'PFC':      [20.30, 1.90, null,null,null,null,null,null],
    'CEU':      [14.66, 3.94, null,null,null,null,null,null],
    'PSPC':     [8.11, 4.45, 4.23, 4.54,null,null,null,null],
    'PDSC':     [5.09, 10.14, 5.19, 3.67, 2.34, 1.82, 0.97, null],
    'GIL':      [null, 38.62, null,null,null,null,null,null],
    'UDCE':     [null,null,10.82,16.51,null,null,null,null],
    'PC':       [0.31, 1.08, null,null,null,null,null,null]
  };

  // Colores de cada partido
  const coloresPartidos = {
    'PP': '#0000FF',
    'PSOE': '#FF0000',
    'VOX': '#008000',
    'CS': '#FF8C00',
    'Podemos/IU': '#800080',
    'MDyC': '#B9BF01',
    'Caballas/Ceuta Ya!': '#DDBC66',
    'IU': '#B22222',
    'UPyD': '#FF60DA',
    'PFC': '#6f1117',
    'CEU': '#6b7a91',
    'PSPC': '#ff6767',
    'PDSC': '#3a6219',
    'GIL': '#537e00',
    'UDCE': '#83363',
    'PC': '#800000'
  };

  // Crear datasets para Chart.js
  const datasetsCeuta = Object.keys(datosCeuta).map(partido => ({
    type: 'line',
    label: partido,
    data: datosCeuta[partido],
    borderColor: coloresPartidos[partido],
    backgroundColor: 'transparent',
    fill: false,
    tension: 0.3,
    spanGaps: true,
    pointRadius: 4,
    pointBackgroundColor: coloresPartidos[partido],
    datalabels: {
      display: true,
      color: coloresPartidos[partido],
      font: { weight: 'bold', size: 12 },
      formatter: v => v != null ? v.toFixed(2) + '%' : ''
    }
  }));

  // Crear el gráfico combinado de Ceuta
  const ctxCeuta = document.getElementById('ceutaChart').getContext('2d');

  new Chart(ctxCeuta, {
    data: {
      labels: etiquetasCeuta,
      datasets: datasetsCeuta
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'top', labels: { color: '#333' } },
        datalabels: { display: true }
      },
      scales: {
        y: { beginAtZero: true, title: { display: true, text: 'Porcentaje (%)', color: '#333' }, ticks: { color: '#333' } },
        x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
      }
    },
    plugins: [ChartDataLabels]
  });