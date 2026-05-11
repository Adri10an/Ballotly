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

const datosPPBurgos = [45.76, 30.50, 44.77, 54.23, 50.63, 54.92, 51.62, 50.69, 36.57, 28.06, 30.95,35.12];
const etiquetasPPBurgos = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2022','2026'];
const partidosPPBurgos = ['AP-PDP-UL','AP','PP','PP','PP','PP','PP','PP','PP','PP','PP','PP'];

const ctxPPBurgos = document.getElementById('ppBurgosChart').getContext('2d');

new Chart(ctxPPBurgos, {
  data: {
    labels: etiquetasPPBurgos,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPPBurgos,
        backgroundColor: 'rgba(0,0,255,0.7)', // azul PP
        borderColor: '#0000FF',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#00008B', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPPBurgos,
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
      y: { beginAtZero: true, title: { display: true, text: 'Porcentaje (%)', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoPPBurgos',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPBurgos.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPBurgos[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosPSEBurgos = [37.31, 34.65, 34.62, 25.59, 32.79, 34.65, 35.31, 27.16, 24.76, 36.95, 32.59,34.25];
const etiquetasPSEBurgos = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2022','2026'];
const partidosPSEBurgos = ['PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE'];

const ctxPSEBurgos = document.getElementById('psoeBurgosChart').getContext('2d');

new Chart(ctxPSEBurgos, {
  data: {
    labels: etiquetasPSEBurgos,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPSEBurgos,
        backgroundColor: 'rgba(255,0,0,0.7)', // rojo tradicional PSOE
        borderColor: '#FF0000',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#FF0000', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPSEBurgos,
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
      y: { beginAtZero: true, title: { display: true, text: 'Porcentaje (%)', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoPSEBurgos',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSEBurgos.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSEBurgos[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosVOXBurgos = [1.10, 6.14, 16.58,18.44];
const etiquetasVOXBurgos = ['2015','2019','2022','2026'];
const partidosVOXBurgos = ['VOX','VOX','VOX','VOX'];

const ctxVOXBurgos = document.getElementById('voxBurgosChart').getContext('2d');

new Chart(ctxVOXBurgos, {
  data: {
    labels: etiquetasVOXBurgos,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosVOXBurgos,
        backgroundColor: 'rgba(0,128,0,0.7)', // verde VOX
        borderColor: '#008000',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#006400', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosVOXBurgos,
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
      y: { beginAtZero: true, title: { display: true, text: 'Porcentaje (%)', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoVOXBurgos',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXBurgos.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXBurgos[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosCSBurgos = [12.07, 17.31, 4.98,0.54];
const etiquetasCSBurgos = ['2015','2019','2022','2026'];
const partidosCSBurgos = ['CS','CS','CS','CS'];

const ctxCSBurgos = document.getElementById('csBurgosChart').getContext('2d');

new Chart(ctxCSBurgos, {
  data: {
    labels: etiquetasCSBurgos,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCSBurgos,
        backgroundColor: 'rgba(255,140,0,0.7)', // naranja CS
        borderColor: '#FF8C00',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#FF4500', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCSBurgos,
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
      y: { beginAtZero: true, title: { display: true, text: 'Porcentaje (%)', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoCSBurgos',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSBurgos.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSBurgos[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosPodemosBurgos = [14.09, 7.20, 6.22,1.06];
const etiquetasPodemosBurgos = ['2015','2019','2022','2026'];
const partidosPodemosBurgos = ['Podemos','Podemos','Podemos/IU','Podemos'];

const ctxPodemosBurgos = document.getElementById('podemosBurgosChart').getContext('2d');

new Chart(ctxPodemosBurgos, {
  data: {
    labels: etiquetasPodemosBurgos,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosPodemosBurgos,
        backgroundColor: 'rgba(128,0,128,0.7)', // morado Podemos/IU
        borderColor: '#800080',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#4B0082', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPodemosBurgos,
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
      y: { beginAtZero: true, title: { display: true, text: 'Porcentaje (%)', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoPodemosBurgos',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosBurgos.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosBurgos[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosEspanaVaciada = [5.57];
const etiquetasEspanaVaciada = ['2022'];
const partidosEspanaVaciada = ['España Vaciada'];

const ctxEspanaVaciada = document.getElementById('espanaVaciadaChart').getContext('2d');

new Chart(ctxEspanaVaciada, {
  data: {
    labels: etiquetasEspanaVaciada,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosEspanaVaciada,
        backgroundColor: 'rgba(173,56,56,0.7)', // rojo España Vaciada
        borderColor: '#AD3838',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#AD3838',
          font: { weight: 'bold' },
          formatter: v => v + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosEspanaVaciada,
        borderColor: '#AD3838',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#AD3838'
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
  plugins: [ChartDataLabels]
});

const datosCDSBurgos = [4.65, 17.21, 5.95];
const etiquetasCDSBurgos = ['1983','1987','1991'];
const partidosCDSBurgos = ['CDS','CDS','CDS'];

const ctxCDSBurgos = document.getElementById('cdsBurgosChart').getContext('2d');

new Chart(ctxCDSBurgos, {
  data: {
    labels: etiquetasCDSBurgos,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosCDSBurgos,
        backgroundColor: 'rgba(0,191,255,0.7)', // azul CDS
        borderColor: '#00BFFF',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#1E90FF', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCDSBurgos,
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
      y: { beginAtZero: true, title: { display: true, text: 'Porcentaje (%)', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoCDSBurgos',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSBurgos.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1E90FF';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSBurgos[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosIUBurgos = [3.96, 6.68, 13.02, 7.07, 4.27, 3.38, 4.51, 3.85, 1.86, 6.22,2.19];
const etiquetasIUBurgos = ['1987','1991','1995','1999','2003','2007','2011','2015','2019','2022','2026'];
const partidosIUBurgos = ['IU','IU','IU','IU','IU','IU','IU','IU','IU','IU','IU'];

const ctxIUBurgos = document.getElementById('iuBurgosChart').getContext('2d');

new Chart(ctxIUBurgos, {
  data: {
    labels: etiquetasIUBurgos,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosIUBurgos,
        backgroundColor: 'rgba(178,34,34,0.7)', // rojo IU
        borderColor: '#B22222',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#8B0000', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosIUBurgos,
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
      y: { beginAtZero: true, title: { display: true, text: 'Porcentaje (%)', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoIUBurgos',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIUBurgos.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIUBurgos[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosUPyDBurgos = [4.98, 1.83];
const etiquetasUPyDBurgos = ['2011','2015'];
const partidosUPyDBurgos = ['UPyD','UPyD'];

const ctxUPyDBurgos = document.getElementById('upydBurgosChart').getContext('2d');

new Chart(ctxUPyDBurgos, {
  data: {
    labels: etiquetasUPyDBurgos,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosUPyDBurgos,
        backgroundColor: 'rgba(255,96,218,0.7)',
        borderColor: '#FF60DA',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#FF60DA',
          font: { weight: 'bold' },
          formatter: v => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosUPyDBurgos,
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
      y: { beginAtZero: true, title: { display: true, text: 'Porcentaje (%)', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [{
    id: 'etiquetaPartidoUPyDBurgos',
    afterDatasetsDraw(chart) {
      const { ctx, scales: { x, y } } = chart;
      datosUPyDBurgos.forEach((v, i) => {
        const xPos = x.getPixelForValue(i);
        const yPos = y.getPixelForValue(0) + 30;
        ctx.save();
        ctx.fillStyle = '#FF60DA';
        ctx.font = '12px Segoe UI';
        ctx.textAlign = 'center';
        ctx.fillText(partidosUPyDBurgos[i], xPos, yPos);
        ctx.restore();
      });
    }
  }, ChartDataLabels]
});

const datosSALFBurgos = [1.85];
const etiquetasSALFBurgos = ['2026'];
const partidosSALFBurgos = ['SALF'];

const ctxSALFBurgos = document.getElementById('salfBurgosChart').getContext('2d');

new Chart(ctxSALFBurgos, {
  data: {
    labels: etiquetasSALFBurgos,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosSALFBurgos,
        backgroundColor: 'rgba(0,90,150,0.7)',
        borderColor: '#005a96',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#005a96',
          font: { weight: 'bold' },
          formatter: v => v.toFixed(2) + '%'
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosSALFBurgos,
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
        title: { display: true, text: 'Porcentaje (%)', color: '#333' },
        ticks: { color: '#333' }
      },
      x: {
        title: { display: true, text: 'Año', color: '#333' },
        ticks: { color: '#333' }
      }
    }
  },
  plugins: [{
    id: 'etiquetaPartidoSALFBurgos',
    afterDatasetsDraw(chart) {
      const { ctx, scales: { x, y } } = chart;
      datosSALFBurgos.forEach((v, i) => {
        const xPos = x.getPixelForValue(i);
        const yPos = y.getPixelForValue(0) + 30;
        ctx.save();
        ctx.fillStyle = '#005a96';
        ctx.font = '12px Segoe UI';
        ctx.textAlign = 'center';
        ctx.fillText(partidosSALFBurgos[i], xPos, yPos);
        ctx.restore();
      });
    }
  }, ChartDataLabels]
});

const etiquetasBurgosPct = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2022','2026'];

const datosBurgosPct = {
  'PP':           [45.76,30.50,44.77,54.23,50.63,54.92,51.62,50.69,36.57,28.06,30.95,35.12],
  'PSOE':         [37.31,34.65,34.62,25.59,32.79,34.65,35.31,27.16,24.76,36.95,32.59,34.25],
  'VOX':          [null,null,null,null,null,null,null,null,1.10,6.14,16.58,18.44],
  'CS':           [null,null,null,null,null,null,null,null,12.07,17.31,4.98,0.54],
  'Podemos/IU':   [null,null,null,null,null,null,null,null,14.09,7.20,6.22,1.06],
  'España Vaciada':[null,null,null,null,null,null,null,null,null,null,5.57],
  'CDS':          [4.65,17.21,5.95,null,null,null,null,null,null,null,null],
  'IU':           [null,3.96,6.68,13.02,7.07,4.27,3.38,4.51,3.85,1.86,6.22,2.19],
  'UPyD':         [null,null,null,null,null,null,null,4.98,1.83,null,null],
  'SALF':         [null,null,null,null,null,null,null,null,null,null,null,1.85],
};

const coloresPartidosBurgosPct = {
  'PP': '#0000FF',
  'PSOE': '#FF0000',
  'VOX': '#008000',
  'CS': '#FF8C00',
  'Podemos/IU': '#800080',
  'España Vaciada': '#AD3838',
  'CDS': '#00BFFF',
  'IU': '#B22222',
  'UPyD': '#FF60DA',
  'SALF': '#005a96',
};

const datasetsBurgosPct = Object.keys(datosBurgosPct).map(partido => ({
  type: 'line',
  label: partido,
  data: datosBurgosPct[partido],
  borderColor: coloresPartidosBurgosPct[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresPartidosBurgosPct[partido],
  datalabels: {
    display: true,
    color: coloresPartidosBurgosPct[partido],
    font: { weight: 'bold', size: 12 },
    formatter: v => v != null ? v.toFixed(2) + '%' : ''
  }
}));

const ctxBurgosPct = document.getElementById('porcentajesTotalesBurgosChart').getContext('2d');

new Chart(ctxBurgosPct, {
  data: {
    labels: etiquetasBurgosPct,
    datasets: datasetsBurgosPct
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'top', labels: { color: '#333' } },
      datalabels: { display: true }
    },
    scales: {
      y: { beginAtZero: true, title: { display: true, text: 'Porcentaje (%)', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [ChartDataLabels]
});