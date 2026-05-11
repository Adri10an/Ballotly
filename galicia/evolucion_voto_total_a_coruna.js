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
// ================= PP A CORUÑA =================
const datosPPAcoruna = [128287, 190356, 211847, 281578, 316003, 296734, 286278, 304779, 260941, 276223, 263293, 292651];
const etiquetasPPAcoruna = ['1981','1985','1989','1993','1997','2001','2005','2009','2012','2016','2020','2024'];
const partidosPPAcoruna = ['AP-PDP-UL','AP','PP','PP','PP','PP','PP','PP','PP','PP','PP','PP'];

const ctxPPAcoruna = document.getElementById('ppAcorunaChart').getContext('2d');

new Chart(ctxPPAcoruna, {
  data: {
    labels: etiquetasPPAcoruna,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales PP',
        data: datosPPAcoruna,
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
        data: datosPPAcoruna,
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
      id: 'etiquetaPartidoPPAcoruna',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPAcoruna.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPAcoruna[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= BNG A CORUÑA =================
const datosBNGAcoruña = [26303, 25970, 48257, 112713, 166556, 146816, 136696, 105344, 55499, 51043, 133144, 199462];
const etiquetasBNGAcoruña = ['1981','1985','1989','1993','1997','2001','2005','2009','2012','2016','2020','2024'];
const partidosBNGAcoruña = ['BNG','BNG','BNG','BNG','BNG','BNG','BNG','BNG','BNG','BNG','BNG','BNG'];

const ctxBNGAcoruña = document.getElementById('bngAcorunaChart').getContext('2d');

new Chart(ctxBNGAcoruña, {
  data: {
    labels: etiquetasBNGAcoruña,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales BNG',
        data: datosBNGAcoruña,
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
        data: datosBNGAcoruña,
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

// ================= PSOE A CORUÑA =================
const datosPSOEAcoruña = [94127, 162247, 182970, 141544, 127587, 139662, 221436, 204779, 107381, 99263, 89767, 79804];
const etiquetasPSOEAcoruña = ['1981','1985','1989','1993','1997','2001','2005','2009','2012','2016','2020','2024'];
const partidosPSOEAcoruña = ['PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE'];

const ctxPSOEAcoruña = document.getElementById('psoeAcorunaChart').getContext('2d');

new Chart(ctxPSOEAcoruña, {
  data: {
    labels: etiquetasPSOEAcoruña,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales PSOE',
        data: datosPSOEAcoruña,
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
        data: datosPSOEAcoruña,
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
      id: 'etiquetaPartidoPSOEAcoruña',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSOEAcoruña.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSOEAcoruña[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= VOX A CORUÑA =================
const datosVOXAcoruña = [11359, 15399];
const etiquetasVOXAcoruña = ['2020','2024'];
const partidosVOXAcoruña = ['VOX','VOX'];

const ctxVOXAcoruña = document.getElementById('voxAcorunaChart').getContext('2d');

new Chart(ctxVOXAcoruña, {
  data: {
    labels: etiquetasVOXAcoruña,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales VOX',
        data: datosVOXAcoruña,
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
        data: datosVOXAcoruña,
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
      id: 'etiquetaPartidoVOXAcoruña',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXAcoruña.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXAcoruña[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= SUMAR A CORUÑA (votos totales, 2024) =================
const datosSUMARAcoruña = [14014];
const etiquetasSUMARAcoruña = ['2024'];
const partidosSUMARAcoruña = ['SUMAR'];

const ctxSUMARAcoruña = document.getElementById('sumarAcorunaChart').getContext('2d');

new Chart(ctxSUMARAcoruña, {
  data: {
    labels: etiquetasSUMARAcoruña,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales SUMAR',
        data: datosSUMARAcoruña,
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
        data: datosSUMARAcoruña,
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
      id: 'etiquetaPartidoSUMARAcoruña',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosSUMARAcoruña.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF1493';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosSUMARAcoruña[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Podemos/IU A CORUÑA =================
const datosPodemosACoruna = [111866, 23757, 1999];
const etiquetasPodemosACoruna = ['2016','2020','2024'];
const partidosPodemosACoruna = ['Podemos','Podemos','Podemos-IU'];

const ctxPodemosACoruna = document.getElementById('podemosAcorunaChart').getContext('2d');

new Chart(ctxPodemosACoruna, {
  data: {
    labels: etiquetasPodemosACoruna,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales Podemos/IU',
        data: datosPodemosACoruna,
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
        data: datosPodemosACoruna,
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
      id: 'etiquetaPartidoPodemosACoruna',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosACoruna.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosACoruna[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CS A CORUÑA =================
const datosCSACoruna = [19248, 2943];
const etiquetasCSACoruna = ['2016','2020'];
const partidosCSACoruna = ['CS','CS'];

const ctxCSACoruna = document.getElementById('csAcorunaChart').getContext('2d');

new Chart(ctxCSACoruna, {
  data: {
    labels: etiquetasCSACoruna,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales CS',
        data: datosCSACoruna,
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
        data: datosCSACoruna,
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
      id: 'etiquetaPartidoCSACoruna',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSACoruna.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSACoruna[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CG A CORUÑA =================
const datosCGACoruna = [49800, 8262, 2197];
const etiquetasCGACoruna = ['1985','1989','1993'];
const partidosCGACoruna = ['CG','CG','CG'];

const ctxCGACoruna = document.getElementById('cgAcorunaChart').getContext('2d');

new Chart(ctxCGACoruna, {
  data: {
    labels: etiquetasCGACoruna,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales CG',
        data: datosCGACoruna,
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
        data: datosCGACoruna,
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
      id: 'etiquetaPartidoCGACoruna',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCGACoruna.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#041595';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCGACoruna[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PSG-EG A CORUÑA =================
const datosPSGEGACoruna = [28473, 21438];
const etiquetasPSGEGACoruna = ['1985','1989'];
const partidosPSGEGACoruna = ['PSG-EG','PSG-EG'];

const ctxPSGEGACoruna = document.getElementById('psgEgAcorunaChart').getContext('2d');

new Chart(ctxPSGEGACoruna, {
  data: {
    labels: etiquetasPSGEGACoruna,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales PSG-EG',
        data: datosPSGEGACoruna,
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
        data: datosPSGEGACoruna,
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
      id: 'etiquetaPartidoPSGEGACoruna',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSGEGACoruna.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#01add7';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSGEGACoruna[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= AGE A CORUÑA =================
const datosAGEACoruna = [96008];
const etiquetasAGEACoruna = ['2012'];
const partidosAGEACoruna = ['AGE'];

const ctxAGEACoruna = document.getElementById('ageAcorunaChart').getContext('2d');

new Chart(ctxAGEACoruna, {
  data: {
    labels: etiquetasAGEACoruna,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales AGE',
        data: datosAGEACoruna,
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
        data: datosAGEACoruna,
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
      id: 'etiquetaPartidoAGEACoruna',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosAGEACoruna.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#ada0f5';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosAGEACoruna[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UCD A CORUÑA =================
const datosUCDACoruna = [76591];
const etiquetasUCDACoruna = ['1981'];
const partidosUCDACoruna = ['UCD'];

const ctxUCDACoruna = document.getElementById('ucdAcorunaChart').getContext('2d');

new Chart(ctxUCDACoruna, {
  data: {
    labels: etiquetasUCDACoruna,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales UCD',
        data: datosUCDACoruna,
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
        data: datosUCDACoruna,
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
      id: 'etiquetaPartidoUCDACoruna',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUCDACoruna.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FFA500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUCDACoruna[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CDS A CORUÑA =================
const datosCDSACoruna = [16981, 15586];
const etiquetasCDSACoruna = ['1985','1989'];
const partidosCDSACoruna = ['CDS','CDS'];

const ctxCDSACoruna = document.getElementById('cdsAcorunaChart').getContext('2d');

new Chart(ctxCDSACoruna, {
  data: {
    labels: etiquetasCDSACoruna,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales CDS',
        data: datosCDSACoruna,
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
        data: datosCDSACoruna,
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
      id: 'etiquetaPartidoCDSACoruna',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSACoruna.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1E90FF';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSACoruna[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= IU A CORUÑA =================
const datosIUACoruna = [10033, 21253, 5608, 4278, 6691, 7348];
const etiquetasIUACoruna = ['1989','1993','1997','2001','2005','2009'];
const partidosIUACoruna = ['IU','IU','IU','IU','IU','IU'];

const ctxIUACoruna = document.getElementById('iuAcorunaChart').getContext('2d');

new Chart(ctxIUACoruna, {
  data: {
    labels: etiquetasIUACoruna,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales IU',
        data: datosIUACoruna,
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
        data: datosIUACoruna,
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
      id: 'etiquetaPartidoIUACoruna',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIUACoruna.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIUACoruna[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UPyD A CORUÑA =================
const datosUPyDACoruna = [11345, 10400];
const etiquetasUPyDACoruna = ['2009','2012'];
const partidosUPyDACoruna = ['UPyD','UPyD'];

const ctxUPyDACoruna = document.getElementById('upydAcorunaChart').getContext('2d');

new Chart(ctxUPyDACoruna, {
  data: {
    labels: etiquetasUPyDACoruna,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales UPyD',
        data: datosUPyDACoruna,
        backgroundColor: 'rgba(255,96,218,0.7)', // color UPyD
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
        data: datosUPyDACoruna,
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoUPyDACoruna',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDACoruna.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF60DA';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDACoruna[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const etiquetasAcoruna = ['1981','1985','1989','1993','1997','2001','2005','2009','2012','2016','2020','2024'];

const datosAcoruna = {
  'PP / AP-PDP-UL': [128287, 190356, 211847, 281578, 316003, 296734, 286278, 304779, 260941, 276223, 263293, 292651],
  'PSOE':          [94127, 162247, 182970, 141544, 127587, 139662, 221436, 204779, 107381, 99263, 89767, 79804],
  'BNG':           [26303, 25970, 48257, 112713, 166556, 146816, 136696, 105344, 55499, 51043, 133144, 199462],
  'VOX':           [null,null,null,null,null,null,null,null,null,null,11359,15399],
  'SUMAR':         [null,null,null,null,null,null,null,null,null,null,null,14014],
  'Podemos/IU':    [null,null,null,null,null,null,null,null,null,111866,23757,1999],
  'CS':            [null,null,null,null,null,null,null,null,null,19248,2943,null],
  'CG':            [null,49800,8262,2197,null,null,null,null,null,null,null,null],
  'PSG-EG':        [null,28473,21438,null,null,null,null,null,null,null,null,null],
  'AGE':           [null,null,null,null,null,null,null,null,96008,null,null,null],
  'UCD':           [76591,null,null,null,null,null,null,null,null,null,null,null],
  'CDS':           [null,16981,15586,null,null,null,null,null,null,null,null,null],
  'IU':            [null,null,10033,21253,5608,4278,6691,7348,null,null,null,null],
  'UPyD':          [null,null,null,null,null,null,null,11345,10400,null,null,null]
};

const coloresPartidosAcoruna = {
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

const datasetsAcoruna = Object.keys(datosAcoruna).map(partido => ({
  type: 'line',
  label: partido,
  data: datosAcoruna[partido],
  borderColor: coloresPartidosAcoruna[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresPartidosAcoruna[partido],
  datalabels: { 
    display: true,
    color: coloresPartidosAcoruna[partido],
    font: { weight: 'bold', size: 12 },
    formatter: v => v != null ? v.toLocaleString() : ''
  }
}));

const ctxAcoruna = document.getElementById('votosTotalesAcorunaChart').getContext('2d');

new Chart(ctxAcoruna, {
  data: {
    labels: etiquetasAcoruna,
    datasets: datasetsAcoruna
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