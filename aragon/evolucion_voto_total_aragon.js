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
// ================= PP / AP-PDP-UL Aragón =================
const datosPPAragon = [136853, 99082, 126892, 263524, 249458, 219058, 208642, 269729, 181757, 138158, 237817,238388];
const etiquetasPPAragon = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023','2026'];
const partidosPPAragon = ['AP-PDP-UL','AP','PP','PP','PP','PP','PP','PP','PP','PP','PP','PP'];

const ctxPPAragon = document.getElementById('ppAragonChart').getContext('2d');

new Chart(ctxPPAragon, {
  data: {
    labels: etiquetasPPAragon,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPPAragon,
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
        data: datosPPAragon,
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
      id: 'etiquetaPartidoPPAragon',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPAragon.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPAragon[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PSOE Aragón =================
const datosPSOEAragon = [283226, 228170, 247485, 180728, 201117, 270468, 276415, 197189, 141528, 203933, 197919,162925];
const etiquetasPSOEAragon = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023','2026'];
const partidosPSOEAragon = ['PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE'];

const ctxPSOEAragon = document.getElementById('psoeAragonChart').getContext('2d');

new Chart(ctxPSOEAragon, {
  data: {
    labels: etiquetasPSOEAragon,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPSOEAragon,
        backgroundColor: 'rgba(255,0,0,0.7)', // rojo PSOE
        borderColor: '#FF0000',
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
        data: datosPSOEAragon,
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
      id: 'etiquetaPartidoPSOEAragon',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSOEAragon.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#B22222';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSOEAragon[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= VOX Aragón =================
const datosVOXAragon = [40263, 75349,119281];
const etiquetasVOXAragon = ['2019','2023','2026'];
const partidosVOXAragon = ['VOX','VOX','VOX'];

const ctxVOXAragon = document.getElementById('voxAragonChart').getContext('2d');

new Chart(ctxVOXAragon, {
  data: {
    labels: etiquetasVOXAragon,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosVOXAragon,
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
        data: datosVOXAragon,
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
      id: 'etiquetaPartidoVOXAragon',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXAragon.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXAragon[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CHA Aragón =================
const datosCHAAragon = [6154, 14116, 34077, 72101, 97763, 54752, 55932, 30334, 41460, 34163,65118];
const etiquetasCHAAragon = ['1987','1991','1995','1999','2003','2007','2011','2015','2019','2023','2026'];
const partidosCHAAragon = ['CHA','CHA','CHA','CHA','CHA','CHA','CHA','CHA','CHA','CHA','CHA'];

const ctxCHAAragon = document.getElementById('chaAragonChart').getContext('2d');

new Chart(ctxCHAAragon, {
  data: {
    labels: etiquetasCHAAragon,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCHAAragon,
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
        data: datosCHAAragon,
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
    animation: { duration: 1500, easing: 'easeOutBounce' },
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
      id: 'etiquetaPartidoCHAAragon',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCHAAragon.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#ad0017';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCHAAragon[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Aragón Existe Aragón =================
const datosAragonexisteAragon = [33190,23616];
const etiquetasAragonexisteAragon = ['2023','2026'];
const partidosAragonexisteAragon = ['Aragón Existe','Aragón Existe'];

const ctxAragonexisteAragon = document.getElementById('aragonexisteAragonChart').getContext('2d');

new Chart(ctxAragonexisteAragon, {
  data: {
    labels: etiquetasAragonexisteAragon,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosAragonexisteAragon,
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
        data: datosAragonexisteAragon,
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
    animation: { duration: 1500, easing: 'easeOutBounce' },
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
      id: 'etiquetaPartidoAragonexisteAragon',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosAragonexisteAragon.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#037252';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosAragonexisteAragon[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Podemos/IU Aragón =================
const datosPodemosAragon = [135554, 53468, 26923,6206];
const etiquetasPodemosAragon = ['2015','2019','2023','2026'];
const partidosPodemosAragon = ['Podemos','Podemos','Podemos','Podemos'];

const ctxPodemosAragon = document.getElementById('podemosAragonChart').getContext('2d');

new Chart(ctxPodemosAragon, {
  data: {
    labels: etiquetasPodemosAragon,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPodemosAragon,
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
        data: datosPodemosAragon,
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
    animation: { duration: 1500, easing: 'easeOutQuart' },
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
      id: 'etiquetaPartidoPodemosAragon',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosAragon.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosAragon[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= SALF Aragón =================
const datosSALFAragon = [17983];
const etiquetasSALFAragon = ['2026'];
const partidosSALFAragon = ['SALF'];

const ctxSALFAragon = document.getElementById('salfAragonChart').getContext('2d');

new Chart(ctxSALFAragon, {
  data: {
    labels: etiquetasSALFAragon,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosSALFAragon,
        backgroundColor: 'rgba(0, 90, 150, 0.7)',
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
        data: datosSALFAragon,
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
    animation: { duration: 1500, easing: 'easeOutBounce' },
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
      id: 'etiquetaPartidoSALFAragon',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosSALFAragon.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#005a96';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosSALFAragon[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= IU Aragón =================
const datosIUAragon = [4645, 31352, 41367, 64685, 25040, 21795, 27440, 41874, 27936, 22015, 20959,19832];
const etiquetasIUAragon = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023','2026'];
const partidosIUAragon = ['IU','IU','IU','IU','IU','IU','IU','IU','IU','IU','IU','IU'];

const ctxIUAragon = document.getElementById('iuAragonChart').getContext('2d');

new Chart(ctxIUAragon, {
  data: {
    labels: etiquetasIUAragon,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosIUAragon,
        backgroundColor: 'rgba(178,34,34,0.7)', // rojo IU
        borderColor: '#B22222',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end',
          align: 'top',
          color: '#8B0000',
          font: { weight: 'bold' },
          formatter: (v) => v.toLocaleString('es-ES')
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosIUAragon,
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
    animation: { duration: 1500, easing: 'easeOutQuart' },
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
      id: 'etiquetaPartidoIUAragon',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIUAragon.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIUAragon[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PAR Aragón =================
const datosPARAragon = [124018, 179922, 151420, 143573, 86519, 79670, 81135, 62193, 45577, 33497, 13988,8161];
const etiquetasPARAragon = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023','2026'];
const partidosPARAragon = ['PAR','PAR','PAR','PAR','PAR','PAR','PAR','PAR','PAR','PAR','PAR','PAR'];

const ctxPARAragon = document.getElementById('parAragonChart').getContext('2d');

new Chart(ctxPARAragon, {
  data: {
    labels: etiquetasPARAragon,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPARAragon,
        backgroundColor: 'rgba(201,159,0,0.7)', // amarillo PAR
        borderColor: '#c99f00',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end',
          align: 'top',
          color: '#8B8000',
          font: { weight: 'bold' },
          formatter: (v) => v.toLocaleString('es-ES') // separador de miles
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPARAragon,
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
    animation: { duration: 1500, easing: 'easeOutQuart' },
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
      id: 'etiquetaPartidoPARAragon',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPARAragon.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B8000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPARAragon[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CS Aragón =================
const datosCSAragon = [62188, 110517, 8595];
const etiquetasCSAragon = ['2015','2019','2023'];
const partidosCSAragon = ['CS','CS','CS'];

const ctxCSAragon = document.getElementById('csAragonChart').getContext('2d');

new Chart(ctxCSAragon, {
  data: {
    labels: etiquetasCSAragon,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCSAragon,
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
        data: datosCSAragon,
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
    animation: { duration: 1500, easing: 'easeOutQuart' },
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
      id: 'etiquetaPartidoCSAragon',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSAragon.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSAragon[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CDS Aragón =================
const datosCDSAragon = [19902, 65406, 18929]; // votos totales en Aragón: 1983, 1987, 1991
const etiquetasCDSAragon = ['1983','1987','1991'];
const partidosCDSAragon = ['CDS','CDS','CDS'];

const ctxCDSAragon = document.getElementById('cdsAragonChart').getContext('2d');

new Chart(ctxCDSAragon, {
  data: {
    labels: etiquetasCDSAragon,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCDSAragon,
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
        data: datosCDSAragon,
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
      id: 'etiquetaPartidoCDSAragon',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSAragon.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1E90FF';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSAragon[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PCE Aragón =================
const datosPCEAragon = [
  23960   // 1983
];
const etiquetasPCEAragon = ['1983'];
const partidosPCEAragon = ['PCE'];

const ctxPCEAragon = document.getElementById('pceAragonChart').getContext('2d');

new Chart(ctxPCEAragon, {
  data: {
    labels: etiquetasPCEAragon,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPCEAragon,
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
        data: datosPCEAragon,
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
      id: 'etiquetaPartidoPCEAragon',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPCEAragon.forEach((_, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#400b0d';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPCEAragon[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UPyD Aragón =================
const datosUPyDAragon = [15667, 5637]; // votos totales en Aragón: 2011, 2015
const etiquetasUPyDAragon = ['2011','2015'];
const partidosUPyDAragon = ['UPyD','UPyD'];

const ctxUPyDAragon = document.getElementById('upydAragonChart').getContext('2d');

new Chart(ctxUPyDAragon, {
  data: {
    labels: etiquetasUPyDAragon,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUPyDAragon,
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
        data: datosUPyDAragon,
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
      id: 'etiquetaPartidoUPyDAragon',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDAragon.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#ff60da';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDAragon[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const etiquetasAragon = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023','2026'];

const datosAragon = {
  'PP':             [136853, 99082, 126892, 263524, 249458, 219058, 208642, 269729, 181757, 138158, 237817,228388],
  'PSOE':           [283226, 228170, 247485, 180728, 201117, 270468, 276415, 197189, 141528, 203933, 197919,162925],
  'VOX':            [null,null,null,null,null,null,null,null,null,40263,75349,119281],
  'CS':             [null,null,null,null,null,null,null,null,62188,110517,8595],
  'Podemos/IU':     [null,null,null,null,null,null,null,null,135554,53468,26923,6206],
  'CDS':            [19902, 65406, 18929,null,null,null,null,null,null,null,null],
  'IU':             [4645, 31352, 41367, 64685, 25040, 21795, 27440, 41874, 27936, 22015, 20959,19832],
  'SALF':            [null,null,null,null,null,null,null,null,null,null,null,17983],
  'UPyD':           [null,null,null,null,null,null,null,15667,5637,null,null],
  'CHA':            [null,6154, 14116, 34077, 72101, 97763, 54752, 55932, 30334, 41460, 34163,65118],
  'PAR':            [124018, 179922, 151420, 143573, 86519, 79670, 81135, 62193, 45577, 33497, 13988,8161],
  'Aragón Existe':  [null,null,null,null,null,null,null,null,null,null,33190,23616],
  'PCE':      [23960, null, null, null,null,null,null,null,null,null,null],
};

const coloresPartidosAragon = {
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

const datasetsAragon = Object.keys(datosAragon).map(partido => ({
  type: 'line',
  label: partido,
  data: datosAragon[partido],
  borderColor: coloresPartidosAragon[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresPartidosAragon[partido],
  datalabels: { 
    display: true,
    color: coloresPartidosAragon[partido],
    font: { weight: 'bold', size: 12 },
    formatter: v => v != null ? v.toLocaleString('es-ES') : ''
  }
}));

const ctxAragon = document.getElementById('votosTotalesAragonChart').getContext('2d');

new Chart(ctxAragon, {
  data: {
    labels: etiquetasAragon,
    datasets: datasetsAragon
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