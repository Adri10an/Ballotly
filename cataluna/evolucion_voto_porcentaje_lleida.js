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

    const datosVoto = [28.4, 58.06, 54.22, 54.29, 50.24, 48.6, 41.86, 40.93, 48.65, 43.94, 55.64, 32.48, 28.04, 30.37];
    const etiquetas = ['1980', '1984', '1988', '1992', '1995', '1999', '2003', '2006', '2010', '2012', '2015', '2017', '2021', '2024'];

    const ctx = document.getElementById('ciuJuntsChart').getContext('2d');

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

            // Dibujar franja de nombres de partido debajo
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

    const datosPSC = [19.38, 20.05, 23.23, 22.11, 19.69, 29.82, 22.67, 22.51, 15.35, 10.66, 8.49, 9.09, 15.19, 20.55];
    const etiquetasPSC = ['1980', '1984', '1988', '1992', '1995', '1999', '2003', '2006', '2010', '2012', '2015', '2017', '2021', '2024'];

    const ctxPSC = document.getElementById('pscChart').getContext('2d');

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
            // No se dibujan variaciones
          }
        },
        ChartDataLabels
      ]
    };

    new Chart(ctxPSC, configPSC);

    const datosERC = [12.3, 5.74, 5.94, 9.91, 12.96, 11.73, 20.12, 18.13, 9.48, 17.77, 55.64, 26.87, 26.91, 16.35];
  const etiquetasERC = ['1980', '1984', '1988', '1992', '1995', '1999', '2003', '2006', '2010', '2012', '2015', '2017', '2021', '2024'];

  const ctxERC = document.getElementById('ercChart').getContext('2d');

  const dataERC = {
    labels: etiquetasERC,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosERC,
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
        data: datosERC,
        borderColor: '#c99f00',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#c99f00'
      }
    ]
  };

  const configERC = {
    data: dataERC,
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
        id: 'etiquetaPartidoERC',
        afterDatasetsDraw(chart) {
          const { ctx, scales: { x, y } } = chart;
          const partidos = ['ERC', 'ERC', 'ERC', 'ERC', 'ERC', 'ERC', 'ERC', 'ERC', 'ERC', 'ERC', 'JxSí', 'ERC', 'ERC', 'ERC'];

          datosERC.forEach((valor, i) => {
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

  new Chart(ctxERC, configERC);

  const datosPP = [23.52, 8.89, 6.22, 6.96, 12.34, 8.06, 9.76, 9.32, 10.6, 11.52, 7.35, 4.55, 3.59, 9.17];
  const etiquetasPP = ['1980', '1984', '1988', '1992', '1995', '1999', '2003', '2006', '2010', '2012', '2015', '2017', '2021', '2024'];

  const ctxPP = document.getElementById('ppChart').getContext('2d');

  const dataPP = {
    labels: etiquetasPP,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPP,
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
        data: datosPP,
        borderColor: '#0000FF',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#0000FF'
      }
    ]
  };

  const configPP = {
    data: dataPP,
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
        id: 'etiquetaPartidoPP',
        afterDatasetsDraw(chart) {
          const { ctx, scales: { x, y } } = chart;
          const partidos = ['CC-UCD', 'AP-PDP-UL', 'AP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP'];

          datosPP.forEach((valor, i) => {
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

  new Chart(ctxPP, configPP);

  const datosCs = [0.99, 1.54, 3.40, 11.67, 17.07, 3.25, 0.32];
  const etiquetasCs = ['2006', '2010', '2012', '2015', '2017', '2021', '2024'];

  const ctxCs = document.getElementById('csChart').getContext('2d');

  const dataCs = {
    labels: etiquetasCs,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCs,
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
        data: datosCs,
        borderColor: '#FF7F00',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#FF7F00'
      }
    ]
  };

  const configCs = {
    data: dataCs,
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
        id: 'etiquetaPartidoCs',
        afterDatasetsDraw(chart) {
          const { ctx, scales: { x, y } } = chart;
          const partidos = ['Cs', 'Cs', 'Cs', 'Cs', 'Cs', 'Cs', 'Cs'];

          datosCs.forEach((valor, i) => {
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

  new Chart(ctxCs, configCs);

  const datosCUP = [3.11, 8.21, 5.06, 7.49, 4.24];
  const etiquetasCUP = ['2012', '2015', '2017', '2021', '2024'];

  const ctxCUP = document.getElementById('cupChart').getContext('2d');

  const dataCUP = {
    labels: etiquetasCUP,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCUP,
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
        data: datosCUP,
        borderColor: '#010101',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#010101'
      }
    ]
  };

  const configCUP = {
    data: dataCUP,
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
        id: 'etiquetaPartidoCUP',
        afterDatasetsDraw(chart) {
          const { ctx, scales: { x, y } } = chart;
          const partidos = ['CUP', 'CUP', 'CUP', 'CUP', 'CUP'];

          datosCUP.forEach((valor, i) => {
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

  new Chart(ctxCUP, configCUP);

  const datosAlianca = [7.78];
  const etiquetasAlianca = ['2024'];

  const ctxAlianca = document.getElementById('aliancaChart').getContext('2d');

  const dataAlianca = {
    labels: etiquetasAlianca,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosAlianca,
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
        data: datosAlianca,
        borderColor: '#014983',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#014983'
      }
    ]
  };

  const configAlianca = {
    data: dataAlianca,
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
        id: 'etiquetaPartidoAlianca',
        afterDatasetsDraw(chart) {
          const { ctx, scales: { x, y } } = chart;
          const partidos = ['Aliança'];

          datosAlianca.forEach((valor, i) => {
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

  new Chart(ctxAlianca, configAlianca);

  const datosSumar = [4.33, 3.93, 3.27, 2.15];
  const etiquetasSumar = ['2015', '2017', '2021', '2024'];

  const ctxSumar = document.getElementById('sumarChart').getContext('2d');

  const dataSumar = {
    labels: etiquetasSumar,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosSumar,
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
        data: datosSumar,
        borderColor: '#800080',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#800080'
      }
    ]
  };

  const configSumar = {
    data: dataSumar,
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
        id: 'etiquetaPartidoSumar',
        afterDatasetsDraw(chart) {
          const { ctx, scales: { x, y } } = chart;
          const partidos = ['CSQEP', 'Podemos', 'Podemos', 'Sumar'];

          datosSumar.forEach((valor, i) => {
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

  new Chart(ctxSumar, configSumar);

  const datosVox = [5.60, 6.24];
  const etiquetasVox = ['2021', '2024'];

  const ctxVox = document.getElementById('voxChart').getContext('2d');

  const dataVox = {
    labels: etiquetasVox,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosVox,
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
        data: datosVox,
        borderColor: '#008000',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#008000'
      }
    ]
  };

  const configVox = {
    data: dataVox,
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
        id: 'etiquetaPartidoVox',
        afterDatasetsDraw(chart) {
          const { ctx, scales: { x, y } } = chart;
          const partidos = ['VOX', 'VOX'];

          datosVox.forEach((valor, i) => {
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

  new Chart(ctxVox, configVox);

const datosPSUC = [10.67, 2.80];
const etiquetasPSUC = ['1980','1984'];
const ctxPSUC = document.getElementById('psucChart').getContext('2d');

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

const datosEntesa = [1.64, 3.61, 2.91, 4.20, 29.82, 4.39, 6.75, 4.01, 5.38, 4.29, 3.91, 3.23, 2.16];
const etiquetasEntesa = ['1984','1988','1992','1995','1999','2003','2006','2010','2012','2015','2017','2021','2024'];
const partidosEntesa = ['Entesa','IC','Entesa','Entesa','PSC-CC-IC-V','ICV-EA','ICV-EUiA','Entesa','Entesa','CatSíqueesPot','CatComú-Podem','ECP-PEC','Entesa'];

const ctxEntesa = document.getElementById('entesaChart').getContext('2d');

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

const datosCDS = [4.32, 0.73];
const etiquetasCDS = ['1988', '1992'];
const partidosCDS = ['CDS', 'CDS'];
const ctxCDS = document.getElementById('cdsChart').getContext('2d');

const dataCDS = {
  labels: etiquetasCDS,
  datasets: [
    {
      type: 'bar',
      label: 'Porcentaje de voto (%)',
      data: datosCDS,
      backgroundColor: 'rgba(0, 191, 255, 0.7)',
      borderColor: '#00BFFF',
      borderWidth: 1,
      datalabels: {
        anchor: 'end',
        align: 'top',
        color: '#009ACD',
        font: { weight: 'bold' },
        formatter: (v) => v + '%'
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
};

const configCDS = {
  data: dataCDS,
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'top', labels: { color: '#333' } },
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
      id: 'etiquetaPartidoCDS',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDS.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#0080FF';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDS[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
};

new Chart(ctxCDS, configCDS);

const datosUPyD = [0.05,0.18];
const etiquetasUPyD = ['2010','2012'];
const partidosUPyD = ['UPyD','UPyD'];
const ctxUPyD = document.getElementById('upydChart').getContext('2d');

const dataUPyD = {
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
        color: '#C040A0',
        font: { weight: 'bold' },
        formatter: (v) => v + '%'
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
};

const configUPyD = {
  data: dataUPyD,
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'top', labels: { color: '#333' } },
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
      id: 'etiquetaPartidoUPyD',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyD.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF60DA';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyD[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
};

new Chart(ctxUPyD, configUPyD);

const datosPDeCAT = [4.6];
const etiquetasPDeCAT = ['2012']; // Cambia el año si quieres
const partidosPDeCAT = ['PDeCAT'];
const ctxPDeCAT = document.getElementById('pdecatChart').getContext('2d');

const dataPDeCAT = {
  labels: etiquetasPDeCAT,
  datasets: [
    {
      type: 'bar',
      label: 'Porcentaje de voto (%)',
      data: datosPDeCAT,
      backgroundColor: 'rgba(1, 131, 203, 0.7)',
      borderColor: '#0183CB',
      borderWidth: 1,
      datalabels: {
        anchor: 'end',
        align: 'top',
        color: '#014F7A',
        font: { weight: 'bold' },
        formatter: (v) => v + '%'
      }
    },
    {
      type: 'line',
      label: 'Tendencia',
      data: datosPDeCAT,
      borderColor: '#0183CB',
      backgroundColor: 'transparent',
      fill: false,
      tension: 0.3,
      pointRadius: 4,
      pointBackgroundColor: '#0183CB'
    }
  ]
};

const configPDeCAT = {
  data: dataPDeCAT,
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'top', labels: { color: '#333' } },
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
      id: 'etiquetaPartidoPDeCAT',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPDeCAT.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#0183CB';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPDeCAT[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
};

new Chart(ctxPDeCAT, configPDeCAT);

  const etiquetasLleidaTotal = ['1980','1984','1988','1992','1995','1999','2003','2006','2010','2012','2015','2017','2021','2024'];
  
// Datos totales corregidos con null donde no hay voto
const datosLleidaTotal = {
  'CIU / JxSí / Junts': [28.4, 58.06, 54.22, 54.29, 50.24, 48.6, 41.86, 40.93, 48.65, 43.94, 55.64, 32.48, 28.04, 30.37],
  'PSC': [19.38, 20.05, 23.23, 22.11, 19.69, 29.82, 22.67, 22.51, 15.35, 10.66, 8.49, 9.09, 15.19, 20.55],
  'ERC': [12.3, 5.74, 5.94, 9.91, 12.96, 11.73, 20.12, 18.13, 9.48, 17.77, 55.64, 26.87, 26.91, 16.35],
  'PP / AP / CC-UCD / AP-PDP-UL': [23.52, 8.89, 6.22, 6.96, 12.34, 8.06, 9.76, 9.32, 10.6, 11.52, 7.35, 4.55, 3.59, 9.17],
  'Cs': [null, null, null, null, null, null, null, 0.99, 1.54, 3.40, 11.67, 17.07, 3.25, 0.32],
  'VOX': [null, null, null, null, null, null, null, null, null, null, null, null, 5.6, 6.24],
  'CUP': [null, null, null, null, null, null, null, null, null,3.11, 8.21, 5.06, 7.49, 4.24],
  'Aliança Catalana': [null, null, null, null, null, null, null, null, null, null, null, null, null, 7.78],
  'CSQEP / Podemos / Sumar': [null, null, null, null, null, null, null, null, null, null, 4.29, 3.91, 3.23, 2.16],
  'PSUC': [10.67, 2.80, null, null, null, null, null, null, null, null, null, null, null, null],
  'CDS': [null, null, 4.32, 0.73, null, null, null, null, null, null, null, null, null, null],
  'Entesa / ICV / CatComú / ECP': [null,1.64, 3.61, 2.91, 4.20, 29.82, 4.39, 6.75, 4.01, 5.38, 4.29, 3.91, 3.23, 2.16],
  'UPyD': [null, null, null, null, null, null, null, null,0.05,0.18, null, null, null, null],
  'PDECat': [null, null, null, null, null, null, null, null, null, null, null, null,4.6, null],
};

const coloresPartidosLleida = {
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
  'PDECat':'#0183CB'
};

// Convertir nulls a undefined para que Chart.js no rompa las líneas
const datasetsLleidaTotal = Object.entries(datosLleidaTotal).map(([partido, datos]) => ({
  label: partido,
  data: datos.map(v => v === null ? undefined : v),
  borderColor: coloresPartidosLleida[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresPartidosLleida[partido],
  datalabels: {
    display: true,
    color: coloresPartidosLleida[partido],
    font: { weight: 'bold', size: 12 },
    formatter: v => v != null ? v + '%' : ''
  }
}));

const ctxLleidaTotal = document.getElementById('votosTotalesLleidaChart').getContext('2d');

new Chart(ctxLleidaTotal, {
  type: 'line',
  data: {
    labels: etiquetasLleidaTotal,
    datasets: datasetsLleidaTotal
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