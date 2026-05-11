    function abrirVentana(provincia) {

if (provincia === "Occidente") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Asturias Occidente <span class="escaños">8 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1983: <a href="https://www.datoselecciones.com/asturias-parlamento-1983" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 4 Escaños</span> 
                <span style="color: #ADD8E6;">AP-PDP-UL 3 Escaños</span> 
                <span style="color: #FF0D00;">PCE 1 Escaño</span> 
                </a>
                <br><br>
                El PSOE las gana y sumando al PCE sacan dos escaños de ventaja a AP-PDP-UL. El PSOE gana a AP-PDP-UL por 4203 votos y AP-PDP-UL triplica en votos al PCE
                <br><br>
                1987: <a href="https://www.datoselecciones.com/asturias-parlamento-1987" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                <span style="color: #FF0000;">PSOE 4 Escaños</span>
                <span style="color: #ADD8E6;">AP 3 Escaños</span>
                <span style="color: #006400;">CDS 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana empatando en escaños a la suma de AP y CDS. El PSOE gana a AP por 14678 votos y AP dobla a CDS en votos
                <br><br>
                1991: <a href="https://www.datoselecciones.com/asturias-parlamento-1991" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 5 Escaños</span>
                    <span style="color: #0000FF;">PP 3 Escaños</span>  
                </a>
                <br><br>
                El PSOE las gana sacando dos escaños de ventaja al PP al que aventaja en 13686 votos
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 7 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1995: <a href="https://www.datoselecciones.com/asturias-parlamento-1995" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 4 Escaño</span>
                <span style="color: #0000FF;">PP 3 Escaños</span> 
                </a>
                <br><br>
                El PSOE las gana sacando un escaño de ventaja al PP al que aventaja en 2372 votos
                <br><br>
                1999: <a href="https://www.datoselecciones.com/asturias-parlamento-1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 4 Escaños</span>
                <span style="color: #0000FF;">PP 2 Escaños</span> 
                <span style="color: #49bae9;">URAS 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana sacando un escaño de ventaja a la suma de PP y URAS (Partido de centroderecha, que fue fundado el 2 de diciembre de 1998 por el entorno de Sergio Marqués cuando era presidente del Principado de Asturias, como consecuencia de las diferencias de criterio del que por entonces era su partido, el Partido Popular asturiano. Debido a ello gobernó en minoría hasta el fin de su legislatura en 1999​) El PSOE gana al PP por 10375 votos y el PP dobla a URAS en votos
                <br><br>
                2003: <a href="https://www.datoselecciones.com/asturias-parlamento-2003" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 4 Escaños</span>
                <span style="color: #0000FF;">PP 3 Escaños</span> 
                </a>
                <br><br>
                El PSOE las gana sacando un escaño de ventaja al PP al que aventaja en 10513 votos
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 6 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/03/3303.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span> 
</a>
<br><br>
El PSOE las gana empatando en escaños al PP al que aventaja en 9662 votos
<br><br>

2011: <a href="https://es.wikipedia.org/wiki/Elecciones_a_la_Junta_General_del_Principado_de_Asturias_de_2011" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #014586;">FA 2 Escaños</span>
</a>
<br><br>
El PSOE las gana, pero la suma de PP y FA le dobla en escaños. El PSOE gana al PP por 8662 votos y el PP gana a FA por tan solo 353 votos
<br><br>
2012: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/03/3303.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #014586;">FA 2 Escaños</span>
</a>
<br><br>
El PSOE las vuelve a ganar, pero la suma de PP y FA le dobla en escaños. El PSOE gana al PP por 5188 votos y el PP gana a FA por tan solo 1303 votos
<br><br>
2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/03/3303.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
</a>
<br><br>
El PSOE las gana y sumando el escaño de PODEMOS doblan en escaños al PP. El PSOE gana al PP por 5573 votos y el PP gana a PODEMOS por 7754 votos
<br><br>

2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/03/3303.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
</a>
<br><br>
El PSOE las gana doblando en escaños al PP, al que aventaja en 10176 votos
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/03/03/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span> 
</a>
<br><br>
El PSOE las gana empatando en escaños al PP, al que aventaja en 1246 votos
<br><br>
En conclusión, Asturias Occidente es claramente de izquierdas, normalmente la izquierda suele sacar escaños de ventaja a la derecha. Unicamente la suma de la derecha a conseguido doblar al PSOE en los años 2011 y 2012 que fueron las dos únicas legislaturas con representación de Foro Asturias en esta circunscripción y la derecha solo ha marcado empates con la izquierda en
1987,2007 y 2023

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Asturias Occidente</title>
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
if (provincia === "Centro") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Asturias Centro <span class="escaños">32 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://www.datoselecciones.com/asturias-parlamento-1983" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 19 Escaños</span> 
                <span style="color: #ADD8E6;">AP-PDP-UL 9 Escaños</span> 
                <span style="color: #FF0D00;">PCE 4 Escaños</span> 
                </a>
                <br><br>
                El PSOE las gana y sumando al PCE sacan catorce escaños de ventaja a AP-PDP-UL. El PSOE gana a AP-PDP-UL por 117747 votos y AP-PDP-UL dobla en votos al PCE
                <br><br>
                1987: <a href="https://www.datoselecciones.com/asturias-parlamento-1987" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                <span style="color: #FF0000;">PSOE 13 Escaños</span>
                <span style="color: #ADD8E6;">AP 8 Escaños</span>
                <span style="color: #006400;">CDS 7 Escaños</span>
                <span style="color: #d25644;">IU 4 Escaños</span> 
                </a>
                <br><br>
                El PSOE las gana y sumando a IU sacan dos escaños de ventaja a la suma de AP y CDS. El PSOE gana a AP por 59076 votos, AP gana a CDS por 16445 votos y CDS gana a IU por 28059 votos 
                <br><br>
                1991: <a href="https://www.datoselecciones.com/asturias-parlamento-1991" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 13 Escaños</span>
                    <span style="color: #0000FF;">PP 10 Escaños</span>  
                    <span style="color: #d25644;">IU 6 Escaños</span>
                    <span style="color: #006400;">CDS 2 Escaños</span>
                    <span style="color: #7f9662;">PAS-UNA 1 Escaño</span>

                </a>
                <br><br>
                El PSOE las gana y sumando a IU y PAS-UNA (fue una coalición electoral de centroizquierda entre los partidos políticos de Asturias (España) Unidá Nacionalista Asturiana (UNA) y Partíu Asturianista (PAS) sacan ocho escaños de ventaja a la suma de PP y CDS. El PSOE gana al PP por 39397 votos, el PP gana a IU por 49957 votos, IU dobla a CDS en votos y CDS dobla a PAS-UNA en votos
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 33 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1995: <a href="https://www.datoselecciones.com/asturias-parlamento-1995" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 15 Escaños</span>
                    <span style="color: #FF0000;">PSOE 11 Escaño</span> 
                    <span style="color: #d25644;">IU 6 Escaños</span>
                    <span style="color: #7f9662;">PAS 1 Escaño</span>
                </a>
                <br><br>
                El PP las gana, pero la suma de PSOE, IU y PAS le saca tres escaños de ventaja. El PP gana al PSOE por 54574 votos, el PSOE gana a IU por 65308 votos e IU quintuplica en votos a PAS 
                <br><br>
                1999: <a href="https://www.datoselecciones.com/asturias-parlamento-1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 17 Escaño</span> 
                    <span style="color: #0000FF;">PP 11 Escaños</span>
                    <span style="color: #d25644;">IU 3 Escaños</span>
                    <span style="color: #49bae9;">URAS 2 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a IU sacan ocho escaños de ventaja a la suma de PP y URAS. El PSOE gana al PP por 70770 votos, el PP triplica a IU en votos e IU gana a URAS por 21183 votos 
                <br><br>
                2003: <a href="https://www.datoselecciones.com/asturias-parlamento-2003" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 15 Escaño</span> 
                    <span style="color: #0000FF;">PP 14 Escaños</span>
                    <span style="color: #d25644;">IU 4 Escaños</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a IU sacan cinco escaños de ventaja al PP. El PSOE gana al PP por tan solo 1684 votos y el PP triplica a IU en votos
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 34 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/03/3302.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 15 Escaños</span>
                    <span style="color: #FF0000;">PSOE 15 Escaño</span> 
                    <span style="color: #d25644;">IU 4 Escaños</span>
</a>
<br><br>
El PP las gana, pero la suma de PSOE e IU le saca cuatro escaños de ventaja. El PP gana al PSOE por 8579 votos y el PSOE triplica a IU en votos
<br><br>

2011: <a href="https://es.wikipedia.org/wiki/Elecciones_a_la_Junta_General_del_Principado_de_Asturias_de_2011" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #014586;">FA 12 Escaños</span>
    <span style="color: #FF0000;">PSOE 11 Escaños</span>
    <span style="color: #0000FF;">PP 7 Escaños</span> 
    <span style="color: #d25644;">IU 4 Escaños</span>
</a>
<br><br>
FA las gana y sumando al PP sacan cinco escaños de ventaja a la suma de PSOE e IU. FA gana al PSOE por 8375 votos, el PSOE gana al PP por 44224 votos y el PP gana a IU por 38034 votos
<br><br>
2012: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/03/3302.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 12 Escaños</span> 
    <span style="color: #014586;">FA 9 Escaños</span>
    <span style="color: #0000FF;">PP 7 Escaños</span>
    <span style="color: #d25644;">IU-IX 5 Escaños</span>
    <span style="color: #d7257d;">UPyD 1 Escaño</span>
</a>
<br><br>
El PSOE las gana y sumando a IU-IX empatan en escaños a la suma de FA, PP y UPyD. El PSOE gana a FA por 26800 votos, FA gana al PP por 16257 votos, el PP gana a IU-IX por 22746 votos e IU-IX triplica en votos a UPyD
<br><br>
2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/03/3302.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 9 Escaños</span>
    <span style="color: #0000FF;">PP 7 Escaños</span> 
    <span style="color: #800080;">PODEMOS 7 Escaños</span>
    <span style="color: #d25644;">IU-IX 5 Escaños</span>
    <span style="color: #FF7F00;">CS 3 Escaños</span>
    <span style="color: #014586;">FA 3 Escaños</span>
</a>
<br><br>
El PSOE las gana y sumando a PODEMOS e IU-IX sacan ocho escaños de ventaja a la suma de PP, CIUDADANOS y FA. El PSOE gana al PP por 18510 votos, el PP gana a PODEMOS por tan solo 401 votos, PODEMOS gana a IU-IX por 31704 votos, IU-IX gana a CIUDADANOS por 23339 votos y CIUDADANOS gana a FA por tan solo 716 votos
<br><br>

2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/03/3302.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 13 Escaños</span>
    <span style="color: #0000FF;">PP 6 Escaños</span> 
    <span style="color: #FF7F00;">CS 5 Escaños</span>
    <span style="color: #800080;">PODEMOS 4 Escaños</span>
    <span style="color: #d25644;">IU 2 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span> 
    <span style="color: #014586;">FA 2 Escaños</span>
</a>
<br><br>
El PSOE las gana y sumando a PODEMOS e IU sacan cuatro escaños de ventaja a la suma de PP, CIUDADANOS, VOX y FA. El PSOE dobla al PP en votos, el PP gana a CIUDADANOS por 4976 votos, CIUDADANOS gana a PODEMOS por 13374 votos, PODEMOS gana a IU por 20113 votos, IU gana a VOX por tan solo 1348 votos y VOX gana a FA por tan solo 1479 votos
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/03/02/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 13 Escaños</span>
    <span style="color: #0000FF;">PP 12 Escaños</span> 
    <span style="color: #008000;">VOX 4 Escaños</span> 
    <span style="color: #d25644;">IU 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #014586;">FA 1 Escaño</span>
</a>
<br><br>
El PSOE las gana y sumando a IU y PODEMOS empatan en escaños a la suma de PP, VOX y FA. El PSOE gana al PP por 18840 votos, el PP casi triplica a VOX en votos, VOX gana a IU por 10864 votos, IU gana a PODEMOS por 16651 votos y PODEMOS gana a FA por 4915 votos
<br><br>
En conclusión, Asturias Centro es claramente de izquierdas siendo únicamente ganada por la suma de la derecha en 2011 y 2012 y únicamente se ha producido un empate a escaños entre izquierda y derecha en las elecciones de 2023, aunque es la izquierda la que tiene ventaja en la suma de votos
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Asturias Centro</title>
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
if (provincia === "Oriente") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Asturias Oriente <span class="escaños">5 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://www.datoselecciones.com/asturias-parlamento-1983" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                <span style="color: #ADD8E6;">AP-PDP-UL 2 Escaños</span>  
                </a>
                <br><br>
                El PSOE las gana sacando un escaño de ventaja a AP-PDP-UL al que aventaja por tan solo 686 votos
                <br><br>
                1987: <a href="https://www.datoselecciones.com/asturias-parlamento-1987" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                <span style="color: #FF0000;">PSOE 3 Escaños</span>
                <span style="color: #ADD8E6;">AP 2 Escaños</span>
                </a>
                <br><br>
                El PSOE las vuelve a ganar sacando un escaño de ventaja a AP al que aventaja en 4153 votos
                <br><br>
                1991: <a href="https://www.datoselecciones.com/asturias-parlamento-1991" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 3 Escaños</span>
                    <span style="color: #0000FF;">PP 2 Escaños</span>  
                </a>
                <br><br>
                El PSOE las gana sacando un escaño de ventaja al PP al que aventaja en 3457 votos
                <br><br>
                1995: <a href="https://www.datoselecciones.com/asturias-parlamento-1995" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 3 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 2 Escaño</span>
                </a>
                <br><br>
                El PP las gana sacando un escaño de ventaja al PSOE al que aventaja por tan solo 766 votos
                <br><br>
                1999: <a href="https://www.datoselecciones.com/asturias-parlamento-1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 3 Escaños</span>
                <span style="color: #0000FF;">PP 2 Escaños</span> 
                </a>
                <br><br>
                El PSOE las gana sacando un escaño de ventaja al PP al que aventaja en 3663 votos
                <br><br>
                2003: <a href="https://www.datoselecciones.com/asturias-parlamento-2003" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 3 Escaños</span>
                <span style="color: #0000FF;">PP 2 Escaños</span> 
                </a>
                <br><br>
                El PSOE las gana sacando un escaño de ventaja al PP al que aventaja por tan solo 392 votos
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/03/3301.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
</a>
<br><br>
El PSOE las gana sacando un escaño de ventaja al PP al que aventaja en 2211 votos
<br><br>

2011: <a href="https://es.wikipedia.org/wiki/Elecciones_a_la_Junta_General_del_Principado_de_Asturias_de_2011" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #014586;">FA 2 Escaños</span>
    <span style="color: #0000FF;">PP 1 Escaño</span> 
</a>
<br><br>
El PSOE las gana, pero la suma de FA y PP le saca un escaño de ventaja. El PSOE gana a FA por tan solo 948 votos y FA gana al PP por 6018 votos
<br><br>
2012: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/03/3301.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #014586;">FA 2 Escaños</span>
    <span style="color: #0000FF;">PP 1 Escaño</span> 
</a>
<br><br>
El PSOE las vuelve a ganar, pero de nuevo la suma de FA y PP le saca un escaño de ventaja. El PSOE gana a FA por 2541 votos y FA gana al PP por tan solo 1549 votos
<br><br>
2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/03/3301.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
</a>
<br><br>
El PSOE las gana y sumando a PODEMOS sacan un escaño de ventaja al PP. El PSOE gana al PP por 2449 votos y el PP dobla a PODEMOS en votos
<br><br>

2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/03/3301.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
</a>
<br><br>
El PSOE las gana sacando un escaño de ventaja al PP al que aventaja en 7252 votos
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/03/01/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
</a>
<br><br>
El PSOE las gana sacando un escaño de ventaja al PP al que aventaja por tan solo 782 votos
<br><br>
En conclusión, Asturias Oriente es claramente de izquierdas, el PSOE ha sumado más escaños que la derecha siempre menos en 1995 con el PP con muy poca ventaja sobre el PSOE y en 2011 y 2012 cuando la suma de FA y el PP supera al PSOE. A pesar de su pequeño tamaño PODEMOS entró en el 2015 con el ciclo 15M.
A pesar de ello suele estar muy disputada excepto en el 2015 ya mencionado y en el 2019 con la división de la derecha en tres partidos. En 1983, 1995, 2003 y 2023 el último escaño se ha jugado por menos de 800 votos
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Asturias Oriente</title>
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
if (provincia === "Asturias") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Asturias <span class="escaños">45 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://www.datoselecciones.com/asturias-parlamento-1983" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 26 Escaños</span> 
                <span style="color: #ADD8E6;">AP-PDP-UL 14 Escaños</span> 
                <span style="color: #FF0D00;">PCE 5 Escaños</span> 
                </a>
                <br><br>
                El PSOE las gana sacando tres escaños por encima de la mayoría absoluta
                <br><br>
                1987: <a href="https://www.datoselecciones.com/asturias-parlamento-1987" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                <span style="color: #FF0000;">PSOE 20 Escaños</span>
                <span style="color: #ADD8E6;">AP 13 Escaños</span>
                <span style="color: #006400;">CDS 8 Escaños</span>
                <span style="color: #d25644;">IU 4 Escaños</span> 
                </a>
                <br><br>
                El PSOE las gana y sumando a IU sacan un escaño por encima de la mayoría absoluta
                <br><br>
                1991: <a href="https://www.datoselecciones.com/asturias-parlamento-1991" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 21 Escaños</span>
                    <span style="color: #0000FF;">PP 15 Escaños</span>  
                    <span style="color: #d25644;">IU 6 Escaños</span>
                    <span style="color: #006400;">CDS 2 Escaños</span>
                    <span style="color: #7f9662;">PAS-UNA 1 Escaño</span>

                </a>
                <br><br>
                El PSOE las gana y sumando a IU sacan cuatro escaños por encima de la mayoría absoluta
                <br><br>
                1995: <a href="https://www.datoselecciones.com/asturias-parlamento-1995" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 21 Escaños</span>
                    <span style="color: #FF0000;">PSOE 17 Escaño</span> 
                    <span style="color: #d25644;">IU 6 Escaños</span>
                    <span style="color: #7f9662;">PAS 1 Escaño</span>
                </a>
                <br><br>
                Aunque PSOE e IU suman mayoría absoluta exacta, IU decidió no investir al PSOE lo que dio lugar al gobierno en minoria del PP
                <br><br>
                1999: <a href="https://www.datoselecciones.com/asturias-parlamento-1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 24 Escaño</span> 
                    <span style="color: #0000FF;">PP 15 Escaños</span>
                    <span style="color: #d25644;">IU 3 Escaños</span>
                    <span style="color: #49bae9;">URAS 3 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana sacando un escaño por encima de la mayoría absoluta
                <br><br>
                2003: <a href="https://www.datoselecciones.com/asturias-parlamento-2003#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 22 Escaño</span> 
                    <span style="color: #0000FF;">PP 19 Escaños</span>
                    <span style="color: #d25644;">IU 4 Escaños</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a IU sacan tres escaños por encima de la mayoría absoluta
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/03/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 21 Escaño</span> 
                    <span style="color: #0000FF;">PP 20 Escaños</span>
                    <span style="color: #d25644;">IU 4 Escaños</span>
</a>
<br><br>
El PSOE las gana y sumando a IU sacan dos escaños por encima de la mayoría absoluta
<br><br>

2011: <a href="https://es.wikipedia.org/wiki/Elecciones_a_la_Junta_General_del_Principado_de_Asturias_de_2011" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #014586;">FA 16 Escaños</span>
    <span style="color: #FF0000;">PSOE 15 Escaños</span>
    <span style="color: #0000FF;">PP 10 Escaños</span> 
    <span style="color: #d25644;">IU 4 Escaños</span>
</a>
<br><br>
FA las gana y sumando al PP sacan tres escaños por encima de la mayoría absoluta
<br><br>
2012: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/03/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 17 Escaños</span> 
    <span style="color: #014586;">FA 12 Escaños</span>
    <span style="color: #0000FF;">PP 10 Escaños</span>
    <span style="color: #d25644;">IU-IX 5 Escaños</span>
    <span style="color: #d7257d;">UPyD 1 Escaño</span>
</a>
<br><br>
El PSOE las gana y sumando a IU-IX y UPyD sacan la mayoría absoluta exacta
<br><br>
2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/03/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 14 Escaños</span>
    <span style="color: #0000FF;">PP 11 Escaños</span> 
    <span style="color: #800080;">PODEMOS 9 Escaños</span>
    <span style="color: #d25644;">IU-IX 5 Escaños</span>
    <span style="color: #FF7F00;">CS 3 Escaños</span>
    <span style="color: #014586;">FA 3 Escaños</span>
</a>
<br><br>
El PSOE las gana y sumando a PODEMOS sacan la mayoría absoluta exacta
<br><br>

2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/03/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 20 Escaños</span>
    <span style="color: #0000FF;">PP 10 Escaños</span> 
    <span style="color: #FF7F00;">CS 5 Escaños</span>
    <span style="color: #800080;">PODEMOS 4 Escaños</span>
    <span style="color: #d25644;">IU 2 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span> 
    <span style="color: #014586;">FA 2 Escaños</span>
</a>
<br><br>
El PSOE las gana y sumando a PODEMOS sacan un escaño por encima de la mayoría absoluta
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/03/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 19 Escaños</span>
    <span style="color: #0000FF;">PP 17 Escaños</span> 
    <span style="color: #008000;">VOX 4 Escaños</span> 
    <span style="color: #d25644;">IU 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #014586;">FA 1 Escaño</span>
</a>
<br><br>
El PSOE las gana y sumando a IU y PODEMOS sacan la mayoría absoluta exacta
<br><br>
En conclusión, Asturias es una comunidad autónoma claramente de izquierdas, aunque el PSOE solo ha obtenido mayorías absolutas en 1983 y 1999 ha podido pactar a su izquierdas en todas las elecciones menos en 1995 por la falta de acuerdo con Izquierda Unida que se dio en España y en 2011 por la victoria de FA en escaños que sumaba con el PP, aunque cabe resaltar, que la fuerza
más votada en este año fue el PSOE. Actualmente a pesar de todo ello, la izquierda conserva su gobierno por 782 votos, siendo la circunscripción impar de Oriente decisiva.

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Asturias</title>
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
function abrirVentanaEscenario6345(provincia) {
    if (provincia === "Occidente") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Asturias Occidente <span class="escaños">6 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://www.datoselecciones.com/asturias-parlamento-1983" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                <span style="color: #ADD8E6;">AP-PDP-UL 3 Escaños</span> 
                </a>
                <br><br>
                El PSOE empata en escaños con AP-PDP-UL
                <br><br>
                1987: <a href="https://www.datoselecciones.com/asturias-parlamento-1987" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                <span style="color: #FF0000;">PSOE 3 Escaños</span>
                <span style="color: #ADD8E6;">AP 2 Escaños</span>
                <span style="color: #006400;">CDS 1 Escaño</span>
                </a>
                <br><br>
                El PSOE empata en escaños a la suma de AP y CDS
                <br><br>
                1991: <a href="https://www.datoselecciones.com/asturias-parlamento-1991" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 4 Escaños</span>
                    <span style="color: #0000FF;">PP 2 Escaños</span>  
                </a>
                <br><br>
                El PSOE dobla en escaños al PP
                <br><br>
                1995: <a href="https://www.datoselecciones.com/asturias-parlamento-1995" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 3 Escaño</span>
                <span style="color: #0000FF;">PP 3 Escaños</span> 
                </a>
                <br><br>
                El PSOE empata en escaños con el PP
                <br><br>
                1999: <a href="https://www.datoselecciones.com/asturias-parlamento-1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 3 Escaños</span>
                <span style="color: #0000FF;">PP 2 Escaños</span> 
                <span style="color: #49bae9;">URAS 1 Escaño</span>
                </a>
                <br><br>
                El PSOE empata en escaños a la suma de PP y URAS. 
                <br><br>
                2003: <a href="https://www.datoselecciones.com/asturias-parlamento-2003" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 4 Escaños</span>
                <span style="color: #0000FF;">PP 2 Escaños</span> 
                </a>
                <br><br>
                El PSOE dobla al PP en escaños
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/03/3303.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span> 
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://es.wikipedia.org/wiki/Elecciones_a_la_Junta_General_del_Principado_de_Asturias_de_2011" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #014586;">FA 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>
2012: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/03/3303.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #014586;">FA 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>
2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/03/3303.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/03/3303.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/03/03/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span> 
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Asturias Occidente es claramente de izquierdas, normalmente la izquierda suele sacar escaños de ventaja a la derecha. Unicamente la suma de la derecha a conseguido doblar al PSOE en los años 2011 y 2012 que fueron las dos únicas legislaturas con representación de Foro Asturias en esta circunscripción y la derecha solo ha marcado empates con la izquierda en
1987,2007 y 2023


            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Asturias Occidente</title>
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
if (provincia === "Centro") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Asturias Centro <span class="escaños">34 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://www.datoselecciones.com/asturias-parlamento-1983" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 20 Escaños</span> 
                <span style="color: #ADD8E6;">AP-PDP-UL 10 Escaños</span> 
                <span style="color: #FF0D00;">PCE 4 Escaños</span> 
                </a>
                <br><br>
                PSOE y AP-PDP-UL suben un escaño por lo que la suma de PSOE y el PCE saca catorce escaños de ventaja a AP-PDP-UL
                <br><br>
                1987: <a href="https://www.datoselecciones.com/asturias-parlamento-1987" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                <span style="color: #FF0000;">PSOE 14 Escaños</span>
                <span style="color: #ADD8E6;">AP 8 Escaños</span>
                <span style="color: #006400;">CDS 7 Escaños</span>
                <span style="color: #d25644;">IU 5 Escaños</span> 
                </a>
                <br><br>
                PSOE e IU suben un escaño por lo que la suma de PSOE e IU saca cuatro escaños de ventaja a la suma de AP y CDS
                <br><br>
                1991: <a href="https://www.datoselecciones.com/asturias-parlamento-1991" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 14 Escaños</span>
                    <span style="color: #0000FF;">PP 11 Escaños</span>  
                    <span style="color: #d25644;">IU 6 Escaños</span>
                    <span style="color: #006400;">CDS 2 Escaños</span>
                    <span style="color: #7f9662;">PAS-UNA 1 Escaño</span>

                </a>
                <br><br>
                PSOE y PP suben un escaño por lo que la suma de PSOE, IU y PAS-UNA saca ocho escaños de ventaja a la suma de PP y CDS
                <br><br>
                1995: <a href="https://www.datoselecciones.com/asturias-parlamento-1995" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 15 Escaños</span>
                    <span style="color: #FF0000;">PSOE 11 Escaño</span> 
                    <span style="color: #d25644;">IU 7 Escaños</span>
                    <span style="color: #7f9662;">PAS 1 Escaño</span>
                </a>
                <br><br>
                IU sube un escaño por lo que la suma de PSOE, IU y PAS sacan cuatro escaños de ventaja al PP 
                <br><br>
                1999: <a href="https://www.datoselecciones.com/asturias-parlamento-1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 17 Escaño</span> 
                    <span style="color: #0000FF;">PP 12 Escaños</span>
                    <span style="color: #d25644;">IU 3 Escaños</span>
                    <span style="color: #49bae9;">URAS 2 Escaño</span>
                </a>
                <br><br>
                El PP sube un escaño por lo que la suma de PSOE e IU saca seis escaños de ventaja a la suma de PP y URAS
                <br><br>
                2003: <a href="https://www.datoselecciones.com/asturias-parlamento-2003" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 15 Escaño</span> 
                    <span style="color: #0000FF;">PP 15 Escaños</span>
                    <span style="color: #d25644;">IU 4 Escaños</span>
                </a>
                <br><br>
                El PP sube un escaño por lo que la suma de PSOE e IU saca cuatro escaños de ventaja al PP
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/03/3302.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 15 Escaños</span>
                    <span style="color: #FF0000;">PSOE 15 Escaño</span> 
                    <span style="color: #d25644;">IU 4 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://es.wikipedia.org/wiki/Elecciones_a_la_Junta_General_del_Principado_de_Asturias_de_2011" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #014586;">FA 12 Escaños</span>
    <span style="color: #FF0000;">PSOE 11 Escaños</span>
    <span style="color: #0000FF;">PP 7 Escaños</span> 
    <span style="color: #d25644;">IU 4 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>
2012: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/03/3302.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 12 Escaños</span> 
    <span style="color: #014586;">FA 9 Escaños</span>
    <span style="color: #0000FF;">PP 7 Escaños</span>
    <span style="color: #d25644;">IU-IX 5 Escaños</span>
    <span style="color: #d7257d;">UPyD 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>
2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/03/3302.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 9 Escaños</span>
    <span style="color: #0000FF;">PP 7 Escaños</span> 
    <span style="color: #800080;">PODEMOS 7 Escaños</span>
    <span style="color: #d25644;">IU-IX 5 Escaños</span>
    <span style="color: #FF7F00;">CS 3 Escaños</span>
    <span style="color: #014586;">FA 3 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/03/3302.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 13 Escaños</span>
    <span style="color: #0000FF;">PP 6 Escaños</span> 
    <span style="color: #FF7F00;">CS 5 Escaños</span>
    <span style="color: #800080;">PODEMOS 4 Escaños</span>
    <span style="color: #d25644;">IU 2 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span> 
    <span style="color: #014586;">FA 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/03/02/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 13 Escaños</span>
    <span style="color: #0000FF;">PP 12 Escaños</span> 
    <span style="color: #008000;">VOX 4 Escaños</span> 
    <span style="color: #d25644;">IU 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #014586;">FA 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Asturias Centro es claramente de izquierdas siendo únicamente ganada por la suma de la derecha en 2011 y 2012 y únicamente se ha producido un empate a escaños entre izquierda y derecha en las elecciones de 2023, aunque es la izquierda la que tiene ventaja en la suma de votos
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Asturias Centro</title>
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
if (provincia === "Oriente") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Asturias Oriente <span class="escaños">5 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://www.datoselecciones.com/asturias-parlamento-1983" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                <span style="color: #ADD8E6;">AP-PDP-UL 2 Escaños</span>  
                </a>
                <br><br>
                IGUAL
                <br><br>
                1987: <a href="https://www.datoselecciones.com/asturias-parlamento-1987" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                <span style="color: #FF0000;">PSOE 3 Escaños</span>
                <span style="color: #ADD8E6;">AP 2 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1991: <a href="https://www.datoselecciones.com/asturias-parlamento-1991" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 3 Escaños</span>
                    <span style="color: #0000FF;">PP 2 Escaños</span>  
                </a>
                <br><br>
                IGUAL
                <br><br>
                1995: <a href="https://www.datoselecciones.com/asturias-parlamento-1995" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 3 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 2 Escaño</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1999: <a href="https://www.datoselecciones.com/asturias-parlamento-1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 3 Escaños</span>
                <span style="color: #0000FF;">PP 2 Escaños</span> 
                </a>
                <br><br>
                IGUAL
                <br><br>
                2003: <a href="https://www.datoselecciones.com/asturias-parlamento-2003" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 3 Escaños</span>
                <span style="color: #0000FF;">PP 2 Escaños</span> 
                </a>
                <br><br>
                IGUAL
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/03/3301.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://es.wikipedia.org/wiki/Elecciones_a_la_Junta_General_del_Principado_de_Asturias_de_2011" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #014586;">FA 2 Escaños</span>
    <span style="color: #0000FF;">PP 1 Escaño</span> 
</a>
<br><br>
IGUAL
<br><br>
2012: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/03/3301.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #014586;">FA 2 Escaños</span>
    <span style="color: #0000FF;">PP 1 Escaño</span> 
</a>
<br><br>
IGUAL
<br><br>
2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/03/3301.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/03/3301.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/03/01/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Asturias Oriente es claramente de izquierdas, el PSOE ha sumado más escaños que la derecha siempre menos en 1995 con el PP con muy poca ventaja sobre el PSOE y en 2011 y 2012 cuando la suma de FA y el PP supera al PSOE. A pesar de su pequeño tamaño PODEMOS entró en el 2015 con el ciclo 15M.
A pesar de ello suele estar muy disputada excepto en el 2015 ya mencionado y en el 2019 con la división de la derecha en tres partidos. En 1983, 1995, 2003 y 2023 el último escaño se ha jugado por menos de 800 votos
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Asturias Oriente</title>
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
if (provincia === "Asturias") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Asturias <span class="escaños">45 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://www.datoselecciones.com/asturias-parlamento-1983" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 26 Escaños</span> 
                <span style="color: #ADD8E6;">AP-PDP-UL 15 Escaños</span> 
                <span style="color: #FF0D00;">PCE 4 Escaños</span> 
                </a>
                <br><br>
                AP-PDP-UL gana un escaño a costa del PCE
                <br><br>
                1987: <a href="https://www.datoselecciones.com/asturias-parlamento-1987" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                <span style="color: #FF0000;">PSOE 20 Escaños</span>
                <span style="color: #ADD8E6;">AP 12 Escaños</span>
                <span style="color: #006400;">CDS 8 Escaños</span>
                <span style="color: #d25644;">IU 5 Escaños</span> 
                </a>
                <br><br>
                IU gana un escaño a costa de AP
                <br><br>
                1991: <a href="https://www.datoselecciones.com/asturias-parlamento-1991" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 21 Escaños</span>
                    <span style="color: #0000FF;">PP 15 Escaños</span>  
                    <span style="color: #d25644;">IU 6 Escaños</span>
                    <span style="color: #006400;">CDS 2 Escaños</span>
                    <span style="color: #7f9662;">PAS-UNA 1 Escaño</span>

                </a>
                <br><br>
                IGUAL
                <br><br>
                1995: <a href="https://www.datoselecciones.com/asturias-parlamento-1995" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 21 Escaños</span>
                    <span style="color: #FF0000;">PSOE 16 Escaño</span> 
                    <span style="color: #d25644;">IU 7 Escaños</span>
                    <span style="color: #7f9662;">PAS 1 Escaño</span>
                </a>
                <br><br>
                IU sube un escaño a costa del PSOE 
                <br><br>
                1999: <a href="https://www.datoselecciones.com/asturias-parlamento-1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 23 Escaño</span> 
                    <span style="color: #0000FF;">PP 16 Escaños</span>
                    <span style="color: #d25644;">IU 3 Escaños</span>
                    <span style="color: #49bae9;">URAS 3 Escaño</span>
                </a>
                <br><br>
                El PP gana un escaño a costa del PSOE
                <br><br>
                2003: <a href="https://www.datoselecciones.com/asturias-parlamento-2003#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 22 Escaño</span> 
                    <span style="color: #0000FF;">PP 19 Escaños</span>
                    <span style="color: #d25644;">IU 4 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/03/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 21 Escaño</span> 
                    <span style="color: #0000FF;">PP 20 Escaños</span>
                    <span style="color: #d25644;">IU 4 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://es.wikipedia.org/wiki/Elecciones_a_la_Junta_General_del_Principado_de_Asturias_de_2011" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #014586;">FA 16 Escaños</span>
    <span style="color: #FF0000;">PSOE 15 Escaños</span>
    <span style="color: #0000FF;">PP 10 Escaños</span> 
    <span style="color: #d25644;">IU 4 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>
2012: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/03/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 17 Escaños</span> 
    <span style="color: #014586;">FA 12 Escaños</span>
    <span style="color: #0000FF;">PP 10 Escaños</span>
    <span style="color: #d25644;">IU-IX 5 Escaños</span>
    <span style="color: #d7257d;">UPyD 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>
2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/03/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 14 Escaños</span>
    <span style="color: #0000FF;">PP 11 Escaños</span> 
    <span style="color: #800080;">PODEMOS 9 Escaños</span>
    <span style="color: #d25644;">IU-IX 5 Escaños</span>
    <span style="color: #FF7F00;">CS 3 Escaños</span>
    <span style="color: #014586;">FA 3 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/03/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 20 Escaños</span>
    <span style="color: #0000FF;">PP 10 Escaños</span> 
    <span style="color: #FF7F00;">CS 5 Escaños</span>
    <span style="color: #800080;">PODEMOS 4 Escaños</span>
    <span style="color: #d25644;">IU 2 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span> 
    <span style="color: #014586;">FA 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/03/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 19 Escaños</span>
    <span style="color: #0000FF;">PP 17 Escaños</span> 
    <span style="color: #008000;">VOX 4 Escaños</span> 
    <span style="color: #d25644;">IU 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #014586;">FA 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Asturias es una comunidad autónoma claramente de izquierdas, aunque el PSOE solo ha obtenido mayorías absolutas en 1983 y 1999 ha podido pactar a su izquierdas en todas las elecciones menos en 1995 por la falta de acuerdo con Izquierda Unida que se dio en España y en 2011 por la victoria de FA en escaños que sumaba con el PP, aunque cabe resaltar, que la fuerza
más votada en este año fue el PSOE. Actualmente a pesar de todo ello, la izquierda conserva su gobierno por 782 votos, siendo la circunscripción impar de Oriente decisiva.
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Asturias</title>
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