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
// ================= PP Asturias Centro (porcentaje de voto) =================
const datosPPAstCnt = [27.65, 23.65, 29.41, 42.54, 31.72, 31.72, 43.13, 19.12, 20.63, 20.76, 16.24, 31.92];
const etiquetasPPAstCnt = ['1983','1987','1991','1995','1999','2003','2007','2011','2012','2015','2019','2023'];
const partidosPPAstCnt = ['AP-PDP-UL','AP','PP','PP','PP','PP','PP','PP','PP','PP','PP','PP'];

const ctxPPAstCnt = document.getElementById('ppAstCntChart').getContext('2d');

new Chart(ctxPPAstCnt, {
  data: {
    labels: etiquetasPPAstCnt,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPPAstCnt,
        backgroundColor: 'rgba(0,85,164,0.7)', // azul PP semitransparente
        borderColor: '#0055A4',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#003366', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPPAstCnt,
        borderColor: '#0055A4',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#0055A4'
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
      id: 'etiquetaPartidoPPAstCnt',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPAstCnt.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#003366';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPAstCnt[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PSOE Asturias Centro (porcentaje de voto) =================
const datosPSOEAstCnt = [54.54, 36.97, 39.15, 31.75, 46.3, 39.27, 41.25, 28.36, 31.2, 25.04, 34.25, 36.25];
const etiquetasPSOEAstCnt = ['1983','1987','1991','1995','1999','2003','2007','2011','2012','2015','2019','2023'];
const partidosPSOEAstCnt = ['PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE'];

const ctxPSOEAstCnt = document.getElementById('psoeAstCntChart').getContext('2d');

new Chart(ctxPSOEAstCnt, {
  data: {
    labels: etiquetasPSOEAstCnt,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPSOEAstCnt,
        backgroundColor: 'rgba(220,0,0,0.7)', // rojo PSOE semitransparente
        borderColor: '#DC0000',
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
        data: datosPSOEAstCnt,
        borderColor: '#DC0000',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#DC0000'
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
      id: 'etiquetaPartidoPSOEAstCnt',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSOEAstCnt.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSOEAstCnt[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= VOX Asturias Centro (porcentaje de voto) =================
const datosVOXAstCnt = [6.91, 10.66];
const etiquetasVOXAstCnt = ['2019','2023'];
const partidosVOXAstCnt = ['VOX','VOX'];

const ctxVOXAstCnt = document.getElementById('voxAstCntChart').getContext('2d');

new Chart(ctxVOXAstCnt, {
  data: {
    labels: etiquetasVOXAstCnt,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosVOXAstCnt,
        backgroundColor: 'rgba(0,128,0,0.7)', // verde VOX semitransparente
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
        data: datosVOXAstCnt,
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
      id: 'etiquetaPartidoVOXAstCnt',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXAstCnt.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXAstCnt[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= IU Asturias Centro (porcentaje de voto) =================
const datosIUAstCnt = [13.61, 17.08, 18.85, 10.23, 12.36, 10.89, 11.17, 15.04, 13.33, 7.23, 8.17];
const etiquetasIUAstCnt = ['1987','1991','1995','1999','2003','2007','2011','2012','2015','2019','2023'];
const partidosIUAstCnt = ['IU','IU','IU','IU','IU','IU','IU','IU','IU','IU','IU'];

const ctxIUAstCnt = document.getElementById('iuAstCntChart').getContext('2d');

new Chart(ctxIUAstCnt, {
  data: {
    labels: etiquetasIUAstCnt,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosIUAstCnt,
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
        data: datosIUAstCnt,
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
      id: 'etiquetaPartidoIUAstCnt',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIUAstCnt.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIUAstCnt[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Podemos Asturias Centro (porcentaje de voto) =================
const datosPodemosAstCnt = [20.67, 11.94, 4.35];
const etiquetasPodemosAstCnt = ['2015','2019','2023'];
const partidosPodemosAstCnt = ['Podemos','Podemos','Podemos-IU'];

const ctxPodemosAstCnt = document.getElementById('podemosAstCntChart').getContext('2d');

new Chart(ctxPodemosAstCnt, {
  data: {
    labels: etiquetasPodemosAstCnt,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPodemosAstCnt,
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
        data: datosPodemosAstCnt,
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
      id: 'etiquetaPartidoPodemosAstCnt',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosAstCnt.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosAstCnt[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= FORO Asturias Centro (porcentaje de voto) =================
const datosFAAstCnt = [30.10, 24.62, 7.93, 6.57, 3.22];
const etiquetasFAAstCnt = ['2011','2012','2015','2019','2023'];
const partidosFAAstCnt = ['FA','FA','FA','FA','FA'];

const ctxFAAstCnt = document.getElementById('facAstCntChart').getContext('2d');

new Chart(ctxFAAstCnt, {
  data: {
    labels: etiquetasFAAstCnt,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosFAAstCnt,
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
        data: datosFAAstCnt,
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
      id: 'etiquetaPartidoFAAstCnt',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosFAAstCnt.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#014586';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosFAAstCnt[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Ciudadanos (CS) Asturias Centro (porcentaje de voto) =================
const datosCsAstCnt = [8.09, 15.07, 0.99];
const etiquetasCsAstCnt = ['2015','2019','2023'];
const partidosCsAstCnt = ['CS','CS','CS'];

const ctxCsAstCnt = document.getElementById('csAstCntChart').getContext('2d');

new Chart(ctxCsAstCnt, {
  data: {
    labels: etiquetasCsAstCnt,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCsAstCnt,
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
        data: datosCsAstCnt,
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
      id: 'etiquetaPartidoCsAstCnt',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCsAstCnt.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCsAstCnt[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= URAS (Unión Renovadora Asturiana) - Asturias Centro =================
const datosURASAstCnt = [5.87, 2.43, 2.33, 0.53, 0.05];
const etiquetasURASAstCnt = ['1999','2003','2007','2011','2012'];
const partidosURASAstCnt = ['URAS','URAS','URAS','URAS','URAS'];

const ctxURASAstCnt = document.getElementById('urasAstCntChart').getContext('2d');

new Chart(ctxURASAstCnt, {
  data: {
    labels: etiquetasURASAstCnt,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosURASAstCnt,
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
        data: datosURASAstCnt,
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
      id: 'etiquetaPartidoURASAstCnt',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosURASAstCnt.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#007BA7';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosURASAstCnt[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PAS - Asturias Centro =================
const datosPASAstCnt = [3.13, 3.56, 3.56];
const etiquetasPASAstCnt = ['1991','1995','1999'];
const partidosPASAstCnt = ['PAS','PAS','PAS'];

const ctxPASAstCnt = document.getElementById('pasAstCntChart').getContext('2d');

new Chart(ctxPASAstCnt, {
  data: {
    labels: etiquetasPASAstCnt,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPASAstCnt,
        backgroundColor: 'rgba(127,150,98,0.7)', // verde oliva PAS
        borderColor: '#7F9662',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#556B2F', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPASAstCnt,
        borderColor: '#7F9662',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#7F9662'
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
      id: 'etiquetaPartidoPASAstCnt',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPASAstCnt.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#556B2F';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPASAstCnt[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CDS (Centro Democrático y Social) - Asturias Centro =================
const datosCDSAstCnt = [19.94, 6.44, 1.55];
const etiquetasCDSAstCnt = ['1987','1991','1995'];
const partidosCDSAstCnt = ['CDS','CDS','CDS'];

const ctxCDSAstCnt = document.getElementById('cdsAstCntChart').getContext('2d');

new Chart(ctxCDSAstCnt, {
  data: {
    labels: etiquetasCDSAstCnt,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCDSAstCnt,
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
        data: datosCDSAstCnt,
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
      id: 'etiquetaPartidoCDSAstCnt',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSAstCnt.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1E90FF';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSAstCnt[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UPyD - Asturias Centro =================
const datosUPyDAstCnt = [2.95, 4.20, 0.91];
const etiquetasUPyDAstCnt = ['2011','2012','2015'];
const partidosUPyDAstCnt = ['UPyD','UPyD','UPyD'];

const ctxUPyDAstCnt = document.getElementById('upydAstCntChart').getContext('2d');

new Chart(ctxUPyDAstCnt, {
  data: {
    labels: etiquetasUPyDAstCnt,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosUPyDAstCnt,
        backgroundColor: 'rgba(255,96,218,0.7)', // magenta UPyD semitransparente
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
        data: datosUPyDAstCnt,
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
      id: 'etiquetaPartidoUPyDAstCnt',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDAstCnt.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF1493';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDAstCnt[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

  // Etiquetas de años para Asturias Centro
  const etiquetasAstCnt = ['1983','1987','1991','1995','1999','2003','2007','2011','2012','2015','2019','2023'];

  // Datos combinados por partido en Asturias Centro
  const datosAstCnt = {
    'PP/AP-PDP-UL': [27.65,23.65,29.41,42.54,31.72,31.72,43.13,19.12,20.63,20.76,16.24,31.92],
    'PSOE':        [54.54,36.97,39.15,31.75,46.3,39.27,41.25,28.36,31.2,25.04,34.25,36.25],
    'FAC':         [null,null,null,null,null,null,null,30.10,24.62,7.93,6.57,3.22],
    'VOX':         [null,null,null,null,null,null,null,null,null,null,6.91,10.66],
    'CS':          [null,null,null,null,null,null,null,null,null,8.09,15.07,0.99],
    'Podemos/IU':  [null,null,null,null,null,null,null,null,null,20.67,11.94,4.35],
    'IU':          [null,13.61,17.08,18.85,10.23,12.36,10.89,11.17,15.04,13.33,7.23,8.17],
    'URAS':        [null,null,null,null,5.87,2.43,2.33,0.53,0.05,null,null,null],
    'PAS':         [null,null,3.13,3.56,3.56,null,null,null,null,null,null,null],
    'CDS':         [null,19.94,6.44,1.55,null,null,null,null,null,null,null,null],
    'UPyD':        [null,null,null,null,null,null,null,0.8,1.69,0.38,null,null]
  };

  // Colores de cada partido
  const coloresPartidosAstCnt = {
    'PP/AP-PDP-UL': '#0000FF',
    'PSOE': '#FF0000',
    'FAC': '#014586',
    'VOX': '#008000',
    'CS': '#FF8C00',
    'Podemos/IU': '#800080',
    'IU': '#B22222',
    'URAS': '#49BAE9',
    'PAS': '#7F9662',
    'CDS': '#00BFFF',
    'UPyD': '#FF60DA'
  };

  // Crear datasets para Chart.js
  const datasetsAstCnt = Object.keys(datosAstCnt).map(partido => ({
    type: 'line',
    label: partido,
    data: datosAstCnt[partido],
    borderColor: coloresPartidosAstCnt[partido],
    backgroundColor: 'transparent',
    fill: false,
    tension: 0.3,
    spanGaps: true,
    pointRadius: 4,
    pointBackgroundColor: coloresPartidosAstCnt[partido],
    datalabels: {
      display: true,
      color: coloresPartidosAstCnt[partido],
      font: { weight: 'bold', size: 12 },
      formatter: v => v != null ? v.toFixed(2) + '%' : ''
    }
  }));

  // Crear el gráfico combinado
  const ctxAstCnt = document.getElementById('astCntChart').getContext('2d');

  new Chart(ctxAstCnt, {
    data: {
      labels: etiquetasAstCnt,
      datasets: datasetsAstCnt
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
          title: { display: true, text: 'Porcentaje (%)', color: '#333' }, 
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