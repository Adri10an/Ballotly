    function abrirVentana(provincia) {

if (provincia === "Madrid") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Comunidad de Madrid <span class="escaños">94 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1983: <a href="https://www.datoselecciones.com/comunidad-de-madrid-parlamento-1983" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 51 Escaños</span> 
                <span style="color: #ADD8E6;">AP-PDP-UL 34 Escaños</span> 
                <span style="color: #FF0D00;">PCE 9 Escaños</span> 
                </a>
                <br><br>
                El PSOE las gana y sumando al PCE sacan veintiseis escaños de ventaja a AP-PDP-UL. El PSOE gana a AP-PDP-UL por 382424 votos y AP-PDP-UL casi cuadruplica al PCE en votos
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 96 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1987: <a href="https://www.datoselecciones.com/comunidad-de-madrid-parlamento-1987" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                <span style="color: #FF0000;">PSOE 40 Escaños</span>
                <span style="color: #ADD8E6;">FAP 32 Escaños</span>
                <span style="color: #006400;">CDS 17 Escaños</span>
                <span style="color: #d25644;">IU 7 Escaños</span>
                </a>
                <br><br>
                El PSOE las gana y aunque la suma de FAP y CDS le saca dos escaños de ventaja a la suma de PSOE e IU, CDS se abstiene y da la presidencia al PSOE.El PSOE gana a FAP por 170776 votos, FAP gana a CDS por 358662 votos y CDS dobla a IU en votos
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 101 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1991: <a href="https://www.datoselecciones.com/comunidad-de-madrid-parlamento-1991" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 47 Escaños</span>  
                    <span style="color: #FF0000;">PSOE 41 Escaños</span>
                    <span style="color: #d25644;">IU 13 Escaños</span>
                </a>
                <br><br>
                El PP las gana, pero la suma de PSOE e IU le sacan siete escaños de ventaja. El PP gana al PSOE por 136355 votos y el PSOE triplica a IU en votos
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 103 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1995: <a href="https://www.datoselecciones.com/comunidad-de-madrid-parlamento-1995" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 54 Escaños</span> 
                <span style="color: #FF0000;">PSOE 32 Escaño</span>
                <span style="color: #d25644;">IU 17 Escaños</span>
                </a>
                <br><br>
                El PP las gana sacando cinco escaños de ventaja a la suma de PSOE e IU. El PP gana al PSOE por 615716 votos y el PSOE gana a IU por 396559 votos
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 102 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1999: <a href="https://www.datoselecciones.com/comunidad-de-madrid-parlamento-1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 55 Escaños</span> 
                <span style="color: #FF0000;">PSOE 39 Escaños</span>
                <span style="color: #d25644;">IU-CM 8 Escaños</span>
                </a>
                <br><br>
                El PP las vuelve a ganar sacando ocho escaños de ventaja a la suma de PSOE e IU-CM. El PP gana al PSOE por 379777 votos y el PSOE cuadruplica a IU-CM en votos
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 111 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2003/25M: <a href="https://www.datoselecciones.com/comunidad-de-madrid-parlamento-2003-05" target="_blank" style="font-size: 1.5em; font-weight: bold;">
<span style="color: #0000FF;">PP 55 Escaños</span> 
<span style="color: #FF0000;">PSOE 47 Escaños</span>
<span style="color: #d25644;">IU 9 Escaños</span>
</a>
<br><br>
El PP las gana, pero la suma de PSOE e IU le saca un escaño de ventaja. El PP gana al PSOE por 204500 votos y el PSOE quintuplica a IU en votos
<br><br>

2003/26O: <a href="https://www.datoselecciones.com/comunidad-de-madrid-parlamento-2003-10" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 57 Escaños</span> 
<span style="color: #FF0000;">PSOE 45 Escaños</span>
<span style="color: #d25644;">IU 9 Escaños</span>
</a>
<br><br>
Las elecciones en el 2003 se repiten dos años despues y el PP las gana sacando tres escaños de ventaja a la suma de PSOE e IU. El PP gana al PSOE por 263383 votos y el PSOE cuadruplica a IU en votos
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 120 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/12/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
<span style="color: #0000FF;">PP 67 Escaños</span> 
<span style="color: #FF0000;">PSOE 42 Escaños</span>
<span style="color: #d25644;">IU 11 Escaños</span>
</a>
<br><br>
El PP las gana y saca catorce escaños de ventaja a la suma de PSOE e IU. El PP gana al PSOE por 589300 votos y el PSOE triplica a IU en votos
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 129 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/12/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
<span style="color: #0000FF;">PP 72 Escaños</span> 
<span style="color: #FF0000;">PSOE 36 Escaños</span>
<span style="color: #d25644;">IU-LV 13 Escaños</span>
<span style="color: #d7257d;">UPyD 8 Escaños</span>
</a>
<br><br>
El PP las gana sacando quince escaños de ventaja a la suma de PSOE, IU-LV y UPyD. El PP gana al PSOE por 762009 votos, el PSOE dobla a IU-LV en votos e IU-LV gana a UPyD por 98652 votos 
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/12/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
<span style="color: #0000FF;">PP 48 Escaños</span> 
<span style="color: #FF0000;">PSOE 37 Escaños</span>
<span style="color: #800080;">PODEMOS 27 Escaños</span>
<span style="color: #FF7F00;">CS 17 Escaños</span>
</a>
<br><br>
El PP las gana y sumando a CIUDADANOS sacan un escaño de ventaja a la suma de PSOE y PODEMOS. El PP gana al PSOE por 242871 votos, el PSOE gana a PODEMOS por 215688 votos y PODEMOS gana a CIUDADANOS por 205861 votos
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 132 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/12/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
<span style="color: #FF0000;">PSOE 37 Escaños</span>
<span style="color: #0000FF;">PP 30 Escaños</span> 
<span style="color: #FF7F00;">CS 26 Escaños</span>
<span style="color: #4ae5d2;">MÁS MADRID 20 Escaños</span>
<span style="color: #008000;">VOX 12 Escaños</span>
<span style="color: #800080;">PODEMOS-IU 7 Escaños</span>
</a>
<br><br>
El PSOE las gana, pero la suma de PP, CIUDADANOS y VOX le saca cuatro escaños de ventaja a la suma de PSOE, MÁS MADRID y PODEMOS-IU. El PSOE gana al PP por 164366 votos, el PP gana a CIUDADANOS por 89912 votos, CIUDADANOS gana a MÁS MADRID por 154268 votos, MÁS MADRID gana a VOX por 188005 votos y VOX gana a PODEMOS-IU por 106436 votos
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 136 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2021: <a href="https://resultados.elpais.com/elecciones/2021/autonomicas/12/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
<span style="color: #0000FF;">PP 65 Escaños</span> 
<span style="color: #4ae5d2;">MÁS MADRID 24 Escaños</span>
<span style="color: #FF0000;">PSOE 24 Escaños</span>
<span style="color: #008000;">VOX 13 Escaños</span>
<span style="color: #800080;">PODEMOS 10 Escaños</span>
</a>
<br><br>
El PP las gana y sumando a VOX sacan veinte escaños de ventaja a la suma de MÁS MADRID, PSOE y PODEMOS. El PP dobla a MÁS MADRID en votos, MÁS MADRID gana al PSOE por 6593 votos, el PSOE gana a VOX por 279219 votos y VOX gana a PODEMOS por 69532 votos
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 135 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2023: <a href="https://elecciones.comunidad.madrid/es/resultados-elecciones-asamblea-madrid-28m-2023" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 70 Escaños</span> 
<span style="color: #4ae5d2;">MÁS MADRID 27 Escaños</span>
<span style="color: #FF0000;">PSOE 27 Escaños</span>
<span style="color: #008000;">VOX 11 Escaños</span>
</a>
<br><br>
El PP las gana y sumando a VOX sacan veintisiete escaños de ventaja a la suma de MÁS MADRID y PSOE. El PP dobla a MÁS MADRID en votos, MÁS MADRID gana al PSOE por 6335 votos y el PSOE dobla a VOX en votos
<br><br>

En conclusión, La Comunidad de Madrid es una comunidad autónoma 

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Madrid</title>
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
function abrirVentanaEscenario143Madrid(provincia) {
if (provincia === "Madrid") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Comunidad de Madrid <span class="escaños">143 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://www.datoselecciones.com/comunidad-de-madrid-parlamento-1983" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 78 Escaños</span> 
                <span style="color: #ADD8E6;">AP-PDP-UL 52 Escaños</span> 
                <span style="color: #FF0D00;">PCE 13 Escaños</span> 
                </a>
                <br><br>
                El PSOE saca seis escaños por encima de la mayoría absoluta
                <br><br>
                1987: <a href="https://www.datoselecciones.com/comunidad-de-madrid-parlamento-1987" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                <span style="color: #FF0000;">PSOE 59 Escaños</span>
                <span style="color: #ADD8E6;">FAP 48 Escaños</span>
                <span style="color: #006400;">CDS 25 Escaños</span>
                <span style="color: #d25644;">IU 11 Escaños</span>
                </a>
                <br><br>
                La suma de FAP y CDS saca tres escaños de ventaja a la suma de PSOE e IU, pero el PSOE con la abstención de CDS e IU saca veintitres escaños por encima de la mayoría absoluta
                <br><br>
                1991: <a href="https://www.datoselecciones.com/comunidad-de-madrid-parlamento-1991" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 67 Escaños</span>  
                    <span style="color: #FF0000;">PSOE 57 Escaños</span>
                    <span style="color: #d25644;">IU 19 Escaños</span>
                </a>
                <br><br>
                El PP las gana, pero la suma de PSOE e IU le saca nueve escaños de ventaja y cuatro escaños por encima de la mayoría absoluta
                <br><br>
                1995: <a href="https://www.datoselecciones.com/comunidad-de-madrid-parlamento-1995" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 76 Escaños</span> 
                <span style="color: #FF0000;">PSOE 44 Escaño</span>
                <span style="color: #d25644;">IU 23 Escaños</span>
                </a>
                <br><br>
                El PP las gana sacando cuatro escaños por encima de la mayoría absoluta
                <br><br>
                1999: <a href="https://www.datoselecciones.com/comunidad-de-madrid-parlamento-1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 77 Escaños</span> 
                <span style="color: #FF0000;">PSOE 55 Escaños</span>
                <span style="color: #d25644;">IU-CM 11 Escaños</span>
                </a>
                <br><br>
                El PP las gana sacando cinco escaños por encima de la mayoría absoluta
                <br><br>
2003/25M: <a href="https://www.datoselecciones.com/comunidad-de-madrid-parlamento-2003-05" target="_blank" style="font-size: 1.5em; font-weight: bold;">
<span style="color: #0000FF;">PP 71 Escaños</span> 
<span style="color: #FF0000;">PSOE 61 Escaños</span>
<span style="color: #d25644;">IU 11 Escaños</span>
</a>
<br><br>
El PP las gana, pero la suma de PSOE e IU le saca un escaño de ventaja y sumaría la mayoría absoluta justa
<br><br>

2003/26O: <a href="https://www.datoselecciones.com/comunidad-de-madrid-parlamento-2003-10" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 73 Escaños</span> 
<span style="color: #FF0000;">PSOE 58 Escaños</span>
<span style="color: #d25644;">IU 12 Escaños</span>
</a>
<br><br>
El PP las gana sacando un escaño por encima de la mayoría absoluta
<br><br>
2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/12/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
<span style="color: #0000FF;">PP 80 Escaños</span> 
<span style="color: #FF0000;">PSOE 50 Escaños</span>
<span style="color: #d25644;">IU 13 Escaños</span>
</a>
<br><br>
El PP las gana sacando ocho escaños por encima de la mayoría absoluta
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/12/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
<span style="color: #0000FF;">PP 80 Escaños</span> 
<span style="color: #FF0000;">PSOE 40 Escaños</span>
<span style="color: #d25644;">IU-LV 14 Escaños</span>
<span style="color: #d7257d;">UPyD 9 Escaños</span>
</a>
<br><br>
El PP las gana sacando ocho escaños por encima de la mayoría absoluta
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/12/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
<span style="color: #0000FF;">PP 53 Escaños</span> 
<span style="color: #FF0000;">PSOE 41 Escaños</span>
<span style="color: #800080;">PODEMOS 30 Escaños</span>
<span style="color: #FF7F00;">CS 19 Escaños</span>
</a>
<br><br>
El PP las gana y sumando a CIUDADANOS sacan la mayoría absoluta exacta
<br><br>
2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/12/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
<span style="color: #FF0000;">PSOE 40 Escaños</span>
<span style="color: #0000FF;">PP 33 Escaños</span> 
<span style="color: #FF7F00;">CS 28 Escaños</span>
<span style="color: #4ae5d2;">MÁS MADRID 21 Escaños</span>
<span style="color: #008000;">VOX 13 Escaños</span>
<span style="color: #800080;">PODEMOS-IU 8 Escaños</span>
</a>
<br><br>
El PSOE las gana, pero la suma de PP, CIUDADANOS y VOX saca dos escaños por encima de la mayoría absoluta
<br><br>
2021: <a href="https://resultados.elpais.com/elecciones/2021/autonomicas/12/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
<span style="color: #0000FF;">PP 68 Escaños</span> 
<span style="color: #4ae5d2;">MÁS MADRID 26 Escaños</span>
<span style="color: #FF0000;">PSOE 25 Escaños</span>
<span style="color: #008000;">VOX 13 Escaños</span>
<span style="color: #800080;">PODEMOS 11 Escaños</span>
</a>
<br><br>
El PP pierde un escaño, pero sumando a VOX sacan nueve escaños por encima de la mayoría absoluta
<br><br>
2023: <a href="https://elecciones.comunidad.madrid/es/resultados-elecciones-asamblea-madrid-28m-2023" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 75 Escaños</span> 
<span style="color: #4ae5d2;">MÁS MADRID 29 Escaños</span>
<span style="color: #FF0000;">PSOE 28 Escaños</span>
<span style="color: #008000;">VOX 11 Escaños</span>
</a>
<br><br>
El PP las gana sacando tres escaños por encima de la mayoría absoluta
<br><br>

En conclusión, La Comunidad de Madrid es una comunidad autónoma 

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Madrid</title>
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