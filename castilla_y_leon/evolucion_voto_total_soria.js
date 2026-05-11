// ================= PP / AP-PDP-UL / AP =================
const datosPPVotosSoria = [23487, 22668, 26977, 32089, 28701, 29534, 27078, 26264, 17658, 13423, 10364,12643];
const etiquetasPPVotosSoria = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2022','2026'];
const partidosPPVotosSoria = ['AP-PDP-UL','AP','PP','PP','PP','PP','PP','PP','PP','PP','PP','PP'];

const ctxPPVotos = document.getElementById('ppVotosSoriaChart').getContext('2d');

new Chart(ctxPPVotos, {
  data: {
    labels: etiquetasPPVotosSoria,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPPVotosSoria,
        backgroundColor: 'rgba(0, 0, 255, 0.7)', // azul
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
        data: datosPPVotosSoria,
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoPPVotosSoria',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPPVotosSoria.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#00008B';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPPVotosSoria[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PSOE =================
const datosPSOEVotosSoria = [20470, 17562, 17492, 15361, 16227, 20265, 19727, 16630, 14909, 19794, 7800,14066];
const etiquetasPSOEVotosSoria = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2022','2026'];
const partidosPSOEVotosSoria = Array(etiquetasPSOEVotosSoria.length).fill('PSOE');

const ctxPSOEVotos = document.getElementById('psoeVotosSoriaChart').getContext('2d');

new Chart(ctxPSOEVotos, {
  data: {
    labels: etiquetasPSOEVotosSoria,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPSOEVotosSoria,
        backgroundColor: 'rgba(255, 0, 0, 0.7)', // rojo semi-transparente
        borderColor: '#FF0000', // rojo sólido
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#8B0000', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() // separador de miles
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosPSOEVotosSoria,
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoPSOEVotosSoria',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPSOEVotosSoria.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPSOEVotosSoria[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= VOX =================
const datosVOXVotosSoria = [2075, 4953,6972];
const etiquetasVOXVotosSoria = ['2019','2022','2026'];
const partidosVOXVotosSoria = ['VOX','VOX','VOX'];

const ctxVOXVotos = document.getElementById('voxVotosSoriaChart').getContext('2d');

new Chart(ctxVOXVotos, {
  data: {
    labels: etiquetasVOXVotosSoria,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosVOXVotosSoria,
        backgroundColor: 'rgba(0, 128, 0, 0.7)', // verde semi-transparente
        borderColor: '#008000', // verde sólido
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
        data: datosVOXVotosSoria,
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoVOXVotosSoria',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosVOXVotosSoria.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#006400';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosVOXVotosSoria[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Ciudadanos (CS) =================
const datosCSVotosSoria = [5808, 5476, 339,40];
const etiquetasCSVotosSoria = ['2015','2019','2022','2026'];
const partidosCSVotosSoria = ['CS','CS','CS','CS'];

const ctxCSVotos = document.getElementById('csVotosSoriaChart').getContext('2d');

new Chart(ctxCSVotos, {
  data: {
    labels: etiquetasCSVotosSoria,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCSVotosSoria,
        backgroundColor: 'rgba(255, 165, 0, 0.7)', // naranja semi-transparente
        borderColor: '#FFA500', // naranja sólido
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
        data: datosCSVotosSoria,
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoCSVotosSoria',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCSVotosSoria.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF8C00';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCSVotosSoria[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= PODEMOS / IU / AV =================
const datosPodemosVotosSoria = [5740, 2464, 974,234];
const etiquetasPodemosVotosSoria = ['2015','2019','2022','2026'];
const partidosPodemosVotosSoria = ['PODEMOS','PODEMOS','PODEMOS-IU-AV','Podemos'];

const ctxPodemosVotos = document.getElementById('podemosVotosSoriaChart').getContext('2d');

new Chart(ctxPodemosVotos, {
  data: {
    labels: etiquetasPodemosVotosSoria,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosPodemosVotosSoria,
        backgroundColor: 'rgba(128, 0, 128, 0.7)', // morado semi-transparente
        borderColor: '#800080', // morado sólido
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
        data: datosPodemosVotosSoria,
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoPodemosVotosSoria',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosPodemosVotosSoria.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#4B0082';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosPodemosVotosSoria[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= CDS =================
const datosCDSVotosSoria = [4098, 7786, 3302];
const etiquetasCDSVotosSoria = ['1983','1987','1991'];
const partidosCDSVotosSoria = ['CDS','CDS','CDS'];

const ctxCDSVotos = document.getElementById('cdsVotosSoriaChart').getContext('2d');

new Chart(ctxCDSVotos, {
  data: {
    labels: etiquetasCDSVotosSoria,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosCDSVotosSoria,
        backgroundColor: 'rgba(0, 191, 255, 0.7)', // mismo azul que porcentaje
        borderColor: '#00BFFF',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#1E90FF', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString() // formateo con separador de miles
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosCDSVotosSoria,
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoCDSVotosSoria',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosCDSVotosSoria.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#1E90FF';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosCDSVotosSoria[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= IU =================
const datosIUVotosSoria = [1454, 1385, 4422, 2949, 1155, 912, 1565, 1366, 575, 974,247];
const etiquetasIUVotosSoria = ['1987','1991','1995','1999','2003','2007','2011','2015','2019','2022','2026'];
const partidosIUVotosSoria = [
  'IU','IU','IU','IU','IU','IU','IU','IU','IU-Anticap','PODEMOS-IU-AV','IU'
];

const ctxIUVotos = document.getElementById('iuVotosSoriaChart').getContext('2d');

new Chart(ctxIUVotos, {
  data: {
    labels: etiquetasIUVotosSoria,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosIUVotosSoria,
        backgroundColor: 'rgba(178,34,34,0.7)', // rojo intenso
        borderColor: '#B22222',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#8B0000', // rojo oscuro
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosIUVotosSoria,
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [
    {
      id: 'etiquetaPartidoIUVotosSoria',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosIUVotosSoria.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#8B0000'; // rojo oscuro para etiqueta
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosIUVotosSoria[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= UPyD Soria =================
const datosUPyDSoriaVotos = [457];
const etiquetasUPyDSoriaVotos = ['2015'];
const partidosUPyDSoriaVotos = ['UPyD'];

const ctxUPyDVotos = document.getElementById('upydSoriaVotosChart').getContext('2d');

new Chart(ctxUPyDVotos, {
  data: {
    labels: etiquetasUPyDSoriaVotos,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosUPyDSoriaVotos,
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
        data: datosUPyDSoriaVotos,
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
      id: 'etiquetaPartidoUPyDSoriaVotos',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosUPyDSoriaVotos.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#FF60DA';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosUPyDSoriaVotos[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= SALF Soria =================
const datosSALFSoriaVotos = [363];
const etiquetasSALFSoriaVotos = ['2026'];
const partidosSALFSoriaVotos = ['SALF'];

const ctxSALFVotos = document.getElementById('salfSoriaVotosChart').getContext('2d');

new Chart(ctxSALFVotos, {
  data: {
    labels: etiquetasSALFSoriaVotos,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosSALFSoriaVotos,
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
        data: datosSALFSoriaVotos,
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
      id: 'etiquetaPartidoSALFSoriaVotos',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosSALFSoriaVotos.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#005a96';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosSALFSoriaVotos[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= Soria Ya =================
const datosSoriaYa = [18390,8728];
const etiquetasSoriaYa = ['2022','2026'];
const partidosSoriaYa = ['Soria Ya','SORIA YA'];

const ctxSoriaYa = document.getElementById('soriaYa2022Chart').getContext('2d');

new Chart(ctxSoriaYa, {
  data: {
    labels: etiquetasSoriaYa,
    datasets: [
      {
        type: 'bar',
        label: 'Votos totales',
        data: datosSoriaYa,
        backgroundColor: 'rgba(0,0,0,0.7)', // negro
        borderColor: '#000000',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#000000',
          font: { weight: 'bold' }, 
          formatter: (v) => v.toLocaleString()
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosSoriaYa,
        borderColor: '#000000',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#000000'
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333' } },
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
          ctx.fillStyle = '#000000';
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

const etiquetasTotales = ['1983','1987','1991','1995','1999','2003','2007','2011','2015','2019','2022','2026'];

// Datos de cada partido (alineados por año; null si no hubo datos)
const datosTotalesSoria = {
  'PP / AP-PDP-UL / AP': [23487, 22668, 26977, 32089, 28701, 29534, 27078, 26264, 17658, 13423, 10364,12643],
  'PSOE': [20470, 17562, 17492, 15361, 16227, 20265, 19727, 16630, 14909, 19794, 7800,14066],
  'VOX': [null,null,null,null,null,null,null,null,null,2075,4953,6972],
  'CS': [null,null,null,null,null,null,null,null,5808,5476,339,40],
  'PODEMOS-IU-AV': [null,null,null,null,null,null,null,null,5740,2464,974,234],
  'CDS': [4098, 7786, 3302,null,null,null,null,null,null,null,null],
  'IU': [null,1454,1385,4422,2949,1155,912,1565,1366,575,974,247],
  'Soria Ya': [null,null,null,null,null,null,null,null,null,null,18390,8728],
  'UPyD': [null,null,null,null,null,null,null,null,457,null,null,null],
  'SALF': [null,null,null,null,null,null,null,null,null,null,null,363],
};

// Colores para cada partido
const coloresPartidos = {
  'PP / AP-PDP-UL / AP': '#0000FF',
  'PSOE': '#FF0000',
  'VOX': '#008000',
  'CS': '#FFA500',
  'PODEMOS-IU-AV': '#800080',
  'CDS': '#00BFFF',
  'IU': '#B22222',
  'Soria Ya': '#000000',
  'UPyD': '#FF60DA',
  'SALF': '#005a96',
};

// Construimos los datasets para Chart.js
const datasetsTotales = Object.keys(datosTotalesSoria).map(partido => ({
  type: 'line',
  label: partido,
  data: datosTotalesSoria[partido],
  borderColor: coloresPartidos[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresPartidos[partido],
  datalabels: {
    display: true,
    color: coloresPartidos[partido],
    font: { weight: 'bold', size: 12 },
    formatter: v => v != null ? v.toLocaleString('es-ES') : ''
  }
}));

const ctxTotales = document.getElementById('votosTotalesSoriaChart').getContext('2d');

new Chart(ctxTotales, {
  data: {
    labels: etiquetasTotales,
    datasets: datasetsTotales
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