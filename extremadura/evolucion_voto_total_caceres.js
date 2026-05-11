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
// ================= PP Cáceres =================
const datosPPCaceres = [64157, 58567, 67612, 105956, 105225, 107391, 105283, 123204, 93977, 69835, 91915,87971];
const etiquetasPPCaceres = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023','2025'];
const partidosPPCaceres = ['AP-PDP-UL','AP','PP','PP','PP','PP','PP','PP','PP','PP','PP','PP'];

const ctxPPCaceres = document.getElementById('ppCaceresChart').getContext('2d');

new Chart(ctxPPCaceres, {
  data: {
    labels: etiquetasPPCaceres,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPPCaceres,
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
        data: datosPPCaceres,
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
      id: 'etiquetaPartidoPPCaceres',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPCaceres.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPCaceres[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});
// ================= PSOE Cáceres =================
const datosPSECaceres = [105260, 106182, 117247, 111436, 119153, 127779, 135390, 106204, 93649, 104220, 86080, 50566];
const etiquetasPSECaceres = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023','2025'];
const partidosPSECaceres = ['PSOE','PSOE','PSOE','PSOE','PSOE-PROGR','PSOE-PROGR','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE'];

const ctxPSECaceres = document.getElementById('psoeCaceresChart').getContext('2d');

new Chart(ctxPSECaceres, {
  data: {
    labels: etiquetasPSECaceres,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPSECaceres,
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
        data: datosPSECaceres,
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
      id: 'etiquetaPartidoPSECaceres',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSECaceres.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSECaceres[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= VOX Cáceres =================
const datosVOXCaceres = [650, 10986, 19238,32798];
const etiquetasVOXCaceres = ['2015','2019','2023','2025'];
const partidosVOXCaceres = ['VOX','VOX','VOX','VOX'];

const ctxVOXCaceres = document.getElementById('voxCaceresChart').getContext('2d');

new Chart(ctxVOXCaceres, {
  data: {
    labels: etiquetasVOXCaceres,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosVOXCaceres,
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
        data: datosVOXCaceres,
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
      id: 'etiquetaPartidoVOXCaceres',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXCaceres.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXCaceres[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Ciudadanos Cáceres =================
const datosCSCaceres = [12540, 26260, 1887,402];
const etiquetasCSCaceres = ['2015','2019','2023','2025'];
const partidosCSCaceres = ['CS','CS','CS','CS'];

const ctxCSCaceres = document.getElementById('csCaceresChart').getContext('2d');

new Chart(ctxCSCaceres, {
  data: {
    labels: etiquetasCSCaceres,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCSCaceres,
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
        data: datosCSCaceres,
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
      id: 'etiquetaPartidoCSCaceres',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSCaceres.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSCaceres[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Podemos/IU Cáceres =================
const datosPodemosCaceres = [22562, 18466, 13833,20250];
const etiquetasPodemosCaceres = ['2015','2019','2023','2025'];
const partidosPodemosCaceres = ['Podemos','UXE','UXE','UXE'];

const ctxPodemosCaceres = document.getElementById('podemosCaceresChart').getContext('2d');

new Chart(ctxPodemosCaceres, {
  data: {
    labels: etiquetasPodemosCaceres,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPodemosCaceres,
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
        data: datosPodemosCaceres,
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
      id: 'etiquetaPartidoPodemosCaceres',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosCaceres.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosCaceres[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= JUEX Cáceres =================
const datosJUEXCaceres = [3139,1767];
const etiquetasJUEXCaceres = ['JUEX 2023','JUEX 2025'];

const ctxJUEXCaceres = document
  .getElementById('juexCaceresChart')
  .getContext('2d');

new Chart(ctxJUEXCaceres, {
  data: {
    labels: etiquetasJUEXCaceres,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosJUEXCaceres,
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
        data: datosJUEXCaceres,
        borderColor: '#2f561e',
        backgroundColor: 'transparent',
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#2f561e'
      }
    ]
  },
  options: {
    responsive: true,
    animation: {
      duration: 1200,
      easing: 'easeOutQuart'
    },
    plugins: {
      legend: {
        position: 'top',
        labels: { color: '#333' }
      },
      datalabels: {
        display: true
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Votos totales'
        }
      },
      x: {
        title: {
          display: false
        }
      }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoJUEXCaceres',
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

// ================= EU Cáceres =================
const datosEUCaceres = [
  36153, // 1983
  28725, // 1987
  10328, // 1991
  15218, // 1995
  8415,  // 1999
  9075,  // 2003
  2059,  // 2015
  2428,  // 2019
  1521   // 2025
];

const etiquetasEUCaceres = [
  '1983','1987','1991','1995',
  '1999','2003','2015','2019','2025'
];

const partidosEUCaceres = Array(etiquetasEUCaceres.length).fill('EU');

const ctxEUCaceres = document
  .getElementById('euCaceresChart')
  .getContext('2d');

new Chart(ctxEUCaceres, {
  data: {
    labels: etiquetasEUCaceres,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosEUCaceres,
        backgroundColor: 'rgba(63,123,63,0.8)', // verde EU
        borderColor: '#3f7b3f',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#3f7b3f',
          font: { weight: 'bold' },
          formatter: (v) => v.toLocaleString('es-ES')
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosEUCaceres,
        borderColor: '#3f7b3f',
        backgroundColor: 'transparent',
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#3f7b3f'
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
      datalabels: {
        display: true
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Votos totales'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Año'
        }
      }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoEUCaceres',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;

        datosEUCaceres.forEach((_, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;

          ctx.save();
          ctx.fillStyle = '#3f7b3f';
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

// ================= CDS Cáceres =================
const datosCDSCaceres = [4414, 26052, 12559];
const etiquetasCDSCaceres = ['1983','1987','1991'];
const partidosCDSCaceres = ['CDS','CDS','CDS'];

const ctxCDSCaceres = document.getElementById('cdsCaceresChart').getContext('2d');

new Chart(ctxCDSCaceres, {
  data: {
    labels: etiquetasCDSCaceres,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCDSCaceres,
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
        data: datosCDSCaceres,
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
      id: 'etiquetaPartidoCDSCaceres',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSCaceres.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1E90FF';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSCaceres[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PCE Cáceres =================
const datosPCECaceres = [8187];
const etiquetasPCECaceres = ['1983'];
const partidosPCECaceres = ['PCE'];

const ctxPCECaceres = document.getElementById('pceCaceresChart').getContext('2d');

new Chart(ctxPCECaceres, {
  data: {
    labels: etiquetasPCECaceres,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPCECaceres,
        backgroundColor: 'rgba(64,11,13,0.8)', // color PCE
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
        data: datosPCECaceres,
        borderColor: '#400b0d',
        backgroundColor: 'transparent',
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#400b0d'
      }
    ]
  },
  options: {
    responsive: true,
    animation: {
      duration: 1200,
      easing: 'easeOutQuart'
    },
    plugins: {
      legend: {
        position: 'top',
        labels: { color: '#333' }
      },
      datalabels: {
        display: true
      }
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
      id: 'etiquetaPartidoPCECaceres',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;

        datosPCECaceres.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;

          ctx.save();
          ctx.fillStyle = '#400b0d';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPCECaceres[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= IU Cáceres =================
const datosIUCaceres = [7057, 10963, 20994, 11263, 13871, 10112, 12789, 8388, 18466, 13833,20250];
const etiquetasIUCaceres = ['1987','1991','1995','1999','2003','2007','2011','2015','2019','2023','2025'];
const partidosIUCaceres = ['IU','IU','IU','IU','IU','IU','IU','IU','Podemos-IU','Podemos-IU-AV','Podemos-IU-AV'];

const ctxIUCaceres = document.getElementById('iuCaceresChart').getContext('2d');

new Chart(ctxIUCaceres, {
  data: {
    labels: etiquetasIUCaceres,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosIUCaceres,
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
        data: datosIUCaceres,
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
      id: 'etiquetaPartidoIUCaceres',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIUCaceres.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIUCaceres[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UPyD Cáceres =================
const datosUPyDCaceres = [3001, 1489]; // votos totales
const etiquetasUPyDCaceres = ['2011','2015'];
const partidosUPyDCaceres = ['UPyD','UPyD'];

const ctxUPyDCaceres = document.getElementById('upydCaceresChart').getContext('2d');

new Chart(ctxUPyDCaceres, {
  data: {
    labels: etiquetasUPyDCaceres,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUPyDCaceres,
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
        data: datosUPyDCaceres,
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
      id: 'etiquetaPartidoUPyDCaceres',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDCaceres.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#ff60da';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDCaceres[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const etiquetasCaceresTotal = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023','2025'];

const datosCaceresTotal = {
  'PP':           [64157, 58567, 67612, 105956, 105225, 107391, 105283, 123204, 93977, 69835, 91915,87971],
  'PSOE':         [105260, 106182, 117247, 111436, 119153, 127779, 135390, 106204, 93649, 104220, 86080,50566],
  'VOX':          [null,null,null,null,null,null,null,null,650,10986,19238,32798],
  'CS':           [null,null,null,null,null,null,null,null,12540,26260,1887,402],
  'UXE':   [null,null,null,null,null,null,null,null,22562,18466,13833,20250],
  'JUEX':           [null,null,null,null,null,null,null,null,null,null,3139,1767],
  'EU':           [36153,28725,10328,15218,8415,9075,null,null,2059,2428,null,1521],
  'CDS':          [4414, 26052, 12559,null,null,null,null,null,null,null,null],
  'PCE':          [8187, null, null,null,null,null,null,null,null,null,null],
  'IU':           [null,7057, 10963, 20994, 11263, 13871, 10112, 12789, 8388, 18466, 13833,20250],
  'UPyD':         [null,null,null,null,null,null,null,3001,1489,null,null],
};

const coloresPartidosCaceres = {
  'PP': '#0000FF',
  'PSOE': '#FF0000',
  'VOX': '#008000',
  'CS': '#FF8C00',
  'UXE': '#800080',
  'JUEX': '#2f561e',
  'EU': '#3f7b3f',
  'CDS': '#00BFFF',
  'PCE': '#400b0d',
  'IU': '#B22222',
  'UPyD': '#ff60da'
};

// Construcción de datasets
const datasetsCaceresTotal = Object.keys(datosCaceresTotal).map(partido => ({
  type: 'line',
  label: partido,
  data: datosCaceresTotal[partido],
  borderColor: coloresPartidosCaceres[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresPartidosCaceres[partido],
  datalabels: { 
    display: true,
    color: coloresPartidosCaceres[partido],
    font: { weight: 'bold', size: 12 },
    formatter: v => v != null ? v.toLocaleString() : ''
  }
}));

const ctxCaceresTotal = document.getElementById('votosTotalesCaceresChart').getContext('2d');

new Chart(ctxCaceresTotal, {
  data: {
    labels: etiquetasCaceresTotal,
    datasets: datasetsCaceresTotal
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