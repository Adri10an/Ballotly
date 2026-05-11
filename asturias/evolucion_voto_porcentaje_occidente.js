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
const datosPPAstOcc = [37.21, 27.89, 31.28, 40.77, 32.94, 38.38, 38.22, 25.63, 26.31,27.21, 25.13, 34.99];
const etiquetasPPAstOcc = ['1983','1987','1991','1995','1999','2003','2007','2011','2012','2015','2019','2023'];
const partidosPPAstOcc = ['AP-PDP-UL','AP','PP','PP','PP','PP','PP','PP','PP','PP','PP','PP'];

const ctxPPAstOcc = document.getElementById('ppAstOccChart').getContext('2d');

new Chart(ctxPPAstOcc, {
  data: {
    labels: etiquetasPPAstOcc,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPPAstOcc,
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
        data: datosPPAstOcc,
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
      id: 'etiquetaPartidoPPAstOcc',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPAstOcc.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPAstOcc[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosPSOEAstOcc = [42.58, 45.87, 48.13, 43.56, 45.3, 45.54, 50.25, 37.42, 35.64,36.33, 42.12, 37.05];
const etiquetasPSOEAstOcc = ['1983','1987','1991','1995','1999','2003','2007','2011','2012','2015','2019','2023'];
const partidosPSOEAstOcc = ['PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE'];

const ctxPSOEAstOcc = document.getElementById('psoeAstOccChart').getContext('2d');

new Chart(ctxPSOEAstOcc, {
  data: {
    labels: etiquetasPSOEAstOcc,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPSOEAstOcc,
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
        data: datosPSOEAstOcc,
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
      id: 'etiquetaPartidoPSOEAstOcc',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSOEAstOcc.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#B22222';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSOEAstOcc[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosFAAstOcc = [25.15,23.97, 8.54, 5.26, 6.67];
const etiquetasFAAstOcc = ['2011','2012','2015','2019','2023'];
const partidosFAAstOcc = ['FA','FA','FA','FA','FA'];

const ctxFAAstOcc = document.getElementById('facAstOccChart').getContext('2d');

new Chart(ctxFAAstOcc, {
  data: {
    labels: etiquetasFAAstOcc,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosFAAstOcc,
        backgroundColor: 'rgba(1,69,134,0.7)', // azul FA semitransparente
        borderColor: '#014586',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#014586', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosFAAstOcc,
        borderColor: '#014586',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#014586'
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
      id: 'etiquetaPartidoFAAstOcc',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosFAAstOcc.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#014586';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosFAAstOcc[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosVOXAstOcc = [4.45, 6.51];
const etiquetasVOXAstOcc = ['2019','2023'];
const partidosVOXAstOcc = ['VOX','VOX'];

const ctxVOXAstOcc = document.getElementById('voxAstOccChart').getContext('2d');

new Chart(ctxVOXAstOcc, {
  data: {
    labels: etiquetasVOXAstOcc,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosVOXAstOcc,
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
        data: datosVOXAstOcc,
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
      id: 'etiquetaPartidoVOXAstOcc',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXAstOcc.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXAstOcc[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosIUAstOcc = [8.7, 9.31, 7.05, 6.91, 7.99,9.31, 7.88, 5.03, 5.4];
const etiquetasIUAstOcc = ['1987','1991','2003','2007','2011','2012','2015','2019','2023'];
const partidosIUAstOcc = ['IU','IU','IU','IU','IU','IU','IU','IU','IU'];

const ctxIUAstOcc = document.getElementById('iuAstOccChart').getContext('2d');

new Chart(ctxIUAstOcc, {
  data: {
    labels: etiquetasIUAstOcc,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosIUAstOcc,
        backgroundColor: 'rgba(178,34,34,0.7)', // rojo IU semitransparente
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
        data: datosIUAstOcc,
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
      id: 'etiquetaPartidoIUAstOcc',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIUAstOcc.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIUAstOcc[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosPodemosAstOcc = [14.53, 7.7, 1.75];
const etiquetasPodemosAstOcc = ['2015','2019','2023'];
const partidosPodemosAstOcc = ['Podemos','Podemos','Podemos-IU'];

const ctxPodemosAstOcc = document.getElementById('podemosAstOccChart').getContext('2d');

new Chart(ctxPodemosAstOcc, {
  data: {
    labels: etiquetasPodemosAstOcc,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPodemosAstOcc,
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
        data: datosPodemosAstOcc,
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
      y: { beginAtZero: true, title: { display: true, text: 'Porcentaje (%)', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoPodemosAstOcc',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosAstOcc.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosAstOcc[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosCsAstOcc = [3.35, 9.62, 0.51];
const etiquetasCsAstOcc = ['2015','2019','2023'];
const partidosCsAstOcc = ['CS','CS','CS'];

const ctxCsAstOcc = document.getElementById('csAstOccChart').getContext('2d');

new Chart(ctxCsAstOcc, {
  data: {
    labels: etiquetasCsAstOcc,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCsAstOcc,
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
        data: datosCsAstOcc,
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
      y: { beginAtZero: true, title: { display: true, text: 'Porcentaje (%)', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoCsAstOcc',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCsAstOcc.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCsAstOcc[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosURASAstOcc = [13.14, 4.82, 1.28, 0.46, 0.40,0.37];
const etiquetasURASAstOcc = ['1999','2003','2007','2011','2012','2015'];
const partidosURASAstOcc = ['URAS','URAS','URAS','URAS','URAS','URAS'];

const ctxURASAstOcc = document.getElementById('urasAstOccChart').getContext('2d');

new Chart(ctxURASAstOcc, {
  data: {
    labels: etiquetasURASAstOcc,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosURASAstOcc,
        backgroundColor: 'rgba(73,186,233,0.7)', // azul claro URAS
        borderColor: '#49BAE9',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#007BA7', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosURASAstOcc,
        borderColor: '#49BAE9',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#49BAE9'
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
      id: 'etiquetaPartidoURASAstOcc',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosURASAstOcc.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#007BA7';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosURASAstOcc[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosCDSAstOcc = [13.84, 7.83];
const etiquetasCDSAstOcc = ['1987','1991'];
const partidosCDSAstOcc = ['CDS','CDS'];

const ctxCDSAstOcc = document.getElementById('cdsAstOccChart').getContext('2d');

new Chart(ctxCDSAstOcc, {
  data: {
    labels: etiquetasCDSAstOcc,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCDSAstOcc,
        backgroundColor: 'rgba(0,191,255,0.7)', // azul claro CDS
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
        data: datosCDSAstOcc,
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
      id: 'etiquetaPartidoCDSAstOcc',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSAstOcc.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1E90FF';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSAstOcc[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosUPyDAstOcc = [0.8,1.69, 0.38];
const etiquetasUPyDAstOcc = ['2011','2012','2015'];
const partidosUPyDAstOcc = ['UPyD','UPyD','UPyD'];

const ctxUPyDAstOcc = document.getElementById('upydAstOccChart').getContext('2d');

new Chart(ctxUPyDAstOcc, {
  data: {
    labels: etiquetasUPyDAstOcc,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosUPyDAstOcc,
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
        data: datosUPyDAstOcc,
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
      id: 'etiquetaPartidoUPyDAstOcc',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDAstOcc.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF1493';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDAstOcc[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

  // Etiquetas de años para Asturias Occidente
  const etiquetasAstOcc = ['1983','1987','1991','1995','1999','2003','2007','2011','2012','2015','2019','2023'];

  // Datos combinados por partido en Asturias Occidente
  const datosAstOcc = {
    'PP/AP-PDP-UL': [37.21,27.89,31.28,40.77,32.94,38.38,38.22,25.63,26.31,27.21,25.13,34.99],
    'PSOE':        [42.58,45.87,48.13,43.56,45.3,45.54,50.25,37.42,35.64,36.33,42.12,37.05],
    'FAC':         [null,null,null,null,null,null,null,25.15,23.97,8.54,5.26,6.67],
    'VOX':         [null,null,null,null,null,null,null,null,null,null,4.45,6.51],
    'CS':          [null,null,null,null,null,null,null,null,null,3.35,9.62,0.51],
    'Podemos/IU':  [null,null,null,null,null,null,null,null,null,14.53,7.7,1.75],
    'IU':          [null,8.7,9.31,null,null,7.05,6.91,7.99,9.31,7.88,5.03,5.4],
    'URAS':        [null,null,null,null,13.14,4.82,1.28,0.46,0.40,0.37,null,null],
    'CDS':         [null,13.84,7.83,null,null,null,null,null,null,null,null,null],
    'UPyD':        [null,null,null,null,null,null,null,0.8,1.69,0.38,null,null]
  };

  // Colores de cada partido
  const coloresPartidosAstOcc = {
    'PP/AP-PDP-UL': '#0000FF',
    'PSOE': '#FF0000',
    'FAC': '#014586',
    'VOX': '#008000',
    'CS': '#FF8C00',
    'Podemos/IU': '#800080',
    'IU': '#B22222',
    'URAS': '#49BAE9',
    'CDS': '#00BFFF',
    'UPyD': '#FF60DA'
  };

  // Crear datasets para Chart.js
  const datasetsAstOcc = Object.keys(datosAstOcc).map(partido => ({
    type: 'line',
    label: partido,
    data: datosAstOcc[partido],
    borderColor: coloresPartidosAstOcc[partido],
    backgroundColor: 'transparent',
    fill: false,
    tension: 0.3,
    spanGaps: true,
    pointRadius: 4,
    pointBackgroundColor: coloresPartidosAstOcc[partido],
    datalabels: {
      display: true,
      color: coloresPartidosAstOcc[partido],
      font: { weight: 'bold', size: 12 },
      formatter: v => v != null ? v.toFixed(2) + '%' : ''
    }
  }));

  // Crear el gráfico combinado
  const ctxAstOcc = document.getElementById('astOccChart').getContext('2d');

  new Chart(ctxAstOcc, {
    data: {
      labels: etiquetasAstOcc,
      datasets: datasetsAstOcc
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