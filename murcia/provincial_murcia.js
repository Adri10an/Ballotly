    function abrirVentana(provincia) {

if (provincia === "Murcia") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Murcia <span class="escaños">43 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://es.wikipedia.org/wiki/Elecciones_a_la_Asamblea_Regional_de_Murcia_de_1983" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 26 Escaños</span> 
    <span style="color: #ADD8E6;">AP-PDP-UL 16 Escaños</span> 
    <span style="color: #FF0D00;">PCE 1 Escaño</span> 
</a>
<br>
<img src="file:///C:/Users/PC/Downloads/FOTOS%20MEDAC/Murcia%201983.JPG" alt="Murcia 1983" width="350"><br><br>

<h1 style="color: black;"><span class="escaños">Pasa a 45 Escaños</span></h1>

<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
1987: <a href="https://es.wikipedia.org/wiki/Elecciones_a_la_Asamblea_Regional_de_Murcia_de_1987" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
    <span style="color: #FF0000;">PSOE 25 Escaños</span>
    <span style="color: #ADD8E6;">AP 16 Escaños</span>
    <span style="color: #006400;">CDS 3 Escaños</span>
    <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br>
<img src="file:///C:/Users/PC/Downloads/FOTOS%20MEDAC/Murcia%201987.JPG" alt="Murcia 1987" width="350"><br><br>

1991: <a href="https://es.wikipedia.org/wiki/Elecciones_a_la_Asamblea_Regional_de_Murcia_de_1991" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 24 Escaños</span>
    <span style="color: #0000FF;">PP 17 Escaños</span>  
    <span style="color: #d25644;">IU 4 Escaños</span>
</a>
<br>
<img src="file:///C:/Users/PC/Downloads/FOTOS%20MEDAC/Murcia%201991.JPG" alt="Murcia 1991" width="350"><br><br>

1995: <a href="https://es.wikipedia.org/wiki/Elecciones_a_la_Asamblea_Regional_de_Murcia_de_1995" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 26 Escaños</span> 
    <span style="color: #FF0000;">PSOE 15 Escaño</span>
    <span style="color: #d25644;">IU 4 Escaños</span>
</a>
<br>
<img src="file:///C:/Users/PC/Downloads/FOTOS%20MEDAC/Murcia%201995.JPG" alt="Murcia 1995" width="350"><br><br>

1999: <a href="https://es.wikipedia.org/wiki/Elecciones_a_la_Asamblea_Regional_de_Murcia_de_1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 26 Escaños</span> 
    <span style="color: #FF0000;">PSOE 18 Escaños</span>
    <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br>
<img src="file:///C:/Users/PC/Downloads/FOTOS%20MEDAC/Murcia%201999.JPG" alt="Murcia 1999" width="350"><br><br>

2003: <a href="https://es.wikipedia.org/wiki/Elecciones_a_la_Asamblea_Regional_de_Murcia_de_2003" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 28 Escaños</span> 
    <span style="color: #FF0000;">PSOE 16 Escaños</span>
    <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br>
<img src="file:///C:/Users/PC/Downloads/FOTOS%20MEDAC/Murcia%202003.JPG" alt="Murcia 2003" width="350"><br><br>
</br>
2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/15/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 29 Escaños</span> 
    <span style="color: #FF0000;">PSOE 15 Escaños</span>
    <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br>
<img src="file:///C:/Users/PC/Downloads/FOTOS%20MEDAC/Murcia%202007.JPG" alt="Murcia 2007" width="350"><br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/15/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 33 Escaños</span> 
    <span style="color: #FF0000;">PSOE 11 Escaños</span>
    <span style="color: #d25644;">IU-V 1 Escaño</span>
</a>
<br>
<img src="file:///C:/Users/PC/Downloads/FOTOS%20MEDAC/Murcia%202011.JPG" alt="Murcia 2011" width="350"><br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/15/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 22 Escaños</span> 
    <span style="color: #FF0000;">PSOE 13 Escaños</span>
    <span style="color: #800080;">PODEMOS 6 Escaños</span>
    <span style="color: #FF7F00;">CS 4 Escaños</span>
</a>
<br>
<img src="file:///C:/Users/PC/Downloads/FOTOS%20MEDAC/Murcia%202015.JPG" alt="Murcia 2015" width="350"><br><br>
<br><br>
2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/15/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
<span style="color: #FF0000;">PSOE 17 Escaños</span>
<span style="color: #0000FF;">PP 16 Escaños</span> 
<span style="color: #FF7F00;">CS 6 Escaños</span>
<span style="color: #008000;">VOX 4 Escaños</span>
<span style="color: #800080;">PODEMOS-EQUO 2 Escaños</span>
</a>
<br><br>
El PSOE las gana, pero la suma de PP, CIUDADANOS y VOX saca tres escaños por encima de la mayoría absoluta. El PSOE gana al PP por tan solo 488 votos, el PP dobla a CIUDADANOS en votos, CIUDADANOS gana a VOX por 16548 votos y VOX gana a PODEMOS-EQUO por 25428 votos
<br><br>
2023: <a href="https://elpais.com/espana/elecciones/autonomicas/15/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 21 Escaños</span> 
<span style="color: #FF0000;">PSOE 13 Escaños</span>
<span style="color: #008000;">VOX 9 Escaños</span>
<span style="color: #800080;">PODEMOS 2 Escaños</span>
</a>
<br><br>
El PP las gana y sumando a VOX sacan siete escaños por encima de la mayoría absoluta. El PP gana al PSOE por 117546 votos, el PSOE gana a VOX por 54184 votos y VOX triplica a PODEMOS en votos
<br><br>

En conclusión, Murcia es una comunidad autónoma 

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Murcia</title>
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
function abrirVentanaEscenario45Murcia(provincia) {
if (provincia === "Murcia") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Murcia <span class="escaños">45 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://es.wikipedia.org/wiki/Elecciones_a_la_Asamblea_Regional_de_Murcia_de_1983" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 25 Escaños</span> 
                <span style="color: #ADD8E6;">AP-PDP-UL 17 Escaños</span> 
                <span style="color: #FF0D00;">PCE 3 Escaños</span> 
                </a>
                <br><br>
                El PSOE las gana sacando dos escaños por encima de la mayoría absoluta
                <br><br>
                1987: <a href="https://es.wikipedia.org/wiki/Elecciones_a_la_Asamblea_Regional_de_Murcia_de_1987" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                <span style="color: #FF0000;">PSOE 21 Escaños</span>
                <span style="color: #ADD8E6;">AP 15 Escaños</span>
                <span style="color: #006400;">CDS 5 Escaños</span>
                <span style="color: #d25644;">IU 3 Escaños</span>
                <span style="color: #816248;">PCAN 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a IU sacan un escaño por encima de la mayoría absoluta. El <a href="https://es.wikipedia.org/wiki/Partido_Cantonal_(Espa%C3%B1a)" target="_blank">Partido Cantonal</a> entra
                <br><br>
                1991: <a href="https://es.wikipedia.org/wiki/Elecciones_a_la_Asamblea_Regional_de_Murcia_de_1991" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                    <span style="color: #FF0000;">PSOE 22 Escaños</span>
                    <span style="color: #0000FF;">PP 16 Escaños</span>
                    <span style="color: #d25644;">IU 4 Escaños</span>
                    <span style="color: #006400;">CDS 2 Escaños</span>
                    <span style="color: #816248;">PCAN 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a IU sacan tres escaños por encima de la mayoría absoluta.CDS y Partido Cantonal entran
                <br><br>
                1995: <a href="https://es.wikipedia.org/wiki/Elecciones_a_la_Asamblea_Regional_de_Murcia_de_1995" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 25 Escaños</span> 
                <span style="color: #FF0000;">PSOE 15 Escaño</span>
                <span style="color: #d25644;">IU 5 Escaños</span>
                </a>
                <br><br>
                El PP las gana sacando dos escaños por encima de la mayoría absoluta
                <br><br>
                1999: <a href="https://es.wikipedia.org/wiki/Elecciones_a_la_Asamblea_Regional_de_Murcia_de_1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 25 Escaños</span> 
                <span style="color: #FF0000;">PSOE 17 Escaños</span>
                <span style="color: #d25644;">IU 3 Escaños</span>
                </a>
                <br><br>
                El PP las gana sacando dos escaños por encima de la mayoría absoluta
                <br><br>
2003: <a href="https://es.wikipedia.org/wiki/Elecciones_a_la_Asamblea_Regional_de_Murcia_de_2003" target="_blank" style="font-size: 1.5em; font-weight: bold;">
<span style="color: #0000FF;">PP 27 Escaños</span> 
<span style="color: #FF0000;">PSOE 16 Escaños</span>
<span style="color: #d25644;">IU 2 Escaños</span>
</a>
<br><br>
El PP las gana sacando cuatro escaños por encima de la mayoría absoluta
<br><br>
2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/15/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
<span style="color: #0000FF;">PP 27 Escaños</span> 
<span style="color: #FF0000;">PSOE 15 Escaños</span>
<span style="color: #d25644;">IU 3 Escaños</span>
</a>
<br><br>
El PP las gana sacando cuatro escaños por encima de la mayoría absoluta
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/15/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
<span style="color: #0000FF;">PP 29 Escaños</span> 
<span style="color: #FF0000;">PSOE 11 Escaños</span>
<span style="color: #d25644;">IU 3 Escaños</span>
<span style="color: #d7257d;">UPyD 2 Escaños</span>
</a>
<br><br>
El PP las gana sacando seis escaños por encima de la mayoría absoluta
<br><br>
2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/15/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
<span style="color: #0000FF;">PP 20 Escaños</span> 
<span style="color: #FF0000;">PSOE 12 Escaños</span>
<span style="color: #800080;">PODEMOS 7 Escaños</span>
<span style="color: #FF7F00;">CS 6 Escaños</span>
</a>
<br><br>
El PP las gana y sumando a CIUDADANOS saca tres escaños por encima de la mayoría absoluta
<br><br>
2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/15/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
<span style="color: #FF0000;">PSOE 17 Escaños</span>
<span style="color: #0000FF;">PP 16 Escaños</span> 
<span style="color: #FF7F00;">CS 6 Escaños</span>
<span style="color: #008000;">VOX 4 Escaños</span>
<span style="color: #800080;">PODEMOS-EQUO 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>
2023: <a href="https://elpais.com/espana/elecciones/autonomicas/15/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 21 Escaños</span> 
<span style="color: #FF0000;">PSOE 13 Escaños</span>
<span style="color: #008000;">VOX 9 Escaños</span>
<span style="color: #800080;">PODEMOS 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

En conclusión, Murcia es una comunidad autónoma 

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Murcia</title>
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