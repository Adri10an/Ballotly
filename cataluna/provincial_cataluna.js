    function abrirVentana(provincia) {

if (provincia === "Lleida") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Lleida <span class="escaños">15 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1980: <a href="https://www.datoselecciones.com/catalunya-parlamento-1980/lleida" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #40E0D0;">CIU 5 Escaños</span> 
                    <span style="color: #FFA500;">CC-UCD 4 Escaños</span> 
                    <span style="color: #FF0000;">PSC-PSOE 3 Escaños</span> 
                    <span style="color: #c99f00;">ERC 2 Escaños</span>   
                    <span style="color: #CC0000;">PSUC-PCE 1 Escaño</span> 
                </a>
                <br><br>
                CIU las gana y sumando a CC-UCD y ERC sacan siete escaños de ventaja a la suma del PSC y PSUC-PCE. CIU gana a CC-UCD por 7757 votos, CC-UCD gana al PSC por 6593 votos, el PSC gana a ERC por 11247 votos y ERC gana a PSUC-PCE por 2597 votos 
                <br><br>
                1984: <a href="https://www.datoselecciones.com/catalunya-parlamento-1984/lleida" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                    <span style="color: #40E0D0;">CIU 10 Escaños</span> 
                    <span style="color: #FF0000;">PSC-PSOE 3 Escaños</span>
                    <span style="color: #ADD8E6;">AP-PDP-UL 1 Escaño</span>
                    <span style="color: #c99f00;">ERC 1 Escaño</span>   
                </a>
                <br><br>
                CIU las gana y sumando a AP-PDP-UL y cuadruplican en escaños al PSC. CIU casi triplica al PSC en votos, el PSC dobla a AP-PDP-UL en votos y AP-PDP-UL gana a ERC por 5580 votos
                <br><br>
                1988: <a href="https://www.datoselecciones.com/catalunya-parlamento-1988/lleida" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #40E0D0;">CIU 9 Escaños</span> 
                    <span style="color: #FF0000;">PSC-PSOE 4 Escaños</span>
                    <span style="color: #ADD8E6;">AP 1 Escaño</span>
                    <span style="color: #c99f00;">ERC 1 Escaño</span>
                </a>
                <br><br>
                CIU las gana y sumando a AP doblan en escaños a la suma de PSC y ERC. CIU dobla al PSC en votos, el PSC triplica a AP en votos y AP gana a ERC por tan solo 473 votos
                <br><br>
                1992: <a href="https://www.datoselecciones.com/catalunya-parlamento-1992/lleida" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #40E0D0;">CIU 9 Escaños</span> 
                    <span style="color: #FF0000;">PSC-PSOE 4 Escaños</span>
                    <span style="color: #c99f00;">ERC 1 Escaño</span>
                    <span style="color: #0000FF;">PP 1 Escaño</span> 
                </a>
                <br><br>
                CIU las gana y sumando al PP doblan en escaños a la suma de PSC y ERC. CIU dobla al PSC en votos, el PSC dobla a ERC en votos y ERC gana al PP por 5015 votos
                <br><br>
                1995: <a href="https://www.datoselecciones.com/catalunya-parlamento-1995/lleida" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #40E0D0;">CIU 8 Escaños</span> 
                    <span style="color: #FF0000;">PSC-PSOE 3 Escaños</span>
                    <span style="color: #c99f00;">ERC 2 Escaños</span>
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
                </a>
                <br><br>
                CIU las gana y sumando a PSC y PP sacan once escaños de ventaja a ERC. CIU dobla al PSC en votos, el PSC gana a ERC por 13263 votos y ERC gana al PP por tan solo 1214 votos
                <br><br>
                1999: <a href="https://www.datoselecciones.com/catalunya-parlamento-1999/lleida" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #40E0D0;">CIU 8 Escaños</span> 
                    <span style="color: #FF0000;">PSC-PSOE 5 Escaños</span>
                    <span style="color: #c99f00;">ERC 1 Escaño</span>
                    <span style="color: #0000FF;">PP 1 Escaño</span> 
                </a>
                <br><br>
                CIU las gana y sumando a ERC y el PP doblan en escaños al PSC. CIU gana al PSC por 35236 votos, el PSC dobla a ERC en votos y ERC gana al PP por 6890 votos
                <br><br>
                2003: <a href="https://www.datoselecciones.com/catalunya-parlamento-2003/lleida" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #40E0D0;">CIU 7 Escaños</span> 
                    <span style="color: #FF0000;">PSC-PSOE 4 Escaños</span>
                    <span style="color: #c99f00;">ERC 3 Escaños</span>
                    <span style="color: #0000FF;">PP 1 Escaño</span> 
</a>
<br><br>
CIU las gana y sumando al PP sacan un escaño a la suma de PSC y ERC. CIU gana al PSC por 38687 votos, el PSC gana a ERC por 5149 votos y ERC dobla al PP en votos
<br><br>

2006: <a href="https://www.datoselecciones.com/catalunya-parlamento-2006/lleida" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #40E0D0;">CIU 7 Escaños</span> 
                    <span style="color: #FF0000;">PSC-PSOE 3 Escaños</span>
                    <span style="color: #c99f00;">ERC 3 Escaños</span>
                    <span style="color: #0000FF;">PP 1 Escaño</span> 
                    <span style="color: #008e7f;">ICV-EUiA 1 Escaño</span> 
</a>
<br><br>
CIU las gana y sumando al PP sacan un escaño de ventaja a la suma de PSC-PSOE, ERC e ICV-EUiA. CIU gana al PSC por 32819 votos, el PSC gana a ERC por 7793 votos, ERC gana al PP por 15699 votos y el PP gana a ICV-EUiA por 4587 votos
<br><br>

2010: <a href="https://resultados.elpais.com/elecciones/2010/autonomicas/09/25.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #40E0D0;">CIU 9 Escaños</span> 
                    <span style="color: #FF0000;">PSC-PSOE 3 Escaños</span>
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
                    <span style="color: #c99f00;">ERC 1 Escaño</span>
</a>
<br><br>
CIU las gana y sumando al PSC cuadruplican en escaños a la suma de PP y ERC. CIU triplica al PSC en votos, el PSC gana al PP por 8501 votos y el PP gana a ERC por tan solo 1994 votos
<br><br>
2012: <a href="https://resultados.elpais.com/elecciones/2012/autonomicas/09/25.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #40E0D0;">CIU 8 Escaños</span>
    <span style="color: #c99f00;">ERC 3 Escaños</span> 
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSC-PSOE 1 Escaño</span>
    <span style="color: #008e7f;">ICV-EUiA 1 Escaño</span> 
</a>
<br><br>
CIU las gana y sumando a ERC sacan siete escaños de ventaja a la suma de PP, PSC e ICV-EUiA. CIU dobla a ERC en votos, ERC gana al PP por 12673 votos, el PP gana al PSC por tan solo 1740 votos y el PSC gana a ICV-EUiA por 10453 votos 
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/09/25.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #40E0D0;">JXSÍ 10 Escaños</span>
    <span style="color: #FF7F00;">CS 2 Escaños</span> 
    <span style="color: #FF0000;">PSC-PSOE 1 Escaño</span>
        <span style="color: #010101;">CUP 1 Escaño</span> 
        <span style="color: #0000FF;">PP 1 Escaño</span> 
</a>
<br><br>
JXSÍ las gana y sumando a la CUP sacan siete escaños de ventaja a la suma de CS, PSC y PP. JXSÍ cuadruplica a CIUDADANOS en votos, CIUDADANOS gana al PSC por 7248 votos, el PSC gana a la CUP por tan solo 628 votos y la CUP gana al PP por tan solo 1975 votos
<br><br>
2017: <a href="https://resultados.elpais.com/elecciones/2017/autonomicas/09/25.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #40E0D0;">JUNTS 6 Escaños</span>
    <span style="color: #c99f00;">ERC 5 Escaños</span> 
    <span style="color: #FF7F00;">CS 3 Escaños</span> 
    <span style="color: #FF0000;">PSC-PSOE 1 Escaño</span>
</a>
<br><br>
JUNTS las gana y sumando a ERC sacan siete escaños de ventaja a la suma de CS y PSC. JUNTS gana a ERC por 13886 votos, ERC gana a CS por 23509 votos y CS gana al PSC por 19113 votos
<br><br>
2021: <a href="https://resultados.elpais.com/elecciones/2021/autonomicas/09/25.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #40E0D0;">JUNTS 5 Escaños</span>
    <span style="color: #c99f00;">ERC 5 Escaños</span> 
    <span style="color: #FF0000;">PSC-PSOE 3 Escaños</span>
    <span style="color: #010101;">CUP 1 Escaño</span> 
    <span style="color: #008000;">VOX 1 Escaño</span>
</a>
<br><br>
JUNTS las gana y sumando a ERC y CUP sacan siete escaños de ventaja a la suma de PSC y VOX. JUNTS gana a ERC por 2332 votos, ERC gana al PSC por 18490 votos, el PSC dobla a la CUP en votos y la CUP gana a VOX por 2973 votos
<br><br>
2024: <a href="https://elpais.com/espana/elecciones/autonomicas/09/25/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #40E0D0;">JUNTS 5 Escaños</span>
    <span style="color: #FF0000;">PSC-PSOE 4 Escaños</span>
    <span style="color: #c99f00;">ERC 3 Escaños</span> 
    <span style="color: #0000FF;">PP 1 Escaño</span> 
    <span style="color: #0f4c81;">AC 1 Escaño</span> 
    <span style="color: #008000;">VOX 1 Escaño</span>
</a>
<br><br>
JUNTS las gana y sumando a ERC y AC sacan tres escaños de ventaja a la suma de PSC, PP y VOX. JUNTS gana al PSC por 16365 votos, el PSC gana a ERC por 6993 votos, ERC gana al PP por 11975 votos, el PP gana a AC por 2316 votos y AC gana a VOX por 2559 votos
<br><br>
En conclusión, Lleida es una provincia 
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Lleida</title>
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
if (provincia === "Girona") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Girona <span class="escaños">17 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1980: <a href="https://www.datoselecciones.com/catalunya-parlamento-1980/girona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #40E0D0;">CIU 7 Escaños</span> 
                    <span style="color: #FF0000;">PSC-PSOE 4 Escaños</span> 
                    <span style="color: #FFA500;">CC-UCD 3 Escaños</span> 
                    <span style="color: #c99f00;">ERC 2 Escaños</span>   
                    <span style="color: #CC0000;">PSUC-PCE 1 Escaño</span> 
                </a>
                <br><br>
                CIU las gana y sumando a CC-UCD y ERC sacan siete escaños de ventaja a la suma del PSC y PSUC-PCE. CIU gana al PSC por 39760 votos, el PSC gana a CC-UCD por 10209 votos, CC-UCD gana a ERC por 10281 votos y ERC gana a PSUC-PCE por 2948 votos
                <br><br>
                1984: <a href="https://www.datoselecciones.com/catalunya-parlamento-1984/girona" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                    <span style="color: #40E0D0;">CIU 11 Escaños</span> 
                    <span style="color: #FF0000;">PSC-PSOE 4 Escaños</span>
                    <span style="color: #c99f00;">ERC 1 Escaño</span>   
                    <span style="color: #ADD8E6;">AP-PDP-UL 1 Escaño</span>
                </a>
                <br><br>
                CIU las gana y sumando a ERC y AP-PDP-UL sacan nueve escaños de ventaja al PSC. CIU dobla al PSC en votos, el PSC triplica a ERC en votos y ERC gana a AP-PDP-UL por tan solo 1368 votos 
                <br><br>
                1988: <a href="https://www.datoselecciones.com/catalunya-parlamento-1988/girona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #40E0D0;">CIU 11 Escaños</span> 
                    <span style="color: #FF0000;">PSC-PSOE 5 Escaños</span>
                    <span style="color: #c99f00;">ERC 1 Escaño</span>
                </a>
                <br><br>
                CIU las gana sacan cinco escaños de ventaja a la suma de PSC y ERC. CIU dobla al PSC en votos y el PSC cuadruplica a ERC en votos
                <br><br>
                1992: <a href="https://www.datoselecciones.com/catalunya-parlamento-1992/girona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #40E0D0;">CIU 11 Escaños</span> 
                    <span style="color: #FF0000;">PSC-PSOE 4 Escaños</span>
                    <span style="color: #c99f00;">ERC 2 Escaños</span>
                </a>
                <br><br>
                CIU las gana sacando cinco cinco escaños de ventaja a la suma de PSC y ERC. CIU dobla al PSC en votos y el PSC gana a ERC por 25321 votos
                <br><br>
                1995: <a href="https://www.datoselecciones.com/catalunya-parlamento-1995/girona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #40E0D0;">CIU 9 Escaños</span> 
                    <span style="color: #FF0000;">PSC-PSOE 5 Escaños</span>
                    <span style="color: #c99f00;">ERC 2 Escaños</span>
                    <span style="color: #0000FF;">PP 1 Escaño</span> 
                </a>
                <br><br>
                CIU las gana y sumando al PSC y el PP sacan trece escaños de ventaja a ERC. CIU gana al PSC por 65888 votos, el PSC dobla a ERC en votos y ERC gana al PP por 12720 votos
                <br><br>
                1999: <a href="https://www.datoselecciones.com/catalunya-parlamento-1999/girona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #40E0D0;">CIU 9 Escaños</span> 
                    <span style="color: #FF0000;">PSC-PSOE 5 Escaños</span>
                    <span style="color: #c99f00;">ERC 2 Escaños</span>
                    <span style="color: #0000FF;">PP 1 Escaño</span> 
                </a>
                <br><br>
                CIU las gana y sumando a ERC y PP sacan siete escaños de ventaja al PSC. CIU gana al PSC por 54577 votos, el PSC dobla a ERC en votos y ERC dobla al PP en votos
                <br><br>
                2003: <a href="https://www.datoselecciones.com/catalunya-parlamento-2003/girona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #40E0D0;">CIU 7 Escaños</span> 
                    <span style="color: #FF0000;">PSC-PSOE 4 Escaños</span>
                    <span style="color: #c99f00;">ERC 4 Escaños</span>
                    <span style="color: #0000FF;">PP 1 Escaño</span> 
                    <span style="color: #008e7f;">ICV-EUA 1 Escaño</span> 
</a>
<br><br>
CIU las gana, pero la suma de PSC, ERC e ICV-EUA saca un escaño de ventaja a la suma de CIU y PP. CIU gana al PSC por 45934 votos, el PSC gana a ERC por 5363 votos, ERC dobla al PP en votos y el PP gana a ICV-EA por 8370 votos
<br><br>

2006: <a href="https://www.datoselecciones.com/catalunya-parlamento-2006/girona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #40E0D0;">CIU 7 Escaños</span> 
                    <span style="color: #FF0000;">PSC-PSOE 4 Escaños</span>
                    <span style="color: #c99f00;">ERC 4 Escaños</span>
                    <span style="color: #008e7f;">ICV-EUiA 1 Escaño</span> 
                    <span style="color: #0000FF;">PP 1 Escaño</span> 
            
</a>
<br><br>
CIU las gana, pero la suma de PSC, ERC e ICV-EUA saca un escaño de ventaja a la suma de CIU y PP. CIU gana al PSC por 44085 votos, el PSC gana a ERC por 7956 votos, ERC dobla a ICV-EUiA en votos e ICV-EUiA gana al PP por tan solo 1170 votos
<br><br>

2010: <a href="https://resultados.elpais.com/elecciones/2010/autonomicas/09/17.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #40E0D0;">CIU 9 Escaños</span> 
                    <span style="color: #FF0000;">PSC-PSOE 3 Escaños</span>
                    <span style="color: #c99f00;">ERC 2 Escaños</span>
                    <span style="color: #0000FF;">PP 1 Escaño</span> 
                    <span style="color: #008e7f;">ICV-EUiA 1 Escaño</span> 
                    <span style="color: #01dab2;">SI 1 Escaño</span>
</a>
<br><br>
CIU las gana y sumando al PP y SI sacan cinco escaños de ventaja a la suma de PSC, ERC e ICV-EUiA. CIU triplica al PSC en votos, el PSC gana a ERC por 14863 votos, ERC gana al PP por tan solo 1631 votos, el PP gana a ICV-EUiA por 11139 votos e ICV-EUiA gana a SI por tan solo 220 votos
<br><br>
2012: <a href="https://resultados.elpais.com/elecciones/2012/autonomicas/09/17.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #40E0D0;">CIU 9 Escaños</span>
    <span style="color: #c99f00;">ERC 3 Escaños</span> 
    <span style="color: #FF0000;">PSC-PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #008e7f;">ICV-EUiA 1 Escaño</span> 
</a>
<br><br>
CIU las gana y sumando a ERC sacan siete escaños de ventaja a la suma de PSC-PP e ICV-EUiA. CIU dobla a ERC en votos, ERC gana al PSC por 26670 votos, el PSC gana al PP por tan solo 1572 votos y el PP gana a ICV-EUiA por 12699 votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/09/17.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #40E0D0;">JXSÍ 11 Escaños</span>
    <span style="color: #FF7F00;">CS 2 Escaños</span> 
    <span style="color: #FF0000;">PSC-PSOE 1 Escaño</span>
        <span style="color: #010101;">CUP 1 Escaño</span> 
        <span style="color: #0000FF;">PP 1 Escaño</span> 
        <span style="color: #800080;">CSQP 1 Escaño</span> 
</a>
<br><br>
JXSÍ las gana y sumando a la CUP sacan siete escaños de ventaja a la suma de CS, PSC, PP y <a href="https://es.wikipedia.org/wiki/Catalunya_S%C3%AD_que_es_Pot" target="_blank">CSQP</a>
. JXSÍ cuadruplica a CS en votos, CS gana al PSC por 14930 votos, el PSC gana a la CUP por tan solo 299 votos, la CUP gana al PP por 10457 votos y el PP gana a CSQP por 4261 votos
<br><br>
2017: <a href="https://resultados.elpais.com/elecciones/2017/autonomicas/09/17.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #40E0D0;">JUNTS 7 Escaños</span>
    <span style="color: #c99f00;">ERC 4 Escaños</span> 
    <span style="color: #FF7F00;">CS 4 Escaños</span> 
    <span style="color: #FF0000;">PSC-PSOE 1 Escaño</span>
    <span style="color: #010101;">CUP 1 Escaño</span> 
</a>
<br><br>
JUNTS las gana y sumando a ERC y la CUP sacan siete escaños de ventaja a la suma de CS y PSC. JUNTS gana a ERC por 61056 votos, ERC gana a CIUDADANOS por 8948 votos, CIUDADANOS dobla al PSC en votos y el PSC gana a la CUP por 13489 votos
<br><br>
2021: <a href="https://resultados.elpais.com/elecciones/2021/autonomicas/09/17.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #40E0D0;">JUNTS 7 Escaños</span>
    <span style="color: #c99f00;">ERC 4 Escaños</span> 
    <span style="color: #FF0000;">PSC-PSOE 3 Escaños</span>
    <span style="color: #010101;">CUP 2 Escaños</span> 
    <span style="color: #008000;">VOX 1 Escaño</span>
</a>
<br><br>
JUNTS las gana y sumando a ERC y la CUP sacan nueve escaños de ventaja a la suma de PSC y VOX. JUNTS gana a ERC por 29877 votos, ERC gana al PSC por 18215 votos, el PSC gana a la CUP por 16841 votos y la CUP gana a VOX por 7920 votos
<br><br>
2024: <a href="https://elpais.com/espana/elecciones/autonomicas/09/17/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #40E0D0;">JUNTS 7 Escaños</span>
    <span style="color: #FF0000;">PSC-PSOE 4 Escaños</span>
    <span style="color: #c99f00;">ERC 2 Escaños</span> 
    <span style="color: #0f4c81;">AC 1 Escaño</span> 
    <span style="color: #0000FF;">PP 1 Escaño</span> 
    <span style="color: #008000;">VOX 1 Escaño</span>
    <span style="color: #010101;">CUP 1 Escaño</span> 
</a>
<br><br>
JUNTS las gana y sumando a ERC, AC y la CUP sacan cinco escaños de ventaja a la suma de PSC, PP y VOX. JUNTS gana al PSC por 45716 votos, el PSC gana a ERC por 22377 votos, ERC gana a AC por 8802 votos, AC gana al PP por 7420 votos, el PP gana a VOX por tan solo 558 votos y VOX gana a la CUP por 4165 votos
<br><br>
En conclusión, Girona es una provincia
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Girona</title>
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
if (provincia === "Tarragona") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Tarragona <span class="escaños">18 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1980: <a href="https://www.datoselecciones.com/catalunya-parlamento-1980/tarragona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #40E0D0;">CIU 5 Escaños</span> 
                    <span style="color: #FF0000;">PSC-PSOE 4 Escaños</span> 
                    <span style="color: #FFA500;">CC-UCD 4 Escaños</span> 
                    <span style="color: #CC0000;">PSUC-PCE 3 Escaños</span> 
                    <span style="color: #c99f00;">ERC 2 Escaños</span>   
                </a>
                <br><br>
                CIU las gana y sumando a CC-UCD y ERC sacan cuatro escaños de ventaja a la suma de PSC y PSUC-PCE. CIU gana al PSC por 6770 votos, el PSC gana a CC-UCD por tan solo 1977 votos, CC-UCD gana a PSUC-PCE por 10268 votos y PSUC-PCE gana a ERC por 10355 votos
                <br><br>
                1984: <a href="https://www.datoselecciones.com/catalunya-parlamento-1984/tarragona" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                    <span style="color: #40E0D0;">CIU 10 Escaños</span> 
                    <span style="color: #FF0000;">PSC-PSOE 5 Escaños</span>
                    <span style="color: #ADD8E6;">AP-PDP-UL 2 Escaños</span>
                    <span style="color: #CC0000;">PSUC-PCE 1 Escaño</span> 
                </a>
                <br><br>
                CIU las gana y sumando a AP-PDP-UL doblan en escaños a la suma de PSC y PSUC-PCE. CIU gana al PSC por 52667 votos, el PSC dobla a AP-PDP-UL en votos y AP-PDP-UL gana a PSUC-PCE por 12109 votos
                <br><br>
                1988: <a href="https://www.datoselecciones.com/catalunya-parlamento-1988/tarragona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #40E0D0;">CIU 10 Escaños</span> 
                    <span style="color: #FF0000;">PSC-PSOE 5 Escaños</span>
                    <span style="color: #ADD8E6;">AP 1 Escaño</span>
                    <span style="color: #008e7f;">ICV-EUA 1 Escaño</span> 
                    <span style="color: #c99f00;">ERC 1 Escaño</span>
                </a>
                <br><br>
                CIU las gana y sumando a AP sacan cuatro escaños de ventaja a la suma de PSC, ICV-EUA y ERC. CIU gana al PSC por 48483 votos, el PSC casi cuadruplica en votos a AP, AP gana a ICV-EUA por 3700 votos e ICV-EUA gana a ERC por tan solo 537 votos
                <br><br>
                1992: <a href="https://www.datoselecciones.com/catalunya-parlamento-1992/tarragona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #40E0D0;">CIU 9 Escaños</span> 
                    <span style="color: #FF0000;">PSC-PSOE 5 Escaños</span>
                    <span style="color: #c99f00;">ERC 2 Escaños</span>
                    <span style="color: #0000FF;">PP 1 Escaño</span> 
                    <span style="color: #008e7f;">ICV-EUA 1 Escaño</span> 
                </a>
                <br><br>
                CIU las gana y sumando al PP sacan dos escaños de ventaja a la suma de PSC, ERC e ICV-EUA. CIU gana al PSC por 47005 votos, el PSC casi triplica en votos a ERC, ERC gana al PP por 3660 votos y el PP gana a ICV-EUA por 7144 votos
                <br><br>
                1995: <a href="https://www.datoselecciones.com/catalunya-parlamento-1995/tarragona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #40E0D0;">CIU 9 Escaños</span> 
                    <span style="color: #FF0000;">PSC-PSOE 4 Escaños</span>
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
                    <span style="color: #c99f00;">ERC 2 Escaños</span>
                    <span style="color: #008e7f;">ICV-EUA 1 Escaño</span> 
                </a>
                <br><br>
                CIU las gana y sumando al PSC y PP quintuplican en escaños a la suma de ERC e ICV-EUA. CIU gana al PSC por 59069 votos, el PSC gana al PP por 26178 votos, el PP gana a ERC por 9737 votos y ERC gana a ICV-EUA por 13619 votos
                <br><br>
                1999: <a href="https://www.datoselecciones.com/catalunya-parlamento-1999/tarragona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #40E0D0;">CIU 8 Escaños</span> 
                    <span style="color: #FF0000;">PSC-PSOE 6 Escaños</span>
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
                    <span style="color: #c99f00;">ERC 2 Escaños</span>
                </a>
                <br><br>
                CIU las gana y sumando al PP sacan dos escaños a la suma de PSC y ERC. CIU gana al PSC por 20342 votos, el PSC triplica al PP en votos y el PP gana a ERC por tan solo 375 votos
                <br><br>
                2003: <a href="https://www.datoselecciones.com/catalunya-parlamento-2003/tarragona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #40E0D0;">CIU 7 Escaños</span> 
                    <span style="color: #FF0000;">PSC-PSOE 5 Escaños</span>
                    <span style="color: #c99f00;">ERC 3 Escaños</span>
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
                    <span style="color: #008e7f;">ICV-EUA 1 Escaño</span> 
</a>
<br><br>
CIU las gana y sumando al PP empatan en escaños a la suma de PSC, ERC e ICV-EUA. CIU gana al PSC por 17480 votos, el PSC gana a ERC por 29017 votos, ERC gana al PP por 22909 votos y el PP dobla a ICV-EUA en votos
<br><br>

2006: <a href="https://www.datoselecciones.com/catalunya-parlamento-2006/tarragona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #40E0D0;">CIU 7 Escaños</span> 
                    <span style="color: #FF0000;">PSC-PSOE 5 Escaños</span>
                    <span style="color: #c99f00;">ERC 3 Escaños</span>
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
                    <span style="color: #008e7f;">ICV-EUiA 1 Escaño</span> 
            
</a>
<br><br>
CIU las gana y sumando al PP empatan en escaños a la suma de PSC, ERC e ICV-EUA. CIU gana al PSC por 18557 votos, el PSC gana a ERC por 24034 votos, ERC gana al PP por 19042 votos y el PP gana a ICV-EUA por 12915 votos
<br><br>

2010: <a href="https://resultados.elpais.com/elecciones/2010/autonomicas/09/43.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #40E0D0;">CIU 9 Escaños</span> 
                    <span style="color: #FF0000;">PSC-PSOE 4 Escaños</span>
                    <span style="color: #0000FF;">PP 3 Escaños</span> 
                    <span style="color: #c99f00;">ERC 1 Escaño</span>
                    <span style="color: #008e7f;">ICV-EUiA 1 Escaño</span> 
</a>
<br><br>
CIU las gana y sumando al PSC sacan ocho escaños de ventaja a la suma del PP, ERC e ICV-EUiA. CIU dobla al PSC en votos, el PSC gana al PP por 15063 votos, el PP gana a ERC por 15063 votos y ERC gana a ICV-EUiA por 10608 votos
<br><br>
2012: <a href="https://resultados.elpais.com/elecciones/2012/autonomicas/09/43.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #40E0D0;">CIU 7 Escaños</span>
    <span style="color: #c99f00;">ERC 3 Escaños</span> 
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSC-PSOE 3 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span> 
    <span style="color: #008e7f;">ICV-EUiA 1 Escaño</span> 
</a>
<br><br>
CIU las gana y sumando a ERC sacan dos escaños de ventaja a la suma de PP, PSC, CS e ICV-EUiA. CIU dobla a ERC en votos, ERC gana al PP por tan solo 502 votos, el PP gana al PSC por 4949 votos, el PSC gana a CIUDADANOS por 22603 votos y CIUDADANOS gana a ICV-EUiA por tan solo 1501 votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/09/43.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #40E0D0;">JXSÍ 9 Escaños</span>
    <span style="color: #FF7F00;">CS 4 Escaños</span> 
    <span style="color: #FF0000;">PSC-PSOE 2 Escaños</span>
        <span style="color: #0000FF;">PP 1 Escaño</span> 
        <span style="color: #010101;">CUP 1 Escaño</span> 
        <span style="color: #800080;">CSQP 1 Escaño</span> 
</a>
<br><br>
JXSI las gana y sumando a la CUP sacan dos escaños de ventaja a la suma de CS, PSC, PP y CSQP. JXSI dobla a CIUDADANOS en votos, CIUDADANOS gana al PSC por 31358 votos, el PSC gana al PP por 12048 votos, el PP gana a la CUP por 6355 votos y la CUP gana a CSQP por 3805 votos
<br><br>
2017: <a href="https://resultados.elpais.com/elecciones/2017/autonomicas/09/43.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF7F00;">CS 5 Escaños</span> 
    <span style="color: #c99f00;">ERC 5 Escaños</span> 
    <span style="color: #40E0D0;">JUNTS 4 Escaños</span>
    <span style="color: #FF0000;">PSC-PSOE 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span> 
    <span style="color: #0000FF;">PP 1 Escaño</span> 
</a>
<br><br>
CS las gana y sumando al PSC, PODEMOS y PP empatan en escaños a la suma de ERC y JUNTS. CIUDADANOS gana a ERC por 15993 votos, ERC gana a JUNTS por 8801 votos, JUNTS gana al PSC por 44014 votos, el PSC dobla a PODEMOS en votos y PODEMOS gana al PP por 3465 votos
<br><br>
2021: <a href="https://resultados.elpais.com/elecciones/2021/autonomicas/09/43.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #c99f00;">ERC 5 Escaños</span> 
    <span style="color: #FF0000;">PSC-PSOE 4 Escaños</span>
    <span style="color: #40E0D0;">JUNTS 4 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span>
    <span style="color: #010101;">CUP 1 Escaños</span> 
    <span style="color: #FF7F00;">CS 1 Escaño</span> 
    <span style="color: #800080;">PODEMOS 1 Escaño</span> 
</a>
<br><br>
ERC las gana y sumando a JUNYS y la CUP sacan dos escaños de ventaja a la suma de PSC, VOX, CS y PODEMOS. ERC gana al PSC por 12345 votos, el PSC gana a JUNTS por tan solo 1852 votos, JUNTS dobla a VOX en votos, VOX gana a la CUP por 7240 votos, la CUP gana a CIUDADANOS por 4329 votos y CIUDADANOS gana a PODEMOS por tan solo 887 votos
<br><br>
2024: <a href="https://elpais.com/espana/elecciones/autonomicas/09/43/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSC-PSOE 6 Escaños</span>
    <span style="color: #40E0D0;">JUNTS 5 Escaños</span>
    <span style="color: #c99f00;">ERC 3 Escaños</span> 
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #008000;">VOX 2 Escaños</span>
</a>
<br><br>
El PSC las gana y sumando a ERC empatan en escaños a la suma de JUNTS, PP y VOX. El PSC gana a JUNTS por 13088 votos, JUNTS gana a ERC por 16354 votos, ERC gana al PP por 13586 votos y el PP gana a VOX por 5250 votos
<br><br>
En conclusión, Tarragona es una provincia
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Tarragona</title>
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
if (provincia === "Barcelona") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Barcelona <span class="escaños">85 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1980: <a href="https://www.datoselecciones.com/catalunya-parlamento-1980/barcelona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #40E0D0;">CIU 26 Escaños</span> 
                    <span style="color: #FF0000;">PSC-PSOE 22 Escaños</span> 
                    <span style="color: #CC0000;">PSUC-PCE 20 Escaños</span> 
                    <span style="color: #c99f00;">ERC 8 Escaños</span> 
                    <span style="color: #FFA500;">CC-UCD 7 Escaños</span>   
                    <span style="color: #15AA35;">PSA 2 Escaños</span>
                </a>
                <br><br>
                CIU las gana, pero la suma de PSC, PSUC y PSA sacan tres escaños de ventaja a la suma de CIU, ERC y CC-UCD. CIU gana al PSC por 85346 votos, el PSC gana a PSUC-PCE por 49437 votos, PSUC-PCE dobla a ERC en votos, ERC gana a CC-UCD por 2693 votos y CC-UCD dobla al PSA en votos 
                <br><br>
                1984: <a href="https://www.datoselecciones.com/catalunya-parlamento-1984/barcelona" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                    <span style="color: #40E0D0;">CIU 41 Escaños</span> 
                    <span style="color: #FF0000;">PSC-PSOE 29 Escaños</span>
                    <span style="color: #ADD8E6;">AP-PDP-UL 7 Escaños</span>
                    <span style="color: #CC0000;">PSUC-PCE 5 Escaños</span>
                    <span style="color: #c99f00;">ERC 3 Escaños</span> 
                </a>
                <br><br>
                CIU las gana y sumando a AP-PDP-UL y ERC sacan diecisiete escaños de ventaja a la suma de PSC y PSUC-PCE. CIU gana al PSC por 266298 votos, el PSC cuadruplica a AP-PDP-UL en votos, AP-PDP-UL gana a PSUC-PCE por 32128 votos y PSUC-PCE gana a ERC por 44522 votos
                <br><br>
                1988: <a href="https://www.datoselecciones.com/catalunya-parlamento-1988/barcelona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #40E0D0;">CIU 39 Escaños</span> 
                    <span style="color: #FF0000;">PSC-PSOE 28 Escaños</span>
                    <span style="color: #008e7f;">ICV-EUA 8 Escaños</span> 
                    <span style="color: #ADD8E6;">AP 4 Escaños</span>
                    <span style="color: #006400;">CDS 3 Escaños</span>
                    <span style="color: #c99f00;">ERC 3 Escaños</span>
                </a>
                <br><br>
                CIU las gana y sumando a AP y CDS sacan siete escaños de ventaja a la suma de PSC, ICV-EUA y ERC. CIU gana al PSC por 250585 votos, el PSC triplica a ICV-EUA en votos, ICV-EUA gana a AP por 73655 votos, AP gana a CDS por 28290 votos y CDS gana a ERC por 2828 votos
                <br><br>
                1992: <a href="https://www.datoselecciones.com/catalunya-parlamento-1992/barcelona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #40E0D0;">CIU 41 Escaños</span> 
                    <span style="color: #FF0000;">PSC-PSOE 27 Escaños</span>
                    <span style="color: #008e7f;">ICV-EUA 6 Escaños</span> 
                    <span style="color: #c99f00;">ERC 6 Escaños</span>
                    <span style="color: #0000FF;">PP 5 Escaños</span> 
                </a>
                <br><br>
                CIU las gana y sumando al PP sacan siete escaños de ventaja a la suma de PSC, ICV-EUA y ERC. CIU gana al PSC por 310722 votos, el PSC casi cuadruplica a ICV-EUA en votos, ICV-EUA gana a ERC por 4556 votos y ERC gana al PP por 24972 votos
                <br><br>
                1995: <a href="https://www.datoselecciones.com/catalunya-parlamento-1995/tarragona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #40E0D0;">CIU 34 Escaños</span> 
                    <span style="color: #FF0000;">PSC-PSOE 22 Escaños</span>
                    <span style="color: #0000FF;">PP 12 Escaños</span> 
                    <span style="color: #008e7f;">ICV-EUA 10 Escaños</span> 
                    <span style="color: #c99f00;">ERC 7 Escaños</span>
                </a>
                <br><br>
                CIU las gana y sumando al PSC y el PP sacan cincuenta y un escaños de ventaja a la suma de ICV-EUA y ERC. CIU gana al PSC por 332663 votos, el PSC gana al PP por 288339 votos, el PP gana a ICV-EUA por 58195 votos e ICV-EUA gana a ERC por 61887 votos
                <br><br>
                1999: <a href="https://www.datoselecciones.com/catalunya-parlamento-1999/barcelona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSC-PSOE 36 Escaños</span>
                    <span style="color: #40E0D0;">CIU 31 Escaños</span>
                    <span style="color: #0000FF;">PP 8 Escaños</span> 
                    <span style="color: #c99f00;">ERC 7 Escaños</span>
                    <span style="color: #008e7f;">ICV-EUA 3 Escaños</span> 
                </a>
                <br><br>
                El PSC las gana, pero la suma de CIU, PP y ERC saca siete escaños de ventaja a la suma de PSC e ICV-EUA. El PSC gana a CIU por 115034 votos, CIU triplica al PP en votos, el PP gana a ERC por 51687 y ERC dobla a ICV-EUA en votos
                <br><br>
                2003: <a href="https://www.datoselecciones.com/catalunya-parlamento-2003/barcelona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSC-PSOE 29 Escaños</span>
                    <span style="color: #40E0D0;">CIU 25 Escaños</span> 
                    <span style="color: #c99f00;">ERC 13 Escaños</span>
                    <span style="color: #0000FF;">PP 11 Escaños</span> 
                    <span style="color: #008e7f;">ICV-EUA 7 Escaños</span> 
</a>
<br><br>
El PSC las gana y sumando a ERC e ICV-EUA sacan trece escaños de ventaja a la suma de CIU y PP. El PSC gana a CIU por 109130 votos, CIU gana a ERC por 338471 votos, ERC gana al PP por 64741 votos y el PP gana a ICV-EUA por 112375 votos
<br><br>

2006: <a href="https://www.datoselecciones.com/catalunya-parlamento-2006/barcelona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #40E0D0;">CIU 27 Escaños</span> 
                    <span style="color: #FF0000;">PSC-PSOE 25 Escaños</span>
                    <span style="color: #c99f00;">ERC 11 Escaños</span>
                    <span style="color: #0000FF;">PP 10 Escaños</span> 
                    <span style="color: #008e7f;">ICV-EUiA 9 Escaños</span> 
                    <span style="color: #FF7F00;">CS 3 Escaños</span> 
</a>
<br><br>
CIU las gana, pero la suma de PSC, ERC e ICV-EUiA saca cinco escaños de ventaja a la suma de CIU, PP y CS. CIU gana al PSC por 44122 votos, el PSC dobla a ERC en votos, ERC gana al PP por 32401 votos, el PP gana a ICV-EUiA por 17197 votos e ICV-EUiA casi triplica a CIUDADANOS en votos 
<br><br>

2010: <a href="https://resultados.elpais.com/elecciones/2010/autonomicas/09/08.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #40E0D0;">CIU 35 Escaños</span> 
                    <span style="color: #FF0000;">PSC-PSOE 18 Escaños</span>
                    <span style="color: #0000FF;">PP 12 Escaños</span>
                    <span style="color: #008e7f;">ICV-EUiA 8 Escaños</span>  
                    <span style="color: #c99f00;">ERC 6 Escaños</span>
                    <span style="color: #FF7F00;">CS 3 Escaños</span> 
                    <span style="color: #01dab2;">SI 3 Escaños</span>
</a>
<br><br>
CIU las gana y sumando al PSOE sacan veintiun escaños de ventaja a la suma de PP, ICV-EUiA, ERC, CS y SI. CIU gana al PSC por 412740 votos, el PSC gana al PP por 146592 votos, el PP gana a ICV-EUiA por 106020 votos, ICV-EUiA gana a ERC por 44775 votos, ERC gana a CIUDADANOS por 58331 votos y CIUDADANOS gana a SI por 17640 votos
<br><br>
2012: <a href="https://resultados.elpais.com/elecciones/2012/autonomicas/09/08.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #40E0D0;">CIU 26 Escaños</span>
    <span style="color: #FF0000;">PSC-PSOE 14 Escaños</span>
    <span style="color: #0000FF;">PP 12 Escaños</span> 
    <span style="color: #c99f00;">ERC 12 Escaños</span> 
    <span style="color: #008e7f;">ICV-EUiA 10 Escaños</span> 
    <span style="color: #FF7F00;">CS 8 Escaños</span> 
    <span style="color: #010101;">CUP 3 Escaños</span> 
</a>
<br><br>
CIU las gana, pero la suma de PSC, PP, ICV-EUiA, CS y CUP saca nueve escaños de ventaja a la suma de CIU y ERC. CIU gana al PSC por 343781 votos, el PSC gana al PP por 57266 votos, el PP gana a ERC por 15995 votos, ERC gana a ICV-EUiA por 42573 votos, ICV-EUiA gana a CIUDADANOS por 73288 votos y CIUDADANOS dobla a la CUP en votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/09/08.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #40E0D0;">JXSÍ 32 Escaños</span>
    <span style="color: #FF7F00;">CS 17 Escaños</span> 
    <span style="color: #FF0000;">PSC-PSOE 12 Escaños</span>
        <span style="color: #800080;">CSQP 9 Escaños</span>
        <span style="color: #0000FF;">PP 8 Escaños</span>  
        <span style="color: #010101;">CUP 7 Escaños</span> 
</a>
<br><br>
JXSI las gana, pero la suma de CS, PSC, CSQP y PP saca siete escaños de ventaja a la suma de JXSI y la CUP. JXSI gana a CIUDADANOS por 527548 votos, CIUDADANOS gana al PSC por 159227 votos, el PSC gana a CSQP por 109011 votos, CSQP gana al PP por 39332 votos y el PP gana a la CUP por 18034 votos
<br><br>
2017: <a href="https://resultados.elpais.com/elecciones/2017/autonomicas/09/08.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF7F00;">CS 24 Escaños</span> 
    <span style="color: #c99f00;">ERC 18 Escaños</span> 
    <span style="color: #40E0D0;">JUNTS 17 Escaños</span>
    <span style="color: #FF0000;">PSC-PSOE 13 Escaños</span>
    <span style="color: #800080;">PODEMOS 7 Escaños</span> 
    <span style="color: #010101;">CUP 3 Escaños</span> 
    <span style="color: #0000FF;">PP 3 Escaños</span> 
</a>
<br><br>
CIUDADANOS las gana y sumando al PSC, PODEMOS y PP sacan nueve escaños de ventaja a la suma de ERC, JUNTS y la CUP. CIUDADANOS gana a ERC por 190335 votos, ERC gana a JUNTS por 53769 votos, JUNTS gana al PSC por 126611 votos, el PSC gana a PODEMOS por 220840 votos, PODEMOS gana a la CUP por 133099 votos y la CUP gana al PP por tan solo 777 votos
<br><br>
2021: <a href="https://resultados.elpais.com/elecciones/2021/autonomicas/09/08.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSC-PSOE 23 Escaños</span>
    <span style="color: #c99f00;">ERC 19 Escaños</span> 
    <span style="color: #40E0D0;">JUNTS 16 Escaños</span>
    <span style="color: #008000;">VOX 7 Escaños</span>
    <span style="color: #800080;">PODEMOS 7 Escaños</span>
    <span style="color: #010101;">CUP 5 Escaños</span> 
    <span style="color: #FF7F00;">CS 5 Escaños</span>  
    <span style="color: #0000FF;">PP 3 Escaños</span> 
</a>
<br><br>
El PSC las gana y sumando a VOX, PODEMOS, CS y PP sacan cinco escaños de ventaja a la suma de ERC, JUNTS y la CUP. El PSC gana a ERC por 98301 votos, ERC gana a JUNTS por 53617 votos, JUNTS dobla a VOX en votos, VOX gana a PODEMOS por tan solo 1301 votos, PODEMOS gana a la CUP por 31148 votos, la CUP gana a CIUDADANOS por 4268 votos y CIUDADANOS gana al PP por 43372 votos
<br><br>
2024: <a href="https://elpais.com/espana/elecciones/autonomicas/09/08/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSC-PSOE 28 Escaños</span>
    <span style="color: #40E0D0;">JUNTS 18 Escaños</span>
    <span style="color: #c99f00;">ERC 12 Escaños</span> 
    <span style="color: #0000FF;">PP 11 Escaños</span> 
    <span style="color: #008000;">VOX 7 Escaños</span>
    <span style="color: #FF69B4;">SUMAR 6 Escaños</span> 
    <span style="color: #010101;">CUP 3 Escaños</span> 
</a>
<br><br>
El PSC las gana y sumando a ERC y SUMAR sacan siete escaños de ventaja a la suma de JUNTS, PP, VOX y la CUP. El PSC gana a JUNTS por 247056 votos, JUNTS gana a ERC por 139956 votos, ERC gana al PP por 42768 votos, el PP gana a VOX por 83347 votos, VOX gana a SUMAR por 30987 votos y SUMAR gana a la CUP por 63093 votos
<br><br>
En conclusión, Barcelona es una provincia
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Barcelona</title>
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
if (provincia === "Cataluña") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Cataluña <span class="escaños">135 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1980: <a href="https://www.datoselecciones.com/catalunya-parlamento-1980" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #40E0D0;">CIU 43 Escaños</span> 
                    <span style="color: #FF0000;">PSC-PSOE 33 Escaños</span> 
                    <span style="color: #CC0000;">PSUC-PCE 25 Escaños</span> 
                    <span style="color: #FFA500;">CC-UCD 18 Escaños</span> 
                    <span style="color: #c99f00;">ERC 14 Escaños</span>  
                    <span style="color: #15AA35;">PSA 2 Escaños</span> 
                </a>
                <br><br>
                CIU las gana y sumando a UCD y ERC sacan siete escaños por encima de la mayoría absoluta
                <br><br>
                1984: <a href="https://www.datoselecciones.com/catalunya-parlamento-1984" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                    <span style="color: #40E0D0;">CIU 72 Escaños</span> 
                    <span style="color: #FF0000;">PSC-PSOE 41 Escaños</span>
                    <span style="color: #ADD8E6;">AP-PDP-UL 11 Escaños</span>
                    <span style="color: #CC0000;">PSUC-PCE 6 Escaños</span> 
                    <span style="color: #c99f00;">ERC 5 Escaños</span>  
                </a>
                <br><br>
                CIU las gana y sumando a AP-PDP-UL y ERC sacan veinte escaños por encima de la mayoría absoluta
                <br><br>
                1988: <a href="https://www.datoselecciones.com/catalunya-parlamento-1988" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #40E0D0;">CIU 69 Escaños</span> 
                    <span style="color: #FF0000;">PSC-PSOE 42 Escaños</span>
                    <span style="color: #008e7f;">ICV-EUA 9 Escaños</span> 
                    <span style="color: #ADD8E6;">AP 6 Escaños</span>
                    <span style="color: #c99f00;">ERC 6 Escaños</span>
                    <span style="color: #006400;">CDS 3 Escaños</span>
                </a>
                <br><br>
                CIU las gana y sumando a AP y CDS sacan diez escaños por encima de la mayoría absoluta
                <br><br>
                1992: <a href="https://www.datoselecciones.com/catalunya-parlamento-1992" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #40E0D0;">CIU 70 Escaños</span> 
                    <span style="color: #FF0000;">PSC-PSOE 40 Escaños</span>
                    <span style="color: #c99f00;">ERC 11 Escaños</span>
                    <span style="color: #008e7f;">ICV-EUA 7 Escaños</span> 
                    <span style="color: #0000FF;">PP 7 Escaños</span> 
                </a>
                <br><br>
                CIU las gana y sumando al PP sacan nueve escaños por encima de la mayoría absoluta
                <br><br>
                1995: <a href="https://www.datoselecciones.com/catalunya-parlamento-1995" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #40E0D0;">CIU 60 Escaños</span> 
                    <span style="color: #FF0000;">PSC-PSOE 34 Escaños</span>
                    <span style="color: #0000FF;">PP 17 Escaños</span> 
                    <span style="color: #c99f00;">ERC 13 Escaños</span>
                    <span style="color: #008e7f;">ICV-EUA 11 Escaños</span> 
                </a>
                <br><br>
                CIU las gana y sumando las abstenciones de PSC y PP sacan cuarenta y tres escaños por encima de la mayoría absoluta
                <br><br>
                1999: <a href="https://www.datoselecciones.com/catalunya-parlamento-1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #40E0D0;">CIU 56 Escaños</span> 
                    <span style="color: #FF0000;">PSC-PSOE 52 Escaños</span>
                    <span style="color: #0000FF;">PP 12 Escaños</span> 
                    <span style="color: #c99f00;">ERC 12 Escaños</span>
                    <span style="color: #008e7f;">ICV-EUA 3 Escaños</span> 
                </a>
                <br><br>
                CIU las gana y sumando al PP sacan la mayoría absoluta exacta. El PSC gana en votos, no en escaños
                <br><br>
                2003: <a href="https://www.datoselecciones.com/catalunya-parlamento-2003" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #40E0D0;">CIU 46 Escaños</span> 
                    <span style="color: #FF0000;">PSC-PSOE 42 Escaños</span>
                    <span style="color: #c99f00;">ERC 23 Escaños</span>
                    <span style="color: #0000FF;">PP 15 Escaños</span> 
                    <span style="color: #008e7f;">ICV-EUA 9 Escaños</span> 
</a>
<br><br>
CIU las gana en escaños, pero el PSC sumando a ERC e ICV-EUA sacan seis escaños por encima de la mayoría absoluta, además el PSC gana en votos
<br><br>

2006: <a href="https://www.datoselecciones.com/catalunya-parlamento-2006" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #40E0D0;">CIU 48 Escaños</span> 
                    <span style="color: #FF0000;">PSC-PSOE 37 Escaños</span>
                    <span style="color: #c99f00;">ERC 21 Escaños</span>
                    <span style="color: #0000FF;">PP 14 Escaños</span> 
                    <span style="color: #008e7f;">ICV-EUiA 12 Escaños</span> 
                    <span style="color: #FF7F00;">CS 3 Escaños</span> 
</a>
<br><br>
CIU las vuelve a ganar, pero el PSC sumando a ERC e ICV-EUA sacan dos escaños por encima de la mayoría absoluta
<br><br>

2010: <a href="https://resultados.elpais.com/elecciones/2010/autonomicas/09/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #40E0D0;">CIU 62 Escaños</span> 
                    <span style="color: #FF0000;">PSC-PSOE 28 Escaños</span>
                    <span style="color: #0000FF;">PP 18 Escaños</span> 
                    <span style="color: #008e7f;">ICV-EUiA 10 Escaños</span> 
                    <span style="color: #c99f00;">ERC 10 Escaños</span>
                    <span style="color: #01dab2;">SI 4 Escaños</span>
                    <span style="color: #FF7F00;">CS 3 Escaños</span> 
</a>
<br><br>
CIU las gana y gracias a la abstención del PSC saca dieciste escaños de ventaja a la suma del resto
<br><br>
2012: <a href="https://resultados.elpais.com/elecciones/2012/autonomicas/09/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #40E0D0;">CIU 50 Escaños</span>
    <span style="color: #c99f00;">ERC 21 Escaños</span> 
    <span style="color: #FF0000;">PSC-PSOE 20 Escaños</span>
    <span style="color: #0000FF;">PP 19 Escaños</span> 
    <span style="color: #008e7f;">ICV-EUiA 13 Escaños</span> 
    <span style="color: #FF7F00;">CS 9 Escaños</span> 
    <span style="color: #010101;">CUP 3 Escaños</span> 
</a>
<br><br>
CIU las gana y sumando a ERC sacan tres escaños por encima de la mayoría absoluta
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/09/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #40E0D0;">JXSÍ 62 Escaños</span>
    <span style="color: #FF7F00;">CS 25 Escaños</span> 
    <span style="color: #FF0000;">PSC-PSOE 16 Escaños</span>
    <span style="color: #800080;">CSQP 11 Escaños</span> 
        <span style="color: #0000FF;">PP 11 Escaños</span> 
        <span style="color: #010101;">CUP 10 Escaños</span> 
</a>
<br><br>
JXSÍ las gana y sumando a la CUP sacan cuatro escaños por encima de la mayoría absoluta
<br><br>
2017: <a href="https://resultados.elpais.com/elecciones/2017/autonomicas/09/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF7F00;">CS 36 Escaños</span> 
    <span style="color: #40E0D0;">JUNTS 34 Escaños</span>
    <span style="color: #c99f00;">ERC 32 Escaños</span> 
    <span style="color: #FF0000;">PSC-PSOE 17 Escaños</span>
    <span style="color: #800080;">PODEMOS 8 Escaños</span> 
    <span style="color: #010101;">CUP 4 Escaños</span> 
    <span style="color: #0000FF;">PP 4 Escaños</span> 
</a>
<br><br>
CIUDADANOS las gana, pero JUNTS sumando a ERC y con la abstención de la CUP logran sacar un escaño de ventaja a la suma del resto
<br><br>
2021: <a href="https://resultados.elpais.com/elecciones/2021/autonomicas/09/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSC-PSOE 33 Escaños</span>
    <span style="color: #c99f00;">ERC 33 Escaños</span> 
    <span style="color: #40E0D0;">JUNTS 32 Escaños</span>
    <span style="color: #008000;">VOX 11 Escaños</span>
    <span style="color: #010101;">CUP 9 Escaños</span> 
    <span style="color: #800080;">PODEMOS 8 Escaños</span> 
    <span style="color: #FF7F00;">CS 6 Escaños</span> 
    <span style="color: #0000FF;">PP 3 Escaños</span> 
</a>
<br><br>
El PSC las gana, pero la suma de ERC, JUNTS y la CUP sacan seis escaños por encima de la mayoría absoluta
<br><br>
2024: <a href="https://elpais.com/espana/elecciones/autonomicas/09/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSC-PSOE 42 Escaños</span>
    <span style="color: #40E0D0;">JUNTS 35 Escaños</span>
    <span style="color: #c99f00;">ERC 20 Escaños</span> 
    <span style="color: #0000FF;">PP 15 Escaños</span> 
    <span style="color: #008000;">VOX 11 Escaños</span>
    <span style="color: #FF69B4;">SUMAR 6 Escaños</span>
    <span style="color: #010101;">CUP 4 Escaños</span> 
    <span style="color: #014983;">AC 2 Escaños</span> 
</a>
<br><br>
El PSC las gana y sumando a ERC y SUMAR sacan la mayoría absoluta exacta
<br><br>
En conclusión, Cataluña es una comunidad autónoma
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Cataluña</title>
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