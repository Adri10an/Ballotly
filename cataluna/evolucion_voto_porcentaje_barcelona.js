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

    const ctxJuntsBarcelona = document.getElementById('juntsBarcelonaChart').getContext('2d');

const datosJuntsBarcelona = [27.43, 44.55, 43.86, 45.10, 39.44, 35.47, 29.04, 30.51, 36.85, 28.05, 36.03, 19.0, 17.9, 19.4];
const etiquetasJuntsBarcelona = ['1980', '1984', '1988', '1992', '1995', '1999', '2003', '2006', '2010', '2012', '2015', '2017', '2021', '2024'];

new Chart(ctxJuntsBarcelona, {
  data: {
    labels: etiquetasJuntsBarcelona,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosJuntsBarcelona,
        backgroundColor: 'rgba(64,224,208,0.7)', // turquesa Junts
        borderColor: '#40E0D0',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#008B8B',
          font: { weight: 'bold' },
          formatter: (v) => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosJuntsBarcelona,
        borderColor: '#40E0D0',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#40E0D0'
      }
    ]
  },
  options: {
    responsive: true,
    animation: { duration: 1500, easing: 'easeOutBounce' },
    plugins: {
      legend: { position: 'top', labels: { color: '#333' } },
      datalabels: { display: true },
      tooltip: {
        callbacks: {
          label: (ctx) => ctx.raw.toFixed(2) + '%'
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: 'Porcentaje (%)', color: '#333' },
        ticks: { color: '#333', callback: (v) => v + '%' }
      },
      x: {
        title: { display: true, text: 'Año', color: '#333' },
        ticks: { color: '#333' }
      }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoJuntsBarcelona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        const partidos = [
          'CIU', 'CIU', 'CIU', 'CIU', 'CIU', 'CIU', 'CIU', 'CIU',
          'CIU', 'CIU', 'JxSí', 'Junts', 'Junts', 'Junts'
        ];
        datosJuntsBarcelona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#008B8B';
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

const ctxPSCBarcelona = document.getElementById('pscBarcelonaChart').getContext('2d');

const datosPSCBarcelona = [23.33, 32.42, 31.57, 29.23, 25.68, 40.37, 33.47, 28.49, 19.12, 15.4, 13.69, 15.15, 25.05, 29.92];
const etiquetasPSCBarcelona = ['1980','1984','1988','1992','1995','1999','2003','2006','2010','2012','2015','2017','2021','2024'];
const partidosPSCBarcelona = Array(datosPSCBarcelona.length).fill('PSC');

new Chart(ctxPSCBarcelona, {
  data: {
    labels: etiquetasPSCBarcelona,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto',
        data: datosPSCBarcelona,
        backgroundColor: 'rgba(220,0,0,0.7)', // rojo PSC
        borderColor: '#DC0000',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#DC0000', 
          font: { weight: 'bold' },
          formatter: (v) => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPSCBarcelona,
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
    animation: { duration: 1200, easing: 'easeOutBounce' },
    plugins: { 
      legend: { position: 'top', labels: { color: '#333' } }, 
      datalabels: { display: true },
      tooltip: {
        callbacks: {
          label: (ctx) => ctx.raw.toFixed(2) + '%'
        }
      }
    },
    scales: {
      y: { 
        beginAtZero: true, 
        title: { display: true, text: 'Porcentaje de voto', color: '#333' }, 
        ticks: { color: '#333', callback: (v) => v + '%' }
      },
      x: { 
        title: { display: true, text: 'Año', color: '#333' }, 
        ticks: { color: '#333' }
      }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoPSCBarcelona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSCBarcelona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#DC0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSCBarcelona[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxERCBarcelona = document.getElementById('ercBarcelonaChart').getContext('2d');

const datosERCBarcelona = [8.36, 4.11, 3.73, 7.27, 8.78, 7.80, 15.30, 12.88, 6.36, 12.71, 36.03, 20.63, 20.42, 13.39];
const etiquetasERCBarcelona = ['1980', '1984', '1988', '1992', '1995', '1999', '2003', '2006', '2010', '2012', '2015', '2017', '2021', '2024'];

new Chart(ctxERCBarcelona, {
  data: {
    labels: etiquetasERCBarcelona,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosERCBarcelona,
        backgroundColor: 'rgba(201, 159, 0, 0.7)', // amarillo ERC
        borderColor: '#c99f00',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#8B7500',
          font: { weight: 'bold' },
          formatter: (v) => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosERCBarcelona,
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
      datalabels: { display: true },
      tooltip: {
        callbacks: { label: (ctx) => ctx.raw.toFixed(2) + '%' }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: 'Porcentaje (%)', color: '#333' },
        ticks: { color: '#333', callback: (v) => v + '%' }
      },
      x: {
        title: { display: true, text: 'Año', color: '#333' },
        ticks: { color: '#333' }
      }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoERCBarcelona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        const partidos = [
          'ERC', 'ERC', 'ERC', 'ERC', 'ERC', 'ERC', 'ERC', 'ERC',
          'ERC', 'ERC', 'JxSí', 'ERC', 'ERC', 'ERC'
        ];
        datosERCBarcelona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B7500';
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

const ctxPPBarcelona = document.getElementById('ppBarcelonaChart').getContext('2d');

const datosPPBarcelona = [8.23, 7.60, 5.26, 6.00, 13.75, 10.00, 12.67, 11.39, 12.83, 13.30, 8.86, 4.35, 4.05, 11.56];
const etiquetasPPBarcelona = ['1980', '1984', '1988', '1992', '1995', '1999', '2003', '2006', '2010', '2012', '2015', '2017', '2021', '2024'];

new Chart(ctxPPBarcelona, {
  data: {
    labels: etiquetasPPBarcelona,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPPBarcelona,
        backgroundColor: 'rgba(0, 102, 204, 0.7)', // azul PP
        borderColor: '#0066cc',
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
        data: datosPPBarcelona,
        borderColor: '#0066cc',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#0066cc'
      }
    ]
  },
  options: {
    responsive: true,
    animation: { duration: 1500, easing: 'easeOutBounce' },
    plugins: {
      legend: { position: 'top', labels: { color: '#333' } },
      datalabels: { display: true },
      tooltip: {
        callbacks: { label: (ctx) => ctx.raw.toFixed(2) + '%' }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: 'Porcentaje (%)', color: '#333' },
        ticks: { color: '#333', callback: (v) => v + '%' }
      },
      x: {
        title: { display: true, text: 'Año', color: '#333' },
        ticks: { color: '#333' }
      }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoPPBarcelona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        const partidos = [
          'CC-UCD', 'AP-PDP-UL', 'AP', 'PP', 'PP', 'PP', 'PP', 'PP',
          'PP', 'PP', 'PP', 'PP', 'PP', 'PP'
        ];
        datosPPBarcelona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#003366';
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

const ctxCsBarcelona = document.getElementById('csBarcelonaChart').getContext('2d');

const datosCsBarcelona = [3.60, 3.85, 8.45, 18.87, 26.43, 6.1, 0.83];
const etiquetasCsBarcelona = ['2006', '2010', '2012', '2015', '2017', '2021', '2024'];

new Chart(ctxCsBarcelona, {
  data: {
    labels: etiquetasCsBarcelona,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCsBarcelona,
        backgroundColor: 'rgba(255, 127, 0, 0.7)',
        borderColor: '#FF7F00',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#CC6600',
          font: { weight: 'bold' },
          formatter: (value) => value + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCsBarcelona,
        borderColor: '#FF7F00',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#FF7F00'
      }
    ]
  },
  options: {
    responsive: true,
    animation: { duration: 1500, easing: 'easeOutBounce' },
    plugins: {
      legend: { position: 'top', labels: { color: '#333' } },
      datalabels: { display: true },
      tooltip: { callbacks: { label: (ctx) => ctx.raw + '%' } }
    },
    scales: {
      y: { beginAtZero: true, title: { display: true, text: 'Porcentaje (%)', color: '#333' }, ticks: { color: '#333', callback: (v) => v + '%' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoCsBarcelona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        const partidos = ['Cs', 'Cs', 'Cs', 'Cs', 'Cs', 'Cs', 'Cs'];

        datosCsBarcelona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;

          ctx.save();
          ctx.fillStyle = '#555';
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

const datosPDECatBarcelona = [2.51];
const etiquetasPDECatBarcelona = ['2021'];
const partidosPDECatBarcelona = ['PDECat'];

const ctxPDECatBarcelona = document.getElementById('pdecatBarcelonaChart').getContext('2d');

new Chart(ctxPDECatBarcelona, {
  data: {
    labels: etiquetasPDECatBarcelona,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPDECatBarcelona,
        backgroundColor: 'rgba(1, 131, 203, 0.7)',
        borderColor: '#0183CB',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#0183CB',
          font: { weight: 'bold' },
          formatter: (value) => value + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPDECatBarcelona,
        borderColor: '#0183CB',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#0183CB'
      }
    ]
  },
  options: {
    responsive: true,
    animation: {
      duration: 1500,
      easing: 'easeOutBounce',
    },
    plugins: {
      legend: { position: 'top', labels: { color: '#333' } },
      datalabels: { display: true },
      tooltip: { enabled: true }
    },
    scales: {
      y: { beginAtZero: true, title: { display: true, text: 'Porcentaje (%)', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoPDECatBarcelona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPDECatBarcelona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#555';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPDECatBarcelona[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxCUPBarcelona = document.getElementById('cupBarcelonaChart').getContext('2d');

const datosCUPBarcelona = [3.4, 8.27, 4.37, 6.3, 4];
const etiquetasCUPBarcelona = ['2012', '2015', '2017', '2021', '2024'];

new Chart(ctxCUPBarcelona, {
  data: {
    labels: etiquetasCUPBarcelona,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCUPBarcelona,
        backgroundColor: 'rgba(1, 1, 1, 0.7)',
        borderColor: '#010101',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#333',
          font: { weight: 'bold' },
          formatter: (value) => value + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCUPBarcelona,
        borderColor: '#010101',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#010101'
      }
    ]
  },
  options: {
    responsive: true,
    animation: { duration: 1500, easing: 'easeOutBounce' },
    plugins: {
      legend: { position: 'top', labels: { color: '#333' } },
      datalabels: { display: true },
      tooltip: {
        callbacks: {
          label: (ctx) => ctx.raw + '%'
        }
      }
    },
    scales: {
      y: { beginAtZero: true, title: { display: true, text: 'Porcentaje (%)', color: '#333' }, ticks: { color: '#333', callback: (v) => v + '%' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoCUPBarcelona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        const partidos = ['CUP', 'CUP', 'CUP', 'CUP', 'CUP'];

        datosCUPBarcelona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;

          ctx.save();
          ctx.fillStyle = '#555';
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

const ctxAliancaBarcelona = document.getElementById('aliancaBarcelonaChart').getContext('2d');

const datosAliancaBarcelona = [2.87];
const etiquetasAliancaBarcelona = ['2024'];

new Chart(ctxAliancaBarcelona, {
  data: {
    labels: etiquetasAliancaBarcelona,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosAliancaBarcelona,
        backgroundColor: 'rgba(1, 73, 131, 0.7)',
        borderColor: '#014983',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#014983',
          font: { weight: 'bold' },
          formatter: (value) => value + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosAliancaBarcelona,
        borderColor: '#014983',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#014983'
      }
    ]
  },
  options: {
    responsive: true,
    animation: { duration: 1500, easing: 'easeOutBounce' },
    plugins: {
      legend: { position: 'top', labels: { color: '#333' } },
      datalabels: { display: true },
      tooltip: { callbacks: { label: (ctx) => ctx.raw + '%' } }
    },
    scales: {
      y: { beginAtZero: true, title: { display: true, text: 'Porcentaje (%)', color: '#333' }, ticks: { color: '#333', callback: (v) => v + '%' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoAliancaBarcelona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        const partidos = ['Aliança'];

        datosAliancaBarcelona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;

          ctx.save();
          ctx.fillStyle = '#666';
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

const ctxPodemosBarcelona = document.getElementById('podemosBarcelonaChart').getContext('2d');

const datosPodemosBarcelona = [10.14, 8.42, 7.76, 6.70];
const etiquetasPodemosBarcelona = ['2015', '2017', '2021', '2024'];

new Chart(ctxPodemosBarcelona, {
  data: {
    labels: etiquetasPodemosBarcelona,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPodemosBarcelona,
        backgroundColor: 'rgba(128, 0, 128, 0.7)', // morado Podemos
        borderColor: '#800080',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#800080',
          font: { weight: 'bold' },
          formatter: (value) => value + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPodemosBarcelona,
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
      datalabels: { display: true },
      tooltip: {
        callbacks: {
          label: (ctx) => ctx.raw + '%'
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: 'Porcentaje (%)', color: '#333' },
        ticks: { color: '#333', callback: (v) => v + '%' }
      },
      x: {
        title: { display: true, text: 'Año', color: '#333' },
        ticks: { color: '#333' }
      }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoPodemosBarcelona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        const partidos = ['CSQEP', 'Podemos', 'Podemos', 'Sumar'];

        datosPodemosBarcelona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;

          ctx.save();
          ctx.fillStyle = '#555';
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

const ctxVoxBarcelona = document.getElementById('voxBarcelonaChart').getContext('2d');

const datosVoxBarcelona = [7.83, 7.99];
const etiquetasVoxBarcelona = ['2021', '2024'];

new Chart(ctxVoxBarcelona, {
  data: {
    labels: etiquetasVoxBarcelona,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosVoxBarcelona,
        backgroundColor: 'rgba(0, 128, 0, 0.7)', // verde VOX
        borderColor: '#008000',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#004d00',
          font: { weight: 'bold' },
          formatter: (value) => value + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosVoxBarcelona,
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
    animation: {
      duration: 1500,
      easing: 'easeOutBounce'
    },
    plugins: {
      legend: {
        position: 'top',
        labels: { color: '#333' }
      },
      datalabels: {
        display: true
      },
      tooltip: {
        callbacks: {
          label: (ctx) => ctx.raw + '%'
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Porcentaje (%)',
          color: '#333'
        },
        ticks: {
          color: '#333',
          callback: (v) => v + '%'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Año',
          color: '#333'
        },
        ticks: { color: '#333' }
      }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoVoxBarcelona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        const partidos = ['VOX', 'VOX'];

        datosVoxBarcelona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#004d00';
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

const ctxPSUCBarcelona = document.getElementById('psucBarcelonaChart').getContext('2d');

const datosPSUCBarcelona = [20.95, 6.14];
const etiquetasPSUCBarcelona = ['1980', '1984'];

new Chart(ctxPSUCBarcelona, {
  data: {
    labels: etiquetasPSUCBarcelona,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPSUCBarcelona,
        backgroundColor: 'rgba(197, 0, 66, 0.7)',
        borderColor: '#c50042',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#a00036',
          font: { weight: 'bold' },
          formatter: (value) => value + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPSUCBarcelona,
        borderColor: '#c50042',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#c50042'
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'top', labels: { color: '#333' } },
      datalabels: { display: true },
      tooltip: { enabled: true }
    },
    scales: {
      y: { beginAtZero: true, title: { display: true, text: 'Porcentaje (%)', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoPSUCBarcelona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        const partidos = ['PSUC','PSUC'];
        datosPSUCBarcelona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#a00036';
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

const datosEntesaBarcelona = [1.12, 8.87, 7.51, 11.34, 3.34, 8.10, 10.60, 8.28, 11.14, 10.14, 8.42, 7.76, 6.7];
const etiquetasEntesaBarcelona = ['1984','1988','1992','1995','1999','2003','2006','2010','2012','2015','2017','2021','2024'];
const partidosEntesaBarcelona = ['Entesa','IC','Entesa','Entesa','PSC-CC-IC-V','ICV-EA','ICV-EUiA','Entesa','Entesa','CatSíqueesPot','CatComú-Podem','ECP-PEC','Entesa'];

const ctxEntesaBarcelona = document.getElementById('entesaBarcelonaChart').getContext('2d');

new Chart(ctxEntesaBarcelona, {
  data: {
    labels: etiquetasEntesaBarcelona,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosEntesaBarcelona,
        backgroundColor: 'rgba(139,0,0,0.7)',
        borderColor: '#8B0000',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#4B0000',
          font: { weight: 'bold' },
          formatter: (value) => value + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosEntesaBarcelona,
        borderColor: '#8B0000',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#8B0000'
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'top', labels: { color: '#333' } },
      datalabels: { display: true },
      tooltip: { enabled: true }
    },
    scales: {
      y: { beginAtZero: true, title: { display: true, text: 'Porcentaje (%)', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoEntesaBarcelona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosEntesaBarcelona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosEntesaBarcelona[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosUPyDBarcelona = [0.19, 0.44]; 
const etiquetasUPyDBarcelona = ['2010', '2012'];
const partidosUPyDBarcelona = ['UPyD', 'UPyD'];

const ctxUPyDBarcelona = document.getElementById('upydBarcelonaChart').getContext('2d');

new Chart(ctxUPyDBarcelona, {
  data: {
    labels: etiquetasUPyDBarcelona,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosUPyDBarcelona,
        backgroundColor: 'rgba(255, 96, 218, 0.7)',
        borderColor: '#FF60DA',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#FF60DA',
          font: { weight: 'bold' },
          formatter: (value) => value + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosUPyDBarcelona,
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
    plugins: {
      legend: { position: 'top', labels: { color: '#333' } },
      datalabels: { display: true },
      tooltip: { enabled: true }
    },
    scales: {
      y: { beginAtZero: true, title: { display: true, text: 'Porcentaje (%)', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoUPyDBarcelona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDBarcelona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#555';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDBarcelona[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosCDSBarcelona = [3.87, 1.00];
const etiquetasCDSBarcelona = ['1988', '1992'];

const ctxCDSBarcelona = document.getElementById('cdsBarcelonaChart').getContext('2d');

const dataCDSBarcelona = {
  labels: etiquetasCDSBarcelona,
  datasets: [
    {
      type: 'bar',
      label: 'Porcentaje de voto (%)',
      data: datosCDSBarcelona,
      backgroundColor: 'rgba(0, 191, 255, 0.7)', // Azul #00BFFF con transparencia
      borderColor: '#00BFFF',
      borderWidth: 1,
      datalabels: {
        anchor: 'end',
        align: 'top',
        color: '#007ACC',
        font: { weight: 'bold' },
        formatter: (value) => value + '%'
      }
    },
    {
      type: 'line',
      label: 'Tendencia',
      data: datosCDSBarcelona,
      borderColor: '#00BFFF',
      backgroundColor: 'transparent',
      fill: false,
      tension: 0.3,
      pointRadius: 4,
      pointBackgroundColor: '#00BFFF'
    }
  ]
};

const configCDSBarcelona = {
  data: dataCDSBarcelona,
  options: {
    responsive: true,
    animation: {
      duration: 1500,
      easing: 'easeOutBounce',
    },
    plugins: {
      legend: {
        position: 'top',
        labels: { color: '#333' }
      },
      datalabels: {
        display: true
      },
      tooltip: {
        enabled: true
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Porcentaje (%)',
          color: '#333'
        },
        ticks: { color: '#333' }
      },
      x: {
        title: {
          display: true,
          text: 'Año',
          color: '#333'
        },
        ticks: { color: '#333' }
      }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoCDSBarcelona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        const partidos = ['CDS', 'CDS'];

        datosCDSBarcelona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;

          ctx.save();
          ctx.fillStyle = '#444';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidos[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
};

new Chart(ctxCDSBarcelona, configCDSBarcelona);

const etiquetasBarcelonaTotal = ['1980','1984','1988','1992','1995','1999','2003','2006','2010','2012','2015','2017','2021','2024'];

const datosBarcelonaTotal = {
  'CIU / JxSí / Junts': [27.43, 44.55, 43.86, 45.10, 39.44, 35.47, 29.04, 30.51, 36.85, 28.05, 36.03, 19.0, 17.9, 19.4],
  'PSC': [23.33, 32.42, 31.57, 29.23, 25.68, 40.37, 33.47, 28.49, 19.12, 15.4, 13.69, 15.15, 25.05, 29.92],
  'ERC': [8.36, 4.11, 3.73, 7.27, 8.78, 7.80, 15.30, 12.88, 6.36, 12.71, 36.03, 20.63, 20.42, 13.39],
  'PP / AP / CC-UCD / AP-PDP-UL': [8.23, 7.60, 5.26, 6.00, 13.75, 10.00, 12.67, 11.39, 12.83, 13.30, 8.86, 4.35, 4.05, 11.56],
  'Cs': [null,null,null,null,null,null,null,3.60,3.85,8.45,18.87,26.43,6.1,0.83],
  'VOX': [null,null,null,null,null,null,null,null,null,null,null,null,7.83,7.99],
  'CUP': [null,null,null,null,null,null,null,null,null,3.4,8.27,4.37,6.3,4],
  'Aliança Catalana': [null,null,null,null,null,null,null,null,null,null,null,null,null,2.87],
  'CSQEP / Podemos / Sumar': [null,null,null,null,null,null,null,null,null,null,10.14,8.42,7.76,6.7],
  'PSUC': [20.95, 6.14, null,null,null,null,null,null,null,null,null,null,null,null],
  'CDS': [null,null,3.87,1,null,null,null,null,null,null,null,null,null,null],
  'Entesa / ICV / CatComú / ECP': [null,1.12,8.87,7.51,11.34,3.34,8.10,10.60,8.28,11.14,10.14,8.42,7.76,6.7],
  'UPyD': [null,null,null,null,null,null,null,null,0.19,0.44,null,null,null,null],
  'PDECat': [null,null,null,null,null,null,null,null,null,null,null,null,2.51,null]
};

const coloresPartidosBarcelona = {
  'CIU / JxSí / Junts': '#40E0D0',
  'PSC': '#FF0000',
  'ERC': '#c99f00',
  'PP / AP / CC-UCD / AP-PDP-UL': '#0000FF',
  'Cs': '#FF7F00',
  'VOX': '#008000',
  'CUP': '#010101',
  'Aliança Catalana': '#014983',
  'CSQEP / Podemos / Sumar': '#800080',
  'PSUC': '#c50042',
  'Entesa / ICV / CatComú / ECP': '#8B0000',
  'UPyD': '#FF60DA',
  'PDECat': '#0183CB',
  'CDS': '#00BFFF'
};

// Convertir null a undefined para Chart.js
const datasetsBarcelonaTotal = Object.entries(datosBarcelonaTotal).map(([partido, datos]) => ({
  label: partido,
  data: datos.map(v => v === null ? undefined : v),
  borderColor: coloresPartidosBarcelona[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresPartidosBarcelona[partido],
  datalabels: {
    display: true,
    color: coloresPartidosBarcelona[partido],
    font: { weight: 'bold', size: 12 },
    formatter: v => v != null ? v + '%' : ''
  }
}));

const ctxBarcelonaTotal = document.getElementById('votosTotalesBarcelonaChart').getContext('2d');

new Chart(ctxBarcelonaTotal, {
  type: 'line',
  data: {
    labels: etiquetasBarcelonaTotal,
    datasets: datasetsBarcelonaTotal
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