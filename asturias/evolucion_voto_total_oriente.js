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
 
// ================= PP Asturias Oriente =================
const datosPPAstOrVotos = [20435, 16704, 17300, 22536, 18564, 21660, 21108, 9410, 8813, 10984, 8781, 14883];
const etiquetasPPAstOrVotos = ['1983','1987','1991','1995','1999','2003','2007','2011','2012','2015','2019','2023'];
const partidosPPAstOrVotos = ['AP-PDP-UL','AP','PP','PP','PP','PP','PP','PP','PP','PP','PP','PP'];

const ctxPPAstOrVotos = document.getElementById('ppAstOrChart').getContext('2d');

new Chart(ctxPPAstOrVotos, {
  data: {
    labels: etiquetasPPAstOrVotos,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPPAstOrVotos,
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
        data: datosPPAstOrVotos,
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
      id: 'etiquetaPartidoPPAstOrVotos',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPAstOrVotos.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPAstOrVotos[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PSOE Asturias Oriente =================
const datosPSOEAstOrVotos = [21121, 20857, 20757, 21770, 22227, 22052, 23319, 16376, 12903, 13433, 16033, 15665];
const etiquetasPSOEAstOrVotos = ['1983','1987','1991','1995','1999','2003','2007','2011','2012','2015','2019','2023'];
const partidosPSOEAstOrVotos = ['PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE'];

const ctxPSOEAstOrVotos = document.getElementById('psoeAstOrChart').getContext('2d');

new Chart(ctxPSOEAstOrVotos, {
  data: {
    labels: etiquetasPSOEAstOrVotos,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPSOEAstOrVotos,
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
        data: datosPSOEAstOrVotos,
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
      id: 'etiquetaPartidoPSOEAstOrVotos',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSOEAstOrVotos.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSOEAstOrVotos[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= VOX Asturias Oriente =================
const datosVOXAstOrVotos = [2039, 3871];
const etiquetasVOXAstOrVotos = ['2019','2023'];
const partidosVOXAstOrVotos = ['VOX','VOX'];

const ctxVOXAstOrVotos = document.getElementById('voxAstOrChart').getContext('2d');

new Chart(ctxVOXAstOrVotos, {
  data: {
    labels: etiquetasVOXAstOrVotos,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosVOXAstOrVotos,
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
        data: datosVOXAstOrVotos,
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
      id: 'etiquetaPartidoVOXAstOrVotos',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXAstOrVotos.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXAstOrVotos[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= IU / Podemos Asturias Oriente =================
const datosIUAstOrVotos = [2803, 2349, 2358, 2460, 1311, 1908];
const etiquetasIUAstOrVotos = ['2007','2011','2012','2015','2019','2023'];
const partidosIUAstOrVotos = ['IU','IU','IU','IU','IU','IU'];

const ctxIUAstOrVotos = document.getElementById('iuAstOrChart').getContext('2d');

new Chart(ctxIUAstOrVotos, {
  data: {
    labels: etiquetasIUAstOrVotos,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosIUAstOrVotos,
        backgroundColor: 'rgba(178,34,34,0.7)', // rojo IU
        borderColor: '#B22222',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#8B0000', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() // separador de miles
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosIUAstOrVotos,
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
      id: 'etiquetaPartidoIUAstOrVotos',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIUAstOrVotos.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIUAstOrVotos[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= FAC Asturias Oriente =================
const datosFAAstOrVotos = [15428, 10362, 5012, 3513, 1581];
const etiquetasFAAstOrVotos = ['2011','2012','2015','2019','2023'];
const partidosFAAstOrVotos = ['FA','FA','FA','FA','FA'];

const ctxFAAstOrVotos = document.getElementById('facAstOrChart').getContext('2d');

new Chart(ctxFAAstOrVotos, {
  data: {
    labels: etiquetasFAAstOrVotos,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosFAAstOrVotos,
        backgroundColor: 'rgba(1,69,134,0.7)', // azul FA semitransparente
        borderColor: '#014586',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#014586', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() // separador de miles
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosFAAstOrVotos,
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoFAAstOrVotos',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosFAAstOrVotos.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#014586';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosFAAstOrVotos[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Podemos/IU Asturias Oriente =================
const datosPodemosAstOr = [5391, 3098, 1052];
const etiquetasPodemosAstOr = ['2015','2019','2023'];
const partidosPodemosAstOr = ['Podemos','Podemos','Podemos-IU'];

const ctxPodemosAstOr = document.getElementById('podemosAstOrChart').getContext('2d');

new Chart(ctxPodemosAstOr, {
  data: {
    labels: etiquetasPodemosAstOr,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPodemosAstOr,
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
        data: datosPodemosAstOr,
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
      id: 'etiquetaPartidoPodemosAstOr',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosAstOr.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosAstOr[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CS Asturias Oriente =================
const datosCSAstOr = [1674, 4172, 326];
const etiquetasCSAstOr = ['2015','2019','2023'];
const partidosCSAstOr = ['CS','CS','CS'];

const ctxCSAstOr = document.getElementById('csAstOrChart').getContext('2d');

new Chart(ctxCSAstOr, {
  data: {
    labels: etiquetasCSAstOr,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCSAstOr,
        backgroundColor: 'rgba(255,140,0,0.7)', // naranja CS
        borderColor: '#FF8C00',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#FF4500', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() // separador de miles
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCSAstOr,
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
      id: 'etiquetaPartidoCSAstOr',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSAstOr.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSAstOr[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= URAS Asturias Oriente =================
const datosURASAstOr = [1332, 156];
const etiquetasURASAstOr = ['2007','2011'];
const partidosURASAstOr = ['URAS','URAS'];

const ctxURASAstOr = document.getElementById('urasAstOrChart').getContext('2d');

new Chart(ctxURASAstOr, {
  data: {
    labels: etiquetasURASAstOr,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosURASAstOr,
        backgroundColor: 'rgba(73,186,233,0.7)', // azul URAS
        borderColor: '#49BAE9',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#0492C0', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() // separador de miles
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosURASAstOr,
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoURASAstOr',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosURASAstOr.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#0492C0';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosURASAstOr[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UPyD Asturias Oriental (AstOr) =================
const datosUPyDAstOr = [320, 658, 185];
const etiquetasUPyDAstOr = ['2011','2012','2015'];
const partidosUPyDAstOr = ['UPyD','UPyD','UPyD'];

const ctxUPyDAstOr = document.getElementById('upydAstOrChart').getContext('2d');

new Chart(ctxUPyDAstOr, {
  data: {
    labels: etiquetasUPyDAstOr,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUPyDAstOr,
        backgroundColor: 'rgba(255,96,218,0.7)', // color UPyD
        borderColor: '#FF60DA',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#FF60DA', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosUPyDAstOr,
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
      id: 'etiquetaPartidoUPyDAstOr',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDAstOr.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF60DA';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDAstOr[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// Datos Asturias Oriente por partido
const etiquetasAstOr = ['1983','1987','1991','1995','1999','2003','2007','2011','2012','2015','2019','2023'];

const datosAstOr = {
    'PP/AP-PDP-UL': [20435, 16704, 17300, 22536, 18564, 21660, 21108, 9410, 8813, 10984, 8781, 14883],
  'PSOE':         [21121, 20857, 20757, 21770, 22227, 22052, 23319, 16376, 12903, 13433, 16033, 15665],
  'VOX':          [null,null,null,null,null,null,null,null,null,null,2039,3871],
  'CS':           [null,null,null,null,null,null,null,null,null,1674,4172,326],
  'Podemos/IU':   [null,null,null,null,null,null,null,null,null,5391,3098,1052],
  'URAS':         [null,null,null,null,null,null,1332,156,null,null,null,null],
  'IU':           [null,null,null,null,null,null,2803,2349,2358,2460,1311,1908],
  'UPyD':         [null,null,null,null,null,null,null,320,658,185,null,null],
  'FA':           [null,null,null,null,null,null,null,15428,10362,5012,3513,1581]
};

const coloresPartidosAstOr = {
  'PP/AP-PDP-UL': '#0000FF',
  'PSOE': '#FF0000',
  'VOX': '#008000',
  'CS': '#FF8C00',
  'Podemos/IU': '#800080',
  'URAS': '#49BAE9',
  'IU': '#B22222',
  'UPyD': '#ff60da',
  'FA': '#014586'
};

const datasetsAstOr = Object.keys(datosAstOr).map(partido => ({
  type: 'line',
  label: partido,
  data: datosAstOr[partido],
  borderColor: coloresPartidosAstOr[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresPartidosAstOr[partido],
  datalabels: { 
    display: true,
    color: coloresPartidosAstOr[partido],
    font: { weight: 'bold', size: 12 },
    formatter: v => v != null ? v.toLocaleString() : ''
  }
}));

const ctxAstOr = document.getElementById('votosTotalesAstOrChart').getContext('2d');

new Chart(ctxAstOr, {
  data: {
    labels: etiquetasAstOr,
    datasets: datasetsAstOr
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