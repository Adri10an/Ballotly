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
// ================= PP Palencia =================
// ================= PP Valladolid =================
// ================= PP Cáceres =================
const datosPPCaceres = [29.11, 25.05, 29.58, 41.42, 41.71, 41.61, 40.24, 47.98, 38.17, 29.47, 40.24,44.02];
const etiquetasPPCaceres = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023','2025'];
const partidosPPCaceres = ['AP-PDP-UL','AP','PP','PP','PP','PP','PP','PP','PP','PP','PP','PP'];

const ctxPPCaceres = document.getElementById('ppCaceresChart').getContext('2d');

new Chart(ctxPPCaceres, {
  data: {
    labels: etiquetasPPCaceres,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPPCaceres,
        backgroundColor: 'rgba(0,0,255,0.7)', // azul intenso
        borderColor: '#0000FF',
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
        data: datosPPCaceres,
        borderColor: '#0000FF',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#0000FF'
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
      id: 'etiquetaPartidoPPCaceres',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPCaceres.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPCaceres[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PSOE Palencia =================
// ================= PSOE Valladolid =================
// ================= PSOE Murcia =================
// ================= PSOE Cáceres =================
const datosPSECaceres = [47.75, 45.42, 51.29, 43.56, 47.23, 49.5, 51.75, 41.36, 38.04, 43.98, 37.69,25.22];
const etiquetasPSECaceres = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023','2025'];
const partidosPSECaceres = ['PSOE','PSOE','PSOE','PSOE','PSOE-PROGR','PSOE-PROGR','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE'];

const ctxPSECaceres = document.getElementById('psoeCaceresChart').getContext('2d');

new Chart(ctxPSECaceres, {
  data: {
    labels: etiquetasPSECaceres,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPSECaceres,
        backgroundColor: 'rgba(255,0,0,0.7)', // rojo PSOE
        borderColor: '#FF0000',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#FF0000', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPSECaceres,
        borderColor: '#FF0000',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#FF0000'
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
      id: 'etiquetaPartidoPSECaceres',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSECaceres.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSECaceres[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= VOX Cáceres =================
const datosVOXCaceres = [0.26, 4.64, 8.42,16.38];
const etiquetasVOXCaceres = ['2015','2019','2023','2025'];
const partidosVOXCaceres = ['VOX','VOX','VOX','VOX'];

const ctxVOXCaceres = document.getElementById('voxCaceresChart').getContext('2d');

new Chart(ctxVOXCaceres, {
  data: {
    labels: etiquetasVOXCaceres,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosVOXCaceres,
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
        data: datosVOXCaceres,
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
      y: { beginAtZero: true, title: { display: true, text: 'Porcentaje (%)', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoVOXCaceres',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXCaceres.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXCaceres[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

  // ================= CS Palencia =================
// ================= CS Valladolid =================
// ================= CS Murcia =================
// ================= Cs Murcia =================
const datosCSMurcia = [5.09, 11.08, 0.82,0.2]; 
const etiquetasCSMurcia = ['2015','2019','2023','2025'];
const partidosCSMurcia = ['CS','CS','CS','CS'];

const ctxCSMurcia = document.getElementById('csMurciaChart').getContext('2d');

new Chart(ctxCSMurcia, {
  data: {
    labels: etiquetasCSMurcia,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCSMurcia,
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
        data: datosCSMurcia,
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
      id: 'etiquetaPartidoCSMurcia',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSMurcia.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSMurcia[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Podemos/IU Cáceres =================
const datosPodemosCaceres = [9.16, 7.79, 6.05,10.09];
const etiquetasPodemosCaceres = ['2015','2019','2023','2025'];
const partidosPodemosCaceres = ['Podemos','UXE','UXE','UXE'];

const ctxPodemosCaceres = document.getElementById('podemosCaceresChart').getContext('2d');

new Chart(ctxPodemosCaceres, {
  data: {
    labels: etiquetasPodemosCaceres,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPodemosCaceres,
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
        data: datosPodemosCaceres,
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
      id: 'etiquetaPartidoPodemosCaceres',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosCaceres.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosCaceres[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosJUEXCaceres = [1.37,0.88];
const etiquetasJUEXCaceres = ['2023','2025'];
const partidosJUEXCaceres = ['JUEX','JUEX'];

const ctxJUEXCaceres = document.getElementById('juexCaceresChart').getContext('2d');

new Chart(ctxJUEXCaceres, {
  data: {
    labels: etiquetasJUEXCaceres,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosJUEXCaceres,
        backgroundColor: 'rgba(47,86,30,0.7)', // #2f561e
        borderColor: '#2f561e',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#2f561e',
          font: { weight: 'bold' },
          formatter: (v) => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosJUEXCaceres,
        borderColor: '#2f561e',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#2f561e'
      }
    ]
  },
  options: {
    responsive: true,
    animation: { duration: 1500, easing: 'easeOutBounce' },
    plugins: {
      legend: {
        position: 'top',
        labels: { color: '#333' }
      },
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
      id: 'etiquetaPartidoJUEXCaceres',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosJUEXCaceres.forEach((_, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#2f561e';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosJUEXCaceres[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosEUCaceres = [16.40, 12.29, 4.52, 5.95, 3.34, 3.52, 0.84, 1.02,0.76];
const etiquetasEUCaceres = ['1983','1987','1991','1995','1999','2003','2015','2019','2025'];
const partidosEUCaceres = ['EU','EU','EU','EU','EU','EU','EU','EU','EU'];

const ctxEUCaceres = document.getElementById('euCaceresChart').getContext('2d');

new Chart(ctxEUCaceres, {
  data: {
    labels: etiquetasEUCaceres,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosEUCaceres,
        backgroundColor: 'rgba(63,123,63,0.7)', // #3f7b3f
        borderColor: '#1c2b16',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#1c2b16',
          font: { weight: 'bold' },
          formatter: (v) => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosEUCaceres,
        borderColor: '#3f7b3f',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#3f7b3f'
      }
    ]
  },
  options: {
    responsive: true,
    animation: { duration: 1500, easing: 'easeOutBounce' },
    plugins: {
      legend: {
        position: 'top',
        labels: { color: '#333' }
      },
      datalabels: { display: true }
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
      id: 'etiquetaPartidoEUCaceres',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosEUCaceres.forEach((_, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#3f7b3f';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosEUCaceres[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CDS Valladolid =================
// ================= CDS Murcia =================
// ================= CDS Murcia =================
const datosCDSMurcia = [2.00, 11.14, 5.49];
const etiquetasCDSMurcia = ['1983','1987','1991'];
const partidosCDSMurcia = ['CDS','CDS','CDS'];

const ctxCDSMurcia = document.getElementById('cdsMurciaChart').getContext('2d');

new Chart(ctxCDSMurcia, {
  data: {
    labels: etiquetasCDSMurcia,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCDSMurcia,
        backgroundColor: 'rgba(0,191,255,0.7)', // azul CDS
        borderColor: '#00BFFF',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#1E90FF', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCDSMurcia,
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
      id: 'etiquetaPartidoCDSMurcia',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSMurcia.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1E90FF';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSMurcia[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosPCECaceres = [3.71];
const etiquetasPCECaceres = ['1983'];
const partidosPCECaceres = ['PCE'];

const ctxPCECaceres = document.getElementById('pceCaceresChart').getContext('2d');

new Chart(ctxPCECaceres, {
  data: {
    labels: etiquetasPCECaceres,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPCECaceres,
        backgroundColor: 'rgba(51,10,12,0.7)', // #330a0c con alpha
        borderColor: '#400b0d',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#400b0d',
          font: { weight: 'bold' },
          formatter: (v) => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPCECaceres,
        borderColor: '#330a0c',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#330a0c'
      }
    ]
  },
  options: {
    responsive: true,
    animation: { duration: 1500, easing: 'easeOutBounce' },
    plugins: {
      legend: {
        position: 'top',
        labels: { color: '#333' }
      },
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
      id: 'etiquetaPartidoPCECaceres',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPCECaceres.forEach((_, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#330a0c';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPCECaceres[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosIUMurcia = [7.53, 10.31, 12.62, 7.10, 5.75, 6.25,7.83,3.41,7.79,6.05,10.09];
const etiquetasIUMurcia = ['1987','1991','1995','1999','2003','2007','2011','2015','2019','2023','2025'];
const partidosIUMurcia = ['IU','IU','IU','IU','IU','IU','IU','IU','IU','IU','IU'];

const ctxIUMurcia = document.getElementById('iuMurciaChart').getContext('2d');

new Chart(ctxIUMurcia, {
  data: {
    labels: etiquetasIUMurcia,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de votos',
        data: datosIUMurcia,
        backgroundColor: 'rgba(178,34,34,0.7)', // rojo IU
        borderColor: '#B22222',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#8B0000', 
          font: { weight: 'bold' }, 
          formatter: (v) => v + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosIUMurcia,
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
      y: { beginAtZero: true, title: { display: true, text: 'Porcentaje', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoIUMurcia',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIUMurcia.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIUMurcia[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UPyD Cáceres =================
const datosUPyDCaceres = [1.17, 0.6];
const etiquetasUPyDCaceres = ['2011','2015'];
const partidosUPyDCaceres = ['UPyD','UPyD'];

const ctxUPyDCaceres = document.getElementById('upydCaceresChart').getContext('2d');

new Chart(ctxUPyDCaceres, {
  data: {
    labels: etiquetasUPyDCaceres,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de votos',
        data: datosUPyDCaceres,
        backgroundColor: 'rgba(255,96,218,0.7)', // color UPyD
        borderColor: '#ff60da',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#ff60da', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosUPyDCaceres,
        borderColor: '#ff60da',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#ff60da'
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
      id: 'etiquetaPartidoUPyDCaceres',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDCaceres.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#ff60da';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDCaceres[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

  // Etiquetas de años
  const etiquetasCaceresTotal = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023','2025'];

  const datosCaceresTotal = {
    'PP':           [29.11, 25.05, 29.58, 41.42, 41.71, 41.61, 40.24, 47.98, 38.17, 29.47, 40.24,44.02],
    'PSOE':         [47.75, 45.42, 51.29, 43.56, 47.23, 49.5, 51.75, 41.36, 38.04, 43.98, 37.69,25.22],
    'VOX':          [null,null,null,null,null,null,null,null,0.26,4.64,8.42,16.38],
    'CS':           [null,null,null,null,null,null,null,null,5.09,11.08,0.82,0.2],
    'UXE':   [null,null,null,null,null,null,null,null,9.16,7.79,6.05,10.09],
    'JUEX':   [null,null,null,null,null,null,null,null,null,null,1.37,0.88],
    'EU':   [16.4,12.29,4.52,5.95,3.34,3.52,null,null,0.84,1.02,null,0.76],
    'CDS':          [2.00,11.14,5.49,null,null,null,null,null,null,null,null],
    'PCE':          [3.71,null,null,null,null,null,null,null,null,null,null],
    'IU':           [null,7.53,10.31,12.62,7.10,5.75,6.25,7.83,3.41,7.79,6.05,10.09],
    'UPyD':         [null,null,null,null,null,null,null,1.17,0.60,null,null],
  };

  const coloresPartidosCaceres = {
    'PP': '#0000FF',
    'PSOE': '#FF0000',
    'VOX': '#008000',
    'CS': '#FF8C00',
    'UXE': '#800080',
    'JUEX': '#2f561e',
    'EU': '#1c2b16',
    'CDS': '#00BFFF',
    'PCE': '#400b0d',
    'IU': '#B22222',
    'UPyD': '#ff60da'
  };

  const datasetsCaceresTotal = Object.keys(datosCaceresTotal).map(partido => ({
    type: 'line',
    label: partido,
    data: datosCaceresTotal[partido],
    borderColor: coloresPartidosCaceres[partido],
    backgroundColor: 'transparent',
    fill: false,
    tension: 0.3,
    spanGaps: true,
    pointRadius: 4,
    pointBackgroundColor: coloresPartidosCaceres[partido],
    datalabels: {
      display: true,
      color: coloresPartidosCaceres[partido],
      font: { weight: 'bold', size: 12 },
      formatter: v => v != null ? v + '%' : ''
    }
  }));

  const ctxCaceresTotal = document.getElementById('caceresChart').getContext('2d');

  new Chart(ctxCaceresTotal, {
    data: {
      labels: etiquetasCaceresTotal,
      datasets: datasetsCaceresTotal
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