    function abrirVentana(provincia) {

if (provincia === "Huelva") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Huelva <span class="escaños">11 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1982: <a href="https://www.datoselecciones.com/andalucia-parlamento-1982/huelva" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 8 Escaños</span>  
                <span style="color: #FFA500;">UCD 2 Escaños</span> 
                <span style="color: #ADD8E6;">AP-PDP-UL 1 Escaño</span> 
                </a>
                <br><br>
                El PSOE las gana sacando cinco escaños de ventaja a la suma de UCD y AP-PDP-UL. El PSOE casi triplica a UCD en votos y UCD gana a AP-PDP-UL por 10525 votos
                <br><br>
                1986: <a href="https://www.datoselecciones.com/andalucia-parlamento-1986/huelva" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #FF0000;">PSOE 7 Escaños</span>  
                <span style="color: #ADD8E6;">AP-PDP-UL 3 Escaños</span> 
                <span style="color: #d25644;">IU 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a IU sacan cinco escaños de ventaja a AP-PDP-UL. El PSOE dobla a AP-PDP-UL en votos y AP-PDP-UL gana a IU por 16924 votos
                <br><br>
                1990: <a href="https://www.datoselecciones.com/andalucia-parlamento-1990/huelva" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 7 Escaños</span>  
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
                <span style="color: #d25644;">IU 1 Escaño</span>
                <span style="color: #15AA35;">PA 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a IU y PA sacan siete escaños de ventaja al PP. El PSOE dobla al PP en votos, el PP dobla a IU en votos e IU gana a PA por tan solo 1861 votos
                <br><br>
                1994: <a href="https://www.datoselecciones.com/andalucia-parlamento-1994/huelva" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 5 Escaños</span>  
                    <span style="color: #0000FF;">PP 4 Escaños</span> 
                <span style="color: #d25644;">IU 2 Escaños</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a IU sacan tres escaños de ventaja al PP. El PSOE gana al PP por 22988 votos y el PP dobla a IU en votos
                <br><br>
                1996: <a href="https://www.datoselecciones.com/andalucia-parlamento-1996/huelva" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 6 Escaños</span>  
                    <span style="color: #0000FF;">PP 4 Escaños</span> 
                <span style="color: #d25644;">IU 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a IU sacan tres escaños de ventaja al PP. El PSOE gana al PP por 43424 votos y el PP casi triplica en votos a IU
                <br><br>
                2000: <a href="https://www.datoselecciones.com/andalucia-parlamento-2000/huelva" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 6 Escaños</span>  
                    <span style="color: #0000FF;">PP 5 Escaños</span> 
                </a>
                <br><br>
                El PSOE las gana sacando un escaño de ventaja al PP al que aventaja en 22767 votos
                <br><br>
                2004: <a href="https://www.datoselecciones.com/andalucia-parlamento-2004/huelva" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 7 Escaños</span>  
                    <span style="color: #0000FF;">PP 3 Escaños</span> 
                    <span style="color: #15AA35;">PA 1 Escaño</span>
</a>
<br><br>
El PSOE las gana y sumando a PA sacan cinco escaños de ventaja al PP. El PSOE gana al PP por 66173 votos y el PP triplica a PA en votos
<br><br>
2008: <a href="https://resultados.elpais.com/elecciones/2008/autonomicas/01/21.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 6 Escaños</span>  
                    <span style="color: #0000FF;">PP 4 Escaños</span> 
                <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
El PSOE las gana y sumando a IU sacan tres escaños de ventaja al PP. El PSOE gana al PP por 45048 votos y el PP cuadruplica a IU en votos
<br><br>

2012: <a href="https://resultados.elpais.com/elecciones/2012/autonomicas/01/21.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 5 Escaños</span>  
                    <span style="color: #0000FF;">PP 5 Escaños</span> 
                <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
El PSOE las gana y sumando a IU sacan un escaño de ventaja al PP. El PSOE gana al PP por 11132 votos y el PP triplica a IU en votos
<br><br>
2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/01/21.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 6 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
El PSOE las gana y aunque sumando a PODEMOS sacan tres escaños de ventaja a la suma de PP y CS, CS se alia con el PSOE. El PSOE gana al PP por 34032 votos, el PP dobla a PODEMOS en votos y PODEMOS gana a CIUDADANOS por 13821 votos
<br><br>

2018: <a href="https://resultados.elpais.com/elecciones/2018/autonomicas/01/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF7F00;">CS 2 Escaños</span>
    <span style="color: #24c87e;">AA 1 Escaño</span>
    <span style="color: #008000;">VOX 1 Escaño</span> 
</a>
<br><br>
El PSOE las gana, pero la suma de PP, CS y VOX saca un escaño de ventaja a la suma de PSOE y AA. El PSOE gana al PP por 19018 votos, el PP gana a CIUDADANOS por 13382 votos, CIUDADANOS gana a ADELANTE ANDALUCÍA por 4200 votos y ADELANTE ANDALUCÍA gana a VOX por 12498 votos
<br><br>

2022: <a href="https://resultados.elpais.com/elecciones/2022/autonomicas/01/21.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 6 Escaños</span> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span> 
</a>
<br><br>
El PP las gana y sumando a VOX sacan tres escaños de ventaja al PSOE. El PP gana al PSOE por 32512 votos y el PSOE dobla a VOX en votos
<br><br>
En conclusión, Huelva es una provincia

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Huelva</title>
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
if (provincia === "Sevilla") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Sevilla <span class="escaños">18 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1982: <a href="https://www.datoselecciones.com/andalucia-parlamento-1982/sevilla" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 11 Escaños</span>  
                <span style="color: #ADD8E6;">AP-PDP-UL 3 Escaños</span> 
                <span style="color: #FF0D00;">PCE 2 Escaños</span>
                <span style="color: #FFA500;">UCD 1 Escaño</span> 
                <span style="color: #15AA35;">PA 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana y sumando al PCE y PA saca diez escaños de ventaja a la suma de AP-PDP-UL y UCD. El PSOE casi triplica a AP-PDP-UL en votos, AP-PDP-UL gana al PCE por 57063 votos, el PCE gana a UCD por 5578 votos y UCD gana a PA por 24732 votos
                <br><br>
                1986: <a href="https://www.datoselecciones.com/andalucia-parlamento-1986/sevilla" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #FF0000;">PSOE 10 Escaños</span>  
                <span style="color: #ADD8E6;">AP-PDP-UL 4 Escaños</span> 
                <span style="color: #d25644;">IU 3 Escaños</span>
                <span style="color: #15AA35;">PA 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a IU y PA saca diez escaños de ventaja a AP-PDP-UL. El PSOE dobla a AP-PDP-UL en votos, AP-PDP-UL gana a IU por 19758 votos e IU gana a PA por 68894 votos
                <br><br>
                1990: <a href="https://www.datoselecciones.com/andalucia-parlamento-1990/sevilla" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 10 Escaños</span>  
                    <span style="color: #0000FF;">PP 4 Escaños</span> 
                    <span style="color: #15AA35;">PA 2 Escaños</span>
                <span style="color: #d25644;">IU 2 Escaños</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a PA e IU saca diez escaños de ventaja al PP. El PSOE dobla al PP en votos, el PP gana a PA por 37414 votos y PA gana a IU por 6604 votos
                <br><br>
                1994: <a href="https://www.datoselecciones.com/andalucia-parlamento-1994/sevilla" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 8 Escaños</span>  
                    <span style="color: #0000FF;">PP 6 Escaños</span> 
                <span style="color: #d25644;">IU 3 Escaños</span>
                <span style="color: #15AA35;">PA 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a IU y PA doblan en escaños al PP. El PSOE gana al PP por 97486 votos, el PP gana a IU por 95800 votos e IU triplica a PA en votos
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 19 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1996: <a href="https://www.datoselecciones.com/andalucia-parlamento-1996/sevilla" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 10 Escaños</span>  
                    <span style="color: #0000FF;">PP 6 Escaños</span> 
                <span style="color: #d25644;">IU 2 Escaños</span>
                <span style="color: #15AA35;">PA 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a IU y PA sacan siete escaños de ventaja al PP. El PSOE gana al PP por 183463 votos, el PP dobla a IU en votos e IU gana a PA por 65753 votos
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 18 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                2000: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Andaluc%C3%ADa_de_2000" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 10 Escaños</span>  
                    <span style="color: #0000FF;">PP 6 Escaños</span> 
                    <span style="color: #d25644;">IU 1 Escaño</span>
                <span style="color: #15AA35;">PA 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a IU y PA doblan en escaños al PP. El PSOE gana al PP por 167233 votos, el PP triplica a IU en votos e IU gana a PA por 13576 votos
                <br><br>
                2004: <a href="https://www.datoselecciones.com/andalucia-parlamento-2004/sevilla" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 11 Escaños</span>  
                    <span style="color: #0000FF;">PP 5 Escaños</span> 
                    <span style="color: #d25644;">IU 1 Escaño</span>
                <span style="color: #15AA35;">PA 1 Escaño</span>
</a>
<br><br>
El PSOE las gana y sumando a IU y PA saca ocho escaños de ventaja al PP. El PSOE dobla al PP en votos, el PP triplica a IU en votos e IU gana a PA por 19394 votos
<br><br>
2008: <a href="https://resultados.elpais.com/elecciones/2008/autonomicas/01/41.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 11 Escaños</span>  
                    <span style="color: #0000FF;">PP 6 Escaños</span> 
                <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
El PSOE las gana y sumando a IU doblan en escaños al PP. El PSOE gana al PP por 244767 votos y el PP cuadruplica a IU en votos
<br><br>

2012: <a href="https://resultados.elpais.com/elecciones/2012/autonomicas/01/41.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 9 Escaños</span>  
                    <span style="color: #0000FF;">PP 7 Escaños</span> 
                <span style="color: #d25644;">IU 2 Escaños</span>
</a>
<br><br>
El PSOE las gana y sumando a IU sacan cuatro escaños de ventaja al PP. El PSOE gana al PP por 76358 votos y el PP casi triplica a IU en votos
<br><br>
2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/01/41.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 8 Escaños</span>
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #800080;">PODEMOS 3 Escaños</span>
    <span style="color: #FF7F00;">CS 2 Escaños</span>
    <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
El PSOE las gana y aunque sumando a PODEMOS e IU doblan en escaños a la suma de PP y CS, el PSOE se alía con CS. El PSOE gana al PP por 160600 votos, el PP gana a PODEMOS por 54138 votos, PODEMOS gana a CIUDADANOS por 74315 votos y CIUDADANOS gana a IU por 21182 votos
<br><br>

2018: <a href="https://resultados.elpais.com/elecciones/2018/autonomicas/01/41.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 6 Escaños</span>
    <span style="color: #24c87e;">AA 4 Escaños</span>
    <span style="color: #FF7F00;">CS 3 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #008000;">VOX 2 Escaños</span> 
</a>
<br><br>
El PSOE las gana y sumando a AA sacan dos escaños de ventaja a la suma de CS, PP y VOX. El PSOE gana a AA por 98934 votos, AA gana a CIUDADANOS por 9877 votos, CIUDADANOS gana al PP por 11341 votos y el PP gana a VOX por 51468 votos 
<br><br>

2022: <a href="https://resultados.elpais.com/elecciones/2022/autonomicas/01/41.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 9 Escaños</span> 
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span> 
    <span style="color: #c42065;">POR ANDALUCIA 1 Escaño</span>
    <span style="color: #24c87e;">AA 1 Escaño</span>
</a>
<br><br>
El PP las gana y sumando a VOX sacan cuatro escaños de ventaja a la suma de PSOE, POR ANDALUCIA y AA. El PP gana al PSOE por 123348 votos, el PSOE dobla a VOX en votos, VOX gana a POR ANDALUCIA por 28185 votos y POR ANDALUCIA gana a AA por 19101 votos
<br><br>
En conclusión, Sevilla es una provincia
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Sevilla</title>
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
if (provincia === "Córdoba") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Córdoba <span class="escaños">13 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1982: <a href="https://www.datoselecciones.com/andalucia-parlamento-1982/cordoba" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 7 Escaños</span>  
                <span style="color: #ADD8E6;">AP-PDP-UL 2 Escaños</span> 
                <span style="color: #FFA500;">UCD 2 Escaños</span> 
                <span style="color: #FF0D00;">PCE 2 Escaños</span>
                </a>
                <br><br>
                El PSOE las gana y sumando al PCE sacan cinco escaños de ventaja a la suma de AP-PDP-UL y UCD. El PSOE casi triplica a AP-PDP-UL en votos, AP-PDP-UL gana a UCD por 16057 votos, UCD gana al PCE por tan solo 1748 votos
                <br><br>
                1986: <a href="https://www.datoselecciones.com/andalucia-parlamento-1986/cordoba" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #FF0000;">PSOE 5 Escaños</span>  
                <span style="color: #d25644;">IU 5 Escaños</span>
                <span style="color: #ADD8E6;">AP-PDP-UL 3 Escaños</span> 
                </a>
                <br><br>
                El PSOE las gana y sumando a IU sacan siete escaños de ventaja a AP-PDP-UL. El PSOE gana a IU por 11449 votos e IU gana a AP-PDP-UL por 49212 votos
                <br><br>
                1990: <a href="https://www.datoselecciones.com/andalucia-parlamento-1990/cordoba" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 7 Escaños</span>  
                    <span style="color: #0000FF;">PP 3 Escaños</span> 
                <span style="color: #d25644;">IU 2 Escaños</span>
                <span style="color: #15AA35;">PA 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a IU y PA sacan siete escaños de ventaja al PP. El PSOE dobla al PP en votos, el PP gana a IU por 6794 votos e IU dobla al PA en votos
                <br><br>
                1994: <a href="https://www.datoselecciones.com/andalucia-parlamento-1994/cordoba" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 6 Escaños</span>  
                    <span style="color: #0000FF;">PP 4 Escaños</span> 
                <span style="color: #d25644;">IU 3 Escaños</span> 
                </a>
                <br><br>
                El PSOE las gana y sumando a IU sacan cinco escaños de ventaja al PP. El PSOE gana al PP por 28518 votos y el PP gana a IU por 26374 votos
                <br><br>
                1996: <a href="https://www.datoselecciones.com/andalucia-parlamento-1996/cordoba" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 6 Escaños</span>  
                    <span style="color: #0000FF;">PP 4 Escaños</span> 
                <span style="color: #d25644;">IU 3 Escaños</span> 
                </a>
                <br><br>
                El PSOE las gana y sumando a IU sacan cinco escaños de ventaja al PP. El PSOE gana al PP por 49861 votos y el PP gana a IU por 58766 votos
                <br><br>
                2000: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Andaluc%C3%ADa_de_2000" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 6 Escaños</span>  
                    <span style="color: #0000FF;">PP 5 Escaños</span> 
                    <span style="color: #d25644;">IU 1 Escaño</span>
                <span style="color: #15AA35;">PA 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a IU y PA sacan tres escaños de ventaja al PP. El PSOE gana al PP por 10660 votos, el PP triplica a IU en votos e IU gana a PA por 24831 votos
                <br><br>
                2004: <a href="https://www.datoselecciones.com/andalucia-parlamento-2004/cordoba" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 7 Escaños</span>  
                    <span style="color: #0000FF;">PP 4 Escaños</span> 
                    <span style="color: #d25644;">IU 1 Escaño</span>
                <span style="color: #15AA35;">PA 1 Escaño</span>
</a>
<br><br>
El PSOE las gana y sumando a IU y PA sacan cinco escaños de ventaja al PP. El PSOE gana al PP por 74389, el PP dobla a IU en votos e IU gana a PA por 23855 votos
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 12 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2008: <a href="https://resultados.elpais.com/elecciones/2008/autonomicas/01/14.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 6 Escaños</span>  
                    <span style="color: #0000FF;">PP 5 Escaños</span> 
                <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
El PSOE las gana y sumando a IU sacan dos escaños de ventaja al PP. El PSOE gana al PP por 42144 votos y el PP cuadruplica a IU en votos
<br><br>

2012: <a href="https://resultados.elpais.com/elecciones/2012/autonomicas/01/14.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #FF0000;">PSOE 5 Escaños</span>  
                <span style="color: #d25644;">IU 2 Escaños</span>
</a>
<br><br>
El PP las gana, pero la suma de PSOE e IU saca dos escaños de ventaja al PP. El PP gana al PSOE por 3453 votos y el PSOE casi triplica a IU en votos
<br><br>
2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/01/14.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #d25644;">IU 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
El PSOE las gana y sumando a PODEMOS e IU sacan dos escaños de ventaja a la suma de PP y CS, pero CS pacta con el PSOE. El PSOE gana al PP por 36499 votos, el PP dobla a PODEMOS en votos, PODEMOS gana a IU por 10878 votos e IU gana a CIUDADANOS por 9832 votos
<br><br>

2018: <a href="https://resultados.elpais.com/elecciones/2018/autonomicas/01/14.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF7F00;">CS 2 Escaños</span>
    <span style="color: #24c87e;">AA 2 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span> 
</a>
<br><br>
El PSOE las gana y sumando a AA empatan en escaños a la suma de PP, CS y VOX. El PSOE gana al PP por 27786 votos, el PP gana a CIUDADANOS por 16363 votos, CIUDADANOS gana a AA por 3304 votos y AA gana a VOX por 28952 votos
<br><br>

2022: <a href="https://resultados.elpais.com/elecciones/2022/autonomicas/01/14.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 7 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span> 
    <span style="color: #c42065;">POR ANDALUCIA 1 Escaño</span>
</a>
<br><br>
El PP las gana y sumando a VOX doblan en escaños a la suma de PSOE y POR ANDALUCIA. El PP gana al PSOE por 81927 votos, el PSOE gana a VOX por 42771 votos y VOX gana a POR ANDALUCIA por 9731 votos
<br><br>
En conclusión, Córdoba es una provincia

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Córdoba</title>
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
if (provincia === "Jaén") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Jaén <span class="escaños">13 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1982: <a href="https://www.datoselecciones.com/andalucia-parlamento-1982/jaen" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 8 Escaños</span>  
                <span style="color: #ADD8E6;">AP-PDP-UL 2 Escaños</span> 
                <span style="color: #FFA500;">UCD 2 Escaños</span> 
                <span style="color: #FF0D00;">PCE 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana y sumando al PCE sacan cinco escaños de ventaja a la suma de AP-PDP-UL y UCD. El PSOE triplica a AP-PDP-UL en votos, AP-PDP-UL gana a UCD por tan solo 788 votos y UCD gana al PCE por 24035 votos
                <br><br>
                1986: <a href="https://www.datoselecciones.com/andalucia-parlamento-1986/jaen" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #FF0000;">PSOE 7 Escaños</span>  
                <span style="color: #ADD8E6;">AP-PDP-UL 4 Escaños</span> 
                <span style="color: #d25644;">IU 2 Escaños</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a IU sacan cinco escaños de ventaja a AP-PDP-UL. El PSOE gana a AP-PDP-UL por 81309 votos y AP-PDP-UL gana a IU por 40621 votos
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 12 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1990: <a href="https://www.datoselecciones.com/andalucia-parlamento-1990/jaen" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 7 Escaños</span>  
                    <span style="color: #0000FF;">PP 4 Escaños</span> 
                <span style="color: #d25644;">IU 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a IU doblan en escaños al PP. El PSOE gana al PP por 77923 votos y el PP dobla a IU en votos
                <br><br>
                1994: <a href="https://www.datoselecciones.com/andalucia-parlamento-1994/jaen" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 5 Escaños</span>  
                    <span style="color: #0000FF;">PP 5 Escaños</span> 
                <span style="color: #d25644;">IU 2 Escaños</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a IU sacan dos escaños de ventaja al PP. El PSOE gana al PP por 25032 votos y el PP dobla a IU en votos
                <br><br>
                1996: <a href="https://www.datoselecciones.com/andalucia-parlamento-1996/jaen" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 6 Escaños</span>  
                    <span style="color: #0000FF;">PP 5 Escaños</span> 
                <span style="color: #d25644;">IU 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a IU sacan dos escaños de ventaja al PP. El PSOE gana al PP por 46954 votos y el PP casi triplica a IU en votos
                <br><br>
                2000: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Andaluc%C3%ADa_de_2000" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 6 Escaños</span>  
                    <span style="color: #0000FF;">PP 5 Escaños</span> 
                    <span style="color: #d25644;">IU 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a IU sacan dos escaños de ventaja al PP. El PSOE gana al PP por 39918 votos y el PP quintuplica a IU en votos
                <br><br>
                2004: <a href="https://www.datoselecciones.com/andalucia-parlamento-2004/jaen" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 7 Escaños</span>  
                    <span style="color: #0000FF;">PP 4 Escaños</span> 
                    <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
El PSOE las gana y sumando a IU doblan en escaños al PP. El PSOE gana al PP por 86771 votos y el PP casi quintuplica a IU en votos
<br><br>
2008: <a href="https://resultados.elpais.com/elecciones/2008/autonomicas/01/23.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 7 Escaños</span>  
                    <span style="color: #0000FF;">PP 5 Escaños</span> 
</a>
<br><br>
El PSOE las gana sacando dos escaños de ventaja al PP al que aventaja en 69129 votos
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 11 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2012: <a href="https://resultados.elpais.com/elecciones/2012/autonomicas/01/23.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 5 Escaños</span>  
                    <span style="color: #0000FF;">PP 5 Escaños</span> 
                <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
El PSOE las gana y sumando a IU sacan un escaño de ventaja al PP. El PSOE gana al PP por 12573 votos y el PP cuadruplica a IU en votos
<br><br>
2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/01/23.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 6 Escaños</span>
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
</a>
<br><br>
El PSOE las gana y sumando a PODEMOS sacan tres escaños de ventaja al PP. El PSOE gana al PP por 48838 votos y el PP dobla a PODEMOS en votos
<br><br>

2018: <a href="https://resultados.elpais.com/elecciones/2018/autonomicas/01/23.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF7F00;">CS 2 Escaños</span>
    <span style="color: #24c87e;">AA 1 Escaño</span>
    <span style="color: #008000;">VOX 1 Escaño</span> 
</a>
<br><br>
El PSOE las gana, pero la suma de PP, CS y VOX saca un escaño de ventaja a la suma de PSOE y AA. El PSOE gana al PP por 38807 votos, el PP gana a CIUDADANOS por 22928 votos, CIUDADANOS gana a AA por 12131 votos y AA gana a VOX por 10802 votos
<br><br>

2022: <a href="https://resultados.elpais.com/elecciones/2022/autonomicas/01/23.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 6 Escaños</span> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span> 
</a>
<br><br>
El PP las gana y sumando a VOX sacan tres escaños de ventaja al PP. El PP gana al PSOE por 49114 votos y el PSOE dobla a VOX en votos
<br><br>
En conclusión, Jaén es una provincia

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Jaén</title>
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
if (provincia === "Cádiz") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Cádiz <span class="escaños">15 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1982: <a href="https://www.datoselecciones.com/andalucia-parlamento-1982/cadiz" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 9 Escaños</span>  
                <span style="color: #ADD8E6;">AP-PDP-UL 2 Escaños</span> 
                <span style="color: #FFA500;">UCD 2 Escaños</span> 
                <span style="color: #15AA35;">PA 1 Escaño</span>
                <span style="color: #FF0D00;">PCE 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a PA y PCE sacan siete escaños de ventaja a la suma de AP-PDP-UL y UCD. El PSOE triplica a AP-PDP-UL en votos, AP-PDP-UL gana a UCD por 15020 votos, UCD gana a PA por 8601 votos y PA gana al PCE por 12037 votos
                <br><br>
                1986: <a href="https://www.datoselecciones.com/andalucia-parlamento-1986/cadiz" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #FF0000;">PSOE 9 Escaños</span>  
                <span style="color: #ADD8E6;">AP-PDP-UL 3 Escaños</span> 
                <span style="color: #d25644;">IU 2 Escaños</span>
                <span style="color: #15AA35;">PA 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a IU y PA cuadruplican en escaños a AP-PDP-UL. El PSOE dobla a AP-PDP-UL en votos, AP-PDP-UL gana a IU por 36526 votos e IU gana a PA por 5097 votos
                <br><br>
                1990: <a href="https://www.datoselecciones.com/andalucia-parlamento-1990/cadiz" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 8 Escaños</span>  
                    <span style="color: #15AA35;">PA 4 Escaños</span>
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
                <span style="color: #d25644;">IU 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a PA e IU sacan once escaños de ventaja al PP. El PSOE dobla a PA en votos, PA gana al PP por 21771 votos y el PP gana a IU por 19797 votos
                <br><br>
                1994: <a href="https://www.datoselecciones.com/andalucia-parlamento-1994/cadiz" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 5 Escaños</span>  
                    <span style="color: #0000FF;">PP 5 Escaños</span> 
                <span style="color: #d25644;">IU 3 Escaños</span>
                <span style="color: #15AA35;">PA 2 Escaños</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a IU y PA doblan en escaños al PP. El PSOE gana al PP por 6313 votos, el PP gana a IU por 73200 votos e IU gana a PA por 31995 votos
                <br><br>
                1996: <a href="https://www.datoselecciones.com/andalucia-parlamento-1996/cadiz" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 6 Escaños</span>  
                    <span style="color: #0000FF;">PP 5 Escaños</span> 
                    <span style="color: #15AA35;">PA 2 Escaños</span>
                <span style="color: #d25644;">IU 2 Escaños</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a PA e IU doblan en escaños al PP. El PSOE gana al PP por 42810 votos, el PP dobla a PA en votos y PA gana a IU por 6263 votos
                <br><br>
                2000: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Andaluc%C3%ADa_de_2000" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 6 Escaños</span>  
                    <span style="color: #0000FF;">PP 6 Escaños</span> 
                <span style="color: #15AA35;">PA 2 Escaños</span>
                <span style="color: #d25644;">IU 1 Escaños</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a PA e IU sacan tres escaños de ventaja al PP. El PSOE gana al PP por 11619 votos, el PP dobla a PA en votos y PA dobla a IU en votos
                <br><br>
                2004: <a href="https://www.datoselecciones.com/andalucia-parlamento-2004/cadiz" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 8 Escaños</span>  
                    <span style="color: #0000FF;">PP 5 Escaños</span> 
                <span style="color: #15AA35;">PA 1 Escaño</span>
                <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
El PSOE las gana y sumando a PA e IU doblan en escaños al PP. El PSOE gana al PP por 102124 votos, el PP cuadruplica a PA en votos y PA gana a IU por 4351 votos
<br><br>
2008: <a href="https://resultados.elpais.com/elecciones/2008/autonomicas/01/11.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 8 Escaños</span>  
                    <span style="color: #0000FF;">PP 6 Escaños</span> 
                <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
El PSOE las gana y sumando a IU sacan tres escaños de ventaja al PP. El PSOE gana al PP por 61379 votos y el PP casi sextuplica a IU en votos
<br><br>

2012: <a href="https://resultados.elpais.com/elecciones/2012/autonomicas/01/11.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 7 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 6 Escaños</span>  
                <span style="color: #d25644;">IU 2 Escaños</span>
</a>
<br><br>
El PP las gana, pero la suma de PSOE e IU le saca un escaño de ventaja. El PP gana al PSOE por 25509 votos y el PSOE casi triplica a IU en votos
<br><br>
2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/01/11.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 6 Escaños</span>
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #800080;">PODEMOS 3 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
El PSOE las gana y sumando a PODEMOS e IU doblan en escaños a la suma de PP y CS, pero CS se alía con el PSOE. El PSOE gana al PP por 43308 votos, el PP gana a PODEMOS por 29282 votos, PODEMOS gana a CIUDADANOS por 47950 votos y CIUDADANOS gana a IU por 21205 votos
<br><br>

2018: <a href="https://resultados.elpais.com/elecciones/2018/autonomicas/01/11.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #FF7F00;">CS 3 Escaños</span>
    <span style="color: #24c87e;">AA 3 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #008000;">VOX 2 Escaños</span> 
</a>
<br><br>
El PSOE las gana, pero la suma de CS, PP y VOX saca un escaño de ventaja a la suma de PSOE y AA. El PSOE gana a CIUDADANOS por 14769 votos, CIUDADANOS gana a AA por 8684 votos, AA gana al PP por 8130 votos y el PP gana a VOX por 32238 votos
<br><br>

2022: <a href="https://resultados.elpais.com/elecciones/2022/autonomicas/01/11.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 8 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span> 
    <span style="color: #24c87e;">AA 1 Escaño</span>
    <span style="color: #c42065;">POR ANDALUCIA 1 Escaño</span>
</a>
<br><br>
El PP las gana y sumando a VOX doblan en escaños a la suma de PSOE, AA y POR ANDALUCIA. El PP dobla al PSOE en votos, el PSOE gana a VOX por 40133 votos, VOX gana a AA por 26820 votos y AA gana a POR ANDALUCIA por 2937 votos
<br><br>
En conclusión, Cádiz es una provincia

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Cádiz</title>
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
if (provincia === "Málaga") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Málaga <span class="escaños">15 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1982: <a href="https://www.datoselecciones.com/andalucia-parlamento-1982/malaga" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 9 Escaños</span>  
                <span style="color: #ADD8E6;">AP-PDP-UL 3 Escaños</span> 
                <span style="color: #FFA500;">UCD 1 Escaño</span> 
                <span style="color: #FF0D00;">PCE 1 Escaño</span>
                <span style="color: #15AA35;">PA 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a PCE y PA sacan siete escaños de ventaja a la suma de AP-PDP-UL y UCD. El PSOE casi triplica a AP-PDP-UL en votos, AP-PDP-UL gana a UCD por 29105 votos, UCD gana al PCE por 15082 votos y el PCE gana a PA por tan solo 968 votos
                <br><br>
                1986: <a href="https://www.datoselecciones.com/andalucia-parlamento-1986/malaga" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #FF0000;">PSOE 8 Escaños</span>  
                <span style="color: #ADD8E6;">AP-PDP-UL 4 Escaños</span> 
                <span style="color: #d25644;">IU 3 Escaños</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a IU sacan siete escaños de ventaja a AP-PDP-UL. El PSOE dobla a AP-PDP-UL en votos y AP-PDP-UL gana a IU por 3630 votos
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 16 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1990: <a href="https://www.datoselecciones.com/andalucia-parlamento-1990/malaga" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 9 Escaños</span>  
                    <span style="color: #0000FF;">PP 4 Escaños</span> 
                <span style="color: #d25644;">IU 2 Escaños</span>
                <span style="color: #15AA35;">PA 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a IU y PA sacan ocho escaños de ventaja al PP. El PSOE dobla al PP en votos, el PP gana a IU por 30354 votos e IU gana a PA por 23699 votos
                <br><br>
                1994: <a href="https://www.datoselecciones.com/andalucia-parlamento-1994/malaga" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 6 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 6 Escaños</span>  
                <span style="color: #d25644;">IU 4 Escaños</span>
                </a>
                <br><br>
                El PP las gana, pero la suma de PSOE e IU le saca cuatro escaños de ventaja. El PP gana al PSOE por 12638 votos y el PSOE gana a IU por 67822 votos
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 15 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1996: <a href="https://www.datoselecciones.com/andalucia-parlamento-1996/malaga" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 6 Escaños</span>  
                    <span style="color: #0000FF;">PP 6 Escaños</span> 
                <span style="color: #d25644;">IU 2 Escaños</span>
                <span style="color: #15AA35;">PA 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a IU y PA sacan tres escaños de ventaja al PP. El PSOE gana al PP por 15199 votos, el PP dobla a IU en votos e IU dobla a PA en votos
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 16 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                2000: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Andaluc%C3%ADa_de_2000" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 7 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 7 Escaños</span>  
                    <span style="color: #d25644;">IU 1 Escaño</span>
                <span style="color: #15AA35;">PA 1 Escaño</span>
                </a>
                <br><br>
                El PP las gana, pero la suma de PSOE, IU y PA saca dos escaños de ventaja al PP. El PP gana al PSOE por 6482 votos, el PSOE cuadruplica a IU en votos e IU gana a PA por 10385 votos
                <br><br>
                2004: <a href="https://www.datoselecciones.com/andalucia-parlamento-2004/malaga" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 8 Escaños</span>  
                    <span style="color: #0000FF;">PP 6 Escaños</span> 
                    <span style="color: #d25644;">IU 1 Escaño</span>
                <span style="color: #15AA35;">PA 1 Escaño</span>
</a>
<br><br>
El PSOE las gana y sumando a IU y PA sacan cuatro escaños de ventaja al PP. El PSOE gana al PP por 94833 votos, el PP cuadruplica a IU en votos e IU gana a PA por 6607 votos
<br><br>
2008: <a href="https://resultados.elpais.com/elecciones/2008/autonomicas/01/29.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 8 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 7 Escaños</span>  
                <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
El PP las gana empatando en escaños a la suma de PSOE e IU. El PP gana al PSOE por 3163 votos y el PSOE sextuplica a IU en votos
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 17 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2012: <a href="https://resultados.elpais.com/elecciones/2012/autonomicas/01/29.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 8 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 7 Escaños</span>  
                <span style="color: #d25644;">IU 2 Escaños</span>
</a>
<br><br>
El PP las gana, pero la suma de PSOE e IU saca un escaño de ventaja al PP. El PP gana al PSOE por 53278 votos y el PSOE casi triplica a IU en votos
<br><br>
2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/01/29.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 6 Escaños</span>
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #800080;">PODEMOS 3 Escaños</span>
    <span style="color: #FF7F00;">CS 2 Escaños</span>
    <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
El PSOE las gana y sumando a PODEMOS e IU saca tres escaños de ventaja a la suma de PP y CS, aunque el PSOE se alía con CS. El PSOE gana al PP por 11907 votos, el PP gana a PODEMOS por 89078 votos, PODEMOS gana a CIUDADANOS por 22198 votos y CIUDADANOS gana a IU por 29617 votos
<br><br>

2018: <a href="https://resultados.elpais.com/elecciones/2018/autonomicas/01/29.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #FF7F00;">CS 4 Escaños</span>
    <span style="color: #24c87e;">AA 3 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span> 
</a>
<br><br>
El PSOE las gana, pero la suma de PP, CS y VOX sacan tres escaños de ventaja a la suma de PSOE y AA. El PSOE gana al PP por 10097 votos, el PP gana a CIUDADANOS por 17609 votos, CIUDADANOS gana a AA por 26133 votos y AA gana a VOX por 25985 votos
<br><br>

2022: <a href="https://resultados.elpais.com/elecciones/2022/autonomicas/01/29.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 10 Escaños</span> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span> 
    <span style="color: #c42065;">POR ANDALUCIA 1 Escaño</span>
</a>
<br><br>
El PP las gana y sumando a VOX sacan siete escaños de ventaja a la suma de PSOE y POR ANDALUCIA. El PP dobla al PSOE en votos, el PSOE gana a VOX por 46636 y VOX gana a POR ANDALUCIA por 35392 votos
<br><br>
En conclusión, Málaga es una provincia

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Málaga</title>
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
if (provincia === "Granada") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Granada <span class="escaños">13 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1982: <a href="https://www.datoselecciones.com/andalucia-parlamento-1982/granada" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 8 Escaños</span>  
                <span style="color: #ADD8E6;">AP-PDP-UL 2 Escaños</span> 
                <span style="color: #FFA500;">UCD 2 Escaños</span> 
                <span style="color: #FF0D00;">PCE 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana y sumando al PCE sacan cinco escaños de ventaja a la suma de AP-PDP-UL y UCD. El PSOE triplica a AP-PDP-UL en votos, AP-PDP-UL gana a UCD por 8090 votos y UCD gana al PCE por 20429 votos
                <br><br>
                1986: <a href="https://www.datoselecciones.com/andalucia-parlamento-1986/granada" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #FF0000;">PSOE 7 Escaños</span>  
                <span style="color: #ADD8E6;">AP-PDP-UL 4 Escaños</span> 
                <span style="color: #d25644;">IU 2 Escaños</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a IU sacan cinco escaños de ventaja a AP-PDP-UL. El PSOE gana a AP-PDP-UL por 71921 votos y AP-PDP-UL gana a IU por 49717 votos
                <br><br>
                1990: <a href="https://www.datoselecciones.com/andalucia-parlamento-1990/granada" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 7 Escaños</span>  
                    <span style="color: #0000FF;">PP 4 Escaños</span> 
                    <span style="color: #d25644;">IU 1 Escaño</span>
                    <span style="color: #15AA35;">PA 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a IU y PA sacan cinco escaños de ventaja al PP. El PSOE gana al PP por 71079 votos, el PP dobla a IU en votos e IU gana a PA por 18941 votos
                <br><br>
                1994: <a href="https://www.datoselecciones.com/andalucia-parlamento-1994/granada" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 6 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 5 Escaños</span>  
                <span style="color: #d25644;">IU 2 Escaños</span>
                </a>
                <br><br>
                El PP las gana, pero la suma de PSOE e IU saca un escaño de ventaja al PP. El PP gana al PSOE por tan solo 1502 votos y el PSOE dobla a IU en votos
                <br><br>
                1996: <a href="https://www.datoselecciones.com/andalucia-parlamento-1996/granada" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 7 Escaños</span>  
                    <span style="color: #0000FF;">PP 5 Escaños</span> 
                <span style="color: #d25644;">IU 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a IU sacan tres escaños de ventaja al PP. El PSOE gana al PP por 37437 votos y el PP triplica a IU en votos
                <br><br>
                2000: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Andaluc%C3%ADa_de_2000" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 6 Escaños</span>  
                    <span style="color: #0000FF;">PP 6 Escaños</span> 
                    <span style="color: #d25644;">IU 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a IU sacan un escaño de ventaja al PP. El PSOE gana al PP por 18427 votos y el PP quintuplica a IU en votos
                <br><br>
                2004: <a href="https://www.datoselecciones.com/andalucia-parlamento-2004/granada" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 7 Escaños</span>  
                    <span style="color: #0000FF;">PP 5 Escaños</span> 
                    <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
El PSOE las gana y sumando a IU sacan tres escaños de ventaja al PP. El PSOE gana al PP por 70774 votos y el PP casi quintuplica a IU en votos
<br><br>
2008: <a href="https://resultados.elpais.com/elecciones/2008/autonomicas/01/18.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 6 Escaños</span>  
                    <span style="color: #0000FF;">PP 6 Escaños</span> 
                <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
El PSOE las gana y sumando a IU sacan un escaño de ventaja al PP. El PSOE gana al PP por 21800 votos y el PP quintuplica a IU en votos
<br><br>

2012: <a href="https://resultados.elpais.com/elecciones/2012/autonomicas/01/18.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 6 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 6 Escaños</span>  
                <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
El PP las gana, pero la suma de PSOE e IU saca un escaño de ventaja al PP. El PP gana al PSOE por 18772 votos y el PSOE casi cuadruplica a IU en votos
<br><br>
2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/01/18.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
El PSOE las gana y sumando a PODEMOS e IU sacan tres escaños de ventaja a la suma de PP y CS. El PSOE gana al PP por 20898 votos, el PP dobla a PODEMOS en votos, PODEMOS gana a CIUDADANOS por 19610 votos y CIUDADANOS gana a IU por 15711 votos
<br><br>

2018: <a href="https://resultados.elpais.com/elecciones/2018/autonomicas/01/18.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF7F00;">CS 3 Escaños</span> 
    <span style="color: #24c87e;">AA 2 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span> 
</a>
<br><br>
El PSOE las gana, pero la suma de PP, CS y VOX saca un escaño de ventaja a la suma de PSOE y AA. El PSOE gana al PP por 15941 votos, el PP gana a CIUDADANOS por 19271 votos, CIUDADANOS gana a AA por 13743 votos y AA gana a VOX por 15254 votos
<br><br>

2022: <a href="https://resultados.elpais.com/elecciones/2022/autonomicas/01/18.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 6 Escaños</span> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span> 
    <span style="color: #c42065;">POR ANDALUCIA 1 Escaño</span>
</a>
<br><br>
El PP las gana y sumando a VOX sacan tres escaños de ventaja a la suma de PSOE y POR ANDALUCIA. El PP gana al PSOE por 69883 votos, el PSOE gana a VOX por 41621 votos y VOX gana a POR ANDALUCIA por 31956 votos
<br><br>
En conclusión, Granada es una provincia

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Granada</title>
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
if (provincia === "Almería") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Almería <span class="escaños">11 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1982: <a href="https://www.datoselecciones.com/andalucia-parlamento-1982/almeria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 6 Escaños</span>  
                <span style="color: #FFA500;">UCD 3 Escaños</span> 
                <span style="color: #ADD8E6;">AP-PDP-UL 2 Escaños</span> 
                </a>
                <br><br>
                El PSOE las gana sacando un escaño de ventaja a la suma de UCD y AP-PDP-UL. El PSOE dobla a UCD en votos y UCD gana a AP-PDP-UL por 7638 votos
                <br><br>
                1986: <a href="https://www.datoselecciones.com/andalucia-parlamento-1986/almeria" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #FF0000;">PSOE 7 Escaños</span>  
                <span style="color: #ADD8E6;">AP-PDP-UL 3 Escaños</span> 
                <span style="color: #d25644;">IU 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a IU sacan cinco escaños de ventaja a AP-PDP-UL. El PSOE gana a AP-PDP-UL por 44349 votos y AP-PDP-UL dobla a IU en votos
                <br><br>
                1990: <a href="https://www.datoselecciones.com/andalucia-parlamento-1990/almeria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 7 Escaños</span>  
                    <span style="color: #0000FF;">PP 3 Escaños</span> 
                <span style="color: #d25644;">IU 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a IU sacan cinco escaños de ventaja al PP. El PSOE gana al PP por 38642 votos y el PP triplica a IU en votos
                <br><br>
                1994: <a href="https://www.datoselecciones.com/andalucia-parlamento-1994/almeria" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                    <span style="color: #0000FF;">PP 5 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 5 Escaños</span>
                <span style="color: #d25644;">IU 1 Escaño</span>
                </a>
                <br><br>
                El PP las gana, pero la suma de PSOE e IU le saca un escaño de ventaja. El PP gana al PSOE por 9318 votos y el PSOE dobla a IU en votos
                <br><br>
                1996: <a href="https://www.datoselecciones.com/andalucia-parlamento-1996/almeria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 5 Escaños</span>  
                    <span style="color: #0000FF;">PP 5 Escaños</span> 
                <span style="color: #d25644;">IU 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a IU sacan un escaño de ventaja al PP. El PSOE gana al PP por 17032 votos y el PP casi cuadriplica a IU en votos
                <br><br>
                2000: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Andaluc%C3%ADa_de_2000" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 6 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 5 Escaños</span>  
                </a>
                <br><br>
                El PP las gana sacando un escaño de ventaja al PSOE al que aventaja por 9476 votos
                <br><br>
                2004: <a href="https://www.datoselecciones.com/andalucia-parlamento-2004/almeria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 6 Escaños</span>  
                    <span style="color: #0000FF;">PP 5 Escaños</span> 
</a>
<br><br>
El PSOE las gana sacando un escaño de ventaja al PP al que aventaja por 12732 votos
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 12 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2008: <a href="https://resultados.elpais.com/elecciones/2008/autonomicas/01/04.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 7 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 5 Escaños</span>  
</a>
<br><br>
El PP las gana sacando dos escaños de ventaja al PSOE al que aventaja por 32962 votos
<br><br>

2012: <a href="https://resultados.elpais.com/elecciones/2012/autonomicas/01/04.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 7 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 4 Escaños</span>  
                <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
El PP las gana sacando dos escaños de ventaja a la suma de PSOE e IU. El PP gana al PSOE por 42793 votos y el PSOE casi quintuplica a IU en votos
<br><br>
2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/01/04.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
El PP las gana y sumando a CS empatan en escaños a la suma de PSOE y PODEMOS. El PP gana al PSOE por 11208 votos, el PSOE triplica a PODEMOS en votos y PODEMOS gana a CIUDADANOS por 4161 votos
<br><br>

2018: <a href="https://resultados.elpais.com/elecciones/2018/autonomicas/01/04.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span> 
    <span style="color: #FF7F00;">CS 2 Escaños</span>
    <span style="color: #24c87e;">AA 1 Escaño</span>
</a>
<br><br>
El PP las gana y sumando a VOX y CS doblan en escaños a la suma de PSOE y AA. El PP gana al PSOE por 3416 votos, el PSOE gana a VOX por 23620 votos, VOX gana a CIUDADANOS por tan solo 1210 votos y CIUDADANOS gana a AA por 17273 votos
<br><br>

2022: <a href="https://resultados.elpais.com/elecciones/2022/autonomicas/01/04.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 6 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #008000;">VOX 3 Escaños</span> 
</a>
<br><br>
El PP las gana y sumando a VOX triplican en escaños al PSOE. El PP dobla al PSOE en votos y el PSOE gana a VOX por 3502 votos
<br><br>
En conclusión, Almería es una provincia

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Almería</title>
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
if (provincia === "Andalucía") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Andalucía <span class="escaños">109 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1982: <a href="https://www.datoselecciones.com/andalucia-parlamento-1982" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 66 Escaños</span>  
                <span style="color: #ADD8E6;">AP-PDP-UL 17 Escaños</span> 
                <span style="color: #FFA500;">UCD 15 Escaños</span> 
                <span style="color: #FF0D00;">PCE 8 Escaños</span>
                <span style="color: #15AA35;">PA 3 Escaños</span>
                </a>
                <br><br>
                El PSOE las gana sacando once escaños por encima de la mayoría absoluta
                <br><br>
                1986: <a href="https://www.datoselecciones.com/andalucia-parlamento-1986" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #FF0000;">PSOE 60 Escaños</span>  
                <span style="color: #ADD8E6;">AP-PDP-UL 28 Escaños</span> 
                <span style="color: #d25644;">IU 19 Escaños</span>
                <span style="color: #15AA35;">PA 2 Escaños</span>
                </a>
                <br><br>
                El PSOE las gana sacando cinco escaños por encima de la mayoría absoluta
                <br><br>
                1990: <a href="https://www.datoselecciones.com/andalucia-parlamento-1990" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 62 Escaños</span>  
                    <span style="color: #0000FF;">PP 26 Escaños</span> 
                <span style="color: #d25644;">IU 11 Escaños</span>
                <span style="color: #15AA35;">PA 10 Escaños</span>
                </a>
                <br><br>
                El PSOE las gana sacando siete escaños por encima de la mayoría absoluta
                <br><br>
                1994: <a href="https://www.datoselecciones.com/andalucia-parlamento-1994" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 45 Escaños</span>  
                    <span style="color: #0000FF;">PP 41 Escaños</span> 
                <span style="color: #d25644;">IU 20 Escaños</span>
                <span style="color: #15AA35;">PA 3 Escaños</span>
                </a>
                <br><br>
                El PSOE las gana y con la abstención de IU y PA saca cuatro escaños de ventaja al PP
                <br><br>
                1996: <a href="https://www.datoselecciones.com/andalucia-parlamento-1996" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 52 Escaños</span>  
                    <span style="color: #0000FF;">PP 40 Escaños</span> 
                <span style="color: #d25644;">IU 13 Escaños</span>
                <span style="color: #15AA35;">PA 4 Escaños</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a PA sacan un escaño por encima de la mayoría absoluta
                <br><br>
                2000: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Andaluc%C3%ADa_de_2000" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 52 Escaños</span>  
                    <span style="color: #0000FF;">PP 46 Escaños</span> 
                    <span style="color: #d25644;">IU 6 Escaños</span>
                <span style="color: #15AA35;">PA 5 Escaños</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a PA sacan dos escaños por encima de la mayoría absoluta
                <br><br>
                2004: <a href="https://www.datoselecciones.com/andalucia-parlamento-2004" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 61 Escaños</span>  
                    <span style="color: #0000FF;">PP 37 Escaños</span> 
                    <span style="color: #d25644;">IU 6 Escaños</span>
                <span style="color: #15AA35;">PA 5 Escaños</span>
</a>
<br><br>
El PSOE las gana sacando seis escaños por encima de la mayoría absoluta
<br><br>
2008: <a href="https://resultados.elpais.com/elecciones/2008/autonomicas/01/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 56 Escaños</span>  
                    <span style="color: #0000FF;">PP 47 Escaños</span> 
                <span style="color: #d25644;">IU 6 Escaños</span>
</a>
<br><br>
El PSOE las gana sacando un escaño por encima de la mayoría absoluta
<br><br>

2012: <a href="https://resultados.elpais.com/elecciones/2012/autonomicas/01/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 50 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 47 Escaños</span>  
                <span style="color: #d25644;">IU 12 Escaños</span>
</a>
<br><br>
El PP las gana, pero la suma de PSOE e IU saca cuatro escaños por encima de la mayoría absoluta
<br><br>
2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/01/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 47 Escaños</span>
    <span style="color: #0000FF;">PP 33 Escaños</span> 
    <span style="color: #800080;">PODEMOS 15 Escaños</span>
    <span style="color: #FF7F00;">CS 9 Escaños</span>
    <span style="color: #d25644;">IU 5 Escaños</span>
</a>
<br><br>
El PSOE las gana y sumando a CIUDADANOS sacan un escaño por encima de la mayoría absoluta
<br><br>

2018: <a href="https://resultados.elpais.com/elecciones/2018/autonomicas/01/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 33 Escaños</span>
    <span style="color: #0000FF;">PP 26 Escaños</span> 
    <span style="color: #FF7F00;">CS 21 Escaños</span>
    <span style="color: #24c87e;">AA 17 Escaños</span>
    <span style="color: #008000;">VOX 12 Escaños</span> 
</a>
<br><br>
El PSOE las gana, pero la suma de PP, CIUDADANOS y VOX sacan cuatro escaños por encima de la mayoría absoluta
<br><br>

2022: <a href="https://resultados.elpais.com/elecciones/2022/autonomicas/01/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 58 Escaños</span> 
    <span style="color: #FF0000;">PSOE 30 Escaños</span>
    <span style="color: #008000;">VOX 14 Escaños</span> 
    <span style="color: #c42065;">POR ANDALUCIA 5 Escaños</span>
    <span style="color: #24c87e;">AA 2 Escaños</span>
</a>
<br><br>
El PP las gana sacando tres escaños por encima de la mayoría absoluta
<br><br>
En conclusión, Andalucía es una comunidad autónoma
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Andalucía</title>
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
function abrirVentanaEscenario109(provincia) {
if (provincia === "Huelva") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Huelva <span class="escaños">11 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1982: <a href="https://www.datoselecciones.com/andalucia-parlamento-1982/huelva" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 8 Escaños</span>  
                <span style="color: #FFA500;">UCD 2 Escaños</span> 
                <span style="color: #ADD8E6;">AP-PDP-UL 1 Escaño</span> 
                </a>
                <br><br>
                IGUAL
                <br><br>
                1986: <a href="https://www.datoselecciones.com/andalucia-parlamento-1986/huelva" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #FF0000;">PSOE 7 Escaños</span>  
                <span style="color: #ADD8E6;">AP-PDP-UL 3 Escaños</span> 
                <span style="color: #d25644;">IU 1 Escaño</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1990: <a href="https://www.datoselecciones.com/andalucia-parlamento-1990/huelva" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 7 Escaños</span>  
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
                <span style="color: #d25644;">IU 1 Escaño</span>
                <span style="color: #15AA35;">PA 1 Escaño</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1994: <a href="https://www.datoselecciones.com/andalucia-parlamento-1994/huelva" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 5 Escaños</span>  
                    <span style="color: #0000FF;">PP 4 Escaños</span> 
                <span style="color: #d25644;">IU 2 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1996: <a href="https://www.datoselecciones.com/andalucia-parlamento-1996/huelva" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 6 Escaños</span>  
                    <span style="color: #0000FF;">PP 4 Escaños</span> 
                <span style="color: #d25644;">IU 1 Escaño</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                2000: <a href="https://www.datoselecciones.com/andalucia-parlamento-2000/huelva" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 6 Escaños</span>  
                    <span style="color: #0000FF;">PP 5 Escaños</span> 
                </a>
                <br><br>
                IGUAL
                <br><br>
                2004: <a href="https://www.datoselecciones.com/andalucia-parlamento-2004/huelva" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 7 Escaños</span>  
                    <span style="color: #0000FF;">PP 3 Escaños</span> 
                    <span style="color: #15AA35;">PA 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>
2008: <a href="https://resultados.elpais.com/elecciones/2008/autonomicas/01/21.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 6 Escaños</span>  
                    <span style="color: #0000FF;">PP 4 Escaños</span> 
                <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2012: <a href="https://resultados.elpais.com/elecciones/2012/autonomicas/01/21.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 5 Escaños</span>  
                    <span style="color: #0000FF;">PP 5 Escaños</span> 
                <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>
2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/01/21.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 6 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2018: <a href="https://resultados.elpais.com/elecciones/2018/autonomicas/01/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF7F00;">CS 2 Escaños</span>
    <span style="color: #24c87e;">AA 1 Escaño</span>
    <span style="color: #008000;">VOX 1 Escaño</span> 
</a>
<br><br>
IGUAL
<br><br>

2022: <a href="https://resultados.elpais.com/elecciones/2022/autonomicas/01/21.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 6 Escaños</span> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span> 
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Huelva es una provincia

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Huelva</title>
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
if (provincia === "Sevilla") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Sevilla <span class="escaños">18 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1982: <a href="https://www.datoselecciones.com/andalucia-parlamento-1982/sevilla" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 11 Escaños</span>  
                <span style="color: #ADD8E6;">AP-PDP-UL 3 Escaños</span> 
                <span style="color: #FF0D00;">PCE 2 Escaños</span>
                <span style="color: #FFA500;">UCD 1 Escaño</span> 
                <span style="color: #15AA35;">PA 1 Escaño</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1986: <a href="https://www.datoselecciones.com/andalucia-parlamento-1986/sevilla" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #FF0000;">PSOE 10 Escaños</span>  
                <span style="color: #ADD8E6;">AP-PDP-UL 4 Escaños</span> 
                <span style="color: #d25644;">IU 3 Escaños</span>
                <span style="color: #15AA35;">PA 1 Escaño</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1990: <a href="https://www.datoselecciones.com/andalucia-parlamento-1990/sevilla" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 10 Escaños</span>  
                    <span style="color: #0000FF;">PP 4 Escaños</span> 
                    <span style="color: #15AA35;">PA 2 Escaños</span>
                <span style="color: #d25644;">IU 2 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1994: <a href="https://www.datoselecciones.com/andalucia-parlamento-1994/sevilla" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 8 Escaños</span>  
                    <span style="color: #0000FF;">PP 6 Escaños</span> 
                <span style="color: #d25644;">IU 3 Escaños</span>
                <span style="color: #15AA35;">PA 1 Escaño</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1996: <a href="https://www.datoselecciones.com/andalucia-parlamento-1996/sevilla" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 9 Escaños</span>  
                    <span style="color: #0000FF;">PP 6 Escaños</span> 
                <span style="color: #d25644;">IU 2 Escaños</span>
                <span style="color: #15AA35;">PA 1 Escaño</span>
                </a>
                <br><br>
                El PSOE las gana y sumando a IU y PA doblan en escaños al PP
                <br><br>
                2000: <a href="https://www.datoselecciones.com/andalucia-parlamento-2000/sevilla" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 10 Escaños</span>  
                    <span style="color: #0000FF;">PP 6 Escaños</span> 
                    <span style="color: #d25644;">IU 1 Escaño</span>
                <span style="color: #15AA35;">PA 1 Escaño</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                2004: <a href="https://www.datoselecciones.com/andalucia-parlamento-2004/sevilla" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 11 Escaños</span>  
                    <span style="color: #0000FF;">PP 5 Escaños</span> 
                    <span style="color: #d25644;">IU 1 Escaño</span>
                <span style="color: #15AA35;">PA 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>
2008: <a href="https://resultados.elpais.com/elecciones/2008/autonomicas/01/41.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 11 Escaños</span>  
                    <span style="color: #0000FF;">PP 6 Escaños</span> 
                <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2012: <a href="https://resultados.elpais.com/elecciones/2012/autonomicas/01/41.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 9 Escaños</span>  
                    <span style="color: #0000FF;">PP 7 Escaños</span> 
                <span style="color: #d25644;">IU 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>
2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/01/41.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 8 Escaños</span>
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #800080;">PODEMOS 3 Escaños</span>
    <span style="color: #FF7F00;">CS 2 Escaños</span>
    <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2018: <a href="https://resultados.elpais.com/elecciones/2018/autonomicas/01/41.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 6 Escaños</span>
    <span style="color: #24c87e;">AA 4 Escaños</span>
    <span style="color: #FF7F00;">CS 3 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #008000;">VOX 2 Escaños</span> 
</a>
<br><br>
IGUAL
<br><br>

2022: <a href="https://resultados.elpais.com/elecciones/2022/autonomicas/01/41.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 9 Escaños</span> 
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span> 
    <span style="color: #c42065;">POR ANDALUCIA 1 Escaño</span>
    <span style="color: #24c87e;">AA 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Sevilla es una provincia

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Sevilla</title>
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
if (provincia === "Córdoba") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Córdoba <span class="escaños">12 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1982: <a href="https://www.datoselecciones.com/andalucia-parlamento-1982/cordoba" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 7 Escaños</span>  
                <span style="color: #ADD8E6;">AP-PDP-UL 2 Escaños</span> 
                <span style="color: #FFA500;">UCD 2 Escaños</span> 
                <span style="color: #FF0D00;">PCE 1 Escaño</span>
                </a>
                <br><br>
                El PCE pierde un escaño, por lo que la suma de PSOE y PCE dobla en escaños a la suma de AP-PDP-UL y UCD
                <br><br>
                1986: <a href="https://www.datoselecciones.com/andalucia-parlamento-1986/cordoba" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #FF0000;">PSOE 5 Escaños</span>  
                <span style="color: #d25644;">IU 4 Escaños</span>
                <span style="color: #ADD8E6;">AP-PDP-UL 3 Escaños</span> 
                </a>
                <br><br>
                IU pierde un escaño, por lo que la suma de PSOE e IU triplica en escaños a AP-PDP-UL
                <br><br>
                1990: <a href="https://www.datoselecciones.com/andalucia-parlamento-1990/cordoba" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 6 Escaños</span>  
                    <span style="color: #0000FF;">PP 3 Escaños</span> 
                <span style="color: #d25644;">IU 2 Escaños</span>
                <span style="color: #15AA35;">PA 1 Escaño</span>
                </a>
                <br><br>
                El PSOE pierde un escaño, pero la suma de PSOE, IU y PA triplican en escaños al PP
                <br><br>
                1994: <a href="https://www.datoselecciones.com/andalucia-parlamento-1994/cordoba" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 5 Escaños</span>  
                    <span style="color: #0000FF;">PP 4 Escaños</span> 
                <span style="color: #d25644;">IU 3 Escaños</span> 
                </a>
                <br><br>
                El PSOE pierde un escaño, pero la suma de PSOE e IU dobla en escaños al PP
                <br><br>
                1996: <a href="https://www.datoselecciones.com/andalucia-parlamento-1996/cordoba" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 6 Escaños</span>  
                    <span style="color: #0000FF;">PP 4 Escaños</span> 
                <span style="color: #d25644;">IU 2 Escaños</span> 
                </a>
                <br><br>
                IU pierde un escaño, por lo que la suma de PSOE e IU dobla en escaños al PP
                <br><br>
                2000: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Andaluc%C3%ADa_de_2000" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 5 Escaños</span>  
                    <span style="color: #0000FF;">PP 5 Escaños</span> 
                    <span style="color: #d25644;">IU 1 Escaño</span>
                <span style="color: #15AA35;">PA 1 Escaño</span>
                </a>
                <br><br>
                El PSOE pierde un escaño, pero la suma de PSOE, IU y PA saca dos escaños de ventaja al PP
                <br><br>
                2004: <a href="https://www.datoselecciones.com/andalucia-parlamento-2004/cordoba" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 7 Escaños</span>  
                    <span style="color: #0000FF;">PP 4 Escaños</span> 
                    <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
PA pierde su escaño, por lo que la suma de PSOE e IU dobla en escaños al PP
<br><br>
2008: <a href="https://resultados.elpais.com/elecciones/2008/autonomicas/01/14.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 6 Escaños</span>  
                    <span style="color: #0000FF;">PP 5 Escaños</span> 
                <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2012: <a href="https://resultados.elpais.com/elecciones/2012/autonomicas/01/14.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #FF0000;">PSOE 5 Escaños</span>  
                <span style="color: #d25644;">IU 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>
2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/01/14.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #d25644;">IU 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2018: <a href="https://resultados.elpais.com/elecciones/2018/autonomicas/01/14.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF7F00;">CS 2 Escaños</span>
    <span style="color: #24c87e;">AA 2 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span> 
</a>
<br><br>
IGUAL
<br><br>

2022: <a href="https://resultados.elpais.com/elecciones/2022/autonomicas/01/14.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 7 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span> 
    <span style="color: #c42065;">POR ANDALUCIA 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Córdoba es una provincia

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Córdoba</title>
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
if (provincia === "Jaén") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Jaén <span class="escaños">11 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1982: <a href="https://www.datoselecciones.com/andalucia-parlamento-1982/jaen" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 6 Escaños</span>  
                <span style="color: #ADD8E6;">AP-PDP-UL 2 Escaños</span> 
                <span style="color: #FFA500;">UCD 2 Escaños</span> 
                <span style="color: #FF0D00;">PCE 1 Escaño</span>
                </a>
                <br><br>
                El PSOE pierde dos escaños, pero la suma del PSOE y el PCE saca tres escaños de ventaja a la suma de AP-PDP-UL y UCD
                <br><br>
                1986: <a href="https://www.datoselecciones.com/andalucia-parlamento-1986/jaen" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #FF0000;">PSOE 6 Escaños</span>  
                <span style="color: #ADD8E6;">AP-PDP-UL 3 Escaños</span> 
                <span style="color: #d25644;">IU 2 Escaños</span>
                </a>
                <br><br>
                PSOE y AP-PDP-UL pierden un escaño, por lo que la suma de PSOE e IU saca cinco escaños de ventaja a AP-PDP-UL
                <br><br>
                1990: <a href="https://www.datoselecciones.com/andalucia-parlamento-1990/jaen" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 7 Escaños</span>  
                    <span style="color: #0000FF;">PP 3 Escaños</span> 
                <span style="color: #d25644;">IU 1 Escaño</span>
                </a>
                <br><br>
                El PP pierde un escaño, por lo que la suma de PSOE e IU saca cinco escaños de ventaja al PP
                <br><br>
                1994: <a href="https://www.datoselecciones.com/andalucia-parlamento-1994/jaen" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 5 Escaños</span>  
                    <span style="color: #0000FF;">PP 4 Escaños</span> 
                <span style="color: #d25644;">IU 2 Escaños</span>
                </a>
                <br><br>
                El PP pierde un escaño, por lo que la suma de PSOE e IU sacan tres escaños de ventaja al PP
                <br><br>
                1996: <a href="https://www.datoselecciones.com/andalucia-parlamento-1996/jaen" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 6 Escaños</span>  
                    <span style="color: #0000FF;">PP 4 Escaños</span> 
                <span style="color: #d25644;">IU 1 Escaño</span>
                </a>
                <br><br>
                El PP pierde un escaño, por lo que la suma de PSOE e IU sacan tres escaños de ventaja al PP
                <br><br>
                2000: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Andaluc%C3%ADa_de_2000" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 6 Escaños</span>  
                    <span style="color: #0000FF;">PP 5 Escaños</span> 
                </a>
                <br><br>
                IU pierde su escaño, por lo que el PSOE saca un escaño de ventaja al PP
                <br><br>
                2004: <a href="https://www.datoselecciones.com/andalucia-parlamento-2004/jaen" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 7 Escaños</span>  
                    <span style="color: #0000FF;">PP 4 Escaños</span> 
</a>
<br><br>
IU pierde su escaño, por lo que el PSOE saca tres escaños de ventaja al PP
<br><br>
2008: <a href="https://resultados.elpais.com/elecciones/2008/autonomicas/01/23.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 7 Escaños</span>  
                    <span style="color: #0000FF;">PP 4 Escaños</span> 
</a>
<br><br>
El PP pierde un escaño, por lo que el PSOE saca tres escaños de ventaja al PP
<br><br>
2012: <a href="https://resultados.elpais.com/elecciones/2012/autonomicas/01/23.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 5 Escaños</span>  
                    <span style="color: #0000FF;">PP 5 Escaños</span> 
                <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>
2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/01/23.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 6 Escaños</span>
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2018: <a href="https://resultados.elpais.com/elecciones/2018/autonomicas/01/23.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF7F00;">CS 2 Escaños</span>
    <span style="color: #24c87e;">AA 1 Escaño</span>
    <span style="color: #008000;">VOX 1 Escaño</span> 
</a>
<br><br>
IGUAL
<br><br>

2022: <a href="https://resultados.elpais.com/elecciones/2022/autonomicas/01/23.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 6 Escaños</span> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span> 
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Jaén es una provincia

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Jaén</title>
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
if (provincia === "Cádiz") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Cádiz <span class="escaños">15 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1982: <a href="https://www.datoselecciones.com/andalucia-parlamento-1982/cadiz" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 9 Escaños</span>  
                <span style="color: #ADD8E6;">AP-PDP-UL 2 Escaños</span> 
                <span style="color: #FFA500;">UCD 2 Escaños</span> 
                <span style="color: #15AA35;">PA 1 Escaño</span>
                <span style="color: #FF0D00;">PCE 1 Escaño</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1986: <a href="https://www.datoselecciones.com/andalucia-parlamento-1986/cadiz" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #FF0000;">PSOE 9 Escaños</span>  
                <span style="color: #ADD8E6;">AP-PDP-UL 3 Escaños</span> 
                <span style="color: #d25644;">IU 2 Escaños</span>
                <span style="color: #15AA35;">PA 1 Escaño</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1990: <a href="https://www.datoselecciones.com/andalucia-parlamento-1990/cadiz" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 8 Escaños</span>  
                    <span style="color: #15AA35;">PA 4 Escaños</span>
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
                <span style="color: #d25644;">IU 1 Escaño</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1994: <a href="https://www.datoselecciones.com/andalucia-parlamento-1994/cadiz" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 5 Escaños</span>  
                    <span style="color: #0000FF;">PP 5 Escaños</span> 
                <span style="color: #d25644;">IU 3 Escaños</span>
                <span style="color: #15AA35;">PA 2 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1996: <a href="https://www.datoselecciones.com/andalucia-parlamento-1996/cadiz" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 6 Escaños</span>  
                    <span style="color: #0000FF;">PP 5 Escaños</span> 
                    <span style="color: #15AA35;">PA 2 Escaños</span>
                <span style="color: #d25644;">IU 2 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                2000: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Andaluc%C3%ADa_de_2000" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 6 Escaños</span>  
                    <span style="color: #0000FF;">PP 6 Escaños</span> 
                <span style="color: #15AA35;">PA 2 Escaños</span>
                <span style="color: #d25644;">IU 1 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                2004: <a href="https://www.datoselecciones.com/andalucia-parlamento-2004/cadiz" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 8 Escaños</span>  
                    <span style="color: #0000FF;">PP 5 Escaños</span> 
                <span style="color: #15AA35;">PA 1 Escaño</span>
                <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>
2008: <a href="https://resultados.elpais.com/elecciones/2008/autonomicas/01/11.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 8 Escaños</span>  
                    <span style="color: #0000FF;">PP 6 Escaños</span> 
                <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2012: <a href="https://resultados.elpais.com/elecciones/2012/autonomicas/01/11.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 7 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 6 Escaños</span>  
                <span style="color: #d25644;">IU 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>
2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/01/11.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 6 Escaños</span>
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #800080;">PODEMOS 3 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2018: <a href="https://resultados.elpais.com/elecciones/2018/autonomicas/01/11.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #FF7F00;">CS 3 Escaños</span>
    <span style="color: #24c87e;">AA 3 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #008000;">VOX 2 Escaños</span> 
</a>
<br><br>
IGUAL
<br><br>

2022: <a href="https://resultados.elpais.com/elecciones/2022/autonomicas/01/11.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 8 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span> 
    <span style="color: #24c87e;">AA 1 Escaño</span>
    <span style="color: #c42065;">POR ANDALUCIA 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Cádiz es una provincia

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Cádiz</title>
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
if (provincia === "Málaga") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Málaga <span class="escaños">17 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1982: <a href="https://www.datoselecciones.com/andalucia-parlamento-1982/malaga" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 10 Escaños</span>  
                <span style="color: #ADD8E6;">AP-PDP-UL 3 Escaños</span> 
                <span style="color: #FFA500;">UCD 2 Escaños</span> 
                <span style="color: #FF0D00;">PCE 1 Escaño</span>
                <span style="color: #15AA35;">PA 1 Escaño</span>
                </a>
                <br><br>
                PSOE y UCD suben un escaño, por lo que la suma de PSOE, PCE y PA saca siete escaños de ventaja a la suma de AP-PDP-UL y UCD
                <br><br>
                1986: <a href="https://www.datoselecciones.com/andalucia-parlamento-1986/malaga" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #FF0000;">PSOE 9 Escaños</span>  
                <span style="color: #ADD8E6;">AP-PDP-UL 4 Escaños</span> 
                <span style="color: #d25644;">IU 4 Escaños</span>
                </a>
                <br><br>
                PSOE e IU suben un escaño, por lo que la suma de PSOE e IU saca nueve escaños de ventaja a AP-PDP-UL
                <br><br>
                1990: <a href="https://www.datoselecciones.com/andalucia-parlamento-1990/malaga" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 10 Escaños</span>  
                    <span style="color: #0000FF;">PP 4 Escaños</span> 
                <span style="color: #d25644;">IU 2 Escaños</span>
                <span style="color: #15AA35;">PA 1 Escaño</span>
                </a>
                <br><br>
                El PSOE sube un escaño, por lo que la suma de PSOE, IU y PA sacan nueve escaños de ventaja al PP
                <br><br>
                1994: <a href="https://www.datoselecciones.com/andalucia-parlamento-1994/malaga" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 7 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 6 Escaños</span>  
                <span style="color: #d25644;">IU 4 Escaños</span>
                </a>
                <br><br>
                El PP sube un escaño, pero la suma de PSOE e IU saca tres escaños de ventaja al PP
                <br><br>
                1996: <a href="https://www.datoselecciones.com/andalucia-parlamento-1996/malaga" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 7 Escaños</span>  
                    <span style="color: #0000FF;">PP 7 Escaños</span> 
                <span style="color: #d25644;">IU 2 Escaños</span>
                <span style="color: #15AA35;">PA 1 Escaño</span>
                </a>
                <br><br>
                PSOE y PP suben un escaño, por lo que la suma de PSOE, IU y PA saca tres escaños de ventaja al PP
                <br><br>
                2000: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Andaluc%C3%ADa_de_2000" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 8 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 7 Escaños</span>  
                    <span style="color: #d25644;">IU 1 Escaño</span>
                <span style="color: #15AA35;">PA 1 Escaño</span>
                </a>
                <br><br>
                El PP sube un escaño, pero la suma de PSOE, IU y PA le sacan un escaño de ventaja
                <br><br>
                2004: <a href="https://www.datoselecciones.com/andalucia-parlamento-2004/malaga" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 9 Escaños</span>  
                    <span style="color: #0000FF;">PP 6 Escaños</span> 
                    <span style="color: #d25644;">IU 1 Escaño</span>
                <span style="color: #15AA35;">PA 1 Escaño</span>
</a>
<br><br>
El PSOE sube un escaño, por lo que la suma de PSOE, IU y PA saca cinco escaños de ventaja al PP
<br><br>
2008: <a href="https://resultados.elpais.com/elecciones/2008/autonomicas/01/29.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 8 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 8 Escaños</span>  
                <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
El PSOE sube un escaño, por lo que la suma de PSOE e IU saca un escaño de ventaja al PP
<br><br>
2012: <a href="https://resultados.elpais.com/elecciones/2012/autonomicas/01/29.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 8 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 7 Escaños</span>  
                <span style="color: #d25644;">IU 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>
2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/01/29.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 6 Escaños</span>
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #800080;">PODEMOS 3 Escaños</span>
    <span style="color: #FF7F00;">CS 2 Escaños</span>
    <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2018: <a href="https://resultados.elpais.com/elecciones/2018/autonomicas/01/29.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #FF7F00;">CS 4 Escaños</span>
    <span style="color: #24c87e;">AA 3 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span> 
</a>
<br><br>
IGUAL
<br><br>

2022: <a href="https://resultados.elpais.com/elecciones/2022/autonomicas/01/29.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 10 Escaños</span> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span> 
    <span style="color: #c42065;">POR ANDALUCIA 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Málaga es una provincia

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Málaga</title>
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
if (provincia === "Granada") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Granada <span class="escaños">13 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1982: <a href="https://www.datoselecciones.com/andalucia-parlamento-1982/granada" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 8 Escaños</span>  
                <span style="color: #ADD8E6;">AP-PDP-UL 2 Escaños</span> 
                <span style="color: #FFA500;">UCD 2 Escaños</span> 
                <span style="color: #FF0D00;">PCE 1 Escaño</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1986: <a href="https://www.datoselecciones.com/andalucia-parlamento-1986/granada" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #FF0000;">PSOE 7 Escaños</span>  
                <span style="color: #ADD8E6;">AP-PDP-UL 4 Escaños</span> 
                <span style="color: #d25644;">IU 2 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1990: <a href="https://www.datoselecciones.com/andalucia-parlamento-1990/granada" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 7 Escaños</span>  
                    <span style="color: #0000FF;">PP 4 Escaños</span> 
                    <span style="color: #d25644;">IU 1 Escaño</span>
                    <span style="color: #15AA35;">PA 1 Escaño</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1994: <a href="https://www.datoselecciones.com/andalucia-parlamento-1994/granada" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 6 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 5 Escaños</span>  
                <span style="color: #d25644;">IU 2 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1996: <a href="https://www.datoselecciones.com/andalucia-parlamento-1996/granada" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 7 Escaños</span>  
                    <span style="color: #0000FF;">PP 5 Escaños</span> 
                <span style="color: #d25644;">IU 1 Escaño</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                2000: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Andaluc%C3%ADa_de_2000" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 6 Escaños</span>  
                    <span style="color: #0000FF;">PP 6 Escaños</span> 
                    <span style="color: #d25644;">IU 1 Escaño</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                2004: <a href="https://www.datoselecciones.com/andalucia-parlamento-2004/granada" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 7 Escaños</span>  
                    <span style="color: #0000FF;">PP 5 Escaños</span> 
                    <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>
2008: <a href="https://resultados.elpais.com/elecciones/2008/autonomicas/01/18.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 6 Escaños</span>  
                    <span style="color: #0000FF;">PP 6 Escaños</span> 
                <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2012: <a href="https://resultados.elpais.com/elecciones/2012/autonomicas/01/18.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 6 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 6 Escaños</span>  
                <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>
2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/01/18.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2018: <a href="https://resultados.elpais.com/elecciones/2018/autonomicas/01/18.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF7F00;">CS 3 Escaños</span> 
    <span style="color: #24c87e;">AA 2 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span> 
</a>
<br><br>
IGUAL
<br><br>

2022: <a href="https://resultados.elpais.com/elecciones/2022/autonomicas/01/18.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 6 Escaños</span> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span> 
    <span style="color: #c42065;">POR ANDALUCIA 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Granada es una provincia

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Granada</title>
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
if (provincia === "Almería") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Almería <span class="escaños">12 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1982: <a href="https://www.datoselecciones.com/andalucia-parlamento-1982/almeria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 7 Escaños</span>  
                <span style="color: #FFA500;">UCD 3 Escaños</span> 
                <span style="color: #ADD8E6;">AP-PDP-UL 2 Escaños</span> 
                </a>
                <br><br>
                El PSOE sube un escaño, por lo que saca dos escaños de ventaja a la suma de UCD y AP-PDP-UL 
                <br><br>
                1986: <a href="https://www.datoselecciones.com/andalucia-parlamento-1986/almeria" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #FF0000;">PSOE 7 Escaños</span>  
                <span style="color: #ADD8E6;">AP-PDP-UL 4 Escaños</span> 
                <span style="color: #d25644;">IU 1 Escaño</span>
                </a>
                <br><br>
                AP-PDP-UL sube un escaño, por lo que el PSOE sumando a IU dobla en escaños a AP-PDP-UL
                <br><br>
                1990: <a href="https://www.datoselecciones.com/andalucia-parlamento-1990/almeria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 7 Escaños</span>  
                    <span style="color: #0000FF;">PP 4 Escaños</span> 
                <span style="color: #d25644;">IU 1 Escaño</span>
                </a>
                <br><br>
                El PP sube un escaño, por lo que el PSOE sumando a IU dobla en escaños al PP
                <br><br>
                1994: <a href="https://www.datoselecciones.com/andalucia-parlamento-1994/almeria" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                    <span style="color: #0000FF;">PP 5 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 5 Escaños</span>
                <span style="color: #d25644;">IU 2 Escaños</span>
                </a>
                <br><br>
                IU sube un escaño, por lo que el PSOE sumando a IU sacan dos escaños de ventaja al PP
                <br><br>
                1996: <a href="https://www.datoselecciones.com/andalucia-parlamento-1996/almeria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 6 Escaños</span>  
                    <span style="color: #0000FF;">PP 5 Escaños</span> 
                <span style="color: #d25644;">IU 1 Escaño</span>
                </a>
                <br><br>
                El PSOE sube un escaño, por lo que el PSOE sumando a IU sacan dos escaños de ventaja al PP
                <br><br>
                2000: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Andaluc%C3%ADa_de_2000" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 6 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 6 Escaños</span>  
                </a>
                <br><br>
                El PSOE sube un escaño, empatando en escaños con el PP
                <br><br>
                2004: <a href="https://www.datoselecciones.com/andalucia-parlamento-2004/almeria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 6 Escaños</span>  
                    <span style="color: #0000FF;">PP 6 Escaños</span> 
</a>
<br><br>
El PP sube un escaño, empatando en escaños con el PSOE
<br><br>
2008: <a href="https://resultados.elpais.com/elecciones/2008/autonomicas/01/04.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 7 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 5 Escaños</span>  
</a>
<br><br>
IGUAL
<br><br>

2012: <a href="https://resultados.elpais.com/elecciones/2012/autonomicas/01/04.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 7 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 4 Escaños</span>  
                <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>
2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/01/04.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2018: <a href="https://resultados.elpais.com/elecciones/2018/autonomicas/01/04.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span> 
    <span style="color: #FF7F00;">CS 2 Escaños</span>
    <span style="color: #24c87e;">AA 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2022: <a href="https://resultados.elpais.com/elecciones/2022/autonomicas/01/04.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 6 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #008000;">VOX 3 Escaños</span> 
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Almería es una provincia

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Almería</title>
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
if (provincia === "Andalucía") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Andalucía <span class="escaños">109 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1982: <a href="https://www.datoselecciones.com/andalucia-parlamento-1982" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 66 Escaños</span>  
                <span style="color: #ADD8E6;">AP-PDP-UL 17 Escaños</span> 
                <span style="color: #FFA500;">UCD 16 Escaños</span> 
                <span style="color: #FF0D00;">PCE 7 Escaños</span>
                <span style="color: #15AA35;">PA 3 Escaños</span>
                </a>
                <br><br>
                UCD sube un escaño a costa del PCE.El PSOE las gana sacando once escaños por encima de la mayoría absoluta
                <br><br>
                1986: <a href="https://www.datoselecciones.com/andalucia-parlamento-1986" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #FF0000;">PSOE 60 Escaños</span>  
                <span style="color: #ADD8E6;">AP-PDP-UL 28 Escaños</span> 
                <span style="color: #d25644;">IU 19 Escaños</span>
                <span style="color: #15AA35;">PA 2 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1990: <a href="https://www.datoselecciones.com/andalucia-parlamento-1990" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 62 Escaños</span>  
                    <span style="color: #0000FF;">PP 26 Escaños</span> 
                <span style="color: #d25644;">IU 11 Escaños</span>
                <span style="color: #15AA35;">PA 10 Escaños</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1994: <a href="https://www.datoselecciones.com/andalucia-parlamento-1994" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 44 Escaños</span>  
                    <span style="color: #0000FF;">PP 41 Escaños</span> 
                <span style="color: #d25644;">IU 21 Escaños</span>
                <span style="color: #15AA35;">PA 3 Escaños</span>
                </a>
                <br><br>
                El PSOE pierde un escaño, que gana IU.El PSOE las gana y con la abstención de IU y PA saca tres escaños de ventaja al PP
                <br><br>
                1996: <a href="https://www.datoselecciones.com/andalucia-parlamento-1996" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 53 Escaños</span>  
                    <span style="color: #0000FF;">PP 40 Escaños</span> 
                <span style="color: #d25644;">IU 12 Escaños</span>
                <span style="color: #15AA35;">PA 4 Escaños</span>
                </a>
                <br><br>
                IU pierde un escaño, que gana el PSOE.El PSOE las gana y sumando a PA sacan dos escaños por encima de la mayoría absoluta
                <br><br>
                2000: <a href="https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_de_Andaluc%C3%ADa_de_2000" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 52 Escaños</span>  
                    <span style="color: #0000FF;">PP 47 Escaños</span> 
                    <span style="color: #d25644;">IU 5 Escaños</span>
                <span style="color: #15AA35;">PA 5 Escaños</span>
                </a>
                <br><br>
                IU pierde un escaño, que gana el PP. El PSOE las gana y sumando a PA sacan dos escaños por encima de la mayoría absoluta
                <br><br>
                2004: <a href="https://www.datoselecciones.com/andalucia-parlamento-2004" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 62 Escaños</span>  
                    <span style="color: #0000FF;">PP 38 Escaños</span> 
                    <span style="color: #d25644;">IU 5 Escaños</span>
                <span style="color: #15AA35;">PA 4 Escaños</span>
</a>
<br><br>
IU y PA pierden un escaños, que ganan PSOE y PP.El PSOE las gana sacando siete escaños por encima de la mayoría absoluta
<br><br>
2008: <a href="https://resultados.elpais.com/elecciones/2008/autonomicas/01/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 57 Escaños</span>  
                    <span style="color: #0000FF;">PP 46 Escaños</span> 
                <span style="color: #d25644;">IU 6 Escaños</span>
</a>
<br><br>
El PP pierde un escaño, que gana el PSOE.El PSOE las gana sacando dos escaño por encima de la mayoría absoluta
<br><br>

2012: <a href="https://resultados.elpais.com/elecciones/2012/autonomicas/01/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 50 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 47 Escaños</span>  
                <span style="color: #d25644;">IU 12 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>
2015: <a href="https://resultados.elpais.com/elecciones/2015/autonomicas/01/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 47 Escaños</span>
    <span style="color: #0000FF;">PP 33 Escaños</span> 
    <span style="color: #800080;">PODEMOS 15 Escaños</span>
    <span style="color: #FF7F00;">CS 9 Escaños</span>
    <span style="color: #d25644;">IU 5 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2018: <a href="https://resultados.elpais.com/elecciones/2018/autonomicas/01/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 33 Escaños</span>
    <span style="color: #0000FF;">PP 26 Escaños</span> 
    <span style="color: #FF7F00;">CS 21 Escaños</span>
    <span style="color: #24c87e;">AA 17 Escaños</span>
    <span style="color: #008000;">VOX 12 Escaños</span> 
</a>
<br><br>
IGUAL
<br><br>

2022: <a href="https://resultados.elpais.com/elecciones/2022/autonomicas/01/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 58 Escaños</span> 
    <span style="color: #FF0000;">PSOE 30 Escaños</span>
    <span style="color: #008000;">VOX 14 Escaños</span> 
    <span style="color: #c42065;">POR ANDALUCIA 5 Escaños</span>
    <span style="color: #24c87e;">AA 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Andalucía es una comunidad autónoma
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Andalucía</title>
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