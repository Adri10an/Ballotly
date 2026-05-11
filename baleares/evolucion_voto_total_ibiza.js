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
 
// ================= PP Ibiza =================
const datosPPIbizaTotal = [12868, 14160, 14656, 16421, 16443, 20668, 19641, 20690, 14092, 14813, 21747];
const etiquetasPPIbizaTotal = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023'];
const partidosPPIbizaTotal = ['AP-PDP-UL','AP','PP','PP','PP','PP','PP','PP','PP','PP','PP'];

const ctxPPIbizaTotal = document.getElementById('ppIbizaChart').getContext('2d');

new Chart(ctxPPIbizaTotal, {
  data: {
    labels: etiquetasPPIbizaTotal,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPPIbizaTotal,
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
        data: datosPPIbizaTotal,
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
      y: { 
        beginAtZero: true, 
        title: { display: true, text: 'Votos totales', color: '#333' }, 
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
      id: 'etiquetaPartidoPPIbizaTotal',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPIbizaTotal.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPIbizaTotal[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PSOE Ibiza =================
const datosPSOETotalIbiza = [7663, 9196, 9422, 9118, 16161, 15513, 19094, 12716, 10049, 13672, 11410];
const etiquetasPSOETotalIbiza = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023'];
const partidosPSOETotalIbiza = ['PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE'];

const ctxPSOETotalIbiza = document.getElementById('psoeIbizaChart').getContext('2d');

new Chart(ctxPSOETotalIbiza, {
  data: {
    labels: etiquetasPSOETotalIbiza,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPSOETotalIbiza,
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
        data: datosPSOETotalIbiza,
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
      y: { 
        beginAtZero: true, 
        title: { display: true, text: 'Votos totales', color: '#333' }, 
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
      id: 'etiquetaPartidoPSOETotalIbiza',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSOETotalIbiza.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSOETotalIbiza[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= VOX Ibiza =================
const datosVOXIbiza = [2257, 4101];
const etiquetasVOXIbiza = ['2019','2023'];
const partidosVOXIbiza = ['VOX','VOX'];

const ctxVOXIbiza = document.getElementById('voxIbizaChart').getContext('2d');

new Chart(ctxVOXIbiza, {
  data: {
    labels: etiquetasVOXIbiza,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosVOXIbiza,
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
        data: datosVOXIbiza,
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
      id: 'etiquetaPartidoVOXIbiza',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXIbiza.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXIbiza[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Podemos/IU Ibiza (votos totales, 2015-2023) =================
const datosPodemosIbiza = [7397, 5289, 2833];  // votos reales
const etiquetasPodemosIbiza = ['2015','2019','2023'];
const partidosPodemosIbiza = ['Podemos','Podemos','Podemos-IU'];

const ctxPodemosIbiza = document.getElementById('podemosIbizaChart').getContext('2d');

new Chart(ctxPodemosIbiza, {
  data: {
    labels: etiquetasPodemosIbiza,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPodemosIbiza,
        backgroundColor: 'rgba(128,0,128,0.7)', // morado Podemos/IU
        borderColor: '#800080',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#4B0082', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() // separador de miles
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPodemosIbiza,
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
      id: 'etiquetaPartidoPodemosIbiza',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosIbiza.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosIbiza[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= ARA EIVISSA Ibiza (votos totales, 2019-2023) =================
const datosAraIbiza = [1284, 1402];  // votos reales
const etiquetasAraIbiza = ['2019','2023'];
const partidosAraIbiza = ['ARA EIVISSA','ARA EIVISSA'];

const ctxAraIbiza = document.getElementById('araEivissaChart').getContext('2d');

new Chart(ctxAraIbiza, {
  data: {
    labels: etiquetasAraIbiza,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosAraIbiza,
        backgroundColor: 'rgba(255,215,0,0.7)', // amarillo dorado
        borderColor: '#FFD700',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#FFD700', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosAraIbiza,
        borderColor: '#FFD700',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#FFD700'
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
      id: 'etiquetaPartidoAraIbiza',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosAraIbiza.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FFD700';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosAraIbiza[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CS Ibiza (votos totales, 2019-2023) =================
const datosCsIbiza = [3993, 605];  // votos reales
const etiquetasCsIbiza = ['2019','2023'];
const partidosCsIbiza = ['CS','CS'];

const ctxCsIbiza = document.getElementById('csIbizaChart').getContext('2d');

new Chart(ctxCsIbiza, {
  data: {
    labels: etiquetasCsIbiza,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCsIbiza,
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
        data: datosCsIbiza,
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
      id: 'etiquetaPartidoCsIbiza',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCsIbiza.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCsIbiza[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PI Ibiza (votos totales, 2015-2019) =================
const datosPIIbiza = [2452, 594];  // votos reales
const etiquetasPIIbiza = ['2015','2023'];
const partidosPIIbiza = ['PI','PI'];

const ctxPIIbiza = document.getElementById('elPiIbizaChart').getContext('2d');

new Chart(ctxPIIbiza, {
  data: {
    labels: etiquetasPIIbiza,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPIIbiza,
        backgroundColor: 'rgba(111,185,194,0.7)', // color PI
        borderColor: '#6FB9C2',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#3E8C99', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPIIbiza,
        borderColor: '#6FB9C2',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#6FB9C2'
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
      id: 'etiquetaPartidoPIIbiza',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPIIbiza.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#3E8C99';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPIIbiza[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Els Verds Ibiza (votos totales, 1995-2003) =================
const datosElsVerdsIbiza = [2241, 643, 1330];  // votos reales
const etiquetasElsVerdsIbiza = ['1995','1999','2003'];
const partidosElsVerdsIbiza = ['Els Verds','Els Verds','Els Verds'];

const ctxElsVerdsIbiza = document.getElementById('elsVerdsIbizaChart').getContext('2d');

new Chart(ctxElsVerdsIbiza, {
  data: {
    labels: etiquetasElsVerdsIbiza,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosElsVerdsIbiza,
        backgroundColor: 'rgba(137,172,118,0.7)', // color Els Verds
        borderColor: '#89AC76',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#56784F', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosElsVerdsIbiza,
        borderColor: '#89AC76',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#89AC76'
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
      id: 'etiquetaPartidoElsVerdsIbiza',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosElsVerdsIbiza.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#56784F';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosElsVerdsIbiza[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= FIEF Ibiza (votos totales, 1991-1995) =================
const datosFIEFIbiza = [2468, 1359];  // votos reales
const etiquetasFIEFIbiza = ['1991','1995'];
const partidosFIEFIbiza = ['FIEF','FIEF'];

const ctxFIEFIbiza = document.getElementById('fiefIbizaChart').getContext('2d');

new Chart(ctxFIEFIbiza, {
  data: {
    labels: etiquetasFIEFIbiza,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosFIEFIbiza,
        backgroundColor: 'rgba(4,87,85,0.7)', // color FIEF
        borderColor: '#045755',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#033838', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosFIEFIbiza,
        borderColor: '#045755',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#045755'
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
      id: 'etiquetaPartidoFIEFIbiza',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosFIEFIbiza.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#033838';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosFIEFIbiza[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PDL Ibiza (votos totales, 1983) =================
const datosPDLIbiza = [3657];
const etiquetasPDLIbiza = ['1983'];
const partidosPDLIbiza = ['PDL'];

const ctxPDLIbiza = document.getElementById('pdlIbizaChart').getContext('2d');

new Chart(ctxPDLIbiza, {
  data: {
    labels: etiquetasPDLIbiza,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPDLIbiza,
        backgroundColor: 'rgba(125,171,205,0.7)', // color PDL
        borderColor: '#7dabcd',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#5f8fa0', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPDLIbiza,
        borderColor: '#7dabcd',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#7dabcd'
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
      id: 'etiquetaPartidoPDLIbiza',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPDLIbiza.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#5f8fa0';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPDLIbiza[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CDS Ibiza (votos totales, 1987-1991) =================
const datosCDSIbiza = [2054, 444];
const etiquetasCDSIbiza = ['1987','1991'];
const partidosCDSIbiza = ['CDS','CDS'];

const ctxCDSIbiza = document.getElementById('cdsIbizaChart').getContext('2d');

new Chart(ctxCDSIbiza, {
  data: {
    labels: etiquetasCDSIbiza,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCDSIbiza,
        backgroundColor: 'rgba(0,191,255,0.7)', // azul CDS
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
        data: datosCDSIbiza,
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
      id: 'etiquetaPartidoCDSIbiza',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSIbiza.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1E90FF';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSIbiza[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= IU Ibiza (votos totales, 1987-1995) =================
const datosIUIbiza = [876, 735, 1939];
const etiquetasIUIbiza = ['1987','1991','1995'];
const partidosIUIbiza = ['IU','IU','IU'];

const ctxIUIbiza = document.getElementById('iuIbizaChart').getContext('2d');

new Chart(ctxIUIbiza, {
  data: {
    labels: etiquetasIUIbiza,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosIUIbiza,
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
        data: datosIUIbiza,
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
      id: 'etiquetaPartidoIUIbiza',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIUIbiza.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIUIbiza[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UPyD Ibiza (votos totales, 2011-2015) =================
const datosUPyDIbiza = [989, 716];
const etiquetasUPyDIbiza = ['2011','2015'];
const partidosUPyDIbiza = ['UPyD','UPyD'];

const ctxUPyDIbiza = document.getElementById('upydIbizaChart').getContext('2d');

new Chart(ctxUPyDIbiza, {
  data: {
    labels: etiquetasUPyDIbiza,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUPyDIbiza,
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
        data: datosUPyDIbiza,
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
      id: 'etiquetaPartidoUPyDIbiza',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDIbiza.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#ff60da';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDIbiza[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// Datos Ibiza por partido
const etiquetasIbiza = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023'];

const datosIbiza = {
  'PP / AP-PDP-UL': [12868, 14160, 14656, 16421, 16443, 20668, 19641, 20690, 14092, 14813, 21747],
  'PSOE':           [7663, 9196, 9422, 9118, 16161, 15513, 19094, 12716, 10049, 13672, 11410],
  'VOX':            [null,null,null,null,null,null,null,null,null,2257,4101],
  'Podemos/IU':     [null,null,null,null,null,null,null,null,7397,5289,2833],
  'ARA EIVISSA':    [null,null,null,null,null,null,null,null,null,1284,1402],
  'CS':             [null,null,null,null,null,null,null,null,null,3993,605],
  'El PI':          [null,null,null,null,null,null,null,null,2452,null,594],
  'Els Verds':      [null,null,null,2241,643,1330,null,null,null,null,null],
  'FIEF':           [null,null,2468,1359,null,null,null,null,null,null,null],
  'PDL':            [3657,null,null,null,null,null,null,null,null,null,null],
  'CDS':            [null,2054,444,null,null,null,null,null,null,null,null],
  'IU':             [null,876,735,1939,null,null,null,null,null,null,null],
  'UPyD':           [null,null,null,null,null,null,null,989,716,null,null]
};

const coloresPartidosIbiza = {
  'PP / AP-PDP-UL': '#0000FF',
  'PSOE': '#FF0000',
  'VOX': '#008000',
  'Podemos/IU': '#800080',
  'ARA EIVISSA': '#FFD700',
  'CS': '#FF8C00',
  'El PI': '#6FB9C2',
  'Els Verds': '#89AC76',
  'FIEF': '#045755',
  'PDL': '#7dabcd',
  'CDS': '#00BFFF',
  'IU': '#B22222',
  'UPyD': '#ff60da'
};

const datasetsIbiza = Object.keys(datosIbiza).map(partido => ({
  type: 'line',
  label: partido,
  data: datosIbiza[partido],
  borderColor: coloresPartidosIbiza[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresPartidosIbiza[partido],
  datalabels: { 
    display: true,
    color: coloresPartidosIbiza[partido],
    font: { weight: 'bold', size: 12 },
    formatter: v => v != null ? v.toLocaleString() : ''
  }
}));

const ctxIbiza = document.getElementById('votosTotalesIbizaChart').getContext('2d');

new Chart(ctxIbiza, {
  data: {
    labels: etiquetasIbiza,
    datasets: datasetsIbiza
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
