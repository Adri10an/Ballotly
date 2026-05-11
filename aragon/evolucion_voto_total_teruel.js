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
// ================= PP Teruel =================
const datosPPTeruel = [24689, 23246, 26037, 35406, 33373, 28871, 26066, 29685, 20591, 17026, 22656,19287];
const etiquetasPPTeruel = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023','2026'];
const partidosPPTeruel = ['AP-PDP-UL','AP','PP','PP','PP','PP','PP','PP','PP','PP','PP','PP'];

const ctxPPTeruel = document.getElementById('ppTeruelChart').getContext('2d');

new Chart(ctxPPTeruel, {
  data: {
    labels: etiquetasPPTeruel,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPPTeruel,
        backgroundColor: 'rgba(0,0,255,0.7)', // azul PP
        borderColor: '#0000FF',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#00008B', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString('es-ES') // separador de miles
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPPTeruel,
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoPPTeruel',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPTeruel.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPTeruel[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PSOE Teruel =================
const datosPSOETeruel = [30978, 30507, 31570, 27477, 26295, 29895, 30325, 21967, 16414, 22228, 16591,15838];
const etiquetasPSOETeruel = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023','2026'];
const partidosPSOETeruel = ['PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE'];

const ctxPSOETeruel = document.getElementById('psoeTeruelChart').getContext('2d');

new Chart(ctxPSOETeruel, {
  data: {
    labels: etiquetasPSOETeruel,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPSOETeruel,
        backgroundColor: 'rgba(255,0,0,0.7)', // rojo PSOE
        borderColor: '#FF0000',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#FF0000', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString('es-ES') // separador de miles
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPSOETeruel,
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoPSOETeruel',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSOETeruel.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSOETeruel[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Aragón Existe Teruel =================
const datosAragonexisteTeruel = [15249,8632];
const etiquetasAragonexisteTeruel = ['2023','2026'];
const partidosAragonexisteTeruel = ['Aragón Existe','Aragón Existe'];

const ctxAragonexisteTeruel = document.getElementById('aragonexisteTeruelChart').getContext('2d');

new Chart(ctxAragonexisteTeruel, {
  data: {
    labels: etiquetasAragonexisteTeruel,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosAragonexisteTeruel,
        backgroundColor: 'rgba(3,114,82,0.7)', // verde Aragón Existe
        borderColor: '#037252',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#037252', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString('es-ES') 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosAragonexisteTeruel,
        borderColor: '#037252',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 5,
        pointBackgroundColor: '#037252'
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoAragonexisteTeruel',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosAragonexisteTeruel.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#037252';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosAragonexisteTeruel[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= VOX Teruel =================
const datosVOXTeruel = [
  3371,  // 2019
  7696, // 2023
  13633, //2026
];
const etiquetasVOXTeruel = ['2019','2023','2026'];
const partidosVOXTeruel = ['VOX','VOX','VOX'];

const ctxVOXTeruel = document.getElementById('voxTeruelChart').getContext('2d');

new Chart(ctxVOXTeruel, {
  data: {
    labels: etiquetasVOXTeruel,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosVOXTeruel,
        backgroundColor: 'rgba(0,128,0,0.7)', // verde VOX
        borderColor: '#008000',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#006400', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString('es-ES') // separador de miles
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosVOXTeruel,
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoVOXTeruel',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXTeruel.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXTeruel[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PAR Teruel =================
const datosPARTeruel = [
  18806,  // 1983
  15101,  // 1987
  16386,  // 1991
  15863,  // 1995
  14707,  // 1999
  15662,  // 2003
  16067,  // 2007
  13264,  // 2011
  10261,  // 2015
  7337,   // 2019
  4817,    // 2023
  2899, //2026
];
const etiquetasPARTeruel = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023','2026'];
const partidosPARTeruel = ['PAR','PAR','PAR','PAR','PAR','PAR','PAR','PAR','PAR','PAR','PAR','PAR'];

const ctxPARTeruel = document.getElementById('parTeruelChart').getContext('2d');

new Chart(ctxPARTeruel, {
  data: {
    labels: etiquetasPARTeruel,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPARTeruel,
        backgroundColor: 'rgba(201,159,0,0.7)', // color PAR
        borderColor: '#c99f00',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#c99f00', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString('es-ES') // separador de miles
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPARTeruel,
        borderColor: '#c99f00',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#c99f00'
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoPARTeruel',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPARTeruel.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#c99f00';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPARTeruel[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= IU Teruel =================
const datosIUTeruel = [
  545,    // 1983
  2454,   // 1987
  2517,   // 1991
  4847,   // 1995
  3417,   // 1999
  3163,   // 2003
  4178,   // 2007
  5236,   // 2011
  3471,   // 2015
  2235,   // 2019
  1602,   // 2023
  1203, //2026
];
const etiquetasIUTeruel = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023','2026'];
const partidosIUTeruel = ['IU','IU','IU','IU','IU','IU','IU','IU','IU','IU','IU','IU'];

const ctxIUTeruel = document.getElementById('iuTeruelChart').getContext('2d');

new Chart(ctxIUTeruel, {
  data: {
    labels: etiquetasIUTeruel,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosIUTeruel,
        backgroundColor: 'rgba(178,34,34,0.7)', // color IU
        borderColor: '#B22222',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#B22222', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString('es-ES')
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosIUTeruel,
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
      id: 'etiquetaPartidoIUTeruel',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIUTeruel.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#B22222';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIUTeruel[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CHA Teruel =================
const datosCHATeruel = [
  412,    // 1987
  1372,   // 1991
  1830,   // 1995
  3599,   // 1999
  6515,   // 2003
  4959,   // 2007
  4059,   // 2011
  2570,   // 2015
  3296,   // 2019
  1442,   // 2023
  2599, //2026
];
const etiquetasCHATeruel = ['1987','1991','1995','1999','2003','2007','2011','2015','2019','2023','2026'];
const partidosCHATeruel = ['CHA','CHA','CHA','CHA','CHA','CHA','CHA','CHA','CHA','CHA','CHA'];

const ctxCHATeruel = document.getElementById('chaTeruelChart').getContext('2d');

new Chart(ctxCHATeruel, {
  data: {
    labels: etiquetasCHATeruel,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCHATeruel,
        backgroundColor: 'rgba(173,0,23,0.7)', // color CHA
        borderColor: '#ad0017',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#ad0017', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString('es-ES')
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCHATeruel,
        borderColor: '#ad0017',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#ad0017'
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoCHATeruel',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCHATeruel.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#ad0017';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCHATeruel[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Podemos/IU Teruel =================
const datosPodemosTeruel = [
  12023,  // 2015
  4193,   // 2019
  1367,   // 2023
  327, //2026
];
const etiquetasPodemosTeruel = ['2015','2019','2023','2026'];
const partidosPodemosTeruel = ['Podemos','Podemos','Podemos','Podemos'];

const ctxPodemosTeruel = document.getElementById('podemosTeruelChart').getContext('2d');

new Chart(ctxPodemosTeruel, {
  data: {
    labels: etiquetasPodemosTeruel,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPodemosTeruel,
        backgroundColor: 'rgba(128,0,128,0.7)', // morado Podemos/IU
        borderColor: '#800080',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#4B0082', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString('es-ES')
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPodemosTeruel,
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoPodemosTeruel',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosTeruel.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosTeruel[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CS Teruel =================
const datosCSTeruel = [
  5396,   // 2015
  9789,   // 2019
  362     // 2023
];
const etiquetasCSTeruel = ['2015','2019','2023'];
const partidosCSTeruel = ['CS','CS','CS'];

const ctxCSTeruel = document.getElementById('csTeruelChart').getContext('2d');

new Chart(ctxCSTeruel, {
  data: {
    labels: etiquetasCSTeruel,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCSTeruel,
        backgroundColor: 'rgba(255,140,0,0.7)', // naranja CS
        borderColor: '#FF8C00',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#FF4500', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString('es-ES')
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCSTeruel,
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoCSTeruel',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSTeruel.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSTeruel[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CDS Teruel =================
const datosCDSTeruel = [
  3343,   // 1983
  8668,   // 1987
  4175    // 1991
];
const etiquetasCDSTeruel = ['1983','1987','1991'];
const partidosCDSTeruel = ['CDS','CDS','CDS'];

const ctxCDSTeruel = document.getElementById('cdsTeruelChart').getContext('2d');

new Chart(ctxCDSTeruel, {
  data: {
    labels: etiquetasCDSTeruel,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCDSTeruel,
        backgroundColor: 'rgba(0,191,255,0.7)', // azul CDS
        borderColor: '#00BFFF',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#1E90FF', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString('es-ES')
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCDSTeruel,
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
      id: 'etiquetaPartidoCDSTeruel',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSTeruel.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1E90FF';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSTeruel[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PCE Teruel =================
const datosPCETwitter = [
  1412   // 1983
];
const etiquetasPCETwitter = ['1983'];
const partidosPCETwitter = ['PCE'];

const ctxPCETwitter = document.getElementById('pceTeruelChart').getContext('2d');

new Chart(ctxPCETwitter, {
  data: {
    labels: etiquetasPCETwitter,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPCETwitter,
        backgroundColor: 'rgba(64,11,13,0.7)', // rojo PCE
        borderColor: '#400b0d',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end',
          align: 'top',
          color: '#400b0d',
          font: { weight: 'bold' },
          formatter: (v) => v.toLocaleString('es-ES')
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPCETwitter,
        borderColor: '#400b0d',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#400b0d'
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
      id: 'etiquetaPartidoPCETwitter',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPCETwitter.forEach((_, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#400b0d';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPCETwitter[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= SALF Teruel =================
const datosSALFTeruel = [1438];
const etiquetasSALFTeruel = ['2026'];
const partidosSALFTeruel = ['SALF'];

const ctxSALFTeruel = document.getElementById('salfTeruelChart').getContext('2d');

new Chart(ctxSALFTeruel, {
  data: {
    labels: etiquetasSALFTeruel,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosSALFTeruel,
        backgroundColor: 'rgba(0,90,150,0.7)', // azul SALF
        borderColor: '#005a96',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end',
          align: 'top',
          color: '#005a96',
          font: { weight: 'bold' },
          formatter: (v) => v.toLocaleString('es-ES')
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosSALFTeruel,
        borderColor: '#005a96',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#005a96'
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
      id: 'etiquetaPartidoSALFTeruel',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosSALFTeruel.forEach((_, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#005a96';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosSALFTeruel[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UPyD Teruel =================
const datosUPyDTeruel = [
  792,   // 2011
];
const etiquetasUPyDTeruel = ['2011'];
const partidosUPyDTeruel = ['UPyD'];

const ctxUPyDTeruel = document.getElementById('upydTeruelChart').getContext('2d');

new Chart(ctxUPyDTeruel, {
  data: {
    labels: etiquetasUPyDTeruel,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUPyDTeruel,
        backgroundColor: 'rgba(255,96,218,0.7)', // color UPyD
        borderColor: '#ff60da',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#ff60da', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString('es-ES')
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosUPyDTeruel,
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
      id: 'etiquetaPartidoUPyDTeruel',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDTeruel.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#ff60da';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDTeruel[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

  // Datos Teruel por partido
  const etiquetasTeruel = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023','2026'];

  const datosTeruel = {
    'PP':             [24689, 23246, 26037, 35406, 33373, 28871, 26066, 29685, 20591, 17026, 22656,19287],
    'PSOE':           [30978, 30507, 31570, 27477, 26295, 29895, 30325, 21967, 16414, 22228, 16591,15838],
    'VOX':            [null,null,null,null,null,null,null,null,null,3371,7696,13633],
    'CS':             [null,null,null,null,null,null,null,null,5396,9789,362],
    'Podemos/IU':     [null,null,null,null,null,null,null,null,12023,4193,1367,327],
    'CDS':            [3343, 8668, 4175,null,null,null,null,null,null,null,null],
    'IU':             [545,2454,2517,4847,3417,3163,4178,5236,3471,2235,1602,1203],
    'SALF':             [null,null,null,null,null,null,null,null,null,null,null,1438],
    'UPyD':           [null,null,null,null,null,null,null,792,null,null,null],
    'CHA':            [null,412,1372,1830,3599,6515,4959,4059,2570,3296,1442,2599],
    'PAR':            [18806,15101,16386,15863,14707,15662,16067,13264,10261,7337,4817,2899],
    'Aragón Existe':  [null,null,null,null,null,null,null,null,null,null,15249,8632],
    'PCE':      [1412, null, null, null,null,null,null,null,null,null,null],
  };

  const coloresPartidosTeruel = {
    'PP': '#0000FF',
    'PSOE': '#FF0000',
    'VOX': '#008000',
    'CS': '#FF8C00',
    'Podemos/IU': '#800080',
    'CDS': '#00BFFF',
    'IU': '#B22222',
    'SALF': '#005a96',
    'UPyD': '#ff60da',
    'CHA': '#000000',
    'PAR': '#c99f00',
    'Aragón Existe': '#037252',
    'PCE':'#400b0d',
  };

  const datasetsTeruel = Object.keys(datosTeruel).map(partido => ({
    type: 'line',
    label: partido,
    data: datosTeruel[partido],
    borderColor: coloresPartidosTeruel[partido],
    backgroundColor: 'transparent',
    fill: false,
    tension: 0.3,
    spanGaps: true,
    pointRadius: 4,
    pointBackgroundColor: coloresPartidosTeruel[partido],
    datalabels: { 
      display: true,
      color: coloresPartidosTeruel[partido],
      font: { weight: 'bold', size: 12 },
      formatter: v => v != null ? v.toLocaleString('es-ES') : ''
    }
  }));

  const ctxTeruel = document.getElementById('votosTotalesTeruelChart').getContext('2d');

  new Chart(ctxTeruel, {
    data: {
      labels: etiquetasTeruel,
      datasets: datasetsTeruel
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