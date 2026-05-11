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

const datosPPNavarra = [14.22, 4.29, 7.46, 3.93, 7.28];
const etiquetasPPNavarra = ['1983','1987','2011','2015','2023'];
const partidosPPNavarra = ['AP','AP','PP','PP','PP'];

const ctxPPNavarra = document.getElementById('ppNavarraChart').getContext('2d');

new Chart(ctxPPNavarra, {
  data: {
    labels: etiquetasPPNavarra,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto',
        data: datosPPNavarra,
        backgroundColor: 'rgba(0,0,255,0.7)', // azul PP
        borderColor: '#0000FF',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#00008B', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' // mostrar con 2 decimales
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPPNavarra,
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
        title: { display: true, text: 'Porcentaje de voto (%)', color: '#333' }, 
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
      id: 'etiquetaPartidoPPNavarra',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPNavarra.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPNavarra[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosPSOENavarra = [
  19.02, // 1979
  35.87, // 1983
  28.07, // 1987
  33.36, // 1991
  21.28, // 1995
  20.77, // 1999
  21.67, // 2003
  22.50, // 2007
  16.24, // 2011
  13.43, // 2015
  20.63, // 2019
  20.69  // 2023
];
const etiquetasPSOENavarra = ['1979','1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023'];
const partidosPSOENavarra = etiquetasPSOENavarra.map(() => 'PSOE');

const ctxPSOENavarra = document.getElementById('psoeNavarraChart').getContext('2d');

new Chart(ctxPSOENavarra, {
  data: {
    labels: etiquetasPSOENavarra,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto',
        data: datosPSOENavarra,
        backgroundColor: 'rgba(255,0,0,0.7)', // rojo PSOE
        borderColor: '#FF0000',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#FF0000', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' // mostrar con dos decimales
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPSOENavarra,
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
        title: { display: true, text: 'Porcentaje de voto (%)', color: '#333' }, 
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
      id: 'etiquetaPartidoPSOENavarra',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSOENavarra.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSOENavarra[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosVOXNavarra = [
  1.31, // 2019
  4.30  // 2023
];
const etiquetasVOXNavarra = ['2019','2023'];
const partidosVOXNavarra = ['VOX','VOX'];

const ctxVOXNavarra = document.getElementById('voxNavarraChart').getContext('2d');

new Chart(ctxVOXNavarra, {
  data: {
    labels: etiquetasVOXNavarra,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto',
        data: datosVOXNavarra,
        backgroundColor: 'rgba(0,128,0,0.7)', // verde VOX
        borderColor: '#008000',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#006400', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' // mostrar con 2 decimales
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosVOXNavarra,
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
        title: { display: true, text: 'Porcentaje de voto (%)', color: '#333' }, 
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
      id: 'etiquetaPartidoVOXNavarra',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXNavarra.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXNavarra[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosCSNavarra = [
  2.96, // 2015
  0.39  // 2023
];
const etiquetasCSNavarra = ['2015','2023'];
const partidosCSNavarra = ['Cs','Cs'];

const ctxCSNavarra = document.getElementById('csNavarraChart').getContext('2d');

new Chart(ctxCSNavarra, {
  data: {
    labels: etiquetasCSNavarra,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto',
        data: datosCSNavarra,
        backgroundColor: 'rgba(255,140,0,0.7)', // naranja Cs
        borderColor: '#FF8C00',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#FF4500', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' // mostrar con 2 decimales
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCSNavarra,
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
        title: { display: true, text: 'Porcentaje de voto (%)', color: '#333' }, 
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
      id: 'etiquetaPartidoCSNavarra',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSNavarra.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSNavarra[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosPodemosNavarra = [
  13.71, // 2015
  4.74,  // 2019
  6.09   // 2023
];
const etiquetasPodemosNavarra = ['2015','2019','2023'];
const partidosPodemosNavarra = ['Podemos','Podemos','Podemos'];

const ctxPodemosNavarra = document.getElementById('podemosNavarraChart').getContext('2d');

new Chart(ctxPodemosNavarra, {
  data: {
    labels: etiquetasPodemosNavarra,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto',
        data: datosPodemosNavarra,
        backgroundColor: 'rgba(128,0,128,0.7)', // morado Podemos
        borderColor: '#800080',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#4B0082', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' // porcentaje con 2 decimales
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPodemosNavarra,
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
        title: { display: true, text: 'Porcentaje de voto (%)', color: '#333' }, 
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
      id: 'etiquetaPartidoPodemosNavarra',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosNavarra.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosNavarra[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosCDSNavarra = [
  7.52, // 1987
  2.08  // 1991
];
const etiquetasCDSNavarra = ['1987','1991'];
const partidosCDSNavarra = ['CDS','CDS'];

const ctxCDSNavarra = document.getElementById('cdsNavarraChart').getContext('2d');

new Chart(ctxCDSNavarra, {
  data: {
    labels: etiquetasCDSNavarra,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto',
        data: datosCDSNavarra,
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
        data: datosCDSNavarra,
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
        title: { display: true, text: 'Porcentaje de voto (%)', color: '#333' }, 
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
      id: 'etiquetaPartidoCDSNavarra',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSNavarra.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1E90FF';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSNavarra[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosIUNavarra = [
  1.36, // 1987
  4.12, // 1991
  9.53, // 1995
  7.05, // 1999
  8.99, // 2003
  4.41, // 2007
  5.71, // 2011
  3.71, // 2015
  3.01, // 2019
  6.09  // 2023
];
const etiquetasIUNavarra = ['1987','1991','1995','1999','2003','2007','2011','2015','2019','2023'];
const partidosIUNavarra = ['IU','IU','IU','IU','IU','IU','IU','IU','Podemos-IU','Podemos-IU-AV'];

const ctxIUNavarra = document.getElementById('iuNavarraChart').getContext('2d');

new Chart(ctxIUNavarra, {
  data: {
    labels: etiquetasIUNavarra,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto',
        data: datosIUNavarra,
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
        data: datosIUNavarra,
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
        title: { display: true, text: 'Porcentaje de voto (%)', color: '#333' }, 
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
      id: 'etiquetaPartidoIUNavarra',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIUNavarra.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIUNavarra[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosUPyDNavarra = [
  0.68, // 2011
  0.51  // 2015
];
const etiquetasUPyDNavarra = ['2011','2015'];
const partidosUPyDNavarra = ['UPyD','UPyD'];

const ctxUPyDNavarra = document.getElementById('upydNavarraChart').getContext('2d');

new Chart(ctxUPyDNavarra, {
  data: {
    labels: etiquetasUPyDNavarra,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto',
        data: datosUPyDNavarra,
        backgroundColor: 'rgba(255,96,218,0.7)', // magenta UPyD
        borderColor: '#ff60da',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#ff60da', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosUPyDNavarra,
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
        title: { display: true, text: 'Porcentaje de voto (%)', color: '#333' }, 
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
      id: 'etiquetaPartidoUPyDNavarra',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDNavarra.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#ff60da';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDNavarra[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosEKANavarra = [
  4.79, // 1979
  2.55  // 1983
];
const etiquetasEKANavarra = ['1979','1983'];
const partidosEKANavarra = ['EKA','EKA'];

const ctxEKANavarra = document.getElementById('ekaNavarraChart').getContext('2d');

new Chart(ctxEKANavarra, {
  data: {
    labels: etiquetasEKANavarra,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto',
        data: datosEKANavarra,
        backgroundColor: 'rgba(189,11,27,0.7)', // rojo EKA
        borderColor: '#bd0b1b',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#bd0b1b', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosEKANavarra,
        borderColor: '#bd0b1b',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#bd0b1b'
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
        title: { display: true, text: 'Porcentaje de voto (%)', color: '#333' }, 
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
      id: 'etiquetaPartidoEKANavarra',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosEKANavarra.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#bd0b1b';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosEKANavarra[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosHBNavarra = [
  11.12, // 1979
  10.62, // 1983
  13.68, // 1987
  11.35, // 1991
  9.40  // 1995
];
const etiquetasHBNavarra = ['1979','1983','1987','1991','1995'];
const partidosHBNavarra = ['HB','HB','HB','HB','HB'];

const ctxHBNavarra = document.getElementById('hbNavarraChart').getContext('2d');

new Chart(ctxHBNavarra, {
  data: {
    labels: etiquetasHBNavarra,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto',
        data: datosHBNavarra,
        backgroundColor: 'rgba(1,181,156,0.7)', // color HB
        borderColor: '#01b59c',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#01b59c', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosHBNavarra,
        borderColor: '#01b59c',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#01b59c'
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
        title: { display: true, text: 'Porcentaje de voto (%)', color: '#333' }, 
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
      id: 'etiquetaPartidoHBNavarra',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosHBNavarra.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#01b59c';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosHBNavarra[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosEHBilduNavarra = [
  15.96, // 1999
  8.02,  // 2003
  13.63, // 2011
  14.30, // 2015
  14.61, // 2019
  17.14  // 2023
];
const etiquetasEHBilduNavarra = ['1999','2003','2011','2015','2019','2023'];
const partidosEHBilduNavarra = ['EH Bildu','EH Bildu','EH Bildu','EH Bildu','EH Bildu','EH Bildu'];

const ctxEHBilduNavarra = document.getElementById('ehbilduNavarraChart').getContext('2d');

new Chart(ctxEHBilduNavarra, {
  data: {
    labels: etiquetasEHBilduNavarra,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto',
        data: datosEHBilduNavarra,
        backgroundColor: 'rgba(3,207,181,0.7)', // color EH Bildu
        borderColor: '#03cfb5',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#03cfb5', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosEHBilduNavarra,
        borderColor: '#03cfb5',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#03cfb5'
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
      y: { beginAtZero: true, title: { display: true, text: 'Porcentaje de voto', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [ ChartDataLabels ]
});

// ================= PNV Navarra =================
const datosPNVNavarra = [6.88, 0.96, 1.13, 1.01, 5.57, 7.61];
const etiquetasPNVNavarra = ['1983','1987','1991','1995','1999','2003'];
const partidosPNVNavarra = ['PNV','PNV','PNV','PNV','PNV','PNV'];

const ctxPNVNavarra = document.getElementById('pnvNavarraChart').getContext('2d');

new Chart(ctxPNVNavarra, {
  data: {
    labels: etiquetasPNVNavarra,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto PNV Navarra',
        data: datosPNVNavarra,
        backgroundColor: 'rgba(41,130,66,0.7)', // verde PNV
        borderColor: '#298242',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#298242', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPNVNavarra,
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
    plugins: {
      legend: { position: 'top', labels: { color: '#333' } },
      datalabels: { display: true }
    },
    scales: {
      y: { beginAtZero: true, title: { display: true, text: 'Porcentaje de voto', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoPNVNavarra',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPNVNavarra.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#298242';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPNVNavarra[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UPN Navarra =================
const datosUPNNavarra = [16.06, 23.5, 24.84, 34.95, 31.97, 42.37, 42.48, 42.20, 35.4, 27.44, 36.52, 28.01];
const etiquetasUPNNavarra = ['1979','1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023'];
const partidosUPNNavarra = ['UPN','UPN','UPN','UPN','UPN','UPN','UPN','UPN','UPN','UPN','UPN','UPN'];

const ctxUPNNavarra = document.getElementById('upnNavarraChart').getContext('2d');

new Chart(ctxUPNNavarra, {
  data: {
    labels: etiquetasUPNNavarra,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto UPN Navarra',
        data: datosUPNNavarra,
        backgroundColor: 'rgba(139,69,19,0.7)', // marrón UPN
        borderColor: '#8B4513',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#8B4513', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosUPNNavarra,
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
    plugins: {
      legend: { position: 'top', labels: { color: '#333' } },
      datalabels: { display: true }
    },
    scales: {
      y: { beginAtZero: true, title: { display: true, text: 'Porcentaje de voto', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoUPNNavarra',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPNNavarra.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B4513';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPNNavarra[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UCD Navarra =================
const datosUCDNavarra = [26.8];
const etiquetasUCDNavarra = ['1979'];
const partidosUCDNavarra = ['UCD'];

const ctxUCDNavarra = document.getElementById('ucdNavarraChart').getContext('2d');

new Chart(ctxUCDNavarra, {
  data: {
    labels: etiquetasUCDNavarra,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto UCD Navarra',
        data: datosUCDNavarra,
        backgroundColor: 'rgba(255,165,0,0.7)', // naranja UCD
        borderColor: '#FFA500',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#FFA500', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosUCDNavarra,
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
      y: { beginAtZero: true, title: { display: true, text: 'Porcentaje de voto', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoUCDNavarra',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUCDNavarra.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FFA500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUCDNavarra[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= EA Navarra =================
const datosEANavarra = [7.1, 5.6, 4.66, 5.57, 7.61];
const etiquetasEANavarra = ['1987','1991','1995','1999','2003'];
const partidosEANavarra = ['EA','EA','EA','EA','EA'];

const ctxEANavarra = document.getElementById('eaNavarraChart').getContext('2d');

new Chart(ctxEANavarra, {
  data: {
    labels: etiquetasEANavarra,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto EA Navarra',
        data: datosEANavarra,
        backgroundColor: 'rgba(105,173,96,0.7)', // verde EA
        borderColor: '#69AD60',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#69AD60', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosEANavarra,
        borderColor: '#69AD60',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#69AD60'
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
      y: { beginAtZero: true, title: { display: true, text: 'Porcentaje de voto', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoEANavarra',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosEANavarra.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#69AD60';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosEANavarra[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= EE Navarra =================
const datosEENavarra = [2.38, 3.44, 2.15];
const etiquetasEENavarra = ['1983','1987','1991'];
const partidosEENavarra = ['EE','EE','EE'];

const ctxEENavarra = document.getElementById('eeNavarraChart').getContext('2d');

new Chart(ctxEENavarra, {
  data: {
    labels: etiquetasEENavarra,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto EE Navarra',
        data: datosEENavarra,
        backgroundColor: 'rgba(220,20,60,0.7)', // rojo EE
        borderColor: '#DC143C',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#DC143C', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosEENavarra,
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
    plugins: {
      legend: { position: 'top', labels: { color: '#333' } },
      datalabels: { display: true }
    },
    scales: {
      y: { beginAtZero: true, title: { display: true, text: 'Porcentaje de voto', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoEENavarra',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosEENavarra.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#DC143C';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosEENavarra[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CDN Navarra (porcentajes, 1995-2011) =================
const datosCDNNavarra = [18.93, 7.03, 7.84, 4.4, 1.44];
const etiquetasCDNNavarra = ['1995','1999','2003','2007','2011'];
const partidosCDNNavarra = ['CDN','CDN','CDN','CDN','CDN'];

const ctxCDNNavarra = document.getElementById('cdnNavarraChart').getContext('2d');

new Chart(ctxCDNNavarra, {
  data: {
    labels: etiquetasCDNNavarra,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de votos',
        data: datosCDNNavarra,
        backgroundColor: 'rgba(149,96,84,0.7)', // color CDN
        borderColor: '#956054',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#956054', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' // mostrar como porcentaje
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCDNNavarra,
        borderColor: '#956054',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#956054'
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
      y: { beginAtZero: true, title: { display: true, text: 'Porcentaje de votos', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoCDNNavarra',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDNNavarra.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 10; // ajustado para porcentajes
          ctx.save();
          ctx.fillStyle = '#956054';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDNNavarra[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= GBAI Navarra (porcentajes, 2007-2023) =================
const datosGBAINavarra = [23.6, 15.83, 15.86, 17.36, 13.24]; 
const etiquetasGBAINavarra = ['2007','2011','2015','2019','2023'];
const partidosGBAINavarra = ['GBAI','GBAI','GBAI','GBAI','GBAI'];

const ctxGBAINavarra = document.getElementById('gbaiNavarraChart').getContext('2d');

new Chart(ctxGBAINavarra, {
  data: {
    labels: etiquetasGBAINavarra,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de votos',
        data: datosGBAINavarra,
        backgroundColor: 'rgba(233,153,146,0.7)', // color GBAI
        borderColor: '#e99992',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#e99992', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' // mostrar como porcentaje
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosGBAINavarra,
        borderColor: '#e99992',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#e99992'
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
      y: { beginAtZero: true, title: { display: true, text: 'Porcentaje de votos', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoGBAINavarra',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosGBAINavarra.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 10; // ajustado para porcentajes
          ctx.save();
          ctx.fillStyle = '#e99992';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosGBAINavarra[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

  const etiquetasNavarra = [
    '1979','1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023'
  ];

  const datosNavarra = {
    'UPN':       [16.06, 23.5, 24.84, 34.95, 31.97, 42.37, 42.48, 42.20, 35.4, 27.44, 36.52, 28.01],
    'PSOE':      [19.02, 35.87, 28.07, 33.36, 21.28, 20.77, 21.67, 22.50, 16.24, 13.43, 20.63, 20.69],
    'PP/AP':     [null, 14.22, 4.29, null, null, null, null, null, 7.46, 3.93, null, 7.28],
    'VOX':       [null,null,null,null,null,null,null,null,null, null, 1.31, 4.30],
    'CS':        [null,null,null,null,null,null,null,null,null, 2.96, null, 0.39],
    'Podemos':   [null,null,null,null,null,null,null,null,null, 13.71, 4.74, 6.09],
    'IU':        [null,null,1.36,4.12,9.53,7.05,8.99,4.41,null,3.71,3.01,6.09],
    'UPyD':      [null,null,null,null,null,null,null,null,0.68,0.51,null,null],
    'CDS':       [null,null,7.52,2.08,null,null,null,null,null,null,null,null],
    'EKA':       [4.79,2.55,null,null,null,null,null,null,null,null,null,null],
    'HB':        [11.12,10.62,13.68,11.35,9.40,null,null,null,null,null,null,null],
    'EH Bildu':  [null,null,null,null,null,15.96,8.02,null,13.63,14.30,14.61,17.14],
    'PNV':       [null,6.88,0.96,1.13,1.01,5.57,7.61,null,null,null,null,null],
    'EA':        [null,null,7.10,5.60,4.66,5.57,7.61,null,null,null,null,null],
    'EE':        [null,2.38,3.44,2.15,null,null,null,null,null,null,null,null],
    'CDN':       [null,null,null,null,18.93,7.03,7.84,4.40,1.44,null,null,null], // completar si hay datos
    'UCD':       [26.8,null,null,null,null,null,null,null,null,null,null,null],
    'GEROABAI':  [null,null,null,null,null,null,null,23.60,15.83,15.86,17.36,13.24],
  };

  const coloresPartidosNavarra = {
    'UPN': '#8B4513',
    'PSOE': '#FF0000',
    'PP/AP': '#0000FF',
    'VOX': '#008000',
    'CS': '#FF8C00',
    'Podemos': '#800080',
    'IU': '#B22222',
    'UPyD': '#ff60da',
    'CDS': '#00BFFF',
    'EKA': '#bd0b1b',
    'HB': '#01b59c',
    'EH Bildu': '#03cfb5',
    'PNV': '#298242',
    'EA': '#69AD60',
    'EE': '#00008B',
    'CDN': '#DAA520',
    'UCD': '#FFA500',
    'GEROABAI': '#eeb5b0'
  };

  const datasetsNavarra = Object.keys(datosNavarra).map(partido => ({
    type: 'line',
    label: partido,
    data: datosNavarra[partido],
    borderColor: coloresPartidosNavarra[partido],
    backgroundColor: 'transparent',
    fill: false,
    tension: 0.3,
    spanGaps: true,
    pointRadius: 4,
    pointBackgroundColor: coloresPartidosNavarra[partido],
    datalabels: {
      display: true,
      color: coloresPartidosNavarra[partido],
      font: { weight: 'bold', size: 12 },
      formatter: v => v != null ? v.toFixed(2) + '%' : ''
    }
  }));

  const ctxNavarra = document.getElementById('votosTotalesNavarraChart').getContext('2d');

  new Chart(ctxNavarra, {
    data: {
      labels: etiquetasNavarra,
      datasets: datasetsNavarra
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'top', labels: { color: '#333' } },
        datalabels: { display: true }
      },
      scales: {
        y: { beginAtZero: true, title: { display: true, text: 'Porcentaje de voto (%)', color: '#333' }, ticks: { color: '#333' } },
        x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
      }
    },
    plugins: [ChartDataLabels]
  });