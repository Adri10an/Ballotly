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
// ================= PP Huesca =================
const datosPPHuesca = [31470, 17675, 23507, 41878, 40293, 37479, 35694, 44320, 29021, 23738, 39161,34541];
const etiquetasPPHuesca = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023','2026'];
const partidosPPHuesca = ['AP-PDP-UL','AP','PP','PP','PP','PP','PP','PP','PP','PP','PP','PP'];

const ctxPPHuesca = document.getElementById('ppHuescaChart').getContext('2d');

new Chart(ctxPPHuesca, {
  data: {
    labels: etiquetasPPHuesca,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPPHuesca,
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
        data: datosPPHuesca,
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
      id: 'etiquetaPartidoPPHuesca',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPHuesca.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPHuesca[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PSOE Huesca =================
const datosPSOEHuesca = [57033, 42097, 45776, 39997, 40709, 53486, 54128, 40209, 29366, 38011, 33306,28066];
const etiquetasPSOEHuesca = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023','2026'];
const partidosPSOEHuesca = ['PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE'];

const ctxPSOEHuesca = document.getElementById('psoeHuescaChart').getContext('2d');

new Chart(ctxPSOEHuesca, {
  data: {
    labels: etiquetasPSOEHuesca,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPSOEHuesca,
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
        data: datosPSOEHuesca,
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
      id: 'etiquetaPartidoPSOEHuesca',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSOEHuesca.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSOEHuesca[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= VOX Huesca =================
const datosVOXHuesca = [
  6037,  // 2019
  11244, // 2023
  19721, //2026
];
const etiquetasVOXHuesca = ['2019','2023','2026'];
const partidosVOXHuesca = ['VOX','VOX','VOX'];

const ctxVOXHuesca = document.getElementById('voxHuescaChart').getContext('2d');

new Chart(ctxVOXHuesca, {
  data: {
    labels: etiquetasVOXHuesca,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosVOXHuesca,
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
        data: datosVOXHuesca,
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
      id: 'etiquetaPartidoVOXHuesca',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXHuesca.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXHuesca[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CHA Huesca =================
const datosCHAHuesca = [
  2047,  // 1987
  3616,  // 1991
  5141,  // 1995
  10739, // 1999
  12550, // 2003
  9151,  // 2007
  7430,  // 2011
  3429,  // 2015
  5073,  // 2019
  6075,   // 2023
  10354, //2026
];
const etiquetasCHAHuesca = ['1987','1991','1995','1999','2003','2007','2011','2015','2019','2023','2026'];
const partidosCHAHuesca = ['CHA','CHA','CHA','CHA','CHA','CHA','CHA','CHA','CHA','CHA','CHA'];

const ctxCHAHuesca = document.getElementById('chaHuescaChart').getContext('2d');

new Chart(ctxCHAHuesca, {
  data: {
    labels: etiquetasCHAHuesca,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCHAHuesca,
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
        data: datosCHAHuesca,
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
      id: 'etiquetaPartidoCHAHuesca',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCHAHuesca.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#ad0017';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCHAHuesca[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Podemos/IU Huesca =================
const datosPodemosHuesca = [
  20240,  // 2015
  9261,   // 2019
  4326,   // 2023
  824, // 2026
];
const etiquetasPodemosHuesca = ['2015','2019','2023','2026'];
const partidosPodemosHuesca = ['Podemos','Podemos','Podemos','Podemos'];

const ctxPodemosHuesca = document.getElementById('podemosHuescaChart').getContext('2d');

new Chart(ctxPodemosHuesca, {
  data: {
    labels: etiquetasPodemosHuesca,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPodemosHuesca,
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
        data: datosPodemosHuesca,
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
      id: 'etiquetaPartidoPodemosHuesca',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosHuesca.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosHuesca[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PAR Huesca =================
const datosPARHuesca = [
  15242,  // 1983
  29409,  // 1987
  29391,  // 1991
  27017,  // 1995
  19150,  // 1999
  15497,  // 2003
  15560,  // 2007
  14587,  // 2011
  10332,  // 2015
  8912,   // 2019
  3643,   // 2023
  1354, //2026
];
const etiquetasPARHuesca = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023','2026'];
const partidosPARHuesca = ['PAR','PAR','PAR','PAR','PAR','PAR','PAR','PAR','PAR','PAR','PAR','PAR'];

const ctxPARHuesca = document.getElementById('parHuescaChart').getContext('2d');

new Chart(ctxPARHuesca, {
  data: {
    labels: etiquetasPARHuesca,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPARHuesca,
        backgroundColor: 'rgba(201,159,0,0.7)', // color PAR
        borderColor: '#c99f00',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#c99f00', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString('es-ES')
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPARHuesca,
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
      id: 'etiquetaPartidoPARHuesca',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPARHuesca.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#c99f00';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPARHuesca[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Aragón Existe Huesca =================
const datosAragonexisteHuesca = [3524,2311];
const etiquetasAragonexisteHuesca = ['2023','2026'];
const partidosAragonexisteHuesca = ['Aragón Existe','Aragón Existe'];

const ctxAragonexisteHuesca = document.getElementById('aragonexisteHuescaChart').getContext('2d');

new Chart(ctxAragonexisteHuesca, {
  data: {
    labels: etiquetasAragonexisteHuesca,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosAragonexisteHuesca,
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
        data: datosAragonexisteHuesca,
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
      id: 'etiquetaPartidoAragonexisteHuesca',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosAragonexisteHuesca.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#037252';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosAragonexisteHuesca[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= IU Huesca =================
const datosIUHuesca = [
  6030,   // 1987
  7710,   // 1991
  8618,   // 1995
  4065,   // 1999
  3269,   // 2003
  3812,   // 2007
  5655,   // 2011
  3586,   // 2015
  2679,   // 2019
  2834,  // 2023
  2663, //2026
];
const etiquetasIUHuesca = ['1987','1991','1995','1999','2003','2007','2011','2015','2019','2023','2026'];
const partidosIUHuesca = ['IU','IU','IU','IU','IU','IU','IU','IU','IU','IU','IU'];

const ctxIUHuesca = document.getElementById('iuHuescaChart').getContext('2d');

new Chart(ctxIUHuesca, {
  data: {
    labels: etiquetasIUHuesca,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosIUHuesca,
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
        data: datosIUHuesca,
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
      id: 'etiquetaPartidoIUHuesca',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIUHuesca.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#B22222';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIUHuesca[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CS Huesca =================
const datosCSHuesca = [
  9190,   // 2015
  15703,  // 2019
  1700    // 2023
];
const etiquetasCSHuesca = ['2015','2019','2023'];
const partidosCSHuesca = ['CS','CS','CS'];

const ctxCSHuesca = document.getElementById('csHuescaChart').getContext('2d');

new Chart(ctxCSHuesca, {
  data: {
    labels: etiquetasCSHuesca,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCSHuesca,
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
        data: datosCSHuesca,
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
      id: 'etiquetaPartidoCSHuesca',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSHuesca.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSHuesca[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CDS Huesca =================
const datosCDSHuesca = [
  4252,   // 1983
  13851,  // 1987
  4055    // 1991
];
const etiquetasCDSHuesca = ['1983','1987','1991'];
const partidosCDSHuesca = ['CDS','CDS','CDS'];

const ctxCDSHuesca = document.getElementById('cdsHuescaChart').getContext('2d');

new Chart(ctxCDSHuesca, {
  data: {
    labels: etiquetasCDSHuesca,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCDSHuesca,
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
        data: datosCDSHuesca,
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
      id: 'etiquetaPartidoCDSHuesca',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSHuesca.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1E90FF';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSHuesca[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= SALF Huesca =================
const datosSALFHuesca = [2404];
const etiquetasSALFHuesca = ['2026'];
const partidosSALFHuesca = ['SALF'];

const ctxSALFHuesca = document.getElementById('salfHuescaChart').getContext('2d');

new Chart(ctxSALFHuesca, {
  data: {
    labels: etiquetasSALFHuesca,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosSALFHuesca,
        backgroundColor: 'rgba(178,34,34,0.7)', // rojo estilo IU
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
        data: datosSALFHuesca,
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
      id: 'etiquetaPartidoSALFHuesca',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosSALFHuesca.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#B22222';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosSALFHuesca[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PCE Huesca =================
const datosPCEHuesca = [
  5243   // 1983
];
const etiquetasPCEHuesca = ['1983'];
const partidosPCEHuesca = ['PCE'];

const ctxPCEHuesca = document.getElementById('pceHuescaChart').getContext('2d');

new Chart(ctxPCEHuesca, {
  data: {
    labels: etiquetasPCEHuesca,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPCEHuesca,
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
        data: datosPCEHuesca,
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
      id: 'etiquetaPartidoPCEHuesca',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPCEHuesca.forEach((_, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#400b0d';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPCEHuesca[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UPyD Huesca =================
const datosUPyDHuesca = [
  1530,  // 2011
  593    // 2015
];
const etiquetasUPyDHuesca = ['2011','2015'];
const partidosUPyDHuesca = ['UPyD','UPyD'];

const ctxUPyDHuesca = document.getElementById('upydHuescaChart').getContext('2d');

new Chart(ctxUPyDHuesca, {
  data: {
    labels: etiquetasUPyDHuesca,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUPyDHuesca,
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
        data: datosUPyDHuesca,
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
      id: 'etiquetaPartidoUPyDHuesca',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDHuesca.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#ff60da';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDHuesca[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

  // Datos Huesca por partido
  const etiquetasHuesca = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023','2026'];

  const datosHuesca = {
    'PP':             [31470, 17675, 23507, 41878, 40293, 37479, 35694, 44320, 29021, 23738, 39161,34541],
    'PSOE':           [57033, 42097, 45776, 39997, 40709, 53486, 54128, 40209, 29366, 38011, 33306,28066],
    'VOX':            [null,null,null,null,null,null,null,null,null,6037,11244,19721],
    'CS':             [null,null,null,null,null,null,null,null,9190,15703,1700],
    'Podemos/IU':     [null,null,null,null,null,null,null,null,20240,9261,4326,824],
    'CDS':            [4252, 13851, 4055,null,null,null,null,null,null,null,null],
    'PCE':            [5243, null, null,null,null,null,null,null,null,null,null],
    'IU':             [null,6030,7710,8618,4065,3269,3812,5655,3586,2679,2834,2663],
    'SALF':            [null, null, null,null,null,null,null,null,null,null,null,2404],
    'UPyD':           [null,null,null,null,null,null,null,1530,593,null,null],
    'CHA':            [null,2047,3616,5141,10739,12550,9151,7430,3429,5073,6075,10354],
    'PAR':            [15242,29409,29391,27017,19150,15497,15560,14587,10332,8912,3643,1354],
    'Aragón Existe':  [null,null,null,null,null,null,null,null,null,null,3524,2311]
  };

  const coloresPartidosHuesca = {
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
    'PCE':'#400b0d'
  };

  const datasetsHuesca = Object.keys(datosHuesca).map(partido => ({
    type: 'line',
    label: partido,
    data: datosHuesca[partido],
    borderColor: coloresPartidosHuesca[partido],
    backgroundColor: 'transparent',
    fill: false,
    tension: 0.3,
    spanGaps: true,
    pointRadius: 4,
    pointBackgroundColor: coloresPartidosHuesca[partido],
    datalabels: { 
      display: true,
      color: coloresPartidosHuesca[partido],
      font: { weight: 'bold', size: 12 },
      formatter: v => v != null ? v.toLocaleString('es-ES') : ''
    }
  }));

  const ctxHuesca = document.getElementById('votosTotalesHuescaChart').getContext('2d');

  new Chart(ctxHuesca, {
    data: {
      labels: etiquetasHuesca,
      datasets: datasetsHuesca
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