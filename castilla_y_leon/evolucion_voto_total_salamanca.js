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

const datosPPSalamanca = [75792, 73385, 89576, 121221, 113537, 113026, 113509, 113517, 77685, 73431, 65163,73135];
const etiquetasPPSalamanca = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2022','2026'];
const partidosPPSalamanca = ['AP-PDP-UL','AP','PP','PP','PP','PP','PP','PP','PP','PP','PP','PP'];

const ctxPPSalamanca = document.getElementById('ppSalamancaChart').getContext('2d');

new Chart(ctxPPSalamanca, {
  data: {
    labels: etiquetasPPSalamanca,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPPSalamanca,
        backgroundColor: 'rgba(0,0,255,0.7)', // azul PP
        borderColor: '#0000FF',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#00008B',
          font: { weight: 'bold' },
          formatter: (v) => v.toLocaleString('es-ES')
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPPSalamanca,
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoPPSalamanca',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPSalamanca.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPSalamanca[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosPsoESalamanca = [100399, 72968, 79562, 73457, 70449, 80401, 80523, 58339, 47293, 63556, 49443,49590];
const etiquetasPsoESalamanca = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2022','2026'];
const partidosPsoESalamanca = ['PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE'];

const ctxPsoESalamanca = document.getElementById('psoeSalamancaChart').getContext('2d');

new Chart(ctxPsoESalamanca, {
  data: {
    labels: etiquetasPsoESalamanca,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPsoESalamanca,
        backgroundColor: 'rgba(255,0,0,0.7)', // rojo PSOE
        borderColor: '#FF0000',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#FF0000', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString('es-ES') 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPsoESalamanca,
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoPsoESalamanca',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPsoESalamanca.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPsoESalamanca[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosVoxSalamanca = [1448,9137, 30192,31910];
const etiquetasVoxSalamanca = ['2015','2019','2022','2026'];
const partidosVoxSalamanca = ['VOX','VOX','VOX','VOX'];

const ctxVoxSalamanca = document.getElementById('voxSalamancaChart').getContext('2d');

new Chart(ctxVoxSalamanca, {
  data: {
    labels: etiquetasVoxSalamanca,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosVoxSalamanca,
        backgroundColor: 'rgba(0,128,0,0.7)', // verde VOX
        borderColor: '#008000',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#006400', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString('es-ES')
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosVoxSalamanca,
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoVoxSalamanca',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVoxSalamanca.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVoxSalamanca[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosCSSalamanca = [24907, 29648, 8311,766];
const etiquetasCSSalamanca = ['2015','2019','2022','2026'];
const partidosCSSalamanca = ['CS','CS','CS','CS'];

const ctxCSSalamanca = document.getElementById('csSalamancaChart').getContext('2d');

new Chart(ctxCSSalamanca, {
  data: {
    labels: etiquetasCSSalamanca,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCSSalamanca,
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
        data: datosCSSalamanca,
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoCSSalamanca',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSSalamanca.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSSalamanca[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});
 
const datosPodemosSalamanca = [20135, 7652, 5736,1062];
const etiquetasPodemosSalamanca = ['2015','2019','2022','2026'];
const partidosPodemosSalamanca = ['Podemos','Podemos','Podemos-IU-AV','Podemos'];

const ctxPodemosSalamanca = document.getElementById('podemosSalamancaChart').getContext('2d');

new Chart(ctxPodemosSalamanca, {
  data: {
    labels: etiquetasPodemosSalamanca,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPodemosSalamanca,
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
        data: datosPodemosSalamanca,
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoPodemosSalamanca',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosSalamanca.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosSalamanca[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosCDSSalamanca = [7561, 45258, 15798];
const etiquetasCDSSalamanca = ['1983','1987','1991'];
const partidosCDSSalamanca = ['CDS','CDS','CDS'];

const ctxCDSSalamanca = document.getElementById('cdsSalamancaChart').getContext('2d');

new Chart(ctxCDSSalamanca, {
  data: {
    labels: etiquetasCDSSalamanca,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCDSSalamanca,
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
        data: datosCDSSalamanca,
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoCDSSalamanca',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSSalamanca.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1E90FF';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSSalamanca[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosIUSalamanca = [6606, 8020, 18428, 8013, 4462, 4802, 6449, 5594, 2554, 5736,1870];
const etiquetasIUSalamanca = ['1987','1991','1995','1999','2003','2007','2011','2015','2019','2022','2026'];
const partidosIUSalamanca = ['IU','IU','IU','IU','IU','IU','IU','IU','IU','Podemos-IU-SAL','IU'];

const ctxIUSalamanca = document.getElementById('iuSalamancaChart').getContext('2d');

new Chart(ctxIUSalamanca, {
  data: {
    labels: etiquetasIUSalamanca,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosIUSalamanca,
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
        data: datosIUSalamanca,
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
    animation: { duration: 1500, easing: 'easeOutBounce' },
    plugins: { 
      legend: { position: 'top', labels: { color: '#333' } }, 
      datalabels: { display: true } 
    },
    scales: {
      y: { beginAtZero: true, title: { display: true, text: 'Votos', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoIUSalamanca',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIUSalamanca.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIUSalamanca[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UPyD Salamanca =================
const datosUPyDSalamanca = [5924, 2782];
const etiquetasUPyDSalamanca = ['2011','2015'];
const partidosUPyDSalamanca = ['UPyD','UPyD'];

const ctxUPyD = document.getElementById('upydSalamancaChart').getContext('2d');

new Chart(ctxUPyD, {
  data: {
    labels: etiquetasUPyDSalamanca,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUPyDSalamanca,
        backgroundColor: 'rgba(255,96,218,0.7)',
        borderColor: '#FF60DA',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#FF60DA', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString('es-ES') 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosUPyDSalamanca,
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
      y: { 
        beginAtZero: true, 
        title: { display: true, text: 'Votos', color: '#333' }, 
        ticks: { color: '#333', callback: v => v.toLocaleString('es-ES') } 
      },
      x: { 
        title: { display: true, text: 'Año', color: '#333' }, 
        ticks: { color: '#333' } 
      }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoUPyDSalamanca',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDSalamanca.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF60DA';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDSalamanca[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= SALF Salamanca =================
const datosSALFSalamanca = [2107];
const etiquetasSALFSalamanca = ['2026'];
const partidosSALFSalamanca = ['SALF'];

const ctxSALF = document.getElementById('salfSalamancaChart').getContext('2d');

new Chart(ctxSALF, {
  data: {
    labels: etiquetasSALFSalamanca,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosSALFSalamanca,
        backgroundColor: 'rgba(0,90,150,0.7)',
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
        data: datosSALFSalamanca,
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
        title: { display: true, text: 'Votos', color: '#333' }, 
        ticks: { color: '#333', callback: v => v.toLocaleString('es-ES') } 
      },
      x: { 
        title: { display: true, text: 'Año', color: '#333' }, 
        ticks: { color: '#333' } 
      }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoSALFSalamanca',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosSALFSalamanca.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#005a96';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosSALFSalamanca[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosUPLTotal = [594, 1616,2622];
const etiquetasUPL = ['2019','2022','2026'];
const partidosUPL = ['UPL','UPL','UPL'];
const colorUPL = '#b91367';

const ctxUPLTotal = document.getElementById('uplSalamancaChartTotal').getContext('2d');

new Chart(ctxUPLTotal, {
  data: {
    labels: etiquetasUPL,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUPLTotal,
        backgroundColor: 'rgba(185,19,103,0.7)',
        borderColor: colorUPL,
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: colorUPL,
          font: { weight: 'bold' },
          formatter: v => v.toLocaleString('es-ES')
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosUPLTotal,
        borderColor: colorUPL,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorUPL
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
        title: { display: true, text: 'Votos', color: '#333' }, 
        ticks: { color: '#333' } 
      },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoUPLTotal',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPLTotal.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = colorUPL;
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPL[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosEspanaVaciadaTotal = [3179,637];
const etiquetasEspanaVaciadaTotal = ['2022','2026'];
const partidosEspanaVaciadaTotal = ['España Vaciada','España Vaciada'];
const colorEspanaVaciadaTotal = '#c4615b';

const ctxEspanaVaciadaTotal = document.getElementById('espanaVaciadaChartTotal').getContext('2d');

new Chart(ctxEspanaVaciadaTotal, {
  data: {
    labels: etiquetasEspanaVaciadaTotal,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosEspanaVaciadaTotal,
        backgroundColor: 'rgba(196,97,91,0.7)',
        borderColor: colorEspanaVaciadaTotal,
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: colorEspanaVaciadaTotal,
          font: { weight: 'bold' },
          formatter: v => v.toLocaleString('es-ES')
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosEspanaVaciadaTotal,
        borderColor: colorEspanaVaciadaTotal,
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: colorEspanaVaciadaTotal
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
        title: { display: true, text: 'Votos', color: '#333' }, 
        ticks: { color: '#333' } 
      },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoEspanaVaciadaTotal',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosEspanaVaciadaTotal.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = colorEspanaVaciadaTotal;
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosEspanaVaciadaTotal[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

    const etiquetasSalamancaTotal = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2022','2026'];

    const datosSalamancaTotal = {
      'PP':           [75792, 73385, 89576, 121221, 113537, 113026, 113509, 113517, 77685, 73431, 65163,73135],
      'PSOE':         [100399, 72968, 79562, 73457, 70449, 80401, 80523, 58339, 47293, 63556, 49443,49590],
      'VOX':          [null,null,null,null,null,null,null,null,1448,9137,30192,31910],
      'CS':           [null,null,null,null,null,null,null,null,24907,29648,8311,766],
      'Podemos/IU':   [null,null,null,null,null,null,null,null,20135,7652,5736,1062],
      'CDS':          [7561, 45258, 15798,null,null,null,null,null,null,null,null],
      'IU':           [null,6606,8020,18428,8013,4462,4802,6449,5594,2554,5736,1870],
      'UPL':          [null,null,null,null,null,null,null,null,null,594,1616],
      'EV':          [null,null,null,null,null,null,null,null,null,null,3179,637],
      'UPyD':         [null,null,null,null,null,null,null,5924,2782,null,null,null],
      'SALF':         [null,null,null,null,null,null,null,null,null,null,null,2107],
    };

    const coloresPartidosSalamanca = {
      'PP': '#0000FF',
      'PSOE': '#FF0000',
      'VOX': '#008000',
      'CS': '#FF8C00',
      'Podemos/IU': '#800080',
      'CDS': '#00BFFF',
      'IU': '#B22222',
      'UPL': '#b91367',
      'EV': '#C4615B',
      'UPyD': '#FF60DA',
      'SALF': '#005a96',
    };

    // Construcción de datasets
    const datasetsSalamancaTotal = Object.keys(datosSalamancaTotal).map(partido => ({
      type: 'line',
      label: partido,
      data: datosSalamancaTotal[partido],
      borderColor: coloresPartidosSalamanca[partido],
      backgroundColor: 'transparent',
      fill: false,
      tension: 0.3,
      spanGaps: true,
      pointRadius: 4,
      pointBackgroundColor: coloresPartidosSalamanca[partido],
      datalabels: { 
        display: true,
        color: coloresPartidosSalamanca[partido], 
        font: { weight: 'bold', size: 12 }, 
        formatter: v => v != null ? v.toLocaleString('es-ES') : ''
      }
    }));

    const ctxSalamancaTotal = document.getElementById('salamancaChart').getContext('2d');

    new Chart(ctxSalamancaTotal, {
      data: {
        labels: etiquetasSalamancaTotal,
        datasets: datasetsSalamancaTotal
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top', labels: { color: '#333' } },
          datalabels: { display: true }
        },
        scales: {
          y: { beginAtZero: true, title: { display: true, text: 'Votos', color: '#333' }, ticks: { color: '#333' } },
          x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
        }
      },
      plugins: [ChartDataLabels]
    });