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
// ================= PP Palencia =================
// ================= PP Valladolid =================
const datosPPValladolid = [86633, 87315, 106948, 153968, 138468, 145460, 150690, 148388, 103216, 87357, 83852,103776];
const etiquetasPPValladolid = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2022','2026'];
const partidosPPValladolid = ['AP-PDP-UL','AP','PP','PP','PP','PP','PP','PP','PP','PP','PP','PP'];

const ctxPPValladolid = document.getElementById('ppValladolidChart').getContext('2d');

new Chart(ctxPPValladolid, {
  data: {
    labels: etiquetasPPValladolid,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPPValladolid,
        backgroundColor: 'rgba(0,0,255,0.7)', // azul intenso
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
        data: datosPPValladolid,
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
      id: 'etiquetaPartidoPPValladolid',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPValladolid.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPValladolid[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PSOE Palencia =================
// ================= PSOE Valladolid =================
const datosPSEValladolid = [133801, 97169, 96394, 92308, 102737, 125372, 120306, 86143, 72201, 102662, 85317,91602];
const etiquetasPSEValladolid = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2022','2026'];
const partidosPSEValladolid = ['PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE'];

const ctxPSEValladolid = document.getElementById('psoeValladolidChart').getContext('2d');

new Chart(ctxPSEValladolid, {
  data: {
    labels: etiquetasPSEValladolid,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPSEValladolid,
        backgroundColor: 'rgba(255,0,0,0.7)', // rojo tradicional PSOE
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
        data: datosPSEValladolid,
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
      id: 'etiquetaPartidoPSEValladolid',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSEValladolid.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSEValladolid[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= VOX Valladolid =================
const datosVOXValladolid = [3099, 20296, 54305,59404];
const etiquetasVOXValladolid = ['2015','2019','2022','2026'];
const partidosVOXValladolid = ['VOX','VOX','VOX','VOX'];

const ctxVOXValladolid = document.getElementById('voxValladolidChart').getContext('2d');

new Chart(ctxVOXValladolid, {
  data: {
    labels: etiquetasVOXValladolid,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosVOXValladolid,
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
        data: datosVOXValladolid,
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
      id: 'etiquetaPartidoVOXValladolid',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXValladolid.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXValladolid[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

  // ================= CS Palencia =================
// ================= CS Valladolid =================
const datosCSValladolid = [25814, 52225, 18801,1847];
const etiquetasCSValladolid = ['2015','2019','2022','2026'];
const partidosCSValladolid = ['CS','CS','CS','CS'];

const ctxCSValladolid = document.getElementById('csValladolidChart').getContext('2d');

new Chart(ctxCSValladolid, {
  data: {
    labels: etiquetasCSValladolid,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCSValladolid,
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
        data: datosCSValladolid,
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
      id: 'etiquetaPartidoCSValladolid',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSValladolid.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSValladolid[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Podemos/IU Valladolid =================
const datosPodemosValladolid = [37671, 13872, 18857,2304];
const etiquetasPodemosValladolid = ['2015','2019','2022','2026'];
const partidosPodemosValladolid = ['Podemos','Podemos','Podemos-IU-AV','Podemos'];

const ctxPodemosValladolid = document.getElementById('podemosValladolidChart').getContext('2d');

new Chart(ctxPodemosValladolid, {
  data: {
    labels: etiquetasPodemosValladolid,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPodemosValladolid,
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
        data: datosPodemosValladolid,
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
      id: 'etiquetaPartidoPodemosValladolid',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosValladolid.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosValladolid[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosEspanaVaciadaValladolid = [4361]; // votos totales
const etiquetasEspanaVaciadaValladolid = ['2022'];
const partidosEspanaVaciadaValladolid = ['España Vaciada'];

const ctxEspanaVaciadaValladolid = document.getElementById('espanaVaciadaValladolidChart').getContext('2d');

new Chart(ctxEspanaVaciadaValladolid, {
  data: {
    labels: etiquetasEspanaVaciadaValladolid,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosEspanaVaciadaValladolid,
        backgroundColor: 'rgba(173,56,56,0.7)',
        borderColor: '#AD3838',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#AD3838', 
          font: { weight: 'bold' }, 
          formatter: v => v.toLocaleString() // muestra con separador de miles
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosEspanaVaciadaValladolid,
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoEspanaVaciadaValladolid',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosEspanaVaciadaValladolid.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#AD3838';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosEspanaVaciadaValladolid[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CDS Valladolid =================
const datosCDSValladolid = [11800, 54276, 13012];
const etiquetasCDSValladolid = ['1983','1987','1991'];
const partidosCDSValladolid = ['CDS','CDS','CDS'];

const ctxCDSValladolid = document.getElementById('cdsValladolidChart').getContext('2d');

new Chart(ctxCDSValladolid, {
  data: {
    labels: etiquetasCDSValladolid,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCDSValladolid,
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
        data: datosCDSValladolid,
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
      id: 'etiquetaPartidoCDSValladolid',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSValladolid.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1E90FF';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSValladolid[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosIUValladolid = [11853, 20506, 40867, 21371, 14777, 14640, 23118, 17933, 12043, 18857,11237];
const etiquetasIUValladolid = ['1987','1991','1995','1999','2003','2007','2011','2015','2019','2022','2026'];
const partidosIUValladolid = ['IU','IU','IU','IU','IU','IU','IU','IU','IU','Podemos-IU-AV','IU'];

const ctxIUValladolid = document.getElementById('iuValladolidChart').getContext('2d');

new Chart(ctxIUValladolid, {
  data: {
    labels: etiquetasIUValladolid,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosIUValladolid,
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
        data: datosIUValladolid,
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
      id: 'etiquetaPartidoIUValladolid',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIUValladolid.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIUValladolid[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= SALF Valladolid =================
const datosSALFValladolid = [4436];
const etiquetasSALFValladolid = ['2026'];
const partidosSALFValladolid = ['SALF'];

const ctxSALF = document.getElementById('salfValladolidChart').getContext('2d');

new Chart(ctxSALF, {
  data: {
    labels: etiquetasSALFValladolid,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosSALFValladolid,
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
        data: datosSALFValladolid,
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
      id: 'etiquetaPartidoSALFValladolid',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosSALFValladolid.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#005a96';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosSALFValladolid[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

const datosUPyDValladolid = [12692, 4521];
const etiquetasUPyDValladolid = ['2011','2015'];
const partidosUPyDValladolid = ['UPyD','UPyD'];

const ctxUPyDValladolid = document.getElementById('upydValladolidChart').getContext('2d');

new Chart(ctxUPyDValladolid, {
  data: {
    labels: etiquetasUPyDValladolid,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUPyDValladolid,
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
        data: datosUPyDValladolid,
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
      id: 'etiquetaPartidoUPyDValladolid',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDValladolid.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#ff60da';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDValladolid[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

  // Etiquetas de años
  const etiquetasValladolidTotal = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2022','2026'];

  // Datos de los partidos
  const datosValladolidTotal = {
    'PP':           [86633, 87315, 106948, 153968, 138468, 145460, 150690, 148388, 103216, 87357, 83852,103776],
    'PSOE':         [133801, 97169, 96394, 92308, 102737, 125372, 120306, 86143, 72201, 102662, 85317,91602],
    'VOX':          [null, null, null, null, null, null, null, null, 3099, 20296, 54305,59404],
    'CS':           [null, null, null, null, null, null, null, null, 25814, 52225, 18801,1847],
    'Podemos/IU':   [null, null, null, null, null, null, null, null, 37671, 13872, 18857,2304],
    'CDS':          [11800, 54276, 13012, null, null, null, null, null, null, null, null],
    'IU':           [null, 11853, 20506, 40867, 21371, 14777, 14640, 23118, 17933, 12043, 18857,11237],
    'UPyD':         [null, null, null, null, null, null, null,12692,4521,null,null,null ],
    'España Vaciada':[null, null, null, null, null, null, null, null, null, null, 4361],
    'SALF':         [null,null,null,null,null,null,null,null,null,null,null,4436],
  };

  // Colores de cada partido
  const coloresPartidosValladolid = {
    'PP': '#0000FF',
    'PSOE': '#FF0000',
    'VOX': '#008000',
    'CS': '#FF8C00',
    'Podemos/IU': '#800080',
    'CDS': '#00BFFF',
    'IU': '#B22222',
    'UPyD': '#ff60da',
    'España Vaciada': '#AD3838',
    'SALF': '#005a96',
  };

  // Construcción de datasets dinámicos
  const datasetsValladolidTotal = Object.keys(datosValladolidTotal).map(partido => ({
    type: 'line',
    label: partido,
    data: datosValladolidTotal[partido],
    borderColor: coloresPartidosValladolid[partido],
    backgroundColor: 'transparent',
    fill: false,
    tension: 0.3,
    spanGaps: true,
    pointRadius: 4,
    pointBackgroundColor: coloresPartidosValladolid[partido],
    datalabels: { 
      display: true,
      color: coloresPartidosValladolid[partido], 
      font: { weight: 'bold', size: 12 }, 
      formatter: v => v != null ? v.toLocaleString('es-ES') : ''
    }
  }));

  const ctxValladolidTotal = document.getElementById('valladolidChart').getContext('2d');

  new Chart(ctxValladolidTotal, {
    data: {
      labels: etiquetasValladolidTotal,
      datasets: datasetsValladolidTotal
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