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
// ================= PP Aragón =================
const datosPPAragon = [
  22.77, // 1983
  15.73, // 1987
  20.95, // 1991
  38.10, // 1995
  39.03, // 1999
  31.39, // 2003
  31.06, // 2007
  39.69, // 2011
  27.50, // 2015
  20.87, // 2019
  35.51,  // 2023
  34.17 //2026
];
const etiquetasPPAragon = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023','2026'];
const partidosPPAragon = ['AP-PDP-UL','AP','PP','PP','PP','PP','PP','PP','PP','PP','PP','PP'];

const ctxPPAragon = document.getElementById('ppAragonChart').getContext('2d');

new Chart(ctxPPAragon, {
  data: {
    labels: etiquetasPPAragon,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPPAragon,
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
        data: datosPPAragon,
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
      id: 'etiquetaPartidoPPAragon',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPAragon.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPAragon[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PSOE Aragón =================
const datosPSOEAragon = [
  47.13, // 1983
  36.21, // 1987
  40.87, // 1991
  26.13, // 1995
  31.46, // 1999
  38.75, // 2003
  41.14, // 2007
  29.02, // 2011
  21.41, // 2015
  30.81, // 2019
  29.55,  // 2023
  24.37, //2026
];
const etiquetasPSOEAragon = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023','2026'];
const partidosPSOEAragon = ['PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE'];

const ctxPSOEAragon = document.getElementById('psoeAragonChart').getContext('2d');

new Chart(ctxPSOEAragon, {
  data: {
    labels: etiquetasPSOEAragon,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPSOEAragon,
        backgroundColor: 'rgba(229,0,0,0.7)', // rojo PSOE
        borderColor: '#E50000',
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
        data: datosPSOEAragon,
        borderColor: '#E50000',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#E50000'
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
      id: 'etiquetaPartidoPSOEAragon',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSOEAragon.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSOEAragon[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= VOX Aragón =================
const datosVOXAragon = [6.08, 11.25,17.84];
const etiquetasVOXAragon = ['2019', '2023','2026'];
const partidosVOXAragon = ['VOX', 'VOX','VOX'];

const ctxVOXAragon = document.getElementById('voxAragonChart').getContext('2d');

new Chart(ctxVOXAragon, {
  data: {
    labels: etiquetasVOXAragon,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosVOXAragon,
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
        data: datosVOXAragon,
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
      id: 'etiquetaPartidoVOXAragon',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXAragon.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXAragon[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CHA Aragón =================
const datosCHAAragon = [0.98, 2.33, 4.93, 11.28, 14.01, 8.15, 8.23, 4.59, 6.26, 5.10,9.74];
const etiquetasCHAAragon = ['1987','1991','1995','1999','2003','2007','2011','2015','2019','2023','2026'];
const partidosCHAAragon = ['CHA','CHA','CHA','CHA','CHA','CHA','CHA','CHA','CHA','CHA','CHA'];

const ctxCHAAragon = document.getElementById('chaAragonChart').getContext('2d');

new Chart(ctxCHAAragon, {
  data: {
    labels: etiquetasCHAAragon,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCHAAragon,
        backgroundColor: 'rgba(173,0,23,0.7)', // color CHA
        borderColor: '#ad0017',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#800012', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCHAAragon,
        borderColor: '#ad0017',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#ad0017'
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
      id: 'etiquetaPartidoCHAAragon',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCHAAragon.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#800012';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCHAAragon[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Aragón Existe (Aragón) =================
const datosAragonexisteAragon = [4.96,3.53];
const etiquetasAragonexisteAragon = ['2023','2026'];
const partidosAragonexisteAragon = ['Aragón Existe','Aragón Existe'];

const ctxAragonexisteAragon = document.getElementById('aragonexisteAragonChart').getContext('2d');

new Chart(ctxAragonexisteAragon, {
  data: {
    labels: etiquetasAragonexisteAragon,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosAragonexisteAragon,
        backgroundColor: 'rgba(3,114,82,0.7)', // verde Aragón Existe
        borderColor: '#037252',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#024c38',
          font: { weight: 'bold' },
          formatter: (v) => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosAragonexisteAragon,
        borderColor: '#037252',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 5,
        pointBackgroundColor: '#037252'
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
      id: 'etiquetaPartidoAragonexisteAragon',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosAragonexisteAragon.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#024c38';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosAragonexisteAragon[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Podemos/IU (Aragón) =================
const datosPodemosAragon = [20.51, 8.08, 4.02,0.94];
const etiquetasPodemosAragon = ['2015','2019','2023','2026'];
const partidosPodemosAragon = ['Podemos','Podemos','Podemos','Podemos'];

const ctxPodemosAragon = document.getElementById('podemosAragonChart').getContext('2d');

new Chart(ctxPodemosAragon, {
  data: {
    labels: etiquetasPodemosAragon,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPodemosAragon,
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
        data: datosPodemosAragon,
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
      id: 'etiquetaPartidoPodemosAragon',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosAragon.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosAragon[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= IU (Aragón) =================
const datosIUAragon = [0.77, 4.98, 6.83, 9.35, 3.92, 3.12, 4.08, 6.16, 4.23, 3.33, 3.13,2.96];
const etiquetasIUAragon = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023','2026'];
const partidosIUAragon = ['IU','IU','IU','IU','IU','IU','IU','IU','IU','IU','IU','IU'];

const ctxIUAragon = document.getElementById('iuAragonChart').getContext('2d');

new Chart(ctxIUAragon, {
  data: {
    labels: etiquetasIUAragon,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosIUAragon,
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
        data: datosIUAragon,
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
      id: 'etiquetaPartidoIUAragon',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIUAragon.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIUAragon[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PAR (Aragón) =================
const datosPARAragon = [20.64, 28.56, 25.00, 20.76, 13.54, 11.41, 12.08, 9.15, 6.90, 5.06, 2.09,1.24];
const etiquetasPARAragon = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023','2026'];
const partidosPARAragon = ['PAR','PAR','PAR','PAR','PAR','PAR','PAR','PAR','PAR','PAR','PAR','PAR'];

const ctxPARAragon = document.getElementById('parAragonChart').getContext('2d');

new Chart(ctxPARAragon, {
  data: {
    labels: etiquetasPARAragon,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPARAragon,
        backgroundColor: 'rgba(201,159,0,0.7)', // dorado PAR
        borderColor: '#c99f00',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#8b7300', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPARAragon,
        borderColor: '#c99f00',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#c99f00'
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
      id: 'etiquetaPartidoPARAragon',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPARAragon.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8b7300';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPARAragon[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CS (Aragón) =================
const datosCSAragon = [9.41, 16.7, 1.28];
const etiquetasCSAragon = ['2015','2019','2023'];
const partidosCSAragon = ['CS','CS','CS'];

const ctxCSAragon = document.getElementById('csAragonChart').getContext('2d');

new Chart(ctxCSAragon, {
  data: {
    labels: etiquetasCSAragon,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCSAragon,
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
        data: datosCSAragon,
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
      id: 'etiquetaPartidoCSAragon',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSAragon.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSAragon[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CDS (Aragón) =================
const datosCDSAragon = [3.31, 10.38, 3.13];
const etiquetasCDSAragon = ['1983','1987','1991'];
const partidosCDSAragon = ['CDS','CDS','CDS'];

const ctxCDSAragon = document.getElementById('cdsAragonChart').getContext('2d');

new Chart(ctxCDSAragon, {
  data: {
    labels: etiquetasCDSAragon,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCDSAragon,
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
        data: datosCDSAragon,
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
      id: 'etiquetaPartidoCDSAragon',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSAragon.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1E90FF';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSAragon[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= SALF Aragón =================
const datosSALFAragon = [2.74];
const etiquetasSALFAragon = ['2026'];
const partidosSALFAragon = ['SALF'];

const ctxSALFAragon = document.getElementById('salfAragonChart').getContext('2d');

new Chart(ctxSALFAragon, {
  data: {
    labels: etiquetasSALFAragon,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosSALFAragon,
        backgroundColor: 'rgba(0, 90, 150, 0.7)', 
        borderColor: '#005a96',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end',
          align: 'top',
          color: '#005a96',
          font: { weight: 'bold' },
          formatter: (v) => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosSALFAragon,
        borderColor: '#005a96',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#005a96'
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
      id: 'etiquetaPartidoSALFAragon',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosSALFAragon.forEach((_, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#005a96';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosSALFAragon[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PCE Aragón =================
const datosPCEAragon = [3.99];
const etiquetasPCEAragon = ['1983'];
const partidosPCEAragon = ['PCE'];

const ctxPCEAragon = document.getElementById('pceAragonChart').getContext('2d');

new Chart(ctxPCEAragon, {
  data: {
    labels: etiquetasPCEAragon,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPCEAragon,
        backgroundColor: 'rgba(64,11,13,0.7)', // rojo PCE
        borderColor: '#400b0d',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end',
          align: 'top',
          color: '#400b0d',
          font: { weight: 'bold' },
          formatter: (v) => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPCEAragon,
        borderColor: '#400b0d',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#400b0d'
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
      id: 'etiquetaPartidoPCEAragon',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPCEAragon.forEach((_, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#400b0d';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPCEAragon[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UPyD (Aragón) =================
const datosUPyDAragon = [2.31, 0.85];
const etiquetasUPyDAragon = ['2011','2015'];
const partidosUPyDAragon = ['UPyD','UPyD'];

const ctxUPyDAragon = document.getElementById('upydAragonChart').getContext('2d');

new Chart(ctxUPyDAragon, {
  data: {
    labels: etiquetasUPyDAragon,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosUPyDAragon,
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
        data: datosUPyDAragon,
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
      id: 'etiquetaPartidoUPyDAragon',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDAragon.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF1493';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDAragon[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// Etiquetas de años de Aragón
const etiquetasAragon = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023','2026'];

// Datos combinados por partido en Aragón
const datosAragon = {
  'PP':       [22.77, 15.73, 20.95, 38.10, 39.03, 31.39, 31.06, 39.69, 27.50, 20.87, 35.51,34.17],
  'PSOE':     [47.13, 36.21, 40.87, 26.13, 31.46, 38.75, 41.14, 29.02, 21.41, 30.81, 29.55,24.37],
  'Aragón Existe': [null,null,null,null,null,null,null,null,null,null,4.96,3.53],
  'VOX':      [null,null,null,null,null,null,null,null,null,6.08,11.25,17.84],
  'PAR':      [20.64, 28.56, 25.00, 20.76, 13.54, 11.41, 12.08, 9.15, 6.90, 5.06, 2.09,1.24],
  'IU':       [0.77, 4.98, 6.83, 9.35, 3.92, 3.12, 4.08, 6.16, 4.23, 3.33, 3.13,2.96],
  'CHA':      [null,0.98, 2.33, 4.93, 11.28, 14.01, 8.15, 8.23, 4.59, 6.26, 5.10,9.74],
  'Podemos/IU':[null,null,null,null,null,null,null,null,20.51,8.08,4.02,0.94],
  'SALF':[null,null,null,null,null,null,null,null,null,null,null,2.74],
  'CS':       [null,null,null,null,null,null,null,null,9.41,16.7,1.28],
  'CDS':      [3.31, 10.38, 3.13,null,null,null,null,null,null,null,null],
  'PCE':      [3.99, null, null, null,null,null,null,null,null,null,null],
  'UPyD':     [null,null,null,null,null,null,null,2.31,0.85,null,null]
};

// Colores de cada partido
const coloresPartidosAragon = {
  'PP': '#0000FF',
  'PSOE': '#E50000',
  'Aragón Existe': '#037252',
  'VOX': '#008000',
  'PAR': '#c99f00',
  'IU': '#B22222',
  'CHA': '#000000',
  'Podemos/IU': '#800080',
  'SALF': '#005a96',
  'CS': '#FF8C00',
  'CDS': '#00BFFF',
  'PCE':'#400b0d',
  'UPyD': '#FF60DA'
};

// Crear datasets para Chart.js
const datasetsAragon = Object.keys(datosAragon).map(partido => ({
  type: 'line',
  label: partido,
  data: datosAragon[partido],
  borderColor: coloresPartidosAragon[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresPartidosAragon[partido],
  datalabels: {
    display: true,
    color: coloresPartidosAragon[partido],
    font: { weight: 'bold', size: 12 },
    formatter: v => v != null ? v.toFixed(2) + '%' : ''
  }
}));

// Crear el gráfico combinado
const ctxAragon = document.getElementById('aragonChart').getContext('2d');
new Chart(ctxAragon, {
  data: {
    labels: etiquetasAragon,
    datasets: datasetsAragon
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