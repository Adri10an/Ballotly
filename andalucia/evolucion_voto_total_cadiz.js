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
 
// ================= PP Cádiz =================
const datosPPCadiz = [58909, 89865, 56021, 161847, 200080, 207416, 205625, 245781, 210422, 136423, 89517, 219799];
const etiquetasPPCadiz = ['1982','1986','1990','1994','1996','2000','2004','2008','2012','2015','2018','2022'];
const partidosPPCadiz = ['AP','AP','PP','PP','PP','PP','PP','PP','PP','PP','PP','PP'];

const ctxPPCadiz = document.getElementById('ppCadizChart').getContext('2d');

new Chart(ctxPPCadiz, {
  data: {
    labels: etiquetasPPCadiz,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPPCadiz,
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
        data: datosPPCadiz,
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
      id: 'etiquetaPartidoPPCadiz',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPCadiz.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPCadiz[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PSOE Cádiz =================
const datosPSOECadiz = [210451, 243187, 167994, 168160, 242890, 219035, 307749, 307160, 184913, 179731, 121100, 108840];
const etiquetasPSOECadiz = ['1982','1986','1990','1994','1996','2000','2004','2008','2012','2015','2018','2022'];
const partidosPSOECadiz = ['PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE'];

const ctxPSOECadiz = document.getElementById('psoeCadizChart').getContext('2d');

new Chart(ctxPSOECadiz, {
  data: {
    labels: etiquetasPSOECadiz,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPSOECadiz,
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
        data: datosPSOECadiz,
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
      id: 'etiquetaPartidoPSOECadiz',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSOECadiz.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#B22222';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSOECadiz[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= VOX Cádiz =================
const datosVOXCadiz = [2087, 57279, 68548];
const etiquetasVOXCadiz = ['2015','2018','2022'];
const partidosVOXCadiz = ['VOX','VOX','VOX'];

const ctxVOXCadiz = document.getElementById('voxCadizChart').getContext('2d');

new Chart(ctxVOXCadiz, {
  data: {
    labels: etiquetasVOXCadiz,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosVOXCadiz,
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
        data: datosVOXCadiz,
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
      id: 'etiquetaPartidoVOXCadiz',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXCadiz.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXCadiz[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Adelante Andalucía Cádiz =================
const datosAdelanteCadiz = [97647, 41438];
const etiquetasAdelanteCadiz = ['2018','2022'];
const partidosAdelanteCadiz = ['Adelante Andalucía','Adelante Andalucía'];

const ctxAdelanteCadiz = document.getElementById('adelanteCadizChart').getContext('2d');

new Chart(ctxAdelanteCadiz, {
  data: {
    labels: etiquetasAdelanteCadiz,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosAdelanteCadiz,
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
        data: datosAdelanteCadiz,
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
      id: 'etiquetaPartidoAdelanteCadiz',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosAdelanteCadiz.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#15895A';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosAdelanteCadiz[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Por Andalucía Cádiz =================
const datosPorAndaluciaCadiz = [38800];
const etiquetasPorAndaluciaCadiz = ['2022'];
const partidosPorAndaluciaCadiz = ['Por Andalucía'];

const ctxPorAndaluciaCadiz = document.getElementById('porAndaluciaCadizChart').getContext('2d');

new Chart(ctxPorAndaluciaCadiz, {
  data: {
    labels: etiquetasPorAndaluciaCadiz,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPorAndaluciaCadiz,
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
        data: datosPorAndaluciaCadiz,
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
      id: 'etiquetaPartidoPorAndaluciaCadiz',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPorAndaluciaCadiz.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#7A0F3E';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPorAndaluciaCadiz[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CS Cádiz =================
const datosCSCadiz = [59191, 106331, 19823];
const etiquetasCSCadiz = ['2015','2018','2022'];
const partidosCSCadiz = ['CS','CS','CS'];

const ctxCSCadiz = document.getElementById('csCadizChart').getContext('2d');

new Chart(ctxCSCadiz, {
  data: {
    labels: etiquetasCSCadiz,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCSCadiz,
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
        data: datosCSCadiz,
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
      id: 'etiquetaPartidoCSCadiz',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSCadiz.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSCadiz[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Podemos/IU Cádiz =================
const datosPodemosCadiz = [107141];
const etiquetasPodemosCadiz = ['2015'];
const partidosPodemosCadiz = ['Podemos-IU'];

const ctxPodemosCadiz = document.getElementById('podemosCadizChart').getContext('2d');

new Chart(ctxPodemosCadiz, {
  data: {
    labels: etiquetasPodemosCadiz,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPodemosCadiz,
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
        data: datosPodemosCadiz,
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
      id: 'etiquetaPartidoPodemosCadiz',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosCadiz.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosCadiz[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PA Cádiz =================
const datosPACadiz = [
  35288, // 1982
  48242, // 1986
  77792, // 1990
  56652, // 1994
  84799, // 1996
  80378, // 2000
  46810, // 2004
  25499, // 2012
  15820  // 2015
];
const etiquetasPACadiz = ['1982','1986','1990','1994','1996','2000','2004','2012','2015'];
const partidosPACadiz = ['PA','PA','PA','PA','PA','PA','PA','PA','PA'];

const ctxPACadiz = document.getElementById('paCadizChart').getContext('2d');

new Chart(ctxPACadiz, {
  data: {
    labels: etiquetasPACadiz,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPACadiz,
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
        data: datosPACadiz,
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
      id: 'etiquetaPartidoPACadiz',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPACadiz.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#0F7A28';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPACadiz[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UCD Cádiz =================
const datosUCDCadiz = [43889];
const etiquetasUCDCadiz = ['1982'];
const partidosUCDCadiz = ['UCD'];

const ctxUCDCadiz = document.getElementById('ucdCadizChart').getContext('2d');

new Chart(ctxUCDCadiz, {
  data: {
    labels: etiquetasUCDCadiz,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUCDCadiz,
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
        data: datosUCDCadiz,
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
      id: 'etiquetaPartidoUCDCadiz',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUCDCadiz.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#CC8400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUCDCadiz[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CDS Cádiz =================
const datosCDSCadiz = [
  16944,  // 1986
  3019,   // 1990
  1876    // 1994
];
const etiquetasCDSCadiz = ['1986','1990','1994'];
const partidosCDSCadiz = ['CDS','CDS','CDS'];

const ctxCDSCadiz = document.getElementById('cdsCadizChart').getContext('2d');

new Chart(ctxCDSCadiz, {
  data: {
    labels: etiquetasCDSCadiz,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCDSCadiz,
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
        data: datosCDSCadiz,
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
      id: 'etiquetaPartidoCDSCadiz',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSCadiz.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1E90FF';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSCadiz[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= IU/Podemos Cádiz =================
const datosIUCadiz = [
  53339,  // 1986
  36224,  // 1990
  88647,  // 1994
  78536,  // 1996
  35083,  // 2000
  42459,  // 2004
  42320,  // 2008
  65943,  // 2012
  37986   // 2015
];
const etiquetasIUCadiz = ['1986','1990','1994','1996','2000','2004','2008','2012','2015'];
const partidosIUCadiz = ['IU','IU','IU','IU','IU','IU','IU','IU','Podemos-IU'];

const ctxIUCadiz = document.getElementById('iuCadizChart').getContext('2d');

new Chart(ctxIUCadiz, {
  data: {
    labels: etiquetasIUCadiz,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosIUCadiz,
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
        data: datosIUCadiz,
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
      id: 'etiquetaPartidoIUCadiz',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIUCadiz.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIUCadiz[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UPyD Cádiz =================
const datosUPyDCadiz = [
  3757,   // 2008
  17181,  // 2012
  11929,  // 2015
  940     // 2018
];
const etiquetasUPyDCadiz = ['2008','2012','2015','2018'];
const partidosUPyDCadiz = ['UPyD','UPyD','UPyD','UPyD'];

const ctxUPyDCadiz = document.getElementById('upydCadizChart').getContext('2d');

new Chart(ctxUPyDCadiz, {
  data: {
    labels: etiquetasUPyDCadiz,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUPyDCadiz,
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
        data: datosUPyDCadiz,
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
      id: 'etiquetaPartidoUPyDCadiz',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDCadiz.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#ff60da';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDCadiz[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// Datos Cádiz por partido
const etiquetasCadiz = ['1982','1986','1990','1994','1996','2000','2004','2008','2012','2015','2018','2022'];

const datosCadiz = {
  'PP/AP':       [58909, 89865, 56021, 161847, 200080, 207416, 205625, 245781, 210422, 136423, 89517, 219799],
  'PSOE':        [210451, 243187, 167994, 168160, 242890, 219035, 307749, 307160, 184913, 179731, 121100, 108840],
  'VOX':         [null, null, null, null, null, null, null, null, null, 2087, 57279, 68548],
  'CS':          [null, null, null, null, null, null, null, null, null, 59191, 106331, 19823],
  'Podemos/IU':  [null, null, null, null, null, null, null, null, null, 107141, null, null],
  'CDS':         [null, 16944, 3019, 1876, null, null, null, null, null, null, null, null],
  'IU':          [null, 53339, 36224, 88647, 78536, 35083, 42459, 42320, 65943, 37986, null, null],
  'UPyD':        [null, null, null, null, null, null, null, 3757, 17181, 11929, 940, null],
  'PA':          [35288, 48242, 77792, 56652, 84799, 80378, 46810, null, 25499, 15820, null, null],
  'UCD':         [43889, null, null, null, null, null, null, null, null, null, null, null],
  'Por Andalucía':[null, null, null, null, null, null, null, null, null, null, null, 38800],
  'Adelante Andalucía':[null, null, null, null, null, null, null, null, null, null, 97647, 41438]
};

const coloresPartidosCadiz = {
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
  'Adelante Andalucía': '#24C87E'
};

const datasetsCadiz = Object.keys(datosCadiz).map(partido => ({
  type: 'line',
  label: partido,
  data: datosCadiz[partido],
  borderColor: coloresPartidosCadiz[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresPartidosCadiz[partido],
  datalabels: { 
    display: true,
    color: coloresPartidosCadiz[partido],
    font: { weight: 'bold', size: 12 },
    formatter: v => v != null ? v.toLocaleString() : ''
  }
}));

const ctxCadiz = document.getElementById('votosTotalesCadizChart').getContext('2d');

new Chart(ctxCadiz, {
  data: {
    labels: etiquetasCadiz,
    datasets: datasetsCadiz
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