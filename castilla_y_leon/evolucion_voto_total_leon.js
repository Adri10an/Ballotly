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

    const datosPPLeon = [91990, 95351, 108883, 139810, 124877, 123043, 120749, 126483, 84326, 71514, 56255,65180];
const etiquetasPPLeon = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2022','2026'];
const partidosPPLeon = ['AP-PDP-UL','AP','PP','PP','PP','PP','PP','PP','PP','PP','PP','PP'];

const ctxPPLeon = document.getElementById('ppLeonChart').getContext('2d');

new Chart(ctxPPLeon, {
  data: {
    labels: etiquetasPPLeon,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPPLeon,
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
        data: datosPPLeon,
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
        ticks: { color: '#333', callback: v => v.toLocaleString('es-ES') } 
      },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoPPLeon',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPLeon.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPLeon[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosPSELeon = [124750, 107791, 106225, 94238, 91058, 113906, 120988, 90014, 71705, 92283, 64019,65703];
const etiquetasPSELeon = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2022','2026'];
const partidosPSELeon = ['PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE'];

const ctxPSELeon = document.getElementById('psoeLeonChart').getContext('2d');

new Chart(ctxPSELeon, {
  data: {
    labels: etiquetasPSELeon,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPSELeon,
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
        data: datosPSELeon,
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
        ticks: { color: '#333', callback: v => v.toLocaleString('es-ES') } 
      },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoPSELeon',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSELeon.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSELeon[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosVOXLeon = [1199, 11034, 34612,38321]; 
const etiquetasVOXLeon = ['2015','2019','2022','2026'];
const partidosVOXLeon = ['VOX','VOX','VOX','VOX'];

const ctxVOXLeon = document.getElementById('voxLeonChart').getContext('2d');

new Chart(ctxVOXLeon, {
  data: {
    labels: etiquetasVOXLeon,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosVOXLeon,
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
        data: datosVOXLeon,
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
        ticks: { color: '#333', callback: v => v.toLocaleString('es-ES') } 
      },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoVOXLeon',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXLeon.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXLeon[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosCSLeon = [23377, 28750, 4935,291];
const etiquetasCSLeon = ['2015','2019','2022','2026'];
const partidosCSLeon = ['CS','CS','CS','CS'];

const ctxCSLeon = document.getElementById('csLeonChart').getContext('2d');

new Chart(ctxCSLeon, {
  data: {
    labels: etiquetasCSLeon,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCSLeon,
        backgroundColor: 'rgba(255,140,0,0.7)', // naranja Cs
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
        data: datosCSLeon,
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
      y: { 
        beginAtZero: true, 
        title: { display: true, text: 'Votos totales', color: '#333' }, 
        ticks: { color: '#333', callback: v => v.toLocaleString('es-ES') } 
      },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoCSLeon',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSLeon.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSLeon[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosPodemosLeon = [32979, 14387, 11216,1637];
const etiquetasPodemosLeon = ['2015','2019','2022','2026'];
const partidosPodemosLeon = ['Podemos','Podemos','Podemos/IU','Podemos'];

const ctxPodemosLeon = document.getElementById('podemosLeonChart').getContext('2d');

new Chart(ctxPodemosLeon, {
  data: {
    labels: etiquetasPodemosLeon,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPodemosLeon,
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
        data: datosPodemosLeon,
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
      y: { 
        beginAtZero: true, 
        title: { display: true, text: 'Votos totales', color: '#333' }, 
        ticks: { color: '#333', callback: v => v.toLocaleString('es-ES') } 
      },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoPodemosLeon',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosLeon.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosLeon[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosUPLLeon = [11432, 39425, 54158, 56389, 40781, 25212, 18325, 26705, 47952,48709];
const etiquetasUPLLeon = ['1991','1995','1999','2003','2007','2011','2015','2019','2022','2026'];
const partidosUPLLeon = ['UPL','UPL','UPL','UPL','UPL','UPL','UPL','UPL','UPL','UPL'];

const ctxUPLLeon = document.getElementById('uplLeonChart').getContext('2d');

new Chart(ctxUPLLeon, {
  data: {
    labels: etiquetasUPLLeon,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUPLLeon,
        backgroundColor: 'rgba(185,19,103,0.7)', // color UPL
        borderColor: '#b91367',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#b91367', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString('es-ES') 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosUPLLeon,
        borderColor: '#b91367',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#b91367'
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
        ticks: { color: '#333', callback: v => v.toLocaleString('es-ES') } 
      },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoUPLLeon',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPLLeon.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#b91367';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPLLeon[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosCDSLeon = [6177, 38794, 14915];
const etiquetasCDSLeon = ['1983','1987','1991'];
const partidosCDSLeon = ['CDS','CDS','CDS'];

const ctxCDSLeon = document.getElementById('cdsLeonChart').getContext('2d');

new Chart(ctxCDSLeon, {
  data: {
    labels: etiquetasCDSLeon,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCDSLeon,
        backgroundColor: 'rgba(0,191,255,0.7)', // azul CDS
        borderColor: '#00BFFF',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#1E90FF', 
          font: { weight: 'bold' }, 
          formatter: v => v.toLocaleString('es-ES')
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCDSLeon,
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
      y: { 
        beginAtZero: true, 
        title: { display: true, text: 'Votos totales', color: '#333' },
        ticks: { color: '#333', callback: v => v.toLocaleString('es-ES') } 
      },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoCDSLeon',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSLeon.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1E90FF';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSLeon[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosIULeon = [11009, 13369, 20864, 11693, 9767, 6395, 10754, 8991, 4315, 11216,2995];
const etiquetasIULeon = ['1987','1991','1995','1999','2003','2007','2011','2015','2019','2022','2026'];
const partidosIULeon = ['IU','IU','IU','IU','IU','IU','IU','IU','IU','IU','IU'];

const ctxIULeon = document.getElementById('iuLeonChart').getContext('2d');

new Chart(ctxIULeon, {
  data: {
    labels: etiquetasIULeon,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosIULeon,
        backgroundColor: 'rgba(178,34,34,0.7)', // rojo IU
        borderColor: '#B22222',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#8B0000', 
          font: { weight: 'bold' }, 
          formatter: v => v.toLocaleString('es-ES')
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosIULeon,
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
      y: { 
        beginAtZero: true, 
        title: { display: true, text: 'Votos totales', color: '#333' },
        ticks: { color: '#333', callback: v => v.toLocaleString('es-ES') } 
      },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoIULeon',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIULeon.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIULeon[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosUPyDLeon = [4719, 1862]; // 2011 y 2015 corregido
const etiquetasUPyDLeon = ['2011','2015'];
const partidosUPyDLeon = ['UPyD','UPyD'];

const ctxUPyDLeon = document.getElementById('upydLeonChart').getContext('2d');

new Chart(ctxUPyDLeon, {
  data: {
    labels: etiquetasUPyDLeon,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUPyDLeon,
        backgroundColor: 'rgba(255,96,218,0.7)',
        borderColor: '#FF60DA',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#FF60DA',
          font: { weight: 'bold' },
          formatter: v => v.toLocaleString('es-ES')
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosUPyDLeon,
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
        ticks: { color: '#333', callback: v => v.toLocaleString('es-ES') }
      },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoUPyDLeon',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDLeon.forEach((v, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF60DA';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDLeon[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosSALFLeon = [2615];
const etiquetasSALFLeon = ['2026'];
const partidosSALFLeon = ['SALF'];

const ctxSALFLeon = document.getElementById('salfLeonChart').getContext('2d');

new Chart(ctxSALFLeon, {
  data: {
    labels: etiquetasSALFLeon,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosSALFLeon,
        backgroundColor: 'rgba(0,90,150,0.7)',
        borderColor: '#005a96',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#005a96',
          font: { weight: 'bold' },
          formatter: v => v.toLocaleString('es-ES')
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosSALFLeon,
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
      id: 'etiquetaPartidoSALFLeon',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosSALFLeon.forEach((v, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#005a96';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosSALFLeon[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const etiquetasLeonVotos = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2022','2026'];

const datosLeonVotos = {
  'PP':           [91990, 95351, 108883, 139810, 124877, 123043, 120749, 126483, 84326, 71514, 56255,65180],
  'PSOE':         [124750, 107791, 106225, 94238, 91058, 113906, 120988, 90014, 71705, 92283, 64019,65703],
  'VOX':          [null,null,null,null,null,null,null,null,1199,11034,34612,38321],
  'Cs':           [null,null,null,null,null,null,null,null,23377,28750,4935,291],
  'Podemos/IU':   [null,null,null,null,null,null,null,null,32979,14387,11216,1637],
  'UPL':          [null,null,11432,39425,54158,56389,40781,25212,18325,26705,47952,48709],
  'CDS':          [6177, 38794, 14915,null,null,null,null,null,null,null,null],
  'IU':           [null,11009,13369,20864,11693,9767,6395,10754,8991,4315,11216,2995],
  'UPyD':         [null,null,null,null,null,null,null,4719,1862,null,null],
  'SALF':         [null,null,null,null,null,null,null,null,null,null,null,2615],
};

const coloresPartidosLeonVotos = {
  'PP': '#0000FF',
  'PSOE': '#FF0000',
  'VOX': '#008000',
  'Cs': '#FF8C00',
  'Podemos/IU': '#800080',
  'UPL': '#b91367',
  'CDS': '#00BFFF',
  'IU': '#B22222',
  'UPyD': '#FF60DA',
  'SALF': '#005a96',
};

const datasetsLeonVotos = Object.keys(datosLeonVotos).map(partido => ({
  type: 'line',
  label: partido,
  data: datosLeonVotos[partido],
  borderColor: coloresPartidosLeonVotos[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresPartidosLeonVotos[partido],
  datalabels: {
    display: true,
    color: coloresPartidosLeonVotos[partido],
    font: { weight: 'bold', size: 12 },
    formatter: v => v != null ? v.toLocaleString('es-ES') : ''
  }
}));

const ctxLeonVotos = document.getElementById('votosTotalesLeonChart').getContext('2d');

new Chart(ctxLeonVotos, {
  data: {
    labels: etiquetasLeonVotos,
    datasets: datasetsLeonVotos
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
        ticks: { color: '#333', callback: v => v.toLocaleString('es-ES') } 
      },
      x: { 
        title: { display: true, text: 'Año', color: '#333' }, 
        ticks: { color: '#333' } 
      }
    }
  },
  plugins: [ChartDataLabels]
});