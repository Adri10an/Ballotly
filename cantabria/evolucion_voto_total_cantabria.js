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
// ================= PP Extremadura =================
const datosPPCantabria = [122748, 122882, 42714, 104008, 134924, 146796, 143610, 156499, 105944, 78347, 116198];
const etiquetasPPCantabria = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023'];
const partidosPPCantabria = ['AP-PDP-UL','AP','PP','PP','PP','PP','PP','PP','PP','PP','PP'];

const ctxPPCantabria = document.getElementById('ppCantabriaChart').getContext('2d');

new Chart(ctxPPCantabria, {
  data: {
    labels: etiquetasPPCantabria,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPPCantabria,
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
        data: datosPPCantabria,
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoPPCantabria',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPCantabria.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPCantabria[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosPSECantabria = [107168, 87828, 102958, 80464, 105004, 103608, 84982, 55541, 45653, 57383, 66917];
const etiquetasPSECantabria = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023'];
const partidosPSECantabria = ['PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE'];

const ctxPSECantabria = document.getElementById('psoeCantabriaChart').getContext('2d');

new Chart(ctxPSECantabria, {
  data: {
    labels: etiquetasPSECantabria,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPSECantabria,
        backgroundColor: 'rgba(255,0,0,0.7)', // rojo PSOE
        borderColor: '#FF0000',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#FF0000', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPSECantabria,
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoPSECantabria',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSECantabria.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSECantabria[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosVOXCantabria = [1119, 16496, 35982];
const etiquetasVOXCantabria = ['2015','2019','2023'];
const partidosVOXCantabria = ['VOX','VOX','VOX'];

const ctxVOXCantabria = document.getElementById('voxCantabriaChart').getContext('2d');

new Chart(ctxVOXCantabria, {
  data: {
    labels: etiquetasVOXCantabria,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosVOXCantabria,
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
        data: datosVOXCantabria,
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoVOXCantabria',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXCantabria.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXCantabria[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosCSCantabria = [22552, 25872, 7527];
const etiquetasCSCantabria = ['2015','2019','2023'];
const partidosCSCantabria = ['CS','CS','CS'];

const ctxCSCantabria = document.getElementById('csCantabriaChart').getContext('2d');

new Chart(ctxCSCantabria, {
  data: {
    labels: etiquetasCSCantabria,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCSCantabria,
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
        data: datosCSCantabria,
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoCSCantabria',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSCantabria.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSCantabria[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosPodemosCantabria = [28895, 10224, 13395];
const etiquetasPodemosCantabria = ['2015','2019','2023'];
const partidosPodemosCantabria = ['Podemos','Podemos','Podemos-IU'];

const ctxPodemosCantabria = document.getElementById('podemosCantabriaChart').getContext('2d');

new Chart(ctxPodemosCantabria, {
  data: {
    labels: etiquetasPodemosCantabria,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPodemosCantabria,
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
        data: datosPodemosCantabria,
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoPodemosCantabria',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosCantabria.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosCantabria[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CDS Extremadura =================
const datosCDSCantabria = [7164, 19579, 7926];
const etiquetasCDSCantabria = ['1983','1987','1991'];
const partidosCDSCantabria = ['CDS','CDS','CDS'];

const ctxCDSCantabria = document.getElementById('cdsCantabriaChart').getContext('2d');

new Chart(ctxCDSCantabria, {
  data: {
    labels: etiquetasCDSCantabria,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCDSCantabria,
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
        data: datosCDSCantabria,
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
      datalabels: { display: true } 
    },
    scales: {
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoCDSCantabria',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSCantabria.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1E90FF';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSCantabria[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= IU/Podemos Cantabria =================
const datosIUCantabria = [10843, 13023, 23563, 11707, 12770, 6511, 11277, 8246, 6204, 13395];
const etiquetasIUCantabria = ['1987','1991','1995','1999','2003','2007','2011','2015','2019','2023'];
const partidosIUCantabria = ['IU','IU','IU','IU','IU','IU','IU','IU','Podemos-IU','Podemos-IU-AV'];

const ctxIUCantabria = document.getElementById('iuCantabriaChart').getContext('2d');

new Chart(ctxIUCantabria, {
  data: {
    labels: etiquetasIUCantabria,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosIUCantabria,
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
        data: datosIUCantabria,
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoIUCantabria',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIUCantabria.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIUCantabria[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UPyD Cantabria =================
const datosUPyDCantabria = [5835, 2380];
const etiquetasUPyDCantabria = ['2011','2015'];
const partidosUPyDCantabria = ['UPyD','UPyD'];

const ctxUPyDCantabria = document.getElementById('upydCantabriaChart').getContext('2d');

new Chart(ctxUPyDCantabria, {
  data: {
    labels: etiquetasUPyDCantabria,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUPyDCantabria,
        backgroundColor: 'rgba(255,96,218,0.7)', // color UPyD
        borderColor: '#ff60da',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#ff60da', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosUPyDCantabria,
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
      datalabels: { display: true } 
    },
    scales: {
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoUPyDCantabria',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDCantabria.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#ff60da';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDCantabria[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UPCA Cantabria =================
const datosUPCACantabria = [99194, 53191, 9743];
const etiquetasUPCACantabria = ['1991','1995','1999'];
const partidosUPCACantabria = ['UPCA','UPCA','UPCA'];

const ctxUPCACantabria = document.getElementById('upcaCantabriaChart').getContext('2d');

new Chart(ctxUPCACantabria, {
  data: {
    labels: etiquetasUPCACantabria,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUPCACantabria,
        backgroundColor: 'rgba(30,18,88,0.7)', // color UPCA
        borderColor: '#1e1258',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#1e1258', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosUPCACantabria,
        borderColor: '#1e1258',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#1e1258'
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoUPCACantabria',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPCACantabria.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1e1258';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPCACantabria[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PRC Cantabria =================
const datosPRCCantabria = [18767, 38202, 18789, 46587, 42896, 66480, 99159, 98887, 97185, 122679, 67523];
const etiquetasPRCCantabria = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023'];
const partidosPRCCantabria = ['PRC','PRC','PRC','PRC','PRC','PRC','PRC','PRC','PRC','PRC','PRC'];

const ctxPRCCantabria = document.getElementById('prcCantabriaChart').getContext('2d');

new Chart(ctxPRCCantabria, {
  data: {
    labels: etiquetasPRCCantabria,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPRCCantabria,
        backgroundColor: 'rgba(141,159,3,0.7)', // color PRC
        borderColor: '#8d9f03',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#556000', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPRCCantabria,
        borderColor: '#8d9f03',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#8d9f03'
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoPRCCantabria',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPRCCantabria.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#556000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPRCCantabria[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Datos Cantabria =================
const etiquetasCantabria = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023'];

const datosCantabria = {
  'PP':         [122748, 122882, 42714, 104008, 134924, 146796, 143610, 156499, 105944, 78347, 116198],
  'PSOE':       [107168, 87828, 102958, 80464, 105004, 103608, 84982, 55541, 45653, 57383, 66917],
  'VOX':        [null,null,null,null,null,null,null,null,1119,16496,35982], // ajusta si quieres
  'CS':         [null,null,null,null,null,null,null,null,22552,25872,7527,],
  'Podemos/IU':[null,null,null,null,null,null,null,null,28895,10224,13395],
  'CDS':        [7164, 19579, 7926,null,null,null,null,null,null,null,null],
  'IU':         [null,10843, 13023, 23563, 11707, 12770, 6511, 11277, 8246, 6204, 13395],
  'UPyD':       [null,null,null,null,null,null,null,5835,2380,null,null],
  'UPCA':       [null,null,99194,53191,9743,null,null,null,null,null,null],
  'PRC':        [18767, 38202, 18789, 46587, 42896, 66480, 99159, 98887, 97185, 122679, 67523]
};

const coloresPartidosCantabria = {
  'PP': '#0000FF',
  'PSOE': '#FF0000',
  'VOX': '#008000',
  'CS': '#FF8C00',
  'Podemos/IU': '#800080',
  'CDS': '#00BFFF',
  'IU': '#B22222',
  'UPyD': '#ff60da',
  'UPCA': '#1e1258',
  'PRC': '#8d9f03'
};

// Construcción de datasets
const datasetsCantabria = Object.keys(datosCantabria).map(partido => ({
  type: 'line',
  label: partido,
  data: datosCantabria[partido],
  borderColor: coloresPartidosCantabria[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresPartidosCantabria[partido],
  datalabels: { 
    display: true,
    color: coloresPartidosCantabria[partido],
    font: { weight: 'bold', size: 12 },
    formatter: v => v != null ? v.toLocaleString() : ''
  }
}));

// Contexto del canvas
const ctxCantabria = document.getElementById('votosTotalesCantabriaChart').getContext('2d');

// Crear gráfico
new Chart(ctxCantabria, {
  data: {
    labels: etiquetasCantabria,
    datasets: datasetsCantabria
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