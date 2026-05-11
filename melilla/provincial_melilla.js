    function abrirVentana(provincia) {

if (provincia === "Melilla") { 
    const provinciaHtml = `
        <div class="header">
            <h1 style="color: black;">Melilla <span class="escaños">25 Escaños</span></h1>
<p style="color: black; font-size: 1.2em; text-align: center; font-weight: bold;">
                1995: <a href="https://www.datoselecciones.com/ciudad-de-melilla-parlamento-1995" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP 14 Escaños</span> 
                <span style="color: #FF0000;">PSOE 5 Escaños</span>
                <span style="color: #01923f;">CPM 4 Escaños</span>
                <span style="color: #00335f;">UPM 2 Escaños</span> 
                </a>
                <br><br>
                El PP las gana y sumando a UMP (Unión del Pueblo Melillense (UPM) fue un partido político español de ámbito melillense. Fue fundado en 1985 y desapareció en 2003 al integrarse en el Partido Popular) sacan siete escaños de ventaja a la suma de PSOE y CPM. El PP dobla en votos al PSOE, el PSOE gana a CPM por tan solo 1160 votos y CPM gana a UPM por tan solo 1467 votos
                <br><br>
                1999: <a href="https://www.datoselecciones.com/ciudad-de-melilla-parlamento-1999" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #537e03;">GIL 7 Escaños</span> 
                    <span style="color: #01923f;">CPM 5 Escaños</span>
                    <span style="color: #0000FF;">PP 5 Escaños</span> 
                    <span style="color: #00335f;">UPM 3 Escaños</span> 
                    <span style="color: #d95800;">PIM 3 Escaños</span> 
                <span style="color: #FF0000;">PSOE 2 Escaños</span>
                </a>
                <br><br>
                GIL (El Grupo Independiente Liberal (GIL) fue un partido político de España fundado en 1991 en Marbella por el empresario Jesús Gil y Gil. El GIL cesó su actividad política en 2007 al no poder presentarse a las elecciones municipales de dicho año debido a los numerosos casos de corrupción e irregularidades cometidas por miembros del Ayuntamiento de Marbella, dirigido por esta formación política, como el caso Malaya.

Fue una formación política de carácter populista y personalista que se postulaba como una «tercera vía» entre el Partido Popular y el PSOE.​ El himno propagandístico del partido era la canción «The Final Countdown» de Europe, conocida en Marbella como «el tiroriro».​ El gilismo ha sido identificado como representante en España, junto a las experiencias políticas de Mario Conde y José María Ruiz-Mateos, de un populismo protestatario,​ además de como un ejemplo de berlusconización de la política española) las gana y sumando
al PP y UPM sacan sacan cinco escaños de ventaja a la suma de CPM, PIM y PSOE. GIL gana a CPM por tan solo 1569 votos, CPM gana al PP por tan solo 495 votos, el PP gana a UPM por 2080 votos, UPM gana a PIM por tan solo 317 votos y PIM gana al PSOE por tan solo 267 votos
                <br><br>
                2003: <a href="https://www.datoselecciones.com/ciudad-de-melilla-parlamento-2003" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                <span style="color: #0000FF;">PP-UPM 15 Escaños</span> 
                <span style="color: #01923f;">CPM 7 Escaños</span>
                <span style="color: #FF0000;">PSOE 3 Escaños</span>
                </a>
                <br><br>
                El PP-UPM las gana y saca cinco escaños de ventaja a la suma de CPM y PSOE. El PP-UPM dobla en votos a CPM y CPM dobla al PSOE en votos
                <br><br>
                2007: <a href="https://resultados.elpais.com/elecciones/2007/municipales/19/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
                    <span style="color: #0000FF;">PP 15 Escaños</span> 
                <span style="color: #01923f;">CPM 5 Escaños</span>
                <span style="color: #FF0000;">PSOE 5 Escaños</span>
</a>
<br><br>
El PP las gana sacando cinco escaños de ventaja a la suma de CPM y PSOE. El PP dobla a CPM en votos y CPM gana al PSOE por tan solo 999 votos
<br><br>

2011: <a href="https://resultados.elpais.com/elecciones/2011/municipales/19/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 15 Escaños</span> 
                <span style="color: #01923f;">CPM 6 Escaños</span>
                <span style="color: #FF0000;">PSOE 2 Escaños</span>
                <span style="color: #7dabcd;">PPL 2 Escaños</span>
</a>
<br><br>
El PP las gana y sumando a PPL sacan nueve escaños de ventaja a la suma de CPM y PSOE. El PP dobla a CPM en votos, CPM dobla al PSOE en votos y el PSOE gana a PPL (El Partido Populares en Libertad fue un partido político español formado en 2011 y disuelto en 2016. Se autodefine como un partido de centro político, reformista y liberal.) por tan solo 555 votos
<br><br>

2015: <a href="https://resultados.elpais.com/elecciones/2015/municipales/19/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 12 Escaños</span> 
                <span style="color: #01923f;">CPM 7 Escaños</span>
                <span style="color: #FF0000;">PSOE 3 Escaños</span>
                <span style="color: #FF7F00;">CS 2 Escaños</span>
                <span style="color: #7dabcd;">PPL 1 Escaño</span>
</a>
<br><br>
El PP las gana y sumando a CIUDADANOS y PPL sacan cinco escaños de ventaja a CPM y PSOE. El PP gana a CPM por 5209 votos, CPM dobla en votos al PSOE, el PSOE gana a CIUDADANOS por tan solo 1859 votos y CIUDADANOS gana a PPL por tan solo 420 votos
<br><br>

2019: <a href="https://resultados.elpais.com/elecciones/2019/municipales/19/index.html" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 10 Escaños</span> 
                <span style="color: #01923f;">CPM 8 Escaños</span>
                <span style="color: #FF0000;">PSOE 4 Escaños</span>
                <span style="color: #008000;">VOX 2 Escaños</span>
                <span style="color: #FF7F00;">CS 1 Escaño</span>
                
</a>
<br><br>
El PP las gana y sumando a VOX y CIUDADANOS sacan un escaño de ventaja a la suma de CPM y PSOE. El PP gana a CPM por 2471 votos, CPM dobla al PSOE en votos, el PSOE gana a VOX por 2273 votos y VOX gana a CIUDADANOS por tan solo 758 votos
<br><br>

2023: <a href="https://elpais.com/espana/elecciones/municipales/19/52/" target="_blank" style="font-size: 1.5em; font-weight: bold;">
    <span style="color: #0000FF;">PP 14 Escaños</span>
    <span style="color: #01923f;">CPM 5 Escaños</span> 
    <span style="color: #FF0000;">PSOE 3 Escaños</span>
    <span style="color: #008000;">VOX 2 Escaños</span>
    <span style="color: #009c8c;">SOMOS MELILLA 1 Escaño</span>
</a>
<br><br>
El PP las gana y sumando a VOX sacan siete escaños de ventaja a la suma de CPM, PSOE y SOMOS MELILLA. El PP dobla a CPM en votos, CPM gana al PSOE por 2409 votos, el PSOE gana a VOX por tan solo 211 votos y VOX gana a SOMOS MELILLA por tan solo 1429 votos 
<br><br>
En conclusión, Melilla es una ciudad autónoma 
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