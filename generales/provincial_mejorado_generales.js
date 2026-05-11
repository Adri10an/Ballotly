
    function abrirVentana(provincia) {
        if (provincia === "Ceuta") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Ceuta <span class="escaños">1 Escaño</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/ciudad-de-ceuta/ceuta" target="_blank" style="color: #FFA500; font-size: 1.5em; font-weight: bold;">UCD 1 Escaño</a>
                <br><br>
                UCD gana las primeras elecciones por 922 votos sobre el PSOE
                <br><br>
                1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/ciudad-de-ceuta/ceuta" target="_blank" style="color: #FFA500; font-size: 1.5em; font-weight: bold;">UCD 1 Escaño</a>
                <br><br>
                UCD amplía su ventaja sobre el PSOE a 3528 votos en 1979, una mejora de 2606 votos respecto a los 922 votos de diferencia en 1977
                <br><br>
                1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/ciudad-de-ceuta/ceuta" target="_blank" style="color: #FF0000; font-size: 1.5em; font-weight: bold;">PSOE 1 Escaño</a>
                <br><br>
                El PSOE de González arrasa en Ceuta sobre AP al que aventaja en 4024 votos.
                <br><br>
                1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/ciudad-de-ceuta/ceuta" target="_blank" style="color: #FF0000; font-size: 1.5em; font-weight: bold;">PSOE 1 Escaño</a>
                <br><br>
                El PSOE sigue ganando, pero disminuye su ventaja sobre AP, al que solo aventaja en 2149 votos.
                <br><br>
                1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/ciudad-de-ceuta/ceuta" target="_blank" style="color: #FF0000; font-size: 1.5em; font-weight: bold;">PSOE 1 Escaño</a>
                <br><br>
                El PSOE vuelve a ganar y continúa disminuyendo su ventaja a solo 788 votos sobre AP.
                <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/ciudad-de-ceuta/ceuta" target="_blank" style="color: #0000FF; font-size: 1.5em; font-weight: bold;">PP 1 Escaño</a>
                <br><br>
                El PP gana por 3106 votos al PSOE.
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/ciudad-de-ceuta/ceuta" target="_blank" style="color: #0000FF; font-size: 1.5em; font-weight: bold;">PP 1 Escaño</a>
                <br><br>
                El PP gana, aumentando su ventaja a 5661 votos sobre el PSOE.
                <br><br>
                2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/ciudad-de-ceuta/ceuta" target="_blank" style="color: #0000FF; font-size: 1.5em; font-weight: bold;">PP 1 Escaño</a>
                <br><br>
                El PP aventaja al nuevo partido de derecha GIL en 5756 votos mientras el PSOE cae a tercera fuerza en votos perdiendo la mitad de los votos de 1996
                <br><br>
                2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/ciudad-de-ceuta/ceuta" target="_blank" style="color: #0000FF; font-size: 1.5em; font-weight: bold;">PP 1 Escaño</a>
                <br><br>
                El PP vuelve a ganar con 8373 votos sobre el PSOE segunda fuerza. GIL ya no está.
                <br><br>
                2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/ciudad-de-ceuta" target="_blank" style="color: #0000FF; font-size: 1.5em; font-weight: bold;">PP 1 Escaño</a>
                <br><br>
                El PP vuelve a ganar con una ventaja menor de 5324 votos sobre el PSOE.
                <br><br>
                2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/18/index.html" target="_blank" style="color: #0000FF; font-size: 1.5em; font-weight: bold;">PP 1 Escaño</a>
                <br><br>
                Con la mayoría absoluta de Rajoy la ventaja del PP sobre el PSOE es de 14523 votos
                <br><br>
                2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/18/index.html" target="_blank" style="color: #0000FF; font-size: 1.5em; font-weight: bold;">PP 1 Escaño</a>
                <br><br>
                Con la aparición de votos de Ciudadanos, la ventaja del PP sobre el PSOE SE reduce a la mitad, ahora es de 7187 votos.
                <br><br>
                2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/18/index.html" target="_blank" style="color: #0000FF; font-size: 1.5em; font-weight: bold;">PP 1 Escaño</a>
                <br><br>
                Con la bajada de los votos de Ciudadanos, la ventaja del PP sobre el PSOE aumenta a 9009 votos
                <br><br>
                201928A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/18/index.html" target="_blank" style="color: #FF0000; font-size: 1.5em; font-weight: bold;">PSOE 1 Escaño</a>
                <br><br>
                El PSOE se convierte en el ganador al ir la derecha dividida en tres partidos y aventaja en 4687 votos a VOX, que es ahora segunda fuerza, mientras el PP cae a tercera.
                <br><br>
                201910N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/18/index.html" target="_blank" style="color: #008000; font-size: 1.5em; font-weight: bold;">VOX 1 Escaño</a>
                <br><br>
                VOX sube y gana las elecciones en Ceuta aventajando al PSOE en 1297 votos.
                <br><br>
                2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/18/51/#?int=widgetEP" target="_blank" style="color: #0000FF; font-size: 1.5em; font-weight: bold;">PP 1 Escaño</a>
                <br><br>
                Con la suma de los votos de Ciudadanos, el PP recupera su tradicional escaño aventajando en tan solo 1607 votos al PSOE y VOX cayendo a tercera fuerza
                <br><br>
                En Conclusión, Ceuta es una ciudad fuertemente de derechas (VOX obtiene su mejor porcentaje de votos actual, aunque sin escaño) influenciada por discursos sobre la inmigración ilegal, siendo únicamente ganada por el PSOE en las tres legislaturas de Félipe Gónzalez y el 28 de abril de 2019, ante la división de la derecha entre PP,VOX y CS
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;

    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Ceuta</title>
            
    <style>
    body {
        font-family: 'Segoe UI', sans-serif;
        background-color: #f4f4f8;
        margin: 0;
        padding: 20px;
    }
    h1 {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 30px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .boton-con-texto {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 140px;
    }
    .titulo-boton {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 8px;
        text-align: center;
    }
    .button {
        width: 140px;
        height: 90px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
    }
    
                body {
    font-family: Arial, sans-serif; 
    background: url('https://i.pinimg.com/736x/3f/14/c4/3f14c4421a628c3320da197bd6ce6e1e.jpg') no-repeat center center fixed;
    background-size: cover;
    background-color: #d6eaf8;
    margin: 0;
    padding: 20px;
    color: #d6eaf8;
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
if (provincia === "Melilla") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Melilla <span class="escaños">1 Escaño</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/ciudad-de-melilla" target="_blank" style="color: #FFA500; font-size: 1.5em; font-weight: bold;">UCD 1 Escaño</a>
                <br><br>
                UCD gana las primeras elecciones por una ventaja de 5555 votos y con más del doble de votos del PSOE .
                <br><br>
                1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/ciudad-de-melilla" target="_blank" style="color: #FFA500; font-size: 1.5em; font-weight: bold;">UCD 1 Escaño</a>
                <br><br>
                UCD reduce su ventaja a 5285 votos sobre el PSOE.
                <br><br>
                1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/ciudad-de-melilla" target="_blank" style="color: #FF0000; font-size: 1.5em; font-weight: bold;">PSOE 1 Escaño</a>
                <br><br>
                El PSOE de González arrasa en Melilla sobre AP al que aventaja en 4740 votos.
                <br><br>
                1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/ciudad-de-melilla" target="_blank" style="color: #ADD8E6; font-size: 1.5em; font-weight: bold;">AP 1 Escaño</a>
                <br><br>
                AP consigue remontar y gana al PSOE con una ventaja de 2034 votos.
                <br><br>
                1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/ciudad-de-melilla" target="_blank" style="color: #0000FF; font-size: 1.5em; font-weight: bold;">PP 1 Escaño</a>
                <br><br>
                El PP recoge la herencia de AP y aumenta la ventaja sobre el PSOE a 3007 votos.
                <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/ciudad-de-melilla" target="_blank" style="color: #FF0000; font-size: 1.5em; font-weight: bold;">PSOE 1 Escaño</a>
                <br><br>
                Felipe Gonzalez recupera Melilla, aunque solo aventaja al PP en 1020 votos.
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/ciudad-de-melilla" target="_blank" style="color: #0000FF; font-size: 1.5em; font-weight: bold;">PP 1 Escaño</a>
                <br><br>
                El PP vuelve a ganar Melilla, aunque de nuevo de forma ajustada, con una ventaja de 1978 votos sobre el PSOE.
                <br><br>
                2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/ciudad-de-melilla" target="_blank" style="color: #0000FF; font-size: 1.5em; font-weight: bold;">PP 1 Escaño</a>
                <br><br>
                El PP se alía con Unión del Pueblo Melillense (UPM) y supera en 6564 votos y más del doble de votos a la coalición de partidos progresistas: Bloque Localista de Melilla (BLM), que es segunda fuerza en estas elecciones.
                <br><br>
                2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/ciudad-de-melilla" target="_blank" style="color: #0000FF; font-size: 1.5em; font-weight: bold;">PP 1 Escaño</a>
                <br><br>
                El PP gana por 3583 votos al PSOE, que vuelve a segunda fuerza, mientras BLM, queda ya integrado desde 2003 en el PP.
                <br><br>
                2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/ciudad-de-melilla" target="_blank" style="color: #0000FF; font-size: 1.5em; font-weight: bold;">PP 1 Escaño</a>
                <br><br>
                El PP gana de nuevo, con una mínima diferencia de 297 votos sobre el PSOE.
                <br><br>
                2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/19/" target="_blank" style="color: #0000FF; font-size: 1.5em; font-weight: bold;">PP 1 Escaño</a>
                <br><br>
                Con la mayoría absoluta de Rajoy, el PP gana con 11062 votos sobre el PSOE, consiguiendo sus mejores resultados históricos, ya que casi triplica a la segunda fuerza.
                <br><br>
                2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/19/" target="_blank" style="color: #0000FF; font-size: 1.5em; font-weight: bold;">PP 1 Escaño</a>
                <br><br>
                El PP vuelve a ganar con una ventaja de 5420 votos sobre el PSOE, aunque con la erosión del bipartidismo, consigue su peor porcentaje, que aun así no baja del 43% de los votos.
                <br><br>
                2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/19/" target="_blank" style="color: #0000FF; font-size: 1.5em; font-weight: bold;">PP 1 Escaño</a>
                <br><br>
                Con la repetición de elecciones, el PP aumenta, ganando con 6822 votos sobre PSOE, arrando 1000 votos a Ciudadanos.
                <br><br>
                201928A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/19/" target="_blank" style="color: #0000FF; font-size: 1.5em; font-weight: bold;">PP 1 Escaño</a>
                <br><br>
                El PP gana con 1077 votos sobre el PSOE, a pesar de la fortaleza de PSOE,CMP,VOX y Ciudadanos
                <br><br>
                201910N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/19/" target="_blank" style="color: #0000FF; font-size: 1.5em; font-weight: bold;">PP 1 Escaño</a>
                <br><br>
                El PP gana con solo 181 votos sobre CPM, que sube a segunda fuerza, mientras VOX, a su vez, sube a tercera y el PSOE baja a cuarta
                <br><br>
                2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/19/52/" target="_blank" style="color: #0000FF; font-size: 1.5em; font-weight: bold;">PP 1 Escaño</a>
                <br><br>
                El PP gana cómodamente con 6503 votos sobre el PSOE, que recupera la segunda plaza, mientras CPM se hunde y pasa del 28,95% votos al 4,75% de los votos y cuarta fuerza, tras el escándalo de la compra de votos.
                <br><br>
                <br><br>
                En conclusión sabemos que Melilla es una ciudad fuertemente de derechas y del PP, que nunca bajó del 43% de los votos y que normalmente suele situarse, alrededor del 50% o incluso superior, siendo únicamente ganada por el PSOE en tiempos de Felipe Gónzalez, en los años 1982 y 1993
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Melilla</title>
            
    <style>
    body {
        font-family: 'Segoe UI', sans-serif;
        background-color: #f4f4f8;
        margin: 0;
        padding: 20px;
    }
    h1 {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 30px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .boton-con-texto {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 140px;
    }
    .titulo-boton {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 8px;
        text-align: center;
    }
    .button {
        width: 140px;
        height: 90px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
    }
    
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
if (provincia === "Soria") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Soria <span class="escaños">3 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/castilla-la-mancha/soria" target="_blank" style="color: #FFA500; font-size: 1.5em; font-weight: bold;">UCD 3 Escaños</a>
                <br><br>
                UCD gana las primeras elecciones más que triplicando al PSOE con 24567 votos de ventaja sobre el PSOE, hecho insólito, pues cuando se reparten tres escaños es casi imposible sacarlos todos.
                <br><br>
                1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/castilla-la-mancha/soria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FFA500;">UCD 2 Escaños</span> 
                <span style="color: #FF0000;">PSOE 1 Escaño</span>
                </a>
                <br><br>
                UCD vuelve a ganar, duplicando en escaños al PSOE al que aventaja en 17569 votos sobre el PSOE.
                <br><br>
                1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/castilla-la-mancha/soria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #ADD8E6;">AP-PDP 1 Escaño</span> 
                <span style="color: #FF0000;">PSOE 1 Escaño</span> 
                <span style="color: #FFA500;">UCD 1 Escaño</span>
                </a>
                <br><br>
                AP-PDP (Coalición Popular entre AP y Partido Demócrata Popular) gana las elecciones y sumando a UCD duplican en escaños al PSOE. AP-PDP gana al PSOE por tan solo 1181 votos y el PSOE gana a UCD por 10186 votos
                <br><br>
                1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/castilla-la-mancha/soria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #ADD8E6;">AP-PDP-PL 2 Escaños</span> 
                <span style="color: #FF0000;">PSOE 1 Escaño</span>
                </a>
                <br><br>
                AP-PDP-PL (Coalición Popular entre AP, Partido Demócrata Popular y Partido Liberal) vuelve a ganar las elecciones y se come el escaño de UCD, que ya no está presente, doblando al PSOE en escaños al que aventaja en 3576 votos
                <br><br>
                1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/castilla-la-mancha/soria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 2 Escaños</span> 
                <span style="color: #FF0000;">PSOE 1 Escaño</span>
                </a>
                <br><br>
                El PP gana las elecciones en Soria doblando en escaños al PSOE al que aventaja en 8335 votos
                <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/castilla-la-mancha/soria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 2 Escaños</span> 
                <span style="color: #FF0000;">PSOE 1 Escaño</span>
                </a>
                <br><br>
                El PP vuelve a ganar las elecciones en Soria y doblando en escaños al PSOE al que aventaja en 8129 votos
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/castilla-la-mancha/soria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
De nuevo, el PP vuelve a ganar las elecciones en Soria, doblando en escaños al PSOE al que aventaja en 12335 votos
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/castilla-la-mancha/soria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE-PROGR 1 Escaño</span>
</a>
<br><br>
El PP repite como fuerza ganadora, doblando en escaños al PSOE-PROGR.(Coalición PSOE-PROGRESISTAS) al que aventaja en 14447 votos
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/castilla-la-mancha/soria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
El PP sigue siendo la fuerza más votada, doblando en escaños al PSOE al que aventaja en 6900 votos
<br><br>

<h1 style="color: black;"><span class="escaños">Pasa a 2 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/castilla-la-mancha/soria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 1 Escaño</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
El PP continúa primero, empatando en escaños con el PSOE al que aventaja en 4037 votos tras la reducción de un escaño en la provincia
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/08/42.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 1 Escaño</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
Con la mayoría absoluta de Rajoy, el PP adquiere una fuerza notable aventajando al PSOE en 11997 votos, pero PP y PSOE continúan empatados a un escaño.
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/08/42.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 1 Escaño</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
El PP vuelve a ganar y empata a un escaño con el PSOE al que aventaja en 7654 votos
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/08/42.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 1 Escaño</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
El PP sigue siendo la fuerza más votada, empatada en escaños con el PSOE al que aventaja en 9457 votos
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/08/42.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 1 Escaño</span> 
    <span style="color: #0000FF;">PP 1 Escaño</span>
</a>
<br><br>
Empate de escaños entre PSOE y PP. El PSOE gana por primera vez las elecciones generales en Soria por estrecho margen, debido a la división de la derecha entre PP, Cs y Vox, aventajando al PP en 2630 votos
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/08/42.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 1 Escaño</span> 
    <span style="color: #0000FF;">PP 1 Escaño</span>
</a>
<br><br>
El PSOE vuelve a ganar las elecciones con un menor margen sobre el PP,al que aventaja por tan solo 796 votos, empatando en escaños.
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/08/42/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 1 Escaño</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
El PP gana y vuelve a recuperar el liderazgo, empatando en escaños con el PSOE, al que aventaja en 3929 votos y el PSOE gana la segunda posición y el escaño a SORIA YA! por 5269 votos
<br><br>
Desde la aparición de SORIA YA! en las elecciones autonómicas de Castilla y León de 2022, Soria se ha inclinado más hacia la izquierda. SORIA YA! se presenta por primera vez en unas elecciones y arranca con un notable 19,1% de los votos.  
Por primera vez, los votos a las izquierdas superan a los votos de las derechas. Sin embargo, es una provincia donde el PP suele mantener históricamente el primer puesto.

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Soria</title>
            
    <style>
    body {
        font-family: 'Segoe UI', sans-serif;
        background-color: #f4f4f8;
        margin: 0;
        padding: 20px;
    }
    h1 {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 30px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .boton-con-texto {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 140px;
    }
    .titulo-boton {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 8px;
        text-align: center;
    }
    .button {
        width: 140px;
        height: 90px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
    }
    
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
if (provincia === "Teruel") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Teruel <span class="escaños">3 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/aragon/teruel" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 2 Escaños</span> 
        <span style="color: #FF0000;">PSOE 1 Escaño</span>
    </a>
    <br><br>
    UCD gana las primeras elecciones y duplica en escaños al PSOE, al que aventaja en 30397 votos
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/aragon/teruel" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 2 Escaños</span> 
        <span style="color: #FF0000;">PSOE 1 Escaño</span>
    </a>
    <br><br>
    UCD vuelve a ganar y vuelve a duplicar al PSOE, en votos y en escaños
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/aragon/teruel" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PAR 1 Escaño</span>
    </a>
    <br><br>
    El PSOE las gana y duplica en escaños a la alianza de Alianza Popular, Partido Demócrata Popular y el Partido Aragonés. El PSOE gana a AP-PDP-PAR por 7055 votos      
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/aragon/teruel" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PL 1 Escaño</span>
    </a>
    <br><br>
    El PSOE vuelve a ganar y a duplicar, en esta ocasión, a la alianza AP-PDP-PL. El PSOE gana a AP-PDP-PL por 7202 votos
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/aragon/teruel" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 
        <span style="color: #0000FF;">PP 1 Escaño</span>
    </a>
    <br><br>
    El PSOE continúa ganando y duplicando al PP al que aventaja en 6049 votos
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/aragon/teruel" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 2 Escaños</span> 
                <span style="color: #0000FF;">PP 1 Escaño</span>
                </a>
                <br><br>
                El PSOE sigue duplicando al PP, al que aventaja en 2034 votos
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/aragon/teruel" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP-PAR 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
La alianza del PP-PAR consigue ganar las elecciones y duplicar en escaños al PSOE al que aventajan en 7351 votos
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/aragon/teruel" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
El PP repite como fuerza ganadora, doblando en escaños al PSOE al que aventaja en 11895 votos
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/aragon/teruel" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
El PSOE consigue ganar y duplicar en escaños al PP, al que aventaja por tan solo 232 votos.
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/aragon/teruel" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span> 
    <span style="color: #0000FF;">PP 1 Escaño</span>
</a>
<br><br>
El PSOE repite como ganador en la provincia y duplica en escaños al PP, al que aventaja por 4231 votos
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/02/44.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
Con la mayoría absoluta de Rajoy, el PP duplica al PSOE en escaños, al que aventaja en 14567 votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/02/44.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
El PP vuelve a ganar y duplica al PSOE en escaños al que aventaja en 8370 votos
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/02/44.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
El PP sigue siendo la fuerza más votada, duplicando en escaños al PSOE al que aventaja en 11199 votos
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/02/44.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 1 Escaño</span> 
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
Primer triple empate a escaños en la ciudad.El PSOE las gana, pero la suma de PP y CIUDADANOS le dobla en escaños. El PSOE gana al PP por 6979 y el PP gana a CIUDADANOS por 3143 votos
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/02/44.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #006400;">¡TERUEL EXISTE! 1 Escaño</span>
    <span style="color: #FF0000;">PSOE 1 Escaño</span> 
    <span style="color: #0000FF;">PP 1 Escaño</span>
</a>
<br><br>
La agrupación de electores ¡TERUEL EXISTE! gana las elecciones y sumando al PSOE duplican en escaños al PP. ¡TERUEL EXISTE! gana al PSOE por tan solo 827 votos y el PSOE gana al PP por 1414 votos
<br><br>

2023: <a href="" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
El PP gana y vuelve a recuperar el liderazgo, duplicando en escaños al PSOE, mientras que ¡TERUEL EXISTE! cae a tercera posición y pierde 8413 votos. El PP gana al PSOE por 4360 votos
<br><br>
Teruel es el Ohio de España, es decir, el partido que gana en Teruel es el partido que acaba gobernando en España, exceptuando el 10N, cuando Teruel Existe fue primera fuerza, sacando 827 votos al PSOE, que fue la fuerza ganadora

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Teruel</title>
            
    <style>
    body {
        font-family: 'Segoe UI', sans-serif;
        background-color: #f4f4f8;
        margin: 0;
        padding: 20px;
    }
    h1 {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 30px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .boton-con-texto {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 140px;
    }
    .titulo-boton {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 8px;
        text-align: center;
    }
    .button {
        width: 140px;
        height: 90px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
    }
    
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
if (provincia === "Segovia") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Segovia <span class="escaños">3 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">

    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/castilla-la-mancha/segovia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 2 Escaños</span> 
        <span style="color: #FF0000;">PSOE 1 Escaño</span>
    </a>
    <br><br>
    UCD gana las primeras elecciones y duplica en escaños al PSOE, al que aventaja en 32060 votos
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/castilla-la-mancha/segovia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 2 Escaños</span> 
        <span style="color: #FF0000;">PSOE 1 Escaño</span>
    </a>
    <br><br>
    UCD vuelve a ganar y vuelve a duplicar al PSOE en votos y en escaños
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/castilla-la-mancha/segovia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #ADD8E6;">AP-PDP 2 Escaños</span>
        <span style="color: #FF0000;">PSOE 1 Escaño</span> 
        
    </a>
    <br><br>
    La alianza de AP-PDP gana las elecciones y duplica al PSOE en escaños, al que aventaja en 1108 votos      
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/castilla-la-mancha/segovia" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #ADD8E6;">AP-PDP-PL 1 Escaño</span>
        <span style="color: #FF0000;">PSOE 1 Escaño</span>
        <span style="color: #006400;">CDS 1 Escaño</span>
    </a>
    <br><br>
    La alianza de AP-PDP-PL gana, y sumando a CDS duplican en escaños al PSOE. AP-PDP-PL gana al PSOE por 3581 votos y el PSOE gana a CDS por 8034 
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/castilla-la-mancha/segovia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #0000FF;">PP 2 Escaños</span>
        <span style="color: #FF0000;">PSOE 1 Escaño</span> 
        
    </a>
    <br><br>
    El PP gana en solitario duplicando en escaños al PSOE, al que aventaja en 8237 votos
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/aragon/teruel" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 2 Escaños</span> 
                <span style="color: #FF0000;">PSOE 1 Escaño</span>
                </a>
                <br><br>
                El PP sigue duplicando y ganando al PSOE, al que aventaja en 15056 votos
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/castilla-la-mancha/segovia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
El PP continua como ganador duplicando en escaños al PSOE al que aventaja en 22285 votos
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/castilla-la-mancha/segovia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE-PROGR 1 Escaño</span>
</a>
<br><br>
El PP repite como fuerza ganadora, doblando en escaños al PSOE-PROGR al que aventaja en 25189 votos
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/castilla-la-mancha/segovia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
El PP sigue ganando y duplicando en escaños al PSOE al que aventaja en 12524 votos
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/castilla-la-mancha/segovia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 1 Escaño</span> 
    
</a>
<br><br>
El PP repite como ganador en la provincia y duplica en escaños al PSOE al que aventaja en 14376 votos
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/08/40.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
Con la mayoría absoluta de Rajoy, el PP duplica al PSOE en escaños y en votos 
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/08/40.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
El PP vuelve a ganar y duplica al PSOE en escaños al que aventaja en 16406 votos
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/08/40.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
Con la repetición de elecciones, El PP sigue siendo la fuerza más votada, duplicando en escaños y votos al PSOE.
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/08/40.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 1 Escaño</span> 
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
El PSOE gana por primera vez las elecciones en la provincia, pero la suma de PP y CIUDADANOS le duplican en escaños. El PSOE gana al PP por tan solo 1172 votos y el PP gana a CIUDADANOS por 6409 votos
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/08/40.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #FF0000;">PSOE 1 Escaño</span> 
    <span style="color: #008000;">VOX 1 Escaño</span>  
</a>
<br><br>
El PP vuelve a ganar en la provincia, CIUDADANOS se hunde y cae a quinta fuerza y VOX entra como tercera fuerza, y un escaño por poco. PP y VOX duplican en escaños al PSOE. El PP gana al PSOE por 2824 votos y el PSOE gana a VOX por 10664 votos
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/08/40/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
El PP aumenta su victoria y arrebata el escaño a VOX, duplicando en escaños al PSOE. El PP gana al PSOE en 12781 votos
<br><br>
En conclusión, se observa como claramente Segovia es una provincia de derechas, superando por lo general el 50% de los votos, ya que en toda la historia de la democracia, sin excepción, los escaños de la derechas han duplicado al PSOE.El PSOE solo fue capaz de ganar en votos el 28 de abril de 2019

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Segovia</title>
            
    <style>
    body {
        font-family: 'Segoe UI', sans-serif;
        background-color: #f4f4f8;
        margin: 0;
        padding: 20px;
    }
    h1 {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 30px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .boton-con-texto {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 140px;
    }
    .titulo-boton {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 8px;
        text-align: center;
    }
    .button {
        width: 140px;
        height: 90px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
    }
    
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
if (provincia === "Cuenca") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Cuenca <span class="escaños">4 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/castilla-y-leon/cuenca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 3 Escaños</span> 
        <span style="color: #FF0000;">PSOE 1 Escaño</span>
    </a>
    <br><br>
    UCD gana las primeras elecciones y triplica en escaños al PSOE, al que aventaja en 42200 votos
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/castilla-y-leon/cuenca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 3 Escaños</span> 
        <span style="color: #FF0000;">PSOE 1 Escaño</span>
    </a>
    <br><br>
    UCD vuelve a ganar y vuelve a triplicar al PSOE, al que aventaja en 25619 votos
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/castilla-y-leon/cuenca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 2 Escaños</span>
        
        
    </a>
    <br><br>
    El PSOE las gana, pero empata en escaños con AP-PDP, al que aventaja en 17402 votos 
    <br><br>
    <h1 style="color: black;"><span class="escaños">Pasa a 3 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/castilla-y-leon/cuenca" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #FF0000;">PSOE 2 EscañoS</span>
        <span style="color: #ADD8E6;">AP-PDP 1 Escaño</span>
        
    </a>
    <br><br>
    El PSOE continúa ganando, y con la pérdida de un escaño en la provincia pasa a duplicar a AP-PDP, al que aventaja en 8022 votos
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/castilla-y-leon/cuenca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 
        <span style="color: #0000FF;">PP 1 Escaño</span>
        
    </a>
    <br><br>
    El PSOE sigue como ganador y duplica en escaños al PP, al que aventaja en 8717 votos
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/castilla-y-leon/cuenca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 2 Escaños</span> 
                <span style="color: #FF0000;">PSOE 1 Escaño</span>
                </a>
                <br><br>
                El PP arrebata al PSOE la primera posición y duplica en escaños al PSOE al que aventaja en 4645 votos
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/castilla-y-leon/cuenca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
El PP continua como ganador duplicando en escaños al PSOE al que aventaja en 10938 votos
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/castilla-y-leon/cuenca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE-PROGR 1 Escaño</span>
</a>
<br><br>
El PP repite como fuerza ganadora, doblando en escaños al PSOE-PROGR al que aventaja en 15926 votos
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/castilla-y-leon/cuenca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
El PP sigue ganando y duplicando en escaños al PSOE, al que aventaja en 5818 votos
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/castilla-y-leon/cuenca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 1 Escaño</span> 
    
</a>
<br><br>
El PP repite como ganador en la provincia y duplica en escaños al PSOE al que aventaja en 6174 votos
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/07/16.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
Con la mayoría absoluta de Rajoy, el PP duplica al PSOE en escaños, al que aventaja en 28646 votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/07/16.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
El PP vuelve a ganar y duplica al PSOE en escaños al que aventaja en 13722 votos
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/07/16.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
Con la repetición de elecciones, El PP sigue siendo la fuerza más votada, duplicando en escaños al PSOE, al que aventaja en 18564 votos
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/07/16.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span> 
    <span style="color: #0000FF;">PP 1 Escaño</span>
</a>
<br><br>
El PSOE vuelve a ganar las elecciones en la provincia, como resultado de la división de la derecha en tres partidos, duplicando en escaños al PP. El PSOE gana al PP por 10608 votos
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/07/16.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaño</span> 
    <span style="color: #0000FF;">PP 1 Escaño</span>

</a>
<br><br>
El PSOE vuelve a ganar en la provincia, duplicando en escaños al PP y VOX se queda a 227 votos de obtener un diputado a costa del PSOE. El PSOE gana al PP por 6949 votos
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/07/16/#?int=widgetEP" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
El PP vuelve a la primera posición y duplica en escaños al PSOE al que aventaja en 2727 votos
<br><br>
En conclusión, Cuenca es una provincia algo mixta en cuanto a resultados de la izquierda y la derecha, aunque el PP ha dominado en la mayoría de los años y la provincia tiene un ligero patrón hacia la derecha


            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Cuenca</title>
            
    <style>
    body {
        font-family: 'Segoe UI', sans-serif;
        background-color: #f4f4f8;
        margin: 0;
        padding: 20px;
    }
    h1 {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 30px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .boton-con-texto {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 140px;
    }
    .titulo-boton {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 8px;
        text-align: center;
    }
    .button {
        width: 140px;
        height: 90px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
    }
    
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
if (provincia === "Huesca") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Huesca <span class="escaños">3 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/aragon/huesca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 2 Escaños</span> 
        <span style="color: #FF0000;">PSOE 1 Escaño</span>
    </a>
    <br><br>
    UCD gana las primeras elecciones y duplica en escaños al PSOE, al que aventaja en 22144 votos
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/aragon/huesca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 2 Escaños</span> 
        <span style="color: #FF0000;">PSOE 1 Escaño</span>
    </a>
    <br><br>
    UCD vuelve a ganar y vuelve a duplicar al PSOE, al que aventaja en 15564 votos
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/aragon/huesca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PAR 1 Escaños</span>
        
        
    </a>
    <br><br>
    El PSOE las gana, duplicando en escaños a AP-PDP-PAR al aventaja en 29158 votos
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/aragon/huesca" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #FF0000;">PSOE 2 EscañoS</span>
        <span style="color: #ADD8E6;">AP-PDP-PL 1 Escaño</span>
        
    </a>
    <br><br>
    El PSOE continúa ganando, duplicando a AP-PDP-PL al que aventaja en 23475 votos
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/aragon/huesca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 
        <span style="color: #0000FF;">PP 1 Escaño</span>
        
    </a>
    <br><br>
    El PSOE sigue como ganador y duplica en escaños al PP al que aventaja en 17553 votos
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/aragon/huesca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 2 Escaños</span>
                    <span style="color: #0000FF;">PP 1 Escaño</span> 
                
                </a>
                <br><br>
                El PSOE sigue ganando y duplicando en escaños al PP, al que aventaja en 7661 votos
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/aragon/huesca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP-PAR 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
El PP-PAR vuelve a la primera posición, duplicando en escaños al PSOE, al que aventaja en 6134 votos
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/aragon/huesca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
El PP repite como fuerza ganadora, doblando en escaños al PSOE, al que aventaja en 10120 votos
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/aragon/huesca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 1 Escaño</span> 
    
</a>
<br><br>
El PSOE retorna a la primera posición, duplicando en escaños al PP, al que aventaja en 11007 votos
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/aragon/huesca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span> 
    <span style="color: #0000FF;">PP 1 Escaño</span>
    
    
</a>
<br><br>
El PSOE repite como ganador en la provincia y duplica en escaños al PP, al que aventaja en 13206 votos
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/02/22.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
Con la mayoría absoluta de Rajoy, el PP duplica al PSOE en escaños, al que aventaja en 17714 votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/02/22.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 1 Escaño</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
</a>
<br><br>
El PP vuelve a ganar, pero la suma de PSOE y PODEMOS duplica al PP. El PP gana al PSOE por 9592 votos y el PSOE gana a PODEMOS por 8271 votos
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/02/22.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 1 Escaño</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
</a>
<br><br>
El PP las vuelve a ganar, pero la suma de PSOE y PODEMOS vuelve a duplicar en escaños al PP. El PP gana al PSOE por 12485 votos y el PSOE gana a PODEMOS por 7615 votos
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/02/22.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 1 Escaños</span> 
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
El PSOE se convierte en ganador, pero la suma de PP y CIUDADANOS duplica en escaños al PSOE. El PSOE gana al PP por 15993 y el PP gana a CIUDADANOS por tan solo 631 votos
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/02/22.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaño</span> 
    <span style="color: #0000FF;">PP 1 Escaño</span>

</a>
<br><br>
El PSOE vuelve a ganar en la provincia, duplicando en escaños al PP, mientras CIUDADANOS se hunde y cae a quinta posición
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/02/22/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
El PP vuelve a la primera posición y duplica en escaños al PSOE, al que aventaja en 5476 votos
<br><br>
Huesca es una provincia con una estructura mixta, en la que se mantienen opciones de izquierda y derecha, y en la que la aparición de nuevos actores como Podemos y Ciudadanos ha modificado las reglas del juego, sobre todo durante los años de crisis del bipartidismo.
De nuevo como provincia aragonesa, el partido que gana en Huesca gana a nivel nacional

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Huesca</title>
            
    <style>
    body {
        font-family: 'Segoe UI', sans-serif;
        background-color: #f4f4f8;
        margin: 0;
        padding: 20px;
    }
    h1 {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 30px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .boton-con-texto {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 140px;
    }
    .titulo-boton {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 8px;
        text-align: center;
    }
    .button {
        width: 140px;
        height: 90px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
    }
    
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

if (provincia === "Palencia") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Palencia <span class="escaños">3 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/castilla-la-mancha/palencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 2 Escaños</span> 
        <span style="color: #FF0000;">PSOE 1 Escaño</span>
    </a>
    <br><br>
    UCD gana las primeras elecciones y duplica en escaños al PSOE, al que aventaja en 25690 votos
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/castilla-la-mancha/palencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 2 Escaños</span> 
        <span style="color: #FF0000;">PSOE 1 Escaño</span>
    </a>
    <br><br>
    UCD vuelve a ganar y vuelve a duplicar al PSOE, al que aventaja en 25181 votos
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/castilla-la-mancha/palencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 1 Escaño</span>
        
        
    </a>
    <br><br>
    El PSOE las gana, duplicando en escaños a AP-PDP al que aventaja en 4791 votos
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/castilla-la-mancha/palencia" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #FF0000;">PSOE 2 Escaños</span>
        <span style="color: #ADD8E6;">AP-PDP-PL 1 Escaño</span>
        
    </a>
    <br><br>
    El PSOE continúa ganando, duplicando a AP-PDP al que aventaja por tan solo 641 votos
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/castilla-la-mancha/palencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #0000FF;">PP 2 Escaños</span>
        <span style="color: #FF0000;">PSOE 1 Escaño</span> 
        
    </a>
    <br><br>
    El PP se convierte en ganador y duplica en escaños al PSOE al que aventaja en 8873 votos
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/castilla-la-mancha/palencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 1 Escaños</span>
                    
                
                </a>
                <br><br>
                El PP sigue ganando y duplicando en escaños al PSOE, al que aventaja en 11296 votos
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/castilla-la-mancha/palencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
El PP vuelve a ganar, duplicando en escaños al PSOE, al que aventaja en 16505 votos
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/castilla-la-mancha/palencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE-PROGR 1 Escaño</span>
</a>
<br><br>
El PP repite como fuerza ganadora, doblando en escaños al PSOE-PROGR, al que aventaja en 22817 votos
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/castilla-la-mancha/palencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    
</a>
<br><br>
El PP continúa en la primera posición, duplicando en escaños al PSOE, al que aventaja en 8625 votos
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/castilla-la-mancha/palencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 1 Escaño</span> 
    
    
</a>
<br><br>
El PP repite como ganador en la provincia y duplica en escaños al PSOE al que aventaja en 7223 votos
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/08/34.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
Con la mayoría absoluta de Rajoy, el PP duplica al PSOE en escaños, al que aventaja en 25431 votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/08/34.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 EscañoS</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
El PP vuelve a ganar, duplicando en escaños al PSOE, al que aventaja en 16459 votos 
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/08/34.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
El PP continúa ganando y duplicando en escaños al PSOE, al que aventaja en 21116 votos
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/08/34.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 1 Escaño</span> 
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
El PSOE se convierte en ganador, pero la suma de PP y CIUDADANOS duplican en escaños al PSOE. El PSOE gana al PP por tan solo 1829 votos y el PP gana a CIUDADANOS por 14478 votos
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/08/34.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 1 Escaño</span> 
    

</a>
<br><br>
El PP se convierte en ganador, duplicando en escaños al PSOE, al que aventaja en 2348 votos
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/08/34/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
El PP continúa en la primera posición, duplicando al PSOE en escaños, al que aventaja en 7096 votos
<br><br>
En conclusión,Palencia es una provincia claramente de derechas, ya que la derecha ha duplicado casi siempre al PSOE en escaños, mientras que el PSOE solo logra ganar en escaños en las dos primeras legislaturas de Félipe González y en la segunda solo lo hace por 641 votos, por lo que la euforia del PSOE es breve

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Palencia</title>
            
    <style>
    body {
        font-family: 'Segoe UI', sans-serif;
        background-color: #f4f4f8;
        margin: 0;
        padding: 20px;
    }
    h1 {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 30px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .boton-con-texto {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 140px;
    }
    .titulo-boton {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 8px;
        text-align: center;
    }
    .button {
        width: 140px;
        height: 90px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
    }
    
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
if (provincia === "Zamora") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Zamora <span class="escaños">4 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/castilla-la-mancha/zamora" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 2 Escaños</span>
        <span style="color: #ADD8E6;">AP 1 Escaño</span> 
        <span style="color: #FF0000;">PSOE 1 Escaño</span>
    </a>
    <br><br>
    UCD gana las primeras elecciones y sumando a AP en el bloque de la derecha consigue triplicar al PSOE en escaños. UCD gana a AP por 29949 votos y AP gana al PSOE por 4452 votos
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/castilla-la-mancha/zamora" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 3 Escaños</span> 
        <span style="color: #FF0000;">PSOE 1 Escaño</span>
    </a>
    <br><br>
    UCD vuelve a ganar y triplica al PSOE en escaños al duplica en votos
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/castilla-la-mancha/zamora" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 1 Escaño</span>
        <span style="color: #FFA500;">UCD 1 Escaño</span>
        
        
    </a>
    <br><br>
    El PSOE las gana, empatando en escaños a la suma de AP-PDP y de UCD. El PSOE solo gana a AP-PDP por 300 votos y AP-PDP gana a UCD por 22779
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/castilla-la-mancha/zamora" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #ADD8E6;">AP-PDP-PL 2 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span>
        
        
    </a>
    <br><br>
    AP-PDP-PL gana las elecciones y empata a escaños con el PSOE al que aventaja en 4408 votos
    <br><br>
    <h1 style="color: black;"><span class="escaños">Pasa a 3 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/castilla-la-mancha/zamora" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #0000FF;">PP 2 Escaños</span>
        <span style="color: #FF0000;">PSOE 1 Escaño</span> 
        
    </a>
    <br><br>
    El PP se convierte en ganador y duplica en escaños al PSOE, al que aventaja en 6109 votos
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/castilla-la-mancha/zamora" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 1 Escaños</span>
                    
                
                </a>
                <br><br>
                El PP sigue ganando y duplicando en escaños al PSOE, al que aventaja en 13632 votos
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/castilla-la-mancha/zamora" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
El PP vuelve a ganar, duplicando en escaños al PSOE, al que aventaja en 23714 votos
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/castilla-la-mancha/zamora" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE-PROGR 1 Escaño</span>
</a>
<br><br>
El PP repite como fuerza ganadora, doblando en escaños al PSOE-PROGR, al que aventaja en 33770 votos
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/castilla-la-mancha/palencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    
</a>
<br><br>
El PP continúa en la primera posición, duplicando en escaños al PSOE, al que aventaja en 18064 votos
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/castilla-la-mancha/zamora" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 1 Escaño</span> 
    
    
</a>
<br><br>
El PP repite como ganador en la provincia y duplica en escaños al PSOE, al que aventaja en 11483 votos
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/08/49.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
Con la mayoría absoluta de Rajoy, el PP duplica al PSOE en escaños, al que aventaja en 33169 votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/08/49.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 EscañoS</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
El PP vuelve a ganar, duplicando en escaños al PSOE al que aventaja en 22032 votos
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/08/49.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
El PP continúa ganando y duplicando en escaños y votos al PSOE 
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/08/49.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 1 Escaño</span> 
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
El PSOE las gana, pero la suma de PP y CIUDADANOS le duplica en escaños. El PSOE gana por tan solo 1846 votos al PP y el PP gana a CIUDADANOS por 13886 votos
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/08/49.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #FF0000;">PSOE 1 Escaño</span> 
    <span style="color: #008000;">VOX 1 Escaño</span> 

</a>
<br><br>
El PP las gana y sumando a VOX duplican en escaños al PSOE.El PP gana al PSOE por tan solo 748 votos y el PSOE gana a VOX por 15711 votos
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/08/49/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
El PP aumenta su victoria y obtiene un segundo diputado a costa de arrebatar un escaño a VOX, duplicando en escaños al PSOE al que aventaja en 12595 votos
<br><br>
En conclusión,Zamora es una provincia claramente de derechas ya que la derecha, cuando la provincia empieza a otorgar escaños impares, empieza a doblar siempre a la izquierda y solo cuando la provincia repartía cuatro escaños se logró el empate en dos ocasiones 1982 y 1986, aunque solo en 1982,la primera legislatura de Felipe Gonzalez, el PSOE logró colocarse como primera fuerza 
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Zamora</title>
            
    <style>
    body {
        font-family: 'Segoe UI', sans-serif;
        background-color: #f4f4f8;
        margin: 0;
        padding: 20px;
    }
    h1 {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 30px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .boton-con-texto {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 140px;
    }
    .titulo-boton {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 8px;
        text-align: center;
    }
    .button {
        width: 140px;
        height: 90px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
    }
    
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
if (provincia === "Avila") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Ávila <span class="escaños">3 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/castilla-la-mancha/avila" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 3 Escaños</span>
    </a>
    <br><br>
    UCD gana las primeras elecciones más que cuadriplicando al PSOE en votos, con 56666 votos por encima, hecho realmente insólito
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/castilla-la-mancha/avila" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 3 Escaños</span> 
    </a>
    <br><br>
    UCD vuelve a ganar y triplica al PSOE en votos y en escaños
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/castilla-la-mancha/avila" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #ADD8E6;">AP-PDP 1 Escaño</span>
        <span style="color: #FF0000;">PSOE 1 Escaño</span> 
        <span style="color: #006400;">CDS 1 Escaño</span>
        
        
        
    </a>
    <br><br>
    La alianza de AP-PDP las gana y sumando a CDS duplican al PSOE en escaños. AP-PDP gana al PSOE por 3051 votos y el PSOE gana a CDS por 9142 votos
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/castilla-la-mancha/avila" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #006400;">CDS 1 Escaño</span>
        <span style="color: #ADD8E6;">AP-PDP-PL 1 Escaño</span>
        <span style="color: #FF0000;">PSOE 1 Escaño</span>
        
        
    </a>
    <br><br>
    CDS las gana y sumando a AP-PDP-PL duplican en escaños al PSOE. CDS gana a AP-PDP-PL por 12988 votos y AP-PDP-PL gana al PSOE por 5368 votos
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/castilla-la-mancha/avila" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #0000FF;">PP 1 Escaño</span>
        <span style="color: #006400;">CDS 1 Escaño</span>
        <span style="color: #FF0000;">PSOE 1 Escaño</span> 
        
    </a>
    <br><br>
    El PP se convierte en ganador y sumando a CDS duplican en escaños al PSOE. El PP gana a CDS por tan solo 1355 votos y CDS gana al PSOE por 4120 votos
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/castilla-la-mancha/avila" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 1 Escaño</span>
                    
                
                </a>
                <br><br>
                El PP sigue ganando y duplica en escaños al PSOE, al desaparecer y hundirse CDS, al que aventaja en 22518 votos
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/castilla-la-mancha/avila" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
El PP vuelve a ganar, duplicando en escaños al PSOE, al que aventaja en 32976 votos
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/castilla-la-mancha/avila" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE-PROGR 1 Escaño</span>
</a>
<br><br>
El PP repite como fuerza ganadora, doblando en escaños y en votos al PSOE-PROGR.
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/castilla-la-mancha/avila" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    
</a>
<br><br>
El PP continúa en la primera posición, duplicando en escaños al PSOE, al que aventaja en 28982 votos
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/castilla-la-mancha/avila" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 1 Escaño</span> 
    
    
</a>
<br><br>
El PP repite como ganador en la provincia y duplica en escaños al PSOE al que aventaja en 27025 votos
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/08/05.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
Con la mayoría absoluta de Rajoy, el PP duplica al PSOE en escaños y en votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/08/05.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
El PP vuelve a ganar, duplicando en escaños y en votos al PSOE
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/08/05.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
El PP continúa ganando y duplicando en escaños y votos al PSOE
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/08/05.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
El PP continúa como ganador en la provincia y sumando a CIUDADANOS duplican en escaños al PSOE. El PP gana al PSOE por 5586 votos y el PSOE gana a CIUDADANOS por 7290 votos
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/08/05.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #FF0000;">PSOE 1 Escaño</span> 
    <span style="color: #008000;">VOX 1 Escaño</span> 

</a>
<br><br>
El PP sigue ganando y sumando a VOX duplican en escaños al PSOE, mientras CIUDADANOS se hunde y cae a cuarta posición. El PP gana al PSOE por 8053 votos y el PSOE gana a VOX por 7161 votos 
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/08/05/#?int=widgetEP" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
El PP aumenta su victoria y obtiene un segundo diputado a costa de arrebatar un escaño a VOX, duplicando en escaños al PSOE. El PP gana al PSOE por 15541 votos
<br><br>
En conclusión,Ávila es una provincia fuertemente de derechas duplicando siempre al PSOE, que le cuesta superar el 30%, o incluso triplicandolo en los primeros años de democracia. La derecha no solo suma más siempre, sino que el PSOE nunca ha ganado en Ávila
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Ávila</title>
            
    <style>
    body {
        font-family: 'Segoe UI', sans-serif;
        background-color: #f4f4f8;
        margin: 0;
        padding: 20px;
    }
    h1 {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 30px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .boton-con-texto {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 140px;
    }
    .titulo-boton {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 8px;
        text-align: center;
    }
    .button {
        width: 140px;
        height: 90px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
    }
    
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
if (provincia === "Guadalajara") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Guadalajara <span class="escaños">3 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/castilla-y-leon/guadalajara" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 2 Escaños</span>
        <span style="color: #FF0000;">PSOE 1 Escaño</span> 
    </a>
    <br><br>
    UCD gana las primeras elecciones doblando al PSOE en votos y en escaños
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/castilla-y-leon/guadalajara" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 2 Escaños</span> 
        <span style="color: #FF0000;">PSOE 1 Escaño</span> 
    </a>
    <br><br>
    UCD vuelve a ganar y duplicar al PSOE en votos y en escaños
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/castilla-y-leon/guadalajara" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 1 Escaño</span>
        
    
    </a>
    <br><br>
    El PSOE las gana, duplicando en escaños a AP-PDP, pero con tan solo 464 votos por encima
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/castilla-y-leon/guadalajara" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #ADD8E6;">AP-PDP-PL 2 Escaños</span>
        <span style="color: #FF0000;">PSOE 1 Escaño</span>
        
        
    </a>
    <br><br>
    AP-PDP-PL las gana, duplicando en escaños al PSOE y sacandole una ventaja de 3319 votos
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/castilla-y-leon/guadalajara" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #0000FF;">PP 2 Escaños</span>
        <span style="color: #FF0000;">PSOE 1 Escaño</span> 
        
    </a>
    <br><br>
    El PP se convierte en ganador duplicando en escaños al PSOE, al que aventaja en 5408 votos
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/castilla-y-leon/guadalajara" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 1 Escaño</span>
                    
                
                </a>
                <br><br>
                El PP sigue ganando y duplica en escaños al PSOE, al que aventaja en 11745 votos
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/castilla-y-leon/guadalajara" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
El PP vuelve a ganar, duplicando en escaños al PSOE, al que aventaja en 17527 votos
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/castilla-y-leon/guadalajara" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE-PROGR 1 Escaño</span>
</a>
<br><br>
El PP repite como fuerza ganadora, doblando en escaños al PSOE-PROGR, al que aventaja en 18835 votos
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/castilla-y-leon/guadalajara" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    
</a>
<br><br>
El PP continúa en la primera posición, duplicando en escaños al PSOE, al que aventaja en 4163 votos
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/castilla-y-leon/guadalajara" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 1 Escaño</span> 
    
    
</a>
<br><br>
El PP repite como ganador en la provincia y duplica en escaños al PSOE, al que aventaja en 12930 votos
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/07/19.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
Con la mayoría absoluta de Rajoy, el PP duplica al PSOE en escaños, al que aventaja en 34773 votos 
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/07/19.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 1 Escaño</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
El PP vuelve a ganar y sumando a CIUDADANOS duplican en escaños al PSOE. El PP gana al PSOE por 16660 votos y el PSOE gana a CIUDADANOS por 6085 votos y CIUDADANOS le gana el tercer escaño a PODEMOS por 818 votos
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/07/19.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
El PP continúa ganando y duplicando en escaños y votos al PSOE, al caer CIUDADANOS a cuarta fuerza. 
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/07/19.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
El PSOE gana por primera vez las elecciones ante la fuerte división de la derecha, pero la suma de PP y CIUDADANOS le dobla en escaños. El PSOE gana al PP por 13822 votos, el PP gana a CIUDADANOS por 1826 votos y CIUDADANOS gana la tercera posición a VOX por 3295 votos 
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/07/19.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 1 Escaño</span> 
    <span style="color: #008000;">VOX 1 Escaño</span> 
    <span style="color: #0000FF;">PP 1 Escaño</span>

</a>
<br><br>
El PSOE sigue ganando, pero la suma de VOX y PP le duplica en escaños. El PSOE gana a VOX por 9484 votos y VOX gana al PP por tan solo 1240 votos
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/07/19/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 1 Escaño</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    <span style="color: #008000;">VOX 1 Escaño</span>
</a>
<br><br>
El PP las gana y sumando a VOX duplican en escaños al PSOE. El PP gana al PSOE por 4716 votos y el PSOE gana a VOX por 19353 votos
<br><br>
En conclusión,Guadalajara es una provincia fuertemente de derechas ya que la derecha siempre ha duplicado al PSOE, salvo en el año 1982 con la primera legislatura de Felipe González, aunque el PSOE, logró ganar por solo 464 votos. Además a pesar de la fortaleza del PP, es la única provincia de tres escaños en la que VOX mantiene representación de forma consecutiva,llegando a alcanzar la segunda posición el 10N de 2019
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Guadalajara</title>
            
    <style>
    body {
        font-family: 'Segoe UI', sans-serif;
        background-color: #f4f4f8;
        margin: 0;
        padding: 20px;
    }
    h1 {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 30px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .boton-con-texto {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 140px;
    }
    .titulo-boton {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 8px;
        text-align: center;
    }
    .button {
        width: 140px;
        height: 90px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
    }
    
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

if (provincia === "Albacete") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Albacete <span class="escaños">4 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/castilla-y-leon/albacete" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 2 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 
    </a>
    <br><br>
    UCD gana las primeras elecciones empatando en escaños con el PSOE con 8271 votos por encima
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/castilla-y-leon/albacete" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 2 Escaños</span> 
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 
    </a>
    <br><br>
    UCD vuelve a ganar y a empatar en escaños con el PSOE, con tan solo 418 votos por encima
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/castilla-y-leon/albacete" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 1 Escaño</span>
        
    
    </a>
    <br><br>
    El PSOE las gana, triplicando en escaños a AP-PDP, al que aventaja en 47662 votos
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/castilla-y-leon/albacete" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #FF0000;">PSOE 3 Escaños</span>
        <span style="color: #ADD8E6;">AP-PDP-PL 1 Escaño</span>
        
        
    </a>
    <br><br>
    El PSOE las vuelve a ganar, volviendo a triplicar en escaños a AP-PDP-PL, al que aventaja en 36745 votos
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/castilla-y-leon/albacete" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #0000FF;">PP 1 Escaño</span>
        
    </a>
    <br><br>
    El PSOE continúa como ganador triplicando en escaños al PP, al que aventaja en 37240 votos
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/castilla-y-leon/albacete" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 2 Escaños</span>
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
                    
                
                </a>
                <br><br>
                El PSOE sigue ganando y empata en escaños con el PP, al que aventaja en 12604 votos
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/castilla-y-leon/albacete" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
El PP las gana, empatando en escaños al PSOE, al que empieza a aventajar por tan solo 1823 votos 
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/castilla-y-leon/albacete" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE-PROGR 2 Escaños</span>
</a>
<br><br>
El PP repite como fuerza ganadora, empatando en escaños con PSOE-PROGR, al que aventaja en 22136 votos
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/castilla-y-leon/albacete" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    
</a>
<br><br>
El PP continúa en la primera posición, empatando en escaños al PSOE, pero con tan solo 1623 votos por encima
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/castilla-y-leon/albacete" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span> 
    
    
</a>
<br><br>
El PP repite como ganador en la provincia y vuelve a empatar en escaños al PSOE, al que aventaja por 3927 votos,
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/07/02.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
Con la mayoría absoluta de Rajoy, el PP triplica al PSOE en escaños, al que aventaja en 58014 votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/07/02.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
El PP vuelve a ganar y sumando a CIUDADANOS triplican en escaños al PSOE. El PP gana al PSOE por 20078 votos, el PSOE gana a CIUDADANOS por 31398 votos y CIUDADANOS gana la tercera posición por 1521 votos sobre PODEMOS
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/07/02.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
</a>
<br><br>
El PP continúa ganando empatando en escaños a la suma de PSOE y PODEMOS. El PP gana al PSOE por 30103 votos, el PSOE gana a PODEMOS por 26160 votos y PODEMOS, que en esta ocasión gana la tercera posición por 1418 sobre CIUDADANOS
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/07/02.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
El PSOE gana las elecciones ante la fuerte división de la derecha, empatando en escaños a la suma de PP y CIUDADANOS, que vuelve a entrar con un escaño ganando la tercera posición. El PSOE gana al PP por 23028 votos y el PP gana a CIUDADANOS por 8023 votos, mientras PODEMOS se hunde cayendo a quinta fuerza
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/07/02.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span>  
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #008000;">VOX 1 Escaño</span>

</a>
<br><br>
El PSOE sigue ganando, empatando en escaños a la suma de PP y VOX. El PSOE gana al PP por 11013 votos y el PP gana a VOX por 14529 votos
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/07/02/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    
</a>
<br><br>
El PP pasa de segunda a primera fuerza, tras arrebatar el escaño a VOX empatando en escaños con el PSOE. El PP gana al PSOE por 11977 votos
<br><br>
En conclusión, Albacete es una provincia, que ha tenido una evolución política que refleja tanto momentos de clara mayoría de la izquierda (PSOE) como de la derecha (PP). Aunque el PSOE dominó durante gran parte de los 80 y 90, a partir de 1996 el PP ha ido consolidándose como la fuerza predominante en la provincia, especialmente en las últimas décadas, con una clara victoria en 2011 y una posición de liderazgo en los años siguientes.

Sin embargo, en los últimos años, Albacete ha experimentado una fragmentación del voto, con el surgimiento de partidos como Ciudadanos, Podemos, y VOX, lo que ha hecho que el bipartidismo entre el PSOE y el PP se vea más dividido.

Por tanto, Albacete no se puede considerar de manera exclusiva de derechas ni de izquierdas, sino que es una provincia con una tendencia hacia la derecha en los últimos años, pero con un equilibrio en el que el PSOE sigue teniendo representación significativa, y donde la fragmentación política es más evidente.
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Albacete</title>
            
    <style>
    body {
        font-family: 'Segoe UI', sans-serif;
        background-color: #f4f4f8;
        margin: 0;
        padding: 20px;
    }
    h1 {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 30px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .boton-con-texto {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 140px;
    }
    .titulo-boton {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 8px;
        text-align: center;
    }
    .button {
        width: 140px;
        height: 90px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
    }
    
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
if (provincia === "Lleida") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Lleida <span class="escaños">4 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/catalunya/lleida" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF5733;">PDPC 2 Escaños</span>
        <span style="color: #FFA500;">UCD 1 Escaño</span>
        <span style="color: #FF0000;">PSC-PSOE 1 Escaño</span> 
    </a>
    <br><br>
    PDPC (Partido Democrático por Cataluña,marca independentista liderada por Jordi Puyol) gana las primeras elecciones duplicando en escaños a UCD y PSC, aunque a UCD le gana por tan solo 237 votos. UCD gana al PSC por 17382 votos
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/catalunya/lleida" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">CC-UCD 2 Escaños</span> 
        <span style="color: #FF0000;">PSC-PSOE 1 Escaño</span> 
        <span style="color: #40E0D0;">CIU 1 Escaño</span> 
    </a>
    <br><br>
    CC-UCD las gana empatando en escaños a la suma de PSC-PSOE y CIU. CC-UCD gana al PSC por 11603 votos y el PSC gana a CIU por 15538 votos
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/catalunya/lleida" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSC-PSOE 2 Escaños</span>
        <span style="color: #40E0D0;">CIU 1 Escaño</span> 
        <span style="color: #ADD8E6;">AP-PDP 1 Escaño</span>
        
    
    </a>
    <br><br>
    El PSC las gana y sumando a CIU triplican en escaños a AP-PDP. El PSC gana a CIU por 14633 votos y CIU gana a AP-PDP por 24356 votos
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/catalunya/lleida" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #40E0D0;">CIU 2 Escaños</span> 
        <span style="color: #FF0000;">PSC-PSOE 1 Escaño</span>
        <span style="color: #ADD8E6;">AP-PDP-PL 1 Escaño</span>
    </a>
    <br><br>
    CIU se convierte en ganador y sumando al PSC triplican en escaños a AP-PDP-PL. CIU gana al PSC por 19424 votos y el PSC gana a AP-PDP-PL por 27462 votos
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/catalunya/lleida" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #40E0D0;">CIU 2 Escaños</span> 
        <span style="color: #FF0000;">PSC-PSOE 2 Escaños</span>
        
    </a>
    <br><br>
    CIU continúa como ganador en la provincia, empatando en escaños con el PSOE, al que aventaja en 24098 votos
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/catalunya/lleida" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #40E0D0;">CIU 2 Escaños</span> 
                    <span style="color: #FF0000;">PSC-PSOE 1 Escaño</span>
                    <span style="color: #0000FF;">PP 1 Escaño</span> 
                    
                
                </a>
                <br><br>
                CIU sigue ganando y sumando al PSC triplican en escaños al PP. CIU gana al PSC por 25874 votos y el PSC gana al PP por 15474 votos 
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/catalunya/lleida" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #40E0D0;">CIU 2 Escaños</span> 
                    <span style="color: #FF0000;">PSC-PSOE 1 Escaño</span>
                    <span style="color: #0000FF;">PP 1 Escaño</span> 
</a>
<br><br>
CIU las vuelve a ganar y sumando al PSC triplican en escaños al PP. CIU gana al PSC por 14194 votos y el PSC gana al PP por 34223 votos
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/catalunya/lleida" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #40E0D0;">CIU 2 Escaños</span> 
                    <span style="color: #FF0000;">PSC-PSOE 1 Escaño</span>
                    <span style="color: #0000FF;">PP 1 Escaño</span> 
</a>
<br><br>
CIU repite como fuerza ganadora y sumando al PSC triplican en escaños al PP. CIU gana al PSC por 22757 votos y el PSC gana al PP por 13293 votos 
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/catalunya/lleida" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSC-PSOE 2 Escaños</span>
                    <span style="color: #40E0D0;">CIU 1 Escaño</span> 
                    <span style="color: #c99f00;">ERC 1 Escaño</span> 
    
</a>
<br><br>
El PSC se convierte en ganador en la provincia, empatando en escaños a la suma de CIU y ERC. El PSC gana a CIU por tan solo 236 votos y CIU gana a ERC por 18631 votos
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/catalunya/lleida" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #FF0000;">PSC-PSOE 2 Escaños</span>
                    <span style="color: #40E0D0;">CIU 1 Escaño</span>
                    <span style="color: #0000FF;">PP 1 Escaño</span> 
    
    
</a>
<br><br>
El PSC sigue ganando y sumando a CIU triplican en escaños al PP. El PSC gana a CIU por 18505 votos y CIU gana al PP por 28866 votos
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/09/25.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #40E0D0;">CIU 2 Escaños</span> 
                    <span style="color: #FF0000;">PSC-PSOE 1 Escaño</span>
                    <span style="color: #0000FF;">PP 1 Escaño</span> 
</a>
<br><br>
CIU las gana y sumando al PSC triplican en escaños al PP. CIU duplica al PSC y el PSOE gana al PP por tan solo 1756 votos.
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/09/25.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #40E0D0;">DL 1 Escaño</span>
                    <span style="color: #c99f00;">ERC CATSÍ 1 Escaño</span>
                    <span style="color: #800080;">PODEMOS 1 Escaño</span> 
                    <span style="color: #FF0000;">PSC-PSOE 1 Escaño</span>
                     
</a>
<br><br>
Reconfiguración de Lleida, donde DL, sucesor de CIU gana las elecciones empatando en escaños con PODEMOS,ERC CAT SÍ y PSC. DL gana a PODEMOS por 4003 votos,ERC CATS gana a PODEMOS por 13673 votos y PODEMOS gana al PSC por 5679 votos. El PSC gana el cuarto escaño por 2390 votos al PP, que cae a quinta por la aparición de CIUDADANOS, sexto
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/09/25.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #c99f00;">ERC CATSÍ 1 Escaño</span> 
    <span style="color: #40E0D0;">CDC 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #0000FF;">PP 1 Escaño</span> 

</a>
<br><br>
Lleida vuelve a reconfigurarse con ERC CATSÍ pasando de tercera a primera fuerza, CDC como sucesor de Dl, bajando de primera a segunda, PODEMOS cayendo tambien de segunda a tercera y el PP gana al PSC por tan solo 1940 votos. ERC CATSÍ gana a CDC por 4509 votos, CDC gana a PODEMOS por 5619 votos.
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/09/25.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #c99f00;">ERC SOBERANISTES 2 Escaños</span> 
                    <span style="color: #40E0D0;">JUNTS 1 Escaño</span>
                    <span style="color: #FF0000;">PSC-PSOE 1 Escaño</span>
</a>
<br><br>
ERC SOBERANISTES las vuelve a ganar duplicando en escaños a JUNTS, sucesor de CDC, y al PSC. ERC SOBERANISTES gana a JUNTS por 28789 votos y JUNTS gana al PSC por 9084 votos 
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/09/25.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #c99f00;">ERC SOBERANISTES 2 Escaños</span> 
                    <span style="color: #40E0D0;">JUNTS 1 Escaño</span>
                    <span style="color: #FF0000;">PSC-PSOE 1 Escaño</span>

</a>
<br><br>
ERC SOBERANISTES sigue ganando, duplicando en escaños a JUNTS y PSC. ERC SOBERANISTES gana a JUNTS por 18463 votos y JUNTS gana al PSC por 16790 votos
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/09/25/" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #FF0000;">PSC-PSOE 2 Escaños</span>
                    <span style="color: #c99f00;">ERC 1 Escaño</span>
                    <span style="color: #40E0D0;">JUNTS 1 Escaño</span>
    
</a>
<br><br>
El PSC las gana empatando en escaños a la suma de ERC y JUNTS. El PSC gana a ERC por 20083 votos y ERC gana a JUNTS por tan solo 1103 votos 
<br><br>
En conclusión, Lleida es una provincia historícamente independentista, la segunda provincia catalana más independentista, solo por detras de Girona, con el dominio de la marca de Jordi Puyol y de CIU, en los primeros años y con ERC en los años más recientes. Sin embargo, tras la caída histórica del independentismo en las últimas elecciones, el PSC, partido con fuerte influencia en Cataluña ha comenzado a liderar. Vemos tambien espectaculares resultados de PODEMOS en los años 2015 y 2016 con la crisis del bipartidismo y al PP sufriendo por lograr el cuarto escaño, que solo ha logrado 6 veces. El independentismo de ERC y JUNTS a pesar del retroceso, parece aún así, garantizarse un escaño para cada uno en la provincia
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
        font-family: 'Segoe UI', sans-serif;
        background-color: #f4f4f8;
        margin: 0;
        padding: 20px;
    }
    h1 {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 30px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .boton-con-texto {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 140px;
    }
    .titulo-boton {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 8px;
        text-align: center;
    }
    .button {
        width: 140px;
        height: 90px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
    }
    
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
if (provincia === "La Rioja") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">La Rioja <span class="escaños">4 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/la-rioja" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 2 Escaños</span>
        <span style="color: #FF0000;">PSOE 1 Escaño</span> 
        <span style="color: #ADD8E6;">AP  1 Escaño</span>
    </a>
    <br><br>
    UCD gana las primeras elecciones y sumando a AP triplican en escaños al PSOE. UCD gana al PSOE por 20731 votos y el PSOE gana a AP por 16261 votos
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/la-rioja" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 3 Escaños</span> 
        <span style="color: #FF0000;">PSOE 1 Escaño</span> 
    </a>
    <br><br>
    UCD continua como ganador triplicando en escaños al PSOE ante la ausencia de AP. UCD gana al PSOE por 25490 votos
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/la-rioja" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 2 Escaños</span>
        
    
    </a>
    <br><br>
    El PSOE las gana empatando en escaños con AP-PDP, aunque con tan solo una ventaja de 3003 votos por encima
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/la-rioja" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #FF0000;">PSOE 2 Escaños</span>
        <span style="color: #ADD8E6;">AP-PDP-PL 2 Escaño</span>
        
        
    </a>
    <br><br>
    El PSOE las vuelve a ganar y a empatar en escaños con AP-PDP-PL, al que en esta ocasión supera por 6974 votos
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/la-rioja" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #0000FF;">PP 2 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 
        
    </a>
    <br><br>
    El PSOE vuelve a la primera posición, empatando en escaños con el PSOE y con tan solo una ventaja de 2059 votos
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/la-rioja" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 2 Escaños</span>
                    
                
                </a>
                <br><br>
                El PP sigue ganando y empatando en escaños con el PSOE, al que aventaja en 14755 votos
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/la-rioja" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
El PP las gana, empatando en escaños al PSOE, al que aventaja en 22758 votos
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/la-rioja" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE-PROGR 1 Escaño</span>
</a>
<br><br>
El PP repite como fuerza ganadora, triplicando en escaños con PSOE-PROGR, al que aventaja en 32639 votos 
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/la-rioja" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    
</a>
<br><br>
El PP continúa en la primera posición, empatando en escaños al PSOE, al que aventaja en 11051 votos
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/la-rioja" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span> 
    
    
</a>
<br><br>
El PP repite como ganador en la provincia y vuelve a empatar en escaños al PSOE, al que aventaja en 11072 votos
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/16/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
Con la mayoría absoluta de Rajoy, el PP triplica al PSOE en escaños, al que aventaja en 41058 votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/16/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
</a>
<br><br>
El PP vuelve a ganar empatando en escaños a la suma de PSOE y PODEMOS. El PP gana al PSOE por 25861 votos, el PSOE gana a PODEMOS por 13934 votos, que gana la tercera posición por 1222 votos sobre CIUDADANOS
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/16/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
</a>
<br><br>
El PP continúa ganando y empatando en escaños a la suma de PSOE y PODEMOS. El PP gana al PSOE por 31489 votos y el PSOE gana a PODEMOS por 13341 votos
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/16/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
El PSOE gana las elecciones ante la fuerte división de la derecha, empatando en escaños a la suma de PP y CIUDADANOS. El PSOE gana al PP por 9313 votos y el PP gana a CIUDADANOS por 15684 votos
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/16/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span>  
    <span style="color: #0000FF;">PP 2 Escaños</span>

</a>
<br><br>
El PSOE sigue ganando, empatando en escaños al PP, al que tan solo le saca una ventaja de 1035 votos
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/16/26/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    
</a>
<br><br>
El PP pasa de segunda a primera fuerza, empatando en escaños al PSOE, al que aventaja en 17393 votos
<br><br>
En conclusión, La Rioja es una provincia de derechas, en la mayoría de los casos, el PP ha sido la fuerza más votada, con periodos en los que ha triplicado en escaños al PSOE, y en otros ha ganado aunque empatando en escaños.El PP ha gobernado siempre, tambien en la comunidad autónoma excepto en la legislatura XIV, incluso con mayorías absolutas
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
        font-family: 'Segoe UI', sans-serif;
        background-color: #f4f4f8;
        margin: 0;
        padding: 20px;
    }
    h1 {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 30px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .boton-con-texto {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 140px;
    }
    .titulo-boton {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 8px;
        text-align: center;
    }
    .button {
        width: 140px;
        height: 90px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
    }
    
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
if (provincia === "Lugo") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Lugo <span class="escaños">5 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/galicia/lugo" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 4 Escaños</span>
        <span style="color: #ADD8E6;">AP  1 Escaño</span>
    </a>
    <br><br>
    UCD gana las primeras elecciones cuadriplicando en escaños a AP, La derecha se lleva 5 escaños, la izquierda no aparece, algo insólito. UCD duplica en votos a AP
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/galicia/lugo" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 3 Escaños</span> 
        <span style="color: #006400;">CD 1 Escaño</span>
        <span style="color: #FF0000;">PSG-PSOE 1 Escaño</span> 

    </a>
    <br><br>
    UCD continua como ganador y sumando a CD cuadruplican en escaños al PSG. UCD duplica a CD en votos y CD gana al PSG por 2811 votos
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/galicia/lugo" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #ADD8E6;">AP-PDP 3 Escaños</span>
        <span style="color: #FF0000;">PSG-PSOE 1 Escaño</span> 
        <span style="color: #FFA500;">UCD 1 Escaño</span>
        
    
    </a>
    <br><br>
    AP-PDP las gana y sumando a UCD cuadruplican en escaños al PSG. AP-PDP gana al PSG por 35199 votos y el PSG gana a UCD por 18696 votos
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/galicia/lugo" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #ADD8E6;">AP-PDP-PL-C 3 Escaños</span>
        <span style="color: #FF0000;">PSG-PSOE 2 Escaños</span>
        
        
    </a>
    <br><br>
    AP-PDP-PL-C las vuelve a ganar con un escaño de ventaja sobre el PSG al que aventaja en 32302 votos
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/galicia/lugo" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #0000FF;">PP 3 Escaños</span>
        <span style="color: #FF0000;">PSG-PSOE 2 Escaños</span> 
        
    </a>
    <br><br>
    El PP continua en la primera posición con un escaño de ventaja sobre el PSG, al que aventaja en 28970 votos
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/galicia/lugo" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 3 Escaños</span> 
                    <span style="color: #FF0000;">PSG-PSOE 2 Escaños</span>
                    
                
                </a>
                <br><br>
                El PP sigue ganando y sacando un escaño de ventaja al PSG, al que aventaja en 47385 votos
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 4 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/galicia/lugo" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSG-PSOE 1 Escaño</span>
</a>
<br><br>
El PP las gana, triplicando en escaños al PSG, al que aventaja en 50831 votos
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/galicia/lugo" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSG-PSOE 1 Escaño</span>
</a>
<br><br>
El PP repite como fuerza ganadora, triplicando en escaños al PSG, y doblandole en votos
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/galicia/lugo" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSG-PSOE 2 Escaños</span>
    
</a>
<br><br>
El PP continúa en la primera posición, empatando en escaños al PSG, al que aventaja en 31278 votos
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/galicia/lugo" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSG-PSOE 2 Escaños</span> 
    
    
</a>
<br><br>
El PP repite como ganador en la provincia y vuelve a empatar en escaños al PSG, al que aventaja en 7619 votos
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/11/27.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSG-PSOE 1 Escaño</span>
</a>
<br><br>
Con la mayoría absoluta de Rajoy, el PP triplica al PSG en escaños, al que aventaja en 60065 votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/11/27.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSG-PSOE 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
</a>
<br><br>
El PP vuelve a ganar empatando en escaños a la suma de PSG y PODEMOS. El PP gana al PSG por 37397 votos y el PSG gana a PODEMOS por 9540 votos
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/11/27.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSG-PSOE 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
</a>
<br><br>
El PP continúa ganando y empatando en escaños a la suma de PSG y PODEMOS. El PP gana al PSG por 45297 votos y el PSG gana a PODEMOS por 13030 votos
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/11/27.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSG-PSOE 2 Escaños</span>
    
</a>
<br><br>
El PP gana las elecciones, empatando en escaños con el PSG, aunque solo con 739 votos sobre el PSG
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/11/27.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSG-PSOE 2 Escaños</span>  

</a>
<br><br>
El PP sigue ganando, empatando en escaños al PSG, al que aventaja ya por 10993 votos 
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/11/27/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSG-PSOE 1 Escaño</span>
    
</a>
<br><br>
El PP aumenta su fuerza y triplica en escaños al PSG, al que aventaja en 39606 votos
<br><br>
En conclusión, Lugo es una provincia claramente de derechas con la izquierda siendo triplicada, cuadruplicada o incluso quintuplicada en 1977. El PSOE jamás ha ganado las elecciones en Lugo, solo logrando empatar en escaños con el PP en aquellas etapas de mayor crisis para el PP
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Lugo</title>
            
    <style>
    body {
        font-family: 'Segoe UI', sans-serif;
        background-color: #f4f4f8;
        margin: 0;
        padding: 20px;
    }
    h1 {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 30px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .boton-con-texto {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 140px;
    }
    .titulo-boton {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 8px;
        text-align: center;
    }
    .button {
        width: 140px;
        height: 90px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
    }
    
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
if (provincia === "Orense") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Orense <span class="escaños">5 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/galicia/ourense" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 4 Escaños</span>
        <span style="color: #ADD8E6;">AP  1 Escaño</span>
    </a>
    <br><br>
    UCD gana las primeras elecciones cuadriplicando en escaños a AP, La derecha se lleva 5 escaños, la izquierda no aparece, algo insólito. UCD cuadruplica en votos a AP
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/galicia/ourense" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 3 Escaños</span> 
        <span style="color: #006400;">CD 1 Escaño</span>
        <span style="color: #FF0000;">PSG-PSOE 1 Escaño</span> 

    </a>
    <br><br>
    UCD continua como ganador y sumando a CD cuadruplican en escaños al PSG. UCD duplica a CD en votos y CD gana al PSG por 3609 votos
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/galicia/ourense" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #ADD8E6;">AP-PDP 2 Escaños</span>
        <span style="color: #FFA500;">UCD 2 Escaños</span>
        <span style="color: #FF0000;">PSG-PSOE 1 Escaño</span> 
        
    
    </a>
    <br><br>
    AP-PDP las gana y sumando a UCD cuadriplican en escaños al PSG. AP-PDP gana a UCD por 11519 votos y UCD gana al PSG por tan solo 1663 votos
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/galicia/ourense" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #ADD8E6;">AP-PDP-PL-C 2 Escaños</span>
        <span style="color: #FF0000;">PSG-PSOE 2 Escaños</span>
        <span style="color: #FFA500;">CG 1 Escaño</span>
        
        
    </a>
    <br><br>
    AP-PDP-PL-C las vuelve y sumando a CG (Coalición Gallega, perteneciente a UCD) sacan un escaño de ventaja al PSG. AP-PDP-PL-C gana al PSG por 8252 votos y el PSG duplica a CG en votos
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/galicia/ourense" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #0000FF;">PP 3 Escaños</span>
        <span style="color: #FF0000;">PSG-PSOE 2 Escaños</span> 
        
    </a>
    <br><br>
    El PP se coloca en la primera posición con un escaño de ventaja sobre el PSG, al que aventaja en 10115 votos
    <br><br>
    <h1 style="color: black;"><span class="escaños">Pasa a 4 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/galicia/ourense" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
                    <span style="color: #FF0000;">PSG-PSOE 2 Escaños</span>
                    
                
                </a>
                <br><br>
                El PP sigue ganando y empata en escaños con el PSG, al que aventaja en 21436 votos
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/galicia/ourense" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSG-PSOE 2 Escaños</span>
</a>
<br><br>
El PP las gana, empatando en escaños con el PSG, al que aventaja en 28852 votos
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/galicia/ourense" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSG-PSOE 1 Escaño</span>
</a>
<br><br>
El PP repite como fuerza ganadora, triplicando en escaños al PSG y duplicandolo en votos
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/galicia/ourense" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSG-PSOE 1 Escaño</span>
    
</a>
<br><br>
El PP continúa en la primera posición, triplicando en escaños al PSG, al que aventaja en 57995 votos
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/galicia/ourense" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSG-PSOE 2 Escaños</span> 
    
    
</a>
<br><br>
El PP repite como ganador en la provincia y empata en escaños con el PSG, al que aventaja en 20118 votos
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/11/32.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSG-PSOE 1 Escaño</span>
</a>
<br><br>
Con la mayoría absoluta de Rajoy, el PP triplica al PSG en escaños y lo dobla en votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/11/32.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSG-PSOE 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
</a>
<br><br>
El PP vuelve a ganar empatando en escaños a la suma de PSG y PODEMOS. El PP duplica al PSG en votos y el PSG gana a PODEMOS por 10250 votos
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/11/32.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSG-PSOE 1 Escaño</span>
</a>
<br><br>
El PP continúa ganando y triplica en escaños al PSG y lo dobla en votos, tras la caída de PODEMOS. 
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/11/32.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSG-PSOE 2 Escaños</span>
    
</a>
<br><br>
El PP gana las elecciones, empatando en escaños con el PSG, aunque solo con 3464 votos sobre el PSG
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/11/32.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSG-PSOE 2 Escaños</span>  

</a>
<br><br>
El PP sigue ganando, empatando en escaños al PSG, al que aventaja ya por 10646 votos 
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/11/32/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSG-PSOE 1 Escaño</span>
    
</a>
<br><br>
El PP aumenta su fuerza y triplica en escaños al PSG, al que aventaja en 37147 votos
<br><br>
En conclusión, Orense es una provincia claramente de derechas con la izquierda siendo triplicada, cuadruplicada o incluso quintuplicada en 1977. El PSOE jamás ha ganado las elecciones en Lugo, solo logrando empatar en escaños con el PP en unas pocas ocasiones
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Orense</title>
            
    <style>
    body {
        font-family: 'Segoe UI', sans-serif;
        background-color: #f4f4f8;
        margin: 0;
        padding: 20px;
    }
    h1 {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 30px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .boton-con-texto {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 140px;
    }
    .titulo-boton {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 8px;
        text-align: center;
    }
    .button {
        width: 140px;
        height: 90px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
    }
    
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
if (provincia === "Cáceres") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Cáceres <span class="escaños">5 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/extremadura/caceres" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 4 Escaños</span>
        <span style="color: #FF0000;">PSOE 1 Escaño</span> 
        
    </a>
    <br><br>
    UCD gana las primeras elecciones cuadriplicando en escaños al PSOE y duplicandolo en votos
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/extremadura/caceres" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 3 Escaños</span> 
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 

    </a>
    <br><br>
    UCD continua como ganador sacando un escaño de ventaja al PSOE al que aventaja en 18922 votos
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/extremadura/caceres" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 4 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 1 Escaño</span>   
    
    </a>
    <br><br>
    El PSOE las gana, cuadriplicando en escaños a AP-PDP y duplicandolo en votos
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/extremadura/caceres" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #FF0000;">PSOE 3 Escaños</span>
        <span style="color: #ADD8E6;">AP-PDP-PL 2 Escaños</span>
        
        
    </a>
    <br><br>
    El PSOE las vuelve a ganar, sacando un escaño de ventaja a AP-PDP-PL, al que aventaja en 61570 votos
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/extremadura/caceres" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #0000FF;">PP 2 Escaños</span>
        
    </a>
    <br><br>
    El PSOE continua en la primera posición con un escaño de ventaja sobre el PP, al que aventaja en 60966 votos
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/extremadura/caceres" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 3 Escaños</span>
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
                    
                
                </a>
                <br><br>
                El PSOE sigue ganando y sacando un escaño de ventaja al PP al que aventaja en 36225 votos
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/extremadura/caceres" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
</a>
<br><br>
El PSOE sigue ganando, sacando un escaño de ventaja al PP, al que aventaja en 16172 votos
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/extremadura/caceres" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
El PP se coloca como primera fuerza, sacando un escaño de ventaja al PSOE, al que aventaja en 8142 votos
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 4 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/extremadura/caceres" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    
</a>
<br><br>
El PSOE vuelve a la primera posición empatando en escaños con el PP, al que aventaja en 19027 votos
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/extremadura/caceres" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    
    
</a>
<br><br>
El PSOE repite como ganador en la provincia y empata en escaños con el PP, al que aventaja en 28184 votos
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/10/10.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
El PP se coloca ganador y empata en escaños con el PSOE, al que aventaja en 39347 votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/10/10.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
El PP vuelve a ganar, empatando en escaños con el PSOE, al que solo aventaja en 3197 votos 
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/10/10.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
El PP continúa ganando y empatando en escaños con el PSOE, esta vez con una ventaja mayor, con 16665 votos por encima del PSOE 
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/10/10.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    
</a>
<br><br>
El PSOE gana las elecciones empatando en escaños a la suma de PP y CIUDADANOS. El PSOE gana al PP por 35610 votos y el PP gana a CIUDADANOS por 14774 votos
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/10/10.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #008000;">VOX 1 Escaño</span> 


</a>
<br><br>
El PSOE sigue ganando empatando en escaños a la suma de PP y VOX. El PSOE gana al PP por 23608 votos y el PP gana a VOX por 25720 votos, mientras CIUDADANOS se hunde y pasa a quinta fuerza 
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/10/10/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    
</a>
<br><br>
El PSOE las vuelve a ganar, empatando en escaños con el PP, aunque solo por 2059 por encima. El PP arrebata el escaño a VOX, lo que le permite rozar la victoria.
<br><br>
En conclusión, Cáceres es una provincia claramente de izquierdas con una amplia mayoría de victorias del PSOE, ya que la derecha solo mantuvo ventaja en las dos primeras elecciones democráticas
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
        font-family: 'Segoe UI', sans-serif;
        background-color: #f4f4f8;
        margin: 0;
        padding: 20px;
    }
    h1 {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 30px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .boton-con-texto {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 140px;
    }
    .titulo-boton {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 8px;
        text-align: center;
    }
    .button {
        width: 140px;
        height: 90px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
    }
    
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

if (provincia === "León") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">León <span class="escaños">6 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/castilla-la-mancha/leon" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 4 Escaños</span>
        <span style="color: #FF0000;">PSOE 1 Escaño</span>
        <span style="color: #ADD8E6;">AP 1 Escaño</span>
        
    </a>
    <br><br>
    UCD gana las primeras elecciones y sumando a AP quintuplican en escaños al PSOE. UCD dobla en votos al PSOE y el PSOE gana a AP por 31481 votos
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/castilla-la-mancha/leon" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 4 Escaños</span> 
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 

    </a>
    <br><br>
    UCD continua como ganador duplicando en escaños al PSOE, al que aventaja en 57552 votos
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/castilla-la-mancha/leon" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 2 Escaños</span>
        <span style="color: #FFA500;">UCD 1 Escaño</span>  
    
    </a>
    <br><br>
    El PSOE las gana empatando en escaños a la suma de AP-PDP y UCD. El PSOE gana a AP-PDP por 38700 votos y AP-PDP dobla a UCD en votos
    <br><br>
    <h1 style="color: black;"><span class="escaños">Pasa a 5 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/castilla-la-mancha/leon" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #FF0000;">PSOE 3 Escaños</span>
        <span style="color: #ADD8E6;">AP-PDP-PL 2 Escaños</span>
        
        
    </a>
    <br><br>
    El PSOE las vuelve a ganar, sacando un escaño de ventaja a AP-PDP-PL, al que aventaja en 31630 votos
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/castilla-la-mancha/leon" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #0000FF;">PP 2 Escaños</span>
        
    </a>
    <br><br>
    El PSOE continua en la primera posición con un escaño de ventaja sobre el PP. El PSOE gana al PP por 4254 votos
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/castilla-la-mancha/leon" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 3 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 2 Escaños</span>
                    
                
                </a>
                <br><br>
                El PP gana y saca un escaño de ventaja al PSOE al que aventaja en 12333 votos
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/castilla-la-mancha/leon" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
El PP sigue ganando, sacando un escaño de ventaja al PSOE, al que aventaja en 36318 votos
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/castilla-la-mancha/leon" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE-PROGR 2 Escaños</span>
</a>
<br><br>
El PP se coloca como primera fuerza, sacando un escaño de ventaja al PSOE, al que aventaja en 52464 votos
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/castilla-la-mancha/leon" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    
</a>
<br><br>
El PSOE vuelve a la primera posición sacando un escaño de ventaja al PP con 6098 votos de ventaja
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/castilla-la-mancha/leon" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    
    
</a>
<br><br>
El PSOE repite como ganador en la provincia y sacando un escaño de ventaja al PP, esta vez con una mayor ventaja, de 22453 votos por encima
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/08/24.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
El PP se coloca ganador y saca un escaño de ventaja al PSOE al que aventaja en 52462 votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/08/24.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>

</a>
<br><br>
El PP vuelve a ganar y sumando a CIUDADANOS sacan un escaño de ventaja a la suma de PSOE y PODEMOS. El PP gana al PSOE por 29773 votos, el PSOE gana a PODEMOS por 22717 votos y PODEMOS gana a CIUDADANOS por 13297 votos
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 4 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/08/24.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
</a>
<br><br>
El PP continúa ganando y empata en escaños a la suma de PSOE y PODEMOS. El PP gana al PSOE por 38757 votos, el PSOE gana a PODEMOS por 24281 votos y CIUDADANOS pierde representación al pasar la provincia a contar con un diputado menos
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/08/24.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    
</a>
<br><br>
El PSOE gana las elecciones empatando en escaños a la suma de PP y CIUDADANOS, que vuelve a entrar con un escaño. El PSOE gana al PP por 26696 votos y el PP gana a CIUDADANOS por 17526 votos
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/08/24.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #008000;">VOX 1 Escaño</span> 


</a>
<br><br>
El PSOE sigue ganando, empatando en escaños a la suma de PP y VOX, que sustituye a CIUDADANOS, al convertirse en tercera fuerza, mientras CIUDADANOS se hunde y pasa a quinta fuerza. El PSOE gana al PP por 13224 votos y el PP gana a VOX por 33788 votos
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/08/24/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    
</a>
<br><br>
El PP las gana, empatando en escaños con el PSOE. El PP arrebata el escaño a VOX, lo que le permite lograr la victoria y gana al PSOE por 9027 votos
<br><br>
En conclusión, León es una provincia que no se podría clasificar en la izquierda ni en la derecha, ya que ha experimentando múltiples alternancias entre izquierda y derecha con victorias de ambos partidos en diferentes periodos. El electorado es muy competitivo y está muy dividido. A pesar del perfil fluctuante de la provincia, es cierto que autonómicamente ha despertado un sentimiento leonesista más de izquierdas y que en las últimas elecciones generales la ventaja de la suma de la derecha sobre la izquierda se produce por muy poco
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>León</title>
            
    <style>
    body {
        font-family: 'Segoe UI', sans-serif;
        background-color: #f4f4f8;
        margin: 0;
        padding: 20px;
    }
    h1 {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 30px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .boton-con-texto {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 140px;
    }
    .titulo-boton {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 8px;
        text-align: center;
    }
    .button {
        width: 140px;
        height: 90px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
    }
    
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
if (provincia === "Álava") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Álava <span class="escaños">4 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/pais-vasco/alava" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 2 Escaños</span>
        <span style="color: #FF0000;">PSE-PSOE 1 Escaño</span>
        <span style="color: #298242;">PNV 1 Escaño</span>
        
    </a>
    <br><br>
    UCD gana las primeras elecciones, duplicando en escaños al PSE y PNV. UCD gana por 4094 votos al PSE y el PSE gana por 12536 votos al PNV
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/pais-vasco/alava" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 2 Escaños</span>
        <span style="color: #298242;">PNV 1 Escaño</span>
        <span style="color: #FF0000;">PSE-PSOE 1 Escaño</span>

    </a>
    <br><br>
    UCD continúa como ganador, empatando en escaños a la suma de PNV y PSE. El PNV asciende a segunda fuerza y el PSE cae a tercera. UCD gana a PNV por 2903 votos, y PNV queda por delante de PSE por 1831 votos
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/pais-vasco/alava" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSE-PSOE 2 Escaños</span> 
        <span style="color: #298242;">PNV 1 Escaño</span>
        <span style="color: #ADD8E6;">AP-PDP-PL 1 Escaño</span>
         
    
    </a>
    <br><br>
    El PSE las gana y sumando a PNV, triplican en escaños a AP-PDP-PL. El PSE gana al PNV por 19571 votos y el PNV gana a AP-PDP-PL por 4129 votos 
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/pais-vasco/alava" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #FF0000;">PSE-PSOE 2 Escaños</span> 
        <span style="color: #298242;">PNV 1 Escaño</span>
        <span style="color: #ADD8E6;">AP-PDP-PL 1 Escaño</span>
        
        
    </a>
    <br><br>
    El PSE las vuelve a ganar y sumando al PNV triplican en escaños a AP-PDP-PL. El PSE dobla al PNV en votos y el PNV gana a AP-PDP-PL por 4430 votos
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/pais-vasco/alava" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSE-PSOE 2 Escaños</span> 
        <span style="color: #298242;">PNV 1 Escaño</span>
        <span style="color: #0000FF;">PP 1 Escaño</span>
        
    </a>
    <br><br>
    El PSE continua en la primera posición y sumando al PNV triplican en escaños al PP. El PSE gana al PNV por 12476 votos y el PNV gana al PP por 3820 votos
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/pais-vasco/alava" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSE-PSOE 2 Escaños</span> 
                    <span style="color: #0000FF;">PP 1 Escaño</span>
        <span style="color: #298242;">PNV 1 Escaño</span>

                    
                
                </a>
                <br><br>
                El PSE continúa como ganador y sumando al PNV triplican en escaños al PP. El PP asciende a segunda fuerza, mientras el PNV cae a tercera. El PSE gana al PP por 10208 votos y el PP gana al PNV por 4331 votos
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/pais-vasco/alava" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #0000FF;">PP 2 Escaños</span>
                    <span style="color: #FF0000;">PSE-PSOE 1 Escaño</span>
        <span style="color: #298242;">PNV 1 Escaño</span>
</a>
<br><br>
El PP las gana, empatando en escaños a la suma de PSE y PNV. La ventaja del PP sobre el PSE es de 3170 votos y el PSE gana al PNV por 8800 votos
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/pais-vasco/alava" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span>
                    <span style="color: #FF0000;">PSE-PSOE 1 Escaño</span>
        <span style="color: #298242;">PNV 1 Escaño</span>
</a>
<br><br>
El PP sigue como primera fuerza, empatando en escaños a la suma de PSE y PNV. La ventaja del PP es mayor en esta ocasión sobre el PSE, de 25085 votos y el PSE gana al PNV por 6027 votos
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/pais-vasco/alava" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSE-PSOE 2 Escaños</span>
                    <span style="color: #0000FF;">PP 1 Escaño</span>
        <span style="color: #298242;">PNV 1 Escaño</span>
    
</a>
<br><br>
El PSE vuelve a la primera posición y sumando al PNV triplican en escaños al PP.El PSE gana al PP por 7145 votos y el PP saca solo 1902 votos sobre PNV
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/pais-vasco/alava" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSE-PSOE 2 Escaños</span>
                    <span style="color: #0000FF;">PP 1 Escaño</span>
        <span style="color: #298242;">PNV 1 Escaño</span>
    
    
</a>
<br><br>
El PSE repite como ganador en la provincia y sumando al PNV sacan triplican en escaños al PP, el PSOE queda 22453 votos por encima del PP y el PP gana al PNV por 13293 votos
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/14/01.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 1 Escaño</span>
                    <span style="color: #FF0000;">PSE-PSOE 1 Escaño</span>
                    <span style="color: #01b59c;">AMAIUR 1 Escaño</span>
        <span style="color: #298242;">PNV 1 Escaño</span>
        
</a>
<br><br>
Con la mayoría absoluta de Rajoy, el PP gana las elecciones empatando en escaños con el PSE, AMAIUR y PNV. El PP saca 6336 votos sobre el PSE. El PSE saca 7259 votos sobre AMAIUR y AMAIUR saca 508 votos sobre PNV
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/14/01.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #0000FF;">PP 1 Escaño</span>
        <span style="color: #298242;">PNV 1 Escaño</span>
        <span style="color: #FF0000;">PSE-PSOE 1 Escaño</span>

</a>
<br><br>
PODEMOS las gana empatando en escaños con PP, PNV y PSE. PODEMOS saca 14656 votos sobre el PP, el PP saca 5312 votos sobre el PNV, el PNV saca 3004 votos sobre el PSE y el PSE gana la cuarta posición sobre EHBILDU por 4119 votos. El retroceso de EHBILDU, heredero de AMAIUR y que quedó legalizado al final del 2011 se debe al éxito de PODEMOS, que les arrebata su espacio electoral
<br><br>
2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/14/01.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #0000FF;">PP 1 Escaño</span>
        <span style="color: #298242;">PNV 1 Escaño</span>
        <span style="color: #FF0000;">PSE-PSOE 1 Escaño</span>
</a>
<br><br>
PODEMOS continúa ganando y emapata en escaños con PP, PNV y PSE. PODEMOS saca 17440 votos sobre el PP, el PP saca 7491 votos sobre PNV y el PNV saca solo 318 votos sobre el PSE, mientras EHBILDU continúa en descenso
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/14/01.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #298242;">PNV 1 Escaño</span>
        <span style="color: #FF0000;">PSE-PSOE 1 Escaño</span>
        <span style="color: #800080;">PODEMOS 1 Escaño</span>
        <span style="color: #01b59c;">EHBILDU 1 Escaño</span>
    
</a>
<br><br>
Reconfiguración total de Álava. El PNV pasa a ser primera fuerza con 604 votos sobre el PSE, el PSE saca 8249 votos sobre PODEMOS, que cae a tercera fuerza y que saca 6659 votos sobre EHBILDU, que entra beneficiando del retroceso de PODEMOS, y además saca solo 383 votos sobre el PP, que se queda a las puertas de entrar ante la división de la derecha en tres marcas
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/14/01.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #298242;">PNV 1 Escaño</span>
        <span style="color: #FF0000;">PSE-PSOE 1 Escaño</span>
        <span style="color: #800080;">PODEMOS-IU 1 Escaño</span>
        <span style="color: #01b59c;">EHBILDU 1 Escaño</span>


</a>
<br><br>
El PNV sigue ganando, empatando en escaños con PSE, PODEMOS-IU  y EHBILDU. El PNV saca 2774 votos sobre el PSE, el PSE saca 9302 votos sobre PODEMOS-IU, PODEMOS-IU saca 733 votos sobre EHBILDU y EHBILDU saca 1947 sobre el PP, que de nuevo vuelve a rozar el escaño y la cuarta posición
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/14/01/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSE-PSOE 1 Escaño</span>
        <span style="color: #01b59c;">EHBILDU 1 Escaño</span>
        <span style="color: #0000FF;">PP 1 Escaño</span>
        <span style="color: #298242;">PNV 1 Escaño</span>
    
</a>
<br><br>
Reconfiguración total de Álava, en las que el PSE gana, empatando en escaños con EHBILDU, PP y PNV. El PSE saca 13788 votos sobre EHBILDU, que se ve enormemente beneficiado tras el fuerte retroceso de SUMAR, EHBILDU saca solo 2775 votos sobre el PP, el PP saca 2137 votos sobre el PNV. El PP vuelve a tener representación, mientras el PNV, que ganó las elecciones previas pasa a cuarta fuerza 
<br><br>
En conclusión, Álava es una provincia de izquierdas, el PNV y el PSOE han sido los únicos partidos, que han mantenido representación a lo largo de toda la historia, el PP se ha quedado fuera únicamente en las dos elecciones del año 2019 ante la división de la derecha en tres partidos, porque se quedaba muy cerca de entrar.Esta es la provincia vasca donde mejor rinde el PP. En el caso de la izquierda abertzale, AMAIUR saca 1 escaño en el 2011 antes de pasar a ser EHBILDU, EHBILDU desaparece con su competencia con el PODEMOS del 15M, pero va recuperando representación poco a poco a medida que el espacio de PODEMOS va retrocediendo
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Álava</title>
            
    <style>
    body {
        font-family: 'Segoe UI', sans-serif;
        background-color: #f4f4f8;
        margin: 0;
        padding: 20px;
    }
    h1 {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 30px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .boton-con-texto {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 140px;
    }
    .titulo-boton {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 8px;
        text-align: center;
    }
    .button {
        width: 140px;
        height: 90px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
    }
    
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
if (provincia === "Burgos") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Burgos <span class="escaños">4 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/castilla-la-mancha/burgos" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 3 Escaños</span>
        <span style="color: #FF0000;">PSOE 1 Escaño</span> 
        
    </a>
    <br><br>
    UCD gana las primeras elecciones, triplicando en escaños al PSOE, doblandole en votos y con 44975 votos sobre el PSOE 
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/castilla-la-mancha/burgos" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 3 Escaños</span>
        <span style="color: #FF0000;">PSOE 1 Escaño</span> 

    </a>
    <br><br>
    UCD continua como ganador, triplicando en escaños al PSOE aumentando su ventaja sobre el PSOE a 54031 votos
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/castilla-la-mancha/burgos" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #ADD8E6;">AP-PDP 2 Escaños</span> 
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 
          
    </a>
    <br><br>
    AP-PDP las gana, empatando en escaños con el PSOE y con una ventaja de 11343 votos sobre el PSOE
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/castilla-la-mancha/burgos" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #ADD8E6;">AP-PDP 2 Escaños</span> 
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 
        
        
    </a>
    <br><br>
    AP-PDP las vuelve a ganar, empatando en escaños con el PSOE y con tan solo una ventaja de 4669 votos sobre el PSOE
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/castilla-la-mancha/burgos" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #0000FF;">PP 2 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 
        
    </a>
    <br><br>
    El PP las gana, empatando en escaños con el PSOE, al que aventaja por 22635 votos
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/castilla-la-mancha/burgos" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 2 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span>
                    
                
                </a>
                <br><br>
                El PP sigue ganando, empatando en escaños con el PSOE y con una ventaja de 34576 votos sobre el PSOE
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/castilla-la-mancha/burgos" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 3 Escaños</span>
        <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
El PP sigue ganando, triplicando en escaños al PSOE aumentando su ventaja a 55033 votos sobre el PSOE
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/castilla-la-mancha/burgos" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
        <span style="color: #FF0000;">PSOE-PROGR 1 Escaño</span>
</a>
<br><br>
El PP sigue como ganador, triplicando en escaños al PSOE-PROGR y doblandole en votos, con una ventaja de 65143 votos sobre PSOE
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/castilla-la-mancha/burgos" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    
</a>
<br><br>
El PP continúa como primera fuerza, empatando en escaños con el PSOE, con una ventaja de 30688 votos sobre el PSOE
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/castilla-la-mancha/burgos" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    
    
</a>
<br><br>
El PP repite como ganador en la provincia y empata en escaños con el PSOE, al que aventaja en 23411 votos
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/08/09.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
El PP sigue ganando y triplica en escaños al PSOE, al que aventaja en 56179 votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/08/09.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>

</a>
<br><br>
El PP vuelve a ganar, empatando en escaños a la suma de PSOE y PODEMOS.El PP gana al PSOE por 37292 votos, el PSOE gana a PODEMOS por 7876 votos y PODEMOS gana la tercera posición sobre CIUDADANOS por 3239 votos
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/08/09.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
</a>
<br><br>
El PP continúa ganando y empatando en escaños a la suma de PSOE y PODEMOS.El PP gana al PSOE por 42869 votos , el PSOE gana a PODEMOS por 10153 votos y PODEMOS gana la tercera posición sobre CIUDADANOS por 5199 votos
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/08/09.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    
</a>
<br><br>
El PSOE gana por primera vez las elecciones en Burgos ante la división de la derecha, empatando en escaños a la suma de PP y CIUDADANOS. El PSOE gana al PP por 10229 votos y el PP gana a CIUDADANOS por 10410 votos
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/08/09.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    

</a>
<br><br>
El PSOE sigue ganando, empatando en escaños con el PP, que gana un escaño a costa de CIUDADANOS, que se hunde y pasa de tercera a quinta fuerza. El PSOE tan solo saca una ventaja de 2954 votos sobre el PP 
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/08/09/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span> 
    
</a>
<br><br>
El PP las gana, empatando en escaños con el PSOE, con una ventaja de 12554 sobre el PSOE
<br><br>
En conclusión, Burgos es una provincia históricamente de derechas, con una clara hegemonía del PP (y anteriormente de UCD y AP-PDP), aunque en ciertos períodos ha habido un mayor equilibrio con el PSOE. En los momentos de mayor euforia nacional para el PP, este ha logrado triplicar en escaños al PSOE, mientras que el empate en representación suele producirse cuando el partido no atraviesa su mejor momento. A pesar de algunos periodos de equilibrio, la derecha siempre ha concentrado más votos que la izquierda, y el PSOE solo ha conseguido imponerse en elecciones marcadas por la fragmentación de la derecha en tres fuerzas relevantes.

Aunque en los últimos comicios la competencia ha sido más ajustada, el peso histórico del PP y su recuperación en 2023 reflejan que Burgos sigue inclinándose mayoritariamente hacia la derecha.
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Burgos</title>
            
    <style>
    body {
        font-family: 'Segoe UI', sans-serif;
        background-color: #f4f4f8;
        margin: 0;
        padding: 20px;
    }
    h1 {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 30px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .boton-con-texto {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 140px;
    }
    .titulo-boton {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 8px;
        text-align: center;
    }
    .button {
        width: 140px;
        height: 90px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
    }
    
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
if (provincia === "Salamanca") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Salamanca <span class="escaños">4 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/castilla-la-mancha/salamanca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 3 Escaños</span>
        <span style="color: #FF0000;">PSOE 1 Escaño</span> 
        
    </a>
    <br><br>
    UCD gana las primeras elecciones, triplicando en escaños al PSOE, doblandole en votos y con 64694 votos sobre el PSOE 
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/castilla-la-mancha/salamanca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 3 Escaños</span>
        <span style="color: #FF0000;">PSOE 1 Escaño</span> 

    </a>
    <br><br>
    UCD continua como ganador, triplicando en escaños al PSOE, doblandole en votos y con una ventaja sobre el PSOE de 52462 votos
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/castilla-la-mancha/salamanca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 1 Escaño</span> 
          
    </a>
    <br><br>
    El PSOE las gana, triplicando en escaños a AP-PDP, con una ventaja de 35562 votos
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/castilla-la-mancha/salamanca" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 1 Escaño</span>
        <span style="color: #006400;">CDS 1 Escaño</span>
        
    </a>
    <br><br>
    El PSOE las vuelve a ganar, empatando en escaños a la suma de AP-PDP y CDS. El PSOE gana a AP-PDP por 6110 votos y AP-PDP gana a CDS por 37394 votos
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/castilla-la-mancha/salamanca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #0000FF;">PP 2 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 
        
    </a>
    <br><br>
    El PP las gana, empatando en escaños con el PSOE, al que aventaja por 8082 votos
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/castilla-la-mancha/salamanca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 2 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span>
                    
                
                </a>
                <br><br>
                El PP sigue ganando, empatando en escaños con el PSOE y con una ventaja de 26453 votos sobre el PSOE
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/castilla-la-mancha/salamanca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 3 Escaños</span>
        <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
El PP sigue ganando, triplicando en escaños al PSOE aumentando su ventaja a 46047 votos sobre el PSOE
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/castilla-la-mancha/salamanca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
        <span style="color: #FF0000;">PSOE-PROGR 1 Escaño</span>
</a>
<br><br>
El PP sigue como ganador, triplicando en escaños al PSOE-PROGR, con una ventaja de 57591 votos sobre PSOE
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/castilla-la-mancha/salamanca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    
</a>
<br><br>
El PP continúa como primera fuerza, empatando en escaños con el PSOE, con una ventaja de 34277 votos sobre el PSOE
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/castilla-la-mancha/salamanca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    
    
</a>
<br><br>
El PP repite como ganador en la provincia y empata en escaños con el PSOE, al que aventaja en 32656 votos
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/08/37.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
El PP sigue ganando, triplicando en escaños al PSOE y doblandole en votos, al que aventaja en 72556 votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/08/37.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>

</a>
<br><br>
El PP vuelve a ganar y sumando a CIUDADANOS triplican en escaños al PSOE. El PP gana al PSOE por 43688 votos y el PSOE gana a CIUDADANOS por 10191 votos
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/08/37.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    
</a>
<br><br>
El PP continúa ganando y triplicando en escaños al PSOE y doblandole en votos, CIUDADANOS pierde su escaño, tras su leve retroceso y también tras el notable ascenso del PP
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/08/37.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 1 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>

    
</a>
<br><br>
El PP las gana duplicando y sumando a CIUDADANOS, triplican en escaños al PSOE.Por la división de la derechas en tres partidos, la ventaja del PP sobre el PSOE es solo de 1016 votos y el PSOE gana a CIUDADANOS por 15654 votos
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/08/37.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span>  

</a>
<br><br>
El PP sigue ganando y sumando a VOX, triplican en escaños al PSOE, mientras el PP aumenta su ventaja a 10234 votos sobre el PSOE y el PSOE gana a VOX por 22552 votos
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/08/37/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 1 Escaño</span> 
    
</a>
<br><br>
El PP las gana, triplicando en escaños al PSOE con una ventaja de 32600 votos sobre el PSOE y arrebatando el escaño a VOX
<br><br>
En conclusión, Salamanca es una provincia con una clara tendencia de derechas, donde el PP (y anteriormente UCD y AP-PDP) ha dominado la mayoría de los comicios. Aunque ha habido momentos de mayor equilibrio con el PSOE, especialmente en épocas de fragmentación de la derecha, la suma de la derecha ha logrado triplicar al PSOE en escaños en varias ocasiones, como las últimas seis elecciones, lo que ha consolidado su hegemonía. El PSOE solo logró ganar en las dos primeras legislaturas de Félipe Gónzalez y solamente en 1982 consiguió triplicar a la derecha. Salamanca es así la provincia más de derechas de Castilla y León

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Salamanca</title>
            
    <style>
    body {
        font-family: 'Segoe UI', sans-serif;
        background-color: #f4f4f8;
        margin: 0;
        padding: 20px;
    }
    h1 {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 30px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .boton-con-texto {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 140px;
    }
    .titulo-boton {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 8px;
        text-align: center;
    }
    .button {
        width: 140px;
        height: 90px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
    }
    
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
if (provincia === "Valladolid") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Valladolid <span class="escaños">5 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/castilla-la-mancha/valladolid" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 3 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 
        
    </a>
    <br><br>
    UCD gana las primeras elecciones, sacando un escaño de ventaja sobre el PSOE y con 27837 votos sobre el PSOE
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/castilla-la-mancha/valladolid" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 3 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 

    </a>
    <br><br>
    UCD continua como ganador, sacando un escaño de ventaja al PSOE, y con una ventaja sobre el PSOE de 21832 votos
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/castilla-la-mancha/valladolid" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 2 Escaños</span> 
          
    </a>
    <br><br>
    El PSOE las gana, sacando un escaño de ventaja a AP-PDP, con una ventaja de 56352 votos
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/castilla-la-mancha/valladolid" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 2 Escaños</span>
        <span style="color: #006400;">CDS 1 Escaño</span>
        
    </a>
    <br><br>
    El PSOE las vuelve a ganar, pero la suma de AP-PDP y CDS le saca un escaño de ventaja, el PSOE gana de a AP-PDP por 27117 votos y AP-PDP gana a CDS por 41458 votos
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/castilla-la-mancha/valladolid" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #0000FF;">PP 3 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 
        
    </a>
    <br><br>
    El PP las gana, sacando un escaño de ventaja al PSOE, con una ventaja de solo 6163 votos sobre el PSOE
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/castilla-la-mancha/valladolid" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 3 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span>
                    
                
                </a>
                <br><br>
                El PP sigue ganando, sacando un escaño de ventaja sobre el PSOE y con una ventaja de 29751 votos sobre el PSOE
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/castilla-la-mancha/valladolid" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 3 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
El PP sigue ganando, sacando un escaño de ventaja al PSOE aumentando su ventaja a 43899 votos sobre el PSOE
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/castilla-la-mancha/valladolid" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
        <span style="color: #FF0000;">PSOE-PROGR 2 Escaños</span>
</a>
<br><br>
El PP sigue como ganador, sacando un escaño de ventaja al PSOE-PROGR, con una ventaja de 57192 votos sobre el PSOE
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/castilla-la-mancha/valladolid" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    
</a>
<br><br>
El PP continúa como primera fuerza, sacando un escaño de ventaja al PSOE, con una ventaja de 7608 votos sobre el PSOE 
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/castilla-la-mancha/valladolid" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    
    
</a>
<br><br>
El PP repite como ganador en la provincia y saca un escaño de ventaja sobre el PSOE, al que aventaja en 23207 votos
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/08/47.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
El PP sigue ganando, sacando un escaño de ventaja sobre el PSOE, al que aventaja en 78150 votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/08/47.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>


</a>
<br><br>
El PP vuelve a ganar y sumando a CIUDADANOS sacan un escaño de ventaja a la suma de PSOE y PODEMOS.El PP gana al PSOE por 50352 votos, el PSOE gana a CIUDADANOS por 14653 votos y CIUDADANOS supera como tercera fuerza a PODEMOS por 6180 votos
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/08/47.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    
</a>
<br><br>
El PP continúa ganando y sumando a CIUDADANOS sacan un escaño de ventaja a la suma de PSOE y PODEMOS. El PP dobla al PSOE en votos, el PSOE gana a PODEMOS por 20434 votos y PODEMOS gana en esta ocasión la tercera fuerza a CIUDADANOS por 2161 votos
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/08/47.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    <span style="color: #008000;">VOX 1 Escaño</span>  

</a>
<br><br>
El PSOE las gana, pero la suma de PP, CIUDADANOS y VOX le sacan un escaño de ventaja.El PSOE gana al PP por 18590 votos, el PP gana a CIUDADANOS por 10757, CIUDADANOS gana a VOX por 21667 votos y VOX gana la cuarta posición a PODEMOS por 6801 votos.PODEMOS retrocede y pasa de tercera a quinta fuerza
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/08/47.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #008000;">VOX 1 Escaño</span>  

</a>
<br><br>
El PSOE sigue ganando, pero la suma de PP, que arrebata el escaño a CIUDADANOS que se hunde y pasa de tercera a quinta fuerza. El PSOE le saca tan solo 2527 votos al PP, el PP gana a VOX por 35504 votos y VOX gana la tercera posición a costa de CIUDADANOS, mientras PODEMOS se convierte en cuarta fuerza, aunque sin escaño.
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/08/47/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaño</span> 
    <span style="color: #008000;">VOX 1 Escaño</span> 
    
</a>
<br><br>
El PP las gana y sumando a VOX, sacan un escaño de ventaja al PSOE.La ventaja del PP sobre el PSOE es de 25574 votos y el PSOE dobla a VOX en votos
<br><br>
En conclusión, Valladolid es una provincia claramente de derechas, donde la derecha en sus diferentes combinaciones, ha mantenido una constante ventaja siempre un escaño por encima del PSOE, excepto en el año 1982 con la primera victorial electoral de Felipe González

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
        
<html>
        <head>
            <title>Valladolid</title>
            
    <style>
    body {
        font-family: 'Segoe UI', sans-serif;
        background-color: #f4f4f8;
        margin: 0;
        padding: 20px;
    }
    h1 {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 30px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .boton-con-texto {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 140px;
    }
    .titulo-boton {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 8px;
        text-align: center;
    }
    .button {
        width: 140px;
        height: 90px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
    }
    
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
            <h1 style="color: black;">Jaén <span class="escaños">7 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/andalucia/jaen" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 4 Escaños</span>
        <span style="color: #FFA500;">UCD 3 Escaños</span>
        
    </a>
    <br><br>
    El PSOE gana las primeras elecciones, sacando un escaño de ventaja sobre UCD y con 20011 votos sobre UCD
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/andalucia/jaen" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #FFA500;">UCD 3 Escaños</span>
        <span style="color: #FF0D00;">PCE 1 Escaño</span>


    </a>
    <br><br>
    El PSOE continua como ganador y sumando al PCE sacan un escaño de ventaja a UCD. El PSOE gana con 26652 sobre UCD y UCD dobla al PCE en votos
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/andalucia/jaen" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 5 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 2 Escaños</span> 
          
    </a>
    <br><br>
    El PSOE las gana, sacando tres escaños a AP-PDP y duplicandole en votos
    <br><br>
    <h1 style="color: black;"><span class="escaños">Pasa a 6 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/andalucia/jaen" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 4 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PL 2 Escaños</span>
        
    </a>
    <br><br>
    El PSOE las vuelve a ganar, duplicando en escaños y en votos a AP-PDP-PL 
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/andalucia/jaen" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 4 Escaños</span> 
        <span style="color: #0000FF;">PP 2 Escaños</span>
        
    </a>
    <br><br>
    El PSOE las gana, duplicando en escaños y en votos al PP
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/andalucia/jaen" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 4 Escaños</span> 
        <span style="color: #0000FF;">PP 2 Escaños</span>
                
                </a>
                <br><br>
                El PSOE sigue ganando, duplicando en escaños al PP, al que aventaja en 80601 votos
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/andalucia/jaen" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span>
        <span style="color: #0000FF;">PP 3 Escaños</span>
</a>
<br><br>
El PSOE sigue ganando, empatando en escaños con el PP, aunque sacandole una ventaja de 49871 votos
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/andalucia/jaen" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE-PROGR 3 Escaños</span>
        <span style="color: #0000FF;">PP 3 Escaños</span>
</a>
<br><br>
El PSOE sigue como ganador, empatando en escaños con el PP y sacandole una ventaja de 29673 votos
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/andalucia/jaen" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
        <span style="color: #0000FF;">PP 2 Escaños</span>
    
</a>
<br><br>
El PSOE continúa como primera fuerza, duplicando en escaños al PP al que aventaja en 85323 votos
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/andalucia/jaen" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
        <span style="color: #0000FF;">PP 2 Escaños</span>
    
    
</a>
<br><br>
El PSOE repite como ganador en la provincia, duplicando en escaños al PP, al que aventaja en 78686 votos
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/01/23.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
</a>
<br><br>
Con la mayoría absooluta de Rajoy, el PP gana las elecciones por primera vez, empatando en escaños con el PSOE, al que saca una ventaja de 17991 votos
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 5 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/01/23.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    
</a>
<br><br>
El PSOE las gana, sacando un escaño de ventaja al PP, al que saca 26547 votos
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/01/23.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    
</a>
<br><br>
El PSOE las gana y sumando a PODEMOS sacan un escaño de ventaja al PP. El PSOE gana al PP por 7397 votos y el PP dobla a PODEMOS en votos
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/01/23.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>  

</a>
<br><br>
El PSOE las gana con enorme ventaja, sacando un escaño de ventaja a la suma de PP y CIUDADANOS, El PSOE dobla al PP en votos y el PP gana a CIUDADANOS por 14328 votos
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/01/23.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 1 Escaño</span> 
    <span style="color: #008000;">VOX 1 Escaño</span>  

</a>
<br><br>
El PSOE las gana con enorme ventaja, sacando un escaño de ventaja a la suma de PP y VOX. El PSOE gana al PP por 59682 votos y el PP gana a VOX por 10105 votos
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/01/23/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaño</span> 
    <span style="color: #008000;">VOX 1 Escaño</span> 
    
</a>
<br><br>
El PP las gana y sumando a VOX sacan un escaño de ventaja al PSOE. La ventaja del PP sobre el PSOE es de 3798 votos y el PSOE dobla a VOX en votos
<br><br>
En conclusión, Jaén es una provincia de fuerte arraigo socialista, con el PSOE dominando la mayoría de los comicios, incluso en las primeras elecciones,cuando UCD arrasaba en muchas provincias, Jaén fue una de las excepciónes.A lo largo de los años, el PSOE ha logrado amplias ventajas sobre sus competidores en varias ocasiones. Sin embargo, en los últimos años, el panorama ha evolucionado hacia un mayor equilibrio entre bloques. Aunque el PSOE sigue siendo una fuerza destacada, el PP ha logrado avances significativos, alcanzando la paridad en escaños en 2023. La derechización de Andalucía con la irrupción de VOX y el "efecto Moreno" están provocando un giro de la provincia hacia la derecha."

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
        font-family: 'Segoe UI', sans-serif;
        background-color: #f4f4f8;
        margin: 0;
        padding: 20px;
    }
    h1 {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 30px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .boton-con-texto {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 140px;
    }
    .titulo-boton {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 8px;
        text-align: center;
    }
    .button {
        width: 140px;
        height: 90px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
    }
    
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
if (provincia === "Castellón") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Castellón <span class="escaños">5 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/comunidad-valenciana/castellon" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 2 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span>
        <span style="color: #000080;">INDEP 1 Escaño</span>
        
    </a>
    <br><br>
    UCD gana las primeras elecciones y sumando a INDEP (partido de centroderecha) sacan un escaño de ventaja al PSOE. La ventaja de UCD sobre el PSOE es de 14139 votos y el PSOE dobla a INDEP en votos
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/comunidad-valenciana/castellon" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 3 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 
        

    </a>
    <br><br>
    UCD continua como ganador, sacando un escaño de ventaja al PSOE y con una ventaja de 25632 votos
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/comunidad-valenciana/castellon" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-UV 2 Escaños</span> 
          
    </a>
    <br><br>
    El PSOE las gana, sacando un escaño de ventaja a AP-PDP-UV (UV es Unión Valenciana) y con una ventaja de 56374 votos
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/comunidad-valenciana/castellon" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PL 2 Escaños</span>
        
    </a>
    <br><br>
    El PSOE las vuelve a ganar, sacando un escaño de ventaja a AP-PDP-PL y de 33218 votos
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/comunidad-valenciana/castellon" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #0000FF;">PP 2 Escaños</span>
        
    </a>
    <br><br>
    El PSOE las gana, sacando un escaño de ventaja al PP y de 19864 votos
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/comunidad-valenciana/castellon" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 3 Escaños</span>
                    <span style="color: #FF0000;">PSOE 2 Escaños</span> 
                
                </a>
                <br><br>
                El PP sigue ganando, sacando un escaño de ventaja al PSOE, al que saca 15164 votos de ventaja
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/comunidad-valenciana/castellon" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #0000FF;">PP 3 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
El PP sigue ganando, sacando un escaño de ventaja al PSOE y con una ventaja de 19581 votos 
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/comunidad-valenciana/castellon" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #0000FF;">PP 3 Escaños</span>
        <span style="color: #FF0000;">PSOE-PROGR 2 Escaños</span>
</a>
<br><br>
El PP sigue como ganador, sacando un escaño de ventaja al PSOE-PROGR, al que aventaja en 52285 votos
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/comunidad-valenciana/castellon" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    
</a>
<br><br>
El PP continúa como primera fuerza, sacando un escaño de ventaja al PSOE, al que aventaja en tan solo 3226 votos
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/comunidad-valenciana/castellon" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #0000FF;">PP 3 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span>
    
    
</a>
<br><br>
El PP repite como ganador en la provincia, sacando un escaño de la ventaja al PSOE, al que aventaja por 15245 votos
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/17/12.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
Con la mayoría absooluta de Rajoy, el PP las sigue ganando, sacando un escaño de ventaja sobre el PSOE, al que aventaja ya por 69026 votos
<br><br>
2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/17/12.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #800080;">PODEMOS-COMPROMIS 1 Escaño</span>
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span> 
    
</a>
<br><br>
El PP las gana y sumando a CIUDADANOS sacan un escaño de ventaja a la suma de PODEMOS-COMPROMIS y PSOE. El PP gana a PODEMOS-COMPROMIS por 23884 votos, PODEMOS-COMPROMIS se convierte en segunda fuerza sacando 8007 votos de ventaja sobre el PSOE, mientras el PSOE saca 18230 votos de ventaja sobre CIUDADANOS
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/17/12.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #800080;">PODEMOS-COMPROMIS 1 Escaño</span>
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span> 
    
</a>
<br><br>
El PP las gana y sumando a CIUDADANOS sacan un escaño de ventaja a la suma de PODEMOS-COMPROMIS y PSOE. El PP gana a PODEMOS-COMPROMIS por 34706 votos, PODEMOS-COMPROMIS mantiene la segunda fuerza por una ventaja de 5949 votos sobre el PSOE, mientras el PSOE saca 21917 votos de ventaja sobre CIUDADANOS
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/17/12.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>  
    <span style="color: #800080;">PODEMOS 1 Escaño</span>

</a>
<br><br>
El PSOE las gana y sumando a PODEMOS sacan un escaño de ventaja a la suma de PP y CIUDADANOS. El PSOE gana al PP por 28403 votos, el PP saca una ventaja de 12775 votos sobre CIUDADANOS, CIUDADANOS una ventaja de 7431 sobre PODEMOS y PODEMOS, aunque retrocede de segunda a cuarta fuerza y COMPROMIS se presenta por separado gana la cuarta posición y el escaño a VOX por 5983 votos
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/17/12.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 1 Escaño</span> 
    <span style="color: #008000;">VOX 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>

</a>
<br><br>
El PSOE las gana con enorme ventaja y sumando a PODEMOS sacan un escaño de ventaja a la suma de PP y VOX. El PSOE saca 13902 votos sobre el PP, el PP saca 15327 votos sobre VOX y VOX saca 15598 votos sobre PODEMOS, mientras CIUDADANOS se hunde y cae a quinta posición
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/17/12/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaño</span> 
    <span style="color: #008000;">VOX 1 Escaño</span> 
    
</a>
<br><br>
El PP las gana y sumando a VOX sacan un escaño de ventaja al PSOE. El PP gana al PSOE por 7772 votos, el PSOE dobla a VOX en votos y VOX gana la tercera posición y el escaño a SUMAR por 4726 votos
<br><br>
En conclusión, Castellón es una provincia que no podríamos clasificar ni en la izquierda ni en la derecha, con una fuerte competencia entre el PSOE y el PP, con cambios de hegemonía a lo largo de las décadas. Mientras que en los primeros años la UCD logró imponerse, el PSOE tomó el relevo en los años 80 y mantuvo su liderazgo hasta la consolidación del PP en los 90. Desde entonces, la provincia ha alternado etapas de dominio popular con periodos de mayor equilibrio. En los últimos años, la fragmentación del voto y la irrupción de nuevas fuerzas, como VOX, PODEMOS y SUMAR, han añadido mayor incertidumbre al panorama electoral. Sin embargo, el PP ha conseguido recuperar la primera posición en 2023, y además VOX ganó la tercera plaza a SUMAR, reflejando una tendencia reciente hacia la derecha.

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
        font-family: 'Segoe UI', sans-serif;
        background-color: #f4f4f8;
        margin: 0;
        padding: 20px;
    }
    h1 {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 30px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .boton-con-texto {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 140px;
    }
    .titulo-boton {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 8px;
        text-align: center;
    }
    .button {
        width: 140px;
        height: 90px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
    }
    
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
            <h1 style="color: black;">Badajoz <span class="escaños">7 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/extremadura/badajoz" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 4 Escaños</span>
        <span style="color: #FF0000;">PSOE 3 Escaños</span>
        
    </a>
    <br><br>
    UCD gana las primeras elecciones, sacando un escaño de ventaja al PSOE, al que aventaja por 40900 votos
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/extremadura/badajoz" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 4 Escaños</span>
        <span style="color: #FF0000;">PSOE 3 Escaños</span>
        
    </a>
    <br><br>
    UCD continua como ganador, sacando un escaño de ventaja al PSOE y con una ventaja de 24019 votos
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/extremadura/badajoz" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 5 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 2 Escaños</span> 
          
    </a>
    <br><br>
    El PSOE las gana, sacando tres escaños de ventaja sobre AP-PDP y al que dobla en votos
    <br><br>
    <h1 style="color: black;"><span class="escaños">Pasa a 6 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/extremadura/badajoz" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 4 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PL 2 Escaños</span>
        
    </a>
    <br><br>
    El PSOE las vuelve a ganar, duplicando en escaños y en votos a AP-PDP-PL
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/extremadura/badajoz" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 4 Escaños</span> 
        <span style="color: #0000FF;">PP 2 Escaños</span>
        
    </a>
    <br><br>
    El PSOE las gana,  duplicando en escaños y en votos al PP
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/extremadura/badajoz" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 4 Escaños</span> 
                    <span style="color: #0000FF;">PP 2 Escaños</span>
                
                </a>
                <br><br>
                El PSOE sigue ganando y duplicando en escaños al PP, al que aventaja por 68561 votos
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/extremadura/badajoz" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span>
        <span style="color: #0000FF;">PP 3 Escaños</span>
</a>
<br><br>
El PSOE sigue ganando, empatando en escaños con el PP, al que aventaja en 41033 votos
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/extremadura/badajoz" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #0000FF;">PP 3 Escaños</span>
        <span style="color: #FF0000;">PSOE-PROGR 3 Escaños</span>
</a>
<br><br>
El PP las gana por primera vez, empatando en escaños con PSOE-PROGR, al que aventaja en 8877 votos
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/extremadura/badajoz" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span>
    
</a>
<br><br>
El PSOE las gana, empatando en escaños con el PP, al que aventaja en 42473 votos
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/extremadura/badajoz" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span>
        <span style="color: #0000FF;">PP 3 Escaños</span>
    
    
</a>
<br><br>
El PSOE repite como ganador en la provincia, empatando en escaños con el PP, al que aventaja en 45115 votos
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/10/06.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
Con la mayoría absooluta de Rajoy, el PP duplica en escaños al PSOE, al aventaja en 53376 votos
<br><br>
2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/10/06.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
</a>
<br><br>
El PSOE las gana y la suma con PODEMOS duplica en escaños al PP. El PSOE saca 10846 votos sobre el PP, el PP dobla a PODEMOS en votos y PODEMOS entra con un escaño y la tercera posición que gana a CIUDADANOS por 1951 votos
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/10/06.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    
</a>
<br><br>
El PP las gana empatando en escaños a la suma de PSOE+PODEMOS. El PP saca 16215 votos sobre el PSOE, el PSOE dobla a PODEMOS en votos y PODEMOS gana la tercera posición a CIUDADANOS por 6622 votos
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/10/06.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>  
    <span style="color: #008000;">VOX 1 Escaño</span>

</a>
<br><br>
El PSOE las gana con enorme ventaja, empatando en escaños con la suma de PP+CIUDADANOS+VOX.El PSOE gana al PP por 73696 votos, el PP saca solo 7755 votos sobre CIUDADANOS, CIUDADANOS saca 30627 votos sobre VOX y VOX gana la cuarta posición y el escaño sobre PODEMOS por 6704 votos
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/10/06.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaño</span> 
    <span style="color: #008000;">VOX 1 Escaño</span>

</a>
<br><br>
El PSOE las gana, empatando en escaños a la suma de PP+VOX. VOX sube a tercera fuerza y el PP sube un escaño a costa de CIUDADANOS, que se hunde y cae a quinta fuerza. El PSOE gana al PP por 49570 votos y el PP gana a VOX por 28726 votos
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 5 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/10/06/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaño</span> 
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span> 
    
</a>
<br><br>
El PSOE las gana, pero es superior la suma de PP+VOX que le saca un escaño de ventaja. VOX mantiene el escaño clave y el PSOE gana al PP por 5405 votos. El PP dobla a VOX en votos
<br><br>
En conclusión, Badajoz es una provincia de izquierdas, con un fuerte arraigo socialista, con el PSOE dominando la mayoría de los comicios desde 1982. Sin embargo, en los últimos años, el panorama político ha cambiado significativamente, reflejando una mayor fragmentación del voto y un avance del bloque de la derecha. Aunque el PSOE sigue siendo la fuerza más votada, el PP ha logrado consolidarse como un rival fuerte, alcanzando la paridad en escaños en 2023 y casi en votos. La irrupción de VOX como tercera fuerza está decantando la balanza a la derecha

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
        font-family: 'Segoe UI', sans-serif;
        background-color: #f4f4f8;
        margin: 0;
        padding: 20px;
    }
    h1 {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 30px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .boton-con-texto {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 140px;
    }
    .titulo-boton {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 8px;
        text-align: center;
    }
    .button {
        width: 140px;
        height: 90px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
    }
    
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
if (provincia === "Cantabria") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Cantabria <span class="escaños">5 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/cantabria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 3 Escaños</span>
        <span style="color: #FF0000;">PSOE 1 Escaño</span>
        <span style="color: #ADD8E6;">AP 1 Escaño</span> 
        
    </a>
    <br><br>
    UCD gana las primeras elecciones y sumando a AP cuadriplican en escaños al PSOE. UCD saca una ventaja de 35108 votos sobre el PSOE y el PSOE gana a AP por 31013 votos
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/cantabria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 3 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span>
        
    </a>
    <br><br>
    UCD continua como ganador, sacando un escaño de ventaja al PSOE y con una ventaja de 30040 votos
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/cantabria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 2 Escaños</span> 
          
    </a>
    <br><br>
    El PSOE las gana, sacando un escaño de ventaja sobre AP-PDP y al que aventaja en 18420 votos
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/cantabria" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PL 2 Escaños</span>
        
    </a>
    <br><br>
    El PSOE las vuelve a ganar, sacando un escaño de ventaja a AP-PDP-PL y con una ventaja de 29892 votos
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/cantabria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #0000FF;">PP 2 Escaños</span>
        
    </a>
    <br><br>
    El PSOE las gana, sacando un escaño de ventaja al PP y con una ventaja de 4949 votos
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/cantabria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                    <span style="color: #0000FF;">PP 2 Escaños</span>
                
                </a>
                <br><br>
                El PSOE sigue ganando y sacando un escaño de ventaja al PP, aunque por tan solo 451 votos
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/cantabria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #0000FF;">PP 3 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
El PP las gana, sacando un escaño de ventaja sobre el PSOE, al que aventaja en 51711 votos
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/cantabria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #0000FF;">PP 3 Escaños</span>
        <span style="color: #FF0000;">PSOE-PROGR 2 Escaños</span>
</a>
<br><br>
El PP sigue como ganador, sacando un escaño de ventaja sobre PSOE-PROGR, al que aventaja en 77886 votos
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/cantabria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    
</a>
<br><br>
El PP continua como primera fuerza, sacando un escaño de ventaja sobre el PSOE, al que aventaja en 40477 votos
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/cantabria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span>  
    
</a>
<br><br>
El PP repite como ganador en la provincia, sacando un escaño de ventaja sobre el PSOE, al que aventaja 23574 votos
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/06/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
Con la mayoría absoluta de Rajoy, el PP cuadriplica al PSOE en escaños y le dobla en votos
<br><br>
2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/06/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span> 
</a>
<br><br>
El PP las gana y sumando a CIUDADANOS sacan un escaño de ventaja a la suma de PSOE y PODEMOS.El PP gana al PSOE por 50635 votos , el PSOE gana la segunda posición con 15998 votos sobre PODEMOS y PODEMOS gana por 9037 votos sobre CIUDADANOS
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/06/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span> 
    
</a>
<br><br>
El PP las gana y sumando a CIUDADANOS sacan un escaño de ventaja a la suma de PSOE y PODEMOS.El PP gana al PSOE por 60444 votos, el PSOE gana la segunda posición con 19675 votos sobre PODEMOS y PODEMOS gana por 10988 votos sobre CIUDADANOS
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/06/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>  
    <span style="color: #808000;">PRC 1 Escaño</span>

</a>
<br><br>
El PSOE las gana y sumando al Partido Regionalista Cántabro de Revilla sacan un escaño de ventaja a la suma de PP y CIUDADANOS. El PSOE gana con 12476 votos sobre el PP, el PP gana por 23507 votos sobre CIUDADANOS, y CIUDADANOS gana por tan solo 1964 votos sobre el PRC, mientras PODEMOS se hunde y pasa de tercera fuerza a sexta, siendo incluso superado por VOX
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/06/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaño</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    <span style="color: #808000;">PRC 1 Escaño</span>
    <span style="color: #008000;">VOX 1 Escaño</span>
    

</a>
<br><br>
El PP las gana y sumando con VOX, sacan un escaño de ventaja a la suma de PSOE+PRC. El PP gana por 8555 votos sobre el PSOE.El PSOE supera al PRC por 7198 votos y el PRC supera a VOX por 20003 votos. VOX entra como cuarta fuerza y un escaño
<br><br>
2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/06/" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaño</span>
    <span style="color: #008000;">VOX 1 Escaño</span> 
    
</a>
<br><br>
El PP las gana y sumando con VOX (que mantiene el escaño por los pelos), saca un escaño de ventaja al PSOE. El PSOE arrebata a PRC, el escaño, ya que deciden no presentarse en estas elecciones generales. El PP saca al PSOE una ventaja de 30730 votos y el PSOE dobla a VOX en votos
<br><br>
En conclusión, Cantabria es una provincia de derechas, siendo únicamente ganada por el PSOE en las cuatro legislaturas de Felipe González y el 28 de abril de 2019 con la división de la derecha en tres partidos. La derecha suele sacar un escaño de ventaja a la izquierda y en algunas elecciones se llegó a cuadriplicar al PSOE

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Cantabria</title>
            
    <style>
    body {
        font-family: 'Segoe UI', sans-serif;
        background-color: #f4f4f8;
        margin: 0;
        padding: 20px;
    }
    h1 {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 30px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .boton-con-texto {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 140px;
    }
    .titulo-boton {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 8px;
        text-align: center;
    }
    .button {
        width: 140px;
        height: 90px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
    }
    
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
if (provincia === "Navarra") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Navarra <span class="escaños">5 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/comunidad-foral-de-navarra" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 3 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 
        
    </a>
    <br><br>
    UCD gana las primeras elecciones, sacando un escaño de ventaja al PSOE, al que saca una ventaja de 20316 votos
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/comunidad-foral-de-navarra" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 3 Escaños</span>
        <span style="color: #FF0000;">PSOE 1 Escaño</span>
        <span style="color: #8B4513;">UPN 1 Escaño</span>
        
    </a>
    <br><br>
    UCD continua como ganador y sumando a Unión del Pueblo Navarro, cuadriplican al PSOE. UCD aventaja al PSOE por 27903 votos y el PSOE gana a UPN por 27151 votos
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/comunidad-foral-de-navarra" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #ADD8E6;">UPN-AP-PDP 2 Escaños</span> 
          
    </a>
    <br><br>
    El PSOE las gana, sacando un escaño de ventaja sobre UPN-AP-PDP y al que aventaja en 35931 votos
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/comunidad-foral-de-navarra" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PL-UPN 2 Escaños</span>
        <span style="color: #01b59c;">HB 1 Escaño</span>
        
    </a>
    <br><br>
    El PSOE las vuelve a ganar y sumando el escaño de Herri Batasuna (partido abertzale que fue ilegalizado en el 2003 por su alianza con ETA) sacan un escaño de ventaja a AP-PL-UPN. El PSOE aventaja a AP-PL-UPN por 16088 votos y AP-PL-UPN dobla a HB en votos
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/comunidad-foral-de-navarra" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #8B4513;">UPN-PP 3 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 
        
    </a>
    <br><br>
    UPN-PP las gana, sacando un escaño de ventaja al PSOE y con una ventaja de 5539 votos, mientras HB retrocede y pierde el escaño
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/comunidad-foral-de-navarra" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #8B4513;">UPN-PP 3 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 
                
                </a>
                <br><br>
                UPN-PP sigue ganando y sacando un escaño de ventaja al PSOE, aunque por tan solo 3923 votos
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/comunidad-foral-de-navarra" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #8B4513;">UPN-PP 2 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 
        <span style="color: #DC143C;">IU-EB 1 Escaño</span> 
        
</a>
<br><br>
UPN-PP las vuelve a ganar, pero la suma de escaños de PSOE e IU-EB es un escaño mayor. UPN-PP saca una ventaja de 22233 votos al PSOE y el PSOE doblaa IU-EB en votos 
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/comunidad-foral-de-navarra" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #8B4513;">UPN-PP 3 Escaños</span>
        <span style="color: #FF0000;">PSOE-PROGR 2 Escaños</span> 
</a>
<br><br>
UPN-PP las gana y saca un escaño de ventaja al PSOE-PROGR y una ventaja de 68307 votos, mientras IUN-NEB retrocede y pierde el escaño
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/comunidad-foral-de-navarra" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #8B4513;">UPN-PP 2 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span>
        <span style="color: #298242;">NA-BAI 1 Escaño</span>

    
</a>
<br><br>
UPN-PP continua como primera fuerza, pero el PSOE y NA-BAI (coalición entre Aralar, PNV, EUSKO ALKARTASUNA, BATZARRE) le saca un escaño de ventaja. UPN-PP gana al PSOE por una ventaja de 13747 votos y el PSOE gana a NA-BAI por 52861 votos
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/comunidad-foral-de-navarra" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #8B4513;">UPN-PP 2 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span>
        <span style="color: #298242;">NA-BAI 1 Escaño</span> 
    
</a>
<br><br>
UPN-PP continua como primera fuerza, pero el PSOE y NA-BAI le saca un escaño de ventaja. UPN-PP gana al PSOE por una ventaja de 15139 votos y el PSOE gana a NA-BAI por 55522 votos
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/13/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #8B4513;">UPN-PP 2 Escaños</span>
        <span style="color: #FF0000;">PSOE 1 Escaño</span>
        <span style="color: #01b59c;">AMAIUR 1 Escaño</span>
        <span style="color: #e99992;">GBAI 1 Escaño</span> 
</a>
<br><br>
UPN-PP las gana, pero la suma de PSOE, AMAIUR y GERO ABAI (Coalición entre Partido Nacionalista Vasco,Atarrabia Taldea,Geroa Socialverdes), saca un escaño de ventaja.UPN-PP gana al PSOE por 53624 votos, el PSOE gana a AMAIUR por 23684 votos y AMAIUR saca 6793 votos sobre GBAI
<br><br>
2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/13/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #8B4513;">UPN-PP 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
        <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
UPN-PP las gana, pero la suma de PODEMOS y PSOE, le saca un escaño de ventaja, mientras EHBILDU (antiguamente AMAIUR) y GEROABAI se hunden. UPN-PP saca 20940 votos sobre PODEMOS, PODEMOS saca 26261 votos sobre el PSOE y el PSOE saca 19844 votos sobre EHBILDU
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/13/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #8B4513;">UPN-PP 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
        <span style="color: #FF0000;">PSOE 1 Escaño</span>
    
</a>
<br><br>
UPN-PP las gana, pero la suma de PODEMOS y PSOE, le saca un escaño de ventaja, mientras EHBILDU (antiguamente AMAIUR) y GEROABAI se hunden. UPN-PP saca 11879 votos sobre PODEMOS, PODEMOS saca 36603 votos sobre el PSOE y el PSOE saca 26642 votos sobre EHBILDU, mientras GERO ABAI continua retrociendo y CIUDADANOS le supera en votos
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/13/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #8B4513;">NAVARRA SUMA + 2 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span>
        <span style="color: #800080;">PODEMOS 1 Escaño</span>

</a>
<br><br>
NAVARRA SUMA + (Coalición electoral entre UPN-PP-CIUDADANOS) las gana, pero la suma de PSOE y PODEMOS le saca un escaño de ventaja. NAVARRA SUMA + saca 13030 votos sobre el PSOE, el PSOE saca 25926 votos sobre PODEMOS, que retrocede y cede un escaño al PSOE y PODEMOS saca 21528 votos sobre EHBILDU
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/13/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #8B4513;">NAVARRA SUMA + 2 Escaños</span>
        <span style="color: #FF0000;">PSOE 1 Escaño</span>
        <span style="color: #01b59c;">EHBILDU 1 Escaño</span>
        <span style="color: #800080;">PODEMOS 1 Escaño</span>

</a>
<br><br>
NAVARRA SUMA + las gana, pero la suma de PSOE, EHBILDU y PODEMOS le saca un escaño de ventaja. NAVARRA SUMA + saca 15344 votos sobre el PSOE, el PSOE saca 27186 votos sobre EHBILDU, que asciende a tercera fuerza a costa del retroceso de PODEMOS, aunque EHBILDU saca solo 1050 votos sobre PODEMOS, que baja a cuarta fuerza
<br><br>
2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/13/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 2 Escaños</span>
        <span style="color: #01b59c;">EHBILDU 1 Escaño</span>
        <span style="color: #0000FF;">PP 1 Escaño</span> 
        <span style="color: #8B4513;">UPN 1 Escaño</span>
        
    
</a>
<br><br>
El PSOE las gana y junto con EHBILDU sacan un escaño de ventaja a PP y UPN. NAVARRA SUMA + se disuelve por orden del lider de UPN en este momento (Javier Esparza) y PP y UPN se presentan por separado (CIUDADANOS no se presenta, tras el fracaso de las elecciones autonómicas y municipales del 28m de 2023), dejando como fuerza más votada al PSOE. El PSOE saca 34599 votos sobre EHBILDU, que sube a segunda fuerza tras el nuevo retroceso del espacio de SUMAR, que les deja sin escaño y se suma al PSOE, EHBILDU saca tan solo 1820 votos sobre el PP y el PP saca tan solo 4946 votos sobre UPN
<br><br>
En conclusión, Navarra es una provincia claramente de izquierdas, ya que, aunque UPN-PP o NAVARRA SUMA+ se ha impuesto en la mayoría de ocasiones, como la fuerza más votada, la suma de las izquierdas saca siempre un escaño más de ventaja, excepto en las primeras elecciones. Además PODEMOS impactó fuertemente en esta comunidad y tras su enorme retroceso es EHBILDU el que recoge el testimonio. Además la disolución de NAVARRA SUMA, dejan a PSOE EHBILDU actualmente en las primeras posiciones

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
        font-family: 'Segoe UI', sans-serif;
        background-color: #f4f4f8;
        margin: 0;
        padding: 20px;
    }
    h1 {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 30px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .boton-con-texto {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 140px;
    }
    .titulo-boton {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 8px;
        text-align: center;
    }
    .button {
        width: 140px;
        height: 90px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
    }
    
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
if (provincia === "Huelva") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Huelva <span class="escaños">5 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/andalucia/huelva" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 3 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span>
        
    </a>
    <br><br>
    UCD gana las primeras elecciones, sacando un escaño de ventaja sobre el PSOE y con 26322 votos sobre el PSOE
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/andalucia/huelva" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 3 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span>


    </a>
    <br><br>
    UCD continua como ganador, sacando un escaño de ventaja sobre el PSOE, al que saca una ventaja de tan solo 3454 votos
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/andalucia/huelva" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 4 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 1 Escaño</span> 
          
    </a>
    <br><br>
    El PSOE las gana, cuadruplicando en escaños a AP-PDP y triplicandole en votos
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/andalucia/huelva" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 4 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PL 1 Escaño</span>
        
    </a>
    <br><br>
    El PSOE las vuelve a ganar, cuadriplicando en escaños y casi triplicando en votos a AP-PDP-PL 
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/andalucia/huelva" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 4 Escaños</span> 
        <span style="color: #0000FF;">PP 1 Escaño</span>
        
    </a>
    <br><br>
    El PSOE las gana, cuadriplicando en escaños y casi triplicando en votos al PP
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/andalucia/huelva" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #0000FF;">PP 2 Escaños</span>
                
                </a>
                <br><br>
                El PSOE sigue ganando, sacando un escaño de ventaja al PP y con una ventaja de 65805 votos
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/andalucia/huelva" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span>
        <span style="color: #0000FF;">PP 2 Escaños</span>
</a>
<br><br>
El PSOE sigue ganando, sacando un escaño de ventaja al PP, al que aventaja en 48377 votos
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/andalucia/huelva" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE-PROGR 3 Escaños</span>
        <span style="color: #0000FF;">PP 2 Escaños</span>
</a>
<br><br>
El PSOE sigue como ganador, sacando un escaño de ventaja al PP y sacandole una ventaja de 16496 votos
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/andalucia/huelva" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
        <span style="color: #0000FF;">PP 2 Escaños</span>
    
</a>
<br><br>
El PSOE continúa como primera fuerza, sacando un escaño de ventaja al PP, al que aventaja en 70406 votos
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/andalucia/huelva" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
        <span style="color: #0000FF;">PP 2 Escaños</span>
    
    
</a>
<br><br>
El PSOE repite como ganador en la provincia, sacando un escaño de ventaja al PP, al que aventaja por 55510 votos
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/01/21.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
Con la mayoría absoluta de Rajoy, el PP gana las elecciones por primera vez, sacando un escaño de ventaja al PSOE, al que aventaja por tan solo 8816 votos
<br><br>
2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/01/21.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    
</a>
<br><br>
El PSOE las gana y sumando a PODEMOS sacan un escaño de ventaja al PP. El PSOE aventaja al PP por 21113 votos y el PP gana a PODEMOS por 35130 votos
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/01/21.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    
</a>
<br><br>
El PSOE las vuelve a ganar y sumando a PODEMOS sacan un escaño de ventaja sobre el PP. El PSOE aventaja al PP por tan solo 6148 votos y el PP dobla a PODEMOS en votos
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/01/21.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>

</a>
<br><br>
El PSOE las gana con enorme y sumando a PODEMOS sacan un escaño de ventaja sobre la suma de PP+CIUDADANOS. El PSOE dobla al PP en votos, el PP tan solo aventaja a CIUDADANOS por 231 votos. CIUDADANOS aventaja a PODEMOS por 10465 votos y PODEMOS logra la cuarta posición y el escaño por una ventaja de 329 votos sobre VOX, que queda fuera
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/01/21.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span> 
    <span style="color: #0000FF;">PP 1 Escaño</span>  

</a>
<br><br>
El PSOE las gana con enorme ventaja, sacando un escaño de ventaja a la suma de VOX+PP. El PSOE gana a VOX por 39171 votos, VOX alcanza la segunda posición y aventaja al PP por solo 3033 votos, mientras PODEMOS retrocede y pierde un escaño, que es ganado por el PSOE
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/01/21/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaño</span> 
    <span style="color: #008000;">VOX 1 Escaño</span> 
    
</a>
<br><br>
El PP las gana y sumando a VOX sacan un escaño de ventaja al PSOE. La ventaja del PP sobre el PSOE es de tan solo 1239 votos y el PSOE dobla a VOX en votos
<br><br>
En conclusión, Huelva es una provincia tradicionalmente de izquierdas, donde el PSOE ha sido la fuerza dominante durante la mayor parte de la democracia. Desde 1982 hasta 2019, con la excepción del 2011, con la mayoría absoluta de Rajoy el PSOE ganó todas las elecciones generales en la provincia, con amplias ventajas en muchos casos, llegando a cuadruplicar en escaños a la derecha en las tres primeras legislaturas de Felipe González. Sin embargo, en los últimos años, la derecha ha conseguido avances significativos con la irrupción de VOX y el "efecto Moreno"

El PP solo ha logrado imponerse en 2011, aprovechando la mayoría absoluta de Rajoy, y en 2023, y aunque en esta última ocasión por pocos votos, tiene a su lado a un VOX muy consolidado. La irrupción de Podemos en 2015 permitió al bloque progresista mantener su ventaja, pero su posterior retroceso ha abierto espacio para la derecha, con VOX consiguiendo representación desde 2019.

Actualmente, la provincia está más disputada que en décadas anteriores. El PP ha conseguido crecer y, junto con VOX, ha logrado romper la hegemonía socialista en 2023. 

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
        font-family: 'Segoe UI', sans-serif;
        background-color: #f4f4f8;
        margin: 0;
        padding: 20px;
    }
    h1 {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 30px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .boton-con-texto {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 140px;
    }
    .titulo-boton {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 8px;
        text-align: center;
    }
    .button {
        width: 140px;
        height: 90px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
    }
    
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

if (provincia === "Ciudad Real") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Ciudad Real <span class="escaños">5 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/castilla-y-leon/ciudad-real" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 3 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 
        
    </a>
    <br><br>
    UCD gana las primeras elecciones, sacando un escaño de ventaja sobre el PSOE y con 22647 votos sobre el PSOE
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/castilla-y-leon/ciudad-real" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 3 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 

    </a>
    <br><br>
    UCD continua como ganador, sacando un escaño de ventaja al PSOE, y con una ventaja sobre el PSOE de tan solo 4900 votos
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/castilla-y-leon/ciudad-real" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 2 Escaños</span> 
          
    </a>
    <br><br>
    El PSOE las gana, sacando un escaño de ventaja a AP-PDP, con una ventaja de 72131 votos
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/castilla-y-leon/ciudad-real" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PL 2 Escaños</span>
        
    </a>
    <br><br>
    El PSOE las vuelve a ganar, sacando un escaño de ventaja a AP-PDP-PL, al que saca una ventaja de 52537 votos
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/castilla-y-leon/ciudad-real" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #0000FF;">PP 2 Escaños</span>
        
    </a>
    <br><br>
    El PSOE las gana, sacando un escaño de ventaja al PP, con una ventaja de 61342 votos sobre el PP
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/castilla-y-leon/ciudad-real" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span>
        <span style="color: #0000FF;">PP 2 Escaños</span>
                    
                
                </a>
                <br><br>
                El PSOE sigue ganando, sacando un escaño de ventaja sobre el PP y con una ventaja de 27744 votos sobre el PP
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/castilla-y-leon/ciudad-real" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span>
        <span style="color: #0000FF;">PP 2 Escaños</span>
</a>
<br><br>
El PSOE sigue ganando, sacando un escaño de ventaja al PP, al que tan solo aventaja por 607 votos
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/castilla-y-leon/ciudad-real" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
        <span style="color: #FF0000;">PSOE-PROGR 2 Escaños</span>
</a>
<br><br>
El PP gana en la provincia, sacando un escaño de ventaja al PSOE-PROGR, con una ventaja de 26662 votos sobre el PSOE
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/castilla-y-leon/ciudad-real" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    
</a>
<br><br>
El PSOE las gana, sacando un escaño de ventaja al PP, con tan solo 4763 votos de ventaja sobre el PP
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/castilla-y-leon/ciudad-real" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    
    
</a>
<br><br>
El PP gana en la provincia y saca un escaño de ventaja sobre el PSOE, al que aventaja por tan solo 3138 votos
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/07/13.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
El PP sigue ganando, sacando un escaño de ventaja sobre el PSOE, al que aventaja en 69401 votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/07/13.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>

</a>
<br><br>
El PP vuelve a ganar, sacando un escaño de ventaja al PSOE, al que aventaja por 21496 votos
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/07/13.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    
</a>
<br><br>
El PP continúa ganando, sacando un escaño de ventaja al PSOE, al que aventaja por 40060 votos
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/07/13.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    <span style="color: #008000;">VOX 1 Escaño</span>  

</a>
<br><br>
El PSOE las gana, pero la suma de PP+CIUDADANOS+VOX le saca un escaño de ventaja. El PSOE aventaja al PP por 31020 votos, el PP aventaja a CIUDADANOS por 18880 votos y CIUDADANOS aventaja a VOX por 10368 votos
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/07/13.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #008000;">VOX 1 Escaño</span>  

</a>
<br><br>
El PSOE sigue ganando, pero la suma de PP y VOX le saca un escaño de ventaja. El PSOE saca 17211 votos sobre el PP y el PP aventaja a VOX por 18785 votos
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/07/13/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaño</span> 
    <span style="color: #008000;">VOX 1 Escaño</span> 
    
</a>
<br><br>
El PP las gana, y sumando a VOX sacan un escaño de ventaja al PSOE. El PP saca 14607 votos sobre el PSOE y el PSOE dobla a VOX en votos
<br><br>
En conclusión, Ciudad Real es una provincia claramente de derechas, donde el PSOE solo ha ganado sumando más que el bloque de derechas en las 5 elecciones en las que se presentó Felipe González y en el año 2004 tras el enorme error del PP con el atentado terrorista. Como provincia perteneciente a las "Castillas" (que son Castilla León y Castilla La Mancha) es de derechas, con la derecha con un escaño de ventaja 

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Ciudad Real</title>
            
    <style>
    body {
        font-family: 'Segoe UI', sans-serif;
        background-color: #f4f4f8;
        margin: 0;
        padding: 20px;
    }
    h1 {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 30px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .boton-con-texto {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 140px;
    }
    .titulo-boton {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 8px;
        text-align: center;
    }
    .button {
        width: 140px;
        height: 90px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
    }
    
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
            <h1 style="color: black;">Guipuzcoa <span class="escaños">7 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/pais-vasco/gipuzkoa" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #298242;">PNV 3 Escaños</span>
        <span style="color: #FF0000;">PSE-PSOE 3 EscañoS</span>
        <span style="color: #DC143C ;">EE 1 Escaño</span>
        
    </a>
    <br><br>
    El PNV gana las primeras elecciones empatando en escaños con el PSE y triplicando en escaños a EUSKADIKO EZKERRA ( coalición y, posteriormente, un partido político español de ideología socialista y vasquista no nacionalista​ del País Vasco y Navarra, que acabó fusionado con la federación vasca del PSOE). El PNV aventaja al PSOE por 9484 votos
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/pais-vasco/gipuzkoa" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #298242;">PNV 2 Escaños</span>
        <span style="color: #FF0000;">PSE-PSOE 2 Escaños</span>
        <span style="color: #01b59c;">HB 1 Escaño</span>
        <span style="color: #FFA500;">UCD 1 Escaño</span>
        <span style="color: #DC143C ;">EE 1 Escaño</span>

    </a>
    <br><br>
    El PNV continúa como ganador, empatando en escaños con el PSOE y doblando a HB,UCD y EE. El PNV aventaja al PSE por 27227 votos, el PSE aventaja a HB por tan solo 2052 votos, HB aventaja a UCD por 7260 votos y UCD aventaja a EE por 8258 votos
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/pais-vasco/gipuzkoa" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #298242;">PNV 3 Escaños</span>
        <span style="color: #FF0000;">PSE-PSOE 2 Escaños</span>
        <span style="color: #01b59c;">HB 1 Escaño</span>
        <span style="color: #DC143C ;">EE 1 Escaño</span>
    
    </a>
    <br><br>
    El PNV las gana sumando un escaño a costa de UCD, que desaparece mientras los demas partidos se mantienen en sus posiciones. El PNV supera al PSOE por 25417 votos, el PSOE supera a HB por 25755 votos, HB supera a EE por 36061 votos 
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/pais-vasco/gipuzkoa" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #298242;">PNV 2 Escaños</span>
        <span style="color: #FF0000;">PSE-PSOE 2 Escaños</span>
        <span style="color: #01b59c;">HB 2 Escaños</span>
        <span style="color: #DC143C ;">EE 1 Escaño</span>
        
        
    </a>
    <br><br>
    El PNV las vuelve a ganar, pero cede un escaño a HB. El PNV gana al PSE por 19179 votos, el PSE supera a HB, por tan solo 304 votos y HB supera a EE por 42795 votos 
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/pais-vasco/gipuzkoa" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #01b59c;">HB 2 Escaños</span>
        <span style="color: #FF0000;">PSE-PSOE 2 Escaños</span>
        <span style="color: #298242;">EUSKO ALKARTASUNA 1 Escaño</span>
        <span style="color: #298242;">PNV 1 Escaño</span>
        <span style="color: #DC143C ;">EE 1 Escaño</span>
        
    </a>
    <br><br>
    HB asciende de tercera a primera fuerza, mientras el PNV pasa de primera a cuarta fuerza. EUSKO ALKARTASUNA se convierte en tercera fuerza.HB supera al PSE por 7955 votos. El PSE supera a EA por 6614 votos, EA supera al PNV por 6279 votos y el PNV supera a EE por 20433 votos
    <br><br>
    <h1 style="color: black;"><span class="escaños">Pasa a 6 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/pais-vasco/gipuzkoa" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSE-PSOE 2 Escaños</span>
        <span style="color: #01b59c;">HB 1 Escaño</span>
        <span style="color: #298242;">EUSKO ALKARTASUNA-UE 1 Escaño</span>
        <span style="color: #298242;">PNV 1 Escaño</span>
        <span style="color: #0000FF;">PP 1 Escaño</span>
        
                </a>
                <br><br>
                El PSE se convierte en ganador duplicando en escaños a HB, que baja segunda posición,EA,PNV y PP, que entra por primera vez. El PSE saca 10101 votos sobre HB, HB saca 9664 votos sobre EA, EA saca tan solo 24450 votos sobre el PNV y el PNV aventaja al PP por 21261 votos
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/pais-vasco/gipuzkoa" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #FF0000;">PSE-PSOE 2 Escaños</span>
                    <span style="color: #298242;">PNV 1 Escaño</span>
        <span style="color: #01b59c;">HB 1 Escaño</span>
        <span style="color: #298242;">EUSKO ALKARTASUNA-UE 1 Escaño</span>
        <span style="color: #0000FF;">PP 1 Escaño</span>    
</a>
<br><br>
El PSE las gana duplicando en escaños a PNV, que asciende de cuarta a seguna fuerza, a HB que baja de segunda a tercera, a EA y a PP.El PSE aventaja al PNV por 11669 votos, el PNV aventaja a HB por 5147 votos, HB aventaja a EA por 14799 votos y EA aventaja al PP por tan solo 1379 votos
<br><br>
2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/pais-vasco/gipuzkoa" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #298242;">PNV 2 Escaños</span>
                    <span style="color: #0000FF;">PP 2 Escaños</span>
                    <span style="color: #FF0000;">PSE-PSOE 1 Escaño</span>
                    <span style="color: #298242;">EUSKO ALKARTASUNA 1 Escaño</span>    
</a>
<br><br>
El PNV asciende a la primera posición, mientras el PP pega un subida desde la quinta a la segunda posición y el PSE cae de primera a tercera fuerza. El PNV supera al PP por 10087 votos, el PP supera al PSOE por tan solo 2965 votos y el PSOE supera a EA por 31206 votos
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/pais-vasco/gipuzkoa" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #298242;">PNV 2 Escaños</span>
                    <span style="color: #FF0000;">PSE-PSOE 2 Escaños</span>
                    <span style="color: #0000FF;">PP 1 Escaño</span>
                    <span style="color: #298242;">EUSKO ALKARTASUNA 1 Escaño</span>            
    
</a>
<br><br>
El PNV las gana y el PSE supera al PP como segunda fuerza, que cae a tercera. El PNV aventaja al PSOE por 17302 votos, el PSOE aventaja al PP por 41196 votos y el PP supera a EA por 13933 votos
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/pais-vasco/gipuzkoa" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSE-PSOE 3 Escaños</span>
        <span style="color: #298242;">PNV 2 Escaños</span>
        <span style="color: #0000FF;">PP 1 Escaño</span>
    
    
</a>
<br><br>
El PSE las gana mientras el PNV baja a segunda fuerza y el PP se convierte en tercera fuerza. El PSE supera al PNV por 49937 votos y el PNV supera al PP por 30045 votos
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/14/20.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #01b59c;">AMAIUR 3 Escaños</span>
        <span style="color: #298242;">PNV 1 Escaño</span>
        <span style="color: #FF0000;">PSE-PSOE 1 Escaño</span>
        <span style="color: #0000FF;">PP 1 Escaño</span>
        
</a>
<br><br>
Con el regreso de la izquierda abertzale, esta gana las elecciones con enorme ventaja sobre PNV,PSE y PP. El PNV saca 5241 votos sobre el PSE y el PSE supera al PP por 27100 votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/14/20.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
        <span style="color: #298242;">PNV 2 Escaños</span>
        <span style="color: #01b59c;">EHBILDU 1 Escaño</span>
        <span style="color: #FF0000;">PSE-PSOE 1 Escaño</span>

</a>
<br><br>
PODEMOS las gana empatando en escaños con el PNV, mientras la izquierda abertzale de EHBILDU retrocede a la tercera posición por este ascenso de PODEMOS, mientras el PP pierde el escaño.PODEMOS supera al PNV por 6816 votos, el PNV supera a EHBILDU por 10163 votos y EHBILDU supera al PSOE por 29350 votos
<br><br>
2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/14/20.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
        <span style="color: #298242;">PNV 2 Escaños</span>
        <span style="color: #01b59c;">EHBILDU 1 Escaño</span>
        <span style="color: #FF0000;">PSE-PSOE 1 Escaño</span>
</a>
<br><br>
PODEMOS las vuelve a ganar, mientras se mantienen las posiciones.PODEMOS supera al PNV por 18853 votos, el PNV supera a EHBILDU por 15230 votos y EHBILDU supera al PSE por 18299 votos
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/14/20.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #298242;">PNV 2 Escaños</span>
        <span style="color: #01b59c;">EHBILDU 2 Escaños</span>
        <span style="color: #FF0000;">PSE-PSOE 1 Escaño</span>
        <span style="color: #800080;">PODEMOS 1 Escaño</span>

</a>
<br><br>
El PNV las gana, EHBILDU sube a segunda fuerza tras el retroceso de PODEMOS, que cae a cuarta fuerza. El PNV supera a EHBILDU por 23205 votos, EHBILDU supera al PSE por 18773 votos y el PSE supera a PODEMOS por 6457 votos
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/14/20.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #298242;">PNV 2 Escaños</span>
        <span style="color: #01b59c;">EHBILDU 2 Escaños</span>
        <span style="color: #FF0000;">PSE-PSOE 1 Escaño</span>
        <span style="color: #800080;">PODEMOS 1 Escaño</span>

</a>
<br><br>
El PNV sigue ganando, mientras se mantienen las demás posiciones. El PNV supera a EHBILDU por 17810 votos, EHBILDU supera al PSE por 29609 votos y el PSE supera a PODEMOS por 11979 votos
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/14/20/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #01b59c;">EHBILDU 2 Escaños</span>
        <span style="color: #FF0000;">PSE-PSOE 2 Escaños</span>
        <span style="color: #298242;">PNV 2 Escaños</span>
    
</a>
<br><br>
EHBILDU las gana marcando un triple empate a escaños con PSE y PNV (que cae a tercera fuerza), aunque las gana por enorme ventaja. EHBILDU supera al PSE por 29612 votos y el PSE supera al PNV por tan solo 2683 votos.
<br><br>
En conclusión, Guipuzcoa es una provincia con una fuerte presencia del nacionalismo vasco y una evolución política marcada por cambios significativos en las principales fuerzas en competencia. Desde la Transición, el PNV ha sido un actor clave, ganando la mayoría de las elecciones hasta la irrupción de la izquierda abertzale y otras fuerzas.

En las primeras elecciones, el PNV y el PSE-PSOE dominaron el panorama político, con Eusko Alkartasuna y Herri Batasuna también obteniendo representación. A partir de los años 90, la izquierda abertzale comenzó a ganar peso electoral, ganando las elecciones en 1989. En 2011, con la aparición de Amaiur, la izquierda independentista logró una victoria clara.

En 2015 y 2016, Podemos irrumpió con fuerza, logrando incluso ganar las elecciones, pero en 2019 comenzó su declive, lo que permitió la recuperación de EH Bildu. Finalmente, en 2023, EH Bildu se impuso como la primera fuerza, aunque con un empate técnico en escaños con el PSE-PSOE y el PNV.

En conclusión, Guipúzcoa es una provincia de fuerte identidad nacionalista, donde el eje político ha oscilado entre el PNV y la izquierda abertzale, con un PSOE que ha mantenido cierta relevancia y un espacio reducido para fuerzas estatales como el PP .La tendencia actual apunta a un fortalecimiento de EH Bildu como principal fuerza, en una provincia claramente de izquierdas
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
        font-family: 'Segoe UI', sans-serif;
        background-color: #f4f4f8;
        margin: 0;
        padding: 20px;
    }
    h1 {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 30px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .boton-con-texto {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 140px;
    }
    .titulo-boton {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 8px;
        text-align: center;
    }
    .button {
        width: 140px;
        height: 90px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
    }
    
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
            <h1 style="color: black;">Tarragona <span class="escaños">5 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/catalunya/tarragona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 2 Escaños</span>
        <span style="color: #FF0000;">PSC-PSOE 1 Escaño</span> 
        <span style="color: #CC0000;">PSUC-PCE 1 Escaño</span> 
        <span style="color: #FF5733;">PDPC 1 Escaño</span>
    </a>
    <br><br>
    UCD gana las primeras elecciones, duplicando en escaños a PSC, PSUC-PCE (El Partido Socialista Unificado de Cataluña fue un partido político catalán de ideología comunista y PDPC. UCD supera al PSC por 9088 votos, el PSC supera a PSUC-PCE por 18581 votos y PSUC-PCE supera a PDPC por 4199 votos
Catalanismo)
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/catalunya/tarragona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSC-PSOE 2 Escaños</span>
        <span style="color: #FFA500;">UCD 2 Escaños</span>
        <span style="color: #CC0000;">PSUC-PCE 1 Escaño</span> 
        
    </a>
    <br><br>
    El PSC las gana empatando en escaños con UCD y duplicando a PSUC-PCE. El PSC gana sobre UCD por 1491 votos, mientras PSUC-PCE gana la tercera posición y el escaño a CIU por tan solo 491 votos
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/catalunya/tarragona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSC-PSOE 3 Escaños</span>
        <span style="color: #40E0D0;">CIU 1 Escaño</span> 
        <span style="color: #ADD8E6;">AP-PDP 1 Escaño</span>
        
    
    </a>
    <br><br>
    El PSC las gana, triplicando en escaños a CIU y a AP-PDP y doblandoles en votos. CIU se convierte en segunda fuerza y gana por 8579 a AP-PDP
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/catalunya/tarragona" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #FF0000;">PSC-PSOE 2 Escaños</span>
        <span style="color: #40E0D0;">CIU 2 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 1 Escaño</span>
    </a>
    <br><br>
    El PSC continúa como ganador, pero empata en escaños con CIU, que le arrebata un escaño, mientras AP-PDP mantiene la tercera fuerza y el escaño. El PSC gana por 16983 votos a CIU
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/catalunya/tarragona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSC-PSOE 2 Escaños</span>
        <span style="color: #40E0D0;">CIU 2 Escaños</span> 
        <span style="color: #0000FF;">PP 1 Escaño</span> 
        
    </a>
    <br><br>
    El PSC continúa como ganador en la provincia, empatando en escaños con CIU, mientras el PP se queda con la tercera posición. El PSC gana a CIU por tan solo 346 votos
    <br><br>
    <h1 style="color: black;"><span class="escaños">Pasa a 6 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/catalunya/tarragona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSC-PSOE 3 Escaños</span>
        <span style="color: #40E0D0;">CIU 2 Escaños</span> 
        <span style="color: #0000FF;">PP 1 Escaño</span> 
                
                </a>
                <br><br>
                El PSC las gana, sacando un escaño de ventaja a CIU y triplicando al PP. El PSC se beneficia del sexto escaño en la provincia y gana a CIU por tan solo 33522 votos
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/catalunya/tarragona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSC-PSOE 3 Escaños</span>
        <span style="color: #40E0D0;">CIU 2 Escaños</span> 
        <span style="color: #0000FF;">PP 1 Escaño</span> 
</a>
<br><br>
El PSC las gana, sacando un escaño de ventaja a CIU y triplicando al PP. El PSC gana a CIU por 25527 votos
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/catalunya/tarragona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSC-PSOE 2 Escaños</span>
        <span style="color: #40E0D0;">CIU 2 Escaños</span> 
        <span style="color: #0000FF;">PP 2 Escaños</span> 
</a>
<br><br>
El PSC repite como fuerza ganadora, empatando en escaños con CIU y el PP, que sube y saca un segundo escaño. El PSC gana a CIU por 4201 votos y CIU gana al PP por 21148 votos 
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/catalunya/tarragona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSC-PSOE 3 Escaños</span>
                    <span style="color: #40E0D0;">CIU 1 Escaño</span> 
                    <span style="color: #c99f00;">ERC 1 Escaño</span>
                    <span style="color: #0000FF;">PP 1 Escaño</span> 
    
</a>
<br><br>
El PSC las gana con enorme ventaja, triplicando en escaños a CIU, ERC y PP. CIU gana a ERC por 6624 votos y ERC gana al PP por 10802 votos
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/catalunya/tarragona" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #FF0000;">PSC-PSOE 4 Escaños</span>
                    <span style="color: #40E0D0;">CIU 1 Escaño</span>
                    <span style="color: #0000FF;">PP 1 Escaño</span> 
    
    
</a>
<br><br>
El PSC sigue ganando y cuadriplica en escaños a CIU y PP y les dobla en votos. CIU gana al PP por 12656 votos
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/09/43.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #40E0D0;">CIU 2 Escaños</span> 
        <span style="color: #FF0000;">PSC-PSOE 2 Escaños</span>
        <span style="color: #0000FF;">PP 2 Escaños</span>
</a>
<br><br>
CIU las gana y empata en escaños con PSC y PP.CIU gana al PSC por 15350 votos, mientras que el PSC gana al PP por 8519 votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/09/43.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #800080;">PODEMOS 1 Escaño</span> 
    <span style="color: #c99f00;">ERC CATSÍ 1 Escaño</span> 
    <span style="color: #FF0000;">PSC-PSOE 1 Escaño</span>               
    <span style="color: #40E0D0;">DL 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span> 
    <span style="color: #0000FF;">PP 1 Escaño</span>
                    
                    
                     
</a>
<br><br>
Reconfiguración de Tarragona. PODEMOS las gana, pero empata en escaños con ERC,PSC,DL,CIUDADANOS y PP. PODEMOS gana a ERC por 11791 votos, ERC gana al PSC por 6250 votos, el PSC gana a DL por 1838 votos, DL gana a CIUDADANOS por 4007 votos y CIUDADANOS gana al PP por 7465 votos
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/09/43.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #800080;">PODEMOS 1 Escaño</span> 
    <span style="color: #c99f00;">ERC CATSÍ 1 Escaño</span> 
    <span style="color: #FF0000;">PSC-PSOE 1 Escaño</span>
    <span style="color: #0000FF;">PP 1 Escaño</span>              
    <span style="color: #40E0D0;">CDC 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>

</a>
<br><br>
PODEMOS las sigue ganando, mientras empata en escaños con ERC,PSC,PP,CDC y CIUDADANOS. PODEMOS gana a ERC por 7474 votos, ERC gana al PSC por 13751 votos, el PSC gana al PP por 2735 votos, el PP gana a CDC por 3941 votos y CDC gana a CIUDADANOS por 8222 votos
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/09/43.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #c99f00;">ERC SOBERANISTES 2 Escaños</span> 
                    <span style="color: #FF0000;">PSC-PSOE 1 Escaño</span>
                    <span style="color: #FF7F00;">CS 1 Escaño</span>
                    <span style="color: #40E0D0;">JUNTS 1 Escaño</span>
                    <span style="color: #800080;">PODEMOS 1 Escaño</span> 
</a>
<br><br>
ERC SOBERANISTES las gana, duplicando en escaños a PSC, CIUDADANOS, JUNTS y PODEMOS.ERC gana al PSC por 24125 votos, el PSC gana a CIUDADANOS por 37193 votos, CIUDADANOS gana a JUNTS por solo 1133 votos y JUNTS gana a PODEMOS, que baja de primera a quinta fuerza, por tan solo 224 votos
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/09/43.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #c99f00;">ERC SOBERANISTES 2 Escaños</span> 
    <span style="color: #FF0000;">PSC-PSOE 2 Escaños</span>
    <span style="color: #40E0D0;">JUNTS 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>

</a>
<br><br>
ERC SOBERANISTES sigue ganando, empatando en escaños con el PSC y duplicando a JUNTS y PODEMOS. ERC gana al PSC por 25141 votos, el PSC crece un escaño a costa de CIUDADANOS, que se hunde y queda por detras de PP y VOX y gana a JUNTS por 22180 y JUNTS gana a PODEMOS por 4997 votos
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/09/43/" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #FF0000;">PSC-PSOE 2 Escaños</span>
                    <span style="color: #c99f00;">ERC 1 Escaño</span>
                    <span style="color: #0000FF;">PP 1 Escaño</span>   
                    <span style="color: #FF69B4;">SUMAR 1 Escaño</span>  
                    <span style="color: #40E0D0;">JUNTS 1 Escaño</span>
    
</a>
<br><br>
El PSC las gana y duplica en escaños a ERC,PP,SUMAR,JUNTS. El PSC duplica a ERC en votos. ERC gana al PP por 4400 votos, el PP gana a SUMAR por 9342 votos, SUMAR gana a JUNTS por tan solo 928 votos y JUNTS gana la quinta posición y el escaño a VOX por 2752 votos 
<br><br>
En conclusión, Tarragona es una provincia con gran diversidad política y constantes cambios en sus equilibrios electorales.

En sus inicios, UCD ganó las primeras elecciones de 1977, pero pronto el PSC-PSOE se consolidó como la fuerza dominante, alcanzando su mayor éxito en 2008, cuando obtuvo 4 de los 6 escaños en disputa. CIU mantuvo una presencia constante como segunda fuerza en varias etapas, mientras que el PP creció progresivamente desde los años 90, logrando su mejor resultado en los 2000 y el 2011 con 2 escaños, siendo únicamente sustituido por CIUDADANOS el 28 de abril de 2019.

A partir de 2015, la política en Tarragona se fragmentó con la irrupción de nuevos partidos como Podemos, Ciudadanos y ERC Soberanistes, rompiendo la hegemonía del bipartidismo tradicional PSC-CIU. Desde 2019, ERC ha sido una de las fuerzas clave, logrando imponerse en dos elecciones consecutivas, aunque en 2023 el PSC recuperó el liderazgo tras el fuerte retroceso del independentismo

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
        font-family: 'Segoe UI', sans-serif;
        background-color: #f4f4f8;
        margin: 0;
        padding: 20px;
    }
    h1 {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 30px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .boton-con-texto {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 140px;
    }
    .titulo-boton {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 8px;
        text-align: center;
    }
    .button {
        width: 140px;
        height: 90px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
    }
    
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
            <h1 style="color: black;">Girona <span class="escaños">5 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/catalunya/girona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF5733;">PDPC 2 Escaños</span>
        <span style="color: #FF0000;">PSC-PSOE 2 Escaños</span> 
        <span style="color: #FFA500;">UCD 1 Escaño</span>
    </a>
    <br><br>
    El PDPC las gana, empatando en escaños con el PSC y doblando a UCD. PDPC gana al PSC por 6528 votos y el PSC gana a UCD por 15516 votos
Catalanismo)
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/catalunya/girona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSC-PSOE 2 Escaños</span> 
        <span style="color: #FFA500;">CC-UCD 2 Escaños</span>
        <span style="color: #FF5733;">CIU 1 Escaño</span>
        
    </a>
    <br><br>
    El PSC las gana, empatando en escaños con UCD y duplicando a CIU. El PSC gana sobre UCD por 7389 votos, mientras UCD gana la segunda posición a CIU por tan solo 204 votos
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/catalunya/girona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #40E0D0;">CIU 2 Escaños</span> 
        <span style="color: #FF0000;">PSC-PSOE 2 Escaños</span>
        <span style="color: #ADD8E6;">AP-PDP 1 Escaño</span>
        
    
    </a>
    <br><br>
    CIU las gana, empatando en escaños con el PSC y doblando a AP-PDP. CIU gana a PSC por 5078 votos
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/catalunya/girona" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #40E0D0;">CIU 3 Escaños</span> 
        <span style="color: #FF0000;">PSC-PSOE 2 Escaños</span>
        
    </a>
    <br><br>
    CIU continua como ganador, tras ganar un escaño a AP-PDP que retrocede y pierde el escaño, sacano un escaño de ventaja sobre el PSOE, al que aventaja por 37847 votos
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/catalunya/girona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #40E0D0;">CIU 3 Escaños</span> 
        <span style="color: #FF0000;">PSC-PSOE 2 Escaños</span>
        
    </a>
    <br><br>
    CIU continúa como ganador en la provincia, sacando un escaño de ventaja al PSC, al que aventaja por 46380 votos
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/catalunya/girona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #40E0D0;">CIU 3 Escaños</span> 
        <span style="color: #FF0000;">PSC-PSOE 2 Escaños</span>
                
                </a>
                <br><br>
                CIU las gana, sacando un escaño de ventaja al PSC, al que aventaja por 44371 votos
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/catalunya/girona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #40E0D0;">CIU 3 Escaños</span> 
        <span style="color: #FF0000;">PSC-PSOE 2 Escaños</span>
</a>
<br><br>
CIU las gana, sacando un escaño de ventaja al PSC, al que aventaja por 16330 votos
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/catalunya/girona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #40E0D0;">CIU 2 Escaños</span> 
        <span style="color: #FF0000;">PSC-PSOE 2 Escaños</span>
        <span style="color: #0000FF;">PP 1 Escaño</span> 
</a>
<br><br>
CIU repite como fuerza ganadora, empatando en escaños con PSC y el PP entra como tercera fuerza y un escaño, restandoselo a CIU.CIU gana al PSC por 37375 votos y el PSC gana al PP por 36749 votos
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 6 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/catalunya/girona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSC-PSOE 2 Escaños</span>
                    <span style="color: #40E0D0;">CIU 2 Escaños</span> 
                    <span style="color: #c99f00;">ERC 2 Escaños</span> 
    
</a>
<br><br>
El PSC las gana, pero la suma de los independentistas de CIU y ERC le doblan en escaños. El PSC gana a CIU por 16161 votos y CIU gana a ERC por 13446 votos
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/catalunya/girona" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSC-PSOE 3 Escaños</span>
                    <span style="color: #40E0D0;">CIU 2 Escaños</span> 
                    <span style="color: #c99f00;">ERC 1 Escaño</span>           
</a>
<br><br>
El PSC sigue ganando y saca un escaño de ventaja a CIU y triplica a ERC, que pierde un escaño en beneficio del PSC. El PSC gana a CIU por 41158 votos y CIU gana a ERC por el doble de votos
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/09/17.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #40E0D0;">CIU 3 Escaños</span> 
        <span style="color: #FF0000;">PSC-PSOE 1 Escaño</span>
        <span style="color: #0000FF;">PP 1 Escaño</span>  
        <span style="color: #c99f00;">ERC 1 Escaño</span>   
</a>
<br><br>
CIU las gana con enorme ventaja y sumando a ERC, duplican en escaños a la suma de PSC y PP. El PSC gana al PP por 16057 votos y el PP gana a ERC por 16617 votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/09/17.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">               
    <span style="color: #40E0D0;">DL 2 Escaños</span>
    <span style="color: #c99f00;">ERC CATSÍ 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span> 
    <span style="color: #FF0000;">PSC-PSOE 1 Escaño</span> 
                               
</a>
<br><br>
DL las gana y sumando los escaños de ERC, duplican en escaños a la suma de PODEMOS y PSC. DL gana a ERC por 5274 votos, ERC gana a PODEMOS por 23816 votos y PODEMOS gana al PSC por 11922 votos
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/09/17.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #c99f00;">ERC CATSÍ 2 Escaños</span>
    <span style="color: #40E0D0;">DL 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span> 
    <span style="color: #FF0000;">PSC-PSOE 1 Escaño</span> 

</a>
<br><br>
ERC las gana y sube a primera fuerza, mientras DL cae a segunda, aunque empatan a escaños y duplican de nuevo en escaños a la suma de PODEMOS y PSC. ERC gana a DL por 9245 votos, DL gana a PODEMOS por 18193 votos y PODEMOS gana al PSC por 14651 votos
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/09/17.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #c99f00;">ERC SOBERANISTES 3 Escaños</span> 
                    <span style="color: #40E0D0;">JUNTS 2 Escaños</span>
                    <span style="color: #FF0000;">PSC-PSOE 1 Escaño</span>
                    
</a>
<br><br>
ERC SOBERANISTES las gana y sumando con JUNTS quintuplican en escaños al PSC. ERC gana a JUNTS por 28113 votos y JUNTS gana al PSC por 20271 votos
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/09/17.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #c99f00;">ERC SOBERANISTES 2 Escaños</span> 
                    <span style="color: #40E0D0;">JUNTS 2 Escaños</span>
                    <span style="color: #FF0000;">PSC-PSOE 1 Escaño</span>
                    <span style="color: #800080;">PODEMOS 1 Escaño</span>

</a>
<br><br>
ERC SOBERANISTES sigue ganando y sumando a JUNTS duplican en escaños a la suma de PSC y PODEMOS, que vuelve a entrar con un escaño que le quita a ERC. ERC gana a JUNTS por tan solo 3872 votos, JUNTS gana al PSC por 35337 votos y el PSC gana a PODEMOS por 19013 votos
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/09/17/" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #FF0000;">PSC-PSOE 2 Escaños</span>
                    <span style="color: #40E0D0;">JUNTS 2 Escaños</span>
                    <span style="color: #c99f00;">ERC 1 Escaño</span>
                    <span style="color: #FF69B4;">SUMAR 1 Escaño</span>   
                    
</a>
<br><br>
El PSC las gana y sumando el escaño de SUMAR, consiguen empatar en escaños con la suma independentista de JUNTS y ERC. El PSC gana a JUNTS por 30197 votos, JUNTS gana a ERC por 15720 votos, ERC gana a SUMAR por 12187 votos y SUMAR gana la cuarta posición y el escaño al PP por 4003 votos
<br><br>
En conclusión, Girona es una provincia en la que, a lo largo de los años, se ha destacado la alternancia de fuerzas políticas, con una fuerte presencia de partidos independentistas como CIU, ERC, y Junts. Aunque en los primeros años las disputas fueron entre partidos como el PDPC, PSC, y UCD, el protagonismo se fue inclinando hacia el independentismo a medida que avanzaba el tiempo, especialmente con la consolidación de ERC y Junts.

El PSC ha tenido una presencia constante en la provincia, alternando victorias con CIU y, más recientemente, con ERC y Junts, pero siempre manteniendo una influencia significativa. Sin embargo, los partidos independentistas han dominado en varias ocasiones, especialmente a partir de 2004, cuando se consolidaron como las fuerzas más representativas de la provincia. La competencia en los últimos años se ha centrado entre ERC, Junts y PSC, con el apoyo de partidos como Sumar y PODEMOS que han buscado desafiar el dominio de los partidos independentistas, aunque sin éxito en la mayoría de los casos.

La tendencia general es que Girona ha sido una provincia donde el voto independentista ha ido en aumento, es la provincia catalana más independentista.
 


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
        font-family: 'Segoe UI', sans-serif;
        background-color: #f4f4f8;
        margin: 0;
        padding: 20px;
    }
    h1 {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 30px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .boton-con-texto {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 140px;
    }
    .titulo-boton {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 8px;
        text-align: center;
    }
    .button {
        width: 140px;
        height: 90px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
    }
    
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
if (provincia === "Toledo") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Toledo <span class="escaños">5 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/castilla-y-leon/toledo" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 2 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span>
        <span style="color: #ADD8E6;">AP-PDP 1 Escaño</span>  
        
    </a>
    <br><br>
    UCD gana las primeras elecciones y sumando el escaño de AP-PDP sacan un escaño de ventaja al PSOE. UCD gana al PSOE por 17935 votos
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/castilla-y-leon/toledo#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 3 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 

    </a>
    <br><br>
    UCD continua como ganador, sacando un escaño de ventaja al PSOE, y con una ventaja sobre el PSOE de 25412 votos
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/castilla-y-leon/toledo#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 2 Escaños</span> 
          
    </a>
    <br><br>
    El PSOE las gana, sacando un escaño de ventaja a AP-PDP, con una ventaja de 39925 votos
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/castilla-y-leon/toledo#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PL 2 Escaños</span>
        
        
    </a>
    <br><br>
    El PSOE las vuelve a ganar, sacando un escaño de ventaja a AP-PDP-PL, con una ventaja de 30266 votos
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/castilla-y-leon/toledo#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #0000FF;">PP 2 Escaños</span>
        
    </a>
    <br><br>
    El PP las vuelve a ganar, sacando un escaño de ventaja al PP, al que aventaja por 36359 votos
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/castilla-y-leon/toledo#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span>
        <span style="color: #0000FF;">PP 2 Escaños</span>
                    
                
                </a>
                <br><br>
                El PSOE sigue ganando, sacando un escaño de ventaja sobre el PP, pero con una ventaja de tan solo 557 votos sobre el PP
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/castilla-y-leon/toledo#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 3 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
El PP las gana, sacando un escaño de ventaja al PSOE con una ventaja de 22051 votos 
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/castilla-y-leon/toledo#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
        <span style="color: #FF0000;">PSOE-PROGR 2 Escaños</span>
</a>
<br><br>
El PP sigue como ganador, sacando un escaño de ventaja al PSOE-PROGR, con una ventaja de 41014 votos sobre el PSOE
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/castilla-y-leon/toledo#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    
</a>
<br><br>
El PP continúa como primera fuerza, sacando un escaño de ventaja al PSOE, con una ventaja de 3518 votos sobre el PSOE 
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 6 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/castilla-y-leon/toledo#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    
    
</a>
<br><br>
El PP repite como ganador en la provincia, empatando en escaños con el PSOE. El PP saca una ventaja de 32517 votos sobre el PSOE
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/07/45.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
Con la mayoria absoluta de Rajoy el PP las gana doblando en escaños al PSOE, al que saca una ventaja de 107906 votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/07/45.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>


</a>
<br><br>
El PP las vuelve a ganar y sumando a CIUDADANOS empatan en escaños a la suma de PSOE y PODEMOS. El PP gana al PSOE por 42432 votos. El PSOE dobla a CIUDADANOS y CIUDADANOS gana la tercera posición frente a PODEMOS por tan solo 688 votos
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/07/45.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    
</a>
<br><br>
El PP las gana y arrebata a CIUDADANOS su diputado, empatando en escaños a la suma de PSOE y PODEMOS. El PP gana al PSOE por 61394 votos y PODEMOS gana la tercera posición frente a CIUDADANOS por 5484 votos
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/07/45.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    <span style="color: #008000;">VOX 1 Escaño</span>  

</a>
<br><br>
El PSOE las gana, pero la suma de PP, CIUDADANOS y VOX le dobla en escaños, el PSOE gana al PP por 36266 votos, el PP gana a CIUDADANOS por 17497 votos y CIUDADANOS gana a VOX por 2697 votos, mientras PODEMOS se hunde y pasa de tercera fuerza a quinta
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/07/45.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #008000;">VOX 2 Escaños</span>  

</a>
<br><br>
El PSOE las vuelve a ganar, pero la suma de PP y VOX le dobla en escaños, el PSOE gana al PP por 21904 votos y el PP gana a VOX por 8329 votos
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/07/45/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaño</span> 
    <span style="color: #008000;">VOX 1 Escaño</span> 
    
</a>
<br><br>
El PP las gana arrebatando un escaño a VOX y sumando este escaño vuelven a doblar en escaños al PSOE, el PP gana al PSOE por 20461 votos y el PSOE gana a VOX por 50028 votos
<br><br>
En conclusión, Toledo es una provincia con una clara inclinación hacia la derecha en términos de suma de bloques, especialmente en los últimos años. El PSOE solo ha ganando en escaños en las cuatro legislaturas de Felipe González, en 1993 lo hizo por muy poca ventaja. El bloque de la derecha (PP, VOX y en su momento Ciudadanos) ha tendido a imponerse en la distribución final de escaños. 

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Toledo</title>
            
    <style>
    body {
        font-family: 'Segoe UI', sans-serif;
        background-color: #f4f4f8;
        margin: 0;
        padding: 20px;
    }
    h1 {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 30px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .boton-con-texto {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 140px;
    }
    .titulo-boton {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 8px;
        text-align: center;
    }
    .button {
        width: 140px;
        height: 90px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
    }
    
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
            <h1 style="color: black;">Córdoba <span class="escaños">7 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/andalucia/cordoba" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span>
        <span style="color: #FFA500;">UCD 3 Escaños</span>
        <span style="color: #FF0D00;">PCE 1 Escaño</span>  
        
    </a>
    <br><br>
    El PSOE gana las primeras elecciones y sumando el escaño del PCE sacan un escaño de ventaja a UCD. El PSOE gana a UCD por 4879 votos
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/andalucia/cordoba" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #FFA500;">UCD 3 Escaños</span>
        <span style="color: #FF0D00;">PCE 1 Escaño</span> 

    </a>
    El PSOE vuelve a ganar y sumando el escaño del PCE sacan un escaño de ventaja a UCD. El PSOE gana a UCD por tan solo 503 votos
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/andalucia/cordoba" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 5 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 2 Escaños</span> 
          
    </a>
    <br><br>
    El PSOE las gana, sacando tres escaños de ventaja a AP-PDP, doblandoles en votos.
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/andalucia/cordoba" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 4 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PL 2 Escaños</span>
        <span style="color: #d25644;">IU 1 Escaño</span>
        
    </a>
    <br><br>
    El PSOE sigue como vencedor y sumando el escaño de IU, que le arrebata un escaño sacan tres escaños de ventaja a AP-PDP-PL. El PSOE vuelve a doblar en votos a AP-PDP-PL
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/andalucia/cordoba" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 5 Escaños</span> 
        <span style="color: #d25644;">IU 1 Escaño</span>
        <span style="color: #0000FF;">PP 1 Escaño</span>
        
    </a>
    <br><br>
    El PSOE sigue ganando y sumando el escaño del IU de Julio Anguita (que queda por delante en votos del PP) sextuplican en escaños al PP. El PSOE vuelve a duplicar al PP e Izquierda Unida gana al PP por tan solo 545 votos
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/andalucia/cordoba" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 4 Escaños</span> 
                    <span style="color: #0000FF;">PP 2 Escaños</span>
        <span style="color: #d25644;">IU 1 Escaño</span>
    
                </a>
                <br><br>
                El PSOE sigue ganando y sumando el escaño de IU sacan tres escaños de ventaja al PP. El PSOE gana al PP por 101360 votos y el PP gana a IU por 47921 votos
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/andalucia/cordoba" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 4 Escaños</span> 
                    <span style="color: #0000FF;">PP 2 Escaños</span>
        <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
El PSOE sigue como vencedor y sumando el escaño de IU sacan tres escaños de ventaja al PP. El PSOE aventaja al PP por 57504 votos y el PP gana a IU por 71382 votos
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/andalucia/cordoba" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
        <span style="color: #FF0000;">PSOE-PROGR 3 Escaños</span>
        <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
El PP las gana por primera vez, pero la suma de PSOE-PROGR e IU les saca un escaño de ventaja. El PP aventaja al PSOE por tan solo 1441 votos, mientras el PSOE triplica a IU
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/andalucia/cordoba" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    
    
</a>
<br><br>
El PSOE se convierte en ganador arrebatando el escaño a IU, que se hunde y saca un escaño de ventaja al PP. El PSOE aventaja al PP por 79659 votos 
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 6 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/andalucia/cordoba" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    
    
</a>
<br><br>
El PSOE repite como ganador en la provincia, doblando en escaños al PP y aventajandole por 64163 votos
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/01/14.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
</a>
<br><br>
Con la mayoria absoluta de Rajoy el PP las gana, empatando en escaños con el PSOE, al que aventaja por 38700 votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/01/14.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>


</a>
<br><br>
El PSOE las gana y sumando el escaño de PODEMOS, empatan en escaños a la suma de PP y CIUDADANOS. El PSOE aventaja al PP por 7711 votos, el PP gana a PODEMOS por el doble de votos y PODEMOS se coloca como tercera fuerza frente a CIUDADANOS por 12796 votos
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/01/14.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    
</a>
<br><br>
El PP las gana y sumando el escaño de CIUDADANOS empatan en escaños a la suma de PSOE y PODEMOS. El PP gana al PSOE por 14433 votos. El PSOE aventaja a PODEMOS por 54442 votos y PODEMOS gana la tercera posición frente a CIUDADANOS por 29494 votos
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/01/14.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #008000;">VOX 1 Escaño</span>  

</a>
<br><br>
El PSOE las gana con enorme ventaja y sumando a PODEMOS empatan en escaños con la suma de PP, CIUDADANOS y VOX. El PSOE aventaja al PP por 73523 votos, el PP gana a CIUDADANOS por 9292 votos, CIUDADANOS gana a PODEMOS por 10016 votos y PODEMOS gana a VOX por 12967 votos, que entra como quinta fuerza
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/01/14.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #008000;">VOX 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span> 

</a>
<br><br>
El PSOE las vuelve a ganar y sumando a PODEMOS empatan en escaños a la suma de PP y VOX. El PSOE gana al PP por 46762 votos, el PP gana a VOX por 17465 votos y VOX que se convierte en tercera fuerza gana a PODEMOS por 17765 votos, mientras CIUDADANOS se hunde y pasa a quinta fuerza
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/01/14/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaño</span> 
    <span style="color: #008000;">VOX 1 Escaño</span>
    <span style="color: #FF69B4;">SUMAR 1 Escaño</span>  
    
</a>
<br><br>
El PP las gana y sumando a VOX empatan en escaños a la suma de PSOE y SUMAR. El PP gana al PSOE por 25896 votos, el PSOE gana a VOX por 81554 votos y VOX gana a SUMAR la tercera posición por tan solo 932 votos
<br><br>
En conclusión, Córdoba es una provincia históricamente socialista ganando la suma de la izquierda a UCD en los primeros años de democracia, más tarde sacando tres escaños de ventaja al PP e incluso en 1989 cuando Julio Anguita se postula como candidato por Izquierda unida se multiplica por seis al PP y además, IU queda por encima en votos. 
Sin embargo, las victorias contundentes de la izquierda comenzaron a diluirse en 2011, marcando un punto de inflexión en la política cordobesa. Desde entonces, el panorama ha evolucionado hacia un equilibrio entre bloques, aunque surgen nuevos actores como PODEMOS, CIUDADANOS, VOX y SUMAR, la suma de bloques continúa en el empate.
La suma de la izquierda y la derecha permanece hasta la fecha en un empate persistente, consolidando un escenario electoral mucho más disputado que en décadas anteriores.

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
        font-family: 'Segoe UI', sans-serif;
        background-color: #f4f4f8;
        margin: 0;
        padding: 20px;
    }
    h1 {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 30px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .boton-con-texto {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 140px;
    }
    .titulo-boton {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 8px;
        text-align: center;
    }
    .button {
        width: 140px;
        height: 90px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
    }
    
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
            <h1 style="color: black;">Almería <span class="escaños">5 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/andalucia/almeria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 3 Escaños</span> 
        <span style="color: #FF0000;">PSOE 2 Escaños</span>
        
    </a>
    <br><br>
    UCD gana las primeras elecciones y saca un escaño de ventaja al PSOE, al que aventaja por 41296 votos
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/andalucia/almeria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 3 Escaños</span> 
        <span style="color: #FF0000;">PSOE 2 Escaños</span>

    </a>
    UCD vuelve a ganar y saca un escaño de ventaja al PSOE, al que aventaja por 13072 votos
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/andalucia/almeria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 4 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 1 Escaño</span> 
          
    </a>
    <br><br>
    El PSOE las gana, cuadruplicando en escaños a AP-PDP, doblandoles en votos.
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/andalucia/almeria" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 4 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PL 1 Escaño</span> 
    </a>
    <br><br>
    El PSOE sigue como vencedor, cuadruplicando en escaños a AP-PDP-PL, doblandoles en votos
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/andalucia/almeria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 4 Escaños</span> 
        <span style="color: #0000FF;">PP 1 Escaño</span>
        
    </a>
    <br><br>
    El PSOE sigue ganando y cuadruplica en escaños al PP, doblandoles en votos
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/andalucia/almeria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                    <span style="color: #0000FF;">PP 2 Escaños</span>
    
                </a>
                <br><br>
                El PSOE sigue ganando y saca un escaño de ventaja al PP, al que aventaja por 27901 votos
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/andalucia/almeria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                    <span style="color: #0000FF;">PP 2 Escaños</span>
</a>
<br><br>
El PSOE sigue como vencedor y saca un escaño de ventaja al PP, al que aventaja por 19864 votos
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/andalucia/almeria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
        <span style="color: #FF0000;">PSOE-PROGR 2 Escaños</span>
</a>
<br><br>
El PP las gana, sacando un escaño de ventaja al PSOE-PROGR, al que aventaja por 17846 votos
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/andalucia/almeria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    
    
</a>
<br><br>
El PSOE las gana, sacando un escaño de ventaja al PP, al que aventaja por 10434 votos 
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 6 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/andalucia/almeria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
    
    
</a>
<br><br>
El PP las gana, empatando en escaños con el PSOE, al que aventaja por 25644 votos
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/01/04.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
Con la mayoria absoluta de Rajoy el PP las gana, doblando en escaños al PSOE, al que aventaja por 86754 votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/01/04.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>


</a>
<br><br>
El PP las gana y sumando el escaño de CIUDADANOS, empatan en escaños a la suma de PSOE y PODEMOS, el PP gana al PSOE por 28385 votos, el PSOE gana a CIUDADANOS por el doble de votos y CIUDADANOS gana la tercera posición a PODEMOS por 4838 votos
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/01/04.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    
</a>
<br><br>
El PP las gana y sumando el escaño de CIUDADANOS doblan en escaños al PSOE. El PP gana un escaño a costa del leve retroceso de PODEMOS y gana al PSOE por 46860 votos, el PSOE gana a CIUDADANOS por el doble de votos y CIUDADANOS gana la tercera posición y el escaño a PODEMOS por 1672 votos
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/01/04.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span> 
    <span style="color: #FF7F00;">CS 1 Escaño</span> 

</a>
<br><br>
El PSOE las gana, pero la suma de PP, VOX y CIUDADANOS dobla en escaños al PSOE. El PSOE gana al PP por 24694 votos, el PP gana a VOX por 11045 votos y VOX gana a CIUDADANOS por 6557 votos
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/01/04.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 

</a>
<br><br>
El PSOE las vuelve a ganar, pero la suma de VOX y PP le duplica en escaños. El PSOE gana a VOX por 8581 votos y VOX gana al PP por 2642, arrebatando el escaño a CIUDADANOS, que se hunde y cae a quinta fuerza
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/01/04/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span> 
    <span style="color: #008000;">VOX 1 Escaño</span>
    
</a>
<br><br>
El PP las gana, arrebatando un escaño a VOX, y sumando el escaño de VOX doblan en escaño al PSOE. El PP gana al PSOE por 38242 votos y el PSOE gana a VOX por 24918 votos
<br><br>
En conclusión, Almería es una provincia que ha mostrado una clara tendencia hacia la derecha a lo largo de las últimas décadas. Fue a partir de 1982 cuando el PSOE comenzó a dominar la provincia, especialmente en las primeras elecciones posteriores a la dictadura, con victorias abrumadoras frente a AP-PDP, llegandoles a cuadriplicar en escaños en las primeras legislaturas.
A partir del año 2016 la suma de la derecha entre PP, CIUDADANOS y VOX, a traves de diferentes combinaciones logra duplicar en escaños al PSOE

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
        font-family: 'Segoe UI', sans-serif;
        background-color: #f4f4f8;
        margin: 0;
        padding: 20px;
    }
    h1 {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 30px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .boton-con-texto {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 140px;
    }
    .titulo-boton {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 8px;
        text-align: center;
    }
    .button {
        width: 140px;
        height: 90px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
    }
    
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
if (provincia === "Pontevedra") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Pontevedra <span class="escaños">8 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/galicia/pontevedra" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 6 Escaños</span> 
        <span style="color: #FF0000;">PSOE 1 Escaño</span>
        <span style="color: #ADD8E6;">AP 1 Escaño</span>
        
    </a>
    <br><br>
    UCD gana las primeras elecciones y sumando el escaño de AP multiplican por siete al PSOE en escaños. UCD triplica al PSOE en votos y el PSOE gana a AP por 14538 votos
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/galicia/pontevedra" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 5 Escaños</span> 
        <span style="color: #FF0000;">PSOE 2 Escaños</span>
        <span style="color: #006400;">CD 1 Escaño</span>

    </a>
    UCD vuelve a ganar y sumando el escaño de CD triplican en escaños al PSOE. UCD gana al PSOE por el doble de votos y el PSOE gana a CD por 12167 votos
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/galicia/pontevedra" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #ADD8E6;">AP-PDP 4 Escaños</span> 
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #FFA500;">UCD 1 Escaños</span>
          
    </a>
    <br><br>
    AP-PDP las gana y sumando el escaño de UCD, que retrocede a tercera posición sacan dos escaños de ventaja al PSOE. AP-PDP gana al PSOE por 29328 votos y el PSOE gana a UCD por 49653 votos
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/galicia/pontevedra" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #ADD8E6;">AP-PDP-PL-C 4 Escaños</span> 
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #006400;">CDS 1 Escaño</span>
    </a>
    <br><br>
    AP-PDP-PL-C sigue como vencedor y sumando el escaño de CDS sacan dos escaños de ventaja al PSOE. AP-PDP-PL-C gana al PSOE por 19316 votos y el PSOE gana a CDS por el triple de votos
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/galicia/pontevedra" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #0000FF;">PP 4 Escaños</span>
        <span style="color: #FF0000;">PSOE 4 Escaños</span>
        
    </a>
    <br><br>
    El PSOE las gana, empatando en escaños con el PSOE, al que aventaja por 25468 votos
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/galicia/pontevedra" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 5 Escaños</span>
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
    
                </a>
                <br><br>
                El PP las gana, sacando dos escaños de ventaja al PSOE, al que aventaja por 63979 votos 
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/galicia/pontevedra" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #0000FF;">PP 4 Escaños</span>
                    <span style="color: #FF0000;">PSOE 3 Escaños</span>
                    <span style="color: #74b1e0;">BNG 1 Escaño</span>
</a>
<br><br>
El PP las gana, empatando en escaño a la suma de PSOE y BNG. El PP gana al PSOE por 80653 votos y el PSOE gana al BNG por el doble de votos
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/galicia/pontevedra" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span>
                    <span style="color: #FF0000;">PSOE 2 Escaños</span>
                    <span style="color: #74b1e0;">BNG 1 Escaño</span>
</a>
<br><br>
El PP las gana, superando en tres escaños a la suma de PSOE y BNG, el PP gana al PSOE por el doble de votos y el PSOE gana al BNG por 18381 votos
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 7 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/galicia/pontevedra" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #74b1e0;">BNG 1 Escaño</span>
</a>
<br><br>
El PP las gana, pero la suma de PSOE y BNG le saca un escaño de ventaja. El PP gana al PSOE por 51438 votos y el PSOE triplica en votos al BNG
<br><br>
2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/galicia/pontevedra" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #74b1e0;">BNG 1 Escaño</span>
    
    
</a>
<br><br>
El PP las vuelve a ganar, pero de nuevo, la suma de PSOE y BNG le saca un escaño de ventaja. El PP gana al PSOE por 19360 votos y el PSOE de nuevo triplica al BNG en votos
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/11/36.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #74b1e0;">BNG 1 Escaño</span>
</a>
<br><br>
Con la mayoria absoluta de Rajoy el PP las gana, sacando un escaño de ventaja a la suma de PSOE y BNG. El PP aventaja al PSOE por 127199 votos y el PSOE duplica al BNG en votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/11/36.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span>


</a>
<br><br>
El PP las gana, pero la suma de PODEMOS y PSOE saca un escaño de ventaja al PP, mientras el BNG se queda fuera por primera vez en la historia. El PP gana a PODEMOS por 36978 votos y PODEMOS gana al PSOE por 40524 votos
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/11/36.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    
</a>
<br><br>
El PP las vuelve a ganar, pero de nuevo la suma de PODEMOS y PSOE saca un escaño de ventaja al PP. El PP gana a PODEMOS por 70772 votos y PODEMOS gana al PSOE por 17945 votos
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/11/36.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span> 

</a>
<br><br>
El PSOE las gana y sumando a PODEMOS sacan un escaño de ventaja a la suma de PP y CIUDADANOS. El PSOE gana al PP por 41681 votos, el PP gana a PODEMOS por 42945 votos y PODEMOS gana a CIUDADANOS por 36663 votos
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/11/36.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
</a>
<br><br>
El PSOE las vuelve a ganar y sumando a PODEMOS sacan un escaño de ventaja al PP. El PSOE gana al PP por 14416 votos y el PP gana a PODEMOS por 70920 votos
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/11/36/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
    <span style="color: #FF69B4;">SUMAR 1 Escaño</span>
    
</a>
<br><br>
El PP las gana, pero la suma de PSOE y SUMAR le saca un escaño de ventaja. El PP gana al PSOE por 47921 votos, el PSOE duplica en votos a SUMAR y SUMAR gana la tercera posición y el escaño al BNG por 21787 votos
<br><br>
En conclusión, Pontevedra es una provincia que ha experimentado una evolución política notable, especialmente con respecto a su tendencia hacia la izquierda en las últimas décadas. Durante los primeros años de la democracia, la provincia estuvo dominada por la UCD, que, al igual que otras provincias de Galicia, mantenía un dominio centrado en el espacio de la derecha, con el PSOE teniendo una presencia limitada. De hecho, en los primeros comicios, la suma de UCD y AP multiplicaba con creces al PSOE, con la izquierda quedando rezagada en votos y escaños.

Sin embargo, a medida que avanzaban los años, y en especial a partir de 1982, con la consolidación del Partido Popular (PP) sucesor de AP-PDP, la batalla por la hegemonía en la provincia se fue estrechando. Aunque AP-PDP seguía ganando con una diferencia considerable en escaños, la tendencia se fue acercando, ya que el PSOE obtenía buenos resultados en el número de votos, demostrando un sólido respaldo en la provincia.

El cambio más evidente ocurre a partir de los años 2004, cuando el PP gana, pero con la suma del PSOE y el BNG superandole en escaños cuando la provincia pasa a 7 escaños. Fue en este momento cuando, a pesar de las victorias continuas del PP, la tendencia en la provincia comenzó a virar hacia la izquierda en términos de votos.

El cambio hacia la izquierda se consolidó especialmente después de 2015, cuando la suma de los votos del PSOE y de Podemos ya lograba superar al PP


            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Pontevedra</title>
            
    <style>
    body {
        font-family: 'Segoe UI', sans-serif;
        background-color: #f4f4f8;
        margin: 0;
        padding: 20px;
    }
    h1 {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 30px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .boton-con-texto {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 140px;
    }
    .titulo-boton {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 8px;
        text-align: center;
    }
    .button {
        width: 140px;
        height: 90px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
    }
    
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
            <h1 style="color: black;">Granada <span class="escaños">7 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/andalucia/granada" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 4 Escaños</span> 
        <span style="color: #FF0000;">PSOE 3 Escaños</span>
        
    </a>
    <br><br>
    UCD gana las primeras elecciones sacando un escaño de ventaja al PSOE, al que aventaja por 40752 votos
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/andalucia/granada" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 3 Escaños</span>
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #FF0D00;">PCE 1 Escaño</span> 

    </a>
    UCD las vuelve a ganar, pero la suma del PSOE y el PCE, que arrebata un escaño a UCD le saca un escaño de ventaja. UCD gana al PSOE por 3105 votos y el PSOE duplica al PCE en votos
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/andalucia/granada" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 5 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 2 Escaños</span> 
          
    </a>
    <br><br>
    El PSOE las gana, sacando tres escaños de ventaja a AP-PDP, doblandoles en votos.
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/andalucia/granada" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 5 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PL 2 Escaños</span>
        
    </a>
    <br><br>
    El PSOE sigue como vencedor, sacando tres escaños de ventaja a AP-PDP-PL, doblandoles en votos
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/andalucia/granada" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 4 Escaños</span> 
        <span style="color: #0000FF;">PP 2 Escaños</span>
        <span style="color: #d25644;">IU 1 Escaño</span>
        
    </a>
    <br><br
    El PSOE sigue ganando y sumando el escaño del IU de Julio Anguita, sacan tres escaños de ventaja al PP. El PSOE duplica en votos al PP y el PP duplica en votos a IU
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/andalucia/granada" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 4 Escaños</span> 
                    <span style="color: #0000FF;">PP 3 Escaños</span>
    
                </a>
                <br><br>
                El PSOE sigue ganando, sacando un escaño de ventaja al PP, al que aventaja por 68582 votos
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/andalucia/granada" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                    <span style="color: #0000FF;">PP 3 Escaños</span>
        <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
El PSOE sigue como vencedor y sumando el escaño de IU sacan un escaño de ventaja al PP. El PSOE gana al PP por 41397 votos y el PP triplica en votos a IU
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/andalucia/granada" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE-PROGR 4 Escaños</span>
        <span style="color: #0000FF;">PP 3 Escaños</span>
        
</a>
<br><br>
PSOE-PROGR las gana sacando un escaño de ventaja al PP, al que aventaja por 8144 votos
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/andalucia/granada" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    
    
</a>
<br><br>
El PSOE se convierte en ganador sacando un escaño de ventaja al PP, al que aventaja por 75386 votos 
<br><br>
2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/andalucia/granada" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span> 

    
</a>
<br><br>
El PSOE repite como ganador en la provincia,sacando un escaño de ventaja al PP, al que aventaja por 47100 votos
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/01/18.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
</a>
<br><br>
Con la mayoria absoluta de Rajoy el PP las gana por primera vez, sacando un escaño de ventaja al PSOE, al que aventaja por 51918 votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/01/18.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>


</a>
<br><br>
El PP las gana y sumando el escaño de CIUDADANOS sacan un escaño de ventaja a la suma de PSOE y PODEMOS. El PP gana al PSOE por tan solo 743 votos, el PSOE gana a PODEMOS por 74534 votos y PODEMOS gana la tercera posición frente a CIUDADANOS por 12454 votos
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/01/18.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    
</a>
<br><br>
El PP las vuelve a ganar y de nuevo, sumando el escaño de CIUDADANOS sacan un escaño de ventaja a la suma de PSOE y PODEMOS. El PP gana al PSOE por 21243 votos, el PSOE gana a PODEMOS por 64796 votos y PODEMOS gana a CIUDADANOS por 20430 votos
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/01/18.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    <span style="color: #008000;">VOX 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>  

</a>
<br><br>
El PSOE las gana con enorme ventaja y sumando a PODEMOS, aunque cae a quinta fuerza, sacan un escaño de ventaja a la suma de PP, CIUDADANOS y VOX. El PSOE gana al PP por 80497 votos, el PP gana a CIUDADANOS por 5711 votos, CIUDADANOS gana a VOX por 16945 votos y VOX gana a PODEMOS por 2601 votos
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/01/18.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #008000;">VOX 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span> 

</a>
<br><br>
El PSOE las vuelve a ganar y sumando a PODEMOS sacan un escaño de ventaja a la suma de PP y VOX. El PSOE gana al PP por 54998 votos, el PP gana a VOX por 5264 votos y VOX gana a PODEMOS por 40597 votos
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/01/18/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span> 
    <span style="color: #008000;">VOX 1 Escaño</span>
    <span style="color: #FF69B4;">SUMAR 1 Escaño</span>  
    
</a>
<br><br>
El PP las gana y sumando a VOX sacan un escaño de ventaja a la suma de PSOE y SUMAR. El PP gana al PSOE por 20134 votos, el PSOE dobla en votos a VOX y VOX gana a SUMAR por 22513 votos
<br><br>
En conclusión, Granada es una provincia con una tradición socialista que ha sido clave en su historia política desde los primeros años de la democracia. El año 2011 marcó un punto de inflexión. Con la mayoría absoluta de Mariano Rajoy, el PP logró su primera victoria en Granada, ganando 4 escaños frente a los 3 del PSOE. 
A partir de entonces de la cuatro elecciones siguientes, las dos primeras las gana el bloque de derechas y las los últimas las gana el bloque de izquierdas. En los últimos años, el "efecto Moreno" —la figura del presidente de la Junta de Andalucía, Juanma Moreno— ha tenido un impacto significativo en las elecciones granadinas. Su ascenso en la política andaluza, junto con su perfil moderado y su habilidad para conectar con una parte del electorado tradicionalmente socialista, ha contribuido a la consolidación del PP en la provincia.
Además tambien la irrupción de VOX ha afectado a la provincia consolidando a la provincia a una tendencia a la derecha
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
        font-family: 'Segoe UI', sans-serif;
        background-color: #f4f4f8;
        margin: 0;
        padding: 20px;
    }
    h1 {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 30px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .boton-con-texto {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 140px;
    }
    .titulo-boton {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 8px;
        text-align: center;
    }
    .button {
        width: 140px;
        height: 90px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
    }
    
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
            <h1 style="color: black;">Asturias <span class="escaños">10 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/asturias" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #FF0000;">PSOE 4 Escaños</span>
        <span style="color: #FFA500;">UCD 4 Escaños</span>
        <span style="color: #ADD8E6;">AP 1 Escaño</span>
        <span style="color: #FF0D00;">PCE 1 Escaño</span>
    </a>
    <br><br>
    El PSOE gana las primeras elecciones y sumando al PCE, empatan en escaños a la suma de UCD y AP. El PSOE gana a UCD por 5007 votos. UCD duplica a AP y AP gana al PCE por 17635 votos
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/asturias/asturias" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 4 Escaños</span>
        <span style="color: #FFA500;">UCD 4 Escaños</span>
        <span style="color: #FF0D00;">PCE 1 Escaño</span>
        <span style="color: #006400;">CD 1 Escaño</span>

    </a>
    El PSOE las gana y sumando al PCE, que sube a tercera fuerza, empatan en escaños con la suma de UCD y CD. El PSOE gana a UCD por 22887 votos, UCD duplica al PCE y el PCE gana a CD por 27379 votos
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/asturias/asturias" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 6 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 3 Escaños</span> 
        <span style="color: #FF0D00;">PCE 1 Escaño</span> 
    </a>
    <br><br>
    El PSOE las vuelve a ganar y sumando al PCE, sacan cuatro escaños de ventaja a AP-PDP. El PSOE gana a AP-PDP por 157610 votos y AP-PDP triplica al PCE
    <br><br>
    <h1 style="color: black;"><span class="escaños">Pasa a 9 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/asturias/asturias" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 5 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PL 2 Escaños</span>
        <span style="color: #006400;">CD 1 Escaño</span>
        <span style="color: #d25644;">IU 1 Escaño</span>
    </a>
    <br><br>
    El PSOE sigue como vencedor y sumando el escaño de IU doblan en escaños a la suma de AP-PDP-PL y CD. El PSOE gana a AP-PDP-PL por 113875 votos, AP-PDP-PL duplica a CD y CD gana al PCE por 23907 votos
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/asturias/asturias" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 4 Escaños</span> 
        <span style="color: #0000FF;">PP 3 Escaños</span>
        <span style="color: #d25644;">IU 1 Escaño</span>
        <span style="color: #006400;">CDS 1 Escaño</span>
    </a>
    <br><br>
    El PSOE las gana y sumando el escaño de IU, que sube a tercera fuerza sacan un escaño de ventaja a la suma del PP y CDS. El PSOE gana al PP por 85994 votos, el PP gana a IU por 67096 votos e IU supera a CDS por 18851 votos
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/asturias/asturias" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 4 Escaños</span> 
                    <span style="color: #0000FF;">PP 4 Escaños</span>
                    <span style="color: #d25644;">IU 1 Escaño</span>
    
                </a>
                <br><br>
                El PSOE sigue como vencedor y sumando el escaño de IU sacan un escaño de ventaja al PP. El PSOE gana al PP por 13522 votos y el PP dobla a IU
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/asturias/asturias" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 4 Escaños</span>
                    <span style="color: #FF0000;">PSOE 4 Escaños</span> 
                    <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
El PP las gana por primera vez, pero la suma de PSOE e IU le saca un escaño de ventaja. El PP gana al PSOE por 8521 votos y el PSOE dobla a IU
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/asturias/asturias" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #0000FF;">PP 5 Escaños</span>
        <span style="color: #FF0000;">PSOE-PROGR 3 Escaños</span>
        <span style="color: #d25644;">IU 1 Escaño</span>
        
</a>
<br><br>
El PP las gana sacando un escaño de ventaja a la suma de PSOE-PROGR e IU. El PP gana al PSOE-PROGR por 60796 votos y el PSOE-PROGR triplica a IU
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 8 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/asturias/asturias" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    
    
</a>
<br><br>
El PP las gana empatando en escaños con el PSOE, con una ventaja de tan solo 2737 votos 
<br><br>
2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/asturias/asturias" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 4 Escaños</span> 

    
</a>
<br><br>
El PSOE las gana empatando en escaños con el PP, al que aventaja en 37172 votos
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/03/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #014586;">FA 1 Escaño</span>
    <span style="color: #d25644;">IU-IX 1 Escaño</span>
</a>
<br><br>
El PP las gana y sumando el escaño de FA (FORO ASTURIAS) empatan en escaños a la suma de PSOE e IU. El PP gana al PSOE por 38380 votos, el PSOE dobla a FA y FA se coloca como tercera fuerza con 9073 votos de ventaja sobre IU
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/03/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>


</a>
<br><br>
El PP las gana y sumando el escaño de CIUDADANOS empatan en escaños a la suma de PSOE y PODEMOS. El PP gana al PSOE por 42569 votos, el PSOE gana a PODEMOS por 12010 y PODEMOS gana a CIUDADANOS por 48122 votos
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/03/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    
</a>
<br><br>
El PP las vuelve a ganar y sumando el escaño de CIUDADANOS empatan en escaños a la suma de PSOE y PODEMOS. El PP gana al PSOE por 61475 votos, el PSOE gana a PODEMOS por 6278 votos y PODEMOS gana a CIUDADANOS por 65688 votos 
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 7 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/03/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>  
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    <span style="color: #008000;">VOX 1 Escaño</span>

</a>
<br><br>
El PSOE las gana con enorme ventaja y sumando a PODEMOS, sacan un escaño de ventaja a la suma de PP, CIUDADANOS y VOX. El PSOE gana al PP por 94575 votos, el PP gana a PODEMOS por 4711 votos, PODEMOS gana a CIUDADANOS por 2766 votos y CIUDADANOS gana a VOX por 32410 votos
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/03/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #800080;">PODEMOS 1 Escaño</span> 
    <span style="color: #008000;">VOX 1 Escaño</span>

</a>
<br><br>
El PSOE las vuelve a ganar y sumando el escaño de PODEMOS sacan un escaño de ventaja a la suma de PP y VOX. El PSOE gana al PP por 56266 votos, el PP gana a PODEMOS por 40644 votos y PODEMOS se coloca en la tercera posición por tan solo una ventaja de 513 votos sobre VOX
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/03/33/#?int=widgetEP" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaño</span> 
    <span style="color: #FF69B4;">SUMAR 1 Escaño</span> 
    <span style="color: #008000;">VOX 1 Escaño</span> 
    
</a>
<br><br>
El PP las gana y sumando a VOX sacan un escaño de ventaja a la suma de PSOE y SUMAR. El PP gana al PSOE por 7767 votos, el PSOE dobla a SUMAR y SUMAR gana la tercera posición sobre VOX por 14059 votos. A pesar de que la derecha gana en escaños, la izquierda gana en votos
<br><br>
En conclusión, Asturias es una provincia claramente de izquierdas. Desde las primeras elecciones de 1977, el PSOE se posicionó como la fuerza dominante en Asturias, ganando con ventaja sobre UCD y estableciendo una tendencia de liderazgo que se consolidó en 1982 con la gran victoria socialista a nivel nacional. En esa elección, el PSOE consiguió 6 escaños, dejando a la derecha con solo 3 y mostrando su arraigo en una comunidad con un fuerte peso del movimiento obrero e industrial. Este resultado del 6-3 marcó una época en la que el PSOE gobernaba con autoridad en la región, y en la que IU o el PCE se mantenían como un socio menor dentro del bloque de izquierdas
El PP consiguió una victoria histórica con 5 escaños en el año 2000 frente a los 3 del PSOE-PROGR y el 1 de IU. En el año 2023, aun con la derecha ganando en escaños, la izquierda aún mantiene una mayoría de votos en la comunidad, lo que indica que Asturias sigue siendo una provincia en la que la izquierda sigue teniendo un gran peso, prueba de ello es el 
gobierno autonómico de Asturias, que es uno de los pocos que resistió el 28m al cambio, donde PSOE+IU+PODEMOS suman mayoría absoluta. Más alla del análisis electoral. Asturias no solo ha experimentado cambios en su mapa político, sino que también ha sido la provincia que más ha sufrido en términos de representación parlamentaria. En democracia, ha pasado de elegir 10 diputados en 1977 a solo 7 desde 2019, reflejando un declive demográfico y una pérdida de peso político en el conjunto de España.
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
        font-family: 'Segoe UI', sans-serif;
        background-color: #f4f4f8;
        margin: 0;
        padding: 20px;
    }
    h1 {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 30px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .boton-con-texto {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 140px;
    }
    .titulo-boton {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 8px;
        text-align: center;
    }
    .button {
        width: 140px;
        height: 90px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
    }
    
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
if (provincia === "Zaragoza") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Zaragoza <span class="escaños">8 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #FFA500;">UCD 3 Escaños</span>
        <span style="color: #FF0000;">PSOE 3 Escaños</span>
        <span style="color: #FF6767;">PSP-US 1 Escaño</span>
        <span style="color: #c2272c;">CAIC 1 Escaño</span>
    </a>
    <br><br>
    UCD las gana y sumando el escaño de CAIC (Candidatura Aragonesa Independiente de Centro1​ (CAIC) fue un partido político de España. El CAIC se fundó en 1977 por disidentes de la Unión de Centro Democrático (UCD). La historia del partido fue breve al disolverse en enero de 1978 para formar un nuevo partido: el Partido Aragonés Regionalista.)
    empatan en escaños a la suma de PSOE y PSP-US (El Partido Socialista Popular (PSP), originalmente fundado como Partido Socialista del Interior (PSI), fue un partido político español de ideología socialista, liderado por Enrique Tierno Galván. A pesar de que logró obtener algunos escaños en las elecciones de 1977, al año siguiente se integró en el PSOE.)
    UCD gana al PSOE por 27282 votos, el PSOE dobla a PSP-US y PSP-US gana a CAIC por 9554 votos
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/aragon/zaragoza" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 4 Escaños</span>
        <span style="color: #FF0000;">PSOE 3 Escaños</span>
        <span style="color: #c99f00;">PAR 1 Escaño</span>

    </a>
    UCD las gana y sumando el escaño del PAR sacan dos escaños de ventaja al PSOE. UCD gana al PSOE por 39857 votos y el PSOE duplica al PAR
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/aragon/zaragoza" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 5 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PAR 3 Escaños</span>  
    </a>
    <br><br>
    El PSOE las gana, sacando dos escaños de ventaja a AP-PDP-PAR. El PSOE gana a AP-PDP-PAR por 98602 votos
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/aragon/zaragoza" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 4 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PL 2 Escaños</span>
        <span style="color: #c99f00;">PAR 1 Escaño</span>
        <span style="color: #006400;">CDS 1 Escaño</span> 
    </a>
    <br><br>
    El PSOE sigue como vencedor, empatando en escaños a la suma de AP-PDP-PL, PAR y CDS. El PSOE gana a AP-PDP-PL por 83871 votos, AP-PDP-PL dobla al PAR y el PAR gana a CDS por 3388 votos 
    <br><br>
    <h1 style="color: black;"><span class="escaños">Pasa a 7 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/aragon/zaragoza" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #0000FF;">PP 2 Escaños</span>
        <span style="color: #d25644;">IU 1 Escaño</span>
        <span style="color: #c99f00;">PAR 1 Escaño</span>
    </a>
    <br><br>
    El PSOE las gana y sumando el escaño de IU sacan un escaño de ventaja a la suma del PP y el PAR. El PSOE gana al PP por 48379 votos, el PP duplica a IU e IU gana la tercera posición al PAR por 2967 votos
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/aragon/zaragoza" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                    <span style="color: #0000FF;">PP 2 Escaños</span>
                    <span style="color: #c99f00;">PAR 1 Escaño</span>
                    <span style="color: #d25644;">IU 1 Escaño</span>
    
                </a>
                <br><br>
                El PSOE sigue como vencedor y sumando el escaño de IU sacan un escaño de ventaja a la suma de PP y PAR. El PSOE gana al PP por 1308 votos, el PP gana al PAR por 64063 votos y el PAR gana la tercera posición a IU por 48616 votos
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/aragon/zaragoza" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP-PAR 4 Escaños</span>
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                    
</a>
<br><br>
El PP-PAR las gana sacando un escaño de ventaja al PSOE, al que aventaja por 89301 votos
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/aragon/zaragoza" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #0000FF;">PP 4 Escaños</span>
        <span style="color: #FF0000;">PSOE-PROGR 2 Escaños</span>
        <span style="color: #ab001c;">CHA 1 Escaño</span>
        
</a>
<br><br>
El PP las gana sacando un escaño de ventaja a la suma de PSOE-PROGR y CHA. El PP gana al PSOE-PROGR por 94731 votos y el PSOE-PROGR dobla a la Chunta Aragonesista
<br><br>
2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/aragon/zaragoza" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #ab001c;">CHA 1 Escaño</span>
    
    
</a>
<br><br>
El PSOE las gana y sumando a CHA sacan un escaño de ventaja al PP. El PSOE gana al PP por 26296 votos y el PP duplica a CHA.
<br><br>
2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/aragon/zaragoza" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span> 

    
</a>
<br><br>
El PSOE las gana sacando un escaño de ventaja al PP mientras la Chunta se hunde y cede el escaño al PSOE. El PSOE gana al PP por 54545 votos
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/02/50.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #01c6a4;">La Izquierda de Aragón: La Izquierda Plural 1 Escaño</span>
</a>
<br><br>
El PP las gana sacando un escaño de ventaja a la suma de PSOE y La Izquierda de Aragón: La Izquierda Plural. El PP gana al PSOE por 82907 votos y el PSOE duplica a La Izquierda de Aragón: La Izquierda Plural
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/02/50.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>


</a>
<br><br>
El PP las gana y sumando el escaño de CIUDADANOS sacan un escaño de ventaja a la suma de PSOE y PODEMOS. El PP gana al PSOE por 42599 votos, el PSOE gana a PODEMOS por 16553 votos y PODEMOS gana a CIUDADANOS la tercera posición por 7389 votos
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/02/50.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    
</a>
<br><br>
El PP las gana y sumando el escaño de CIUDADANOS sacan un escaño de ventaja a la suma de PSOE y PODEMOS. El PP gana al PSOE por 53706 votos, el PSOE gana a PODEMOS por 21491 votos y PODEMOS gana a CIUDADANOS la tercera posición por 17474 votos 
<br><br>
2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/02/50.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>  
    <span style="color: #008000;">VOX 1 Escaño</span>

</a>
<br><br>
El PSOE las gana con enorme ventaja y sumando a PODEMOS sacan un escaño de ventaja a la suma de CIUDADANOS, PP y VOX. El PSOE gana a CIUDADANOS por 57676 votos, CIUDADANOS como segunda fuerza gana al PP por 15919 votos, el PP gana a PODEMOS por 22113 votos y PODEMOS gana a VOX, que entra como quinta fuerza por 6677 votos
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/02/50.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span> 
    <span style="color: #800080;">PODEMOS 1 Escaño</span> 

</a>
<br><br>
El PSOE las vuelve a ganar y sumando el escaño de PODEMOS sacan un escaño de ventaja a la suma de PP y VOX. El PSOE gana al PP por 38417 votos, el PP gana a VOX por 27556 votos y VOX gana a PODEMOS por 34478 votos
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/02/50/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaño</span> 
    <span style="color: #008000;">VOX 1 Escaño</span> 
    <span style="color: #FF69B4;">SUMAR 1 Escaño</span> 
    
</a>
<br><br>
El PP las gana y sumando a VOX sacan un escaño de ventaja a la suma de PSOE y SUMAR. El PP gana al PSOE por 26918 votos, el PSOE dobla a VOX y VOX gana a SUMAR por 9811 votos
<br><br>
En conclusión, Zaragoza es una provincia que no podriamos situar ni en la izquierda ni en la derecha. Como provincia aragonesa, el que resulta ganador, tambien lo resulta a nivel nacional.
Su electorado es pragmático y cambia en función del contexto nacional. De ahí que su ganador, elección tras elección, coincida con el partido que gobierna España,convirtiéndose en un termómetro electoral clave
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Zaragoza</title>
            
    <style>
    body {
        font-family: 'Segoe UI', sans-serif;
        background-color: #f4f4f8;
        margin: 0;
        padding: 20px;
    }
    h1 {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 30px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .boton-con-texto {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 140px;
    }
    .titulo-boton {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 8px;
        text-align: center;
    }
    .button {
        width: 140px;
        height: 90px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
    }
    
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
if (provincia === "Santa Cruz de Tenerife") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Santa Cruz de Tenerife <span class="escaños">7 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/canarias/santa-cruz-de-tenerife" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #FFA500;">UCD 5 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span>
    </a>
    <br><br>
    UCD gana las primeras elecciones sacando tres escaños de ventaja al PSOE al que duplica en votos
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/canarias/santa-cruz-de-tenerife" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 5 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span>

    </a>
    <br><br>
    UCD las vuelve a ganar sacando tres escaños de ventaja al PSOE al que duplica en votos
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/canarias/santa-cruz-de-tenerife" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 4 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 2 Escaños</span> 
        <span style="color: #FFA500;">UCD 1 Escaño</span> 
    </a>
    <br><br>
    El PSOE las gana, sacando un escaño de ventaja a la suma de AP-PDP y UCD. El PSOE gana a AP-PDP por 52075 votos
    <br><br>
    <h1 style="color: black;"><span class="escaños">Pasa a 6 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/canarias/santa-cruz-de-tenerife" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #041595;">AIC 1 Escaño</span>
        <span style="color: #ADD8E6;">AP-PDP-PL 1 Escaño</span>
        <span style="color: #006400;">CDS 1 Escaño</span> 
    </a>
    <br><br>
    El PSOE sigue como vencedor, empatando en escaños a la suma de AIC (Las Agrupaciones Independientes de Canarias constituyeron una federación de partidos políticos españoles de ámbito canario existente desde 1985 hasta su integración en Coalición Canaria, de centroderecha), AP-PDP-PL y CDS. El PSOE dobla a AIC.AIC gana a AP-PDP-PL por tan solo 1091 votos y AP-PDP-PL gana a CDS por 18436 votos
    <br><br>
    <h1 style="color: black;"><span class="escaños">Pasa a 7 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/canarias/santa-cruz-de-tenerife" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 4 Escaños</span> 
        <span style="color: #041595;">AIC 1 Escaño</span>
        <span style="color: #0000FF;">PP 1 Escaño</span>
        <span style="color: #006400;">CDS 1 Escaño</span> 
    </a>
    <br><br>
    El PSOE las gana sacando un escaño de ventaja a la suma de AIC, PP y CDS. El PSOE duplica a AIC. AIC gana al PP por tan solo 1834 votos y el PP gana a CDS por 24824 votos
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/canarias/santa-cruz-de-tenerife" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                    <span style="color: #0000FF;">PP 2 Escaños</span>
                    <span style="color: #01add7;">CCA 2 Escaños</span>
    
                </a>
                <br><br>
                El PSOE sigue como vencedor, pero la suma de PP y CCA le saca un escaño de ventaja. El PSOE gana al PP por 22746 votos y el PP gana a Coalición Canaria por 10371 votos
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/canarias/santa-cruz-de-tenerife" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                    <span style="color: #0000FF;">PP 2 Escaños</span>
                    <span style="color: #01add7;">CCA 2 Escaños</span>
                    
</a>
<br><br>
El PSOE las vuelve a ganar, pero de nuevo la suma de PP y CCA le saca un escaño de ventaja. El PSOE gana al PP por 8779 votos y el PP gana a CCA por 25621 votos
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/canarias/santa-cruz-de-tenerife" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 3 Escaños</span>
                    <span style="color: #01add7;">CCA 2 Escaños</span>
                    <span style="color: #FF0000;">PSOE-PROGR 2 Escaños</span> 
        
</a>
<br><br>
El PP las gana y sumando a CCA sacan tres escaños de ventaja al PSOE-PROGR, que cae a tercera fuerza. El PP gana a CCA por 5150 votos y CCA gana al PSOE-PROGR por 29518 votos
<br><br>
2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/canarias/santa-cruz-de-tenerife" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #01add7;">CCA 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span>
    
    
    
</a>
<br><br>
El PSOE vuelve a la primera posición y el PP cae a tercera, pero la suma de CCA y el PP sacan un escaño de ventaja al PSOE. El PSOE gana a CCA por 19357 votos y CCA gana al PP por 12124 votos
<br><br>
2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/canarias/santa-cruz-de-tenerife" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #01add7;">CCA-PNC 2 Escaños</span>

    
</a>
<br><br>
El PSOE las gana, pero la suma de PP y CCA-PNC (Coalición Canaria-Partido Nacionalista Canario) le saca un escaño de ventaja. El PSOE gana al PP por 31121 votos y el PP gana a CCA por 4975 votos
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/05/38.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #01add7;">CCA-NC-PNC 1 Escaño</span>
</a>
<br><br>
Con la mayoría absoluta de Rajoy el PP las gana con un resultado histórico y sumando a CCA-NC-PNC (Coalición Canaria, Nueva Canarias y Partido Nacionalista Canario) le sacan tres escaños de ventaja al PSOE. El PP gana al PSOE por 97621 votos y el PSOE gana a CCA-NC-PNC por 17048 votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/05/38.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSOE-NC 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #01add7;">CCA-PNC 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>


</a>
<br><br>
El PP las gana y sumando a CCA-PNC y CIUDADANOS sacan un escaño de ventaja a la suma de PSOE-NC y PODEMOS. El PP gana al PSOE-NC por 35262 votos, PSOE-NC gana a PODEMOS por 8025 votos, PODEMOS gana a CCA-PNC por 34790 votos y CCA-PNC gana a CIUDADANOS por 9844 votos
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/05/38.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #01add7;">CCA-PNC 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    
</a>
<br><br>
El PP las gana sumando un escaño más a costa del PSOE y junto con CCA-PNC y CIUDADANOS sacan tres escaños de ventaja a la suma de PSOE y PODEMOS. El PP gana al PSOE por 61781 votos, el PSOE gana a PODEMOS por 16117 votos, PODEMOS gana a CCA-PNC por 24725 votos y CCA-PNC gana a CIUDADANOS por 7740 votos
<br><br>
2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/05/38.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #01add7;">CCA-PNC 2 Escaños</span>
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>  
    

</a>
<br><br>
El PSOE las gana, pero la suma de CCA-PNC que sube fuerte a segunda posición, PP y CIUDADANOS le saca un escaño de ventaja a la suma de PSOE y PODEMOS. El PSOE gana a CCA-PNC por 38418 votos, CCA-PNC gana al PP por 26146 votos, el PP gana a PODEMOS por tan solo 783 votos y PODEMOS gana a CIUDADANOS por 4061 votos 
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/05/38.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #01add7;">CCA-NC-PNC 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span> 
    <span style="color: #008000;">VOX 1 Escaño</span> 

</a>
<br><br>
El PSOE las vuelve a ganar, pero de nuevo la suma de PP, CCA-NC-PNC y VOX saca un escaño de ventaja a la suma de PSOE y PODEMOS. El PSOE gana al PP por 39084 votos, el PP gana a CCA-NC-PNC por 17173 votos, CCA-NC-PNC gana a PODEMOS por 11648 votos y PODEMOS gana a VOX por 11122 votos
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/05/38/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #01add7;">CCA 1 Escaño</span>
</a>
<br><br>
El PP las gana (VOX no se presenta y el PP gana su escaño) y sumando a CCA sacan un escaño de ventaja al PSOE (El PSOE arrebata el escaño al espacio de PODEMOS). El PP gana al PSOE por 9180 votos y el PSOE gana a CCA por 82785 votos
<br><br>
En conclusión, Santa Cruz de Tenerife es una provincia claramente de centro derecha. La derecha siempre ha sacado entre uno y tres escaños de ventaja a la izquierda. La izquierda solo ha sumado un escaño más a la derecha en las dos primeras legislaturas de Felipe González y en la cuarta. En 1986 (la tercera legislatura), la provincia vive una breve experiencia en la que cae la representación a seis escaños lo que da como resultado un empate entre bloques.
VOX no presentó lista electoral en 2023, de ahí la ausencia del escaño, pero con VOX sacando uno de sus mejores resultados en europeas en Canarias, parece evidentemente, que VOX volverá a recuperar su escaño. En cuánto a Coalición Canaria, esta es la única provincia canaria en la que mantiene representación en generales.
Si bien se abstuvo despues del 10n del 2019 en la investidura de Sánchez y votó a favor después de las del 23 de julio de 2023, votó en contra de la amnistía y cuenta con un vicepresidente del PP en las autónomicas de Canarias, además de haber apoyado la investidura de Feijoo después del 23j, por lo que se les situa en el centro-derecha
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Santa Cruz de Tenerife</title>
            
    <style>
    body {
        font-family: 'Segoe UI', sans-serif;
        background-color: #f4f4f8;
        margin: 0;
        padding: 20px;
    }
    h1 {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 30px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .boton-con-texto {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 140px;
    }
    .titulo-boton {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 8px;
        text-align: center;
    }
    .button {
        width: 140px;
        height: 90px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
    }
    
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
if (provincia === "Baleares") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Baleares <span class="escaños">6 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/illes-balears#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #FFA500;">UCD 4 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span>
    </a>
    <br><br>
    UCD gana las primeras elecciones sacando duplicando en escaños al PSOE al que duplica tambien en votos
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/illes-balears#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 4 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span>

    </a>
    <br><br>
    UCD las vuelve a ganar, duplicando en escaños al PSOE al que aventaja en 58695 votos
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/illes-balears#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 3 Escaños</span>  
    </a>
    <br><br>
    El PSOE las gana, empatando en escaños con AP-PDP, al que aventaja en 9788 votos
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/illes-balears#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PL 3 Escaños</span>
    </a>
    <br><br>
    El PSOE sigue como vencedor, empatando en escaños con AP-PDP-PL, al que aventaja en 20356 votos
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/illes-balears#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #0000FF;">PP 3 Escaños</span> 
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
    </a>
    <br><br>
    El PP las gana empatando en escaños al PSOE, al que aventaja en 21330 votos
    <br><br>
    <h1 style="color: black;"><span class="escaños">Pasa a 7 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/illes-balears#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 4 Escaños</span>
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
    
                </a>
                <br><br>
                El PP sigue como vencedor, sacando un escaño de ventaja al PSOE, al que aventaja en 51316 votos
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/illes-balears#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 4 Escaños</span>
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                    
</a>
<br><br>
El PP las vuelve a ganar, sacando un escaño de ventaja al PSOE, al que aventaja en 39615 votos
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/illes-balears#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 5 Escaños</span>
                    <span style="color: #FF0000;">PSOE-PROGR 2 Escaños</span> 
        
</a>
<br><br>
El PP las gana, sacando tres escaños de ventaja al PSOE-PROGR, al que aventaja en 97833 votos
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 8 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/illes-balears#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #0000FF;">PP 4 Escaños</span>
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    
    
    
</a>
<br><br>
El PP las gana, empatando en escaños al PSOE, al que aventaja en 30114 votos
<br><br>
2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/illes-balears#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 4 Escaños</span>

    
</a>
<br><br>
El PSOE las gana, empatando en escaños al PP, al que aventaja por tan solo 1205 votos
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/04/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
</a>
<br><br>
Con la mayoría absoluta de Rajoy el PP las gana, sacando dos escaños de ventaja al PSOE, al que aventaja en 90815 votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/04/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>


</a>
<br><br>
El PP las gana y sumando a CIUDADANOS empatan en escaños a la suma de PODEMOS y PSOE. El PP gana a PODEMOS por 29126 votos, PODEMOS gana al PSOE por 22874 votos y el PSOE gana a CIUDADANOS por 17096 votos
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/04/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    
</a>
<br><br>
El PP las vuelve a ganar y sumando a CIUDADANOS empatan en escaños a la suma de PODEMOS y PSOE. El PP gana a PODEMOS por 45051 votos, PODEMOS gana al PSOE por 24533 votos y el PSOE gana a CIUDADANOS por 25667 votos
<br><br>
2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/04/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #800080;">PODEMOS-EUIB 2 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #008000;">VOX 1 Escaño</span> 

</a>
<br><br>
El PSOE las gana y sumando a PODEMOS-EUIB (PODEMOS e Izquierda Unida Islas Baleares) sacan un dos escaños de ventaja a la suma de CIUDADANOS, PP y VOX. El PSOE gana a PODEMOS-EUIB por 44117 votos, PODEMOS gana a CIUDADANOS por 2027 votos, CIUDADANOS gana al PP por 3071 votos y el PP gana a VOX por 28761 votos
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/04/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #800080;">PODEMOS-IU 2 Escaños</span> 
    <span style="color: #008000;">VOX 2 Escaños</span> 

</a>
<br><br>
El PSOE las vuelve a ganar y sumando a PODEMOS-IU empatan en escaños a la suma de PP y VOX. El PSOE gana al PP por 11845 votos, el PP gana a PODEMOS-IU por 21497 votos y PODEMOS-IU gana a VOX por 4705 votos, mientras CIUDADANOS se hunde y pasa de tercera a quinta fuerza sin escaño
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/04/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #FF69B4;">SUMAR 1 Escaño</span>  
    <span style="color: #008000;">VOX 1 Escaño</span> 
</a>
<br><br>
El PP las gana y sumando el escaño de VOX, empatan en escaños a la suma de PSOE y SUMAR. El PP gana al PSOE por 27517 votos, el PSOE gana a SUMAR por 68299 votos y SUMAR gana a VOX por 6940 votos
<br><br>
En conclusión, Baleares una provincia que no podríamos clasificar ni en la izquierda ni en la derecha. Desde los primeros años de la Transición, la UCD dominó con claridad, a partir de 1982 la provincia entra en empate y en el periodo de 7 escaños es la derecha la que obtiene ventaja sobre la izquierda, llegando incluso a sacar
tres escaños de ventaja en los años 2000, en el 2004 pasa a tener los 8 escaños actuales y comienza una etapa de constantes empates con las expepciones del 2011 donde es la derecha la que saca dos escaños de ventaja a la izquierda y del 28 de abril de 2019, donde es la izquierda
la que saca dos escaños de ventaja a la derecha
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Baleares</title>
            
    <style>
    body {
        font-family: 'Segoe UI', sans-serif;
        background-color: #f4f4f8;
        margin: 0;
        padding: 20px;
    }
    h1 {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 30px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .boton-con-texto {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 140px;
    }
    .titulo-boton {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 8px;
        text-align: center;
    }
    .button {
        width: 140px;
        height: 90px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
    }
    
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
            <h1 style="color: black;">Vizcaya <span class="escaños">10 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/pais-vasco/bizkaia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #298242;">PNV 4 Escaños</span>
        <span style="color: #FF0000;">PSE-PSOE 3 EscañoS</span>
        <span style="color: #FFA500;">UCD 2 Escaños</span>
        <span style="color: #ADD8E6;">AP 1 Escaño</span> 
        
    </a>
    <br><br>
    El PNV gana las primeras eleccionesa y sumando al PSE sacan cuatro escaños de ventaja a UCD y AP. El PNV gana al PSE por 31348 votos, el PSE gana a UCD por 49381 votos y UCD dobla a AP
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/pais-vasco/bizkaia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #298242;">PNV 4 Escaños</span>
        <span style="color: #FF0000;">PSE-PSOE 2 Escaños</span>
        <span style="color: #FFA500;">UCD 2 Escaños</span>
        <span style="color: #01b59c;">HB 2 Escaños</span>

    </a>
    <br><br>
    El PNV continúa como ganador y junto con el PSE y HB, cuadriplican en escaños a UCD. El PNV gana al PSE por 55999 votos, el PSE gana a UCD por 17050 votos y UCD gana a HB por 8151 votos
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/pais-vasco/bizkaia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #298242;">PNV 4 Escaños</span>
        <span style="color: #FF0000;">PSE-PSOE 4 Escaños</span>
        <span style="color: #01b59c;">HB 1 Escaño</span>
        <span style="color: #ADD8E6;">AP-PDP-PL 1 Escaño</span>
         
    
    </a>
    <br><br>
    El PNV las gana y sumando al PSE y HB multiplican por 9 a AP-PDP-PL. El PNV gana al PSE por 24827 votos, el PSE duplica a HB y HB gana a AP-PDP-PL por 36275 votos 
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/pais-vasco/bizkaia" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #298242;">PNV 3 Escaños</span>
        <span style="color: #FF0000;">PSE-PSOE 3 Escaños</span>
        <span style="color: #01b59c;">HB 2 Escaños</span>
        <span style="color: #ADD8E6;">AP-PDP-PL 1 Escaño</span>
        <span style="color: #DC143C ;">EE 1 Escaño</span>
        
        
    </a>
    <br><br>
    El PNV las vuelve a ganar y sumando al PSE, HB y EE multiplican por nueve a AP-PDP-PL. El PNV gana al PSE por 16807 votos, el PSE gana a HB por 65071 votos, HB gana a AP-PDP-PL por 32040 votos y AP-PDP-PL gana a EE por 14122 votos
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/pais-vasco/bizkaia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #298242;">PNV 3 Escaños</span>
        <span style="color: #FF0000;">PSE-PSOE 2 Escaños</span>
        <span style="color: #01b59c;">HB 2 Escaños</span>
        <span style="color: #0000FF;">PP 1 Escaño</span>
        <span style="color: #DC143C ;">EE 1 Escaño</span>
        <span style="color: #298242;">EUSKO ALKARTASUNA 1 Escaño</span>
        
    </a>
    <br><br>
    El PNV sigue ganando y sumando al PSE, HB, EE,EA multiplican por nueve al PP. El PNV gana al PSE por 43838 votos, el PSE gana a HB por 35251 votos, HB gana al PP por 32861 votos, el PP gana a EE por 11073 votos y EE gana a EA por tan solo 204 votos
    <br><br>
    <h1 style="color: black;"><span class="escaños">Pasa a 9 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/pais-vasco/bizkaia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #298242;">PNV 3 Escaños</span>
        <span style="color: #FF0000;">PSE-PSOE 3 Escaños</span>
        <span style="color: #0000FF;">PP 2 Escaños</span>
        <span style="color: #01b59c;">HB 1 Escaño</span>
        
                </a>
                <br><br>
                El PNV sigue en la primera posición y sumando al PSE y HB sacan siete escaños de ventaja al PP. El PNV gana al PSE por 31220 votos, el PSE gana al PP por 64000 votos y el PP gana a HB por 18528 votos
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/pais-vasco/bizkaia" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #298242;">PNV 3 Escaños</span>
        <span style="color: #FF0000;">PSE-PSOE 2 Escaños</span>
        <span style="color: #0000FF;">PP 2 Escaños</span>
        <span style="color: #01b59c;">HB 1 Escaño</span>
        <span style="color: #d25644;">IU-EB 1 Escaño</span>

</a>
<br><br>
El PNV las sigue ganando y sumando a PSE, HB e IU, sacan siete escaños de ventaja al PP. El PNV gana al PSE por 37763 votos, el PSE gana al PP por 37389 votosm el PP gana a HB por 59432 votos y HB gana a IU-EB por tan solo 1518 votos
<br><br>
2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/pais-vasco/bizkaia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #298242;">PNV 4 Escaños</span>
                    <span style="color: #0000FF;">PP 3 Escaños</span>
                    <span style="color: #FF0000;">PSE-PSOE 2 Escaños</span>
</a>
<br><br>
El PNV las gana y sumando al PSE duplican en escaños al PP. El PNV gana al PP por 45207 votos y el PP gana al PSE por 28602 votos
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/pais-vasco/bizkaia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #298242;">PNV 4 Escaños</span>
                    <span style="color: #FF0000;">PSE-PSOE 3 Escaños</span>
                    <span style="color: #0000FF;">PP 2 Escaños</span>          
    
</a>
<br><br>
El PNV las gana y sumando al PSE sacan cinco escaños de ventaja al PP. El PNV gana al PSE por 72974 votos y el PSE gana al PP por 55625 votos
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 8 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/pais-vasco/bizkaia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSE-PSOE 4 Escaños</span>
                    <span style="color: #298242;">PNV 3 Escaños</span>
                    <span style="color: #0000FF;">PP 1 Escaño</span>          
    
    
    
</a>
<br><br>
El PSE las gana por primera vez en las únicas elecciones generales en las que el pais se tiñe de azul y rojo sin presencia vencedora de regionalismos o independentismos debido a la polarización y sumando al PSE sacan seis escaños de ventaja al PP. El PSE gana al PNV por 37129 votos y el PNV gana al PP por 80132 votos
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/14/48.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #298242;">PNV 3 Escaños</span>
        <span style="color: #FF0000;">PSE-PSOE 2 Escaños</span>
        <span style="color: #01b59c;">AMAIUR 2 Escaños</span>
        <span style="color: #0000FF;">PP 1 Escaño</span>
        
</a>
<br><br>
El PNV las gana y sumando al PSOE y AMAIUR sacan seis escaños de ventaja al PP. El PNV gana al PSE por 71830 votos, el PSE gana a AMAIUR por 14057 votos y AMAIUR gana al PP por 9395 votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/14/48.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #298242;">PNV 3 Escaños</span>
        <span style="color: #800080;">PODEMOS 2 Escaños</span>
        <span style="color: #FF0000;">PSE-PSOE 1 Escaño</span>
        <span style="color: #01b59c;">EHBILDU 1 Escaño</span>
        <span style="color: #0000FF;">PP 1 Escaño</span>

</a>
<br><br>
El PNV sigue como vencedor y sumando a PODEMOS, PSE y EHBILDU sacan seis escaños de ventaja al PP. El PNV gana a PODEMOS por 11928 votos, PODEMOS dobla al PSE, el PSE gana a EHBILDU por 3091 votos y EHBILDU gana al PP por 7273 votos
<br><br>
2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/14/48.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #800080;">PODEMOS 3 Escaños</span>
        <span style="color: #298242;">PNV 2 Escaños</span>
        <span style="color: #FF0000;">PSE-PSOE 1 Escaño</span>
        <span style="color: #0000FF;">PP 1 Escaño</span>
        <span style="color: #01b59c;">EHBILDU 1 Escaño</span>
</a>
<br><br>
PODEMOS las gana y sumando al PNV, PSE y EHBILDU sacan seis escaños de ventaja al PP. PODEMOS gana al PNV por 3731 votos, el PNV dobla al PSE, el PSE gana al PP por 7598 votos y el PP gana a EHBILDU por 11035 votos  
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/14/48.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #298242;">PNV 3 Escaños</span>
        <span style="color: #FF0000;">PSE-PSOE 2 Escaños</span>
        <span style="color: #800080;">PODEMOS 2 Escaños</span>
        <span style="color: #01b59c;">EHBILDU 1 Escaño</span>
        

</a>
<br><br>
El PNV vuelve a la primera posición y saca un escaño de ventaja tanto al PSE como a PODEMOS y dos a EHBILDU. El PNV gana al PSE por 99285 votos, el PSE gana a PODEMOS por 14809 votos y PODEMOS gana a EHBILDU por 29616 votos
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/14/48.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #298242;">PNV 3 Escaños</span>
        <span style="color: #FF0000;">PSE-PSOE 2 Escaños</span>
        <span style="color: #800080;">PODEMOS 1 Escaño</span>
        <span style="color: #01b59c;">EHBILDU 1 Escaño</span>
        <span style="color: #0000FF;">PP 1 Escaño</span>

</a>
<br><br>
El PNV sigue ganando y sumando al PSE, PODEMOS y EHBILDU sacan seis escaños de ventaja al PP. El PNV gana al PSE por 101413 votos, el PSE gana a PODEMOS por 23441 votos, PODEMOS gana a EHBILDU por 2456 votos y EHBILDU gana al PP (que vuelve a entrar) por 39048 votos
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/14/48/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #298242;">PNV 2 Escaños</span>
        <span style="color: #FF0000;">PSE-PSOE 2 Escaños</span>
        <span style="color: #01b59c;">EHBILDU 2 Escaños</span>
        <span style="color: #0000FF;">PP 1 Escaño</span>
        <span style="color: #FF69B4;">SUMAR 1 Escaño</span>  
    
</a>
<br><br>
El PNV continua como ganador, pero cede un escaño a EHBILDU. La suma de PNV, PSE, EHBILDU y SUMAR sacan seis escaños de ventaja al PP. El PNV gana al PSE por 6740 votos, el PSE gana a EHBILDU por 31581 votos, EHBILDU gana al PP por 55334 votos y el PP gana a SUMAR por 3941 votos
<br><br>
En conclusión, Vizcaya es una provincia con una marcada hegemonía del nacionalismo vasco, donde el PNV ha sido la fuerza dominante en la mayoría de las elecciones generales desde la Transición. Sin embargo, su liderazgo ha sido acompañado de una importante presencia del socialismo y, en menor medida, de la izquierda abertzale, reflejando un electorado con una fuerte identidad política y una inclinación progresista en su mayoría.

Desde 1977, el PNV ha logrado mantenerse como la primera fuerza en casi todas las citas electorales, salvo en 2008, cuando el PSE logró un triunfo excepcional en un contexto de polarización estatal, y en 2016, cuando Podemos emergió con fuerza tras el ciclo del 15M y se situó en primer lugar. A pesar de estos episodios puntuales, el PNV ha sabido consolidar su posición como el partido más votado en la provincia, aunque su hegemonía se ha visto erosionada en los últimos años debido al crecimiento de EH Bildu
El bloque de la izquierda soberanista, representado primero por HB y posteriormente por EH Bildu, ha sido una constante en la política vizcaína, con un apoyo significativo que, aunque fluctuante, ha ido en ascenso en los últimos años. Su avance más notable se ha producido en 2023, cuando logró empatar en escaños con el PNV, reflejando una creciente competencia dentro del espacio nacionalista vasco.
La irrupción de Podemos en 2015 supuso un terremoto electoral, logrando situarse como segunda fuerza y llegando incluso a ganar en 2016. Sin embargo, su impacto ha ido disminuyendo progresivamente, hasta el punto de que en 2023 su espacio político ha quedado representado por Sumar, con un único escaño.

Por otro lado, el PSE ha mantenido una presencia constante y relevante, siendo la principal alternativa no nacionalista en Vizcaya y logrando resultados destacados en momentos puntuales, como en 2008. Su peso electoral sigue siendo significativo, pero ha tenido que competir con otras formaciones progresistas en un espacio político fragmentado.
En cuanto al Partido Popular, su presencia en Vizcaya siempre ha sido minoritaria. Aunque en los años 2000 logró un crecimiento que le permitió acercarse a los principales partidos, su tendencia ha sido a la baja en las últimas décadas. Su influencia es limitada y en muchas ocasiones ha sido la única representación del bloque de la derecha en un territorio donde el voto conservador es escaso. 
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
        font-family: 'Segoe UI', sans-serif;
        background-color: #f4f4f8;
        margin: 0;
        padding: 20px;
    }
    h1 {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 30px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .boton-con-texto {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 140px;
    }
    .titulo-boton {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 8px;
        text-align: center;
    }
    .button {
        width: 140px;
        height: 90px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
    }
    
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
if (provincia === "Las Palmas") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Las Palmas <span class="escaños">6 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/canarias/las-palmas" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #FFA500;">UCD 5 Escaños</span>
        <span style="color: #FF0000;">PSOE 1 Escaño</span>
    </a>
    <br><br>
    UCD gana las primeras elecciones sacando cuatro escaños de ventaja al PSOE y cuadruplicandolos en votos
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/canarias/las-palmas#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 4 Escaños</span>
        <span style="color: #FF0000;">PSOE 1 Escaño</span>
        <span style="color: #FF0D00;">C-UPC 1 Escaño</span>


    </a>
    <br><br>
    UCD las vuelve a ganar y duplica en escaños a la suma de PSOE y C-UPC (Unión del Pueblo Canario (UPC) fue una coalición de partidos políticos comunistas, independentistas y nacionalistas de izquierdas de Canarias que existió entre finales de los años 70 y principios de los 80.). UCD vuelve a cuadruplicar al PSOE y el PSOE gana a C-UPC por 3312 votos
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/canarias/las-palmas#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 2 Escaños</span> 
        <span style="color: #FFA500;">UCD 1 Escaño</span> 
    </a>
    <br><br>
    El PSOE las gana empatando en escaños a la suma de AP-PDP y UCD. El PSOE gana a AP-PDP por 11665 votos y AP-PDP duplica a UCD
    <br><br>
    <h1 style="color: black;"><span class="escaños">Pasa a 7 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/canarias/las-palmas#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PL 2 Escaños</span>
        <span style="color: #006400;">CDS 2 Escaños</span> 
    </a>
    <br><br>
    El PSOE sigue como vencedor, pero la suma de AP-PDP-PL y CDS le saca un escaño de ventaja. El PSOE gana a AP-PDP-PL por 15732 votos y AP-PDP-PL gana a CDS por 24331 votos
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/canarias/las-palmas#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #006400;">CDS 2 Escaños</span> 
        <span style="color: #0000FF;">PP 2 Escaños</span>
        
    </a>
    <br><br>
    El PSOE las gana, pero la suma de CDS y PP le saca un escaño de ventaja. El PSOE gana a CDS por 27554 votos y CDS gana al PP por 12678 votos
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/canarias/las-palmas#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #0000FF;">PP 3 Escaños</span>
                    <span style="color: #FF0000;">PSOE 2 Escaños</span>
                    <span style="color: #01add7;">CCA 2 Escaños</span>
    
                </a>
                <br><br>
                El PP las gana y sumando a CCA sacan tres escaños de ventaja al PSOE. El PP gana al PSOE por 55764 votos y el PSOE gana a CCA por tan solo 1454 votos
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/canarias/las-palmas#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 3 Escaños</span>
                    <span style="color: #FF0000;">PSOE 2 Escaños</span>
                    <span style="color: #01add7;">CCA 2 Escaños</span>
                    
</a>
<br><br>
El PP las vuelve a ganar y sumando a CCA sacan tres escaños de ventaja al PSOE. El PP gana al PSOE por 76043 votos y el PSOE gana a CCA por 8431 votos
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/canarias/las-palmas#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 4 Escaños</span>
                    <span style="color: #01add7;">CCA 2 Escaños</span>
                    <span style="color: #FF0000;">PSOE-PROGR 1 Escaño</span> 
        
</a>
<br><br>
El PP las gana y sumando a CCA sacan cinco escaños de ventaja al PSOE-PROGR. El PP gana a CCA por 97699 votos y CCA gana a PSOE-PROGR por 32380 votos
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 8 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/canarias/las-palmas#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #0000FF;">PP 4 Escaños</span>
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #01add7;">CCA 1 Escaño</span>
    
    
    
</a>
<br><br>
El PP las gana y sumando a CCA sacan dos escaños de ventaja al PSOE. El PP gana al PSOE por 41069 votos y el PSOE gana a CCA por 78506 votos
<br><br>
2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/canarias/las-palmas#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 4 Escaños</span>

    
</a>
<br><br>
El PSOE las gana empatando en escaños con el PP, al que aventaja por 14493 votos
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/05/35.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #01add7;">CCA-NC-PNC 1 Escaño</span>
</a>
<br><br>
Con la mayoría absoluta de Rajoy el PP las gana y sumando a CCA-NC-PNC triplican en escaños al PSOE. El PP gana al PSOE por 117411 votos y el PSOE dobla a CCA-NC-PNC
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/05/35.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #FF0000;">PSOE-NC 2 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>


</a>
<br><br>
El PP las gana y sumando a CIUDADANOS empatan en escaños a la suma de PODEMOS y PSOE-NC. El PP gana a PODEMOS por 8962 votos, PODEMOS gana a PSOE-NC por 20847 votos y PSOE-NC gana a CIUDADANOS por 52184 votos 
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/05/35.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF0000;">PSOE-NC 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    
</a>
<br><br>
El PP las gana y sumando a CIUDADANOS empatan en escaños a la suma de PSOE-NC y PODEMOS. El PP gana a PSOE-NC por 50862 votos, PSOE-NC gana a PODEMOS por 6374 votos y PODEMOS gana a CIUDADANOS por 47823 votos
<br><br>
2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/05/35.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>  
    

</a>
<br><br>
El PSOE las gana y sumando a PODEMOS sacando dos escaños de ventaja a la suma de PP y CIUDADANOS. El PSOE gana a PODEMOS por 63087 votos, PODEMOS gana al PP por 2780 votos y el PP gana a CIUDADANOS por 4365 votos
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/05/35.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span> 
    <span style="color: #008000;">VOX 1 Escaño</span> 
    <span style="color: #01add7;">CCA-NC-PNC 1 Escaño</span>
</a>
<br><br>
El PSOE las vuelve y sumando a PODEMOS empatan a escaños a la suma de PP, VOX y CCA-NC-PNC. El PSOE gana al PP por 37703 votos, el PP gana a PODEMOS por 28727 votos, PODEMOS gana a VOX por 10133 votos y VOX gana a CCA-NC-PNC por 16487 votos
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/05/35/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span> 
    <span style="color: #FF69B4;">SUMAR 1 Escaño</span> 
</a>
<br><br>
El PSOE las gana y sumando a SUMAR empatan en escaños a la suma de PP y VOX. El PSOE gana al PP por 38814 votos, el PP gana a VOX por 59514 votos y VOX asciende a la tercera posición y gana a SUMAR por 22974 votos
<br><br>
En conclusión, Las Palmas ha sido históricamente una provincia con una ligera ventaja del bloque de centro-derecha, reflejada en el dominio inicial de UCD y en la superioridad de la suma de las fuerzas conservadoras desde 1986 hasta 2011, con la excepción de la polarización de 2008, que resultó en un empate.

La irrupción de Podemos en 2015, ascendiendo a la segunda posición, impulsó a la izquierda a lograr una ventaja de un escaño en esa convocatoria y ampliarla a dos en abril de 2019. Sin embargo, en 2016, noviembre de 2019 y 2023, la correlación de fuerzas se ha equilibrado, dando lugar a un escenario de empate técnico entre bloques. Esto confirma a Las Palmas como una provincia políticamente competitiva, sin una hegemonía clara y con una constante disputa entre el centro-derecha y el centro-izquierda.
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Las Palmas</title>
            
    <style>
    body {
        font-family: 'Segoe UI', sans-serif;
        background-color: #f4f4f8;
        margin: 0;
        padding: 20px;
    }
    h1 {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 30px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .boton-con-texto {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 140px;
    }
    .titulo-boton {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 8px;
        text-align: center;
    }
    .button {
        width: 140px;
        height: 90px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
    }
    
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
if (provincia === "A Coruña") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">A Coruña <span class="escaños">9 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/galicia/a-coruna" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 6 Escaños</span> 
        <span style="color: #FF0000;">PSOE 2 Escaños</span>
        <span style="color: #ADD8E6;">AP 1 Escaño</span>
        
    </a>
    <br><br>
    UCD gana las primeras elecciones y sumando el escaño de AP sacan cinco escaños de ventaja al PSOE. UCD dobla al PSOE en votos y el PSOE gana a AP por 28342 votos
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/galicia/a-coruna" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 6 Escaños</span> 
        <span style="color: #FF0000;">PSOE 2 Escaños</span>
        <span style="color: #ADD8E6;">AP 1 Escaño</span>

    </a>
    UCD las vuelva a ganar y sumando el escaño de AP sacan cinco escaños de ventaja al PSOE. UCD vuelve a doblar al PSOE en votos y el PSOE gana a AP por 26285 votos
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/galicia/a-coruna" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 4 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 4 Escaños</span> 
        <span style="color: #FFA500;">UCD 1 Escaños</span>
          
    </a>
    <br><br>
    El PSOE las gana, pero la suma de AP-PDP y UCD le sacan un escaño de ventaja. El PSOE gana a AP-PDP por 15740 votos y AP-PDP dobla a UCD 
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/galicia/a-coruna" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 4 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PL-C 4 Escaños</span> 
        <span style="color: #006400;">CDS 1 Escaño</span>
    </a>
    <br><br>
    El PSOE las vuelve a ganar, pero de nuevo la suma de AP-PDP-PL-C y CDS le saca un escaño de ventaja. El PSOE gana a AP-PDP-PL-C por 15841 votos y AP-PDP-PL-C triplica a CDS
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/galicia/a-coruna" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #FF0000;">PSOE 4 Escaños</span>
        <span style="color: #0000FF;">PP 4 Escaños</span>
        <span style="color: #006400;">CDS 1 Escaño</span>
        
    </a>
    <br><br>
    El PSOE sigue ganando, pero una vez más la suma de PP y CDS le saca un escaño de ventaja. El PSOE gana al PP por 5135 votos y el PP triplica a CDS
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/galicia/a-coruna" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 5 Escaños</span>
                    <span style="color: #FF0000;">PSOE 4 Escaños</span> 
    
                </a>
                <br><br>
                El PP las gana, sacando un escaño de ventaja al PSOE. El PP gana al PSOE por 44265 votos
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/galicia/a-coruna" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #0000FF;">PP 5 Escaños</span>
                    <span style="color: #FF0000;">PSOE 3 Escaños</span>
                    <span style="color: #74b1e0;">BNG 1 Escaño</span>
</a>
<br><br>
El PP las gana y saca un escaño de ventaja a la suma de PSOE y BNG. El PP gana al PSOE por 92578 votos y el PSOE dobla al BNG
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/galicia/a-coruna" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span>
                    <span style="color: #FF0000;">PSOE 2 Escaños</span>
                    <span style="color: #74b1e0;">BNG 2 Escaños</span>
</a>
<br><br>
El PP las gana y saca un escaño de ventaja a la suma de PSOE y BNG. El PP dobla al PSOE en votos y el PSOE gana al BNG, que le arrebata un escaño, por 35986 votos 
<br><br>
2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/galicia/a-coruna" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #74b1e0;">BNG 1 Escaño</span>
</a>
<br><br>
El PP las gana, pero la suma de PSOE y BNG le saca un escaño de ventaja. El PP gana al PSOE por 42065 votos y el PSOE triplica al BNG
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 8 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/galicia/a-coruna" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #74b1e0;">BNG 1 Escaño</span>
    
    
</a>
<br><br>
El PP las vuelve a ganar empatando en escaños a la suma de PSOE y BNG. El PP gana al PSOE por 12290 votos y el PSOE triplica al BNG
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/11/15.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #74b1e0;">BNG 1 Escaño</span>
</a>
<br><br>
Con la mayoria absoluta de Rajoy el PP las gana, sacando dos escaños de ventaja a la suma de PSOE y BNG. El PP gana al PSOE por 161214 votos y el PSOE dobla al BNG
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/11/15.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span> 


</a>
<br><br>
El PP las gana y sumando a CIUDADANOS empatan en escaños a la suma de PODEMOS y PSOE. El PP gana a PODEMOS por 61212 votos, PODEMOS gana al PSOE por 39694 votos y el PSOE dobla a CIUDADANOS 
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/11/15.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    
</a>
<br><br>
El PP las vuelve a ganar empatando en escaños a la suma de PODEMOS y PSOE arrebatando el escaño a CIUDADANOS. El PP gana a PODEMOS por 108281 votos y PODEMOS gana al PSOE por 8150 votos 
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/11/15.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span> 

</a>
<br><br>
El PSOE las gana y sumando a PODEMOS empatan en escaños a la suma de PP y CIUDADANOS. El PSOE gana al PP por 39804 votos, el PP gana a PODEMOS por 72162 votos y PODEMOS gana a CIUDADANOS por 18360 votos
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/11/15.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #74b1e0;">BNG 1 Escaño</span>

</a>
<br><br>
El PP las gana, pero la suma de PSOE, PODEMOS y BNG le saca dos escaños de ventaja. El PP gana al PSOE por 2949 votos, el PSOE dobla a PODEMOS, PODEMOS gana al BNG por 18934 votos y el BNG gana la cuarta posición y el escaño a VOX por 7810 votos
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/11/15/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span> 
    <span style="color: #FF69B4;">SUMAR 1 Escaño</span>
    <span style="color: #74b1e0;">BNG 1 Escaño</span>
    
</a>
<br><br>
El PP las gana empatando en escaños a la suma de PSOE, SUMAR y BNG. El PP gana al PSOE por 101375 votos, el PSOE dobla a SUMAR y SUMAR gana al BNG por 14965 votos.
<br><br>
En conclusión, A Coruña es una provincia que ha expiramentado una evolución política notable. En las dos primeras elecciones la derecha saca cinco escaños a la izquierda. Desde 1982 hasta los años 2000 la derecha saca un escaño de ventaja.
Sin embargo, 2004 supone un punto de inflexión donde es la izquierda la que aventaja en un escaño a la derecha. Cuando la provincia pasa a tener los 8 escaños actuales en 2008, con la excepción del año 2011 con la mayoría absoluta de Rajoy en la que la derecha saca dos escaños de ventaja a la izquierda, se producen
continuos empates entre el bloque de la derecha y el bloque de la izquierda a escaños hasta el 28 de abril. Aparece PODEMOS fuerte por la izquierda como segunda fuerza en 2015 y 2016 y tambien CIUDADANOS al romperse el bipartidismo.
Con el hundimiento de CIUDADANOS el 10N y la victoria del BNG sobre VOX, la izquierda saca el 10 de noviembre de 2019 dos escaños de ventaja a la derecha y en 2023 vuelve el empate entre izquierda y derecha, aunque la suma de la izquierda le saca
14486 votos a la derecha, por lo que a pesar de su tradición hístorica a la derecha, podemos hablar de actualmente una provincia ligeramente escorada a la izquierda como le sucedía a la otra provincia del eje atlántico: Pontevedra, aunque en ese caso era más palpable la tendencia a la izquierda


            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>A Coruña</title>
            
    <style>
    body {
        font-family: 'Segoe UI', sans-serif;
        background-color: #f4f4f8;
        margin: 0;
        padding: 20px;
    }
    h1 {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 30px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .boton-con-texto {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 140px;
    }
    .titulo-boton {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 8px;
        text-align: center;
    }
    .button {
        width: 140px;
        height: 90px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
    }
    
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
            <h1 style="color: black;">Cádiz <span class="escaños">8 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/andalucia/cadiz" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 4 Escaños</span>
        <span style="color: #FFA500;">UCD 2 Escaños</span> 
        <span style="color: #FF0D00;">PCE 1 Escaño</span> 
        <span style="color: #FF6767;">PSP-US 1 Escaño</span>
        
    </a>
    <br><br>
    El PSOE las gana y sumando al PCE y a PSP-US triplican en escaños a UCD. El PSOE gana a UCD por 37969 votos, UCD duplica al PCE y el PCE gana a PSP-US por 1577 votos
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/andalucia/cadiz" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #FFA500;">UCD 2 Escaños</span>
        <span style="color: #15AA35;">PSA-PA 2 Escaños</span>
        <span style="color: #FF0D00;">PCE 1 Escaño</span> 

    </a>
    El PSOE las vuelve a ganar y sumando a PSA-PA y al PCE triplican en escaños a UCD. El PSOE gana a UCD por 2893 votos, UCD gana a PSA-PA (El Partido Andalucista (PA) fue un partido político español encuadrado dentro del nacionalismo andaluz y de tendencia progresista) por 40202 votos y el PSA-PA gana al PCE por 37774 votos
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/andalucia/cadiz" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 6 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 2 Escaños</span> 
          
    </a>
    <br><br>
    El PSOE las gana triplicando en escaños y en votos a AP-PDP
    <br><br>
    <h1 style="color: black;"><span class="escaños">Pasa a 9 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/andalucia/cadiz" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 7 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PL 2 Escaños</span>
        
    </a>
    <br><br>
    El PSOE sigue como vencedor, sacando cinco escaños de ventaja a AP-PDP-PL. El PSOE triplica a AP-PDP-PL en votos
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/andalucia/cadiz" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 6 Escaños</span> 
        <span style="color: #0000FF;">PP 1 Escaño</span>
        <span style="color: #15AA35;">PA 1 Escaño</span>
        <span style="color: #d25644;">IU-CA 1 Escaño</span>
        
    </a>
    <br><br
    El PSOE sigue ganando y sumando a PA e IU-CA sacan siete escaños de ventaja al PP. El PSOE triplica al PP en votos, el PP gana a PA por 23515 votos y PA gana a IU-CA por 8302 votos
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/andalucia/cadiz" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 5 Escaños</span> 
                    <span style="color: #0000FF;">PP 3 Escaños</span>
                    <span style="color: #d25644;">IU-CA 1 Escaño</span>
    
                </a>
                <br><br>
                El PSOE sigue ganando y sumando a IU-CA doblan en escaños al PP. El PSOE gana al PP por 124930 votos y el PP duplica a IU-CA
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/andalucia/cadiz" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 4 Escaños</span> 
                    <span style="color: #0000FF;">PP 4 Escaños</span>
        <span style="color: #d25644;">IU-CA 1 Escaño</span>
</a>
<br><br>
El PSOE sigue como vencedor y sumando el escaño de IU sacan un escaño de ventaja al PP. El PSOE gana al PP por 52442 votos y el PP duplica en votos a IU
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/andalucia/cadiz" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #0000FF;">PP 4 Escaños</span>
        <span style="color: #FF0000;">PSOE-PROGR 4 Escaños</span>
        <span style="color: #15AA35;">PA 1 Escaño</span>
        
</a>
<br><br>
El PP las gana por primera vez, pero la suma de PSOE-PROGR e IU-CA sacan un escaño de ventaja al PP. El PP gana al PSOE-PROGR por 9891 votos y PSOE-PROGR casi cuadriplica en votos a PA
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/andalucia/cadiz" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 6 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    
    
</a>
<br><br>
El PSOE las gana duplicando en escaños al PP. El PSOE gana al PP por 109736 votos
<br><br>
2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/andalucia/cadiz" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #0000FF;">PP 4 Escaños</span> 

    
</a>
<br><br>
El PSOE repite como ganador en la provincia,sacando un escaño de ventaja al PP, al que aventaja por 82992 votos
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 8 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/01/11.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
</a>
<br><br>
Con la mayoria absoluta de Rajoy, el PP las gana sacando dos escaños de ventaja al PSOE. El PP gana al PSOE por 88646 votos 
<h1 style="color: black;"><span class="escaños">Pasa a 9 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/01/11.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>


</a>
<br><br>
El PSOE las gana y sumando a PODEMOS sacan un escaño de ventaja a la suma de PP y CIUDADANOS. El PSOE gana al PP por tan solo 1613 votos, el PP gana a PODEMOS por 48839 votos y PODEMOS gana a CIUDADANOS por 35508 votos
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/01/11.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    
</a>
<br><br>
El PP las gana, pero la suma de PSOE y PODEMOS saca un escaño de ventaja a la suma de PP y CIUDADANOS. El PP gana al PSOE por 23185 votos, el PSOE gana a PODEMOS por 45337 votos y PODEMOS gana a CIUDADANOS por 42160 votos
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/01/11.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #FF7F00;">CS 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>  
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #008000;">VOX 1 Escaño</span>

</a>
<br><br>
El PSOE las gana con enorme ventaja y sumando a PODEMOS sacan un escaño de ventaja a la suma de CIUDADANOS, PP y VOX. El PSOE gana a CIUDADANOS por 78386 votos, CIUDADANOS gana a PODEMOS por 20913 votos, PODEMOS gana al PP por 11094 votos y el PP gana a VOX por 12019
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/01/11.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>

</a>
<br><br>
El PSOE las vuelve a ganar, pero la suma de VOX, PP y CIUDADANOS le saca un escaño de ventaja a la suma de PSOE y PODEMOS. El PSOE gana a VOX por 57066 votos, VOX gana al PP por 20116 votos, el PP gana a PODEMOS por 17548 votos y PODEMOS gana a CIUDADANOS por 38051 votos
<br><br>
2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/01/11/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span>
    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
    <span style="color: #008000;">VOX 1 Escaño</span>
    <span style="color: #FF69B4;">SUMAR 1 Escaño</span>  
    
</a>
<br><br>
El PP las gana y sumando a VOX sacan un escaño de ventaja a la suma de PSOE y SUMAR. El PP gana al PSOE por 10503 votos, el PSOE duplica a VOX y VOX gana a SUMAR por 14605 votos
<br><br>
En conclusión, Cádiz es una provincia con una fuerte tradición de voto socialista, marcada por la hegemonía del PSOE en gran parte de su historia electoral. Desde las primeras elecciones democráticas, el PSOE ha sido la fuerza más votada en numerosas ocasiones, con momentos de dominio absoluto, como en los años 80 y 90. Con la mayoriía absoluta de Rajoy el PP consigue por primera vez sumar escaños de ventaja a la izquierda (dos).

A partir de 2015, el panorama político gaditano se fragmentó con la entrada de nuevas fuerzas como Podemos y Ciudadanos. La repetición electoral en 2019-10N dio paso a un ascenso de VOX como segunda fuerza y CIUDADANOS a pesar del hundimiento que sufre en esas elecciones, sobrevive y la derecha saca un escaño de ventaja a la izquierda. Finalmente, en 2023, el PP logró imponerse nuevamente, aunque por un margen estrecho sobre el PSOE,  impulsado por el "efecto Moreno" en Andalucía y la fuerza de VOX como una fuerza determinante en el bloque conservador.

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
        font-family: 'Segoe UI', sans-serif;
        background-color: #f4f4f8;
        margin: 0;
        padding: 20px;
    }
    h1 {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 30px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .boton-con-texto {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 140px;
    }
    .titulo-boton {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 8px;
        text-align: center;
    }
    .button {
        width: 140px;
        height: 90px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
    }
    
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
if (provincia === "Murcia") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Murcia <span class="escaños">8 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/region-de-murcia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 4 Escaños</span>
        <span style="color: #FF0000;">PSOE 4 Escaños</span> 
        
    </a>
    <br><br>
    UCD gana las primeras elecciones empatando en escaños con el PSOE. UCD gana al PSOE por 25762 votos
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/region-de-murcia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 4 Escaños</span> 
        <span style="color: #FFA500;">UCD 4 Escaños</span>

    </a>
    <br><br>
    El PSOE las gana empatando en escaños con UCD. El PSOE gana a UCD por tan solo 392 votos
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/region-de-murcia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 5 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 3 Escaños</span> 
          
    </a>
    <br><br>
    El PSOE las gana, sacando dos escaños de ventaja a AP-PDP, con una ventaja de 80910 votos
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/region-de-murcia" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 5 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 3 Escaños</span> 
        
    </a>
    <br><br>
    El PSOE las vuelve a ganar, sacando dos escaños de ventaja a AP-PDP. El PSOE gana a AP-PDP por 77813 votos
    <br><br>
    <h1 style="color: black;"><span class="escaños">Pasa a 9 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/region-de-murcia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 5 Escaños</span> 
        <span style="color: #0000FF;">PP 3 Escaños</span>
        <span style="color: #006400;">CDS 1 Escaño</span>
        
    </a>
    <br><br>
    El PSOE las vuelve a ganar sacando un escaño de ventaja a la suma de PP y CDS. El PSOE gana al PP por 89395 votos y el PP casi triplica a CDS.
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/region-de-murcia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 4 Escaños</span>
        <span style="color: #FF0000;">PSOE 4 Escaños</span>
        <span style="color: #d25644;">IU 1 Escaño</span>
                    
                
                </a>
                <br><br>
                El PP las gana, pero la suma de PSOE e IU le saca un escaño de ventaja. El PP gana al PSOE por 57183 votos y el PSOE casi cuadriplica a IU.
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/region-de-murcia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 5 Escaños</span>
        <span style="color: #FF0000;">PSOE 3 Escaños</span>
        <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
El PP sigue ganando sacando esta vez un escaño de ventaja a la suma de PSOE e IU. El PP gana al PSOE por 83599 votos y el PSOE triplica a IU
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/region-de-murcia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 6 Escaños</span>
        <span style="color: #FF0000;">PSOE-PROGR 3 Escaños</span>
</a>
<br><br>
El PP sigue como ganador, duplicando en escaños al PSOE al que aventaja en 172385 votos
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/region-de-murcia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 6 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    
</a>
<br><br>
El PP continúa como primera fuerza duplicando en escaños al PSOE al que aventaja en 161656 votos
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 10 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/region-de-murcia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 7 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    
    
</a>
<br><br>
El PP repite como ganador en la provincia sacando cuatro escaños de ventaja al PSOE, al que aventaja en 217558 votos
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/15/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 8 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
El PP sigue ganando, cuadruplicando en escaños al PSOE. El PP triplica al PSOE en votos 
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/15/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaño</span>
    <span style="color: #FF7F00;">CS 2 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>


</a>
<br><br>
El PP vuelve a ganar y sumando a CIUDADANOS sacan cuatro escaños de ventaja a la suma de PSOE y PODEMOS. El PP gana al PSOE por 146022 votos, el PSOE gana a CIUDADANOS por 19230 votos y CIUDADANOS gana a PODEMOS por 18205 votos
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/15/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaño</span>
    <span style="color: #FF7F00;">CS 2 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
</a>
<br><br>
El PP continúa ganando y sumando a CIUDADANOS sacan cuatro escaños de ventaja a la suma de PSOE y PODEMOS. El PP dobla al PSOE en votos, el PSOE gana a CIUDADANOS por 32748 votos y CIUDADANOS gana a PODEMOS por 9219 votos
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/15/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF7F00;">CS 2 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>

</a>
<br><br>
El PSOE las gana, pero la suma de PP, CIUDADANOS y VOX saca dos escaños de ventaja a la suma de PSOE y PODEMOS. El PSOE gana al PP por 10008 votos, el PP gana a CIUDADANOS por 29939 votos, CIUDADANOS gana a VOX por 6936 votos y VOX gana a PODEMOS por 63360 votos
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/15/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #008000;">VOX 3 Escaños</span>  
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
</a>
<br><br>
VOX las gana y sumando al PP sacan dos escaños de ventaja a la suma de PSOE y PODEMOS. VOX gana al PP por 10329 votos, el PP gana al PSOE por 12346 votos y el PSOE dobla a PODEMOS
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/15/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span>
    <span style="color: #FF0000;">PSOE 3 Escaño</span> 
    <span style="color: #008000;">VOX 2 Escaños</span>
    <span style="color: #FF69B4;">SUMAR 1 Escaño</span> 
    
</a>
<br><br>
El PP las gana y sumando a VOX sacan dos escaños de ventaja a la suma de PSOE y SUMAR. El PP gana al PSOE por 118762 votos, el PSOE gana a VOX por 26086 votos y VOX duplica a SUMAR
<br><br>
En conclusión, Murcia es la provincia más de derechas y conservadora de toda España. Aunque en las primeras legislaturas de Félipe Gonzalez y en 1993 la suma de la izquierda sumaba más que la derecha, a partir 
de 1996 es la derecha la que empieza a adquirir la hegemonía,llegando a doblar o incluso cuadruplicar a la izquierda con el 8-2 de Rajoy en 2011. Con el fin del bipartidismo de los años 2015 y 2016, la derecha gana a la suma de la izquierda
en cuatro escaños. A pesar de todo esto desde que Pedro Sánchez gobierna, la derecha solo saca a la izquierda dos escaños de ventaja, un resultado por debajo de las posibilidades, teniendo en cuenta el fuerte conservadurismo de la provincia.
Murcia es además, la única provincia donde ha ganado VOX en su trayectoria.

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Murcia</title>
            
    <style>
    body {
        font-family: 'Segoe UI', sans-serif;
        background-color: #f4f4f8;
        margin: 0;
        padding: 20px;
    }
    h1 {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 30px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .boton-con-texto {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 140px;
    }
    .titulo-boton {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 8px;
        text-align: center;
    }
    .button {
        width: 140px;
        height: 90px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
    }
    
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
            <h1 style="color: black;">Málaga <span class="escaños">8 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/andalucia/malaga" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 4 Escaños</span>
        <span style="color: #FFA500;">UCD 3 Escaños</span> 
        <span style="color: #FF0D00;">PCE 1 Escaño</span> 
        
    </a>
    <br><br>
    El PSOE las gana y sumando al PCE, sacan dos escaños de ventaja a UCD. El PSOE gana a UCD por 69705 votos y UCD duplica al PCE
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/andalucia/malaga" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #FFA500;">UCD 3 Escaños</span>
        <span style="color: #FF0D00;">PCE 1 Escaño</span> 
        <span style="color: #15AA35;">PSA-PA 1 Escaño</span>

    </a>
    El PSOE las vuelve a ganar y sumando al PCE y a PSA-PA, sacan dos escaños de ventaja a UCD. El PSOE gana a UCD por 28296 votos, UCD dobla al PCE y el PCE gana a PSA-PA por 3484 votos
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/andalucia/malaga" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 6 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 2 Escaños</span> 
          
    </a>
    <br><br>
    El PSOE las gana triplicando en escaños y duplicando en votos a AP-PDP
    <br><br>
    <h1 style="color: black;"><span class="escaños">Pasa a 9 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/andalucia/malaga" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 6 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PL 2 Escaños</span>
        <span style="color: #d25644;">IU 1 Escaño</span>
        
    </a>
    <br><br>
    El PSOE sigue como vencedor y sumando a IU sacan cinco escaños de ventaja a AP-PDP-PL. El PSOE dobla en votos a AP-PDP-PL y AP-PDP-PL dobla a IU.
    <br><br>
    <h1 style="color: black;"><span class="escaños">Pasa a 10 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/andalucia/malaga" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 7 Escaños</span> 
        <span style="color: #0000FF;">PP 2 Escaños</span>
        <span style="color: #d25644;">IU-CA 1 Escaño</span>
        
    </a>
    <br><br
    El PSOE sigue ganando y sumando a IU-CA cuadriplican en escaños al PP. El PSOE duplica en votos al PP y el PP gana a IU-CA por 29830 votos
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/andalucia/malaga" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 6 Escaños</span> 
                    <span style="color: #0000FF;">PP 3 Escaños</span>
                    <span style="color: #d25644;">IU-CA 1 Escaño</span>
    
                </a>
                <br><br>
                El PSOE sigue ganando y sumando a IU-CA sacan cuatro escaños de ventaja al PP. El PSOE gana al PP por 107834 votos y el PP dobla a IU-CA.
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/andalucia/malaga" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 5 Escaños</span> 
                    <span style="color: #0000FF;">PP 4 Escaños</span>
        <span style="color: #d25644;">IU-CA 1 Escaño</span>
</a>
<br><br>
El PSOE sigue como vencedor y sumando el escaño de IU sacan dos escaños de ventaja al PP. El PSOE gana al PP por 24245 votos y el PP dobla a IU-CA.
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/andalucia/malaga" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #0000FF;">PP 5 Escaños</span>
        <span style="color: #FF0000;">PSOE-PROGR 4 Escaños</span>
        <span style="color: #d25644;">IU-CA 1 Escaño</span>
        
</a>
<br><br>
El PP las gana por primera vez, empatando en escaños a la suma de PSOE-PROGR e IU-CA. El PP gana al PSOE-PROGR por 28599 votos y PSOE-PROGR cuadruplica a IU-CA
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/andalucia/malaga" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 6 Escaños</span>
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    
    
</a>
<br><br>
El PSOE las gana sacando dos escaños de ventaja al PP. El PSOE gana al PP por 98695 votos
<br><br>
2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/andalucia/malaga" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #0000FF;">PP 5 Escaños</span> 

    
</a>
<br><br>
El PSOE repite como ganador en la provincia empatando en escaños al PP, al que aventaja en 30732 votos
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/01/29.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 6 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #d25644;">IU-CA 1 Escaño</span>
</a>
<br><br>
Con la mayoria absoluta de Rajoy, el PP las gana y saca dos escaños de ventaja a la suma de PSOE e IU-CA. El PP gana al PSOE por 130115 votos y el PSOE triplica a IU
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 11 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/01/29.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span>
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #FF7F00;">CS 2 Escaños</span>


</a>
<br><br>
El PP las gana y sumando CIUDADANOS sacan un escaño de ventaja a la suma de PSOE y PODEMOS. El PP gana al PSOE por 15877 votos, el PSOE gana a PODEMOS por 76060 votos y PODEMOS gana la tercera posición a CIUDADANOS por tan solo 160 votos
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/01/29.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span>
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #FF7F00;">CS 2 Escaños</span>
</a>
<br><br0>
El PP las vuelve a ganar y sumando CIUDADANOS sacan un escaño de ventaja a la suma de PSOE y PODEMOS. El PP gana al PSOE por 54482 votos, el PSOE gana a PODEMOS por 61162 votos y PODEMOS gana a CIUDADANOS por 18833 votos
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/01/29.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #FF7F00;">CS 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>  
    <span style="color: #008000;">VOX 1 Escaño</span>

</a>
<br><br>
El PSOE las gana con enorme ventaja y sumando a PODEMOS sacan un escaño de ventaja a la suma de CIUDADANOS, PP y VOX. El PSOE gana a CIUDADANOS por 92209 votos, CIUDADANOS gana al PP por 14635 votos, el PP gana a PODEMOS por 26294 votos y PODEMOS gana a VOX por 3985 votos
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/01/29.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #008000;">VOX 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>

</a>
<br><br>
El PSOE las vuelve a ganar, pero la suma de PP, VOX y CIUDADANOS le saca un escaño de ventaja a la suma de PSOE y PODEMOS. El PSOE gana al PP por 63654 votos, el PP gana a VOX por tan solo 897 votos, VOX gana a PODEMOS por 64479 votos y PODEMOS gana a CIUDADANOS por 30806 votos
<br><br>
2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/01/29/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span>
    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
    <span style="color: #008000;">VOX 2 Escaños</span>
    <span style="color: #FF69B4;">SUMAR 1 Escaño</span>  
    
</a>
<br><br>
El PP las gana y sumando a VOX sacan dos escaños de ventaja a la suma de PSOE y SUMAR. El PP gana al PSOE por 62828 votos. El PSOE gana a VOX por 109414 votos y VOX gana a SUMAR por 33106 votos
<br><br>
En conclusión, Málaga es una provincia con tradición fuertemente socialista, pero actualmente claramente de derechas. Aunque en sus inicios fue un bastión del PSOE aventajando enormemente a la derecha hasta 1996, a partir del año 2000 la situación comienza a igualarse marcandose empates en el 2000 y en el 2008.
Con la mayoría absoluta de Rajoy, la derecha ya le saca dos escaños de ventaja a la izquierda. A partir de este momento, en los años 2015 y 2016 es la derecha la que saca un escaño de ventaja a la izquierda, el 28 de abril la derecha pierde la ventaja momentaneamente, pero el 10 de noviembre de 2019 la recupera
y en el año 2023 la amplía, consolidandose el efecto "Moreno" y la consolidación de VOX. Actualmente es la segunda provincia más de derechas de Andalucía, solo por detrás de Almería 

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
        font-family: 'Segoe UI', sans-serif;
        background-color: #f4f4f8;
        margin: 0;
        padding: 20px;
    }
    h1 {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 30px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .boton-con-texto {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 140px;
    }
    .titulo-boton {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 8px;
        text-align: center;
    }
    .button {
        width: 140px;
        height: 90px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
    }
    
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
            <h1 style="color: black;">Alicante <span class="escaños">9 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/comunidad-valenciana/alicante" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 4 Escaños</span> 
        <span style="color: #FFA500;">UCD 4 Escaños</span>
        <span style="color: #FF0D00;">PCE 1 Escaño</span> 
        
    </a>
    <br><br>
    El PSOE gana las primeras elecciones y sumando al PCE sacan un escaño de ventaja a UCD. El PSOE gana a UCD por 16142 votos y UCD triplica al PCE
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/comunidad-valenciana/alicante" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 4 Escaños</span> 
        <span style="color: #FFA500;">UCD 4 Escaños</span>
        <span style="color: #FF0D00;">PCE 1 Escaño</span> 

    </a>
    <br><br>
    El PSOE las vuelve a ganar y sumando al PCE sacan un escaño de ventaja a UCD. El PSOE gana a UCD por 10567 votos y UCD triplica al PCE
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/comunidad-valenciana/alicante" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 6 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-UV 3 Escaños</span> 
          
    </a>
    <br><br>
    El PSOE las gana doblando en escaños a AP-PDP-UV al que aventaja en 163592 votos
    <br><br>
    <h1 style="color: black;"><span class="escaños">Pasa a 10 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/comunidad-valenciana/alicante" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 6 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PL 3 Escaños</span> 
        <span style="color: #006400;">CDS 1 Escaño</span>
        
    </a>
    <br><br>
    El PSOE las vuelve a ganar y saca dos escaños de ventaja a la suma de AP-PDP-PL y CDS. El PSOE gana a AP-PDP-PL por 126364 votos y AP-PDP-PL triplica a CDS
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/comunidad-valenciana/alicante" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 5 Escaños</span> 
        <span style="color: #0000FF;">PP 3 Escaños</span>
        <span style="color: #006400;">CDS 1 Escaño</span>
        <span style="color: #d25644;">IU 1 Escaño</span>
        
    </a>
    <br><br>
    El PSOE las vuelve a ganar y sumando a IU sacan dos escaños de ventaja a la suma de PP y CDS. El PSOE gana al PP por 95855 votos, el PP casi triplica a CDS y CDS gana a IU por 6739 votos
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/comunidad-valenciana/alicante" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 5 Escaños</span>
        <span style="color: #FF0000;">PSOE 4 Escaños</span>
        <span style="color: #d25644;">EU-PV 1 Escaño</span>
                    
                
                </a>
                <br><br>
                El PP las gana empatando en escaños a la suma de PSOE y EU-PV.El PP gana al PSOE por 27558 votos y el PSOE triplica a EU-PV
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 11 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/comunidad-valenciana/alicante" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 5 Escaños</span>
        <span style="color: #FF0000;">PSOE 5 Escaños</span>
        <span style="color: #d25644;">EUPV 1 Escaño</span>
</a>
<br><br>
El PP sigue ganando, pero la suma de PSOE y EUPV le saca un escaño de ventaja. El PP gana al PSOE por 47172 votos y el PSOE triplica a EUPV
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/comunidad-valenciana/alicante" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 7 Escaños</span>
        <span style="color: #FF0000;">PSOE-PROGR 4 Escaños</span>
</a>
<br><br>
El PP sigue como ganador, sacando tres escaños de ventaja a PSOE-PROGR, al que aventaja en 156655 votos
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/comunidad-valenciana/alicante" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 6 Escaños</span> 
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    
</a>
<br><br>
El PP continúa como primera fuerza sacando un escaño de ventaja al PSOE al que aventaja en 60181 votos
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 12 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/comunidad-valenciana/alicante" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 7 Escaños</span> 
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    
    
</a>
<br><br>
El PP repite como ganador en la provincia sacando dos escaños de ventaja al PSOE, al que aventaja en 105675 votos
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/17/03.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 8 Escaños</span> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
</a>
<br><br>
Con la mayoría absoluta de Rajoy, el PP sigue ganando, duplicando en escaños y en votos al PSOE
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/17/03.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #800080;">PODEMOS-COMPROMIS 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #FF7F00;">CS 2 Escaños</span>


</a>
<br><br>
El PP vuelve a ganar y sumando a CIUDADANOS empatan en escaños a la suma de PODEMOS-COMPROMIS y el PSOE. El PP gana a PODEMOS-COMPROMIS por 95824 votos, PODEMOS-COMPROMIS gana al PSOE por 12518 votos y el PSOE gana a CIUDADANOS por 34330 votos
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/17/03.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #800080;">PODEMOS-COMPROMIS-EUV 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #FF7F00;">CS 2 Escaños</span>
</a>
<br><br>
El PP continúa ganando y sumando a CIUDADANOS sacan dos escaños de ventaja a la suma de PODEMOS y PSOE. El PP gana a PODEMOS-COMPROMIS-EUV por 136835 votos, PODEMOS-COMPROMIS-EUV gana al PSOE por 5109 votos y el PSOE gana a CIUDADANOS por 48993 votos
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/17/03.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF7F00;">CS 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span>

</a>
<br><br>
El PSOE las gana y sumando a PODEMOS empatan en escaños a la suma de PP, CIUDADANOS y VOX. El PSOE gana al PP por 79852 votos, el PP gana a CIUDADANOS por tan solo 1509 votos, CIUDADANOS gana a PODEMOS por 50140 votos y PODEMOS gana a VOX por 12080 votos
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/17/03.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #008000;">VOX 3 Escaños</span> 
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
El PSOE las gana, pero la suma de PP, VOX y CIUDADANOS saca un escaño de ventaja a la suma de PSOE y PODEMOS. El PSOE gana al PP por 32892 vots, el PP gana a VOX por 39915 votos, VOX gana a PODEMOS por 58862 votos y PODEMOS gana a CIUDADANOS por 39390 votos
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/15/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span>
    <span style="color: #FF0000;">PSOE 4 Escaño</span> 
    <span style="color: #008000;">VOX 2 Escaños</span>
    <span style="color: #FF69B4;">SUMAR 1 Escaño</span> 
    
</a>
<br><br>
El PP las gana y sumando a VOX sacan dos escaños de ventaja a la suma de PSOE y SUMAR. El PP gana al PSOE por 42556 votos, el PSOE gana a VOX por 141604 votos y VOX gana a SUMAR por 30346 votos
<br><br>
En conclusión, Alicante es una provincia de fuerte tradición socialista hasta 1989. actualmente es de derechas. A partir de 1993 comienza a igualarse la situación con un empate y en el año 2000 la derecha empieza a ganar fortaleza, incluso en el 2011, con la mayoría absoluta de Rajoy, el PP dobla al PSOE en votos y en escaños.
A continuación se suceden empates y victorias del bloque de la derecha por dos escaños. En el año 2015, empate, en 2016 la derecha aventaja en dos escaños, el 28 de abril de 2019 empate, el 10 de noviembre de 2019 la derecha aventaja en dos escaños, y en el 2023 se consolida la ventaja de la 
derecha en esos dos escaños de ventaja.Si bien es cierto, que Alicante en su conjunto es de derechas, dentro de Alicante encontramos dos almas: el norte es de izquierdas debido al nacionalismo valenciano, que tiene un peso significativo. En el sur,en cambio, la agricultura es una parte esencial de la economía y suele estar vinculada a un voto más tradicional, influido en parte por asociaciones agrarias y posiciones ideológicas más conservadoras.


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
        font-family: 'Segoe UI', sans-serif;
        background-color: #f4f4f8;
        margin: 0;
        padding: 20px;
    }
    h1 {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 30px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .boton-con-texto {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 140px;
    }
    .titulo-boton {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 8px;
        text-align: center;
    }
    .button {
        width: 140px;
        height: 90px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
    }
    
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
            <h1 style="color: black;">Sevilla <span class="escaños">12 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/andalucia/sevilla" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 5 Escaños</span>
        <span style="color: #FFA500;">UCD 5 Escaños</span> 
        <span style="color: #FF0D00;">PCE 2 Escaños</span> 
        
    </a>
    <br><br>
    El PSOE gana las primeras elecciones y sumando al PCE sacan dos escaños de ventaja a UCD. El PSOE gana a UCD por 28084 votos y UCD dobla al PCE
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/andalucia/sevilla" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 4 Escaños</span> 
        <span style="color: #FFA500;">UCD 4 Escaños</span>
        <span style="color: #FF0D00;">PCE 2 Escaños</span> 
        <span style="color: #15AA35;">PSA-PA 2 Escaños</span>

    </a>
    El PSOE las vuelve a ganar y sumando al PCE y a PSA-PA doblan en escaños a UCD. El PSOE gana a UCD por 12369 votos, UCD gana al PCE por 80368 votos y el PCE gana a PSA-PA por 9130 votos
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/andalucia/sevilla" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSA-PSOE 8 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 3 Escaños</span> 
        <span style="color: #FF0D00;">PCA-PCE 1 Escaño</span> 
          
    </a>
    <br><br>
    El PSA-PSOE las gana y sumando a PCA-PCE triplican en escaños a AP-PDP. El PSA-PSOE dobla a AP-PDP en votos y AP-PDP triplica a PCA-PCE
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/andalucia/sevilla" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 8 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PL 3 Escaños</span>
        <span style="color: #d25644;">IU 1 Escaño</span>
        
    </a>
    <br><br>
    El PSOE sigue como vencedor y sumando a IU triplican en escaños a AP-PDP-PL. El PSOE dobla a AP-PDP-PL en votos y AP-PDP-PL dobla a IU.
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/andalucia/sevilla" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 8 Escaños</span> 
        <span style="color: #0000FF;">PP 2 Escaños</span>
        <span style="color: #d25644;">IU-CA 1 Escaño</span>
        <span style="color: #15AA35;">PA 1 Escaño</span>
        
    </a>
    <br><br
    El PSOE sigue ganando y sumando a IU-CA y PA quintuplican en escaños al PP. El PSOE dobla al PP en votos, el PP gana a IU-CA por 60825 votos e IU-CA gana a PA por 20049 votos
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/andalucia/sevilla" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 8 Escaños</span> 
                    <span style="color: #0000FF;">PP 3 Escaños</span>
                    <span style="color: #d25644;">IU-CA 1 Escaño</span>
    
                </a>
                <br><br>
                El PSOE sigue ganando y sumando a IU-CA triplican en escaños al PP. El PSOE dobla al PP en votos y el PP dobla a IU-CA 
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 13 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/andalucia/sevilla" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 7 Escaños</span> 
                    <span style="color: #0000FF;">PP 4 Escaños</span>
        <span style="color: #d25644;">IU-CA 2 Escaños</span>
</a>
<br><br>
El PSOE sigue como vencedor y sumando el escaño de IU-CA sacan cinco escaños de ventaja al PP. El PSOE gana al PP por 194100 votos y el PP dobla a IU-CA
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/andalucia/sevilla" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE-PROGR 7 Escaños</span>
        <span style="color: #0000FF;">PP 5 Escaños</span>
        <span style="color: #d25644;">IU-CA 1 Escaño</span>
        
</a>
<br><br>
PSOE-PROGR las gana y sumando a IU-CA sacan tres escaños de ventaja al PP. El PSOE-PROGR gana al PP por 136398 votos y el PP cuadruplica a IU-CA
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 12 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/andalucia/sevilla" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 8 Escaños</span>
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    
    
</a>
<br><br>
El PSOE las gana doblando en escaños y en votos al PP
<br><br>
2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/andalucia/sevilla" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 8 Escaños</span>
    <span style="color: #0000FF;">PP 4 Escaños</span> 

    
</a>
<br><br>
El PSOE repite como ganador en la provincia doblando en escaños al PP, al que aventaja en 286914 votos
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/01/41.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 6 Escaños</span>
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #d25644;">IU-CA 1 Escaño</span>
</a>
<br><br>
El PSOE continúa ganando y sumando a IU-CA sacan dos escaños de ventaja al PP. El PSOE gana al PP por 32221 votos y el PP cuadruplica a IU-CA
<br><br>
2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/01/41.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #FF7F00;">CS 2 Escaños</span>


</a>
<br><br>
El PSOE las gana y sumando a PODEMOS sacan dos escaños de ventaja a la suma de PP y CIUDADANOS. El PSOE gana al PP por 95768 votos, el PP gana a PODEMOS por 67509 votos y PODEMOS gana a CIUDADANOS por 65525 votos
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/01/41.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 4 Escaños</span>
    <span style="color: #800080;">PODEMOS 3 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br0>
El PSOE las vuelve a ganar y sumando a PODEMOS sacan dos escaños de ventaja a la suma de PP y CIUDADANOS. El PSOE gana al PP por 48348 votos, el PP gana a PODEMOS por 85409 votos y PODEMOS gana a CIUDADANOS por 76526 votos
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/01/41.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #FF7F00;">CS 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #008000;">VOX 1 Escaño</span>

</a>
<br><br>
El PSOE las gana con enorme ventaja y sumando a PODEMOS sacan dos escaños de ventaja a la suma de CIUDADANOS, PP y VOX. El PSOE dobla a CIUDADANOS en votos, CIUDADANOS gana a PODEMOS por 7973 votos, CIUDADANOS gana a PODEMOS por 16215 votos, PODEMOS gana al PP por 16215 votos y el PP gana a VOX por 25868 votos
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/01/41.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>

</a>
<br><br>
El PSOE las vuelve a ganar y sumando a PODEMOS sacan dos escaños de ventaja a la suma de VOX, PP y CIUDADANOS. El PSOE dobla a VOX. VOX gana al PP por tan solo 647 votos, el PP gana a PODEMOS por 34731 votos y PODEMOS gana a CIUDADANOS por 69860 votos
<br><br>
2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/01/41/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 5 Escaños</span> 
    <span style="color: #0000FF;">PP 4 Escaños</span>
    <span style="color: #FF69B4;">SUMAR 2 Escaños</span>  
    <span style="color: #008000;">VOX 1 Escaño</span>

    
</a>
<br><br>
El PSOE las gana y sumando a SUMAR sacan dos escaños de ventaja a la suma de PP y VOX. El PSOE gana al PP por 34097 votos, el PP dobla a SUMAR y SUMAR gana la tercera posición y el segundo escaño a VOX por 7658 votos
<br><br>
En conclusión, Sevilla es un bastión socialista, con el PSOE ganando todas las elecciones desde 1977. A pesar de la fragmentación de la izquierda y el avance del PP en ciertos momentos, los socialistas han logrado mantener su liderazgo.La mayor ventaja de la izquierda se da en 1989 cuando consiguen quintuplicar al PP.
Los mejores resultados del bloque de la derecha se dan en 1977, 2000, 2011 y en las últimas cinco elecciones: 2015, 2016, el 28 de abril de 2019, el 10 de noviembre de 2019 y en 2023. Son en estos años donde el bloque de la derecha alcanzó su máximo con cinco escaños, lo que, dado que la provincia siempre ha repartido doce, supone ni siquiera haber logrado un empate hasta la actualidad

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
        font-family: 'Segoe UI', sans-serif;
        background-color: #f4f4f8;
        margin: 0;
        padding: 20px;
    }
    h1 {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 30px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .boton-con-texto {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 140px;
    }
    .titulo-boton {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 8px;
        text-align: center;
    }
    .button {
        width: 140px;
        height: 90px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
    }
    
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
            <h1 style="color: black;">Valencia <span class="escaños">15 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/comunidad-valenciana/valencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 7 Escaños</span> 
        <span style="color: #FFA500;">UCD 5 Escaños</span>
        <span style="color: #FF0D00;">PCE 1 Escaño</span> 
        <span style="color: #ADD8E6;">AP 1 Escaño</span>
        <span style="color: #FF6767;">PSP-US 1 Escaño</span>
        
    </a>
    <br><br>
    El PSOE gana las primeras elecciones y sumando al PCE y PSP-US sacan tres escaños de ventaja a la suma de UCD y AP. El PSOE gana a UCD por 60506 votos, UCD triplica al PCE, el PCE gana a AP por 45723 votos y AP gana a PSP-US por tan solo 1756 votos
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/comunidad-valenciana/valencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 7 Escaños</span> 
        <span style="color: #FFA500;">UCD 6 Escaños</span>
        <span style="color: #FF0D00;">PCE 2 Escaños</span> 

    </a>
    <br><br>
    El PSOE las vuelve a ganar y sumando al PCE sacan tres escaños de ventaja a UCD. El PSOE gana a UCD por 30638 votos y UCD dobla al PCE
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/comunidad-valenciana/valencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 10 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-UV 5 Escaños</span> 
          
    </a>
    <br><br>
    El PSOE las gana doblando en escaños a AP-PDP-UV al que aventaja en 285241 votos
    <br><br>
    <h1 style="color: black;"><span class="escaños">Pasa a 16 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/comunidad-valenciana/valencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 9 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PL 5 Escaños</span> 
        <span style="color: #006400;">CDS 1 Escaño</span>
        <span style="color: #27345a;">UV 1 Escaño</span>
        
    </a>
    <br><br>
    El PSOE las vuelve a ganar y saca dos escaños de ventaja a la suma de AP-PDP-PL, CDS y UV. El PSOE gana a AP-PDP-PL por 230626 votos, AP-PDP-PL triplica a CDS y CDS gana a UV por 37909 votos 
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/comunidad-valenciana/valencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 8 Escaños</span> 
        <span style="color: #0000FF;">PP 4 Escaños</span>
        <span style="color: #27345a;">UV 2 Escaños</span>
        <span style="color: #d25644;">IU 1 Escaño</span>
        
    </a>
    <br><br>
    El PSOE las vuelve a ganar y sumando a IU sacan tres escaños de ventaja a la suma de PP y UV. El PSOE gana al PP por 190557 votos, el PP dobla a UV y UV gana a IU por 19004 votos
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/comunidad-valenciana/valencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 7 Escaños</span>
        <span style="color: #FF0000;">PSOE 6 Escaños</span>
        <span style="color: #d25644;">EU-PV 2 Escaños</span>
        <span style="color: #27345a;">UV 1 Escaño</span>
                    
                
                </a>
                <br><br>
                El PP las gana y sumando a UV empatan en escaños a la suma del PSOE y EU-PV. El PP gana al PSOE por 9270 votos, el PSOE triplica a EU-PV y EU-PV gana a UV por 53341 votos 
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/comunidad-valenciana/valencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 7 Escaños</span>
        <span style="color: #FF0000;">PSOE 6 Escaños</span>
        <span style="color: #d25644;">EU-PV 2 Escaños</span>
        <span style="color: #27345a;">UV 1 Escaño</span>
</a>
<br><br>
El PP las gana y sumando a UV empatan en escaños a la suma del PSOE y EU-PV. El PP gana al PSOE por 73067 votos, el PSOE triplica a EU-PV y EU-PV dobla a UV  
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/comunidad-valenciana/valencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 9 Escaños</span>
        <span style="color: #FF0000;">PSOE-PROGR 6 Escaños</span>
        <span style="color: #d25644;">EU-PV 1 Escaño</span>
</a>
<br><br>
El PP sigue como ganador, sacando dos escaños escaños de ventaja a la suma de PSOE-PROGR y EU-PV. El PP gana al PSOE-PROGR por 231527 votos y el PSOE-PROGR quintuplica a EU-PV
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/comunidad-valenciana/valencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 8 Escaños</span> 
    <span style="color: #FF0000;">PSOE 7 Escaños</span>
    <span style="color: #d25644;">ENTESA 1 Escaño</span>
    
</a>
<br><br>
El PP continúa como primera fuerza empatando en escaños a la suma de PSOE y ENTESA (Coalición que formaron Esquerra Unida del País Valencià, Izquierda Republicana y el sector de Els Verds partidario de Carles Arnal constituido en un nuevo partido, Els Verds Esquerra Ecologista del País Valencià.). El PP gana al PSOE por 51693 votos y el PSOE multiplica por siete a ENTESA
<br><br>
2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/comunidad-valenciana/valencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 9 Escaños</span> 
    <span style="color: #FF0000;">PSOE 7 Escaños</span>
    
    
</a>
<br><br>
El PP repite como ganador en la provincia sacando dos escaños de ventaja al PSOE, al que aventaja en 170459 votos
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/17/46.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 9 Escaños</span> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #d25644;">EU-PV-EV 1 Escaño</span>
    <span style="color: #d64a26;">COMPROMIS 1 Escaño</span>
    <span style="color: #d7257d;">UPyD 1 Escaño</span>
</a>
<br><br>
Con la mayoría absoluta de Rajoy, el PP sigue ganando y sumando a UPYD sacan cuatro escaños de ventaja a la suma de PSOE, EU-PV-EV y COMPROMIS. El PP dobla al PSOE en votos, el PSOE triplica EU-PV-EV, EU-PV-EV gana a COMPROMIS por 10620 votos y COMPROMIS gana a UPyD por tan solo 1403 votos
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 15 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/17/46.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #800080;">PODEMOS-COMPROMIS 5 Escaños</span>
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #FF7F00;">CS 2 Escaños</span>


</a>
<br><br>
El PP vuelve a ganar pero la suma de PODEMOS-COMPROMIS y el PSOE sacan un escaño de ventaja a la suma de PP y CIUDADANOS. El PP gana a PODEMOS-COMPROMIS por 46276 votos, PODEMOS-COMPROMIS gana al PSOE por 120049 votos y el PSOE gana a CIUDADANOS por 54381 votos
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 16 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/17/46.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 6 Escaños</span> 
    <span style="color: #800080;">PODEMOS-COMPROMIS-EUPV 5 Escaños</span>
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #FF7F00;">CS 2 Escaños</span>
</a>
<br><br>
El PP continúa ganando y sumando a CIUDADANOS empatan en escaños a la suma de PODEMOS-COMPROMIS-EUPV y PSOE. El PP gana a PODEMOS-COMPROMIS por 89962 votos, PODEMOS-COMPROMIS-EUPV gana al PSOE por 106854 votos y el PSOE gana a CIUDADANOS por 80247 votos
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 15 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/17/46.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF7F00;">CS 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span>
    <span style="color: #d64a26;">COMPROMIS 1 Escaño</span>

</a>
<br><br>
El PSOE las gana, pero la suma de PP, CIUDADANOS y VOX saca un escaño de ventaja a la suma de PSOE, PODEMOS y COMPROMIS. El PSOE gana al PP por 137956 votos, el PP gana a CIUDADANOS por tan solo 1796 votos, CIUDADANOS gana a PODEMOS por 42933 votos, PODEMOS gana a VOX por 41033 votos y VOX gana a COMPROMIS por 44245 votos
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/17/46.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #008000;">VOX 3 Escaños</span> 
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #d64a26;">MES-COMPROMIS 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
El PSOE las gana y sumando a PODEMOS y MES COMPROMIS empatan en escaños a la suma de PP, VOX y CIUDADANOS. El PSOE gana al PP por 68950 votos, el PP gana a VOX por 61039 votos, VOX gana a PODEMOS por 54078 votos, PODEMOS gana a MES-COMPROMIS por 69277 votos y MES-COMPROMIS gana a CIUDADANOS por 15715 votos
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 16 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/17/46/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 6 Escaños</span>
    <span style="color: #FF0000;">PSOE 5 Escaños</span> 
    <span style="color: #FF69B4;">SUMAR 3 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span> 
    
</a>
<br><br>
El PP las gana y sumando a VOX empatan en escaños a la suma de PSOE y SUMAR. El PP gana al PSOE por 22116 votos, el PSOE gana a SUMAR por 218514 votos y SUMAR gana la tercera posición y el tercer escaño a VOX por 24182 votos
<br><br>
En conclusión, Valencia es una provincia, que comenzó siendo un bastión de izquierdas hasta 1989. En 1993 y 1996, izquierda y derecha, empatan por primera vez. A partir del año 2000 la tendencia cambia a favor de la derecha sacando dos escaños de ventaja a la izquierda.
En 2004 se vuelve al empate, en 2008 la derecha vuelve a sacar dos escaños de ventaja a la izquierda, en 2011 el PP sumando a UPyD (partido de centroizquierda, pero crítico con Zapatero) saca cuatro escaños de ventaja a la izquierda, en 2015 es la izquierda la que saca un escaño de ventaja a la derecha, en 2016 se vuelve al empate, el 
28 de abril y el 10 de noviembre de 2019 la derecha saca un escaño de ventaja a la izquierda y en 2023 empate. Gran fluctuación en la provincia donde las mayorías se ven condicionadas por si la provincia reparte 15 o 16 escaños. Actualmente a pesar del empate la izquierda saca 2066 votos de ventaja a la suma de la derecha, por lo que podríamos decir
que es está ligeramente inclinada a la izquierda



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
        font-family: 'Segoe UI', sans-serif;
        background-color: #f4f4f8;
        margin: 0;
        padding: 20px;
    }
    h1 {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 30px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .boton-con-texto {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 140px;
    }
    .titulo-boton {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 8px;
        text-align: center;
    }
    .button {
        width: 140px;
        height: 90px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
    }
    
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
            <h1 style="color: black;">Barcelona <span class="escaños">33 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/catalunya/barcelona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSC-PSOE 11 Escaño</span> 
        <span style="color: #CC0000;">PSUC-PCE 7 Escaños</span> 
        <span style="color: #FF5733;">PDPC 6 Escaños</span>
        <span style="color: #FFA500;">UCD 5 Escaños</span>
        <span style="color: #f8471b;">UDC-IDCC 2 Escaños</span>
        <span style="color: #f8af02;">EC-FED 1 Escaño</span> 
        <span style="color: #ADD8E6;">CC-AP 1 Escaño</span>
    </a>
    <br><br>
    El PSC gana las primeras elecciones y sumando a PSUC-PCE, PDPC, UDC-IDCC y EC-FED sacan ventiun escaños de ventaja a la suma de UCD y CC-AP. El PSC gana a PSUC-PCE por 252519 votos, PSUC-PCE gana a PDPC por 104563 votos, PDPC gana a UCD por 8941 votos, UCD dobla a UDC-IDCC (partido de centroderecha), UDC-IDCC gana a EC-FED (Esquerra de Cataluña) por 14885 votos y EC-FED gana a CC-AP por 37697 votos
Catalanismo)
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/catalunya/barcelona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSC-PSOE 12 Escaños</span>
        <span style="color: #CC0000;">PSUC-PCE 7 Escaños</span> 
        <span style="color: #FFA500;">CC-UCD 6 Escaños</span>
        <span style="color: #40E0D0;">CIU 6 Escaños</span> 
        <span style="color: #862634;">ERFN 1 Escaño</span>
        <span style="color: #006400;">CD 1 Escaño</span>
        
    </a>
    <br><br>
    El PSC las vuelve a ganar y sumando a PSUC-PCE, CIU y ERFN (Esquerra republicana front nacional) sacan diecinueve escaños de ventaja a la suma de CC-UCD y CD. El PSC gana a PSUC-PCE por 257939 votos, PSUC-PCE gana a CC-UCD por 49365 votos, CC-UCD gana a CIU por 25116 votos, CIU cuadruplica a ERFN y ERFN gana a CD por 4575 votos
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/catalunya/barcelona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSC-PSOE 18 Escaños</span>
        <span style="color: #40E0D0;">CIU 8 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 5 Escaños</span>
        <span style="color: #CC0000;">PSUC 1 Escaño</span>
        <span style="color: #c99f00;">ERC 1 Escaño</span>
    
    </a>
    <br><br>
    El PSC-PSOE las gana y sumando a CIU, PSUC y ERC sacan veintitres escaños de ventaja a AP-PDP. El PSC dobla a CIU, CIU gana a AP-PDP por 174588 votos, AP-PDP casi triplica a PSUC y PSUC gana a ERC por 31462 votos 
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/catalunya/barcelona" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #FF0000;">PSC-PSOE 16 Escaños</span>
        <span style="color: #40E0D0;">CIU 11 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PL 4 Escaños</span>
        <span style="color: #006400;">CDS 1 Escaño</span>
        <span style="color: #CC0000;">PSUC-ENE 1 Escaño</span>
    </a>
    <br><br>
    El PSC continúa como ganador y sumando a CIU y PSUC-ENE sacan veintitres escaños de ventaja a la suma de AP-PDP-PL y CDS. El PSC gana a CIU por 325763 votos, CIU duplica a AP-PDP-PL, AP-PDP-PL duplica a CDS y CDS gana a PSUC-ENE por 4780 votos
    <br><br>
    <h1 style="color: black;"><span class="escaños">Pasa a 32 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/catalunya/barcelona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSC-PSOE 14 Escaños</span>
        <span style="color: #40E0D0;">CIU 11 Escaños</span> 
        <span style="color: #0000FF;">PP 3 Escaños</span> 
        <span style="color: ##098f80;">IC 3 Escaños</span>
        <span style="color: #006400;">CDS 1 Escaño</span>
        
    </a>
    <br><br>
    El PSC continúa como ganador en la provincia y sumando a CIU e IC sacan veinticuatro escaños de ventaja a la suma de PP y CDS. El PSC gana a CIU por 161864 votos, CIU duplica al PP, el PP gana a IC por 56971 votos e IC gana a CDS por 89369 votos
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/catalunya/barcelona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSC-PSOE 12 Escaños</span>
        <span style="color: #40E0D0;">CIU 10 Escaños</span> 
        <span style="color: #0000FF;">PP 6 Escaños</span> 
        <span style="color: ##098f80;">IC 3 Escaños</span>
        <span style="color: #c99f00;">ERC 1 Escaño</span>
                
                </a>
                <br><br>
                El PSC las gana y sumando a CIU, IC y ERC sacan veinte escaños de ventaja al PP. El PSC gana a CIU por 178948 votos, CIU gana al PP por 370901 votos, el PP dobla a IC e IC gana a ERC por 117489 votos
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 31 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/catalunya/barcelona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSC-PSOE 13 Escaños</span>
        <span style="color: #40E0D0;">CIU 9 Escaños</span> 
        <span style="color: #0000FF;">PP 6 Escaños</span> 
        <span style="color: ##098f80;">IC-EV 2 Escaños</span>
        <span style="color: #c99f00;">ERC 1 Escaño</span>
</a>
<br><br>
El PSC las gana y sumando a CIU, IC-EV y ERC sacan diecinueve escaños de ventaja al PP. El PSC gana a CIU por 384507 votos, CIU gana al PP por 270509 votos, el PP dobla a IC-EV e IC-EV dobla a ERC
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/catalunya/barcelona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSC-PSOE 12 Escaños</span>
        <span style="color: #40E0D0;">CIU 9 Escaños</span> 
        <span style="color: #0000FF;">PP 8 Escaños</span> 
        <span style="color: #c99f00;">ERC 1 Escaño</span>
        <span style="color: ##098f80;">IC-EV 1 Escaño</span>
</a>
<br><br>
El PSC repite como fuerza ganadora y sumando a CIU, ERC e IC-EV sacan quince escaños de ventaja al PP. El PSC gana a CIU por 236043 votos, CIU gana al PP por 70781 votos, el PP cuadruplica a ERC y ERC gana a IC-EV por 27336 votos 
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/catalunya/barcelona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSC-PSOE 14 Escaños</span>
                    <span style="color: #40E0D0;">CIU 6 Escaños</span> 
                    <span style="color: #0000FF;">PP 5 Escaños</span> 
                    <span style="color: #c99f00;">ERC 4 Escaños</span>
                    <span style="color: ##098f80;">IC-EV 2 Escaños</span>
    
</a>
<br><br>
El PSC las gana y sumando a CIU, ERC e IC-EV sacan veintiun escaños de ventaja al PP. El PSC dobla a CIU, CIU gana al PP por 101350 votos, el PP gana a ERC por 56518 votos y ERC dobla a IC-EV  
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/catalunya/barcelona" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #FF0000;">PSC-PSOE 16 Escaños</span>
                    <span style="color: #40E0D0;">CIU 6 Escaños</span>
                    <span style="color: #0000FF;">PP 6 Escaños</span>
                    <span style="color: #c99f00;">ERC 2 Escaños</span>
                    <span style="color: ##098f80;">IC-EV 1 Escaño</span>
    
    
</a>
<br><br>
El PSC sigue ganando y sumando a CIU, ERC e IC-EV sacan diecinueve escaños de ventaja al PP. El PSC duplica a CIU en votos, CIU gana al PP por 77316 votos, el PP duplica a ERC y ERC gana a IC-EV por 28884 votos
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/09/08.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSC-PSOE 10 Escaños</span>
        <span style="color: #40E0D0;">CIU 9 Escaños</span> 
        <span style="color: #0000FF;">PP 7 Escaños</span>
        <span style="color: ##098f80;">IC-EV 3 Escaños</span>
        <span style="color: #c99f00;">ERC 2 Escaños</span>
</a>
<br><br>
El PSC las gana y sumando a CIU, IC-EV y ERC sacan diecisiete escaños de ventaja al PP. El PSC gana a CIU por 17042 votos, CIU gana al PP por 162802 votos, el PP dobla a IC-EV e IC-EV gana a ERC por 67726 votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/09/08.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #800080;">PODEMOS 9 Escaños</span> 
    <span style="color: #FF0000;">PSC-PSOE 5 Escaños</span>
    <span style="color: #c99f00;">ERC CATSÍ 5 Escaños</span>                
    <span style="color: #FF7F00;">CS 4 Escaños</span>
    <span style="color: #40E0D0;">DL 4 Escaños</span> 
    <span style="color: #0000FF;">PP 4 Escaños</span>
                    
                    
                     
</a>
<br><br>
Reconfiguración total de Barcelona: PODEMOS las gana y sumando al PSC, ERC CATSÍ y DL sacan quince escaños de ventaja a la suma de CIUDADANOS y PP. PODEMOS gana al PSC por 303277 votos, el PSC gana a ERC CATSÍ por 51072 votos, ERC CATSÍ gana a CIUDADANOS por 26397 votos, CIUDADANOS gana a DL por 8580 votos y DL gana al PP por 56295 votos
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/09/08.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #800080;">PODEMOS 9 Escaños</span> 
    <span style="color: #FF0000;">PSC-PSOE 5 Escaños</span>
    <span style="color: #c99f00;">ERC CATSÍ 5 Escaños</span> 
    <span style="color: #0000FF;">PP 4 Escaños</span>              
    <span style="color: #40E0D0;">CDC 4 Escaños</span>
    <span style="color: #FF7F00;">CS 4 Escaños</span>

</a>
<br><br>
PODEMOS las sigue ganando y sumando al PSC, ERC CATSÍ y CDC sacan quince escaños de ventaja a la suma de PP y CIUDADANOS. PODEMOS gana al PSC por 247058 votos, el PSC gana a ERC CATSÍ por 7467 votos, ERC CATSÍ gana al PP por 79591 votos, el PP gana a CDC por 33683 votos y CDC gana a CIUDADANOS por 19263 votos
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 32 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/09/08.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                    <span style="color: #FF0000;">PSC-PSOE 9 Escaños</span>
                    <span style="color: #c99f00;">ERC SOBERANISTES 8 Escaños</span>
                    <span style="color: #800080;">PODEMOS 6 Escaños</span> 
                    <span style="color: #FF7F00;">CS 4 Escaños</span>
                    <span style="color: #40E0D0;">JUNTS 3 Escaños</span>
                    <span style="color: #0000FF;">PP 1 Escaño</span>
                    <span style="color: #008000;">VOX 1 Escaño</span>

</a>
<br><br>
El PSC las gana y sumando a ERC SOBERANISTES, PODEMOS y JUNTS sacan veinte escaños de ventaja a la suma de CIUDADANOS, PP y VOX. El PSC gana a ERC SOBERANISTES por 53370 votos, ERC SOBERANISTES gana a PODEMOS por 204621 votos, PODEMOS gana a CIUDADANOS por 136334 votos, CIUDADANOS gana a JUNTS por 57409 votos, JUNTS dobla al PP y el PP gana a VOX por 43694 votos 
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/09/08.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSC-PSOE 8 Escaños</span>
    <span style="color: #c99f00;">ERC SOBERANISTES 7 Escaños</span> 
    <span style="color: #800080;">PODEMOS 5 Escaños</span>
    <span style="color: #40E0D0;">JUNTS 4 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span>
    <span style="color: #141818;">CUP 2 Escaños</span>
    <span style="color: #FF7F00;">CS 2 Escaños</span>
</a>
<br><br>
El PSC sigue ganando y sumando a ERC SOBERANISTES, PODEMOS, JUNTS y CUP sacan veinte escaños a la suma de PP, VOX y CIUDADANOS. El PSC gana a ERC por 19410 votos, ERC SOBERANISTES gana a PODEMOS por 166427 votos, PODEMOS gana a JUNTS por 108551 votos, JUNTS gana al PP por 118286 votos, el PP gana a VOX por 40930 votos, VOX gana a la CUP por 5674 votos y la CUP gana a CIUDADANOS por 4917 votos
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/09/43/" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #FF0000;">PSC-PSOE 13 Escaños</span>
                    <span style="color: #FF69B4;">SUMAR 5 Escaños</span>  
                    <span style="color: #0000FF;">PP 5 Escaños</span>
                    <span style="color: #c99f00;">ERC 4 Escaños</span>   
                    <span style="color: #40E0D0;">JUNTS 3 Escaños</span>
                    <span style="color: #008000;">VOX 2 Escaños</span>
    
</a>
<br><br>
El PSC las gana con enorme ventaja y sumando a SUMAR, ERC y JUNTS sacan dieciocho escaños de ventaja a la suma de PP y VOX. El PSC dobla a SUMAR. SUMAR gana al PP por 38474 votos, el PP gana a ERC por 38822 votos, ERC gana a JUNTS por 70538 votos y JUNTS gana a VOX por 56384 votos 
<br><br>
En conclusión Barcelona es una provincia claramente de izquierdas, con el PSC dominando en todas las elecciones menos en 2015 y 2016, donde se rompe el bipartidismo y PODEMOS gana las elecciones relegando al PSOE temporalmente a la segunda fuerza. Actualmente el PSOE es la fuerza claramente más sólida de Barcelona doblando a la segunda fuerza, que es SUMAR.
En cuanto al independentismo CIU obtiene fuerza en 1982 y supera a ERC hasta el 2011. En el 2015 tambien hay un cambio en el independentismo donde es ERC la que adelanta a DLC, aunque la ventaja se observa en mayor medida en ambas elecciones de 2019 y en menor medida en 2023, debido al retroceso enorme del independentismo.
Finalmente el bloque de la derecha ha tenido su mayor ventaja en el 2000 con la victoria de Aznar cuando el PP consigue 8 escaños y en el 2015 y 2016 la suma de PP y CIUDADANOS tambien da 8. En 2015, con el surgimiento de la nueva política CIUDADANOS sorpassa al PP en votos y en 2016 el PP recupera la hegemonía del bloque conservador, que vuelve a perder el 28 de abril de 2019 para recuperarla nuevamente el 10 de noviembre de 2019 y especialmente en 2023.


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
        font-family: 'Segoe UI', sans-serif;
        background-color: #f4f4f8;
        margin: 0;
        padding: 20px;
    }
    h1 {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 30px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .boton-con-texto {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 140px;
    }
    .titulo-boton {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 8px;
        text-align: center;
    }
    .button {
        width: 140px;
        height: 90px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
    }
    
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
if (provincia === "Madrid") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Madrid <span class="escaños">32 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/comunidad-de-madrid" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 11 Escaños</span>
        <span style="color: #FF0000;">PSOE 11 Escaños</span> 
        <span style="color: #FF0D00;">PCE 4 Escaños</span> 
        <span style="color: #ADD8E6;">AP 3 Escaños</span>
        <span style="color: #FF6767;">PSP-US 3 Escaños</span>
        
    </a>
    <br><br>
    UCD gana las primeras elecciones, pero la suma de PSOE, PCE y PSP-US saca cuatro escaños de ventaja a la suma de UCD y AP. UCD gana al PSOE por 6319 votos, el PSOE casi triplica al PCE. El PCE gana a AP por 4961 votos y AP gana a PSP-US por 30637 votos
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/comunidad-de-madrid" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 12 Escaños</span> 
        <span style="color: #FFA500;">UCD 12 Escaños</span>
        <span style="color: #FF0D00;">PCE 4 Escaños</span> 
        <span style="color: #006400;">CD 3 Escaños</span>
        <span style="color: #eea1ba;">UN 1 Escaño</span>

    </a>
    <br><br>
    El PSOE las gana y sumando al PCE empatan en escaños a la suma de UCD,CD y UN (Unión Nacional fue una coalición política española de extrema derecha que se presentó a las elecciones generales de 1979. Estaba formada por Fuerza Nueva, Falange Española de las JONS, Círculos Doctrinales José Antonio, Comunión Tradicionalista, Asociación de Jóvenes Tradicionalistas y Confederación Nacional de Excombatientes1​2​ y representaba a las fuerzas políticas defensoras del franquismo.) El PSOE gana a UCD por 4948 votos, UCD dobla al PCE, el PCE gana a CD por 112151 votos y CD gana a UN por 87615 
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/comunidad-de-madrid" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 18 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 11 Escaños</span> 
        <span style="color: #FF0D00;">PCE 1 Escaño</span> 
        <span style="color: #006400;">CDS 1 Escaño</span>
        <span style="color: #FFA500;">UCD 1 Escaño</span>
          
    </a>
    <br><br>
    El PSOE las gana y sumando al PCE sacan seis escaños de ventaja a la suma de AP-PDP, CDS y UCD. El PSOE gana a AP-PDP por 547765 votos, AP-PDP multiplica por seis al PCE, el PCE gana a CDS por 24075 votos y CDS gana UCD por 20876 votos
    <br><br>
    <h1 style="color: black;"><span class="escaños">Pasa a 33 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/comunidad-de-madrid" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 15 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PL 11 Escaños</span> 
        <span style="color: #006400;">CDS 5 Escaños</span>
        <span style="color: #d25644;">IU 2 Escaños</span>
        
    </a>
    <br><br>
    El PSOE las vuelve a ganar y sumando a IU sacan un escaño de ventaja a la suma de AP-PDP-PL y CDS. El PSOE gana a AP-PDP-PL por 228524 votos, AP-PDP-PL dobla a CDS y CDS duplica a IU
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/comunidad-de-madrid" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #0000FF;">PP 12 Escaños</span>
        <span style="color: #FF0000;">PSOE 12 Escaños</span>
        <span style="color: #d25644;">IU 5 Escaños</span>
        <span style="color: #006400;">CDS 4 Escaños</span>
        
    </a>
    <br><br>
    El PP las gana, pero la suma de PSOE e IU saca un escaño de ventaja a la suma de PP y CDS. El PP gana al PSOE por 19634 votos, el PSOE dobla a CDS y CDS gana a IU por 119203 votos
    <br><br>
    <h1 style="color: black;"><span class="escaños">Pasa a 34 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/comunidad-de-madrid" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 16 Escaños</span>
        <span style="color: #FF0000;">PSOE 13 Escaños</span>
        <span style="color: #d25644;">IU 5 Escaños</span>
                    
                
                </a>
                <br><br>
                El PP las gana, pero la suma de PSOE e IU le saca dos escaños de ventaja. El PP gana al PSOE por 280027 votos y el PSOE dobla a IU 
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/comunidad-de-madrid" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 17 Escaños</span>
        <span style="color: #FF0000;">PSOE 11 Escaños</span>
        <span style="color: #d25644;">IU 6 Escaños</span>
</a>
<br><br>
El PP las gana y empata en escaños a la suma de PSOE e IU. El PP gana al PSOE por 595585 votos y el PSOE gana a IU por 499003 votos  
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/comunidad-de-madrid" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 19 Escaños</span>
        <span style="color: #FF0000;">PSOE-PROGR 12 Escaños</span>
        <span style="color: #d25644;">IU-CM 3 Escaños</span>
</a>
<br><br>
El PP sigue como ganador, sacando cuatro escaños de ventaja a la suma de PSOE-PROGR e IU-CM. El PP gana al PSOE-PROGR por 602619 votos y el PSOE-PROGR triplica a IU-CM
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 35 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/comunidad-de-madrid" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 17 Escaños</span> 
    <span style="color: #FF0000;">PSOE 16 Escaños</span>
    <span style="color: #d25644;">IU 2 Escaños</span>
    
</a>
<br><br>
El PP continúa como primera fuerza, pero la suma de PSOE e IU le saca un escaño de ventaja. El PP gana al PSOE por 31960 votos y el PSOE multiplica por seis a IU
<br><br>
2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/comunidad-de-madrid" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 18 Escaños</span> 
    <span style="color: #FF0000;">PSOE 15 Escaños</span>
    <span style="color: #d25644;">IU-CM 1 Escaño</span>
    <span style="color: #d7257d;">UPyD 1 Escaño</span>
    
    
</a>
<br><br>
El PP repite como ganador en la provincia y sumando a UPyD sacan tres escaños de ventaja a la suma de PSOE e IU-CM. El PP gana al PSOE por 335903 votos, el PSOE multiplica por ocho a IU-CM e IU-CM gana a UPyD por 32500 votos
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 36 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/12/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 19 Escaños</span> 
    <span style="color: #FF0000;">PSOE 10 Escaños</span>
    <span style="color: #d7257d;">UPyD 4 Escaños</span>
    <span style="color: #d25644;">IU 3 Escaños</span>
</a>
<br><br>
Con la mayoría absoluta de Rajoy, el PP sigue ganando y sumando a UPYD sacan diez escaños de ventaja a la suma de PSOE e IU. El PP gana al PSOE por 840985 votos. el PSOE dobla a UPyD y UPyD gana a IU por 76145 votos
<br><br>
2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/12/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 13 Escaños</span> 
    <span style="color: #800080;">PODEMOS 8 Escaños</span>
    <span style="color: #FF7F00;">CS 7 Escaños</span>
    <span style="color: #FF0000;">PSOE 6 Escaños</span>
    <span style="color: #430050;">UNIDAD POPULAR 2 Escaños</span>


</a>
<br><br>
El PP las gana y sumando a CIUDADANOS sacan cuatro escaños de ventaja a la suma de PODEMOS, PSOE y UNIDAD POPULAR (fue una coalición electoral.Tuvo su origen en la plataforma Ahora en Común y en el grupo parlamentario de La Izquierda Plural en el Congreso de los Diputados, liderada por Alberto Garzón). El PP gana a PODEMOS por 453360 votos, PODEMOS gana a CIUDADANOS por 74088 votos, CIUDADANOS gana al PSOE por 33231 votos y el PSOE triplica a UNIDAD POPULAR
<br><br>
2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/12/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 15 Escaños</span> 
    <span style="color: #800080;">PODEMOS 8 Escaños</span>
    <span style="color: #FF0000;">PSOE 7 Escaños</span>
    <span style="color: #FF7F00;">CS 6 Escaños</span>
    
</a>
<br><br>
El PP continúa ganando y sumando a CIUDADANOS sacan seis escaños de ventaja a la suma de PODEMOS y PSOE. El PP gana a PODEMOS por 585977 votos, PODEMOS gana al PSOE por 55045 votos y el PSOE gana a CIUDADANOS por 64434 votos
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 37 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/12/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 11 Escaños</span>
    <span style="color: #FF7F00;">CS 8 Escaños</span>
    <span style="color: #0000FF;">PP 7 Escaños</span>
    <span style="color: #800080;">PODEMOS 6 Escaños</span>
    <span style="color: #008000;">VOX 5 Escaños</span>

</a>
<br><br>
El PSOE las gana, pero la suma de CIUDADANOS, PP y VOX le saca tres escaños de ventaja a la suma de PSOE y PODEMOS. El PSOE gana a CIUDADANOS por 238428 votos, CIUDADANOS gana al PP por 86121 votos, el PP gana a PODEMOS por 90102 votos y PODEMOS gana a VOX por 89385 votos
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/12/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 10 Escaños</span>
    <span style="color: #0000FF;">PP 10 Escaños</span> 
    <span style="color: #008000;">VOX 7 Escaños</span> 
    <span style="color: #800080;">PODEMOS 5 Escaños</span>
    <span style="color: #FF7F00;">CS 3 Escaños</span>
    <span style="color: #4ae5d2;">MÁS PAÍS 2 Escaños</span>
</a>
<br><br>
El PSOE las gana, pero la suma de PP, VOX y CIUDADANOS le saca tres escaños de ventaja a la suma de PSOE, PODEMOS y MÁS PAÍS. El PSOE gana al PP por 69927 votos, el PP gana a VOX por 233998 votos, VOX gana a PODEMOS por 189847 votos, PODEMOS gana a CIUDADANOS por 140553 votos y CIUDADANOS gana a MÁS PAÍS por 121687 votos
<br><br>
2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/12/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 16 Escaños</span>
    <span style="color: #FF0000;">PSOE 10 Escaños</span> 
    <span style="color: #FF69B4;">SUMAR 6 Escaños</span>
    <span style="color: #008000;">VOX 5 Escaños</span> 
    
</a>
<br><br>
El PP las gana y sumando a VOX sacan cinco escaños de ventaja a la suma de PSOE y SUMAR. El PP gana al PSOE por 458584 votos, el PSOE gana a SUMAR por 446819 votos y SUMAR gana la tercera posición a VOX por 51616 votos
<br><br>
En conclusión, Madrid es una provincia claramente de derechas. Comenzó siendo un feudo socialista hasta 1993, pero es a partir de 1996 con la victoria de Aznar donde se marca el primer empate entre izquierda y derecha. En el 2000 se comienzó a sacar amplia ventaja a la izquierda, en el 2004 retrocede siendo la izquierda la que le saca un escaño de ventaja,
pero en el 2008 la recupera y a partir de este momento, a pesar de las victorias del PSOE el 28 de abril y el 10 de noviembre de 2019, es el bloque de la derecha el que siempre saca ventaja en escaños. Uno de los aspectos más llamativos es la evolución del número de escaños que reparte la provincia.Comenzó reaprtiendo repartiendo 32 escaños, uno menos, por
aquel entonces que Barcelona. En 1986 pasa a 33 escaños, en 1993 a 34, en el 2004 a 35, en el 2011 a 36 y el 28 de abril de 2019 a los 37 escaños actuales.En los años 90, Madrid comenzó a consolidarse como centro financiero y empresarial, con un crecimiento económico fuerte que atrajo inversiones y aumentó la población de clase media-alta, tradicionalmente más inclinada hacia el voto conservador, de ahí el cambio.
El cambio en Madrid no solo se reflejó en las elecciones generales, sino que ya en 1995, en las elecciones autonómicas, el PP logró ganar por primera vez en la Comunidad de Madrid. Alberto Ruiz-Gallardón fue investido presidente con el apoyo de Unión Centrista Liberal (UCL). Desde entonces, el PP ha gobernado Madrid de manera ininterrumpida durante casi 30 años.
Es llamativo que Madrid sea tan fuertemente de derechas, la tendencia general es que las grandes capitales europeas suelen votar a la izquierda: París, Berlín, Londres, Roma, Lisboa, Oslo, Copenhague, Amsterdam, Helsinki...
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Madrid</title>
            
    <style>
    body {
        font-family: 'Segoe UI', sans-serif;
        background-color: #f4f4f8;
        margin: 0;
        padding: 20px;
    }
    h1 {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 30px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .boton-con-texto {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 140px;
    }
    .titulo-boton {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 8px;
        text-align: center;
    }
    .button {
        width: 140px;
        height: 90px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
    }
    
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
if (provincia === "España") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">España <span class="escaños">350 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/comunidad-de-madrid" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 165 Escaños</span>
        <span style="color: #FF0000;">PSOE 118 Escaños</span> 
        <span style="color: #FF0D00;">PCE 20 Escaños</span> 
        <span style="color: #ADD8E6;">AP 16 Escaños</span>
        <span style="color: #FF5733;">PDPC 11 Escaños</span>
        <span style="color: #298242;">PNV 8 Escaños</span>
        <span style="color: #FF6767;">PSP-US 6 Escaños</span>
        <span style="color: #f8471b;">UDC-IDCC 2 Escaños</span>
        <span style="color: #f8af02;">EC-FED 1 Escaño</span> 
        <span style="color: #DC143C ;">EE 1 Escaño</span>
        <span style="color: #c2272c;">CAIC 1 Escaño</span>
        <span style="color: #000080;">INDEP 1 Escaño</span>
        
    </a>
    <br><br>
    UCD gana las primeras elecciones
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 168 Escaños</span>
        <span style="color: #FF0000;">PSOE 121 Escaños</span> 
        <span style="color: #FF0D00;">PCE 23 Escaños</span> 
        <span style="color: #006400;">CD 9 Escaños</span>
        <span style="color: #40E0D0;">CIU 8 Escaños</span>
        <span style="color: #298242;">PNV 7 Escaños</span>
        <span style="color: #15AA35;">PSA-PA 5 Escaños</span>
        <span style="color: #01b59c;">HB 3 Escaños</span>
        <span style="color: #eea1ba;">UN 1 Escaño</span>
        <span style="color: #862634;">ERFN 1 Escaño</span>
        <span style="color: #DC143C ;">EE 1 Escaño</span>
        <span style="color: #FF0D00;">C-UPC 1 Escaño</span>
        <span style="color: #c99f00;">PAR 1 Escaño</span>
        <span style="color: #8B4513;">UPN 1 Escaño</span>

    </a>
    <br><br>
    UCD las vuelve a ganar
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 202 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 107 Escaños</span> 
        <span style="color: #40E0D0;">CIU 12 Escaños</span>
        <span style="color: #FFA500;">UCD 11 Escaños</span>
        <span style="color: #298242;">PNV 8 Escaños</span>
        <span style="color: #FF0D00;">PCE 4 Escaños</span> 
        <span style="color: #006400;">CDS 2 Escaños</span>
        <span style="color: #01b59c;">HB 2 Escaños</span>
        <span style="color: #c99f00;">ERC 1 Escaño</span> 
        <span style="color: #DC143C ;">EE 1 Escaño</span>
          
    </a>
    <br><br>
    El PSOE arrasa con Felipe González con 202 escaños
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 184 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PL 105 Escaños</span> 
        <span style="color: #006400;">CDS 19 Escaños</span>
        <span style="color: #40E0D0;">CIU 18 Escaños</span>
        <span style="color: #d25644;">IU 7 Escaños</span>
        <span style="color: #298242;">PNV 6 Escaños</span>
        <span style="color: #01b59c;">HB 5 Escaños</span>
        <span style="color: #DC143C ;">EE 2 Escaños</span>
        <span style="color: #FFA500;">CG 1 Escaño</span>
        <span style="color: #c99f00;">PAR 1 Escaño</span>
        <span style="color: #041595;">AIC 1 Escaño</span>
        <span style="color: #27345a;">UV 1 Escaño</span>
        
    </a>
    <br><br>
    El PSOE las vuelve a ganar
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #FF0000;">PSOE 175 Escaños</span>
        <span style="color: #0000FF;">PP 107 Escaños</span>
        <span style="color: #40E0D0;">CIU 18 Escaños</span>
        <span style="color: #d25644;">IU 17 Escaños</span>
        <span style="color: #006400;">CDS 14 Escaños</span>
        <span style="color: #298242;">PNV 5 Escaños</span>
        <span style="color: #01b59c;">HB 4 Escaños</span>
        <span style="color: #15AA35;">PA 2 Escaños</span>
        <span style="color: #27345a;">UV 2 Escaños</span>
        <span style="color: #298242;">EUSKO ALKARTASUNA 2 Escaños</span> 
        <span style="color: #DC143C ;">EE 2 Escaños</span>
        <span style="color: #c99f00;">PAR 1 Escaño</span>
        <span style="color: #041595;">AIC 1 Escaño</span>
    </a>
    <br><br>
    El PSOE las gana por tercera vez consecutiva
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 159 Escaños</span>
                    <span style="color: #0000FF;">PP 141 Escaños</span>
        <span style="color: #d25644;">IU 18 Escaños</span>
        <span style="color: #40E0D0;">CIU 17 Escaños</span>
        <span style="color: #298242;">PNV 5 Escaños</span>
        <span style="color: #01add7;">CCA 4 Escaños</span>
        <span style="color: #01b59c;">HB 2 Escaños</span>
        <span style="color: #c99f00;">ERC 1 Escaño</span> 
        <span style="color: #c99f00;">PAR 1 Escaño</span>
        <span style="color: #298242;">EUSKO ALKARTASUNA 1 Escaño</span> 
        <span style="color: #27345a;">UV 1 Escaño</span>
                    
                
                </a>
                <br><br>
                El PSOE las gana por cuarta vez consecutiva
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 156 Escaños</span>
        <span style="color: #FF0000;">PSOE 141 Escaños</span>
        <span style="color: #d25644;">IU 21 Escaños</span>
        <span style="color: #40E0D0;">CIU 16 Escaños</span>
        <span style="color: #298242;">PNV 5 Escaños</span>
        <span style="color: #01add7;">CCA 4 Escaños</span>
        <span style="color: #74b1e0;">BNG 2 Escaños</span>
        <span style="color: #01b59c;">HB 2 Escaños</span>
        <span style="color: #c99f00;">ERC 1 Escaño</span>
        <span style="color: #298242;">EUSKO ALKARTASUNA 1 Escaño</span> 
        <span style="color: #27345a;">UV 1 Escaño</span>


</a>
<br><br>
El PP las gana por primera y desbanca a Felipe González
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 183 Escaños</span>
        <span style="color: #FF0000;">PSOE-PROGR 125 Escaños</span>
        <span style="color: #40E0D0;">CIU 15 Escaños</span>
        <span style="color: #d25644;">IU 8 Escaños</span>
        <span style="color: #298242;">PNV 7 Escaños</span>
        <span style="color: #01add7;">CCA 4 Escaños</span>
        <span style="color: #74b1e0;">BNG 3 Escaños</span>
        <span style="color: #15AA35;">PA 1 Escaño</span>
        <span style="color: #c99f00;">ERC 1 Escaño</span>
        <span style="color: ##098f80;">IC-EV 1 Escaño</span>
        <span style="color: #298242;">EUSKO ALKARTASUNA 1 Escaño</span> 
        <span style="color: #ab001c;">CHA 1 Escaño</span>
</a>
<br><br>
Aznar obtiene mayoría absoluta sumando 183 escaños
<br><br>
2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 164 Escaños</span>
    <span style="color: #0000FF;">PP 148 Escaños</span>
    <span style="color: #40E0D0;">CIU 10 Escaños</span>
    <span style="color: #c99f00;">ERC 8 Escaños</span>
    <span style="color: #298242;">PNV 7 Escaños</span>
    <span style="color: #d25644;">IU 5 Escaños</span>
    <span style="color: #01add7;">CCA 3 Escaños</span>
    <span style="color: #74b1e0;">BNG 2 Escaños</span>
    <span style="color: #ab001c;">CHA 1 Escaño</span>
    <span style="color: #298242;">EUSKO ALKARTASUNA 1 Escaño</span> 
    <span style="color: #298242;">NA-BAI 1 Escaño</span>
    
</a>
<br><br>
Zapatero las gana en un giro politico en las encuestas sin precedentes
<br><br>
2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 169 Escaños</span>
    <span style="color: #0000FF;">PP 154 Escaños</span> 
    <span style="color: #40E0D0;">CIU 10 Escaños</span>
    <span style="color: #298242;">PNV 6 Escaños</span>
    <span style="color: #c99f00;">ERC 3 Escaños</span>
    <span style="color: #d25644;">IU 2 Escaños</span>
    <span style="color: #74b1e0;">BNG 2 Escaños</span>
    <span style="color: #01add7;">CCA-PNC 2 Escaños</span>
    <span style="color: #d7257d;">UPyD 1 Escaño</span>
    <span style="color: #298242;">NA-BAI 1 Escaño</span>
    
    
</a>
<br><br>
Zapatero repite como ganador en un campaña más polarizada, donde el mapa de España se tiene exclusivamente de rojo y azul
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 186 Escaños</span> 
    <span style="color: #FF0000;">PSOE 110 Escaños</span>
    <span style="color: #40E0D0;">CIU 16 Escaños</span>
    <span style="color: #d25644;">IU 11 Escaños</span>
    <span style="color: #01b59c;">AMAIUR 7 Escaños</span>
    <span style="color: #d7257d;">UPyD 5 Escaños</span>
    <span style="color: #298242;">PNV 5 Escaños</span>
    <span style="color: #c99f00;">ERC 3 Escaños</span>
    <span style="color: #74b1e0;">BNG 2 Escaños</span>
    <span style="color: #01add7;">CCA-NC-PNC 2 Escaños</span>
    <span style="color: #d64a26;">COMPROMIS 1 Escaño</span>
    <span style="color: #014586;">FA 1 Escaño</span>
    <span style="color: #e99992;">GBAI 1 Escaño</span> 


</a>
<br><br>
Rajoy obtiene mayoría absoluta con 186 escaños
<br><br>
2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 123 Escaños</span> 
    <span style="color: #FF0000;">PSOE 90 Escaños</span>
    <span style="color: #800080;">PODEMOS 69 Escaños</span>
    <span style="color: #FF7F00;">CS 40 Escaños</span>
    <span style="color: #c99f00;">ERC CATSÍ 9 Escaños</span>
    <span style="color: #40E0D0;">DL 8 Escaños</span>
    <span style="color: #298242;">PNV 6 Escaños</span>
    <span style="color: #430050;">UNIDAD POPULAR 2 Escaños</span>
    <span style="color: #01b59c;">EHBILDU 2 Escaños</span>
    <span style="color: #01add7;">CCA-PNC 1 Escaño</span>


</a>
<br><br>
El PP las gana 
<br><br>
2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 137 Escaños</span> 
    <span style="color: #FF0000;">PSOE 85 Escaños</span>
    <span style="color: #800080;">PODEMOS 71 Escaños</span>
    <span style="color: #FF7F00;">CS 32 Escaños</span>
    <span style="color: #c99f00;">ERC CATSÍ 9 Escaños</span>
    <span style="color: #40E0D0;">CDC 8 Escaños</span>
    <span style="color: #298242;">PNV 5 Escaños</span>
    <span style="color: #01b59c;">EHBILDU 2 Escaños</span>
    <span style="color: #01add7;">CCA-PNC 1 Escaño</span>
    
</a>
<br><br>
El PP continúa ganando y mejora tras la repetición electoral
<br><br>
2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 123 Escaños</span>
    <span style="color: #0000FF;">PP 66 Escaños</span>
    <span style="color: #FF7F00;">CS 57 Escaños</span>
    <span style="color: #800080;">PODEMOS 42 Escaños</span>
    <span style="color: #008000;">VOX 24 Escaños</span>
    <span style="color: #c99f00;">ERC SOBERANISTES 15 Escaños</span>
    <span style="color: #40E0D0;">JUNTS 7 Escaños</span>
    <span style="color: #298242;">PNV 6 Escaños</span>
    <span style="color: #01b59c;">EHBILDU 4 Escaños</span>
    <span style="color: #01add7;">CCA-PNC 2 Escaños</span>
    <span style="color: #8B4513;">NAVARRA SUMA + 2 Escaños</span>
    <span style="color: #d64a26;">COMPROMIS 1 Escaño</span>
    <span style="color: #808000;">PRC 1 Escaño</span>

</a>
<br><br>
Pedro Sánchez gana sus primeras elecciones tras la moción de censura a Rajoy
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 120 Escaños</span>
    <span style="color: #0000FF;">PP 89 Escaños</span> 
    <span style="color: #008000;">VOX 52 Escaños</span> 
    <span style="color: #800080;">PODEMOS 35 Escaños</span>
    <span style="color: #c99f00;">ERC SOBERANISTES 13 Escaños</span>
    <span style="color: #FF7F00;">CS 10 Escaños</span>
    <span style="color: #40E0D0;">JUNTS 8 Escaños</span>
    <span style="color: #298242;">PNV 6 Escaños</span>
    <span style="color: #01b59c;">EHBILDU 5 Escaños</span>
    <span style="color: #4ae5d2;">MÁS PAÍS 3 Escaños</span>
    <span style="color: #141818;">CUP 2 Escaños</span>
    <span style="color: #01add7;">CCA-NC-PNC 2 Escaños</span>
    <span style="color: #8B4513;">NAVARRA SUMA + 2 Escaños</span>
    <span style="color: #74b1e0;">BNG 1 Escaño</span>
    <span style="color: #808000;">PRC 1 Escaño</span>
    <span style="color: #006400;">¡TERUEL EXISTE! 1 Escaño</span>

</a>
<br><br>
Pedro Sánchez hasta entonces en funciones vuelve a ganar, en la única ocasión en la que ha habido dos elecciones generales en el mismo año
<br><br>
2023: <a href="https://elpais.com/espana/elecciones/generales/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 137 Escaños</span>
    <span style="color: #FF0000;">PSOE 121 Escaños</span> 
    <span style="color: #008000;">VOX 33 Escaños</span> 
    <span style="color: #FF69B4;">SUMAR 31 Escaños</span>
    <span style="color: #c99f00;">ERC 7 Escaños</span>
    <span style="color: #40E0D0;">JUNTS 7 Escaños</span>
    <span style="color: #01b59c;">EHBILDU 6 Escaños</span>
    <span style="color: #298242;">PNV 5 Escaños</span>
    <span style="color: #74b1e0;">BNG 1 Escaño</span>
    <span style="color: #01add7;">CCA 1 Escaño</span>
    <span style="color: #8B4513;">UPN 1 Escaño</span>
    
</a>
<br><br>
El PP las gana, pero no suma mayoría absoluta con VOX, UPN Y CCA, por lo que Sánchez se apoya en el resto para continuar en la presidencia
<br><br>
En conclusión España en una escala 0 a 10, siendo 0 la extrema izquierda y 10 la extrema derecha, tradicionalmente nos situamos en un 4, en el centroizquierda, es un país más conservador que alguno de los países de nuestro entorno, como es en los valores de la familia o el valor de la propiedad y sin embargo en la visión del papel protector del Estado y del Gobierno, España es muy de izquierdas.
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
        font-family: 'Segoe UI', sans-serif;
        background-color: #f4f4f8;
        margin: 0;
        padding: 20px;
    }
    h1 {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 30px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .boton-con-texto {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 140px;
    }
    .titulo-boton {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 8px;
        text-align: center;
    }
    .button {
        width: 140px;
        height: 90px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
    }
    
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

