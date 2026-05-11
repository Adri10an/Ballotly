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
// ================= PP Zaragoza =================
const datosPPZaragoza = [
  19.89, // 1983
  13.48, // 1987
  18.93, // 1991
  38.64, // 1995
  39.84, // 1999
  31.18, // 2003
  31.53, // 2007
  40.84, // 2011
  27.77, // 2015
  20.37, // 2019
  36.24,  // 2023
  35.33, //2026
];
const etiquetasPPZaragoza = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023','2026'];
const partidosPPZaragoza = ['AP-PDP-UL','AP','PP','PP','PP','PP','PP','PP','PP','PP','PP','PP'];

const ctxPPZaragoza = document.getElementById('ppZaragozaChart').getContext('2d');

new Chart(ctxPPZaragoza, {
  data: {
    labels: etiquetasPPZaragoza,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPPZaragoza,
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
        data: datosPPZaragoza,
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
      id: 'etiquetaPartidoPPZaragoza',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPZaragoza.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPZaragoza[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PSOE Zaragoza =================
const datosPSOEZaragoza = [
  48.12, // 1983
  36.05, // 1987
  41.64, // 1991
  23.50, // 1995
  30.39, // 1999
  38.20, // 2003
  41.21, // 2007
  28.17, // 2011
  20.12, // 2015
  30.06, // 2019
  30.43,  // 2023
  23.86, //2026
];
const etiquetasPSOEZaragoza = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023','2026'];
const partidosPSOEZaragoza = ['PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE'];

const ctxPSOEZaragoza = document.getElementById('psoeZaragozaChart').getContext('2d');

new Chart(ctxPSOEZaragoza, {
  data: {
    labels: etiquetasPSOEZaragoza,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPSOEZaragoza,
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
        data: datosPSOEZaragoza,
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
      id: 'etiquetaPartidoPSOEZaragoza',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSOEZaragoza.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSOEZaragoza[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= VOX Zaragoza =================
const datosVOXZaragoza = [6.45, 11.62,17.36];
const etiquetasVOXZaragoza = ['2019', '2023','2026'];
const partidosVOXZaragoza = ['VOX', 'VOX','VOX'];

const ctxVOXZaragoza = document.getElementById('voxZaragozaChart').getContext('2d');

new Chart(ctxVOXZaragoza, {
  data: {
    labels: etiquetasVOXZaragoza,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosVOXZaragoza,
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
        data: datosVOXZaragoza,
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
      id: 'etiquetaPartidoVOXZaragoza',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXZaragoza.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXZaragoza[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CHA Zaragoza =================
const datosCHAZaragoza = [0.86, 2.23, 5.62, 13.09, 16.07, 8.73, 9.27, 5.11, 6.92, 5.50,10.52];
const etiquetasCHAZaragoza = ['1987','1991','1995','1999','2003','2007','2011','2015','2019','2023','2026'];
const partidosCHAZaragoza = ['CHA','CHA','CHA','CHA','CHA','CHA','CHA','CHA','CHA','CHA','CHA'];

const ctxCHAZaragoza = document.getElementById('chaZaragozaChart').getContext('2d');

new Chart(ctxCHAZaragoza, {
  data: {
    labels: etiquetasCHAZaragoza,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCHAZaragoza,
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
        data: datosCHAZaragoza,
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
      id: 'etiquetaPartidoCHAZaragoza',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCHAZaragoza.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#800012';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCHAZaragoza[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Podemos/IU Zaragoza =================
const datosPodemosZaragoza = [21.71, 8.37, 4.33,1.04];
const etiquetasPodemosZaragoza = ['2015','2019','2023','2026'];
const partidosPodemosZaragoza = ['Podemos','Podemos','Podemos','Podemos'];

const ctxPodemosZaragoza = document.getElementById('podemosZaragozaChart').getContext('2d');

new Chart(ctxPodemosZaragoza, {
  data: {
    labels: etiquetasPodemosZaragoza,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPodemosZaragoza,
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
        data: datosPodemosZaragoza,
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
      id: 'etiquetaPartidoPodemosZaragoza',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosZaragoza.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosZaragoza[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= IU (Zaragoza) =================
const datosIUZaragoza = [1.01, 5.30, 7.62, 10.63, 3.98, 3.14, 4.18, 6.46, 4.39, 3.58, 3.37,3.18];
const etiquetasIUZaragoza = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023','2026'];
const partidosIUZaragoza = ['IU','IU','IU','IU','IU','IU','IU','IU','IU','IU','IU','IU'];

const ctxIUZaragoza = document.getElementById('iuZaragozaChart').getContext('2d');

new Chart(ctxIUZaragoza, {
  data: {
    labels: etiquetasIUZaragoza,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosIUZaragoza,
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
        data: datosIUZaragoza,
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
      id: 'etiquetaPartidoIUZaragoza',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIUZaragoza.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIUZaragoza[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= SALF Zaragoza =================
const datosSALFZaragoza = [2.92];
const etiquetasSALFZaragoza = ['2026'];
const partidosSALFZaragoza = ['SALF'];

const ctxSALFZaragoza = document.getElementById('salfZaragozaChart').getContext('2d');

new Chart(ctxSALFZaragoza, {
  data: {
    labels: etiquetasSALFZaragoza,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosSALFZaragoza,
        backgroundColor: 'rgba(0,90,150,0.7)', // azul SALF
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
        data: datosSALFZaragoza,
        borderColor: '#005a96',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 5,
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
      id: 'etiquetaPartidoSALFZaragoza',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosSALFZaragoza.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#005a96';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosSALFZaragoza[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Aragón Existe (Zaragoza) =================
const datosAragonexisteZaragoza = [2.96,2.55];
const etiquetasAragonexisteZaragoza = ['2023','2026'];
const partidosAragonexisteZaragoza = ['Aragón Existe','Aragón Existe'];

const ctxAragonexisteZaragoza = document.getElementById('aragonexisteZaragozaChart').getContext('2d');

new Chart(ctxAragonexisteZaragoza, {
  data: {
    labels: etiquetasAragonexisteZaragoza,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosAragonexisteZaragoza,
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
        data: datosAragonexisteZaragoza,
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
      id: 'etiquetaPartidoAragonexisteZaragoza',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosAragonexisteZaragoza.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#024c38';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosAragonexisteZaragoza[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CS (Zaragoza) =================
const datosCSZaragoza = [10.00, 17.79, 1.34];
const etiquetasCSZaragoza = ['2015','2019','2023'];
const partidosCSZaragoza = ['CS','CS','CS'];

const ctxCSZaragoza = document.getElementById('csZaragozaChart').getContext('2d');

new Chart(ctxCSZaragoza, {
  data: {
    labels: etiquetasCSZaragoza,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCSZaragoza,
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
        data: datosCSZaragoza,
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
      id: 'etiquetaPartidoCSZaragoza',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSZaragoza.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSZaragoza[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PAR Zaragoza =================
const datosPARZaragoza = [22.18, 31.38, 25.86, 20.89, 11.93, 9.91, 10.63, 7.17, 5.25, 3.61, 1.12,0.8];
const etiquetasPARZaragoza = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023','2026'];
const partidosPARZaragoza = ['PAR','PAR','PAR','PAR','PAR','PAR','PAR','PAR','PAR','PAR','PAR','PAR'];

const ctxPARZaragoza = document.getElementById('parZaragozaChart').getContext('2d');

new Chart(ctxPARZaragoza, {
  data: {
    labels: etiquetasPARZaragoza,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPARZaragoza,
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
        data: datosPARZaragoza,
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
      id: 'etiquetaPartidoPARZaragoza',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPARZaragoza.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8b7300';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPARZaragoza[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CDS Zaragoza =================
const datosCDSZaragoza = [3.03, 9.94, 2.62];
const etiquetasCDSZaragoza = ['1983','1987','1991'];
const partidosCDSZaragoza = ['CDS','CDS','CDS'];

const ctxCDSZaragoza = document.getElementById('cdsZaragozaChart').getContext('2d');

new Chart(ctxCDSZaragoza, {
  data: {
    labels: etiquetasCDSZaragoza,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCDSZaragoza,
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
        data: datosCDSZaragoza,
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
      id: 'etiquetaPartidoCDSZaragoza',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSZaragoza.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1E90FF';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSZaragoza[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PCE Zaragoza =================
const datosPCEZaragoza = [4.27];
const etiquetasPCEZaragoza = ['1983'];
const partidosPCEZaragoza = ['PCE'];

const ctxPCEZaragoza = document.getElementById('pceZaragozaChart').getContext('2d');

new Chart(ctxPCEZaragoza, {
  data: {
    labels: etiquetasPCEZaragoza,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPCEZaragoza,
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
        data: datosPCEZaragoza,
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
      id: 'etiquetaPartidoPCEZaragoza',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPCEZaragoza.forEach((_, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#400b0d';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPCEZaragoza[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UPyD Zaragoza =================
const datosUPyDZaragoza = [2.78, 1.06];
const etiquetasUPyDZaragoza = ['2011','2015'];
const partidosUPyDZaragoza = ['UPyD','UPyD'];

const ctxUPyDZaragoza = document.getElementById('upydZaragozaChart').getContext('2d');

new Chart(ctxUPyDZaragoza, {
  data: {
    labels: etiquetasUPyDZaragoza,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosUPyDZaragoza,
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
        data: datosUPyDZaragoza,
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
      id: 'etiquetaPartidoUPyDZaragoza',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDZaragoza.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF1493';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDZaragoza[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

  // Etiquetas de años de Zaragoza
  const etiquetasZaragoza = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023','2026'];

  // Datos combinados por partido en Zaragoza
  const datosZaragoza = {
    'PP':       [19.89, 13.48, 18.93, 38.64, 39.84, 31.18, 31.53, 40.84, 27.77, 20.37, 36.24,35.33],
    'PSOE':     [48.12, 36.05, 41.64, 23.50, 30.39, 38.20, 41.21, 28.17, 20.12, 30.06, 30.43,23.86],
    'Aragón Existe': [null,null,null,null,null,null,null,null,null,null,2.96,2.55],
    'VOX':      [null,null,null,null,null,null,null,null,null,6.45,11.62,17.36],
    'PAR':      [22.18, 31.38, 25.86, 20.89, 11.93, 9.91, 10.63, 7.17, 5.25, 3.61, 1.12,0.8],
    'IU':       [1.01, 5.30, 7.62, 10.63, 3.98, 3.14, 4.18, 6.46, 4.39, 3.58, 3.37,3.18],
    'SALF': [null,null,null,null,null,null,null,null,null,null,null,2.92],
    'CHA':      [null,0.86, 2.23, 5.62, 13.09, 16.07, 8.73, 9.27, 5.11, 6.92, 5.50,10.52],
    'Podemos/IU':[null,null,null,null,null,null,null,null,21.71,8.37,4.33,1.04],
    'CS':       [null,null,null,null,null,null,null,null,10.00,17.79,1.34],
    'CDS':      [3.03, 9.94, 2.62,null,null,null,null,null,null,null,null],
    'UPyD':     [null,null,null,null,null,null,null,2.78,1.06,null,null],
    'PCE':      [4.27, null, null, null,null,null,null,null,null,null,null],
  };

  // Colores de cada partido
  const coloresPartidosZaragoza = {
    'PP': '#0000FF',
    'PSOE': '#E50000',
    'Aragón Existe': '#037252',
    'VOX': '#008000',
    'PAR': '#c99f00',
    'IU': '#B22222',
    'SALF': '#005a96',
    'CHA': '#000000',
    'Podemos/IU': '#800080',
    'CS': '#FF8C00',
    'CDS': '#00BFFF',
    'UPyD': '#FF60DA',
    'PCE':'#400b0d',
  };

  // Crear datasets para Chart.js
  const datasetsZaragoza = Object.keys(datosZaragoza).map(partido => ({
    type: 'line',
    label: partido,
    data: datosZaragoza[partido],
    borderColor: coloresPartidosZaragoza[partido],
    backgroundColor: 'transparent',
    fill: false,
    tension: 0.3,
    spanGaps: true,
    pointRadius: 4,
    pointBackgroundColor: coloresPartidosZaragoza[partido],
    datalabels: {
      display: true,
      color: coloresPartidosZaragoza[partido],
      font: { weight: 'bold', size: 12 },
      formatter: v => v != null ? v.toFixed(2) + '%' : ''
    }
  }));

  // Crear el gráfico combinado
  const ctxZaragoza = document.getElementById('zaragozaChart').getContext('2d');

  new Chart(ctxZaragoza, {
    data: {
      labels: etiquetasZaragoza,
      datasets: datasetsZaragoza
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