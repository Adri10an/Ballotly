    function abrirVentana(provincia) {

if (provincia === "Soria") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Soria <span class="escaños">5 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1983: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1983/soria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #ADD8E6;">AP-PDP-UL 3 Escaños</span> 
                <span style="color: #FF0000;">PSOE 2 Escaños</span>  
                </a>
                <br><br>
                AP-PDP-UL (La Unión Liberal (UL) fue un pequeño partido liberal español fundado por Pedro Schwartz en 1983 y presentado oficialmente el 23 de marzo de ese mismo año.) las gana sacando un escaño de ventaja al PSOE al que aventaja en 3017 votos
                <br><br>
                1987: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1987/soria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #ADD8E6;">AP 2 Escaños</span>  
                <span style="color: #FF0000;">PSOE 2 Escaños</span>
                <span style="color: #006400;">CDS 1 Escaño</span>
                </a>
                <br><br>
                AP vuelve a ganar y sumando a CDS sacan un escaño de ventaja al PSOE. AP gana al PSOE por 5106 votos y el PSOE dobla a CDS en votos
                <br><br>
                1991: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1991/soria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 3 Escaños</span> 
                <span style="color: #FF0000;">PSOE 2 Escaños</span> 
                </a>
                <br><br>
                El PP las gana sacando un escaño de ventaja al PSOE, al que aventaja en 9485 votos
                <br><br>
                1995: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1995/soria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 4 Escaños</span> 
                <span style="color: #FF0000;">PSOE 1 Escaño</span> 
                </a>
                <br><br>
                El PP las vuelve a ganar cuadruplicando al PSOE en escaños al que dobla en votos
                <br><br>
                1999: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1999/soria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 3 Escaños</span> 
                <span style="color: #FF0000;">PSOE 2 Escaños</span>
                </a>
                <br><br>
                El PP repite como ganador en la provincia sacando un escaño de ventaja al PSOE al que aventaja en 12474 votos
                <br><br>
                2003: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-2003/soria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 3 Escaños</span> 
                <span style="color: #FF0000;">PSOE 2 Escaños</span>
                </a>
                <br><br>
                El PP continua como vencedor sacando un escaño de ventaja al PSOE al que aventaja en 9269 votos
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/08/42.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
De nuevo, el PP vuelve a ganar las elecciones en Soria, sacando un escaño de ventaja al PSOE al que aventaja en 7351 votos
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/08/42.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
El PP las gana sacando un escaño de ventaja al PSOE al que aventaja en 9634 votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/08/42.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
El PP sigue siendo la fuerza más votada, sacando un escaño de ventaja al PSOE al que aventaja en 2749 votos
<br><br>

2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/08/42.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
</a>
<br><br>
El PSOE las gana por primera vez sacando un escaño de ventaja al PP al que aventaja en 6371 votos
<br><br>

2022: <a href="https://resultados.elpais.com/elecciones/2022/autonomicas/08/42.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #141818;">SORIA YA! 3 Escaños</span>
    <span style="color: #0000FF;">PP 1 Escaño</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
SORIA YA! las gana arrasando y sumando al PSOE cuadruplican al PP en escaños. SORIA YA! gana al PP por 8026 votos y el PP gana al PSOE por 2564 votos
<br><br>

2026: <a href="https://elpais.com/espana/elecciones/autonomicas/08/42/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 1 Escaño</span> 
    <span style="color: #141818;">SORIA YA! 1 Escaño</span>
     <span style="color: #008000;">VOX 1 Escaño</span> 
</a>
<br><br>
El PSOE las gana y sumando a SORIA YA! sacan un escaño de ventaja a la suma de PP y VOX. El PSOE gana al PP por tan solo 1423 votos, el PP gana a SORIA YA! por 3915 votos y SORIA YA! gana a VOX por tan solo 1756 votos
<br><br>
Desde la aparición de SORIA YA! en las elecciones autonómicas de Castilla y León de 2022, Soria se ha inclinado más hacia la izquierda. SORIA YA! obtiene un notabilisimo 42,57% y suma más votos que la segunda fuerza (PP) y la tercera fuerza (PSOE) juntos.
Por primera vez, los votos a las izquierdas superan a los votos de las derechas. Sin embargo, es una provincia donde el PP suele mantener históricamente el primer puesto, aunque de nuevo en el año 2026 el candidato del PSOE (Carlos Martinez) como alcalde de Soria rentabiliza
su fuerza como alcalde con 5 mayorías absolutas, dejando en los huesos a SORIA YA!, aunque con la entrada de VOX le derecha arranca un escaño.

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Soria</title>
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
if (provincia === "Segovia") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Segovia <span class="escaños">6 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1983/segovia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #ADD8E6;">AP-PDP-UL 3 Escaños</span> 
                <span style="color: #FF0000;">PSOE 3 Escaños</span>  
                </a>
                <br><br>
                AP-PDP-UL gana las primeras elecciones empatando en escaños con el PSOE al que aventaja en 5121 votos
                <br><br>
                1987: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1987/segovia" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                <span style="color: #FF0000;">PSOE 2 Escaños</span>
                <span style="color: #006400;">CDS 2 Escaños</span>
                <span style="color: #ADD8E6;">AP 1 Escaño</span> 
                <span style="color: #66B88D;">PDP 1 Escaño</span> 
                </a>
                <br><br>
                El PSOE las gana, pero la suma de CDS, AP y PDP le saca un escaño de ventaja. El PSOE gana a CDS por 3633 votos, CDS gana a AP por tan solo 114 votos y AP gana a PDP por 4222 votos 
                <br><br>
                1991: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1991/segovia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 4 Escaños</span> 
                <span style="color: #FF0000;">PSOE 2 Escaños</span> 
                </a>
                <br><br>
                El PP las gana doblando en escaños al PSOE al que aventaja en 11464 votos
                <br><br>
                1995: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1995/segovia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 4 Escaños</span> 
                <span style="color: #FF0000;">PSOE 2 Escaños</span> 
                </a>
                <br><br>
                El PP las vuelve a ganar doblando en escaños y en votos al PSOE  
                <br><br>
                1999: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1999/segovia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 4 Escaños</span> 
                <span style="color: #FF0000;">PSOE 2 Escaños</span>
                </a>
                <br><br>
                El PP repite como ganador en la provincia duplicando en escaños al PSOE al que aventaja en 19089 votos
                <br><br>
                2003: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-2003/segovia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 4 Escaños</span> 
                <span style="color: #FF0000;">PSOE 2 Escaños</span>
                </a>
                <br><br>
                El PP continua como vencedor duplicando en escaños al PSOE al que aventaja en 13479 votos
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/08/40.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
De nuevo, el PP vuelve a ganar las elecciones duplicando en escaños al PSOE, al que aventaja en 14458 votos
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 7 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/08/40.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
El PP las gana sacando tres escaños de ventaja al PSOE. El PP gana al PSOE por 20461 votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/08/40.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
</a>
<br><br>
El PP sigue siendo la fuerza más votada sacando un escaño de ventaja a la suma de PSOE y PODEMOS. El PP gana al PSOE por 10524 votos y el PSOE dobla a PODEMOS en votos
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 6 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/08/40.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
El PSOE las gana empatando en escaños a la suma de PP y CIUDADANOS. El PSOE gana al PP por tan solo 234 votos
<br><br>

2022: <a href="https://resultados.elpais.com/elecciones/2022/autonomicas/08/40.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span> 
</a>
<br><br>
El PP las gana y sumando a VOX doblan en escaños al PSOE. El PP gana al PSOE por 2275 votos y el PSOE gana a VOX por 8790 votos
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 7 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2026: <a href="https://elpais.com/espana/elecciones/autonomicas/08/40/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span> 
</a>
<br><br>
El PP las gana y sumando a VOX sacan un escaño de ventaja al PSOE. El PP gana al PSOE por 6064 votos y el PSOE gana a VOX por 8967 votos
<br><br>
En conclusión, Segovia es una provincia autonómicamente de derechas. La derecha ha ganado todas las elecciones menos en 1987, pero la derecha suma más que la izquierda y en 2019 donde hay un empate a escaños. En las elecciones más ajustadas
para la derecha: 1983 y 2019 se marca un empate entre el bloque de la izquierda y el bloque de la derecha, la norma es que la derecha saque 4 de los 6 escaños y su récord está en el año 2011 cuando la provincia pasa a 7 escaños sacando tres escaños
de ventaja a la izquierda

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Segovia</title>
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
if (provincia === "Palencia") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Palencia <span class="escaños">7 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1983/palencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #ADD8E6;">AP-PDP-UL 4 Escaños</span> 
                <span style="color: #FF0000;">PSOE 3 Escaños</span>  
                </a>
                <br><br>
                AP-PDP-UL gana las primeras elecciones sacando un escaño de ventaja al PSOE al que aventaja en 6088 votos
                <br><br>
                1987: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1987/palencia" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                <span style="color: #ADD8E6;">AP 4 Escaños</span> 
                <span style="color: #FF0000;">PSOE 2 Escaños</span>
                <span style="color: #006400;">CDS 1 Escaño</span>
                </a>
                <br><br>
                AP las gana y sumando a CDS sacan tres escaños de ventaja al PSOE. AP gana al PSOE por 12724 votos y el PSOE dobla a CDS en votos
                <br><br>
                1991: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1991/palencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 4 Escaños</span> 
                <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                </a>
                <br><br>
                El PP las gana sacando un escaño de ventaja al PSOE al que aventaja en 8556 votos
                <br><br>
                1995: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1995/palencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 4 Escaños</span> 
                <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                </a>
                <br><br>
                El PP las vuelve a ganar sacando un escaño de ventaja al PSOE al que aventaja en 23423 votos  
                <br><br>
                1999: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1999/palencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 4 Escaños</span> 
                <span style="color: #FF0000;">PSOE 3 Escaños</span>
                </a>
                <br><br>
                El PP repite como ganador en la provincia sacando un escaño de ventaja al PSOE al que aventaja en 14429 votos
                <br><br>
                2003: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-2003/palencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 4 Escaños</span> 
                <span style="color: #FF0000;">PSOE 3 Escaños</span>
                </a>
                <br><br>
                El PP continua como vencedor sacando un escaño de ventaja al PSOE al que aventaja en 8026 votos
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/08/34.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
</a>
<br><br>
De nuevo, el PP vuelve a ganar las elecciones sacando un escaño de ventaja al PSOE al que aventaja en 9808 votos
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/08/34.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
</a>
<br><br>
El PP las gana sacando un escaño de ventaja al PSOE al que aventaja en 20603 votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/08/34.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
</a>
<br><br>
El PP sigue siendo la fuerza más votada sacando un escaño de ventaja a la suma de PSOE y PODEMOS. El PP gana al PSOE por 11483 votos y el PSOE dobla a PODEMOS en votos
<br><br>
2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/08/34.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
El PSOE las gana, pero la suma de PP y CIUDADANOS le saca un escaño de ventaja. El PSOE gana al PP por tan solo 1366 votos y el PP dobla a CIUDADANOS en votos
<br><br>

2022: <a href="https://resultados.elpais.com/elecciones/2022/autonomicas/08/34.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span> 
</a>
<br><br>
El PSOE las vuelve a ganar, pero la suma de PP y VOX le saca un escaño de ventaja. El PSOE gana al PP por tan solo 853 votos y el PP gana a VOX por 12579
<br><br>
2026: <a href="https://elpais.com/espana/elecciones/autonomicas/08/34/" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span> 
</a>
<br><br>
El PP las gana y sumando a VOX sacan un escaño de ventaja al PSOE. El PP gana al PSOE por tan solo 1246 votos y el PSOE gana a VOX por 11691 votos
<br><br>
En conclusión, Palencia es una provincia autonómicamente de derechas. En las 12 elecciones que se han celebrado de los 7 escaños que se reparten la derecha siempre ha sumado 4 frente a los 3 de la izquierda como mínimo. El récord histórico de la 
derecha se da en el año 1987 cuando la derecha saca tres escaños de ventaja a la izquierda. El PSOE logra ganar en 2019 y 2022 al PP, pero lo hace por pocos votos en ambas ocasiones y además sumando a CIUDADANOS en 2019 y a VOX en 2022 la derecha aventaja en
un escaño como de costumbre a la izquierda.

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Palencia</title>
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
if (provincia === "Zamora") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Zamora <span class="escaños">8 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1983/zamora" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 4 Escaños</span>  
                <span style="color: #ADD8E6;">AP-PDP-UL 4 Escaños</span> 
                </a>
                <br><br>
                El PSOE gana las primeras elecciones empatando en escaños con AP-PDP-UL al que aventaja por tan solo 349 votos
                <br><br>
                1987: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1987/zamora" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                <span style="color: #ADD8E6;">AP 4 Escaños</span> 
                <span style="color: #FF0000;">PSOE 3 Escaños</span>
                <span style="color: #006400;">CDS 1 Escaño</span>
                </a>
                <br><br>
                AP las gana y sumando a CDS sacan dos escaños de ventaja al PSOE. AP gana al PSOE por 13505 votos y el PSOE gana a CDS por 20529 votos
                <br><br>
                1991: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1991/zamora" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 4 Escaños</span> 
                <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                <span style="color: #006400;">CDS 1 Escaño</span>
                </a>
                <br><br>
                El PP las gana sacando y sumando a CDS sacan dos escaños de ventaja al PSOE. El PP gana al PSOE por 9717 votos y el PSOE triplica a CDS en votos
                <br><br>
                1995: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1995/zamora" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 5 Escaños</span> 
                <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                </a>
                <br><br>
                El PP las vuelve a ganar sacando dos escaños de ventaja al PSOE al que aventaja en 28599 votos  
                <br><br>
                1999: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1999/zamora" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 5 Escaños</span> 
                <span style="color: #FF0000;">PSOE 3 Escaños</span>
                </a>
                <br><br>
                El PP repite como ganador en la provincia sacando dos escaños de ventaja al PSOE al que aventaja en 24043 votos
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 7 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                2003: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-2003/zamora" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 4 Escaños</span> 
                <span style="color: #FF0000;">PSOE 3 Escaños</span>
                </a>
                <br><br>
                El PP continua como vencedor sacando un escaño de ventaja al PSOE al que aventaja en 18797 votos
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/08/49.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
</a>
<br><br>
De nuevo, el PP vuelve a ganar las elecciones sacando un escaño de ventaja al PSOE al que aventaja en 17520 votos
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/08/49.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
El PP las gana sacando tres escaños de ventaja al PSOE al que aventaja en 27204 votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/08/49.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
</a>
<br><br>
El PP sigue siendo la fuerza más votada sacando un escaño de ventaja a la suma de PSOE y PODEMOS. El PP gana al PSOE por 17212 votos y el PSOE dobla a PODEMOS en votos
<br><br>
2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/08/49.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
El PSOE las gana por primera vez, pero la suma de PP y CIUDADANOS le saca un escaño de ventaja. El PSOE gana al PP por 2517 votos y el PP dobla a CIUDADANOS en votos
<br><br>

2022: <a href="https://resultados.elpais.com/elecciones/2022/autonomicas/08/49.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span> 
</a>
<br><br>
El PP las gana y sumando a VOX sacan un escaño de ventaja al PSOE. El PP gana al PSOE por tan solo 897 votos y el PSOE gana a VOX por 11743 votos
<br><br>
2026: <a href="https://elpais.com/espana/elecciones/autonomicas/08/49/" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span> 
</a>
<br><br>
El PP las gana y sumando a VOX sacan un escaño de ventaja al PSOE. El PP gana al PSOE por 6531 votos y el PSOE gana a VOX por 9053 votos
<br><br>
En conclusión, Zamora es una provincia autonómicamente de derechas. Cuando Zamora comienza con 8 escaños en las tres primeras elecciones se producen empates desde 1983-1991. A partir de 1995 la derecha ya aventaja a la izquierda.
Cuando pasa a 7 escaños la derecha siempre saca como mínimo un escaño de ventaja a la izquierda, es decir la derecha saca 4 escaños frente a los 3 de la izquierda y saca su récord histórico en 2011 aventajando a la izquierda en tres escaños
La izquierda únicamente gana en 1983 aunque lo hace por tan solo 349 votos y en 2019, pero la suma de PP y CIUDADANOS suma más en votos

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Zamora</title>
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
if (provincia === "Avila") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Ávila <span class="escaños">7 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1983/avila" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #ADD8E6;">AP-PDP-UL 3 Escaños</span> 
                <span style="color: #FF0000;">PSOE 2 Escaños</span>  
                <span style="color: #006400;">CDS 2 Escaños</span>
                </a>
                <br><br>
                AP-PDP-UL las gana y sumando a CDS sacan tres escaños de ventaja al PSOE. AP-PDP-UL gana al PSOE por 10423 votos y el PSOE gana a CDS por 8375 votos
                <br><br>
                1987: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1987/avila" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #006400;">CDS 3 Escaños</span>
                    <span style="color: #ADD8E6;">AP 2 Escaños</span> 
                <span style="color: #FF0000;">PSOE 2 Escaños</span>
                </a>
                <br><br>
                CDS las gana y sumando a AP sacan tres escaños de ventaja al PSOE. CDS gana a AP por 10890 votos y AP gana al PSOE por 7249 votos
                <br><br>
                1991: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1991/avila" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 3 Escaños</span> 
                <span style="color: #FF0000;">PSOE 2 Escaños</span> 
                <span style="color: #006400;">CDS 2 Escaños</span>
                </a>
                <br><br>
                El PP las gana y sumando a CDS sacan tres escaños de ventaja al PSOE. El PP gana al PSOE por 16840 votos y el PSOE gana a CDS por tan solo 1589 en votos
                <br><br>
                1995: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1995/avila" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 5 Escaños</span> 
                <span style="color: #FF0000;">PSOE 2 Escaños</span> 
                </a>
                <br><br>
                El PP las vuelve a ganar sacando tres escaños de ventaja al PSOE al que dobla en votos  
                <br><br>
                1999: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1999/avila" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 5 Escaños</span> 
                <span style="color: #FF0000;">PSOE 2 Escaños</span>
                </a>
                <br><br>
                El PP repite como ganador en la provincia sacando tres escaños de ventaja al PSOE al que vuelve a doblar en votos
                <br><br>
                2003: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-2003/avila" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 5 Escaños</span> 
                <span style="color: #FF0000;">PSOE 2 Escaños</span>
                </a>
                <br><br>
                El PP continua como vencedor sacando tres escaños de ventaja al PSOE al que aventaja en 30057 votos
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/08/05.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
De nuevo, el PP vuelve a ganar las elecciones sacando tres escaños de ventaja al PSOE al que aventaja en 28613 votos
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/08/05.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
El PP las vuelve a ganar sacando tres escaños de ventaja al PSOE al que dobla en votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/08/05.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
El PP sigue siendo la fuerza más votada y sumando a CIUDADANOS sacan tres escaños de ventaja al PSOE. El PP dobla al PSOE en votos y el PSOE gana a CIUDADANOS por 9642 votos
<br><br>
2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/08/05.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    <span style="color: #c99f00;">XAV 1 Escaño</span> 
</a>
<br><br>
El PP las gana y sumando a CIUDADANOS sacan un escaño de ventaja a la suma de PSOE y XAV (Nacido como una escisión de antiguos militantes del Partido Popular, partido regionalista liberal y de centro). El PP gana al PSOE por 7745 votos, el PSOE dobla a CIUDADANOS en votos y CIUDADANOS gana a POR ÁVILA por 3363 votos
<br><br>

2022: <a href="https://resultados.elpais.com/elecciones/2022/autonomicas/08/05.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span> 
    <span style="color: #c99f00;">XAV 1 Escaño</span> 
</a>
<br><br>
El PP las gana y sumando a VOX sacan un escaño de ventaja a la suma de PSOE y XAV. El PP gana al PSOE por 8065 votos, el PSOE gana a VOX por 5518 votos y VOX gana a XAV por tan solo 556 votos
<br><br>
2026: <a href="https://elpais.com/espana/elecciones/autonomicas/08/05/" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span> 
    <span style="color: #c99f00;">XAV 1 Escaño</span> 
</a>
<br><br>
El PP las gana y sumando a VOX sacan un escaño de ventaja a la suma de PSOE y XAV. El PP gana al PSOE por 9260 votos, el PSOE gana a VOX por 4072 votos y VOX gana a XAV por 4189 votos
<br><br>
En conclusión, Ávila es una provincia autonómicamente claramente de derechas. Desde 1983 hasta el año 2015 la derecha suma siempre tres escaños más que la izquierda marcando 5 escaños para la derecha y 2 para la izquierda. A partir de 2019 surge XAV (Por Ávila) como escisión del PP, lo cual resta un escaño de ventaja a la derecha. 
A pesar de ello, la suma de la derecha en 2019 de PP y CIUDADANOS suma 4 frente a los tres de la izquierda y en 2022 y en 2026 lo hace la suma de PP y VOX 

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Ávila</title>
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
if (provincia === "Salamanca") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Salamanca <span class="escaños">11 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1983/salamanca" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                <span style="color: #FF0000;">PSOE 6 Escaños</span>  
                <span style="color: #ADD8E6;">AP-PDP-UL 5 Escaños</span>
                </a>
                <br><br>
                El PSOE las gana sacando un escaño de ventaja a AP-PDP-UL al que aventaja en 24607 votos
                <br><br>
                1987: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1987/salamanca" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #ADD8E6;">AP 4 Escaños</span> 
                <span style="color: #FF0000;">PSOE 4 Escaños</span>
                <span style="color: #006400;">CDS 3 Escaños</span>
                </a>
                <br><br>
                AP las gana y sumando a CDS sacan tres escaños de ventaja al PSOE. AP gana al PSOE por tan solo 417 votos y el PSOE gana a CDS por 27710 votos
                <br><br>
                1991: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1991/salamanca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 5 Escaños</span> 
                <span style="color: #FF0000;">PSOE 5 Escaños</span> 
                <span style="color: #006400;">CDS 1 Escaño</span>
                </a>
                <br><br>
                El PP las gana y sumando a CDS sacan un escaño de ventaja al PSOE. El PP gana al PSOE por 10014 votos y el PSOE quintuplica en votos a CDS
                <br><br>
                1995: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1995/salamanca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 6 Escaños</span> 
                <span style="color: #FF0000;">PSOE 4 Escaños</span> 
                <span style="color: #d25644;">IU 1 Escaño</span>
                </a>
                <br><br>
                El PP las vuelve a ganar y saca un escaño de ventaja a la suma de PSOE e IU. El PP gana al PSOE por 47764 votos y el PSOE casi cuadruplica a IU en votos  
                <br><br>
                1999: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1999/salamanca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 7 Escaños</span> 
                <span style="color: #FF0000;">PSOE 4 Escaños</span>
                </a>
                <br><br>
                El PP repite como ganador en la provincia sacando tres escaños de ventaja al PSOE al que aventaja en 43088 votos
                <br><br>
                2003: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-2003/salamanca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 7 Escaños</span> 
                <span style="color: #FF0000;">PSOE 4 Escaños</span>
                </a>
                <br><br>
                El PP continua como vencedor sacando tres escaños de ventaja al PSOE al que aventaja en 32625 votos
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/08/37.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 7 Escaños</span> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
</a>
<br><br>
De nuevo, el PP vuelve a ganar las elecciones sacando tres escaños de ventaja al PSOE al que aventaja en 32986 votos
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/08/37.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 7 Escaños</span> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
</a>
<br><br>
El PP las vuelve a ganar sacando tres escaños de ventaja al PSOE al que aventaja en 55178 votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/08/37.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 6 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
</a>
<br><br>
El PP sigue siendo la fuerza más votada y sumando a CIUDADANOS sacan tres escaños de ventaja a la suma de PSOE y PODEMOS. El PP gana al PSOE por 30392 votos, el PSOE gana a CIUDADANOS por 22386 votos y CIUDADANOS gana a PODEMOS por 4772 votos
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 10 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/08/37.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #FF7F00;">CS 2 Escaños</span>
</a>
<br><br>
El PP las gana y sumando a CIUDADANOS sacan dos escaños de ventaja al PSOE. El PP gana al PSOE por 9875 votos y el PSOE dobla a CIUDADANOS en votos
<br><br>

2022: <a href="https://resultados.elpais.com/elecciones/2022/autonomicas/08/37.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #0000FF;">PP 5 Escaños</span>
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span> 
</a>
<br><br>
El PP las gana y sumando a VOX sacan cuatro escaños de ventaja al PSOE. El PP gana al PSOE por 15720 votos y el PSOE gana a VOX por 19251 votos
<br><br>
2026: <a href="https://elpais.com/espana/elecciones/autonomicas/08/37/" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #0000FF;">PP 5 Escaños</span>
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span> 
</a>
<br><br>
El PP las gana y sumando a VOX sacan cuatro escaños de ventaja al PSOE. El PP gana al PSOE por 23545 votos y el PSOE gana a VOX por 17680 votos
<br><br>
En conclusión, Salamanca es una provincia autonómicamente claramente de derechas. Comienza en 1983 (las únicas elecciones de la democracia en las que ha gobernado el PSOE en Castilla y León) siendo de izquierdas, el PSOE gana a AP-PDP-UL por un escaño, pero en 1987
con la fuerte implantación del partido de Adolfo Suarez (CDS) la suma de AP y CDS saca tres escaños de ventaja al PSOE. En 1991 y 1995 la derecha retrocede pasando a solo sacar un escaño de ventaja a la izquierda, pero desde 1999 hasta el año 2015 la derecha
amplia su ventaja sobre la izquierda en tres escaños. En 2019 sacan dos escaños de ventaja, algo menor, pero en 2022 y en 2026 la derecha vuelve a su mejor resultado histórico del 2011 donde la suma de PP y VOX saca cuatro escaños de ventaja a la izquierda.

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Salamanca</title>
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
if (provincia === "Burgos") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Burgos <span class="escaños">11 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1983/burgos" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                <span style="color: #ADD8E6;">AP-PDP-UL 6 Escaños</span>
                <span style="color: #FF0000;">PSOE 4 Escaños</span> 
                <span style="color: #0688c9;">PDL 1 Escaño</span> 
                </a>
                <br><br>
                AP-PDP-UL las gana y sumando a PDL (El Partido Demócrata Liberal (PDL) fue un partido político español de ideología liberal fundado en 1982 por Antonio Garrigues Walker y Francisco de Paula Burguera a partir de sectores liberales de Unión de Centro Democrático (UCD)) sacan tres escaños de ventaja al PSOE. AP-PDP-UL gana al PSOE por 15482 votos y el PSOE cuadruplica en votos a PDL.
                <br><br>
                1987: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1987/burgos" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                <span style="color: #FF0000;">PSOE 4 Escaños</span>
                <span style="color: #ADD8E6;">AP 4 Escaños</span> 
                <span style="color: #006400;">CDS 2 Escaños</span>
                <span style="color: #0099c6;">SI 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana, pero la suma de AP, CDS y SI (partido de centroderecha) le saca tres escaños de ventaja. El PSOE gana a AP por 7941 votos, AP gana a CDS por 25396 votos y CDS gana a SI por 13622 votos
                <br><br>
                1991: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1991/burgos" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 6 Escaños</span> 
                <span style="color: #FF0000;">PSOE 5 Escaños</span> 
                </a>
                <br><br>
                El PP las gana sacando un escaño de ventaja al PSOE al que aventaja en 18776 votos
                <br><br>
                1995: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1995/burgos" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 7 Escaños</span> 
                <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                <span style="color: #d25644;">IU 1 Escaño</span>
                </a>
                <br><br>
                El PP las vuelve a ganar y saca tres escaños de ventaja a la suma de PSOE e IU. El PP dobla al PSOE en votos y el PSOE gana a IU por 25223 votos
                <br><br>
                1999: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1999/burgos" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 6 Escaños</span> 
                <span style="color: #FF0000;">PSOE 4 Escaños</span>
                <span style="color: #ebc201;">TC-PNC 1 Escaños</span>
                </a>
                <br><br>
                El PP las gana y saca un escaño de ventaja a la suma de PSOE y TC-PNC (Tierra Comunera (TC) fue un partido político español de tendencia castellanista de centro izquierda. Fue fundado en noviembre de 1988 en Soria, si bien tenía su mayor implantación política en la ciudad de Burgos, donde se hallaba su sede.). El PP gana al PSOE por 34071 votos y el PSOE cuadruplica a TC-PNC en votos
                <br><br>
                2003: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-2003/burgos" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 7 Escaños</span> 
                <span style="color: #FF0000;">PSOE 4 Escaños</span>
                </a>
                <br><br>
                El PP continua como vencedor sacando tres escaños de ventaja al PSOE al que aventaja en 42263 votos
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/08/09.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 7 Escaños</span> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
</a>
<br><br>
De nuevo, el PP vuelve a ganar las elecciones sacando tres escaños de ventaja al PSOE al que aventaja en 33269 votos
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/08/09.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 7 Escaños</span> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
</a>
<br><br>
El PP las vuelve a ganar sacando tres escaños de ventaja al PSOE al que aventaja en 45708 votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/08/09.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
El PP sigue siendo la fuerza más votada y sumando a CIUDADANOS sacan un escaño de ventaja a la suma de PSOE y PODEMOS. El PP gana al PSOE por 21598 votos, el PSOE gana a PODEMOS por 19520 votos y PODEMOS gana a CIUDADANOS por 3701 votos
<br><br>
2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/08/09.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF7F00;">CS 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
</a>
<br><br>
El PSOE las gana por primera vez y sumando a PODEMOS sacan un escaño de ventaja a la suma de PP y CIUDADANOS. El PSOE gana al PP por 17163 votos, el PP gana a CIUDADANOS por 20740 votos y CIUDADANOS dobla a PODEMOS en votos
<br><br>

2022: <a href="https://resultados.elpais.com/elecciones/2022/autonomicas/08/09.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #0000FF;">PP 4 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span> 
</a>
<br><br>
El PSOE las vuelve a ganar, pero la suma de PP y VOX le saca un escaño de ventaja. El PSOE gana al PP por 2847 votos y el PP gana a VOX por 24852 votos
<br><br>
2026: <a href="https://elpais.com/espana/elecciones/autonomicas/08/09/" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #0000FF;">PP 5 Escaños</span>
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span> 
</a>
<br><br>
El PP las gana y sumando a VOX sacan tres escaños de ventaja al PSOE. El PP gana al PSOE por tan solo 1519 votos y el PSOE gana a VOX por 27809 votos
<br><br>
En conclusión, Burgos es una provincia autonómicamente de derechas. En las dos primeras elecciones la suma de la derecha saca tres escaños de ventaja a la izquierda, marcando 7 escaños para la derecha y 4 para la izquierda.
En 1991 se estrecha a un escaño, en 1995 vuelve a los 3 de ventaja, en 1999 vuelve a la distancia de solo un escaño, desde 2003 hasta 2011 vuelve a 3 de ventaja, en 2015 vuelve a estrecharse a uno.
Despues de todos estos tiras y aflojas, en 2019 el PSOE gana por primera vez y sumando a PODEMOS es la izquierda la que saca un escaño de ventaja a la derecha. PODEMOS gana este escaño por tan solo 348 votos y por el voto extranjero. De no haberlo conseguido, el PP habría conseguido un escaño adicional y la derecha hubiera sido la que hubiera sacado un escaño de ventaja a la izquierda.  En 2022 el PSOE vuelve a ganar, pero la suma de PP y VOX les saca un
escaño de ventaja. Y en el 2026 vuelve a sus mejores registros sacando tres escaños de ventaja a la izquierda. Aunque es de derechas, en el contexto de Castilla y León, se considera de las "más progresistas" al no tener victorias tan contundentes de la derecha

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Burgos</title>
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
if (provincia === "León") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">León <span class="escaños">15 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1983/leon" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                <span style="color: #FF0000;">PSOE 9 Escaños</span> 
                <span style="color: #ADD8E6;">AP-PDP-UL 6 Escaños</span>
                </a>
                <br><br>
                El PSOE las gana y saca tres escaños de ventaja a AP-PDP-UL al que aventaja en 32760 votos
                <br><br>
                1987: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1987/leon" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                <span style="color: #FF0000;">PSOE 7 Escaños</span>
                <span style="color: #ADD8E6;">AP 6 Escaños</span> 
                <span style="color: #006400;">CDS 2 Escaños</span>
                </a>
                <br><br>
                El PSOE las vuelve a ganar, pero la suma de AP y CDS le saca un escaño de ventaja. El PSOE gana a AP por 12440 votos y AP dobla a CDS en votos
                <br><br>
                1991: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1991/leon" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 7 Escaños</span> 
                <span style="color: #FF0000;">PSOE 7 Escaños</span> 
                <span style="color: #006400;">CDS 1 Escaño</span>
                </a>
                <br><br>
                El PP las gana y sumando a CDS sacan un escaño de ventaja al PSOE. El PP gana al PSOE por 2658 votos y el PSOE multiplica por siete a CDS.
                <br><br>
                1995: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1995/leon" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 7 Escaños</span> 
                <span style="color: #FF0000;">PSOE 5 Escaños</span> 
                <span style="color: #b71966;">UPL 2 Escaños</span>
                <span style="color: #d25644;">IU 1 Escaño</span>
                </a>
                <br><br>
                El PP las gana, pero la suma de PSOE, UPL e IU, les saca un escaño de ventaja. El PP gana al PSOE por 45572 votos, el PSOE dobla a UPL en votos y UPL gana a IU por 18561 votos
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 14 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1999: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1999/leon" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 6 Escaños</span> 
                <span style="color: #FF0000;">PSOE 5 Escaños</span>
                <span style="color: #b71966;">UPL 3 Escaños</span>
                </a>
                <br><br>
                El PP las vuelve a ganar, pero la suma de PSOE y UPL les saca dos escaños de ventaja. El PP gana al PSOE por 33819 votos y el PSOE gana a UPL por 36900 votos
                <br><br>
                2003: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-2003/leon" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 6 Escaños</span> 
                <span style="color: #FF0000;">PSOE 6 Escaños</span>
                <span style="color: #b71966;">UPL 2 Escaños</span>
                </a>
                <br><br>
                El PP continua como vencedor, pero la suma de PSOE y UPL le saca dos escaños de ventaja. El PP gana al PSOE por 9137 votos y el PSOE dobla a UPL en votos
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/08/24.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 6 Escaños</span>
    <span style="color: #0000FF;">PP 6 Escaños</span> 
    <span style="color: #b71966;">UPL 2 Escaños</span>
</a>
<br><br>
El PSOE las gana y sumando a UPL sacan dos escaños de ventaja al PP. El PSOE gana al PP por tan solo 239 votos y el PP casi triplica a UPL en votos
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/08/24.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 8 Escaños</span> 
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #b71966;">UPL 1 Escaño</span>
</a>
<br><br>
El PP las gana y saca dos escaños de ventaja a la suma de PSOE y UPL. El PP gana al PSOE por 36469 votos y el PSOE triplica a UPL en votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/08/24.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    <span style="color: #b71966;">UPL 1 Escaño</span>
</a>
<br><br>
El PP sigue siendo la fuerza más votada, pero la suma de PSOE, PODEMOS y UPL saca dos escaños de ventaja a la suma de PP y CIUDADANOS. El PP gana al PSOE por 12621 votos, el PSOE dobla a PODEMOS en votos, PODEMOS gana a CIUDADANOS por 9602 votos y CIUDADANOS gana a UPL por 5052 votos
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 13 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/08/24.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 6 Escaños</span>
    <span style="color: #0000FF;">PP 4 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    <span style="color: #b71966;">UPL 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
</a>
<br><br>
El PSOE las gana y sumando a UPL y PODEMOS sacan tres escaños de ventaja a la suma de PP y CIUDADANOS. El PSOE gana al PP por 20769 votos, el PP dobla a CIUDADANOS en votos, CIUDADANOS gana a UPL por 2045 votos y UPL gana a PODEMOS por 12318 votos
<br><br>

2022: <a href="https://resultados.elpais.com/elecciones/2022/autonomicas/08/24.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 4 Escaños</span>
    <span style="color: #b71966;">UPL 3 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span> 
</a>
<br><br>
El PSOE las vuelve a ganar y sumando a UPL sacan un escaño de ventaja a la suma de PP y VOX. El PSOE gana al PP por 7764 votos, el PP gana a UPL por 8303 votos y UPL gana a VOX por 13340 votos
<br><br>
2026: <a href="https://elpais.com/espana/elecciones/autonomicas/08/24/" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 4 Escaños</span>
    <span style="color: #b71966;">UPL 3 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span> 
</a>
<br><br>
El PSOE las gana y sumando a UPL sacan un escaño de ventaja a la suma de PP y VOX. El PSOE gana al PP por tan solo 523 votos, el PP gana a UPL por 16471 votos y UPL gana a VOX por 10388 votos
<br><br>
En conclusión, León autonómicamente es claramente de izquierdas. En las primeras elecciones el PSOE saca tres escaños de ventaja a AP-PDP-UL. En 1987 y 1991 la derecha saca un escaño de ventaja a la izquierda, pero en 1995 es la izquierda la que saca un escaño de ventaja a la derecha.
Desde 1999 hasta 2007 la izquierda amplia su ventaja a dos escaños sobre la derecha, en 2011 es la derecha la que saca dos escaños de ventaja a la izquierda, pero en 2015 vuelve a ser la izquierda la que saca dos escaños de ventaja a la derecha.
En 2019 la izquierda saca tres escaños de ventaja a la derecha su mayor ventaja y en 2022 la izquierda reduce su ventaja a un escaño de ventaja sobre la derecha.La UPL surge en 1995 con 2 escaños, en 1999 mejora hasta 3 luego progresivamente desciende y en 2022 vuelve a 3 escaños con su mejor porcentaje histórico de votos.
Son muchas más las victorias de la izquierda, la victoria más contundente de la derecha se da en 2011 con el efecto nacional de la mayoría absoluta de Rajoy, pero es una situación excepcional. León es la provincia más progresista de Castilla y León.

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>León</title>
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
if (provincia === "Valladolid") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Valladolid <span class="escaños">14 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1983/valladolid" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                <span style="color: #FF0000;">PSOE 9 Escaños</span> 
                <span style="color: #ADD8E6;">AP-PDP-UL 5 Escaños</span>
                </a>
                <br><br>
                El PSOE las gana y saca cuatro escaños de ventaja a AP-PDP-UL al que aventaja en 47168 votos
                <br><br>
                1987: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1987/valladolid" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                <span style="color: #FF0000;">PSOE 6 Escaños</span>
                <span style="color: #ADD8E6;">AP 5 Escaños</span> 
                <span style="color: #006400;">CDS 3 Escaños</span>
                </a>
                <br><br>
                El PSOE las vuelve a ganar, pero la suma de AP y CDS le saca dos escaños de ventaja al PSOE. El PSOE gana a AP por 9854 votos y AP gana a CDS por 33039 votos
                <br><br>
                1991: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1991/valladolid" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 7 Escaños</span> 
                <span style="color: #FF0000;">PSOE 6 Escaños</span> 
                <span style="color: #d25644;">IU 1 Escaño</span>
                </a>
                <br><br>
                El PP las gana empatando en escaños a la suma de PSOE e IU. El PP gana al PSOE por 10554 votos y el PSOE cuadruplica a IU en votos
                <br><br>
                1995: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1995/valladolid" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 8 Escaños</span> 
                <span style="color: #FF0000;">PSOE 4 Escaños</span> 
                <span style="color: #d25644;">IU 2 Escaños</span>
                </a>
                <br><br>
                El PP las gana y saca dos escaños de ventaja a la suma de PSOE e IU. El PP gana al PSOE por 61660 votos y el PSOE dobla a IU en votos
                <br><br>
                1999: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1999/valladolid" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 8 Escaños</span> 
                <span style="color: #FF0000;">PSOE 5 Escaños</span>
                <span style="color: #d25644;">IU 1 Escaño</span>
                </a>
                <br><br>
                El PP las vuelve a ganar, sacando dos escaños de ventaja a la suma de PSOE e IU. El PP gana al PSOE por 35731 votos y el PSOE cuadruplica a IU en votos
                <br><br>
                2003: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-2003/valladolid" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 8 Escaños</span> 
                <span style="color: #FF0000;">PSOE 6 Escaños</span>
                </a>
                <br><br>
                El PP continua como vencedor, sacando dos escaños de ventaja al PSOE al que aventaja en 20088 votos
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 15 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/08/47.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 8 Escaños</span> 
    <span style="color: #FF0000;">PSOE 7 Escaños</span>
</a>
<br><br>
El PP las gana sacando un escaño de ventaja al PSOE al que aventaja en 30384 votos
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/08/47.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 9 Escaños</span> 
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
El PP las gana y saca tres escaños de ventaja a la suma de PSOE e IU. El PP gana al PSOE por 62245 votos y el PSOE triplica a IU en votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/08/47.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 7 Escaños</span> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
El PP sigue siendo la fuerza más votada y sumando a CIUDADANOS sacan un escaño de ventaja a la suma de PSOE, PODEMOS e IU. El PP gana al PSOE por 31015 votos, el PSOE gana a PODEMOS por 34530 votos, PODEMOS gana a CIUDADANOS por 11857 votos y CIUDADANOS gana a IU por 7881 votos
<br><br>
2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/08/47.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 6 Escaños</span>
    <span style="color: #0000FF;">PP 5 Escaños</span>
    <span style="color: #FF7F00;">CS 3 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span> 
</a>
<br><br>
El PSOE las gana, pero la suma de PP, CIUDADANOS y VOX le saca tres escaños de ventaja. El PSOE gana al PP por 15305 votos, el PP gana a CIUDADANOS por 35132 votos y CIUDADANOS dobla a VOX en votos
<br><br>

2022: <a href="https://resultados.elpais.com/elecciones/2022/autonomicas/08/47.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #0000FF;">PP 5 Escaños</span>
    <span style="color: #008000;">VOX 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
El PSOE las gana, pero la suma de PP, VOX y CIUDADANOS saca tres escaños de ventaja a la suma de PSOE y PODEMOS. El PSOE gana al PP por tan solo 1465 votos, el PP gana a VOX por 29547 votos, VOX dobla a PODEMOS en votos y PODEMOS gana a CIUDADANOS por tan solo 56 votos. PODEMOS obtiene el escaño que no obtuvo hace cuatro años en Valladolid por su unión con EQUO
<br><br>
2026: <a href="https://elpais.com/espana/elecciones/autonomicas/08/47/" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #0000FF;">PP 6 Escaños</span>
    <span style="color: #FF0000;">PSOE 6 Escaños</span>
    <span style="color: #008000;">VOX 3 Escaños</span>
</a>
<br><br>
El PP las gana y sumando a VOX sacan tres escaños de ventaja a la izquierda. El PP gana al PSOE por 12174 votos y el PSOE gana a VOX por 32198 votos
<br><br>
En conclusión, Valladolid autonómicamente es claramente de derechas. En las primeras elecciones es cierto que el PSOE gana y saca cuatro escaños de ventaja a AP-PDP-UL, pero en 1987 la derecha saca dos escaños de ventaja a la izquierda. En 1991 se marca un empate entre
derecha e izquierda, pero de nuevo desde 1995 hasta 2003, la derecha vuelve a sacar dos escaños de ventaja a la izquierda. En 2007 la derecha reduce su ventaja sobre la izquierda en un escaño, pero en 2011 la amplia a su record: a 3 escaños sobre la izquierda, en 2015 vuelve a estrecharse la ventaja de la derecha
a un escaño y de nuevo en 2019 vuelven a sacar tres escaños de ventaja a la izquierda, situación que se mantiene igual en 2022. En 2026 gana el PP y la derecha mantiene su ventaja de 3 escaños sobre la izquierda.

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Valladolid</title>
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
if (provincia === "Castilla y León") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Castilla y León <span class="escaños">84 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1983" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                <span style="color: #FF0000;">PSOE 42 Escaños</span> 
                <span style="color: #ADD8E6;">AP-PDP-UL 39 Escaños</span>
                <span style="color: #006400;">CDS 2 Escaños</span>
                <span style="color: #0688c9;">PDL 1 Escaño</span>
                </a>
                <br><br>
                El PSOE gana las primeras elecciones empatando en escaños a la suma de AP-PDP-UL, CDS y PDL. El PSOE gobierna en este empate a escaños, porque es primera fuerza, pero la suma de votos de AP-PDP-UL, CDS y PL gana al PSOE por 54289 votos
                <br><br>
                1987: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1987" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                <span style="color: #ADD8E6;">AP 32 Escaños</span> 
                <span style="color: #FF0000;">PSOE 32 Escaños</span>
                <span style="color: #006400;">CDS 18 Escaños</span>
                <span style="color: #66B88D;">PDP 1 Escaño</span>
                <span style="color: #0099c6;">SI 1 Escaño</span>
                </a>
                <br><br>
                AP las gana y sumando a CDS, PDP y SI sacan veinte escaños de ventaja al PSOE. La derecha gobierna por primera vez.
                <br><br>
                1991: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1991" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 43 Escaños</span> 
                <span style="color: #FF0000;">PSOE 35 Escaños</span> 
                <span style="color: #006400;">CDS 5 Escaños</span>
                <span style="color: #d25644;">IU 1 Escaño</span>
                </a>
                <br><br>
                El PP las gana y sumando a CDS sacan doce escaños de ventaja a la suma de PSOE e IU.
                <br><br>
                1995: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1995" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 50 Escaños</span> 
                <span style="color: #FF0000;">PSOE 27 Escaños</span> 
                <span style="color: #d25644;">IU 5 Escaños</span>
                <span style="color: #b71966;">UPL 1 Escaño</span>
                </a>
                <br><br>
                El PP las gana y saca diecisiete escaños de ventaja a la suma de PSOE, IU y UPL.
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 83 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1999: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 48 Escaños</span> 
                <span style="color: #FF0000;">PSOE 30 Escaños</span>
                <span style="color: #b71966;">UPL 3 Escaños</span>
                <span style="color: #d25644;">IU 1 Escaño</span>
                <span style="color: #ebc201;">TC-PNC 1 Escaños</span>
                </a>
                <br><br>
                El PP las vuelve a ganar sacando catorce escaños de ventaja a la suma de PSOE, UPL, IU y TC-PNC
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 82 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                2003: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-2003" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 48 Escaños</span> 
                <span style="color: #FF0000;">PSOE 32 Escaños</span>
                <span style="color: #b71966;">UPL 2 Escaños</span>
                </a>
                <br><br>
                El PP continua como vencedor, sacando catorce escaños de ventaja a la suma de PSOE y UPL. 
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 83 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/08/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 48 Escaños</span> 
    <span style="color: #FF0000;">PSOE 33 Escaños</span>
    <span style="color: #b71966;">UPL 2 Escaños</span>
</a>
<br><br>
El PP las gana sacando trece escaños de ventaja a la suma de PSOE y UPL.
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 84 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2011: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/08/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 53 Escaños</span> 
    <span style="color: #FF0000;">PSOE 29 Escaños</span>
    <span style="color: #d25644;">IU 1 Escaño</span>
    <span style="color: #b71966;">UPL 1 Escaño</span>
</a>
<br><br>
El PP las gana sacando veintidos escaños de ventaja a la suma de PSOE, IU y UPL.
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/08/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 42 Escaños</span> 
    <span style="color: #FF0000;">PSOE 25 Escaños</span>
    <span style="color: #800080;">PODEMOS 10 Escaños</span>
    <span style="color: #FF7F00;">CS 5 Escaño</span>
    <span style="color: #d25644;">IU 1 Escaño</span>
    <span style="color: #b71966;">UPL 1 Escaño</span>
</a>
<br><br>
El PP las gana y sumando a CIUDADANOS sacan diez escaños de ventaja a la suma de PSOE, PODEMOS, IU y UPL
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 81 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2019: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/08/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 35 Escaños</span>
    <span style="color: #0000FF;">PP 29 Escaños</span>
    <span style="color: #FF7F00;">CS 12 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span> 
    <span style="color: #b71966;">UPL 1 Escaño</span>
    <span style="color: #c99f00;">XAV 1 Escaño</span> 

</a>
<br><br>
El PSOE las gana, pero la suma de PP, CIUDADANOS y VOX le saca dos escaños de ventaja a la suma de PSOE, PODEMOS, UPL y XAV.
<br><br>

2022: <a href="https://resultados.elpais.com/elecciones/2022/autonomicas/08/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #0000FF;">PP 31 Escaños</span>
    <span style="color: #FF0000;">PSOE 28 Escaños</span>
    <span style="color: #008000;">VOX 13 Escaños</span>
    <span style="color: #b71966;">UPL 3 Escaños</span>
    <span style="color: #141818;">SORIA YA! 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    <span style="color: #c99f00;">XAV 1 Escaño</span>
</a>
<br><br>
El PP las gana y sumando a VOX y CIUDADANOS sacan nueve escaños de ventaja a la suma de PSOE, UPL, SORIA YA!, PODEMOS y XAV. VOX sustituye a CIUDADANOS como socio del PP superando en un escaño el resultado de CIUDADANOS 
<br><br>
2026: <a href="https://elpais.com/espana/elecciones/autonomicas/08/" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #0000FF;">PP 33 Escaños</span>
    <span style="color: #FF0000;">PSOE 30 Escaños</span>
    <span style="color: #008000;">VOX 14 Escaños</span>
    <span style="color: #b71966;">UPL 3 Escaños</span>
    <span style="color: #c99f00;">XAV 1 Escaño</span>
    <span style="color: #141818;">SORIA YA! 1 Escaño</span>
</a>
<br><br>
El PP las gana y sumando a VOX sacan doce escaños de ventaja a la suma de PSOE, UPL, XAV y SORIA YA!
<br><br>
En conclusión, Castilla y León es una comunidad claramente de derechas. En los últimos 39 años ha gobernado la derecha, eso supone gobernar 10 de las 11 legislaturas,el PP ha tenido mayorías muy cómodas. El PSOE solo ha ganado en 1983 y siendo la fuerza más votada, pero empatando
en escaños y la derecha suma más votos separada. En el año 2019 se vuelve a producir ese vuelco en el que el PSOE en elecciones autonómicas pasa por delante del PP y tenía fácil sumar con CIUDADANOS, pero CIUDADANOS decidió aliarse con el PP sumando los 41 escaños exactos que forman la 
mayoría absoluta, pero seis meses despues de esa cita autonómica, el 10 de noviembre de 2019, en elecciones generales, vuelve a retornar y vuelve a ser el PP el que queda el primero. En 2022, el PP solo aventaja al PSOE en 16592 votos, pero se debe a la fortaleza de un VOX que obtiene uno de sus mejores
resultados autonómicos, haciendo que el PP pierda la hegemonía del bloque conservador, porque el PP, a pesar de subir dos escaños con respecto a 2019, pierde un 0,05% de los votos y más de 50000 votos respecto a 2019. En 2026 el bloque de la derecha se ensancha con el aumento de PP y VOX.
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Castilla y León</title>
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
function abrirVentanaEscenario81(provincia) {
    if (provincia === "Soria") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Soria <span class="escaños">5 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1983: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1983/soria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #ADD8E6;">AP-PDP-UL 3 Escaños</span> 
                <span style="color: #FF0000;">PSOE 2 Escaños</span>  
                </a>
                <br><br>
                IGUAL
                <br><br>
                1987: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1987/soria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #ADD8E6;">AP 2 Escaños</span>  
                <span style="color: #FF0000;">PSOE 2 Escaños</span>
                <span style="color: #006400;">CDS 1 Escaño</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1991: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1991/soria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 3 Escaños</span> 
                <span style="color: #FF0000;">PSOE 2 Escaños</span> 
                </a>
                <br><br>
                IGUAL
                <br><br>
                1995: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1995/soria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 4 Escaños</span> 
                <span style="color: #FF0000;">PSOE 1 Escaño</span> 
                </a>
                <br><br>
                IGUAL
                <br><br>
                1999: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1999/soria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 3 Escaños</span> 
                <span style="color: #FF0000;">PSOE 2 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                2003: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-2003/soria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 3 Escaños</span> 
                <span style="color: #FF0000;">PSOE 2 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/08/42.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/08/42.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/08/42.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/08/42.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
</a>
<br><br>
IGUAL
<br><br>

2022: <a href="" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #141818;">SORIA YA! 3 Escaños</span>
    <span style="color: #0000FF;">PP 1 Escaño</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2026: <a href="https://elpais.com/espana/elecciones/autonomicas/08/42/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 1 Escaño</span> 
    <span style="color: #141818;">SORIA YA! 1 Escaño</span>
     <span style="color: #008000;">VOX 1 Escaño</span> 
</a>
<br><br>
IGUAL
<br><br>
Desde la aparición de SORIA YA! en las elecciones autonómicas de Castilla y León de 2022, Soria se ha inclinado más hacia la izquierda. SORIA YA! obtiene un notabilisimo 42,57% y suma más votos que la segunda fuerza (PP) y la tercera fuerza (PSOE) juntos.
Por primera vez, los votos a las izquierdas superan a los votos de las derechas. Sin embargo, es una provincia donde el PP suele mantener históricamente el primer puesto.

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Soria</title>
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
if (provincia === "Segovia") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Segovia <span class="escaños">7 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1983/segovia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #ADD8E6;">AP-PDP-UL 4 Escaños</span> 
                <span style="color: #FF0000;">PSOE 3 Escaños</span>  
                </a>
                <br><br>
                AP-PDP-UL gana un escaño sacando un escaño de ventaja al PSOE
                <br><br>
                1987: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1987/segovia" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                <span style="color: #FF0000;">PSOE 2 Escaños</span>
                <span style="color: #006400;">CDS 2 Escaños</span>
                <span style="color: #ADD8E6;">AP 2 Escaño</span> 
                <span style="color: #66B88D;">PDP 1 Escaño</span> 
                </a>
                <br><br>
                AP gana un escaño, por lo que la suma de CDS, AP y PDP saca tres escaños de ventaja al PSOE
                <br><br>
                1991: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1991/segovia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 4 Escaños</span> 
                <span style="color: #FF0000;">PSOE 2 Escaños</span> 
                <span style="color: #006400;">CDS 1 Escaño</span>
                </a>
                <br><br>
                CDS aparece ganando un escaño, por lo que la suma de PP y CDS saca tres escaños de ventaja al PSOE
                <br><br>
                1995: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1995/segovia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 5 Escaños</span> 
                <span style="color: #FF0000;">PSOE 2 Escaños</span> 
                </a>
                <br><br>
                El PP gana un escaño sacando tres escaños de ventaja al PSOE
                <br><br>
                1999: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1999/segovia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 5 Escaños</span> 
                <span style="color: #FF0000;">PSOE 2 Escaños</span>
                </a>
                <br><br>
                El PP gana un escaño sacando tres escaños de ventaja al PSOE
                <br><br>
                2003: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-2003/segovia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 4 Escaños</span> 
                <span style="color: #FF0000;">PSOE 3 Escaños</span>
                </a>
                <br><br>
                El PSOE gana un escaño, pero el PP le saca un escaño de ventaja
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/08/40.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
</a>
<br><br>
El PSOE gana un escaño, pero el PP le saca un escaño de ventaja
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/08/40.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/08/40.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>
2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/08/40.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
El PP gana un escaño y sumando a CIUDADANOS sacan un escaño de ventaja al PSOE
<br><br>

2022: <a href="https://resultados.elpais.com/elecciones/2022/autonomicas/08/40.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span> 
</a>
<br><br>
El PSOE gana un escaño, pero la suma de PP y VOX le saca un escaño de ventaja
<br><br>
2026: <a href="https://elpais.com/espana/elecciones/autonomicas/08/40/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span> 
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Segovia es una provincia autonómicamente de derechas. La derecha ha ganado todas las elecciones menos en 1987, pero la derecha suma más que la izquierda y en 2019 donde hay un empate a escaños. En las elecciones más ajustadas
para la derecha: 1983 y 2019 se marca un empate entre el bloque de la izquierda y el bloque de la derecha, la norma es que la derecha saque 4 de los 6 escaños y su récord está en el año 2011 cuando la provincia pasa a 7 escaños sacando tres escaños
de ventaja a la izquierda

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Segovia</title>
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
if (provincia === "Palencia") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Palencia <span class="escaños">7 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1983/palencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #ADD8E6;">AP-PDP-UL 4 Escaños</span> 
                <span style="color: #FF0000;">PSOE 3 Escaños</span>  
                </a>
                <br><br>
                IGUAL
                <br><br>
                1987: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1987/palencia" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                <span style="color: #ADD8E6;">AP 4 Escaños</span> 
                <span style="color: #FF0000;">PSOE 2 Escaños</span>
                <span style="color: #006400;">CDS 1 Escaño</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1991: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1991/palencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 4 Escaños</span> 
                <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                </a>
                <br><br>
                IGUAL
                <br><br>
                1995: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1995/palencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 4 Escaños</span> 
                <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                </a>
                <br><br>
                IGUAL 
                <br><br>
                1999: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1999/palencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 4 Escaños</span> 
                <span style="color: #FF0000;">PSOE 3 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                2003: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-2003/palencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 4 Escaños</span> 
                <span style="color: #FF0000;">PSOE 3 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/08/34.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/08/34.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/08/34.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>
2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/08/34.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2022: <a href="https://resultados.elpais.com/elecciones/2022/autonomicas/08/34.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span> 
</a>
<br><br>
IGUAL
<br><br>
2026: <a href="https://elpais.com/espana/elecciones/autonomicas/08/34/" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span> 
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Palencia es una provincia autonómicamente de derechas. En las 11 elecciones que se han celebrado de los 7 escaños que se reparten la derecha siempre ha sumado 4 frente a los 3 de la izquierda como mínimo. El récord histórico de la 
derecha se da en el año 1987 cuando la derecha saca tres escaños de ventaja a la izquierda. El PSOE logra ganar en 2019 y 2022 al PP, pero lo hace por pocos votos en ambas ocasiones y además sumando a CIUDADANOS en 2019 y a VOX en 2022 la derecha aventaja en
un escaño como de costumbre a la izquierda.

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Palencia</title>
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
if (provincia === "Zamora") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Zamora <span class="escaños">7 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1983/zamora" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 4 Escaños</span>  
                <span style="color: #ADD8E6;">AP-PDP-UL 3 Escaños</span> 
                </a>
                <br><br>
                El PSOE gana a AP-PDP-UL por un escaño, que es el que pierde AP-PDP-UL al quedar 349 votos por debajo del PSOE
                <br><br>
                1987: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1987/zamora" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                <span style="color: #ADD8E6;">AP 3 Escaños</span> 
                <span style="color: #FF0000;">PSOE 3 Escaños</span>
                <span style="color: #006400;">CDS 1 Escaño</span>
                </a>
                <br><br>
                AP pierde un escaño, pero la suma de AP y CDS saca un escaño de ventaja al PSOE.
                <br><br>
                1991: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1991/zamora" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 4 Escaños</span> 
                <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                </a>
                <br><br>
                Con la caída de CDS al 10,06% y 12335 votos no hubiera sacado el escaño
                <br><br>
                1995: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1995/zamora" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 4 Escaños</span> 
                <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                </a>
                <br><br>
                El PP pierde un escaño sacando un escaño de ventaja al PSOE.
                <br><br>
                1999: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1999/zamora" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 4 Escaños</span> 
                <span style="color: #FF0000;">PSOE 3 Escaños</span>
                </a>
                <br><br>
                El PP pierde un escaño sacando un escaño de ventaja al PSOE.
                <br><br>
                2003: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-2003/zamora" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 4 Escaños</span> 
                <span style="color: #FF0000;">PSOE 3 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/08/49.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/08/49.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/08/49.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>
2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/08/49.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2022: <a href="https://resultados.elpais.com/elecciones/2022/autonomicas/08/49.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span> 
</a>
<br><br>
IGUAL
<br><br>
2026: <a href="https://elpais.com/espana/elecciones/autonomicas/08/49/" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span> 
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Zamora es una provincia autonómicamente de derechas. Cuando Zamora comienza con 8 escaños en las tres primeras elecciones se producen empates desde 1983-1991. A partir de 1995 la derecha ya aventaja a la izquierda.
Cuando pasa a 7 escaños la derecha siempre saca como mínimo un escaño de ventaja a la izquierda, es decir la derecha saca 4 escaños frente a los 3 de la izquierda y saca su récord histórico en 2011 aventajando a la izquierda en tres escaños
La izquierda únicamente gana en 1983 aunque lo hace por tan solo 349 votos y en 2019, pero la suma de PP y CIUDADANOS suma más en votos

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Zamora</title>
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
if (provincia === "Avila") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Ávila <span class="escaños">7 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1983/avila" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #ADD8E6;">AP-PDP-UL 3 Escaños</span> 
                <span style="color: #FF0000;">PSOE 2 Escaños</span>  
                <span style="color: #006400;">CDS 2 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1987: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1987/avila" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #006400;">CDS 3 Escaños</span>
                    <span style="color: #ADD8E6;">AP 2 Escaños</span> 
                <span style="color: #FF0000;">PSOE 2 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1991: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1991/avila" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 3 Escaños</span> 
                <span style="color: #FF0000;">PSOE 2 Escaños</span> 
                <span style="color: #006400;">CDS 2 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1995: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1995/avila" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 5 Escaños</span> 
                <span style="color: #FF0000;">PSOE 2 Escaños</span> 
                </a>
                <br><br>
                IGUAL  
                <br><br>
                1999: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1999/avila" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 5 Escaños</span> 
                <span style="color: #FF0000;">PSOE 2 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                2003: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-2003/avila" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 5 Escaños</span> 
                <span style="color: #FF0000;">PSOE 2 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/08/05.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/08/05.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/08/05.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>
2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/08/05.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    <span style="color: #c99f00;">XAV 1 Escaño</span> 
</a>
<br><br>
IGUAL
<br><br>

2022: <a href="https://resultados.elpais.com/elecciones/2022/autonomicas/08/05.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span> 
    <span style="color: #c99f00;">XAV 1 Escaño</span> 
</a>
<br><br>
IGUAL
<br><br>
2026: <a href="https://elpais.com/espana/elecciones/autonomicas/08/05/" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span> 
    <span style="color: #c99f00;">XAV 1 Escaño</span> 
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Ávila es una provincia autonómicamente claramente de derechas. Desde 1983 hasta el año 2015 la derecha suma siempre tres escaños más que la izquierda marcando 5 escaños para la derecha y 2 para la izquierda. A partir de 2019 surge XAV (Por Ávila) como escisión del PP, lo cual resta un escaño de ventaja a la derecha. 
A pesar de ello, la suma de la derecha en 2019 de PP y CIUDADANOS suma 4 frente a los tres de la izquierda y en 2022 y en 2026 lo hace la suma de PP y VOX.

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Ávila</title>
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
if (provincia === "Salamanca") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Salamanca <span class="escaños">10 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1983/salamanca" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                <span style="color: #FF0000;">PSOE 6 Escaños</span>  
                <span style="color: #ADD8E6;">AP-PDP-UL 4 Escaños</span>
                </a>
                <br><br>
                AP-PDP-UL pierde un escaño y el PSOE le saca dos escaños de ventaja
                <br><br>
                1987: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1987/salamanca" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #ADD8E6;">AP 4 Escaños</span> 
                <span style="color: #FF0000;">PSOE 4 Escaños</span>
                <span style="color: #006400;">CDS 2 Escaños</span>
                </a>
                <br><br>
                CDS pierde un escaño y sumando a AP sacan dos escaños de ventaja al PSOE
                <br><br>
                1991: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1991/salamanca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 5 Escaños</span> 
                <span style="color: #FF0000;">PSOE 5 Escaños</span> 
                </a>
                <br><br>
                CDS pierde el escaño al caer al 7,95% de los votos y 15798 votos
                <br><br>
                1995: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1995/salamanca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 6 Escaños</span> 
                <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                <span style="color: #d25644;">IU 1 Escaño</span>
                </a>
                <br><br>
                El PSOE pierde un escaño y el PP aventaja a la suma de PSOE e IU en dos escaños
                <br><br>
                1999: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1999/salamanca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 6 Escaños</span> 
                <span style="color: #FF0000;">PSOE 4 Escaños</span>
                </a>
                <br><br>
                El PP pierde un escaño sacando dos escaños de ventaja al PSOE
                <br><br>
                2003: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-2003/salamanca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 6 Escaños</span> 
                <span style="color: #FF0000;">PSOE 4 Escaños</span>
                </a>
                <br><br>
                El PP pierde un escaño sacando dos escaños de ventaja al PSOE
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/08/37.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 6 Escaños</span> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
</a>
<br><br>
El PP pierde un escaño sacando dos escaños de ventaja al PSOE
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/08/37.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 7 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
</a>
<br><br>
El PSOE pierde un escaño y el PP le saca cuatro escaños de ventaja 
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/08/37.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
</a>
<br><br>
El PP pierde un escaño y sumando a CIUDADANOS sacan dos escaños de ventaja a la suma de PSOE y PODEMOS
<br><br>
2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/08/37.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #FF7F00;">CS 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2022: <a href="https://resultados.elpais.com/elecciones/2022/autonomicas/08/37.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #0000FF;">PP 5 Escaños</span>
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span> 
</a>
<br><br>
IGUAL
<br><br>
2026: <a href="https://elpais.com/espana/elecciones/autonomicas/08/37/" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #0000FF;">PP 5 Escaños</span>
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span> 
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Salamanca es una provincia autonómicamente claramente de derechas. Comienza en 1983 (las únicas elecciones de la democracia en las que ha gobernado el PSOE en Castilla y León) siendo de izquierdas, el PSOE gana a AP-PDP-UL por un escaño, pero en 1987
con la fuerte implantación del partido de Adolfo Suarez (CDS) la suma de AP y CDS saca tres escaños de ventaja al PSOE. En 1991 y 1995 la derecha retrocede pasando a solo sacar un escaño de ventaja a la izquierda, pero desde 1999 hasta el año 2015 la derecha
amplia su ventaja sobre la izquierda en tres escaños. En 2019 sacan dos escaños de ventaja, algo menor, pero en 2022 y en 2026 la derecha vuelve a su mejor resultado histórico del 2011 donde la suma de PP y VOX saca cuatro escaños de ventaja a la izquierda.

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Salamanca</title>
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
if (provincia === "Burgos") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Burgos <span class="escaños">11 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1983/burgos" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                <span style="color: #ADD8E6;">AP-PDP-UL 6 Escaños</span>
                <span style="color: #FF0000;">PSOE 4 Escaños</span> 
                <span style="color: #0688c9;">PDL 1 Escaño</span> 
                </a>
                <br><br>
                IGUAL
                <br><br>
                1987: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1987/burgos" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                <span style="color: #FF0000;">PSOE 4 Escaños</span>
                <span style="color: #ADD8E6;">AP 4 Escaños</span> 
                <span style="color: #006400;">CDS 2 Escaños</span>
                <span style="color: #0099c6;">SI 1 Escaño</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1991: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1991/burgos" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 6 Escaños</span> 
                <span style="color: #FF0000;">PSOE 5 Escaños</span> 
                </a>
                <br><br>
                IGUAL
                <br><br>
                1995: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1995/burgos" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 7 Escaños</span> 
                <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                <span style="color: #d25644;">IU 1 Escaño</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1999: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1999/burgos" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 6 Escaños</span> 
                <span style="color: #FF0000;">PSOE 4 Escaños</span>
                <span style="color: #ebc201;">TC-PNC 1 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                2003: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-2003/burgos" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 7 Escaños</span> 
                <span style="color: #FF0000;">PSOE 4 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/08/09.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 7 Escaños</span> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/08/09.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 7 Escaños</span> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/08/09.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>
2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/08/09.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF7F00;">CS 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2022: <a href="https://resultados.elpais.com/elecciones/2022/autonomicas/08/09.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #0000FF;">PP 4 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span> 
</a>
<br><br>
IGUAL
<br><br>
2026: <a href="https://elpais.com/espana/elecciones/autonomicas/08/09/" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #0000FF;">PP 5 Escaños</span>
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span> 
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Burgos es una provincia autonómicamente de derechas. En las dos primeras elecciones la suma de la derecha saca tres escaños de ventaja a la izquierda, marcando 7 escaños para la derecha y 4 para la izquierda.
En 1991 se estrecha a un escaño, en 1995 vuelve a los 3 de ventaja, en 1999 vuelve a la distancia de solo un escaño, desde 2003 hasta 2011 vuelve a 3 de ventaja, en 2015 vuelve a estrecharse a uno.
Despues de todos estos tiras y aflojas, en 2019 el PSOE gana por primera vez y sumando a PODEMOS es la izquierda la que saca un escaño de ventaja a la derecha. PODEMOS gana este escaño por tan solo 348 votos y por el voto extranjero. De no haberlo conseguido, el PP habría conseguido un escaño adicional y la derecha hubiera sido la que hubiera sacado un escaño de ventaja a la izquierda.  En 2022 el PSOE vuelve a ganar, pero la suma de PP y VOX les saca un
escaño de ventaja.Y en el 2026 vuelve a sus mejores registros sacando tres escaños de ventaja a la izquierda. Aunque es de derechas, en el contexto de Castilla y León, se considera de las "más progresistas" al no tener victorias tan contundentes de la derecha

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Burgos</title>
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
if (provincia === "León") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">León <span class="escaños">13 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1983/leon" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                <span style="color: #FF0000;">PSOE 8 Escaños</span> 
                <span style="color: #ADD8E6;">AP-PDP-UL 5 Escaños</span>
                </a>
                <br><br>
                PSOE y AP-PDP-UL pierden un escaño cada uno. El PSOE saca tres escaños de ventaja a AP-PDP-UL 
                <br><br>
                1987: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1987/leon" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                <span style="color: #FF0000;">PSOE 6 Escaños</span>
                <span style="color: #ADD8E6;">AP 5 Escaños</span> 
                <span style="color: #006400;">CDS 2 Escaños</span>
                </a>
                <br><br>
                PSOE y AP pierden un escaño cada uno. La suma de AP y CDS saca un escaño de ventaja al PSOE
                <br><br>
                1991: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1991/leon" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 7 Escaños</span> 
                <span style="color: #FF0000;">PSOE 6 Escaños</span> 
                </a>
                <br><br>
                El PSOE pierde un escaño y CDS no obtiene escaño al caer al 5,56% de los votos y 14915 votos. El PP saca un escaño de ventaja al PSOE
                <br><br>
                1995: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1995/leon" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 7 Escaños</span> 
                <span style="color: #FF0000;">PSOE 4 Escaños</span> 
                <span style="color: #b71966;">UPL 1 Escaños</span>
                <span style="color: #d25644;">IU 1 Escaño</span>
                </a>
                <br><br>
                PSOE y UPL pierden un escaño cada uno. El PP saca un escaño de ventaja a la suma de PSOE, UPL e IU.
                <br><br>
                1999: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1999/leon" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 6 Escaños</span> 
                <span style="color: #FF0000;">PSOE 5 Escaños</span>
                <span style="color: #b71966;">UPL 2 Escaños</span>
                </a>
                <br><br>
                UPL pierde un escaño. PSOE y UPL sacan un escaño de ventaja al PP
                <br><br>
                2003: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-2003/leon" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 6 Escaños</span> 
                <span style="color: #FF0000;">PSOE 5 Escaños</span>
                <span style="color: #b71966;">UPL 2 Escaños</span>
                </a>
                <br><br>
                El PSOE pierde un escaño. PSOE y UPL sacan un escaño de ventaja al PP
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/08/24.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 6 Escaños</span>
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #b71966;">UPL 2 Escaños</span>
</a>
<br><br>
El PP pierde un escaño. PSOE y UPL sacan tres escaños de ventaja al PP
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/08/24.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 7 Escaños</span> 
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #b71966;">UPL 1 Escaño</span>
</a>
<br><br>
El PP pierde un escaño, sacando un escaño de ventaja a la suma de PSOE y UPL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/08/24.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    <span style="color: #b71966;">UPL 1 Escaño</span>
</a>
<br><br>
El PSOE pierde un escaño, pero la suma de PSOE, PODEMOS y UPL saca un escaño de ventaja a la suma de PP y CIUDADANOS.
<br><br>
2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/08/24.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 6 Escaños</span>
    <span style="color: #0000FF;">PP 4 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    <span style="color: #b71966;">UPL 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2022: <a href="https://resultados.elpais.com/elecciones/2022/autonomicas/08/24.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 4 Escaños</span>
    <span style="color: #b71966;">UPL 3 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span> 
</a>
<br><br>
IGUAL
<br><br>
2026: <a href="https://elpais.com/espana/elecciones/autonomicas/08/24/" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 4 Escaños</span>
    <span style="color: #b71966;">UPL 3 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span> 
</a>
<br><br>
IGUAL
<br><br>
En conclusión, León autonómicamente es claramente de izquierdas. En las primeras elecciones el PSOE saca tres escaños de ventaja a AP-PDP-UL. En 1987 y 1991 la derecha saca un escaño de ventaja a la izquierda, pero en 1995 es la izquierda la que saca un escaño de ventaja a la derecha.
Desde 1999 hasta 2007 la izquierda amplia su ventaja a dos escaños sobre la derecha, en 2011 es la derecha la que saca dos escaños de ventaja a la izquierda, pero en 2015 vuelve a ser la izquierda la que saca dos escaños de ventaja a la derecha.
En 2019 la izquierda saca tres escaños de ventaja a la derecha su mayor ventaja y en 2022 la izquierda reduce su ventaja a un escaño de ventaja sobre la derecha.La UPL surge en 1995 con 2 escaños, en 1999 mejora hasta 3 luego progresivamente desciende y en 2022 vuelve a 3 escaños con su mejor porcentaje histórico de votos.
Son muchas más las victorias de la izquierda, la victoria más contundente de la derecha se da en 2011 con el efecto nacional de la mayoría absoluta de Rajoy, pero es una situación excepcional. León es la provincia más progresista de Castilla y León.

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>León</title>
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
if (provincia === "Valladolid") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Valladolid <span class="escaños">15 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1983/valladolid" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                <span style="color: #FF0000;">PSOE 9 Escaños</span> 
                <span style="color: #ADD8E6;">AP-PDP-UL 6 Escaños</span>
                </a>
                <br><br>
                AP-PDP-UL gana un escaño. El PSOE saca tres escaños de ventaja a AP-PDP-UL.
                <br><br>
                1987: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1987/valladolid" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                <span style="color: #FF0000;">PSOE 6 Escaños</span>
                <span style="color: #ADD8E6;">AP 6 Escaños</span> 
                <span style="color: #006400;">CDS 3 Escaños</span>
                </a>
                <br><br>
                AP gana un escaño y sumando a CDS sacan tres escaños de ventaja al PSOE.
                <br><br>
                1991: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1991/valladolid" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 7 Escaños</span> 
                <span style="color: #FF0000;">PSOE 7 Escaños</span> 
                <span style="color: #d25644;">IU 1 Escaño</span>
                </a>
                <br><br>
                El PSOE gana un escaño y sumando a IU sacan un escaño de ventaja al PP.
                <br><br>
                1995: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1995/valladolid" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 8 Escaños</span> 
                <span style="color: #FF0000;">PSOE 5 Escaños</span> 
                <span style="color: #d25644;">IU 2 Escaños</span>
                </a>
                <br><br>
                El PSOE gana un escaño. El PP saca un escaño a la suma de PSOE e IU.
                <br><br>
                1999: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1999/valladolid" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 8 Escaños</span> 
                <span style="color: #FF0000;">PSOE 6 Escaños</span>
                <span style="color: #d25644;">IU 1 Escaño</span>
                </a>
                <br><br>
                El PSOE gana un escaño. El PP saca un escaño a la suma de PSOE e IU.
                <br><br>
                2003: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-2003/valladolid" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 8 Escaños</span> 
                <span style="color: #FF0000;">PSOE 7 Escaños</span>
                </a>
                <br><br>
                El PSOE gana un escaño. El PP saca un escaño de ventaja al PSOE.
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/08/47.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 8 Escaños</span> 
    <span style="color: #FF0000;">PSOE 7 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/08/47.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 9 Escaños</span> 
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/08/47.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 7 Escaños</span> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>
2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/08/47.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 6 Escaños</span>
    <span style="color: #0000FF;">PP 5 Escaños</span>
    <span style="color: #FF7F00;">CS 3 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span> 
</a>
<br><br>
IGUAL
<br><br>

2022: <a href="https://resultados.elpais.com/elecciones/2022/autonomicas/08/47.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #0000FF;">PP 5 Escaños</span>
    <span style="color: #008000;">VOX 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>
2026: <a href="https://elpais.com/espana/elecciones/autonomicas/08/47/" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #0000FF;">PP 6 Escaños</span>
    <span style="color: #FF0000;">PSOE 6 Escaños</span>
    <span style="color: #008000;">VOX 3 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Valladolid autonómicamente es claramente de derechas. En las primeras elecciones es cierto que el PSOE gana y saca cuatro escaños de ventaja a AP-PDP-UL, pero en 1987 la derecha saca dos escaños de ventaja a la izquierda. En 1991 se marca un empate entre
derecha e izquierda, pero de nuevo desde 1995 hasta 2003, la derecha vuelve a sacar dos escaños de ventaja a la izquierda. En 2007 la derecha reduce su ventaja sobre la izquierda en un escaño, pero en 2011 la amplia a su record: a 3 escaños sobre la izquierda, en 2015 vuelve a estrecharse la ventaja de la derecha
a un escaño y de nuevo en 2019 vuelven a sacar tres escaños de ventaja a la izquierda, situación que se mantiene igual en 2022. En 2026 gana el PP y la derecha mantiene su ventaja de 3 escaños sobre la izquierda.

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Valladolid</title>
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
if (provincia === "Castilla y León") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Castilla y León <span class="escaños">82 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1983" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                <span style="color: #FF0000;">PSOE 41 Escaños</span> 
                <span style="color: #ADD8E6;">AP-PDP-UL 38 Escaños</span>
                <span style="color: #006400;">CDS 2 Escaños</span>
                <span style="color: #0688c9;">PDL 1 Escaño</span>
                </a>
                <br><br>
                El PSOE empata a escaños a la suma de AP-PDP-UL, CDS y PDL.
                <br><br>
                1987: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1987" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                <span style="color: #ADD8E6;">AP 33 Escaños</span> 
                <span style="color: #FF0000;">PSOE 31 Escaños</span>
                <span style="color: #006400;">CDS 16 Escaños</span>
                <span style="color: #66B88D;">PDP 1 Escaño</span>
                <span style="color: #0099c6;">SI 1 Escaño</span>
                </a>
                <br><br>
                AP y CDS ya suman mayoria absoluta con 49 escaños superando en 7 la mayoría absoluta.
                <br><br>
                1991: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1991" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 43 Escaños</span> 
                <span style="color: #FF0000;">PSOE 35 Escaños</span> 
                <span style="color: #006400;">CDS 3 Escaños</span>
                <span style="color: #d25644;">IU 1 Escaño</span>
                </a>
                <br><br>
                El PP saca mayoría absoluta superando en dos escaños la mayoría absoluta
                <br><br>
                1995: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1995" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 50 Escaños</span> 
                <span style="color: #FF0000;">PSOE 26 Escaños</span> 
                <span style="color: #d25644;">IU 5 Escaños</span>
                <span style="color: #b71966;">UPL 1 Escaño</span>
                </a>
                <br><br>
                El PP saca mayoría absoluta superando en ocho escaños la mayoría absoluta
                <br><br>
                1999: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 47 Escaños</span> 
                <span style="color: #FF0000;">PSOE 31 Escaños</span>
                <span style="color: #b71966;">UPL 2 Escaños</span>
                <span style="color: #d25644;">IU 1 Escaño</span>
                <span style="color: #ebc201;">TC-PNC 1 Escaños</span>
                </a>
                <br><br>
                El PP sacaría mayoría absoluta superando en cinco escaños la mayoría absoluta
                <br><br>
                2003: <a href="https://www.datoselecciones.com/castilla-y-leon-parlamento-2003" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 48 Escaños</span> 
                <span style="color: #FF0000;">PSOE 32 Escaños</span>
                <span style="color: #b71966;">UPL 2 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/08/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 46 Escaños</span> 
    <span style="color: #FF0000;">PSOE 34 Escaños</span>
    <span style="color: #b71966;">UPL 2 Escaños</span>
</a>
<br><br>
El PP saca mayoría absoluta superando en cuatro escaños la mayoría absoluta
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/08/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 52 Escaños</span> 
    <span style="color: #FF0000;">PSOE 28 Escaños</span>
    <span style="color: #d25644;">IU 1 Escaño</span>
    <span style="color: #b71966;">UPL 1 Escaño</span>
</a>
<br><br>
El PP saca mayoría absoluta superando en diez escaños la mayoría absoluta
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/08/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 41 Escaños</span> 
    <span style="color: #FF0000;">PSOE 24 Escaños</span>
    <span style="color: #800080;">PODEMOS 10 Escaños</span>
    <span style="color: #FF7F00;">CS 5 Escaño</span>
    <span style="color: #d25644;">IU 1 Escaño</span>
    <span style="color: #b71966;">UPL 1 Escaño</span>
</a>
<br><br>
El PP pierde la mayoría absoluta, pero si le sumamos a CIUDADANOS supera en cuatro escaños la mayoría absoluta.
<br><br>
2019: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/08/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 35 Escaños</span>
    <span style="color: #0000FF;">PP 30 Escaños</span>
    <span style="color: #FF7F00;">CS 12 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span> 
    <span style="color: #b71966;">UPL 1 Escaño</span>
    <span style="color: #c99f00;">XAV 1 Escaño</span> 

</a>
<br><br>
El PP y CS sacan la mayoría absoluta exacta.
<br><br>

2022: <a href="https://resultados.elpais.com/elecciones/2022/autonomicas/08/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #0000FF;">PP 31 Escaños</span>
    <span style="color: #FF0000;">PSOE 29 Escaños</span>
    <span style="color: #008000;">VOX 13 Escaños</span>
    <span style="color: #b71966;">UPL 3 Escaños</span>
    <span style="color: #141818;">SORIA YA! 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    <span style="color: #c99f00;">XAV 1 Escaño</span>
</a>
<br><br>
El PSOE sube un escaño, pero la suma de PP y VOX saca dos escaños por encima de la mayoría absoluta.
<br><br>
2026: <a href="https://elpais.com/espana/elecciones/autonomicas/08/" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #0000FF;">PP 33 Escaños</span>
    <span style="color: #FF0000;">PSOE 30 Escaños</span>
    <span style="color: #008000;">VOX 14 Escaños</span>
    <span style="color: #b71966;">UPL 3 Escaños</span>
    <span style="color: #c99f00;">XAV 1 Escaño</span>
    <span style="color: #141818;">SORIA YA! 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Castilla y León es una comunidad claramente de derechas. En los últimos 39 años ha gobernado la derecha, eso supone gobernar 10 de las 11 legislaturas,el PP ha tenido mayorías muy cómodas. El PSOE solo ha ganado en 1983 y siendo la fuerza más votada, pero empatando
en escaños y la derecha suma más votos separada. En el año 2019 se vuelve a producir ese vuelco en el que el PSOE en elecciones autonómicas pasa por delante del PP y tenía fácil sumar con CIUDADANOS, pero CIUDADANOS decidió aliarse con el PP sumando los 41 escaños exactos que forman la 
mayoría absoluta, pero seis meses despues de esa cita autonómica, el 10 de noviembre de 2019, en elecciones generales, vuelve a retornar y vuelve a ser el PP el que queda el primero. En 2022, el PP solo aventaja al PSOE en 16592 votos, pero se debe a la fortaleza de un VOX que obtiene uno de sus mejores
resultados autonómicos, haciendo que el PP pierda la hegemonía del bloque conservador, porque el PP, a pesar de subir dos escaños con respecto a 2019, pierde un 0,05% de los votos y más de 50000 votos respecto a 2019. En 2026 el bloque de la derecha se ensancha con el aumento de PP y VOX.
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Castilla y León</title>
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