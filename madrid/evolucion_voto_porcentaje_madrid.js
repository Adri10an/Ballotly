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
  // Datos del PP en Madrid
  const datosPPMadrid = [
    34.33, // 1983
    31.96, // 1987
    43.23, // 1991
    51.67, // 1995
    52.17, // 1999
    47.61, // 2003
    49.34, // 2004
    53.29, // 2007
    51.73, // 2011
    33.45, // 2015
    22.23, // 2019
    44.76, // 2021
    47.32  // 2023
  ];

  const etiquetasPPMadrid = [
    '1983','1987','1991','1995','1999',
    '2003May','2003Oct','2007','2011','2015',
    '2019','2021','2023'
  ];

  const partidosPPMadrid = [
    'AP','AP','PP','PP','PP',
    'PP','PP','PP','PP','PP',
    'PP','PP','PP'
  ];

  // Crear el gráfico del PP en Madrid
  const ctxPPMadrid = document.getElementById('ppMadridChart').getContext('2d');
  crearChart(ctxPPMadrid, datosPPMadrid, etiquetasPPMadrid, partidosPPMadrid, 'rgba(0,0,255,0.7)', '#0000FF');

  // Datos del PSOE en Madrid
  const datosPSOEMadrid = [
    50.77, // 1983
    39.13, // 1987
    37.07, // 1991
    30.12, // 1995
    37.21, // 1999
    40.82, // 2003
    39.69, // 2004
    33.57, // 2007
    26.27, // 2011
    25.71, // 2015
    27.31, // 2019
    16.80, // 2021
    18.17  // 2023
  ];

  const etiquetasPSOEMadrid = [
    '1983','1987','1991','1995','1999',
    '2003May','2003Oct','2007','2011','2015',
    '2019','2021','2023'
  ];

  const partidosPSOEMadrid = [
    'PSOE','PSOE','PSOE','PSOE','PSOE',
    'PSOE','PSOE','PSOE','PSOE','PSOE',
    'PSOE','PSOE','PSOE'
  ];

  // Crear el gráfico del PSOE en Madrid
  const ctxPSOEMadrid = document.getElementById('psoeMadridChart').getContext('2d');
  crearChart(ctxPSOEMadrid, datosPSOEMadrid, etiquetasPSOEMadrid, partidosPSOEMadrid, 'rgba(255,0,0,0.7)', '#FF0000');

  const ctxVOXMadrid = document.getElementById('voxMadridChart').getContext('2d');

  new Chart(ctxVOXMadrid, {
    data: {
      labels: ['2015','2019','2021','2023'],
      datasets: [
        {
          type: 'bar',
          label: 'Porcentaje de voto (%)',
          data: [1.19, 8.88, 9.15, 7.34],
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
          data: [1.19, 8.88, 9.15, 7.38],
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
          title: { display: true, text: 'Porcentaje (%)', color: '#333' }, 
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
        id: 'etiquetaPartidoVOXMadrid',
        afterDatasetsDraw(chart) {
          const { ctx, scales: { x, y } } = chart;
          [1.19, 8.88, 9.15, 7.38].forEach((valor, i) => {
            const xPos = x.getPixelForValue(i);
            const yPos = y.getPixelForValue(0) + 30;
            ctx.save();
            ctx.fillStyle = '#006400';
            ctx.font = '12px Segoe UI';
            ctx.textAlign = 'center';
            ctx.fillText('VOX', xPos, yPos);
            ctx.restore();
          });
        }
      },
      ChartDataLabels
    ]
  });

  const datosCSMadrid = [12.29, 19.46, 3.57, 1.56];
  const etiquetasCSMadrid = ['2015','2019','2021','2023'];
  const partidosCSMadrid = ['CS','CS','CS','CS'];

  const ctxCSMadrid = document.getElementById('csMadridChart').getContext('2d');

  new Chart(ctxCSMadrid, {
    data: {
      labels: etiquetasCSMadrid,
      datasets: [
        {
          type: 'bar',
          label: 'Porcentaje de voto (%)',
          data: datosCSMadrid,
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
          data: datosCSMadrid,
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
          title: { display: true, text: 'Porcentaje (%)', color: '#333' }, 
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
        id: 'etiquetaPartidoCSMadrid',
        afterDatasetsDraw(chart) {
          const { ctx, scales: { x, y } } = chart;
          datosCSMadrid.forEach((valor, i) => {
            const xPos = x.getPixelForValue(i);
            const yPos = y.getPixelForValue(0) + 30;
            ctx.save();
            ctx.fillStyle = '#FF4500';
            ctx.font = '12px Segoe UI';
            ctx.textAlign = 'center';
            ctx.fillText(partidosCSMadrid[i], xPos, yPos);
            ctx.restore();
          });
        }
      },
      ChartDataLabels
    ]
  });


  const datosPodemosMadrid = [18.84, 5.60, 7.24, 4.76];
  const etiquetasPodemosMadrid = ['2015','2019','2021','2023'];
  const partidosPodemosMadrid = ['Podemos','Podemos','Podemos/IU','Podemos/IU'];

  const ctxPodemosMadrid = document.getElementById('podemosMadridChart').getContext('2d');

  new Chart(ctxPodemosMadrid, {
    data: {
      labels: etiquetasPodemosMadrid,
      datasets: [
        {
          type: 'bar',
          label: 'Porcentaje de voto (%)',
          data: datosPodemosMadrid,
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
          data: datosPodemosMadrid,
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
        id: 'etiquetaPartidoPodemosMadrid',
        afterDatasetsDraw(chart) {
          const { ctx, scales: { x, y } } = chart;
          datosPodemosMadrid.forEach((valor, i) => {
            const xPos = x.getPixelForValue(i);
            const yPos = y.getPixelForValue(0) + 30;
            ctx.save();
            ctx.fillStyle = '#4B0082';
            ctx.font = '12px Segoe UI';
            ctx.textAlign = 'center';
            ctx.fillText(partidosPodemosMadrid[i], xPos, yPos);
            ctx.restore();
          });
        }
      },
      ChartDataLabels
    ]
  });

  const datosCDSMadrid = [3.14, 16.92, 3.39];
  const etiquetasCDSMadrid = ['1983','1987','1991'];
  const partidosCDSMadrid = ['CDS','CDS','CDS'];

  const ctxCDSMadrid = document.getElementById('cdsMadridChart').getContext('2d');

  new Chart(ctxCDSMadrid, {
    data: {
      labels: etiquetasCDSMadrid,
      datasets: [
        {
          type: 'bar',
          label: 'Porcentaje de voto (%)',
          data: datosCDSMadrid,
          backgroundColor: 'rgba(0,191,255,0.7)', // azul CDS
          borderColor: '#00BFFF',
          borderWidth: 1,
          datalabels: { 
            anchor: 'end', 
            align: 'top', 
            color: '#1E90FF', 
            font: { weight: 'bold' }, 
            formatter: v => v.toFixed(2) + '%' 
          }
        },
        {
          type: 'line',
          label: 'Tendencia',
          data: datosCDSMadrid,
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
        id: 'etiquetaPartidoCDSMadrid',
        afterDatasetsDraw(chart) {
          const { ctx, scales: { x, y } } = chart;
          datosCDSMadrid.forEach((valor, i) => {
            const xPos = x.getPixelForValue(i);
            const yPos = y.getPixelForValue(0) + 30;
            ctx.save();
            ctx.fillStyle = '#1E90FF';
            ctx.font = '12px Segoe UI';
            ctx.textAlign = 'center';
            ctx.fillText(partidosCDSMadrid[i], xPos, yPos);
            ctx.restore();
          });
        }
      },
      ChartDataLabels
    ]
  });

  const datosIUMadrid = [7.61, 12.22, 16.24, 7.86, 7.82, 8.65, 8.86, 9.61, 4.21, 5.60, 7.24, 4.76];
  const etiquetasIUMadrid = ['1987','1991','1995','1999','2003 (May)','2003 (Oct)','2007','2011','2015','2019','2021','2023'];
  const partidosIUMadrid = ['IU','IU','IU','IU','IU','IU','IU','IU','IU','IU','IU','IU'];

  const ctxIUMadrid = document.getElementById('iuMadridChart').getContext('2d');

  new Chart(ctxIUMadrid, {
    data: {
      labels: etiquetasIUMadrid,
      datasets: [
        {
          type: 'bar',
          label: 'Porcentaje de voto (%)',
          data: datosIUMadrid,
          backgroundColor: 'rgba(178,34,34,0.7)', // rojo IU
          borderColor: '#B22222',
          borderWidth: 1,
          datalabels: { 
            anchor: 'end', 
            align: 'top', 
            color: '#8B0000', 
            font: { weight: 'bold' }, 
            formatter: v => v.toFixed(2) + '%' 
          }
        },
        {
          type: 'line',
          label: 'Tendencia',
          data: datosIUMadrid,
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
        id: 'etiquetaPartidoIUMadrid',
        afterDatasetsDraw(chart) {
          const { ctx, scales: { x, y } } = chart;
          datosIUMadrid.forEach((valor, i) => {
            const xPos = x.getPixelForValue(i);
            const yPos = y.getPixelForValue(0) + 30;
            ctx.save();
            ctx.fillStyle = '#8B0000';
            ctx.font = '12px Segoe UI';
            ctx.textAlign = 'center';
            ctx.fillText(partidosIUMadrid[i], xPos, yPos);
            ctx.restore();
          });
        }
      },
      ChartDataLabels
    ]
  });

  const datosUPyDMadrid = [6.32, 2.06];
  const etiquetasUPyDMadrid = ['2011','2015'];
  const partidosUPyDMadrid = ['UPyD','UPyD'];

  const ctxUPyDMadrid = document.getElementById('upydMadridChart').getContext('2d');

  new Chart(ctxUPyDMadrid, {
    data: {
      labels: etiquetasUPyDMadrid,
      datasets: [
        {
          type: 'bar',
          label: 'Porcentaje de voto (%)',
          data: datosUPyDMadrid,
          backgroundColor: 'rgba(255,96,218,0.7)', // rosa UPyD
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
          data: datosUPyDMadrid,
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
      id: 'etiquetaPartidoUPyDMadrid',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDMadrid.forEach((v, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF60DA';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDMadrid[i], xPos, yPos);
          ctx.restore();
        });
      }
    }, ChartDataLabels]
  });

  const datosMasMadrid = [14.69, 17, 18.36];
  const etiquetasMasMadrid = ['2019','2021','2023'];
  const partidosMasMadrid = ['Más Madrid','Más Madrid','Más Madrid'];

  const ctxMasMadrid = document.getElementById('masMadridChart').getContext('2d');

  new Chart(ctxMasMadrid, {
    data: {
      labels: etiquetasMasMadrid,
      datasets: [
        {
          type: 'bar',
          label: 'Porcentaje de voto (%)',
          data: datosMasMadrid,
          backgroundColor: 'rgba(83,239,165,0.7)', // color Más Madrid
          borderColor: '#53efa5',
          borderWidth: 1,
          datalabels: {
            anchor: 'end',
            align: 'top',
            color: '#53efa5',
            font: { weight: 'bold' },
            formatter: v => v.toFixed(2) + '%'
          }
        },
        {
          type: 'line',
          label: 'Tendencia',
          data: datosMasMadrid,
          borderColor: '#53efa5',
          backgroundColor: 'transparent',
          fill: false,
          tension: 0.3,
          pointRadius: 4,
          pointBackgroundColor: '#53efa5'
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
      id: 'etiquetaPartidoMasMadrid',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosMasMadrid.forEach((v, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#53efa5';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosMasMadrid[i], xPos, yPos);
          ctx.restore();
        });
      }
    }, ChartDataLabels]
  });

  const etiquetasMadridPct = [
  '1983','1987','1991','1995','1999','2003May','2003Oct','2007','2011','2015','2019','2021','2023'
];

const datosMadridPct = {
  'PP/AP':          [34.33,31.96,43.23,51.67,52.17,47.61,49.34,53.29,51.73,33.45,22.23,44.76,47.32],
  'PSOE':           [50.77,39.13,37.07,30.12,37.21,40.82,39.69,33.57,26.27,25.71,27.31,16.80,18.17],
  'VOX':            [null,null,null,null,null,null,null,null,null,1.19,8.88,9.15,7.34],
  'CS':             [null,null,null,null,null,null,null,null,null,12.29,19.46,3.57,1.56],
  'Podemos/IU':     [null,null,null,null,null,null,null,null,null,18.84,5.60,7.24,4.76],
  'Más Madrid':     [null,null,null,null,null,null,null,null,null,null,14.69,17.00,18.36],
  'CDS':            [3.14,16.92,3.39,null,null,null,null,null,null,null,null,null,null],
  'IU':             [null,7.61,12.22,16.24,7.86,7.82,8.65,8.86,9.61,4.21,5.60,7.24,4.76],
  'UPyD':           [null,null,null,null,null,null,null,null,6.32,2.06,null,null,null]
};

const coloresPartidosMadridPct = {
  'PP/AP': '#0000FF',
  'PSOE': '#FF0000',
  'VOX': '#008000',
  'CS': '#FF8C00',
  'Podemos/IU': '#800080',
  'Más Madrid': '#53efa5',
  'CDS': '#00BFFF',
  'IU': '#B22222',
  'UPyD': '#FF60DA'
};

// Crear datasets dinámicamente
const datasetsMadridPct = Object.keys(datosMadridPct).map(partido => ({
  type: 'line',
  label: partido,
  data: datosMadridPct[partido],
  borderColor: coloresPartidosMadridPct[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresPartidosMadridPct[partido],
  datalabels: {
    display: true,
    color: coloresPartidosMadridPct[partido],
    font: { weight: 'bold', size: 12 },
    formatter: v => v != null ? v.toFixed(2) + '%' : ''
  }
}));

// Crear el gráfico
new Chart(document.getElementById('porcentajesTotalesMadridChart').getContext('2d'), {
  type: 'line',
  data: {
    labels: etiquetasMadridPct,
    datasets: datasetsMadridPct
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