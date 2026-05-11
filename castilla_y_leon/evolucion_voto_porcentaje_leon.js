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
  // Datos del PP en León
  const datosPPLeon = [35.62, 34.37, 40.61, 46.31, 43.92, 39.49, 39.59, 44.71, 32.15, 27.34, 25.00,28.04];
  const etiquetasPPLeon = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2022','2026'];
  const partidosPPLeon = ['AP-PDP-UL','AP','PP','PP','PP','PP','PP','PP','PP','PP','PP','PP'];

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
          id: 'etiquetaPartidoPPLeon',
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
  // Crear el gráfico del PP León
  const ctxPPLeon = document.getElementById('ppLeonChart').getContext('2d');
  crearChart(ctxPPLeon, datosPPLeon, etiquetasPPLeon, partidosPPLeon, 'rgba(0,0,255,0.7)', '#0000FF');

  // Crear el gráfico del PSOE en Burgos
  // Datos actualizados del PSOE en León
  const datosPSELeon = [48.30, 38.86, 39.62, 31.22, 32.02, 36.56, 39.67, 31.82, 27.34, 35.28, 28.46,28.27];
  const etiquetasPSELeon = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2022','2026'];
  const partidosPSELeon = ['PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE'];

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
          id: 'etiquetaPartidoPSELeon',
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

  // Crear el gráfico del PSOE en León
  const ctxPSELeon = document.getElementById('psoeLeonChart').getContext('2d');
  crearChart(ctxPSELeon, datosPSELeon, etiquetasPSELeon, partidosPSELeon, 'rgba(255,0,0,0.7)', '#FF0000');

  const ctxVOXLeon = document.getElementById('voxLeonChart').getContext('2d');

new Chart(ctxVOXLeon, {
  data: {
    labels: ['2015','2019','2022','2026'],
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: [0.46, 4.22, 15.38,16.49],
        backgroundColor: 'rgba(0,128,0,0.7)',
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
        data: [0.46, 4.22, 15.38,16.49],
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
    plugins: { legend: { position: 'top', labels: { color: '#333' } }, datalabels: { display: true } },
    scales: {
      y: { beginAtZero: true, title: { display: true, text: 'Porcentaje (%)', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoVOXLeon',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        [0.46, 4.22, 15.38].forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(['VOX','VOX','VOX'][i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosCSLeon = [8.91, 10.99, 2.19,0.12];
const etiquetasCSLeon = ['2015','2019','2022','2026'];
const partidosCSLeon = ['CS','CS','CS','CS'];

const ctxCSLeon = document.getElementById('csLeonChart').getContext('2d');

new Chart(ctxCSLeon, {
  data: {
    labels: etiquetasCSLeon,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCSLeon,
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
        data: datosCSLeon,
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
      id: 'etiquetaPartidoCSLeon',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSLeon.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSLeon[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosPodemosLeon = [12.57, 5.50, 4.99,0.7];
const etiquetasPodemosLeon = ['2015','2019','2022','2026'];
const partidosPodemosLeon = ['Podemos','Podemos','Podemos/IU','Podemos'];

const ctxPodemosLeon = document.getElementById('podemosLeonChart').getContext('2d');

new Chart(ctxPodemosLeon, {
  data: {
    labels: etiquetasPodemosLeon,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPodemosLeon,
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
        data: datosPodemosLeon,
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
      id: 'etiquetaPartidoPodemosLeon',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosLeon.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosLeon[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosUPLLeon = [4.26, 13.06, 19.05, 18.10, 13.37, 8.91, 6.99, 10.21, 21.31,20.96];
const etiquetasUPLLeon = ['1991','1995','1999','2003','2007','2011','2015','2019','2022','2026'];
const partidosUPLLeon = ['UPL','UPL','UPL','UPL','UPL','UPL','UPL','UPL','UPL','UPL'];

const ctxUPLLeon = document.getElementById('uplLeonChart').getContext('2d');

new Chart(ctxUPLLeon, {
  data: {
    labels: etiquetasUPLLeon,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosUPLLeon,
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
        data: datosUPLLeon,
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
      id: 'etiquetaPartidoUPLLeon',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPLLeon.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#b91367';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPLLeon[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosCDSLeon = [2.39, 13.98, 5.56];
const etiquetasCDSLeon = ['1983','1987','1991'];
const partidosCDSLeon = ['CDS','CDS','CDS'];

const ctxCDSLeon = document.getElementById('cdsLeonChart').getContext('2d');

new Chart(ctxCDSLeon, {
  data: {
    labels: etiquetasCDSLeon,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCDSLeon,
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
        data: datosCDSLeon,
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
      id: 'etiquetaPartidoCDSLeon',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSLeon.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1E90FF';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSLeon[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosIULeon = [3.97, 4.99, 6.91, 4.11, 3.14, 2.10, 3.80, 3.43, 1.65, 4.99,1.28];
const etiquetasIULeon = ['1987','1991','1995','1999','2003','2007','2011','2015','2019','2022','2026'];
const partidosIULeon = ['IU','IU','IU','IU','IU','IU','IU','IU','IU','IU','IU'];

const ctxIULeon = document.getElementById('iuLeonChart').getContext('2d');

new Chart(ctxIULeon, {
  data: {
    labels: etiquetasIULeon,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosIULeon,
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
        data: datosIULeon,
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
      id: 'etiquetaPartidoIULeon',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIULeon.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIULeon[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosUPyDLeon = [1.67, 0.71];
const etiquetasUPyDLeon = ['2011','2015'];
const partidosUPyDLeon = ['UPyD','UPyD'];

const ctxUPyDLeon = document.getElementById('upydLeonChart').getContext('2d');

new Chart(ctxUPyDLeon, {
  data: {
    labels: etiquetasUPyDLeon,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosUPyDLeon,
        backgroundColor: 'rgba(255,96,218,0.7)', // color UPyD
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
        data: datosUPyDLeon,
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
    id: 'etiquetaPartidoUPyDLeon',
    afterDatasetsDraw(chart) {
      const { ctx, scales: { x, y } } = chart;
      datosUPyDLeon.forEach((v, i) => {
        const xPos = x.getPixelForValue(i);
        const yPos = y.getPixelForValue(0) + 30;
        ctx.save();
        ctx.fillStyle = '#FF60DA';
        ctx.font = '12px Segoe UI';
        ctx.textAlign = 'center';
        ctx.fillText(partidosUPyDLeon[i], xPos, yPos);
        ctx.restore();
      });
    }
  }, ChartDataLabels]
});

const datosSALFLeon = [1.12];
const etiquetasSALFLeon = ['2026'];
const partidosSALFLeon = ['SALF'];

const ctxSALFLeon = document.getElementById('salfLeonChart').getContext('2d');

new Chart(ctxSALFLeon, {
  data: {
    labels: etiquetasSALFLeon,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosSALFLeon,
        backgroundColor: 'rgba(0,90,150,0.7)', // color SALF
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
        data: datosSALFLeon,
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
  plugins: [{
    id: 'etiquetaPartidoSALFLeon',
    afterDatasetsDraw(chart) {
      const { ctx, scales: { x, y } } = chart;
      datosSALFLeon.forEach((v, i) => {
        const xPos = x.getPixelForValue(i);
        const yPos = y.getPixelForValue(0) + 30;
        ctx.save();
        ctx.fillStyle = '#005a96';
        ctx.font = '12px Segoe UI';
        ctx.textAlign = 'center';
        ctx.fillText(partidosSALFLeon[i], xPos, yPos);
        ctx.restore();
      });
    }
  }, ChartDataLabels]
});

const etiquetasLeonPct = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2022','2026'];

const datosLeonPct = {
  'PP':           [35.62,34.37,40.61,46.31,43.92,39.49,39.59,44.71,32.15,27.34,25.00,28.04],
  'PSOE':         [48.30,38.86,39.62,31.22,32.02,36.56,39.67,31.82,27.34,35.28,28.46,28.27],
  'VOX':          [null,null,null,null,null,null,null,null,0.46,4.22,15.38,16.49],
  'CS':           [null,null,null,null,null,null,null,null,8.91,10.99,2.19,0.12],
  'Podemos/IU':   [null,null,null,null,null,null,null,null,12.57,5.50,4.99,0.7],
  'UPL':          [null,null,4.26,13.06,19.05,18.10,13.37,8.91,6.99,10.21,21.31,20.96],
  'CDS':          [2.39,13.98,5.56,null,null,null,null,null,null,null,null],
  'IU':           [null,3.97,4.99,6.91,4.11,3.14,2.10,3.80,3.43,1.65,4.99,1.28],
  'UPyD':         [null,null,null,null,null,null,null,1.67,0.71,null,null],
  'SALF':         [null,null,null,null,null,null,null,null,null,null,null,1.12],
};

const coloresPartidosLeonPct = {
  'PP': '#0000FF',
  'PSOE': '#FF0000',
  'VOX': '#008000',
  'CS': '#FF8C00',
  'Podemos/IU': '#800080',
  'UPL': '#B91367',
  'CDS': '#00BFFF',
  'IU': '#B22222',
  'UPyD': '#FF60DA',
  'SALF': '#005a96',
};

const datasetsLeonPct = Object.keys(datosLeonPct).map(partido => ({
  type: 'line',
  label: partido,
  data: datosLeonPct[partido],
  borderColor: coloresPartidosLeonPct[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresPartidosLeonPct[partido],
  datalabels: {
    display: true,
    color: coloresPartidosLeonPct[partido],
    font: { weight: 'bold', size: 12 },
    formatter: v => v != null ? v.toFixed(2) + '%' : ''
  }
}));

new Chart(document.getElementById('porcentajesTotalesLeonChart').getContext('2d'), {
  type: 'line',
  data: { labels: etiquetasLeonPct, datasets: datasetsLeonPct },
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