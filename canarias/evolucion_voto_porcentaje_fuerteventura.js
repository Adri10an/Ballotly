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

// ================= PP Fuerteventura =================
const datosPPFuerteventura = [18.4, 23.89, 20.41, 13.55, 13.84, 19.26];
const etiquetasPPFuerteventura = ['1983', '2007', '2011', '2015', '2019', '2023'];
const partidosPPFuerteventura = ['PP', 'PP', 'PP', 'PP', 'PP', 'PP'];

const ctxPPFuerteventura = document.getElementById('ppFuerteventuraChart').getContext('2d');

new Chart(ctxPPFuerteventura, {
  data: {
    labels: etiquetasPPFuerteventura,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPPFuerteventura,
        backgroundColor: 'rgba(0,0,255,0.7)', // azul intenso (PP)
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

// ================= Asamblea Majorera Fuerteventura =================
const datosAMFuerteventura = [45.0];
const etiquetasAMFuerteventura = ['1983'];
const partidosAMFuerteventura = ['Asamblea Majorera'];

const ctxAMFuerteventura = document.getElementById('amFuerteventuraChart').getContext('2d');

new Chart(ctxAMFuerteventura, {
  data: {
    labels: etiquetasAMFuerteventura,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosAMFuerteventura,
        backgroundColor: 'rgba(47,36,132,0.7)', // morado AM
        borderColor: '#2F2484',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#2F2484', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosAMFuerteventura,
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
      id: 'etiquetaPartidoAMFuerteventura',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosAMFuerteventura.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#2F2484';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosAMFuerteventura[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PSOE Fuerteventura =================
const datosPSOEFuerteventura = [13.8, 32.28, 17.31, 17.19, 25.92, 21.54];
const etiquetasPSOEFuerteventura = ['1983', '2007', '2011', '2015', '2019', '2023'];
const partidosPSOEFuerteventura = ['PSOE', 'PSOE', 'PSOE', 'PSOE', 'PSOE', 'PSOE'];

const ctxPSOEFuerteventura = document.getElementById('psoeFuerteventuraChart').getContext('2d');

new Chart(ctxPSOEFuerteventura, {
  data: {
    labels: etiquetasPSOEFuerteventura,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPSOEFuerteventura,
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
      id: 'etiquetaPartidoPSOEFuerteventura',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSOEFuerteventura.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#B22222';
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

// ================= VOX Fuerteventura =================
const datosVOXFuerteventura = [3.28, 6.00];
const etiquetasVOXFuerteventura = ['2019', '2023'];
const partidosVOXFuerteventura = ['VOX', 'VOX'];

const ctxVOXFuerteventura = document.getElementById('voxFuerteventuraChart').getContext('2d');

new Chart(ctxVOXFuerteventura, {
  data: {
    labels: etiquetasVOXFuerteventura,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosVOXFuerteventura,
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

// ================= CS Fuerteventura =================
const datosCSFuerteventura = [4.09, 5.73];
const etiquetasCSFuerteventura = ['2015', '2019'];
const partidosCSFuerteventura = ['CS', 'CS'];

const ctxCSFuerteventura = document.getElementById('csFuerteventuraChart').getContext('2d');

new Chart(ctxCSFuerteventura, {
  data: {
    labels: etiquetasCSFuerteventura,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCSFuerteventura,
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

// ================= Podemos Fuerteventura =================
const datosPodemosFuerteventura = [12.17, 7.0, 2.16];
const etiquetasPodemosFuerteventura = ['2015', '2019', '2023'];
const partidosPodemosFuerteventura = ['Podemos', 'Podemos', 'Podemos'];

const ctxPodemosFuerteventura = document.getElementById('podemosFuerteventuraChart').getContext('2d');

new Chart(ctxPodemosFuerteventura, {
  data: {
    labels: etiquetasPodemosFuerteventura,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPodemosFuerteventura,
        backgroundColor: 'rgba(128, 0, 128, 0.7)', // morado Podemos Fuerteventura
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

// ================= Coalición Canaria Fuerteventura =================
const datosCCFuerteventura = [30.25, 33.73, 28.42, 25.15, 25.5];
const etiquetasCCFuerteventura = ['2007', '2011', '2015', '2019', '2023'];
const partidosCCFuerteventura = ['CC', 'CC', 'CC', 'CC', 'CC'];

const ctxCCFuerteventura = document.getElementById('ccFuerteventuraChart').getContext('2d');

new Chart(ctxCCFuerteventura, {
  data: {
    labels: etiquetasCCFuerteventura,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCCFuerteventura,
        backgroundColor: 'rgba(1, 173, 215, 0.7)', // celeste CC Fuerteventura
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

// ================= IU Fuerteventura =================
const datosIUFuerteventura = [0.48, 1.38, 1.03];
const etiquetasIUFuerteventura = ['2007', '2015', '2019'];
const partidosIUFuerteventura = ['IU', 'IU', 'IU'];

const ctxIUFuerteventura = document.getElementById('iuFuerteventuraChart').getContext('2d');

new Chart(ctxIUFuerteventura, {
  data: {
    labels: etiquetasIUFuerteventura,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosIUFuerteventura,
        backgroundColor: 'rgba(178,34,34,0.7)', // rojo IU Fuerteventura
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

 // ================= Nueva Canarias Fuerteventura =================
const datosNCFuerteventura = [2.01, 8.64, 6.75, 11.21, 11.05];
const etiquetasNCFuerteventura = ['2007', '2011', '2015', '2019', '2023'];
const partidosNCFuerteventura = ['NC', 'NC', 'NC', 'NC', 'NC'];

const ctxNCFuerteventura = document.getElementById('ncFuerteventuraChart').getContext('2d');

new Chart(ctxNCFuerteventura, {
  data: {
    labels: etiquetasNCFuerteventura,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosNCFuerteventura,
        backgroundColor: 'rgba(129,192,59,0.7)', // verde NC Fuerteventura
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
      id: 'etiquetaPartidoNCFuerteventura',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosNCFuerteventura.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#5B7A2C';
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

// ================= PP Majoreros Fuerteventura =================
const datosPPMajoFuerteventura = [12.84];
const etiquetasPPMajoFuerteventura = ['2011'];
const partidosPPMajoFuerteventura = ['PP Majoreros'];

const ctxPPMajoFuerteventura = document.getElementById('ppMajoFuerteventuraChart').getContext('2d');

new Chart(ctxPPMajoFuerteventura, {
  data: {
    labels: etiquetasPPMajoFuerteventura,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPPMajoFuerteventura,
        backgroundColor: 'rgba(179,145,106,0.7)', // color PP Majoreros
        borderColor: '#B3916A',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#8B6F4C', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPPMajoFuerteventura,
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
      id: 'etiquetaPartidoPPMajoFuerteventura',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPMajoFuerteventura.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B6F4C';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPMajoFuerteventura[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= AMF Fuerteventura =================
const datosAMFFuerteventura = [4.11, 7.33];
const etiquetasAMFFuerteventura = ['2015', '2023'];
const partidosAMFFuerteventura = ['AMF', 'AMF'];

const ctxAMFFuerteventura = document.getElementById('amfFuerteventuraChart').getContext('2d');

new Chart(ctxAMFFuerteventura, {
  data: {
    labels: etiquetasAMFFuerteventura,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosAMFFuerteventura,
        backgroundColor: 'rgba(20,30,108,0.7)', // color AMF
        borderColor: '#141E6C',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#0F174D', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
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
      id: 'etiquetaPartidoAMFFuerteventura',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosAMFFuerteventura.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#0F174D';
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

// ================= DVC Fuerteventura =================
const datosDVCFuerteventura = [4.3];
const etiquetasDVCFuerteventura = ['2023'];
const partidosDVCFuerteventura = ['DVC'];

const ctxDVCFuerteventura = document.getElementById('dvcFuerteventuraChart').getContext('2d');

new Chart(ctxDVCFuerteventura, {
  data: {
    labels: etiquetasDVCFuerteventura,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosDVCFuerteventura,
        backgroundColor: 'rgba(86,152,113,0.7)', // color DVC
        borderColor: '#569871',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#3F7A5A', 
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
      id: 'etiquetaPartidoDVCFuerteventura',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosDVCFuerteventura.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#3F7A5A';
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

// Datos CCN Fuerteventura (porcentaje)
const datosCCNFuerteventura = [5.28];
const etiquetasCCNFuerteventura = ['2007'];
const partidosCCNFuerteventura = ['CCN'];

// Color CCN
const colorCCNFuerteventura = '#B9BD3F';

// Chart
const ctxCCNFuerteventura = document.getElementById('ccnFuerteventuraChart').getContext('2d');

new Chart(ctxCCNFuerteventura, {
  data: {
    labels: etiquetasCCNFuerteventura,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCCNFuerteventura,
        backgroundColor: 'rgba(185,189,63,0.7)',
        borderColor: colorCCNFuerteventura,
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: colorCCNFuerteventura,
          font: { weight: 'bold' },
          formatter: v => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCCNFuerteventura,
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

// ================= CDS Fuerteventura =================
const datosCDSFuerteventura = [22.3];
const etiquetasCDSFuerteventura = ['1983'];
const partidosCDSFuerteventura = ['CDS'];

const ctxCDSFuerteventura = document.getElementById('cdsFuerteventuraChart').getContext('2d');

new Chart(ctxCDSFuerteventura, {
  data: {
    labels: etiquetasCDSFuerteventura,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCDSFuerteventura,
        backgroundColor: 'rgba(0,191,255,0.7)', // color CDS
        borderColor: '#00BFFF',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#009ACD', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
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
      id: 'etiquetaPartidoCDSFuerteventura',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSFuerteventura.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#009ACD';
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

// ================= UPyD Fuerteventura =================
const datosUPYDFuerteventura = [1.07, 0.76];
const etiquetasUPYDFuerteventura = ['2011', '2015'];
const partidosUPYDFuerteventura = ['UPyD', 'UPyD'];

const ctxUPYDFuerteventura = document.getElementById('upydFuerteventuraChart').getContext('2d');

new Chart(ctxUPYDFuerteventura, {
  data: {
    labels: etiquetasUPYDFuerteventura,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosUPYDFuerteventura,
        backgroundColor: 'rgba(255,96,218,0.7)', // color UPyD
        borderColor: '#FF60DA',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#D946B3', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosUPYDFuerteventura,
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
      id: 'etiquetaPartidoUPYDFuerteventura',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPYDFuerteventura.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#D946B3';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPYDFuerteventura[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Datos y colores de partidos de Fuerteventura =================
const etiquetasFuerteventura = [
  '1983','2007','2011','2015','2019','2023'
];

// Datos combinados por partido
const datosFuerteventura = {
  'PP': [18.4,23.89,20.41, 13.55, 13.84, 19.26],
  'PSOE': [13.8,32.28, 17.31,17.19, 25.92, 21.54],
  'Asamblea Majorera': [45.0, null, null, null, null, null],
  'VOX': [null, null, null, null, 3.28, 6.00],
  'CS': [null, null, null, 4.09, 5.73, null],
  'Podemos': [null, null, null, 12.17, 7.0, 2.16],
  'CC': [null, 30.25, 33.73, 28.42, 25.15, 25.5],
  'IU': [null, 0.48, null, 1.38, 1.03, null],
  'NC': [null, 2.01, 8.64, 6.75, 11.21, 11.05],
  'PP Majoreros': [null, null, 12.84, null, null, null],
  'AMF': [null, null, null, 4.11, null, 7.33],
  'DVC': [null, null, null, null, null, 4.3],
  'CDS': [22.3, null, null, null, null, null],
  'UPyD': [null, null, 1.07, 0.76, null, null],
  'CCN': [null,5.28,null,null,null,null]
};

// Colores de cada partido
const coloresFuerteventura = {
  'PP': '#0000FF',
  'PSOE': '#FF0000',
  'Asamblea Majorera': '#2F2484',
  'VOX': '#008000',
  'CS': '#FF8C00',
  'Podemos': '#800080',
  'CC': '#01ADD7',
  'IU': '#B22222',
  'NC': '#81C03B',
  'PP Majoreros': '#B3916A',
  'AMF': '#141E6C',
  'DVC': '#569871',
  'CDS': '#00BFFF',
  'UPyD': '#FF60DA',
  'CCN': '#B9BD3F'
};

// Crear datasets para Chart.js
const datasetsFuerteventura = Object.keys(datosFuerteventura).map(partido => ({
  type: 'line',
  label: partido,
  data: datosFuerteventura[partido],
  borderColor: coloresFuerteventura[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresFuerteventura[partido],
  datalabels: {
    display: true,
    color: coloresFuerteventura[partido],
    font: { weight: 'bold', size: 12 },
    formatter: v => v != null ? v.toFixed(2) + '%' : ''
  }
}));

// Crear el gráfico combinado
const ctxFuerteventura = document.getElementById('fuerteventuraChart').getContext('2d');

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