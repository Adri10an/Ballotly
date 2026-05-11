    // ================= PP/AP-PDP-UL =================
  
const datosPPSoria = [44.76, 42.59, 53.22, 61.22, 59.53, 55.23, 50.37, 52.01, 36.89, 27.62, 23.99,28.79];
  
const etiquetasPPSoria = ['1983', '1987', '1991', '1995', '1999', '2003', '2007', '2011', '2015', '2019', '2022','2026'];
  
const partidosPPSoria = ['AP-PDP-UL', 'AP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP','PP'];
  

  
const ctxPP = document.getElementById('ppSoriaChart').getContext('2d');
  

  
new Chart(ctxPP, {
  
  data: {
  
    labels: etiquetasPPSoria,
  
    datasets: [
  
      {
  
        type: 'bar',
  
        label: 'Porcentaje de voto (%)',
  
        data: datosPPSoria,
  
        backgroundColor: 'rgba(0, 0, 255, 0.7)',
  
        borderColor: '#0000FF',
  
        borderWidth: 1,
  
        datalabels: { 
  
          anchor: 'end', 
  
          align: 'top', 
  
          color: '#00008B', 
  
          font: { weight: 'bold' }, 
  
          formatter: (v) => v + '%' 
  
        }
  
      },
  
      {
  
        type: 'line',
  
        label: 'Tendencia',
  
        data: datosPPSoria,
  
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
  
      id: 'etiquetaPartidoPPSoria',
  
      afterDatasetsDraw(chart) {
  
        const { ctx, scales: { x, y } } = chart;
  
        datosPPSoria.forEach((valor, i) => {
  
          const xPos = x.getPixelForValue(i);
  
          const yPos = y.getPixelForValue(0) + 30;
  
          ctx.save();
  
          ctx.fillStyle = '#555';
  
          ctx.font = '12px Segoe UI';
  
          ctx.textAlign = 'center';
  
          ctx.fillText(partidosPPSoria[i], xPos, yPos);
  
          ctx.restore();
  
        });
  
      }
  
    },
  
    ChartDataLabels
  
  ]
  
});
  

  
   // ================= PSOE =================
  
const datosPSOESoria = [39.01, 33.00, 34.51, 29.31, 33.66, 37.90, 36.69, 32.93, 31.15, 40.73, 18.06,32.03];
  
const etiquetasPSOESoria = ['1983', '1987', '1991', '1995', '1999', '2003', '2007', '2011', '2015', '2019', '2022','2026'];
  
const partidosPSOESoria = ['PSOE', 'PSOE', 'PSOE', 'PSOE', 'PSOE', 'PSOE', 'PSOE', 'PSOE', 'PSOE', 'PSOE', 'PSOE','PSOE'];
  

  
const ctxPSOE = document.getElementById('psoeSoriaChart').getContext('2d');
  

  
new Chart(ctxPSOE, {
  
  data: {
  
    labels: etiquetasPSOESoria,
  
    datasets: [
  
      {
  
        type: 'bar',
  
        label: 'Porcentaje de voto (%)',
  
        data: datosPSOESoria,
  
        backgroundColor: 'rgba(255, 0, 0, 0.7)',
  
        borderColor: '#FF0000',
  
        borderWidth: 1,
  
        datalabels: { 
  
          anchor: 'end', 
  
          align: 'top', 
  
          color: '#B22222', 
  
          font: { weight: 'bold' }, 
  
          formatter: (v) => v + '%' 
  
        }
  
      },
  
      {
  
        type: 'line',
  
        label: 'Tendencia',
  
        data: datosPSOESoria,
  
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
  
      id: 'etiquetaPartidoPSOESoria',
  
      afterDatasetsDraw(chart) {
  
        const { ctx, scales: { x, y } } = chart;
  
        datosPSOESoria.forEach((valor, i) => {
  
          const xPos = x.getPixelForValue(i);
  
          const yPos = y.getPixelForValue(0) + 30;
  
          ctx.save();
  
          ctx.fillStyle = '#B22222';
  
          ctx.font = '12px Segoe UI';
  
          ctx.textAlign = 'center';
  
          ctx.fillText(partidosPSOESoria[i], xPos, yPos);
  
          ctx.restore();
  
        });
  
      }
  
    },
  
    ChartDataLabels
  
  ]
  
});
  

  
// ================= Vox =================
  
const datosVoxSoria = [4.27, 11.47,15.87];
  
const etiquetasVoxSoria = ['2019', '2022','2026'];
  
const partidosVoxSoria = ['VOX', 'VOX','VOX'];
  

  
const ctxVox = document.getElementById('voxSoriaChart').getContext('2d');
  

  
new Chart(ctxVox, {
  
  data: {
  
    labels: etiquetasVoxSoria,
  
    datasets: [
  
      {
  
        type: 'bar',
  
        label: 'Porcentaje de voto (%)',
  
        data: datosVoxSoria,
  
        backgroundColor: 'rgba(0, 128, 0, 0.7)',
  
        borderColor: '#008000',
  
        borderWidth: 1,
  
        datalabels: { 
  
          anchor: 'end', 
  
          align: 'top', 
  
          color: '#006400', 
  
          font: { weight: 'bold' }, 
  
          formatter: (v) => v + '%' 
  
        }
  
      },
  
      {
  
        type: 'line',
  
        label: 'Tendencia',
  
        data: datosVoxSoria,
  
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
  
      id: 'etiquetaPartidoVoxSoria',
  
      afterDatasetsDraw(chart) {
  
        const { ctx, scales: { x, y } } = chart;
  
        datosVoxSoria.forEach((valor, i) => {
  
          const xPos = x.getPixelForValue(i);
  
          const yPos = y.getPixelForValue(0) + 30;
  
          ctx.save();
  
          ctx.fillStyle = '#006400';
  
          ctx.font = '12px Segoe UI';
  
          ctx.textAlign = 'center';
  
          ctx.fillText(partidosVoxSoria[i], xPos, yPos);
  
          ctx.restore();
  
        });
  
      }
  
    },
  
    ChartDataLabels
  
  ]
  
});
  

  
// ================= Ciudadanos =================
  
const datosCsSoria = [12.13, 11.27, 0.78,0.09];
  
const etiquetasCsSoria = ['2015', '2019', '2022','2026'];
  
const partidosCsSoria = ['CS', 'CS', 'CS','CS'];
  

  
const ctxCs = document.getElementById('csSoriaChart').getContext('2d');
  

  
new Chart(ctxCs, {
  
  data: {
  
    labels: etiquetasCsSoria,
  
    datasets: [
  
      {
  
        type: 'bar',
  
        label: 'Porcentaje de voto (%)',
  
        data: datosCsSoria,
  
        backgroundColor: 'rgba(255, 165, 0, 0.7)',
  
        borderColor: '#FFA500',
  
        borderWidth: 1,
  
        datalabels: { 
  
          anchor: 'end', 
  
          align: 'top', 
  
          color: '#FF8C00', 
  
          font: { weight: 'bold' }, 
  
          formatter: (v) => v + '%' 
  
        }
  
      },
  
      {
  
        type: 'line',
  
        label: 'Tendencia',
  
        data: datosCsSoria,
  
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
  
      id: 'etiquetaPartidoCsSoria',
  
      afterDatasetsDraw(chart) {
  
        const { ctx, scales: { x, y } } = chart;
  
        datosCsSoria.forEach((valor, i) => {
  
          const xPos = x.getPixelForValue(i);
  
          const yPos = y.getPixelForValue(0) + 30;
  
          ctx.save();
  
          ctx.fillStyle = '#FF8C00';
  
          ctx.font = '12px Segoe UI';
  
          ctx.textAlign = 'center';
  
          ctx.fillText(partidosCsSoria[i], xPos, yPos);
  
          ctx.restore();
  
        });
  
      }
  
    },
  
    ChartDataLabels
  
  ]
  
});
  
// ================= Podemos / Podemos-IU-AV =================
  
const datosPodemosSoria = [11.99, 5.07, 2.25,0.53];
  
const etiquetasPodemosSoria = ['2015', '2019', '2022','2026'];
  
const partidosPodemosSoria = ['Podemos', 'Podemos', 'Podemos-IU-AV','Podemos'];
  

  
const ctxPodemos = document.getElementById('podemosSoriaChart').getContext('2d');
  

  
new Chart(ctxPodemos, {
  
  data: {
  
    labels: etiquetasPodemosSoria,
  
    datasets: [
  
      {
  
        type: 'bar',
  
        label: 'Porcentaje de voto (%)',
  
        data: datosPodemosSoria,
  
        backgroundColor: 'rgba(128, 0, 128, 0.7)',
  
        borderColor: '#800080',
  
        borderWidth: 1,
  
        datalabels: { 
  
          anchor: 'end', 
  
          align: 'top', 
  
          color: '#4B0082', 
  
          font: { weight: 'bold' }, 
  
          formatter: (v) => v + '%' 
  
        }
  
      },
  
      {
  
        type: 'line',
  
        label: 'Tendencia',
  
        data: datosPodemosSoria,
  
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
  
      id: 'etiquetaPartidoPodemosSoria',
  
      afterDatasetsDraw(chart) {
  
        const { ctx, scales: { x, y } } = chart;
  
        datosPodemosSoria.forEach((valor, i) => {
  
          const xPos = x.getPixelForValue(i);
  
          const yPos = y.getPixelForValue(0) + 30;
  
          ctx.save();
  
          ctx.fillStyle = '#4B0082';
  
          ctx.font = '12px Segoe UI';
  
          ctx.textAlign = 'center';
  
          ctx.fillText(partidosPodemosSoria[i], xPos, yPos);
  
          ctx.restore();
  
        });
  
      }
  
    },
  
    ChartDataLabels
  
  ]
  
});
  

  
// ================= CDS =================
  
const datosCDSSoria = [7.81, 14.63, 6.51];
  
const etiquetasCDSSoria = ['1983', '1987', '1991'];
  
const partidosCDSSoria = ['CDS', 'CDS', 'CDS'];
  

  
const ctxCDS = document.getElementById('cdsSoriaChart').getContext('2d');
  

  
new Chart(ctxCDS, {
  
  data: {
  
    labels: etiquetasCDSSoria,
  
    datasets: [
  
      {
  
        type: 'bar',
  
        label: 'Porcentaje de voto (%)',
  
        data: datosCDSSoria,
  
        backgroundColor: 'rgba(0, 191, 255, 0.7)',
  
        borderColor: '#00BFFF',
  
        borderWidth: 1,
  
        datalabels: { 
  
          anchor: 'end', 
  
          align: 'top', 
  
          color: '#1E90FF', 
  
          font: { weight: 'bold' }, 
  
          formatter: (v) => v + '%' 
  
        }
  
      },
  
      {
  
        type: 'line',
  
        label: 'Tendencia',
  
        data: datosCDSSoria,
  
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
  
      id: 'etiquetaPartidoCDSSoria',
  
      afterDatasetsDraw(chart) {
  
        const { ctx, scales: { x, y } } = chart;
  
        datosCDSSoria.forEach((valor, i) => {
  
          const xPos = x.getPixelForValue(i);
  
          const yPos = y.getPixelForValue(0) + 30;
  
          ctx.save();
  
          ctx.fillStyle = '#1E90FF';
  
          ctx.font = '12px Segoe UI';
  
          ctx.textAlign = 'center';
  
          ctx.fillText(partidosCDSSoria[i], xPos, yPos);
  
          ctx.restore();
  
        });
  
      }
  
    },
  
    ChartDataLabels
  
  ]
  
});
  

  
// ================= IU =================
  
const datosIUSoria = [2.73, 2.73, 8.44, 6.12, 2.16, 1.74, 3.10, 2.85, 1.18, 2.25,0.56];
  
const etiquetasIUSoria = ['1987','1991','1995','1999','2003','2007','2011','2015','2019','2022','2026'];
  
const partidosIUSoria = ['IU','IU','IU','IU','IU','IU','IU','IU','IU-Anticap','Podemos-IU-AV','IU'];
  

  
const ctxIU = document.getElementById('iuSoriaChart').getContext('2d');
  

  
new Chart(ctxIU, {
  
  data: {
  
    labels: etiquetasIUSoria,
  
    datasets: [
  
      {
  
        type: 'bar',
  
        label: 'Porcentaje de voto (%)',
  
        data: datosIUSoria,
  
        backgroundColor: 'rgba(178,34,34,0.7)', // rojo intenso
  
        borderColor: '#B22222',
  
        borderWidth: 1,
  
        datalabels: { 
  
          anchor: 'end', 
  
          align: 'top', 
  
          color: '#8B0000', 
  
          font: { weight: 'bold' }, 
  
          formatter: (v) => v + '%' 
  
        }
  
      },
  
      {
  
        type: 'line',
  
        label: 'Tendencia',
  
        data: datosIUSoria,
  
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
  
      id: 'etiquetaPartidoIUSoria',
  
      afterDatasetsDraw(chart) {
  
        const { ctx, scales: { x, y } } = chart;
  
        datosIUSoria.forEach((valor, i) => {
  
          const xPos = x.getPixelForValue(i);
  
          const yPos = y.getPixelForValue(0) + 30;
  
          ctx.save();
  
          ctx.fillStyle = '#8B0000';
  
          ctx.font = '12px Segoe UI';
  
          ctx.textAlign = 'center';
  
          ctx.fillText(partidosIUSoria[i], xPos, yPos);
  
          ctx.restore();
  
        });
  
      }
  
    },
  
    ChartDataLabels
  
  ]
  
});


// ================= UPyD Soria =================
const datosUPyDSoria = [0.95];
const etiquetasUPyDSoria = ['2015'];
const partidosUPyDSoria = ['UPyD'];

const ctxUPyDSoria = document.getElementById('upydSoriaChart').getContext('2d');

new Chart(ctxUPyDSoria, {
  data: {
    labels: etiquetasUPyDSoria,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosUPyDSoria,
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
        data: datosUPyDSoria,
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
    id: 'etiquetaPartidoUPyDSoria',
    afterDatasetsDraw(chart) {
      const { ctx, scales: { x, y } } = chart;
      datosUPyDSoria.forEach((v, i) => {
        const xPos = x.getPixelForValue(i);
        const yPos = y.getPixelForValue(0) + 30;
        ctx.save();
        ctx.fillStyle = '#FF60DA';
        ctx.font = '12px Segoe UI';
        ctx.textAlign = 'center';
        ctx.fillText(partidosUPyDSoria[i], xPos, yPos);
        ctx.restore();
      });
    }
  }, ChartDataLabels]
});

// ================= SALF Soria =================
const datosSALFSoria = [0.82];
const etiquetasSALFSoria = ['2026'];
const partidosSALFSoria = ['SALF'];

const ctxSALFSoria = document.getElementById('salfSoriaChart').getContext('2d');

new Chart(ctxSALFSoria, {
  data: {
    labels: etiquetasSALFSoria,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosSALFSoria,
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
        data: datosSALFSoria,
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
      y: { beginAtZero: true, title: { display: true, text: 'Porcentaje (%)', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [{
    id: 'etiquetaPartidoSALFSoria',
    afterDatasetsDraw(chart) {
      const { ctx, scales: { x, y } } = chart;
      datosSALFSoria.forEach((v, i) => {
        const xPos = x.getPixelForValue(i);
        const yPos = y.getPixelForValue(0) + 30;
        ctx.save();
        ctx.fillStyle = '#005a96';
        ctx.font = '12px Segoe UI';
        ctx.textAlign = 'center';
        ctx.fillText(partidosSALFSoria[i], xPos, yPos);
        ctx.restore();
      });
    }
  }, ChartDataLabels]
});

  
// ================= Soria Ya =================
  
const datosSoriaYa = [42.57,19.87];
  
const etiquetasSoriaYa = ['2022','2026'];
  
const partidosSoriaYa = ['Soria Ya','SORIA YA'];
  

  
const ctxSoriaYa = document.getElementById('soriaYaChart').getContext('2d');
  

  
new Chart(ctxSoriaYa, {
  
  data: {
  
    labels: etiquetasSoriaYa,
  
    datasets: [
  
      {
  
        type: 'bar',
  
        label: 'Porcentaje de voto (%)',
  
        data: datosSoriaYa,
  
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // negro semi-transparente
  
        borderColor: '#000000', // negro sólido
  
        borderWidth: 1,
  
        datalabels: { 
  
          anchor: 'end', 
  
          align: 'top', 
  
          color: '#000000', 
  
          font: { weight: 'bold' }, 
  
          formatter: (v) => v + '%' 
  
        }
  
      },
  
      {
  
        type: 'line',
  
        label: 'Tendencia',
  
        data: datosSoriaYa,
  
        borderColor: '#000000', // línea negra
  
        backgroundColor: 'transparent',
  
        fill: false,
  
        tension: 0.3,
  
        pointRadius: 4,
  
        pointBackgroundColor: '#000000' // puntos negros
  
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
  
      id: 'etiquetaPartidoSoriaYa',
  
      afterDatasetsDraw(chart) {
  
        const { ctx, scales: { x, y } } = chart;
  
        datosSoriaYa.forEach((valor, i) => {
  
          const xPos = x.getPixelForValue(i);
  
          const yPos = y.getPixelForValue(0) + 30;
  
          ctx.save();
  
          ctx.fillStyle = '#000000'; // etiqueta negra
  
          ctx.font = '12px Segoe UI';
  
          ctx.textAlign = 'center';
  
          ctx.fillText(partidosSoriaYa[i], xPos, yPos);
  
          ctx.restore();
  
        });
  
      }
  
    },
  
    ChartDataLabels
  
  ]
  
});

const etiquetasSoriaPct = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2022','2026'];

const datosSoriaPct = {
  'PP/AP-PDP-UL': [44.76, 42.59, 53.22, 61.22, 59.53, 55.23, 50.37, 52.01, 36.89, 27.62, 23.99,28.79],
  'PSOE':         [39.01, 33.00, 34.51, 29.31, 33.66, 37.90, 36.69, 32.93, 31.15, 40.73, 18.06,32.03],
  'VOX':          [null,null,null,null,null,null,null,null,null,4.27,11.47,15.87],
  'CS':           [null,null,null,null,null,null,null,null,12.13,11.27,0.78,0.09],
  'Podemos/IU':   [null,null,null,null,null,null,null,null,11.99,5.07,2.25,0.53],
  'CDS':          [7.81, 14.63, 6.51, null,null,null,null,null,null,null,null],
  'IU':           [null,2.73, 2.73, 8.44, 6.12, 2.16, 1.74, 3.10, 2.85, 1.18, 2.25,0.56],
  'Soria Ya':     [null,null,null,null,null,null,null,null,null,null,42.57,19.87],
  'UPyD':         [null,null,null,null,null,null,null,null,0.95,null,null,null],
  'SALF':         [null,null,null,null,null,null,null,null,null,null,null,0.82],
};

const coloresPartidosSoriaPct = {
  'PP/AP-PDP-UL': '#0000FF',
  'PSOE': '#FF0000',
  'VOX': '#008000',
  'CS': '#FF8C00',
  'Podemos/IU': '#800080',
  'CDS': '#00BFFF',
  'IU': '#B22222',
  'Soria Ya': '#000000',
  'UPyD': '#FF60DA',
  'SALF': '#005a96',
};

// Construcción de datasets: solo líneas, puntos y números visibles
const datasetsSoriaPct = Object.keys(datosSoriaPct).map(partido => ({
  type: 'line',
  label: partido,
  data: datosSoriaPct[partido],
  borderColor: coloresPartidosSoriaPct[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresPartidosSoriaPct[partido],
  datalabels: { 
    display: true,
    color: coloresPartidosSoriaPct[partido], 
    font: { weight: 'bold', size: 12 }, 
    formatter: v => v != null ? v.toFixed(2) + '%' : ''
  }
}));

const ctxSoriaPct = document.getElementById('soriaPctChart').getContext('2d');

new Chart(ctxSoriaPct, {
  data: {
    labels: etiquetasSoriaPct,
    datasets: datasetsSoriaPct
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