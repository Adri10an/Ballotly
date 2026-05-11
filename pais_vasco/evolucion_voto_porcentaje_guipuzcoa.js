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
// ================= EHBILDU Gipuzkoa =================
const datosEHBilduGipuzkoa = [
  17.62,  // 1980
  18.80,  // 1984
  21.69,  // 1986
  23.78,  // 1990
  23.63,  // 1994
  25.57,  // 1998
  15.25,  // 2001
  31.76,  // 2012
  28.86,  // 2016
  35.25,  // 2020
  40.05   // 2024
];

const etiquetasEHBilduGipuzkoa = [
  '1980','1984','1986','1990','1994','1998','2001','2012','2016','2020','2024'
];

const partidosEHBilduGipuzkoa = [
  'HB','HB','HB','HB','HB','EH','EH','EHBildu','EHBildu','EHBildu','EHBildu'
];

const ctxEHBilduGipuzkoa = document.getElementById('ehbilduGipuzkoaChart').getContext('2d');

new Chart(ctxEHBilduGipuzkoa, {
  data: {
    labels: etiquetasEHBilduGipuzkoa,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosEHBilduGipuzkoa,
        backgroundColor: '#01B59C',
        borderColor: '#01B59C',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#007F6F',
          font: { weight: 'bold' },
          formatter: (v) => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosEHBilduGipuzkoa,
        borderColor: '#01B59C',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#01B59C'
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
      id: 'etiquetaEHBilduGipuzkoa',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosEHBilduGipuzkoa.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#007F6F';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosEHBilduGipuzkoa[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PNV Gipuzkoa =================
const datosPNVGipuzkoa = [
  37.36,  // 1980
  40.95,  // 1984
  16.04,  // 1986
  20.55,  // 1990
  22.79,  // 1994
  22.05,  // 1998
  44.69,  // 2001
  38.30,  // 2005
  36.95,  // 2009
  31.58,  // 2012
  34.30,  // 2016
  36.42,  // 2020
  31.39   // 2024
];

const etiquetasPNVGipuzkoa = [
  '1980','1984','1986','1990','1994',
  '1998','2001','2005','2009','2012',
  '2016','2020','2024'
];

const partidosPNVGipuzkoa = Array(etiquetasPNVGipuzkoa.length).fill('PNV');

const ctxPNVGipuzkoa = document.getElementById('pnvGipuzkoaChart').getContext('2d');

new Chart(ctxPNVGipuzkoa, {
  data: {
    labels: etiquetasPNVGipuzkoa,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPNVGipuzkoa,
        backgroundColor: '#298242',
        borderColor: '#298242',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#1E5E31',
          font: { weight: 'bold' },
          formatter: (v) => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPNVGipuzkoa,
        borderColor: '#298242',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#298242'
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
      id: 'etiquetaPNVGipuzkoa',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPNVGipuzkoa.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1E5E31';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPNVGipuzkoa[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PSOE Gipuzkoa =================
const datosPSOEGipuzkoa = [
  13.80, // 1980
  22.13, // 1984
  20.01, // 1986
  19.19, // 1990
  16.74, // 1994
  16.26, // 1998
  16.26, // 2001
  20.29, // 2005
  30.56, // 2009
  19.02, // 2012
  11.83, // 2016
  12.90, // 2020
  13.40  // 2024
];

const etiquetasPSOEGipuzkoa = [
  '1980','1984','1986','1990','1994',
  '1998','2001','2005','2009','2012',
  '2016','2020','2024'
];

const partidosPSOEGipuzkoa = Array(etiquetasPSOEGipuzkoa.length).fill('PSOE');

const ctxPSOEGipuzkoa = document.getElementById('psoeGipuzkoaChart').getContext('2d');

new Chart(ctxPSOEGipuzkoa, {
  data: {
    labels: etiquetasPSOEGipuzkoa,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPSOEGipuzkoa,
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
        data: datosPSOEGipuzkoa,
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
      id: 'etiquetaPartidoPSOEGipuzkoa',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSOEGipuzkoa.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#B22222';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSOEGipuzkoa[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PP Gipuzkoa =================
const datosPPGipuzkoa = [
  2.67,  // 1980
  6.79,  // 1984
  3.58,  // 1986
  6.47,  // 1990
  12.14, // 1994
  16.65, // 1998
  18.19, // 2001
  13.32, // 2005
  10.59, // 2009
  8.41,  // 2012
  7.24,  // 2016
  4.68,  // 2020
  6.25   // 2024
];

const etiquetasPPGipuzkoa = [
  '1980','1984','1986','1990','1994',
  '1998','2001','2005','2009','2012',
  '2016','2020','2024'
];

const partidosPPGipuzkoa = Array(etiquetasPPGipuzkoa.length).fill('PP');

const ctxPPGipuzkoa = document.getElementById('ppGipuzkoaChart').getContext('2d');

new Chart(ctxPPGipuzkoa, {
  data: {
    labels: etiquetasPPGipuzkoa,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPPGipuzkoa,
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
        data: datosPPGipuzkoa,
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
      id: 'etiquetaPartidoPPGipuzkoa',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPGipuzkoa.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPGipuzkoa[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= SUMAR Gipuzkoa =================
const datosSumarGipuzkoa = [3.07];
const etiquetasSumarGipuzkoa = ['2024'];
const partidosSumarGipuzkoa = ['Sumar'];

const ctxSumarGipuzkoa = document.getElementById('sumarGipuzkoaChart').getContext('2d');

new Chart(ctxSumarGipuzkoa, {
  data: {
    labels: etiquetasSumarGipuzkoa,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosSumarGipuzkoa,
        backgroundColor: '#FF69B4', // rosa Sumar
        borderColor: '#FF69B4',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#C71585',
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosSumarGipuzkoa,
        borderColor: '#FF69B4',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#FF69B4'
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
      id: 'etiquetaPartidoSumarGipuzkoa',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosSumarGipuzkoa.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#C71585';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosSumarGipuzkoa[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Podemos Gipuzkoa =================
const datosPodemosGipuzkoa = [14.28, 7.17, 2.16];
const etiquetasPodemosGipuzkoa = ['2016','2020','2024'];
const partidosPodemosGipuzkoa = ['Podemos','Podemos','Podemos'];

const ctxPodemosGipuzkoa = document.getElementById('podemosGipuzkoaChart').getContext('2d');

new Chart(ctxPodemosGipuzkoa, {
  data: {
    labels: etiquetasPodemosGipuzkoa,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPodemosGipuzkoa,
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
        data: datosPodemosGipuzkoa,
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
      id: 'etiquetaPartidoPodemosGipuzkoa',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosGipuzkoa.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosGipuzkoa[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= VOX Gipuzkoa =================
const datosVOXGipuzkoa = [1.34, 1.50];
const etiquetasVOXGipuzkoa = ['2020','2024'];
const partidosVOXGipuzkoa = ['VOX','VOX'];

const ctxVOXGipuzkoa = document.getElementById('voxGipuzkoaChart').getContext('2d');

new Chart(ctxVOXGipuzkoa, {
  data: {
    labels: etiquetasVOXGipuzkoa,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosVOXGipuzkoa,
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
        data: datosVOXGipuzkoa,
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
      id: 'etiquetaPartidoVOXGipuzkoa',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXGipuzkoa.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXGipuzkoa[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CS Gipuzkoa =================
const datosCSGipuzkoa = [1.68];
const etiquetasCSGipuzkoa = ['2016'];
const partidosCSGipuzkoa = ['CS'];

const ctxCSGipuzkoa = document.getElementById('csGipuzkoaChart').getContext('2d');

new Chart(ctxCSGipuzkoa, {
  data: {
    labels: etiquetasCSGipuzkoa,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCSGipuzkoa,
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
        data: datosCSGipuzkoa,
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
      id: 'etiquetaPartidoCSGipuzkoa',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSGipuzkoa.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSGipuzkoa[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= ARALAR Gipuzkoa =================
const datosAralarGipuzkoa = [3.96, 10.30];
const etiquetasAralarGipuzkoa = ['2005','2009'];
const partidosAralarGipuzkoa = ['Aralar','Aralar'];

const ctxAralarGipuzkoa = document.getElementById('aralarGipuzkoaChart').getContext('2d');

new Chart(ctxAralarGipuzkoa, {
  data: {
    labels: etiquetasAralarGipuzkoa,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosAralarGipuzkoa,
        backgroundColor: '#692D3E', // color Aralar
        borderColor: '#692D3E',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#4A1F2C',
          font: { weight: 'bold' },
          formatter: (v) => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosAralarGipuzkoa,
        borderColor: '#692D3E',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#692D3E'
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
      id: 'etiquetaPartidoAralarGipuzkoa',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosAralarGipuzkoa.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4A1F2C';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosAralarGipuzkoa[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PCTV-EHAK Gipuzkoa =================
const datosPCTVGuipuzcoa = [18.22];
const etiquetasPCTVGuipuzcoa = ['2005'];
const partidosPCTVGuipuzcoa = ['PCTV-EHAK'];

const ctxPCTVGuipuzcoa = document.getElementById('pctvGipuzkoaChart').getContext('2d');

new Chart(ctxPCTVGuipuzcoa, {
  data: {
    labels: etiquetasPCTVGuipuzcoa,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPCTVGuipuzcoa,
        backgroundColor: '#9C231B', // rojo oscuro PCTV-EHAK
        borderColor: '#9C231B',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#6E1A15',
          font: { weight: 'bold' },
          formatter: (v) => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPCTVGuipuzcoa,
        borderColor: '#9C231B',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#9C231B'
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
      id: 'etiquetaPartidoPCTVGuipuzcoa',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPCTVGuipuzcoa.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#6E1A15';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPCTVGuipuzcoa[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= EB Gipuzkoa =================
const datosEBGuipuzcoa = [0.34, 1.01, 7.23, 4.65, 5.21, 5.24, 3.7];
const etiquetasEBGuipuzcoa = ['1986','1990','1994','1998','2001','2005','2009'];
const partidosEBGuipuzcoa = ['EB','EB','EB','EB','EB','EB','EB'];

const ctxEBGuipuzcoa = document.getElementById('ebGipuzkoaChart').getContext('2d');

new Chart(ctxEBGuipuzcoa, {
  data: {
    labels: etiquetasEBGuipuzcoa,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosEBGuipuzcoa,
        backgroundColor: '#D25644', 
        borderColor: '#D25644',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#A93F32',
          font: { weight: 'bold' },
          formatter: (v) => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosEBGuipuzcoa,
        borderColor: '#D25644',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#D25644'
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
      id: 'etiquetaPartidoEBGuipuzcoa',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosEBGuipuzcoa.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#A93F32';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosEBGuipuzcoa[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UA Gipuzkoa =================
const datosUAGuipuzcoa = [0.04, 0.26, 0.13, 0.03];
const etiquetasUAGuipuzcoa = ['1990','1994','1998','2005'];
const partidosUAGuipuzcoa = ['UA','UA','UA','UA'];

const ctxUAGuipuzcoa = document.getElementById('uaGipuzkoaChart').getContext('2d');

new Chart(ctxUAGuipuzcoa, {
  data: {
    labels: etiquetasUAGuipuzcoa,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosUAGuipuzcoa,
        backgroundColor: '#AE6293', 
        borderColor: '#AE6293',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#7E456B',
          font: { weight: 'bold' },
          formatter: (v) => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosUAGuipuzcoa,
        borderColor: '#AE6293',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#AE6293'
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
      id: 'etiquetaPartidoUAGuipuzcoa',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUAGuipuzcoa.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#7E456B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUAGuipuzcoa[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= EA Gipuzkoa =================
const datosEAGuipuzcoa = [23.22, 18.15, 17.08, 14.10, 5.24];
const etiquetasEAGuipuzcoa = ['1986','1990','1994','1998','2009'];
const partidosEAGuipuzcoa = ['EA','EA','EA','EA','EA'];

const ctxEAGuipuzcoa = document.getElementById('eaGipuzkoaChart').getContext('2d');

new Chart(ctxEAGuipuzcoa, {
  data: {
    labels: etiquetasEAGuipuzcoa,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosEAGuipuzcoa,
        backgroundColor: '#298242', 
        borderColor: '#298242',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#1E5E31',
          font: { weight: 'bold' },
          formatter: (v) => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosEAGuipuzcoa,
        borderColor: '#298242',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#298242'
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
      id: 'etiquetaPartidoEAGuipuzcoa',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosEAGuipuzcoa.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1E5E31';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosEAGuipuzcoa[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= EE Gipuzkoa =================
const datosEEGuipuzcoa = [13.48, 8.93, 11.90, 8.88];
const etiquetasEEGuipuzcoa = ['1980','1984','1986','1990'];
const partidosEEGuipuzcoa = ['EE','EE','EE','EE'];

const ctxEEGuipuzcoa = document.getElementById('eeGipuzkoaChart').getContext('2d');

new Chart(ctxEEGuipuzcoa, {
  data: {
    labels: etiquetasEEGuipuzcoa,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosEEGuipuzcoa,
        backgroundColor: '#DC143C', 
        borderColor: '#DC143C',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#8B0A1A',
          font: { weight: 'bold' },
          formatter: (v) => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosEEGuipuzcoa,
        borderColor: '#DC143C',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#DC143C'
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
      id: 'etiquetaPartidoEEGuipuzcoa',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosEEGuipuzcoa.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0A1A';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosEEGuipuzcoa[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UCD Gipuzkoa =================
const datosUCDGuipuzcoa = [7.58];
const etiquetasUCDGuipuzcoa = ['1980'];
const partidosUCDGuipuzcoa = ['UCD'];

const ctxUCDGuipuzcoa = document.getElementById('ucdGipuzkoaChart').getContext('2d');

new Chart(ctxUCDGuipuzcoa, {
  data: {
    labels: etiquetasUCDGuipuzcoa,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosUCDGuipuzcoa,
        backgroundColor: '#FFA500',
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
        data: datosUCDGuipuzcoa,
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
      id: 'etiquetaPartidoUCDGuipuzcoa',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUCDGuipuzcoa.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#CC8400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUCDGuipuzcoa[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CDS Gipuzkoa =================
const datosCDSGuipuzcoa = [2.40, 0.35];
const etiquetasCDSGuipuzcoa = ['1986','1990'];
const partidosCDSGuipuzcoa = ['CDS','CDS'];

const ctxCDSGuipuzcoa = document.getElementById('cdsGipuzkoaChart').getContext('2d');

new Chart(ctxCDSGuipuzcoa, {
  data: {
    labels: etiquetasCDSGuipuzcoa,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCDSGuipuzcoa,
        backgroundColor: 'rgba(0,191,255,0.7)',
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
        data: datosCDSGuipuzcoa,
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
      id: 'etiquetaPartidoCDSGuipuzcoa',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSGuipuzcoa.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1E90FF';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSGuipuzcoa[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UPyD Guipúzcoa =================
const datosUPyDGuipuzcoa = [1.76, 1.44];
const etiquetasUPyDGuipuzcoa = ['2009','2012'];
const partidosUPyDGuipuzcoa = ['UPyD','UPyD'];

const ctxUPyDGuipuzcoa = document.getElementById('upydGipuzkoaChart').getContext('2d');

new Chart(ctxUPyDGuipuzcoa, {
  data: {
    labels: etiquetasUPyDGuipuzcoa,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosUPyDGuipuzcoa,
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
        data: datosUPyDGuipuzcoa,
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
      id: 'etiquetaPartidoUPyDGuipuzcoa',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDGuipuzcoa.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF1493';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDGuipuzcoa[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= ETIQUETAS (TODOS LOS AÑOS) =================
const etiquetasGipuzkoa = [
  '1980','1984','1986','1990','1994','1998','2001','2005',
  '2009','2012','2016','2020','2024'
];

// ================= DATOS POR PARTIDO EN GIPUZKOA =================
const datosGipuzkoa = {
  'EH Bildu / HB / EH': [17.62,18.80,21.69,23.78,23.63,25.57,15.25,null,null,31.76,28.86,35.25,40.05],
'PNV':                 [37.36,40.95,16.04,20.55,22.79,22.05,44.69,38.30,36.95,31.58,34.30,36.42,31.39],
'PSOE':                [13.80,22.13,20.01,19.19,16.74,16.26,16.26,20.29,30.56,19.02,11.83,12.90,13.40],
'PP':                  [2.67,6.79,3.58,6.47,12.14,16.65,18.19,13.32,10.59,8.41,7.24,4.68,6.25],
'VOX':                 [null,null,null,null,null,null,null,null,null,null,null,1.34,1.50],
'Podemos':             [null,null,null,null,null,null,null,null,null,null,14.28,7.17,2.16],
'Sumar':               [null,null,null,null,null,null,null,null,null,null,null,null,3.07],
'Ciudadanos (CS)':     [null,null,null,null,null,null,null,null,null,null,1.68,null,null],
'Aralar':              [null,null,null,null,null,null,null,3.96,10.30,null,null,null,null],
'PCTV-EHAK':           [null,null,null,null,null,null,null,18.22,null,null,null,null,null],
'EB':                  [null,null,0.34,1.01,7.23,4.65,5.21,5.24,3.70,null,null,null,null],
'Unidad Alavesa (UA)': [null,null,null,0.04,0.26,0.13,null,0.03,null,null,null,null,null],
'EA':                  [null,null,23.22,18.15,17.08,14.10,null,null,5.24,null,null,null,null],
'EE':                  [13.48,8.93,11.90,8.88,null,null,null,null,null,null,null,null,null],
'UCD':                 [7.58,null,null,null,null,null,null,null,null,null,null,null,null],
'CDS':                 [null,null,2.40,0.35,null,null,null,null,null,null,null,null,null],
'UPyD':                [null,null,null,null,null,null,null,null,1.76,1.44,null,null,null]
};

// ================= COLORES OFICIALES =================
const coloresPartidosGipuzkoa = {
  'EH Bildu / HB / EH': '#01B59C',
  'PNV':                 '#298242',
  'PSOE':                '#FF0000',
  'PP':                  '#0000FF',
  'VOX':                 '#008000',
  'Podemos':             '#800080',
  'Sumar':               '#FF69B4',
  'Ciudadanos (CS)':     '#FF8C00',
  'Aralar':              '#692D3E',
  'PCTV-EHAK':           '#9C231B',
  'EB':                  '#D25644',
  'Unidad Alavesa (UA)': '#AE6293',
  'EA':                  '#298242',
  'EE':                  '#DC143C',
  'UCD':                 '#FFA500',
  'CDS':                 '#00BFFF',
  'UPyD':                '#FF60DA' 
};

// ================= CREAR DATASETS =================
const datasetsGipuzkoa = Object.keys(datosGipuzkoa).map(partido => ({
  type: 'line',
  label: partido,
  data: datosGipuzkoa[partido],
  borderColor: coloresPartidosGipuzkoa[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresPartidosGipuzkoa[partido],
  datalabels: {
    display: true,
    color: coloresPartidosGipuzkoa[partido],
    font: { weight: 'bold', size: 11 },
    formatter: v => v != null ? v.toFixed(2) + '%' : ''
  }
}));

// ================= CREAR EL GRÁFICO =================
const ctxGipuzkoa = document.getElementById('gipuzkoaChart').getContext('2d');

new Chart(ctxGipuzkoa, {
  data: {
    labels: etiquetasGipuzkoa,
    datasets: datasetsGipuzkoa
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