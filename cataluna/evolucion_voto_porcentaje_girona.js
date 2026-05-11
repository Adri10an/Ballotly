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

    const datosVoto = [37.33, 59.97, 56.67, 54.95, 49.02, 48.97, 38.99, 38.97, 45.16, 42.98, 56.05, 36.67, 32.68, 34.26];
const etiquetas = ['1980', '1984', '1988', '1992', '1995', '1999', '2003', '2006', '2010', '2012', '2015', '2017', '2021', '2024'];

const ctx = document.getElementById('ciuGironaChart').getContext('2d');

const data = {
  labels: etiquetas,
  datasets: [
    {
      type: 'bar',
      label: 'Porcentaje de voto (%)',
      data: datosVoto,
      backgroundColor: 'rgba(64, 224, 208, 0.7)',
      borderColor: '#40E0D0',
      borderWidth: 1,
      datalabels: {
        anchor: 'end',
        align: 'top',
        color: '#008B8B',
        font: { weight: 'bold' },
        formatter: (value) => value + '%'
      }
    },
    {
      type: 'line',
      label: 'Tendencia',
      data: datosVoto,
      borderColor: '#40E0D0',
      backgroundColor: 'transparent',
      fill: false,
      tension: 0.3,
      pointRadius: 4,
      pointBackgroundColor: '#40E0D0'
    }
  ]
};

const config = {
  data: data,
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
      id: 'variacionPlugin',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;

        // Nombres de partidos
        const partidos = ['CIU', 'CIU', 'CIU', 'CIU', 'CIU', 'CIU', 'CIU', 'CIU', 'CIU', 'CIU', 'JxSí', 'Junts', 'Junts', 'Junts'];

        datosVoto.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;

          ctx.save();
          ctx.fillStyle = '#888';
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

new Chart(ctx, config);

const datosPSC = [19.75, 21.61, 23.80, 22.08, 25.95, 29.47, 23.85, 22.59, 14.23, 10.05, 8.67, 8.62, 15.17, 19.24];
const etiquetasPSC = ['1980', '1984', '1988', '1992', '1995', '1999', '2003', '2006', '2010', '2012', '2015', '2017', '2021', '2024'];

const ctxPSC = document.getElementById('pscGironaChart').getContext('2d');

const dataPSC = {
  labels: etiquetasPSC,
  datasets: [
    {
      type: 'bar',
      label: 'Porcentaje de voto (%)',
      data: datosPSC,
      backgroundColor: 'rgba(255, 0, 0, 0.7)',
      borderColor: '#FF0000',
      borderWidth: 1,
      datalabels: {
        anchor: 'end',
        align: 'top',
        color: '#B22222',
        font: { weight: 'bold' },
        formatter: (value) => value + '%'
      }
    },
    {
      type: 'line',
      label: 'Tendencia',
      data: datosPSC,
      borderColor: '#FF0000',
      backgroundColor: 'transparent',
      fill: false,
      tension: 0.3,
      pointRadius: 4,
      pointBackgroundColor: '#FF0000'
    }
  ]
};

const configPSC = {
  data: dataPSC,
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
      id: 'variacionPluginPSC',
      afterDatasetsDraw(chart) {
        // No se dibujan variaciones para PSC
      }
    },
    ChartDataLabels
  ]
};

new Chart(ctxPSC, configPSC);

const datosERCGirona = [10.70, 6.18, 5.52, 11.74, 12.37, 12.92, 22.08, 19.63, 9.20, 17.74, 56.05, 21.71, 21.80, 11.80];
const etiquetasERCGirona = ['1980', '1984', '1988', '1992', '1995', '1999', '2003', '2006', '2010', '2012', '2015', '2017', '2021', '2024'];

const ctxERCGirona = document.getElementById('ercGironaChart').getContext('2d');

const dataERCGirona = {
  labels: etiquetasERCGirona,
  datasets: [
    {
      type: 'bar',
      label: 'Porcentaje de voto (%)',
      data: datosERCGirona,
      backgroundColor: 'rgba(201, 159, 0, 0.7)',
      borderColor: '#c99f00',
      borderWidth: 1,
      datalabels: {
        anchor: 'end',
        align: 'top',
        color: '#8B7500',
        font: { weight: 'bold' },
        formatter: (value) => value + '%'
      }
    },
    {
      type: 'line',
      label: 'Tendencia',
      data: datosERCGirona,
      borderColor: '#c99f00',
      backgroundColor: 'transparent',
      fill: false,
      tension: 0.3,
      pointRadius: 4,
      pointBackgroundColor: '#c99f00'
    }
  ]
};

const configERCGirona = {
  data: dataERCGirona,
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
      id: 'etiquetaPartidoERCGirona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        const partidos = ['ERC', 'ERC', 'ERC', 'ERC', 'ERC', 'ERC', 'ERC', 'ERC', 'ERC', 'ERC', 'JxSí', 'ERC', 'ERC', 'ERC'];

        datosERCGirona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;

          ctx.save();
          ctx.fillStyle = '#888';
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

new Chart(ctxERCGirona, configERCGirona);

const datosPPGirona = [15.24, 5.62, 3.75, 4.01, 7.92, 6.10, 8.14, 7.36, 8.59, 9.56, 5.87, 2.85, 1.99, 6.47];
const etiquetasPPGirona = ['1980', '1984', '1988', '1992', '1995', '1999', '2003', '2006', '2010', '2012', '2015', '2017', '2021', '2024'];

const ctxPPGirona = document.getElementById('ppGironaChart').getContext('2d');

const dataPPGirona = {
  labels: etiquetasPPGirona,
  datasets: [
    {
      type: 'bar',
      label: 'Porcentaje de voto (%)',
      data: datosPPGirona,
      backgroundColor: 'rgba(0, 0, 255, 0.7)',
      borderColor: '#0000FF',
      borderWidth: 1,
      datalabels: {
        anchor: 'end',
        align: 'top',
        color: '#00008B',
        font: { weight: 'bold' },
        formatter: (value) => value + '%'
      }
    },
    {
      type: 'line',
      label: 'Tendencia',
      data: datosPPGirona,
      borderColor: '#0000FF',
      backgroundColor: 'transparent',
      fill: false,
      tension: 0.3,
      pointRadius: 4,
      pointBackgroundColor: '#0000FF'
    }
  ]
};

const configPPGirona = {
  data: dataPPGirona,
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
      id: 'etiquetaPartidoPPGirona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        const partidos = ['CC-UCD', 'AP-PDP-UL', 'AP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP'];

        datosPPGirona.forEach((valor, i) => {
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
};

new Chart(ctxPPGirona, configPPGirona);

const datosCsGirona = [0.96, 1.69, 3.58, 12.55, 19.51, 3.25, 0.32];
const etiquetasCsGirona = ['2006', '2010', '2012', '2015', '2017', '2021', '2024'];

const ctxCsGirona = document.getElementById('csGironaChart').getContext('2d');

const dataCsGirona = {
  labels: etiquetasCsGirona,
  datasets: [
    {
      type: 'bar',
      label: 'Porcentaje de voto (%)',
      data: datosCsGirona,
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
      data: datosCsGirona,
      borderColor: '#FF7F00',
      backgroundColor: 'transparent',
      fill: false,
      tension: 0.3,
      pointRadius: 4,
      pointBackgroundColor: '#FF7F00'
    }
  ]
};

const configCsGirona = {
  data: dataCsGirona,
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
      id: 'etiquetaPartidoCsGirona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        const partidos = ['Cs', 'Cs', 'Cs', 'Cs', 'Cs', 'Cs', 'Cs'];

        datosCsGirona.forEach((valor, i) => {
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
};

new Chart(ctxCsGirona, configCsGirona);

const datosPDECat = [3.19];
const etiquetasPDECat = ['2021'];

const ctxPDECat = document.getElementById('pdecatGironaChart').getContext('2d');

const dataPDECat = {
  labels: etiquetasPDECat,
  datasets: [
    {
      type: 'bar',
      label: 'Porcentaje de voto (%)',
      data: datosPDECat,
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
      data: datosPDECat,
      borderColor: '#0183CB',
      backgroundColor: 'transparent',
      fill: false,
      tension: 0.3,
      pointRadius: 4,
      pointBackgroundColor: '#0183CB'
    }
  ]
};

const configPDECat = {
  data: dataPDECat,
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
      datalabels: { display: true },
      tooltip: { enabled: true }
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
      id: 'etiquetaPartidoPDECat',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        const partidos = ['PDECat'];

        datosPDECat.forEach((valor, i) => {
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
};

new Chart(ctxPDECat, configPDECat);

  const datosCUPGirona = [4.21, 8.58, 5.32, 9.04, 4.87];
const etiquetasCUPGirona = ['2012', '2015', '2017', '2021', '2024'];

const ctxCUPGirona = document.getElementById('cupGironaChart').getContext('2d');

const dataCUPGirona = {
  labels: etiquetasCUPGirona,
  datasets: [
    {
      type: 'bar',
      label: 'Porcentaje de voto (%)',
      data: datosCUPGirona,
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
      data: datosCUPGirona,
      borderColor: '#010101',
      backgroundColor: 'transparent',
      fill: false,
      tension: 0.3,
      pointRadius: 4,
      pointBackgroundColor: '#010101'
    }
  ]
};

const configCUPGirona = {
  data: dataCUPGirona,
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
      id: 'etiquetaPartidoCUPGirona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        const partidos = ['CUP', 'CUP', 'CUP', 'CUP', 'CUP'];

        datosCUPGirona.forEach((valor, i) => {
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
};

new Chart(ctxCUPGirona, configCUPGirona);

  const datosAliancaGirona = [9];
const etiquetasAliancaGirona = ['2024'];

const ctxAliancaGirona = document.getElementById('aliancaGironaChart').getContext('2d');

const dataAliancaGirona = {
  labels: etiquetasAliancaGirona,
  datasets: [
    {
      type: 'bar',
      label: 'Porcentaje de voto (%)',
      data: datosAliancaGirona,
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
      data: datosAliancaGirona,
      borderColor: '#014983',
      backgroundColor: 'transparent',
      fill: false,
      tension: 0.3,
      pointRadius: 4,
      pointBackgroundColor: '#014983'
    }
  ]
};

const configAliancaGirona = {
  data: dataAliancaGirona,
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
      id: 'etiquetaPartidoAliancaGirona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        const partidos = ['Aliança'];

        datosAliancaGirona.forEach((valor, i) => {
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
};

new Chart(ctxAliancaGirona, configAliancaGirona);

const datosSumarGirona = [4.77, 4.04, 4.04, 3.23];
const etiquetasSumarGirona = ['2015', '2017', '2021', '2024'];

const ctxSumarGirona = document.getElementById('sumarGironaChart').getContext('2d');

const dataSumarGirona = {
  labels: etiquetasSumarGirona,
  datasets: [
    {
      type: 'bar',
      label: 'Porcentaje de voto (%)',
      data: datosSumarGirona,
      backgroundColor: 'rgba(128, 0, 128, 0.7)',
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
      data: datosSumarGirona,
      borderColor: '#800080',
      backgroundColor: 'transparent',
      fill: false,
      tension: 0.3,
      pointRadius: 4,
      pointBackgroundColor: '#800080'
    }
  ]
};

const configSumarGirona = {
  data: dataSumarGirona,
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
      id: 'etiquetaPartidoSumarGirona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        const partidos = ['CSQEP', 'Podemos', 'Podemos', 'Sumar'];

        datosSumarGirona.forEach((valor, i) => {
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
};

new Chart(ctxSumarGirona, configSumarGirona);

  const datosVoxGirona = [6.16, 6.29];
const etiquetasVoxGirona = ['2021', '2024'];

const ctxVoxGirona = document.getElementById('voxGironaChart').getContext('2d');

const dataVoxGirona = {
  labels: etiquetasVoxGirona,
  datasets: [
    {
      type: 'bar',
      label: 'Porcentaje de voto (%)',
      data: datosVoxGirona,
      backgroundColor: 'rgba(0, 128, 0, 0.7)',
      borderColor: '#008000',
      borderWidth: 1,
      datalabels: {
        anchor: 'end',
        align: 'top',
        color: '#006400',
        font: { weight: 'bold' },
        formatter: (value) => value + '%'
      }
    },
    {
      type: 'line',
      label: 'Tendencia',
      data: datosVoxGirona,
      borderColor: '#008000',
      backgroundColor: 'transparent',
      fill: false,
      tension: 0.3,
      pointRadius: 4,
      pointBackgroundColor: '#008000'
    }
  ]
};

const configVoxGirona = {
  data: dataVoxGirona,
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
      id: 'etiquetaPartidoVoxGirona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        const partidos = ['VOX', 'VOX'];

        datosVoxGirona.forEach((valor, i) => {
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

new Chart(ctxVoxGirona, configVoxGirona);

const datosPSUC = [10.67, 2.80];
const etiquetasPSUC = ['1980','1984'];
const ctxPSUC = document.getElementById('psucGironaChart').getContext('2d');

new Chart(ctxPSUC, {
  data: {
    labels: etiquetasPSUC,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPSUC,
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
        data: datosPSUC,
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
      id: 'etiquetaPartidoPSUC',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        const partidos = ['PSUC','PSUC','PSUC'];
        datosPSUC.forEach((valor,i)=>{
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

const datosEntesa = [1.57, 3.93, 3.40, 4.04, 29.47, 5.38, 7.80, 4.82, 5.90, 4.77, 4.04, 4.04, 3.23];
const etiquetasEntesa = ['1984','1988','1992','1995','1999','2003','2006','2010','2012','2015','2017','2021','2024'];
const partidosEntesa = ['Entesa','IC','Entesa','Entesa','PSC-CC-IC-V','ICV-EA','ICV-EUiA','Entesa','Entesa','CatSíqueesPot','CatComú-Podem','ECP-PEC','Entesa'];

const ctxEntesa = document.getElementById('entesaGironaChart').getContext('2d');

new Chart(ctxEntesa, {
  data: {
    labels: etiquetasEntesa,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosEntesa,
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
        data: datosEntesa,
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
      id: 'etiquetaPartidoEntesa',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosEntesa.forEach((valor,i)=>{
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosEntesa[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

  const datosUPyD = [0.08, 0.2];
  const etiquetasUPyD = ['2010', '2012'];
  const partidosUPyD = ['UPyD', 'UPyD'];

  const ctxUPyD = document.getElementById('upydGironaChart').getContext('2d');

  new Chart(ctxUPyD, {
    data: {
      labels: etiquetasUPyD,
      datasets: [
        {
          type: 'bar',
          label: 'Porcentaje de voto (%)',
          data: datosUPyD,
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
          data: datosUPyD,
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
        id: 'etiquetaPartidoUPyD',
        afterDatasetsDraw(chart) {
          const { ctx, scales: { x, y } } = chart;
          datosUPyD.forEach((valor, i) => {
            const xPos = x.getPixelForValue(i);
            const yPos = y.getPixelForValue(0) + 30;
            ctx.save();
            ctx.fillStyle = '#555';
            ctx.font = '12px Segoe UI';
            ctx.textAlign = 'center';
            ctx.fillText(partidosUPyD[i], xPos, yPos);
            ctx.restore();
          });
        }
      },
      ChartDataLabels
    ]
  });

  const datosCDS = [3.20, 0.57];
  const etiquetasCDS = ['1980', '1984'];
  const partidosCDS = ['CDS', 'CDS'];

  const ctxCDS = document.getElementById('cdsGironaChart').getContext('2d');

  new Chart(ctxCDS, {
    data: {
      labels: etiquetasCDS,
      datasets: [
        {
          type: 'bar',
          label: 'Porcentaje de voto (%)',
          data: datosCDS,
          backgroundColor: 'rgba(0, 191, 255, 0.7)', // 00BFFF
          borderColor: '#00BFFF',
          borderWidth: 1,
          datalabels: {
            anchor: 'end',
            align: 'top',
            color: '#00BFFF',
            font: { weight: 'bold' },
            formatter: (value) => value + '%'
          }
        },
        {
          type: 'line',
          label: 'Tendencia',
          data: datosCDS,
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
        id: 'etiquetaPartidoCDS',
        afterDatasetsDraw(chart) {
          const { ctx, scales: { x, y } } = chart;
          datosCDS.forEach((valor, i) => {
            const xPos = x.getPixelForValue(i);
            const yPos = y.getPixelForValue(0) + 30;
            ctx.save();
            ctx.fillStyle = '#00BFFF';
            ctx.font = '12px Segoe UI';
            ctx.textAlign = 'center';
            ctx.fillText(partidosCDS[i], xPos, yPos);
            ctx.restore();
          });
        }
      },
      ChartDataLabels
    ]
  });

  const etiquetasGironaTotal = ['1980', '1984', '1988', '1992', '1995', '1999', '2003', '2006', '2010', '2012', '2015', '2017', '2021', '2024'];

// Datos totales corregidos con null donde no hay voto
const datosGironaTotal = {
  'CIU / JxSí / Junts': [37.33, 59.97, 56.67, 54.95, 49.02, 48.97, 38.99, 38.97, 45.16, 42.98, 56.05, 36.67, 32.68, 34.26],
  'PSC': [19.75, 21.61, 23.80, 22.08, 25.95, 29.47, 23.85, 22.59, 14.23, 10.05, 8.67, 8.62, 15.17, 19.24],
  'ERC': [10.70, 6.18, 5.52, 11.74, 12.37, 12.92, 22.08, 19.63, 9.20, 17.74, 56.05, 21.71, 21.80, 11.80],
  'PP / AP / CC-UCD / AP-PDP-UL': [15.24, 5.62, 3.75, 4.01, 7.92, 6.10, 8.14, 7.36, 8.59, 9.56, 5.87, 2.85, 1.99, 6.47],
  'Cs': [null, null, null, null, null, null, null, 0.96, 1.69, 3.58, 12.55, 19.51, 3.25, 0.32],
  'VOX': [null, null, null, null, null, null, null, null, null, null, null, null, 6.16, 6.29],
  'CUP': [null, null, null, null, null, null, null, null, null, 4.21, 8.58, 5.32, 9.04, 4.87],
  'Aliança Catalana': [null, null, null, null, null, null, null, null, null, null, null, null, null, 9],
  'CSQEP / Podemos / Sumar': [null, null, null, null, null, null, null, null, null, null,4.77, 4.04, 4.04, 3.23],
  'PSUC': [10.67, 2.80, null, null, null, null, null, null, null, null, null, null, null, null],
  'CDS': [null, null, 3.20, 0.57, null, null, null, null, null, null, null, null, null, null],
  'Entesa / ICV / CatComú / ECP': [null,1.57, 3.93, 3.40, 4.04, 29.47, 5.38, 7.80, 4.82, 5.90, 4.77, 4.04, 4.04, 3.23],
  'UPyD': [null, null, null, null, null, null, null, null, 0.08, 0.20, null, null, null, null],
  'PDECat': [null, null, null, null, null, null, null, null, null, null, null, null, 3.19, null],
};

const coloresPartidosGirona = {
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
  'CDS': '#00BFFF',
  'Entesa / ICV / CatComú / ECP': '#8B0000',
  'UPyD': '#FF60DA',
  'PDECat': '#0183CB'
};

// Convertir nulls a undefined para que Chart.js no rompa las líneas
const datasetsGironaTotal = Object.entries(datosGironaTotal).map(([partido, datos]) => ({
  label: partido,
  data: datos.map(v => v === null ? undefined : v),
  borderColor: coloresPartidosGirona[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresPartidosGirona[partido],
  datalabels: {
    display: true,
    color: coloresPartidosGirona[partido],
    font: { weight: 'bold', size: 12 },
    formatter: v => v != null ? v + '%' : ''
  }
}));

const ctxGironaTotal = document.getElementById('votosTotalesGironaChart').getContext('2d');

new Chart(ctxGironaTotal, {
  type: 'line',
  data: {
    labels: etiquetasGironaTotal,
    datasets: datasetsGironaTotal
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