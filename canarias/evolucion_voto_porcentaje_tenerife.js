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
// Datos CC Tenerife (porcentaje)
const datosCCTenerife = [39.59, 36.61, 27.51, 29.11, 31.17];
const etiquetasCCTenerife = ['2007', '2011', '2015', '2019', '2023'];
const partidosCCTenerife = ['CC', 'CC', 'CC', 'CC', 'CC'];

// Color CC
const colorCCTenerife = '#01ADD7';

// Chart
const ctxCCTenerife = document.getElementById('ccTenerifeChart').getContext('2d');

new Chart(ctxCCTenerife, {
  data: {
    labels: etiquetasCCTenerife,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCCTenerife,
        backgroundColor: 'rgba(1, 173, 215, 0.7)', // celeste CC
        borderColor: colorCCTenerife,
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#017A9E', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCCTenerife,
        borderColor: colorCCTenerife,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorCCTenerife
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
      id: 'etiquetaPartidoCCTenerife',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCCTenerife.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#017A9E';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCCTenerife[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// Datos PSOE Tenerife (porcentaje)
const datosPSOETenerife = [46.9, 32.21, 20.22, 21.95, 30.13, 27.3];
const etiquetasPSOETenerife = ['1983', '2007', '2011', '2015', '2019', '2023'];
const partidosPSOETenerife = ['PSOE','PSOE','PSOE','PSOE','PSOE','PSOE'];

// Color PSOE
const colorPSOETenerife = '#FF0000';

// Chart
const ctxPSOETenerife = document.getElementById('psoeTenerifeChart').getContext('2d');

new Chart(ctxPSOETenerife, {
  data: {
    labels: etiquetasPSOETenerife,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPSOETenerife,
        backgroundColor: 'rgba(255,0,0,0.7)', // rojo PSOE
        borderColor: colorPSOETenerife,
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
        data: datosPSOETenerife,
        borderColor: colorPSOETenerife,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorPSOETenerife
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
      id: 'etiquetaPartidoPSOETenerife',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSOETenerife.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#B22222';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSOETenerife[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// Datos PP Tenerife (porcentaje)
const datosPPTenerife = [30.4, 16.54, 25.63, 17.51, 13.5, 18.17];
const etiquetasPPTenerife = ['1983', '2007', '2011', '2015', '2019', '2023'];
const partidosPPTenerife = ['PP','PP','PP','PP','PP','PP'];

// Color PP
const colorPPTenerife = '#0000FF';

// Chart
const ctxPPTenerife = document.getElementById('ppTenerifeChart').getContext('2d');

new Chart(ctxPPTenerife, {
  data: {
    labels: etiquetasPPTenerife,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPPTenerife,
        backgroundColor: 'rgba(0,0,255,0.7)', // azul PP
        borderColor: colorPPTenerife,
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
        data: datosPPTenerife,
        borderColor: colorPPTenerife,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorPPTenerife
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
      id: 'etiquetaPartidoPPTenerife',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPTenerife.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPTenerife[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// Datos VOX Tenerife (porcentaje)
const datosVOXTenerife = [0.22, 2.34, 7.01];
const etiquetasVOXTenerife = ['2015', '2019', '2023'];
const partidosVOXTenerife = ['VOX','VOX','VOX'];

// Color VOX
const colorVOXTenerife = '#008000';

// Chart
const ctxVOXTenerife = document.getElementById('voxTenerifeChart').getContext('2d');

new Chart(ctxVOXTenerife, {
  data: {
    labels: etiquetasVOXTenerife,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosVOXTenerife,
        backgroundColor: 'rgba(0,128,0,0.7)', // verde VOX
        borderColor: colorVOXTenerife,
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
        data: datosVOXTenerife,
        borderColor: colorVOXTenerife,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorVOXTenerife
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
      id: 'etiquetaPartidoVOXTenerife',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXTenerife.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXTenerife[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// Datos DVC Tenerife (porcentaje)
const datosDVCTenerife = [4.41];
const etiquetasDVCTenerife = ['2023'];
const partidosDVCTenerife = ['DVC'];

// Color DVC
const colorDVCTenerife = '#569871';

// Chart
const ctxDVCTenerife = document.getElementById('dvcTenerifeChart').getContext('2d');

new Chart(ctxDVCTenerife, {
  data: {
    labels: etiquetasDVCTenerife,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosDVCTenerife,
        backgroundColor: 'rgba(86, 152, 113, 0.7)', // color DVC
        borderColor: colorDVCTenerife,
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#3B6B51', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosDVCTenerife,
        borderColor: colorDVCTenerife,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorDVCTenerife
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
      id: 'etiquetaPartidoDVCTenerife',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosDVCTenerife.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#3B6B51';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosDVCTenerife[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// Datos Podemos Tenerife (porcentaje)
const datosPodemosTenerife = [13.37, 9.56, 4.17];
const etiquetasPodemosTenerife = ['2015', '2019', '2023'];
const partidosPodemosTenerife = ['Podemos', 'Podemos', 'Podemos'];

// Color Podemos
const colorPodemosTenerife = '#800080';

// Chart
const ctxPodemosTenerife = document.getElementById('podemosTenerifeChart').getContext('2d');

new Chart(ctxPodemosTenerife, {
  data: {
    labels: etiquetasPodemosTenerife,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPodemosTenerife,
        backgroundColor: 'rgba(128, 0, 128, 0.7)', // morado Podemos
        borderColor: colorPodemosTenerife,
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
        data: datosPodemosTenerife,
        borderColor: colorPodemosTenerife,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorPodemosTenerife
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
      id: 'etiquetaPartidoPodemosTenerife',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosTenerife.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosTenerife[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// Datos NC Tenerife (porcentaje)
const datosNCTenerife = [4.68, 3.45, 2.05, 2.50];
const etiquetasNCTenerife = ['2011', '2015', '2019', '2023'];
const partidosNCTenerife = ['NC', 'NC', 'NC', 'NC'];

// Color NC
const colorNCTenerife = '#81C03B';

// Chart
const ctxNCTenerife = document.getElementById('ncTenerifeChart').getContext('2d');

new Chart(ctxNCTenerife, {
  data: {
    labels: etiquetasNCTenerife,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosNCTenerife,
        backgroundColor: 'rgba(129,192,59,0.7)', // verde NC
        borderColor: colorNCTenerife,
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#5B7A2C', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosNCTenerife,
        borderColor: colorNCTenerife,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorNCTenerife
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
      id: 'etiquetaPartidoNCTenerife',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosNCTenerife.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#5B7A2C';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosNCTenerife[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// Datos CS Tenerife (porcentaje)
const datosCSTenerife = [6.08, 7.03, 0.54];
const etiquetasCSTenerife = ['2015', '2019', '2023'];
const partidosCSTenerife = ['CS', 'CS', 'CS'];

// Color CS
const colorCSTenerife = '#FF8C00';

// Chart
const ctxCSTenerife = document.getElementById('csTenerifeChart').getContext('2d');

new Chart(ctxCSTenerife, {
  data: {
    labels: etiquetasCSTenerife,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCSTenerife,
        backgroundColor: 'rgba(255,140,0,0.7)', // naranja CS
        borderColor: colorCSTenerife,
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
        data: datosCSTenerife,
        borderColor: colorCSTenerife,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorCSTenerife
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
      id: 'etiquetaPartidoCSTenerife',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSTenerife.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSTenerife[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// Datos CCN Tenerife (porcentaje)
const datosCCNTenerife = [5.0, 0.98];
const etiquetasCCNTenerife = ['2007', '2015'];
const partidosCCNTenerife = ['CCN','CCN'];

// Color CCN
const colorCCNTenerife = '#B9BD3F';

// Chart
const ctxCCNTenerife = document.getElementById('ccnTenerifeChart').getContext('2d');

new Chart(ctxCCNTenerife, {
  data: {
    labels: etiquetasCCNTenerife,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCCNTenerife,
        backgroundColor: 'rgba(185,189,63,0.7)', // verde-amarillo CCN
        borderColor: colorCCNTenerife,
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#8C8D2F', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCCNTenerife,
        borderColor: colorCCNTenerife,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorCCNTenerife
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
      id: 'etiquetaPartidoCCNTenerife',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCCNTenerife.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8C8D2F';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCCNTenerife[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// Datos UPC Tenerife (porcentaje)
const datosUPCTenerife = [9.8];
const etiquetasUPCTenerife = ['1983'];
const partidosUPCTenerife = ['UPC'];

// Color UPC
const colorUPCTenerife = '#BA0033';

// Chart
const ctxUPCTenerife = document.getElementById('upcTenerifeChart').getContext('2d');

new Chart(ctxUPCTenerife, {
  data: {
    labels: etiquetasUPCTenerife,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosUPCTenerife,
        backgroundColor: 'rgba(186,0,51,0.7)', // rojo UPC
        borderColor: colorUPCTenerife,
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#8B0029', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosUPCTenerife,
        borderColor: colorUPCTenerife,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorUPCTenerife
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
      id: 'etiquetaPartidoUPCTenerife',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPCTenerife.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0029';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPCTenerife[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// Datos CDS Tenerife (porcentaje)
const datosCDSTenerife = [7.2];
const etiquetasCDSTenerife = ['1983'];
const partidosCDSTenerife = ['CDS'];

// Color CDS
const colorCDSTenerife = '#00BFFF';

// Chart
const ctxCDSTenerife = document.getElementById('cdsTenerifeChart').getContext('2d');

new Chart(ctxCDSTenerife, {
  data: {
    labels: etiquetasCDSTenerife,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCDSTenerife,
        backgroundColor: 'rgba(0,191,255,0.7)', // azul CDS
        borderColor: colorCDSTenerife,
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#009ACD', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCDSTenerife,
        borderColor: colorCDSTenerife,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorCDSTenerife
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
      id: 'etiquetaPartidoCDSTenerife',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSTenerife.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#009ACD';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSTenerife[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// Datos IU Tenerife (porcentaje)
const datosIUTenerife = [0.93, 2.6,1.07];
const etiquetasIUTenerife = ['2007', '2015','2019'];
const partidosIUTenerife = ['IU','IU','IU'];

// Color IU
const colorIUTenerife = '#B22222';

// Chart
const ctxIUTenerife = document.getElementById('iuTenerifeChart').getContext('2d');

new Chart(ctxIUTenerife, {
  data: {
    labels: etiquetasIUTenerife,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosIUTenerife,
        backgroundColor: 'rgba(178,34,34,0.7)', // rojo IU
        borderColor: colorIUTenerife,
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
        data: datosIUTenerife,
        borderColor: colorIUTenerife,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorIUTenerife
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
      id: 'etiquetaPartidoIUTenerife',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIUTenerife.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIUTenerife[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// Datos UPyD Tenerife (porcentaje)
const datosUPYDTenerife = [0.91, 0.95];
const etiquetasUPYDTenerife = ['2011', '2015'];
const partidosUPYDTenerife = ['UPyD','UPyD'];

// Color UPyD
const colorUPYDTenerife = '#FF60DA';

// Chart
const ctxUPYDTenerife = document.getElementById('upydTenerifeChart').getContext('2d');

new Chart(ctxUPYDTenerife, {
  data: {
    labels: etiquetasUPYDTenerife,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosUPYDTenerife,
        backgroundColor: 'rgba(255,96,218,0.7)', // color UPyD
        borderColor: colorUPYDTenerife,
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#D946B3', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosUPYDTenerife,
        borderColor: colorUPYDTenerife,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorUPYDTenerife
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
      id: 'etiquetaPartidoUPYDTenerife',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPYDTenerife.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#D946B3';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPYDTenerife[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Datos y colores de partidos de Tenerife =================
const etiquetasTenerife = ['1983','2007','2011','2015','2019','2023'];

// Datos combinados por partido
const datosTenerife = {
  'PSOE': [46.9, 32.21, 20.22, 21.95, 30.13, 27.3],
  'PP': [30.4, 16.54, 25.63, 17.51, 13.5, 18.17],
  'NC': [null, null, 4.68, 3.45, 2.05, 2.50],
  'VOX': [null, null, null, 0.22, 2.34, 7.01],
  'CC': [null, 39.59, 36.61, 27.51, 29.11, 31.17],
  'Podemos': [null, null, null, 13.37, 9.56, 4.17],
  'DVC': [null, null, null, null, null, 4.41],
  'CS': [null, null, null, 6.08, 7.03, 0.54],
  'CCN': [null, 5.0, null, 0.98,null, null],
  'UPC': [9.8, null, null, null, null, null],
  'IU': [null, 0.93, null, 2.6, 1.07, null],
  'CDS': [7.2, null, null, null, null, null],
  'UPyD': [null, null, 0.91, 0.95, null, null]
};

// Colores de cada partido
const coloresTenerife = {
  'PSOE': '#FF0000',
  'PP': '#0000FF',
  'NC': '#81C03B',
  'VOX': '#008000',
  'CC': '#01ADD7',
  'Podemos': '#800080',
  'DVC': '#569871',
  'CS': '#FF8C00',
  'CCN': '#B9BD3F',
  'UPC': '#BA0033',
  'IU': '#B22222',
  'CDS': '#00BFFF',
  'UPyD': '#FF60DA'
};

// Crear datasets para Chart.js
const datasetsTenerife = Object.keys(datosTenerife).map(partido => ({
  type: 'line',
  label: partido,
  data: datosTenerife[partido],
  borderColor: coloresTenerife[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresTenerife[partido],
  datalabels: {
    display: true,
    color: coloresTenerife[partido],
    font: { weight: 'bold', size: 12 },
    formatter: v => v != null ? v.toFixed(2) + '%' : ''
  }
}));

// Crear el gráfico combinado
const ctxTenerife = document.getElementById('tenerifeChart').getContext('2d');

new Chart(ctxTenerife, {
  data: {
    labels: etiquetasTenerife,
    datasets: datasetsTenerife
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