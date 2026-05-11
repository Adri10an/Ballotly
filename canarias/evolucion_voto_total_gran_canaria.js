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
// ================= PSOE Gran Canaria =================
const datosPSOEGGranCanaria = [100663, 149183, 79644, 68014, 102891, 100525];
const etiquetasPSOEGGranCanaria = ['1983', '2007', '2011', '2015', '2019', '2023'];
const partidosPSOEGGranCanaria = ['PSOE','PSOE','PSOE','PSOE','PSOE','PSOE'];

const ctxPSOEGGranCanaria = document.getElementById('psoeGranCanariaChart').getContext('2d');

new Chart(ctxPSOEGGranCanaria, {
  data: {
    labels: etiquetasPSOEGGranCanaria,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPSOEGGranCanaria,
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
        data: datosPSOEGGranCanaria,
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
      id: 'etiquetaPartidoPSOEGGranCanaria',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSOEGGranCanaria.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSOEGGranCanaria[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PP Gran Canaria =================
const datosPPGGranCanaria = [73059, 134744, 156200, 79103, 60283, 76546];
const etiquetasPPGGranCanaria = ['1983', '2007', '2011', '2015', '2019', '2023'];
const partidosPPGGranCanaria = ['PP','PP','PP','PP','PP','PP'];

const ctxPPGGranCanaria = document.getElementById('ppGranCanariaChart').getContext('2d');

new Chart(ctxPPGGranCanaria, {
  data: {
    labels: etiquetasPPGGranCanaria,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPPGGranCanaria,
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
        data: datosPPGGranCanaria,
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
      id: 'etiquetaPartidoPPGGranCanaria',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPGGranCanaria.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPGGranCanaria[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= NC Gran Canaria =================
const datosNCGranCanaria = [46303, 53893, 71633, 63751, 52235];
const etiquetasNCGranCanaria = ['2007', '2011', '2015', '2019', '2023'];
const partidosNCGranCanaria = ['NC','NC','NC','NC','NC'];

const ctxNCGranCanaria = document.getElementById('ncGranCanariaChart').getContext('2d');

new Chart(ctxNCGranCanaria, {
  data: {
    labels: etiquetasNCGranCanaria,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosNCGranCanaria,
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
        data: datosNCGranCanaria,
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
      id: 'etiquetaPartidoNCGranCanaria',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosNCGranCanaria.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B8B00';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosNCGranCanaria[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CC Gran Canaria =================
const datosCCGranCanaria = [21338, 34931, 24305, 42507, 33305];
const etiquetasCCGranCanaria = ['2007', '2011', '2015', '2019', '2023'];
const partidosCCGranCanaria = ['CC','CC','CC','CC','CC'];

const ctxCCGranCanaria = document.getElementById('ccGranCanariaChart').getContext('2d');

new Chart(ctxCCGranCanaria, {
  data: {
    labels: etiquetasCCGranCanaria,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCCGranCanaria,
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
        data: datosCCGranCanaria,
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
      id: 'etiquetaPartidoCCGranCanaria',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCCGranCanaria.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#01ADD7';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCCGranCanaria[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= VOX Gran Canaria =================
const datosVOXGranCanaria = [1001, 9831, 35578];
const etiquetasVOXGranCanaria = ['2015', '2019', '2023'];
const partidosVOXGranCanaria = ['VOX','VOX','VOX'];

const ctxVOXGranCanaria = document.getElementById('voxGranCanariaChart').getContext('2d');

new Chart(ctxVOXGranCanaria, {
  data: {
    labels: etiquetasVOXGranCanaria,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosVOXGranCanaria,
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
        data: datosVOXGranCanaria,
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
      id: 'etiquetaPartidoVOXGranCanaria',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXGranCanaria.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXGranCanaria[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= DVC Gran Canaria =================
const datosDVCGranCanaria = [7455];
const etiquetasDVCGranCanaria = ['2023'];
const partidosDVCGranCanaria = ['DVC'];

const ctxDVCGranCanaria = document.getElementById('dvcGranCanariaChart').getContext('2d');

new Chart(ctxDVCGranCanaria, {
  data: {
    labels: etiquetasDVCGranCanaria,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosDVCGranCanaria,
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
        data: datosDVCGranCanaria,
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
      id: 'etiquetaPartidoDVCGranCanaria',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosDVCGranCanaria.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#38644D';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosDVCGranCanaria[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Podemos Gran Canaria =================
const datosPodemosGranCanaria = [66201, 32524, 14865];
const etiquetasPodemosGranCanaria = ['2015', '2019', '2023'];
const partidosPodemosGranCanaria = ['Podemos','Podemos','Podemos'];

const ctxPodemosGranCanaria = document.getElementById('podemosGranCanariaChart').getContext('2d');

new Chart(ctxPodemosGranCanaria, {
  data: {
    labels: etiquetasPodemosGranCanaria,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPodemosGranCanaria,
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
        data: datosPodemosGranCanaria,
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
      id: 'etiquetaPartidoPodemosGranCanaria',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosGranCanaria.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosGranCanaria[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UXGC Gran Canaria =================
const datosUXGCGranCanaria = [16760]; // votos totales
const etiquetasUXGCGranCanaria = ['2023'];
const partidosUXGCGranCanaria = ['UXGC'];

// Color UXGC
const colorUXGCGranCanaria = '#24611'; // color proporcionado

// Chart
const ctxUXGCGranCanaria = document.getElementById('uxgcGranCanariaChart').getContext('2d');

new Chart(ctxUXGCGranCanaria, {
  data: {
    labels: etiquetasUXGCGranCanaria,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUXGCGranCanaria,
        backgroundColor: 'rgba(36,96,17,0.7)',
        borderColor: colorUXGCGranCanaria,
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: colorUXGCGranCanaria,
          font: { weight: 'bold' },
          formatter: v => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosUXGCGranCanaria,
        borderColor: colorUXGCGranCanaria,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorUXGCGranCanaria
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
      id: 'etiquetaPartidoUXGCGranCanaria',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUXGCGranCanaria.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = colorUXGCGranCanaria;
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUXGCGranCanaria[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CS Gran Canaria =================
const datosCSGranCanaria = [24460, 32310, 1330];
const etiquetasCSGranCanaria = ['2015', '2019', '2023'];
const partidosCSGranCanaria = ['CS','CS','CS'];

const ctxCSGranCanaria = document.getElementById('csGranCanariaChart').getContext('2d');

new Chart(ctxCSGranCanaria, {
  data: {
    labels: etiquetasCSGranCanaria,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCSGranCanaria,
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
        data: datosCSGranCanaria,
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
      id: 'etiquetaPartidoCSGranCanaria',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSGranCanaria.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSGranCanaria[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CCN Gran Canaria =================
const datosCCNGranCanaria = [23615, 12602];
const etiquetasCCNGranCanaria = ['1983', '2007'];
const partidosCCNGranCanaria = ['CCN','CCN'];

// Color CCN
const colorCCNGranCanaria = '#B9BD3F';

// Chart
const ctxCCNGranCanaria = document.getElementById('ccnGranCanariaChart').getContext('2d');

new Chart(ctxCCNGranCanaria, {
  data: {
    labels: etiquetasCCNGranCanaria,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCCNGranCanaria,
        backgroundColor: 'rgba(185,189,63,0.7)',
        borderColor: colorCCNGranCanaria,
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: colorCCNGranCanaria,
          font: { weight: 'bold' },
          formatter: v => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCCNGranCanaria,
        borderColor: colorCCNGranCanaria,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorCCNGranCanaria
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
  plugins: [ChartDataLabels]
});

// ================= UPC Gran Canaria =================
const datosUPCGranCanaria = [24495];
const etiquetasUPCGranCanaria = ['1983'];
const partidosUPCGranCanaria = ['UPC'];

// Color UPC
const colorUPCGranCanaria = '#BA0033';

// Chart
const ctxUPCGranCanaria = document.getElementById('upcGranCanariaChart').getContext('2d');

new Chart(ctxUPCGranCanaria, {
  data: {
    labels: etiquetasUPCGranCanaria,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUPCGranCanaria,
        backgroundColor: 'rgba(186,0,51,0.7)',
        borderColor: colorUPCGranCanaria,
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: colorUPCGranCanaria,
          font: { weight: 'bold' },
          formatter: v => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosUPCGranCanaria,
        borderColor: colorUPCGranCanaria,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorUPCGranCanaria
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
  plugins: [ChartDataLabels]
});

// ================= CDS Gran Canaria =================
const datosCDSGranCanaria = [13561];
const etiquetasCDSGranCanaria = ['1983'];
const partidosCDSGranCanaria = ['CDS'];

// Color CDS
const colorCDSGranCanaria = '#00BFFF';

// Chart
const ctxCDSGranCanaria = document.getElementById('cdsGranCanariaChart').getContext('2d');

new Chart(ctxCDSGranCanaria, {
  data: {
    labels: etiquetasCDSGranCanaria,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCDSGranCanaria,
        backgroundColor: 'rgba(0,191,255,0.7)',
        borderColor: colorCDSGranCanaria,
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: colorCDSGranCanaria,
          font: { weight: 'bold' },
          formatter: v => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCDSGranCanaria,
        borderColor: colorCDSGranCanaria,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorCDSGranCanaria
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
  plugins: [ChartDataLabels]
});

// ================= IU/Podemos Gran Canaria =================
const datosIUGranCanaria = [2186, 5252, 7279, 2615];
const etiquetasIUGranCanaria = ['2007','2011','2015','2019'];
const partidosIUGranCanaria = ['IU','IU','IU','IU'];

// Color IU
const colorIUGranCanaria = '#B22222';

const ctxIUGranCanaria = document.getElementById('iuGranCanariaChart').getContext('2d');

new Chart(ctxIUGranCanaria, {
  data: {
    labels: etiquetasIUGranCanaria,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosIUGranCanaria,
        backgroundColor: 'rgba(178,34,34,0.7)',
        borderColor: colorIUGranCanaria,
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
        data: datosIUGranCanaria,
        borderColor: colorIUGranCanaria,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorIUGranCanaria
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
      id: 'etiquetaPartidoIUGranCanaria',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIUGranCanaria.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIUGranCanaria[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UPyD Gran Canaria =================
const datosUPyDGranCanaria = [4432, 3633];
const etiquetasUPyDGranCanaria = ['2011','2015'];
const partidosUPyDGranCanaria = ['UPyD','UPyD'];

// Color UPyD
const colorUPyDGranCanaria = '#FF60DA';

const ctxUPyDGranCanaria = document.getElementById('upydGranCanariaChart').getContext('2d');

new Chart(ctxUPyDGranCanaria, {
  data: {
    labels: etiquetasUPyDGranCanaria,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUPyDGranCanaria,
        backgroundColor: 'rgba(255,96,218,0.7)',
        borderColor: colorUPyDGranCanaria,
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: colorUPyDGranCanaria, 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosUPyDGranCanaria,
        borderColor: colorUPyDGranCanaria,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorUPyDGranCanaria
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
      id: 'etiquetaPartidoUPyDGranCanaria',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDGranCanaria.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = colorUPyDGranCanaria;
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDGranCanaria[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// Datos Gran Canaria por partido
const etiquetasGranCanaria = ['1983','2007','2011','2015','2019','2023'];

const datosGranCanaria = {
  'PSOE': [100663, 149183, 79644, 68014, 102891, 100525],
  'PP': [73059, 134744, 156200, 79103, 60283, 76546],
  'NC': [null, 46303, 53893, 71633, 63751, 52235],
  'CC': [null, 21338, 34931, 24305, 42507, 33305],
  'VOX': [null, null, null, 1001, 9831, 35578],
  'DVC': [null, null, null, null, null, 7455],
  'Podemos/IU': [null, null, null, 66201, 32524, 14865],
  'CS': [null, null, null, 24460, 32310, 1330],
  'CCN': [23615, 12602, null, null, null, null],
  'UPC': [24495, null, null, null, null, null],
  'CDS': [13561, null, null, null, null, null],
  'IU': [null, 2186, 5252, 7279, 2615, null],
  'UPyD': [null, null, 4432, 3633, null, null],
  'UXGC': [null, null, null, null, null, 16760]
};

const coloresPartidosGranCanaria = {
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
  'UPyD': '#FF60DA',
  'UXGC': '#24611'
};

const datasetsGranCanaria = Object.keys(datosGranCanaria).map(partido => ({
  type: 'line',
  label: partido,
  data: datosGranCanaria[partido],
  borderColor: coloresPartidosGranCanaria[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresPartidosGranCanaria[partido],
  datalabels: {
    display: true,
    color: coloresPartidosGranCanaria[partido],
    font: { weight: 'bold', size: 12 },
    formatter: v => v != null ? v.toLocaleString() : ''
  }
}));

const ctxGranCanaria = document.getElementById('votosTotalesGranCanariaChart').getContext('2d');

new Chart(ctxGranCanaria, {
  data: {
    labels: etiquetasGranCanaria,
    datasets: datasetsGranCanaria
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