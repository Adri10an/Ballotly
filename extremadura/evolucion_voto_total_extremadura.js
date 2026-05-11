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
// ================= PP Extremadura =================
const datosPPExtremadura = [168606, 144117, 155028, 259703, 258657, 255808, 257392, 307558, 235802, 168589, 236235,228991];
const etiquetasPPExtremadura = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023','2025'];
const partidosPPExtremadura = ['AP-PDP-UL','AP','PP','PP','PP','PP','PP','PP','PP','PP','PP','PP'];

const ctxPPExtremadura = document.getElementById('ppExtremaduraChart').getContext('2d');

new Chart(ctxPPExtremadura, {
  data: {
    labels: etiquetasPPExtremadura,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPPExtremadura,
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
        data: datosPPExtremadura,
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
      id: 'etiquetaPartidoPPExtremadura',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPExtremadura.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPExtremadura[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosPSEExtremadura = [296939, 292935, 313649, 289149, 313417, 341522, 352342, 289467, 264364, 286563, 242659,136838];
const etiquetasPSEExtremadura = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023','2025'];
const partidosPSEExtremadura = ['PSOE','PSOE','PSOE','PSOE','PSOE-PROGR','PSOE-PROGR','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE'];

const ctxPSEExtremadura = document.getElementById('psoeExtremaduraChart').getContext('2d');

new Chart(ctxPSEExtremadura, {
  data: {
    labels: etiquetasPSEExtremadura,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPSEExtremadura,
        backgroundColor: 'rgba(255,0,0,0.7)', // rojo PSOE
        borderColor: '#FF0000',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#FF0000', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPSEExtremadura,
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
      id: 'etiquetaPartidoPSEExtremadura',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSEExtremadura.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSEExtremadura[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosVOXExtremadura = [1773, 28849, 49400,89768];
const etiquetasVOXExtremadura = ['2015','2019','2023','2025'];
const partidosVOXExtremadura = ['VOX','VOX','VOX','VOX'];

const ctxVOXExtremadura = document.getElementById('voxExtremaduraChart').getContext('2d');

new Chart(ctxVOXExtremadura, {
  data: {
    labels: etiquetasVOXExtremadura,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosVOXExtremadura,
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
        data: datosVOXExtremadura,
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
      id: 'etiquetaPartidoVOXExtremadura',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXExtremadura.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXExtremadura[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosCSExtremadura = [27833, 68132, 5408,1324];
const etiquetasCSExtremadura = ['2015','2019','2023','2025'];
const partidosCSExtremadura = ['CS','CS','CS','CS'];

const ctxCSExtremadura = document.getElementById('csExtremaduraChart').getContext('2d');

new Chart(ctxCSExtremadura, {
  data: {
    labels: etiquetasCSExtremadura,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCSExtremadura,
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
        data: datosCSExtremadura,
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
      id: 'etiquetaPartidoCSExtremadura',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSExtremadura.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSExtremadura[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosPodemosExtremadura = [50873, 44008, 36379,54541];
const etiquetasPodemosExtremadura = ['2015','2019','2023','2025'];
const partidosPodemosExtremadura = ['Podemos','UXE','UXE','UXE'];

const ctxPodemosExtremadura = document.getElementById('podemosExtremaduraChart').getContext('2d');

new Chart(ctxPodemosExtremadura, {
  data: {
    labels: etiquetasPodemosExtremadura,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPodemosExtremadura,
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
        data: datosPodemosExtremadura,
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
      id: 'etiquetaPartidoPodemosExtremadura',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosExtremadura.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosExtremadura[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CDS Extremadura =================
const datosCDSExtremadura = [4414, 73572, 33313];
const etiquetasCDSExtremadura = ['1983','1987','1991'];
const partidosCDSExtremadura = ['CDS','CDS','CDS'];

const ctxCDSExtremadura = document.getElementById('cdsExtremaduraChart').getContext('2d');

new Chart(ctxCDSExtremadura, {
  data: {
    labels: etiquetasCDSExtremadura,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCDSExtremadura,
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
        data: datosCDSExtremadura,
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
      id: 'etiquetaPartidoCDSExtremadura',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSExtremadura.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1E90FF';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSExtremadura[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PCE Extremadura =================
const datosPCEExtremadura = [36294];
const etiquetasPCEExtremadura = ['1983'];
const partidosPCEExtremadura = ['PCE'];

const ctxPCEExtremadura = document
  .getElementById('pceExtremaduraChart')
  .getContext('2d');

new Chart(ctxPCEExtremadura, {
  data: {
    labels: etiquetasPCEExtremadura,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPCEExtremadura,
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
        data: datosPCEExtremadura,
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
      id: 'etiquetaPartidoPCEExtremadura',
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

// ================= JUEX Extremadura =================
const datosJUEXExtremadura = [15503,4156];
const etiquetasJUEXExtremadura = ['2023','2025'];
const partidosJUEXExtremadura = ['JUEX','JUEX'];

const ctxJUEXExtremadura = document
  .getElementById('juexExtremaduraChart')
  .getContext('2d');

new Chart(ctxJUEXExtremadura, {
  data: {
    labels: etiquetasJUEXExtremadura,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosJUEXExtremadura,
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
        data: datosJUEXExtremadura,
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
      id: 'etiquetaPartidoJUEXExtremadura',
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

// ================= EU Extremadura =================
const datosEUExtremadura = [
  47504, // 1983
  34606, // 1987
  14452, // 1991
  25168, // 1995
  10783, // 1999
  12171, // 2003
  3215,  // 2015
  3946,  // 2019
  1521   // 2025
];

const etiquetasEUExtremadura = [
  '1983','1987','1991','1995',
  '1999','2003','2015','2019','2025'
];

const partidosEUExtremadura = Array(etiquetasEUExtremadura.length).fill('EU');

const ctxEUExtremadura = document
  .getElementById('euExtremaduraChart')
  .getContext('2d');

new Chart(ctxEUExtremadura, {
  data: {
    labels: etiquetasEUExtremadura,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosEUExtremadura,
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
        data: datosEUExtremadura,
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
      id: 'etiquetaPartidoEUExtremadura',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;

        datosEUExtremadura.forEach((_, i) => {
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

// ================= IU/Podemos Extremadura =================
const datosIUExtremadura = [32240, 41278, 69387, 39132, 41448, 30028, 37096, 27004, 44008, 36379,54490];
const etiquetasIUExtremadura = ['1987','1991','1995','1999','2003','2007','2011','2015','2019','2023','2025'];
const partidosIUExtremadura = ['IU','IU','IU','IU','IU','IU','IU','IU','Podemos-IU','Podemos-IU','Podemos-IU'];

const ctxIUExtremadura = document.getElementById('iuExtremaduraChart').getContext('2d');

new Chart(ctxIUExtremadura, {
  data: {
    labels: etiquetasIUExtremadura,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosIUExtremadura,
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
        data: datosIUExtremadura,
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
      id: 'etiquetaPartidoIUExtremadura',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIUExtremadura.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIUExtremadura[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UPyD Extremadura =================
const datosUPyDExtremadura = [7062, 3919]; // votos totales
const etiquetasUPyDExtremadura = ['2011','2015'];
const partidosUPyDExtremadura = ['UPyD','UPyD'];

const ctxUPyDExtremadura = document.getElementById('upydExtremaduraChart').getContext('2d');

new Chart(ctxUPyDExtremadura, {
  data: {
    labels: etiquetasUPyDExtremadura,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUPyDExtremadura,
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
        data: datosUPyDExtremadura,
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
      id: 'etiquetaPartidoUPyDExtremadura',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDExtremadura.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#ff60da';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDExtremadura[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const etiquetasExtremadura = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023','2025'];

const datosExtremadura = {
  'PP':           [168606, 144117, 155028, 259703, 258657, 255808, 257392, 307558, 235802, 168589, 236235,228991],
  'PSOE':         [296939, 292935, 313649, 289149, 313417, 341522, 352342, 289467, 264364, 286563, 242659,136838],
  'VOX':          [null,null,null,null,null,null,null,null,1773,28849,49400,89768],
  'CS':           [null,null,null,null,null,null,null,null,27833,68132,5408,1324],
  'UXE':   [null,null,null,null,null,null,null,null,50873,44008,36379,54541],
  'JUEX':   [null,null,null,null,null,null,null,null,null,null,15503,4156],
  'EU':   [47504,34606,14452,25168,10783,12171,null,null,3215,3946,null,1521],
  'CDS':          [4414, 73572, 33313,null,null,null,null,null,null,null,null],
  'PCE':          [36294,null,null,null,null,null,null,null,null,null,null],
  'IU':           [null,32240,41278,69387,39132,41448,30028,37096,27004,44008,36379,54490],
  'UPyD':         [null,null,null,null,null,null,null,7062,3919,null,null]
};

const coloresPartidosExtremadura = {
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
const datasetsExtremadura = Object.keys(datosExtremadura).map(partido => ({
  type: 'line',
  label: partido,
  data: datosExtremadura[partido],
  borderColor: coloresPartidosExtremadura[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresPartidosExtremadura[partido],
  datalabels: { 
    display: true,
    color: coloresPartidosExtremadura[partido],
    font: { weight: 'bold', size: 12 },
    formatter: v => v != null ? v.toLocaleString() : ''
  }
}));

const ctxExtremadura = document.getElementById('votosTotalesExtremaduraChart').getContext('2d');

new Chart(ctxExtremadura, {
  data: {
    labels: etiquetasExtremadura,
    datasets: datasetsExtremadura
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