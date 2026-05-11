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
// ================= PP Badajoz =================
const datosPPBadajoz = [104449, 85550, 87416, 153747, 153432, 148417, 152109,184354, 141825,98754, 144320,140811];
const etiquetasPPBadajoz = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023','2025'];
const partidosPPBadajoz = ['AP-PDP-UL','AP','PP','PP','PP','PP','PP','PP','PP','PP','PP','PP'];

const ctxPPBadajoz = document.getElementById('ppBadajozChart').getContext('2d');

new Chart(ctxPPBadajoz, {
  data: {
    labels: etiquetasPPBadajoz,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPPBadajoz,
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
        data: datosPPBadajoz,
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoPPBadajoz',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPBadajoz.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPBadajoz[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PSOE Badajoz =================
const datosPSOBadajoz = [191679, 186753, 196402, 177713, 194264, 213743, 216952, 183263, 170715, 182343, 156579,86080];
const etiquetasPSOBadajoz = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023','2025'];
const partidosPSOBadajoz = ['PSOE','PSOE','PSOE','PSOE','PSOE-PROGR','PSOE-PROGR','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE'];

const ctxPSOBadajoz = document.getElementById('psoeBadajozChart').getContext('2d');

new Chart(ctxPSOBadajoz, {
  data: {
    labels: etiquetasPSOBadajoz,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPSOBadajoz,
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
        data: datosPSOBadajoz,
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoPSOBadajoz',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSOBadajoz.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSOBadajoz[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= VOX Badajoz =================
const datosVOXBadajoz = [1123, 17863, 30162,56908];
const etiquetasVOXBadajoz = ['2015','2019','2023','2025'];
const partidosVOXBadajoz = ['VOX','VOX','VOX','VOX'];

const ctxVOXBadajoz = document.getElementById('voxBadajozChart').getContext('2d');

new Chart(ctxVOXBadajoz, {
  data: {
    labels: etiquetasVOXBadajoz,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosVOXBadajoz,
        backgroundColor: 'rgba(0,128,0,0.7)', // verde VOX
        borderColor: '#008000',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#006400', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosVOXBadajoz,
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoVOXBadajoz',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXBadajoz.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXBadajoz[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Ciudadanos Badajoz =================
const datosCSBadajoz = [15293, 41872, 3521,922];
const etiquetasCSBadajoz = ['2015','2019','2023','2025'];
const partidosCSBadajoz = ['CS','CS','CS','CS'];

const ctxCSBadajoz = document.getElementById('csBadajozChart').getContext('2d');

new Chart(ctxCSBadajoz, {
  data: {
    labels: etiquetasCSBadajoz,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCSBadajoz,
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
        data: datosCSBadajoz,
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoCSBadajoz',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSBadajoz.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSBadajoz[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Podemos/IU Badajoz =================
const datosPodemosBadajoz = [28311, 25542, 22546,34240];
const etiquetasPodemosBadajoz = ['2015','2019','2023','2025'];
const partidosPodemosBadajoz = ['Podemos','UXE','UXE','UXE'];

const ctxPodemosBadajoz = document.getElementById('podemosBadajozChart').getContext('2d');

new Chart(ctxPodemosBadajoz, {
  data: {
    labels: etiquetasPodemosBadajoz,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPodemosBadajoz,
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
        data: datosPodemosBadajoz,
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoPodemosBadajoz',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosBadajoz.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosBadajoz[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= JUEX Badajoz =================
const datosJUEXBadajoz = [12364,2389];
const etiquetasJUEXBadajoz = ['2023','2025'];
const partidosJUEXBadajoz = ['JUEX','JUEX'];

const ctxJUEXBadajoz = document
  .getElementById('juexBadajozChart')
  .getContext('2d');

new Chart(ctxJUEXBadajoz, {
  data: {
    labels: etiquetasJUEXBadajoz,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosJUEXBadajoz,
        backgroundColor: 'rgba(47,86,30,0.8)', // verde JUEX
        borderColor: '#2f561e',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#2f561e',
          font: { weight: 'bold' },
          formatter: (v) => v.toLocaleString('es-ES')
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosJUEXBadajoz,
        borderColor: '#2f561e',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#2f561e'
      }
    ]
  },
  options: {
    responsive: true,
    animation: {
      duration: 1400,
      easing: 'easeOutBounce'
    },
    plugins: {
      legend: {
        position: 'top',
        labels: { color: '#333' }
      },
      datalabels: { display: true }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Votos totales',
          color: '#333'
        },
        ticks: { color: '#333' }
      },
      x: {
        title: {
          display: true,
          text: 'Año',
          color: '#333'
        },
        ticks: { color: '#333' }
      }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoJUEXBadajoz',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;

        const xPos = x.getPixelForValue(0);
        const yPos = y.getPixelForValue(0) + 30;

        ctx.save();
        ctx.fillStyle = '#2f561e';
        ctx.font = '12px Segoe UI';
        ctx.textAlign = 'center';
        ctx.fillText('JUEX', xPos, yPos);
        ctx.restore();
      }
    },
    ChartDataLabels
  ]
});

// ================= EU Badajoz =================
const datosEUBadajoz = [
  11351, // 1983
  5881,  // 1987
  4124,  // 1991
  9950,  // 1995
  2368,  // 1999
  3096,  // 2003
  1156,  // 2015
  1518   // 2019
];

const etiquetasEUBadajoz = [
  '1983','1987','1991','1995',
  '1999','2003','2015','2019'
];

const partidosEUBadajoz = Array(etiquetasEUBadajoz.length).fill('EU');

const ctxEUBadajoz = document
  .getElementById('euBadajozChart')
  .getContext('2d');

new Chart(ctxEUBadajoz, {
  data: {
    labels: etiquetasEUBadajoz,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosEUBadajoz,
        backgroundColor: 'rgba(28,43,22,0.85)', // verde EU oscuro
        borderColor: '#1c2b16',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#1c2b16',
          font: { weight: 'bold' },
          formatter: (v) => v.toLocaleString('es-ES')
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosEUBadajoz,
        borderColor: '#1c2b16',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#1c2b16'
      }
    ]
  },
  options: {
    responsive: true,
    animation: {
      duration: 1500,
      easing: 'easeOutQuart'
    },
    plugins: {
      legend: {
        position: 'top',
        labels: { color: '#333' }
      },
      datalabels: { display: true }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Votos totales',
          color: '#333'
        },
        ticks: { color: '#333' }
      },
      x: {
        title: {
          display: true,
          text: 'Año',
          color: '#333'
        },
        ticks: { color: '#333' }
      }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoEUBadajoz',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;

        datosEUBadajoz.forEach((_, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;

          ctx.save();
          ctx.fillStyle = '#1c2b16';
          ctx.font = '11px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText('EU', xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CDS Badajoz =================
const datosCDSBadajoz = [47520, 20754];
const etiquetasCDSBadajoz = ['1987','1991'];
const partidosCDSBadajoz = ['CDS','CDS'];

const ctxCDSBadajoz = document.getElementById('cdsBadajozChart').getContext('2d');

new Chart(ctxCDSBadajoz, {
  data: {
    labels: etiquetasCDSBadajoz,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCDSBadajoz,
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
        data: datosCDSBadajoz,
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoCDSBadajoz',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSBadajoz.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1E90FF';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSBadajoz[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PCE Badajoz =================
const datosPCEBadajoz = [28107];
const etiquetasPCEBadajoz = ['1983'];
const partidosPCEBadajoz = ['PCE'];

const ctxPCEBadajoz = document
  .getElementById('pceBadajozChart')
  .getContext('2d');

new Chart(ctxPCEBadajoz, {
  data: {
    labels: etiquetasPCEBadajoz,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPCEBadajoz,
        backgroundColor: 'rgba(64,11,13,0.75)', // rojo PCE
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
        data: datosPCEBadajoz,
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
    animation: {
      duration: 1500,
      easing: 'easeOutBounce'
    },
    plugins: {
      legend: {
        position: 'top',
        labels: { color: '#333' }
      },
      datalabels: { display: true }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Votos totales',
          color: '#333'
        },
        ticks: { color: '#333' }
      },
      x: {
        title: {
          display: true,
          text: 'Año',
          color: '#333'
        },
        ticks: { color: '#333' }
      }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoPCEBadajoz',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;

        const xPos = x.getPixelForValue(0);
        const yPos = y.getPixelForValue(0) + 30;

        ctx.save();
        ctx.fillStyle = '#400b0d';
        ctx.font = '12px Segoe UI';
        ctx.textAlign = 'center';
        ctx.fillText('PCE', xPos, yPos);
        ctx.restore();
      }
    },
    ChartDataLabels
  ]
});

// ================= IU Badajoz =================
const datosIUBadajoz = [25183, 30315, 48393, 27869, 27577, 19916, 24307, 18616, 25542, 22546,34240];
const etiquetasIUBadajoz = ['1987','1991','1995','1999','2003','2007','2011','2015','2019','2023','2025'];
const partidosIUBadajoz = ['IU','IU','IU','IU','IU','IU','IU','IU','Podemos-IU','Podemos-IU-AV','Podemos-IU-AV'];

const ctxIUBadajoz = document.getElementById('iuBadajozChart').getContext('2d');

new Chart(ctxIUBadajoz, {
  data: {
    labels: etiquetasIUBadajoz,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosIUBadajoz,
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
        data: datosIUBadajoz,
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoIUBadajoz',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIUBadajoz.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIUBadajoz[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UPyD Badajoz =================
const datosUPyDBadajoz = [4061, 2430]; // votos totales
const etiquetasUPyDBadajoz = ['2011','2015'];
const partidosUPyDBadajoz = ['UPyD','UPyD'];

const ctxUPyDBadajoz = document.getElementById('upydBadajozChart').getContext('2d');

new Chart(ctxUPyDBadajoz, {
  data: {
    labels: etiquetasUPyDBadajoz,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUPyDBadajoz,
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
        data: datosUPyDBadajoz,
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
    animation: { duration: 1500, easing: 'easeOutBounce' },
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
      id: 'etiquetaPartidoUPyDBadajoz',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDBadajoz.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#ff60da';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDBadajoz[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// Etiquetas de los años
const etiquetasBadajozTotal = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023','2025'];

// Datos de cada partido
const datosBadajozTotal = {
  'PP':           [104449, 85550, 87416, 153747, 153432, 148417, 152109, 184354, 141825, 98754, 144320,140811],
  'PSOE':         [191679, 186753, 196402, 177713, 194264, 213743, 216952, 183263, 170715, 182343, 156579,86080],
  'VOX':          [null,null,null,null,null,null,null,null,1123,17863,30162,56908],
  'CS':           [null,null,null,null,null,null,null,null,15293,41872,3521,922],
  'UXE':   [null,null,null,null,null,null,null,null,28311,25542,22546,34240],
  'JUEX':   [null,null,null,null,null,null,null,null,null,null,12364,2389],
  'EU':   [11351,5881,4124,9950,2368,3096,null,null,1156,1518,null],
  'CDS':          [null,47520,20754,null,null,null,null,null,null,null,null],
  'PCE':          [28107,null,null,null,null,null,null,null,null,null,null],
  'IU':           [null,25183,30315,48393,27869,27577,19916,24307,18616,25542,22546,34240],
  'UPyD':         [null,null,null,null,null,null,null,4061,2430,null,null]
};

// Colores de cada partido
const coloresPartidosBadajoz = {
  'PP': '#0000FF',
  'PSOE': '#FF0000',
  'VOX': '#008000',
  'CS': '#FF8C00',
  'UXE': '#800080',
  'JUEX': '#2f561e',
  'EU': '#1c2b16',
  'CDS': '#00BFFF',
  'PCE': '#400b0d',
  'IU': '#B22222',
  'UPyD': '#ff60da'
};

// Construcción de datasets
const datasetsBadajozTotal = Object.keys(datosBadajozTotal).map(partido => ({
  type: 'line',
  label: partido,
  data: datosBadajozTotal[partido],
  borderColor: coloresPartidosBadajoz[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresPartidosBadajoz[partido],
  datalabels: { 
    display: true,
    color: coloresPartidosBadajoz[partido],
    font: { weight: 'bold', size: 12 },
    formatter: v => v != null ? v.toLocaleString() : ''
  }
}));

// Creación del gráfico
const ctxBadajozTotal = document.getElementById('votosTotalesBadajozChart').getContext('2d');

new Chart(ctxBadajozTotal, {
  data: {
    labels: etiquetasBadajozTotal,
    datasets: datasetsBadajozTotal
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