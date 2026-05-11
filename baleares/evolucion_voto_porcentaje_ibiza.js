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
const datosPPIbiza = [51.47, 53.42, 49.49, 50.63, 47.14, 50.4, 47.13, 49.83, 33.01, 32.57, 48.87];
const etiquetasPPIbiza = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023'];
const partidosPPIbiza = ['AP-PDP-UL','AP','PP','PP','PP','PP','PP','PP','PP','PP','PP'];

const ctxPPIbiza = document.getElementById('ppIbizaChart').getContext('2d');

new Chart(ctxPPIbiza, {
  data: {
    labels: etiquetasPPIbiza,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPPIbiza,
        backgroundColor: 'rgba(0,0,255,0.7)', // azul PP
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
        data: datosPPIbiza,
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
      id: 'etiquetaPartidoPPIbiza',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPIbiza.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPIbiza[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosPSOEIbiza = [30.65, 34.69, 31.82, 28.11, 46.33, 37.8, 45.82, 30.63, 23.54, 30.06, 25.64];
const etiquetasPSOEIbiza = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023'];
const partidosPSOEIbiza = ['PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE'];

const ctxPSOEIbiza = document.getElementById('psoeIbizaChart').getContext('2d');

new Chart(ctxPSOEIbiza, {
  data: {
    labels: etiquetasPSOEIbiza,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPSOEIbiza,
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
        data: datosPSOEIbiza,
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
      id: 'etiquetaPartidoPSOEIbiza',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSOEIbiza.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#B22222';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSOEIbiza[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosVOXIbiza = [4.96, 9.21];
const etiquetasVOXIbiza = ['2019','2023'];
const partidosVOXIbiza = ['VOX','VOX'];

const ctxVOXIbiza = document.getElementById('voxIbizaChart').getContext('2d');

new Chart(ctxVOXIbiza, {
  data: {
    labels: etiquetasVOXIbiza,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosVOXIbiza,
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
        data: datosVOXIbiza,
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
      id: 'etiquetaPartidoVOXIbiza',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXIbiza.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXIbiza[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosPodemosIbiza = [17.33, 11.63, 6.37];
const etiquetasPodemosIbiza = ['2015','2019','2023'];
const partidosPodemosIbiza = ['Podemos','Podemos','Podemos-IU'];

const ctxPodemosIbiza = document.getElementById('podemosIbizaChart').getContext('2d');

new Chart(ctxPodemosIbiza, {
  data: {
    labels: etiquetasPodemosIbiza,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPodemosIbiza,
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
        data: datosPodemosIbiza,
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
      id: 'etiquetaPartidoPodemosIbiza',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosIbiza.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosIbiza[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosAraEivissa = [2.82, 3.15];
const etiquetasAraEivissa = ['2019','2023'];
const partidosAraEivissa = ['ARA EIVISSA','ARA EIVISSA'];

const ctxAraEivissa = document.getElementById('araEivissaChart').getContext('2d');

new Chart(ctxAraEivissa, {
  data: {
    labels: etiquetasAraEivissa,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosAraEivissa,
        backgroundColor: 'rgba(255,215,0,0.7)', // amarillo ARA EIVISSA
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
        data: datosAraEivissa,
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
      id: 'etiquetaPartidoAraEivissa',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosAraEivissa.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#B8860B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosAraEivissa[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosCSIbiza = [8.78, 1.36];
const etiquetasCSIbiza = ['2019','2023'];
const partidosCSIbiza = ['CS','CS'];

const ctxCSIbiza = document.getElementById('csIbizaChart').getContext('2d');

new Chart(ctxCSIbiza, {
  data: {
    labels: etiquetasCSIbiza,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCSIbiza,
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
        data: datosCSIbiza,
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
      id: 'etiquetaPartidoCSIbiza',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSIbiza.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSIbiza[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosElPiIbiza = [5.74, 1.33];
const etiquetasElPiIbiza = ['2015','2023'];
const partidosElPiIbiza = ['El PI','El PI'];

const ctxElPiIbiza = document.getElementById('elPiIbizaChart').getContext('2d');

new Chart(ctxElPiIbiza, {
  data: {
    labels: etiquetasElPiIbiza,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosElPiIbiza,
        backgroundColor: 'rgba(111,185,194,0.7)', // azul turquesa El PI
        borderColor: '#6fb9c2',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#2F6F77', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosElPiIbiza,
        borderColor: '#6fb9c2',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#6fb9c2'
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
      id: 'etiquetaPartidoElPiIbiza',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosElPiIbiza.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#2F6F77';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosElPiIbiza[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosElsVerdsIbiza = [6.91, 1.84, 3.20];
const etiquetasElsVerdsIbiza = ['1995','1999','2003'];
const partidosElsVerdsIbiza = ['Els Verds','Els Verds','Els Verds'];

const ctxElsVerdsIbiza = document.getElementById('elsVerdsIbizaChart').getContext('2d');

new Chart(ctxElsVerdsIbiza, {
  data: {
    labels: etiquetasElsVerdsIbiza,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosElsVerdsIbiza,
        backgroundColor: 'rgba(137,172,118,0.7)', // verde suave Els Verds
        borderColor: '#89ac76',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#4a6a3f', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosElsVerdsIbiza,
        borderColor: '#89ac76',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#89ac76'
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
      id: 'etiquetaPartidoElsVerdsIbiza',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosElsVerdsIbiza.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4a6a3f';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosElsVerdsIbiza[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosFIEFIbiza = [8.33, 4.19];
const etiquetasFIEFIbiza = ['1991','1995'];
const partidosFIEFIbiza = ['FIEF','FIEF'];

const ctxFIEFIbiza = document.getElementById('fiefIbizaChart').getContext('2d');

new Chart(ctxFIEFIbiza, {
  data: {
    labels: etiquetasFIEFIbiza,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosFIEFIbiza,
        backgroundColor: 'rgba(4,87,85,0.7)', // verde azulado FIEF
        borderColor: '#045755',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#023f3d', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosFIEFIbiza,
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
      id: 'etiquetaPartidoFIEFIbiza',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosFIEFIbiza.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#023f3d';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosFIEFIbiza[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosPDLIbiza = [14.63];
const etiquetasPDLIbiza = ['1983'];
const partidosPDLIbiza = ['PDL'];

const ctxPDLIbiza = document.getElementById('pdlIbizaChart').getContext('2d');

new Chart(ctxPDLIbiza, {
  data: {
    labels: etiquetasPDLIbiza,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPDLIbiza,
        backgroundColor: 'rgba(125,171,205,0.7)', // azul claro PDL
        borderColor: '#7dabcd',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#548aa0', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPDLIbiza,
        borderColor: '#7dabcd',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#7dabcd'
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
      id: 'etiquetaPartidoPDLIbiza',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPDLIbiza.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#548aa0';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPDLIbiza[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosCDSIbiza = [7.75, 1.50];
const etiquetasCDSIbiza = ['1987','1991'];
const partidosCDSIbiza = ['CDS','CDS'];

const ctxCDSIbiza = document.getElementById('cdsIbizaChart').getContext('2d');

new Chart(ctxCDSIbiza, {
  data: {
    labels: etiquetasCDSIbiza,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCDSIbiza,
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
        data: datosCDSIbiza,
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
      id: 'etiquetaPartidoCDSIbiza',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSIbiza.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1E90FF';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSIbiza[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosIUIbiza = [3.30, 2.48, 5.98];
const etiquetasIUIbiza = ['1987','1991','1995'];
const partidosIUIbiza = ['IU','IU','IU'];

const ctxIUIbiza = document.getElementById('iuIbizaChart').getContext('2d');

new Chart(ctxIUIbiza, {
  data: {
    labels: etiquetasIUIbiza,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosIUIbiza,
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
        data: datosIUIbiza,
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
      id: 'etiquetaPartidoIUIbiza',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIUIbiza.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIUIbiza[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosUPyDIbiza = [2.38, 1.68];
const etiquetasUPyDIbiza = ['2011','2015'];
const partidosUPyDIbiza = ['UPyD','UPyD'];

const ctxUPyDIbiza = document.getElementById('upydIbizaChart').getContext('2d');

new Chart(ctxUPyDIbiza, {
  data: {
    labels: etiquetasUPyDIbiza,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosUPyDIbiza,
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
        data: datosUPyDIbiza,
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
      id: 'etiquetaPartidoUPyDIbiza',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDIbiza.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF1493';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDIbiza[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

  // Etiquetas de años en Ibiza (basado en los datos individuales)
  const etiquetasIbiza = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023'];

  // Datos combinados por partido en Ibiza
  const datosIbiza = {
    'PP / AP-PDP-UL': [51.47, 53.42, 49.49, 50.63, 47.14, 50.4, 47.13, 49.83, 33.01, 32.57, 48.87],
    'PSOE': [30.65, 34.69, 31.82, 28.11, 46.33, 37.8, 45.82, 30.63, 23.54, 30.06, 25.64],
    'VOX': [null,null,null,null,null,null,null,null,null,4.96,9.21],
    'Podemos / Podemos-IU': [null,null,null,null,null,null,null,null,17.33,11.63,6.37],
    'ARA EIVISSA': [null,null,null,null,null,null,null,null,null,2.82,3.15],
    'Ciudadanos (CS)': [null,null,null,null,null,null,null,null,null,8.78,1.36],
    'El PI': [null,null,null,null,null,null,null,null,5.74,null,1.33],
    'Els Verds': [null,null,null,6.91,1.84,3.20,null,null,null,null,null],
    'FIEF': [null,null,8.33,4.19,null,null,null,null,null,null,null],
    'PDL': [14.63,null,null,null,null,null,null,null,null,null,null],
    'CDS': [null,7.75,1.50,null,null,null,null,null,null,null,null],
    'IU': [null,3.30,2.48,5.98,null,null,null,null,null,null,null],
    'UPyD': [null,null,null,null,null,null,null,2.38,1.68,null,null]
  };

  // Colores por partido
  const coloresPartidosIbiza = {
    'PP / AP-PDP-UL': '#0000FF',
    'PSOE': '#FF0000',
    'VOX': '#008000',
    'Podemos / Podemos-IU': '#800080',
    'ARA EIVISSA': '#FFD700',
    'Ciudadanos (CS)': '#FF8C00',
    'El PI': '#6fb9c2',
    'Els Verds': '#89ac76',
    'FIEF': '#045755',
    'PDL': '#7dabcd',
    'CDS': '#00BFFF',
    'IU': '#B22222',
    'UPyD': '#FF60DA'
  };

  // Crear datasets
  const datasetsIbiza = Object.keys(datosIbiza).map(partido => ({
    type: 'line',
    label: partido,
    data: datosIbiza[partido],
    borderColor: coloresPartidosIbiza[partido],
    backgroundColor: 'transparent',
    fill: false,
    tension: 0.3,
    spanGaps: true,
    pointRadius: 4,
    pointBackgroundColor: coloresPartidosIbiza[partido],
    datalabels: {
      display: true,
      color: coloresPartidosIbiza[partido],
      font: { weight: 'bold', size: 12 },
      formatter: v => v != null ? v.toFixed(2) + '%' : ''
    }
  }));

  // Crear gráfico combinado para Ibiza
  const ctxIbiza = document.getElementById('ibizaChart').getContext('2d');

  new Chart(ctxIbiza, {
    data: {
      labels: etiquetasIbiza,
      datasets: datasetsIbiza
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
