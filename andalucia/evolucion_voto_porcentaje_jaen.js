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
// ================= PP Jaén =================
const datosPPJaen = [
  16.45, 26.88, 27.26, 36.14, 36.39, 38.24, 32.75, 36.62, 41.09, 29.08, 23.17, 42.45
];
const etiquetasPPJaen = ['1982','1986','1990','1994','1996','2000','2004','2008','2012','2015','2018','2022'];
const partidosPPJaen = ['AP','AP','PP','PP','PP','PP','PP','PP','PP','PP','PP','PP'];

const ctxPPJaen = document.getElementById('ppJaenChart').getContext('2d');

new Chart(ctxPPJaen, {
  data: {
    labels: etiquetasPPJaen,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPPJaen,
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
        data: datosPPJaen,
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
      id: 'etiquetaPartidoPPJaen',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPJaen.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPJaen[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PSOE Jaén =================
const datosPSOEJaen = [
  52.02, 49.25, 51.96, 42.91, 47.58, 48.22, 53.67, 53.35, 44.48, 42.68, 35.40, 27.11
];
const etiquetasPSOEJaen = ['1982','1986','1990','1994','1996','2000','2004','2008','2012','2015','2018','2022'];
const partidosPSOEJaen = ['PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE'];

const ctxPSOEJaen = document.getElementById('psoeJaenChart').getContext('2d');

new Chart(ctxPSOEJaen, {
  data: {
    labels: etiquetasPSOEJaen,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPSOEJaen,
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
        data: datosPSOEJaen,
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
      id: 'etiquetaPartidoPSOEJaen',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSOEJaen.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#B22222';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSOEJaen[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= VOX Jaén =================
const datosVOXJaen = [0.31, 8.72, 12.84];
const etiquetasVOXJaen = ['2015','2018','2022'];
const partidosVOXJaen = ['VOX','VOX','VOX'];

const ctxVOXJaen = document.getElementById('voxJaenChart').getContext('2d');

new Chart(ctxVOXJaen, {
  data: {
    labels: etiquetasVOXJaen,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosVOXJaen,
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
        data: datosVOXJaen,
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
      id: 'etiquetaPartidoVOXJaen',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXJaen.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXJaen[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Jaén Merece Más Jaén =================
const datosJaenMereceMasJaen = [5.90]; // 2022
const etiquetasJaenMereceMasJaen = ['2022'];
const partidosJaenMereceMasJaen = ['Jaén Merece Más'];

const ctxJaenMereceMasJaen = document.getElementById('jaenMereceMasJaenChart').getContext('2d');

new Chart(ctxJaenMereceMasJaen, {
  data: {
    labels: etiquetasJaenMereceMasJaen,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosJaenMereceMasJaen,
        backgroundColor: 'rgba(71,119,62,0.7)', // verde Jaén Merece Más
        borderColor: '#47773e',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end',
          align: 'top',
          color: '#355c2f',
          font: { weight: 'bold' },
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosJaenMereceMasJaen,
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
    animation: { duration: 1200, easing: 'easeOutBounce' },
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
      id: 'etiquetaPartidoJaenMereceMasJaen',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosJaenMereceMasJaen.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#355c2f';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosJaenMereceMasJaen[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Por Andalucía Jaén =================
const datosPorAndaluciaJaen = [5.59];
const etiquetasPorAndaluciaJaen = ['2022'];
const partidosPorAndaluciaJaen = ['Por Andalucía'];

const ctxPorAndaluciaJaen = document.getElementById('porAndaluciaJaenChart').getContext('2d');

new Chart(ctxPorAndaluciaJaen, {
  data: {
    labels: etiquetasPorAndaluciaJaen,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPorAndaluciaJaen,
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
        data: datosPorAndaluciaJaen,
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
      id: 'etiquetaPartidoPorAndaluciaJaen',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPorAndaluciaJaen.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#7A0F3E';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPorAndaluciaJaen[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CS Jaén =================
const datosCSJaen = [5.95, 15.95, 2.22];
const etiquetasCSJaen = ['2015','2018','2022'];
const partidosCSJaen = ['CS','CS','CS'];

const ctxCSJaen = document.getElementById('csJaenChart').getContext('2d');

new Chart(ctxCSJaen, {
  data: {
    labels: etiquetasCSJaen,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCSJaen,
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
        data: datosCSJaen,
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
      id: 'etiquetaPartidoCSJaen',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSJaen.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSJaen[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Adelante Andalucía Jaén =================
const datosAdelanteJaen = [12.13, 1.78];
const etiquetasAdelanteJaen = ['2018','2022'];
const partidosAdelanteJaen = ['Adelante Andalucía','Adelante Andalucía'];

const ctxAdelanteJaen = document.getElementById('adelanteJaenChart').getContext('2d');

new Chart(ctxAdelanteJaen, {
  data: {
    labels: etiquetasAdelanteJaen,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosAdelanteJaen,
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
        data: datosAdelanteJaen,
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
      id: 'etiquetaPartidoAdelanteJaen',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosAdelanteJaen.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#15895A';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosAdelanteJaen[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Podemos Jaén =================
const datosPodemosJaen = [11.04];
const etiquetasPodemosJaen = ['2015'];
const partidosPodemosJaen = ['Podemos'];

const ctxPodemosJaen = document.getElementById('podemosJaenChart').getContext('2d');

new Chart(ctxPodemosJaen, {
  data: {
    labels: etiquetasPodemosJaen,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPodemosJaen,
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
        data: datosPodemosJaen,
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
      id: 'etiquetaPartidoPodemosJaen',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosJaen.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosJaen[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PA Jaén =================
const datosPAJaen = [3.49, 2.71, 5.58, 4.14, 3.31, 4.85, 5.77, 1.56, 1.21];
const etiquetasPAJaen = ['1982','1986','1990','1994','1996','2000','2004','2012','2015'];
const partidosPAJaen = ['PA','PA','PA','PA','PA','PA','PA','PA','PA'];

const ctxPAJaen = document.getElementById('paJaenChart').getContext('2d');

new Chart(ctxPAJaen, {
  data: {
    labels: etiquetasPAJaen,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPAJaen,
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
        data: datosPAJaen,
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
      id: 'etiquetaPartidoPAJaen',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPAJaen.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#0B6623';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPAJaen[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UCD Jaén =================
const datosUCDJaen = [16.21]; // 1982
const etiquetasUCDJaen = ['1982'];
const partidosUCDJaen = ['UCD'];

const ctxUCDJaen = document.getElementById('ucdJaenChart').getContext('2d');

new Chart(ctxUCDJaen, {
  data: {
    labels: etiquetasUCDJaen,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosUCDJaen,
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
        data: datosUCDJaen,
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
      id: 'etiquetaPartidoUCDJaen',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUCDJaen.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#CC8400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUCDJaen[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CDS Jaén =================
const datosCDSJaen = [3.40, 1.18, 0.26]; // 1986, 1990, 1994
const etiquetasCDSJaen = ['1986','1990','1994'];
const partidosCDSJaen = ['CDS','CDS','CDS'];

const ctxCDSJaen = document.getElementById('cdsJaenChart').getContext('2d');

new Chart(ctxCDSJaen, {
  data: {
    labels: etiquetasCDSJaen,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCDSJaen,
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
        data: datosCDSJaen,
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
      id: 'etiquetaPartidoCDSJaen',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSJaen.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1E90FF';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSJaen[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= IU Jaén =================
const datosIUJaen = [15.70, 11.51, 15.75, 12.27, 7.32, 6.72, 6.09, 8.76, 5.73]; // 1986-2015
const etiquetasIUJaen = ['1986','1990','1994','1996','2000','2004','2008','2012','2015'];
const partidosIUJaen = ['IU','IU','IU','IU','IU','IU','IU','IU','IU'];

const ctxIUJaen = document.getElementById('iuJaenChart').getContext('2d');

new Chart(ctxIUJaen, {
  data: {
    labels: etiquetasIUJaen,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosIUJaen,
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
        data: datosIUJaen,
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
      id: 'etiquetaPartidoIUJaen',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIUJaen.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIUJaen[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UPyD Jaén =================
const datosUPyDJaen = [0.30, 2.28, 1.45, 0.11]; // 2008-2018
const etiquetasUPyDJaen = ['2008','2012','2015','2018'];
const partidosUPyDJaen = ['UPyD','UPyD','UPyD','UPyD'];

const ctxUPyDJaen = document.getElementById('upydJaenChart').getContext('2d');

new Chart(ctxUPyDJaen, {
  data: {
    labels: etiquetasUPyDJaen,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosUPyDJaen,
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
        data: datosUPyDJaen,
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
      id: 'etiquetaPartidoUPyDJaen',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDJaen.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF1493';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDJaen[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Etiquetas de años para Jaén =================
const etiquetasJaen = ['1982','1986','1990','1994','1996','2000','2004','2008','2012','2015','2018','2022'];

// ================= Datos combinados por partido =================
const datosJaen = {
  'PP/AP':       [16.45,26.88,27.26,36.14,36.39,38.24,32.75,36.62,41.09,29.08,23.17,42.45],
  'PSOE':        [52.02,49.25,51.96,42.91,47.58,48.22,53.67,53.35,44.48,42.68,35.40,27.11],
  'VOX':         [null,null,null,null,null,null,null,null,null,0.31,8.72,12.84],
  'CS':          [null,null,null,null,null,null,null,null,null,5.95,15.95,2.22],
  'Podemos/IU':  [null,null,null,null,null,null,null,null,null,11.04,null,null],
  'CDS':         [null,3.40,1.18,0.26,null,null,null,null,null,null,null,null],
  'IU':          [null,15.70,11.51,15.75,12.27,7.32,6.72,6.09,null,8.76,5.73,null],
  'UPyD':        [null,null,null,null,null,null,null,0.30,2.28,1.45,0.11,null],
  'PA':          [3.49,2.71,5.58,4.14,3.31,4.85,5.77,null,1.56,1.21,null,null],
  'UCD':         [16.21,null,null,null,null,null,null,null,null,null,null,null],
  'Por Andalucía':[null,null,null,null,null,null,null,null,null,null,null,5.59],
  'Adelante Andalucía':[null,null,null,null,null,null,null,null,null,null,12.13,1.78],
  'Jaén Merece Más':[null,null,null,null,null,null,null,null,null,null,null,5.90]
};

// ================= Colores de cada partido =================
const coloresPartidosJaen = {
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

// ================= Crear datasets para Chart.js =================
const datasetsJaen = Object.keys(datosJaen).map(partido => ({
  type: 'line',
  label: partido,
  data: datosJaen[partido],
  borderColor: coloresPartidosJaen[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresPartidosJaen[partido],
  datalabels: {
    display: true,
    color: coloresPartidosJaen[partido],
    font: { weight: 'bold', size: 12 },
    formatter: v => v != null ? (partido === 'Jaén Merece Más' ? v.toLocaleString() : v.toFixed(2)+'%') : ''
  }
}));

// ================= Crear gráfico combinado =================
const ctxJaen = document.getElementById('jaenChart').getContext('2d');

new Chart(ctxJaen, {
  data: {
    labels: etiquetasJaen,
    datasets: datasetsJaen
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
        title: { display: true, text: 'Porcentaje (%) / Votos totales', color: '#333' }, 
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