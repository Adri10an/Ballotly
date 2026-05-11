const etiquetasOurense = ['1981','1985','1989','1993','1997','2001','2005','2009','2012','2016','2020','2024'];

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
// ================= PP LUGO =================
const datosPPLugo = [43617, 85904, 101146, 123020, 131270, 124042, 115650, 109574, 97325, 96728, 89266, 100123];
const etiquetasPPLugo = ['1981','1985','1989','1993','1997','2001','2005','2009','2012','2016','2020','2024'];
const partidosPPLugo = ['AP-PDP-UL','AP','PP','PP','PP','PP','PP','PP','PP','PP','PP','PP'];

const ctxPPLugo = document.getElementById('ppLugoChart').getContext('2d');

new Chart(ctxPPLugo, {
  data: {
    labels: etiquetasPPLugo,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales PP',
        data: datosPPLugo,
        backgroundColor: 'rgba(0,0,255,0.7)', // color PP
        borderColor: '#0000FF',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#00008B', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPPLugo,
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
      id: 'etiquetaPartidoPPLugo',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPLugo.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPLugo[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= BNG LUGO =================
const datosBNGLugo = [11175, 6260, 13902, 35838, 44992, 43245, 34350, 34350, 16539, 13543, 35178, 46940];
const etiquetasBNGLugo = ['1981','1985','1989','1993','1997','2001','2005','2009','2012','2016','2020','2024'];
const partidosBNGLugo = ['BNG','BNG','BNG','BNG','BNG','BNG','BNG','BNG','BNG','BNG','BNG','BNG'];

const ctxBNGLugo = document.getElementById('bngLugoChart').getContext('2d');

new Chart(ctxBNGLugo, {
  data: {
    labels: etiquetasBNGLugo,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales BNG',
        data: datosBNGLugo,
        backgroundColor: 'rgba(116,177,224,0.7)', // color BNG
        borderColor: '#74b1e0',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#0b3d91', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosBNGLugo,
        borderColor: '#74b1e0',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#74b1e0'
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
  plugins: [ChartDataLabels]
});

// ================= PSOE LUGO =================
const datosPSOELugo = [22376, 46627, 65058, 50270, 43082, 47838, 81709, 74949, 42728, 34811, 28465, 32403];
const etiquetasPSOELugo = ['1981','1985','1989','1993','1997','2001','2005','2009','2012','2016','2020','2024'];
const partidosPSOELugo = ['PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE'];

const ctxPSOELugo = document.getElementById('psoeLugoChart').getContext('2d');

new Chart(ctxPSOELugo, {
  data: {
    labels: etiquetasPSOELugo,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales PSOE',
        data: datosPSOELugo,
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
        data: datosPSOELugo,
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
      id: 'etiquetaPartidoPSOELugo',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSOELugo.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSOELugo[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= VOX LUGO =================
const datosVOXLugo = [3381, 3517];
const etiquetasVOXLugo = ['2020','2024'];
const partidosVOXLugo = ['VOX','VOX'];

const ctxVOXLugo = document.getElementById('voxLugoChart').getContext('2d');

new Chart(ctxVOXLugo, {
  data: {
    labels: etiquetasVOXLugo,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales VOX',
        data: datosVOXLugo,
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
        data: datosVOXLugo,
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
      id: 'etiquetaPartidoVOXLugo',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXLugo.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXLugo[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= SUMAR Lugo (votos totales, 2024) =================
const datosSUMARLugo = [1198];
const etiquetasSUMARLugo = ['2024'];
const partidosSUMARLugo = ['SUMAR'];

const ctxSUMARLugo = document.getElementById('sumarLugoChart').getContext('2d');

new Chart(ctxSUMARLugo, {
  data: {
    labels: etiquetasSUMARLugo,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales SUMAR',
        data: datosSUMARLugo,
        backgroundColor: 'rgba(255,105,180,0.7)', // rosa SUMAR
        borderColor: '#FF69B4',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#FF1493', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosSUMARLugo,
        borderColor: '#FF69B4',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#FF69B4'
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
      id: 'etiquetaPartidoSUMARLugo',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosSUMARLugo.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF1493';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosSUMARLugo[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Podemos/IU Lugo (votos totales, 2016-2024) =================
const datosPodemosLugo = [28125, 3715, 381];
const etiquetasPodemosLugo = ['2016','2020','2024'];
const partidosPodemosLugo = ['Podemos','Podemos','Podemos-IU'];

const ctxPodemosLugo = document.getElementById('podemosLugoChart').getContext('2d');

new Chart(ctxPodemosLugo, {
  data: {
    labels: etiquetasPodemosLugo,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPodemosLugo,
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
        data: datosPodemosLugo,
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
      id: 'etiquetaPartidoPodemosLugo',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosLugo.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosLugo[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CS Lugo (votos totales, 2016-2020) =================
const datosCSLugo = [5062, 592];
const etiquetasCSLugo = ['2016','2020'];
const partidosCSLugo = ['CS','CS'];

const ctxCSLugo = document.getElementById('csLugoChart').getContext('2d');

new Chart(ctxCSLugo, {
  data: {
    labels: etiquetasCSLugo,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCSLugo,
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
        data: datosCSLugo,
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
      id: 'etiquetaPartidoCSLugo',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSLugo.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSLugo[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CG Lugo (votos totales, 1985-1993) =================
const datosCGLugo = [39080, 15250, 936];
const etiquetasCGLugo = ['1985','1989','1993'];
const partidosCGLugo = ['CG','CG','CG'];

const ctxCGLugo = document.getElementById('cgLugoChart').getContext('2d');

new Chart(ctxCGLugo, {
  data: {
    labels: etiquetasCGLugo,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCGLugo,
        backgroundColor: 'rgba(4,21,149,0.7)', // azul CG
        borderColor: '#041595',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#041595', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCGLugo,
        borderColor: '#041595',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#041595'
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
      id: 'etiquetaPartidoCGLugo',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCGLugo.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#041595';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCGLugo[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PSG-EG Lugo (votos totales, 1985-1989) =================
const datosPSGEGLugo = [3826, 3587];
const etiquetasPSGEGLugo = ['1985','1989'];
const partidosPSGEGLugo = ['PSG-EG','PSG-EG'];

const ctxPSGEGLugo = document.getElementById('psgEgLugoChart').getContext('2d');

new Chart(ctxPSGEGLugo, {
  data: {
    labels: etiquetasPSGEGLugo,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPSGEGLugo,
        backgroundColor: 'rgba(1,173,215,0.7)', // azul PSG-EG
        borderColor: '#01add7',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#01add7', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPSGEGLugo,
        borderColor: '#01add7',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#01add7'
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
      id: 'etiquetaPartidoPSGEGLugo',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSGEGLugo.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#01add7';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSGEGLugo[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= AGE Ourense (votos totales, 2012) =================
// ================= AGE Lugo (votos totales, 2012) =================
const datosAGELugo = [19495];
const etiquetasAGELugo = ['2012'];
const partidosAGELugo = ['AGE'];

const ctxAGELugo = document.getElementById('ageLugoChart').getContext('2d');

new Chart(ctxAGELugo, {
  data: {
    labels: etiquetasAGELugo,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosAGELugo,
        backgroundColor: 'rgba(173,160,245,0.7)', // morado AGE
        borderColor: '#ada0f5',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#ada0f5', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosAGELugo,
        borderColor: '#ada0f5',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#ada0f5'
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
      id: 'etiquetaPartidoAGELugo',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosAGELugo.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#ada0f5';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosAGELugo[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UCD Lugo (votos totales, 1981) =================
const datosUCDLugo = [48733];
const etiquetasUCDLugo = ['1981'];
const partidosUCDLugo = ['UCD'];

const ctxUCDLugo = document.getElementById('ucdLugoChart').getContext('2d');

new Chart(ctxUCDLugo, {
  data: {
    labels: etiquetasUCDLugo,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUCDLugo,
        backgroundColor: 'rgba(255,165,0,0.7)', // naranja UCD
        borderColor: '#FFA500',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#FFA500', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosUCDLugo,
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoUCDLugo',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUCDLugo.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FFA500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUCDLugo[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CDS Lugo (votos totales, 1985-1989) =================
const datosCDSLugo = [4742, 5499];
const etiquetasCDSLugo = ['1985','1989'];
const partidosCDSLugo = ['CDS','CDS'];

const ctxCDSLugo = document.getElementById('cdsLugoChart').getContext('2d');

new Chart(ctxCDSLugo, {
  data: {
    labels: etiquetasCDSLugo,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCDSLugo,
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
        data: datosCDSLugo,
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
      id: 'etiquetaPartidoCDSLugo',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSLugo.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1E90FF';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSLugo[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= IU Lugo (votos totales, 1989-2009) =================
const datosIULugo = [1605, 3329, 1959, 1195, 836, 1464];
const etiquetasIULugo = ['1989','1993','1997','2001','2005','2009'];
const partidosIULugo = ['IU','IU','IU','IU','IU','IU'];

const ctxIULugo = document.getElementById('iuLugoChart').getContext('2d');

new Chart(ctxIULugo, {
  data: {
    labels: etiquetasIULugo,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosIULugo,
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
        data: datosIULugo,
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
      id: 'etiquetaPartidoIULugo',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIULugo.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIULugo[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UPyD Lugo (votos totales, 2009-2012) =================
const datosUPyDLugo = [2579, 1706];
const etiquetasUPyDLugo = ['2009','2012'];
const partidosUPyDLugo = ['UPyD','UPyD'];

const ctxUPyDLugo = document.getElementById('upydLugoChart').getContext('2d');

new Chart(ctxUPyDLugo, {
  data: {
    labels: etiquetasUPyDLugo,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUPyDLugo,
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
        data: datosUPyDLugo,
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
      id: 'etiquetaPartidoUPyDLugo',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDLugo.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#ff60da';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDLugo[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const etiquetasLugo = ['1981','1985','1989','1993','1997','2001','2005','2009','2012','2016','2020','2024'];

const datosLugo = {
  'PP / AP-PDP-UL': [43617, 85904, 101146, 123020, 131270, 124042, 115650, 109574, 97325, 96728, 89266, 100123],
  'PSOE':          [22376, 46627, 65058, 50270, 43082, 47838, 81709, 74949, 42728, 34811, 28465, 32403],
  'BNG':           [11175, 6260, 13902, 35838, 44992, 43245, 34350, 34350, 16539, 13543, 35178, 46940],
  'VOX':           [null,null,null,null,null,null,null,null,null,null,3381,3517],
  'SUMAR':         [null,null,null,null,null,null,null,null,null,null,null,1198],
  'Podemos/IU':    [null,null,null,null,null,null,null,null,null,28125,3715,381],
  'CS':            [null,null,null,null,null,null,null,null,null,5062,592,null],
  'CG':            [null,39080,15250,936,null,null,null,null,null,null,null,null],
  'PSG-EG':        [null,3826,3587,null,null,null,null,null,null,null,null,null],
  'AGE':           [null,null,null,null,null,null,null,null,19495,null,null,null],
  'UCD':           [48733,null,null,null,null,null,null,null,null,null,null,null],
  'CDS':           [null,4742,5499,null,null,null,null,null,null,null,null,null],
  'IU':            [null,null,1605,3329,1959,1195,836,1464,null,null,null,null],
  'UPyD':          [null,null,null,null,null,null,null,2579,1706,null,null,null]
};

const coloresPartidosLugo = {
  'PP / AP-PDP-UL': '#0000FF',
  'PSOE':          '#FF0000',
  'BNG':           '#74b1e0',
  'VOX':           '#008000',
  'SUMAR':         '#FF69B4',
  'Podemos/IU':    '#800080',
  'CS':            '#FF8C00',
  'CG':            '#041595',
  'PSG-EG':        '#01add7',
  'AGE':           '#ada0f5',
  'UCD':           '#FFA500',
  'CDS':           '#00BFFF',
  'IU':            '#B22222',
  'UPyD':          '#ff60da'
};

const datasetsLugo = Object.keys(datosLugo).map(partido => ({
  type: 'line',
  label: partido,
  data: datosLugo[partido],
  borderColor: coloresPartidosLugo[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresPartidosLugo[partido],
  datalabels: { 
    display: true,
    color: coloresPartidosLugo[partido],
    font: { weight: 'bold', size: 12 },
    formatter: v => v != null ? v.toLocaleString() : ''
  }
}));

const ctxLugo = document.getElementById('votosTotalesLugoChart').getContext('2d');

new Chart(ctxLugo, {
  data: {
    labels: etiquetasLugo,
    datasets: datasetsLugo
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