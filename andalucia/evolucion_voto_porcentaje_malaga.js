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
// ================= PP Málaga =================
const datosPPMalaga = [
  18.18, 21.25, 22.08, 36.84, 37.67, 41.10, 35.12, 43.59, 43.72, 28.34, 22.57, 47.02
];
const etiquetasPPMalaga = ['1982','1986','1990','1994','1996','2000','2004','2008','2012','2015','2018','2022'];
const partidosPPMalaga = ['AP','AP','PP','PP','PP','PP','PP','PP','PP','PP','PP','PP'];

const ctxPPMalaga = document.getElementById('ppMalagaChart').getContext('2d');

new Chart(ctxPPMalaga, {
  data: {
    labels: etiquetasPPMalaga,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPPMalaga,
        backgroundColor: 'rgba(0,0,255,0.7)', // azul PP
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
        data: datosPPMalaga,
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
      id: 'etiquetaPartidoPPMalaga',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPMalaga.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPMalaga[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PSOE Málaga =================
const datosPSOEMalaga = [
  54.02, 47.00, 49.49, 34.59, 39.91, 40.10, 48.20, 43.18, 35.22, 30.11, 24.19, 20.74
];
const etiquetasPSOEMalaga = ['1982','1986','1990','1994','1996','2000','2004','2008','2012','2015','2018','2022'];
const partidosPSOEMalaga = ['PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE'];

const ctxPSOEMalaga = document.getElementById('psoeMalagaChart').getContext('2d');

new Chart(ctxPSOEMalaga, {
  data: {
    labels: etiquetasPSOEMalaga,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPSOEMalaga,
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
        data: datosPSOEMalaga,
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
      id: 'etiquetaPartidoPSOEMalaga',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSOEMalaga.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#B22222';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSOEMalaga[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= VOX Málaga =================
const datosVOXMalaga = [0.35, 11.50, 13.52];
const etiquetasVOXMalaga = ['2015','2018','2022'];
const partidosVOXMalaga = ['VOX','VOX','VOX'];

const ctxVOXMalaga = document.getElementById('voxMalagaChart').getContext('2d');

new Chart(ctxVOXMalaga, {
  data: {
    labels: etiquetasVOXMalaga,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosVOXMalaga,
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
        data: datosVOXMalaga,
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
      id: 'etiquetaPartidoVOXMalaga',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXMalaga.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXMalaga[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Por Andalucía Málaga =================
const datosPorAndaluciaMalaga = [8.08];
const etiquetasPorAndaluciaMalaga = ['2022'];
const partidosPorAndaluciaMalaga = ['Por Andalucía'];

const ctxPorAndaluciaMalaga = document.getElementById('porAndaluciaMalagaChart').getContext('2d');

new Chart(ctxPorAndaluciaMalaga, {
  data: {
    labels: etiquetasPorAndaluciaMalaga,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPorAndaluciaMalaga,
        backgroundColor: 'rgba(196,32,101,0.7)', // color Por Andalucía
        borderColor: '#C42065',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#7A0F3E', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPorAndaluciaMalaga,
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
      id: 'etiquetaPartidoPorAndaluciaMalaga',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPorAndaluciaMalaga.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#7A0F3E';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPorAndaluciaMalaga[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Adelante Andalucía Málaga =================
const datosAdelanteMalaga = [15.67, 3.78];
const etiquetasAdelanteMalaga = ['2018','2022'];
const partidosAdelanteMalaga = ['Adelante Andalucía','Adelante Andalucía'];

const ctxAdelanteMalaga = document.getElementById('adelanteMalagaChart').getContext('2d');

new Chart(ctxAdelanteMalaga, {
  data: {
    labels: etiquetasAdelanteMalaga,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosAdelanteMalaga,
        backgroundColor: 'rgba(36,200,126,0.7)', // verde Adelante Andalucía
        borderColor: '#24C87E',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#15895A', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosAdelanteMalaga,
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
      id: 'etiquetaPartidoAdelanteMalaga',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosAdelanteMalaga.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#15895A';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosAdelanteMalaga[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CS Málaga =================
const datosCSMalaga = [11.78, 19.80, 3.47];
const etiquetasCSMalaga = ['2015','2018','2022'];
const partidosCSMalaga = ['CS','CS','CS'];

const ctxCSMalaga = document.getElementById('csMalagaChart').getContext('2d');

new Chart(ctxCSMalaga, {
  data: {
    labels: etiquetasCSMalaga,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCSMalaga,
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
        data: datosCSMalaga,
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
      id: 'etiquetaPartidoCSMalaga',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSMalaga.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSMalaga[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Podemos Málaga =================
const datosPodemosMalaga = [15.08];
const etiquetasPodemosMalaga = ['2015'];
const partidosPodemosMalaga = ['Podemos'];

const ctxPodemosMalaga = document.getElementById('podemosMalagaChart').getContext('2d');

new Chart(ctxPodemosMalaga, {
  data: {
    labels: etiquetasPodemosMalaga,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPodemosMalaga,
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
        data: datosPodemosMalaga,
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
      id: 'etiquetaPartidoPodemosMalaga',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosMalaga.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosMalaga[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PA Málaga =================
const datosPAMalaga = [6.85, 4.59, 8.83, 4.70, 5.75, 7.32, 6.76, 1.98, 0.99];
const etiquetasPAMalaga = ['1982','1986','1990','1994','1996','2000','2004','2012','2015'];
const partidosPAMalaga = ['PA','PA','PA','PA','PA','PA','PA','PA','PA'];

const ctxPAMalaga = document.getElementById('paMalagaChart').getContext('2d');

new Chart(ctxPAMalaga, {
  data: {
    labels: etiquetasPAMalaga,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPAMalaga,
        backgroundColor: 'rgba(21,170,53,0.7)', // verde PA
        borderColor: '#15AA35',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#0B6623', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPAMalaga,
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
      id: 'etiquetaPartidoPAMalaga',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPAMalaga.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#0B6623';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPAMalaga[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UCD Málaga =================
const datosUCDMalaga = [10.88];
const etiquetasUCDMalaga = ['1982'];
const partidosUCDMalaga = ['UCD'];

const ctxUCDMalaga = document.getElementById('ucdMalagaChart').getContext('2d');

new Chart(ctxUCDMalaga, {
  data: {
    labels: etiquetasUCDMalaga,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosUCDMalaga,
        backgroundColor: 'rgba(255,165,0,0.7)', // naranja UCD
        borderColor: '#FFA500',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#CC8400', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosUCDMalaga,
        borderColor: '#FFA500',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 5,
        pointBackgroundColor: '#FFA500'
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
      id: 'etiquetaPartidoUCDMalaga',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUCDMalaga.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#CC8400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUCDMalaga[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CDS Málaga =================
const datosCDSMalaga = [3.42, 1.74, 0.38];
const etiquetasCDSMalaga = ['1986','1990','1994'];
const partidosCDSMalaga = ['CDS','CDS','CDS'];

const ctxCDSMalaga = document.getElementById('cdsMalagaChart').getContext('2d');

new Chart(ctxCDSMalaga, {
  data: {
    labels: etiquetasCDSMalaga,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCDSMalaga,
        backgroundColor: 'rgba(0,191,255,0.7)', // azul CDS
        borderColor: '#00BFFF',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#1E90FF', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCDSMalaga,
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
      id: 'etiquetaPartidoCDSMalaga',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSMalaga.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1E90FF';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSMalaga[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= IU Málaga =================
const datosIUMalaga = [20.52, 14.64, 22.55, 15.94, 8.92, 7.67, 7.12, 12.17, 7.37];
const etiquetasIUMalaga = ['1986','1990','1994','1996','2000','2004','2008','2012','2015'];
const partidosIUMalaga = ['IU','IU','IU','IU','IU','IU','IU','IU','IU'];

const ctxIUMalaga = document.getElementById('iuMalagaChart').getContext('2d');

new Chart(ctxIUMalaga, {
  data: {
    labels: etiquetasIUMalaga,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosIUMalaga,
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
        data: datosIUMalaga,
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
      id: 'etiquetaPartidoIUMalaga',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIUMalaga.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIUMalaga[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UPyD Málaga =================
const datosUPyDMalaga = [0.69, 4.3, 2.63, 0.18];
const etiquetasUPyDMalaga = ['2008','2012','2015','2018'];
const partidosUPyDMalaga = ['UPyD','UPyD','UPyD','UPyD'];

const ctxUPyDMalaga = document.getElementById('upydMalagaChart').getContext('2d');

new Chart(ctxUPyDMalaga, {
  data: {
    labels: etiquetasUPyDMalaga,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosUPyDMalaga,
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
        data: datosUPyDMalaga,
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
      id: 'etiquetaPartidoUPyDMalaga',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDMalaga.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF1493';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDMalaga[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Etiquetas de años para Málaga =================
const etiquetasMalaga = ['1982','1986','1990','1994','1996','2000','2004','2008','2012','2015','2018','2022'];

// ================= Datos combinados por partido =================
const datosMalaga = {
  'PP/AP':       [18.18, 21.25, 22.08, 36.84, 37.67, 41.10, 35.12, 43.59, 43.72, 28.34, 22.57, 47.02],
  'PSOE':        [54.02, 47.00, 49.49, 34.59, 39.91, 40.10, 48.20, 43.18, 35.22, 30.11, 24.19, 20.74],
  'VOX':         [null,null,null,null,null,null,null,null,null,0.35,11.50,13.52],
  'CS':          [null,null,null,null,null,null,null,null,null,11.78,19.80,3.47],
  'Podemos/IU':  [null,null,null,null,null,null,null,null,null,15.08,null,null],
  'CDS':         [null,3.42,1.74,0.38,null,null,null,null,null,null,null,null],
  'IU':          [null,20.52,14.64,22.55,15.94,8.92,7.67,7.12,12.17,7.37,null,null],
  'UPyD':        [null,null,null,null,null,null,null,0.69,4.3,2.63,0.18,null],
  'PA':          [6.85,4.59,8.83,4.70,5.75,7.32,6.76,null,1.98,0.99,null,null],
  'UCD':         [10.88,null,null,null,null,null,null,null,null,null,null,null],
  'Por Andalucía':[null,null,null,null,null,null,null,null,null,null,null,8.08],
  'Adelante Andalucía':[null,null,null,null,null,null,null,null,null,null,15.67,3.78]
};

// ================= Colores de cada partido =================
const coloresPartidosMalaga = {
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
  'Adelante Andalucía': '#24C87E'
};

// ================= Crear datasets para Chart.js =================
const datasetsMalaga = Object.keys(datosMalaga).map(partido => ({
  type: 'line',
  label: partido,
  data: datosMalaga[partido],
  borderColor: coloresPartidosMalaga[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresPartidosMalaga[partido],
  datalabels: {
    display: true,
    color: coloresPartidosMalaga[partido],
    font: { weight: 'bold', size: 12 },
    formatter: v => v != null ? v.toFixed(2) + '%' : ''
  }
}));

// ================= Crear gráfico combinado =================
const ctxMalaga = document.getElementById('malagaChart').getContext('2d');

new Chart(ctxMalaga, {
  data: {
    labels: etiquetasMalaga,
    datasets: datasetsMalaga
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