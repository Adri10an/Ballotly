    function abrirVentana(provincia) {

if (provincia === "Mallorca") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Mallorca <span class="escaños">30 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1983: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_1983" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 11 Escaños</span> 
                <span style="color: #ADD8E6;">AP-PDP-UL 11 Escaños</span> 
                <span style="color: #FF0D00;">UM 6 Escaños</span>
                <span style="color: #c34100;">PSM 2 Escaños</span>  
                </a>
                <br><br>
                El PSOE las gana, pero la suma de AP-PDP-UL y <a href="https://es.wikipedia.org/wiki/Uni%C3%B3_Mallorquina" target="_blank">Unió Mallorquina</a> saca cuatro escaños de ventaja a la suma de PSOE y PSM. El PSOE gana a
                AP-PDP-UL por tan solo 477 votos, AP-PDP-UL gana a UM por 40993 votos y UM dobla en votos a PSM.
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 33 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1987: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_1987" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                    <span style="color: #ADD8E6;">AP-PL 13 Escaños</span>
                    <span style="color: #FF0000;">PSOE 11 Escaños</span>
                    <span style="color: #FF0D00;">UM 4 Escaños</span>
                <span style="color: #006400;">CDS 3 Escaños</span>
                <span style="color: #c34100;">PSM-EN 2 Escaños</span>  
                </a>
                <br><br>
                AP-PL las gana y sumando a UM y CDS sacan siete escaños de ventaja a la suma de PSOE y PSM-EN. AP-PL gana al PSOE por 9462 votos, el PSOE casi triplica a UM en votos, UM gana a CDS por tan solo 1229 votos y CDS gana a PSM-EN por 12544 votos
                <br><br>
                1991: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_1991" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP-UM 18 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 11 Escaños</span>
                    <span style="color: #c34100;">PSM-NM 3 Escaños</span>  
                    <span style="color: #d0a60f;">UIM 1 Escaños</span>  
                </a>
                <br><br>
                El PP las gana y sumando a <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_1991" target="_blank">UIM</a> sacan cinco escaños de ventaja a la suma de PSOE y PSM-NM. PP-UM gana al PSOE por 49706 votos, el PSOE triplica a PSM-NM en votos y PSM-NM dobla en votos a UIM
                <br><br>
                1995: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_1995" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 16 Escaños</span> 
                <span style="color: #FF0000;">PSOE 8 Escaño</span>
                <span style="color: #c34100;">PSM-NM-NI 5 Escaños</span> 
                <span style="color: #FF0D00;">UM 2 Escaños</span>
                <span style="color: #d25644;">IU 2 Escaños</span>
                </a>
                <br><br>
                El PP las gana y sumando a UM sacan tres escaños de ventaja a la suma de PSOE, PSM-NM-NI. El PP gana al PSOE por 66902 votos, el PSOE gana a PSM-NM-NI por 28623 votos, PSM-NM-NI dobla a UM en votos y UM gana a IU por tan solo 120 votos
                <br><br>
                1999: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 16 Escaños</span> 
                <span style="color: #FF0000;">PSOE 8 Escaño</span>
                <span style="color: #c34100;">PSM-EN 4 Escaños</span> 
                <span style="color: #FF0D00;">UM 3 Escaños</span>
                <span style="color: #d25644;">EU-EV 2 Escaños</span>
                </a>
                <br><br>
                El PP las gana y sumando a UM sacan cinco escaños de ventaja a la suma de PSOE, PSM-EN y EU-EV. El PP gana al PSOE por 62975 votos, el PSOE gana a PSM-EN por 28331 votos, PSM-EN gana a UM por 12827 votos y UM gana a EU-EV por 9279 votos
                <br><br>
                2003: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_2003" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 16 Escaños</span> 
                <span style="color: #FF0000;">PSOE 9 Escaño</span>
                <span style="color: #FF0D00;">UM 3 Escaños</span>
                <span style="color: #c34100;">PSM-EN 3 Escaños</span> 
                <span style="color: #d25644;">EU-EV 2 Escaños</span>
                </a>
                <br><br>
                El PP las gana y sumando a UM sacan cinco escaños de ventaja a la suma de PSOE, PSM-EN y EU-EV. El PP gana al PSOE por 64643 votos, el PSOE casi triplica a UM en votos, UM gana a PSM-EN por tan solo 817 votos y PSM-EN gana a EU-EV por 11914 votos
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/04/701.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 16 Escaños</span> 
    <span style="color: #FF0000;">PSOE 10 Escaños</span>
    <span style="color: #7a0b04;">BPM 4 Escaños</span>
    <span style="color: #FF0D00;">UM 3 Escaños</span>
</a>
<br><br>
El PP las gana y aunque sumando a UM sacan cinco escaños de ventaja a la suma de PSOE y <a href="https://es.wikipedia.org/wiki/Bloc_per_Mallorca" target="_blank">BMP</a>, UM apoya al PSOE, por lo que la suma de PSOE, BPM y UM saca un escaño de ventaja al PP. El PP gana al PSOE por 55771 votos, el PSOE dobla en votos a BPM y BPM gana a UM por 9400 votos
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/04/701.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 19 Escaños</span> 
    <span style="color: #FF0000;">PSOE 10 Escaños</span>
    <span style="color: #c34100;">PSM-IV-EXM 4 Escaños</span> 
</a>
<br><br>
El PP las gana sacando cinco escaños de ventaja a la suma de PSOE y PSM-IV-EXM. El PP gana al PSOE por 76957 votos y el PSOE dobla a PSM-IV-EXM en votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/04/701.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 10 Escaños</span> 
    <span style="color: #FF0000;">PSOE 7 Escaños</span>
    <span style="color: #b9bf01;">MÉS 6 Escaños</span>
    <span style="color: #800080;">PODEMOS 5 Escaños</span>
    <span style="color: #62d2b1;">El PI 3 Escaños</span>
    <span style="color: #FF7F00;">CS 2 Escaños</span>
</a>
<br><br>
El PP las gana, pero la suma de PSOE, MÉS y PODEMOS saca tres escaños de ventaja a la suma de PP, El PI y CS. El PP gana al PSOE por 32873 votos, el PSOE gana a MÉS por 3502 votos, MÉS gana a PODEMOS por 8793 votos, PODEMOS gana al PI por 19889 votos y el PI gana a CIUDADANOS por 5070 votos
<br><br>

2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/17/12.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 10 Escaños</span>
    <span style="color: #0000FF;">PP 7 Escaños</span> 
    <span style="color: #b9bf01;">MÉS 4 Escaños</span>
    <span style="color: #FF7F00;">CS 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 3 Escaños</span>
    <span style="color: #008000;">VOX 3 Escaños</span>
    <span style="color: #62d2b1;">El PI 3 Escaños</span>
</a>
<br><br>
El PSOE las gana y sumando a MÉS y PODEMOS sacan un escaño de ventaja a la suma de PP, CS, VOX y El PI. El PSOE gana al PP por 22365 votos, el PP gana a MÉS por 30434 votos, MÉS gana a CIUDADANOS por 4901 votos, CIUDADANOS gana a PODEMOS por 2598 votos, PODEMOS gana a VOX por tan solo 622 votos y VOX gana al PI por tan solo 933 votos
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/17/12/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 13 Escaños</span> 
    <span style="color: #FF0000;">PSOE 10 Escaños</span>
    <span style="color: #008000;">VOX 6 Escaños</span>
    <span style="color: #b9bf01;">MÉS 4 Escaños</span>
</a>
<br><br>
El PP las gana y sumando a VOX sacan cinco escaños de ventaja a la suma de PSOE y MÉS. El PP gana al PSOE por 26701 votos, el PSOE gana a VOX por 41429 votos y VOX gana a MÉS por 17792 votos
<br><br>
En conclusión, Mallorca es una isla 
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Mallorca</title>
            <style>
                body {
    font-family: Arial, sans-serif; 
    background: url('https://i.pinimg.com/736x/3f/14/c4/3f14c4421a628c3320da197bd6ce6e1e.jpg') no-repeat center center fixed;
    background-size: cover;
    margin: 0;
    padding: 20px;
    color: #fff;
}

.header {
    text-align: center;
    background: #d6eaf8; /* Color azul claro para el header */
    padding: 10px;
    border-radius: 10px;
}

.imagenes {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 15px;
    margin-top: 20px;
    background: rgba(0, 0, 0, 0.5);
    padding: 10px;
    border-radius: 10px;
}

.imagenes div {
    text-align: center;
}

.nombre {
    font-size: 1em;
    margin-top: 5px;
}

.escaños {
    color: black; /* Mantener "1 Escaño" en blanco */
    font-weight: bold;
}
            </style>
        </head>
        <body>
            ${provinciaHtml}
        </body>
        </html>
    `);
    nuevaVentana.document.close();

}
if (provincia === "Menorca") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Menorca <span class="escaños">12 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_1983" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 5 Escaños</span> 
                <span style="color: #ADD8E6;">AP-PDP-UL 4 Escaños</span> 
                <span style="color: #c34100;">PSM 2 Escaños</span>  
                <span style="color: #82b47f;">CIM 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a PSM sacan dos escaños de ventaja a la suma de AP-PDP-UL y CIM. El PSOE gana a AP-PDP-UL por tan solo 1379 votos, AP-PDP-UL dobla en votos al PSM y el PSM gana a CIM por tan solo 492 votos
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 13 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1987: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_1987" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                    <span style="color: #ADD8E6;">AP-PL 5 Escaños</span>
                    <span style="color: #FF0000;">PSOE 5 Escaños</span>
                    <span style="color: #d2581b;">EEM 2 Escaños</span>
                <span style="color: #006400;">CDS 1 Escaño</span> 
                </a>
                <br><br>
                AP-PL las gana, pero la suma de PSOE y <a href="https://es.wikipedia.org/wiki/Entesa_de_l%27Esquerra_de_Menorca" target="_blank">EEM</a>
 saca un escaño de ventaja a la suma de AP-PL y CDS. AP-PL gana al PSOE por tan solo 993 votos, el PSOE dobla a EEM en votos y EEM gana a CDS por 1659 votos
                <br><br>
                1991: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_1991" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 6 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 5 Escaños</span>
                    <span style="color: #d2581b;">EEM 2 Escaños</span>
                </a>
                <br><br>
                El PP las gana, pero de nuevo la suma de PSOE y EEM le saca un escaño de ventaja. El PP gana al PSOE por 3792 votos y el PSOE dobla a EEM en votos
                <br><br>
                1995: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_1995" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 7 Escaños</span> 
                <span style="color: #FF0000;">PSOE 4 Escaños</span>
                <span style="color: #c34100;">PSM-NM-NI 1 Escaño</span> 
                <span style="color: #d25644;">IU 1 Escaño</span>
                </a>
                <br><br>
                El PP las gana sacando un escaño de ventaja a la suma de PSOE, PSM-NM-NI e IU. El PP gana al PSOE por 5010 votos, el PSOE dobla a PSM-NM-NI en votos y PSM-NM-NI gana a IU por tan solo 1087 votos
                <br><br>
                1999: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 6 Escaños</span> 
                <span style="color: #FF0000;">PSOE 5 Escaños</span>
                <span style="color: #c34100;">PSM-EN 1 Escaño</span> 
                <span style="color: #d25644;">EM-EU 1 Escaño</span>
                </a>
                <br><br>
                El PP las gana, pero la suma de PSOE, PSM-EN y EM-EU le saca un escaño de ventaja. El PP gana al PSOE por tan solo 800 votos, el PSOE casi cuadruplica a PSM-EN y PSM-EN gana a EM-EU por tan solo 849 votos
                <br><br>
                2003: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_2003" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 6 Escaños</span> 
                <span style="color: #FF0000;">PSOE 6 Escaño</span>
                <span style="color: #c34100;">PSM-EN 1 Escaño</span> 
                </a>
                <br><br>
                El PP las gana, pero la suma de PSOE y PSM-EN le saca un escaño de ventaja. El PP gana al PSOE por tan solo 637 votos y el PSOE cuadriplica a PSM-EN en votos
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/04/702.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 6 Escaños</span> 
    <span style="color: #FF0000;">PSOE 6 Escaños</span>
    <span style="color: #c9c52b;">PSM-VERDS 1 Escaño</span>
</a>
<br><br>
El PP las gana, pero la suma de PSOE y PSM-VERDS le saca un escaño de ventaja. El PP gana al PSOE por tan solo 1688 votos y el PSOE cuadriplica a PSM-VERDS en votos
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/04/702.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 8 Escaños</span> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #c34100;">PSM-EN 1 Escaño</span> 
</a>
<br><br>
El PP las gana sacando tres escaños de ventaja a la suma de PSOE y PSM-EN. El PP gana al PSOE por 7227 votos y el PSOE dobla a PSM-EN en votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/04/702.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #244a3c;">MXME 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
</a>
<br><br>
El PP las gana, pero la suma de PSOE, MXME y PODEMOS saca tres escaños de ventaja al PP. El PP gana al PSOE por 3088 votos, el PSOE gana a MXME por tan solo 1885 votos y MXME gana a PODEMOS por tan solo 1373 votos
<br><br>

2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/04/702.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #244a3c;">MXME 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
El PSOE las gana y sumando a MXME y PODEMOS sacan tres escaños de ventaja a la suma de PP y CIUDADANOS. El PSOE gana al PP por tan solo 451 votos, el PP gana a MXME por 4287 votos, MXME gana a PODEMOS por tan solo 1629 votos y PODEMOS gana a CIUDADANOS por tan solo 558 votos
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/04/02/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #244a3c;">MXME 2 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
</a>
<br><br>
El PP las gana, pero la suma de PSOE, MXME y PODEMOS saca un escaño de ventaja a la suma de PP y VOX. El PP gana al PSOE por 4577 votos, el PSOE gana a MXME por 3900 votos, MXME dobla a VOX en votos y VOX gana a PODEMOS por tan solo 173 votos
<br><br>
En conclusión, Menorca es una isla 
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Menorca</title>
            <style>
                body {
    font-family: Arial, sans-serif; 
    background: url('https://i.pinimg.com/736x/3f/14/c4/3f14c4421a628c3320da197bd6ce6e1e.jpg') no-repeat center center fixed;
    background-size: cover;
    margin: 0;
    padding: 20px;
    color: #fff;
}

.header {
    text-align: center;
    background: #d6eaf8; /* Color azul claro para el header */
    padding: 10px;
    border-radius: 10px;
}

.imagenes {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 15px;
    margin-top: 20px;
    background: rgba(0, 0, 0, 0.5);
    padding: 10px;
    border-radius: 10px;
}

.imagenes div {
    text-align: center;
}

.nombre {
    font-size: 1em;
    margin-top: 5px;
}

.escaños {
    color: black; /* Mantener "1 Escaño" en blanco */
    font-weight: bold;
}
            </style>
        </head>
        <body>
            ${provinciaHtml}
        </body>
        </html>
    `);
    nuevaVentana.document.close();

}
if (provincia === "Ibiza") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Ibiza <span class="escaños">11 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_1983" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #ADD8E6;">AP-PDP-UL 6 Escaños</span> 
                <span style="color: #FF0000;">PSOE 4 Escaños</span> 
                <span style="color: #7dabcd;">PDL 1 Escaño</span>  
                </a>
                <br><br>
                El PP las gana y sumando a PDL sacan tres escaños de ventaja al PSOE. AP-PDP-UL gana al PSOE por 5205 votos y el PSOE dobla a PDL en votos
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 12 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1987: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_1987" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                    <span style="color: #ADD8E6;">AP-PL 7 Escaños</span> 
                <span style="color: #FF0000;">PSOE 4 Escaños</span> 
                <span style="color: #006400;">CDS 1 Escaño</span>  
                </a>
                <br><br>
                AP-PL las gana y sumando al CDS doblan en escaños al PSOE. AP-PL gana al PSOE por 4964 votos y el PSOE cuadruplica a CDS en votos
                <br><br>
                1991: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_1991" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 7 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 4 Escaños</span>
                    <span style="color: #045755;">FIEF 1 Escaño</span>
                </a>
                <br><br>
                El PP las gana y sumando al partido de centroderecha FIEF doblan en escaños al PSOE. El PP gana al PSOE por 5234 votos y el PSOE casi cuadriplica a FIEF en votos.
                <br><br>
                1995: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_1995" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 7 Escaños</span> 
                <span style="color: #FF0000;">PSOE 4 Escaños</span>
                <span style="color: #77bf1f;">ELS VERDS 1 Escaño</span>
                </a>
                <br><br>
                El PP las gana sacando dos escaños de ventaja a la suma de PSOE y ELS VERDS. El PP gana al PSOE por 7303 votos y el PSOE cuadruplica en votos a ELS VERDS.
                <br><br>
                1999: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 6 Escaños</span> 
                <span style="color: #FF0000;">PACTO PROGRESISTA 6 Escaños</span>
                </a>
                <br><br>
                El PP las gana empatando en escaños con <a href="https://es.wikipedia.org/wiki/Pacte_Progressista_d%27Eivissa" target="_blank">PACTO PROTEGISTA</a>
 al que aventaja por tan solo 282 votos
                <br><br>
                2003: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_2003" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 7 Escaños</span> 
                <span style="color: #FF0000;">PACTO PROGRESISTA 5 Escaños</span>
                </a>
                <br><br>
                El PP las gana sacando dos escaños de ventaja a PACTO PROGRESISTA al que aventaja por 5155 votos
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/04/703.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 6 Escaños</span> 
    <span style="color: #FF0000;">PSOE-EXC 6 Escaños</span>
</a>
<br><br>
El PP las gana empatando en escaños con el PSOE-EXC al que aventaja por tan solo 547 votos
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/04/703.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 8 Escaños</span> 
    <span style="color: #FF0000;">PSOE-PACTE 4 Escaños</span> 
</a>
<br><br>
El PP las gana doblando en escaños al PSOE al que aventaja en 7974 votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/04/703.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #800080;">PODEMOS 3 Escaños</span>
</a>
<br><br>
El PP las gana, pero la suma de PSOE y PODEMOS le saca dos escaños de ventaja. El PP gana al PSOE por 4043 votos y el PSOE gana a PODEMOS por 2652 votos
<br><br>

2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/04/703.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
El PP las gana y sumando a CS empatan en escaños a la suma de PSOE y PODEMOS. El PP gana al PSOE por tan solo 1141 votos, el PSOE dobla a PODEMOS en votos y PODEMOS gana a CIUDADANOS por tan solo 1296 votos
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/04/03/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 7 Escaños</span> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span>
</a>
<br><br>
El PP las gana y sumando a VOX doblan en escaños al PSOE. El PP gana al PSOE por 10337 votos y el PSOE dobla a VOX en votos
<br><br>
En conclusión, Ibiza es una isla 
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Ibiza</title>
            <style>
                body {
    font-family: Arial, sans-serif; 
    background: url('https://i.pinimg.com/736x/3f/14/c4/3f14c4421a628c3320da197bd6ce6e1e.jpg') no-repeat center center fixed;
    background-size: cover;
    margin: 0;
    padding: 20px;
    color: #fff;
}

.header {
    text-align: center;
    background: #d6eaf8; /* Color azul claro para el header */
    padding: 10px;
    border-radius: 10px;
}

.imagenes {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 15px;
    margin-top: 20px;
    background: rgba(0, 0, 0, 0.5);
    padding: 10px;
    border-radius: 10px;
}

.imagenes div {
    text-align: center;
}

.nombre {
    font-size: 1em;
    margin-top: 5px;
}

.escaños {
    color: black; /* Mantener "1 Escaño" en blanco */
    font-weight: bold;
}
            </style>
        </head>
        <body>
            ${provinciaHtml}
        </body>
        </html>
    `);
    nuevaVentana.document.close();

}
if (provincia === "Formentera") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Formentera <span class="escaños">1 Escaño</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_1983" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 1 Escaño</span> 
                </a>
                <br><br>
                El PSOE las gana sacando tan solo 205 votos de ventaja a AP-PDP-UL
                <br><br>
                1987: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_1987" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                    <span style="color: #FF0000;">PSOE 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana sacando tan solo 137 votos de ventaja a AP-PL
                <br><br>
                1991: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_1991" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana sacando tan solo 268 votos de ventaja al partido de centroderecha GUIF
                <br><br>
                1995: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_1995" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #00a29f;">AIPF 1 Escaño</span> 
                </a>
                <br><br>
                <a href="https://es.wikipedia.org/wiki/Agrupaci%C3%B3_Independent_Popular_de_Formentera" target="_blank">AIPF</a> las gana sacando tan solo 128 votos de ventaja al PSOE
                <br><br>
                1999: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #b85441;">COP 1 Escaño</span> 
                </a>
                <br><br>
                <a href="https://es.wikipedia.org/wiki/Coalici%C3%B3_d%27Organitzacions_Progressistes_de_Formentera" target="_blank">COP</a> las gana sacando tan solo 353 votos a AIPF
                <br><br>
                2003: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_2003" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #00a29f;">AIPF 1 Escaño</span> 
                </a>
                <br><br>
                AIPF las gana sacando tan solo 349 votos de ventaja a COP
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/04/704.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #00a29f;">AIPF 1 Escaño</span> 
</a>
<br><br>
AIPF las gana sacando tan solo 339 votos de ventaja al PSOE-GxF
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/04/704.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">GxF-PSOE 1 Escaño</span>
</a>
<br><br>
GxF-PSOE las gana sacando tan solo 551 votos de ventaja a SA UNIÓ
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/04/704.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">GxF-PSOE 1 Escaño</span>
</a>
<br><br>
GxF-PSOE las gana doblando en votos al PP
<br><br>

2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/04/704.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">GxF-PSOE 1 Escaño</span>
</a>
<br><br>
GxF-PSOE las gana sacando tan solo 613 votos de ventaja a SA UNIÓ
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/04/04/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #00a29f;">SA UNIÓ 1 Escaño</span> 
</a>
<br><br>
SA UNIÓ las gana sacando tan solo 73 votos de ventaja a GxF-PSOE
<br><br>
En conclusión, Formentera es una isla 
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Formentera</title>
            <style>
                body {
    font-family: Arial, sans-serif; 
    background: url('https://i.pinimg.com/736x/3f/14/c4/3f14c4421a628c3320da197bd6ce6e1e.jpg') no-repeat center center fixed;
    background-size: cover;
    margin: 0;
    padding: 20px;
    color: #fff;
}

.header {
    text-align: center;
    background: #d6eaf8; /* Color azul claro para el header */
    padding: 10px;
    border-radius: 10px;
}

.imagenes {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 15px;
    margin-top: 20px;
    background: rgba(0, 0, 0, 0.5);
    padding: 10px;
    border-radius: 10px;
}

.imagenes div {
    text-align: center;
}

.nombre {
    font-size: 1em;
    margin-top: 5px;
}

.escaños {
    color: black; /* Mantener "1 Escaño" en blanco */
    font-weight: bold;
}
            </style>
        </head>
        <body>
            ${provinciaHtml}
        </body>
        </html>
    `);
    nuevaVentana.document.close();

}
if (provincia === "Baleares") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Baleares <span class="escaños">54 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_1983" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #ADD8E6;">AP-PDP-UL 21 Escaños</span> 
                <span style="color: #FF0000;">PSOE 21 Escaños</span> 
                <span style="color: #FF0D00;">UM 6 Escaños</span>
                <span style="color: #c34100;">PSM 4 Escaños</span>  
                <span style="color: #7dabcd;">PDL 1 Escaño</span> 
                <span style="color: #82b47f;">CIM 1 Escaño</span>
                </a>
                <br><br>
                AP-PDP-UL las gana y sumando a UM, PDL y CIM sacan un escaño por encima de la mayoría absoluta
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 59 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1987: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_1987" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                    <span style="color: #ADD8E6;">AP-PL 25 Escaños</span>
                    <span style="color: #FF0000;">PSOE 21 Escaños</span>
                <span style="color: #006400;">CDS 5 Escaños</span>
                <span style="color: #FF0D00;">UM 4 Escaños</span>
                <span style="color: #c34100;">PSM-EN 2 Escaños</span>  
                <span style="color: #d2581b;">EEM 2 Escaños</span>
                </a>
                <br><br>
                AP-PL las gana y sumando a CDS y UM sacan cuatro escaños por encima de la mayoría absoluta
                <br><br>
                1991: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_1991" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP-UM 31 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 21 Escaños</span>
                    <span style="color: #c34100;">PSM-NM 3 Escaños</span> 
                    <span style="color: #d2581b;">EEM 2 Escaños</span>
                    <span style="color: #d0a60f;">UIM 1 Escaños</span>  
                    <span style="color: #045755;">FIEF 1 Escaño</span>
                </a>
                <br><br>
                PP-UM las gana sacando un escaño por encima de la mayoría absoluta
                <br><br>
                1995: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_1995" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 30 Escaños</span> 
                <span style="color: #FF0000;">PSOE 16 Escaño</span>
                <span style="color: #c34100;">PSM-NM-NI 6 Escaños</span> 
                <span style="color: #d25644;">IU 3 Escaños</span>
                <span style="color: #FF0D00;">UM 2 Escaños</span>
                <span style="color: #77bf1f;">ELS VERDS 1 Escaño</span>
                <span style="color: #00a29f;">AIPF 1 Escaño</span> 
                </a>
                <br><br>
                El PP las gana sacando la mayoría absoluta exacta
                <br><br>
                1999: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 28 Escaños</span> 
                <span style="color: #FF0000;">PSOE 19 Escaños</span>
                <span style="color: #c34100;">PSM-EN 5 Escaños</span> 
                <span style="color: #FF0D00;">UM 3 Escaños</span>
                <span style="color: #d25644;">EU 3 Escaños</span>
                <span style="color: #b85441;">COP 1 Escaño</span> 
                </a>
                <br><br>
                El PP las gana, pero el PSOE alcanza un pacto con UM, PSM-EN, EU-EV, EM-EU y sacan un escaño por encima de la mayoría absoluta
                <br><br>
                2003: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_2003" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 29 Escaños</span> 
                <span style="color: #FF0000;">PSOE 20 Escaño</span>
                <span style="color: #c34100;">PSM-EN 4 Escaños</span>
                <span style="color: #FF0D00;">UM 3 Escaños</span> 
                <span style="color: #d25644;">EU-EV 2 Escaños</span>
                <span style="color: #00a29f;">AIPF 1 Escaño</span> 
                </a>
                <br><br>
                El PP las gana y sumando a AIPF y UM sacan tres escaños por encima de la mayoría absoluta
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/04/701.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 28 Escaños</span> 
    <span style="color: #FF0000;">PSOE 22 Escaños</span>
    <span style="color: #7a0b04;">BPM 4 Escaños</span>
    <span style="color: #FF0D00;">UM 3 Escaños</span>
    <span style="color: #c9c52b;">PSM-VERDS 1 Escaño</span>
    <span style="color: #00a29f;">AIPF 1 Escaño</span> 
</a>
<br><br>
El PP las gana, pero la suma de PSOE, BPM, UM y PSM-VERDS saca la mayoría absoluta exacta
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/04/701.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 35 Escaños</span> 
    <span style="color: #FF0000;">PSOE 19 Escaños</span>
    <span style="color: #c34100;">PSM 5 Escaños</span>
</a>
<br><br>
El PP las gana sacando cinco escaños por encima de la mayoría absoluta
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/04/701.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 20 Escaños</span> 
    <span style="color: #FF0000;">PSOE 15 Escaños</span>
    <span style="color: #800080;">PODEMOS 10 Escaños</span>
    <span style="color: #b9bf01;">MÉS 6 Escaños</span>
    <span style="color: #62d2b1;">El PI 3 Escaños</span>
    <span style="color: #244a3c;">MXME 3 Escaños</span>
    <span style="color: #FF7F00;">CS 2 Escaños</span>
</a>
<br><br>
El PP las gana, pero la suma de PSOE, PODEMOS, MÉS, MXME y GxF-PSOE saca cuatro escaños por encima de la mayoría absoluta
<br><br>

2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/04/701.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 20 Escaños</span>
    <span style="color: #0000FF;">PP 16 Escaños</span> 
    <span style="color: #800080;">PODEMOS 6 Escaños</span>
    <span style="color: #FF7F00;">CS 5 Escaños</span>
    <span style="color: #b9bf01;">MÉS 4 Escaños</span>
    <span style="color: #008000;">VOX 3 Escaños</span>
    <span style="color: #62d2b1;">El PI 3 Escaños</span>
    <span style="color: #244a3c;">MXME 2 Escaños</span>
</a>
<br><br>
El PSOE las gana y sumando a PODEMOS, MÉS, MXME y GxF-PSOE sacan dos escaños por encima de la mayoría absoluta
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/04/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 25 Escaños</span> 
    <span style="color: #FF0000;">PSOE 18 Escaños</span>
    <span style="color: #008000;">VOX 8 Escaños</span>
    <span style="color: #b9bf01;">MÉS 4 Escaños</span>
    <span style="color: #244a3c;">MXME 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #00a29f;">SA UNIÓ 1 Escaño</span> 
</a>
<br><br>
El PP las gana y con la abstención de VOX y el sí de SA UNIÓ saca cuatro escaños por encima de la mayoría absoluta
<br><br>
En conclusión, Baleares es una comunidad autónoma 
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Baleares</title>
            <style>
                body {
    font-family: Arial, sans-serif; 
    background: url('https://i.pinimg.com/736x/3f/14/c4/3f14c4421a628c3320da197bd6ce6e1e.jpg') no-repeat center center fixed;
    background-size: cover;
    margin: 0;
    padding: 20px;
    color: #fff;
}

.header {
    text-align: center;
    background: #d6eaf8; /* Color azul claro para el header */
    padding: 10px;
    border-radius: 10px;
}

.imagenes {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 15px;
    margin-top: 20px;
    background: rgba(0, 0, 0, 0.5);
    padding: 10px;
    border-radius: 10px;
}

.imagenes div {
    text-align: center;
}

.nombre {
    font-size: 1em;
    margin-top: 5px;
}

.escaños {
    color: black; /* Mantener "1 Escaño" en blanco */
    font-weight: bold;
}
            </style>
        </head>
        <body>
            ${provinciaHtml}
        </body>
        </html>
    `);
    nuevaVentana.document.close();

}
}
function abrirVentanaEscenario59(provincia) {
    if (provincia === "Mallorca") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Mallorca <span class="escaños">33 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1983: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_1983" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 13 Escaños</span> 
                <span style="color: #ADD8E6;">AP-PDP-UL 12 Escaños</span> 
                <span style="color: #FF0D00;">UM 6 Escaños</span>
                <span style="color: #c34100;">PSM 2 Escaños</span>  
                </a>
                <br><br>
                El PSOE sube dos escaños y el PP un escaño, por lo que la suma de AP-PDP-UL y UM saca tres escaños de ventaja a la suma de PSOE y PSM
                <br><br>
                1987: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_1987" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                    <span style="color: #ADD8E6;">AP-PL 13 Escaños</span>
                    <span style="color: #FF0000;">PSOE 11 Escaños</span>
                    <span style="color: #FF0D00;">UM 4 Escaños</span>
                <span style="color: #006400;">CDS 3 Escaños</span>
                <span style="color: #c34100;">PSM-EN 2 Escaños</span>  
                </a>
                <br><br>
                IGUAL
                <br><br>
                1991: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_1991" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP-UM 18 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 11 Escaños</span>
                    <span style="color: #c34100;">PSM-NM 3 Escaños</span>  
                    <span style="color: #d0a60f;">UIM 1 Escaños</span>  
                </a>
                <br><br>
                IGUAL
                <br><br>
                1995: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_1995" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 16 Escaños</span> 
                <span style="color: #FF0000;">PSOE 8 Escaño</span>
                <span style="color: #c34100;">PSM-NM-NI 5 Escaños</span> 
                <span style="color: #FF0D00;">UM 2 Escaños</span>
                <span style="color: #d25644;">IU 2 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1999: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 16 Escaños</span> 
                <span style="color: #FF0000;">PSOE 8 Escaño</span>
                <span style="color: #c34100;">PSM-EN 4 Escaños</span> 
                <span style="color: #FF0D00;">UM 3 Escaños</span>
                <span style="color: #d25644;">EU-EV 2 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                2003: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_2003" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 16 Escaños</span> 
                <span style="color: #FF0000;">PSOE 9 Escaño</span>
                <span style="color: #FF0D00;">UM 3 Escaños</span>
                <span style="color: #c34100;">PSM-EN 3 Escaños</span> 
                <span style="color: #d25644;">EU-EV 2 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/04/701.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 16 Escaños</span> 
    <span style="color: #FF0000;">PSOE 10 Escaños</span>
    <span style="color: #7a0b04;">BPM 4 Escaños</span>
    <span style="color: #FF0D00;">UM 3 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/04/701.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 19 Escaños</span> 
    <span style="color: #FF0000;">PSOE 10 Escaños</span>
    <span style="color: #c34100;">PSM-IV-EXM 4 Escaños</span> 
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/04/701.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 10 Escaños</span> 
    <span style="color: #FF0000;">PSOE 7 Escaños</span>
    <span style="color: #b9bf01;">MÉS 6 Escaños</span>
    <span style="color: #800080;">PODEMOS 5 Escaños</span>
    <span style="color: #62d2b1;">El PI 3 Escaños</span>
    <span style="color: #FF7F00;">CS 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/17/12.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 10 Escaños</span>
    <span style="color: #0000FF;">PP 7 Escaños</span> 
    <span style="color: #b9bf01;">MÉS 4 Escaños</span>
    <span style="color: #FF7F00;">CS 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 3 Escaños</span>
    <span style="color: #008000;">VOX 3 Escaños</span>
    <span style="color: #62d2b1;">El PI 3 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/17/12/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 13 Escaños</span> 
    <span style="color: #FF0000;">PSOE 10 Escaños</span>
    <span style="color: #008000;">VOX 6 Escaños</span>
    <span style="color: #b9bf01;">MÉS 4 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Mallorca es una isla 

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Mallorca</title>
            <style>
                body {
    font-family: Arial, sans-serif; 
    background: url('https://i.pinimg.com/736x/3f/14/c4/3f14c4421a628c3320da197bd6ce6e1e.jpg') no-repeat center center fixed;
    background-size: cover;
    margin: 0;
    padding: 20px;
    color: #fff;
}

.header {
    text-align: center;
    background: #d6eaf8; /* Color azul claro para el header */
    padding: 10px;
    border-radius: 10px;
}

.imagenes {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 15px;
    margin-top: 20px;
    background: rgba(0, 0, 0, 0.5);
    padding: 10px;
    border-radius: 10px;
}

.imagenes div {
    text-align: center;
}

.nombre {
    font-size: 1em;
    margin-top: 5px;
}

.escaños {
    color: black; /* Mantener "1 Escaño" en blanco */
    font-weight: bold;
}
            </style>
        </head>
        <body>
            ${provinciaHtml}
        </body>
        </html>
    `);
    nuevaVentana.document.close();

}
if (provincia === "Menorca") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Menorca <span class="escaños">13 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_1983" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 5 Escaños</span> 
                <span style="color: #ADD8E6;">AP-PDP-UL 5 Escaños</span> 
                <span style="color: #c34100;">PSM 2 Escaños</span>  
                <span style="color: #82b47f;">CIM 1 Escaño</span>
                </a>
                <br><br>
                AP-PDP-UL gana un escaño, pero la suma de PSOE y PSM saca un escaño de ventaja a la suma de AP-PDP-UL y CIM
                <br><br>
                1987: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_1987" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                    <span style="color: #ADD8E6;">AP-PL 5 Escaños</span>
                    <span style="color: #FF0000;">PSOE 5 Escaños</span>
                    <span style="color: #d2581b;">EEM 2 Escaños</span>
                <span style="color: #006400;">CDS 1 Escaño</span> 
                </a>
                <br><br>
                IGUAL
                <br><br>
                1991: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_1991" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 6 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 5 Escaños</span>
                    <span style="color: #d2581b;">EEM 2 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1995: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_1995" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 7 Escaños</span> 
                <span style="color: #FF0000;">PSOE 4 Escaños</span>
                <span style="color: #c34100;">PSM-NM-NI 1 Escaño</span> 
                <span style="color: #d25644;">IU 1 Escaño</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1999: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 6 Escaños</span> 
                <span style="color: #FF0000;">PSOE 5 Escaños</span>
                <span style="color: #c34100;">PSM-EN 1 Escaño</span> 
                <span style="color: #d25644;">EM-EU 1 Escaño</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                2003: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_2003" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 6 Escaños</span> 
                <span style="color: #FF0000;">PSOE 6 Escaño</span>
                <span style="color: #c34100;">PSM-EN 1 Escaño</span> 
                </a>
                <br><br>
                IGUAL
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/04/702.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 6 Escaños</span> 
    <span style="color: #FF0000;">PSOE 6 Escaños</span>
    <span style="color: #7a0b04;">BPM 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/04/702.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 8 Escaños</span> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #c34100;">PSM-EN 1 Escaño</span> 
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/04/702.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #244a3c;">MXME 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/04/702.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #244a3c;">MXME 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/04/02/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #244a3c;">MXME 2 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Menorca es una isla 
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Menorca</title>
            <style>
                body {
    font-family: Arial, sans-serif; 
    background: url('https://i.pinimg.com/736x/3f/14/c4/3f14c4421a628c3320da197bd6ce6e1e.jpg') no-repeat center center fixed;
    background-size: cover;
    margin: 0;
    padding: 20px;
    color: #fff;
}

.header {
    text-align: center;
    background: #d6eaf8; /* Color azul claro para el header */
    padding: 10px;
    border-radius: 10px;
}

.imagenes {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 15px;
    margin-top: 20px;
    background: rgba(0, 0, 0, 0.5);
    padding: 10px;
    border-radius: 10px;
}

.imagenes div {
    text-align: center;
}

.nombre {
    font-size: 1em;
    margin-top: 5px;
}

.escaños {
    color: black; /* Mantener "1 Escaño" en blanco */
    font-weight: bold;
}
            </style>
        </head>
        <body>
            ${provinciaHtml}
        </body>
        </html>
    `);
    nuevaVentana.document.close();

}
if (provincia === "Ibiza") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Ibiza <span class="escaños">12 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://www.datoselecciones.com/comunidad-valenciana-parlamento-1983/alicante" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #ADD8E6;">AP-PDP-UL 7 Escaños</span> 
                <span style="color: #FF0000;">PSOE 4 Escaños</span> 
                <span style="color: #7dabcd;">PDL 1 Escaño</span>  
                </a>
                <br><br>
                AP-PDP-UL gana un escaño, por lo que la suma de AP-PDP-UL y PDL dobla en escaños al PSOE
                <br><br>
                1987: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_1987" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                    <span style="color: #ADD8E6;">AP-PL 7 Escaños</span> 
                <span style="color: #FF0000;">PSOE 4 Escaños</span> 
                <span style="color: #006400;">CDS 1 Escaño</span>  
                </a>
                <br><br>
                IGUAL
                <br><br>
                1991: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_1991" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 7 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 4 Escaños</span>
                    <span style="color: #045755;">FIEF 1 Escaño</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1995: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_1995" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 7 Escaños</span> 
                <span style="color: #FF0000;">PSOE 4 Escaños</span>
                <span style="color: #77bf1f;">ELS VERDS 1 Escaño</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1999: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 6 Escaños</span> 
                <span style="color: #FF0000;">PACTO PROGRESISTA 6 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                2003: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_2003" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 7 Escaños</span> 
                <span style="color: #FF0000;">PACTO PROGRESISTA 5 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/04/703.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 6 Escaños</span> 
    <span style="color: #FF0000;">PSOE-EXC 6 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/04/703.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 8 Escaños</span> 
    <span style="color: #FF0000;">PSOE-PACTE 4 Escaños</span> 
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/04/703.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #800080;">PODEMOS 3 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/04/703.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/04/03/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 7 Escaños</span> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Ibiza es una isla 
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Ibiza</title>
            <style>
                body {
    font-family: Arial, sans-serif; 
    background: url('https://i.pinimg.com/736x/3f/14/c4/3f14c4421a628c3320da197bd6ce6e1e.jpg') no-repeat center center fixed;
    background-size: cover;
    margin: 0;
    padding: 20px;
    color: #fff;
}

.header {
    text-align: center;
    background: #d6eaf8; /* Color azul claro para el header */
    padding: 10px;
    border-radius: 10px;
}

.imagenes {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 15px;
    margin-top: 20px;
    background: rgba(0, 0, 0, 0.5);
    padding: 10px;
    border-radius: 10px;
}

.imagenes div {
    text-align: center;
}

.nombre {
    font-size: 1em;
    margin-top: 5px;
}

.escaños {
    color: black; /* Mantener "1 Escaño" en blanco */
    font-weight: bold;
}
            </style>
        </head>
        <body>
            ${provinciaHtml}
        </body>
        </html>
    `);
    nuevaVentana.document.close();

}
if (provincia === "Formentera") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Formentera <span class="escaños">1 Escaño</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_1983" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 1 Escaño</span> 
                </a>
                <br><br>
                IGUAL
                <br><br>
                1987: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_1987" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                    <span style="color: #FF0000;">PSOE 1 Escaño</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1991: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_1991" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 1 Escaño</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1995: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_1995" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #00a29f;">AIPF 1 Escaño</span> 
                </a>
                <br><br>
                IGUAL
                <br><br>
                1999: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #b85441;">COP 1 Escaño</span> 
                </a>
                <br><br>
                IGUAL
                <br><br>
                2003: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_2003" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #00a29f;">AIPF 1 Escaño</span> 
                </a>
                <br><br>
                IGUAL
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/04/704.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #00a29f;">AIPF 1 Escaño</span> 
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/04/704.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">GxF-PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/04/704.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">GxF-PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/04/704.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">GxF-PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/04/04/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #00a29f;">SA UNIÓ 1 Escaño</span> 
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Formentera es una isla 
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Formentera</title>
            <style>
                body {
    font-family: Arial, sans-serif; 
    background: url('https://i.pinimg.com/736x/3f/14/c4/3f14c4421a628c3320da197bd6ce6e1e.jpg') no-repeat center center fixed;
    background-size: cover;
    margin: 0;
    padding: 20px;
    color: #fff;
}

.header {
    text-align: center;
    background: #d6eaf8; /* Color azul claro para el header */
    padding: 10px;
    border-radius: 10px;
}

.imagenes {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 15px;
    margin-top: 20px;
    background: rgba(0, 0, 0, 0.5);
    padding: 10px;
    border-radius: 10px;
}

.imagenes div {
    text-align: center;
}

.nombre {
    font-size: 1em;
    margin-top: 5px;
}

.escaños {
    color: black; /* Mantener "1 Escaño" en blanco */
    font-weight: bold;
}
            </style>
        </head>
        <body>
            ${provinciaHtml}
        </body>
        </html>
    `);
    nuevaVentana.document.close();

}
if (provincia === "Baleares") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Baleares <span class="escaños">59 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_1983" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #ADD8E6;">AP-PDP-UL 24 Escaños</span> 
                <span style="color: #FF0000;">PSOE 23 Escaños</span> 
                <span style="color: #FF0D00;">UM 6 Escaños</span>
                <span style="color: #c34100;">PSM 4 Escaños</span>  
                <span style="color: #7dabcd;">PDL 1 Escaño</span> 
                <span style="color: #82b47f;">CIM 1 Escaño</span>
                </a>
                <br><br>
                AP-PDL-UL sube tres escaños y el PSOE dos, por lo que la suma de AP-PDP-PL, UM, PDL y CIM saca dos escaños por encima de la mayoría absoluta
                <br><br>
                1987: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_1987" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                    <span style="color: #ADD8E6;">AP-PL 25 Escaños</span>
                    <span style="color: #FF0000;">PSOE 21 Escaños</span>
                <span style="color: #006400;">CDS 5 Escaños</span>
                <span style="color: #FF0D00;">UM 4 Escaños</span>
                <span style="color: #c34100;">PSM-EN 2 Escaños</span>  
                <span style="color: #d2581b;">EEM 2 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1991: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_1991" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP-UM 31 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 21 Escaños</span>
                    <span style="color: #c34100;">PSM-NM 3 Escaños</span> 
                    <span style="color: #d2581b;">EEM 2 Escaños</span>
                    <span style="color: #d0a60f;">UIM 1 Escaños</span>  
                    <span style="color: #045755;">FIEF 1 Escaño</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1995: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_1995" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 30 Escaños</span> 
                <span style="color: #FF0000;">PSOE 16 Escaño</span>
                <span style="color: #c34100;">PSM-NM-NI 6 Escaños</span> 
                <span style="color: #d25644;">IU 3 Escaños</span>
                <span style="color: #FF0D00;">UM 2 Escaños</span>
                <span style="color: #77bf1f;">ELS VERDS 1 Escaño</span>
                <span style="color: #00a29f;">AIPF 1 Escaño</span> 
                </a>
                <br><br>
                IGUAL
                <br><br>
                1999: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 28 Escaños</span> 
                <span style="color: #FF0000;">PSOE 19 Escaños</span>
                <span style="color: #c34100;">PSM-EN 5 Escaños</span> 
                <span style="color: #FF0D00;">UM 3 Escaños</span>
                <span style="color: #d25644;">EU 3 Escaños</span>
                <span style="color: #b85441;">COP 1 Escaño</span> 
                </a>
                <br><br>
                IGUAL
                <br><br>
                2003: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_las_Islas_Baleares_de_2003" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 29 Escaños</span> 
                <span style="color: #FF0000;">PSOE 20 Escaño</span>
                <span style="color: #c34100;">PSM-EN 4 Escaños</span>
                <span style="color: #FF0D00;">UM 3 Escaños</span> 
                <span style="color: #d25644;">EU-EV 2 Escaños</span>
                <span style="color: #00a29f;">AIPF 1 Escaño</span> 
                </a>
                <br><br>
                IGUAL
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/04/701.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 28 Escaños</span> 
    <span style="color: #FF0000;">PSOE 22 Escaños</span>
    <span style="color: #7a0b04;">BPM 4 Escaños</span>
    <span style="color: #FF0D00;">UM 3 Escaños</span>
    <span style="color: #c9c52b;">PSM-VERDS 1 Escaño</span>
    <span style="color: #00a29f;">AIPF 1 Escaño</span> 
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/04/701.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 35 Escaños</span> 
    <span style="color: #FF0000;">PSOE 19 Escaños</span>
    <span style="color: #c34100;">PSM 5 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/04/701.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 20 Escaños</span> 
    <span style="color: #FF0000;">PSOE 15 Escaños</span>
    <span style="color: #800080;">PODEMOS 10 Escaños</span>
    <span style="color: #b9bf01;">MÉS 6 Escaños</span>
    <span style="color: #62d2b1;">El PI 3 Escaños</span>
    <span style="color: #244a3c;">MXME 3 Escaños</span>
    <span style="color: #FF7F00;">CS 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/04/701.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 20 Escaños</span>
    <span style="color: #0000FF;">PP 16 Escaños</span> 
    <span style="color: #800080;">PODEMOS 6 Escaños</span>
    <span style="color: #FF7F00;">CS 5 Escaños</span>
    <span style="color: #b9bf01;">MÉS 4 Escaños</span>
    <span style="color: #008000;">VOX 3 Escaños</span>
    <span style="color: #62d2b1;">El PI 3 Escaños</span>
    <span style="color: #244a3c;">MXME 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/04/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 25 Escaños</span> 
    <span style="color: #FF0000;">PSOE 18 Escaños</span>
    <span style="color: #008000;">VOX 8 Escaños</span>
    <span style="color: #b9bf01;">MÉS 4 Escaños</span>
    <span style="color: #244a3c;">MXME 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #00a29f;">SA UNIÓ 1 Escaño</span> 
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Baleares es una comunidad autónoma 
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Baleares</title>
            <style>
                body {
    font-family: Arial, sans-serif; 
    background: url('https://i.pinimg.com/736x/3f/14/c4/3f14c4421a628c3320da197bd6ce6e1e.jpg') no-repeat center center fixed;
    background-size: cover;
    margin: 0;
    padding: 20px;
    color: #fff;
}

.header {
    text-align: center;
    background: #d6eaf8; /* Color azul claro para el header */
    padding: 10px;
    border-radius: 10px;
}

.imagenes {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 15px;
    margin-top: 20px;
    background: rgba(0, 0, 0, 0.5);
    padding: 10px;
    border-radius: 10px;
}

.imagenes div {
    text-align: center;
}

.nombre {
    font-size: 1em;
    margin-top: 5px;
}

.escaños {
    color: black; /* Mantener "1 Escaño" en blanco */
    font-weight: bold;
}
            </style>
        </head>
        <body>
            ${provinciaHtml}
        </body>
        </html>
    `);
    nuevaVentana.document.close();

}
}