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
 
    // ================= PP CLM =================
// ================= PP Melilla =================
const datosPPMelillaTotales = [12425, 5338, 15440, 16102, 16852, 13654, 12943, 15555];
const etiquetasPPMelillaTotales = ['1995','1999','2003','2007','2011','2015','2019','2023'];
const partidosPPMelillaTotales = ['PP','PP','PP','PP','PP','PP','PP','PP'];

const ctxPPMelillaTotales = document.getElementById('ppMelillaChart').getContext('2d');

new Chart(ctxPPMelillaTotales, {
  data: {
    labels: etiquetasPPMelillaTotales,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPPMelillaTotales,
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
        data: datosPPMelillaTotales,
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
      id: 'etiquetaPartidoPPMelilla',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPMelillaTotales.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPMelillaTotales[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CPM Melilla =================
const datosCPMMelillaTotales = [4072, 5833, 7392, 6245, 7394, 8445, 10472, 5557];
const etiquetasCPMMelillaTotales = ['1995','1999','2003','2007','2011','2015','2019','2023'];
const partidosCPMMelillaTotales = ['CPM','CPM','CPM','CPM','CPM','CPM','CPM','CPM'];

const ctxCPMMelillaTotales = document.getElementById('cpmMelillaChart').getContext('2d');

new Chart(ctxCPMMelillaTotales, {
  data: {
    labels: etiquetasCPMMelillaTotales,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCPMMelillaTotales,
        backgroundColor: 'rgba(0,145,80,0.7)', // verde CPM
        borderColor: '#009150',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#009150', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() // separador de miles
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCPMMelillaTotales,
        borderColor: '#009150',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#009150'
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
      id: 'etiquetaPartidoCPMMelilla',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCPMMelillaTotales.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#009150';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCPMMelillaTotales[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PSOE Melilla =================
const datosPSOEMelillaTotales = [5232, 2674, 3365, 5246, 2683, 4013, 4928, 3148];
const etiquetasPSOEMelillaTotales = ['1995','1999','2003','2007','2011','2015','2019','2023'];
const partidosPSOEMelillaTotales = ['PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE'];

const ctxPSOEMelillaTotales = document.getElementById('psoeMelillaChart').getContext('2d');

new Chart(ctxPSOEMelillaTotales, {
  data: {
    labels: etiquetasPSOEMelillaTotales,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPSOEMelillaTotales,
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
        data: datosPSOEMelillaTotales,
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
      id: 'etiquetaPartidoPSOEMelilla',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSOEMelillaTotales.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSOEMelillaTotales[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= VOX Melilla =================
const datosVOXMelillaTotales = [2655, 2937];
const etiquetasVOXMelillaTotales = ['2019','2023'];
const partidosVOXMelillaTotales = ['VOX','VOX'];

const ctxVOXMelillaTotales = document.getElementById('voxMelillaChart').getContext('2d');

new Chart(ctxVOXMelillaTotales, {
  data: {
    labels: etiquetasVOXMelillaTotales,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosVOXMelillaTotales,
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
        data: datosVOXMelillaTotales,
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
      id: 'etiquetaPartidoVOXMelilla',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXMelillaTotales.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXMelillaTotales[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Somos Melilla =================
const datosSMMelilla = [1508];
const etiquetasSMMelilla = ['2023'];
const partidosSMMelilla = ['Somos Melilla'];

const ctxSMMelilla = document.getElementById('somosMelillaChart').getContext('2d');

new Chart(ctxSMMelilla, {
  data: {
    labels: etiquetasSMMelilla,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosSMMelilla,
        backgroundColor: 'rgba(0,156,140,0.7)', // color Somos Melilla
        borderColor: '#009C8C',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#00796B', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() // separador de miles
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosSMMelilla,
        borderColor: '#009C8C',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#009C8C'
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
      id: 'etiquetaPartidoSMMelilla',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosSMMelilla.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00796B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosSMMelilla[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosPodemosMelilla = [829, 408, 285];
const etiquetasPodemosMelilla = ['2015','2019','2023'];
const partidosPodemosMelilla = ['Podemos','Podemos','Podemos-IU'];

const ctxPodemosMelilla = document.getElementById('podemosMelillaChart').getContext('2d');

new Chart(ctxPodemosMelilla, {
  data: {
    labels: etiquetasPodemosMelilla,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPodemosMelilla,
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
        data: datosPodemosMelilla,
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
      id: 'etiquetaPartidoPodemosMelilla',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosMelilla.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosMelilla[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosCSMelilla = [2154, 1897];
const etiquetasCSMelilla = ['2015','2019'];
const partidosCSMelilla = ['CS','CS'];

const ctxCSMelilla = document.getElementById('csMelillaChart').getContext('2d');

new Chart(ctxCSMelilla, {
  data: {
    labels: etiquetasCSMelilla,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCSMelilla,
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
        data: datosCSMelilla,
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
      id: 'etiquetaPartidoCSMelilla',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSMelilla.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSMelilla[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosUPMMelilla = [2605, 3258];
const etiquetasUPMMelilla = ['1995','1999'];
const partidosUPMMelilla = ['UPM','UPM'];

const ctxUPMMelilla = document.getElementById('upmMelillaChart').getContext('2d');

new Chart(ctxUPMMelilla, {
  data: {
    labels: etiquetasUPMMelilla,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUPMMelilla,
        backgroundColor: 'rgba(0,51,95,0.7)', // azul oscuro UPM
        borderColor: '#00335F',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#00335F', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosUPMMelilla,
        borderColor: '#00335F',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#00335F'
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
      id: 'etiquetaPartidoUPMMelilla',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPMMelilla.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00335F';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPMMelilla[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosPIMMelilla = [2941, 739];
const etiquetasPIMMelilla = ['1999','2003'];
const partidosPIMMelilla = ['PIM','PIM'];

const ctxPIMMelilla = document.getElementById('pimMelillaChart').getContext('2d');

new Chart(ctxPIMMelilla, {
  data: {
    labels: etiquetasPIMMelilla,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPIMMelilla,
        backgroundColor: 'rgba(217,88,0,0.7)', // naranja PIM
        borderColor: '#D95800',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#D95800', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPIMMelilla,
        borderColor: '#D95800',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#D95800'
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
      id: 'etiquetaPartidoPIMMelilla',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPIMMelilla.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#D95800';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPIMMelilla[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosGILMelilla = [7402];
const etiquetasGILMelilla = ['1999'];
const partidosGILMelilla = ['GIL'];

const ctxGILMelilla = document.getElementById('gilMelillaChart').getContext('2d');

new Chart(ctxGILMelilla, {
  data: {
    labels: etiquetasGILMelilla,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosGILMelilla,
        backgroundColor: 'rgba(83,126,3,0.7)', // verde oliva GIL
        borderColor: '#537E03',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#537E03', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosGILMelilla,
        borderColor: '#537E03',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#537E03'
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
      id: 'etiquetaPartidoGILMelilla',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosGILMelilla.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#537E03';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosGILMelilla[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosPPLMelilla = [2128, 1734];
const etiquetasPPLMelilla = ['2011', '2015'];
const partidosPPLMelilla = ['PPL', 'PPL'];

const ctxPPLMelilla = document.getElementById('pplMelillaChart').getContext('2d');

new Chart(ctxPPLMelilla, {
  data: {
    labels: etiquetasPPLMelilla,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPPLMelilla,
        backgroundColor: 'rgba(125,171,205,0.7)', // azul claro PPL
        borderColor: '#7DABCD',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#7DABCD', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPPLMelilla,
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoPPLMelilla',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPLMelilla.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#7DABCD';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPLMelilla[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosIUMelilla = [715, 254, 248];
const etiquetasIUMelilla = ['1995', '1999', '2015'];
const partidosIUMelilla = ['IU', 'IU', 'Podemos-IU'];

const ctxIUMelilla = document.getElementById('iuMelillaChart').getContext('2d');

new Chart(ctxIUMelilla, {
  data: {
    labels: etiquetasIUMelilla,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosIUMelilla,
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
        data: datosIUMelilla,
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
      id: 'etiquetaPartidoIUMelilla',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIUMelilla.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIUMelilla[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosUPyDMelilla = [669, 352, 77];
const etiquetasUPyDMelilla = ['2011','2015','2019'];
const partidosUPyDMelilla = ['UPyD','UPyD','UPyD'];

const ctxUPyDMelilla = document.getElementById('upydMelillaChart').getContext('2d');

new Chart(ctxUPyDMelilla, {
  data: {
    labels: etiquetasUPyDMelilla,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUPyDMelilla,
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
        data: datosUPyDMelilla,
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
      id: 'etiquetaPartidoUPyDMelilla',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDMelilla.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF60DA';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDMelilla[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

  const etiquetasMelilla = ['1995','1999','2003','2007','2011','2015','2019','2023'];

  const datosMelilla = {
    'PP':           [12425, 5338, 15440, 16102, 16852, 13654, 12943, 15555],
    'PSOE':         [5232, 2674, 3365, 5246, 2683, 4013, 4928, 3148],
    'CPM':          [4072, 5833, 7392, 6245, 7394, 8445, 10472, 5557],
    'VOX':          [null,null,null,null,null,null,2655,2937],
    'Somos Melilla':[null,null,null,null,null,null,null,1508],
    'Podemos/IU':   [null,null,null,null,null,829,408,285],
    'CS':           [null,null,null,null,null,2154,1897,null],
    'UPM':          [2605, 3258,null,null,null,null,null,null],
    'PIM':          [null,2941,739,null,null,null,null,null],
    'GIL':          [null,7402,null,null,null,null,null,null],
    'PPL':          [null,null,null,null,2128,1734,null,null],
    'IU':           [715,254,null,null,null,248,null,null],
    'UPyD':         [null,null,null,null,669,352,77,null]
  };

  const coloresPartidosMelilla = {
    'PP': '#0000FF',
    'PSOE': '#FF0000',
    'CPM': '#009150',
    'VOX': '#008000',
    'Somos Melilla': '#009C8C',
    'Podemos/IU': '#800080',
    'CS': '#FF8C00',
    'UPM': '#00335F',
    'PIM': '#D95800',
    'GIL': '#537E03',
    'PPL': '#7DABCD',
    'IU': '#B22222',
    'UPyD': '#FF60DA'
  };

  const datasetsMelilla = Object.keys(datosMelilla).map(partido => ({
    type: 'line',
    label: partido,
    data: datosMelilla[partido],
    borderColor: coloresPartidosMelilla[partido],
    backgroundColor: 'transparent',
    fill: false,
    tension: 0.3,
    spanGaps: true,
    pointRadius: 4,
    pointBackgroundColor: coloresPartidosMelilla[partido],
    datalabels: { 
      display: true,
      color: coloresPartidosMelilla[partido],
      font: { weight: 'bold', size: 12 },
      formatter: v => v != null ? v.toLocaleString() : ''
    }
  }));

  const ctxMelilla = document.getElementById('votosTotalesMelillaChart').getContext('2d');

  new Chart(ctxMelilla, {
    data: {
      labels: etiquetasMelilla,
      datasets: datasetsMelilla
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