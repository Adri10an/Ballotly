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
// Datos históricos PP en Andalucía (1982–2022)
// ================= PP Andalucía =================
const datosPPAndalucia = [
  17.06, 22.29, 22.27, 34.36, 34.18, 38.52, 32.23, 38.45, 40.66, 26.65, 20.75, 43.11
];

const etiquetasPPAndalucia = [
  '1982','1986','1990','1994','1996','2000','2004','2008','2012','2015','2018','2022'
];

const partidosPPAndalucia = [
  'AP','AP','PP','PP','PP','PP','PP','PP','PP','PP','PP','PP'
];

const ctxPPAndalucia = document.getElementById('ppAndaluciaChart').getContext('2d');

new Chart(ctxPPAndalucia, {
  data: {
    labels: etiquetasPPAndalucia,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPPAndalucia,
        backgroundColor: 'rgba(0,0,255,0.7)', // Azul PP puro (#0000FF)
        borderColor: '#0000FF',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end',
          align: 'top',
          color: '#00008B', // Azul oscuro para contraste
          font: { weight: 'bold' },
          formatter: (v) => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPPAndalucia,
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
      id: 'etiquetaPartidoPPAndalucia',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPAndalucia.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B'; // Texto en azul oscuro
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPAndalucia[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PSOE Andalucía =================
const datosPSOEAndalucia = [
  52.77, 47.13, 49.82, 38.71, 44.47, 44.90, 51.07, 48.41, 39.52, 35.41, 27.94, 24.10
];

const etiquetasPSOEAndalucia = [
  '1982','1986','1990','1994','1996','2000','2004','2008','2012','2015','2018','2022'
];

const partidosPSOEAndalucia = [
  'PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE'
];

const ctxPSOEAndalucia = document.getElementById('psoeAndaluciaChart').getContext('2d');

new Chart(ctxPSOEAndalucia, {
  data: {
    labels: etiquetasPSOEAndalucia,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPSOEAndalucia,
        backgroundColor: 'rgba(255,0,0,0.7)', // Rojo PSOE puro (#FF0000)
        borderColor: '#FF0000',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end',
          align: 'top',
          color: '#B30000', // rojo oscuro para contraste
          font: { weight: 'bold' },
          formatter: (v) => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPSOEAndalucia,
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
      id: 'etiquetaPartidoPSOEAndalucia',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSOEAndalucia.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#B30000'; // texto en rojo oscuro
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSOEAndalucia[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= VOX Andalucía =================
const datosVOXAndalucia = [0.46, 10.96, 13.47];
const etiquetasVOXAndalucia = ['2015','2018','2022'];
const partidosVOXAndalucia = ['VOX','VOX','VOX'];

const ctxVOXAndalucia = document.getElementById('voxAndaluciaChart').getContext('2d');

new Chart(ctxVOXAndalucia, {
  data: {
    labels: etiquetasVOXAndalucia,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosVOXAndalucia,
        backgroundColor: 'rgba(0,128,0,0.7)', // Verde VOX (#008000)
        borderColor: '#008000',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end',
          align: 'top',
          color: '#004d00', // verde más oscuro para contraste
          font: { weight: 'bold' },
          formatter: (v) => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosVOXAndalucia,
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
      id: 'etiquetaPartidoVOXAndalucia',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXAndalucia.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#004d00'; // texto en verde oscuro
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXAndalucia[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Por Andalucía (Andalucía) =================
const datosPorAndaluciaAndalucia = [7.70];
const etiquetasPorAndaluciaAndalucia = ['2022'];
const partidosPorAndaluciaAndalucia = ['Por Andalucía'];

const ctxPorAndaluciaAndalucia = document.getElementById('porAndaluciaAndaluciaChart').getContext('2d');

new Chart(ctxPorAndaluciaAndalucia, {
  data: {
    labels: etiquetasPorAndaluciaAndalucia,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPorAndaluciaAndalucia,
        backgroundColor: 'rgba(196,32,101,0.7)', // color magenta Por Andalucía
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
        data: datosPorAndaluciaAndalucia,
        borderColor: '#C42065',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 5,
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
      id: 'etiquetaPartidoPorAndaluciaAndalucia',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPorAndaluciaAndalucia.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#7A0F3E';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPorAndaluciaAndalucia[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Adelante Andalucía (Andalucía) =================
const datosAdelanteAndalucia = [16.19, 4.58];
const etiquetasAdelanteAndalucia = ['2018','2022'];
const partidosAdelanteAndalucia = ['Adelante Andalucía','Adelante Andalucía'];

const ctxAdelanteAndalucia = document.getElementById('adelanteAndaluciaChart').getContext('2d');

new Chart(ctxAdelanteAndalucia, {
  data: {
    labels: etiquetasAdelanteAndalucia,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosAdelanteAndalucia,
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
        data: datosAdelanteAndalucia,
        borderColor: '#24C87E',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 5,
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
      id: 'etiquetaPartidoAdelanteAndalucia',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosAdelanteAndalucia.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#15895A';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosAdelanteAndalucia[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Ciudadanos (Andalucía) =================
const datosCSAndalucia = [9.28, 18.28, 3.30];
const etiquetasCSAndalucia = ['2015', '2018', '2022'];
const partidosCSAndalucia = ['CS', 'CS', 'CS'];

const ctxCSAndalucia = document.getElementById('csAndaluciaChart').getContext('2d');

new Chart(ctxCSAndalucia, {
  data: {
    labels: etiquetasCSAndalucia,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCSAndalucia,
        backgroundColor: 'rgba(255,140,0,0.7)', // Naranja CS (#FF8C00)
        borderColor: '#FF8C00',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end',
          align: 'top',
          color: '#CC7000', // tono más oscuro para contraste
          font: { weight: 'bold' },
          formatter: (v) => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCSAndalucia,
        borderColor: '#FF8C00',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 5,
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
      id: 'etiquetaPartidoCSAndalucia',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSAndalucia.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#CC7000'; // texto naranja oscuro
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSAndalucia[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Jaén Merece Más (Andalucía) =================
const datosJaenMereceMasAndalucia = [0.51]; // 2022
const etiquetasJaenMereceMasAndalucia = ['2022'];
const partidosJaenMereceMasAndalucia = ['Jaén Merece Más'];

const ctxJaenMereceMasAndalucia = document.getElementById('jaenMereceMasAndaluciaChart').getContext('2d');

new Chart(ctxJaenMereceMasAndalucia, {
  data: {
    labels: etiquetasJaenMereceMasAndalucia,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosJaenMereceMasAndalucia,
        backgroundColor: 'rgba(71,119,62,0.75)', // verde Jaén Merece Más
        borderColor: '#47773E',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end',
          align: 'top',
          color: '#2F4F2F',
          font: { weight: 'bold' },
          formatter: (v) => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosJaenMereceMasAndalucia,
        borderColor: '#47773E',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 5,
        pointBackgroundColor: '#47773E'
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
      id: 'etiquetaPartidoJaenMereceMasAndalucia',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosJaenMereceMasAndalucia.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#2F4F2F';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosJaenMereceMasAndalucia[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Podemos Andalucía =================
const datosPodemosAndalucia = [14.86]; // 2015
const etiquetasPodemosAndalucia = ['2015'];
const partidosPodemosAndalucia = ['Podemos'];

const ctxPodemosAndalucia = document.getElementById('podemosAndaluciaChart').getContext('2d');

new Chart(ctxPodemosAndalucia, {
  data: {
    labels: etiquetasPodemosAndalucia,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPodemosAndalucia,
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
        data: datosPodemosAndalucia,
        borderColor: '#800080',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 5,
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
      id: 'etiquetaPartidoPodemosAndalucia',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosAndalucia.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosAndalucia[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Partido Andalucista (PA) · Andalucía =================
const datosPAAndalucia = [5.41, 5.89, 10.80, 5.79, 6.70, 7.53, 6.25, 2.50, 1.52];
const etiquetasPAAndalucia = ['1982','1986','1990','1994','1996','2000','2004','2012','2015'];
const partidosPAAndalucia = ['PA','PA','PA','PA','PA','PA','PA','PA','PA'];

const ctxPAAndalucia = document.getElementById('paAndaluciaChart').getContext('2d');

new Chart(ctxPAAndalucia, {
  data: {
    labels: etiquetasPAAndalucia,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPAAndalucia,
        backgroundColor: 'rgba(21,170,53,0.7)', // verde PA (#15AA35)
        borderColor: '#15AA35',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end',
          align: 'top',
          color: '#0F802A', // tono más oscuro para contraste
          font: { weight: 'bold' },
          formatter: (v) => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPAAndalucia,
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
      id: 'etiquetaPartidoPAAndalucia',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPAAndalucia.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#0F802A'; // texto verde oscuro
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPAAndalucia[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UCD · Andalucía =================
const datosUCDAndalucia = [13.07]; // 1982
const etiquetasUCDAndalucia = ['1982'];
const partidosUCDAndalucia = ['UCD'];

const ctxUCDAndalucia = document.getElementById('ucdAndaluciaChart').getContext('2d');

new Chart(ctxUCDAndalucia, {
  data: {
    labels: etiquetasUCDAndalucia,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosUCDAndalucia,
        backgroundColor: 'rgba(255,165,0,0.7)', // naranja UCD (#FFA500)
        borderColor: '#FFA500',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#CC8400', // tono más oscuro para contraste
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosUCDAndalucia,
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
      id: 'etiquetaPartidoUCDAndalucia',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUCDAndalucia.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#CC8400'; // texto oscuro para buena lectura
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUCDAndalucia[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CDS · Andalucía =================
const datosCDSAndalucia = [3.28, 1.19, 0.28]; // 1986, 1990, 1994
const etiquetasCDSAndalucia = ['1986','1990','1994'];
const partidosCDSAndalucia = ['CDS','CDS','CDS'];

const ctxCDSAndalucia = document.getElementById('cdsAndaluciaChart').getContext('2d');

new Chart(ctxCDSAndalucia, {
  data: {
    labels: etiquetasCDSAndalucia,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCDSAndalucia,
        backgroundColor: 'rgba(0,191,255,0.7)', // azul CDS (#00BFFF)
        borderColor: '#00BFFF',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#0078A0', // tono más oscuro para contraste
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCDSAndalucia,
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
      id: 'etiquetaPartidoCDSAndalucia',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSAndalucia.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#0078A0'; // texto oscuro para legibilidad
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSAndalucia[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= IU · Andalucía =================
const datosIUAndalucia = [17.91, 12.73, 19.31, 14.06, 8.21, 7.61, 7.06, 11.34, 6.89]; // 1986–2015
const etiquetasIUAndalucia = ['1986','1990','1994','1996','2000','2004','2008','2012','2015'];
const partidosIUAndalucia = ['IU','IU','IU','IU','IU','IU','IU','IU','IU'];

const ctxIUAndalucia = document.getElementById('iuAndaluciaChart').getContext('2d');

new Chart(ctxIUAndalucia, {
  data: {
    labels: etiquetasIUAndalucia,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosIUAndalucia,
        backgroundColor: 'rgba(178,34,34,0.7)', // rojo IU (#B22222)
        borderColor: '#B22222',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end',
          align: 'top',
          color: '#7A1414', // tono más oscuro para contraste
          font: { weight: 'bold' },
          formatter: (v) => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosIUAndalucia,
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
      id: 'etiquetaPartidoIUAndalucia',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIUAndalucia.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#7A1414'; // texto oscuro para legibilidad
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIUAndalucia[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UPyD · Andalucía =================
const datosUPyDAndalucia = [0.62, 3.35, 1.93, 0.18]; // 2008–2018
const etiquetasUPyDAndalucia = ['2008','2012','2015','2018'];
const partidosUPyDAndalucia = ['UPyD','UPyD','UPyD','UPyD'];

const ctxUPyDAndalucia = document.getElementById('upydAndaluciaChart').getContext('2d');

new Chart(ctxUPyDAndalucia, {
  data: {
    labels: etiquetasUPyDAndalucia,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosUPyDAndalucia,
        backgroundColor: 'rgba(255,96,218,0.7)', // magenta UPyD (#FF60DA)
        borderColor: '#FF60DA',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end',
          align: 'top',
          color: '#B03097', // magenta oscuro para contraste
          font: { weight: 'bold' },
          formatter: (v) => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosUPyDAndalucia,
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
      id: 'etiquetaPartidoUPyDAndalucia',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDAndalucia.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#B03097'; // tono más oscuro para texto
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDAndalucia[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Etiquetas de años para Andalucía =================
const etiquetasAndalucia = ['1982','1986','1990','1994','1996','2000','2004','2008','2012','2015','2018','2022'];

// ================= Datos combinados por partido =================
const datosAndalucia = {
  'PP/AP':       [17.06,22.29,22.27,34.36,34.18,38.52,32.23,38.45,40.66,26.65,20.75,43.11],
  'PSOE':        [52.77,47.13,49.82,38.71,44.47,44.90,51.07,48.41,39.52,35.41,27.94,24.10],
  'VOX':         [null,null,null,null,null,null,null,null,null,0.46,10.96,13.47],
  'CS':          [null,null,null,null,null,null,null,null,null,9.28,18.28,3.30],
  'Podemos/IU':  [null,null,null,null,null,null,null,null,null,14.86,null,null],
  'CDS':         [null,3.28,1.19,0.28,null,null,null,null,null,null,null,null],
  'IU':          [null,17.91,12.73,19.31,14.06,8.21,7.61,7.06,11.34,6.89,null,null],
  'UPyD':        [null,null,null,null,null,null,null,0.62,3.35,1.93,0.18,null],
  'PA':          [5.41,5.89,10.80,5.79,6.70,7.53,6.25,null,2.50,1.52,null,null],
  'UCD':         [13.07,null,null,null,null,null,null,null,null,null,null,null],
  'Por Andalucía':[null,null,null,null,null,null,null,null,null,null,null,7.70],
  'Adelante Andalucía':[null,null,null,null,null,null,null,null,null,null,16.19,4.58],
  'Jaén Merece Más':[null,null,null,null,null,null,null,null,null,null,null,0.51]
};

// ================= Colores de cada partido =================
const coloresPartidosAndalucia = {
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
  'Jaén Merece Más': '#47773E'
};

// ================= Crear datasets para Chart.js =================
const datasetsAndalucia = Object.keys(datosAndalucia).map(partido => ({
  type: 'line',
  label: partido,
  data: datosAndalucia[partido],
  borderColor: coloresPartidosAndalucia[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresPartidosAndalucia[partido],
  datalabels: {
    display: true,
    color: coloresPartidosAndalucia[partido],
    font: { weight: 'bold', size: 12 },
    formatter: v => v != null ? (partido === 'Jaén Merece Más' ? v.toLocaleString() : v.toFixed(2)+'%') : ''
  }
}));

// ================= Crear gráfico combinado =================
const ctxAndalucia = document.getElementById('andaluciaChart').getContext('2d');

new Chart(ctxAndalucia, {
  data: {
    labels: etiquetasAndalucia,
    datasets: datasetsAndalucia
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