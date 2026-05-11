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
 
// ================= PP Jaén =================
const datosPPJaen = [54582, 97666, 86000, 133680, 152683, 152848, 135825, 151295, 152457, 104370, 73532, 135771];
const etiquetasPPJaen = ['1982','1986','1990','1994','1996','2000','2004','2008','2012','2015','2018','2022'];
const partidosPPJaen = ['AP','AP','PP','PP','PP','PP','PP','PP','PP','PP','PP','PP'];

const ctxPPJaen = document.getElementById('ppJaenChart').getContext('2d');

new Chart(ctxPPJaen, {
  data: {
    labels: etiquetasPPJaen,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPPJaen,
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
        data: datosPPJaen,
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
      id: 'etiquetaPartidoPPJaen',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPJaen.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPJaen[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PSOE Jaén =================
const datosPSOEJaen = [172595, 178975, 163923, 158712, 199637, 192766, 222596, 220424, 165030, 153208, 112339, 86686];
const etiquetasPSOEJaen = ['1982','1986','1990','1994','1996','2000','2004','2008','2012','2015','2018','2022'];
const partidosPSOEJaen = ['PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE'];

const ctxPSOEJaen = document.getElementById('psoeJaenChart').getContext('2d');

new Chart(ctxPSOEJaen, {
  data: {
    labels: etiquetasPSOEJaen,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPSOEJaen,
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
        data: datosPSOEJaen,
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
      id: 'etiquetaPartidoPSOEJaen',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSOEJaen.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#B22222';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSOEJaen[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= VOX Jaén =================
const datosVOXJaen = [1106, 27671, 41049];
const etiquetasVOXJaen = ['2015','2018','2022'];
const partidosVOXJaen = ['VOX','VOX','VOX'];

const ctxVOXJaen = document.getElementById('voxJaenChart').getContext('2d');

new Chart(ctxVOXJaen, {
  data: {
    labels: etiquetasVOXJaen,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosVOXJaen,
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
        data: datosVOXJaen,
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
      id: 'etiquetaPartidoVOXJaen',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXJaen.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXJaen[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= JAÉN MERECE MÁS =================
const datosJMMJaen = [18873];
const etiquetasJMMJaen = ['2022'];
const partidosJMMJaen = ['JMM'];

const ctxJMMJaen = document.getElementById('jaenMereceMasJaenChart').getContext('2d');

new Chart(ctxJMMJaen, {
  data: {
    labels: etiquetasJMMJaen,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosJMMJaen,
        backgroundColor: 'rgba(71,119,62,0.7)', // color #47773e
        borderColor: '#47773e',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#355334', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() // separador de miles
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosJMMJaen,
        borderColor: '#47773e',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#47773e'
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
      id: 'etiquetaPartidoJMMJaen',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosJMMJaen.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#355334';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosJMMJaen[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= POR ANDALUCÍA JAÉN =================
const datosPorAndaluciaJaen = [17875];
const etiquetasPorAndaluciaJaen = ['2022'];
const partidosPorAndaluciaJaen = ['Por Andalucía'];

const ctxPorAndaluciaJaen = document.getElementById('porAndaluciaJaenChart').getContext('2d');

new Chart(ctxPorAndaluciaJaen, {
  data: {
    labels: etiquetasPorAndaluciaJaen,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPorAndaluciaJaen,
        backgroundColor: 'rgba(196,32,101,0.7)', // color Por Andalucía
        borderColor: '#C42065',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#7A0F3E', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() // separador de miles
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPorAndaluciaJaen,
        borderColor: '#C42065',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#C42065'
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
      id: 'etiquetaPartidoPorAndaluciaJaen',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPorAndaluciaJaen.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#7A0F3E';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPorAndaluciaJaen[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CS JAÉN =================
const datosCSJaen = [21366, 50604, 7085];
const etiquetasCSJaen = ['2015','2018','2022'];
const partidosCSJaen = ['CS','CS','CS'];

const ctxCSJaen = document.getElementById('csJaenChart').getContext('2d');

new Chart(ctxCSJaen, {
  data: {
    labels: etiquetasCSJaen,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCSJaen,
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
        data: datosCSJaen,
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
      id: 'etiquetaPartidoCSJaen',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSJaen.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSJaen[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Adelante Andalucía JAÉN =================
const datosAdelanteJaen = [38473, 5695];
const etiquetasAdelanteJaen = ['2018','2022'];
const partidosAdelanteJaen = ['Adelante Andalucía','Adelante Andalucía'];

const ctxAdelanteJaen = document.getElementById('adelanteJaenChart').getContext('2d');

new Chart(ctxAdelanteJaen, {
  data: {
    labels: etiquetasAdelanteJaen,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosAdelanteJaen,
        backgroundColor: 'rgba(36,200,126,0.7)', // verde Adelante Andalucía
        borderColor: '#24C87E',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#15895A', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() // separador de miles
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosAdelanteJaen,
        borderColor: '#24C87E',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#24C87E'
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
      id: 'etiquetaPartidoAdelanteJaen',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosAdelanteJaen.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#15895A';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosAdelanteJaen[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Podemos/IU JAÉN =================
const datosPodemosJaen = [39624];
const etiquetasPodemosJaen = ['2015'];
const partidosPodemosJaen = ['Podemos-IU'];

const ctxPodemosJaen = document.getElementById('podemosJaenChart').getContext('2d');

new Chart(ctxPodemosJaen, {
  data: {
    labels: etiquetasPodemosJaen,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPodemosJaen,
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
        data: datosPodemosJaen,
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
      id: 'etiquetaPartidoPodemosJaen',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosJaen.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosJaen[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PA JAÉN =================
const datosPAJaen = [
  11567, // 1982
  9856,  // 1986
  17617, // 1990
  15307, // 1994
  13903, // 1996
  19407, // 2000
  23943, // 2004
  5821,  // 2012
  4355   // 2015
];
const etiquetasPAJaen = ['1982','1986','1990','1994','1996','2000','2004','2012','2015'];
const partidosPAJaen = ['PA','PA','PA','PA','PA','PA','PA','PA','PA'];

const ctxPAJaen = document.getElementById('paJaenChart').getContext('2d');

new Chart(ctxPAJaen, {
  data: {
    labels: etiquetasPAJaen,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPAJaen,
        backgroundColor: 'rgba(21,170,53,0.7)', // verde PA
        borderColor: '#15AA35',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#0F7A28', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPAJaen,
        borderColor: '#15AA35',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#15AA35'
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
      id: 'etiquetaPartidoPAJaen',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPAJaen.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#0F7A28';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPAJaen[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UCD JAÉN =================
const datosUCDJaen = [53794]; // 1982
const etiquetasUCDJaen = ['1982'];
const partidosUCDJaen = ['UCD'];

const ctxUCDJaen = document.getElementById('ucdJaenChart').getContext('2d');

new Chart(ctxUCDJaen, {
  data: {
    labels: etiquetasUCDJaen,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUCDJaen,
        backgroundColor: 'rgba(255,165,0,0.7)', // naranja UCD
        borderColor: '#FFA500',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#CC8400', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosUCDJaen,
        borderColor: '#FFA500',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#FFA500'
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
      id: 'etiquetaPartidoUCDJaen',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUCDJaen.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#CC8400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUCDJaen[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CDS JAÉN =================
const datosCDSJaen = [12345, 3710, 963]; // 1986, 1990, 1994
const etiquetasCDSJaen = ['1986','1990','1994'];
const partidosCDSJaen = ['CDS','CDS','CDS'];

const ctxCDSJaen = document.getElementById('cdsJaenChart').getContext('2d');

new Chart(ctxCDSJaen, {
  data: {
    labels: etiquetasCDSJaen,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCDSJaen,
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
        data: datosCDSJaen,
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
      id: 'etiquetaPartidoCDSJaen',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSJaen.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1E90FF';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSJaen[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= IU/Podemos JAÉN =================
const datosIUJaen = [
  57045,  // 1986
  36314,  // 1990
  58255,  // 1994
  51488,  // 1996
  29256,  // 2000
  27884,  // 2004
  25146,  // 2008
  32518,  // 2012
  20555   // 2015
];
const etiquetasIUJaen = ['1986','1990','1994','1996','2000','2004','2008','2012','2015'];
const partidosIUJaen = ['IU','IU','IU','IU','IU','IU','IU','IU','Podemos-IU'];

const ctxIUJaen = document.getElementById('iuJaenChart').getContext('2d');

new Chart(ctxIUJaen, {
  data: {
    labels: etiquetasIUJaen,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosIUJaen,
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
        data: datosIUJaen,
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
      id: 'etiquetaPartidoIUJaen',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIUJaen.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIUJaen[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UPyD JAÉN =================
const datosUPyDJaen = [
  1240,   // 2008
  8485,   // 2012
  5196,   // 2015
  353     // 2018
];
const etiquetasUPyDJaen = ['2008','2012','2015','2018'];
const partidosUPyDJaen = ['UPyD','UPyD','UPyD','UPyD'];

const ctxUPyDJaen = document.getElementById('upydJaenChart').getContext('2d');

new Chart(ctxUPyDJaen, {
  data: {
    labels: etiquetasUPyDJaen,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUPyDJaen,
        backgroundColor: 'rgba(255,96,218,0.7)', // rosa UPyD
        borderColor: '#FF60DA',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#FF60DA', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosUPyDJaen,
        borderColor: '#FF60DA',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#FF60DA'
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
      id: 'etiquetaPartidoUPyDJaen',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDJaen.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF60DA';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDJaen[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// Datos Jaén por partido
const etiquetasJaen = ['1982','1986','1990','1994','1996','2000','2004','2008','2012','2015','2018','2022'];

const datosJaen = {
  'PP/AP':       [54582, 97666, 86000, 133680, 152683, 152848, 135825, 151295, 152457, 104370, 73532, 135771],
  'PSOE':        [172595, 178975, 163923, 158712, 199637, 192766, 222596, 220424, 165030, 153208, 112339, 86686],
  'VOX':         [null, null, null, null, null, null, null, null, null, 1106, 27671, 41049],
  'CS':          [null, null, null, null, null, null, null, null, null, 21366, 50604, 7085],
  'Podemos/IU':  [null, null, null, null, null, null, null, null, null, 39624, null, null],
  'CDS':         [null, 12345, 3710, 963, null, null, null, null, null, null, null, null],
  'IU':          [null, 57045, 36314, 58255, 51488, 29256, 27884, 25146, 32518, 20555, null, null],
  'UPyD':        [null, null, null, null, null, null, null, 1240, 8485, 5196, 353, null],
  'PA':          [11567, 9856, 17617, 15307, 13903, 19407, 23943, null, 5821, 4355, null, null],
  'UCD':         [53794, null, null, null, null, null, null, null, null, null, null, null],
  'Por Andalucía':[null, null, null, null, null, null, null, null, null, null, null, 17875],
  'Adelante Andalucía':[null, null, null, null, null, null, null, null, null, null, 38473, 5695],
  'Jaén Merece Más':[null, null, null, null, null, null, null, null, null, null, null, 18873]
};

const coloresPartidosJaen = {
  'PP/AP': '#0000FF',
  'PSOE': '#FF0000',
  'VOX': '#008000',
  'CS': '#FF8C00',
  'Podemos/IU': '#800080',
  'CDS': '#00BFFF',
  'IU': '#B22222',
  'UPyD': '#FF60DA',
  'PA': '#15AA35',
  'UCD': '#FFA500',
  'Por Andalucía': '#C42065',
  'Adelante Andalucía': '#24C87E',
  'Jaén Merece Más': '#47773e'
};

const datasetsJaen = Object.keys(datosJaen).map(partido => ({
  type: 'line',
  label: partido,
  data: datosJaen[partido],
  borderColor: coloresPartidosJaen[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresPartidosJaen[partido],
  datalabels: { 
    display: true,
    color: coloresPartidosJaen[partido],
    font: { weight: 'bold', size: 12 },
    formatter: v => v != null ? v.toLocaleString() : ''
  }
}));

const ctxJaen = document.getElementById('votosTotalesJaenChart').getContext('2d');

new Chart(ctxJaen, {
  data: {
    labels: etiquetasJaen,
    datasets: datasetsJaen
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