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

    const datosJuntsTarragona = [23.73, 48.43, 47.92, 46.38, 43.62, 41.69, 34.10, 33.01, 39.37, 31.73, 41.6, 21.74, 19.37, 21.5];
const etiquetasJuntsTarragona = ['1980', '1984', '1988', '1992', '1995', '1999', '2003', '2006', '2010', '2012', '2015', '2017', '2021', '2024'];

const ctxJuntsTarragona = document.getElementById('juntsTarragonaChart').getContext('2d');

const dataJuntsTarragona = {
  labels: etiquetasJuntsTarragona,
  datasets: [
    {
      type: 'bar',
      label: 'Porcentaje de voto (%)',
      data: datosJuntsTarragona,
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
      data: datosJuntsTarragona,
      borderColor: '#40E0D0',
      backgroundColor: 'transparent',
      fill: false,
      tension: 0.3,
      pointRadius: 4,
      pointBackgroundColor: '#40E0D0'
    }
  ]
};

const configJuntsTarragona = {
  data: dataJuntsTarragona,
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
      id: 'variacionPluginJuntsTarragona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;

        // Nombres de partidos según año
        const partidos = ['CIU', 'CIU', 'CIU', 'CIU', 'CIU', 'CIU', 'CIU', 'CIU', 'CIU', 'CIU', 'JxSí', 'Junts', 'Junts', 'Junts'];

        datosJuntsTarragona.forEach((valor, i) => {
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

new Chart(ctxJuntsTarragona, configJuntsTarragona);

const datosPSC = [20.68, 26.83, 27.15, 26.85, 23.43, 34.44, 28.50, 26.44, 18.18, 13.57, 11.83, 11.77, 20.04, 25.6];
const etiquetasPSC = ['1980', '1984', '1988', '1992', '1995', '1999', '2003', '2006', '2010', '2012', '2015', '2017', '2021', '2024'];

const ctxPSC = document.getElementById('pscTarragonaChart').getContext('2d');

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

const datosERCTarragona = [10.50, 4.65, 5.29, 9.30, 11.16, 10.60, 19.22, 17.94, 8.51, 15.09, 41.6, 23.73, 24.49, 16.11];
const etiquetasERCTarragona = ['1980', '1984', '1988', '1992', '1995', '1999', '2003', '2006', '2010', '2012', '2015', '2017', '2021', '2024'];

const ctxERCTarragona = document.getElementById('ercTarragonaChart').getContext('2d');

const dataERCTarragona = {
  labels: etiquetasERCTarragona,
  datasets: [
    {
      type: 'bar',
      label: 'Porcentaje de voto (%)',
      data: datosERCTarragona,
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
      data: datosERCTarragona,
      borderColor: '#c99f00',
      backgroundColor: 'transparent',
      fill: false,
      tension: 0.3,
      pointRadius: 4,
      pointBackgroundColor: '#c99f00'
    }
  ]
};

const configERCTarragona = {
  data: dataERCTarragona,
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
      id: 'etiquetaPartidoERCTarragona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        const partidos = ['ERC', 'ERC', 'ERC', 'ERC', 'ERC', 'ERC', 'ERC', 'ERC', 'ERC', 'ERC', 'JxSí', 'ERC', 'ERC', 'ERC'];

        datosERCTarragona.forEach((valor, i) => {
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

new Chart(ctxERCTarragona, configERCTarragona);

const datosPPTarragona = [19.79, 10.31, 7.11, 7.78, 14.49, 10.73, 11.89, 11.20, 13.35, 14.97, 8.92, 4.57, 4.32, 11.82];
const etiquetasPPTarragona = ['1980', '1984', '1988', '1992', '1995', '1999', '2003', '2006', '2010', '2012', '2015', '2017', '2021', '2024'];

const ctxPPTarragona = document.getElementById('ppTarragonaChart').getContext('2d');

const dataPPTarragona = {
  labels: etiquetasPPTarragona,
  datasets: [
    {
      type: 'bar',
      label: 'Porcentaje de voto (%)',
      data: datosPPTarragona,
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
      data: datosPPTarragona,
      borderColor: '#0000FF',
      backgroundColor: 'transparent',
      fill: false,
      tension: 0.3,
      pointRadius: 4,
      pointBackgroundColor: '#0000FF'
    }
  ]
};

const configPPTarragona = {
  data: dataPPTarragona,
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
      id: 'etiquetaPartidoPPTarragona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        const partidos = ['CC-UCD', 'AP-PDP-UL', 'AP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP'];

        datosPPTarragona.forEach((valor, i) => {
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

new Chart(ctxPPTarragona, configPPTarragona);

const datosCsTarragona = [2.47, 2.73, 7.28, 19.41, 27.35, 5.23, 0.52];
const etiquetasCsTarragona = ['2006', '2010', '2012', '2015', '2017', '2021', '2024'];

const ctxCsTarragona = document.getElementById('csTarragonaChart').getContext('2d');

const dataCsTarragona = {
  labels: etiquetasCsTarragona,
  datasets: [
    {
      type: 'bar',
      label: 'Porcentaje de voto (%)',
      data: datosCsTarragona,
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
      data: datosCsTarragona,
      borderColor: '#FF7F00',
      backgroundColor: 'transparent',
      fill: false,
      tension: 0.3,
      pointRadius: 4,
      pointBackgroundColor: '#FF7F00'
    }
  ]
};

const configCsTarragona = {
  data: dataCsTarragona,
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
      id: 'etiquetaPartidoCsTarragona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        const partidos = ['Cs', 'Cs', 'Cs', 'Cs', 'Cs', 'Cs', 'Cs'];

        datosCsTarragona.forEach((valor, i) => {
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

new Chart(ctxCsTarragona, configCsTarragona);

const datosPDECatTarragona = [2.78];
const etiquetasPDECatTarragona = ['2021'];
const partidosPDECatTarragona = ['PDECat'];

const ctxPDECatTarragona = document.getElementById('pdecatTarragonaChart').getContext('2d');

new Chart(ctxPDECatTarragona, {
  data: {
    labels: etiquetasPDECatTarragona,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPDECatTarragona,
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
        data: datosPDECatTarragona,
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
      id: 'etiquetaPartidoPDECatTarragona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPDECatTarragona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#555';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPDECatTarragona[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosCUPTarragona = [3.58, 7.38, 4, 6.79, 3.97];
const etiquetasCUPTarragona = ['2012', '2015', '2017', '2021', '2024'];

const ctxCUPTarragona = document.getElementById('cupTarragonaChart').getContext('2d');

const dataCUPTarragona = {
  labels: etiquetasCUPTarragona,
  datasets: [
    {
      type: 'bar',
      label: 'Porcentaje de voto (%)',
      data: datosCUPTarragona,
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
      data: datosCUPTarragona,
      borderColor: '#010101',
      backgroundColor: 'transparent',
      fill: false,
      tension: 0.3,
      pointRadius: 4,
      pointBackgroundColor: '#010101'
    }
  ]
};

const configCUPTarragona = {
  data: dataCUPTarragona,
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
      id: 'etiquetaPartidoCUPTarragona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        const partidos = ['CUP', 'CUP', 'CUP', 'CUP', 'CUP'];

        datosCUPTarragona.forEach((valor, i) => {
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

new Chart(ctxCUPTarragona, configCUPTarragona);

const datosAliancaTarragona = [3.46];
const etiquetasAliancaTarragona = ['2024'];

const ctxAliancaTarragona = document.getElementById('aliancaTarragonaChart').getContext('2d');

const dataAliancaTarragona = {
  labels: etiquetasAliancaTarragona,
  datasets: [
    {
      type: 'bar',
      label: 'Porcentaje de voto (%)',
      data: datosAliancaTarragona,
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
      data: datosAliancaTarragona,
      borderColor: '#014983',
      backgroundColor: 'transparent',
      fill: false,
      tension: 0.3,
      pointRadius: 4,
      pointBackgroundColor: '#014983'
    }
  ]
};

const configAliancaTarragona = {
  data: dataAliancaTarragona,
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
      id: 'etiquetaPartidoAliancaTarragona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        const partidos = ['Aliança'];

        datosAliancaTarragona.forEach((valor, i) => {
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

new Chart(ctxAliancaTarragona, configAliancaTarragona);

const datosSumarTarragona = [6.47, 5.35, 4.91, 3.73];
const etiquetasSumarTarragona = ['2015', '2017', '2021', '2024'];

const ctxSumarTarragona = document.getElementById('sumarTarragonaChart').getContext('2d');

const dataSumarTarragona = {
  labels: etiquetasSumarTarragona,
  datasets: [
    {
      type: 'bar',
      label: 'Porcentaje de voto (%)',
      data: datosSumarTarragona,
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
      data: datosSumarTarragona,
      borderColor: '#800080',
      backgroundColor: 'transparent',
      fill: false,
      tension: 0.3,
      pointRadius: 4,
      pointBackgroundColor: '#800080'
    }
  ]
};

const configSumarTarragona = {
  data: dataSumarTarragona,
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
      id: 'etiquetaPartidoSumarTarragona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        const partidos = ['CSQEP', 'Podemos', 'Podemos', 'Sumar'];

        datosSumarTarragona.forEach((valor, i) => {
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

new Chart(ctxSumarTarragona, configSumarTarragona);

const datosVoxTarragona = [9.4, 10.07];
const etiquetasVoxTarragona = ['2021', '2024'];

const ctxVoxTarragona = document.getElementById('voxTarragonaChart').getContext('2d');

const dataVoxTarragona = {
  labels: etiquetasVoxTarragona,
  datasets: [
    {
      type: 'bar',
      label: 'Porcentaje de voto (%)',
      data: datosVoxTarragona,
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
      data: datosVoxTarragona,
      borderColor: '#008000',
      backgroundColor: 'transparent',
      fill: false,
      tension: 0.3,
      pointRadius: 4,
      pointBackgroundColor: '#008000'
    }
  ]
};

const configVoxTarragona = {
  data: dataVoxTarragona,
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
      id: 'etiquetaPartidoVoxTarragona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        const partidos = ['VOX', 'VOX'];

        datosVoxTarragona.forEach((valor, i) => {
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

new Chart(ctxVoxTarragona, configVoxTarragona);

const datosCDSTarragona = [4.07, 0.79];
const etiquetasCDSTarragona = ['1988', '1992'];

const ctxCDSTarragona = document.getElementById('cdsTarragonaChart').getContext('2d');

const dataCDSTarragona = {
  labels: etiquetasCDSTarragona,
  datasets: [
    {
      type: 'bar',
      label: 'Porcentaje de voto (%)',
      data: datosCDSTarragona,
      backgroundColor: 'rgba(0, 191, 255, 0.7)', // Azul #00BFFF con transparencia
      borderColor: '#00BFFF',
      borderWidth: 1,
      datalabels: {
        anchor: 'end',
        align: 'top',
        color: '#007ACC', // un azul más oscuro para el texto
        font: { weight: 'bold' },
        formatter: (value) => value + '%'
      }
    },
    {
      type: 'line',
      label: 'Tendencia',
      data: datosCDSTarragona,
      borderColor: '#00BFFF',
      backgroundColor: 'transparent',
      fill: false,
      tension: 0.3,
      pointRadius: 4,
      pointBackgroundColor: '#00BFFF'
    }
  ]
};

const configCDSTarragona = {
  data: dataCDSTarragona,
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
      id: 'etiquetaPartidoCDSTarragona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        const partidos = ['CDS', 'CDS'];

        datosCDSTarragona.forEach((valor, i) => {
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

new Chart(ctxCDSTarragona, configCDSTarragona);

const datosPSUCTarragona = [15.16, 5.34];
const etiquetasPSUCTarragona = ['1980', '1984'];
const ctxPSUCTarragona = document.getElementById('psucTarragonaChart').getContext('2d');

new Chart(ctxPSUCTarragona, {
  data: {
    labels: etiquetasPSUCTarragona,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPSUCTarragona,
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
        data: datosPSUCTarragona,
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
      id: 'etiquetaPartidoPSUCTarragona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        const partidos = ['PSUC','PSUC'];
        datosPSUCTarragona.forEach((valor, i) => {
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

const datosEntesaTarragona = [1.83, 5.52, 4.81, 6.51, 34.44, 5.25, 6.63, 5.08, 6.85, 6.47, 5.35, 4.91, 3.73];
const etiquetasEntesaTarragona = ['1984','1988','1992','1995','1999','2003','2006','2010','2012','2015','2017','2021','2024'];
const partidosEntesaTarragona = ['Entesa','IC','Entesa','Entesa','PSC-CC-IC-V','ICV-EA','ICV-EUiA','Entesa','Entesa','CatSíqueesPot','CatComú-Podem','ECP-PEC','Entesa'];

const ctxEntesaTarragona = document.getElementById('entesaTarragonaChart').getContext('2d');

new Chart(ctxEntesaTarragona, {
  data: {
    labels: etiquetasEntesaTarragona,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosEntesaTarragona,
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
        data: datosEntesaTarragona,
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
      id: 'etiquetaPartidoEntesaTarragona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosEntesaTarragona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosEntesaTarragona[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosUPyDTarragona = [0.14, 0.38]; 
const etiquetasUPyDTarragona = ['2010', '2012'];
const partidosUPyDTarragona = ['UPyD', 'UPyD'];

const ctxUPyDTarragona = document.getElementById('upydTarragonaChart').getContext('2d');

new Chart(ctxUPyDTarragona, {
  data: {
    labels: etiquetasUPyDTarragona,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosUPyDTarragona,
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
        data: datosUPyDTarragona,
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
      id: 'etiquetaPartidoUPyDTarragona',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDTarragona.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#555';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDTarragona[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const etiquetasTarragonaTotal = ['1980', '1984', '1988', '1992', '1995', '1999', '2003', '2006', '2010', '2012', '2015', '2017', '2021', '2024'];

const datosTarragonaTotal = {
  'CIU / JxSí / Junts': [23.73, 48.43, 47.92, 46.38, 43.62, 41.69, 34.10, 33.01, 39.37, 31.73, 41.6, 21.74, 19.37, 21.5],
  'PSC': [20.68, 26.83, 27.15, 26.85, 23.43, 34.44, 28.50, 26.44, 18.18, 13.57, 11.83, 11.77, 20.04, 25.6],
  'ERC': [10.50, 4.65, 5.29, 9.30, 11.16, 10.60, 19.22, 17.94, 8.51, 15.09, 41.6, 23.73, 24.49, 16.11],
  'PP / AP / CC-UCD / AP-PDP-UL': [19.79, 10.31, 7.11, 7.78, 14.49, 10.73, 11.89, 11.20, 13.35, 14.97, 8.92, 4.57, 4.32, 11.82],
  'Cs': [null, null, null, null, null, null, null, 2.47, 2.73, 7.28, 19.41, 27.35, 5.23, 0.52],
  'VOX': [null, null, null, null, null, null, null, null, null, null, null, null, 9.4, 10.07],
  'CUP': [null, null, null, null, null, null, null, null, null, 3.58, 7.38, 4, 6.79, 3.97],
  'Aliança Catalana': [null, null, null, null, null, null, null, null, null, null, null, null, null, 3.46],
  'CSQEP / Podemos / Sumar': [null, null, null, null, null, null, null, null, null, null, 6.47, 5.35, 4.91, 3.73],
  'PSUC': [15.16, 5.34, null, null, null, null, null, null, null, null, null, null, null, null],
  'CDS': [null,null,4.07,0.79,null, null, null, null, null, null, null, null, null, null],
  'Entesa / ICV / CatComú / ECP': [null,1.83, 5.52, 4.81, 6.51, 34.44, 5.25, 6.63, 5.08, 6.85, 6.47, 5.35, 4.91, 3.73],
  'UPyD': [null, null, null, null, null, null, null, null, 0.14, 0.38, null, null, null, null],
  'PDECat': [null, null, null, null, null, null, null, null, null, null, null, null, 2.78, null],
};

const coloresPartidosTarragona = {
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

// Convertir nulls a undefined para que Chart.js no rompa las líneas
const datasetsTarragonaTotal = Object.entries(datosTarragonaTotal).map(([partido, datos]) => ({
  label: partido,
  data: datos.map(v => v === null ? undefined : v),
  borderColor: coloresPartidosTarragona[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresPartidosTarragona[partido],
  datalabels: {
    display: true,
    color: coloresPartidosTarragona[partido],
    font: { weight: 'bold', size: 12 },
    formatter: v => v != null ? v + '%' : ''
  }
}));

const ctxTarragonaTotal = document.getElementById('votosTotalesTarragonaChart').getContext('2d');

new Chart(ctxTarragonaTotal, {
  type: 'line',
  data: {
    labels: etiquetasTarragonaTotal,
    datasets: datasetsTarragonaTotal
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