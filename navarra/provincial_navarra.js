    function abrirVentana(provincia) {

if (provincia === "Navarra") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Navarra <span class="escaños">70 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1979: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Navarra_de_1983" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 20 Escaños</span>      
        <span style="color: #FF0000;">PSOE 15 Escaños</span> 
                <span style="color: #8B4513;">UPN 13 Escaños</span>
                <span style="color: #01b59c;">HB 9 Escaños</span>
                <span style="color: #01b59c;">AMAIUR 7 Escaños</span>
                <span style="color: #65ff98;">NV 3 Escaños</span>
                <span style="color: #fa4447;">EKA 1 Escaño</span>
                <span style="color: #000000;">UNAI 1 Escaño</span>
                <span style="color: #505050;">IFN 1 Escaño</span> 
                </a>
                <br><br>
                UCD las gana y sumando a UPN y <a href="https://es.wikipedia.org/wiki/Nacionalistas_Vascos">NV</a>
 sacan dos escaños de ventaja a la suma de PSOE,HB,AMAIUR, <a href="https://es.wikipedia.org/wiki/Partido_Carlista_de_Euskal_Herria_(1974)">EKA</a>
, <a href="https://es.wikipedia.org/wiki/Uni%C3%B3n_Navarra_de_Izquierdas">UNAI</a>
 e <a href="https://es.wikipedia.org/wiki/Agrupaci%C3%B3n_Electoral_Independientes_Forales_Navarros">IFN</a>
                <br><br>
    <h1 style="color: black;"><span class="escaños">Pasa a 50 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1983: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Navarra_de_1983" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 20 Escaños</span> 
                <span style="color: #8B4513;">UPN 13 Escaños</span>
                <span style="color: #ADD8E6;">AP-PDP-UL 8 Escaños</span> 
                <span style="color: #01b59c;">HB 6 Escaños</span>
                <span style="color: #298242;">EAJ-PNV 3 Escaños</span> 
                </a>
                <br><br>
                El PSOE las gana y sumando a HB y PNV sacan tres escaños por encima de la mayoría absoluta. El PSOE gana a UPN por 32665 votos, UPN gana a AP-PDP-UL por 24518 votos, AP-PDP-UL gana a HB por 9499 votos y HB gana a EAJ-PNV por 9886 votos
                <br><br>
                1987: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Navarra_de_1987" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                <span style="color: #FF0000;">PSOE 15 Escaños</span>
                <span style="color: #8B4513;">UPN 14 Escaños</span>
                <span style="color: #01b59c;">HB 7 Escaños</span>
                <span style="color: #006400;">CDS 4 Escaños</span>
                <span style="color: #69ad60;">EA 4 Escaños</span> 
                <span style="color: #ecac2f;">UDF 3 Escaños</span> 
                <span style="color: #ADD8E6;">AP 2 Escaños</span> 
                <span style="color: #DC143C ;">EE 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a HB, EA y EE sacan un escaño por encima de la mayoría absoluta, aunque el PSOE llega a un acuerdo con UPN. El PSOE gana a UPN por 9034 votos, UPN gana a HB por 31281 votos, HB gana a CDS por 17116 votos, CDS gana a EA por tan solo 1182 votos, EA gana a UDF (Unión Demócrata Foral (UDF) fue el nombre de una coalición electoral española de ámbito navarro, La formaban el Partido Demócrata Popular, el Partido Liberal, que habían abandonado poco antes Coalición Popular, y un pequeño partido democristiano de ámbito navarro, el Partido Demócrata Foral.) por 2177 votos, UDF gana a AP por 5768 votos y AP gana a EE por 2277 votos 
                <br><br>
                1991: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Navarra_de_1991" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #8B4513;">UPN 20 Escaños</span>
                    <span style="color: #FF0000;">PSOE 19 Escaños</span>
                    <span style="color: #01b59c;">HB 6 Escaños</span>
                    <span style="color: #69ad60;">EA 3 Escaños</span>
                    <span style="color: #d25644;">IUN 2 Escaños</span>
                </a>
                <br><br>
                UPN las gana y aunque PSOE, HB, EA e IUN suman cuatro escaños por encima de la mayoría absoluta,  fue elegido presidente Juan Cruz Alli Aranguren (UPN) como cabeza de la lista más votada gracias a que se presentaron en una sola lista todas las fuerzas de centro derecha de Navarra. UPN gana al PSOE por 4360 votos, el PSOE casi triplica a HB en votos, HB dobla a EA en votos y EA gana a IUN por 4003 votos
                <br><br>
                1995: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Navarra_de_1995" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #8B4513;">UPN 17 Escaños</span>
                <span style="color: #FF0000;">PSOE 11 Escaños</span>
                <span style="color: #956054;">CDN 10 Escaños</span>
                <span style="color: #d25644;">IU-EB 5 Escaños</span>
                <span style="color: #01b59c;">HB 5 Escaños</span>
                <span style="color: #69ad60;">EA 2 Escaños</span>
                </a>
                <br><br>
                UPN las gana y aunque sumando a CDN sacan un escaño por encima de la mayoría absoluta, el PSOE llega a un pacto con CDN (Convergencia de Demócratas de Navarra (CDN) fue un partido político español de ideología centrista y regionalista[1]​ que actuaba exclusivamente en el ámbito de la Comunidad Foral de Navarra. Fundado en 1995, el partido se escindió de Unión del Pueblo Navarro (UPN) después de que este partido pasase a actuar como la sucursal navarra del Partido Popular (PP)),IU-EB y EA, por lo que sacan dos escaños por encima de la mayoría absoluta. UPN gana al PSOE por 31142 votos, el PSOE gana a CDN por 6868 votos, CDN gana a IU-EB por 27380 votos, IU-EB gana a HB por tan solo 369 votos y HB dobla a EA en votos 
                <br><br>
                1999: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Navarra_de_1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #8B4513;">UPN 22 Escaños</span>
                <span style="color: #FF0000;">PSOE 11 Escaños</span>
                <span style="color: #01b59c;">EH 8 Escaños</span>
                <span style="color: #d25644;">IU-EB 3 Escaños</span>
                <span style="color: #956054;">CDN 3 Escaños</span>
                <span style="color: #69ad60;">EA/EAJ-PNV 3 Escaños</span>
                </a>
                <br><br>
                UPN las gana y aunque sumando con CDN empatan en escaños a la suma de PSOE, EH, IU-EB y EA/EAJ-PNV, UPN pacta con el PSOE y juntos sacan siete escaños por encima de la mayoría absoluta. UPN dobla al PSOE en votos, el PSOE gana a EH por 14260 votos, <a href="https://es.wikipedia.org/wiki/Euskal_Herritarrok">EH</a>
 dobla a IU-EB en votos, IU-EB gana a CDN por tan solo 58 votos y CDN gana a EA/EAJ-PNV por 4309 votos
                <br><br>
                2003: <a href="https://www.datoselecciones.com/comunidad-foral-de-navarra-parlamento-2003" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #8B4513;">UPN 23 Escaños</span>
                <span style="color: #FF0000;">PSOE 11 Escaños</span>
                <span style="color: #d25644;">IUN-NEB 4 Escaños</span>
                <span style="color: #692d3e;">ARALAR 4 Escaños</span>
                <span style="color: #956054;">CDN 4 Escaños</span>
                <span style="color: #69ad60;">EA/EAJ-PNV 4 Escaños</span>
                </a>
                <br><br>
                UPN las gana y sumando a CDN sacan un escaño por encima de la mayoría absoluta. UPN gana al PSOE por 62457 votos, el PSOE dobla a IUN-NEB en votos, IUN-NEB gana a <a href="https://es.wikipedia.org/wiki/Aralar">ARALAR</a> por 5624 votos, ARALAR gana a CDN por tan solo 552 votos y CDN gana a EA/EAJ-PNV por tan solo 692 votos 
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/13/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #8B4513;">UPN 22 Escaños</span>
                    <span style="color: #298242;">NA-BAI 12 Escaños</span>
                    <span style="color: #FF0000;">PSOE 12 Escaños</span>
                    <span style="color: #956054;">CDN 2 Escaños</span>
                <span style="color: #d25644;">IUN-NEB 2 Escaños</span>
</a>
<br><br>
UPN las gana, pero aunque NA-BAI, PSOE y IUN-NEB sacan la mayoría absoluta exacta, tras barajarse una posible coalición PSN-NaBai-IU, apoyado por la dirección local del PSN, la dirección federal del PSOE la vetó, con lo que se reeditó el gobierno de UPN-CDN. UPN gana a NaBai por 61229 votos, NaBai gana al PSOE por 3736 votos, el PSOE quintuplica en votos a CDN y CDN gana a IUN-NEB por tan solo 81 votos 
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/13/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #8B4513;">UPN 19 Escaños</span>
    <span style="color: #FF0000;">PSOE 9 Escaños</span>
    <span style="color: #298242;">NA-BAI 8 Escaños</span>
    <span style="color: #01b59c;">BILDU 7 Escaños</span>
    <span style="color: #0000FF;">PP 4 Escaños</span>
    <span style="color: #d25644;">I-E 3 Escaños</span>
</a>
<br><br>
UPN las gana y aunque suamndo al PP se queda a tres escaños de la absoluta, el PSOE se alía con UPN. UPN dobla al PSOE en votos, el PSOE gana a NABAI por tan solo 1411 votos, NABAI gana a BILDU por 6911 votos, BILDU gana al PP por 19365 votos y el PP gana a <a href="https://es.wikipedia.org/wiki/Izquierda-Ezkerra">I-E</a> por 5094 votos 
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/13/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #8B4513;">UPN 15 Escaños</span>
    <span style="color: #e99992;">GBAI 9 Escaños</span> 
    <span style="color: #01b59c;">EHBILDU 8 Escaños</span>
    <span style="color: #800080;">PODEMOS 7 Escaños</span>
    <span style="color: #FF0000;">PSOE 7 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #d25644;">I-E 2 Escaños</span>
</a>
<br><br>
UPN las gana, pero la suma de GBAI, EHBILDU, PODEMOS, PSOE e I-E sacan siete escaños por encima de la mayoría absoluta. UPN gana a GBAI por 39208 votos, GBAI gana a EHBILDU por 5331 votos, EHBILDU gana a PODEMOS por tan solo 1959 votos, PODEMOS gana al PSOE por tan solo 1043 votos, el PSOE triplica al PP en votos y el PP gana a I-E por tan solo 807 votos
<br><br>

2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/13/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #8B4513;">NAVARRA SUMA 20 Escaños</span>
    <span style="color: #FF0000;">PSOE 11 Escaños</span>
    <span style="color: #e99992;">GBAI 9 Escaños</span> 
    <span style="color: #01b59c;">EHBILDU 7 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #d25644;">I-E 1 Escaño</span>
</a>
<br><br>
NAVARRA SUMA las gana, pero la suma de PSOE, GBAI, PODEMOS, I-E y dos votos en contra y una abstención de EHBILDU sacan cuatro escaños por encima de la mayoría absoluta. NAVARRA SUMA gana al PSOE por 55508 votos, el PSOE gana a GBAI por 11515 votos, GBAI gana a EHBILDU por 9692 votos, EHBILDU triplica a PODEMOS en votos y PODEMOS gana a I-E por 6046 votos
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/13/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #8B4513;">UPN 15 Escaños</span>
    <span style="color: #FF0000;">PSOE 11 Escaños</span>
    <span style="color: #01b59c;">EHBILDU 9 Escaños</span>
    <span style="color: #e99992;">GBAI 7 Escaños</span> 
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #800080;">CN-ZN 3 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span>
</a>
<br><br>
UPN las vuelve a ganar, pero la suma de PSOE, GBAI, <a href="https://es.wikipedia.org/wiki/Contigo_Navarra-Zurekin_Nafarroa" target="_blank">CN-ZN</a> y la abstención de EHBILDU sacan cuatro escaños por encima de la mayoría absoluta.UPN gana al PSOE por 24145 votos, el PSOE gana a EHBILDU por 11712 votos, EHBILDU gana a GBAI por 12875 votos, GBAI gana al PP por 19641 votos, el PP gana a CN-ZN por 3924 votos y CN-ZN gana a VOX por 5898 votos
<br><br>
En conclusión, Navarra es una comunidad autónoma 
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Navarra</title>
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
function abrirVentanaEscenario50Navarra(provincia) {
if (provincia === "Navarra") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Navarra <span class="escaños">50 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1979: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Navarra_de_1983" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 15 Escaños</span>      
        <span style="color: #FF0000;">PSOE 11 Escaños</span> 
                <span style="color: #8B4513;">UPN 9 Escaños</span>
                <span style="color: #01b59c;">HB 6 Escaños</span>
                <span style="color: #01b59c;">AMAIUR 4 Escaños</span>
                <span style="color: #65ff98;">NV 2 Escaños</span>
                <span style="color: #fa4447;">EKA 2 Escaños</span>
                <span style="color: #000000;">UNAI 1 Escaño</span> 
                </a>
                <br><br>
                UCD las gana y sumando a UPN y NV sacan dos escaños de ventaja a la suma de PSOE, HB, AMAIUR, EKA y UNAI. IFN pierde la representación
                <br><br>
                1983: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Navarra_de_1983" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 20 Escaños</span> 
                <span style="color: #8B4513;">UPN 13 Escaños</span>
                <span style="color: #ADD8E6;">AP-PDP-UL 8 Escaños</span> 
                <span style="color: #01b59c;">HB 6 Escaños</span>
                <span style="color: #298242;">EAJ-PNV 3 Escaños</span> 
                </a>
                <br><br>
                IGUAL
                <br><br>
                1987: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Navarra_de_1987" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                <span style="color: #FF0000;">PSOE 15 Escaños</span>
                <span style="color: #8B4513;">UPN 14 Escaños</span>
                <span style="color: #01b59c;">HB 7 Escaños</span>
                <span style="color: #006400;">CDS 4 Escaños</span>
                <span style="color: #69ad60;">EA 4 Escaños</span> 
                <span style="color: #ecac2f;">UDF 3 Escaños</span> 
                <span style="color: #ADD8E6;">AP 2 Escaños</span> 
                <span style="color: #DC143C ;">EE 1 Escaño</span>
                </a>
                <br><br>
                IGUAL 
                <br><br>
                1991: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Navarra_de_1991" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #8B4513;">UPN 20 Escaños</span>
                    <span style="color: #FF0000;">PSOE 19 Escaños</span>
                    <span style="color: #01b59c;">HB 6 Escaños</span>
                    <span style="color: #69ad60;">EA 3 Escaños</span>
                    <span style="color: #d25644;">IUN 2 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1995: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Navarra_de_1995" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #8B4513;">UPN 17 Escaños</span>
                <span style="color: #FF0000;">PSOE 11 Escaños</span>
                <span style="color: #956054;">CDN 10 Escaños</span>
                <span style="color: #d25644;">IU-EB 5 Escaños</span>
                <span style="color: #01b59c;">HB 5 Escaños</span>
                <span style="color: #69ad60;">EA 2 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1999: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Navarra_de_1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #8B4513;">UPN 22 Escaños</span>
                <span style="color: #FF0000;">PSOE 11 Escaños</span>
                <span style="color: #01b59c;">EH 8 Escaños</span>
                <span style="color: #d25644;">IU-EB 3 Escaños</span>
                <span style="color: #956054;">CDN 3 Escaños</span>
                <span style="color: #69ad60;">EA/EAJ-PNV 3 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                2003: <a href="https://www.datoselecciones.com/comunidad-foral-de-navarra-parlamento-2003" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #8B4513;">UPN 23 Escaños</span>
                <span style="color: #FF0000;">PSOE 11 Escaños</span>
                <span style="color: #d25644;">IUN-NEB 4 Escaños</span>
                <span style="color: #692d3e;">ARALAR 4 Escaños</span>
                <span style="color: #956054;">CDN 4 Escaños</span>
                <span style="color: #69ad60;">EA/EAJ-PNV 4 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/13/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #8B4513;">UPN 22 Escaños</span>
                    <span style="color: #298242;">NA-BAI 12 Escaños</span>
                    <span style="color: #FF0000;">PSOE 12 Escaños</span>
                    <span style="color: #956054;">CDN 2 Escaños</span>
                <span style="color: #d25644;">IUN-NEB 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/13/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #8B4513;">UPN 19 Escaños</span>
    <span style="color: #FF0000;">PSOE 9 Escaños</span>
    <span style="color: #298242;">NA-BAI 8 Escaños</span>
    <span style="color: #01b59c;">BILDU 7 Escaños</span>
    <span style="color: #0000FF;">PP 4 Escaños</span>
    <span style="color: #d25644;">I-E 3 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/13/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #8B4513;">UPN 15 Escaños</span>
    <span style="color: #e99992;">GBAI 9 Escaños</span> 
    <span style="color: #01b59c;">EHBILDU 8 Escaños</span>
    <span style="color: #800080;">PODEMOS 7 Escaños</span>
    <span style="color: #FF0000;">PSOE 7 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #d25644;">I-E 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/13/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #8B4513;">NAVARRA SUMA 20 Escaños</span>
    <span style="color: #FF0000;">PSOE 11 Escaños</span>
    <span style="color: #e99992;">GBAI 9 Escaños</span> 
    <span style="color: #01b59c;">EHBILDU 7 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #d25644;">I-E 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/13/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #8B4513;">UPN 15 Escaños</span>
    <span style="color: #FF0000;">PSOE 11 Escaños</span>
    <span style="color: #01b59c;">EHBILDU 9 Escaños</span>
    <span style="color: #e99992;">GBAI 7 Escaños</span> 
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #800080;">CN-ZN 3 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Navarra es una comunidad autónoma 
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Navarra</title>
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