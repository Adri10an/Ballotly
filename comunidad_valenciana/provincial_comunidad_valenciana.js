    function abrirVentana(provincia) {

if (provincia === "Castellón") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Castellón <span class="escaños">25 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1983: <a href="https://www.datoselecciones.com/comunidad-valenciana-parlamento-1983/castellon" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSPV-PSOE 14 Escaños</span> 
                <span style="color: #ADD8E6;">AP-PDP-UL-UV 10 Escaños</span> 
                <span style="color: #FF0D00;">PCE-PCPV 1 Escaño</span> 
                </a>
                <br><br>
                El PSOE las gana y sumando al PCE sacan cinco escaños de ventaja a AP-PDP-UL-UV. El PSOE gana a AP-PDP-UL-UV por 35716 votos y AP-PDP-UL-UV multiplica por seis al PCE en votos  
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 23 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1987: <a href="https://www.datoselecciones.com/comunidad-valenciana-parlamento-1987/castellon" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                <span style="color: #FF0000;">PSOE 11 Escaños</span>
                <span style="color: #ADD8E6;">FAP 8 Escaños</span>
                <span style="color: #006400;">CDS 3 Escaños</span>
                <span style="color: #d25644;">IU-UPV 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a IU-UPV sacan un escaño de ventaja a la suma de FAP y CDS. El PSOE gana a FAP por 25507 votos, FAP dobla a CDS en votos y CDS dobla a IU-UPV en votos
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 22 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1991: <a href="https://www.datoselecciones.com/comunidad-valenciana-parlamento-1991/castellon" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 11 Escaños</span>
                    <span style="color: #0000FF;">PP 9 Escaños</span>  
                <span style="color: #27345a;">UV 1 Escaño</span>
                <span style="color: #d25644;">EUPV 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a EUPV sacan dos escaños de ventaja a la suma de PP y UV. El PSOE gana al PP por 15161 votos, el PP multiplica por seis a UV en votos y UV gana a EUPV por tan solo 989 votos
                <br><br>
                1995: <a href="https://www.datoselecciones.com/comunidad-valenciana-parlamento-1995/castellon" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 11 Escaños</span> 
                <span style="color: #FF0000;">PSOE 8 Escaño</span>
                <span style="color: #d25644;">EU-EV 2 Escaños</span>
                <span style="color: #27345a;">UV-FICVA-CCV 1 Escaño</span>
                </a>
                <br><br>
                El PP las gana y sumando a UV-FICVA-CCV sacan dos escaños de ventaja a la suma de PSOE y EU-EV. El PP gana al PSOE por 28077 votos, el PSOE cuadriplica a EU-EV en votos y EU-EV gana a UV-FICVA-CCV por 10764 votos
                <br><br>
                1999: <a href="https://www.datoselecciones.com/comunidad-valenciana-parlamento-1999/castellon" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 12 Escaños</span> 
                <span style="color: #FF0000;">PSOE 9 Escaños</span>
                <span style="color: #d25644;">EUPV 1 Escaño</span>
                </a>
                <br><br>
                El PP repite como ganador en la provincia sacando dos escaños de ventaja a la suma de PSOE y EUPV. El PP gana al PSOE por 39529 votos y el PSOE multiplica por ocho a EUPV en votos
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 23 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                2003: <a href="https://www.datoselecciones.com/comunidad-valenciana-parlamento-2003/castellon" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 13 Escaños</span> 
                <span style="color: #FF0000;">PSOE 9 Escaños</span>
                <span style="color: #d25644;">ENTESA 1 Escaño</span>
                </a>
                <br><br>
                El PP las gana sacando tres escaños de ventaja a la suma de PSOE y ENTESA. El PP gana al PSOE por 33671 votos y el PSOE multiplica por ocho a ENTESA en votos
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 24 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/17/12.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 12 Escaños</span> 
    <span style="color: #FF0000;">PSOE 10 Escaños</span>
    <span style="color: #d64a26;">COMPROMIS PV 2 Escaños</span>
</a>
<br><br>
De nuevo, el PP vuelve a ganar las elecciones en Castellón, empatando en escaños a la suma de PSOE y COMPROMIS PV. El PP gana al PSOE por 32239 votos y el PSOE cuadriplica a COMPROMIS PV en votos
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/17/12.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 13 Escaños</span> 
    <span style="color: #FF0000;">PSOE 9 Escaños</span>
    <span style="color: #d64a26;">COMPROMIS 1 Escaño</span>
    <span style="color: #d25644;">EUPV-ERPV 1 Escaño</span>
</a>
<br><br>
El PP las gana sacando dos escaños de ventaja a la suma de PSOE, COMPROMIS y EUPV-ERPV. El PP gana al PSOE por 48370 votos, el PSOE cuadriplica a COMPROMIS en votos y COMPROMIS gana a EUPV-ERPV por 2064 votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/17/12.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 8 Escaños</span> 
    <span style="color: #FF0000;">PSOE 6 Escaños</span>
    <span style="color: #d64a26;">COMPROMIS 4 Escaños</span>
    <span style="color: #800080;">PODEMOS 3 Escaños</span>
    <span style="color: #FF7F00;">CS 3 Escaños</span>
</a>
<br><br>
El PP sigue siendo la fuerza más votada, pero la suma de PSOE, COMPROMIS y PODEMOS saca dos escaños de ventaja a la suma de PP y CIUDADANOS. El PP gana al PSOE por 16244 votos, el PSOE gana a COMPROMIS por 28205 votos, COMPROMIS gana a PODEMOS por 8015 votos y PODEMOS gana a CIUDADANOS por tan solo 1371 votos
<br><br>

2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/17/12.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 7 Escaños</span>
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #FF7F00;">CS 4 Escaños</span>
    <span style="color: #d64a26;">COMPROMIS 4 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span>
    <span style="color: #800080;">UNIDES PODEM-EUPV 2 Escaños</span>
</a>
<br><br>
El PSOE las gana y sumando a COMPROMIS y UNIDES PODEM-EUPV sacan dos escaños de ventaja a la suma de PP, CIUDADANOS y VOX. El PSOE gana al PP por 18593 votos, el PP gana a CIUDADANOS por 19795 votos, CIUDADANOS gana a COMPROMIS por 2272 votos, COMPROMIS gana a VOX por 12144 votos y VOX gana a UNIDES PODEM-EUPV por 8365 votos 
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/17/12/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 10 Escaños</span> 
    <span style="color: #FF0000;">PSOE 8 Escaños</span>
    <span style="color: #d64a26;">COMPROMIS 3 Escaños</span>
    <span style="color: #008000;">VOX 3 Escaños</span>
</a>
<br><br>
El PP las gana y sumando a VOX sacan dos escaños de ventaja a la suma de PSOE y COMPROMIS. El PP gana al PSOE por 16457 votos, el PSOE dobla a COMPROMIS en votos y COMPROMIS gana a VOX por tan solo 80 votos
<br><br>
En conclusión, Castellón es una provincia autonómica que no podríamos calificar ni como de derechas ni como de izquierdas. Desde 1983 hasta 1991 es la izquierda la ganadora, pero luego llega 1995 y la derecha gana hasta 2003. En 2007 se marca un empate entre izquierda y derecha.
En 2011 la derecha saca dos escaños de ventaja a la izquierda, pero en 2015 es la izquierda la que saca dos escaños de ventaja a la derecha, al igual que en 2019. Pero en 2023 es la derecha la que saca dos escaños de ventaja a la izquierda.
En resumen la izquierda ha ganado en 5 elecciones: 1983, 1987, 1991, 2015 y 2019 y la derecha ha ganado tambien en 5 elecciones: 1995, 1999, 2003, 2011 y 2023, mientras que en 2007 se produce un empate entre izquierda y derecha.

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Castellón</title>
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
if (provincia === "Valencia") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Valencia <span class="escaños">35 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://www.datoselecciones.com/comunidad-valenciana-parlamento-1983/valencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 20 Escaños</span>  
                <span style="color: #ADD8E6;">AP-PDP-UL-UV 12 Escaños</span> 
                <span style="color: #FF0D00;">PCE-PCPV 3 Escaños</span> 
                </a>
                <br><br>
                El PSOE las gana y sumando al PCE-PCPV sacan once escaños de ventaja a AP-PDP-UL-UV. El PSOE gana a AP-PDP-UL-UV por 202165 votos y AP-PDP-UL-UV triplica al PCE-PCPV en votos
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 37 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1987: <a href="https://www.datoselecciones.com/comunidad-valenciana-parlamento-1987/valencia" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                <span style="color: #FF0000;">PSOE 17 Escaños</span>
                <span style="color: #ADD8E6;">FAP 8 Escaños</span>
                <span style="color: #27345a;">UV 6 Escaños</span>
                <span style="color: #006400;">CDS 3 Escaños</span>
                <span style="color: #d25644;">IU-UPV 3 Escaños</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a IU-UPV sacan tres escaños de ventaja a la suma de FAP, UV y CDS. El PSOE dobla a FAP en votos, FAP gana a UV por 56278 votos, UV gana a CDS por 62148 votos y CDS gana a IU-UPV por 4668 votos 
                <br><br>
                1991: <a href="https://www.datoselecciones.com/comunidad-valenciana-parlamento-1991/valencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 18 Escaños</span>
                <span style="color: #0000FF;">PP 10 Escaños</span> 
                <span style="color: #27345a;">UV 6 Escaños</span>
                <span style="color: #d25644;">EUPV 3 Escaños</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a EUPV sacan cinco escaños de ventaja a la suma de PP y UV. El PSOE gana al PP por 214216 votos, el PP gana a UV por 79171 votos y UV gana a EUPV por 90559 votos
                <br><br>
                1995: <a href="https://www.datoselecciones.com/comunidad-valenciana-parlamento-1995/valencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 16 Escaños</span> 
                <span style="color: #FF0000;">PSOE 12 Escaños</span> 
                <span style="color: #d25644;">EU-UV 5 Escaños</span>
                <span style="color: #27345a;">UV-FICVA-CCV 4 Escaños</span>
                </a>
                <br><br>
                El PP las gana y sumando a UV-FICVA-CCV sacan tres escaños de ventaja a la suma de PSOE y EU-UV. El PP gana al PSOE por 100694 votos, el PSOE dobla a EU-UV en votos y EU-UV gana a UV-FICVA-CCV por 29637 votos 
                <br><br>
                1999: <a href="https://www.datoselecciones.com/comunidad-valenciana-parlamento-1999/valencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 21 Escaños</span> 
                <span style="color: #FF0000;">PSOE 14 Escaños</span>
                <span style="color: #d25644;">EUPV 2 Escaños</span>
                </a>
                <br><br>
                El PP repite como ganador en la provincia sacan cinco escaños de ventaja a la suma de PSOE y EUPV. El PP gana al PSOE por 183702 votos y el PSOE quintuplica a EUPV en votos
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 36 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                2003: <a href="https://www.datoselecciones.com/comunidad-valenciana-parlamento-2003/valencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 19 Escaños</span> 
                <span style="color: #FF0000;">PSOE 14 Escaños</span>
                <span style="color: #d25644;">ENTESA 3 Escaños</span>
                </a>
                <br><br>
                El PP continua como vencedor sacando dos escaños de ventaja a la suma de PSOE y ENTESA. El PP gana al PSOE por 150496 y el PSOE casi quintuplica a ENTESA en votos
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 40 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                2007: <a href="https://www.datoselecciones.com/comunidad-valenciana-parlamento-2007/valencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 23 Escaños</span> 
    <span style="color: #FF0000;">PSOE 14 Escaños</span>
    <span style="color: #d64a26;">COMPROMIS PV 3 Escaños</span>
</a>
<br><br>
De nuevo, el PP vuelve a ganar las elecciones sacando seis escaños de ventaja a la suma de PSOE y COMPROMIS PV. El PP gana al PSOE por 284199 votos y el PSOE triplica a COMPROMIS PV en votos
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/17/46.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 22 Escaños</span> 
    <span style="color: #FF0000;">PSOE 12 Escaños</span>
    <span style="color: #d64a26;">COMPROMIS 4 Escaños</span>
    <span style="color: #d25644;">EUPV-ERPV 1 Escaño</span>
</a>
<br><br>
El PP las gana sacando cinco escaños de ventaja a la suma de PSOE, COMPROMIS y EUPV-ERPV. El PP gana al PSOE por 314113 votos, el PSOE casi triplica a COMPROMIS en votos y COMPROMIS gana a EUPV-ERPV por 28239 votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/17/46.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 12 Escaños</span> 
    <span style="color: #d64a26;">COMPROMIS 10 Escaños</span>
    <span style="color: #FF0000;">PSOE 8 Escaños</span>
    <span style="color: #FF7F00;">CS 5 Escaños</span>
    <span style="color: #800080;">PODEMOS 5 Escaños</span>
</a>
<br><br>
El PP las gana, pero la suma de COMPROMIS, PSOE y PODEMOS sacan diez escaños de ventaja a la suma de PP y CIUDADANOS. El PP gana a COMPROMIS por 33011 votos, COMPROMIS gana al PSOE por 57779 votos, el PSOE gana a CIUDADANOS por 92521 votos y CIUDADANOS gana a PODEMOS por 11996 votos
<br><br>
2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/17/46.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 10 Escaños</span>
    <span style="color: #d64a26;">COMPROMIS 9 Escaños</span>
    <span style="color: #0000FF;">PP 7 Escaños</span> 
    <span style="color: #FF7F00;">CS 7 Escaños</span>
    <span style="color: #008000;">VOX 4 Escaños</span>
    <span style="color: #800080;">UNIDES PODEM-EUPV 3 Escaños</span>
</a>
<br><br>
El PSOE las gana y sumando a COMPROMIS y UNIDES PODEMOS-EUPV sacan cuatro escaños de ventaja a la suma de PP, CIUDADANOS y VOX. El PSOE gana a COMPROMIS por 27247 votos, COMPROMIS gana al PP por 38593 votos, el PP gana a CIUDADANOS por 9807 votos, CIUDADANOS gana a VOX por 102618 votos y VOX gana a UNIDES PODEM-EUPV por 39260 votos
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/17/46/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 15 Escaños</span> 
    <span style="color: #FF0000;">PSOE 12 Escaños</span>
    <span style="color: #d64a26;">COMPROMIS 8 Escaños</span>
    <span style="color: #008000;">VOX 5 Escaños</span> 
</a>
<br><br>
El PP las gana y sumando a VOX empatan en escaños a la suma de PSOE y COMPROMIS. El PP gana al PSOE por 75791 votos, el PSOE gana a COMPROMIS por 139527 votos y COMPROMIS gana a VOX por 63049 votos
<br><br>
En conclusión, Valencia es una provincia autonómica de izquierdas. Desde 1983 hasta 1991 es la izquierda la ganadora. Desde 1995 hasta 2011 lo hace la derecha pero en 2015 la izquierda diez escaños de ventaja a la derecha y en 2019 la izquierda saca cuatro escaños de
ventaja a la derecha. En 2023 se marca un empate entre izquierda y derecha en escaños, pero la suma de PSOE+COMPROMIS+PODEMOS saca 15873 votos de ventaja a la suma de PP, VOX y CIUDADANOS.
A pesar de la racha de la derecha desde 1995 hasta 2011, la derecha ha perdido ya su fuerza desde 2015.
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Valencia</title>
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
if (provincia === "Alicante") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Alicante <span class="escaños">29 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://www.datoselecciones.com/comunidad-valenciana-parlamento-1983/alicante" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 17 Escaños</span>  
                <span style="color: #ADD8E6;">AP-PDP-UL-UV 10 Escaños</span> 
                <span style="color: #FF0D00;">PCE-PCPV 2 Escaños</span> 
                </a>
                <br><br>
                El PSOE las gana y sumando al PCE-PCPV sacan nueve escaños de ventaja a AP-PDP-UL-UV. El PSOE gana a AP-PDP-UL-UV por 135167 votos y AP-PDP-UL-UV cuadriplica al PCE-PCPV en votos
                <br><br>
                1987: <a href="https://www.datoselecciones.com/comunidad-valenciana-parlamento-1987/alicante" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                <span style="color: #FF0000;">PSOE 14 Escaños</span>
                <span style="color: #ADD8E6;">FAP 9 Escaños</span>
                <span style="color: #006400;">CDS 4 Escaños</span>
                <span style="color: #d25644;">IU-UPV 2 Escaños</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a IU-UPV sacan tres escaños de ventaja a la suma de FAP y CDS. El PSOE gana a FAP por 90029 votos, FAP gana a CDS por 84146 votos y CDS dobla a IU-UPV en votos
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 30 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1991: <a href="https://www.datoselecciones.com/comunidad-valenciana-parlamento-1991/alicante" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 16 Escaños</span>
                <span style="color: #0000FF;">PP 12 Escaños</span> 
                <span style="color: #d25644;">EUPV 2 Escaños</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a EUPV sacan seis escaños de ventaja al PP El PSOE gana al PP por 72435 votos y el PP cuadriplica a EUPV en votos
                <br><br>
                1995: <a href="https://www.datoselecciones.com/comunidad-valenciana-parlamento-1995/alicante" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 15 Escaños</span> 
                <span style="color: #FF0000;">PSOE 12 Escaños</span> 
                <span style="color: #d25644;">EU-UV 3 Escaños</span>
                </a>
                <br><br>
                El PP las gana empatando en escaños a la suma de PSOE y EU-UV. El PP gana al PSOE por 80625 votos y el PSOE triploca a EU-UV en votos
                <br><br>
                1999: <a href="https://www.datoselecciones.com/comunidad-valenciana-parlamento-1999/alicante" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 16 Escaños</span> 
                <span style="color: #FF0000;">PSOE 12 Escaños</span>
                <span style="color: #d25644;">EUPV 2 Escaños</span>
                </a>
                <br><br>
                El PP repite como ganador en la provincia sacando dos escaños de ventaja a la suma de PSOE y EUPV. El PP gana al PSOE por 93232 votos y el PSOE casi multiplica por seis a EU-UV
                <br><br>
                2003: <a href="https://www.datoselecciones.com/comunidad-valenciana-parlamento-2003/alicante" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 16 Escaños</span> 
                <span style="color: #FF0000;">PSOE 12 Escaños</span>
                <span style="color: #d25644;">ENTESA 2 Escaños</span>
                </a>
                <br><br>
                El PP continua como vencedor sacando dos escaños de ventaja a la suma de PSOE y ENTESA. El PP gana al PSOE por 88325 votos y el PSOE multiplica por seis a ENTESA en votos
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 35 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/17/03.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 19 Escaños</span> 
    <span style="color: #FF0000;">PSOE 14 Escaños</span>
    <span style="color: #d64a26;">COMPROMIS PV 2 Escaños</span>
</a>
<br><br>
De nuevo, el PP vuelve a ganar las elecciones sacando tres escaños de ventaja a la suma de PSOE y COMPROMIS PV. El PP gana al PSOE por 121943 votos y el PSOE quintuplica a COMPROMIS PV en votos
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/17/03.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 20 Escaños</span> 
    <span style="color: #FF0000;">PSOE 12 Escaños</span>
    <span style="color: #d25644;">EUPV-ERPV 2 Escaños</span>
    <span style="color: #d64a26;">COMPROMIS 1 Escaño</span>    
</a>
<br><br>
El PP las gana sacando cinco escaños de ventaja a la suma de PSOE, EUPV-ERPV y COMPROMIS . El PP gana al PSOE por 161488 votos, el PSOE quintuplica a EUPV-ERPV y EUPV-ERPV gana a COMPROMIS por 9922 votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/17/03.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 11 Escaños</span> 
    <span style="color: #FF0000;">PSOE 9 Escaños</span>
    <span style="color: #FF7F00;">CS 5 Escaños</span>
    <span style="color: #d64a26;">COMPROMIS 5 Escaños</span>
    <span style="color: #800080;">PODEMOS 5 Escaños</span>
</a>
<br><br>
El PP las gana, pero la suma de PSOE, COMPROMIS y PODEMOS saca tres escaños de ventaja a la suma de PP y CIUDADANOS. El PP gana al PSOE por 40966 votos, el PSOE gana a CIUDADANOS por 68678 votos, CIUDADANOS gana a COMPROMIS por 13428 votos y CIUDADANOS gana a PODEMOS por 2747 votos
<br><br>
2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/17/03.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 10 Escaños</span>
    <span style="color: #0000FF;">PP 7 Escaños</span> 
    <span style="color: #FF7F00;">CS 7 Escaños</span>
    <span style="color: #008000;">VOX 4 Escaños</span>
    <span style="color: #d64a26;">COMPROMIS 4 Escaños</span>
    <span style="color: #800080;">UNIDES PODEM-EUPV 3 Escaños</span>
</a>
<br><br>
El PSOE las gana, pero la suma de PP, CIUDADANOS y VOX sacan un escaño de ventaja a la suma de PSOE, COMPROMIS y UNIDES PODEM-EUPV. El PSOE gana al PP por 48837 votos, el PP gana a CIUDADANOS por 8410 votos, CIUDADANOS gana a VOX por 70410 votos, VOX gana a COMPROMIS por 2650 votos y COMPROMIS gana a UNIDES PODEM-EUPV por 15665 votos
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/17/46/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 15 Escaños</span> 
    <span style="color: #FF0000;">PSOE 11 Escaños</span>
    <span style="color: #008000;">VOX 5 Escaños</span> 
    <span style="color: #d64a26;">COMPROMIS 4 Escaños</span>
</a>
<br><br>
El PP las gana y sumando a VOX sacan cinco escaños de ventaja a la suma de PSOE y COMPROMIS. El PP gana al PSOE por 78997 votos, el PSOE dobla a VOX en votos y VOX gana a COMPROMIS por 16887 votos
<br><br>
En conclusión, Alicante es una provincia autonómicamente de derechas, la izquierda comienza ganando las tres primeras elecciones, pero en 1995 se da el primer empate entre izquierda y derecha. Desde 1999 hasta 2011 es la derecha la que empieza a ganar.
En 2015 con el fin del bipartidismo la izquierda saca en este periodo tres escaños de ventaja a la derecha, pero en 2019 a pesar de que gana el PSOE, la suma de las tres derechas supera a la suma de las izquierdas y en 2023 se amplia el margen de ventaja de la derecha a
cinco escaños.
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Alicante</title>
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
if (provincia === "Comunidad Valenciana") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Comunidad Valenciana <span class="escaños">89 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://www.datoselecciones.com/comunidad-valenciana-parlamento-1983" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 51 Escaños</span>  
                <span style="color: #ADD8E6;">AP-PDP-UL-UV 32 Escaños</span> 
                <span style="color: #FF0D00;">PCE-PCPV 6 Escaños</span> 
                </a>
                <br><br>
                El PSOE las gana sacando seis escaños por encima de la mayoría absoluta.
                <br><br>
                1987: <a href="https://www.datoselecciones.com/comunidad-valenciana-parlamento-1987" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                <span style="color: #FF0000;">PSOE 42 Escaños</span>
                <span style="color: #ADD8E6;">FAP 25 Escaños</span>
                <span style="color: #006400;">CDS 10 Escaños</span>
                <span style="color: #27345a;">UV 6 Escaños</span>
                <span style="color: #d25644;">IU-UPV 6 Escaños</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a IU-UPV sacan tres escaños por encima de la mayoría absoluta
                <br><br>
                1991: <a href="https://www.datoselecciones.com/comunidad-valenciana-parlamento-1991" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 45 Escaños</span>
                <span style="color: #0000FF;">PP 31 Escaños</span> 
                <span style="color: #27345a;">UV 7 Escaños</span>
                <span style="color: #d25644;">EUPV 6 Escaños</span>
                </a>
                <br><br>
                El PSOE las gana sacando la mayoría absoluta
                <br><br>
                1995: <a href="https://www.datoselecciones.com/comunidad-valenciana-parlamento-1995" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 42 Escaños</span> 
                <span style="color: #FF0000;">PSOE 32 Escaños</span> 
                <span style="color: #d25644;">EU-UV 10 Escaños</span>
                <span style="color: #27345a;">UV-FICVA-CCV 5 Escaños</span>
                </a>
                <br><br>
                El PP las gana y sumando a UV-FICVA-CCV sacan dos escaños por encima de la mayoría absoluta
                <br><br>
                1999: <a href="https://www.datoselecciones.com/comunidad-valenciana-parlamento-1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 49 Escaños</span> 
                <span style="color: #FF0000;">PSOE 35 Escaños</span>
                <span style="color: #d25644;">EUPV 5 Escaños</span>
                </a>
                <br><br>
                El PP las gana sacando cuatro escaños por encima de la mayoría absoluta
                <br><br>
                2003: <a href="https://www.datoselecciones.com/comunidad-valenciana-parlamento-2003" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 48 Escaños</span> 
                <span style="color: #FF0000;">PSOE 35 Escaños</span>
                <span style="color: #d25644;">ENTESA 6 Escaños</span>
                </a>
                <br><br>
                El PP continua como vencedor sacando tres escaños por encima de la mayoría absoluta
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 99 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/17/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 54 Escaños</span> 
    <span style="color: #FF0000;">PSOE 38 Escaños</span>
    <span style="color: #d64a26;">COMPROMIS PV 7 Escaños</span>
</a>
<br><br>
De nuevo, el PP vuelve a ganar las elecciones sacando cuatro escaños por encima de la mayoría absoluta
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/17/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 55 Escaños</span> 
    <span style="color: #FF0000;">PSOE 33 Escaños</span>
    <span style="color: #d64a26;">COMPROMIS 6 Escaños</span>
    <span style="color: #d25644;">EUPV-ERPV 5 Escaños</span>    
</a>
<br><br>
El PP las gana sacando cinco escaños por encima de la mayoría absoluta
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/17/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 31 Escaños</span> 
    <span style="color: #FF0000;">PSOE 23 Escaños</span>
    <span style="color: #d64a26;">COMPROMIS 19 Escaños</span>
    <span style="color: #FF7F00;">CS 13 Escaños</span>
    <span style="color: #800080;">PODEMOS 13 Escaños</span>
</a>
<br><br>
El PP las gana, pero la suma de PSOE, COMPROMIS Y PODEMOS saca cuatro escaños por encima de la mayoría absoluta
<br><br>
2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/17/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 27 Escaños</span>
    <span style="color: #0000FF;">PP 19 Escaños</span> 
    <span style="color: #FF7F00;">CS 18 Escaños</span>
    <span style="color: #d64a26;">COMPROMIS 17 Escaños</span>
    <span style="color: #008000;">VOX 10 Escaños</span>
    <span style="color: #800080;">UNIDES PODEM-EUPV 8 Escaños</span>
</a>
<br><br>
El PSOE las gana, y sumando a COMPROMIS y UNIDES PODEM-EUPV sacan dos escaños por encima de la mayoría absoluta
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/17/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 40 Escaños</span> 
    <span style="color: #FF0000;">PSOE 32 Escaños</span>
    <span style="color: #d64a26;">COMPROMIS 15 Escaños</span>
    <span style="color: #008000;">VOX 13 Escaños</span> 
</a>
<br><br>
El PP las gana y sumando a VOX sacan tres escaños por encima de la mayoría absoluta
<br><br>
En conclusión, la Comunidad Valenciana es una comunidad autónoma que no podríamos situar ni en la izquierda ni en la derecha. La izquierda ha ganado en 1983, 1987 1991, 2015 y 2019 mientras que la derecha ha ganado en 1995, 1999, 2003, 2007, 2011 y 2023.
Hay un dicho en la política autonómica que reza: Valencia te da la mayoría, pero Alicante te da la absoluta.Este dicho, convertido en ley inexorable, la han tenido los populares entre ceja y ceja desde que Eduardo Zaplana le arrebatara la presidencia de la 
Generalitat Valenciana en 1995 al socialista Joan Lerma e iniciara la hegemonía popular durante dos décadas en la Comunidad Valenciana.
Zaplana tenía su base de poder en Alicante, lo sabía y la mimó. Primero, para fortalecer su control sobre el partido y, después, como contrapoder a su predecesor, Francisco Camps. Éste también conocía la influencia de Alicante. Hizo bandera de causas tan sensibles para la provincia como el agua. La derogación del trasvase del Ebro ejecutada por el Gobierno de Zapatero tras alcanzar un pacto con ERC fue su punto álgido. La campaña 'Agua para Todos' impulsada por la Generalitat le otorgó una mayoría histórica en 2007 con el 53,27% de los votos totales.
El PSPV solo pudo romper la dinastía popular gracias a unas circunstancias excepcionales que se juntaron todas a la vez: los casos de corrupción; la crisis económica de 2008 y el cambio de modelo político a un multipartidismo con fragmentación en ambos bloques. Toda esta sucesión de acontecimientos logró que la derecha perdiera la mayoría absoluta y se construyera el primer Botànic en 2015. Aunque el PP siguió como el partido más votado, en la Comunitat y en Alicante.
La consecución del segundo tripartito se cimentó también en Alicante. Por primera vez en un cuarto de siglo, el PSPV obtuvo en 2019 más diputados autonómicos en la provincia que el Partido Popular. La partición de la derecha en hasta tres formaciones (PP, Ciudadanos y Vox) fue fundamental para conseguirlo.
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Comunidad Valenciana</title>
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
function abrirVentanaEscenario99(provincia) {
    if (provincia === "Castellón") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Castellón <span class="escaños">24 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1983: <a href="https://www.datoselecciones.com/comunidad-valenciana-parlamento-1983/castellon" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSPV-PSOE 14 Escaños</span> 
                <span style="color: #ADD8E6;">AP-PDP-UL-UV 9 Escaños</span> 
                <span style="color: #FF0D00;">PCE-PCPV 1 Escaño</span> 
                </a>
                <br><br>
                AP-PDP-UL-UV pierde un escaño y la suma de PSOE y PCE le saca seis escaños de ventaja  
                <br><br>
                1987: <a href="https://www.datoselecciones.com/comunidad-valenciana-parlamento-1987/castellon" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                <span style="color: #FF0000;">PSOE 11 Escaños</span>
                <span style="color: #ADD8E6;">FAP 9 Escaños</span>
                <span style="color: #006400;">CDS 3 Escaños</span>
                <span style="color: #d25644;">IU-UPV 1 Escaño</span>
                </a>
                <br><br>
                FAP gana un escaño y sumando a CDS empatan en escaños a la suma de PSOE y IU-UPV
                <br><br>
                1991: <a href="https://www.datoselecciones.com/comunidad-valenciana-parlamento-1991/castellon" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 12 Escaños</span>
                    <span style="color: #0000FF;">PP 10 Escaños</span>  
                <span style="color: #27345a;">UV 1 Escaño</span>
                <span style="color: #d25644;">EUPV 1 Escaño</span>
                </a>
                <br><br>
                PSOE y PP ganan un escaño asi que la suma de PSOE y EUPV continua sacando un escaño de ventaja a la suma de PP y UV
                <br><br>
                1995: <a href="https://www.datoselecciones.com/comunidad-valenciana-parlamento-1995/castellon" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 12 Escaños</span> 
                <span style="color: #FF0000;">PSOE 9 Escaño</span>
                <span style="color: #d25644;">EU-EV 2 Escaños</span>
                <span style="color: #27345a;">UV-FICVA-CCV 1 Escaño</span>
                </a>
                <br><br>
                PP y PSOE ganan un escaño, por lo que el PP sumando a UV-FICVA-CCV saca dos escaños de ventaja a la suma de PSOE y EU-EV
                <br><br>
                1999: <a href="https://www.datoselecciones.com/comunidad-valenciana-parlamento-1999/castellon" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 14 Escaños</span> 
                <span style="color: #FF0000;">PSOE 9 Escaños</span>
                <span style="color: #d25644;">EUPV 1 Escaño</span>
                </a>
                <br><br>
                El PP gana dos escaños y saca cuatro escaños de ventaja a la suma de PSOE y EUPV
                <br><br>
                2003: <a href="https://www.datoselecciones.com/comunidad-valenciana-parlamento-2003/castellon" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 13 Escaños</span> 
                <span style="color: #FF0000;">PSOE 10 Escaños</span>
                <span style="color: #d25644;">ENTESA 1 Escaño</span>
                </a>
                <br><br>
                El PSOE gana un escaño y el PP saca dos escaños de ventaja a la suma de PSOE y ENTESA
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/17/12.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 12 Escaños</span> 
    <span style="color: #FF0000;">PSOE 10 Escaños</span>
    <span style="color: #d64a26;">COMPROMIS PV 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/17/12.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 13 Escaños</span> 
    <span style="color: #FF0000;">PSOE 9 Escaños</span>
    <span style="color: #d64a26;">COMPROMIS 1 Escaño</span>
    <span style="color: #d25644;">EUPV-ERPV 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/17/12.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 8 Escaños</span> 
    <span style="color: #FF0000;">PSOE 6 Escaños</span>
    <span style="color: #d64a26;">COMPROMIS 4 Escaños</span>
    <span style="color: #800080;">PODEMOS 3 Escaños</span>
    <span style="color: #FF7F00;">CS 3 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/17/12.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 7 Escaños</span>
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #FF7F00;">CS 4 Escaños</span>
    <span style="color: #d64a26;">COMPROMIS 4 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span>
    <span style="color: #800080;">UNIDES PODEM-EUPV 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/17/12/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 10 Escaños</span> 
    <span style="color: #FF0000;">PSOE 8 Escaños</span>
    <span style="color: #d64a26;">COMPROMIS 3 Escaños</span>
    <span style="color: #008000;">VOX 3 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Castellón es una provincia autonómica que no podríamos calificar ni como de derechas ni como de izquierdas. Desde 1983 hasta 1991 es la izquierda la ganadora, pero luego llega 1995 y la derecha gana hasta 2003. En 2007 se marca un empate entre izquierda y derecha.
En 2011 la derecha saca dos escaños de ventaja a la izquierda, pero en 2015 es la izquierda la que saca dos escaños de ventaja a la derecha, al igual que en 2019. Pero en 2023 es la derecha la que saca dos escaños de ventaja a la izquierda.
En resumen la izquierda ha ganado en 5 elecciones: 1983, 1987, 1991, 2015 y 2019 y la derecha ha ganado tambien en 5 elecciones: 1995, 1999, 2003, 2011 y 2023, mientras que en 2007 se produce un empate entre izquierda y derecha.

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Castellón</title>
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
if (provincia === "Valencia") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Valencia <span class="escaños">40 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://www.datoselecciones.com/comunidad-valenciana-parlamento-1983/valencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 23 Escaños</span>  
                <span style="color: #ADD8E6;">AP-PDP-UL-UV 14 Escaños</span> 
                <span style="color: #FF0D00;">PCE-PCPV 3 Escaños</span> 
                </a>
                <br><br>
                El PSOE gana tres escaños y AP-PDP-UL-UV gana dos escaños, por lo que la suma de PSOE y PCE-PCPV sacan doce escaños de ventaja a AP-PDP-UL-UV
                <br><br>
                1987: <a href="https://www.datoselecciones.com/comunidad-valenciana-parlamento-1987/valencia" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                <span style="color: #FF0000;">PSOE 18 Escaños</span>
                <span style="color: #ADD8E6;">FAP 8 Escaños</span>
                <span style="color: #27345a;">UV 6 Escaños</span>
                <span style="color: #006400;">CDS 4 Escaños</span>
                <span style="color: #d25644;">IU-UPV 4 Escaños</span>
                </a>
                <br><br>
                El PSOE, CDS e IU ganan un escaño, por lo que la suma de PSOE e IU saca cuatro escaños de ventaja a la suma de FAP, UV y CDS
                <br><br>
                1991: <a href="https://www.datoselecciones.com/comunidad-valenciana-parlamento-1991/valencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 19 Escaños</span>
                <span style="color: #0000FF;">PP 11 Escaños</span> 
                <span style="color: #27345a;">UV 7 Escaños</span>
                <span style="color: #d25644;">EUPV 3 Escaños</span>
                </a>
                <br><br>
                PSOE, PP y UV ganan un escaño y la suma de PSOE y EUPV sacan cuatro escaños de ventaja a la suma de PP y UV
                <br><br>
                1995: <a href="https://www.datoselecciones.com/comunidad-valenciana-parlamento-1995/valencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 17 Escaños</span> 
                <span style="color: #FF0000;">PSOE 14 Escaños</span> 
                <span style="color: #d25644;">EU-UV 5 Escaños</span>
                <span style="color: #27345a;">UV-FICVA-CCV 4 Escaños</span>
                </a>
                <br><br>
                El PP gana un escaño y el PSOE gana dos escaños, por lo que la suma de PP y UV-FICVA-CCV saca dos escaños de ventaja a la suma de PSOE y EU-UV
                <br><br>
                1999: <a href="https://www.datoselecciones.com/comunidad-valenciana-parlamento-1999/valencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 22 Escaños</span> 
                <span style="color: #FF0000;">PSOE 15 Escaños</span>
                <span style="color: #d25644;">EUPV 3 Escaños</span>
                </a>
                <br><br>
                PP, PSOE y EUPV ganan un escaño, por lo que el PP saca cuatro escaños de ventaja a la suma de PSOE y EUPV
                <br><br>
                2003: <a href="https://www.datoselecciones.com/comunidad-valenciana-parlamento-2003/valencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 21 Escaños</span> 
                <span style="color: #FF0000;">PSOE 16 Escaños</span>
                <span style="color: #d25644;">ENTESA 3 Escaños</span>
                </a>
                <br><br>
                PP y PSOE ganan dos escaños por lo que el PP saca dos escaños de ventaja a la suma de PSOE y ENTESA
                <br><br>
                2007: <a href="https://www.datoselecciones.com/comunidad-valenciana-parlamento-2007/valencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 23 Escaños</span> 
    <span style="color: #FF0000;">PSOE 14 Escaños</span>
    <span style="color: #d64a26;">COMPROMIS PV 3 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/17/46.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 22 Escaños</span> 
    <span style="color: #FF0000;">PSOE 12 Escaños</span>
    <span style="color: #d64a26;">COMPROMIS 4 Escaños</span>
    <span style="color: #d25644;">EUPV-ERPV 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/17/46.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 12 Escaños</span> 
    <span style="color: #d64a26;">COMPROMIS 10 Escaños</span>
    <span style="color: #FF0000;">PSOE 8 Escaños</span>
    <span style="color: #FF7F00;">CS 5 Escaños</span>
    <span style="color: #800080;">PODEMOS 5 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>
2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/17/46.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 10 Escaños</span>
    <span style="color: #d64a26;">COMPROMIS 9 Escaños</span>
    <span style="color: #0000FF;">PP 7 Escaños</span> 
    <span style="color: #FF7F00;">CS 7 Escaños</span>
    <span style="color: #008000;">VOX 4 Escaños</span>
    <span style="color: #800080;">UNIDES PODEM-EUPV 3 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/17/46/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 15 Escaños</span> 
    <span style="color: #FF0000;">PSOE 12 Escaños</span>
    <span style="color: #d64a26;">COMPROMIS 8 Escaños</span>
    <span style="color: #008000;">VOX 5 Escaños</span> 
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Valencia es una provincia autonómica de izquierdas. Desde 1983 hasta 1991 es la izquierda la ganadora. Desde 1995 hasta 2011 lo hace la derecha pero en 2015 la izquierda diez escaños de ventaja a la derecha y en 2019 la izquierda saca cuatro escaños de
ventaja a la derecha. En 2023 se marca un empate entre izquierda y derecha en escaños, pero la suma de PSOE+COMPROMIS+PODEMOS saca 15873 votos de ventaja a la suma de PP, VOX y CIUDADANOS.
A pesar de la racha de la derecha desde 1995 hasta 2011, la derecha ha perdido ya su fuerza desde 2015.
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Valencia</title>
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
if (provincia === "Alicante") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Alicante <span class="escaños">35 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://www.datoselecciones.com/comunidad-valenciana-parlamento-1983/alicante" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 21 Escaños</span>  
                <span style="color: #ADD8E6;">AP-PDP-UL-UV 12 Escaños</span> 
                <span style="color: #FF0D00;">PCE-PCPV 2 Escaños</span> 
                </a>
                <br><br>
                El PSOE gana cuatro escaños y AP-PDP-UL-UV gana dos escaños, por lo que la suma de PSOE y PCE-PCPV sacan once escaños de ventaja a AP-PDP-UL-UV 
                <br><br>
                1987: <a href="https://www.datoselecciones.com/comunidad-valenciana-parlamento-1987/alicante" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                <span style="color: #FF0000;">PSOE 17 Escaños</span>
                <span style="color: #ADD8E6;">FAP 11 Escaños</span>
                <span style="color: #006400;">CDS 5 Escaños</span>
                <span style="color: #d25644;">IU-UPV 2 Escaños</span>
                </a>
                <br><br>
                El PSOE gana tres escaños, FAP gana dos y CDS gana un escaño, por lo que la suma de PSOE y IU-UPV sacan tres escaños de ventaja a la suma de FAP y CDS
                <br><br>
                1991: <a href="https://www.datoselecciones.com/comunidad-valenciana-parlamento-1991/alicante" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 18 Escaños</span>
                <span style="color: #0000FF;">PP 14 Escaños</span> 
                <span style="color: #d25644;">EUPV 3 Escaños</span>
                </a>
                <br><br>
                El PSOE y el PP ganan dos escaños y EUPV gana un escaño, por lo que la suma de PSOE y EUPV saca siete escaños de ventaja al PP
                <br><br>
                1995: <a href="https://www.datoselecciones.com/comunidad-valenciana-parlamento-1995/alicante" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 18 Escaños</span> 
                <span style="color: #FF0000;">PSOE 13 Escaños</span> 
                <span style="color: #d25644;">EU-UV 4 Escaños</span>
                </a>
                <br><br>
                El PP gana tres escaños, mientras PSOE y EUPV ganan un escaño cada uno, por lo que el PP saca un escaño de ventaja a la suma de PSOE y EU-UV
                <br><br>
                1999: <a href="https://www.datoselecciones.com/comunidad-valenciana-parlamento-1999/alicante" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 19 Escaños</span> 
                <span style="color: #FF0000;">PSOE 14 Escaños</span>
                <span style="color: #d25644;">EUPV 2 Escaños</span>
                </a>
                <br><br>
                El PP gana tres escaños y el PSOE gana dos escaños, por lo que el PP saca tres escaños de ventaja a la suma de PSOE y EUPV
                <br><br>
                2003: <a href="https://www.datoselecciones.com/comunidad-valenciana-parlamento-2003/alicante" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 19 Escaños</span> 
                <span style="color: #FF0000;">PSOE 14 Escaños</span>
                <span style="color: #d25644;">ENTESA 2 Escaños</span>
                </a>
                <br><br>
                El PP gana tres escaños y el PSOE gana dos escaños, por lo que el PP saca tres escaños de ventaja a la suma de PSOE y EUPV
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/17/03.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 19 Escaños</span> 
    <span style="color: #FF0000;">PSOE 14 Escaños</span>
    <span style="color: #d64a26;">COMPROMIS PV 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/17/03.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 20 Escaños</span> 
    <span style="color: #FF0000;">PSOE 12 Escaños</span>
    <span style="color: #d25644;">EUPV-ERPV 2 Escaños</span>
    <span style="color: #d64a26;">COMPROMIS 1 Escaño</span>    
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/17/03.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 11 Escaños</span> 
    <span style="color: #FF0000;">PSOE 9 Escaños</span>
    <span style="color: #FF7F00;">CS 5 Escaños</span>
    <span style="color: #d64a26;">COMPROMIS 5 Escaños</span>
    <span style="color: #800080;">PODEMOS 5 Escaños</span>
</a>
<br><br>
IGUAL 
<br><br>
2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/17/03.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 10 Escaños</span>
    <span style="color: #0000FF;">PP 7 Escaños</span> 
    <span style="color: #FF7F00;">CS 7 Escaños</span>
    <span style="color: #008000;">VOX 4 Escaños</span>
    <span style="color: #d64a26;">COMPROMIS 4 Escaños</span>
    <span style="color: #800080;">UNIDES PODEM-EUPV 3 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/17/46/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 15 Escaños</span> 
    <span style="color: #FF0000;">PSOE 11 Escaños</span>
    <span style="color: #008000;">VOX 5 Escaños</span> 
    <span style="color: #d64a26;">COMPROMIS 4 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Alicante es una provincia autonómicamente de derechas, la izquierda comienza ganando las tres primeras elecciones, pero en 1995 se da el primer empate entre izquierda y derecha. Desde 1999 hasta 2011 es la derecha la que empieza a ganar.
En 2015 con el fin del bipartidismo la izquierda saca en este periodo tres escaños de ventaja a la derecha, pero en 2019 a pesar de que gana el PSOE, la suma de las tres derechas supera a la suma de las izquierdas y en 2023 se amplia el margen de ventaja de la derecha a
cinco escaños.
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Alicante</title>
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
if (provincia === "Comunidad Valenciana") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Comunidad Valenciana <span class="escaños">99 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://www.datoselecciones.com/comunidad-valenciana-parlamento-1983" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 58 Escaños</span>  
                <span style="color: #ADD8E6;">AP-PDP-UL-UV 35 Escaños</span> 
                <span style="color: #FF0D00;">PCE-PCPV 6 Escaños</span> 
                </a>
                <br><br>
                El PSOE gana las primeras elecciones con ocho escaños por encima de la mayoría absoluta
                <br><br>
                1987: <a href="https://www.datoselecciones.com/comunidad-valenciana-parlamento-1987" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                <span style="color: #FF0000;">PSOE 46 Escaños</span>
                <span style="color: #ADD8E6;">FAP 28 Escaños</span>
                <span style="color: #006400;">CDS 12 Escaños</span>
                <span style="color: #d25644;">IU-UPV 7 Escaños</span>
                <span style="color: #27345a;">UV 6 Escaños</span>
                </a>
                <br><br>
                El PSOE sumando a IU-UPV suman 53 escaños sacando tres escaños por encima de la mayoría absoluta
                <br><br>
                1991: <a href="https://www.datoselecciones.com/comunidad-valenciana-parlamento-1991" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 49 Escaños</span>
                <span style="color: #0000FF;">PP 35 Escaños</span> 
                <span style="color: #27345a;">UV 8 Escaños</span>
                <span style="color: #d25644;">EUPV 7 Escaños</span>
                </a>
                <br><br>
                El PSOE sumando a EUPV suman 56 sacando seis escaños por encima de la mayoría absoluta
                <br><br>
                1995: <a href="https://www.datoselecciones.com/comunidad-valenciana-parlamento-1995" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 47 Escaños</span> 
                <span style="color: #FF0000;">PSOE 36 Escaños</span> 
                <span style="color: #d25644;">EU-UV 11 Escaños</span>
                <span style="color: #27345a;">UV-FICVA-CCV 5 Escaños</span>
                </a>
                <br><br>
                El PP las gana y sumando a UV-FICVA-CCV suman 52 sacando dos escaños por encima de la mayoría absoluta
                <br><br>
                1999: <a href="https://www.datoselecciones.com/comunidad-valenciana-parlamento-1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 55 Escaños</span> 
                <span style="color: #FF0000;">PSOE 38 Escaños</span>
                <span style="color: #d25644;">EUPV 6 Escaños</span>
                </a>
                <br><br>
                El PP las gana y saca cinco escaños por encima de la mayoría absoluta
                <br><br>
                2003: <a href="https://www.datoselecciones.com/comunidad-valenciana-parlamento-2003" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 53 Escaños</span> 
                <span style="color: #FF0000;">PSOE 40 Escaños</span>
                <span style="color: #d25644;">ENTESA 6 Escaños</span>
                </a>
                <br><br>
                El PP las gana y saca tres escaños por encima de la mayoría absoluta
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/17/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 54 Escaños</span> 
    <span style="color: #FF0000;">PSOE 38 Escaños</span>
    <span style="color: #d64a26;">COMPROMIS PV 7 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/17/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 55 Escaños</span> 
    <span style="color: #FF0000;">PSOE 33 Escaños</span>
    <span style="color: #d64a26;">COMPROMIS 6 Escaños</span>
    <span style="color: #d25644;">EUPV-ERPV 5 Escaños</span>    
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/17/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 31 Escaños</span> 
    <span style="color: #FF0000;">PSOE 23 Escaños</span>
    <span style="color: #d64a26;">COMPROMIS 19 Escaños</span>
    <span style="color: #FF7F00;">CS 13 Escaños</span>
    <span style="color: #800080;">PODEMOS 13 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>
2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/17/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 27 Escaños</span>
    <span style="color: #0000FF;">PP 19 Escaños</span> 
    <span style="color: #FF7F00;">CS 18 Escaños</span>
    <span style="color: #d64a26;">COMPROMIS 17 Escaños</span>
    <span style="color: #008000;">VOX 10 Escaños</span>
    <span style="color: #800080;">UNIDES PODEM-EUPV 8 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/17/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 40 Escaños</span> 
    <span style="color: #FF0000;">PSOE 32 Escaños</span>
    <span style="color: #d64a26;">COMPROMIS 15 Escaños</span>
    <span style="color: #008000;">VOX 13 Escaños</span> 
</a>
<br><br>
IGUAL
<br><br>
En conclusión, la Comunidad Valenciana es una comunidad autónoma que no podríamos situar ni en la izquierda ni en la derecha. La izquierda ha ganado en 1983, 1987 1991, 2015 y 2019 mientras que la derecha ha ganado en 1995, 1999, 2003, 2007, 2011 y 2023.
Hay un dicho en la política autonómica que reza: Valencia te da la mayoría, pero Alicante te da la absoluta.Este dicho, convertido en ley inexorable, la han tenido los populares entre ceja y ceja desde que Eduardo Zaplana le arrebatara la presidencia de la 
Generalitat Valenciana en 1995 al socialista Joan Lerma e iniciara la hegemonía popular durante dos décadas en la Comunidad Valenciana.
Zaplana tenía su base de poder en Alicante, lo sabía y la mimó. Primero, para fortalecer su control sobre el partido y, después, como contrapoder a su predecesor, Francisco Camps. Éste también conocía la influencia de Alicante. Hizo bandera de causas tan sensibles para la provincia como el agua. La derogación del trasvase del Ebro ejecutada por el Gobierno de Zapatero tras alcanzar un pacto con ERC fue su punto álgido. La campaña 'Agua para Todos' impulsada por la Generalitat le otorgó una mayoría histórica en 2007 con el 53,27% de los votos totales.
El PSPV solo pudo romper la dinastía popular gracias a unas circunstancias excepcionales que se juntaron todas a la vez: los casos de corrupción; la crisis económica de 2008 y el cambio de modelo político a un multipartidismo con fragmentación en ambos bloques. Toda esta sucesión de acontecimientos logró que la derecha perdiera la mayoría absoluta y se construyera el primer Botànic en 2015. Aunque el PP siguió como el partido más votado, en la Comunitat y en Alicante.
La consecución del segundo tripartito se cimentó también en Alicante. Por primera vez en un cuarto de siglo, el PSPV obtuvo en 2019 más diputados autonómicos en la provincia que el Partido Popular. La partición de la derecha en hasta tres formaciones (PP, Ciudadanos y Vox) fue fundamental para conseguirlo.
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Comunidad Valenciana</title>
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