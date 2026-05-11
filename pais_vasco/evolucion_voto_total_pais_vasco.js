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
// ================= PNV Euskadi (votos totales) =================
const datosPNVEuskadi = [
  349102, 451178, 271208, 289701, 304346,
  350322, 604222, 468117, 399600, 384766,
  398168, 349960, 372456
];

const etiquetasPNVEuskadi = [
  '1980','1984','1986','1990','1994',
  '1998','2001','2005','2009','2012',
  '2016','2020','2024'
];

const partidosPNVEuskadi = Array(etiquetasPNVEuskadi.length).fill('PNV');

const ctxPNVEuskadi = document.getElementById('pnvEuskadiChart').getContext('2d');

new Chart(ctxPNVEuskadi, {
  data: {
    labels: etiquetasPNVEuskadi,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPNVEuskadi,
        backgroundColor: '#298242', // verde PNV
        borderColor: '#298242',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end',
          align: 'top',
          color: '#2F5A2D',
          font: { weight: 'bold' },
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPNVEuskadi,
        borderColor: '#4A7F49',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#4A7F49'
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
      id: 'etiquetaPNVEuskadi',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPNVEuskadi.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#2F5A2D';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPNVEuskadi[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= EH Bildu Euskadi (votos totales) =================
const datosEHBilduEuskadi = [
  151636, 157389, 199900, 186410, 166147,
  224001, 143139, 277923, 225172, 249580, 343609
];

const etiquetasEHBilduEuskadi = [
  '1980','1984','1986','1990','1994',
  '1998','2001','2012','2016','2020','2024'
];

const partidosEHBilduEuskadi = [
  'HB','HB','HB','HB','HB',
  'EH','EH','EHBildu','EHBildu','EHBildu','EHBildu'
];

const ctxEHBilduEuskadi = document.getElementById('ehbilduEuskadiChart').getContext('2d');

new Chart(ctxEHBilduEuskadi, {
  data: {
    labels: etiquetasEHBilduEuskadi,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosEHBilduEuskadi,
        backgroundColor: '#01B59C', // color EH Bildu
        borderColor: '#01B59C',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end',
          align: 'top',
          color: '#3D8070',
          font: { weight: 'bold' },
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosEHBilduEuskadi,
        borderColor: '#5FB19D',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#5FB19D'
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
      id: 'etiquetaEHBilduEuskadi',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosEHBilduEuskadi.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#3D8070';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosEHBilduEuskadi[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PSOE Euskadi (votos totales) =================
const datosPSOEEuskadi = [
  130221, 247786, 252233, 202736, 174682,
  220052, 253195, 274546, 318112, 212809,
  126420, 122248, 150752
];

const etiquetasPSOEEuskadi = [
  '1980','1984','1986','1990','1994',
  '1998','2001','2005','2009','2012',
  '2016','2020','2024'
];

const partidosPSOEEuskadi = Array(etiquetasPSOEEuskadi.length).fill('PSOE');

const ctxPSOEEuskadi = document.getElementById('psoeEuskadiChart').getContext('2d');

new Chart(ctxPSOEEuskadi, {
  data: {
    labels: etiquetasPSOEEuskadi,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPSOEEuskadi,
        backgroundColor: 'rgba(255,0,0,0.7)', // rojo PSOE
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
        data: datosPSOEEuskadi,
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
      id: 'etiquetaPSOEEuskadi',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSOEEuskadi.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSOEEuskadi[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});
    
// ================= PP Euskadi (votos totales) =================
const datosPPEuskadi = [
  43751, 100581, 55606, 83719, 146960,
  251743, 326933, 210614, 146148, 130584,
  107771, 60650, 98144
];

const etiquetasPPEuskadi = [
  '1980','1984','1986','1990','1994','1998',
  '2001','2005','2009','2012','2016','2020','2024'
];

const partidosPPEuskadi = Array(etiquetasPPEuskadi.length).fill('PP');

const ctxPPEuskadi = document.getElementById('ppEuskadiChart').getContext('2d');

new Chart(ctxPPEuskadi, {
  data: {
    labels: etiquetasPPEuskadi,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPPEuskadi,
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
        data: datosPPEuskadi,
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
      id: 'etiquetaPPEuskadi',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPEuskadi.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPEuskadi[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Sumar Euskadi (votos totales) =================
const datosSumarEuskadi = [35402];
const etiquetasSumarEuskadi = ['2024'];
const partidosSumarEuskadi = ['Sumar'];

const ctxSumarEuskadi = document.getElementById('sumarEuskadiChart').getContext('2d');

new Chart(ctxSumarEuskadi, {
  data: {
    labels: etiquetasSumarEuskadi,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosSumarEuskadi,
        backgroundColor: '#FF69B4', // rosa Sumar
        borderColor: '#FF69B4',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end',
          align: 'top',
          color: '#B35487',
          font: { weight: 'bold' },
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosSumarEuskadi,
        borderColor: '#E677B1',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#E677B1'
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
      id: 'etiquetaPartidoSumarEuskadi',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosSumarEuskadi.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#B35487';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosSumarEuskadi[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Podemos Euskadi (votos totales) =================
const datosPodemosEuskadi = [157334, 72113, 23888];
const etiquetasPodemosEuskadi = ['2016','2020','2024'];
const partidosPodemosEuskadi = ['Podemos','Podemos','Podemos'];

const ctxPodemosEuskadi = document.getElementById('podemosEuskadiChart').getContext('2d');

new Chart(ctxPodemosEuskadi, {
  data: {
    labels: etiquetasPodemosEuskadi,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPodemosEuskadi,
        backgroundColor: 'rgba(128,0,128,0.7)', // morado Podemos
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
        data: datosPodemosEuskadi,
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
      id: 'etiquetaPartidoPodemosEuskadi',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosEuskadi.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosEuskadi[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= VOX Euskadi (votos totales) =================
const datosVOXEuskadi = [
  771,     // 2016
  17517,   // 2020
  21696    // 2024
];

const etiquetasVOXEuskadi = ['2016','2020','2024'];
const partidosVOXEuskadi = ['VOX','VOX','VOX'];

const ctxVOXEuskadi = document.getElementById('voxEuskadiChart').getContext('2d');

new Chart(ctxVOXEuskadi, {
  data: {
    labels: etiquetasVOXEuskadi,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosVOXEuskadi,
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
        data: datosVOXEuskadi,
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
      id: 'etiquetaPartidoVOXEuskadi',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXEuskadi.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXEuskadi[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CS Euskadi (votos totales) =================
const datosCSEuskadi = [21477]; // 2016
const etiquetasCSEuskadi = ['2016'];
const partidosCSEuskadi = ['CS'];

const ctxCSEuskadi = document.getElementById('csEuskadiChart').getContext('2d');

new Chart(ctxCSEuskadi, {
  data: {
    labels: etiquetasCSEuskadi,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCSEuskadi,
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
        data: datosCSEuskadi,
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
      id: 'etiquetaPartidoCSEuskadi',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSEuskadi.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF4500';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSEuskadi[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Aralar Euskadi (votos totales) =================
const datosAralarEuskadi = [28180,62514]; // 2005
const etiquetasAralarEuskadi = ['2005','2009'];
const partidosAralarEuskadi = ['Aralar','Aralar'];

const ctxAralarEuskadi = document.getElementById('aralarEuskadiChart').getContext('2d');

new Chart(ctxAralarEuskadi, {
  data: {
    labels: etiquetasAralarEuskadi,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosAralarEuskadi,
        backgroundColor: '#692D3E', // color Aralar
        borderColor: '#692D3E',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#4A1F2C',
          font: { weight: 'bold' },
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosAralarEuskadi,
        borderColor: '#692D3E',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#692D3E'
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
      id: 'etiquetaPartidoAralarEuskadi',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosAralarEuskadi.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4A1F2C';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosAralarEuskadi[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PCTV-EHAK Euskadi (votos totales) =================
const datosPCTVEuskadi = [150644]; // 2005
const etiquetasPCTVEuskadi = ['2005'];
const partidosPCTVEuskadi = ['PCTV-EHAK'];

const ctxPCTVEuskadi = document.getElementById('pctvEuskadiChart').getContext('2d');

new Chart(ctxPCTVEuskadi, {
  data: {
    labels: etiquetasPCTVEuskadi,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPCTVEuskadi,
        backgroundColor: '#9C231B', // color PCTV-EHAK
        borderColor: '#9C231B',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#6E1A15',
          font: { weight: 'bold' },
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPCTVEuskadi,
        borderColor: '#9C231B',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#9C231B'
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
      id: 'etiquetaPartidoPCTVEuskadi',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPCTVEuskadi.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#6E1A15';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPCTVEuskadi[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= EB Euskadi (votos totales) =================
const datosEBEuskadi = [
  6750,   // 1986
  14440,  // 1990
  93291,  // 1994
  71064,  // 1998
  78862,  // 2001
  65023,  // 2005
  36373,  // 2009
  17345   // 2012
];

const etiquetasEBEuskadi = [
  '1986','1990','1994','1998','2001','2005','2009','2012'
];

const partidosEBEuskadi = Array(etiquetasEBEuskadi.length).fill('EB');

const ctxEBEuskadi = document.getElementById('ebEuskadiChart').getContext('2d');

new Chart(ctxEBEuskadi, {
  data: {
    labels: etiquetasEBEuskadi,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosEBEuskadi,
        backgroundColor: '#D25644', // color EB
        borderColor: '#D25644',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#A93F32',
          font: { weight: 'bold' },
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosEBEuskadi,
        borderColor: '#D25644',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#D25644'
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
      id: 'etiquetaPartidoEBEuskadi',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosEBEuskadi.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#A93F32';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosEBEuskadi[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UA Euskadi (votos totales) =================
const datosUAEuskadi = [
  14351,  // 1990
  27797,  // 1994
  15738,  // 1998
  4117    // 2005
];

const etiquetasUAEuskadi = ['1990','1994','1998','2005'];
const partidosUAEuskadi = ['UA','UA','UA','UA'];

const ctxUAEuskadi = document.getElementById('uaEuskadiChart').getContext('2d');

new Chart(ctxUAEuskadi, {
  data: {
    labels: etiquetasUAEuskadi,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUAEuskadi,
        backgroundColor: '#AE6293', // color UA
        borderColor: '#AE6293',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#7E456B',
          font: { weight: 'bold' },
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosUAEuskadi,
        borderColor: '#AE6293',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#AE6293'
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
      id: 'etiquetaPartidoUAEuskadi',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUAEuskadi.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#7E456B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUAEuskadi[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= EA Euskadi (votos totales) =================
const datosEAEuskadi = [
  181175, // 1986
  115703, // 1990
  105136, // 1994
  108635, // 1998
  38198   // 2009
];

const etiquetasEAEuskadi = ['1986','1990','1994','1998','2009'];
const partidosEAEuskadi = ['EA','EA','EA','EA','EA'];

const ctxEAEuskadi = document.getElementById('eaEuskadiChart').getContext('2d');

new Chart(ctxEAEuskadi, {
  data: {
    labels: etiquetasEAEuskadi,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosEAEuskadi,
        backgroundColor: '#298242', // EA
        borderColor: '#298242',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#1E5E31',
          font: { weight: 'bold' },
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosEAEuskadi,
        borderColor: '#4A7F49',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#4A7F49'
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
      id: 'etiquetaPartidoEAEuskadi',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosEAEuskadi.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1E5E31';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosEAEuskadi[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= EE Euskadi (votos totales) =================
const datosEEEuskadi = [
  89953,   // 1980
  85671,   // 1984
  124423,  // 1986
  79105    // 1990
];

const etiquetasEEEuskadi = ['1980','1984','1986','1990'];
const partidosEEEuskadi = ['EE','EE','EE','EE'];

const ctxEEEuskadi = document.getElementById('eeEuskadiChart').getContext('2d');

new Chart(ctxEEEuskadi, {
  data: {
    labels: etiquetasEEEuskadi,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosEEEuskadi,
        backgroundColor: '#DC143C', // EE
        borderColor: '#DC143C',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#8B0A1A',
          font: { weight: 'bold' },
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosEEEuskadi,
        borderColor: '#D26F77',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#D26F77'
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
      id: 'etiquetaPartidoEEEuskadi',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosEEEuskadi.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0A1A';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosEEEuskadi[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UCD Euskadi (votos totales) =================
const datosUCDEuskadi = [78095];
const etiquetasUCDEuskadi = ['1980'];
const partidosUCDEuskadi = ['UCD'];

const ctxUCDEuskadi = document.getElementById('ucdEuskadiChart').getContext('2d');

new Chart(ctxUCDEuskadi, {
  data: {
    labels: etiquetasUCDEuskadi,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUCDEuskadi,
        backgroundColor: '#FFA500', // UCD
        borderColor: '#FFA500',
        borderWidth: 1,
        datalabels: {
          anchor: 'end',
          align: 'top',
          color: '#CC8400',
          font: { weight: 'bold' },
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosUCDEuskadi,
        borderColor: '#EFC074',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#EFC074'
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
      id: 'etiquetaPartidoUCDEuskadi',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUCDEuskadi.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#CC8400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUCDEuskadi[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CDS Euskadi (votos totales) =================
const datosCDSEuskadi = [40445, 6680];
const etiquetasCDSEuskadi = ['1986','1990'];
const partidosCDSEuskadi = ['CDS','CDS'];

const ctxCDSEuskadi = document.getElementById('cdsEuskadiChart').getContext('2d');

new Chart(ctxCDSEuskadi, {
  data: {
    labels: etiquetasCDSEuskadi,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCDSEuskadi,
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
        data: datosCDSEuskadi,
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
      id: 'etiquetaPartidoCDSEuskadi',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSEuskadi.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1E90FF';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSEuskadi[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UPyD Euskadi (votos totales) =================
const datosUPyDEuskadi = [22233, 21539];
const etiquetasUPyDEuskadi = ['2009','2012'];
const partidosUPyDEuskadi = ['UPyD','UPyD'];

const ctxUPyDEuskadi = document.getElementById('upydEuskadiChart').getContext('2d');

new Chart(ctxUPyDEuskadi, {
  data: {
    labels: etiquetasUPyDEuskadi,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUPyDEuskadi,
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
        data: datosUPyDEuskadi,
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
      id: 'etiquetaPartidoUPyDEuskadi',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDEuskadi.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#ff60da';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDEuskadi[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Datos Euskadi por partido =================
const etiquetasEuskadi = [
  '1980','1984','1986','1990','1994','1998','2001','2005','2009','2012','2016','2020','2024'
];

const datosEuskadi = {
  'PNV':           [349102,451178,271208,289701,304346,350322,604222,468117,399600,384766,398168,349960,372456],
  'HB/EH/EH Bildu':[151636,157389,199900,186410,166147,224001,143139,null,null,277923,225172,249580,343609],
  'PSOE':          [130221,247786,252233,202736,174682,220052,253195,274546,318112,212809,126420,122248,150752],
  'PP':            [43751,100581,55606,83719,146960,251743,326933,210614,146148,130584,107771,60650,98144],
  'VOX':           [null,null,null,null,null,null,null,null,null,null,771,17517,21696],
  'Podemos':       [null,null,null,null,null,null,null,null,null,null,157334,72113,23888],
  'Sumar':         [null,null,null,null,null,null,null,null,null,null,null,null,35402],
  'CS':            [null,null,null,null,null,null,null,null,null,null,21477,null,null],
  'Aralar':        [null,null,null,null,null,null,null,28180,62514,null,null,null,null],
  'PCTV-EHAK':     [null,null,null,null,null,null,null,150644,null,null,null,null,null],
  'EB':            [null,null,6750,14440,93291,71064,78862,65023,36373,17345,null,null,null],
  'UA':            [null,null,null,14351,27797,15738,null,4117,null,null,null,null,null],
  'EA':            [null,null,181175,115703,105136,108635,null,null,38198,null,null,null,null],
  'EE':            [89953,85671,124423,79105,null,null,null,null,null,null,null,null,null],
  'UCD':           [78095,null,null,null,null,null,null,null,null,null,null,null,null],
  'CDS':           [null,null,40445,6680,null,null,null,null,null,null,null,null,null],
  'UPyD':          [null,null,null,null,null,null,null,null,22233,21539,null,null,null]
};

const coloresPartidosEuskadi = {
  'PNV': '#298242',
  'HB/EH/EH Bildu': '#01B59C',
  'PSOE': '#FF0000',
  'PP': '#0000FF',
  'VOX': '#008000',
  'Podemos': '#800080',
  'Sumar': '#FF69B4',
  'CS': '#FF8C00',
  'Aralar': '#692D3E',
  'PCTV-EHAK': '#9C231B',
  'EB': '#D25644',
  'UA': '#AE6293',
  'EA': '#298242',
  'EE': '#DC143C',
  'UCD': '#FFA500',
  'CDS': '#00BFFF',
  'UPyD': '#ff60da'
};

const datasetsEuskadi = Object.keys(datosEuskadi).map(partido => ({
  type: 'line',
  label: partido,
  data: datosEuskadi[partido],
  borderColor: coloresPartidosEuskadi[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresPartidosEuskadi[partido],
  datalabels: {
    display: true,
    color: coloresPartidosEuskadi[partido],
    font: { weight: 'bold', size: 12 },
    formatter: v => v != null ? v.toLocaleString() : ''
  }
}));

const ctxEuskadi = document.getElementById('votosTotalesEuskadiChart').getContext('2d');

new Chart(ctxEuskadi, {
  data: {
    labels: etiquetasEuskadi,
    datasets: datasetsEuskadi
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