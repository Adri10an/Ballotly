    function abrirVentana(provincia) {

if (provincia === "Cantabria") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Cantabria <span class="escaños">35 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1983: <a href="https://www.datoselecciones.com/cantabria-parlamento-1983" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #ADD8E6;">AP-PDP-UL 18 Escaños</span> 
                <span style="color: #FF0000;">PSOE 15 Escaños</span> 
                <span style="color: #c0ce0e;">PRC 2 Escaños</span> 
                </a>
                <br><br>
                AP-PDP-UL las gana sumando la mayoría absoluta exacta y un escaño de ventaja a la suma de PSOE y PRC. AP-PDP-UL gana al PSOE por 15580 votos y el PSOE quintuplica a PRC en votos 
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 39 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1987: <a href="https://www.datoselecciones.com/cantabria-parlamento-1987" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                    <span style="color: #ADD8E6;">FAP 18 Escaños</span>
                    <span style="color: #FF0000;">PSOE 13 Escaños</span>
                <span style="color: #c0ce0e;">PRC 5 Escaños</span> 
                <span style="color: #006400;">CDS 3 Escaños</span>
                </a>
                <br><br>
                FAP las gana y sumando a CDS sacan un escaño por encima de la mayoría absoluta y tres escaños de ventaja a la suma de PSOE y PRC. FAP gana al PSOE por 35054 votos, el PSOE dobla a PRC en votos y PRC gana a CDS por 18623 votos
                <br><br>
                1991: <a href="https://www.datoselecciones.com/cantabria-parlamento-1991" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 16 Escaños</span>
                    <span style="color: #1e1258;">UPCA 15 Escaños</span> 
                    <span style="color: #0000FF;">PP 6 Escaños</span>  
                    <span style="color: #c0ce0e;">PRC 2 Escaños</span> 
                </a>
                <br><br>
                El PSOE las gana, pero la suma de UPCA y PP saca un escaño por encima de la mayoría absoluta y aventaja a la suma de PSOE y PRC por tres escaños. El PSOE gana a UPCA por 3764 votos, UPCA dobla al PP en votos y el PP dobla al PRC en votos 
                <br><br>
                1995: <a href="https://www.datoselecciones.com/cantabria-parlamento-1995" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 13 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 10 Escaños</span>
                    <span style="color: #1e1258;">UPCA 7 Escaños</span>  
                    <span style="color: #c0ce0e;">PRC 6 Escaños</span> 
                    <span style="color: #d25644;">IU 3 Escaños</span>
                </a>
                <br><br>
                El PP las gana y sumando a UPCA sacan la mayoría absoluta exacta y aventaja a la suma de PSOE, PRC e IU en un escaño. El PP gana al PSOE por 23544 votos, el PSOE gana a UPCA por 27273 votos, UPCA gana al PRC por 6604 votos y el PRC gana a IU por 23024 votos
                <br><br>
                1999: <a href="https://www.datoselecciones.com/cantabria-parlamento-1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 19 Escaños</span> 
                <span style="color: #FF0000;">PSOE 14 Escaños</span>
                <span style="color: #c0ce0e;">PRC 6 Escaños</span> 
                </a>
                <br><br>
                El PP las gana y aunque el PSOE y el PRC suman la mayoría absoluta exacta, PRC decide votar a favor del PP, por lo que juntos suman cinco escaños por encima de la mayoría absoluta. El PP gana al PSOE por 29920 votos y el PSOE dobla al PRC en votos
                <br><br>
                2003: <a href="https://www.datoselecciones.com/cantabria-parlamento-2003" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 18 Escaños</span> 
                <span style="color: #FF0000;">PSOE 13 Escaños</span>
                <span style="color: #c0ce0e;">PRC 8 Escaños</span>
                </a>
                <br><br>
                El PP las gana, pero la suma de PSOE y PRC saca dos escaños por encima de la mayoría absoluta. La condición para esta suma es la presidencia del PRC, a pesar de ser terceros. El PP gana al PSOE por 43188 votos y el PSOE gana al PRC por 37128 votos
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/06/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 17 Escaños</span> 
                    <span style="color: #c0ce0e;">PRC 12 Escaños</span>
                <span style="color: #FF0000;">PSOE 10 Escaños</span>
</a>
<br><br>
El PP las gana, pero la suma de PRC y PSOE saca dos escaños por encima de la mayoría absoluta. El PP gana al PRC por 44451 votos y el PRC gana al PSOE por 14177 votos
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/06/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 20 Escaños</span> 
                    <span style="color: #c0ce0e;">PRC 12 Escaños</span>
                <span style="color: #FF0000;">PSOE 7 Escaños</span>
</a>
<br><br>
El PP las gana sacando la mayoría absoluta exacta. El PP gana al PRC por 57612 votos y el PRC gana al PSOE por 43346 votos
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 35 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/06/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 13 Escaños</span> 
    <span style="color: #c0ce0e;">PRC 12 Escaños</span>
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #800080;">PODEMOS 3 Escaños</span>
    <span style="color: #FF7F00;">CS 2 Escaños</span>
</a>
<br><br>
El PP las gana, pero la suma de PRC, PSOE y PODEMOS saca dos escaños por encima de la mayoría absoluta. El PP gana al PRC por 8759 votos, el PRC dobla al PSOE en votos, el PSOE gana a PODEMOS por 16758 votos y PODEMOS gana a CIUDADANOS por 6343 votos 
<br><br>

2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/06/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #c0ce0e;">PRC 14 Escaños</span>
    <span style="color: #0000FF;">PP 9 Escaños</span> 
    <span style="color: #FF0000;">PSOE 7 Escaños</span>
    <span style="color: #FF7F00;">CS 3 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span>
</a>
<br><br>
El PRC las gana y sumando al PSOE sacan tres escaños por encima de la mayoría absoluta. El PRC gana al PP por 44332 votos, el PP gana al PSOE por 20964 votos, el PSOE dobla a CIUDADANOS en votos y CIUDADANOS gana a VOX por 9376 votos
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/16/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 15 Escaños</span> 
    <span style="color: #c0ce0e;">PRC 8 Escaños</span>
    <span style="color: #FF0000;">PSOE 8 Escaños</span>
    <span style="color: #008000;">VOX 4 Escaños</span>
</a>
<br><br>
El PP las gana y aunque sumando a VOX sacan un escaño por encima de la mayoría abssoluta, el PRC se abstiene para dar la presidencia al PP para que no pacte con VOX por lo que juntos sacan cinco escaños por encima de la mayoría absoluta
<br><br>
En conclusión, Cantabria es una comunidad autónoma 
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Cantabria</title>
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
function abrirVentanaEscenario35(provincia) {
if (provincia === "Cantabria") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Cantabria <span class="escaños">35 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://www.datoselecciones.com/cantabria-parlamento-1983" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #ADD8E6;">AP-PDP-UL 18 Escaños</span> 
                <span style="color: #FF0000;">PSOE 15 Escaños</span> 
                <span style="color: #c0ce0e;">PRC 2 Escaños</span> 
                </a>
                <br><br>
                IGUAL
                <br><br>
                1987: <a href="https://www.datoselecciones.com/cantabria-parlamento-1987" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                    <span style="color: #ADD8E6;">FAP 16 Escaños</span>
                    <span style="color: #FF0000;">PSOE 12 Escaños</span>
                <span style="color: #c0ce0e;">PRC 5 Escaños</span> 
                <span style="color: #006400;">CDS 2 Escaños</span>
                </a>
                <br><br>
                FAP y CDS suman la mayoría absoluta exacta
                <br><br>
                1991: <a href="https://www.datoselecciones.com/cantabria-parlamento-1991" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 14 Escaños</span>
                    <span style="color: #1e1258;">UPCA 13 Escaños</span> 
                    <span style="color: #0000FF;">PP 6 Escaños</span>  
                    <span style="color: #c0ce0e;">PRC 2 Escaños</span> 
                </a>
                <br><br>
                UPCA y PP sacan un escaño por encima de la mayoría absoluta
                <br><br>
                1995: <a href="https://www.datoselecciones.com/cantabria-parlamento-1995" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 12 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 10 Escaños</span>
                    <span style="color: #1e1258;">UPCA 6 Escaños</span>  
                    <span style="color: #c0ce0e;">PRC 5 Escaños</span> 
                    <span style="color: #d25644;">IU 2 Escaños</span>
                </a>
                <br><br>
                PP y UPCA sacan la mayoría absoluta exacta
                <br><br>
                1999: <a href="https://www.datoselecciones.com/cantabria-parlamento-1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 17 Escaños</span> 
                <span style="color: #FF0000;">PSOE 13 Escaños</span>
                <span style="color: #c0ce0e;">PRC 5 Escaños</span> 
                </a>
                <br><br>
                El PP pierde la absoluta quedandose a un escaño de ella, pero el PRC apoya al PP
                <br><br>
                2003: <a href="https://www.datoselecciones.com/cantabria-parlamento-2003" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 17 Escaños</span> 
                <span style="color: #FF0000;">PSOE 11 Escaños</span>
                <span style="color: #c0ce0e;">PRC 7 Escaños</span>
                </a>
                <br><br>
                El PP se queda de nuevo a un escaño de la absoluta, pero con el aumento de votos del PRC su exigencia es la presidencia y PSOE y PRC sacan la mayoría absoluta exacta
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/06/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 15 Escaños</span> 
                    <span style="color: #c0ce0e;">PRC 11 Escaños</span>
                <span style="color: #FF0000;">PSOE 9 Escaños</span>
</a>
<br><br>
PRC y PSOE sacan dos escaños por encima de la mayoría absoluta
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/06/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 18 Escaños</span> 
                    <span style="color: #c0ce0e;">PRC 11 Escaños</span>
                <span style="color: #FF0000;">PSOE 7 Escaños</span>
</a>
<br><br>
El PP saca la mayoría absoluta exacta
<br><br>
2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/06/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 13 Escaños</span> 
    <span style="color: #c0ce0e;">PRC 12 Escaños</span>
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #800080;">PODEMOS 3 Escaños</span>
    <span style="color: #FF7F00;">CS 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/06/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #c0ce0e;">PRC 14 Escaños</span>
    <span style="color: #0000FF;">PP 9 Escaños</span> 
    <span style="color: #FF0000;">PSOE 7 Escaños</span>
    <span style="color: #FF7F00;">CS 3 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/16/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 15 Escaños</span> 
    <span style="color: #c0ce0e;">PRC 8 Escaños</span>
    <span style="color: #FF0000;">PSOE 8 Escaños</span>
    <span style="color: #008000;">VOX 4 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Cantabria es una comunidad autónoma 
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Cantabria</title>
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