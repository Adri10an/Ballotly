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
const datosPPFormentera = [39.23, 39.78, 28.61, 25.52];
const etiquetasPPFormentera = ['1983','1987','1991','2015'];
const partidosPPFormentera = ['AP-PDP-UL','AP','PP','PP'];

const ctxPPFormentera = document.getElementById('ppFormenteraChart').getContext('2d');

new Chart(ctxPPFormentera, {
  data: {
    labels: etiquetasPPFormentera,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPPFormentera,
        backgroundColor: 'rgba(0,0,255,0.7)', // azul intenso
        borderColor: '#0000FF',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#00008B', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPPFormentera,
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
      y: { beginAtZero: true, title: { display: true, text: 'Porcentaje (%)', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoPPFormentera',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPFormentera.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPFormentera[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosPSOEFormentera = [49.09, 45.46, 40.39, 44.11, 44.19, 54.03, 59.28, 54.71, 44.66];
const etiquetasPSOEFormentera = ['1983','1987','1991','1995','2007','2011','2015','2019','2023'];
const partidosPSOEFormentera = ['PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE'];

const ctxPSOEFormentera = document.getElementById('psoeFormenteraChart').getContext('2d');

new Chart(ctxPSOEFormentera, {
  data: {
    labels: etiquetasPSOEFormentera,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPSOEFormentera,
        backgroundColor: 'rgba(255,0,0,0.7)', // rojo PSOE
        borderColor: '#FF0000',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#B22222', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPSOEFormentera,
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
      y: { beginAtZero: true, title: { display: true, text: 'Porcentaje (%)', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoPSOEFormentera',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSOEFormentera.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#B22222';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSOEFormentera[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosVOXFormentera = [3.34];
const etiquetasVOXFormentera = ['2023'];
const partidosVOXFormentera = ['VOX'];

const ctxVOXFormentera = document.getElementById('voxFormenteraChart').getContext('2d');

new Chart(ctxVOXFormentera, {
  data: {
    labels: etiquetasVOXFormentera,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosVOXFormentera,
        backgroundColor: 'rgba(0,128,0,0.7)', // verde VOX
        borderColor: '#008000',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#006400', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosVOXFormentera,
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
      y: { beginAtZero: true, title: { display: true, text: 'Porcentaje (%)', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoVOXFormentera',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXFormentera.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXFormentera[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosPDLFormentera = [11.49];
const etiquetasPDLFormentera = ['1983'];
const partidosPDLFormentera = ['PDL'];

const ctxPDLFormentera = document.getElementById('pdlFormenteraChart').getContext('2d');

new Chart(ctxPDLFormentera, {
  data: {
    labels: etiquetasPDLFormentera,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPDLFormentera,
        backgroundColor: 'rgba(28,29,172,0.7)', // color PDL
        borderColor: '#1c1dac',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#1c1dac', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPDLFormentera,
        borderColor: '#1c1dac',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#1c1dac'
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
      id: 'etiquetaPartidoPDLFormentera',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPDLFormentera.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1c1dac';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPDLFormentera[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosCOPFormentera = [55.57, 42.1];
const etiquetasCOPFormentera = ['1999','2003'];
const partidosCOPFormentera = ['COP','COP'];

const ctxCOPFormentera = document.getElementById('copFormenteraChart').getContext('2d');

new Chart(ctxCOPFormentera, {
  data: {
    labels: etiquetasCOPFormentera,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCOPFormentera,
        backgroundColor: 'rgba(184,84,65,0.7)', // color COP
        borderColor: '#b85441',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#b85441', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCOPFormentera,
        borderColor: '#b85441',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#b85441'
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
      id: 'etiquetaPartidoCOPFormentera',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCOPFormentera.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#b85441';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCOPFormentera[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosAIPFFormentera = [49.40, 42.80, 53.4, 54.48,38.39,38.21,46.61];
const etiquetasAIPFFormentera = ['1995','1999','2003','2007','2011','2019','2023'];
const partidosAIPFFormentera = ['AIPF','AIPF','AIPF','AIPF','SA UNIÓ','SA UNIÓ','SA UNIÓ'];

const ctxAIPFFormentera = document.getElementById('aipfFormenteraChart').getContext('2d');

new Chart(ctxAIPFFormentera, {
  data: {
    labels: etiquetasAIPFFormentera,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosAIPFFormentera,
        backgroundColor: 'rgba(0,162,159,0.7)', // color AIPF
        borderColor: '#00a29f',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#008080', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosAIPFFormentera,
        borderColor: '#00a29f',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#00a29f'
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
      id: 'etiquetaPartidoAIPFFormentera',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosAIPFFormentera.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#008080';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosAIPFFormentera[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosGUIFFormentera = [29.11];
const etiquetasGUIFFormentera = ['1991'];
const partidosGUIFFormentera = ['GUIF'];

const ctxGUIFFormentera = document.getElementById('guifFormenteraChart').getContext('2d');

new Chart(ctxGUIFFormentera, {
  data: {
    labels: etiquetasGUIFFormentera,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosGUIFFormentera,
        backgroundColor: 'rgba(139,69,19,0.7)', // marrón GUIF
        borderColor: '#8B4513',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#5C3317', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosGUIFFormentera,
        borderColor: '#8B4513',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#8B4513'
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
      id: 'etiquetaPartidoGUIFFormentera',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosGUIFFormentera.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#5C3317';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosGUIFFormentera[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosCompromisFormentera = [11.32];
const etiquetasCompromisFormentera = ['2015'];
const partidosCompromisFormentera = ['Compromís'];

const ctxCompromisFormentera = document.getElementById('compromisFormenteraChart').getContext('2d');

new Chart(ctxCompromisFormentera, {
  data: {
    labels: etiquetasCompromisFormentera,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCompromisFormentera,
        backgroundColor: 'rgba(219,100,38,0.7)', // color Compromís
        borderColor: '#DB6426',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#A7441B', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCompromisFormentera,
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
      id: 'etiquetaPartidoCompromisFormentera',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCompromisFormentera.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#A7441B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCompromisFormentera[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CDS Formentera 1987 =================
const datosCDSFormentera = [13.98];
const etiquetasCDSFormentera = ['1987'];
const partidosCDSFormentera = ['CDS'];

const ctxCDSFormentera = document.getElementById('cdsFormenteraChart').getContext('2d');

new Chart(ctxCDSFormentera, {
  data: {
    labels: etiquetasCDSFormentera,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCDSFormentera,
        backgroundColor: 'rgba(0,191,255,0.7)', // azul CDS
        borderColor: '#00BFFF',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#1E90FF', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCDSFormentera,
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
      y: { beginAtZero: true, title: { display: true, text: 'Porcentaje (%)', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoCDSFormentera',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSFormentera.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1E90FF';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSFormentera[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= IU Formentera 1995 =================
const datosIUFormentera = [4.51];
const etiquetasIUFormentera = ['1995'];
const partidosIUFormentera = ['IU'];

const ctxIUFormentera = document.getElementById('iuFormenteraChart').getContext('2d');

new Chart(ctxIUFormentera, {
  type: 'bar',
  data: {
    labels: etiquetasIUFormentera,
    datasets: [
      {
        label: 'Porcentaje de voto (%)',
        data: datosIUFormentera,
        backgroundColor: 'rgba(178,34,34,0.7)', // rojo IU
        borderColor: '#B22222',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#8B0000',
          font: { weight: 'bold' },
          formatter: (v) => v.toFixed(2) + '%'
        }
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
      datalabels: { display: true }
    },
    scales: {
      y: { beginAtZero: true, title: { display: true, text: 'Porcentaje (%)', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [ChartDataLabels]
});

  // Etiquetas de años
  const etiquetasFormentera = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023'];

  // Datos combinados por partido en Formentera
  const datosFormentera = {
    'PP/AP-PDP-UL': [39.23,39.78,28.61,null,null,null,null,null,25.52,null,null],
    'PSOE': [49.09,45.46,40.39,44.11,null,null,44.19,54.03,59.28,54.71,44.66],
    'VOX': [null,null,null,null,null,null,null,null,null,null,3.34],
    'COP': [null,null,null,null,55.57,42.1,null,null,null,null,null],
    'AIPF/SA UNIÓ': [null,null,null,49.40,42.80,53.4,54.48,38.39,null,38.21,46.61],
    'PDL': [11.49,null,null,null,null,null,null,null,null,null,null],
    'GUIF': [null,null,29.11,null,null,null,null,null,null,null,null],
    'Compromís': [null,null,null,null,null,null,null,null,11.32,null,null],
    'CDS': [null,13.98,null,null,null,null,null,null,null,null,null],
    'IU': [null,null,null,4.51,null,null,null,null,null,null,null]
  };

  // Colores de cada partido
  const coloresPartidosFormentera = {
    'PP/AP-PDP-UL': '#0000FF',
    'PSOE': '#FF0000',
    'VOX': '#008000',
    'COP': '#B85441',
    'AIPF/SA UNIÓ': '#00A29F',
    'PDL': '#1c1dac',
    'GUIF': '#8B4513',
    'Compromís': '#DB6426',
    'CDS': '#00BFFF',
    'IU': '#B22222'
  };

  // Crear datasets para Chart.js
  const datasetsFormentera = Object.keys(datosFormentera).map(partido => ({
    type: 'line',
    label: partido,
    data: datosFormentera[partido],
    borderColor: coloresPartidosFormentera[partido],
    backgroundColor: 'transparent',
    fill: false,
    tension: 0.3,
    spanGaps: true,
    pointRadius: 4,
    pointBackgroundColor: coloresPartidosFormentera[partido],
    datalabels: {
      display: true,
      color: coloresPartidosFormentera[partido],
      font: { weight: 'bold', size: 12 },
      formatter: v => v != null ? v.toFixed(2) + '%' : ''
    }
  }));

  // Crear el gráfico combinado
  const ctxFormentera = document.getElementById('formenteraChart').getContext('2d');

  new Chart(ctxFormentera, {
    data: {
      labels: etiquetasFormentera,
      datasets: datasetsFormentera
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'top', labels: { color: '#333' } },
        datalabels: { display: true }
      },
      scales: {
        y: { beginAtZero: true, title: { display: true, text: 'Porcentaje (%)', color: '#333' }, ticks: { color: '#333' } },
        x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
      }
    },
    plugins: [ChartDataLabels]
  });