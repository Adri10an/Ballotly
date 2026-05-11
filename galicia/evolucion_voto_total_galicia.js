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
    
// ================= PP Galicia =================
const datosPPGalicia = [301039, 516218, 583579, 763839, 832751, 791885, 756562, 789427, 661281, 682150, 627762, 711713];
const etiquetasPPGalicia = ['1981','1985','1989','1993','1997','2001','2005','2009','2012','2016','2020','2024'];
const partidosPPGalicia = ['AP-PDP-UL','AP','PP','PP','PP','PP','PP','PP','PP','PP','PP','PP'];

const ctxPPGalicia = document.getElementById('ppGaliciaChart').getContext('2d');

new Chart(ctxPPGalicia, {
  data: {
    labels: etiquetasPPGalicia,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales PP',
        data: datosPPGalicia,
        backgroundColor: 'rgba(0, 0, 255, 0.7)', // azul puro con transparencia
        borderColor: '#0000FF', // azul puro
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#0000FF', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPPGalicia,
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
      id: 'etiquetaPartidoPPGalicia',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPGalicia.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#0000FF';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPGalicia[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= BNG Galicia =================
const datosBNGGalicia = [61870, 53072, 105703, 269233, 395435, 346423, 311954, 270712, 146027, 119446, 311340, 470692];
const etiquetasBNGGalicia = ['1981','1985','1989','1993','1997','2001','2005','2009','2012','2016','2020','2024'];
const partidosBNGGalicia = ['BNG','BNG','BNG','BNG','BNG','BNG','BNG','BNG','BNG','BNG','BNG','BNG'];

const ctxBNGGalicia = document.getElementById('bngGaliciaChart').getContext('2d');

new Chart(ctxBNGGalicia, {
  data: {
    labels: etiquetasBNGGalicia,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales BNG',
        data: datosBNGGalicia,
        backgroundColor: 'rgba(116,177,224,0.7)', // color característico BNG
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
        data: datosBNGGalicia,
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoBNGGalicia',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosBNGGalicia.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#0b3d91';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosBNGGalicia[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PSOE Galicia =================
const datosPSOEGalicia = [193456, 361946, 433256, 346831, 310508, 334819, 555603, 524488, 297584, 256381, 253750, 211361];
const etiquetasPSOEGalicia = ['1981','1985','1989','1993','1997','2001','2005','2009','2012','2016','2020','2024'];
const partidosPSOEGalicia = ['PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE'];

const ctxPSOEGalicia = document.getElementById('psoeGaliciaChart').getContext('2d');

new Chart(ctxPSOEGalicia, {
  data: {
    labels: etiquetasPSOEGalicia,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales PSOE',
        data: datosPSOEGalicia,
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
        data: datosPSOEGalicia,
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
      id: 'etiquetaPartidoPSOEGalicia',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSOEGalicia.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSOEGalicia[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= DO Galicia =================
const datosDOGalicia = [623, 1066, 4203, 7723, 15442];
const etiquetasDOGalicia = ['2005','2009','2012','2016','2024'];
const partidosDOGalicia = ['DO','DO','DO','DO','DO'];

const ctxDOGalicia = document.getElementById('doGaliciaChart').getContext('2d');

new Chart(ctxDOGalicia, {
  data: {
    labels: etiquetasDOGalicia,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales DO',
        data: datosDOGalicia,
        backgroundColor: 'rgba(241,203,71,0.7)', // color DO
        borderColor: '#f1cb47',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#f1cb47', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosDOGalicia,
        borderColor: '#f1cb47',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#f1cb47'
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
      id: 'etiquetaPartidoDOGalicia',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosDOGalicia.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#f1cb47';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosDOGalicia[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= VOX Galicia =================
const datosVOXGalicia = [26797, 34045];
const etiquetasVOXGalicia = ['2020','2024'];
const partidosVOXGalicia = ['VOX','VOX'];

const ctxVOXGalicia = document.getElementById('voxGaliciaChart').getContext('2d');

new Chart(ctxVOXGalicia, {
  data: {
    labels: etiquetasVOXGalicia,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales VOX',
        data: datosVOXGalicia,
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
        data: datosVOXGalicia,
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
      id: 'etiquetaPartidoVOXGalicia',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXGalicia.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXGalicia[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= SUMAR Galicia =================
const datosSUMARGalicia = [29009];
const etiquetasSUMARGalicia = ['2024'];
const partidosSUMARGalicia = ['SUMAR'];

const ctxSUMARGalicia = document.getElementById('sumarGaliciaChart').getContext('2d');

new Chart(ctxSUMARGalicia, {
  data: {
    labels: etiquetasSUMARGalicia,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales SUMAR',
        data: datosSUMARGalicia,
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
        data: datosSUMARGalicia,
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoSUMARGalicia',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosSUMARGalicia.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF1493';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosSUMARGalicia[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Podemos/IU Galicia =================
const datosPodemosGalicia = [273523, 51630, 4420];
const etiquetasPodemosGalicia = ['2016','2020','2024'];
const partidosPodemosGalicia = ['Podemos','Podemos','Podemos-IU'];

const ctxPodemosGalicia = document.getElementById('podemosGaliciaChart').getContext('2d');

new Chart(ctxPodemosGalicia, {
  data: {
    labels: etiquetasPodemosGalicia,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPodemosGalicia,
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
        data: datosPodemosGalicia,
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
      id: 'etiquetaPartidoPodemosGalicia',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosGalicia.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosGalicia[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CS Galicia =================
const datosCSGalicia = [48553, 9840];
const etiquetasCSGalicia = ['2016','2020'];
const partidosCSGalicia = ['CS','CS'];

const ctxCSGalicia = document.getElementById('csGaliciaChart').getContext('2d');

new Chart(ctxCSGalicia, {
  data: {
    labels: etiquetasCSGalicia,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales CS',
        data: datosCSGalicia,
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
        data: datosCSGalicia,
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
      id: 'etiquetaPartidoCSGalicia',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSGalicia.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSGalicia[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CG Galicia =================
const datosCGGalicia = [163425, 48208, 6098];
const etiquetasCGGalicia = ['1985','1989','1993'];
const partidosCGGalicia = ['CG','CG','CG'];

const ctxCGGalicia = document.getElementById('cgGaliciaChart').getContext('2d');

new Chart(ctxCGGalicia, {
  data: {
    labels: etiquetasCGGalicia,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales CG',
        data: datosCGGalicia,
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
        data: datosCGGalicia,
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
      id: 'etiquetaPartidoCGGalicia',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCGGalicia.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#041595';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCGGalicia[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PSG-EG Galicia =================
const datosPSGEGGalicia = [71599, 50047];
const etiquetasPSGEGGalicia = ['1985','1989'];
const partidosPSGEGGalicia = ['PSG-EG','PSG-EG'];

const ctxPSGEGGalicia = document.getElementById('psgEgGaliciaChart').getContext('2d');

new Chart(ctxPSGEGGalicia, {
  data: {
    labels: etiquetasPSGEGGalicia,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales PSG-EG',
        data: datosPSGEGGalicia,
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
        data: datosPSGEGGalicia,
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
      id: 'etiquetaPartidoPSGEGGalicia',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSGEGGalicia.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#01add7';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSGEGGalicia[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= AGE Galicia =================
const datosAGEGalicia = [200828];
const etiquetasAGEGalicia = ['2012'];
const partidosAGEGalicia = ['AGE'];

const ctxAGEGalicia = document.getElementById('ageGaliciaChart').getContext('2d');

new Chart(ctxAGEGalicia, {
  data: {
    labels: etiquetasAGEGalicia,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales AGE',
        data: datosAGEGalicia,
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
        data: datosAGEGalicia,
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
      id: 'etiquetaPartidoAGEGalicia',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosAGEGalicia.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#ada0f5';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosAGEGalicia[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UCD Galicia =================
const datosUCDGalicia = [274191];
const etiquetasUCDGalicia = ['1981'];
const partidosUCDGalicia = ['UCD'];

const ctxUCDGalicia = document.getElementById('ucdGaliciaChart').getContext('2d');

new Chart(ctxUCDGalicia, {
  data: {
    labels: etiquetasUCDGalicia,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales UCD',
        data: datosUCDGalicia,
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
        data: datosUCDGalicia,
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
      id: 'etiquetaPartidoUCDGalicia',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUCDGalicia.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FFA500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUCDGalicia[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CDS Galicia =================
const datosCDSGalicia = [41411, 38214];
const etiquetasCDSGalicia = ['1985','1989'];
const partidosCDSGalicia = ['CDS','CDS'];

const ctxCDSGalicia = document.getElementById('cdsGaliciaChart').getContext('2d');

new Chart(ctxCDSGalicia, {
  data: {
    labels: etiquetasCDSGalicia,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales CDS',
        data: datosCDSGalicia,
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
        data: datosCDSGalicia,
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
      id: 'etiquetaPartidoCDSGalicia',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSGalicia.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1E90FF';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSGalicia[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= IU Galicia =================
const datosIUGalicia = [19774, 44902, 13964, 10431, 12419, 16441];
const etiquetasIUGalicia = ['1989','1993','1997','2001','2005','2009'];
const partidosIUGalicia = ['IU','IU','IU','IU','IU','IU'];

const ctxIUGalicia = document.getElementById('iuGaliciaChart').getContext('2d');

new Chart(ctxIUGalicia, {
  data: {
    labels: etiquetasIUGalicia,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales IU',
        data: datosIUGalicia,
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
        data: datosIUGalicia,
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
      id: 'etiquetaPartidoIUGalicia',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIUGalicia.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIUGalicia[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UPyD Galicia =================
const datosUPyDGalicia = [23796, 21335];
const etiquetasUPyDGalicia = ['2009','2012'];
const partidosUPyDGalicia = ['UPyD','UPyD'];

const ctxUPyDGalicia = document.getElementById('upydGaliciaChart').getContext('2d');

new Chart(ctxUPyDGalicia, {
  data: {
    labels: etiquetasUPyDGalicia,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales UPyD',
        data: datosUPyDGalicia,
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
        data: datosUPyDGalicia,
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
      id: 'etiquetaPartidoUPyDGalicia',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDGalicia.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#ff60da';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDGalicia[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const etiquetasGalicia = ['1981','1985','1989','1993','1997','2001','2005','2009','2012','2016','2020','2024'];

const datosGalicia = {
  'PP / AP-PDP-UL': [301039, 516218, 583579, 763839, 832751, 791885, 756562, 789427, 661281, 682150, 627762, 711713],
  'PSOE':          [193456, 361946, 433256, 346831, 310508, 334819, 555603, 524488, 297584, 256381, 253750, 211361],
  'BNG':           [61870, 53072, 105703, 269233, 395435, 346423, 311954, 270712, 146027, 119446, 311340, 470692],
  'DO':            [null,null,null,null,null,null,623,1066,4203,7723,null,15442],
  'VOX':           [null,null,null,null,null,null,null,null,null,null,26797,34045],
  'SUMAR':         [null,null,null,null,null,null,null,null,null,null,null,29009],
  'Podemos/IU':    [null,null,null,null,null,null,null,null,null,273523,51630,4420],
  'CS':            [null,null,null,null,null,null,null,null,null,48553,9840,null],
  'CG':            [null,163425,48208,6098,null,null,null,null,null,null,null,null],
  'PSG-EG':        [null,71599,50047,null,null,null,null,null,null,null,null,null],
  'AGE':           [null,null,null,null,null,null,null,null,200828,null,null,null],
  'UCD':           [274191,null,null,null,null,null,null,null,null,null,null,null],
  'CDS':           [null,41411,38214,null,null,null,null,null,null,null,null,null],
  'IU':            [null,null,19774,44902,13964,10431,12419,16441,null,null,null,null],
  'UPyD':          [null,null,null,null,null,null,null,23796,21335,null,null,null]
};

const coloresPartidosGalicia = {
  'PP / AP-PDP-UL': '#0000FF',
  'PSOE':          '#FF0000',
  'BNG':           '#74b1e0',
  'DO':            '#f1cb47',
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

const datasetsGalicia = Object.keys(datosGalicia).map(partido => ({
  type: 'line',
  label: partido,
  data: datosGalicia[partido],
  borderColor: coloresPartidosGalicia[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresPartidosGalicia[partido],
  datalabels: { 
    display: true,
    color: coloresPartidosGalicia[partido],
    font: { weight: 'bold', size: 12 },
    formatter: v => v != null ? v.toLocaleString() : ''
  }
}));

const ctxGalicia = document.getElementById('votosTotalesGaliciaChart').getContext('2d');

new Chart(ctxGalicia, {
  data: {
    labels: etiquetasGalicia,
    datasets: datasetsGalicia
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