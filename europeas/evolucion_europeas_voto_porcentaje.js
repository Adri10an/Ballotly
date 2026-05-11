

// ================= PP =================
const datosPPEuropeas = [24.65,21.41,40.12,39.74,41.21,42.12,26.09,20.15,34.21];
const etiquetasPPEuropeas = ['1987','1989','1994','1999','2004','2009','2014','2019','2024'];
new Chart(document.getElementById('ppEuropeasChart').getContext('2d'),{data:{labels:etiquetasPPEuropeas,datasets:[{type:'bar',label:'%',data:datosPPEuropeas,backgroundColor:'rgba(0,0,255,0.7)',borderColor:'#0000FF',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#00008B',font:{weight:'bold'},formatter:v=>v.toFixed(2)+'%'}},{type:'line',label:'Tendencia',data:datosPPEuropeas,borderColor:'#0000FF',backgroundColor:'transparent',fill:false,tension:0.3,pointRadius:4,pointBackgroundColor:'#0000FF'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Porcentaje (%)',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= PSOE =================
const datosPSOEEuropeas = [39.06,39.57,30.79,35.33,43.46,38.78,23.01,32.86,30.19];
const etiquetasPSOEEuropeas = ['1987','1989','1994','1999','2004','2009','2014','2019','2024'];
new Chart(document.getElementById('psoeEuropeasChart').getContext('2d'),{data:{labels:etiquetasPSOEEuropeas,datasets:[{type:'bar',label:'%',data:datosPSOEEuropeas,backgroundColor:'rgba(255,0,0,0.7)',borderColor:'#FF0000',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#B22222',font:{weight:'bold'},formatter:v=>v.toFixed(2)+'%'}},{type:'line',label:'Tendencia',data:datosPSOEEuropeas,borderColor:'#FF0000',backgroundColor:'transparent',fill:false,tension:0.3,pointRadius:4,pointBackgroundColor:'#FF0000'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Porcentaje (%)',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= VOX =================
const datosVOXEuropeas = [1.57,6.21,9.63];
const etiquetasVOXEuropeas = ['2014','2019','2024'];
new Chart(document.getElementById('voxEuropeasChart').getContext('2d'),{data:{labels:etiquetasVOXEuropeas,datasets:[{type:'bar',label:'%',data:datosVOXEuropeas,backgroundColor:'rgba(0,150,57,0.7)',borderColor:'#009639',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#006400',font:{weight:'bold'},formatter:v=>v.toFixed(2)+'%'}},{type:'line',label:'Tendencia',data:datosVOXEuropeas,borderColor:'#009639',backgroundColor:'transparent',fill:false,tension:0.3,pointRadius:4,pointBackgroundColor:'#009639'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Porcentaje (%)',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= AR =================
const datosAREuropeas = [5.58,4.91];
const etiquetasAREuropeas = ['2019','2024'];
new Chart(document.getElementById('arEuropeasChart').getContext('2d'),{data:{labels:etiquetasAREuropeas,datasets:[{type:'bar',label:'%',data:datosAREuropeas,backgroundColor:'rgba(201,159,0,0.7)',borderColor:'#c99f00',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#8B7500',font:{weight:'bold'},formatter:v=>v.toFixed(2)+'%'}},{type:'line',label:'Tendencia',data:datosAREuropeas,borderColor:'#c99f00',backgroundColor:'transparent',fill:false,tension:0.3,pointRadius:4,pointBackgroundColor:'#c99f00'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Porcentaje (%)',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= SUMAR =================
const datosSUMAREuropeas = [4.67];
const etiquetasSUMAREuropeas = ['2024'];
new Chart(document.getElementById('sumarEuropeasChart').getContext('2d'),{data:{labels:etiquetasSUMAREuropeas,datasets:[{type:'bar',label:'%',data:datosSUMAREuropeas,backgroundColor:'rgba(255,105,180,0.7)',borderColor:'#FF69B4',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#C71585',font:{weight:'bold'},formatter:v=>v.toFixed(2)+'%'}},{type:'line',label:'Tendencia',data:datosSUMAREuropeas,borderColor:'#FF69B4',backgroundColor:'transparent',fill:false,tension:0,pointRadius:4,pointBackgroundColor:'#FF69B4'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Porcentaje (%)',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= SALF =================
const datosSALFEuropeas = [4.58];
const etiquetasSALFEuropeas = ['2024'];
new Chart(document.getElementById('salfEuropeasChart').getContext('2d'),{data:{labels:etiquetasSALFEuropeas,datasets:[{type:'bar',label:'%',data:datosSALFEuropeas,backgroundColor:'rgba(117,90,73,0.7)',borderColor:'#755a49',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#4b3a2f',font:{weight:'bold'},formatter:v=>v.toFixed(2)+'%'}},{type:'line',label:'Tendencia',data:datosSALFEuropeas,borderColor:'#755a49',backgroundColor:'transparent',fill:false,tension:0,pointRadius:4,pointBackgroundColor:'#755a49'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Porcentaje (%)',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= PODEMOS =================
const datosPODEMOSEuropeas = [7.98,10.07,3.30];
const etiquetasPODEMOSEuropeas = ['2014','2019','2024'];
new Chart(document.getElementById('podemosEuropeasChart').getContext('2d'),{data:{labels:etiquetasPODEMOSEuropeas,datasets:[{type:'bar',label:'%',data:datosPODEMOSEuropeas,backgroundColor:'rgba(128,0,128,0.7)',borderColor:'#800080',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#4B0082',font:{weight:'bold'},formatter:v=>v.toFixed(2)+'%'}},{type:'line',label:'Tendencia',data:datosPODEMOSEuropeas,borderColor:'#800080',backgroundColor:'transparent',fill:false,tension:0.3,pointRadius:4,pointBackgroundColor:'#800080'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Porcentaje (%)',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= JUNTS =================
const datosJuntEuropeas = [4.43,4.20,4.66,4.43,5.15,5.10,5.42,4.54,2.52];
const etiquetasJuntEuropeas = ['1987','1989','1994','1999','2004','2009','2014','2019','2024'];
new Chart(document.getElementById('juntsEuropeasChart').getContext('2d'),{data:{labels:etiquetasJuntEuropeas,datasets:[{type:'bar',label:'%',data:datosJuntEuropeas,backgroundColor:'rgba(64,224,208,0.7)',borderColor:'#40E0D0',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#008B8B',font:{weight:'bold'},formatter:v=>v.toFixed(2)+'%'}},{type:'line',label:'Tendencia',data:datosJuntEuropeas,borderColor:'#40E0D0',backgroundColor:'transparent',fill:false,tension:0.3,pointRadius:4,pointBackgroundColor:'#40E0D0'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Porcentaje (%)',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= CEUS =================
const datosCEUSEuropeas = [1.18,1.91,2.79,2.90,5.15,5.10,5.42,2.82,1.63];
const etiquetasCEUSEuropeas = ['1987','1989','1994','1999','2004','2009','2014','2019','2024'];
new Chart(document.getElementById('ceusEuropeasChart').getContext('2d'),{data:{labels:etiquetasCEUSEuropeas,datasets:[{type:'bar',label:'%',data:datosCEUSEuropeas,backgroundColor:'rgba(40,0,128,0.7)',borderColor:'#280080',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#1a004d',font:{weight:'bold'},formatter:v=>v.toFixed(2)+'%'}},{type:'line',label:'Tendencia',data:datosCEUSEuropeas,borderColor:'#280080',backgroundColor:'transparent',fill:false,tension:0.3,pointRadius:4,pointBackgroundColor:'#280080'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Porcentaje (%)',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= Cs =================
const datosCsEuropeas = [3.16,12.18,0.70];
const etiquetasCsEuropeas = ['2014','2019','2024'];
new Chart(document.getElementById('ciudadanosEuropeasChart').getContext('2d'),{data:{labels:etiquetasCsEuropeas,datasets:[{type:'bar',label:'%',data:datosCsEuropeas,backgroundColor:'rgba(255,140,0,0.7)',borderColor:'#FF8C00',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#CC7000',font:{weight:'bold'},formatter:v=>v.toFixed(2)+'%'}},{type:'line',label:'Tendencia',data:datosCsEuropeas,borderColor:'#FF8C00',backgroundColor:'transparent',fill:false,tension:0.3,pointRadius:4,pointBackgroundColor:'#FF8C00'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Porcentaje (%)',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= CEP =================
const datosCEPEuropeas = [1.70,1.51,1.20,2.45,2.49,2.08];
const etiquetasCEPEuropeas = ['1987','1989','1994','2004','2009','2014'];
new Chart(document.getElementById('cepEuropeasChart').getContext('2d'),{data:{labels:etiquetasCEPEuropeas,datasets:[{type:'bar',label:'%',data:datosCEPEuropeas,backgroundColor:'rgba(41,130,66,0.7)',borderColor:'#298242',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#1f5f33',font:{weight:'bold'},formatter:v=>v.toFixed(2)+'%'}},{type:'line',label:'Tendencia',data:datosCEPEuropeas,borderColor:'#298242',backgroundColor:'transparent',fill:false,tension:0.3,pointRadius:4,pointBackgroundColor:'#298242'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Porcentaje (%)',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= CPE =================
const datosCPEuropeas = [1.92,1.32];
const etiquetasCPEuropeas = ['2014','2019'];
new Chart(document.getElementById('cpeEuropeasChart').getContext('2d'),{data:{labels:etiquetasCPEuropeas,datasets:[{type:'bar',label:'%',data:datosCPEuropeas,backgroundColor:'rgba(51,182,90,0.7)',borderColor:'#33b65a',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#1f6f38',font:{weight:'bold'},formatter:v=>v.toFixed(2)+'%'}},{type:'line',label:'Tendencia',data:datosCPEuropeas,borderColor:'#33b65a',backgroundColor:'transparent',fill:false,tension:0.3,pointRadius:4,pointBackgroundColor:'#33b65a'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Porcentaje (%)',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= ARALAR Europeas =================
const datosARAREuropeas = [0.13];
const etiquetasARAREuropeas = ['2004'];
const partidosARAREuropeas = ['ARALAR'];

const ctxARAREuropeas = document.getElementById('aralarEuropeasChart').getContext('2d');

new Chart(ctxARAREuropeas, {
  data: {
    labels: etiquetasARAREuropeas,
    datasets: [
      {
        type: 'bar',
        label: 'Porcentaje de voto (%)',
        data: datosARAREuropeas,
        backgroundColor: 'rgba(0,0,0,0.7)', // COLOR PENDIENTE ARALAR
        borderColor: '#000000',
        borderWidth: 1,
        datalabels: { 
          anchor: 'end', 
          align: 'top', 
          color: '#000000', 
          font: { weight: 'bold' }, 
          formatter: (v) => v.toFixed(2) + '%' 
        }
      },
      {
        type: 'line',
        label: 'Tendencia',
        data: datosARAREuropeas,
        borderColor: '#000000',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0,
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
      id: 'etiquetaPartidoARAREuropeas',
      afterDatasetsDraw(chart) {
        const { ctx, scales: { x, y } } = chart;
        datosARAREuropeas.forEach((valor, i) => {
          const xPos = x.getPixelForValue(i);
          const yPos = y.getPixelForValue(0) + 30;
          ctx.save();
          ctx.fillStyle = '#000000';
          ctx.font = '12px Segoe UI';
          ctx.textAlign = 'center';
          ctx.fillText(partidosARAREuropeas[i], xPos, yPos);
          ctx.restore();
        });
      }
    },
    ChartDataLabels
  ]
});

// ================= HB =================
const datosHBEuropeas = [1.87,1.70,0.97,1.45];
const etiquetasHBEuropeas = ['1987','1989','1994','1999'];
new Chart(document.getElementById('hbEuropeasChart').getContext('2d'),{data:{labels:etiquetasHBEuropeas,datasets:[{type:'bar',label:'%',data:datosHBEuropeas,backgroundColor:'rgba(1,181,156,0.7)',borderColor:'#01b59c',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#007a6a',font:{weight:'bold'},formatter:v=>v.toFixed(2)+'%'}},{type:'line',label:'Tendencia',data:datosHBEuropeas,borderColor:'#01b59c',backgroundColor:'transparent',fill:false,tension:0.3,pointRadius:4,pointBackgroundColor:'#01b59c'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Porcentaje (%)',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= ARM =================
const datosARMEuropeas = [3.84,0.44];
const etiquetasARMEuropeas = ['1989','1994'];
new Chart(document.getElementById('armEuropeasChart').getContext('2d'),{data:{labels:etiquetasARMEuropeas,datasets:[{type:'bar',label:'%',data:datosARMEuropeas,backgroundColor:'rgba(66,74,110,0.7)',borderColor:'#424a6e',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#2f3550',font:{weight:'bold'},formatter:v=>v.toFixed(2)+'%'}},{type:'line',label:'Tendencia',data:datosARMEuropeas,borderColor:'#424a6e',backgroundColor:'transparent',fill:false,tension:0.3,pointRadius:4,pointBackgroundColor:'#424a6e'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Porcentaje (%)',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= CN =================
const datosCNEuropeas = [1.91,2.79,2.90];
const etiquetasCNEuropeas = ['1989','1994','1999'];
new Chart(document.getElementById('cnEuropeasChart').getContext('2d'),{data:{labels:etiquetasCNEuropeas,datasets:[{type:'bar',label:'%',data:datosCNEuropeas,backgroundColor:'rgba(201,159,0,0.7)',borderColor:'#c99f00',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#8B7500',font:{weight:'bold'},formatter:v=>v.toFixed(2)+'%'}},{type:'line',label:'Tendencia',data:datosCNEuropeas,borderColor:'#c99f00',backgroundColor:'transparent',fill:false,tension:0.3,pointRadius:4,pointBackgroundColor:'#c99f00'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Porcentaje (%)',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= EDD =================
const datosEDDEuropeas = [4.01];
const etiquetasEDDEuropeas = ['2014'];
new Chart(document.getElementById('eddEuropeasChart').getContext('2d'),{data:{labels:etiquetasEDDEuropeas,datasets:[{type:'bar',label:'%',data:datosEDDEuropeas,backgroundColor:'rgba(201,159,0,0.7)',borderColor:'#c99f00',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#8B7500',font:{weight:'bold'},formatter:v=>v.toFixed(2)+'%'}},{type:'line',label:'Tendencia',data:datosEDDEuropeas,borderColor:'#c99f00',backgroundColor:'transparent',fill:false,tension:0,pointRadius:4,pointBackgroundColor:'#c99f00'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Porcentaje (%)',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= FAC =================
const datosFAEuropeas = [0.21,0.06];
const etiquetasFAEuropeas = ['2014','2019'];
new Chart(document.getElementById('faEuropeasChart').getContext('2d'),{data:{labels:etiquetasFAEuropeas,datasets:[{type:'bar',label:'%',data:datosFAEuropeas,backgroundColor:'rgba(1,69,134,0.7)',borderColor:'#014586',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#01315f',font:{weight:'bold'},formatter:v=>v.toFixed(2)+'%'}},{type:'line',label:'Tendencia',data:datosFAEuropeas,borderColor:'#014586',backgroundColor:'transparent',fill:false,tension:0.3,pointRadius:4,pointBackgroundColor:'#014586'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Porcentaje (%)',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= LPD =================
const datosLPDEuropeas = [2.08];
const etiquetasLPDEuropeas = ['2014'];
new Chart(document.getElementById('lpdEuropeasChart').getContext('2d'),{data:{labels:etiquetasLPDEuropeas,datasets:[{type:'bar',label:'%',data:datosLPDEuropeas,backgroundColor:'rgba(165,139,89,0.7)',borderColor:'#a58b59',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#6b5736',font:{weight:'bold'},formatter:v=>v.toFixed(2)+'%'}},{type:'line',label:'Tendencia',data:datosLPDEuropeas,borderColor:'#a58b59',backgroundColor:'transparent',fill:false,tension:0,pointRadius:4,pointBackgroundColor:'#a58b59'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Porcentaje (%)',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= EU =================
const datosEUEuropeas = [0.28,0.07,0.07,0.03,0.06];
const etiquetasEUEuropeas = ['1987','1994','1999','2009','2014'];
new Chart(document.getElementById('euEuropeasChart').getContext('2d'),{data:{labels:etiquetasEUEuropeas,datasets:[{type:'bar',label:'%',data:datosEUEuropeas,backgroundColor:'rgba(28,43,22,0.7)',borderColor:'#1c2b16',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#0f170c',font:{weight:'bold'},formatter:v=>v.toFixed(2)+'%'}},{type:'line',label:'Tendencia',data:datosEUEuropeas,borderColor:'#1c2b16',backgroundColor:'transparent',fill:false,tension:0.3,pointRadius:4,pointBackgroundColor:'#1c2b16'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Porcentaje (%)',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= UV =================
const datosUVEuropeas = [0.84,0.04];
const etiquetasUVEuropeas = ['1987','2009'];
new Chart(document.getElementById('uvEuropeasChart').getContext('2d'),{data:{labels:etiquetasUVEuropeas,datasets:[{type:'bar',label:'%',data:datosUVEuropeas,backgroundColor:'rgba(39,52,90,0.7)',borderColor:'#27345a',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#1a223a',font:{weight:'bold'},formatter:v=>v.toFixed(2)+'%'}},{type:'line',label:'Tendencia',data:datosUVEuropeas,borderColor:'#27345a',backgroundColor:'transparent',fill:false,tension:0,pointRadius:4,pointBackgroundColor:'#27345a'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Porcentaje (%)',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= PAR =================
const datosPAREuropeas = [0.55];
const etiquetasPAREuropeas = ['1987'];
new Chart(document.getElementById('parEuropeasChart').getContext('2d'),{data:{labels:etiquetasPAREuropeas,datasets:[{type:'bar',label:'%',data:datosPAREuropeas,backgroundColor:'rgba(201,159,0,0.7)',borderColor:'#c99f00',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#8B7500',font:{weight:'bold'},formatter:v=>v.toFixed(2)+'%'}},{type:'line',label:'Tendencia',data:datosPAREuropeas,borderColor:'#c99f00',backgroundColor:'transparent',fill:false,tension:0,pointRadius:4,pointBackgroundColor:'#c99f00'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Porcentaje (%)',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= PRC =================
const datosPRCEuropeas = [0.08];
const etiquetasPRCEuropeas = ['1987'];
new Chart(document.getElementById('prcEuropeasChart').getContext('2d'),{data:{labels:etiquetasPRCEuropeas,datasets:[{type:'bar',label:'%',data:datosPRCEuropeas,backgroundColor:'rgba(141,159,3,0.7)',borderColor:'#8d9f03',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#5f6f02',font:{weight:'bold'},formatter:v=>v.toFixed(2)+'%'}},{type:'line',label:'Tendencia',data:datosPRCEuropeas,borderColor:'#8d9f03',backgroundColor:'transparent',fill:false,tension:0,pointRadius:4,pointBackgroundColor:'#8d9f03'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Porcentaje (%)',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= CDS =================
const datosCDSEuropeas = [10.26,7.15,0.99,0.18,0.08,0.06];
const etiquetasCDSEuropeas = ['1987','1989','1994','1999','2004','2009'];
new Chart(document.getElementById('cdsEuropeasChart').getContext('2d'),{data:{labels:etiquetasCDSEuropeas,datasets:[{type:'bar',label:'%',data:datosCDSEuropeas,backgroundColor:'rgba(0,191,255,0.7)',borderColor:'#00BFFF',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#007aa3',font:{weight:'bold'},formatter:v=>v.toFixed(2)+'%'}},{type:'line',label:'Tendencia',data:datosCDSEuropeas,borderColor:'#00BFFF',backgroundColor:'transparent',fill:false,tension:0.3,pointRadius:4,pointBackgroundColor:'#00BFFF'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Porcentaje (%)',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= IU =================
const datosIUEuropeas = [5.25,6.06,13.44,5.77,4.72,3.71,10.03,10.07,4.67];
const etiquetasIUEuropeas = ['1987','1989','1994','1999','2004','2009','2014','2019','2024'];
new Chart(document.getElementById('iuEuropeasChart').getContext('2d'),{data:{labels:etiquetasIUEuropeas,datasets:[{type:'bar',label:'%',data:datosIUEuropeas,backgroundColor:'rgba(178,34,34,0.7)',borderColor:'#B22222',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#7a1616',font:{weight:'bold'},formatter:v=>v.toFixed(2)+'%'}},{type:'line',label:'Tendencia',data:datosIUEuropeas,borderColor:'#B22222',backgroundColor:'transparent',fill:false,tension:0.3,pointRadius:4,pointBackgroundColor:'#B22222'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Porcentaje (%)',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= UPyD =================
const datosUPYDEuropeas = [2.85,6.51];
const etiquetasUPYDEuropeas = ['2009','2014'];
new Chart(document.getElementById('upydEuropeasChart').getContext('2d'),{data:{labels:etiquetasUPYDEuropeas,datasets:[{type:'bar',label:'%',data:datosUPYDEuropeas,backgroundColor:'rgba(255,96,218,0.7)',borderColor:'#FF60DA',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#b30086',font:{weight:'bold'},formatter:v=>v.toFixed(2)+'%'}},{type:'line',label:'Tendencia',data:datosUPYDEuropeas,borderColor:'#FF60DA',backgroundColor:'transparent',fill:false,tension:0.3,pointRadius:4,pointBackgroundColor:'#FF60DA'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Porcentaje (%)',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= URAS =================
const datosURASEuropeas = [0.11];
const etiquetasURASEuropeas = ['1999'];
new Chart(document.getElementById('urasEuropeasChart').getContext('2d'),{data:{labels:etiquetasURASEuropeas,datasets:[{type:'bar',label:'%',data:datosURASEuropeas,backgroundColor:'rgba(73,186,233,0.7)',borderColor:'#49BAE9',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#1f6f8f',font:{weight:'bold'},formatter:v=>v.toFixed(2)+'%'}},{type:'line',label:'Tendencia',data:datosURASEuropeas,borderColor:'#49BAE9',backgroundColor:'transparent',fill:false,tension:0,pointRadius:4,pointBackgroundColor:'#49BAE9'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Porcentaje (%)',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= PAS =================
const datosPASEuropeas = [0.08,0.07];
const etiquetasPASEuropeas = ['1994','1999'];
new Chart(document.getElementById('pasEuropeasChart').getContext('2d'),{data:{labels:etiquetasPASEuropeas,datasets:[{type:'bar',label:'%',data:datosPASEuropeas,backgroundColor:'rgba(127,150,98,0.7)',borderColor:'#7F9662',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#556B3F',font:{weight:'bold'},formatter:v=>v.toFixed(2)+'%'}},{type:'line',label:'Tendencia',data:datosPASEuropeas,borderColor:'#7F9662',backgroundColor:'transparent',fill:false,tension:0,pointRadius:4,pointBackgroundColor:'#7F9662'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Porcentaje (%)',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= PA =================
const datosPAEuropeas = [0.96,1.86,0.76,0.32];
const etiquetasPAEuropeas = ['1987','1989','1994','2014'];
new Chart(document.getElementById('paEuropeasChart').getContext('2d'),{data:{labels:etiquetasPAEuropeas,datasets:[{type:'bar',label:'%',data:datosPAEuropeas,backgroundColor:'rgba(21,170,53,0.7)',borderColor:'#15AA35',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#0b5e1c',font:{weight:'bold'},formatter:v=>v.toFixed(2)+'%'}},{type:'line',label:'Tendencia',data:datosPAEuropeas,borderColor:'#15AA35',backgroundColor:'transparent',fill:false,tension:0.3,pointRadius:4,pointBackgroundColor:'#15AA35'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Porcentaje (%)',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= IP =================
const datosIPEuropeas = [1.35,1.83,1.42];
const etiquetasIPEuropeas = ['1987','1989','1999'];
new Chart(document.getElementById('ipEuropeasChart').getContext('2d'),{data:{labels:etiquetasIPEuropeas,datasets:[{type:'bar',label:'%',data:datosIPEuropeas,backgroundColor:'rgba(28,66,127,0.7)',borderColor:'#1c427f',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#0f2a50',font:{weight:'bold'},formatter:v=>v.toFixed(2)+'%'}},{type:'line',label:'Tendencia',data:datosIPEuropeas,borderColor:'#1c427f',backgroundColor:'transparent',fill:false,tension:0.3,pointRadius:4,pointBackgroundColor:'#1c427f'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Porcentaje (%)',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= BNG =================
const datosBNGEuropeas = [0.28,0.29,0.75,1.65,5.15,2.49,2.08];
const etiquetasBNGEuropeas = ['1987','1989','1994','1999','2004','2009','2014'];
new Chart(document.getElementById('bngEuropeasChart').getContext('2d'),{data:{labels:etiquetasBNGEuropeas,datasets:[{type:'bar',label:'%',data:datosBNGEuropeas,backgroundColor:'rgba(116,177,224,0.7)',borderColor:'#74b1e0',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#3b6f99',font:{weight:'bold'},formatter:v=>v.toFixed(2)+'%'}},{type:'line',label:'Tendencia',data:datosBNGEuropeas,borderColor:'#74b1e0',backgroundColor:'transparent',fill:false,tension:0.3,pointRadius:4,pointBackgroundColor:'#74b1e0'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Porcentaje (%)',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= GALEUSCA =================
const datosGALEUSCAEuropeas = [5.15];
const etiquetasGALEUSCAEuropeas = ['2004'];
new Chart(document.getElementById('galeuscaEuropeasChart').getContext('2d'),{data:{labels:etiquetasGALEUSCAEuropeas,datasets:[{type:'bar',label:'%',data:datosGALEUSCAEuropeas,backgroundColor:'rgba(201,159,0,0.7)',borderColor:'#c99f00',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#8B7500',font:{weight:'bold'},formatter:v=>v.toFixed(2)+'%'}},{type:'line',label:'Tendencia',data:datosGALEUSCAEuropeas,borderColor:'#c99f00',backgroundColor:'transparent',fill:false,tension:0,pointRadius:4,pointBackgroundColor:'#c99f00'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Porcentaje (%)',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= CUP =================
const datosCUPEuropeas = [0.05];
const etiquetasCUPEuropeas = ['2004'];
new Chart(document.getElementById('cupEuropeasChart').getContext('2d'),{data:{labels:etiquetasCUPEuropeas,datasets:[{type:'bar',label:'%',data:datosCUPEuropeas,backgroundColor:'rgba(1,1,1,0.7)',borderColor:'#010101',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#000000',font:{weight:'bold'},formatter:v=>v.toFixed(2)+'%'}},{type:'line',label:'Tendencia',data:datosCUPEuropeas,borderColor:'#010101',backgroundColor:'transparent',fill:false,tension:0,pointRadius:4,pointBackgroundColor:'#010101'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Porcentaje (%)',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= UPL =================
const datosUPLEuropeas = [0.16];
const etiquetasUPLEuropeas = ['1999'];
new Chart(document.getElementById('uplEuropeasChart').getContext('2d'),{data:{labels:etiquetasUPLEuropeas,datasets:[{type:'bar',label:'%',data:datosUPLEuropeas,backgroundColor:'rgba(185,19,103,0.7)',borderColor:'#B91367',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#7A0F45',font:{weight:'bold'},formatter:v=>v.toFixed(2)+'%'}},{type:'line',label:'Tendencia',data:datosUPLEuropeas,borderColor:'#B91367',backgroundColor:'transparent',fill:false,tension:0,pointRadius:4,pointBackgroundColor:'#B91367'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Porcentaje (%)',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});


// ===================================================================
// GRÁFICO GLOBAL — TODOS LOS PARTIDOS — EUROPEAS ESPAÑA
// Años: 1987 1989 1994 1999 2004 2009 2014 2019 2024
//        [0]  [1]  [2]  [3]  [4]  [5]  [6]  [7]  [8]
// ===================================================================
const etiquetasEuropeas = ['1987','1989','1994','1999','2004','2009','2014','2019','2024'];

const datosEuropeas = {
  'PP':       [24.65, 21.41, 40.12, 39.74, 41.21, 42.12, 26.09, 20.15, 34.21],
  'PSOE':     [39.06, 39.57, 30.79, 35.33, 43.46, 38.78, 23.01, 32.86, 30.19],
  'IU':       [ 5.25,  6.06, 13.44,  5.77,  4.72,  3.71, 10.03, 10.07,  4.67],
  'CDS':      [10.26,  7.15,  0.99,  0.18,  0.08,  0.06,  null,  null,  null],
  'JUNTS':    [ 4.43,  4.20,  4.66,  4.43,  5.15,  5.10,  5.42,  4.54,  2.52],
  'CEUS':     [ 1.18,  1.91,  2.79,  2.90,  5.15,  5.10,  5.42,  2.82,  1.63],
  'HB':       [ 1.87,  1.70,  0.97,  1.45,  null,  null,  null,  null,  null],
  'CEP':      [ 1.70,  1.51,  1.20,  null,  2.45,  2.49,  2.08,  null,  null],
  'PA':       [ 0.96,  1.86,  0.76,  null,  null,  null,  0.32,  null,  null],
  'IP':       [ 1.35,  1.83,  null,  1.42,  null,  null,  null,  null,  null],
  'BNG':      [ 0.28,  0.29,  0.75,  1.65,  5.15,  2.49,  2.08,  null,  null],
  'EU':       [ 0.28,  null,  0.07,  0.07,  null,  0.03,  0.06,  null,  null],
  'UV':       [ 0.84,  null,  null,  null,  null,  0.04,  null,  null,  null],
  'PAR':      [ 0.55,  null,  null,  null,  null,  null,  null,  null,  null],
  'PRC':      [ 0.08,  null,  null,  null,  null,  null,  null,  null,  null],
  'ARM':      [ null,  3.84,  0.44,  null,  null,  null,  null,  null,  null],
  'CN':       [ null,  1.91,  2.79,  2.90,  null,  null,  null,  null,  null],
  'PAS':      [ null,  null,  0.08,  0.07,  null,  null,  null,  null,  null],
  'HB99':     [ null,  null,  null,  1.45,  null,  null,  null,  null,  null],
  'GALEUSCA': [ null,  null,  null,  null,  5.15,  null,  null,  null,  null],
  'CUP':      [ null,  null,  null,  null,  0.05,  null,  null,  null,  null],
  'UPL':      [ null,  null,  null,  0.16,  null,  null,  null,  null,  null],
  'URAS':     [ null,  null,  null,  0.11,  null,  null,  null,  null,  null],
  'UPyD':     [ null,  null,  null,  null,  null,  2.85,  6.51,  null,  null],
  'VOX':      [ null,  null,  null,  null,  null,  null,  1.57,  6.21,  9.63],
  'Podemos':  [ null,  null,  null,  null,  null,  null,  7.98, 10.07,  3.30],
  'Cs':       [ null,  null,  null,  null,  null,  null,  3.16, 12.18,  0.70],
  'EDD':      [ null,  null,  null,  null,  null,  null,  4.01,  null,  null],
  'LPD':      [ null,  null,  null,  null,  null,  null,  2.08,  null,  null],
  'FAC':      [ null,  null,  null,  null,  null,  null,  0.21,  0.06,  null],
  'CPE':      [ null,  null,  null,  null,  null,  null,  1.92,  1.32,  null],
  'AR':       [ null,  null,  null,  null,  null,  null,  null,  5.58,  4.91],
  'SUMAR':    [ null,  null,  null,  null,  null,  null,  null,  null,  4.67],
  'SALF':     [ null,  null,  null,  null,  null,  null,  null,  null,  4.58],
  'ARALAR':     [ null,  null,  null,  null,  0.13,  null,  null,  null,  null],
};

const coloresEuropeas = {
  'PP':       '#0000FF',
  'PSOE':     '#FF0000',
  'IU':       '#B22222',
  'CDS':      '#00BFFF',
  'JUNTS':    '#40E0D0',
  'CEUS':     '#280080',
  'HB':       '#01b59c',
  'CEP':      '#298242',
  'PA':       '#15AA35',
  'IP':       '#1c427f',
  'BNG':      '#74b1e0',
  'EU':       '#1c2b16',
  'UV':       '#27345a',
  'PAR':      '#c99f00',
  'PRC':      '#8d9f03',
  'ARM':      '#424a6e',
  'CN':       '#a07800',
  'PAS':      '#7F9662',
  'HB99':     '#009e8a',
  'GALEUSCA': '#d4a800',
  'CUP':      '#222222',
  'UPL':      '#B91367',
  'URAS':     '#49BAE9',
  'UPyD':     '#FF60DA',
  'VOX':      '#009639',
  'Podemos':  '#800080',
  'Cs':       '#FF8C00',
  'EDD':      '#b8860b',
  'LPD':      '#a58b59',
  'FAC':      '#014586',
  'CPE':      '#33b65a',
  'AR':       '#c99f00',
  'SUMAR':    '#FF69B4',
  'SALF':     '#755a49',
  'ARALAR':   '#000000'
};

const datasetsEuropeas = Object.keys(datosEuropeas).map(partido => ({
  type: 'line',
  label: partido,
  data: datosEuropeas[partido],
  borderColor: coloresEuropeas[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresEuropeas[partido],
  datalabels: {
    display: true,
    color: coloresEuropeas[partido],
    font: { weight: 'bold', size: 10 },
    formatter: v => v != null ? v.toFixed(2) + '%' : ''
  }
}));

const ctxEuropeas = document.getElementById('europeasChart').getContext('2d');
new Chart(ctxEuropeas, {
  data: { labels: etiquetasEuropeas, datasets: datasetsEuropeas },
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

