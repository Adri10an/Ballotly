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
// ================= PP (votos totales) SEGOVIA =================
// ================= PP (votos totales) SEGOVIA =================
const datosPPSegoviaVotos = [38893, 19418, 38663, 51842, 47391, 47636, 49525, 48886, 33421, 28822, 25187,29764];
const etiquetasPPSegoviaVotos = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2022','2026'];
const partidosPPSegoviaVotos = ['AP-PDP-UL','AP','PP','PP','PP','PP','PP','PP','PP','PP','PP','PP'];

const ctxPPSegoviaVotos = document.getElementById('ppSegoviaVotosChart').getContext('2d');

new Chart(ctxPPSegoviaVotos, {
  data: {
    labels: etiquetasPPSegoviaVotos,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPPSegoviaVotos,
        backgroundColor: 'rgba(0,0,255,0.7)', // azul intenso (igual que porcentajes)
        borderColor: '#0000FF',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#00008B', // mismo detalle que en porcentajes
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPPSegoviaVotos,
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
      y: { beginAtZero: true, title: { display: true, text: 'Número de votos', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoPPSegoviaVotos',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPSegoviaVotos.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B'; // mismo que en porcentajes
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPSegoviaVotos[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PSOE Segovia ================= 
const datosPSESsegoviaVotos = [33772, 23165, 27199, 24195, 28302, 34157, 35067, 28425, 22897, 29056, 22912,23700];
const etiquetasPSESsegoviaVotos = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2022','2026'];
const partidosPSESsegoviaVotos = ['PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE'];

const ctxPSESsegoviaVotos = document.getElementById('psoeSegoviaVotosChart').getContext('2d');

new Chart(ctxPSESsegoviaVotos, {
  data: {
    labels: etiquetasPSESsegoviaVotos,
    datasets: [
      {
        type: 'bar',
        label: 'Número de votos',
        data: datosPSESsegoviaVotos,
        backgroundColor: 'rgba(255,0,0,0.7)', // rojo tradicional
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
        data: datosPSESsegoviaVotos,
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos Totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoPSESsegoviaVotos',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSESsegoviaVotos.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSESsegoviaVotos[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= VOX Segovia =================
const datosVOXSegoviaVotos = [598,4790, 14122,14733];
const etiquetasVOXSegoviaVotos = ['2015','2019','2022','2026'];
const partidosVOXSegoviaVotos = ['VOX','VOX','VOX','VOX'];

const ctxVOXSegoviaVotos = document.getElementById('voxSegoviaVotosChart').getContext('2d');

new Chart(ctxVOXSegoviaVotos, {
  data: {
    labels: etiquetasVOXSegoviaVotos,
    datasets: [
      {
        type: 'bar',
        label: 'Número de votos',
        data: datosVOXSegoviaVotos,
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
        data: datosVOXSegoviaVotos,
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos Totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoVOXSegoviaVotos',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXSegoviaVotos.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXSegoviaVotos[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CS Segovia =================
const datosCSSegoviaVotos = [7563, 14068, 3549];
const etiquetasCSSegoviaVotos = ['2015','2019','2022'];
const partidosCSSegoviaVotos = ['CS','CS','CS'];

const ctxCSSegoviaVotos = document.getElementById('csSegoviaVotosChart').getContext('2d');

new Chart(ctxCSSegoviaVotos, {
  data: {
    labels: etiquetasCSSegoviaVotos,
    datasets: [
      {
        type: 'bar',
        label: 'Número de votos',
        data: datosCSSegoviaVotos,
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
        data: datosCSSegoviaVotos,
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos Totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoCSSegoviaVotos',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSSegoviaVotos.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSSegoviaVotos[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

   // ================= PODEMOS/IU Segovia =================
const datosPodemosSegoviaVotos = [9365, 4564, 4382,666];
const etiquetasPodemosSegoviaVotos = ['2015','2019','2022','2026'];
const partidosPodemosSegoviaVotos = ['Podemos','Podemos','Podemos-IU-AV','Podemos'];

const ctxPodemosSegoviaVotos = document.getElementById('podemosSegoviaVotosChart').getContext('2d');

new Chart(ctxPodemosSegoviaVotos, {
  data: {
    labels: etiquetasPodemosSegoviaVotos,
    datasets: [
      {
        type: 'bar',
        label: 'Número de votos',
        data: datosPodemosSegoviaVotos,
        backgroundColor: 'rgba(128,0,128,0.7)', // morado PODEMOS/IU
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
        data: datosPodemosSegoviaVotos,
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos Totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoPodemosSegoviaVotos',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosSegoviaVotos.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosSegoviaVotos[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

    // ================= CDS Segovia =================
const datosCDSSegoviaVotos = [4862, 19532, 9204];
const etiquetasCDSSegoviaVotos = ['1983','1987','1991'];
const partidosCDSSegoviaVotos = ['CDS','CDS','CDS'];

const ctxCDSSegoviaVotos = document.getElementById('cdsSegoviaVotosChart').getContext('2d');

new Chart(ctxCDSSegoviaVotos, {
  data: {
    labels: etiquetasCDSSegoviaVotos,
    datasets: [
      {
        type: 'bar',
        label: 'Número de votos',
        data: datosCDSSegoviaVotos,
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
        data: datosCDSSegoviaVotos,
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos Totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoCDSSegoviaVotos',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSSegoviaVotos.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1E90FF';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSSegoviaVotos[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

    // ================= IU Segovia =================
const datosIUSegoviaVotos = [6104, 4888, 9644, 5082, 3601, 2923, 3899, 2989, 2011, 4382,2214];
const etiquetasIUSegoviaVotos = ['1987','1991','1995','1999','2003','2007','2011','2015','2019','2022','2026'];
const partidosIUSegoviaVotos = ['IU','IU','IU','IU','IU','IU','IU','IU','IU-Anticap','Podemos-IU-AV','IU'];

const ctxIUSegoviaVotos = document.getElementById('iuSegoviaVotosChart').getContext('2d');

new Chart(ctxIUSegoviaVotos, {
  data: {
    labels: etiquetasIUSegoviaVotos,
    datasets: [
      {
        type: 'bar',
        label: 'Número de votos',
        data: datosIUSegoviaVotos,
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
        data: datosIUSegoviaVotos,
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos Totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoIUSegoviaVotos',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIUSegoviaVotos.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIUSegoviaVotos[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UPyD Segovia =================
const datosUPyDSegoviaVotos = [3361, 2206];
const etiquetasUPyDSegoviaVotos = ['2011','2015'];
const partidosUPyDSegoviaVotos = ['UPyD','UPyD'];

const ctxUPyDVotos = document.getElementById('upydSegoviaVotosChart').getContext('2d');

new Chart(ctxUPyDVotos, {
  data: {
    labels: etiquetasUPyDSegoviaVotos,
    datasets: [
      {
        type: 'bar',
        label: 'Número de votos',
        data: datosUPyDSegoviaVotos,
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
        data: datosUPyDSegoviaVotos,
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos Totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoUPyDSegoviaVotos',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDSegoviaVotos.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF60DA';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDSegoviaVotos[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= SALF Segovia =================
const datosSALFSegoviaVotos = [1195];
const etiquetasSALFSegoviaVotos = ['2026'];
const partidosSALFSegoviaVotos = ['SALF'];

const ctxSALFVotos = document.getElementById('salfSegoviaVotosChart').getContext('2d');

new Chart(ctxSALFVotos, {
  data: {
    labels: etiquetasSALFSegoviaVotos,
    datasets: [
      {
        type: 'bar',
        label: 'Número de votos',
        data: datosSALFSegoviaVotos,
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
        data: datosSALFSegoviaVotos,
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos Totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoSALFSegoviaVotos',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosSALFSegoviaVotos.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#005a96';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosSALFSegoviaVotos[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const etiquetasSegoviaTotal = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2022','2026'];

const datosSegoviaTotal = {
  'PP':           [38893, 19418, 38663, 51842, 47391, 47636, 49525, 48886, 33421, 28822, 25187,29764],
  'PSOE':         [33772, 23165, 27199, 24195, 28302, 34157, 35067, 28425, 22897, 29056, 22912,23700],
  'VOX':          [null,null,null,null,null,null,null,null,598,4790,14122,14733],
  'CS':           [null,null,null,null,null,null,null,null,7563,14068,3549],
  'Podemos/IU':   [null,null,null,null,null,null,null,null,9365,4564,4382,666],
  'CDS':          [4862, 19532, 9204,null,null,null,null,null,null,null,null],
  'IU':           [null,6104, 4888, 9644, 5082, 3601, 2923, 3899, 2989, 2011, 4382,2214],
  'UPyD':         [null,null,null,null,null,null,null,3361,2206,null,null,null],
  'SALF':         [null,null,null,null,null,null,null,null,null,null,null,1195],
};

const coloresPartidosSegovia = {
  'PP': '#0000FF',
  'PSOE': '#FF0000',
  'VOX': '#008000',
  'CS': '#FF8C00',
  'Podemos/IU': '#800080',
  'CDS': '#00BFFF',
  'IU': '#B22222',
  'UPyD': '#FF60DA',
  'SALF': '#005a96',
};

// Construcción de datasets: solo líneas, puntos y números visibles
const datasetsSegoviaTotal = Object.keys(datosSegoviaTotal).map(partido => ({
  type: 'line',
  label: partido,
  data: datosSegoviaTotal[partido],
  borderColor: coloresPartidosSegovia[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresPartidosSegovia[partido],
  datalabels: { 
    display: true,
    color: coloresPartidosSegovia[partido], 
    font: { weight: 'bold', size: 12 }, 
    formatter: v => v != null ? v.toLocaleString('es-ES') : ''
  }
}));

const ctxSegoviaTotal = document.getElementById('segoviaChart').getContext('2d');

new Chart(ctxSegoviaTotal, {
  data: {
    labels: etiquetasSegoviaTotal,
    datasets: datasetsSegoviaTotal
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