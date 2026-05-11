    function abrirVentana(provincia) {

if (provincia === "El Hierro") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">El Hierro <span class="escaños">3 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1983" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #ADD8E6;">AP-PDP-UL 1 Escaño</span> 
                <span style="color: #FF0000;">PSOE 1 Escaño</span>  
                <span style="color: #018001;">AHI 1 Escaño</span> 
                </a>
                <br><br>
                AP-PDP-UL las gana, pero la suma de PSOE y AHI le saca un escaño de ventaja. AP-PDP-UL gana al PSOE por tan solo 48 votos y el PSOE gana a AHI por tan solo 30 votos
                <br><br>
                1987: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1987" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #018001;">AHI 2 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 1 Escaño</span>  
                </a>
                <br><br>
                AHI las gana duplicando en escaños al PSOE.
                <br><br>
                1991: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1991" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #018001;">AHI 1 Escaño</span> 
                    <span style="color: #0000FF;">PP 1 Escaño</span> 
                    <span style="color: #FF0000;">PSOE 1 Escaño</span> 
                </a>
                <br><br>
                AHI las gana y sumando al PSOE sacan un escaño de ventaja al PP.
                <br><br>
                1995: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1995" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #018001;">AHI 1 Escaño</span> 
                    <span style="color: #0000FF;">PP 1 Escaño</span> 
                    <span style="color: #FF0000;">PSOE 1 Escaño</span> 
                </a>
                <br><br>
                AHI las gana y sumando al PP sacan un escaño de ventaja al PSOE
                <br><br>
                1999: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #018001;">AHI 2 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 1 Escaño</span>  
                </a>
                <br><br>
                AHI las gana duplicando en escaños al PSOE
                <br><br>
                2003: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_2003" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #01add7;">CCA 2 Escaños</span>
                    <span style="color: #0000FF;">PP 1 Escaño</span> 
                </a>
                <br><br>
                CCA las gana duplicando en escaños al PP
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/05/3807.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #01add7;">CCA-AHI 2 Escaños</span>
                    <span style="color: #FF0000;">PSOE 1 Escaño</span>  

</a>
<br><br>
CCA-AHI las gana doblando en escaños y en votos al PSOE y el PSOE gana al PP por 235 votos
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/05/3807.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #01add7;">AHI-CCA 1 Escaño</span>
                    <span style="color: #FF0000;">PSOE 1 Escaño</span>  
                    <span style="color: #0000FF;">PP 1 Escaño</span> 
</a>
<br><br>
AHI-CCA las gana y sumando al PSOE doblan en escaños al PP. AHI-CCA gana al PSOE por tan solo 109 votos y el PSOE gana al PP por tan solo 521 votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/05/3807.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #01add7;">CCA-AHI 2 Escaños</span>
                    <span style="color: #FF0000;">PSOE 1 Escaño</span>  
</a>
<br><br>
CCA-AHI las gana doblando en escaños al PSOE. CCA-AHI gana al PSOE por tan solo 1170 votos y el PSOE gana al PP por tan solo 300 votos
<br><br>
2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/05/3807.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #01add7;">AHI-CCA 1 Escaño</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span> 
                    <span style="color: #0000FF;">PP 1 Escaño</span> 
</a>
<br><br>
AHI-CCA las gana y sumando al PP doblan en escaños al PSOE. AHI-CCA gana al PSOE por tan solo 91 votos y el PSOE gana al PP por tan solo 853 votos
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/05/07/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #018001;">AHI 1 Escaño</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span> 
                    <span style="color: #0000FF;">PP 1 Escaño</span> 
</a>
<br><br>
AHI las gana y sumando al PP doblan en escaños al PSOE. AHI gana al PSOE por tan solo 278 votos, el PSOE gana al PP por tan solo 97 votos y el PP gana a ASAMBLEA HERREÑA por tan solo 184 votos
<br><br>
En conclusión, El Hierro es una isla

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>El Hierro</title>
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
if (provincia === "Fuerteventura") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Fuerteventura <span class="escaños">7 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1983" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #2f2484;">ASAMBLEA MAJORERA 3 Escaños</span> 
                <span style="color: #006400;">CDS 2 Escaños</span>
                <span style="color: #ADD8E6;">AP-PDP-UL 1 Escaño</span> 
                <span style="color: #FF0000;">PSOE 1 Escaño</span>  
                </a>
                <br><br>
                ASAMBLEA MAJORERA las gana y sumando al PSOE sacan un escaño de ventaja a la suma de CDS y AP-PDP-UL. ASAMBLEA MAJORERA gana al CDS por 2736 votos, CDS gana a AP-PDP-UL por tan solo 550 votos y AP-PDP-UL gana al PSOE por tan solo 558 votos
                <br><br>
                1987: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1987" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #2f2484;">ASAMBLEA MAJORERA 3 Escaños</span> 
                <span style="color: #006400;">CDS 2 Escaños</span>
                <span style="color: #5964b5;">AIC 1 Escaño</span> 
                <span style="color: #FF0000;">PSOE 1 Escaño</span>  
                </a>
                <br><br>
                ASAMBLEA MAJORERA las gana y sumando al PSOE sacan un escaño de ventaja a la suma de CDS y AIC. 
                <br><br>
                1991: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1991" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #2f2484;">ASAMBLEA MAJORERA 2 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 2 Escaños</span> 
                    <span style="color: #5964b5;">AIC 2 Escaños</span> 
                    <span style="color: #006400;">CDS 1 Escaño</span>
                </a>
                <br><br>
                ASAMBLEA MAJORERA las gana y sumando al PSOE sacan un escaño de ventaja a la suma de AIC y CDS.
                <br><br>
                1995: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1995" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #01add7;">CCA 2 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 2 Escaños</span> 
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
                    <span style="color: #e894d3;">PCN 1 Escaño</span> 
                </a>
                <br><br>
                CCA las gana y sumando al PP sacan un escaño de ventaja a la suma de PSOE y PCN
                <br><br>
                1999: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #01add7;">CCA 3 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 2 Escaños</span> 
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
                </a>
                <br><br>
                CCA las gana y sumando al PP sacan tres escaños de ventaja al PSOE
                <br><br>
                2003: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_2003" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 3 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 2 EscañoS</span> 
                    <span style="color: #01add7;">CCA 2 Escaños</span>
                </a>
                <br><br>
                El PP las gana y sumando a CCA sacan tres escaños de ventaja al PSOE
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/05/3503.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 3 Escaños</span>  
                    <span style="color: #01add7;">CCA-PNC 2 Escaños</span>
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
</a>
<br><br>
El PSOE las gana, pero la suma de CCA-PNC y PP le saca un escaño de ventaja al PSOE. El PSOE gana a CCA-PNC por tan solo 679 votos y CCA-PNC gana al PP por 2131 votos
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/05/3503.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #01add7;">CCA-PNC-CCN 3 Escaños</span>
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 2 Escaños</span>  
</a>
<br><br>
CCA-PNC-CCN las gana y sumando al PSOE sacan tres escaños de ventaja al PP. CCA-PNC-CCN gana al PP por 4495 votos y el PP gana al PSOE por tan solo 1043 votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/05/3503.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #01add7;">CCA-PNC 3 Escaños</span>
                    <span style="color: #FF0000;">PSOE 2 Escaños</span>  
                    <span style="color: #0000FF;">PP 1 Escaño</span> 
                    <span style="color: #800080;">PODEMOS 1 Escaño</span> 
</a>
<br><br>
CCA-PNC las gana y sumando al PSOE sacan tres escaños de ventaja a la suma de PP y PODEMOS. CCA-PNC gana al PSOE por 3907 votos, el PSOE gana al PP por tan solo 1264 votos y el PP gana a PODEMOS por tan solo 482 votos
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 8 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/05/3503.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
    <span style="color: #01add7;">CCA-PNC 3 Escaños</span> 
                    <span style="color: #0000FF;">PP 1 Escaño</span> 
                    <span style="color: #81c03b;">NCA 1 Escaño</span> 
</a>
<br><br>
El PSOE las gana y sumando a NCA empatan en escaños a la suma de CCA-PNC y PP. El PSOE gana a CCA-PNC por tan solo 275 votos, CCA-PNC gana al PP por 4083 votos y el PP gana a NCA por tan solo 946 votos 
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/05/03/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #01add7;">CCA 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span> 
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
                    <span style="color: #81c03b;">NCA 1 Escaño</span> 
</a>
<br><br>
CCA las gana y sumando al PP sacan dos escaños de ventaja a la suma de PSOE y NCA. CCA gana al PSOE por tan solo 1390 votos, el PSOE gana al PP por tan solo 803 votos y el PP gana a NCA por 2883 votos
<br><br>
En conclusión, Fuerteventura es una isla
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Fuerteventura</title>
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
if (provincia === "Gran Canaria") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Gran Canaria <span class="escaños">15 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1983" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 7 Escaños</span>  
                <span style="color: #ADD8E6;">AP-PDP-UL 5 Escaños</span> 
                <span style="color: #ba0033;">UPC-AC 1 Escaño</span> 
                <span style="color: #12717a;">CCNC 1 Escaño</span>
                <span style="color: #006400;">CDS 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana y sumando la abstención de UPC-AC sacan un escaño de ventaja a la suma de AP-PDP-UL, CCNC y CDS. El PSOE gana a AP-PDP-UL por 27604 votos, AP-PDP-UL casi triplica a UPC-AC en votos, UPC-AC gana a CCNC por tan solo 880 votos
                <br><br>
                1987: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1987" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                <span style="color: #FF0000;">PSOE 5 Escaños</span>  
                <span style="color: #006400;">CDS 4 Escaños</span>
                <span style="color: #ADD8E6;">AP 3 Escaños</span> 
                <span style="color: #c2da69;">ICAN 2 Escaños</span> 
                <span style="color: #d25644;">ICAU 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a INC e ICAU sacan un escaño de ventaja a la suma de CDS y AP. 
                <br><br>
                1991: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1991" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 5 Escaños</span>  
                <span style="color: #006400;">CDS 4 Escaños</span>
                <span style="color: #0000FF;">PP 3 Escaños</span> 
                <span style="color: #c2da69;">ICAN 3 Escaños</span> 
                </a>
                <br><br>
                El PSOE las, pero la suma de CDS, PP e ICAN le dobla en escaños.
                <br><br>
                1995: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1995" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 7 Escaños</span> 
                    <span style="color: #01add7;">CCA 5 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                </a>
                <br><br>
                El PP las gana y sumando a CCA cuadruplican en escaños al PSOE.
                <br><br>
                1999: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 7 Escaños</span> 
                    <span style="color: #01add7;">CCA 5 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                </a>
                <br><br>
                El PP las gana y sumando a CCA cuadruplican en escaños al PSOE.
                <br><br>
                2003: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_2003" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 8 Escaños</span> 
                    <span style="color: #01add7;">CCA 4 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                </a>
                <br><br>
                El PP las gana y sumando a CCA cuadruplican en escaños al PSOE
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/05/3501.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 7 Escaños</span>  
                    <span style="color: #0000FF;">PP 7 Escaños</span> 
                    <span style="color: #01add7;">CCA-PNC 1 Escaño</span> 
</a>
<br><br>
El PSOE las gana, pero la suma de PP y CCA-PNC le saca un escaño de ventaja. El PSOE gana al PP por 14439 votos, y el PP multiplica por seis a CCA-PNC en votos. Hay que destacar que, aunque NCA es tercera fuerza con 46303 votos, al no superar las barreras de electorales del 30% de los votos insulares o el 6% de los regionales, no entró en el reparto de escaños
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/05/3501.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 8 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 4 Escaños</span>  
                    <span style="color: #81c03b;">NCA 2 Escaños</span> 
                    <span style="color: #01add7;">CCA-PNC-CCN 1 Escaño</span>
</a>
<br><br>
El PP las gana sacando un escaño de ventaja a la suma de PSOE, NCA y CCA-PNC-CCN. El PP gana al PSOE por 76556 votos, el PSOE gana a NCA por 25751 votos y NCA gana a CCA-PNC-CCN por 18962 votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/05/3501.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 4 Escaños</span> 
                    <span style="color: #81c03b;">NCA 4 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                    <span style="color: #800080;">PODEMOS 3 Escaños</span> 
                    <span style="color: #01add7;">CCA-PNC 1 Escaño</span> 
</a>
<br><br>
El PP las gana y sumando a NCA y PODEMOS sacan siete escaños de ventaja a la suma de PSOE y CCA-PNC. El PP gana a NCA por 7470 votos, NCA gana al PSOE por 3619 votos, el PSOE gana a PODEMOS por tan solo 1813 votos y PODEMOS dobla a CCA-PNC en votos
<br><br>
2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/05/3501.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 5 Escaños</span> 
                    <span style="color: #81c03b;">NCA 3 Escaños</span> 
                    <span style="color: #0000FF;">PP 3 Escaños</span> 
                    <span style="color: #01add7;">CCA-PNC 2 Escaños</span> 
                    <span style="color: #800080;">PODEMOS-EQUO 1 Escaño</span> 
                    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
El PSOE las gana y sumando a NCA y PODEMOS-EQUO sacan tres escaños de ventaja a la suma de PP, CCA-PNC y CS. El PSOE gana a NCA por 39140 votos, NCA gana al PP por 3468 votos, el PP gana a CCA-PNC por 17776 votos, CCA-PNC gana a PODEMOS-EQUO por 9983 votos y PODEMOS-EQUO gana a CIUDADANOS por tan solo 214 votos
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/05/01/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 5 Escaños</span> 
    <span style="color: #0000FF;">PP 4 Escaños</span> 
                    <span style="color: #81c03b;">NCA 3 Escaños</span> 
                    <span style="color: #008000;">VOX 2 Escaños</span>  
                    <span style="color: #01add7;">CCA 1 Escaño</span> 
</a>
<br><br>
El PSOE las gana y sumando a NCA y VOX doblan en escaños a la suma de PP y CCA. El PSOE gana al PP por 23979 votos, el PP gana a NCA por 24311 votos, NCA gana a VOX por 16657 votos y VOX gana a CCA por 2273 votos
<br><br>
En conclusión, Gran Canaria es una isla

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Gran Canaria</title>
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
if (provincia === "La Gomera") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">La Gomera <span class="escaños">4 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1983" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 2 Escaños</span>  
                <span style="color: #FFA500;">AGI 2 Escaños</span> 
                </a>
                <br><br>
                El PSOE las gana empatando en escaños con AGI al que aventaja por tan solo 73 votos
                <br><br>
                1987: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1987" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                <span style="color: #FF0000;">PSOE 3 Escaños</span>  
                <span style="color: #FFA500;">AGI 1 Escaños</span>
                </a>
                <br><br>
                El PSOE las gana triplicando en escaños a AGI
                <br><br>
                1991: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1991" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 3 Escaños</span>  
                <span style="color: #FFA500;">AGI 1 Escaños</span>
                </a>
                <br><br>
                El PSOE las gana triplicando en escaños a AGI
                <br><br>
                1995: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1995" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 2 Escaños</span> 
                    <span style="color: #01add7;">CCA 2 Escaños</span> 
                </a>
                <br><br>
                El PSOE las gana empatando en escaños con CCA 
                <br><br>
                1999: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                    <span style="color: #01add7;">CCA 1 Escaños</span> 
                </a>
                <br><br>
                El PSOE las gana triplicando en escaños a CCA
                <br><br>
                2003: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_2003" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                    <span style="color: #01add7;">CCA 1 Escaños</span> 
                </a>
                <br><br>
                El PSOE las gana triplicando en escaños a CCA
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/05/3806.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                    <span style="color: #01add7;">CCA-PNC 1 Escaños</span> 
</a>
<br><br>
El PSOE las gana triplicando en escaños a CCA-PNC, al que aventaja por 3413 votos
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/05/3806.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span> 
    <span style="color: #0000FF;">PP 1 Escaños</span>  
                    <span style="color: #01add7;">CCA-PNC-CCN 1 Escaño</span>
</a>
<br><br>
El PSOE las gana y sumando a CCA-PNC-CCN triplican en escaños al PP. El PSOE gana al PP por 2393 votos y el PP gana a CCA-PNC-CCN por tan solo 459 votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/05/3806.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #bf5b5b;">ASG 3 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 1 Escaño</span> 
</a>
<br><br>
ASG las gana triplicando en escaños al PSOE al que dobla en votos
<br><br>
2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/05/3806.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                   <span style="color: #bf5b5b;">ASG 3 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 1 Escaño</span> 
</a>
<br><br>
ASG las gana triplicando en escaños al PSOE al que dobla en votos
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/05/06/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #bf5b5b;">ASG 3 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 1 Escaño</span> 
</a>
<br><br>
ASG las gana triplicando en escaños al PSOE al que casi triplica en votos
<br><br>
En conclusión, La Gomera es una isla

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>La Gomera</title>
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
if (provincia === "La Palma") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">La Palma <span class="escaños">8 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1983" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                <span style="color: #ADD8E6;">AP-PDP-UL 3 Escaños</span> 
                <span style="color: #FF0000;">PSOE 3 Escaños</span>
                <span style="color: #006400;">CDS 1 Escaño</span>
                <span style="color: #FF0D00;">PCE 1 Escaño</span> 
                </a>
                <br><br>
                AP-PDP-UL las gana y sumando a CDS empatan en escaños a la suma de PSOE y PCE. AP-PDP-UL gana al PSOE por tan solo 1876 votos, el PSOE dobla a CDS en votos y CDS gana al PCE por tan solo 374 votos
                <br><br>
                1987: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1987" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                <span style="color: #FF0000;">PSOE 2 Escaños</span>  
                <span style="color: #5964b5;">AIC 2 Escaños</span> 
                <span style="color: #ADD8E6;">AP 2 Escaños</span> 
                <span style="color: #006400;">CDS 1 Escaño</span>
                <span style="color: #d25644;">IU 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana, pero la suma de AIC, AP y CDS le saca dos escaños de ventaja a la suma de PSOE e IU
                <br><br>
                1991: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1991" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                    <span style="color: #5964b5;">AIC 3 Escaños</span>
                    <span style="color: #c2da69;">ICAN 1 Escaño</span> 
                <span style="color: #0000FF;">PP 1 Escaño</span> 
                </a>
                <br><br>
                El PSOE las gana y sumando a AIC triplican en escaños a la suma de ICAN y PP
                <br><br>
                1995: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1995" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #01add7;">CCA 4 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 2 Escaños</span> 
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
                </a>
                <br><br>
                CCA las gana y sumando al PP triplican en escaños al PSOE
                <br><br>
                1999: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #01add7;">CCA 4 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 2 Escaños</span> 
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
                </a>
                <br><br>
                CCA las gana y sumando al PP triplican en escaños al PSOE
                <br><br>
                2003: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_2003" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #01add7;">CCA 4 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 2 Escaños</span> 
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
                </a>
                <br><br>
                CCA las gana y sumando al PP triplican en escaños al PSOE
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/05/3805.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #01add7;">CCA-PNC 4 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                    <span style="color: #0000FF;">PP 1 Escaño</span> 
</a>
<br><br>
CCA-PNC las gana y sumando al PP sacan dos escaños de ventaja al PSOE. CCA-PNC gana al PSOE por 8956 votos y el PSOE gana al PP por 5567 votos
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/05/3805.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #01add7;">CCA-PNC-CCN 4 Escaños</span> 
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 2 Escaños</span> 
</a>
<br><br>
CCA-PNC-CCN las gana y sumando al PSOE triplican en escaños al PP. CCA-PNC-CCN gana al PP por 5123 votos y el PP gana al PSOE por tan solo 1444 votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/05/3805.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #01add7;">CCA-PNC 3 Escaños</span> 
                    <span style="color: #0000FF;">PP 3 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 2 Escaños</span> 
</a>
<br><br>
CCA-PNC las gana y sumando al PSOE sacan dos escaños de ventaja al PP. CCA-PNC gana al PP por 2145 votos y el PP gana al PSOE por tan solo 128 votos
<br><br>
2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/05/3805.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #01add7;">CCA-PNC 3 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
</a>
<br><br>
CCA-PNC las gana y sumando al PP sacan dos escaños de ventaja al PSOE. CCA-PNC gana al PSOE por tan solo 1439 votos y el PSOE gana al PP por tan solo 967 votos
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/05/05/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #01add7;">CCA 4 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 2 Escaños</span> 
                    <span style="color: #0000FF;">PP 2 Escaños</span>
</a>
<br><br>
CCA las gana y sumando al PP triplican en escaños al PSOE. CCA gana al PSOE por 7675 votos y el PSOE gana al PP por tan solo 1592 votos
<br><br>
En conclusión, La Palma es una isla

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>La Palma</title>
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
if (provincia === "Lanzarote") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Lanzarote <span class="escaños">8 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1983" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 5 Escaños</span>  
                <span style="color: #ADD8E6;">AP-PDP-UL 2 Escaños</span> 
                <span style="color: #006400;">CDS 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana sacando dos escaños de ventaja a la suma de AP-PDP-UL y CDS. El PSOE dobla a AP-PDP-UL en votos y AP-PDP-UL gana a CDS por tan solo 1252 votos
                <br><br>
                1987: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1987" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                <span style="color: #FF0000;">PSOE 4 Escaños</span>  
                <span style="color: #006400;">CDS 3 Escaños</span>
                <span style="color: #5964b5;">AIC 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana empatando en escaños a la suma de CDS y AIC. 
                <br><br>
                1991: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1991" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #5964b5;">AIC 4 Escaños</span> 
                <span style="color: #FF0000;">PSOE 3 Escaños</span>  
                <span style="color: #006400;">CDS 1 Escaño</span>
                </a>
                <br><br>
                AIC las gana y sumando al PSOE multiplican por siete a CDS en escaños
                <br><br>
                1995: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1995" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #e894d3;">PCN 3 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 2 Escaños</span> 
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
                    <span style="color: #01add7;">CCA 1 Escaño</span> 
                </a>
                <br><br>
                PCN las gana y sumando al PP y CCA triplican en escaños al PSOE. 
                <br><br>
                1999: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #01add7;">CCA 4 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                    <span style="color: #0000FF;">PP 1 Escaño</span> 
                </a>
                <br><br>
                CCA las gana y sumando al PP saca dos escaños de ventaja al PSOE. 
                <br><br>
                2003: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_2003" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #e894d3;">FNC 3 Escaños</span> 
                    <span style="color: #01add7;">CCA 2 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 2 Escaños</span> 
                    <span style="color: #0000FF;">PP 1 Escaño</span> 
                </a>
                <br><br>
                FNC las gana y sumando a CCA y el PP triplican en escaños al PSOE. 
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/05/3502.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 4 Escaños</span>  
                    <span style="color: #01add7;">CCA 2 Escaños</span> 
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
</a>
<br><br>
El PSOE las gana empatando en escaños a la suma de CCA y PP. El PSOE gana a CCA por 4424 votos y CCA gana al PP por tan solo 1552 votos. PIL-CCN es segunda fuerza en número de votos en la isla, pero, al no superar las barreras de electorales del 30% de los votos insulares o el 6% de los regionales, no entró en el reparto de escaños
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/05/3502.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #01add7;">CCA-PNC-CCN 4 Escaños</span>              
    <span style="color: #0000FF;">PP 2 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 1 Escaño</span>  
                    <span style="color: #81c03b;">NCA 1 Escaño</span> 
</a>
<br><br>
CCA-PNC-CCN las gana y sumando al PSOE y NCA triplican en escaños al PP. CCA-PNC-CCN gana al PP por 5319 votos, el PP gana al PSOE por 2196 votos y el PSOE gana a NCA por tan solo 1546 votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/05/3502.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #01add7;">CCA-PNC 3 Escaños</span>              
                    <span style="color: #FF0000;">PSOE 2 Escaños</span> 
                    <span style="color: #800080;">PODEMOS 1 Escaño</span>               
    <span style="color: #0000FF;">PP 1 Escaño</span> 
    <span style="color: #81c03b;">NCA 1 Escaño</span>    
</a>
<br><br>
CCA-PNC-CCN las gana y sumando al PSOE sacan dos escaños de ventaja a la suma de PODEMOS, PP y NCA. CCA-PNC-CCN gana al PSOE por tan solo 604 votos, el PSOE gana a PODEMOS por 2898 votos, PODEMOS gana al PP por tan solo 672 votos y el PP gana a NCA por 2143 votos 
<br><br>
2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/05/3502.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #01add7;">CCA-PNC 3 Escaños</span>              
                    <span style="color: #FF0000;">PSOE 3 Escaños</span>             
    <span style="color: #0000FF;">PP 1 Escaño</span> 
    <span style="color: #800080;">PODEMOS 1 Escaño</span>   
</a>
<br><br>
CCA-PNC las gana y sumando al PP empatan en escaños a la suma de PSOE y PODEMOS. CCA-PNC gana al PSOE por tan solo 1764 votos, el PSOE dobla al PP en votos y el PP gana a PODEMOS por 2233 votos
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/05/02/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
    <span style="color: #01add7;">CCA 3 Escaños</span> 
    <span style="color: #0000FF;">PP 1 Escaño</span> 
                    <span style="color: #81c03b;">NCA 1 Escaño</span> 
</a>
<br><br>
El PSOE las gana y sumando a NCA empatan en escaños a la suma de CCA y PP. El PSOE gana a CCA por tan solo 720 votos, CCA gana al PP por 4872 votos y el PP gana a NCA por 4030 votos
<br><br>
En conclusión, Lanzarote es una isla

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Lanzarote</title>
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
if (provincia === "Tenerife") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Tenerife <span class="escaños">15 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1983" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 8 Escaños</span>  
                <span style="color: #ADD8E6;">AP-PDP-UL 5 Escaños</span> 
                <span style="color: #ba0033;">UPC-AC 1 Escaño</span> 
                <span style="color: #006400;">CDS 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a UPC-AC sacan tres escaños de ventaja a la suma de AP-PDP-UL y CDS. El PSOE gana a AP-PDP-UL por 37481 votos, AP-PDP-UL triplica a UPC-AC en votos y UPC-AC gana a CDS por 5851 votos
                <br><br>
                1987: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1987" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #5964b5;">AIC 7 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 5 Escaños</span>  
                <span style="color: #006400;">CDS 2 Escaños</span>
                <span style="color: #ADD8E6;">AP 1 Escaño</span> 
                </a>
                <br><br>
                AIC las gana y sumando a CDS y AP doblan en escaños al PSOE.
                <br><br>
                1991: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1991" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #5964b5;">AIC 7 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 6 Escaños</span>  
                <span style="color: #0000FF;">PP 1 Escaño</span> 
                <span style="color: #c2da69;">ICAN 1 Escaño</span> 
                </a>
                <br><br>
                AIC las gana y sumando al PSOE sacan once escaños de ventaja a la suma de PP e ICAN
                <br><br>
                1995: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1995" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #01add7;">CCA 7 Escaños</span> 
                    <span style="color: #0000FF;">PP 4 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 4 Escaños</span> 
                </a>
                <br><br>
                CCA las gana y sumando al PP sacan siete escaños de ventaja al PSOE
                <br><br>
                1999: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #01add7;">CCA 7 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 5 Escaños</span> 
                    <span style="color: #0000FF;">PP 3 Escaños</span> 
                </a>
                <br><br>
                CCA las gana y sumando al PP doblan en escaños al PSOE 
                <br><br>
                2003: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_2003" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #01add7;">CCA 8 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 5 Escaños</span> 
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
                </a>
                <br><br>
                CCA las gana y sumando al PP doblan en escaños al PSOE
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/05/3804.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #01add7;">CCA-PNC 7 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 5 Escaños</span> 
                    <span style="color: #0000FF;">PP 3 Escaños</span> 
</a>
<br><br>
CCA las gana y sumando al PP doblan en escaños al PSOE. CCA gana al PSOE por 28963 votos y el PSOE gana al PP por 61515 votos
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/05/3804.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #01add7;">CCA-PNC-CCN 7 Escaños</span> 
                    <span style="color: #0000FF;">PP 5 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
</a>
<br><br>
CCA-PNC-CCN las gana y sumando al PSOE doblan en escaños al PP. CCA-PNC-CCN gana al PP por 42728 votos y el PP gana al PSOE por 21028 votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/05/3804.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #01add7;">CCA-PNC 6 Escaños</span>  
                    <span style="color: #FF0000;">PSOE 4 Escaños</span> 
                    <span style="color: #0000FF;">PP 3 Escaños</span>
                    <span style="color: #800080;">PODEMOS 2 Escaños</span> 
</a>
<br><br>
CCA-PNC las gana y sumando al PSOE doblan en escaños a la suma de PP y PODEMOS. CCA-PNC gana al PSOE por 21238 votos, el PSOE gana al PP por 16958 votos y el PP gana a PODEMOS por 15826 votos
<br><br>
2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/05/3804.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 6 Escaños</span> 
                    <span style="color: #01add7;">CCA-PNC 5 Escaños</span> 
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
                    <span style="color: #800080;">PODEMOS-EQUO 1 Escaño</span> 
                    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
El PSOE las gana, pero la suma de CCA-PNC, PP y CS saca un escaño de ventaja a la suma de PSOE y PODEMOS-EQUO. El PSOE gana a CCA-PNC por 3934 votos, CCA-PNC dobla al PP en votos, el PP gana a PODEMOS-EQUO por 15119 votos y PODEMOS-EQUO gana a CIUDADANOS por 9683 votos
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/05/04/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #01add7;">CCA 6 Escaños</span> 
    <span style="color: #FF0000;">PSOE 5 Escaños</span> 
    <span style="color: #0000FF;">PP 3 Escaños</span> 
                    <span style="color: #008000;">VOX 1 Escaño</span>  
</a>
<br><br>
CCA las gana y sumando al PP sacan tres escaños de ventaja a la suma de PSOE y VOX. CCA gana al PSOE por 14655 votos, el PSOE gana al PP por 34658 votos y el PP dobla a VOX en votos
<br><br>
En conclusión, Tenerife es una isla

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Tenerife</title>
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
if (provincia === "Urna autonómica") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Urna autonómica <span class="escaños">9 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2019: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_2019" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                    <span style="color: #01add7;">CCA-PNC 3 Escaños</span> 
                    <span style="color: #0000FF;">PP 1 Escaño</span> 
                    <span style="color: #81c03b;">NCA 1 Escaño</span> 
                    <span style="color: #800080;">PODEMOS-EQUO 1 Escaño</span> 
</a>
<br><br>
El PSOE las gana y sumando a NCA y PODEMOS-EQUO sacan un escaño de ventaja a la suma de CCA-PNC y PP. El PSOE gana a CCA-PNC por 54407 votos, CCA-PNC gana al PP por 77754 votos, el PP gana a NCA por 47612 votos y NCA gana a PODEMOS-EQUO por 6697 votos
<br><br>

2023: <a href="https://www.parcan.es/elecciones/2023/islas/ca/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 4 Escaños</span> 
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #01add7;">CCA 2 Escaños</span> 
                    <span style="color: #008000;">VOX 1 Escaño</span>  
</a>
<br><br>
El PSOE las gana y sumando a VOX sacan un escaño de ventaja a la suma de PP y CCA. El PSOE gana al PP por 112208 votos, el PP gana a CCA por 8563 votos y CCA dobla a VOX en votos
<br><br>
En conclusión, la Urna autonómica nos indica 

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Urna autonómica</title>
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
if (provincia === "Canarias") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Canarias <span class="escaños">60 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1983" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 27 Escaños</span>  
                <span style="color: #ADD8E6;">AP-PDP-UL 17 Escaños</span> 
                <span style="color: #006400;">CDS 6 Escaños</span>
                <span style="color: #2f2484;">ASAMBLEA MAJORERA 3 Escaños</span> 
                <span style="color: #ba0033;">UPC-AC 2 Escaños</span>              
                <span style="color: #FFA500;">AGI 2 Escaños</span>
                <span style="color: #12717a;">CCNC 1 Escaño</span> 
                <span style="color: #FF0D00;">PCE 1 Escaño</span> 
                <span style="color: #018001;">AHI 1 Escaño</span> 
                </a>
                <br><br>
                El PSOE las gana y sumando a ASAMBLEA MAJORERA, AGI y AHI sacan dos escaños por encima de la mayoría absoluta
                <br><br>
                1987: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1987" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                <span style="color: #FF0000;">PSOE 21 Escaños</span>  
                <span style="color: #006400;">CDS 12 Escaños</span>
                <span style="color: #5964b5;">AIC 11 Escaños</span>
                <span style="color: #ADD8E6;">AP 6 Escaños</span> 
                <span style="color: #2f2484;">ASAMBLEA MAJORERA 3 Escaños</span> 
                <span style="color: #c2da69;">ICAN 2 Escaños</span> 
                <span style="color: #d25644;">ICAU 2 Escaños</span>
                <span style="color: #018001;">AHI 2 Escaños</span> 
                <span style="color: #FFA500;">AGI 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana, pero la suma de CDS, AIC, AP, AHI y AGI saca un escaño por encima de la mayoría absoluta
                <br><br>
                1991: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1991" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 23 Escaños</span>  
                    <span style="color: #5964b5;">AIC 16 Escaños</span>
                <span style="color: #006400;">CDS 6 Escaños</span>
                <span style="color: #0000FF;">PP 6 Escaños</span> 
                <span style="color: #c2da69;">ICAN 5 Escaños</span> 
                <span style="color: #2f2484;">ASAMBLEA MAJORERA 2 Escaños</span> 
                <span style="color: #018001;">AHI 1 Escaño</span> 
                <span style="color: #FFA500;">AGI 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a AIC y AHI sacan nueve escaños por encima de la mayoría absoluta
                <br><br>
                1995: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1995" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #01add7;">CCA 21 Escaños</span> 
                    <span style="color: #0000FF;">PP 18 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 16 Escaños</span> 
                    <span style="color: #e894d3;">PCN 4 Escaños</span> 
                    <span style="color: #018001;">AHI 1 Escaño</span> 
                </a>
                <br><br>
                CCA las gana y sumando al PP y AHI sacan nueve escaños por encima de la mayoría absoluta
                <br><br>
                1999: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #01add7;">CCA 24 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 19 Escaños</span>
                    <span style="color: #0000FF;">PP 15 Escaños</span> 
                    <span style="color: #018001;">AHI 2 Escaños</span> 
                </a>
                <br><br>
                CCA las gana y sumando al PP y AHI sacan diez escaños por encima de la mayoría absoluta
                <br><br>
                2003: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_2003" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #01add7;">CCA 23 Escaños</span> 
                    <span style="color: #0000FF;">PP 17 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 17 Escaños</span> 
                    <span style="color: #e894d3;">FNC 3 Escaños</span> 
                </a>
                <br><br>
                CCA las gana y sumando al PP y FNC sacan once escaños por encima de la mayoría absoluta
                <br><br>
                2007: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_2007" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 26 Escaños</span>  
                    <span style="color: #01add7;">CCA-PNC 19 Escaños</span> 
                    <span style="color: #0000FF;">PP 15 Escaños</span> 
</a>
<br><br>
El PSOE  las gana, pero la suma de CCA-PNC y PP saca tres escaños por encima de la mayoría absoluta
<br><br>
2011: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_2011" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 21 Escaños</span> 
                    <span style="color: #01add7;">CCA-PNC-CCN 21 Escaño</span>
                    <span style="color: #FF0000;">PSOE 15 Escaños</span>  
                    <span style="color: #81c03b;">NCA 3 Escaños</span> 
</a>
<br><br>
El PP las gana, pero la suma de CCA-PCN-CCN y PSOE saca cinco escaños por encima de la mayoría absoluta
<br><br>

2015: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_2015" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #01add7;">CCA-PNC 18 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 15 Escaños</span> 
                    <span style="color: #0000FF;">PP 12 Escaños</span> 
                    <span style="color: #800080;">PODEMOS 7 Escaños</span> 
                    <span style="color: #81c03b;">NCA 5 Escaños</span> 
                    <span style="color: #bf5b5b;">ASG 3 Escaños</span> 
</a>
<br><br>
CCA-PNC las gana y sumando al PSOE y ASG sacan cinco escaños por encima de la mayoría absoluta
<br><br>
2019: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_2019" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 25 Escaños</span> 
                    <span style="color: #01add7;">CCA-PNC 20 Escaños</span> 
                    <span style="color: #0000FF;">PP 11 Escaños</span> 
                    <span style="color: #81c03b;">NCA 5 Escaños</span> 
                    <span style="color: #800080;">PODEMOS-EQUO 4 Escaños</span> 
                    <span style="color: #bf5b5b;">ASG 3 Escaños</span> 
                    <span style="color: #FF7F00;">CS 2 Escaños</span>
</a>
<br><br>
El PSOE las gana y sumando a NCA, PODEMOS-EQUO y ASG sacan seis escaños por encima de la mayoría absoluta
<br><br>

2023: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_2023" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 23 Escaños</span> 
                    <span style="color: #01add7;">CCA 19 Escaños</span>
                    <span style="color: #0000FF;">PP 15 Escaños</span> 
                    <span style="color: #81c03b;">NCA 5 Escaños</span> 
                    <span style="color: #008000;">VOX 4 Escaños</span>  
                    <span style="color: #bf5b5b;">ASG 3 Escaños</span>
                    <span style="color: #018001;">AHI 1 Escaño</span>  
</a>
<br><br>
El PSOE las gana, pero la suma de CCA, PP, ASG y AHI saca siete escaños por encima de la mayoría absoluta
<br><br>
En conclusión, las islas Canarias son unas islas
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Canarias</title>
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
function abrirVentanaEscenario70(provincia) {
if (provincia === "El Hierro") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">El Hierro <span class="escaños">3 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1983" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #ADD8E6;">AP-PDP-UL 1 Escaño</span> 
                <span style="color: #FF0000;">PSOE 1 Escaño</span>  
                <span style="color: #018001;">AHI 1 Escaño</span> 
                </a>
                <br><br>
                IGUAL
                <br><br>
                1987: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1987" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #018001;">AHI 2 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 1 Escaño</span>  
                </a>
                <br><br>
                IGUAL
                <br><br>
                1991: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1991" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #018001;">AHI 1 Escaño</span> 
                    <span style="color: #0000FF;">PP 1 Escaño</span> 
                    <span style="color: #FF0000;">PSOE 1 Escaño</span> 
                </a>
                <br><br>
                IGUAL
                <br><br>
                1995: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1995" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #018001;">AHI 1 Escaño</span> 
                    <span style="color: #0000FF;">PP 1 Escaño</span> 
                    <span style="color: #FF0000;">PSOE 1 Escaño</span> 
                </a>
                <br><br>
                IGUAL
                <br><br>
                1999: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #018001;">AHI 2 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 1 Escaño</span>  
                </a>
                <br><br>
                IGUAL
                <br><br>
                2003: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_2003" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #01add7;">CCA 2 Escaños</span>
                    <span style="color: #0000FF;">PP 1 Escaño</span> 
                </a>
                <br><br>
                IGUAL
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/05/3807.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #01add7;">CCA-AHI 2 Escaños</span>
                    <span style="color: #FF0000;">PSOE 1 Escaño</span>  

</a>
<br><br>
IGUAL
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/05/3807.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #01add7;">AHI-CCA 1 Escaño</span>
                    <span style="color: #FF0000;">PSOE 1 Escaño</span>  
                    <span style="color: #0000FF;">PP 1 Escaño</span> 
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/05/3807.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #01add7;">CCA-AHI 2 Escaños</span>
                    <span style="color: #FF0000;">PSOE 1 Escaño</span>  
</a>
<br><br>
IGUAL
<br><br>
2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/05/3807.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #01add7;">AHI-CCA 1 Escaño</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span> 
                    <span style="color: #0000FF;">PP 1 Escaño</span> 
</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/05/07/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #018001;">AHI 1 Escaño</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span> 
                    <span style="color: #0000FF;">PP 1 Escaño</span> 
</a>
<br><br>
IGUAL
<br><br>
En conclusión, El Hierro es una isla

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>El Hierro</title>
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
if (provincia === "Fuerteventura") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Fuerteventura <span class="escaños">8 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1983" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #2f2484;">ASAMBLEA MAJORERA 4 Escaños</span> 
                <span style="color: #006400;">CDS 2 Escaños</span>
                <span style="color: #ADD8E6;">AP-PDP-UL 1 Escaño</span> 
                <span style="color: #FF0000;">PSOE 1 Escaño</span>  
                </a>
                <br><br>
                ASAMBLEA MAJORERA sube un escaño, por lo que la suma de ASAMBLEA MAJORERA sumando al PSOE sacan dos escaños de ventaja a la suma de CDS y AP-PDP-UL
                <br><br>
                1987: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1987" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #2f2484;">ASAMBLEA MAJORERA 4 Escaños</span> 
                <span style="color: #006400;">CDS 2 Escaños</span>
                <span style="color: #5964b5;">AIC 1 Escaño</span> 
                <span style="color: #FF0000;">PSOE 1 Escaño</span>  
                </a>
                <br><br>
                ASAMBLEA MAJORERA sube un escaño, por lo que la suma de ASAMBLE MAJORERA y PSOE sacan dos escaños de ventaja a la suma de CDS y AIC
                <br><br>
                1991: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1991" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #2f2484;">ASAMBLEA MAJORERA 3 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 2 Escaños</span> 
                    <span style="color: #5964b5;">AIC 2 Escaños</span> 
                    <span style="color: #006400;">CDS 1 Escaño</span>
                </a>
                <br><br>
                ASAMBLEA MAJORERA sube un escaño, por lo que ASAMBLEA MAJORERA sumando a CDS empatan en escaños a la suma de PSOE y AIC 
                <br><br>
                1995: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1995" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #01add7;">CCA 3 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 2 Escaños</span> 
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
                    <span style="color: #e894d3;">PCN 1 Escaño</span> 
                </a>
                <br><br>
                CCA sube un escaño, por lo que la suma de CCA y PP saca dos escaños de ventaja a la suma de PSOE y PCN
                <br><br>
                1999: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #01add7;">CCA 3 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
                </a>
                <br><br>
                El PSOE sube un escaño, pero la suma de CCA y PP saca dos escaños de ventaja al PSOE
                <br><br>
                2003: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_2003" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 3 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 3 EscañoS</span> 
                    <span style="color: #01add7;">CCA 2 Escaños</span>
                </a>
                <br><br>
                El PSOE sube un escaño, pero la suma del PP y CCA saca dos escaños de ventaja al PSOE.
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/05/3503.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 3 Escaños</span>  
                    <span style="color: #01add7;">CCA-PNC 3 Escaños</span>
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
</a>
<br><br>
CCA-PNC sube un escaño, por lo que la suma de CCA-PNC y PP saca dos escaños de ventaja al PSOE
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/05/3503.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #01add7;">CCA-PNC-CCN 4 Escaños</span>
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 2 Escaños</span>  
</a>
<br><br>
CCA-PNC-CCN sube un escaño, por lo que la suma de CCA-PNC-CCN y PSOE triplica en escaños al PP
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/05/3503.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #01add7;">CCA-PNC 4 Escaños</span>
                    <span style="color: #FF0000;">PSOE 2 Escaños</span>  
                    <span style="color: #0000FF;">PP 1 Escaño</span> 
                    <span style="color: #800080;">PODEMOS 1 Escaño</span> 
</a>
<br><br>
CCA-PNC sube un escaño, por lo que la suma de CCA-PNC y PSOE triplica en escaños a la suma de PP y PODEMOS
<br><br>
2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/05/3503.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
    <span style="color: #01add7;">CCA-PNC 3 Escaños</span> 
                    <span style="color: #0000FF;">PP 1 Escaño</span> 
                    <span style="color: #81c03b;">NCA 1 Escaño</span> 
</a>
<br><br>
IGUAL 
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/05/03/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #01add7;">CCA 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span> 
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
                    <span style="color: #81c03b;">NCA 1 Escaño</span> 
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Fuerteventura es una isla

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Fuerteventura</title>
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
if (provincia === "Gran Canaria") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Gran Canaria <span class="escaños">15 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1983" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 7 Escaños</span>  
                <span style="color: #ADD8E6;">AP-PDP-UL 5 Escaños</span> 
                <span style="color: #ba0033;">UPC-AC 1 Escaño</span> 
                <span style="color: #12717a;">CCNC 1 Escaño</span>
                <span style="color: #006400;">CDS 1 Escaño</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1987: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1987" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                <span style="color: #FF0000;">PSOE 5 Escaños</span>  
                <span style="color: #006400;">CDS 4 Escaños</span>
                <span style="color: #ADD8E6;">AP 3 Escaños</span> 
                <span style="color: #c2da69;">ICAN 2 Escaños</span> 
                <span style="color: #d25644;">ICAU 1 Escaño</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1991: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1991" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 5 Escaños</span>  
                <span style="color: #006400;">CDS 4 Escaños</span>
                <span style="color: #0000FF;">PP 3 Escaños</span> 
                <span style="color: #c2da69;">ICAN 3 Escaños</span> 
                </a>
                <br><br>
                IGUAL
                <br><br>
                1995: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1995" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 7 Escaños</span> 
                    <span style="color: #01add7;">CCA 5 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                </a>
                <br><br>
                IGUAL
                <br><br>
                1999: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 7 Escaños</span> 
                    <span style="color: #01add7;">CCA 5 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                </a>
                <br><br>
                IGUAL
                <br><br>
                2003: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_2003" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 8 Escaños</span> 
                    <span style="color: #01add7;">CCA 4 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                </a>
                <br><br>
                IGUAL
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/05/3501.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 7 Escaños</span>  
                    <span style="color: #0000FF;">PP 7 Escaños</span> 
                    <span style="color: #01add7;">CCA-PNC 1 Escaño</span> 
</a>
<br><br>
IGUAL
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/05/3501.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 8 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 4 Escaños</span>  
                    <span style="color: #81c03b;">NCA 2 Escaños</span> 
                    <span style="color: #01add7;">CCA-PNC-CCN 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/05/3501.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 4 Escaños</span> 
                    <span style="color: #81c03b;">NCA 4 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                    <span style="color: #800080;">PODEMOS 3 Escaños</span> 
                    <span style="color: #01add7;">CCA-PNC 1 Escaño</span> 
</a>
<br><br>
IGUAL
<br><br>
2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/05/3501.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 5 Escaños</span> 
                    <span style="color: #81c03b;">NCA 3 Escaños</span> 
                    <span style="color: #0000FF;">PP 3 Escaños</span> 
                    <span style="color: #01add7;">CCA-PNC 2 Escaños</span> 
                    <span style="color: #800080;">PODEMOS-EQUO 1 Escaño</span> 
                    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/05/01/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 5 Escaños</span> 
    <span style="color: #0000FF;">PP 4 Escaños</span> 
                    <span style="color: #81c03b;">NCA 3 Escaños</span> 
                    <span style="color: #008000;">VOX 2 Escaños</span>  
                    <span style="color: #01add7;">CCA 1 Escaño</span> 
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Gran Canaria es una isla

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Gran Canaria</title>
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
if (provincia === "La Gomera") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">La Gomera <span class="escaños">4 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1983" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 2 Escaños</span>  
                <span style="color: #FFA500;">AGI 2 Escaños</span> 
                </a>
                <br><br>
                IGUAL
                <br><br>
                1987: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1987" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                <span style="color: #FF0000;">PSOE 3 Escaños</span>  
                <span style="color: #FFA500;">AGI 1 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1991: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1991" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 3 Escaños</span>  
                <span style="color: #FFA500;">AGI 1 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1995: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1995" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 2 Escaños</span> 
                    <span style="color: #01add7;">CCA 2 Escaños</span> 
                </a>
                <br><br>
                IGUAL
                <br><br>
                1999: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                    <span style="color: #01add7;">CCA 1 Escaños</span> 
                </a>
                <br><br>
                IGUAL
                <br><br>
                2003: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_2003" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                    <span style="color: #01add7;">CCA 1 Escaños</span> 
                </a>
                <br><br>
                IGUAL
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/05/3806.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                    <span style="color: #01add7;">CCA-PNC 1 Escaños</span> 
</a>
<br><br>
IGUAL
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/05/3806.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span> 
    <span style="color: #0000FF;">PP 1 Escaños</span>  
                    <span style="color: #01add7;">CCA-PNC-CCN 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/05/3806.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #bf5b5b;">ASG 3 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 1 Escaño</span> 
</a>
<br><br>
IGUAL
<br><br>
2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/05/3806.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                   <span style="color: #bf5b5b;">ASG 3 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 1 Escaño</span> 
</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/05/06/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #bf5b5b;">ASG 3 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 1 Escaño</span> 
</a>
<br><br>
IGUAL
<br><br>
En conclusión, La Gomera es una isla

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>La Gomera</title>
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
if (provincia === "La Palma") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">La Palma <span class="escaños">8 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1983" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                <span style="color: #ADD8E6;">AP-PDP-UL 3 Escaños</span> 
                <span style="color: #FF0000;">PSOE 3 Escaños</span>
                <span style="color: #006400;">CDS 1 Escaño</span>
                <span style="color: #FF0D00;">PCE 1 Escaño</span> 
                </a>
                <br><br>
                IGUAL
                <br><br>
                1987: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1987" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                <span style="color: #FF0000;">PSOE 2 Escaños</span>  
                <span style="color: #5964b5;">AIC 2 Escaños</span> 
                <span style="color: #ADD8E6;">AP 2 Escaños</span> 
                <span style="color: #006400;">CDS 1 Escaño</span>
                <span style="color: #d25644;">IU 1 Escaño</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1991: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1991" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                    <span style="color: #5964b5;">AIC 3 Escaños</span>
                    <span style="color: #c2da69;">ICAN 1 Escaño</span> 
                <span style="color: #0000FF;">PP 1 Escaño</span> 
                </a>
                <br><br>
                IGUAL
                <br><br>
                1995: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1995" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #01add7;">CCA 4 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 2 Escaños</span> 
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
                </a>
                <br><br>
                IGUAL
                <br><br>
                1999: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #01add7;">CCA 4 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 2 Escaños</span> 
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
                </a>
                <br><br>
                IGUAL
                <br><br>
                2003: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_2003" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #01add7;">CCA 4 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 2 Escaños</span> 
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
                </a>
                <br><br>
                IGUAL
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/05/3805.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #01add7;">CCA-PNC 4 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                    <span style="color: #0000FF;">PP 1 Escaño</span> 
</a>
<br><br>
IGUAL
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/05/3805.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #01add7;">CCA-PNC-CCN 4 Escaños</span> 
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 2 Escaños</span> 
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/05/3805.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #01add7;">CCA-PNC 3 Escaños</span> 
                    <span style="color: #0000FF;">PP 3 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 2 Escaños</span> 
</a>
<br><br>
IGUAL
<br><br>
2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/05/3805.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #01add7;">CCA-PNC 3 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/05/05/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #01add7;">CCA 4 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 2 Escaños</span> 
                    <span style="color: #0000FF;">PP 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>
En conclusión, La Palma es una isla

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>La Palma</title>
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
if (provincia === "Lanzarote") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Lanzarote <span class="escaños">8 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1983" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 5 Escaños</span>  
                <span style="color: #ADD8E6;">AP-PDP-UL 2 Escaños</span> 
                <span style="color: #006400;">CDS 1 Escaño</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1987: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1987" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                <span style="color: #FF0000;">PSOE 4 Escaños</span>  
                <span style="color: #006400;">CDS 3 Escaños</span>
                <span style="color: #5964b5;">AIC 1 Escaño</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1991: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1991" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #5964b5;">AIC 4 Escaños</span> 
                <span style="color: #FF0000;">PSOE 3 Escaños</span>  
                <span style="color: #006400;">CDS 1 Escaño</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1995: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1995" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #e894d3;">PCN 3 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 2 Escaños</span> 
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
                    <span style="color: #01add7;">CCA 1 Escaño</span> 
                </a>
                <br><br>
                IGUAL 
                <br><br>
                1999: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #01add7;">CCA 4 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                    <span style="color: #0000FF;">PP 1 Escaño</span> 
                </a>
                <br><br>
                IGUAL
                <br><br>
                2003: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_2003" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #e894d3;">FNC 3 Escaños</span> 
                    <span style="color: #01add7;">CCA 2 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 2 Escaños</span> 
                    <span style="color: #0000FF;">PP 1 Escaño</span> 
                </a>
                <br><br>
                IGUAL
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/05/3502.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 4 Escaños</span>  
                    <span style="color: #01add7;">CCA 2 Escaños</span> 
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
</a>
<br><br>
IGUAL
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/05/3502.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #01add7;">CCA-PNC-CCN 4 Escaños</span>              
    <span style="color: #0000FF;">PP 2 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 1 Escaño</span>  
                    <span style="color: #81c03b;">NCA 1 Escaño</span> 
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/05/3502.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #01add7;">CCA-PNC 3 Escaños</span>              
                    <span style="color: #FF0000;">PSOE 2 Escaños</span> 
                    <span style="color: #800080;">PODEMOS 1 Escaño</span>               
    <span style="color: #0000FF;">PP 1 Escaño</span> 
    <span style="color: #81c03b;">NCA 1 Escaño</span>    
</a>
<br><br>
IGUAL
<br><br>
2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/05/3502.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #01add7;">CCA-PNC 3 Escaños</span>              
                    <span style="color: #FF0000;">PSOE 3 Escaños</span>             
    <span style="color: #0000FF;">PP 1 Escaño</span> 
    <span style="color: #800080;">PODEMOS 1 Escaño</span>   
</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/05/02/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
    <span style="color: #01add7;">CCA 3 Escaños</span> 
    <span style="color: #0000FF;">PP 1 Escaño</span> 
                    <span style="color: #81c03b;">NCA 1 Escaño</span> 
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Lanzarote es una isla

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Lanzarote</title>
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
if (provincia === "Tenerife") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Tenerife <span class="escaños">15 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1983" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 8 Escaños</span>  
                <span style="color: #ADD8E6;">AP-PDP-UL 5 Escaños</span> 
                <span style="color: #ba0033;">UPC-AC 1 Escaño</span> 
                <span style="color: #006400;">CDS 1 Escaño</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1987: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1987" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #5964b5;">AIC 7 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 5 Escaños</span>  
                <span style="color: #006400;">CDS 2 Escaños</span>
                <span style="color: #ADD8E6;">AP 1 Escaño</span> 
                </a>
                <br><br>
                IGUAL
                <br><br>
                1991: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1991" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #5964b5;">AIC 7 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 6 Escaños</span>  
                <span style="color: #0000FF;">PP 1 Escaño</span> 
                <span style="color: #c2da69;">ICAN 1 Escaño</span> 
                </a>
                <br><br>
                IGUAL
                <br><br>
                1995: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1995" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #01add7;">CCA 7 Escaños</span> 
                    <span style="color: #0000FF;">PP 4 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 4 Escaños</span> 
                </a>
                <br><br>
                IGUAL
                <br><br>
                1999: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #01add7;">CCA 7 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 5 Escaños</span> 
                    <span style="color: #0000FF;">PP 3 Escaños</span> 
                </a>
                <br><br>
                IGUAL
                <br><br>
                2003: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_2003" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #01add7;">CCA 8 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 5 Escaños</span> 
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
                </a>
                <br><br>
                IGUAL
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/autonomicas/05/3804.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #01add7;">CCA-PNC 7 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 5 Escaños</span> 
                    <span style="color: #0000FF;">PP 3 Escaños</span> 
</a>
<br><br>
IGUAL
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/autonomicas/05/3804.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #01add7;">CCA-PNC-CCN 7 Escaños</span> 
                    <span style="color: #0000FF;">PP 5 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/05/3804.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #01add7;">CCA-PNC 6 Escaños</span>  
                    <span style="color: #FF0000;">PSOE 4 Escaños</span> 
                    <span style="color: #0000FF;">PP 3 Escaños</span>
                    <span style="color: #800080;">PODEMOS 2 Escaños</span> 
</a>
<br><br>
IGUAL
<br><br>
2019: <a href="https://resultados.elpais.com/elecciones/2019/autonomicas/05/3804.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 6 Escaños</span> 
                    <span style="color: #01add7;">CCA-PNC 5 Escaños</span> 
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
                    <span style="color: #800080;">PODEMOS-EQUO 1 Escaño</span> 
                    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/autonomicas/05/04/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #01add7;">CCA 6 Escaños</span> 
    <span style="color: #FF0000;">PSOE 5 Escaños</span> 
    <span style="color: #0000FF;">PP 3 Escaños</span> 
                    <span style="color: #008000;">VOX 1 Escaño</span>  
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Tenerife es una isla

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Tenerife</title>
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
if (provincia === "Urna autonómica") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Urna autonómica <span class="escaños">9 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    2019: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_2019" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                    <span style="color: #01add7;">CCA-PNC 3 Escaños</span> 
                    <span style="color: #0000FF;">PP 1 Escaño</span> 
                    <span style="color: #81c03b;">NCA 1 Escaño</span> 
                    <span style="color: #800080;">PODEMOS-EQUO 1 Escaño</span> 
</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://www.parcan.es/elecciones/2023/islas/ca/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 4 Escaños</span> 
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #01add7;">CCA 2 Escaños</span> 
                    <span style="color: #008000;">VOX 1 Escaño</span>  
</a>
<br><br>
IGUAL
<br><br>
En conclusión, la Urna autonómica nos indica 

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Urna autonómica</title>
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
if (provincia === "Canarias") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Canarias <span class="escaños">61/70 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1983: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1983" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 27 Escaños</span>  
                <span style="color: #ADD8E6;">AP-PDP-UL 17 Escaños</span> 
                <span style="color: #006400;">CDS 6 Escaños</span>
                <span style="color: #2f2484;">ASAMBLEA MAJORERA 4 Escaños</span> 
                <span style="color: #ba0033;">UPC-AC 2 Escaños</span>              
                <span style="color: #FFA500;">AGI 2 Escaños</span>
                <span style="color: #12717a;">CCNC 1 Escaño</span> 
                <span style="color: #FF0D00;">PCE 1 Escaño</span> 
                <span style="color: #018001;">AHI 1 Escaño</span> 
                </a>
                <br><br>
                ASAMBLEA MAJORERA sube un escaño, por lo que el PSOE sumando a ASAMBLEA MAJORERA, AGI y AHI sacan tres escaños por encima de la mayoría absoluta
                <br><br>
                1987: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1987" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                <span style="color: #FF0000;">PSOE 21 Escaños</span>  
                <span style="color: #006400;">CDS 12 Escaños</span>
                <span style="color: #5964b5;">AIC 11 Escaños</span>
                <span style="color: #ADD8E6;">AP 6 Escaños</span> 
                <span style="color: #2f2484;">ASAMBLEA MAJORERA 4 Escaños</span> 
                <span style="color: #c2da69;">ICAN 2 Escaños</span> 
                <span style="color: #d25644;">ICAU 2 Escaños</span>
                <span style="color: #018001;">AHI 2 Escaños</span> 
                <span style="color: #FFA500;">AGI 1 Escaño</span>
                </a>
                <br><br>
                ASAMBLEA MAJORERA sube un escaño, pero la suma de CDS, AIC, AP, AHI y AGI saca un escaño por encima de la mayoría absoluta
                <br><br>
                1991: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1991" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 23 Escaños</span>  
                    <span style="color: #5964b5;">AIC 16 Escaños</span>
                <span style="color: #006400;">CDS 6 Escaños</span>
                <span style="color: #0000FF;">PP 6 Escaños</span> 
                <span style="color: #c2da69;">ICAN 5 Escaños</span> 
                <span style="color: #2f2484;">ASAMBLEA MAJORERA 3 Escaños</span> 
                <span style="color: #018001;">AHI 1 Escaño</span> 
                <span style="color: #FFA500;">AGI 1 Escaño</span>
                </a>
                <br><br>
                ASAMBLEA MAJORERA sube un escaño, por lo que el PSOE sumando a AIC y AHI sacan nueve escaños por encima de la mayoría absoluta
                <br><br>
                1995: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1995" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #01add7;">CCA 22 Escaños</span> 
                    <span style="color: #0000FF;">PP 18 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 16 Escaños</span> 
                    <span style="color: #e894d3;">PCN 4 Escaños</span> 
                    <span style="color: #018001;">AHI 1 Escaño</span> 
                </a>
                <br><br>
                CCA sube un escaño, por lo que, CCA sumando al PP y AHI sacan diez escaños por encima de la mayoría absoluta
                <br><br>
                1999: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #01add7;">CCA 24 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 20 Escaños</span>
                    <span style="color: #0000FF;">PP 15 Escaños</span> 
                    <span style="color: #018001;">AHI 2 Escaños</span> 
                </a>
                <br><br>
                El PSOE sube un escaño, pero CCA sumando al PP y AHI sacan diez escaños por encima de la mayoría absoluta
                <br><br>
                2003: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_2003" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #01add7;">CCA 23 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 18 Escaños</span> 
                    <span style="color: #0000FF;">PP 17 Escaños</span> 
                    <span style="color: #e894d3;">FNC 3 Escaños</span> 
                </a>
                <br><br>
                El PSOE sube un escaño y sube a segunda fuerza, pero CCA sumando al PP y FNC sacan once escaños por encima de la mayoría absoluta
                <br><br>
                2007: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_2007" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 26 Escaños</span>  
                    <span style="color: #01add7;">CCA-PNC 20 Escaños</span> 
                    <span style="color: #0000FF;">PP 15 Escaños</span> 
</a>
<br><br>
CCA-PNC sube un escaño, por lo que la suma de CCA-PNC y PP saca cuatro escaños por encima de la mayoría absoluta
<br><br>
2011: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_2011" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #01add7;">CCA-PNC-CCN 22 Escaño</span>               
    <span style="color: #0000FF;">PP 21 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 15 Escaños</span>  
                    <span style="color: #81c03b;">NCA 3 Escaños</span> 
</a>
<br><br>
CCA-PNC-CCN sube un escaño, por lo que la suma de CCA-PCN-CCN y PSOE saca seis escaños por encima de la mayoría absoluta
<br><br>

2015: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_2015" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #01add7;">CCA-PNC 19 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 15 Escaños</span> 
                    <span style="color: #0000FF;">PP 12 Escaños</span> 
                    <span style="color: #800080;">PODEMOS 7 Escaños</span> 
                    <span style="color: #81c03b;">NCA 5 Escaños</span> 
                    <span style="color: #bf5b5b;">ASG 3 Escaños</span> 
</a>
<br><br>
CCA-PNC sube un escaño, por lo que la suma de CCA-PNC, PSOE y ASG saca seis escaños por encima de la mayoría absoluta
<br><br>
2019: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_2019" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 25 Escaños</span> 
                    <span style="color: #01add7;">CCA-PNC 20 Escaños</span> 
                    <span style="color: #0000FF;">PP 11 Escaños</span> 
                    <span style="color: #81c03b;">NCA 5 Escaños</span> 
                    <span style="color: #800080;">PODEMOS-EQUO 4 Escaños</span> 
                    <span style="color: #bf5b5b;">ASG 3 Escaños</span> 
                    <span style="color: #FF7F00;">CS 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Canarias_de_2023" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 23 Escaños</span> 
                    <span style="color: #01add7;">CCA 19 Escaños</span>
                    <span style="color: #0000FF;">PP 15 Escaños</span> 
                    <span style="color: #81c03b;">NCA 5 Escaños</span> 
                    <span style="color: #008000;">VOX 4 Escaños</span>  
                    <span style="color: #bf5b5b;">ASG 3 Escaños</span>
                    <span style="color: #018001;">AHI 1 Escaño</span>  
</a>
<br><br>
IGUAL
<br><br>
En conclusión, las islas Canarias son unas islas
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Canarias</title>
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