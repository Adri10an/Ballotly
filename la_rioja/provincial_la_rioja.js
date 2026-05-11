    function abrirVentana(provincia) {

if (provincia === "La Rioja") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">La Rioja <span class="escaños">35 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1983: <a href="https://www.datoselecciones.com/la-rioja-parlamento-1983" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 18 Escaños</span> 
                <span style="color: #ADD8E6;">AP-PDP-UL 15 Escaños</span> 
                <span style="color: #65a904;">PRP 2 Escaño</span> 
                </a>
                <br><br>
                El PSOE las gana sacando un escaño de ventaja a la suma de AP-PDP-UL y PRP (Partido Riojano (PR+) es un partido político español de centro progresista, regionalista riojano y europeísta de La Rioja. Ocupaba habitualmente desde su creación dos escaños en el Parlamento de La Rioja, siendo la tercera fuerza política de la comunidad, hasta las elecciones de 2015, en las que no logró representación parlamentaria.). El PSOE gana a AP-PDP-UL por 9727 votos y AP-PDP-UL quintuplica en votos a PRP
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 33 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1987: <a href="https://www.datoselecciones.com/la-rioja-parlamento-1987" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                <span style="color: #FF0000;">PSOE 14 Escaños</span>
                <span style="color: #ADD8E6;">FAP 13 Escaños</span>
                <span style="color: #006400;">CDS 4 Escaños</span>
                <span style="color: #65a904;">PRP 2 Escaño</span> 
                </a>
                <br><br>
                El PSOE las gana, pero la suma de FAP y PRP le saca un escaño de ventaja, que con la abstención de CDS consigue llevar a la presidencia a FAP. El PSOE gana a FAP por 6999 votos, FAP triplica a CDS en votos y CDS gana a PRP por 6428 votos
                <br><br>
                1991: <a href="https://www.datoselecciones.com/la-rioja-parlamento-1991" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 16 Escaños</span>
                    <span style="color: #0000FF;">PP 15 Escaños</span>  
                    <span style="color: #65a904;">PR 2 Escaño</span> 
                </a>
                <br><br>
                El PSOE las gana y sumando a PR sacan tres escaños de ventaja al PP. El PSOE gana al PP por tan solo 967 votos y el PP multiplica por siete a PR en votos
                <br><br>
                1995: <a href="https://www.datoselecciones.com/la-rioja-parlamento-1995" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 17 Escaños</span> 
                <span style="color: #FF0000;">PSOE 12 Escaño</span>
                <span style="color: #d25644;">IU 2 Escaños</span>
                <span style="color: #65a904;">PR 2 Escaño</span> 
                </a>
                <br><br>
                El PP las gana sacando un escaño de ventaja a la suma de PSOE, IU y PR. El PP gana al PSOE por 25368 votos, el PSOE cuadriplica a IU en votos e IU gana a PR por tan solo 852 votos
                <br><br>
                1999: <a href="https://www.datoselecciones.com/la-rioja-parlamento-1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 18 Escaños</span> 
                <span style="color: #FF0000;">PSOE 13 Escaños</span>
                <span style="color: #65a904;">PR 2 Escaño</span> 
                </a>
                <br><br>
                El PP las gana sacando tres escaños de ventaja a la suma de PSOE y PR.El PP gana al PSOE por 24945 votos y el PSOE multiplica por seis a PR
                <br><br>
                2003: <a href="https://www.datoselecciones.com/la-rioja-parlamento-2003" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 17 Escaños</span> 
                <span style="color: #FF0000;">PSOE 14 Escaños</span>
                <span style="color: #65a904;">PR 2 Escaño</span> 
                </a>
                <br><br>
                El PP las gana sacando un escaño de ventaja a la suma de PSOE y PR.El PP gana al PSOE por 18123 votos y el PSOE quintuplica en votos a PR 
                <br><br>
                2007: <a href="https://www.datoselecciones.com/la-rioja-parlamento-2007" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 17 Escaños</span> 
    <span style="color: #FF0000;">PSOE 14 Escaños</span>
    <span style="color: #65a904;">PR 2 Escaño</span> 
</a>
<br><br>
De nuevo, el PP vuelve a ganar las elecciones sacando un escaño de ventaja a la suma de PSOE y PR. El PP gana al PSOE por 14524 votos y el PSOE multiplica por seis a PR
<br><br>

2011: <a href="https://www.datoselecciones.com/la-rioja-parlamento-2011" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 20 Escaños</span> 
    <span style="color: #FF0000;">PSOE 11 Escaños</span>
    <span style="color: #65a904;">PR 2 Escaño</span>
</a>
<br><br>
El PP saca una hipermayoría absoluta sacando siete escaños de ventaja a la suma de PSOE y PR. El PP gana al PSOE por 35806 votos y el PSOE quintuplica en votos a PR
<br><br>

2015: <a href="https://www.datoselecciones.com/la-rioja-parlamento-2015" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 15 Escaños</span> 
    <span style="color: #FF0000;">PSOE 10 Escaños</span>
    <span style="color: #800080;">PODEMOS 4 Escaños</span>
    <span style="color: #FF7F00;">CS 4 Escaños</span>
</a>
<br><br>
El PP sigue siendo la fuerza más votada y sumando a CIUDADANOS sacan cinco escaños de ventaja a la suma de PSOE y PODEMOS. El PP gana al PSOE por 19405 votos, el PSOE dobla a PODEMOS en votos y PODEMOS gana a CIUDADANOS por tan solo 1160 votos
<br><br>

2019: <a href="https://www.datoselecciones.com/la-rioja-parlamento-2019" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 15 Escaños</span>
    <span style="color: #0000FF;">PP 12 Escaños</span> 
    <span style="color: #FF7F00;">CS 4 Escaños</span>
    <span style="color: #800080;">PODEMOS-IU-EQUO 2 Escaños</span>
</a>
<br><br>
El PSOE las gana y sumando a PODEMOS-IU-EQUO sacan un escaño de ventaja a la suma de PP y CIUDADANOS. El PSOE gana al PP por 9155 votos, el PP casi triplica a CIUDADANOS en votos y CIUDADANOS gana a PODEMOS por 7957 votos
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/16/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 17 Escaños</span> 
    <span style="color: #FF0000;">PSOE 12 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
</a>
<br><br>
El PP las gana con mayoría absoluta y sumando a VOX sacan cinco escaños de ventaja a la suma de PSOE y PODEMOS. El PP gana al PSOE por 22643 votos, el PSOE cuadruplica a VOX en votos y VOX gana a PODEMOS por 4230 votos. PODEMOS conserva sus dos escaños por tan solo 155 votos
<br><br>
En conclusión, La Rioja es una comunidad autónoma claramente de derechas. La izquierda solo consigue gobernar en tres elecciones: en 1983 con mayoría absoluta, las primeras, en 1991 gracias a un pacto con PR y en 2019 donde gobierna el PSOE en coalición con PODEMOS sacando tambien un solo escaño de ventaja a la derecha.
En 1987 como PRP apoyo a FAP el gobierno es de derechas, CDS se abstiene. En 1995 recupera el gobierno el PP y saca mayorías absolutas hasta 2011, donde saca su mayoría absoluta más amplia con tres escaños por encima de la mayoría absoluta.
En 2015 la pierde, pero la derecha retiene el gobierno gracias a la abstención de CIUDADANOS, por lo que a pesar del fuerte efecto del 15M, la izquierda no logra arrebatar el gobierno a la derecha, que es lo que harían en 2019, pero en 2023, el PP por sí solo saca mayoría y además cuenta con dos escaños de VOX.
En cuanto al partido Riojano, este partido fue relevante para formar gobierno en 1987 y 1991. Hace de partido bisagra y aunque apoya a la derecha en 1987, aún no habiendo sido FAP la fuerza más votada, apoya más tarde a la izquierda en 1991 dando la presidencia al PSOE, que si era la fuerza más votada. Siempre había sacado dos escaños desde 1983
hasta 2011, pero en el 2015 con el surgimiento de la nueva política y los partidos de PODEMOS y CIUDADANOS pierde toda su representación, representación que no ha vuelto a recuperar
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>La Rioja</title>
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
function abrirVentanaEscenario33(provincia) {
if (provincia === "La Rioja") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">La Rioja <span class="escaños">33 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://www.datoselecciones.com/la-rioja-parlamento-1983" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 17 Escaños</span> 
                <span style="color: #ADD8E6;">AP-PDP-UL 14 Escaños</span> 
                <span style="color: #65a904;">PRP 2 Escaño</span> 
                </a>
                <br><br>
                PSOE y AP-PDP-UL pierden un escaño, por lo que el PSOE saca un escaño de ventaja a la suma de AP-PDP-UL y PRP
                <br><br>
                1987: <a href="https://www.datoselecciones.com/la-rioja-parlamento-1987" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                <span style="color: #FF0000;">PSOE 14 Escaños</span>
                <span style="color: #ADD8E6;">FAP 13 Escaños</span>
                <span style="color: #006400;">CDS 4 Escaños</span>
                <span style="color: #65a904;">PRP 2 Escaño</span> 
                </a>
                <br><br>
                IGUAL
                <br><br>
                1991: <a href="https://www.datoselecciones.com/la-rioja-parlamento-1991" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 16 Escaños</span>
                    <span style="color: #0000FF;">PP 15 Escaños</span>  
                    <span style="color: #65a904;">PR 2 Escaño</span> 
                </a>
                <br><br>
                IGUAL
                <br><br>
                1995: <a href="https://www.datoselecciones.com/la-rioja-parlamento-1995" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 17 Escaños</span> 
                <span style="color: #FF0000;">PSOE 12 Escaño</span>
                <span style="color: #d25644;">IU 2 Escaños</span>
                <span style="color: #65a904;">PR 2 Escaño</span> 
                </a>
                <br><br>
                IGUAL
                <br><br>
                1999: <a href="https://www.datoselecciones.com/la-rioja-parlamento-1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 18 Escaños</span> 
                <span style="color: #FF0000;">PSOE 13 Escaños</span>
                <span style="color: #65a904;">PR 2 Escaño</span> 
                </a>
                <br><br>
                IGUAL
                <br><br>
                2003: <a href="https://www.datoselecciones.com/la-rioja-parlamento-2003" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 17 Escaños</span> 
                <span style="color: #FF0000;">PSOE 14 Escaños</span>
                <span style="color: #65a904;">PR 2 Escaño</span> 
                </a>
                <br><br>
                IGUAL
                <br><br>
                2007: <a href="https://www.datoselecciones.com/la-rioja-parlamento-2007" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 17 Escaños</span> 
    <span style="color: #FF0000;">PSOE 14 Escaños</span>
    <span style="color: #65a904;">PR 2 Escaño</span> 
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://www.datoselecciones.com/la-rioja-parlamento-2011" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 20 Escaños</span> 
    <span style="color: #FF0000;">PSOE 11 Escaños</span>
    <span style="color: #65a904;">PR 2 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://www.datoselecciones.com/la-rioja-parlamento-2015" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 15 Escaños</span> 
    <span style="color: #FF0000;">PSOE 10 Escaños</span>
    <span style="color: #800080;">PODEMOS 4 Escaños</span>
    <span style="color: #FF7F00;">CS 4 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2019: <a href="https://www.datoselecciones.com/la-rioja-parlamento-2019" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 15 Escaños</span>
    <span style="color: #0000FF;">PP 12 Escaños</span> 
    <span style="color: #FF7F00;">CS 4 Escaños</span>
    <span style="color: #800080;">PODEMOS-IU-EQUO 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/16/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 17 Escaños</span> 
    <span style="color: #FF0000;">PSOE 12 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>
En conclusión, La Rioja es una comunidad autónoma claramente de derechas. La izquierda solo consigue gobernar en tres elecciones: en 1983 con mayoría absoluta, las primeras, en 1991 gracias a un pacto con PR y en 2019 donde gobierna el PSOE en coalición con PODEMOS sacando tambien un solo escaño de ventaja a la derecha.
En 1987 como PRP apoyo a FAP el gobierno es de derechas, CDS se abstiene. En 1995 recupera el gobierno el PP y saca mayorías absolutas hasta 2011, donde saca su mayoría absoluta más amplia con tres escaños por encima de la mayoría absoluta.
En 2015 la pierde, pero la derecha retiene el gobierno gracias a la abstención de CIUDADANOS, por lo que a pesar del fuerte efecto del 15M, la izquierda no logra arrebatar el gobierno a la derecha, que es lo que harían en 2019, pero en 2023, el PP por sí solo saca mayoría y además cuenta con dos escaños de VOX.
En cuanto al partido Riojano, este partido fue relevante para formar gobierno en 1987 y 1991. Hace de partido bisagra y aunque apoya a la derecha en 1987, aún no habiendo sido FAP la fuerza más votada, apoya más tarde a la izquierda en 1991 dando la presidencia al PSOE, que si era la fuerza más votada. Siempre había sacado dos escaños desde 1983
hasta 2011, pero en el 2015 con el surgimiento de la nueva política y los partidos de PODEMOS y CIUDADANOS pierde toda su representación, representación que no ha vuelto a recuperar
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>La Rioja</title>
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