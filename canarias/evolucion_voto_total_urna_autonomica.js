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
// ================= PSOE Urna Autonómica =================
const datosPSOEUrnaAutonomica = [262251, 295969];
const etiquetasPSOEUrnaAutonomica = ['2019', '2023'];
const partidosPSOEUrnaAutonomica = ['PSOE','PSOE'];

const ctxPSOEUrnaAutonomica = document.getElementById('psoeUrnaAutonomicaChart').getContext('2d');

new Chart(ctxPSOEUrnaAutonomica, {
  data: {
    labels: etiquetasPSOEUrnaAutonomica,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPSOEUrnaAutonomica,
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
        data: datosPSOEUrnaAutonomica,
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
      id: 'etiquetaPartidoPSOEUrnaAutonomica',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSOEUrnaAutonomica.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF0000';
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

// ================= PP Urna Autonómica =================
const datosPPUrnaAutonomica = [130090, 183761];
const etiquetasPPUrnaAutonomica = ['2019', '2023'];
const partidosPPUrnaAutonomica = ['PP','PP'];

const ctxPPUrnaAutonomica = document.getElementById('ppUrnaAutonomicaChart').getContext('2d');

new Chart(ctxPPUrnaAutonomica, {
  data: {
    labels: etiquetasPPUrnaAutonomica,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPPUrnaAutonomica,
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
        data: datosPPUrnaAutonomica,
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

// ================= CC Urna Autonómica =================
const datosCCUrnaAutonomica = [207844, 175198];
const etiquetasCCUrnaAutonomica = ['2019', '2023'];
const partidosCCUrnaAutonomica = ['CC','CC'];

const ctxCCUrnaAutonomica = document.getElementById('ccUrnaAutonomicaChart').getContext('2d');

new Chart(ctxCCUrnaAutonomica, {
  data: {
    labels: etiquetasCCUrnaAutonomica,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCCUrnaAutonomica,
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
        data: datosCCUrnaAutonomica,
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
      id: 'etiquetaPartidoCCUrnaAutonomica',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCCUrnaAutonomica.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#01ADD7';
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

// ================= VOX Urna Autonómica =================
const datosVOXUrnaAutonomica = [21948, 71887];
const etiquetasVOXUrnaAutonomica = ['2019', '2023'];
const partidosVOXUrnaAutonomica = ['VOX','VOX'];

const ctxVOXUrnaAutonomica = document.getElementById('voxUrnaAutonomicaChart').getContext('2d');

new Chart(ctxVOXUrnaAutonomica, {
  data: {
    labels: etiquetasVOXUrnaAutonomica,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosVOXUrnaAutonomica,
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
        data: datosVOXUrnaAutonomica,
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

// ================= NC Urna Autonómica =================
const datosNCUrnaAutonomica = [82478, 65028];
const etiquetasNCUrnaAutonomica = ['2019', '2023'];
const partidosNCUrnaAutonomica = ['NC','NC'];

const ctxNCUrnaAutonomica = document.getElementById('ncaUrnaAutonomicaChart').getContext('2d');

new Chart(ctxNCUrnaAutonomica, {
  data: {
    labels: etiquetasNCUrnaAutonomica,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosNCUrnaAutonomica,
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
        data: datosNCUrnaAutonomica,
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
      id: 'etiquetaPartidoNCUrnaAutonomica',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosNCUrnaAutonomica.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B8B00';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosNCUrnaAutonomica[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Drago Urna Autonómica =================
const datosDragoUrnaAutonomica = [30392];
const etiquetasDragoUrnaAutonomica = ['2023'];
const partidosDragoUrnaAutonomica = ['Drago'];

const ctxDragoUrnaAutonomica = document.getElementById('dragoUrnaAutonomicaChart').getContext('2d');

new Chart(ctxDragoUrnaAutonomica, {
  data: {
    labels: etiquetasDragoUrnaAutonomica,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosDragoUrnaAutonomica,
        backgroundColor: 'rgba(131,178,174,0.7)', // color Drago
        borderColor: '#83B2AE',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#83B2AE', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() // separador de miles
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosDragoUrnaAutonomica,
        borderColor: '#83B2AE',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#83B2AE'
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
      id: 'etiquetaPartidoDragoUrnaAutonomica',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosDragoUrnaAutonomica.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#83B2AE';
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

// ================= Podemos Urna Autonómica =================
const datosPodemosUrnaAutonomica = [75781, 29556];
const etiquetasPodemosUrnaAutonomica = ['2019', '2023'];
const partidosPodemosUrnaAutonomica = ['Podemos','Podemos'];

const ctxPodemosUrnaAutonomica = document.getElementById('podemosUrnaAutonomicaChart').getContext('2d');

new Chart(ctxPodemosUrnaAutonomica, {
  data: {
    labels: etiquetasPodemosUrnaAutonomica,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPodemosUrnaAutonomica,
        backgroundColor: 'rgba(128,0,128,0.7)', // morado Podemos
        borderColor: '#800080',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#4B0082', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() // separador de miles
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
const datosCSUrnaAutonomica = [61683, 3548];
const etiquetasCSUrnaAutonomica = ['2019', '2023'];
const partidosCSUrnaAutonomica = ['CS','CS'];

const ctxCSUrnaAutonomica = document.getElementById('csUrnaAutonomicaChart').getContext('2d');

new Chart(ctxCSUrnaAutonomica, {
  data: {
    labels: etiquetasCSUrnaAutonomica,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCSUrnaAutonomica,
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
const datosIUUrnaAutonomica = [8621];
const etiquetasIUUrnaAutonomica = ['2019'];
const partidosIUUrnaAutonomica = ['IU'];

// Color IU
const colorIUUrnaAutonomica = '#B22222';

const ctxIUUrnaAutonomica = document.getElementById('iuUrnaAutonomicaChart').getContext('2d');

new Chart(ctxIUUrnaAutonomica, {
  data: {
    labels: etiquetasIUUrnaAutonomica,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosIUUrnaAutonomica,
        backgroundColor: 'rgba(178,34,34,0.7)', // rojo oscuro IU
        borderColor: colorIUUrnaAutonomica,
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
        data: datosIUUrnaAutonomica,
        borderColor: colorIUUrnaAutonomica,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorIUUrnaAutonomica
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
      id: 'etiquetaPartidoIUUrnaAutonomica',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIUUrnaAutonomica.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIUUrnaAutonomica[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// Datos Urna Autonómica por partido
const etiquetasUrnaAutonomica = ['2019','2023'];

const datosUrnaAutonomica = {
  'PSOE': [262251, 295969],
  'PP': [130090, 183761],
  'CC': [207844, 175198],
  'VOX': [21948, 71887],
  'NC': [82478, 65028],
  'Drago': [null, 30392],
  'Podemos': [75781, 29556],
  'CS': [61683, 3548],
  'IU': [8621, null]
};

const coloresPartidosUrnaAutonomica = {
  'PSOE': '#FF0000',
  'PP': '#0000FF',
  'CC': '#01ADD7',
  'VOX': '#008000',
  'NC': '#81C03B',
  'Drago': '#83B2AE',
  'Podemos': '#800080',
  'CS': '#FF8C00',
  'IU': '#B22222'
};

const datasetsUrnaAutonomica = Object.keys(datosUrnaAutonomica).map(partido => ({
  type: 'line',
  label: partido,
  data: datosUrnaAutonomica[partido],
  borderColor: coloresPartidosUrnaAutonomica[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresPartidosUrnaAutonomica[partido],
  datalabels: {
    display: true,
    color: coloresPartidosUrnaAutonomica[partido],
    font: { weight: 'bold', size: 12 },
    formatter: v => v != null ? v.toLocaleString() : ''
  }
}));

const ctxUrnaAutonomica = document.getElementById('votosTotalesUrnaAutonomicaChart').getContext('2d');

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