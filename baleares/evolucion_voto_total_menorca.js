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
 
// ================= PP Menorca (votos totales, 1983–2023) =================
const datosPPMenorca = [9042, 11288, 14901, 14968, 13287, 14253, 15801, 17479, 11541, 10247, 14859];
const etiquetasPPMenorca = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023'];
const partidosPPMenorca = ['AP-PDP-UL','AP','PP','PP','PP','PP','PP','PP','PP','PP','PP'];

const ctxPPMenorca = document.getElementById('ppMenorcaChart').getContext('2d');

new Chart(ctxPPMenorca, {
  data: {
    labels: etiquetasPPMenorca,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPPMenorca,
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
        data: datosPPMenorca,
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
      id: 'etiquetaPartidoPPMenorca',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPMenorca.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPMenorca[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PSOE Menorca (votos totales, 1983–2023) =================
const datosPSOEMenorca = [10421, 10295, 11109, 9958, 12487, 13616, 14113, 10276, 8453, 10698, 10282];
const etiquetasPSOEMenorca = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023'];
const partidosPSOEMenorca = ['PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE'];

const ctxPSOEMenorca = document.getElementById('psoeMenorcaChart').getContext('2d');

new Chart(ctxPSOEMenorca, {
  data: {
    labels: etiquetasPSOEMenorca,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPSOEMenorca,
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
        data: datosPSOEMenorca,
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
      id: 'etiquetaPartidoPSOEMenorca',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSOEMenorca.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSOEMenorca[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= MxMe Menorca (votos totales, 2015–2023) =================
const datosMxMeMenorca = [6568, 5960, 6382];
const etiquetasMxMeMenorca = ['2015','2019','2023'];
const partidosMxMeMenorca = ['MxMe','MxMe','MxMe'];

const ctxMxMeMenorca = document.getElementById('mxmeMenorcaChart').getContext('2d');

new Chart(ctxMxMeMenorca, {
  data: {
    labels: etiquetasMxMeMenorca,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosMxMeMenorca,
        backgroundColor: 'rgba(36,74,60,0.7)', // color #244a3c
        borderColor: '#244a3c',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#244a3c', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() // separador de miles
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosMxMeMenorca,
        borderColor: '#244a3c',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#244a3c'
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
      id: 'etiquetaPartidoMxMeMenorca',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosMxMeMenorca.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#244a3c';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosMxMeMenorca[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= VOX Menorca (votos totales, 2019–2023) =================
const datosVOXMenorca = [1205, 2759];
const etiquetasVOXMenorca = ['2019','2023'];
const partidosVOXMenorca = ['VOX','VOX'];

const ctxVOXMenorca = document.getElementById('voxMenorcaChart').getContext('2d');

new Chart(ctxVOXMenorca, {
  data: {
    labels: etiquetasVOXMenorca,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosVOXMenorca,
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
        data: datosVOXMenorca,
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
      id: 'etiquetaPartidoVOXMenorca',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXMenorca.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXMenorca[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Podemos/IU Menorca (votos totales, 2015-2023) =================
const datosPodemosMenorca = [5195, 4331, 2586];
const etiquetasPodemosMenorca = ['2015','2019','2023'];
const partidosPodemosMenorca = ['Podemos','Podemos','Podemos-IU'];

const ctxPodemosMenorca = document.getElementById('podemosMenorcaChart').getContext('2d');

new Chart(ctxPodemosMenorca, {
  data: {
    labels: etiquetasPodemosMenorca,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPodemosMenorca,
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
        data: datosPodemosMenorca,
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
      id: 'etiquetaPartidoPodemosMenorca',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosMenorca.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosMenorca[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CS Menorca (votos totales, 2015-2023) =================
const datosCSMenorca = [3773, 538];  // 2015 no hubo dato, solo 2019 y 2023
const etiquetasCSMenorca = ['2019','2023'];
const partidosCSMenorca = ['CS','CS'];

const ctxCSMenorca = document.getElementById('csMenorcaChart').getContext('2d');

new Chart(ctxCSMenorca, {
  data: {
    labels: etiquetasCSMenorca,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCSMenorca,
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
        data: datosCSMenorca,
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
      id: 'etiquetaPartidoCSMenorca',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSMenorca.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSMenorca[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PSM Menorca (votos totales, 1983-2011) =================
const datosPSMMenorca = [3742, 4013, 3239, 2956, 3292, 3723];
const etiquetasPSMMenorca = ['1983','1995','1999','2003','2007','2011'];
const partidosPSMMenorca = ['PSM','PSM','PSM','PSM','PSM','PSM'];

const ctxPSMMenorca = document.getElementById('psmMenorcaChart').getContext('2d');

new Chart(ctxPSMMenorca, {
  data: {
    labels: etiquetasPSMMenorca,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPSMMenorca,
        backgroundColor: 'rgba(195,65,0,0.7)', // color PSM
        borderColor: '#c34100',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#8B1A00', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPSMMenorca,
        borderColor: '#c34100',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#c34100'
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
      id: 'etiquetaPartidoPSMMenorca',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSMMenorca.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B1A00';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSMMenorca[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CIM Menorca (votos totales, 1983) =================
const datosCIMMenorca = [3250];
const etiquetasCIMMenorca = ['1983'];
const partidosCIMMenorca = ['CIM'];

const ctxCIMMenorca = document.getElementById('cimMenorcaChart').getContext('2d');

new Chart(ctxCIMMenorca, {
  data: {
    labels: etiquetasCIMMenorca,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCIMMenorca,
        backgroundColor: 'rgba(130,180,127,0.7)', // color CIM
        borderColor: '#82b47f',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#4C785B', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCIMMenorca,
        borderColor: '#82b47f',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#82b47f'
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
      id: 'etiquetaPartidoCIMMenorca',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCIMMenorca.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4C785B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCIMMenorca[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PI Menorca (votos totales, 2015-2019) =================
const datosPIMenorca = [1221, 1017];
const etiquetasPIMenorca = ['2015','2019'];
const partidosPIMenorca = ['PI','PI'];

const ctxPIMenorca = document.getElementById('piMenorcaChart').getContext('2d');

new Chart(ctxPIMenorca, {
  data: {
    labels: etiquetasPIMenorca,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPIMenorca,
        backgroundColor: 'rgba(98,210,177,0.7)', // color PI
        borderColor: '#62d2b1',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#339e88', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPIMenorca,
        borderColor: '#62d2b1',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#62d2b1'
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
      id: 'etiquetaPartidoPIMenorca',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPIMenorca.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#339e88';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPIMenorca[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CDS Menorca (votos totales, 1983-1991) =================
const datosCDSMenorca = [510, 2698, 1357];
const etiquetasCDSMenorca = ['1983','1987','1991'];
const partidosCDSMenorca = ['CDS','CDS','CDS'];

const ctxCDSMenorca = document.getElementById('cdsMenorcaChart').getContext('2d');

new Chart(ctxCDSMenorca, {
  data: {
    labels: etiquetasCDSMenorca,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCDSMenorca,
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
        data: datosCDSMenorca,
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
      id: 'etiquetaPartidoCDSMenorca',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSMenorca.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1E90FF';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSMenorca[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= IU/Podemos Menorca (votos totales, 1987-2023) =================
const datosIUMenorca = [4357, 4654, 2926, 2390, 1747, 1728, 1567, 1436, 4331, 2586];
const etiquetasIUMenorca = ['1987','1991','1995','1999','2003','2007','2011','2015','2019','2023'];
const partidosIUMenorca = ['IU','IU','IU','IU','IU','IU','IU','IU','Podemos-IU','Podemos-IU-AV'];

const ctxIUMenorca = document.getElementById('iuMenorcaChart').getContext('2d');

new Chart(ctxIUMenorca, {
  data: {
    labels: etiquetasIUMenorca,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosIUMenorca,
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
        data: datosIUMenorca,
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
      id: 'etiquetaPartidoIUMenorca',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIUMenorca.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIUMenorca[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UPyD Menorca (votos totales, 2011-2015) =================
const datosUPyDMenorca = [406];
const etiquetasUPyDMenorca = ['2011'];
const partidosUPyDMenorca = ['UPyD'];

const ctxUPyDMenorca = document.getElementById('upydMenorcaChart').getContext('2d');

new Chart(ctxUPyDMenorca, {
  data: {
    labels: etiquetasUPyDMenorca,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUPyDMenorca,
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
        data: datosUPyDMenorca,
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
      id: 'etiquetaPartidoUPyDMenorca',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDMenorca.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#ff60da';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDMenorca[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const etiquetasMenorca = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023'];

const datosMenorca = {
  'PP/AP-PDP-UL': [9042,11288,14901,14968,13287,14253,15801,17479,11541,10247,14859],
  'PSOE': [10421,10295,11109,9958,12487,13616,14113,10276,8453,10698,10282],
  'VOX': [null,null,null,null,null,null,null,null,null,1205,2759],
  'CS': [null,null,null,null,null,null,null,null,null,3773,538],
  'Podemos/IU': [null,null,null,null,null,null,null,null,5195,4331,2586],
  'PSM': [3742,null,null,4013,3239,2956,3292,3723,null, null, null],
  'MxME': [null,null,null,null,null,null,null,null,6568,5960,6382],
  'CIM': [3250,null,null,null,null,null,null,null,null,null,null],
  'El PI': [null,null,null,null,null,null,null,null,1221,1017,null],
  'CDS': [510,2698,1357,null,null,null,null,null,null,null,null],
  'IU': [null,4357,4654,2926,2390,1747,1728,1567,1436,4331,2586],
  'UPyD': [null,null,null,null,null,null,null,406,null,null,null]
};

const coloresPartidosMenorca = {
  'PP/AP-PDP-UL': '#0000FF',
  'PSOE': '#FF0000',
  'VOX': '#008000',
  'CS': '#FF8C00',
  'Podemos/IU': '#800080',
  'PSM': '#c34100',
  'MxME': '#244a3c',
  'CIM': '#82b47f',
  'El PI': '#62d2b1',
  'CDS': '#00BFFF',
  'IU': '#B22222',
  'UPyD': '#ff60da'
};

const datasetsMenorca = Object.keys(datosMenorca).map(partido => ({
  type: 'line',
  label: partido,
  data: datosMenorca[partido],
  borderColor: coloresPartidosMenorca[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresPartidosMenorca[partido],
  datalabels: { 
    display: true,
    color: coloresPartidosMenorca[partido],
    font: { weight: 'bold', size: 12 },
    formatter: v => v != null ? v.toLocaleString() : ''
  }
}));

const ctxMenorca = document.getElementById('votosTotalesMenorcaChart').getContext('2d');

new Chart(ctxMenorca, {
  data: {
    labels: etiquetasMenorca,
    datasets: datasetsMenorca
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