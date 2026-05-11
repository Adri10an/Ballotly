
    function abrirVentana(provincia) {
        if (provincia === "Ceuta") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Ceuta <span class="escaños">1 Escaño</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/ciudad-de-ceuta/ceuta" target="_blank" style="color: #FFA500; font-size: 1.5em; font-weight: bold;">UCD 1 Escaño</a>
                <br><br>
                IGUAL
                <br><br>
                1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/ciudad-de-ceuta/ceuta" target="_blank" style="color: #FFA500; font-size: 1.5em; font-weight: bold;">UCD 1 Escaño</a>
                <br><br>
                IGUAL
                <br><br>
                1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/ciudad-de-ceuta/ceuta" target="_blank" style="color: #FF0000; font-size: 1.5em; font-weight: bold;">PSOE 1 Escaño</a>
                <br><br>
                IGUAL
                <br><br>
                1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/ciudad-de-ceuta/ceuta" target="_blank" style="color: #FF0000; font-size: 1.5em; font-weight: bold;">PSOE 1 Escaño</a>
                <br><br>
                IGUAL
                <br><br>
                1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/ciudad-de-ceuta/ceuta" target="_blank" style="color: #FF0000; font-size: 1.5em; font-weight: bold;">PSOE 1 Escaño</a>
                <br><br>
                IGUAL
                <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/ciudad-de-ceuta/ceuta" target="_blank" style="color: #0000FF; font-size: 1.5em; font-weight: bold;">PP 1 Escaño</a>
                <br><br>
                IGUAL
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/ciudad-de-ceuta/ceuta" target="_blank" style="color: #0000FF; font-size: 1.5em; font-weight: bold;">PP 1 Escaño</a>
                <br><br>
                IGUAL
                <br><br>
                2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/ciudad-de-ceuta/ceuta" target="_blank" style="color: #0000FF; font-size: 1.5em; font-weight: bold;">PP 1 Escaño</a>
                <br><br>
                IGUAL
                <br><br>
                2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/ciudad-de-ceuta/ceuta" target="_blank" style="color: #0000FF; font-size: 1.5em; font-weight: bold;">PP 1 Escaño</a>
                <br><br>
                IGUAL
                <br><br>
                2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/ciudad-de-ceuta" target="_blank" style="color: #0000FF; font-size: 1.5em; font-weight: bold;">PP 1 Escaño</a>
                <br><br>
                IGUAL
                <br><br>
                2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/18/index.html" target="_blank" style="color: #0000FF; font-size: 1.5em; font-weight: bold;">PP 1 Escaño</a>
                <br><br>
                IGUAL
                <br><br>
                2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/18/index.html" target="_blank" style="color: #0000FF; font-size: 1.5em; font-weight: bold;">PP 1 Escaño</a>
                <br><br>
                IGUAL
                <br><br>
                2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/18/index.html" target="_blank" style="color: #0000FF; font-size: 1.5em; font-weight: bold;">PP 1 Escaño</a>
                <br><br>
                IGUAL
                <br><br>
                201928A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/18/index.html" target="_blank" style="color: #FF0000; font-size: 1.5em; font-weight: bold;">PSOE 1 Escaño</a>
                <br><br>
                IGUAL
                <br><br>
                201910N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/18/index.html" target="_blank" style="color: #008000; font-size: 1.5em; font-weight: bold;">VOX 1 Escaño</a>
                <br><br>
                IGUAL
                <br><br>
                2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/18/51/#?int=widgetEP" target="_blank" style="color: #0000FF; font-size: 1.5em; font-weight: bold;">PP 1 Escaño</a>
                <br><br>
                IGUAL
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
                IGUAL
                <br><br>
                1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/ciudad-de-melilla" target="_blank" style="color: #FFA500; font-size: 1.5em; font-weight: bold;">UCD 1 Escaño</a>
                <br><br>
                IGUAL
                <br><br>
                1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/ciudad-de-melilla" target="_blank" style="color: #FF0000; font-size: 1.5em; font-weight: bold;">PSOE 1 Escaño</a>
                <br><br>
                IGUAL
                <br><br>
                1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/ciudad-de-melilla" target="_blank" style="color: #ADD8E6; font-size: 1.5em; font-weight: bold;">AP 1 Escaño</a>
                <br><br>
                IGUAL
                <br><br>
                1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/ciudad-de-melilla" target="_blank" style="color: #0000FF; font-size: 1.5em; font-weight: bold;">PP 1 Escaño</a>
                <br><br>
                IGUAL
                <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/ciudad-de-melilla" target="_blank" style="color: #FF0000; font-size: 1.5em; font-weight: bold;">PSOE 1 Escaño</a>
                <br><br>
                IGUAL
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/ciudad-de-melilla" target="_blank" style="color: #0000FF; font-size: 1.5em; font-weight: bold;">PP 1 Escaño</a>
                <br><br>
                IGUAL
                <br><br>
                2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/ciudad-de-melilla" target="_blank" style="color: #0000FF; font-size: 1.5em; font-weight: bold;">PP 1 Escaño</a>
                <br><br>
                IGUAL
                <br><br>
                2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/ciudad-de-melilla" target="_blank" style="color: #0000FF; font-size: 1.5em; font-weight: bold;">PP 1 Escaño</a>
                <br><br>
                IGUAL
                <br><br>
                2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/ciudad-de-melilla" target="_blank" style="color: #0000FF; font-size: 1.5em; font-weight: bold;">PP 1 Escaño</a>
                <br><br>
                IGUAL
                <br><br>
                2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/19/" target="_blank" style="color: #0000FF; font-size: 1.5em; font-weight: bold;">PP 1 Escaño</a>
                <br><br>
                IGUAL
                <br><br>
                2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/19/" target="_blank" style="color: #0000FF; font-size: 1.5em; font-weight: bold;">PP 1 Escaño</a>
                <br><br>
                IGUAL
                <br><br>
                2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/19/" target="_blank" style="color: #0000FF; font-size: 1.5em; font-weight: bold;">PP 1 Escaño</a>
                <br><br>
                IGUAL
                <br><br>
                201928A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/19/" target="_blank" style="color: #0000FF; font-size: 1.5em; font-weight: bold;">PP 1 Escaño</a>
                <br><br>
                IGUAL
                <br><br>
                201910N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/19/" target="_blank" style="color: #0000FF; font-size: 1.5em; font-weight: bold;">PP 1 Escaño</a>
                <br><br>
                IGUAL
                <br><br>
                2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/19/52/" target="_blank" style="color: #0000FF; font-size: 1.5em; font-weight: bold;">PP 1 Escaño</a>
                <br><br>
                IGUAL
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
            <h1 style="color: black;">Soria <span class="escaños">2 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/castilla-la-mancha/soria" target="_blank" style="color: #FFA500; font-size: 1.5em; font-weight: bold;">UCD 2 Escaños</a>
                <br><br>
                UCD las gana sacando dos escaños
                <br><br>
                1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/castilla-la-mancha/soria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FFA500;">UCD 2 Escaños</span> 
                </a>
                <br><br>
                UCD las gana sacando dos escaños
                <br><br>
                1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/castilla-la-mancha/soria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #ADD8E6;">AP-PDP 1 Escaño</span> 
                <span style="color: #FF0000;">PSOE 1 Escaño</span> 
                </a>
                <br><br>
                AP-PDP y PSOE sacan un escaño respectivamente
                <br><br>
                1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/castilla-la-mancha/soria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #ADD8E6;">AP-PDP-PL 1 Escaño</span> 
                <span style="color: #FF0000;">PSOE 1 Escaño</span>
                </a>
                <br><br>
                AP-PDP-UL y PSOE sacan un escaño respectivamente
                <br><br>
                1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/castilla-la-mancha/soria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 1 Escaño</span> 
                <span style="color: #FF0000;">PSOE 1 Escaño</span>
                </a>
                <br><br>
                PP y PSOE sacan un escaño respectivamente
                <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/castilla-la-mancha/soria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 1 Escaño</span> 
                <span style="color: #FF0000;">PSOE 1 Escaño</span>
                </a>
                <br><br>
                PP y PSOE sacan un escaño respectivamente
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/castilla-la-mancha/soria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 1 Escaño</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
PP y PSOE sacan un escaño respectivamente
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/castilla-la-mancha/soria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 1 Escaño</span> 
    <span style="color: #FF0000;">PSOE-PROGR 1 Escaño</span>
</a>
<br><br>
PP y PSOE sacan un escaño respectivamente
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/castilla-la-mancha/soria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 1 Escaño</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
PP y PSOE sacan un escaño respectivamente
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/castilla-la-mancha/soria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 1 Escaño</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/08/42.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 1 Escaño</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/08/42.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 1 Escaño</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/08/42.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 1 Escaño</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/08/42.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 1 Escaño</span> 
    <span style="color: #0000FF;">PP 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/08/42.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 1 Escaño</span> 
    <span style="color: #0000FF;">PP 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/08/42/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 1 Escaño</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
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
    IGUAL
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/aragon/teruel" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 2 Escaños</span> 
        <span style="color: #FF0000;">PSOE 1 Escaño</span>
    </a>
    <br><br>
    IGUAL
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/aragon/teruel" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PAR 1 Escaño</span>
    </a>
    <br><br>
    IGUAL     
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/aragon/teruel" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PL 1 Escaño</span>
    </a>
    <br><br>
    IGUAL
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/aragon/teruel" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 
        <span style="color: #0000FF;">PP 1 Escaño</span>
    </a>
    <br><br>
    IGUAL
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/aragon/teruel" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #FF0000;">PSOE 2 Escaños</span> 
                <span style="color: #0000FF;">PP 1 Escaño</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/aragon/teruel" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP-PAR 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/aragon/teruel" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/aragon/teruel" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
     <span style="color: #0000FF;">PP 1 Escaño</span> 
</a>
<br><br>
IGUAL
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/aragon/teruel" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span> 
    <span style="color: #0000FF;">PP 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/02/44.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/02/44.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/02/44.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/02/44.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 1 Escaño</span> 
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/02/44.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #006400;">¡TERUEL EXISTE! 1 Escaño</span>
    <span style="color: #FF0000;">PSOE 1 Escaño</span> 
    <span style="color: #0000FF;">PP 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2023: <a href="" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
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
    IGUAL
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/castilla-la-mancha/segovia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 2 Escaños</span> 
        <span style="color: #FF0000;">PSOE 1 Escaño</span>
    </a>
    <br><br>
    IGUAL
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/castilla-la-mancha/segovia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #ADD8E6;">AP-PDP 2 Escaños</span>
        <span style="color: #FF0000;">PSOE 1 Escaño</span> 
        
    </a>
    <br><br>
    IGUAL  
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/castilla-la-mancha/segovia" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #ADD8E6;">AP-PDP-PL 1 Escaño</span>
        <span style="color: #FF0000;">PSOE 1 Escaño</span>
        <span style="color: #006400;">CDS 1 Escaño</span>
    </a>
    <br><br>
    IGUAL 
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/castilla-la-mancha/segovia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #0000FF;">PP 2 Escaños</span>
        <span style="color: #FF0000;">PSOE 1 Escaño</span> 
        
    </a>
    <br><br>
    IGUAL
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/aragon/teruel" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 2 Escaños</span> 
                <span style="color: #FF0000;">PSOE 1 Escaño</span>
                </a>
                <br><br>
                IGUAL
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/castilla-la-mancha/segovia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/castilla-la-mancha/segovia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE-PROGR 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/castilla-la-mancha/segovia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/castilla-la-mancha/segovia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 1 Escaño</span> 
    
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/08/40.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/08/40.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/08/40.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/08/40.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 1 Escaño</span> 
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/08/40.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #FF0000;">PSOE 1 Escaño</span> 
    <span style="color: #008000;">VOX 1 Escaño</span>  
</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/08/40/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
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
            <h1 style="color: black;">Cuenca <span class="escaños">3 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/castilla-y-leon/cuenca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 2 Escaños</span> 
        <span style="color: #FF0000;">PSOE 1 Escaño</span>
    </a>
    <br><br>
    UCD las gana doblando en escaños al PSOE
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/castilla-y-leon/cuenca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 2 Escaños</span> 
        <span style="color: #FF0000;">PSOE 1 Escaño</span>
    </a>
    <br><br>
     UCD las gana doblando en escaños al PSOE
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/castilla-y-leon/cuenca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 1 Escaños</span>
        
        
    </a>
    <br><br>
    El PSOE las gana doblando en escaños a AP-PDP
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/castilla-y-leon/cuenca" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #FF0000;">PSOE 2 EscañoS</span>
        <span style="color: #ADD8E6;">AP-PDP 1 Escaño</span>
        
    </a>
    <br><br>
    IGUAL
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/castilla-y-leon/cuenca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 
        <span style="color: #0000FF;">PP 1 Escaño</span>
        
    </a>
    <br><br>
    IGUAL
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
IGUAL
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/castilla-y-leon/cuenca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE-PROGR 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/castilla-y-leon/cuenca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/castilla-y-leon/cuenca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 1 Escaño</span> 
    
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/07/16.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/07/16.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/07/16.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/07/16.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span> 
    <span style="color: #0000FF;">PP 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/07/16.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaño</span> 
    <span style="color: #0000FF;">PP 1 Escaño</span>

</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/07/16/#?int=widgetEP" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
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
    IGUAL
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/aragon/huesca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 2 Escaños</span> 
        <span style="color: #FF0000;">PSOE 1 Escaño</span>
    </a>
    <br><br>
    IGUAL
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/aragon/huesca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PAR 1 Escaños</span>
        
        
    </a>
    <br><br>
    IGUAL
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/aragon/huesca" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #FF0000;">PSOE 2 EscañoS</span>
        <span style="color: #ADD8E6;">AP-PDP-PL 1 Escaño</span>
        
    </a>
    <br><br>
    IGUAL
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/aragon/huesca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 
        <span style="color: #0000FF;">PP 1 Escaño</span>
        
    </a>
    <br><br>
    IGUAL
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/aragon/huesca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 2 Escaños</span>
                    <span style="color: #0000FF;">PP 1 Escaño</span> 
                
                </a>
                <br><br>
                IGUAL
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/aragon/huesca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP-PAR 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/aragon/huesca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/aragon/huesca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 1 Escaño</span> 
    
</a>
<br><br>
IGUAL
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/aragon/huesca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span> 
    <span style="color: #0000FF;">PP 1 Escaño</span>
    
    
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/02/22.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/02/22.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 1 Escaño</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/02/22.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 1 Escaño</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/02/22.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 1 Escaños</span> 
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/02/22.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaño</span> 
    <span style="color: #0000FF;">PP 1 Escaño</span>

</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/02/22/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
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
    IGUAL
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/castilla-la-mancha/palencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 2 Escaños</span> 
        <span style="color: #FF0000;">PSOE 1 Escaño</span>
    </a>
    <br><br>
    IGUAL
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/castilla-la-mancha/palencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 1 Escaño</span>
        
        
    </a>
    <br><br>
    IGUAL
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/castilla-la-mancha/palencia" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #FF0000;">PSOE 2 Escaños</span>
        <span style="color: #ADD8E6;">AP-PDP-PL 1 Escaño</span>
        
    </a>
    <br><br>
    IGUAL
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/castilla-la-mancha/palencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #0000FF;">PP 2 Escaños</span>
        <span style="color: #FF0000;">PSOE 1 Escaño</span> 
        
    </a>
    <br><br>
    IGUAL
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/castilla-la-mancha/palencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 1 Escaños</span>
                    
                
                </a>
                <br><br>
                IGUAL
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/castilla-la-mancha/palencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/castilla-la-mancha/palencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE-PROGR 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/castilla-la-mancha/palencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    
</a>
<br><br>
IGUAL
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/castilla-la-mancha/palencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 1 Escaño</span> 
    
    
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/08/34.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/08/34.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 EscañoS</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/08/34.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/08/34.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 1 Escaño</span> 
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/08/34.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 1 Escaño</span> 
    

</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/08/34/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
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
            <h1 style="color: black;">Zamora <span class="escaños">3 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/castilla-la-mancha/zamora" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 2 Escaños</span>
        <span style="color: #ADD8E6;">AP 1 Escaño</span> 
    </a>
    <br><br>
    UCD las gana doblando en escaños a AP
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/castilla-la-mancha/zamora" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 2 Escaños</span> 
        <span style="color: #FF0000;">PSOE 1 Escaño</span>
    </a>
    <br><br>
    UCD las gana doblando en escaños al PSOE
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/castilla-la-mancha/zamora" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 1 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 1 Escaño</span>
        <span style="color: #FFA500;">UCD 1 Escaño</span>
        
        
    </a>
    <br><br>
    El PSOE las gana, pero la suma de AP-PDP y UCD le dobla en escaños
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/castilla-la-mancha/zamora" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #ADD8E6;">AP-PDP-PL 2 Escaños</span>
        <span style="color: #FF0000;">PSOE 1 Escaños</span>
        
        
    </a>
    <br><br>
    AP-PDP-PL las gana doblando en escaños al PSOE
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/castilla-la-mancha/zamora" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #0000FF;">PP 2 Escaños</span>
        <span style="color: #FF0000;">PSOE 1 Escaño</span> 
        
    </a>
    <br><br>
    IGUAL
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/castilla-la-mancha/zamora" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 1 Escaños</span>
                    
                
                </a>
                <br><br>
                IGUAL
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/castilla-la-mancha/zamora" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/castilla-la-mancha/zamora" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE-PROGR 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/castilla-la-mancha/palencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    
</a>
<br><br>
IGUAL
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/castilla-la-mancha/zamora" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 1 Escaño</span> 
    
    
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/08/49.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/08/49.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 EscañoS</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/08/49.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/08/49.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 1 Escaño</span> 
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/08/49.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #FF0000;">PSOE 1 Escaño</span> 
    <span style="color: #008000;">VOX 1 Escaño</span> 

</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/08/49/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
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
    IGUAL
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/castilla-la-mancha/avila" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 3 Escaños</span> 
    </a>
    <br><br>
    IGUAL
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/castilla-la-mancha/avila" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #ADD8E6;">AP-PDP 1 Escaño</span>
        <span style="color: #FF0000;">PSOE 1 Escaño</span> 
        <span style="color: #006400;">CDS 1 Escaño</span>
        
        
        
    </a>
    <br><br>
    IGUAL
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/castilla-la-mancha/avila" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #006400;">CDS 1 Escaño</span>
        <span style="color: #ADD8E6;">AP-PDP-PL 1 Escaño</span>
        <span style="color: #FF0000;">PSOE 1 Escaño</span>
        
        
    </a>
    <br><br>
    IGUAL
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/castilla-la-mancha/avila" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #0000FF;">PP 1 Escaño</span>
        <span style="color: #006400;">CDS 1 Escaño</span>
        <span style="color: #FF0000;">PSOE 1 Escaño</span> 
        
    </a>
    <br><br>
    IGUAL
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/castilla-la-mancha/avila" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 1 Escaño</span>
                    
                
                </a>
                <br><br>
                IGUAL
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/castilla-la-mancha/avila" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/castilla-la-mancha/avila" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE-PROGR 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/castilla-la-mancha/avila" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    
</a>
<br><br>
IGUAL
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/castilla-la-mancha/avila" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 1 Escaño</span> 
    
    
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/08/05.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/08/05.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/08/05.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/08/05.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/08/05.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #FF0000;">PSOE 1 Escaño</span> 
    <span style="color: #008000;">VOX 1 Escaño</span> 

</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/08/05/#?int=widgetEP" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
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
    IGUAL
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/castilla-y-leon/guadalajara" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 2 Escaños</span> 
        <span style="color: #FF0000;">PSOE 1 Escaño</span> 
    </a>
    <br><br>
    IGUAL
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/castilla-y-leon/guadalajara" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 1 Escaño</span>
        
    
    </a>
    <br><br>
    IGUAL
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/castilla-y-leon/guadalajara" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #ADD8E6;">AP-PDP-PL 2 Escaños</span>
        <span style="color: #FF0000;">PSOE 1 Escaño</span>
        
        
    </a>
    <br><br>
    IGUAL
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/castilla-y-leon/guadalajara" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #0000FF;">PP 2 Escaños</span>
        <span style="color: #FF0000;">PSOE 1 Escaño</span> 
        
    </a>
    <br><br>
    IGUAL
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/castilla-y-leon/guadalajara" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 1 Escaño</span>
                    
                
                </a>
                <br><br>
                IGUAL
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/castilla-y-leon/guadalajara" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/castilla-y-leon/guadalajara" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE-PROGR 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/castilla-y-leon/guadalajara" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    
</a>
<br><br>
IGUAL
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/castilla-y-leon/guadalajara" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 1 Escaño</span> 
    
    
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/07/19.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/07/19.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 1 Escaño</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/07/19.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/07/19.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/07/19.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 1 Escaño</span> 
    <span style="color: #008000;">VOX 1 Escaño</span> 
    <span style="color: #0000FF;">PP 1 Escaño</span>

</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/07/19/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 1 Escaño</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    <span style="color: #008000;">VOX 1 Escaño</span>
</a>
<br><br>
IGUAL
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
    IGUAL
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/castilla-y-leon/albacete" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 2 Escaños</span> 
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 
    </a>
    <br><br>
    IGUAL
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/castilla-y-leon/albacete" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 1 Escaño</span>
        
    
    </a>
    <br><br>
    IGUAL
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/castilla-y-leon/albacete" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #FF0000;">PSOE 3 Escaños</span>
        <span style="color: #ADD8E6;">AP-PDP-PL 1 Escaño</span>
        
        
    </a>
    <br><br>
    IGUAL
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/castilla-y-leon/albacete" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #0000FF;">PP 1 Escaño</span>
        
    </a>
    <br><br>
    IGUAL
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/castilla-y-leon/albacete" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 2 Escaños</span>
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
                    
                
                </a>
                <br><br>
                IGUAL
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/castilla-y-leon/albacete" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/castilla-y-leon/albacete" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE-PROGR 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/castilla-y-leon/albacete" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    
</a>
<br><br>
IGUAL
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/castilla-y-leon/albacete" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span> 
    
    
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/07/02.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/07/02.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/07/02.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/07/02.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/07/02.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span>  
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #008000;">VOX 1 Escaño</span>

</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/07/02/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    
</a>
<br><br>
IGUAL
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
    IGUAL
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/catalunya/lleida" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">CC-UCD 2 Escaños</span> 
        <span style="color: #FF0000;">PSC-PSOE 1 Escaño</span> 
        <span style="color: #40E0D0;">CIU 1 Escaño</span> 
    </a>
    <br><br>
    IGUAL
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/catalunya/lleida" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSC-PSOE 2 Escaños</span>
        <span style="color: #40E0D0;">CIU 1 Escaño</span> 
        <span style="color: #ADD8E6;">AP-PDP 1 Escaño</span>
        
    
    </a>
    <br><br>
    IGUAL
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/catalunya/lleida" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #40E0D0;">CIU 2 Escaños</span> 
        <span style="color: #FF0000;">PSC-PSOE 1 Escaño</span>
        <span style="color: #ADD8E6;">AP-PDP-PL 1 Escaño</span>
    </a>
    <br><br>
    IGUAL
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/catalunya/lleida" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #40E0D0;">CIU 2 Escaños</span> 
        <span style="color: #FF0000;">PSC-PSOE 2 Escaños</span>
        
    </a>
    <br><br>
    IGUAL
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/catalunya/lleida" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #40E0D0;">CIU 2 Escaños</span> 
                    <span style="color: #FF0000;">PSC-PSOE 1 Escaño</span>
                    <span style="color: #0000FF;">PP 1 Escaño</span> 
                    
                
                </a>
                <br><br>
                IGUAL
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/catalunya/lleida" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #40E0D0;">CIU 2 Escaños</span> 
                    <span style="color: #FF0000;">PSC-PSOE 1 Escaño</span>
                    <span style="color: #0000FF;">PP 1 Escaño</span> 
</a>
<br><br>
IGUAL
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/catalunya/lleida" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #40E0D0;">CIU 2 Escaños</span> 
                    <span style="color: #FF0000;">PSC-PSOE 1 Escaño</span>
                    <span style="color: #0000FF;">PP 1 Escaño</span> 
</a>
<br><br>
IGUAL
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/catalunya/lleida" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSC-PSOE 2 Escaños</span>
                    <span style="color: #40E0D0;">CIU 1 Escaño</span> 
                    <span style="color: #c99f00;">ERC 1 Escaño</span> 
    
</a>
<br><br>
IGUAL
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/catalunya/lleida" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #FF0000;">PSC-PSOE 2 Escaños</span>
                    <span style="color: #40E0D0;">CIU 1 Escaño</span>
                    <span style="color: #0000FF;">PP 1 Escaño</span> 
    
    
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/09/25.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #40E0D0;">CIU 2 Escaños</span> 
                    <span style="color: #FF0000;">PSC-PSOE 1 Escaño</span>
                    <span style="color: #0000FF;">PP 1 Escaño</span> 
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/09/25.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #40E0D0;">DL 1 Escaño</span>
                    <span style="color: #c99f00;">ERC CATSÍ 1 Escaño</span>
                    <span style="color: #800080;">PODEMOS 1 Escaño</span> 
                    <span style="color: #FF0000;">PSC-PSOE 1 Escaño</span>
                     
</a>
<br><br>
IGUAL
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/09/25.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #c99f00;">ERC CATSÍ 1 Escaño</span> 
    <span style="color: #40E0D0;">CDC 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #0000FF;">PP 1 Escaño</span> 

</a>
<br><br>
IGUAL
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/09/25.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #c99f00;">ERC SOBERANISTES 2 Escaños</span> 
                    <span style="color: #40E0D0;">JUNTS 1 Escaño</span>
                    <span style="color: #FF0000;">PSC-PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL 
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/09/25.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #c99f00;">ERC SOBERANISTES 2 Escaños</span> 
                    <span style="color: #40E0D0;">JUNTS 1 Escaño</span>
                    <span style="color: #FF0000;">PSC-PSOE 1 Escaño</span>

</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/09/25/" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #FF0000;">PSC-PSOE 2 Escaños</span>
                    <span style="color: #c99f00;">ERC 1 Escaño</span>
                    <span style="color: #40E0D0;">JUNTS 1 Escaño</span>
    
</a>
<br><br>
IGUAL
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
    IGUAL
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/la-rioja" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 3 Escaños</span> 
        <span style="color: #FF0000;">PSOE 1 Escaño</span> 
    </a>
    <br><br>
    IGUAL
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/la-rioja" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 2 Escaños</span>
        
    
    </a>
    <br><br>
    IGUAL
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/la-rioja" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #FF0000;">PSOE 2 Escaños</span>
        <span style="color: #ADD8E6;">AP-PDP-PL 2 Escaño</span>
        
        
    </a>
    <br><br>
    IGUAL
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/la-rioja" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #0000FF;">PP 2 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 
        
    </a>
    <br><br>
    IGUAL
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/la-rioja" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 2 Escaños</span>
                    
                
                </a>
                <br><br>
                IGUAL
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/la-rioja" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/la-rioja" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE-PROGR 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/la-rioja" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    
</a>
<br><br>
IGUAL
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/la-rioja" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span> 
    
    
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/16/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/16/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/16/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/16/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/16/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span>  
    <span style="color: #0000FF;">PP 2 Escaños</span>

</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/16/26/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    
</a>
<br><br>
IGUAL
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
            <h1 style="color: black;">Lugo <span class="escaños">4 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/galicia/lugo" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 3 Escaños</span>
        <span style="color: #ADD8E6;">AP  1 Escaño</span>
    </a>
    <br><br>
    UCD las gana triplicando en escaños a AP
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/galicia/lugo" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 2 Escaños</span> 
        <span style="color: #006400;">CD 1 Escaño</span>
        <span style="color: #FF0000;">PSG-PSOE 1 Escaño</span> 

    </a>
    <br><br>
    UCD las gana y sumando a CD triplican en escaños al PSG-PSOE
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/galicia/lugo" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #ADD8E6;">AP-PDP 2 Escaños</span>
        <span style="color: #FF0000;">PSG-PSOE 1 Escaño</span> 
        <span style="color: #FFA500;">UCD 1 Escaño</span>
        
    
    </a>
    <br><br>
    AP-PDP las gana y sumando a UCD triplican en escaños al PSG-PSOE
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/galicia/lugo" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #ADD8E6;">AP-PDP-PL-C 3 Escaños</span>
        <span style="color: #FF0000;">PSG-PSOE 1 Escaño</span>
        
        
    </a>
    <br><br>
    AP-PDP-PL-C las gana triplicando en escaños al PSG-PSOE
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/galicia/lugo" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #0000FF;">PP 2 Escaños</span>
        <span style="color: #FF0000;">PSG-PSOE 2 Escaños</span> 
        
    </a>
    <br><br>
    El PP las gana empatando en escaños al PSG-PSOE
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/galicia/lugo" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 3 Escaños</span> 
                    <span style="color: #FF0000;">PSG-PSOE 1 Escaño</span>
                    
                
                </a>
                <br><br>
                El PP las gana triplicando en escaños al PSG-PSOE
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/galicia/lugo" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSG-PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/galicia/lugo" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSG-PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/galicia/lugo" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSG-PSOE 2 Escaños</span>
    
</a>
<br><br>
IGUAL
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/galicia/lugo" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSG-PSOE 2 Escaños</span> 
    
    
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/11/27.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSG-PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/11/27.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSG-PSOE 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/11/27.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSG-PSOE 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/11/27.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSG-PSOE 2 Escaños</span>
    
</a>
<br><br>
IGUAL
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/11/27.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSG-PSOE 2 Escaños</span>  

</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/11/27/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSG-PSOE 1 Escaño</span>
    
</a>
<br><br>
IGUAL
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
            <h1 style="color: black;">Orense <span class="escaños">4 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/galicia/ourense" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 4 Escaños</span>
    </a>
    <br><br>
    UCD arrasaría llevándose los 4 escaños de escaños de la provincia y cuadruplicando a AP
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/galicia/ourense" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 3 Escaños</span> 
        <span style="color: #006400;">CD 1 Escaño</span>

    </a>
    <br><br>
    UCD las gana triplicando en escaños a CD
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/galicia/ourense" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #ADD8E6;">AP-PDP 2 Escaños</span>
        <span style="color: #FFA500;">UCD 1 Escaño</span>
        <span style="color: #FF0000;">PSG-PSOE 1 Escaño</span> 
        
    
    </a>
    <br><br>
    AP-PDP las gana y sumando a UCD triplican en escaños al PSG-PSOE
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/galicia/ourense" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #ADD8E6;">AP-PDP-PL-C 2 Escaños</span>
        <span style="color: #FF0000;">PSG-PSOE 2 Escaños</span>
        
    </a>
    <br><br>
    AP-PDP-PL-C las gana empatando en escaños con el PSG-PSOE
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/galicia/ourense" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #0000FF;">PP 2 Escaños</span>
        <span style="color: #FF0000;">PSG-PSOE 2 Escaños</span> 
        
    </a>
    <br><br>
    El PP las gana empatando en escaños con el PSG-PSOE
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/galicia/ourense" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
                    <span style="color: #FF0000;">PSG-PSOE 2 Escaños</span>
                    
                
                </a>
                <br><br>
                IGUAL
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/galicia/ourense" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSG-PSOE 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/galicia/ourense" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSG-PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/galicia/ourense" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSG-PSOE 1 Escaño</span>
    
</a>
<br><br>
IGUAL
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/galicia/ourense" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSG-PSOE 2 Escaños</span> 
    
    
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/11/32.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSG-PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/11/32.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSG-PSOE 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/11/32.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSG-PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/11/32.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSG-PSOE 2 Escaños</span>
    
</a>
<br><br>
IGUAL
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/11/32.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSG-PSOE 2 Escaños</span>  

</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/11/32/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSG-PSOE 1 Escaño</span>
    
</a>
<br><br>
IGUAL
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
            <h1 style="color: black;">Cáceres <span class="escaños">4 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/extremadura/caceres" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 3 Escaños</span>
        <span style="color: #FF0000;">PSOE 1 Escaño</span> 
        
    </a>
    <br><br>
    UCD las gana triplicando en escaños al PSOE
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/extremadura/caceres" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 2 Escaños</span> 
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 

    </a>
    <br><br>
    UCD las gana empatando en escaños con el PSOE
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/extremadura/caceres" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 1 Escaño</span>   
    
    </a>
    <br><br>
    El PSOE las gana triplicando en escaños a AP-PDP
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/extremadura/caceres" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #FF0000;">PSOE 3 Escaños</span>
        <span style="color: #ADD8E6;">AP-PDP-PL 1 Escaño</span>
        
        
    </a>
    <br><br>
    El PSOE las gana triplicando en escaños a AP-PDP-PL
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/extremadura/caceres" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #0000FF;">PP 1 Escaño</span>
        
    </a>
    <br><br>
    El PSOE las gana triplicando en escaños al PP
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/extremadura/caceres" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 2 Escaños</span>
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
                    
                
                </a>
                <br><br>
                El PSOE las gana empatando en escaños con el PP
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/extremadura/caceres" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
</a>
<br><br>
El PSOE las gana empatando en escaños con el PP
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/extremadura/caceres" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
El PP las gana empatando en escaños con el PSOE
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/extremadura/caceres" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    
</a>
<br><br>
IGUAL
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/extremadura/caceres" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    
    
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/10/10.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/10/10.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/10/10.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/10/10.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    
</a>
<br><br>
IGUAL
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/10/10.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #008000;">VOX 1 Escaño</span> 


</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/10/10/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    
</a>
<br><br>
IGUAL
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
            <h1 style="color: black;">León <span class="escaños">4 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/castilla-la-mancha/leon" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 3 Escaños</span>
        <span style="color: #FF0000;">PSOE 1 Escaño</span>
    </a>
    <br><br>
    UCD las gana triplicando en escaños al PSOE
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/castilla-la-mancha/leon" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 3 Escaños</span> 
        <span style="color: #FF0000;">PSOE 1 Escaño</span> 

    </a>
    <br><br>
    UCD las gana triplicando en escaños al PSOE
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/castilla-la-mancha/leon" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 2 Escaños</span>
    </a>
    <br><br>
    El PSOE las gana empatando en escaños con AP-PDP
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/castilla-la-mancha/leon" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #FF0000;">PSOE 2 Escaños</span>
        <span style="color: #ADD8E6;">AP-PDP-PL 2 Escaños</span>
        
        
    </a>
    <br><br>
    El PSOE las gana empatando en escaños con AP-PDP-PL
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/castilla-la-mancha/leon" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 
        <span style="color: #0000FF;">PP 2 Escaños</span>
        
    </a>
    <br><br>
    El PSOE las gana empatando en escaños con el PP
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/castilla-la-mancha/leon" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 2 Escaños</span> 
                    <span style="color: #FF0000;">PSOE 2 Escaños</span>
                    
                
                </a>
                <br><br>
                El PP las gana empatando en escaños con el PSOE
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/castilla-la-mancha/leon" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
El PP las gana empatando en escaños con el PSOE
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/castilla-la-mancha/leon" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE-PROGR 1 Escaño</span>
</a>
<br><br>
El PP las gana triplicando en escaños al PSOE
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/castilla-la-mancha/leon" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    
</a>
<br><br>
El PSOE las gana empatando en escaños con el PP
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/castilla-la-mancha/leon" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    
    
</a>
<br><br>
El PSOE las gana empatando en escaños con el PP
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/08/24.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
El PP las gana triplicando en escaños al PSOE
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/08/24.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
</a>
<br><br>
El PP las gana empatando en escaños a la suma de PSOE y PODEMOS
<br><br>
2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/08/24.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/08/24.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    
</a>
<br><br>
IGUAL
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/08/24.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #008000;">VOX 1 Escaño</span> 


</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/08/24/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    
</a>
<br><br>
IGUAL
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
    IGUAL
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/pais-vasco/alava" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 2 Escaños</span>
        <span style="color: #298242;">PNV 1 Escaño</span>
        <span style="color: #FF0000;">PSE-PSOE 1 Escaño</span>

    </a>
    <br><br>
    IGUAL
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/pais-vasco/alava" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSE-PSOE 2 Escaños</span> 
        <span style="color: #298242;">PNV 1 Escaño</span>
        <span style="color: #ADD8E6;">AP-PDP-PL 1 Escaño</span>
         
    
    </a>
    <br><br>
    IGUAL
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/pais-vasco/alava" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #FF0000;">PSE-PSOE 2 Escaños</span> 
        <span style="color: #298242;">PNV 1 Escaño</span>
        <span style="color: #ADD8E6;">AP-PDP-PL 1 Escaño</span>
        
        
    </a>
    <br><br>
    IGUAL
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/pais-vasco/alava" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSE-PSOE 2 Escaños</span> 
        <span style="color: #298242;">PNV 1 Escaño</span>
        <span style="color: #0000FF;">PP 1 Escaño</span>
        
    </a>
    <br><br>
    IGUAL
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/pais-vasco/alava" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSE-PSOE 2 Escaños</span> 
                    <span style="color: #0000FF;">PP 1 Escaño</span>
        <span style="color: #298242;">PNV 1 Escaño</span>

                    
                
                </a>
                <br><br>
                IGUAL
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/pais-vasco/alava" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #0000FF;">PP 2 Escaños</span>
                    <span style="color: #FF0000;">PSE-PSOE 1 Escaño</span>
        <span style="color: #298242;">PNV 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/pais-vasco/alava" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span>
                    <span style="color: #FF0000;">PSE-PSOE 1 Escaño</span>
        <span style="color: #298242;">PNV 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/pais-vasco/alava" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSE-PSOE 2 Escaños</span>
                    <span style="color: #0000FF;">PP 1 Escaño</span>
        <span style="color: #298242;">PNV 1 Escaño</span>
    
</a>
<br><br>
IGUAL
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/pais-vasco/alava" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSE-PSOE 2 Escaños</span>
                    <span style="color: #0000FF;">PP 1 Escaño</span>
        <span style="color: #298242;">PNV 1 Escaño</span>
    
    
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/14/01.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 1 Escaño</span>
                    <span style="color: #FF0000;">PSE-PSOE 1 Escaño</span>
                    <span style="color: #01b59c;">AMAIUR 1 Escaño</span>
        <span style="color: #298242;">PNV 1 Escaño</span>
        
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/14/01.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #0000FF;">PP 1 Escaño</span>
        <span style="color: #298242;">PNV 1 Escaño</span>
        <span style="color: #FF0000;">PSE-PSOE 1 Escaño</span>

</a>
<br><br>
IGUAL
<br><br>
2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/14/01.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #0000FF;">PP 1 Escaño</span>
        <span style="color: #298242;">PNV 1 Escaño</span>
        <span style="color: #FF0000;">PSE-PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/14/01.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #298242;">PNV 1 Escaño</span>
        <span style="color: #FF0000;">PSE-PSOE 1 Escaño</span>
        <span style="color: #800080;">PODEMOS 1 Escaño</span>
        <span style="color: #01b59c;">EHBILDU 1 Escaño</span>
    
</a>
<br><br>
IGUAL
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/14/01.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #298242;">PNV 1 Escaño</span>
        <span style="color: #FF0000;">PSE-PSOE 1 Escaño</span>
        <span style="color: #800080;">PODEMOS-IU 1 Escaño</span>
        <span style="color: #01b59c;">EHBILDU 1 Escaño</span>


</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/14/01/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSE-PSOE 1 Escaño</span>
        <span style="color: #01b59c;">EHBILDU 1 Escaño</span>
        <span style="color: #0000FF;">PP 1 Escaño</span>
        <span style="color: #298242;">PNV 1 Escaño</span>
    
</a>
<br><br>
IGUAL
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
    IGUAL
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/castilla-la-mancha/burgos" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 3 Escaños</span>
        <span style="color: #FF0000;">PSOE 1 Escaño</span> 

    </a>
    <br><br>
    IGUAL
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/castilla-la-mancha/burgos" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #ADD8E6;">AP-PDP 2 Escaños</span> 
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 
          
    </a>
    <br><br>
    IGUAL
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/castilla-la-mancha/burgos" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #ADD8E6;">AP-PDP 2 Escaños</span> 
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 
        
        
    </a>
    <br><br>
    IGUAL
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/castilla-la-mancha/burgos" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #0000FF;">PP 2 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 
        
    </a>
    <br><br>
    IGUAL
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/castilla-la-mancha/burgos" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 2 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span>
                    
                
                </a>
                <br><br>
                IGUAL
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/castilla-la-mancha/burgos" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 3 Escaños</span>
        <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/castilla-la-mancha/burgos" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
        <span style="color: #FF0000;">PSOE-PROGR 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/castilla-la-mancha/burgos" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    
</a>
<br><br>
IGUAL
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/castilla-la-mancha/burgos" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    
    
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/08/09.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/08/09.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>

</a>
<br><br>
IGUAL
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/08/09.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/08/09.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    
</a>
<br><br>
IGUAL
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/08/09.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    

</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/08/09/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span> 
    
</a>
<br><br>
IGUAL
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
    IGUAL
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/castilla-la-mancha/salamanca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 3 Escaños</span>
        <span style="color: #FF0000;">PSOE 1 Escaño</span> 

    </a>
    <br><br>
    IGUAL
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/castilla-la-mancha/salamanca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 1 Escaño</span> 
          
    </a>
    <br><br>
    IGUAL
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/castilla-la-mancha/salamanca" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 1 Escaño</span>
        <span style="color: #006400;">CDS 1 Escaño</span>
        
    </a>
    <br><br>
    IGUAL
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/castilla-la-mancha/salamanca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #0000FF;">PP 2 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 
        
    </a>
    <br><br>
    IGUAL
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/castilla-la-mancha/salamanca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 2 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span>
                    
                
                </a>
                <br><br>
                IGUAL
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/castilla-la-mancha/salamanca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 3 Escaños</span>
        <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/castilla-la-mancha/salamanca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
        <span style="color: #FF0000;">PSOE-PROGR 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/castilla-la-mancha/salamanca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    
</a>
<br><br>
IGUAL
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/castilla-la-mancha/salamanca" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    
    
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/08/37.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/08/37.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>

</a>
<br><br>
IGUAL
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/08/37.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    
</a>
<br><br>
IGUAL
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/08/37.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 1 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>

    
</a>
<br><br>
IGUAL
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/08/37.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span>  

</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/08/37/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 1 Escaño</span> 
    
</a>
<br><br>
IGUAL
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
    IGUAL
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/castilla-la-mancha/valladolid" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 3 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 

    </a>
    <br><br>
    IGUAL
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/castilla-la-mancha/valladolid" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 2 Escaños</span> 
          
    </a>
    <br><br>
    IGUAL
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/castilla-la-mancha/valladolid" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 2 Escaños</span>
        <span style="color: #006400;">CDS 1 Escaño</span>
        
    </a>
    <br><br>
    IGUAL
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/castilla-la-mancha/valladolid" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #0000FF;">PP 3 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 
        
    </a>
    <br><br>
    IGUAL
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/castilla-la-mancha/valladolid" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 3 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span>
                    
                
                </a>
                <br><br>
                IGUAL
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/castilla-la-mancha/valladolid" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 3 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/castilla-la-mancha/valladolid" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
        <span style="color: #FF0000;">PSOE-PROGR 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/castilla-la-mancha/valladolid" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    
</a>
<br><br>
IGUAL
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/castilla-la-mancha/valladolid" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    
    
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/08/47.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/08/47.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>


</a>
<br><br>
IGUAL
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/08/47.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    
</a>
<br><br>
IGUAL
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/08/47.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    <span style="color: #008000;">VOX 1 Escaño</span>  

</a>
<br><br>
IGUAL
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/08/47.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #008000;">VOX 1 Escaño</span>  

</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/08/47/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaño</span> 
    <span style="color: #008000;">VOX 1 Escaño</span> 
    
</a>
<br><br>
IGUAL
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
            <h1 style="color: black;">Jaén <span class="escaños">5 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/andalucia/jaen" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span>
        <span style="color: #FFA500;">UCD 2 Escaños</span>
        
    </a>
    <br><br>
    El PSOE las gana sacando un escaño de ventaja a UCD
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/andalucia/jaen" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #FFA500;">UCD 2 Escaños</span>
    </a>
    <br><br>
    El PSOE las gana sacando un escaño de ventaja a UCD
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/andalucia/jaen" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 4 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 1 Escaños</span> 
          
    </a>
    <br><br>
    El PSOE las gana cuadruplicando en escaños a AP-PDP
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/andalucia/jaen" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 4 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PL 1 Escaño</span>
        
    </a>
    <br><br>
    El PSOE las gana cuadruplicando en escaños a AP-PDP-PL 
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/andalucia/jaen" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 4 Escaños</span> 
        <span style="color: #0000FF;">PP 1 Escaño</span>
        
    </a>
    <br><br>
    El PSOE las gana cuadruplicando en escaños a AP-PDP-PL
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/andalucia/jaen" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #0000FF;">PP 2 Escaños</span>
                
                </a>
                <br><br>
                El PSOE las gana sacando un escaño de ventaja al PP
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/andalucia/jaen" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span>
        <span style="color: #0000FF;">PP 2 Escaños</span>
</a>
<br><br>
El PSOE las gana sacando un escaño de ventaja al PP
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/andalucia/jaen" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE-PROGR 3 Escaños</span>
        <span style="color: #0000FF;">PP 2 Escaños</span>
</a>
<br><br>
PSOE-PROGR las gana sacando un escaño de ventaja al PP 
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/andalucia/jaen" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
        <span style="color: #0000FF;">PP 2 Escaños</span>
    
</a>
<br><br>
El PSOE las gana sacando un escaño de ventaja al PP
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/andalucia/jaen" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
        <span style="color: #0000FF;">PP 2 Escaños</span>
    
    
</a>
<br><br>
El PSOE las gana sacando un escaño de ventaja al PP
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/01/23.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaño</span>
</a>
<br><br>
El PP las gana sacando un escaño de ventaja al PSOE
<br><br>
2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/01/23.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    
</a>
<br><br>
IGUAL
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/01/23.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    
</a>
<br><br>
IGUAL
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/01/23.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>  

</a>
<br><br>
IGUAL
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/01/23.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 1 Escaño</span> 
    <span style="color: #008000;">VOX 1 Escaño</span>  

</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/01/23/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaño</span> 
    <span style="color: #008000;">VOX 1 Escaño</span> 
    
</a>
<br><br>
IGUAL
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
    IGUAL
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/comunidad-valenciana/castellon" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 3 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 
        

    </a>
    <br><br>
    IGUAL
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/comunidad-valenciana/castellon" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-UV 2 Escaños</span> 
          
    </a>
    <br><br>
    IGUAL
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/comunidad-valenciana/castellon" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PL 2 Escaños</span>
        
    </a>
    <br><br>
    IGUAL
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/comunidad-valenciana/castellon" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #0000FF;">PP 2 Escaños</span>
        
    </a>
    <br><br>
    IGUAL
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/comunidad-valenciana/castellon" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 3 Escaños</span>
                    <span style="color: #FF0000;">PSOE 2 Escaños</span> 
                
                </a>
                <br><br>
                IGUAL
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/comunidad-valenciana/castellon" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #0000FF;">PP 3 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/comunidad-valenciana/castellon" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #0000FF;">PP 3 Escaños</span>
        <span style="color: #FF0000;">PSOE-PROGR 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/comunidad-valenciana/castellon" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    
</a>
<br><br>
IGUAL
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/comunidad-valenciana/castellon" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #0000FF;">PP 3 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span>
    
    
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/17/12.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>
2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/17/12.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #800080;">PODEMOS-COMPROMIS 1 Escaño</span>
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span> 
    
</a>
<br><br>
IGUAL
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/17/12.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #800080;">PODEMOS-COMPROMIS 1 Escaño</span>
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span> 
    
</a>
<br><br>
IGUAL
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/17/12.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>  
    <span style="color: #800080;">PODEMOS 1 Escaño</span>

</a>
<br><br>
IGUAL
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/17/12.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 1 Escaño</span> 
    <span style="color: #008000;">VOX 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>

</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/17/12/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaño</span> 
    <span style="color: #008000;">VOX 1 Escaño</span> 
    
</a>
<br><br>
IGUAL
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
            <h1 style="color: black;">Badajoz <span class="escaños">5 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/extremadura/badajoz" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 3 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span>
        
    </a>
    <br><br>
    UCD las gana sacando un escaño de ventaja al PSOE
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/extremadura/badajoz" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 3 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span>
        
    </a>
    <br><br>
    UCD las gana sacando un escaño de ventaja al PSOE
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/extremadura/badajoz" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 4 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 1 Escaño</span> 
          
    </a>
    <br><br>
    El PSOE las gana cuadruplicando en escaños a AP-PDP
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/extremadura/badajoz" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 4 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PL 1 Escaño</span>
        
    </a>
    <br><br>
    El PSOE las gana cuadruplicando en escaños a AP-PDP-PL
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/extremadura/badajoz" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 4 Escaños</span> 
        <span style="color: #0000FF;">PP 1 Escaño</span>
        
    </a>
    <br><br>
    El PSOE las gana cuadruplicando en escaños al PP
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/extremadura/badajoz" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                    <span style="color: #0000FF;">PP 2 Escaños</span>
                
                </a>
                <br><br>
                El PSOE las gana sacando un escaño de ventaja al PP
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/extremadura/badajoz" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span>
        <span style="color: #0000FF;">PP 2 Escaños</span>
</a>
<br><br>
El PSOE las gana sacando un escaño de ventaja al PP
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/extremadura/badajoz" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #0000FF;">PP 3 Escaños</span>
        <span style="color: #FF0000;">PSOE-PROGR 2 Escaños</span>
</a>
<br><br>
El PP las gana sacando un escaño de ventaja a PSOE-PROGR
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/extremadura/badajoz" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span>
    
</a>
<br><br>
El PSOE las gana sacando un escaño de ventaja al PP
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/extremadura/badajoz" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span>
        <span style="color: #0000FF;">PP 2 Escaños</span>
    
    
</a>
<br><br>
El PSOE las gana sacando un escaño de ventaja al PP
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/10/06.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
El PP las gana sacando un escaño de ventaja al PSOE
<br><br>
2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/10/06.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span>
</a>
<br><br>
El PSOE las gana sacando un escaño de ventaja al PP
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/10/06.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
El PP las gana sacando un escaño de ventaja al PSOE
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/10/06.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>  
</a>
<br><br>
El PSOE las gana sacando un escaño de ventaja a la suma de PP y CS
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/10/06.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 1 Escaño</span> 
    <span style="color: #008000;">VOX 1 Escaño</span>

</a>
<br><br>
El PSOE las gana sacando un escaño de ventaja a la suma de PP y VOX
<br><br>
2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/10/06/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaño</span> 
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span> 
    
</a>
<br><br>
IGUAL
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
    IGUAL
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/cantabria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 3 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span>
        
    </a>
    <br><br>
    IGUAL
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/cantabria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 2 Escaños</span> 
          
    </a>
    <br><br>
    IGUAL
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/cantabria" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PL 2 Escaños</span>
        
    </a>
    <br><br>
    IGUAL
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/cantabria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #0000FF;">PP 2 Escaños</span>
        
    </a>
    <br><br>
    IGUAL
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/cantabria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                    <span style="color: #0000FF;">PP 2 Escaños</span>
                
                </a>
                <br><br>
                IGUAL
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/cantabria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #0000FF;">PP 3 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/cantabria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #0000FF;">PP 3 Escaños</span>
        <span style="color: #FF0000;">PSOE-PROGR 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/cantabria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    
</a>
<br><br>
IGUAL
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/cantabria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span>  
    
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/06/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>
2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/06/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span> 
</a>
<br><br>
IGUAL
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/06/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span> 
    
</a>
<br><br>
IGUAL
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/06/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>  
    <span style="color: #808000;">PRC 1 Escaño</span>

</a>
<br><br>
IGUAL
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/06/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaño</span> 
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    <span style="color: #808000;">PRC 1 Escaño</span>
    <span style="color: #008000;">VOX 1 Escaño</span>
    

</a>
<br><br>
IGUAL
<br><br>
2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/06/" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaño</span>
    <span style="color: #008000;">VOX 1 Escaño</span> 
    
</a>
<br><br>
IGUAL
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
    IGUAL
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/comunidad-foral-de-navarra" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 3 Escaños</span>
        <span style="color: #FF0000;">PSOE 1 Escaño</span>
        <span style="color: #8B4513;">UPN 1 Escaño</span>
        
    </a>
    <br><br>
    IGUAL
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/comunidad-foral-de-navarra" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #ADD8E6;">UPN-AP-PDP 2 Escaños</span> 
          
    </a>
    <br><br>
    IGUAL
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/comunidad-foral-de-navarra" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PL-UPN 2 Escaños</span>
        <span style="color: #01b59c;">HB 1 Escaño</span>
        
    </a>
    <br><br>
    IGUAL
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/comunidad-foral-de-navarra" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #8B4513;">UPN-PP 3 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 
        
    </a>
    <br><br>
    IGUAL
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/comunidad-foral-de-navarra" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #8B4513;">UPN-PP 3 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 
                
                </a>
                <br><br>
                IGUAL
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/comunidad-foral-de-navarra" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #8B4513;">UPN-PP 2 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 
        <span style="color: #DC143C;">IU-EB 1 Escaño</span> 
        
</a>
<br><br>
IGUAL
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/comunidad-foral-de-navarra" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #8B4513;">UPN-PP 3 Escaños</span>
        <span style="color: #FF0000;">PSOE-PROGR 2 Escaños</span> 
</a>
<br><br>
IGUAL
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/comunidad-foral-de-navarra" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #8B4513;">UPN-PP 2 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span>
        <span style="color: #298242;">NA-BAI 1 Escaño</span>

    
</a>
<br><br>
IGUAL
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/comunidad-foral-de-navarra" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #8B4513;">UPN-PP 2 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span>
        <span style="color: #298242;">NA-BAI 1 Escaño</span> 
    
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/13/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #8B4513;">UPN-PP 2 Escaños</span>
        <span style="color: #FF0000;">PSOE 1 Escaño</span>
        <span style="color: #01b59c;">AMAIUR 1 Escaño</span>
        <span style="color: #e99992;">GBAI 1 Escaño</span> 
</a>
<br><br>
IGUAL
<br><br>
2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/13/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #8B4513;">UPN-PP 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
        <span style="color: #FF0000;">PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/13/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #8B4513;">UPN-PP 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
        <span style="color: #FF0000;">PSOE 1 Escaño</span>
    
</a>
<br><br>
IGUAL
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/13/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #8B4513;">NAVARRA SUMA + 2 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span>
        <span style="color: #800080;">PODEMOS 1 Escaño</span>

</a>
<br><br>
IGUAL
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/13/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #8B4513;">NAVARRA SUMA + 2 Escaños</span>
        <span style="color: #FF0000;">PSOE 1 Escaño</span>
        <span style="color: #01b59c;">EHBILDU 1 Escaño</span>
        <span style="color: #800080;">PODEMOS 1 Escaño</span>

</a>
<br><br>
IGUAL
<br><br>
2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/13/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 2 Escaños</span>
        <span style="color: #01b59c;">EHBILDU 1 Escaño</span>
        <span style="color: #0000FF;">PP 1 Escaño</span> 
        <span style="color: #8B4513;">UPN 1 Escaño</span>
        
    
</a>
<br><br>
IGUAL
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
    IGUAL
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/andalucia/huelva" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 3 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span>


    </a>
    <br><br>
    IGUAL
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/andalucia/huelva" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 4 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 1 Escaño</span> 
          
    </a>
    <br><br>
    IGUAL
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/andalucia/huelva" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 4 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PL 1 Escaño</span>
        
    </a>
    <br><br>
    IGUAL
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/andalucia/huelva" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 4 Escaños</span> 
        <span style="color: #0000FF;">PP 1 Escaño</span>
        
    </a>
    <br><br>
    IGUAL
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/andalucia/huelva" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #0000FF;">PP 2 Escaños</span>
                
                </a>
                <br><br>
                IGUAL
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/andalucia/huelva" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span>
        <span style="color: #0000FF;">PP 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/andalucia/huelva" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE-PROGR 3 Escaños</span>
        <span style="color: #0000FF;">PP 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/andalucia/huelva" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
        <span style="color: #0000FF;">PP 2 Escaños</span>
    
</a>
<br><br>
IGUAL
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/andalucia/huelva" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
        <span style="color: #0000FF;">PP 2 Escaños</span>
    
    
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/01/21.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>
2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/01/21.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    
</a>
<br><br>
IGUAL
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/01/21.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    
</a>
<br><br>
IGUAL
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/01/21.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>

</a>
<br><br>
IGUAL
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/01/21.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span> 
    <span style="color: #0000FF;">PP 1 Escaño</span>  

</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/01/21/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaño</span> 
    <span style="color: #008000;">VOX 1 Escaño</span> 
    
</a>
<br><br>
IGUAL
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
    IGUAL
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/castilla-y-leon/ciudad-real" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 3 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 

    </a>
    <br><br>
    IGUAL
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/castilla-y-leon/ciudad-real" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 2 Escaños</span> 
          
    </a>
    <br><br>
    IGUAL
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/castilla-y-leon/ciudad-real" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PL 2 Escaños</span>
        
    </a>
    <br><br>
    IGUAL
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/castilla-y-leon/ciudad-real" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #0000FF;">PP 2 Escaños</span>
        
    </a>
    <br><br>
    IGUAL
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/castilla-y-leon/ciudad-real" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span>
        <span style="color: #0000FF;">PP 2 Escaños</span>
                    
                
                </a>
                <br><br>
                IGUAL
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/castilla-y-leon/ciudad-real" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span>
        <span style="color: #0000FF;">PP 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/castilla-y-leon/ciudad-real" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
        <span style="color: #FF0000;">PSOE-PROGR 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/castilla-y-leon/ciudad-real" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    
</a>
<br><br>
IGUAL
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/castilla-y-leon/ciudad-real" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    
    
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/07/13.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/07/13.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>

</a>
<br><br>
IGUAL
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/07/13.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    
</a>
<br><br>
IGUAL
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/07/13.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    <span style="color: #008000;">VOX 1 Escaño</span>  

</a>
<br><br>
IGUAL
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/07/13.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #008000;">VOX 1 Escaño</span>  

</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/07/13/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaño</span> 
    <span style="color: #008000;">VOX 1 Escaño</span> 
    
</a>
<br><br>
IGUAL
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
            <h1 style="color: black;">Guipuzcoa <span class="escaños">6 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/pais-vasco/gipuzkoa" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #298242;">PNV 3 Escaños</span>
        <span style="color: #FF0000;">PSE-PSOE 2 EscañoS</span>
        <span style="color: #DC143C ;">EE 1 Escaño</span>
        
    </a>
    <br><br>
    El PNV las gana sacando un escaño de ventaja al PSOE y triplicando a EE
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/pais-vasco/gipuzkoa" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #298242;">PNV 2 Escaños</span>
        <span style="color: #FF0000;">PSE-PSOE 1 Escaños</span>
        <span style="color: #01b59c;">HB 1 Escaño</span>
        <span style="color: #FFA500;">UCD 1 Escaño</span>
        <span style="color: #DC143C ;">EE 1 Escaño</span>

    </a>
    <br><br>
    El PNV las gana y sumando al PSOE, HB y EE quintuplican en escaños a UCD
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/pais-vasco/gipuzkoa" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #298242;">PNV 3 Escaños</span>
        <span style="color: #FF0000;">PSE-PSOE 2 Escaños</span>
        <span style="color: #01b59c;">HB 1 Escaño</span>
    
    </a>
    <br><br>
    El PNV las gana sacando un escaño de ventaja al PSOE y triplicando en escaños a HB
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/pais-vasco/gipuzkoa" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #298242;">PNV 2 Escaños</span>
        <span style="color: #FF0000;">PSE-PSOE 2 Escaños</span>
        <span style="color: #01b59c;">HB 2 Escaños</span>
    </a>
    <br><br>
    El PNV las gana empatando en escaños tanto con el PSOE como con HB
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/pais-vasco/gipuzkoa" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #01b59c;">HB 2 Escaños</span>
        <span style="color: #FF0000;">PSE-PSOE 1 Escaño</span>
        <span style="color: #298242;">EUSKO ALKARTASUNA 1 Escaño</span>
        <span style="color: #298242;">PNV 1 Escaño</span>
        <span style="color: #DC143C ;">EE 1 Escaño</span>
        
    </a>
    <br><br>
    HB las gana sacando un escaño de ventaja tanto al PSOE, como a EUSKO ALKARTASUNA, como al PNV y como a EE
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/pais-vasco/gipuzkoa" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSE-PSOE 2 Escaños</span>
        <span style="color: #01b59c;">HB 1 Escaño</span>
        <span style="color: #298242;">EUSKO ALKARTASUNA-UE 1 Escaño</span>
        <span style="color: #298242;">PNV 1 Escaño</span>
        <span style="color: #0000FF;">PP 1 Escaño</span>
        
                </a>
                <br><br>
                IGUAL
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/pais-vasco/gipuzkoa" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #FF0000;">PSE-PSOE 2 Escaños</span>
                    <span style="color: #298242;">PNV 1 Escaño</span>
        <span style="color: #01b59c;">HB 1 Escaño</span>
        <span style="color: #298242;">EUSKO ALKARTASUNA-UE 1 Escaño</span>
        <span style="color: #0000FF;">PP 1 Escaño</span>    
</a>
<br><br>
IGUAL
<br><br>
2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/pais-vasco/gipuzkoa" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #298242;">PNV 2 Escaños</span>
                    <span style="color: #0000FF;">PP 2 Escaños</span>
                    <span style="color: #FF0000;">PSE-PSOE 1 Escaño</span>
                    <span style="color: #298242;">EUSKO ALKARTASUNA 1 Escaño</span>    
</a>
<br><br>
IGUAL
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/pais-vasco/gipuzkoa" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #298242;">PNV 2 Escaños</span>
                    <span style="color: #FF0000;">PSE-PSOE 2 Escaños</span>
                    <span style="color: #0000FF;">PP 1 Escaño</span>
                    <span style="color: #298242;">EUSKO ALKARTASUNA 1 Escaño</span>            
    
</a>
<br><br>
IGUAL
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/pais-vasco/gipuzkoa" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSE-PSOE 3 Escaños</span>
        <span style="color: #298242;">PNV 2 Escaños</span>
        <span style="color: #0000FF;">PP 1 Escaño</span>
    
    
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/14/20.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #01b59c;">AMAIUR 3 Escaños</span>
        <span style="color: #298242;">PNV 1 Escaño</span>
        <span style="color: #FF0000;">PSE-PSOE 1 Escaño</span>
        <span style="color: #0000FF;">PP 1 Escaño</span>
        
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/14/20.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
        <span style="color: #298242;">PNV 2 Escaños</span>
        <span style="color: #01b59c;">EHBILDU 1 Escaño</span>
        <span style="color: #FF0000;">PSE-PSOE 1 Escaño</span>

</a>
<br><br>
IGUAL
<br><br>
2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/14/20.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
        <span style="color: #298242;">PNV 2 Escaños</span>
        <span style="color: #01b59c;">EHBILDU 1 Escaño</span>
        <span style="color: #FF0000;">PSE-PSOE 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/14/20.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #298242;">PNV 2 Escaños</span>
        <span style="color: #01b59c;">EHBILDU 2 Escaños</span>
        <span style="color: #FF0000;">PSE-PSOE 1 Escaño</span>
        <span style="color: #800080;">PODEMOS 1 Escaño</span>

</a>
<br><br>
IGUAL
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/14/20.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #298242;">PNV 2 Escaños</span>
        <span style="color: #01b59c;">EHBILDU 2 Escaños</span>
        <span style="color: #FF0000;">PSE-PSOE 1 Escaño</span>
        <span style="color: #800080;">PODEMOS 1 Escaño</span>

</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/14/20/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #01b59c;">EHBILDU 2 Escaños</span>
        <span style="color: #FF0000;">PSE-PSOE 2 Escaños</span>
        <span style="color: #298242;">PNV 2 Escaños</span>
    
</a>
<br><br>
IGUAL
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
            <h1 style="color: black;">Tarragona <span class="escaños">6 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/catalunya/tarragona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 2 Escaños</span>
        <span style="color: #FF0000;">PSC-PSOE 2 Escaños</span> 
        <span style="color: #CC0000;">PSUC-PCE 1 Escaño</span> 
        <span style="color: #FF5733;">PDPC 1 Escaño</span>
    </a>
    <br><br>
    UCD las gana, pero la suma de PSC-PSOE, PSUC-PCE y PDPC le dobla en escaños
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/catalunya/tarragona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSC-PSOE 2 Escaños</span>
        <span style="color: #FFA500;">UCD 2 Escaños</span>
        <span style="color: #CC0000;">PSUC-PCE 1 Escaño</span> 
        <span style="color: #40E0D0;">CIU 1 Escaño</span> 
    </a>
    <br><br>
    El PSC-PSOE las gana y sumando a PSUC-PCE y CIU doblan en escaños a UCD
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/catalunya/tarragona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSC-PSOE 4 Escaños</span>
        <span style="color: #40E0D0;">CIU 1 Escaño</span> 
        <span style="color: #ADD8E6;">AP-PDP 1 Escaño</span>
        
    
    </a>
    <br><br>
    El PSC-PSOE las gana y sumando a CIU quintuplican en escaños a AP-PDP
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/catalunya/tarragona" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #FF0000;">PSC-PSOE 3 Escaños</span>
        <span style="color: #40E0D0;">CIU 2 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 1 Escaño</span>
    </a>
    <br><br>
    El PSC-PSOE las gana y sumando a CIU quintuplican en escaños a AP-PDP
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/catalunya/tarragona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSC-PSOE 3 Escaños</span>
        <span style="color: #40E0D0;">CIU 2 Escaños</span> 
        <span style="color: #0000FF;">PP 1 Escaño</span> 
        
    </a>
    <br><br>
    El PSC-PSOE las gana y sumando a CIU quintuplican en escaños al PP
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/catalunya/tarragona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSC-PSOE 3 Escaños</span>
        <span style="color: #40E0D0;">CIU 2 Escaños</span> 
        <span style="color: #0000FF;">PP 1 Escaño</span> 
                
                </a>
                <br><br>
                IGUAL
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/catalunya/tarragona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSC-PSOE 3 Escaños</span>
        <span style="color: #40E0D0;">CIU 2 Escaños</span> 
        <span style="color: #0000FF;">PP 1 Escaño</span> 
</a>
<br><br>
IGUAL
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/catalunya/tarragona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSC-PSOE 2 Escaños</span>
        <span style="color: #40E0D0;">CIU 2 Escaños</span> 
        <span style="color: #0000FF;">PP 2 Escaños</span> 
</a>
<br><br>
IGUAL
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/catalunya/tarragona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSC-PSOE 3 Escaños</span>
                    <span style="color: #40E0D0;">CIU 1 Escaño</span> 
                    <span style="color: #c99f00;">ERC 1 Escaño</span>
                    <span style="color: #0000FF;">PP 1 Escaño</span> 
    
</a>
<br><br>
IGUAL
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/catalunya/tarragona" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #FF0000;">PSC-PSOE 4 Escaños</span>
                    <span style="color: #40E0D0;">CIU 1 Escaño</span>
                    <span style="color: #0000FF;">PP 1 Escaño</span> 
    
    
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/09/43.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #40E0D0;">CIU 2 Escaños</span> 
        <span style="color: #FF0000;">PSC-PSOE 2 Escaños</span>
        <span style="color: #0000FF;">PP 2 Escaños</span>
</a>
<br><br>
IGUAL
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
IGUAL
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
IGUAL
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/09/43.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #c99f00;">ERC SOBERANISTES 2 Escaños</span> 
                    <span style="color: #FF0000;">PSC-PSOE 1 Escaño</span>
                    <span style="color: #FF7F00;">CS 1 Escaño</span>
                    <span style="color: #40E0D0;">JUNTS 1 Escaño</span>
                    <span style="color: #800080;">PODEMOS 1 Escaño</span> 
</a>
<br><br>
IGUAL
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/09/43.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #c99f00;">ERC SOBERANISTES 2 Escaños</span> 
    <span style="color: #FF0000;">PSC-PSOE 2 Escaños</span>
    <span style="color: #40E0D0;">JUNTS 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>

</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/09/43/" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #FF0000;">PSC-PSOE 2 Escaños</span>
                    <span style="color: #c99f00;">ERC 1 Escaño</span>
                    <span style="color: #0000FF;">PP 1 Escaño</span>   
                    <span style="color: #FF69B4;">SUMAR 1 Escaño</span>  
                    <span style="color: #40E0D0;">JUNTS 1 Escaño</span>
    
</a>
<br><br>
IGUAL
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
            <h1 style="color: black;">Girona <span class="escaños">6 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/catalunya/girona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF5733;">PDPC 2 Escaños</span>
        <span style="color: #FF0000;">PSC-PSOE 2 Escaños</span> 
        <span style="color: #FFA500;">UCD 1 Escaño</span>
        <span style="color: #CC0000;">PSUC-PCE 1 Escaño</span> 
    </a>
    <br><br>
    PDPC las gana y sumando al PSC-PSOE y PSUC-PCE quintuplican en escaños a UCD
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/catalunya/girona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSC-PSOE 2 Escaños</span> 
        <span style="color: #FFA500;">CC-UCD 2 Escaños</span>
        <span style="color: #FF5733;">CIU 2 Escaños</span>
        
    </a>
    <br><br>
    El PSC-PSOE las gana y sumando a CIU doblan en escaños a CC-UCD
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/catalunya/girona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #40E0D0;">CIU 3 Escaños</span> 
        <span style="color: #FF0000;">PSC-PSOE 2 Escaños</span>
        <span style="color: #ADD8E6;">AP-PDP 1 Escaño</span>
        
    
    </a>
    <br><br>
    CIU las gana y sumando a PSC-PSOE quintuplican en escaños a AP-PDP
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/catalunya/girona" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #40E0D0;">CIU 4 Escaños</span> 
        <span style="color: #FF0000;">PSC-PSOE 2 Escaños</span>
        
    </a>
    <br><br>
    CIU las gana doblando en escaños a PSC-PSOE
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/catalunya/girona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #40E0D0;">CIU 4 Escaños</span> 
        <span style="color: #FF0000;">PSC-PSOE 2 Escaños</span>
        
    </a>
    <br><br>
    CIU las gana doblando en escaños a PSC-PSOE
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/catalunya/girona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #40E0D0;">CIU 3 Escaños</span> 
        <span style="color: #FF0000;">PSC-PSOE 2 Escaños</span>
                <span style="color: #0000FF;">PP 1 Escaño</span> 
                </a>
                <br><br>
                CIU las gana y sumando al PSC-PSOE quintuplican en escaños al PP
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/catalunya/girona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #40E0D0;">CIU 3 Escaños</span> 
        <span style="color: #FF0000;">PSC-PSOE 3 Escaños</span>
</a>
<br><br>
CIU las gana empatando en escaños con el PSC-PSOE
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/catalunya/girona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #40E0D0;">CIU 3 Escaños</span> 
        <span style="color: #FF0000;">PSC-PSOE 2 Escaños</span>
        <span style="color: #0000FF;">PP 1 Escaño</span> 
</a>
<br><br>
CIU las gana y sumando al PSC-PSOE quintuplican en escaños al PP
<br><br>
2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/catalunya/girona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSC-PSOE 2 Escaños</span>
                    <span style="color: #40E0D0;">CIU 2 Escaños</span> 
                    <span style="color: #c99f00;">ERC 2 Escaños</span> 
    
</a>
<br><br>
IGUAL
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/catalunya/girona" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSC-PSOE 3 Escaños</span>
                    <span style="color: #40E0D0;">CIU 2 Escaños</span> 
                    <span style="color: #c99f00;">ERC 1 Escaño</span>           
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/09/17.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #40E0D0;">CIU 3 Escaños</span> 
        <span style="color: #FF0000;">PSC-PSOE 1 Escaño</span>
        <span style="color: #0000FF;">PP 1 Escaño</span>  
        <span style="color: #c99f00;">ERC 1 Escaño</span>   
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/09/17.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">               
    <span style="color: #40E0D0;">DL 2 Escaños</span>
    <span style="color: #c99f00;">ERC CATSÍ 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span> 
    <span style="color: #FF0000;">PSC-PSOE 1 Escaño</span> 
                               
</a>
<br><br>
IGUAL
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/09/17.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #c99f00;">ERC CATSÍ 2 Escaños</span>
    <span style="color: #40E0D0;">DL 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span> 
    <span style="color: #FF0000;">PSC-PSOE 1 Escaño</span> 

</a>
<br><br>
IGUAL
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/09/17.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #c99f00;">ERC SOBERANISTES 3 Escaños</span> 
                    <span style="color: #40E0D0;">JUNTS 2 Escaños</span>
                    <span style="color: #FF0000;">PSC-PSOE 1 Escaño</span>
                    
</a>
<br><br>
IGUAL
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/09/17.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #c99f00;">ERC SOBERANISTES 2 Escaños</span> 
                    <span style="color: #40E0D0;">JUNTS 2 Escaños</span>
                    <span style="color: #FF0000;">PSC-PSOE 1 Escaño</span>
                    <span style="color: #800080;">PODEMOS 1 Escaño</span>

</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/09/17/" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #FF0000;">PSC-PSOE 2 Escaños</span>
                    <span style="color: #40E0D0;">JUNTS 2 Escaños</span>
                    <span style="color: #c99f00;">ERC 1 Escaño</span>
                    <span style="color: #FF69B4;">SUMAR 1 Escaño</span>   
                    
</a>
<br><br>
IGUAL
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
            <h1 style="color: black;">Toledo <span class="escaños">6 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/castilla-y-leon/toledo" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 3 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span>
        <span style="color: #ADD8E6;">AP-PDP 1 Escaño</span>  
        
    </a>
    <br><br>
    UCD las gana y sumando a AP-PDP doblan en escaños al PSOE
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/castilla-y-leon/toledo#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 3 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span> 
        <span style="color: #FF0D00;">PCE 1 Escaño</span>  
    </a>
    <br><br>
    UCD las gana empatando en escaños a la suma de PSOE y PCE
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/castilla-y-leon/toledo#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 4 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 2 Escaños</span> 
          
    </a>
    <br><br>
    El PSOE las gana doblando en escaños a AP-PDP
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/castilla-y-leon/toledo#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PL 3 Escaños</span>
        
        
    </a>
    <br><br>
    El PSOE las gana empatando en escaños con AP-PDP-PL
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/castilla-y-leon/toledo#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 4 Escaños</span> 
        <span style="color: #0000FF;">PP 2 Escaños</span>
        
    </a>
    <br><br>
    El PSOE las gana doblando en escaños al PP
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/castilla-y-leon/toledo#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span>
        <span style="color: #0000FF;">PP 3 Escaños</span>
                    
                
                </a>
                <br><br>
                El PSOE las gana empatando en escaños con el PP
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/castilla-y-leon/toledo#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 3 Escaños</span>
        <span style="color: #FF0000;">PSOE 3 Escaños</span>
</a>
<br><br>
El PP las gana empatando en escaños con el PSOE
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/castilla-y-leon/toledo#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
        <span style="color: #FF0000;">PSOE-PROGR 3 Escaños</span>
</a>
<br><br>
El PP las gana empatando en escaños con el PSOE-PROGR
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/castilla-y-leon/toledo#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    
</a>
<br><br>
El PP las gana empatando en escaños con el PSOE
<br><br>
2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/castilla-y-leon/toledo#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    
    
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/07/45.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/07/45.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>


</a>
<br><br>
IGUAL
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/07/45.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    
</a>
<br><br>
IGUAL
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/07/45.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    <span style="color: #008000;">VOX 1 Escaño</span>  

</a>
<br><br>
IGUAL
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/07/45.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #008000;">VOX 2 Escaños</span>  

</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/07/45/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaño</span> 
    <span style="color: #008000;">VOX 1 Escaño</span> 
    
</a>
<br><br>
IGUAL
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
            <h1 style="color: black;">Córdoba <span class="escaños">6 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/andalucia/cordoba" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span>
        <span style="color: #FFA500;">UCD 2 Escaños</span>
        <span style="color: #FF0D00;">PCE 1 Escaño</span>  
        
    </a>
    <br><br>
    El PSOE las gana y sumando al PCE doblan en escaños a UCD
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/andalucia/cordoba" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #FFA500;">UCD 2 Escaños</span>
        <span style="color: #FF0D00;">PCE 1 Escaño</span> 

    </a>
    <br><br>
    El PSOE las gana y sumando al PCE doblan en escaños a UCD
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/andalucia/cordoba" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 5 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 1 Escaño</span> 
          
    </a>
    <br><br>
    El PSOE las gana quintuplicando en escaños a AP-PDP
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/andalucia/cordoba" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 4 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PL 1 Escaño</span>
        <span style="color: #d25644;">IU 1 Escaño</span>
        
    </a>
    <br><br>
    El PSOE las gana y sumando a IU quintuplican en escaños a AP-PDP-PL
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/andalucia/cordoba" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 4 Escaños</span> 
        <span style="color: #d25644;">IU 1 Escaño</span>
        <span style="color: #0000FF;">PP 1 Escaño</span>
        
    </a>
    <br><br>
    El PSOE las gana y sumando a IU quintuplican en escaños al PP
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/andalucia/cordoba" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                    <span style="color: #0000FF;">PP 2 Escaños</span>
        <span style="color: #d25644;">IU 1 Escaño</span>
    
                </a>
                <br><br>
                El PSOE las gana y sumando a IU doblan en escaños al PP
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/andalucia/cordoba" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                    <span style="color: #0000FF;">PP 2 Escaños</span>
        <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
El PSOE las gana y sumando a IU doblan en escaños al PP
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/andalucia/cordoba" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
        <span style="color: #FF0000;">PSOE-PROGR 3 Escaños</span>
</a>
<br><br>
El PP las gana empatando en escaños con el PSOE
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/andalucia/cordoba" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    
    
</a>
<br><br>
El PSOE las gana doblando en escaños al PP
<br><br>
2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/andalucia/cordoba" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    
    
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/01/14.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/01/14.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>


</a>
<br><br>
IGUAL
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/01/14.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    
</a>
<br><br>
IGUAL
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/01/14.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #008000;">VOX 1 Escaño</span>  

</a>
<br><br>
IGUAL
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/01/14.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #008000;">VOX 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span> 

</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/01/14/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaño</span> 
    <span style="color: #008000;">VOX 1 Escaño</span>
    <span style="color: #FF69B4;">SUMAR 1 Escaño</span>  
    
</a>
<br><br>
IGUAL
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
            <h1 style="color: black;">Almería <span class="escaños">6 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/andalucia/almeria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 4 Escaños</span> 
        <span style="color: #FF0000;">PSOE 2 Escaños</span>
        
    </a>
    <br><br>
    UCD las gana doblando en escaños al PSOE
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/andalucia/almeria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 3 Escaños</span> 
        <span style="color: #FF0000;">PSOE 3 Escaños</span>

    </a>
    <br><br>
    UCD las gana empatando en escaños con el PSOE
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/andalucia/almeria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 4 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 2 Escaños</span> 
          
    </a>
    <br><br>
    El PSOE las gana doblando en escaños a AP-PDP
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/andalucia/almeria" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 4 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PL 2 Escaños</span> 
    </a>
    <br><br>
    El PSOE las gana doblando en escaños a AP-PDP-PL
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/andalucia/almeria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 4 Escaños</span> 
        <span style="color: #0000FF;">PP 2 Escaños</span>
        
    </a>
    <br><br>
    El PSOE las gana doblando en escaños al PP
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/andalucia/almeria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                    <span style="color: #0000FF;">PP 3 Escaños</span>
    
                </a>
                <br><br>
                El PSOE las gana empatando en escaños con el PP
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/andalucia/almeria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                    <span style="color: #0000FF;">PP 3 Escaños</span>
</a>
<br><br>
El PSOE las gana empatando en escaños con el PP
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/andalucia/almeria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
        <span style="color: #FF0000;">PSOE-PROGR 3 Escaños</span>
</a>
<br><br>
El PP las gana empatando en escaños con PSOE-PROGR
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/andalucia/almeria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    
    
</a>
<br><br>
El PSOE las gana empatando en escaños con el PP
<br><br>
2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/andalucia/almeria" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
    
    
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/01/04.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/01/04.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>


</a>
<br><br>
IGUAL
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/01/04.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    
</a>
<br><br>
IGUAL
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/01/04.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span> 
    <span style="color: #FF7F00;">CS 1 Escaño</span> 

</a>
<br><br>
IGUAL
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/01/04.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 

</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/01/04/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span> 
    <span style="color: #008000;">VOX 1 Escaño</span>
    
</a>
<br><br>
IGUAL
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
            <h1 style="color: black;">Pontevedra <span class="escaños">7 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/galicia/pontevedra" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 5 Escaños</span> 
        <span style="color: #FF0000;">PSOE 1 Escaño</span>
        <span style="color: #ADD8E6;">AP 1 Escaño</span>
        
    </a>
    <br><br>
    UCD las gana y sumando a AP multiplican por seis en escaños al PSOE
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/galicia/pontevedra" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 5 Escaños</span> 
        <span style="color: #FF0000;">PSOE 1 Escaño</span>
        <span style="color: #006400;">CD 1 Escaño</span>

    </a>
    <br><br>
    UCD las gana y sumando a CD multiplican por seis en escaños a CD
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/galicia/pontevedra" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #ADD8E6;">AP-PDP 3 Escaños</span> 
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #FFA500;">UCD 1 Escaños</span>
          
    </a>
    <br><br>
    AP-PDP las gana y sumando a UCD sacan un escaño de ventaja al PSOE
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/galicia/pontevedra" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #ADD8E6;">AP-PDP-PL-C 4 Escaños</span> 
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
    </a>
    <br><br>
    AP-PDP-PL-C las gana sacando un escaño de ventaja al PSOE
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/galicia/pontevedra" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #0000FF;">PP 4 Escaños</span>
        <span style="color: #FF0000;">PSOE 3 Escaños</span>
        
    </a>
    <br><br>
    El PP las gana sacando un escaño de ventaja al PSOE
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/galicia/pontevedra" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 4 Escaños</span>
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
    
                </a>
                <br><br>
                El PP las gana sacando un escaño de ventaja al PSOE
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/galicia/pontevedra" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #0000FF;">PP 4 Escaños</span>
                    <span style="color: #FF0000;">PSOE 2 Escaños</span>
                    <span style="color: #74b1e0;">BNG 1 Escaño</span>
</a>
<br><br>
El PP las gana sacando un escaño de ventaja a la suma de PSOE y BNG
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/galicia/pontevedra" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span>
                    <span style="color: #FF0000;">PSOE 2 Escaños</span>
                    <span style="color: #74b1e0;">BNG 1 Escaño</span>
</a>
<br><br>
El PP las gana sacando un escaño de ventaja a la suma de PSOE y BNG
<br><br>
2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/galicia/pontevedra" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #74b1e0;">BNG 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>
2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/galicia/pontevedra" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #74b1e0;">BNG 1 Escaño</span>
    
    
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/11/36.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #74b1e0;">BNG 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/11/36.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span>


</a>
<br><br>
IGUAL
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/11/36.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    
</a>
<br><br>
IGUAL
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/11/36.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span> 

</a>
<br><br>
IGUAL
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/11/36.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/11/36/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
    <span style="color: #FF69B4;">SUMAR 1 Escaño</span>
    
</a>
<br><br>
IGUAL
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
    IGUAL
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/andalucia/granada" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 3 Escaños</span>
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #FF0D00;">PCE 1 Escaño</span> 

    </a>
    IGUAL
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/andalucia/granada" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 5 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 2 Escaños</span> 
          
    </a>
    <br><br>
    IGUAL
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/andalucia/granada" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 5 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PL 2 Escaños</span>
        
    </a>
    <br><br>
    IGUAL
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/andalucia/granada" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 4 Escaños</span> 
        <span style="color: #0000FF;">PP 2 Escaños</span>
        <span style="color: #d25644;">IU 1 Escaño</span>
        
    </a>
    <br><br
    IGUAL
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/andalucia/granada" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 4 Escaños</span> 
                    <span style="color: #0000FF;">PP 3 Escaños</span>
    
                </a>
                <br><br>
                IGUAL
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/andalucia/granada" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                    <span style="color: #0000FF;">PP 3 Escaños</span>
        <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/andalucia/granada" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE-PROGR 4 Escaños</span>
        <span style="color: #0000FF;">PP 3 Escaños</span>
        
</a>
<br><br>
IGUAL
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/andalucia/granada" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    
    
</a>
<br><br>
IGUAL
<br><br>
2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/andalucia/granada" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span> 

    
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/01/18.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/01/18.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>


</a>
<br><br>
IGUAL
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/01/18.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    
</a>
<br><br>
IGUAL
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/01/18.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    <span style="color: #008000;">VOX 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>  

</a>
<br><br>
IGUAL
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/01/18.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #008000;">VOX 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span> 

</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/01/18/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span> 
    <span style="color: #008000;">VOX 1 Escaño</span>
    <span style="color: #FF69B4;">SUMAR 1 Escaño</span>  
    
</a>
<br><br>
IGUAL
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
            <h1 style="color: black;">Asturias <span class="escaños">7 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/asturias" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #FF0000;">PSOE 3 Escaños</span>
        <span style="color: #FFA500;">UCD 2 Escaños</span>
        <span style="color: #ADD8E6;">AP 1 Escaño</span>
        <span style="color: #FF0D00;">PCE 1 Escaño</span>
    </a>
    <br><br>
    El PSOE las gana y sumando al PCE sacan un escaño de ventaja a la suma de UCD y AP
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/asturias/asturias" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span>
        <span style="color: #FFA500;">UCD 3 Escaños</span>
        <span style="color: #FF0D00;">PCE 1 Escaño</span>
    </a>
    <br><br>
    El PSOE las gana y sumando al PCE sacan un escaño de ventaja a UCD
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/asturias/asturias" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 5 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 2 Escaños</span> 
    </a>
    <br><br>
    El PSOE las gana sacando tres escaños de ventaja a AP-PDP
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/asturias/asturias" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 4 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PL 2 Escaños</span>
        <span style="color: #006400;">CDS 1 Escaño</span>
    </a>
    <br><br>
    El PSOE las gana sacando un escaño de ventaja a la suma de AP-PDP-PL y CDS 
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/asturias/asturias" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #0000FF;">PP 2 Escaños</span>
        <span style="color: #d25644;">IU 1 Escaño</span>
        <span style="color: #006400;">CDS 1 Escaño</span>
    </a>
    <br><br>
    El PSOE las gana y sumando a IU sacan un escaño de ventaja a la suma de PP y CDS
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/asturias/asturias" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                    <span style="color: #0000FF;">PP 3 Escaños</span>
                    <span style="color: #d25644;">IU 1 Escaño</span>
    
                </a>
                <br><br>
                El PSOE las gana y sumando a IU sacan un escaño de ventaja al PP
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/asturias/asturias" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 3 Escaños</span>
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                    <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
El PP las gana, pero la suma de PSOE e IU le supera en un escaño
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/asturias/asturias" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #0000FF;">PP 4 Escaños</span>
        <span style="color: #FF0000;">PSOE-PROGR 3 Escaños</span>
        
</a>
<br><br>
El PP las gana sacando un escaño de ventaja a PSOE-PROGR
<br><br>
2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/asturias/asturias" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    
    
</a>
<br><br>
El PP las gana sacando un escaño de ventaja al PSOE
<br><br>
2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/asturias/asturias" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span> 

    
</a>
<br><br>
El PSOE las gana sacando un escaño de ventaja al PP
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/03/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #014586;">FA 1 Escaño</span>
    <span style="color: #d25644;">IU-IX 1 Escaño</span>
</a>
<br><br>
El PP las gana y sumando a FA sacan un escaño de ventaja a la suma de PSOE e IU-IX
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/03/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>


</a>
<br><br>
El PP las gana, pero la suma de PSOE y PODEMOS le saca un escaño de ventaja a la suma de PP y CS
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/03/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    
</a>
<br><br>
El PP las gana, pero la suma de PSOE y PODEMOS le saca un escaño de ventaja a la suma de PP y CS
<br><br>
2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/03/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>  
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    <span style="color: #008000;">VOX 1 Escaño</span>

</a>
<br><br>
IGUAL
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/03/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #800080;">PODEMOS 1 Escaño</span> 
    <span style="color: #008000;">VOX 1 Escaño</span>

</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/03/33/#?int=widgetEP" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaño</span> 
    <span style="color: #FF69B4;">SUMAR 1 Escaño</span> 
    <span style="color: #008000;">VOX 1 Escaño</span> 
    
</a>
<br><br>
IGUAL
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
            <h1 style="color: black;">Zaragoza <span class="escaños">7 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/aragon/zaragoza" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #FFA500;">UCD 3 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span>
        <span style="color: #FF6767;">PSP-US 1 Escaño</span>
        <span style="color: #c2272c;">CAIC 1 Escaño</span>
    </a>
    <br><br>
    UCD las gana y sumando a CAIC sacan un escaño de ventaja a la suma de PSOE y PSP-US
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/aragon/zaragoza" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 4 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span>
        <span style="color: #c99f00;">PAR 1 Escaño</span>

    </a>
    UCD las gana y sumando al PAR sacan tres escaños de ventaja al PSOE
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/aragon/zaragoza" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 4 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PAR 3 Escaños</span>  
    </a>
    <br><br>
    El PSOE las gana sacando un escaño de ventaja a AP-PDP-PAR
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/aragon/zaragoza" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 4 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PL 2 Escaños</span>
        <span style="color: #c99f00;">PAR 1 Escaño</span>
    </a>
    <br><br>
    El PSOE las gana sacando un escaño de ventaja a la suma de AP-PDP-PL y el PAR
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
    IGUAL
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/aragon/zaragoza" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                    <span style="color: #0000FF;">PP 2 Escaños</span>
                    <span style="color: #c99f00;">PAR 1 Escaño</span>
                    <span style="color: #d25644;">IU 1 Escaño</span>
    
                </a>
                <br><br>
                IGUAL
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/aragon/zaragoza" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP-PAR 4 Escaños</span>
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                    
</a>
<br><br>
IGUAL
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/aragon/zaragoza" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #0000FF;">PP 4 Escaños</span>
        <span style="color: #FF0000;">PSOE-PROGR 2 Escaños</span>
        <span style="color: #ab001c;">CHA 1 Escaño</span>
        
</a>
<br><br>
IGUAL
<br><br>
2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/aragon/zaragoza" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #ab001c;">CHA 1 Escaño</span>
    
    
</a>
<br><br>
IGUAL
<br><br>
2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/aragon/zaragoza" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span> 

    
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/02/50.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #01c6a4;">La Izquierda de Aragón: La Izquierda Plural 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/02/50.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>


</a>
<br><br>
IGUAL
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/02/50.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    
</a>
<br><br>
IGUAL
<br><br>
2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/02/50.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>  
    <span style="color: #008000;">VOX 1 Escaño</span>

</a>
<br><br>
IGUAL
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/02/50.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span> 
    <span style="color: #800080;">PODEMOS 1 Escaño</span> 

</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/02/50/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaño</span> 
    <span style="color: #008000;">VOX 1 Escaño</span> 
    <span style="color: #FF69B4;">SUMAR 1 Escaño</span> 
    
</a>
<br><br>
IGUAL
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
    IGUAL
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/canarias/santa-cruz-de-tenerife" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 5 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span>

    </a>
    <br><br>
    IGUAL
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/canarias/santa-cruz-de-tenerife" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 4 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 2 Escaños</span> 
        <span style="color: #FFA500;">UCD 1 Escaño</span> 
    </a>
    <br><br>
    IGUAL
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/canarias/santa-cruz-de-tenerife" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 4 Escaños</span> 
        <span style="color: #041595;">AIC 1 Escaño</span>
        <span style="color: #ADD8E6;">AP-PDP-PL 1 Escaño</span>
        <span style="color: #006400;">CDS 1 Escaño</span> 
    </a>
    <br><br>
    El PSOE las gana sacando un escaño de ventaja a la suma de AIC, AP-PDP-PL y CDS.
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/canarias/santa-cruz-de-tenerife" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 4 Escaños</span> 
        <span style="color: #041595;">AIC 1 Escaño</span>
        <span style="color: #0000FF;">PP 1 Escaño</span>
        <span style="color: #006400;">CDS 1 Escaño</span> 
    </a>
    <br><br>
    IGUAL
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/canarias/santa-cruz-de-tenerife" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                    <span style="color: #0000FF;">PP 2 Escaños</span>
                    <span style="color: #01add7;">CCA 2 Escaños</span>
    
                </a>
                <br><br>
                IGUAL
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/canarias/santa-cruz-de-tenerife" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                    <span style="color: #0000FF;">PP 2 Escaños</span>
                    <span style="color: #01add7;">CCA 2 Escaños</span>
                    
</a>
<br><br>
IGUAL
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/canarias/santa-cruz-de-tenerife" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 3 Escaños</span>
                    <span style="color: #01add7;">CCA 2 Escaños</span>
                    <span style="color: #FF0000;">PSOE-PROGR 2 Escaños</span> 
        
</a>
<br><br>
IGUAL
<br><br>
2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/canarias/santa-cruz-de-tenerife" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #01add7;">CCA 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span>
    
    
    
</a>
<br><br>
IGUAL
<br><br>
2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/canarias/santa-cruz-de-tenerife" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #01add7;">CCA-PNC 2 Escaños</span>

    
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/05/38.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #01add7;">CCA-NC-PNC 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/05/38.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF0000;">PSOE-NC 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #01add7;">CCA-PNC 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>


</a>
<br><br>
IGUAL
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/05/38.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #01add7;">CCA-PNC 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    
</a>
<br><br>
IGUAL
<br><br>
2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/05/38.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #01add7;">CCA-PNC 2 Escaños</span>
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>  
    

</a>
<br><br>
IGUAL
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/05/38.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #01add7;">CCA-NC-PNC 1 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span> 
    <span style="color: #008000;">VOX 1 Escaño</span> 

</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/05/38/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #01add7;">CCA 1 Escaño</span>
</a>
<br><br>
IGUAL
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
            <h1 style="color: black;">Baleares <span class="escaños">8 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/illes-balears#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #FFA500;">UCD 5 Escaños</span>
        <span style="color: #FF0000;">PSOE 2 Escaños</span>
        <span style="color: #ADD8E6;">AP 1 Escaño</span> 
    </a>
    <br><br>
    UCD las gana y sumando a AP triplican en escaños al PSOE
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/illes-balears#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 5 Escaños</span>
        <span style="color: #FF0000;">PSOE 3 Escaños</span>

    </a>
    <br><br>
    UCD las gana y saca dos escaños de ventaja al PSOE
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/illes-balears#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 4 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 3 Escaños</span>
        <span style="color: #FFA500;">UCD 1 Escaño</span>
    </a>
    <br><br>
    El PSOE las gana empatando en escaños a la suma de AP-PDP y UCD
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/illes-balears#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 4 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PL 3 Escaños</span>
        <span style="color: #006400;">CDS 1 Escaño</span> 
    </a>
    <br><br>
    El PSOE las gana empatando en escaños a la suma de AP-PDP-PL y CDS
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/illes-balears#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #0000FF;">PP 4 Escaños</span> 
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #006400;">CDS 1 Escaño</span>
    </a>
    <br><br>
    El PP las gana y sumando a CDS sacan dos escaños de ventaja al PSOE
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/illes-balears#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 5 Escaños</span>
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
    
                </a>
                <br><br>
                El PP las gana sacando dos escaños de ventaja al PSOE            
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/illes-balears#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 5 Escaños</span>
                    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
                    
</a>
<br><br>
El PP las gana sacando dos escaños de ventaja al PSOE
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/illes-balears#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 5 Escaños</span>
                    <span style="color: #FF0000;">PSOE-PROGR 3 Escaños</span> 
        
</a>
<br><br>
El PP las gana sacando dos escaños de ventaja al PSOE
<br><br>
2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/illes-balears#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #0000FF;">PP 4 Escaños</span>
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    
    
    
</a>
<br><br>
IGUAL
<br><br>
2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/illes-balears#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 4 Escaños</span>

    
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/04/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/04/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>


</a>
<br><br>
IGUAL
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/04/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    
</a>
<br><br>
IGUAL
<br><br>
2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/04/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #800080;">PODEMOS-EUIB 2 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #008000;">VOX 1 Escaño</span> 

</a>
<br><br>
IGUAL
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/04/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #800080;">PODEMOS-IU 2 Escaños</span> 
    <span style="color: #008000;">VOX 2 Escaños</span> 

</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/04/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #FF69B4;">SUMAR 1 Escaño</span>  
    <span style="color: #008000;">VOX 1 Escaño</span> 
</a>
<br><br>
IGUAL
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
            <h1 style="color: black;">Vizcaya <span class="escaños">8 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/pais-vasco/bizkaia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #298242;">PNV 3 Escaños</span>
        <span style="color: #FF0000;">PSE-PSOE 3 EscañoS</span>
        <span style="color: #FFA500;">UCD 2 Escaños</span>
        
    </a>
    <br><br>
    El PNV las gana y sumando al PSE-SPOE triplican en escaños a UCD
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/pais-vasco/bizkaia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #298242;">PNV 3 Escaños</span>
        <span style="color: #FF0000;">PSE-PSOE 2 Escaños</span>
        <span style="color: #FFA500;">UCD 2 Escaños</span>
        <span style="color: #01b59c;">HB 1 Escaño</span>

    </a>
    <br><br>
    El PNV las gana y sumando al PSE-PSOE y HB triplican en escaños a UCD
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/pais-vasco/bizkaia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #298242;">PNV 3 Escaños</span>
        <span style="color: #FF0000;">PSE-PSOE 3 Escaños</span>
        <span style="color: #01b59c;">HB 1 Escaño</span>
        <span style="color: #ADD8E6;">AP-PDP-PL 1 Escaño</span>
         
    
    </a>
    <br><br>
    El PNV las gana y sumando al PSE-PSOE y HB multiplican por siete en escaños a AP-PDP-PL
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/pais-vasco/bizkaia" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #298242;">PNV 3 Escaños</span>
        <span style="color: #FF0000;">PSE-PSOE 3 Escaños</span>
        <span style="color: #01b59c;">HB 1 Escaño</span>
        <span style="color: #ADD8E6;">AP-PDP-PL 1 Escaño</span>    
        
    </a>
    <br><br>
    El PNV las gana y sumando al PSE-PSOE y HB multiplican por siete en escaños a AP-PDP-PL
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/pais-vasco/bizkaia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #298242;">PNV 3 Escaños</span>
        <span style="color: #FF0000;">PSE-PSOE 2 Escaños</span>
        <span style="color: #01b59c;">HB 1 Escaño</span>
        <span style="color: #0000FF;">PP 1 Escaño</span>
        <span style="color: #DC143C ;">EE 1 Escaño</span>
        
    </a>
    <br><br>
    El PNV las gana y sumando al PSE-PSOE, HB y EE multiplican por siete en escaños al PP
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/pais-vasco/bizkaia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #298242;">PNV 3 Escaños</span>
        <span style="color: #FF0000;">PSE-PSOE 3 Escaños</span>
        <span style="color: #0000FF;">PP 1 Escaño</span>
        <span style="color: #01b59c;">HB 1 Escaño</span>
        
                </a>
                <br><br>
                El PNV las gana y sumando al PSE-PSOE y HB multiplican por siete en escaños al PP
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/pais-vasco/bizkaia" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #298242;">PNV 3 Escaños</span>
        <span style="color: #FF0000;">PSE-PSOE 2 Escaños</span>
        <span style="color: #0000FF;">PP 1 Escaño</span>
        <span style="color: #01b59c;">HB 1 Escaño</span>
        <span style="color: #d25644;">IU-EB 1 Escaño</span>

</a>
<br><br>
El PNV las gana y sumando al PSE-PSOE, HB e IU-EB multiplican por siete en escaños al PP
<br><br>
2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/pais-vasco/bizkaia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #298242;">PNV 3 Escaños</span>
                    <span style="color: #0000FF;">PP 3 Escaños</span>
                    <span style="color: #FF0000;">PSE-PSOE 2 Escaños</span>
</a>
<br><br>
El PNV las gana y sumando al PSE-PSOE sacan dos escaños de ventaja al PP
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/pais-vasco/bizkaia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #298242;">PNV 4 Escaños</span>
                    <span style="color: #FF0000;">PSE-PSOE 2 Escaños</span>
                    <span style="color: #0000FF;">PP 2 Escaños</span>          
    
</a>
<br><br>
El PNV las gana y sumando al PSE-PSOE triplican en escaños al PP
<br><br>
2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/pais-vasco/bizkaia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSE-PSOE 4 Escaños</span>
                    <span style="color: #298242;">PNV 3 Escaños</span>
                    <span style="color: #0000FF;">PP 1 Escaño</span>          
    
    
    
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/14/48.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #298242;">PNV 3 Escaños</span>
        <span style="color: #FF0000;">PSE-PSOE 2 Escaños</span>
        <span style="color: #01b59c;">AMAIUR 2 Escaños</span>
        <span style="color: #0000FF;">PP 1 Escaño</span>
        
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/14/48.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #298242;">PNV 3 Escaños</span>
        <span style="color: #800080;">PODEMOS 2 Escaños</span>
        <span style="color: #FF0000;">PSE-PSOE 1 Escaño</span>
        <span style="color: #01b59c;">EHBILDU 1 Escaño</span>
        <span style="color: #0000FF;">PP 1 Escaño</span>

</a>
<br><br>
IGUAL
<br><br>
2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/14/48.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #800080;">PODEMOS 3 Escaños</span>
        <span style="color: #298242;">PNV 2 Escaños</span>
        <span style="color: #FF0000;">PSE-PSOE 1 Escaño</span>
        <span style="color: #0000FF;">PP 1 Escaño</span>
        <span style="color: #01b59c;">EHBILDU 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/14/48.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #298242;">PNV 3 Escaños</span>
        <span style="color: #FF0000;">PSE-PSOE 2 Escaños</span>
        <span style="color: #800080;">PODEMOS 2 Escaños</span>
        <span style="color: #01b59c;">EHBILDU 1 Escaño</span>
        

</a>
<br><br>
IGUAL
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/14/48.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #298242;">PNV 3 Escaños</span>
        <span style="color: #FF0000;">PSE-PSOE 2 Escaños</span>
        <span style="color: #800080;">PODEMOS 1 Escaño</span>
        <span style="color: #01b59c;">EHBILDU 1 Escaño</span>
        <span style="color: #0000FF;">PP 1 Escaño</span>

</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/14/48/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #298242;">PNV 2 Escaños</span>
        <span style="color: #FF0000;">PSE-PSOE 2 Escaños</span>
        <span style="color: #01b59c;">EHBILDU 2 Escaños</span>
        <span style="color: #0000FF;">PP 1 Escaño</span>
        <span style="color: #FF69B4;">SUMAR 1 Escaño</span>  
    
</a>
<br><br>
IGUAL
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
            <h1 style="color: black;">Las Palmas <span class="escaños">8 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/canarias/las-palmas" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #FFA500;">UCD 7 Escaños</span>
        <span style="color: #FF0000;">PSOE 1 Escaño</span>
    </a>
    <br><br>
    UCD las gana multiplicando por siete en escaños al PSOE
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/canarias/las-palmas#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 6 Escaños</span>
        <span style="color: #FF0000;">PSOE 1 Escaño</span>
        <span style="color: #FF0D00;">C-UPC 1 Escaño</span>


    </a>
    <br><br>
    UCD las gana triplicando en escaños a la suma de PSOE y C-UPC
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/canarias/las-palmas#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 4 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 3 Escaños</span> 
        <span style="color: #FFA500;">UCD 1 Escaño</span> 
    </a>
    <br><br>
    El PSOE las gana empatando en escaños a la suma de AP-PDP y UCD
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/canarias/las-palmas#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PL 3 Escaños</span>
        <span style="color: #006400;">CDS 2 Escaños</span> 
    </a>
    <br><br>
    El PSOE las gana, pero la suma de AP-PDP-PL y CDS le saca dos escaños de ventaja al PSOE
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/canarias/las-palmas#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #006400;">CDS 2 Escaños</span> 
        <span style="color: #0000FF;">PP 2 Escaños</span>
        <span style="color: #d25644;">IU 1 Escaño</span>
    </a>
    <br><br>
    El PSOE las gana y sumando a IU empatan en escaños a la suma de CDS y PP   
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/canarias/las-palmas#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #0000FF;">PP 4 Escaños</span>
                    <span style="color: #FF0000;">PSOE 2 Escaños</span>
                    <span style="color: #01add7;">CCA 2 Escaños</span>
    
                </a>
                <br><br>
                El PP las gana y sumando a CCA triplican en escaños al PSOE
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/canarias/las-palmas#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 4 Escaños</span>
                    <span style="color: #FF0000;">PSOE 2 Escaños</span>
                    <span style="color: #01add7;">CCA 2 Escaños</span>
                    
</a>
<br><br>
El PP las gana y sumando a CCA triplican en escaños al PSOE
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/canarias/las-palmas#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 5 Escaños</span>
                    <span style="color: #01add7;">CCA 2 Escaños</span>
                    <span style="color: #FF0000;">PSOE-PROGR 1 Escaño</span> 
        
</a>
<br><br>
El PP las gana y sumando a CCA multiplican por siete en escaños al PSOE-PROGR
<br><br>
2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/canarias/las-palmas#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #0000FF;">PP 4 Escaños</span>
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #01add7;">CCA 1 Escaño</span>
    
    
    
</a>
<br><br>
IGUAL
<br><br>
2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/canarias/las-palmas#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 4 Escaños</span>

    
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/05/35.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #01add7;">CCA-NC-PNC 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/05/35.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #FF0000;">PSOE-NC 2 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>


</a>
<br><br>
IGUAL
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/05/35.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF0000;">PSOE-NC 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    
</a>
<br><br>
IGUAL
<br><br>
2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/05/35.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>  
    

</a>
<br><br>
IGUAL
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/05/35.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span> 
    <span style="color: #008000;">VOX 1 Escaño</span> 
    <span style="color: #01add7;">CCA-NC-PNC 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/05/35/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span> 
    <span style="color: #FF69B4;">SUMAR 1 Escaño</span> 
</a>
<br><br>
IGUAL
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
            <h1 style="color: black;">A Coruña <span class="escaños">8 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/galicia/a-coruna" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 5 Escaños</span> 
        <span style="color: #FF0000;">PSOE 2 Escaños</span>
        <span style="color: #ADD8E6;">AP 1 Escaño</span>
        
    </a>
    <br><br>
    UCD las gana y sumando a AP triplican en escaños al PSOE
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/galicia/a-coruna" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 5 Escaños</span> 
        <span style="color: #FF0000;">PSOE 2 Escaños</span>
        <span style="color: #ADD8E6;">AP 1 Escaño</span>

    </a>
    <br><br>
    UCD las gana y sumando a AP triplican en escaños al PSOE
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/galicia/a-coruna" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 4 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 3 Escaños</span> 
        <span style="color: #FFA500;">UCD 1 Escaños</span>
          
    </a>
    <br><br>
    El PSOE las gana empatando en escaños a la suma de AP-PDP y UCD
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/galicia/a-coruna" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 4 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PL-C 3 Escaños</span> 
        <span style="color: #006400;">CDS 1 Escaño</span>
    </a>
    <br><br>
    El PSOE las gana empatando en escaños a la suma de AP-PDP-PL-C y CDS
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/galicia/a-coruna" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #FF0000;">PSOE 4 Escaños</span>
        <span style="color: #0000FF;">PP 3 Escaños</span>
        <span style="color: #006400;">CDS 1 Escaño</span>
        
    </a>
    <br><br>
    El PSOE las gana empatando en escaños a la suma de PP y CDS
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/galicia/a-coruna" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 4 Escaños</span>
                    <span style="color: #FF0000;">PSOE 4 Escaños</span> 
    
                </a>
                <br><br>
                El PP las gana empatando en escaños con el PSOE
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/galicia/a-coruna" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #0000FF;">PP 4 Escaños</span>
                    <span style="color: #FF0000;">PSOE 3 Escaños</span>
                    <span style="color: #74b1e0;">BNG 1 Escaño</span>
</a>
<br><br>
El PP las gana empatando en escaños a la suma de PSOE y BNG
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/galicia/a-coruna" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span>
                    <span style="color: #FF0000;">PSOE 2 Escaños</span>
                    <span style="color: #74b1e0;">BNG 1 Escaño</span>
</a>
<br><br>
El PP las gana sacando dos escaños de ventaja a la suma de PSOE y BNG
<br><br>
2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/galicia/a-coruna" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #74b1e0;">BNG 1 Escaño</span>
</a>
<br><br>
El PP las gana empatando en escaños a la suma de PSOE y BNG
<br><br>
2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/galicia/a-coruna" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #74b1e0;">BNG 1 Escaño</span>
    
    
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/11/15.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #74b1e0;">BNG 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/11/15.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span> 


</a>
<br><br>
IGUAL
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/11/15.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    
</a>
<br><br>
IGUAL
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/11/15.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span> 

</a>
<br><br>
IGUAL
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/11/15.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #74b1e0;">BNG 1 Escaño</span>

</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/11/15/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span> 
    <span style="color: #FF69B4;">SUMAR 1 Escaño</span>
    <span style="color: #74b1e0;">BNG 1 Escaño</span>
    
</a>
<br><br>
IGUAL
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
            <h1 style="color: black;">Cádiz <span class="escaños">9 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/andalucia/cadiz" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 4 Escaños</span>
        <span style="color: #FFA500;">UCD 3 Escaños</span> 
        <span style="color: #FF0D00;">PCE 1 Escaño</span> 
        <span style="color: #FF6767;">PSP-US 1 Escaño</span>
        
    </a>
    <br><br>
    El PSOE las gana y sumando al PCE y PSP-US doblan en escaños a UCD
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/andalucia/cadiz" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 3 Escaños</span> 
        <span style="color: #FFA500;">UCD 3 Escaños</span>
        <span style="color: #15AA35;">PSA-PA 2 Escaños</span>
        <span style="color: #FF0D00;">PCE 1 Escaño</span> 

    </a>
    <br><br>
    El PSOE las gana y sumando a PSA-PA y PCE doblan en escaños a UCD
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/andalucia/cadiz" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 7 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 2 Escaños</span> 
          
    </a>
    <br><br>
    El PSOE las gana sacando cinco escaños de ventaja a AP-PDP
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/andalucia/cadiz" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 7 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PL 2 Escaños</span>
        
    </a>
    <br><br>
    IGUAL
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/andalucia/cadiz" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 6 Escaños</span> 
        <span style="color: #0000FF;">PP 1 Escaño</span>
        <span style="color: #15AA35;">PA 1 Escaño</span>
        <span style="color: #d25644;">IU-CA 1 Escaño</span>
        
    </a>
    <br><br
    IGUAL
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/andalucia/cadiz" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 5 Escaños</span> 
                    <span style="color: #0000FF;">PP 3 Escaños</span>
                    <span style="color: #d25644;">IU-CA 1 Escaño</span>
    
                </a>
                <br><br>
                IGUAL
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/andalucia/cadiz" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 4 Escaños</span> 
                    <span style="color: #0000FF;">PP 4 Escaños</span>
        <span style="color: #d25644;">IU-CA 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/andalucia/cadiz" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #0000FF;">PP 4 Escaños</span>
        <span style="color: #FF0000;">PSOE-PROGR 4 Escaños</span>
        <span style="color: #15AA35;">PA 1 Escaño</span>
        
</a>
<br><br>
IGUAL
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/andalucia/cadiz" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 6 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    
    
</a>
<br><br>
IGUAL
<br><br>
2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/andalucia/cadiz" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #0000FF;">PP 4 Escaños</span> 

    
</a>
<br><br>
IGUAL
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/01/11.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
El PP las gana sacando un escaño de ventaja a la suma de PSOE e IU
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/01/11.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>


</a>
<br><br>
IGUAL
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/01/11.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    
</a>
<br><br>
IGUAL
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/01/11.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #FF7F00;">CS 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>  
    <span style="color: #0000FF;">PP 1 Escaño</span>
    <span style="color: #008000;">VOX 1 Escaño</span>

</a>
<br><br>
IGUAL
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/01/11.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>

</a>
<br><br>
IGUAL
<br><br>
2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/01/11/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span>
    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
    <span style="color: #008000;">VOX 1 Escaño</span>
    <span style="color: #FF69B4;">SUMAR 1 Escaño</span>  
    
</a>
<br><br>
IGUAL
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
            <h1 style="color: black;">Murcia <span class="escaños">10 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/region-de-murcia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 5 Escaños</span>
        <span style="color: #FF0000;">PSOE 5 Escaños</span> 
        
    </a>
    <br><br>
    UCD las gana empatando en escaños con el PSOE
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/region-de-murcia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 5 Escaños</span> 
        <span style="color: #FFA500;">UCD 4 Escaños</span>
        <span style="color: #FF0D00;">PCE 1 Escaño</span> 
    </a>
    <br><br>
    El PSOE las gana y sumando al PCE sacan dos escaños de ventaja a UCD
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/region-de-murcia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 6 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 4 Escaños</span> 
          
    </a>
    <br><br>
    El PSOE las gana sacando dos escaños de ventaja a AP-PDP
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/region-de-murcia" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 5 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 4 Escaños</span> 
        <span style="color: #006400;">CDS 1 Escaño</span>
    </a>
    <br><br>
    El PSOE las gana empatando en escaños a la suma de AP-PDP y CDS
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/region-de-murcia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 5 Escaños</span> 
        <span style="color: #0000FF;">PP 3 Escaños</span>
        <span style="color: #006400;">CDS 1 Escaño</span>
        <span style="color: #d25644;">IU 1 Escaño</span>
    </a>
    <br><br>
    El PSOE las gana y sumando a IU sacan dos escaños de ventaja a la suma de PP y CDS
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/region-de-murcia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 5 Escaños</span>
        <span style="color: #FF0000;">PSOE 4 Escaños</span>
        <span style="color: #d25644;">IU 1 Escaño</span>
                    
                
                </a>
                <br><br>
                El PP las gana empatando en escaños a la suma de PSOE e IU
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/region-de-murcia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 5 Escaños</span>
        <span style="color: #FF0000;">PSOE 4 Escaños</span>
        <span style="color: #d25644;">IU 1 Escaño</span>
</a>
<br><br>
El PP las gana empatando en escaños a la suma de PSOE e IU
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/region-de-murcia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 7 Escaños</span>
        <span style="color: #FF0000;">PSOE-PROGR 3 Escaños</span>
</a>
<br><br>
El PP las gana sacando cuatro escaños de ventaja a PSOE-PROGR
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/region-de-murcia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 6 Escaños</span> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    
</a>
<br><br>
El PP las gana sacando dos escaños de ventaja al PSOE
<br><br>
2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/region-de-murcia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 7 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    
    
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/15/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 8 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/15/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaño</span>
    <span style="color: #FF7F00;">CS 2 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>


</a>
<br><br>
IGUAL
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/15/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #FF0000;">PSOE 2 Escaño</span>
    <span style="color: #FF7F00;">CS 2 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/15/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF7F00;">CS 2 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>

</a>
<br><br>
IGUAL
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/15/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #008000;">VOX 3 Escaños</span>  
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/15/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span>
    <span style="color: #FF0000;">PSOE 3 Escaño</span> 
    <span style="color: #008000;">VOX 2 Escaños</span>
    <span style="color: #FF69B4;">SUMAR 1 Escaño</span> 
    
</a>
<br><br>
IGUAL
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
            <h1 style="color: black;">Málaga <span class="escaños">11 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/andalucia/malaga" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 6 Escaños</span>
        <span style="color: #FFA500;">UCD 3 Escaños</span> 
        <span style="color: #FF0D00;">PCE 1 Escaño</span> 
        <span style="color: #ADD8E6;">AP 1 Escaño</span> 
    </a>
    <br><br>
    El PSOE las gana y sumando al PCE sacan tres escaños de ventaja a la suma de UCD y AP
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/andalucia/malaga" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 5 Escaños</span> 
        <span style="color: #FFA500;">UCD 4 Escaños</span>
        <span style="color: #FF0D00;">PCE 1 Escaño</span> 
        <span style="color: #15AA35;">PSA-PA 1 Escaño</span>

    </a>
    <br><br>
    El PSOE las gana y sumando al PCE y a PSA-PA sacan tres escaños de ventaja a UCD
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/andalucia/malaga" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 8 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 3 Escaños</span> 
          
    </a>
    <br><br>
    El PSOE las gana sacando cinco escaños de ventaja a AP-PDP
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/andalucia/malaga" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 7 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PL 3 Escaños</span>
        <span style="color: #d25644;">IU 1 Escaño</span>
        
    </a>
    <br><br>
    El PSOE las gana y sumando a IU sacan cinco escaños de ventaja a AP-PDP-PL
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/andalucia/malaga" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 7 Escaños</span> 
        <span style="color: #0000FF;">PP 2 Escaños</span>
        <span style="color: #d25644;">IU-CA 2 Escaños</span>
        
    </a>
    <br><br
    El PSOE las gana y sumando a IU-CA sacan siete escaños de ventaja al PP
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/andalucia/malaga" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 6 Escaños</span> 
                    <span style="color: #0000FF;">PP 4 Escaños</span>
                    <span style="color: #d25644;">IU-CA 1 Escaño</span>
    
                </a>
                <br><br>
                El PSOE las gana y sumando a IU-CA sacan tres escaños de ventaja al PP
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/andalucia/malaga" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 5 Escaños</span> 
                    <span style="color: #0000FF;">PP 5 Escaños</span>
        <span style="color: #d25644;">IU-CA 1 Escaño</span>
</a>
<br><br>
El PSOE las gana y sumando a IU-CA sacan un escaño de ventaja al PP
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/andalucia/malaga" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #0000FF;">PP 5 Escaños</span>
        <span style="color: #FF0000;">PSOE-PROGR 5 Escaños</span>
        <span style="color: #d25644;">IU-CA 1 Escaño</span>
        
</a>
<br><br>
El PP las gana, pero la suma de PSOE-PROGR e IU-CA le saca un escaño de ventaja
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/andalucia/malaga" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 6 Escaños</span>
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    
    
</a>
<br><br>
El PSOE las gana sacando un escaño de ventaja al PP 
<br><br>
2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/andalucia/malaga" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 6 Escaños</span>
    <span style="color: #0000FF;">PP 5 Escaños</span> 

    
</a>
<br><br>
El PSOE las gana sacando un escaño de ventaja al PP 
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/01/29.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 6 Escaños</span> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #d25644;">IU-CA 1 Escaño</span>
</a>
<br><br>
El PP las gana sacando un escaño de ventaja a la suma de PSOE e IU-CA
<br><br>
2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/01/29.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span>
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #FF7F00;">CS 2 Escaños</span>


</a>
<br><br>
IGUAL
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/01/29.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span>
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #FF7F00;">CS 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/01/29.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #FF7F00;">CS 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>  
    <span style="color: #008000;">VOX 1 Escaño</span>

</a>
<br><br>
IGUAL
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/01/29.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #008000;">VOX 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>

</a>
<br><br>
IGUAL
<br><br>
2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/01/29/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span>
    <span style="color: #FF0000;">PSOE 3 Escaños</span> 
    <span style="color: #008000;">VOX 2 Escaños</span>
    <span style="color: #FF69B4;">SUMAR 1 Escaño</span>  
    
</a>
<br><br>
IGUAL
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
            <h1 style="color: black;">Alicante <span class="escaños">12 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/comunidad-valenciana/alicante" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 5 Escaños</span> 
        <span style="color: #FFA500;">UCD 5 Escaños</span>
        <span style="color: #FF0D00;">PCE 1 Escaño</span> 
        <span style="color: #ADD8E6;">AP 1 Escaño</span> 
    </a>
    <br><br>
    El PSOE las gana y sumando al PCE empatan en escaños a la suma de UCD y AP
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/comunidad-valenciana/alicante" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 6 Escaños</span> 
        <span style="color: #FFA500;">UCD 5 Escaños</span>
        <span style="color: #FF0D00;">PCE 1 Escaño</span> 

    </a>
    <br><br>
    El PSOE las gana y sumando al PCE sacan dos escaños de ventaja a UCD
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/comunidad-valenciana/alicante" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 7 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-UV 4 Escaños</span> 
        <span style="color: #FFA500;">UCD 1 Escaño</span>
    </a>
    <br><br>
    El PSOE las gana sacando dos escaños de ventaja a la suma de AP-PDP-UV y UCD
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/comunidad-valenciana/alicante" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 7 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PL 4 Escaños</span> 
        <span style="color: #006400;">CDS 1 Escaño</span>
        
    </a>
    <br><br>
    El PSOE las gana sacando dos escaños de ventaja a la suma de AP-PDP-PL y CDS
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/comunidad-valenciana/alicante" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 6 Escaños</span> 
        <span style="color: #0000FF;">PP 4 Escaños</span>
        <span style="color: #006400;">CDS 1 Escaño</span>
        <span style="color: #d25644;">IU 1 Escaño</span>
        
    </a>
    <br><br>
    El PSOE las gana y sumando a IU sacan dos escaños de ventaja a la suma de PP y CDS
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/comunidad-valenciana/alicante" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 6 Escaños</span>
        <span style="color: #FF0000;">PSOE 5 Escaños</span>
        <span style="color: #d25644;">EU-PV 1 Escaño</span>
                    
                
                </a>
                <br><br>
                El PP las gana empatando en escaños a la suma de PSOE y EU-PV
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/comunidad-valenciana/alicante" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 6 Escaños</span>
        <span style="color: #FF0000;">PSOE 5 Escaños</span>
        <span style="color: #d25644;">EUPV 1 Escaño</span>
</a>
<br><br>
El PP las gana empatando en escaños a la suma de PSOE y EUPV
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/comunidad-valenciana/alicante" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 7 Escaños</span>
        <span style="color: #FF0000;">PSOE-PROGR 5 Escaños</span>
</a>
<br><br>
El PP las gana sacando dos escaños de ventaja al PSOE-PROGR
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/comunidad-valenciana/alicante" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 6 Escaños</span> 
    <span style="color: #FF0000;">PSOE 6 Escaños</span>
    
</a>
<br><br>
El PP las gana empatando en escaños con el PSOE
<br><br>
2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/comunidad-valenciana/alicante" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 7 Escaños</span> 
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    
    
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/17/03.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 8 Escaños</span> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/17/03.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #800080;">PODEMOS-COMPROMIS 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #FF7F00;">CS 2 Escaños</span>


</a>
<br><br>
IGUAL
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/17/03.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #800080;">PODEMOS-COMPROMIS-EUV 3 Escaños</span>
    <span style="color: #FF0000;">PSOE 2 Escaños</span>
    <span style="color: #FF7F00;">CS 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/17/03.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF7F00;">CS 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span>

</a>
<br><br>
IGUAL
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/17/03.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span> 
    <span style="color: #008000;">VOX 3 Escaños</span> 
    <span style="color: #800080;">PODEMOS 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/15/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span>
    <span style="color: #FF0000;">PSOE 4 Escaño</span> 
    <span style="color: #008000;">VOX 2 Escaños</span>
    <span style="color: #FF69B4;">SUMAR 1 Escaño</span> 
    
</a>
<br><br>
IGUAL
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
    IGUAL
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/andalucia/sevilla" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 4 Escaños</span> 
        <span style="color: #FFA500;">UCD 4 Escaños</span>
        <span style="color: #FF0D00;">PCE 2 Escaños</span> 
        <span style="color: #15AA35;">PSA-PA 2 Escaños</span>

    </a>
    IGUAL
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/andalucia/sevilla" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSA-PSOE 8 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 3 Escaños</span> 
        <span style="color: #FF0D00;">PCA-PCE 1 Escaño</span> 
          
    </a>
    <br><br>
    IGUAL
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/andalucia/sevilla" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 8 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PL 3 Escaños</span>
        <span style="color: #d25644;">IU 1 Escaño</span>
        
    </a>
    <br><br>
    IGUAL
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/andalucia/sevilla" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 8 Escaños</span> 
        <span style="color: #0000FF;">PP 2 Escaños</span>
        <span style="color: #d25644;">IU-CA 1 Escaño</span>
        <span style="color: #15AA35;">PA 1 Escaño</span>
        
    </a>
    <br><br
    IGUAL
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/andalucia/sevilla" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 8 Escaños</span> 
                    <span style="color: #0000FF;">PP 3 Escaños</span>
                    <span style="color: #d25644;">IU-CA 1 Escaño</span>
    
                </a>
                <br><br>
                IGUAL
                <br><br>
                <h1 style="color: black;"><span class="escaños">Pasa a 13 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/andalucia/sevilla" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 7 Escaños</span> 
                    <span style="color: #0000FF;">PP 4 Escaños</span>
        <span style="color: #d25644;">IU-CA 1 Escaños</span>
</a>
<br><br>
El PSOE las gana y sumando a IU-CA doblan en escaños al PP
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/andalucia/sevilla" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE-PROGR 7 Escaños</span>
        <span style="color: #0000FF;">PP 4 Escaños</span>
        <span style="color: #d25644;">IU-CA 1 Escaño</span>
        
</a>
<br><br>
PSOE-PROGR las gana y sumando a IU-CA doblan en escaños al PP
<br><br>
<h1 style="color: black;"><span class="escaños">Pasa a 12 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/andalucia/sevilla" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 8 Escaños</span>
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    
    
</a>
<br><br>
IGUAL
<br><br>
2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/andalucia/sevilla" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 8 Escaños</span>
    <span style="color: #0000FF;">PP 4 Escaños</span> 

    
</a>
<br><br>
IGUAL
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/01/41.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 6 Escaños</span>
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #d25644;">IU-CA 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>
2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/01/41.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #FF7F00;">CS 2 Escaños</span>


</a>
<br><br>
IGUAL
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/01/41.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 4 Escaños</span>
    <span style="color: #800080;">PODEMOS 3 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br0>
IGUAL
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/01/41.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #FF7F00;">CS 2 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #008000;">VOX 1 Escaño</span>

</a>
<br><br>
IGUAL
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/01/41.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span> 
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>

</a>
<br><br>
IGUAL
<br><br>
2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/01/41/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 5 Escaños</span> 
    <span style="color: #0000FF;">PP 4 Escaños</span>
    <span style="color: #FF69B4;">SUMAR 2 Escaños</span>  
    <span style="color: #008000;">VOX 1 Escaño</span>

    
</a>
<br><br>
IGUAL
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
            <h1 style="color: black;">Valencia <span class="escaños">16 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/comunidad-valenciana/valencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 7 Escaños</span> 
        <span style="color: #FFA500;">UCD 6 Escaños</span>
        <span style="color: #FF0D00;">PCE 1 Escaño</span> 
        <span style="color: #ADD8E6;">AP 1 Escaño</span>
        <span style="color: #FF6767;">PSP-US 1 Escaño</span>
        
    </a>
    <br><br>
    El PSOE las gana y sumando al PCE y PSP-US sacan dos escaños de ventaja a la suma de UCD y AP
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/comunidad-valenciana/valencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 7 Escaños</span> 
        <span style="color: #FFA500;">UCD 7 Escaños</span>
        <span style="color: #FF0D00;">PCE 2 Escaños</span> 

    </a>
    <br><br>
    El PSOE las gana y sumando al PCE sacan dos escaños de ventaja a UCD
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/comunidad-valenciana/valencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 10 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-UV 5 Escaños</span> 
        <span style="color: #FF0D00;">PCE 1 Escaño</span> 
    </a>
    <br><br>
    El PSOE las gana y sumando al PCE sacan seis escaños de ventaja a AP-PDP-UV
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/comunidad-valenciana/valencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 9 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PL 5 Escaños</span> 
        <span style="color: #006400;">CDS 1 Escaño</span>
        <span style="color: #27345a;">UV 1 Escaño</span>
        
    </a>
    <br><br>
    IGUAL
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/comunidad-valenciana/valencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 8 Escaños</span> 
        <span style="color: #0000FF;">PP 4 Escaños</span>
        <span style="color: #27345a;">UV 2 Escaños</span>
        <span style="color: #d25644;">IU 1 Escaño</span>
        
    </a>
    <br><br>
    IGUAL
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/comunidad-valenciana/valencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 7 Escaños</span>
        <span style="color: #FF0000;">PSOE 6 Escaños</span>
        <span style="color: #d25644;">EU-PV 2 Escaños</span>
        <span style="color: #27345a;">UV 1 Escaño</span>
                    
                
                </a>
                <br><br>
                IGUAL
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/comunidad-valenciana/valencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 7 Escaños</span>
        <span style="color: #FF0000;">PSOE 6 Escaños</span>
        <span style="color: #d25644;">EU-PV 2 Escaños</span>
        <span style="color: #27345a;">UV 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/comunidad-valenciana/valencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 9 Escaños</span>
        <span style="color: #FF0000;">PSOE-PROGR 6 Escaños</span>
        <span style="color: #d25644;">EU-PV 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/comunidad-valenciana/valencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 8 Escaños</span> 
    <span style="color: #FF0000;">PSOE 7 Escaños</span>
    <span style="color: #d25644;">ENTESA 1 Escaño</span>
    
</a>
<br><br>
IGUAL
<br><br>
2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/comunidad-valenciana/valencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 9 Escaños</span> 
    <span style="color: #FF0000;">PSOE 7 Escaños</span>
    
    
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/17/46.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 9 Escaños</span> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #d25644;">EU-PV-EV 1 Escaño</span>
    <span style="color: #d64a26;">COMPROMIS 1 Escaño</span>
    <span style="color: #d7257d;">UPyD 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>
2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/17/46.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #800080;">PODEMOS-COMPROMIS 5 Escaños</span>
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #FF7F00;">CS 3 Escaños</span>


</a>
<br><br>
El PP las gana y sumando a CS empatan en escaños a la suma de PODEMOS-COMPROMIS y PSOE
<br><br>
2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/17/46.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 6 Escaños</span> 
    <span style="color: #800080;">PODEMOS-COMPROMIS-EUPV 5 Escaños</span>
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #FF7F00;">CS 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>
2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/17/46.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF7F00;">CS 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span>
    <span style="color: #d64a26;">COMPROMIS 1 Escaño</span>

</a>
<br><br>
El PSOE las gana y sumando a PODEMOS y COMPROMIS empatan en escaños a la suma de PP, CS y VOX
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/17/46.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #008000;">VOX 3 Escaños</span> 
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #d64a26;">MES-COMPROMIS 1 Escaño</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
</a>
<br><br>
El PSOE las gana y sumando a PODEMOS y COMPROMIS empatan en escaños a la suma de PP, VOX y CS
<br><br>
2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/17/46/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 6 Escaños</span>
    <span style="color: #FF0000;">PSOE 5 Escaños</span> 
    <span style="color: #FF69B4;">SUMAR 3 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span> 
    
</a>
<br><br>
IGUAL
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
            <h1 style="color: black;">Barcelona <span class="escaños">32 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/catalunya/barcelona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSC-PSOE 11 Escaño</span> 
        <span style="color: #CC0000;">PSUC-PCE 7 Escaños</span> 
        <span style="color: #FF5733;">PDPC 5 Escaños</span>
        <span style="color: #FFA500;">UCD 5 Escaños</span>
        <span style="color: #f8471b;">UDC-IDCC 2 Escaños</span>
        <span style="color: #f8af02;">EC-FED 1 Escaño</span> 
        <span style="color: #ADD8E6;">CC-AP 1 Escaño</span>
    </a>
    <br><br>
    El PSC-PSOE las gana y sumando a PSUC-PCE, PDPC, IDCC y FED sacan veinte escaños de ventaja a la suma de UCD y AP
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/catalunya/barcelona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSC-PSOE 11 Escaños</span>
        <span style="color: #CC0000;">PSUC-PCE 7 Escaños</span> 
        <span style="color: #FFA500;">CC-UCD 6 Escaños</span>
        <span style="color: #40E0D0;">CIU 6 Escaños</span> 
        <span style="color: #862634;">ERFN 1 Escaño</span>
        <span style="color: #006400;">CD 1 Escaño</span>
        
    </a>
    <br><br>
    El PSC-PSOE las gana y sumando a PSUC-PCE, CIU y ERFN sacan dieciocho escaños de ventaja a la suma de UCD y CD
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/catalunya/barcelona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSC-PSOE 18 Escaños</span>
        <span style="color: #40E0D0;">CIU 7 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 5 Escaños</span>
        <span style="color: #CC0000;">PSUC 1 Escaño</span>
        <span style="color: #c99f00;">ERC 1 Escaño</span>
    
    </a>
    <br><br>
    El PSC-PSOE las gana y sumando a CIU, PSUC y ERC sacan veintidos escaños de ventaja a AP-PDP
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/catalunya/barcelona" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #FF0000;">PSC-PSOE 16 Escaños</span>
        <span style="color: #40E0D0;">CIU 11 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PL 3 Escaños</span>
        <span style="color: #006400;">CDS 1 Escaño</span>
        <span style="color: #CC0000;">PSUC-ENE 1 Escaño</span>
    </a>
    <br><br>
    El PSC-PSOE las gana y sumando a CIU y PSUC-ENE sacan veinticuatro escaños de ventaja a la suma de AP-PDP-PL y CDS
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/catalunya/barcelona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSC-PSOE 14 Escaños</span>
        <span style="color: #40E0D0;">CIU 11 Escaños</span> 
        <span style="color: #0000FF;">PP 3 Escaños</span> 
        <span style="color: ##098f80;">IC 3 Escaños</span>
        <span style="color: #006400;">CDS 1 Escaño</span>
        
    </a>
    <br><br>
    IGUAL
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/catalunya/barcelona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSC-PSOE 12 Escaños</span>
        <span style="color: #40E0D0;">CIU 10 Escaños</span> 
        <span style="color: #0000FF;">PP 6 Escaños</span> 
        <span style="color: ##098f80;">IC 3 Escaños</span>
        <span style="color: #c99f00;">ERC 1 Escaño</span>
                
                </a>
                <br><br>
                IGUAL
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/catalunya/barcelona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSC-PSOE 13 Escaños</span>
        <span style="color: #40E0D0;">CIU 9 Escaños</span> 
        <span style="color: #0000FF;">PP 6 Escaños</span> 
        <span style="color: ##098f80;">IC-EV 3 Escaños</span>
        <span style="color: #c99f00;">ERC 1 Escaño</span>
</a>
<br><br>
El PSC-PSOE las gana y sumando a CIU, IC-EV y ERC sacan veinte escaños de ventaja al PP
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/catalunya/barcelona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSC-PSOE 13 Escaños</span>
        <span style="color: #40E0D0;">CIU 9 Escaños</span> 
        <span style="color: #0000FF;">PP 8 Escaños</span> 
        <span style="color: #c99f00;">ERC 1 Escaño</span>
        <span style="color: ##098f80;">IC-EV 1 Escaño</span>
</a>
<br><br>
El PSC-PSOE las gana y sumando a CIU, ERC e IC-EV sacan dieciseis escaños de ventaja al PP
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/catalunya/barcelona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSC-PSOE 14 Escaños</span>
                    <span style="color: #40E0D0;">CIU 6 Escaños</span> 
                    <span style="color: #0000FF;">PP 5 Escaños</span> 
                    <span style="color: #c99f00;">ERC 5 Escaños</span>
                    <span style="color: ##098f80;">IC-EV 2 Escaños</span>
    
</a>
<br><br>
El PSC-PSOE las gana y sumando a CIU, ERC e IC-EV sacan veintidos escaños de ventaja al PP
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/catalunya/barcelona" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #FF0000;">PSC-PSOE 16 Escaños</span>
                    <span style="color: #40E0D0;">CIU 7 Escaños</span>
                    <span style="color: #0000FF;">PP 6 Escaños</span>
                    <span style="color: #c99f00;">ERC 2 Escaños</span>
                    <span style="color: ##098f80;">IC-EV 1 Escaño</span>
    
    
</a>
<br><br>
El PSC-PSOE las gana y sumando a CIU, ERC e IC-EV sacan veinte escaños de ventaja al PP
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/09/08.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSC-PSOE 10 Escaños</span>
        <span style="color: #40E0D0;">CIU 10 Escaños</span> 
        <span style="color: #0000FF;">PP 7 Escaños</span>
        <span style="color: ##098f80;">IC-EV 3 Escaños</span>
        <span style="color: #c99f00;">ERC 2 Escaños</span>
</a>
<br><br>
El PSC-PSOE las gana y sumando a CIU, IC-EV y ERC sacan dieciocho escaños de ventaja al PP
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/09/08.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #800080;">PODEMOS 9 Escaños</span> 
    <span style="color: #FF0000;">PSC-PSOE 6 Escaños</span>
    <span style="color: #c99f00;">ERC CATSÍ 5 Escaños</span>                
    <span style="color: #FF7F00;">CS 4 Escaños</span>
    <span style="color: #40E0D0;">DL 4 Escaños</span> 
    <span style="color: #0000FF;">PP 4 Escaños</span>
                    
                    
                     
</a>
<br><br>
PODEMOS las gana y sumando al PSC-PSOE, ERC CATSÍ y DL sacan dieciseis escaños de ventaja a la suma de CS y PP
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/09/08.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #800080;">PODEMOS 9 Escaños</span> 
    <span style="color: #FF0000;">PSC-PSOE 6 Escaños</span>
    <span style="color: #c99f00;">ERC CATSÍ 5 Escaños</span> 
    <span style="color: #0000FF;">PP 4 Escaños</span>              
    <span style="color: #40E0D0;">CDC 4 Escaños</span>
    <span style="color: #FF7F00;">CS 4 Escaños</span>

</a>
<br><br>
PODEMOS las gana y sumando al PSC-PSOE, ERC CATSÍ y CDC sacan dieciseis escaños de ventaja a la suma de PP y CS
<br><br>
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
IGUAL
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
IGUAL
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
IGUAL
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
            <h1 style="color: black;">Madrid <span class="escaños">37 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/comunidad-de-madrid" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 13 Escaños</span>
        <span style="color: #FF0000;">PSOE 13 Escaños</span> 
        <span style="color: #FF0D00;">PCE 4 Escaños</span> 
        <span style="color: #ADD8E6;">AP 4 Escaños</span>
        <span style="color: #FF6767;">PSP-US 3 Escaños</span>
        
    </a>
    <br><br>
    UCD las gana, pero la suma de PSOE, PCE y PSP le saca tres escaños de ventaja a la suma de UCD y AP
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/comunidad-de-madrid" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 14 Escaños</span> 
        <span style="color: #FFA500;">UCD 13 Escaños</span>
        <span style="color: #FF0D00;">PCE 5 Escaños</span> 
        <span style="color: #006400;">CD 3 Escaños</span>
        <span style="color: #eea1ba;">UN 2 Escaños</span>

    </a>
    <br><br>
    El PSOE las gana y sumando al PCE sacan un escaño de ventaja a la suma de UCD, CD y UN
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/comunidad-de-madrid" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 20 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 13 Escaños</span> 
        <span style="color: #FF0D00;">PCE 2 Escaños</span> 
        <span style="color: #006400;">CDS 1 Escaño</span>
        <span style="color: #FFA500;">UCD 1 Escaño</span>
          
    </a>
    <br><br>
    El PSOE las gana y sumando al PCE sacan siete escaños de ventaja a la suma de AP-PDP, CDS y UCD
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/comunidad-de-madrid" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 17 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PL 13 Escaños</span> 
        <span style="color: #006400;">CDS 5 Escaños</span>
        <span style="color: #d25644;">IU 2 Escaños</span>
        
    </a>
    <br><br>
    El PSOE las gana y sumando a IU sacan un escaño de ventaja a la suma de AP-PDP-PL y CDS
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/comunidad-de-madrid" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #0000FF;">PP 14 Escaños</span>
        <span style="color: #FF0000;">PSOE 13 Escaños</span>
        <span style="color: #d25644;">IU 6 Escaños</span>
        <span style="color: #006400;">CDS 4 Escaños</span>
        
    </a>
    <br><br>
    El PP las gana, pero la suma de PSOE e IU saca un escaño de ventaja a la suma de PP y CDS
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/comunidad-de-madrid" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 18 Escaños</span>
        <span style="color: #FF0000;">PSOE 14 Escaños</span>
        <span style="color: #d25644;">IU 5 Escaños</span>
                    
                
                </a>
                <br><br>
                El PP las gana, pero la suma de PSOE e IU le saca un escaño de ventaja al PP
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/comunidad-de-madrid" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 19 Escaños</span>
        <span style="color: #FF0000;">PSOE 12 Escaños</span>
        <span style="color: #d25644;">IU 6 Escaños</span>
</a>
<br><br>
El PP las gana sacando un escaño de ventaja a la suma de PSOE e IU
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/comunidad-de-madrid" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 21 Escaños</span>
        <span style="color: #FF0000;">PSOE-PROGR 13 Escaños</span>
        <span style="color: #d25644;">IU-CM 3 Escaños</span>
</a>
<br><br>
El PP las gana sacando cinco escaños de ventaja a la suma de PSOE-PROGR e IU-CM
<br><br>
2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/comunidad-de-madrid" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 18 Escaños</span> 
    <span style="color: #FF0000;">PSOE 17 Escaños</span>
    <span style="color: #d25644;">IU 2 Escaños</span>
    
</a>
<br><br>
El PP las gana, pero la suma de PSOE e IU le saca un escaño de ventaja
<br><br>
2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/comunidad-de-madrid" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 19 Escaños</span> 
    <span style="color: #FF0000;">PSOE 16 Escaños</span>
    <span style="color: #d25644;">IU-CM 1 Escaño</span>
    <span style="color: #d7257d;">UPyD 1 Escaño</span>
    
    
</a>
<br><br>
El PP las gana y sumando a UPyD sacan tres escaños de ventaja a la suma de PSOE e IU-CM
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/12/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 20 Escaños</span> 
    <span style="color: #FF0000;">PSOE 10 Escaños</span>
    <span style="color: #d7257d;">UPyD 4 Escaños</span>
    <span style="color: #d25644;">IU 3 Escaños</span>
</a>
<br><br>
El PP las gana y sumando a UPyD sacan once escaños de ventaja a la suma de PSOE e IU
<br><br>
2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/12/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 13 Escaños</span> 
    <span style="color: #800080;">PODEMOS 8 Escaños</span>
    <span style="color: #FF7F00;">CS 7 Escaños</span>
    <span style="color: #FF0000;">PSOE 7 Escaños</span>
    <span style="color: #430050;">UNIDAD POPULAR 2 Escaños</span>


</a>
<br><br>
El PP las gana y sumando a CS sacan tres escaños de ventaja a la suma de PODEMOS, PSOE y UNIDAD POPULAR
<br><br>
2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/12/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 15 Escaños</span> 
    <span style="color: #800080;">PODEMOS 8 Escaños</span>
    <span style="color: #FF0000;">PSOE 7 Escaños</span>
    <span style="color: #FF7F00;">CS 7 Escaños</span>
    
</a>
<br><br>
El PP las gana y sumando a CS sacan siete escaños de ventaja a la suma de PODEMOS y PSOE
<br><br>
2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/12/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 11 Escaños</span>
    <span style="color: #FF7F00;">CS 8 Escaños</span>
    <span style="color: #0000FF;">PP 7 Escaños</span>
    <span style="color: #800080;">PODEMOS 6 Escaños</span>
    <span style="color: #008000;">VOX 5 Escaños</span>

</a>
<br><br>
IGUAL
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
IGUAL
<br><br>
2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/12/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 16 Escaños</span>
    <span style="color: #FF0000;">PSOE 10 Escaños</span> 
    <span style="color: #FF69B4;">SUMAR 6 Escaños</span>
    <span style="color: #008000;">VOX 5 Escaños</span> 
    
</a>
<br><br>
IGUAL
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
