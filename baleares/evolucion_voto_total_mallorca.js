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
 
// ================= PP Mallorca =================
const datosPPMallorca = [88068, 96637, 130275, 136767, 130815, 155641, 157135, 156692, 95444, 69761, 123149];
const etiquetasPPMallorca = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023'];
const partidosPPMallorca = ['AP-PDP-UL','AP','PP','PP','PP','PP','PP','PP','PP','PP','PP'];

const ctxPPMallorca = document.getElementById('ppMallorcaChart').getContext('2d');

new Chart(ctxPPMallorca, {
  data: {
    labels: etiquetasPPMallorca,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPPMallorca,
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
        data: datosPPMallorca,
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
      id: 'etiquetaPartidoPPMallorca',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPMallorca.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPMallorca[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PSOE Mallorca (votos totales, 1983-2023) =================
const datosPSOEMallorca = [88545, 87175, 80569, 69865, 67840, 90998, 101364, 79732, 62571, 92126, 96448];
const etiquetasPSOEMallorca = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023'];
const partidosPSOEMallorca = ['PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE'];

const ctxPSOEMallorca = document.getElementById('psoeMallorcaChart').getContext('2d');

new Chart(ctxPSOEMallorca, {
  data: {
    labels: etiquetasPSOEMallorca,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPSOEMallorca,
        backgroundColor: 'rgba(255,0,0,0.7)', // rojo PSOE
        borderColor: '#FF0000',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#B22222', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() // separador de miles
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPSOEMallorca,
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
      id: 'etiquetaPartidoPSOEMallorca',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSOEMallorca.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#B22222';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSOEMallorca[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= VOX Mallorca (votos totales, 2019-2023) =================
const datosVOXMallorca = [
  31206,  // 2019
  55019   // 2023
];
const etiquetasVOXMallorca = ['2019','2023'];
const partidosVOXMallorca = ['VOX','VOX'];

const ctxVOXMallorca = document.getElementById('voxMallorcaChart').getContext('2d');

new Chart(ctxVOXMallorca, {
  data: {
    labels: etiquetasVOXMallorca,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosVOXMallorca,
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
        data: datosVOXMallorca,
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
      id: 'etiquetaPartidoVOXMallorca',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXMallorca.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXMallorca[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= MÉS per Mallorca (votos totales, 2015-2023) =================
const datosMESMallorca = [
  59069,  // 2015
  39327,  // 2019
  37227   // 2023
];
const etiquetasMESMallorca = ['2015','2019','2023'];
const partidosMESMallorca = ['MÉS','MÉS','MÉS'];

const ctxMESMallorca = document.getElementById('mesMallorcaChart').getContext('2d');

new Chart(ctxMESMallorca, {
  data: {
    labels: etiquetasMESMallorca,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosMESMallorca,
        backgroundColor: 'rgba(203,208,70,0.7)', // verde-lima MÉS
        borderColor: '#CBD046',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#8A8C2A', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() // separador de miles
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosMESMallorca,
        borderColor: '#CBD046',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#CBD046'
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
      id: 'etiquetaPartidoMESMallorca',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosMESMallorca.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8A8C2A';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosMESMallorca[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= El PI - Proposta per les Illes (votos totales, 2015-2023) =================
const datosElPIMallorca = [
  30387,  // 2015
  30273,  // 2019
  16927   // 2023
];
const etiquetasElPIMallorca = ['2015','2019','2023'];
const partidosElPIMallorca = ['El PI','El PI','El PI'];

const ctxElPIMallorca = document.getElementById('piMallorcaChart').getContext('2d');

new Chart(ctxElPIMallorca, {
  data: {
    labels: etiquetasElPIMallorca,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosElPIMallorca,
        backgroundColor: 'rgba(113,208,176,0.7)', // verde agua El PI
        borderColor: '#71D0B0',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#3B9C84', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() // separador de miles
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosElPIMallorca,
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
      id: 'etiquetaPartidoElPIMallorca',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosElPIMallorca.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#3B9C84';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosElPIMallorca[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Podemos / Podemos-IU Mallorca (votos totales, 2015-2023) =================
const datosPodemosMallorca = [
  50276,  // 2015
  31828,  // 2019
  14213   // 2023
];
const etiquetasPodemosMallorca = ['2015','2019','2023'];
const partidosPodemosMallorca = ['Podemos','Podemos','Podemos-IU'];

const ctxPodemosMallorca = document.getElementById('podemosMallorcaChart').getContext('2d');

new Chart(ctxPodemosMallorca, {
  data: {
    labels: etiquetasPodemosMallorca,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPodemosMallorca,
        backgroundColor: 'rgba(128,0,128,0.7)', // morado Podemos/IU
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
        data: datosPodemosMallorca,
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
      id: 'etiquetaPartidoPodemosMallorca',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosMallorca.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosMallorca[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Ciudadanos (CS) Mallorca (votos totales, 2015-2023) =================
const datosCSMallorca = [
  25317,  // 2015
  34426,  // 2019
  4892    // 2023
];
const etiquetasCSMallorca = ['2015','2019','2023'];
const partidosCSMallorca = ['CS','CS','CS'];

const ctxCSMallorca = document.getElementById('csMallorcaChart').getContext('2d');

new Chart(ctxCSMallorca, {
  data: {
    labels: etiquetasCSMallorca,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCSMallorca,
        backgroundColor: 'rgba(255,140,0,0.7)', // naranja CS
        borderColor: '#FF8C00',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#FF4500', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() // separador de miles
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCSMallorca,
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
      id: 'etiquetaPartidoCSMallorca',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSMallorca.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSMallorca[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PSM Mallorca (votos totales, 1983-2011) =================
const datosPSMMallorca = [
  16979,  // 1983
  16413,  // 1987
  22522,  // 1991
  41242,  // 1995
  39509,  // 1999
  30964,  // 2003
  36181   // 2011
];
const etiquetasPSMMallorca = ['1983','1987','1991','1995','1999','2003','2011'];
const partidosPSMMallorca = ['PSM','PSM','PSM','PSM','PSM','PSM','PSM'];

const ctxPSMMallorca = document.getElementById('psmMallorcaChart').getContext('2d');

new Chart(ctxPSMMallorca, {
  data: {
    labels: etiquetasPSMMallorca,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPSMMallorca,
        backgroundColor: 'rgba(195,65,0,0.7)', // color PSM
        borderColor: '#c34100',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end',
          align: 'top',
          color: '#7a1f00',
          font: { weight: 'bold' },
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPSMMallorca,
        borderColor: '#c34100',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#c34100'
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
      id: 'etiquetaPartidoPSMMallorca',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSMMallorca.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#7a1f00';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSMMallorca[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= BPM Mallorca (votos totales, 2007) =================
const datosBPMMallorca = [
  37572  // 2007
];
const etiquetasBPMMallorca = ['2007'];
const partidosBPMMallorca = ['BPM'];

const ctxBPMMallorca = document.getElementById('bpmMallorcaChart').getContext('2d');

new Chart(ctxBPMMallorca, {
  data: {
    labels: etiquetasBPMMallorca,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosBPMMallorca,
        backgroundColor: 'rgba(122,11,4,0.7)', // color BPM
        borderColor: '#7a0b04',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end',
          align: 'top',
          color: '#4b0702',
          font: { weight: 'bold' },
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosBPMMallorca,
        borderColor: '#7a0b04',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#7a0b04'
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
      id: 'etiquetaPartidoBPMMallorca',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosBPMMallorca.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4b0702';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosBPMMallorca[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UM Mallorca (votos totales, 1983-2007) =================
const datosUMMallorca = [
  47075,  // 1983
  30186,  // 1987
  8429,   // 1991
  19966,  // 1995
  26682,  // 1999
  31781,  // 2003
  28178   // 2007
];
const etiquetasUMMallorca = ['1983','1987','1991','1995','1999','2003','2007'];
const partidosUMMallorca = ['UM','UM','UM','UM','UM','UM','UM'];

const ctxUMMallorca = document.getElementById('umMallorcaChart').getContext('2d');

new Chart(ctxUMMallorca, {
  data: {
    labels: etiquetasUMMallorca,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUMMallorca,
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
        data: datosUMMallorca,
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
      id: 'etiquetaPartidoUMMallorca',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUMMallorca.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#B30000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUMMallorca[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CDS Mallorca (votos totales, 1983-1991) =================
const datosCDSMallorca = [
  6115,   // 1983
  28957,  // 1987
  8137    // 1991
];
const etiquetasCDSMallorca = ['1983','1987','1991'];
const partidosCDSMallorca = ['CDS','CDS','CDS'];

const ctxCDSMallorca = document.getElementById('cdsMallorcaChart').getContext('2d');

new Chart(ctxCDSMallorca, {
  data: {
    labels: etiquetasCDSMallorca,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCDSMallorca,
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
        data: datosCDSMallorca,
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
      id: 'etiquetaPartidoCDSMallorca',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSMallorca.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1E90FF';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSMallorca[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= IU/Podemos Mallorca (votos totales, 1987-2023) =================
const datosIUMallorca = [
  6527,   // 1987
  7006,   // 1991
  19846,  // 1995
  17403,  // 1999
  19050,  // 2003
  9642,   // 2011
  31828,  // 2019
  14213   // 2023
];
const etiquetasIUMallorca = ['1987','1991','1995','1999','2003','2011','2019','2023'];
const partidosIUMallorca = ['IU','IU','IU','IU','IU','IU','Podemos-IU','Podemos-IU'];

const ctxIUMallorca = document.getElementById('iuMallorcaChart').getContext('2d');

new Chart(ctxIUMallorca, {
  data: {
    labels: etiquetasIUMallorca,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosIUMallorca,
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
        data: datosIUMallorca,
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
      id: 'etiquetaPartidoIUMallorca',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIUMallorca.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIUMallorca[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UPyD Mallorca (votos totales, 2011-2015) =================
const datosUPyDMallorca = [
  7336,   // 2011
  3100    // 2015
];
const etiquetasUPyDMallorca = ['2011','2015'];
const partidosUPyDMallorca = ['UPyD','UPyD'];

const ctxUPyDMallorca = document.getElementById('upydMallorcaChart').getContext('2d');

new Chart(ctxUPyDMallorca, {
  data: {
    labels: etiquetasUPyDMallorca,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUPyDMallorca,
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
        data: datosUPyDMallorca,
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
      id: 'etiquetaPartidoUPyDMallorca',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDMallorca.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#ff60da';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDMallorca[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

  // Datos Mallorca por partido
  const etiquetasMallorca = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023'];

  const datosMallorca = {
    'PP / AP-PDP-UL': [88068, 96637, 130275, 136767, 130815, 155641, 157135, 156692, 95444, 69761, 123149],
    'PSOE':          [88545, 87175, 80569, 69865, 67840, 90998, 101364, 79732, 62571, 92126, 96448],
    'VOX':           [null,null,null,null,null,null,null,null,null,31206,55019],
    'MÉS':           [null,null,null,null,null,null,null,null,59069,39327,37227],
    'El PI':         [null,null,null,null,null,null,null,null,30387,30273,16927],
    'Podemos/IU':    [null,null,null,null,null,null,null,null,50276,31828,14213],
    'CS':            [null,null,null,null,null,null,null,null,25317,34426,4892],
    'PSM':           [16979, 16413, 22522, 41242, 39509, 30964, null,36181,null,null,null],
    'BPM':           [null,null,null, null, null, null, 37572,null,null,null,null],
    'UM':            [47075, 30186, 8429, 19966, 26682, 31781, 28178,null,null,null,null],
    'CDS':           [6115, 28957, 8137, null, null, null, null,null,null,null,null],
    'IU':            [null,6527,7006,19846,17403,19050,null,9642,null,31828,14213],
    'UPyD':          [null,null,null,null,null,null,null,7336,3100,null,null]
  };

  const coloresPartidosMallorca = {
    'PP / AP-PDP-UL': '#0000FF',
    'PSOE':           '#FF0000',
    'VOX':            '#008000',
    'MÉS':            '#CBD046',
    'El PI':          '#71D0B0',
    'Podemos/IU':     '#800080',
    'CS':             '#FF8C00',
    'PSM':            '#c34100',
    'BPM':            '#7a0b04',
    'UM':             '#FF0D00',
    'CDS':            '#00BFFF',
    'IU':             '#B22222',
    'UPyD':           '#ff60da'
  };

  const datasetsMallorca = Object.keys(datosMallorca).map(partido => ({
    type: 'line',
    label: partido,
    data: datosMallorca[partido],
    borderColor: coloresPartidosMallorca[partido],
    backgroundColor: 'transparent',
    fill: false,
    tension: 0.3,
    spanGaps: true,
    pointRadius: 4,
    pointBackgroundColor: coloresPartidosMallorca[partido],
    datalabels: { 
      display: true,
      color: coloresPartidosMallorca[partido],
      font: { weight: 'bold', size: 12 },
      formatter: v => v != null ? v.toLocaleString() : ''
    }
  }));

  const ctxMallorca = document.getElementById('votosTotalesMallorcaChart').getContext('2d');

  new Chart(ctxMallorca, {
    data: {
      labels: etiquetasMallorca,
      datasets: datasetsMallorca
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
