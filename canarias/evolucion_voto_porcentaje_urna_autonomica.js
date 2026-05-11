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
// Datos PSOE Urna Autonómica (porcentaje)
const datosPSOEUrnaAutonomica = [29.43, 32.96];
const etiquetasPSOEUrnaAutonomica = ['2019', '2023'];
const partidosPSOEUrnaAutonomica = ['PSOE', 'PSOE'];

// Color PSOE
const colorPSOEUrnaAutonomica = '#FF0000';

// Chart
const ctxPSOEUrnaAutonomica = document.getElementById('psoeUrnaAutonomicaChart').getContext('2d');

new Chart(ctxPSOEUrnaAutonomica, {
  data: {
    labels: etiquetasPSOEUrnaAutonomica,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPSOEUrnaAutonomica,
        backgroundColor: 'rgba(255,0,0,0.7)', // rojo PSOE
        borderColor: colorPSOEUrnaAutonomica,
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
        data: datosPSOEUrnaAutonomica,
        borderColor: colorPSOEUrnaAutonomica,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorPSOEUrnaAutonomica
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
      id: 'etiquetaPartidoPSOEUrnaAutonomica',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSOEUrnaAutonomica.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#B22222';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSOEUrnaAutonomica[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// Datos PP Urna Autonómica (porcentaje)
const datosPPUrnaAutonomica = [14.60, 20.46];
const etiquetasPPUrnaAutonomica = ['2019', '2023'];
const partidosPPUrnaAutonomica = ['PP', 'PP'];

// Color PP
const colorPPUrnaAutonomica = '#0000FF';

// Chart
const ctxPPUrnaAutonomica = document.getElementById('ppUrnaAutonomicaChart').getContext('2d');

new Chart(ctxPPUrnaAutonomica, {
  data: {
    labels: etiquetasPPUrnaAutonomica,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPPUrnaAutonomica,
        backgroundColor: 'rgba(0,0,255,0.7)', // azul PP
        borderColor: colorPPUrnaAutonomica,
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
        data: datosPPUrnaAutonomica,
        borderColor: colorPPUrnaAutonomica,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorPPUrnaAutonomica
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
      id: 'etiquetaPartidoPPUrnaAutonomica',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPUrnaAutonomica.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPUrnaAutonomica[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// Datos CC Urna Autonómica (porcentaje)
const datosCCUrnaAutonomica = [23.32, 19.51];
const etiquetasCCUrnaAutonomica = ['2019', '2023'];
const partidosCCUrnaAutonomica = ['CC', 'CC'];

// Color CC
const colorCCUrnaAutonomica = '#01ADD7';

// Chart
const ctxCCUrnaAutonomica = document.getElementById('ccUrnaAutonomicaChart').getContext('2d');

new Chart(ctxCCUrnaAutonomica, {
  data: {
    labels: etiquetasCCUrnaAutonomica,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCCUrnaAutonomica,
        backgroundColor: 'rgba(1,173,215,0.7)', // celeste CC
        borderColor: colorCCUrnaAutonomica,
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
        data: datosCCUrnaAutonomica,
        borderColor: colorCCUrnaAutonomica,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorCCUrnaAutonomica
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
      id: 'etiquetaPartidoCCUrnaAutonomica',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCCUrnaAutonomica.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#017A9E';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCCUrnaAutonomica[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// Datos NCA Urna Autonómica (porcentaje)
const datosNCAUrnaAutonomica = [9.26, 7.24];
const etiquetasNCAUrnaAutonomica = ['2019', '2023'];
const partidosNCAUrnaAutonomica = ['NCA', 'NCA'];

// Color NCA
const colorNCAUrnaAutonomica = '#81C03B';

// Chart
const ctxNCAUrnaAutonomica = document.getElementById('ncaUrnaAutonomicaChart').getContext('2d');

new Chart(ctxNCAUrnaAutonomica, {
  data: {
    labels: etiquetasNCAUrnaAutonomica,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosNCAUrnaAutonomica,
        backgroundColor: 'rgba(129,192,59,0.7)', // verde NCA
        borderColor: colorNCAUrnaAutonomica,
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
        data: datosNCAUrnaAutonomica,
        borderColor: colorNCAUrnaAutonomica,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorNCAUrnaAutonomica
      }
    ]
  },
  options: {
    responsive: true,
    animation: { duration: 1500, easing: 'easeOutBounce' },
    plugins: {
      legend: { position: 'top', labels: { color: '#333' }},
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
      id: 'etiquetaPartidoNCAUrnaAutonomica',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosNCAUrnaAutonomica.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#5B7A2C';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosNCAUrnaAutonomica[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// Datos VOX Urna Autonómica (porcentaje)
const datosVOXUrnaAutonomica = [2.46, 8.01];
const etiquetasVOXUrnaAutonomica = ['2019', '2023'];
const partidosVOXUrnaAutonomica = ['VOX', 'VOX'];

// Color VOX
const colorVOXUrnaAutonomica = '#008000';

// Chart
const ctxVOXUrnaAutonomica = document.getElementById('voxUrnaAutonomicaChart').getContext('2d');

new Chart(ctxVOXUrnaAutonomica, {
  data: {
    labels: etiquetasVOXUrnaAutonomica,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosVOXUrnaAutonomica,
        backgroundColor: 'rgba(0,128,0,0.7)', // verde VOX
        borderColor: colorVOXUrnaAutonomica,
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
        data: datosVOXUrnaAutonomica,
        borderColor: colorVOXUrnaAutonomica,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorVOXUrnaAutonomica
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
      id: 'etiquetaPartidoVOXUrnaAutonomica',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXUrnaAutonomica.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXUrnaAutonomica[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Podemos Urna Autonómica =================
const datosPodemosUrnaAutonomica = [8.50, 3.29];
const etiquetasPodemosUrnaAutonomica = ['2019', '2023'];
const partidosPodemosUrnaAutonomica = ['Podemos', 'Podemos'];

// Chart
const ctxPodemosUrnaAutonomica = document.getElementById('podemosUrnaAutonomicaChart').getContext('2d');

new Chart(ctxPodemosUrnaAutonomica, {
  data: {
    labels: etiquetasPodemosUrnaAutonomica,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPodemosUrnaAutonomica,
        backgroundColor: 'rgba(128, 0, 128, 0.7)', // morado Podemos
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
        data: datosPodemosUrnaAutonomica,
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
      id: 'etiquetaPartidoPodemosUrnaAutonomica',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosUrnaAutonomica.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosUrnaAutonomica[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CS Urna Autonómica =================
const datosCSUrnaAutonomica = [6.92, 0.40];
const etiquetasCSUrnaAutonomica = ['2019', '2023'];
const partidosCSUrnaAutonomica = ['CS', 'CS'];

const ctxCSUrnaAutonomica = document.getElementById('csUrnaAutonomicaChart').getContext('2d');

new Chart(ctxCSUrnaAutonomica, {
  data: {
    labels: etiquetasCSUrnaAutonomica,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCSUrnaAutonomica,
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
        data: datosCSUrnaAutonomica,
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
      id: 'etiquetaPartidoCSUrnaAutonomica',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSUrnaAutonomica.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSUrnaAutonomica[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= IU Urna Autonómica =================
const datosIUErnaAutonomica = [0.97];
const etiquetasIUErnaAutonomica = ['2019'];
const partidosIUErnaAutonomica = ['IU'];

const ctxIUErnaAutonomica = document.getElementById('iuUrnaAutonomicaChart').getContext('2d');

new Chart(ctxIUErnaAutonomica, {
  data: {
    labels: etiquetasIUErnaAutonomica,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosIUErnaAutonomica,
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
        data: datosIUErnaAutonomica,
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
      id: 'etiquetaPartidoIUErnaAutonomica',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIUErnaAutonomica.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIUErnaAutonomica[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Drago Urna Autonómica =================
const datosDragoUrnaAutonomica = [3.38];
const etiquetasDragoUrnaAutonomica = ['2023'];
const partidosDragoUrnaAutonomica = ['Drago'];

// Color Drago
const colorDragoUrnaAutonomica = '#83B2AE';

const ctxDragoUrnaAutonomica = document.getElementById('dragoUrnaAutonomicaChart').getContext('2d');

new Chart(ctxDragoUrnaAutonomica, {
  data: {
    labels: etiquetasDragoUrnaAutonomica,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosDragoUrnaAutonomica,
        backgroundColor: 'rgba(131,178,174,0.7)', // color Drago
        borderColor: colorDragoUrnaAutonomica,
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#5E9994', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosDragoUrnaAutonomica,
        borderColor: colorDragoUrnaAutonomica,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorDragoUrnaAutonomica
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
      id: 'etiquetaPartidoDragoUrnaAutonomica',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosDragoUrnaAutonomica.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#5E9994';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosDragoUrnaAutonomica[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const etiquetasUrnaAutonomica = ['2019','2023'];

// Datos combinados por partido
const datosUrnaAutonomica = {
  'PSOE': [29.43, 32.96],
  'PP': [14.60, 20.46],
  'NC': [9.26, 7.24],
  'VOX': [2.46, 8.01],
  'CC': [23.32, 19.51],
  'Podemos': [8.50, 3.29],
  'CS': [6.92, 0.40],
  'IU': [0.97, null],
  'Drago': [null, 3.38]
};

// Colores de cada partido
const coloresUrnaAutonomica = {
  'PSOE': '#FF0000',
  'PP': '#0000FF',
  'NC': '#81C03B',
  'VOX': '#008000',
  'CC': '#01ADD7',
  'Podemos': '#800080',
  'CS': '#FF8C00',
  'IU': '#B22222',
  'Drago': '#83B2AE'
};

// Crear datasets para Chart.js
const datasetsUrnaAutonomica = Object.keys(datosUrnaAutonomica).map(partido => ({
  type: 'line',
  label: partido,
  data: datosUrnaAutonomica[partido],
  borderColor: coloresUrnaAutonomica[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresUrnaAutonomica[partido],
  datalabels: {
    display: true,
    color: coloresUrnaAutonomica[partido],
    font: { weight: 'bold', size: 12 },
    formatter: v => v != null ? v.toFixed(2) + '%' : ''
  }
}));

// Crear gráfico combinado Urna Autonómica
const ctxUrnaAutonomica = document.getElementById('urnaAutonomicaChart').getContext('2d');

new Chart(ctxUrnaAutonomica, {
  data: {
    labels: etiquetasUrnaAutonomica,
    datasets: datasetsUrnaAutonomica
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