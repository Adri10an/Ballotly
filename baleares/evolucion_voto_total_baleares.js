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
// ================= PP Baleares =================
const datosPPBaleares = [110629, 123044, 160650, 167893, 159929, 189786, 192577, 194861, 121981, 95295, 161267];
const etiquetasPPBaleares = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023'];
const partidosPPBaleares = ['AP-PDP-UL','AP','PP','PP','PP','PP','PP','PP','PP','PP','PP'];

const ctxPPBaleares = document.getElementById('ppBalearesChart').getContext('2d');

new Chart(ctxPPBaleares, {
  data: {
    labels: etiquetasPPBaleares,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPPBaleares,
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
        data: datosPPBaleares,
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
      id: 'etiquetaPartidoPPBaleares',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPBaleares.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPBaleares[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PSOE Baleares (votos totales, 1983–2023) =================
const datosPSOEBaleares = [107906, 107762, 102161, 89771, 80194, 104543, 115477, 90008, 81073, 117480, 119540];
const etiquetasPSOEBaleares = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023'];
const partidosPSOEBaleares = ['PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE'];

const ctxPSOEBaleares = document.getElementById('psoeBalearesChart').getContext('2d');

new Chart(ctxPSOEBaleares, {
  data: {
    labels: etiquetasPSOEBaleares,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPSOEBaleares,
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
        data: datosPSOEBaleares,
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
      id: 'etiquetaPartidoPSOEBaleares',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSOEBaleares.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSOEBaleares[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= VOX Baleares (votos totales, 2019–2023) =================
const datosVOXBaleares = [
  34871,  // 2019
  62637   // 2023
];
const etiquetasVOXBaleares = ['2019','2023'];
const partidosVOXBaleares = ['VOX','VOX'];

const ctxVOXBaleares = document.getElementById('voxBalearesChart').getContext('2d');

new Chart(ctxVOXBaleares, {
  data: {
    labels: etiquetasVOXBaleares,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosVOXBaleares,
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
        data: datosVOXBaleares,
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
      id: 'etiquetaPartidoVOXBaleares',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXBaleares.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXBaleares[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= MÉS Baleares (votos totales, 2015–2023) =================
const datosMESBaleares = [
  59069,  // 2015
  39415,  // 2019
  37651   // 2023
];
const etiquetasMESBaleares = ['2015','2019','2023'];
const partidosMESBaleares = ['MÉS','MÉS','MÉS'];

const ctxMESBaleares = document.getElementById('mesBalearesChart').getContext('2d');

new Chart(ctxMESBaleares, {
  data: {
    labels: etiquetasMESBaleares,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosMESBaleares,
        backgroundColor: 'rgba(128,128,0,0.7)', // verde oliva MÉS
        borderColor: '#808000',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#4B5320', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() // separador de miles
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosMESBaleares,
        borderColor: '#808000',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#808000'
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
      id: 'etiquetaPartidoMESBaleares',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosMESBaleares.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B5320';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosMESBaleares[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Podemos/IU Baleares (votos totales, 2015–2023) =================
const datosPodemosBaleares = [
  62868,  // 2015
  41824,  // 2019
  19980   // 2023
];
const etiquetasPodemosBaleares = ['2015','2019','2023'];
const partidosPodemosBaleares = ['Podemos','Podemos','Podemos-IU'];

const ctxPodemosBaleares = document.getElementById('podemosBalearesChart').getContext('2d');

new Chart(ctxPodemosBaleares, {
  data: {
    labels: etiquetasPodemosBaleares,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPodemosBaleares,
        backgroundColor: 'rgba(128,0,128,0.7)', // morado Podemos/IU
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
        data: datosPodemosBaleares,
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
      id: 'etiquetaPartidoPodemosBaleares',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosBaleares.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosBaleares[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= El PI Baleares (votos totales, 2015–2023) =================
const datosPIBaleares = [
  34060,  // 2015
  31348,  // 2019
  16927   // 2023
];
const etiquetasPIBaleares = ['2015','2019','2023'];
const partidosPIBaleares = ['El PI','El PI','El PI'];

const ctxPIBaleares = document.getElementById('elPiBalearesChart').getContext('2d');

new Chart(ctxPIBaleares, {
  data: {
    labels: etiquetasPIBaleares,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPIBaleares,
        backgroundColor: 'rgba(113,208,176,0.7)', // color El PI
        borderColor: '#71D0B0',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#008B72', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() // separador de miles
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPIBaleares,
        borderColor: '#71D0B0',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#71D0B0'
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
      id: 'etiquetaPartidoPIBaleares',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPIBaleares.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#008B72';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPIBaleares[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Més per Menorca Baleares (votos totales, 2015–2023) =================
const datosMxMeBaleares = [
  6568,  // 2015
  6058,  // 2019
  6486   // 2023
];
const etiquetasMxMeBaleares = ['2015','2019','2023'];
const partidosMxMeBaleares = ['Més per Menorca','Més per Menorca','Més per Menorca'];

const ctxMxMeBaleares = document.getElementById('mxmeBalearesChart').getContext('2d');

new Chart(ctxMxMeBaleares, {
  data: {
    labels: etiquetasMxMeBaleares,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosMxMeBaleares,
        backgroundColor: 'rgba(36,74,60,0.7)', // verde oscuro MxMe
        borderColor: '#244A3C',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#1B3328', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosMxMeBaleares,
        borderColor: '#244A3C',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#244A3C'
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
      id: 'etiquetaPartidoMxMeBaleares',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosMxMeBaleares.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1B3328';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosMxMeBaleares[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Ciudadanos Baleares (votos totales, 2015–2023) =================
const datosCSBaleares = [
  25317,  // 2015
  42519,  // 2019
  6035    // 2023
];
const etiquetasCSBaleares = ['2015','2019','2023'];
const partidosCSBaleares = ['CS','CS','CS'];

const ctxCSBaleares = document.getElementById('csBalearesChart').getContext('2d');

new Chart(ctxCSBaleares, {
  data: {
    labels: etiquetasCSBaleares,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCSBaleares,
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
        data: datosCSBaleares,
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
      id: 'etiquetaPartidoCSBaleares',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSBaleares.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSBaleares[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= AIPF / SA Unió Baleares (votos totales, 1995–2023) =================
const datosAIPFBaleares = [1192, 1102, 1626, 1795, 1353, 1419, 1747];
const etiquetasAIPFBaleares = ['1995','1999','2003','2007','2011','2019','2023'];
const partidosAIPFBaleares = ['AIPF','AIPF','AIPF','AIPF','SA UNIÓ','SA UNIÓ','SA UNIÓ'];

const ctxAIPFBaleares = document.getElementById('aipfBalearesChart').getContext('2d');

new Chart(ctxAIPFBaleares, {
  data: {
    labels: etiquetasAIPFBaleares,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosAIPFBaleares,
        backgroundColor: 'rgba(0,162,159,0.7)', // color AIPF/SA Unió
        borderColor: '#00A29F',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#008080', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosAIPFBaleares,
        borderColor: '#00A29F',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#00A29F'
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
  plugins: [
    {
      id: 'etiquetaPartidoAIPFBaleares',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosAIPFBaleares.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#008080'; // tono más oscuro para contraste
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosAIPFBaleares[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= ARA Eivissa Baleares (votos totales, 2019–2023) =================
const datosARAEivissaBaleares = [1284, 1402];
const etiquetasARAEivissaBaleares = ['2019','2023'];
const partidosARAEivissaBaleares = ['ARA Eivissa','ARA Eivissa'];

const ctxARAEivissaBaleares = document.getElementById('araEivissaBalearesChart').getContext('2d');

new Chart(ctxARAEivissaBaleares, {
  data: {
    labels: etiquetasARAEivissaBaleares,
    datasets: [
      {
        type: 'bar',
        label: 'ARA Eivissa (Baleares)',
        data: datosARAEivissaBaleares,
        backgroundColor: 'rgba(255,215,0,0.7)',
        borderColor: '#FFD700',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#DAA520', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosARAEivissaBaleares,
        borderColor: '#FFD700',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#FFD700'
      }
    ]
  },
  options: {
    responsive: true,
    plugins: { legend: { position: 'top' }, datalabels: { display: true } },
    scales: {
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales' } },
      x: { title: { display: true, text: 'Año' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoARAEivissaBaleares',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosARAEivissaBaleares.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#DAA520';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosARAEivissaBaleares[i] + ' (Baleares)', xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Els Verds Baleares (votos totales, 1995–2003) =================
const datosElsVerdsBaleares = [11598, 17456, 18963];
const etiquetasElsVerdsBaleares = ['1995','1999','2003'];
const partidosElsVerdsBaleares = ['Els Verds','Els Verds','Els Verds'];

const ctxElsVerdsBaleares = document.getElementById('elsVerdsBalearesChart').getContext('2d');

new Chart(ctxElsVerdsBaleares, {
  data: {
    labels: etiquetasElsVerdsBaleares,
    datasets: [
      {
        type: 'bar',
        label: 'Els Verds (Baleares)',
        data: datosElsVerdsBaleares,
        backgroundColor: 'rgba(137,172,118,0.7)',
        borderColor: '#89AC76',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#56744D', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosElsVerdsBaleares,
        borderColor: '#89AC76',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#89AC76'
      }
    ]
  },
  options: {
    responsive: true,
    plugins: { legend: { position: 'top' }, datalabels: { display: true } },
    scales: {
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales' } },
      x: { title: { display: true, text: 'Año' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoElsVerdsBaleares',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosElsVerdsBaleares.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#56744D';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosElsVerdsBaleares[i] + ' (Baleares)', xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= FIEF Baleares (votos totales, 1991–1995) =================
const datosFIEFBaleares = [2483, 1359];
const etiquetasFIEFBaleares = ['1991','1995'];
const partidosFIEFBaleares = ['FIEF','FIEF'];

const ctxFIEFBaleares = document.getElementById('fiefBalearesChart').getContext('2d');

new Chart(ctxFIEFBaleares, {
  data: {
    labels: etiquetasFIEFBaleares,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosFIEFBaleares,
        backgroundColor: 'rgba(4,87,85,0.7)', // color FIEF
        borderColor: '#045755',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#033D3D', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosFIEFBaleares,
        borderColor: '#045755',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#045755'
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
      id: 'etiquetaPartidoFIEFBaleares',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosFIEFBaleares.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#033D3D'; // tono más oscuro para contraste
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosFIEFBaleares[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PSM Baleares (votos totales, 1983–2011) =================
const datosPSMBaleares = [16979, 16413, 22518, 45231, 42740, 33911, 3292, 36181];
const etiquetasPSMBaleares = ['1983','1987','1991','1995','1999','2003','2007','2011'];
const partidosPSMBaleares = ['PSM','PSM','PSM','PSM','PSM','PSM','PSM','PSM'];

const ctxPSMBaleares = document.getElementById('psmBalearesChart').getContext('2d');

new Chart(ctxPSMBaleares, {
  data: {
    labels: etiquetasPSMBaleares,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPSMBaleares,
        backgroundColor: 'rgba(195,65,0,0.7)', // color PSM
        borderColor: '#C34100',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#8B2B00', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPSMBaleares,
        borderColor: '#C34100',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#C34100'
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
      id: 'etiquetaPartidoPSMBaleares',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSMBaleares.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B2B00'; // tono más oscuro para contraste
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSMBaleares[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= BPM Baleares (votos totales, 2007) =================
const datosBPMBaleares = [37572];
const etiquetasBPMBaleares = ['2007'];
const partidosBPMBaleares = ['BPM'];

const ctxBPMBaleares = document.getElementById('bpmBalearesChart').getContext('2d');

new Chart(ctxBPMBaleares, {
  data: {
    labels: etiquetasBPMBaleares,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosBPMBaleares,
        backgroundColor: 'rgba(122,11,4,0.7)', // color BPM
        borderColor: '#7A0B04',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#4F0602', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosBPMBaleares,
        borderColor: '#7A0B04',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#7A0B04'
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
      id: 'etiquetaPartidoBPMBaleares',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosBPMBaleares.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4F0602'; // tono más oscuro para contraste
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosBPMBaleares[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UM Baleares (votos totales, 1983–2007) =================
const datosUMBaleares = [46915, 30186, 8431, 19928, 26640, 31681, 28178];
const etiquetasUMBaleares = ['1983','1987','1991','1995','1999','2003','2007'];
const partidosUMBaleares = ['UM','UM','UM','UM','UM','UM','UM'];

const ctxUMBaleares = document.getElementById('umBalearesChart').getContext('2d');

new Chart(ctxUMBaleares, {
  data: {
    labels: etiquetasUMBaleares,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUMBaleares,
        backgroundColor: 'rgba(255,13,0,0.7)', // color UM
        borderColor: '#FF0D00',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#B30000', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosUMBaleares,
        borderColor: '#FF0D00',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#FF0D00'
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
      id: 'etiquetaPartidoUMBaleares',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUMBaleares.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#B30000'; // tono más oscuro para contraste
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUMBaleares[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CIM Baleares (votos totales, 1983) =================
const datosCIMBaleares = [3250];
const etiquetasCIMBaleares = ['1983'];
const partidosCIMBaleares = ['CIM'];

const ctxCIMBaleares = document.getElementById('cimBalearesChart').getContext('2d');

new Chart(ctxCIMBaleares, {
  data: {
    labels: etiquetasCIMBaleares,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCIMBaleares,
        backgroundColor: 'rgba(130,180,127,0.7)', // color CIM
        borderColor: '#82B47F',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#5C7B61', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCIMBaleares,
        borderColor: '#82B47F',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#82B47F'
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
      id: 'etiquetaPartidoCIMBaleares',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCIMBaleares.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#5C7B61'; // tono más oscuro para contraste
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCIMBaleares[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= COP Baleares (votos totales, 1999–2003) =================
const datosCOPBaleares = [1623, 1284];
const etiquetasCOPBaleares = ['1999','2003'];
const partidosCOPBaleares = ['COP','COP'];

const ctxCOPBaleares = document.getElementById('copBalearesChart').getContext('2d');

new Chart(ctxCOPBaleares, {
  data: {
    labels: etiquetasCOPBaleares,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCOPBaleares,
        backgroundColor: 'rgba(184,84,65,0.7)', // color COP
        borderColor: '#B85441',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#8C362F', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCOPBaleares,
        borderColor: '#B85441',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#B85441'
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
      id: 'etiquetaPartidoCOPBaleares',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCOPBaleares.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8C362F'; // tono más oscuro para contraste
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCOPBaleares[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PDL Baleares (votos totales, 1983) =================
const datosPDLBaleares = [3896];
const etiquetasPDLBaleares = ['1983'];
const partidosPDLBaleares = ['PDL'];

const ctxPDLBaleares = document.getElementById('pdlBalearesChart').getContext('2d');

new Chart(ctxPDLBaleares, {
  data: {
    labels: etiquetasPDLBaleares,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPDLBaleares,
        backgroundColor: 'rgba(125,171,205,0.7)', // color PDL
        borderColor: '#7DABCD',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#5E8FAE', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPDLBaleares,
        borderColor: '#7DABCD',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#7DABCD'
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
      id: 'etiquetaPartidoPDLBaleares',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPDLBaleares.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#5E8FAE'; // tono más oscuro para contraste
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPDLBaleares[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= GUIF Baleares (votos totales, 1991) =================
const datosGUIFBaleares = [692];
const etiquetasGUIFBaleares = ['1991'];
const partidosGUIFBaleares = ['GUIF'];

const ctxGUIFBaleares = document.getElementById('guifBalearesChart').getContext('2d');

new Chart(ctxGUIFBaleares, {
  data: {
    labels: etiquetasGUIFBaleares,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosGUIFBaleares,
        backgroundColor: 'rgba(92,51,16,0.7)', // color GUIF
        borderColor: '#5C3310',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#3D220B', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosGUIFBaleares,
        borderColor: '#5C3310',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#5C3310'
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
      id: 'etiquetaPartidoGUIFBaleares',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosGUIFBaleares.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#3D220B'; // tono más oscuro para contraste
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosGUIFBaleares[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Compromís Baleares (votos totales, 2015) =================
const datosCompromisBaleares = [383];
const etiquetasCompromisBaleares = ['2015'];
const partidosCompromisBaleares = ['Compromís'];

const ctxCompromisBaleares = document.getElementById('compromisBalearesChart').getContext('2d');

new Chart(ctxCompromisBaleares, {
  data: {
    labels: etiquetasCompromisBaleares,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCompromisBaleares,
        backgroundColor: 'rgba(219,100,38,0.7)', // color Compromís
        borderColor: '#DB6426',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#9E3B17', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCompromisBaleares,
        borderColor: '#DB6426',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#DB6426'
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
      id: 'etiquetaPartidoCompromisBaleares',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCompromisBaleares.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#9E3B17'; // tono más oscuro para contraste
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCompromisBaleares[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CDS Baleares (votos totales, 1983–1991) =================
const datosCDSBaleares = [6611, 34046, 9934];
const etiquetasCDSBaleares = ['1983','1987','1991'];
const partidosCDSBaleares = ['CDS','CDS','CDS'];

const ctxCDSBaleares = document.getElementById('cdsBalearesChart').getContext('2d');

new Chart(ctxCDSBaleares, {
  data: {
    labels: etiquetasCDSBaleares,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCDSBaleares,
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
        data: datosCDSBaleares,
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
      id: 'etiquetaPartidoCDSBaleares',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSBaleares.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1E90FF';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSBaleares[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= IU/Podemos Baleares (votos totales, 1987–2023) =================
const datosIUBaleares = [4357, 7739, 24798, 17456, 18963, 1728, 9642, 1436, 41824, 19980];
const etiquetasIUBaleares = ['1987','1991','1995','1999','2003','2007','2011','2015','2019','2023'];
const partidosIUBaleares = ['IU','IU','IU','IU','IU','IU','IU','IU','Podemos-IU','Podemos-IU'];

const ctxIUBaleares = document.getElementById('iuBalearesChart').getContext('2d');

new Chart(ctxIUBaleares, {
  data: {
    labels: etiquetasIUBaleares,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosIUBaleares,
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
        data: datosIUBaleares,
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
      id: 'etiquetaPartidoIUBaleares',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIUBaleares.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIUBaleares[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UPyD Baleares (votos totales, 2011–2015) =================
const datosUPyDBaleares = [8731, 3816];
const etiquetasUPyDBaleares = ['2011','2015'];
const partidosUPyDBaleares = ['UPyD','UPyD'];

const ctxUPyDBaleares = document.getElementById('upydBalearesChart').getContext('2d');

new Chart(ctxUPyDBaleares, {
  data: {
    labels: etiquetasUPyDBaleares,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUPyDBaleares,
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
        data: datosUPyDBaleares,
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
      id: 'etiquetaPartidoUPyDBaleares',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDBaleares.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#ff60da';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDBaleares[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// Datos Baleares por partido
const etiquetasBaleares = [
  '1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023'
];

const datosBaleares = {
  'PP':   [110629, 123044, 160650, 167893, 159929, 189786, 192577, 194861, 121981, 95295, 161267],
  'PSOE': [107906, 107762, 102161, 89771, 80194, 104543, 115477, 90008, 81073, 117480, 119540],
  'VOX': [null,null,null,null,null,null,null,null,null,34871,62637],
  'MÉS': [null, null, null, null, null, null, null, null, 59069, 39415, 37651],
  'Podemos/IU': [null, null, null, null, null, null, null, null, 62868, 41824, 19980],
  'El Pi': [null, null, null, null, null, null, null, null, 34060,31348,16927],
  'MxMe': [null, null, null, null, null, null, null, null, 6568, 6058, 6486],
  'CS': [null, null, null, null, null, null, null, null, 25317, 42519, 6035],
  'AIPF/SA Unió': [null, null, null,1192, 1102,1626 , 1795, 1353, null, 1419, 1747],
  'ARA Eivissa': [null, null, null, null, null, null, null, null, null, 1284, 1402],
  'Els Verds': [null, null, null, 11598, 17456, 18963, null, null, null, null, null],
  'FIEF': [null, null,2483,1359, null, null, null, null, null, null, null],
  'PSM': [16979, 16413, 22518, 45231, 42740, 33911, 3292, 36181, null, null, null],
  'BPM': [null, null, null, null, null, null, 37572, null, null, null, null],
  'UM': [46915, 30186, 8431, 19928, 26640, 31681, 28178, null, null, null, null],
  'CIM': [3250, null, null, null, null, null, null, null, null, null, null],
  'COP': [null, null, null, null, 1623, 1284, null, null, null, null, null],
  'PDL': [3896, null, null, null, null, null, null, null, null, null, null],
  'GUIF': [null, null, 692, null, null, null, null, null, null, null, null],
  'COMPROMIS': [null, null, null, null, null, null, null, 383, null, null, null],
  'CDS': [6611, 34046, 9934, null, null, null, null, null, null, null, null],
  'IU': [null, 4357, 7739, 24798, 17456, 18963, 1728, 9642, 1436, 41824, 19980],
  'UPyD': [null, null, null, null, null, null, null, 8731, 3816, null, null]

};

const coloresPartidosBaleares = {
  'PP': '#0000FF',
  'PSOE': '#FF0000',
  'VOX': '#008000',
  'MÉS': '#CBD046',
  'Podemos/IU': '#800080',
  'El Pi': '#71D0B0',
  'MxMe': '#244A3C',
  'CS': '#FF8C00',
  'AIPF/SA Unió': '#00A29F',
  'ARA Eivissa': '#FFD700',
  'Els Verds': '#89AC76',
  'FIEF': '#045755',
  'PSM': '#C34100',
  'BPM': '#7A0B04',
  'UM': '#FF0D00',
  'CIM': '#82B47F',
  'COP': '#B85441',
  'PDL': '#A52A2A',
  'GUIF': '#8B4513',
  'COMPROMIS': '#DB6426',
  'CDS': '#00BFFF',
  'IU': '#B22222',
  'UPyD': '#FF60DA'
};

const datasetsBaleares = Object.keys(datosBaleares).map(partido => ({
  type: 'line',
  label: partido,
  data: datosBaleares[partido],
  borderColor: coloresPartidosBaleares[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresPartidosBaleares[partido],
  datalabels: { 
    display: true,
    color: coloresPartidosBaleares[partido],
    font: { weight: 'bold', size: 12 },
    formatter: v => v != null ? v.toLocaleString() : ''
  }
}));

const ctxBaleares = document.getElementById('votosTotalesBalearesChart').getContext('2d');

new Chart(ctxBaleares, {
  data: {
    labels: etiquetasBaleares,
    datasets: datasetsBaleares
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