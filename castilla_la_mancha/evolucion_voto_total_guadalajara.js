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
  // ================= PP Guadalajara =================
  const datosPPGuadalajara = [37342, 35900, 37253, 47169, 43729, 43673, 53935, 64232, 41768, 30680, 39528];
  const etiquetasPPGuadalajara = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023'];
  const partidosPPGuadalajara = ['AP-PDP-UL','AP','PP','PP','PP','PP','PP','PP','PP','PP','PP'];

  const ctxPPGuadalajara = document.getElementById('ppGuadalajaraChart').getContext('2d');

  new Chart(ctxPPGuadalajara, {
    data: {
      labels: etiquetasPPGuadalajara,
      datasets: [
        {
          type: 'bar',
          label: 'Votos totales',
          data: datosPPGuadalajara,
          backgroundColor: 'rgba(0,0,255,0.7)', // azul PP
          borderColor: '#0000FF',
          borderWidth: 1,
          datalabels: { 
            anchor: 'end', 
            align: 'top', 
            color: '#00008B', 
            font: { weight: 'bold' }, 
            formatter: (v) => v.toLocaleString() // separador de miles
          }
        },
        {
          type: 'line',
          label: 'Tendencia',
          data: datosPPGuadalajara,
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
      plugins: { 
        legend: { position: 'top', labels: { color: '#333' } }, 
        datalabels: { display: true } 
      },
      scales: {
        y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
        x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
      }
    },
    plugins: [
      {
        id: 'etiquetaPartidoPPGuadalajara',
        afterDatasetsDraw(chart) {
          const { ctx, scales: { x, y } } = chart;
          datosPPGuadalajara.forEach((valor, i) => {
            const xPos = x.getPixelForValue(i);
            const yPos = y.getPixelForValue(0) + 30;
            ctx.save();
            ctx.fillStyle = '#00008B';
            ctx.font = '12px Segoe UI';
            ctx.textAlign = 'center';
            ctx.fillText(partidosPPGuadalajara[i], xPos, yPos);
            ctx.restore();
          });
        }
      },
      ChartDataLabels
    ]
  });

  // ================= PSOE Guadalajara =================
  const datosPSOEGuadalajara = [32099, 32549, 34273, 36561, 46461, 58158, 53086, 49011, 37208, 49855, 55105];
  const etiquetasPSOEGuadalajara = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023'];
  const partidosPSOEGuadalajara = ['PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE'];

  const ctxPSOEGuadalajara = document.getElementById('psoeGuadalajaraChart').getContext('2d');

  new Chart(ctxPSOEGuadalajara, {
    data: {
      labels: etiquetasPSOEGuadalajara,
      datasets: [
        {
          type: 'bar',
          label: 'Votos totales',
          data: datosPSOEGuadalajara,
          backgroundColor: 'rgba(255,0,0,0.7)', // rojo PSOE
          borderColor: '#FF0000',
          borderWidth: 1,
          datalabels: { 
            anchor: 'end', 
            align: 'top', 
            color: '#FF0000', 
            font: { weight: 'bold' }, 
            formatter: (v) => v.toLocaleString() // separador de miles
          }
        },
        {
          type: 'line',
          label: 'Tendencia',
          data: datosPSOEGuadalajara,
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
      plugins: { 
        legend: { position: 'top', labels: { color: '#333' } }, 
        datalabels: { display: true } 
      },
      scales: {
        y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
        x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
      }
    },
    plugins: [
      {
        id: 'etiquetaPartidoPSOEGuadalajara',
        afterDatasetsDraw(chart) {
          const { ctx, scales: { x, y } } = chart;
          datosPSOEGuadalajara.forEach((valor, i) => {
            const xPos = x.getPixelForValue(i);
            const yPos = y.getPixelForValue(0) + 30;
            ctx.save();
            ctx.fillStyle = '#FF0000';
            ctx.font = '12px Segoe UI';
            ctx.textAlign = 'center';
            ctx.fillText(partidosPSOEGuadalajara[i], xPos, yPos);
            ctx.restore();
          });
        }
      },
      ChartDataLabels
    ]
  });

  // ================= VOX Guadalajara =================
  const datosVOXGuadalajara = [1208, 12007, 21007];
  const etiquetasVOXGuadalajara = ['2015','2019','2023'];
  const partidosVOXGuadalajara = ['VOX','VOX','VOX'];

  const ctxVOXGuadalajara = document.getElementById('voxGuadalajaraChart').getContext('2d');

  new Chart(ctxVOXGuadalajara, {
    data: {
      labels: etiquetasVOXGuadalajara,
      datasets: [
        {
          type: 'bar',
          label: 'Votos totales',
          data: datosVOXGuadalajara,
          backgroundColor: 'rgba(0,128,0,0.7)', // verde VOX
          borderColor: '#008000',
          borderWidth: 1,
          datalabels: { 
            anchor: 'end', 
            align: 'top', 
            color: '#006400', 
            font: { weight: 'bold' }, 
            formatter: (v) => v.toLocaleString() // separador de miles
          }
        },
        {
          type: 'line',
          label: 'Tendencia',
          data: datosVOXGuadalajara,
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
      plugins: { 
        legend: { position: 'top', labels: { color: '#333' } }, 
        datalabels: { display: true } 
      },
      scales: {
        y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
        x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
      }
    },
    plugins: [
      {
        id: 'etiquetaPartidoVOXGuadalajara',
        afterDatasetsDraw(chart) {
          const { ctx, scales: { x, y } } = chart;
          datosVOXGuadalajara.forEach((valor, i) => {
            const xPos = x.getPixelForValue(i);
            const yPos = y.getPixelForValue(0) + 30;
            ctx.save();
            ctx.fillStyle = '#006400';
            ctx.font = '12px Segoe UI';
            ctx.textAlign = 'center';
            ctx.fillText(partidosVOXGuadalajara[i], xPos, yPos);
            ctx.restore();
          });
        }
      },
      ChartDataLabels
    ]
  });

  // ================= CS Guadalajara =================
  const datosCSGuadalajara = [14900, 18189, 1650];
  const etiquetasCSGuadalajara = ['2015','2019','2023'];
  const partidosCSGuadalajara = ['CS','CS','CS'];

  const ctxCSGuadalajara = document.getElementById('csGuadalajaraChart').getContext('2d');

  new Chart(ctxCSGuadalajara, {
    data: {
      labels: etiquetasCSGuadalajara,
      datasets: [
        {
          type: 'bar',
          label: 'Votos totales',
          data: datosCSGuadalajara,
          backgroundColor: 'rgba(255,140,0,0.7)', // naranja CS
          borderColor: '#FF8C00',
          borderWidth: 1,
          datalabels: { 
            anchor: 'end', 
            align: 'top', 
            color: '#FF4500', 
            font: { weight: 'bold' }, 
            formatter: (v) => v.toLocaleString()
          }
        },
        {
          type: 'line',
          label: 'Tendencia',
          data: datosCSGuadalajara,
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
      plugins: { 
        legend: { position: 'top', labels: { color: '#333' } }, 
        datalabels: { display: true } 
      },
      scales: {
        y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
        x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
      }
    },
    plugins: [
      {
        id: 'etiquetaPartidoCSGuadalajara',
        afterDatasetsDraw(chart) {
          const { ctx, scales: { x, y } } = chart;
          datosCSGuadalajara.forEach((valor, i) => {
            const xPos = x.getPixelForValue(i);
            const yPos = y.getPixelForValue(0) + 30;
            ctx.save();
            ctx.fillStyle = '#FF4500';
            ctx.font = '12px Segoe UI';
            ctx.textAlign = 'center';
            ctx.fillText(partidosCSGuadalajara[i], xPos, yPos);
            ctx.restore();
          });
        }
      },
      ChartDataLabels
    ]
  });

  // ================= Podemos/IU Guadalajara =================
  const datosPodemosGuadalajara = [18113, 11760, 7800];
  const etiquetasPodemosGuadalajara = ['2015','2019','2023'];
  const partidosPodemosGuadalajara = ['Podemos','Podemos','Podemos-IU'];

  const ctxPodemosGuadalajara = document.getElementById('podemosGuadalajaraChart').getContext('2d');

  new Chart(ctxPodemosGuadalajara, {
    data: {
      labels: etiquetasPodemosGuadalajara,
      datasets: [
        {
          type: 'bar',
          label: 'Votos totales',
          data: datosPodemosGuadalajara,
          backgroundColor: 'rgba(128,0,128,0.7)', // morado Podemos/IU
          borderColor: '#800080',
          borderWidth: 1,
          datalabels: { 
            anchor: 'end', 
            align: 'top', 
            color: '#4B0082', 
            font: { weight: 'bold' }, 
            formatter: (v) => v.toLocaleString()
          }
        },
        {
          type: 'line',
          label: 'Tendencia',
          data: datosPodemosGuadalajara,
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
      plugins: { 
        legend: { position: 'top', labels: { color: '#333' } }, 
        datalabels: { display: true } 
      },
      scales: {
        y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
        x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
      }
    },
    plugins: [
      {
        id: 'etiquetaPartidoPodemosGuadalajara',
        afterDatasetsDraw(chart) {
          const { ctx, scales: { x, y } } = chart;
          datosPodemosGuadalajara.forEach((valor, i) => {
            const xPos = x.getPixelForValue(i);
            const yPos = y.getPixelForValue(0) + 30;
            ctx.save();
            ctx.fillStyle = '#4B0082';
            ctx.font = '12px Segoe UI';
            ctx.textAlign = 'center';
            ctx.fillText(partidosPodemosGuadalajara[i], xPos, yPos);
            ctx.restore();
          });
        }
      },
      ChartDataLabels
    ]
  });

// ================= CDS Guadalajara =================
const datosCDSGuadalajara = [3454, 9021, 2336]; // mismos datos originales
const etiquetasCDSGuadalajara = ['1983','1987','1991'];
const partidosCDSGuadalajara = ['CDS','CDS','CDS'];

const ctxCDSGuadalajara = document.getElementById('cdsGuadalajaraChart').getContext('2d');

new Chart(ctxCDSGuadalajara, {
  data: {
    labels: etiquetasCDSGuadalajara,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCDSGuadalajara,
        backgroundColor: 'rgba(0,191,255,0.7)',
        borderColor: '#00BFFF',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#1E90FF', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCDSGuadalajara,
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
    plugins: { 
      legend: { position: 'top', labels: { color: '#333' } }, 
      datalabels: { display: true } 
    },
    scales: {
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoCDSGuadalajara',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSGuadalajara.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1E90FF';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSGuadalajara[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= IU/Podemos Guadalajara =================
const datosIUGuadalajara = [4382, 6670, 9226, 4217, 5086, 5258, 6076, 4147, 11760, 7800];
const etiquetasIUGuadalajara = ['1987','1991','1995','1999','2003','2007','2011','2015','2019','2023'];
const partidosIUGuadalajara = ['IU','IU','IU','IU','IU','IU','IU','IU','Podemos-IU','Podemos-IU-AV'];

const ctxIUGuadalajara = document.getElementById('iuGuadalajaraChart').getContext('2d');

new Chart(ctxIUGuadalajara, {
  data: {
    labels: etiquetasIUGuadalajara,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosIUGuadalajara,
        backgroundColor: 'rgba(178,34,34,0.7)', // rojo IU
        borderColor: '#B22222',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#8B0000', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosIUGuadalajara,
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
    plugins: { 
      legend: { position: 'top', labels: { color: '#333' } }, 
      datalabels: { display: true } 
    },
    scales: {
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoIUGuadalajara',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIUGuadalajara.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIUGuadalajara[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UPyD Guadalajara =================
const datosUPyDGuadalajara = [3862, 2048];
const etiquetasUPyDGuadalajara = ['2011','2015'];
const partidosUPyDGuadalajara = ['UPyD','UPyD'];

const ctxUPyDGuadalajara = document.getElementById('upydGuadalajaraChart').getContext('2d');

new Chart(ctxUPyDGuadalajara, {
  data: {
    labels: etiquetasUPyDGuadalajara,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUPyDGuadalajara,
        backgroundColor: 'rgba(255,96,218,0.7)', // color UPyD
        borderColor: '#ff60da',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#ff60da', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosUPyDGuadalajara,
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
    plugins: { 
      legend: { position: 'top', labels: { color: '#333' } }, 
      datalabels: { display: true } 
    },
    scales: {
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoUPyDGuadalajara',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDGuadalajara.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#ff60da';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDGuadalajara[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Datos Guadalajara =================
const etiquetasGuadalajara = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023'];

const datosGuadalajara = {
  'PP':           [37342, 35900, 37253, 47169, 43729, 43673, 53935, 64232, 41768, 30680, 39528],
  'PSOE':         [32099, 32549, 34273, 36561, 46461, 58158, 53086, 49011, 37208, 49855, 55105],
  'VOX':          [null,null,null,null,null,null,null,null,1208,12007,21007],
  'CS':           [null,null,null,null,null,null,null,null,14900,18189,1650],
  'Podemos/IU':   [null,null,null,null,null,null,null,null,18113,11760,7800],
  'CDS':          [3454,9021,2336,null,null,null,null,null,null,null,null],
  'IU':           [null,4382,6670,9226,4217,5086,5258,6076,4147,11760,7800],
  'UPyD':         [null,null,null,null,null,null,null,3862,2048,null,null]
};

const coloresPartidosGuadalajara = {
  'PP': '#0000FF',
  'PSOE': '#FF0000',
  'VOX': '#008000',
  'CS': '#FF8C00',
  'Podemos/IU': '#800080',
  'CDS': '#00BFFF',
  'IU': '#B22222',
  'UPyD': '#ff60da'
};

const datasetsGuadalajara = Object.keys(datosGuadalajara).map(partido => ({
  type: 'line',
  label: partido,
  data: datosGuadalajara[partido],
  borderColor: coloresPartidosGuadalajara[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresPartidosGuadalajara[partido],
  datalabels: { 
    display: true,
    color: coloresPartidosGuadalajara[partido],
    font: { weight: 'bold', size: 12 },
    formatter: v => v != null ? v.toLocaleString() : ''
  }
}));

const ctxGuadalajara = document.getElementById('votosTotalesGuadalajaraChart').getContext('2d');

new Chart(ctxGuadalajara, {
  data: {
    labels: etiquetasGuadalajara,
    datasets: datasetsGuadalajara
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'top', labels: { color: '#333' } },
      datalabels: { display: true }
    },
    scales: {
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [ChartDataLabels]
});