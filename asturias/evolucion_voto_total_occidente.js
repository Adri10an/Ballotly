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
 
// ================= PP Asturias Occidente =================
const datosPPAstOccVotos = [29111, 22872, 25308, 34694, 27660, 27660, 30710, 18837, 14628, 16643, 15052, 21236];
const etiquetasPPAstOccVotos = ['1983','1987','1991','1995','1999','2003','2007','2011','2012','2015','2019','2023'];
const partidosPPAstOccVotos = ['AP-PDP-UL','AP','PP','PP','PP','PP','PP','PP','PP','PP','PP','PP'];

const ctxPPAstOccVotos = document.getElementById('ppAstOccChart').getContext('2d');

new Chart(ctxPPAstOccVotos, {
  data: {
    labels: etiquetasPPAstOccVotos,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPPAstOccVotos,
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
        data: datosPPAstOccVotos,
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
      id: 'etiquetaPartidoPPAstOccVotos',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPAstOccVotos.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPAstOccVotos[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PSOE Asturias Occidente =================
const datosPSOEAstOccVotos = [33314, 37550, 38994, 37066, 38035, 38173, 40372, 27499,19816, 22216, 25228, 22482];
const etiquetasPSOEAstOccVotos = ['1983','1987','1991','1995','1999','2003','2007','2011','2012','2015','2019','2023'];
const partidosPSOEAstOccVotos = ['PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE'];

const ctxPSOEAstOccVotos = document.getElementById('psoeAstOccChart').getContext('2d');

new Chart(ctxPSOEAstOccVotos, {
  data: {
    labels: etiquetasPSOEAstOccVotos,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPSOEAstOccVotos,
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
        data: datosPSOEAstOccVotos,
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
      id: 'etiquetaPartidoPSOEAstOccVotos',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSOEAstOccVotos.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSOEAstOccVotos[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= FA Asturias Occidente =================
const datosFAAstOccVotos = [18484, 13325, 5220, 3150, 4049];
const etiquetasFAAstOccVotos = ['2011','2012','2015','2019','2023'];
const partidosFAAstOccVotos = ['FA','FA','FA','FA','FA'];

const ctxFAAstOccVotos = document.getElementById('facAstOccChart').getContext('2d');

new Chart(ctxFAAstOccVotos, {
  data: {
    labels: etiquetasFAAstOccVotos,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosFAAstOccVotos,
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
        data: datosFAAstOccVotos,
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
      id: 'etiquetaPartidoFAAstOccVotos',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosFAAstOccVotos.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#014586';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosFAAstOccVotos[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= VOX Asturias Occidente =================
const datosVOXAstOccVotos = [2668, 3950];
const etiquetasVOXAstOccVotos = ['2019','2023'];
const partidosVOXAstOccVotos = ['VOX','VOX'];

const ctxVOXAstOccVotos = document.getElementById('voxAstOccChart').getContext('2d');

new Chart(ctxVOXAstOccVotos, {
  data: {
    labels: etiquetasVOXAstOccVotos,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosVOXAstOccVotos,
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
        data: datosVOXAstOccVotos,
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
      id: 'etiquetaPartidoVOXAstOccVotos',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXAstOccVotos.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXAstOccVotos[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= IU/Podemos Asturias Occidente =================
const datosIUAstOccVotos = [7121, 7530, 5912, 5555, 5868, 5180, 4821, 3012, 3278];
const etiquetasIUAstOccVotos = ['1987','1991','2003','2007','2011','2012','2015','2019','2023'];
const partidosIUAstOccVotos = ['IU','IU','IU','IU','IU','IU','IU','Podemos-IU','Podemos-IU'];

const ctxIUAstOccVotos = document.getElementById('iuAstOccChart').getContext('2d');

new Chart(ctxIUAstOccVotos, {
  data: {
    labels: etiquetasIUAstOccVotos,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosIUAstOccVotos,
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
        data: datosIUAstOccVotos,
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
      id: 'etiquetaPartidoIUAstOccVotos',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIUAstOccVotos.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIUAstOccVotos[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Podemos/IU Asturias Occidente =================
const datosPodemosAstOcc = [8889, 4612, 1063];
const etiquetasPodemosAstOcc = ['2015','2019','2023'];
const partidosPodemosAstOcc = ['Podemos','Podemos','Podemos-IU'];

const ctxPodemosAstOcc = document.getElementById('podemosAstOccChart').getContext('2d');

new Chart(ctxPodemosAstOcc, {
  data: {
    labels: etiquetasPodemosAstOcc,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPodemosAstOcc,
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
        data: datosPodemosAstOcc,
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
      id: 'etiquetaPartidoPodemosAstOcc',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosAstOcc.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosAstOcc[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CS Asturias Occidente =================
const datosCSAstOcc = [2049, 5761, 315];
const etiquetasCSAstOcc = ['2015','2019','2023'];
const partidosCSAstOcc = ['CS','CS','CS'];

const ctxCSAstOcc = document.getElementById('csAstOccChart').getContext('2d');

new Chart(ctxCSAstOcc, {
  data: {
    labels: etiquetasCSAstOcc,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCSAstOcc,
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
        data: datosCSAstOcc,
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
      id: 'etiquetaPartidoCSAstOcc',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSAstOcc.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSAstOcc[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= URAS Asturias Occidente =================
const datosURASAstOcc = [11033, 4041, 1030, 337, 210, 245];
const etiquetasURASAstOcc = ['1999','2003','2007','2011','2012','2015'];
const partidosURASAstOcc = ['URAS','URAS','URAS','URAS','URAS','URAS'];

const ctxURASAstOcc = document.getElementById('urasAstOccChart').getContext('2d');

new Chart(ctxURASAstOcc, {
  data: {
    labels: etiquetasURASAstOcc,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosURASAstOcc,
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
        data: datosURASAstOcc,
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
      id: 'etiquetaPartidoURASAstOcc',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosURASAstOcc.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#0492C0';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosURASAstOcc[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CDS Asturias Occidente (votos totales, 1987-1991) =================
const datosCDSAstOcc = [
  11329,   // 1987
  6335     // 1991
];
const etiquetasCDSAstOcc = ['1987','1991'];
const partidosCDSAstOcc = ['CDS','CDS'];

const ctxCDSAstOcc = document.getElementById('cdsAstOccChart').getContext('2d');

new Chart(ctxCDSAstOcc, {
  data: {
    labels: etiquetasCDSAstOcc,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCDSAstOcc,
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
        data: datosCDSAstOcc,
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
      id: 'etiquetaPartidoCDSAstOcc',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSAstOcc.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1E90FF';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSAstOcc[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UPyD Asturias Occidente (votos totales, 2011-2015) =================
const datosUPyDAstOcc = [
  587,   // 2011
  943,   // 2012
  231    // 2015
];
const etiquetasUPyDAstOcc = ['2011','2012','2015'];
const partidosUPyDAstOcc = ['UPyD','UPyD','UPyD'];

const ctxUPyDAstOcc = document.getElementById('upydAstOccChart').getContext('2d');

new Chart(ctxUPyDAstOcc, {
  data: {
    labels: etiquetasUPyDAstOcc,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUPyDAstOcc,
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
        data: datosUPyDAstOcc,
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
      id: 'etiquetaPartidoUPyDAstOcc',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDAstOcc.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#ff60da';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDAstOcc[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

  // Datos Asturias Occidente por partido
  const etiquetasAstOcc = ['1983','1987','1991','1995','1999','2003','2007','2011','2012','2015','2019','2023'];

  const datosAstOcc = {
    'PP/AP-PDP-UL': [29111, 22872, 25308, 34694, 27660, 27660, 30710, 18837, 14628, 16643, 15052, 21236],
    'PSOE':         [33314, 37550, 38994, 37066, 38035, 38173, 40372, 27499,19816, 22216, 25228, 22482],
    'VOX':          [null,null,null,null,null,null,null,null,null,null,2668,3950],
    'CS':           [null,null,null,null,null,null,null,null,null,2049,5761,315],
    'Podemos/IU':   [null,null,null,null,null,null,null,null,null,8889,4612,1063],
    'URAS':         [null,null,null,null,11033,4041,1030,337,210,245,null,null],
    'CDS':          [null,11329,6335,null,null,null,null,null,null,null,null,null],
    'IU':           [null,7121,7530,null,null,5912,5555,5868,5180,4821,3012,3278],
    'UPyD':         [null,null,null,null,null,null,null,587,943,231,null,null],
    'FA':           [null,null,null,null,null,null,null,18484,13325,5220,3150,4049]
  };

  const coloresPartidosAstOcc = {
    'PP/AP-PDP-UL': '#0000FF',
    'PSOE': '#FF0000',
    'VOX': '#008000',
    'CS': '#FF8C00',
    'Podemos/IU': '#800080',
    'URAS': '#49BAE9',
    'CDS': '#00BFFF',
    'IU': '#B22222',
    'UPyD': '#ff60da',
    'FA': '#014586'
  };

  const datasetsAstOcc = Object.keys(datosAstOcc).map(partido => ({
    type: 'line',
    label: partido,
    data: datosAstOcc[partido],
    borderColor: coloresPartidosAstOcc[partido],
    backgroundColor: 'transparent',
    fill: false,
    tension: 0.3,
    spanGaps: true,
    pointRadius: 4,
    pointBackgroundColor: coloresPartidosAstOcc[partido],
    datalabels: { 
      display: true,
      color: coloresPartidosAstOcc[partido],
      font: { weight: 'bold', size: 12 },
      formatter: v => v != null ? v.toLocaleString() : ''
    }
  }));

  const ctxAstOcc = document.getElementById('votosTotalesAstOccChart').getContext('2d');

  new Chart(ctxAstOcc, {
    data: {
      labels: etiquetasAstOcc,
      datasets: datasetsAstOcc
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