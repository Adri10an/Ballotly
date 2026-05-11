    function abrirVentana(provincia) {

if (provincia === "Huesca") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Huesca <span class="escaños">18 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1983: <a href="https://www.datoselecciones.com/aragon-parlamento-1983/huesca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 10 Escaños</span> 
                <span style="color: #ADD8E6;">AP-PDP-UL 6 Escaños</span> 
                <span style="color: #c99f00;">PAR 2 Escaños</span>
                </a>
                <br><br>
                El PSOE las gana sacando dos escaños de ventaja a la suma de AP-PDP-UL y PAR. El PSOE gana a AP-PDP-UL por 25563 votos y AP-PDP-UL dobla en votos al PAR
                <br><br>
                1987: <a href="https://www.datoselecciones.com/aragon-parlamento-1987/huesca" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                    <span style="color: #FF0000;">PSOE 7 Escaños</span>  
                <span style="color: #c99f00;">PAR 5 Escaños</span>
                <span style="color: #ADD8E6;">AP 3 Escaños</span>
                <span style="color: #006400;">CDS 2 Escaños</span>
                <span style="color: #d25644;">CAA-IU 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana, pero la suma de PAR, AP y CDS saca dos escaños de ventaja a la suma de PSOE y CAA-IU. El PSOE gana al PAR por 12688 votos, el PAR gana a AP por 11734 votos, AP gana a CDS por 3824 votos y CDS dobla a CAA-IU en votos 
                <br><br>
                1991: <a href="https://www.datoselecciones.com/aragon-parlamento-1991/huesca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 8 Escaños</span>  
                <span style="color: #c99f00;">PAR 5 Escaños</span>
                <span style="color: #0000FF;">PP 4 Escaños</span> 
                <span style="color: #d25644;">CAA-IU 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a CAA-IU empatan en escaños a la suma de PAR y PP. El PSOE gana a PAR por 16385 votos, PAR gana al PP por 5884 votos y el PP triplica a CAA-IU en votos
                <br><br>
                1995: <a href="https://www.datoselecciones.com/aragon-parlamento-1995/huesca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 7 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 6 Escaños</span>  
                <span style="color: #c99f00;">PAR 4 Escaños</span>
                <span style="color: #d25644;">IUA 1 Escaño</span>
                </a>
                <br><br>
                El PP las gana y sumando al PAR sacan cuatro escaños de ventaja a la suma de PSOE e IUA. El PP gana al PSOE por tan solo 1881 votos, el PSOE gana al PAR por 12980 votos y el PAR triplica a IUA en votos 
                <br><br>
                1999: <a href="https://www.datoselecciones.com/aragon-parlamento-1999/huesca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 7 Escaños</span>  
                    <span style="color: #0000FF;">PP 7 Escaños</span> 
                <span style="color: #c99f00;">PAR 3 Escaños</span>
                <span style="color: #ab001c;">CHA 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana y aunque PP y PAR sacan dos escaños de ventaja a la suma de PSOE y CHA, PAR se alía al PSOE. El PSOE gana al PP por tan solo 416 votos, el PP dobla en votos al PAR y el PAR gana a CHA por 8411 votos
                <br><br>
                2003: <a href="https://www.datoselecciones.com/aragon-parlamento-2003/huesca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 8 Escaños</span>  
                    <span style="color: #0000FF;">PP 6 Escaños</span> 
                <span style="color: #c99f00;">PAR 2 Escaños</span>
                <span style="color: #ab001c;">CHA 2 Escaños</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a CHA sacan dos escaños de ventaja a la suma de PP y PAR, aunque PAR apoya al PSOE. El PSOE gana al PP por 16007 votos, el PP dobla a PAR en votos y PAR gana a CHA por 2947 votos
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/02/22.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 9 Escaños</span>  
                    <span style="color: #0000FF;">PP 6 Escaños</span> 
                <span style="color: #c99f00;">PAR 2 Escaños</span>
                <span style="color: #ab001c;">CHA 1 Escaño</span>
</a>
<br><br>
El PSOE las gana y sumando a CHA sacan dos escaños de ventaja a la suma de PP y PAR, aunque PAR apoya al PSOE. El PSOE gana al PP por 18434 votos, el PP dobla al PAR en votos y el PAR gana a CHA por 6409 votos
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/02/22.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 7 Escaños</span> 
    <span style="color: #FF0000;">PSOE 7 Escaños</span>  
                <span style="color: #c99f00;">PAR 2 Escaños</span>
                <span style="color: #ab001c;">CHA 1 Escaño</span>
                <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
El PP las gana y sumando al PAR empatan en escaños a la suma de PSOE, CHA e IU. El PP gana al PSOE por 4111 votos, el PSOE dobla al PAR en votos, el PAR gana a CHA por 7157 votos y CHA gana a IU por tan solo 1775 votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/02/22.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 6 Escaños</span>  
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #800080;">PODEMOS 4 Escaños</span>
                <span style="color: #c99f00;">PAR 2 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
El PSOE las gana y sumando a PODEMOS sacan dos escaños de ventaja a la suma de PP, PAR y CIUDADANOS. El PSOE gana al PP por tan solo 345 votos, el PP gana a PODEMOS por 8781 votos, PODEMOS gana al PAR por 9908 votos y el PAR gana a CIUDADANOS por tan solo 1142 votos
<br><br>

2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/02/22.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 7 Escaños</span>  
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #FF7F00;">CS 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
                <span style="color: #c99f00;">PAR 1 Escaño</span>
    <span style="color: #008000;">VOX 1 Escaño</span>
    <span style="color: #ab001c;">CHA 1 Escaño</span>
    
</a>
<br><br>
El PSOE las gana y sumando a PODEMOS y CHA empatan en escaños a la suma de PP, CIUDADANOS, PAR y VOX, aunque el PAR apoya al PSOE. El PSOE gana al PP por 14273 votos, el PP gana a CIUDADANOS por 8035 votos, CIUDADANOS gana a PODEMOS por 6442 votos, PODEMOS gana al PAR por tan solo 349 votos, PAR gana a VOX por 2875 votos y VOX gana a CHA por tan solo 964 votos
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/2023/02/22/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 8 Escaños</span> 
    <span style="color: #FF0000;">PSOE 7 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span>
    <span style="color: #ab001c;">CHA 1 Escaño</span>
</a>
<br><br>
El PP las gana y sumando a VOX sacan dos escaños de ventaja a la suma de PSOE y CHA. El PP gana al PSOE por 5855 votos, el PSOE casi triplica a VOX en votos y VOX gana a CHA por 5169 votos
<br><br>
2026: <a href="https://elpais.com/espana/elecciones/autonomicas/02/22/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 7 Escaños</span> 
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #008000;">VOX 4 Escaños</span>
    <span style="color: #ab001c;">CHA 2 Escaños</span>
</a>
<br><br>
El PP las gana y sumando a VOX sacan cuatro escaños de ventaja a la suma de PSOE y CHA. El PP gana al PSOE por 6475 votos, el PSOE gana a VOX por 8345 votos y VOX gana a CHA por 9367 votos
<br><br>
En conclusión, Huesca es una provincia, que, como parte de Aragón forma parte del Ohio español, es decir, el partido ganador, es el que partido que va ganando a nivel nacional,
la izquierda ha ganado 4 veces en número de diputados: 1983, 2003, 2007 y 2015 en todas estas cuatro, sacando dos escaños de ventaja a la suma de la derecha, ha empatado otras 3 veces 1991, 2011 y 2019, de las cuales en 1991 y 2019 el PSOE ha sido primera fuerza como representante de la izquierda y en 2011 lo es el PP.
Por contrario la derecha ha ganado 5 veces, tanto en 1987,1995,1999, 2023 y 2026. En 1987 tan solo saca dos escaños de ventaja a la izquierda, en 1995 esa ventaja se amplia a cuatro escaños, en 1999 vuelve a reducirse a solo los dos de ventaja, en 2023 vuelven a ser dos de ventaja y en 2026 vuelven a ser cuatro de ventaja.
No la podemos situar ni en la izquierda ni en la derecha.

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Huesca</title>
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
if (provincia === "Zaragoza") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Zaragoza <span class="escaños">32 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://www.datoselecciones.com/aragon-parlamento-1983/zaragoza" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 16 Escaños</span> 
                <span style="color: #c99f00;">PAR 7 Escaños</span>
                <span style="color: #ADD8E6;">AP-PDP-UL 7 Escaños</span>
                <span style="color: #FF0D00;">PCE 1 Escaño</span>
                <span style="color: #006400;">CDS 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana y sumando al PCE sacan dos escaños de ventaja a la suma de PAR, AP-PDP-UL y CDS. El PSOE dobla al PAR en votos, el PAR gana a AP-PDP-UL por 9276 votos, AP-PDP-UL cuadriplica al PCE en votos y el PCE gana a CDS por 4998 votos
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 33 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1987: <a href="https://www.datoselecciones.com/aragon-parlamento-1987/zaragoza" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                    <span style="color: #FF0000;">PSOE 13 Escaños</span> 
                <span style="color: #c99f00;">PAR 11 Escaños</span>
                <span style="color: #ADD8E6;">AP 5 Escaños</span>
                <span style="color: #006400;">CDS 3 Escaños</span>    
                <span style="color: #d25644;">CAA-IU 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana, pero la suma de PAR, AP y CDS le saca cinco escaños de ventaja a la suma de PSOE y CAA-IU. El PSOE gana al PAR por 20154 votos, el PAR dobla en votos a AP, AP gana a CDS por 15274 votos y CDS gana a CAA-IU por 20019 votos
                <br><br>
                1991: <a href="https://www.datoselecciones.com/aragon-parlamento-1991/zaragoza" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 15 Escaños</span>  
                <span style="color: #c99f00;">PAR 9 Escaños</span>
                <span style="color: #0000FF;">PP 7 Escaños</span> 
                <span style="color: #d25644;">CAA-IU 2 Escaños</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a CAA-IU sacan un escaño de ventaja a la suma de PAR y PP. El PSOE gana al PAR por 64496 votos, el PAR gana al PP por 28295 votos y el PP dobla a CAA-IU en votos
                <br><br>
                1995: <a href="https://www.datoselecciones.com/aragon-parlamento-1995/zaragoza" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 13 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 8 Escaños</span>  
                <span style="color: #c99f00;">PAR 7 Escaños</span>
                <span style="color: #d25644;">IUA 3 Escaños</span>
                <span style="color: #ab001c;">CHA 2 Escaños</span>
                </a>
                <br><br>
                El PP las gana y sumando a PAR sacan siete escaños de ventaja a la suma de PSOE, IUA y CHA. El PP gana al PSOE por 72986 votos, el PSOE gana al PAR por 12561 votos, el PAR gana a IUA por 49473 votos e IUA gana a CHA por 24114 votos
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 34 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1999: <a href="https://www.datoselecciones.com/aragon-parlamento-1999/zaragoza" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                    <span style="color: #0000FF;">PP 14 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 11 Escaños</span>
                    <span style="color: #ab001c;">CHA 4 Escaños</span>
                <span style="color: #c99f00;">PAR 4 Escaños</span>
                <span style="color: #d25644;">IU 1 Escaño</span>
                </a>
                <br><br>
                El PP las gana y sumando al PAR sacan dos escaños de ventaja a la suma de PSOE, CHA e IU, aunque el PAR apoya al PSOE. El PP gana al PSOE por 41679 votos, el PSOE dobla a CHA en votos, CHA gana al PAR por 5101 votos y el PAR casi triplica a IU
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 35 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                2003: <a href="https://www.datoselecciones.com/aragon-parlamento-2003/zaragoza" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 14 Escaños</span>
                    <span style="color: #0000FF;">PP 11 Escaños</span> 
                    <span style="color: #ab001c;">CHA 6 Escaños</span>
                <span style="color: #c99f00;">PAR 3 Escaños</span>
                <span style="color: #d25644;">IU 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a CHA e IU sacan siete escaños de ventaja a la suma de PP y PAR, aunque el PAR apoya al PSOE. El PSOE gana al PP por 34379 votos, el PP gana a CHA por 74010 votos, CHA gana al PAR por 30187 votos y el PAR triplica a IU en votos
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/02/50.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 15 Escaños</span>
                    <span style="color: #0000FF;">PP 12 Escaños</span> 
                <span style="color: #c99f00;">PAR 4 Escaños</span>
                <span style="color: #ab001c;">CHA 3 Escaños</span>
                <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
El PSOE las gana y sumando a CHA e IU sacan tres escaños de ventaja a la suma de PP y PAR, aunque el PAR apoya al PSOE. El PSOE gana al PP por 45080 votos, el PP casi triplica al PAR en votos, el PAR gana a CHA por 8866 votos y CHA dobla a IU en votos
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/02/50.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 17 Escaños</span> 
    <span style="color: #FF0000;">PSOE 11 Escaños</span>  
                <span style="color: #ab001c;">CHA 3 Escaños</span>
                <span style="color: #c99f00;">PAR 2 Escaños</span>
                <span style="color: #d25644;">IU 2 Escaños</span>
</a>
<br><br>
El PP las gana y sumando al PAR sacan tres escaños de ventaja a la suma de PSOE, CHA e IU. El PP gana al PSOE por 60711 votos, el PSOE triplica a CHA en votos, CHA gana al PAR por 10101 votos y el PAR gana a IU por 3359 votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/02/50.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 11 Escaños</span> 
    <span style="color: #800080;">PODEMOS 8 Escaños</span>
    <span style="color: #FF0000;">PSOE 8 Escaños</span>  
    <span style="color: #FF7F00;">CS 3 Escaños</span>
    <span style="color: #c99f00;">PAR 2 Escaños</span>
    <span style="color: #ab001c;">CHA 2 Escaños</span>
    <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
El PP las gana, pero la suma de PODEMOS, PSOE, CHA e IU saca tres escaños de ventaja a la suma de PP, CIUDADANOS y PAR.El PP gana a PODEMOS por 28854 votos, PODEMOS gana al PSOE por 7543 votos, el PSOE dobla a CIUDADANOS en votos, CIUDADANOS gana al PAR por 22618 votos, el PAR gana a CHA por tan solo 649 votos y CHA gana a IU por 3456 votos
<br><br>

2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/02/50.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 11 Escaños</span>  
    <span style="color: #0000FF;">PP 8 Escaños</span> 
    <span style="color: #FF7F00;">CS 7 Escaños</span>
    <span style="color: #800080;">PODEMOS 3 Escaños</span>
    <span style="color: #ab001c;">CHA 2 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span>
    <span style="color: #c99f00;">PAR 1 Escaño</span>
    <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
El PSOE las gana y sumando a PODEMOS, CHA e IU empatan a la suma de PP, CIUDADANOS y VOX. El PAR desempata a favor de la izquierda con su escaño. El PSOE gana al PP por 46300 votos, el PP gana a CIUDADANOS por 12369 votos, CIUDADANOS dobla a PODEMOS en votos, PODEMOS gana a CHA por 6923 votos, CHA gana a VOX por 2236 votos, VOX gana al PAR por 13607 votos y el PAR gana a IU por tan solo 147 votos
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/2023/02/50/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 15 Escaños</span> 
    <span style="color: #FF0000;">PSOE 12 Escaños</span>
    <span style="color: #008000;">VOX 4 Escaños</span>
    <span style="color: #ab001c;">CHA 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
El PP las gana y sumando a VOX sacan tres escaños de ventaja a la suma de PSOE, CHA, PODEMOS e IU. El PP gana al PSOE por 27622 votos, el PSOE dobla a VOX en votos, VOX dobla a CHA en votos, CHA gana a PODEMOS por 5543 votos y PODEMOS gana a IU por 4520 votos
<br><br>
2026: <a href="https://elpais.com/espana/elecciones/autonomicas/02/50/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 14 Escaños</span> 
    <span style="color: #FF0000;">PSOE 9 Escaños</span>
    <span style="color: #008000;">VOX 7 Escaños</span>
    <span style="color: #ab001c;">CHA 4 Escaños</span>
    <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
El PP las gana y sumando a VOX sacan siete escaños de ventaja a la suma de PSOE, CHA e IU. El PP gana al PSOE por 55507 votos, el PSOE gana a VOX por 31469, VOX gana a CHA por 33071 votos y CHA triplica a IU en votos
<br><br>
En conclusión, Zaragoza es una provincia que como forma parte del Ohio español que es Aragón el partido que gana, gana en toda España a nivel nacional, ha habido un mayor número de victorias de la derecha en escaños: 6 veces frente a 5 de la izquierda.
Las 7 veces que ha ganado la derecha han sido en 1987, 1995, 1999, 2011, 2019, 2023 y 2026. En 1987 aventaja en 5 escaños a la izquierda, en 1995 la aventaja en 7, en 1999 se reduce esa ventaja a dos, en 2019 solo aventaja por uno, en 2023 saca tres escaños de ventaja y en 2026 la ventaja se vuelve a ampliar a siete. Cabe destacar que a pesar de ello, en 1999 y 2019 el PAR pactará con el PSOE, ejerciendo como un partido de centro, una bisagra que es capaz de captar en ocasiones con la izquierda y en otras ocasiones con la derecha.
Por otro lado, las cinco veces que se ha mostrado ganadora la izquierda ha sido en 1983, 1991, 2003, 2007 y 2015. En 1983 ha sacado dos escaños de ventaja a la derecha, en el 91 fue de solo uno, en 2003 se amplia a 7 escaños de ventaja, despues en 2007 se reduce a tres escaños de ventaja y en el 2015 vuelve a ser de tres escaños.
Está ligeramente inclinada a la derecha, pero no es una tan determinante ventaja.            
</p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Zaragoza</title>
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
if (provincia === "Teruel") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Teruel <span class="escaños">16 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://www.datoselecciones.com/aragon-parlamento-1983/teruel" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 7 Escaños</span> 
                <span style="color: #ADD8E6;">AP-PDP-UL 5 Escaños</span>
                <span style="color: #c99f00;">PAR 4 Escaños</span>
                </a>
                <br><br>
                El PSOE las gana, pero la suma de AP-PDP-UL y PAR le saca dos escaños de ventaja. El PSOE gana a AP-PDP-UL por 6289 votos y AP-PDP-UL gana al PAR por 5883 votos
                <br><br>
                1987: <a href="https://www.datoselecciones.com/aragon-parlamento-1987/teruel" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                    <span style="color: #FF0000;">PSOE 7 Escaños</span> 
                    <span style="color: #ADD8E6;">AP 5 Escaños</span>
                <span style="color: #c99f00;">PAR 3 Escaños</span>
                <span style="color: #006400;">CDS 1 Escaño</span>    
                </a>
                <br><br>
                El PSOE las gana, pero la suma de AP, PAR y CDS le saca dos escaños de ventaja. El PSOE gana a AP por 7261 votos, AP gana al PAR por 8145 votos y el PAR gana a CDS por 6433 votos
                <br><br>
                1991: <a href="https://www.datoselecciones.com/aragon-parlamento-1991/teruel" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 7 Escaños</span>  
                    <span style="color: #0000FF;">PP 6 Escaños</span> 
                <span style="color: #c99f00;">PAR 3 Escaños</span>
                </a>
                <br><br>
                El PSOE las gana, pero la suma de PP y PAR le saca dos escaños de ventaja. El PSOE gana al PP por 5533 votos y el PP gana al PAR por 9651 votos
                <br><br>
                1995: <a href="https://www.datoselecciones.com/aragon-parlamento-1995/teruel" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 7 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 5 Escaños</span>  
                <span style="color: #c99f00;">PAR 3 Escaños</span>
                <span style="color: #d25644;">IUA 1 Escaños</span>
                </a>
                <br><br>
                El PP las gana gana y sumando al PAR sacan cuatro escaños de ventaja a la suma de PSOE e IUA. El PP gana al PSOE por 7929 votos, el PSOE gana al PAR por 11614 votos y el PAR triplica a IUA en votos
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 15 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1999: <a href="https://www.datoselecciones.com/aragon-parlamento-1999/teruel" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                    <span style="color: #0000FF;">PP 7 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 5 Escaños</span>
                <span style="color: #c99f00;">PAR 3 Escaños</span>
                </a>
                <br><br>
                El PP las gana y aunque sumando al PAR doblan en escaños al PSOE, el PAR apoya al PSOE. El PP gana al PSOE por 7078 votos y el PSOE gana al PAR por 11588 votos
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 14 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                2003: <a href="https://www.datoselecciones.com/aragon-parlamento-2003/teruel" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 5 Escaños</span>
                    <span style="color: #0000FF;">PP 5 Escaños</span> 
                <span style="color: #c99f00;">PAR 3 Escaños</span>
                <span style="color: #ab001c;">CHA 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana y aunque PP y PAR sacan dos escaños de ventaja a la suma de PSOE y CHA, el PAR apoya al PSOE. El PSOE gana al PP por tan solo 1024 votos, el PP gana al PAR por 13209 votos y el PAR dobla a CHA en votos
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/02/50.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 6 Escaños</span>
                    <span style="color: #0000FF;">PP 5 Escaños</span> 
                <span style="color: #c99f00;">PAR 3 Escaños</span>
</a>
<br><br>
El PSOE las gana y aunque PP y PAR sacan dos escaños de ventaja al PSOE, el PAR apoya al PSOE. El PSOE gana al PP por 4259 votos y el PP gana al PAR por 9999 votos
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/02/44.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 6 Escaños</span> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>  
                <span style="color: #c99f00;">PAR 3 Escaños</span>
                <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
El PP las gana y sumando al PAR sacan cuatro escaños de ventaja a la suma de PSOE e IU. El PP gana al PSOE por 7718 votos, el PSOE gana al PAR por 8703 votos y el PAR dobla a IU en votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/02/44.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span>
    <span style="color: #FF0000;">PSOE 4 Escaños</span>  
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #c99f00;">PAR 2 Escaños</span> 
    <span style="color: #FF7F00;">CS 1 Escaños</span>
</a>
<br><br>
El PP las gana y sumando al PAR y CIUDADANOS sacan dos escaños de ventaja a la suma de PSOE y PODEMOS. El PP gana al PSOE por 4177 votos, el PSOE gana a PODEMOS por 4391 votos, PODEMOS gana al PAR por 1762 votos y el PAR gana a CIUDADANOS por 4865 votos
<br><br>

2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/02/44.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 6 Escaños</span>  
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #FF7F00;">CS 2 Escaños</span>
    <span style="color: #c99f00;">PAR 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
</a>
<br><br>
El PSOE las gana y sumando a PODEMOS empatan en escaños a la suma de PP, CIUDADANOS y PAR. El PAR ademas apoya al PSOE. El PSOE gana al PP por 5202 votos, el PP gana a CIUDADANOS por 7237 votos, CIUDADANOS gana al PAR por 2452 votos y el PAR gana a PODEMOS por 3144 votos
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/2023/02/44/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #006400;">¡ARAGÓN EXISTE! 3 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span>
    <span style="color: #c99f00;">PAR 1 Escaño</span>
</a>
<br><br>
El PP las gana y sumando a VOX y el PAR empatan en escaños a la suma de PSOE y ¡ARAGÓN EXISTE!. El PP gana al PSOE por 6065 votos, el PSOE gana a ¡ARAGÓN EXISTE! por tan solo 1342 votos, ¡ARAGÓN EXISTE! gana a VOX por 7553 votos y VOX gana al PAR por 2879 votos
<br><br>
2026: <a href="https://elpais.com/espana/elecciones/autonomicas/02/44/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #008000;">VOX 3 Escaños</span>
    <span style="color: #006400;">¡ARAGÓN EXISTE! 2 Escaños</span>
</a>
<br><br>
El PP las gana y sumando a VOX sacan dos escaños de ventaja a la suma de PSOE y ¡ARAGÓN EXISTE!. El PP gana al PSOE por 3449 votos, el PSOE gana a VOX por 2205 votos y VOX gana a ¡ARAGÓN EXISTE! por 5001 votos
<br><br>
En conclusión, Teruel es una provincia, que aunque si que es cierto que clava el partido ganador en la comunidad (la fuerza más votada), en términos de bloques, la derecha ha aventajado siempre a la izquierda por amplias ventajas, menos en el 2023 y aun este año tiene matices:
Es un feudo de la derecha, porque en la tres primeras elecciones del 1983-1991 la derecha aventaja a la izquierda en dos escaños,en el 95 y en el 99 queda ampliada a cuatro, en 2003 y 2007 vuelve a aventajar a la izquierda por dos escaños,
en el 2011 vuelve a ampliarse a una distancia de cuatro escaños a su favor, en el 2015 volvemos a esos dos escaños de ventaja para la derecha. En el 2019 hay un empate con ligera ventaja para la derecha, en el 2023 hay otro empate, pero con ligera ventaja hacia la "izquierda", pero hay que tener en cuenta que surge el fenómeno "Aragón Existe", que es un partido aragonesista transversal, que es capaz de recoger algún voto conservador y en 2026
la derecha vuelve a aventajar en dos escaños a la "izquierda".
En conclusión es la provincia sociológicamente más de derechas de Aragón.
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Teruel</title>
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
if (provincia === "Aragon") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Aragon <span class="escaños">66 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://www.datoselecciones.com/aragon-parlamento-1983" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 33 Escaños</span> 
                <span style="color: #ADD8E6;">AP-PDP-UL 18 Escaños</span>
                <span style="color: #c99f00;">PAR 13 Escaños</span>
                <span style="color: #FF0D00;">PCE 1 Escaño</span>
                <span style="color: #006400;">CDS 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana y sumando al PCE sacan mayoría absoluta exacta
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 67 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1987: <a href="https://www.datoselecciones.com/aragon-parlamento-1987" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                    <span style="color: #FF0000;">PSOE 27 Escaños</span> 
                <span style="color: #c99f00;">PAR 19 Escaños</span>
                <span style="color: #ADD8E6;">AP 13 Escaños</span>
                <span style="color: #006400;">CDS 6 Escaños</span>    
                <span style="color: #d25644;">CAA-IU 2 Escaños</span>
                </a>
                <br><br>
                El PSOE las vuelve a ganar, pero la suma de PAR, AP Y CDS saca cuatro escaños por encima de la mayoría absoluta, por lo que se inviste como presidente a  Hipólito Gómez de las Roces (PAR).
                <br><br>
                1991: <a href="https://www.datoselecciones.com/aragon-parlamento-1991" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 30 Escaños</span>  
                <span style="color: #c99f00;">PAR 17 Escaños</span>
                <span style="color: #0000FF;">PP 17 Escaños</span> 
                <span style="color: #d25644;">CAA-IU 3 Escaños</span>
                </a>
                <br><br>
                El PSOE sigue como fuerza más votada, pero la suma de PAR y PP saca la mayoría absoluta exacta
                <br><br>
                1995: <a href="https://www.datoselecciones.com/aragon-parlamento-1995" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 27 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 19 Escaños</span>  
                <span style="color: #c99f00;">PAR 14 Escaños</span>
                <span style="color: #d25644;">IUA 5 Escaños</span>
                <span style="color: #ab001c;">CHA 2 Escaños</span>
                </a>
                <br><br>
                El PP las gana y sumando al PAR sacan siete escaños por encima de la mayoría absoluta
                <br><br>
                1999: <a href="https://www.datoselecciones.com/aragon-parlamento-1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                    <span style="color: #0000FF;">PP 28 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 23 Escaños</span>
                <span style="color: #c99f00;">PAR 10 Escaños</span>
                <span style="color: #ab001c;">CHA 5 Escaños</span>
                <span style="color: #d25644;">IU 1 Escaño</span>
                </a>
                <br><br>
                El PP las gana, pero la suma de PSOE, PAR e IU saca la mayorñia absoluta exacta.
                <br><br>
                2003: <a href="https://www.datoselecciones.com/aragon-parlamento-2003" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 27 Escaños</span>
                    <span style="color: #0000FF;">PP 22 Escaños</span> 
                    <span style="color: #ab001c;">CHA 9 Escaños</span>
                <span style="color: #c99f00;">PAR 8 Escaños</span>
                <span style="color: #d25644;">IU 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a PAR e IU sacan dos escaños por encima de la mayoría absoluta
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/02/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 30 Escaños</span>
                    <span style="color: #0000FF;">PP 23 Escaños</span> 
                <span style="color: #c99f00;">PAR 9 Escaños</span>
                <span style="color: #ab001c;">CHA 4 Escaños</span>
                <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
El PSOE las gana y sumando al PAR sacan cinco escaños por encima de la mayoría absoluta
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/02/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 30 Escaños</span> 
    <span style="color: #FF0000;">PSOE 22 Escaños</span>  
                <span style="color: #c99f00;">PAR 7 Escaños</span>
                <span style="color: #ab001c;">CHA 4 Escaños</span>
                <span style="color: #d25644;">IU 4 Escaños</span>
</a>
<br><br>
El PP las gana y sumando al PAR sacan tres escaños por encima de la mayoría absoluta.
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/02/50.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 21 Escaños</span> 
    <span style="color: #FF0000;">PSOE 18 Escaños</span>  
    <span style="color: #800080;">PODEMOS 14 Escaños</span>
    <span style="color: #c99f00;">PAR 6 Escaños</span>
    <span style="color: #FF7F00;">CS 5 Escaños</span>
    <span style="color: #ab001c;">CHA 2 Escaños</span>
    <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
El PP las gana, pero la suma de PSOE, PODEMOS, CHA e IU saca un escaño por encima de la mayoría absoluta
<br><br>

2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/02/50.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 24 Escaños</span>  
    <span style="color: #0000FF;">PP 16 Escaños</span> 
    <span style="color: #FF7F00;">CS 12 Escaños</span>
    <span style="color: #800080;">PODEMOS 5 Escaños</span>
    <span style="color: #ab001c;">CHA 3 Escaños</span>
    <span style="color: #008000;">VOX 3 Escaños</span>
    <span style="color: #c99f00;">PAR 3 Escaños</span>
    <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
El PSOE las gana y sumando a PODEMOS, CHA, PAR e IU sacan dos escaños por encima de la mayoría absoluta
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/2023/02/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 28 Escaños</span> 
    <span style="color: #FF0000;">PSOE 23 Escaños</span>
    <span style="color: #008000;">VOX 7 Escaños</span>
    <span style="color: #ab001c;">CHA 3 Escaños</span>
    <span style="color: #006400;">¡ARAGÓN EXISTE! 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #d25644;">IU 1 Escaño</span>
    <span style="color: #c99f00;">PAR 1 Escaño</span>
</a>
<br><br>
El PP las gana y sumando a VOX y el PAR sacan dos escaños por encima de la mayoría absoluta
<br><br>
2026: <a href="https://elpais.com/espana/elecciones/autonomicas/02/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 26 Escaños</span> 
    <span style="color: #FF0000;">PSOE 18 Escaños</span>
    <span style="color: #008000;">VOX 14 Escaños</span>
    <span style="color: #ab001c;">CHA 6 Escaños</span>
    <span style="color: #006400;">¡ARAGÓN EXISTE! 2 Escaños</span>
    <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
El PP las gana y sumando a VOX sacan seis escaños por encima de la mayoría absoluta
<br><br>
En conclusión, Aragón es una comunidad autónoma que funciona como el Ohio de España. Ohio está en la llamada región de Medio Oeste de Estados Unidos, que se llama así aunque se sitúe en el noreste. Sus campos se extienden de Michigan a Pensilvania, del lago Erie a Kentucky, y es atravesado por el río Ohio que da nombre al territorio. De hecho, en lengua iroquesa, de los nativos americanos, significa ‘río grande’.

Otro que también es gigante es el Ebro, que tiene poco o nada que ver con Columbus, capital del estado en cuestión, pero que pasa por Zaragoza. Y es que Aragón mantiene una relación peculiar con la política que se desarrolla en dichas tierras norteamericanas. Ambos lugares tienen la buena costumbre de predecir con éxito quién gana las elecciones generales.



Dicho de forma rápida y sencilla. Quien gana en las provincias de Zaragoza, Huesca y Teruel posteriormente se proclama vencedor de los comicios estatales. Marca el rumbo de España.
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Aragon</title>
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
function abrirVentanaEscenario183514(provincia) {
    if (provincia === "Huesca") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Huesca <span class="escaños">18 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://www.datoselecciones.com/aragon-parlamento-1983/huesca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 10 Escaños</span> 
                <span style="color: #ADD8E6;">AP-PDP-UL 6 Escaños</span> 
                <span style="color: #c99f00;">PAR 2 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1987: <a href="https://www.datoselecciones.com/aragon-parlamento-1987/huesca" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                    <span style="color: #FF0000;">PSOE 7 Escaños</span>  
                <span style="color: #c99f00;">PAR 5 Escaños</span>
                <span style="color: #ADD8E6;">AP 3 Escaños</span>
                <span style="color: #006400;">CDS 2 Escaños</span>
                <span style="color: #d25644;">CAA-IU 1 Escaño</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1991: <a href="https://www.datoselecciones.com/aragon-parlamento-1991/huesca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 8 Escaños</span>  
                <span style="color: #c99f00;">PAR 5 Escaños</span>
                <span style="color: #0000FF;">PP 4 Escaños</span> 
                <span style="color: #d25644;">CAA-IU 1 Escaño</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1995: <a href="https://www.datoselecciones.com/aragon-parlamento-1995/huesca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 7 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 6 Escaños</span>  
                <span style="color: #c99f00;">PAR 4 Escaños</span>
                <span style="color: #d25644;">IUA 1 Escaño</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1999: <a href="https://www.datoselecciones.com/aragon-parlamento-1999/huesca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 7 Escaños</span>  
                    <span style="color: #0000FF;">PP 7 Escaños</span> 
                <span style="color: #c99f00;">PAR 3 Escaños</span>
                <span style="color: #ab001c;">CHA 1 Escaño</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                2003: <a href="https://www.datoselecciones.com/aragon-parlamento-2003/huesca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 8 Escaños</span>  
                    <span style="color: #0000FF;">PP 6 Escaños</span> 
                <span style="color: #c99f00;">PAR 2 Escaños</span>
                <span style="color: #ab001c;">CHA 2 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/02/22.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 9 Escaños</span>  
                    <span style="color: #0000FF;">PP 6 Escaños</span> 
                <span style="color: #c99f00;">PAR 2 Escaños</span>
                <span style="color: #ab001c;">CHA 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/02/22.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 7 Escaños</span> 
    <span style="color: #FF0000;">PSOE 7 Escaños</span>  
                <span style="color: #c99f00;">PAR 2 Escaños</span>
                <span style="color: #ab001c;">CHA 1 Escaño</span>
                <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/02/22.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 6 Escaños</span>  
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #800080;">PODEMOS 4 Escaños</span>
                <span style="color: #c99f00;">PAR 2 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/02/22.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 7 Escaños</span>  
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #FF7F00;">CS 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
                <span style="color: #c99f00;">PAR 1 Escaño</span>
    <span style="color: #008000;">VOX 1 Escaño</span>
    <span style="color: #ab001c;">CHA 1 Escaño</span>
    
</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/02/22/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 8 Escaños</span> 
    <span style="color: #FF0000;">PSOE 7 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span>
    <span style="color: #ab001c;">CHA 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>
2026: <a href="https://elpais.com/espana/elecciones/autonomicas/02/22/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 7 Escaños</span> 
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #008000;">VOX 4 Escaños</span>
    <span style="color: #ab001c;">CHA 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Huesca es una provincia, que, como parte de Aragón forma parte del Ohio español, es decir, el partido ganador, es el que partido que va ganando a nivel nacional,
la izquierda ha ganado 4 veces en número de diputados: 1983, 2003, 2007 y 2015 en todas estas cuatro, sacando dos escaños de ventaja a la suma de la derecha, ha empatado otras 3 veces 1991, 2011 y 2019, de las cuales en 1991 y 2019 el PSOE ha sido primera fuerza como representante de la izquierda y en 2011 lo es el PP.
Por contrario la derecha ha ganado 5 veces, tanto en 1987,1995,1999, 2023 y 2026. En 1987 tan solo saca dos escaños de ventaja a la izquierda, en 1995 esa ventaja se amplia a cuatro escaños, en 1999 vuelve a reducirse a solo los dos de ventaja, en 2023 vuelven a ser dos de ventaja y en 2026 vuelven a ser cuatro de ventaja.
No la podemos situar ni en la izquierda ni en la derecha.

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Huesca</title>
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
if (provincia === "Zaragoza") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Zaragoza <span class="escaños">35 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://www.datoselecciones.com/aragon-parlamento-1983/zaragoza" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 18 Escaños</span> 
                <span style="color: #c99f00;">PAR 8 Escaños</span>
                <span style="color: #ADD8E6;">AP-PDP-UL 7 Escaños</span>
                <span style="color: #FF0D00;">PCE 1 Escaño</span>
                <span style="color: #006400;">CDS 1 Escaño</span>
                </a>
                <br><br>
                El PSOE gana dos escaños y el PAR uno, por lo que la suma de PSOE y PCE saca tres escaños de ventaja a la suma de PAR, AP-PDP-UL y CDS
                <br><br>
                1987: <a href="https://www.datoselecciones.com/aragon-parlamento-1987/zaragoza" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                    <span style="color: #FF0000;">PSOE 13 Escaños</span> 
                <span style="color: #c99f00;">PAR 12 Escaños</span>
                <span style="color: #ADD8E6;">AP 5 Escaños</span>
                <span style="color: #006400;">CDS 3 Escaños</span>    
                <span style="color: #d25644;">CAA-IU 2 Escaños</span>
                </a>
                <br><br>
                PAR y CAA-IU suben un escaño, por lo que la suma de PAR, AP y CDS saca cinco escaños de ventaja a la suma de PSOE y CAA-IU
                <br><br>
                1991: <a href="https://www.datoselecciones.com/aragon-parlamento-1991/zaragoza" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 16 Escaños</span>  
                <span style="color: #c99f00;">PAR 10 Escaños</span>
                <span style="color: #0000FF;">PP 7 Escaños</span> 
                <span style="color: #d25644;">CAA-IU 2 Escaños</span>
                </a>
                <br><br>
                PSOE y PAR suben un escaño, por lo que la suma de PSOE y CAA-IU saca un escaño de ventaja a la suma de PAR y PP
                <br><br>
                1995: <a href="https://www.datoselecciones.com/aragon-parlamento-1995/zaragoza" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 14 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 8 Escaños</span>  
                <span style="color: #c99f00;">PAR 7 Escaños</span>
                <span style="color: #d25644;">IUA 4 Escaños</span>
                <span style="color: #ab001c;">CHA 2 Escaños</span>
                </a>
                <br><br>
                PP e IUA suben un escaño, por lo que la suma de PP y PAR saca siete escaños de ventaja a la suma de PSOE, IUA y CHA
                <br><br>
                1999: <a href="https://www.datoselecciones.com/aragon-parlamento-1999/zaragoza" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                    <span style="color: #0000FF;">PP 15 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 11 Escaños</span>
                    <span style="color: #ab001c;">CHA 4 Escaños</span>
                <span style="color: #c99f00;">PAR 4 Escaños</span>
                <span style="color: #d25644;">IU 1 Escaño</span>
                </a>
                <br><br>
                El PP gana un escaño y sumando al PAR sacan tres escaños de ventaja a la suma de PSOE, CHA e IU
                <br><br>
                2003: <a href="https://www.datoselecciones.com/aragon-parlamento-2003/zaragoza" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 14 Escaños</span>
                    <span style="color: #0000FF;">PP 11 Escaños</span> 
                    <span style="color: #ab001c;">CHA 6 Escaños</span>
                <span style="color: #c99f00;">PAR 3 Escaños</span>
                <span style="color: #d25644;">IU 1 Escaño</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/02/50.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 15 Escaños</span>
                    <span style="color: #0000FF;">PP 12 Escaños</span> 
                <span style="color: #c99f00;">PAR 4 Escaños</span>
                <span style="color: #ab001c;">CHA 3 Escaños</span>
                <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/02/50.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 17 Escaños</span> 
    <span style="color: #FF0000;">PSOE 11 Escaños</span>  
                <span style="color: #ab001c;">CHA 3 Escaños</span>
                <span style="color: #c99f00;">PAR 2 Escaños</span>
                <span style="color: #d25644;">IU 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/02/50.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 11 Escaños</span> 
    <span style="color: #800080;">PODEMOS 8 Escaños</span>
    <span style="color: #FF0000;">PSOE 8 Escaños</span>  
    <span style="color: #FF7F00;">CS 3 Escaños</span>
    <span style="color: #c99f00;">PAR 2 Escaños</span>
    <span style="color: #ab001c;">CHA 2 Escaños</span>
    <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/02/50.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 11 Escaños</span>  
    <span style="color: #0000FF;">PP 8 Escaños</span> 
    <span style="color: #FF7F00;">CS 7 Escaños</span>
    <span style="color: #800080;">PODEMOS 3 Escaños</span>
    <span style="color: #ab001c;">CHA 2 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span>
    <span style="color: #c99f00;">PAR 1 Escaño</span>
    <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/02/22/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 15 Escaños</span> 
    <span style="color: #FF0000;">PSOE 12 Escaños</span>
    <span style="color: #008000;">VOX 4 Escaños</span>
    <span style="color: #ab001c;">CHA 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>
2026: <a href="https://elpais.com/espana/elecciones/autonomicas/02/50/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 14 Escaños</span> 
    <span style="color: #FF0000;">PSOE 9 Escaños</span>
    <span style="color: #008000;">VOX 7 Escaños</span>
    <span style="color: #ab001c;">CHA 4 Escaños</span>
    <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Zaragoza es una provincia que como forma parte del Ohio español que es Aragón el partido que gana, gana en toda España a nivel nacional, ha habido un mayor número de victorias de la derecha en escaños: 6 veces frente a 5 de la izquierda.
Las 7 veces que ha ganado la derecha han sido en 1987, 1995, 1999, 2011, 2019, 2023 y 2026. En 1987 aventaja en 5 escaños a la izquierda, en 1995 la aventaja en 7, en 1999 se reduce esa ventaja a dos, en 2019 solo aventaja por uno, en 2023 saca tres escaños de ventaja y en 2026 la ventaja se vuelve a ampliar a siete. Cabe destacar que a pesar de ello, en 1999 y 2019 el PAR pactará con el PSOE, ejerciendo como un partido de centro, una bisagra que es capaz de captar en ocasiones con la izquierda y en otras ocasiones con la derecha.
Por otro lado, las cinco veces que se ha mostrado ganadora la izquierda ha sido en 1983, 1991, 2003, 2007 y 2015. En 1983 ha sacado dos escaños de ventaja a la derecha, en el 91 fue de solo uno, en 2003 se amplia a 7 escaños de ventaja, despues en 2007 se reduce a tres escaños de ventaja y en el 2015 vuelve a ser de tres escaños.
Está ligeramente inclinada a la derecha, pero no es una tan determinante ventaja. 
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Zaragoza</title>
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
if (provincia === "Teruel") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Teruel <span class="escaños">14 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://www.datoselecciones.com/aragon-parlamento-1983/teruel" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 6 Escaños</span> 
                <span style="color: #ADD8E6;">AP-PDP-UL 5 Escaños</span>
                <span style="color: #c99f00;">PAR 3 Escaños</span>
                </a>
                <br><br>
                PSOE y PAR pierden un escaño, por lo que la suma de AP-PDP-UL y PAR saca dos escaños de ventaja al PSOE
                <br><br>
                1987: <a href="https://www.datoselecciones.com/aragon-parlamento-1987/teruel" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                    <span style="color: #FF0000;">PSOE 6 Escaños</span> 
                    <span style="color: #ADD8E6;">AP 4 Escaños</span>
                <span style="color: #c99f00;">PAR 3 Escaños</span>
                <span style="color: #006400;">CDS 1 Escaño</span>    
                </a>
                <br><br>
                PSOE y PAR pierden un escaño, por lo que la suma de AP, PAR y CDS saca dos escaños de ventaja al PSOE
                <br><br>
                1991: <a href="https://www.datoselecciones.com/aragon-parlamento-1991/teruel" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 6 Escaños</span>  
                    <span style="color: #0000FF;">PP 5 Escaños</span> 
                <span style="color: #c99f00;">PAR 3 Escaños</span>
                </a>
                <br><br>
                PSOE y PP pierden un escaño, por lo que la suma de PP y PAR saca dos escaños de ventaja al PSOE
                <br><br>
                1995: <a href="https://www.datoselecciones.com/aragon-parlamento-1995/teruel" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 6 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 5 Escaños</span>  
                <span style="color: #c99f00;">PAR 3 Escaños</span>
                </a>
                <br><br>
                El PP pierde un escaño e IU también, perdiendo su representación, por lo que la suma de PP y PAR saca cuatro escaños de ventaja al PSOE
                <br><br>
                1999: <a href="https://www.datoselecciones.com/aragon-parlamento-1999/teruel" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                    <span style="color: #0000FF;">PP 6 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 5 Escaños</span>
                <span style="color: #c99f00;">PAR 3 Escaños</span>
                </a>
                <br><br>
                El PP pierde un escaño, pero la suma de PP y PAR saca cuatro escaños de ventaja al PSOE
                <br><br>
                2003: <a href="https://www.datoselecciones.com/aragon-parlamento-2003/teruel" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 5 Escaños</span>
                    <span style="color: #0000FF;">PP 5 Escaños</span> 
                <span style="color: #c99f00;">PAR 3 Escaños</span>
                <span style="color: #ab001c;">CHA 1 Escaño</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/02/50.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 6 Escaños</span>
                    <span style="color: #0000FF;">PP 5 Escaños</span> 
                <span style="color: #c99f00;">PAR 3 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/02/44.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 6 Escaños</span> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>  
                <span style="color: #c99f00;">PAR 3 Escaños</span>
                <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/02/44.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span>
    <span style="color: #FF0000;">PSOE 4 Escaños</span>  
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #c99f00;">PAR 2 Escaños</span> 
    <span style="color: #FF7F00;">CS 1 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/02/44.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 6 Escaños</span>  
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #FF7F00;">CS 2 Escaños</span>
    <span style="color: #c99f00;">PAR 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/02/44/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #006400;">¡ARAGÓN EXISTE! 3 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span>
    <span style="color: #c99f00;">PAR 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>
2026: <a href="https://elpais.com/espana/elecciones/autonomicas/2023/02/44/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #008000;">VOX 3 Escaños</span>
    <span style="color: #006400;">¡ARAGÓN EXISTE! 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>
2026: <a href="https://elpais.com/espana/elecciones/autonomicas/02/44/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #008000;">VOX 3 Escaños</span>
    <span style="color: #006400;">¡ARAGÓN EXISTE! 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Teruel es una provincia, que aunque si que es cierto que clava el partido ganador en la comunidad (la fuerza más votada), en términos de bloques, la derecha ha aventajado siempre a la izquierda por amplias ventajas, menos en el 2023 y aun este año tiene matices:
Es un feudo de la derecha, porque en la tres primeras elecciones del 1983-1991 la derecha aventaja a la izquierda en dos escaños,en el 95 y en el 99 queda ampliada a cuatro, en 2003 y 2007 vuelve a aventajar a la izquierda por dos escaños,
en el 2011 vuelve a ampliarse a una distancia de cuatro escaños a su favor, en el 2015 volvemos a esos dos escaños de ventaja para la derecha. En el 2019 hay un empate con ligera ventaja para la derecha, en el 2023 hay otro empate, pero con ligera ventaja hacia la "izquierda", pero hay que tener en cuenta que surge el fenómeno "Aragón Existe", que es un partido aragonesista transversal, que es capaz de recoger algún voto conservador y en 2026
la derecha vuelve a aventajar en dos escaños a la "izquierda".
En conclusión es la provincia sociológicamente más de derechas de Aragón.
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Teruel</title>
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
if (provincia === "Aragon") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Aragon <span class="escaños">67 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://www.datoselecciones.com/aragon-parlamento-1983" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 34 Escaños</span> 
                <span style="color: #ADD8E6;">AP-PDP-UL 18 Escaños</span>
                <span style="color: #c99f00;">PAR 13 Escaños</span>
                <span style="color: #FF0D00;">PCE 1 Escaño</span>
                <span style="color: #006400;">CDS 1 Escaño</span>
                </a>
                <br><br>
                El PSOE sube un escaño y obtiene mayoría absoluta exacta
                <br><br>
                1987: <a href="https://www.datoselecciones.com/aragon-parlamento-1987" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                    <span style="color: #FF0000;">PSOE 26 Escaños</span> 
                <span style="color: #c99f00;">PAR 20 Escaños</span>
                <span style="color: #ADD8E6;">AP 12 Escaños</span>
                <span style="color: #006400;">CDS 6 Escaños</span>    
                <span style="color: #d25644;">CAA-IU 3 Escaños</span>
                </a>
                <br><br>
                PAR, AP y CDS sacan cuatro escaños por encima de la mayoría absoluta
                <br><br>
                1991: <a href="https://www.datoselecciones.com/aragon-parlamento-1991" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 30 Escaños</span>  
                <span style="color: #c99f00;">PAR 18 Escaños</span>
                <span style="color: #0000FF;">PP 16 Escaños</span> 
                <span style="color: #d25644;">CAA-IU 3 Escaños</span>
                </a>
                <br><br>
                PAR sube un escaño y PP baja un escaño, sacando la mayoría absoluta exacta
                <br><br>
                1995: <a href="https://www.datoselecciones.com/aragon-parlamento-1995" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 27 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 19 Escaños</span>  
                <span style="color: #c99f00;">PAR 14 Escaños</span>
                <span style="color: #d25644;">IUA 5 Escaños</span>
                <span style="color: #ab001c;">CHA 2 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1999: <a href="https://www.datoselecciones.com/aragon-parlamento-1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                    <span style="color: #0000FF;">PP 28 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 23 Escaños</span>
                <span style="color: #c99f00;">PAR 10 Escaños</span>
                <span style="color: #ab001c;">CHA 5 Escaños</span>
                <span style="color: #d25644;">IU 1 Escaño</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                2003: <a href="https://www.datoselecciones.com/aragon-parlamento-2003" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 27 Escaños</span>
                    <span style="color: #0000FF;">PP 22 Escaños</span> 
                    <span style="color: #ab001c;">CHA 9 Escaños</span>
                <span style="color: #c99f00;">PAR 8 Escaños</span>
                <span style="color: #d25644;">IU 1 Escaño</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/02/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 30 Escaños</span>
                    <span style="color: #0000FF;">PP 23 Escaños</span> 
                <span style="color: #c99f00;">PAR 9 Escaños</span>
                <span style="color: #ab001c;">CHA 4 Escaños</span>
                <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/02/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 30 Escaños</span> 
    <span style="color: #FF0000;">PSOE 22 Escaños</span>  
                <span style="color: #c99f00;">PAR 7 Escaños</span>
                <span style="color: #ab001c;">CHA 4 Escaños</span>
                <span style="color: #d25644;">IU 4 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/02/50.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 21 Escaños</span> 
    <span style="color: #FF0000;">PSOE 18 Escaños</span>  
    <span style="color: #800080;">PODEMOS 14 Escaños</span>
    <span style="color: #c99f00;">PAR 6 Escaños</span>
    <span style="color: #FF7F00;">CS 5 Escaños</span>
    <span style="color: #ab001c;">CHA 2 Escaños</span>
    <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/02/50.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 24 Escaños</span>  
    <span style="color: #0000FF;">PP 16 Escaños</span> 
    <span style="color: #FF7F00;">CS 12 Escaños</span>
    <span style="color: #800080;">PODEMOS 5 Escaños</span>
    <span style="color: #ab001c;">CHA 3 Escaños</span>
    <span style="color: #008000;">VOX 3 Escaños</span>
    <span style="color: #c99f00;">PAR 3 Escaños</span>
    <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/2023/02/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 28 Escaños</span> 
    <span style="color: #FF0000;">PSOE 23 Escaños</span>
    <span style="color: #008000;">VOX 7 Escaños</span>
    <span style="color: #ab001c;">CHA 3 Escaños</span>
    <span style="color: #006400;">¡ARAGÓN EXISTE! 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #d25644;">IU 1 Escaño</span>
    <span style="color: #c99f00;">PAR 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>
2026: <a href="https://elpais.com/espana/elecciones/autonomicas/02/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 26 Escaños</span> 
    <span style="color: #FF0000;">PSOE 18 Escaños</span>
    <span style="color: #008000;">VOX 14 Escaños</span>
    <span style="color: #ab001c;">CHA 6 Escaños</span>
    <span style="color: #006400;">¡ARAGÓN EXISTE! 2 Escaños</span>
    <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Aragón es una comunidad autónoma que funciona como el Ohio de España. Ohio está en la llamada región de Medio Oeste de Estados Unidos, que se llama así aunque se sitúe en el noreste. Sus campos se extienden de Michigan a Pensilvania, del lago Erie a Kentucky, y es atravesado por el río Ohio que da nombre al territorio. De hecho, en lengua iroquesa, de los nativos americanos, significa ‘río grande’.

Otro que también es gigante es el Ebro, que tiene poco o nada que ver con Columbus, capital del estado en cuestión, pero que pasa por Zaragoza. Y es que Aragón mantiene una relación peculiar con la política que se desarrolla en dichas tierras norteamericanas. Ambos lugares tienen la buena costumbre de predecir con éxito quién gana las elecciones generales.



Dicho de forma rápida y sencilla. Quien gana en las provincias de Zaragoza, Huesca y Teruel posteriormente se proclama vencedor de los comicios estatales. Marca el rumbo de España.
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Aragon</title>
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