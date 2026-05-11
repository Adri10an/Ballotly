    function abrirVentana(provincia) {

if (provincia === "A Coruña") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">A Coruña <span class="escaños">22 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1981: <a href="https://www.datoselecciones.com/galicia-parlamento-1981/a-coruna" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #ADD8E6;">AP 9 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 6 Escaños</span> 
                    <span style="color: #FFA500;">UCD 5 Escaños</span> 
                    <span style="color: #74b1e0;">BNG-PSG 1 Escaño</span>
                    <span style="color: #FF0D00;">PCE 1 Escaño</span>
                </a>
                <br><br>
                AP las gana y sumando a UCD sacan seis escaños de ventaja a la suma de PSOE, BNG-PSG y PCE. AP gana al PSOE por 34160 votos, el PSOE gana a UCD por 17536 votos, UCD casi triplica a BNG-PSG en votos y el BNG-PSG gana al PCE por 12815 votos
                <br><br>
                1985: <a href="https://www.datoselecciones.com/galicia-parlamento-1985/a-coruna" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                    <span style="color: #ADD8E6;">AP-PDP-PL-CDG 10 Escaños</span>
                    <span style="color: #FF0000;">PSOE 8 Escaños</span>
                    <span style="color: #1f5d79;">CG 2 Escaños</span>
                <span style="color: #648434;">PSG-EG 1 Escaño</span>
                <span style="color: #74b1e0;">BNG 1 Escaño</span>
                </a>
                <br><br>
                AP-PDP-PL-CDG las gana y sumando a <a href="https://es.wikipedia.org/wiki/Coalici%C3%B3n_Galega" target="_blank">CG</a>
 sacan dos escaños de ventaja a la suma de PSOE, <a href="https://es.wikipedia.org/wiki/Partido_Socialista_Galego-Esquerda_Galega" target="_blank">PSG-EG</a>
 y BNG. AP-PDP-PL-CG gana al PSOE por 28109 votos, el PSOE triplica a CG en votos, CG gana al PSG-EG por 21327 votos y el PSG-EG gana al BNG por 2503 votos
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 24 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1989: <a href="https://www.datoselecciones.com/galicia-parlamento-1989/a-coruna" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 11 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 10 Escaños</span>
                    <span style="color: #74b1e0;">BNG 2 Escaños</span> 
                    <span style="color: #648434;">PSG-EG 1 Escaño</span>
                </a>
                <br><br>
                El PP las gana, pero la suma de PSOE, BNG y PSG-EG le saca dos escaños de ventaja. El PP gana al PSOE por 28877 votos, el PSOE triplica al BNG en votos y el BNG dobla al PSG-EG en votos
                <br><br>
                1993: <a href="https://www.datoselecciones.com/galicia-parlamento-1993/a-coruna" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 13 Escaños</span> 
                <span style="color: #FF0000;">PSOE 6 Escaños</span>
                <span style="color: #74b1e0;">BNG 5 Escaños</span> 
                </a>
                <br><br>
                El PP las gana sacando dos escaños de ventaja a la suma de PSOE y BNG. El PP gana al PSOE por 140034 votos y el PSOE gana al BNG por 28831 votos
                <br><br>
                1997: <a href="https://www.datoselecciones.com/galicia-parlamento-1997/a-coruna" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 13 Escaños</span> 
                <span style="color: #74b1e0;">BNG 6 Escaños</span> 
                <span style="color: #FF0000;">PSOE 5 Escaños</span>
                </a>
                <br><br>
                El PP las gana sacando dos escaños de ventaja a la suma de BNG y PSOE. El PP gana al BNG por 149447 votos y el BNG gana al PSOE por 38969 votos.
                <br><br>
                2001: <a href="https://www.datoselecciones.com/galicia-parlamento-2001/a-coruna" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 12 Escaños</span> 
                <span style="color: #74b1e0;">BNG 6 Escaños</span> 
                <span style="color: #FF0000;">PSOE 6 Escaños</span>
                </a>
                <br><br>
                El PP las gana empatando en escaños a la suma de BNG y PSOE. El PP dobla al BNG en votos y el BNG gana al PSOE por 7154 votos
                <br><br>
                2005: <a href="https://www.datoselecciones.com/galicia-parlamento-2005/a-coruna" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 11 Escaños</span> 
    <span style="color: #FF0000;">PSOE 8 Escaños</span>
    <span style="color: #74b1e0;">BNG 5 Escaños</span> 
</a>
<br><br>
El PP las gana, pero la suma de PSOE y BNG saca dos escaños de ventaja al PP. El PP gana al PSOE por 64842 votos y el PSOE gana al BNG por 84740 votos.
<br><br>

2009: <a href="https://resultados.elpais.com/elecciones/2009/autonomicas/11/15.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 12 Escaños</span> 
    <span style="color: #FF0000;">PSOE 8 Escaños</span>
    <span style="color: #74b1e0;">BNG 4 Escaños</span> 
</a>
<br><br>
El PP las gana empatando en escaños a la suma de PSOE y BNG. El PP gana al PSOE por 100000 votos y el PSOE gana al BNG por 99435 votos
<br><br>

2012: <a href="https://resultados.elpais.com/elecciones/2012/autonomicas/11/15.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 13 Escaños</span> 
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #2e7a6c;">AGE 4 Escaños</span>
    <span style="color: #74b1e0;">BNG 2 Escaños</span> 
</a>
<br><br>
El PP las gana sacando dos escaños de ventaja a la suma de PSOE, <a href="https://es.wikipedia.org/wiki/Alternativa_Galega_de_Esquerda" target="_blank">AGE</a>
 y BNG. El PP dobla al PSOE en votos, el PSOE gana a AGE por 11373 votos y AGE gana al BNG por 40509 votos
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 25 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2016: <a href="https://resultados.elpais.com/elecciones/2016/autonomicas/11/15.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 13 Escaños</span> 
    <span style="color: #3d476b;">EN MAREA 5 Escaños</span>
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #74b1e0;">BNG-NÓS 2 Escaños</span> 
</a>
<br><br>
El PP las gana sacando un escaño de ventaja a la suma de EN MAREA, PSOE y BNG-NÓS.El PP dobla a EN MAREA en votos, EN MAREA gana al PSOE por 12959 votos y el PSOE gana a BNG-NÓS por 48688 votos
<br><br>

2020: <a href="https://resultados.elpais.com/elecciones/2020/autonomicas/11/15.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 14 Escaños</span> 
    <span style="color: #74b1e0;">BNG 7 Escaños</span>
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
</a>
<br><br>
El PP las gana sacando tres escaños de ventaja a la suma de BNG y PSOE. El PP gana al BNG por 129719 votos y el BNG gana al PSOE por 43374 votos
<br><br>
2024: <a href="https://elpais.com/espana/elecciones/autonomicas/11/15/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 13 Escaños</span> 
    <span style="color: #74b1e0;">BNG 9 Escaños</span>
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
</a>
<br><br>
El PP las gana sacando un escaño de ventaja a la suma de BNG y PSOE. El PP gana al BNG por 93189 votos y el BNG dobla al PSOE en votos
<br><br>
En conclusión, A Coruña es una provincia 
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>A Coruña</title>
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
if (provincia === "Pontevedra") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Pontevedra <span class="escaños">19 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1981: <a href="https://www.datoselecciones.com/galicia-parlamento-1981/pontevedra" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #ADD8E6;">AP 7 Escaños</span> 
                    <span style="color: #FFA500;">UCD 6 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 4 Escaños</span> 
                    <span style="color: #648434;">EG 1 Escaño</span>
                    <span style="color: #74b1e0;">BNG-PSG 1 Escaño</span>
                </a>
                <br><br>
                AP las gana y sumando a UCD sacan siete escaños de ventaja a la suma de PSOE, EG y BNG-PSG. AP gana a UCD por tan solo 1294 votos, UCD gana al PSOE por 34259 votos, el PSOE casi triplica a EG en votos y EG gana al BNG-PSG por 1338 votos
                <br><br>
                1985: <a href="https://www.datoselecciones.com/galicia-parlamento-1985/pontevedra" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                    <span style="color: #ADD8E6;">AP-PDP-PL-CDG 9 Escaños</span>
                    <span style="color: #FF0000;">PSOE 6 Escaños</span>
                    <span style="color: #1f5d79;">CG 2 Escaños</span>
                <span style="color: #648434;">PSG-EG 2 Escaños</span>
                </a>
                <br><br>
                AP-PDP-PL-CG las gana y sumando a CG sacan tres escaños de ventaja a la suma de PSOE y PSG-EG. AP-PDP-PL-CDG gana al PSOE por 62016 votos, el PSOE triplica a CG en votos y CG gana a PSG por tan solo 1139 votos
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 21 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1989: <a href="https://www.datoselecciones.com/galicia-parlamento-1989/pontevedra" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 11 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 7 Escaños</span>
                    <span style="color: #74b1e0;">BNG 2 Escaños</span> 
                    <span style="color: #648434;">PSG-EG 1 Escaño</span>
                </a>
                <br><br>
                El PP las gana sacando un escaño de ventaja a la suma de PSOE, BNG y PSG-EG. El PP gana al PSOE por 64507 votos, el PSOE triplica al BNG en votos y el BNG gana al PSG-EG por 12317 votos
                <br><br>
                1993: <a href="https://www.datoselecciones.com/galicia-parlamento-1993/pontevedra" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 12 Escaños</span> 
                <span style="color: #FF0000;">PSOE 5 Escaños</span>
                <span style="color: #74b1e0;">BNG 4 Escaños</span> 
                </a>
                <br><br>
                El PP las gana sacando tres escaños de ventaja a la suma de PSOE y BNG. El PP dobla al PSOE en votos y el PSOE gana al BNG por 17384 votos
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 22 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1997: <a href="https://www.datoselecciones.com/galicia-parlamento-1997/pontevedra" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 12 Escaños</span> 
                <span style="color: #74b1e0;">BNG 6 Escaños</span> 
                <span style="color: #FF0000;">PSOE 4 Escaños</span>
                </a>
                <br><br>
                El PP las gana sacando dos escaños de ventaja a la suma de BNG y PSOE. El PP gana al BNG por 124396 votos y el BNG gana al PSOE por 40303 votos
                <br><br>
                2001: <a href="https://www.datoselecciones.com/galicia-parlamento-2001/pontevedra" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 12 Escaños</span> 
                <span style="color: #74b1e0;">BNG 5 Escaños</span> 
                <span style="color: #FF0000;">PSOE 5 Escaños</span>
                </a>
                <br><br>
                El PP las gana sacando dos escaños de ventaja a la suma de BNG y PSOE. El PP dobla al BNG en votos y el BNG gana al PSOE por 6958 votos
                <br><br>
                2005: <a href="https://www.datoselecciones.com/galicia-parlamento-2005/pontevedra" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 10 Escaños</span> 
    <span style="color: #FF0000;">PSOE 8 Escaños</span>
    <span style="color: #74b1e0;">BNG 4 Escaños</span> 
</a>
<br><br>
El PP las gana, pero la suma de PSOE y BNG le saca dos escaños de ventaja. El PP gana al PSOE por 56743 votos y el PSOE gana al BNG por 78440 votos
<br><br>

2009: <a href="https://resultados.elpais.com/elecciones/2009/autonomicas/11/36.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 11 Escaños</span> 
    <span style="color: #FF0000;">PSOE 7 Escaños</span>
    <span style="color: #74b1e0;">BNG 4 Escaños</span> 
</a>
<br><br>
El PP las gana empatando en escaños a la suma del PSOE y BNG. El PP gana al PSOE por 92606 votos y el PSOE gana al BNG por 76789 votos
<br><br>

2012: <a href="https://resultados.elpais.com/elecciones/2012/autonomicas/11/36.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 11 Escaños</span> 
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #2e7a6c;">AGE 3 Escaños</span>
    <span style="color: #74b1e0;">BNG 3 Escaños</span> 
</a>
<br><br>
El PP las gana empatando en escaños a la suma de PSOE, AGE y BNG. El PP dobla al PSOE en votos, el PSOE gana a AGE por 30469 votos y AGE gana al BNG por 12417 votos
<br><br>
2016: <a href="https://resultados.elpais.com/elecciones/2016/autonomicas/11/36.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 11 Escaños</span> 
    <span style="color: #3d476b;">EN MAREA 5 Escaños</span>
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #74b1e0;">BNG-NÓS 2 Escaños</span> 
</a>
<br><br>
El PP las gana empatando en escaños a la suma de EN MAREA, PSOE y BNG-NÓS.El PP gana a EN MAREA por 104922 votos, EN MAREA gana al PSOE por 17781 votos y el PSOE dobla a BNG-NÓS en votos
<br><br>

2020: <a href="https://resultados.elpais.com/elecciones/2020/autonomicas/11/36.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 11 Escaños</span> 
    <span style="color: #74b1e0;">BNG 6 Escaños</span>
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
</a>
<br><br>
El PP las gana empatando en escaños a la suma de BNG y PSOE. El PP gana al BNG por 80286 votos y el BNG gana al PSOE por 7167 votos
<br><br>
2024: <a href="https://elpais.com/espana/elecciones/autonomicas/11/36/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 11 Escaños</span> 
    <span style="color: #74b1e0;">BNG 8 Escaños</span>
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
</a>
<br><br>
El PP las gana empatando en escaños a la suma de BNG y PSOE. El PP gana al BNG por 50177 votos y el BNG dobla al PSOE en votos
<br><br>
En conclusión, Pontevedra es una provincia 
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Pontevedra</title>
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
if (provincia === "Lugo") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Lugo <span class="escaños">15 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1981: <a href="https://www.datoselecciones.com/galicia-parlamento-1981/lugo" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 6 Escaños</span>
        <span style="color: #ADD8E6;">AP 5 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 3 Escaños</span>  
                    <span style="color: #74b1e0;">BNG-PSG 1 Escaño</span>
                </a>
                <br><br>
                UCD las gana y sumando a AP sacan siete escaños de ventaja a la suma de PSOE y BNG-PSG. UCD gana a AP por 5116 votos, AP gana al PSOE por 21241 votos y el PSOE dobla a BNG-PSG en votos
                <br><br>
                1985: <a href="https://www.datoselecciones.com/galicia-parlamento-1985/lugo" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                    <span style="color: #ADD8E6;">AP-PDP-PL-CDG 8 Escaños</span>
                    <span style="color: #FF0000;">PSOE 4 Escaños</span>
                    <span style="color: #1f5d79;">CG 3 Escaños</span>
                </a>
                <br><br>
                AP-PDP-PL-CDG las gana y sumando a CG sacan siete escaños de ventaja al PSOE. AP-PDP-PL-CDG gana al PSOE por 39277 votos y el PSOE gana a CG por 7547 votos
                <br><br>
                1989: <a href="https://www.datoselecciones.com/galicia-parlamento-1989/lugo" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 8 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 5 Escaños</span>
                    <span style="color: #1f5d79;">CG 1 Escaño</span>
                    <span style="color: #74b1e0;">BNG 1 Escaño</span> 
                </a>
                <br><br>
                El PP las gana y sumando a CG sacan tres escaños de ventaja a la suma de PSOE y BNG. El PP gana al PSOE por 36088 votos, el PSOE cuadruplica a CG en votos y CG gana al BNG por tan solo 1348 votos
                <br><br>
                1993: <a href="https://www.datoselecciones.com/galicia-parlamento-1993/lugo" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 9 Escaños</span> 
                <span style="color: #FF0000;">PSOE 4 Escaños</span>
                <span style="color: #74b1e0;">BNG 2 Escaños</span> 
                </a>
                <br><br>
                El PP las gana sacando tres escaños de ventaja a la suma de PSOE y BNG. El PP dobla al PSOE en votos y el PSOE gana al BNG por 14432 votos
                <br><br>
                1997: <a href="https://www.datoselecciones.com/galicia-parlamento-1997/lugo" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 9 Escaños</span> 
                <span style="color: #74b1e0;">BNG 3 Escaños</span> 
                <span style="color: #FF0000;">PSOE 3 Escaños</span>
                </a>
                <br><br>
                El PP las gana sacando tres escaños de ventaja a la suma de BNG y PSOE. El PP casi triplica al BNG en votos y el BNG gana al PSOE por tan solo 1910 votos
                <br><br>
                2001: <a href="https://www.datoselecciones.com/galicia-parlamento-2001/lugo" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 9 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 3 Escaños</span>
                <span style="color: #74b1e0;">BNG 3 Escaños</span> 
                </a>
                <br><br>
                El PP las gana sacando tres escaños de ventaja a la suma de BNG y PSOE. El PP dobla al BNG en votos y el BNG gana al PSOE por 4593 votos
                <br><br>
                2005: <a href="https://www.datoselecciones.com/galicia-parlamento-2005/lugo" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 8 Escaños</span> 
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #74b1e0;">BNG 2 Escaños</span> 
</a>
<br><br>
El PP las gana sacando un escaño de ventaja a la suma de PSOE y BNG. El PP gana al PSOE por 33941 votos y el PSOE dobla al BNG en votos
<br><br>

2009: <a href="https://resultados.elpais.com/elecciones/2009/autonomicas/11/27.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 8 Escaños</span> 
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #74b1e0;">BNG 2 Escaños</span> 
</a>
<br><br>
El PP las gana sacando un escaño de ventaja a la suma de PSOE y BNG. El PP gana al PSOE por 34625 votos y el PSOE dobla al BNG en votos
<br><br>

2012: <a href="https://resultados.elpais.com/elecciones/2012/autonomicas/11/27.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 9 Escaños</span> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #2e7a6c;">AGE 1 Escaño</span>
    <span style="color: #74b1e0;">BNG 1 Escaño</span> 
</a>
<br><br>
El PP las gana sacando tres escaños de ventaja a la suma de PSOE, AGE y BNG. El PP dobla al PSOE en votos, el PSOE dobla a AGE en votos y AGE gana al BNG por 2956 votos
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 14 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2016: <a href="https://resultados.elpais.com/elecciones/2016/autonomicas/11/27.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 8 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #3d476b;">EN MAREA 2 Escaños</span>
    <span style="color: #74b1e0;">BNG-NÓS 1 Escaño</span> 
</a>
<br><br>
El PP las gana sacando dos escaños de ventaja a la suma de PSOE, EN MAREA y BNG-NÓS. El PP dobla al PSOE en votos, el PSOE gana a EN MAREA por 6686 votos y EN MAREA dobla a BNG-NÓS en votos
<br><br>

2020: <a href="https://resultados.elpais.com/elecciones/2020/autonomicas/11/27.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 9 Escaños</span> 
    <span style="color: #74b1e0;">BNG 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
El PP las gana sacando cuatro escaños de ventaja a la suma de BNG y PSOE. El PP dobla al BNG en votos y el BNG gana al PSOE por 6713 votos
<br><br>
2024: <a href="https://elpais.com/espana/elecciones/autonomicas/11/27/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 8 Escaños</span> 
    <span style="color: #74b1e0;">BNG 4 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
El PP las gana sacando dos escaños de ventaja a la suma de BNG y PSOE. El PP dobla al BNG en votos y el BNG gana al PSOE por 14537 votos
<br><br>
En conclusión, Lugo es una provincia 
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Lugo</title>
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
if (provincia === "Orense") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Orense <span class="escaños">15 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1981: <a href="https://www.datoselecciones.com/galicia-parlamento-1981/ourense" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 7 Escaños</span> 
        <span style="color: #ADD8E6;">AP 5 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                </a>
                <br><br>
                UCD las gana y sumando a AP cuadruplican en escaños al PSOE. UCD gana a AP por 21026 votos y AP gana al PSOE por 16629 votos
                <br><br>
                1985: <a href="https://www.datoselecciones.com/galicia-parlamento-1985/ourense" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                    <span style="color: #ADD8E6;">AP-PDP-PL-CDG 7 Escaños</span>
                    <span style="color: #FF0000;">PSOE 4 Escaños</span>
                    <span style="color: #1f5d79;">CG 4 Escaños</span>
                </a>
                <br><br>
                AP-PDP-PL-CDG las gana y sumando a CG sacan sacan siete escaños de ventaja al PSOE. AP-PDP-PL-CDG gana al PSOE por 24870 votos y el PSOE gana a CG por 4889 votos
                <br><br>
                1989: <a href="https://www.datoselecciones.com/galicia-parlamento-1989/ourense" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 8 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 6 Escaños</span>
                    <span style="color: #1f5d79;">CG 1 Escaño</span>
                </a>
                <br><br>
                El PP las gana y sumando a CG sacan tres escaños de ventaja al PSOE. El PP gana al PSOE por 20851 votos y el PSOE quintuplica a CG en votos
                <br><br>
                1993: <a href="https://www.datoselecciones.com/galicia-parlamento-1993/ourense" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 9 Escaños</span> 
                <span style="color: #FF0000;">PSOE 4 Escaños</span>
                <span style="color: #74b1e0;">BNG 2 Escaños</span> 
                </a>
                <br><br>
                El PP las gana sacando tres escaños de ventaja a la suma de PSOE y BNG. El PP dobla al PSOE en votos y el PSOE gana al BNG por 16951 votos. 
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 14 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1997: <a href="https://www.datoselecciones.com/galicia-parlamento-1997/ourense" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 8 Escaños</span> 
                <span style="color: #74b1e0;">BNG 3 Escaños</span> 
                <span style="color: #FF0000;">PSOE 3 Escaños</span>
                </a>
                <br><br>
                El PP las gana sacando dos escaños de ventaja a la suma de BNG y PSOE. El PP dobla al BNG en votos y el BNG gana al PSOE por 3745 votos
                <br><br>
                2001: <a href="https://www.datoselecciones.com/galicia-parlamento-2001/ourense" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 8 Escaños</span> 
                <span style="color: #74b1e0;">BNG 3 Escaños</span> 
                <span style="color: #FF0000;">PSOE 3 Escaños</span>
                </a>
                <br><br>
                El PP las gana sacando dos escaños de ventaja a la suma de BNG y PSOE. El PP dobla al BNG en votos y el BNG gana al PSOE por 2085 votos
                <br><br>
                2005: <a href="https://www.datoselecciones.com/galicia-parlamento-2005/ourense" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 8 Escaños</span> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #74b1e0;">BNG 2 Escaños</span> 
</a>
<br><br>
El PP las gana sacando dos escaños de ventaja a la suma de PSOE y BNG. El PP gana al PSOE por 45433 votos y el PSOE gana al BNG por 33110 votos
<br><br>

2009: <a href="https://resultados.elpais.com/elecciones/2009/autonomicas/11/32.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 7 Escaños</span> 
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #74b1e0;">BNG 2 Escaños</span> 
</a>
<br><br>
El PP las gana empatando en escaños a la suma de PSOE y BNG. El PP gana al PSOE por 37708 votos y el PSOE gana al BNG por 36018 votos
<br><br>

2012: <a href="https://resultados.elpais.com/elecciones/2012/autonomicas/11/32.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 8 Escaños</span> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #74b1e0;">BNG 1 Escaño</span> 
    <span style="color: #2e7a6c;">AGE 1 Escaño</span>
</a>
<br><br>
El PP las gana sacando dos escaños de ventaja a la suma de PSOE, BNG y AGE. El PP dobla al PSOE en votos, el PSOE dobla al BNG en votos y el BNG gana a AGE por tan solo 1170 votos
<br><br>
2016: <a href="https://resultados.elpais.com/elecciones/2016/autonomicas/11/32.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 9 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #3d476b;">EN MAREA 2 Escaños</span>
    <span style="color: #74b1e0;">BNG-NÓS 1 Escaño</span> 
</a>
<br><br>
El PP las gana sacando cuatro escaños de ventaja a la suma de PSOE, EN MAREA y BNG-NÓS. El PP triplica al PSOE en votos, el PSOE gana a EN MAREA por 6667 votos y EN MAREA dobla a BNG-NÓS en votos 
<br><br>

2020: <a href="https://resultados.elpais.com/elecciones/2020/autonomicas/11/32.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 8 Escaños</span> 
    <span style="color: #74b1e0;">BNG 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
</a>
<br><br>
El PP las gana sacando dos escaños de ventaja a la suma de BNG y PSOE. El PP dobla al BNG en votos y el BNG gana al PSOE por tan solo 333 votos
<br><br>
2024: <a href="https://elpais.com/espana/elecciones/autonomicas/11/32/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 8 Escaños</span> 
    <span style="color: #74b1e0;">BNG 4 Escaños</span>
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    <span style="color: #c99f00;">DO 1 Escaño</span>
</a>
<br><br>
El PP las gana y sumando a DO sacan cuatro escaños de ventaja a la suma de BNG y PSOE. El PP dobla al BNG en votos, el BNG dobla al PSOE en votos y el PSOE gana a DO por 6600 votos
<br><br>
En conclusión, Orense es una provincia 
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Orense</title>
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
if (provincia === "Galicia") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Galicia <span class="escaños">71 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1981: <a href="https://www.datoselecciones.com/galicia-parlamento-1981" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #ADD8E6;">AP 26 Escaños</span> 
                    <span style="color: #FFA500;">UCD 24 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 16 Escaños</span> 
                    <span style="color: #74b1e0;">BNG-PSG 3 Escaños</span>
                    <span style="color: #648434;">EG 1 Escaño</span>
                    <span style="color: #FF0D00;">PCE 1 Escaño</span>
                </a>
                <br><br>
                AP las gana y sumando a UCD sacan catorce escaños por encima de la mayoría absoluta. (Además ganaron un voto del PSOE) 
                <br><br>
                1985: <a href="https://www.datoselecciones.com/galicia-parlamento-1985" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                    <span style="color: #ADD8E6;">AP-PDP-PL-CDG 34 Escaños</span>
                    <span style="color: #FF0000;">PSOE 22 Escaños</span>
                    <span style="color: #1f5d79;">CG 11 Escaños</span>
                <span style="color: #648434;">PSG-EG 3 Escaños</span>
                <span style="color: #74b1e0;">BNG 1 Escaño</span>
                </a>
                <br><br>
                AP-PDP-PL-CDG las gana y sumando a CG sacan nueves escaños por encima de la mayoría absoluta
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 75 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1989: <a href="https://www.datoselecciones.com/galicia-parlamento-1989" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 38 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 28 Escaños</span>
                    <span style="color: #74b1e0;">BNG 5 Escaños</span> 
                    <span style="color: #648434;">PSG-EG 2 Escaños</span>
                    <span style="color: #1f5d79;">CG 2 Escaños</span>
                </a>
                <br><br>
                El PP las gana sacando la mayoría absoluta exacta 
                <br><br>
                1993: <a href="https://www.datoselecciones.com/galicia-parlamento-1993" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 43 Escaños</span> 
                <span style="color: #FF0000;">PSOE 19 Escaños</span>
                <span style="color: #74b1e0;">BNG 13 Escaños</span> 
                </a>
                <br><br>
                El PP las gana sacando cinco escaños por encima de la mayoría absoluta
                <br><br>
                1997: <a href="https://www.datoselecciones.com/galicia-parlamento-1997" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 42 Escaños</span> 
                <span style="color: #74b1e0;">BNG 18 Escaños</span> 
                <span style="color: #FF0000;">PSOE 15 Escaños</span>
                </a>
                <br><br>
                El PP las gana sacando cuatro escaños por encima de la mayoría absoluta
                <br><br>
                2001: <a href="https://www.datoselecciones.com/galicia-parlamento-2001" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 41 Escaños</span> 
                <span style="color: #74b1e0;">BNG 17 Escaños</span> 
                <span style="color: #FF0000;">PSOE 17 Escaños</span>
                </a>
                <br><br>
                El PP las gana sacando tres escaños por encima de la mayoría absoluta
                <br><br>
                2005: <a href="https://www.datoselecciones.com/galicia-parlamento-2005" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 37 Escaños</span> 
    <span style="color: #FF0000;">PSOE 25 Escaños</span>
    <span style="color: #74b1e0;">BNG 13 Escaños</span> 
</a>
<br><br>
El PP las gana, pero pierde por primera vez la mayoría absoluta por un escaño, por lo que PSOE y BNG suman la mayoría absoluta exacta
<br><br>

2009: <a href="https://resultados.elpais.com/elecciones/2009/autonomicas/11/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 38 Escaños</span> 
    <span style="color: #FF0000;">PSOE 25 Escaños</span>
    <span style="color: #74b1e0;">BNG 12 Escaños</span> 
</a>
<br><br>
El PP las gana sacando la mayoría absoluta exacta
<br><br>

2012: <a href="https://resultados.elpais.com/elecciones/2012/autonomicas/11/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 41 Escaños</span> 
    <span style="color: #FF0000;">PSOE 18 Escaños</span>
    <span style="color: #2e7a6c;">AGE 9 Escaños</span>
    <span style="color: #74b1e0;">BNG 7 Escaños</span> 
</a>
<br><br>
El PP las gana sacando tres escaños por encima de la mayoría absoluta
<br><br>
2016: <a href="https://resultados.elpais.com/elecciones/2016/autonomicas/11/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 41 Escaños</span> 
    <span style="color: #3d476b;">EN MAREA 14 Escaños</span>
    <span style="color: #FF0000;">PSOE 14 Escaños</span>
    <span style="color: #74b1e0;">BNG-NÓS 6 Escaños</span> 
</a>
<br><br>
El PP las gana sacando tres escaños por encima de la mayoría absoluta
<br><br>

2020: <a href="https://resultados.elpais.com/elecciones/2020/autonomicas/11/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 42 Escaños</span> 
    <span style="color: #74b1e0;">BNG 19 Escaños</span>
    <span style="color: #FF0000;">PSOE 14 Escaños</span>
</a>
<br><br>
El PP las gana sacando cuatro escaños por encima de la mayoría absoluta
<br><br>
2024: <a href="https://elpais.com/espana/elecciones/autonomicas/11/15/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 40 Escaños</span> 
    <span style="color: #74b1e0;">BNG 25 Escaños</span>
    <span style="color: #FF0000;">PSOE 9 Escaños</span>
    <span style="color: #c99f00;">DO 1 Escaño</span>
</a>
<br><br>
El PP las gana sacando dos escaños por encima de la mayoría absoluta
<br><br>
En conclusión, Galicia es una comunidad autónoma
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Galicia</title>
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
function abrirVentanaEscenario75(provincia) {
    if (provincia === "A Coruña") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">A Coruña <span class="escaños">25 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1981: <a href="https://www.datoselecciones.com/galicia-parlamento-1981/a-coruna" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #ADD8E6;">AP 9 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 7 Escaños</span> 
                    <span style="color: #FFA500;">UCD 5 Escaños</span> 
                    <span style="color: #74b1e0;">BNG-PSG 2 Escaños</span>
                    <span style="color: #FF0D00;">PCE 1 Escaño</span>
                    <span style="color: #648434;">EG 1 Escaño</span>
                </a>
                <br><br>
                El PSOE y BNG suben y EG entra, por lo que la suma de AP y UCD saca tres escaños de ventaja a la suma de PSOE, BNG-PSG, PCE y EG 
                <br><br>
                1985: <a href="https://www.datoselecciones.com/galicia-parlamento-1985/a-coruna" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                    <span style="color: #ADD8E6;">AP-PDP-PL-CDG 11 Escaños</span>
                    <span style="color: #FF0000;">PSOE 9 Escaños</span>
                    <span style="color: #1f5d79;">CG 2 Escaños</span>
                <span style="color: #648434;">PSG-EG 1 Escaño</span>
                <span style="color: #74b1e0;">BNG 1 Escaño</span>
                <span style="color: #006400;">CDS 1 Escaño</span> 
                </a>
                <br><br>
                AP-PDP-PL-CDG y PSOE suben y CDS entra, por lo que la suma de AP-PDP-PL-CG, CG y CDS saca tres escaños de ventaja a la suma de PSOE, PSG-EG y BNG
                <br><br>
                1989: <a href="https://www.datoselecciones.com/galicia-parlamento-1989/a-coruna" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 12 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 10 Escaños</span>
                    <span style="color: #74b1e0;">BNG 2 Escaños</span> 
                    <span style="color: #648434;">PSG-EG 1 Escaño</span>
                </a>
                <br><br>
                El PP las gana, pero la suma de PSOE, BNG y PSG-EG le saca un escaño de ventaja
                <br><br>
                1993: <a href="https://www.datoselecciones.com/galicia-parlamento-1993/a-coruna" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 13 Escaños</span> 
                <span style="color: #FF0000;">PSOE 7 Escaños</span>
                <span style="color: #74b1e0;">BNG 5 Escaños</span> 
                </a>
                <br><br>
                El PSOE sube un escaño, pero el PP saca un escaño de ventaja a la suma de PSOE y BNG
                <br><br>
                1997: <a href="https://www.datoselecciones.com/galicia-parlamento-1997/a-coruna" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 13 Escaños</span> 
                <span style="color: #74b1e0;">BNG 7 Escaños</span> 
                <span style="color: #FF0000;">PSOE 5 Escaños</span>
                </a>
                <br><br>
                El BNG sube un escaño, pero el PP saca un escaño de ventaja a la suma de BNG y PSOE
                <br><br>
                2001: <a href="https://www.datoselecciones.com/galicia-parlamento-2001/a-coruna" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 13 Escaños</span> 
                <span style="color: #74b1e0;">BNG 6 Escaños</span> 
                <span style="color: #FF0000;">PSOE 6 Escaños</span>
                </a>
                <br><br>
                El PP gana un escaño, sacando un escaño de ventaja a la suma de BNG y PSOE
                <br><br>
                2005: <a href="https://www.datoselecciones.com/galicia-parlamento-2005/a-coruna" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 11 Escaños</span> 
    <span style="color: #FF0000;">PSOE 9 Escaños</span>
    <span style="color: #74b1e0;">BNG 5 Escaños</span> 
</a>
<br><br>
El PSOE sube un escaño, por lo que la suma de PSOE y BNG saca tres escaños de ventaja al PP 
<br><br>

2009: <a href="https://resultados.elpais.com/elecciones/2009/autonomicas/11/15.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 13 Escaños</span> 
    <span style="color: #FF0000;">PSOE 8 Escaños</span>
    <span style="color: #74b1e0;">BNG 4 Escaños</span> 
</a>
<br><br>
El PP sube un escaño, por lo que saca un escaño de ventaja a la suma de PSOE y BNG
<br><br>

2012: <a href="https://resultados.elpais.com/elecciones/2012/autonomicas/11/15.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 13 Escaños</span> 
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #2e7a6c;">AGE 5 Escaños</span>
    <span style="color: #74b1e0;">BNG 2 Escaños</span> 
</a>
<br><br>
AGE sube un escaño, pero el PP saca un escaño a la suma de PSOE, AGE y BNG
<br><br>
2016: <a href="https://resultados.elpais.com/elecciones/2016/autonomicas/11/15.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 13 Escaños</span> 
    <span style="color: #3d476b;">EN MAREA 5 Escaños</span>
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #74b1e0;">BNG-NÓS 2 Escaños</span> 
</a>
<br><br>
IGUAL
<br><br>

2020: <a href="https://resultados.elpais.com/elecciones/2020/autonomicas/11/15.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 14 Escaños</span> 
    <span style="color: #74b1e0;">BNG 7 Escaños</span>
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>
2024: <a href="https://elpais.com/espana/elecciones/autonomicas/11/15/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 13 Escaños</span> 
    <span style="color: #74b1e0;">BNG 9 Escaños</span>
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>
En conclusión, A Coruña es una provincia 
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>A Coruña</title>
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
if (provincia === "Pontevedra") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Pontevedra <span class="escaños">22 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1981: <a href="https://www.datoselecciones.com/galicia-parlamento-1981/pontevedra" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #ADD8E6;">AP 8 Escaños</span> 
                    <span style="color: #FFA500;">UCD 7 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 4 Escaños</span> 
                    <span style="color: #648434;">EG 1 Escaño</span>
                    <span style="color: #74b1e0;">BNG-PSG 1 Escaño</span>
                    <span style="color: #e56d27;">PG 1 Escaño</span>
                </a>
                <br><br>
                AP y UCD suben y PG (centroderecha) entra, por lo que la suma de AP, UCD y PG saca seis escaños de ventaja a la suma de PSOE, EG y BNG-PSG
                <br><br>
                1985: <a href="https://www.datoselecciones.com/galicia-parlamento-1985/pontevedra" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                    <span style="color: #ADD8E6;">AP-PDP-PL-CDG 10 Escaños</span>
                    <span style="color: #FF0000;">PSOE 7 Escaños</span>
                    <span style="color: #1f5d79;">CG 2 Escaños</span>
                <span style="color: #648434;">PSG-EG 2 Escaños</span>
                <span style="color: #74b1e0;">BNG 1 Escaño</span>
                </a>
                <br><br>
                AP-PDP-PL-CDG y PSOE suben y el BNG entra, por lo que la suma de AP-PDP-PL-CDG y CG saca dos escaños de ventaja a la suma de PSOE, PSG-EG y BNG
                <br><br>
                1989: <a href="https://www.datoselecciones.com/galicia-parlamento-1989/pontevedra" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 12 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 7 Escaños</span>
                    <span style="color: #74b1e0;">BNG 2 Escaños</span> 
                    <span style="color: #648434;">PSG-EG 1 Escaño</span>
                </a>
                <br><br>
                El PP sube un escaño, por lo que saca dos escaños de ventaja a la suma de PSOE, BNG y PSG-EG
                <br><br>
                1993: <a href="https://www.datoselecciones.com/galicia-parlamento-1993/pontevedra" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 13 Escaños</span> 
                <span style="color: #FF0000;">PSOE 5 Escaños</span>
                <span style="color: #74b1e0;">BNG 4 Escaños</span> 
                </a>
                <br><br>
                El PP sube un escaño, por lo que saca cuatro escaños de ventaja a la suma de PSOE y BNG
                <br><br>
                1997: <a href="https://www.datoselecciones.com/galicia-parlamento-1997/pontevedra" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 12 Escaños</span> 
                <span style="color: #74b1e0;">BNG 6 Escaños</span> 
                <span style="color: #FF0000;">PSOE 4 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                2001: <a href="https://www.datoselecciones.com/galicia-parlamento-2001/pontevedra" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 12 Escaños</span> 
                <span style="color: #74b1e0;">BNG 5 Escaños</span> 
                <span style="color: #FF0000;">PSOE 5 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                2005: <a href="https://www.datoselecciones.com/galicia-parlamento-2005/pontevedra" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 10 Escaños</span> 
    <span style="color: #FF0000;">PSOE 8 Escaños</span>
    <span style="color: #74b1e0;">BNG 4 Escaños</span> 
</a>
<br><br>
IGUAL
<br><br>

2009: <a href="https://resultados.elpais.com/elecciones/2009/autonomicas/11/36.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 11 Escaños</span> 
    <span style="color: #FF0000;">PSOE 7 Escaños</span>
    <span style="color: #74b1e0;">BNG 4 Escaños</span> 
</a>
<br><br>
IGUAL
<br><br>

2012: <a href="https://resultados.elpais.com/elecciones/2012/autonomicas/11/36.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 11 Escaños</span> 
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #2e7a6c;">AGE 3 Escaños</span>
    <span style="color: #74b1e0;">BNG 3 Escaños</span> 
</a>
<br><br>
IGUAL
<br><br>
2016: <a href="https://resultados.elpais.com/elecciones/2016/autonomicas/11/36.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 11 Escaños</span> 
    <span style="color: #3d476b;">EN MAREA 5 Escaños</span>
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #74b1e0;">BNG-NÓS 2 Escaños</span> 
</a>
<br><br>
IGUAL
<br><br>

2020: <a href="https://resultados.elpais.com/elecciones/2020/autonomicas/11/36.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 11 Escaños</span> 
    <span style="color: #74b1e0;">BNG 6 Escaños</span>
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>
2024: <a href="https://elpais.com/espana/elecciones/autonomicas/11/36/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 11 Escaños</span> 
    <span style="color: #74b1e0;">BNG 8 Escaños</span>
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Pontevedra es una provincia 
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Pontevedra</title>
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
if (provincia === "Lugo") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Lugo <span class="escaños">14 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1981: <a href="https://www.datoselecciones.com/galicia-parlamento-1981/lugo" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 6 Escaños</span>
        <span style="color: #ADD8E6;">AP 5 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 2 Escaños</span>  
                    <span style="color: #74b1e0;">BNG-PSG 1 Escaño</span>
                </a>
                <br><br>
                El PSOE pierde un escaño, por lo que la suma de UCD y AP saca ocho escaños de ventaja a la suma de PSOE y BNG-PSG
                <br><br>
                1985: <a href="https://www.datoselecciones.com/galicia-parlamento-1985/lugo" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                    <span style="color: #ADD8E6;">AP-PDP-PL-CDG 7 Escaños</span>
                    <span style="color: #FF0000;">PSOE 4 Escaños</span>
                    <span style="color: #1f5d79;">CG 3 Escaños</span>
                </a>
                <br><br>
                AP-PDP-PL-CDG pierde un escaño, pero la suma de AP-PDP-PL-CDG y CG saca seis escaños de ventaja al PSOE
                <br><br>
                1989: <a href="https://www.datoselecciones.com/galicia-parlamento-1989/lugo" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 7 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 5 Escaños</span>
                    <span style="color: #1f5d79;">CG 1 Escaño</span>
                    <span style="color: #74b1e0;">BNG 1 Escaño</span> 
                </a>
                <br><br>
                El PP pierde un escaño, pero la suma de PP y CG saca dos escaños de ventaja a la suma de PSOE y BNG
                <br><br>
                1993: <a href="https://www.datoselecciones.com/galicia-parlamento-1993/lugo" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 9 Escaños</span> 
                <span style="color: #FF0000;">PSOE 3 Escaños</span>
                <span style="color: #74b1e0;">BNG 2 Escaños</span> 
                </a>
                <br><br>
                El PSOE pierde un escaño, por lo que el PP saca cuatro escaños de ventaja a la suma de PSOE y BNG
                <br><br>
                1997: <a href="https://www.datoselecciones.com/galicia-parlamento-1997/lugo" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 9 Escaños</span> 
                <span style="color: #74b1e0;">BNG 3 Escaños</span> 
                <span style="color: #FF0000;">PSOE 2 Escaños</span>
                </a>
                <br><br>
                El PSOE pierde un escaño, por lo que el PP saca cuatro escaños de ventaja a la suma de BNG y PSOE
                <br><br>
                2001: <a href="https://www.datoselecciones.com/galicia-parlamento-2001/lugo" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 8 Escaños</span> 
                <span style="color: #FF0000;">PSOE 3 Escaños</span>
                <span style="color: #74b1e0;">BNG 3 Escaños</span> 
                </a>
                <br><br>
                El PP pierde un escaño, pero el PP saca dos escaños de ventaja a la suma de BNG y PSOE
                <br><br>
                2005: <a href="https://www.datoselecciones.com/galicia-parlamento-2005/lugo" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 7 Escaños</span> 
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #74b1e0;">BNG 2 Escaños</span> 
</a>
<br><br>
El PP pierde un escaño empatando en escaños a la suma de PSOE y BNG
<br><br>

2009: <a href="https://resultados.elpais.com/elecciones/2009/autonomicas/11/27.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 7 Escaños</span> 
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #74b1e0;">BNG 2 Escaños</span> 
</a>
<br><br>
El PP pierde un escaño empatando en escaños a la suma de PSOE y BNG
<br><br>

2012: <a href="https://resultados.elpais.com/elecciones/2012/autonomicas/11/27.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 9 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #2e7a6c;">AGE 1 Escaño</span>
    <span style="color: #74b1e0;">BNG 1 Escaño</span> 
</a>
<br><br>
El PSOE pierde un escaño, por lo que el PP saca cuatro escaños de ventaja a la suma de PSOE, AGE y BNG
<br><br>
2016: <a href="https://resultados.elpais.com/elecciones/2016/autonomicas/11/27.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 8 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #3d476b;">EN MAREA 2 Escaños</span>
    <span style="color: #74b1e0;">BNG-NÓS 1 Escaño</span> 
</a>
<br><br>
IGUAL
<br><br>

2020: <a href="https://resultados.elpais.com/elecciones/2020/autonomicas/11/27.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 9 Escaños</span> 
    <span style="color: #74b1e0;">BNG 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>
2024: <a href="https://elpais.com/espana/elecciones/autonomicas/11/27/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 8 Escaños</span> 
    <span style="color: #74b1e0;">BNG 4 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Lugo es una provincia 
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Lugo</title>
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
if (provincia === "Orense") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Orense <span class="escaños">14 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1981: <a href="https://www.datoselecciones.com/galicia-parlamento-1981/ourense" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 7 Escaños</span> 
        <span style="color: #ADD8E6;">AP 5 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 2 Escaños</span> 
                </a>
                <br><br>
                El PSOE pierde un escaño por lo que la suma de UCD y AP saca diez escaños de ventaja al PSOE
                <br><br>
                1985: <a href="https://www.datoselecciones.com/galicia-parlamento-1985/ourense" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                    <span style="color: #ADD8E6;">AP-PDP-PL-CDG 7 Escaños</span>
                    <span style="color: #FF0000;">PSOE 4 Escaños</span>
                    <span style="color: #1f5d79;">CG 3 Escaños</span>
                </a>
                <br><br>
                CG pierde un escaño, pero la suma de AP-PDP-PL-CDG y CG saca seis escaños de ventaja al PSOE
                <br><br>
                1989: <a href="https://www.datoselecciones.com/galicia-parlamento-1989/ourense" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 8 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 5 Escaños</span>
                    <span style="color: #1f5d79;">CG 1 Escaño</span>
                </a>
                <br><br>
                El PSOE pierde un escaño, por lo que la suma de PP y CG saca cuatro escaños de ventaja al PSOE
                <br><br>
                1993: <a href="https://www.datoselecciones.com/galicia-parlamento-1993/ourense" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 8 Escaños</span> 
                <span style="color: #FF0000;">PSOE 4 Escaños</span>
                <span style="color: #74b1e0;">BNG 2 Escaños</span> 
                </a>
                <br><br>
                El PP pierde un escaño, pero el PP saca dos escaños de ventaja a la suma de PSOE y BNG
                <br><br>
                1997: <a href="https://www.datoselecciones.com/galicia-parlamento-1997/ourense" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 8 Escaños</span> 
                <span style="color: #74b1e0;">BNG 3 Escaños</span> 
                <span style="color: #FF0000;">PSOE 3 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                2001: <a href="https://www.datoselecciones.com/galicia-parlamento-2001/ourense" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 8 Escaños</span> 
                <span style="color: #74b1e0;">BNG 3 Escaños</span> 
                <span style="color: #FF0000;">PSOE 3 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                2005: <a href="https://www.datoselecciones.com/galicia-parlamento-2005/ourense" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 8 Escaños</span> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #74b1e0;">BNG 2 Escaños</span> 
</a>
<br><br>
IGUAL
<br><br>

2009: <a href="https://resultados.elpais.com/elecciones/2009/autonomicas/11/32.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 7 Escaños</span> 
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #74b1e0;">BNG 2 Escaños</span> 
</a>
<br><br>
IGUAL
<br><br>

2012: <a href="https://resultados.elpais.com/elecciones/2012/autonomicas/11/32.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 8 Escaños</span> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #74b1e0;">BNG 1 Escaño</span> 
    <span style="color: #2e7a6c;">AGE 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>
2016: <a href="https://resultados.elpais.com/elecciones/2016/autonomicas/11/32.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 9 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #3d476b;">EN MAREA 2 Escaños</span>
    <span style="color: #74b1e0;">BNG-NÓS 1 Escaño</span> 
</a>
<br><br>
IGUAL
<br><br>

2020: <a href="https://resultados.elpais.com/elecciones/2020/autonomicas/11/32.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 8 Escaños</span> 
    <span style="color: #74b1e0;">BNG 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>
2024: <a href="https://elpais.com/espana/elecciones/autonomicas/11/32/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 8 Escaños</span> 
    <span style="color: #74b1e0;">BNG 4 Escaños</span>
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    <span style="color: #c99f00;">DO 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Orense es una provincia 
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Orense</title>
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
if (provincia === "Galicia") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Galicia <span class="escaños">75 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1981: <a href="https://www.datoselecciones.com/galicia-parlamento-1981" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #ADD8E6;">AP 27 Escaños</span> 
                    <span style="color: #FFA500;">UCD 25 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 15 Escaños</span> 
                    <span style="color: #74b1e0;">BNG-PSG 4 Escaños</span>
                    <span style="color: #648434;">EG 2 Escaños</span>
                    <span style="color: #FF0D00;">PCE 1 Escaño</span>
                    <span style="color: #e56d27;">PG 1 Escaño</span>
                </a>
                <br><br>
                AP las gana y sumando a UCD sacan catorce escaños por encima de la mayoría absoluta
                <br><br>
                1985: <a href="https://www.datoselecciones.com/galicia-parlamento-1985" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                    <span style="color: #ADD8E6;">AP-PDP-PL-CDG 35 Escaños</span>
                    <span style="color: #FF0000;">PSOE 24 Escaños</span>
                    <span style="color: #1f5d79;">CG 10 Escaños</span>
                <span style="color: #648434;">PSG-EG 3 Escaños</span>
                <span style="color: #74b1e0;">BNG 2 Escaños</span>
                <span style="color: #006400;">CDS 1 Escaño</span>
                </a>
                <br><br>
                AP-PDP-PL-CDG las gana y sumando a CG sacan siete escaños por encima de la mayoría absoluta
                <br><br>
                1989: <a href="https://www.datoselecciones.com/galicia-parlamento-1989" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 39 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 27 Escaños</span>
                    <span style="color: #74b1e0;">BNG 5 Escaños</span> 
                    <span style="color: #648434;">PSG-EG 2 Escaños</span>
                    <span style="color: #1f5d79;">CG 2 Escaños</span>
                </a>
                <br><br>
                El PP las gana sacando un escaño por encima de la mayoría absoluta
                <br><br>
                1993: <a href="https://www.datoselecciones.com/galicia-parlamento-1993" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 43 Escaños</span> 
                <span style="color: #FF0000;">PSOE 19 Escaños</span>
                <span style="color: #74b1e0;">BNG 13 Escaños</span> 
                </a>
                <br><br>
                IGUAL
                <br><br>
                1997: <a href="https://www.datoselecciones.com/galicia-parlamento-1997" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 42 Escaños</span> 
                <span style="color: #74b1e0;">BNG 19 Escaños</span> 
                <span style="color: #FF0000;">PSOE 14 Escaños</span>
                </a>
                <br><br>
                El PP saca cuatro escaños por encima de la mayoría absoluta, BNG sube un escaño a costa de PSOE
                <br><br>
                2001: <a href="https://www.datoselecciones.com/galicia-parlamento-2001" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 41 Escaños</span> 
                <span style="color: #74b1e0;">BNG 17 Escaños</span> 
                <span style="color: #FF0000;">PSOE 17 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                2005: <a href="https://www.datoselecciones.com/galicia-parlamento-2005" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 36 Escaños</span> 
    <span style="color: #FF0000;">PSOE 26 Escaños</span>
    <span style="color: #74b1e0;">BNG 13 Escaños</span> 
</a>
<br><br>
El PP las gana, pero la suma de PSOE y BNG saca un escaño por encima de la mayoría absoluta
<br><br>

2009: <a href="https://resultados.elpais.com/elecciones/2009/autonomicas/11/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 38 Escaños</span> 
    <span style="color: #FF0000;">PSOE 25 Escaños</span>
    <span style="color: #74b1e0;">BNG 12 Escaños</span> 
</a>
<br><br>
IGUAL
<br><br>

2012: <a href="https://resultados.elpais.com/elecciones/2012/autonomicas/11/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 41 Escaños</span> 
    <span style="color: #FF0000;">PSOE 17 Escaños</span>
    <span style="color: #2e7a6c;">AGE 10 Escaños</span>
    <span style="color: #74b1e0;">BNG 7 Escaños</span> 
</a>
<br><br>
El PP saca tres escaños por encima de la mayoría absoluta, AGE gana un escaño a costa del PSOE
<br><br>
2016: <a href="https://resultados.elpais.com/elecciones/2016/autonomicas/11/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 41 Escaños</span> 
    <span style="color: #3d476b;">EN MAREA 14 Escaños</span>
    <span style="color: #FF0000;">PSOE 14 Escaños</span>
    <span style="color: #74b1e0;">BNG-NÓS 6 Escaños</span> 
</a>
<br><br>
IGUAL
<br><br>

2020: <a href="https://resultados.elpais.com/elecciones/2020/autonomicas/11/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 42 Escaños</span> 
    <span style="color: #74b1e0;">BNG 19 Escaños</span>
    <span style="color: #FF0000;">PSOE 14 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>
2024: <a href="https://elpais.com/espana/elecciones/autonomicas/11/15/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 40 Escaños</span> 
    <span style="color: #74b1e0;">BNG 25 Escaños</span>
    <span style="color: #FF0000;">PSOE 9 Escaños</span>
    <span style="color: #c99f00;">DO 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Galicia es una comunidad autónoma
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Galicia</title>
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