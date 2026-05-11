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
// ================= PP Formentera (votos totales, 1983–2015) =================
const datosPPFormentera = [816, 959, 680, 904];
const etiquetasPPFormentera = ['1983','1987','1991','2015'];
const partidosPPFormentera = ['AP-PDP-UL','AP','PP','PP'];

const ctxPPFormentera = document.getElementById('ppFormenteraChart').getContext('2d');

new Chart(ctxPPFormentera, {
  data: {
    labels: etiquetasPPFormentera,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPPFormentera,
        backgroundColor: 'rgba(0,0,255,0.7)', // azul PP
        borderColor: '#0000FF',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#00008B', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString('es-ES') // separador de miles
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
      y: { 
        beginAtZero: true, 
        title: { display: true, text: 'Votos totales', color: '#333' }, 
        ticks: { color: '#333', precision: 0 } 
      },
      x: { 
        title: { display: true, text: 'Año', color: '#333' }, 
        ticks: { color: '#333' } 
      }
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

const datosAIPFFormenteraVotos = [1195, 1183, 1647, 1795, 1353, 1419, 1746];
const etiquetasAIPFFormenteraVotos = ['1995','1999','2003','2007','2011','2019','2023'];
const partidosAIPFFormenteraVotos = ['AIPF','AIPF','AIPF','AIPF','SA UNIÓ','SA UNIÓ','SA UNIÓ'];

const ctxAIPFFormenteraVotos = document.getElementById('aipfFormenteraChart').getContext('2d');

new Chart(ctxAIPFFormenteraVotos, {
  data: {
    labels: etiquetasAIPFFormenteraVotos,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosAIPFFormenteraVotos,
        backgroundColor: 'rgba(0,162,159,0.7)', // color AIPF/SA UNIÓ
        borderColor: '#00a29f',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#008080', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString('es-ES') 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosAIPFFormenteraVotos,
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoAIPFFormenteraVotos',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosAIPFFormenteraVotos.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#008080';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosAIPFFormenteraVotos[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PSOE Formentera (votos totales, 1983–2023) =================
const datosPSOEFormentera = [1021, 1096, 960, 1067, 1456, 1904, 2005, 2032, 1673];
const etiquetasPSOEFormentera = ['1983','1987','1991','1995','2007','2011','2015','2019','2023'];
const partidosPSOEFormentera = ['PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE'];

const ctxPSOEFormentera = document.getElementById('psoeFormenteraChart').getContext('2d');

new Chart(ctxPSOEFormentera, {
  data: {
    labels: etiquetasPSOEFormentera,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPSOEFormentera,
        backgroundColor: 'rgba(255,0,0,0.7)', // rojo PSOE
        borderColor: '#FF0000',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#FF0000', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString('es-ES') // separador de miles
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
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
          ctx.fillStyle = '#FF0000';
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

// ================= VOX Formentera (votos totales, 2023) =================
const datosVOXFormentera = [125];
const etiquetasVOXFormentera = ['2023'];
const partidosVOXFormentera = ['VOX'];

const ctxVOXFormentera = document.getElementById('voxFormenteraChart').getContext('2d');

new Chart(ctxVOXFormentera, {
  data: {
    labels: etiquetasVOXFormentera,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosVOXFormentera,
        backgroundColor: 'rgba(0,128,0,0.7)', // verde VOX
        borderColor: '#008000',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#006400', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString('es-ES') // separador de miles
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
        pointRadius: 5,
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
      y: { 
        beginAtZero: true, 
        title: { display: true, text: 'Votos totales', color: '#333' }, 
        ticks: { color: '#333', precision: 0 }
      },
      x: { 
        title: { display: true, text: 'Año', color: '#333' }, 
        ticks: { color: '#333' } 
      }
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

// ================= COP Formentera (votos totales, 1999–2003) =================
const datosCOPFormentera = [1536, 1298];
const etiquetasCOPFormentera = ['1999','2003'];
const partidosCOPFormentera = ['COP','COP'];

const ctxCOPFormentera = document.getElementById('copFormenteraChart').getContext('2d');

new Chart(ctxCOPFormentera, {
  data: {
    labels: etiquetasCOPFormentera,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCOPFormentera,
        backgroundColor: 'rgba(184,84,65,0.7)', // color COP
        borderColor: '#B85441',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#B85441', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString('es-ES') // separador de miles
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCOPFormentera,
        borderColor: '#B85441',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#B85441'
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
      y: { 
        beginAtZero: true, 
        title: { display: true, text: 'Votos totales', color: '#333' }, 
        ticks: { color: '#333', precision: 0 } 
      },
      x: { 
        title: { display: true, text: 'Año', color: '#333' }, 
        ticks: { color: '#333' } 
      }
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
          ctx.fillStyle = '#B85441';
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

// ================= PDL Formentera (votos totales, 1983) =================
const datosPDLFormentera = [239];
const etiquetasPDLFormentera = ['1983'];
const partidosPDLFormentera = ['PDL'];

const ctxPDLFormentera = document.getElementById('pdlFormenteraChart').getContext('2d');

new Chart(ctxPDLFormentera, {
  data: {
    labels: etiquetasPDLFormentera,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPDLFormentera,
        backgroundColor: 'rgba(28,29,172,0.7)', // color PDL
        borderColor: '#1C1DAC',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#1C1DAC', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString('es-ES') // separador de miles
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPDLFormentera,
        borderColor: '#1C1DAC',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 5,
        pointBackgroundColor: '#1C1DAC'
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
      y: { 
        beginAtZero: true, 
        title: { display: true, text: 'Votos totales', color: '#333' }, 
        ticks: { color: '#333', precision: 0 } 
      },
      x: { 
        title: { display: true, text: 'Año', color: '#333' }, 
        ticks: { color: '#333' } 
      }
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
          ctx.fillStyle = '#1C1DAC';
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

// ================= GUIF Formentera (votos totales, 1991) =================
const datosGUIFFormentera = [692];
const etiquetasGUIFFormentera = ['1991'];
const partidosGUIFFormentera = ['GUIF'];

const ctxGUIFFormentera = document.getElementById('guifFormenteraChart').getContext('2d');

new Chart(ctxGUIFFormentera, {
  data: {
    labels: etiquetasGUIFFormentera,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosGUIFFormentera,
        backgroundColor: 'rgba(139,69,19,0.7)', // color GUIF
        borderColor: '#8B4513',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#8B4513', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString('es-ES') // separador de miles
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
        pointRadius: 5,
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
      y: { 
        beginAtZero: true, 
        title: { display: true, text: 'Votos totales', color: '#333' }, 
        ticks: { color: '#333', precision: 0 } 
      },
      x: { 
        title: { display: true, text: 'Año', color: '#333' }, 
        ticks: { color: '#333' } 
      }
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
          ctx.fillStyle = '#8B4513';
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

// ================= Compromís / GxF Formentera (votos totales, 2015) =================
const datosCompromisFormentera = [383];
const etiquetasCompromisFormentera = ['2015'];
const partidosCompromisFormentera = ['Compromís'];

const ctxCompromisFormentera = document.getElementById('compromisFormenteraChart').getContext('2d');

new Chart(ctxCompromisFormentera, {
  data: {
    labels: etiquetasCompromisFormentera,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCompromisFormentera,
        backgroundColor: 'rgba(219,100,38,0.7)', // color Compromís
        borderColor: '#DB6426',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#DB6426', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString('es-ES') // separador de miles
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
        pointRadius: 5,
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
      y: { 
        beginAtZero: true, 
        title: { display: true, text: 'Votos totales', color: '#333' }, 
        ticks: { color: '#333', precision: 0 } 
      },
      x: { 
        title: { display: true, text: 'Año', color: '#333' }, 
        ticks: { color: '#333' } 
      }
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
          ctx.fillStyle = '#DB6426';
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

// ================= CDS Formentera (votos totales, 1987) =================
const datosCDSFormentera = [337];
const etiquetasCDSFormentera = ['1987'];
const partidosCDSFormentera = ['CDS'];

const ctxCDSFormentera = document.getElementById('cdsFormenteraChart').getContext('2d');

new Chart(ctxCDSFormentera, {
  data: {
    labels: etiquetasCDSFormentera,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCDSFormentera,
        backgroundColor: 'rgba(0,191,255,0.7)', // azul CDS
        borderColor: '#00BFFF',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#1E90FF', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString('es-ES') // separador de miles
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
        pointRadius: 5,
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
      y: { 
        beginAtZero: true, 
        title: { display: true, text: 'Votos totales', color: '#333' }, 
        ticks: { color: '#333', precision: 0 } 
      },
      x: { 
        title: { display: true, text: 'Año', color: '#333' }, 
        ticks: { color: '#333' } 
      }
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

// ================= IU / Podemos Formentera (votos totales, 1995) =================
const datosIUFormentera = [109];
const etiquetasIUFormentera = ['1995'];
const partidosIUFormentera = ['IU'];

const ctxIUFormentera = document.getElementById('iuFormenteraChart').getContext('2d');

new Chart(ctxIUFormentera, {
  data: {
    labels: etiquetasIUFormentera,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosIUFormentera,
        backgroundColor: 'rgba(178,34,34,0.7)', // rojo IU
        borderColor: '#B22222',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#8B0000', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString('es-ES') // separador de miles
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosIUFormentera,
        borderColor: '#B22222',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 5,
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
      y: { 
        beginAtZero: true, 
        title: { display: true, text: 'Votos totales', color: '#333' }, 
        ticks: { color: '#333', precision: 0 } 
      },
      x: { 
        title: { display: true, text: 'Año', color: '#333' }, 
        ticks: { color: '#333' } 
      }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoIUFormentera',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIUFormentera.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIUFormentera[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

  // Datos Formentera por partido
  const etiquetasFormentera = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023'];

  const datosFormentera = {
    'PP':        [816, 959, 680,null, null, null, null, null, 904, null, null],
    'PSOE':      [1021, 1096, 960, 1067, null,null, 1456, 1904, 2005,2032, 1673],
    'VOX':       [null,null,null,null,null,null,null,null,null,null,125],
    'AIPF/SA':   [null,null,null,1195,1183,1647,1795,1353,null,1419,1746],
    'COP':       [null,null,null,null,1536,1298,null,null,null,null,null],
    'PDL':       [239,null,null,null,null,null,null,null,null,null,null],
    'GUIF':      [null,null,692,null,null,null,null,null,null,null,null],
    'Compromís': [null,null,null,null,null,null,null,null,383,null,null],
    'CDS':       [null,337,null,null,null,null,null,null,null,null,null],
    'IU':        [null,null,null,109,null,null,null,null,null,null,null]
  };

  const coloresPartidosFormentera = {
    'PP': '#0000FF',
    'PSOE': '#FF0000',
    'VOX': '#008000',
    'AIPF/SA': '#00a29f',
    'COP': '#B85441',
    'PDL': '#1C1DAC',
    'GUIF': '#8B4513',
    'Compromís': '#DB6426',
    'CDS': '#00BFFF',
    'IU': '#B22222'
  };

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
      formatter: v => v != null ? v.toLocaleString('es-ES') : ''
    }
  }));

  const ctxFormentera = document.getElementById('votosTotalesFormenteraChart').getContext('2d');

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
        y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333', precision: 0 } },
        x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
      }
    },
    plugins: [ChartDataLabels]
  });