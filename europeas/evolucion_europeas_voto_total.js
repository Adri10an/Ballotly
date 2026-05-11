

// ================= PP =================
const datosPPEuropeas = [4747283,3395015,7453900,8410993,6393192,6670377,4098339,4519205,5996627];
const etiquetasPPEuropeas = ['1987','1989','1994','1999','2004','2009','2014','2019','2024'];
const partidosPPEuropeas = ['AP','PP','PP','PP','PP','PP','PP','PP','PP'];
new Chart(document.getElementById('ppEuropeasChart').getContext('2d'),{data:{labels:etiquetasPPEuropeas,datasets:[{type:'bar',label:'Votos totales',data:datosPPEuropeas,backgroundColor:'rgba(0,0,255,0.7)',borderColor:'#0000FF',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#00008B',font:{weight:'bold'},formatter:v=>v.toLocaleString()}},{type:'line',label:'Tendencia',data:datosPPEuropeas,borderColor:'#0000FF',backgroundColor:'transparent',fill:false,tension:0.3,pointRadius:4,pointBackgroundColor:'#0000FF'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Votos',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[{id:'etPP',afterDatasetsDraw(c){const{ctx,scales:{x,y}}=c;datosPPEuropeas.forEach((_,i)=>{const xp=x.getPixelForValue(i),yp=y.getPixelForValue(0)+30;c.ctx.save();c.ctx.fillStyle='#00008B';c.ctx.font='12px Segoe UI';c.ctx.textAlign='center';c.ctx.fillText(partidosPPEuropeas[i],xp,yp);c.ctx.restore();});}},ChartDataLabels]});

// ================= PSOE =================
const datosPSOEEuropeas = [7522706,6275552,5719707,7477823,6741112,6141784,3614232,7369789,5291102];
const etiquetasPSOEEuropeas = ['1987','1989','1994','1999','2004','2009','2014','2019','2024'];
new Chart(document.getElementById('psoeEuropeasChart').getContext('2d'),{data:{labels:etiquetasPSOEEuropeas,datasets:[{type:'bar',label:'Votos totales',data:datosPSOEEuropeas,backgroundColor:'rgba(255,0,0,0.7)',borderColor:'#FF0000',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#B22222',font:{weight:'bold'},formatter:v=>v.toLocaleString()}},{type:'line',label:'Tendencia',data:datosPSOEEuropeas,borderColor:'#FF0000',backgroundColor:'transparent',fill:false,tension:0.3,pointRadius:4,pointBackgroundColor:'#FF0000'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Votos',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= VOX =================
const datosVOXEuropeas = [246833,1393684,1688255];
const etiquetasVOXEuropeas = ['2014','2019','2024'];
new Chart(document.getElementById('voxEuropeasChart').getContext('2d'),{data:{labels:etiquetasVOXEuropeas,datasets:[{type:'bar',label:'Votos totales',data:datosVOXEuropeas,backgroundColor:'rgba(0,150,57,0.7)',borderColor:'#009639',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#006400',font:{weight:'bold'},formatter:v=>v.toLocaleString()}},{type:'line',label:'Tendencia',data:datosVOXEuropeas,borderColor:'#009639',backgroundColor:'transparent',fill:false,tension:0.3,pointRadius:4,pointBackgroundColor:'#009639'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Votos',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= AR =================
const datosAREuropeas = [1252139,860660];
const etiquetasAREuropeas = ['2019','2024'];
new Chart(document.getElementById('arEuropeasChart').getContext('2d'),{data:{labels:etiquetasAREuropeas,datasets:[{type:'bar',label:'Votos totales',data:datosAREuropeas,backgroundColor:'rgba(201,159,0,0.7)',borderColor:'#c99f00',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#8B7500',font:{weight:'bold'},formatter:v=>v.toLocaleString()}},{type:'line',label:'Tendencia',data:datosAREuropeas,borderColor:'#c99f00',backgroundColor:'transparent',fill:false,tension:0.3,pointRadius:4,pointBackgroundColor:'#c99f00'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Votos',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= SUMAR =================
const datosSUMAREuropeas = [818015];
const etiquetasSUMAREuropeas = ['2024'];
new Chart(document.getElementById('sumarEuropeasChart').getContext('2d'),{data:{labels:etiquetasSUMAREuropeas,datasets:[{type:'bar',label:'Votos totales',data:datosSUMAREuropeas,backgroundColor:'rgba(255,105,180,0.7)',borderColor:'#FF69B4',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#b3006e',font:{weight:'bold'},formatter:v=>v.toLocaleString()}},{type:'line',label:'Tendencia',data:datosSUMAREuropeas,borderColor:'#FF69B4',backgroundColor:'transparent',fill:false,tension:0,pointRadius:4,pointBackgroundColor:'#FF69B4'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Votos',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= SALF =================
const datosSALFEuropeas = [803545];
const etiquetasSALFEuropeas = ['2024'];
new Chart(document.getElementById('salfEuropeasChart').getContext('2d'),{data:{labels:etiquetasSALFEuropeas,datasets:[{type:'bar',label:'Votos totales',data:datosSALFEuropeas,backgroundColor:'rgba(117,90,73,0.7)',borderColor:'#755a49',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#4d3a2f',font:{weight:'bold'},formatter:v=>v.toLocaleString()}},{type:'line',label:'Tendencia',data:datosSALFEuropeas,borderColor:'#755a49',backgroundColor:'transparent',fill:false,tension:0,pointRadius:4,pointBackgroundColor:'#755a49'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Votos',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= PODEMOS =================
const datosPODEMOSEuropeas = [1253837,2258857,578007];
const etiquetasPODEMOSEuropeas = ['2014','2019','2024'];
new Chart(document.getElementById('podemosEuropeasChart').getContext('2d'),{data:{labels:etiquetasPODEMOSEuropeas,datasets:[{type:'bar',label:'Votos totales',data:datosPODEMOSEuropeas,backgroundColor:'rgba(128,0,128,0.7)',borderColor:'#800080',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#5a005a',font:{weight:'bold'},formatter:v=>v.toLocaleString()}},{type:'line',label:'Tendencia',data:datosPODEMOSEuropeas,borderColor:'#800080',backgroundColor:'transparent',fill:false,tension:0.3,pointRadius:4,pointBackgroundColor:'#800080'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Votos',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= JUNTS =================
const datosJUNTSEuropeas = [853603,666602,865913,937687,798816,808246,851971,1018435,442297];
const etiquetasJUNTSEuropeas = ['1987','1989','1994','1999','2004','2009','2014','2019','2024'];
new Chart(document.getElementById('juntsEuropeasChart').getContext('2d'),{data:{labels:etiquetasJUNTSEuropeas,datasets:[{type:'bar',label:'Votos totales',data:datosJUNTSEuropeas,backgroundColor:'rgba(64,224,208,0.7)',borderColor:'#40E0D0',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#1f8f8a',font:{weight:'bold'},formatter:v=>v.toLocaleString()}},{type:'line',label:'Tendencia',data:datosJUNTSEuropeas,borderColor:'#40E0D0',backgroundColor:'transparent',fill:false,tension:0.3,pointRadius:4,pointBackgroundColor:'#40E0D0'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Votos',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= CEUS =================
const datosCEUSEuropeas = [226570,303038,518532,613968,798816,808246,851971,633090,284888];
const etiquetasCEUSEuropeas = ['1987','1989','1994','1999','2004','2009','2014','2019','2024'];
new Chart(document.getElementById('ceusEuropeasChart').getContext('2d'),{data:{labels:etiquetasCEUSEuropeas,datasets:[{type:'bar',label:'Votos totales',data:datosCEUSEuropeas,backgroundColor:'rgba(40,0,128,0.7)',borderColor:'#280080',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#1a0055',font:{weight:'bold'},formatter:v=>v.toLocaleString()}},{type:'line',label:'Tendencia',data:datosCEUSEuropeas,borderColor:'#280080',backgroundColor:'transparent',fill:false,tension:0.3,pointRadius:4,pointBackgroundColor:'#280080'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Votos',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= Cs =================
const datosCSEuropeas = [497146,2731825,122292];
const etiquetasCSEuropeas = ['2014','2019','2024'];
new Chart(document.getElementById('ciudadanosEuropeasChart').getContext('2d'),{data:{labels:etiquetasCSEuropeas,datasets:[{type:'bar',label:'Votos totales',data:datosCSEuropeas,backgroundColor:'rgba(255,140,0,0.7)',borderColor:'#FF8C00',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#a85a00',font:{weight:'bold'},formatter:v=>v.toLocaleString()}},{type:'line',label:'Tendencia',data:datosCSEuropeas,borderColor:'#FF8C00',backgroundColor:'transparent',fill:false,tension:0.3,pointRadius:4,pointBackgroundColor:'#FF8C00'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Votos',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= CEP =================
const datosCEPEuropeas = [326911,238909,239339,380709,394938,326464];
const etiquetasCEPEuropeas = ['1987','1989','1994','2004','2009','2014'];
new Chart(document.getElementById('cepEuropeasChart').getContext('2d'),{data:{labels:etiquetasCEPEuropeas,datasets:[{type:'bar',label:'Votos totales',data:datosCEPEuropeas,backgroundColor:'rgba(41,130,66,0.7)',borderColor:'#298242',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#1f5c30',font:{weight:'bold'},formatter:v=>v.toLocaleString()}},{type:'line',label:'Tendencia',data:datosCEPEuropeas,borderColor:'#298242',backgroundColor:'transparent',fill:false,tension:0.3,pointRadius:4,pointBackgroundColor:'#298242'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Votos',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= CPE =================
const datosCPEEuropeas = [302266,296091];
const etiquetasCPEEuropeas = ['2014','2019'];
new Chart(document.getElementById('cpeEuropeasChart').getContext('2d'),{data:{labels:etiquetasCPEEuropeas,datasets:[{type:'bar',label:'Votos totales',data:datosCPEEuropeas,backgroundColor:'rgba(51,182,90,0.7)',borderColor:'#33b65a',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#1f6b33',font:{weight:'bold'},formatter:v=>v.toLocaleString()}},{type:'line',label:'Tendencia',data:datosCPEEuropeas,borderColor:'#33b65a',backgroundColor:'transparent',fill:false,tension:0,pointRadius:4,pointBackgroundColor:'#33b65a'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Votos',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= HB =================
const datosHBEuropeas = [360952,269094,180324,306923];
const etiquetasHBEuropeas = ['1987','1989','1994','1999'];
new Chart(document.getElementById('hbEuropeasChart').getContext('2d'),{data:{labels:etiquetasHBEuropeas,datasets:[{type:'bar',label:'Votos totales',data:datosHBEuropeas,backgroundColor:'rgba(1,181,156,0.7)',borderColor:'#01b59c',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#007a69',font:{weight:'bold'},formatter:v=>v.toLocaleString()}},{type:'line',label:'Tendencia',data:datosHBEuropeas,borderColor:'#01b59c',backgroundColor:'transparent',fill:false,tension:0.3,pointRadius:4,pointBackgroundColor:'#01b59c'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Votos',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= ARM =================
const datosARMEuropeas = [608560,82410];
const etiquetasARMEuropeas = ['1989','1994'];
new Chart(document.getElementById('armEuropeasChart').getContext('2d'),{data:{labels:etiquetasARMEuropeas,datasets:[{type:'bar',label:'Votos totales',data:datosARMEuropeas,backgroundColor:'rgba(66,74,110,0.7)',borderColor:'#424a6e',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#2c3147',font:{weight:'bold'},formatter:v=>v.toLocaleString()}},{type:'line',label:'Tendencia',data:datosARMEuropeas,borderColor:'#424a6e',backgroundColor:'transparent',fill:false,tension:0.3,pointRadius:4,pointBackgroundColor:'#424a6e'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Votos',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= CN =================
const datosCNEuropeas = [303038,518532,613968];
const etiquetasCNEuropeas = ['1989','1994','1999'];
new Chart(document.getElementById('cnEuropeasChart').getContext('2d'),{data:{labels:etiquetasCNEuropeas,datasets:[{type:'bar',label:'Votos totales',data:datosCNEuropeas,backgroundColor:'rgba(201,159,0,0.7)',borderColor:'#c99f00',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#8B7500',font:{weight:'bold'},formatter:v=>v.toLocaleString()}},{type:'line',label:'Tendencia',data:datosCNEuropeas,borderColor:'#c99f00',backgroundColor:'transparent',fill:false,tension:0.3,pointRadius:4,pointBackgroundColor:'#c99f00'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Votos',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= EDD =================
const datosEDDEuropeas = [630072];
const etiquetasEDDEuropeas = ['2014'];
new Chart(document.getElementById('eddEuropeasChart').getContext('2d'),{data:{labels:etiquetasEDDEuropeas,datasets:[{type:'bar',label:'Votos totales',data:datosEDDEuropeas,backgroundColor:'rgba(201,159,0,0.7)',borderColor:'#c99f00',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#8B7500',font:{weight:'bold'},formatter:v=>v.toLocaleString()}},{type:'line',label:'Tendencia',data:datosEDDEuropeas,borderColor:'#c99f00',backgroundColor:'transparent',fill:false,tension:0,pointRadius:4,pointBackgroundColor:'#c99f00'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Votos',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= FAC =================
const datosFACEuropeas = [32962,14175];
const etiquetasFACEuropeas = ['2014','2019'];
new Chart(document.getElementById('faEuropeasChart').getContext('2d'),{data:{labels:etiquetasFACEuropeas,datasets:[{type:'bar',label:'Votos totales',data:datosFACEuropeas,backgroundColor:'rgba(1,69,134,0.7)',borderColor:'#014586',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#012a55',font:{weight:'bold'},formatter:v=>v.toLocaleString()}},{type:'line',label:'Tendencia',data:datosFACEuropeas,borderColor:'#014586',backgroundColor:'transparent',fill:false,tension:0,pointRadius:4,pointBackgroundColor:'#014586'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Votos',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= LPD =================
const datosLPDEuropeas = [326464];
const etiquetasLPDEuropeas = ['2014'];
new Chart(document.getElementById('lpdEuropeasChart').getContext('2d'),{data:{labels:etiquetasLPDEuropeas,datasets:[{type:'bar',label:'Votos totales',data:datosLPDEuropeas,backgroundColor:'rgba(165,139,89,0.7)',borderColor:'#a58b59',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#6b5636',font:{weight:'bold'},formatter:v=>v.toLocaleString()}},{type:'line',label:'Tendencia',data:datosLPDEuropeas,borderColor:'#a58b59',backgroundColor:'transparent',fill:false,tension:0,pointRadius:4,pointBackgroundColor:'#a58b59'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Votos',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= EU =================
const datosEUEuropeas = [39369,13580,15716,5007,8821];
const etiquetasEUEuropeas = ['1987','1994','1999','2009','2014'];
new Chart(document.getElementById('euEuropeasChart').getContext('2d'),{data:{labels:etiquetasEUEuropeas,datasets:[{type:'bar',label:'Votos totales',data:datosEUEuropeas,backgroundColor:'rgba(28,43,22,0.7)',borderColor:'#1c2b16',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#0f160c',font:{weight:'bold'},formatter:v=>v.toLocaleString()}},{type:'line',label:'Tendencia',data:datosEUEuropeas,borderColor:'#1c2b16',backgroundColor:'transparent',fill:false,tension:0.3,pointRadius:4,pointBackgroundColor:'#1c2b16'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Votos',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= UV =================
const datosUVEuropeas = [162128,6072];
const etiquetasUVEuropeas = ['1987','2009'];
new Chart(document.getElementById('uvEuropeasChart').getContext('2d'),{data:{labels:etiquetasUVEuropeas,datasets:[{type:'bar',label:'Votos totales',data:datosUVEuropeas,backgroundColor:'rgba(39,52,90,0.7)',borderColor:'#27345a',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#1a2236',font:{weight:'bold'},formatter:v=>v.toLocaleString()}},{type:'line',label:'Tendencia',data:datosUVEuropeas,borderColor:'#27345a',backgroundColor:'transparent',fill:false,tension:0,pointRadius:4,pointBackgroundColor:'#27345a'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Votos',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= PAR =================
const datosPAREuropeas = [105865];
const etiquetasPAREuropeas = ['1987'];
new Chart(document.getElementById('parEuropeasChart').getContext('2d'),{data:{labels:etiquetasPAREuropeas,datasets:[{type:'bar',label:'Votos totales',data:datosPAREuropeas,backgroundColor:'rgba(201,159,0,0.7)',borderColor:'#c99f00',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#8B7500',font:{weight:'bold'},formatter:v=>v.toLocaleString()}},{type:'line',label:'Tendencia',data:datosPAREuropeas,borderColor:'#c99f00',backgroundColor:'transparent',fill:false,tension:0,pointRadius:4,pointBackgroundColor:'#c99f00'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Votos',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= PRC =================
const datosPRCEuropeas = [14553];
const etiquetasPRCEuropeas = ['1987'];
new Chart(document.getElementById('prcEuropeasChart').getContext('2d'),{data:{labels:etiquetasPRCEuropeas,datasets:[{type:'bar',label:'Votos totales',data:datosPRCEuropeas,backgroundColor:'rgba(141,159,3,0.7)',borderColor:'#8d9f03',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#5f6b02',font:{weight:'bold'},formatter:v=>v.toLocaleString()}},{type:'line',label:'Tendencia',data:datosPRCEuropeas,borderColor:'#8d9f03',backgroundColor:'transparent',fill:false,tension:0,pointRadius:4,pointBackgroundColor:'#8d9f03'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Votos',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= CDS =================
const datosCDSEuropeas = [1976093,1133429,183418,38911,11820,10144];
const etiquetasCDSEuropeas = ['1987','1989','1994','1999','2004','2009'];
new Chart(document.getElementById('cdsEuropeasChart').getContext('2d'),{data:{labels:etiquetasCDSEuropeas,datasets:[{type:'bar',label:'Votos totales',data:datosCDSEuropeas,backgroundColor:'rgba(0,191,255,0.7)',borderColor:'#00BFFF',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#007aa3',font:{weight:'bold'},formatter:v=>v.toLocaleString()}},{type:'line',label:'Tendencia',data:datosCDSEuropeas,borderColor:'#00BFFF',backgroundColor:'transparent',fill:false,tension:0.3,pointRadius:4,pointBackgroundColor:'#00BFFF'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Votos',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= IU =================
const datosIUEuropeas = [1011830,961742,2497671,1221566,643136,588248,1575308,2258857,818015];
const etiquetasIUEuropeas = ['1987','1989','1994','1999','2004','2009','2014','2019','2024'];
new Chart(document.getElementById('iuEuropeasChart').getContext('2d'),{data:{labels:etiquetasIUEuropeas,datasets:[{type:'bar',label:'Votos totales',data:datosIUEuropeas,backgroundColor:'rgba(178,34,34,0.7)',borderColor:'#B22222',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#7a1717',font:{weight:'bold'},formatter:v=>v.toLocaleString()}},{type:'line',label:'Tendencia',data:datosIUEuropeas,borderColor:'#B22222',backgroundColor:'transparent',fill:false,tension:0.3,pointRadius:4,pointBackgroundColor:'#B22222'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Votos',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= UPyD =================
const datosUPYDEuropeas = [451866,1022232];
const etiquetasUPYDEuropeas = ['2009','2014'];
new Chart(document.getElementById('upydEuropeasChart').getContext('2d'),{data:{labels:etiquetasUPYDEuropeas,datasets:[{type:'bar',label:'Votos totales',data:datosUPYDEuropeas,backgroundColor:'rgba(255,96,218,0.7)',borderColor:'#FF60DA',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#a30086',font:{weight:'bold'},formatter:v=>v.toLocaleString()}},{type:'line',label:'Tendencia',data:datosUPYDEuropeas,borderColor:'#FF60DA',backgroundColor:'transparent',fill:false,tension:0,pointRadius:4,pointBackgroundColor:'#FF60DA'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Votos',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= URAS =================
const datosURASEuropeas = [22400];
const etiquetasURASEuropeas = ['1999'];
new Chart(document.getElementById('urasEuropeasChart').getContext('2d'),{data:{labels:etiquetasURASEuropeas,datasets:[{type:'bar',label:'Votos totales',data:datosURASEuropeas,backgroundColor:'rgba(73,186,233,0.7)',borderColor:'#49BAE9',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#1d6f8f',font:{weight:'bold'},formatter:v=>v.toLocaleString()}},{type:'line',label:'Tendencia',data:datosURASEuropeas,borderColor:'#49BAE9',backgroundColor:'transparent',fill:false,tension:0,pointRadius:4,pointBackgroundColor:'#49BAE9'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Votos',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= PAS =================
const datosPASEuropeas = [14846,15299];
const etiquetasPASEuropeas = ['1994','1999'];
new Chart(document.getElementById('pasEuropeasChart').getContext('2d'),{data:{labels:etiquetasPASEuropeas,datasets:[{type:'bar',label:'Votos totales',data:datosPASEuropeas,backgroundColor:'rgba(127,150,98,0.7)',borderColor:'#7F9662',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#4f5f3d',font:{weight:'bold'},formatter:v=>v.toLocaleString()}},{type:'line',label:'Tendencia',data:datosPASEuropeas,borderColor:'#7F9662',backgroundColor:'transparent',fill:false,tension:0,pointRadius:4,pointBackgroundColor:'#7F9662'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Votos',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= PA =================
const datosPAEuropeas = [185550,295047,140445,49523];
const etiquetasPAEuropeas = ['1987','1989','1994','2014'];
new Chart(document.getElementById('paEuropeasChart').getContext('2d'),{data:{labels:etiquetasPAEuropeas,datasets:[{type:'bar',label:'Votos totales',data:datosPAEuropeas,backgroundColor:'rgba(21,170,53,0.7)',borderColor:'#15AA35',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#0f6e22',font:{weight:'bold'},formatter:v=>v.toLocaleString()}},{type:'line',label:'Tendencia',data:datosPAEuropeas,borderColor:'#15AA35',backgroundColor:'transparent',fill:false,tension:0.3,pointRadius:4,pointBackgroundColor:'#15AA35'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Votos',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= IP =================
const datosIPEuropeas = [261328,290286,300874];
const etiquetasIPEuropeas = ['1987','1989','1999'];
new Chart(document.getElementById('ipEuropeasChart').getContext('2d'),{data:{labels:etiquetasIPEuropeas,datasets:[{type:'bar',label:'Votos totales',data:datosIPEuropeas,backgroundColor:'rgba(28,66,127,0.7)',borderColor:'#1c427f',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#0f2b52',font:{weight:'bold'},formatter:v=>v.toLocaleString()}},{type:'line',label:'Tendencia',data:datosIPEuropeas,borderColor:'#1c427f',backgroundColor:'transparent',fill:false,tension:0.3,pointRadius:4,pointBackgroundColor:'#1c427f'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Votos',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= BNG =================
const datosBNGEuropeas = [53116,46052,139221,349079,798816,394938,326464];
const etiquetasBNGEuropeas = ['1987','1989','1994','1999','2004','2009','2014'];
new Chart(document.getElementById('bngEuropeasChart').getContext('2d'),{data:{labels:etiquetasBNGEuropeas,datasets:[{type:'bar',label:'Votos totales',data:datosBNGEuropeas,backgroundColor:'rgba(116,177,224,0.7)',borderColor:'#74b1e0',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#2b5f86',font:{weight:'bold'},formatter:v=>v.toLocaleString()}},{type:'line',label:'Tendencia',data:datosBNGEuropeas,borderColor:'#74b1e0',backgroundColor:'transparent',fill:false,tension:0.3,pointRadius:4,pointBackgroundColor:'#74b1e0'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Votos',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= GALEUSCA =================
const datosGALEUSCAEuropeas = [798816];
const etiquetasGALEUSCAEuropeas = ['2004'];
new Chart(document.getElementById('galeuscaEuropeasChart').getContext('2d'),{data:{labels:etiquetasGALEUSCAEuropeas,datasets:[{type:'bar',label:'Votos totales',data:datosGALEUSCAEuropeas,backgroundColor:'rgba(201,159,0,0.7)',borderColor:'#c99f00',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#8B7500',font:{weight:'bold'},formatter:v=>v.toLocaleString()}},{type:'line',label:'Tendencia',data:datosGALEUSCAEuropeas,borderColor:'#c99f00',backgroundColor:'transparent',fill:false,tension:0,pointRadius:4,pointBackgroundColor:'#c99f00'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Votos',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= CUP =================
const datosCUPEuropeas = [8180];
const etiquetasCUPEuropeas = ['2004'];
new Chart(document.getElementById('cupEuropeasChart').getContext('2d'),{data:{labels:etiquetasCUPEuropeas,datasets:[{type:'bar',label:'Votos totales',data:datosCUPEuropeas,backgroundColor:'rgba(1,1,1,0.7)',borderColor:'#010101',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#000000',font:{weight:'bold'},formatter:v=>v.toLocaleString()}},{type:'line',label:'Tendencia',data:datosCUPEuropeas,borderColor:'#010101',backgroundColor:'transparent',fill:false,tension:0,pointRadius:4,pointBackgroundColor:'#010101'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Votos',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= UPL =================
const datosUPLEuropeas = [33604];
const etiquetasUPLEuropeas = ['1999'];
new Chart(document.getElementById('uplEuropeasChart').getContext('2d'),{data:{labels:etiquetasUPLEuropeas,datasets:[{type:'bar',label:'Votos totales',data:datosUPLEuropeas,backgroundColor:'rgba(185,19,103,0.7)',borderColor:'#B91367',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#7a0f45',font:{weight:'bold'},formatter:v=>v.toLocaleString()}},{type:'line',label:'Tendencia',data:datosUPLEuropeas,borderColor:'#B91367',backgroundColor:'transparent',fill:false,tension:0,pointRadius:4,pointBackgroundColor:'#B91367'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Votos',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});

// ================= ARALAR =================
const datosAralarEuropeas = [19993];
const etiquetasAralarEuropeas = ['2004'];
new Chart(document.getElementById('aralarEuropeasChart').getContext('2d'),{data:{labels:etiquetasAralarEuropeas,datasets:[{type:'bar',label:'Votos totales',data:datosAralarEuropeas,backgroundColor:'rgba(0,0,0,0.7)',borderColor:'#000000',borderWidth:1,datalabels:{anchor:'end',align:'top',color:'#000000',font:{weight:'bold'},formatter:v=>v.toLocaleString()}},{type:'line',label:'Tendencia',data:datosAralarEuropeas,borderColor:'#000000',backgroundColor:'transparent',fill:false,tension:0,pointRadius:4,pointBackgroundColor:'#000000'}]},options:{responsive:true,animation:{duration:1500,easing:'easeOutBounce'},plugins:{legend:{position:'top',labels:{color:'#333'}},datalabels:{display:true}},scales:{y:{beginAtZero:true,title:{display:true,text:'Votos',color:'#333'},ticks:{color:'#333'}},x:{title:{display:true,text:'Año',color:'#333'},ticks:{color:'#333'}}}},plugins:[ChartDataLabels]});


// ===================================================================
// GRÁFICO GLOBAL — TODOS LOS PARTIDOS — EUROPEAS ESPAÑA — VOTOS TOTALES
// Años: 1987 1989 1994 1999 2004 2009 2014 2019 2024
//        [0]  [1]  [2]  [3]  [4]  [5]  [6]  [7]  [8]
// ===================================================================
const etiquetasEuropeas = ['1987','1989','1994','1999','2004','2009','2014','2019','2024'];

const datosEuropeas = {
  'PP':        [4747283, 3395015, 7453900, 8410993, 6393192, 6670377, 4098339, 4519205, 5996627],
  'PSOE':      [7522706, 6275552, 5719707, 7477823, 6741112, 6141784, 3614232, 7369789, 5291102],
  'IU':        [1011830,  961742, 2497671, 1221566,  643136,  588248, 1575308, 2258857,  818015],
  'CDS':       [1976093, 1133429,  183418,   38911,   11820,   10144,    null,    null,    null],
  'JUNTS':     [ 853603,  666602,  865913,  937687,  798816,  808246,  851971, 1018435,  442297],
  'CEUS':      [ 226570,  303038,  518532,  613968,  798816,  808246,  851971,  633090,  284888],
  'HB':        [ 360952,  269094,  180324,  306923,    null,    null,    null,    null,    null],
  'CEP':       [ 326911,  238909,  239339,    null,  380709,  394938,  326464,    null,    null],
  'PA':        [ 185550,  295047,  140445,    null,    null,    null,   49523,    null,    null],
  'IP':        [ 261328,  290286,    null,  300874,    null,    null,    null,    null,    null],
  'BNG':       [  53116,   46052,  139221,  349079,  798816,  394938,  326464,    null,    null],
  'EU':        [  39369,    null,   13580,   15716,    null,    5007,    8821,    null,    null],
  'UV':        [ 162128,    null,    null,    null,    null,    6072,    null,    null,    null],
  'PAR':       [ 105865,    null,    null,    null,    null,    null,    null,    null,    null],
  'PRC':       [  14553,    null,    null,    null,    null,    null,    null,    null,    null],
  'ARM':       [   null,  608560,   82410,    null,    null,    null,    null,    null,    null],
  'CN':        [   null,  303038,  518532,  613968,    null,    null,    null,    null,    null],
  'PAS':       [   null,    null,   14846,   15299,    null,    null,    null,    null,    null],
  'ARALAR':    [   null,    null,    null,    null,   19993,    null,    null,    null,    null],
  'GALEUSCA':  [   null,    null,    null,    null,  798816,    null,    null,    null,    null],
  'CUP':       [   null,    null,    null,    null,    8180,    null,    null,    null,    null],
  'UPL':       [   null,    null,    null,   33604,    null,    null,    null,    null,    null],
  'URAS':      [   null,    null,    null,   22400,    null,    null,    null,    null,    null],
  'UPyD':      [   null,    null,    null,    null,    null,  451866, 1022232,    null,    null],
  'VOX':       [   null,    null,    null,    null,    null,    null,  246833, 1393684, 1688255],
  'Podemos':   [   null,    null,    null,    null,    null,    null, 1253837, 2258857,  578007],
  'Cs':        [   null,    null,    null,    null,    null,    null,  497146, 2731825,  122292],
  'EDD':       [   null,    null,    null,    null,    null,    null,  630072,    null,    null],
  'LPD':       [   null,    null,    null,    null,    null,    null,  326464,    null,    null],
  'FAC':       [   null,    null,    null,    null,    null,    null,   32962,   14175,    null],
  'CPE':       [   null,    null,    null,    null,    null,    null,  302266,  296091,    null],
  'AR':        [   null,    null,    null,    null,    null,    null,    null, 1252139,  860660],
  'SUMAR':     [   null,    null,    null,    null,    null,    null,    null,    null,  818015],
  'SALF':      [   null,    null,    null,    null,    null,    null,    null,    null,  803545]
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
  'ARALAR':   '#333333',
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
  'SALF':     '#755a49'
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
    formatter: v => v != null ? v.toLocaleString() : ''
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
      y: { beginAtZero: true, title: { display: true, text: 'Votos totales', color: '#333' }, ticks: { color: '#333', callback: v => v.toLocaleString() } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [ChartDataLabels]
});

