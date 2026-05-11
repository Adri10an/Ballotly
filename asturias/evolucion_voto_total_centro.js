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
 
// ================= PP Asturias Centro =================
const datosPPAstCntVotos = [121108, 104843, 119095, 215265, 153940, 188565, 197089, 91520, 84035, 89692, 69314, 139012];
const etiquetasPPAstCntVotos = ['1983','1987','1991','1995','1999','2003','2007','2011','2012','2015','2019','2023'];
const partidosPPAstCntVotos = ['AP-PDP-UL','AP','PP','PP','PP','PP','PP','PP','PP','PP','PP','PP'];

const ctxPPAstCntVotos = document.getElementById('ppAstCntChart').getContext('2d');

new Chart(ctxPPAstCntVotos, {
  data: {
    labels: etiquetasPPAstCntVotos,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPPAstCntVotos,
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
        data: datosPPAstCntVotos,
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
      id: 'etiquetaPartidoPPAstCntVotos',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPAstCntVotos.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPAstCntVotos[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PSOE Asturias Centro =================
const datosPSOEAstCntVotos = [238855, 163919, 158492, 160691, 224710, 190249, 188510, 135744, 127092, 108202, 146201, 157852];
const etiquetasPSOEAstCntVotos = ['1983','1987','1991','1995','1999','2003','2007','2011','2012','2015','2019','2023'];
const partidosPSOEAstCntVotos = ['PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE'];

const ctxPSOEAstCntVotos = document.getElementById('psoeAstCntChart').getContext('2d');

new Chart(ctxPSOEAstCntVotos, {
  data: {
    labels: etiquetasPSOEAstCntVotos,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPSOEAstCntVotos,
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
        data: datosPSOEAstCntVotos,
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
      id: 'etiquetaPartidoPSOEAstCntVotos',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSOEAstCntVotos.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSOEAstCntVotos[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= VOX Asturias Centro =================
const datosVOXAstCntVotos = [29503, 46452];
const etiquetasVOXAstCntVotos = ['2019','2023'];
const partidosVOXAstCntVotos = ['VOX','VOX'];

const ctxVOXAstCntVotos = document.getElementById('voxAstCntChart').getContext('2d');

new Chart(ctxVOXAstCntVotos, {
  data: {
    labels: etiquetasVOXAstCntVotos,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosVOXAstCntVotos,
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
        data: datosVOXAstCntVotos,
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
      id: 'etiquetaPartidoVOXAstCntVotos',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXAstCntVotos.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXAstCntVotos[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= IU / Podemos-IU Asturias Centro =================
const datosIUAstCntVotos = [60339, 69138, 95383, 49659, 59871, 49756, 53486, 61289, 57587, 30851, 35588];
const etiquetasIUAstCntVotos = ['1987','1991','1995','1999','2003','2007','2011','2012','2015','2019','2023'];
const partidosIUAstCntVotos = ['IU','IU','IU','IU','IU','IU','IU','IU','IU','Podemos-IU','Podemos-IU'];

const ctxIUAstCntVotos = document.getElementById('iuAstCntChart').getContext('2d');

new Chart(ctxIUAstCntVotos, {
  data: {
    labels: etiquetasIUAstCntVotos,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosIUAstCntVotos,
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
        data: datosIUAstCntVotos,
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
      id: 'etiquetaPartidoIUAstCntVotos',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIUAstCntVotos.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIUAstCntVotos[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Podemos / Podemos-IU Asturias Centro =================
const datosPodemosAstCntVotos = [89291, 50964, 18937];
const etiquetasPodemosAstCntVotos = ['2015','2019','2023'];
const partidosPodemosAstCntVotos = ['Podemos','Podemos','Podemos-IU'];

const ctxPodemosAstCntVotos = document.getElementById('podemosAstCntChart').getContext('2d');

new Chart(ctxPodemosAstCntVotos, {
  data: {
    labels: etiquetasPodemosAstCntVotos,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPodemosAstCntVotos,
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
        data: datosPodemosAstCntVotos,
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
      id: 'etiquetaPartidoPodemosAstCntVotos',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosAstCntVotos.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosAstCntVotos[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= FA Asturias Centro =================
const datosFAAstCntVotos = [144119, 100292, 34248, 28024, 14022];
const etiquetasFAAstCntVotos = ['2011','2012','2015','2019','2023'];
const partidosFAAstCntVotos = ['FA','FA','FA','FA','FA'];

const ctxFAAstCntVotos = document.getElementById('facAstCntChart').getContext('2d');

new Chart(ctxFAAstCntVotos, {
  data: {
    labels: etiquetasFAAstCntVotos,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosFAAstCntVotos,
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
        data: datosFAAstCntVotos,
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
      id: 'etiquetaPartidoFAAstCntVotos',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosFAAstCntVotos.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#014586';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosFAAstCntVotos[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CS Asturias Centro =================
const datosCSAstCnt = [34964, 64338, 4333];
const etiquetasCSAstCnt = ['2015','2019','2023'];
const partidosCSAstCnt = ['CS','CS','CS'];

const ctxCSAstCnt = document.getElementById('csAstCntChart').getContext('2d');

new Chart(ctxCSAstCnt, {
  data: {
    labels: etiquetasCSAstCnt,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCSAstCnt,
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
        data: datosCSAstCnt,
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
      id: 'etiquetaPartidoCSAstCnt',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSAstCnt.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSAstCnt[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= URAS Asturias Centro =================
const datosURASAstCnt = [28476, 11756, 10952, 2460];
const etiquetasURASAstCnt = ['1999','2003','2007','2011'];
const partidosURASAstCnt = ['URAS','URAS','URAS','URAS'];

const ctxURASAstCnt = document.getElementById('urasAstCntChart').getContext('2d');

new Chart(ctxURASAstCnt, {
  data: {
    labels: etiquetasURASAstCnt,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosURASAstCnt,
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
        data: datosURASAstCnt,
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
      id: 'etiquetaPartidoURASAstCnt',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosURASAstCnt.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#0492C0';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosURASAstCnt[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PAS Asturias Centro =================
const datosPASAstCnt = [12672, 18021, 18021];
const etiquetasPASAstCnt = ['1991','1995','1999'];
const partidosPASAstCnt = ['PAS','PAS','PAS'];

const ctxPASAstCnt = document.getElementById('pasAstCntChart').getContext('2d');

new Chart(ctxPASAstCnt, {
  data: {
    labels: etiquetasPASAstCnt,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPASAstCnt,
        backgroundColor: 'rgba(127,150,98,0.7)', // verde PAS
        borderColor: '#7F9662',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#556B2F', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() // separador de miles
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPASAstCnt,
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
      id: 'etiquetaPartidoPASAstCnt',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPASAstCnt.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#556B2F';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPASAstCnt[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CDS Asturias Centro (votos totales, 1987-1995) =================
const datosCDSAstCnt = [
  88398,   // 1987
  26091,   // 1991
  7860     // 1995
];
const etiquetasCDSAstCnt = ['1987','1991','1995'];
const partidosCDSAstCnt = ['CDS','CDS','CDS'];

const ctxCDSAstCnt = document.getElementById('cdsAstCntChart').getContext('2d');

new Chart(ctxCDSAstCnt, {
  data: {
    labels: etiquetasCDSAstCnt,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCDSAstCnt,
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
        data: datosCDSAstCnt,
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
      id: 'etiquetaPartidoCDSAstCnt',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSAstCnt.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1E90FF';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSAstCnt[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UPyD Asturias Centro (votos totales, 2011-2015) =================
const datosUPyDAstCnt = [
  13733,   // 2011
  17138,   // 2012
  3942     // 2015
];
const etiquetasUPyDAstCnt = ['2011','2012','2015'];
const partidosUPyDAstCnt = ['UPyD','UPyD','UPyD'];

const ctxUPyDAstCnt = document.getElementById('upydAstCntChart').getContext('2d');

new Chart(ctxUPyDAstCnt, {
  data: {
    labels: etiquetasUPyDAstCnt,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUPyDAstCnt,
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
        data: datosUPyDAstCnt,
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
      id: 'etiquetaPartidoUPyDAstCnt',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDAstCnt.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#ff60da';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDAstCnt[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

  // Etiquetas de años
  const etiquetasAstCnt = ['1983','1987','1991','1995','1999','2003','2007','2011','2012','2015','2019','2023'];

  // Datos de cada partido
  const datosAstCnt = {
    'PP/AP-PDP-UL': [121108, 104843, 119095, 215265, 153940, 188565, 197089, 91520, 84035, 89692, 69314, 139012],
    'PSOE':        [238855, 163919, 158492, 160691, 224710, 190249, 188510, 135744, 127092, 108202, 146201, 157852],
    'VOX':         [null,null,null,null,null,null,null,null,null,null,29503,46452],
    'CS':          [null,null,null,null,null,null,null,null,null,34964,64338,4333],
    'Podemos/IU':  [null,null,null,null,null,null,null,null,null,89291,50964,18937],
    'URAS':        [null,null,null,null,28476,11756,10952,2460,null,null,null,null],
    'CDS':         [null,88398,26091,7860,null,null,null,null,null,null,null,null],
    'PAS':         [null,null,12672,18021,18021,null,null,null,null,null,null,null],
    'IU':          [null,60339,69138,95383,49659,59871,49756,53486,61289,57587,30851,35588],
    'UPyD':        [null,null,null,null,null,null,null,13733,17138,3942,null,null],
    'FA':          [null,null,null,null,null,null,null,144119,100292,34248,28024,14022]
  };

  // Colores de los partidos
  const coloresPartidosAstCnt = {
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
  const datasetsAstCnt = Object.keys(datosAstCnt).map(partido => ({
    type: 'line',
    label: partido,
    data: datosAstCnt[partido],
    borderColor: coloresPartidosAstCnt[partido],
    backgroundColor: 'transparent',
    fill: false,
    tension: 0.3,
    spanGaps: true,
    pointRadius: 4,
    pointBackgroundColor: coloresPartidosAstCnt[partido],
    datalabels: {
      display: true,
      color: coloresPartidosAstCnt[partido],
      font: { weight: 'bold', size: 12 },
      formatter: v => v != null ? v.toLocaleString() : ''
    }
  }));

  const ctxAstCnt = document.getElementById('votosTotalesAstCntChart').getContext('2d');

  new Chart(ctxAstCnt, {
    data: {
      labels: etiquetasAstCnt,
      datasets: datasetsAstCnt
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