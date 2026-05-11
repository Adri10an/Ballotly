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
// ================= PP Zaragoza =================
const datosPPZaragoza = [80694, 58161, 77348, 186240, 175792, 152708, 146882, 195724, 132145, 97394, 175274,170969];
const etiquetasPPZaragoza = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023','2026'];
const partidosPPZaragoza = ['AP-PDP-UL','AP','PP','PP','PP','PP','PP','PP','PP','PP','PP','PP'];

const ctxPPZaragoza = document.getElementById('ppZaragozaChart').getContext('2d');

new Chart(ctxPPZaragoza, {
  data: {
    labels: etiquetasPPZaragoza,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPPZaragoza,
        backgroundColor: 'rgba(0,0,255,0.7)', // azul PP
        borderColor: '#0000FF',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#00008B', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString('es-ES') // separador de miles
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPPZaragoza,
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
      id: 'etiquetaPartidoPPZaragoza',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPZaragoza.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPZaragoza[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PSOE Zaragoza =================
const datosPSOEZaragoza = [195215, 155566, 170139, 170139, 134113, 187087, 191962, 135013, 95748, 143694, 147267,115462];
const etiquetasPSOEZaragoza = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023','2026'];
const partidosPSOEZaragoza = ['PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE'];

const ctxPSOEZaragoza = document.getElementById('psoeZaragozaChart').getContext('2d');

new Chart(ctxPSOEZaragoza, {
  data: {
    labels: etiquetasPSOEZaragoza,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPSOEZaragoza,
        backgroundColor: 'rgba(255,0,0,0.7)', // rojo PSOE
        borderColor: '#FF0000',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#FF0000', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString('es-ES') // separador de miles
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPSOEZaragoza,
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
      id: 'etiquetaPartidoPSOEZaragoza',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSOEZaragoza.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSOEZaragoza[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= VOX Zaragoza =================
const datosVOXZaragoza = [30855, 56209,83993];
const etiquetasVOXZaragoza = ['2019','2023','2026'];
const partidosVOXZaragoza = ['VOX','VOX','VOX'];

const ctxVOXZaragoza = document.getElementById('voxZaragozaChart').getContext('2d');

new Chart(ctxVOXZaragoza, {
  data: {
    labels: etiquetasVOXZaragoza,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosVOXZaragoza,
        backgroundColor: 'rgba(0,128,0,0.7)', // verde VOX
        borderColor: '#008000',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#006400', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString('es-ES') // separador de miles
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosVOXZaragoza,
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
      id: 'etiquetaPartidoVOXZaragoza',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXZaragoza.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXZaragoza[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CHA Zaragoza =================
const datosCHAZaragoza = [3695, 9128, 27106, 57763, 78698, 40642, 44443, 24335, 33091, 26580,50922];
const etiquetasCHAZaragoza = ['1987','1991','1995','1999','2003','2007','2011','2015','2019','2023','2026'];
const partidosCHAZaragoza = ['CHA','CHA','CHA','CHA','CHA','CHA','CHA','CHA','CHA','CHA','CHA'];

const ctxCHAZaragoza = document.getElementById('chaZaragozaChart').getContext('2d');

new Chart(ctxCHAZaragoza, {
  data: {
    labels: etiquetasCHAZaragoza,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCHAZaragoza,
        backgroundColor: 'rgba(173,0,23,0.7)', // color CHA
        borderColor: '#ad0017',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#ad0017', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString('es-ES')
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCHAZaragoza,
        borderColor: '#ad0017',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#ad0017'
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
      id: 'etiquetaPartidoCHAZaragoza',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCHAZaragoza.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#ad0017';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCHAZaragoza[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Podemos/IU Zaragoza =================
const datosPodemosZaragoza = [103291, 40014, 21104,5055];
const etiquetasPodemosZaragoza = ['2015','2019','2023','2026'];
const partidosPodemosZaragoza = ['Podemos','Podemos','Podemos','Podemos'];

const ctxPodemosZaragoza = document.getElementById('podemosZaragozaChart').getContext('2d');

new Chart(ctxPodemosZaragoza, {
  data: {
    labels: etiquetasPodemosZaragoza,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPodemosZaragoza,
        backgroundColor: 'rgba(128,0,128,0.7)', // morado Podemos/IU
        borderColor: '#800080',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#4B0082', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString('es-ES')
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPodemosZaragoza,
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
      id: 'etiquetaPartidoPodemosZaragoza',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosZaragoza.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosZaragoza[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= IU Zaragoza =================
const datosIUZaragoza = [4100, 22868, 31140, 51220, 17558, 15363, 19450, 30983, 20879, 17101, 16409,15424];
const etiquetasIUZaragoza = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023','2026'];
const partidosIUZaragoza = ['IU','IU','IU','IU','IU','IU','IU','IU','IU','IU','IU','IU'];

const ctxIUZaragoza = document.getElementById('iuZaragozaChart').getContext('2d');

new Chart(ctxIUZaragoza, {
  data: {
    labels: etiquetasIUZaragoza,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosIUZaragoza,
        backgroundColor: 'rgba(178,34,34,0.7)', // color IU
        borderColor: '#B22222',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#B22222', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString('es-ES')
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosIUZaragoza,
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
      id: 'etiquetaPartidoIUZaragoza',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIUZaragoza.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#B22222';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIUZaragoza[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Aragón Existe Zaragoza =================
const datosAragonexisteZaragoza = [14270,12377];
const etiquetasAragonexisteZaragoza = ['2023','2026'];
const partidosAragonexisteZaragoza = ['Aragón Existe','Aragón Existe'];

const ctxAragonexisteZaragoza = document.getElementById('aragonexisteZaragozaChart').getContext('2d');

new Chart(ctxAragonexisteZaragoza, {
  data: {
    labels: etiquetasAragonexisteZaragoza,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosAragonexisteZaragoza,
        backgroundColor: 'rgba(3,114,82,0.7)', // verde Aragón Existe
        borderColor: '#037252',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#037252', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString('es-ES') 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosAragonexisteZaragoza,
        borderColor: '#037252',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 5,
        pointBackgroundColor: '#037252'
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
      id: 'etiquetaPartidoAragonexisteZaragoza',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosAragonexisteZaragoza.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#037252';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosAragonexisteZaragoza[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CS Zaragoza =================
const datosCSZaragoza = [47602, 85025, 6483];
const etiquetasCSZaragoza = ['2015','2019','2023'];
const partidosCSZaragoza = ['CS','CS','CS'];

const ctxCSZaragoza = document.getElementById('csZaragozaChart').getContext('2d');

new Chart(ctxCSZaragoza, {
  data: {
    labels: etiquetasCSZaragoza,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCSZaragoza,
        backgroundColor: 'rgba(255,140,0,0.7)', // naranja CS
        borderColor: '#FF8C00',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#FF4500', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString('es-ES')
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCSZaragoza,
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
      id: 'etiquetaPartidoCSZaragoza',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSZaragoza.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSZaragoza[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PAR Zaragoza =================
const datosPARZaragoza = [89970, 135412, 105643, 100693, 52662, 48511, 49508, 34342, 24984, 17248, 5446,3908];
const etiquetasPARZaragoza = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023','2026'];
const partidosPARZaragoza = ['PAR','PAR','PAR','PAR','PAR','PAR','PAR','PAR','PAR','PAR','PAR','PAR'];

const ctxPARZaragoza = document.getElementById('parZaragozaChart').getContext('2d');

new Chart(ctxPARZaragoza, {
  data: {
    labels: etiquetasPARZaragoza,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPARZaragoza,
        backgroundColor: 'rgba(201,159,0,0.7)', // color PAR
        borderColor: '#c99f00',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#c99f00', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString('es-ES')
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPARZaragoza,
        borderColor: '#c99f00',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#c99f00'
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
      id: 'etiquetaPartidoPARZaragoza',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPARZaragoza.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#c99f00';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPARZaragoza[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CDS Zaragoza =================
const datosCDSZaragoza = [12307, 42887, 10699];
const etiquetasCDSZaragoza = ['1983','1987','1991'];
const partidosCDSZaragoza = ['CDS','CDS','CDS'];

const ctxCDSZaragoza = document.getElementById('cdsZaragozaChart').getContext('2d');

new Chart(ctxCDSZaragoza, {
  data: {
    labels: etiquetasCDSZaragoza,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCDSZaragoza,
        backgroundColor: 'rgba(0,191,255,0.7)', // azul CDS
        borderColor: '#00BFFF',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#1E90FF', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString('es-ES')
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCDSZaragoza,
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
      id: 'etiquetaPartidoCDSZaragoza',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSZaragoza.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1E90FF';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSZaragoza[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PCE Zaragoza =================
const datosPCEZaragoza = [
  17305   // 1983
];
const etiquetasPCEZaragoza = ['1983'];
const partidosPCEZaragoza = ['PCE'];

const ctxPCEZaragoza = document.getElementById('pceZaragozaChart').getContext('2d');

new Chart(ctxPCEZaragoza, {
  data: {
    labels: etiquetasPCEZaragoza,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPCEZaragoza,
        backgroundColor: 'rgba(64,11,13,0.7)', // rojo PCE
        borderColor: '#400b0d',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end',
          align: 'top',
          color: '#400b0d',
          font: { weight: 'bold' },
          formatter: (v) => v.toLocaleString('es-ES')
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPCEZaragoza,
        borderColor: '#400b0d',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#400b0d'
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
      id: 'etiquetaPartidoPCEZaragoza',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPCEZaragoza.forEach((_, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#400b0d';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPCEZaragoza[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= SALF Zaragoza =================
const datosSALFZaragoza = [14141];
const etiquetasSALFZaragoza = ['2026'];
const partidosSALFZaragoza = ['SALF'];

const ctxSALFZaragoza = document.getElementById('salfZaragozaChart').getContext('2d');

new Chart(ctxSALFZaragoza, {
  data: {
    labels: etiquetasSALFZaragoza,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosSALFZaragoza,
        backgroundColor: 'rgba(0,90,150,0.7)', // azul SALF
        borderColor: '#005a96',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end',
          align: 'top',
          color: '#005a96',
          font: { weight: 'bold' },
          formatter: (v) => v.toLocaleString('es-ES')
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosSALFZaragoza,
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
      id: 'etiquetaPartidoSALFZaragoza',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosSALFZaragoza.forEach((_, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#005a96';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosSALFZaragoza[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UPyD Zaragoza =================
const datosUPyDZaragoza = [
  13345,  // 2011
  5044    // 2015
];
const etiquetasUPyDZaragoza = ['2011','2015'];
const partidosUPyDZaragoza = ['UPyD','UPyD'];

const ctxUPyDZaragoza = document.getElementById('upydZaragozaChart').getContext('2d');

new Chart(ctxUPyDZaragoza, {
  data: {
    labels: etiquetasUPyDZaragoza,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUPyDZaragoza,
        backgroundColor: 'rgba(255,96,218,0.7)', // color UPyD
        borderColor: '#ff60da',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#ff60da', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString('es-ES')
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosUPyDZaragoza,
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
      id: 'etiquetaPartidoUPyDZaragoza',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDZaragoza.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#ff60da';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDZaragoza[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const etiquetasZaragoza = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023','2026'];

const datosZaragoza = {
  'PP':             [80694, 58161, 77348, 186240, 175792, 152708, 146882, 195724, 132145, 97394, 175274,170969],
  'PSOE':           [195215, 155566, 170139, 170139, 134113, 187087, 191962, 135013, 95748, 143694, 147267,115462],
  'VOX':            [null,null,null,null,null,null,null,null,null,30855,56209,83993],
  'CS':             [null,null,null,null,null,null,null,null,47602,85025,6483],
  'Podemos/IU':     [null,null,null,null,null,null,null,null,103291,40014,21104,5055],
  'CDS':            [12307, 42887, 10699,null,null,null,null,null,null,null,null],
  'IU':             [4100, 22868, 31140, 51220, 17558, 15363, 19450, 30983, 20879, 17101, 16409,15424],
  'SALF':      [null, null, null, null,null,null,null,null,null,null,null,14141],
  'UPyD':           [null,null,null,null,null,null,null,13345,5044,null,null],
  'CHA':            [null,3695, 9128, 27106, 57763, 78698, 40642, 44443, 24335, 33091, 26580,50922],
  'PAR':            [89970, 135412, 105643, 100693, 52662, 48511, 49508, 34342, 24984, 17248, 5446,3908],
  'Aragón Existe':  [null,null,null,null,null,null,null,null,null,null,14270,12377],
  'PCE':      [17305, null, null, null,null,null,null,null,null,null,null],
};

const coloresPartidosZaragoza = {
  'PP': '#0000FF',
  'PSOE': '#FF0000',
  'VOX': '#008000',
  'CS': '#FF8C00',
  'Podemos/IU': '#800080',
  'CDS': '#00BFFF',
  'IU': '#B22222',
  'SALF': '#005a96',
  'UPyD': '#ff60da',
  'CHA': '#000000',
  'PAR': '#c99f00',
  'Aragón Existe': '#037252',
  'PCE':'#400b0d',
};

const datasetsZaragoza = Object.keys(datosZaragoza).map(partido => ({
  type: 'line',
  label: partido,
  data: datosZaragoza[partido],
  borderColor: coloresPartidosZaragoza[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresPartidosZaragoza[partido],
  datalabels: { 
    display: true,
    color: coloresPartidosZaragoza[partido],
    font: { weight: 'bold', size: 12 },
    formatter: v => v != null ? v.toLocaleString('es-ES') : ''
  }
}));

const ctxZaragoza = document.getElementById('votosTotalesZaragozaChart').getContext('2d');

new Chart(ctxZaragoza, {
  data: {
    labels: etiquetasZaragoza,
    datasets: datasetsZaragoza
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