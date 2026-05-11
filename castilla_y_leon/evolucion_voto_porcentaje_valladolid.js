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
  // Datos del PP en Valladolid
  const datosPPValladolid = [34.76, 33.23, 43.33, 52.04, 50.21, 47.56, 48.77, 50.19, 35.74, 29.54, 30.81,36.24];
  const etiquetasPPValladolid = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2022','2026'];
  const partidosPPValladolid = ['AP-PDP-UL','AP','PP','PP','PP','PP','PP','PP','PP','PP','PP','PP'];

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
          y: { beginAtZero: true, title: { display: true, text: 'Porcentaje (%)', color: '#333' }, ticks: { color: '#333' } },
          x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
        }
      },
      plugins: [
        {
          id: 'etiquetaPartidoPPValladolid',
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

  // Crear el gráfico del PP en Valladolid
  const ctxPPValladolid = document.getElementById('ppValladolidChart').getContext('2d');
  crearChart(ctxPPValladolid, datosPPValladolid, etiquetasPPValladolid, partidosPPValladolid, 'rgba(0,0,255,0.7)', '#0000FF');

  // Datos del PSOE en Valladolid (1983–2022)
  const datosPSOEValladolid = [53.69, 36.97, 39.05, 31.20, 37.25, 40.99, 38.94, 29.14, 25.00, 34.72, 31.35,31.98];
  const etiquetasPSOEValladolid = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2022','2026'];
  const partidosPSOEValladolid = ['PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE'];

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
          y: { beginAtZero: true, title: { display: true, text: 'Porcentaje (%)', color: '#333' }, ticks: { color: '#333' } },
          x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
        }
      },
      plugins: [
        {
          id: 'etiquetaPartidoPSOEValladolid',
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

  // Crear el gráfico del PSOE en Valladolid
  const ctxPSOEValladolid = document.getElementById('psoeValladolidChart').getContext('2d');
  crearChart(ctxPSOEValladolid, datosPSOEValladolid, etiquetasPSOEValladolid, partidosPSOEValladolid, 'rgba(255,0,0,0.7)', '#FF0000');

const ctxVOXValladolid = document.getElementById('voxValladolidChart').getContext('2d');

new Chart(ctxVOXValladolid, {
  data: {
    labels: ['2015','2019','2022','2026'],
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: [1.07, 6.86, 19.96,20.74],
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
        data: [1.07, 6.86, 19.96,20.74],
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
      id: 'etiquetaPartidoVOXValladolid',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        [1.07, 6.86, 19.96,20.74].forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(['VOX','VOX','VOX','VOX'][i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosCSValladolid = [8.94, 17.66, 6.91,0.64];
const etiquetasCSValladolid = ['2015','2019','2022','2026'];
const partidosCSValladolid = ['CS','CS','CS','CS'];

const ctxCSValladolid = document.getElementById('csValladolidChart').getContext('2d');

new Chart(ctxCSValladolid, {
  data: {
    labels: etiquetasCSValladolid,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCSValladolid,
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
        data: datosCSValladolid,
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
      id: 'etiquetaPartidoCSValladolid',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSValladolid.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSValladolid[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosPodemosValladolid = [13.04, 4.69, 6.93,0.8];
const etiquetasPodemosValladolid = ['2015','2019','2022','2026'];
const partidosPodemosValladolid = ['Podemos','Podemos','Podemos/IU','Podemos'];

const ctxPodemosValladolid = document.getElementById('podemosValladolidChart').getContext('2d');

new Chart(ctxPodemosValladolid, {
  data: {
    labels: etiquetasPodemosValladolid,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPodemosValladolid,
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
        data: datosPodemosValladolid,
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
      y: { beginAtZero: true, title: { display: true, text: 'Porcentaje (%)', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoPodemosValladolid',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosValladolid.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosValladolid[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosEspanaVaciadaValladolid = [1.6];
const etiquetasEspanaVaciadaValladolid = ['2022'];
const partidosEspanaVaciadaValladolid = ['España Vaciada'];

const ctxEspanaVaciadaValladolid = document.getElementById('espanaVaciadaValladolidChart').getContext('2d');

new Chart(ctxEspanaVaciadaValladolid, {
  data: {
    labels: etiquetasEspanaVaciadaValladolid,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosEspanaVaciadaValladolid,
        backgroundColor: 'rgba(173,56,56,0.7)',
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
        data: datosEspanaVaciadaValladolid,
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
      y: { beginAtZero: true, title: { display: true, text: 'Porcentaje (%)', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoEspanaVaciadaValladolid',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosEspanaVaciadaValladolid.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#AD3838';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosEspanaVaciadaValladolid[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosCDSValladolid = [4.73, 20.65, 5.27];
const etiquetasCDSValladolid = ['1983','1987','1991'];
const partidosCDSValladolid = ['CDS','CDS','CDS'];

const ctxCDSValladolid = document.getElementById('cdsValladolidChart').getContext('2d');

new Chart(ctxCDSValladolid, {
  data: {
    labels: etiquetasCDSValladolid,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCDSValladolid,
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
        data: datosCDSValladolid,
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
      id: 'etiquetaPartidoCDSValladolid',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSValladolid.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1E90FF';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSValladolid[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosIUValladolid = [4.51, 8.31, 13.81, 7.75, 4.83, 4.74, 7.82, 6.21, 4.07, 6.93,3.92];
const etiquetasIUValladolid = ['1987','1991','1995','1999','2003','2007','2011','2015','2019','2022','2026'];
const partidosIUValladolid = ['IU','IU','IU','IU','IU','IU','IU','IU','IU','IU','IU'];

const ctxIUValladolid = document.getElementById('iuValladolidChart').getContext('2d');

new Chart(ctxIUValladolid, {
  data: {
    labels: etiquetasIUValladolid,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosIUValladolid,
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
        data: datosIUValladolid,
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
      y: { beginAtZero: true, title: { display: true, text: 'Porcentaje (%)', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoIUValladolid',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIUValladolid.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIUValladolid[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosUPyDValladolid = [4.29, 1.57];
const etiquetasUPyDValladolid = ['2011','2015'];
const partidosUPyDValladolid = ['UPyD','UPyD'];

const ctxUPyDValladolid = document.getElementById('upydValladolidChart').getContext('2d');

new Chart(ctxUPyDValladolid, {
  data: {
    labels: etiquetasUPyDValladolid,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosUPyDValladolid,
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
        data: datosUPyDValladolid,
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
    id: 'etiquetaPartidoUPyDValladolid',
    afterDatasetsDraw(chart) {
      const { ctx, scales: { x, y } } = chart;
      datosUPyDValladolid.forEach((v, i) => {
        const xPos = x.getPixelForValue(i);
        const yPos = y.getPixelForValue(0) + 30;
        ctx.save();
        ctx.fillStyle = '#FF60DA';
        ctx.font = '12px Segoe UI';
        ctx.textAlign = 'center';
        ctx.fillText(partidosUPyDValladolid[i], xPos, yPos);
        ctx.restore();
      });
    }
  }, ChartDataLabels]
});

// ================= SALF Valladolid =================
const datosSALFValladolid = [1.54];
const etiquetasSALFValladolid = ['2026'];
const partidosSALFValladolid = ['SALF'];

const ctxSALF = document.getElementById('salfValladolidChart').getContext('2d');

new Chart(ctxSALF, {
  data: {
    labels: etiquetasSALFValladolid,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosSALFValladolid,
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
        data: datosSALFValladolid,
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
      id: 'etiquetaPartidoSALFValladolid',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosSALFValladolid.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#005a96';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosSALFValladolid[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const etiquetasValladolidPct = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2022','2026'];

const datosValladolidPct = {
  'PP':           [34.76,33.23,43.33,52.04,50.21,47.56,48.77,50.19,35.74,29.54,30.81,36.24],
  'PSOE':         [53.69,36.97,39.05,31.20,37.25,40.99,38.94,29.14,25.00,34.72,31.35,31.98],
  'VOX':          [null,null,null,null,null,null,null,null,1.07,6.86,19.96,20.74],
  'CS':           [null,null,null,null,null,null,null,null,8.94,17.66,6.91,0.64],
  'Podemos/IU':   [null,null,null,null,null,null,null,null,13.04,4.69,6.93,0.8],
  'España Vaciada':[null,null,null,null,null,null,null,null,null,null,1.6],
  'CDS':          [4.73,20.65,5.27,null,null,null,null,null,null,null,null],
  'IU':           [null,4.51,8.31,13.81,7.75,4.83,4.74,7.82,6.21,4.07,6.93,3.92],
  'UPyD':         [null,null,null,null,null,null,null,4.29,1.57,null,null],
  'SALF':         [null,null,null,null,null,null,null,null,null,null,null,1.54],
};

const coloresPartidosValladolidPct = {
  'PP': '#0000FF',
  'PSOE': '#FF0000',
  'VOX': '#008000',
  'CS': '#FF8C00',
  'Podemos/IU': '#800080',
  'España Vaciada': '#AD3838',
  'CDS': '#00BFFF',
  'IU': '#B22222',
  'UPyD': '#FF60DA',
  'SALF': '#005a96',
};

// Crear datasets dinámicamente
const datasetsValladolidPct = Object.keys(datosValladolidPct).map(partido => ({
  type: 'line',
  label: partido,
  data: datosValladolidPct[partido],
  borderColor: coloresPartidosValladolidPct[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresPartidosValladolidPct[partido],
  datalabels: {
    display: true,
    color: coloresPartidosValladolidPct[partido],
    font: { weight: 'bold', size: 12 },
    formatter: v => v != null ? v.toFixed(2) + '%' : ''
  }
}));

// Crear el gráfico
new Chart(document.getElementById('porcentajesTotalesValladolidChart').getContext('2d'), {
  type: 'line',
  data: {
    labels: etiquetasValladolidPct,
    datasets: datasetsValladolidPct
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