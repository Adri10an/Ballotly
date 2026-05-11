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

    const ctxJuntsCataluña = document.getElementById('juntsCatalunyaChart').getContext('2d');

const datosJuntsCataluña = [28.02, 47.04, 46.01, 46.74, 41.35, 38.05, 31.23, 32.18, 38.47, 30.68, 39.54, 21.66, 20.04, 21.58];
const etiquetasJuntsCataluña = ['1980', '1984', '1988', '1992', '1995', '1999', '2003', '2006', '2010', '2012', '2015', '2017', '2021', '2024'];
const partidosJuntsCataluña = [
  'CIU', 'CIU', 'CIU', 'CIU', 'CIU', 'CIU', 'CIU', 'CIU',
  'CIU', 'CIU', 'JxSí', 'Junts', 'Junts', 'Junts'
];

new Chart(ctxJuntsCataluña, {
  data: {
    labels: etiquetasJuntsCataluña,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosJuntsCataluña,
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
        data: datosJuntsCataluña,
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
      id: 'etiquetaPartidoJuntsCataluña',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosJuntsCataluña.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#008B8B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosJuntsCataluña[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxPSCCataluña = document.getElementById('pscCatalunyaChart').getContext('2d');

const datosPSCCataluña = [22.58, 30.26, 29.97, 27.87, 25.13, 30.62, 31.44, 27.38, 18.32, 14.43, 12.74, 13.86, 23.04, 27.96];
const etiquetasPSCCataluña = ['1980','1984','1988','1992','1995','1999','2003','2006','2010','2012','2015','2017','2021','2024'];
const partidosPSCCataluña = Array(datosPSCCataluña.length).fill('PSC');

new Chart(ctxPSCCataluña, {
  data: {
    labels: etiquetasPSCCataluña,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto',
        data: datosPSCCataluña,
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
        data: datosPSCCataluña,
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
      id: 'etiquetaPartidoPSCCataluña',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSCCataluña.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#DC0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSCCataluña[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxERCCataluña = document.getElementById('ercCatalunyaChart').getContext('2d');

const datosERCCataluña = [8.96, 4.43, 4.17, 8.05, 9.58, 8.76, 16.59, 14.32, 7, 13.68, 39.54, 21.38, 21.3, 13.65];
const etiquetasERCCataluña = ['1980', '1984', '1988', '1992', '1995', '1999', '2003', '2006', '2010', '2012', '2015', '2017', '2021', '2024'];
const partidosERCCataluña = [
  'ERC', 'ERC', 'ERC', 'ERC', 'ERC', 'ERC', 'ERC', 'ERC',
  'ERC', 'ERC', 'JxSí', 'ERC', 'ERC', 'ERC'
];

new Chart(ctxERCCataluña, {
  data: {
    labels: etiquetasERCCataluña,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosERCCataluña,
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
        data: datosERCCataluña,
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
      id: 'etiquetaPartidoERCCataluña',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosERCCataluña.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B7500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosERCCataluña[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxPPCataluña = document.getElementById('ppCatalunyaChart').getContext('2d');

const datosPPCataluña = [10.68, 7.74, 5.35, 6.04, 13.21, 9.60, 12.00, 10.87, 12.33, 12.99, 8.5, 4.24, 3.85, 10.99];
const etiquetasPPCataluña = ['1980', '1984', '1988', '1992', '1995', '1999', '2003', '2006', '2010', '2012', '2015', '2017', '2021', '2024'];
const partidosPPCataluña = [
  'CC-UCD', 'AP-PDP-UL', 'AP', 'PP', 'PP', 'PP', 'PP', 'PP',
  'PP', 'PP', 'PP', 'PP', 'PP', 'PP'
];

new Chart(ctxPPCataluña, {
  data: {
    labels: etiquetasPPCataluña,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPPCataluña,
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
        data: datosPPCataluña,
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
      id: 'etiquetaPartidoPPCataluña',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPCataluña.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#003366';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPCataluña[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxCsCataluña = document.getElementById('csCatalunyaChart').getContext('2d');

const datosCsCataluña = [3.09, 3.4, 7.58, 17.93, 25.35, 5.57, 0.72];
const etiquetasCsCataluña = ['2006', '2010', '2012', '2015', '2017', '2021', '2024'];
const partidosCsCataluña = ['Cs', 'Cs', 'Cs', 'Cs', 'Cs', 'Cs', 'Cs'];

new Chart(ctxCsCataluña, {
  data: {
    labels: etiquetasCsCataluña,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCsCataluña,
        backgroundColor: 'rgba(255, 127, 0, 0.7)', // naranja Cs
        borderColor: '#FF7F00',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#CC6600',
          font: { weight: 'bold' },
          formatter: (v) => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCsCataluña,
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
      tooltip: { callbacks: { label: (ctx) => ctx.raw.toFixed(2) + '%' } }
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
      id: 'etiquetaPartidoCsCataluña',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCsCataluña.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;

          ctx.save();
          ctx.fillStyle = '#555';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCsCataluña[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxPDECatCataluña = document.getElementById('pdecatCatalunyaChart').getContext('2d');

const datosPDECatCataluña = [2.72];
const etiquetasPDECatCataluña = ['2021'];
const partidosPDECatCataluña = ['PDECat'];

new Chart(ctxPDECatCataluña, {
  data: {
    labels: etiquetasPDECatCataluña,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPDECatCataluña,
        backgroundColor: 'rgba(1, 131, 203, 0.7)', // azul PDECat
        borderColor: '#0183CB',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#0183CB',
          font: { weight: 'bold' },
          formatter: (v) => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPDECatCataluña,
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
    plugins: {
      legend: { position: 'top', labels: { color: '#333' } },
      datalabels: { display: true },
      tooltip: { callbacks: { label: (ctx) => ctx.raw.toFixed(2) + '%' } }
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
      id: 'etiquetaPartidoPDECatCataluña',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPDECatCataluña.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#555';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPDECatCataluña[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxCUPCataluña = document.getElementById('cupCatalunyaChart').getContext('2d');

const datosCUPCataluña = [3.48, 8.2, 4.46, 6.67, 4.08];
const etiquetasCUPCataluña = ['2012', '2015', '2017', '2021', '2024'];
const partidosCUPCataluña = ['CUP', 'CUP', 'CUP', 'CUP', 'CUP'];

new Chart(ctxCUPCataluña, {
  data: {
    labels: etiquetasCUPCataluña,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCUPCataluña,
        backgroundColor: 'rgba(1, 1, 1, 0.7)', // negro CUP
        borderColor: '#010101',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#333',
          font: { weight: 'bold' },
          formatter: (v) => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCUPCataluña,
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
      tooltip: { callbacks: { label: (ctx) => ctx.raw.toFixed(2) + '%' } }
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
      id: 'etiquetaPartidoCUPCataluña',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCUPCataluña.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;

          ctx.save();
          ctx.fillStyle = '#555';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCUPCataluña[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxAliancaCataluña = document.getElementById('aliancaCatalunyaChart').getContext('2d');

const datosAliancaCataluña = [3.77];
const etiquetasAliancaCataluña = ['2024'];
const partidosAliancaCataluña = ['Aliança'];

new Chart(ctxAliancaCataluña, {
  data: {
    labels: etiquetasAliancaCataluña,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosAliancaCataluña,
        backgroundColor: 'rgba(1, 73, 131, 0.7)', // azul oscuro Aliança
        borderColor: '#014983',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#014983',
          font: { weight: 'bold' },
          formatter: (v) => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosAliancaCataluña,
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
      tooltip: { callbacks: { label: (ctx) => ctx.raw.toFixed(2) + '%' } }
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
      id: 'etiquetaPartidoAliancaCataluña',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosAliancaCataluña.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;

          ctx.save();
          ctx.fillStyle = '#666';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosAliancaCataluña[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxCDSCataluña = document.getElementById('cdsCatalunyaChart').getContext('2d');

const datosCDSCataluña = [3.86, 0.92];
const etiquetasCDSCataluña = ['1988', '1992'];
const partidosCDSCataluña = ['CDS', 'CDS'];

new Chart(ctxCDSCataluña, {
  data: {
    labels: etiquetasCDSCataluña,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCDSCataluña,
        backgroundColor: 'rgba(0,191,255,0.7)', // azul CDS
        borderColor: '#00BFFF',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#007ACC',
          font: { weight: 'bold' },
          formatter: (v) => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCDSCataluña,
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
      datalabels: { display: true },
      tooltip: { callbacks: { label: (ctx) => ctx.raw.toFixed(2) + '%' } }
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
      id: 'etiquetaPartidoCDSCataluña',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSCataluña.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;

          ctx.save();
          ctx.fillStyle = '#007ACC';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSCataluña[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxPodemosCataluña = document.getElementById('podemosCatalunyaChart').getContext('2d');

const datosPodemosCataluña = [8.94, 7.46, 6.87, 5.83];
const etiquetasPodemosCataluña = ['2015', '2017', '2021', '2024'];
const partidosPodemosCataluña = ['CSQEP', 'Podemos', 'Podemos', 'Sumar'];

new Chart(ctxPodemosCataluña, {
  data: {
    labels: etiquetasPodemosCataluña,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPodemosCataluña,
        backgroundColor: 'rgba(128, 0, 128, 0.7)', // morado Podemos
        borderColor: '#800080',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#800080',
          font: { weight: 'bold' },
          formatter: (v) => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPodemosCataluña,
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
      tooltip: { callbacks: { label: (ctx) => ctx.raw.toFixed(2) + '%' } }
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
      id: 'etiquetaPartidoPodemosCataluña',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosCataluña.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;

          ctx.save();
          ctx.fillStyle = '#555';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosCataluña[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxVoxCataluña = document.getElementById('voxCatalunyaChart').getContext('2d');

const datosVoxCataluña = [7.69, 7.95];
const etiquetasVoxCataluña = ['2021', '2024'];
const partidosVoxCataluña = ['VOX', 'VOX'];

new Chart(ctxVoxCataluña, {
  data: {
    labels: etiquetasVoxCataluña,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosVoxCataluña,
        backgroundColor: 'rgba(0, 128, 0, 0.7)', // verde VOX
        borderColor: '#008000',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#004d00',
          font: { weight: 'bold' },
          formatter: (v) => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosVoxCataluña,
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
      datalabels: { display: true },
      tooltip: { callbacks: { label: (ctx) => ctx.raw.toFixed(2) + '%' } }
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
      id: 'etiquetaPartidoVoxCataluña',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVoxCataluña.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#004d00';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVoxCataluña[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxPSUCCataluña = document.getElementById('psucCatalunyaChart').getContext('2d');

const datosPSUCCataluña = [18.89, 5.61];
const etiquetasPSUCCataluña = ['1980', '1984'];
const partidosPSUCCataluña = ['PSUC', 'PSUC'];

new Chart(ctxPSUCCataluña, {
  data: {
    labels: etiquetasPSUCCataluña,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPSUCCataluña,
        backgroundColor: 'rgba(197, 0, 66, 0.7)', // rojo PSUC
        borderColor: '#c50042',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#a00036',
          font: { weight: 'bold' },
          formatter: (v) => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPSUCCataluña,
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
      tooltip: { callbacks: { label: (ctx) => ctx.raw.toFixed(2) + '%' } }
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
      id: 'etiquetaPartidoPSUCCataluña',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSUCCataluña.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#a00036';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSUCCataluña[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxEntesaCataluña = document.getElementById('entesaCatalunyaChart').getContext('2d');

const datosEntesaCataluña = [1.26, 7.81, 6.58, 9.81, 7.59, 7.35, 9.72, 7.39, 9.89, 8.94, 7.46, 6.87, 5.81];
const etiquetasEntesaCataluña = ['1984','1988','1992','1995','1999','2003','2006','2010','2012','2015','2017','2021','2024'];
const partidosEntesaCataluña = ['Entesa','IC','Entesa','Entesa','PSC-CC-IC-V','ICV-EA','ICV-EUiA','Entesa','Entesa','CatSíqueesPot','CatComú-Podem','ECP-PEC','Entesa'];

new Chart(ctxEntesaCataluña, {
  data: {
    labels: etiquetasEntesaCataluña,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosEntesaCataluña,
        backgroundColor: 'rgba(139,0,0,0.7)', // rojo oscuro Entesa
        borderColor: '#8B0000',
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
        data: datosEntesaCataluña,
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
      tooltip: { callbacks: { label: (ctx) => ctx.raw.toFixed(2) + '%' } }
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
      id: 'etiquetaPartidoEntesaCataluña',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosEntesaCataluña.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosEntesaCataluña[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const ctxUPyDCataluña = document.getElementById('upydCatalunyaChart').getContext('2d');

const datosUPyDCataluña = [0.17, 0.40];
const etiquetasUPyDCataluña = ['2010', '2012'];
const partidosUPyDCataluña = ['UPyD', 'UPyD'];

new Chart(ctxUPyDCataluña, {
  data: {
    labels: etiquetasUPyDCataluña,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosUPyDCataluña,
        backgroundColor: 'rgba(255, 96, 218, 0.7)', // rosa UPyD
        borderColor: '#FF60DA',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#FF60DA',
          font: { weight: 'bold' },
          formatter: (v) => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosUPyDCataluña,
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
      tooltip: { callbacks: { label: (ctx) => ctx.raw.toFixed(2) + '%' } }
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
      id: 'etiquetaPartidoUPyDCataluña',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDCataluña.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#555';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDCataluña[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const etiquetasCataluña = ['1980','1984','1988','1992','1995','1999','2003','2006','2010','2012','2015','2017','2021','2024'];

const datosCataluñaTotal = {
  'CIU / JxSí / Junts': [28.02, 47.04, 46.01, 46.74, 41.35, 38.05, 31.23, 32.18, 38.47, 30.68, 39.54, 21.66, 20.04, 21.58],
  'PSC': [22.58, 30.26, 29.97, 27.87, 25.13, 30.62, 31.44, 27.38, 18.32, 14.43, 12.74, 13.86, 23.04, 27.96],
  'ERC': [8.96, 4.43, 4.17, 8.05, 9.58, 8.76, 16.59, 14.32, 7, 13.68, 39.54, 21.38, 21.3, 13.65],
  'PP / AP / CC-UCD / AP-PDP-UL': [10.68, 7.74, 5.35, 6.04, 13.21, 9.60, 12.00, 10.87, 12.33, 12.99, 8.5, 4.24, 3.85, 10.99],
  'Cs': [null,null,null,null,null,null,null,3.09,3.4,7.58,17.93,25.35,5.57,0.72],
  'VOX': [null,null,null,null,null,null,null,null,null,null,null,null,7.69,7.95],
  'CUP': [null,null,null,null,null,null,null,null,null,null,3.48,8.2,4.46,6.67,4.08],
  'Aliança Catalana': [null,null,null,null,null,null,null,null,null,null,null,null,null,3.77],
  'CSQEP / Podemos / Sumar': [null,null,null,null,null,null,null,null,null,null,8.94,7.46,6.87,5.83],
  'PSUC': [18.89,5.61,null,null,null,null,null,null,null,null,null,null,null,null],
  'CDS': [null,null,3.86,0.92,null,null,null,null,null,null,null,null,null,null],
  'Entesa / ICV / CatComú / ECP': [null,1.26,7.81,6.58,9.81,7.59,7.35,9.72,7.39,9.89,8.94,7.46,6.87,5.83],
  'UPyD': [null,null,null,null,null,null,null,null,0.17,0.40,null,null,null,null],
  'PDECat': [null,null,null,null,null,null,null,null,null,null,null,null,2.72,null]
};

const coloresPartidosCataluña = {
  'CIU / JxSí / Junts': '#40E0D0',
  'PSC': '#DC0000',
  'ERC': '#c99f00',
  'PP / AP / CC-UCD / AP-PDP-UL': '#0066cc',
  'Cs': '#FF7F00',
  'VOX': '#008000',
  'CUP': '#010101',
  'Aliança Catalana': '#014983',
  'CSQEP / Podemos / Sumar': '#800080',
  'PSUC': '#c50042',
  'Entesa / ICV / CatComú / ECP': '#8B0000',
  'UPyD': '#FF60DA',
  'PDECat': '#0183CB',
  'CDS': '#00BFFF',
};

// Convertir null a undefined para Chart.js
const datasetsCataluñaTotal = Object.entries(datosCataluñaTotal).map(([partido, datos]) => ({
  label: partido,
  data: datos.map(v => v === null ? undefined : v),
  borderColor: coloresPartidosCataluña[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresPartidosCataluña[partido],
  datalabels: {
    display: true,
    color: coloresPartidosCataluña[partido],
    font: { weight: 'bold', size: 12 },
    formatter: v => v != null ? v + '%' : ''
  }
}));

const ctxCataluñaTotal = document.getElementById('votosTotalesCatalunyaChart').getContext('2d');

new Chart(ctxCataluñaTotal, {
  type: 'line',
  data: {
    labels: etiquetasCataluña,
    datasets: datasetsCataluñaTotal
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