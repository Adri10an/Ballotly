   function abrirVentana(provincia) {

if (provincia === "Cáceres") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Cáceres <span class="escaños">30 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1983: <a href="https://www.datoselecciones.com/extremadura-parlamento-1983/caceres" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 15 Escaños</span> 
                <span style="color: #ADD8E6;">AP-PDP-UL 9 Escaños</span> 
                <span style="color: #33ba38;">EXU 5 Escaños</span> 
                <span style="color: #FF0D00;">PCE 1 Escaño</span> 
                </a>
                <br><br>
                 El PSOE las gana y sumando al PCE sacan dos escaños de ventaja a la suma de AP-PDP-UL y EXU (Fue fundado en 1980 por Pedro Cañada Castillo, fundador de Acción Regional Extremeña, uno de los partidos que se integró en Unión de Centro Democrático al inicio de la Transición y que fue, hasta 1979, senador por la UCD). El PSOE gana a AP-PDP-UL por 41103 votos, AP-PDP-UL gana a EXU por 28004 votos y EXU cuadriplica en votos al PCE.
                <br><br>
                1987: <a href="https://www.datoselecciones.com/extremadura-parlamento-1987/caceres" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                <span style="color: #FF0000;">PSOE 15 Escaños</span>
                <span style="color: #ADD8E6;">AP 8 Escaños</span>
                <span style="color: #33ba38;">EU 4 Escaños</span>
                <span style="color: #006400;">CDS 3 Escaños</span>
                </a>
                <br><br>
                El PSOE las gana empatando en escaños a la suma de AP, EU y CDS. El PSOE gana a AP por 47615 votos, AP dobla a EU en votos y EU gana a CDS por 2673 votos 
                <br><br>
                1991: <a href="https://www.datoselecciones.com/extremadura-parlamento-1991/caceres" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 18 Escaños</span>
                    <span style="color: #0000FF;">PP 10 Escaños</span>  
                    <span style="color: #006400;">CDS 1 Escaño</span>
                <span style="color: #d25644;">IU 1 Escaño</span>
                </a>
                <br><br>
                El PSOE sigue como fuerza más votada y sumando a IU saca ocho escaños de ventaja a la suma de PP y CDS. El PSOE gana al PP por 49635 votos, el PP quintuplica en votos a CDS y CDS gana a IU por tan solo 1596 votos
                <br><br>
                1995: <a href="https://www.datoselecciones.com/extremadura-parlamento-1995/caceres" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 14 Escaño</span>
                <span style="color: #0000FF;">PP 13 Escaños</span> 
                <span style="color: #d25644;">IU-LV-CE 2 Escaños</span>
                <span style="color: #33ba38;">CEX 1 Escaño</span> 
                </a>
                <br><br>
                El PSOE las gana y sumando a IU-LV-CE sacan dos escaños de ventaja a la suma de PP y CEX. El PSOE gana al PP por 5480 votos, el PP quintuplica en votos a IU-LV-CE y IU-LV-CE gana a CEX por 5776 votos
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 29 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1999: <a href="https://www.datoselecciones.com/extremadura-parlamento-1999/caceres" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE-PROGR 15 Escaños</span>
                <span style="color: #0000FF;">PP 13 Escaños</span> 
                <span style="color: #d25644;">IU-CE 1 Escaño</span>
                </a>
                <br><br>
                El PSOE repite como ganador y sumando a IU-C sacan tres escaños de ventaja al PP. El PSOE-PROGR gana al PP por 13928 votos y el PP multiplica por nueve en votos a IU-C
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 30 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                2003: <a href="https://www.datoselecciones.com/extremadura-parlamento-2003/caceres" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE-PROGR 16 Escaños</span>
                <span style="color: #0000FF;">PP 13 Escaños</span> 
                <span style="color: #d25644;">IU-SIEX 1 Escaño</span>
                </a>
                <br><br>
                 El PSOE vuelve a ganar y sumando a IU-SIEX sacan cuatro escaños de ventaja al PP. El PSOE-PROGR gana al PP por 20388 votos y el PP multiplica por siete a IU-SIEX en votos
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/10/10.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 17 Escaños</span>
    <span style="color: #0000FF;">PP 13 Escaños</span> 
</a>
<br><br>
De nuevo, el PSOE vuelve a ganar las elecciones en Cáceres, sacando cuatro escaños de ventaja al PP, al que aventaja en 30107 votos
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 29 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/10/10.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP-EU 15 Escaños</span> 
    <span style="color: #FF0000;">PSOE-REGIONALISTAS 13 Escaños</span>
    <span style="color: #d25644;">IU-V-SIEX 1 Escaño</span>
</a>
<br><br>
PP-EU las gana y saca un escaños de ventaja a la suma de PSOE-REGIONALISTAS y IU-V-SIEX. El PP-EU gana a PSOE-REGIONALISTAS por 16811 votos y PSOE-REGIONALISTAS multiplica por ocho a IU-V-SIEX
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/10/10.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 13 Escaños</span> 
    <span style="color: #FF0000;">PSOE 12 Escaños</span>
    <span style="color: #800080;">PODEMOS 3 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
El PP sigue siendo la fuerza más votada, pero la suma de PSOE y PODEMOS saca un escaño de ventaja a la suma de PP y CIUDADANOS. El PP gana al PSOE por tan solo 328 votos, el PSOE cuadriplica a PODEMOS en votos y PODEMOS gana a CIUDADANOS por 10022 votos
<br><br>

2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/17/12.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 14 Escaños</span>
    <span style="color: #0000FF;">PP 10 Escaños</span> 
    <span style="color: #FF7F00;">CS 3 Escaños</span>
    <span style="color: #800080;">PODEMOS-IU-EXTREMEÑOS-EQUO 2 Escaños</span>
</a>
<br><br>
El PSOE las gana y sumando a PODEMOS-IU-EXTREMEÑOS-EQUO sacan tres escaños de ventaja a la suma de PP y CIUDADANOS.El PSOE gana al PP por 34385 votos, el PP dobla a CIUDADANOS en votos y CIUDADANOS gana a PODEMOS-IU-EXTREMEÑOS-EQUO por 7794 votos
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/10/10/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 13 Escaños</span> 
    <span style="color: #FF0000;">PSOE 12 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
</a>
<br><br>
El PP se convierte en la fuerza más votada y sumando a VOX sacan un escaño de ventaja a la suma de PSOE y PODEMOS. El PP gana al PSOE por 5835 votos, el PSOE cuadriplica en votos a VOX y VOX gana a PODEMOS por 5405 votos
<br><br>
2025: <a href="https://elpais.com/espana/elecciones/autonomicas/10/10/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 13 Escaños</span> 
    <span style="color: #FF0000;">PSOE 8 Escaños</span>
    <span style="color: #008000;">VOX 5 Escaños</span>
    <span style="color: #800080;">PODEMOS 3 Escaños</span>
</a>
<br><br>
El PP gana con rotundidad y sumando a VOX sacan siete escaños a la suma de PSOE y PODEMOS. El PP gana al PSOE por 37405 votos, el PSOE gana a VOX por 17768 votos y VOX gana a PODEMOS por 12548 votos
<br><br>
En conclusión, Cáceres es una provincia autonómicamente de izquierdas, la izquierda siempre ha sacado escaños de ventaja a la derecha menos en 1987 donde se produce un empate entre la izquierda y la derecha, en 2011, 2023 donde la derecha saca un solo escaño de ventaja a la izquierda.
Pero esta vez, en 2025 la derecha sacó siete escaños de ventaja a la izquierda.Comparada con Badajoz es ligeramente menos de izquierdas a esa provincia.

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Cáceres</title>
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
if (provincia === "Badajoz") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Badajoz <span class="escaños">35 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://www.datoselecciones.com/extremadura-parlamento-1983/badajoz" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 20 Escaños</span> 
                <span style="color: #ADD8E6;">AP-PDP-UL 11 Escaños</span> 
                <span style="color: #FF0D00;">PCE 3 Escaños</span>
                <span style="color: #33ba38;">EXU 1 Escaño</span>  
                </a>
                <br><br>
                El PSOE las gana y sumando al PCE sacan once escaños de ventaja a la suma de AP-PDP-UL y EXU. El PSOE gana a AP-PDP-UL por 87230 votos, AP-PDP-UL triplica en votos al PCE y el PCE dobla en votos a EXU
                <br><br>
                1987: <a href="https://www.datoselecciones.com/extremadura-parlamento-1987/badajoz" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                <span style="color: #FF0000;">PSOE 19 Escaños</span>
                <span style="color: #ADD8E6;">AP 9 Escaños</span>
                <span style="color: #006400;">CDS 5 Escaños</span>
                <span style="color: #d25644;">IU 2 Escaños</span>
                </a>
                <br><br>
                El PSOE las vuelve a ganar sacando tres escaños de ventaja a la suma de AP, CDS y EU. El PSOE dobla a AP en votos, AP gana a CDS por 38030 votos y CDS dobla en votos a IU.
                <br><br>
                1991: <a href="https://www.datoselecciones.com/extremadura-parlamento-1991/badajoz" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 21 Escaños</span>
                    <span style="color: #0000FF;">PP 9 Escaños</span>  
                    <span style="color: #d25644;">IU 3 Escaños</span>
                    <span style="color: #006400;">CDS 2 Escaños</span>
                </a>
                <br><br>
                El PSOE sigue como ganador sacando trece escaños de ventaja a la suma de PP y CDS. El PSOE dobla al PP en votos, el PP casi triplica a IU en votos e IU gana a CDS por 9561 votos
                <br><br>
                1995: <a href="https://www.datoselecciones.com/extremadura-parlamento-1995/badajoz" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 17 Escaño</span>
                <span style="color: #0000FF;">PP 14 Escaños</span> 
                <span style="color: #d25644;">IU-LV-CE 4 Escaños</span> 
                </a>
                <br><br>
                El PSOE las gana y sumando a IU-LV-CE sacan siete escaños de ventaja al PP. El PSOE gana al PP por 23966 votos y el PP triplica a IU-LV-CE en votos
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 36 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1999: <a href="https://www.datoselecciones.com/extremadura-parlamento-1999/badajoz" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE-PROGR 19 Escaños</span>
                <span style="color: #0000FF;">PP 15 Escaños</span> 
                <span style="color: #d25644;">IU-CE 2 Escaños</span>
                </a>
                <br><br>
                El PSOE repite como ganador y sumando a IU-CE sacan seis escaños de ventaja al PP. El PSOE-PROGR gana al PP por 40832 votos y el PP quintuplica en votos a IU-CE
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 35 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                2003: <a href="https://www.datoselecciones.com/extremadura-parlamento-2003/badajoz" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE-PROGR 20 Escaños</span>
                <span style="color: #0000FF;">PP 13 Escaños</span> 
                <span style="color: #d25644;">IU-SIEX 2 Escaños</span>
                </a>
                <br><br>
                El PSOE-PROGR las gana y sumando a IU-SIEX sacan nueve escaños de ventaja al PP. El PSOE-PROGR gana al PP por 65326 votos y el PP quintuplica en votos a IU-SIEX
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/10/06.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 21 Escaños</span>
    <span style="color: #0000FF;">PP 14 Escaños</span> 
</a>
<br><br>
De nuevo, el PSOE vuelve a ganar las elecciones en Badajoz, sacando siete escaños de ventaja al PP, al que aventaja en 64843 votos
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 36 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/10/06.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP-EU 17 Escaños</span> 
    <span style="color: #FF0000;">PSOE-REGIONALISTAS 17 Escaños</span>
    <span style="color: #d25644;">IU-V-SIEX 2 Escaños</span>
</a>
<br><br>
PP-EU las gana, pero la suma de PSOE-REGIONALISTAS e IU-V-SIEX le saca dos escaños de ventaja. El PP-EU gana al PSOE-REGIONALISTAS por tan solo 1119 votos y PSOE-REGIONALISTAS multiplica por siete a IU-V-SIEX en votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/10/06.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 18 Escaños</span>
    <span style="color: #0000FF;">PP 15 Escaños</span>
    <span style="color: #800080;">PODEMOS 3 Escaños</span>
</a>
<br><br>
El PSOE vuelve a ser la fuerza más votada y sumando a PODEMOS sacan seis escaños de ventaja al PP. El PSOE gana al PP por 28890 votos y el PP quintuplica en votos a PODEMOS
<br><br>

2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/10/06.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 20 Escaños</span>
    <span style="color: #0000FF;">PP 10 Escaños</span> 
    <span style="color: #FF7F00;">CS 4 Escaños</span>
    <span style="color: #800080;">PODEMOS-IU-EXTREMEÑOS-EQUO 2 Escaños</span>
</a>
<br><br>
El PSOE las vuelve a ganar y sumando a PODEMOS-IU-EXTREMEÑOS-EQUO sacan ocho escaños de ventaja a la suma de PP y CIUDADANOS. El PSOE gana al PP por 83589 votos, el PP dobla a CIUDADANOS en votos y CIUDADANOS gana a PODEMOS-IU-EXTREMEÑOS-EQUO por 16330 votos
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/10/06/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 16 Escaños</span>
    <span style="color: #0000FF;">PP 15 Escaños</span> 
    <span style="color: #008000;">VOX 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
</a>
<br><br>
El PSOE continúa como fuerza más votada y sumando a PODEMOS empatan en escaños a la suma de PP y VOX. El PSOE gana al PP por 12259 votos, el PP cuadriplica en votos a VOX y VOX gana a PODEMOS por 7616 votos
<br><br>
2025: <a href="https://elpais.com/espana/elecciones/autonomicas/10/06/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 16 Escaños</span> 
    <span style="color: #FF0000;">PSOE 10 Escaños</span>
    <span style="color: #008000;">VOX 6 Escaños</span>
    <span style="color: #800080;">PODEMOS 4 Escaños</span>
</a>
<br><br>
El PP las gana y sumando a VOX sacan ocho escaños a la suma de PSOE y PODEMOS. El PP gana al PSOE por 54731 votos, el PSOE gana a VOX por 29172 votos y VOX gana a PODEMOS por 22668 votos
<br><br>
En conclusión, Badajoz es una provincia autonómicamente de izquierdas, la izquierda siempre ha sacado varios escaños de ventaja a la derecha. Únicamente en 2023 aunque el PSOE es la fuerza más votada, la suma de la izquierda y la suma de la derecha empatan en escaños.
A pesar de ello en el año 2025 la suma de PP y VOX saca ocho escaños de ventaja a la izquierda.
Es más de izquierdas que Cáceres.

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Badajoz</title>
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
if (provincia === "Extremadura") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Extremadura <span class="escaños">65 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://www.datoselecciones.com/extremadura-parlamento-1983" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 35 Escaños</span> 
                <span style="color: #ADD8E6;">AP-PDP-UL 20 Escaños</span> 
                <span style="color: #33ba38;">EXU 6 Escaños</span> 
                <span style="color: #FF0D00;">PCE 4 Escaños</span> 
                </a>
                <br><br>
                El PSOE gana las primeras elecciones con dos escaños por encima de la mayoría absoluta
                <br><br>
                1987: <a href="https://www.datoselecciones.com/extremadura-parlamento-1987" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                <span style="color: #FF0000;">PSOE 34 Escaños</span>
                <span style="color: #ADD8E6;">AP 17 Escaños</span>
                <span style="color: #006400;">CDS 8 Escaños</span>
                <span style="color: #33ba38;">EU 4 Escaños</span>
                <span style="color: #d25644;">IU 2 Escaños</span>
                </a>
                <br><br>
                El PSOE continua como vencedor sacando un escaño por encima de la mayoría absoluta
                <br><br>
                1991: <a href="https://www.datoselecciones.com/extremadura-parlamento-1991" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 39 Escaños</span>
                    <span style="color: #0000FF;">PP 19 Escaños</span>  
                    <span style="color: #d25644;">IU 4 Escaños</span>
                    <span style="color: #006400;">CDS 3 Escaños</span>
                </a>
                <br><br>
                El PSOE sigue como fuerza más votada sacando seis escaños por encima de la mayoría absoluta
                <br><br>
                1995: <a href="https://www.datoselecciones.com/extremadura-parlamento-1995" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 31 Escaño</span>
                <span style="color: #0000FF;">PP 27 Escaños</span> 
                <span style="color: #d25644;">IU-LV-CE 6 Escaños</span>
                <span style="color: #33ba38;">CEX 1 Escaño</span> 
                </a>
                <br><br>
                El PSOE pierde la mayoría absoluta, pero sumando a IU-LV-CE saca cuatro escaños por encima de la mayoría absoluta. La investidura del PSOE sale adelante con la abstención de IU-LV-CE y CEX
                <br><br>
                1999: <a href="https://www.datoselecciones.com/extremadura-parlamento-1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE-PROGR 34 Escaños</span>
                <span style="color: #0000FF;">PP 28 Escaños</span> 
                <span style="color: #d25644;">IU-CE 3 Escaños</span>
                </a>
                <br><br>
                El PSOE-PROGR las gana sacando un escaño por encima de la mayoría absoluta
                <br><br>
                2003: <a href="https://www.datoselecciones.com/extremadura-parlamento-2003" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE-PROGR 36 Escaños</span>
                <span style="color: #0000FF;">PP 26 Escaños</span> 
                <span style="color: #d25644;">IU-SIEX 3 Escaños</span>
                </a>
                <br><br>
                El PSOE-PROGR las vuelve a ganar sacando tres escaños por encima de la mayoría absoluta
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/10/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 38 Escaños</span>
    <span style="color: #0000FF;">PP 27 Escaños</span> 
</a>
<br><br>
El PSOE las gana sacando cinco escaños por encima de la mayoría absoluta
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/10/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP-EU 32 Escaños</span> 
    <span style="color: #FF0000;">PSOE-REGIONALISTAS 30 Escaños</span>
    <span style="color: #d25644;">IU-V-SIEX 3 Escaños</span>
</a>
<br><br>
PP-EU las gana por primera vez quedandose a un escaño de la mayoría absoluta, pero aunque PSOE-REGIONALISTAS y IU-V-SIEX si suma mayoría absoluta, IU-V-SIEX decide abstenerse y dar la presidencia al PP.
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/10/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 30 Escaños</span>
    <span style="color: #0000FF;">PP 28 Escaños</span>
    <span style="color: #800080;">PODEMOS 6 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
El PSOE vuelve a ganar y sumando a PODEMOS sacan tres escaños por encima de la mayoría absoluta
<br><br>

2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/10/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 34 Escaños</span>
    <span style="color: #0000FF;">PP 20 Escaños</span> 
    <span style="color: #FF7F00;">CS 7 Escaños</span>
    <span style="color: #800080;">PODEMOS-IU-EXTREMEÑOS-EQUO 4 Escaños</span>
</a>
<br><br>
El PSOE las gana sacando un escaño por encima de la mayoría absoluta
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/2023/10/" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 28 Escaños</span>
    <span style="color: #0000FF;">PP 28 Escaños</span>
    <span style="color: #008000;">VOX 5 Escaños</span>
    <span style="color: #800080;">PODEMOS 4 Escaños</span>
</a>
<br><br>
El PSOE vuelve a ganar las elecciones, pero la suma de PP y VOX alcanza mayoría absoluta tan solo un escaño por encima de la suma de PSOE y PODEMOS 
<br><br>
2025: <a href="https://elpais.com/espana/elecciones/autonomicas/10/" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #0000FF;">PP 29 Escaños</span>
        <span style="color: #FF0000;">PSOE 18 Escaños</span>
    <span style="color: #008000;">VOX 11 Escaños</span>
    <span style="color: #800080;">PODEMOS 7 Escaños</span>
</a>
<br><br>
El PP las gana y sumando a VOX sacan siete escaños por encima de la mayoría absoluta. 
<br><br>
En conclusión, Extremadura es una comunidad autónoma claramente de izquierdas, la izquierda siempre ha sacado victorias amplias a la derecha, la derecha únicamente ha gobernado en 2011 con la abstención histórica de IU. Así lo habían reclamado las bases de la formación y así votó el Consejo Político Regional pese a las presiones de la dirección federal de apoyar un gobierno del PSOE. El escrutinio de la votación secreta y vinculante fue de 28 sufragios pidiendo la abstención y 19 reclamando un apoyo a los socialistas.
En las dos ocasiones que ha habido, 1995 y 2011, PSOE e IU han sido incapaces de poner en marcha un gobierno conjunto de izquierda.Han sido los militantes veteranos de IU los que empujaron la balanza hacia la abstención, recordando lo mal que se habían portado algunos alcaldes del PSOE. IU tenía la espina clavada de 1995.
La otra ocasión en la que ha gobernado la derecha es actualmente tras 2023, aunque gana el PSOE, es la derecha la que suma. En esta ocasión suma de forma natural por primera vez en la historia de la democracia.
Ya en 2025 esta distancia se agranda para la derecha, ya que sacan siete escaños por encima de la mayoría abosluta
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Extremadura</title>
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
function abrirVentanaEscenario2936(provincia) {
    if (provincia === "Cáceres") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Cáceres <span class="escaños">29 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1983: <a href="https://www.datoselecciones.com/extremadura-parlamento-1983/caceres" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 14 Escaños</span> 
                <span style="color: #ADD8E6;">AP-PDP-UL 9 Escaños</span> 
                <span style="color: #33ba38;">EXU 5 Escaños</span> 
                <span style="color: #FF0D00;">PCE 1 Escaño</span> 
                </a>
                <br><br>
                El PSOE pierde un escaño, pero la suma de PSOE y PCE saca un escaño de ventaja a la suma de AP-PDP-UL y EXU
                <br><br>
                1987: <a href="https://www.datoselecciones.com/extremadura-parlamento-1987/caceres" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                <span style="color: #FF0000;">PSOE 14 Escaños</span>
                <span style="color: #ADD8E6;">AP 8 Escaños</span>
                <span style="color: #33ba38;">EU 4 Escaños</span>
                <span style="color: #006400;">CDS 3 Escaños</span>
                </a>
                <br><br>
                El PSOE pierde un escaño, pero la suma de PSOE y EU saca siete escaños de ventaja a la suma de AP y CDS
                <br><br>
                1991: <a href="https://www.datoselecciones.com/extremadura-parlamento-1991/caceres" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 17 Escaños</span>
                    <span style="color: #0000FF;">PP 10 Escaños</span>  
                    <span style="color: #006400;">CDS 1 Escaño</span>
                <span style="color: #d25644;">IU 1 Escaño</span>
                </a>
                <br><br>
                El PSOE pierde un escaño, pero la suma de PSOE e IU saca siete escaños de ventaja a la suma de PP y CDS
                <br><br>
                1995: <a href="https://www.datoselecciones.com/extremadura-parlamento-1995/caceres" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 13 Escaño</span>
                <span style="color: #0000FF;">PP 13 Escaños</span> 
                <span style="color: #d25644;">IU-LV-CE 2 Escaños</span>
                <span style="color: #33ba38;">CEX 1 Escaño</span> 
                </a>
                <br><br>
                El PSOE pierde un escaño, pero la suma de PSOE e IU-LV-CE saca un escaño de ventaja a la suma de PP y CEX
                <br><br>
                1999: <a href="https://www.datoselecciones.com/extremadura-parlamento-1999/caceres" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE-PROGR 15 Escaños</span>
                <span style="color: #0000FF;">PP 13 Escaños</span> 
                <span style="color: #d25644;">IU-CE 1 Escaño</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                2003: <a href="https://www.datoselecciones.com/extremadura-parlamento-2003/caceres" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE-PROGR 15 Escaños</span>
                <span style="color: #0000FF;">PP 13 Escaños</span> 
                <span style="color: #d25644;">IU-SIEX 1 Escaño</span>
                </a>
                <br><br>
                El PSOE pierde un escaño, pero la suma de PSOE-PROGR e IU-SIEX saca tres escaños de ventaja al PP
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/10/10.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 16 Escaños</span>
    <span style="color: #0000FF;">PP 13 Escaños</span> 
</a>
<br><br>
El PSOE pierde un escaño, pero le saca tres escaños de ventaja al PP
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/10/10.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP-EU 15 Escaños</span> 
    <span style="color: #FF0000;">PSOE-REGIONALISTAS 13 Escaños</span>
    <span style="color: #d25644;">IU-V-SIEX 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/10/10.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 13 Escaños</span> 
    <span style="color: #FF0000;">PSOE 12 Escaños</span>
    <span style="color: #800080;">PODEMOS 3 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/17/12.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 14 Escaños</span>
    <span style="color: #0000FF;">PP 10 Escaños</span> 
    <span style="color: #FF7F00;">CS 3 Escaños</span>
    <span style="color: #800080;">PODEMOS-IU-EXTREMEÑOS-EQUO 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/10/10/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 13 Escaños</span> 
    <span style="color: #FF0000;">PSOE 12 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>
2025: <a href="https://elpais.com/espana/elecciones/autonomicas/10/10/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 13 Escaños</span> 
    <span style="color: #FF0000;">PSOE 8 Escaños</span>
    <span style="color: #008000;">VOX 5 Escaños</span>
    <span style="color: #800080;">PODEMOS 3 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Cáceres es una provincia autonómicamente de izquierdas, la izquierda siempre ha sacado escaños de ventaja a la derecha menos en 1987 donde se produce un empate entre la izquierda y la derecha, en 2011, 2023 donde la derecha saca un solo escaño de ventaja a la izquierda.
Pero esta vez, en 2025 la derecha sacó siete escaños de ventaja a la izquierda.Comparada con Badajoz es ligeramente menos de izquierdas a esa provincia.

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Cáceres</title>
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
if (provincia === "Badajoz") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Badajoz <span class="escaños">36 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://www.datoselecciones.com/extremadura-parlamento-1983/badajoz" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 21 Escaños</span> 
                <span style="color: #ADD8E6;">AP-PDP-UL 11 Escaños</span> 
                <span style="color: #FF0D00;">PCE 3 Escaños</span>
                <span style="color: #33ba38;">EXU 1 Escaño</span>  
                </a>
                <br><br>
                El PSOE gana un escaño y sumando al PCE saca doce escaños de ventaja a la suma de AP-PDP-UL y EXU
                <br><br>
                1987: <a href="https://www.datoselecciones.com/extremadura-parlamento-1987/badajoz" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                <span style="color: #FF0000;">PSOE 20 Escaños</span>
                <span style="color: #ADD8E6;">AP 9 Escaños</span>
                <span style="color: #006400;">CDS 5 Escaños</span>
                <span style="color: #d25644;">IU 2 Escaños</span>
                </a>
                <br><br>
                El PSOE gana un escaño y sumando a IU sacan ocho escaños de ventaja a la suma de AP y CDS
                <br><br>
                1991: <a href="https://www.datoselecciones.com/extremadura-parlamento-1991/badajoz" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 22 Escaños</span>
                    <span style="color: #0000FF;">PP 9 Escaños</span>  
                    <span style="color: #d25644;">IU 3 Escaños</span>
                    <span style="color: #006400;">CDS 2 Escaños</span>
                </a>
                <br><br>
                El PSOE gana un escaño y sumando a IU sacan catorce escaños de ventaja a la suma de PP y CDS 
                <br><br>
                1995: <a href="https://www.datoselecciones.com/extremadura-parlamento-1995/badajoz" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 17 Escaño</span>
                <span style="color: #0000FF;">PP 15 Escaños</span> 
                <span style="color: #d25644;">IU-LV-CE 4 Escaños</span> 
                </a>
                <br><br>
                El PP gana un escaño, pero la suma de PSOE e IU-LV-CE saca seis escaños de ventaja al PP
                <br><br>
                1999: <a href="https://www.datoselecciones.com/extremadura-parlamento-1999/badajoz" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE-PROGR 19 Escaños</span>
                <span style="color: #0000FF;">PP 15 Escaños</span> 
                <span style="color: #d25644;">IU-CE 2 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                2003: <a href="https://www.datoselecciones.com/extremadura-parlamento-2003/badajoz" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE-PROGR 20 Escaños</span>
                <span style="color: #0000FF;">PP 14 Escaños</span> 
                <span style="color: #d25644;">IU-SIEX 2 Escaños</span>
                </a>
                <br><br>
                El PP gana un escaño, pero la suma de PSOE-PROGR e IU-SIEX saca ocho escaños de ventaja al PP 
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/10/06.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 21 Escaños</span>
    <span style="color: #0000FF;">PP 15 Escaños</span> 
</a>
<br><br>
El PP gana un escaño, pero el PSOE le saca seis escaños de ventaja
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/10/06.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP-EU 17 Escaños</span> 
    <span style="color: #FF0000;">PSOE-REGIONALISTAS 17 Escaños</span>
    <span style="color: #d25644;">IU-V-SIEX 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/10/06.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 18 Escaños</span>
    <span style="color: #0000FF;">PP 15 Escaños</span>
    <span style="color: #800080;">PODEMOS 3 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/10/06.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 20 Escaños</span>
    <span style="color: #0000FF;">PP 10 Escaños</span> 
    <span style="color: #FF7F00;">CS 4 Escaños</span>
    <span style="color: #800080;">PODEMOS-IU-EXTREMEÑOS-EQUO 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/10/06/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 16 Escaños</span>
    <span style="color: #0000FF;">PP 15 Escaños</span> 
    <span style="color: #008000;">VOX 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>
2025: <a href="https://elpais.com/espana/elecciones/autonomicas/10/06/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 16 Escaños</span> 
    <span style="color: #FF0000;">PSOE 10 Escaños</span>
    <span style="color: #008000;">VOX 6 Escaños</span>
    <span style="color: #800080;">PODEMOS 4 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Badajoz es una provincia autonómicamente de izquierdas, la izquierda siempre ha sacado varios escaños de ventaja a la derecha. Únicamente en 2023 aunque el PSOE es la fuerza más votada, la suma de la izquierda y la suma de la derecha empatan en escaños.
A pesar de ello en el año 2025 la suma de PP y VOX saca ocho escaños de ventaja a la izquierda.
Es más de izquierdas que Cáceres.

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Badajoz</title>
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
if (provincia === "Extremadura") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Extremadura <span class="escaños">65 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://www.datoselecciones.com/extremadura-parlamento-1983" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 35 Escaños</span> 
                <span style="color: #ADD8E6;">AP-PDP-UL 20 Escaños</span> 
                <span style="color: #33ba38;">EXU 6 Escaños</span> 
                <span style="color: #FF0D00;">PCE 4 Escaños</span> 
                </a>
                <br><br>
                IGUAL
                <br><br>
                1987: <a href="https://www.datoselecciones.com/extremadura-parlamento-1987" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                <span style="color: #FF0000;">PSOE 34 Escaños</span>
                <span style="color: #ADD8E6;">AP 17 Escaños</span>
                <span style="color: #006400;">CDS 8 Escaños</span>
                <span style="color: #33ba38;">EU 4 Escaños</span>
                <span style="color: #d25644;">IU 2 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1991: <a href="https://www.datoselecciones.com/extremadura-parlamento-1991" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 39 Escaños</span>
                    <span style="color: #0000FF;">PP 19 Escaños</span>  
                    <span style="color: #d25644;">IU 4 Escaños</span>
                    <span style="color: #006400;">CDS 3 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1995: <a href="https://www.datoselecciones.com/extremadura-parlamento-1995" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 30 Escaño</span>
                <span style="color: #0000FF;">PP 28 Escaños</span> 
                <span style="color: #d25644;">IU-LV-CE 6 Escaños</span>
                <span style="color: #33ba38;">CEX 1 Escaño</span> 
                </a>
                <br><br>
                La suma de PSOE e IU-LV-CE saca tres escaños por encima de la mayoría absolura
                <br><br>
                1999: <a href="https://www.datoselecciones.com/extremadura-parlamento-1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE-PROGR 34 Escaños</span>
                <span style="color: #0000FF;">PP 28 Escaños</span> 
                <span style="color: #d25644;">IU-CE 3 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                2003: <a href="https://www.datoselecciones.com/extremadura-parlamento-2003" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE-PROGR 35 Escaños</span>
                <span style="color: #0000FF;">PP 27 Escaños</span> 
                <span style="color: #d25644;">IU-SIEX 3 Escaños</span>
                </a>
                <br><br>
                El PSOE saca dos escaños por encima de la mayoría absoluta
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/10/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 37 Escaños</span>
    <span style="color: #0000FF;">PP 28 Escaños</span> 
</a>
<br><br>
El PSOE saca cuatro escaños por encima de la mayoría absoluta
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/10/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP-EU 32 Escaños</span> 
    <span style="color: #FF0000;">PSOE-REGIONALISTAS 30 Escaños</span>
    <span style="color: #d25644;">IU-V-SIEX 3 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/10/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 30 Escaños</span>
    <span style="color: #0000FF;">PP 28 Escaños</span>
    <span style="color: #800080;">PODEMOS 6 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/10/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 34 Escaños</span>
    <span style="color: #0000FF;">PP 20 Escaños</span> 
    <span style="color: #FF7F00;">CS 7 Escaños</span>
    <span style="color: #800080;">PODEMOS-IU-EXTREMEÑOS-EQUO 4 Escaños</span>
</a>
<br><br>E
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/2023/10/" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 28 Escaños</span>
    <span style="color: #0000FF;">PP 28 Escaños</span>
    <span style="color: #008000;">VOX 5 Escaños</span>
    <span style="color: #800080;">PODEMOS 4 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>
2025: <a href="https://elpais.com/espana/elecciones/autonomicas/10/" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #0000FF;">PP 29 Escaños</span>
        <span style="color: #FF0000;">PSOE 18 Escaños</span>
    <span style="color: #008000;">VOX 11 Escaños</span>
    <span style="color: #800080;">PODEMOS 7 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Extremadura es una comunidad autónoma claramente de izquierdas, la izquierda siempre ha sacado victorias amplias a la derecha, la derecha únicamente ha gobernado en 2011 con la abstención histórica de IU. Así lo habían reclamado las bases de la formación y así votó el Consejo Político Regional pese a las presiones de la dirección federal de apoyar un gobierno del PSOE. El escrutinio de la votación secreta y vinculante fue de 28 sufragios pidiendo la abstención y 19 reclamando un apoyo a los socialistas.
En las dos ocasiones que ha habido, 1995 y 2011, PSOE e IU han sido incapaces de poner en marcha un gobierno conjunto de izquierda.Han sido los militantes veteranos de IU los que empujaron la balanza hacia la abstención, recordando lo mal que se habían portado algunos alcaldes del PSOE. IU tenía la espina clavada de 1995.
La otra ocasión en la que ha gobernado la derecha es actualmente tras 2023, aunque gana el PSOE, es la derecha la que suma. En esta ocasión suma de forma natural por primera vez en la historia de la democracia.
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Extremadura</title>
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