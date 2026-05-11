
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
if (provincia === "Extremadura") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Extremadura <span class="escaños">9 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/extremadura/caceres" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 5 Escaños</span>
        <span style="color: #FF0000;">PSOE 4 Escaños</span> 
        
    </a>
    <br><br>
    UCD las gana sacando un escaño de ventaja al PSOE
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/extremadura/caceres" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 5 Escaños</span> 
        <span style="color: #FF0000;">PSOE 4 Escaños</span> 

    </a>
    <br><br>
    UCD las gana sacando un escaño de ventaja al PSOE
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/extremadura/caceres" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 7 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 2 Escaños</span>   
    
    </a>
    <br><br>
    El PSOE las gana sacando cinco escaños de ventaja a AP-PDP
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/extremadura/caceres" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #FF0000;">PSOE 7 Escaños</span>
        <span style="color: #ADD8E6;">AP-PDP-PL 2 Escaños</span>
        
        
    </a>
    <br><br>
    El PSOE las gana sacando cinco escaños de ventaja a AP-PDP-PL
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/extremadura/caceres" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 7 Escaños</span> 
        <span style="color: #0000FF;">PP 2 Escaños</span>
        
    </a>
    <br><br>
    El PSOE las gana sacando cinco escaños de ventaja al PP
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/extremadura/caceres" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 5 Escaños</span>
                    <span style="color: #0000FF;">PP 4 Escaños</span> 
                    
                
                </a>
                <br><br>
                El PSOE las gana sacando un escaño de ventaja al PP
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/extremadura/caceres" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #0000FF;">PP 4 Escaños</span> 
</a>
<br><br>
El PSOE las gana sacando un escaño de ventaja al PP
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/extremadura/caceres" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
</a>
<br><br>
El PP las gana sacando un escaño de ventaja al PSOE
<br><br>
2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/extremadura/caceres" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    
</a>
<br><br>
El PSOE las gana sacando un escaño de ventaja al PP
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/extremadura/caceres" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    
    
</a>
<br><br>
El PSOE las gana sacando un escaño de ventaja al PP
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/10/10.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
</a>
<br><br>
El PP las gana sacando un escaño de ventaja al PSOE
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/10/10.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #0000FF;">PP 4 Escaños</span> 
</a>
<br><br>
El PSOE las gana sacando un escaño de ventaja al PP
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/10/10.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
</a>
<br><br>
El PP las gana sacando un escaño de ventaja al PSOE
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/10/10.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #FF7F00;">CS 2 Escaños</span>
</a>
<br><br>
El PSOE las gana sacando un escaño de ventaja a la suma de PP y CIUDADANOS
<br><br>
2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/10/10.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span> 


</a>
<br><br>
El PSOE las gana sacando un escaño de ventaja a la suma de PP y VOX
<br><br>
2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/10/10/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #0000FF;">PP 4 Escaños</span> 
    <span style="color: #008000;">VOX 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Extremadura es una comunidad autónoma 
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Extremadura</title>
            
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
if (provincia === "Castilla y León") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Castilla y León <span class="escaños">31 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/castilla-la-mancha/valladolid" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 23 Escaños</span>
        <span style="color: #FF0000;">PSOE 7 Escaños</span>
        <span style="color: #ADD8E6;">AP-PDP 1 Escaño</span> 
        
    </a>
    <br><br>
    UCD las gana y sumando a AP-PDP sacan diecisiete escaños de ventaja al PSOE
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/castilla-la-mancha/valladolid" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 23 Escaños</span>
        <span style="color: #FF0000;">PSOE 8 Escaños</span> 

    </a>
    <br><br>
    UCD las gana sacando quince escaños de ventaja al PSOE
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/castilla-la-mancha/valladolid" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 16 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 13 Escaños</span>
        <span style="color: #FFA500;">UCD 1 Escaños</span>
        <span style="color: #006400;">CDS 1 Escaño</span>
    </a>
    <br><br>
    El PSOE las gana sacando un escaño de ventaja a la suma de AP-PDP, UCD y CDS
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/castilla-la-mancha/valladolid" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 14 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 13 Escaños</span>
        <span style="color: #006400;">CDS 4 Escaños</span>
        
    </a>
    <br><br>
    El PSOE las gana, pero la suma de AP-PDP y CDS le saca tres escaños de ventaja
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/castilla-la-mancha/valladolid" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #0000FF;">PP 17 Escaños</span>
        <span style="color: #FF0000;">PSOE 13 Escaños</span>
        <span style="color: #006400;">CDS 1 Escaño</span>
        
    </a>
    <br><br>
    El PP las gana y sumando al CDS sacan cinco escaños de ventaja al PSOE
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/castilla-la-mancha/valladolid" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 18 Escaños</span>
        <span style="color: #FF0000;">PSOE 13 Escaños</span>
                    
                
                </a>
                <br><br>
                El PP las gana sacando cinco escaños de ventaja al PSOE
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/castilla-la-mancha/valladolid" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 20 Escaños</span>
        <span style="color: #FF0000;">PSOE 11 Escaños</span>
</a>
<br><br>
El PP las gana sacando nueve escaños de ventaja al PSOE
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/castilla-la-mancha/valladolid" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 21 Escaños</span>
        <span style="color: #FF0000;">PSOE-PROGR 10 Escaños</span>
</a>
<br><br>
El PP las gana sacando once escaños de ventaja al PSOE
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/castilla-la-mancha/valladolid" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 18 Escaños</span> 
    <span style="color: #FF0000;">PSOE 13 Escaños</span>
    
</a>
<br><br>
El PP las gana sacando cinco escaños de ventaja al PSOE
<br><br>
2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/castilla-la-mancha/valladolid" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 18 Escaños</span> 
    <span style="color: #FF0000;">PSOE 13 Escaños</span>
    
    
</a>
<br><br>
El PP las gana sacando cinco escaños de ventaja al PSOE
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/08/47.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 21 Escaños</span> 
    <span style="color: #FF0000;">PSOE 10 Escaños</span>
</a>
<br><br>
El PP las gana sacando once escaños de ventaja al PSOE
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/08/47.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 17 Escaños</span> 
    <span style="color: #FF0000;">PSOE 9 Escaños</span>
    <span style="color: #800080;">PODEMOS 3 Escaños</span>
    <span style="color: #FF7F00;">CS 2 Escaños</span>


</a>
<br><br>
El PP las gana y sumando a CIUDADANOS sacan siete escaños de ventaja a la suma de PSOE y PODEMOS
<br><br>
2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/08/47.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 18 Escaños</span> 
    <span style="color: #FF0000;">PSOE 9 Escaños</span>
    <span style="color: #800080;">PODEMOS 3 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    
</a>
<br><br>
IGUAL
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/08/47.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 12 Escaños</span>
    <span style="color: #0000FF;">PP 10 Escaños</span>
    <span style="color: #FF7F00;">CS 8 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span>  

</a>
<br><br>
IGUAL
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/08/47.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 13 Escaños</span> 
    <span style="color: #FF0000;">PSOE 12 Escaños</span>
    <span style="color: #008000;">VOX 6 Escaños</span>  

</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/08/47/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 18 Escaños</span>
    <span style="color: #FF0000;">PSOE 12 Escaños</span> 
    <span style="color: #008000;">VOX 1 Escaño</span> 
    
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Castilla y León es una comunidad autónoma

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
        
<html>
        <head>
            <title>Castilla y León</title>
            
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
if (provincia === "Castilla la Mancha") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Castilla la Mancha <span class="escaños">21 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/castilla-y-leon/toledo" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 12 Escaños</span>
        <span style="color: #FF0000;">PSOE 8 Escaños</span>
        <span style="color: #ADD8E6;">AP-PDP 1 Escaño</span>  
        
    </a>
    <br><br>
    IGUAL
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/castilla-y-leon/toledo#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 12 Escaños</span>
        <span style="color: #FF0000;">PSOE 8 Escaños</span> 
        <span style="color: #FF0D00;">PCE 1 Escaño</span>
    </a>
    <br><br>
    UCD continua como ganador, sacando tres escaños de ventaja a la suma de PSOE y PCE 
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/castilla-y-leon/toledo#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 14 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 7 Escaños</span> 
          
    </a>
    <br><br>
    El PSOE las gana doblando en escaños a AP-PDP
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/castilla-y-leon/toledo#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 12 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PL 9 Escaños</span>
        
        
    </a>
    <br><br>
    El PSOE las gana sacando tres escaños de ventaja a AP-PDP-PL
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/castilla-y-leon/toledo#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 13 Escaños</span> 
        <span style="color: #0000FF;">PP 8 Escaños</span>
        
    </a>
    <br><br>
    El PSOE las gana sacando cinco escaños de ventaja al PP
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/castilla-y-leon/toledo#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 11 Escaños</span>
        <span style="color: #0000FF;">PP 10 Escaños</span>
                    
                
                </a>
                <br><br>
                El PSOE las gana sacando un escaño de ventaja al PP
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/castilla-y-leon/toledo#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 11 Escaños</span>
        <span style="color: #FF0000;">PSOE 10 Escaños</span>
</a>
<br><br>
El PP las gana sacando un escaño de ventaja al PSOE
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/castilla-y-leon/toledo#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 12 Escaños</span>
        <span style="color: #FF0000;">PSOE-PROGR 9 Escaños</span>
</a>
<br><br>
El PP sigue como ganador, sacando tres escaños de ventaja a PSOE-PROGR
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/castilla-y-leon/toledo#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 11 Escaños</span> 
    <span style="color: #FF0000;">PSOE 10 Escaños</span>
    
</a>
<br><br>
El PP continúa como primera fuerza, sacando un escaño de ventaja al PSOE 
<br><br>
2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/castilla-y-leon/toledo#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 12 Escaños</span> 
    <span style="color: #FF0000;">PSOE 9 Escaños</span>
    
    
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/07/45.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 14 Escaños</span> 
    <span style="color: #FF0000;">PSOE 7 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/07/45.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 10 Escaños</span> 
    <span style="color: #FF0000;">PSOE 7 Escaños</span>
    <span style="color: #FF7F00;">CS 3 Escaño</span>
    <span style="color: #800080;">PODEMOS 1 Escaños</span>


</a>
<br><br>
IGUAL
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/07/45.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 12 Escaños</span> 
    <span style="color: #FF0000;">PSOE 7 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    
</a>
<br><br>
IGUAL
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/07/45.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 9 Escaños</span>
    <span style="color: #0000FF;">PP 6 Escaños</span>
    <span style="color: #FF7F00;">CS 4 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span>  

</a>
<br><br>
IGUAL
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/07/45.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 9 Escaños</span>
    <span style="color: #0000FF;">PP 7 Escaños</span> 
    <span style="color: #008000;">VOX 5 Escaños</span>  

</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/07/45/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 10 Escaños</span>
    <span style="color: #FF0000;">PSOE 8 Escaños</span> 
    <span style="color: #008000;">VOX 3 Escaños</span> 
    
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Castilla la Mancha es una comunidad autónoma

            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Castilla la Mancha</title>
            
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
        <span style="color: #006400;">CD 1 Escaño</span>
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
if (provincia === "Aragón") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Aragón <span class="escaños">13 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #FFA500;">UCD 7 Escaños</span>
        <span style="color: #FF0000;">PSOE 4 Escaños</span>
        <span style="color: #FF6767;">PSP-US 1 Escaño</span>
        <span style="color: #c2272c;">CAIC 1 Escaño</span>
    </a>
    <br><br>
    UCD las gana y sumando el escaño de CAIC (Candidatura Aragonesa Independiente de Centro1​ (CAIC) fue un partido político de España. El CAIC se fundó en 1977 por disidentes de la Unión de Centro Democrático (UCD). La historia del partido fue breve al disolverse en enero de 1978 para formar un nuevo partido: el Partido Aragonés Regionalista.) sacan
    tres escaños de ventaja a la suma de PSOE y PSP-US
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/aragon/zaragoza" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 8 Escaños</span>
        <span style="color: #FF0000;">PSOE 4 Escaños</span>
        <span style="color: #c99f00;">PAR 1 Escaño</span>

    </a>
    UCD las gana y sumando el escaño del PAR sacan cinco escaños de ventaja al PSOE
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/aragon/zaragoza" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 8 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PAR 5 Escaños</span>  
    </a>
    <br><br>
    El PSOE las gana, sacando tres escaños de ventaja a AP-PDP-PAR.
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/aragon/zaragoza" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 8 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PL 4 Escaños</span>
        <span style="color: #c99f00;">PAR 1 Escaño</span>
    </a>
    <br><br>
    El PSOE sigue como vencedor, sacando tres escaños de ventaja a la suma de AP-PDP-PL, PAR y CDS
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/aragon/zaragoza" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 7 Escaños</span> 
        <span style="color: #0000FF;">PP 4 Escaños</span>
        <span style="color: #d25644;">IU 1 Escaño</span>
        <span style="color: #c99f00;">PAR 1 Escaño</span>
    </a>
    <br><br>
    El PSOE las gana y sumando el escaño de IU sacan tres escaños de ventaja a la suma de PP y PAR
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/aragon/zaragoza" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 7 Escaños</span> 
                    <span style="color: #0000FF;">PP 4 Escaños</span>
                    <span style="color: #c99f00;">PAR 1 Escaño</span>
                    <span style="color: #d25644;">IU 1 Escaño</span>
    
                </a>
                <br><br>
                IGUAL
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/aragon/zaragoza" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP-PAR 8 Escaños</span>
                    <span style="color: #FF0000;">PSOE 5 Escaños</span> 
                    
</a>
<br><br>
IGUAL
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/aragon/zaragoza" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #0000FF;">PP 8 Escaños</span>
        <span style="color: #FF0000;">PSOE-PROGR 4 Escaños</span>
        <span style="color: #ab001c;">CHA 1 Escaño</span>
        
</a>
<br><br>
IGUAL
<br><br>
2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/aragon/zaragoza" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 7 Escaños</span>
    <span style="color: #0000FF;">PP 5 Escaños</span>
    <span style="color: #ab001c;">CHA 1 Escaño</span>
    
    
</a>
<br><br>
El PSOE las gana y sumando a CHA sacan tres escaños de ventaja al PP
<br><br>
2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/aragon/zaragoza" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 8 Escaños</span>
    <span style="color: #0000FF;">PP 5 Escaños</span> 

    
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/02/50.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 8 Escaños</span> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #01c6a4;">La Izquierda de Aragón: La Izquierda Plural 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/02/50.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 6 Escaños</span>
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>


</a>
<br><br>
IGUAL
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/02/50.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 6 Escaños</span>
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span>
    
</a>
<br><br>
IGUAL
<br><br>
2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/02/50.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #FF7F00;">CS 3 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 1 Escaño</span>  
    <span style="color: #008000;">VOX 1 Escaño</span>

</a>
<br><br>
IGUAL
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/02/50.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 6 Escaños</span>
    <span style="color: #0000FF;">PP 4 Escaños</span>
    <span style="color: #008000;">VOX 1 Escaño</span> 
    <span style="color: #800080;">PODEMOS 1 Escaño</span> 
    <span style="color: #006400;">¡TERUEL EXISTE! 1 Escaño</span>

</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/02/50/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 7 Escaños</span>
    <span style="color: #FF0000;">PSOE 4 Escaño</span> 
    <span style="color: #008000;">VOX 1 Escaño</span> 
    <span style="color: #FF69B4;">SUMAR 1 Escaño</span> 
    
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Aragón es una comunidad autónoma
            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Aragón</title>
            
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
if (provincia === "Euskadi") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Euskadi <span class="escaños">18 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/pais-vasco/bizkaia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #298242;">PNV 7 Escaños</span>
        <span style="color: #FF0000;">PSE-PSOE 6 EscañoS</span>
        <span style="color: #FFA500;">UCD 4 Escaños</span>
        <span style="color: #DC143C ;">EE 1 Escaño</span>
    </a>
    <br><br>
    El PNV gana las primeras elecciones y sumando al PSE-PSOE y EE sacan diez escaños de ventaja a UCD
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/pais-vasco/bizkaia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #298242;">PNV 6 Escaños</span>
        <span style="color: #FFA500;">UCD 5 Escaños</span>
        <span style="color: #FF0000;">PSE-PSOE 4 Escaños</span>
        <span style="color: #01b59c;">HB 2 Escaños</span>
        <span style="color: #DC143C ;">EE 1 Escaño</span>
    </a>
    <br><br>
    El PNV continúa como ganador y junto con el PSE, HB y EE sacan ocho escaños de ventaja a UCD
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/pais-vasco/bizkaia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #298242;">PNV 7 Escaños</span>
        <span style="color: #FF0000;">PSE-PSOE 7 Escaños</span>
        <span style="color: #01b59c;">HB 2 Escaños</span>
        <span style="color: #ADD8E6;">AP-PDP-PL 2 Escaños</span>
    
    </a>
    <br><br>
    El PNV las gana y sumando al PSE y HB sacan catorce escaños de ventaja a AP-PDP-PL.
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/pais-vasco/bizkaia" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
         <span style="color: #FF0000;">PSE-PSOE 7 Escaños</span>
        <span style="color: #298242;">PNV 6 Escaños</span>
        <span style="color: #01b59c;">HB 3 Escaños</span>
        <span style="color: #ADD8E6;">AP-PDP-PL 2 Escaños</span>
        
        
    </a>
    <br><br>
    El PSE-PSOE las gana y sumando al PNV y HB  sacan catroce escaños de ventaja a AP-PDP-PL
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/pais-vasco/bizkaia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSE-PSOE 5 Escaños</span>
        <span style="color: #298242;">PNV 5 Escaños</span>
        <span style="color: #01b59c;">HB 3 Escaños</span>
        <span style="color: #0000FF;">PP 2 Escaños</span>
        <span style="color: #DC143C ;">EE 2 Escaños</span>
        <span style="color: #298242;">EUSKO ALKARTASUNA 1 Escaño</span>
        
    </a>
    <br><br>
    El PSE-PSOE las sigue ganando y sumando al PNV, HB, EA y EE sacan catorce escaños de ventaja al PP
<br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/pais-vasco/bizkaia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
         <span style="color: #FF0000;">PSE-PSOE 7 Escaños</span>
        <span style="color: #298242;">PNV 5 Escaños</span>
        <span style="color: #0000FF;">PP 3 Escaños</span>
        <span style="color: #01b59c;">HB 2 Escaños</span>
         <span style="color: #298242;">EUSKO ALKARTASUNA-EUE 1 Escaño</span>
        
                </a>
                <br><br>
                El PSE-PSOE sigue en la primera posición y sumando al PNV, HB y EA-EUE sacan doce escaños de ventaja al PP
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/pais-vasco/bizkaia" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #298242;">PNV 5 Escaños</span>
        <span style="color: #FF0000;">PSE-PSOE 5 Escaños</span>
        <span style="color: #0000FF;">PP 4 Escaños</span>
        <span style="color: #01b59c;">HB 2 Escaños</span>
        <span style="color: #d25644;">IU-EB 1 Escaño</span>
        <span style="color: #298242;">EUSKO ALKARTASUNA 1 Escaño</span>

</a>
<br><br>
El PNV las gana y sumando al PSE-PSOE, HB, IU-EB y EA sacan diez escaños de ventaja al PP
<br><br>
2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/pais-vasco/bizkaia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 7 Escaños</span>
                    <span style="color: #298242;">PNV 6 Escaños</span>
                    <span style="color: #FF0000;">PSE-PSOE 4 Escaños</span>
                    <span style="color: #298242;">EUSKO ALKARTASUNA 1 Escaño</span>
</a>
<br><br>
El PP las gana, pero la suma de PNV, PSE-PSOE y EA le sacan cuatro escaños de ventaja
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/pais-vasco/bizkaia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #298242;">PNV 7 Escaños</span>
                    <span style="color: #FF0000;">PSE-PSOE 6 Escaños</span>
                    <span style="color: #0000FF;">PP 4 Escaños</span>
                    <span style="color: #298242;">EUSKO ALKARTASUNA 1 Escaño</span>    
    
</a>
<br><br>
El PNV las gana y sumando al PSE-PSOE y EA sacan diez escaños de ventaja al PP
<br><br>
2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/pais-vasco/bizkaia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSE-PSOE 9 Escaños</span>
                    <span style="color: #298242;">PNV 6 Escaños</span>
                    <span style="color: #0000FF;">PP 3 Escaños</span>          
    
    
    
</a>
<br><br>
IGUAL 
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/14/48.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
          <span style="color: #01b59c;">AMAIUR 6 Escaños</span>
    <span style="color: #298242;">PNV 5 Escaños</span>
        <span style="color: #FF0000;">PSE-PSOE 4 Escaños</span>
        <span style="color: #0000FF;">PP 3 Escaños</span>
        
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/14/48.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #298242;">PNV 6 Escaños</span>
        <span style="color: #800080;">PODEMOS 5 Escaños</span>
        <span style="color: #FF0000;">PSE-PSOE 3 Escaños</span>
        <span style="color: #01b59c;">EHBILDU 2 Escaños</span>
        <span style="color: #0000FF;">PP 2 Escaños</span>

</a>
<br><br>
IGUAL
<br><br>
2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/14/48.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #800080;">PODEMOS 6 Escaños</span>
        <span style="color: #298242;">PNV 5 Escaños</span>
        <span style="color: #FF0000;">PSE-PSOE 3 Escaños</span>
        <span style="color: #01b59c;">EHBILDU 2 Escaños</span>
        <span style="color: #0000FF;">PP 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/14/48.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #298242;">PNV 6 Escaños</span>
        <span style="color: #FF0000;">PSE-PSOE 4 Escaños</span>
        <span style="color: #800080;">PODEMOS 4 Escaños</span>
        <span style="color: #01b59c;">EHBILDU 4 Escaños</span>
        

</a>
<br><br>
IGUAL
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/14/48.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #298242;">PNV 6 Escaños</span>
        <span style="color: #FF0000;">PSE-PSOE 4 Escaños</span>
        <span style="color: #01b59c;">EHBILDU 4 Escaños</span>
        <span style="color: #800080;">PODEMOS 3 Escaños</span>
        <span style="color: #0000FF;">PP 1 Escaño</span>

</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/14/48/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSE-PSOE 5 Escaños</span>
    <span style="color: #298242;">PNV 5 Escaños</span>
        <span style="color: #01b59c;">EHBILDU 5 Escaños</span>
        <span style="color: #0000FF;">PP 2 Escaños</span>
        <span style="color: #FF69B4;">SUMAR 1 Escaño</span>  
    
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
if (provincia === "Canarias") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Canarias <span class="escaños">15 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/canarias/las-palmas" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #FFA500;">UCD 12 Escaños</span>
        <span style="color: #FF0000;">PSOE 3 Escaños</span>
    </a>
    <br><br>
    UCD gana las primeras elecciones cuadruplicando en escaños al PSOE
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/canarias/las-palmas#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 11 Escaños</span>
        <span style="color: #FF0000;">PSOE 3 Escaño</span>
        <span style="color: #FF0D00;">C-UPC 1 Escaño</span>


    </a>
    <br><br>
    UCD las vuelve a ganar y saca siete escaños de ventaja a la suma de PSOE y C-UPC (Unión del Pueblo Canario (UPC) fue una coalición de partidos políticos comunistas, independentistas y nacionalistas de izquierdas de Canarias que existió entre finales de los años 70 y principios de los 80.). 
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/canarias/las-palmas#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 8 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 5 Escaños</span> 
        <span style="color: #FFA500;">UCD 2 Escaños</span> 
    </a>
    <br><br>
    El PSOE las gana sacando un escaño de ventaja a la suma de AP-PDP y UCD. 
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/canarias/las-palmas#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 7 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PL 4 Escaños</span>
        <span style="color: #006400;">CDS 3 Escaños</span> 
        <span style="color: #041595;">AIC 1 Escaño</span>
    </a>
    <br><br>
    El PSOE sigue como vencedor, pero la suma de AP-PDP-PL, CDS y AIC le saca un escaño de ventaja. 
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/canarias/las-palmas#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 7 Escaños</span> 
        <span style="color: #0000FF;">PP 3 Escaños</span>
        <span style="color: #006400;">CDS 3 Escaños</span> 
        <span style="color: #041595;">AIC 1 Escaño</span>
        <span style="color: #d25644;">IU 1 Escaño</span>
        
    </a>
    <br><br>
    El PSOE las gana y sumando a IU sacan un escaño de ventaja a la suma de PP, CDS y AIC
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/canarias/las-palmas#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #0000FF;">PP 6 Escaños</span>
                    <span style="color: #FF0000;">PSOE 5 Escaños</span>
                    <span style="color: #01add7;">CCA 4 Escaños</span>
    
                </a>
                <br><br>
                El PP las gana y sumando a CCA doblan en escaños al PSOE
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/canarias/las-palmas#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 6 Escaños</span>
                    <span style="color: #FF0000;">PSOE 5 Escaños</span>
                    <span style="color: #01add7;">CCA 4 Escaños</span>
                    
</a>
<br><br>
El PP las vuelve a ganar y sumando a CCA doblan en escaños al PSOE
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/canarias/las-palmas#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 8 Escaños</span>
                    <span style="color: #01add7;">CCA 4 Escaños</span>
                    <span style="color: #FF0000;">PSOE-PROGR 3 Escaños</span> 
        
</a>
<br><br>
El PP las gana y sumando a CCA multiplican por cuatro en escaños al PSOE-PROGR
<br><br>
2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/canarias/las-palmas#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #0000FF;">PP 6 Escaños</span>
    <span style="color: #FF0000;">PSOE 6 Escaños</span>
    <span style="color: #01add7;">CCA 3 Escaños</span>
    
    
    
</a>
<br><br>
IGUAL
<br><br>
2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/canarias/las-palmas#google_vignette" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 7 Escaños</span>
    <span style="color: #0000FF;">PP 6 Escaños</span>
    <span style="color: #01add7;">CCA-PNC 2 Escaños</span>
    
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/05/35.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 9 Escaños</span> 
    <span style="color: #FF0000;">PSOE 4 Escaños</span>
    <span style="color: #01add7;">CCA-NC-PNC 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/05/35.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 5 Escaños</span>
    <span style="color: #FF0000;">PSOE-NC 4 Escaños</span>
    <span style="color: #800080;">PODEMOS 3 Escaños</span>
    <span style="color: #FF7F00;">CS 2 Escaños</span>
    <span style="color: #01add7;">CCA-PNC 1 Escaño</span>

</a>
<br><br>
IGUAL
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/05/35.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 6 Escaños</span>
    <span style="color: #FF0000;">PSOE-NC 3 Escaños</span>
    <span style="color: #800080;">PODEMOS 3 Escaños</span>
    <span style="color: #FF7F00;">CS 2 Escaños</span>
     <span style="color: #01add7;">CCA-PNC 1 Escaño</span>
    
</a>
<br><br>
IGUAL
<br><br>
2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/05/35.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #800080;">PODEMOS 3 Escaños</span>
    <span style="color: #0000FF;">PP 3 Escaños</span>
    <span style="color: #FF7F00;">CS 2 Escaños</span> 
    <span style="color: #01add7;">CCA-PNC 2 Escaños</span> 
    

</a>
<br><br>
IGUAL
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/05/35.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 5 Escaños</span>
    <span style="color: #0000FF;">PP 4 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span> 
    <span style="color: #01add7;">CCA-NC-PNC 2 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span> 
</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/05/35/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 6 Escaños</span>
    <span style="color: #0000FF;">PP 6 Escaños</span>
    <span style="color: #01add7;">CCA 1 Escaño</span>
    <span style="color: #FF69B4;">SUMAR 1 Escaño</span> 
    <span style="color: #008000;">VOX 1 Escaño</span> 
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Canarias es una comunidad autónoma
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
if (provincia === "Galicia") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Galicia <span class="escaños">23 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/galicia/a-coruna" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 17 Escaños</span> 
        <span style="color: #ADD8E6;">AP 3 Escaños</span>
        <span style="color: #FF0000;">PSOE 3 Escaños</span>
        
    </a>
    <br><br>
    UCD gana las primeras elecciones arrasando y sumando a AP sacan diecisiete escaños de ventaja al PSOE
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/galicia/a-coruna" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FFA500;">UCD 15 Escaños</span> 
        <span style="color: #FF0000;">PSOE 4 Escaños</span>
        <span style="color: #ADD8E6;">AP 4 Escaños</span>

    </a>
    UCD las vuelva a ganar y sumando a AP sacan quince escaños de ventaja al PSOE
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/galicia/a-coruna" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #ADD8E6;">AP-PDP 10 Escaños</span> 
         <span style="color: #FF0000;">PSOE 9 Escaños</span>
        <span style="color: #FFA500;">UCD 4 Escaños</span>
          
    </a>
    <br><br>
    AP-PDP las gana y sumando a UCD sacan cinco escaños de ventaja al PSOE
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/galicia/a-coruna" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #ADD8E6;">AP-PDP-PL-C 12 Escaños</span> 
        <span style="color: #FF0000;">PSOE 10 Escaños</span> 
        <span style="color: #006400;">CDS 1 Escaños</span>
    </a>
    <br><br>
    AP-PDP-PL-C las gana y sumando a CDS sacan tres escaños de ventaja al PSOE
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/galicia/a-coruna" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
         <span style="color: #0000FF;">PP 11 Escaños</span>
        <span style="color: #FF0000;">PSOE 11 Escaños</span>
        <span style="color: #006400;">CDS 1 Escaño</span>
        
    </a>
    <br><br>
    El PP las gana y sumando el escaño de CDS sacan un escaño de ventaja al PSOE
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/galicia/a-coruna" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 13 Escaños</span>
                    <span style="color: #FF0000;">PSOE 10 Escaños</span> 
    
                </a>
                <br><br>
                El PP las gana sacando tres escaños de ventaja al PSOE
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/galicia/a-coruna" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #0000FF;">PP 13 Escaños</span>
                    <span style="color: #FF0000;">PSOE 8 Escaños</span>
                    <span style="color: #74b1e0;">BNG 2 Escaños</span>
</a>
<br><br>
El PP las gana sacando tres escaños de ventaja a la suma de PSOE y BNG
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/galicia/a-coruna" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 15 Escaños</span>
                    <span style="color: #FF0000;">PSOE 6 Escaños</span>
                    <span style="color: #74b1e0;">BNG 2 Escaños</span>
</a>
<br><br>
El PP las gana sacando siete escaños de ventaja a la suma de PSOE y BNG
<br><br>
2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/galicia/a-coruna" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 12 Escaños</span> 
    <span style="color: #FF0000;">PSOE 9 Escaños</span>
    <span style="color: #74b1e0;">BNG 2 Escaños</span>
</a>
<br><br>
El PP las gana sacando un escaño de ventaja a la suma de PSOE y BNG
<br><br>
2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/galicia/a-coruna" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 11 Escaños</span> 
    <span style="color: #FF0000;">PSOE 10 Escaños</span>
    <span style="color: #74b1e0;">BNG 2 Escaños</span>
    
    
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/11/15.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 15 Escaños</span> 
    <span style="color: #FF0000;">PSOE 6 Escaños</span>
    <span style="color: #74b1e0;">BNG 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/11/15.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 10 Escaños</span>
    <span style="color: #800080;">PODEMOS 6 Escaños</span>
    <span style="color: #FF0000;">PSOE 6 Escaños</span>
    <span style="color: #FF7F00;">CS 1 Escaño</span> 


</a>
<br><br>
IGUAL
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/11/15.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 12 Escaños</span>
     <span style="color: #FF0000;">PSOE 6 Escaños</span>
    <span style="color: #800080;">PODEMOS 5 Escaños</span>
    
</a>
<br><br>
IGUAL
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/11/15.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 10 Escaños</span>
    <span style="color: #0000FF;">PP 9 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #FF7F00;">CS 2 Escaños</span> 

</a>
<br><br>
IGUAL
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/11/15.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 10 Escaños</span> 
    <span style="color: #FF0000;">PSOE 10 Escaños</span>
    <span style="color: #800080;">PODEMOS 2 Escaños</span>
    <span style="color: #74b1e0;">BNG 1 Escaño</span>

</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/11/15/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 13 Escaños</span>
    <span style="color: #FF0000;">PSOE 7 Escaños</span> 
    <span style="color: #FF69B4;">SUMAR 2 Escaños</span>
    <span style="color: #74b1e0;">BNG 1 Escaño</span>
    
</a>
<br><br>
IGUAL
<br><br>
En conclusión, Galicia es una comunidad autónoma


            </p>
        </div>
        <div class="contenedor">
        </div>
    `;
    const nuevaVentana = window.open();
    nuevaVentana.document.write(`
    <html>
        <head>
            <title>Galicia</title>
            
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
if (provincia === "Andalucía") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Andalucía <span class="escaños">61 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/andalucia/sevilla" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 28 Escaños</span>
        <span style="color: #FFA500;">UCD 26 Escaños</span> 
        <span style="color: #FF0D00;">PCE 5 Escaños</span>
        <span style="color: #FF6767;">PSP-US 1 Escaño</span>
        <span style="color: #ADD8E6;">AP 1 Escaño</span> 
        
    </a>
    <br><br>
    El PSOE gana las primeras elecciones y sumando al PCE y PSP-US sacan siete escaños de ventaja a la suma de UCD y AP
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/andalucia/sevilla" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 26 Escaños</span> 
        <span style="color: #FFA500;">UCD 24 Escaños</span>
        <span style="color: #FF0D00;">PCE 6 Escaños</span> 
        <span style="color: #15AA35;">PSA-PA 5 Escaños</span>

    </a>
    El PSOE las vuelve a ganar y sumando al PCE y a PSA-PA sacan trece escaños de ventaja a UCD 
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/andalucia/sevilla" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSA-PSOE 45 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 15 Escaños</span> 
        <span style="color: #FF0D00;">PCA-PCE 1 Escaño</span> 
          
    </a>
    <br><br>
    El PSA-PSOE las gana y sumando a PCA-PCE sacan treinta y un escaños de ventaja a AP-PDP 
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/andalucia/sevilla" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 43 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PL 15 Escaños</span>
        <span style="color: #d25644;">IU 3 Escaños</span>
        
    </a>
    <br><br>
    El PSOE sigue como vencedor y sumando a IU sacan treinta y un escaños de ventaja a AP-PDP-PL. 
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/andalucia/sevilla" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 41 Escaños</span> 
        <span style="color: #0000FF;">PP 12 Escaños</span>
        <span style="color: #d25644;">IU-CA 6 Escaños</span>
        <span style="color: #15AA35;">PA 2 Escaños</span>
        
    </a>
    <br><br
    El PSOE sigue ganando y sumando a IU-CA y PA sacan treinta y siete escaños de ventaja al PP. 
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/andalucia/sevilla" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 35 Escaños</span> 
                    <span style="color: #0000FF;">PP 22 Escaños</span>
                    <span style="color: #d25644;">IU-CA 4 Escaños</span>
    
                </a>
                <br><br>
                El PSOE sigue ganando y sumando a IU-CA sacan diecisiete escaños de ventaja al PP
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/andalucia/sevilla" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSOE 31 Escaños</span> 
                    <span style="color: #0000FF;">PP 25 Escaños</span>
        <span style="color: #d25644;">IU-CA 5 Escaños</span>
</a>
<br><br>
El PSOE sigue como vencedor y sumando a IU-CA sacan once escaños de ventaja al PP 
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/andalucia/sevilla" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE-PROGR 32 Escaños</span>
        <span style="color: #0000FF;">PP 26 Escaños</span>
        <span style="color: #d25644;">IU-CA 2 Escaños</span>
        <span style="color: #15AA35;">PA 1 Escaño</span>
</a>
<br><br>
PSOE-PROGR las gana y sumando a IU-CA y PA sacan nueve escaños de ventaja al PP. 
<br><br>
2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/andalucia/sevilla" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 37 Escaños</span>
    <span style="color: #0000FF;">PP 24 Escaños</span> 
    
    
</a>
<br><br>
El PSOE las gana sacando trece escaños de ventaja al PP
<br><br>
2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/andalucia/sevilla" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 36 Escaños</span>
    <span style="color: #0000FF;">PP 25 Escaños</span> 

    
</a>
<br><br>
IGUAL
<br><br>
2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/01/41.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 33 Escaños</span> 
    <span style="color: #FF0000;">PSOE 25 Escaños</span>
    <span style="color: #d25644;">IU-CA 3 Escaños</span>
</a>
<br><br>
El PP las gana sacando cinco escaños de ventaja a la suma de PSOE e IU-CA
<br><br>
2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/01/41.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 22 Escaños</span>
    <span style="color: #0000FF;">PP 21 Escaños</span>
    <span style="color: #800080;">PODEMOS 10 Escaños</span>
    <span style="color: #FF7F00;">CS 8 Escaños</span>


</a>
<br><br>
IGUAL
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/01/41.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 23 Escaños</span>
    <span style="color: #FF0000;">PSOE 20 Escaños</span>
    <span style="color: #800080;">PODEMOS 11 Escaños</span>
    <span style="color: #FF7F00;">CS 7 Escaño</span>
</a>
<br><br0>
IGUAL
<br><br>

2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/01/41.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 24 Escaños</span>
    <span style="color: #FF7F00;">CS 11 Escaños</span>
    <span style="color: #0000FF;">PP 11 Escaños</span> 
    <span style="color: #800080;">PODEMOS 9 Escaños</span>
    <span style="color: #008000;">VOX 6 Escaños</span>

</a>
<br><br>
IGUAL
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/01/41.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSOE 25 Escaños</span>
    <span style="color: #0000FF;">PP 15 Escaños</span> 
    <span style="color: #008000;">VOX 12 Escaños</span>
    <span style="color: #800080;">PODEMOS 6 Escaños</span>
    <span style="color: #FF7F00;">CS 3 Escaños</span>

</a>
<br><br>
IGUAL
<br><br>
2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/01/41/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 25 Escaños</span>
    <span style="color: #FF0000;">PSOE 21 Escaños</span> 
    <span style="color: #008000;">VOX 9 Escaños</span>
    <span style="color: #FF69B4;">SUMAR 6 Escaños</span> 

    
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
if (provincia === "Comunidad Valenciana") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Comunidad Valenciana <span class="escaños">33 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/comunidad-valenciana/valencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 14 Escaños</span> 
        <span style="color: #FFA500;">UCD 13 Escaños</span>
        <span style="color: #FF0D00;">PCE 2 Escaños</span> 
        <span style="color: #ADD8E6;">AP 2 Escaños</span>
        <span style="color: #FF6767;">PSP-US 1 Escaño</span>
        <span style="color: #000080;">INDEP 1 Escaño</span>
        
    </a>
    <br><br>
    El PSOE gana las primeras elecciones y sumando al PCE y PSP-US sacan un escaño de ventaja a la suma de UCD y AP e INDEP.
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/comunidad-valenciana/valencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 15 Escaños</span> 
        <span style="color: #FFA500;">UCD 15 Escaños</span>
        <span style="color: #FF0D00;">PCE 3 Escaños</span> 

    </a>
    <br><br>
    El PSOE las vuelve a ganar y sumando al PCE sacan tres escaños de ventaja a UCD. 
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/comunidad-valenciana/valencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 20 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-UV 11 Escaños</span> 
        <span style="color: #FF0D00;">PCE 2 Escaños</span>
    </a>
    <br><br>
    El PSOE las gana y sumando al PCE doblan en escaños a AP-PDP-UV
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/comunidad-valenciana/valencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
        <span style="color: #FF0000;">PSOE 19 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PL 11 Escaños</span> 
        <span style="color: #006400;">CDS 2 Escaños</span>
        <span style="color: #27345a;">UV 1 Escaño</span>
        
    </a>
    <br><br>
    El PSOE las vuelve a ganar y saca cinco escaños de ventaja a la suma de AP-PDP-PL, CDS y UV.  
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/comunidad-valenciana/valencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSOE 17 Escaños</span> 
        <span style="color: #0000FF;">PP 10 Escaños</span>
         <span style="color: #d25644;">IU-EU 2 Escaños</span>
        <span style="color: #27345a;">UV 2 Escaños</span>
        <span style="color: #006400;">CDS 1 Escaños</span>
        <span style="color: #d64a26;">COMPROMIS 1 Escaño</span>
        
    </a>
    <br><br>
    El PSOE las vuelve a ganar y sumando a IU-EU y COMPROMIS sacan siete escaños de ventaja a la suma de PP, UV y CDS
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/comunidad-valenciana/valencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 16 Escaños</span>
        <span style="color: #FF0000;">PSOE 13 Escaños</span>
        <span style="color: #d25644;">EU-PV 3 Escaños</span>
        <span style="color: #27345a;">UV 1 Escaño</span>
                    
                
                </a>
                <br><br>
                El PP las gana y sumando a UV sacan un escaño de ventaja a la suma de PSOE y EU-PV
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/comunidad-valenciana/valencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 16 Escaños</span>
        <span style="color: #FF0000;">PSOE 13 Escaños</span>
        <span style="color: #d25644;">EU-PV 3 Escaños</span>
        <span style="color: #27345a;">UV 1 Escaño</span>
</a>
<br><br>
El PP las gana y sumando a UV sacan un escaño de ventaja a la suma del PSOE y EU-PV.
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/comunidad-valenciana/valencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 19 Escaños</span>
        <span style="color: #FF0000;">PSOE-PROGR 13 Escaños</span>
        <span style="color: #d25644;">EU-PV 1 Escaño</span>
</a>
<br><br>
El PP sigue como ganador, sacando cinco escaños de ventaja a la suma de PSOE-PROGR y EU-PV.
<br><br>

2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/comunidad-valenciana/valencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 17 Escaños</span> 
    <span style="color: #FF0000;">PSOE 15 Escaños</span>
    <span style="color: #d25644;">ENTESA 1 Escaño</span>
    
</a>
<br><br>
El PP continúa como primera fuerza sacando un escaño de ventaja a la suma de PSOE y ENTESA (Coalición que formaron Esquerra Unida del País Valencià, Izquierda Republicana y el sector de Els Verds partidario de Carles Arnal constituido en un nuevo partido, Els Verds Esquerra Ecologista del País Valencià.).
<br><br>
2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/comunidad-valenciana/valencia" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 19 Escaños</span> 
    <span style="color: #FF0000;">PSOE 14 Escaños</span>
    
    
</a>
<br><br>
IGUAL
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/17/46.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 20 Escaños</span> 
    <span style="color: #FF0000;">PSOE 10 Escaños</span>
    <span style="color: #d25644;">EU-PV-EV 1 Escaño</span>
    <span style="color: #d7257d;">UPyD 1 Escaño</span>
    <span style="color: #d64a26;">COMPROMIS 1 Escaño</span>
</a>
<br><br>
IGUAL
<br><br>
2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/17/46.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 11 Escaños</span> 
    <span style="color: #800080;">PODEMOS-COMPROMIS 9 Escaños</span>
    <span style="color: #FF0000;">PSOE 7 Escaños</span>
    <span style="color: #FF7F00;">CS 6 Escaños</span>


</a>
<br><br>
El PP vuelve a ganar y sumando a CIUDADANOS sacan un escaño de ventaja a la suma de PODEMOS-COMPROMIS y PSOE
<br><br>
2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/17/46.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 13 Escaños</span> 
    <span style="color: #800080;">PODEMOS-COMPROMIS-EUPV 9 Escaños</span>
    <span style="color: #FF0000;">PSOE 6 Escaños</span>
    <span style="color: #FF7F00;">CS 5 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>
2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/17/46.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 11 Escaños</span>
    <span style="color: #0000FF;">PP 7 Escaños</span>
    <span style="color: #FF7F00;">CS 6 Escaños</span>
    <span style="color: #800080;">PODEMOS 5 Escaños</span>
    <span style="color: #008000;">VOX 3 Escaños</span>
    <span style="color: #d64a26;">COMPROMIS 1 Escaño</span>

</a>
<br><br>
El PSOE las gana y sumando a PODEMOS y COMPROMIS sacan un escaño de ventaja a la suma de PP, CIUDADANOS y VOX
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/17/46.html" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
    <span style="color: #FF0000;">PSOE 11 Escaños</span>
    <span style="color: #0000FF;">PP 8 Escaños</span> 
    <span style="color: #008000;">VOX 7 Escaños</span> 
    <span style="color: #800080;">PODEMOS 4 Escaños</span>
    <span style="color: #FF7F00;">CS 2 Escaños</span>
    <span style="color: #d64a26;">MES-COMPROMIS 1 Escaño</span>
</a>
<br><br>
El PSOE las gana, pero la suma de PP, VOX y CIUDADANOS le saca un escaño de ventaja a la suma de PSOE, PODEMOS y COMPROMIS
<br><br>
2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/17/46/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 13 Escaños</span>
    <span style="color: #FF0000;">PSOE 11 Escaños</span>
    <span style="color: #008000;">VOX 5 Escaños</span> 
    <span style="color: #FF69B4;">SUMAR 4 Escaños</span>
    
</a>
<br><br>
IGUAL
<br><br>
En conclusión, La Comunidad Valenciana es una comunidad autónoma



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
if (provincia === "Cataluña") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Barcelona <span class="escaños">48 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
    1977: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1977/catalunya/barcelona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSC-PSOE 16 Escaños</span> 
        <span style="color: #FF5733;">PDPC 10 Escaños</span>
        <span style="color: #FFA500;">UCD 9 Escaños</span>
        <span style="color: #CC0000;">PSUC-PCE 9 Escaños</span> 
        <span style="color: #f8471b;">UDC-IDCC 2 Escaños</span>
        <span style="color: #f8af02;">EC-FED 1 Escaño</span> 
        <span style="color: #ADD8E6;">CC-AP 1 Escaño</span>
    </a>
    <br><br>
    El PSC gana las primeras elecciones y sumando a PSUC-PCE, PDPC, UDC-IDCC y EC-FED sacan veintiocho escaños de ventaja a la suma de UCD y CC-AP
Catalanismo)
    <br><br>
    1979: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1979/catalunya/barcelona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSC-PSOE 16 Escaños</span>
        <span style="color: #FFA500;">CC-UCD 12 Escaños</span>
        <span style="color: #CC0000;">PSUC-PCE 8 Escaños</span> 
        <span style="color: #40E0D0;">CIU 10 Escaños</span> 
        <span style="color: #862634;">ERFN 1 Escaño</span>
        <span style="color: #006400;">CD 1 Escaño</span>
        
    </a>
    <br><br>
    El PSC las vuelve a ganar y sumando a PSUC-PCE, CIU y ERFN (Esquerra republicana front nacional) sacan veintidos escaños de ventaja a la suma de CC-UCD y CD
    <br><br>
    1982: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1982/catalunya/barcelona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSC-PSOE 26 Escaños</span>
        <span style="color: #40E0D0;">CIU 12 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP 8 Escaños</span>
        <span style="color: #CC0000;">PSUC 1 Escaño</span>
        <span style="color: #c99f00;">ERC 1 Escaño</span>
    
    </a>
    <br><br>
    El PSC-PSOE las gana y sumando a CIU, PSUC y ERC sacan veinticuatro escaños de ventajas a AP-PDP
    <br><br>
    1986: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1986/catalunya/barcelona" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
        <span style="color: #FF0000;">PSC-PSOE 21 Escaños</span>
        <span style="color: #40E0D0;">CIU 19 Escaños</span> 
        <span style="color: #ADD8E6;">AP-PDP-PL 6 Escaños</span>
        <span style="color: #006400;">CDS 1 Escaño</span>
        <span style="color: #CC0000;">PSUC-ENE 1 Escaño</span>
    </a>
    <br><br>
    El PSC continúa como ganador y sumando a CIU y PSUC-ENE sacan veintisiete escaños de ventaja a la suma de AP-PDP-PL y CDS
    <br><br>
    1989: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1989/catalunya/barcelona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
        <span style="color: #FF0000;">PSC-PSOE 21 Escaños</span>
        <span style="color: #40E0D0;">CIU 19 Escaños</span> 
        <span style="color: #0000FF;">PP 4 Escaños</span> 
        <span style="color: ##098f80;">IC 3 Escaños</span>
        <span style="color: #006400;">CDS 1 Escaño</span>
        
    </a>
    <br><br>
    El PSC continúa como ganador en la comunidad y sumando a CIU e IC sacan treinta y tres escaños de ventaja a la suma de PP y CDS.
    <br><br>
                1993: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1993/catalunya/barcelona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSC-PSOE 18 Escaños</span>
        <span style="color: #40E0D0;">CIU 17 Escaños</span> 
        <span style="color: #0000FF;">PP 9 Escaños</span> 
        <span style="color: ##098f80;">IC 3 Escaños</span>
        <span style="color: #c99f00;">ERC 1 Escaño</span>
                
                </a>
                <br><br>
                El PSC las gana y sumando a CIU, IC y ERC sacan treinta escaños de ventaja al PP.
                <br><br>
                1996: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-1996/catalunya/barcelona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSC-PSOE 20 Escaños</span>
        <span style="color: #40E0D0;">CIU 16 Escaños</span> 
        <span style="color: #0000FF;">PP 9 Escaños</span> 
        <span style="color: ##098f80;">IC-EV 3 Escaños</span>
</a>
<br><br>
El PSC las gana y sumando a CIU e IC-EV sacan treinta escaños de ventaja al PP. 
<br><br>

2000: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2000/catalunya/barcelona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #FF0000;">PSC-PSOE 18 Escaños</span>
        <span style="color: #40E0D0;">CIU 16 Escaños</span> 
        <span style="color: #0000FF;">PP 12 Escaños</span> 
        <span style="color: #c99f00;">ERC 1 Escaño</span>
        <span style="color: ##098f80;">IC-EV 1 Escaño</span>
</a>
<br><br>
El PSC repite como fuerza ganadora y sumando a CIU, ERC e IC-EV sacan veinticuatro escaños de ventaja al PP.
<br><br>
2004: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2004/catalunya/barcelona" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #FF0000;">PSC-PSOE 21 Escaños</span>
                    <span style="color: #40E0D0;">CIU 10 Escaños</span> 
                    <span style="color: #c99f00;">ERC 9 Escaños</span>
                    <span style="color: #0000FF;">PP 8 Escaños</span> 
    
</a>
<br><br>
El PSC las gana y sumando a CIU y ERC sacan treinta y dos escaños de ventaja al PP.   
<br><br>

2008: <a href="https://www.datoselecciones.com/elecciones-generales-congreso-2008/catalunya/barcelona" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #FF0000;">PSC-PSOE 25 Escaños</span>
                    <span style="color: #40E0D0;">CIU 11 Escaños</span>
                    <span style="color: #0000FF;">PP 8 Escaños</span>
                    <span style="color: #c99f00;">ERC 3 Escaños</span>
                    <span style="color: ##098f80;">IC-EV 1 Escaño</span>
    
    
</a>
<br><br>
El PSC sigue ganando y sumando a CIU, ERC e IC-EV sacan treinta y dos escaños de ventaja al PP.
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/generales/congreso/09/08.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
      <span style="color: #40E0D0;">CIU 17 Escaños</span>
    <span style="color: #FF0000;">PSC-PSOE 14 Escaños</span> 
        <span style="color: #0000FF;">PP 11 Escaños</span>
        <span style="color: ##098f80;">IC-EV 3 Escaños</span>
        <span style="color: #c99f00;">ERC 3 Escaños</span>
</a>
<br><br>
CIU las gana y sumando a PSC, IC-EV y ERC sacan veintiseis escaños de ventaja al PP.
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/generales/congreso/09/08.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #800080;">PODEMOS 12 Escaños</span> 
    <span style="color: #c99f00;">ERC CATSÍ 9 Escaños</span>
    <span style="color: #FF0000;">PSC-PSOE 9 Escaños</span>              
    <span style="color: #40E0D0;">DL 8 Escaños</span> 
    <span style="color: #FF7F00;">CS 5 Escaños</span>
    <span style="color: #0000FF;">PP 5 Escaños</span>
                    
                    
                     
</a>
<br><br>
Reconfiguración total de Cataluña: PODEMOS las gana y sumando a ERC CATSÍ, el PSC-PSOE y DL sacan veintiocho escaños de ventaja a la suma de CIUDADANOS y PP.
<br><br>

2016: <a href="https://resultados.elpais.com/elecciones/2016/generales/congreso/09/08.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #800080;">PODEMOS 12 Escaños</span> 
    <span style="color: #c99f00;">ERC CATSÍ 9 Escaños</span>              
    <span style="color: #40E0D0;">CDC 8 Escaños</span>
    <span style="color: #FF0000;">PSC-PSOE 8 Escaños</span>
    <span style="color: #0000FF;">PP 6 Escaños</span> 
    <span style="color: #FF7F00;">CS 5 Escaños</span>

</a>
<br><br>
PODEMOS las sigue ganando y sumando a ERC CATSÍ, CDC y el PSC-PSOE sacan veintiseis escaños de ventaja a la suma de PP y CIUDADANOS. 
<br><br>
2019-28A: <a href="https://resultados.elpais.com/elecciones/2019-28A/generales/congreso/09/08.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">  
                    <span style="color: #c99f00;">ERC SOBERANISTES 15 Escaños</span>
                    <span style="color: #FF0000;">PSC-PSOE 12 Escaños</span>
                    <span style="color: #800080;">PODEMOS 7 Escaños</span> 
                    <span style="color: #40E0D0;">JUNTS 7 Escaños</span>
                    <span style="color: #FF7F00;">CS 5 Escaños</span>
                    <span style="color: #0000FF;">PP 1 Escaño</span>
                    <span style="color: #008000;">VOX 1 Escaño</span>

</a>
<br><br>
IGUAL
<br><br>

2019-10N: <a href="https://resultados.elpais.com/elecciones/2019/generales/congreso/09/08.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #c99f00;">ERC SOBERANISTES 13 Escaños</span> 
     <span style="color: #FF0000;">PSC-PSOE 12 Escaños</span>
    <span style="color: #40E0D0;">JUNTS 8 Escaños</span>
     <span style="color: #800080;">PODEMOS 7 Escaños</span>
    <span style="color: #0000FF;">PP 2 Escaños</span>
    <span style="color: #141818;">CUP 2 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span>
    <span style="color: #FF7F00;">CS 2 Escaños</span>
</a>
<br><br>
IGUAL
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/generales/congreso/09/43/" target="_blank" style="font-size: 1.5em; font-weight: bold;"> 
                    <span style="color: #FF0000;">PSC-PSOE 19 Escaños</span>
                    <span style="color: #FF69B4;">SUMAR 7 Escaños</span>  
                    <span style="color: #c99f00;">ERC 7 Escaños</span>   
                    <span style="color: #40E0D0;">JUNTS 7 Escaños</span>
                    <span style="color: #0000FF;">PP 6 Escaños</span>
                    <span style="color: #008000;">VOX 2 Escaños</span>
    
</a>
<br><br>
IGUAL
<br><br>
En conclusión Cataluña es una comunidad autónoma


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
