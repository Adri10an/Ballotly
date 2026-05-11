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
// ================= PP Huelva =================
const datosPPHuelva = [12.68, 21.02, 22.28, 33.56, 33.05, 37.78, 29.12, 35.23, 38.64, 26.45, 22.59, 42.7];
const etiquetasPPHuelva = ['1982','1986','1990','1994','1996','2000','2004','2008','2012','2015','2018','2022'];
const partidosPPHuelva = ['AP','AP','PP','PP','PP','PP','PP','PP','PP','PP','PP','PP'];

const ctxPPHuelva = document.getElementById('ppHuelvaChart').getContext('2d');

new Chart(ctxPPHuelva, {
  data: {
    labels: etiquetasPPHuelva,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPPHuelva,
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
        data: datosPPHuelva,
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
        title: { display: true, text: 'Porcentaje (%)', color: '#333' }, 
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
      id: 'etiquetaPartidoPPHuelva',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPHuelva.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPHuelva[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PSOE Huelva =================
const datosPSOEHuelva = [55.72, 54.43, 56.05, 44.42, 49.56, 47.05, 53.51, 52.04, 43.39, 40.96, 31.60, 27.4];
const etiquetasPSOEHuelva = ['1982','1986','1990','1994','1996','2000','2004','2008','2012','2015','2018','2022'];
const partidosPSOEHuelva = ['PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE'];

const ctxPSOEHuelva = document.getElementById('psoeHuelvaChart').getContext('2d');

new Chart(ctxPSOEHuelva, {
  data: {
    labels: etiquetasPSOEHuelva,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPSOEHuelva,
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
        data: datosPSOEHuelva,
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
      y: { 
        beginAtZero: true, 
        title: { display: true, text: 'Porcentaje (%)', color: '#333' }, 
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
      id: 'etiquetaPartidoPSOEHuelva',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSOEHuelva.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#B22222';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSOEHuelva[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= VOX Huelva =================
const datosVOXHuelva = [0.27, 8.33, 12.77];
const etiquetasVOXHuelva = ['2015','2018','2022'];
const partidosVOXHuelva = ['VOX','VOX','VOX'];

const ctxVOXHuelva = document.getElementById('voxHuelvaChart').getContext('2d');

new Chart(ctxVOXHuelva, {
  data: {
    labels: etiquetasVOXHuelva,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosVOXHuelva,
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
        data: datosVOXHuelva,
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
      y: { 
        beginAtZero: true, 
        title: { display: true, text: 'Porcentaje (%)', color: '#333' }, 
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
      id: 'etiquetaPartidoVOXHuelva',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXHuelva.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXHuelva[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Por Andalucía Huelva =================
const datosPorAndaluciaHuelva = [6.54];
const etiquetasPorAndaluciaHuelva = ['2022'];
const partidosPorAndaluciaHuelva = ['Por Andalucía'];

const ctxPorAndaluciaHuelva = document.getElementById('porAndaluciaHuelvaChart').getContext('2d');

new Chart(ctxPorAndaluciaHuelva, {
  data: {
    labels: etiquetasPorAndaluciaHuelva,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPorAndaluciaHuelva,
        backgroundColor: 'rgba(196,32,101,0.7)', // color Por Andalucía
        borderColor: '#C42065',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#7A0F3E', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPorAndaluciaHuelva,
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
    animation: { duration: 1500, easing: 'easeOutBounce' },
    plugins: { 
      legend: { position: 'top', labels: { color: '#333' } }, 
      datalabels: { display: true } 
    },
    scales: {
      y: { 
        beginAtZero: true, 
        title: { display: true, text: 'Porcentaje (%)', color: '#333' }, 
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
      id: 'etiquetaPartidoPorAndaluciaHuelva',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPorAndaluciaHuelva.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#7A0F3E';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPorAndaluciaHuelva[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Adelante Andalucía Huelva =================
const datosAdelanteHuelva = [14.25, 3.95];
const etiquetasAdelanteHuelva = ['2018','2022'];
const partidosAdelanteHuelva = ['Adelante Andalucía','Adelante Andalucía'];

const ctxAdelanteHuelva = document.getElementById('adelanteHuelvaChart').getContext('2d');

new Chart(ctxAdelanteHuelva, {
  data: {
    labels: etiquetasAdelanteHuelva,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosAdelanteHuelva,
        backgroundColor: 'rgba(36,200,126,0.7)', // verde Adelante Andalucía
        borderColor: '#24C87E',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#15895A', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosAdelanteHuelva,
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
    animation: { duration: 1500, easing: 'easeOutBounce' },
    plugins: { 
      legend: { position: 'top', labels: { color: '#333' } }, 
      datalabels: { display: true } 
    },
    scales: {
      y: { 
        beginAtZero: true, 
        title: { display: true, text: 'Porcentaje (%)', color: '#333' }, 
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
      id: 'etiquetaPartidoAdelanteHuelva',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosAdelanteHuelva.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#15895A';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosAdelanteHuelva[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CS Huelva =================
const datosCSHuelva = [7.24, 16.25, 2.7];
const etiquetasCSHuelva = ['2015','2018','2022'];
const partidosCSHuelva = ['CS','CS','CS'];

const ctxCSHuelva = document.getElementById('csHuelvaChart').getContext('2d');

new Chart(ctxCSHuelva, {
  data: {
    labels: etiquetasCSHuelva,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCSHuelva,
        backgroundColor: 'rgba(255,140,0,0.7)', // naranja CS
        borderColor: '#FF8C00',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#FF4500', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCSHuelva,
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
      y: { 
        beginAtZero: true, 
        title: { display: true, text: 'Porcentaje (%)', color: '#333' }, 
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
      id: 'etiquetaPartidoCSHuelva',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSHuelva.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSHuelva[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Podemos Huelva =================
const datosPodemosHuelva = [13.14];
const etiquetasPodemosHuelva = ['2015'];
const partidosPodemosHuelva = ['Podemos'];

const ctxPodemosHuelva = document.getElementById('podemosHuelvaChart').getContext('2d');

new Chart(ctxPodemosHuelva, {
  data: {
    labels: etiquetasPodemosHuelva,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPodemosHuelva,
        backgroundColor: 'rgba(128,0,128,0.7)', // morado Podemos
        borderColor: '#800080',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#4B0082', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPodemosHuelva,
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
      y: { 
        beginAtZero: true, 
        title: { display: true, text: 'Porcentaje (%)', color: '#333' }, 
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
      id: 'etiquetaPartidoPodemosHuelva',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosHuelva.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosHuelva[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PA Huelva =================
const datosPAHuelva = [4.15, 5.02, 8.25, 5.25, 5.37, 6.52, 8.11, 2.3, 1.53];
const etiquetasPAHuelva = ['1982','1986','1990','1994','1996','2000','2004','2012','2015'];
const partidosPAHuelva = ['PA','PA','PA','PA','PA','PA','PA','PA','PA'];

const ctxPAHuelva = document.getElementById('paHuelvaChart').getContext('2d');

new Chart(ctxPAHuelva, {
  data: {
    labels: etiquetasPAHuelva,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPAHuelva,
        backgroundColor: 'rgba(21,170,53,0.7)', // verde PA
        borderColor: '#15AA35',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#0B6623', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPAHuelva,
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
    animation: { duration: 1500, easing: 'easeOutBounce' },
    plugins: { 
      legend: { position: 'top', labels: { color: '#333' } }, 
      datalabels: { display: true } 
    },
    scales: {
      y: { 
        beginAtZero: true, 
        title: { display: true, text: 'Porcentaje (%)', color: '#333' }, 
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
      id: 'etiquetaPartidoPAHuelva',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPAHuelva.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#0B6623';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPAHuelva[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UCD Huelva =================
const datosUCDHuelva = [18.79];
const etiquetasUCDHuelva = ['1982'];
const partidosUCDHuelva = ['UCD'];

const ctxUCDHuelva = document.getElementById('ucdHuelvaChart').getContext('2d');

new Chart(ctxUCDHuelva, {
  data: {
    labels: etiquetasUCDHuelva,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosUCDHuelva,
        backgroundColor: 'rgba(255,165,0,0.7)', // naranja UCD
        borderColor: '#FFA500',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#CC8400', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosUCDHuelva,
        borderColor: '#FFA500',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 5,
        pointBackgroundColor: '#FFA500'
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
        title: { display: true, text: 'Porcentaje (%)', color: '#333' }, 
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
      id: 'etiquetaPartidoUCDHuelva',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUCDHuelva.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#CC8400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUCDHuelva[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CDS Huelva =================
const datosCDSHuelva = [3.29, 1.16];
const etiquetasCDSHuelva = ['1986','1990'];
const partidosCDSHuelva = ['CDS','CDS'];

const ctxCDSHuelva = document.getElementById('cdsHuelvaChart').getContext('2d');

new Chart(ctxCDSHuelva, {
  data: {
    labels: etiquetasCDSHuelva,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCDSHuelva,
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
        data: datosCDSHuelva,
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
      y: { 
        beginAtZero: true, 
        title: { display: true, text: 'Porcentaje (%)', color: '#333' }, 
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
      id: 'etiquetaPartidoCDSHuelva',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSHuelva.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1E90FF';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSHuelva[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= IU Huelva =================
const datosIUHuelva = [12.89, 9.35, 15.86, 11.55, 6.96, 7.41, 7.58, 10.89, 6.25];
const etiquetasIUHuelva = ['1986','1990','1994','1996','2000','2004','2008','2012','2015'];
const partidosIUHuelva = ['IU','IU','IU','IU','IU','IU','IU','IU','IU'];

const ctxIUHuelva = document.getElementById('iuHuelvaChart').getContext('2d');

new Chart(ctxIUHuelva, {
  data: {
    labels: etiquetasIUHuelva,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosIUHuelva,
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
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosIUHuelva,
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
      y: { 
        beginAtZero: true, 
        title: { display: true, text: 'Porcentaje (%)', color: '#333' }, 
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
      id: 'etiquetaPartidoIUHuelva',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIUHuelva.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIUHuelva[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UPyD Huelva =================
const datosUPyDHuelva = [0.61, 2.53, 1.57,0.14];
const etiquetasUPyDHuelva = ['2008','2012','2015','2018'];
const partidosUPyDHuelva = ['UPyD','UPyD','UPyD','UPyD'];

const ctxUPyDHuelva = document.getElementById('upydHuelvaChart').getContext('2d');

new Chart(ctxUPyDHuelva, {
  data: {
    labels: etiquetasUPyDHuelva,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosUPyDHuelva,
        backgroundColor: 'rgba(255,96,218,0.7)', // magenta UPyD
        borderColor: '#FF60DA',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#FF1493', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosUPyDHuelva,
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
    animation: { duration: 1500, easing: 'easeOutBounce' },
    plugins: { 
      legend: { position: 'top', labels: { color: '#333' } }, 
      datalabels: { display: true } 
    },
    scales: {
      y: { 
        beginAtZero: true, 
        title: { display: true, text: 'Porcentaje (%)', color: '#333' }, 
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
      id: 'etiquetaPartidoUPyDHuelva',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDHuelva.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF1493';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDHuelva[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// Etiquetas de años para Huelva (todos los años con datos de cualquier partido)
const etiquetasHuelva = ['1982','1986','1990','1994','1996','2000','2004','2008','2012','2015','2018','2022'];

// Datos combinados por partido en Huelva
const datosHuelva = {
  'PP/AP':       [12.68, 21.02, 22.28, 33.56, 33.05, 37.78, 29.12, 35.23, 38.64, 26.45, 22.59, 42.7],
  'PSOE':        [55.72, 54.43, 56.05, 44.42, 49.56, 47.05, 53.51, 52.04, 43.39, 40.96, 31.60, 27.4],
  'VOX':         [null,null,null,null,null,null,null,null,null,0.27,8.33,12.77],
  'CS':          [null,null,null,null,null,null,null,null,null,7.24,16.25,2.7],
  'Podemos/IU':  [null,null,null,null,null,null,null,null,null,13.14,null,null],
  'CDS':         [null,3.29,1.16,null,null,null,null,null,null,null,null,null],
  'IU':          [null,12.89,9.35,15.86,11.55,6.96,7.41,7.58,10.89,6.25,null,null],
  'UPyD':        [null,null,null,null,null,null,null,0.61,2.53,1.57,0.14,null],
  'PA':          [4.15,5.02,8.25,5.25,5.37,6.52,8.11,null,2.3,1.53,null,null],
  'UCD':         [18.79,null,null,null,null,null,null,null,null,null,null,null],
  'Por Andalucía':[null,null,null,null,null,null,null,null,null,null,null,6.54],
  'Adelante Andalucía':[null,null,null,null,null,null,null,null,null,null,14.25,3.95]
};

// Colores de cada partido
const coloresPartidos = {
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

// Crear datasets para Chart.js
const datasetsHuelva = Object.keys(datosHuelva).map(partido => ({
  type: 'line',
  label: partido,
  data: datosHuelva[partido],
  borderColor: coloresPartidos[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresPartidos[partido],
  datalabels: {
    display: true,
    color: coloresPartidos[partido],
    font: { weight: 'bold', size: 12 },
    formatter: v => v != null ? v.toFixed(2) + '%' : ''
  }
}));

// Crear el gráfico combinado
const ctxHuelva = document.getElementById('huelvaChart').getContext('2d');

new Chart(ctxHuelva, {
  data: {
    labels: etiquetasHuelva,
    datasets: datasetsHuelva
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