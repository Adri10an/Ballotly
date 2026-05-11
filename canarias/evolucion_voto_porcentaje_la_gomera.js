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
// ================= ASG La Gomera (porcentaje) =================

// Datos ASG La Gomera (porcentaje)
const datosASGLaGomera = [42.83, 53.71, 55.21];
const etiquetasASGLaGomera = ['2015', '2019', '2023'];
const partidosASGLaGomera = ['ASG','ASG','ASG'];

// Color ASG
const colorASGLaGomera = '#BF5B5B';

// Chart
const ctxASGLaGomera = document.getElementById('asgLaGomeraChart').getContext('2d');

new Chart(ctxASGLaGomera, {
  data: {
    labels: etiquetasASGLaGomera,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosASGLaGomera,
        backgroundColor: 'rgba(191,91,91,0.7)', 
        borderColor: colorASGLaGomera,
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#8B3A3A', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosASGLaGomera,
        borderColor: colorASGLaGomera,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorASGLaGomera
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
      id: 'etiquetaPartidoASGLaGomera',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosASGLaGomera.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B3A3A';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosASGLaGomera[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PSOE La Gomera (porcentaje) =================

// Datos PSOE La Gomera (porcentaje)
const datosPSOELaGomera = [39.2, 54.79, 44.93, 16.37, 20.75, 18.76];
const etiquetasPSOELaGomera = ['1983', '2007', '2011', '2015', '2019', '2023'];
const partidosPSOELaGomera = ['PSOE','PSOE','PSOE','PSOE','PSOE','PSOE'];

// Color PSOE
const colorPSOELaGomera = '#FF0000';

// Chart
const ctxPSOELaGomera = document.getElementById('psoeLaGomeraChart').getContext('2d');

new Chart(ctxPSOELaGomera, {
  data: {
    labels: etiquetasPSOELaGomera,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPSOELaGomera,
        backgroundColor: 'rgba(255,0,0,0.7)', // rojo PSOE
        borderColor: colorPSOELaGomera,
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
        data: datosPSOELaGomera,
        borderColor: colorPSOELaGomera,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorPSOELaGomera
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
      id: 'etiquetaPartidoPSOELaGomera',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSOELaGomera.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#B22222';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSOELaGomera[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= IXLG La Gomera (porcentaje) =================

// Datos IXLG La Gomera (porcentaje)
const datosIXLGLaGomera = [11.37];
const etiquetasIXLGLaGomera = ['2023'];
const partidosIXLGLaGomera = ['IXLG'];

// Color IXLG
const colorIXLGLaGomera = '#787E61';

// Chart
const ctxIXLGLaGomera = document.getElementById('ixlgLaGomeraChart').getContext('2d');

new Chart(ctxIXLGLaGomera, {
  data: {
    labels: etiquetasIXLGLaGomera,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosIXLGLaGomera,
        backgroundColor: 'rgba(120,126,97,0.7)', 
        borderColor: colorIXLGLaGomera,
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#5E644C', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosIXLGLaGomera,
        borderColor: colorIXLGLaGomera,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 5,
        pointBackgroundColor: colorIXLGLaGomera
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
        suggestedMax: 20,
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
      id: 'etiquetaPartidoIXLGLaGomera',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIXLGLaGomera.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#5E644C';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIXLGLaGomera[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CC La Gomera (porcentaje) =================

// Datos CC La Gomera (porcentaje)
const datosCCLaGomera = [31.86, 20.86, 10.43, 7.81, 7.19];
const etiquetasCCLaGomera = ['2007', '2011', '2015', '2019', '2023'];
const partidosCCLaGomera = ['CC', 'CC', 'CC', 'CC', 'CC'];

// Color CC
const colorCCLaGomera = '#01ADD7';

// Chart
const ctxCCLaGomera = document.getElementById('ccLaGomeraChart').getContext('2d');

new Chart(ctxCCLaGomera, {
  data: {
    labels: etiquetasCCLaGomera,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCCLaGomera,
        backgroundColor: 'rgba(1, 173, 215, 0.7)', // celeste CC
        borderColor: colorCCLaGomera,
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
        data: datosCCLaGomera,
        borderColor: colorCCLaGomera,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorCCLaGomera
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
      id: 'etiquetaPartidoCCLaGomera',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCCLaGomera.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#017A9E';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCCLaGomera[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PP La Gomera (porcentaje) =================

// Datos PP La Gomera (porcentaje)
const datosPPLaGomera = [15.2, 5.02, 24.73, 10.23, 4.33, 4.29];
const etiquetasPPLaGomera = ['1983', '2007', '2011', '2015', '2019', '2023'];
const partidosPPLaGomera = ['PP','PP','PP','PP','PP','PP'];

// Color PP
const colorPPLaGomera = '#0000FF';

// Chart
const ctxPPLaGomera = document.getElementById('ppLaGomeraChart').getContext('2d');

new Chart(ctxPPLaGomera, {
  data: {
    labels: etiquetasPPLaGomera,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPPLaGomera,
        backgroundColor: 'rgba(0,0,255,0.7)', // azul PP
        borderColor: colorPPLaGomera,
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
        data: datosPPLaGomera,
        borderColor: colorPPLaGomera,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorPPLaGomera
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
      id: 'etiquetaPartidoPPLaGomera',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPLaGomera.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPLaGomera[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= VOX La Gomera (porcentaje) =================

// Datos VOX La Gomera (porcentaje)
const datosVOXLaGomera = [2.05];
const etiquetasVOXLaGomera = ['2023'];
const partidosVOXLaGomera = ['VOX'];

// Color VOX
const colorVOXLaGomera = '#008000';

// Chart
const ctxVOXLaGomera = document.getElementById('voxLaGomeraChart').getContext('2d');

new Chart(ctxVOXLaGomera, {
  data: {
    labels: etiquetasVOXLaGomera,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosVOXLaGomera,
        backgroundColor: 'rgba(0,128,0,0.7)', // verde VOX
        borderColor: colorVOXLaGomera,
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
        data: datosVOXLaGomera,
        borderColor: colorVOXLaGomera,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorVOXLaGomera
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
      id: 'etiquetaPartidoVOXLaGomera',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXLaGomera.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXLaGomera[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= NC La Gomera (porcentaje) =================

// Datos NC La Gomera (porcentaje)
const datosNCLaGomera = [4.22, 6.25, 4.09];
const etiquetasNCLaGomera = ['2011', '2015', '2019'];
const partidosNCLaGomera = ['NC','NC','NC'];

// Color NC
const colorNCLaGomera = '#81C03B';

// Chart
const ctxNCLaGomera = document.getElementById('ncLaGomeraChart').getContext('2d');

new Chart(ctxNCLaGomera, {
  data: {
    labels: etiquetasNCLaGomera,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosNCLaGomera,
        backgroundColor: 'rgba(129,192,59,0.7)', // verde NC
        borderColor: colorNCLaGomera,
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
        data: datosNCLaGomera,
        borderColor: colorNCLaGomera,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorNCLaGomera
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
      id: 'etiquetaPartidoNCLaGomera',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosNCLaGomera.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#5B7A2C';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosNCLaGomera[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Podemos La Gomera =================

// Datos Podemos La Gomera (porcentaje)
const datosPodemosLaGomera = [8.73, 6.46];
const etiquetasPodemosLaGomera = ['2015', '2019'];
const partidosPodemosLaGomera = ['Podemos', 'Podemos'];

// Chart
const ctxPodemosLaGomera = document.getElementById('podemosLaGomeraChart').getContext('2d');

new Chart(ctxPodemosLaGomera, {
  data: {
    labels: etiquetasPodemosLaGomera,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPodemosLaGomera,
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
        data: datosPodemosLaGomera,
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
      id: 'etiquetaPartidoPodemosLaGomera',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosLaGomera.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosLaGomera[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CS La Gomera =================

// Datos CS La Gomera (porcentaje)
const datosCSLaGomera = [2.1, 1.6];
const etiquetasCSLaGomera = ['2015', '2019'];
const partidosCSLaGomera = ['CS', 'CS'];

// Chart
const ctxCSLaGomera = document.getElementById('csLaGomeraChart').getContext('2d');

new Chart(ctxCSLaGomera, {
  data: {
    labels: etiquetasCSLaGomera,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCSLaGomera,
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
        data: datosCSLaGomera,
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
      id: 'etiquetaPartidoCSLaGomera',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSLaGomera.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSLaGomera[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CCN La Gomera =================

// Datos CCN La Gomera (porcentaje)
const datosCCNLaGomera = [5.4];
const etiquetasCCNLaGomera = ['2007'];
const partidosCCNLaGomera = ['CCN'];

// Chart
const ctxCCNLaGomera = document.getElementById('ccnLaGomeraChart').getContext('2d');

new Chart(ctxCCNLaGomera, {
  data: {
    labels: etiquetasCCNLaGomera,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCCNLaGomera,
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
        data: datosCCNLaGomera,
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
      id: 'etiquetaPartidoCCNLaGomera',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCCNLaGomera.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8C8D2F';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCCNLaGomera[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= AGI La Gomera =================

// Datos AGI La Gomera (porcentaje)
const datosAGILaGomera = [38.3];
const etiquetasAGILaGomera = ['1983'];
const partidosAGILaGomera = ['AGI'];

// Color AGI
const colorAGILaGomera = '#FFA500';

// Chart
const ctxAGILaGomera = document.getElementById('agiLaGomeraChart').getContext('2d');

new Chart(ctxAGILaGomera, {
  data: {
    labels: etiquetasAGILaGomera,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosAGILaGomera,
        backgroundColor: 'rgba(255,165,0,0.7)', // naranja AGI
        borderColor: colorAGILaGomera,
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#CC8400', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosAGILaGomera,
        borderColor: colorAGILaGomera,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorAGILaGomera
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
      id: 'etiquetaPartidoAGILaGomera',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosAGILaGomera.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#CC8400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosAGILaGomera[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= IU La Gomera =================

// Datos IU La Gomera (porcentaje)
const datosIULaGomera = [1.2, 0.47];
const etiquetasIULaGomera = ['2015', '2019'];
const partidosIULaGomera = ['IU', 'IU'];

// Color IU
const colorIULaGomera = '#B22222';

// Chart
const ctxIULaGomera = document.getElementById('iuLaGomeraChart').getContext('2d');

new Chart(ctxIULaGomera, {
  data: {
    labels: etiquetasIULaGomera,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosIULaGomera,
        backgroundColor: 'rgba(178,34,34,0.7)', // rojo IU
        borderColor: colorIULaGomera,
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
        data: datosIULaGomera,
        borderColor: colorIULaGomera,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorIULaGomera
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
      id: 'etiquetaPartidoIULaGomera',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIULaGomera.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIULaGomera[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UPyD La Gomera =================

// Datos UPyD La Gomera (porcentaje)
const datosUPYDLaGomera = [0.11];
const etiquetasUPYDLaGomera = ['2015'];
const partidosUPYDLaGomera = ['UPyD'];

// Color UPyD
const colorUPYDLaGomera = '#FF60DA';

// Chart
const ctxUPYDLaGomera = document.getElementById('upydLaGomeraChart').getContext('2d');

new Chart(ctxUPYDLaGomera, {
  data: {
    labels: etiquetasUPYDLaGomera,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosUPYDLaGomera,
        backgroundColor: 'rgba(255,96,218,0.7)', // color UPyD
        borderColor: colorUPYDLaGomera,
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
        data: datosUPYDLaGomera,
        borderColor: colorUPYDLaGomera,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorUPYDLaGomera
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
      id: 'etiquetaPartidoUPYDLaGomera',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPYDLaGomera.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#D946B3';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPYDLaGomera[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Datos y colores de partidos de La Gomera =================
const etiquetasLaGomera = ['1983','2007','2011','2015','2019','2023'];

const datosLaGomera = {
  'ASG': [null, null, null, 42.83, 53.71, 55.21],
  'PSOE': [39.2, 54.79, 44.93, 16.37, 20.75, 18.76],
  'IXLG': [null, null, null, null, null, 11.37],
  'CC': [null, 31.86, 20.86, 7.81, 7.19, 7.19],
  'PP': [15.2, 5.02, 24.73, 10.23, 4.33, 4.29],
  'VOX': [null, null, null, null, null, 2.05],
  'NC': [null, null, 4.22, 6.25, 4.09, null],
  'Podemos': [null, null, null, 8.73, 6.46, null],
  'CS': [null, null, null, 2.1, 1.6, null],
  'CCN': [null, 5.4, null, null, null, null],
  'AGI': [38.3, null, null, null, null, null],
  'IU': [null, null, null, 1.2, 0.47, null],
  'UPyD': [null, null, null, 0.11, null, null]
};

const coloresLaGomera = {
  'ASG': '#BF5B5B',
  'PSOE': '#FF0000',
  'IXLG': '#787E61',
  'CC': '#01ADD7',
  'PP': '#0000FF',
  'VOX': '#008000',
  'NC': '#81C03B',
  'Podemos': '#800080',
  'CS': '#FF8C00',
  'CCN': '#B9BD3F',
  'AGI': '#FFA500',
  'IU': '#B22222',
  'UPyD': '#FF60DA'
};

// Crear datasets para Chart.js
const datasetsLaGomera = Object.keys(datosLaGomera).map(partido => ({
  type: 'line',
  label: partido,
  data: datosLaGomera[partido],
  borderColor: coloresLaGomera[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresLaGomera[partido],
  datalabels: {
    display: true,
    color: coloresLaGomera[partido],
    font: { weight: 'bold', size: 12 },
    formatter: v => v != null ? v.toFixed(2) + '%' : ''
  }
}));

// Crear el gráfico combinado
const ctxLaGomera = document.getElementById('laGomeraChart').getContext('2d');

new Chart(ctxLaGomera, {
  data: {
    labels: etiquetasLaGomera,
    datasets: datasetsLaGomera
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