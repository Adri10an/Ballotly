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

const datosUPNNavarra = [40764, 62072, 69419, 96005, 93163, 125497, 127460, 139122, 111474, 92705, 127346, 92392];
const etiquetasUPNNavarra = ['1979','1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023'];
const partidosUPNNavarra = ['UPN','UPN','UPN','UPN','UPN','UPN','UPN','UPN','UPN','UPN','UPN','UPN'];

const ctxUPN = document.getElementById('upnNavarraChart').getContext('2d');

new Chart(ctxUPN, {
  data: {
    labels: etiquetasUPNNavarra,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUPNNavarra,
        backgroundColor: 'rgba(139,69,19,0.7)', // marrón UPN
        borderColor: '#8B4513',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#5A2E0C', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() // separador de miles
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosUPNNavarra,
        borderColor: '#8B4513',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#8B4513'
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
      id: 'etiquetaPartidoUPNNavarra',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPNNavarra.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#5A2E0C'; // un marrón oscuro para contraste
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPNNavarra[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PP / AP Navarra (votos totales, 1983-2023) =================
const datosPPNavarra = [37554, 11895, 23551, 13289, 24019];
const etiquetasPPNavarra = ['1983','1987','2011','2015','2023'];
const partidosPPNavarra = ['AP','AP','PP','PP','PP'];

const ctxPPNavarra = document.getElementById('ppNavarraChart').getContext('2d');

new Chart(ctxPPNavarra, {
  data: {
    labels: etiquetasPPNavarra,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPPNavarra,
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
        data: datosPPNavarra,
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
      id: 'etiquetaPartidoPPNavarra',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPNavarra.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B'; // azul oscuro para texto
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPNavarra[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PSOE Navarra (votos totales, 1979-2023) =================
const datosPSEENavarra = [48289, 94737, 78453, 91645, 62021, 61531, 65003, 74157, 51238, 45164, 71838, 68247];
const etiquetasPSEENavarra = ['1979','1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023'];
const partidosPSEENavarra = ['PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE','PSOE'];

const ctxPSEENavarra = document.getElementById('psoeNavarraChart').getContext('2d');

new Chart(ctxPSEENavarra, {
  data: {
    labels: etiquetasPSEENavarra,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPSEENavarra,
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
        data: datosPSEENavarra,
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
      id: 'etiquetaPartidoPSEENavarra',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSEENavarra.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSEENavarra[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= EH Bildu Navarra (votos totales, 1999-2023) =================
const datosBilduNavarra = [47271, 24068, 42916, 48166, 50631, 56535];
const etiquetasBilduNavarra = ['1999','2003','2011','2015','2019','2023'];
const partidosBilduNavarra = ['EH Bildu','EH Bildu','EH Bildu','EH Bildu','EH Bildu','EH Bildu'];

const ctxBilduNavarra = document.getElementById('ehbilduNavarraChart').getContext('2d');

new Chart(ctxBilduNavarra, {
  data: {
    labels: etiquetasBilduNavarra,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosBilduNavarra,
        backgroundColor: 'rgba(3,207,181,0.7)', // color EH Bildu
        borderColor: '#03cfb5',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#03cfb5', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosBilduNavarra,
        borderColor: '#03cfb5',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#03cfb5'
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
      id: 'etiquetaPartidoBilduNavarra',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosBilduNavarra.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#03cfb5';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosBilduNavarra[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Geroa Bai Navarra (votos totales, 2007-2023) =================
const datosGbaiNavarra = [77893, 49827, 53497, 60323, 43660];
const etiquetasGbaiNavarra = ['2007','2011','2015','2019','2023'];
const partidosGbaiNavarra = ['Geroa Bai','Geroa Bai','Geroa Bai','Geroa Bai','Geroa Bai'];

const ctxGbaiNavarra = document.getElementById('gbaiNavarraChart').getContext('2d');

new Chart(ctxGbaiNavarra, {
  data: {
    labels: etiquetasGbaiNavarra,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosGbaiNavarra,
        backgroundColor: 'rgba(233,153,146,0.7)', // color Geroa Bai
        borderColor: '#e99992',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#e99992', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosGbaiNavarra,
        borderColor: '#e99992',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#e99992'
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
      id: 'etiquetaPartidoGbaiNavarra',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosGbaiNavarra.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#e99992';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosGbaiNavarra[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= VOX Navarra (votos totales, 2019-2023) =================
const datosVOXNavarra = [4546, 14197];
const etiquetasVOXNavarra = ['2019','2023'];
const partidosVOXNavarra = ['VOX','VOX'];

const ctxVOXNavarra = document.getElementById('voxNavarraChart').getContext('2d');

new Chart(ctxVOXNavarra, {
  data: {
    labels: etiquetasVOXNavarra,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosVOXNavarra,
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
        data: datosVOXNavarra,
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
      id: 'etiquetaPartidoVOXNavarra',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXNavarra.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXNavarra[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Ciudadanos Navarra (votos totales, 2015-2023) =================
const datosCSNavarra = [9993, 1273];
const etiquetasCSNavarra = ['2015','2023'];
const partidosCSNavarra = ['CS','CS'];

const ctxCSNavarra = document.getElementById('csNavarraChart').getContext('2d');

new Chart(ctxCSNavarra, {
  data: {
    labels: etiquetasCSNavarra,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCSNavarra,
        backgroundColor: 'rgba(255,140,0,0.7)', // naranja CS
        borderColor: '#FF8C00',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#FF8C00', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCSNavarra,
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
      id: 'etiquetaPartidoCSNavarra',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSNavarra.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF8C00';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSNavarra[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Podemos Navarra (votos totales, 2015-2023) =================
const datosPodemosNavarra = [46207, 16518, 20095];
const etiquetasPodemosNavarra = ['2015','2019','2023'];
const partidosPodemosNavarra = ['Podemos','Podemos','Podemos'];

const ctxPodemosNavarra = document.getElementById('podemosNavarraChart').getContext('2d');

new Chart(ctxPodemosNavarra, {
  data: {
    labels: etiquetasPodemosNavarra,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPodemosNavarra,
        backgroundColor: 'rgba(128,0,128,0.7)', // morado Podemos
        borderColor: '#800080',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#800080', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPodemosNavarra,
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
      id: 'etiquetaPartidoPodemosNavarra',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosNavarra.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#800080';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosNavarra[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CDS Navarra (votos totales, 1987-1991) =================
const datosCDSNavarra = [21022, 5650];
const etiquetasCDSNavarra = ['1987','1991'];
const partidosCDSNavarra = ['CDS','CDS'];

const ctxCDSNavarra = document.getElementById('cdsNavarraChart').getContext('2d');

new Chart(ctxCDSNavarra, {
  data: {
    labels: etiquetasCDSNavarra,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCDSNavarra,
        backgroundColor: 'rgba(0,191,255,0.7)', // azul CDS
        borderColor: '#00BFFF',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#00BFFF', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCDSNavarra,
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
      id: 'etiquetaPartidoCDSNavarra',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSNavarra.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00BFFF';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSNavarra[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= IU/Podemos Navarra (votos totales, 1987-2023) =================
const datosIUNavarra = [3802, 11167, 27773, 20879, 29692, 14337, 18457, 12482, 10472, 20095];
const etiquetasIUNavarra = ['1987','1991','1995','1999','2003','2007','2011','2015','2019','2023'];
const partidosIUNavarra = ['IU','IU','IU','IU','IU','IU','IU','IU','IU','Podemos-IU'];

const ctxIUNavarra = document.getElementById('iuNavarraChart').getContext('2d');

new Chart(ctxIUNavarra, {
  data: {
    labels: etiquetasIUNavarra,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosIUNavarra,
        backgroundColor: 'rgba(178,34,34,0.7)', // rojo IU
        borderColor: '#B22222',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#B22222', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosIUNavarra,
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
      id: 'etiquetaPartidoIUNavarra',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIUNavarra.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#B22222';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIUNavarra[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UPyD Navarra (votos totales, 2011-2015) =================
const datosUPyDNavarra = [2212, 1740];
const etiquetasUPyDNavarra = ['2011','2015'];
const partidosUPyDNavarra = ['UPyD','UPyD'];

const ctxUPyDNavarra = document.getElementById('upydNavarraChart').getContext('2d');

new Chart(ctxUPyDNavarra, {
  data: {
    labels: etiquetasUPyDNavarra,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUPyDNavarra,
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
        data: datosUPyDNavarra,
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
      id: 'etiquetaPartidoUPyDNavarra',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDNavarra.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#ff60da';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDNavarra[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= EKA Navarra (votos totales, 1979-1983) =================
const datosEKANavarra = [12165, 6733];
const etiquetasEKANavarra = ['1979','1983'];
const partidosEKANavarra = ['EKA','EKA'];

const ctxEKANavarra = document.getElementById('ekaNavarraChart').getContext('2d');

new Chart(ctxEKANavarra, {
  data: {
    labels: etiquetasEKANavarra,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosEKANavarra,
        backgroundColor: 'rgba(189,11,27,0.7)', // color EKA
        borderColor: '#bd0b1b',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#bd0b1b', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosEKANavarra,
        borderColor: '#bd0b1b',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#bd0b1b'
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
      id: 'etiquetaPartidoEKANavarra',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosEKANavarra.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#bd0b1b';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosEKANavarra[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= HB Navarra (votos totales, 1979-1995) =================
const datosHBNavarra = [28244, 28055, 38138, 30762, 27404];
const etiquetasHBNavarra = ['1979','1983','1987','1991','1995'];
const partidosHBNavarra = ['HB','HB','HB','HB','HB'];

const ctxHBNavarra = document.getElementById('hbNavarraChart').getContext('2d');

new Chart(ctxHBNavarra, {
  data: {
    labels: etiquetasHBNavarra,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosHBNavarra,
        backgroundColor: 'rgba(1,181,156,0.7)', // color HB
        borderColor: '#01b59c',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#01b59c', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosHBNavarra,
        borderColor: '#01b59c',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#01b59c'
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
      id: 'etiquetaPartidoHBNavarra',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosHBNavarra.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#01b59c';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosHBNavarra[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= EAJ-PNV Navarra (votos totales, 1983-2003) =================
const datosPNVNavarra = [18169, 2661, 3071, 2943, 16512, 22824];
const etiquetasPNVNavarra = ['1983','1987','1991','1995','1999','2003'];
const partidosPNVNavarra = ['PNV','PNV','PNV','PNV','PNV','PNV'];

const ctxPNVNavarra = document.getElementById('pnvNavarraChart').getContext('2d');

new Chart(ctxPNVNavarra, {
  data: {
    labels: etiquetasPNVNavarra,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPNVNavarra,
        backgroundColor: 'rgba(41,130,66,0.7)', // color PNV
        borderColor: '#298242',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#298242', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPNVNavarra,
        borderColor: '#298242',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#298242'
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
      id: 'etiquetaPartidoPNVNavarra',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPNVNavarra.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#298242';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPNVNavarra[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= EA Navarra (votos totales, 1987-2003) =================
const datosEANavarra = [19840, 15170, 13568, 16512, 22824];
const etiquetasEANavarra = ['1987','1991','1995','1999','2003'];
const partidosEANavarra = ['EA','EA','EA','EA','EA'];

const ctxEANavarra = document.getElementById('eaNavarraChart').getContext('2d');

new Chart(ctxEANavarra, {
  data: {
    labels: etiquetasEANavarra,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosEANavarra,
        backgroundColor: 'rgba(105,173,96,0.7)', // color EA
        borderColor: '#69AD60',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#69AD60', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosEANavarra,
        borderColor: '#69AD60',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#69AD60'
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
      id: 'etiquetaPartidoEANavarra',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosEANavarra.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#69AD60';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosEANavarra[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= EE Navarra (votos totales, 1983-1991) =================
const datosEENavarra = [6292, 9618, 5824];
const etiquetasEENavarra = ['1983','1987','1991'];
const partidosEENavarra = ['EE','EE','EE'];

const ctxEENavarra = document.getElementById('eeNavarraChart').getContext('2d');

new Chart(ctxEENavarra, {
  data: {
    labels: etiquetasEENavarra,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosEENavarra,
        backgroundColor: 'rgba(220,20,60,0.7)', // color EE
        borderColor: '#DC143C',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#DC143C', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosEENavarra,
        borderColor: '#DC143C',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#DC143C'
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
      id: 'etiquetaPartidoEENavarra',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosEENavarra.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#DC143C';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosEENavarra[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CDN Navarra (votos totales, 1995-2011) =================
const datosCDNNavarra = [55153, 20821, 23516, 14418, 4654];
const etiquetasCDNNavarra = ['1995','1999','2003','2007','2011'];
const partidosCDNNavarra = ['CDN','CDN','CDN','CDN','CDN'];

const ctxCDNNavarra = document.getElementById('cdnNavarraChart').getContext('2d');

new Chart(ctxCDNNavarra, {
  data: {
    labels: etiquetasCDNNavarra,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCDNNavarra,
        backgroundColor: 'rgba(149,96,84,0.7)', // color CDN
        borderColor: '#956054',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#956054', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCDNNavarra,
        borderColor: '#956054',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#956054'
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
      id: 'etiquetaPartidoCDNNavarra',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDNNavarra.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#956054';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDNNavarra[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UCD Navarra (votos totales, 1979) =================
const datosUCDNavarra = [68040];
const etiquetasUCDNavarra = ['1979'];
const partidosUCDNavarra = ['UCD'];

const ctxUCDNavarra = document.getElementById('ucdNavarraChart').getContext('2d');

new Chart(ctxUCDNavarra, {
  data: {
    labels: etiquetasUCDNavarra,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUCDNavarra,
        backgroundColor: 'rgba(255,165,0,0.7)', // color UCD
        borderColor: '#FFA500',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#FFA500', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosUCDNavarra,
        borderColor: '#FFA500',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#FFA500'
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
      id: 'etiquetaPartidoUCDNavarra',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUCDNavarra.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FFA500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUCDNavarra[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// Datos Navarra por partido
const etiquetasNavarra = ['1979','1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2023'];

const datosNavarra = {
  'UPN':       [40764, 62072, 69419, 96005, 93163, 125497, 127460, 139122, 111474, 92705, 127346, 92392],
  'PSOE':      [48289, 94737, 78453, 91645, 62021, 61531, 65003, 74157, 51238, 45164, 71838, 68247],
  'PP/AP':     [null, 37554, 11895, null, null, null, null, null, 23551, 13289, null, 24019],
  'EH Bildu':  [null, null, null, null, null, 47271, 24068, 42916, 48166, 50631,null, 56535],
  'GEROABAI':  [null, null, null, null, null, null, null, 77893, 49827, 53497, 60323, 43660],
  'VOX':       [null, null, null, null, null, null, null, null, null, null, 4546, 14197],
  'CS':        [null, null, null, null, null, null, null, null, null, 9993, null, 1273],
  'Podemos':   [null, null, null, null, null, null, null, null, null, 46207, 16518, 20095],
  'CDS':       [null, null,21022, 5650 ,null , null, null, null, null, null, null, null],
  'IU':        [null,null, 3802, 11167, 27773, 20879, 29692, 14337, 18457, 12482, 10472, 20095],
  'UPyD':      [null, null, null, null, null, null, null, null, 2212, 1740 , null, null],
  'EKA':       [12165, 6733, null, null, null, null, null, null, null, null, null, null],
  'HB':        [28244, 28055, 38138, 30762, 27404, null, null, null, null, null, null, null],
  'PNV':       [null, 18169, 2661, 3071, 2943, 16512, 22824, null, null, null, null, null],
  'EA':        [null, null, 19840, 15170, 13568, 16512, 22824, null, null, null, null, null],
  'EE':        [null, 6292, 9618, 5824, null, null, null, null, null, null, null, null], // datos de 1983-1991
  'CDN':       [null, null, null, null, 55153, 20821, 23516, 14418, 4654, null, null, null] // datos de 1995-2011
};

const coloresPartidosNavarra = {
    'UPN': '#8B4513',
    'PSOE': '#FF0000',
    'PP/AP': '#0000FF',
    'VOX': '#008000',
    'CS': '#FF8C00',
    'Podemos': '#800080',
    'IU': '#B22222',
    'UPyD': '#ff60da',
    'CDS': '#00BFFF',
    'EKA': '#bd0b1b',
    'HB': '#01b59c',
    'EH Bildu': '#03cfb5',
    'PNV': '#298242',
    'EA': '#69AD60',
    'EE': '#00008B',
    'CDN': '#DAA520',
    'UCD': '#FFA500',
    'GEROABAI': '#eeb5b0'
};

const datasetsNavarra = Object.keys(datosNavarra).map(partido => ({
  type: 'line',
  label: partido,
  data: datosNavarra[partido],
  borderColor: coloresPartidosNavarra[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresPartidosNavarra[partido],
  datalabels: { 
    display: true,
    color: coloresPartidosNavarra[partido],
    font: { weight: 'bold', size: 12 },
    formatter: v => v != null ? v.toLocaleString() : ''
  }
}));

const ctxNavarra = document.getElementById('votosTotalesNavarraChart').getContext('2d');

new Chart(ctxNavarra, {
  data: {
    labels: etiquetasNavarra,
    datasets: datasetsNavarra
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