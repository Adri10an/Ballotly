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
  // Datos PP Castilla y León
  const datosPPCyL = [40.03, 34.91, 44.25, 53.48, 52.27, 49.63, 49.17, 51.55, 37.77, 31.49, 31.43,35.47];
  const etiquetasPPCyL = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2022','2026'];
  const partidosPPCyL = ['AP-PDP-UL','AP','PP','PP','PP','PP','PP','PP','PP','PP','PP','PP'];

  // Función genérica para crear gráficos
  function crearChart(ctx, datos, etiquetas, partidos, color, borderColor, pluginId) {
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
              formatter: v => v.toFixed(2) + '%'
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
          id: pluginId,
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

  // Crear el gráfico del PP en Castilla y León
  const ctxPPCyL = document.getElementById('ppCyLChart').getContext('2d');
  crearChart(ctxPPCyL, datosPPCyL, etiquetasPPCyL, partidosPPCyL, 'rgba(0,0,255,0.7)', '#0000FF', 'etiquetaPartidoPPCyL');

  // Datos PSOE Castilla y León
  const datosPSOECyL = [44.80, 34.56, 37.05, 30.44, 34.26, 37.64, 37.73, 29.68, 25.95, 34.84, 30.05,30.74];
  const etiquetasPSOECyL = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2022','2026'];
  const partidosPSOECyL = ['PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE'];

  // Crear gráfico PSOE Castilla y León
  const ctxPSOECyL = document.getElementById('psoeCyLChart').getContext('2d');
  crearChart(ctxPSOECyL, datosPSOECyL, etiquetasPSOECyL, partidosPSOECyL, 'rgba(255,0,0,0.7)', '#FF0000', 'etiquetaPartidoPSOECyL');

  // Datos VOX Castilla y León
  const datosVOXCyL = [0.68, 5.5, 17.64,18.92];
  const etiquetasVOXCyL = ['2015','2019','2022','2026'];
  const partidosVOXCyL = ['VOX','VOX','VOX','VOX'];

  // Crear gráfico VOX Castilla y León
  const ctxVOXCyL = document.getElementById('voxCyLChart').getContext('2d');
  new Chart(ctxVOXCyL, {
    data: {
      labels: etiquetasVOXCyL,
      datasets: [
        {
          type: 'bar',
          label: 'Porcentaje de voto (%)',
          data: datosVOXCyL,
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
          data: datosVOXCyL,
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
        id: 'etiquetaPartidoVOXCyL',
        afterDatasetsDraw(chart) {
          const { ctx, scales: { x, y } } = chart;
          datosVOXCyL.forEach((valor, i) => {
            const xPos = x.getPixelForValue(i);
            const yPos = y.getPixelForValue(0) + 30;
            ctx.save();
            ctx.fillStyle = '#006400';
            ctx.font = '12px Segoe UI';
            ctx.textAlign = 'center';
            ctx.fillText(partidosVOXCyL[i], xPos, yPos);
            ctx.restore();
          });
        }
      },
      ChartDataLabels
    ]
  });

  // Datos Ciudadanos Castilla y León
  const datosCSCyL = [10.27, 14.94, 4.49,0.34];
  const etiquetasCSCyL = ['2015','2019','2022','2026'];
  const partidosCSCyL = ['CS','CS','CS','CS'];

  // Crear gráfico CS Castilla y León
  const ctxCSCyL = document.getElementById('csCyLChart').getContext('2d');
  new Chart(ctxCSCyL, {
    data: {
      labels: etiquetasCSCyL,
      datasets: [
        {
          type: 'bar',
          label: 'Porcentaje de voto (%)',
          data: datosCSCyL,
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
          data: datosCSCyL,
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
        id: 'etiquetaPartidoCSCyL',
        afterDatasetsDraw(chart) {
          const { ctx, scales: { x, y } } = chart;
          datosCSCyL.forEach((valor, i) => {
            const xPos = x.getPixelForValue(i);
            const yPos = y.getPixelForValue(0) + 30;
            ctx.save();
            ctx.fillStyle = '#FF4500';
            ctx.font = '12px Segoe UI';
            ctx.textAlign = 'center';
            ctx.fillText(partidosCSCyL[i], xPos, yPos);
            ctx.restore();
          });
        }
      },
      ChartDataLabels
    ]
  });

  // Datos Podemos Castilla y León
  const datosPodemosCyL = [12.10, 4.99, 5.08,0.74];
  const etiquetasPodemosCyL = ['2015','2019','2022','2026'];
  const partidosPodemosCyL = ['Podemos','Podemos','Podemos/IU','Podemos'];

  // Crear gráfico Podemos Castilla y León
  const ctxPodemosCyL = document.getElementById('podemosCyLChart').getContext('2d');
  new Chart(ctxPodemosCyL, {
    data: {
      labels: etiquetasPodemosCyL,
      datasets: [
        {
          type: 'bar',
          label: 'Porcentaje de voto (%)',
          data: datosPodemosCyL,
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
          data: datosPodemosCyL,
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
        id: 'etiquetaPartidoPodemosCyL',
        afterDatasetsDraw(chart) {
          const { ctx, scales: { x, y } } = chart;
          datosPodemosCyL.forEach((valor, i) => {
            const xPos = x.getPixelForValue(i);
            const yPos = y.getPixelForValue(0) + 30;
            ctx.save();
            ctx.fillStyle = '#4B0082';
            ctx.font = '12px Segoe UI';
            ctx.textAlign = 'center';
            ctx.fillText(partidosPodemosCyL[i], xPos, yPos);
            ctx.restore();
          });
        }
      },
      ChartDataLabels
    ]
  });

  // Datos España Vaciada Castilla y León
  const datosEspanaVaciadaCyL = [1.62,0.24];
  const etiquetasEspanaVaciadaCyL = ['2022','2026'];
  const partidosEspanaVaciadaCyL = ['España Vaciada','España Vaciada'];

  // Crear gráfico España Vaciada Castilla y León
  const ctxEspanaVaciadaCyL = document.getElementById('espanaVaciadaCyLChart').getContext('2d');
  new Chart(ctxEspanaVaciadaCyL, {
    data: {
      labels: etiquetasEspanaVaciadaCyL,
      datasets: [
        {
          type: 'bar',
          label: 'Porcentaje de voto (%)',
          data: datosEspanaVaciadaCyL,
          backgroundColor: 'rgba(173,56,56,0.7)', // rojo oscuro España Vaciada
          borderColor: '#AD3838',
          borderWidth: 1,
          datalabels: { 
            anchor: 'end', 
            align: 'top', 
            color: '#AD3838', 
            font: { weight: 'bold' }, 
            formatter: v => v.toFixed(2) + '%' 
          }
        },
        {
          type: 'line',
          label: 'Tendencia',
          data: datosEspanaVaciadaCyL,
          borderColor: '#AD3838',
          backgroundColor: 'transparent',
          fill: false,
          tension: 0.3,
          pointRadius: 4,
          pointBackgroundColor: '#AD3838'
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
        id: 'etiquetaPartidoEspanaVaciadaCyL',
        afterDatasetsDraw(chart) {
          const { ctx, scales: { x, y } } = chart;
          datosEspanaVaciadaCyL.forEach((valor, i) => {
            const xPos = x.getPixelForValue(i);
            const yPos = y.getPixelForValue(0) + 30;
            ctx.save();
            ctx.fillStyle = '#AD3838';
            ctx.font = '12px Segoe UI';
            ctx.textAlign = 'center';
            ctx.fillText(partidosEspanaVaciadaCyL[i], xPos, yPos);
            ctx.restore();
          });
        }
      },
      ChartDataLabels
    ]
  });

  // Datos CDS Castilla y León
  const datosCDSCyL = [6.02, 19.68, 8.28];
  const etiquetasCDSCyL = ['1983','1987','1991'];
  const partidosCDSCyL = ['CDS','CDS','CDS'];

  // Crear gráfico CDS Castilla y León
  const ctxCDSCyL = document.getElementById('cdsCyLChart').getContext('2d');
  new Chart(ctxCDSCyL, {
    data: {
      labels: etiquetasCDSCyL,
      datasets: [
        {
          type: 'bar',
          label: 'Porcentaje de voto (%)',
          data: datosCDSCyL,
          backgroundColor: 'rgba(0,191,255,0.7)', // azul CDS
          borderColor: '#00BFFF',
          borderWidth: 1,
          datalabels: { 
            anchor: 'end', 
            align: 'top', 
            color: '#1E90FF', 
            font: { weight: 'bold' }, 
            formatter: v => v.toFixed(2) + '%' 
          }
        },
        {
          type: 'line',
          label: 'Tendencia',
          data: datosCDSCyL,
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
        id: 'etiquetaPartidoCDSCyL',
        afterDatasetsDraw(chart) {
          const { ctx, scales: { x, y } } = chart;
          datosCDSCyL.forEach((valor, i) => {
            const xPos = x.getPixelForValue(i);
            const yPos = y.getPixelForValue(0) + 30;
            ctx.save();
            ctx.fillStyle = '#1E90FF';
            ctx.font = '12px Segoe UI';
            ctx.textAlign = 'center';
            ctx.fillText(partidosCDSCyL[i], xPos, yPos);
            ctx.restore();
          });
        }
      },
      ChartDataLabels
    ]
  });

  // Datos IU Castilla y León
  const datosIUCyL = [3.87, 5.45, 9.81, 5.62, 3.53, 3.08, 4.87, 4.15, 2.29, 5.08,2.23];
  const etiquetasIUCyL = ['1987','1991','1995','1999','2003','2007','2011','2015','2019','2022','2026'];
  const partidosIUCyL = ['IU','IU','IU','IU','IU','IU','IU','IU','IU','IU','IU'];

  // Crear gráfico IU Castilla y León
  const ctxIUCyL = document.getElementById('iuCyLChart').getContext('2d');
  new Chart(ctxIUCyL, {
    data: {
      labels: etiquetasIUCyL,
      datasets: [
        {
          type: 'bar',
          label: 'Porcentaje de voto (%)',
          data: datosIUCyL,
          backgroundColor: 'rgba(178,34,34,0.7)', // rojo IU
          borderColor: '#B22222',
          borderWidth: 1,
          datalabels: { 
            anchor: 'end', 
            align: 'top', 
            color: '#8B0000', 
            font: { weight: 'bold' }, 
            formatter: v => v.toFixed(2) + '%' 
          }
        },
        {
          type: 'line',
          label: 'Tendencia',
          data: datosIUCyL,
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
        id: 'etiquetaPartidoIUCyL',
        afterDatasetsDraw(chart) {
          const { ctx, scales: { x, y } } = chart;
          datosIUCyL.forEach((valor, i) => {
            const xPos = x.getPixelForValue(i);
            const yPos = y.getPixelForValue(0) + 30;
            ctx.save();
            ctx.fillStyle = '#8B0000';
            ctx.font = '12px Segoe UI';
            ctx.textAlign = 'center';
            ctx.fillText(partidosIUCyL[i], xPos, yPos);
            ctx.restore();
          });
        }
      },
      ChartDataLabels
    ]
  });

  // Datos UPyD Castilla y León
  const datosUPyDCyL = [3.28, 1.43];
  const etiquetasUPyDCyL = ['2011','2015'];
  const partidosUPyDCyL = ['UPyD','UPyD'];

  // Crear gráfico UPyD Castilla y León
  const ctxUPyDCyL = document.getElementById('upydCyLChart').getContext('2d');
  new Chart(ctxUPyDCyL, {
    data: {
      labels: etiquetasUPyDCyL,
      datasets: [
        {
          type: 'bar',
          label: 'Porcentaje de voto (%)',
          data: datosUPyDCyL,
          backgroundColor: 'rgba(255,96,218,0.7)', // rosa UPyD
          borderColor: '#FF60DA',
          borderWidth: 1,
          datalabels: {
            anchor: 'end',
            align: 'top',
            color: '#FF60DA',
            font: { weight: 'bold' },
            formatter: v => v.toFixed(2) + '%'
          }
        },
        {
          type: 'line',
          label: 'Tendencia',
          data: datosUPyDCyL,
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
        datalabels: { display: true }
      },
      scales: {
        y: { beginAtZero: true, title: { display: true, text: 'Porcentaje (%)', color: '#333' }, ticks: { color: '#333' } },
        x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
      }
    },
    plugins: [{
      id: 'etiquetaPartidoUPyDCyL',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDCyL.forEach((v, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF60DA';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDCyL[i], xPos, yPos);
          ctx.restore();
        });
      }
    }, ChartDataLabels]
  });

  // Datos XAV Castilla y León
  const datosXAVCyL = [0.69, 1.15,0.91];
  const etiquetasXAVCyL = ['2019','2022','2026'];
  const partidosXAVCyL = ['XAV','XAV','XAV'];

  // Crear gráfico XAV Castilla y León
  const ctxXAVCyL = document.getElementById('xavCyLChart').getContext('2d');
  new Chart(ctxXAVCyL, {
    data: {
      labels: etiquetasXAVCyL,
      datasets: [
        {
          type: 'bar',
          label: 'Porcentaje de voto (%)',
          data: datosXAVCyL,
          backgroundColor: 'rgba(201,159,0,0.7)', // color XAV
          borderColor: '#c99f00',
          borderWidth: 1,
          datalabels: { 
            anchor: 'end', 
            align: 'top', 
            color: '#c99f00', 
            font: { weight: 'bold' }, 
            formatter: v => v.toFixed(2) + '%' 
          }
        },
        {
          type: 'line',
          label: 'Tendencia',
          data: datosXAVCyL,
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
        y: { beginAtZero: true, title: { display: true, text: 'Porcentaje (%)', color: '#333' }, ticks: { color: '#333' } },
        x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
      }
    },
    plugins: [
      {
        id: 'etiquetaPartidoXAVCyL',
        afterDatasetsDraw(chart) {
          const { ctx, scales: { x, y } } = chart;
          datosXAVCyL.forEach((valor, i) => {
            const xPos = x.getPixelForValue(i);
            const yPos = y.getPixelForValue(0) + 30;
            ctx.save();
            ctx.fillStyle = '#c99f00';
            ctx.font = '12px Segoe UI';
            ctx.textAlign = 'center';
            ctx.fillText(partidosXAVCyL[i], xPos, yPos);
            ctx.restore();
          });
        }
      },
      ChartDataLabels
    ]
  });

  // Datos UPL Castilla y León
  const datosUPLCyL = [0.84, 2.62, 3.84, 3.94, 2.73, 1.86, 1.41, 2.04, 4.30,4.35];
  const etiquetasUPLCyL = ['1991','1995','1999','2003','2007','2011','2015','2019','2022','2026'];
  const partidosUPLCyL = ['UPL','UPL','UPL','UPL','UPL','UPL','UPL','UPL','UPL','UPL'];

  // Crear gráfico UPL Castilla y León
  const ctxUPLCyL = document.getElementById('uplCyLChart').getContext('2d');
  new Chart(ctxUPLCyL, {
    data: {
      labels: etiquetasUPLCyL,
      datasets: [
        {
          type: 'bar',
          label: 'Porcentaje de voto (%)',
          data: datosUPLCyL,
          backgroundColor: 'rgba(185,19,103,0.7)', // color UPL
          borderColor: '#b91367',
          borderWidth: 1,
          datalabels: { 
            anchor: 'end', 
            align: 'top', 
            color: '#b91367', 
            font: { weight: 'bold' }, 
            formatter: v => v.toFixed(2) + '%' 
          }
        },
        {
          type: 'line',
          label: 'Tendencia',
          data: datosUPLCyL,
          borderColor: '#b91367',
          backgroundColor: 'transparent',
          fill: false,
          tension: 0.3,
          pointRadius: 4,
          pointBackgroundColor: '#b91367'
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
        id: 'etiquetaPartidoUPLCyL',
        afterDatasetsDraw(chart) {
          const { ctx, scales: { x, y } } = chart;
          datosUPLCyL.forEach((valor, i) => {
            const xPos = x.getPixelForValue(i);
            const yPos = y.getPixelForValue(0) + 30;
            ctx.save();
            ctx.fillStyle = '#b91367';
            ctx.font = '12px Segoe UI';
            ctx.textAlign = 'center';
            ctx.fillText(partidosUPLCyL[i], xPos, yPos);
            ctx.restore();
          });
        }
      },
      ChartDataLabels
    ]
  });

  // Datos Soria Ya! Castilla y León
  const datosSoriaYaCyL = [1.53,0.7];
  const etiquetasSoriaYaCyL = ['2022','2026'];
  const partidosSoriaYaCyL = ['Soria Ya!','SORIA YA'];

  const ctxSoriaYaCyL = document.getElementById('soriaYaCyLChart').getContext('2d');

  new Chart(ctxSoriaYaCyL, {
    data: {
      labels: etiquetasSoriaYaCyL,
      datasets: [
        {
          type: 'bar',
          label: 'Porcentaje de voto (%)',
          data: datosSoriaYaCyL,
          backgroundColor: 'rgba(0,0,0,0.7)', // negro semi-transparente
          borderColor: '#000000',
          borderWidth: 1,
          datalabels: { 
            anchor: 'end', 
            align: 'top', 
            color: '#000000', 
            font: { weight: 'bold' }, 
            formatter: v => v.toFixed(2) + '%' 
          }
        },
        {
          type: 'line',
          label: 'Tendencia',
          data: datosSoriaYaCyL,
          borderColor: '#000000',
          backgroundColor: 'transparent',
          fill: false,
          tension: 0.3,
          pointRadius: 4,
          pointBackgroundColor: '#000000'
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
        id: 'etiquetaPartidoSoriaYaCyL',
        afterDatasetsDraw(chart) {
          const { ctx, scales: { x, y } } = chart;
          datosSoriaYaCyL.forEach((valor, i) => {
            const xPos = x.getPixelForValue(i);
            const yPos = y.getPixelForValue(0) + 30;
            ctx.save();
            ctx.fillStyle = '#000000';
            ctx.font = '12px Segoe UI';
            ctx.textAlign = 'center';
            ctx.fillText(partidosSoriaYaCyL[i], xPos, yPos);
            ctx.restore();
          });
        }
      },
      ChartDataLabels
    ]
  });

  // ================= SALF Castilla y León =================
const datosSALFCyL = [1.40];
const etiquetasSALFCyL = ['2026'];
const partidosSALFCyL = ['SALF'];

// Crear gráfico SALF Castilla y León
const ctxSALFCyL = document.getElementById('salfCyLChart').getContext('2d');

new Chart(ctxSALFCyL, {
  data: {
    labels: etiquetasSALFCyL,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosSALFCyL,
        backgroundColor: 'rgba(0,90,150,0.7)',
        borderColor: '#005a96',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#005a96', 
          font: { weight: 'bold' }, 
          formatter: v => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosSALFCyL,
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
      id: 'etiquetaPartidoSALFCyL',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosSALFCyL.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#005a96';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosSALFCyL[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const etiquetasTotalesCyL = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2022','2026'];

const datosTotalesCyL = {
  'PP': [40.03, 34.91, 44.25, 53.48, 52.27, 49.63, 49.17, 51.55, 37.77, 31.49, 31.43,35.47],
  'PSOE': [44.80, 34.56, 37.05, 30.44, 34.26, 37.64, 37.73, 29.68, 25.95, 34.84, 30.05,30.74],
  'VOX': [null,null,null,null,null,null,null,null,0.68,5.50,17.64,18.92],
  'CS': [null,null,null,null,null,null,null,null,10.27,14.94,4.49,0.34],
  'Podemos/IU': [null,null,null,null,null,null,null,null,12.10,4.99,5.08,0.74],
  'UPL': [null,null,0.84,2.62,3.84,3.94,2.73,1.86,1.41,2.04,4.30,4.35],
  'XAV': [null,null,null,null,null,null,null,null,null,0.69,1.15,0.91],
  'Soria Ya!': [null,null,null,null,null,null,null,null,null,null,1.53,0.7],
  'España Vaciada': [null,null,null,null,null,null,null,null,null,null,1.62,0.24],
  'CDS': [6.02, 19.68, 8.28,null,null,null,null,null,null,null,null],
  'IU': [null,3.87,5.45,9.81,5.62,3.53,3.08,4.87,4.15,2.29,5.08,2.23],
  'UPyD': [null,null,null,null,null,null,null,3.28,1.43,null,null],
  'SALF': [null,null,null,null,null,null,null,null,null,null,null,1.4],
};

const coloresPartidosCyL = {
  'PP':'#0000FF','PSOE':'#FF0000','VOX':'#008000','CS':'#FF8C00',
  'Podemos/IU':'#800080','UPL':'#B91367','XAV':'#C99F00','Soria Ya!':'#000000',
  'España Vaciada':'#AD3838','CDS':'#00BFFF','IU':'#B22222','UPyD':'#FF60DA','SALF': '#005a96',
};

// Crear datasets dinámicamente
const datasetsTotalesCyL = Object.keys(datosTotalesCyL).map(partido => ({
  type: 'line',
  label: partido,
  data: datosTotalesCyL[partido],
  borderColor: coloresPartidosCyL[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresPartidosCyL[partido],
  datalabels: {
    display: true,
    color: coloresPartidosCyL[partido],
    font: { weight: 'bold', size: 12 },
    formatter: v => v != null ? v.toFixed(2) + '%' : ''
  }
}));

new Chart(document.getElementById('porcentajesTotalesCyLChart').getContext('2d'), {
  type: 'line',
  data: {
    labels: etiquetasTotalesCyL,
    datasets: datasetsTotalesCyL
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