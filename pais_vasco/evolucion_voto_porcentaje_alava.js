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
// ================= EHBILDU Álava =================
const datosEHBilduAlava = [14.15, 10.86, 12.88, 12.81, 10.25, 12.22, 6.18, 21.74, 17.93, 24.87, 29.18];
const etiquetasEHBilduAlava = ['1980','1984','1986','1990','1994','1998','2001','2012','2016','2020','2024'];
const partidosEHBilduAlava = ['HB','HB','HB','HB','HB','EH','EH','EHBildu','EHBildu','EHBildu','EHBildu'];

const ctxEHBilduAlava = document.getElementById('ehbilduAlavaChart').getContext('2d');

new Chart(ctxEHBilduAlava, {
  data: {
    labels: etiquetasEHBilduAlava,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosEHBilduAlava,
        backgroundColor: '#01B59C', 
        borderColor: '#01B59C',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#007F6F',
          font: { weight: 'bold' },
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosEHBilduAlava,
        borderColor: '#01B59C',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#01B59C'
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
      id: 'etiquetaEHBilduAlava',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosEHBilduAlava.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#007F6F';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosEHBilduAlava[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PNV Álava =================
const datosPNVAlava = [30.23, 35.77, 20.20, 22.49, 22.11, 21.94, 33.85, 30.67, 30.38, 25.51, 28.22, 32.21, 26.75];
const etiquetasPNVAlava = ['1980','1984','1986','1990','1994','1998','2001','2005','2009','2012','2016','2020','2024'];
const partidosPNVAlava = ['PNV','PNV','PNV','PNV','PNV','PNV','PNV','PNV','PNV','PNV','PNV','PNV','PNV'];

const ctxPNVAlava = document.getElementById('pnvAlavaChart').getContext('2d');

new Chart(ctxPNVAlava, {
  data: {
    labels: etiquetasPNVAlava,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPNVAlava,
        backgroundColor: '#298242',
        borderColor: '#298242',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#1E5E31',
          font: { weight: 'bold' },
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPNVAlava,
        borderColor: '#298242',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#298242'
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
      id: 'etiquetaPNVAlava',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPNVAlava.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1E5E31';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPNVAlava[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PSOE Álava =================
const datosPSOEAlava = [14.04, 25.26, 25.02, 21.34, 15.84, 17.04, 20.61, 25.49, 31.54, 19.30, 12.99, 15.64, 16.19];
const etiquetasPSOEAlava = ['1980','1984','1986','1990','1994','1998','2001','2005','2009','2012','2016','2020','2024'];
const partidosPSOEAlava = ['PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE'];

const ctxPSOEAlava = document.getElementById('psoeAlavaChart').getContext('2d');

new Chart(ctxPSOEAlava, {
  data: {
    labels: etiquetasPSOEAlava,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPSOEAlava,
        backgroundColor: 'rgba(255,0,0,0.7)', // rojo PSOE
        borderColor: '#FF0000',
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
        data: datosPSOEAlava,
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
      id: 'etiquetaPartidoPSOEAlava',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSOEAlava.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#B22222';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSOEAlava[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PP Álava =================
const datosPPAlava = [5.76, 16.35, 6.89, 10.92, 16.18, 27.02, 32.75, 32.75, 21.36, 18.68, 18.58, 11.51, 15.88];
const etiquetasPPAlava = ['1980','1984','1986','1990','1994','1998','2001','2005','2009','2012','2016','2020','2024'];
const partidosPPAlava = ['PP','PP','PP','PP','PP','PP','PP','PP','PP','PP','PP','PP','PP'];

const ctxPPAlava = document.getElementById('ppAlavaChart').getContext('2d');

new Chart(ctxPPAlava, {
  data: {
    labels: etiquetasPPAlava,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPPAlava,
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
        data: datosPPAlava,
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
      id: 'etiquetaPartidoPPAlava',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPAlava.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPAlava[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= VOX Álava =================
const datosVOXAlava = [0.51, 3.81, 3.67];
const etiquetasVOXAlava = ['2016','2020','2024'];
const partidosVOXAlava = ['VOX','VOX','VOX'];

const ctxVOXAlava = document.getElementById('voxAlavaChart').getContext('2d');

new Chart(ctxVOXAlava, {
  data: {
    labels: etiquetasVOXAlava,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosVOXAlava,
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
        data: datosVOXAlava,
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
      id: 'etiquetaPartidoVOXAlava',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXAlava.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXAlava[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Podemos Álava =================
const datosPodemosAlava = [16.22, 8.11, 2.38];
const etiquetasPodemosAlava = ['2016','2020','2024'];
const partidosPodemosAlava = ['Podemos','Podemos','Podemos'];

const ctxPodemosAlava = document.getElementById('podemosAlavaChart').getContext('2d');

new Chart(ctxPodemosAlava, {
  data: {
    labels: etiquetasPodemosAlava,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPodemosAlava,
        backgroundColor: 'rgba(128,0,128,0.7)', // morado Podemos
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
        data: datosPodemosAlava,
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
      id: 'etiquetaPartidoPodemosAlava',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosAlava.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosAlava[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= SUMAR Álava =================
const datosSumarAlava = [3.66];
const etiquetasSumarAlava = ['2024'];
const partidosSumarAlava = ['Sumar'];

const ctxSumarAlava = document.getElementById('sumarAlavaChart').getContext('2d');

new Chart(ctxSumarAlava, {
  data: {
    labels: etiquetasSumarAlava,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosSumarAlava,
        backgroundColor: '#FF69B4', // rosa Sumar
        borderColor: '#FF69B4',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#C71585',
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosSumarAlava,
        borderColor: '#FF69B4',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#FF69B4'
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
      id: 'etiquetaPartidoSumarAlava',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosSumarAlava.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#C71585';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosSumarAlava[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CS Álava =================
const datosCSAlava = [3.19];
const etiquetasCSAlava = ['2016'];
const partidosCSAlava = ['CS'];

const ctxCSAlava = document.getElementById('csAlavaChart').getContext('2d');

new Chart(ctxCSAlava, {
  data: {
    labels: etiquetasCSAlava,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCSAlava,
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
        data: datosCSAlava,
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
      id: 'etiquetaPartidoCSAlava',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSAlava.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSAlava[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= ARALAR Álava =================
const datosAralarAlava = [1.50, 4.39];
const etiquetasAralarAlava = ['2005','2009'];
const partidosAralarAlava = ['Aralar','Aralar'];

const ctxAralarAlava = document.getElementById('aralarAlavaChart').getContext('2d');

new Chart(ctxAralarAlava, {
  data: {
    labels: etiquetasAralarAlava,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosAralarAlava,
        backgroundColor: '#692D3E', // color Aralar semi-transparente
        borderColor: '#692D3E',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#4A1F2C',
          font: { weight: 'bold' },
          formatter: (v) => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosAralarAlava,
        borderColor: '#692D3E',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#692D3E'
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
      id: 'etiquetaPartidoAralarAlava',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosAralarAlava.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4A1F2C';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosAralarAlava[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PCTV-EHAK Álava =================
const datosPCTVAlava = [8.37];
const etiquetasPCTVAlava = ['2005'];
const partidosPCTVAlava = ['PCTV-EHAK'];

const ctxPCTVAlava = document.getElementById('pctvAlavaChart').getContext('2d');

new Chart(ctxPCTVAlava, {
  data: {
    labels: etiquetasPCTVAlava,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPCTVAlava,
        backgroundColor: '#9C231B', // rojo oscuro PCTV-EHAK
        borderColor: '#9C231B',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#6E1A15',
          font: { weight: 'bold' },
          formatter: (v) => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPCTVAlava,
        borderColor: '#9C231B',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#9C231B'
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
      id: 'etiquetaPartidoPCTVAlava',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPCTVAlava.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#6E1A15';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPCTVAlava[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= EB Álava =================
const datosEBAlava = [0.31, 1.15, 9.23, 5.71, 5.97, 4.96, 3.35];
const etiquetasEBAlava = ['1986','1990','1994','1998','2001','2005','2009'];
const partidosEBAlava = ['EB','EB','EB','EB','EB','EB','EB'];

const ctxEBAlava = document.getElementById('ebAlavaChart').getContext('2d');

new Chart(ctxEBAlava, {
  data: {
    labels: etiquetasEBAlava,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosEBAlava,
        backgroundColor: '#D25644', // color EB semi-transparente
        borderColor: '#D25644',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#A93F32',
          font: { weight: 'bold' },
          formatter: (v) => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosEBAlava,
        borderColor: '#D25644',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#D25644'
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
      id: 'etiquetaPartidoEBAlava',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosEBAlava.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#A93F32';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosEBAlava[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UA Álava =================
const datosUAAlava = [11.14, 18.83, 8.50, 2.22];
const etiquetasUAAlava = ['1990','1994','1998','2005'];
const partidosUAAlava = ['UA','UA','UA','UA'];

const ctxUAAlava = document.getElementById('uaAlavaChart').getContext('2d');

new Chart(ctxUAAlava, {
  data: {
    labels: etiquetasUAAlava,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosUAAlava,
        backgroundColor: '#AE6293', // UA color semi-transparente
        borderColor: '#AE6293',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#7E456B',
          font: { weight: 'bold' },
          formatter: (v) => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosUAAlava,
        borderColor: '#AE6293',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#AE6293'
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
      id: 'etiquetaPartidoUAAlava',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUAAlava.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#7E456B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUAAlava[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= EA Álava =================
const datosEAAlava = [14.63, 8.20, 7.36, 6.37, 3.50];
const etiquetasEAAlava = ['1986','1990','1994','1998','2009'];
const partidosEAAlava = ['EA','EA','EA','EA','EA'];

const ctxEAAlava = document.getElementById('eaAlavaChart').getContext('2d');

new Chart(ctxEAAlava, {
  data: {
    labels: etiquetasEAAlava,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosEAAlava,
        backgroundColor: '#298242', // verde EA
        borderColor: '#298242',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#1E5E31',
          font: { weight: 'bold' },
          formatter: (v) => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosEAAlava,
        borderColor: '#298242',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#298242'
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
      id: 'etiquetaPartidoEAAlava',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosEAAlava.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1E5E31';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosEAAlava[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= EE Álava =================
const datosEEAlava = [9.23, 7.73, 10.98, 6.76];
const etiquetasEEAlava = ['1980','1984','1986','1990'];
const partidosEEAlava = ['EE','EE','EE','EE'];

const ctxEEAlava = document.getElementById('eeAlavaChart').getContext('2d');

new Chart(ctxEEAlava, {
  data: {
    labels: etiquetasEEAlava,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosEEAlava,
        backgroundColor: '#DC143C', // crimson EE
        borderColor: '#DC143C',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#8B0A1A',
          font: { weight: 'bold' },
          formatter: (v) => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosEEAlava,
        borderColor: '#DC143C',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#DC143C'
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
      id: 'etiquetaPartidoEEAlava',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosEEAlava.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0A1A';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosEEAlava[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UCD Álava =================
const datosUCDAlava = [19.79];
const etiquetasUCDAlava = ['1980'];
const partidosUCDAlava = ['UCD'];

const ctxUCDAlava = document.getElementById('ucdAlavaChart').getContext('2d');

new Chart(ctxUCDAlava, {
  data: {
    labels: etiquetasUCDAlava,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosUCDAlava,
        backgroundColor: '#FFA500', // naranja UCD
        borderColor: '#FFA500',
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
        data: datosUCDAlava,
        borderColor: '#FFA500',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#FFA500'
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
      id: 'etiquetaPartidoUCDAlava',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUCDAlava.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#CC8400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUCDAlava[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CDS Álava =================
const datosCDSAlava = [8.05, 1.93];
const etiquetasCDSAlava = ['1986','1990'];
const partidosCDSAlava = ['CDS','CDS'];

const ctxCDSAlava = document.getElementById('cdsAlavaChart').getContext('2d');

new Chart(ctxCDSAlava, {
  data: {
    labels: etiquetasCDSAlava,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCDSAlava,
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
        data: datosCDSAlava,
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
      id: 'etiquetaPartidoCDSAlava',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSAlava.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1E90FF';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSAlava[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UPyD Álava =================
const datosUPyDAlava = [3.98, 3.47];
const etiquetasUPyDAlava = ['2009','2012'];
const partidosUPyDAlava = ['UPyD','UPyD'];

const ctxUPyDAlava = document.getElementById('upydAlavaChart').getContext('2d');

new Chart(ctxUPyDAlava, {
  data: {
    labels: etiquetasUPyDAlava,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosUPyDAlava,
        backgroundColor: 'rgba(255,96,218,0.7)', // magenta UPyD
        borderColor: '#FF60DA',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end',
          align: 'top',
          color: '#FF1493',
          font: { weight: 'bold' },
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosUPyDAlava,
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
      y: { beginAtZero: true, title: { display: true, text: 'Porcentaje (%)', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoUPyDAlava',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDAlava.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF1493';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDAlava[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= ETIQUETAS (TODOS LOS AÑOS) =================
const etiquetasAlava = [
  '1980','1984','1986','1990',
  '1994','1998','2001','2005',
  '2009','2012','2016','2020','2024'
];

// ================= DATOS POR PARTIDO EN ÁLAVA =================
const datosAlava = {
  'EH Bildu / HB / EH': [14.15,10.86,12.88,12.81,10.25,12.22,6.18,null,null,21.74,17.93,24.87,29.18],
  'PNV':                 [30.23,35.77,20.20,22.49,22.11,21.94,33.85,30.67,30.38,25.51,8.22,32.21,26.75],
  'PSOE':                [14.04,25.26,25.02,21.34,15.84,17.04,20.61,25.49,31.54,19.30,12.99,15.64,16.19],
  'PP':                  [5.76,16.35,6.89,10.92,16.18,27.02,32.75,32.75,21.36,18.68,18.58,11.51,15.88],
  'VOX':                 [null,null,null,null,null,null,null,null,null,null,0.51,3.81,3.67],
  'Podemos':             [null,null,null,null,null,null,null,null,null,null,16.22,8.11,2.38],
  'Sumar':               [null,null,null,null,null,null,null,null,null,null,null,null,3.66],
  'Ciudadanos (CS)':     [null,null,null,null,null,null,null,null,null,null,3.19,null,null],
  'Aralar':              [null,null,null,null,null,null,null,1.50,4.39,null,null,null,null],
  'PCTV-EHAK':           [null,null,null,null,null,null,null,8.37,null,null,null,null,null],
  'EB':                  [null,null,0.31,1.15,9.23,5.71,5.97,4.96,3.35,null,null,null,null],
  'Unidad Alavesa (UA)': [null,null,null,11.14,18.83,8.50,null,2.22,null,null,null,null,null],
  'EA':                  [null,null,14.63,8.20,7.36,6.37,null,null,3.50,null,null,null,null],
  'EE':                  [9.23,7.73,10.98,6.76,null,null,null,null,null,null,null,null,null],
  'UCD':                 [19.79,null,null,null,null,null,null,null,null,null,null,null,null],
  'CDS':                 [null,null,8.05,1.93,null,null,null,null,null,null,null,null,null],
  'UPyD':                [null,null,null,null,null,null,null,null,3.98,3.47,null,null,null]
};

// ================= COLORES OFICIALES =================
const coloresPartidosAlava = {
  'EH Bildu / HB / EH': '#01B59C',
  'PNV':                 '#298242',
  'PSOE':                '#FF0000',
  'PP':                  '#0000FF',
  'VOX':                 '#008000',
  'Podemos':             '#800080',
  'Sumar':               '#FF69B4',
  'Ciudadanos (CS)':     '#FF8C00',
  'Aralar':              '#692D3E',
  'PCTV-EHAK':           '#9C231B',
  'EB':                  '#D25644',
  'Unidad Alavesa (UA)': '#AE6293',
  'EA':                  '#298242',
  'EE':                  '#DC143C',
  'UCD':                 '#FFA500',
  'CDS':                 '#00BFFF',
  'UPyD':                '#FF60DA'
};

// ================= CREAR DATASETS =================
const datasetsAlava = Object.keys(datosAlava).map(partido => ({
  type: 'line',
  label: partido,
  data: datosAlava[partido],
  borderColor: coloresPartidosAlava[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresPartidosAlava[partido],
  datalabels: {
    display: true,
    color: coloresPartidosAlava[partido],
    font: { weight: 'bold', size: 11 },
    formatter: v => v != null ? v.toFixed(2) + '%' : ''
  }
}));

// ================= CREAR EL GRÁFICO =================
const ctxAlava = document.getElementById('alavaChart').getContext('2d');

new Chart(ctxAlava, {
  data: {
    labels: etiquetasAlava,
    datasets: datasetsAlava
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