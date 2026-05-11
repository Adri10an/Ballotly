   function abrirVentana(provincia) {

if (provincia === "Guadalajara") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Guadalajara <span class="escaños">7 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1983: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1983/guadalajara" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #ADD8E6;">AP-PDP-UL 4 Escaños</span> 
                <span style="color: #FF0000;">PSOE 3 Escaños</span>  
                </a>
                <br><br>
                AP-PDP las gana sacando un escaño de ventaja al PSOE al que aventaja en 5243 votos
                <br><br>
                1987: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1987/guadalajara" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #ADD8E6;">AP 3 Escaños</span>  
                <span style="color: #FF0000;">PSOE 3 Escaños</span>
                <span style="color: #006400;">CDS 1 Escaño</span>
                </a>
                <br><br>
                AP las gana y sumando a CDS sacan un escaño de ventaja al PSOE. AP gana al PSOE por 3351 votos y el PSOE triplica a CDS en votos
                <br><br>
                1991: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1991/guadalajara" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 4 Escaños</span> 
                <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                </a>
                <br><br>
                El PP las gana sacando un escaño de ventaja al PSOE al que aventaja en 2980 votos
                <br><br>
                1995: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1995/guadalajara" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 4 Escaños</span> 
                <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                </a>
                <br><br>
                El PP las gana sacando un escaño de ventaja al PSOE al que aventaja en 10608 votos
                <br><br>
                1999: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1999/guadalajara" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE-PROGR 4 Escaños</span>
                <span style="color: #0000FF;">PP 3 Escaños</span> 
                </a>
                <br><br>
                PSOE-PROGR las gana sacando un escaño de ventaja al PP al que aventaja en 2732 votos
                <br><br>
                2003: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-2003/guadalajara" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 4 Escaños</span>
                    <span style="color: #0000FF;">PP 3 Escaños</span> 
                </a>
                <br><br>
                El PSOE las gana sacando un escaño de ventaja al PP al que aventaja en 14485 votos
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/07/19.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
</a>
<br><br>
El PP las gana sacando un escaño de ventaja al PSOE al que aventaja por tan solo 849 votos
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 8 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/07/19.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
</a>
<br><br>
El PP las gana sacando dos escaños de ventaja al PSOE al que aventaja en 15221 votos
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 5 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/07/19.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
</a>
<br><br>
El PP las gana, pero la suma de PSOE y PODEMOS le saca un escaño de ventaja. El PP gana al PSOE por 4560 votos y el PSOE dobla a PODEMOS en votos
<br><br>

2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/07/19.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 1 Escaño</span> 
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
El PSOE las gana sacando un escaño de ventaja a la suma de PP y CS. El PSOE gana al PP por 19175 votos y el PP gana a CIUDADANOS por 12491 votos
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/07/19/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #008000;">VOX 1 Escaño</span> 
</a>
<br><br>
El PSOE las gana, pero la suma de PP y VOX le saca un escaño de ventaja. El PSOE gana al PP por 15505 votos y el PP gana a VOX por 18497 votos
<br><br>
En conclusión, Guadalajara es una provincia

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Guadalajara</title>
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
if (provincia === "Cuenca") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Cuenca <span class="escaños">8 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1983/cuenca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #ADD8E6;">AP-PDP-UL 4 Escaños</span> 
                <span style="color: #FF0000;">PSOE 4 Escaños</span>  
                </a>
                <br><br>
                AP-PDP las gana empatando en escaños al PSOE al que aventaja en 2753 votos
                <br><br>
                1987: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1987/cuenca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 4 Escaños</span>
                <span style="color: #ADD8E6;">AP 4 Escaños</span>  
                </a>
                <br><br>
                El PSOE las gana empatando en escaños a AP al que aventaja en 7714 votos
                <br><br>
                1991: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1991/cuenca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 5 Escaños</span> 
                <span style="color: #0000FF;">PP 3 Escaños</span> 
                </a>
                <br><br>
                El PSOE las gana sacando dos escaños de ventaja al PP al que aventaja en 13560 votos
                <br><br>
                1995: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1995/cuenca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 4 Escaños</span> 
                <span style="color: #FF0000;">PSOE 4 Escaños</span> 
                </a>
                <br><br>
                El PP las gana empatando en escaños con el PSOE al que aventaja en 2403 votos
                <br><br>
                1999: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1999/cuenca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE-PROGR 4 Escaños</span>
                <span style="color: #0000FF;">PP 4 Escaños</span> 
                </a>
                <br><br>
                PSOE-PROGR las gana empatando en escaños con el PP al que aventaja en 7435 votos
                <br><br>
                2003: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-2003/cuenca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 5 Escaños</span>
                    <span style="color: #0000FF;">PP 3 Escaños</span> 
                </a>
                <br><br>
                El PSOE las gana sacando dos escaños de ventaja al PP al que aventaja en 17690 votos
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/07/16.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 4 Escaños</span>
                    <span style="color: #0000FF;">PP 4 Escaños</span> 
</a>
<br><br>
El PSOE las gana empatando en escaños con el PP al que aventaja en 8105 votos
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/07/16.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
</a>
<br><br>
El PP las gana empatando en escaños con el PSOE al que aventaja por tan solo 1122 votos
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 5 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/07/16.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
El PP las gana sacando un escaño de ventaja al PSOE al que aventaja en 4657 votos
<br><br>

2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/07/16.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
</a>
<br><br>
El PSOE las gana sacando un escaño de ventaja al PP al que aventaja en 15777 votos
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/07/16/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
</a>
<br><br>
El PSOE las gana sacando un escaño de ventaja al PP al que aventaja en 15603 votos
<br><br>
En conclusión, Cuenca es una provincia

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Cuenca</title>
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
if (provincia === "Albacete") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Albacete <span class="escaños">9 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1983/albacete" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 5 Escaños</span>  
                <span style="color: #ADD8E6;">AP-PDP-UL 4 Escaños</span> 
                </a>
                <br><br>
                El PSOE las gana sacando un escaño de ventaja a AP-PDP-UL al que aventaja en 27641 votos
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 10 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1987: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1987/albacete" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 6 Escaños</span>
                <span style="color: #ADD8E6;">AP 3 Escaños</span>  
                <span style="color: #006400;">CDS 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana sacando dos escaños de ventaja a la suma de AP y CDS. El PSOE gana a AP por 32408 votos y AP casi triplica a CDS en votos
                <br><br>
                1991: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1991/albacete" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 6 Escaños</span> 
                <span style="color: #0000FF;">PP 3 Escaños</span> 
                <span style="color: #d25644;">IU 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a IU sacan cuatro escaños de ventaja al PP. El PSOE gana al PP por 41852 votos y el PP triplica a IU en votos
                <br><br>
                1995: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1995/albacete" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 5 Escaños</span> 
                <span style="color: #0000FF;">PP 4 Escaños</span> 
                <span style="color: #d25644;">IU 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a IU sacan dos escaños de ventaja al PP. El PSOE gana al PP por 2722 votos y el PP cuadruplica en votos a IU
                <br><br>
                1999: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1999/albacete" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE-PROGR 6 Escaños</span>
                <span style="color: #0000FF;">PP 4 Escaños</span> 
                </a>
                <br><br>
                PSOE-PROGR las gana sacando dos escaños de ventaja al PP al que aventaja en 39518 votos
                <br><br>
                2003: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-2003/albacete" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 6 Escaños</span>
                    <span style="color: #0000FF;">PP 4 Escaños</span> 
                </a>
                <br><br>
                El PSOE las gana sacando dos escaños de ventaja al PP al que aventaja en 47476 votos
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/07/02.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 6 Escaños</span>
    <span style="color: #0000FF;">PP 4 Escaños</span> 
</a>
<br><br>
El PSOE las gana sacando dos escaños de ventaja al PP al que aventaja en 25611 votos
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/07/02.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
</a>
<br><br>
El PP las gana empatando en escaños al PSOE al que aventaja en 15345 votos
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 6 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/07/02.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
</a>
<br><br>
El PP las gana empatando en escaños a la suma de PSOE y PODEMOS. El PP gana al PSOE por 6063 votos y el PSOE casi triplica en votos a PODEMOS
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 7 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/07/02.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
El PSOE las gana sacando un escaño de ventaja a la suma de PP y CS. El PSOE gana al PP por 26377 votos y el PP dobla a CIUDADANOS en votos
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/07/02/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #008000;">VOX 1 Escaño</span> 
</a>
<br><br>
El PSOE las gana, pero la suma de PP y VOX le saca un escaño de ventaja al PSOE. El PSOE gana al PP por 14508 votos y el PP casi triplica en votos a VOX
<br><br>
En conclusión, Albacete es una provincia 

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Albacete</title>
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
if (provincia === "Ciudad Real") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Ciudad Real <span class="escaños">10 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1983/ciudad-real" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 6 Escaños</span>  
                <span style="color: #ADD8E6;">AP-PDP-UL 4 Escaños</span> 
                </a>
                <br><br>
                El PSOE las gana sacando dos escaños de ventaja a AP-PDP-UL al que aventaja en 27651 votos
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 11 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1987: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1987/ciudad-real" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 6 Escaños</span>
                <span style="color: #ADD8E6;">AP 4 Escaños</span>  
                <span style="color: #006400;">CDS 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana sacando un escaño de ventaja a la suma de AP y CDS. El PSOE gana a AP por 54891 votos y AP dobla a CDS en votos
                <br><br>
                1991: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1991/ciudad-real" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 7 Escaños</span> 
                <span style="color: #0000FF;">PP 4 Escaños</span> 
                </a>
                <br><br>
                El PSOE las gana sacando tres escaños de ventaja al PP al que aventaja en 63280 votos
                <br><br>
                1995: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1995/ciudad-real" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 6 Escaños</span> 
                <span style="color: #0000FF;">PP 5 Escaños</span> 
                </a>
                <br><br>
                El PSOE las gana sacando un escaño de ventaja al PP al que aventaja en 12062 votos
                <br><br>
                1999: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1999/ciudad-real" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE-PROGR 6 Escaños</span>
                <span style="color: #0000FF;">PP 5 Escaños</span> 
                </a>
                <br><br>
                PSOE-PROGR las gana sacando un escaño de ventaja al PP al que aventaja en 40806 votos
                <br><br>
                2003: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-2003/ciudad-real" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 7 Escaños</span>
                    <span style="color: #0000FF;">PP 4 Escaños</span> 
                </a>
                <br><br>
                El PSOE las gana sacando tres escaños de ventaja al PP al que aventaja en 74105 votos
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/07/13.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 7 Escaños</span>
    <span style="color: #0000FF;">PP 4 Escaños</span> 
</a>
<br><br>
El PSOE las gana sacando tres escaños de ventaja al PP al que aventaja en 46310 votos
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/07/13.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 6 Escaños</span>
    <span style="color: #0000FF;">PP 5 Escaños</span> 
</a>
<br><br>
El PSOE las gana sacando un escaño de ventaja al PP al que aventaja por tan solo 633 votos
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 8 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/07/13.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 4 Escaños</span> 
</a>
<br><br>
El PSOE las gana empatando en escaños al PP al que aventaja en 4804 votos
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 7 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/07/02.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
El PSOE las gana sacando un escaño de ventaja a la suma de PP y CS. El PSOE gana al PP por 47390 votos y el PP dobla a CIUDADANOS en votos
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/07/13/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #008000;">VOX 1 Escaño</span> 
</a>
<br><br>
El PSOE las gana sacando un escaño de ventaja a la suma de PP y VOX. El PSOE gana al PP por 31983 votos y el PP casi triplica a VOX en votos
<br><br>
En conclusión, Ciudad Real es una provincia 

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Ciudad Real</title>
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
if (provincia === "Toledo") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Toledo <span class="escaños">10 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1983/toledo" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 5 Escaños</span>  
                <span style="color: #ADD8E6;">AP-PDP-UL 5 Escaños</span> 
                </a>
                <br><br>
                El PSOE las gana empatando en escaños a AP-PDP-UL al que aventaja en 4205 votos
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 11 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1987: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1987/toledo" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 6 Escaños</span>
                <span style="color: #ADD8E6;">AP 4 Escaños</span>  
                <span style="color: #006400;">CDS 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana sacando un escaño de ventaja a la suma de AP y CDS. El PSOE gana a AP por 23481 votos y AP triplica a CDS en votos
                <br><br>
                1991: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1991/toledo" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 6 Escaños</span> 
                <span style="color: #0000FF;">PP 5 Escaños</span> 
                </a>
                <br><br>
                El PSOE las gana sacando un escaño de ventaja al PP al que aventaja en 37522 votos
                <br><br>
                1995: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1995/toledo" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 6 Escaños</span> 
                <span style="color: #0000FF;">PP 5 Escaños</span> 
                </a>
                <br><br>
                El PSOE las gana sacando un escaño de ventaja al PP al que aventaja en 12988 votos
                <br><br>
                1999: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1999/toledo" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE-PROGR 6 Escaños</span>
                <span style="color: #0000FF;">PP 5 Escaños</span> 
                </a>
                <br><br>
                PSOE-PROGR las gana sacando un escaño de ventaja al PP al que aventaja en 46310 votos
                <br><br>
                2003: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-2003/toledo" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 7 Escaños</span>
                    <span style="color: #0000FF;">PP 4 Escaños</span> 
                </a>
                <br><br>
                El PSOE las gana sacando tres escaños de ventaja al PP al que aventaja en 78329 votos
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/07/45.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 6 Escaños</span>
    <span style="color: #0000FF;">PP 5 Escaños</span> 
</a>
<br><br>
El PSOE las gana sacando un escaño de ventaja al PP al que aventaja en 26353 votos
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 12 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/07/45.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 6 Escaños</span> 
    <span style="color: #FF0000;">PSOE 6 Escaños</span>
</a>
<br><br>
El PP las gana empatando en escaños con el PSOE al que aventaja en 24161 votos
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 9 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/07/45.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
</a>
<br><br>
El PP las gana, pero la suma de PSOE y PODEMOS le saca un escaño de ventaja. El PP gana al PSOE por 4866 votos, el PSOE cuadruplica a PODEMOS en votos y PODEMOS gana su escaño aventajando a CIUDADANOS por tan solo 1126
<br><br>
2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/07/45.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
El PSOE las gana sacando un escaño de ventaja a la suma de PP y CS. El PSOE gana al PP por 58988 votos y el PP dobla a CIUDADANOS en votos
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/07/45/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #008000;">VOX 1 Escaño</span> 
</a>
<br><br>
El PSOE las gana sacando un escaño de ventaja a la suma de PP y VOX. El PSOE gana al PP por 44746 votos y el PP dobla a VOX en votos
<br><br>
En conclusión, Toledo es una provincia 

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Toledo</title>
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
if (provincia === "Castilla La Mancha") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Castilla La Mancha <span class="escaños">44 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1983" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 23 Escaños</span>  
                <span style="color: #ADD8E6;">AP-PDP-UL 21 Escaños</span> 
                </a>
                <br><br>
                El PSOE las gana sacando la mayoría absoluta exacta
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 47 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1987: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1987" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 25 Escaños</span>
                <span style="color: #ADD8E6;">AP 18 Escaños</span>  
                <span style="color: #006400;">CDS 4 Escaños</span>
                </a>
                <br><br>
                El PSOE las gana sacando un escaño por encima de la mayoría absoluta
                <br><br>
                1991: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1991/toledo" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 27 Escaños</span> 
                <span style="color: #0000FF;">PP 19 Escaños</span>
                <span style="color: #d25644;">IU 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana sacando tres escaños por encima de la mayoría absoluta
                <br><br>
                1995: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1995" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 24 Escaños</span> 
                <span style="color: #0000FF;">PP 22 Escaños</span>
                <span style="color: #d25644;">IU 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana sacando la mayoría absoluta exacta
                <br><br>
                1999: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE-PROGR 26 Escaños</span>
                <span style="color: #0000FF;">PP 21 Escaños</span> 
                </a>
                <br><br>
                El PSOE las gana sacan dos escaños por encima de la mayoría absoluta
                <br><br>
                2003: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-2003" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 29 Escaños</span>
                    <span style="color: #0000FF;">PP 18 Escaños</span> 
                </a>
                <br><br>
                El PSOE las gana sacando cinco escaños por encima de la mayoría absoluta
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/07/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 26 Escaños</span>
    <span style="color: #0000FF;">PP 21 Escaños</span> 
</a>
<br><br>
El PSOE las gana sacando dos escaños por encima de la mayoría absoluta
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 49 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/07/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 25 Escaños</span> 
    <span style="color: #FF0000;">PSOE 24 Escaños</span>
</a>
<br><br>
El PP las gana sacando la mayoría absoluta exacta
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 33 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/07/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 16 Escaños</span> 
    <span style="color: #FF0000;">PSOE 14 Escaños</span>
    <span style="color: #800080;">PODEMOS 3 Escaños</span>
</a>
<br><br>
El PP las gana, pero la suma de PSOE y PODEMOS le saca un escaño de ventaja
<br><br>
2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/07/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 19 Escaños</span>
    <span style="color: #0000FF;">PP 10 Escaños</span> 
    <span style="color: #FF7F00;">CS 4 Escaños</span>
</a>
<br><br>
El PSOE las gana sacando dos escaños por encima de la mayoría absoluta
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/07/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 17 Escaños</span>
    <span style="color: #0000FF;">PP 12 Escaños</span> 
    <span style="color: #008000;">VOX 4 Escaños</span> 
</a>
<br><br>
El PSOE las gana sacando la mayoría absoluta exacta
<br><br>
En conclusión, Castilla La Mancha es una comunidad autónoma
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Castilla La Mancha</title>
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
function abrirVentanaEscenariocospedal(provincia) {
    if (provincia === "Guadalajara") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Guadalajara <span class="escaños">5 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1983/guadalajara" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #ADD8E6;">AP-PDP-UL 3 Escaños</span> 
                <span style="color: #FF0000;">PSOE 2 Escaños</span>  
                </a>
                <br><br>
                AP-PDP-UL saca un escaño de ventaja al PSOE
                <br><br>
                1987: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1987/guadalajara" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #ADD8E6;">AP 3 Escaños</span>  
                <span style="color: #FF0000;">PSOE 2 Escaños</span>
                </a>
                <br><br>
                AP saca un escaño de ventaja al PSOE, mientras que CDS pierde su escaño
                <br><br>
                1991: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1991/guadalajara" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 3 Escaños</span> 
                <span style="color: #FF0000;">PSOE 2 Escaños</span> 
                </a>
                <br><br>
                El PP saca un escaño de ventaja al PSOE
                <br><br>
                1995: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1995/guadalajara" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 3 Escaños</span> 
                <span style="color: #FF0000;">PSOE 2 Escaños</span> 
                </a>
                <br><br>
                El PP saca un escaño de ventaja al PSOE
                <br><br>
                1999: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1999/guadalajara" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE-PROGR 3 Escaños</span>
                <span style="color: #0000FF;">PP 2 Escaños</span> 
                </a>
                <br><br>
                PSOE-PROGR las gana sacando un escaño de ventaja al PP
                <br><br>
                2003: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-2003/guadalajara" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 3 Escaños</span>
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
                </a>
                <br><br>
                El PSOE las gana sacando un escaño de ventaja al PP
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/07/19.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
El PP las gana sacando un escaño de ventaja al PSOE
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/07/19.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
El PP las gana sacando un escaño de ventaja al PSOE
<br><br>
2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/07/19.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/07/19.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 1 Escaño</span> 
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/07/19/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #008000;">VOX 1 Escaño</span> 
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Guadalajara es una provincia

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Guadalajara</title>
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
if (provincia === "Cuenca") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Cuenca <span class="escaños">5 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1983/cuenca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #ADD8E6;">AP-PDP-UL 3 Escaños</span> 
                <span style="color: #FF0000;">PSOE 2 Escaños</span>  
                </a>
                <br><br>
                AP-PDP-UL saca un escaño de ventaja al PSOE
                <br><br>
                1987: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1987/cuenca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 3 Escaños</span>
                <span style="color: #ADD8E6;">AP 2 Escaños</span>  
                </a>
                <br><br>
                El PSOE saca un escaño de ventaja a AP
                <br><br>
                1991: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1991/cuenca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                <span style="color: #0000FF;">PP 2 Escaños</span> 
                </a>
                <br><br>
                El PSOE saca un escaño de ventaja al PP
                <br><br>
                1995: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1995/cuenca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 3 Escaños</span> 
                <span style="color: #FF0000;">PSOE 2 Escaños</span> 
                </a>
                <br><br>
                El PP saca un escaño de ventaja al PSOE
                <br><br>
                1999: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1999/cuenca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE-PROGR 3 Escaños</span>
                <span style="color: #0000FF;">PP 2 Escaños</span> 
                </a>
                <br><br>
                PSOE-PROGR saca un escaño de ventaja al PP
                <br><br>
                2003: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-2003/cuenca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 3 Escaños</span>
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
                </a>
                <br><br>
                El PSOE saca un escaño de ventaja al PP
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/07/16.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 3 Escaños</span>
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
</a>
<br><br>
El PSOE saca un escaño de ventaja al PP
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/07/16.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
El PP saca un escaño de ventaja al PSOE
<br><br>
2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/07/16.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/07/16.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/07/16/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Cuenca es una provincia
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Cuenca</title>
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
if (provincia === "Albacete") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Albacete <span class="escaños">7 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1983/albacete" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 4 Escaños</span>  
                <span style="color: #ADD8E6;">AP-PDP-UL 3 Escaños</span> 
                </a>
                <br><br>
                El PSOE saca un escaño de ventaja a AP-PDP-UL 
                <br><br>
                1987: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1987/albacete" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 4 Escaños</span>
                <span style="color: #ADD8E6;">AP 2 Escaños</span>  
                <span style="color: #006400;">CDS 1 Escaño</span>
                </a>
                <br><br>
                El PSOE saca un escaño de ventaja a la suma de AP y CDS
                <br><br>
                1991: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1991/albacete" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 5 Escaños</span> 
                <span style="color: #0000FF;">PP 2 Escaños</span> 
                </a>
                <br><br>
                El PSOE saca tres escaños de ventaja al PP, mientras IU pierde su escaño
                <br><br>
                1995: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1995/albacete" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 4 Escaños</span> 
                <span style="color: #0000FF;">PP 3 Escaños</span> 
                </a>
                <br><br>
                El PSOE saca un escaño de ventaja al PP
                <br><br>
                1999: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1999/albacete" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE-PROGR 4 Escaños</span>
                <span style="color: #0000FF;">PP 3 Escaños</span> 
                </a>
                <br><br>
                PSOE-PROGR saca un escaño de ventaja al PP
                <br><br>
                2003: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-2003/albacete" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 4 Escaños</span>
                    <span style="color: #0000FF;">PP 3 Escaños</span> 
                </a>
                <br><br>
                El PSOE saca un escaño de ventaja al PP
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/07/02.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span> 
</a>
<br><br>
El PSOE saca un escaño de ventaja al PP
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/07/02.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
</a>
<br><br>
El PP saca un escaño de ventaja al PSOE
<br><br>
2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/07/02.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
</a>
<br><br>
El PP las gana, pero la suma de PSOE y PODEMOS le saca un escaño de ventaja al PP
<br><br>
2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/07/02.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/07/02/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #008000;">VOX 1 Escaño</span> 
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Albacete es una provincia 

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Albacete</title>
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
if (provincia === "Ciudad Real") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Ciudad Real <span class="escaños">7 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1983/ciudad-real" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 4 Escaños</span>  
                <span style="color: #ADD8E6;">AP-PDP-UL 3 Escaños</span> 
                </a>
                <br><br>
                El PSOE saca un escaño de ventaja a AP-PDP-UL
                <br><br>
                1987: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1987/ciudad-real" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 4 Escaños</span>
                <span style="color: #ADD8E6;">AP 2 Escaños</span>  
                <span style="color: #006400;">CDS 1 Escaño</span>
                </a>
                <br><br>
                El PSOE saca un escaño de ventaja a la suma de AP y CDS
                <br><br>
                1991: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1991/ciudad-real" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 5 Escaños</span> 
                <span style="color: #0000FF;">PP 2 Escaños</span> 
                </a>
                <br><br>
                El PSOE saca tres escaños de ventaja al PP
                <br><br>
                1995: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1995/ciudad-real" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 4 Escaños</span> 
                <span style="color: #0000FF;">PP 3 Escaños</span> 
                </a>
                <br><br>
                El PSOE saca un escaño de ventaja al PP
                <br><br>
                1999: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1999/ciudad-real" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE-PROGR 4 Escaños</span>
                <span style="color: #0000FF;">PP 3 Escaños</span> 
                </a>
                <br><br>
                PSOE-PROGR saca un escaño de ventaja al PP
                <br><br>
                2003: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-2003/ciudad-real" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 5 Escaños</span>
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
                </a>
                <br><br>
                El PSOE saca tres escaños de ventaja al PP
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/07/13.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span> 
</a>
<br><br>
El PSOE saca un escaño de ventaja al PP
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/07/13.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span> 
</a>
<br><br>
El PSOE saca un escaño de ventaja al PP
<br><br>
2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/07/13.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span> 
</a>
<br><br>
El PSOE saca un escaño de ventaja al PP
<br><br>
2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/07/02.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/07/13/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #008000;">VOX 1 Escaño</span> 
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Ciudad Real es una provincia 

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Ciudad Real</title>
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
if (provincia === "Toledo") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Toledo <span class="escaños">9 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1983/toledo" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 5 Escaños</span>  
                <span style="color: #ADD8E6;">AP-PDP-UL 4 Escaños</span> 
                </a>
                <br><br>
                El PSOE saca un escaño de ventaja a AP-PDP-UL
                <br><br>
                1987: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1987/toledo" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 4 Escaños</span>
                <span style="color: #ADD8E6;">AP 4 Escaños</span>  
                <span style="color: #006400;">CDS 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana, pero la suma de AP y CDS le saca un escaño de ventaja
                <br><br>
                1991: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1991/toledo" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 5 Escaños</span> 
                <span style="color: #0000FF;">PP 4 Escaños</span> 
                </a>
                <br><br>
                El PSOE saca un escaño de ventaja al PP
                <br><br>
                1995: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1995/toledo" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 5 Escaños</span> 
                <span style="color: #0000FF;">PP 4 Escaños</span> 
                </a>
                <br><br>
                El PSOE saca un escaño de ventaja al PP
                <br><br>
                1999: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1999/toledo" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE-PROGR 5 Escaños</span>
                <span style="color: #0000FF;">PP 4 Escaños</span> 
                </a>
                <br><br>
                El PSOE saca un escaño de ventaja al PP
                <br><br>
                2003: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-2003/toledo" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 6 Escaños</span>
                    <span style="color: #0000FF;">PP 3 Escaños</span> 
                </a>
                <br><br>
                El PSOE dobla en escaños al PP
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/07/45.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #0000FF;">PP 4 Escaños</span> 
</a>
<br><br>
El PSOE saca un escaño de ventaja al PP
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/07/45.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
</a>
<br><br>
El PP saca un escaño de ventaja al PSOE
<br><br>
2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/07/45.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>
2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/07/45.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/07/45/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #008000;">VOX 1 Escaño</span> 
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Toledo es una provincia 

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Toledo</title>
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
if (provincia === "Castilla La Mancha") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Castilla La Mancha <span class="escaños">33 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1983" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 17 Escaños</span>  
                <span style="color: #ADD8E6;">AP-PDP-UL 16 Escaños</span> 
                </a>
                <br><br>
                El PSOE las gana sacando la mayoría absoluta exacta
                <br><br>
                1987: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1987" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 17 Escaños</span>
                <span style="color: #ADD8E6;">AP 13 Escaños</span>  
                <span style="color: #006400;">CDS 3 Escaños</span>
                </a>
                <br><br>
                El PSOE las gana sacando la mayoría absoluta exacta
                <br><br>
                1991: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1991/toledo" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 20 Escaños</span> 
                <span style="color: #0000FF;">PP 13 Escaños</span>
                </a>
                <br><br>
                El PSOE las gana sacando tres escaños por encima de la mayoría absoluta
                <br><br>
                1995: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1995" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 17 Escaños</span> 
                <span style="color: #0000FF;">PP 16 Escaños</span>
                </a>
                <br><br>
                El PSOE las gana sacando la mayoría absoluta exacta
                <br><br>
                1999: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE-PROGR 19 Escaños</span>
                <span style="color: #0000FF;">PP 14 Escaños</span> 
                </a>
                <br><br>
                El PSOE las gana sacan dos escaños por encima de la mayoría absoluta
                <br><br>
                2003: <a href="https://www.datoselecciones.com/castilla-la-mancha-parlamento-2003" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 21 Escaños</span>
                    <span style="color: #0000FF;">PP 12 Escaños</span> 
                </a>
                <br><br>
                El PSOE las gana sacando cuatro escaños por encima de la mayoría absoluta
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/07/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 18 Escaños</span>
    <span style="color: #0000FF;">PP 15 Escaños</span> 
</a>
<br><br>
El PSOE las gana sacando un escaño por encima de la mayoría absoluta
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/07/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 18 Escaños</span> 
    <span style="color: #FF0000;">PSOE 15 Escaños</span>
</a>
<br><br>
El PP las gana sacando un escaño por encima de la mayoría absoluta
<br><br>
2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/07/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 15 Escaños</span> 
    <span style="color: #FF0000;">PSOE 15 Escaños</span>
    <span style="color: #800080;">PODEMOS 3 Escaños</span>
</a>
<br><br>
El PP las gana, pero la suma de PSOE y PODEMOS le saca tres escaños de ventaja
<br><br>
2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/07/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 19 Escaños</span>
    <span style="color: #0000FF;">PP 10 Escaños</span> 
    <span style="color: #FF7F00;">CS 4 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/07/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 17 Escaños</span>
    <span style="color: #0000FF;">PP 12 Escaños</span> 
    <span style="color: #008000;">VOX 4 Escaños</span> 
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Castilla La Mancha es una comunidad autónoma
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Castilla La Mancha</title>
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