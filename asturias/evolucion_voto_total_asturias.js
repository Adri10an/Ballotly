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
 
// ================= PP Asturias (votos totales) =================
const datosPPAsturiasVotos = [170654, 144379, 161703, 272495, 200164, 242396, 248907, 119767, 107476, 117319, 92330, 175131];
const etiquetasPPAsturiasVotos = ['1983','1987','1991','1995','1999','2003','2007','2011','2012','2015','2019','2023'];
const partidosPPAsturiasVotos = ['AP-PDP-UL','AP','PP','PP','PP','PP','PP','PP','PP','PP','PP','PP'];

const ctxPPAsturiasVotos = document.getElementById('ppAsturiasChart').getContext('2d');

new Chart(ctxPPAsturiasVotos, {
  data: {
    labels: etiquetasPPAsturiasVotos,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPPAsturiasVotos,
        backgroundColor: 'rgba(0,0,255,0.7)', // azul PP
        borderColor: '#0000FF',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#00008B', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPPAsturiasVotos,
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
      id: 'etiquetaPartidoPPAsturiasVotos',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPAsturiasVotos.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPAsturiasVotos[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PSOE Asturias (votos totales) =================
const datosPSOEAsturiasVotos = [293320, 222326, 218193, 219527, 284972, 250474, 252201, 179619, 159811, 143851, 185422, 195999];
const etiquetasPSOEAsturiasVotos = ['1983','1987','1991','1995','1999','2003','2007','2011','2012','2015','2019','2023'];
const partidosPSOEAsturiasVotos = ['PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE'];

const ctxPSOEAsturiasVotos = document.getElementById('psoeAsturiasChart').getContext('2d');

new Chart(ctxPSOEAsturiasVotos, {
  data: {
    labels: etiquetasPSOEAsturiasVotos,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPSOEAsturiasVotos,
        backgroundColor: 'rgba(255,0,0,0.7)', // rojo PSOE
        borderColor: '#FF0000',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#FF0000', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPSOEAsturiasVotos,
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
      id: 'etiquetaPartidoPSOEAsturiasVotos',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSOEAsturiasVotos.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSOEAsturiasVotos[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= VOX Asturias (votos totales) =================
const datosVOXAsturiasVotos = [3226,33784, 54273];
const etiquetasVOXAsturiasVotos = ['2015','2019','2023'];
const partidosVOXAsturiasVotos = ['VOX','VOX'];

const ctxVOXAsturiasVotos = document.getElementById('voxAsturiasChart').getContext('2d');

new Chart(ctxVOXAsturiasVotos, {
  data: {
    labels: etiquetasVOXAsturiasVotos,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosVOXAsturiasVotos,
        backgroundColor: 'rgba(0,128,0,0.7)', // verde VOX
        borderColor: '#008000',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#006400', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosVOXAsturiasVotos,
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
      id: 'etiquetaPartidoVOXAsturiasVotos',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXAsturiasVotos.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXAsturiasVotos[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= IU / Podemos-IU Asturias (votos totales) =================
const datosIUAsturiasVotos = [69175, 78982, 106538, 55747, 68360, 58114, 61703, 68827, 64868, 34776, 40774];
const etiquetasIUAsturiasVotos = ['1987','1991','1995','1999','2003','2007','2011','2012','2015','2019','2023'];
const partidosIUAsturiasVotos = ['IU','IU','IU','IU','IU','IU','IU','IU','IU','Podemos-IU','Podemos-IU'];

const ctxIUAsturiasVotos = document.getElementById('iuAsturiasChart').getContext('2d');

new Chart(ctxIUAsturiasVotos, {
  data: {
    labels: etiquetasIUAsturiasVotos,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosIUAsturiasVotos,
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
        data: datosIUAsturiasVotos,
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
      id: 'etiquetaPartidoIUAsturiasVotos',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIUAsturiasVotos.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIUAsturiasVotos[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Podemos / Podemos-IU Asturias (votos totales) =================
const datosPodemosAsturiasVotos = [103571, 57893, 21052];
const etiquetasPodemosAsturiasVotos = ['2015','2019','2023'];
const partidosPodemosAsturiasVotos = ['Podemos','Podemos','Podemos-IU'];

const ctxPodemosAsturiasVotos = document.getElementById('podemosAsturiasChart').getContext('2d');

new Chart(ctxPodemosAsturiasVotos, {
  data: {
    labels: etiquetasPodemosAsturiasVotos,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPodemosAsturiasVotos,
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
        data: datosPodemosAsturiasVotos,
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
      id: 'etiquetaPartidoPodemosAsturiasVotos',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosAsturiasVotos.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosAsturiasVotos[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= FA Asturias (votos totales) =================
const datosFAAsturiasVotos = [178031, 123979, 44480, 34388, 19652];
const etiquetasFAAsturiasVotos = ['2011','2012','2015','2019','2023'];
const partidosFAAsturiasVotos = ['FA','FA','FA','FA','FA'];

const ctxFAAsturiasVotos = document.getElementById('faAsturiasChart').getContext('2d');

new Chart(ctxFAAsturiasVotos, {
  data: {
    labels: etiquetasFAAsturiasVotos,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosFAAsturiasVotos,
        backgroundColor: 'rgba(1,69,134,0.7)', // azul FA semitransparente
        borderColor: '#014586',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#014586', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosFAAsturiasVotos,
        borderColor: '#014586',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#014586'
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
      id: 'etiquetaPartidoFAAsturiasVotos',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosFAAsturiasVotos.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#014586';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosFAAsturiasVotos[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CS Asturias (votos totales) =================
const datosCSAsturiasVotos = [38687, 73523, 4974];
const etiquetasCSAsturiasVotos = ['2015','2019','2023'];
const partidosCSAsturiasVotos = ['CS','CS','CS'];

const ctxCSAsturiasVotos = document.getElementById('csAsturiasChart').getContext('2d');

new Chart(ctxCSAsturiasVotos, {
  data: {
    labels: etiquetasCSAsturiasVotos,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCSAsturiasVotos,
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
        data: datosCSAsturiasVotos,
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
      id: 'etiquetaPartidoCSAsturiasVotos',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSAsturiasVotos.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSAsturiasVotos[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= URAS Asturias (votos totales) =================
const datosURASAsturiasVotos = [44261, 17552, 13314, 2953, 444, 249];
const etiquetasURASAsturiasVotos = ['1999','2003','2007','2011','2012','2015'];
const partidosURASAsturiasVotos = ['URAS','URAS','URAS','URAS','URAS','URAS'];

const ctxURASAsturiasVotos = document.getElementById('urasAsturiasChart').getContext('2d');

new Chart(ctxURASAsturiasVotos, {
  data: {
    labels: etiquetasURASAsturiasVotos,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosURASAsturiasVotos,
        backgroundColor: 'rgba(73,186,233,0.7)', // azul URAS
        borderColor: '#49BAE9',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#0492C0', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosURASAsturiasVotos,
        borderColor: '#49BAE9',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#49BAE9'
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
      id: 'etiquetaPartidoURASAsturiasVotos',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosURASAsturiasVotos.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#0492C0';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosURASAsturiasVotos[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PAS Asturias (votos totales) =================
const datosPASAsturiasVotos = [7302,14569, 20669, 15998, 11376];
const etiquetasPASAsturiasVotos = ['1987','1991','1995','1999','2003'];
const partidosPASAsturiasVotos = ['PAS','PAS','PAS','PAS'];

const ctxPASAsturiasVotos = document.getElementById('pasAsturiasChart').getContext('2d');

new Chart(ctxPASAsturiasVotos, {
  data: {
    labels: etiquetasPASAsturiasVotos,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPASAsturiasVotos,
        backgroundColor: 'rgba(127,150,98,0.7)', // verde PAS
        borderColor: '#7F9662',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#556B2F', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPASAsturiasVotos,
        borderColor: '#7F9662',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#7F9662'
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
      id: 'etiquetaPartidoPASAsturiasVotos',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPASAsturiasVotos.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#556B2F';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPASAsturiasVotos[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CDS Asturias (votos totales, 1983-1995) =================
const datosCDSAsturiasVotos = [
  21829,   // 1983
  106155,  // 1987
  35884,   // 1991
  11555, 
  737,  // 1995
  642
];
const etiquetasCDSAsturiasVotos = ['1983','1987','1991','1995','1999','2003'];
const partidosCDSAsturiasVotos = ['CDS','CDS','CDS','CDS','CDS','CDS'];

const ctxCDSAsturiasVotos = document.getElementById('cdsAsturiasChart').getContext('2d');

new Chart(ctxCDSAsturiasVotos, {
  data: {
    labels: etiquetasCDSAsturiasVotos,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCDSAsturiasVotos,
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
        data: datosCDSAsturiasVotos,
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
      id: 'etiquetaPartidoCDSAsturiasVotos',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSAsturiasVotos.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1E90FF';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSAsturiasVotos[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UPyD Asturias (votos totales, 2011-2015) =================
const datosUPyDAsturiasVotos = [
  14640,  // 2011
  18739,  // 2012
  4358    // 2015
];
const etiquetasUPyDAsturiasVotos = ['2011','2012','2015'];
const partidosUPyDAsturiasVotos = ['UPyD','UPyD','UPyD'];

const ctxUPyDAsturiasVotos = document.getElementById('upydAsturiasChart').getContext('2d');

new Chart(ctxUPyDAsturiasVotos, {
  data: {
    labels: etiquetasUPyDAsturiasVotos,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUPyDAsturiasVotos,
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
        data: datosUPyDAsturiasVotos,
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
      id: 'etiquetaPartidoUPyDAsturiasVotos',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDAsturiasVotos.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#ff60da';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDAsturiasVotos[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

  // Etiquetas de años
  const etiquetasAsturias = ['1983','1987','1991','1995','1999','2003','2007','2011','2012','2015','2019','2023'];

  // Datos de cada partido (votos totales Asturias)
  const datosAsturias = {
    'PP/AP-PDP-UL': [170654, 144379, 161703, 272495, 200164, 242396, 248907, 119767, 107476, 117319, 92330, 175131],
    'PSOE':        [293320, 222326, 218193, 219527, 284972, 250474, 252201, 179619, 159811, 143851, 185422, 195999],
    'VOX':         [null,null,null,null,null,null,null,null,null,3226,33784,54273],
    'CS':          [null,null,null,null,null,null,null,null,null,38687,73523,4974],
    'Podemos/IU':  [null,null,null,null,null,null,null,null,null,103571,57893,21052],
    'URAS':        [null,null,null,null,44261,17552,13314,2953,444,249,null,null],
    'CDS':         [21829,106155,35884,11555,737,642,null,null,null,null,null,null],
    'PAS':         [null,7302,14569,20669,15998,11376,null,null,null,null,null,null],
    'IU':          [null,69175,78982,106538,55747,68360,58114,61703,68827,64868,34776,40774],
    'UPyD':        [null,null,null,null,null,null,null,14640,18739,4358,null,null],
    'FA':          [null,null,null,null,null,null,null,178031,123979,44480,34388,19652]
  };

  // Colores de los partidos
  const coloresPartidosAsturias = {
    'PP/AP-PDP-UL': '#0000FF',
    'PSOE': '#FF0000',
    'VOX': '#008000',
    'CS': '#FF8C00',
    'Podemos/IU': '#800080',
    'URAS': '#49BAE9',
    'CDS': '#00BFFF',
    'PAS': '#7F9662',
    'IU': '#B22222',
    'UPyD': '#ff60da',
    'FA': '#014586'
  };

  // Crear datasets para Chart.js
  const datasetsAsturias = Object.keys(datosAsturias).map(partido => ({
    type: 'line',
    label: partido,
    data: datosAsturias[partido],
    borderColor: coloresPartidosAsturias[partido],
    backgroundColor: 'transparent',
    fill: false,
    tension: 0.3,
    spanGaps: true,
    pointRadius: 4,
    pointBackgroundColor: coloresPartidosAsturias[partido],
    datalabels: {
      display: true,
      color: coloresPartidosAsturias[partido],
      font: { weight: 'bold', size: 12 },
      formatter: v => v != null ? v.toLocaleString() : ''
    }
  }));

  const ctxAsturias = document.getElementById('votosTotalesAsturiasChart').getContext('2d');

  new Chart(ctxAsturias, {
    data: {
      labels: etiquetasAsturias,
      datasets: datasetsAsturias
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