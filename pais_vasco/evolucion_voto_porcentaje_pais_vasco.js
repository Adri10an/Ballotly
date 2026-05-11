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

// ================= PNV Euskadi =================
const datosPNVEuskadi = [38.1, 42.01, 23.71, 28.49, 29.84, 28.01, 42.72, 38.67, 38.14, 34.16, 37.36, 39.07, 34.82];
const etiquetasPNVEuskadi = ['1980','1984','1986','1990','1994','1998','2001','2005','2009','2012','2016','2020','2024'];
const partidosPNVEuskadi = ['PNV','PNV','PNV','PNV','PNV','PNV','PNV','PNV','PNV','PNV','PNV','PNV','PNV'];

const ctxPNVEuskadi = document.getElementById('pnvEuskadiChart').getContext('2d');

new Chart(ctxPNVEuskadi, {
  data: {
    labels: etiquetasPNVEuskadi,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPNVEuskadi,
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
        data: datosPNVEuskadi,
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
      id: 'etiquetaPNVEuskadi',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPNVEuskadi.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1E5E31';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPNVEuskadi[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= EHBildu Euskadi =================
const datosEHBilduEuskadi = [16.55, 14.65, 17.47, 18.33, 16.29, 17.91, 10.12, 24.67, 21.13, 27.86, 32.13];
const etiquetasEHBilduEuskadi = ['1980','1984','1986','1990','1994','1998','2001','2012','2016','2020','2024'];
const partidosEHBilduEuskadi = ['HB','HB','HB','HB','HB','EH','EH','EHBildu','EHBildu','EHBildu','EHBildu'];

const ctxEHBilduEuskadi = document.getElementById('ehbilduEuskadiChart').getContext('2d');

new Chart(ctxEHBilduEuskadi, {
  data: {
    labels: etiquetasEHBilduEuskadi,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosEHBilduEuskadi,
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
        data: datosEHBilduEuskadi,
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
      id: 'etiquetaEHBilduEuskadi',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosEHBilduEuskadi.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#007F6F';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosEHBilduEuskadi[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PSOE Euskadi =================
const datosPSOEEuskadi = [14.21, 23.07, 22.05, 19.94, 17.13, 17.60, 17.90, 22.68, 30.36, 18.89, 11.86, 13.65, 14.09];
const etiquetasPSOEEuskadi = ['1980','1984','1986','1990','1994','1998','2001','2005','2009','2012','2016','2020','2024'];
const partidosPSOEEuskadi = ['PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE'];

const ctxPSOEEuskadi = document.getElementById('psoeEuskadiChart').getContext('2d');

new Chart(ctxPSOEEuskadi, {
  data: {
    labels: etiquetasPSOEEuskadi,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPSOEEuskadi,
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
        data: datosPSOEEuskadi,
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
      id: 'etiquetaPSOEEuskadi',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSOEEuskadi.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#B22222';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSOEEuskadi[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PP Euskadi =================
const datosPPEuskadi = [4.77, 9.36, 4.86, 8.23, 14.41, 20.13, 23.12, 17.40, 13.95, 11.59, 10.11, 6.77, 9.18];
const etiquetasPPEuskadi = ['1980','1984','1986','1990','1994','1998','2001','2005','2009','2012','2016','2020','2024'];
const partidosPPEuskadi = ['PP','PP','PP','PP','PP','PP','PP','PP','PP','PP','PP','PP','PP'];

const ctxPPEuskadi = document.getElementById('ppEuskadiChart').getContext('2d');

new Chart(ctxPPEuskadi, {
  data: {
    labels: etiquetasPPEuskadi,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPPEuskadi,
        backgroundColor: 'rgba(0,0,255,0.7)', // azul PP
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
        data: datosPPEuskadi,
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
      id: 'etiquetaPPEuskadi',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPEuskadi.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPEuskadi[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= SUMAR Euskadi =================
const datosSumarEuskadi = [3.31];
const etiquetasSumarEuskadi = ['2024'];
const partidosSumarEuskadi = ['Sumar'];

const ctxSumarEuskadi = document.getElementById('sumarEuskadiChart').getContext('2d');

new Chart(ctxSumarEuskadi, {
  data: {
    labels: etiquetasSumarEuskadi,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosSumarEuskadi,
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
        data: datosSumarEuskadi,
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
      id: 'etiquetaPartidoSumarEuskadi',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosSumarEuskadi.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#C71585';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosSumarEuskadi[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Podemos Euskadi =================
const datosPodemosEuskadi = [14.76, 8.05, 2.23];
const etiquetasPodemosEuskadi = ['2016','2020','2024'];
const partidosPodemosEuskadi = ['Podemos','Podemos','Podemos'];

const ctxPodemosEuskadi = document.getElementById('podemosEuskadiChart').getContext('2d');

new Chart(ctxPodemosEuskadi, {
  data: {
    labels: etiquetasPodemosEuskadi,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPodemosEuskadi,
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
        data: datosPodemosEuskadi,
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
      id: 'etiquetaPartidoPodemosEuskadi',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosEuskadi.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosEuskadi[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= VOX Euskadi =================
const datosVOXEuskadi = [0.07, 1.96, 2.03];
const etiquetasVOXEuskadi = ['2016','2020','2024'];
const partidosVOXEuskadi = ['VOX','VOX','VOX'];

const ctxVOXEuskadi = document.getElementById('voxEuskadiChart').getContext('2d');

new Chart(ctxVOXEuskadi, {
  data: {
    labels: etiquetasVOXEuskadi,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosVOXEuskadi,
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
        data: datosVOXEuskadi,
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
      id: 'etiquetaPartidoVOXEuskadi',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXEuskadi.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXEuskadi[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CS Euskadi =================
const datosCSEuskadi = [2.02];
const etiquetasCSEuskadi = ['2016'];
const partidosCSEuskadi = ['CS'];

const ctxCSEuskadi = document.getElementById('csEuskadiChart').getContext('2d');

new Chart(ctxCSEuskadi, {
  data: {
    labels: etiquetasCSEuskadi,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCSEuskadi,
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
        data: datosCSEuskadi,
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
      id: 'etiquetaPartidoCSEuskadi',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSEuskadi.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSEuskadi[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= ARALAR Euskadi =================
const datosAralarEuskadi = [2.33, 5.97];
const etiquetasAralarEuskadi = ['2005','2009'];
const partidosAralarEuskadi = ['Aralar','Aralar'];

const ctxAralarEuskadi = document.getElementById('aralarEuskadiChart').getContext('2d');

new Chart(ctxAralarEuskadi, {
  data: {
    labels: etiquetasAralarEuskadi,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosAralarEuskadi,
        backgroundColor: '#692D3E', // color Aralar
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
        data: datosAralarEuskadi,
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
      id: 'etiquetaPartidoAralarEuskadi',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosAralarEuskadi.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4A1F2C';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosAralarEuskadi[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PCTV-EHAK Euskadi =================
const datosPCTVEuskadi = [12.44];
const etiquetasPCTVEuskadi = ['2005'];
const partidosPCTVEuskadi = ['PCTV-EHAK'];

const ctxPCTVEuskadi = document.getElementById('pctvEuskadiChart').getContext('2d');

new Chart(ctxPCTVEuskadi, {
  data: {
    labels: etiquetasPCTVEuskadi,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPCTVEuskadi,
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
        data: datosPCTVEuskadi,
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
      id: 'etiquetaPartidoPCTVEuskadi',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPCTVEuskadi.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#6E1A15';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPCTVEuskadi[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= EB Euskadi =================
const datosEBEuskadi = [0.59, 1.42, 9.15, 5.68, 5.58, 5.37, 3.47,1.54];
const etiquetasEBEuskadi = ['1986','1990','1994','1998','2001','2005','2009','2012'];
const partidosEBEuskadi = ['EB','EB','EB','EB','EB','EB','EB','EB'];

const ctxEBEuskadi = document.getElementById('ebEuskadiChart').getContext('2d');

new Chart(ctxEBEuskadi, {
  data: {
    labels: etiquetasEBEuskadi,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosEBEuskadi,
        backgroundColor: '#D25644', // color EB
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
        data: datosEBEuskadi,
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
      id: 'etiquetaPartidoEBEuskadi',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosEBEuskadi.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#A93F32';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosEBEuskadi[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UA Euskadi =================
const datosUAEuskadi = [1.41, 2.73, 1.26, 0.34];
const etiquetasUAEuskadi = ['1990','1994','1998','2005'];
const partidosUAEuskadi = ['UA','UA','UA','UA'];

const ctxUAEuskadi = document.getElementById('uaEuskadiChart').getContext('2d');

new Chart(ctxUAEuskadi, {
  data: {
    labels: etiquetasUAEuskadi,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosUAEuskadi,
        backgroundColor: '#AE6293', // color UA
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
        data: datosUAEuskadi,
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
      id: 'etiquetaPartidoUAEuskadi',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUAEuskadi.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#7E456B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUAEuskadi[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= EA Euskadi =================
const datosEAEuskadi = [15.84, 11.38, 10.31, 8.69, 3.65];
const etiquetasEAEuskadi = ['1986','1990','1994','1998','2009'];
const partidosEAEuskadi = ['EA','EA','EA','EA','EA'];

const ctxEAEuskadi = document.getElementById('eaEuskadiChart').getContext('2d');

new Chart(ctxEAEuskadi, {
  data: {
    labels: etiquetasEAEuskadi,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosEAEuskadi,
        backgroundColor: '#298242', // color EA
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
        data: datosEAEuskadi,
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
      id: 'etiquetaPartidoEAEuskadi',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosEAEuskadi.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1E5E31';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosEAEuskadi[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= EE Euskadi =================
const datosEEEuskadi = [9.82, 7.98, 10.88, 7.78];
const etiquetasEEEuskadi = ['1980','1984','1986','1990'];
const partidosEEEuskadi = ['EE','EE','EE','EE'];

const ctxEEEuskadi = document.getElementById('eeEuskadiChart').getContext('2d');

new Chart(ctxEEEuskadi, {
  data: {
    labels: etiquetasEEEuskadi,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosEEEuskadi,
        backgroundColor: '#DC143C', // color EE
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
        data: datosEEEuskadi,
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
      id: 'etiquetaPartidoEEEuskadi',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosEEEuskadi.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0A1A';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosEEEuskadi[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UCD Euskadi =================
const datosUCDEuskadi = [8.52];
const etiquetasUCDEuskadi = ['1980'];
const partidosUCDEuskadi = ['UCD'];

const ctxUCDEuskadi = document.getElementById('ucdEuskadiChart').getContext('2d');

new Chart(ctxUCDEuskadi, {
  data: {
    labels: etiquetasUCDEuskadi,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosUCDEuskadi,
        backgroundColor: '#FFA500', // color UCD
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
        data: datosUCDEuskadi,
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
      id: 'etiquetaPartidoUCDEuskadi',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUCDEuskadi.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#CC8400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUCDEuskadi[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CDS Euskadi =================
const datosCDSEuskadi = [3.54, 0.66];
const etiquetasCDSEuskadi = ['1986','1990'];
const partidosCDSEuskadi = ['CDS','CDS'];

const ctxCDSEuskadi = document.getElementById('cdsEuskadiChart').getContext('2d');

new Chart(ctxCDSEuskadi, {
  data: {
    labels: etiquetasCDSEuskadi,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCDSEuskadi,
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
        data: datosCDSEuskadi,
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
      id: 'etiquetaPartidoCDSEuskadi',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSEuskadi.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1E90FF';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSEuskadi[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UPyD Euskadi =================
const datosUPyDEuskadi = [2.12, 1.91];
const etiquetasUPyDEuskadi = ['2009','2012'];
const partidosUPyDEuskadi = ['UPyD','UPyD'];

const ctxUPyDEuskadi = document.getElementById('upydEuskadiChart').getContext('2d');

new Chart(ctxUPyDEuskadi, {
  data: {
    labels: etiquetasUPyDEuskadi,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosUPyDEuskadi,
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
        data: datosUPyDEuskadi,
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
      id: 'etiquetaPartidoUPyDEuskadi',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDEuskadi.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF1493';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDEuskadi[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= ETIQUETAS (TODOS LOS AÑOS) =================
const etiquetasEuskadi = [
  '1980','1984','1986','1990','1994','1998','2001','2005','2009','2012','2016','2020','2024'
];

// ================= DATOS POR PARTIDO EN EUSKADI =================
const datosEuskadi = {
  'PNV':        [38.1, 42.01, 23.71, 28.49, 29.84, 28.01, 42.72, 38.67, 38.14, 34.16, 37.36, 39.07, 34.82],
  'EH Bildu / HB / EH': [16.55, 14.65, 17.47, 18.33, 16.29, 17.91, 10.12, null, null, 24.67, 21.13,27.86, 32.13],
  'PSOE':      [14.21, 23.07, 22.05, 19.94, 17.13, 17.60, 17.90, 22.68, 30.36, 18.89, 11.86, 13.65, 14.09],
  'PP':        [4.77, 9.36, 4.86, 8.23, 14.41, 20.13, 23.12, 17.40, 13.95, 11.59, 10.11, 6.77, 9.18],
  'VOX':       [null, null, null, null, null, null, null, null, null, null, 0.07, 1.96, 2.03],
  'Podemos':   [null, null, null, null, null, null, null, null, null, null, 14.76, 8.05, 2.23],
  'Sumar':     [null, null, null, null, null, null, null, null, null, null, null, null, 3.31],
  'Ciudadanos (CS)': [null, null, null, null, null, null, null, null, null,null, 2.02, null, null],
  'Aralar':    [null, null, null, null, null, null, null, 2.33, 5.97, null, null, null, null],
  'PCTV-EHAK':[null, null, null, null, null, null, null, 12.44, null, null, null, null, null],
  'EB':        [null, null, 0.59, 1.42, 9.15, 5.68, 5.58, 5.37, 3.47, 1.54, null, null, null],
  'Unidad Alavesa (UA)': [null, null, null, 1.41, 2.73, 1.26,null,0.34, null, null, null, null, null],
  'EA':        [null, null, 15.84, 11.38, 10.31, 8.69,null,null,3.65, null, null, null, null],
  'EE':        [9.82, 7.98, 10.88, 7.78, null, null, null, null, null, null, null, null, null],
  'UCD':       [8.52, null, null, null, null, null, null, null, null, null, null, null, null],
  'CDS':       [null, null, 3.54, 0.66, null, null, null, null, null, null, null, null, null],
  'UPyD':      [null, null, null, null, null, null, null, null,2.12, 1.91,null, null, null]
};

// ================= COLORES OFICIALES =================
const coloresPartidosEuskadi = {
  'PNV': '#298242',
  'EH Bildu / HB / EH': '#01B59C',
  'PSOE': '#FF0000',
  'PP': '#0000FF',
  'VOX': '#008000',
  'Podemos': '#800080',
  'Sumar': '#FF69B4',
  'Ciudadanos (CS)': '#FF8C00',
  'Aralar': '#692D3E',
  'PCTV-EHAK': '#9C231B',
  'EB': '#D25644',
  'Unidad Alavesa (UA)': '#AE6293',
  'EA': '#298242',
  'EE': '#DC143C',
  'UCD': '#FFA500',
  'CDS': '#00BFFF',
  'UPyD': '#FF60DA'
};

// ================= CREAR DATASETS =================
const datasetsEuskadi = Object.keys(datosEuskadi).map(partido => ({
  type: 'line',
  label: partido,
  data: datosEuskadi[partido],
  borderColor: coloresPartidosEuskadi[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresPartidosEuskadi[partido],
  datalabels: {
    display: true,
    color: coloresPartidosEuskadi[partido],
    font: { weight: 'bold', size: 11 },
    formatter: v => v != null ? v.toFixed(2) + '%' : ''
  }
}));

// ================= CREAR EL GRÁFICO =================
const ctxEuskadi = document.getElementById('euskadiChart').getContext('2d');

new Chart(ctxEuskadi, {
  data: {
    labels: etiquetasEuskadi,
    datasets: datasetsEuskadi
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