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
// Datos PSOE Gran Canaria (porcentaje)
const datosPSOEGranCanaria = [39.0, 37.85, 21.09, 17.49, 28.23, 28.04];
const etiquetasPSOEGranCanaria = ['1983', '2007', '2011', '2015', '2019', '2023'];
const partidosPSOEGranCanaria = ['PSOE','PSOE','PSOE','PSOE','PSOE','PSOE'];

// Color PSOE
const colorPSOEGranCanaria = '#FF0000';

// Chart
const ctxPSOEGranCanaria = document.getElementById('psoeGranCanariaChart').getContext('2d');

new Chart(ctxPSOEGranCanaria, {
  data: {
    labels: etiquetasPSOEGranCanaria,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPSOEGranCanaria,
        backgroundColor: 'rgba(255,0,0,0.7)', // rojo PSOE
        borderColor: colorPSOEGranCanaria,
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
        data: datosPSOEGranCanaria,
        borderColor: colorPSOEGranCanaria,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorPSOEGranCanaria
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
      id: 'etiquetaPartidoPSOEGranCanaria',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSOEGranCanaria.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#B22222';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSOEGranCanaria[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// Datos PP Gran Canaria (porcentaje)
const datosPPGranCanaria = [28.3, 34.19, 41.35, 20.35, 16.54, 21.35];
const etiquetasPPGranCanaria = ['1983', '2007', '2011', '2015', '2019', '2023'];
const partidosPPGranCanaria = ['PP','PP','PP','PP','PP','PP'];

// Color PP
const colorPPGranCanaria = '#0000FF';

// Chart
const ctxPPGranCanaria = document.getElementById('ppGranCanariaChart').getContext('2d');

new Chart(ctxPPGranCanaria, {
  data: {
    labels: etiquetasPPGranCanaria,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPPGranCanaria,
        backgroundColor: 'rgba(0,0,255,0.7)', // azul intenso (PP)
        borderColor: colorPPGranCanaria,
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
        data: datosPPGranCanaria,
        borderColor: colorPPGranCanaria,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorPPGranCanaria
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
      id: 'etiquetaPartidoPPGranCanaria',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPGranCanaria.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPGranCanaria[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// Datos NC Gran Canaria (porcentaje)
const datosNCGranCanaria = [11.75, 14.27, 18.43, 17.49, 14.57];
const etiquetasNCGranCanaria = ['2007', '2011', '2015', '2019', '2023'];
const partidosNCGranCanaria = ['NC','NC','NC','NC','NC'];

// Color NC
const colorNCGranCanaria = '#81C03B';

// Chart
const ctxNCGranCanaria = document.getElementById('ncGranCanariaChart').getContext('2d');

new Chart(ctxNCGranCanaria, {
  data: {
    labels: etiquetasNCGranCanaria,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosNCGranCanaria,
        backgroundColor: 'rgba(129,192,59,0.7)', // verde NC
        borderColor: colorNCGranCanaria,
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
        data: datosNCGranCanaria,
        borderColor: colorNCGranCanaria,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorNCGranCanaria
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
      id: 'etiquetaPartidoNCGranCanaria',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosNCGranCanaria.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#5B7A2C';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosNCGranCanaria[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// Datos VOX Gran Canaria (porcentaje)
const datosVOXGranCanaria = [0.26, 2.7, 9.92];
const etiquetasVOXGranCanaria = ['2015', '2019', '2023'];
const partidosVOXGranCanaria = ['VOX', 'VOX', 'VOX'];

// Color VOX
const colorVOXGranCanaria = '#008000';

// Chart
const ctxVOXGranCanaria = document.getElementById('voxGranCanariaChart').getContext('2d');

new Chart(ctxVOXGranCanaria, {
  data: {
    labels: etiquetasVOXGranCanaria,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosVOXGranCanaria,
        backgroundColor: 'rgba(0,128,0,0.7)', // verde VOX
        borderColor: colorVOXGranCanaria,
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
        data: datosVOXGranCanaria,
        borderColor: colorVOXGranCanaria,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorVOXGranCanaria
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
      id: 'etiquetaPartidoVOXGranCanaria',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXGranCanaria.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXGranCanaria[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// Datos CC Gran Canaria (porcentaje)
const datosCCGranCanaria = [5.41, 9.25, 6.25, 11.66, 9.29];
const etiquetasCCGranCanaria = ['2007', '2011', '2015', '2019', '2023'];
const partidosCCGranCanaria = ['CC', 'CC', 'CC', 'CC', 'CC'];

// Color CC
const colorCCGranCanaria = '#01ADD7';

// Chart
const ctxCCGranCanaria = document.getElementById('ccGranCanariaChart').getContext('2d');

new Chart(ctxCCGranCanaria, {
  data: {
    labels: etiquetasCCGranCanaria,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCCGranCanaria,
        backgroundColor: 'rgba(1, 173, 215, 0.7)', // celeste CC
        borderColor: colorCCGranCanaria,
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
        data: datosCCGranCanaria,
        borderColor: colorCCGranCanaria,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorCCGranCanaria
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
      id: 'etiquetaPartidoCCGranCanaria',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCCGranCanaria.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#017A9E';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCCGranCanaria[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// Datos UXGC Gran Canaria (porcentaje)
const datosUXGCGranCanaria = [4.67];
const etiquetasUXGCGranCanaria = ['2023'];
const partidosUXGCGranCanaria = ['UXGC'];

// Color UXGC
const colorUXGCGranCanaria = '#24611'; // color proporcionado

// Chart
const ctxUXGCGranCanaria = document.getElementById('uxgcGranCanariaChart').getContext('2d');

new Chart(ctxUXGCGranCanaria, {
  data: {
    labels: etiquetasUXGCGranCanaria,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosUXGCGranCanaria,
        backgroundColor: 'rgba(36, 96, 17, 0.7)', // color UXGC
        borderColor: colorUXGCGranCanaria,
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#1F5013', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosUXGCGranCanaria,
        borderColor: colorUXGCGranCanaria,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorUXGCGranCanaria
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
      id: 'etiquetaPartidoUXGCGranCanaria',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUXGCGranCanaria.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1F5013';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUXGCGranCanaria[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Podemos Gran Canaria =================
const datosPodemosGranCanaria = [17.03, 8.93, 4.14];
const etiquetasPodemosGranCanaria = ['2015', '2019', '2023'];
const partidosPodemosGranCanaria = ['Podemos', 'Podemos', 'Podemos'];

const ctxPodemosGranCanaria = document.getElementById('podemosGranCanariaChart').getContext('2d');

new Chart(ctxPodemosGranCanaria, {
  data: {
    labels: etiquetasPodemosGranCanaria,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPodemosGranCanaria,
        backgroundColor: 'rgba(128, 0, 128, 0.7)', // morado Podemos
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
        data: datosPodemosGranCanaria,
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
      id: 'etiquetaPartidoPodemosGranCanaria',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosGranCanaria.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosGranCanaria[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= DVC Gran Canaria =================
const datosDVCGranCanaria = [2.07];
const etiquetasDVCGranCanaria = ['2023'];
const partidosDVCGranCanaria = ['DVC'];

const ctxDVCGranCanaria = document.getElementById('dvcGranCanariaChart').getContext('2d');

new Chart(ctxDVCGranCanaria, {
  data: {
    labels: etiquetasDVCGranCanaria,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosDVCGranCanaria,
        backgroundColor: 'rgba(86, 152, 113, 0.7)', // color DVC
        borderColor: '#569871',
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
        data: datosDVCGranCanaria,
        borderColor: '#569871',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#569871'
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
      id: 'etiquetaPartidoDVCGranCanaria',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosDVCGranCanaria.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#3B6B51';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosDVCGranCanaria[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CS Gran Canaria =================
const datosCSGranCanaria = [6.29, 8.87, 0.37];
const etiquetasCSGranCanaria = ['2015', '2019', '2023'];
const partidosCSGranCanaria = ['CS', 'CS', 'CS'];

const ctxCSGranCanaria = document.getElementById('csGranCanariaChart').getContext('2d');

new Chart(ctxCSGranCanaria, {
  data: {
    labels: etiquetasCSGranCanaria,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCSGranCanaria,
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
        data: datosCSGranCanaria,
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
      id: 'etiquetaPartidoCSGranCanaria',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSGranCanaria.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSGranCanaria[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CCN Gran Canaria =================
const datosCCNGranCanaria = [9.2, 3.2];
const etiquetasCCNGranCanaria = ['1983', '2007'];
const partidosCCNGranCanaria = ['CCN', 'CCN'];

const ctxCCNGranCanaria = document.getElementById('ccnGranCanariaChart').getContext('2d');

new Chart(ctxCCNGranCanaria, {
  data: {
    labels: etiquetasCCNGranCanaria,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCCNGranCanaria,
        backgroundColor: 'rgba(185,189,63,0.7)', // verde-amarillo CCN
        borderColor: '#B9BD3F',
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
        data: datosCCNGranCanaria,
        borderColor: '#B9BD3F',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#B9BD3F'
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
      id: 'etiquetaPartidoCCNGranCanaria',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCCNGranCanaria.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8C8D2F';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCCNGranCanaria[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UPC Gran Canaria =================
const datosUPCGranCanaria = [9.5];
const etiquetasUPCGranCanaria = ['1983'];
const partidosUPCGranCanaria = ['UPC'];

const ctxUPCGranCanaria = document.getElementById('upcGranCanariaChart').getContext('2d');

new Chart(ctxUPCGranCanaria, {
  data: {
    labels: etiquetasUPCGranCanaria,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosUPCGranCanaria,
        backgroundColor: 'rgba(186,0,51,0.7)', // rojo UPC
        borderColor: '#BA0033',
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
        data: datosUPCGranCanaria,
        borderColor: '#BA0033',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#BA0033'
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
      id: 'etiquetaPartidoUPCGranCanaria',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPCGranCanaria.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0029';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPCGranCanaria[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= IU Gran Canaria =================
const datosIUGranCanaria = [0.55, 1.39, 1.87, 0.72];
const etiquetasIUGranCanaria = ['2007', '2011', '2015', '2019'];
const partidosIUGranCanaria = ['IU', 'IU', 'IU', 'IU'];

const ctxIUGranCanaria = document.getElementById('iuGranCanariaChart').getContext('2d');

new Chart(ctxIUGranCanaria, {
  data: {
    labels: etiquetasIUGranCanaria,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosIUGranCanaria,
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
        data: datosIUGranCanaria,
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
      id: 'etiquetaPartidoIUGranCanaria',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIUGranCanaria.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIUGranCanaria[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CDS Gran Canaria =================
const datosCDSGranCanaria = [5.3];
const etiquetasCDSGranCanaria = ['1983'];
const partidosCDSGranCanaria = ['CDS'];

const ctxCDSGranCanaria = document.getElementById('cdsGranCanariaChart').getContext('2d');

new Chart(ctxCDSGranCanaria, {
  data: {
    labels: etiquetasCDSGranCanaria,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCDSGranCanaria,
        backgroundColor: 'rgba(0,191,255,0.7)', // color CDS
        borderColor: '#00BFFF',
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
        data: datosCDSGranCanaria,
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
      id: 'etiquetaPartidoCDSGranCanaria',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSGranCanaria.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#009ACD';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSGranCanaria[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UPyD Gran Canaria =================
const datosUPYDGranCanaria = [1.17, 0.93];
const etiquetasUPYDGranCanaria = ['2011', '2015'];
const partidosUPYDGranCanaria = ['UPyD', 'UPyD'];

const ctxUPYDGranCanaria = document.getElementById('upydGranCanariaChart').getContext('2d');

new Chart(ctxUPYDGranCanaria, {
  data: {
    labels: etiquetasUPYDGranCanaria,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosUPYDGranCanaria,
        backgroundColor: 'rgba(255,96,218,0.7)', // color UPyD
        borderColor: '#FF60DA',
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
        data: datosUPYDGranCanaria,
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
      id: 'etiquetaPartidoUPYDGranCanaria',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPYDGranCanaria.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#D946B3';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPYDGranCanaria[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Datos y colores de partidos de Gran Canaria =================
const etiquetasGranCanaria = ['1983','2007','2011','2015','2019','2023'];

// Datos combinados por partido
const datosGranCanaria = {
  'PSOE': [39.0, 37.85, 21.09, 17.49, 28.23, 28.04],
  'PP': [28.3, 34.19, 41.35, 20.35, 16.54, 21.35],
  'NC': [null, 11.75, 14.27, 18.43, 17.49, 14.57],
  'VOX': [null, null, null, 0.26, 2.7, 9.92],
  'CC': [null, 5.41, 9.25, 6.25, 11.66, 9.29],
  'UXGC': [null, null, null, null, null, 4.67],
  'Podemos': [null, null, null, 17.03, 8.93, 4.14],
  'DVC': [null, null, null, null, null, 2.07],
  'CS': [null, null, null, 6.29, 8.87, 0.37],
  'CCN': [9.2, 3.2, null, null, null, null],
  'UPC': [9.5, null, null, null, null, null],
  'IU': [null,0.55, 1.39, 1.87, 0.72,null],
  'CDS': [5.3, null, null, null, null, null],
  'UPyD': [null, null, 1.17, 0.93, null, null]
};

// Colores de cada partido
const coloresGranCanaria = {
  'PSOE': '#FF0000',
  'PP': '#0000FF',
  'NC': '#81C03B',
  'VOX': '#008000',
  'CC': '#01ADD7',
  'UXGC': '#24611',
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
const datasetsGranCanaria = Object.keys(datosGranCanaria).map(partido => ({
  type: 'line',
  label: partido,
  data: datosGranCanaria[partido],
  borderColor: coloresGranCanaria[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresGranCanaria[partido],
  datalabels: {
    display: true,
    color: coloresGranCanaria[partido],
    font: { weight: 'bold', size: 12 },
    formatter: v => v != null ? v.toFixed(2) + '%' : ''
  }
}));

// Crear el gráfico combinado
const ctxGranCanaria = document.getElementById('granCanariaChart').getContext('2d');

new Chart(ctxGranCanaria, {
  data: {
    labels: etiquetasGranCanaria,
    datasets: datasetsGranCanaria
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