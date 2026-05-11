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
// ================= PP Baleares =================
const datosPPBaleares = [35.79, 37.22, 47.82, 45.40, 44.77, 45.44, 46.02, 46.36, 28.50, 22.21, 35.79];
const etiquetasPPBaleares = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023'];
const partidosPPBaleares = ['AP-PDP-UL','AP','PP','PP','PP','PP','PP','PP','PP','PP','PP'];

const ctxPPBaleares = document.getElementById('ppBalearesChart').getContext('2d');

new Chart(ctxPPBaleares, {
  data: {
    labels: etiquetasPPBaleares,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPPBaleares,
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
        data: datosPPBaleares,
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
      id: 'etiquetaPartidoPPBaleares',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPBaleares.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPBaleares[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PSOE Baleares =================
const datosPSOEBaleares = [34.91, 32.60, 30.41, 24.28, 22.45, 25.03, 27.60, 21.41, 18.94, 27.29, 26.53];
const etiquetasPSOEBaleares = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023'];
const partidosPSOEBaleares = ['PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE'];

const ctxPSOEBaleares = document.getElementById('psoeBalearesChart').getContext('2d');

new Chart(ctxPSOEBaleares, {
  data: {
    labels: etiquetasPSOEBaleares,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPSOEBaleares,
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
        data: datosPSOEBaleares,
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
      id: 'etiquetaPartidoPSOEBaleares',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSOEBaleares.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#B22222';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSOEBaleares[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= VOX Baleares =================
const datosVOXBaleares = [8.12, 13.90];
const etiquetasVOXBaleares = ['2019','2023'];
const partidosVOXBaleares = ['VOX','VOX'];

const ctxVOXBaleares = document.getElementById('voxBalearesChart').getContext('2d');

new Chart(ctxVOXBaleares, {
  data: {
    labels: etiquetasVOXBaleares,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosVOXBaleares,
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
        data: datosVOXBaleares,
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
      id: 'etiquetaPartidoVOXBaleares',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXBaleares.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXBaleares[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= MÉS Baleares =================
const datosMESBaleares = [13.8, 9.21, 8.35];
const etiquetasMESBaleares = ['2015','2019','2023'];
const partidosMESBaleares = ['MÉS','MÉS','MÉS'];

const ctxMESBaleares = document.getElementById('mesBalearesChart').getContext('2d');

new Chart(ctxMESBaleares, {
  data: {
    labels: etiquetasMESBaleares,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosMESBaleares,
        backgroundColor: 'rgba(203,208,70,0.8)', // color MÉS (cbd046)
        borderColor: '#CBD046',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#808000', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosMESBaleares,
        borderColor: '#CBD046',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#CBD046'
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
      id: 'etiquetaPartidoMESBaleares',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosMESBaleares.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#808000'; // tono más oscuro del color base
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosMESBaleares[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Podemos/IU Baleares =================
const datosPodemosBaleares = [14.69, 9.71, 4.43];
const etiquetasPodemosBaleares = ['2015','2019','2023'];
const partidosPodemosBaleares = ['Podemos','Podemos','Podemos-IU'];

const ctxPodemosBaleares = document.getElementById('podemosBalearesChart').getContext('2d');

new Chart(ctxPodemosBaleares, {
  data: {
    labels: etiquetasPodemosBaleares,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPodemosBaleares,
        backgroundColor: 'rgba(128,0,128,0.7)', // morado Podemos/IU
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
        data: datosPodemosBaleares,
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
      id: 'etiquetaPartidoPodemosBaleares',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosBaleares.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082'; // morado oscuro para contraste
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosBaleares[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= El Pi Baleares =================
const datosElPiBaleares = [7.96, 7.33, 3.79];
const etiquetasElPiBaleares = ['2015','2019','2023'];
const partidosElPiBaleares = ['El Pi','El Pi','El Pi'];

const ctxElPiBaleares = document.getElementById('elPiBalearesChart').getContext('2d');

new Chart(ctxElPiBaleares, {
  data: {
    labels: etiquetasElPiBaleares,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosElPiBaleares,
        backgroundColor: 'rgba(113,208,176,0.8)', // color El Pi (71d0b0)
        borderColor: '#71D0B0',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#2E8B75', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosElPiBaleares,
        borderColor: '#71D0B0',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#71D0B0'
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
      id: 'etiquetaPartidoElPiBaleares',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosElPiBaleares.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#2E8B75'; // tono más oscuro del color base
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosElPiBaleares[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= MxMe Baleares =================
const datosMxMeBaleares = [1.53, 1.40, 1.44];
const etiquetasMxMeBaleares = ['2015','2019','2023'];
const partidosMxMeBaleares = ['MxMe','MxMe','MxMe'];

const ctxMxMeBaleares = document.getElementById('mxmeBalearesChart').getContext('2d');

new Chart(ctxMxMeBaleares, {
  data: {
    labels: etiquetasMxMeBaleares,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosMxMeBaleares,
        backgroundColor: 'rgba(36,74,60,0.8)', // color MxMe (244a3c)
        borderColor: '#244A3C',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#173025', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosMxMeBaleares,
        borderColor: '#244A3C',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#244A3C'
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
      id: 'etiquetaPartidoMxMeBaleares',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosMxMeBaleares.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#173025'; // tono más oscuro para contraste
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosMxMeBaleares[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CS Baleares =================
const datosCSBaleares = [5.92, 9.88, 1.35];
const etiquetasCSBaleares = ['2015','2019','2023'];
const partidosCSBaleares = ['CS','CS','CS'];

const ctxCSBaleares = document.getElementById('csBalearesChart').getContext('2d');

new Chart(ctxCSBaleares, {
  data: {
    labels: etiquetasCSBaleares,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCSBaleares,
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
        data: datosCSBaleares,
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
      id: 'etiquetaPartidoCSBaleares',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSBaleares.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500'; // tono más oscuro para contraste
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSBaleares[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= AIPF/SA Unió Baleares =================
const datosAIPFBaleares = [0.32, 0.31, 0.39, 0.43, 0.32, 0.33, 0.39];
const etiquetasAIPFBaleares = ['1995','1999','2003','2007','2011','2019','2023'];
const partidosAIPFBaleares = ['AIPF','AIPF','AIPF','AIPF','SA UNIÓ','SA UNIÓ','SA UNIÓ'];

const ctxAIPFBaleares = document.getElementById('aipfBalearesChart').getContext('2d');

new Chart(ctxAIPFBaleares, {
  data: {
    labels: etiquetasAIPFBaleares,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosAIPFBaleares,
        backgroundColor: 'rgba(0,162,159,0.7)', // color AIPF/SA Unió
        borderColor: '#00A29F',
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
        data: datosAIPFBaleares,
        borderColor: '#00A29F',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#00A29F'
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
      id: 'etiquetaPartidoAIPFBaleares',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosAIPFBaleares.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#008080'; // tono más oscuro para contraste
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosAIPFBaleares[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= ARA Eivissa Baleares =================
const datosARABaleares = [0.3, 0.31];
const etiquetasARABaleares = ['2019','2023'];
const partidosARABaleares = ['ARA Eivissa','ARA Eivissa'];

const ctxARABaleares = document.getElementById('araEivissaBalearesChart').getContext('2d');

new Chart(ctxARABaleares, {
  data: {
    labels: etiquetasARABaleares,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosARABaleares,
        backgroundColor: 'rgba(255,215,0,0.8)', // color ARA Eivissa (FFD700)
        borderColor: '#FFD700',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#B8860B', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosARABaleares,
        borderColor: '#FFD700',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#FFD700'
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
      id: 'etiquetaPartidoARABaleares',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosARABaleares.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#B8860B'; // tono más oscuro para contraste
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosARABaleares[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Els Verds Baleares =================
const datosElsVerdsBaleares = [3.14, 4.89, 4.54];
const etiquetasElsVerdsBaleares = ['1995','1999','2003'];
const partidosElsVerdsBaleares = ['Els Verds','Els Verds','Els Verds'];

const ctxElsVerdsBaleares = document.getElementById('elsVerdsBalearesChart').getContext('2d');

new Chart(ctxElsVerdsBaleares, {
  data: {
    labels: etiquetasElsVerdsBaleares,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosElsVerdsBaleares,
        backgroundColor: 'rgba(137,172,118,0.8)', // color Els Verds (89AC76)
        borderColor: '#89AC76',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#66834D', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosElsVerdsBaleares,
        borderColor: '#89AC76',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#89AC76'
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
      id: 'etiquetaPartidoElsVerdsBaleares',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosElsVerdsBaleares.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#66834D'; // tono más oscuro para contraste
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosElsVerdsBaleares[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= FIEF Baleares =================
const datosFIEFBaleares = [0.74, 0.37];
const etiquetasFIEFBaleares = ['1991','1995'];
const partidosFIEFBaleares = ['FIEF','FIEF'];

const ctxFIEFBaleares = document.getElementById('fiefBalearesChart').getContext('2d');

new Chart(ctxFIEFBaleares, {
  data: {
    labels: etiquetasFIEFBaleares,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosFIEFBaleares,
        backgroundColor: 'rgba(4,87,85,0.8)', // color FIEF (#045755)
        borderColor: '#045755',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#023636', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosFIEFBaleares,
        borderColor: '#045755',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#045755'
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
      id: 'etiquetaPartidoFIEFBaleares',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosFIEFBaleares.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#023636'; // tono más oscuro para contraste
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosFIEFBaleares[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PSM Baleares =================
const datosPSMBaleares = [5.49, 4.96, 6.7, 12.23, 11.96, 8.12, 0.79, 8.61];
const etiquetasPSMBaleares = ['1983','1987','1991','1995','1999','2003','2007','2011'];
const partidosPSMBaleares = ['PSM','PSM','PSM','PSM','PSM','PSM','PSM','PSM'];

const ctxPSMBaleares = document.getElementById('psmBalearesChart').getContext('2d');

new Chart(ctxPSMBaleares, {
  data: {
    labels: etiquetasPSMBaleares,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPSMBaleares,
        backgroundColor: 'rgba(195,65,0,0.8)', // color PSM (#C34100)
        borderColor: '#C34100',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#8B2A00', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPSMBaleares,
        borderColor: '#C34100',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#C34100'
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
      id: 'etiquetaPartidoPSMBaleares',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSMBaleares.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B2A00'; // tono más oscuro para contraste
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSMBaleares[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= BPM Baleares =================
const datosBPMBaleares = [8.98];
const etiquetasBPMBaleares = ['2007'];
const partidosBPMBaleares = ['BPM'];

const ctxBPMBaleares = document.getElementById('bpmBalearesChart').getContext('2d');

new Chart(ctxBPMBaleares, {
  data: {
    labels: etiquetasBPMBaleares,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosBPMBaleares,
        backgroundColor: 'rgba(122,11,4,0.8)', // color BPM (#7A0B04)
        borderColor: '#7A0B04',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#4B0000', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosBPMBaleares,
        borderColor: '#7A0B04',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#7A0B04'
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
      id: 'etiquetaPartidoBPMBaleares',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosBPMBaleares.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0000'; // tono más oscuro para contraste
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosBPMBaleares[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UM Baleares =================
const datosUMBaleares = [15.18, 9.13, 2.51, 5.39, 7.46, 7.59, 6.73];
const etiquetasUMBaleares = ['1983','1987','1991','1995','1999','2003','2007'];
const partidosUMBaleares = ['UM','UM','UM','UM','UM','UM','UM'];

const ctxUMBaleares = document.getElementById('umBalearesChart').getContext('2d');

new Chart(ctxUMBaleares, {
  data: {
    labels: etiquetasUMBaleares,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosUMBaleares,
        backgroundColor: 'rgba(255,13,0,0.8)', // color UM (#FF0D00)
        borderColor: '#FF0D00',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#B20000', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosUMBaleares,
        borderColor: '#FF0D00',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#FF0D00'
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
      id: 'etiquetaPartidoUMBaleares',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUMBaleares.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#B20000'; // tono más oscuro para contraste
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUMBaleares[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CIM Baleares =================
const datosCIMBaleares = [1.05];
const etiquetasCIMBaleares = ['1983'];
const partidosCIMBaleares = ['CIM'];

const ctxCIMBaleares = document.getElementById('cimBalearesChart').getContext('2d');

new Chart(ctxCIMBaleares, {
  data: {
    labels: etiquetasCIMBaleares,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCIMBaleares,
        backgroundColor: 'rgba(130,180,127,0.8)', // color CIM (#82B47F)
        borderColor: '#82B47F',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#5E8B61', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCIMBaleares,
        borderColor: '#82B47F',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#82B47F'
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
      id: 'etiquetaPartidoCIMBaleares',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCIMBaleares.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#5E8B61'; // tono más oscuro para contraste
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCIMBaleares[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= COP Baleares =================
const datosCOPBaleares = [0.43, 0.31];
const etiquetasCOPBaleares = ['1999','2003'];
const partidosCOPBaleares = ['COP','COP'];

const ctxCOPBaleares = document.getElementById('copBalearesChart').getContext('2d');

new Chart(ctxCOPBaleares, {
  data: {
    labels: etiquetasCOPBaleares,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCOPBaleares,
        backgroundColor: 'rgba(184,84,65,0.8)', // color COP (#B85441)
        borderColor: '#B85441',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#8B362F', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCOPBaleares,
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
      id: 'etiquetaPartidoCOPBaleares',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCOPBaleares.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B362F'; // tono más oscuro para contraste
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCOPBaleares[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PDL Baleares =================
const datosPDLBaleares = [1.26];
const etiquetasPDLBaleares = ['1983'];
const partidosPDLBaleares = ['PDL'];

const ctxPDLBaleares = document.getElementById('pdlBalearesChart').getContext('2d');

new Chart(ctxPDLBaleares, {
  data: {
    labels: etiquetasPDLBaleares,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPDLBaleares,
        backgroundColor: 'rgba(125,171,205,0.8)', // color PDL (#7DABCD)
        borderColor: '#7DABCD',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#567D91', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPDLBaleares,
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
      id: 'etiquetaPartidoPDLBaleares',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPDLBaleares.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#567D91'; // tono más oscuro para contraste
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPDLBaleares[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= GUIF Baleares =================
const datosGUIFBaleares = [0.21];
const etiquetasGUIFBaleares = ['1991'];
const partidosGUIFBaleares = ['GUIF'];

const ctxGUIFBaleares = document.getElementById('guifBalearesChart').getContext('2d');

new Chart(ctxGUIFBaleares, {
  data: {
    labels: etiquetasGUIFBaleares,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosGUIFBaleares,
        backgroundColor: 'rgba(139,69,19,0.8)', // color GUIF (#8B4513)
        borderColor: '#8B4513',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#5C3310', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosGUIFBaleares,
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
      id: 'etiquetaPartidoGUIFBaleares',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosGUIFBaleares.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#5C3310'; // tono más oscuro para contraste
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosGUIFBaleares[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Compromís Baleares =================
const datosCompromisBaleares = [0.09];
const etiquetasCompromisBaleares = ['2015'];
const partidosCompromisBaleares = ['Compromís'];

const ctxCompromisBaleares = document.getElementById('compromisBalearesChart').getContext('2d');

new Chart(ctxCompromisBaleares, {
  data: {
    labels: etiquetasCompromisBaleares,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCompromisBaleares,
        backgroundColor: 'rgba(219,100,38,0.8)', // color Compromís (#DB6426)
        borderColor: '#DB6426',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#9C4620', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCompromisBaleares,
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
      id: 'etiquetaPartidoCompromisBaleares',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCompromisBaleares.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#9C4620'; // tono más oscuro para contraste
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCompromisBaleares[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CDS Baleares =================
const datosCDSBaleares = [2.14, 10.30, 2.96];
const etiquetasCDSBaleares = ['1983','1987','1991'];
const partidosCDSBaleares = ['CDS','CDS','CDS'];

const ctxCDSBaleares = document.getElementById('cdsBalearesChart').getContext('2d');

new Chart(ctxCDSBaleares, {
  data: {
    labels: etiquetasCDSBaleares,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCDSBaleares,
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
        data: datosCDSBaleares,
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
      id: 'etiquetaPartidoCDSBaleares',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSBaleares.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1E90FF';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSBaleares[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= IU Baleares =================
const datosIUBaleares = [3.56, 2.30, 6.71, 4.89, 4.54, 0.41, 2.29, 0.34, 9.71, 4.43];
const etiquetasIUBaleares = ['1987','1991','1995','1999','2003','2007','2011','2015','2019','2023'];
const partidosIUBaleares = ['IU','IU','IU','IU','IU','IU','IU','IU','IU','IU'];

const ctxIUBaleares = document.getElementById('iuBalearesChart').getContext('2d');

new Chart(ctxIUBaleares, {
  data: {
    labels: etiquetasIUBaleares,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosIUBaleares,
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
        data: datosIUBaleares,
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
      y: { beginAtZero: true, title: { display: true, text: 'Porcentaje (%)', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoIUBaleares',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIUBaleares.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000'; // tono más oscuro para el texto
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIUBaleares[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UPyD Baleares =================
const datosUPyDBaleares = [2.08, 0.89];
const etiquetasUPyDBaleares = ['2011','2015'];
const partidosUPyDBaleares = ['UPyD','UPyD'];

const ctxUPyDBaleares = document.getElementById('upydBalearesChart').getContext('2d');

new Chart(ctxUPyDBaleares, {
  data: {
    labels: etiquetasUPyDBaleares,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosUPyDBaleares,
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
        data: datosUPyDBaleares,
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
      y: { beginAtZero: true, title: { display: true, text: 'Porcentaje (%)', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoUPyDBaleares',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDBaleares.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF1493'; // tono más oscuro para contraste
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDBaleares[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Datos por partido en Baleares =================
const datosBaleares = {
  'PP/AP-PDP-UL': [35.79, 37.22, 47.82, 45.40, 44.77, 45.44, 46.02, 46.36, 28.50, 22.21, 35.79],
  'PSOE': [34.91, 32.60, 30.41, 24.28, 22.45, 25.03, 27.60, 21.41, 18.94, 27.29, 26.53],
  'VOX': [null,null,null,null,null,null,null,null,null,8.12,13.90],
  'MÉS': [null,null,null,null,null,null,null,null,13.8,9.21,8.35],
  'Podemos/IU': [null,null,null,null,null,null,null,null,14.69,9.71,4.43],
  'El Pi': [null,null,null,null,null,null,null,null,7.96,7.33,3.79],
  'MxMe': [null,null,null,null,null,null,null,null,1.53,1.40,1.44],
  'CS': [null,null,null,null,null,null,null,null,5.92,9.88,1.35],
  'AIPF/SA Unió': [null,null,null,0.32,0.31,0.39,0.43,0.32,null,0.33,0.39],
  'ARA Eivissa': [null,null,null,null,null,null,null,null,null,0.3,0.31],
  'Els Verds': [null,null,null,3.14,4.89,4.54,null,null,null,null,null],
  'FIEF': [null,null,0.74,0.37,null,null,null,null,null,null,null],
  'PSM': [5.49,4.96,6.7,12.23,11.96,8.12,0.79,8.61,null,null,null],
  'BPM': [null,null,null,null,null,null,8.98,null,null,null,null],
  'UM': [15.18,9.13,2.51,5.39,7.46,7.59,6.73,null,null,null,null],
  'CIM': [1.05,null,null,null,null,null,null,null,null,null,null],
  'COP': [null,null,null,null,0.43,0.31,null,null,null,null,null],
  'PDL': [1.26,null,null,null,null,null,null,null,null,null,null],
  'GUIF': [null,null,0.21,null,null,null,null,null,null,null,null],
  'COMPROMIS': [null,null,null,null,null,null,null,null,0.09,null,null],
  'CDS': [2.14,10.30,2.96,null,null,null,null,null,null,null,null],
  'IU': [null,3.56,2.30,6.71,4.89,4.54,0.41,2.29,0.34,9.71,4.43],
  'UPyD': [null,null,null,null,null,null,null,2.08,0.89,null,null]
};

// Colores de cada partido
const coloresBaleares = {
  'PP/AP-PDP-UL': '#0000FF',
  'PSOE': '#FF0000',
  'VOX': '#008000',
  'MÉS': '#CBD046',
  'Podemos/IU': '#800080',
  'El Pi': '#71D0B0',
  'MxMe': '#244A3C',
  'CS': '#FF8C00',
  'AIPF/SA Unió': '#00A29F',
  'ARA Eivissa': '#FFD700',
  'Els Verds': '#89AC76',
  'FIEF': '#045755',
  'PSM': '#C34100',
  'BPM': '#7A0B04',
  'UM': '#FF0D00',
  'CIM': '#82B47F',
  'COP': '#B85441',
  'PDL': '#A52A2A',
  'GUIF': '#8B4513',
  'COMPROMIS': '#DB6426',
  'CDS': '#00BFFF',
  'IU': '#B22222',
  'UPyD': '#FF60DA'
};

// Etiquetas de años (1983–2023)
const etiquetasBaleares = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023'];

// Crear datasets para Chart.js
const datasetsBaleares = Object.keys(datosBaleares).map(partido => ({
  type: 'line',
  label: partido,
  data: datosBaleares[partido],
  borderColor: coloresBaleares[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresBaleares[partido],
  datalabels: {
    display: true,
    color: coloresBaleares[partido],
    font: { weight: 'bold', size: 12 },
    formatter: v => v != null ? v.toFixed(2) + '%' : ''
  }
}));

// Crear el gráfico combinado de Baleares
const ctxBaleares = document.getElementById('balearesChart').getContext('2d');
new Chart(ctxBaleares, {
  data: {
    labels: etiquetasBaleares,
    datasets: datasetsBaleares
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