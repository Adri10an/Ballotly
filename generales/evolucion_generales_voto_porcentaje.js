

// Helper para crear gráficos individuales (bar + line)
function crearGraficoIndividual(canvasId, labels, datos, nombrePartido, colorPrincipal, colorOscuro) {
  const ctx = document.getElementById(canvasId).getContext('2d');
  new Chart(ctx, {
    data: {
      labels: labels,
      datasets: [
        {
          type: 'bar',
          label: 'Porcentaje de voto (%)',
          data: datos,
          backgroundColor: colorPrincipal,
          borderColor: colorOscuro,
          borderWidth: 1,
          datalabels: {
            anchor: 'end', align: 'top', color: colorOscuro,
            font: { weight: 'bold' },
            formatter: (v) => v.toFixed(2) + '%'
          }
        },
        {
          type: 'line',
          label: 'Tendencia',
          data: datos,
          borderColor: colorOscuro,
          backgroundColor: 'transparent',
          fill: false, tension: 0.3, pointRadius: 4,
          pointBackgroundColor: colorOscuro,
          datalabels: { display: false }
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
        id: 'etiquetaPartido_' + canvasId,
        afterDatasetsDraw(chart) {
          const { ctx, scales: { x, y } } = chart;
          datos.forEach((valor, i) => {
            const xPos = x.getPixelForValue(i);
            const yPos = y.getPixelForValue(0) + 30;
            ctx.save();
            ctx.fillStyle = colorOscuro;
            ctx.font = '12px Segoe UI';
            ctx.textAlign = 'center';
            ctx.fillText(nombrePartido[i] || nombrePartido, xPos, yPos);
            ctx.restore();
          });
        }
      },
      ChartDataLabels
    ]
  });
}

// ================= PP =================
crearGraficoIndividual('ppGeneralesChart',
  ['1977','1982','1986','1989','1993','1996','2000','2004','2008','2011','2015','2016','2019A','2019N','2023'],
  [8.21, 26.36, 25.97, 25.79, 34.76, 38.79, 44.52, 37.71, 39.94, 44.63, 28.72, 33.03, 16.70, 20.99, 33.06],
  ['AP','AP','AP','PP','PP','PP','PP','PP','PP','PP','PP','PP','PP','PP','PP'],
  'rgba(0,0,255,0.7)', '#00008B'
);

// ================= PSOE =================
crearGraficoIndividual('psoeGeneralesChart',
  ['1977','1979','1982','1986','1989','1993','1996','2000','2004','2008','2011','2015','2016','2019A','2019N','2023'],
  [29.32, 30.40, 48.11, 44.06, 39.60, 38.78, 37.63, 34.16, 42.59, 43.87, 28.76, 22.01, 22.66, 28.68, 28.25, 31.68],
  'PSOE', 'rgba(255,0,0,0.7)', '#B22222'
);

// ================= VOX =================
crearGraficoIndividual('voxGeneralesChart',
  ['2015','2016','2019A','2019N','2023'],
  [0.23, 0.20, 10.26, 15.21, 12.38],
  'VOX', 'rgba(0,150,57,0.7)', '#006400'
);

// ================= SUMAR =================
crearGraficoIndividual('sumarGeneralesChart',
  ['2023'], [12.33],
  'SUMAR', 'rgba(255,105,180,0.7)', '#C2185B'
);

// ================= ERC =================
crearGraficoIndividual('ercGeneralesChart',
  ['1977','1979','1982','1986','1989','1993','1996','2000','2004','2008','2011','2015','2016','2019A','2019N','2023'],
  [0.79, 0.69, 0.66, 0.42, 0.41, 0.80, 0.67, 0.84, 2.52, 1.16, 1.05, 2.39, 2.63, 3.89, 3.64, 1.89],
  'ERC', 'rgba(201,159,0,0.7)', '#8B7500'
);

// ================= JUNTS =================
crearGraficoIndividual('juntsGeneralesChart',
  ['1977','1979','1982','1986','1989','1993','1996','2000','2004','2008','2011','2015','2016','2019A','2019N','2023'],
  [2.81, 2.69, 3.67, 5.02, 5.04, 4.94, 4.60, 4.19, 3.23, 3.03, 4.17, 2.25, 2.01, 1.91, 2.21, 1.60],
  'JUNTS', 'rgba(64,224,208,0.7)', '#1e6f6a'
);

// ================= EH BILDU =================
crearGraficoIndividual('ehbilduGeneralesChart',
  ['1979','1982','1986','1989','1993','1996','2011','2015','2016','2019A','2019N','2023'],
  [0.96, 1, 1.15, 1.06, 0.88, 0.72, 2, 0.87, 0.77, 0.99, 1.15, 1.36],
  'EHBILDU', 'rgba(1,181,156,0.7)', '#0b6b5c'
);

// ================= PNV =================
crearGraficoIndividual('pnvGeneralesChart',
  ['1977','1979','1982','1986','1989','1993','1996','2000','2004','2008','2011','2015','2016','2019A','2019N','2023'],
  [1.62, 1.65, 1.88, 1.53, 1.24, 1.24, 1.27, 1.53, 1.63, 1.19, 1.33, 1.2, 1.2, 1.51, 1.58, 1.12],
  'PNV', 'rgba(41,130,66,0.7)', '#1f5e31'
);

// ================= BNG =================
crearGraficoIndividual('bngGeneralesChart',
  ['1989','1993','1996','2000','2004','2008','2011','2015','2016','2019A','2019N','2023'],
  [0.23, 0.54, 0.88, 1.32, 0.81, 0.83, 0.75, 0.22, 0.19, 0.36, 0.50, 0.62],
  'BNG', 'rgba(116,177,224,0.7)', '#2b5f86'
);

// ================= CCA =================
crearGraficoIndividual('ccaGeneralesChart',
  ['1993','1996','2000','2004','2008','2011','2015','2016','2019A','2019N','2023'],
  [0.88, 0.88, 1.07, 0.91, 0.68, 0.59, 0.33, 0.33, 0.53, 0.52, 0.47],
  'CCA', 'rgba(1,173,215,0.7)', '#007a99'
);

// ================= UPN =================
crearGraficoIndividual('upnGeneralesChart',
  ['2023'], [0.21],
  'UPN', 'rgba(139,69,19,0.7)', '#5a2f10'
);

// ================= CUP =================
crearGraficoIndividual('cupGeneralesChart',
  ['2019N','2023'], [1.03, 0.4],
  'CUP', 'rgba(1,1,1,0.7)', '#000000'
);

// ================= PODEMOS =================
crearGraficoIndividual('podemosGeneralesChart',
  ['2015','2016','2019A','2019N'],
  [20.66, 21.1, 14.31, 12.97],
  'PODEMOS', 'rgba(128,0,128,0.7)', '#4B004B'
);

// ================= CIUDADANOS =================
crearGraficoIndividual('ciudadanosGeneralesChart',
  ['2008','2015','2016','2019A','2019N'],
  [0.18, 13.93, 13.05, 15.86, 6.86],
  'CIUDADANOS', 'rgba(204,112,0,0.7)', '#8a4b00'
);

// ================= NCA =================
crearGraficoIndividual('ncaGeneralesChart',
  ['2008','2011','2019N','2023'],
  [0.15, 0.59, 0.52, 0.18],
  'NCA', 'rgba(129,192,59,0.7)', '#4e7a1f'
);

// ================= PDeCAT =================
crearGraficoIndividual('pdecatGeneralesChart',
  ['2023'], [0.13],
  'PDeCAT', 'rgba(1,131,203,0.7)', '#015f94'
);

// ================= UPL =================
crearGraficoIndividual('uplGeneralesChart',
  ['1993','1996','2000','2004','2008','2016','2019N','2023'],
  [0.06, 0.05, 0.18, 0.05, 0.05, 0.01, 0.04, 0.09],
  'UPL', 'rgba(185,19,103,0.7)', '#7a0c43'
);

// ================= ARAGÓN EXISTE =================
crearGraficoIndividual('aragonExisteGeneralesChart',
  ['2019','2023'], [0.08, 0.08],
  'ARAGÓN EXISTE', 'rgba(3,114,82,0.7)', '#024f39'
);

// ================= MÁS PAÍS =================
crearGraficoIndividual('masPaisGeneralesChart',
  ['2019N'], [2.33],
  'MÁS PAÍS', 'rgba(74,229,210,0.7)', '#2fa99a'
);

// ================= CHA =================
crearGraficoIndividual('chaGeneralesChart',
  ['1989','1993','1996','2000','2004','2008','2019N'],
  [0.02, 0.03, 0.2, 0.33, 0.36, 0.15, 0.1],
  'CHA', 'rgba(171,0,28,0.7)', '#7a0014'
);

// ================= GBAI =================
crearGraficoIndividual('gbaiGeneralesChart',
  ['2004','2008','2011','2015','2016','2019A','2019N','2023'],
  [0.24, 0.24, 0.17, 0.12, 0.06, 0.08, 0.05, 0.04],
  'GBAI', 'rgba(41,130,66,0.7)', '#1f5e30'
);

// ================= SORIA ¡YA! =================
crearGraficoIndividual('soriaYaGeneralesChart',
  ['2023'], [0.04],
  'SORIA ¡YA!', 'rgba(20,24,24,0.7)', '#0d0f0f'
);

// ================= ADELANTE ANDALUCÍA =================
crearGraficoIndividual('adelanteAndaluciaGeneralesChart',
  ['2023'], [0.04],
  'ADELANTE ANDALUCÍA', 'rgba(36,200,126,0.7)', '#1a8f5a'
);

// ================= XAV =================
crearGraficoIndividual('xavGeneralesChart',
  ['2019N','2023'], [0.02, 0.03],
  'XAV', 'rgba(201,159,0,0.7)', '#8a6d00'
);

// ================= CJ =================
crearGraficoIndividual('cjGeneralesChart',
  ['2023'], [0.02],
  'CJ', 'rgba(25,56,145,0.7)', '#122a6b'
);

// ================= PAR =================
crearGraficoIndividual('parGeneralesChart',
  ['1979','1986','1989','1993','2000','2004','2008','2023'],
  [0.21, 0.36, 0.35, 0.61, 0.17, 0.14, 0.16, 0.02],
  'PAR', 'rgba(201,159,0,0.7)', '#8a6d00'
);

// ================= ZAMORA SÍ =================
crearGraficoIndividual('zamoraSiGeneralesChart',
  ['2023'], [0.01],
  'ZAMORA SÍ', 'rgba(232,73,91,0.7)', '#a93542'
);

// ================= NAVARRA SUMA =================
crearGraficoIndividual('navarraSumaGeneralesChart',
  ['2019A','2019N'], [0.41, 0.41],
  'NAVARRA SUMA', 'rgba(139,69,19,0.7)', '#5a2d10'
);

// ================= CPM =================
crearGraficoIndividual('cpmGeneralesChart',
  ['2019A','2019N','2023'], [0.03, 0.04, 0.01],
  'CPM', 'rgba(1,146,63,0.7)', '#016a2d'
);

// ================= EL PI =================
crearGraficoIndividual('piGeneralesChart',
  ['2015','2019A'], [0.05, 0.04],
  'EL PI', 'rgba(98,210,177,0.7)', '#3a8f7a'
);

// ================= MÉS =================
crearGraficoIndividual('mesGeneralesChart',
  ['2015','2019A','2019N'], [0.14, 0.1, 0.08],
  'MÉS', 'rgba(98,210,177,0.7)', '#3a8f7a'
);

// ================= UNIDAD POPULAR =================
crearGraficoIndividual('unidadPopularGeneralesChart',
  ['2015'], [3.67],
  'UNIDAD POPULAR', 'rgba(67,0,80,0.7)', '#2d0036'
);

// ================= FAC =================
crearGraficoIndividual('facGeneralesChart',
  ['2011'], [0.41],
  'FAC', 'rgba(1,69,134,0.7)', '#01315f'
);

// ================= COMPROMÍS =================
crearGraficoIndividual('compromisGeneralesChart',
  ['2011','2019A'], [0.51, 0.66],
  'COMPROMÍS', 'rgba(214,74,38,0.7)', '#9e341a'
);

// ================= ARALAR =================
crearGraficoIndividual('aralarGeneralesChart',
  ['2004','2008'], [0.15, 0.12],
  'ARALAR', 'rgba(105,45,62,0.7)', '#4d202c'
);

// ================= URAS =================
crearGraficoIndividual('urasGeneralesChart',
  ['2000'], [0.06],
  'URAS', 'rgba(73,186,233,0.7)', '#2f86aa'
);

// ================= PARTIDO RIOJANO =================
crearGraficoIndividual('partidoRiojanoGeneralesChart',
  ['1993'], [0.03],
  'PARTIDO RIOJANO', 'rgba(101,169,4,0.7)', '#4c7d03'
);

// ================= GIL =================
crearGraficoIndividual('gilGeneralesChart',
  ['1993','2000'], [0.07, 0.31],
  'GIL', 'rgba(83,126,3,0.7)', '#3f5f02'
);

// ================= UAL =================
crearGraficoIndividual('ualGeneralesChart',
  ['1993'], [0.07],
  'UAL', 'rgba(174,98,147,0.7)', '#7c4566'
);

// ================= PRC =================
crearGraficoIndividual('prcGeneralesChart',
  ['1993','2019A','2019N'], [0.08, 0.2, 0.29],
  'PRC', 'rgba(128,128,0,0.7)', '#5f5f00'
);

// ================= UPCA =================
crearGraficoIndividual('upcaGeneralesChart',
  ['1993'], [0.11],
  'UPCA', 'rgba(30,18,88,0.7)', '#120a3a'
);

// ================= CEU =================
crearGraficoIndividual('ceuGeneralesChart',
  ['1989'], [0.01],
  'CEU', 'rgba(107,122,145,0.7)', '#4b586b'
);

// ================= PAS =================
crearGraficoIndividual('pasGeneralesChart',
  ['1989','1993','1996','2000','2004'],
  [0.03, 0.05, 0.05, 0.03, 0.02],
  'PAS', 'rgba(127,150,98,0.7)', '#5c6f49'
);

// ================= PSM-EN =================
crearGraficoIndividual('psmenGeneralesChart',
  ['1989','1993','1996','2000','2004'],
  [0.04, 0.09, 0.1, 0.1, 0.16],
  'PSM-EN', 'rgba(195,65,0,0.7)', '#8a2e00'
);

// ================= EU (EXTREMADURA UNIDA) =================
crearGraficoIndividual('euGeneralesChart',
  ['1989','1993','2000','2004','2008','2015'],
  [0.05, 0.05, 0.02, 0.02, 0.01, 0.01],
  'EU', 'rgba(51,186,56,0.7)', '#237f27'
);

// ================= EA =================
crearGraficoIndividual('eaGeneralesChart',
  ['1989','1993','1996','2000','2004','2008'],
  [0.67, 0.55, 0.46, 0.43, 0.31, 0.2],
  'EA', 'rgba(41,130,66,0.7)', '#1f5e30'
);

// ================= ARM =================
crearGraficoIndividual('armGeneralesChart',
  ['1989','1993'], [1.07, 0.23],
  'ARM', 'rgba(66,74,110,0.7)', '#2f3550'
);

// ================= UV =================
crearGraficoIndividual('uvGeneralesChart',
  ['1986','1989','1993','1996','2000'],
  [0.32, 0.71, 0.48, 0.37, 0.25],
  'UV', 'rgba(39,52,90,0.7)', '#1c2742'
);

// ================= AIC =================
crearGraficoIndividual('aicGeneralesChart',
  ['1986','1989'], [0.33, 0.32],
  'AIC', 'rgba(89,100,181,0.7)', '#3f4780'
);

// ================= CG =================
crearGraficoIndividual('cgGeneralesChart',
  ['1986','1989','2000','2004'], [0.4, 0.22, 0.01, 0.01],
  'CG', 'rgba(31,93,121,0.7)', '#144458'
);

// ================= UPC =================
crearGraficoIndividual('upcGeneralesChart',
  ['1979','1982'], [0.33, 0.17],
  'UPC', 'rgba(255,13,0,0.7)', '#a30000'
);

// ================= PA =================
crearGraficoIndividual('paGeneralesChart',
  ['1979','1982','1986','1989','1993','1996','2000','2004','2011'],
  [1.81, 0.4, 0.47, 1.04, 0.41, 0.54, 0.89, 0.7, 0.32],
  'PA', 'rgba(21,170,53,0.7)', '#0f6f22'
);

// ================= UNIÓN NACIONAL =================
crearGraficoIndividual('unionNacionalGeneralesChart',
  ['1979','1982'], [2.11, 0.52],
  'UN', 'rgba(238,161,186,0.7)', '#b86b86'
);

// ================= CD =================
crearGraficoIndividual('cdGeneralesChart',
  ['1979'], [6.05],
  'CD', 'rgba(0,100,0,0.7)', '#004d00'
);

// ================= INDEP =================
crearGraficoIndividual('indepGeneralesChart',
  ['1977'], [0.16],
  'INDEP', 'rgba(0,0,128,0.7)', '#00005a'
);

// ================= CAIC =================
crearGraficoIndividual('caicGeneralesChart',
  ['1977'], [0.20],
  'CAIC', 'rgba(194,39,44,0.7)', '#8f1c20'
);

// ================= EE =================
crearGraficoIndividual('eeGeneralesChart',
  ['1977','1979','1982','1986','1989'],
  [0.34, 0.48, 0.48, 0.53, 0.51],
  'EE', 'rgba(220,20,60,0.7)', '#a10f2c'
);

// ================= PSP-US =================
crearGraficoIndividual('pspusGeneralesChart',
  ['1977'], [4.46],
  'PSP-US', 'rgba(255,103,103,0.7)', '#b84a4a'
);

// ================= UCD =================
crearGraficoIndividual('ucdGeneralesChart',
  ['1977','1979','1982'], [34.44, 34.84, 6.77],
  'UCD', 'rgba(255,165,0,0.7)', '#b37400'
);

// ================= PCE =================
crearGraficoIndividual('pceGeneralesChart',
  ['1977','1979','1982','1986'],
  [9.33, 10.77, 4.02, 1.14],
  'PCE', 'rgba(255,13,0,0.7)', '#a30000'
);

// ================= IU =================
crearGraficoIndividual('iuGeneralesChart',
  ['1986','1989','1993','1996','2000','2004','2008','2011'],
  [4.63, 9.07, 9.55, 10.54, 5.45, 4.96, 3.77, 6.92],
  'IU', 'rgba(210,86,68,0.7)', '#9b3e32'
);

// ================= CDS =================
crearGraficoIndividual('cdsGeneralesChart',
  ['1982','1986','1989','1993','2000','2004','2008'],
  [2.87, 9.22, 7.89, 1.76, 0.1, 0.13, 0.01],
  'CDS', 'rgba(0,100,0,0.7)', '#004d00'
);

// ================= UPyD =================
crearGraficoIndividual('upydGeneralesChart',
  ['2008','2011','2015','2016'],
  [1.19, 4.7, 0.61, 0.21],
  'UPyD', 'rgba(215,37,125,0.7)', '#a3185c'
);

// ===================================================================
// GRÁFICO GLOBAL COMBINADO — TODOS LOS PARTIDOS — GENERALES
// Años eje X: todos los años electorales de 1977 a 2023
// ===================================================================

const etiquetasGeneralesGlobal = [
  '1977','1979','1982','1986','1989','1993','1996','2000',
  '2004','2008','2011','2015','2016','2019A','2019N','2023'
];
// Índices:          0      1      2      3      4      5      6      7
//                   8      9     10     11     12     13      14     15

const datosGeneralesGlobal = {
  'PP/AP':      [8.21, null, 26.36, 25.97, 25.79, 34.76, 38.79, 44.52, 37.71, 39.94, 44.63, 28.72, 33.03, 16.70, 20.99, 33.06],
  'PSOE':       [29.32,30.40,48.11,44.06, 39.60, 38.78, 37.63, 34.16, 42.59, 43.87, 28.76, 22.01, 22.66, 28.68, 28.25, 31.68],
  'UCD':        [34.44,34.84, 6.77, null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null],
  'PCE':        [9.33, 10.77, 4.02, 1.14,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null],
  'PSP-US':     [4.46,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null],
  'CD':         [null,  6.05,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null],
  'INDEP':      [0.16,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null],
  'CAIC':       [0.20,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null],
  'EE':         [0.34,  0.48,  0.48,  0.53,  0.51,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null],
  'CDS':        [null,  null,  2.87,  9.22,  7.89,  1.76,  null,  0.10,  0.13,  0.01,  null,  null,  null,  null,  null,  null],
  'IU':         [null,  null,  null,  4.63,  9.07,  9.55, 10.54,  5.45,  4.96,  3.77,  6.92,  null,  null,  null,  null,  null],
  'JUNTS/CiU':  [2.81,  2.69,  3.67,  5.02,  5.04,  4.94,  4.60,  4.19,  3.23,  3.03,  4.17,  2.25,  2.01,  1.91,  2.21,  1.60],
  'ERC':        [0.79,  0.69,  0.66,  0.42,  0.41,  0.80,  0.67,  0.84,  2.52,  1.16,  1.05,  2.39,  2.63,  3.89,  3.64,  1.89],
  'PNV':        [1.62,  1.65,  1.88,  1.53,  1.24,  1.24,  1.27,  1.53,  1.63,  1.19,  1.33,  1.20,  1.20,  1.51,  1.58,  1.12],
  'EH Bildu':   [null,  0.96,  1.00,  1.15,  1.06,  0.88,  0.72,  null,  null,  null,  2.00,  0.87,  0.77,  0.99,  1.15,  1.36],
  'PA':         [null,  1.81,  0.40,  0.47,  1.04,  0.41,  0.54,  0.89,  0.70,  null,  0.32,  null,  null,  null,  null,  null],
  'UV':         [null,  null,  null,  0.32,  0.71,  0.48,  0.37,  0.25,  null,  null,  null,  null,  null,  null,  null,  null],
  'AIC':        [null,  null,  null,  0.33,  0.32,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null],
  'CG':         [null,  null,  null,  0.40,  0.22,  null,  null,  0.01,  0.01,  null,  null,  null,  null,  null,  null,  null],
  'EA':         [null,  null,  null,  null,  0.67,  0.55,  0.46,  0.43,  0.31,  0.20,  null,  null,  null,  null,  null,  null],
  'ARM':        [null,  null,  null,  null,  1.07,  0.23,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null],
  'CEU':        [null,  null,  null,  null,  0.01,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null],
  'PAS':        [null,  null,  null,  null,  0.03,  0.05,  0.05,  0.03,  0.02,  null,  null,  null,  null,  null,  null,  null],
  'PSM-EN':     [null,  null,  null,  null,  0.04,  0.09,  0.10,  0.10,  0.16,  null,  null,  null,  null,  null,  null,  null],
  'EU':         [null,  null,  null,  null,  0.05,  0.05,  null,  0.02,  0.02,  0.01,  null,  0.01,  null,  null,  null,  null],
  'CHA':        [null,  null,  null,  null,  0.02,  0.03,  0.20,  0.33,  0.36,  0.15,  null,  null,  null,  null,  0.10,  null],
  'BNG':        [null,  null,  null,  null,  0.23,  0.54,  0.88,  1.32,  0.81,  0.83,  0.75,  0.22,  0.19,  0.36,  0.50,  0.62],
  'UPC':        [null,  0.33,  0.17,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null],
  'PAR':        [null,  0.21,  null,  0.36,  0.35,  0.61,  null,  0.17,  0.14,  0.16,  null,  null,  null,  null,  null,  0.02],
  'UN':         [null,  2.11,  0.52,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null],
  'CCA':        [null,  null,  null,  null,  null,  0.88,  0.88,  1.07,  0.91,  0.68,  0.59,  0.33,  0.33,  0.53,  0.52,  0.47],
  'UPL':        [null,  null,  null,  null,  null,  0.06,  0.05,  0.18,  0.05,  0.05,  null,  null,  0.01,  null,  0.04,  0.09],
  'PRC':        [null,  null,  null,  null,  null,  0.08,  null,  null,  null,  null,  null,  null,  null,  0.20,  0.29,  null],
  'UPCA':       [null,  null,  null,  null,  null,  0.11,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null],
  'GIL':        [null,  null,  null,  null,  null,  0.07,  null,  0.31,  null,  null,  null,  null,  null,  null,  null,  null],
  'UAL':        [null,  null,  null,  null,  null,  0.07,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null],
  'P.Riojano':  [null,  null,  null,  null,  null,  0.03,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null],
  'URAS':       [null,  null,  null,  null,  null,  null,  null,  0.06,  null,  null,  null,  null,  null,  null,  null,  null],
  'ARALAR':     [null,  null,  null,  null,  null,  null,  null,  null,  0.15,  0.12,  null,  null,  null,  null,  null,  null],
  'GBAI':       [null,  null,  null,  null,  null,  null,  null,  null,  0.24,  0.24,  0.17,  0.12,  0.06,  0.08,  0.05,  0.04],
  'COMPROMÍS':  [null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  0.51,  null,  null,  0.66,  null,  null],
  'FAC':        [null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  0.41,  null,  null,  null,  null,  null],
  'UPyD':       [null,  null,  null,  null,  null,  null,  null,  null,  null,  1.19,  4.70,  0.61,  0.21,  null,  null,  null],
  'CIUDADANOS': [null,  null,  null,  null,  null,  null,  null,  null,  null,  0.18, null,  13.93, 13.05, 15.86,  6.86,  null],
  'NCA':        [null,  null,  null,  null,  null,  null,  null,  null,  null,  0.15,  0.59,  null,  null,  null,  0.52,  0.18],
  'PODEMOS':    [null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null, 20.66, 21.10, 14.31, 12.97,  null],
  'U.Popular':  [null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  3.67,  null,  null,  null,  null],
  'EL PI':      [null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  0.05,  null,  0.04,  null,  null],
  'MÉS':        [null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  0.14,  null,  0.10,  0.08,  null],
  'PDeCAT':     [null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  0.13],
  'CUP':        [null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  1.03,  0.40],
  'N.Suma':     [null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  0.41,  0.41,  null],
  'CPM':        [null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  0.03,  0.04,  0.01],
  'MÁS PAÍS':   [null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  2.33,  null],
  'XAV':        [null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  0.02,  0.03],
  'SUMAR':      [null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null, 12.33],
  'VOX':        [null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  0.23,  0.20, 10.26, 15.21, 12.38],
  'UPN':        [null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  0.21],
  'Aragón Ex.': [null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  0.08,  null,  0.08],
  'Zamora Sí':  [null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  0.01],
  'Soria ¡Ya!': [null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  0.04],
  'Ad.And.':    [null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  0.04],
  'CJ':         [null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  0.02],
};

const coloresGeneralesGlobal = {
  'PP/AP': '#0000FF', 'PSOE': '#FF0000', 'UCD': '#FFA500', 'PCE': '#FF0D00',
  'PSP-US': '#FF6767', 'CD': '#006400', 'INDEP': '#000080', 'CAIC': '#c2272c',
  'EE': '#DC143C', 'CDS': '#008000', 'IU': '#d25644', 'JUNTS/CiU': '#40E0D0',
  'ERC': '#c99f00', 'PNV': '#298242', 'EH Bildu': '#01b59c', 'PA': '#15AA35',
  'UV': '#27345a', 'AIC': '#5964b5', 'CG': '#1f5d79', 'EA': '#1f6f45',
  'ARM': '#424a6e', 'CEU': '#6b7a91', 'PAS': '#7f9662', 'PSM-EN': '#c34100',
  'EU': '#33ba38', 'CHA': '#ab001c', 'BNG': '#74b1e0', 'UPC': '#FF0D00',
  'PAR': '#c99f00', 'UN': '#eea1ba', 'CCA': '#01add7', 'UPL': '#B91367',
  'PRC': '#808000', 'UPCA': '#1e1258', 'GIL': '#537e03', 'UAL': '#ae6293',
  'P.Riojano': '#65a904', 'URAS': '#49bae9', 'ARALAR': '#692d3e',
  'GBAI': '#298242', 'COMPROMÍS': '#d64a26', 'FAC': '#014586',
  'UPyD': '#d7257d', 'CIUDADANOS': '#CC7000', 'NCA': '#81C03B',
  'PODEMOS': '#800080', 'U.Popular': '#430050', 'EL PI': '#62d2b1',
  'MÉS': '#3a8f7a', 'PDeCAT': '#0183CB', 'CUP': '#222222',
  'N.Suma': '#8B4513', 'CPM': '#01923f', 'MÁS PAÍS': '#4ae5d2',
  'XAV': '#8a6d00', 'SUMAR': '#FF69B4', 'VOX': '#009639',
  'UPN': '#5a2f10', 'Aragón Ex.': '#037252', 'Zamora Sí': '#e8495b',
  'Soria ¡Ya!': '#555555', 'Ad.And.': '#24c87e', 'CJ': '#193891',
};

const datasetsGeneralesGlobal = Object.keys(datosGeneralesGlobal).map(partido => ({
  type: 'line',
  label: partido,
  data: datosGeneralesGlobal[partido],
  borderColor: coloresGeneralesGlobal[partido],
  backgroundColor: 'transparent',
  fill: false,
  tension: 0.3,
  spanGaps: true,
  pointRadius: 4,
  pointBackgroundColor: coloresGeneralesGlobal[partido],
  datalabels: {
    display: true,
    color: coloresGeneralesGlobal[partido],
    font: { weight: 'bold', size: 9 },
    formatter: v => v != null ? v.toFixed(2) + '%' : ''
  }
}));

const ctxGlobal = document.getElementById('generalesGlobalChart').getContext('2d');
new Chart(ctxGlobal, {
  data: { labels: etiquetasGeneralesGlobal, datasets: datasetsGeneralesGlobal },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'top', labels: { color: '#333', boxWidth: 12, font: { size: 10 } } },
      datalabels: { display: true }
    },
    scales: {
      y: { beginAtZero: true, title: { display: true, text: 'Porcentaje (%)', color: '#333' }, ticks: { color: '#333' } },
      x: { title: { display: true, text: 'Año', color: '#333' }, ticks: { color: '#333' } }
    }
  },
  plugins: [ChartDataLabels]
});

