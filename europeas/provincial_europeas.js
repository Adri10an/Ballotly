
    function abrirVentana(provincia) {

if (provincia === "España") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">España <span class="escaños">60 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1987: <a href="https://www.datoselecciones.com/parlamento-europeo-1987" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 28 Escaños</span> 
                <span style="color: #ADD8E6;">AP 17 Escaños</span> 
                <span style="color: #006400;">CDS 7 Escaños</span>
                <span style="color: #d25644;">IU 3 Escaños</span>
                <span style="color: #40E0D0;">CIU 3 Escaños</span> 
                <span style="color: #01b59c;">HB 1 Escaño</span>
                <span style="color: #298242;">EA-ERC-PNG 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a IU, HB y <a href="https://es.wikipedia.org/wiki/Coalici%C3%B3n_por_la_Europa_de_los_Pueblos" target="_blank">EA-ERC-PNG</a>
 sacan seis escaños de ventaja a la suma de AP, CDS y CIU. El PSOE gana a AP por 2775423 votos, AP dobla a CDS en votos, CDS gana a IU por 964263 votos, IU gana a CIU por 158227 votos, CIU dobla a HB en votos y HB gana a EA-ERC-PNG por 34041 votos
                <br><br>
                1989: <a href="https://www.datoselecciones.com/parlamento-europeo-1989" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                <span style="color: #FF0000;">PSOE 27 Escaños</span>
                <span style="color: #0000FF;">PP 15 Escaños</span>  
                <span style="color: #006400;">CDS 5 Escaños</span>
                <span style="color: #d25644;">IU 4 Escaños</span>
                <span style="color: #40E0D0;">CIU 2 Escaños</span> 
                <span style="color: #424a6e;">AGRUPACIÓN RUIZ-MATEOS 2 Escaños</span> 
                <span style="color: #c99f00;">COALICIÓN NACIONALISTA 1 Escaño</span> 
                <span style="color: #15AA35;">PA 1 Escaño</span>
                <span style="color: #1c427f;">IZQUIERDA DE LOS PUEBLOS 1 Escaño</span>
                <span style="color: #01b59c;">HB 1 Escaño</span>
                <span style="color: #298242;">P.E.P 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a IU, <a href="https://es.wikipedia.org/wiki/Coalici%C3%B3n_Nacionalista_(1989)" target="_blank">Coalición Nacionalista</a>, PA, <a href="https://es.wikipedia.org/wiki/Izquierda_de_los_Pueblos_(1989)" target="_blank">Izquierda de los Pueblos</a>, HB y <a href="https://es.wikipedia.org/wiki/Por_la_Europa_de_los_Pueblos_(1989)" target="_blank">P.E.P</a> sacan doce escaños de ventaja
                a la suma de PP, CDS, CIU y <a href="https://es.wikipedia.org/wiki/Agrupaci%C3%B3n_Ruiz-Mateos" target="_blank">Agrupación Ruiz-Mateos</a>.
                El PSOE gana al PP por 2880537 votos, el PP casi triplica a CDS en votos, CDS gana a IU por 171687 votos, IU gana a CIU por 295140 votos, CIU gana a AGRUPACIÓN RUIZ-MATEOS por 58042 votos, AGRUPACIÓN RUIZ-MATEOS dobla a COALICIÓN NACIONALISTA en votos, COALICIÓN NACIONALISTA gana a PA por 7991 votos, PA gana a IZQUIERDA DE LOS PUEBLOS por 4761 votos, IZQUIERDA DE LOS PUEBLOS gana a HB por 21192 votos y HB gana a P.E.P por 30185 votos
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 64 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1994: <a href="https://www.datoselecciones.com/parlamento-europeo-1994" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 28 Escaños</span>  
                    <span style="color: #FF0000;">PSOE 22 Escaños</span>
                    <span style="color: #d25644;">IU 9 Escaños</span>
                    <span style="color: #40E0D0;">CIU 3 Escaños</span> 
                    <span style="color: #c99f00;">COALICIÓN NACIONALISTA 2 Escaños</span> 
                </a>
                <br><br>
                El PP las gana, pero la suma de PSOE, IU y COALICIÓN NACIONALISTA saca dos escaños de ventaja a la suma de PP y CIU. El PP gana al PSOE por 1734193 votos, el PSOE dobla a IU en votos, IU casi triplica a CIU en votos y CIU gana a COALICIÓN NACIONALISTA por 347381 votos
                <br><br>
                1999: <a href="https://www.datoselecciones.com/parlamento-europeo-1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 27 Escaños</span> 
                <span style="color: #FF0000;">PSOE-PROGR 24 Escaños</span>
                <span style="color: #d25644;">IU-EUIA 4 Escaños</span>
                <span style="color: #40E0D0;">CIU 3 Escaños</span> 
                <span style="color: #280080;">CE 2 Escaños</span> 
                <span style="color: #c99f00;">CN-EP 2 Escaños</span> 
                <span style="color: #74b1e0;">BNG 1 Escaño</span>
                <span style="color: #01b59c;">EH 1 Escaño</span>
                </a>
                <br><br>
                El PP las gana y sumando a CIU y CE empatan en escaños a la suma de PSOE-PROGR, IU-EUIA, <a href="https://es.wikipedia.org/wiki/Coalici%C3%B3n_Nacionalista_-_Europa_de_los_Pueblos" target="_blank">CN-EP</a>
, BNG y EH. El PP gana a PSOE-PROGR por 933170 votos, PSOE-PROGR sextuplica a IU-EUIA en votos, IU-EUIA gana a CIU por 283879 votos, CIU gana a CE por 260593 votos, CE gana a CN-EP por 63126 votos, CN-EP gana al BNG por 264889 votos y el BNG gana a EH por 42156 votos 
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 54 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                2004: <a href="https://www.datoselecciones.com/parlamento-europeo-2004" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 25 Escaños</span>
                <span style="color: #0000FF;">PP 24 Escaños</span> 
                <span style="color: #c99f00;">GALEUSCA 2 Escaños</span> 
                <span style="color: #d25644;">IU-ICV-EUIA 2 Escaños</span>
                <span style="color: #298242;">E.P 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a <a href="https://es.wikipedia.org/wiki/Galeusca-Pueblos_de_Europa" target="_blank">GALEUSCA</a>, IU-ICV-EUIA y E.P sacan seis escaños de ventaja al PP. El PSOE gana al PP por 347920 votos, el PP multiplica por ocho a GALEUSCA en votos, GALEUSCA gana a IU-ICV-EUIA por 155680 votos e IU-ICV-EUIA gana a E.P por 262427 votos
                <br><br>
2009: <a href="https://www.datoselecciones.com/parlamento-europeo-2009" target="_blank" style="font-size: 1.5em; font-weight: bold;">
<span style="color: #0000FF;">PP 24 Escaños</span> 
<span style="color: #FF0000;">PSOE 23 Escaños</span>
<span style="color: #280080;">CEU 3 Escaños</span> 
<span style="color: #d25644;">IU-ICV-EUIA-BA 2 Escaños</span>
<span style="color: #d7257d;">UPyD 1 Escaño</span>
<span style="color: #298242;">E.P 1 Escaño</span>
</a>
<br><br>
El PP las gana, pero la suma de PSOE, CEU, IU-ICV-EUIA-BA, UPyD y E.P le saca seis escaños de ventaja. El PP gana al PSOE por 528593 votos, el PSOE multiplica por siete a CEU en votos, CEU gana a IU-ICV-EUIA-BA por 219998 votos, IU-ICV-EUIA-BA gana a UPyD por 136382 votos y UPyD gana a E.P por 56928 votos
<br><br>

2014: <a href="https://www.datoselecciones.com/parlamento-europeo-2014" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 16 Escaños</span> 
<span style="color: #FF0000;">PSOE 14 Escaños</span>
<span style="color: #d25644;">IU-LV 6 Escaños</span>
<span style="color: #800080;">PODEMOS 5 Escaños</span>
<span style="color: #d7257d;">UPyD 4 Escaños</span>
<span style="color: #280080;">CEU 3 Escaños</span> 
<span style="color: #c99f00;">EPDD 2 Escaños</span> 
<span style="color: #FF7F00;">CS 2 Escaños</span>
<span style="color: #a58b59;">LPD 1 Escaño</span>
<span style="color: #33b65a;">PRIMAVERA EUROPEA 1 Escaño</span>
</a>
<br><br>
El PP las gana, pero la suma de PSOE, IU-LV, PODEMOS, UPyD, CEU, EPDD, LPD y PRIMAVERA EUROPEA saca veinticinco escaños de ventaja a la suma de PP y CS. El PP gana al PSOE por 484107 votos, el PSOE dobla a IU-LV en votos, IU-LV gana a PODEMOS por 321471 votos, PODEMOS gana a UPyD por 231605 votos, UPyD gana a CEU por 170261 votos, CEU gana a EPDD por 221899 votos, EPDD gana a CIUDADANOS por 132926 votos, CIUDADANOS gana a LPD por 170682 votos y LPD gana a PRIMAVERA EUROPEA por 24198 votos 
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 59 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2019: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_Europeo_de_2019_(Espa%C3%B1a)" target="_blank" style="font-size: 1.5em; font-weight: bold;">
<span style="color: #FF0000;">PSOE 21 Escaños</span>
<span style="color: #0000FF;">PP 13 Escaños</span> 
<span style="color: #FF7F00;">CS 8 Escaños</span>
<span style="color: #800080;">PODEMOS 6 Escaños</span>
<span style="color: #008000;">VOX 4 Escaños</span>
<span style="color: #c99f00;">AR 3 Escaños</span> 
<span style="color: #40E0D0;">JUNTS 3 Escaños</span> 
<span style="color: #280080;">CEUS 1 Escaño</span> 
</a>
<br><br>
El PSOE las gana y sumando a PODEMOS, AR, JUNTS y CEU sacan nueve escaños de ventaja a la suma de PP, CS y VOX. El PSOE gana al PP por 2850584 votos, el PP gana a CIUDADANOS por 1787380 votos, CIUDADANOS gana a PODEMOS por 472968 votos, PODEMOS gana a VOX por 865173 votos, VOX gana a AR por 141545 votos, AR gana a JUNTS por 233704 votos y JUNTS gana a CEU por 385345 votos.
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 61 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2024: <a href="https://elpais.com/internacional/elecciones/europeas/19/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
<span style="color: #0000FF;">PP 22 Escaños</span> 
<span style="color: #FF0000;">PSOE 20 Escaños</span>
<span style="color: #008000;">VOX 6 Escaños</span>
<span style="color: #c99f00;">AR 3 Escaños</span> 
<span style="color: #FF69B4;">SUMAR 3 Escaños</span>
<span style="color: #755a49;">SALF 3 Escaños</span>
<span style="color: #800080;">PODEMOS 2 Escaños</span>
<span style="color: #40E0D0;">JUNTS 1 Escaño</span> 
<span style="color: #280080;">CEUS 1 Escaño</span> 
</a>
<br><br>
El PP las gana y sumando a VOX y SALF sacan un escaño de ventaja a la suma de PSOE, AR, SUMAR, PODEMOS, JUNTS y CEU. El PP gana al PSOE por 705682 votos, el PSOE triplica a VOX en votos, VOX gana a AR por 827595 votos, AR gana a SUMAR por 42645 votos, SUMAR gana a SALF por 14470 votos, SALF gana a PODEMOS por 225538 votos, PODEMOS gana a JUNTS por 135710 votos y JUNTS gana a CEUS por 157409 votos
<br><br>
En conclusión, España es un país  

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>España</title>
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
function abrirVentanaEscenario61(provincia) {
if (provincia === "España") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">España <span class="escaños">61 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1987: <a href="https://www.datoselecciones.com/parlamento-europeo-1987" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 28 Escaños</span> 
                <span style="color: #ADD8E6;">AP 18 Escaños</span> 
                <span style="color: #006400;">CDS 7 Escaños</span>
                <span style="color: #d25644;">IU 3 Escaños</span>
                <span style="color: #40E0D0;">CIU 3 Escaños</span> 
                <span style="color: #01b59c;">HB 1 Escaño</span>
                <span style="color: #298242;">EA-ERC-PNG 1 Escaño</span>
                </a>
                <br><br>
                AP sube un escaño, pero el PSOE sumando a IU, HB y <a href="https://es.wikipedia.org/wiki/Coalici%C3%B3n_por_la_Europa_de_los_Pueblos" target="_blank">EA-ERC-PNG</a>
 sacan cinco escaños de ventaja a la suma de AP, CDS y CIU. 
                <br><br>
                1989: <a href="https://www.datoselecciones.com/parlamento-europeo-1989" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                <span style="color: #FF0000;">PSOE 28 Escaños</span>
                <span style="color: #0000FF;">PP 15 Escaños</span>  
                <span style="color: #006400;">CDS 5 Escaños</span>
                <span style="color: #d25644;">IU 4 Escaños</span>
                <span style="color: #40E0D0;">CIU 2 Escaños</span> 
                <span style="color: #424a6e;">AGRUPACIÓN RUIZ-MATEOS 2 Escaños</span> 
                <span style="color: #c99f00;">COALICIÓN NACIONALISTA 1 Escaño</span> 
                <span style="color: #15AA35;">PA 1 Escaño</span>
                <span style="color: #1c427f;">IZQUIERDA DE LOS PUEBLOS 1 Escaño</span>
                <span style="color: #01b59c;">HB 1 Escaño</span>
                <span style="color: #298242;">P.E.P 1 Escaño</span>
                </a>
                <br><br>
                El PSOE sube un escaño, por lo que el PSOE sumando a IU, <a href="https://es.wikipedia.org/wiki/Coalici%C3%B3n_Nacionalista_(1989)" target="_blank">Coalición Nacionalista</a>, PA, <a href="https://es.wikipedia.org/wiki/Izquierda_de_los_Pueblos_(1989)" target="_blank">Izquierda de los Pueblos</a>, HB y <a href="https://es.wikipedia.org/wiki/Por_la_Europa_de_los_Pueblos_(1989)" target="_blank">P.E.P</a> sacan trece escaños de ventaja
                a la suma de PP, CDS, CIU y <a href="https://es.wikipedia.org/wiki/Agrupaci%C3%B3n_Ruiz-Mateos" target="_blank">Agrupación Ruiz-Mateos</a>.
                <br><br>
                1994: <a href="https://www.datoselecciones.com/parlamento-europeo-1994" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 27 Escaños</span>  
                    <span style="color: #FF0000;">PSOE 21 Escaños</span>
                    <span style="color: #d25644;">IU 9 Escaños</span>
                    <span style="color: #40E0D0;">CIU 3 Escaños</span> 
                    <span style="color: #c99f00;">COALICIÓN NACIONALISTA 1 Escaño</span> 
                </a>
                <br><br>
                PP, PSOE y COALICIÓN NACIONALISTA pierden un escaño, por lo que la suma de PSOE, IU y COALICIÓN NACIONALISTA saca un escaño de ventaja a la suma de PP y CIU. 
                <br><br>
                1999: <a href="https://www.datoselecciones.com/parlamento-europeo-1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 27 Escaños</span> 
                <span style="color: #FF0000;">PSOE-PROGR 24 Escaños</span>
                <span style="color: #d25644;">IU-EUIA 3 Escaños</span>
                <span style="color: #40E0D0;">CIU 3 Escaños</span> 
                <span style="color: #280080;">CE 2 Escaños</span> 
                <span style="color: #c99f00;">CN-EP 1 Escaño</span> 
                <span style="color: #74b1e0;">BNG 1 Escaño</span>
                </a>
                <br><br>
                IU-EUIA, CN-EP pierden un escaño y EH pierde el único, por lo que el PP sumando a CIU y CE sacan tres escaños de ventaja a la suma de PSOE-PROGR, IU-EUIA, <a href="https://es.wikipedia.org/wiki/Coalici%C3%B3n_Nacionalista_-_Europa_de_los_Pueblos" target="_blank">CN-EP</a>
, BNG y EH. 
                <br><br>
                2004: <a href="https://www.datoselecciones.com/parlamento-europeo-2004" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 28 Escaños</span>
                <span style="color: #0000FF;">PP 27 Escaños</span> 
                <span style="color: #c99f00;">GALEUSCA 3 Escaños</span> 
                <span style="color: #d25644;">IU-ICV-EUIA 2 Escaños</span>
                <span style="color: #298242;">E.P 1 Escaño</span>
                </a>
                <br><br>
                PSOE y PP suben tres escaños y GALEUSCA sube un escaño, por lo que el PSOE sumando a <a href="https://es.wikipedia.org/wiki/Galeusca-Pueblos_de_Europa" target="_blank">GALEUSCA</a>, IU-ICV-EUIA y E.P sacan siete escaños de ventaja al PP. 
                <br><br>
2009: <a href="https://www.datoselecciones.com/parlamento-europeo-2009" target="_blank" style="font-size: 1.5em; font-weight: bold;">
<span style="color: #0000FF;">PP 28 Escaños</span> 
<span style="color: #FF0000;">PSOE 26 Escaños</span>
<span style="color: #280080;">CEU 3 Escaños</span> 
<span style="color: #d25644;">IU-ICV-EUIA-BA 2 Escaños</span>
<span style="color: #d7257d;">UPyD 1 Escaño</span>
<span style="color: #298242;">E.P 1 Escaño</span>
</a>
<br><br>
El PP sube cuatro escaños y el PSOE tres escaños, por lo que  la suma de PSOE, CEU, IU-ICV-EUIA-BA, UPyD y E.P le saca cinco escaños de ventaja al PP
<br><br>

2014: <a href="https://www.datoselecciones.com/parlamento-europeo-2014" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 19 Escaños</span> 
<span style="color: #FF0000;">PSOE 16 Escaños</span>
<span style="color: #d25644;">IU-LV 7 Escaños</span>
<span style="color: #800080;">PODEMOS 5 Escaños</span>
<span style="color: #d7257d;">UPyD 4 Escaños</span>
<span style="color: #280080;">CEU 3 Escaños</span> 
<span style="color: #c99f00;">EPDD 2 Escaños</span> 
<span style="color: #FF7F00;">CS 2 Escaños</span>
<span style="color: #a58b59;">LPD 1 Escaño</span>
<span style="color: #33b65a;">PRIMAVERA EUROPEA 1 Escaño</span>
<span style="color: #008000;">VOX 1 Escaño</span>
</a>
<br><br>
El PP sube tres escaños, el PSOE sube dos escaños, IU-LV sube un escaño y VOX aparece con un escaño, por lo que la suma de PSOE, IU-LV, PODEMOS, UPyD, CEU, EPDD, LPD y PRIMAVERA EUROPEA saca diecisiete escaños de ventaja a la suma de PP, CS y VOX.
<br><br>
2019: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_Europeo_de_2019_(Espa%C3%B1a)" target="_blank" style="font-size: 1.5em; font-weight: bold;">
<span style="color: #FF0000;">PSOE 22 Escaños</span>
<span style="color: #0000FF;">PP 14 Escaños</span> 
<span style="color: #FF7F00;">CS 8 Escaños</span>
<span style="color: #800080;">PODEMOS 6 Escaños</span>
<span style="color: #008000;">VOX 4 Escaños</span>
<span style="color: #c99f00;">AR 3 Escaños</span> 
<span style="color: #40E0D0;">JUNTS 3 Escaños</span> 
<span style="color: #280080;">CEUS 1 Escaño</span> 
</a>
<br><br>
PSOE y PP suben un escaño, por lo que el PSOE sumando a PODEMOS, AR, JUNTS y CEU sacan nueve escaños de ventaja a la suma de PP, CS y VOX. 
<br><br>
2024: <a href="https://elpais.com/internacional/elecciones/europeas/19/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
<span style="color: #0000FF;">PP 22 Escaños</span> 
<span style="color: #FF0000;">PSOE 20 Escaños</span>
<span style="color: #008000;">VOX 6 Escaños</span>
<span style="color: #c99f00;">AR 3 Escaños</span> 
<span style="color: #FF69B4;">SUMAR 3 Escaños</span>
<span style="color: #755a49;">SALF 3 Escaños</span>
<span style="color: #800080;">PODEMOS 2 Escaños</span>
<span style="color: #40E0D0;">JUNTS 1 Escaño</span> 
<span style="color: #280080;">CEUS 1 Escaño</span> 
</a>
<br><br>
IGUAL
<br><br>
En conclusión, España es un país  

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>España</title>
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

