    function abrirVentana(provincia) {

if (provincia === "Alava") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Alava <span class="escaños">20 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1980: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-1980/alava" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #298242;">PNV 7 Escaños</span>
                    <span style="color: #FFA500;">UCD 4 Escaños</span> 
                    <span style="color: #01b59c;">HB 3 Escaños</span>
                    <span style="color: #FF0000;">PSOE 3 Escaños</span>
                    <span style="color: #DC143C ;">EE 2 Escaños</span>
                    <span style="color: #ADD8E6;">AP 1 Escaño</span> 
                </a>
                <br><br>
                El PNV las gana y con la no ausencia de HB empatan en escaños a la suma de UCD, PSOE, EE y AP. El PNV gana a UCD por 10924 votos, UCD gana a HB por 5912 votos, HB gana al PSOE por tan solo 110 votos, el PSOE gana a EE por 5036 votos y EE gana a AP por 3629 votos
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 25 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1984: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-1984/alava" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                    <span style="color: #298242;">PNV 9 Escaños</span>
                    <span style="color: #FF0000;">PSOE 7 Escaños</span>
                    <span style="color: #ADD8E6;">AP-PDP-UL 4 Escaños</span> 
                    <span style="color: #01b59c;">HB 3 Escaños</span>
                    <span style="color: #DC143C ;">EE 2 Escaños</span>
                </a>
                <br><br>
                El PNV las gana y con la ausencia de HB, se quedan a un escaño de la suma de PSOE, AP-PDP-UL y EE. El PNV gana al PSOE por 13098 votos, el PSOE gana a AP-PDP-UL por 11105 votos, AP-PDP-UL gana a HB por 6841 votos y HB gana a EE por 3906 votos 
                <br><br>
                1986: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-1986/alava" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 7 Escaños</span>
                    <span style="color: #298242;">PNV 5 Escaños</span>
                    <span style="color: #298242;">EUSKO ALKARTASUNA 4 Escaños</span>
                    <span style="color: #01b59c;">HB 3 Escaños</span>
                    <span style="color: #DC143C ;">EE 3 Escaños</span>
                    <span style="color: #006400;">CDS 2 Escaños</span>
                    <span style="color: #ADD8E6;">AP-PL 1 Escaño</span> 
                </a>
                <br><br>
                El PSOE las gana, pero sumando al PNV sacan un escaño un escaño menos que la suma de EA, HB, EE, CDS y AP-PL. El PSOE gana al PNV por 6703 votos, el PNV gana a EA por 7754 votos, EA gana a HB por 2437 votos, HB gana a EE por 2635 votos, EE gana a CDS por 4082 votos y CDS gana a AP-PL por tan solo 1611 votos
                <br><br>
                1990: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-1990/alava" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #298242;">PNV 6 Escaños</span>
                    <span style="color: #FF0000;">PSOE 6 Escaños</span>
                    <span style="color: #01b59c;">HB 3 Escaños</span>
                    <span style="color: #ae6293;">UAL 3 Escaños</span>
                    <span style="color: #0000FF;">PP 3 Escaños</span> 
                    <span style="color: #298242;">EUSKO ALKARTASUNA 2 Escaños</span>
                    <span style="color: #DC143C ;">EE 2 Escaños</span>
                </a>
                <br><br>
                El PNV las gana y sumando a EA y EE sacan cinco escaños menos que la suma de PSOE, HB, <a href="https://es.wikipedia.org/wiki/Unidad_Alavesa" target="_blank">UAL</a> y PP. El PNV gana al PSOE por tan solo 1447 votos, el PSOE gana a HB por 10755 votos, HB gana a UAL por 2105 votos, UAL gana al PP por tan solo 276 votos, el PP gana a EA por 3426 votos y EA gana a EE por tan solo 1806 votos
                <br><br>
                1994: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-1994/alava" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #298242;">PNV 6 Escaños</span>
                    <span style="color: #ae6293;">UAL 5 Escaños</span>
                    <span style="color: #0000FF;">PP 4 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 4 Escaños</span>
                    <span style="color: #01b59c;">HB 2 Escaños</span>
                    <span style="color: #d25644 ;">EB 2 Escaños</span>
                    <span style="color: #298242;">EUSKO ALKARTASUNA 2 Escaños</span>
                </a>
                <br><br>
                El PNV las gana y sumando al PSOE y EA sacan un escaño menos que la suma de UAL, PP, HB y EB. El PNV gana a UAL por 4442 votos, UAL gana al PP por 3584 votos, el PP gana al PSOE por tan solo 454 votos, el PSOE gana a HB por 7566 votos, HB gana a EB por tan solo 1381 votos y EB gana a EA por 2526 votos
                <br><br>
                1998: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-1998/alava" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 7 Escaños</span> 
                    <span style="color: #298242;">PNV 6 Escaños</span>
                    <span style="color: #FF0000;">PSOE 5 Escaños</span>
                    <span style="color: #01b59c;">EH 3 Escaños</span>
                    <span style="color: #ae6293;">UAL 2 Escaños</span>
                    <span style="color: #298242;">EUSKO ALKARTASUNA 1 Escaño</span>
                    <span style="color: #d25644 ;">EB 1 Escaño</span>
                </a>
                <br><br>
                El PP las gana y sumando a PSOE, UAL y EB sacan cinco escaños de ventaja a la suma de PNV, EH y EA. El PP gana al PNV por 8547 votos, el PNV gana al PSOE por 8253 votos, el PSOE gana a EH por 8103 votos, EH gana a UAL por 6262 votos, UAL gana a EA por 3587 votos y EA gana a EB por tan solo 1112 votos
                <br><br>
                2001: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-2001/alava" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #298242;">PNV-EA 9 Escaños</span>
                    <span style="color: #0000FF;">PP 9 Escaños</span>
                    <span style="color: #FF0000;">PSOE 5 Escaños</span>
                    <span style="color: #01b59c;">EH 1 Escaño</span>
                    <span style="color: #d25644 ;">EB 1 Escaño</span>
</a>
<br><br>
El PNV las gana y sumando a EB sacan cinco escaños menos que la suma de PP, PSOE y EH. PNV-EA gana al PP por 2095 votos, el PP gana al PSOE por 23268 votos, el PSOE triplica a EH en votos y EH gana a EB por tan solo 406 votos
<br><br>

2005: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-2005/alava" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #298242;">PNV-EA 8 Escaños</span>
                    <span style="color: #0000FF;">PP 7 Escaños</span>
                    <span style="color: #FF0000;">PSOE 7 Escaños</span>
                    <span style="color: #9c231b;">PCTV-EHAK 2 Escaños</span>
                    <span style="color: #d25644 ;">EB 1 Escaño</span>
</a>
<br><br>
El PNV las gana, pero sumando a <a href="https://es.wikipedia.org/wiki/Partido_Comunista_de_las_Tierras_Vascas" target="_blank">PCTV-EHAK</a> y EB sacan tres escaños menos que la suma de PP y PSOE. PNV-EA gana al PP por 7997 votos, el PP gana al PSOE por tan solo 773 votos, el PSOE triplica a PCTV-EHAK y PCTV-EHAK gana a EB por 5778 votos
<br><br>

2009: <a href="https://resultados.elpais.com/elecciones/2009/autonomicas/14/01.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 9 Escaños</span>
    <span style="color: #298242;">PNV 8 Escaños</span>
                    <span style="color: #0000FF;">PP 6 Escaños</span>
                    <span style="color: #692d3e;">ARALAR 1 Escaño</span>
                    <span style="color: #d7257d;">UPyD 1 Escaño</span>
</a>
<br><br>
El PSOE las gana y sumando al PP y UPyD sacan siete escaños de ventaja a la suma de PNV y ARALAR. El PSOE gana al PNV por tan solo 1756 votos, el PNV gana al PP por 13579 votos, el PP cuadriplica a ARALAR en votos y ARALAR gana a UPyD por tan solo 623 votos
<br><br>
2012: <a href="https://resultados.elpais.com/elecciones/2012/autonomicas/14/01.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #298242;">PNV 7 Escaños</span>
    <span style="color: #01b59c;">EHBILDU 6 Escaños</span>
    <span style="color: #FF0000;">PSOE 6 Escaños</span>
                    <span style="color: #0000FF;">PP 5 Escaños</span>
                    <span style="color: #d7257d;">UPyD 1 Escaño</span>
</a>
<br><br>
El PNV las gana por mayoría simple. El PNV gana a EHBILDU por 5896 votos, EHBILDU gana al PSOE por 3855 votos, el PSOE gana al PP por tan solo 964 votos y el PP quintuplica a UPyD en votos
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/autonomicas/14/01.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #298242;">PNV 8 Escaños</span>
    <span style="color: #0000FF;">PP 5 Escaños</span>
    <span style="color: #01b59c;">EHBILDU 5 Escaños</span>
    <span style="color: #800080;">PODEMOS-IU 4 Escaños</span>
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
</a>
<br><br>
El PNV las gana, pero sumando al PSOE sacan tres escaños menos que la suma de PP, EHBILDU y PODEMOS-IU. El PNV gana al PP por 14450 votos, el PP gana a EHBILDU por tan solo 978 votos, EHBILDU gana a PODEMOS-IU por 2560 votos y PODEMOS-IU gana al PSOE por 4850 votos
<br><br>
2020: <a href="https://resultados.elpais.com/elecciones/2020/autonomicas/14/01.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #298242;">PNV 9 Escaños</span>
    <span style="color: #01b59c;">EHBILDU 6 Escaños</span>
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP+CS 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span>
</a>
<br><br>
El PNV las gana y sumando al PSOE sacan un escaño a la suma de EHBILDU, PP+CS, PODEMOS y VOX. El PNV gana a EHBILDU por 9133 votos, EHBILDU gana al PSOE por 11482 votos, el PSOE gana a PP+CS por 5136 votos, PP+CS gana a PODEMOS por 4224 votos y PODEMOS dobla a VOX en votos
<br><br>
2024: <a href="https://elpais.com/espana/elecciones/autonomicas/14/01/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #01b59c;">EHBILDU 8 Escaños</span>
    <span style="color: #298242;">PNV 7 Escaños</span>
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 4 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span>
    <span style="color: #FF69B4;">SUMAR 1 Escaño</span>  
</a>
<br><br>
EHBILDU las gana. EHBILDU gana al PNV por 3713 votos, el PNV gana al PSOE por 16156 votos, el PSOE gana al PP por tan solo 485 votos, el PP cuadruplica a VOX en votos y VOX gana a SUMAR por 20 votos
<br><br>
En conclusión, Alava es una provincia 
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Alava</title>
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
if (provincia === "Vizcaya") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Vizcaya <span class="escaños">20 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1980: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-1980/bizkaia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #298242;">PNV 9 Escaños</span>
                    <span style="color: #01b59c;">HB 4 Escaños</span>
                    <span style="color: #FF0000;">PSOE 3 Escaños</span>
                    <span style="color: #DC143C ;">EE 1 Escaño</span>
                    <span style="color: #FFA500;">UCD 1 Escaño</span> 
                    <span style="color: #ADD8E6;">AP 1 Escaño</span> 
                    <span style="color: #9c231b;">PCE-EPK 1 Escaño</span>
                </a>
                <br><br>
                El PNV las gana y con la ausencia de HB sacan un escaño de ventaja a la suma de PSOE, EE, UCD, AP y PCE-EPK. El PNV dobla a HB en votos, HB gana al PSOE por 9894 votos, el PSOE gana a EE por 34294 votos, EE gana a UCD por 5304 votos, UCD gana a AP por 5034 votos y AP gana a PCE-EPK por 5087 votos
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 25 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1984: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-1984/bizkaia" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                    <span style="color: #298242;">PNV 12 Escaños</span>
                    <span style="color: #FF0000;">PSOE 6 Escaños</span>
                    <span style="color: #01b59c;">HB 3 Escaños</span>
                    <span style="color: #ADD8E6;">AP-PDP-UL 2 Escaños</span> 
                    <span style="color: #DC143C ;">EE 2 Escaños</span>
                </a>
                <br><br>
                El PNV las gana y sumando al PSOE sacan once escaños de ventaja a la suma de PSOE, HB, AP-PDP-UL y EE. El PNV gana al PSOE por 123818 votos, el PSOE gana a HB por 60686, HB gana a AP-PDP-UL por 21200 votos y AP-PDP-UL gana a EE por 11707 votos
                <br><br>
                1986: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-1986/bizkaia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #298242;">PNV 8 Escaños</span>
                    <span style="color: #FF0000;">PSOE 6 Escaños</span>
                    <span style="color: #01b59c;">HB 4 Escaños</span>
                    <span style="color: #298242;">EUSKO ALKARTASUNA 3 Escaños</span>
                    <span style="color: #DC143C ;">EE 3 Escaños</span>
                    <span style="color: #ADD8E6;">AP-PL 1 Escaño</span> 
                </a>
                <br><br>
                El PNV las gana y sumando al PSOE sacan tres escaños de ventaja a la suma de HB, EA, EE y AP-PL. El PNV gana al PSOE por 40379 votos, el PSOE gana a HB por 41654 votos, HB gana a EA por 26812 votos, EA gana a EE por 9805 votos y EE gana a AP-PL por 32352 votos
                <br><br>
                1990: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-1990/bizkaia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #298242;">PNV 10 Escaños</span>
                    <span style="color: #FF0000;">PSOE 5 Escaños</span>
                    <span style="color: #01b59c;">HB 4 Escaños</span>
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
                    <span style="color: #298242;">EUSKO ALKARTASUNA 2 Escaños</span>
                    <span style="color: #DC143C ;">EE 2 Escaños</span>
                </a>
                <br><br>
                El PNV las gana y sumando a EA y EE saca tres escaños de ventaja a la suma de PSOE, HB y PP. El PNV gana al PSOE por 80983 votos, el PSOE gana a HB por 20873 votos, HB gana al PP por 42642 votos, el PP gana a EA por 3483 votos y EA gana a EE por 3939 votos 
                <br><br>
                1994: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-1994/bizkaia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #298242;">PNV 10 Escaños</span>
                    <span style="color: #FF0000;">PSOE 4 Escaños</span>
                    <span style="color: #0000FF;">PP 4 Escaños</span> 
                    <span style="color: #01b59c;">HB 3 Escaños</span>
                    <span style="color: #d25644 ;">EB 2 Escaños</span>
                    <span style="color: #298242;">EUSKO ALKARTASUNA 2 Escaños</span>
                </a>
                <br><br>
                El PNV las gana y sumando al PSOE y EA sacan siete escaños de ventaja a la suma de PP, HB y EB. El PNV dobla al PSOE en votos, el PSOE gana al PP por 13533 votos, el PP gana a HB por 9410 votos, HB gana a EB por 19223 votos y EB gana a EA por 17013 votos
                <br><br>
                1998: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-1998/bizkaia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #298242;">PNV 9 Escaños</span>
                    <span style="color: #0000FF;">PP 5 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 5 Escaños</span>
                    <span style="color: #01b59c;">EH 4 Escaños</span>
                    <span style="color: #d25644 ;">EB 1 Escaño</span>
                    <span style="color: #298242;">EUSKO ALKARTASUNA 1 Escaño</span>
                </a>
                <br><br>
                El PNV las gana y sumando a EH y EA saca tres escaños de ventaja a la suma de PP, PSOE y EB. El PNV gana al PP por 85381 votos, el PP gana al PSOE por 13327 votos, el PSOE gana a EH por 25457 votos, EH dobla a EB en votos y EB gana a EA por tan solo 1618 votos
                <br><br>
                2001: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-2001/bizkaia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #298242;">PNV-EA 12 Escaños</span>
                    <span style="color: #0000FF;">PP 6 Escaños</span>
                    <span style="color: #FF0000;">PSOE 4 Escaños</span>
                    <span style="color: #01b59c;">EH 2 Escaños</span>
                    <span style="color: #d25644 ;">EB 1 Escaño</span>
</a>
<br><br>
PNV-EA las gana y sumando a EB sacan un escaño de ventaja a la suma de PP, PSOE y EH. PNV-EA gana al PP por 154541 votos, el PP gana al PSOE por 41720 votos, el PSOE dobla a EH en votos y EH gana a EB por 18193 votos
<br><br>

2005: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-2005/bizkaia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #298242;">PNV-EA 11 Escaños</span>
                    <span style="color: #FF0000;">PSOE 6 Escaños</span>
                    <span style="color: #0000FF;">PP 5 Escaños</span>
                    <span style="color: #9c231b;">PCTV-EHAK 2 Escaños</span>
                    <span style="color: #d25644 ;">EB 1 Escaño</span>
</a>
<br><br>
PNV-EA las gana y sumando a PCTV-EHAK y EB sacan tres escaños de ventaja a la suma de PSOE y PP. PNV-EA gana al PSOE por 114788 votos, el PSOE gana al PP por 37614 votos, el PP gana a PCTV-EHAK por 49222 votos y PCTV-EHAK gana a EB por 29397 votos
<br><br>

2009: <a href="https://resultados.elpais.com/elecciones/2009/autonomicas/14/48.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #298242;">PNV 12 Escaños</span>
    <span style="color: #FF0000;">PSOE 8 Escaños</span>
                    <span style="color: #0000FF;">PP 4 Escaños</span>
                    <span style="color: #692d3e;">ARALAR 1 Escaño</span>
</a>
<br><br>
El PNV las gana y sumando a ARALAR sacan un escaño de ventaja a la suma de PSOE y PP. El PNV gana al PSOE por 63857 votos, el PSOE dobla al PP en votos y el PP triplica a ARALAR en votos
<br><br>
2012: <a href="https://resultados.elpais.com/elecciones/2012/autonomicas/14/48.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #298242;">PNV 11 Escaños</span>
    <span style="color: #01b59c;">EHBILDU 6 Escaños</span>
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
                    <span style="color: #0000FF;">PP 3 Escaños</span>
</a>
<br><br>
PNV las gana por mayoría simple. El PNV gana a EHBILDU por 101162 votos, EHBILDU gana al PSOE por 15260 votos y el PSOE gana al PP por 42703 votos
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/autonomicas/14/48.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #298242;">PNV 11 Escaños</span>
    <span style="color: #01b59c;">EHBILDU 5 Escaños</span>
    <span style="color: #800080;">PODEMOS-IU 4 Escaños</span>
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span>
</a>
<br><br>
El PNV las gana y sumando al PSOE sacan tres escaños de ventaja a la suma de EHBILDU, PODEMOS-IU y PP. El PNV dobla a EHBILDU en votos, EHBILDU gana a PODEMOS-IU por 15415 votos, PODEMOS-IU gana al PSOE por 17689 votos y el PSOE gana al PP por 11378 votos
<br><br>
2020: <a href="https://resultados.elpais.com/elecciones/2020/autonomicas/14/48.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #298242;">PNV 12 Escaños</span>
    <span style="color: #01b59c;">EHBILDU 6 Escaños</span>
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #0000FF;">PP+CS 2 Escaños</span>
</a>
<br><br>
El PNV las gana y sumando al PSOE sacan cinco escaños de ventaja a la suma de EHBILDU, PODEMOS y PP+CS. El PNV gana a EHBILDU por 87720 votos, EHBILDU gana al PSOE por 48618 votos, el PSOE gana a PODEMOS por 23548 votos y PODEMOS gana a PP+CS por 8205 votos
<br><br>
2024: <a href="https://elpais.com/espana/elecciones/autonomicas/14/48/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #298242;">PNV 11 Escaños</span>
    <span style="color: #01b59c;">EHBILDU 8 Escaños</span>
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span>
</a>
<br><br>
El PNV las gana y sumando al PSOE sacan cinco escaños de ventaja a la suma de EHBILDU y PP. El PNV gana a EHBILDU por 61310 votos, EHBILDU dobla al PSOE en votos y el PSOE gana al PP por 27861 votos
<br><br>
En conclusión, Vizcaya es una provincia  
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Vizcaya</title>
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
if (provincia === "Guipuzcoa") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Guipuzcoa <span class="escaños">20 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1980: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-1980/gipuzkoa" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #298242;">PNV 9 Escaños</span>
                    <span style="color: #01b59c;">HB 4 Escaños</span>
                    <span style="color: #FF0000;">PSOE 3 Escaños</span>
                    <span style="color: #DC143C ;">EE 3 Escaños</span>
                    <span style="color: #FFA500;">UCD 1 Escaño</span> 
                </a>
                <br><br>
                El PNV las gana y con la ausencia de HB sacan seis escaños de ventaja a la suma de PSOE, EE y UCD. El PNV dobla a HB en votos, HB gana al PSOE por 11411 votos, el PSOE gana a EE por tan solo 938 votos y EE gana a UCD por 17612 votos
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 25 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1984: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-1984/gipuzkoa" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                    <span style="color: #298242;">PNV 11 Escaños</span>
                    <span style="color: #FF0000;">PSOE 6 Escaños</span>
                    <span style="color: #01b59c;">HB 5 Escaños</span>
                    <span style="color: #DC143C ;">EE 2 Escaños</span>
                    <span style="color: #ADD8E6;">AP-PDP-UL 1 Escaño</span> 
                </a>
                <br><br>
                El PNV las gana y sumando al PSOE sacan nueve escaños de ventaja a la suma de HB, EE y AP-PDP-UL. El PNV gana al PSOE por 66476 votos, el PSOE gana a HB por 11765 votos, HB dobla a EE en votos y EE gana a AP-PDP-UL por 7544 votos
                <br><br>
                1986: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-1986/gipuzkoa" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #298242;">EUSKO ALKARTASUNA 6 Escaños</span>
                    <span style="color: #01b59c;">HB 6 Escaños</span>
                    <span style="color: #FF0000;">PSOE 6 Escaños</span>
                    <span style="color: #298242;">PNV 4 Escaños</span>
                    <span style="color: #DC143C ;">EE 3 Escaños</span>
                </a>
                <br><br>
                EA las gana. EA gana a HB por 5650 votos, HB gana al PSOE por 6215 votos, el PSOE gana al PNV por 14701 votos y el PNV gana a EE por 15309 votos
                <br><br>
                1990: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-1990/gipuzkoa" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #01b59c;">HB 6 Escaños</span>
                    <span style="color: #298242;">PNV 6 Escaños</span>
                    <span style="color: #FF0000;">PSOE 5 Escaños</span> 
                    <span style="color: #298242;">EUSKO ALKARTASUNA 5 Escaños</span>
                    <span style="color: #DC143C ;">EE 2 Escaños</span>
                    <span style="color: #0000FF;">PP 1 Escaño</span>
                </a>
                <br><br>
                HB las gana, pero la suma de PNV, EA y EE saca un escaño de ventaja a la suma de HB, PSOE y PP. HB gana al PNV por 10767 votos, el PNV gana al PSOE por 4535 votos, el PSOE gana a EA por 3473 votos, EA dobla a EE en votos y EE gana al PP por 8040 votos
                <br><br>
                1994: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-1994/gipuzkoa" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #01b59c;">HB 6 Escaños</span>
                    <span style="color: #298242;">PNV 6 Escaños</span>
                    <span style="color: #298242;">EUSKO ALKARTASUNA 4 Escaños</span>
                    <span style="color: #FF0000;">PSOE 4 Escaños</span>
                    <span style="color: #0000FF;">PP 3 Escaños</span> 
                    <span style="color: #d25644 ;">EB 2 Escaños</span>
                </a>
                <br><br>
                HB las gana, pero la suma de PNV, EA y PSOE saca tres escaños de ventaja a la suma de HB, PP y EB. HB gana al PNV por 2692 votos, el PNV gana a EA por 18176 votos, EA gana al PSOE por tan solo 1106 votos, el PSOE gana al PP por 14643 votos y el PP gana a EB por 15635 votos
                <br><br>
                1998: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-1998/gipuzkoa" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #01b59c;">EH 7 Escaños</span>
                    <span style="color: #298242;">PNV 6 Escaños</span>
                    <span style="color: #0000FF;">PP 4 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 4 Escaños</span>
                    <span style="color: #298242;">EUSKO ALKARTASUNA 4 Escaños</span>
                </a>
                <br><br>
                EH las gana y junto con EA apoyan al PNV sacando nueve escaños de ventaja a la suma de PP y PSOE. EH gana al PNV por 14200 votos, el PNV gana al PP por 21745 votos, el PP gana al PSOE por tan solo 1564 votos y el PSOE gana a EA por 8727 votos
                <br><br>
                2001: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-2001/gipuzkoa" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #298242;">PNV-EA 12 Escaños</span>
                    <span style="color: #0000FF;">PP 4 Escaños</span>
                    <span style="color: #FF0000;">PSOE 4 Escaños</span>
                    <span style="color: #01b59c;">EH 4 Escaños</span>
                    <span style="color: #d25644 ;">EB 1 Escaño</span>
</a>
<br><br>
PNV-EA las gana y sumando a EB sacan un escaño de ventaja a la suma de PP, PSOE y EH. PNV-EA dobla al PP en votos, el PP gana al PSOE por 8750 votos, el PSOE gana a EH por 4633 votos y EH casi triplica a EB en votos
<br><br>

2005: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-2005/gipuzkoa" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #298242;">PNV-EA 10 Escaños</span>
                    <span style="color: #FF0000;">PSOE 5 Escaños</span>
                    <span style="color: #9c231b;">PCTV-EHAK 5 Escaños</span>
                    <span style="color: #0000FF;">PP 3 Escaños</span>
                    <span style="color: #d25644 ;">EB 1 Escaño</span>
                    <span style="color: #692d3e;">ARALAR 1 Escaño</span>
</a>
<br><br>
PNV-EA las gana y sumando a PCTV-EHAK y EB sacan siete escaños de ventaja a la suma de PSOE, PP y ARALAR. PNV-EA gana al PSOE por 70013 votos, el PSOE gana a PCTV-EHAK por 8037 votos, PCTV-EHAK gana al PP por 19054 votos, el PP dobla a EB en votos y EB gana a ARALAR por 4992 votos
<br><br>

2009: <a href="https://resultados.elpais.com/elecciones/2009/autonomicas/14/20.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #298242;">PNV 10 Escaños</span>
    <span style="color: #FF0000;">PSOE 8 Escaños</span>
                    <span style="color: #0000FF;">PP 3 Escaños</span>
                    <span style="color: #692d3e;">ARALAR 2 Escaños</span>
                    <span style="color: #298242;">EUSKO ALKARTASUNA 1 Escaño</span>
                    <span style="color: #d25644 ;">EB 1 Escaño</span>
</a>
<br><br>
El PNV las gana. El PNV gana al PSOE por 19387 votos, el PSOE casi triplica al PP en votos, el PP gana a ARALAR por tan solo 861 votos, ARALAR gana a EA por 15377 votos y EA gana a EB por 4645 votos
<br><br>
2012: <a href="https://resultados.elpais.com/elecciones/2012/autonomicas/14/20.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #01b59c;">EHBILDU 9 Escaños</span>
    <span style="color: #298242;">PNV 9 Escaños</span>
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
                    <span style="color: #0000FF;">PP 2 Escaños</span>
</a>
<br><br>
EHBILDU las gana. EHBILDU gana al PNV por tan solo 482 votos, el PNV gana al PSOE por 45453 votos y el PSOE dobla al PP en votos
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/autonomicas/14/20.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #298242;">PNV 9 Escaños</span>
    <span style="color: #01b59c;">EHBILDU 8 Escaños</span>
    <span style="color: #800080;">PODEMOS-IU 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span>
</a>
<br><br>
El PNV las gana. El PNV gana a EHBILDU por 18597 votos, EHBILDU dobla a PODEMOS-IU en votos, PODEMOS-IU gana al PSOE por 8375 votos y el PSOE gana al PP por 15659 votos
<br><br>
2020: <a href="https://resultados.elpais.com/elecciones/2020/autonomicas/14/20.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #298242;">PNV 10 Escaños</span>
    <span style="color: #01b59c;">EHBILDU 9 Escaños</span>
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #0000FF;">PP+CS 1 Escaño</span>
</a>
<br><br>
El PNV las gana y sumando al PSOE sacan un escaño de ventaja a la suma de EHBILDU, PODEMOS y PP+CS. El PNV gana a EHBILDU por 3527 votos, EHBILDU dobla al PSOE en votos, el PSOE gana a PODEMOS por 17227 votos y PODEMOS gana a PP+CS por 7482 votos
<br><br>
2024: <a href="https://elpais.com/espana/elecciones/autonomicas/14/20/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #01b59c;">EHBILDU 11 Escaños</span>
    <span style="color: #298242;">PNV 9 Escaños</span>
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 1 Escaño</span>
</a>
<br><br>
EHBILDU las gana, pero la suma de PNV y PSOE saca un escaño de ventaja a la suma de EHBILDU y PP.EHBILDU gana al PNV por 28778 votos, el PNV dobla al PSOE en votos y el PSOE dobla al PP en votos
<br><br>
En conclusión, Guipúzcoa es una provincia  
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Guipuzcoa</title>
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
if (provincia === "Euskadi") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Euskadi <span class="escaños">60 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1980: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-1980" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #298242;">PNV 25 Escaños</span>
                    <span style="color: #01b59c;">HB 11 Escaños</span>
                    <span style="color: #FF0000;">PSOE 9 Escaños</span>
                    <span style="color: #DC143C ;">EE 6 Escaños</span>
                    <span style="color: #FFA500;">UCD 6 Escaños</span> 
                    <span style="color: #ADD8E6;">AP 2 Escaños</span> 
                    <span style="color: #9c231b;">PCE-EPK 1 Escaño</span>
                </a>
                <br><br>
                El PNV las gana y obtiene la lehendakaritza gracias a la ausencia de HB
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 75 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1984: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-1984" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                    <span style="color: #298242;">PNV 32 Escaños</span>
                    <span style="color: #FF0000;">PSOE 19 Escaños</span>
                    <span style="color: #01b59c;">HB 11 Escaños</span>
                    <span style="color: #ADD8E6;">AP-PDP-UL 7 Escaños</span> 
                    <span style="color: #DC143C ;">EE 6 Escaños</span>
                </a>
                <br><br>
                El PNV las gana y sumando al PSOE sacan trece escaños por encima de la mayoría absoluta
                <br><br>
                1986: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-1986" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 19 Escaños</span>
                    <span style="color: #298242;">PNV 17 Escaños</span>
                    <span style="color: #01b59c;">HB 13 Escaños</span>
                    <span style="color: #298242;">EUSKO ALKARTASUNA 13 Escaños</span>
                    <span style="color: #DC143C ;">EE 9 Escaños</span>
                    <span style="color: #ADD8E6;">AP-PL 2 Escaños</span> 
                    <span style="color: #006400;">CDS 2 Escaños</span>
                </a>
                <br><br>
                El PSOE las gana en escaños, pero el PNV las gana en votos y sigue gobernando, ya que sumando al PSOE y CDS sacan la mayoría absoluta exacta
                <br><br>
                1990: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-1990" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #298242;">PNV 22 Escaños</span>
                    <span style="color: #FF0000;">PSOE 16 Escaños</span>
                    <span style="color: #01b59c;">HB 13 Escaños</span>
                    <span style="color: #298242;">EUSKO ALKARTASUNA 9 Escaños</span>
                    <span style="color: #0000FF;">PP 6 Escaños</span> 
                    <span style="color: #DC143C ;">EE 6 Escaños</span>
                    <span style="color: #ae6293;">UAL 3 Escaños</span>
                </a>
                <br><br>
                El PNV las gana y sumando a EA y EE sacan 37 escaños, mayoría simple
                <br><br>
                1994: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-1994" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #298242;">PNV 22 Escaños</span>
                    <span style="color: #FF0000;">PSOE 12 Escaños</span>
                    <span style="color: #01b59c;">HB 11 Escaños</span>
                    <span style="color: #0000FF;">PP 11 Escaños</span>
                    <span style="color: #298242;">EUSKO ALKARTASUNA 8 Escaños</span>
                    <span style="color: #d25644 ;">EB 6 Escaños</span>
                    <span style="color: #ae6293;">UAL 5 Escaños</span>
                </a>
                <br><br>
                El PNV las gana y sumando al PSOE y EA sacan diez escaños por encima de la mayoría absoluta
                <br><br>
                1998: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-1998" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #298242;">PNV 21 Escaños</span>
                    <span style="color: #0000FF;">PP 16 Escaños</span> 
                    <span style="color: #01b59c;">EH 14 Escaños</span>
                    <span style="color: #FF0000;">PSOE 14 Escaños</span>
                    <span style="color: #298242;">EUSKO ALKARTASUNA 6 Escaños</span>
                    <span style="color: #d25644 ;">EB 2 Escaños</span>
                    <span style="color: #ae6293;">UAL 2 Escaños</span>
                </a>
                <br><br>
                El PNV las gana y sumando a EH y EA sacan tres escaños por encima de la mayoría absoluta
                <br><br>
                2001: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-2001" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #298242;">PNV-EA 33 Escaños</span>
                    <span style="color: #0000FF;">PP 19 Escaños</span>
                    <span style="color: #FF0000;">PSOE 13 Escaños</span>
                    <span style="color: #01b59c;">EH 7 Escaños</span>
                    <span style="color: #d25644 ;">EB 3 Escaños</span>
</a>
<br><br>
PNV-EA las gana y sumando a EB sacan 36 escaños, mayoría simple
<br><br>

2005: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-2005" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #298242;">PNV-EA 29 Escaños</span>
                    <span style="color: #FF0000;">PSOE 18 Escaños</span>
                    <span style="color: #0000FF;">PP 15 Escaños</span>
                    <span style="color: #9c231b;">PCTV-EHAK 9 Escaños</span>
                    <span style="color: #d25644 ;">EB 3 Escaños</span>
                    <span style="color: #692d3e;">ARALAR 1 Escaño</span>
</a>
<br><br>
PNV-EA las gana y sumando a PCTV-EHAK y EB sacan tres escaños por encima de la mayoría absoluta
<br><br>

2009: <a href="https://resultados.elpais.com/elecciones/2009/autonomicas/14/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #298242;">PNV 30 Escaños</span>
    <span style="color: #FF0000;">PSOE 25 Escaños</span>
                    <span style="color: #0000FF;">PP 13 Escaños</span>
                    <span style="color: #692d3e;">ARALAR 4 Escaños</span>
                    <span style="color: #298242;">EUSKO ALKARTASUNA 1 Escaño</span>
                    <span style="color: #d25644 ;">EB 1 Escaño</span>
                    <span style="color: #d7257d;">UPyD 1 Escaño</span>
</a>
<br><br>
El PNV las gana, pero la suma de PSOE, PP y UPyD saca un escaño por encima de la mayoría absoluta
<br><br>
2012: <a href="https://resultados.elpais.com/elecciones/2012/autonomicas/14/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #298242;">PNV 27 Escaños</span>
    <span style="color: #01b59c;">EHBILDU 21 Escaños</span>
    <span style="color: #FF0000;">PSOE 16 Escaños</span>
                    <span style="color: #0000FF;">PP 10 Escaños</span>
                    <span style="color: #d7257d;">UPyD 1 Escaño</span>
</a>
<br><br>
El PNV las gana con mayoría simple
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/autonomicas/14/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #298242;">PNV 28 Escaños</span>
    <span style="color: #01b59c;">EHBILDU 18 Escaños</span>
    <span style="color: #800080;">PODEMOS-IU 11 Escaños</span>
    <span style="color: #FF0000;">PSOE 9 Escaños</span>
    <span style="color: #0000FF;">PP 9 Escaños</span>
</a>
<br><br>
El PNV las gana y sumando al PSOE sacan 37 escaños, mayoría simple
<br><br>
2020: <a href="https://resultados.elpais.com/elecciones/2020/autonomicas/14/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #298242;">PNV 31 Escaños</span>
    <span style="color: #01b59c;">EHBILDU 21 Escaños</span>
    <span style="color: #FF0000;">PSOE 10 Escaños</span>
    <span style="color: #800080;">PODEMOS 6 Escaños</span>
    <span style="color: #0000FF;">PP+CS 6 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span>
</a>
<br><br>
El PNV las gana y sumando al PSOE sacan tres escaños por encima de la mayoría absoluta
<br><br>
2024: <a href="https://elpais.com/espana/elecciones/autonomicas/14/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #298242;">PNV 27 Escaños</span>
    <span style="color: #01b59c;">EHBILDU 27 Escaños</span>
    <span style="color: #FF0000;">PSOE 12 Escaños</span>
    <span style="color: #0000FF;">PP 7 Escaños</span>
    <span style="color: #FF69B4;">SUMAR 1 Escaño</span>  
    <span style="color: #008000;">VOX 1 Escaño</span>
</a>
<br><br>
El PNV las gana y sumando al PSOE sacan un escaño por encima de la mayoría absoluta
<br><br>
En conclusión, Euskadi es una comunidad autónoma 
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Euskadi</title>
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
function abrirVentanaEscenario7175(provincia) {
    if (provincia === "Alava") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Alava <span class="escaños">25 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1980: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-1980/alava" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #298242;">PNV 9 Escaños</span>
                    <span style="color: #FFA500;">UCD 5 Escaños</span> 
                    <span style="color: #01b59c;">HB 4 Escaños</span>
                    <span style="color: #FF0000;">PSOE 4 Escaños</span>
                    <span style="color: #DC143C ;">EE 2 Escaños</span>
                    <span style="color: #ADD8E6;">AP 1 Escaño</span> 
                </a>
                <br><br>
                El PNV sube dos escaños y UCD, HB y PSOE uno, por lo que el PNV con la ausencia de HB saca un escaño a la suma de UCD, PSOE, EE y AP
                <br><br>
                1984: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-1984/alava" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                    <span style="color: #298242;">PNV 9 Escaños</span>
                    <span style="color: #FF0000;">PSOE 7 Escaños</span>
                    <span style="color: #ADD8E6;">AP-PDP-UL 4 Escaños</span> 
                    <span style="color: #01b59c;">HB 3 Escaños</span>
                    <span style="color: #DC143C ;">EE 2 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1986: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-1986/alava" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 7 Escaños</span>
                    <span style="color: #298242;">PNV 5 Escaños</span>
                    <span style="color: #298242;">EUSKO ALKARTASUNA 4 Escaños</span>
                    <span style="color: #01b59c;">HB 3 Escaños</span>
                    <span style="color: #DC143C ;">EE 3 Escaños</span>
                    <span style="color: #006400;">CDS 2 Escaños</span>
                    <span style="color: #ADD8E6;">AP-PL 1 Escaño</span> 
                </a>
                <br><br>
                IGUAL
                <br><br>
                1990: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-1990/alava" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #298242;">PNV 6 Escaños</span>
                    <span style="color: #FF0000;">PSOE 6 Escaños</span>
                    <span style="color: #01b59c;">HB 3 Escaños</span>
                    <span style="color: #ae6293;">UAL 3 Escaños</span>
                    <span style="color: #0000FF;">PP 3 Escaños</span> 
                    <span style="color: #298242;">EUSKO ALKARTASUNA 2 Escaños</span>
                    <span style="color: #DC143C ;">EE 2 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1994: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-1994/alava" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #298242;">PNV 6 Escaños</span>
                    <span style="color: #ae6293;">UAL 5 Escaños</span>
                    <span style="color: #0000FF;">PP 4 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 4 Escaños</span>
                    <span style="color: #01b59c;">HB 2 Escaños</span>
                    <span style="color: #d25644 ;">EB 2 Escaños</span>
                    <span style="color: #298242;">EUSKO ALKARTASUNA 2 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1998: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-1998/alava" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 7 Escaños</span> 
                    <span style="color: #298242;">PNV 6 Escaños</span>
                    <span style="color: #FF0000;">PSOE 5 Escaños</span>
                    <span style="color: #01b59c;">EH 3 Escaños</span>
                    <span style="color: #ae6293;">UAL 2 Escaños</span>
                    <span style="color: #298242;">EUSKO ALKARTASUNA 1 Escaño</span>
                    <span style="color: #d25644 ;">EB 1 Escaño</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                2001: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-2001/alava" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #298242;">PNV-EA 9 Escaños</span>
                    <span style="color: #0000FF;">PP 9 Escaños</span>
                    <span style="color: #FF0000;">PSOE 5 Escaños</span>
                    <span style="color: #01b59c;">EH 1 Escaño</span>
                    <span style="color: #d25644 ;">EB 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2005: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-2005/alava" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #298242;">PNV-EA 8 Escaños</span>
                    <span style="color: #0000FF;">PP 7 Escaños</span>
                    <span style="color: #FF0000;">PSOE 7 Escaños</span>
                    <span style="color: #9c231b;">PCTV-EHAK 2 Escaños</span>
                    <span style="color: #d25644 ;">EB 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2009: <a href="https://resultados.elpais.com/elecciones/2009/autonomicas/14/01.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 9 Escaños</span>
    <span style="color: #298242;">PNV 8 Escaños</span>
                    <span style="color: #0000FF;">PP 6 Escaños</span>
                    <span style="color: #692d3e;">ARALAR 1 Escaño</span>
                    <span style="color: #d7257d;">UPyD 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>
2012: <a href="https://resultados.elpais.com/elecciones/2012/autonomicas/14/01.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #298242;">PNV 7 Escaños</span>
    <span style="color: #01b59c;">EHBILDU 6 Escaños</span>
    <span style="color: #FF0000;">PSOE 6 Escaños</span>
                    <span style="color: #0000FF;">PP 5 Escaños</span>
                    <span style="color: #d7257d;">UPyD 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/autonomicas/14/01.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #298242;">PNV 8 Escaños</span>
    <span style="color: #0000FF;">PP 5 Escaños</span>
    <span style="color: #01b59c;">EHBILDU 5 Escaños</span>
    <span style="color: #800080;">PODEMOS-IU 4 Escaños</span>
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>
2020: <a href="https://resultados.elpais.com/elecciones/2020/autonomicas/14/01.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #298242;">PNV 9 Escaños</span>
    <span style="color: #01b59c;">EHBILDU 6 Escaños</span>
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP+CS 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>
2024: <a href="https://elpais.com/espana/elecciones/autonomicas/14/01/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #01b59c;">EHBILDU 8 Escaños</span>
    <span style="color: #298242;">PNV 7 Escaños</span>
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 4 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span>
    <span style="color: #FF69B4;">SUMAR 1 Escaño</span>  
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Alava es una provincia  
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Alava</title>
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
if (provincia === "Vizcaya") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Vizcaya <span class="escaños">25 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1980: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-1980/bizkaia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #298242;">PNV 11 Escaños</span>
                    <span style="color: #01b59c;">HB 4 Escaños</span>
                    <span style="color: #FF0000;">PSOE 4 Escaños</span>
                    <span style="color: #DC143C ;">EE 2 Escaños</span>
                    <span style="color: #FFA500;">UCD 2 Escaños</span> 
                    <span style="color: #ADD8E6;">AP 1 Escaño</span> 
                    <span style="color: #9c231b;">PCE-EPK 1 Escaño</span>
                </a>
                <br><br>
                El PNV sube dos escaños, PSOE, EE y UCD uno, por lo que el PNV con la ausencia de HB saca cinco escaños de ventaja a la suma de PSOE, EE, UCD, AP y PCE-EPK
                <br><br>
                1984: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-1984/bizkaia" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                    <span style="color: #298242;">PNV 12 Escaños</span>
                    <span style="color: #FF0000;">PSOE 6 Escaños</span>
                    <span style="color: #01b59c;">HB 3 Escaños</span>
                    <span style="color: #ADD8E6;">AP-PDP-UL 2 Escaños</span> 
                    <span style="color: #DC143C ;">EE 2 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1986: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-1986/bizkaia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #298242;">PNV 8 Escaños</span>
                    <span style="color: #FF0000;">PSOE 6 Escaños</span>
                    <span style="color: #01b59c;">HB 4 Escaños</span>
                    <span style="color: #298242;">EUSKO ALKARTASUNA 3 Escaños</span>
                    <span style="color: #DC143C ;">EE 3 Escaños</span>
                    <span style="color: #ADD8E6;">AP-PL 1 Escaño</span> 
                </a>
                <br><br>
                IGUAL
                <br><br>
                1990: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-1990/bizkaia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #298242;">PNV 10 Escaños</span>
                    <span style="color: #FF0000;">PSOE 5 Escaños</span>
                    <span style="color: #01b59c;">HB 4 Escaños</span>
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
                    <span style="color: #298242;">EUSKO ALKARTASUNA 2 Escaños</span>
                    <span style="color: #DC143C ;">EE 2 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1994: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-1994/bizkaia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #298242;">PNV 10 Escaños</span>
                    <span style="color: #FF0000;">PSOE 4 Escaños</span>
                    <span style="color: #0000FF;">PP 4 Escaños</span> 
                    <span style="color: #01b59c;">HB 3 Escaños</span>
                    <span style="color: #d25644 ;">EB 2 Escaños</span>
                    <span style="color: #298242;">EUSKO ALKARTASUNA 2 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1998: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-1998/bizkaia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #298242;">PNV 9 Escaños</span>
                    <span style="color: #0000FF;">PP 5 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 5 Escaños</span>
                    <span style="color: #01b59c;">EH 4 Escaños</span>
                    <span style="color: #d25644 ;">EB 1 Escaño</span>
                    <span style="color: #298242;">EUSKO ALKARTASUNA 1 Escaño</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                2001: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-2001/bizkaia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #298242;">PNV-EA 12 Escaños</span>
                    <span style="color: #0000FF;">PP 6 Escaños</span>
                    <span style="color: #FF0000;">PSOE 4 Escaños</span>
                    <span style="color: #01b59c;">EH 2 Escaños</span>
                    <span style="color: #d25644 ;">EB 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2005: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-2005/bizkaia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #298242;">PNV-EA 11 Escaños</span>
                    <span style="color: #FF0000;">PSOE 6 Escaños</span>
                    <span style="color: #0000FF;">PP 5 Escaños</span>
                    <span style="color: #9c231b;">PCTV-EHAK 2 Escaños</span>
                    <span style="color: #d25644 ;">EB 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2009: <a href="https://resultados.elpais.com/elecciones/2009/autonomicas/14/48.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #298242;">PNV 12 Escaños</span>
    <span style="color: #FF0000;">PSOE 8 Escaños</span>
                    <span style="color: #0000FF;">PP 4 Escaños</span>
                    <span style="color: #692d3e;">ARALAR 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>
2012: <a href="https://resultados.elpais.com/elecciones/2012/autonomicas/14/48.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #298242;">PNV 11 Escaños</span>
    <span style="color: #01b59c;">EHBILDU 6 Escaños</span>
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
                    <span style="color: #0000FF;">PP 3 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/autonomicas/14/48.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #298242;">PNV 11 Escaños</span>
    <span style="color: #01b59c;">EHBILDU 5 Escaños</span>
    <span style="color: #800080;">PODEMOS-IU 4 Escaños</span>
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>
2020: <a href="https://resultados.elpais.com/elecciones/2020/autonomicas/14/48.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #298242;">PNV 12 Escaños</span>
    <span style="color: #01b59c;">EHBILDU 6 Escaños</span>
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #0000FF;">PP+CS 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>
2024: <a href="https://elpais.com/espana/elecciones/autonomicas/14/48/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #298242;">PNV 11 Escaños</span>
    <span style="color: #01b59c;">EHBILDU 8 Escaños</span>
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Vizcaya es una provincia   
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Vizcaya</title>
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
if (provincia === "Guipuzcoa") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Guipuzcoa <span class="escaños">25 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1980: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-1980/gipuzkoa" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #298242;">PNV 11 Escaños</span>
                    <span style="color: #01b59c;">HB 5 Escaños</span>
                    <span style="color: #FF0000;">PSOE 4 Escaños</span>
                    <span style="color: #DC143C ;">EE 3 Escaños</span>
                    <span style="color: #FFA500;">UCD 2 Escaños</span> 
                </a>
                <br><br>
                El PNV gana dos escaños, HB, PSOE y UCD ganan un escaño, por lo que el PNV con la ausencia de HB saca siete escaños de ventaja a la suma de PSOE, EE y UCD
                <br><br>
                1984: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-1984/gipuzkoa" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                    <span style="color: #298242;">PNV 11 Escaños</span>
                    <span style="color: #FF0000;">PSOE 6 Escaños</span>
                    <span style="color: #01b59c;">HB 5 Escaños</span>
                    <span style="color: #DC143C ;">EE 2 Escaños</span>
                    <span style="color: #ADD8E6;">AP-PDP-UL 1 Escaño</span> 
                </a>
                <br><br>
                IGUAL
                <br><br>
                1986: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-1986/gipuzkoa" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #298242;">EUSKO ALKARTASUNA 6 Escaños</span>
                    <span style="color: #01b59c;">HB 6 Escaños</span>
                    <span style="color: #FF0000;">PSOE 6 Escaños</span>
                    <span style="color: #298242;">PNV 4 Escaños</span>
                    <span style="color: #DC143C ;">EE 3 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1990: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-1990/gipuzkoa" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #01b59c;">HB 6 Escaños</span>
                    <span style="color: #298242;">PNV 6 Escaños</span>
                    <span style="color: #FF0000;">PSOE 5 Escaños</span> 
                    <span style="color: #298242;">EUSKO ALKARTASUNA 5 Escaños</span>
                    <span style="color: #DC143C ;">EE 2 Escaños</span>
                    <span style="color: #0000FF;">PP 1 Escaño</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1994: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-1994/gipuzkoa" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #01b59c;">HB 6 Escaños</span>
                    <span style="color: #298242;">PNV 6 Escaños</span>
                    <span style="color: #298242;">EUSKO ALKARTASUNA 4 Escaños</span>
                    <span style="color: #FF0000;">PSOE 4 Escaños</span>
                    <span style="color: #0000FF;">PP 3 Escaños</span> 
                    <span style="color: #d25644 ;">EB 2 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1998: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-1998/gipuzkoa" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #01b59c;">EH 7 Escaños</span>
                    <span style="color: #298242;">PNV 6 Escaños</span>
                    <span style="color: #0000FF;">PP 4 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 4 Escaños</span>
                    <span style="color: #298242;">EUSKO ALKARTASUNA 4 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                2001: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-2001/gipuzkoa" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #298242;">PNV-EA 12 Escaños</span>
                    <span style="color: #0000FF;">PP 4 Escaños</span>
                    <span style="color: #FF0000;">PSOE 4 Escaños</span>
                    <span style="color: #01b59c;">EH 4 Escaños</span>
                    <span style="color: #d25644 ;">EB 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2005: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-2005/gipuzkoa" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #298242;">PNV-EA 10 Escaños</span>
                    <span style="color: #FF0000;">PSOE 5 Escaños</span>
                    <span style="color: #9c231b;">PCTV-EHAK 5 Escaños</span>
                    <span style="color: #0000FF;">PP 3 Escaños</span>
                    <span style="color: #d25644 ;">EB 1 Escaño</span>
                    <span style="color: #692d3e;">ARALAR 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2009: <a href="https://resultados.elpais.com/elecciones/2009/autonomicas/14/20.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #298242;">PNV 10 Escaños</span>
    <span style="color: #FF0000;">PSOE 8 Escaños</span>
                    <span style="color: #0000FF;">PP 3 Escaños</span>
                    <span style="color: #692d3e;">ARALAR 2 Escaños</span>
                    <span style="color: #298242;">EUSKO ALKARTASUNA 1 Escaño</span>
                    <span style="color: #d25644 ;">EB 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>
2012: <a href="https://resultados.elpais.com/elecciones/2012/autonomicas/14/20.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #01b59c;">EHBILDU 9 Escaños</span>
    <span style="color: #298242;">PNV 9 Escaños</span>
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
                    <span style="color: #0000FF;">PP 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/autonomicas/14/20.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #298242;">PNV 9 Escaños</span>
    <span style="color: #01b59c;">EHBILDU 8 Escaños</span>
    <span style="color: #800080;">PODEMOS-IU 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>
2020: <a href="https://resultados.elpais.com/elecciones/2020/autonomicas/14/20.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #298242;">PNV 10 Escaños</span>
    <span style="color: #01b59c;">EHBILDU 9 Escaños</span>
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #0000FF;">PP+CS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>
2024: <a href="https://elpais.com/espana/elecciones/autonomicas/14/20/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #01b59c;">EHBILDU 11 Escaños</span>
    <span style="color: #298242;">PNV 9 Escaños</span>
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Guipúzcoa es una provincia   
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Guipuzcoa</title>
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
if (provincia === "Euskadi") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Euskadi <span class="escaños">75 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1980: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-1980" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #298242;">PNV 31 Escaños</span>
                    <span style="color: #01b59c;">HB 13 Escaños</span>
                    <span style="color: #FF0000;">PSOE 12 Escaños</span>
                    <span style="color: #DC143C ;">EE 7 Escaños</span>
                    <span style="color: #FFA500;">UCD 9 Escaños</span> 
                    <span style="color: #ADD8E6;">AP 2 Escaños</span> 
                    <span style="color: #9c231b;">PCE-EPK 1 Escaño</span>
                </a>
                <br><br>
                El PNV las gana y con la ausencia de HB sacan seis escaños por encima de la mayoría absoluta
                <br><br>
                1984: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-1984" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                    <span style="color: #298242;">PNV 32 Escaños</span>
                    <span style="color: #FF0000;">PSOE 19 Escaños</span>
                    <span style="color: #01b59c;">HB 11 Escaños</span>
                    <span style="color: #ADD8E6;">AP-PDP-UL 7 Escaños</span> 
                    <span style="color: #DC143C ;">EE 6 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1986: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-1986" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 19 Escaños</span>
                    <span style="color: #298242;">PNV 17 Escaños</span>
                    <span style="color: #01b59c;">HB 13 Escaños</span>
                    <span style="color: #298242;">EUSKO ALKARTASUNA 13 Escaños</span>
                    <span style="color: #DC143C ;">EE 9 Escaños</span>
                    <span style="color: #ADD8E6;">AP-PL 2 Escaños</span> 
                    <span style="color: #006400;">CDS 2 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1990: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-1990" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #298242;">PNV 22 Escaños</span>
                    <span style="color: #FF0000;">PSOE 16 Escaños</span>
                    <span style="color: #01b59c;">HB 13 Escaños</span>
                    <span style="color: #298242;">EUSKO ALKARTASUNA 9 Escaños</span>
                    <span style="color: #0000FF;">PP 6 Escaños</span> 
                    <span style="color: #DC143C ;">EE 6 Escaños</span>
                    <span style="color: #ae6293;">UAL 3 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1994: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-1994" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #298242;">PNV 22 Escaños</span>
                    <span style="color: #FF0000;">PSOE 12 Escaños</span>
                    <span style="color: #01b59c;">HB 11 Escaños</span>
                    <span style="color: #0000FF;">PP 11 Escaños</span>
                    <span style="color: #298242;">EUSKO ALKARTASUNA 8 Escaños</span>
                    <span style="color: #d25644 ;">EB 6 Escaños</span>
                    <span style="color: #ae6293;">UAL 5 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1998: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-1998" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #298242;">PNV 21 Escaños</span>
                    <span style="color: #0000FF;">PP 16 Escaños</span> 
                    <span style="color: #01b59c;">EH 14 Escaños</span>
                    <span style="color: #FF0000;">PSOE 14 Escaños</span>
                    <span style="color: #298242;">EUSKO ALKARTASUNA 6 Escaños</span>
                    <span style="color: #d25644 ;">EB 2 Escaños</span>
                    <span style="color: #ae6293;">UAL 2 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                2001: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-2001" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #298242;">PNV-EA 33 Escaños</span>
                    <span style="color: #0000FF;">PP 19 Escaños</span>
                    <span style="color: #FF0000;">PSOE 13 Escaños</span>
                    <span style="color: #01b59c;">EH 7 Escaños</span>
                    <span style="color: #d25644 ;">EB 3 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2005: <a href="https://www.datoselecciones.com/pais-vasco-parlamento-2005" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #298242;">PNV-EA 29 Escaños</span>
                    <span style="color: #FF0000;">PSOE 18 Escaños</span>
                    <span style="color: #0000FF;">PP 15 Escaños</span>
                    <span style="color: #9c231b;">PCTV-EHAK 9 Escaños</span>
                    <span style="color: #d25644 ;">EB 3 Escaños</span>
                    <span style="color: #692d3e;">ARALAR 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2009: <a href="https://resultados.elpais.com/elecciones/2009/autonomicas/14/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #298242;">PNV 30 Escaños</span>
    <span style="color: #FF0000;">PSOE 25 Escaños</span>
                    <span style="color: #0000FF;">PP 13 Escaños</span>
                    <span style="color: #692d3e;">ARALAR 4 Escaños</span>
                    <span style="color: #298242;">EUSKO ALKARTASUNA 1 Escaño</span>
                    <span style="color: #d25644 ;">EB 1 Escaño</span>
                    <span style="color: #d7257d;">UPyD 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>
2012: <a href="https://resultados.elpais.com/elecciones/2012/autonomicas/14/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #298242;">PNV 27 Escaños</span>
    <span style="color: #01b59c;">EHBILDU 21 Escaños</span>
    <span style="color: #FF0000;">PSOE 16 Escaños</span>
                    <span style="color: #0000FF;">PP 10 Escaños</span>
                    <span style="color: #d7257d;">UPyD 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/autonomicas/14/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #298242;">PNV 28 Escaños</span>
    <span style="color: #01b59c;">EHBILDU 18 Escaños</span>
    <span style="color: #800080;">PODEMOS-IU 11 Escaños</span>
    <span style="color: #FF0000;">PSOE 9 Escaños</span>
    <span style="color: #0000FF;">PP 9 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>
2020: <a href="https://resultados.elpais.com/elecciones/2020/autonomicas/14/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #298242;">PNV 31 Escaños</span>
    <span style="color: #01b59c;">EHBILDU 21 Escaños</span>
    <span style="color: #FF0000;">PSOE 10 Escaños</span>
    <span style="color: #800080;">PODEMOS 6 Escaños</span>
    <span style="color: #0000FF;">PP+CS 6 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>
2024: <a href="https://elpais.com/espana/elecciones/autonomicas/14/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #298242;">PNV 27 Escaños</span>
    <span style="color: #01b59c;">EHBILDU 27 Escaños</span>
    <span style="color: #FF0000;">PSOE 12 Escaños</span>
    <span style="color: #0000FF;">PP 7 Escaños</span>
    <span style="color: #FF69B4;">SUMAR 1 Escaño</span>  
    <span style="color: #008000;">VOX 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Euskadi es una comunidad autónoma 
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Euskadi</title>
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