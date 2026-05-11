// index.js — generado automáticamente con todas las comunidades

const mensajeBienvenida = document.getElementById('mensaje-bienvenida');
const selectorComunidad = document.getElementById('selector-comunidad');
const botonesComunidad = document.getElementById('botones-comunidad');

const comunidades = {
    andalucia: [
        { label: "🗺 Mapa Provincial", ruta: "andalucia/provincial_andalucia.html", tipo: "provincial" },
        { label: "Evolución Votos — Andalucia", ruta: "andalucia/evolucion_voto_total_andalucia.html", tipo: "total" },
        { label: "Evolución % — Andalucia", ruta: "andalucia/evolucion_voto_porcentaje_andalucia.html", tipo: "porcentaje" },
        { label: "Evolución Votos — Almeria", ruta: "andalucia/evolucion_voto_total_almeria.html", tipo: "total" },
        { label: "Evolución % — Almeria", ruta: "andalucia/evolucion_voto_porcentaje_almeria.html", tipo: "porcentaje" },
        { label: "Escaños — Almeria", ruta: "andalucia/orden_aparicion_almeria.html", tipo: "escanos" },
        { label: "Evolución Votos — Cadiz", ruta: "andalucia/evolucion_voto_total_cadiz.html", tipo: "total" },
        { label: "Evolución % — Cadiz", ruta: "andalucia/evolucion_voto_porcentaje_cadiz.html", tipo: "porcentaje" },
        { label: "Escaños — Cadiz", ruta: "andalucia/orden_aparicion_cadiz.html", tipo: "escanos" },
        { label: "Evolución Votos — Cordoba", ruta: "andalucia/evolucion_voto_total_cordoba.html", tipo: "total" },
        { label: "Evolución % — Cordoba", ruta: "andalucia/evolucion_voto_porcentaje_cordoba.html", tipo: "porcentaje" },
        { label: "Escaños — Cordoba", ruta: "andalucia/orden_aparicion_cordoba.html", tipo: "escanos" },
        { label: "Evolución Votos — Granada", ruta: "andalucia/evolucion_voto_total_granada.html", tipo: "total" },
        { label: "Evolución % — Granada", ruta: "andalucia/evolucion_voto_porcentaje_granada.html", tipo: "porcentaje" },
        { label: "Escaños — Granada", ruta: "andalucia/orden_aparicion_granada.html", tipo: "escanos" },
        { label: "Evolución Votos — Huelva", ruta: "andalucia/evolucion_voto_total_huelva.html", tipo: "total" },
        { label: "Evolución % — Huelva", ruta: "andalucia/evolucion_voto_porcentaje_huelva.html", tipo: "porcentaje" },
        { label: "Escaños — Huelva", ruta: "andalucia/orden_aparicion_huelva.html", tipo: "escanos" },
        { label: "Evolución Votos — Jaen", ruta: "andalucia/evolucion_voto_total_jaen.html", tipo: "total" },
        { label: "Evolución % — Jaen", ruta: "andalucia/evolucion_voto_porcentaje_jaen.html", tipo: "porcentaje" },
        { label: "Escaños — Jaen", ruta: "andalucia/orden_aparicion_jaen.html", tipo: "escanos" },
        { label: "Evolución Votos — Malaga", ruta: "andalucia/evolucion_voto_total_malaga.html", tipo: "total" },
        { label: "Evolución % — Malaga", ruta: "andalucia/evolucion_voto_porcentaje_malaga.html", tipo: "porcentaje" },
        { label: "Escaños — Malaga", ruta: "andalucia/orden_aparicion_malaga.html", tipo: "escanos" },
        { label: "Evolución Votos — Sevilla", ruta: "andalucia/evolucion_voto_total_sevilla.html", tipo: "total" },
        { label: "Evolución % — Sevilla", ruta: "andalucia/evolucion_voto_porcentaje_sevilla.html", tipo: "porcentaje" },
        { label: "Escaños — Sevilla", ruta: "andalucia/orden_aparicion_sevilla.html", tipo: "escanos" },
    ],

    aragon: [
        { label: "🗺 Mapa Provincial", ruta: "aragon/provincial_aragon.html", tipo: "provincial" },
        { label: "Evolución Votos — Aragon", ruta: "aragon/evolucion_voto_total_aragon.html", tipo: "total" },
        { label: "Evolución % — Aragon", ruta: "aragon/evolucion_voto_porcentaje_aragon.html", tipo: "porcentaje" },
        { label: "Evolución Votos — Huesca", ruta: "aragon/evolucion_voto_total_huesca.html", tipo: "total" },
        { label: "Evolución % — Huesca", ruta: "aragon/evolucion_voto_porcentaje_huesca.html", tipo: "porcentaje" },
        { label: "Escaños — Huesca", ruta: "aragon/orden_aparicion_huesca.html", tipo: "escanos" },
        { label: "Evolución Votos — Teruel", ruta: "aragon/evolucion_voto_total_teruel.html", tipo: "total" },
        { label: "Evolución % — Teruel", ruta: "aragon/evolucion_voto_porcentaje_teruel.html", tipo: "porcentaje" },
        { label: "Escaños — Teruel", ruta: "aragon/orden_aparicion_teruel.html", tipo: "escanos" },
        { label: "Evolución Votos — Zaragoza", ruta: "aragon/evolucion_voto_total_zaragoza.html", tipo: "total" },
        { label: "Evolución % — Zaragoza", ruta: "aragon/evolucion_voto_porcentaje_zaragoza.html", tipo: "porcentaje" },
        { label: "Escaños — Zaragoza", ruta: "aragon/orden_aparicion_zaragoza.html", tipo: "escanos" },
    ],

    asturias: [
        { label: "🗺 Mapa Provincial", ruta: "asturias/provincial_asturias.html", tipo: "provincial" },
        { label: "Evolución Votos — Asturias", ruta: "asturias/evolucion_voto_total_asturias.html", tipo: "total" },
        { label: "Evolución % — Asturias", ruta: "asturias/evolucion_voto_porcentaje_asturias.html", tipo: "porcentaje" },
        { label: "Evolución Votos — Centro", ruta: "asturias/evolucion_voto_total_centro.html", tipo: "total" },
        { label: "Evolución % — Centro", ruta: "asturias/evolucion_voto_porcentaje_centro.html", tipo: "porcentaje" },
        { label: "Escaños — Centro", ruta: "asturias/orden_aparicion_centro.html", tipo: "escanos" },
        { label: "Evolución Votos — Occidente", ruta: "asturias/evolucion_voto_total_occidente.html", tipo: "total" },
        { label: "Evolución % — Occidente", ruta: "asturias/evolucion_voto_porcentaje_occidente.html", tipo: "porcentaje" },
        { label: "Escaños — Occidente", ruta: "asturias/orden_aparicion_occidente.html", tipo: "escanos" },
        { label: "Evolución Votos — Oriente", ruta: "asturias/evolucion_voto_total_oriente.html", tipo: "total" },
        { label: "Evolución % — Oriente", ruta: "asturias/evolucion_voto_porcentaje_oriente.html", tipo: "porcentaje" },
        { label: "Escaños — Oriente", ruta: "asturias/orden_aparicion_oriente.html", tipo: "escanos" },
    ],

    baleares: [
        { label: "🗺 Mapa Provincial", ruta: "baleares/provincial_baleares.html", tipo: "provincial" },
        { label: "Evolución Votos — Baleares", ruta: "baleares/evolucion_voto_total_baleares.html", tipo: "total" },
        { label: "Evolución % — Baleares", ruta: "baleares/evolucion_voto_porcentaje_baleares.html", tipo: "porcentaje" },
        { label: "Evolución Votos — Formentera", ruta: "baleares/evolucion_voto_total_formentera.html", tipo: "total" },
        { label: "Evolución % — Formentera", ruta: "baleares/evolucion_voto_porcentaje_formentera.html", tipo: "porcentaje" },
        { label: "Escaños — Formentera", ruta: "baleares/orden_aparicion_formentera.html", tipo: "escanos" },
        { label: "Evolución Votos — Ibiza", ruta: "baleares/evolucion_voto_total_ibiza.html", tipo: "total" },
        { label: "Evolución % — Ibiza", ruta: "baleares/evolucion_voto_porcentaje_ibiza.html", tipo: "porcentaje" },
        { label: "Escaños — Ibiza", ruta: "baleares/orden_aparicion_ibiza.html", tipo: "escanos" },
        { label: "Evolución Votos — Mallorca", ruta: "baleares/evolucion_voto_total_mallorca.html", tipo: "total" },
        { label: "Evolución % — Mallorca", ruta: "baleares/evolucion_voto_porcentaje_mallorca.html", tipo: "porcentaje" },
        { label: "Escaños — Mallorca", ruta: "baleares/orden_aparicion_mallorca.html", tipo: "escanos" },
        { label: "Evolución Votos — Menorca", ruta: "baleares/evolucion_voto_total_menorca.html", tipo: "total" },
        { label: "Evolución % — Menorca", ruta: "baleares/evolucion_voto_porcentaje_menorca.html", tipo: "porcentaje" },
        { label: "Escaños — Menorca", ruta: "baleares/orden_aparicion_menorca.html", tipo: "escanos" },
    ],

    canarias: [
        { label: "🗺 Mapa Provincial", ruta: "canarias/provincial_canarias.html", tipo: "provincial" },
        { label: "Evolución Votos — Canarias", ruta: "canarias/evolucion_voto_total_canarias.html", tipo: "total" },
        { label: "Evolución % — Canarias", ruta: "canarias/evolucion_voto_porcentaje_canarias.html", tipo: "porcentaje" },
        { label: "Evolución Votos — El Hierro", ruta: "canarias/evolucion_voto_total_el_hierro.html", tipo: "total" },
        { label: "Evolución % — El Hierro", ruta: "canarias/evolucion_voto_porcentaje_el_hierro.html", tipo: "porcentaje" },
        { label: "Escaños — El Hierro", ruta: "canarias/orden_aparicion_el_hierro.html", tipo: "escanos" },
        { label: "Evolución Votos — Fuerteventura", ruta: "canarias/evolucion_voto_total_fuerteventura.html", tipo: "total" },
        { label: "Evolución % — Fuerteventura", ruta: "canarias/evolucion_voto_porcentaje_fuerteventura.html", tipo: "porcentaje" },
        { label: "Escaños — Fuerteventura", ruta: "canarias/orden_aparicion_fuerteventura.html", tipo: "escanos" },
        { label: "Evolución Votos — Gran Canaria", ruta: "canarias/evolucion_voto_total_gran_canaria.html", tipo: "total" },
        { label: "Evolución % — Gran Canaria", ruta: "canarias/evolucion_voto_porcentaje_gran_canaria.html", tipo: "porcentaje" },
        { label: "Escaños — Gran Canaria", ruta: "canarias/orden_aparicion_gran_canaria.html", tipo: "escanos" },
        { label: "Evolución Votos — La Gomera", ruta: "canarias/evolucion_voto_total_la_gomera.html", tipo: "total" },
        { label: "Evolución % — La Gomera", ruta: "canarias/evolucion_voto_porcentaje_la_gomera.html", tipo: "porcentaje" },
        { label: "Escaños — La Gomera", ruta: "canarias/orden_aparicion_la_gomera.html", tipo: "escanos" },
        { label: "Evolución Votos — La Palma", ruta: "canarias/evolucion_voto_total_la_palma.html", tipo: "total" },
        { label: "Evolución % — La Palma", ruta: "canarias/evolucion_voto_porcentaje_la_palma.html", tipo: "porcentaje" },
        { label: "Escaños — La Palma", ruta: "canarias/orden_aparicion_la_palma.html", tipo: "escanos" },
        { label: "Evolución Votos — Lanzarote", ruta: "canarias/evolucion_voto_total_lanzarote.html", tipo: "total" },
        { label: "Evolución % — Lanzarote", ruta: "canarias/evolucion_voto_porcentaje_lanzarote.html", tipo: "porcentaje" },
        { label: "Escaños — Lanzarote", ruta: "canarias/orden_aparicion_lanzarote.html", tipo: "escanos" },
        { label: "Evolución Votos — Tenerife", ruta: "canarias/evolucion_voto_total_tenerife.html", tipo: "total" },
        { label: "Evolución % — Tenerife", ruta: "canarias/evolucion_voto_porcentaje_tenerife.html", tipo: "porcentaje" },
        { label: "Escaños — Tenerife", ruta: "canarias/orden_aparicion_tenerife.html", tipo: "escanos" },
        { label: "Evolución Votos — Urna Autonomica", ruta: "canarias/evolucion_voto_total_urna_autonomica.html", tipo: "total" },
        { label: "Evolución % — Urna Autonomica", ruta: "canarias/evolucion_voto_porcentaje_urna_autonomica.html", tipo: "porcentaje" },
        { label: "Escaños — Urna Autonomica", ruta: "canarias/orden_aparicion_urna_autonomica.html", tipo: "escanos" },
    ],

    cantabria: [
        { label: "🗺 Mapa Provincial", ruta: "cantabria/provincial_cantabria.html", tipo: "provincial" },
        { label: "Evolución Votos — Cantabria", ruta: "cantabria/evolucion_voto_total_cantabria.html", tipo: "total" },
        { label: "Evolución % — Cantabria", ruta: "cantabria/evolucion_voto_porcentaje_cantabria.html", tipo: "porcentaje" },
        { label: "Escaños — Cantabria", ruta: "cantabria/orden_aparicion_cantabria.html", tipo: "escanos" },
    ],

    castilla_la_mancha: [
        { label: "🗺 Mapa Provincial", ruta: "castilla_la_mancha/provincial_castilla_la_mancha.html", tipo: "provincial" },
        { label: "Evolución Votos — Castilla La Mancha", ruta: "castilla_la_mancha/evolucion_voto_total_castilla_la_mancha.html", tipo: "total" },
        { label: "Evolución % — Castilla La Mancha", ruta: "castilla_la_mancha/evolucion_voto_porcentaje_castilla_la_mancha.html", tipo: "porcentaje" },
        { label: "Evolución Votos — Albacete", ruta: "castilla_la_mancha/evolucion_voto_total_albacete.html", tipo: "total" },
        { label: "Evolución % — Albacete", ruta: "castilla_la_mancha/evolucion_voto_porcentaje_albacete.html", tipo: "porcentaje" },
        { label: "Escaños — Albacete", ruta: "castilla_la_mancha/orden_aparicion_albacete.html", tipo: "escanos" },
        { label: "Evolución Votos — Ciudad Real", ruta: "castilla_la_mancha/evolucion_voto_total_ciudad_real.html", tipo: "total" },
        { label: "Evolución % — Ciudad Real", ruta: "castilla_la_mancha/evolucion_voto_porcentaje_ciudad_real.html", tipo: "porcentaje" },
        { label: "Escaños — Ciudad Real", ruta: "castilla_la_mancha/orden_aparicion_ciudad_real.html", tipo: "escanos" },
        { label: "Evolución Votos — Cuenca", ruta: "castilla_la_mancha/evolucion_voto_total_cuenca.html", tipo: "total" },
        { label: "Evolución % — Cuenca", ruta: "castilla_la_mancha/evolucion_voto_porcentaje_cuenca.html", tipo: "porcentaje" },
        { label: "Escaños — Cuenca", ruta: "castilla_la_mancha/orden_aparicion_cuenca.html", tipo: "escanos" },
        { label: "Evolución Votos — Guadalajara", ruta: "castilla_la_mancha/evolucion_voto_total_guadalajara.html", tipo: "total" },
        { label: "Evolución % — Guadalajara", ruta: "castilla_la_mancha/evolucion_voto_porcentaje_guadalajara.html", tipo: "porcentaje" },
        { label: "Escaños — Guadalajara", ruta: "castilla_la_mancha/orden_aparicion_guadalajara.html", tipo: "escanos" },
        { label: "Evolución Votos — Toledo", ruta: "castilla_la_mancha/evolucion_voto_total_toledo.html", tipo: "total" },
        { label: "Evolución % — Toledo", ruta: "castilla_la_mancha/evolucion_voto_porcentaje_toledo.html", tipo: "porcentaje" },
        { label: "Escaños — Toledo", ruta: "castilla_la_mancha/orden_aparicion_toledo.html", tipo: "escanos" },
    ],

    castilla_y_leon: [
        { label: "🗺 Mapa Provincial", ruta: "castilla_y_leon/provincial_castilla_y_leon.html", tipo: "provincial" },
        { label: "Evolución Votos — Castilla Y Leon", ruta: "castilla_y_leon/evolucion_voto_total_castilla_y_leon.html", tipo: "total" },
        { label: "Evolución % — Castilla Y Leon", ruta: "castilla_y_leon/evolucion_voto_porcentaje_castilla_y_leon.html", tipo: "porcentaje" },
        { label: "Evolución Votos — Avila", ruta: "castilla_y_leon/evolucion_voto_total_avila.html", tipo: "total" },
        { label: "Evolución % — Avila", ruta: "castilla_y_leon/evolucion_voto_porcentaje_avila.html", tipo: "porcentaje" },
        { label: "Escaños — Avila", ruta: "castilla_y_leon/orden_aparicion_avila.html", tipo: "escanos" },
        { label: "Evolución Votos — Burgos", ruta: "castilla_y_leon/evolucion_voto_total_burgos.html", tipo: "total" },
        { label: "Evolución % — Burgos", ruta: "castilla_y_leon/evolucion_voto_porcentaje_burgos.html", tipo: "porcentaje" },
        { label: "Escaños — Burgos", ruta: "castilla_y_leon/orden_aparicion_burgos.html", tipo: "escanos" },
        { label: "Evolución Votos — Leon", ruta: "castilla_y_leon/evolucion_voto_total_leon.html", tipo: "total" },
        { label: "Evolución % — Leon", ruta: "castilla_y_leon/evolucion_voto_porcentaje_leon.html", tipo: "porcentaje" },
        { label: "Escaños — Leon", ruta: "castilla_y_leon/orden_aparicion_leon.html", tipo: "escanos" },
        { label: "Evolución Votos — Palencia", ruta: "castilla_y_leon/evolucion_voto_total_palencia.html", tipo: "total" },
        { label: "Evolución % — Palencia", ruta: "castilla_y_leon/evolucion_voto_porcentaje_palencia.html", tipo: "porcentaje" },
        { label: "Escaños — Palencia", ruta: "castilla_y_leon/orden_aparicion_palencia.html", tipo: "escanos" },
        { label: "Evolución Votos — Salamanca", ruta: "castilla_y_leon/evolucion_voto_total_salamanca.html", tipo: "total" },
        { label: "Evolución % — Salamanca", ruta: "castilla_y_leon/evolucion_voto_porcentaje_salamanca.html", tipo: "porcentaje" },
        { label: "Escaños — Salamanca", ruta: "castilla_y_leon/orden_aparicion_salamanca.html", tipo: "escanos" },
        { label: "Evolución Votos — Segovia", ruta: "castilla_y_leon/evolucion_voto_total_segovia.html", tipo: "total" },
        { label: "Evolución % — Segovia", ruta: "castilla_y_leon/evolucion_voto_porcentaje_segovia.html", tipo: "porcentaje" },
        { label: "Escaños — Segovia", ruta: "castilla_y_leon/orden_aparicion_segovia.html", tipo: "escanos" },
        { label: "Evolución Votos — Soria", ruta: "castilla_y_leon/evolucion_voto_total_soria.html", tipo: "total" },
        { label: "Evolución % — Soria", ruta: "castilla_y_leon/evolucion_voto_porcentaje_soria.html", tipo: "porcentaje" },
        { label: "Escaños — Soria", ruta: "castilla_y_leon/orden_aparicion_soria.html", tipo: "escanos" },
        { label: "Evolución Votos — Valladolid", ruta: "castilla_y_leon/evolucion_voto_total_valladolid.html", tipo: "total" },
        { label: "Evolución % — Valladolid", ruta: "castilla_y_leon/evolucion_voto_porcentaje_valladolid.html", tipo: "porcentaje" },
        { label: "Escaños — Valladolid", ruta: "castilla_y_leon/orden_aparicion_valladolid.html", tipo: "escanos" },
        { label: "Evolución Votos — Zamora", ruta: "castilla_y_leon/evolucion_voto_total_zamora.html", tipo: "total" },
        { label: "Evolución % — Zamora", ruta: "castilla_y_leon/evolucion_voto_porcentaje_zamora.html", tipo: "porcentaje" },
        { label: "Escaños — Zamora", ruta: "castilla_y_leon/orden_aparicion_zamora.html", tipo: "escanos" },
    ],

    cataluna: [
        { label: "🗺 Mapa Provincial", ruta: "cataluna/provincial_cataluna.html", tipo: "provincial" },
        { label: "Evolución Votos — Cataluna", ruta: "cataluna/evolucion_voto_total_cataluna.html", tipo: "total" },
        { label: "Evolución % — Cataluna", ruta: "cataluna/evolucion_voto_porcentaje_cataluna.html", tipo: "porcentaje" },
        { label: "Evolución Votos — Barcelona", ruta: "cataluna/evolucion_voto_total_barcelona.html", tipo: "total" },
        { label: "Evolución % — Barcelona", ruta: "cataluna/evolucion_voto_porcentaje_barcelona.html", tipo: "porcentaje" },
        { label: "Escaños — Barcelona", ruta: "cataluna/orden_aparicion_barcelona.html", tipo: "escanos" },
        { label: "Evolución Votos — Girona", ruta: "cataluna/evolucion_voto_total_girona.html", tipo: "total" },
        { label: "Evolución % — Girona", ruta: "cataluna/evolucion_voto_porcentaje_girona.html", tipo: "porcentaje" },
        { label: "Escaños — Girona", ruta: "cataluna/orden_aparicion_girona.html", tipo: "escanos" },
        { label: "Evolución Votos — Lleida", ruta: "cataluna/evolucion_voto_total_lleida.html", tipo: "total" },
        { label: "Evolución % — Lleida", ruta: "cataluna/evolucion_voto_porcentaje_lleida.html", tipo: "porcentaje" },
        { label: "Escaños — Lleida", ruta: "cataluna/orden_aparicion_lleida.html", tipo: "escanos" },
        { label: "Evolución Votos — Tarragona", ruta: "cataluna/evolucion_voto_total_tarragona.html", tipo: "total" },
        { label: "Evolución % — Tarragona", ruta: "cataluna/evolucion_voto_porcentaje_tarragona.html", tipo: "porcentaje" },
        { label: "Escaños — Tarragona", ruta: "cataluna/orden_aparicion_tarragona.html", tipo: "escanos" },
    ],

    ceuta: [
        { label: "🗺 Mapa Provincial", ruta: "ceuta/provincial_ceuta.html", tipo: "provincial" },
        { label: "Evolución Votos — Ceuta", ruta: "ceuta/evolucion_voto_total_ceuta.html", tipo: "total" },
        { label: "Evolución % — Ceuta", ruta: "ceuta/evolucion_voto_porcentaje_ceuta.html", tipo: "porcentaje" },
        { label: "Escaños — Ceuta", ruta: "ceuta/orden_aparicion_ceuta.html", tipo: "escanos" },
    ],

    comunidad_valenciana: [
        { label: "🗺 Mapa Provincial", ruta: "comunidad_valenciana/provincial_comunidad_valenciana.html", tipo: "provincial" },
        { label: "Evolución Votos — Comunidad Valenciana", ruta: "comunidad_valenciana/evolucion_voto_total_comunidad_valenciana.html", tipo: "total" },
        { label: "Evolución % — Comunidad Valenciana", ruta: "comunidad_valenciana/evolucion_voto_porcentaje_comunidad_valenciana.html", tipo: "porcentaje" },
        { label: "Evolución Votos — Alicante", ruta: "comunidad_valenciana/evolucion_voto_total_alicante.html", tipo: "total" },
        { label: "Evolución % — Alicante", ruta: "comunidad_valenciana/evolucion_voto_porcentaje_alicante.html", tipo: "porcentaje" },
        { label: "Escaños — Alicante", ruta: "comunidad_valenciana/orden_aparicion_alicante.html", tipo: "escanos" },
        { label: "Evolución Votos — Castellon", ruta: "comunidad_valenciana/evolucion_voto_total_castellon.html", tipo: "total" },
        { label: "Evolución % — Castellon", ruta: "comunidad_valenciana/evolucion_voto_porcentaje_castellon.html", tipo: "porcentaje" },
        { label: "Escaños — Castellon", ruta: "comunidad_valenciana/orden_aparicion_castellon.html", tipo: "escanos" },
        { label: "Evolución Votos — Valencia", ruta: "comunidad_valenciana/evolucion_voto_total_valencia.html", tipo: "total" },
        { label: "Evolución % — Valencia", ruta: "comunidad_valenciana/evolucion_voto_porcentaje_valencia.html", tipo: "porcentaje" },
        { label: "Escaños — Valencia", ruta: "comunidad_valenciana/orden_aparicion_valencia.html", tipo: "escanos" },
    ],

    extremadura: [
        { label: "🗺 Mapa Provincial", ruta: "extremadura/provincial_extremadura.html", tipo: "provincial" },
        { label: "Evolución Votos — Extremadura", ruta: "extremadura/evolucion_voto_total_extremadura.html", tipo: "total" },
        { label: "Evolución % — Extremadura", ruta: "extremadura/evolucion_voto_porcentaje_extremadura.html", tipo: "porcentaje" },
        { label: "Evolución Votos — Badajoz", ruta: "extremadura/evolucion_voto_total_badajoz.html", tipo: "total" },
        { label: "Evolución % — Badajoz", ruta: "extremadura/evolucion_voto_porcentaje_badajoz.html", tipo: "porcentaje" },
        { label: "Escaños — Badajoz", ruta: "extremadura/orden_aparicion_badajoz.html", tipo: "escanos" },
        { label: "Evolución Votos — Caceres", ruta: "extremadura/evolucion_voto_total_caceres.html", tipo: "total" },
        { label: "Evolución % — Caceres", ruta: "extremadura/evolucion_voto_porcentaje_caceres.html", tipo: "porcentaje" },
        { label: "Escaños — Caceres", ruta: "extremadura/orden_aparicion_caceres.html", tipo: "escanos" },
    ],

    galicia: [
        { label: "🗺 Mapa Provincial", ruta: "galicia/provincial_galicia.html", tipo: "provincial" },
        { label: "Evolución Votos — Galicia", ruta: "galicia/evolucion_voto_total_galicia.html", tipo: "total" },
        { label: "Evolución % — Galicia", ruta: "galicia/evolucion_voto_porcentaje_galicia.html", tipo: "porcentaje" },
        { label: "Evolución Votos — A Coruna", ruta: "galicia/evolucion_voto_total_a_coruna.html", tipo: "total" },
        { label: "Evolución % — A Coruna", ruta: "galicia/evolucion_voto_porcentaje_a_coruna.html", tipo: "porcentaje" },
        { label: "Escaños — A Coruna", ruta: "galicia/orden_aparicion_a_coruna.html", tipo: "escanos" },
        { label: "Evolución Votos — Lugo", ruta: "galicia/evolucion_voto_total_lugo.html", tipo: "total" },
        { label: "Evolución % — Lugo", ruta: "galicia/evolucion_voto_porcentaje_lugo.html", tipo: "porcentaje" },
        { label: "Escaños — Lugo", ruta: "galicia/orden_aparicion_lugo.html", tipo: "escanos" },
        { label: "Evolución Votos — Ourense", ruta: "galicia/evolucion_voto_total_ourense.html", tipo: "total" },
        { label: "Evolución % — Ourense", ruta: "galicia/evolucion_voto_porcentaje_ourense.html", tipo: "porcentaje" },
        { label: "Escaños — Ourense", ruta: "galicia/orden_aparicion_ourense.html", tipo: "escanos" },
        { label: "Evolución Votos — Pontevedra", ruta: "galicia/evolucion_voto_total_pontevedra.html", tipo: "total" },
        { label: "Evolución % — Pontevedra", ruta: "galicia/evolucion_voto_porcentaje_pontevedra.html", tipo: "porcentaje" },
        { label: "Escaños — Pontevedra", ruta: "galicia/orden_aparicion_pontevedra.html", tipo: "escanos" },
    ],

    la_rioja: [
        { label: "🗺 Mapa Provincial", ruta: "la_rioja/provincial_la_rioja.html", tipo: "provincial" },
        { label: "Evolución Votos — La Rioja", ruta: "la_rioja/evolucion_voto_total_la_rioja.html", tipo: "total" },
        { label: "Evolución % — La Rioja", ruta: "la_rioja/evolucion_voto_porcentaje_la_rioja.html", tipo: "porcentaje" },
        { label: "Escaños — La Rioja", ruta: "la_rioja/orden_aparicion_la_rioja.html", tipo: "escanos" },
    ],

    madrid: [
        { label: "🗺 Mapa Provincial", ruta: "madrid/provincial_madrid.html", tipo: "provincial" },
        { label: "Evolución Votos — Madrid", ruta: "madrid/evolucion_voto_total_madrid.html", tipo: "total" },
        { label: "Evolución % — Madrid", ruta: "madrid/evolucion_voto_porcentaje_madrid.html", tipo: "porcentaje" },
        { label: "Escaños — Madrid", ruta: "madrid/orden_aparicion_madrid.html", tipo: "escanos" },
    ],

    melilla: [
        { label: "🗺 Mapa Provincial", ruta: "melilla/provincial_melilla.html", tipo: "provincial" },
        { label: "Evolución Votos — Melilla", ruta: "melilla/evolucion_voto_total_melilla.html", tipo: "total" },
        { label: "Evolución % — Melilla", ruta: "melilla/evolucion_voto_porcentaje_melilla.html", tipo: "porcentaje" },
        { label: "Escaños — Melilla", ruta: "melilla/orden_aparicion_melilla.html", tipo: "escanos" },
    ],

    murcia: [
        { label: "🗺 Mapa Provincial", ruta: "murcia/provincial_murcia.html", tipo: "provincial" },
        { label: "Evolución Votos — Murcia", ruta: "murcia/evolucion_voto_total_murcia.html", tipo: "total" },
        { label: "Evolución % — Murcia", ruta: "murcia/evolucion_voto_porcentaje_murcia.html", tipo: "porcentaje" },
        { label: "Escaños — Murcia", ruta: "murcia/orden_aparicion_murcia.html", tipo: "escanos" },
    ],

    navarra: [
        { label: "🗺 Mapa Provincial", ruta: "navarra/provincial_navarra.html", tipo: "provincial" },
        { label: "Evolución Votos — Navarra", ruta: "navarra/evolucion_voto_total_navarra.html", tipo: "total" },
        { label: "Evolución % — Navarra", ruta: "navarra/evolucion_voto_porcentaje_navarra.html", tipo: "porcentaje" },
        { label: "Escaños — Navarra", ruta: "navarra/orden_aparicion_navarra.html", tipo: "escanos" },
    ],

    pais_vasco: [
        { label: "🗺 Mapa Provincial", ruta: "pais_vasco/provincial_pais_vasco.html", tipo: "provincial" },
        { label: "Evolución Votos — Pais Vasco", ruta: "pais_vasco/evolucion_voto_total_pais_vasco.html", tipo: "total" },
        { label: "Evolución % — Pais Vasco", ruta: "pais_vasco/evolucion_voto_porcentaje_pais_vasco.html", tipo: "porcentaje" },
        { label: "Evolución Votos — Alava", ruta: "pais_vasco/evolucion_voto_total_alava.html", tipo: "total" },
        { label: "Evolución % — Alava", ruta: "pais_vasco/evolucion_voto_porcentaje_alava.html", tipo: "porcentaje" },
        { label: "Escaños — Alava", ruta: "pais_vasco/orden_aparicion_alava.html", tipo: "escanos" },
        { label: "Evolución Votos — Guipuzcoa", ruta: "pais_vasco/evolucion_voto_total_guipuzcoa.html", tipo: "total" },
        { label: "Evolución % — Guipuzcoa", ruta: "pais_vasco/evolucion_voto_porcentaje_guipuzcoa.html", tipo: "porcentaje" },
        { label: "Escaños — Guipuzcoa", ruta: "pais_vasco/orden_aparicion_guipuzcoa.html", tipo: "escanos" },
        { label: "Evolución Votos — Vizcaya", ruta: "pais_vasco/evolucion_voto_total_vizcaya.html", tipo: "total" },
        { label: "Evolución % — Vizcaya", ruta: "pais_vasco/evolucion_voto_porcentaje_vizcaya.html", tipo: "porcentaje" },
        { label: "Escaños — Vizcaya", ruta: "pais_vasco/orden_aparicion_vizcaya.html", tipo: "escanos" },
    ],

};

// ─── ELECCIONES GENERALES ──────────────────────────────
const generales = {
    provincial_generales: [
        {
            label: "🗺 Provincial Elecciones Generales",
            ruta: "generales/provincial_mejorado_generales.html",
            tipo: "generales",
            desc: "Análisis histórico provincial completo de todas las elecciones generales desde 1977"
        },
        {
            label: "📈 Evolución Generales Voto %",
            ruta: "generales/evolucion_generales_voto_porcentaje.html",
            tipo: "porcentaje",
            desc: "Evolución del porcentaje de voto en Elecciones Generales"
        },
        {
            label: "🗺 Provincial Mejorado Simulación",
            ruta: "generales/provincial_mejorado_simulacion.html",
            tipo: "generales",
            desc: "Simulación del análisis histórico provincial de elecciones generales"
        },
        {
            label: "🏛️ Provincial Comunidades",
            ruta: "generales/provincial_comunidades.html",
            tipo: "generales",
            desc: "Resultados electorales por comunidades autónomas en elecciones generales"
        },
        {
            label: "🏛️ Provincial Comunidades Simulación",
            ruta: "generales/provincial_comunidades_simulacion.html",
            tipo: "generales",
            desc: "Simulación de resultados por comunidades autónomas en elecciones generales"
        }
    ]
};

const europeas = {
    provincial_europeas: [
        {
            label: "🗺 Provincial Elecciones Europeas",
            ruta: "europeas/provincial_europeas.html",
            tipo: "europeas",
            desc: "Análisis histórico provincial completo de todas las elecciones europeas desde 1977"
        },
        {
            label: "📈 Evolución Europeas Voto %",
            ruta: "europeas/evolucion_europeas_voto_porcentaje.html",
            tipo: "porcentaje",
            desc: "Evolución del porcentaje de voto en Elecciones Europeas"
        },
        {
            label: "📊 Evolución Europeas Voto Total",
            ruta: "europeas/evolucion_europeas_voto_total.html",
            tipo: "total",
            desc: "Evolución del voto total en Elecciones Europeas"
        }
    ]
};

function abrirHTML(ruta) {
    window.open(ruta, '_blank');
}



selectorComunidad.addEventListener('change', () => {
    const comunidad = selectorComunidad.value;
    botonesComunidad.innerHTML = '';
    const hint = document.getElementById('datos-hint');
    const searchWrap = document.getElementById('datos-search-wrap');
    const searchInput = document.getElementById('datos-search-input');
    const imgWrap = document.getElementById('datos-comunidad-imagen');
    const imgBanner = document.getElementById('datos-img-banner');

    // Handle special "generales" value
if (comunidad === 'generales' || comunidad === 'europeas') {
    if (hint) hint.style.display = 'none';
    if (searchWrap) searchWrap.style.display = 'block';
    if (searchInput) searchInput.value = '';

    // Mostrar imagen para generales/europeas
    if (imgWrap && imgBanner) {
        const SPECIAL_IMAGE_URL = {
            generales: 'https://www.elplural.com/uploads/s1/58/61/46/fotonoticia-20181011125257-1920.jpeg',
            europeas:  'https://e01-elmundo.uecdn.es/assets/multimedia/imagenes/2024/01/16/17054405015863.jpg',
        };
        imgBanner.src = SPECIAL_IMAGE_URL[comunidad];
        imgWrap.style.display = 'block';
    }

    const data = comunidad === 'generales'
        ? generales.provincial_generales
        : europeas.provincial_europeas;

    window._datosBotonesActuales = data;
    renderDatosButtons(data);
    return;
}

    if (!comunidades[comunidad]) {
        if (hint) hint.style.display = 'block';
        if (searchWrap) searchWrap.style.display = 'none';
        if (imgWrap) imgWrap.style.display = 'none';
        return;
    }

    if (hint) hint.style.display = 'none';
    if (searchWrap) searchWrap.style.display = 'block';
    if (searchInput) searchInput.value = '';

    // Mostrar imagen de comunidad
    if (imgWrap && imgBanner) {
        // URL fácilmente sustituible: formato COMUNIDAD_IMAGE_URL[comunidad]
        const COMUNIDAD_IMAGE_URL = {
            andalucia: 'https://toursgratis.com/images/data/Apr-2023/644254d42098d68d3.jpeg',
            aragon: 'https://images.squarespace-cdn.com/content/v1/5a86b05bcf81e0af04936cc7/1654266729794-76CB6R1468OOSQM19OSZ/que-ver-en-aragon-zaragoza.jpg',
            asturias: 'https://content-viajes.nationalgeographic.com.es/medio/2025/12/18/adobestock-224444231_08595261_251218132355_1280x854.webp',
            baleares: 'https://static.holidu.com/wp-content/uploads/BLOG125-1.jpg',
            canarias: 'https://static-resources.mirai.com/wp-content/uploads/sites/1738/20220105092535/candelaria-ok-1.jpg',
            cantabria: 'https://media.revistaad.es/photos/60c22972913a6259472a9d0d/master/pass/242540.jpg',
            castilla_la_mancha: 'https://www.surfingtheplanet.com/wp-content/uploads/2022/04/molinos-consuegra-toledo-castilla-mancha.jpg',
            castilla_y_leon: 'https://cdn.surfingtheplanet.com/wp-content/uploads/2022/03/mirador-alcazar-segovia-castilla-leon.jpg?strip=all',
            cataluna: 'https://www.barcelo.com/guia-turismo/wp-content/uploads/ok-plaza-de-catalunya.jpg',
            ceuta: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/9e/5f/e5/caption.jpg?w=1200&h=1200&s=1',
            comunidad_valenciana: 'https://www.viajandoporelmundomundial.com/wp-content/uploads/2019/02/portada-valencia.jpg.webp',
            extremadura: 'https://www.juntaex.es/documents/77055/400553/Reportaje_15_lugares.jpeg/37e87170-d9ea-afaa-a476-8947c59051f8',
            galicia: 'https://www.noticiasgalicia.com/media/noticiasgalicia/images/2024/04/01/2024040118443515700.jpg',
            la_rioja: 'https://lariojapremium.com/wp-content/uploads/2021/08/bartolome.jpg',
            madrid: 'https://www.hotelindiana.es/wp-content/uploads/2022/09/plaza-cibeles-madrid.jpg',
            melilla: 'https://estaticos-cdn.prensaiberica.es/clip/c6c028ba-b61d-4d7d-8611-375ef2ddf931_original-libre-aspect-ratio_default_0.jpg',
            murcia: 'https://inmobimurcia.es/wp-content/uploads/2021/12/cosas-hacer-murcia.jpg',
            navarra: 'https://www.tuscasasrurales.com/blog/wp-content/uploads/2021/02/Castillo-de-Olite-Navarra.jpg',
            pais_vasco: 'https://www.jucamuro.com/gallery/juan_carlos_munoz_rodriguez/1464860093.jpg',
        };
        imgBanner.src = COMUNIDAD_IMAGE_URL[comunidad] || 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/1200px-Flag_of_Spain.svg.png';
        imgWrap.style.display = 'block';
    }

    // Store current buttons data for filtering
    window._datosBotonesActuales = comunidades[comunidad];
    renderDatosButtons(comunidades[comunidad]);
});

function renderDatosButtons(btns) {
    const botonesComunidad = document.getElementById('botones-comunidad');
    if (!botonesComunidad) return;
    botonesComunidad.innerHTML = '';
    btns.forEach(btn => {
        const button = document.createElement('button');
        button.textContent = btn.label;
        button.className = 'btn-grafico btn-' + btn.tipo;
        button.dataset.label = btn.label.toLowerCase();
        if (btn.desc) {
            button.title = btn.desc;
        }
        button.addEventListener('click', () => abrirHTML(btn.ruta));
        botonesComunidad.appendChild(button);
    });
}

function filterDatosButtons() {
    const input = document.getElementById('datos-search-input');
    const noResults = document.getElementById('datos-no-results');
    if (!input || !window._datosBotonesActuales) return;
    const term = input.value.toLowerCase().trim();
    if (!term) {
        renderDatosButtons(window._datosBotonesActuales);
        if (noResults) noResults.style.display = 'none';
        return;
    }
    const filtered = window._datosBotonesActuales.filter(b => b.label.toLowerCase().includes(term));
    renderDatosButtons(filtered);
    if (noResults) noResults.style.display = filtered.length === 0 ? 'block' : 'none';
}


/* ═══════════════ INLINE SCRIPTS FROM HTML ═══════════════ */

    // ══════════════════════════════════════════════════════
    // CALCULADORA AMPLIFICADA — STATE & LOGIC
    // ══════════════════════════════════════════════════════

    // State
    let ccState = {
      method: 'dhondt',
      cut: 5,
      extension: 'c',  // 'c'=circunscripciones, 'u'=única
      totalSeats: 65,
      blank: 0,
      nullVotes: 0,
      census: 0,
      parties: {},   // id -> {name,acronym,color,logo}
      districts: {}, // id -> {name,seats,blank,null,census,method,cut,votes:{pid->votes}}
      results: {},   // districtId -> {pid -> {votes,seats}}
      globalOrder: [],
      chartOrder: 'seats',
      customPartyOrder: [],
      pactoVotes: {}, // pid -> 'si'|'abs'|'no'|null
      _nextPartyId: 1,
      _nextDistrictId: 1,
      _savedAt: null
    };

    const CC_LIB = [{"label":"CASTILLA Y LEÓN","file":"1.CASTILLA Y LE#U00d3N.json"},{"label":"ARAGON 2026","file":"2.ARAGON 2026.json"},{"label":"EXTREMADURA 2025","file":"3.EXTREMADURA 2025.json"},{"label":"EUROPEAS 2024","file":"4.EUROPEAS 2024.json"},{"label":"CATALUÑA 2024 PROVISIONAL","file":"5.CATALU#U00d1A 2024 PROVISIONAL.json"},{"label":"PAIS VASCO 2024 PROVISIONAL","file":"6.PAIS VASCO 2024 PROVISIONAL.json"},{"label":"GALICIA 2024","file":"7.GALICIA 2024.json"},{"label":"ELECCIONES GENERALES 2023","file":"8.ELECCIONES GENERALES 2023.json"},{"label":"ARAGON 2023","file":"9.ARAGON 2023.json"},{"label":"ASTURIAS 2023","file":"10.ASTURIAS 2023.json"},{"label":"BALEARES 2023","file":"11.BALEARES 2023.json"},{"label":"CANARIAS 2023","file":"12.CANARIAS 2023.json"},{"label":"CANTABRIA 2023","file":"13.CANTABRIA 2023.json"},{"label":"CASTILLA LA MANCHA 2023","file":"14.CASTILLA LA MANCHA 2023.json"},{"label":"CEUTA 2023","file":"15.CEUTA 2023.json"},{"label":"COMUNIDAD VALENCIANA 2023","file":"16.COMUNIDAD VALENCIANA 2023.json"},{"label":"EXTREMADURA 2023","file":"17.EXTREMADURA 2023.json"},{"label":"LA RIOJA 2023","file":"18..LA RIOJA 2023.json"},{"label":"MADRID 2023","file":"19.MADRID 2023.json"},{"label":"MELILLA 2023","file":"20.MELILLA 2023.json"},{"label":"MURCIA 2023","file":"21.MURCIA 2023.json"},{"label":"NAVARRA 2023","file":"22.NAVARRA 2023.json"},{"label":"CASTILLA Y LEÓN 2022","file":"23.CASTILLA Y LE#U00d3N 2022.json"},{"label":"ANDALUCIA 2022","file":"24.ANDALUCIA 2022.json"},{"label":"MADRID 2021","file":"25.MADRID 2021.json"},{"label":"CATALUÑA 2021","file":"26.CATALU#U00d1A 2021.json"},{"label":"PAIS VASCO 2020","file":"27.PAIS VASCO 2020.json"},{"label":"GALICIA 2020","file":"28.GALICIA 2020.json"},{"label":"ELECCIONES GENERALES NOVIEMBRE 2019","file":"29. ELECCIONES GENERALES NOVIEMBRE 2019.json"},{"label":"ELECCIONES GENERALES ABRIL 2019","file":"30.ELECCIONES GENERALES ABRIL 2019.json"},{"label":"ARAGON 2019","file":"31.ARAGON 2019.json"},{"label":"ASTURIAS 2019","file":"32.ASTURIAS 2019.json"},{"label":"BALEARES 2019","file":"33.BALEARES 2019.json"},{"label":"CANARIAS 2019","file":"34.CANARIAS 2019.json"},{"label":"CANTABRIA 2019","file":"35.CANTABRIA 2019.json"},{"label":"CASTILLA LA MANCHA 2019","file":"36. CASTILLA LA MANCHA 2019.json"},{"label":"CASTILLA Y LEÓN 2019","file":"37.CASTILLA Y LE#U00d3N 2019.json"},{"label":"COMUNIDAD VALENCIANA 2019","file":"38.COMUNIDAD VALENCIANA 2019.json"},{"label":"EXTREMADURA 2019","file":"39.EXTREMADURA 2019.json"},{"label":"LA RIOJA 2019","file":"40.LA RIOJA 2019.json"},{"label":"MADRID 2019","file":"41.MADRID 2019.json"},{"label":"MURCIA 2019","file":"42.MURCIA 2019.json"},{"label":"NAVARRA 2019","file":"43.NAVARRA 2019.json"},{"label":"PARLAMENTO EUROPEO 2019","file":"44.PARLAMENTO EUROPEO 2019.json"},{"label":"ANDALUCIA 2018","file":"45.ANDALUCIA 2018.json"},{"label":"CATALUÑA 2017","file":"46.CATALU#U00d1A 2017.json"},{"label":"ELECCIONES GENERALES 2016","file":"47.ELECCIONES GENERALES 2016.json"},{"label":"PAIS VASCO 2016","file":"48.PAIS VASCO 2016.json"},{"label":"GALICIA 2016","file":"49.GALICIA 2016.json"},{"label":"ELECIONES GENERALES 2015","file":"50.ELECIONES GENERALES 2015.json"},{"label":"CATALUÑA 2015","file":"51.CATALU#U00d1A 2015.json"},{"label":"EUROPEAS 2014","file":"52.EUROPEAS 2014.json"},{"label":"PAIS VASCO 2012","file":"53.PAIS VASCO 2012.json"},{"label":"CATALUÑA 2012","file":"54.CATALU#U00d1A 2012.json"},{"label":"GALICIA 2012","file":"55.GALICIA 2012.json"},{"label":"ELECCIONES GENERALES 2011","file":"56.ELECCIONES GENERALES 2011.json"},{"label":"CATALUÑA 2010","file":"57.CATALU#U00d1A 2010.json"},{"label":"PAIS VASCO 2009","file":"58.PAIS VASCO 2009.json"},{"label":"GALICIA 2009","file":"59.GALICIA 2009.json"},{"label":"EUROPEAS 2009","file":"60.EUROPEAS 2009.json"},{"label":"ELECCIONES GENERALES 2008","file":"61.ELECCIONES GENERALES 2008.json"},{"label":"CATALUÑA 2006","file":"62.CATALU#U00d1A 2006.json"},{"label":"ELECCIONES GENERALES 2004","file":"63.ELECCIONES GENERALES 2004.json"},{"label":"EUROPEAS 2004","file":"64.EUROPEAS 2004.json"},{"label":"CATALUÑA 2003","file":"65.CATALU#U00d1A 2003.json"},{"label":"ELECCIONES GENERALES 2000","file":"66.ELECCIONES GENERALES 2000.json"},{"label":"CATALUÑA 1999","file":"67.CATALU#U00d1A 1999.json"},{"label":"EUROPEAS 1999","file":"68.EUROPEAS 1999.json"},{"label":"ELECCIONES GENERALES 1996","file":"69.ELECCIONES GENERALES 1996.json"},{"label":"CATALUÑA 1995","file":"70.CATALU#U00d1A 1995.json"},{"label":"EUROPEAS 1994","file":"71.EUROPEAS 1994.json"},{"label":"ELECCIONES GENERALES 1993","file":"72.ELECCIONES GENERALES 1993.json"},{"label":"CATALUÑA 1992","file":"73.CATALU#U00d1A 1992.json"},{"label":"GENERALES 1989","file":"74.GENERALES 1989.json"},{"label":"EUROPEAS 1989","file":"75.EUROPEAS 1989.json"},{"label":"EUROPEAS 1987","file":"76.EUROPEAS 1987.json"},{"label":"ELECCIONES GENERALES 1986","file":"77.ELECCIONES GENERALES 1986.json"},{"label":"CATALUÑA 1984","file":"78.CATALU#U00d1A 1984.json"},{"label":"ELECCIONES GENERALES 1982","file":"79.ELECCIONES GENERALES 1982.json"},{"label":"CATALUÑA 1980","file":"80.CATALU#U00d1A 1980.json"},{"label":"GENERALES 1979","file":"81.GENERALES 1979.json"},{"label":"GENERALES 1977","file":"82.GENERALES 1977.json"}];

    let ccActiveCCTab = 'general';
    let ccActiveDistrict = null;

    // ── Utils ──
    function fmt(n){ if(!n&&n!==0)return '—'; return Number(n).toLocaleString('es-ES'); }
    function fmtPct(v){ return (v||0).toFixed(2)+'%'; }
    function toggleDD(id){
      const m=document.getElementById(id+'-menu');
      if(m) m.classList.toggle('open');
    }
    document.addEventListener('click',e=>{
      document.querySelectorAll('.cc-dropdown-menu.open').forEach(m=>{
        if(!m.closest('.cc-dropdown').contains(e.target)) m.classList.remove('open');
      });
    });

    function switchCCTab(name, btn){
      document.querySelectorAll('.cc-tab').forEach(b=>b.classList.remove('active'));
      document.querySelectorAll('.cc-panel').forEach(p=>p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('cctab-'+name).classList.add('active');
      ccActiveCCTab = name;
      if(name==='circunscripciones'){ ccRenderCircSidebar(); ccUpdateUtilSelects(); }
      if(name==='pactometro'){ ccRenderPactometro(); }
      if(name==='utilidades'){ ccUpdateUtilSelects(); }
    }

    function ccOpenModal(id){ document.getElementById(id).classList.add('open'); }
    function ccCloseModal(id){ document.getElementById(id).classList.remove('open'); }

    // ── D'Hondt algorithm ──
    function dhondt(votes, seats, threshold, method){
      const total = Object.values(votes).reduce((a,b)=>a+b,0);
      const cut = total*(threshold/100);
      const eligible = {};
      for(const [id,v] of Object.entries(votes)){ if(v>=cut) eligible[id]=v; }
      const quotients = [];
      for(const [id,v] of Object.entries(eligible)){
        for(let d=1;d<=seats;d++){
          let q;
          if(method==='saintelague') q=v/(2*d-1);
          else if(method==='modified') q=d===1?v/1.4:v/(2*d-1);
          else if(method==='hare'){ q=null; }
          else q=v/d;  // dhondt
          if(q!==null) quotients.push({id,q,d});
        }
      }
      if(method==='hare'){
        // Hare quota
        const hare=total/seats;
        const result={};
        let assigned=0;
        const remainders={};
        for(const [id,v] of Object.entries(eligible)){
          const s=Math.floor(v/hare);
          result[id]=s; assigned+=s;
          remainders[id]=v/hare-s;
        }
        const rem=seats-assigned;
        const sorted=Object.keys(eligible).sort((a,b)=>remainders[b]-remainders[a]);
        for(let i=0;i<rem&&i<sorted.length;i++) result[sorted[i]]=(result[sorted[i]]||0)+1;
        return result;
      }
      quotients.sort((a,b)=>b.q-a.q||(b.id>a.id?-1:1));
      const result={};
      for(const k of Object.keys(eligible)) result[k]=0;
      for(let i=0;i<seats&&i<quotients.length;i++) result[quotients[i].id]++;
      return result;
    }

    // ── Compute global results from all districts ──
    function ccComputeGlobal(){
      const globalVotes={};
      for(const pid of Object.keys(ccState.parties)) globalVotes[pid]=0;
      let totalVotes=0, totalBlank=ccState.blank, totalNull=ccState.nullVotes;

      for(const did of Object.keys(ccState.districts)){
        const dist=ccState.districts[did];
        for(const pid of Object.keys(dist.votes||{})){
          if(!globalVotes[pid]) globalVotes[pid]=0;
          globalVotes[pid]+=(dist.votes[pid]||0);
          totalVotes+=(dist.votes[pid]||0);
        }
      }

      if(ccState.extension==='u'){
        // Single constituency: only compute global, clear per-district results
        ccState.results={};
        const res=dhondt(globalVotes,ccState.totalSeats,ccState.cut,ccState.method);
        ccState.results['__global__']=res;
      } else {
        // Circunscripciones: compute per district, remove any stale __global__
        delete ccState.results['__global__'];
        for(const did of Object.keys(ccState.districts)){
          const dist=ccState.districts[did];
          const m=dist.method&&dist.method!='0'?dist.method:ccState.method;
          const cut=dist.cut>0?dist.cut:ccState.cut;
          const seats=dist.seats||0;
          const res=dhondt(dist.votes||{},seats,cut,m);
          ccState.results[did]=res;
        }
      }

      return {globalVotes, totalVotes};
    }

    function ccGetTotalSeats(){
      if(ccState.extension==='u') return ccState.totalSeats;
      return Object.values(ccState.districts).reduce((s,d)=>s+(d.seats||0),0);
    }

    function ccGetGlobalSeats(){
      const totals={};
      const useResult = ccState.extension==='u' ? (ccState.results['__global__']||{}) : null;
      for(const pid of Object.keys(ccState.parties)) totals[pid]=0;
      if(useResult){
        for(const [pid,s] of Object.entries(useResult)) totals[pid]=(totals[pid]||0)+s;
      } else {
        for(const res of Object.values(ccState.results)){
          for(const [pid,s] of Object.entries(res)) totals[pid]=(totals[pid]||0)+(s||0);
        }
      }
      return totals;
    }

    function ccGetGlobalVotes(){
      const totals={};
      for(const pid of Object.keys(ccState.parties)) totals[pid]=0;
      for(const dist of Object.values(ccState.districts)){
        for(const [pid,v] of Object.entries(dist.votes||{})){
          totals[pid]=(totals[pid]||0)+v;
        }
      }
      return totals;
    }

    // ── Recalculate everything ──
    function ccRecalculate(){
      ccState.method=document.getElementById('cc-method').value;
      ccState.cut=parseFloat(document.getElementById('cc-cut').value)||0;
      ccState.extension=document.getElementById('cc-ext').value;
      const si=document.getElementById('cc-total-seats');
      if(si) ccState.totalSeats=parseInt(si.value)||65;
      ccComputeGlobal();
      ccUpdateTopBar();
      ccUpdateStats();
      ccRenderResultsTable();
      ccDrawHemiciclo();
      ccRenderPactometro();
    }

    function ccUpdateTopBar(){
      const mnames={dhondt:"D'Hondt",saintelague:"Sainte-Laguë",modified:"Mod. S-L",hare:"Cuota Hare"};
      document.getElementById('cc-top-method').textContent=mnames[ccState.method]||ccState.method;
      document.getElementById('cc-top-ext').textContent=ccState.extension==='u'?'Circunscripción única':'Circunscripciones';
      document.getElementById('cc-top-cut').textContent=ccState.cut+'%';
      document.getElementById('cc-top-seats').textContent=ccGetTotalSeats();
    }

    function ccUpdateStats(){
      let totalVotes=0,totalBlank=ccState.blank||0,totalNull=ccState.nullVotes||0,census=ccState.census||0;
      for(const d of Object.values(ccState.districts)){
        totalVotes+=(d.totalVotes||0);
        totalBlank+=(d.blank||0);
        totalNull+=(d.null||0);
        census+=(d.census||0);
      }
      // recalc totalVotes from votes
      const gv=ccGetGlobalVotes();
      totalVotes=Object.values(gv).reduce((a,b)=>a+b,0);
      const voters=totalVotes+totalBlank+totalNull;
      const part=census>0?((voters/census)*100).toFixed(2)+'%':'—';
      document.getElementById('cc-stat-voters').textContent=fmt(voters);
      document.getElementById('cc-stat-valid').textContent=fmt(totalVotes);
      document.getElementById('cc-stat-blank').textContent=fmt(totalBlank);
      document.getElementById('cc-stat-census').textContent=fmt(census||0);
      document.getElementById('cc-stat-part').textContent=part;
    }

    // ── Results table ──
    function ccRenderResultsTable(){
      const tbody=document.getElementById('cc-results-body');
      if(!tbody) return;
      const gv=ccGetGlobalVotes();
      const gs=ccGetGlobalSeats();
      const totalVotes=Object.values(gv).reduce((a,b)=>a+b,0);
      const totalSeats=ccGetTotalSeats();

      let parties=Object.keys(ccState.parties);
      if(ccState.chartOrder==='seats') parties.sort((a,b)=>(gs[b]||0)-(gs[a]||0));
      else if(ccState.chartOrder==='votes') parties.sort((a,b)=>(gv[b]||0)-(gv[a]||0));
      else if(ccState.chartOrder==='custom'&&ccState.customPartyOrder&&ccState.customPartyOrder.length){
        const _ord=ccState.customPartyOrder;
        parties.sort((a,b)=>{
          const ia=_ord.indexOf(a); const ib=_ord.indexOf(b);
          if(ia===-1&&ib===-1) return 0;
          if(ia===-1) return 1;
          if(ib===-1) return -1;
          return ia-ib;
        });
      }

      tbody.innerHTML='';
      for(const pid of parties){
        const p=ccState.parties[pid];
        if(!p) continue;
        const votes=gv[pid]||0;
        const seats=gs[pid]||0;
        const pct=totalVotes>0?((votes/totalVotes)*100).toFixed(2):0;
        const seatsPct=totalSeats>0?((seats/totalSeats)*100).toFixed(2):0;
        const ve=seats>0?(votes/seats).toFixed(0):'—';
        const tr=document.createElement('tr');
        tr.innerHTML=`
          <td><input type="checkbox" style="width:14px;height:14px;"></td>
          <td>
            <div class="cc-party-name" onclick="ccOpenEditParty('${pid}')">
              <span class="cc-party-dot" style="background:${p.color};"></span>
              <strong style="color:${p.color};">${p.acronym}</strong>
              <span style="font-size:10px;color:var(--text3);margin-left:4px;" title="${p.name}">✏️</span>
            </div>
          </td>
          <td>
            <span style="text-decoration:underline dotted;cursor:pointer;color:var(--accent);" onclick="ccOpenVotesEdit('${pid}','__global__')">${fmt(votes)}</span>
            <span style="font-size:10px;color:var(--text3);margin-left:4px;">(${pct}%)</span>
          </td>
          <td><strong class="cc-seats-badge">${seats}</strong> <span style="font-size:10px;color:var(--text3);">(${seatsPct}%)</span></td>
          <td style="font-size:11px;color:var(--text3);">${fmt(ve)} v/e</td>
          <td><button style="background:none;border:none;color:#ef5350;cursor:pointer;font-size:14px;" onclick="ccDeleteParty('${pid}')" title="Eliminar">🗑</button></td>
        `;
        tbody.appendChild(tr);
      }
    }

    // ── Hemiciclo SVG ──
    function ccDrawHemiciclo(svgId='cc-hemi-svg', targetEl=null){
      const svg=document.getElementById(svgId);
      if(!svg) return;
      const gs=ccGetGlobalSeats();
      const totalSeats=Object.values(gs).reduce((a,b)=>a+b,0)||ccGetTotalSeats();

      let parties=Object.keys(ccState.parties).filter(pid=>ccState.parties[pid]);
      if(ccState.chartOrder==='seats') parties.sort((a,b)=>(gs[b]||0)-(gs[a]||0));
      else if(ccState.chartOrder==='votes'){
        const gv=ccGetGlobalVotes();
        parties.sort((a,b)=>(gv[b]||0)-(gv[a]||0));
      } else if(ccState.chartOrder==='custom'&&ccState.customPartyOrder&&ccState.customPartyOrder.length){
        const _ord=ccState.customPartyOrder;
        parties.sort((a,b)=>{
          const ia=_ord.indexOf(a); const ib=_ord.indexOf(b);
          if(ia===-1&&ib===-1) return 0;
          if(ia===-1) return 1;
          if(ib===-1) return -1;
          return ia-ib;
        });
      }

      // Build seat array
      const seatArr=[];
      for(const pid of parties){
        const n=gs[pid]||0;
        for(let i=0;i<n;i++) seatArr.push({pid,color:ccState.parties[pid]?.color||'#888'});
      }

      const W=500, H=260, cx=W/2, cy=H-10;
      const rows=4;
      svg.setAttribute('viewBox',`0 0 ${W} ${H+20}`);
      svg.innerHTML='';

      if(seatArr.length===0){
        // Empty hemicicle (grey dots)
        const emptyTotal = totalSeats||65;
        const emptySeats=Array.from({length:emptyTotal},()=>({pid:'',color:'#ddd'}));
        _drawHemiDots(svg,emptySeats,cx,cy,rows,W);
        _addHemiLabel(svg,emptyTotal,cx,cy+15);
        return;
      }

      _drawHemiDots(svg,seatArr,cx,cy,rows,W);
      _addHemiLabel(svg,totalSeats,cx,cy+15);

      // Legend
      const leg=document.getElementById('cc-hemi-legend');
      if(leg){
        leg.innerHTML='';
        for(const pid of parties){
          const p=ccState.parties[pid];
          if(!p||(gs[pid]||0)===0) continue;
          const el=document.createElement('div');
          el.style.cssText='display:flex;align-items:center;gap:4px;';
          el.innerHTML=`<span style="width:12px;height:12px;border-radius:50%;background:${p.color};display:inline-block;flex-shrink:0;"></span><span style="color:${p.color};font-weight:700;">${p.acronym}</span><span style="color:var(--text3);">${gs[pid]||0}</span>`;
          leg.appendChild(el);
        }
      }
    }

    function _drawHemiDots(svg, seats, cx, cy, rows, W){
      const n=seats.length;
      if(n===0) return;
      const minR=70, maxR=Math.min(cx-20, cy-20);
      const step=(maxR-minR)/(rows);
      const dotR=Math.max(4,Math.min(10,step*0.35));

      // distribute dots across rows (inner to outer)
      const totalAngle=Math.PI;
      let idx=0;
      const rowSeats=[];
      // Approximate # per row proportional to circumference
      const circums=[];
      for(let r=0;r<rows;r++) circums.push(minR+r*step+step/2);
      const totalCircum=circums.reduce((a,b)=>a+b,0);
      let rem=n;
      for(let r=0;r<rows;r++){
        if(r===rows-1){ rowSeats.push(rem); break; }
        const share=Math.round(n*circums[r]/totalCircum);
        rowSeats.push(share);
        rem-=share;
      }

      for(let r=0;r<rows;r++){
        const radius=minR+r*step;
        const count=rowSeats[r];
        if(count<=0) continue;
        const angleStep=totalAngle/(count+1);
        for(let i=0;i<count;i++){
          if(idx>=seats.length) break;
          const angle=Math.PI-(i+1)*angleStep;
          const x=cx+radius*Math.cos(angle);
          const y=cy-radius*Math.sin(angle);
          const c=document.createElementNS('http://www.w3.org/2000/svg','circle');
          c.setAttribute('cx',x.toFixed(1));
          c.setAttribute('cy',y.toFixed(1));
          c.setAttribute('r',dotR);
          c.setAttribute('fill',seats[idx].color);
          c.setAttribute('opacity','0.92');
          svg.appendChild(c);
          idx++;
        }
      }
    }

    function _addHemiLabel(svg,n,cx,cy){
      const t=document.createElementNS('http://www.w3.org/2000/svg','text');
      t.setAttribute('x',cx);
      t.setAttribute('y',cy+15);
      t.setAttribute('text-anchor','middle');
      t.setAttribute('font-size','32');
      t.setAttribute('font-weight','700');
      t.setAttribute('fill','currentColor');
      t.setAttribute('font-family','inherit');
      t.textContent=n;
      svg.appendChild(t);
    }

    // ── Add/Edit parties ──
    function ccAddParty(){
      document.getElementById('cc-modal-party-title').textContent='Nueva candidatura';
      document.getElementById('cc-modal-party-id').value='';
      document.getElementById('cc-modal-pname').value='';
      document.getElementById('cc-modal-pacronym').value='';
      document.getElementById('cc-modal-pcolor').value='#0056a1';
      document.getElementById('cc-modal-pcolor-prev').style.background='#0056a1';
      document.getElementById('cc-modal-plogo-preview').style.display='none';
      ccOpenModal('cc-modal-party');
    }

    function ccOpenEditParty(pid){
      const p=ccState.parties[pid];
      if(!p) return;
      document.getElementById('cc-modal-party-title').textContent='Editar candidatura';
      document.getElementById('cc-modal-party-id').value=pid;
      document.getElementById('cc-modal-pname').value=p.name||'';
      document.getElementById('cc-modal-pacronym').value=p.acronym||'';
      document.getElementById('cc-modal-pcolor').value=p.color||'#0056a1';
      document.getElementById('cc-modal-pcolor-prev').style.background=p.color||'#0056a1';
      ccOpenModal('cc-modal-party');
    }

    function ccSaveParty(){
      const pid=document.getElementById('cc-modal-party-id').value||String(ccState._nextPartyId++);
      const p={
        name:document.getElementById('cc-modal-pname').value||'Partido',
        acronym:document.getElementById('cc-modal-pacronym').value||'P',
        color:document.getElementById('cc-modal-pcolor').value||'#0056a1'
      };
      ccState.parties[pid]=p;
      // Add to all districts if new
      for(const d of Object.values(ccState.districts)){
        if(!d.votes) d.votes={};
        if(d.votes[pid]===undefined) d.votes[pid]=0;
      }
      ccCloseModal('cc-modal-party');
      ccRecalculate();
      ccUpdateUtilSelects();
    }

    function ccDeleteParty(pid){
      if(!confirm('¿Eliminar esta candidatura?')) return;
      delete ccState.parties[pid];
      for(const d of Object.values(ccState.districts)){ delete (d.votes||{})[pid]; }
      ccRecalculate();
      ccUpdateUtilSelects();
    }

    // ── Edit votes ──
    function ccOpenVotesEdit(pid, did){
      document.getElementById('cc-modal-votes-pid').value=pid;
      document.getElementById('cc-modal-votes-did').value=did;
      // For global, get total votes across districts
      let votes=0;
      if(did==='__global__'){
        for(const d of Object.values(ccState.districts)) votes+=(d.votes||{})[pid]||0;
      } else {
        votes=(ccState.districts[did]?.votes||{})[pid]||0;
      }
      document.getElementById('cc-modal-votes-val').value=votes;
      ccOpenModal('cc-modal-votes');
    }

    function ccSaveVotes(){
      const pid=document.getElementById('cc-modal-votes-pid').value;
      const did=document.getElementById('cc-modal-votes-did').value;
      const val=parseInt(document.getElementById('cc-modal-votes-val').value)||0;
      if(did==='__global__'){
        // Distribute proportionally across districts, or if only one district set it there
        const dids=Object.keys(ccState.districts);
        if(dids.length===1){
          if(!ccState.districts[dids[0]].votes) ccState.districts[dids[0]].votes={};
          ccState.districts[dids[0]].votes[pid]=val;
        } else {
          // Get old total and scale
          let oldTotal=0;
          for(const d of Object.values(ccState.districts)) oldTotal+=(d.votes||{})[pid]||0;
          if(oldTotal===0){
            // split equally
            const each=Math.round(val/dids.length);
            dids.forEach((d,i)=>{ if(!ccState.districts[d].votes) ccState.districts[d].votes={}; ccState.districts[d].votes[pid]=i===dids.length-1?val-(each*(dids.length-1)):each; });
          } else {
            for(const d of Object.values(ccState.districts)){
              if(!d.votes) d.votes={};
              d.votes[pid]=Math.round((d.votes[pid]||0)*(val/oldTotal));
            }
          }
        }
      } else {
        if(!ccState.districts[did]) return;
        if(!ccState.districts[did].votes) ccState.districts[did].votes={};
        ccState.districts[did].votes[pid]=val;
      }
      ccCloseModal('cc-modal-votes');
      ccRecalculate();
      if(ccActiveCCTab==='circunscripciones') ccRenderDistrictMain(ccActiveDistrict);
    }

    // ── New / Import / Export ──
    function ccNuevo(){
      if(!confirm('¿Crear una nueva calculadora? Se perderán los datos actuales.')) return;
      ccState={ method:'dhondt', cut:5, extension:'c', totalSeats:65, blank:0, nullVotes:0, census:0, parties:{}, districts:{}, results:{}, globalOrder:[], chartOrder:'seats', customPartyOrder:[], pactoVotes:{}, _nextPartyId:1, _nextDistrictId:1, _savedAt:null };
      // Add a default district
      ccAddDefaultDistrict();
      ccRecalculate();
      ccRenderCircSidebar();
      ccUpdateUtilSelects();
    }

    function ccAddDefaultDistrict(){
      const did=String(ccState._nextDistrictId++);
      ccState.districts[did]={ name:'Circunscripción 1', seats:65, blank:0, null:0, census:0, method:0, cut:0, votes:{} };
      for(const pid of Object.keys(ccState.parties)) ccState.districts[did].votes[pid]=0;
    }

    function ccImportarJSON(e){
      const file=e.target.files[0]; if(!file) return;
      const reader=new FileReader();
      reader.onload=ev=>{
        try{
          const data=JSON.parse(ev.target.result);
          ccLoadFromJSON(data);
        }catch(err){ alert('Error al leer el JSON: '+err.message); }
      };
      reader.readAsText(file);
      e.target.value='';
    }

    function ccLoadFromJSON(data){
      ccState.method=data.method||'dhondt';
      ccState.cut=parseFloat(data.cut)||5;
      ccState.extension=data.extension||'c';
      ccState.blank=data.blank||0;
      ccState.nullVotes=data.null||0;
      ccState.census=data.census||0;
      ccState._nextPartyId=1;
      ccState._nextDistrictId=1;
      ccState.parties={};
      ccState.districts={};
      ccState.results={};
      ccState.pactoVotes={};

      // Load parties
      if(data.parties){
        for(const [id,p] of Object.entries(data.parties)){
          ccState.parties[id]={ name:p.name, acronym:p.acronym||p.name, color:p.color||'#888' };
          ccState._nextPartyId=Math.max(ccState._nextPartyId,parseInt(id)+1);
        }
      }
      // Compute total seats from districts
      let totalDistSeats=0;
      // Load districts
      if(data.districts){
        for(const [did,d] of Object.entries(data.districts)){
          const votes={};
          // Get votes from results if available
          const dr=(data.results||{})[did]||{};
          for(const pid of Object.keys(ccState.parties)){
            votes[pid]=(dr[pid]?.votes!==undefined)?dr[pid].votes:0;
          }
          ccState.districts[did]={ name:d.name||'Circunscripción '+did, seats:d.seats||1, blank:d.blank||0, null:d.null||0, census:d.census||0, method:d.method||0, cut:d.cut||0, votes };
          totalDistSeats+=d.seats||0;
          ccState._nextDistrictId=Math.max(ccState._nextDistrictId,parseInt(did)+1);
        }
      } else {
        // Single district
        const did=String(ccState._nextDistrictId++);
        const votes={};
        if(data.parties) for(const [pid,p] of Object.entries(data.parties)) votes[pid]=p.votes||0;
        ccState.districts[did]={ name:'Circunscripción única', seats:data.seats||ccState.totalSeats||65, blank:data.blank||0, null:data.null||0, census:data.census||0, method:0, cut:0, votes };
        totalDistSeats=data.seats||ccState.totalSeats||65;
      }

      ccState.totalSeats=totalDistSeats||data.seats||65;

      // Update UI
      document.getElementById('cc-method').value=ccState.method;
      document.getElementById('cc-cut').value=ccState.cut;
      document.getElementById('cc-ext').value=ccState.extension;
      const si=document.getElementById('cc-total-seats');
      if(si) si.value=ccState.totalSeats;

      ccRecalculate();
      ccRenderCircSidebar();
      ccUpdateUtilSelects();
      ccMarkSaved();
    }

    function ccExportarJSON(){ AUTH.requireAuth(_ccExportarJSONImpl, 'Inicia sesión para exportar.'); }
    function _ccExportarJSONImpl(){
      const data={ method:ccState.method, cut:String(ccState.cut), extension:ccState.extension, blank:ccState.blank, votes:Object.values(ccState.districts).reduce((a,d)=>a+Object.values(d.votes||{}).reduce((x,y)=>x+y,0),0), null:ccState.nullVotes, census:ccState.census, parties:{}, districts:{}, results:{} };
      for(const [pid,p] of Object.entries(ccState.parties)){
        const gv=ccGetGlobalVotes();
        const gs=ccGetGlobalSeats();
        data.parties[pid]={name:p.name,acronym:p.acronym,color:p.color,votes:gv[pid]||0,seats:gs[pid]||0};
      }
      for(const [did,d] of Object.entries(ccState.districts)){
        data.districts[did]={name:d.name,seats:d.seats,blank:d.blank||0,null:d.null||0,census:d.census||0,method:d.method||0,cut:d.cut||0};
        const res=ccState.results[did]||{};
        data.results[did]={};
        for(const pid of Object.keys(ccState.parties)) data.results[did][pid]={votes:(d.votes||{})[pid]||0,seats:res[pid]||0};
      }
      const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});
      const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='eleccion.json'; a.click();
    }

    function ccDownloadCSV(){ ccOpenModal('cc-modal-csv'); }
    function ccExportarCSV(){ AUTH.requireAuth(() => ccOpenModal('cc-modal-csv'), 'Inicia sesión para exportar.'); }

    function ccDoDownloadCSV(){
      const inclBlank=document.getElementById('cc-csv-blank').checked;
      const inclNull=document.getElementById('cc-csv-null').checked;
      const inclCensus=document.getElementById('cc-csv-census').checked;
      const sep=';'; const q='"';
      const gv=ccGetGlobalVotes(); const gs=ccGetGlobalSeats();
      let rows=[['Candidatura','Votos','%Votos','Escaños','%Escaños']];
      const totalV=Object.values(gv).reduce((a,b)=>a+b,0);
      const totalS=ccGetTotalSeats();
      for(const pid of Object.keys(ccState.parties)){
        const p=ccState.parties[pid];
        const v=gv[pid]||0,s=gs[pid]||0;
        rows.push([p.name,v,totalV>0?((v/totalV)*100).toFixed(2):0,s,totalS>0?((s/totalS)*100).toFixed(2):0]);
      }
      if(inclBlank) rows.push(['Votos en blanco',ccState.blank,'','','']);
      if(inclNull) rows.push(['Votos nulos',ccState.nullVotes,'','','']);
      if(inclCensus) rows.push(['Censo',ccState.census,'','','']);
      const csv=rows.map(r=>r.map(c=>`${q}${c}${q}`).join(sep)).join('\n');
      const blob=new Blob(['\uFEFF'+csv],{type:'text/csv;charset=utf-8;'});
      const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='resultados.csv'; a.click();
      ccCloseModal('cc-modal-csv');
    }

    function ccDownloadHemiciclo(){
      const svg=document.getElementById('cc-hemi-svg');
      const data=new XMLSerializer().serializeToString(svg);
      const blob=new Blob([data],{type:'image/svg+xml'});
      const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='hemiciclo.svg'; a.click();
    }

    function ccOpenChartConfig(){
      ccOpenModal('cc-modal-chart-cfg');
      document.getElementById('cc-chart-order').value=ccState.chartOrder;
      ccToggleCustomOrder();
      if(ccState.chartOrder==='custom') ccBuildCustomOrderList();
    }

    function ccToggleCustomOrder(){
      const v=document.getElementById('cc-chart-order').value;
      const sec=document.getElementById('cc-custom-order-section');
      sec.style.display=(v==='custom')?'block':'none';
      if(v==='custom') ccBuildCustomOrderList();
    }

    function ccBuildCustomOrderList(){
      const list=document.getElementById('cc-custom-order-list');
      list.innerHTML='';
      const gs=ccGetGlobalSeats();
      const gv=ccGetGlobalVotes();
      // Current custom order, or fallback to seats order
      let pids=ccState.customPartyOrder&&ccState.customPartyOrder.length>0
        ? ccState.customPartyOrder.filter(id=>ccState.parties[id])
        : Object.keys(ccState.parties).sort((a,b)=>(gs[b]||0)-(gs[a]||0));
      // Add any new parties not yet in the order
      Object.keys(ccState.parties).forEach(pid=>{ if(!pids.includes(pid)) pids.push(pid); });
      pids.forEach((pid,idx)=>{
        const p=ccState.parties[pid];
        if(!p) return;
        const item=document.createElement('div');
        item.dataset.pid=pid;
        item.draggable=true;
        item.style.cssText='display:flex;align-items:center;gap:8px;padding:6px 10px;background:var(--surface);border:1px solid var(--border);border-radius:7px;cursor:grab;user-select:none;font-size:12px;';
        item.innerHTML=`<span style="color:var(--text3);font-size:14px;cursor:grab;">⠿</span><span style="width:12px;height:12px;border-radius:50%;background:${p.color};flex-shrink:0;display:inline-block;"></span><strong style="color:${p.color};">${p.acronym}</strong><span style="color:var(--text3);font-size:11px;flex:1;">${p.name}</span>`;
        // Drag events
        item.addEventListener('dragstart',e=>{
          e.dataTransfer.effectAllowed='move';
          e.dataTransfer.setData('text/plain',pid);
          item.style.opacity='0.4';
        });
        item.addEventListener('dragend',()=>{ item.style.opacity='1'; });
        item.addEventListener('dragover',e=>{
          e.preventDefault();
          e.dataTransfer.dropEffect='move';
          const rect=item.getBoundingClientRect();
          const mid=rect.top+rect.height/2;
          item.style.borderTop=e.clientY<mid?'2px solid var(--accent)':'1px solid var(--border)';
          item.style.borderBottom=e.clientY>=mid?'2px solid var(--accent)':'1px solid var(--border)';
        });
        item.addEventListener('dragleave',()=>{
          item.style.borderTop='1px solid var(--border)';
          item.style.borderBottom='1px solid var(--border)';
        });
        item.addEventListener('drop',e=>{
          e.preventDefault();
          item.style.borderTop='1px solid var(--border)';
          item.style.borderBottom='1px solid var(--border)';
          const draggedPid=e.dataTransfer.getData('text/plain');
          if(draggedPid===pid) return;
          const items=Array.from(list.children);
          const fromIdx=items.findIndex(el=>el.dataset.pid===draggedPid);
          const toIdx=items.findIndex(el=>el.dataset.pid===pid);
          const rect=item.getBoundingClientRect();
          const insertBefore=e.clientY<rect.top+rect.height/2;
          const draggedEl=items[fromIdx];
          if(insertBefore) list.insertBefore(draggedEl,item);
          else list.insertBefore(draggedEl,item.nextSibling);
        });
        list.appendChild(item);
      });
    }

    function ccSaveChartCfg(){
      ccState.chartOrder=document.getElementById('cc-chart-order').value;
      if(ccState.chartOrder==='custom'){
        ccState.customPartyOrder=Array.from(document.getElementById('cc-custom-order-list').children).map(el=>el.dataset.pid);
      }
      ccCloseModal('cc-modal-chart-cfg');
      ccRecalculate();
    }

    // ── Library ──
    function ccOpenLibrary(){
      ccOpenModal('cc-modal-library');
      ccFilterLibrary();
    }
    function ccFilterLibrary(){
      const q=(document.getElementById('cc-library-search').value||'').toLowerCase();
      const list=document.getElementById('cc-library-list');
      list.innerHTML='';
      CC_LIB.filter(e=>e.label.toLowerCase().includes(q)).forEach(e=>{
        const div=document.createElement('div');
        div.className='cc-library-item';
        div.textContent=e.label;
        div.onclick=()=>ccLoadLibrary(e.file,e.label);
        list.appendChild(div);
      });
    }
    function ccLoadLibrary(file,label){
      AUTH.requireAuth(() => _ccLoadLibraryImpl(file,label), 'Inicia sesión para cargar elecciones de la biblioteca.');
    }
    function _ccLoadLibraryImpl(file,label){
      // Try inline embedded data first (works without server)
      if(typeof BALLOTLY_JSON_DATA !== 'undefined' && BALLOTLY_JSON_DATA[file]) {
        ccLoadFromJSON(BALLOTLY_JSON_DATA[file]);
        ccCloseModal('cc-modal-library');
        ccMarkSaved();
        return;
      }
      // Fallback: fetch from filesystem
      const basePath='../json_fijos/'+file;
      fetch(basePath).then(r=>r.json()).then(data=>{
        ccLoadFromJSON(data);
        ccCloseModal('cc-modal-library');
        ccMarkSaved();
      }).catch(err=>{
        fetch('json_fijos/'+file).then(r=>r.json()).then(data=>{
          ccLoadFromJSON(data);
          ccCloseModal('cc-modal-library');
        }).catch(()=>alert('No se pudo cargar: '+label+'. Asegúrate de servir la página desde un servidor web.'));
      });
    }

    // ── Save ──
    function ccGuardar(){
      try{ localStorage.setItem('cc_state_v1',JSON.stringify(ccState)); }catch(e){}
      ccMarkSaved();
    }
    function ccMarkSaved(){
      ccState._savedAt=new Date().toLocaleTimeString();
      const dot=document.getElementById('cc-save-dot');
      const txt=document.getElementById('cc-save-text');
      if(dot) dot.style.background='#4caf50';
      if(txt) txt.textContent='Guardado a las '+ccState._savedAt;
    }

    // ── Circunscripciones sidebar ──
    function ccRenderCircSidebar(){
      const q=(document.getElementById('cc-circ-search')?.value||'').toLowerCase();
      const list=document.getElementById('cc-circ-list');
      if(!list) return;
      list.innerHTML='';
      for(const [did,d] of Object.entries(ccState.districts)){
        if(q&&!d.name.toLowerCase().includes(q)) continue;
        const div=document.createElement('div');
        div.className='cc-circ-item'+(ccActiveDistrict===did?' active':'');
        div.innerHTML=`<span>${d.name}</span><span class="cc-circ-badge">${d.seats}</span>`;
        div.onclick=()=>{ ccActiveDistrict=did; ccRenderCircSidebar(); ccRenderDistrictMain(did); };
        list.appendChild(div);
      }
    }

    function ccAddDistrict(){ ccOpenModal('cc-modal-add-district'); }
    function ccConfirmAddDistrict(){
      const name=document.getElementById('cc-add-dist-name').value||'Nueva circunscripción';
      const seats=parseInt(document.getElementById('cc-add-dist-seats').value)||10;
      const did=String(ccState._nextDistrictId++);
      const votes={};
      for(const pid of Object.keys(ccState.parties)) votes[pid]=0;
      ccState.districts[did]={ name, seats, blank:0, null:0, census:0, method:0, cut:0, votes };
      ccCloseModal('cc-modal-add-district');
      ccActiveDistrict=did;
      ccRenderCircSidebar();
      ccRenderDistrictMain(did);
      ccRecalculate();
    }

    function ccDeleteDistrict(){
      if(!ccActiveDistrict) return;
      if(!confirm('¿Eliminar esta circunscripción?')) return;
      delete ccState.districts[ccActiveDistrict];
      delete ccState.results[ccActiveDistrict];
      ccActiveDistrict=null;
      document.getElementById('cc-circ-main-area').innerHTML='<div style="color:var(--text3);text-align:center;padding:60px 20px;">Selecciona una circunscripción</div>';
      ccRenderCircSidebar();
      ccRecalculate();
    }

    function ccRenderDistrictMain(did){
      const d=ccState.districts[did];
      if(!d) return;
      const area=document.getElementById('cc-circ-main-area');
      const res=ccState.results[did]||{};
      const distVotes=d.votes||{};
      const totalDistV=Object.values(distVotes).reduce((a,b)=>a+b,0);

      // Compute último escaño
      const ue=ccGetUltimoEscano(did,d,res);

      area.innerHTML=`
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:10px;margin-bottom:14px;">
          <div class="cc-field"><label>Nombre</label><input type="text" class="cc-sel" value="${d.name}" onchange="ccUpdateDistrict('${did}','name',this.value)" style="width:100%;"></div>
          <div class="cc-field"><label>Escaños</label><input type="number" class="cc-sel" value="${d.seats}" onchange="ccUpdateDistrict('${did}','seats',parseInt(this.value)||1);ccRecalculate();ccRenderDistrictMain('${did}')" style="width:100%;"></div>
          <div class="cc-field"><label>Votos nulos</label><input type="number" class="cc-sel" value="${d.null||0}" onchange="ccUpdateDistrict('${did}','null',parseInt(this.value)||0)" style="width:100%;"></div>
          <div class="cc-field"><label>Censo electoral</label><input type="number" class="cc-sel" value="${d.census||0}" onchange="ccUpdateDistrict('${did}','census',parseInt(this.value)||0)" style="width:100%;"></div>
          <div class="cc-field"><label>Método</label><select class="cc-sel" onchange="ccUpdateDistrict('${did}','method',this.value);ccRecalculate();ccRenderDistrictMain('${did}')" style="width:100%;">
            <option value="0"${(d.method=='0'||!d.method)?'selected':''}>General</option>
            <option value="dhondt"${d.method==='dhondt'?'selected':''}>D'Hondt</option>
            <option value="saintelague"${d.method==='saintelague'?'selected':''}>Sainte-Laguë</option>
          </select></div>
          <div class="cc-field"><label>Corte (%)</label><input type="number" class="cc-sel" value="${d.cut||0}" onchange="ccUpdateDistrict('${did}','cut',parseFloat(this.value)||0);ccRecalculate();ccRenderDistrictMain('${did}')" style="width:100%;"></div>
          <div class="cc-field"><label>Votos en blanco</label><input type="number" class="cc-sel" value="${d.blank||0}" onchange="ccUpdateDistrict('${did}','blank',parseInt(this.value)||0)" style="width:100%;"></div>
        </div>
        <div style="display:flex;justify-content:flex-end;gap:8px;margin-bottom:10px;">
          <div style="font-size:11px;color:var(--text3);display:flex;align-items:center;gap:8px;">
            <span>Votos totales: <strong>${fmt(totalDistV)}</strong></span>
            <span>Escaños repartidos: <strong>${Object.values(res).reduce((a,b)=>a+b,0)}</strong></span>
            <span>Corte electoral: <strong>${fmt(totalDistV*((d.cut||ccState.cut)/100))}</strong></span>
          </div>
        </div>
        ${ue?`<div class="cc-ultimo-escano">${ue}</div>`:''}
        <div style="margin-top:14px;">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
            <div style="font-size:12px;font-weight:700;color:var(--text2);">Datos</div>
            <div style="display:flex;gap:6px;">
              <button class="cc-btn cc-btn-green" onclick="ccAddPartyToDistrict('${did}')" style="font-size:11px;padding:4px 10px;">Añadir</button>
              <button class="cc-btn cc-btn-danger" onclick="ccDeletePartyFromDistrict('${did}')" style="font-size:11px;padding:4px 10px;">Eliminar</button>
            </div>
          </div>
          <table class="cc-results-table">
            <thead><tr><th>Candidatura</th><th>Votos (%válidos)</th><th>Escaños</th></tr></thead>
            <tbody>${Object.keys(ccState.parties).map(pid=>{
              const p=ccState.parties[pid];
              const v=distVotes[pid]||0;
              const s=res[pid]||0;
              const pct=totalDistV>0?((v/totalDistV)*100).toFixed(2):0;
              return `<tr>
                <td><span class="cc-party-name"><span class="cc-party-dot" style="background:${p.color};"></span><strong style="color:${p.color};">${p.acronym}</strong></span></td>
                <td><span style="text-decoration:underline dotted;cursor:pointer;color:var(--accent);" onclick="ccOpenVotesEdit('${pid}','${did}')">${fmt(v)}</span> <span style="font-size:10px;color:var(--text3);">(${pct}%)</span></td>
                <td><strong>${s}</strong></td>
              </tr>`;
            }).join('')}</tbody>
          </table>
        </div>
        <div style="margin-top:14px;display:grid;grid-template-columns:1fr 1fr;gap:14px;">
          <div>
            <svg id="cc-dist-hemi" width="100%" viewBox="0 0 500 280" style="max-height:200px;"></svg>
          </div>
        </div>
      `;
      // Draw district hemicicle
      const distSeats=[];
      const parties=Object.keys(ccState.parties).sort((a,b)=>(res[b]||0)-(res[a]||0));
      for(const pid of parties){ const n=res[pid]||0; for(let i=0;i<n;i++) distSeats.push({pid,color:ccState.parties[pid]?.color||'#888'}); }
      if(distSeats.length===0){
        const total=d.seats||10;
        const empty=Array.from({length:total},()=>({pid:'',color:'#555'}));
        _drawHemiDots(document.getElementById('cc-dist-hemi'),empty,250,260,4,500);
        _addHemiLabel(document.getElementById('cc-dist-hemi'),total,250,275);
      } else {
        _drawHemiDots(document.getElementById('cc-dist-hemi'),distSeats,250,260,4,500);
        _addHemiLabel(document.getElementById('cc-dist-hemi'),distSeats.length,250,275);
      }
    }

    function ccGetUltimoEscano(did,d,res){
      // Simulate who gets the last seat and who was close
      const votes=d.votes||{};
      const totalVotes=Object.values(votes).reduce((a,b)=>a+b,0);
      const cut=((d.cut||0)>0?d.cut:ccState.cut);
      const cutVotes=totalVotes*(cut/100);
      const method=d.method&&d.method!='0'?d.method:ccState.method;
      const seats=d.seats||1;

      if(seats<1||Object.keys(votes).length===0) return null;

      // Find who got the last seat (lowest quotient that got a seat)
      const eligible={};
      for(const [pid,v] of Object.entries(votes)){ if(v>=cutVotes&&v>0) eligible[pid]=v; }
      const quotients=[];
      for(const [pid,v] of Object.entries(eligible)){
        for(let dk=1;dk<=seats;dk++){
          let q=method==='saintelague'?v/(2*dk-1):(method==='modified'?dk===1?v/1.4:v/(2*dk-1):v/dk);
          quotients.push({pid,q,dk});
        }
      }
      quotients.sort((a,b)=>b.q-a.q);
      if(quotients.length<seats) return null;
      const lastQ=quotients[seats-1];
      const winner=lastQ.pid;
      const winnerVotes=votes[winner]||0;
      const winnerQ=lastQ.q;

      // Competitors: parties with quotient just below
      const others=quotients.slice(seats).filter(q=>q.pid!==winner).slice(0,3);
      const p=ccState.parties[winner];
      if(!p) return null;

      const othersHTML=others.map((o,i)=>{
        const op=ccState.parties[o.pid];
        if(!op) return '';
        const diff=Math.ceil(winnerQ*o.dk-votes[o.pid]+1);
        return `<span class="cc-cerca-item" style="border-color:${op.color};color:${op.color};">${i+1}. ${op.acronym} (${fmt(diff)})</span>`;
      }).join('');

      return `<div class="ue-label">Último escaño</div>
        <div style="display:flex;align-items:center;gap:10px;margin-top:4px;flex-wrap:wrap;">
          <span class="cc-ultimo-badge" style="background:${p.color};">${p.acronym}</span>
          <span style="color:var(--text3);">vs.</span>
          <div class="cc-cerca-list">${othersHTML}</div>
        </div>`;
    }

    function ccUpdateDistrict(did,key,val){
      if(!ccState.districts[did]) return;
      ccState.districts[did][key]=val;
    }

    function ccAddPartyToDistrict(did){
      // Just open add party dialog
      ccAddParty();
    }
    function ccDeletePartyFromDistrict(did){
      // Not implemented inline; user can delete globally
    }

    // ── Pactómetro ──
    function ccRenderPactometro(){
      const cardsEl=document.getElementById('cc-pacto-cards');
      if(!cardsEl) return;
      const gs=ccGetGlobalSeats();
      const totalSeats=ccGetTotalSeats();
      const majority=Math.floor(totalSeats/2)+1;

      // Sort by seats
      const parties=Object.keys(ccState.parties).filter(pid=>(gs[pid]||0)>0).sort((a,b)=>(gs[b]||0)-(gs[a]||0));

      cardsEl.innerHTML='';
      for(const pid of parties){
        const p=ccState.parties[pid];
        const seats=gs[pid]||0;
        const vote=ccState.pactoVotes[pid]||null;
        const card=document.createElement('div');
        card.style.cssText='background:var(--surface);border:1px solid var(--border);border-radius:9px;padding:12px;';
        card.innerHTML=`
          <div style="display:flex;align-items:center;justify-content:space-between;">
            <div style="display:flex;align-items:center;gap:8px;">
              <strong style="color:${p.color};">${p.acronym}</strong>
              <span style="background:${p.color};color:#fff;border-radius:5px;padding:2px 8px;font-size:12px;font-weight:700;">${seats}</span>
            </div>
            <div style="display:flex;gap:6px;">
              <button class="cc-vote-btn si${vote==='si'?' active':''}" onclick="ccPactoVote('${pid}','si')">✓ Sí</button>
              <button class="cc-vote-btn abs${vote==='abs'?' active':''}" onclick="ccPactoVote('${pid}','abs')">? Abs</button>
              <button class="cc-vote-btn no${vote==='no'?' active':''}" onclick="ccPactoVote('${pid}','no')">✗ No</button>
            </div>
          </div>`;
        cardsEl.appendChild(card);
      }

      // Compute totals
      let si=0,abs=0,no=0,none=0;
      for(const pid of parties){
        const s=gs[pid]||0;
        const v=ccState.pactoVotes[pid]||null;
        if(v==='si') si+=s;
        else if(v==='abs') abs+=s;
        else if(v==='no') no+=s;
        else none+=s;
      }

      document.getElementById('cc-pacto-si-count').textContent=si;
      document.getElementById('cc-pacto-no-count').textContent=no;
      document.getElementById('cc-pacto-left-val').textContent=si;
      document.getElementById('cc-pacto-center-val').textContent=majority;
      document.getElementById('cc-pacto-right-val').textContent=no;
      document.getElementById('cc-pacto-mayoria-label').textContent=`Mayoría absoluta (${majority})`;

      // Bar
      const bsi=document.getElementById('cc-pacto-bar-si');
      const babs=document.getElementById('cc-pacto-bar-abs');
      const bno=document.getElementById('cc-pacto-bar-no');
      const bmark=document.getElementById('cc-pacto-bar-marker');
      if(bsi&&babs&&bno){
        bsi.style.width=(totalSeats>0?(si/totalSeats*100):0)+'%';
        babs.style.width=(totalSeats>0?(abs/totalSeats*100):0)+'%';
        bno.style.width=(totalSeats>0?(no/totalSeats*100):0)+'%';
        if(bmark) bmark.style.left=(totalSeats>0?(majority/totalSeats*100):50)+'%';
      }

      // Result message
      const msg=document.getElementById('cc-pacto-result-msg');
      if(msg){
        const reaches=si>=majority;
        const absReaches=(si+abs)>=majority;
        msg.style.display='block';
        if(reaches){
          msg.className='cc-result-msg cc-result-si';
          msg.textContent=`✅ Mayoría alcanzada con ${si} votos a favor`;
        } else if(absReaches){
          msg.className='cc-result-msg';
          msg.style.background='rgba(227,179,65,.12)';
          msg.style.color='#e3b341';
          msg.style.border='1px solid rgba(227,179,65,.3)';
          msg.textContent=`⚠️ Mayoría posible con abstenciones (${si} Sí + ${abs} Abs = ${si+abs})`;
        } else {
          msg.className='cc-result-msg cc-result-no';
          msg.textContent=`❌ No se alcanza la mayoría. Faltan ${majority-si} votos Sí (o ${majority-(si+abs)} con abstenciones)`;
        }
      }

      // Draw pactometro hemicicle with vote colors
      const pactoSvg=document.getElementById('cc-pacto-hemi');
      if(pactoSvg){
        const colorMap={'si':'#4caf50','abs':'#e3b341','no':'#ef5350',null:'#555'};
        const seats=[];
        const sorted=parties.sort((a,b)=>{
          const order={'si':0,'abs':1,null:2,'no':3};
          return (order[ccState.pactoVotes[a]]||2)-(order[ccState.pactoVotes[b]]||2)||(gs[b]||0)-(gs[a]||0);
        });
        for(const pid of sorted){
          const n=gs[pid]||0;
          const v=ccState.pactoVotes[pid]||null;
          const c=colorMap[v]||'#555';
          for(let i=0;i<n;i++) seats.push({pid,color:c});
        }
        // Empty
        const empty=totalSeats-seats.length;
        for(let i=0;i<empty;i++) seats.push({pid:'',color:'#333'});
        pactoSvg.innerHTML='';
        _drawHemiDots(pactoSvg,seats,250,265,4,500);
        _addHemiLabel(pactoSvg,totalSeats,250,280);
      }
    }

    function ccPactoVote(pid,vote){
      if(ccState.pactoVotes[pid]===vote) ccState.pactoVotes[pid]=null;
      else ccState.pactoVotes[pid]=vote;
      ccRenderPactometro();
    }

    function ccPactoAll(vote){
      const gs=ccGetGlobalSeats();
      for(const pid of Object.keys(ccState.parties)){
        if((gs[pid]||0)>0) ccState.pactoVotes[pid]=vote;
      }
      ccRenderPactometro();
    }

    // ── Utilidades ──
    function ccUpdateUtilSelects(){
      const parties=Object.entries(ccState.parties);
      const districts=Object.entries(ccState.districts);
      ['cc-transf-from','cc-transf-to','cc-incr-party','cc-merge-parties'].forEach(id=>{
        const el=document.getElementById(id);
        if(!el) return;
        const multi=el.multiple;
        el.innerHTML=parties.map(([pid,p])=>`<option value="${pid}">${p.name}</option>`).join('');
      });
      ['cc-transf-districts','cc-incr-districts','cc-merge-districts'].forEach(id=>{
        const el=document.getElementById(id);
        if(!el) return;
        el.innerHTML=districts.map(([did,d])=>`<option value="${did}">${d.name}</option>`).join('');
        // Select all by default
        for(const opt of el.options) opt.selected=true;
      });
    }

    function ccGetSelectedOptions(selectId){
      const sel=document.getElementById(selectId);
      return Array.from(sel?.selectedOptions||[]).map(o=>o.value);
    }

    function ccTransferirVotos(){
      const pct=parseFloat(document.getElementById('cc-transf-pct').value)||0;
      const from=document.getElementById('cc-transf-from').value;
      const to=document.getElementById('cc-transf-to').value;
      const dids=ccGetSelectedOptions('cc-transf-districts');
      const onlyPresent=document.getElementById('cc-transf-only-present').checked;
      if(!from||!to||from===to){ alert('Selecciona dos partidos distintos'); return; }
      for(const did of dids){
        const d=ccState.districts[did];
        if(!d||!d.votes) continue;
        if(onlyPresent&&!(d.votes[to]>0)) continue;
        const fromV=d.votes[from]||0;
        const transfer=Math.round(fromV*(pct/100));
        d.votes[from]=Math.max(0,fromV-transfer);
        d.votes[to]=(d.votes[to]||0)+transfer;
      }
      ccRecalculate();
      if(ccActiveCCTab==='circunscripciones'&&ccActiveDistrict) ccRenderDistrictMain(ccActiveDistrict);
      alert('Transferencia completada');
    }

    function ccIncrementarVotos(){
      const pid=document.getElementById('cc-incr-party').value;
      const pct=parseFloat(document.getElementById('cc-incr-pct').value)||0;
      const dids=ccGetSelectedOptions('cc-incr-districts');
      for(const did of dids){
        const d=ccState.districts[did];
        if(!d||!d.votes) continue;
        const cur=d.votes[pid]||0;
        d.votes[pid]=Math.round(cur*(1+pct/100));
      }
      ccRecalculate();
      if(ccActiveCCTab==='circunscripciones'&&ccActiveDistrict) ccRenderDistrictMain(ccActiveDistrict);
      alert('Votos incrementados');
    }

    function ccFusionarPartidos(){
      const pids=ccGetSelectedOptions('cc-merge-parties');
      const name=document.getElementById('cc-merge-name').value||'Fusión';
      const acronym=document.getElementById('cc-merge-acronym').value||'FUS';
      const color=document.getElementById('cc-merge-color').value||'#000';
      if(pids.length<2){ alert('Selecciona al menos 2 partidos'); return; }
      const newId=String(ccState._nextPartyId++);
      ccState.parties[newId]={name,acronym,color};
      // Sum votes across districts
      for(const d of Object.values(ccState.districts)){
        if(!d.votes) d.votes={};
        let total=0;
        for(const pid of pids) total+=(d.votes[pid]||0);
        d.votes[newId]=total;
        for(const pid of pids) delete d.votes[pid];
      }
      for(const pid of pids) delete ccState.parties[pid];
      ccRecalculate();
      ccUpdateUtilSelects();
      ccRenderCircSidebar();
      alert('Partidos fusionados en: '+acronym);
    }

    function ccFusionarCircunscripciones(){
      const dids=ccGetSelectedOptions('cc-merge-districts');
      const name=document.getElementById('cc-merge-dist-name').value||'Fusión';
      if(dids.length<2){ alert('Selecciona al menos 2 circunscripciones'); return; }
      const newDid=String(ccState._nextDistrictId++);
      let totalSeats=0, totalBlank=0, totalNull=0, totalCensus=0;
      const votes={};
      for(const pid of Object.keys(ccState.parties)) votes[pid]=0;
      for(const did of dids){
        const d=ccState.districts[did];
        if(!d) continue;
        totalSeats+=d.seats||0;
        totalBlank+=d.blank||0;
        totalNull+=d.null||0;
        totalCensus+=d.census||0;
        for(const pid of Object.keys(ccState.parties)) votes[pid]+=(d.votes||{})[pid]||0;
        delete ccState.districts[did];
        delete ccState.results[did];
      }
      ccState.districts[newDid]={name,seats:totalSeats,blank:totalBlank,null:totalNull,census:totalCensus,method:0,cut:0,votes};
      ccActiveDistrict=newDid;
      ccRecalculate();
      ccUpdateUtilSelects();
      ccRenderCircSidebar();
      ccRenderDistrictMain(newDid);
      alert('Circunscripciones fusionadas en: '+name);
    }

    // ── Init ──
    function ccInit(){
      // Try restore from localStorage
      try{
        const saved=localStorage.getItem('cc_state_v1');
        if(saved){ const s=JSON.parse(saved); Object.assign(ccState,s); }
      }catch(e){}

      // If no districts, add a default
      if(Object.keys(ccState.districts).length===0) ccAddDefaultDistrict();

      // Sync UI
      document.getElementById('cc-method').value=ccState.method||'dhondt';
      document.getElementById('cc-cut').value=ccState.cut||5;
      document.getElementById('cc-ext').value=ccState.extension||'c';
      const si=document.getElementById('cc-total-seats');
      if(si) si.value=ccState.totalSeats||65;

      ccRecalculate();
      ccRenderCircSidebar();
      ccUpdateUtilSelects();
      ccFilterLibrary();
    }

    // Run init when panel is first opened
    document.addEventListener('DOMContentLoaded',()=>{
      // Hook into main tab switching
      const origMainTabs=document.querySelectorAll('.main-tab[data-tab="calcamp"]');
      origMainTabs.forEach(btn=>{
        btn.addEventListener('click',()=>{ if(!ccState._initialized){ ccState._initialized=true; ccInit(); } });
      });
      // Also init directly since the panel might already be shown
      setTimeout(()=>{ if(!ccState._initialized){ ccState._initialized=true; ccInit(); } }, 200);
    });

    function ccExtChange(){
      ccState.extension=document.getElementById('cc-ext').value;
      ccRecalculate();
    }
    function ccMethodChange(){
      ccState.method=document.getElementById('cc-method').value;
      ccRecalculate();
    }
    

  
var _pensGastoInited = false;
function pensGastoInit() {
  if (_pensGastoInited) return;
  _pensGastoInited = true;
  // ── Gasto en Pensiones script ──

// ============================================================
// DATOS
// ============================================================
const GASTO_ANUAL = 229_263_000_000;
const YEAR = 2026;
const START = new Date(YEAR + "-01-01T00:00:00").getTime();
const END = new Date((YEAR + 1) + "-01-01T00:00:00").getTime();
const TOTAL_MS = END - START;
const EUR_PER_MS = GASTO_ANUAL / TOTAL_MS;
const EUR_PER_SEC = EUR_PER_MS * 1000;
const EUR_PER_MIN = EUR_PER_SEC * 60;
const EUR_PER_HOUR = EUR_PER_MIN * 60;
const EUR_PER_DAY = EUR_PER_HOUR * 24;
const EUR_PER_MONTH = GASTO_ANUAL / 12;

const COMPARISONS = [
  { label: "Salarios medios anuales", value: 28_360, icon: "👤" },
  { label: "Viviendas (precio medio)", value: 195_000, icon: "🏠" },
  { label: "Coches eléctricos", value: 35_000, icon: "⚡" },
  { label: "Becas universitarias", value: 3_500, icon: "🎓" },
];

const MEGAPROJECTS = [
  { name: "Presupuesto Defensa EE.UU.", cost: 771_600_000_000, icon: "🎖️", color: "#dc2626", desc: "Gasto militar anual aprobado por el Congreso (FY2026)", source: "838.700 M$ (Congreso, ene. 2026) ≈ 771.600 M€" },
  { name: "Programa Apolo", cost: 185_000_000_000, icon: "🚀", color: "#f59e0b", desc: "Llevar al hombre a la Luna (1961–72)", source: "~200.000 M$ ajustados ≈ 185.000 M€" },
  { name: "Rescate bancario español", cost: 100_000_000_000, icon: "🏦", color: "#ef4444", desc: "Ayudas al sector financiero (2009–2012)", source: "~100.000 M€ (FROB + FGD + Sareb)" },
  { name: "Proyecto Manhattan", cost: 26_000_000_000, icon: "☢️", color: "#22d3ee", desc: "Programa nuclear EE.UU. (1942–46)", source: "~28.000 M$ ajustados ≈ 26.000 M€" },
  { name: "Presupuesto anual de la NASA", cost: 22_500_000_000, icon: "🛰️", color: "#06b6d4", desc: "Presupuesto aprobado por el Congreso (FY2026)", source: "24.440 M$ (Congreso, ene. 2026) ≈ 22.500 M€" },
  { name: "Burj Khalifa", cost: 1_400_000_000, icon: "🏗️", color: "#818cf8", desc: "Edificio más alto del mundo, 828 m (2010)", source: "~1.500 M$ ≈ 1.400 M€" },
  { name: "Nuevo Santiago Bernabéu", cost: 1_347_000_000, icon: "⚽", color: "#a78bfa", desc: "Remodelación del estadio (2019–2026)", source: "1.347 M€ (Real Madrid, julio 2025)" },
];

const SUGGESTIONS = [
  "Presupuesto de Defensa de EE.UU.",
  "PIB de España",
  "Coste del Canal de Panamá",
  "Fortuna de Elon Musk",
  "Presupuesto anual de la NASA",
  "Coste de los Juegos Olímpicos de París 2024",
  "Deuda pública de España",
  "Coste del túnel del Canal de la Mancha",
];

// ============================================================
// UTILIDADES DE FORMATO
// ============================================================
function formatEur(n) {
  if (n < 0) return "0,00";
  var fixed = n.toFixed(2);
  var parts = fixed.split(".");
  return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "," + parts[1];
}

function formatCompact(n) {
  if (n >= 1e12) return (n / 1e12).toFixed(2).replace(".", ",") + " B";
  if (n >= 1e9) return (n / 1e9).toFixed(1).replace(".", ",") + " mil M";
  if (n >= 1e6) return (n / 1e6).toFixed(1).replace(".", ",") + " M";
  if (n >= 1e3) return (n / 1e3).toFixed(0) + " mil";
  return n.toFixed(0);
}

function fmtMult(v) {
  if (v >= 1000) return (v / 1000).toFixed(1).replace(".", ",") + " mil";
  if (v >= 100) return Math.floor(v).toLocaleString("es-ES");
  if (v >= 10) return v.toFixed(1).replace(".", ",");
  if (v >= 1) return v.toFixed(2).replace(".", ",");
  return v.toFixed(3).replace(".", ",");
}

// ============================================================
// ELEMENTOS DEL DOM
// ============================================================
var counterDigits = document.getElementById("counter-digits");
var dayOfYearEl = document.getElementById("day-of-year");
var daysInYearEl = document.getElementById("days-in-year");
var progressFill = document.getElementById("progress-fill");
var progressPct = document.getElementById("progress-pct");
var gastoAnualLabel = document.getElementById("gasto-anual-label");

gastoAnualLabel.textContent = formatCompact(GASTO_ANUAL);
daysInYearEl.textContent = Math.round(TOTAL_MS / 86400000);

// ============================================================
// VELOCIDADES (estáticas)
// ============================================================
var speedData = [
  { l: "Por segundo", v: EUR_PER_SEC },
  { l: "Por minuto", v: EUR_PER_MIN },
  { l: "Por hora", v: EUR_PER_HOUR },
  { l: "Por día", v: EUR_PER_DAY },
];

var speedGrid = document.getElementById("speed-grid");
speedData.forEach(function(s) {
  var card = document.createElement("div");
  card.className = "speed-card";
  card.innerHTML = '<div class="label">' + s.l + '</div><div class="value">' + formatCompact(s.v) + ' €</div>';
  speedGrid.appendChild(card);
});

// ============================================================
// EQUIVALENCIAS (se actualizan con el contador)
// ============================================================
var equivGrid = document.getElementById("equiv-grid");
var equivValueEls = [];

COMPARISONS.forEach(function(c) {
  var card = document.createElement("div");
  card.className = "equiv-card";
  var numEl = document.createElement("div");
  numEl.className = "number";
  numEl.textContent = "0";
  card.innerHTML = '<div class="icon">' + c.icon + '</div>';
  card.appendChild(numEl);
  card.innerHTML += '<div class="desc">' + c.label + '<br><span class="unit">(' + formatCompact(c.value) + ' €/ud.)</span></div>';
  // Re-query the number element after innerHTML modification
  equivGrid.appendChild(card);
  equivValueEls.push(card.querySelector(".number"));
});

// ============================================================
// MEGAPROYECTOS (estáticos)
// ============================================================
var megaList = document.getElementById("mega-list");

MEGAPROJECTS.forEach(function(p) {
  var perDay = EUR_PER_DAY / p.cost;
  var perMonth = EUR_PER_MONTH / p.cost;
  var perYear = GASTO_ANUAL / p.cost;
  var maxVal = perYear;

  var items = [
    { label: "1 día", val: perDay },
    { label: "1 mes", val: perMonth },
    { label: "1 año", val: perYear },
  ];

  var metricsHtml = items.map(function(item) {
    var displayVal = item.val < 1 ? "×" + fmtMult(item.val) : fmtMult(item.val);
    var barW = Math.max(2, (item.val / maxVal) * 100);
    return '<div class="metric">' +
      '<div class="mlabel">' + item.label + '</div>' +
      '<div class="mvalue" style="color:' + p.color + '">' + displayVal + '</div>' +
      '<div class="bar-track"><div class="bar-fill" style="width:' + barW + '%; background:' + p.color + '"></div></div>' +
      '</div>';
  }).join("");

  var card = document.createElement("div");
  card.className = "mega-card";
  card.innerHTML =
    '<div class="head">' +
      '<div class="icon-box" style="background:' + p.color + '15; border: 1px solid ' + p.color + '30">' + p.icon + '</div>' +
      '<div style="min-width:0">' +
        '<div class="name">' + p.name + '</div>' +
        '<div class="desc">' + p.desc + '</div>' +
        '<div class="source">' + p.source + '</div>' +
      '</div>' +
    '</div>' +
    '<div class="metrics">' + metricsHtml + '</div>';

  megaList.appendChild(card);
});

// Summary
var summaryBox = document.getElementById("summary-box");
summaryBox.innerHTML =
  '<strong style="color:#c4b5fd">En resumen:</strong> el gasto anual en pensiones de España es casi ' +
  '<strong style="color:#dc2626">un tercio del presupuesto militar de EE.UU.</strong>, equivale a ' +
  '<strong style="color:#f59e0b">' + (GASTO_ANUAL / 185e9).toFixed(1).replace(".",",") + ' Programas Apolo</strong>, ' +
  '<strong style="color:#06b6d4">' + (GASTO_ANUAL / 22.5e9).toFixed(0) + ' presupuestos anuales de la NASA</strong>, ' +
  '<strong style="color:#22d3ee">' + (GASTO_ANUAL / 26e9).toFixed(1).replace(".",",") + ' Proyectos Manhattan</strong> o ' +
  '<strong style="color:#a78bfa">' + Math.floor(GASTO_ANUAL / 1.347e9) + ' estadios Bernabéu</strong>.';

// ============================================================
// ANIMACIÓN DEL CONTADOR
// ============================================================
var lastTick = 0;

function tick(ts) {
  if (ts - lastTick > 40) {
    var now = Date.now();
    var elapsed = Math.max(0, Math.min(now - START, TOTAL_MS));
    var eur = elapsed * EUR_PER_MS;
    var pct = (elapsed / TOTAL_MS) * 100;

    counterDigits.textContent = formatEur(eur);
    dayOfYearEl.textContent = Math.floor((now - START) / 86400000) + 1;
    progressFill.style.width = pct + "%";
    progressPct.textContent = pct.toFixed(2) + "%";

    // Update equivalences
    COMPARISONS.forEach(function(c, i) {
      equivValueEls[i].textContent = Math.floor(eur / c.value).toLocaleString("es-ES");
    });

    lastTick = ts;
  }
  requestAnimationFrame(tick);
}

requestAnimationFrame(tick);

// ============================================================
// BUSCADOR CON IA
// ============================================================
var searchInput = document.getElementById("search-input");
var searchBtn = document.getElementById("search-btn");
var suggestionsEl = document.getElementById("suggestions");
var searchLoading = document.getElementById("search-loading");
var searchError = document.getElementById("search-error");
var searchResult = document.getElementById("search-result");

// Build suggestions dropdown
var sugHtml = '<div class="sug-label">Prueba con…</div>';
SUGGESTIONS.forEach(function(s) {
  sugHtml += '<div class="sug-item" data-query="' + s + '">' + s + '</div>';
});
suggestionsEl.innerHTML = sugHtml;

// Suggestion click
suggestionsEl.addEventListener("click", function(e) {
  var item = e.target.closest(".sug-item");
  if (item) {
    searchInput.value = item.dataset.query;
    suggestionsEl.classList.remove("visible");
    doSearch(item.dataset.query);
  }
});

// Show/hide suggestions
searchInput.addEventListener("focus", function() {
  if (!searchInput.value) suggestionsEl.classList.add("visible");
});

searchInput.addEventListener("input", function() {
  if (!searchInput.value) {
    suggestionsEl.classList.add("visible");
  } else {
    suggestionsEl.classList.remove("visible");
  }
});

searchInput.addEventListener("blur", function() {
  setTimeout(function() { suggestionsEl.classList.remove("visible"); }, 200);
});

searchInput.addEventListener("keydown", function(e) {
  if (e.key === "Enter") doSearch();
});

searchBtn.addEventListener("click", function() { doSearch(); });

function doSearch(overrideQuery) {
  var q = overrideQuery || searchInput.value;
  if (!q.trim()) return;
  searchInput.value = q;

  suggestionsEl.classList.remove("visible");
  searchLoading.classList.add("visible");
  searchError.classList.remove("visible");
  searchResult.classList.remove("visible");
  searchBtn.classList.add("loading");
  searchBtn.textContent = "Buscando…";
  searchBtn.disabled = true;

  fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1000,
      tools: [{ type: "web_search_20250305", name: "web_search" }],
      system: "Eres un asistente que busca el coste o presupuesto de algo y lo convierte en \"días de pensiones españolas\".\n" +
        "DATOS CLAVE:\n" +
        "- Gasto anual pensiones España 2026: 229.263.000.000 €\n" +
        "- Gasto diario: " + Math.round(EUR_PER_DAY).toLocaleString("es-ES") + " €\n" +
        "- Gasto mensual: " + Math.round(EUR_PER_MONTH).toLocaleString("es-ES") + " €\n" +
        "INSTRUCCIONES:\n" +
        "1. Usa web_search para encontrar el dato más actualizado\n" +
        "2. Convierte a euros si es necesario (1 USD ≈ 0,92 EUR)\n" +
        "3. Responde SOLO con JSON válido, sin markdown ni backticks:\n" +
        "{\"nombre\":\"Nombre\",\"coste_eur\":NÚMERO,\"descripcion\":\"Contexto breve\",\"fuente\":\"Origen del dato\",\"dias_pensiones\":NÚMERO,\"meses_pensiones\":NÚMERO,\"años_pensiones\":NÚMERO}\n" +
        "Calcula: dias = coste_eur / " + Math.round(EUR_PER_DAY) + ", meses = coste_eur / " + Math.round(EUR_PER_MONTH) + ", años = coste_eur / " + GASTO_ANUAL + "\n" +
        "IMPORTANTE: Responde ÚNICAMENTE el JSON.",
      messages: [{ role: "user", content: "Busca el coste o presupuesto de: " + q }],
    }),
  })
  .then(function(res) { return res.json(); })
  .then(function(data) {
    var textBlocks = (data.content || [])
      .filter(function(b) { return b.type === "text"; })
      .map(function(b) { return b.text; })
      .join("");

    var parsed = JSON.parse(textBlocks.replace(/```json|```/g, "").trim());
    showResult(parsed);
  })
  .catch(function(err) {
    console.error(err);
    searchError.textContent = "No he podido obtener el dato. Prueba a reformular la búsqueda.";
    searchError.classList.add("visible");
  })
  .finally(function() {
    searchLoading.classList.remove("visible");
    searchBtn.classList.remove("loading");
    searchBtn.textContent = "Buscar";
    searchBtn.disabled = false;
  });
}

function showResult(r) {
  var dias = r.dias_pensiones;
  var meses = r.meses_pensiones;
  var anios = r.años_pensiones || r["anos_pensiones"];

  function fmtMetric(v) {
    if (v == null) return "—";
    if (typeof v !== "number") return v;
    return v >= 100 ? Math.round(v).toLocaleString("es-ES") : v.toFixed(1).replace(".", ",");
  }

  var barPct = Math.min(100, (r.coste_eur / GASTO_ANUAL) * 100);
  var barPctLabel = ((r.coste_eur / GASTO_ANUAL) * 100).toFixed(2).replace(".", ",");

  searchResult.innerHTML =
    '<div class="result-head">' +
      '<div class="result-name">' + r.nombre + '</div>' +
      '<div class="result-desc">' + r.descripcion + '</div>' +
      '<div class="result-cost">' + formatCompact(r.coste_eur) + ' €</div>' +
      '<div class="result-source">Fuente: ' + r.fuente + '</div>' +
    '</div>' +
    '<div class="result-metrics">' +
      '<div class="result-metric"><div class="rlabel">Días de pensiones</div><div class="rvalue" style="color:#6366f1">' + fmtMetric(dias) + '</div></div>' +
      '<div class="result-metric"><div class="rlabel">Meses de pensiones</div><div class="rvalue" style="color:#818cf8">' + fmtMetric(meses) + '</div></div>' +
      '<div class="result-metric"><div class="rlabel">Años de pensiones</div><div class="rvalue" style="color:#a78bfa">' + fmtMetric(anios) + '</div></div>' +
    '</div>' +
    (r.coste_eur ?
      '<div class="result-bar-wrap">' +
        '<div class="result-bar-track"><div class="result-bar-fill" style="width:' + barPct + '%"></div></div>' +
        '<div class="result-bar-labels"><span>0</span><span>= ' + barPctLabel + '% del gasto anual</span><span>' + formatCompact(GASTO_ANUAL) + ' €</span></div>' +
      '</div>' : '');

  searchResult.classList.add("visible");
}

}

  

  
var _pensProviInited = false;
function pensProviInit() {
  if (_pensProviInited) return;
  _pensProviInited = true;
  // Load Leaflet + Chart.js if needed
  function _loadScript(src, cb) {
    if (document.querySelector('script[src="' + src + '"]')) { cb && cb(); return; }
    var s = document.createElement('script');
    s.src = src; s.onload = cb || function(){};
    document.head.appendChild(s);
  }
  function _loadCss(href) {
    if (document.querySelector('link[href="' + href + '"]')) return;
    var l = document.createElement('link');
    l.rel = 'stylesheet'; l.href = href;
    document.head.appendChild(l);
  }
  _loadCss('https://unpkg.com/leaflet@1.9.4/dist/leaflet.css');
  _loadScript('https://unpkg.com/leaflet@1.9.4/dist/leaflet.js', function() {
    _loadScript('https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js', function() {
      // ── Pensiones por Provincia script ──

// ─── DATA ───────────────────────────────────────────────────────────────────
const NATIONAL = {"total_num": 10446888, "total_media": 1366.2, "ip_num": 1055274, "ip_media": 1253.57, "jub_num": 6670447, "jub_media": 1566.81, "viu_num": 2339414, "viu_media": 972.79, "orf_num": 335157, "orf_media": 550.14, "fam_num": 46596, "fam_media": 819.46};
const PENSIONS = {
  "Almería": {"total_num":121243,"total_media":1128.46,"ip_num":11823,"ip_media":1162.45,"jub_num":74325,"jub_media":1291.9,"viu_num":29076,"viu_media":829.27,"orf_num":5488,"orf_media":461.93,"fam_num":531,"fam_media":765.35},
  "Cádiz": {"total_num":237683,"total_media":1357.04,"ip_num":36775,"ip_media":1248.26,"jub_num":130580,"jub_media":1611.15,"viu_num":57127,"viu_media":1017.57,"orf_num":10289,"orf_media":562.55,"fam_num":2912,"fam_media":803.07},
  "Córdoba": {"total_num":184658,"total_media":1155.61,"ip_num":17811,"ip_media":1105.66,"jub_num":116184,"jub_media":1320.06,"viu_num":42502,"viu_media":839.41,"orf_num":6735,"orf_media":530.62,"fam_num":1426,"fam_media":756.95},
  "Granada": {"total_num":204962,"total_media":1177.07,"ip_num":25097,"ip_media":1172.22,"jub_num":125915,"jub_media":1350.34,"viu_num":44833,"viu_media":820.82,"orf_num":7671,"orf_media":504.16,"fam_num":1446,"fam_media":788.59},
  "Huelva": {"total_num":107219,"total_media":1241.75,"ip_num":14027,"ip_media":1111.95,"jub_num":62868,"jub_media":1452.45,"viu_num":25149,"viu_media":926.09,"orf_num":4341,"orf_media":524.95,"fam_num":834,"fam_media":792.1},
  "Jaén": {"total_num":152299,"total_media":1143.64,"ip_num":23227,"ip_media":1098.13,"jub_num":87503,"jub_media":1309.66,"viu_num":35499,"viu_media":866.06,"orf_num":5226,"orf_media":520.15,"fam_num":844,"fam_media":719.79},
  "Málaga": {"total_num":298361,"total_media":1246.62,"ip_num":33088,"ip_media":1228.78,"jub_num":183155,"jub_media":1433.28,"viu_num":67747,"viu_media":901.49,"orf_num":12636,"orf_media":504.06,"fam_num":1735,"fam_media":767.01},
  "Sevilla": {"total_num":411644,"total_media":1267.39,"ip_num":64550,"ip_media":1145.19,"jub_num":236334,"jub_media":1482.18,"viu_num":92061,"viu_media":940.82,"orf_num":15792,"orf_media":544.22,"fam_num":2907,"fam_media":790.13},
  "Huesca": {"total_num":55410,"total_media":1319.55,"ip_num":4993,"ip_media":1202.09,"jub_num":36047,"jub_media":1501.95,"viu_num":12673,"viu_media":950.13,"orf_num":1618,"orf_media":538.35,"fam_num":79,"fam_media":774.9},
  "Teruel": {"total_num":36444,"total_media":1331.18,"ip_num":3673,"ip_media":1185.94,"jub_num":23757,"jub_media":1520.77,"viu_num":7912,"viu_media":935.32,"orf_num":1004,"orf_media":540.42,"fam_num":98,"fam_media":874.79},
  "Zaragoza": {"total_num":227630,"total_media":1490.72,"ip_num":14341,"ip_media":1373.77,"jub_num":154579,"jub_media":1688.52,"viu_num":51500,"viu_media":1053.97,"orf_num":6581,"orf_media":575.3,"fam_num":629,"fam_media":884.2},
  "Asturias": {"total_num":302888,"total_media":1575.22,"ip_num":28589,"ip_media":1409.4,"jub_num":187932,"jub_media":1835.0,"viu_num":75684,"viu_media":1109.98,"orf_num":8632,"orf_media":665.25,"fam_num":2051,"fam_media":1081.83},
  "Illes Balears": {"total_num":215113,"total_media":1274.75,"ip_num":18732,"ip_media":1186.35,"jub_num":144750,"jub_media":1445.08,"viu_num":45470,"viu_media":877.65,"orf_num":6045,"orf_media":466.23,"fam_num":116,"fam_media":795.72},
  "Las Palmas": {"total_num":199745,"total_media":1266.26,"ip_num":34273,"ip_media":1254.74,"jub_num":111327,"jub_media":1470.07,"viu_num":43241,"viu_media":926.0,"orf_num":9111,"orf_media":528.32,"fam_num":1793,"fam_media":787.04},
  "Santa Cruz de Tenerife": {"total_num":178436,"total_media":1225.34,"ip_num":26816,"ip_media":1126.85,"jub_num":103204,"jub_media":1427.19,"viu_num":40423,"viu_media":909.07,"orf_num":7139,"orf_media":516.38,"fam_num":854,"fam_media":821.16},
  "Cantabria": {"total_num":149434,"total_media":1435.5,"ip_num":14156,"ip_media":1304.92,"jub_num":94596,"jub_media":1653.99,"viu_num":34737,"viu_media":1024.54,"orf_num":4562,"orf_media":601.61,"fam_num":1383,"fam_media":900.61},
  "Albacete": {"total_num":77089,"total_media":1252.43,"ip_num":6978,"ip_media":1183.37,"jub_num":48141,"jub_media":1433.12,"viu_num":18363,"viu_media":934.93,"orf_num":2844,"orf_media":557.86,"fam_num":763,"fam_media":712.8},
  "Ciudad Real": {"total_num":106314,"total_media":1286.61,"ip_num":17061,"ip_media":1141.22,"jub_num":58223,"jub_media":1512.19,"viu_num":26185,"viu_media":1003.61,"orf_num":3945,"orf_media":577.63,"fam_num":900,"fam_media":790.3},
  "Cuenca": {"total_num":46141,"total_media":1191.5,"ip_num":6732,"ip_media":1102.7,"jub_num":26812,"jub_media":1362.18,"viu_num":10705,"viu_media":926.36,"orf_num":1583,"orf_media":564.51,"fam_num":309,"fam_media":714.43},
  "Guadalajara": {"total_num":47589,"total_media":1447.47,"ip_num":6250,"ip_media":1270.32,"jub_num":30167,"jub_media":1662.89,"viu_num":9499,"viu_media":1036.69,"orf_num":1568,"orf_media":538.87,"fam_num":105,"fam_media":829.74},
  "Toledo": {"total_num":129328,"total_media":1272.18,"ip_num":12199,"ip_media":1152.16,"jub_num":81977,"jub_media":1450.54,"viu_num":30010,"viu_media":958.57,"orf_num":4567,"orf_media":519.39,"fam_num":575,"fam_media":736.54},
  "Ávila": {"total_num":40282,"total_media":1213.22,"ip_num":3567,"ip_media":1128.04,"jub_num":25760,"jub_media":1372.7,"viu_num":9468,"viu_media":905.09,"orf_num":1253,"orf_media":591.64,"fam_num":234,"fam_media":750.8},
  "Burgos": {"total_num":95428,"total_media":1466.53,"ip_num":5517,"ip_media":1376.95,"jub_num":66371,"jub_media":1655.39,"viu_num":20453,"viu_media":1006.12,"orf_num":2771,"orf_media":585.61,"fam_num":316,"fam_media":885.7},
  "León": {"total_num":140863,"total_media":1363.83,"ip_num":14405,"ip_media":1312.02,"jub_num":88052,"jub_media":1567.84,"viu_num":33286,"viu_media":952.55,"orf_num":4009,"orf_media":606.24,"fam_num":1111,"fam_media":922.39},
  "Palencia": {"total_num":44576,"total_media":1399.29,"ip_num":4153,"ip_media":1212.24,"jub_num":28775,"jub_media":1603.89,"viu_num":10033,"viu_media":1007.85,"orf_num":1333,"orf_media":627.8,"fam_num":282,"fam_media":849.87},
  "Salamanca": {"total_num":83624,"total_media":1285.36,"ip_num":6004,"ip_media":1182.59,"jub_num":54774,"jub_media":1458.82,"viu_num":19746,"viu_media":935.67,"orf_num":2444,"orf_media":609.86,"fam_num":656,"fam_media":785.09},
  "Segovia": {"total_num":36132,"total_media":1308.91,"ip_num":2769,"ip_media":1139.23,"jub_num":23936,"jub_media":1492.66,"viu_num":8222,"viu_media":936.93,"orf_num":1067,"orf_media":562.85,"fam_num":138,"fam_media":772.86},
  "Soria": {"total_num":23135,"total_media":1328.39,"ip_num":1324,"ip_media":1239.92,"jub_num":16025,"jub_media":1500.85,"viu_num":5035,"viu_media":910.7,"orf_num":678,"orf_media":585.92,"fam_num":73,"fam_media":778.12},
  "Valladolid": {"total_num":125492,"total_media":1488.65,"ip_num":11350,"ip_media":1219.2,"jub_num":81404,"jub_media":1712.24,"viu_num":28486,"viu_media":1083.28,"orf_num":3572,"orf_media":600.87,"fam_num":680,"fam_media":864.69},
  "Zamora": {"total_num":47733,"total_media":1186.84,"ip_num":2257,"ip_media":1150.34,"jub_num":31374,"jub_media":1339.8,"viu_num":12179,"viu_media":890.68,"orf_num":1507,"orf_media":582.79,"fam_num":416,"fam_media":708.27},
  "Barcelona": {"total_num":1354048,"total_media":1459.3,"ip_num":123824,"ip_media":1415.27,"jub_num":904619,"jub_media":1643.34,"viu_num":287990,"viu_media":1016.49,"orf_num":36523,"orf_media":558.19,"fam_num":1092,"fam_media":913.29},
  "Girona": {"total_num":172343,"total_media":1286.92,"ip_num":14329,"ip_media":1243.56,"jub_num":117203,"jub_media":1452.92,"viu_num":36014,"viu_media":873.52,"orf_num":4740,"orf_media":459.26,"fam_num":57,"fam_media":875.78},
  "Lleida": {"total_num":104812,"total_media":1237.84,"ip_num":11792,"ip_media":1218.89,"jub_num":66266,"jub_media":1412.57,"viu_num":23535,"viu_media":856.33,"orf_num":3157,"orf_media":491.58,"fam_num":62,"fam_media":900.62},
  "Tarragona": {"total_num":185538,"total_media":1340.23,"ip_num":19000,"ip_media":1272.16,"jub_num":120556,"jub_media":1523.66,"viu_num":40342,"viu_media":939.82,"orf_num":5443,"orf_media":504.04,"fam_num":197,"fam_media":758.83},
  "Alicante": {"total_num":352958,"total_media":1188.0,"ip_num":25899,"ip_media":1149.86,"jub_num":231156,"jub_media":1342.28,"viu_num":82471,"viu_media":877.27,"orf_num":12191,"orf_media":487.57,"fam_num":1241,"fam_media":776.66},
  "Castellón": {"total_num":142843,"total_media":1237.44,"ip_num":15693,"ip_media":1209.53,"jub_num":91868,"jub_media":1394.97,"viu_num":30537,"viu_media":889.53,"orf_num":4514,"orf_media":505.24,"fam_num":231,"fam_media":780.91},
  "Valencia": {"total_num":578558,"total_media":1319.26,"ip_num":62273,"ip_media":1215.96,"jub_num":363446,"jub_media":1518.47,"viu_num":131631,"viu_media":941.48,"orf_num":20115,"orf_media":538.4,"fam_num":1093,"fam_media":831.45},
  "Badajoz": {"total_num":145669,"total_media":1173.05,"ip_num":20664,"ip_media":1077.12,"jub_num":82384,"jub_media":1358.41,"viu_num":35114,"viu_media":920.98,"orf_num":5954,"orf_media":545.72,"fam_num":1553,"fam_media":720.49},
  "Cáceres": {"total_num":101294,"total_media":1155.24,"ip_num":11003,"ip_media":1092.38,"jub_num":62937,"jub_media":1309.98,"viu_num":23558,"viu_media":862.74,"orf_num":3171,"orf_media":557.15,"fam_num":625,"fam_media":739.14},
  "A Coruña": {"total_num":311504,"total_media":1231.84,"ip_num":32329,"ip_media":1139.87,"jub_num":194326,"jub_media":1417.32,"viu_num":73321,"viu_media":878.75,"orf_num":9072,"orf_media":568.84,"fam_num":2456,"fam_media":756.63},
  "Lugo": {"total_num":112634,"total_media":1079.26,"ip_num":12560,"ip_media":1127.47,"jub_num":70013,"jub_media":1229.49,"viu_num":26067,"viu_media":729.17,"orf_num":2940,"orf_media":541.41,"fam_num":1054,"fam_media":683.36},
  "Ourense": {"total_num":109247,"total_media":1019.24,"ip_num":13602,"ip_media":1146.31,"jub_num":67151,"jub_media":1131.24,"viu_num":24462,"viu_media":715.77,"orf_num":2847,"orf_media":516.79,"fam_num":1185,"fam_media":685.95},
  "Pontevedra": {"total_num":254056,"total_media":1220.36,"ip_num":26859,"ip_media":1136.35,"jub_num":158531,"jub_media":1406.26,"viu_num":58189,"viu_media":865.96,"orf_num":8185,"orf_media":543.55,"fam_num":2292,"fam_media":760.93},
  "Madrid": {"total_num":1291865,"total_media":1576.74,"ip_num":98608,"ip_media":1355.13,"jub_num":881869,"jub_media":1790.49,"viu_num":273598,"viu_media":1101.22,"orf_num":35079,"orf_media":584.68,"fam_num":2711,"fam_media":932.33},
  "Murcia": {"total_num":270553,"total_media":1222.11,"ip_num":32772,"ip_media":1142.19,"jub_num":162170,"jub_media":1417.9,"viu_num":62140,"viu_media":902.37,"orf_num":11809,"orf_media":503.65,"fam_num":1662,"fam_media":754.14},
  "Navarra": {"total_num":149020,"total_media":1558.51,"ip_num":10595,"ip_media":1485.03,"jub_num":103808,"jub_media":1749.23,"viu_num":30027,"viu_media":1071.32,"orf_num":4227,"orf_media":577.73,"fam_num":363,"fam_media":884.54},
  "Álava": {"total_num":85049,"total_media":1702.61,"ip_num":6858,"ip_media":1580.69,"jub_num":58671,"jub_media":1917.57,"viu_num":17287,"viu_media":1159.62,"orf_num":2074,"orf_media":610.05,"fam_num":159,"fam_media":925.83},
  "Gipuzkoa": {"total_num":197670,"total_media":1645.93,"ip_num":13078,"ip_media":1628.6,"jub_num":136284,"jub_media":1846.54,"viu_num":42954,"viu_media":1136.15,"orf_num":4832,"orf_media":633.16,"fam_num":522,"fam_media":1030.28},
  "Bizkaia": {"total_num":305761,"total_media":1689.25,"ip_num":23178,"ip_media":1567.02,"jub_num":200213,"jub_media":1933.39,"viu_num":71971,"viu_media":1186.89,"orf_num":8797,"orf_media":682.63,"fam_num":1602,"fam_media":1042.94},
  "La Rioja": {"total_num":75852,"total_media":1355.8,"ip_num":5269,"ip_media":1291.7,"jub_num":52467,"jub_media":1514.91,"viu_num":15980,"viu_media":961.74,"orf_num":1963,"orf_media":531.68,"fam_num":173,"fam_media":807.2},
  "Ceuta": {"total_num":9526,"total_media":1404.71,"ip_num":1160,"ip_media":1423.5,"jub_num":4962,"jub_media":1733.92,"viu_num":2624,"viu_media":1047.64,"orf_num":733,"orf_media":454.65,"fam_num":47,"fam_media":937.59},
  "Melilla": {"total_num":9193,"total_media":1342.17,"ip_num":1392,"ip_media":1377.94,"jub_num":4700,"jub_media":1663.41,"viu_num":2298,"viu_media":982.1,"orf_num":780,"orf_media":417.84,"fam_num":23,"fam_media":857.73}
};

const NAME_MAP = {
  "Almería":"Almería","Almeria":"Almería",
  "Cádiz":"Cádiz","Cadiz":"Cádiz",
  "Córdoba":"Córdoba","Cordoba":"Córdoba",
  "Granada":"Granada","Huelva":"Huelva",
  "Jaén":"Jaén","Jaen":"Jaén",
  "Málaga":"Málaga","Malaga":"Málaga","Sevilla":"Sevilla",
  "Huesca":"Huesca","Teruel":"Teruel","Zaragoza":"Zaragoza",
  "Asturias":"Asturias","Principado de Asturias":"Asturias",
  "Baleares":"Illes Balears","Islas Baleares":"Illes Balears",
  "Illes Balears":"Illes Balears","Balears":"Illes Balears","Illes Balears (Balearic Islands)":"Illes Balears",
  "Las Palmas":"Las Palmas","Gran Canaria":"Las Palmas",
  "Santa Cruz de Tenerife":"Santa Cruz de Tenerife","Santa Cruz De Tenerife":"Santa Cruz de Tenerife",
  "Tenerife":"Santa Cruz de Tenerife","S.C. Tenerife":"Santa Cruz de Tenerife",
  "SC Tenerife":"Santa Cruz de Tenerife","S.C.Tenerife":"Santa Cruz de Tenerife",
  "Cantabria":"Cantabria",
  "Albacete":"Albacete","Ciudad Real":"Ciudad Real","Cuenca":"Cuenca",
  "Guadalajara":"Guadalajara","Toledo":"Toledo",
  "Ávila":"Ávila","Avila":"Ávila","Burgos":"Burgos","León":"León","Leon":"León",
  "Palencia":"Palencia","Salamanca":"Salamanca","Segovia":"Segovia",
  "Soria":"Soria","Valladolid":"Valladolid","Zamora":"Zamora",
  "Barcelona":"Barcelona",
  "Girona":"Girona","Gerona":"Girona",
  "Lleida":"Lleida","Lérida":"Lleida","Lerida":"Lleida",
  "Tarragona":"Tarragona",
  "Alicante":"Alicante","Alacant":"Alicante","Alicante/Alacant":"Alicante","Alacant/Alicante":"Alicante",
  "Castellón":"Castellón","Castelló":"Castellón","Castellon":"Castellón",
  "Castellón de la Plana":"Castellón","Castelló de la Plana":"Castellón",
  "Castelló/Castellón":"Castellón","Castellón/Castelló":"Castellón",
  "Valencia":"Valencia","València":"Valencia","Valencia/València":"Valencia","València/Valencia":"Valencia",
  "Badajoz":"Badajoz","Cáceres":"Cáceres","Caceres":"Cáceres",
  "A Coruña":"A Coruña","La Coruña":"A Coruña","Coruña (A)":"A Coruña",
  "La Coruna":"A Coruña","A Coruna":"A Coruña",
  "Lugo":"Lugo","Ourense":"Ourense","Orense":"Ourense","Pontevedra":"Pontevedra",
  "Madrid":"Madrid","Comunidad de Madrid":"Madrid",
  "Murcia":"Murcia","Región de Murcia":"Murcia",
  "Navarra":"Navarra","Nafarroa":"Navarra","Comunidad Foral de Navarra":"Navarra",
  "Álava":"Álava","Alava":"Álava","Araba":"Álava","Araba/Álava":"Álava",
  "Gipuzkoa":"Gipuzkoa","Guipúzcoa":"Gipuzkoa","Guipuzcoa":"Gipuzkoa","Gipuzkoa/Guipúzcoa":"Gipuzkoa","Guipúzcoa/Gipuzkoa":"Gipuzkoa",
  "Bizkaia":"Bizkaia","Vizcaya":"Bizkaia","Bizkaia/Vizcaya":"Bizkaia","Vizcaya/Bizkaia":"Bizkaia",
  "La Rioja":"La Rioja","Rioja":"La Rioja",
  "Ceuta":"Ceuta","Melilla":"Melilla"
};

const TYPE_META = {
  total_media: { label: 'Total sistema', color: '#c84b31' },
  jub_media:   { label: 'Jubilación',    color: '#2d7a5a' },
  ip_media:    { label: 'Incap. Permanente', color: '#3b82f6' },
  viu_media:   { label: 'Viudedad',      color: '#7c3aed' },
  orf_media:   { label: 'Orfandad',      color: '#e8a020' },
};

// ─── STATE ───────────────────────────────────────────────────────────────────
let currentType = 'total_media';
let selectedProvince = null;
let geojsonLayer = null;
let map, barChart;
// FIX: single tooltip reference to avoid accumulation
let activeTooltip = null;

// ─── INIT ────────────────────────────────────────────────────────────────────
function _pensProviDOMReady() {
  initKPIs();
  initMap();
  initBarChart();
  buildRanking();
}

function fmt(v) { return v != null ? v.toFixed(2).replace('.', ',') + ' €' : '—'; }
function fmtNum(v) { return v != null ? v.toLocaleString('es-ES') : '—'; }

function initKPIs() {
  document.getElementById('kpi-media').textContent = NATIONAL.total_media.toFixed(2).replace('.',',') + ' €';
  document.getElementById('kpi-total').textContent = fmtNum(NATIONAL.total_num);
  const sorted = Object.entries(PENSIONS).sort((a,b)=>b[1].total_media-a[1].total_media);
  const [maxName, maxD] = sorted[0];
  const [minName, minD] = sorted[sorted.length-1];
  document.getElementById('kpi-max-val').textContent = maxD.total_media.toFixed(2).replace('.',',') + ' €';
  document.getElementById('kpi-max-name').textContent = maxName;
  document.getElementById('kpi-min-val').textContent = minD.total_media.toFixed(2).replace('.',',') + ' €';
  document.getElementById('kpi-min-name').textContent = minName;
}

// ─── MAP ─────────────────────────────────────────────────────────────────────
function getColor(val, min, max) {
  const t = (val - min) / (max - min);
  const stops = [[255,245,235],[251,191,64],[200,75,49],[122,29,10]];
  const seg = t * (stops.length-1);
  const i = Math.floor(seg), f = seg - i;
  const a = stops[Math.min(i, stops.length-1)];
  const b = stops[Math.min(i+1, stops.length-1)];
  return `rgb(${Math.round(a[0]+(b[0]-a[0])*f)},${Math.round(a[1]+(b[1]-a[1])*f)},${Math.round(a[2]+(b[2]-a[2])*f)})`;
}

function removeActiveTooltip() {
  if (activeTooltip) {
    try { map.removeLayer(activeTooltip); } catch(e) {}
    activeTooltip = null;
  }
}

function initMap() {
  map = L.map('map', {
    center: [40.4, -3.7], zoom: 5,
    zoomControl: true, attributionControl: false,
    scrollWheelZoom: false
  });
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {
    maxZoom: 19
  }).addTo(map);
  loadGeoJSON();
}

function loadGeoJSON() {
  fetch('https://cdn.jsdelivr.net/gh/codeforgermany/click_that_hood@main/public/data/spain-provinces.geojson')
    .then(r => r.json())
    .then(data => renderMap(data))
    .catch(() => {
      fetch('https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/spain-provinces.geojson')
        .then(r => r.json())
        .then(data => renderMap(data))
        .catch(() => {
          document.getElementById('map').innerHTML = '<div style="padding:40px;text-align:center;color:#999">No se pudo cargar el mapa.</div>';
        });
    });
}

function renderMap(geojsonData) {
  const vals = Object.values(PENSIONS).map(d => d[currentType]).filter(Boolean);
  const min = Math.min(...vals), max = Math.max(...vals);

  document.getElementById('leg-min').textContent = min.toFixed(0) + ' €';
  document.getElementById('leg-max').textContent = max.toFixed(0) + ' €';

  if (geojsonLayer) map.removeLayer(geojsonLayer);

  const nameProp = (() => {
    const sample = geojsonData.features[0]?.properties || {};
    return ['name','NAME','nombre','NOMBRE','provincia','PROVINCIA','nom','NOM'].find(k => sample[k]) || 'name';
  })();

  geojsonLayer = L.geoJSON(geojsonData, {
    style: feature => {
      const rawName = feature.properties[nameProp] || '';
      const key = NAME_MAP[rawName] || rawName;
      const d = PENSIONS[key];
      const val = d ? d[currentType] : null;
      return {
        fillColor: val ? getColor(val, min, max) : '#ddd8d0',
        fillOpacity: val ? 0.88 : 0.4,
        color: '#fff', weight: 1.2, opacity: 1
      };
    },
    onEachFeature: (feature, layer) => {
      const rawName = feature.properties[nameProp] || '';
      const key = NAME_MAP[rawName] || rawName;
      const d = PENSIONS[key];

      layer.on('mouseover', function(e) {
        this.setStyle({ weight: 2.5, color: '#333', fillOpacity: 1 });

        // FIX: remove any existing tooltip before creating a new one
        removeActiveTooltip();

        const val = d ? d[currentType] : null;
        const numStr = d ? fmtNum(d.total_num) : '—';

        activeTooltip = L.tooltip({
          permanent: true,
          className: 'leaflet-tooltip-custom',
          offset: [12, 0],
          direction: 'right'
        })
        .setContent(`
          <div class="tip-name">${key}</div>
          <div class="tip-val">${val ? val.toFixed(2).replace('.', ',') + ' €' : '—'}</div>
          <div class="tip-sub">${TYPE_META[currentType].label} · ${numStr} pensionistas</div>
        `)
        .setLatLng(e.latlng)
        .addTo(map);
      });

      layer.on('mousemove', e => {
        if (activeTooltip) activeTooltip.setLatLng(e.latlng);
      });

      layer.on('mouseout', function() {
        this.setStyle({ weight: 1.2, color: '#fff', fillOpacity: 0.88 });
        // FIX: remove only our tracked tooltip
        removeActiveTooltip();
      });

      layer.on('click', () => {
        if (d) selectProvince(key);
      });
    }
  }).addTo(map);
}

function updateMap() {
  if (!geojsonLayer) return;
  const vals = Object.values(PENSIONS).map(d => d[currentType]).filter(Boolean);
  const min = Math.min(...vals), max = Math.max(...vals);

  document.getElementById('leg-min').textContent = min.toFixed(0) + ' €';
  document.getElementById('leg-max').textContent = max.toFixed(0) + ' €';

  const namePropU = (() => {
    const sample = geojsonLayer.getLayers()[0]?.feature?.properties || {};
    return ['name','NAME','nombre','NOMBRE','provincia','PROVINCIA','nom','NOM'].find(k => sample[k]) || 'name';
  })();

  geojsonLayer.eachLayer(layer => {
    const rawName = layer.feature.properties[namePropU] || '';
    const key = NAME_MAP[rawName] || rawName;
    const d = PENSIONS[key];
    const val = d ? d[currentType] : null;
    layer.setStyle({
      fillColor: val ? getColor(val, min, max) : '#ddd8d0',
      fillOpacity: val ? 0.88 : 0.4,
    });
  });

  document.getElementById('map-title').textContent =
    `Pensión media por provincia · ${TYPE_META[currentType].label}`;
}

function setType(type, e) {
  currentType = type;
  document.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
  if (e && e.target) e.target.classList.add('active');
  // FIX: also remove any stale tooltip when switching type
  removeActiveTooltip();
  updateMap();
  buildRanking();
  if (selectedProvince) updateBarChart(selectedProvince);
}
window.setType = setType;

// ─── PROVINCE DETAIL ─────────────────────────────────────────────────────────
function selectProvince(name) {
  selectedProvince = name;
  const d = PENSIONS[name];
  if (!d) return;

  document.getElementById('selected-label').textContent = name;
  document.getElementById('chart-title').textContent = `Pensión media por tipo — ${name}`;
  document.getElementById('chart-subtitle').textContent = `${fmtNum(d.total_num)} pensionistas · Datos a 1 de febrero de 2026`;

  const sorted = Object.entries(PENSIONS)
    .filter(([,v]) => v[currentType] != null)
    .sort((a,b) => b[1][currentType] - a[1][currentType]);
  const rank = sorted.findIndex(([k]) => k === name) + 1;
  const total = sorted.length;

  const html = `
    <div class="province-name-display">${name}</div>
    <div class="province-sub-display">${fmtNum(d.total_num)} pensionistas</div>
    <div class="province-main-stat">
      <div>
        <div class="big-num">${d.total_media.toFixed(0)} €</div>
        <div class="big-label">Pensión media total</div>
      </div>
      <div class="rank-badge">
        <div class="rank-num">#${rank}</div>
        <div class="rank-label">de ${total} provincias</div>
      </div>
    </div>
    <div class="type-rows">
      ${buildTypeRows(d)}
    </div>
  `;
  document.getElementById('province-detail').innerHTML = html;

  updateBarChart(name);
  buildRanking();
}
window.selectProvince = selectProvince;

function buildTypeRows(d) {
  const types = [
    { mediaKey: 'jub_media', numKey: 'jub_num', label: 'Jubilación',    color: '#2d7a5a' },
    { mediaKey: 'ip_media',  numKey: 'ip_num',  label: 'Incap. Perm.',  color: '#3b82f6' },
    { mediaKey: 'viu_media', numKey: 'viu_num', label: 'Viudedad',      color: '#7c3aed' },
    { mediaKey: 'orf_media', numKey: 'orf_num', label: 'Orfandad',      color: '#e8a020' },
    { mediaKey: 'fam_media', numKey: 'fam_num', label: 'Fav. Familiar', color: '#ec4899' },
  ];
  const maxNum = Math.max(...types.map(t => d[t.numKey] || 0));
  return types.map(t => {
    const media = d[t.mediaKey];
    const num   = d[t.numKey];
    const pct   = num ? (num / maxNum * 100).toFixed(0) : 0;
    return `
      <div class="type-row" style="align-items:flex-start;flex-direction:column;gap:4px;padding:8px 0;border-bottom:1px solid var(--border)">
        <div style="display:flex;align-items:center;gap:8px;width:100%">
          <div class="type-dot" style="background:${t.color};flex-shrink:0"></div>
          <div class="type-name" style="flex:1;font-weight:500">${t.label}</div>
          <div style="font-size:13px;font-weight:700;color:${t.color}">${media ? media.toFixed(2).replace('.',',') + ' €' : '—'}</div>
        </div>
        <div style="display:flex;align-items:center;gap:8px;width:100%;padding-left:16px">
          <div class="type-bar-wrap" style="flex:1">
            <div class="type-bar-fill" style="width:${pct}%;background:${t.color}"></div>
          </div>
          <div style="font-size:11px;color:var(--text-muted);min-width:72px;text-align:right">${num ? fmtNum(num) + ' pens.' : '—'}</div>
        </div>
      </div>`;
  }).join('');
}

// ─── BAR CHART ───────────────────────────────────────────────────────────────
function initBarChart() {
  const ctx = document.getElementById('barChart').getContext('2d');
  barChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Jubilación', 'Incap. Perm.', 'Viudedad', 'Orfandad', 'Fav. Familiar'],
      datasets: [{
        data: [0,0,0,0,0],
        backgroundColor: ['#2d7a5a','#3b82f6','#7c3aed','#e8a020','#ec4899'],
        borderRadius: 6,
        borderSkipped: false,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => ' ' + ctx.raw.toFixed(2).replace('.',',') + ' €/mes'
          }
        }
      },
      scales: {
        y: {
          beginAtZero: false,
          grid: { color: '#f0ece6' },
          ticks: {
            font: { family: "'DM Sans', sans-serif", size: 11 },
            color: '#a09a94',
            callback: v => v.toLocaleString('es-ES') + ' €'
          }
        },
        x: {
          grid: { display: false },
          ticks: { font: { family: "'DM Sans', sans-serif", size: 12 }, color: '#6b6560' }
        }
      }
    }
  });
}

function updateBarChart(name) {
  const d = PENSIONS[name];
  if (!d) return;
  barChart.data.datasets[0].data = [d.jub_media, d.ip_media, d.viu_media, d.orf_media, d.fam_media];
  barChart.update();
}

// ─── RANKING ─────────────────────────────────────────────────────────────────
function buildRanking() {
  const sorted = Object.entries(PENSIONS)
    .filter(([,v]) => v[currentType] != null)
    .sort((a,b) => b[1][currentType] - a[1][currentType]);

  const maxVal = sorted[0][1][currentType];
  document.getElementById('rank-label').textContent = `${TYPE_META[currentType].label} · mayor a menor`;

  const list = document.getElementById('pens-ranking-list');
  list.innerHTML = sorted.map(([name, d], i) => {
    const val = d[currentType];
    const pct = (val / maxVal * 100).toFixed(0);
    const isSelected = name === selectedProvince;
    return `
      <div class="rank-item ${isSelected ? 'highlighted' : ''}" onclick="selectProvince('${name.replace(/'/g,"\\'")}')">
        <div class="rank-num-badge">${i+1}</div>
        <div class="rank-name">${name}</div>
        <div class="rank-bar-wrap">
          <div class="rank-bar-fill" style="width:${pct}%"></div>
        </div>
        <div class="rank-value" style="color:${isSelected?'var(--accent)':'var(--text-primary)'}">${val.toFixed(0)} €</div>
      </div>`;
  }).join('');
}

      _pensProviDOMReady();
    });
  });
}

  

// ════════════════════════════════════════════════
//  VALORACIÓN DE LÍDERES — DATA
// ════════════════════════════════════════════════
// ════════════════════════════════════════════════
//  VALORACIÓN DE LÍDERES — DATA COMPLETA (PDF)
//  5 grupos: pp, psoe, vox, sumar, otros
// ════════════════════════════════════════════════
const LIDERES_DATA = {

  // ─────────────────────────────────────────────
  //  PEDRO SÁNCHEZ
  // ─────────────────────────────────────────────
  sanchez: {
    nombre: 'Pedro Sánchez', partido: 'PSOE', inicial: 'PS', color: '#e53935',
    words: {

      // Página 1: Sánchez – votantes PSOE
      psoe: [
        {w:'superviviente',s:38},{w:'traidor',s:36},{w:'resiliente',s:34},{w:'psicópata',s:32},
        {w:'estratega',s:30},{w:'estadista',s:28},{w:'brillante',s:26},{w:'felón',s:24},
        {w:'sinvergüenza',s:22},{w:'negociador',s:20},{w:'autócrata',s:18},{w:'hipócrita',s:17},
        {w:'liderazgo',s:16},{w:'político',s:15},{w:'perseverante',s:14},{w:'audaz',s:14},
        {w:'mentira',s:13},{w:'inteligente',s:13},{w:'trabajador',s:12},{w:'oportunista',s:12},
        {w:'farsante',s:11},{w:'embaucador',s:11},{w:'megálomano',s:11},{w:'pragmático',s:10},
        {w:'valiente',s:10},{w:'padre',s:9},{w:'estratega',s:9},{w:'inmortal',s:9},
        {w:'crack',s:8},{w:'traidor',s:8},{w:'dictador',s:8},{w:'honesto',s:8},
        {w:'responsable',s:8},{w:'bárbaro',s:7},{w:'eficiente',s:7},{w:'incompetente',s:7},
        {w:'bueno',s:6},{w:'arrojado',s:6},{w:'mierda',s:6},{w:'timador',s:5},
        {w:'sátrapa',s:5},{w:'déspota',s:5},{w:'pícaro',s:5},{w:'yonki',s:4},
        {w:'tirano',s:4},{w:'imbécil',s:4},{w:'taimado',s:4},{w:'impostado',s:4},
        {w:'maquiavélico',s:4},{w:'guapo',s:4},{w:'falso',s:4},{w:'sanxe',s:4},
        {w:'camaleónico',s:4},{w:'confíado',s:4},{w:'resiliencia',s:4},{w:'acomplejado',s:4},
        {w:'listo',s:4},{w:'ambicioso',s:4},{w:'amoral',s:4},{w:'corrupto',s:4},
        {w:'engaño',s:4},{w:'éxito',s:4},{w:'genio',s:4},{w:'raro',s:4},
        {w:'carismático',s:4},{w:'carisma',s:4},{w:'avance',s:4},{w:'progreso',s:4},
        {w:'mala',s:3},{w:'guerrero',s:3},{w:'valía',s:3},{w:'ego',s:3},
        {w:'seguro',s:3},{w:'ave',s:3},{w:'loco',s:3},{w:'malo',s:3},
        {w:'convicción',s:3},{w:'súper',s:3},{w:'futuro',s:3},{w:'putero',s:3},
        {w:'marionetista',s:3},{w:'talentoso',s:3},{w:'español',s:3},{w:'majestuoso',s:3},
        {w:'trilero',s:3},{w:'subormal',s:3},{w:'cabronaz',s:3},{w:'desafortunado',s:3},
        {w:'veleta',s:3},{w:'impredecible',s:3},{w:'preparado',s:3},{w:'despreciable',s:3},
        {w:'extraordinario',s:3},{w:'cobarde',s:3},{w:'ególatra',s:3},{w:'pinocho',s:3},
        {w:'indestructible',s:3},{w:'insumergible',s:3},{w:'independiente',s:3},
        {w:'soberbio',s:3},{w:'chaquetero',s:3},{w:'suertudo',s:3},{w:'prepotente',s:3},
        {w:'tenacidad',s:3},{w:'tenaz',s:3},{w:'perro',s:3},{w:'manipulador',s:3},
        {w:'globalista',s:3},{w:'sociolliberal',s:3},{w:'internacional',s:3},
        {w:'diplomático',s:3},{w:'evolucion',s:3},{w:'evolución',s:3}
      ],

      // Página 2: Sánchez – votantes Sumar
      sumar: [
        {w:'superviviente',s:38},{w:'presidente',s:36},{w:'estratega',s:34},{w:'resiliente',s:32},
        {w:'lider',s:30},{w:'trabajador',s:28},{w:'perseverante',s:26},{w:'inteligente',s:24},
        {w:'estadista',s:22},{w:'valiente',s:20},{w:'negociador',s:18},{w:'luchador',s:17},
        {w:'brillante',s:16},{w:'padre',s:15},{w:'indestructible',s:14},{w:'astuto',s:13},
        {w:'mejor',s:12},{w:'audaz',s:11},{w:'carisma',s:11},{w:'triunfador',s:10},
        {w:'ganador',s:9},{w:'moderación',s:9},{w:'sanxe',s:8},{w:'majestuoso',s:8},
        {w:'democrata',s:7},{w:'impredecible',s:7},{w:'príncipe',s:7},{w:'perro',s:6},
        {w:'maquiavelo',s:6},{w:'pistolero',s:6},{w:'preparado',s:6},{w:'insumergible',s:5},
        {w:'fénix',s:5},{w:'futuro',s:5},{w:'camaleón',s:5},{w:'killer',s:4},
        {w:'liderazgo',s:4},{w:'guapo',s:4},{w:'extraordinario',s:4},{w:'invencible',s:4},
        {w:'marionetista',s:4},{w:'relevante',s:4},{w:'válido',s:4},{w:'dios',s:4},
        {w:'crack',s:4},{w:'progresista',s:4},{w:'capaz',s:4},{w:'resistencia',s:4},
        {w:'tenacidad',s:4},{w:'perseverancia',s:4},{w:'resiliente',s:4},{w:'ambicioso',s:4},
        {w:'conciliador',s:4},{w:'responsable',s:4},{w:'guerrero',s:4},{w:'competente',s:4},
        {w:'mediocre',s:4},{w:'democrático',s:4},{w:'listo',s:4},{w:'buen',s:4},
        {w:'arriesgado',s:4},{w:'atrevido',s:4},{w:'lince',s:4},{w:'innovador',s:4},
        {w:'eficiente',s:4},{w:'déspota',s:4},{w:'maquiavélico',s:4},{w:'chaquetero',s:4},
        {w:'ave',s:4},{w:'afortunado',s:4},{w:'imparable',s:4},{w:'flojo',s:4},
        {w:'inmortal',s:4},{w:'interesante',s:4},{w:'temerario',s:4},{w:'perfecto',s:4},
        {w:'seguro',s:4},{w:'valentia',s:4},{w:'magistral',s:4},{w:'responsable',s:4},
        {w:'audacia',s:4},{w:'camaleónico',s:4}
      ],

      // Página 3: Sánchez – votantes PP
      pp: [
        {w:'superviviente',s:38},{w:'inmortal',s:30},{w:'político',s:28},{w:'valiente',s:26},
        {w:'presidente',s:24},{w:'jugador',s:22},{w:'negociador',s:20},{w:'inteligente',s:18},
        {w:'estratega',s:17},{w:'resiliente',s:16},{w:'lider',s:15},{w:'camaleónico',s:14},
        {w:'perseverante',s:13},{w:'indestructible',s:13},{w:'estadista',s:12},{w:'imbatible',s:11},
        {w:'fénix',s:11},{w:'dialogante',s:10},{w:'audaz',s:10},{w:'osado',s:10},
        {w:'honesto',s:9},{w:'astuto',s:8},{w:'diplomático',s:8},{w:'exitoso',s:8},
        {w:'luchador',s:8},{w:'atrevido',s:8},{w:'carismático',s:8},{w:'brillante',s:7},
        {w:'genio',s:7},{w:'leyenda',s:7},{w:'perro',s:7},{w:'fuerte',s:6},
        {w:'ambición',s:6},{w:'crack',s:6},{w:'resistencia',s:6},{w:'resistente',s:6},
        {w:'vacío',s:6},{w:'vendeobreros',s:5},{w:'insensato',s:5},{w:'listo',s:5},
        {w:'interesado',s:5},{w:'oportunista',s:5},{w:'decidido',s:5},{w:'camaleón',s:5},
        {w:'pícaro',s:5},{w:'hábil',s:5},{w:'internacional',s:4},{w:'sociolliberal',s:4},
        {w:'desafortunado',s:4},{w:'veleta',s:4},{w:'animal',s:4},{w:'cobarde',s:4},
        {w:'variable',s:4},{w:'guapo',s:4},{w:'pragmático',s:4},{w:'imprevisible',s:4},
        {w:'tenaz',s:4},{w:'afortunado',s:4},{w:'mentiroso',s:4},{w:'sagaz',s:4},
        {w:'egocéntrico',s:4},{w:'narcisista',s:4},{w:'majo',s:4},{w:'invencible',s:4},
        {w:'trilero',s:4},{w:'ganador',s:4},{w:'tibio',s:4},{w:'bueno',s:3},
        {w:'capaz',s:3},{w:'correcto',s:3}
      ],

      // Página 4: Sánchez – votantes Vox
      vox: [
        {w:'mentiroso',s:38},{w:'sociópata',s:36},{w:'sinvergüenza',s:34},{w:'oportunista',s:32},
        {w:'psicópata',s:30},{w:'farsante',s:28},{w:'traidor',s:26},{w:'narcisista',s:24},
        {w:'dictador',s:22},{w:'felón',s:20},{w:'corrupto',s:18},{w:'manipulador',s:16},
        {w:'embustero',s:15},{w:'estafador',s:14},{w:'indecente',s:13},{w:'amoral',s:13},
        {w:'hipócrita',s:12},{w:'golpista',s:12},{w:'megalómano',s:11},{w:'embaucador',s:11},
        {w:'delincuente',s:11},{w:'canalla',s:10},{w:'autócrata',s:10},{w:'tóxico',s:10},
        {w:'prepotente',s:10},{w:'destructor',s:9},{w:'mentira',s:9},{w:'peligroso',s:8},
        {w:'tahúr',s:8},{w:'falso',s:8},{w:'deshonesto',s:8},{w:'cabron',s:7},
        {w:'cínico',s:7},{w:'escoria',s:7},{w:'míserable',s:7},{w:'sátrapa',s:7},
        {w:'convenenciero',s:6},{w:'déspota',s:6},{w:'tirano',s:6},{w:'difamador',s:6},
        {w:'chaquetero',s:6},{w:'despreciable',s:5},{w:'autoritario',s:5},{w:'egoísta',s:5},
        {w:'perro',s:5},{w:'basura',s:5},{w:'trilero',s:4},{w:'narcotraficante',s:4},
        {w:'obsesionado',s:4},{w:'compulsivo',s:4},{w:'fanático',s:4},{w:'yonki',s:4},
        {w:'asco',s:4},{w:'destrucción',s:4},{w:'superviviente',s:4},{w:'político',s:4},
        {w:'engaño',s:4},{w:'maquiavélico',s:4},{w:'golpista',s:4},{w:'hábil',s:4},
        {w:'audaz',s:4},{w:'inmoral',s:4},{w:'español',s:4},{w:'confiado',s:4},
        {w:'mezquino',s:4},{w:'ambicioso',s:4}
      ],

      // Página 5: Sánchez – votantes otros partidos
      otros: [
        {w:'dictador',s:38},{w:'mentiroso',s:36},{w:'sociópata',s:34},{w:'traidor',s:32},
        {w:'autócrata',s:30},{w:'felón',s:28},{w:'peligroso',s:26},{w:'ególatra',s:24},
        {w:'psicópata',s:22},{w:'delincuente',s:20},{w:'criminal',s:18},{w:'sinvergüenza',s:16},
        {w:'tirano',s:14},{w:'autoritario',s:13},{w:'imbécil',s:12},{w:'inútil',s:12},
        {w:'corrupción',s:11},{w:'malo',s:10},{w:'mentira',s:10},{w:'megalómano',s:9},
        {w:'impostado',s:9},{w:'desequilibrado',s:9},{w:'ambicioso',s:8},{w:'egoísta',s:8},
        {w:'estafador',s:8},{w:'narcisista',s:8},{w:'vendido',s:7},{w:'basura',s:7},
        {w:'vendepatrias',s:7},{w:'globalista',s:7},{w:'putero',s:7},{w:'mierda',s:6},
        {w:'loco',s:6},{w:'rata',s:6},{w:'resentido',s:6},{w:'déspota',s:6},
        {w:'hipócrila',s:5},{w:'execrable',s:5},{w:'escoria',s:5},{w:'incompetente',s:5},
        {w:'subnormal',s:5},{w:'maquiavelo',s:5},{w:'autoritario',s:4},{w:'satán',s:4},
        {w:'asesino',s:4},{w:'golpista',s:4},{w:'persona',s:4},{w:'compulsivo',s:4},
        {w:'ambista',s:4},{w:'narcotraficante',s:4}
      ]
    }
  },

  // ─────────────────────────────────────────────
  //  ALBERTO NÚÑEZ FEIJÓO
  // ─────────────────────────────────────────────
  feijoo: {
    nombre: 'Alberto N. Feijóo', partido: 'PP', inicial: 'AF', color: '#1565c0',
    words: {

      // Página 7: Feijóo – votantes PP
      pp: [
        {w:'inútil',s:38},{w:'cobarde',s:36},{w:'mentiroso',s:34},{w:'pánfilo',s:32},
        {w:'imbécil',s:30},{w:'mediocre',s:28},{w:'incompetente',s:26},{w:'falso',s:24},
        {w:'pusilánime',s:22},{w:'patético',s:20},{w:'fracasado',s:18},{w:'cómplice',s:17},
        {w:'decepción',s:16},{w:'inutilidad',s:16},{w:'hipócrita',s:15},{w:'marioneta',s:14},
        {w:'perdedor',s:14},{w:'demócrata',s:13},{w:'débil',s:13},{w:'ridículo',s:12},
        {w:'pasivo',s:11},{w:'blandengue',s:11},{w:'lider',s:10},{w:'traidor',s:10},
        {w:'paciente',s:9},{w:'sensato',s:9},{w:'pesado',s:8},{w:'honesto',s:8},
        {w:'listo',s:8},{w:'insípido',s:7},{w:'desorientado',s:7},{w:'moderación',s:7},
        {w:'iluso',s:7},{w:'senil',s:6},{w:'vergonzoso',s:6},{w:'títere',s:6},
        {w:'acomplejado',s:6},{w:'socialista',s:6},{w:'esperanza',s:5},{w:'gallego',s:5},
        {w:'tibio',s:5},{w:'muerto',s:5},{w:'blando',s:4},{w:'pelele',s:4},
        {w:'blandón',s:4},{w:'cobardón',s:4},{w:'cadáver',s:4},{w:'vendido',s:4},
        {w:'pardillo',s:4},{w:'payaso',s:4},{w:'percebe',s:4},{w:'taimado',s:4},
        {w:'anticuado',s:4},{w:'desmontado',s:4},{w:'populista',s:4},{w:'corrupto',s:4},
        {w:'retrasado',s:4},{w:'narcotraficante',s:4},{w:'maricomplejines',s:4},
        {w:'madrileñizado',s:4},{w:'galleguista',s:4},{w:'borrego',s:4},{w:'inepto',s:4},
        {w:'aburrido',s:4},{w:'parvo',s:4},{w:'plano',s:4},{w:'siervo',s:4},
        {w:'limitado',s:4},{w:'pansinsal',s:4},{w:'prudente',s:4},{w:'solvente',s:4},
        {w:'insolvente',s:4},{w:'inactivo',s:4},{w:'malvado',s:4},{w:'indeciso',s:4},
        {w:'educado',s:4},{w:'senil',s:4},{w:'lamebotas',s:4},{w:'confiable',s:4},
        {w:'circunstancial',s:4},{w:'correcto',s:4},{w:'desapercibido',s:4},{w:'suave',s:4},
        {w:'extra-moderado',s:4},{w:'burgués',s:4},{w:'cantamañanas',s:4},{w:'masón',s:4},
        {w:'incapacidad',s:4},{w:'acabado',s:4},{w:'bobo',s:4},{w:'derrota',s:4},
        {w:'desustanciado',s:4},{w:'gris',s:4},{w:'espantapájaros',s:4},{w:'cándido',s:4},
        {w:'rajoy',s:4},{w:'carismático',s:4},{w:'espanyolista',s:4},{w:'intervencionista',s:4},
        {w:'inapto',s:4},{w:'liderazgo',s:4},{w:'sobrevalorado',s:4},{w:'marioneta',s:4},
        {w:'dependiente',s:4},{w:'vago',s:4},{w:'dormido',s:4},{w:'legal',s:4},
        {w:'servil',s:4},{w:'cambio',s:4},{w:'empanado',s:4},{w:'pamplinas',s:4},
        {w:'moderado',s:4},{w:'magictoni',s:4},{w:'irresponsable',s:4},{w:'facha',s:4},
        {w:'manipulador',s:4},{w:'marica',s:4},{w:'acojonado',s:4},{w:'conciliador',s:4},
        {w:'innecesario',s:4},{w:'continuidad',s:4},{w:'golpista',s:4},{w:'indolente',s:4},
        {w:'carisma',s:4},{w:'ayuso',s:4},{w:'simpático',s:4},{w:'interesante',s:4},
        {w:'insulso',s:4},{w:'rancio',s:4},{w:'sumiso',s:4},{w:'fascista',s:4},
        {w:'gestor',s:4},{w:'cadáver',s:4},{w:'moñas',s:4},{w:'farsante',s:4},
        {w:'tradicional',s:4},{w:'insignificante',s:4},{w:'seguridad',s:4},
        {w:'narcopolítica',s:4},{w:'predecible',s:4},{w:'bluf',s:4},{w:'parvo',s:4},
        {w:'caduco',s:4},{w:'sosegado',s:4},{w:'democracia',s:4},{w:'sensatez',s:4},
        {w:'sólido',s:4},{w:'estadista',s:4},{w:'limitadito',s:4},{w:'salvador',s:4},
        {w:'feijoy',s:4},{w:'inexperto',s:4},{w:'progre',s:4},{w:'llorona',s:4},
        {w:'seco',s:4},{w:'plano',s:4},{w:'iletrado',s:4},{w:'mentira',s:4},
        {w:'honor',s:4},{w:'novita',s:4},{w:'cruel',s:4},{w:'moderación',s:4},
        {w:'leal',s:4},{w:'narcotraficante',s:4},{w:'demente',s:4},{w:'fiasco',s:4},
        {w:'maricón',s:4},{w:'aburrido',s:4}
      ],

      // Página 8: Feijóo – votantes Vox
      vox: [
        {w:'pusilánime',s:34},{w:'mediocre',s:32},{w:'aburrido',s:30},{w:'cobarde',s:28},
        {w:'blando',s:26},{w:'honesto',s:24},{w:'moderado',s:22},{w:'conciliador',s:20},
        {w:'esperanza',s:18},{w:'lider',s:17},{w:'tranquilo',s:16},{w:'inútil',s:15},
        {w:'débil',s:14},{w:'presidente',s:14},{w:'perdedor',s:13},{w:'insustancial',s:13},
        {w:'perseverante',s:12},{w:'demócrata',s:12},{w:'paciente',s:12},{w:'institucional',s:11},
        {w:'tibio',s:11},{w:'estadista',s:10},{w:'acojonado',s:10},{w:'carismático',s:9},
        {w:'sojas',s:9},{w:'futuro',s:8},{w:'técnico',s:8},{w:'coherente',s:8},
        {w:'descolocado',s:8},{w:'feijoy',s:7},{w:'sensatez',s:7},{w:'vendido',s:6},
        {w:'pacífico',s:6},{w:'pasado',s:6},{w:'firme',s:6},{w:'solvente',s:6},
        {w:'previsible',s:6},{w:'estatista',s:6},{w:'responsable',s:6},{w:'predecible',s:6},
        {w:'impecable',s:6},{w:'calmado',s:6},{w:'soso',s:6},{w:'frío',s:6},
        {w:'desubicado',s:5},{w:'anticuado',s:5},{w:'sincero',s:5},{w:'sólido',s:5},
        {w:'legal',s:5},{w:'audaz',s:5},{w:'cercano',s:5},{w:'confiable',s:5},
        {w:'administrador',s:5},{w:'blandengue',s:5},{w:'educado',s:5},{w:'conservador',s:5},
        {w:'blandito',s:5},{w:'esperanzador',s:5},{w:'liderazgo',s:4},{w:'firmeza',s:4},
        {w:'cambio',s:4},{w:'seguro',s:4},{w:'estatista',s:4},{w:'serio',s:4},
        {w:'responsable',s:4},{w:'repuesto',s:4},{w:'desapercibido',s:4},{w:'impecable',s:4},
        {w:'soso',s:4},{w:'narco',s:4},{w:'moderadito',s:4},{w:'flojo',s:4},
        {w:'desubicado',s:4},{w:'pansinsál',s:4},{w:'desorientado',s:4},{w:'equilibrado',s:4},
        {w:'capaz',s:4},{w:'antiguo',s:4},{w:'gallego',s:4},{w:'amigable',s:4},
        {w:'incertidumbre',s:4},{w:'relevante',s:4},{w:'descentralizado',s:4},{w:'honor',s:4},
        {w:'sensato',s:4},{w:'pañoli',s:4},{w:'democracia',s:4},{w:'persona',s:4},
        {w:'profesional',s:4},{w:'madrileñizado',s:4},{w:'oportunista',s:4},{w:'inocente',s:4},
        {w:'impasible',s:4},{w:'necesario',s:4},{w:'inepto',s:4},{w:'serenidad',s:4},
        {w:'gestión',s:4},{w:'pasivo',s:4},{w:'pánfilo',s:4},{w:'perdido',s:4},
        {w:'insípido',s:4},{w:'equipo',s:4},{w:'templado',s:4},{w:'centrado',s:4}
      ],

      // Página 9: Feijóo – votantes PSOE
      psoe: [
        {w:'inútil',s:38},{w:'cobarde',s:34},{w:'pusilánime',s:32},{w:'cómplice',s:30},
        {w:'incompetente',s:28},{w:'traidor',s:26},{w:'inoperante',s:24},{w:'mediocre',s:22},
        {w:'pamplinas',s:20},{w:'blandengue',s:18},{w:'maricomplejines',s:17},{w:'pánfilo',s:16},
        {w:'tibio',s:16},{w:'débil',s:15},{w:'perdedor',s:15},{w:'galleguista',s:14},
        {w:'incapaz',s:13},{w:'bobo',s:12},{w:'socialista',s:11},{w:'cobardón',s:11},
        {w:'blando',s:10},{w:'masón',s:10},{w:'torpe',s:9},{w:'lerdo',s:9},
        {w:'plancha',s:8},{w:'pelele',s:8},{w:'socialdemócrata',s:8},{w:'insignificante',s:7},
        {w:'fraude',s:7},{w:'gallego',s:7},{w:'simple',s:6},{w:'hipócrita',s:6},
        {w:'populista',s:6},{w:'tonto',s:6},{w:'cateto',s:6},{w:'mierda',s:5},
        {w:'cándido',s:5},{w:'comedido',s:5},{w:'simplón',s:5},{w:'cagón',s:5},
        {w:'gallina',s:5},{w:'correcto',s:5},{w:'colaboracionista',s:5},{w:'silencio',s:5},
        {w:'elegante',s:5},{w:'moñas',s:5},{w:'cabrero',s:5},{w:'marica',s:5},
        {w:'sumiso',s:5},{w:'marioneta',s:5},{w:'lento',s:4},{w:'moderación',s:4},
        {w:'blandito',s:4},{w:'melifluo',s:4},{w:'cordero',s:4},{w:'taimado',s:4},
        {w:'quiero',s:4},{w:'honrado',s:4},{w:'imbécil',s:4},{w:'mediocre',s:4},
        {w:'queda',s:4},{w:'magictoni',s:4},{w:'fracasado',s:4},{w:'inconsciente',s:4},
        {w:'útil',s:4},{w:'asustado',s:4},{w:'insípido',s:4},{w:'inconsistente',s:4},
        {w:'serio',s:4},{w:'tranquilo',s:4},{w:'cacao',s:4},{w:'soso',s:4},
        {w:'lamebotas',s:4},{w:'bluf',s:4},{w:'socialista',s:4},{w:'tibio',s:4},
        {w:'perrobragas',s:4},{w:'miedoso',s:4},{w:'titere',s:4},{w:'tecnócrata',s:4},
        {w:'plancha',s:4},{w:'manso',s:4},{w:'político',s:4},{w:'melifluo',s:4},
        {w:'suave',s:4},{w:'veleta',s:4},{w:'presidente',s:4},{w:'empanado',s:4}
      ],

      // Página 10: Feijóo – votantes Sumar
      sumar: [
        {w:'incompetente',s:38},{w:'mediocre',s:34},{w:'perdedor',s:30},{w:'inútil',s:28},
        {w:'decepción',s:26},{w:'mentiroso',s:24},{w:'ridículo',s:22},{w:'patético',s:20},
        {w:'narcotraficante',s:18},{w:'hipócrita',s:17},{w:'falso',s:16},{w:'cobarde',s:15},
        {w:'pusilánime',s:14},{w:'inepto',s:13},{w:'disfuncional',s:12},{w:'fracaso',s:12},
        {w:'pesado',s:11},{w:'bluf',s:11},{w:'marioneta',s:10},{w:'desubicado',s:10},
        {w:'vergüenza',s:9},{w:'incongruente',s:9},{w:'mandado',s:8},{w:'impredecible',s:7},
        {w:'maldito',s:7},{w:'soso',s:6},{w:'rajoy',s:6},{w:'pringado',s:6},
        {w:'pelele',s:5},{w:'servil',s:5},{w:'trilero',s:5},{w:'derrota',s:5},
        {w:'fascista',s:5},{w:'inmaduro',s:5},{w:'traidor',s:5},{w:'ignorante',s:5},
        {w:'pésimo',s:5},{w:'cadáver',s:5},{w:'disfuncional',s:4},{w:'incoherente',s:4},
        {w:'decepcionante',s:4},{w:'triste',s:4},{w:'error',s:4},{w:'carca',s:4},
        {w:'incapaz',s:4},{w:'derrotado',s:4},{w:'monigote',s:4},{w:'inconsistente',s:4},
        {w:'tramposo',s:4},{w:'inexperto',s:4},{w:'miserable',s:4},{w:'cansino',s:4},
        {w:'fiasco',s:4},{w:'superado',s:4},{w:'flanders',s:4},{w:'caraduro',s:4},
        {w:'circunstancial',s:4},{w:'imbécil',s:4},{w:'faltón',s:4},{w:'demente',s:4},
        {w:'senil',s:4},{w:'escoria',s:4},{w:'débil',s:4},{w:'gris',s:4},
        {w:'narco',s:4},{w:'espantapájaros',s:4},{w:'insolvente',s:4},{w:'constitucionalista',s:4},
        {w:'veleta',s:4},{w:'oportunista',s:4},{w:'mandado',s:4},{w:'tergiversador',s:4},
        {w:'falaz',s:4},{w:'desconfiable',s:4},{w:'caprichoso',s:4},{w:'ineficiente',s:4},
        {w:'torpe',s:4},{w:'insuficiente',s:4},{w:'lamentablemente',s:4},{w:'incompetencia',s:4},
        {w:'fraude',s:4},{w:'indeciso',s:4},{w:'incapacidad',s:4},{w:'vergonzoso',s:4},
        {w:'reaccionario',s:4},{w:'pringado',s:4},{w:'frustrado',s:4},{w:'miserable',s:4},
        {w:'sobrado',s:4},{w:'limitado',s:4},{w:'cansino',s:4},{w:'fake',s:4},
        {w:'sinvergüenza',s:4},{w:'desorientado',s:4},{w:'inepto',s:4},{w:'perdido',s:4},
        {w:'cinúco',s:4},{w:'abascal',s:4},{w:'despistado',s:4}
      ],

      // Página 11: Feijóo – votantes otros partidos
      otros: [
        {w:'inútil',s:38},{w:'traidor',s:34},{w:'insulso',s:30},{w:'perdedor',s:28},
        {w:'pusilánime',s:26},{w:'decepción',s:24},{w:'mentiroso',s:22},{w:'inepto',s:20},
        {w:'fracasado',s:18},{w:'hipócrita',s:16},{w:'falso',s:14},{w:'cobarde',s:13},
        {w:'torpe',s:12},{w:'tramposo',s:11},{w:'aburrido',s:10},{w:'fantasma',s:10},
        {w:'camaleon',s:9},{w:'incoherente',s:9},{w:'pelele',s:9},{w:'necio',s:8},
        {w:'payaso',s:8},{w:'trilero',s:8},{w:'maniquí',s:8},{w:'marioneta',s:8},
        {w:'mafioso',s:7},{w:'ignorante',s:7},{w:'decepcionante',s:7},{w:'coñazo',s:7},
        {w:'fantoche',s:7},{w:'bobo',s:7},{w:'acabado',s:7},{w:'atontado',s:6},
        {w:'lelo',s:6},{w:'miserable',s:6},{w:'pesado',s:6},{w:'rancio',s:6},
        {w:'vago',s:6},{w:'humo',s:6},{w:'facha',s:5},{w:'anticuado',s:5},
        {w:'retroceso',s:5},{w:'simple',s:5},{w:'demente',s:5},{w:'golfo',s:5},
        {w:'desubicado',s:5},{w:'pésimo',s:5},{w:'gallego',s:4},{w:'continuidad',s:4},
        {w:'manipulador',s:4},{w:'irresponsable',s:4},{w:'débil',s:4},{w:'insuficiente',s:4},
        {w:'insustancial',s:4},{w:'vergonzoso',s:4},{w:'tibio',s:4},{w:'chorizo',s:4},
        {w:'empanado',s:4},{w:'cobarde',s:4},{w:'desesperado',s:4},{w:'invisible',s:4},
        {w:'malandrín',s:4},{w:'imbécil',s:4},{w:'percebe',s:4},{w:'tonto',s:4},
        {w:'farsante',s:4},{w:'aburrido',s:4},{w:'idiota',s:4},{w:'perdido',s:4},
        {w:'simpático',s:4},{w:'acorralado',s:4},{w:'irrelevante',s:4},{w:'cruel',s:4},
        {w:'mediocre',s:4},{w:'retrasado',s:4},{w:'cateto',s:4},{w:'político',s:4},
        {w:'incapaz',s:4},{w:'patético',s:4},{w:'reaccionario',s:4},{w:'narcopo',s:4},
        {w:'populista',s:4},{w:'manipulable',s:4}
      ]
    }
  },

  // ─────────────────────────────────────────────
  //  SANTIAGO ABASCAL
  // ─────────────────────────────────────────────
  abascal: {
    nombre: 'Santiago Abascal', partido: 'Vox', inicial: 'SA', color: '#3d9900',
    words: {

      // Página 13: Abascal – votantes Vox
      vox: [
        {w:'esperanza',s:38},{w:'valiente',s:36},{w:'salvador',s:34},{w:'honorable',s:32},
        {w:'patriota',s:30},{w:'luchador',s:26},{w:'auténtico',s:24},
        {w:'coherente',s:22},{w:'comprometido',s:20},{w:'principios',s:18},{w:'lider',s:17},
        {w:'héroe',s:16},{w:'firme',s:15},{w:'normal',s:14},{w:'español',s:13},
        {w:'futuro',s:12},{w:'genuino',s:11},{w:'decente',s:11},{w:'honrado',s:10},
        {w:'compromiso',s:9},{w:'antidemócrata',s:8},{w:'populista',s:8},{w:'honesto',s:8},
        {w:'visionario',s:7},{w:'paguita',s:7},{w:'fascista',s:7},{w:'vividor',s:6},
        {w:'radical',s:6},{w:'tarado',s:6},{w:'inútil',s:5},{w:'bravucon',s:5},
        {w:'incendiario',s:5},{w:'resentido',s:5},{w:'picha-floja',s:5},{w:'hipócrita',s:4},
        {w:'moderado',s:4},{w:'coraje',s:4},{w:'hábil',s:4},{w:'sólido',s:4},
        {w:'directo',s:4},{w:'impresionante',s:4},{w:'único',s:4},{w:'golfo',s:4},
        {w:'unidad',s:4},{w:'sionista',s:4},{w:'liondro',s:4},{w:'falange',s:4},
        {w:'efusivo',s:4},{w:'picha-floja',s:4},{w:'pasado',s:4},{w:'maldad',s:4},
        {w:'egoísta',s:4},{w:'inseguro',s:4},{w:'educación',s:4},{w:'desecho',s:4},
        {w:'hooligan',s:4},{w:'decidido',s:4},{w:'miedo',s:4},{w:'lerdo',s:4},
        {w:'reprimido',s:4},{w:'decepción',s:4},{w:'ladrón',s:4},{w:'incompetente',s:4},
        {w:'insuficiente',s:4},{w:'manipulador',s:4},{w:'cavernicola',s:4},{w:'perdidovaquero',s:4},
        {w:'retrógrado',s:4},{w:'villano',s:4},{w:'vomitivo',s:4},{w:'anacrónico',s:4},
        {w:'intolerante',s:4},{w:'ultra',s:4},{w:'monoaeuronal',s:4},{w:'inconsciente',s:4},
        {w:'neofranquista',s:4},{w:'diabólico',s:4},{w:'democracia',s:4},{w:'respetable',s:4},
        {w:'dictador',s:4},{w:'reales',s:4},{w:'trumpista',s:4},{w:'cateto',s:4},
        {w:'bravucón',s:4},{w:'noble',s:4},{w:'parásito',s:4},{w:'sinvergüenza',s:4},
        {w:'facha',s:4},{w:'bárbaro',s:4},{w:'fanático',s:4},{w:'imbecil',s:4},
        {w:'principios',s:4},{w:'despistado',s:4},{w:'impresentable',s:4},{w:'deleznable',s:4},
        {w:'irresponsable',s:4},{w:'ignorante',s:4},{w:'exaltador',s:4},{w:'cobarde',s:4},
        {w:'extremista',s:4},{w:'recalcitrante',s:4},{w:'honesto',s:4},{w:'filofranquista',s:4},
        {w:'hambriento',s:4},{w:'muerte',s:4},{w:'caducado',s:4},{w:'machirulo',s:4},
        {w:'opaco',s:4},{w:'clasista',s:4},{w:'nefasto',s:4},{w:'altisonante',s:4},
        {w:'totalitario',s:4},{w:'agresivo',s:4},{w:'falso',s:4},{w:'oportunista',s:4},
        {w:'oportuno',s:4},{w:'cavernicola',s:4},{w:'emocional',s:4},{w:'payaso',s:4},
        {w:'traidor',s:4},{w:'resistencia',s:4},{w:'imbécil',s:4},{w:'honradez',s:4},
        {w:'semita',s:4},{w:'necesario',s:4},{w:'absurdo',s:4},{w:'fascismo',s:4},
        {w:'lacra',s:4},{w:'zumbado',s:4},{w:'payá',s:4},{w:'oveja',s:4},
        {w:'infraser',s:4},{w:'integro',s:4},{w:'valores',s:4},{w:'salvación',s:4},
        {w:'demencia',s:4},{w:'inconstitucional',s:4},{w:'problemas',s:4},{w:'exagerado',s:4},
        {w:'negligente',s:4},{w:'golpista',s:4},{w:'fantasma',s:4},{w:'judio',s:4},
        {w:'energúmeno',s:4},{w:'desilusión',s:4},{w:'descentrado',s:4},{w:'seriedad',s:4},
        {w:'confianza',s:4},{w:'analfabeto',s:4},{w:'hipocrita',s:4},{w:'político',s:4},
        {w:'miserable',s:4},{w:'valentía',s:4},{w:'egoísta',s:4},{w:'solvente',s:4},
        {w:'vividor',s:4},{w:'básicoterc',s:4},{w:'vendehúmos',s:4},{w:'bravucon',s:4},
        {w:'temerario',s:4},{w:'terrorista',s:4},{w:'loco',s:4},{w:'claro',s:4},
        {w:'pepero',s:4},{w:'corto',s:4},{w:'ausente',s:4},{w:'desnortado',s:4},
        {w:'héroe',s:4},{w:'problemas',s:4},{w:'golpistas',s:4},{w:'negligente',s:4},
        {w:'alterado',s:4},{w:'español',s:4},{w:'inconstitucional',s:4},{w:'inepto',s:4},
        {w:'mentiroso',s:4},{w:'insostenible',s:4},{w:'testarudo',s:4},{w:'dañino',s:4},
        {w:'presidente',s:4},{w:'engañabobos',s:4},{w:'megustalafruta',s:4},{w:'burgués',s:4},
        {w:'caducado',s:4},{w:'alternativa',s:4},{w:'machirulo',s:4},{w:'irresponsable',s:4},
        {w:'perverso',s:4},{w:'vergonzoso',s:4},{w:'ignorante',s:4},{w:'caricatura',s:4},
        {w:'fuerza',s:4},{w:'exaltado',s:4},{w:'clasista',s:4},{w:'infrahumano',s:4},
        {w:'futuro',s:4},{w:'embustero',s:4},{w:'alarmista',s:4},{w:'altisonante',s:4},
        {w:'extremista',s:4},{w:'recalcitrante',s:4},{w:'tibio',s:4},{w:'reprimido',s:4},
        {w:'honesto',s:4}
      ],

      // Página 14: Abascal – votantes PP
      pp: [
        {w:'esperanza',s:38},{w:'patriota',s:36},{w:'valiente',s:34},{w:'salvador',s:32},
        {w:'coherente',s:30},{w:'principios',s:28},{w:'héroe',s:26},{w:'honrado',s:24},
        {w:'firme',s:22},{w:'lider',s:20},{w:'luchador',s:18},{w:'estadista',s:16},
        {w:'presidente',s:14},{w:'valentía',s:13},{w:'auténtico',s:13},{w:'español',s:12},
        {w:'normal',s:12},{w:'grande',s:11},{w:'honradez',s:11},{w:'correcto',s:10},
        {w:'responsable',s:9},{w:'bravo',s:9},{w:'conservador',s:9},{w:'fuerza',s:8},
        {w:'férreo',s:8},{w:'sólido',s:8},{w:'fuerte',s:8},{w:'noble',s:8},
        {w:'excelente',s:7},{w:'integro',s:7},{w:'patriotismo',s:7},{w:'alternativa',s:7},
        {w:'carismático',s:6},{w:'razonable',s:6},{w:'marioneta',s:6},{w:'reaccionario',s:6},
        {w:'gallito',s:5},{w:'populista',s:5},{w:'flojo',s:5},{w:'cobarde',s:5},
        {w:'duro',s:5},{w:'macho',s:5},{w:'sensato',s:5},{w:'impresionante',s:5},
        {w:'futuro',s:5},{w:'respetable',s:5},{w:'caudillo',s:5},{w:'obcecado',s:5},
        {w:'intencionado',s:5},{w:'honesto',s:5},{w:'afrontar',s:5},{w:'tosco',s:5},
        {w:'inútil',s:4},{w:'perdido',s:4},{w:'esperanzador',s:4},{w:'liderazgo',s:4},
        {w:'coerencia',s:4},{w:'descentrado',s:4},{w:'tradicional',s:4},{w:'aprovechado',s:4},
        {w:'valuente',s:4},{w:'reales',s:4},{w:'bueno',s:4},{w:'introvertido',s:4},
        {w:'judio',s:4},{w:'algo',s:4},{w:'cumplidor',s:4},{w:'pechorrio',s:4},
        {w:'leal',s:4},{w:'raza',s:4},{w:'exagerado',s:4},{w:'contundente',s:4},
        {w:'vaquero',s:4},{w:'implicado',s:4},{w:'egocéntrico',s:4},{w:'vividor',s:4},
        {w:'salvación',s:4},{w:'pelele',s:4},{w:'tibio',s:4},{w:'moderado',s:4},
        {w:'heroe',s:4},{w:'coherentefuerza',s:4},{w:'conservador',s:4}
      ],

      // Página 15: Abascal – votantes PSOE
      psoe: [
        {w:'populista',s:38},{w:'peligroso',s:36},{w:'extremista',s:34},{w:'agitador',s:32},
        {w:'luchador',s:30},{w:'radical',s:28},{w:'patriota',s:26},{w:'demagogo',s:24},
        {w:'fascista',s:22},{w:'incendiario',s:20},{w:'exaltado',s:18},{w:'alarmista',s:17},
        {w:'crispador',s:16},{w:'inoportuno',s:15},{w:'bocazas',s:14},{w:'kamikaze',s:13},
        {w:'fanático',s:12},{w:'firme',s:11},{w:'payaso',s:11},{w:'caricatura',s:10},
        {w:'ausente',s:10},{w:'anacrónico',s:10},{w:'obsoleto',s:9},{w:'inútil',s:9},
        {w:'bravucón',s:9},{w:'bravo',s:8},{w:'necio',s:8},{w:'leal',s:8},
        {w:'correcto',s:7},{w:'guerrero',s:7},{w:'directo',s:7},{w:'incapaz',s:6},
        {w:'irresponsable',s:6},{w:'inepto',s:6},{w:'bochornoso',s:6},{w:'perdido',s:5},
        {w:'natural',s:5},{w:'fuerza',s:5},{w:'futuro',s:5},{w:'miedo',s:5},
        {w:'español',s:5},{w:'honorable',s:5},{w:'decisión',s:5},{w:'claro',s:5},
        {w:'agresivo',s:5},{w:'estridente',s:5},{w:'oportunista',s:5},{w:'esperpento',s:5},
        {w:'motivado',s:5},{w:'franco',s:5},{w:'rancio',s:5},{w:'altercador',s:5},
        {w:'bocazas',s:4},{w:'kamikaze',s:4},{w:'arcaico',s:4},{w:'conservador',s:4},
        {w:'fanático',s:4},{w:'clasista',s:4},{w:'extremo',s:4},{w:'despistado',s:4},
        {w:'bueno',s:4},{w:'decidido',s:4},{w:'nepotismo',s:4},{w:'chulo',s:4},
        {w:'flojo',s:4},{w:'fascista',s:4},{w:'anacrónico',s:4},{w:'directo',s:4},
        {w:'basado',s:4},{w:'nacionalista',s:4},{w:'carisma',s:4},{w:'perdido',s:4},
        {w:'natural',s:4},{w:'luchador',s:4},{w:'patriota',s:4},{w:'populista',s:4},
        {w:'indigno',s:4},{w:'extraño',s:4},{w:'inconsciente',s:4},{w:'educación',s:4},
        {w:'emocional',s:4},{w:'inexperto',s:4},{w:'aprovechado',s:4},{w:'fanfarrón',s:4},
        {w:'irresponsable',s:4},{w:'bocazas',s:4},{w:'bravucon',s:4},{w:'imprudente',s:4},
        {w:'patria',s:4},{w:'insostenible',s:4},{w:'hambriento',s:4},{w:'inutil',s:4},
        {w:'lacra',s:4},{w:'lógico',s:4},{w:'altercador',s:4},{w:'defensor',s:4},
        {w:'embustero',s:4},{w:'provocador',s:4},{w:'coherenteantiguo',s:4},{w:'desnortado',s:4},
        {w:'cuentista',s:4},{w:'estridente',s:4},{w:'exaltado',s:4},{w:'belloto',s:4},
        {w:'duro',s:4},{w:'leal',s:4}
      ],

      // Página 16: Abascal – votantes Sumar
      sumar: [
        {w:'fascista',s:38},{w:'dictador',s:36},{w:'peligroso',s:34},{w:'incendiario',s:32},
        {w:'ultra',s:30},{w:'antiguo',s:28},{w:'mentiroso',s:26},{w:'inepto',s:24},
        {w:'inútil',s:22},{w:'psicópata',s:20},{w:'reaccionario',s:18},{w:'hipócrita',s:17},
        {w:'cobarde',s:16},{w:'totalitario',s:15},{w:'dañino',s:15},{w:'franquista',s:14},
        {w:'malvado',s:13},{w:'siniestro',s:13},{w:'dictadura',s:12},{w:'vividor',s:12},
        {w:'alborotador',s:11},{w:'miserable',s:11},{w:'agitador',s:11},{w:'iletrado',s:10},
        {w:'ladrón',s:10},{w:'bárbaro',s:10},{w:'inmoral',s:9},{w:'ultraderechista',s:9},
        {w:'manipulador',s:8},{w:'villano',s:8},{w:'agresivo',s:7},{w:'rastrero',s:7},
        {w:'testarudo',s:7},{w:'tarado',s:6},{w:'facha',s:6},{w:'trumpista',s:6},
        {w:'milei',s:6},{w:'incapaz',s:6},{w:'traidor',s:6},{w:'parodia',s:6},
        {w:'zumbado',s:6},{w:'fantoche',s:6},{w:'temerario',s:6},{w:'provocador',s:6},
        {w:'desesperado',s:6},{w:'inseguro',s:6},{w:'ridículo',s:5},{w:'autoritario',s:5},
        {w:'chabacano',s:5},{w:'cateto',s:5},{w:'sinvergüenza',s:5},{w:'mentiroso',s:5},
        {w:'inmoral',s:5},{w:'malvado',s:5},{w:'holgazán',s:5},{w:'hooligan',s:5},
        {w:'villano',s:5},{w:'nocivo',s:5},{w:'ruin',s:5},{w:'despreciable',s:5},
        {w:'impresentable',s:5},{w:'irresponsable',s:5},{w:'ignorante',s:5},{w:'fascismo',s:5},
        {w:'demonio',s:5},{w:'incapaz',s:4},{w:'parodia',s:4},{w:'zumbado',s:4},
        {w:'siniestro',s:4},{w:'dañino',s:4},{w:'desecho',s:4},{w:'testarudo',s:4},
        {w:'infraser',s:4},{w:'rastrero',s:4},{w:'provocador',s:4},{w:'autoritario',s:4},
        {w:'chabacano',s:4},{w:'aprovechado',s:4},{w:'cateto',s:4},{w:'peligroso',s:4},
        {w:'chiringuito',s:4},{w:'ultraderechista',s:4},{w:'sinvergüenza',s:4},{w:'antiguo',s:4},
        {w:'vago',s:4},{w:'mentiroso',s:4},{w:'inmoral',s:4},{w:'cobarde',s:4},
        {w:'represor',s:4},{w:'maldad',s:4},{w:'holgazán',s:4},{w:'desubicado',s:4},
        {w:'extremo',s:4},{w:'retrogado',s:4},{w:'vividor',s:4},{w:'hipocrita',s:4},
        {w:'neandertal',s:4},{w:'impresentable',s:4},{w:'malaje',s:4},{w:'mononeuronal',s:4},
        {w:'decimonónico',s:4},{w:'gallina',s:4},{w:'repugnante',s:4},{w:'cordero',s:4},
        {w:'ignorante',s:4},{w:'incompetente',s:4},{w:'negligente',s:4},{w:'manipulador',s:4},
        {w:'parásito',s:4},{w:'chivato',s:4},{w:'pesado',s:4},{w:'nazi',s:4},
        {w:'radical',s:4},{w:'psicópata',s:4},{w:'nocivo',s:4},{w:'ruin',s:4},
        {w:'demonio',s:4},{w:'odio',s:4},{w:'nada',s:4},{w:'desquiciado',s:4},
        {w:'antidemócrata',s:4},{w:'inconsciente',s:4},{w:'fascismo',s:4},{w:'deleznable',s:4},
        {w:'falso',s:4},{w:'parásito',s:4},{w:'pesado',s:4},{w:'falange',s:4}
      ],

      // Página 17: Abascal – votantes otros partidos
      otros: [
        {w:'vividor',s:38},{w:'marioneta',s:36},{w:'inútil',s:34},{w:'cobarde',s:32},
        {w:'perdedor',s:30},{w:'pusilánime',s:28},{w:'anticuado',s:26},{w:'imbécil',s:24},
        {w:'caduco',s:22},{w:'mentiroso',s:20},{w:'bochornoso',s:18},{w:'irrelevante',s:17},
        {w:'hipócrita',s:16},{w:'mediocre',s:15},{w:'fracasado',s:15},{w:'impresentable',s:14},
        {w:'fútil',s:14},{w:'inutilidad',s:13},{w:'estatista',s:13},{w:'manipulador',s:12},
        {w:'narcotraficante',s:12},{w:'dormido',s:12},{w:'golpista',s:12},{w:'destronado',s:12},
        {w:'mentira',s:11},{w:'socialista',s:11},{w:'incompetente',s:11},{w:'iluso',s:11},
        {w:'cantamañanas',s:10},{w:'fascista',s:10},{w:'desubicado',s:10},{w:'insuficiente',s:10},
        {w:'antiguo',s:9},{w:'mafioso',s:9},{w:'masón',s:8},{w:'tradicional',s:8},
        {w:'limitadito',s:8},{w:'bobotítere',s:7},{w:'irresponsable',s:7},{w:'vendehúmos',s:7},
        {w:'ignorante',s:7},{w:'bochornoso',s:6},{w:'sereno',s:6},{w:'anticuado',s:6},
        {w:'facha',s:6},{w:'fascistas',s:6},{w:'vividor',s:6},{w:'odio',s:6},
        {w:'ultra',s:6},{w:'machirulo',s:5},{w:'asqueroso',s:5},{w:'político',s:5},
        {w:'totalitario',s:5},{w:'neofranquista',s:5},{w:'extremismo',s:5},{w:'exaltado',s:5},
        {w:'pepero',s:5},{w:'lacra',s:5},{w:'dinamitador',s:5},{w:'fantoche',s:5},
        {w:'asco',s:5},{w:'peligroso',s:5},{w:'marioneta',s:5},{w:'provocador',s:5},
        {w:'imbécil',s:4},{w:'megustalafruta',s:4},{w:'vomitivo',s:4},{w:'picha-floja',s:4},
        {w:'villano',s:4},{w:'trastornado',s:4},{w:'golpista',s:4},{w:'extremista',s:4},
        {w:'incompetente',s:4},{w:'loco',s:4},{w:'irrespetuoso',s:4},{w:'intolerante',s:4},
        {w:'caducado',s:4},{w:'anacrónico',s:4},{w:'esmegma',s:4},{w:'reprimido',s:4},
        {w:'retrasado',s:4},{w:'muerte',s:4},{w:'psicópata',s:4},{w:'aprovechado',s:4},
        {w:'cobarde',s:4},{w:'cabrón',s:4},{w:'antidemócrata',s:4},{w:'cínico',s:4},
        {w:'energúmeno',s:4},{w:'fracasado',s:4},{w:'retrogrado',s:4},{w:'hueco',s:4},
        {w:'cateto',s:4},{w:'oveja',s:4},{w:'retroceso',s:4},{w:'simple',s:4},
        {w:'demente',s:4},{w:'golfo',s:4},{w:'jeta',s:4},{w:'ultraderechista',s:4},
        {w:'casposo',s:4},{w:'naftalina',s:4},{w:'lendo',s:4},{w:'idiota',s:4},
        {w:'nocivo',s:4},{w:'nini',s:4},{w:'loco',s:4}
      ]
    }
  },

  // ─────────────────────────────────────────────
  //  YOLANDA DÍAZ
  // ─────────────────────────────────────────────
  yolanda: {
    nombre: 'Yolanda Díaz', partido: 'Sumar', inicial: 'YD', color: '#e91e8c',
    words: {

      // Página 19: Yolanda – votantes Sumar
      sumar: [
        {w:'trabajadora',s:38},{w:'dialogante',s:36},{w:'progresista',s:34},{w:'buena',s:32},
        {w:'resolutiva',s:30},{w:'luchadora',s:28},{w:'pragmática',s:26},{w:'profesional',s:24},
        {w:'hábil',s:22},{w:'hipócrita',s:20},{w:'decidida',s:18},{w:'conciliadora',s:17},
        {w:'inepta',s:16},{w:'iletrada',s:15},{w:'pija',s:14},{w:'sectaria',s:13},
        {w:'izquierda',s:13},{w:'comunista',s:12},{w:'happy',s:12},{w:'maravillosa',s:11},
        {w:'oportunista',s:11},{w:'insoportable',s:11},{w:'ingenua',s:10},{w:'ambiciosa',s:10},
        {w:'ridícula',s:10},{w:'paro',s:9},{w:'carismatica',s:8},{w:'gallega',s:8},
        {w:'optimista',s:8},{w:'futura',s:7},{w:'visionaria',s:7},{w:'eficaz',s:6},
        {w:'egocéntrica',s:6},{w:'peja',s:6},{w:'loca',s:6},{w:'mediocre',s:6},
        {w:'postura',s:6},{w:'desleal',s:6},{w:'marketing',s:6},{w:'diva',s:6},
        {w:'cuidadora',s:5},{w:'yippie',s:5},{w:'aprovechada',s:5},{w:'limitada',s:5},
        {w:'tonta',s:5},{w:'condescendiente',s:5},{w:'populista',s:5},{w:'perseverante',s:5},
        {w:'inútil',s:5},{w:'ingenua',s:5},{w:'ridícula',s:5},{w:'moderna',s:5},
        {w:'nariguda',s:5},{w:'lona',s:5},{w:'mediadora',s:5},{w:'dialogo',s:5},
        {w:'positiva',s:5},{w:'laborista',s:4},{w:'buenista',s:4},{w:'pijocomunista',s:4},
        {w:'moderna',s:4},{w:'inculta',s:4},{w:'estafadora',s:4},{w:'aprovechada',s:4},
        {w:'conformista',s:4},{w:'nariguda',s:4},{w:'mamporrera',s:4},{w:'rogela',s:4},
        {w:'empatía',s:4},{w:'dialogo',s:4},{w:'retardada',s:4},{w:'ñoña',s:4},
        {w:'infantil',s:4},{w:'analfabeto',s:4},{w:'guapa',s:4},{w:'insolidaria',s:4},
        {w:'comprensiva',s:4},{w:'diplomática',s:4},{w:'payasa',s:4},{w:'egoísta',s:4},
        {w:'desagradecida',s:4},{w:'fashionaria',s:4},{w:'insuficiente',s:4},{w:'insufrible',s:4},
        {w:'insustancial',s:4},{w:'intervencioinista',s:4},{w:'débil',s:4},{w:'persuasiva',s:4},
        {w:'cautelos',s:4},{w:'chavista',s:4},{w:'constitucionalista',s:4},{w:'desdibujada',s:4},
        {w:'desnortada',s:4},{w:'desvirtuada',s:4},{w:'sabia',s:4},{w:'coherente',s:4},
        {w:'honestidad',s:4},{w:'inutilidad',s:4},{w:'reivindicadora',s:4},{w:'presidenta',s:4},
        {w:'marketin',s:4},{w:'meretriz',s:4},{w:'miserable',s:4},{w:'necesaria',s:4},
        {w:'idola',s:4},{w:'renovación',s:4},{w:'dulce',s:4},{w:'cohetes',s:4}
      ],

      // Página 20: Yolanda – votantes PSOE
      psoe: [
        {w:'trabajadora',s:38},{w:'negociadora',s:36},{w:'luchadora',s:34},{w:'inteligente',s:32},
        {w:'progresista',s:30},{w:'social',s:28},{w:'comprometida',s:26},{w:'conciliadora',s:24},
        {w:'audaz',s:22},{w:'dialogo',s:20},{w:'trepa',s:18},{w:'decepción',s:17},
        {w:'futuro',s:16},{w:'valida',s:15},{w:'eficaz',s:15},{w:'comunista',s:14},
        {w:'izquierda',s:13},{w:'resistente',s:13},{w:'ambiciosa',s:12},{w:'correcta',s:12},
        {w:'ñoña',s:11},{w:'sosa',s:11},{w:'oportunista',s:10},{w:'aprovechada',s:10},
        {w:'insolidaria',s:9},{w:'potente',s:9},{w:'traídora',s:9},{w:'pija',s:8},
        {w:'floja',s:8},{w:'conformista',s:8},{w:'desdibujada',s:7},{w:'seriedad',s:7},
        {w:'inocente',s:7},{w:'calculadora',s:6},{w:'humo',s:6},{w:'sabia',s:6},
        {w:'patrona',s:6},{w:'vendida',s:6},{w:'autoritaria',s:6},{w:'tibia',s:6},
        {w:'socialdemócrata',s:6},{w:'feminista',s:6},{w:'tenaz',s:5},{w:'conformista',s:5},
        {w:'aprovechada',s:5},{w:'comprometida',s:5},{w:'falsa',s:5},{w:'empática',s:5},
        {w:'unionista',s:5},{w:'egocéntrica',s:5},{w:'moderada',s:5},{w:'justa',s:5},
        {w:'soñadora',s:5},{w:'enérgica',s:5},{w:'traidora',s:5},{w:'Ñoña',s:4},
        {w:'potente',s:4},{w:'tremenda',s:4},{w:'tranquila',s:4},{w:'remontada',s:4},
        {w:'vacia',s:4},{w:'vendida',s:4},{w:'interesada',s:4},{w:'autoritaria',s:4},
        {w:'ilusionante',s:4},{w:'cabal',s:4},{w:'comprensiva',s:4},{w:'competente',s:4},
        {w:'serena',s:4},{w:'firme',s:4},{w:'torpe',s:4},{w:'visionaria',s:4},
        {w:'política',s:4},{w:'eficiente',s:4},{w:'flexible',s:4},{w:'persuasiva',s:4},
        {w:'simpática',s:4},{w:'hábil',s:4},{w:'feminista',s:4},{w:'inocente',s:4},
        {w:'valiente',s:4},{w:'idealista',s:4},{w:'confianza',s:4},{w:'audaz',s:4},
        {w:'trepa',s:4},{w:'medida',s:4},{w:'coherente',s:4},{w:'aprovechada',s:4},
        {w:'correcta',s:4},{w:'dialogo',s:4},{w:'futuro',s:4},{w:'diplomática',s:4},
        {w:'falsa',s:4},{w:'empática',s:4},{w:'pragmática',s:4},{w:'dulce',s:4},
        {w:'necesaria',s:4},{w:'eficaz',s:4},{w:'calculadora',s:4},{w:'débil',s:4},
        {w:'formal',s:4},{w:'fashionaria',s:4},{w:'seriedad',s:4},{w:'oportunista',s:4},
        {w:'tranquilidad',s:4},{w:'fugaz',s:4},{w:'insolidaria',s:4},{w:'resolutiva',s:4},
        {w:'soñadora',s:4},{w:'enérgica',s:4},{w:'humo',s:4},{w:'traidora',s:4},
        {w:'válida',s:4},{w:'rollen',s:4},{w:'camaleónica',s:4},{w:'calmada',s:4},
        {w:'seguridad',s:4},{w:'insulsa',s:4},{w:'abstracta',s:4},{w:'progreso',s:4},
        {w:'pasionaria',s:4},{w:'persistencia',s:4},{w:'líder',s:4},{w:'socialista',s:4},
        {w:'cuidadora',s:4},{w:'desvirtuada',s:4}
      ],

      // Página 21: Yolanda – votantes PP
      pp: [
        {w:'trabajadora',s:38},{w:'inteligente',s:36},{w:'conciliadora',s:34},{w:'negociadora',s:32},
        {w:'pragmática',s:30},{w:'luchadora',s:28},{w:'profesional',s:26},{w:'esperanzadora',s:24},
        {w:'dialogante',s:22},{w:'optimista',s:20},{w:'maravillosa',s:18},{w:'sensata',s:17},
        {w:'eficaz',s:16},{w:'progresista',s:15},{w:'buena',s:15},{w:'falsa',s:14},
        {w:'lealtad',s:14},{w:'soberbio',s:13},{w:'gallega',s:13},{w:'amable',s:12},
        {w:'consecuente',s:12},{w:'audaz',s:11},{w:'reina',s:10},{w:'segunda',s:10},
        {w:'perseverante',s:9},{w:'discreta',s:9},{w:'laborista',s:8},{w:'floja',s:8},
        {w:'correcta',s:7},{w:'mentirosa',s:7},{w:'honesta',s:7},{w:'feminista',s:6},
        {w:'trepa',s:6},{w:'mediocre',s:6},{w:'mejor',s:6},{w:'neutra',s:6},
        {w:'posibilista',s:5},{w:'egocéntrica',s:5},{w:'determinada',s:5},{w:'directa',s:5},
        {w:'insuficiente',s:5},{w:'extravagante',s:5},{w:'corazón',s:5},{w:'lista',s:5},
        {w:'tenaz',s:5},{w:'estratega',s:5},{w:'infantil',s:5},{w:'bocachancla',s:5},
        {w:'carismatica',s:4},{w:'astuta',s:4},{w:'sobreviviente',s:4},{w:'firme',s:4},
        {w:'soberbia',s:4},{w:'brillante',s:4},{w:'dialogo',s:4},{w:'segundona',s:4},
        {w:'guapa',s:4},{w:'alegría',s:4},{w:'empática',s:4},{w:'rigurosa',s:4},
        {w:'sosegada',s:4},{w:'honesta',s:4},{w:'izquierda',s:4},{w:'eficiente',s:4},
        {w:'quedabien',s:4},{w:'determinada',s:4},{w:'ministra',s:4},{w:'bienintencionada',s:4},
        {w:'directa',s:4},{w:'progreso',s:4},{w:'lista',s:4},{w:'laborista',s:4},
        {w:'constitucionalista',s:4},{w:'sincera',s:4},{w:'estratega',s:4},{w:'bienqueda',s:4},
        {w:'defensora',s:4},{w:'débil',s:4},{w:'tibia',s:4},{w:'insuficiente',s:4},
        {w:'sensata',s:4},{w:'obrera',s:4},{w:'pijaprogre',s:4},{w:'asertiva',s:4},
        {w:'bocachancla',s:4},{w:'hippie',s:4},{w:'astuta',s:4},{w:'sobreviviente',s:4},
        {w:'discreta',s:4},{w:'mentirosa',s:4},{w:'conciliadora',s:4},{w:'esperanzadora',s:4},
        {w:'aplicada',s:4},{w:'cuqui',s:4},{w:'negociadora',s:4},{w:'optimista',s:4},
        {w:'sindicatera',s:4},{w:'floja',s:4},{w:'progresista',s:4},{w:'coherente',s:4},
        {w:'leal',s:4},{w:'gallega',s:4},{w:'comprometida',s:4},{w:'secondona',s:4},
        {w:'persistente',s:4},{w:'superviviente',s:4},{w:'sociales',s:4},{w:'panfletera',s:4},
        {w:'alegría',s:4},{w:'clasista',s:4},{w:'empática',s:4},{w:'dulce',s:4},
        {w:'siempre',s:4},{w:'rigurosa',s:4},{w:'decepción',s:4},{w:'benevolente',s:4},
        {w:'positiva',s:4},{w:'inutíl',s:4},{w:'soberbio',s:4},{w:'arrastrada',s:4},
        {w:'idola',s:4},{w:'justa',s:4},{w:'oportunista',s:4},{w:'falsedad',s:4},
        {w:'traidora',s:4},{w:'desclasada',s:4},{w:'racional',s:4},{w:'ausente',s:4},
        {w:'derechos',s:4},{w:'responsabilidad',s:4},{w:'falsedad',s:4},{w:'fraude',s:4},
        {w:'demócrata',s:4},{w:'solidaria',s:4},{w:'segura',s:4},{w:'equilibrada',s:4},
        {w:'superficial',s:4},{w:'pensadora',s:4},{w:'efectiva',s:4},{w:'lider',s:4},
        {w:'dialogo',s:4},{w:'ejemplo',s:4},{w:'perseverante',s:4},{w:'correcta',s:4},
        {w:'trepa',s:4},{w:'mejor',s:4}
      ],

      // Página 22: Yolanda – votantes Vox
      vox: [
        {w:'comunista',s:38},{w:'hipócrita',s:36},{w:'oportunista',s:34},{w:'nada',s:32},
        {w:'manipuladora',s:30},{w:'limitada',s:28},{w:'sectaria',s:26},{w:'analfabeta',s:24},
        {w:'disminuida',s:22},{w:'trepa',s:20},{w:'falsa',s:18},{w:'pija',s:17},
        {w:'inútil',s:16},{w:'tranquila',s:15},{w:'feminazi',s:14},{w:'mema',s:14},
        {w:'vendida',s:13},{w:'tonta',s:13},{w:'ilusa',s:12},{w:'bruja',s:12},
        {w:'cantamañanas',s:11},{w:'meretriz',s:11},{w:'convenida',s:10},{w:'interesada',s:10},
        {w:'ingenua',s:10},{w:'perroflauta',s:9},{w:'inculta',s:9},{w:'absurda',s:8},
        {w:'peligrosa',s:7},{w:'estupida',s:7},{w:'lady',s:7},{w:'fantasma',s:7},
        {w:'acomodada',s:7},{w:'judas',s:6},{w:'trepadora',s:6},{w:'infantil',s:6},
        {w:'motivada',s:6},{w:'estafadora',s:6},{w:'fumeta',s:6},{w:'traidora',s:6},
        {w:'egocéntrica',s:5},{w:'comunismo',s:5},{w:'cinismo',s:5},{w:'analfabeta',s:5},
        {w:'falsedad',s:5},{w:'fashionaria',s:5},{w:'inculta',s:5},{w:'rara',s:5},
        {w:'insoportable',s:5},{w:'ignorante',s:5},{w:'hipocresía',s:5},{w:'barbies',s:5},
        {w:'hippie',s:5},{w:'cursi',s:5},{w:'corta',s:5},{w:'fraude',s:5},
        {w:'acomodada',s:5},{w:'demagoga',s:5},{w:'estúpida',s:5},{w:'motos',s:5},
        {w:'mentirosa',s:5},{w:'ridícula',s:5},{w:'veleta',s:5},{w:'más',s:4},
        {w:'ultra',s:4},{w:'paleta',s:4},{w:'parásito',s:4},{w:'pelota',s:4},
        {w:'marketing',s:4},{w:'ilusionista',s:4},{w:'mala',s:4},{w:'egocéntrica',s:4},
        {w:'bruja',s:4},{w:'comunismo',s:4},{w:'pija',s:4},{w:'cinismo',s:4},
        {w:'limitada',s:4},{w:'dictadora',s:4},{w:'renovación',s:4},{w:'bobo',s:4},
        {w:'falsedad',s:4},{w:'idiota',s:4},{w:'mediocridad',s:4},{w:'ilusa',s:4},
        {w:'fashionaria',s:4},{w:'naif',s:4},{w:'inculta',s:4},{w:'rica',s:4},
        {w:'mema',s:4},{w:'convenida',s:4},{w:'mediadora',s:4},{w:'ineptitud',s:4},
        {w:'charo',s:4},{w:'inconsistente',s:4},{w:'totalitaria',s:4},{w:'tonta',s:4},
        {w:'víbora',s:4},{w:'impresentable',s:4},{w:'retrasada',s:4},{w:'obreros',s:4},
        {w:'desconfianza',s:4},{w:'incapaz',s:4},{w:'fantasma',s:4},{w:'fachada',s:4},
        {w:'vacia',s:4},{w:'inepta',s:4},{w:'ególatra',s:4},{w:'cohete',s:4},
        {w:'interesada',s:4},{w:'nariz',s:4},{w:'piel',s:4},{w:'incompetente',s:4},
        {w:'postura',s:4},{w:'acomodada',s:4},{w:'hipocresia',s:4},{w:'demagoga',s:4},
        {w:'arrivista',s:4},{w:'golpista',s:4},{w:'loboidealista',s:4},{w:'creida',s:4},
        {w:'valiente',s:4},{w:'insustancial',s:4},{w:'marioneta',s:4},{w:'coherente',s:4},
        {w:'hippie',s:4},{w:'trimaster',s:4},{w:'radical',s:4},{w:'perroflauta',s:4},
        {w:'mediadora',s:4},{w:'chupiguay',s:4},{w:'tucarvergüenza',s:4},{w:'relleno',s:4}
      ],

      // Página 23: Yolanda – votantes otros partidos
      otros: [
        {w:'ignorante',s:38},{w:'comunista',s:36},{w:'analfabeta',s:34},{w:'hipócrita',s:32},
        {w:'ridícula',s:30},{w:'aprovechada',s:28},{w:'falsa',s:26},{w:'inepta',s:24},
        {w:'cínica',s:22},{w:'traidora',s:20},{w:'antiespañola',s:18},{w:'tonta',s:17},
        {w:'mentirosa',s:16},{w:'infantil',s:15},{w:'manipuladora',s:14},{w:'loca',s:13},
        {w:'basura',s:12},{w:'populista',s:11},{w:'mediocre',s:10},{w:'inocente',s:10},
        {w:'demagogia',s:9},{w:'estafadora',s:9},{w:'protagonista',s:9},{w:'indecente',s:8},
        {w:'incompetencia',s:8},{w:'inutilidad',s:8},{w:'déspota',s:7},{w:'parásito',s:7},
        {w:'inculta',s:6},{w:'jeta',s:6},{w:'barbie',s:6},{w:'payasa',s:6},
        {w:'perdida',s:6},{w:'arpia',s:6},{w:'mono',s:6},{w:'florero',s:6},
        {w:'mentirosa',s:5},{w:'nariguda',s:5},{w:'comuntera',s:5},{w:'paradójica',s:5},
        {w:'incalificable',s:5},{w:'advenediza',s:5},{w:'arrivista',s:5},{w:'idiola',s:4},
        {w:'descerebrada',s:4},{w:'charo',s:4},{w:'farsante',s:4},{w:'incompetente',s:4},
        {w:'cortazo',s:4},{w:'piel',s:4},{w:'comutonta',s:4},{w:'lobo',s:4},
        {w:'larga',s:4},{w:'manipuladora',s:4},{w:'loca',s:4},{w:'antiespañola',s:4},
        {w:'inepta',s:4},{w:'cínica',s:4},{w:'ilusa',s:4},{w:'ridícula',s:4},
        {w:'falsa',s:4},{w:'vacianefasta',s:4},{w:'incompetente',s:4},{w:'ignorante',s:4},
        {w:'meme',s:4},{w:'boba',s:4},{w:'ambiciosa',s:4},{w:'estúpida',s:4},
        {w:'infantil',s:4},{w:'gilipollaspesada',s:4},{w:'borderling',s:4},{w:'insufrible',s:4},
        {w:'guay',s:4},{w:'insulsa',s:4},{w:'malvada',s:4},{w:'tibia',s:4},
        {w:'impresentable',s:4},{w:'vividor',s:4},{w:'mediadora',s:4},{w:'petarda',s:4},
        {w:'extremamente',s:4},{w:'navicona',s:4},{w:'psicópata',s:4},{w:'minusválida',s:4},
        {w:'horrible',s:4},{w:'mamporrera',s:4},{w:'prostituta',s:4},{w:'impostada',s:4},
        {w:'loro',s:4},{w:'aguantavelas',s:4},{w:'imbécil',s:4},{w:'neuronal',s:4},
        {w:'rata',s:4},{w:'incapaz',s:4},{w:'cordero',s:4},{w:'radical',s:4},
        {w:'tonta',s:4},{w:'convenenciera',s:4},{w:'indefinida',s:4},{w:'nada',s:4},
        {w:'deficiente',s:4},{w:'riquiña',s:4},{w:'asquerosa',s:4},{w:'interesada',s:4},
        {w:'vendida',s:4},{w:'paro',s:4},{w:'aprovechada',s:4},{w:'cursi',s:4},
        {w:'populista',s:4},{w:'mediocre',s:4},{w:'carencias',s:4},{w:'nina',s:4},
        {w:'trepa',s:4},{w:'demagogia',s:4},{w:'protagonista',s:4},{w:'pintuela',s:4},
        {w:'inocente',s:4},{w:'tontita',s:4},{w:'inutilidad',s:4},{w:'putaretardada',s:4},
        {w:'despota',s:4},{w:'idiola',s:4},{w:'rogelia',s:4},{w:'inculta',s:4},
        {w:'payasa',s:4},{w:'perdida',s:4},{w:'mono',s:4},{w:'florero',s:4},
        {w:'cortazo',s:4},{w:'sosa',s:4},{w:'psicópata',s:4}
      ]
    }
  }
};

// ════════════════════════════════════════════════
//  LÍDERES PANEL LOGIC (actualizado para 5 partidos)
// ════════════════════════════════════════════════
var _lideresInited = false;
var _lideresCurrentParty = 'pp';

function lideresInit() {
  if (_lideresInited) return;
  _lideresInited = true;
  lideresRender();
}
window.lideresInit = lideresInit;

function lideresSetParty(party, btn) {
  _lideresCurrentParty = party;
  document.querySelectorAll('.lid-party-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  lideresRender();
}
window.lideresSetParty = lideresSetParty;

function lideresRender() {
  const row = document.getElementById('lid-leaders-row');
  if (!row) return;
  const party = _lideresCurrentParty;
  const partyColors = { pp: '#1565c0', psoe: '#e53935', vox: '#3d9900', sumar: '#e91e8c', otros: '#607d8b' };
  const partyNames = { pp: 'Votantes del PP', psoe: 'Votantes del PSOE', vox: 'Votantes de Vox', sumar: 'Votantes de Sumar', otros: 'Votantes de otros partidos' };
  const accentColor = partyColors[party];

  row.innerHTML = Object.entries(LIDERES_DATA).map(([id, lider]) => {
    const words = lider.words[party] || [];
    return `
    <div class="lid-leader-card">
      <div class="lid-leader-header">
        <div class="lid-leader-avatar" style="background:${lider.color}">${lider.inicial}</div>
        <div>
          <div class="lid-leader-name">${lider.nombre}</div>
          <div class="lid-leader-party-tag">${lider.partido} · ${partyNames[party]}</div>
        </div>
      </div>
      <div class="lid-cloud-area" id="cloud-${id}" data-leader="${id}" data-party="${party}">
        <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:var(--text3);font-size:12px;">Cargando nube...</div>
      </div>
    </div>`;
  }).join('');

  // Render word clouds with slight delay for layout
  requestAnimationFrame(() => {
    Object.keys(LIDERES_DATA).forEach(id => {
      const lider = LIDERES_DATA[id];
      const words = lider.words[party] || [];
      renderWordCloud(`cloud-${id}`, words, accentColor, lider.color);
    });
  });
}

function renderWordCloud(containerId, words, accentColor, leaderColor) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const W = container.offsetWidth || 380;
  // Dynamically size height based on number of words
  const numWords = words.length;
  const H = Math.max(380, Math.min(520, numWords * 14));
  container.style.height = H + 'px';

  // Sort by size descending
  const sorted = [...words].sort((a, b) => b.s - a.s);
  const maxS = sorted[0]?.s || 1;
  const minS = sorted[sorted.length - 1]?.s || 1;

  const placed = [];
  const padding = 2;

  function getTextSize(word, fontSize) {
    // Use narrower char estimate to pack more words
    return { w: word.length * fontSize * 0.52 + padding * 2, h: fontSize * 1.2 + padding * 2 };
  }

  function overlaps(x, y, tw, th) {
    for (const p of placed) {
      if (x < p.x + p.w + 2 && x + tw > p.x - 2 && y < p.y + p.h + 2 && y + th > p.y - 2) return true;
    }
    return false;
  }

  function spiral(cx, cy, attempt) {
    const t = attempt * 0.28;
    const r = 2.0 * t;
    return { x: cx + r * Math.cos(t), y: cy + r * Math.sin(t) };
  }

  const cx = W / 2;
  const cy = H / 2;
  const html = [];
  let unplaced = 0;
  // For unplaced words, use a fallback grid layout at bottom
  const fallback = [];

  sorted.forEach((item, idx) => {
    const ratio = (item.s - minS) / (maxS - minS || 1);
    // Smaller font range so more words fit: 10-26px
    const fontSize = Math.round(10 + ratio * 16);
    const { w: tw, h: th } = getTextSize(item.w, fontSize);

    let color;
    if (idx < 5) color = leaderColor;
    else if (idx < 15) color = accentColor;
    else {
      const opacity = 0.5 + ratio * 0.4;
      color = `rgba(${hexToRgb(accentColor)},${opacity.toFixed(2)})`;
    }

    const weight = ratio > 0.6 ? 700 : ratio > 0.3 ? 600 : 400;

    let placed_pos = null;
    // Try spiral placement
    for (let attempt = 0; attempt < 1200; attempt++) {
      const { x, y } = spiral(cx, cy, attempt);
      const px = x - tw / 2;
      const py = y - th / 2;
      if (px < 0 || py < 0 || px + tw > W || py + th > H) continue;
      if (!overlaps(px, py, tw, th)) {
        placed_pos = { x: px, y: py, w: tw, h: th };
        placed.push(placed_pos);
        break;
      }
    }

    if (placed_pos) {
      html.push(`<span class="lid-word" style="left:${placed_pos.x}px;top:${placed_pos.y}px;font-size:${fontSize}px;font-weight:${weight};color:${color};" title="${item.w}">${item.w}</span>`);
    } else {
      // Fallback: add to list at bottom
      fallback.push({item, fontSize:Math.max(10,fontSize-2), weight, color});
    }
  });

  // Add any unplaced words in a compact row at the bottom of the cloud
  if (fallback.length > 0) {
    let fx = 4, fy = H - 24;
    fallback.forEach(({item, fontSize, weight, color}) => {
      const fw = item.w.length * fontSize * 0.52 + 8;
      if (fx + fw > W - 4) { fx = 4; fy -= (fontSize + 4); }
      html.push(`<span class="lid-word" style="left:${fx}px;top:${fy}px;font-size:${fontSize}px;font-weight:${weight};color:${color};opacity:0.75;" title="${item.w}">${item.w}</span>`);
      fx += fw + 4;
    });
  }

  container.innerHTML = html.join('');
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? `${parseInt(result[1],16)},${parseInt(result[2],16)},${parseInt(result[3],16)}` : '79,142,247';
}


// ═══════════════════════════════════════════════════════════
//  TRANSLACIÓN ELECTORAL v2 — DATA & RENDER
// ═══════════════════════════════════════════════════════════
(function(){

const TCOLOR = {
  'PP':'tc-pp','PSOE':'tc-psoe','VOX':'tc-vox','Sumar':'tc-sumar',
  'Podemos':'tc-podemos','Ciudadanos':'tc-cs','Cs':'tc-cs',
  'BNG':'tc-bng','PNV':'tc-pnv','EH Bildu':'tc-ehbildu','ERC':'tc-erc',
  'Junts':'tc-junts','CUP':'tc-cup','Más Madrid':'tc-masmd',
  'Compromís':'tc-compromis','CCA':'tc-cca','NCA':'tc-nca',
  'IU':'tc-iu','CHA':'tc-cha','¡Teruel Existe!':'tc-teruel',
  'UPN':'tc-upn','Geroa Bai':'tc-geroabai','PRC':'tc-prc',
  'UPL':'tc-upl','Soria Ya!':'tc-soriaya','XAV':'tc-xav',
  'PA':'tc-pa','AA':'tc-aa','PAR':'tc-par','CPM':'tc-cpm',
  'MDyC':'tc-mdyc','Ceuta Ya!':'tc-ceutaya','Somos Melilla':'tc-somosmelilla',
};
function pc(p){ return TCOLOR[p]||'tc-other'; }

function chipHtml(s, big){ 
  const sz = big ? '' : '';
  return `<div class="trl-party-chip ${pc(s.party)}">
    <span class="trl-chip-seats">${s.seats}</span>
    <span class="trl-chip-party">${s.party}</span>
  </div>`;
}

const COMM_MAP = {
  'Galicia':'galicia','País Vasco':'paisvasco','Cataluña':'cataluna',
  'Castilla y León':'castillaleon','Andalucía':'andalucia','Madrid':'madrid',
  'C. Valenciana':'valenciana','Castilla-La Mancha':'clm','Canarias':'canarias',
  'Aragón':'aragon','Murcia':'murcia','Extremadura':'extremadura',
  'Baleares':'baleares','Asturias':'asturias','Navarra':'navarra',
  'Cantabria':'cantabria','La Rioja':'rioja','Ceuta':'ceuta','Melilla':'melilla',
};

const DATA = [
  { id:'galicia_auto2gen_2020', comunidad:'Galicia', year:2020, tipo:'auto2gen',
    nota:'Pandemia: beneficia al PP como gestor establecido. Participación baja (48,97%).',
    provincias:[
      { name:'A Coruña', part:49.63,
        source:[{party:'PP',seats:14},{party:'BNG',seats:7},{party:'PSOE',seats:4}],
        result:[{party:'PP',seats:5},{party:'BNG',seats:2},{party:'PSOE',seats:1}],
        nota:'Sumando los 23.757 votos de Podemos al BNG no se arañaría un escaño al PP' },
      { name:'Pontevedra', part:50.44,
        source:[{party:'PP',seats:11},{party:'BNG',seats:6},{party:'PSOE',seats:5}],
        result:[{party:'PP',seats:3},{party:'BNG',seats:2},{party:'PSOE',seats:2}],
        nota:'Sumando votos de Podemos al BNG, le quitaría el último escaño al PP' },
      { name:'Lugo', part:48.27,
        source:[{party:'PP',seats:9},{party:'BNG',seats:3},{party:'PSOE',seats:2}],
        result:[{party:'PP',seats:3},{party:'BNG',seats:1}] },
      { name:'Ourense', part:43.92,
        source:[{party:'PP',seats:8},{party:'BNG',seats:3},{party:'PSOE',seats:3}],
        result:[{party:'PP',seats:2},{party:'BNG',seats:1},{party:'PSOE',seats:1}],
        nota:'Mejor resultado de la izquierda en autonómicas que en generales: fenómeno inusual en Galicia' },
    ],
    total:{ source:[{party:'PP',seats:42},{party:'BNG',seats:19},{party:'PSOE',seats:14}],
            result:[{party:'PP',seats:13},{party:'BNG',seats:6},{party:'PSOE',seats:4}] }
  },
  { id:'galicia_gen2auto_2023', comunidad:'Galicia', year:2023, tipo:'gen2auto',
    provincias:[
      { name:'A Coruña', part:62.93,
        source:[{party:'PP',seats:4},{party:'PSOE',seats:2},{party:'Sumar',seats:1},{party:'BNG',seats:1}],
        result:[{party:'PP',seats:12},{party:'PSOE',seats:7},{party:'Sumar',seats:3},{party:'BNG',seats:2},{party:'VOX',seats:1}],
        nota:'La subida de VOX y la izquierda resta un escaño al PP respecto a sus autonómicas' },
      { name:'Pontevedra', part:63.68,
        source:[{party:'PP',seats:3},{party:'PSOE',seats:3},{party:'Sumar',seats:1}],
        result:[{party:'PP',seats:9},{party:'PSOE',seats:7},{party:'Sumar',seats:3},{party:'BNG',seats:2},{party:'VOX',seats:1}] },
      { name:'Lugo', part:59.42,
        source:[{party:'PP',seats:3},{party:'PSOE',seats:1}],
        result:[{party:'PP',seats:8},{party:'PSOE',seats:5},{party:'BNG',seats:1}] },
      { name:'Ourense', part:52.86,
        source:[{party:'PP',seats:3},{party:'PSOE',seats:1}],
        result:[{party:'PP',seats:8},{party:'PSOE',seats:5},{party:'BNG',seats:1}] },
    ],
    total:{ source:[{party:'PP',seats:13},{party:'PSOE',seats:7},{party:'Sumar',seats:2},{party:'BNG',seats:1}],
            result:[{party:'PP',seats:37},{party:'PSOE',seats:24},{party:'Sumar',seats:6},{party:'BNG',seats:6},{party:'VOX',seats:2}] }
  },
  { id:'paisvasco_auto2gen_2020', comunidad:'País Vasco', year:2020, tipo:'auto2gen',
    provincias:[
      { name:'Álava', part:49, source:[{party:'PNV',seats:9},{party:'EH Bildu',seats:6},{party:'PSOE',seats:4},{party:'PP',seats:3},{party:'Podemos',seats:2},{party:'VOX',seats:1}], result:[{party:'PNV',seats:2},{party:'EH Bildu',seats:1},{party:'PSOE',seats:1}] },
      { name:'Vizcaya', part:50.4, source:[{party:'PNV',seats:12},{party:'EH Bildu',seats:6},{party:'PSOE',seats:3},{party:'Podemos',seats:2},{party:'PP',seats:2}], result:[{party:'PNV',seats:4},{party:'EH Bildu',seats:2},{party:'PSOE',seats:1},{party:'Podemos',seats:1}] },
      { name:'Guipúzcoa', part:52.18, source:[{party:'PNV',seats:10},{party:'EH Bildu',seats:9},{party:'PSOE',seats:3},{party:'Podemos',seats:2},{party:'PP',seats:1}], result:[{party:'PNV',seats:3},{party:'EH Bildu',seats:2},{party:'PSOE',seats:1}] },
    ],
    total:{ source:[{party:'PNV',seats:31},{party:'EH Bildu',seats:21},{party:'PSOE',seats:10},{party:'Podemos',seats:6},{party:'PP',seats:6},{party:'VOX',seats:1}],
            result:[{party:'PNV',seats:9},{party:'EH Bildu',seats:5},{party:'PSOE',seats:3},{party:'Podemos',seats:1}] }
  },
  { id:'paisvasco_gen2auto_2023', comunidad:'País Vasco', year:2023, tipo:'gen2auto',
    provincias:[
      { name:'Álava', part:65.54, source:[{party:'PSOE',seats:1},{party:'EH Bildu',seats:1},{party:'PP',seats:1},{party:'PNV',seats:1}], result:[{party:'PSOE',seats:7},{party:'EH Bildu',seats:5},{party:'PP',seats:5},{party:'PNV',seats:4},{party:'Sumar',seats:3},{party:'VOX',seats:1}] },
      { name:'Vizcaya', part:65.21, source:[{party:'PNV',seats:2},{party:'PSOE',seats:2},{party:'EH Bildu',seats:2},{party:'PP',seats:1},{party:'Sumar',seats:1}], result:[{party:'PNV',seats:7},{party:'PSOE',seats:7},{party:'EH Bildu',seats:5},{party:'PP',seats:3},{party:'Sumar',seats:3}] },
      { name:'Guipúzcoa', part:64.68, source:[{party:'EH Bildu',seats:2},{party:'PSOE',seats:2},{party:'PNV',seats:2}], result:[{party:'EH Bildu',seats:8},{party:'PSOE',seats:6},{party:'PNV',seats:6},{party:'Sumar',seats:3},{party:'PP',seats:2}] },
    ],
    total:{ source:[{party:'PSOE',seats:5},{party:'PNV',seats:5},{party:'EH Bildu',seats:5},{party:'PP',seats:2},{party:'Sumar',seats:1}],
            result:[{party:'PSOE',seats:20},{party:'EH Bildu',seats:18},{party:'PNV',seats:17},{party:'PP',seats:10},{party:'Sumar',seats:9},{party:'VOX',seats:1}] }
  },
  { id:'cataluna_auto2gen_2021', comunidad:'Cataluña', year:2021, tipo:'auto2gen',
    provincias:[
      { name:'Lleida', part:54.65, source:[{party:'Junts',seats:5},{party:'ERC',seats:5},{party:'PSOE',seats:3},{party:'CUP',seats:1},{party:'VOX',seats:1}], result:[{party:'Junts',seats:2},{party:'ERC',seats:1},{party:'PSOE',seats:1}] },
      { name:'Girona', part:54.77, source:[{party:'Junts',seats:7},{party:'ERC',seats:4},{party:'PSOE',seats:3},{party:'CUP',seats:2},{party:'VOX',seats:1}], result:[{party:'Junts',seats:3},{party:'ERC',seats:2},{party:'PSOE',seats:1}] },
      { name:'Tarragona', part:50.37, source:[{party:'ERC',seats:5},{party:'PSOE',seats:4},{party:'Junts',seats:4},{party:'VOX',seats:2},{party:'CUP',seats:1},{party:'Ciudadanos',seats:1},{party:'Podemos',seats:1}], result:[{party:'ERC',seats:2},{party:'PSOE',seats:2},{party:'Junts',seats:2}] },
      { name:'Barcelona', part:53.75, source:[{party:'PSOE',seats:23},{party:'ERC',seats:19},{party:'Junts',seats:16},{party:'VOX',seats:7},{party:'Podemos',seats:7},{party:'CUP',seats:5},{party:'Ciudadanos',seats:5},{party:'PP',seats:3}], result:[{party:'PSOE',seats:9},{party:'ERC',seats:7},{party:'Junts',seats:6},{party:'VOX',seats:3},{party:'Podemos',seats:2},{party:'CUP',seats:2},{party:'Ciudadanos',seats:2},{party:'PP',seats:1}] },
    ],
    total:{ source:[{party:'PSOE',seats:33},{party:'ERC',seats:33},{party:'Junts',seats:32},{party:'VOX',seats:11},{party:'CUP',seats:9},{party:'Podemos',seats:8},{party:'Ciudadanos',seats:6},{party:'PP',seats:3}],
            result:[{party:'PSOE',seats:13},{party:'Junts',seats:13},{party:'ERC',seats:12},{party:'VOX',seats:3},{party:'Podemos',seats:2},{party:'CUP',seats:2},{party:'Ciudadanos',seats:2},{party:'PP',seats:1}] }
  },
  { id:'cataluna_gen2auto_2023', comunidad:'Cataluña', year:2023, tipo:'gen2auto',
    provincias:[
      { name:'Lleida', part:58.93, source:[{party:'PSOE',seats:2},{party:'ERC',seats:1},{party:'Junts',seats:1}], result:[{party:'PSOE',seats:5},{party:'ERC',seats:3},{party:'Junts',seats:3},{party:'PP',seats:2},{party:'Sumar',seats:1},{party:'VOX',seats:1}] },
      { name:'Girona', part:59.88, source:[{party:'PSOE',seats:2},{party:'Junts',seats:2},{party:'ERC',seats:1},{party:'Sumar',seats:1}], result:[{party:'PSOE',seats:5},{party:'Junts',seats:4},{party:'ERC',seats:3},{party:'Sumar',seats:2},{party:'PP',seats:1},{party:'VOX',seats:1},{party:'CUP',seats:1}] },
      { name:'Tarragona', part:62.42, source:[{party:'PSOE',seats:2},{party:'ERC',seats:1},{party:'PP',seats:1},{party:'Sumar',seats:1}], result:[{party:'PSOE',seats:7},{party:'ERC',seats:3},{party:'PP',seats:2},{party:'Sumar',seats:2},{party:'Junts',seats:2},{party:'VOX',seats:2}] },
      { name:'Barcelona', part:63.36, source:[{party:'PSOE',seats:13},{party:'Sumar',seats:5},{party:'PP',seats:5},{party:'ERC',seats:4},{party:'Junts',seats:3},{party:'VOX',seats:2}], result:[{party:'PSOE',seats:33},{party:'Sumar',seats:14},{party:'PP',seats:12},{party:'ERC',seats:11},{party:'Junts',seats:8},{party:'VOX',seats:7}] },
    ],
    total:{ source:[{party:'PSOE',seats:19},{party:'Sumar',seats:7},{party:'ERC',seats:7},{party:'Junts',seats:7},{party:'PP',seats:6},{party:'VOX',seats:2}],
            result:[{party:'PSOE',seats:50},{party:'ERC',seats:20},{party:'Sumar',seats:19},{party:'Junts',seats:17},{party:'PP',seats:17},{party:'VOX',seats:11},{party:'CUP',seats:1}] }
  },
  { id:'castillaleon_auto2gen_2022', comunidad:'Castilla y León', year:2022, tipo:'auto2gen',
    provincias:[
      { name:'Ávila', part:63.95, source:[{party:'PP',seats:3},{party:'PSOE',seats:2},{party:'VOX',seats:1},{party:'XAV',seats:1}], result:[{party:'PP',seats:1},{party:'PSOE',seats:1},{party:'VOX',seats:1}] },
      { name:'Burgos', part:62.8, source:[{party:'PSOE',seats:5},{party:'PP',seats:4},{party:'VOX',seats:2}], result:[{party:'PSOE',seats:2},{party:'PP',seats:1},{party:'VOX',seats:1}] },
      { name:'León', part:60.16, source:[{party:'PSOE',seats:4},{party:'PP',seats:4},{party:'UPL',seats:3},{party:'VOX',seats:2}], result:[{party:'PSOE',seats:1},{party:'PP',seats:1},{party:'UPL',seats:1},{party:'VOX',seats:1}] },
      { name:'Palencia', part:64.95, source:[{party:'PSOE',seats:3},{party:'PP',seats:3},{party:'VOX',seats:1}], result:[{party:'PSOE',seats:1},{party:'PP',seats:1},{party:'VOX',seats:1}] },
      { name:'Salamanca', part:62.74, source:[{party:'PP',seats:5},{party:'PSOE',seats:3},{party:'VOX',seats:2}], result:[{party:'PP',seats:2},{party:'PSOE',seats:1},{party:'VOX',seats:1}] },
      { name:'Segovia', part:64.98, source:[{party:'PP',seats:3},{party:'PSOE',seats:2},{party:'VOX',seats:1}], result:[{party:'PP',seats:1},{party:'PSOE',seats:1},{party:'VOX',seats:1}] },
      { name:'Soria', part:65.8, source:[{party:'Soria Ya!',seats:3},{party:'PSOE',seats:1},{party:'PP',seats:1}], result:[{party:'Soria Ya!',seats:1},{party:'PSOE',seats:1}] },
      { name:'Valladolid', part:66.8, source:[{party:'PSOE',seats:5},{party:'PP',seats:5},{party:'VOX',seats:3},{party:'Podemos',seats:1},{party:'Ciudadanos',seats:1}], result:[{party:'PSOE',seats:2},{party:'PP',seats:2},{party:'VOX',seats:1}] },
      { name:'Zamora', part:60.8, source:[{party:'PP',seats:3},{party:'PSOE',seats:3},{party:'VOX',seats:1}], result:[{party:'PP',seats:1},{party:'PSOE',seats:1},{party:'VOX',seats:1}] },
    ],
    total:{ source:[{party:'PP',seats:31},{party:'PSOE',seats:28},{party:'VOX',seats:13},{party:'UPL',seats:3},{party:'Soria Ya!',seats:3},{party:'Podemos',seats:1},{party:'Ciudadanos',seats:1}],
            result:[{party:'PSOE',seats:11},{party:'PP',seats:10},{party:'VOX',seats:8},{party:'UPL',seats:1},{party:'Soria Ya!',seats:1}] }
  },
  { id:'castillaleon_gen2auto_2023', comunidad:'Castilla y León', year:2023, tipo:'gen2auto',
    provincias:[
      { name:'Ávila', part:72.53, source:[{party:'PP',seats:2},{party:'PSOE',seats:1}], result:[{party:'PP',seats:4},{party:'PSOE',seats:2},{party:'VOX',seats:1}] },
      { name:'Burgos', part:69.12, source:[{party:'PP',seats:2},{party:'PSOE',seats:2}], result:[{party:'PP',seats:5},{party:'PSOE',seats:4},{party:'VOX',seats:1},{party:'Sumar',seats:1}] },
      { name:'León', part:65.67, source:[{party:'PP',seats:2},{party:'PSOE',seats:2}], result:[{party:'PP',seats:5},{party:'PSOE',seats:5},{party:'VOX',seats:1},{party:'UPL',seats:1},{party:'Sumar',seats:1}] },
      { name:'Palencia', part:71.26, source:[{party:'PP',seats:2},{party:'PSOE',seats:1}], result:[{party:'PP',seats:3},{party:'PSOE',seats:3},{party:'VOX',seats:1}] },
      { name:'Salamanca', part:67.03, source:[{party:'PP',seats:3},{party:'PSOE',seats:1}], result:[{party:'PP',seats:6},{party:'PSOE',seats:3},{party:'VOX',seats:1}] },
      { name:'Segovia', part:75.3, source:[{party:'PP',seats:2},{party:'PSOE',seats:1}], result:[{party:'PP',seats:3},{party:'PSOE',seats:2},{party:'VOX',seats:1}] },
      { name:'Soria', part:67.52, source:[{party:'PP',seats:1},{party:'PSOE',seats:1}], result:[{party:'PP',seats:2},{party:'PSOE',seats:2},{party:'Soria Ya!',seats:1}] },
      { name:'Valladolid', part:74.02, source:[{party:'PP',seats:2},{party:'PSOE',seats:2},{party:'VOX',seats:1}], result:[{party:'PP',seats:7},{party:'PSOE',seats:5},{party:'VOX',seats:2},{party:'Sumar',seats:1}] },
      { name:'Zamora', part:64.22, source:[{party:'PP',seats:2},{party:'PSOE',seats:1}], result:[{party:'PP',seats:4},{party:'PSOE',seats:2},{party:'VOX',seats:1}] },
    ],
    total:{ source:[{party:'PP',seats:18},{party:'PSOE',seats:12},{party:'VOX',seats:1}],
            result:[{party:'PP',seats:39},{party:'PSOE',seats:28},{party:'VOX',seats:9},{party:'Sumar',seats:3},{party:'UPL',seats:1},{party:'Soria Ya!',seats:1}] }
  },
  { id:'andalucia_auto2gen_2022', comunidad:'Andalucía', year:2022, tipo:'auto2gen',
    provincias:[
      { name:'Almería', part:55.96, source:[{party:'PP',seats:6},{party:'PSOE',seats:3},{party:'VOX',seats:3}], result:[{party:'PP',seats:4},{party:'PSOE',seats:1},{party:'VOX',seats:1}] },
      { name:'Cádiz', part:53.08, source:[{party:'PP',seats:8},{party:'PSOE',seats:3},{party:'VOX',seats:2},{party:'AA',seats:1},{party:'PA',seats:1}], result:[{party:'PP',seats:5},{party:'PSOE',seats:2},{party:'VOX',seats:1},{party:'AA',seats:1}] },
      { name:'Córdoba', part:62.51, source:[{party:'PP',seats:7},{party:'PSOE',seats:3},{party:'VOX',seats:1},{party:'PA',seats:1}], result:[{party:'PP',seats:3},{party:'PSOE',seats:2},{party:'VOX',seats:1}], nota:'Si Por Andalucía y Adelante Andalucía sumaran votos, le quitarían un escaño al PSOE' },
      { name:'Granada', part:59.61, source:[{party:'PP',seats:6},{party:'PSOE',seats:4},{party:'VOX',seats:2},{party:'PA',seats:1}], result:[{party:'PP',seats:4},{party:'PSOE',seats:2},{party:'VOX',seats:1}], nota:'Si Por Andalucía y Adelante Andalucía sumaran, le quitarían un escaño al PP' },
      { name:'Huelva', part:54.93, source:[{party:'PP',seats:6},{party:'PSOE',seats:4},{party:'VOX',seats:1}], result:[{party:'PP',seats:3},{party:'PSOE',seats:2}] },
      { name:'Jaén', part:63.65, source:[{party:'PP',seats:6},{party:'PSOE',seats:4},{party:'VOX',seats:1}], result:[{party:'PP',seats:3},{party:'PSOE',seats:2}] },
      { name:'Málaga', part:56.21, source:[{party:'PP',seats:10},{party:'PSOE',seats:4},{party:'VOX',seats:2},{party:'PA',seats:1}], result:[{party:'PP',seats:6},{party:'PSOE',seats:3},{party:'VOX',seats:1},{party:'PA',seats:1}] },
      { name:'Sevilla', part:60.98, source:[{party:'PP',seats:9},{party:'PSOE',seats:5},{party:'VOX',seats:2},{party:'PA',seats:1},{party:'AA',seats:1}], result:[{party:'PP',seats:6},{party:'PSOE',seats:4},{party:'VOX',seats:1},{party:'PA',seats:1}] },
    ],
    total:{ source:[{party:'PP',seats:58},{party:'PSOE',seats:30},{party:'VOX',seats:14},{party:'PA',seats:5},{party:'AA',seats:2}],
            result:[{party:'PP',seats:34},{party:'PSOE',seats:18},{party:'VOX',seats:6},{party:'PA',seats:2},{party:'AA',seats:1}] }
  },
  { id:'andalucia_gen2auto_2023', comunidad:'Andalucía', year:2023, tipo:'gen2auto',
    provincias:[
      { name:'Almería', part:62.86, source:[{party:'PP',seats:3},{party:'PSOE',seats:2},{party:'VOX',seats:1}], result:[{party:'PP',seats:5},{party:'PSOE',seats:4},{party:'VOX',seats:3}] },
      { name:'Cádiz', part:63.34, source:[{party:'PP',seats:4},{party:'PSOE',seats:3},{party:'VOX',seats:1},{party:'Sumar',seats:1}], result:[{party:'PP',seats:6},{party:'PSOE',seats:5},{party:'VOX',seats:2},{party:'Sumar',seats:2}] },
      { name:'Córdoba', part:70.6, source:[{party:'PP',seats:2},{party:'PSOE',seats:2},{party:'VOX',seats:1},{party:'Sumar',seats:1}], result:[{party:'PP',seats:5},{party:'PSOE',seats:4},{party:'VOX',seats:2},{party:'Sumar',seats:1}] },
      { name:'Granada', part:66.56, source:[{party:'PP',seats:3},{party:'PSOE',seats:2},{party:'VOX',seats:1},{party:'Sumar',seats:1}], result:[{party:'PP',seats:5},{party:'PSOE',seats:5},{party:'VOX',seats:2},{party:'Sumar',seats:1}] },
      { name:'Huelva', part:64.81, source:[{party:'PP',seats:2},{party:'PSOE',seats:2},{party:'VOX',seats:1}], result:[{party:'PP',seats:4},{party:'PSOE',seats:4},{party:'VOX',seats:2},{party:'Sumar',seats:1}] },
      { name:'Jaén', part:72.08, source:[{party:'PP',seats:2},{party:'PSOE',seats:2},{party:'VOX',seats:1}], result:[{party:'PP',seats:5},{party:'PSOE',seats:4},{party:'VOX',seats:1},{party:'Sumar',seats:1}] },
      { name:'Málaga', part:64.41, source:[{party:'PP',seats:5},{party:'PSOE',seats:3},{party:'VOX',seats:2},{party:'Sumar',seats:1}], result:[{party:'PP',seats:7},{party:'PSOE',seats:5},{party:'VOX',seats:3},{party:'Sumar',seats:2}] },
      { name:'Sevilla', part:68.74, source:[{party:'PSOE',seats:5},{party:'PP',seats:4},{party:'Sumar',seats:2},{party:'VOX',seats:1}], result:[{party:'PSOE',seats:7},{party:'PP',seats:7},{party:'Sumar',seats:2},{party:'VOX',seats:2}] },
    ],
    total:{ source:[{party:'PP',seats:25},{party:'PSOE',seats:21},{party:'VOX',seats:9},{party:'Sumar',seats:6}],
            result:[{party:'PP',seats:44},{party:'PSOE',seats:38},{party:'VOX',seats:17},{party:'Sumar',seats:10}] }
  },
  { id:'madrid_auto2gen_2023', comunidad:'Madrid', year:2023, tipo:'auto2gen',
    provincias:[{ name:'Madrid', part:65.5, source:[{party:'PP',seats:70},{party:'Más Madrid',seats:27},{party:'PSOE',seats:27},{party:'VOX',seats:11}], result:[{party:'PP',seats:20},{party:'Más Madrid',seats:7},{party:'PSOE',seats:7},{party:'VOX',seats:3}], nota:'Sumando 161.032 votos perdidos de Podemos a Más Madrid: PP 19, MM 9, PSOE 7, VOX 2' }],
    total:{ source:[{party:'PP',seats:70},{party:'Más Madrid',seats:27},{party:'PSOE',seats:27},{party:'VOX',seats:11}], result:[{party:'PP',seats:20},{party:'Más Madrid',seats:7},{party:'PSOE',seats:7},{party:'VOX',seats:3}] }
  },
  { id:'madrid_gen2auto_2023', comunidad:'Madrid', year:2023, tipo:'gen2auto',
    provincias:[{ name:'Madrid', part:69.66, source:[{party:'PP',seats:16},{party:'PSOE',seats:10},{party:'Sumar',seats:6},{party:'VOX',seats:5}], result:[{party:'PP',seats:56},{party:'PSOE',seats:39},{party:'Sumar',seats:21},{party:'VOX',seats:19}] }],
    total:{ source:[{party:'PP',seats:16},{party:'PSOE',seats:10},{party:'Sumar',seats:6},{party:'VOX',seats:5}], result:[{party:'PP',seats:56},{party:'PSOE',seats:39},{party:'Sumar',seats:21},{party:'VOX',seats:19}] }
  },
  { id:'valenciana_auto2gen_2023', comunidad:'C. Valenciana', year:2023, tipo:'auto2gen',
    provincias:[
      { name:'Castellón', part:71.08, source:[{party:'PP',seats:10},{party:'PSOE',seats:8},{party:'Compromís',seats:3},{party:'VOX',seats:3}], result:[{party:'PP',seats:2},{party:'PSOE',seats:2},{party:'Compromís',seats:1}], nota:'Sumando votos de Podemos a Compromís, le quitaría un escaño al PP' },
      { name:'Valencia', part:73.01, source:[{party:'PP',seats:15},{party:'PSOE',seats:12},{party:'Compromís',seats:8},{party:'VOX',seats:5}], result:[{party:'PP',seats:6},{party:'PSOE',seats:5},{party:'Compromís',seats:3},{party:'VOX',seats:2}] },
      { name:'Alicante', part:65.96, source:[{party:'PP',seats:15},{party:'PSOE',seats:11},{party:'VOX',seats:5},{party:'Compromís',seats:4}], result:[{party:'PP',seats:6},{party:'PSOE',seats:4},{party:'VOX',seats:1},{party:'Compromís',seats:1}] },
    ],
    total:{ source:[{party:'PP',seats:40},{party:'PSOE',seats:31},{party:'Compromís',seats:15},{party:'VOX',seats:13}], result:[{party:'PP',seats:14},{party:'PSOE',seats:11},{party:'Compromís',seats:5},{party:'VOX',seats:3}] }
  },
  { id:'valenciana_gen2auto_2023', comunidad:'C. Valenciana', year:2023, tipo:'gen2auto',
    provincias:[
      { name:'Castellón', part:72.32, source:[{party:'PP',seats:2},{party:'PSOE',seats:2},{party:'VOX',seats:1}], result:[{party:'PP',seats:9},{party:'PSOE',seats:8},{party:'VOX',seats:4},{party:'Sumar',seats:3}] },
      { name:'Valencia', part:72.58, source:[{party:'PP',seats:6},{party:'PSOE',seats:5},{party:'VOX',seats:3},{party:'Sumar',seats:2}], result:[{party:'PP',seats:14},{party:'PSOE',seats:13},{party:'Sumar',seats:7},{party:'VOX',seats:6}] },
      { name:'Alicante', part:69.57, source:[{party:'PP',seats:5},{party:'PSOE',seats:4},{party:'VOX',seats:2},{party:'Sumar',seats:1}], result:[{party:'PP',seats:13},{party:'PSOE',seats:12},{party:'VOX',seats:6},{party:'Sumar',seats:4}] },
    ],
    total:{ source:[{party:'PP',seats:13},{party:'PSOE',seats:11},{party:'VOX',seats:5},{party:'Sumar',seats:4}], result:[{party:'PP',seats:36},{party:'PSOE',seats:33},{party:'VOX',seats:16},{party:'Sumar',seats:14}] }
  },
  { id:'clm_auto2gen_2023', comunidad:'Castilla-La Mancha', year:2023, tipo:'auto2gen',
    provincias:[
      { name:'Albacete', part:70.76, source:[{party:'PSOE',seats:3},{party:'PP',seats:3},{party:'VOX',seats:1}], result:[{party:'PSOE',seats:2},{party:'PP',seats:2}] },
      { name:'Ciudad Real', part:71.14, source:[{party:'PSOE',seats:4},{party:'PP',seats:2},{party:'VOX',seats:1}], result:[{party:'PSOE',seats:3},{party:'PP',seats:2}] },
      { name:'Cuenca', part:76.2, source:[{party:'PSOE',seats:3},{party:'PP',seats:2}], result:[{party:'PSOE',seats:2},{party:'PP',seats:1}] },
      { name:'Guadalajara', part:68.98, source:[{party:'PSOE',seats:2},{party:'PP',seats:2},{party:'VOX',seats:1}], result:[{party:'PSOE',seats:2},{party:'PP',seats:1}] },
      { name:'Toledo', part:70.53, source:[{party:'PSOE',seats:5},{party:'PP',seats:3},{party:'VOX',seats:1}], result:[{party:'PSOE',seats:3},{party:'PP',seats:2},{party:'VOX',seats:1}] },
    ],
    total:{ source:[{party:'PSOE',seats:17},{party:'PP',seats:12},{party:'VOX',seats:4}], result:[{party:'PSOE',seats:12},{party:'PP',seats:8},{party:'VOX',seats:1}] }
  },
  { id:'clm_gen2auto_2023', comunidad:'Castilla-La Mancha', year:2023, tipo:'gen2auto',
    provincias:[
      { name:'Albacete', part:72.7, source:[{party:'PP',seats:2},{party:'PSOE',seats:2}], result:[{party:'PP',seats:3},{party:'PSOE',seats:3},{party:'VOX',seats:1}] },
      { name:'Ciudad Real', part:73.28, source:[{party:'PP',seats:2},{party:'PSOE',seats:2},{party:'VOX',seats:1}], result:[{party:'PP',seats:3},{party:'PSOE',seats:3},{party:'VOX',seats:1}] },
      { name:'Cuenca', part:75.5, source:[{party:'PP',seats:2},{party:'PSOE',seats:1}], result:[{party:'PP',seats:2},{party:'PSOE',seats:2},{party:'VOX',seats:1}] },
      { name:'Guadalajara', part:72.47, source:[{party:'PP',seats:1},{party:'PSOE',seats:1},{party:'VOX',seats:1}], result:[{party:'PP',seats:2},{party:'PSOE',seats:2},{party:'VOX',seats:1}] },
      { name:'Toledo', part:72.43, source:[{party:'PP',seats:3},{party:'PSOE',seats:2},{party:'VOX',seats:1}], result:[{party:'PP',seats:4},{party:'PSOE',seats:3},{party:'VOX',seats:2}] },
    ],
    total:{ source:[{party:'PP',seats:10},{party:'PSOE',seats:8},{party:'VOX',seats:3}], result:[{party:'PP',seats:14},{party:'PSOE',seats:13},{party:'VOX',seats:6}] }
  },
  { id:'canarias_auto2gen_2023', comunidad:'Canarias', year:2023, tipo:'auto2gen',
    nota:'Canarias tiene circunscripciones especiales en autonómicas. Datos con todas las circunscripciones sumadas.',
    provincias:[
      { name:'S.C. Tenerife', part:null, source:[{party:'CCA',seats:12},{party:'PSOE',seats:10},{party:'PP',seats:6},{party:'VOX',seats:2}], result:[{party:'CCA',seats:3},{party:'PSOE',seats:3},{party:'PP',seats:1}] },
      { name:'Las Palmas', part:null, source:[{party:'PSOE',seats:11},{party:'PP',seats:8},{party:'NCA',seats:5},{party:'CCA',seats:4},{party:'VOX',seats:3}], result:[{party:'PSOE',seats:3},{party:'PP',seats:2},{party:'NCA',seats:1},{party:'CCA',seats:1},{party:'VOX',seats:1}] },
    ],
    total:{ source:[{party:'PSOE',seats:21},{party:'CCA',seats:16},{party:'PP',seats:14},{party:'VOX',seats:5},{party:'NCA',seats:5}], result:[{party:'PSOE',seats:6},{party:'CCA',seats:4},{party:'PP',seats:3},{party:'NCA',seats:1},{party:'VOX',seats:1}] }
  },
  { id:'canarias_gen2auto_2023', comunidad:'Canarias', year:2023, tipo:'gen2auto',
    provincias:[
      { name:'S.C. Tenerife', part:null, source:[{party:'PP',seats:3},{party:'PSOE',seats:3},{party:'CCA',seats:1}], result:[{party:'PP',seats:11},{party:'PSOE',seats:11},{party:'CCA',seats:5},{party:'Sumar',seats:3}] },
      { name:'Las Palmas', part:null, source:[{party:'PSOE',seats:3},{party:'PP',seats:3},{party:'VOX',seats:1},{party:'Sumar',seats:1}], result:[{party:'PSOE',seats:11},{party:'PP',seats:8},{party:'VOX',seats:5},{party:'Sumar',seats:3},{party:'NCA',seats:2},{party:'CCA',seats:2}] },
    ],
    total:{ source:[{party:'PSOE',seats:6},{party:'PP',seats:6},{party:'CCA',seats:1},{party:'VOX',seats:1},{party:'Sumar',seats:1}], result:[{party:'PSOE',seats:22},{party:'PP',seats:19},{party:'CCA',seats:7},{party:'Sumar',seats:6},{party:'VOX',seats:5},{party:'NCA',seats:2}] }
  },
  { id:'aragon_auto2gen_2023', comunidad:'Aragón', year:2023, tipo:'auto2gen',
    provincias:[
      { name:'Huesca', part:65.66, source:[{party:'PP',seats:8},{party:'PSOE',seats:7},{party:'VOX',seats:2},{party:'CHA',seats:1}], result:[{party:'PP',seats:2},{party:'PSOE',seats:1}], nota:'Sumando votos de Podemos a CHA le quitaría un escaño al PSOE' },
      { name:'Zaragoza', part:66.15, source:[{party:'PP',seats:15},{party:'PSOE',seats:12},{party:'VOX',seats:4},{party:'CHA',seats:2},{party:'Podemos',seats:1},{party:'IU',seats:1}], result:[{party:'PP',seats:3},{party:'PSOE',seats:3},{party:'VOX',seats:1}] },
      { name:'Teruel', part:70.7, source:[{party:'PP',seats:5},{party:'PSOE',seats:4},{party:'¡Teruel Existe!',seats:3},{party:'VOX',seats:1},{party:'PAR',seats:1}], result:[{party:'PP',seats:1},{party:'PSOE',seats:1},{party:'¡Teruel Existe!',seats:1}] },
    ],
    total:{ source:[{party:'PP',seats:28},{party:'PSOE',seats:23},{party:'VOX',seats:7},{party:'CHA',seats:3},{party:'¡Teruel Existe!',seats:3},{party:'Podemos',seats:1},{party:'IU',seats:1},{party:'PAR',seats:1}], result:[{party:'PP',seats:6},{party:'PSOE',seats:5},{party:'VOX',seats:1},{party:'¡Teruel Existe!',seats:1}] }
  },
  { id:'aragon_gen2auto_2023', comunidad:'Aragón', year:2023, tipo:'gen2auto',
    provincias:[
      { name:'Huesca', part:69.87, source:[{party:'PP',seats:2},{party:'PSOE',seats:1}], result:[{party:'PP',seats:7},{party:'PSOE',seats:7},{party:'VOX',seats:2},{party:'Sumar',seats:2}] },
      { name:'Zaragoza', part:70.73, source:[{party:'PP',seats:3},{party:'PSOE',seats:2},{party:'VOX',seats:1},{party:'Sumar',seats:1}], result:[{party:'PP',seats:14},{party:'PSOE',seats:11},{party:'VOX',seats:5},{party:'Sumar',seats:5}] },
      { name:'Teruel', part:71.99, source:[{party:'PP',seats:2},{party:'PSOE',seats:1}], result:[{party:'PP',seats:5},{party:'PSOE',seats:5},{party:'¡Teruel Existe!',seats:2},{party:'VOX',seats:2}] },
    ],
    total:{ source:[{party:'PP',seats:7},{party:'PSOE',seats:4},{party:'VOX',seats:1},{party:'Sumar',seats:1}], result:[{party:'PP',seats:26},{party:'PSOE',seats:23},{party:'VOX',seats:9},{party:'Sumar',seats:7},{party:'¡Teruel Existe!',seats:2}] }
  },
  { id:'murcia_auto2gen_2023', comunidad:'Murcia', year:2023, tipo:'auto2gen',
    provincias:[{ name:'Murcia', part:66.55, source:[{party:'PP',seats:21},{party:'PSOE',seats:13},{party:'VOX',seats:9},{party:'Podemos',seats:2}], result:[{party:'PP',seats:5},{party:'PSOE',seats:3},{party:'VOX',seats:2}] }],
    total:{ source:[{party:'PP',seats:21},{party:'PSOE',seats:13},{party:'VOX',seats:9},{party:'Podemos',seats:2}], result:[{party:'PP',seats:5},{party:'PSOE',seats:3},{party:'VOX',seats:2}] }
  },
  { id:'murcia_gen2auto_2023', comunidad:'Murcia', year:2023, tipo:'gen2auto',
    provincias:[{ name:'Murcia', part:68.68, source:[{party:'PP',seats:4},{party:'PSOE',seats:3},{party:'VOX',seats:2},{party:'Sumar',seats:1}], result:[{party:'PP',seats:19},{party:'PSOE',seats:12},{party:'VOX',seats:10},{party:'Sumar',seats:4}] }],
    total:{ source:[{party:'PP',seats:4},{party:'PSOE',seats:3},{party:'VOX',seats:2},{party:'Sumar',seats:1}], result:[{party:'PP',seats:19},{party:'PSOE',seats:12},{party:'VOX',seats:10},{party:'Sumar',seats:4}] }
  },
  { id:'extremadura_auto2gen_2023', comunidad:'Extremadura', year:2023, tipo:'auto2gen',
    provincias:[
      { name:'Cáceres', part:73.47, source:[{party:'PP',seats:13},{party:'PSOE',seats:12},{party:'VOX',seats:2},{party:'Podemos',seats:2}], result:[{party:'PP',seats:2},{party:'PSOE',seats:2}] },
      { name:'Badajoz', part:72.13, source:[{party:'PSOE',seats:16},{party:'PP',seats:15},{party:'VOX',seats:3},{party:'Podemos',seats:2}], result:[{party:'PSOE',seats:3},{party:'PP',seats:2}] },
    ],
    total:{ source:[{party:'PSOE',seats:28},{party:'PP',seats:28},{party:'VOX',seats:5},{party:'Podemos',seats:5}], result:[{party:'PSOE',seats:5},{party:'PP',seats:4}] }
  },
  { id:'extremadura_gen2auto_2023', comunidad:'Extremadura', year:2023, tipo:'gen2auto',
    provincias:[
      { name:'Cáceres', part:70.62, source:[{party:'PSOE',seats:2},{party:'PP',seats:2}], result:[{party:'PSOE',seats:12},{party:'PP',seats:11},{party:'VOX',seats:4},{party:'Sumar',seats:2}] },
      { name:'Badajoz', part:72.31, source:[{party:'PSOE',seats:2},{party:'PP',seats:2},{party:'VOX',seats:1}], result:[{party:'PSOE',seats:15},{party:'PP',seats:14},{party:'VOX',seats:5},{party:'Sumar',seats:2}] },
    ],
    total:{ source:[{party:'PSOE',seats:4},{party:'PP',seats:4},{party:'VOX',seats:1}], result:[{party:'PSOE',seats:27},{party:'PP',seats:25},{party:'VOX',seats:9},{party:'Sumar',seats:4}] }
  },
  { id:'baleares_auto2gen_2023', comunidad:'Baleares', year:2023, tipo:'auto2gen',
    nota:'Todas las circunscripciones sumadas.',
    provincias:[{ name:'Baleares', part:57.64, source:[{party:'PP',seats:24},{party:'PSOE',seats:17},{party:'Sumar',seats:9},{party:'VOX',seats:9}], result:[{party:'PP',seats:4},{party:'PSOE',seats:2},{party:'Sumar',seats:1},{party:'VOX',seats:1}] }],
    total:{ source:[{party:'PP',seats:24},{party:'PSOE',seats:17},{party:'Sumar',seats:9},{party:'VOX',seats:9}], result:[{party:'PP',seats:4},{party:'PSOE',seats:2},{party:'Sumar',seats:1},{party:'VOX',seats:1}] }
  },
  { id:'baleares_gen2auto_2023', comunidad:'Baleares', year:2023, tipo:'gen2auto',
    provincias:[{ name:'Baleares', part:61.32, source:[{party:'PP',seats:3},{party:'PSOE',seats:3},{party:'Sumar',seats:1},{party:'VOX',seats:1}], result:[{party:'PP',seats:22},{party:'PSOE',seats:18},{party:'Sumar',seats:10},{party:'VOX',seats:9}] }],
    total:{ source:[{party:'PP',seats:3},{party:'PSOE',seats:3},{party:'Sumar',seats:1},{party:'VOX',seats:1}], result:[{party:'PP',seats:22},{party:'PSOE',seats:18},{party:'Sumar',seats:10},{party:'VOX',seats:9}] }
  },
  { id:'asturias_auto2gen_2023', comunidad:'Asturias', year:2023, tipo:'auto2gen',
    nota:'Todas las circunscripciones sumadas.',
    provincias:[{ name:'Asturias', part:64.36, source:[{party:'PSOE',seats:18},{party:'PP',seats:17},{party:'Sumar',seats:5},{party:'VOX',seats:5}], result:[{party:'PSOE',seats:3},{party:'PP',seats:3},{party:'Sumar',seats:1}] }],
    total:{ source:[{party:'PSOE',seats:18},{party:'PP',seats:17},{party:'Sumar',seats:5},{party:'VOX',seats:5}], result:[{party:'PSOE',seats:3},{party:'PP',seats:3},{party:'Sumar',seats:1}] }
  },
  { id:'asturias_gen2auto_2023', comunidad:'Asturias', year:2023, tipo:'gen2auto',
    provincias:[{ name:'Asturias', part:62.9, source:[{party:'PP',seats:3},{party:'PSOE',seats:2},{party:'Sumar',seats:1},{party:'VOX',seats:1}], result:[{party:'PP',seats:17},{party:'PSOE',seats:16},{party:'Sumar',seats:7},{party:'VOX',seats:5}] }],
    total:{ source:[{party:'PP',seats:3},{party:'PSOE',seats:2},{party:'Sumar',seats:1},{party:'VOX',seats:1}], result:[{party:'PP',seats:17},{party:'PSOE',seats:16},{party:'Sumar',seats:7},{party:'VOX',seats:5}] }
  },
  { id:'navarra_auto2gen_2023', comunidad:'Navarra', year:2023, tipo:'auto2gen',
    provincias:[{ name:'Navarra', part:69.04, source:[{party:'UPN',seats:15},{party:'PSOE',seats:11},{party:'EH Bildu',seats:9},{party:'Geroa Bai',seats:7},{party:'PP',seats:3},{party:'Podemos',seats:3},{party:'VOX',seats:2}], result:[{party:'UPN',seats:2},{party:'PSOE',seats:1},{party:'EH Bildu',seats:1},{party:'Geroa Bai',seats:1}] }],
    total:{ source:[{party:'UPN',seats:15},{party:'PSOE',seats:11},{party:'EH Bildu',seats:9},{party:'Geroa Bai',seats:7},{party:'PP',seats:3},{party:'Podemos',seats:3},{party:'VOX',seats:2}], result:[{party:'UPN',seats:2},{party:'PSOE',seats:1},{party:'EH Bildu',seats:1},{party:'Geroa Bai',seats:1}] }
  },
  { id:'navarra_gen2auto_2023', comunidad:'Navarra', year:2023, tipo:'gen2auto',
    provincias:[{ name:'Navarra', part:66.37, source:[{party:'PSOE',seats:2},{party:'EH Bildu',seats:1},{party:'PP',seats:1},{party:'UPN',seats:1}], result:[{party:'PSOE',seats:14},{party:'EH Bildu',seats:9},{party:'PP',seats:9},{party:'UPN',seats:8},{party:'Sumar',seats:7},{party:'VOX',seats:3}] }],
    total:{ source:[{party:'PSOE',seats:2},{party:'EH Bildu',seats:1},{party:'PP',seats:1},{party:'UPN',seats:1}], result:[{party:'PSOE',seats:14},{party:'EH Bildu',seats:9},{party:'PP',seats:9},{party:'UPN',seats:8},{party:'Sumar',seats:7},{party:'VOX',seats:3}] }
  },
  { id:'cantabria_auto2gen_2023', comunidad:'Cantabria', year:2023, tipo:'auto2gen',
    provincias:[{ name:'Cantabria', part:70.52, source:[{party:'PP',seats:15},{party:'PRC',seats:8},{party:'PSOE',seats:8},{party:'VOX',seats:4}], result:[{party:'PP',seats:3},{party:'PRC',seats:1},{party:'PSOE',seats:1}] }],
    total:{ source:[{party:'PP',seats:15},{party:'PRC',seats:8},{party:'PSOE',seats:8},{party:'VOX',seats:4}], result:[{party:'PP',seats:3},{party:'PRC',seats:1},{party:'PSOE',seats:1}] }
  },
  { id:'cantabria_gen2auto_2023', comunidad:'Cantabria', year:2023, tipo:'gen2auto',
    provincias:[{ name:'Cantabria', part:69.94, source:[{party:'PP',seats:2},{party:'PSOE',seats:2},{party:'VOX',seats:1}], result:[{party:'PP',seats:15},{party:'PSOE',seats:12},{party:'VOX',seats:5},{party:'Sumar',seats:3}] }],
    total:{ source:[{party:'PP',seats:2},{party:'PSOE',seats:2},{party:'VOX',seats:1}], result:[{party:'PP',seats:15},{party:'PSOE',seats:12},{party:'VOX',seats:5},{party:'Sumar',seats:3}] }
  },
  { id:'rioja_auto2gen_2023', comunidad:'La Rioja', year:2023, tipo:'auto2gen',
    provincias:[{ name:'La Rioja', part:72.48, source:[{party:'PP',seats:17},{party:'PSOE',seats:12},{party:'VOX',seats:2},{party:'Podemos',seats:2}], result:[{party:'PP',seats:2},{party:'PSOE',seats:2}] }],
    total:{ source:[{party:'PP',seats:17},{party:'PSOE',seats:12},{party:'VOX',seats:2},{party:'Podemos',seats:2}], result:[{party:'PP',seats:2},{party:'PSOE',seats:2}] }
  },
  { id:'rioja_gen2auto_2023', comunidad:'La Rioja', year:2023, tipo:'gen2auto',
    provincias:[{ name:'La Rioja', part:70.19, source:[{party:'PP',seats:2},{party:'PSOE',seats:2}], result:[{party:'PP',seats:16},{party:'PSOE',seats:12},{party:'VOX',seats:3},{party:'Sumar',seats:2}] }],
    total:{ source:[{party:'PP',seats:2},{party:'PSOE',seats:2}], result:[{party:'PP',seats:16},{party:'PSOE',seats:12},{party:'VOX',seats:3},{party:'Sumar',seats:2}] }
  },
  { id:'ceuta_auto2gen_2023', comunidad:'Ceuta', year:2023, tipo:'auto2gen',
    provincias:[{ name:'Ceuta', part:57.21, source:[{party:'PP',seats:9},{party:'PSOE',seats:6},{party:'VOX',seats:5},{party:'MDyC',seats:3},{party:'Ceuta Ya!',seats:2}], result:[{party:'PP',seats:1}] }],
    total:{ source:[{party:'PP',seats:9},{party:'PSOE',seats:6},{party:'VOX',seats:5},{party:'MDyC',seats:3},{party:'Ceuta Ya!',seats:2}], result:[{party:'PP',seats:1}] }
  },
  { id:'ceuta_gen2auto_2023', comunidad:'Ceuta', year:2023, tipo:'gen2auto',
    provincias:[{ name:'Ceuta', part:53.19, source:[{party:'PP',seats:1}], result:[{party:'PP',seats:10},{party:'PSOE',seats:9},{party:'VOX',seats:6}] }],
    total:{ source:[{party:'PP',seats:1}], result:[{party:'PP',seats:10},{party:'PSOE',seats:9},{party:'VOX',seats:6}] }
  },
  { id:'melilla_auto2gen_2023', comunidad:'Melilla', year:2023, tipo:'auto2gen',
    provincias:[{ name:'Melilla', part:54.36, source:[{party:'PP',seats:14},{party:'CPM',seats:5},{party:'PSOE',seats:3},{party:'VOX',seats:2},{party:'Somos Melilla',seats:1}], result:[{party:'PP',seats:1}] }],
    total:{ source:[{party:'PP',seats:14},{party:'CPM',seats:5},{party:'PSOE',seats:3},{party:'VOX',seats:2},{party:'Somos Melilla',seats:1}], result:[{party:'PP',seats:1}] }
  },
  { id:'melilla_gen2auto_2023', comunidad:'Melilla', year:2023, tipo:'gen2auto',
    provincias:[{ name:'Melilla', part:45.24, source:[{party:'PP',seats:1}], result:[{party:'PP',seats:13},{party:'PSOE',seats:7},{party:'VOX',seats:4},{party:'CPM',seats:1}] }],
    total:{ source:[{party:'PP',seats:1}], result:[{party:'PP',seats:13},{party:'PSOE',seats:7},{party:'VOX',seats:4},{party:'CPM',seats:1}] }
  },
];

let trlDir = 'auto2gen';

window.trlSetDir = function(dir){
  trlDir = dir;
  document.getElementById('trl-btn-auto2gen').classList.toggle('active', dir==='auto2gen');
  document.getElementById('trl-btn-gen2auto').classList.toggle('active', dir==='gen2auto');
  trlRender();
};

window.trlRender = function(){
  const comm = document.getElementById('trl-comm-select').value;
  const year = document.getElementById('trl-year-select').value;
  const container = document.getElementById('trl-main-content');
  const fromLabel = trlDir==='auto2gen' ? 'AUTONÓMICAS REALES' : 'GENERALES REALES';
  const toLabel   = trlDir==='auto2gen' ? 'SI FUERAN GENERALES' : 'SI FUERAN AUTONÓMICAS';

  const filtered = DATA.filter(d => {
    if(d.tipo !== trlDir) return false;
    if(comm !== 'all' && COMM_MAP[d.comunidad] !== comm) return false;
    if(year !== 'all' && String(d.year) !== year) return false;
    return true;
  });

  if(!filtered.length){
    container.innerHTML = '<div class="trl-empty">No hay datos para esta selección</div>';
    return;
  }

  let html = '';
  filtered.forEach((d, idx) => {
    const parts = d.provincias.filter(p=>p.part!==null&&p.part!==undefined);
    const avgPart = parts.length ? (parts.reduce((a,b)=>a+b.part,0)/parts.length).toFixed(1) : null;

    html += `<div class="trl-comm-block" style="animation-delay:${idx*0.06}s">`;

    // Stripe
    html += `<div class="trl-comm-stripe">
      <span class="trl-comm-stripe-name">${d.comunidad}</span>
      <span class="trl-comm-year-badge">${d.year}</span>
      ${avgPart ? `<span class="trl-comm-part-badge">Participación media: <strong>${avgPart}%</strong></span>` : ''}
    </div>`;

    // Context note
    if(d.nota){
      html += `<div style="padding:8px 20px;background:rgba(245,183,49,0.04);border-bottom:1px solid var(--border);">
        <span style="font-size:10px;color:var(--gold);font-weight:700;font-family:var(--trl-display);letter-spacing:.5px;">💡 ${d.nota}</span>
      </div>`;
    }

    // Column labels
    html += `<div class="trl-dir-labels">
      <div class="trl-dir-label from">${fromLabel}</div>
      <div class="trl-dir-label to">⇒ ${toLabel}</div>
    </div>`;

    // Provinces
    html += `<div class="trl-provinces">`;
    for(const prov of d.provincias){
      html += `<div class="trl-prov-row">
        <div class="trl-prov-cell source">
          <div class="trl-prov-label">${prov.name}${prov.part ? `<span class="trl-prov-partlabel">${prov.part}% partic.</span>` : ''}</div>
          <div class="trl-party-list">${prov.source.map(s=>chipHtml(s)).join('')}</div>
        </div>
        <div class="trl-prov-cell result">
          <div class="trl-prov-label">&nbsp;</div>
          <div class="trl-party-list">${prov.result.map(s=>chipHtml(s)).join('')}</div>
          ${prov.nota ? `<div class="trl-note">⚠️ ${prov.nota}</div>` : ''}
        </div>
      </div>`;
    }
    html += `</div>`;

    // Totals
    html += `<div class="trl-totals-block">
      <div class="trl-totals-header">▶ TOTAL ${d.comunidad.toUpperCase()}</div>
      <div class="trl-totals-grid">
        <div class="trl-totals-col">
          <div class="trl-totals-col-label">Total real (${trlDir==='auto2gen'?'autonómicas':'generales'})</div>
          <div class="trl-totals-party-list">${d.total.source.map(s=>chipHtml(s)).join('')}</div>
        </div>
        <div class="trl-totals-col result-col">
          <div class="trl-totals-col-label accent">⇒ Traducido (${trlDir==='auto2gen'?'generales':'autonómicas'})</div>
          <div class="trl-totals-party-list">${d.total.result.map(s=>chipHtml(s)).join('')}</div>
        </div>
      </div>
    </div>`;

    html += `</div>`;
  });

  container.innerHTML = html;
};

(function waitForTabs(){
  const observer = new MutationObserver(() => {
    const panel = document.getElementById('panel-translacion');
    if(panel && panel.classList.contains('active')){
      if(!panel.dataset.trlInit){ panel.dataset.trlInit='1'; trlRender(); }
    }
  });
  observer.observe(document.body, {attributes:true, subtree:true, attributeFilter:['class']});
  const panel = document.getElementById('panel-translacion');
  if(panel && panel.classList.contains('active')) trlRender();
})();

})();


// ═══════════════════════════════════════════════════════════
//  OHIOS AUTONÓMICOS — DATA & RENDER
// ═══════════════════════════════════════════════════════════
(function() {

// ── Party color classes ───────────────────────────────────
const PCOLOR = {
  'PP':'c-pp','PSOE':'c-psoe','VOX':'c-vox','Ciudadanos':'c-cs','Cs':'c-cs',
  'Podemos':'c-podemos','IU':'c-iu','Más Madrid':'c-masmd','Sumar':'c-sumar',
  'CiU':'c-ciu','ERC':'c-erc','Junts':'c-junts','CUP':'c-cup','BNG':'c-bng',
  'PRC':'c-prc','FAC':'c-fac','JxSí':'c-jxsi','CatSíQueEsPot':'c-catsiq',
  'En Marea':'c-enmarea','Adelante Andalucía':'c-adlant','AGE':'c-age',
  'UPyD':'c-upyd','Por Andalucía':'c-poranda','CA':'c-ca','JUEX':'c-juex',
  'Aliança Catalana':'c-alcat','Podemos-IU':'c-podemos','IULV-CA':'c-iu',
  'ICV-EUiA':'c-iu','IU-CM':'c-iu'
};

function pcolor(name) {
  for (const k in PCOLOR) {
    if (name.includes(k)) return PCOLOR[k];
  }
  return 'c-other';
}

// ── Helper: compute note based on max delta ───────────────
function getNote(parties) {
  const deltas = parties.map(p => Math.abs(p.muni - p.region));
  const maxDelta = Math.max(...deltas);
  const avgDelta = deltas.reduce((a,b)=>a+b,0)/deltas.length;
  if (maxDelta <= 1.5 && avgDelta <= 0.8)
    return { text: '✓ Reflejo casi perfecto', cls: 'good' };
  if (maxDelta <= 3)
    return { text: '~ Buen espejo general', cls: 'good' };
  if (maxDelta <= 5)
    return { text: '⚠ Leve sobreestimación en algún partido', cls: 'warn' };
  return { text: '⚠ Divergencia notable en algún partido', cls: 'warn' };
}

// ── Build one year card ───────────────────────────────────
function buildYearCard(year, label, parties, note) {
  const maxVal = Math.max(...parties.flatMap(p=>[p.muni, p.region]));
  const autoNote = note || getNote(parties);

  let rows = '';
  parties.forEach(p => {
    const barMuni   = (p.muni   / maxVal * 100).toFixed(1);
    const barRegion = (p.region / maxVal * 100).toFixed(1);
    const delta     = (p.muni - p.region).toFixed(2);
    const deltaN    = parseFloat(delta);
    const deltaCls  = deltaN > 0.5 ? 'pos' : deltaN < -0.5 ? 'neg' : 'neu';
    const deltaStr  = deltaN > 0 ? `+${delta}` : delta;
    const cls       = pcolor(p.name);

    rows += `
    <div class="ohio-party-row">
      <div class="ohio-party-name-wrap">
        <div class="ohio-party-dot ${cls}"></div>
        <span class="ohio-party-name">${p.name}</span>
      </div>
      <div class="ohio-bar-rows">
        <div class="ohio-bar-line">
          <span class="ohio-bar-line-label">${label}</span>
          <div class="ohio-bar-track"><div class="ohio-bar-fill ${cls}" style="width:${barMuni}%"></div></div>
          <span class="ohio-bar-line-val">${p.muni.toFixed(2)}%</span>
          <span class="ohio-delta ${deltaCls}">${deltaStr}</span>
        </div>
        <div class="ohio-bar-line">
          <span class="ohio-bar-line-label dim">Conjunto</span>
          <div class="ohio-bar-track"><div class="ohio-bar-fill ${cls}" style="width:${barRegion}%;opacity:.45"></div></div>
          <span class="ohio-bar-line-val">${p.region.toFixed(2)}%</span>
          <span class="ohio-delta-placeholder"></span>
        </div>
      </div>
    </div>`;
  });

  return `
  <div class="ohio-year-card">
    <div class="ohio-year-header">
      <span class="ohio-year-label">${year}</span>
      <span class="ohio-year-note ${autoNote.cls}">${autoNote.text}</span>
    </div>
    <div class="ohio-cols-header">
      <div class="ohio-col-label">Partido</div>
      <div class="ohio-col-label muni-col">Municipio vs. Conjunto</div>
      <div></div>
    </div>
    <div class="ohio-bars-container">${rows}</div>
  </div>`;
}

// ════════════════════════════════════════════════════════
//  DATA
// ════════════════════════════════════════════════════════

const DATA = {

// ── ANDALUCÍA / TARIFA ─────────────────────────────────
andalucia: {
  label: 'Tarifa',
  years: [
    { year: '2008', parties: [
      {name:'PSOE',    muni:48.06, region:48.41},
      {name:'PP',      muni:38.09, region:38.45},
      {name:'IULV-CA', muni:5.19,  region:7.06},
      {name:'CA',      muni:5.62,  region:2.76},
    ]},
    { year: '2012', parties: [
      {name:'PP',      muni:42.96, region:40.66},
      {name:'PSOE',    muni:37.18, region:39.52},
      {name:'IULV-CA', muni:8.46,  region:11.34},
    ]},
    { year: '2015', parties: [
      {name:'PSOE',    muni:38.54, region:35.41},
      {name:'PP',      muni:26.81, region:26.74},
      {name:'Podemos', muni:13.96, region:14.86},
      {name:'Ciudadanos',muni:6.61,region:9.28},
      {name:'IULV-CA', muni:4.64,  region:6.89},
    ]},
    { year: '2018', parties: [
      {name:'PSOE',              muni:27.48, region:27.94},
      {name:'PP',                muni:19.66, region:20.75},
      {name:'Ciudadanos',        muni:18.46, region:18.28},
      {name:'Adelante Andalucía',muni:15.83, region:16.19},
      {name:'VOX',               muni:11.82, region:10.96},
    ]},
    { year: '2022', parties: [
      {name:'PP',                muni:44.97, region:43.11},
      {name:'PSOE',              muni:23.41, region:24.10},
      {name:'VOX',               muni:13.19, region:13.47},
      {name:'Por Andalucía',     muni:6.09,  region:7.70},
      {name:'Adelante Andalucía',muni:5.68,  region:4.58},
      {name:'Ciudadanos',        muni:2.82,  region:3.30},
    ]},
  ]
},

// ── CATALUÑA / GRANOLLERS ─────────────────────────────
cataluna: {
  label: 'Granollers',
  years: [
    { year: '2006', parties: [
      {name:'CiU',      muni:35.51, region:31.52},
      {name:'PSOE',     muni:28.54, region:27.38},
      {name:'ERC',      muni:12.15, region:14.03},
      {name:'PP',       muni:10.05, region:10.87},
      {name:'ICV-EUiA', muni:8.25,  region:9.72},
      {name:'Ciudadanos',muni:3.06, region:3.09},
    ]},
    { year: '2010', parties: [
      {name:'CiU',  muni:41.47, region:38.43},
      {name:'PSOE', muni:18.84, region:18.38},
      {name:'PP',   muni:10.46, region:12.37},
      {name:'ERC',  muni:5.06,  region:7.00},
      {name:'Ciudadanos',muni:3.89,region:3.39},
    ]},
    { year: '2012', parties: [
      {name:'CiU',        muni:31.95, region:30.70},
      {name:'PSOE',       muni:15.14, region:14.43},
      {name:'ERC',        muni:12.53, region:13.70},
      {name:'PP',         muni:11.84, region:12.97},
      {name:'ICV-EUiA',   muni:9.17,  region:9.89},
      {name:'Ciudadanos', muni:9.13,  region:7.56},
    ]},
    { year: '2015', parties: [
      {name:'JxSí',          muni:39.53, region:39.59},
      {name:'Ciudadanos',    muni:19.57, region:17.90},
      {name:'PSOE',          muni:14.36, region:12.72},
      {name:'CatSíQueEsPot', muni:7.74,  region:8.94},
      {name:'CUP',           muni:7.62,  region:8.21},
      {name:'PP',            muni:7.35,  region:8.49},
    ]},
    { year: '2017', parties: [
      {name:'Ciudadanos', muni:26.75, region:25.37},
      {name:'Junts',      muni:21.61, region:21.65},
      {name:'ERC',        muni:20.94, region:21.39},
      {name:'PSOE',       muni:14.73, region:13.88},
      {name:'Podemos',    muni:6.45,  region:7.45},
      {name:'CUP',        muni:3.96,  region:4.45},
      {name:'PP',         muni:3.83,  region:4.24},
    ]},
    { year: '2021', parties: [
      {name:'PSOE',       muni:26.10, region:23.03},
      {name:'ERC',        muni:20.80, region:21.30},
      {name:'Junts',      muni:20.10, region:20.07},
      {name:'VOX',        muni:6.93,  region:7.67},
      {name:'Ciudadanos', muni:6.15,  region:5.58},
      {name:'Podemos',    muni:5.87,  region:6.87},
      {name:'CUP',        muni:5.75,  region:6.68},
    ]},
    { year: '2024', parties: [
      {name:'PSOE',             muni:30.93, region:27.96},
      {name:'Junts',            muni:21.86, region:21.61},
      {name:'ERC',              muni:13.38, region:13.68},
      {name:'PP',               muni:10.33, region:10.97},
      {name:'VOX',              muni:7.19,  region:7.96},
      {name:'Sumar',            muni:4.55,  region:5.82},
      {name:'CUP',              muni:3.70,  region:4.09},
      {name:'Aliança Catalana', muni:3.44,  region:3.78},
    ], note: {text:'⚠ PSOE sobreestimado ~3pp en Granollers vs. conjunto', cls:'warn'}},
  ]
},

// ── MADRID / COLMENAREJO ──────────────────────────────
madrid: {
  label: 'Colmenarejo',
  years: [
    { year: '2007', parties: [
      {name:'PP',    muni:53.17, region:53.29},
      {name:'PSOE',  muni:31.82, region:33.57},
      {name:'IU-CM', muni:10.21, region:8.86},
    ]},
    { year: '2011', parties: [
      {name:'PP',    muni:53.32, region:51.73},
      {name:'PSOE',  muni:23.99, region:26.27},
      {name:'IU',    muni:10.20, region:9.61},
      {name:'UPyD',  muni:5.13,  region:6.32},
    ]},
    { year: '2015', parties: [
      {name:'PP',        muni:31.21, region:33.08},
      {name:'PSOE',      muni:23.04, region:25.43},
      {name:'Podemos',   muni:20.09, region:18.64},
      {name:'Ciudadanos',muni:15.12, region:12.15},
    ]},
    { year: '2019', parties: [
      {name:'PSOE',       muni:25.64, region:27.31},
      {name:'Ciudadanos', muni:19.94, region:19.46},
      {name:'PP',         muni:19.60, region:22.23},
      {name:'Más Madrid', muni:14.87, region:14.69},
      {name:'VOX',        muni:10.79, region:8.88},
    ]},
    { year: '2021', parties: [
      {name:'PP',         muni:44.17, region:44.76},
      {name:'Más Madrid', muni:18.95, region:17.00},
      {name:'PSOE',       muni:14.23, region:16.80},
      {name:'VOX',        muni:10.20, region:9.15},
      {name:'Podemos-IU', muni:6.69,  region:7.24},
    ]},
    { year: '2023', parties: [
      {name:'PP',         muni:47.52, region:47.32},
      {name:'Más Madrid', muni:21.06, region:18.36},
      {name:'PSOE',       muni:14.72, region:18.17},
      {name:'VOX',        muni:8.34,  region:7.34},
    ], note: {text:'⚠ Más Madrid sobreestimado y PSOE subestimado en Colmenarejo', cls:'warn'}},
  ]
},

// ── GALICIA / BETANZOS ────────────────────────────────
galicia: {
  label: 'Betanzos',
  years: [
    { year: '2009', parties: [
      {name:'PP',   muni:47.34, region:47.47},
      {name:'PSOE', muni:32.96, region:31.54},
      {name:'BNG',  muni:12.61, region:16.28},
    ], note: {text:'⚠ BNG subestimado ~4pp en Betanzos', cls:'warn'}},
    { year: '2012', parties: [
      {name:'PP',   muni:46.68, region:45.80},
      {name:'PSOE', muni:21.71, region:20.61},
      {name:'AGE',  muni:15.30, region:13.91},
      {name:'BNG',  muni:7.10,  region:10.11},
    ]},
    { year: '2016', parties: [
      {name:'PP',       muni:48.43, region:47.56},
      {name:'En Marea', muni:18.91, region:19.07},
      {name:'PSOE',     muni:18.84, region:17.87},
      {name:'BNG',      muni:7.35,  region:8.33},
    ]},
    { year: '2020', parties: [
      {name:'PP',   muni:49.57, region:47.96},
      {name:'BNG',  muni:23.01, region:23.79},
      {name:'PSOE', muni:19.07, region:19.39},
    ]},
    { year: '2024', parties: [
      {name:'PP',   muni:47.97, region:47.39},
      {name:'BNG',  muni:29.89, region:31.34},
      {name:'PSOE', muni:15.24, region:14.07},
    ]},
  ]
},

// ── MURCIA / MOLINA DE SEGURA ─────────────────────────
murcia: {
  label: 'Molina de Segura',
  years: [
    { year: '2007', parties: [
      {name:'PP',   muni:62.11, region:58.30},
      {name:'PSOE', muni:27.87, region:32.00},
      {name:'IU',   muni:7.20,  region:6.25},
    ], note: {text:'⚠ PP sobreestimado ~4pp; PSOE subestimado ~4pp', cls:'warn'}},
    { year: '2011', parties: [
      {name:'PP',   muni:56.93, region:58.82},
      {name:'PSOE', muni:20.76, region:23.86},
      {name:'IU',   muni:8.88,  region:7.83},
    ]},
    { year: '2015', parties: [
      {name:'PP',         muni:31.30, region:37.35},
      {name:'PSOE',       muni:19.60, region:23.95},
      {name:'Podemos',    muni:18.23, region:13.22},
      {name:'Ciudadanos', muni:18.16, region:12.57},
    ], note: {text:'⚠ Fragmentación inusual en 2015: Podemos y Cs sobrevalorados en el municipio', cls:'warn'}},
    { year: '2019', parties: [
      {name:'PSOE',       muni:34.00, region:32.43},
      {name:'PP',         muni:29.04, region:32.36},
      {name:'Ciudadanos', muni:14.58, region:12.00},
      {name:'VOX',        muni:9.76,  region:9.46},
      {name:'Podemos',    muni:6.56,  region:5.55},
    ]},
    { year: '2023', parties: [
      {name:'PP',   muni:40.58, region:42.79},
      {name:'PSOE', muni:26.34, region:25.63},
      {name:'VOX',  muni:20.69, region:17.72},
    ]},
  ]
},

// ── EXTREMADURA / DON BENITO ──────────────────────────
extremadura: {
  label: 'Don Benito',
  years: [
    { year: '2011', parties: [
      {name:'PP',   muni:49.47, region:46.79},
      {name:'PSOE', muni:43.98, region:44.07},
      {name:'IU',   muni:3.63,  region:5.80},
    ]},
    { year: '2015', parties: [
      {name:'PSOE',       muni:43.86, region:41.58},
      {name:'PP',         muni:36.23, region:37.07},
      {name:'Podemos',    muni:7.16,  region:8.04},
      {name:'Ciudadanos', muni:4.72,  region:4.39},
      {name:'IU',         muni:4.20,  region:4.25},
    ]},
    { year: '2019', parties: [
      {name:'PSOE',       muni:48.50, region:46.77},
      {name:'PP',         muni:25.19, region:27.48},
      {name:'Ciudadanos', muni:12.26, region:11.11},
      {name:'Podemos-IU', muni:6.64,  region:7.20},
      {name:'VOX',        muni:5.34,  region:4.71},
    ]},
    { year: '2023', parties: [
      {name:'PSOE',       muni:38.90, region:39.90},
      {name:'PP',         muni:38.25, region:38.78},
      {name:'VOX',        muni:8.55,  region:8.14},
      {name:'Podemos-IU', muni:5.95,  region:6.02},
      {name:'JUEX',       muni:3.72,  region:2.54},
    ]},
    { year: '2025', parties: [
      {name:'PP',         muni:43.75, region:43.12},
      {name:'PSOE',       muni:21.92, region:25.72},
      {name:'VOX',        muni:20.25, region:16.90},
      {name:'Podemos-IU', muni:10.32, region:10.27},
    ], note: {text:'⚠ VOX sobreestimado y PSOE subestimado en Don Benito en 2025', cls:'warn'}},
  ]
},

// ── ASTURIAS / SIERO ──────────────────────────────────
asturias: {
  label: 'Siero',
  years: [
    { year: '1987', parties: [
      {name:'PSOE', muni:42.77, region:38.85},
      {name:'PP',   muni:22.24, region:25.23},
      {name:'IU',   muni:10.60, region:12.09},
    ]},
    { year: '1991', parties: [
      {name:'PSOE', muni:45.29, region:41.02},
      {name:'PP',   muni:24.43, region:30.40},
      {name:'IU',   muni:14.53, region:14.85},
    ]},
    { year: '1995', parties: [
      {name:'PP',   muni:42.75, region:42.00},
      {name:'PSOE', muni:30.77, region:33.83},
      {name:'IU',   muni:16.60, region:16.42},
    ]},
    { year: '1999', parties: [
      {name:'PSOE', muni:43.24, region:46.00},
      {name:'PP',   muni:35.34, region:32.31},
      {name:'IU',   muni:8.46,  region:9.00},
    ]},
    { year: '2003', parties: [
      {name:'PP',   muni:42.13, region:39.18},
      {name:'PSOE', muni:40.04, region:40.48},
      {name:'IU',   muni:9.76,  region:11.05},
    ]},
    { year: '2007', parties: [
      {name:'PP',   muni:42.11, region:41.50},
      {name:'PSOE', muni:40.91, region:42.04},
      {name:'IU',   muni:8.63,  region:9.69},
    ]},
    { year: '2012', parties: [
      {name:'PSOE', muni:32.28, region:32.01},
      {name:'FAC',  muni:23.94, region:24.83},
      {name:'PP',   muni:21.44, region:21.53},
      {name:'IU',   muni:13.17, region:13.78},
    ]},
    { year: '2015', parties: [
      {name:'PSOE',       muni:25.56, region:26.48},
      {name:'PP',         muni:19.57, region:21.59},
      {name:'Podemos',    muni:19.46, region:19.06},
      {name:'IU',         muni:11.10, region:11.94},
      {name:'Ciudadanos', muni:9.01,  region:7.12},
      {name:'FAC',        muni:8.52,  region:8.19},
    ]},
    { year: '2019', parties: [
      {name:'PSOE',       muni:35.70, region:35.25},
      {name:'Ciudadanos', muni:16.40, region:13.98},
      {name:'PP',         muni:15.02, region:17.55},
      {name:'Podemos',    muni:10.81, region:11.01},
      {name:'VOX',        muni:7.24,  region:6.42},
      {name:'FAC',        muni:5.93,  region:6.54},
    ]},
    { year: '2023', parties: [
      {name:'PSOE', muni:38.44, region:36.50},
      {name:'PP',   muni:33.35, region:32.61},
      {name:'VOX',  muni:10.88, region:10.10},
      {name:'IU',   muni:5.75,  region:7.59},
    ]},
  ]
},

// ── CANTABRIA / CAMARGO ───────────────────────────────
cantabria: {
  label: 'Camargo',
  years: [
    { year: '2007', parties: [
      {name:'PP',   muni:40.83, region:42.20},
      {name:'PRC',  muni:26.89, region:29.14},
      {name:'PSOE', muni:26.61, region:24.97},
      {name:'IU',   muni:2.58,  region:1.91},
    ]},
    { year: '2011', parties: [
      {name:'PP',   muni:47.04, region:46.09},
      {name:'PRC',  muni:25.65, region:29.12},
      {name:'PSOE', muni:18.21, region:16.35},
    ]},
    { year: '2015', parties: [
      {name:'PP',         muni:30.82, region:32.58},
      {name:'PRC',        muni:27.02, region:29.89},
      {name:'PSOE',       muni:15.00, region:14.04},
      {name:'Podemos',    muni:10.20, region:8.89},
      {name:'Ciudadanos', muni:8.19,  region:6.94},
    ]},
    { year: '2019', parties: [
      {name:'PRC',        muni:34.44, region:37.64},
      {name:'PP',         muni:22.17, region:24.04},
      {name:'PSOE',       muni:19.38, region:17.61},
      {name:'Ciudadanos', muni:10.49, region:7.94},
      {name:'VOX',        muni:5.71,  region:5.06},
    ]},
    { year: '2023', parties: [
      {name:'PP',   muni:38.51, region:35.78},
      {name:'PSOE', muni:23.73, region:20.61},
      {name:'PRC',  muni:15.43, region:20.79},
      {name:'VOX',  muni:10.90, region:11.08},
    ], note: {text:'⚠ PRC subestimado y PSOE sobreestimado en Camargo en 2023', cls:'warn'}},
  ]
},

}; // end DATA

// ── Render all communities ───────────────────────────
Object.keys(DATA).forEach(commKey => {
  const comm = DATA[commKey];
  const container = document.getElementById('ohio-years-' + commKey);
  if (!container) return;
  let html = '';
  comm.years.forEach(yr => {
    html += buildYearCard(yr.year, comm.label, yr.parties, yr.note || null);
  });
  container.innerHTML = html;
});

// ── Tab switching ────────────────────────────────────
document.querySelectorAll('.ohio-comm-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const comm = this.dataset.comm;
    document.querySelectorAll('.ohio-comm-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.ohio-community-panel').forEach(p => p.classList.remove('active'));
    this.classList.add('active');
    const panel = document.getElementById('ohio-' + comm);
    if (panel) panel.classList.add('active');
  });
});

})();


// ═══ VOTO JOVEN PANEL INIT ═══
(function() {
  var vjInited = false;
  function vjInit() {
    if (vjInited) return;
    vjInited = true;
    // Build progress dots
    var prog = document.getElementById('vj-progress');
    if (!prog) return;
    var sections = document.querySelectorAll('#panel-votojoven [data-vj-section]');
    sections.forEach(function(sec, i) {
      var dot = document.createElement('div');
      dot.className = 'vj-dot' + (i === 0 ? ' active' : '');
      dot.title = 'Sección ' + (i+1);
      dot.onclick = function() {
        sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
      };
      prog.appendChild(dot);
    });
    // Intersection observer to update dots
    var obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) {
        if (e.isIntersecting) {
          var idx = parseInt(e.target.getAttribute('data-vj-section'));
          document.querySelectorAll('.vj-dot').forEach(function(d, i) {
            d.classList.toggle('active', i === idx);
          });
        }
      });
    }, { threshold: 0.3 });
    sections.forEach(function(sec) { obs.observe(sec); });
  }
  window.vjInit = vjInit;
})();


(function(){
// ═══════════════════════════════════════════════
// ESPAÑA CALCULADORA — datos y lógica
// ═══════════════════════════════════════════════
const EC_BASELINE = {"baseline_national": {"PP": 0.31638, "PSOE": 0.28396, "Vox": 0.181567, "Sumar": 0.063511, "Podem": 0.034756, "SALF": 0.01496, "ERC": 0.017375, "JxCat": 0.013, "EHB": 0.013, "PNV": 0.012, "BNG": 0.008, "Cca": 0.004, "UPN": 0.002},
 "constituencies": [ {"name": "A Coruña", "PSOE": 0.256371765242799, "PP": 0.418102134132724, "Vox": 0.0743035003750114, "Sumar": 0.0639339483930816, "Podem": 0.0302385189585819, "SALF": 0.00650616438377593, "ERC": 0, "JxCat": 0, "EHB": 0, "PNV": 0, "BNG": 0.135320421136203, "Cca": 0, "UPN": 0},
{"name": "Álava", "PSOE": 0.256514972832503, "PP": 0.175888312431856, "Vox": 0.059035839281668, "Sumar": 0.0677933791849689, "Podem": 0.0405958495574662, "SALF": 0.00715987466544198, "ERC": 0, "JxCat": 0, "EHB": 0.187191617789827, "PNV": 0.187211756748169, "BNG": 0, "Cca": 0, "UPN": 0},
{"name": "Albacete", "PSOE": 0.299465802774848, "PP": 0.370486306514884, "Vox": 0.236953318609367, "Sumar": 0.0355252464468547, "Podem": 0.0228188926989097, "SALF": 0.0182771339744662, "ERC": 0, "JxCat": 0, "EHB": 0, "PNV": 0, "BNG": 0, "Cca": 0, "UPN": 0},
{"name": "Alicante", "PSOE": 0.282195579222135, "PP": 0.346283720602931, "Vox": 0.234966536791745, "Sumar": 0.0650670035793884, "Podem": 0.0315711280816178, "SALF": 0.0192421017406904, "ERC": 0, "JxCat": 0, "EHB": 0, "PNV": 0, "BNG": 0, "Cca": 0, "UPN": 0},
{"name": "Almería", "PSOE": 0.244562665509428, "PP": 0.368943655759862, "Vox": 0.295001428069266, "Sumar": 0.032083866964399, "Podem": 0.0185700084030006, "SALF": 0.0220094437878319, "ERC": 0, "JxCat": 0, "EHB": 0, "PNV": 0, "BNG": 0, "Cca": 0, "UPN": 0},
{"name": "Asturias", "PSOE": 0.312025524987535, "PP": 0.344560672778807, "Vox": 0.185336038874847, "Sumar": 0.0779055787948507, "Podem": 0.0420954962145306, "SALF": 0.0117492535039218, "ERC": 0, "JxCat": 0, "EHB": 0, "PNV": 0, "BNG": 0, "Cca": 0, "UPN": 0},
{"name": "Ávila", "PSOE": 0.236899889055025, "PP": 0.401861099901255, "Vox": 0.218444500185904, "Sumar": 0.0255107364709375, "Podem": 0.0178480288279769, "SALF": 0.0141869206789353, "ERC": 0, "JxCat": 0, "EHB": 0, "PNV": 0, "BNG": 0, "Cca": 0, "UPN": 0},
{"name": "Badajoz", "PSOE": 0.348411637831561, "PP": 0.359442829924907, "Vox": 0.199042279623942, "Sumar": 0.0348390343432111, "Podem": 0.0218760442585502, "SALF": 0.0125747773347791, "ERC": 0, "JxCat": 0, "EHB": 0, "PNV": 0, "BNG": 0, "Cca": 0, "UPN": 0},
{"name": "Balearic Islands", "PSOE": 0.268980478382472, "PP": 0.339459754498454, "Vox": 0.22203223864906, "Sumar": 0.0855092237936744, "Podem": 0.0416613488974126, "SALF": 0.0174168785820654, "ERC": 0, "JxCat": 0, "EHB": 0, "PNV": 0, "BNG": 0, "Cca": 0, "UPN": 0},
{"name": "Barcelona", "PSOE": 0.338108911252514, "PP": 0.138450011791919, "Vox": 0.117657651972626, "Sumar": 0.082981751861343, "Podem": 0.0495853878918614, "SALF": 0.00964208276537893, "ERC": 0.118924448682499, "JxCat": 0.0833272450977264, "EHB": 0, "PNV": 0, "BNG": 0, "Cca": 0, "UPN": 0},
{"name": "Biscay", "PSOE": 0.236398941529997, "PP": 0.112436596491605, "Vox": 0.0389419193880729, "Sumar": 0.0575708881929436, "Podem": 0.0359735149225896, "SALF": 0.00543263714558294, "ERC": 0, "JxCat": 0, "EHB": 0.196614255211488, "PNV": 0.301287882719945, "BNG": 0, "Cca": 0, "UPN": 0},
{"name": "Burgos", "PSOE": 0.307623752705466, "PP": 0.387239105936131, "Vox": 0.186564463745217, "Sumar": 0.0442028052637591, "Podem": 0.0270906961137528, "SALF": 0.0134350577759576, "ERC": 0, "JxCat": 0, "EHB": 0, "PNV": 0, "BNG": 0, "Cca": 0, "UPN": 0},
{"name": "Cáceres", "PSOE": 0.345807065141346, "PP": 0.36140425811313, "Vox": 0.197624758777898, "Sumar": 0.0353576963281904, "Podem": 0.0234759858260169, "SALF": 0.0115201773259687, "ERC": 0, "JxCat": 0, "EHB": 0, "PNV": 0, "BNG": 0, "Cca": 0, "UPN": 0},
{"name": "Cádiz", "PSOE": 0.293110906241245, "PP": 0.327836396362234, "Vox": 0.2193591053594, "Sumar": 0.0651410079444813, "Podem": 0.034844252303919, "SALF": 0.0202846296828656, "ERC": 0, "JxCat": 0, "EHB": 0, "PNV": 0, "BNG": 0, "Cca": 0, "UPN": 0},
{"name": "Cantabria", "PSOE": 0.293799258530062, "PP": 0.396344272367864, "Vox": 0.203349804078394, "Sumar": 0.0427205030509839, "Podem": 0.0251429229497499, "SALF": 0.0179594892408767, "ERC": 0, "JxCat": 0, "EHB": 0, "PNV": 0, "BNG": 0, "Cca": 0, "UPN": 0},
{"name": "Castellón", "PSOE": 0.290140553653882, "PP": 0.334285491247822, "Vox": 0.231316250188503, "Sumar": 0.0733630676513152, "Podem": 0.0340263433765997, "SALF": 0.0169970822022589, "ERC": 0, "JxCat": 0, "EHB": 0, "PNV": 0, "BNG": 0, "Cca": 0, "UPN": 0},
{"name": "Ceuta", "PSOE": 0.281086332896416, "PP": 0.342276093798112, "Vox": 0.314872634166728, "Sumar": 0.0114372776575543, "Podem": 0.0125631878445561, "SALF": 0.0239206649053453, "ERC": 0, "JxCat": 0, "EHB": 0, "PNV": 0, "BNG": 0, "Cca": 0, "UPN": 0},
{"name": "Ciudad Real", "PSOE": 0.309246481064492, "PP": 0.378452664109858, "Vox": 0.232759434074957, "Sumar": 0.0307172229231894, "Podem": 0.0189805947221807, "SALF": 0.0142399960205441, "ERC": 0, "JxCat": 0, "EHB": 0, "PNV": 0, "BNG": 0, "Cca": 0, "UPN": 0},
{"name": "Córdoba", "PSOE": 0.28752098023303, "PP": 0.362232778163574, "Vox": 0.204979640638867, "Sumar": 0.0707352161898499, "Podem": 0.0343651961812489, "SALF": 0.0171678818210042, "ERC": 0, "JxCat": 0, "EHB": 0, "PNV": 0, "BNG": 0, "Cca": 0, "UPN": 0},
{"name": "Cuenca", "PSOE": 0.327083091749064, "PP": 0.372405737455622, "Vox": 0.223610423719946, "Sumar": 0.0278011372646406, "Podem": 0.0178595003368856, "SALF": 0.0136193230915108, "ERC": 0, "JxCat": 0, "EHB": 0, "PNV": 0, "BNG": 0, "Cca": 0, "UPN": 0},
{"name": "Gipuzkoa", "PSOE": 0.215931801371599, "PP": 0.0850438997356428, "Vox": 0.0318125267784299, "Sumar": 0.0566261665677952, "Podem": 0.0349153131997597, "SALF": 0.00429308918714571, "ERC": 0, "JxCat": 0, "EHB": 0.30069337498938, "PNV": 0.256199703938761, "BNG": 0, "Cca": 0, "UPN": 0},
{"name": "Girona", "PSOE": 0.277329386335093, "PP": 0.0993239107380699, "Vox": 0.109803016623006, "Sumar": 0.0608473043790322, "Podem": 0.0326572404848134, "SALF": 0.00794208292406874, "ERC": 0.144010121515098, "JxCat": 0.17060077809143, "EHB": 0, "PNV": 0, "BNG": 0, "Cca": 0, "UPN": 0},
{"name": "Granada", "PSOE": 0.289722322815144, "PP": 0.34662012250187, "Vox": 0.232488361564453, "Sumar": 0.0587052062047035, "Podem": 0.0317686990773854, "SALF": 0.0191330308362351, "ERC": 0, "JxCat": 0, "EHB": 0, "PNV": 0, "BNG": 0, "Cca": 0, "UPN": 0},
{"name": "Guadalajara", "PSOE": 0.282444408550716, "PP": 0.332433248990237, "Vox": 0.270019130514845, "Sumar": 0.0448963509404545, "Podem": 0.0285759806076024, "SALF": 0.0206102739538566, "ERC": 0, "JxCat": 0, "EHB": 0, "PNV": 0, "BNG": 0, "Cca": 0, "UPN": 0},
{"name": "Huelva", "PSOE": 0.319659009886218, "PP": 0.345828947071619, "Vox": 0.211911969932319, "Sumar": 0.053231462529793, "Podem": 0.0284561742628101, "SALF": 0.0161309142757732, "ERC": 0, "JxCat": 0, "EHB": 0, "PNV": 0, "BNG": 0, "Cca": 0, "UPN": 0},
{"name": "Huesca", "PSOE": 0.300573702230246, "PP": 0.366681480659886, "Vox": 0.186263636806686, "Sumar": 0.0594777627267825, "Podem": 0.0316187645817501, "SALF": 0.0153192344807587, "ERC": 0, "JxCat": 0, "EHB": 0, "PNV": 0, "BNG": 0, "Cca": 0, "UPN": 0},
{"name": "Jaén", "PSOE": 0.320868294333242, "PP": 0.352757138971229, "Vox": 0.213845482296624, "Sumar": 0.0407624967979275, "Podem": 0.0224070955047556, "SALF": 0.0148219248373482, "ERC": 0, "JxCat": 0, "EHB": 0, "PNV": 0, "BNG": 0, "Cca": 0, "UPN": 0},
{"name": "La Rioja", "PSOE": 0.322437037260757, "PP": 0.440430041879984, "Vox": 0.143207783782313, "Sumar": 0.0338408039971195, "Podem": 0.0238183432925548, "SALF": 0.0120673215053683, "ERC": 0, "JxCat": 0, "EHB": 0, "PNV": 0, "BNG": 0, "Cca": 0, "UPN": 0},
{"name": "Las Palmas", "PSOE": 0.292585974444585, "PP": 0.243556213102346, "Vox": 0.210322850707175, "Sumar": 0.0518162765396128, "Podem": 0.0348448548557495, "SALF": 0.0208738357747292, "ERC": 0, "JxCat": 0, "EHB": 0, "PNV": 0, "BNG": 0, "Cca": 0.0495849038181972, "UPN": 0},
{"name": "León", "PSOE": 0.296723967107212, "PP": 0.348657572581151, "Vox": 0.186217822238722, "Sumar": 0.0341066262513049, "Podem": 0.0243494395926411, "SALF": 0.0133299313915021, "ERC": 0, "JxCat": 0, "EHB": 0, "PNV": 0, "BNG": 0, "Cca": 0, "UPN": 0},
{"name": "Lleida", "PSOE": 0.281935571636304, "PP": 0.130533461983156, "Vox": 0.106231901319061, "Sumar": 0.0435216707772427, "Podem": 0.0238461319872198, "SALF": 0.00813589833202725, "ERC": 0.181475681678463, "JxCat": 0.15603687769039, "EHB": 0, "PNV": 0, "BNG": 0, "Cca": 0, "UPN": 0},
{"name": "Lugo", "PSOE": 0.273400038895821, "PP": 0.48525554720989, "Vox": 0.0634223869265613, "Sumar": 0.0270464268114899, "Podem": 0.0174473433582886, "SALF": 0.00550097173687818, "ERC": 0, "JxCat": 0, "EHB": 0, "PNV": 0, "BNG": 0.116846969032159, "Cca": 0, "UPN": 0},
{"name": "Madrid", "PSOE": 0.249243688947963, "PP": 0.38606374493783, "Vox": 0.204440147955847, "Sumar": 0.07930330700177, "Podem": 0.0424049283642983, "SALF": 0.0166037006648401, "ERC": 0, "JxCat": 0, "EHB": 0, "PNV": 0, "BNG": 0, "Cca": 0, "UPN": 0},
{"name": "Málaga", "PSOE": 0.264824565309876, "PP": 0.357189301393161, "Vox": 0.235731580253523, "Sumar": 0.0614647444540354, "Podem": 0.0317735554788148, "SALF": 0.0226721800319827, "ERC": 0, "JxCat": 0, "EHB": 0, "PNV": 0, "BNG": 0, "Cca": 0, "UPN": 0},
{"name": "Melilla", "PSOE": 0.218320680670115, "PP": 0.45124280645716, "Vox": 0.224801563000803, "Sumar": 0.0148639085565872, "Podem": 0.0109245539193814, "SALF": 0.0184357018532525, "ERC": 0, "JxCat": 0, "EHB": 0, "PNV": 0, "BNG": 0, "Cca": 0, "UPN": 0},
{"name": "Murcia", "PSOE": 0.214108117390593, "PP": 0.372043615747088, "Vox": 0.301569411859157, "Sumar": 0.0463432862715206, "Podem": 0.0239565813125215, "SALF": 0.0211945242814736, "ERC": 0, "JxCat": 0, "EHB": 0, "PNV": 0, "BNG": 0, "Cca": 0, "UPN": 0},
{"name": "Navarre", "PSOE": 0.254856720750115, "PP": 0.165747134093713, "Vox": 0.0866639675104431, "Sumar": 0.0691649151155845, "Podem": 0.0392852173816232, "SALF": 0.00980398224283439, "ERC": 0, "JxCat": 0, "EHB": 0.166805538418477, "PNV": 0, "BNG": 0, "Cca": 0, "UPN": 0.158869481232716},
{"name": "Ourense", "PSOE": 0.274562170313621, "PP": 0.480896581556379, "Vox": 0.0693878062580134, "Sumar": 0.0281132778859588, "Podem": 0.0161506160006229, "SALF": 0.00586585606629616, "ERC": 0, "JxCat": 0, "EHB": 0, "PNV": 0, "BNG": 0.112924624959195, "Cca": 0, "UPN": 0},
{"name": "Palencia", "PSOE": 0.306113819135428, "PP": 0.396699718597381, "Vox": 0.187099115631713, "Sumar": 0.0306877961859064, "Podem": 0.0194516532860197, "SALF": 0.0133930165480308, "ERC": 0, "JxCat": 0, "EHB": 0, "PNV": 0, "BNG": 0, "Cca": 0, "UPN": 0},
{"name": "Pontevedra", "PSOE": 0.287247369490113, "PP": 0.386549954859616, "Vox": 0.0702817317260936, "Sumar": 0.0696066853806345, "Podem": 0.0336869808530405, "SALF": 0.00727007682909523, "ERC": 0, "JxCat": 0, "EHB": 0, "PNV": 0, "BNG": 0.127996036355712, "Cca": 0, "UPN": 0},
{"name": "Salamanca", "PSOE": 0.266462209332259, "PP": 0.439586075981231, "Vox": 0.21061900625749, "Sumar": 0.0277891549532947, "Podem": 0.0191675834575471, "SALF": 0.0128917142715473, "ERC": 0, "JxCat": 0, "EHB": 0, "PNV": 0, "BNG": 0, "Cca": 0, "UPN": 0},
{"name": "Santa Cruz de Tenerife", "PSOE": 0.285387739240573, "PP": 0.320836170924596, "Vox": 0.131187022142987, "Sumar": 0.0533670432435804, "Podem": 0.0333954884915263, "SALF": 0.0167187219718985, "ERC": 0, "JxCat": 0, "EHB": 0, "PNV": 0, "BNG": 0, "Cca": 0.125920844440921, "UPN": 0},
{"name": "Segovia", "PSOE": 0.269112118976469, "PP": 0.424613685111971, "Vox": 0.20480471214067, "Sumar": 0.0406887186608116, "Podem": 0.0244582503673954, "SALF": 0.0146524795794338, "ERC": 0, "JxCat": 0, "EHB": 0, "PNV": 0, "BNG": 0, "Cca": 0, "UPN": 0},
{"name": "Seville", "PSOE": 0.328130963527637, "PP": 0.319518952668642, "Vox": 0.194910822029385, "Sumar": 0.0723510393236194, "Podem": 0.0384462945184041, "SALF": 0.0196189372649959, "ERC": 0, "JxCat": 0, "EHB": 0, "PNV": 0, "BNG": 0, "Cca": 0, "UPN": 0},
{"name": "Soria", "PSOE": 0.261699249451032, "PP": 0.352133570056526, "Vox": 0.142110026539936, "Sumar": 0.0173864128601838, "Podem": 0.0172821616348936, "SALF": 0.0103303956745596, "ERC": 0, "JxCat": 0, "EHB": 0, "PNV": 0, "BNG": 0, "Cca": 0, "UPN": 0},
{"name": "Tarragona", "PSOE": 0.306086596798088, "PP": 0.137989882171631, "Vox": 0.158161195057414, "Sumar": 0.0606006759425325, "Podem": 0.0332330675093698, "SALF": 0.011795026871194, "ERC": 0.143417780196226, "JxCat": 0.0936695172324157, "EHB": 0, "PNV": 0, "BNG": 0, "Cca": 0, "UPN": 0},
{"name": "Teruel", "PSOE": 0.256331416628182, "PP": 0.328783588670022, "Vox": 0.187978623733707, "Sumar": 0.0273252004267199, "Podem": 0.0161947434699454, "SALF": 0.0148278129665675, "ERC": 0, "JxCat": 0, "EHB": 0, "PNV": 0, "BNG": 0, "Cca": 0, "UPN": 0},
{"name": "Toledo", "PSOE": 0.279212563374025, "PP": 0.347436013731995, "Vox": 0.27665339539329, "Sumar": 0.0406084167328421, "Podem": 0.022997645392761, "SALF": 0.0167875949046831, "ERC": 0, "JxCat": 0, "EHB": 0, "PNV": 0, "BNG": 0, "Cca": 0, "UPN": 0},
{"name": "Valencia", "PSOE": 0.287700721187846, "PP": 0.322292239176921, "Vox": 0.222688448675749, "Sumar": 0.0867952203282853, "Podem": 0.039741156211009, "SALF": 0.0187700819548285, "ERC": 0, "JxCat": 0, "EHB": 0, "PNV": 0, "BNG": 0, "Cca": 0, "UPN": 0},
{"name": "Valladolid", "PSOE": 0.287466829490368, "PP": 0.383660707412608, "Vox": 0.218424705155338, "Sumar": 0.0445936754412679, "Podem": 0.0272096151587607, "SALF": 0.0150910055571699, "ERC": 0, "JxCat": 0, "EHB": 0, "PNV": 0, "BNG": 0, "Cca": 0, "UPN": 0},
{"name": "Zamora", "PSOE": 0.288159011794717, "PP": 0.423848731676494, "Vox": 0.191311448564997, "Sumar": 0.02862117652313, "Podem": 0.0178048883167594, "SALF": 0.0116521063095648, "ERC": 0, "JxCat": 0, "EHB": 0, "PNV": 0, "BNG": 0, "Cca": 0, "UPN": 0},
{"name": "Zaragoza", "PSOE": 0.273330067475461, "PP": 0.341843969400843, "Vox": 0.221945480892997, "Sumar": 0.0690591248776305, "Podem": 0.0341590411344457, "SALF": 0.0170624077133411, "ERC": 0, "JxCat": 0, "EHB": 0, "PNV": 0, "BNG": 0, "Cca": 0, "UPN": 0}
]};

const EC_SEATS = {"A Coruña":8,"Álava":4,"Albacete":4,"Alicante":12,"Almería":6,"Asturias":7,"Ávila":3,"Badajoz":5,"Balearic Islands":8,"Barcelona":32,"Biscay":8,"Burgos":4,"Cáceres":4,"Cádiz":9,"Cantabria":5,"Castellón":5,"Ceuta":1,"Ciudad Real":5,"Córdoba":6,"Cuenca":3,"Gipuzkoa":6,"Girona":6,"Granada":7,"Guadalajara":3,"Huelva":5,"Huesca":3,"Jaén":5,"La Rioja":4,"Las Palmas":8,"León":4,"Lleida":4,"Lugo":4,"Madrid":37,"Málaga":11,"Melilla":1,"Murcia":10,"Navarre":5,"Ourense":4,"Palencia":3,"Pontevedra":7,"Salamanca":4,"Santa Cruz de Tenerife":7,"Segovia":3,"Seville":12,"Soria":2,"Tarragona":6,"Teruel":3,"Toledo":6,"Valencia":16,"Valladolid":5,"Zamora":3,"Zaragoza":7};

const EC_INCUMBENTS = {"A Coruña":"PP","Álava":"PSOE","Albacete":"PP","Alicante":"PP","Almería":"PP","Asturias":"PP","Ávila":"PP","Badajoz":"PSOE","Balearic Islands":"PP","Barcelona":"PSOE","Biscay":"PNV","Burgos":"PP","Cáceres":"PSOE","Cádiz":"PP","Cantabria":"PP","Castellón":"PP","Ceuta":"PP","Ciudad Real":"PP","Córdoba":"PP","Cuenca":"PP","Gipuzkoa":"EHB","Girona":"PSOE","Granada":"PP","Guadalajara":"PP","Huelva":"PP","Huesca":"PP","Jaén":"PP","La Rioja":"PP","Las Palmas":"PSOE","León":"PP","Lleida":"PSOE","Lugo":"PP","Madrid":"PP","Málaga":"PP","Melilla":"PP","Murcia":"PP","Navarre":"PSOE","Ourense":"PP","Palencia":"PP","Pontevedra":"PP","Salamanca":"PP","Santa Cruz de Tenerife":"PP","Segovia":"PP","Seville":"PSOE","Soria":"PP","Tarragona":"PSOE","Teruel":"PP","Toledo":"PP","Valencia":"PP","Valladolid":"PP","Zamora":"PP","Zaragoza":"PP"};

const EC_PARTIES = ["PP","PSOE","Vox","Sumar","Podem","SALF","ERC","JxCat","EHB","PNV","BNG","Cca","UPN"];
const EC_COLORS = {"PP":"#1D84CE","PSOE":"#EF1C27","Vox":"#63BE21","Sumar":"#F76BEE","Podem":"#AB01D4","SALF":"#833C0C","ERC":"#FFB232","JxCat":"#00C7AE","EHB":"#B5CF18","PNV":"#4AAE4A","BNG":"#ADCFEF","Cca":"#FFD700","UPN":"#00599B"};
const EC_2023 = {"PP":33.1,"PSOE":31.7,"Vox":12.4,"Sumar":12.3,"Podem":0.0,"SALF":0.0,"ERC":1.9,"JxCat":1.6,"EHB":1.4,"PNV":1.1,"BNG":0.6,"Cca":0.5,"UPN":0.2};
const EC_DEFAULTS = {"PP":31.6,"PSOE":28.4,"Vox":18.2,"Sumar":6.4,"Podem":3.5,"SALF":1.5,"ERC":1.7,"JxCat":1.3,"EHB":1.3,"PNV":1.2,"BNG":0.8,"Cca":0.4,"UPN":0.2};
const EC_PREV_SEATS = {"PP":137,"PSOE":121,"Vox":33,"Sumar":31,"Podem":0,"SALF":0,"ERC":7,"JxCat":7,"EHB":6,"PNV":5,"BNG":1,"Cca":1,"UPN":1};
const EC_CONC_EDITABLE = ["PP","PSOE","Vox","Sumar","Podem","SALF"];

let ecParties = EC_PARTIES.map(n=>({name:n,color:EC_COLORS[n]||'#999',votes:EC_DEFAULTS[n]||0,final:0}));
let ecConc = {};
let ecInc = {};
EC_PARTIES.forEach(p=>{ecConc[p]=0;ecInc[p]=0;});
let ecSelected = [];
let ecLastTotals = null;
let ec2023View = false;
let ecLatestConstResults = null;

// ── Render table ──
function ecRenderTable(){
  const tbody = document.getElementById('ecalc-tbody');
  if(!tbody) return;
  let html = '';
  ecParties.forEach((p,i)=>{
    let row = `<tr>
      <td class="ec-party" style="--party-color:${p.color}">${p.name}</td>
      <td class="ec-2023">${p.votes!==undefined?EC_2023[p.name].toFixed(1):''}%</td>
      <td><div class="input-wrapper"><input type="number" id="ecv-${i}" value="${p.votes.toFixed(1)}" min="0" max="100" step="0.1"><span>%</span></div></td>
      <td class="ec-seats" id="ecs-${i}">—</td>
      <td class="ec-diff" id="ecd-${i}">—</td>
    </tr>`;
    if(p.name==='SALF') row += `<tr class="ec-divider"><td colspan="5"><i>Partidos regionalistas</i></td></tr>`;
    html += row;
  });
  tbody.innerHTML = html;

  ecParties.forEach((p,i)=>{
    const input = document.getElementById(`ecv-${i}`);
    if(!input) return;
    let origVal = input.value;
    input.addEventListener('focus',()=>{origVal=input.value;input.value='';});
    input.addEventListener('blur',()=>{
      if(input.value===''||isNaN(parseFloat(input.value))){input.value=origVal;}
      else{input.value=parseFloat(input.value).toFixed(1);}
      ecUpdateTotal();
      document.getElementById('ecalc-calc-btn').style.background='#e07b00';
    });
    input.addEventListener('input',()=>{ecUpdateTotal();document.getElementById('ecalc-calc-btn').style.background='#e07b00';});
    input.addEventListener('keydown',e=>{
      if(e.key==='Enter'){e.preventDefault();const inputs=document.querySelectorAll('#ecalc-tbody input');const arr=[...inputs];const idx=arr.indexOf(input);if(arr[idx+1])arr[idx+1].focus();else arr[0].focus();}
    });
  });
  ecUpdateTotal();
}

function ecUpdateTotal(){
  let sum=0;
  ecParties.forEach((p,i)=>{
    const v=parseFloat(document.getElementById(`ecv-${i}`)?.value)||0;
    sum+=v;
  });
  const ot = document.getElementById('ecalc-total-votes');
  if(ot) ot.textContent=sum.toFixed(1)+'%';
}

// ── D'Hondt ──
function ecDhondt(votes,seats,natVotes,validParties){
  const alloc={};
  validParties.forEach(p=>alloc[p]=0);
  for(let s=0;s<seats;s++){
    const q=validParties.map(p=>({p,q:(votes[p]||0)/(alloc[p]+1)}));
    let best=q[0];
    for(let i=1;i<q.length;i++){if(q[i].q>best.q||(Math.abs(q[i].q-best.q)<1e-12&&(natVotes[q[i].p]||0)>(natVotes[best.p]||0)))best=q[i];}
    alloc[best.p]++;
  }
  return alloc;
}

// ── Vote to seat margin calculation ──
function ecCalcStealInfo(provVotes, provSeats, provNatVotes, validParties, currentAlloc){
  // El último escaño es el partido con el cociente MÁS BAJO entre los que tienen escaños:
  // cociente = votos[p] / escaños[p]  (con qué cociente ganó su último escaño en D'Hondt)
  let lastWinner=null, lastWinnerQ=Infinity;
  validParties.forEach(p=>{
    if((currentAlloc[p]||0)>0){
      const q=(provVotes[p]||0)/(currentAlloc[p]);
      if(q<lastWinnerQ){lastWinnerQ=q;lastWinner=p;}
    }
  });
  if(!lastWinner) return {lastWinner:null, lastWinnerQ:0, steal:[]};

  // Para arrebatar ese escaño: el partido p necesita que votos[p]/(escaños[p]+1) > lastWinnerQ
  // → delta en fracción = lastWinnerQ*(escaños[p]+1) - votos[p]
  // → en puntos porcentuales = delta * 100
  let stealInfo = [];
  validParties.forEach(p=>{
    if(p===lastWinner) return;
    const curSeats=currentAlloc[p]||0;
    const nextDiv=curSeats+1;
    const deltaFrac=lastWinnerQ*nextDiv-(provVotes[p]||0);
    const pctNeeded=deltaFrac*100;
    if(pctNeeded>0) stealInfo.push({party:p,votesNeeded:pctNeeded,currentSeats:curSeats});
  });
  stealInfo.sort((a,b)=>a.votesNeeded-b.votesNeeded);
  return {lastWinner, lastWinnerQ, steal:stealInfo.slice(0,3)};
}

// ── Constituency shares ──
function ecComputeConstShares(){
  const target={};
  ecParties.forEach((p,i)=>{
    const v=parseFloat(document.getElementById(`ecv-${i}`)?.value)||0;
    target[p.name]=v/100;
  });
  const base=EC_BASELINE.baseline_national;
  const eps=1e-9;
  return EC_BASELINE.constituencies.map(row=>{
    const adj={name:row.name};
    EC_PARTIES.forEach(p=>{
      const local=row[p]||0;
      const nat=base[p]||0;
      const concVal=ecConc[p]||0;
      let mult=1;
      if(local>nat) mult=1+concVal; else mult=1-concVal;
      if(!isFinite(mult)||mult<0) mult=Math.max(0,mult);
      const incVal=ecInc[p]||0;
      if(p===EC_INCUMBENTS[row.name]&&incVal!==0) mult*=(1+incVal);
      adj[p]=local*mult;
    });
    const out={name:row.name};
    let sum=0;
    EC_PARTIES.forEach(p=>{
      const natP=base[p]||0;
      const tgt=target[p]||natP;
      const ratio=natP>eps?tgt/natP:(tgt>0?tgt/eps:0);
      const val=(adj[p]||0)*ratio;
      out[p]=val; sum+=val;
    });
    if(sum>0) EC_PARTIES.forEach(p=>out[p]=out[p]/sum);
    return out;
  });
}

// ── Calculate ──
function ecCalculate(){
  const natVotes={};
  ecParties.forEach((p,i)=>{
    p.votes=parseFloat(document.getElementById(`ecv-${i}`)?.value)||0;
    natVotes[p.name]=p.votes;
  });
  const perConst=ecComputeConstShares();
  ecLatestConstResults=perConst;
  const totals={};
  EC_PARTIES.forEach(p=>totals[p]=0);
  perConst.forEach(row=>{
    let total=0;
    EC_PARTIES.forEach(p=>total+=row[p]||0);
    const valid=EC_PARTIES.filter(p=>(row[p]||0)>=0.03*total);
    const s=ecDhondt(row,EC_SEATS[row.name]||6,natVotes,valid);
    EC_PARTIES.forEach(p=>totals[p]+=(s[p]||0));
  });
  EC_PARTIES.forEach((n,i)=>{
    const seats=totals[n];
    const el=document.getElementById(`ecs-${i}`);
    if(el) el.textContent=seats;
    ecParties[i].final=seats;
    const diff=seats-(EC_PREV_SEATS[n]||0);
    const diffEl=document.getElementById(`ecd-${i}`);
    if(diffEl){
      if(diff>0){diffEl.textContent='+'+diff;diffEl.className='ec-diff pos';}
      else if(diff<0){diffEl.textContent=diff;diffEl.className='ec-diff neg';}
      else{diffEl.textContent='(=)';diffEl.className='ec-diff eq';}
    }
  });
  const tot=Object.values(totals).reduce((a,b)=>a+b,0);
  const totEl=document.getElementById('ecalc-total-seats');
  if(totEl) totEl.textContent=tot;
  const btn=document.getElementById('ecalc-calc-btn');
  if(btn) btn.style.background='#1a7a3a';
  ecLastTotals=totals;
  ecUpdateCoalition(totals);
  if(ecMapLayer) ecMapLayer.setStyle(ecMapStyle(ecWinners()));
  const cur=document.getElementById('ecalc-prov-search')?.value?.trim();
  if(cur) ecShowConstResults(cur);
}

// ── Coalition ──
function ecUpdateCoalition(t){
  if(!t) return;
  const total=350;
  const legend=document.getElementById('ecalc-legend');
  const overlay=document.getElementById('ecalc-coal-overlay');
  const counter=document.getElementById('ecalc-counter');
  const note=document.getElementById('ecalc-note');
  if(!legend||!overlay||!counter) return;

  const valid=EC_PARTIES.filter(n=>(t[n]||0)>0);
  legend.innerHTML='';
  valid.forEach(n=>{
    const s=t[n]||0;
    const role=ecPartyRoles[n]||'none';
    const roleLabel = role==='yes'?'✓ Sí':role==='no'?'✗ No':role==='abstain'?'~ Abs':'';
    const roleColor = role==='yes'?'#2BA84A':role==='no'?'#e05c5c':role==='abstain'?'#e0a800':'';
    const item=document.createElement('div');
    item.className='ec-legend-item'+(role!=='none'?' active':'');
    item.innerHTML=`<div class="ec-legend-box" style="background:${EC_COLORS[n]||'#999'}"></div><strong>${n}</strong> ${s}${roleLabel?` <span style="color:${roleColor};font-size:10px;font-weight:700;">${roleLabel}</span>`:''}`;
    item.onclick=()=>{
      // Cycle: none -> yes -> no -> abstain -> none
      const cur=ecPartyRoles[n]||'none';
      ecPartyRoles[n]=cur==='none'?'yes':cur==='yes'?'no':cur==='no'?'abstain':'none';
      if(ecPartyRoles[n]==='none') ecSelected=ecSelected.filter(x=>x!==n);
      else if(!ecSelected.includes(n)) ecSelected.push(n);
      ecUpdateCoalition(t);
    };
    legend.appendChild(item);
  });

  // Calculate yes/no/abstain counts
  let yesSeats=0, noSeats=0, abstainSeats=0;
  ecSelected.forEach(n=>{
    const role=ecPartyRoles[n]||'abstain';
    const s=t[n]||0;
    if(role==='yes') yesSeats+=s;
    else if(role==='no') noSeats+=s;
    else abstainSeats+=s;
  });
  const totalSel=yesSeats+noSeats+abstainSeats;
  const width=(totalSel/total)*100;
  overlay.style.width='0%';
  overlay.innerHTML='';
  if(totalSel>0){
    // Group by role: yes first (green tint), then abstain (yellow tint), then no (red tint)
    ['yes','abstain','no'].forEach(role=>{
      ecSelected.filter(n=>(ecPartyRoles[n]||'none')===role).forEach(n=>{
        const s=t[n]||0;
        if(!s) return;
        const seg=document.createElement('div');
        seg.className='ec-seg';
        seg.style.flexBasis=((s/totalSel)*100)+'%';
        seg.style.background=EC_COLORS[n]||'#999';
        // Add role indicator via opacity/border
        if(role==='no') seg.style.opacity='0.65';
        else if(role==='abstain') seg.style.opacity='0.85';
        overlay.appendChild(seg);
      });
    });
  }
  requestAnimationFrame(()=>overlay.style.width=width+'%');
  counter.textContent=`${totalSel} / ${total}`;
  counter.style.color=totalSel>=176?'#2BA84A':'var(--text)';
  note.textContent=`Mayoría = 176 escaños · Sí: ${yesSeats} | No: ${noSeats} | Abstención: ${abstainSeats}`;
  document.querySelectorAll('.ec-legend-item').forEach(el=>{
    const n=el.querySelector('strong').textContent;
    el.classList.toggle('active',ecSelected.includes(n));
  });
}

// Party role management (yes/no/abstain for pactometro)
const ecPartyRoles = {}; // party -> 'yes'|'no'|'abstain'
// Override legend click: cycle through yes/no/abstain
function ecSetupLegend(){
  // We'll use a different click handler that cycles roles
}

// ── Constituency display ──
function ecShowConstResults(name){
  const dataset=ecLatestConstResults||EC_BASELINE.constituencies;
  const c=dataset.find(x=>x.name===name);
  if(!c) return;

  const shares=EC_PARTIES.map(p=>({name:p,value:c[p]||0,color:EC_COLORS[p]})).filter(x=>x.value>0);
  const sorted=shares.sort((a,b)=>b.value-a.value);
  const max=sorted[0]?.value||1;

  const barsDiv=document.getElementById('ecalc-bars');
  if(!barsDiv) return;
  barsDiv.innerHTML='';
  sorted.forEach(p=>{
    const row=document.createElement('div');
    row.className='ec-bar-row';
    const barWidth=max>=0.5?(p.value/max)*100:(p.value/0.5)*100;
    row.innerHTML=`
      <div class="ec-bar-party">${p.name}</div>
      <div class="ec-bar-wrapper"><div class="ec-bar" style="width:${Math.min(barWidth,100)}%;background:${p.color}"></div></div>
      <div class="ec-bar-val">${(p.value*100).toFixed(1)}%</div>`;
    barsDiv.appendChild(row);
  });

  // Show seats for this constituency
  const seatsDiv=document.getElementById('ecalc-prov-seats');
  const natVotes={};
  ecParties.forEach(p=>natVotes[p.name]=p.votes||0);
  let totalV=0;
  EC_PARTIES.forEach(p=>totalV+=c[p]||0);
  const valid=EC_PARTIES.filter(p=>(c[p]||0)>=0.03*totalV);
  const seatAlloc=ecDhondt(c,EC_SEATS[name]||6,natVotes,valid);

  if(seatsDiv){
    seatsDiv.innerHTML='';
    EC_PARTIES.filter(p=>(seatAlloc[p]||0)>0).sort((a,b)=>(seatAlloc[b]||0)-(seatAlloc[a]||0)).forEach(p=>{
      const chip=document.createElement('div');
      chip.className='ec-seat-chip';
      chip.innerHTML=`<span class="ec-seat-dot" style="background:${EC_COLORS[p]}"></span><span style="color:${EC_COLORS[p]}">${p}</span>: ${seatAlloc[p]}`;
      seatsDiv.appendChild(chip);
    });
  }

  // Steal info
  const stealDiv=document.getElementById('ecalc-steal-info');
  if(stealDiv){
    const stealData=ecCalcStealInfo(c,EC_SEATS[name]||6,natVotes,valid,seatAlloc);
    if(stealData.steal.length>0 && stealData.lastWinner){
      let stealHtml=`<strong>Último escaño:</strong> ${stealData.lastWinner}<br>`;
      stealHtml+=`<strong>Votos para arrebatar el último escaño:</strong><br>`;
      stealData.steal.forEach(s=>{
        if(s.votesNeeded>0) stealHtml+=`&nbsp;• <span style="color:${EC_COLORS[s.party]||'#999'}">${s.party}</span> necesita +${s.votesNeeded.toFixed(2)} pp más<br>`;
      });
      stealDiv.innerHTML=stealHtml;
      stealDiv.style.display='block';
    } else {
      stealDiv.style.display='none';
    }
  }

  const winner=sorted[0];
  const wt=document.getElementById('ecalc-winner-text');
  if(wt && winner) wt.innerHTML=`Gana: <strong style="color:${winner.color}">${winner.name}</strong> (${(winner.value*100).toFixed(1)}%) · ${EC_SEATS[name]} escaños en juego`;
}

// ── Search ──
function ecInitSearch(){
  const input=document.getElementById('ecalc-prov-search');
  const dropdown=document.getElementById('ecalc-prov-dropdown');
  if(!input||!dropdown) return;
  const names=EC_BASELINE.constituencies.map(c=>c.name);
  let lastSel='';
  input.addEventListener('focus',()=>{lastSel=input.value;input.value='';});
  input.addEventListener('blur',()=>{if(input.value.trim()===''&&lastSel)input.value=lastSel;});
  input.addEventListener('input',()=>{
    const q=input.value.trim().toLowerCase();
    dropdown.innerHTML='';
    if(!q){dropdown.style.display='none';return;}
    const m=names.filter(n=>{
      const w=n.toLowerCase().split(/[\s\-']/);
      return q.split(/\s+/).filter(Boolean).every(qw=>w.some(wrd=>wrd.startsWith(qw)));
    });
    m.slice(0,10).forEach(name=>{
      const li=document.createElement('li');
      li.textContent=name;
      li.addEventListener('click',()=>{input.value=name;dropdown.style.display='none';lastSel=name;ecShowConstResults(name);});
      dropdown.appendChild(li);
    });
    dropdown.style.display=m.length>0?'block':'none';
  });
  document.addEventListener('click',e=>{if(!e.target.closest('.ec-search-wrap'))dropdown.style.display='none';});
}

// ── Settings panel ──
function ecRenderConc(){
  const tbody=document.getElementById('ecalc-conc-body');
  if(!tbody) return;
  tbody.innerHTML='';
  EC_CONC_EDITABLE.forEach(p=>{
    const row=document.createElement('tr');
    row.innerHTML=`
      <td class="ec-party" style="--party-color:${EC_COLORS[p]}">${p}</td>
      <td><input type="number" id="ecconc-${p}" value="${((ecConc[p]||0)*100).toFixed(1)}" step="0.5" min="-100" max="100"></td>
      <td><input type="number" id="ecinc-${p}" value="${((ecInc[p]||0)*100).toFixed(1)}" step="0.5" min="-100" max="100"></td>`;
    tbody.appendChild(row);
    ['conc','inc'].forEach(type=>{
      const el=document.getElementById(`ec${type}-${p}`);
      if(!el) return;
      let orig=el.value;
      el.addEventListener('focus',()=>{orig=el.value;el.value='';});
      el.addEventListener('blur',()=>{
        if(el.value===''||isNaN(parseFloat(el.value))){el.value=orig;}
        else{el.value=parseFloat(el.value).toFixed(1);}
        const v=parseFloat(el.value)||0;
        if(type==='conc') ecConc[p]=v/100; else ecInc[p]=v/100;
        ecCalculate();
      });
      el.addEventListener('input',()=>{
        const v=parseFloat(el.value);
        if(isNaN(v)) return;
        if(type==='conc') ecConc[p]=v/100; else ecInc[p]=v/100;
        ecCalculate();
      });
    });
  });
}

// ── Tab switcher ──
function ecInitTabs(){
  const tabRes=document.getElementById('ecalc-tab-result');
  const tab2023=document.getElementById('ecalc-tab-2023');
  const pill=document.getElementById('ecalc-tab-pill');
  if(!tabRes||!tab2023||!pill) return;
  tabRes.addEventListener('click',()=>{
    if(tabRes.classList.contains('active')) return;
    tabRes.classList.add('active'); tab2023.classList.remove('active');
    pill.style.transform='translateX(0)'; ec2023View=false;
    if(ecLastTotals) ecUpdateCoalition(ecLastTotals);
  });
  tab2023.addEventListener('click',()=>{
    if(tab2023.classList.contains('active')) return;
    tab2023.classList.add('active'); tabRes.classList.remove('active');
    pill.style.transform='translateX(100%)'; ec2023View=true;
    ecUpdateCoalition(EC_PREV_SEATS);
  });
}

// ── Reset ──
document.getElementById('ecalc-reset-btn')?.addEventListener('click',()=>{
  ecParties.forEach((p,i)=>{
    p.votes=EC_DEFAULTS[p.name]||0;
    const el=document.getElementById(`ecv-${i}`);
    if(el) el.value=p.votes.toFixed(1);
  });
  EC_PARTIES.forEach(p=>{ecConc[p]=0;ecInc[p]=0;});
  EC_CONC_EDITABLE.forEach(p=>{
    const c=document.getElementById(`ecconc-${p}`);
    if(c) c.value='0.0';
    const inc=document.getElementById(`ecinc-${p}`);
    if(inc) inc.value='0.0';
  });
  ecCalculate();
});

// ── Randomise ──
document.getElementById('ecalc-rand-btn')?.addEventListener('click',()=>{
  const ranges={"PP":[10,70],"PSOE":[10,70],"Vox":[10,70],"Sumar":[10,70],"Podem":[10,70],"SALF":[0,30],"ERC":[0,4],"JxCat":[0,4],"EHB":[0,3],"PNV":[0,2],"BNG":[0,2],"Cca":[0,1],"UPN":[0,0.5]};
  const target=97;
  const raws=ecParties.map(p=>{const [mn,mx]=ranges[p.name]||[1,20];return mn+Math.random()*(mx-mn);});
  const sum=raws.reduce((a,b)=>a+b,0);
  const scaled=raws.map(v=>Math.floor((v/sum)*target*10)/10);
  const run=scaled.slice(0,-1).reduce((a,b)=>a+b,0);
  scaled[scaled.length-1]=Math.round((target-run)*10)/10;
  ecParties.forEach((p,j)=>{
    p.votes=scaled[j];
    const el=document.getElementById(`ecv-${j}`);
    if(el) el.value=scaled[j].toFixed(1);
  });
  ecCalculate();
});

// ── Calculate button ──
document.getElementById('ecalc-calc-btn')?.addEventListener('click',ecCalculate);

// ── Settings toggle ──
document.getElementById('ecalc-settings-toggle')?.addEventListener('click',()=>{
  const p=document.getElementById('ecalc-settings-panel');
  if(!p) return;
  p.style.display=p.style.display==='none'?'block':'none';
});

// ══ MAP ══
let ecMap=null, ecMapLayer=null;


// Mapa de nombres GeoJSON → nombres exactos del EC_BASELINE
// Los nombres del EC_BASELINE: A Coruña, Álava, Albacete, Alicante, Almería, Asturias,
// Ávila, Badajoz, Balearic Islands, Barcelona, Biscay, Burgos, Cáceres, Cádiz,
// Cantabria, Castellón, Ciudad Real, Córdoba, Cuenca, Gipuzkoa, Girona, Granada,
// Guadalajara, Huelva, Huesca, Jaén, La Rioja, Las Palmas, León, Lleida, Lugo,
// Madrid, Málaga, Melilla, Murcia, Navarre, Ourense, Palencia, Pontevedra,
// Salamanca, Santa Cruz de Tenerife, Segovia, Seville, Soria, Tarragona,
// Teruel, Toledo, Valencia, Valladolid, Zamora, Zaragoza, Ceuta, Ávila
const EC_NAME_NORM = {
  // A Coruña
  'La Coruña':'A Coruña','A Coruña':'A Coruña','A Coruna':'A Coruña','Coruña (A)':'A Coruña','La Coruna':'A Coruña',
  // Álava
  'Álava':'Álava','Alava':'Álava','Araba':'Álava','Araba/Álava':'Álava',
  // Resto sin cambio
  'Albacete':'Albacete',
  'Alicante':'Alicante','Alacant':'Alicante','Alicante/Alacant':'Alicante','Alacant/Alicante':'Alicante',
  'Almería':'Almería','Almeria':'Almería',
  'Asturias':'Asturias','Principado de Asturias':'Asturias',
  'Ávila':'Ávila','Avila':'Ávila',
  'Badajoz':'Badajoz',
  // Balearic Islands (nombre en EC_BASELINE en inglés)
  'Baleares':'Balearic Islands','Illes Balears':'Balearic Islands','Islas Baleares':'Balearic Islands',
  'Balears':'Balearic Islands','Balearic Islands':'Balearic Islands',
  'Barcelona':'Barcelona',
  // Biscay (nombre en EC_BASELINE en inglés)
  'Bizkaia':'Biscay','Vizcaya':'Biscay','Bizkaia/Vizcaya':'Biscay','Vizcaya/Bizkaia':'Biscay','Biscay':'Biscay',
  'Burgos':'Burgos',
  'Cáceres':'Cáceres','Caceres':'Cáceres',
  'Cádiz':'Cádiz','Cadiz':'Cádiz',
  'Cantabria':'Cantabria',
  'Castellón':'Castellón','Castellón de la Plana':'Castellón','Castelló de la Plana':'Castellón',
  'Castelló':'Castellón','Castello':'Castellón','Castellon':'Castellón',
  'Ciudad Real':'Ciudad Real',
  'Córdoba':'Córdoba','Cordoba':'Córdoba',
  'Cuenca':'Cuenca',
  // Gipuzkoa
  'Gipuzkoa':'Gipuzkoa','Guipúzcoa':'Gipuzkoa','Guipuzcoa':'Gipuzkoa',
  'Gipuzkoa/Guipúzcoa':'Gipuzkoa','Guipúzcoa/Gipuzkoa':'Gipuzkoa',
  'Girona':'Girona','Gerona':'Girona',
  'Granada':'Granada',
  'Guadalajara':'Guadalajara',
  'Huelva':'Huelva',
  'Huesca':'Huesca',
  'Jaén':'Jaén','Jaen':'Jaén',
  'La Rioja':'La Rioja','Rioja':'La Rioja',
  'Las Palmas':'Las Palmas','Gran Canaria':'Las Palmas','Las Palmas de Gran Canaria':'Las Palmas',
  'León':'León','Leon':'León',
  'Lleida':'Lleida','Lérida':'Lleida','Lerida':'Lleida',
  'Lugo':'Lugo',
  'Madrid':'Madrid','Comunidad de Madrid':'Madrid',
  'Málaga':'Málaga','Malaga':'Málaga',
  'Melilla':'Melilla',
  'Murcia':'Murcia','Región de Murcia':'Murcia',
  // Navarre (nombre en EC_BASELINE en inglés)
  'Navarra':'Navarre','Nafarroa':'Navarre','Comunidad Foral de Navarra':'Navarre','Navarre':'Navarre',
  'Ourense':'Ourense','Orense':'Ourense',
  'Palencia':'Palencia',
  'Pontevedra':'Pontevedra',
  'Salamanca':'Salamanca',
  'Santa Cruz de Tenerife':'Santa Cruz de Tenerife','Tenerife':'Santa Cruz de Tenerife',
  'S.C. Tenerife':'Santa Cruz de Tenerife','SC Tenerife':'Santa Cruz de Tenerife',
  'Segovia':'Segovia',
  // Seville (nombre en EC_BASELINE en inglés)
  'Sevilla':'Seville','Seville':'Seville',
  'Soria':'Soria',
  'Tarragona':'Tarragona',
  'Teruel':'Teruel',
  'Toledo':'Toledo',
  'Valencia':'Valencia','València':'Valencia','Valencia/València':'Valencia','València/Valencia':'Valencia',
  'Valladolid':'Valladolid',
  'Zamora':'Zamora',
  'Zaragoza':'Zaragoza',
  'Ceuta':'Ceuta'
};

// Property name detector for the GeoJSON
let _ecNameProp = null;
function ecGetNameProp(feature){
  if(_ecNameProp) return _ecNameProp;
  const props = feature.properties || {};
  _ecNameProp = ['name','NAME','nombre','NOMBRE','provincia','PROVINCIA','nom','NOM'].find(k=>props[k]) || 'name';
  return _ecNameProp;
}

function ecNormName(rawName){
  if(EC_NAME_NORM[rawName]) return EC_NAME_NORM[rawName];
  // Fallback: buscar por coincidencia parcial (sin acentos, minúsculas)
  const normalize = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z]/g,'');
  const raw = normalize(rawName);
  // Lista de nombres exactos del EC_BASELINE
  const ecNames = Object.keys(EC_SEATS);
  // Primero intento exacto sin acentos
  const exact = ecNames.find(n => normalize(n) === raw);
  if(exact) return exact;
  // Luego por inclusión: si el nombre normalizado del GeoJSON empieza igual
  const partial = ecNames.find(n => {
    const en = normalize(n);
    return raw.startsWith(en) || en.startsWith(raw) || (raw.length>4 && en.includes(raw)) || (en.length>4 && raw.includes(en));
  });
  if(partial) return partial;
  return rawName;
}

function ecWinners(){
  const lu={};
  const dataset=ecLatestConstResults||EC_BASELINE.constituencies;
  dataset.forEach(row=>{
    let best=null,bv=-1;
    EC_PARTIES.forEach(p=>{if((row[p]||0)>bv){bv=row[p];best=p;}});
    lu[row.name]=best;
  });
  return lu;
}

function ecMapStyle(lu){
  return function(f){
    const nameProp=ecGetNameProp(f);
    const raw=f.properties[nameProp]||'';
    const norm=ecNormName(raw);
    const w=lu[norm];
    return {fillColor:w?(EC_COLORS[w]||'#888'):'#888',fillOpacity:0.82,color:'rgba(255,255,255,0.3)',weight:0.7};
  };
}

function ecBuildMapLayer(GJ_DATA){
  _ecNameProp=null; // reset so it auto-detects from new data
  if(ecMapLayer){ecMap.removeLayer(ecMapLayer);ecMapLayer=null;}
  ecMapLayer=L.geoJSON(GJ_DATA,{style:ecMapStyle(ecWinners()),onEachFeature:(f,l)=>{
    l.on({
      mouseover:e=>{
        e.target.setStyle({weight:2,color:'#fff',fillOpacity:0.97});
        e.target.bringToFront();
        const nameProp=ecGetNameProp(f);
        const raw=f.properties[nameProp]||'';
        const norm=ecNormName(raw);
        const w=ecWinners()[norm]||'?';
        l.bindTooltip(`<strong>${norm||raw}</strong><br>${w}`,{sticky:true,className:'ecalc-map-tooltip'}).openTooltip();
      },
      mouseout:e=>{e.target.setStyle(ecMapStyle(ecWinners())(f));e.target.closeTooltip();},
      click:()=>{
        const nameProp=ecGetNameProp(f);
        const raw=f.properties[nameProp]||'';
        const norm=ecNormName(raw);
        const el=document.getElementById('ecalc-prov-search');
        if(el){el.value=norm||raw;ecShowConstResults(norm||raw);}
      }
    });
  }}).addTo(ecMap);
}

function ecLoadGeoJSON(cb){
  // Try to reuse already-loaded GeoJSON stored globally
  if(window._ecGJ){cb(window._ecGJ);return;}
  const urls=[
    'https://cdn.jsdelivr.net/gh/codeforgermany/click_that_hood@main/public/data/spain-provinces.geojson',
    'https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/spain-provinces.geojson'
  ];
  function tryNext(i){
    if(i>=urls.length) return;
    fetch(urls[i]).then(r=>r.json()).then(data=>{window._ecGJ=data;cb(data);}).catch(()=>tryNext(i+1));
  }
  tryNext(0);
}

function ecInitMap(){
  const container=document.getElementById('ecalc-map');
  if(!container||ecMap) return;
  function doInit(){
    const defaultZoom=window.innerWidth<768?4.5:5;
    ecMap=L.map('ecalc-map',{center:[40.4,-3.7],zoom:defaultZoom,zoomSnap:0,minZoom:4,maxZoom:10,
      maxBounds:[[35,-10],[46,5]],maxBoundsViscosity:1});
    window.ecMap=ecMap;
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png',{subdomains:'abcd'}).addTo(ecMap);
    ecLoadGeoJSON(data=>ecBuildMapLayer(data));
    window.addEventListener('resize',()=>ecMap&&ecMap.invalidateSize());
  }
  if(typeof L !== 'undefined'){
    doInit();
  } else {
    const css=document.createElement('link');css.rel='stylesheet';css.href='https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css';document.head.appendChild(css);
    const js=document.createElement('script');js.src='https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js';
    js.onload=doInit;document.head.appendChild(js);
  }
}

// ── Init ──
function ecInit(){
  ecRenderTable();
  ecRenderConc();
  ecInitSearch();
  ecInitTabs();
  ecCalculate();
  ecInitMap();
}
window.ecInit = ecInit;
window.ecMap = null; // will be set in ecInitMap

})();



// ═══════════════════════════════════════════
//  TABS NAVIGATION
// ═══════════════════════════════════════════
document.querySelectorAll('.main-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        const t = tab.dataset.tab;
        if(t==='calendario') { setTimeout(renderCalendar,50); }
        if(t==='mapaelectoral') { setTimeout(initMapPanel,50); }
        document.querySelectorAll('.main-tab').forEach(x => x.classList.remove('active'));
        document.querySelectorAll('.tool-panel').forEach(x => x.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById('panel-' + t).classList.add('active');
        // Show selector only on datos tab
        document.getElementById('sel-wrap').style.display = (t === 'datos') ? 'flex' : 'none';
        // Lazy init
        if (t === 'mandatometro') renderMandatometro();
        if (t === 'dhondt')       { renderPartyList(); document.getElementById('method-desc').textContent = METHOD_DESC[selectedMethod]; setTimeout(calcularDhondt, 80); if(pactoPartidos.length===0) loadPactoPreset('cyl'); }
        if (t === 'encuestas')    { renderLessons(); setTimeout(()=>{ renderTrendPolls(); calcularTendencia(); }, 100); }
        if (t === 'sistemas')     renderSystems();
        if (t === 'ranking')      renderRanking();
        if (t === 'rankingpartidos') renderRankingPartidos();
        if (t === 'rankingprovincias') renderRankingProvincias();
        if (t === 'ganadores')        ganadoresInit();
        if (t === 'evolucion')        evolucionInit();
        if (t === 'deltavoto')        deltaInit();
        if (t === 'brecha')           brechaInit();
        if (t === 'polarizacion')     polarizInit();
        if (t === 'comparador')       comp2Init();
        if (t === 'izqder')           izqderInit();
        if (t === 'recursos')     recursosInit();
        if (t === 'comparativa')  cmpInit();
        if (t === 'pensiones-gasto') pensGastoInit();
        if (t === 'pensiones-provincia') pensProviInit();
        if (t === 'lideres') lideresInit();
        if (t === 'votojoven') { if(window.vjInit) window.vjInit(); }
        // ohios panel needs no lazy init — data is rendered on load
        if (t === 'translacion') { if(window.trlRender) window.trlRender(); }
        if (t === 'espana-calculadora') { setTimeout(()=>{ if(typeof ecInit==='function'&&!window.ecInitDone){ecInit();window.ecInitDone=true;}else if(window.ecMap)window.ecMap.invalidateSize(); },60); }
    });
});

// ─── GLOBAL KEYBOARD SHORTCUTS — TABS ──────────────────────
// H=datos, M=mandatometro, C=calculadora, I=encuestas,
// S=sistemas, L=calendario, T=mapa electoral
const TAB_KEYS = {
  'q': 'datos', 'w': 'mandatometro', 't': 'dhondt',
  'y': 'encuestas', 'u': 'sistemas', 'i': 'calendario', 'o': 'mapaelectoral'
};
document.addEventListener('keydown', e => {
  if(document.activeElement && ['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)) return;
  // Allow Ctrl+F to pass through to calendar_map.js fill-mode toggle
  if((e.ctrlKey || e.metaKey) && (e.key === 'f' || e.key === 'F')) return;
  if(e.ctrlKey || e.metaKey || e.altKey) return;
  const tabKey = TAB_KEYS[e.key.toLowerCase()];
  if(tabKey) {
    e.preventDefault();
    const tabEl = document.querySelector(`.main-tab[data-tab="${tabKey}"]`);
    if(tabEl) tabEl.click();
  }
});

// ═══════════════════════════════════════════
//  STATE
// ═══════════════════════════════════════════
let isAdmin = false;
let presidentes = JSON.parse(localStorage.getItem('ballotly_pres') || 'null') || [
    {id:1,nombre:'Felipe González',       color:'#e53935',inicio:'1982-12-02',fin:'1996-05-05',photo:null},
    {id:2,nombre:'José María Aznar',      color:'#1565c0',inicio:'1996-05-05',fin:'2004-04-17',photo:null},
    {id:3,nombre:'José Luis R. Zapatero', color:'#e53935',inicio:'2004-04-17',fin:'2011-12-22',photo:null},
    {id:4,nombre:'Mariano Rajoy',         color:'#1565c0',inicio:'2011-12-22',fin:'2018-06-02',photo:null},
    {id:5,nombre:'Adolfo Suárez',         color:'#6a1b9a',inicio:'1977-07-03',fin:'1981-02-26',photo:null},
    {id:6,nombre:'Leopoldo Calvo-Sotelo', color:'#e65100',inicio:'1981-02-26',fin:'1982-12-02',photo:null},
    {id:7,nombre:'Pedro Sánchez',         color:'#e53935',inicio:'2018-06-02',fin:null,activo:true,photo:null},
];
let presPhotos = JSON.parse(localStorage.getItem('ballotly_photos') || '{}');
function savePres(){ localStorage.setItem('ballotly_pres', JSON.stringify(presidentes)); }
function savePhotos(){ localStorage.setItem('ballotly_photos', JSON.stringify(presPhotos)); }

// ═══════════════════════════════════════════
//  MANDATÓMETRO
// ═══════════════════════════════════════════
function getDays(p){ const s=new Date(p.inicio),e=p.activo?new Date():new Date(p.fin); return Math.max(0,Math.floor((e-s)/86400000)); }
function shortName(n){ const p=n.split(' '); return p.length>2?p.slice(-2).join(' '):n; }
let mchart=null;

function renderMandatometro(){
    const sorted=[...presidentes].sort((a,b)=>getDays(b)-getDays(a));
    const max=getDays(sorted[0]);
    const san=presidentes.find(p=>p.nombre.includes('Sánchez'));
    const sanDias=getDays(san);
    document.getElementById('stat-dias-sanchez').textContent=sanDias.toLocaleString('es');
    const rank=sorted.findIndex(p=>p.nombre.includes('Sánchez'))+1;
    document.getElementById('stat-ranking').textContent='#'+rank;
    const next=sorted[rank-2];
    if(next&&san.activo){
        const diff=getDays(next)-sanDias+1;
        document.getElementById('stat-para-superar').textContent=diff>0?diff.toLocaleString('es'):'¡Superado!';
        document.getElementById('milestone-title').textContent=(diff>0?diff+' días para superar':'Ha superado')+' a '+next.nombre;
        document.getElementById('milestone-sub').textContent=next.nombre+': '+getDays(next).toLocaleString('es')+' días';
        document.getElementById('milestone-days').textContent=diff>0?diff+'d':'✓';
    }
    if(mchart) mchart.destroy();
    const ctx=document.getElementById('mandatometro-chart').getContext('2d');
    mchart=new Chart(ctx,{
        type:'bar',
        data:{labels:sorted.map(p=>shortName(p.nombre)),datasets:[{data:sorted.map(p=>getDays(p)),backgroundColor:sorted.map(p=>p.color+'cc'),borderColor:sorted.map(p=>p.color),borderWidth:2,borderRadius:6,borderSkipped:false}]},
        options:{responsive:true,maintainAspectRatio:false,indexAxis:'y',plugins:{legend:{display:false},tooltip:{callbacks:{label:c=>` ${c.raw.toLocaleString('es')} días`},backgroundColor:'#1c2333',borderColor:'rgba(255,255,255,.1)',borderWidth:1,titleFont:{family:'Sora',size:11},bodyFont:{family:'Sora',size:12}}},
        scales:{x:{grid:{color:'rgba(255,255,255,.05)'},ticks:{color:'#5c6478',font:{family:'Sora',size:10},callback:v=>v.toLocaleString('es')},border:{display:false}},y:{grid:{display:false},ticks:{color:'#8e97ad',font:{family:'Sora',size:11,weight:500}},border:{display:false}}},
        animation:{duration:600}}
    });
    const bc=document.getElementById('pres-bars');
    bc.innerHTML='';
    sorted.forEach((p,i)=>{
        const days=getDays(p), pct=(days/max*100).toFixed(1), ph=presPhotos[p.id];
        const row=document.createElement('div');
        row.className='pr-row';
        row.innerHTML=`<div class="pav">${ph?`<img src="${ph}" alt="${p.nombre}">`:p.nombre.split(' ').map(w=>w[0]).join('').slice(0,2)}</div><div class="pname">${shortName(p.nombre)}${p.activo?' <span style="color:var(--accent);font-size:8px;">●</span>':''}</div><div class="ptrack"><div class="pfill" style="width:${pct}%;background:${p.color};transition:width 1s ease ${i*.08}s;"></div></div><div class="pdays">${days.toLocaleString('es')}d</div>`;
        bc.appendChild(row);
    });
}

function exportPres(){
    const rows=[['Presidente','Inicio','Fin','Días']];
    presidentes.forEach(p=>rows.push([p.nombre,p.inicio,p.fin||'actual',getDays(p)]));
    dlCSV(rows,'mandatos_presidentes.csv');
}

setInterval(()=>{
    const san=presidentes.find(p=>p.nombre.includes('Sánchez'));
    if(san&&san.activo&&document.getElementById('panel-mandatometro').classList.contains('active'))
        document.getElementById('stat-dias-sanchez').textContent=getDays(san).toLocaleString('es');
},1000);

// ═══════════════════════════════════════════
//  MANDATÓMETRO — SUB-TABS
// ═══════════════════════════════════════════
function switchMandatoTab(tab, btn){
    document.querySelectorAll('.mandato-subtab').forEach(b=>{b.classList.remove('active');b.classList.add('btn-g');});
    btn.classList.add('active'); btn.classList.remove('btn-g');
    document.getElementById('mandato-sub-nacional').style.display='none';
    document.getElementById('mandato-sub-autonomico').style.display='none';
    document.getElementById('mandato-sub-global-autonomico').style.display='none';
    document.getElementById('mandato-sub-'+tab).style.display='block';
    if(tab==='global-autonomico') mandatoGlobInit();
}

// ── AUTONÓMICO POR CCAA ──
const MANDATO_CCAA_DATA = {
  galicia:{name:"Galicia",flag:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Galicia.svg/960px-Flag_of_Galicia.svg.png",sub:"Xunta de Galicia · Presidente de la Xunta",presidentes:[{name:"Gerardo Fernández Albor",party:"AP",dias:2078,active:false},{name:"Fernando Ignacio González Laxe",party:"PSdeG-PSOE",dias:861,active:false},{name:"Manuel Fraga Iribarne",party:"PP",dias:5657,active:false},{name:"Emilio Pérez Touriño",party:"PSdeG-PSOE",dias:1356,active:false},{name:"Alberto Núñez Feijóo",party:"PP",dias:4775,active:false},{name:"Alfonso Rueda Valenzuela",party:"PP",dias:1426,active:true}]},
  asturias:{name:"Asturias",flag:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_Asturias.svg/960px-Flag_of_Asturias.svg.png",sub:"Principado de Asturias · Presidente del Principado",presidentes:[{name:"Pedro de Silva Cienfuegos-Jovellanos",party:"PSOE",dias:2943,active:false},{name:"Juan Luis Rodríguez-Vigil Rubio",party:"PSOE",dias:714,active:false},{name:"Antonio Ramón Trevín Lombán",party:"PSOE",dias:755,active:false},{name:"Sergio Marqués Fernández",party:"PP",dias:1467,active:false},{name:"Vicente Álvarez Areces",party:"PSOE",dias:4378,active:false},{name:"Francisco Álvarez-Cascos",party:"FAC",dias:316,active:false},{name:"Javier Fernández Fernández",party:"PSOE",dias:2612,active:false},{name:"Adrián Barbón Rodríguez",party:"PSOE",dias:2455,active:true}]},
  cantabria:{name:"Cantabria",flag:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Flag_of_Cantabria.svg/960px-Flag_of_Cantabria.svg.png",sub:"Comunidad Autónoma de Cantabria · Presidente",presidentes:[{name:"José Antonio Rodríguez Martínez",party:"AP",dias:719,active:false},{name:"Ángel Díaz de Entresotos Mier",party:"AP",dias:1186,active:false},{name:"Juan Hormaechea Cazón (1ª etapa)",party:"AP",dias:1231,active:false},{name:"Jaime Blanco García",party:"PSOE",dias:208,active:false},{name:"Juan Hormaechea Cazón (2ª etapa)",party:"UPCA",dias:1464,active:false},{name:"José Joaquín Martínez Sieso",party:"PP",dias:2906,active:false},{name:"Miguel Ángel Revilla Roiz (1ª etapa)",party:"PRC",dias:2918,active:false},{name:"Juan Ignacio Diego Palacios",party:"PP",dias:1472,active:false},{name:"Miguel Ángel Revilla Roiz (2ª etapa)",party:"PRC",dias:2921,active:false},{name:"María José Sanz de Buruaga",party:"PP",dias:1009,active:true}]},
  euskadi:{name:"País Vasco (Euskadi)",flag:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Flag_of_the_Basque_Country.svg/960px-Flag_of_the_Basque_Country.svg.png",sub:"Eusko Jaurlaritza · Lehendakari",presidentes:[{name:"Carlos Garaikoetxea Urriza",party:"PNV",dias:1754,active:false},{name:"José Antonio Ardanza Garro",party:"PNV",dias:5090,active:false},{name:"Juan José Ibarretxe Markuartu",party:"EAJ-PNV",dias:3779,active:false},{name:"Francisco Javier López Álvarez",party:"PSOE",dias:1319,active:false},{name:"Iñigo Urkullu Rentería",party:"PNV",dias:4208,active:false},{name:"Imanol Pradales Gil",party:"PNV",dias:656,active:true}]},
  navarra:{name:"Navarra",flag:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Bandera_de_Navarra.svg/960px-Bandera_de_Navarra.svg.png",sub:"Comunidad Foral de Navarra · Presidente del Gobierno",presidentes:[{name:"Jaime Ignacio del Burgo",party:"UCD",dias:376,active:false},{name:"Juan Manuel Arza Muñuri",party:"UCD",dias:1357,active:false},{name:"Gabriel Urralburu Tainta",party:"PSOE",dias:2701,active:false},{name:"Juan Cruz Alli Aranguren",party:"UPN",dias:1402,active:false},{name:"Javier Otano Cid",party:"PSOE",dias:329,active:false},{name:"Miguel Sanz Sesma",party:"UPN",dias:5400,active:false},{name:"Yolanda Barcina Angulo",party:"UPN",dias:1483,active:false},{name:"Miren Uxue Barkos Berruezo",party:"GBai",dias:1477,active:false},{name:"María Victoria Chivite Navascués",party:"PSOE",dias:2438,active:true}]},
  aragon:{name:"Aragón",flag:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Bandera_de_la_provincia_de_Zaragoza.svg/960px-Bandera_de_la_provincia_de_Zaragoza.svg.png",sub:"Comunidad Autónoma de Aragón · Presidente",presidentes:[{name:"Santiago Marraco Solana",party:"PSOE",dias:1516,active:false},{name:"Hipólito Gómez de las Roces",party:"PAR",dias:1440,active:false},{name:"Emilio Eiroa García",party:"PAR",dias:799,active:false},{name:"José Marco Berges",party:"PSOE",dias:489,active:false},{name:"Ramón Tejedor Sanz",party:"PSOE",dias:175,active:false},{name:"Santiago Lanzuela Marina",party:"PP",dias:1484,active:false},{name:"Marcelino Iglesias Ricou",party:"PSOE",dias:4365,active:false},{name:"Luisa Fernanda Rudi Úbeda",party:"PP",dias:1453,active:false},{name:"Francisco Javier Lambán Montañés",party:"PSOE",dias:2960,active:false},{name:"Jorge Antonio Azcón Navarro",party:"PP",dias:972,active:true}]},
  cataluna:{name:"Cataluña",flag:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Catalonia.svg/960px-Flag_of_Catalonia.svg.png",sub:"Generalitat de Catalunya · President",presidentes:[{name:"Jordi Pujol i Soley",party:"CiU",dias:8597,active:false},{name:"Pascual Maragall i Mira",party:"PSOE",dias:1075,active:false},{name:"José Montilla Aguilera",party:"PSOE",dias:1491,active:false},{name:"Artur Mas i Gavarró",party:"CiU",dias:1848,active:false},{name:"Carles Puigdemont i Casamajó",party:"JxSÍ",dias:656,active:false},{name:"Soraya Sáenz de Santamaría (interina)",party:"PP",dias:202,active:false},{name:"Joaquim Torra i Plá",party:"JxCat",dias:837,active:false},{name:"Pere Aragonès i Garcia",party:"ERC",dias:1145,active:false},{name:"Salvador Illa Roca",party:"PSC",dias:607,active:true}]},
  baleares:{name:"Islas Baleares",flag:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Flag_of_the_Balearic_Islands.svg/960px-Flag_of_the_Balearic_Islands.svg.png",sub:"Govern de les Illes Balears · President",presidentes:[{name:"Gabriel Cañellas Fons",party:"AP",dias:4437,active:false},{name:"Cristòfol Soler i Cladera",party:"PP",dias:322,active:false},{name:"Jaume Matas i Palou (1ª etapa)",party:"PP",dias:1135,active:false},{name:"Francesc Antich i Oliver (1ª etapa)",party:"PSOE",dias:1432,active:false},{name:"Jaume Matas i Palou (2ª etapa)",party:"PP",dias:1471,active:false},{name:"Francesc Antich i Oliver (2ª etapa)",party:"PSOE",dias:1444,active:false},{name:"José Ramón Bauzá Díaz",party:"PP",dias:1476,active:false},{name:"Francesca Lluch Armengol i Socias",party:"PSOE",dias:2910,active:false},{name:"Margarita Prohens Rigo",party:"PP",dias:1007,active:true}]},
  canarias:{name:"Canarias",flag:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Bandera_de_Canarias.svg/960px-Bandera_de_Canarias.svg.png",sub:"Comunidad Autónoma de Canarias · Presidente",presidentes:[{name:"Jerónimo Saavedra Acevedo (1ª etapa)",party:"PSOE",dias:1664,active:false},{name:"Fernando Fernández Martín",party:"CDS",dias:520,active:false},{name:"Lorenzo Olarte Cullen",party:"CDS",dias:940,active:false},{name:"Jerónimo Saavedra Acevedo (2ª etapa)",party:"PSOE",dias:622,active:false},{name:"Manuel Hermoso Rojas",party:"CCA",dias:2294,active:false},{name:"Román Rodríguez Rodríguez",party:"CCA",dias:1453,active:false},{name:"Adán Martín Menis",party:"CCA",dias:1467,active:false},{name:"Paulino Rivero Baute",party:"CCA",dias:2919,active:false},{name:"Fernando Clavijo Batlle (1ª etapa)",party:"CCA",dias:1469,active:false},{name:"Ángel Víctor Torres Pérez",party:"PSOE",dias:1460,active:false},{name:"Fernando Clavijo Batlle (2ª etapa)",party:"CC",dias:1000,active:true}]},
  ceuta:{name:"Ceuta",flag:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Ceuta.svg/960px-Flag_of_Ceuta.svg.png",sub:"Ciudad Autónoma de Ceuta · Presidente",presidentes:[{name:"Basilio Fernández López",party:"PFC",dias:404,active:false},{name:"Jesus Cayetano Fortes Ramos",party:"PP",dias:1077,active:false},{name:"Antonio Sampietro Casarramona",party:"PP",dias:534,active:false},{name:"Juan Jesús Vivas Lara",party:"PP",dias:9193,active:true}]},
  melilla:{name:"Melilla",flag:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Melilla.svg/960px-Flag_of_Melilla.svg.png",sub:"Ciudad Autónoma de Melilla · Presidente",presidentes:[{name:"Ignacio Velázquez Rivera",party:"PP",dias:1086,active:false},{name:"Enrique Palacios Hernández",party:"PP",dias:490,active:false},{name:"Mustafá Aberchán",party:"PSOE",dias:381,active:false},{name:"Juan José Imbroda (1ª etapa)",party:"PP",dias:6905,active:false},{name:"Eduardo de Castro González",party:"CIUDADANOS",dias:1484,active:false},{name:"Juan José Imbroda (2ª etapa)",party:"PP",dias:1007,active:true}]},
  valencia:{name:"Comunidad Valenciana",flag:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Flag_of_the_Valencian_Community_%28ES-VC%29.svg/960px-Flag_of_the_Valencian_Community_%28ES-VC%29.svg.png",sub:"Generalitat Valenciana · President",presidentes:[{name:"Joan Lerma Blasco",party:"PSOE",dias:4604,active:false},{name:"Eduardo Zaplana Hernández-Soro",party:"PP",dias:2564,active:false},{name:"José Luis Olivas Martínez",party:"PP",dias:332,active:false},{name:"Francisco Enrique Camps Ortiz",party:"PP",dias:2961,active:false},{name:"Alberto Fabra Part",party:"PP",dias:1430,active:false},{name:"Ximo Puig i Ferrer",party:"PSOE",dias:2942,active:false},{name:"Carlos Mazón Guixot",party:"PP",dias:870,active:false},{name:"Juan Francisco Pérez Llorca",party:"PP",dias:128,active:true}]},
  rioja:{name:"La Rioja",flag:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Flag_of_La_Rioja_%28with_coat_of_arms%29.svg/960px-Flag_of_La_Rioja_%28with_coat_of_arms%29.svg.png",sub:"Comunidad Autónoma de La Rioja · Presidente",presidentes:[{name:"José María de Miguel Gil",party:"PSOE",dias:1515,active:false},{name:"Joaquín Espert Pérez-Caballero",party:"AP",dias:900,active:false},{name:"José Ignacio Pérez Sáenz",party:"PSOE",dias:2003,active:false},{name:"Pedro Sanz Alonso",party:"PP",dias:7306,active:false},{name:"José Ignacio Ceniceros González",party:"PP",dias:1514,active:false},{name:"Concepción Andreu Rodríguez",party:"PSOE",dias:1401,active:false},{name:"Gonzalo Capellán de Miguel",party:"PP",dias:1014,active:true}]},
  castillaleon:{name:"Castilla y León",flag:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Flag_of_Castile_and_Le%C3%B3n.svg/960px-Flag_of_Castile_and_Le%C3%B3n.svg.png",sub:"Junta de Castilla y León · Presidente",presidentes:[{name:"Demetrio Madrid López",party:"PSOE",dias:1271,active:false},{name:"José Constantino Nalda García",party:"PSOE",dias:247,active:false},{name:"José María Aznar López",party:"AP",dias:786,active:false},{name:"Jesús María Posada Moreno",party:"PP",dias:659,active:false},{name:"Juan José Lucas Giménez",party:"PP",dias:3524,active:false},{name:"Juan Vicente Herrera Campo",party:"PP",dias:6690,active:false},{name:"Alfonso Fernando Fernández Mañueco",party:"PP",dias:2463,active:true}]},
  madrid:{name:"Comunidad de Madrid",flag:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_the_Community_of_Madrid.svg/960px-Flag_of_the_Community_of_Madrid.svg.png",sub:"Comunidad de Madrid · Presidente",presidentes:[{name:"Joaquín Leguina Herrán",party:"PSOE",dias:4399,active:false},{name:"Alberto Ruiz-Gallardón Jiménez",party:"PP",dias:3068,active:false},{name:"Esperanza Aguirre y Gil de Biedma",party:"PP",dias:3233,active:false},{name:"Jaime Ignacio González González",party:"PP",dias:1002,active:false},{name:"María Cristina Cifuentes Cuencas",party:"PP",dias:1036,active:false},{name:"Ángel Garrido García",party:"PP",dias:326,active:false},{name:"Pedro Rollán Ojeda",party:"PP",dias:131,active:false},{name:"Isabel Natividad Díaz Ayuso",party:"PP",dias:2430,active:true}]},
  extremadura:{name:"Extremadura",flag:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Flag_of_Extremadura_with_coat_of_arms.svg/960px-Flag_of_Extremadura_with_coat_of_arms.svg.png",sub:"Junta de Extremadura · Presidente",presidentes:[{name:"Juan Carlos Rodríguez Ibarra",party:"PSOE",dias:8783,active:false},{name:"Guillermo Fernández Vara (1ª etapa)",party:"PSOE",dias:1471,active:false},{name:"José Antonio Monago Terraza",party:"PP",dias:1458,active:false},{name:"Guillermo Fernández Vara (2ª etapa)",party:"PSOE",dias:2936,active:false},{name:"María Guardiola Martín",party:"PP",dias:997,active:true}]},
  castillamancha:{name:"Castilla-La Mancha",flag:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Flag_of_Castilla-La_Mancha.svg/960px-Flag_of_Castilla-La_Mancha.svg.png",sub:"Junta de Comunidades de Castilla-La Mancha · Presidente",presidentes:[{name:"José Bono Martínez",party:"PSOE",dias:7621,active:false},{name:"José María Barreda Fontes",party:"PSOE",dias:2611,active:false},{name:"María Dolores de Cospedal García",party:"PP",dias:1474,active:false},{name:"Emiliano García-Page Sánchez",party:"PSOE",dias:3932,active:true}]},
  murcia:{name:"Murcia",flag:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_Region_of_Murcia.svg/960px-Flag_of_the_Region_of_Murcia.svg.png",sub:"Región de Murcia · Presidente",presidentes:[{name:"Andrés Hernández Ros",party:"PSOE",dias:581,active:false},{name:"Carlos Collado Mena",party:"PSOE",dias:3328,active:false},{name:"Mª Antonia Martínez García",party:"PSOE",dias:765,active:false},{name:"Ramón Luis Valcárcel Siso",party:"PP",dias:6854,active:false},{name:"Alberto Garre López",party:"PP",dias:450,active:false},{name:"Pedro Antonio Sánchez López",party:"PP",dias:642,active:false},{name:"Fernando López Miras",party:"PP",dias:3233,active:true}]},
  andalucia:{name:"Andalucía",flag:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Andalusia.svg/960px-Flag_of_Andalusia.svg.png",sub:"Junta de Andalucía · Presidente",presidentes:[{name:"Rafael Escuredo Rodríguez",party:"PSOE",dias:590,active:false},{name:"José Rodríguez de la Borbolla y Camoyán",party:"PSOE",dias:2296,active:false},{name:"Manuel Chaves González",party:"PSOE",dias:6831,active:false},{name:"José Antonio Griñán Martínez",party:"PSOE",dias:1599,active:false},{name:"Susana Díaz Pacheco",party:"PSOE",dias:1961,active:false},{name:"Juan Manuel Moreno Bonilla",party:"PP",dias:2638,active:true}]}
};

const MANDATO_PARTY_COLORS = {
  PP:'#009de0',PSOE:'#e63946','PSdeG-PSOE':'#e63946',PSC:'#e63946',
  CiU:'#c8963c','JxSÍ':'#1d3557',JxCat:'#1d3557','EAJ-PNV':'#2d9e6b',PNV:'#2d9e6b',
  ERC:'#f9c74f',PRC:'#6a4c93',PAR:'#e07b39',CCA:'#f4a261',CC:'#f4a261',
  FAC:'#457b9d',UPN:'#e76f51',GBai:'#2a9d8f',UCD:'#f4a261',CDS:'#5e548e',
  AP:'#1560bd',UPCA:'#8b5cf6',PFC:'#64748b',CIUDADANOS:'#ff6600'
};

function mandatoGetPartyColor(party){ return MANDATO_PARTY_COLORS[party]||'#6c757d'; }

let mandatoAutView='barras';

function mandatoSetView(v,btn){
    mandatoAutView=v;
    document.getElementById('mandato-aut-btn-barras').className='btn'+(v==='barras'?'':' btn-g');
    document.getElementById('mandato-aut-btn-podio').className='btn'+(v==='podio'?'':' btn-g');
    const key=document.getElementById('mandato-ccaa-sel').value;
    if(key) mandatoLoadCCAA(key);
}

function mandatoLoadCCAA(key){
    if(!key){
        document.getElementById('mandato-aut-placeholder').style.display='block';
        document.getElementById('mandato-aut-content').style.display='none';
        return;
    }
    const d=MANDATO_CCAA_DATA[key]; if(!d) return;
    document.getElementById('mandato-aut-placeholder').style.display='none';
    document.getElementById('mandato-aut-content').style.display='block';
    document.getElementById('mandato-aut-name').textContent=d.name;
    document.getElementById('mandato-aut-sub').textContent=d.sub;
    const flagEl=document.getElementById('mandato-aut-flag');
    flagEl.src=d.flag; flagEl.style.display='block';
    const maxDias=Math.max(...d.presidentes.map(p=>p.dias));
    // Find record holder name
    const recordHolder=d.presidentes.find(p=>p.dias===maxDias);
    const recordShortName=recordHolder?recordHolder.name.split(' ').slice(-1)[0]:'—';
    // Find active president
    const activo=d.presidentes.find(p=>p.active);
    // Sort to find position of active president
    const sorted=[...d.presidentes].sort((a,b)=>b.dias-a.dias);
    const posActivo=activo?sorted.findIndex(p=>p.name===activo.name)+1:null;
    const nextToPass=activo&&posActivo>1?sorted[posActivo-2]:null;
    const diasParaSuperar=nextToPass?Math.max(0,nextToPass.dias-activo.dias+1):null;
    // Update stats
    if(activo){
        document.getElementById('mandato-aut-stat-dias-actual').textContent=activo.dias.toLocaleString('es');
        document.getElementById('mandato-aut-stat-dias-actual-lbl').textContent='Días '+activo.name.split(' ')[activo.name.split(' ').length-1];
        document.getElementById('mandato-aut-stat-posicion').textContent='#'+posActivo;
        document.getElementById('mandato-aut-stat-para-superar').textContent=diasParaSuperar!==null?(diasParaSuperar>0?diasParaSuperar.toLocaleString('es'):'¡Récord!'):'—';
    } else {
        document.getElementById('mandato-aut-stat-dias-actual').textContent='—';
        document.getElementById('mandato-aut-stat-dias-actual-lbl').textContent='Días actual';
        document.getElementById('mandato-aut-stat-posicion').textContent='—';
        document.getElementById('mandato-aut-stat-para-superar').textContent='—';
    }
    document.getElementById('mandato-aut-stat-record').textContent=maxDias.toLocaleString('es');
    document.getElementById('mandato-aut-stat-record-lbl').textContent='Récord ('+recordShortName+')';
    // Milestone block
    const mstEl=document.getElementById('mandato-aut-milestone');
    if(activo&&nextToPass&&diasParaSuperar!==null){
        mstEl.style.display='flex';
        document.getElementById('mandato-aut-milestone-title').textContent=(diasParaSuperar>0?diasParaSuperar+' días para superar':'Ha superado')+' a '+nextToPass.name.split(' ').slice(0,3).join(' ');
        document.getElementById('mandato-aut-milestone-sub').textContent=nextToPass.name.split(' ').slice(0,3).join(' ')+': '+nextToPass.dias.toLocaleString('es')+' días';
        document.getElementById('mandato-aut-milestone-days').textContent=diasParaSuperar>0?diasParaSuperar+'d':'✓';
    } else { mstEl.style.display='none'; }
    document.getElementById('mandato-aut-view-barras').style.display=mandatoAutView==='barras'?'block':'none';
    document.getElementById('mandato-aut-view-podio').style.display=mandatoAutView==='podio'?'block':'none';
    if(mandatoAutView==='barras') mandatoAutRenderBarras(d.presidentes,maxDias);
    else mandatoAutRenderPodio(d.presidentes);
}

function mandatoAutCardHTML(p,i,maxDias){
    const pct=(p.dias/maxDias*100).toFixed(1);
    const color=mandatoGetPartyColor(p.party);
    return `<div style="display:flex;align-items:center;gap:12px;background:var(--bg4);border:1px solid ${p.active?'#22c55e':'var(--border)'};border-radius:9px;padding:12px 16px;margin-bottom:8px;position:relative;overflow:hidden;transition:transform .15s;" onmouseover="this.style.transform='translateX(3px)'" onmouseout="this.style.transform=''">
        ${p.active?'<div style="position:absolute;left:0;top:0;bottom:0;width:3px;background:#22c55e;"></div>':''}
        <div style="font-family:var(--mono);font-size:1.1rem;color:var(--text3);min-width:24px;text-align:center;">${i+1}</div>
        <div style="width:38px;height:38px;border-radius:50%;background:var(--bg2);border:2px solid var(--border);display:flex;align-items:center;justify-content:center;font-size:.9rem;flex-shrink:0;">👤</div>
        <div style="flex:1;min-width:0;">
            <div style="font-weight:600;font-size:.88rem;">${p.name}${p.active?' <span style="color:#22c55e;font-size:.65rem;font-weight:700;">● ACTIVO</span>':''}</div>
            <div style="margin-top:3px;"><span style="font-size:.62rem;font-weight:700;padding:2px 7px;border-radius:10px;background:${color};color:#fff;">${p.party}</span></div>
        </div>
        <div style="flex:2;min-width:0;">
            <div style="background:var(--bg2);border-radius:4px;height:10px;overflow:hidden;margin-bottom:3px;"><div style="height:100%;border-radius:4px;width:${pct}%;background:linear-gradient(90deg,${color},${color}99);transition:width .6s ease;"></div></div>
            <div style="font-size:.72rem;color:var(--text3);text-align:right;"><span style="font-family:var(--mono);font-size:.95rem;color:var(--text);">${p.dias.toLocaleString('es')}</span> días</div>
        </div>
    </div>`;
}

function mandatoAutRenderBarras(presidentes,maxDias){
    document.getElementById('mandato-aut-view-barras').innerHTML=presidentes.map((p,i)=>mandatoAutCardHTML(p,i,maxDias)).join('');
}

function mandatoAutRenderPodio(presidentes){
    const sorted=[...presidentes].sort((a,b)=>b.dias-a.dias);
    const top3=sorted.slice(0,3);
    const podioOrder=[top3[1],top3[0],top3[2]].filter(Boolean);
    const ranks=[2,1,3];
    const medals={1:'🥇',2:'🥈',3:'🥉'};
    const heights={1:'90px',2:'65px',3:'48px'};
    const podioHTML=podioOrder.map((p,i)=>{
        const r=ranks[i]; const color=mandatoGetPartyColor(p.party);
        return `<div style="display:flex;flex-direction:column;align-items:center;position:relative;">
            ${p.active?'<div style="position:absolute;top:-4px;right:-4px;background:#22c55e;border:2px solid var(--bg);border-radius:50%;width:16px;height:16px;display:flex;align-items:center;justify-content:center;font-size:.5rem;color:#fff;font-weight:700;">●</div>':''}
            <div style="width:${r===1?'70px':'58px'};height:${r===1?'70px':'58px'};border-radius:50%;border:3px solid ${r===1?'gold':r===2?'silver':'#cd7f32'};background:var(--bg4);display:flex;align-items:center;justify-content:center;font-size:1.4rem;margin-bottom:7px;">👤</div>
            <div style="font-size:.72rem;font-weight:600;text-align:center;max-width:110px;line-height:1.2;margin-bottom:3px;">${p.name}</div>
            <div style="font-family:var(--mono);font-size:.95rem;color:var(--accent);margin-bottom:3px;">${p.dias.toLocaleString('es')}d</div>
            <span style="font-size:.6rem;font-weight:700;padding:2px 6px;border-radius:10px;background:${color};color:#fff;margin-bottom:7px;">${p.party}</span>
            <div style="width:110px;height:${heights[r]};border-radius:6px 6px 0 0;background:linear-gradient(180deg,${r===1?'#ffd700,#b8860b':r===2?'#c0c0c0,#707070':'#cd7f32,#8b4513'});display:flex;align-items:center;justify-content:center;font-size:1.8rem;">${medals[r]}</div>
        </div>`;
    }).join('');
    const maxD=sorted[0].dias;
    const restHTML=sorted.slice(3).map((p,i)=>mandatoAutCardHTML(p,i+3,maxD)).join('');
    document.getElementById('mandato-aut-view-podio').innerHTML=`
        <div style="display:flex;align-items:flex-end;gap:8px;justify-content:center;padding:16px 0 24px;flex-wrap:wrap;">${podioHTML}</div>
        ${restHTML?'<div style="font-size:11px;font-weight:700;color:var(--text3);text-transform:uppercase;letter-spacing:2px;margin:14px 0 8px;">Clasificación completa</div>'+restHTML:''}`;
}

// ── GLOBAL AUTONÓMICO ──
const MANDATO_ALL_PRES = [
  {name:"Gerardo Fernández Albor",party:"AP",dias:2078,active:false,ccaa:"Galicia"},
  {name:"Fernando Ignacio González Laxe",party:"PSdeG-PSOE",dias:861,active:false,ccaa:"Galicia"},
  {name:"Manuel Fraga Iribarne",party:"PP",dias:5657,active:false,ccaa:"Galicia"},
  {name:"Emilio Pérez Touriño",party:"PSdeG-PSOE",dias:1356,active:false,ccaa:"Galicia"},
  {name:"Alberto Núñez Feijóo",party:"PP",dias:4775,active:false,ccaa:"Galicia"},
  {name:"Alfonso Rueda Valenzuela",party:"PP",dias:1426,active:true,ccaa:"Galicia"},
  {name:"Pedro de Silva Cienfuegos-Jovellanos",party:"PSOE",dias:2943,active:false,ccaa:"Asturias"},
  {name:"Juan Luis Rodríguez-Vigil Rubio",party:"PSOE",dias:714,active:false,ccaa:"Asturias"},
  {name:"Antonio Ramón Trevín Lombán",party:"PSOE",dias:755,active:false,ccaa:"Asturias"},
  {name:"Sergio Marqués Fernández",party:"PP",dias:1467,active:false,ccaa:"Asturias"},
  {name:"Vicente Álvarez Areces",party:"PSOE",dias:4378,active:false,ccaa:"Asturias"},
  {name:"Francisco Álvarez-Cascos",party:"FAC",dias:316,active:false,ccaa:"Asturias"},
  {name:"Javier Fernández Fernández",party:"PSOE",dias:2612,active:false,ccaa:"Asturias"},
  {name:"Adrián Barbón Rodríguez",party:"PSOE",dias:2455,active:true,ccaa:"Asturias"},
  {name:"José Antonio Rodríguez Martínez",party:"AP",dias:719,active:false,ccaa:"Cantabria"},
  {name:"Ángel Díaz de Entresotos Mier",party:"AP",dias:1186,active:false,ccaa:"Cantabria"},
  {name:"Juan Hormaechea Cazón (1ª)",party:"AP",dias:1231,active:false,ccaa:"Cantabria"},
  {name:"Jaime Blanco García",party:"PSOE",dias:208,active:false,ccaa:"Cantabria"},
  {name:"Juan Hormaechea Cazón (2ª)",party:"UPCA",dias:1464,active:false,ccaa:"Cantabria"},
  {name:"José Joaquín Martínez Sieso",party:"PP",dias:2906,active:false,ccaa:"Cantabria"},
  {name:"Miguel Ángel Revilla Roiz (1ª)",party:"PRC",dias:2918,active:false,ccaa:"Cantabria"},
  {name:"Juan Ignacio Diego Palacios",party:"PP",dias:1472,active:false,ccaa:"Cantabria"},
  {name:"Miguel Ángel Revilla Roiz (2ª)",party:"PRC",dias:2921,active:false,ccaa:"Cantabria"},
  {name:"María José Sanz de Buruaga",party:"PP",dias:1009,active:true,ccaa:"Cantabria"},
  {name:"Carlos Garaikoetxea Urriza",party:"PNV",dias:1754,active:false,ccaa:"País Vasco"},
  {name:"José Antonio Ardanza Garro",party:"PNV",dias:5090,active:false,ccaa:"País Vasco"},
  {name:"Juan José Ibarretxe Markuartu",party:"EAJ-PNV",dias:3779,active:false,ccaa:"País Vasco"},
  {name:"Francisco Javier López Álvarez",party:"PSOE",dias:1319,active:false,ccaa:"País Vasco"},
  {name:"Iñigo Urkullu Rentería",party:"PNV",dias:4208,active:false,ccaa:"País Vasco"},
  {name:"Imanol Pradales Gil",party:"PNV",dias:656,active:true,ccaa:"País Vasco"},
  {name:"Jaime Ignacio del Burgo",party:"UCD",dias:376,active:false,ccaa:"Navarra"},
  {name:"Juan Manuel Arza Muñuri",party:"UCD",dias:1357,active:false,ccaa:"Navarra"},
  {name:"Gabriel Urralburu Tainta",party:"PSOE",dias:2701,active:false,ccaa:"Navarra"},
  {name:"Juan Cruz Alli Aranguren",party:"UPN",dias:1402,active:false,ccaa:"Navarra"},
  {name:"Javier Otano Cid",party:"PSOE",dias:329,active:false,ccaa:"Navarra"},
  {name:"Miguel Sanz Sesma",party:"UPN",dias:5400,active:false,ccaa:"Navarra"},
  {name:"Yolanda Barcina Angulo",party:"UPN",dias:1483,active:false,ccaa:"Navarra"},
  {name:"Miren Uxue Barkos Berruezo",party:"GBai",dias:1477,active:false,ccaa:"Navarra"},
  {name:"María Victoria Chivite Navascués",party:"PSOE",dias:2438,active:true,ccaa:"Navarra"},
  {name:"Santiago Marraco Solana",party:"PSOE",dias:1516,active:false,ccaa:"Aragón"},
  {name:"Hipólito Gómez de las Roces",party:"PAR",dias:1440,active:false,ccaa:"Aragón"},
  {name:"Emilio Eiroa García",party:"PAR",dias:799,active:false,ccaa:"Aragón"},
  {name:"José Marco Berges",party:"PSOE",dias:489,active:false,ccaa:"Aragón"},
  {name:"Ramón Tejedor Sanz",party:"PSOE",dias:175,active:false,ccaa:"Aragón"},
  {name:"Santiago Lanzuela Marina",party:"PP",dias:1484,active:false,ccaa:"Aragón"},
  {name:"Marcelino Iglesias Ricou",party:"PSOE",dias:4365,active:false,ccaa:"Aragón"},
  {name:"Luisa Fernanda Rudi Úbeda",party:"PP",dias:1453,active:false,ccaa:"Aragón"},
  {name:"Francisco Javier Lambán Montañés",party:"PSOE",dias:2960,active:false,ccaa:"Aragón"},
  {name:"Jorge Antonio Azcón Navarro",party:"PP",dias:972,active:true,ccaa:"Aragón"},
  {name:"Jordi Pujol i Soley",party:"CiU",dias:8597,active:false,ccaa:"Cataluña"},
  {name:"Pascual Maragall i Mira",party:"PSOE",dias:1075,active:false,ccaa:"Cataluña"},
  {name:"José Montilla Aguilera",party:"PSOE",dias:1491,active:false,ccaa:"Cataluña"},
  {name:"Artur Mas i Gavarró",party:"CiU",dias:1848,active:false,ccaa:"Cataluña"},
  {name:"Carles Puigdemont i Casamajó",party:"JxSÍ",dias:656,active:false,ccaa:"Cataluña"},
  {name:"Soraya Sáenz de Santamaría (interina)",party:"PP",dias:202,active:false,ccaa:"Cataluña"},
  {name:"Joaquim Torra i Plá",party:"JxCat",dias:837,active:false,ccaa:"Cataluña"},
  {name:"Pere Aragonès i Garcia",party:"ERC",dias:1145,active:false,ccaa:"Cataluña"},
  {name:"Salvador Illa Roca",party:"PSC",dias:607,active:true,ccaa:"Cataluña"},
  {name:"Gabriel Cañellas Fons",party:"AP",dias:4437,active:false,ccaa:"Baleares"},
  {name:"Cristòfol Soler i Cladera",party:"PP",dias:322,active:false,ccaa:"Baleares"},
  {name:"Jaume Matas i Palou (1ª)",party:"PP",dias:1135,active:false,ccaa:"Baleares"},
  {name:"Francesc Antich i Oliver (1ª)",party:"PSOE",dias:1432,active:false,ccaa:"Baleares"},
  {name:"Jaume Matas i Palou (2ª)",party:"PP",dias:1471,active:false,ccaa:"Baleares"},
  {name:"Francesc Antich i Oliver (2ª)",party:"PSOE",dias:1444,active:false,ccaa:"Baleares"},
  {name:"José Ramón Bauzá Díaz",party:"PP",dias:1476,active:false,ccaa:"Baleares"},
  {name:"Francesca Lluch Armengol i Socias",party:"PSOE",dias:2910,active:false,ccaa:"Baleares"},
  {name:"Margarita Prohens Rigo",party:"PP",dias:1007,active:true,ccaa:"Baleares"},
  {name:"Jerónimo Saavedra Acevedo (1ª)",party:"PSOE",dias:1664,active:false,ccaa:"Canarias"},
  {name:"Fernando Fernández Martín",party:"CDS",dias:520,active:false,ccaa:"Canarias"},
  {name:"Lorenzo Olarte Cullen",party:"CDS",dias:940,active:false,ccaa:"Canarias"},
  {name:"Jerónimo Saavedra Acevedo (2ª)",party:"PSOE",dias:622,active:false,ccaa:"Canarias"},
  {name:"Manuel Hermoso Rojas",party:"CCA",dias:2294,active:false,ccaa:"Canarias"},
  {name:"Román Rodríguez Rodríguez",party:"CCA",dias:1453,active:false,ccaa:"Canarias"},
  {name:"Adán Martín Menis",party:"CCA",dias:1467,active:false,ccaa:"Canarias"},
  {name:"Paulino Rivero Baute",party:"CCA",dias:2919,active:false,ccaa:"Canarias"},
  {name:"Fernando Clavijo Batlle (1ª)",party:"CCA",dias:1469,active:false,ccaa:"Canarias"},
  {name:"Ángel Víctor Torres Pérez",party:"PSOE",dias:1460,active:false,ccaa:"Canarias"},
  {name:"Fernando Clavijo Batlle (2ª)",party:"CC",dias:1000,active:true,ccaa:"Canarias"},
  {name:"Basilio Fernández López",party:"PFC",dias:404,active:false,ccaa:"Ceuta"},
  {name:"Jesus Cayetano Fortes Ramos",party:"PP",dias:1077,active:false,ccaa:"Ceuta"},
  {name:"Antonio Sampietro Casarramona",party:"PP",dias:534,active:false,ccaa:"Ceuta"},
  {name:"Juan Jesús Vivas Lara",party:"PP",dias:9193,active:true,ccaa:"Ceuta"},
  {name:"Ignacio Velázquez Rivera",party:"PP",dias:1086,active:false,ccaa:"Melilla"},
  {name:"Enrique Palacios Hernández",party:"PP",dias:490,active:false,ccaa:"Melilla"},
  {name:"Mustafá Aberchán",party:"PSOE",dias:381,active:false,ccaa:"Melilla"},
  {name:"Juan José Imbroda (1ª)",party:"PP",dias:6905,active:false,ccaa:"Melilla"},
  {name:"Eduardo de Castro González",party:"CIUDADANOS",dias:1484,active:false,ccaa:"Melilla"},
  {name:"Juan José Imbroda (2ª)",party:"PP",dias:1007,active:true,ccaa:"Melilla"},
  {name:"Joan Lerma Blasco",party:"PSOE",dias:4604,active:false,ccaa:"C. Valenciana"},
  {name:"Eduardo Zaplana Hernández-Soro",party:"PP",dias:2564,active:false,ccaa:"C. Valenciana"},
  {name:"José Luis Olivas Martínez",party:"PP",dias:332,active:false,ccaa:"C. Valenciana"},
  {name:"Francisco Enrique Camps Ortiz",party:"PP",dias:2961,active:false,ccaa:"C. Valenciana"},
  {name:"Alberto Fabra Part",party:"PP",dias:1430,active:false,ccaa:"C. Valenciana"},
  {name:"Ximo Puig i Ferrer",party:"PSOE",dias:2942,active:false,ccaa:"C. Valenciana"},
  {name:"Carlos Mazón Guixot",party:"PP",dias:870,active:false,ccaa:"C. Valenciana"},
  {name:"Juan Francisco Pérez Llorca",party:"PP",dias:128,active:true,ccaa:"C. Valenciana"},
  {name:"José María de Miguel Gil",party:"PSOE",dias:1515,active:false,ccaa:"La Rioja"},
  {name:"Joaquín Espert Pérez-Caballero",party:"AP",dias:900,active:false,ccaa:"La Rioja"},
  {name:"José Ignacio Pérez Sáenz",party:"PSOE",dias:2003,active:false,ccaa:"La Rioja"},
  {name:"Pedro Sanz Alonso",party:"PP",dias:7306,active:false,ccaa:"La Rioja"},
  {name:"José Ignacio Ceniceros González",party:"PP",dias:1514,active:false,ccaa:"La Rioja"},
  {name:"Concepción Andreu Rodríguez",party:"PSOE",dias:1401,active:false,ccaa:"La Rioja"},
  {name:"Gonzalo Capellán de Miguel",party:"PP",dias:1014,active:true,ccaa:"La Rioja"},
  {name:"Demetrio Madrid López",party:"PSOE",dias:1271,active:false,ccaa:"Castilla y León"},
  {name:"José Constantino Nalda García",party:"PSOE",dias:247,active:false,ccaa:"Castilla y León"},
  {name:"José María Aznar López",party:"AP",dias:786,active:false,ccaa:"Castilla y León"},
  {name:"Jesús María Posada Moreno",party:"PP",dias:659,active:false,ccaa:"Castilla y León"},
  {name:"Juan José Lucas Giménez",party:"PP",dias:3524,active:false,ccaa:"Castilla y León"},
  {name:"Juan Vicente Herrera Campo",party:"PP",dias:6690,active:false,ccaa:"Castilla y León"},
  {name:"Alfonso Fernando Fernández Mañueco",party:"PP",dias:2463,active:true,ccaa:"Castilla y León"},
  {name:"Joaquín Leguina Herrán",party:"PSOE",dias:4399,active:false,ccaa:"Madrid"},
  {name:"Alberto Ruiz-Gallardón Jiménez",party:"PP",dias:3068,active:false,ccaa:"Madrid"},
  {name:"Esperanza Aguirre y Gil de Biedma",party:"PP",dias:3233,active:false,ccaa:"Madrid"},
  {name:"Jaime Ignacio González González",party:"PP",dias:1002,active:false,ccaa:"Madrid"},
  {name:"María Cristina Cifuentes Cuencas",party:"PP",dias:1036,active:false,ccaa:"Madrid"},
  {name:"Ángel Garrido García",party:"PP",dias:326,active:false,ccaa:"Madrid"},
  {name:"Pedro Rollán Ojeda",party:"PP",dias:131,active:false,ccaa:"Madrid"},
  {name:"Isabel Natividad Díaz Ayuso",party:"PP",dias:2430,active:true,ccaa:"Madrid"},
  {name:"Juan Carlos Rodríguez Ibarra",party:"PSOE",dias:8783,active:false,ccaa:"Extremadura"},
  {name:"Guillermo Fernández Vara (1ª)",party:"PSOE",dias:1471,active:false,ccaa:"Extremadura"},
  {name:"José Antonio Monago Terraza",party:"PP",dias:1458,active:false,ccaa:"Extremadura"},
  {name:"Guillermo Fernández Vara (2ª)",party:"PSOE",dias:2936,active:false,ccaa:"Extremadura"},
  {name:"María Guardiola Martín",party:"PP",dias:997,active:true,ccaa:"Extremadura"},
  {name:"José Bono Martínez",party:"PSOE",dias:7621,active:false,ccaa:"C.-La Mancha"},
  {name:"José María Barreda Fontes",party:"PSOE",dias:2611,active:false,ccaa:"C.-La Mancha"},
  {name:"María Dolores de Cospedal García",party:"PP",dias:1474,active:false,ccaa:"C.-La Mancha"},
  {name:"Emiliano García-Page Sánchez",party:"PSOE",dias:3932,active:true,ccaa:"C.-La Mancha"},
  {name:"Andrés Hernández Ros",party:"PSOE",dias:581,active:false,ccaa:"Murcia"},
  {name:"Carlos Collado Mena",party:"PSOE",dias:3328,active:false,ccaa:"Murcia"},
  {name:"Mª Antonia Martínez García",party:"PSOE",dias:765,active:false,ccaa:"Murcia"},
  {name:"Ramón Luis Valcárcel Siso",party:"PP",dias:6854,active:false,ccaa:"Murcia"},
  {name:"Alberto Garre López",party:"PP",dias:450,active:false,ccaa:"Murcia"},
  {name:"Pedro Antonio Sánchez López",party:"PP",dias:642,active:false,ccaa:"Murcia"},
  {name:"Fernando López Miras",party:"PP",dias:3233,active:true,ccaa:"Murcia"},
  {name:"Rafael Escuredo Rodríguez",party:"PSOE",dias:590,active:false,ccaa:"Andalucía"},
  {name:"José Rodríguez de la Borbolla y Camoyán",party:"PSOE",dias:2296,active:false,ccaa:"Andalucía"},
  {name:"Manuel Chaves González",party:"PSOE",dias:6831,active:false,ccaa:"Andalucía"},
  {name:"José Antonio Griñán Martínez",party:"PSOE",dias:1599,active:false,ccaa:"Andalucía"},
  {name:"Susana Díaz Pacheco",party:"PSOE",dias:1961,active:false,ccaa:"Andalucía"},
  {name:"Juan Manuel Moreno Bonilla",party:"PP",dias:2638,active:true,ccaa:"Andalucía"}
];

// ── FECHAS DE INICIO — para cálculo en tiempo real ──
// Calculadas a 8-abril-2026. El sistema las usa para actualizar días automáticamente cada día.
const MANDATO_ACTIVE_START = {
  "Alfonso Rueda Valenzuela":          "2022-05-13",
  "Adrián Barbón Rodríguez":           "2019-07-19",
  "María José Sanz de Buruaga":        "2023-07-04",
  "Imanol Pradales Gil":               "2024-06-21",
  "María Victoria Chivite Navascués":  "2019-08-05",
  "Jorge Antonio Azcón Navarro":       "2023-08-10",
  "Salvador Illa Roca":                "2024-08-09",
  "Margarita Prohens Rigo":            "2023-07-06",
  "Fernando Clavijo Batlle (2ª etapa)":"2023-07-13",
  "Juan Jesús Vivas Lara":             "2001-02-05",
  "Juan José Imbroda (2ª etapa)":      "2023-07-06",
  "Juan Francisco Pérez Llorca":       "2025-12-01",
  "Gonzalo Capellán de Miguel":        "2023-06-29",
  "Alfonso Fernando Fernández Mañueco":"2019-07-11",
  "Isabel Natividad Díaz Ayuso":       "2019-08-13",
  "María Guardiola Martín":            "2023-07-16",
  "Emiliano García-Page Sánchez":      "2015-07-03",
  "Fernando López Miras":              "2017-06-01",
  "Juan Manuel Moreno Bonilla":        "2019-01-17",
};

// Función para obtener días actuales de un presidente activo
function mandatoGetDiasActivos(name) {
    const startStr = MANDATO_ACTIVE_START[name];
    if (!startStr) return null;
    const start = new Date(startStr);
    const today = new Date();
    today.setHours(0,0,0,0);
    start.setHours(0,0,0,0);
    return Math.floor((today - start) / 86400000);
}

// Aplicar días actualizados a CCAA_DATA y ALL_PRES al cargar
(function actualizarDiasActivos() {
    // Actualizar MANDATO_CCAA_DATA
    Object.values(MANDATO_CCAA_DATA).forEach(ccaa => {
        ccaa.presidentes.forEach(p => {
            if (p.active) {
                const d = mandatoGetDiasActivos(p.name);
                if (d !== null) p.dias = d;
            }
        });
    });
    // Actualizar MANDATO_ALL_PRES
    MANDATO_ALL_PRES.forEach(p => {
        if (p.active) {
            const d = mandatoGetDiasActivos(p.name);
            if (d !== null) p.dias = d;
        }
    });
})();

// Re-renderizar mandatómetro autonómico cada día (comprobación cada hora)
setInterval(() => {
    const today = new Date().toDateString();
    if (mandatoAutRefreshDate !== today) {
        mandatoAutRefreshDate = today;
        actualizarDiasActivosYrenderizar();
    }
}, 3600000); // cada hora
let mandatoAutRefreshDate = new Date().toDateString();

function actualizarDiasActivosYrenderizar() {
    // Recalcular días
    Object.values(MANDATO_CCAA_DATA).forEach(ccaa => {
        ccaa.presidentes.forEach(p => {
            if (p.active) { const d = mandatoGetDiasActivos(p.name); if (d!==null) p.dias = d; }
        });
    });
    MANDATO_ALL_PRES.forEach(p => {
        if (p.active) { const d = mandatoGetDiasActivos(p.name); if (d!==null) p.dias = d; }
    });
    // Si la vista activa es mandatómetro, rerenderizar
    const panel = document.getElementById('panel-mandatometro');
    if (panel && panel.classList.contains('active')) {
        const subGlob = document.getElementById('mandato-sub-global-autonomico');
        const subAut  = document.getElementById('mandato-sub-autonomico');
        if (subGlob && subGlob.style.display !== 'none') mandatoGlobRender();
        if (subAut  && subAut.style.display  !== 'none') {
            const sel = document.getElementById('mandato-ccaa-sel');
            if (sel && sel.value) mandatoLoadCCAA(sel.value);
        }
    }
}

let mandatoGlobFilter='all', mandatoGlobSort_='dias-desc', mandatoGlobView_='barras', mandatoGlobInited=false;

// Grupos de partidos fusionados para el filtro global autonómico
const MANDATO_GLOB_PARTY_GROUPS = [
    { label:'AP/PP',          parties:['AP','PP'],                    color:'#009de0' },
    { label:'PSC/PSOE/PSdeG-PSOE', parties:['PSOE','PSC','PSdeG-PSOE'], color:'#e63946' },
    { label:'CC/CCA',         parties:['CC','CCA'],                   color:'#f4a261' },
    { label:'CIU/JxCat/JxSÍ',parties:['CiU','JxCat','JxSÍ'],        color:'#c8963c' },
    { label:'EAJ-PNV/PNV',   parties:['EAJ-PNV','PNV'],              color:'#2d9e6b' },
    { label:'ERC',            parties:['ERC'],                        color:'#f9c74f' },
    { label:'PRC',            parties:['PRC'],                        color:'#6a4c93' },
    { label:'PAR',            parties:['PAR'],                        color:'#e07b39' },
    { label:'FAC',            parties:['FAC'],                        color:'#457b9d' },
    { label:'UPN',            parties:['UPN'],                        color:'#e76f51' },
    { label:'GBai',           parties:['GBai'],                       color:'#2a9d8f' },
    { label:'UCD',            parties:['UCD'],                        color:'#f4a261' },
    { label:'CDS',            parties:['CDS'],                        color:'#5e548e' },
    { label:'UPCA',           parties:['UPCA'],                       color:'#8b5cf6' },
    { label:'PFC',            parties:['PFC'],                        color:'#64748b' },
    { label:'CIUDADANOS',     parties:['CIUDADANOS'],                 color:'#ff6600' },
];

function mandatoGlobInit(){
    if(mandatoGlobInited) return; mandatoGlobInited=true;
    // stats
    const sortedAll=[...MANDATO_ALL_PRES].sort((a,b)=>b.dias-a.dias);
    const maxP=sortedAll[0];
    // Find longest-serving active president
    const activesSorted=[...MANDATO_ALL_PRES].filter(p=>p.active).sort((a,b)=>b.dias-a.dias);
    const topActive=activesSorted[0];
    // Position of top active among ALL (sorted)
    const posTopActive=topActive?sortedAll.findIndex(p=>p.name===topActive.name)+1:null;
    const nextToPassGlob=topActive&&posTopActive>1?sortedAll[posTopActive-2]:null;
    const diasParaSuperarGlob=nextToPassGlob&&topActive?Math.max(0,nextToPassGlob.dias-topActive.dias+1):null;
    const recordShortName=maxP.name.split(' ').slice(-1)[0];
    document.getElementById('mandato-glob-stats').innerHTML=`
        <div class="sc"><div class="sv" style="color:#e53935;">${topActive?topActive.dias.toLocaleString('es'):'—'}</div><div class="sl">Días ${topActive?topActive.name.split(' ').slice(-1)[0]:'actual'}</div></div>
        <div class="sc"><div class="sv" style="color:var(--gold);">${posTopActive?'#'+posTopActive:'—'}</div><div class="sl">Posición actual</div></div>
        <div class="sc"><div class="sv" style="color:var(--accent);">${diasParaSuperarGlob!==null?(diasParaSuperarGlob>0?diasParaSuperarGlob.toLocaleString('es'):'¡Récord!'):topActive?'¡Récord!':'—'}</div><div class="sl">Días para superar</div></div>
        <div class="sc"><div class="sv" style="color:var(--text2);">${maxP.dias.toLocaleString('es')}</div><div class="sl">Récord (${recordShortName})</div></div>`;
    // Milestone block
    let milestoneHTML='';
    if(topActive&&nextToPassGlob&&diasParaSuperarGlob!==null){
        const diffText=diasParaSuperarGlob>0?diasParaSuperarGlob.toLocaleString('es')+' días para superar':'Ha superado';
        milestoneHTML=`<div class="nmile card-sm" style="margin-bottom:14px;">
            <div class="micon">🏁</div>
            <div class="minfo">
                <div class="mtitle">${diffText} a ${nextToPassGlob.name.split(' ').slice(0,3).join(' ')} <span style="font-size:10px;color:var(--text3);">(${nextToPassGlob.ccaa})</span></div>
                <div class="msub">${nextToPassGlob.name.split(' ').slice(0,3).join(' ')}: ${nextToPassGlob.dias.toLocaleString('es')} días</div>
            </div>
            <div class="mdays">${diasParaSuperarGlob>0?diasParaSuperarGlob+'d':'✓'}</div>
        </div>`;}
    // Insert milestone before filter bar
    const filterBar=document.querySelector('#mandato-sub-global-autonomico > div:nth-child(2)');
    if(filterBar&&milestoneHTML){
        const mDiv=document.createElement('div');
        mDiv.innerHTML=milestoneHTML;
        filterBar.parentNode.insertBefore(mDiv.firstElementChild,filterBar);
    }
    // party filters — usar grupos fusionados
    const wrap=document.getElementById('mandato-glob-party-filters');
    wrap.innerHTML='<button class="btn" style="font-size:10px;padding:3px 10px;border-radius:14px;" onclick="mandatoGlobFilterGroup(\'all\',this)">Todos</button>';
    MANDATO_GLOB_PARTY_GROUPS.forEach(g=>{
        // Solo mostrar si algún presidente pertenece a ese grupo
        const hasData = MANDATO_ALL_PRES.some(p=>g.parties.includes(p.party));
        if(!hasData) return;
        const btn=document.createElement('button');
        btn.className='btn btn-g'; btn.style.cssText=`font-size:10px;padding:3px 10px;border-radius:14px;`;
        btn.textContent=g.label; btn.onclick=()=>mandatoGlobFilterGroup(g.label,btn);
        wrap.appendChild(btn);
    });
    mandatoGlobRender();
}

function mandatoGlobFilterGroup(label,btn){
    mandatoGlobFilter=label;
    document.querySelectorAll('#mandato-glob-party-filters button').forEach(b=>{b.className='btn btn-g';b.style.cssText='font-size:10px;padding:3px 10px;border-radius:14px;';});
    btn.className='btn'; btn.style.cssText='font-size:10px;padding:3px 10px;border-radius:14px;';
    mandatoGlobRender();
}

function mandatoGlobFilterParty(party,btn){ mandatoGlobFilterGroup(party,btn); }

function mandatoGlobSort(val){ mandatoGlobSort_=val; mandatoGlobRender(); }

function mandatoGlobSetView(v,btn){
    mandatoGlobView_=v;
    document.getElementById('mandato-glob-btn-barras').className='btn'+(v==='barras'?'':' btn-g');
    document.getElementById('mandato-glob-btn-podio').className='btn'+(v==='podio'?'':' btn-g');
    document.getElementById('mandato-glob-view-barras').style.display=v==='barras'?'block':'none';
    document.getElementById('mandato-glob-view-podio').style.display=v==='podio'?'block':'none';
    mandatoGlobRender();
}

function mandatoGlobGetFiltered(){
    let data=[...MANDATO_ALL_PRES];
    if(mandatoGlobFilter!=='all'){
        const group = MANDATO_GLOB_PARTY_GROUPS.find(g=>g.label===mandatoGlobFilter);
        if(group) data=data.filter(p=>group.parties.includes(p.party));
        else data=data.filter(p=>p.party===mandatoGlobFilter);
    }
    if(mandatoGlobSort_==='dias-desc') data.sort((a,b)=>b.dias-a.dias);
    else if(mandatoGlobSort_==='dias-asc') data.sort((a,b)=>a.dias-b.dias);
    else if(mandatoGlobSort_==='nombre') data.sort((a,b)=>a.name.localeCompare(b.name));
    else if(mandatoGlobSort_==='ccaa') data.sort((a,b)=>a.ccaa.localeCompare(b.ccaa)||b.dias-a.dias);
    return data;
}

function mandatoGlobRender(){
    const data=mandatoGlobGetFiltered();
    const maxDias=data.length?Math.max(...data.map(p=>p.dias)):1;
    const rc=document.getElementById('mandato-glob-results-count');
    rc.innerHTML=`Mostrando <span style="color:var(--accent);font-weight:700;">${data.length}</span> presidente${data.length!==1?'s':''} ${mandatoGlobFilter!=='all'?'de <b>'+mandatoGlobFilter+'</b>':''}`;
    if(mandatoGlobView_==='barras'){
        document.getElementById('mandato-glob-view-barras').innerHTML=data.map((p,i)=>{
            const pct=(p.dias/maxDias*100).toFixed(1);
            const color=mandatoGetPartyColor(p.party);
            return `<div style="display:flex;align-items:center;gap:12px;background:var(--bg4);border:1px solid ${p.active?'#22c55e':'var(--border)'};border-radius:9px;padding:11px 15px;margin-bottom:7px;position:relative;overflow:hidden;" onmouseover="this.style.transform='translateX(3px)'" onmouseout="this.style.transform=''">
                ${p.active?'<div style="position:absolute;left:0;top:0;bottom:0;width:3px;background:#22c55e;"></div>':''}
                <div style="font-family:var(--mono);font-size:1rem;color:var(--text3);min-width:22px;text-align:center;">${i+1}</div>
                <div style="width:36px;height:36px;border-radius:50%;background:var(--bg2);border:2px solid var(--border);display:flex;align-items:center;justify-content:center;font-size:.85rem;flex-shrink:0;">👤</div>
                <div style="min-width:180px;max-width:220px;">
                    <div style="font-weight:600;font-size:.85rem;line-height:1.2;">${p.name}${p.active?' <span style="color:#22c55e;font-size:.6rem;">● ACTIVO</span>':''}</div>
                    <div style="font-size:.68rem;color:var(--text3);margin-top:1px;">🏛 ${p.ccaa}</div>
                    <span style="font-size:.6rem;font-weight:700;padding:1px 6px;border-radius:10px;background:${color};color:#fff;display:inline-block;margin-top:3px;">${p.party}</span>
                </div>
                <div style="flex:1;min-width:0;">
                    <div style="background:var(--bg2);border-radius:4px;height:9px;overflow:hidden;margin-bottom:3px;"><div style="height:100%;border-radius:4px;width:${pct}%;background:linear-gradient(90deg,${color},${color}88);transition:width .7s ease;"></div></div>
                    <div style="font-size:.7rem;color:var(--text3);text-align:right;"><span style="font-family:var(--mono);font-size:.9rem;color:var(--text);">${p.dias.toLocaleString('es')}</span> días</div>
                </div>
            </div>`;
        }).join('');
    } else {
        const sorted=[...data].sort((a,b)=>b.dias-a.dias);
        const top3=sorted.slice(0,3);
        const podioOrder=top3.length>=2?[top3[1],top3[0],top3[2]].filter(Boolean):top3;
        const ranks=top3.length>=2?[2,1,3]:[1];
        const medals={1:'🥇',2:'🥈',3:'🥉'};
        const podioHTML=podioOrder.map((p,i)=>{
            const r=ranks[i]; const color=mandatoGetPartyColor(p.party);
            const heights={1:'90px',2:'65px',3:'48px'};
            return `<div style="display:flex;flex-direction:column;align-items:center;position:relative;">
                ${p.active?'<div style="position:absolute;top:-4px;right:-4px;background:#22c55e;border:2px solid var(--bg);border-radius:50%;width:16px;height:16px;display:flex;align-items:center;justify-content:center;font-size:.5rem;color:#fff;">✓</div>':''}
                <div style="width:${r===1?'68px':'56px'};height:${r===1?'68px':'56px'};border-radius:50%;border:3px solid ${r===1?'gold':r===2?'silver':'#cd7f32'};background:var(--bg4);display:flex;align-items:center;justify-content:center;font-size:1.3rem;margin-bottom:6px;">👤</div>
                <div style="font-size:.7rem;font-weight:600;text-align:center;max-width:110px;line-height:1.2;margin-bottom:2px;">${p.name}</div>
                <div style="font-size:.62rem;color:var(--text3);margin-bottom:2px;">${p.ccaa}</div>
                <div style="font-family:var(--mono);font-size:.9rem;color:var(--accent);margin-bottom:3px;">${p.dias.toLocaleString('es')} días</div>
                <span style="font-size:.58rem;font-weight:700;padding:1px 6px;border-radius:10px;background:${color};color:#fff;margin-bottom:6px;">${p.party}</span>
                <div style="width:110px;height:${heights[r]};border-radius:6px 6px 0 0;background:linear-gradient(180deg,${r===1?'#ffd700,#b8860b':r===2?'#c0c0c0,#707070':'#cd7f32,#8b4513'});display:flex;align-items:center;justify-content:center;font-size:1.6rem;">${medals[r]}</div>
            </div>`;
        }).join('');
        const maxD=sorted[0]?sorted[0].dias:1;
        const restHTML=sorted.slice(3).map((p,i)=>{
            const color=mandatoGetPartyColor(p.party);
            const pct=(p.dias/maxD*100).toFixed(1);
            return `<div style="display:flex;align-items:center;gap:10px;background:var(--bg4);border:1px solid ${p.active?'#22c55e':'var(--border)'};border-radius:8px;padding:10px 14px;margin-bottom:7px;">
                <div style="font-family:var(--mono);font-size:.9rem;color:var(--text3);min-width:22px;">${i+4}</div>
                <div style="width:34px;height:34px;border-radius:50%;background:var(--bg2);border:2px solid var(--border);display:flex;align-items:center;justify-content:center;font-size:.8rem;flex-shrink:0;">👤</div>
                <div style="min-width:160px;max-width:200px;">
                    <div style="font-weight:600;font-size:.82rem;">${p.name}${p.active?' <span style="color:#22c55e;font-size:.6rem;">●</span>':''}</div>
                    <div style="font-size:.65rem;color:var(--text3);">🏛 ${p.ccaa}</div>
                    <span style="font-size:.58rem;font-weight:700;padding:1px 6px;border-radius:10px;background:${color};color:#fff;display:inline-block;margin-top:2px;">${p.party}</span>
                </div>
                <div style="flex:1;min-width:0;">
                    <div style="background:var(--bg2);border-radius:4px;height:8px;overflow:hidden;margin-bottom:3px;"><div style="height:100%;border-radius:4px;width:${pct}%;background:linear-gradient(90deg,${color},${color}88);"></div></div>
                    <div style="font-size:.68rem;color:var(--text3);text-align:right;"><span style="font-family:var(--mono);font-size:.88rem;color:var(--text);">${p.dias.toLocaleString('es')}</span> días</div>
                </div>
            </div>`;
        }).join('');
        document.getElementById('mandato-glob-view-podio').innerHTML=`
            <div style="display:flex;align-items:flex-end;gap:8px;justify-content:center;padding:12px 0 24px;flex-wrap:wrap;">${podioHTML}</div>
            ${restHTML?'<div style="font-family:var(--mono);font-size:11px;font-weight:700;color:var(--text3);text-transform:uppercase;letter-spacing:2px;margin:12px 0 8px;">Clasificación completa</div>'+restHTML:''}`;
    }
}


// ═══════════════════════════════════════════
//  COMPARATIVA ELECTORAL
// ═══════════════════════════════════════════

// ─── Colores de partidos ───────────────────
const CMP_COLORS = {
  PP:'#0064c8', PSOE:'#e53935', VOX:'#4caf50', SUMAR:'#e91e63', PODEMOS:'#8e24aa',
  EHBILDU:'#4db6ac', PNV:'#1a6b3a', ERC:'#f9c74f', JUNTS:'#00bcd4', CUP:'#212121',
  BNG:'#0077cc', CCA:'#e67e22', CC:'#e67e22', NCA:'#1976d2', UPN:'#e74c3c',
  PRC:'#7b1fa2', 'MÁS MADRID':'#00bcd4', COMPROMIS:'#ff8c00', 'MÉS':'#4db6ac',
  MXME:'#607d8b', 'SA UNIÓ':'#795548', AC:'#546e7a', IU:'#d32f2f',
  'POR ANDALUCÍA':'#9c27b0', 'ADELANTE ANDALUCÍA':'#e91e63', CHA:'#f57c00',
  AE:'#0097a7', PAR:'#e07b39', ASG:'#5d4037', AHI:'#37474f',
  'NAVARRA SUMA':'#e74c3c', FAC:'#457b9d', CS:'#f57c00', CIUDADANOS:'#f57c00',
  GEROABAI:'#00796b', GBAI:'#00796b', UPL:'#9e9d24', 'SORIA YA!':'#d4a017',
  XAV:'#6d4c41', DO:'#00695c', MDYC:'#c2185b', 'CEUTA YA!':'#ff5722',
  CPM:'#0288d1', 'SOMOS MELILLA':'#7c4dff', CEUS:'#00695c', AR:'#1a6b3a',
  SALF:'#b71c1c', 'MÁS PAÍS':'#00bcd4', 'TERUEL EXISTE!':'#ff8c00',
  'I-E':'#d32f2f', PSC:'#e53935',
};

function cmpColor(p) { return CMP_COLORS[p] || '#6c757d'; }

// ─── DATA: Autonómicas ─────────────────────
const CMP_AUT = {
  galicia: {
    name:'Galicia', year1:2024, year2:2020,
    total: { new:{PP:40,BNG:25,PSOE:9,DO:1}, old:{PP:42,BNG:19,PSOE:14} },
    provincias: {
      'A Coruña': { new:{PP:13,BNG:9,PSOE:3}, old:{PP:14,BNG:7,PSOE:4} },
      'Pontevedra': { new:{PP:11,BNG:8,PSOE:3}, old:{PP:11,BNG:6,PSOE:5} },
      'Lugo': { new:{PP:8,BNG:4,PSOE:2}, old:{PP:9,BNG:3,PSOE:2} },
      'Ourense': { new:{PP:8,BNG:4,PSOE:1,DO:1}, old:{PP:8,BNG:3,PSOE:3} },
    }
  },
  asturias: {
    name:'Asturias', year1:2023, year2:2019,
    total: { new:{PSOE:19,PP:17,VOX:4,IU:3,PODEMOS:1,FAC:1}, old:{PSOE:20,PP:10,CS:5,PODEMOS:4,IU:2,FAC:2,VOX:2} },
    provincias: {
      'Occidente': { new:{PSOE:3,PP:3}, old:{PSOE:4,PP:2} },
      'Centro': { new:{PSOE:13,PP:12,VOX:4,IU:3,PODEMOS:1,FAC:1}, old:{PSOE:13,PP:6,CS:5,PODEMOS:4,IU:2,VOX:2,FAC:2} },
      'Oriente': { new:{PSOE:3,PP:2}, old:{PSOE:3,PP:2} },
    }
  },
  cantabria: {
    name:'Cantabria', year1:2023, year2:2019,
    total: { new:{PP:15,PRC:8,PSOE:8,VOX:4}, old:{PRC:15,PP:9,PSOE:6,CS:3,VOX:2} },
    provincias: {}
  },
  pais_vasco: {
    name:'País Vasco', year1:2024, year2:2020,
    total: { new:{PNV:27,EHBILDU:27,PSOE:12,PP:7,SUMAR:1,VOX:1}, old:{PNV:31,EHBILDU:21,PSOE:10,PODEMOS:6,PP:6,VOX:1} },
    provincias: {
      'Álava': { new:{EHBILDU:8,PNV:7,PSOE:4,PP:4,VOX:1,SUMAR:1}, old:{PNV:9,EHBILDU:6,PSOE:4,PP:3,PODEMOS:2,VOX:1} },
      'Vizcaya': { new:{PNV:11,EHBILDU:8,PSOE:4,PP:2}, old:{PNV:12,EHBILDU:6,PSOE:3,PODEMOS:2,PP:2} },
      'Guipúzcoa': { new:{EHBILDU:11,PNV:9,PSOE:4,PP:1}, old:{PNV:10,EHBILDU:9,PSOE:3,PODEMOS:2,PP:1} },
    }
  },
  navarra: {
    name:'Navarra', year1:2023, year2:2019,
    total: { new:{UPN:15,PSOE:11,EHBILDU:9,GBAI:7,PP:3,PODEMOS:3,VOX:2}, old:{'NAVARRA SUMA':19,PSOE:11,GBAI:9,EHBILDU:8,PODEMOS:2,'I-E':1} },
    provincias: {}
  },
  aragon: {
    name:'Aragón', year1:2026, year2:2023,
    total: { new:{PP:26,PSOE:18,VOX:14,CHA:6,AE:2,IU:1}, old:{PP:28,PSOE:23,VOX:7,CHA:3,AE:3,PODEMOS:1,IU:1,PAR:1} },
    provincias: {
      'Huesca': { new:{PP:7,PSOE:5,VOX:4,CHA:2}, old:{PP:8,PSOE:7,VOX:2,CHA:1} },
      'Zaragoza': { new:{PP:14,PSOE:9,VOX:7,CHA:4,IU:1}, old:{PP:15,PSOE:12,VOX:4,CHA:2,PODEMOS:1,IU:1} },
      'Teruel': { new:{PP:5,PSOE:4,VOX:3,AE:2}, old:{PP:5,PSOE:4,AE:3,VOX:1,PAR:1} },
    }
  },
  cataluna: {
    name:'Cataluña', year1:2024, year2:2021,
    total: { new:{PSOE:42,JUNTS:35,ERC:20,PP:15,VOX:11,SUMAR:6,CUP:4,AC:2}, old:{PSOE:33,ERC:33,JUNTS:32,VOX:11,CUP:9,PODEMOS:8,CS:6,PP:3} },
    provincias: {
      'Lleida': { new:{JUNTS:5,PSOE:4,ERC:3,PP:1,AC:1,VOX:1}, old:{JUNTS:5,ERC:5,PSOE:3,CUP:1,VOX:1} },
      'Girona': { new:{JUNTS:7,PSOE:4,ERC:2,AC:1,PP:1,VOX:1,CUP:1}, old:{JUNTS:7,ERC:4,PSOE:3,CUP:2,VOX:1} },
      'Tarragona': { new:{PSOE:6,JUNTS:5,ERC:3,PP:2,VOX:2}, old:{ERC:5,PSOE:4,JUNTS:4,VOX:2,CUP:1,CS:1,PODEMOS:1} },
      'Barcelona': { new:{PSOE:28,JUNTS:18,ERC:12,PP:11,VOX:7,SUMAR:6,CUP:3}, old:{PSOE:23,ERC:19,JUNTS:16,VOX:7,PODEMOS:7,CUP:5,CS:5,PP:3} },
    }
  },
  baleares: {
    name:'Baleares', year1:2023, year2:2019,
    total: { new:{PP:25,PSOE:18,VOX:8,'MÉS':4,MXME:2,PODEMOS:1,'SA UNIÓ':1}, old:{PSOE:19,PP:16,PODEMOS:6,CS:5,'MÉS':4,VOX:3,'EL PI':3,MXME:2,GXF:1} },
    provincias: {
      'Ibiza': { new:{PP:7,PSOE:4,VOX:1}, old:{PP:5,PSOE:5,PODEMOS:1,CS:1} },
      'Formentera': { new:{'SA UNIÓ':1}, old:{GXF:1} },
      'Mallorca': { new:{PP:13,PSOE:10,VOX:6,'MÉS':4}, old:{PSOE:10,PP:7,'MÉS':4,CS:3,PODEMOS:3,VOX:3,'EL PI':3} },
      'Menorca': { new:{PP:5,PSOE:4,MXME:2,VOX:1,PODEMOS:1}, old:{PSOE:4,PP:4,MXME:2,PODEMOS:2,CS:1} },
    }
  },
  canarias: {
    name:'Canarias', year1:2023, year2:2019,
    total: { new:{PSOE:23,CCA:19,PP:15,NCA:5,VOX:4,ASG:3,AHI:1}, old:{PSOE:25,CCA:20,PP:11,NCA:5,PODEMOS:4,ASG:3,CS:2} },
    provincias: {
      'El Hierro': { new:{AHI:1,PSOE:1,PP:1}, old:{PSOE:1,AHI:1,PP:1} },
      'Fuerteventura': { new:{CCA:3,PSOE:2,PP:2,NCA:1}, old:{PSOE:3,CCA:3,PP:1,NCA:1} },
      'Gran Canaria': { new:{PSOE:5,PP:4,NCA:3,VOX:2,CCA:1}, old:{PSOE:5,NCA:3,PP:3,CCA:2,PODEMOS:1,CS:1} },
      'La Gomera': { new:{ASG:3,PSOE:1}, old:{ASG:3,PSOE:1} },
      'La Palma': { new:{CCA:4,PSOE:2,PP:2}, old:{CCA:3,PSOE:3,PP:2} },
      'Lanzarote': { new:{PSOE:3,CCA:3,PP:1,NCA:1}, old:{CCA:3,PSOE:3,PP:1,PODEMOS:1} },
      'Tenerife': { new:{CCA:6,PSOE:5,PP:3,VOX:1}, old:{PSOE:6,CCA:5,PP:2,PODEMOS:1,CS:1} },
      'Urna Autonómica': { new:{PSOE:4,PP:2,CCA:2,VOX:1}, old:{PSOE:3,CCA:3,PP:1,NCA:1,PODEMOS:1} },
    }
  },
  ceuta: {
    name:'Ceuta', year1:2023, year2:2019,
    total: { new:{PP:9,PSOE:6,VOX:5,MDYC:3,'CEUTA YA!':2}, old:{PP:9,PSOE:7,VOX:6,MDYC:2,CABALLAS:1} },
    provincias: {}
  },
  melilla: {
    name:'Melilla', year1:2023, year2:2019,
    total: { new:{PP:14,CPM:5,PSOE:3,VOX:2,'SOMOS MELILLA':1}, old:{PP:10,CPM:8,PSOE:4,VOX:2,CS:1} },
    provincias: {}
  },
  castilla_y_leon: {
    name:'Castilla y León', year1:2026, year2:2022,
    total: { new:{PP:33,PSOE:30,VOX:14,UPL:3,'SORIA YA!':1,XAV:1}, old:{PP:31,PSOE:28,VOX:13,UPL:3,'SORIA YA!':3,PODEMOS:1,CS:1,XAV:1} },
    provincias: {
      'Ávila': { new:{PSOE:3,PP:2,VOX:1,XAV:1}, old:{PSOE:3,PP:2,VOX:1,XAV:1} },
      'Burgos': { new:{PP:5,PSOE:4,VOX:2}, old:{PSOE:5,PP:4,VOX:2} },
      'León': { new:{PSOE:4,PP:4,UPL:3,VOX:2}, old:{PSOE:4,PP:4,UPL:3,VOX:2} },
      'Palencia': { new:{PP:3,PSOE:3,VOX:1}, old:{PSOE:3,PP:3,VOX:1} },
      'Salamanca': { new:{PP:5,PSOE:3,VOX:2}, old:{PP:5,PSOE:3,VOX:2} },
      'Segovia': { new:{PP:3,PSOE:3,VOX:1}, old:{PP:3,PSOE:2,VOX:1} },
      'Soria': { new:{PSOE:2,PP:1,'SORIA YA!':1,VOX:1}, old:{'SORIA YA!':3,PP:1,PSOE:1} },
      'Valladolid': { new:{PP:6,PSOE:6,VOX:3}, old:{PSOE:5,PP:5,VOX:3,PODEMOS:1,CS:1} },
      'Zamora': { new:{PP:3,PSOE:3,VOX:1}, old:{PP:3,PSOE:3,VOX:1} },
    }
  },
  la_rioja: {
    name:'La Rioja', year1:2023, year2:2019,
    total: { new:{PP:17,PSOE:12,VOX:2,PODEMOS:2}, old:{PSOE:15,PP:12,CS:4,PODEMOS:2} },
    provincias: {}
  },
  madrid: {
    name:'Madrid', year1:2023, year2:2021,
    total: { new:{PP:70,'MÁS MADRID':27,PSOE:27,VOX:11}, old:{PP:65,'MÁS MADRID':24,PSOE:24,VOX:13,PODEMOS:10} },
    provincias: {}
  },
  extremadura: {
    name:'Extremadura', year1:2025, year2:2023,
    total: { new:{PP:29,PSOE:18,VOX:11,PODEMOS:7}, old:{PSOE:28,PP:28,VOX:5,PODEMOS:4} },
    provincias: {
      'Cáceres': { new:{PP:13,PSOE:8,VOX:5,PODEMOS:3}, old:{PP:13,PSOE:12,VOX:2,PODEMOS:2} },
      'Badajoz': { new:{PP:16,PSOE:10,VOX:6,PODEMOS:4}, old:{PSOE:16,PP:15,VOX:3,PODEMOS:2} },
    }
  },
  castilla_la_mancha: {
    name:'Castilla-La Mancha', year1:2023, year2:2019,
    total: { new:{PSOE:17,PP:12,VOX:4}, old:{PSOE:19,PP:10,CS:4} },
    provincias: {
      'Guadalajara': { new:{PSOE:2,PP:2,VOX:1}, old:{PSOE:3,PP:1,CS:1} },
      'Cuenca': { new:{PSOE:3,PP:2}, old:{PSOE:3,PP:2} },
      'Albacete': { new:{PSOE:3,PP:3,VOX:1}, old:{PSOE:4,PP:2,CS:1} },
      'Toledo': { new:{PSOE:5,PP:3,VOX:1}, old:{PSOE:5,PP:3,CS:1} },
      'Ciudad Real': { new:{PSOE:4,PP:2,VOX:1}, old:{PSOE:4,PP:2,CS:1} },
    }
  },
  comunidad_valenciana: {
    name:'C. Valenciana', year1:2023, year2:2019,
    total: { new:{PP:40,PSOE:31,COMPROMIS:15,VOX:13}, old:{PSOE:27,PP:19,CS:18,COMPROMIS:17,VOX:10,PODEMOS:8} },
    provincias: {
      'Castellón': { new:{PP:10,PSOE:8,COMPROMIS:3,VOX:3}, old:{PSOE:7,PP:5,CS:4,COMPROMIS:4,VOX:2,PODEMOS:2} },
      'Valencia': { new:{PP:15,PSOE:12,COMPROMIS:8,VOX:5}, old:{PSOE:10,COMPROMIS:9,PP:7,CS:7,VOX:4,PODEMOS:3} },
      'Alicante': { new:{PP:15,PSOE:11,VOX:5,COMPROMIS:4}, old:{PSOE:10,PP:7,CS:7,VOX:4,COMPROMIS:4,PODEMOS:3} },
    }
  },
  murcia: {
    name:'Murcia', year1:2023, year2:2019,
    total: { new:{PP:21,PSOE:13,VOX:9,PODEMOS:2}, old:{PSOE:17,PP:16,CS:6,VOX:4,PODEMOS:2} },
    provincias: {}
  },
  andalucia: {
    name:'Andalucía', year1:2022, year2:2018,
    total: { new:{PP:58,PSOE:30,VOX:14,'POR ANDALUCÍA':5,'ADELANTE ANDALUCÍA':2}, old:{PSOE:33,PP:26,CS:21,'ADELANTE ANDALUCÍA':17,VOX:12} },
    provincias: {
      'Almería': { new:{PP:6,PSOE:3,VOX:3}, old:{PP:4,PSOE:3,VOX:2,CS:2,'ADELANTE ANDALUCÍA':1} },
      'Cádiz': { new:{PP:8,PSOE:3,VOX:2,'ADELANTE ANDALUCÍA':1,'POR ANDALUCÍA':1}, old:{PSOE:4,CS:3,'ADELANTE ANDALUCÍA':3,PP:3,VOX:2} },
      'Córdoba': { new:{PP:7,PSOE:3,VOX:1,'POR ANDALUCÍA':1}, old:{PSOE:4,PP:3,CS:2,'ADELANTE ANDALUCÍA':2,VOX:1} },
      'Granada': { new:{PP:6,PSOE:4,VOX:2,'POR ANDALUCÍA':1}, old:{PSOE:4,PP:3,CS:3,'ADELANTE ANDALUCÍA':2,VOX:1} },
      'Huelva': { new:{PP:6,PSOE:4,VOX:1}, old:{PSOE:4,PP:3,CS:2,'ADELANTE ANDALUCÍA':1,VOX:1} },
      'Jaén': { new:{PP:6,PSOE:4,VOX:1}, old:{PSOE:4,PP:3,CS:2,'ADELANTE ANDALUCÍA':1,VOX:1} },
      'Málaga': { new:{PP:10,PSOE:4,VOX:2,'POR ANDALUCÍA':1}, old:{PSOE:4,PP:4,CS:4,'ADELANTE ANDALUCÍA':3,VOX:2} },
      'Sevilla': { new:{PP:9,PSOE:5,VOX:2,'POR ANDALUCÍA':1,'ADELANTE ANDALUCÍA':1}, old:{PSOE:6,'ADELANTE ANDALUCÍA':4,CS:3,PP:3,VOX:2} },
    }
  },
};

// ─── DATA: Generales ──────────────────────
const CMP_GEN = {
  nacional: {
    name:'España (Nacional)', year1:2023, year2:2019,
    total: { new:{PP:137,PSOE:121,VOX:33,SUMAR:31,ERC:7,JUNTS:7,EHBILDU:6,PNV:5,BNG:1,CCA:1,UPN:1}, old:{PSOE:120,PP:89,VOX:52,PODEMOS:35,ERC:13,CS:10,JUNTS:8,PNV:6,EHBILDU:5,'MÁS PAÍS':3,CUP:2,CCA:2,'NAVARRA SUMA':2,BNG:1,PRC:1,'TERUEL EXISTE!':1} },
    provincias: {}
  },
  andalucia: {
    name:'Andalucía', year1:2023, year2:2019,
    total: { new:{PP:25,PSOE:21,VOX:9,SUMAR:6}, old:{PSOE:25,PP:15,VOX:12,PODEMOS:6,CS:3} },
    provincias: {
      'Almería': { new:{PP:3,PSOE:2,VOX:1}, old:{PSOE:2,VOX:2,PP:2} },
      'Cádiz': { new:{PP:4,PSOE:3,VOX:1,SUMAR:1}, old:{PSOE:3,VOX:2,PP:2,PODEMOS:1,CS:1} },
      'Córdoba': { new:{PP:2,PSOE:2,VOX:1,SUMAR:1}, old:{PSOE:2,PP:2,VOX:1,PODEMOS:1} },
      'Granada': { new:{PP:3,PSOE:2,VOX:1,SUMAR:1}, old:{PSOE:3,PP:2,VOX:1,PODEMOS:1} },
      'Huelva': { new:{PP:2,PSOE:2,VOX:1}, old:{PSOE:3,VOX:1,PP:1} },
      'Jaén': { new:{PP:2,PSOE:2,VOX:1}, old:{PSOE:3,PP:1,VOX:1} },
      'Málaga': { new:{PP:5,PSOE:3,VOX:2,SUMAR:1}, old:{PSOE:4,PP:3,VOX:2,PODEMOS:1,CS:1} },
      'Sevilla': { new:{PSOE:5,PP:4,SUMAR:2,VOX:1}, old:{PSOE:5,VOX:2,PP:2,PODEMOS:2,CS:1} },
    }
  },
  aragon: {
    name:'Aragón', year1:2023, year2:2019,
    total: { new:{PP:7,PSOE:4,VOX:1,SUMAR:1}, old:{PSOE:6,PP:4,VOX:1,PODEMOS:1,AE:1} },
    provincias: {
      'Huesca': { new:{PP:2,PSOE:1}, old:{PSOE:2,PP:1} },
      'Zaragoza': { new:{PP:3,PSOE:2,VOX:1,SUMAR:1}, old:{PSOE:3,PP:2,VOX:1,PODEMOS:1} },
      'Teruel': { new:{PP:2,PSOE:1}, old:{AE:1,PSOE:1,PP:1} },
    }
  },
  asturias: {
    name:'Asturias', year1:2023, year2:2019,
    total: { new:{PP:3,PSOE:2,SUMAR:1,VOX:1}, old:{PSOE:3,PP:2,PODEMOS:1,VOX:1} },
    provincias: {}
  },
  baleares: {
    name:'Baleares', year1:2023, year2:2019,
    total: { new:{PP:3,PSOE:3,SUMAR:1,VOX:1}, old:{PSOE:2,PP:2,PODEMOS:2,VOX:2} },
    provincias: {}
  },
  canarias: {
    name:'Canarias', year1:2023, year2:2019,
    total: { new:{PSOE:6,PP:6,CCA:1,SUMAR:1,VOX:1}, old:{PSOE:5,PP:4,PODEMOS:2,CCA:2,VOX:2} },
    provincias: {
      'Las Palmas': { new:{PSOE:3,PP:3,VOX:1,SUMAR:1}, old:{PSOE:3,PP:2,PODEMOS:1,VOX:1,CCA:1} },
      'Santa Cruz de Tenerife': { new:{PP:3,PSOE:3,CCA:1}, old:{PSOE:2,PP:2,CCA:1,PODEMOS:1,VOX:1} },
    }
  },
  cantabria: {
    name:'Cantabria', year1:2023, year2:2019,
    total: { new:{PP:2,PSOE:2,VOX:1}, old:{PP:2,PSOE:1,PRC:1,VOX:1} },
    provincias: {}
  },
  castilla_la_mancha: {
    name:'Castilla-La Mancha', year1:2023, year2:2019,
    total: { new:{PP:10,PSOE:8,VOX:3}, old:{PSOE:9,PP:7,VOX:5} },
    provincias: {
      'Albacete': { new:{PP:2,PSOE:2}, old:{PSOE:2,PP:1,VOX:1} },
      'Ciudad Real': { new:{PP:2,PSOE:2,VOX:1}, old:{PSOE:2,PP:2,VOX:1} },
      'Cuenca': { new:{PP:2,PSOE:1}, old:{PSOE:2,PP:1} },
      'Guadalajara': { new:{PP:1,PSOE:1,VOX:1}, old:{PSOE:1,VOX:1,PP:1} },
      'Toledo': { new:{PP:3,PSOE:2,VOX:1}, old:{PSOE:2,PP:2,VOX:2} },
    }
  },
  castilla_y_leon: {
    name:'Castilla y León', year1:2023, year2:2019,
    total: { new:{PP:18,PSOE:12,VOX:1}, old:{PP:13,PSOE:12,VOX:6} },
    provincias: {
      'Ávila': { new:{PP:2,PSOE:1}, old:{PP:1,PSOE:1,VOX:1} },
      'Burgos': { new:{PP:2,PSOE:2}, old:{PSOE:2,PP:2} },
      'León': { new:{PP:2,PSOE:2}, old:{PSOE:2,PP:1,VOX:1} },
      'Palencia': { new:{PP:2,PSOE:1}, old:{PP:2,PSOE:1} },
      'Salamanca': { new:{PP:3,PSOE:1}, old:{PP:2,PSOE:1,VOX:1} },
      'Segovia': { new:{PP:2,PSOE:1}, old:{PP:1,PSOE:1,VOX:1} },
      'Soria': { new:{PP:1,PSOE:1}, old:{PSOE:1,PP:1} },
      'Valladolid': { new:{PP:2,PSOE:2,VOX:1}, old:{PSOE:2,PP:2,VOX:1} },
      'Zamora': { new:{PP:2,PSOE:1}, old:{PP:1,PSOE:1,VOX:1} },
    }
  },
  cataluna: {
    name:'Cataluña', year1:2023, year2:2019,
    total: { new:{PSOE:19,SUMAR:7,ERC:7,JUNTS:7,PP:6,VOX:2}, old:{ERC:13,PSOE:12,JUNTS:8,PODEMOS:7,PP:2,CUP:2,VOX:2,CS:2} },
    provincias: {
      'Lleida': { new:{PSOE:2,ERC:1,JUNTS:1}, old:{ERC:2,JUNTS:1,PSOE:1} },
      'Tarragona': { new:{PSOE:2,ERC:1,PP:1,SUMAR:1,JUNTS:1}, old:{ERC:2,PSOE:2,JUNTS:1,PODEMOS:1} },
      'Barcelona': { new:{PSOE:13,SUMAR:5,PP:5,ERC:4,JUNTS:3,VOX:2}, old:{PSOE:8,ERC:7,PODEMOS:5,JUNTS:4,PP:2,VOX:2,CUP:2,CS:2} },
      'Girona': { new:{PSOE:2,JUNTS:2,ERC:1,SUMAR:1}, old:{ERC:2,JUNTS:2,PSOE:1,PODEMOS:1} },
    }
  },
  ceuta: {
    name:'Ceuta', year1:2023, year2:2019,
    total: { new:{PP:1}, old:{VOX:1} },
    provincias: {}
  },
  melilla: {
    name:'Melilla', year1:2023, year2:2019,
    total: { new:{PP:1}, old:{PP:1} },
    provincias: {}
  },
  madrid: {
    name:'Madrid', year1:2023, year2:2019,
    total: { new:{PP:16,PSOE:10,SUMAR:6,VOX:5}, old:{PSOE:10,PP:10,VOX:7,PODEMOS:5,CS:3,'MÁS PAÍS':2} },
    provincias: {}
  },
  navarra: {
    name:'Navarra', year1:2023, year2:2019,
    total: { new:{PSOE:2,EHBILDU:1,PP:1,UPN:1}, old:{UPN:2,PSOE:1,EHBILDU:1,PODEMOS:1} },
    provincias: {}
  },
  comunidad_valenciana: {
    name:'C. Valenciana', year1:2023, year2:2019,
    total: { new:{PP:13,PSOE:11,VOX:5,SUMAR:4}, old:{PSOE:10,PP:8,VOX:7,PODEMOS:4,CS:2,'MÁS PAÍS':1} },
    provincias: {
      'Castellón': { new:{PP:2,PSOE:2,VOX:1}, old:{PSOE:2,PP:1,VOX:1,PODEMOS:1} },
      'Valencia': { new:{PP:6,PSOE:5,SUMAR:3,VOX:2}, old:{PSOE:4,PP:4,VOX:3,PODEMOS:2,'MÁS PAÍS':1,CS:1} },
      'Alicante': { new:{PP:5,PSOE:4,VOX:2,SUMAR:1}, old:{PSOE:4,PP:3,VOX:3,PODEMOS:1,CS:1} },
    }
  },
  extremadura: {
    name:'Extremadura', year1:2023, year2:2019,
    total: { new:{PSOE:4,PP:4,VOX:1}, old:{PSOE:5,PP:3,VOX:2} },
    provincias: {
      'Cáceres': { new:{PSOE:2,PP:2}, old:{PSOE:2,PP:1,VOX:1} },
      'Badajoz': { new:{PSOE:2,PP:2,VOX:1}, old:{PSOE:3,PP:2,VOX:1} },
    }
  },
  galicia: {
    name:'Galicia', year1:2023, year2:2019,
    total: { new:{PP:13,PSOE:7,SUMAR:2,BNG:1}, old:{PP:10,PSOE:10,PODEMOS:2,BNG:1} },
    provincias: {
      'A Coruña': { new:{PP:4,PSOE:2,SUMAR:1,BNG:1}, old:{PP:3,PSOE:3,PODEMOS:1,BNG:1} },
      'Lugo': { new:{PP:3,PSOE:1}, old:{PP:2,PSOE:2} },
      'Ourense': { new:{PP:3,PSOE:1}, old:{PP:2,PSOE:2} },
      'Pontevedra': { new:{PP:3,PSOE:3,SUMAR:1}, old:{PSOE:3,PP:3,PODEMOS:1} },
    }
  },
  baleares_gen: { name:'Baleares', year1:2023, year2:2019, total:{new:{PP:3,PSOE:3,SUMAR:1,VOX:1},old:{PSOE:2,PP:2,PODEMOS:2,VOX:2}}, provincias:{} },
  la_rioja: {
    name:'La Rioja', year1:2023, year2:2019,
    total: { new:{PP:2,PSOE:2}, old:{PSOE:2,PP:2} },
    provincias: {}
  },
  pais_vasco: {
    name:'País Vasco', year1:2023, year2:2019,
    total: { new:{PSOE:5,PNV:5,EHBILDU:5,PP:2,SUMAR:1}, old:{PNV:6,PSOE:4,EHBILDU:4,PODEMOS:3,PP:1} },
    provincias: {
      'Álava': { new:{PSOE:1,EHBILDU:1,PP:1,PNV:1}, old:{PNV:1,PSOE:1,PODEMOS:1,EHBILDU:1} },
      'Vizcaya': { new:{PNV:2,PSOE:2,EHBILDU:2,PP:1,SUMAR:1}, old:{PNV:3,PSOE:2,PODEMOS:1,EHBILDU:1,PP:1} },
      'Guipúzcoa': { new:{EHBILDU:2,PSOE:2,PNV:2}, old:{PNV:2,EHBILDU:2,PSOE:1,PODEMOS:1} },
    }
  },
  murcia: {
    name:'Murcia', year1:2023, year2:2019,
    total: { new:{PP:4,PSOE:3,VOX:2,SUMAR:1}, old:{VOX:3,PP:3,PSOE:3,PODEMOS:1} },
    provincias: {}
  },
};

// ─── DATA: Europeas ──────────────────────
const CMP_EUR = {
  europa: {
    name:'Elecciones Europeas', year1:2024, year2:2019,
    total: { new:{PP:22,PSOE:20,VOX:6,AR:3,SUMAR:3,SALF:3,PODEMOS:2,JUNTS:1,CEUS:1}, old:{PSOE:21,PP:13,CS:8,PODEMOS:6,VOX:4,AR:3,JUNTS:3,CEUS:1} },
    provincias: {}
  }
};

// ─── STATE ─────────────────────────────────
let cmpTipo = 'autonomicas';
let cmpInited = false;

function cmpInit() {
  if(cmpInited) return;
  cmpInited = true;
  cmpRender();
}

function cmpSetTipo(tipo, btn) {
  cmpTipo = tipo;
  ['autonomicas','generales','europeas'].forEach(t => {
    const b = document.getElementById('cmp-btn-'+t);
    b.style.background = t===tipo ? 'var(--accent)' : 'transparent';
    b.style.color = t===tipo ? '#fff' : 'var(--text2)';
  });
  document.getElementById('cmp-autonomicas-sel').style.display = tipo==='autonomicas' ? 'block' : 'none';
  document.getElementById('cmp-generales-sel').style.display = tipo==='generales' ? 'block' : 'none';
  // For europeas, auto-render immediately; for others, only if selection made
  cmpRender();
}

function cmpRender() {
  let data = null;
  let key = '';

  if(cmpTipo === 'autonomicas') {
    key = document.getElementById('cmp-ccaa-select').value;
    if(!key) { cmpShowPlaceholder(); return; }
    data = CMP_AUT[key];
  } else if(cmpTipo === 'generales') {
    key = document.getElementById('cmp-gen-select').value || 'nacional';
    data = CMP_GEN[key];
  } else if(cmpTipo === 'europeas') {
    data = CMP_EUR.europa;
  }

  if(!data) { cmpShowPlaceholder(); return; }

  document.getElementById('cmp-placeholder').style.display = 'none';
  document.getElementById('cmp-results').style.display = 'block';

  // Populate province selector if applicable
  if(cmpTipo === 'autonomicas') {
    const provSel = document.getElementById('cmp-prov-select');
    const provKeys = Object.keys(data.provincias||{});
    if(provKeys.length > 0) {
      provSel.style.display = 'block';
      provSel.innerHTML = '<option value="">Total comunidad</option>' + provKeys.map(p=>`<option value="${p}">${p}</option>`).join('');
    } else {
      provSel.style.display = 'none';
    }
  }

  // Determine which dataset to show
  let displayData = data.total;
  let displayName = data.name;

  if(cmpTipo === 'autonomicas') {
    const prov = document.getElementById('cmp-prov-select').value;
    if(prov && data.provincias[prov]) {
      displayData = data.provincias[prov];
      displayName = prov + ' (' + data.name + ')';
    }
  } else if(cmpTipo === 'generales') {
    const prov = document.getElementById('cmp-gen-prov-select')?.value;
    if(prov && data.provincias && data.provincias[prov]) {
      displayData = data.provincias[prov];
      displayName = prov;
    }
  }

  cmpRenderResults(displayData, data.year1, data.year2, displayName, data.provincias||{});
}

function cmpShowPlaceholder() {
  document.getElementById('cmp-placeholder').style.display = 'block';
  document.getElementById('cmp-results').style.display = 'none';
}

function cmpRenderResults(data, year1, year2, name, provincias) {
  const newData = data.new;
  const oldData = data.old;

  // Collect all parties from both elections
  const allParties = [...new Set([...Object.keys(newData), ...Object.keys(oldData)])];
  // Sort by new seats desc, then old seats desc
  allParties.sort((a,b) => (newData[b]||0) - (newData[a]||0) || (oldData[b]||0) - (oldData[a]||0));

  const totalNew = Object.values(newData).reduce((s,v)=>s+v,0);
  const totalOld = Object.values(oldData).reduce((s,v)=>s+v,0);

  // Header
  document.getElementById('cmp-header').innerHTML = `
    <div style="display:flex;align-items:center;gap:14px;flex-wrap:wrap;">
      <div style="font-size:18px;font-weight:800;color:var(--text);">${name}</div>
      <div style="display:flex;gap:8px;align-items:center;">
        <span style="background:rgba(79,142,247,.15);color:var(--accent);border:1px solid rgba(79,142,247,.3);padding:4px 12px;border-radius:6px;font-size:12px;font-weight:700;">${year1} · ${totalNew} escaños</span>
        <span style="color:var(--text3);font-size:14px;">vs</span>
        <span style="background:rgba(142,151,173,.1);color:var(--text2);border:1px solid var(--border);padding:4px 12px;border-radius:6px;font-size:12px;font-weight:700;">${year2} · ${totalOld} escaños</span>
      </div>
    </div>`;

  // Hemiciclo bar comparison
  const hemiHTML = `
    <div class="cmp-hemi-wrap">
      <div class="cmp-hemi-label">${year1} — Composición del hemiciclo</div>
      <div class="cmp-bar-compare" id="hemi-new-bar"></div>
      <div class="cmp-legend-row" style="margin-bottom:16px;" id="hemi-new-legend"></div>
      <div class="cmp-hemi-label">${year2} — Composición anterior</div>
      <div class="cmp-bar-compare" id="hemi-old-bar"></div>
      <div class="cmp-legend-row" id="hemi-old-legend"></div>
    </div>`;
  document.getElementById('cmp-hemiciclo').innerHTML = hemiHTML;

  // Render both bars
  function renderBar(containerId, seatData, total, legendId) {
    const bar = document.getElementById(containerId);
    const legend = document.getElementById(legendId);
    bar.innerHTML = Object.entries(seatData).map(([p,s]) => {
      const pct = (s/total*100).toFixed(1);
      const label = s > 2 ? `${s}` : '';
      return `<div class="cmp-bar-seg" style="flex:${s};background:${cmpColor(p)};" title="${p}: ${s} (${pct}%)">${label}</div>`;
    }).join('');
    legend.innerHTML = Object.entries(seatData).map(([p,s])=>`
      <div class="cmp-legend-item"><div class="cmp-legend-dot" style="background:${cmpColor(p)};"></div>${p} <strong style="color:var(--text);margin-left:2px;">${s}</strong></div>`).join('');
  }

  renderBar('hemi-new-bar', newData, totalNew, 'hemi-new-legend');
  renderBar('hemi-old-bar', oldData, totalOld, 'hemi-old-legend');

  // Party cards
  const maxSeats = Math.max(totalNew, totalOld, 1);
  const cards = allParties.map(p => {
    const n = newData[p] || 0;
    const o = oldData[p] || 0;
    const diff = n - o;
    let deltaClass = diff > 0 ? 'plus' : diff < 0 ? 'minus' : 'equal';
    let deltaText = diff > 0 ? `+${diff}` : diff < 0 ? `${diff}` : '=';
    const color = cmpColor(p);
    const barPct = (n / Math.max(...allParties.map(x=>newData[x]||0)) * 100).toFixed(1);

    return `
    <div class="cmp-card">
      <div class="cmp-card-top">
        <div class="cmp-party-dot" style="background:${color};"></div>
        <div class="cmp-party-name">${p}</div>
        <div class="cmp-delta ${deltaClass}">${deltaText}</div>
      </div>
      <div class="cmp-seats-row">
        <div class="cmp-seat-block">
          <div class="cmp-seat-num" style="color:${color};">${n}</div>
          <div class="cmp-seat-year">${year1}</div>
        </div>
        <div class="cmp-arrow">→</div>
        <div class="cmp-seat-block">
          <div class="cmp-seat-num" style="color:var(--text3);font-size:22px;">${o||'—'}</div>
          <div class="cmp-seat-year">${year2}</div>
        </div>
      </div>
      <div class="cmp-bar-track">
        <div class="cmp-bar-fill" style="width:${barPct}%;background:${color};"></div>
      </div>
    </div>`;
  }).join('');

  document.getElementById('cmp-cards').innerHTML = cards;

  // Provincial breakdown
  const provSection = document.getElementById('cmp-provincial');
  const provKeys = Object.keys(provincias);
  if(provKeys.length > 0) {
    provSection.style.display = 'block';
    provSection.innerHTML = `
      <div class="cmp-prov-title">📍 Desglose provincial</div>
      ${provKeys.map(prov => {
        const pd = provincias[prov];
        const allP = [...new Set([...Object.keys(pd.new||{}), ...Object.keys(pd.old||{})])];
        allP.sort((a,b)=>(pd.new[b]||0)-(pd.new[a]||0));
        const chips = allP.map(p => {
          const n = pd.new[p]||0;
          const o = pd.old[p]||0;
          const diff = n-o;
          const dt = diff>0?`+${diff}`:diff<0?`${diff}`:'=';
          const dc = diff>0?'#66bb6a':diff<0?'#ef5350':'#5c6478';
          if(!n && !o) return '';
          return `<div class="cmp-chip" style="background:${cmpColor(p)}22;border:1px solid ${cmpColor(p)}44;color:${cmpColor(p)};">
            <span>${p}: ${n}</span>
            <span class="cmp-chip-delta" style="color:${dc};">${dt}</span>
          </div>`;
        }).join('');
        return `<div class="cmp-prov-row"><div class="cmp-prov-name">${prov}</div><div class="cmp-prov-chips">${chips}</div></div>`;
      }).join('')}`;
  } else {
    provSection.style.display = 'none';
  }

  // Animate bars
  setTimeout(()=>{
    document.querySelectorAll('#cmp-cards .cmp-bar-fill').forEach(el => {
      const w = el.style.width; el.style.width='0';
      requestAnimationFrame(()=>{ setTimeout(()=>{el.style.width=w;},20); });
    });
  }, 100);
}

// ═══════════════════════════════════════════
const PC=['#e53935','#1565c0','#2e7d32','#e65100','#6a1b9a','#00695c','#c62828','#0277bd','#558b2f'];
const METHOD_DESC={
    dhondt:"D'Hondt: Divide votos entre 1,2,3… Asigna escaños al cociente más alto. Favorece a partidos grandes.",
    saintelague:"Sainte-Laguë: Divisores impares 1,3,5,7… Más proporcional que D'Hondt, favorece partidos medianos.",
    modified:"Sainte-Laguë Modificado: Primer divisor 1,4 en lugar de 1. Reduce ventaja de partidos pequeños.",
    adams:"Adams: Divisores 0,1,2,3… Favorece enormemente a partidos pequeños.",
    hare:"Cuota Hare: Total votos / escaños. Cada partido recibe cuotas enteras; el resto se reparte por mayores restos.",
};
let parties=[{name:'PP',votes:1453735,color:'#1565c0'},{name:'PSOE',votes:1200000,color:'#e53935'},{name:'Vox',votes:500000,color:'#2e7d32'},{name:'Sumar',votes:350000,color:'#6a1b9a'}];
let selectedMethod='dhondt';

function renderPartyList(){
    const c=document.getElementById('party-list');
    c.innerHTML='';
    parties.forEach((p,i)=>{
        const row=document.createElement('div');
        row.className='party-row';
        row.innerHTML=`<input type="color" value="${p.color}" onchange="parties[${i}].color=this.value;" style="width:26px;height:26px;border-radius:50%;border:none;cursor:pointer;padding:0;background:none;"><input class="if" placeholder="Partido" value="${p.name}" oninput="parties[${i}].name=this.value" style="flex:1;min-width:0;"><input class="if" type="number" placeholder="Votos" value="${p.votes}" oninput="parties[${i}].votes=+this.value" style="width:110px;flex-shrink:0;"><button class="rem-p" onclick="parties.splice(${i},1);renderPartyList();">×</button>`;
        c.appendChild(row);
    });
}

function addParty(){
    parties.push({name:'Partido '+(parties.length+1),votes:100000,color:PC[parties.length%PC.length]});
    renderPartyList();
}

document.querySelectorAll('.mtab').forEach(tab=>{
    tab.addEventListener('click',()=>{
        document.querySelectorAll('.mtab').forEach(t=>t.classList.remove('active'));
        tab.classList.add('active');
        selectedMethod=tab.dataset.method;
        document.getElementById('method-desc').textContent=METHOD_DESC[selectedMethod];
    });
});

function calcularDhondt(){
    const seats=parseInt(document.getElementById('dhondt-seats').value)||350;
    const thr=parseFloat(document.getElementById('dhondt-threshold').value)||0;
    const nombre=document.getElementById('dhondt-nombre').value||'Elección';
    const tv=parties.reduce((s,p)=>s+p.votes,0);
    const filtered=parties.filter(p=>(p.votes/tv*100)>=thr&&p.votes>0);
    if(!filtered.length)return;
    const oa=[];
    let sa=selectedMethod==='hare'?calcHare(filtered,seats,oa,tv):calcDivisor(filtered,seats,oa,selectedMethod);
    renderResults(filtered,sa,seats,tv,nombre,oa);
}

function getDivisors(m,n){
    switch(m){
        case'dhondt':return Array.from({length:n+1},(_,i)=>i+1);
        case'saintelague':return Array.from({length:n+1},(_,i)=>2*i+1);
        case'modified':return[1.4,...Array.from({length:n},(_,i)=>2*i+3)];
        case'adams':return Array.from({length:n+1},(_,i)=>i);
        default:return Array.from({length:n+1},(_,i)=>i+1);
    }
}

function calcDivisor(filtered,seats,oa,method){
    const counts=filtered.map(()=>0);
    const divs=getDivisors(method,seats);
    for(let s=0;s<seats;s++){
        let bv=-Infinity,bp=-1;
        filtered.forEach((p,i)=>{const d=divs[counts[i]],v=d===0?Infinity:p.votes/d;if(v>bv){bv=v;bp=i;}});
        counts[bp]++;oa.push(bp);
    }
    return counts;
}

function calcHare(filtered,seats,oa,tv){
    const q=tv/seats;
    const counts=filtered.map(p=>Math.floor(p.votes/q));
    const rem=filtered.map((p,i)=>({idx:i,r:p.votes/q-counts[i]}));
    const remain=seats-counts.reduce((a,b)=>a+b,0);
    rem.sort((a,b)=>b.r-a.r);
    for(let i=0;i<remain;i++)counts[rem[i].idx]++;
    filtered.forEach((_,i)=>{for(let s=0;s<counts[i];s++)oa.push(i);});
    oa.sort((a,b)=>filtered[b].votes-filtered[a].votes);
    return counts;
}

function renderResults(filtered,sa,totalSeats,tv,nombre,oa){
    document.getElementById('dhondt-res').style.display='block';
    document.getElementById('dhondt-empty').style.display='none';
    document.getElementById('dhondt-res-title').textContent=nombre;
    document.getElementById('dhondt-res-method').textContent=document.querySelector('.mtab.active').textContent+' · '+totalSeats+' escaños';
    drawHemiciclo(filtered,sa,totalSeats);
    document.getElementById('hemi-legend').innerHTML=filtered.map((p,i)=>`<span style="display:flex;align-items:center;gap:5px;font-size:11px;color:#8e97ad;"><span style="width:9px;height:9px;border-radius:2px;background:${p.color};display:inline-block;"></span>${p.name} <strong style="color:var(--text);">${sa[i]}</strong></span>`).join('');
    const tbody=document.getElementById('dhondt-tbody');
    const si=filtered.map((_,i)=>i).sort((a,b)=>sa[b]-sa[a]);
    tbody.innerHTML=si.map((i,rank)=>{
        const p=filtered[i],pct=(p.votes/tv*100).toFixed(1),sp=(sa[i]/totalSeats*100).toFixed(1),pr=(sa[i]/totalSeats*100-p.votes/tv*100).toFixed(1),pc=pr>0?'#66bb6a':pr<0?'#ef5350':'#8e97ad';
        return `<tr><td style="color:var(--text3);font-size:10px;">${rank+1}</td><td><span style="display:flex;align-items:center;gap:7px;"><span style="width:9px;height:9px;border-radius:50%;background:${p.color};display:inline-block;flex-shrink:0;"></span><span style="font-weight:600;">${p.name}</span></span></td><td style="font-family:var(--mono);font-size:11px;">${p.votes.toLocaleString('es')}</td><td style="color:var(--text2);">${pct}%</td><td><span class="sn" style="color:${p.color};">${sa[i]}</span></td><td><div class="pbar"><div class="pbtrack"><div class="pbfill" style="width:${sp}%;background:${p.color};"></div></div><span style="font-size:10px;color:var(--text2);">${sp}%</span></div></td><td style="color:${pc};font-size:11px;font-weight:600;">${pr>0?'+':''}${pr}%</td></tr>`;
    }).join('');
    // ─── Orden de aparición con Ver más ───
    const INITIAL_SHOW = 100;
    document.getElementById('orden-aparicion').innerHTML = oa.slice(0,INITIAL_SHOW).map((pi,i)=>{
        const p=filtered[pi];
        return `<div title="Escaño #${i+1} → ${p.name}" style="width:18px;height:18px;border-radius:3px;background:${p.color};opacity:.85;"></div>`;
    }).join('');
    // Extra (oculto hasta "ver más")
    const extraEl = document.getElementById('orden-aparicion-extra');
    const verMasWrap = document.getElementById('orden-ver-mas-wrap');
    extraEl.style.display = 'none';
    if(oa.length > INITIAL_SHOW){
        extraEl.innerHTML = oa.slice(INITIAL_SHOW).map((pi,i)=>{
            const p=filtered[pi];
            return `<div title="Escaño #${INITIAL_SHOW+i+1} → ${p.name}" style="width:18px;height:18px;border-radius:3px;background:${p.color};opacity:.85;"></div>`;
        }).join('');
        verMasWrap.style.display = 'block';
        document.getElementById('orden-ver-mas-btn').textContent = `Ver los ${oa.length - INITIAL_SHOW} escaños restantes ▼`;
    } else {
        verMasWrap.style.display = 'none';
    }
    // ─── Último escaño + siguiente candidatura ───
    const ultimoEl = document.getElementById('dhondt-ultimo-escano');
    if(oa.length > 0){
        const ultimoIdx = oa[oa.length-1];
        const ultimoPartido = filtered[ultimoIdx];
        // Calcular quién obtendría el siguiente escaño y por cuántos votos
        const divisors = getDivisors(selectedMethod, totalSeats+1);
        // Para cada partido, calcular su cociente para el siguiente escaño
        let nextBestVal = -Infinity, nextBestParty = null, nextBestVoteDiff = 0;
        filtered.forEach((p,i) => {
            const nextDiv = divisors[sa[i]]; // divisor para su siguiente escaño
            const val = nextDiv === 0 ? Infinity : p.votes / nextDiv;
            if(val > nextBestVal){ nextBestVal = val; nextBestParty = i; }
        });
        // Qué partido obtuvo el ÚLTIMO escaño
        const lastDiv = divisors[sa[ultimoIdx]-1];
        const lastVal = lastDiv === 0 ? Infinity : ultimoPartido.votes / lastDiv;
        // Diferencia de votos para que el siguiente partido hubiera entrado en vez del último
        if(nextBestParty !== null && nextBestParty !== ultimoIdx){
            const challengerParty = filtered[nextBestParty];
            const challengerNextDiv = divisors[sa[nextBestParty]];
            // cuántos votos necesita el challenger para igualar el cociente del último escaño
            const votosNecesarios = Math.ceil(lastVal * challengerNextDiv);
            const diff = votosNecesarios - challengerParty.votes;
            ultimoEl.style.display = 'block';
            ultimoEl.innerHTML = `
                <div style="display:flex;align-items:center;gap:8px;margin-bottom:7px;">
                    <span style="width:13px;height:13px;border-radius:3px;background:${ultimoPartido.color};display:inline-block;flex-shrink:0;"></span>
                    <span style="font-weight:700;">Último escaño (#${totalSeats}):</span>
                    <span style="color:${ultimoPartido.color};font-weight:700;">${ultimoPartido.name}</span>
                </div>
                <div style="display:flex;align-items:center;gap:8px;">
                    <span style="width:13px;height:13px;border-radius:3px;background:${challengerParty.color};display:inline-block;flex-shrink:0;"></span>
                    La siguiente candidatura en obtener representación sería
                    <strong style="color:${challengerParty.color};">${challengerParty.name}</strong>
                    en lugar de
                    <strong style="color:${ultimoPartido.color};">${ultimoPartido.name}</strong>
                    por <strong>${Math.abs(diff).toLocaleString('es')}</strong> voto${Math.abs(diff)!==1?'s':''}.
                </div>`;
        } else {
            ultimoEl.style.display = 'block';
            ultimoEl.innerHTML = `<span style="width:12px;height:12px;border-radius:3px;background:${ultimoPartido.color};display:inline-block;vertical-align:middle;margin-right:6px;"></span><strong>Último escaño (#${totalSeats}):</strong> <span style="color:${ultimoPartido.color};font-weight:700;">${ultimoPartido.name}</span>`;
        }
    } else {
        ultimoEl.style.display = 'none';
    }
}

function verMasOrden(){
    const extra = document.getElementById('orden-aparicion-extra');
    const btn = document.getElementById('orden-ver-mas-btn');
    const wrap = document.getElementById('orden-ver-mas-wrap');
    if(extra.style.display === 'none' || !extra.style.display){
        extra.style.display = 'flex';
        btn.textContent = 'Ocultar ▲';
    } else {
        extra.style.display = 'none';
        const total = extra.children.length;
        btn.textContent = `Ver los ${total} escaños restantes ▼`;
    }
}

function drawHemiciclo(filtered,sa,ts){
    const svg=document.getElementById('hemiciclo-svg');
    svg.innerHTML='';
    const cx=190,cy=205,r0=55,dr=30,rows=4;
    const all=[];
    filtered.forEach((p,i)=>{for(let s=0;s<sa[i];s++)all.push(p.color);});
    let si=0;
    for(let row=0;row<rows;row++){
        const r=r0+row*dr,rc=Math.round(ts/rows),as=Math.PI/rc,ds=Math.min(9,(Math.PI*r)/rc-2);
        for(let j=0;j<rc&&si<all.length;j++,si++){
            const a=Math.PI+j*as+as/2,x=cx+r*Math.cos(a),y=cy+r*Math.sin(a);
            const c=document.createElementNS('http://www.w3.org/2000/svg','circle');
            c.setAttribute('cx',x.toFixed(1));c.setAttribute('cy',y.toFixed(1));
            c.setAttribute('r',Math.max(2.5,ds/2));c.setAttribute('fill',all[si]);c.setAttribute('opacity','0.92');
            svg.appendChild(c);
        }
    }
}

function exportDhondtCSV(){dlCSV([['Partido','Votos','Escaños']],'escanos.csv');}

// ═══════════════════════════════════════════
//  ENCUESTAS
// ═══════════════════════════════════════════
const LESSONS=[
    {title:'Qué es el margen de error y por qué importa',content:`<p>Toda encuesta tiene un <strong>margen de error</strong>, habitualmente ±2-3 puntos porcentuales. Si el PP tiene el 32%, la cifra real podría estar entre el 29% y el 35%.</p><div class="hbox">💡 Si dos partidos están dentro del margen de error, técnicamente están <em>empatados</em>, aunque los titulares digan lo contrario.</div><p>El margen depende del tamaño de la muestra: con 1.000 encuestados, ±3,1%. Con 4.000, ±1,6%.</p><div class="wbox">⚠️ El margen de error solo aplica al error de muestreo. El sesgo de respuesta o el voto oculto son errores no cuantificados.</div>`},
    {title:'Cómo leer tendencias, no solo datos puntuales',content:`<p>Una encuesta es una fotografía instantánea. Lo que importa es la <strong>tendencia</strong>: la dirección en que se mueven los datos a lo largo del tiempo.</p><div class="hbox">📈 Si un partido lleva 3 encuestas seguidas subiendo 1 punto, la señal es clara aunque ningún salto sea estadísticamente significativo.</div><div class="wbox">⚠️ Una sola encuesta que se aleja del resto probablemente es un outlier. Espera confirmación.</div>`},
    {title:'El sesgo del encuestador y el voto oculto',content:`<p>Las encuestadoras tienen metodologías distintas que producen resultados sistemáticamente diferentes.</p><div class="hbox">🔍 Si hay diferencia constante de 3-4 puntos entre casas para el mismo partido, es el "sesgo de casa".</div><p>El <strong>voto oculto</strong> es especialmente relevante en España: partidos con estigma social suelen estar infravalorados.</p>`},
    {title:'Escenarios de gobierno: del % al pacto',content:`<p>El objetivo final no son los porcentajes, sino los <strong>escaños</strong> y las <strong>mayorías posibles</strong>. La ley D'Hondt distorsiona la proporcionalidad.</p><div class="hbox">🏛️ Con la misma cuota de voto, un partido puede obtener más o menos escaños según su distribución geográfica.</div><div class="wbox">⚠️ Las proyecciones de escaños tienen errores mayores. Una variación de 1 punto puede suponer 5-10 escaños.</div>`},
    {title:'Cómo detectar una encuesta manipulada',content:`<p>Existen encuestas publicadas con fines propagandísticos.</p><div class="hbox">🚩 Red flags: encuestadora desconocida, sin ficha técnica, muestra &lt;400, cliente con interés político claro, solo se distribuye por redes sociales.</div><p>Una ficha técnica completa incluye: empresa, cliente, fechas de campo, ámbito, universo, tamaño de muestra, margen de error y método de muestreo.</p>`},
];
const GLOSARIO=[
    {term:'Margen de error',def:'Incertidumbre estadística de la muestra'},
    {term:'Voto oculto',def:'Votos no confesados por estigma social'},
    {term:'Recuerdo de voto',def:'Ajuste por voto declarado en elección anterior'},
    {term:'Fecha de campo',def:'Días en que se realizaron las entrevistas'},
    {term:'Universo',def:'Población total representada por la muestra'},
    {term:'Ponderación',def:'Ajuste para representar mejor la población'},
    {term:'Outlier',def:'Encuesta muy alejada del promedio del resto'},
    {term:'Agregador',def:'Promedio ponderado de varias encuestas'},
];
// ═══════════════════════════════════════════
//  CALCULADORA TABS (PACTÓMETRO)
// ═══════════════════════════════════════════
function switchCalcTab(tab, btn){
    document.querySelectorAll('.calc-subpanel').forEach(p=>p.style.display='none');
    document.querySelectorAll('.calc-subtab').forEach(b=>{b.classList.remove('active');b.classList.add('btn-g');});
    const el=document.getElementById('ctab-'+tab);
    if(el) el.style.display='';
    if(btn){btn.classList.add('active');btn.classList.remove('btn-g');}
    if(tab==='pactometro') renderPactometro();
}

const PACTO_PRESETS = {
    cyl: {
        nombre:'Castilla y León 2022', mayoria:41, candidato:'Alfonso Fdez. Mañueco',
        partidos:[
            {nombre:'PP', escanos:31, color:'#0055A7', voto:'si'},
            {nombre:'PSOE', escanos:28, color:'#ED1C24', voto:'no'},
            {nombre:'VOX', escanos:13, color:'#5ac035', voto:''},
            {nombre:'UPL', escanos:1, color:'#9169F4', voto:''},
            {nombre:'SORIA YA!', escanos:3, color:'#1a1a1a', voto:''},
            {nombre:'XAV (Cs)', escanos:1, color:'#f5821f', voto:''},
            {nombre:'PODEMOS', escanos:3, color:'#9169F4', voto:''},
        ]
    }
};
let pactoPartidos = [];

function loadPactoPreset(key='cyl'){
    const p = PACTO_PRESETS[key];
    if(document.getElementById('pacto-nombre')) document.getElementById('pacto-nombre').value = p.nombre;
    if(document.getElementById('pacto-mayoria')) document.getElementById('pacto-mayoria').value = p.mayoria;
    if(document.getElementById('pacto-candidato')) document.getElementById('pacto-candidato').value = p.candidato;
    pactoPartidos = p.partidos.map(x=>Object.assign({},x));
    renderPactometro();
}

function addPactoParty(){
    pactoPartidos.push({nombre:'Nuevo partido', escanos:1, color:'#888888', voto:''});
    renderPactometro();
}

function renderPactometro(){
    const mayoria = parseInt(document.getElementById('pacto-mayoria')?.value)||41;
    const candidato = document.getElementById('pacto-candidato')?.value||'';
    const ml = document.getElementById('pacto-mayoria-label');
    if(ml) ml.textContent = 'Mayoría absoluta ('+mayoria+')';

    const pl = document.getElementById('pacto-party-list');
    if(pl) pl.innerHTML = pactoPartidos.map((p,i)=>`
        <div style="display:flex;gap:5px;align-items:center;margin-bottom:7px;flex-wrap:wrap;">
            <input type="color" value="${p.color}" oninput="pactoPartidos[${i}].color=this.value;renderPactometro()" style="width:28px;height:28px;border:none;background:none;cursor:pointer;padding:0;flex-shrink:0;">
            <input class="if" value="${p.nombre}" oninput="pactoPartidos[${i}].nombre=this.value;renderPactometro()" style="flex:2;min-width:80px;padding:5px 7px;font-size:11px;" placeholder="Partido">
            <input class="if" type="number" value="${p.escanos}" oninput="pactoPartidos[${i}].escanos=+this.value;renderPactometro()" style="width:50px;padding:5px 7px;font-size:11px;" title="Escaños">
            <select oninput="pactoPartidos[${i}].voto=this.value;renderPactometro()" style="background:var(--surface);color:var(--text);border:1px solid var(--border2);border-radius:7px;padding:5px 6px;font-size:11px;cursor:pointer;">
                <option value="" ${p.voto===''?'selected':''}>— Sin voto</option>
                <option value="si" ${p.voto==='si'?'selected':''}>✅ Sí</option>
                <option value="no" ${p.voto==='no'?'selected':''}>❌ No</option>
                <option value="abst" ${p.voto==='abst'?'selected':''}>⬜ Abstención</option>
            </select>
            <button onclick="pactoPartidos.splice(${i},1);renderPactometro()" style="background:none;border:none;color:var(--text3);cursor:pointer;font-size:14px;padding:2px 5px;">×</button>
        </div>`).join('');

    let totalSi=0,totalNo=0,totalAbst=0,totalSinVoto=0,totalEscanos=0;
    pactoPartidos.forEach(p=>{
        const e=parseInt(p.escanos)||0; totalEscanos+=e;
        if(p.voto==='si') totalSi+=e;
        else if(p.voto==='no') totalNo+=e;
        else if(p.voto==='abst') totalAbst+=e;
        else totalSinVoto+=e;
    });

    const siEl=document.getElementById('pacto-si-count'); if(siEl) siEl.textContent=totalSi;
    const noEl=document.getElementById('pacto-no-count'); if(noEl) noEl.textContent=totalNo;

    const total = Math.max(totalEscanos, mayoria*2, 1);
    const pSi=(totalSi/total*100).toFixed(1), pAbst=(totalAbst/total*100).toFixed(1);
    const pMarker=(mayoria/total*100).toFixed(1);
    const bsi=document.getElementById('pacto-bar-si'); if(bsi) bsi.style.width=pSi+'%';
    const bab=document.getElementById('pacto-bar-abst'); if(bab) bab.style.width=pAbst+'%';
    const bno=document.getElementById('pacto-bar-no'); if(bno) bno.style.width=(100-parseFloat(pSi)-parseFloat(pAbst))+'%';
    const bmk=document.getElementById('pacto-bar-marker'); if(bmk) bmk.style.left=pMarker+'%';

    const cname = candidato||'El candidato/a';
    const candLabel=document.getElementById('pacto-candidato-label');
    const resultMsg=document.getElementById('pacto-resultado-msg');
    let msg='',bg='',color='';
    if(totalSi>=mayoria){
        msg=`<strong>${cname}</strong> sí lograría ser presidente/a en la <strong>primera votación</strong> ✅`;
        bg='rgba(46,160,67,.15)';color='#4caf50';
    } else if(totalSi>totalNo && totalSinVoto===0){
        msg=`<strong>${cname}</strong> no lograría la mayoría absoluta pero <strong>sí en la segunda votación</strong> si consigue más síes que noes 🟡`;
        bg='rgba(227,179,65,.15)';color='#e3b341';
    } else if(totalSi>totalNo){
        msg=`<strong>${cname}</strong> <strong>no sería presidente/a</strong> en primera votación pero podría en segunda si más partidos se definen 🟡`;
        bg='rgba(227,179,65,.15)';color='#e3b341';
    } else {
        msg=`<strong>${cname}</strong> <strong>no sería presidente/a</strong> en la primera votación ni en la segunda votación ❌`;
        bg='rgba(239,83,80,.15)';color='#ef5350';
    }
    if(candLabel) candLabel.textContent='¿Logrará '+cname+' la investidura?';
    if(resultMsg){resultMsg.innerHTML=msg;resultMsg.style.background=bg;resultMsg.style.color=color;resultMsg.style.border='1px solid '+color+'44';}

    const detail=document.getElementById('pacto-party-detail');
    if(detail) detail.innerHTML=`<div style="margin-top:10px;">`+pactoPartidos.map(p=>{
        const e=parseInt(p.escanos)||0;
        const icons={'si':'✅ SÍ','no':'❌ NO','abst':'⬜ ABSTENCIÓN','':'— Sin voto'};
        const vcolor={'si':'#4caf50','no':'#ef5350','abst':'#e3b341','':'var(--text3)'};
        return `<div style="display:flex;align-items:center;justify-content:space-between;padding:7px 0;border-bottom:1px solid var(--border);">
            <div style="display:flex;align-items:center;gap:8px;">
                <span style="width:10px;height:10px;border-radius:2px;background:${p.color};display:inline-block;flex-shrink:0;"></span>
                <span style="font-size:12px;font-weight:600;">${p.nombre}</span>
                <span style="font-size:11px;color:var(--text3);">(${e} esc.)</span>
            </div>
            <span style="font-size:11px;font-weight:700;color:${vcolor[p.voto]||'var(--text3)'};">${icons[p.voto]||'— Sin voto'}</span>
        </div>`;
    }).join('')+`</div>`;
}

// ═══════════════════════════════════════════
//  SIMULADOR DE TENDENCIAS MULTI-ELECCIÓN
// ═══════════════════════════════════════════
const TREND_CONFIGS = {
    generales:{title:'Elecciones Generales',partidos:[{key:'pp',label:'PP',color:'#0055A7'},{key:'psoe',label:'PSOE',color:'#ED1C24'},{key:'vox',label:'VOX',color:'#5ac035'},{key:'sumar',label:'SUMAR',color:'#E91E8C'},{key:'erc',label:'ERC',color:'#F3B217'},{key:'junts',label:'JUNTS',color:'#40E0D0'},{key:'bildu',label:'BILDU',color:'#03cfb5'},{key:'pnv',label:'PNV',color:'#009526'},{key:'bng',label:'BNG',color:'#73B1E6'},{key:'cca',label:'CCA',color:'#37bbff'},{key:'upn',label:'UPN',color:'#c00723'}],defaults:[{date:'2026-01-10',pp:34,psoe:28,vox:12,sumar:6,erc:3,junts:3,bildu:2,pnv:1,bng:1,cca:1,upn:1},{date:'2026-02-15',pp:33,psoe:29,vox:11,sumar:7,erc:3,junts:3,bildu:2,pnv:1,bng:1,cca:1,upn:1},{date:'2026-03-20',pp:35,psoe:27,vox:10,sumar:7,erc:3,junts:3,bildu:2,pnv:1,bng:1,cca:1,upn:1}]},
    europeas:{title:'Elecciones Europeas',partidos:[{key:'pp',label:'PP',color:'#0055A7'},{key:'psoe',label:'PSOE',color:'#ED1C24'},{key:'vox',label:'VOX',color:'#5ac035'},{key:'ar',label:'AR',color:'#E91E8C'},{key:'sumar',label:'SUMAR',color:'#c040af'},{key:'salf',label:'SE/SALF',color:'#f5821f'},{key:'podemos',label:'PODEMOS',color:'#9169F4'},{key:'junts',label:'JUNTS',color:'#40E0D0'},{key:'ceus',label:'CEUS',color:'#F3B217'}],defaults:[{date:'2026-01-10',pp:33,psoe:29,vox:10,ar:5,sumar:4,salf:3,podemos:3,junts:2,ceus:2},{date:'2026-02-15',pp:34,psoe:28,vox:9,ar:6,sumar:4,salf:3,podemos:3,junts:2,ceus:2},{date:'2026-03-20',pp:35,psoe:27,vox:9,ar:6,sumar:4,salf:3,podemos:3,junts:2,ceus:2}]},
    galicia:{title:'Galicia',partidos:[{key:'pp',label:'PP',color:'#0055A7'},{key:'bng',label:'BNG',color:'#73B1E6'},{key:'psoe',label:'PSOE',color:'#ED1C24'},{key:'do',label:'DO',color:'#f5821f'},{key:'vox',label:'VOX',color:'#5ac035'},{key:'sumar',label:'SUMAR',color:'#E91E8C'}],defaults:[{date:'2026-01-10',pp:47,bng:25,psoe:13,do:5,vox:4,sumar:2},{date:'2026-02-15',pp:46,bng:26,psoe:13,do:5,vox:4,sumar:2}]},
    asturias:{title:'Asturias',partidos:[{key:'psoe',label:'PSOE',color:'#ED1C24'},{key:'pp',label:'PP',color:'#0055A7'},{key:'vox',label:'VOX',color:'#5ac035'},{key:'iu',label:'IU',color:'#b22222'},{key:'podemos',label:'PODEMOS',color:'#9169F4'},{key:'fa',label:'FA',color:'#003366'}],defaults:[{date:'2026-01-10',psoe:36,pp:32,vox:9,iu:5,podemos:4,fa:4},{date:'2026-02-15',psoe:37,pp:31,vox:8,iu:5,podemos:4,fa:4}]},
    cantabria:{title:'Cantabria',partidos:[{key:'pp',label:'PP',color:'#0055A7'},{key:'psoe',label:'PSOE',color:'#ED1C24'},{key:'prc',label:'PRC',color:'#e67e22'},{key:'vox',label:'VOX',color:'#5ac035'}],defaults:[{date:'2026-01-10',pp:38,psoe:18,prc:25,vox:10},{date:'2026-02-15',pp:39,psoe:17,prc:24,vox:9}]},
    paisvasco:{title:'País Vasco',partidos:[{key:'pnv',label:'PNV',color:'#009526'},{key:'bildu',label:'EH BILDU',color:'#03cfb5'},{key:'psoe',label:'PSOE',color:'#ED1C24'},{key:'pp',label:'PP',color:'#0055A7'},{key:'sumar',label:'SUMAR',color:'#E91E8C'},{key:'vox',label:'VOX',color:'#5ac035'}],defaults:[{date:'2026-01-10',pnv:33,bildu:30,psoe:12,pp:8,sumar:5,vox:3},{date:'2026-02-15',pnv:32,bildu:31,psoe:12,pp:8,sumar:5,vox:3}]},
    navarra:{title:'Navarra',partidos:[{key:'upn',label:'UPN',color:'#c00723'},{key:'psoe',label:'PSOE',color:'#ED1C24'},{key:'bildu',label:'EH BILDU',color:'#03cfb5'},{key:'geroa',label:'GEROA BAI',color:'#2ecc71'},{key:'pp',label:'PP',color:'#0055A7'},{key:'podemos',label:'PODEMOS',color:'#9169F4'},{key:'vox',label:'VOX',color:'#5ac035'}],defaults:[{date:'2026-01-10',upn:20,psoe:18,bildu:15,geroa:12,pp:10,podemos:6,vox:5},{date:'2026-02-15',upn:20,psoe:18,bildu:16,geroa:11,pp:10,podemos:5,vox:5}]},
    aragon:{title:'Aragón',partidos:[{key:'pp',label:'PP',color:'#0055A7'},{key:'psoe',label:'PSOE',color:'#ED1C24'},{key:'vox',label:'VOX',color:'#5ac035'},{key:'cha',label:'CHA',color:'#e67e22'},{key:'ae',label:'AE',color:'#9169F4'},{key:'iu',label:'IU',color:'#b22222'}],defaults:[{date:'2026-01-10',pp:40,psoe:24,vox:12,cha:5,ae:4,iu:3},{date:'2026-02-15',pp:41,psoe:23,vox:11,cha:5,ae:4,iu:3}]},
    cataluna:{title:'Cataluña',partidos:[{key:'psoe',label:'PSC/PSOE',color:'#ED1C24'},{key:'junts',label:'JUNTS',color:'#40E0D0'},{key:'erc',label:'ERC',color:'#F3B217'},{key:'pp',label:'PP',color:'#0055A7'},{key:'vox',label:'VOX',color:'#5ac035'},{key:'sumar',label:'SUMAR',color:'#E91E8C'},{key:'cup',label:'CUP',color:'#111'},{key:'ac',label:'AC',color:'#9169F4'}],defaults:[{date:'2026-01-10',psoe:28,junts:18,erc:12,pp:11,vox:7,sumar:5,cup:4,ac:3},{date:'2026-02-15',psoe:29,junts:17,erc:12,pp:11,vox:6,sumar:5,cup:4,ac:3}]},
    baleares:{title:'Baleares',partidos:[{key:'pp',label:'PP',color:'#0055A7'},{key:'psoe',label:'PSOE',color:'#ED1C24'},{key:'vox',label:'VOX',color:'#5ac035'},{key:'mes',label:'MÉS',color:'#2ecc71'},{key:'mxme',label:'MXME',color:'#27ae60'},{key:'podemos',label:'PODEMOS',color:'#9169F4'},{key:'saunio',label:'SA UNIÓ',color:'#e67e22'}],defaults:[{date:'2026-01-10',pp:35,psoe:25,vox:10,mes:8,mxme:4,podemos:5,saunio:4},{date:'2026-02-15',pp:36,psoe:24,vox:9,mes:8,mxme:4,podemos:5,saunio:4}]},
    canarias:{title:'Canarias',partidos:[{key:'psoe',label:'PSOE',color:'#ED1C24'},{key:'cca',label:'CCA',color:'#37bbff'},{key:'pp',label:'PP',color:'#0055A7'},{key:'nca',label:'NCA',color:'#2ecc71'},{key:'vox',label:'VOX',color:'#5ac035'},{key:'asg',label:'ASG',color:'#f39c12'},{key:'ahi',label:'AHI',color:'#e74c3c'}],defaults:[{date:'2026-01-10',psoe:20,cca:22,pp:17,nca:7,vox:5,asg:3,ahi:2},{date:'2026-02-15',psoe:20,cca:23,pp:17,nca:7,vox:5,asg:3,ahi:2}]},
    ceuta:{title:'Ceuta',partidos:[{key:'pp',label:'PP',color:'#0055A7'},{key:'psoe',label:'PSOE',color:'#ED1C24'},{key:'vox',label:'VOX',color:'#5ac035'},{key:'mdyc',label:'MDYC',color:'#2ecc71'},{key:'ceutaya',label:'CEUTA YA!',color:'#f39c12'}],defaults:[{date:'2026-01-10',pp:34,psoe:22,vox:12,mdyc:8,ceutaya:5},{date:'2026-02-15',pp:35,psoe:21,vox:11,mdyc:8,ceutaya:5}]},
    melilla:{title:'Melilla',partidos:[{key:'pp',label:'PP',color:'#0055A7'},{key:'cpm',label:'CPM',color:'#2ecc71'},{key:'psoe',label:'PSOE',color:'#ED1C24'},{key:'vox',label:'VOX',color:'#5ac035'},{key:'somos',label:'SOMOS MELILLA',color:'#9169F4'}],defaults:[{date:'2026-01-10',pp:33,cpm:20,psoe:18,vox:12,somos:6},{date:'2026-02-15',pp:34,cpm:19,psoe:18,vox:11,somos:6}]},
    castillaleon:{title:'Castilla y León',partidos:[{key:'pp',label:'PP',color:'#0055A7'},{key:'psoe',label:'PSOE',color:'#ED1C24'},{key:'vox',label:'VOX',color:'#5ac035'},{key:'upl',label:'UPL',color:'#9169F4'},{key:'soriaya',label:'SORIA YA!',color:'#1a1a1a'},{key:'xav',label:'XAV',color:'#f5821f'}],defaults:[{date:'2026-01-10',pp:36,psoe:28,vox:14,upl:2,soriaya:4,xav:2},{date:'2026-02-15',pp:35,psoe:28,vox:13,upl:2,soriaya:4,xav:2}]},
    larioja:{title:'La Rioja',partidos:[{key:'pp',label:'PP',color:'#0055A7'},{key:'psoe',label:'PSOE',color:'#ED1C24'},{key:'vox',label:'VOX',color:'#5ac035'},{key:'podemos',label:'PODEMOS',color:'#9169F4'}],defaults:[{date:'2026-01-10',pp:45,psoe:28,vox:14,podemos:5},{date:'2026-02-15',pp:46,psoe:27,vox:13,podemos:5}]},
    madrid:{title:'Madrid',partidos:[{key:'pp',label:'PP',color:'#0055A7'},{key:'masmadrid',label:'MÁS MADRID',color:'#2ecc71'},{key:'psoe',label:'PSOE',color:'#ED1C24'},{key:'vox',label:'VOX',color:'#5ac035'}],defaults:[{date:'2026-01-10',pp:47,masmadrid:19,psoe:15,vox:12},{date:'2026-02-15',pp:48,masmadrid:18,psoe:15,vox:11}]},
    extremadura:{title:'Extremadura',partidos:[{key:'pp',label:'PP',color:'#0055A7'},{key:'psoe',label:'PSOE',color:'#ED1C24'},{key:'vox',label:'VOX',color:'#5ac035'},{key:'podemos',label:'PODEMOS',color:'#9169F4'}],defaults:[{date:'2026-01-10',pp:43,psoe:32,vox:12,podemos:5},{date:'2026-02-15',pp:44,psoe:31,vox:11,podemos:5}]},
    castillamancha:{title:'Castilla-La Mancha',partidos:[{key:'psoe',label:'PSOE',color:'#ED1C24'},{key:'pp',label:'PP',color:'#0055A7'},{key:'vox',label:'VOX',color:'#5ac035'}],defaults:[{date:'2026-01-10',psoe:45,pp:34,vox:13},{date:'2026-02-15',psoe:44,pp:35,vox:12}]},
    valenciana:{title:'Com. Valenciana',partidos:[{key:'pp',label:'PP',color:'#0055A7'},{key:'psoe',label:'PSOE',color:'#ED1C24'},{key:'compromis',label:'COMPROMÍS',color:'#f5821f'},{key:'vox',label:'VOX',color:'#5ac035'}],defaults:[{date:'2026-01-10',pp:36,psoe:25,compromis:12,vox:11},{date:'2026-02-15',pp:37,psoe:24,compromis:12,vox:10}]},
    murcia:{title:'Murcia',partidos:[{key:'pp',label:'PP',color:'#0055A7'},{key:'psoe',label:'PSOE',color:'#ED1C24'},{key:'vox',label:'VOX',color:'#5ac035'},{key:'podemos',label:'PODEMOS',color:'#9169F4'}],defaults:[{date:'2026-01-10',pp:43,psoe:24,vox:14,podemos:5},{date:'2026-02-15',pp:44,psoe:23,vox:13,podemos:5}]},
    andalucia:{title:'Andalucía',partidos:[{key:'pp',label:'PP',color:'#0055A7'},{key:'psoe',label:'PSOE',color:'#ED1C24'},{key:'vox',label:'VOX',color:'#5ac035'},{key:'porandalucia',label:'POR AND.',color:'#9169F4'},{key:'adelante',label:'ADELANTE AND.',color:'#b22222'}],defaults:[{date:'2026-01-10',pp:43,psoe:25,vox:14,porandalucia:5,adelante:4},{date:'2026-02-15',pp:44,psoe:24,vox:13,porandalucia:5,adelante:4}]},
};
let currentTrendSim='generales';
let trendPolls=JSON.parse(JSON.stringify(TREND_CONFIGS.generales.defaults));
let trendChart=null;

function switchTrendSim(key){
    currentTrendSim=key;
    const cfg=TREND_CONFIGS[key];
    trendPolls=JSON.parse(JSON.stringify(cfg.defaults));
    const t=document.getElementById('trend-sim-title');
    if(t) t.textContent='Simulador de tendencias — '+cfg.title;
    renderTrendPolls(); calcularTendencia();
}

function renderLessons(){
    const c=document.getElementById('lessons-container');
    if(c.innerHTML)return;
    c.innerHTML=LESSONS.map((l,i)=>`<div class="lcard" id="lc-${i}"><div class="lhdr" onclick="toggleLesson(${i})"><div class="lnum">${i+1}</div><div class="ltxt">${l.title}</div><div class="lchev">▼</div></div><div class="lbody">${l.content}</div></div>`).join('');
    document.getElementById('glosario-list').innerHTML=GLOSARIO.map(g=>`<div style="display:flex;justify-content:space-between;align-items:flex-start;padding:7px 0;border-bottom:1px solid var(--border);"><span style="font-size:12px;font-weight:600;color:var(--accent);">${g.term}</span><span style="font-size:11px;color:var(--text2);text-align:right;max-width:60%;">${g.def}</span></div>`).join('');
    renderTrendPolls();
}
function toggleLesson(i){document.getElementById('lc-'+i).classList.toggle('open');}

function renderTrendPolls(){
    const cfg=TREND_CONFIGS[currentTrendSim]; const partidos=cfg.partidos;
    document.getElementById('trend-polls-list').innerHTML=trendPolls.map((p,i)=>`
        <div style="display:flex;gap:4px;margin-bottom:7px;align-items:center;flex-wrap:wrap;">
            <input class="if" type="date" value="${p.date}" oninput="trendPolls[${i}].date=this.value" style="width:110px;padding:5px 7px;font-size:10px;">
            ${partidos.map(pd=>`<input class="if" type="number" placeholder="${pd.label}" value="${p[pd.key]||''}" oninput="trendPolls[${i}]['${pd.key}']=+this.value" style="width:44px;padding:5px 4px;font-size:10px;" title="${pd.label}%">`).join('')}
            <button onclick="trendPolls.splice(${i},1);renderTrendPolls();" style="background:none;border:none;color:var(--text3);cursor:pointer;font-size:13px;">×</button>
        </div>`).join('');
}

function addTrendPoll(){ AUTH.requireAuth(_addTrendPollImpl, 'Inicia sesión para añadir encuestas.'); }
function _addTrendPollImpl(){
    const cfg=TREND_CONFIGS[currentTrendSim];
    const newPoll={date:new Date().toISOString().split('T')[0]};
    cfg.partidos.forEach(p=>newPoll[p.key]=0);
    trendPolls.push(newPoll); renderTrendPolls();
}

function calcularTendencia(){
    const cfg=TREND_CONFIGS[currentTrendSim];
    const sorted=[...trendPolls].sort((a,b)=>new Date(a.date)-new Date(b.date));
    if(trendChart)trendChart.destroy();
    const datasets=cfg.partidos.map(pd=>({label:pd.label,data:sorted.map(p=>p[pd.key]||0),borderColor:pd.color,backgroundColor:pd.color+'22',tension:.35,pointRadius:4,borderWidth:2}));
    trendChart=new Chart(document.getElementById('trend-chart').getContext('2d'),{
        type:'line',
        data:{labels:sorted.map(p=>p.date.slice(5)),datasets},
        options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:true,labels:{color:'#8e97ad',font:{family:'Sora',size:10},boxWidth:9,padding:8}},tooltip:{backgroundColor:'#1c2333',borderColor:'rgba(255,255,255,.1)',borderWidth:1}},scales:{x:{grid:{color:'rgba(255,255,255,.04)'},ticks:{color:'#5c6478',font:{family:'Sora',size:9}},border:{display:false}},y:{grid:{color:'rgba(255,255,255,.04)'},ticks:{color:'#5c6478',font:{family:'Sora',size:9},callback:v=>v+'%'},border:{display:false}}}}
    });
}

// ═══════════════════════════════════════════
//  RANKING AUTONÓMICO
// ═══════════════════════════════════════════
const RANKING_DATA = [
  { nombre:"Juan José Imbroda",        region:"Melilla",             partido:"PP",   pct:52.67,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-0b0kBxYbO63tMNGFILMsADIHIw_3OwjxwA&s" },
  { nombre:"Alfonso Rueda",             region:"Galicia",             partido:"PP",   pct:47.39,
    img:"https://www.elplural.com/uploads/s1/16/98/93/6/el-lider-del-pp-en-galicia-alfonso-rueda.jpeg" },
  { nombre:"Isabel Díaz Ayuso",         region:"Madrid",              partido:"PP",   pct:47.32,
    img:"https://www.telemadrid.es/2023/07/26/embed/_2581981785_42176355_1920x1080.png" },
  { nombre:"Gonzalo Capellán",          region:"La Rioja",            partido:"PP",   pct:45.38,
    img:"https://www.eldiadelarioja.es/media/IMG/2023/D1592817-A6D1-46F3-53D7CCE831DE67BC.JPG" },
  { nombre:"Emiliano García-Page",      region:"Castilla-La Mancha",  partido:"PSOE", pct:45.04,
    img:"https://www.eldigitaldealbacete.com/wp-content/uploads/2024/12/53580491567_1df408f949_o.jpg" },
  { nombre:"María Guardiola",           region:"Extremadura",         partido:"PP",   pct:43.12,
    img:"https://imagenes.elpais.com/resizer/v2/https%3A%2F%2Fcloudfront-eu-central-1.images.arcpublishing.com%2Fprisa%2FXX36RO6URRHBZBTYH53OEFR4ZY.jpg?auth=ef1ea719d234e3ba21e20d1fdaa324d6e4b8d9d1651c780ff638b0e4a328140a&width=1960&height=1103&smart=true" },
  { nombre:"Juan M. Moreno Bonilla",    region:"Andalucía",           partido:"PP",   pct:43.11,
    img:"https://fotografias-2.larazon.es/clipping/cmsimages02/2024/09/27/BA0D06C9-8130-481C-A08D-64371EF431EC/98.jpg?crop=5520,3106,x0,y267&width=1900&height=1069&optimize=low&format=webply" },
  { nombre:"Fernando López Miras",      region:"Murcia",              partido:"PP",   pct:42.79,
    img:"https://img2.rtve.es/n/2453316?w=1600" },
  { nombre:"Adrián Barbón",             region:"Asturias",            partido:"PSOE", pct:36.49,
    img:"https://img.lavdg.com/sc/S3unwrrUs8VLur9d7AzbhhW7IAM=/1280x/2018/10/12/00121539361262811565818/Foto/efe_20181012_123833802.jpg" },
  { nombre:"Marga Prohens",             region:"Baleares",            partido:"PP",   pct:35.79,
    img:"https://fotografias-2.larazon.es/clipping/cmsimages02/2023/06/28/F4033D5F-BEB5-41AC-A03B-FCBE42DE868C/popular-marga-prohens-presidenta-baleares_69.jpg?crop=567,319,x0,y0&width=1280&height=720&optimize=low&format=webply" },
  { nombre:"M.ª José Sáenz de Buruaga", region:"Cantabria",           partido:"PP",   pct:35.78,
    img:"https://elmiradordigital.es/wp-content/uploads/2025/05/imagen-17.jpg" },
  { nombre:"Carlos Mazón / Pérez Llorca",region:"Com. Valenciana",    partido:"PP",   pct:35.75,
    img:"https://fotografias.lasexta.com/clipping/cmsimages02/2025/11/12/97337651-0C8F-4000-8C52-B27B5E8D2E68/juanfran-perez-llorca-foto-archivo_103.jpg?crop=904,678,x0,y0&width=1200&height=900&optimize=low&format=webply" },
  { nombre:"Alfonso Fdez. Mañueco",     region:"Castilla y León",     partido:"PP",   pct:35.47,
    img:"https://cadenaser.com/resizer/v2/NHVT7TN3LZEPXE4C6E5K6PFBBU.jpg?auth=b9e4bc6fd8b9d6e20fdb81fe62d9044497d5fb6166cc69583d03c6f5e316e8e9" },
  { nombre:"Imanol Pradales",           region:"País Vasco",          partido:"PNV",  pct:34.82,
    img:"https://image.ondacero.es/clipping/cmsimages02/2024/04/05/649F76B0-2C97-420F-A4B9-22629013DA6B/candidato-pnv-presidencia-pais-vasco-imanol-pradales_103.jpg?crop=1817,1363,x68,y0&width=1200&height=900&optimize=low&format=webply" },
  { nombre:"Juan Jesús Vivas Lara",     region:"Ceuta",               partido:"PP",   pct:34.37,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy2wUsAfzj4eMsMVJyOgpxxCOwZOumwrlakA&s" },
  { nombre:"Jorge Azcón",               region:"Aragón",              partido:"PP",   pct:34.17,
    img:"https://fotografias.antena3.com/clipping/cmsimages01/2026/02/01/E18D07FA-B629-4D22-BCF8-1B52AB3293DE/feijoo-acompana-azcon-ultimos-dias-campana-denuncia-corrupcion-psoe_96.jpg?crop=853,480,x0,y0&width=1200&height=675&optimize=low&format=webply" },
  { nombre:"Salvador Illa",             region:"Cataluña",            partido:"PSOE", pct:27.96,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRVWkKOmCfdNHf606g5KXXcao1gtfrcdNECA&s" },
  { nombre:"Fernando Clavijo",          region:"Canarias",            partido:"CCA",  pct:22.08,
    img:"https://img2.rtve.es/i/?w=1200&i=https://img.rtve.es/imagenes/secretario-general-coalicion-canaria-fernando-clavijo/1689152263525.jpg" },
  { nombre:"María Chivite",             region:"Navarra",             partido:"PSOE", pct:20.69,
    img:"https://cadenaser.com/resizer/v2/N5MKZCTU2TETNNPSG3CZ66B2ZA.jpg?auth=b089822e42496f6641136dab4e1cfacc261d1d272358369eb470b57f3d4d04a8" },
].sort((a,b)=>b.pct-a.pct);

const PARTY_COLORS = {
  'PP':   { bg:'rgba(0,48,135,.18)', color:'#4f8ef7', border:'rgba(0,48,135,.4)' },
  'PSOE': { bg:'rgba(192,57,43,.18)', color:'#e74c3c', border:'rgba(192,57,43,.4)' },
  'PNV':  { bg:'rgba(26,82,118,.18)', color:'#5dade2', border:'rgba(26,82,118,.4)' },
  'CCA':  { bg:'rgba(20,143,119,.18)', color:'#1abc9c', border:'rgba(20,143,119,.4)' },
};
function partyStyle(p){
  const c = PARTY_COLORS[p]||{bg:'rgba(100,100,100,.15)',color:'var(--text2)',border:'rgba(100,100,100,.3)'};
  return `background:${c.bg};color:${c.color};border:1px solid ${c.border};`;
}

function getBarColor(pct){
  if(pct >= 45) return 'linear-gradient(90deg,#f5b731,#f09000)';
  if(pct >= 35) return 'linear-gradient(90deg,#4f8ef7,#3060c0)';
  return 'linear-gradient(90deg,#66bb6a,#2e7d32)';
}
function getInitials(nombre){
  return nombre.split(/\s+/).slice(0,2).map(w=>w[0]&&w[0].toUpperCase()).join('');
}

let rankingRendered = false;
function renderRanking(){
  if(rankingRendered) return;
  rankingRendered = true;
  const maxPct = RANKING_DATA[0].pct;

  // ── Mini podio top 3 ──
  const medals = ['gold','silver','bronze'];
  const medalEmoji = ['🥇','🥈','🥉'];
  const top3 = document.getElementById('ranking-top3-preview');
  top3.innerHTML = RANKING_DATA.slice(0,3).map((d,i) => `
    <div class="top3-card pos-${i+1}" style="animation-delay:${i*0.1}s">
      <div class="top3-medal">${medalEmoji[i]}</div>
      <div class="top3-photo ${medals[i]}">
        <img src="${d.img}" alt="${d.nombre}" onerror="this.style.display='none';this.parentElement.innerHTML='<span class=\\'rank-initials\\'>${getInitials(d.nombre)}</span>'">
      </div>
      <div class="top3-name">${d.nombre}</div>
      <div class="top3-region">${d.region}</div>
      <div class="top3-pct ${medals[i]}">${d.pct.toFixed(2)}%</div>
    </div>
  `).join('');

  // ── Lista completa ──
  const list = document.getElementById('ranking-list');
  list.innerHTML = RANKING_DATA.map((d,i) => {
    const posClass = i===0?'gold':i===1?'silver':i===2?'bronze':'normal';
    const posLabel = i===0?'🥇':i===1?'🥈':i===2?'🥉':`${i+1}`;
    const barPct = (d.pct / maxPct * 100).toFixed(1);
    const barColor = getBarColor(d.pct);
    return `
    <div class="rank-row" style="animation-delay:${Math.min(i*0.04,0.8)}s">
      <div class="rank-pos ${posClass}">${posLabel}</div>
      <div class="rank-avatar">
        <img src="${d.img}" alt="${d.nombre}" onerror="this.style.display='none';this.parentElement.innerHTML='<span class=\\'rank-initials\\'>${getInitials(d.nombre)}</span>'">
      </div>
      <div class="rank-info">
        <div class="rank-name">${d.nombre}<span class="rank-party-badge" style="${partyStyle(d.partido)}">${d.partido}</span></div>
        <div class="rank-region">${d.region}</div>
      </div>
      <div class="rank-bar-wrap">
        <div class="rank-bar-track">
          <div class="rank-bar-fill" style="width:${barPct}%;background:${barColor};"></div>
        </div>
        <div class="rank-pct" style="color:${i<3?'var(--gold)':'var(--text2)'}">${d.pct.toFixed(2)}%</div>
      </div>
    </div>`;
  }).join('');

  // Animate bars after a short delay
  setTimeout(()=>{
    list.querySelectorAll('.rank-bar-fill').forEach(el => {
      const w = el.style.width; el.style.width='0'; 
      requestAnimationFrame(()=>{ setTimeout(()=>{el.style.width=w;},20); });
    });
  },150);

  // ── Podio final ──
  const podium = document.getElementById('ranking-podium');
  const order = [RANKING_DATA[1], RANKING_DATA[0], RANKING_DATA[2]]; // 2nd, 1st, 3rd
  const standClass = ['s2','s1','s3'];
  const photoClass = ['p2','p1','p3'];
  const standLabel = ['🥈 2.º','🥇 1.º','🥉 3.º'];
  const pctColor = ['#c0c8d8','#f5b731','#d08050'];
  podium.innerHTML = order.map((d,i) => `
    <div class="podium-block" style="animation:top3In .7s ease ${i*0.15}s both;">
      <div class="podium-photo-wrap">
        <div class="podium-photo ${photoClass[i]}">
          <img src="${d.img}" alt="${d.nombre}" onerror="this.style.display='none';this.parentElement.innerHTML='<span style=\\'font-size:18px;font-weight:700;color:var(--text2);\\'>${getInitials(d.nombre)}</span>'">
        </div>
        <div class="podium-label">
          <div class="podium-pname">${d.nombre}</div>
          <div class="podium-pregion">${d.region}</div>
          <div class="podium-ppct" style="color:${pctColor[i]}">${d.pct.toFixed(2)}%</div>
        </div>
      </div>
      <div class="podium-stand ${standClass[i]}">${standLabel[i]}</div>
    </div>
  `).join('');
}

// ═══════════════════════════════════════════
//  RANKING POR PARTIDOS NACIONALES
// ═══════════════════════════════════════════
const PARTIDOS_DATA = {
  'PP': {
    nombre: 'Partido Popular',
    color: '#1565c0',
    emoji: '🔵',
    colorBg: 'rgba(21,101,192,.18)',
    colorBorder: 'rgba(21,101,192,.4)',
    datos: [
      { region:'Melilla', pct:52.67 },
      { region:'Madrid', pct:47.32 },
      { region:'Galicia', pct:47.39 },
      { region:'La Rioja', pct:45.38 },
      { region:'Extremadura', pct:43.12 },
      { region:'Andalucía', pct:43.11 },
      { region:'Murcia', pct:42.79 },
      { region:'Baleares', pct:35.79 },
      { region:'Cantabria', pct:35.78 },
      { region:'Com. Valenciana', pct:35.75 },
      { region:'Castilla y León', pct:35.47 },
      { region:'Castilla-La Mancha', pct:35.65 },
      { region:'Ceuta', pct:34.37 },
      { region:'Aragón', pct:34.17 },
      { region:'Canarias', pct:20.13 },
      { region:'Asturias', pct:32.61 },
      { region:'Cataluña', pct:10.99 },
      { region:'Navarra', pct:7.28 },
      { region:'País Vasco', pct:9.18 },
    ].sort((a,b)=>b.pct-a.pct)
  },
  'PSOE': {
    nombre: 'PSOE',
    color: '#c0392b',
    emoji: '🔴',
    colorBg: 'rgba(192,57,43,.18)',
    colorBorder: 'rgba(192,57,43,.4)',
    datos: [
      { region:'Castilla-La Mancha', pct:45.04 },
      { region:'Asturias', pct:36.49 },
      { region:'Canarias', pct:32.43 },
      { region:'La Rioja', pct:31.90 },
      { region:'Castilla y León', pct:30.74 },
      { region:'Com. Valenciana', pct:28.70 },
      { region:'Cataluña', pct:27.96 },
      { region:'Extremadura', pct:25.77 },
      { region:'Aragón', pct:24.37 },
      { region:'Ceuta', pct:20.96 },
      { region:'Navarra', pct:20.69 },
      { region:'Cantabria', pct:20.61 },
      { region:'Murcia', pct:25.63 },
      { region:'Andalucía', pct:24.10 },
      { region:'Baleares', pct:26.53 },
      { region:'País Vasco', pct:14.09 },
      { region:'Galicia', pct:14.07 },
      { region:'Madrid', pct:18.17 },
      { region:'Melilla', pct:10.66 },
    ].sort((a,b)=>b.pct-a.pct)
  },
  'VOX': {
    nombre: 'VOX',
    color: '#2e7d32',
    emoji: '🟢',
    colorBg: 'rgba(46,125,50,.18)',
    colorBorder: 'rgba(46,125,50,.4)',
    datos: [
      { region:'Castilla y León', pct:18.92 },
      { region:'Aragón', pct:17.84 },
      { region:'Extremadura', pct:16.90 },
      { region:'Murcia', pct:17.72 },
      { region:'Andalucía', pct:13.47 },
      { region:'Baleares', pct:13.90 },
      { region:'Castilla-La Mancha', pct:12.83 },
      { region:'Com. Valenciana', pct:12.57 },
      { region:'Cantabria', pct:11.08 },
      { region:'Asturias', pct:10.10 },
      { region:'Melilla', pct:9.94 },
      { region:'Cataluña', pct:7.95 },
      { region:'Canarias', pct:7.88 },
      { region:'La Rioja', pct:7.61 },
      { region:'Madrid', pct:7.34 },
      { region:'Navarra', pct:4.30 },
      { region:'Ceuta', pct:20.64 },
      { region:'Galicia', pct:2.27 },
      { region:'País Vasco', pct:2.03 },
    ].sort((a,b)=>b.pct-a.pct)
  },
  'PODEMOS': {
    nombre: 'Podemos',
    color: '#8e5bbf',                  // morado menos intenso
    emoji: '🟣',
    colorBg: 'rgba(142,91,191,.18)',
    colorBorder: 'rgba(142,91,191,.4)',
    datos: [
      { region:'Extremadura', pct:10.27 },
      { region:'La Rioja', pct:5.09 },
      { region:'Navarra', pct:6.09 },
      { region:'Baleares', pct:4.43 },
      { region:'Murcia', pct:4.70 },
      { region:'Madrid', pct:4.76 },
      { region:'Cantabria', pct:4.12 },
      { region:'Castilla-La Mancha', pct:4.16 },
      { region:'Canarias', pct:3.24 },
      { region:'Com. Valenciana', pct:3.57 },
      { region:'Asturias', pct:3.92 },
      { region:'País Vasco', pct:2.23 },
      { region:'Aragón', pct:0.94 },
      { region:'Melilla', pct:0.96 },
      { region:'Castilla y León', pct:0.74 },
      { region:'Ceuta', pct:0.54 },
      { region:'Galicia', pct:0.29 },
    ].sort((a,b)=>b.pct-a.pct)
},
'SUMAR': {
  nombre: 'Sumar',
  color: '#ff0080',
  emoji: '🟠',
  colorBg: 'rgba(255,0,128,.18)',
  colorBorder: 'rgba(255,0,128,.4)',
  datos: [
    { region:'Asturias', pct:7.59 },
    { region:'Andalucía', pct:7.70 },
    { region:'Cataluña', pct:5.83 },
    { region:'País Vasco', pct:3.31 },
    { region:'Aragón', pct:2.96 },
    { region:'Castilla y León', pct:2.23 },
    { region:'Galicia', pct:1.93 },
  ].sort((a,b)=>b.pct-a.pct)
},
'CIUDADANOS': {
  nombre: 'Ciudadanos',
  color: '#e65100',
  emoji: '🟡',
  colorBg: 'rgba(230,81,0,.18)',
  colorBorder: 'rgba(230,81,0,.4)',
  datos: [
    { region:'Madrid', pct:1.56 },
    { region:'Com. Valenciana', pct:1.50 },
    { region:'Cantabria', pct:2.32 },
    { region:'Baleares', pct:1.35 },
    { region:'Murcia', pct:1.53 },
    { region:'Andalucía', pct:3.30 },
    { region:'Castilla-La Mancha', pct:1.00 },
    { region:'Extremadura', pct:0.25 },
    { region:'La Rioja', pct:0.88 },
    { region:'Asturias', pct:0.92 },
    { region:'Ceuta', pct:0.69 },
    { region:'Canarias', pct:0.39 },
    { region:'Navarra', pct:0.39 },
    { region:'Castilla y León', pct:0.34 },
  ].sort((a,b)=>b.pct-a.pct)
},
};

// Colores especiales para ciudadanos (naranja quemado)
PARTIDOS_DATA['CIUDADANOS'].color = '#f57c00';
PARTIDOS_DATA['CIUDADANOS'].colorBg = 'rgba(245,124,0,.18)';
PARTIDOS_DATA['CIUDADANOS'].colorBorder = 'rgba(245,124,0,.4)';

// ═══════ DATOS ELECCIONES GENERALES ═══════
const PARTIDOS_GENERALES = {
  'PP': {
    nombre: 'Partido Popular', color: '#1565c0', emoji: '🔵',
    colorBg: 'rgba(21,101,192,.18)', colorBorder: 'rgba(21,101,192,.4)',
    datos: [
      {region:'Melilla',pct:49.16},{region:'Ceuta',pct:38.77},{region:'La Rioja',pct:45.64},
      {region:'Cantabria',pct:42.08},{region:'Navarra',pct:16.71},{region:'Asturias',pct:35.65},
      {region:'Baleares',pct:35.63},{region:'Extremadura',pct:37.89},{region:'Murcia',pct:41.18},
      {region:'Aragón',pct:36.27},{region:'Canarias',pct:30.44},{region:'País Vasco',pct:11.55},
      {region:'Castilla-La Mancha',pct:38.91},{region:'Galicia',pct:43.58},
      {region:'Castilla y León',pct:41.55},{region:'Com. Valenciana',pct:34.87},
      {region:'Madrid',pct:40.55},{region:'Cataluña',pct:13.37},{region:'Andalucía',pct:36.41}
    ].sort((a,b)=>b.pct-a.pct)
  },
  'PSOE': {
    nombre: 'PSOE', color: '#c0392b', emoji: '🔴',
    colorBg: 'rgba(192,57,43,.18)', colorBorder: 'rgba(192,57,43,.4)',
    datos: [
      {region:'Melilla',pct:25.39},{region:'Ceuta',pct:34.01},{region:'La Rioja',pct:35.68},
      {region:'Cantabria',pct:33.3},{region:'Navarra',pct:27.37},{region:'Asturias',pct:34.34},
      {region:'Baleares',pct:30.16},{region:'Extremadura',pct:39.08},{region:'Murcia',pct:25.3},
      {region:'Aragón',pct:31.12},{region:'Canarias',pct:33.34},{region:'País Vasco',pct:25.27},
      {region:'Castilla-La Mancha',pct:34.16},{region:'Galicia',pct:29.76},
      {region:'Castilla y León',pct:32.34},{region:'Com. Valenciana',pct:32.13},
      {region:'Madrid',pct:27.84},{region:'Cataluña',pct:34.47},{region:'Andalucía',pct:33.48}
    ].sort((a,b)=>b.pct-a.pct)
  },
  'VOX': {
    nombre: 'VOX', color: '#2e7d32', emoji: '🟢',
    colorBg: 'rgba(46,125,50,.18)', colorBorder: 'rgba(46,125,50,.4)',
    datos: [
      {region:'Melilla',pct:15.94},{region:'Ceuta',pct:23.26},{region:'La Rioja',pct:9.77},
      {region:'Cantabria',pct:14.06},{region:'Navarra',pct:5.7},{region:'Asturias',pct:12.49},
      {region:'Baleares',pct:15.21},{region:'Extremadura',pct:13.64},{region:'Murcia',pct:21.81},
      {region:'Aragón',pct:14.62},{region:'Canarias',pct:7.56},{region:'País Vasco',pct:2.64},
      {region:'Castilla-La Mancha',pct:17.77},{region:'Galicia',pct:4.87},
      {region:'Castilla y León',pct:13.78},{region:'Com. Valenciana',pct:15.65},
      {region:'Madrid',pct:14.03},{region:'Cataluña',pct:7.76},{region:'Andalucía',pct:15.32}
    ].sort((a,b)=>b.pct-a.pct)
  },
  'SUMAR': {
    nombre: 'Sumar', color: '#ff0080', emoji: '🟠',
    colorBg: 'rgba(255,0,128,.18)', colorBorder: 'rgba(255,0,128,.4)',
    datos: [
      {region:'Melilla',pct:3.02},{region:'Ceuta',pct:2.46},{region:'La Rioja',pct:6.57},
      {region:'Cantabria',pct:8.49},{region:'Navarra',pct:12.85},{region:'Asturias',pct:14.85},
      {region:'Baleares',pct:16.59},{region:'Extremadura',pct:6.88},{region:'Murcia',pct:9.57},
      {region:'Aragón',pct:12.29},{region:'Canarias',pct:10.55},{region:'País Vasco',pct:11.1},
      {region:'Castilla-La Mancha',pct:7.36},{region:'Galicia',pct:10.92},
      {region:'Castilla y León',pct:7.04},{region:'Com. Valenciana',pct:15.23},
      {region:'Madrid',pct:15.46},{region:'Cataluña',pct:14.04},{region:'Andalucía',pct:11.99}
    ].sort((a,b)=>b.pct-a.pct)
  }
};

// ═══════ DATOS ELECCIONES EUROPEAS ═══════
const PARTIDOS_EUROPEAS = {
  'PP': {
    nombre: 'Partido Popular', color: '#1565c0', emoji: '🔵',
    colorBg: 'rgba(21,101,192,.18)', colorBorder: 'rgba(21,101,192,.4)',
    datos: [
      {region:'Melilla',pct:40.09},{region:'Ceuta',pct:36.53},{region:'La Rioja',pct:44.7},
      {region:'Cantabria',pct:42.72},{region:'Navarra',pct:28.02},{region:'Asturias',pct:36.89},
      {region:'Baleares',pct:35.78},{region:'Extremadura',pct:41.44},{region:'Murcia',pct:42.87},
      {region:'Aragón',pct:37.16},{region:'Canarias',pct:29.32},{region:'País Vasco',pct:11.49},
      {region:'Castilla-La Mancha',pct:41.46},{region:'Galicia',pct:43.62},
      {region:'Castilla y León',pct:44.56},{region:'Com. Valenciana',pct:35.86},
      {region:'Madrid',pct:40.69},{region:'Cataluña',pct:13.78},{region:'Andalucía',pct:37.87}
    ].sort((a,b)=>b.pct-a.pct)
  },
  'PSOE': {
    nombre: 'PSOE', color: '#c0392b', emoji: '🔴',
    colorBg: 'rgba(192,57,43,.18)', colorBorder: 'rgba(192,57,43,.4)',
    datos: [
      {region:'Melilla',pct:33.67},{region:'Ceuta',pct:32.24},{region:'La Rioja',pct:32.58},
      {region:'Cantabria',pct:31.01},{region:'Navarra',pct:28.79},{region:'Asturias',pct:35.08},
      {region:'Baleares',pct:28.9},{region:'Extremadura',pct:36.58},{region:'Murcia',pct:25.03},
      {region:'Aragón',pct:30.18},{region:'Canarias',pct:30.49},{region:'País Vasco',pct:25.93},
      {region:'Castilla-La Mancha',pct:31.68},{region:'Galicia',pct:27.01},
      {region:'Castilla y León',pct:30.44},{region:'Com. Valenciana',pct:31.41},
      {region:'Madrid',pct:28.15},{region:'Cataluña',pct:30.63},{region:'Andalucía',pct:32.16}
    ].sort((a,b)=>b.pct-a.pct)
  },
  'VOX': {
    nombre: 'VOX', color: '#2e7d32', emoji: '🟢',
    colorBg: 'rgba(46,125,50,.18)', colorBorder: 'rgba(46,125,50,.4)',
    datos: [
      {region:'Melilla',pct:14.07},{region:'Ceuta',pct:16.73},{region:'La Rioja',pct:8.79},
      {region:'Cantabria',pct:9.89},{region:'Navarra',pct:6.63},{region:'Asturias',pct:9.93},
      {region:'Baleares',pct:11.2},{region:'Extremadura',pct:9.94},{region:'Murcia',pct:15.86},
      {region:'Aragón',pct:11.53},{region:'Canarias',pct:12},{region:'País Vasco',pct:2.68},
      {region:'Castilla-La Mancha',pct:12.99},{region:'Galicia',pct:4.32},
      {region:'Castilla y León',pct:10.51},{region:'Com. Valenciana',pct:11.51},
      {region:'Madrid',pct:10.72},{region:'Cataluña',pct:6.18},{region:'Andalucía',pct:10.92}
    ].sort((a,b)=>b.pct-a.pct)
  },
  'PODEMOS': {
    nombre: 'Podemos', color: '#8e5bbf', emoji: '🟣',
    colorBg: 'rgba(142,91,191,.18)', colorBorder: 'rgba(142,91,191,.4)',
    datos: [
      {region:'Melilla',pct:1.63},{region:'Ceuta',pct:2.02},{region:'La Rioja',pct:2.32},
      {region:'Cantabria',pct:2.7},{region:'Navarra',pct:3.22},{region:'Asturias',pct:3.78},
      {region:'Baleares',pct:3.14},{region:'Extremadura',pct:2.23},{region:'Murcia',pct:2.35},
      {region:'Aragón',pct:3.03},{region:'Canarias',pct:3.43},{region:'País Vasco',pct:3.19},
      {region:'Castilla-La Mancha',pct:2.19},{region:'Galicia',pct:1.96},
      {region:'Castilla y León',pct:2.35},{region:'Com. Valenciana',pct:3},
      {region:'Madrid',pct:4.45},{region:'Cataluña',pct:4.6},{region:'Andalucía',pct:2.79}
    ].sort((a,b)=>b.pct-a.pct)
  },
  'SUMAR': {
    nombre: 'Sumar', color: '#ff0080', emoji: '🟠',
    colorBg: 'rgba(255,0,128,.18)', colorBorder: 'rgba(255,0,128,.4)',
    datos: [
      {region:'Melilla',pct:1.72},{region:'Ceuta',pct:1.57},{region:'La Rioja',pct:3.25},
      {region:'Cantabria',pct:3.14},{region:'Navarra',pct:3.85},{region:'Asturias',pct:5.95},
      {region:'Baleares',pct:4.35},{region:'Extremadura',pct:2.49},{region:'Murcia',pct:3.26},
      {region:'Aragón',pct:5.07},{region:'Canarias',pct:4.01},{region:'País Vasco',pct:3.27},
      {region:'Castilla-La Mancha',pct:3.02},{region:'Galicia',pct:2.07},
      {region:'Castilla y León',pct:2.9},{region:'Com. Valenciana',pct:7.63},
      {region:'Madrid',pct:5.8},{region:'Cataluña',pct:4.3},{region:'Andalucía',pct:5.09}
    ].sort((a,b)=>b.pct-a.pct)
  },
  'CIUDADANOS': {
    nombre: 'Ciudadanos', color: '#f57c00', emoji: '🟡',
    colorBg: 'rgba(245,124,0,.18)', colorBorder: 'rgba(245,124,0,.4)',
    datos: [
      {region:'Melilla',pct:0.62},{region:'Ceuta',pct:0.5},{region:'La Rioja',pct:0.62},
      {region:'Cantabria',pct:0.87},{region:'Navarra',pct:0.5},{region:'Asturias',pct:0.72},
      {region:'Baleares',pct:0.58},{region:'Extremadura',pct:0.52},{region:'Murcia',pct:0.75},
      {region:'Aragón',pct:0.88},{region:'Canarias',pct:0.41},{region:'País Vasco',pct:0.14},
      {region:'Castilla-La Mancha',pct:0.58},{region:'Galicia',pct:0.26},
      {region:'Castilla y León',pct:0.83},{region:'Com. Valenciana',pct:0.75},
      {region:'Madrid',pct:1.1},{region:'Cataluña',pct:0.55},{region:'Andalucía',pct:0.74}
    ].sort((a,b)=>b.pct-a.pct)
  },
  'SALF': {
    nombre: 'Se Acabó La Fiesta', color: '#d4a017', emoji: '🌟',
    colorBg: 'rgba(212,160,23,.18)', colorBorder: 'rgba(212,160,23,.4)',
    datos: [
      {region:'Melilla',pct:5.9},{region:'Ceuta',pct:7.8},{region:'La Rioja',pct:3.66},
      {region:'Cantabria',pct:5.7},{region:'Navarra',pct:3.06},{region:'Asturias',pct:3.29},
      {region:'Baleares',pct:5.35},{region:'Extremadura',pct:3.45},{region:'Murcia',pct:6.58},
      {region:'Aragón',pct:5.09},{region:'Canarias',pct:6.31},{region:'País Vasco',pct:1.72},
      {region:'Castilla-La Mancha',pct:4.94},{region:'Galicia',pct:2.03},
      {region:'Castilla y León',pct:4.03},{region:'Com. Valenciana',pct:5.77},
      {region:'Madrid',pct:5.06},{region:'Cataluña',pct:2.81},{region:'Andalucía',pct:6.21}
    ].sort((a,b)=>b.pct-a.pct)
  },
  'AR': {
    nombre: 'Ahora República', color: '#E91E8C', emoji: '🟣',
    colorBg: 'rgba(233,30,140,.18)', colorBorder: 'rgba(233,30,140,.4)',
    datos: [
      {region:'Melilla',pct:0.09},{region:'Ceuta',pct:0.1},{region:'La Rioja',pct:0.36},
      {region:'Cantabria',pct:0.32},{region:'Navarra',pct:18.75},{region:'Asturias',pct:0.39},
      {region:'Baleares',pct:5.17},{region:'Extremadura',pct:0.09},{region:'Murcia',pct:0.09},
      {region:'Aragón',pct:0.29},{region:'Canarias',pct:0.26},{region:'País Vasco',pct:26.24},
      {region:'Castilla-La Mancha',pct:0.11},{region:'Galicia',pct:16.13},
      {region:'Castilla y León',pct:0.2},{region:'Com. Valenciana',pct:0.43},
      {region:'Madrid',pct:0.26},{region:'Cataluña',pct:14.81},{region:'Andalucía',pct:0.09}
    ].sort((a,b)=>b.pct-a.pct)
  },
  'JUNTS': {
    nombre: 'Junts per Catalunya', color: '#40E0D0', emoji: '🩵',
    colorBg: 'rgba(64,224,208,.18)', colorBorder: 'rgba(64,224,208,.4)',
    datos: [
      {region:'Melilla',pct:0.01},{region:'Ceuta',pct:0.02},{region:'La Rioja',pct:0.01},
      {region:'Cantabria',pct:0.05},{region:'Navarra',pct:0.1},{region:'Asturias',pct:0.03},
      {region:'Baleares',pct:0.75},{region:'Extremadura',pct:0.04},{region:'Murcia',pct:0.06},
      {region:'Aragón',pct:0.11},{region:'Canarias',pct:0.1},{region:'País Vasco',pct:0.14},
      {region:'Castilla-La Mancha',pct:0.01},{region:'Galicia',pct:0.03},
      {region:'Castilla y León',pct:0.05},{region:'Com. Valenciana',pct:0.13},
      {region:'Madrid',pct:0.05},{region:'Cataluña',pct:18.02},{region:'Andalucía',pct:0.03}
    ].sort((a,b)=>b.pct-a.pct)
  },
  'CEUS': {
    nombre: 'Coalición por Europa Unida y Soberana', color: '#F3B217', emoji: '🌐',
    colorBg: 'rgba(243,178,23,.18)', colorBorder: 'rgba(243,178,23,.4)',
    datos: [
      {region:'Melilla',pct:0.01},{region:'Ceuta',pct:0.02},{region:'La Rioja',pct:0.08},
      {region:'Cantabria',pct:0.1},{region:'Navarra',pct:3.16},{region:'Asturias',pct:0.03},
      {region:'Baleares',pct:0.96},{region:'Extremadura',pct:0.01},{region:'Murcia',pct:0.02},
      {region:'Aragón',pct:0.03},{region:'Canarias',pct:10.07},{region:'País Vasco',pct:22.4},
      {region:'Castilla-La Mancha',pct:0.02},{region:'Galicia',pct:0.03},
      {region:'Castilla y León',pct:0.03},{region:'Com. Valenciana',pct:0.04},
      {region:'Madrid',pct:0.05},{region:'Cataluña',pct:0.09},{region:'Andalucía',pct:0.02}
    ].sort((a,b)=>b.pct-a.pct)
  }
};

let selectedPartido = null;
let rpRendered = false;
let rpTipoActual = 'autonomicas';

function rpGetCurrentData() {
  if (rpTipoActual === 'generales') return PARTIDOS_GENERALES;
  if (rpTipoActual === 'europeas') return PARTIDOS_EUROPEAS;
  return PARTIDOS_DATA;
}

function rpSetTipo(tipo, btnEl) {
  rpTipoActual = tipo;
  // Update button styles
  ['autonomicas','generales','europeas'].forEach(t => {
    const b = document.getElementById('rp-btn-'+t);
    if (!b) return;
    if (t === tipo) {
      b.style.background = 'var(--accent)';
      b.style.color = '#fff';
    } else {
      b.style.background = 'transparent';
      b.style.color = 'var(--text2)';
    }
  });
  // Update subtitle
  const subtitleMap = {
    autonomicas: 'Resultados electorales autonómicos de los principales partidos de ámbito nacional',
    generales: 'Resultados de Elecciones Generales por Comunidad Autónoma',
    europeas: 'Resultados de Elecciones Europeas 2024 por Comunidad Autónoma'
  };
  const subtitleEl = document.getElementById('rp-panel-subtitle');
  if (subtitleEl) subtitleEl.textContent = subtitleMap[tipo] + ' · Selecciona un partido para ver su clasificación';
  // Re-render partido selector
  renderPartidoSelector();
  // Auto-select PP
  selectPartido('PP');
}

function renderPartidoSelector() {
  const currentData = rpGetCurrentData();
  const btnsEl = document.getElementById('partido-selector-btns');
  btnsEl.innerHTML = Object.entries(currentData).map(([key, p]) => `
    <button onclick="selectPartido('${key}')" id="rpbtn-${key}"
      style="display:flex;align-items:center;gap:8px;padding:10px 18px;border-radius:10px;border:2px solid ${p.colorBorder};
      background:${p.colorBg};color:${p.color};font-family:var(--font);font-size:13px;font-weight:700;
      cursor:pointer;transition:all .2s;white-space:nowrap;">
      ${p.emoji} ${p.nombre}
    </button>
  `).join('');
}

function renderRankingPartidos(){
  if(rpRendered) return;
  rpRendered = true;

  // Selector de partidos
  renderPartidoSelector();

  // Auto-select PP
  selectPartido('PP');
}

function selectPartido(key){
  selectedPartido = key;
  const currentData = rpGetCurrentData();
  const p = currentData[key];
  if (!p) return;

  // Highlight selected button
  Object.keys(currentData).forEach(k => {
    const btn = document.getElementById('rpbtn-'+k);
    if(!btn) return;
    if(k === key){
      btn.style.boxShadow = `0 0 0 3px ${currentData[k].color}55, 0 4px 16px ${currentData[k].color}33`;
      btn.style.transform = 'translateY(-2px)';
    } else {
      btn.style.boxShadow = 'none';
      btn.style.transform = 'none';
    }
  });

  const datos = p.datos;
  const maxPct = datos[0].pct;

  // ── Mini podio top 3 ──
  const medals = ['gold','silver','bronze'];
  const medalEmoji = ['🥇','🥈','🥉'];
  const top3El = document.getElementById('rp-top3-preview');
  top3El.innerHTML = datos.slice(0,3).map((d,i) => `
    <div class="top3-card pos-${i+1}" style="animation-delay:${i*0.1}s;border-color:${i===0?p.color+'66':''};background:${i===0?'linear-gradient(135deg,'+p.colorBg+',var(--surface))':''};min-width:130px;">
      <div class="top3-medal">${medalEmoji[i]}</div>
      <div class="top3-photo ${medals[i]}" style="border-color:${i===0?p.color:i===1?'#b0b8c8':'#c07848'};box-shadow:0 0 14px ${p.color}44;">
        <span style="font-size:28px;">${p.emoji}</span>
      </div>
      <div class="top3-name" style="color:${p.color};font-size:12px;">${p.nombre}</div>
      <div class="top3-region" style="font-size:11px;font-weight:600;color:var(--text);">${d.region}</div>
      <div class="top3-pct ${medals[i]}" style="color:${i===0?p.color:i===1?'#c0c8d8':'#d08050'}">${d.pct.toFixed(2)}%</div>
    </div>
  `).join('');

  // ── Lista completa ──
  const tipoLabel = {autonomicas:'autonómicas',generales:'generales',europeas:'europeas 2024'}[rpTipoActual] || 'autonómicas';
  document.getElementById('rp-list-title').textContent = `Clasificación — ${p.nombre}`;
  document.getElementById('rp-list-subtitle').textContent = `${datos.length} comunidades · Datos elecciones ${tipoLabel}`;

  const listEl = document.getElementById('rp-ranking-list');
  listEl.innerHTML = datos.map((d,i) => {
    const posClass = i===0?'gold':i===1?'silver':i===2?'bronze':'normal';
    const posLabel = i===0?'🥇':i===1?'🥈':i===2?'🥉':`${i+1}`;
    const barPct = (d.pct / maxPct * 100).toFixed(1);
    const barColor = `linear-gradient(90deg,${p.color},${p.color}99)`;
    return `
    <div class="rank-row" style="animation-delay:${Math.min(i*0.04,0.8)}s">
      <div class="rank-pos ${posClass}">${posLabel}</div>
      <div class="rank-avatar" style="width:48px;height:48px;border-color:${p.colorBorder};background:${p.colorBg};">
        <span style="font-size:22px;">${p.emoji}</span>
      </div>
      <div class="rank-info">
        <div class="rank-name" style="font-size:14px;">${d.region}</div>
        <div class="rank-region">${p.nombre}</div>
      </div>
      <div class="rank-bar-wrap">
        <div class="rank-bar-track">
          <div class="rank-bar-fill" style="width:${barPct}%;background:${barColor};"></div>
        </div>
        <div class="rank-pct" style="color:${i<3?p.color:'var(--text2)'}">${d.pct.toFixed(2)}%</div>
      </div>
    </div>`;
  }).join('');

  // Animate bars
  setTimeout(()=>{
    listEl.querySelectorAll('.rank-bar-fill').forEach(el => {
      const w = el.style.width; el.style.width='0';
      requestAnimationFrame(()=>{ setTimeout(()=>{el.style.width=w;},20); });
    });
  },150);

  // ── Podio final visual ──
  const podiumSection = document.getElementById('rp-podium-section');
  podiumSection.style.display = 'block';
  document.getElementById('rp-podium-title').innerHTML = `${p.emoji} PODIO ${p.nombre.toUpperCase()} ${p.emoji}`;

  const podiumEl = document.getElementById('rp-ranking-podium');
  const order = [datos[1], datos[0], datos[2]]; // 2nd, 1st, 3rd
  const standClass = ['s2','s1','s3'];
  const photoClass = ['p2','p1','p3'];
  const standLabel = ['🥈 2.º','🥇 1.º','🥉 3.º'];
  const pctColor = ['#c0c8d8', p.color, '#d08050'];
  const photoSizes = [{w:210,h:210},{w:260,h:260},{w:190,h:190}];

  podiumEl.innerHTML = order.map((d,i) => `
    <div class="podium-block" style="animation:top3In .7s ease ${i*0.15}s both;">
      <div class="podium-photo-wrap">
        <div class="podium-photo ${photoClass[i]}"
          style="border-color:${i===1?p.color:i===0?'#9ca8bc':'#c07848'};
                 box-shadow:0 0 ${i===1?22:14}px ${p.color}${i===1?'66':'33'};
                 width:${photoSizes[i].w}px;height:${photoSizes[i].h}px;">
          <span style="font-size:${i===1?64:48}px;">${p.emoji}</span>
        </div>
        <div class="podium-label">
          <div class="podium-pname" style="font-size:13px;font-weight:700;">${d.region}</div>
          <div class="podium-pregion" style="color:${p.color};font-size:11px;">${p.nombre}</div>
          <div class="podium-ppct" style="color:${pctColor[i]};font-size:18px;">${d.pct.toFixed(2)}%</div>
        </div>
      </div>
      <div class="podium-stand ${standClass[i]}" style="background:linear-gradient(180deg,${p.color}cc,${p.color}66);">${standLabel[i]}</div>
    </div>
  `).join('');
}

// ═══════════════════════════════════════════
//  RANKING POR PROVINCIAS
// ═══════════════════════════════════════════

// Mapa: provincia → CCAA
const PROVINCIA_CCAA = {
  // Andalucía
  'Almería':'andalucia','Cádiz':'andalucia','Córdoba':'andalucia','Granada':'andalucia',
  'Huelva':'andalucia','Jaén':'andalucia','Málaga':'andalucia','Sevilla':'andalucia',
  // Aragón
  'Huesca':'aragon','Teruel':'aragon','Zaragoza':'aragon',
  // Asturias (incluye circunscripciones autonómicas)
  'Asturias':'asturias','Asturias Occidente':'asturias','Asturias Centro':'asturias','Asturias Oriente':'asturias',
  // Baleares (islas)
  'Baleares':'baleares','Formentera':'baleares','Ibiza':'baleares','Menorca':'baleares','Mallorca':'baleares',
  // Canarias (islas)
  'Las Palmas':'canarias','Santa Cruz de Tenerife':'canarias',
  'El Hierro':'canarias','La Gomera':'canarias','La Palma':'canarias','Tenerife':'canarias',
  'Fuerteventura':'canarias','Lanzarote':'canarias','Gran Canaria':'canarias',
  'Urna Autonómica':'canarias',
  // Cantabria
  'Cantabria':'cantabria',
  // Castilla-La Mancha
  'Albacete':'castilla_la_mancha','Ciudad Real':'castilla_la_mancha','Cuenca':'castilla_la_mancha',
  'Guadalajara':'castilla_la_mancha','Toledo':'castilla_la_mancha',
  // Castilla y León
  'Ávila':'castilla_y_leon','Burgos':'castilla_y_leon','León':'castilla_y_leon',
  'Palencia':'castilla_y_leon','Salamanca':'castilla_y_leon','Segovia':'castilla_y_leon',
  'Soria':'castilla_y_leon','Valladolid':'castilla_y_leon','Zamora':'castilla_y_leon',
  // Cataluña
  'Barcelona':'cataluna','Girona':'cataluna','Lleida':'cataluna','Tarragona':'cataluna',
  // Ceuta
  'Ceuta':'ceuta',
  // Comunidad Valenciana
  'Alicante':'comunidad_valenciana','Castellón':'comunidad_valenciana','Valencia':'comunidad_valenciana',
  // Extremadura
  'Badajoz':'extremadura','Cáceres':'extremadura',
  // Galicia
  'A Coruña':'galicia','Lugo':'galicia','Ourense':'galicia','Pontevedra':'galicia',
  // La Rioja
  'La Rioja':'la_rioja',
  // Madrid
  'Madrid':'madrid',
  // Melilla
  'Melilla':'melilla',
  // Murcia
  'Murcia':'murcia',
  // Navarra
  'Navarra':'navarra',
  // País Vasco
  'Álava':'pais_vasco','Guipúzcoa':'pais_vasco','Vizcaya':'pais_vasco',
};

const CCAA_NOMBRES = {
  andalucia:'Andalucía', aragon:'Aragón', asturias:'Asturias', baleares:'Baleares',
  canarias:'Canarias', cantabria:'Cantabria', castilla_la_mancha:'Castilla-La Mancha',
  castilla_y_leon:'Castilla y León', cataluna:'Cataluña', ceuta:'Ceuta',
  comunidad_valenciana:'C. Valenciana', extremadura:'Extremadura', galicia:'Galicia',
  la_rioja:'La Rioja', madrid:'Madrid', melilla:'Melilla', murcia:'Murcia',
  navarra:'Navarra', pais_vasco:'País Vasco'
};

const PARTIDOS_PROV_AUTONOMICAS = {
  'PP':{nombre:'Partido Popular',color:'#1565c0',emoji:'🔵',colorBg:'rgba(21,101,192,.18)',colorBorder:'rgba(21,101,192,.4)',datos:[
    {prov:'Lugo',pct:53.33},{prov:'Melilla',pct:52.67},{prov:'Ourense',pct:50.07},{prov:'Ibiza',pct:48.87},
    {prov:'A Coruña',pct:47.65},{prov:'Madrid',pct:47.32},{prov:'Málaga',pct:47.02},{prov:'Almería',pct:45.56},
    {prov:'La Rioja',pct:45.38},{prov:'Córdoba',pct:44.66},{prov:'Pontevedra',pct:44.04},{prov:'Cáceres',pct:44.02},
    {prov:'Salamanca',pct:43},{prov:'Murcia',pct:42.79},{prov:'Huelva',pct:42.7},{prov:'Badajoz',pct:42.68},
    {prov:'Cádiz',pct:42.47},{prov:'Jaén',pct:42.45},{prov:'Granada',pct:42.16},{prov:'Sevilla',pct:40.1},
    {prov:'Alicante',pct:39.28},{prov:'Segovia',pct:39.22},{prov:'Menorca',pct:38.7},{prov:'Zamora',pct:38.06},
    {prov:'Asturias Oriente',pct:36.42},{prov:'Valladolid',pct:36.24},{prov:'Ávila',pct:36.15},{prov:'Castellón',pct:35.99},
    {prov:'Cantabria',pct:35.78},{prov:'Palencia',pct:35.64},{prov:'Albacete',pct:35.5},{prov:'Zaragoza',pct:35.33},
    {prov:'Burgos',pct:35.12},{prov:'Asturias Occidente',pct:34.99},{prov:'Ciudad Real',pct:34.52},{prov:'Ceuta',pct:34.37},
    {prov:'Mallorca',pct:34.29},{prov:'Valencia',pct:33.59},{prov:'Cuenca',pct:33.55},{prov:'Toledo',pct:33.19},
    {prov:'Huesca',pct:32.85},{prov:'Asturias Centro',pct:31.92},{prov:'Guadalajara',pct:30.27},{prov:'Soria',pct:28.79},
    {prov:'Teruel',pct:28.77},{prov:'León',pct:28.04},{prov:'Gran Canaria',pct:21.35},{prov:'El Hierro',pct:21.27},
    {prov:'Urna Autonómica',pct:20.46},{prov:'La Palma',pct:20.19},{prov:'Fuerteventura',pct:19.26},{prov:'Tenerife',pct:18.17},
    {prov:'Lanzarote',pct:17.16},{prov:'Álava',pct:15.88},{prov:'Tarragona',pct:11.82},{prov:'Barcelona',pct:11.56},
    {prov:'Lleida',pct:9.17},{prov:'Vizcaya',pct:8.99},{prov:'Navarra',pct:7.28},{prov:'Girona',pct:6.47},
    {prov:'Guipúzcoa',pct:6.25},{prov:'La Gomera',pct:4.29}
  ].sort((a,b)=>b.pct-a.pct)},
  'PSOE':{nombre:'PSOE',color:'#c0392b',emoji:'🔴',colorBg:'rgba(192,57,43,.18)',colorBorder:'rgba(192,57,43,.4)',datos:[
    {prov:'Cuenca',pct:47.41},{prov:'Ciudad Real',pct:46.58},{prov:'Toledo',pct:45.57},{prov:'Formentera',pct:44.66},
    {prov:'Albacete',pct:42.62},{prov:'Guadalajara',pct:42.2},{prov:'Asturias Oriente',pct:38.33},{prov:'Asturias Occidente',pct:37.05},
    {prov:'Asturias Centro',pct:36.25},{prov:'Burgos',pct:34.25},{prov:'Palencia',pct:34.18},{prov:'Urna Autonómica',pct:32.96},
    {prov:'Soria',pct:32.03},{prov:'Valladolid',pct:31.98},{prov:'La Rioja',pct:31.9},{prov:'Segovia',pct:31.23},
    {prov:'Zamora',pct:30.49},{prov:'Castellón',pct:30.22},{prov:'Barcelona',pct:29.92},{prov:'Alicante',pct:29.52},
    {prov:'Salamanca',pct:29.16},{prov:'Lanzarote',pct:28.99},{prov:'León',pct:28.27},{prov:'Gran Canaria',pct:28.04},
    {prov:'Valencia',pct:27.9},{prov:'Huelva',pct:27.4},{prov:'Tenerife',pct:27.3},{prov:'Jaén',pct:27.11},
    {prov:'Mallorca',pct:26.85},{prov:'Menorca',pct:26.78},{prov:'Huesca',pct:26.69},{prov:'Sevilla',pct:26.61},
    {prov:'Badajoz',pct:26.03},{prov:'Ibiza',pct:25.64},{prov:'Murcia',pct:25.63},{prov:'Tarragona',pct:25.6},
    {prov:'Granada',pct:25.41},{prov:'Cáceres',pct:25.22},{prov:'Ávila',pct:24.48},{prov:'La Palma',pct:23.93},
    {prov:'Zaragoza',pct:23.86},{prov:'Teruel',pct:23.63},{prov:'Córdoba',pct:23.52},{prov:'El Hierro',pct:22.9},
    {prov:'Almería',pct:22.1},{prov:'Fuerteventura',pct:21.54},{prov:'Cádiz',pct:21.03},{prov:'Ceuta',pct:20.96},
    {prov:'Málaga',pct:20.74},{prov:'Navarra',pct:20.69},{prov:'Cantabria',pct:20.61},{prov:'Lleida',pct:20.55},
    {prov:'Girona',pct:19.24},{prov:'La Gomera',pct:18.76},{prov:'Madrid',pct:18.17},{prov:'Lugo',pct:17.26},
    {prov:'Álava',pct:16.19},{prov:'Pontevedra',pct:14.75},{prov:'Vizcaya',pct:13.94},{prov:'Guipúzcoa',pct:13.4},
    {prov:'A Coruña',pct:12.99},{prov:'Ourense',pct:12.44},{prov:'Melilla',pct:10.66}
  ].sort((a,b)=>b.pct-a.pct)},
  'VOX':{nombre:'VOX',color:'#2e7d32',emoji:'🟢',colorBg:'rgba(46,125,50,.18)',colorBorder:'rgba(46,125,50,.4)',datos:[
    {prov:'Valladolid',pct:20.74},{prov:'Almería',pct:20.73},{prov:'Ceuta',pct:20.64},{prov:'Palencia',pct:20.43},
    {prov:'Teruel',pct:20.34},{prov:'Zamora',pct:20},{prov:'Segovia',pct:19.41},{prov:'Ávila',pct:19.35},
    {prov:'Salamanca',pct:18.76},{prov:'Huesca',pct:18.75},{prov:'Burgos',pct:18.44},{prov:'Murcia',pct:17.72},
    {prov:'Zaragoza',pct:17.36},{prov:'Badajoz',pct:17.22},{prov:'León',pct:16.49},{prov:'Cáceres',pct:16.38},
    {prov:'Guadalajara',pct:16.08},{prov:'Soria',pct:15.87},{prov:'Granada',pct:15.41},{prov:'Mallorca',pct:15.32},
    {prov:'Málaga',pct:13.52},{prov:'Toledo',pct:13.24},{prov:'Cádiz',pct:13.24},{prov:'Castellón',pct:13.07},
    {prov:'Jaén',pct:12.84},{prov:'Huelva',pct:12.77},{prov:'Valencia',pct:12.62},{prov:'Córdoba',pct:12.45},
    {prov:'Albacete',pct:12.4},{prov:'Alicante',pct:12.32},{prov:'Ciudad Real',pct:11.98},{prov:'Sevilla',pct:11.43},
    {prov:'Cantabria',pct:11.08},{prov:'Asturias Centro',pct:10.66},{prov:'Cuenca',pct:10.46},{prov:'Tarragona',pct:10.07},
    {prov:'Melilla',pct:9.94},{prov:'Gran Canaria',pct:9.92},{prov:'Asturias Oriente',pct:9.47},{prov:'Ibiza',pct:9.21},
    {prov:'Urna Autonómica',pct:8.01},{prov:'Barcelona',pct:7.99},{prov:'La Rioja',pct:7.61},{prov:'Madrid',pct:7.34},
    {prov:'Menorca',pct:7.19},{prov:'Tenerife',pct:7.01},{prov:'Lanzarote',pct:6.85},{prov:'Asturias Occidente',pct:6.51},
    {prov:'Girona',pct:6.29},{prov:'Lleida',pct:6.24},{prov:'Fuerteventura',pct:6},{prov:'Navarra',pct:4.3},
    {prov:'Álava',pct:3.67},{prov:'Formentera',pct:3.34},{prov:'La Palma',pct:3.03},{prov:'A Coruña',pct:2.51},
    {prov:'Pontevedra',pct:2.33},{prov:'La Gomera',pct:2.05},{prov:'Lugo',pct:1.87},{prov:'Vizcaya',pct:1.87},
    {prov:'Ourense',pct:1.67},{prov:'El Hierro',pct:1.59},{prov:'Guipúzcoa',pct:1.5}
  ].sort((a,b)=>b.pct-a.pct)},
  'SUMAR':{nombre:'Sumar',color:'#ff0080',emoji:'🟠',colorBg:'rgba(255,0,128,.18)',colorBorder:'rgba(255,0,128,.4)',datos:[
    {prov:'Córdoba',pct:9.98},{prov:'Sevilla',pct:8.36},{prov:'Asturias Centro',pct:8.17},{prov:'Málaga',pct:8.08},
    {prov:'Granada',pct:7.74},{prov:'Cádiz',pct:7.5},{prov:'Barcelona',pct:6.7},{prov:'Huelva',pct:6.54},
    {prov:'Jaén',pct:5.59},{prov:'Asturias Occidente',pct:5.4},{prov:'Almería',pct:5},{prov:'Asturias Oriente',pct:4.67},
    {prov:'Valladolid',pct:3.92},{prov:'Tarragona',pct:3.73},{prov:'Álava',pct:3.66},{prov:'Vizcaya',pct:3.35},
    {prov:'Girona',pct:3.23},{prov:'Zaragoza',pct:3.18},{prov:'Guipúzcoa',pct:3.07},{prov:'Segovia',pct:2.91},
    {prov:'Zamora',pct:2.74},{prov:'Huesca',pct:2.53},{prov:'Pontevedra',pct:2.45},{prov:'A Coruña',pct:2.28},
    {prov:'Burgos',pct:2.19},{prov:'Lleida',pct:2.16},{prov:'Palencia',pct:1.94},{prov:'Teruel',pct:1.79},
    {prov:'Ávila',pct:1.44},{prov:'León',pct:1.28},{prov:'Salamanca',pct:1.09},{prov:'Lugo',pct:0.64},
    {prov:'Soria',pct:0.56},{prov:'Ourense',pct:0.55}
  ].sort((a,b)=>b.pct-a.pct)},
  'PODEMOS':{nombre:'Podemos',color:'#6a1b9a',emoji:'💜',colorBg:'rgba(106,27,154,.18)',colorBorder:'rgba(106,27,154,.4)',datos:[
    {prov:'Badajoz',pct:10.34},{prov:'Cáceres',pct:10.09},{prov:'Menorca',pct:6.73},{prov:'Ibiza',pct:6.37},
    {prov:'Navarra',pct:6.09},{prov:'Guadalajara',pct:5.97},{prov:'La Rioja',pct:5.09},{prov:'Madrid',pct:4.76},
    {prov:'Murcia',pct:4.7},{prov:'Albacete',pct:4.65},{prov:'Asturias Centro',pct:4.35},{prov:'Lanzarote',pct:4.32},
    {prov:'Tenerife',pct:4.17},{prov:'Gran Canaria',pct:4.14},{prov:'Cantabria',pct:4.12},{prov:'Mallorca',pct:3.95},
    {prov:'Toledo',pct:3.94},{prov:'Valencia',pct:3.69},{prov:'Ciudad Real',pct:3.6},{prov:'Alicante',pct:3.5},
    {prov:'Urna Autonómica',pct:3.29},{prov:'Castellón',pct:3.23},{prov:'Cuenca',pct:3.2},{prov:'El Hierro',pct:2.63},
    {prov:'Asturias Oriente',pct:2.57},{prov:'Álava',pct:2.38},{prov:'Vizcaya',pct:2.23},{prov:'Guipúzcoa',pct:2.16},
    {prov:'Fuerteventura',pct:2.16},{prov:'La Palma',pct:1.99},{prov:'Asturias Occidente',pct:1.75},{prov:'Burgos',pct:1.06},
    {prov:'Zaragoza',pct:1.04},{prov:'Melilla',pct:0.96},{prov:'Segovia',pct:0.87},{prov:'Valladolid',pct:0.8},
    {prov:'Huesca',pct:0.78},{prov:'León',pct:0.7},{prov:'Ávila',pct:0.66},{prov:'Salamanca',pct:0.62},
    {prov:'Palencia',pct:0.58},{prov:'Ceuta',pct:0.54},{prov:'Soria',pct:0.53},{prov:'Zamora',pct:0.49},
    {prov:'Teruel',pct:0.48},{prov:'Pontevedra',pct:0.33},{prov:'A Coruña',pct:0.33},{prov:'Lugo',pct:0.2},
    {prov:'Ourense',pct:0.17}
  ].sort((a,b)=>b.pct-a.pct)},
  'EHBILDU':{nombre:'EH Bildu',color:'#4caf50',emoji:'🌿',colorBg:'rgba(76,175,80,.18)',colorBorder:'rgba(76,175,80,.4)',datos:[
    {prov:'Guipúzcoa',pct:40.05},{prov:'Álava',pct:29.18},{prov:'Vizcaya',pct:28.34},{prov:'Navarra',pct:17.14}
  ].sort((a,b)=>b.pct-a.pct)},
  'PNV':{nombre:'PNV',color:'#1a6b3a',emoji:'🟩',colorBg:'rgba(26,107,58,.18)',colorBorder:'rgba(26,107,58,.4)',datos:[
    {prov:'Vizcaya',pct:39.09},{prov:'Guipúzcoa',pct:31.39},{prov:'Álava',pct:26.75}
  ].sort((a,b)=>b.pct-a.pct)},
  'JUNTS':{nombre:'Junts',color:'#40E0D0',emoji:'🩵',colorBg:'rgba(64,224,208,.18)',colorBorder:'rgba(64,224,208,.4)',datos:[
    {prov:'Girona',pct:34.88},{prov:'Lleida',pct:30.37},{prov:'Tarragona',pct:21.28},{prov:'Barcelona',pct:19.35}
  ].sort((a,b)=>b.pct-a.pct)},
  'ERC':{nombre:'ERC',color:'#f9c74f',emoji:'🟡',colorBg:'rgba(249,199,79,.18)',colorBorder:'rgba(249,199,79,.4)',datos:[
    {prov:'Lleida',pct:16.35},{prov:'Tarragona',pct:16.09},{prov:'Barcelona',pct:13.38},{prov:'Girona',pct:11.99}
  ].sort((a,b)=>b.pct-a.pct)},
  'CUP':{nombre:'CUP',color:'#7b1fa2',emoji:'⬛',colorBg:'rgba(123,31,162,.18)',colorBorder:'rgba(123,31,162,.4)',datos:[
    {prov:'Girona',pct:4.94},{prov:'Lleida',pct:4.24},{prov:'Tarragona',pct:4.05},{prov:'Barcelona',pct:3.98}
  ].sort((a,b)=>b.pct-a.pct)},
  'ALIANÇA CATALANA':{nombre:'Aliança Catalana',color:'#37474f',emoji:'🏴',colorBg:'rgba(55,71,79,.18)',colorBorder:'rgba(55,71,79,.4)',datos:[
    {prov:'Girona',pct:9.03},{prov:'Lleida',pct:7.78},{prov:'Tarragona',pct:3.51},{prov:'Barcelona',pct:2.87}
  ].sort((a,b)=>b.pct-a.pct)},
  'BNG':{nombre:'BNG',color:'#00529b',emoji:'🔷',colorBg:'rgba(0,82,155,.18)',colorBorder:'rgba(0,82,155,.4)',datos:[
    {prov:'Pontevedra',pct:34.44},{prov:'A Coruña',pct:32.48},{prov:'Lugo',pct:25},{prov:'Ourense',pct:24.97}
  ].sort((a,b)=>b.pct-a.pct)},
  'CCA':{nombre:'Coalición Canaria',color:'#e67e22',emoji:'🌋',colorBg:'rgba(230,126,34,.18)',colorBorder:'rgba(230,126,34,.4)',datos:[
    {prov:'La Palma',pct:41.97},{prov:'Tenerife',pct:31.17},{prov:'Lanzarote',pct:27.47},{prov:'Fuerteventura',pct:25.5},
    {prov:'Urna Autonómica',pct:19.51},{prov:'Gran Canaria',pct:9.29},{prov:'La Gomera',pct:7.19}
  ].sort((a,b)=>b.pct-a.pct)},
  'NCA':{nombre:'Nueva Canarias',color:'#1976d2',emoji:'🌊',colorBg:'rgba(25,118,210,.18)',colorBorder:'rgba(25,118,210,.4)',datos:[
    {prov:'Gran Canaria',pct:14.57},{prov:'Fuerteventura',pct:11.05},{prov:'Lanzarote',pct:8.63},{prov:'Urna Autonómica',pct:7.24},{prov:'Tenerife',pct:2.5}
  ].sort((a,b)=>b.pct-a.pct)},
  'ASG':{nombre:'ASG',color:'#33691e',emoji:'🌴',colorBg:'rgba(51,105,30,.18)',colorBorder:'rgba(51,105,30,.4)',datos:[
    {prov:'La Gomera',pct:55.21}
  ].sort((a,b)=>b.pct-a.pct)},
  'MÁS MADRID':{nombre:'Más Madrid',color:'#00acc1',emoji:'🏙️',colorBg:'rgba(0,172,193,.18)',colorBorder:'rgba(0,172,193,.4)',datos:[
    {prov:'Madrid',pct:18.36}
  ].sort((a,b)=>b.pct-a.pct)},
  'COMPROMÍS':{nombre:'Compromís',color:'#ff6d00',emoji:'🍊',colorBg:'rgba(255,109,0,.18)',colorBorder:'rgba(255,109,0,.4)',datos:[
    {prov:'Valencia',pct:17.4},{prov:'Castellón',pct:13.09},{prov:'Alicante',pct:10.17}
  ].sort((a,b)=>b.pct-a.pct)},
  'ADELANTE ANDALUCÍA':{nombre:'Adelante Andalucía',color:'#e91e63',emoji:'🌹',colorBg:'rgba(233,30,99,.18)',colorBorder:'rgba(233,30,99,.4)',datos:[
    {prov:'Cádiz',pct:8.01},{prov:'Sevilla',pct:6.27},{prov:'Huelva',pct:3.95},{prov:'Málaga',pct:3.78},
    {prov:'Córdoba',pct:3.48},{prov:'Granada',pct:3.18},{prov:'Jaén',pct:1.78},{prov:'Almería',pct:1.74}
  ].sort((a,b)=>b.pct-a.pct)},
  'PRC':{nombre:'PRC',color:'#5c6bc0',emoji:'⛷️',colorBg:'rgba(92,107,192,.18)',colorBorder:'rgba(92,107,192,.4)',datos:[
    {prov:'Cantabria',pct:20.79}
  ].sort((a,b)=>b.pct-a.pct)},
  'GEROABAI':{nombre:'Geroa Bai',color:'#00796b',emoji:'💚',colorBg:'rgba(0,121,107,.18)',colorBorder:'rgba(0,121,107,.4)',datos:[
    {prov:'Navarra',pct:13.24}
  ].sort((a,b)=>b.pct-a.pct)},
  'UPN':{nombre:'UPN',color:'#c62828',emoji:'🔶',colorBg:'rgba(198,40,40,.18)',colorBorder:'rgba(198,40,40,.4)',datos:[
    {prov:'Navarra',pct:28.01}
  ].sort((a,b)=>b.pct-a.pct)},
  'CHA':{nombre:'Chunta Aragonesista',color:'#bf360c',emoji:'🦊',colorBg:'rgba(191,54,12,.18)',colorBorder:'rgba(191,54,12,.4)',datos:[
    {prov:'Zaragoza',pct:10.52},{prov:'Huesca',pct:9.84},{prov:'Teruel',pct:3.87}
  ].sort((a,b)=>b.pct-a.pct)},
  'MÉS':{nombre:'MÉS',color:'#26a69a',emoji:'⚓',colorBg:'rgba(38,166,154,.18)',colorBorder:'rgba(38,166,154,.4)',datos:[
    {prov:'Menorca',pct:16.62},{prov:'Mallorca',pct:10.36}
  ].sort((a,b)=>b.pct-a.pct)},
  'SA UNIÓ':{nombre:'Sa Unió',color:'#f4511e',emoji:'⛵',colorBg:'rgba(244,81,30,.18)',colorBorder:'rgba(244,81,30,.4)',datos:[
    {prov:'Formentera',pct:46.61}
  ].sort((a,b)=>b.pct-a.pct)},
  'AHI':{nombre:'AHI',color:'#4a148c',emoji:'🏝️',colorBg:'rgba(74,20,140,.18)',colorBorder:'rgba(74,20,140,.4)',datos:[
    {prov:'El Hierro',pct:27.56}
  ].sort((a,b)=>b.pct-a.pct)},
  'FORO ASTURIAS':{nombre:'Foro Asturias',color:'#827717',emoji:'⛏️',colorBg:'rgba(130,119,23,.18)',colorBorder:'rgba(130,119,23,.4)',datos:[
    {prov:'Asturias Occidente',pct:6.67},{prov:'Asturias Oriente',pct:3.87},{prov:'Asturias Centro',pct:3.22}
  ].sort((a,b)=>b.pct-a.pct)},
  'ARAGÓN EXISTE':{nombre:'Aragón Existe',color:'#0097a7',emoji:'🏔️',colorBg:'rgba(0,151,167,.18)',colorBorder:'rgba(0,151,167,.4)',datos:[
    {prov:'Teruel',pct:12.87},{prov:'Zaragoza',pct:2.55},{prov:'Huesca',pct:2.19}
  ].sort((a,b)=>b.pct-a.pct)},
  'SORIA YA':{nombre:'Soria Ya',color:'#ff8f00',emoji:'⭐',colorBg:'rgba(255,143,0,.18)',colorBorder:'rgba(255,143,0,.4)',datos:[
    {prov:'Soria',pct:19.87}
  ].sort((a,b)=>b.pct-a.pct)},
  'UPL':{nombre:'Unión Pueblo Leonés',color:'#9e9d24',emoji:'🦁',colorBg:'rgba(158,157,36,.18)',colorBorder:'rgba(158,157,36,.4)',datos:[
    {prov:'León',pct:20.96}
  ].sort((a,b)=>b.pct-a.pct)},
  'XAV':{nombre:'Por Ávila',color:'#6d4c41',emoji:'🏰',colorBg:'rgba(109,76,65,.18)',colorBorder:'rgba(109,76,65,.4)',datos:[
    {prov:'Ávila',pct:14.07}
  ].sort((a,b)=>b.pct-a.pct)},
  'CEUTA YA':{nombre:'Ceuta Ya',color:'#b71c1c',emoji:'🔆',colorBg:'rgba(183,28,28,.18)',colorBorder:'rgba(183,28,28,.4)',datos:[
    {prov:'Ceuta',pct:10.03}
  ].sort((a,b)=>b.pct-a.pct)},
  'MDYC':{nombre:'MDyC',color:'#880e4f',emoji:'🌉',colorBg:'rgba(136,14,79,.18)',colorBorder:'rgba(136,14,79,.4)',datos:[
    {prov:'Ceuta',pct:11.24}
  ].sort((a,b)=>b.pct-a.pct)},
  'CPM':{nombre:'Coalición por Melilla',color:'#00838f',emoji:'🕌',colorBg:'rgba(0,131,143,.18)',colorBorder:'rgba(0,131,143,.4)',datos:[
    {prov:'Melilla',pct:18.81}
  ].sort((a,b)=>b.pct-a.pct)},
  'SOMOS MELILLA':{nombre:'Somos Melilla',color:'#0d47a1',emoji:'🏛️',colorBg:'rgba(13,71,161,.18)',colorBorder:'rgba(13,71,161,.4)',datos:[
    {prov:'Melilla',pct:5.1}
  ].sort((a,b)=>b.pct-a.pct)},
  'DO':{nombre:'Democracia Ourensana',color:'#1b5e20',emoji:'🍀',colorBg:'rgba(27,94,32,.18)',colorBorder:'rgba(27,94,32,.4)',datos:[
    {prov:'Ourense',pct:8.72}
  ].sort((a,b)=>b.pct-a.pct)},
  'CIUDADANOS':{nombre:'Ciudadanos',color:'#f57c00',emoji:'🔸',colorBg:'rgba(245,124,0,.18)',colorBorder:'rgba(245,124,0,.4)',datos:[
    {prov:'Cádiz',pct:3.83},{prov:'Sevilla',pct:3.82},{prov:'Málaga',pct:3.47},{prov:'Córdoba',pct:3.15},
    {prov:'Granada',pct:2.95},{prov:'Huelva',pct:2.7},{prov:'Almería',pct:2.56},{prov:'Cantabria',pct:2.32},
    {prov:'Jaén',pct:2.22},{prov:'Albacete',pct:1.61},{prov:'Madrid',pct:1.56},{prov:'Alicante',pct:1.54},
    {prov:'Murcia',pct:1.53},{prov:'Valencia',pct:1.51},{prov:'Menorca',pct:1.4},{prov:'Castellón',pct:1.39},
    {prov:'Mallorca',pct:1.36},{prov:'Guadalajara',pct:1.26},{prov:'Asturias Centro',pct:0.99},{prov:'Ciudad Real',pct:0.9},
    {prov:'La Rioja',pct:0.88},{prov:'Barcelona',pct:0.82},{prov:'Asturias Oriente',pct:0.8},{prov:'Toledo',pct:0.72},
    {prov:'Ceuta',pct:0.69},{prov:'Cuenca',pct:0.68},{prov:'Valladolid',pct:0.64},{prov:'Burgos',pct:0.54},
    {prov:'Tenerife',pct:0.54},{prov:'Tarragona',pct:0.52},{prov:'Asturias Occidente',pct:0.51},{prov:'Salamanca',pct:0.45},
    {prov:'Urna Autonómica',pct:0.4},{prov:'Navarra',pct:0.39},{prov:'Gran Canaria',pct:0.37},{prov:'Lleida',pct:0.32},
    {prov:'Girona',pct:0.32},{prov:'Ávila',pct:0.28},{prov:'Badajoz',pct:0.27},{prov:'Zamora',pct:0.22},
    {prov:'Cáceres',pct:0.2},{prov:'León',pct:0.12},{prov:'Soria',pct:0.09}
  ].sort((a,b)=>b.pct-a.pct)},
  'SALF':{nombre:'Se Acabó La Fiesta',color:'#e65100',emoji:'🌟',colorBg:'rgba(230,81,0,.18)',colorBorder:'rgba(230,81,0,.4)',datos:[
    {prov:'Zaragoza',pct:2.92},{prov:'Huesca',pct:2.28},{prov:'Teruel',pct:2.14},{prov:'Burgos',pct:1.85},
    {prov:'Palencia',pct:1.62},{prov:'Segovia',pct:1.57},{prov:'Valladolid',pct:1.54},{prov:'Ávila',pct:1.38},
    {prov:'Salamanca',pct:1.23},{prov:'León',pct:1.12},{prov:'Zamora',pct:1.03},{prov:'Soria',pct:0.82}
  ].sort((a,b)=>b.pct-a.pct)},
};
const PARTIDOS_PROV_GENERALES = {
  'PP':{nombre:'Partido Popular',color:'#1565c0',emoji:'🔵',colorBg:'rgba(21,101,192,.18)',colorBorder:'rgba(21,101,192,.4)',datos:[
    {prov:'Ceuta',pct:38.77},{prov:'Melilla',pct:49.16},{prov:'Soria',pct:37.22},{prov:'Teruel',pct:35.02},
    {prov:'Segovia',pct:45.02},{prov:'Cuenca',pct:39.76},{prov:'Huesca',pct:38.19},{prov:'Palencia',pct:41.98},
    {prov:'Zamora',pct:44.67},{prov:'Ávila',pct:43.25},{prov:'Guadalajara',pct:36.33},{prov:'Albacete',pct:39.92},
    {prov:'Lleida',pct:12.84},{prov:'La Rioja',pct:45.64},{prov:'Lugo',pct:50.24},{prov:'Ourense',pct:50.02},
    {prov:'Cáceres',pct:38},{prov:'León',pct:36.9},{prov:'Álava',pct:17.87},{prov:'Burgos',pct:40.64},
    {prov:'Salamanca',pct:46.87},{prov:'Valladolid',pct:40.84},{prov:'Jaén',pct:37.32},{prov:'Castellón',pct:35.17},
    {prov:'Badajoz',pct:37.82},{prov:'Cantabria',pct:42.08},{prov:'Navarra',pct:16.71},{prov:'Huelva',pct:36.43},
    {prov:'Ciudad Real',pct:40.54},{prov:'Guipúzcoa',pct:8.69},{prov:'Tarragona',pct:13.87},{prov:'Girona',pct:9.7},
    {prov:'Toledo',pct:37.84},{prov:'Córdoba',pct:37.89},{prov:'Almería',pct:40.94},{prov:'Pontevedra',pct:39.72},
    {prov:'Granada',pct:36.99},{prov:'Asturias',pct:35.65},{prov:'Zaragoza',pct:36.01},{prov:'Santa Cruz de Tenerife',pct:35.35},
    {prov:'Baleares',pct:35.63},{prov:'Vizcaya',pct:11.57},{prov:'Las Palmas',pct:25.85},{prov:'A Coruña',pct:43.13},
    {prov:'Cádiz',pct:34.8},{prov:'Murcia',pct:41.18},{prov:'Málaga',pct:38.31},{prov:'Alicante',pct:36.73},
    {prov:'Sevilla',pct:33.38},{prov:'Valencia',pct:33.64},{prov:'Barcelona',pct:13.78},{prov:'Madrid',pct:40.55}
  ].sort((a,b)=>b.pct-a.pct)},
  'PSOE':{nombre:'PSOE',color:'#c0392b',emoji:'🔴',colorBg:'rgba(192,57,43,.18)',colorBorder:'rgba(192,57,43,.4)',datos:[
    {prov:'Ceuta',pct:34.01},{prov:'Melilla',pct:25.39},{prov:'Soria',pct:29.48},{prov:'Teruel',pct:29.28},
    {prov:'Segovia',pct:30.6},{prov:'Cuenca',pct:37.37},{prov:'Huesca',pct:33.62},{prov:'Palencia',pct:34.67},
    {prov:'Zamora',pct:32.49},{prov:'Ávila',pct:27.39},{prov:'Guadalajara',pct:32.98},{prov:'Albacete',pct:34.51},
    {prov:'Lleida',pct:29.49},{prov:'La Rioja',pct:35.68},{prov:'Lugo',pct:30.3},{prov:'Ourense',pct:30.08},
    {prov:'Cáceres',pct:38.88},{prov:'León',pct:33.6},{prov:'Álava',pct:27.66},{prov:'Burgos',pct:34.45},
    {prov:'Salamanca',pct:30.49},{prov:'Valladolid',pct:32.75},{prov:'Jaén',pct:36.29},{prov:'Castellón',pct:32.65},
    {prov:'Badajoz',pct:39.21},{prov:'Cantabria',pct:33.3},{prov:'Navarra',pct:27.37},{prov:'Huelva',pct:35.95},
    {prov:'Ciudad Real',pct:35.37},{prov:'Guipúzcoa',pct:23.29},{prov:'Tarragona',pct:32.91},{prov:'Girona',pct:28.93},
    {prov:'Toledo',pct:32.56},{prov:'Córdoba',pct:32.13},{prov:'Almería',pct:29.04},{prov:'Pontevedra',pct:31.36},
    {prov:'Granada',pct:32.98},{prov:'Asturias',pct:34.34},{prov:'Zaragoza',pct:30.82},{prov:'Santa Cruz de Tenerife',pct:33.49},
    {prov:'Baleares',pct:30.16},{prov:'Vizcaya',pct:25.82},{prov:'Las Palmas',pct:33.19},{prov:'A Coruña',pct:28.17},
    {prov:'Cádiz',pct:33.15},{prov:'Murcia',pct:25.3},{prov:'Málaga',pct:30.34},{prov:'Alicante',pct:32},
    {prov:'Sevilla',pct:36.6},{prov:'Valencia',pct:32.1},{prov:'Barcelona',pct:35.7},{prov:'Madrid',pct:27.84}
  ].sort((a,b)=>b.pct-a.pct)},
  'VOX':{nombre:'VOX',color:'#2e7d32',emoji:'🟢',colorBg:'rgba(46,125,50,.18)',colorBorder:'rgba(46,125,50,.4)',datos:[
    {prov:'Ceuta',pct:23.26},{prov:'Melilla',pct:15.94},{prov:'Soria',pct:9.81},{prov:'Teruel',pct:13.08},
    {prov:'Segovia',pct:14.12},{prov:'Cuenca',pct:15.55},{prov:'Huesca',pct:12.64},{prov:'Palencia',pct:12.9},
    {prov:'Zamora',pct:13.2},{prov:'Ávila',pct:15.38},{prov:'Guadalajara',pct:19.25},{prov:'Albacete',pct:16.61},
    {prov:'Lleida',pct:6.81},{prov:'La Rioja',pct:9.77},{prov:'Lugo',pct:4.35},{prov:'Ourense',pct:4.87},
    {prov:'Cáceres',pct:13.6},{prov:'León',pct:12.9},{prov:'Álava',pct:3.89},{prov:'Burgos',pct:12.77},
    {prov:'Salamanca',pct:14.67},{prov:'Valladolid',pct:15.16},{prov:'Jaén',pct:14.75},{prov:'Castellón',pct:15.88},
    {prov:'Badajoz',pct:13.66},{prov:'Cantabria',pct:14.06},{prov:'Navarra',pct:5.7},{prov:'Huelva',pct:14.63},
    {prov:'Ciudad Real',pct:16.27},{prov:'Guipúzcoa',pct:2.09},{prov:'Tarragona',pct:10.34},{prov:'Girona',pct:7.03},
    {prov:'Toledo',pct:19.64},{prov:'Córdoba',pct:13.94},{prov:'Almería',pct:21.28},{prov:'Pontevedra',pct:4.81},
    {prov:'Granada',pct:16.12},{prov:'Asturias',pct:12.49},{prov:'Zaragoza',pct:15.3},{prov:'Baleares',pct:15.21},
    {prov:'Vizcaya',pct:2.64},{prov:'Las Palmas',pct:14.61},{prov:'A Coruña',pct:5.08},{prov:'Cádiz',pct:15.18},
    {prov:'Murcia',pct:21.81},{prov:'Málaga',pct:16.46},{prov:'Alicante',pct:16.25},{prov:'Sevilla',pct:13.32},
    {prov:'Valencia',pct:15.21},{prov:'Barcelona',pct:7.56},{prov:'Madrid',pct:14.03}
  ].sort((a,b)=>b.pct-a.pct)},
  'SUMAR':{nombre:'Sumar',color:'#ff0080',emoji:'🟠',colorBg:'rgba(255,0,128,.18)',colorBorder:'rgba(255,0,128,.4)',datos:[
    {prov:'Ceuta',pct:2.46},{prov:'Melilla',pct:3.02},{prov:'Soria',pct:3.37},{prov:'Teruel',pct:5.44},
    {prov:'Segovia',pct:8.05},{prov:'Cuenca',pct:5.56},{prov:'Huesca',pct:11.49},{prov:'Palencia',pct:6.06},
    {prov:'Zamora',pct:5.65},{prov:'Ávila',pct:5.13},{prov:'Guadalajara',pct:9.16},{prov:'Albacete',pct:7.16},
    {prov:'Lleida',pct:7.89},{prov:'La Rioja',pct:6.57},{prov:'Lugo',pct:5.18},{prov:'Ourense',pct:5.46},
    {prov:'Cáceres',pct:6.93},{prov:'León',pct:6.7},{prov:'Álava',pct:12.75},{prov:'Burgos',pct:8.64},
    {prov:'Salamanca',pct:5.53},{prov:'Valladolid',pct:8.87},{prov:'Jaén',pct:7.99},{prov:'Castellón',pct:14.35},
    {prov:'Badajoz',pct:6.84},{prov:'Cantabria',pct:8.49},{prov:'Navarra',pct:12.85},{prov:'Huelva',pct:10.42},
    {prov:'Ciudad Real',pct:6.15},{prov:'Guipúzcoa',pct:10.64},{prov:'Tarragona',pct:11.34},{prov:'Girona',pct:10.94},
    {prov:'Toledo',pct:8.23},{prov:'Córdoba',pct:13.73},{prov:'Almería',pct:6.69},{prov:'Pontevedra',pct:13.19},
    {prov:'Granada',pct:11.65},{prov:'Asturias',pct:14.85},{prov:'Zaragoza',pct:13.48},{prov:'Santa Cruz de Tenerife',pct:10.85},
    {prov:'Baleares',pct:16.59},{prov:'Vizcaya',pct:10.92},{prov:'Las Palmas',pct:10.27},{prov:'A Coruña',pct:12.19},
    {prov:'Cádiz',pct:12.89},{prov:'Murcia',pct:9.57},{prov:'Málaga',pct:12.26},{prov:'Alicante',pct:12.88},
    {prov:'Sevilla',pct:14.04},{prov:'Valencia',pct:16.9},{prov:'Barcelona',pct:15.22},{prov:'Madrid',pct:15.46}
  ].sort((a,b)=>b.pct-a.pct)},
  'ERC':{nombre:'ERC',color:'#f9c74f',emoji:'🟡',colorBg:'rgba(249,199,79,.18)',colorBorder:'rgba(249,199,79,.4)',datos:[
    {prov:'Lleida',pct:18.6},{prov:'Tarragona',pct:15.07},{prov:'Girona',pct:14.72},{prov:'Barcelona',pct:12.32}
  ].sort((a,b)=>b.pct-a.pct)},
  'JUNTS':{nombre:'Junts',color:'#40E0D0',emoji:'🩵',colorBg:'rgba(64,224,208,.18)',colorBorder:'rgba(64,224,208,.4)',datos:[
    {prov:'Lleida',pct:18.01},{prov:'Tarragona',pct:11.08},{prov:'Girona',pct:19.58},{prov:'Barcelona',pct:9.68}
  ].sort((a,b)=>b.pct-a.pct)},
  'EHBILDU':{nombre:'EH Bildu',color:'#4caf50',emoji:'🌿',colorBg:'rgba(76,175,80,.18)',colorBorder:'rgba(76,175,80,.4)',datos:[
    {prov:'Álava',pct:19.51},{prov:'Navarra',pct:17.25},{prov:'Guipúzcoa',pct:31.15},{prov:'Vizcaya',pct:20.64}
  ].sort((a,b)=>b.pct-a.pct)},
  'PNV':{nombre:'PNV',color:'#1a6b3a',emoji:'🟩',colorBg:'rgba(26,107,58,.18)',colorBorder:'rgba(26,107,58,.4)',datos:[
    {prov:'Álava',pct:16.6},{prov:'Guipúzcoa',pct:22.58},{prov:'Vizcaya',pct:26.93}
  ].sort((a,b)=>b.pct-a.pct)},
  'BNG':{nombre:'BNG',color:'#00529b',emoji:'🔷',colorBg:'rgba(0,82,155,.18)',colorBorder:'rgba(0,82,155,.4)',datos:[
    {prov:'Lugo',pct:8.66},{prov:'Ourense',pct:8.22},{prov:'Pontevedra',pct:9.39},{prov:'A Coruña',pct:9.98}
  ].sort((a,b)=>b.pct-a.pct)},
  'CUP':{nombre:'CUP',color:'#7b1fa2',emoji:'⬛',colorBg:'rgba(123,31,162,.18)',colorBorder:'rgba(123,31,162,.4)',datos:[
    {prov:'Girona',pct:5.64},{prov:'Lleida',pct:2.95},{prov:'Barcelona',pct:2.52},{prov:'Tarragona',pct:2.36}
  ].sort((a,b)=>b.pct-a.pct)},
  'PDECAT':{nombre:'PDeCat',color:'#0288d1',emoji:'🔹',colorBg:'rgba(2,136,209,.18)',colorBorder:'rgba(2,136,209,.4)',datos:[
    {prov:'Girona',pct:1.05},{prov:'Lleida',pct:1.01},{prov:'Barcelona',pct:0.92},{prov:'Tarragona',pct:0.63}
  ].sort((a,b)=>b.pct-a.pct)},
  'CCA':{nombre:'Coalicion Canaria',color:'#e67e22',emoji:'🌋',colorBg:'rgba(230,126,34,.18)',colorBorder:'rgba(230,126,34,.4)',datos:[
    {prov:'Santa Cruz de Tenerife',pct:16.75},{prov:'Las Palmas',pct:6.34}
  ].sort((a,b)=>b.pct-a.pct)},
  'NCA':{nombre:'Nueva Canarias',color:'#1976d2',emoji:'🌊',colorBg:'rgba(25,118,210,.18)',colorBorder:'rgba(25,118,210,.4)',datos:[
    {prov:'Las Palmas',pct:8.02},{prov:'Santa Cruz de Tenerife',pct:0.64}
  ].sort((a,b)=>b.pct-a.pct)},
  'UPN':{nombre:'UPN',color:'#c62828',emoji:'🔶',colorBg:'rgba(198,40,40,.18)',colorBorder:'rgba(198,40,40,.4)',datos:[
    {prov:'Navarra',pct:15.27}
  ].sort((a,b)=>b.pct-a.pct)},
  'GEROABAI':{nombre:'Geroa Bai',color:'#00796b',emoji:'💚',colorBg:'rgba(0,121,107,.18)',colorBorder:'rgba(0,121,107,.4)',datos:[
    {prov:'Navarra',pct:2.91}
  ].sort((a,b)=>b.pct-a.pct)},
  'ADELANTE ANDALUCIA':{nombre:'Adelante Andalucia',color:'#e91e63',emoji:'🌹',colorBg:'rgba(233,30,99,.18)',colorBorder:'rgba(233,30,99,.4)',datos:[
    {prov:'Cádiz',pct:1.44}
  ].sort((a,b)=>b.pct-a.pct)},
  'JAEN MERECE MAS':{nombre:'Jaen Merece Mas',color:'#558b2f',emoji:'🌻',colorBg:'rgba(85,139,47,.18)',colorBorder:'rgba(85,139,47,.4)',datos:[
    {prov:'Jaén',pct:2.25}
  ].sort((a,b)=>b.pct-a.pct)},
  'UPL':{nombre:'Union del Pueblo Leones',color:'#9e9d24',emoji:'🦁',colorBg:'rgba(158,157,36,.18)',colorBorder:'rgba(158,157,36,.4)',datos:[
    {prov:'León',pct:8.2},{prov:'Zamora',pct:0.51}
  ].sort((a,b)=>b.pct-a.pct)},
  'XAV':{nombre:'Por Avila',color:'#6d4c41',emoji:'🏰',colorBg:'rgba(109,76,65,.18)',colorBorder:'rgba(109,76,65,.4)',datos:[
    {prov:'Ávila',pct:7.52}
  ].sort((a,b)=>b.pct-a.pct)},
  'ARAGON EXISTE':{nombre:'Aragon Existe',color:'#0097a7',emoji:'🏔️',colorBg:'rgba(0,151,167,.18)',colorBorder:'rgba(0,151,167,.4)',datos:[
    {prov:'Teruel',pct:14.95},{prov:'Zaragoza',pct:1.5},{prov:'Huesca',pct:1.09}
  ].sort((a,b)=>b.pct-a.pct)},
  'PAR':{nombre:'Partido Aragones',color:'#4e342e',emoji:'🦅',colorBg:'rgba(78,52,46,.18)',colorBorder:'rgba(78,52,46,.4)',datos:[
    {prov:'Huesca',pct:0.6},{prov:'Teruel',pct:0.94},{prov:'Zaragoza',pct:0.53}
  ].sort((a,b)=>b.pct-a.pct)},
  'SORIA YA':{nombre:'Soria Ya',color:'#ff8f00',emoji:'⭐',colorBg:'rgba(255,143,0,.18)',colorBorder:'rgba(255,143,0,.4)',datos:[
    {prov:'Soria',pct:19.1}
  ].sort((a,b)=>b.pct-a.pct)},
  'CPM':{nombre:'Coalicion por Melilla',color:'#00838f',emoji:'🕌',colorBg:'rgba(0,131,143,.18)',colorBorder:'rgba(0,131,143,.4)',datos:[
    {prov:'Melilla',pct:4.75}
  ].sort((a,b)=>b.pct-a.pct)},
};

const PARTIDOS_PROV_EUROPEAS = {
  'PP':{nombre:'Partido Popular',color:'#1565c0',emoji:'🔵',colorBg:'rgba(21,101,192,.18)',colorBorder:'rgba(21,101,192,.4)',datos:[
    {prov:'Ceuta',pct:36.53},{prov:'Melilla',pct:40.09},{prov:'Soria',pct:42.32},{prov:'Teruel',pct:37.06},
    {prov:'Segovia',pct:45.62},{prov:'Cuenca',pct:41.54},{prov:'Huesca',pct:37.7},{prov:'Palencia',pct:44.48},
    {prov:'Zamora',pct:47.05},{prov:'Ávila',pct:49.38},{prov:'Guadalajara',pct:37.18},{prov:'Albacete',pct:42.63},
    {prov:'Lleida',pct:12.24},{prov:'La Rioja',pct:44.7},{prov:'Lugo',pct:49.91},{prov:'Ourense',pct:51.11},
    {prov:'Cáceres',pct:41.23},{prov:'León',pct:41.77},{prov:'Álava',pct:17.62},{prov:'Burgos',pct:42.77},
    {prov:'Salamanca',pct:49.88},{prov:'Valladolid',pct:42.68},{prov:'Jaén',pct:39.74},{prov:'Castellón',pct:36.18},
    {prov:'Badajoz',pct:41.57},{prov:'Cantabria',pct:42.72},{prov:'Navarra',pct:28.02},{prov:'Huelva',pct:38.32},
    {prov:'Ciudad Real',pct:43.66},{prov:'Guipúzcoa',pct:8.58},{prov:'Tarragona',pct:14.77},{prov:'Girona',pct:9.53},
    {prov:'Toledo',pct:40.83},{prov:'Córdoba',pct:39.68},{prov:'Almería',pct:42.86},{prov:'Pontevedra',pct:39.5},
    {prov:'Granada',pct:38.32},{prov:'Asturias',pct:36.89},{prov:'Zaragoza',pct:37.06},{prov:'Santa Cruz de Tenerife',pct:28.45},
    {prov:'Baleares',pct:35.78},{prov:'Vizcaya',pct:11.58},{prov:'Las Palmas',pct:30.15},{prov:'A Coruña',pct:43.17},
    {prov:'Cádiz',pct:36.76},{prov:'Murcia',pct:42.87},{prov:'Málaga',pct:38.74},{prov:'Alicante',pct:38.28},
    {prov:'Sevilla',pct:34.63},{prov:'Valencia',pct:34.37},{prov:'Barcelona',pct:14.24},{prov:'Madrid',pct:40.69}
  ].sort((a,b)=>b.pct-a.pct)},
  'PSOE':{nombre:'PSOE',color:'#c0392b',emoji:'🔴',colorBg:'rgba(192,57,43,.18)',colorBorder:'rgba(192,57,43,.4)',datos:[
    {prov:'Ceuta',pct:32.24},{prov:'Melilla',pct:33.67},{prov:'Soria',pct:28.86},{prov:'Teruel',pct:28.59},
    {prov:'Segovia',pct:28.77},{prov:'Cuenca',pct:33.86},{prov:'Huesca',pct:31.67},{prov:'Palencia',pct:32.2},
    {prov:'Zamora',pct:30.41},{prov:'Ávila',pct:26.18},{prov:'Guadalajara',pct:29.58},{prov:'Albacete',pct:31.12},
    {prov:'Lleida',pct:23.83},{prov:'La Rioja',pct:32.58},{prov:'Lugo',pct:25.83},{prov:'Ourense',pct:25.98},
    {prov:'Cáceres',pct:36.44},{prov:'León',pct:33.79},{prov:'Álava',pct:28.81},{prov:'Burgos',pct:31.28},
    {prov:'Salamanca',pct:27.53},{prov:'Valladolid',pct:30.41},{prov:'Jaén',pct:35.44},{prov:'Castellón',pct:31.84},
    {prov:'Badajoz',pct:36.67},{prov:'Cantabria',pct:31.01},{prov:'Navarra',pct:28.79},{prov:'Huelva',pct:35.31},
    {prov:'Ciudad Real',pct:32.83},{prov:'Guipúzcoa',pct:23.92},{prov:'Tarragona',pct:28.89},{prov:'Girona',pct:23.33},
    {prov:'Toledo',pct:31.32},{prov:'Córdoba',pct:31.36},{prov:'Almería',pct:26.74},{prov:'Pontevedra',pct:28.92},
    {prov:'Granada',pct:32},{prov:'Asturias',pct:35.08},{prov:'Zaragoza',pct:30.07},{prov:'Santa Cruz de Tenerife',pct:29.35},
    {prov:'Baleares',pct:28.9},{prov:'Vizcaya',pct:26.36},{prov:'Las Palmas',pct:31.59},{prov:'A Coruña',pct:26.03},
    {prov:'Cádiz',pct:31.87},{prov:'Murcia',pct:25.03},{prov:'Málaga',pct:29.53},{prov:'Alicante',pct:31.21},
    {prov:'Sevilla',pct:34.44},{prov:'Valencia',pct:31.44},{prov:'Barcelona',pct:32.15},{prov:'Madrid',pct:28.15}
  ].sort((a,b)=>b.pct-a.pct)},
  'VOX':{nombre:'VOX',color:'#2e7d32',emoji:'🟢',colorBg:'rgba(46,125,50,.18)',colorBorder:'rgba(46,125,50,.4)',datos:[
    {prov:'Ceuta',pct:16.73},{prov:'Melilla',pct:14.07},{prov:'Soria',pct:9.48},{prov:'Teruel',pct:11.22},
    {prov:'Segovia',pct:10.51},{prov:'Cuenca',pct:12.36},{prov:'Huesca',pct:11.25},{prov:'Palencia',pct:10.55},
    {prov:'Zamora',pct:10.19},{prov:'Ávila',pct:11.52},{prov:'Guadalajara',pct:14.45},{prov:'Albacete',pct:11.43},
    {prov:'Lleida',pct:6.04},{prov:'La Rioja',pct:8.79},{prov:'Lugo',pct:4.38},{prov:'Ourense',pct:4.33},
    {prov:'Cáceres',pct:10.09},{prov:'León',pct:10.24},{prov:'Álava',pct:3.93},{prov:'Burgos',pct:9.94},
    {prov:'Salamanca',pct:10.18},{prov:'Valladolid',pct:11.23},{prov:'Jaén',pct:10.84},{prov:'Castellón',pct:11.76},
    {prov:'Badajoz',pct:9.85},{prov:'Cantabria',pct:9.89},{prov:'Navarra',pct:6.63},{prov:'Huelva',pct:10.15},
    {prov:'Ciudad Real',pct:11.73},{prov:'Guipúzcoa',pct:2.12},{prov:'Tarragona',pct:7.89},{prov:'Girona',pct:5.72},
    {prov:'Toledo',pct:14.41},{prov:'Córdoba',pct:10.14},{prov:'Almería',pct:15.21},{prov:'Pontevedra',pct:4.15},
    {prov:'Granada',pct:11.55},{prov:'Asturias',pct:9.93},{prov:'Zaragoza',pct:11.64},{prov:'Santa Cruz de Tenerife',pct:11.03},
    {prov:'Baleares',pct:11.2},{prov:'Vizcaya',pct:2.67},{prov:'Las Palmas',pct:12.95},{prov:'A Coruña',pct:4.44},
    {prov:'Cádiz',pct:10.76},{prov:'Murcia',pct:15.86},{prov:'Málaga',pct:11.37},{prov:'Alicante',pct:11.7},
    {prov:'Sevilla',pct:9.61},{prov:'Valencia',pct:11.35},{prov:'Barcelona',pct:6.03},{prov:'Madrid',pct:10.72}
  ].sort((a,b)=>b.pct-a.pct)},
  'SUMAR':{nombre:'Sumar',color:'#ff0080',emoji:'🟠',colorBg:'rgba(255,0,128,.18)',colorBorder:'rgba(255,0,128,.4)',datos:[
    {prov:'Ceuta',pct:1.57},{prov:'Melilla',pct:1.72},{prov:'Soria',pct:2.07},{prov:'Teruel',pct:3.03},
    {prov:'Segovia',pct:3.42},{prov:'Cuenca',pct:2.56},{prov:'Huesca',pct:4.76},{prov:'Palencia',pct:2.56},
    {prov:'Zamora',pct:1.87},{prov:'Ávila',pct:2.46},{prov:'Guadalajara',pct:4.14},{prov:'Albacete',pct:3.17},
    {prov:'Lleida',pct:2.16},{prov:'La Rioja',pct:3.25},{prov:'Lugo',pct:1.15},{prov:'Ourense',pct:1.13},
    {prov:'Cáceres',pct:2.51},{prov:'León',pct:2.75},{prov:'Álava',pct:3.74},{prov:'Burgos',pct:3.4},
    {prov:'Salamanca',pct:2.3},{prov:'Valladolid',pct:3.59},{prov:'Jaén',pct:3.47},{prov:'Castellón',pct:7.27},
    {prov:'Badajoz',pct:2.47},{prov:'Cantabria',pct:3.14},{prov:'Navarra',pct:3.85},{prov:'Huelva',pct:4.16},
    {prov:'Ciudad Real',pct:2.55},{prov:'Guipúzcoa',pct:3.02},{prov:'Tarragona',pct:2.84},{prov:'Girona',pct:2.95},
    {prov:'Toledo',pct:2.98},{prov:'Córdoba',pct:6.53},{prov:'Almería',pct:2.79},{prov:'Pontevedra',pct:2.6},
    {prov:'Granada',pct:4.74},{prov:'Asturias',pct:5.95},{prov:'Zaragoza',pct:5.43},{prov:'Santa Cruz de Tenerife',pct:3.36},
    {prov:'Baleares',pct:4.35},{prov:'Vizcaya',pct:3.29},{prov:'Las Palmas',pct:4.64},{prov:'A Coruña',pct:2.16},
    {prov:'Cádiz',pct:5.53},{prov:'Murcia',pct:3.26},{prov:'Málaga',pct:4.94},{prov:'Alicante',pct:5.63},
    {prov:'Sevilla',pct:5.96},{prov:'Valencia',pct:8.89},{prov:'Barcelona',pct:4.78},{prov:'Madrid',pct:5.8}
  ].sort((a,b)=>b.pct-a.pct)},
  'PODEMOS':{nombre:'Podemos',color:'#6a1b9a',emoji:'💜',colorBg:'rgba(106,27,154,.18)',colorBorder:'rgba(106,27,154,.4)',datos:[
    {prov:'Ceuta',pct:2.02},{prov:'Melilla',pct:1.63},{prov:'Soria',pct:1.97},{prov:'Teruel',pct:1.82},
    {prov:'Segovia',pct:2.52},{prov:'Cuenca',pct:1.89},{prov:'Huesca',pct:2.81},{prov:'Palencia',pct:1.84},
    {prov:'Zamora',pct:1.82},{prov:'Ávila',pct:2.13},{prov:'Guadalajara',pct:3.11},{prov:'Albacete',pct:2.24},
    {prov:'Lleida',pct:2.21},{prov:'La Rioja',pct:2.32},{prov:'Lugo',pct:1.32},{prov:'Ourense',pct:1.17},
    {prov:'Cáceres',pct:2.45},{prov:'León',pct:2.51},{prov:'Álava',pct:3.62},{prov:'Burgos',pct:2.53},
    {prov:'Salamanca',pct:2.12},{prov:'Valladolid',pct:2.64},{prov:'Jaén',pct:1.88},{prov:'Castellón',pct:2.65},
    {prov:'Badajoz',pct:2.09},{prov:'Cantabria',pct:2.7},{prov:'Navarra',pct:3.22},{prov:'Huelva',pct:2.38},
    {prov:'Ciudad Real',pct:1.81},{prov:'Guipúzcoa',pct:3},{prov:'Tarragona',pct:3},{prov:'Girona',pct:3.18},
    {prov:'Toledo',pct:2.16},{prov:'Córdoba',pct:2.55},{prov:'Almería',pct:1.76},{prov:'Pontevedra',pct:2.19},
    {prov:'Granada',pct:2.95},{prov:'Asturias',pct:3.78},{prov:'Zaragoza',pct:3.25},{prov:'Santa Cruz de Tenerife',pct:3.46},
    {prov:'Baleares',pct:3.14},{prov:'Vizcaya',pct:3.18},{prov:'Las Palmas',pct:3.39},{prov:'A Coruña',pct:2.17},
    {prov:'Cádiz',pct:2.86},{prov:'Murcia',pct:2.35},{prov:'Málaga',pct:2.79},{prov:'Alicante',pct:2.53},
    {prov:'Sevilla',pct:3.48},{prov:'Valencia',pct:3.35},{prov:'Barcelona',pct:5.14},{prov:'Madrid',pct:4.45}
  ].sort((a,b)=>b.pct-a.pct)},
  'SALF':{nombre:'Se Acabó La Fiesta',color:'#e65100',emoji:'🌟',colorBg:'rgba(230,81,0,.18)',colorBorder:'rgba(230,81,0,.4)',datos:[
    {prov:'Ceuta',pct:7.8},{prov:'Melilla',pct:5.9},{prov:'Soria',pct:3.11},{prov:'Teruel',pct:4.65},
    {prov:'Segovia',pct:4.39},{prov:'Cuenca',pct:3.88},{prov:'Huesca',pct:4.69},{prov:'Palencia',pct:4.05},
    {prov:'Zamora',pct:3.29},{prov:'Ávila',pct:4.19},{prov:'Guadalajara',pct:6.52},{prov:'Albacete',pct:5.61},
    {prov:'Lleida',pct:2.31},{prov:'La Rioja',pct:3.66},{prov:'Lugo',pct:1.66},{prov:'Ourense',pct:1.81},
    {prov:'Cáceres',pct:3.22},{prov:'León',pct:4.02},{prov:'Álava',pct:2.29},{prov:'Burgos',pct:3.96},
    {prov:'Salamanca',pct:3.67},{prov:'Valladolid',pct:4.52},{prov:'Jaén',pct:4.44},{prov:'Castellón',pct:5.11},
    {prov:'Badajoz',pct:3.59},{prov:'Cantabria',pct:5.7},{prov:'Navarra',pct:3.06},{prov:'Huelva',pct:4.89},
    {prov:'Ciudad Real',pct:4.13},{prov:'Guipúzcoa',pct:1.4},{prov:'Tarragona',pct:3.37},{prov:'Girona',pct:2.18},
    {prov:'Toledo',pct:4.85},{prov:'Córdoba',pct:5.32},{prov:'Almería',pct:7.02},{prov:'Pontevedra',pct:2.26},
    {prov:'Granada',pct:6.02},{prov:'Asturias',pct:3.29},{prov:'Zaragoza',pct:5.24},{prov:'Santa Cruz de Tenerife',pct:5.88},
    {prov:'Baleares',pct:5.35},{prov:'Vizcaya',pct:1.76},{prov:'Las Palmas',pct:6.73},{prov:'A Coruña',pct:2},
    {prov:'Cádiz',pct:6.49},{prov:'Murcia',pct:6.58},{prov:'Málaga',pct:7.44},{prov:'Alicante',pct:6.02},
    {prov:'Sevilla',pct:6.3},{prov:'Valencia',pct:5.76},{prov:'Barcelona',pct:2.84},{prov:'Madrid',pct:5.06}
  ].sort((a,b)=>b.pct-a.pct)},
  'CIUDADANOS':{nombre:'Ciudadanos',color:'#f57c00',emoji:'🔸',colorBg:'rgba(245,124,0,.18)',colorBorder:'rgba(245,124,0,.4)',datos:[
    {prov:'Ceuta',pct:0.5},{prov:'Melilla',pct:0.62},{prov:'Soria',pct:0.53},{prov:'Teruel',pct:0.43},
    {prov:'Segovia',pct:0.96},{prov:'Cuenca',pct:0.46},{prov:'Huesca',pct:0.78},{prov:'Palencia',pct:0.49},
    {prov:'Zamora',pct:0.7},{prov:'Ávila',pct:0.77},{prov:'Guadalajara',pct:0.74},{prov:'Albacete',pct:0.65},
    {prov:'Lleida',pct:0.34},{prov:'La Rioja',pct:0.62},{prov:'Lugo',pct:0.2},{prov:'Ourense',pct:0.22},
    {prov:'Cáceres',pct:0.5},{prov:'León',pct:0.62},{prov:'Álava',pct:0.21},{prov:'Burgos',pct:1.04},
    {prov:'Salamanca',pct:0.85},{prov:'Valladolid',pct:1},{prov:'Jaén',pct:0.54},{prov:'Castellón',pct:0.69},
    {prov:'Badajoz',pct:0.53},{prov:'Cantabria',pct:0.87},{prov:'Navarra',pct:0.5},{prov:'Huelva',pct:0.63},
    {prov:'Ciudad Real',pct:0.54},{prov:'Guipúzcoa',pct:0.11},{prov:'Tarragona',pct:0.5},{prov:'Girona',pct:0.32},
    {prov:'Toledo',pct:0.54},{prov:'Córdoba',pct:0.71},{prov:'Almería',pct:0.57},{prov:'Pontevedra',pct:0.26},
    {prov:'Granada',pct:0.74},{prov:'Asturias',pct:0.72},{prov:'Zaragoza',pct:0.96},{prov:'Santa Cruz de Tenerife',pct:0.41},
    {prov:'Baleares',pct:0.58},{prov:'Vizcaya',pct:0.13},{prov:'Las Palmas',pct:0.41},{prov:'A Coruña',pct:0.28},
    {prov:'Cádiz',pct:0.76},{prov:'Murcia',pct:0.75},{prov:'Málaga',pct:0.86},{prov:'Alicante',pct:0.73},
    {prov:'Sevilla',pct:0.8},{prov:'Valencia',pct:0.77},{prov:'Barcelona',pct:0.6},{prov:'Madrid',pct:1.1}
  ].sort((a,b)=>b.pct-a.pct)},
  'JUNTS':{nombre:'Junts per Catalunya',color:'#40E0D0',emoji:'💛',colorBg:'rgba(64,224,208,.18)',colorBorder:'rgba(64,224,208,.4)',datos:[
    {prov:'Girona',pct:32.09},{prov:'Lleida',pct:27.42},{prov:'Tarragona',pct:17.73},{prov:'Barcelona',pct:15.81},
    {prov:'Baleares',pct:0.75},{prov:'Castellón',pct:0.21},{prov:'Huesca',pct:0.2},{prov:'Vizcaya',pct:0.18},
    {prov:'Las Palmas',pct:0.11},{prov:'Guipúzcoa',pct:0.11},{prov:'Alicante',pct:0.1},{prov:'Santa Cruz de Tenerife',pct:0.1},
    {prov:'Zaragoza',pct:0.1},{prov:'Navarra',pct:0.1},{prov:'Madrid',pct:0.05},{prov:'Cantabria',pct:0.05},
    {prov:'Huelva',pct:0.05},{prov:'Cádiz',pct:0.05},{prov:'Teruel',pct:0.05},{prov:'Lugo',pct:0.04},
    {prov:'Álava',pct:0.04},{prov:'Pontevedra',pct:0.04},{prov:'Asturias',pct:0.03},{prov:'Ourense',pct:0.01},
    {prov:'Salamanca',pct:0.13},{prov:'Valladolid',pct:0.06},{prov:'León',pct:0.06},{prov:'Badajoz',pct:0.06},
    {prov:'Murcia',pct:0.06},{prov:'Málaga',pct:0.06},{prov:'Cáceres',pct:0.01},{prov:'Ávila',pct:0.02},
    {prov:'Guadalajara',pct:0.02},{prov:'Sevilla',pct:0.02},{prov:'A Coruña',pct:0.02},{prov:'Ceuta',pct:0.02},
    {prov:'Toledo',pct:0.01},{prov:'Segovia',pct:0.01},{prov:'Cuenca',pct:0.01},{prov:'Albacete',pct:0.01},
    {prov:'Burgos',pct:0.01},{prov:'La Rioja',pct:0.01},{prov:'Palencia',pct:0.01},{prov:'Zamora',pct:0.01},
    {prov:'Soria',pct:0.01},{prov:'Ciudad Real',pct:0.01},{prov:'Jaén',pct:0.01},{prov:'Melilla',pct:0.01},
    {prov:'Granada',pct:0.01},{prov:'Almería',pct:0.01},{prov:'Córdoba',pct:0.01},{prov:'Valencia',pct:0.13}
  ].sort((a,b)=>b.pct-a.pct)},
  'AR':{nombre:'Ahora República',color:'#1a237e',emoji:'🟦',colorBg:'rgba(26,35,126,.18)',colorBorder:'rgba(26,35,126,.4)',datos:[
    {prov:'Guipúzcoa',pct:34.47},{prov:'Álava',pct:21.38},{prov:'Vizcaya',pct:22.61},{prov:'Navarra',pct:18.75},
    {prov:'Lleida',pct:19.35},{prov:'A Coruña',pct:17.12},{prov:'Tarragona',pct:16.83},{prov:'Pontevedra',pct:17.48},
    {prov:'Girona',pct:16.22},{prov:'Barcelona',pct:14.09},{prov:'Lugo',pct:12.97},{prov:'Ourense',pct:11.86},
    {prov:'Baleares',pct:5.17},{prov:'Asturias',pct:0.39},{prov:'La Rioja',pct:0.36},{prov:'Castellón',pct:0.61},
    {prov:'Alicante',pct:0.33},{prov:'Valencia',pct:0.44},{prov:'Zaragoza',pct:0.27},{prov:'Madrid',pct:0.26},
    {prov:'Santa Cruz de Tenerife',pct:0.26},{prov:'Las Palmas',pct:0.26},{prov:'Cantabria',pct:0.32},
    {prov:'Soria',pct:0.18},{prov:'Teruel',pct:0.26},{prov:'Segovia',pct:0.22},{prov:'Huesca',pct:0.4},
    {prov:'Palencia',pct:0.13},{prov:'Zamora',pct:0.12},{prov:'Guadalajara',pct:0.24},{prov:'Albacete',pct:0.11},
    {prov:'Cuenca',pct:0.11},{prov:'Cáceres',pct:0.13},{prov:'León',pct:0.2},{prov:'Burgos',pct:0.43},
    {prov:'Salamanca',pct:0.13},{prov:'Valladolid',pct:0.16},{prov:'Ávila',pct:0.14},{prov:'Badajoz',pct:0.07},
    {prov:'Toledo',pct:0.09},{prov:'Córdoba',pct:0.06},{prov:'Almería',pct:0.09},{prov:'Granada',pct:0.12},
    {prov:'Málaga',pct:0.1},{prov:'Murcia',pct:0.09},{prov:'Huelva',pct:0.08},{prov:'Cádiz',pct:0.13},
    {prov:'Sevilla',pct:0.1},{prov:'Jaén',pct:0.04},{prov:'Ciudad Real',pct:0.07},{prov:'Ceuta',pct:0.1},
    {prov:'Melilla',pct:0.09}
  ].sort((a,b)=>b.pct-a.pct)},
  'CEUS':{nombre:'CEUS',color:'#f9a825',emoji:'🌐',colorBg:'rgba(249,168,37,.18)',colorBorder:'rgba(249,168,37,.4)',datos:[
    {prov:'Vizcaya',pct:25.4},{prov:'Guipúzcoa',pct:20.66},{prov:'Álava',pct:15.18},{prov:'Santa Cruz de Tenerife',pct:13.8},
    {prov:'Las Palmas',pct:6.46},{prov:'Navarra',pct:3.16},{prov:'Baleares',pct:0.96},{prov:'Cantabria',pct:0.1},
    {prov:'Lleida',pct:0.09},{prov:'Tarragona',pct:0.09},{prov:'Girona',pct:0.09},{prov:'Barcelona',pct:0.09},
    {prov:'La Rioja',pct:0.08},{prov:'Burgos',pct:0.08},{prov:'Guadalajara',pct:0.04},{prov:'Alicante',pct:0.04},
    {prov:'Valencia',pct:0.04},{prov:'Castellón',pct:0.03},{prov:'Lugo',pct:0.03},{prov:'Asturias',pct:0.03},
    {prov:'Zaragoza',pct:0.03},{prov:'Huesca',pct:0.03},{prov:'A Coruña',pct:0.03},{prov:'Pontevedra',pct:0.03},
    {prov:'Segovia',pct:0.03},{prov:'Valladolid',pct:0.03},{prov:'Salamanca',pct:0.03},{prov:'Cuenca',pct:0.03},
    {prov:'Soria',pct:0.02},{prov:'Ávila',pct:0.02},{prov:'Palencia',pct:0.02},{prov:'Zamora',pct:0.02},
    {prov:'Toledo',pct:0.02},{prov:'Sevilla',pct:0.02},{prov:'Córdoba',pct:0.02},{prov:'Granada',pct:0.02},
    {prov:'Almería',pct:0.02},{prov:'Murcia',pct:0.02},{prov:'Huelva',pct:0.02},{prov:'Cádiz',pct:0.03},
    {prov:'Ceuta',pct:0.02},{prov:'Badajoz',pct:0.01},{prov:'Cáceres',pct:0.01},{prov:'Ourense',pct:0.02},
    {prov:'León',pct:0.02},{prov:'Burgos',pct:0.08},{prov:'Málaga',pct:0.02},{prov:'Jaén',pct:0.01},
    {prov:'Ciudad Real',pct:0.01},{prov:'Albacete',pct:0.01},{prov:'Madrid',pct:0.05},{prov:'Melilla',pct:0.01}
    ,{prov:'Teruel',pct:0.02}
    ].sort((a,b)=>b.pct-a.pct)},
};

let rppSelectedPartido = null;
let rppRendered = false;
let rppTipoActual = 'generales';
let rppFilteredCCAA = '';

function rppGetCurrentData() {
  if (rppTipoActual === 'europeas') return PARTIDOS_PROV_EUROPEAS;
  if (rppTipoActual === 'generales') return PARTIDOS_PROV_GENERALES;
  return PARTIDOS_PROV_AUTONOMICAS;
}

function rppSetTipo(tipo, btnEl) {
  rppTipoActual = tipo;
  ['autonomicas','generales','europeas'].forEach(t => {
    const b = document.getElementById('rpp-btn-'+t);
    if (!b) return;
    b.style.background = t === tipo ? 'var(--accent)' : 'transparent';
    b.style.color = t === tipo ? '#fff' : 'var(--text2)';
  });
  const subs = {
    autonomicas:'Resultados de Elecciones Autonómicas por Circunscripción',
    generales:'Resultados de Elecciones Generales 2023 por Provincia',
    europeas:'Resultados de Elecciones Europeas 2024 por Provincia'
  };
  const subtitleEl = document.getElementById('rpp-panel-subtitle');
  if (subtitleEl) subtitleEl.textContent = (subs[tipo]||'') + ' · Selecciona un partido para ver su clasificación';
  rppRenderPartidoSelector();
  rppSelectPartido('PP');
}

function rppRenderPartidoSelector() {
  const data = rppGetCurrentData();
  const el = document.getElementById('rpp-partido-selector-btns');
  if (!el) return;
  el.innerHTML = Object.entries(data).map(([key, p]) => `
    <button onclick="rppSelectPartido('${key}')" id="rppbtn-${key}"
      style="display:flex;align-items:center;gap:8px;padding:10px 18px;border-radius:10px;border:2px solid ${p.colorBorder};
      background:${p.colorBg};color:${p.color};font-family:var(--font);font-size:13px;font-weight:700;
      cursor:pointer;transition:all .2s;white-space:nowrap;">
      ${p.emoji} ${p.nombre}
    </button>
  `).join('');
}

function renderRankingProvincias() {
  if (rppRendered) return;
  rppRendered = true;
  rppTipoActual = 'autonomicas';
  // Set autonomicas button active
  ['autonomicas','generales','europeas'].forEach(t => {
    const b = document.getElementById('rpp-btn-'+t);
    if (!b) return;
    b.style.background = t === 'autonomicas' ? 'var(--accent)' : 'transparent';
    b.style.color = t === 'autonomicas' ? '#fff' : 'var(--text2)';
  });
  rppRenderPartidoSelector();
  rppSelectPartido('PP');
}

function rppApplyFilter() {
  const sel = document.getElementById('rpp-ccaa-filter');
  rppFilteredCCAA = sel ? sel.value : '';
  const clearBtn = document.getElementById('rpp-clear-btn');
  if (clearBtn) clearBtn.style.display = rppFilteredCCAA ? 'inline-block' : 'none';
  if (rppSelectedPartido) rppSelectPartido(rppSelectedPartido);
}

function rppClearFilter() {
  rppFilteredCCAA = '';
  const sel = document.getElementById('rpp-ccaa-filter');
  if (sel) sel.value = '';
  const clearBtn = document.getElementById('rpp-clear-btn');
  if (clearBtn) clearBtn.style.display = 'none';
  if (rppSelectedPartido) rppSelectPartido(rppSelectedPartido);
}

function rppSelectPartido(key) {
  rppSelectedPartido = key;
  const data = rppGetCurrentData();
  const p = data[key];
  if (!p) return;

  // Highlight button
  Object.keys(data).forEach(k => {
    const btn = document.getElementById('rppbtn-'+k);
    if (!btn) return;
    btn.style.boxShadow = k === key ? `0 0 0 3px ${data[k].color}55, 0 4px 16px ${data[k].color}33` : 'none';
    btn.style.transform = k === key ? 'translateY(-2px)' : 'none';
  });

  // Filter by CCAA if active
  let datos = p.datos;
  if (rppFilteredCCAA) {
    datos = datos.filter(d => PROVINCIA_CCAA[d.prov] === rppFilteredCCAA);
    const filterInfo = document.getElementById('rpp-filter-info');
    const ccaaNombre = CCAA_NOMBRES[rppFilteredCCAA] || rppFilteredCCAA;
    if (filterInfo) filterInfo.textContent = `Mostrando ${datos.length} provincia${datos.length!==1?'s':''} de ${ccaaNombre}`;
  } else {
    const filterInfo = document.getElementById('rpp-filter-info');
    if (filterInfo) filterInfo.textContent = '';
  }

  if (datos.length === 0) {
    document.getElementById('rpp-top3-preview').innerHTML = '';
    document.getElementById('rpp-ranking-list').innerHTML = '<div style="text-align:center;padding:40px;color:var(--text3);font-size:13px;">No hay datos para esta CCAA con este partido</div>';
    document.getElementById('rpp-podium-section').style.display = 'none';
    return;
  }

  const maxPct = datos[0].pct;
  const medalEmoji = ['🥇','🥈','🥉'];

  // Mini podio top3
  const top3El = document.getElementById('rpp-top3-preview');
  top3El.innerHTML = datos.slice(0,3).map((d,i) => {
    const ccaa = PROVINCIA_CCAA[d.prov] ? CCAA_NOMBRES[PROVINCIA_CCAA[d.prov]] : '';
    return `
    <div class="top3-card pos-${i+1}" style="animation-delay:${i*0.1}s;border-color:${i===0?p.color+'66':''};background:${i===0?'linear-gradient(135deg,'+p.colorBg+',var(--surface))':''};min-width:130px;">
      <div class="top3-medal">${medalEmoji[i]}</div>
      <div class="top3-photo ${['gold','silver','bronze'][i]}" style="border-color:${i===0?p.color:i===1?'#b0b8c8':'#c07848'};box-shadow:0 0 14px ${p.color}44;">
        <span style="font-size:28px;">${p.emoji}</span>
      </div>
      <div class="top3-name" style="color:${p.color};font-size:12px;">${p.nombre}</div>
      <div class="top3-region" style="font-size:11px;font-weight:600;color:var(--text);">${d.prov}</div>
      ${ccaa?`<div style="font-size:9px;color:var(--text3);margin-top:2px;">${ccaa}</div>`:''}
      <div class="top3-pct ${['gold','silver','bronze'][i]}" style="color:${i===0?p.color:i===1?'#c0c8d8':'#d08050'}">${d.pct.toFixed(2)}%</div>
    </div>`}).join('');

  // List title
  const tipoLabel = rppTipoActual === 'europeas' ? 'europeas 2024' : rppTipoActual === 'generales' ? 'generales 2023' : 'autonómicas';
  document.getElementById('rpp-list-title').textContent = `Clasificación provincial — ${p.nombre}`;
  document.getElementById('rpp-list-subtitle').textContent = `${datos.length} provincia${datos.length!==1?'s':''} · Elecciones ${tipoLabel}`;

  // Full ranked list
  const listEl = document.getElementById('rpp-ranking-list');
  listEl.innerHTML = datos.map((d,i) => {
    const posLabel = i===0?'🥇':i===1?'🥈':i===2?'🥉':`${i+1}`;
    const posClass = i===0?'gold':i===1?'silver':i===2?'bronze':'normal';
    const barPct = (d.pct / maxPct * 100).toFixed(1);
    const ccaaKey = PROVINCIA_CCAA[d.prov];
    const ccaaNombre = ccaaKey ? CCAA_NOMBRES[ccaaKey] : '';
    return `
    <div class="rank-row" style="animation-delay:${Math.min(i*0.04,0.8)}s">
      <div class="rank-pos ${posClass}">${posLabel}</div>
      <div class="rank-avatar" style="width:100px;height:100px;border-color:${p.colorBorder};background:${p.colorBg};">
        <span style="font-size:22px;">${p.emoji}</span>
      </div>
      <div class="rank-info">
        <div class="rank-name" style="font-size:14px;">${d.prov}</div>
        <div class="rank-region">${ccaaNombre || p.nombre}</div>
      </div>
      <div class="rank-bar-wrap">
        <div class="rank-bar-track">
          <div class="rank-bar-fill" style="width:${barPct}%;background:linear-gradient(90deg,${p.color},${p.color}99);"></div>
        </div>
        <div class="rank-pct" style="color:${i<3?p.color:'var(--text2)'}">${d.pct.toFixed(2)}%</div>
      </div>
    </div>`;
  }).join('');

  // Animate bars
  setTimeout(() => {
    listEl.querySelectorAll('.rank-bar-fill').forEach(el => {
      const w = el.style.width; el.style.width = '0';
      requestAnimationFrame(() => { setTimeout(() => { el.style.width = w; }, 20); });
    });
  }, 150);

  // Podium visual
  if (datos.length >= 3) {
    const podiumSection = document.getElementById('rpp-podium-section');
    podiumSection.style.display = 'block';
    document.getElementById('rpp-podium-title').innerHTML = `${p.emoji} PODIO PROVINCIAL ${p.nombre.toUpperCase()} ${p.emoji}`;
    const order = [datos[1], datos[0], datos[2]];
    const standClass = ['s2','s1','s3'];
    const photoClass = ['p2','p1','p3'];
    const standLabel = ['🥈 2.º','🥇 1.º','🥉 3.º'];
    const pctColor = ['#c0c8d8', p.color, '#d08050'];
    const photoSizes = [{w:210,h:210},{w:260,h:260},{w:190,h:190}];
    document.getElementById('rpp-ranking-podium').innerHTML = order.map((d,i) => {
      const ccaaN = PROVINCIA_CCAA[d.prov] ? CCAA_NOMBRES[PROVINCIA_CCAA[d.prov]] : '';
      return `
      <div class="podium-block" style="animation:top3In .7s ease ${i*0.15}s both;">
        <div class="podium-photo-wrap">
          <div class="podium-photo ${photoClass[i]}"
            style="border-color:${i===1?p.color:i===0?'#9ca8bc':'#c07848'};
                   box-shadow:0 0 ${i===1?22:14}px ${p.color}${i===1?'66':'33'};
                   width:${photoSizes[i].w}px;height:${photoSizes[i].h}px;">
            <span style="font-size:${i===1?64:48}px;">${p.emoji}</span>
          </div>
          <div class="podium-label">
            <div class="podium-pname" style="font-size:13px;font-weight:700;">${d.prov}</div>
            <div class="podium-pregion" style="color:${p.color};font-size:11px;">${ccaaN}</div>
            <div class="podium-ppct" style="color:${pctColor[i]};font-size:18px;">${d.pct.toFixed(2)}%</div>
          </div>
        </div>
        <div class="podium-stand ${standClass[i]}" style="background:linear-gradient(180deg,${p.color}cc,${p.color}66);">${standLabel[i]}</div>
      </div>`;
    }).join('');
  } else {
    document.getElementById('rpp-podium-section').style.display = 'none';
  }
}


// ═══════════════════════════════════════════
//  COMPUTED DATA FOR ANALYSIS TOOLS
// ═══════════════════════════════════════════

const PROV_CCAA_MAP = {
  'Almería':'andalucia','Cádiz':'andalucia','Córdoba':'andalucia','Granada':'andalucia',
  'Huelva':'andalucia','Jaén':'andalucia','Málaga':'andalucia','Sevilla':'andalucia',
  'Huesca':'aragon','Teruel':'aragon','Zaragoza':'aragon',
  'Asturias':'asturias','Asturias Occidente':'asturias','Asturias Centro':'asturias','Asturias Oriente':'asturias',
  'Baleares':'baleares','Formentera':'baleares','Ibiza':'baleares','Menorca':'baleares','Mallorca':'baleares',
  'Las Palmas':'canarias','Santa Cruz de Tenerife':'canarias',
  'El Hierro':'canarias','La Gomera':'canarias','La Palma':'canarias','Tenerife':'canarias',
  'Fuerteventura':'canarias','Lanzarote':'canarias','Gran Canaria':'canarias','Urna Autonómica':'canarias',
  'Cantabria':'cantabria',
  'Albacete':'castilla_la_mancha','Ciudad Real':'castilla_la_mancha','Cuenca':'castilla_la_mancha',
  'Guadalajara':'castilla_la_mancha','Toledo':'castilla_la_mancha',
  'Ávila':'castilla_y_leon','Burgos':'castilla_y_leon','León':'castilla_y_leon',
  'Palencia':'castilla_y_leon','Salamanca':'castilla_y_leon','Segovia':'castilla_y_leon',
  'Soria':'castilla_y_leon','Valladolid':'castilla_y_leon','Zamora':'castilla_y_leon',
  'Barcelona':'cataluna','Girona':'cataluna','Lleida':'cataluna','Tarragona':'cataluna',
  'Ceuta':'ceuta',
  'Alicante':'comunidad_valenciana','Castellón':'comunidad_valenciana','Valencia':'comunidad_valenciana',
  'Badajoz':'extremadura','Cáceres':'extremadura',
  'A Coruña':'galicia','Lugo':'galicia','Ourense':'galicia','Pontevedra':'galicia',
  'La Rioja':'la_rioja','Madrid':'madrid','Melilla':'melilla','Murcia':'murcia','Navarra':'navarra',
  'Álava':'pais_vasco','Guipúzcoa':'pais_vasco','Vizcaya':'pais_vasco',
};

const CCAA_NOMBRES_MAP = {
  'andalucia':'Andalucía','aragon':'Aragón','asturias':'Asturias','baleares':'Baleares',
  'canarias':'Canarias','cantabria':'Cantabria','castilla_la_mancha':'Castilla-La Mancha',
  'castilla_y_leon':'Castilla y León','cataluna':'Cataluña','ceuta':'Ceuta',
  'comunidad_valenciana':'C. Valenciana','extremadura':'Extremadura','galicia':'Galicia',
  'la_rioja':'La Rioja','madrid':'Madrid','melilla':'Melilla','murcia':'Murcia',
  'navarra':'Navarra','pais_vasco':'País Vasco'
};

function getElecData(tipo) {
  if (tipo === 'generales') return PARTIDOS_PROV_GENERALES;
  if (tipo === 'europeas') return PARTIDOS_PROV_EUROPEAS;
  return PARTIDOS_PROV_AUTONOMICAS;
}

// datos is a sorted array [{prov,pct}] — build lookup map {prov: pct}
function datosToMap(datosArr) {
  const m = {};
  if (!datosArr) return m;
  datosArr.forEach(d => { if(d && d.prov !== undefined) m[d.prov] = d.pct; });
  return m;
}

// Get election data with .map = {prov:pct} pre-computed on each party
function getElecMapped(tipo) {
  const raw = getElecData(tipo);
  const out = {};
  Object.entries(raw).forEach(([pk, pd]) => {
    out[pk] = Object.assign({}, pd, { map: datosToMap(pd.datos) });
  });
  return out;
}

function getWinners(tipo) {
  const data = getElecMapped(tipo);
  const allProvs = new Set();
  Object.values(data).forEach(p => Object.keys(p.map).forEach(pv => allProvs.add(pv)));
  const winners = {};
  allProvs.forEach(prov => {
    let best = null, bestPct = -1;
    Object.entries(data).forEach(([pk, pd]) => {
      const pct = pd.map[prov] || 0;
      if (pct > bestPct) { bestPct = pct; best = pk; }
    });
    if (best) winners[prov] = { party: best, pct: bestPct,
      color: data[best].color, nombre: data[best].nombre, emoji: data[best].emoji };
  });
  return winners;
}

function getPolarization(tipo) {
  const data = getElecMapped(tipo);
  const allProvs = new Set();
  Object.values(data).forEach(p => Object.keys(p.map).forEach(pv => allProvs.add(pv)));
  const pol = {};
  allProvs.forEach(prov => {
    const scores = Object.entries(data)
      .map(([pk,pd]) => ({pk, pct: pd.map[prov]||0, color: pd.color, nombre: pd.nombre, emoji: pd.emoji||''}))
      .filter(x => x.pct > 0)
      .sort((a,b) => b.pct - a.pct);
    if (scores.length >= 2) {
      pol[prov] = { gap: +(scores[0].pct - scores[1].pct).toFixed(2),
        first: scores[0], second: scores[1] };
    }
  });
  return pol;
}

function getSpread(tipo) {
  const data = getElecMapped(tipo);
  const spread = {};
  Object.entries(data).forEach(([pk, pd]) => {
    const vals = Object.entries(pd.map);
    if (vals.length < 2) return;
    const sorted = [...vals].sort((a,b) => b[1]-a[1]);
    spread[pk] = {
      max_pct: sorted[0][1], max_prov: sorted[0][0],
      min_pct: sorted[sorted.length-1][1], min_prov: sorted[sorted.length-1][0],
      spread: +(sorted[0][1] - sorted[sorted.length-1][1]).toFixed(2),
      color: pd.color, nombre: pd.nombre, emoji: pd.emoji,
      colorBg: pd.colorBg, colorBorder: pd.colorBorder, count: vals.length
    };
  });
  return spread;
}

const LEFT_PARTIES_SET = new Set([
  'PSOE','SUMAR','PODEMOS','ERC','EHBILDU','BNG','CUP',
  'ADELANTE ANDALUCIA','ADELANTE ANDALUCÍA','GEROABAI',
  'NCA','MÉS','ASG','MDYC','CEUTA YA','SOMOS MELILLA','AR',
  'CPM','SORIA YA','UPL','ARAGÓN EXISTE','ARAGON EXISTE',
  'CHA','MÁS MADRID','COMPROMÍS','PRC','AHI'
]);
const RIGHT_PARTIES_SET = new Set([
  'PP','VOX','UPN','CCA','SA UNIÓ','PAR','JUNTS','PDECAT',
  'ALIANÇA CATALANA','DO','JAEN MERECE MAS','JAÉN MERECE MÁS',
  'XAV','FORO ASTURIAS','CIUDADANOS','SALF','PNV','CEUS'
]);
const REGIONAL_PARTIES_SET = new Set([]);

function getLRBalance(tipo) {
  const data = getElecMapped(tipo);
  const allProvs = new Set();
  Object.values(data).forEach(p => Object.keys(p.map).forEach(pv => allProvs.add(pv)));
  const balance = {};
  allProvs.forEach(prov => {
    let left=0, right=0, regional=0;
    Object.entries(data).forEach(([pk,pd]) => {
      const pct = pd.map[prov]||0;
      if (LEFT_PARTIES_SET.has(pk)) left += pct;
      else if (RIGHT_PARTIES_SET.has(pk)) right += pct;
      else if (REGIONAL_PARTIES_SET.has(pk)) regional += pct;
    });
    const total = left+right+regional;
    if (total > 0) balance[prov] = { left:+left.toFixed(1), right:+right.toFixed(1),
      regional:+regional.toFixed(1), total:+total.toFixed(1),
      winner: left > right ? 'left' : right > left ? 'right' : 'tie' };
  });
  return balance;
}


// ═══ GANADORES TOOL ═══
let ganadoresTipo = 'autonomicas';
let gWinnersCache = {};
let ganadoresInited = false;

function ganadoresInit() {
  if (ganadoresInited) return;
  ganadoresInited = true;
  ganadoresSetTipo('autonomicas', document.getElementById('gan-btn-autonomicas'));
}

function ganadoresSetTipo(tipo, btn) {
  ganadoresTipo = tipo;
  ['autonomicas','generales','europeas'].forEach(t => {
    const b = document.getElementById('gan-btn-'+t);
    if (!b) return;
    b.style.background = t===tipo ? 'var(--accent)' : 'transparent';
    b.style.color = t===tipo ? '#fff' : 'var(--text2)';
  });
  if (!gWinnersCache[tipo]) gWinnersCache[tipo] = getWinners(tipo);
  ganadoresRender();
}

function ganadoresFilter() {
  const q = (document.getElementById('gan-search').value||'').toLowerCase();
  document.querySelectorAll('.gan-row').forEach(row => {
    row.style.display = row.dataset.prov.toLowerCase().includes(q) ? '' : 'none';
  });
}

function ganadoresRender() {
  const winners = gWinnersCache[ganadoresTipo];
  const sorted = Object.entries(winners).sort((a,b) => b[1].pct - a[1].pct);
  // Summary badges
  const counts = {};
  sorted.forEach(([,w]) => { counts[w.party] = counts[w.party]||{count:0, color:w.color, nombre:w.nombre, emoji:w.emoji}; counts[w.party].count++; });
  const summaryEl = document.getElementById('gan-summary');
  summaryEl.innerHTML = Object.entries(counts).sort((a,b)=>b[1].count-a[1].count).map(([pk,info]) =>
    `<div style="display:flex;align-items:center;gap:7px;padding:8px 14px;border-radius:10px;border:2px solid ${info.color}44;background:${info.color}18;">
      <span style="font-size:18px;">${info.emoji}</span>
      <div><div style="font-size:14px;font-weight:800;color:${info.color};">${info.nombre}</div>
      <div style="font-size:12px;color:var(--text3);font-weight:600;">${info.count} circunscripci${info.count===1?'ón':'ones'}</div></div></div>`
  ).join('');
  document.getElementById('gan-list-title').textContent = `${sorted.length} circunscripciones`;
  // Full list
  const label = {autonomicas:'Autonómicas',generales:'Generales 2023',europeas:'Europeas 2024'}[ganadoresTipo];
  document.getElementById('gan-list').innerHTML = sorted.map(([prov, w]) => {
    const ccaa = CCAA_NOMBRES_MAP[PROV_CCAA_MAP[prov]]||'';
    return `<div class="rank-row gan-row" data-prov="${prov}" style="animation:fi .2s ease;">
      <div class="rank-avatar" style="width:40px;height:40px;border-color:${w.color}44;background:${w.color}18;flex-shrink:0;">
        <span style="font-size:18px;">${w.emoji}</span></div>
      <div class="rank-info" style="flex:1;">
        <div class="rank-name" style="font-size:14px;">${prov}</div>
        <div class="rank-region" style="color:${w.color};">${w.nombre}${ccaa?' · '+ccaa:''}</div>
      </div>
      <div style="font-size:22px;font-weight:900;color:${w.color};min-width:70px;text-align:right;letter-spacing:-.5px;">${w.pct.toFixed(1)}%</div>
    </div>`;
  }).join('');
}

// ═══ EVOLUCIÓN TOOL ═══
let evoInited = false;
let evoChart = null;

function evolucionInit() {
  if (evoInited) return;
  evoInited = true;
  // Build province list (all provinces common to at least 2 elections)
  const allProvs = new Set();
  [PARTIDOS_PROV_AUTONOMICAS, PARTIDOS_PROV_GENERALES, PARTIDOS_PROV_EUROPEAS].forEach(data =>
    Object.values(data).forEach(p => { const m = datosToMap(p.datos); Object.keys(m).forEach(pv => allProvs.add(pv)); }));
  const provSel = document.getElementById('evo-prov-sel');
  provSel.innerHTML = [...allProvs].sort().map(p => `<option value="${p}">${p}</option>`).join('');
  provSel.value = 'Madrid';
  // Build party list (parties in at least 2 elections)
  const allParties = {};
  [PARTIDOS_PROV_AUTONOMICAS, PARTIDOS_PROV_GENERALES, PARTIDOS_PROV_EUROPEAS].forEach(data =>
    Object.entries(data).forEach(([pk,pd]) => {
      if (!allParties[pk]) allParties[pk] = {nombre:pd.nombre,color:pd.color,emoji:pd.emoji,count:0};
      allParties[pk].count++;
    }));
  const partySel = document.getElementById('evo-party-sel');
  partySel.innerHTML = Object.entries(allParties).sort((a,b)=>b[1].count-a[1].count)
    .map(([pk,pm]) => `<option value="${pk}">${pm.emoji} ${pm.nombre}</option>`).join('');
  partySel.value = 'PP';
  evolucionRender();
}

// Map of province → autonomous community election year
const PROV_AUT_YEAR = {
  // Andalucía 2022
  'Almería':2022,'Cádiz':2022,'Córdoba':2022,'Granada':2022,'Huelva':2022,'Jaén':2022,'Málaga':2022,'Sevilla':2022,
  // Madrid 2023
  'Madrid':2023,
  // Comunidad Valenciana 2023
  'Alicante':2023,'Castellón':2023,'Valencia':2023,
  // Castilla La Mancha 2023
  'Albacete':2023,'Ciudad Real':2023,'Cuenca':2023,'Guadalajara':2023,'Toledo':2023,
  // Canarias 2023
  'Gran Canaria':2023,'El Hierro':2023,'Fuerteventura':2023,'La Gomera':2023,'La Palma':2023,'Lanzarote':2023,'Tenerife':2023,'Urna Autonómica':2023,
  // Murcia 2023
  'Murcia':2023,
  // Baleares 2023
  'Mallorca':2023,'Menorca':2023,'Ibiza':2023,'Formentera':2023,
  // Asturias 2023
  'Asturias Centro':2023,'Asturias Occidente':2023,'Asturias Oriente':2023,
  // Navarra 2023
  'Navarra':2023,
  // Cantabria 2023
  'Cantabria':2023,
  // La Rioja 2023
  'La Rioja':2023,
  // Ceuta 2023
  'Ceuta':2023,
  // Melilla 2023
  'Melilla':2023,
  // Galicia 2024
  'A Coruña':2024,'Lugo':2024,'Ourense':2024,'Pontevedra':2024,
  // País Vasco 2024
  'Álava':2024,'Guipúzcoa':2024,'Vizcaya':2024,
  // Cataluña 2024
  'Barcelona':2024,'Girona':2024,'Lleida':2024,'Tarragona':2024,
  // Extremadura 2025 (provisional - shown as future)
  'Badajoz':2025,'Cáceres':2025,
  // Aragón 2026
  'Huesca':2026,'Teruel':2026,'Zaragoza':2026,
  // Castilla y León 2026
  'Ávila':2026,'Burgos':2026,'León':2026,'Palencia':2026,'Salamanca':2026,'Segovia':2026,'Soria':2026,'Valladolid':2026,'Zamora':2026,
};

function evolucionRender() {
  const prov = document.getElementById('evo-prov-sel').value;
  const partyKey = document.getElementById('evo-party-sel').value;
  const allData = {autonomicas:PARTIDOS_PROV_AUTONOMICAS, generales:PARTIDOS_PROV_GENERALES, europeas:PARTIDOS_PROV_EUROPEAS};
  const autYear = PROV_AUT_YEAR[prov] || 2023;
  // Build ordered labels: Autonómicas(year) → Generales 2023 (if after aut) → Europeas 2024 (if after gen)
  const sequence = [];
  sequence.push({key:'autonomicas', label:'Aut. '+autYear, year:autYear});
  if(autYear <= 2023) sequence.push({key:'generales', label:'Gen. 2023', year:2023});
  sequence.push({key:'europeas', label:'Eur. 2024', year:2024});
  
  const labels = sequence.map(s=>s.label);
  const elecKeys = sequence.map(s=>s.key);
  const values = sequence.map(s => {
    const d = allData[s.key];
    if (!d[partyKey]) return null;
    const m = datosToMap(d[partyKey].datos);
    return m[prov] !== undefined ? m[prov] : null;
  });
  const partyMeta = (PARTIDOS_PROV_AUTONOMICAS[partyKey]||PARTIDOS_PROV_GENERALES[partyKey]||PARTIDOS_PROV_EUROPEAS[partyKey]);
  if (!partyMeta) return;
  const color = partyMeta.color;
  // Chart
  const ctx = document.getElementById('evo-canvas').getContext('2d');
  if (evoChart) evoChart.destroy();
  evoChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label: partyMeta.nombre + ' en ' + prov,
        data: values,
        borderColor: color,
        backgroundColor: color + '22',
        pointBackgroundColor: color,
        pointRadius: 8, pointHoverRadius: 11,
        borderWidth: 3, fill: true, tension: 0.3,
        spanGaps: false,
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { labels: { color: '#e8ecf4', font: { family: 'Sora', size: 12 } } },
        tooltip: { callbacks: { label: ctx => ` ${ctx.parsed.y?.toFixed(2)}%` } }
      },
      scales: {
        x: { ticks: { color: '#8e97ad' }, grid: { color: '#ffffff0f' } },
        y: { ticks: { color: '#8e97ad', callback: v => v+'%' }, grid: { color: '#ffffff0f' }, min: 0 }
      }
    }
  });
  // Summary cards
  const nonNull = values.filter(v=>v!==null);
  const hasChange = nonNull.length >= 2;
  const delta = hasChange ? +(nonNull[nonNull.length-1] - nonNull[0]).toFixed(2) : 0;
  document.getElementById('evo-summary-cards').innerHTML = elecKeys.map((ek,i) => {
    const v = values[i];
    if (v===null) return `<div style="padding:14px 18px;border-radius:10px;border:1px solid var(--border);background:var(--surface);opacity:0.4;"><div style="font-size:11px;color:var(--text3);">${labels[i]}</div><div style="font-size:14px;color:var(--text3);">Sin datos</div></div>`;
    const prev = values.slice(0,i).filter(x=>x!==null);
    const diff = prev.length ? +(v - prev[prev.length-1]).toFixed(2) : null;
    const diffStr = diff !== null ? (diff > 0 ? `<span style="color:#4caf50;">▲ +${diff}%</span>` : diff < 0 ? `<span style="color:#ef5350;">▼ ${diff}%</span>` : `<span style="color:var(--text3);">= 0%</span>`) : '';
    return `<div style="padding:14px 18px;border-radius:10px;border:1px solid ${color}33;background:${color}0f;flex:1;min-width:130px;">
      <div style="font-size:11px;color:var(--text3);margin-bottom:4px;">${labels[i]}</div>
      <div style="font-size:28px;font-weight:900;color:${color};letter-spacing:-1px;">${v.toFixed(2)}%</div>
      <div style="font-size:12px;margin-top:4px;">${diffStr}</div></div>`;
  }).join('');
}

// ═══ DELTA VOTO TOOL ═══
let deltaPair = 'aut-gen';
let deltaParty = null;
let deltaInited = false;

function deltaInit() {
  if (deltaInited) return;
  deltaInited = true;
  const commonParties = Object.keys(PARTIDOS_PROV_AUTONOMICAS).filter(pk =>
    PARTIDOS_PROV_GENERALES[pk] || PARTIDOS_PROV_EUROPEAS[pk]);
  const btns = document.getElementById('dv-party-btns');
  btns.innerHTML = commonParties.map(pk => {
    const m = PARTIDOS_PROV_AUTONOMICAS[pk]||PARTIDOS_PROV_GENERALES[pk]||PARTIDOS_PROV_EUROPEAS[pk];
    return `<button onclick="deltaSelectParty('${pk}')" id="dvp-${pk.replace(/[^a-zA-Z]/g,'_')}"
      style="padding:8px 14px;border-radius:9px;border:2px solid ${m.colorBorder};background:${m.colorBg};
      color:${m.color};font-family:var(--font);font-size:12px;font-weight:700;cursor:pointer;white-space:nowrap;">
      ${m.emoji} ${m.nombre}</button>`;
  }).join('');
  deltaSelectParty('PP');
}

function deltaSetPair(pair, btn) {
  deltaPair = pair;
  ['aut-gen','gen-eur','aut-eur'].forEach(p => {
    const b = document.getElementById('dv-btn-'+p);
    if (!b) return;
    b.style.background = p===pair ? 'var(--accent)' : 'transparent';
    b.style.color = p===pair ? '#fff' : 'var(--text2)';
  });
  if (deltaParty) deltaRender();
}

function deltaSelectParty(pk) {
  deltaParty = pk;
  document.querySelectorAll('[id^="dvp-"]').forEach(b => { b.style.boxShadow='none'; b.style.transform='none'; });
  const safeId = 'dvp-'+pk.replace(/[^a-zA-Z]/g,'_');
  const btn = document.getElementById(safeId);
  if (btn) { btn.style.boxShadow = '0 0 0 3px '+btn.style.color+'55'; btn.style.transform='translateY(-2px)'; }
  deltaRender();
}

function deltaRender() {
  if (!deltaParty) return;
  const [fromType, toType] = deltaPair === 'aut-gen' ? ['autonomicas','generales'] :
    deltaPair === 'gen-eur' ? ['generales','europeas'] : ['autonomicas','europeas'];
  const fromData = getElecData(fromType);
  const toData = getElecData(toType);
  const fromP = fromData[deltaParty];
  const toP = toData[deltaParty];
  if (!fromP || !toP) {
    document.getElementById('dv-full-list').innerHTML = '<div style="padding:30px;text-align:center;color:var(--text3);">Sin datos para esta combinación</div>';
    return;
  }
  const color = fromP.color;
  const deltas = [];
  const fromMap = datosToMap(fromP.datos);
  const toMap = datosToMap(toP.datos);
  const commonProvs = Object.keys(fromMap).filter(pv => toMap[pv] !== undefined);
  commonProvs.forEach(prov => {
    const diff = +(toMap[prov] - fromMap[prov]).toFixed(2);
    deltas.push({ prov, diff, from: fromMap[prov], to: toMap[prov], color });
  });
  deltas.sort((a,b) => b.diff - a.diff);
  const fromLabel = {autonomicas:'Aut',generales:'Gen',europeas:'Eur'}[fromType];
  const toLabel = {autonomicas:'Aut',generales:'Gen',europeas:'Eur'}[toType];
  const renderRow = (d, i) => {
    const ccaa = CCAA_NOMBRES_MAP[PROV_CCAA_MAP[d.prov]]||'';
    const col = d.diff > 0 ? '#4caf50' : d.diff < 0 ? '#ef5350' : '#8e97ad';
    const arrow = d.diff > 0 ? '▲' : d.diff < 0 ? '▼' : '=';
    return `<div class="rank-row" style="animation-delay:${Math.min(i*.03,.5)}s;">
      <div class="rank-pos normal" style="font-size:11px;">${i+1}</div>
      <div class="rank-info" style="flex:1;">
        <div class="rank-name" style="font-size:13px;">${d.prov}</div>
        <div class="rank-region" style="font-size:10px;">${fromLabel}: ${d.from.toFixed(1)}% → ${toLabel}: ${d.to.toFixed(1)}%${ccaa?' · '+ccaa:''}</div>
      </div>
      <div style="font-size:20px;font-weight:900;color:${col};min-width:80px;text-align:right;letter-spacing:-.5px;">${arrow} ${d.diff>0?'+':''}${d.diff}%</div>
    </div>`;
  };
  document.getElementById('dv-gainers').innerHTML = deltas.slice(0,5).map(renderRow).join('');
  document.getElementById('dv-losers').innerHTML = deltas.slice(-5).reverse().map(renderRow).join('');
  document.getElementById('dv-full-title').textContent = `${fromP.nombre} · ${fromLabel} → ${toLabel} · ${commonProvs.length} provincias comunes`;
  document.getElementById('dv-full-list').innerHTML = deltas.map(renderRow).join('');
}

// ═══ BRECHA TERRITORIAL TOOL ═══
let brechaTipo = 'autonomicas';
let brechaInited = false;

function brechaInit() {
  if (brechaInited) return;
  brechaInited = true;
  brechaSetTipo('autonomicas', document.getElementById('br-btn-autonomicas'));
}

function brechaSetTipo(tipo, btn) {
  brechaTipo = tipo;
  ['autonomicas','generales','europeas'].forEach(t => {
    const b = document.getElementById('br-btn-'+t);
    if (!b) return;
    b.style.background = t===tipo ? 'var(--accent)' : 'transparent';
    b.style.color = t===tipo ? '#fff' : 'var(--text2)';
  });
  brechaRender();
}

function brechaRender() {
  const spread = getSpread(brechaTipo);
  const sorted = Object.entries(spread).sort((a,b) => b[1].spread - a[1].spread);
  document.getElementById('br-list').innerHTML = sorted.map(([pk, s]) => {
    const pct = (s.spread / (s.max_pct||1) * 100);
    return `<div style="padding:14px 18px;background:var(--surface);border:1px solid ${s.colorBorder};border-radius:10px;animation:fi .2s ease;">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
        <span style="font-size:22px;">${s.emoji}</span>
        <div style="flex:1;"><div style="font-size:18px;font-weight:800;color:${s.color};letter-spacing:-.3px;">${s.nombre}</div>
          <div style="font-size:13px;color:var(--text3);font-weight:600;">${s.count} circunscripciones</div></div>
        <div style="text-align:right;"><div style="font-size:24px;font-weight:900;color:${s.color};letter-spacing:-.8px;">${s.spread.toFixed(1)}%</div>
          <div style="font-size:10px;color:var(--text3);">de brecha</div></div>
      </div>
      <div style="display:flex;gap:0;height:10px;border-radius:5px;overflow:hidden;margin-bottom:8px;">
        <div style="width:${(s.min_pct/s.max_pct*100).toFixed(1)}%;background:${s.color}44;"></div>
        <div style="flex:1;background:${s.color};"></div>
      </div>
      <div style="display:flex;justify-content:space-between;font-size:13px;font-weight:600;color:var(--text3);">
        <span>🔻 Mínimo: ${s.min_pct.toFixed(1)}% <b style="color:var(--text);">${s.min_prov}</b></span>
        <span>🔺 Máximo: ${s.max_pct.toFixed(1)}% <b style="color:var(--text);">${s.max_prov}</b></span>
      </div></div>`;
  }).join('');
}

// ═══ POLARIZACIÓN TOOL ═══
let polarizTipo = 'autonomicas';
let polarizInited = false;

function polarizInit() {
  if (polarizInited) return;
  polarizInited = true;
  polarizSetTipo('autonomicas', document.getElementById('pol-btn-autonomicas'));
}

function polarizSetTipo(tipo, btn) {
  polarizTipo = tipo;
  ['autonomicas','generales','europeas'].forEach(t => {
    const b = document.getElementById('pol-btn-'+t);
    if (!b) return;
    b.style.background = t===tipo ? 'var(--accent)' : 'transparent';
    b.style.color = t===tipo ? '#fff' : 'var(--text2)';
  });
  polarizRender();
}

function polarizRender() {
  const pol = getPolarization(polarizTipo);
  const sorted = Object.entries(pol).sort((a,b) => b[1].gap - a[1].gap);
  document.getElementById('pol-full-title').textContent = `${sorted.length} circunscripciones · Brecha entre 1.º y 2.º`;
  const renderPolRow = ([prov, p], i) => {
    const ccaa = CCAA_NOMBRES_MAP[PROV_CCAA_MAP[prov]]||'';
    const barW = Math.min(100, (p.gap/30*100)).toFixed(1);
    return `<div class="rank-row" style="animation-delay:${Math.min(i*.03,.5)}s;">
      <div class="rank-pos ${i===0?'gold':i===1?'silver':i===2?'bronze':'normal'}" style="font-size:12px;">${i===0?'🥇':i===1?'🥈':i===2?'🥉':i+1}</div>
      <div class="rank-info" style="flex:1;">
        <div class="rank-name">${prov}${ccaa?` <span style="font-size:10px;color:var(--text3);">(${ccaa})</span>`:''}</div>
        <div class="rank-region">
          <span style="color:${p.first.color};">${p.first.emoji||''} ${p.first.nombre}: ${p.first.pct.toFixed(1)}%</span>
          <span style="color:var(--text3);"> · 2.º </span>
          <span style="color:${p.second.color};">${p.second.nombre}: ${p.second.pct.toFixed(1)}%</span>
        </div>
      </div>
      <div class="rank-bar-wrap">
        <div class="rank-bar-track"><div class="rank-bar-fill" style="width:${barW}%;background:linear-gradient(90deg,${p.first.color},${p.first.color}99);"></div></div>
        <div class="rank-pct" style="color:${i<3?p.first.color:'var(--text2)'};font-size:18px;font-weight:800;letter-spacing:-.5px;">${p.gap.toFixed(1)}%</div>
      </div></div>`;
  };
  document.getElementById('pol-top').innerHTML = sorted.slice(0,8).map(renderPolRow).join('');
  document.getElementById('pol-bottom').innerHTML = [...sorted].reverse().slice(0,8).map((item,i) => renderPolRow(item, sorted.length-1-i)).join('');
  document.getElementById('pol-full-list').innerHTML = sorted.map(renderPolRow).join('');
  setTimeout(() => {
    document.querySelectorAll('#pol-full-list .rank-bar-fill, #pol-top .rank-bar-fill, #pol-bottom .rank-bar-fill').forEach(el => {
      const w = el.style.width; el.style.width='0'; requestAnimationFrame(()=>setTimeout(()=>{el.style.width=w;},20));
    });
  }, 100);
}

// ═══ COMPARADOR DOS PARTIDOS ═══
let comp2Tipo = 'autonomicas';
let comp2Chart = null;
let comp2Inited = false;

function comp2Init() {
  if (comp2Inited) return;
  comp2Inited = true;
  comp2SetTipo('autonomicas', document.getElementById('cmp2-btn-autonomicas'));
}

function comp2SetTipo(tipo, btn) {
  comp2Tipo = tipo;
  ['autonomicas','generales','europeas'].forEach(t => {
    const b = document.getElementById('cmp2-btn-'+t);
    if (!b) return;
    b.style.background = t===tipo ? 'var(--accent)' : 'transparent';
    b.style.color = t===tipo ? '#fff' : 'var(--text2)';
  });
  const data = getElecData(tipo);
  const parties = Object.keys(data);
  const selA = document.getElementById('cmp2-party-a');
  const selB = document.getElementById('cmp2-party-b');
  const buildOpts = (sel, defaultVal) => {
    sel.innerHTML = parties.map(pk => {
      const m = data[pk];
      return `<option value="${pk}">${m.emoji} ${m.nombre}</option>`;
    }).join('');
    if (parties.includes(defaultVal)) sel.value = defaultVal; else sel.value = parties[0];
  };
  buildOpts(selA, 'PP');
  buildOpts(selB, 'PSOE');
  comp2Render();
}

function comp2Render() {
  const data = getElecData(comp2Tipo);
  const pkA = document.getElementById('cmp2-party-a').value;
  const pkB = document.getElementById('cmp2-party-b').value;
  const pA = data[pkA], pB = data[pkB];
  if (!pA || !pB) return;
  const mapA = datosToMap(pA.datos);
  const mapB = datosToMap(pB.datos);
  const commonProvs = Object.keys(mapA).filter(pv => mapB[pv] !== undefined);
  const points = commonProvs.map(pv => ({ x: mapA[pv], y: mapB[pv], prov: pv,
    ccaa: CCAA_NOMBRES_MAP[PROV_CCAA_MAP[pv]]||'' }));
  const ctx = document.getElementById('cmp2-canvas').getContext('2d');
  if (comp2Chart) comp2Chart.destroy();
  comp2Chart = new Chart(ctx, {
    type: 'scatter',
    data: { datasets: [{
      label: `${pA.nombre} vs ${pB.nombre}`,
      data: points,
      backgroundColor: points.map(p => pA.color + 'bb'),
      borderColor: pA.color,
      pointRadius: 7, pointHoverRadius: 10,
    }]},
    options: {
      responsive: true,
      plugins: {
        tooltip: { callbacks: {
          label: ctx => `${ctx.raw.prov}: ${pA.emoji} ${ctx.raw.x.toFixed(1)}% | ${pB.emoji} ${ctx.raw.y.toFixed(1)}%`
        }},
        legend: { labels: { color: '#e8ecf4', font: { family:'Sora',size:11 } } }
      },
      scales: {
        x: { title: { display:true, text: pA.nombre+' %', color: pA.color, font:{family:'Sora',weight:'bold'} },
          ticks:{color:'#8e97ad'}, grid:{color:'#ffffff0f'}, min:0 },
        y: { title: { display:true, text: pB.nombre+' %', color: pB.color, font:{family:'Sora',weight:'bold'} },
          ticks:{color:'#8e97ad'}, grid:{color:'#ffffff0f'}, min:0 }
      }
    }
  });
  // Correlation
  const n = points.length;
  const meanX = points.reduce((s,p)=>s+p.x,0)/n;
  const meanY = points.reduce((s,p)=>s+p.y,0)/n;
  const cov = points.reduce((s,p)=>s+(p.x-meanX)*(p.y-meanY),0)/n;
  const sdX = Math.sqrt(points.reduce((s,p)=>s+(p.x-meanX)**2,0)/n);
  const sdY = Math.sqrt(points.reduce((s,p)=>s+(p.y-meanY)**2,0)/n);
  const r = sdX&&sdY ? +(cov/(sdX*sdY)).toFixed(2) : 0;
  const rLabel = r > 0.7 ? 'Correlación positiva fuerte' : r > 0.3 ? 'Correlación positiva moderada' :
    r < -0.7 ? 'Correlación negativa fuerte' : r < -0.3 ? 'Correlación negativa moderada' : 'Sin correlación clara';
  const topA = [...points].sort((a,b)=>b.x-a.x)[0];
  const topB = [...points].sort((a,b)=>b.y-a.y)[0];
  document.getElementById('cmp2-insights').innerHTML = [
    `<div style="padding:12px 16px;border-radius:10px;border:1px solid var(--border);background:var(--surface);flex:1;min-width:150px;">
      <div style="font-size:10px;color:var(--text3);text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">Correlación (r)</div>
      <div style="font-size:28px;font-weight:900;color:${r>0?'#4caf50':r<0?'#ef5350':'var(--text2)'};letter-spacing:-1px;">${r}</div>
      <div style="font-size:11px;color:var(--text3);">${rLabel}</div></div>`,
    `<div style="padding:12px 16px;border-radius:10px;border:1px solid ${pA.color}33;background:${pA.colorBg};flex:1;min-width:150px;">
      <div style="font-size:10px;color:var(--text3);text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">${pA.emoji} Mejor de ${pA.nombre}</div>
      <div style="font-size:20px;font-weight:800;color:${pA.color};letter-spacing:-.5px;">${topA?.prov}</div>
      <div style="font-size:24px;font-weight:900;color:${pA.color};letter-spacing:-.8px;">${topA?.x.toFixed(1)}%</div></div>`,
    `<div style="padding:12px 16px;border-radius:10px;border:1px solid ${pB.color}33;background:${pB.colorBg};flex:1;min-width:150px;">
      <div style="font-size:10px;color:var(--text3);text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">${pB.emoji} Mejor de ${pB.nombre}</div>
      <div style="font-size:20px;font-weight:800;color:${pB.color};letter-spacing:-.5px;">${topB?.prov}</div>
      <div style="font-size:24px;font-weight:900;color:${pB.color};letter-spacing:-.8px;">${topB?.y.toFixed(1)}%</div></div>`,
    `<div style="padding:12px 16px;border-radius:10px;border:1px solid var(--border);background:var(--surface);flex:1;min-width:150px;">
      <div style="font-size:10px;color:var(--text3);text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">Provincias comunes</div>
      <div style="font-size:28px;font-weight:900;color:var(--text);letter-spacing:-1px;">${n}</div></div>`,
  ].join('');
}

// ═══ IZQUIERDA VS DERECHA TOOL ═══
let ldTipo = 'autonomicas';
let ldFilter = 'all';
let ldInited = false;

function izqderInit() {
  if (ldInited) return;
  ldInited = true;
  izqderSetTipo('autonomicas', document.getElementById('ld-btn-autonomicas'));
}

function izqderSetTipo(tipo, btn) {
  ldTipo = tipo;
  ['autonomicas','generales','europeas'].forEach(t => {
    const b = document.getElementById('ld-btn-'+t);
    if (!b) return;
    b.style.background = t===tipo ? 'var(--accent)' : 'transparent';
    b.style.color = t===tipo ? '#fff' : 'var(--text2)';
  });
  izqderRender();
}

function izqderFilter(f) {
  ldFilter = f;
  ['all','left','right'].forEach(x => {
    const b = document.getElementById('ld-f-'+x);
    if (!b) return;
    b.style.background = x===f ? 'var(--accent)' : 'transparent';
    b.style.color = x===f ? '#fff' : (x==='left'?'#ef5350':x==='right'?'#1565c0':'var(--text2)');
  });
  izqderRender();
}

function izqderRender() {
  const balance = getLRBalance(ldTipo);
  let entries = Object.entries(balance).sort((a,b) => (b[1].right-b[1].left) - (a[1].right-a[1].left));
  if (ldFilter === 'left') entries = entries.filter(([,b])=>b.winner==='left');
  if (ldFilter === 'right') entries = entries.filter(([,b])=>b.winner==='right');
  // Summary
  const leftCount = Object.values(balance).filter(b=>b.winner==='left').length;
  const rightCount = Object.values(balance).filter(b=>b.winner==='right').length;
  const tieCount = Object.values(balance).filter(b=>b.winner==='tie').length;
  document.getElementById('ld-summary').innerHTML = [
    `<div style="padding:12px 18px;border-radius:10px;border:2px solid #ef535044;background:#ef535018;"><div style="font-size:32px;font-weight:900;color:#ef5350;">${leftCount}</div><div style="font-size:11px;color:var(--text3);">🔴 Gana izquierda</div></div>`,
    `<div style="padding:12px 18px;border-radius:10px;border:2px solid #1565c044;background:#1565c018;"><div style="font-size:32px;font-weight:900;color:#1565c0;">${rightCount}</div><div style="font-size:11px;color:var(--text3);">🔵 Gana derecha</div></div>`,
    tieCount ? `<div style="padding:12px 18px;border-radius:10px;border:2px solid var(--border);background:var(--surface);"><div style="font-size:20px;font-weight:800;color:var(--text2);">${tieCount}</div><div style="font-size:11px;color:var(--text3);">⚖️ Empate</div></div>` : ''
  ].join('');
  // List
  document.getElementById('ld-list').innerHTML = entries.map(([prov, b]) => {
    const ccaa = CCAA_NOMBRES_MAP[PROV_CCAA_MAP[prov]]||'';
    const maxVal = Math.max(b.left, b.right, b.regional||0) || 1;
    const leftW = (b.left/maxVal*100).toFixed(1);
    const rightW = (b.right/maxVal*100).toFixed(1);
    const regW = ((b.regional||0)/maxVal*100).toFixed(1);
    const col = b.winner==='left' ? '#ef5350' : b.winner==='right' ? '#1565c0' : '#8e97ad';
    const label = b.winner==='left' ? `🔴 Izquierda +${(b.left-b.right).toFixed(1)}%` :
      b.winner==='right' ? `🔵 Derecha +${(b.right-b.left).toFixed(1)}%` : '⚖️ Empate';
    return `<div style="padding:12px 16px;background:var(--surface);border:1px solid ${col}22;border-left:3px solid ${col};border-radius:8px;animation:fi .2s ease;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
        <div><span style="font-size:17px;font-weight:800;letter-spacing:-.3px;">${prov}</span>${ccaa?` <span style="font-size:10px;color:var(--text3);">${ccaa}</span>`:''}</div>
        <span style="font-size:14px;font-weight:800;color:${col};">${label}</span>
      </div>
      <div style="display:flex;gap:3px;height:8px;border-radius:4px;overflow:hidden;margin-bottom:6px;">
        <div style="width:${leftW}%;background:#ef5350;border-radius:2px;"></div>
        <div style="width:${rightW}%;background:#1565c0;border-radius:2px;"></div>
        ${b.regional?`<div style="width:${regW}%;background:#8e97ad;border-radius:2px;"></div>`:''}
      </div>
      <div style="display:flex;gap:12px;font-size:10px;color:var(--text3);">
        <span style="color:#ef5350;font-size:14px;font-weight:700;">🔴 Izq: ${b.left}%</span>
        <span style="color:#1565c0;font-size:14px;font-weight:700;">🔵 Der: ${b.right}%</span>
        ${b.regional?`<span>⚫ Reg: ${b.regional}%</span>`:''}
      </div></div>`;
  }).join('');
}

const SYSTEMS=[
    {name:"Sistema D'Hondt",type:'Representación Proporcional',color:'acc',badge:'b-blue',tag:'España',desc:"Divide votos entre 1,2,3… y asigna escaños al cociente más alto. Favorece a partidos mayores.",tags:[{t:'España',c:'rgba(21,101,192,.2)',tc:'#4f8ef7'},{t:'Bélgica',c:'rgba(21,101,192,.2)',tc:'#4f8ef7'}],detail:`<h3 style="font-size:14px;font-weight:700;margin-bottom:9px;">D'Hondt en detalle</h3><p style="font-size:13px;color:var(--text2);line-height:1.7;margin-bottom:9px;">Inventado en 1878 por el matemático belga Victor D'Hondt. Se aplica en España desde 1977.</p><p style="font-size:13px;color:var(--text2);line-height:1.7;margin-bottom:9px;"><strong style="color:var(--text);">Efecto en España:</strong> En una provincia de 4 escaños, un partido necesita el 17% para obtener representación — barrera mayor que el umbral legal del 3%.</p><p style="font-size:13px;color:var(--text2);line-height:1.7;"><strong style="color:var(--text);">¿A quién favorece?</strong> A los dos partidos mayoritarios. Un partido con el 35% puede obtener el 43% de los escaños.</p>`},
    {name:'Sainte-Laguë',type:'Representación Proporcional',color:'gol',badge:'b-gold',tag:'Alemania',desc:"Usa divisores impares (1,3,5…). Mucho más proporcional que D'Hondt.",tags:[{t:'Alemania*',c:'rgba(245,183,49,.15)',tc:'var(--gold)'},{t:'Noruega',c:'rgba(245,183,49,.15)',tc:'var(--gold)'}],detail:`<h3 style="font-size:14px;font-weight:700;margin-bottom:9px;">Sainte-Laguë en detalle</h3><p style="font-size:13px;color:var(--text2);line-height:1.7;margin-bottom:9px;">Propuesto en 1910, considerado el método más proporcional de los divisores.</p><p style="font-size:13px;color:var(--text2);line-height:1.7;"><strong style="color:var(--text);">Variante modificada:</strong> Primer divisor 1,4. Reduce ventaja de partidos pequeños sin perjudicar medianos. Usada en Noruega.</p>`},
    {name:'Sistema Mayoritario',type:'First Past The Post',color:'red',badge:'b-red',tag:'Reino Unido',desc:'En cada circunscripción gana quien tiene más votos. Altamente desproporcional, favorece el bipartidismo.',tags:[{t:'Reino Unido',c:'rgba(239,83,80,.15)',tc:'#ef5350'},{t:'EEUU',c:'rgba(239,83,80,.15)',tc:'#ef5350'}],detail:`<h3 style="font-size:14px;font-weight:700;margin-bottom:9px;">Sistema mayoritario simple</h3><p style="font-size:13px;color:var(--text2);line-height:1.7;margin-bottom:9px;">El candidato con más votos gana el escaño, sin necesidad de mayoría absoluta.</p><p style="font-size:13px;color:var(--text2);line-height:1.7;"><strong style="color:var(--text);">UK 2015:</strong> UKIP obtuvo el 12,6% de los votos y 1 solo escaño. El SNP con 4,7% obtuvo 56.</p>`},
    {name:'Sistema Mixto (MMP)',type:'Miembro Proporcional Mixto',color:'grn',badge:'b-green',tag:'Alemania',desc:'Combina circunscripciones uninominales con listas proporcionales.',tags:[{t:'Alemania',c:'rgba(102,187,106,.15)',tc:'#66bb6a'},{t:'Nueva Zelanda',c:'rgba(102,187,106,.15)',tc:'#66bb6a'}],detail:`<h3 style="font-size:14px;font-weight:700;margin-bottom:9px;">Sistema Mixto (MMP)</h3><p style="font-size:13px;color:var(--text2);line-height:1.7;">Dos papeletas: una para candidato local, otra para lista de partido. Los escaños de lista compensan desproporcionalidades. El Bundestag llegó a 736 diputados en 2021 por los "overhang seats".</p>`},
    {name:'Voto Alternativo',type:'Preferential Voting',color:'acc',badge:'b-blue',tag:'Australia',desc:'El votante ordena candidatos. Si nadie tiene mayoría se eliminan los últimos y redistribuyen votos.',tags:[{t:'Australia',c:'rgba(79,142,247,.15)',tc:'var(--accent)'},{t:'Irlanda (STV)',c:'rgba(79,142,247,.15)',tc:'var(--accent)'}],detail:`<h3 style="font-size:14px;font-weight:700;margin-bottom:9px;">Voto Alternativo (IRV)</h3><p style="font-size:13px;color:var(--text2);line-height:1.7;">El ganador siempre supera el 50%. Elimina el "voto útil": puedes votar a tu partido favorito sin desperdiciar el voto.</p>`},
    {name:'Proporcional Pura',type:'Listas nacionales',color:'gol',badge:'b-gold',tag:'Israel',desc:'Todo el país es una sola circunscripción. Máxima proporcionalidad.',tags:[{t:'Israel',c:'rgba(245,183,49,.15)',tc:'var(--gold)'},{t:'Países Bajos',c:'rgba(245,183,49,.15)',tc:'var(--gold)'}],detail:`<h3 style="font-size:14px;font-weight:700;margin-bottom:9px;">Proporcional pura</h3><p style="font-size:13px;color:var(--text2);line-height:1.7;">No hay circunscripciones. Cualquier partido por encima del umbral obtiene representación. Desventaja: fragmentación extrema y gobiernos inestables.</p>`},
];

function renderSystems(){
    const g=document.getElementById('systems-grid');
    if(g.innerHTML)return;
    g.innerHTML=SYSTEMS.map((s,i)=>`<div class="sycard ${s.color}" onclick="showSystemDetail(${i})"><div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:5px;"><div class="syname">${s.name}</div><span class="badge ${s.badge}" style="flex-shrink:0;margin-left:7px;">${s.tag}</span></div><div class="sytype">${s.type}</div><div class="sydesc">${s.desc}</div><div class="sytags">${s.tags.map(t=>`<span class="sytag" style="background:${t.c};color:${t.tc};">${t.t}</span>`).join('')}</div></div>`).join('');
}

function showSystemDetail(i){
    const d=document.getElementById('system-detail'),s=SYSTEMS[i];
    d.innerHTML=`<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;"><span class="badge ${s.badge}">${s.type}</span><button onclick="document.getElementById('system-detail').classList.remove('active')" style="background:none;border:none;color:var(--text3);cursor:pointer;font-size:17px;line-height:1;">×</button></div>${s.detail}`;
    d.classList.add('active');
    d.scrollIntoView({behavior:'smooth',block:'nearest'});
}

// ═══════════════════════════════════════════
//  ADMIN
// ═══════════════════════════════════════════
function openAdminModal(){
    document.getElementById('admin-modal').classList.add('open');
    if(isAdmin)showAdminPanel();
    document.getElementById('admin-password').value='';
    document.getElementById('admin-error').style.display='none';
}
function closeAdminModal(){document.getElementById('admin-modal').classList.remove('open');}
document.getElementById('admin-modal').addEventListener('click',e=>{if(e.target===document.getElementById('admin-modal'))closeAdminModal();});

function loginAdmin(){
    const pw=document.getElementById('admin-password').value;
    if(pw==='ballotly2024'||pw==='admin123'){isAdmin=true;showAdminPanel();document.getElementById('admin-ctrl-mandato').style.display='block';}
    else document.getElementById('admin-error').style.display='block';
}
function logoutAdmin(){
    isAdmin=false;
    document.getElementById('admin-panel').style.display='none';
    document.getElementById('admin-login-form').style.display='block';
    document.getElementById('admin-ctrl-mandato').style.display='none';
}
function showAdminPanel(){
    document.getElementById('admin-login-form').style.display='none';
    document.getElementById('admin-panel').style.display='block';
    renderModalPresList();
    document.getElementById('photo-pres-select').innerHTML=presidentes.map(p=>`<option value="${p.id}">${p.nombre}</option>`).join('');
}
function renderModalPresList(){
    document.getElementById('modal-pres-list').innerHTML=presidentes.map(p=>`<div style="display:flex;align-items:center;gap:9px;padding:7px 0;border-bottom:1px solid var(--border);"><div style="width:9px;height:9px;border-radius:50%;background:${p.color};flex-shrink:0;"></div><span style="flex:1;font-size:12px;">${p.nombre}</span>${p.activo?'<span class="badge b-blue" style="font-size:9px;">Activo</span>':''}${p.activo?`<button onclick="terminarMandato(${p.id})" style="background:rgba(239,83,80,.1);border:1px solid rgba(239,83,80,.2);color:#ef5350;font-size:10px;padding:3px 7px;border-radius:4px;cursor:pointer;font-family:var(--font);">Terminar</button>`:''}<button onclick="deletePres(${p.id})" style="background:none;border:none;color:var(--text3);cursor:pointer;font-size:13px;">×</button></div>`).join('');
}
function terminarMandato(id){
    const p=presidentes.find(x=>x.id===id);if(!p)return;
    p.activo=false;p.fin=new Date().toISOString().split('T')[0];
    savePres();renderMandatometro();renderModalPresList();
}
function deletePres(id){
    if(!confirm('¿Eliminar este presidente?'))return;
    presidentes=presidentes.filter(p=>p.id!==id);
    savePres();renderMandatometro();renderModalPresList();
}
function showAddPresForm(){document.getElementById('add-pres-form').style.display='block';}
function saveNewPresident(){
    const name=document.getElementById('new-pres-name').value;
    const start=document.getElementById('new-pres-start').value;
    const end=document.getElementById('new-pres-end').value;
    if(!name||!start)return alert('Nombre e inicio son obligatorios');
    presidentes.push({id:Date.now(),nombre:name,color:document.getElementById('new-pres-color').value,inicio:start,fin:end||null,photo:document.getElementById('new-pres-photo').value||null,activo:!end});
    savePres();renderMandatometro();renderModalPresList();
    document.getElementById('add-pres-form').style.display='none';
}
function previewPhoto(input){
    if(!input.files||!input.files[0])return;
    const r=new FileReader();
    r.onload=e=>{document.getElementById('photo-preview').style.display='block';document.getElementById('photo-preview-img').src=e.target.result;};
    r.readAsDataURL(input.files[0]);
}
function savePresPhoto(){
    if(!isAdmin)return;
    const id=parseInt(document.getElementById('photo-pres-select').value);
    const input=document.getElementById('photo-upload');
    if(!input.files||!input.files[0])return alert('Selecciona una imagen primero');
    const r=new FileReader();
    r.onload=e=>{presPhotos[id]=e.target.result;savePhotos();renderMandatometro();alert('Foto guardada');};
    r.readAsDataURL(input.files[0]);
}

// ═══════════════════════════════════════════
//  UTILS
// ═══════════════════════════════════════════
function dlCSV(rows,fn){
    const blob=new Blob([rows.map(r=>r.join(',')).join('\n')],{type:'text/csv;charset=utf-8;'});
    const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=fn;a.click();URL.revokeObjectURL(url);
}

// ═══════════════════════════════════════════
//  RECURSOS
// ═══════════════════════════════════════════

// ── Colores de partidos ──
const RECURSOS_PARTY_COLORS = {
  PP:         { bg:'#1565c0', text:'#fff' },
  PSOE:       { bg:'#c0392b', text:'#fff' },
  VOX:        { bg:'#2e7d32', text:'#fff' },
  SUMAR:      { bg:'#c2185b', text:'#fff' },
  JUNTS:      { bg:'#00a0b0', text:'#fff' },
  EHBILDU:    { bg:'#4caf50', text:'#fff' },
  ERC:        { bg:'#f9c74f', text:'#111' },
  PNV:        { bg:'#1a6b3a', text:'#fff' },
  PODEMOS:    { bg:'#8e5bbf', text:'#fff' },
  BNG:        { bg:'#00529b', text:'#fff' },
  CCA:        { bg:'#e67e22', text:'#fff' },
  UPN:        { bg:'#e74c3c', text:'#fff' },
  'MÁS MADRID': { bg:'#00bcd4', text:'#fff' },
  COMPROMIS:  { bg:'#ff8c00', text:'#fff' },
  'POR ANDALUCÍA': { bg:'#9c27b0', text:'#fff' },
  'ADELANTE ANDALUCIA': { bg:'#e91e63', text:'#fff' },
  'MÉS':      { bg:'#4db6ac', text:'#fff' },
  'MXME':     { bg:'#607d8b', text:'#fff' },
  'SA UNIÓ':  { bg:'#795548', text:'#fff' },
  CUP:        { bg:'#212121', text:'#fff' },
  AC:         { bg:'#546e7a', text:'#fff' },
  PSC:        { bg:'#e53935', text:'#fff' },
  IU:         { bg:'#d32f2f', text:'#fff' },
  FA:         { bg:'#388e3c', text:'#fff' },
  PRC:        { bg:'#7b1fa2', text:'#fff' },
  GEROABAI:   { bg:'#00796b', text:'#fff' },
  CHA:        { bg:'#f57c00', text:'#fff' },
  AE:         { bg:'#0097a7', text:'#fff' },
  ASG:        { bg:'#5d4037', text:'#fff' },
  AHI:        { bg:'#37474f', text:'#fff' },
  NCA:        { bg:'#1976d2', text:'#fff' },
  MDYC:       { bg:'#c2185b', text:'#fff' },
  'CEUTA YA!':{ bg:'#ff5722', text:'#fff' },
  CPM:        { bg:'#0288d1', text:'#fff' },
  'SOMOS MELILLA':{ bg:'#7c4dff', text:'#fff' },
  UPL:        { bg:'#9e9d24', text:'#fff' },
  'SORIA YA!':{ bg:'#d4a017', text:'#111' },
  XAV:        { bg:'#6d4c41', text:'#fff' },
  DO:         { bg:'#00695c', text:'#fff' },
};

function getPartyStyle(p){
  const c=RECURSOS_PARTY_COLORS[p]||{bg:'#546e7a',text:'#fff'};
  return `background:${c.bg};color:${c.text};`;
}

// ── Datos generales — 8 opciones por partido ──
// ════════════════════════════════════════════════════════
//  RECURSOS — cada enlace es ÚNICO por partido + elección
//  Los URLs con "ENLACE_AQUI" son placeholders para sustituir
// ════════════════════════════════════════════════════════

// Helper para crear los 8 botones estándar con URLs únicos
function rl(partido, ctx, programa, presentacion, web, yt, ig, tw, fb, tt){
  return [
    {name:`Programa Electoral ${partido}`,url: programa||'URL_PROGRAMA_ELECTORAL'},
    {name:`Presentación ${partido}`,url: presentacion||'URL_PRESENTACION'},
    {name:`Página Web ${partido}`,url: web||'URL_WEB_OFICIAL'},
    {name:`Canal Youtube ${partido}`,url: yt||'URL_YOUTUBE'},
    {name:`Instagram ${partido}`,url: ig||'URL_INSTAGRAM'},
    {name:`Twitter/X ${partido}`,url: tw||'URL_TWITTER'},
    {name:`Facebook ${partido}`,url: fb||'URL_FACEBOOK'},
    {name:`TikTok ${partido}`,url: tt||'URL_TIKTOK'},
  ];
}
 
const RECURSOS_GENERALES = {
  PP: { label:'PP', links: rl('PP','GEN',
    'https://www.rtve.es/contenidos/documentos/elecciones_generales_2023/programa_electoral_pp.pdf','URL_PRESENTACION','https://pp.es',
    'https://www.youtube.com/@partidopopular','https://www.instagram.com/partidopopular/',
    'https://x.com/ppopular','https://www.facebook.com/pp/?locale=es_ES','URL_EXTRA') },
  PSOE: { label:'PSOE', links: rl('PSOE','GEN',
    'https://www.rtve.es/contenidos/documentos/elecciones_generales_2023/programa_electoral_psoe.pdf','URL_PRESENTACION','https://www.psoe.es',
    'https://www.youtube.com/@psoe','https://www.instagram.com/psoe/',
    'https://x.com/PSOE','https://www.facebook.com/psoe/?locale=es_ES','URL_EXTRA') },
  VOX: { label:'VOX', links: rl('VOX','GEN',
    'https://www.rtve.es/contenidos/documentos/elecciones_generales_2023/programa_electoral_vox.pdf','URL_PRESENTACION','https://www.voxespana.es',
    'https://www.youtube.com/@vox_espa%C3%B1a','https://www.instagram.com/vox_es/',
    'https://x.com/vox_es','https://www.facebook.com/VOXEspana/','URL_EXTRA') },
  SUMAR: { label:'SUMAR', links: rl('SUMAR','GEN',
    'https://www.rtve.es/contenidos/documentos/elecciones_generales_2023/programa_electoral_sumar.pdf','URL_PRESENTACION','https://movimientosumar.es/',
    'https://www.youtube.com/@sumar_oficial','https://www.instagram.com/sumar_oficial/?hl=es',
    'https://x.com/sumar','https://www.facebook.com/SumarOficial2022/','URL_EXTRA') },
      ERC: { label:'ERC', links: rl('ERC','GEN',
    'https://www.rtve.es/contenidos/documentos/elecciones_generales_2023/programa_electoral_erc.pdf','URL_PRESENTACION','https://www.esquerra.cat',
    'https://www.youtube.com/@EsquerraTV','https://www.instagram.com/esquerrarepublicana/',
    'https://x.com/Esquerra_ERC','https://www.facebook.com/Esquerra.ERC/?locale=es_ES','URL_EXTRA') },
  JUNTS: { label:'JUNTS', links: rl('JUNTS','GEN',
    'https://www.rtve.es/contenidos/documentos/elecciones_generales_2023/programa_electoral_junts.pdf','URL_PRESENTACION','https://junts.cat/',
    'https://www.youtube.com/@JuntsperCatalunya','https://www.instagram.com/juntspercat/',
    'https://x.com/JuntsXCat','https://www.facebook.com/JxCatalunya/?locale=es_ES','URL_EXTRA') },
  EHBILDU: { label:'EH BILDU', links: rl('EH BILDU','GEN',
    'https://www.rtve.es/contenidos/documentos/elecciones_generales_2023/programa_electoral_bildu.pdf','URL_PRESENTACION','https://ehbildu.eus',
    'https://www.youtube.com/@EuskalHerriaBildu','https://www.instagram.com/eh_bildu/',
    'https://x.com/ehbildu','https://www.facebook.com/ehbildu/?locale=es_ES','URL_EXTRA') },
  PNV: { label:'PNV', links: rl('PNV','GEN',
    'https://www.rtve.es/contenidos/documentos/elecciones_generales_2023/programa_electoral_pnv.pdf','URL_PRESENTACION','https://www.eaj-pnv.eus',
    'https://www.youtube.com/@eaj-pnv','https://www.instagram.com/eajpnv/?hl=es',
    'https://x.com/eajpnv','https://www.facebook.com/eajpnv/?locale=es_ES','URL_EXTRA') },
  PODEMOS: { label:'PODEMOS', links: rl('PODEMOS','GEN',
    'https://www.rtve.es/contenidos/documentos/elecciones_generales_2019_nov/programa_electoral_podemos.pdf','URL_PRESENTACION','https://podemos.info',
    'https://www.youtube.com/@ahora_podemos','https://www.instagram.com/ahorapodemos/',
    'https://x.com/PODEMOS','https://www.facebook.com/ahorapodemos/?locale=es_ES','URL_EXTRA') },
  BNG: { label:'BNG', links: rl('BNG','GEN',
    'https://www.rtve.es/contenidos/documentos/elecciones_generales_2023/programa_electoral_bng.pdf','URL_PRESENTACION','https://www.bng.gal',
    'https://www.youtube.com/@TeleBNG','https://www.instagram.com/o_bloque/',
    'https://x.com/obloque','https://www.facebook.com/obloque/?locale=es_ES','URL_EXTRA') },
  CCA: { label:'CCA', links: rl('CCA','GEN',
    'https://www.rtve.es/contenidos/documentos/elecciones_generales_2023/programa_electoral_coalicion_canaria.pdf','URL_PRESENTACION','https://coalicioncanaria.org',
    'https://www.youtube.com/@coalicioncanaria','https://www.instagram.com/coalicionc/',
    'https://x.com/coalicion?lang=es','https://www.facebook.com/coalicion.canaria/?locale=es_ES','URL_EXTRA') },
  UPN: { label:'UPN', links: rl('UPN','GEN',
    'https://www.rtve.es/contenidos/documentos/elecciones_generales_2023/programa_electoral_upn.pdf','URL_PRESENTACION','https://upn.es',
    'https://www.youtube.com/@Uni%C3%B3ndelPuebloNavarroUPN','https://www.instagram.com/upn_navarra/',
    'https://x.com/upn_navarra','https://www.facebook.com/uniondelpueblonavarro/?locale=es_ES','URL_EXTRA') },
};
 
// ── Datos autonómicos — cada partido tiene sus propios 8 enlaces por CCAA ──
const RECURSOS_AUTONOMICAS = {
  galicia:{ name:'Galicia', partidos:{
    PP:         { links: rl('PP Galicia','galicia','https://www.rtve.es/contenidos/documentos/elecciones_gallegas_2024/programa_electoral_pp.pdf','URL_PRESENTACION','https://ppdegalicia.com/','https://www.youtube.com/@ppdegalicia','https://www.instagram.com/ppdegalicia/','https://x.com/ppdegalicia','https://www.facebook.com/ppdegalicia/','URL_EXTRA' ) },
    BNG:        { links: rl('BNG','galicia','https://www.rtve.es/contenidos/documentos/elecciones_gallegas_2024/programa_electoral_bng.pdf','URL_PRESENTACION','https://www.bng.gal','https://www.youtube.com/@TeleBNG','https://www.instagram.com/o_bloque/','https://x.com/obloque','https://www.facebook.com/obloque/','URL_EXTRA') },
    PSOE:       { links: rl('PSOE Galicia','galicia','https://www.rtve.es/contenidos/documentos/elecciones_gallegas_2024/programa_electoral_psdeg_psoe.pdf','URL_PRESENTACION','https://www.psdeg-psoe.com/','https://www.youtube.com/@socialistas_gal','https://www.instagram.com/socialistas_gal/','https://x.com/socialistas_gal','https://www.facebook.com/socialistasdegalicia/?locale=es_ES','URL_EXTRA') },
    DO:         { links: rl('Democracia Ourensana','galicia','NO DISPONIBLE','URL_PRESENTACION','https://democraciaourensana.es/','NO DISPONIBLE','https://www.instagram.com/democraciaourensana/','https://x.com/DemOurensana','https://www.facebook.com/democraciaourensana/?locale=es_ES','URL_EXTRA') },
  }},
  asturias:{ name:'Asturias', partidos:{
    PSOE:       { links: rl('PSOE Asturias','asturias','https://www.rtve.es/contenidos/documentos/elecciones_autonomicas_2023/programas_electorales/asturias_psoe.pdf','URL_PRESENTACION','https://fsa-psoe.org/','https://www.youtube.com/@FSAPSOE','https://www.instagram.com/fsa_psoe/','https://x.com/FSA_PSOE','https://www.facebook.com/psoefsa/','URL_EXTRA') },
    PP:         { links: rl('PP Asturias','asturias','https://www.rtve.es/contenidos/documentos/elecciones_autonomicas_2023/programas_electorales/asturias_pp.pdf','URL_PRESENTACION','https://pp-asturias.com/','https://www.youtube.com/@ppasturias','https://www.instagram.com/pp_asturias/','https://x.com/PP_Asturias','https://www.facebook.com/ppasturias/','URL_EXTRA') },
    VOX:        { links: rl('VOX Asturias','asturias','https://www.rtve.es/contenidos/documentos/elecciones_autonomicas_2023/programas_electorales/asturias_vox.pdf','URL_PRESENTACION','https://www.voxespana.es/asturias','https://www.youtube.com/@voxasturias','https://www.instagram.com/vox_asturias/','https://x.com/vox_asturias','https://www.facebook.com/AsturiasVOX/','URL_EXTRA') },
    IU:         { links: rl('IU Asturias','asturias','https://www.rtve.es/contenidos/documentos/elecciones_autonomicas_2023/programas_electorales/asturias_cxast.pdf','URL_PRESENTACION','https://www.izquierdaxunida.com/','https://www.youtube.com/@izquierdaunidadeasturias4365','https://www.instagram.com/iuasturias/','https://x.com/iuasturias','https://www.facebook.com/izquierdaxunida/','URL_EXTRA') },
    PODEMOS:    { links: rl('PODEMOS Asturias','asturias','https://www.rtve.es/contenidos/documentos/elecciones_autonomicas_2023/programas_electorales/asturias_podemos.pdf','URL_PRESENTACION','https://asturies.podemos.info/','https://www.youtube.com/@PodemosAsturies','https://www.instagram.com/podemos_asturies/','https://x.com/PodemosAsturies','https://www.facebook.com/PodemosAsturies/','URL_EXTRA') },
    FA:         { links: rl('Foro Asturias','asturias','https://www.rtve.es/contenidos/documentos/elecciones_autonomicas_2023/programas_electorales/asturias_foro.pdf','URL_PRESENTACION','https://foroasturias.es/','https://www.youtube.com/@FOROAsturias','https://www.instagram.com/FOROAsturias/','https://x.com/ForoAsturias','https://www.facebook.com/FOROAsturias/','URL_EXTRA') },
  }},
  cantabria:{ name:'Cantabria', partidos:{
    PP:         { links: rl('PP Cantabria','cantabria','https://www.rtve.es/contenidos/documentos/elecciones_autonomicas_2023/programas_electorales/cantabria_pp.pdf','URL_PRESENTACION','https://www.ppcantabria.org/inicio','https://www.youtube.com/@ppcantabria','https://www.instagram.com/ppcantabria/','https://x.com/ppcantabria','https://www.facebook.com/ppcantabria/','URL_EXTRA') },
    PRC:        { links: rl('PRC','cantabria','https://www.rtve.es/contenidos/documentos/elecciones_autonomicas_2023/programas_electorales/cantabria_prc.pdf','URL_PRESENTACION','https://prc.es/','https://www.youtube.com/@prcantabria','https://www.instagram.com/prccantabria/','https://x.com/prcantabria','https://www.facebook.com/prcantabria/','URL_EXTRA') },
    PSOE:        { links: rl('PSOE','cantabria','https://www.rtve.es/contenidos/documentos/elecciones_autonomicas_2023/programas_electorales/cantabria_psoe.pdf','URL_PRESENTACION','https://www.psc-psoe.es/','https://www.youtube.com/@psoecantabria','https://www.instagram.com/psoe_cantabria/','https://x.com/psoecantabria','https://www.facebook.com/PSOECantabr/','URL_EXTRA') },
    VOX:        { links: rl('VOX Cantabria','cantabria','https://www.rtve.es/contenidos/documentos/elecciones_autonomicas_2023/programas_electorales/cantabria_vox.pdf','URL_PRESENTACION','https://www.voxespana.es/cantabria','https://www.youtube.com/@VOXCantabria','https://www.instagram.com/voxcantabria/','https://x.com/Vox_Cantabria','https://www.facebook.com/CantabriaVOX/','URL_EXTRA') },
    PODEMOS:    { links: rl('PODEMOS Cantabria','cantabria','https://www.rtve.es/contenidos/documentos/elecciones_autonomicas_2023/programas_electorales/cantabria_podemos_iu.pdf','URL_PRESENTACION','https://cantabria.podemos.info/','https://www.youtube.com/@podemoscantabria6433','https://www.instagram.com/podemos_cantabria/','https://x.com/PodemosCant','https://www.facebook.com/PodemosCantabria/','URL_EXTRA') },
  }},
  pais_vasco:{ name:'País Vasco', partidos:{
    PNV:        { links: rl('PNV País Vasco','pais_vasco','https://www.rtve.es/contenidos/documentos/elecciones_vascas_2024/programa_electoral_pnv.pdf','URL_PRESENTACION','https://www.eaj-pnv.eus/es/','https://www.youtube.com/@eaj-pnv','https://www.instagram.com/eajpnv/','https://x.com/eajpnv','https://www.facebook.com/eajpnv/','URL_EXTRA') },
    EHBILDU:    { links: rl('EH Bildu País Vasco','pais_vasco','https://www.rtve.es/contenidos/documentos/elecciones_vascas_2024/programa_electoral_bildu.pdf','URL_PRESENTACION','https://ehbildu.eus/es','https://www.youtube.com/@EuskalHerriaBildu','https://www.instagram.com/eh_bildu/','https://x.com/ehbildu','https://www.facebook.com/ehbildu/','URL_EXTRA') },
    PSOE:       { links: rl('PSE-EE País Vasco','pais_vasco','https://www.rtve.es/contenidos/documentos/elecciones_vascas_2024/programa_electoral_psoe.pdf','URL_PRESENTACION','https://www.socialistasvascos.com/inicio.htm','https://www.youtube.com/@socialistasvascos','https://www.instagram.com/socialistasvascos/','https://x.com/socialistavasco','https://www.facebook.com/Socialistas.Vascos/','URL_EXTRA') },
    PP:         { links: rl('PP País Vasco','pais_vasco','https://www.rtve.es/contenidos/documentos/elecciones_vascas_2024/programa_electoral_pp.pdf','URL_PRESENTACION','https://www.ppvasco.com/','https://www.youtube.com/@PPVasco','https://www.instagram.com/pp_vasco/','https://x.com/ppvasco','https://www.facebook.com/PPvasco/','URL_EXTRA') },
    SUMAR:      { links: rl('SUMAR País Vasco','pais_vasco','https://www.rtve.es/contenidos/documentos/elecciones_vascas_2024/programa_electoral_sumar.pdf','URL_PRESENTACION','https://sumarmugimendua.eus/','https://www.youtube.com/@sumar_oficial','https://www.instagram.com/sumar_mugimendua/','https://x.com/SumarMugimendua','https://www.facebook.com/p/Sumar-Mugimendua-61556335739314/','URL_EXTRA') },
    VOX:        { links: rl('VOX País Vasco','pais_vasco','https://www.rtve.es/contenidos/documentos/elecciones_vascas_2024/programa_electoral_vox.pdf','URL_PRESENTACION','https://www.voxespana.es/tag/pais-vasco','https://www.youtube.com/@voxparlamentovascogrupopar1973','https://www.instagram.com/voxparlamentovasco/','https://x.com/vox_vasco','https://www.facebook.com/VOXParlamentoVasco/','URL_EXTRA') },
  }},
  navarra:{ name:'Navarra', partidos:{
    UPN:        { links: rl('UPN Navarra','navarra','https://www.rtve.es/contenidos/documentos/elecciones_autonomicas_2023/programas_electorales/navarra_upn.pdf','URL_PRESENTACION','https://www.upn.org/','https://www.youtube.com/@Uni%C3%B3ndelPuebloNavarroUPN','https://www.instagram.com/upn_navarra/','https://x.com/upn_navarra','https://www.facebook.com/uniondelpueblonavarro/','URL_EXTRA') },
    PSOE:       { links: rl('PSOE Navarra','navarra','https://www.rtve.es/contenidos/documentos/elecciones_autonomicas_2023/programas_electorales/navarra_psoe.pdf','URL_PRESENTACION','https://www.psn-psoe.org/','https://www.youtube.com/@psnpsoetv','https://www.instagram.com/psnpsoe/','https://x.com/PSNPSOE','https://www.facebook.com/psnpsoe/','URL_EXTRA') },
    EHBILDU:    { links: rl('EH Bildu Navarra','navarra','https://www.rtve.es/contenidos/documentos/elecciones_autonomicas_2023/programas_electorales/navarra_eh_bildu.pdf','URL_PRESENTACION','https://ehbildu.eus','https://www.youtube.com/@EuskalHerriaBildu','https://www.instagram.com/ehbildunafarroa/','https://x.com/EHBilduNafarroa','https://www.facebook.com/ehbildunafarroa/?locale=es_LA','URL_EXTRA') },
    GEROABAI:   { links: rl('Geroa Bai','navarra','https://www.rtve.es/contenidos/documentos/elecciones_autonomicas_2023/programas_electorales/navarra_geroa_bai.pdf','URL_PRESENTACION','https://geroabai.eus/es','https://www.youtube.com/@geroabai','https://www.instagram.com/geroa_bai/','https://x.com/geroabai','https://www.facebook.com/geroa.bai/','URL_EXTRA') },
    PP:         { links: rl('PP Navarra','navarra','https://www.rtve.es/contenidos/documentos/elecciones_autonomicas_2023/programas_electorales/navarra_pp.pdf','URL_PRESENTACION','https://www.ppnavarra.es/','https://www.youtube.com/@pp_navarra','https://www.instagram.com/ppnavarra/','https://x.com/PPNavarra','https://www.facebook.com/ppnavarra/','URL_EXTRA') },
    PODEMOS:    { links: rl('PODEMOS Navarra','navarra','https://www.rtve.es/contenidos/documentos/elecciones_autonomicas_2023/programas_electorales/navarra_contigo.pdf','URL_PRESENTACION','https://podemosnavarra.info/','https://www.youtube.com/@PodemosNafarroa','https://www.instagram.com/podemos_navarra/','https://x.com/Podemosnavarra','https://www.facebook.com/PodemosNafarroa/','URL_EXTRA') },
    VOX:        { links: rl('VOX Navarra','navarra','https://www.rtve.es/contenidos/documentos/elecciones_autonomicas_2023/programas_electorales/navarra_vox.pdf','URL_PRESENTACION','https://www.voxespana.es/navarra','https://www.youtube.com/@voxnavarra7307','https://www.instagram.com/vox_navarra/','https://x.com/VoxNavarra','https://www.facebook.com/VOXPamplona/','URL_EXTRA') },
  }},
  aragon:{ name:'Aragón', partidos:{
    PP:         { links: rl('PP Aragón','aragon','https://www.rtve.es/contenidos/documentos/elecciones_aragon_2026/programa_pp_aragon_2026.pdf','URL_PRESENTACION','http://www.pparagon.es/','https://www.youtube.com/@ppdearagon','https://www.instagram.com/pparagon/','https://x.com/pparagon','https://www.facebook.com/pparagon/?locale=es_ES','URL_EXTRA') },
    PSOE:       { links: rl('PSOE Aragón','aragon','https://www.rtve.es/contenidos/documentos/elecciones_aragon_2026/programa_psoe_aragon_2026.pdf','URL_PRESENTACION','https://aragonpsoe.es/','https://www.youtube.com/@psoe-aragon','https://www.instagram.com/psoearagon/following/','https://x.com/aragonpsoe','https://www.facebook.com/psoearagon/','URL_EXTRA') },
    VOX:        { links: rl('VOX Aragón','aragon','https://www.rtve.es/contenidos/documentos/elecciones_aragon_2026/programa_vox_aragon_2026.pdf','URL_PRESENTACION','https://www.voxespana.es/aragon','https://www.youtube.com/@GPVOXARAGON','https://www.instagram.com/aragonvox/','https://x.com/aragonvox','https://www.facebook.com/people/Grupo-Parlamentario-VOX-en-Arag%C3%B3n/61555783649476/','URL_EXTRA') },
    CHA:        { links: rl('CHA','aragon','https://www.rtve.es/contenidos/documentos/elecciones_aragon_2026/programa_chunta_aragon_2026.pdf','URL_PRESENTACION','https://www.chunta.org/','https://www.youtube.com/@ChuntaTV','https://www.instagram.com/chuntaaragonesista/','https://x.com/chunta','https://www.facebook.com/chuntaaragonesista/','URL_EXTRA') },
    AE:         { links: rl('Aragón Existe','aragon','https://www.rtve.es/contenidos/documentos/elecciones_aragon_2026/programa_teruel_existe_aragon_2026.pdf','URL_PRESENTACION','https://aragonexiste.org/','https://www.youtube.com/@aragonexiste8196','https://www.instagram.com/aragonexiste_/','https://x.com/AragonExiste_','https://www.facebook.com/AragonExisteFB/','URL_EXTRA') },
    IU:         { links: rl('IU Aragón','aragon','https://www.rtve.es/contenidos/documentos/elecciones_aragon_2026/programa_iu_sumar_aragon_2026.pdf','URL_PRESENTACION','https://www.iuaragon.com/','https://www.youtube.com/@IzquierdaUnidaAragon','https://www.instagram.com/iuaragon/','https://x.com/iu_aragon','https://www.facebook.com/IU.Aragon/','URL_EXTRA') },
  }},
  cataluna:{ name:'Cataluña', partidos:{
    PSOE:       { links: rl('PSC Cataluña','cataluna','https://www.rtve.es/contenidos/documentos/elecciones_catalanas_2024/programa_electoral_psc.pdf','URL_PRESENTACION','https://www.socialistes.cat/','https://www.youtube.com/@socialistes_cat','https://www.instagram.com/socialistes_cat/','https://x.com/socialistes_cat','https://www.facebook.com/PSC/?locale=es_ES','URL_EXTRA') },
    JUNTS:      { links: rl('JUNTS Cataluña','cataluna','https://www.rtve.es/contenidos/documentos/elecciones_catalanas_2024/programa_electoral_junts.pdf','URL_PRESENTACION','https://junts.cat/','https://www.youtube.com/@JuntsperCatalunya','https://www.instagram.com/juntspercat/','https://x.com/juntsxcat','https://www.facebook.com/JxCatalunya/','URL_EXTRA') },
    ERC:        { links: rl('ERC Cataluña','cataluna','https://www.rtve.es/contenidos/documentos/elecciones_catalanas_2024/programa_electoral_erc.pdf','URL_PRESENTACION','https://www.esquerra.cat/','https://www.youtube.com/@EsquerraTV','https://www.instagram.com/esquerrarepublicana/','https://x.com/Esquerra_ERC','https://www.facebook.com/Esquerra.ERC/','URL_EXTRA') },
    PP:         { links: rl('PP Cataluña','cataluna','https://www.rtve.es/contenidos/documentos/elecciones_catalanas_2024/programa_electoral_pp_flyer.pdf','URL_PRESENTACION','https://www.ppcatalunya.com/','https://www.youtube.com/@PPCatalunya','https://www.instagram.com/ppcatala/','https://x.com/PPCatalunya','https://www.facebook.com/ppcatalunya/','URL_EXTRA') },
    VOX:        { links: rl('VOX Cataluña','cataluna','https://www.rtve.es/contenidos/documentos/elecciones_catalanas_2024/programa_electoral_vox.pdf','URL_PRESENTACION','https://www.voxespana.es/parlamentos-autonomicos/vox-parlamento-de-cataluna','https://www.youtube.com/@vox_cat','https://www.instagram.com/vox_cat/','https://x.com/VOX_Cataluna','https://www.facebook.com/VOXParlamentoCataluna/','URL_EXTRA') },
    SUMAR:      { links: rl('SUMAR Cataluña','cataluna','https://www.rtve.es/contenidos/documentos/elecciones_catalanas_2024/programa_electoral_comuns_sumar.pdf','URL_PRESENTACION','https://comuns.cat/es/','https://www.youtube.com/@SomComunsTV','https://www.instagram.com/somcomuns/','https://x.com/SomComuns','https://www.facebook.com/SomComuns/','URL_EXTRA') },
    CUP:        { links: rl('CUP','cataluna','https://www.rtve.es/contenidos/documentos/elecciones_catalanas_2024/programa_electoral_cup.pdf','URL_PRESENTACION','https://cup.cat/','https://www.youtube.com/@cupnacional','https://www.instagram.com/cupnacional/','https://x.com/cupnacional','https://www.facebook.com/unitatpopular/','URL_EXTRA') },
    AC:         { links: rl('Aliança Catalana','cataluna','https://aliancacatalana.cat/wp-content/uploads/2024/04/Programa-electoral-2024.pdf','URL_PRESENTACION','https://aliancacatalana.cat/','https://www.youtube.com/@CatalunyaAC','https://www.instagram.com/catalunyaac/','https://x.com/CatalunyaAC','https://www.facebook.com/CatalunyaAC/','URL_EXTRA') },
  }},
  baleares:{ name:'Islas Baleares', partidos:{
    PP:         { links: rl('PP Baleares','baleares','https://www.rtve.es/contenidos/documentos/elecciones_autonomicas_2023/programas_electorales/baleares_pp.pdf','URL_PRESENTACION','https://www.ppbalears.es/','https://www.youtube.com/@PPIllesBalears','https://www.instagram.com/ppbalears/','https://x.com/ppbalears','https://www.facebook.com/ppbalears/','URL_EXTRA') },
    PSOE:       { links: rl('PSIB-PSOE Baleares','baleares','https://www.rtve.es/contenidos/documentos/elecciones_autonomicas_2023/programas_electorales/baleares_psoe.pdf','URL_PRESENTACION','https://www.psib-psoe.org/','https://www.youtube.com/@PSIBPSOEIllesBalears','https://www.instagram.com/psibpsoe/','https://x.com/psibpsoe','https://www.facebook.com/psib.psoe/','URL_EXTRA') },
    VOX:        { links: rl('VOX Baleares','baleares','https://www.rtve.es/contenidos/documentos/elecciones_autonomicas_2023/programas_electorales/baleares_vox.pdf','URL_PRESENTACION','https://www.voxespana.es/baleares','https://www.youtube.com/@VoxBaleares','https://www.instagram.com/voxbaleares/','https://x.com/voxbaleares','https://www.facebook.com/BalearesVOX/','URL_EXTRA') },
    'MÉS':      { links: rl('MÉS per Mallorca','baleares','https://www.rtve.es/contenidos/documentos/elecciones_autonomicas_2023/programas_electorales/baleares_mes_per_mallorca.pdf','URL_PRESENTACION','https://mespermallorca.cat/','https://www.youtube.com/@M%C3%89SperMallorca','https://www.instagram.com/mespermallorca/','https://x.com/MESperMallorca','https://www.facebook.com/mespermallorca/?locale=es_ES','URL_EXTRA') },
    MXME:       { links: rl('MÉS per Menorca','baleares','https://www.rtve.es/contenidos/documentos/elecciones_autonomicas_2023/programas_electorales/baleares_mes_per_menorca.pdf','URL_PRESENTACION','https://www.mespermenorca.cat/','https://www.youtube.com/@mespermenorca6559','https://www.instagram.com/mespermenorca/','https://x.com/MesperMenorca','https://www.facebook.com/MesPerMenorca/','URL_EXTRA') },
    PODEMOS:    { links: rl('PODEMOS Baleares','baleares','https://www.rtve.es/contenidos/documentos/elecciones_autonomicas_2023/programas_electorales/baleares_podemos.pdf','URL_PRESENTACION','https://podemos.info/illes-balears/','https://www.youtube.com/@PodemIllesBalears','https://www.instagram.com/podem_illes_balears/','https://x.com/Podem_IB','https://www.facebook.com/PodemBalears/','URL_EXTRA') },
    'SA UNIÓ':  { links: rl('Sa Unió','baleares','https://www.sauniodeformentera.com/pdf/SaUnio-Programa2023ESP.PDF','URL_PRESENTACION','https://www.consellinsulardeformentera.cat/index.php?option=com_content&view=article&id=6420%3Asa-unio&catid=93%3Agrups-politics&Itemid=126&lang=es','https://www.youtube.com/@sauniodeformentera4723','https://www.instagram.com/sauniodeformentera/','https://x.com/SaUnioFormenter','https://www.facebook.com/SaUnioFormentera/','URL_EXTRA') },
  }},
  canarias:{ name:'Canarias', partidos:{
    PSOE:       { links: rl('PSOE Canarias','canarias','https://www.rtve.es/contenidos/documentos/elecciones_autonomicas_2023/programas_electorales/canarias_psoe.pdf','URL_PRESENTACION','https://psoecanarias.com/web/','https://www.youtube.com/@psoe_canarias','https://www.instagram.com/psoe_canarias/','https://x.com/PSOECanarias','https://www.facebook.com/PSOECanarias/?locale=es_LA','URL_EXTRA') },
    CCA:        { links: rl('CC Canarias','canarias','https://www.rtve.es/contenidos/documentos/elecciones_autonomicas_2023/programas_electorales/canarias_coalicion_canaria.pdf','URL_PRESENTACION','https://coalicioncanaria.org/','https://www.youtube.com/@coalicioncanaria','https://www.instagram.com/coalicionc/','https://x.com/coalicion','https://www.facebook.com/coalicion.canaria/','URL_EXTRA') },
    PP:         { links: rl('PP Canarias','canarias','https://www.rtve.es/contenidos/documentos/elecciones_autonomicas_2023/programas_electorales/canarias_pp.pdf','URL_PRESENTACION','https://www.popularesdecanarias.com/','https://www.youtube.com/@grupoparlamentarioppcanari5010','https://www.instagram.com/ppdecanarias/','https://x.com/ppdecanarias','https://www.facebook.com/ppdecanarias/','URL_EXTRA') },
    NCA:        { links: rl('Nueva Canarias','canarias','https://www.rtve.es/contenidos/documentos/elecciones_autonomicas_2023/programas_electorales/canarias_nueva_canarias.pdf','URL_PRESENTACION','https://www.nuevacanariasbc.org/','https://www.youtube.com/@NuevaCanariasBC','https://www.instagram.com/nuevacanariasbc/reels/','https://x.com/NuevaCanariasBC','https://www.facebook.com/NuevaCanariasBC/','URL_EXTRA') },
    VOX:        { links: rl('VOX Canarias','canarias','https://www.rtve.es/contenidos/documentos/elecciones_autonomicas_2023/programas_electorales/canarias_vox.pdf','URL_PRESENTACION','https://www.voxespana.es/laspalmas','https://www.youtube.com/@GrupoParlamentarioVOXCan-ww1iz','https://www.instagram.com/grupoparlamentario_voxcanarias/','https://x.com/voxlaspalmas','https://www.facebook.com/ParlamentoVOXCanarias/','URL_EXTRA') },
    ASG:        { links: rl('ASG Gomera','canarias','https://www.rtve.es/contenidos/documentos/elecciones_autonomicas_2023/programas_electorales/canarias_asg.pdf','URL_PRESENTACION','https://www.agrupacionsocialistagomera.es/','https://www.youtube.com/@agrupacionsocialistagomera2055','https://www.instagram.com/agrupacionsocialistagomera/','https://x.com/asgomera','https://www.facebook.com/agrupacionsocialistagomera/','URL_EXTRA') },
    AHI:        { links: rl('AHI El Hierro','canarias','https://ahi-elhierro.es/programa-electoral-elecciones-28m-canarias-2023/','URL_PRESENTACION','https://ahi-elhierro.es/','https://www.youtube.com/@agrupacionherrenaindependi8657','https://www.instagram.com/ahi_elhierro/','https://x.com/AHIHierro','https://www.facebook.com/agrupacion.herrenaindependiente/','URL_EXTRA') },
  }},
  ceuta:{ name:'Ceuta', partidos:{
    PP:         { links: rl('PP Ceuta','ceuta','https://www.politicaelectoral.com/es/espana/autonomicas-2023/ceuta/pp','URL_PRESENTACION','https://www.pp.es/categoria/ceuta/','https://www.youtube.com/watch?v=2PykNHMjDHM','https://www.instagram.com/ppceuta/','https://x.com/pp_ceuta','https://www.facebook.com/PartidoPopularCeuta/?locale=es_ES','URL_EXTRA') },
    PSOE:       { links: rl('PSOE Ceuta','ceuta','https://www.ceutaldia.com/media/ceutaldia/files/2023/05/11/programa-electoral-psoe-28M2023.pdf','URL_PRESENTACION','https://psoeceuta.es/','https://www.youtube.com/@psoeceuta9287','https://www.instagram.com/psoe.ceuta/','https://x.com/PSOE_Ceuta','https://www.facebook.com/psoedeceuta/?locale=es_ES','URL_EXTRA') },
    VOX:        { links: rl('VOX Ceuta','ceuta','https://www.politicaelectoral.com/es/espana/autonomicas-2023/ceuta/vox','URL_PRESENTACION','https://www.voxespana.es/ceuta','https://www.youtube.com/@vox_ceuta','https://www.instagram.com/vox_ceuta/','https://x.com/Vox_Ceuta','https://www.facebook.com/V0XCeuta','URL_EXTRA') },
    MDYC:       { links: rl('MDyC','ceuta','https://www.mdycceuta.com/_files/ugd/691df9_8316132921574ebfacacd6e3e6740a57.pdf','URL_PRESENTACION','https://www.mdycceuta.com/home','https://www.youtube.com/@mdycceuta2691','https://www.instagram.com/mdyc_ceuta/','https://x.com/MDyC_CEUTA','https://www.facebook.com/MDyCceuta/','URL_EXTRA') },
    'CEUTA YA!':{ links: rl('Ceuta Ya!','ceuta','https://www.ceutaya.es/transparencia','URL_PRESENTACION','https://www.ceutaya.es/','https://www.youtube.com/@CeutaYa','https://www.instagram.com/ceuta.ya/','https://x.com/Ceuta_Ya','https://www.facebook.com/CeutaYa/','URL_EXTRA') },
  }},
  melilla:{ name:'Melilla', partidos:{
    PP:         { links: rl('PP Melilla','melilla','https://www.politicaelectoral.com/es/espana/autonomicas-2023/melilla/pp','URL_PRESENTACION','https://www.pp.es/lugar/melilla/','https://www.youtube.com/@PPMelilla','https://www.instagram.com/ppmelilla/','https://x.com/PPMelilla','https://www.facebook.com/PPdeMelilla/?locale=es_LA','URL_EXTRA') },
    CPM:        { links: rl('CPM','melilla','https://coalicionpormelilla.net/programa-electoral-elecciones-municipales-28-de-mayo-2023/','URL_PRESENTACION','https://coalicionpormelilla.net/?cat=mayor','https://www.youtube.com/@CoalicionporMelilla','https://www.instagram.com/cpmelilla/','https://x.com/cpmelilla','https://www.facebook.com/cpmelilla/?locale=es_ES','URL_EXTRA') },
    PSOE:       { links: rl('PSOE Melilla','melilla','https://agrupacionespsoe.es/melilla/wp-content/uploads/sites/120/2023/05/Programa-Electoral-PSOE-Melilla-28M-2023_Web.pdf','URL_PRESENTACION','https://agrupacionespsoe.es/melilla/','https://www.youtube.com/@psoemelilla2794','https://www.instagram.com/psoemelilla/','https://x.com/psoemelilla','https://www.facebook.com/psoemelilla/?locale=es_ES','URL_EXTRA') },
    VOX:        { links: rl('VOX Melilla','melilla','https://www.politicaelectoral.com/es/espana/autonomicas-2023/melilla/vox','URL_PRESENTACION','https://www.voxespana.es/melilla','https://www.youtube.com/@voxmelilla','https://www.instagram.com/voxenmelilla/','https://x.com/Vox_Melilla','https://www.facebook.com/V0XMelilla/','URL_EXTRA') },
    'SOMOS MELILLA':{ links: rl('Somos Melilla','melilla','https://www.somosmelilla.es/wp-content/uploads/2025/06/ESTATUTOS-DE-SOMOS-MELILLA_DEFINITIVOS.pdf','URL_PRESENTACION','https://participa.somosmelilla.es/','https://www.youtube.com/@somosmelilla','https://www.instagram.com/somos_melilla/','https://x.com/SomosMelilla','https://www.facebook.com/somosmelillla/?locale=es_LA','URL_EXTRA') },
  }},
  castilla_y_leon:{ name:'Castilla y León', partidos:{
    PP:         { links: rl('PP Castilla y León','castilla_y_leon','https://www.rtve.es/contenidos/documentos/elecciones_castilla_y_leon_2026/programa_electoral_pp_2026.pdf','URL_PRESENTACION','https://www.ppcyl.es/','https://www.youtube.com/@ppcyl','https://www.instagram.com/ppopularcyl/','https://x.com/PPopularCyL','https://www.facebook.com/popularescyl/','URL_EXTRA') },
    PSOE:       { links: rl('PSOE Castilla y León','castilla_y_leon','https://www.rtve.es/contenidos/documentos/elecciones_castilla_y_leon_2026/programa_electoral_psoe_2026.pdf','URL_PRESENTACION','https://www.psoecyl.com/8w/','https://www.youtube.com/@psoecastillayleon','https://www.instagram.com/psoe_cyl/','https://x.com/PSOE_CYL','https://www.facebook.com/PSOECyL/','URL_EXTRA') },
    VOX:        { links: rl('VOX Castilla y León','castilla_y_leon','https://www.rtve.es/contenidos/documentos/elecciones_castilla_y_leon_2026/programa_electoral_vox_2026.pdf','URL_PRESENTACION','https://www.voxespana.es/cortes-de-castilla-y-leon','https://www.youtube.com/@VOXCYL','https://www.instagram.com/vox_cyl/','https://x.com/Vox_CortesCyL','https://www.facebook.com/VOXCortesCastillayLeon/','URL_EXTRA') },
    UPL:        { links: rl('UPL','castilla_y_leon','https://www.rtve.es/contenidos/documentos/elecciones_castilla_y_leon_2026/programa_electoral_upl_2026.pdf','URL_PRESENTACION','https://www.upl.es/','https://www.youtube.com/@uniondelpuebloleones','https://www.instagram.com/upl_regionleonesa/','https://x.com/UPLeones','https://www.facebook.com/UPL.Union.del.Pueblo.Leones/','URL_EXTRA') },
    'SORIA YA!':{ links: rl('Soria Ya!','castilla_y_leon','https://www.rtve.es/contenidos/documentos/elecciones_castilla_y_leon_2026/programa_electoral_soria_ya_2026.pdf','URL_PRESENTACION','https://soriaya.org/','https://www.youtube.com/@soria_ya','https://www.instagram.com/soria_ya/','https://x.com/soriaya','https://www.facebook.com/PlataformaSoriaYa/','URL_EXTRA') },
    XAV:        { links: rl('XAV','castilla_y_leon','https://www.rtve.es/contenidos/documentos/elecciones_castilla_y_leon_2026/programa_electoral_por_avila_2026.pdf','URL_PRESENTACION','https://poravila.es/','https://www.youtube.com/@poravila','https://www.instagram.com/poravila/','https://x.com/poravilaes','https://www.facebook.com/poravilaes/','URL_EXTRA') },
  }},
  la_rioja:{ name:'La Rioja', partidos:{
    PP:         { links: rl('PP La Rioja','la_rioja','https://www.rtve.es/contenidos/documentos/elecciones_autonomicas_2023/programas_electorales/la_rioja_pp.pdf','URL_PRESENTACION','https://pplarioja.es/','https://www.youtube.com/@pplarioja','https://www.instagram.com/pplarioja/','https://x.com/LaRiojaPP','https://www.facebook.com/pplarioja/?locale=es_ES','URL_EXTRA') },
    PSOE:       { links: rl('PSOE La Rioja','la_rioja','https://www.rtve.es/contenidos/documentos/elecciones_autonomicas_2023/programas_electorales/la_rioja_psoe.pdf','URL_PRESENTACION','https://psoelarioja.es/','https://www.youtube.com/@PSOEdeLaRioja','https://www.instagram.com/psoelarioja/','https://x.com/PSOELaRioja','https://www.facebook.com/psoelarioja/','URL_EXTRA') },
    VOX:        { links: rl('VOX La Rioja','la_rioja','https://www.rtve.es/contenidos/documentos/elecciones_autonomicas_2023/programas_electorales/la_rioja_vox.pdf','URL_PRESENTACION','https://www.voxespana.es/larioja','https://www.youtube.com/watch?v=0Rda2b-fHK0','https://www.instagram.com/voxlarioja/','https://x.com/voxlarioja','https://www.facebook.com/LaRiojaVOX/','URL_EXTRA') },
    PODEMOS:    { links: rl('PODEMOS La Rioja','la_rioja','https://www.rtve.es/contenidos/documentos/elecciones_autonomicas_2023/programas_electorales/la_rioja_podemos_programa_marco.pdf','URL_PRESENTACION','https://podemos.info/tag/la-rioja/','https://www.youtube.com/@grupoparlamentariopodemosl1040','https://www.instagram.com/podemoslarioja/','https://x.com/Podemos_LaRioja','https://www.facebook.com/people/Podemos-La-Rioja/61551895862039/#','URL_EXTRA') },
  }},
  madrid:{ name:'Madrid', partidos:{
    PP:         { links: rl('PP Madrid','madrid','https://www.yoconayuso.es/programa','URL_PRESENTACION','https://ppmadrid.es/','https://www.youtube.com/@ppcomunidadmadrid','https://www.instagram.com/ppcomunidadmadrid/','https://x.com/ppmadrid','https://www.facebook.com/PPComunidadMadrid/','URL_EXTRA') },
    'MÁS MADRID':{ links: rl('Más Madrid','madrid','https://www.rtve.es/contenidos/documentos/elecciones_autonomicas_2023/programas_electorales/comunidad_madrid_mas_madrid.pdf','URL_PRESENTACION','https://masmadrid.org/','https://www.youtube.com/@m%C3%A1smadrid','https://www.instagram.com/masmadrid/','https://x.com/MasMadrid__','https://www.facebook.com/MasMadridCM/?locale=es_ES','URL_EXTRA') },
    PSOE:       { links: rl('PSOE Madrid','madrid','https://estaticos-cdn.elperiodico.com/zeta/public/content/file/original/2021/0425/17/programa-electoral-del-psoe-m-para-las-elecciones-madrilenas-del-4-de-mayo-de-2021-d850ee7.pdf','URL_PRESENTACION','https://www.psoemadrid.es/','https://www.youtube.com/@psoe_madrid','https://www.instagram.com/psoemadrid/','https://x.com/psoe_m?lang=es','https://www.facebook.com/PSOEMadrid/?locale=es_ES','URL_EXTRA') },
    VOX:        { links: rl('VOX Madrid','madrid','https://www.rtve.es/contenidos/documentos/elecciones_autonomicas_2023/programas_electorales/comunidad_madrid_vox.pdf','URL_PRESENTACION','https://www.voxespana.es/madrid','https://www.youtube.com/@voxasambleademadrid1952','https://www.instagram.com/madrid.vox/?hl=es','https://x.com/madrid_vox','https://www.facebook.com/MadridVOX/?locale=es_ES','URL_EXTRA') },
  }},
  extremadura:{ name:'Extremadura', partidos:{
    PP:         { links: rl('PP Extremadura','extremadura','https://www.rtve.es/contenidos/documentos/elecciones_extremadura_2025/programa_pp_extremadura_2025.pdf','URL_PRESENTACION','https://ppextremadura.com/','https://www.youtube.com/@ppextremadura','https://www.instagram.com/ppextremadura/','https://x.com/ppextremadura','https://www.facebook.com/ppextremadura/?locale=es_ES','URL_EXTRA') },
    PSOE:       { links: rl('PSOE Extremadura','extremadura','https://www.rtve.es/contenidos/documentos/elecciones_extremadura_2025/programa_psoe_extremadura_2025.pdf','URL_PRESENTACION','https://www.psoeextremadura.com/','https://www.youtube.com/@psoeextremadura','https://www.instagram.com/psoeextremadura/','https://x.com/psoeex','https://www.facebook.com/psoe.extremadura/?locale=es_ES','URL_EXTRA') },
    VOX:        { links: rl('VOX Extremadura','extremadura','https://www.rtve.es/contenidos/documentos/elecciones_extremadura_2025/programa_vox_extremadura_2025.pdf','URL_PRESENTACION','https://www.voxespana.es/parlamentos-autonomicos/vox-asamblea-de-extremadura','https://www.youtube.com/@VOXAsambleadeExtremadura','https://www.instagram.com/vox.extremaduragp/','https://x.com/Vox_AsambleaEx','https://www.facebook.com/VOXAsambleaExtremadura/','URL_EXTRA') },
    PODEMOS:    { links: rl('PODEMOS Extremadura','extremadura','https://www.rtve.es/contenidos/documentos/elecciones_extremadura_2025/programa_unidas_por_extremadura_2025.pdf','URL_PRESENTACION','https://unidasporextremadura.org/','https://www.youtube.com/@unidasporextremadura3148','https://www.instagram.com/unidasporextremadura/','https://x.com/Unidasporext','https://www.facebook.com/UnidasPorExtremadura/','URL_EXTRA') },
  }},
  castilla_la_mancha:{ name:'Castilla-La Mancha', partidos:{
    PSOE:       { links: rl('PSOE Castilla-La Mancha','castilla_la_mancha','https://www.rtve.es/contenidos/documentos/elecciones_autonomicas_2023/programas_electorales/castilla_la_mancha_psoe.pdf','URL_PRESENTACION','https://www.pscm-psoe.com/','https://www.youtube.com/c/psoedecastillalamancha','https://www.instagram.com/pscmpsoe/','https://x.com/pscmpsoe','https://www.facebook.com/pscmpsoe/?locale=es_ES','URL_EXTRA') },
    PP:         { links: rl('PP Castilla-La Mancha','castilla_la_mancha','https://www.rtve.es/contenidos/documentos/elecciones_autonomicas_2023/programas_electorales/castilla_la_mancha_pp.pdf','URL_PRESENTACION','https://ppclm.es/','https://www.youtube.com/@partidopopularcastilla-lam7739','https://www.instagram.com/pp_clm/','https://x.com/PP_CLM','https://www.facebook.com/PartidoPopularCastillaLaMancha/','URL_EXTRA') },
    VOX:        { links: rl('VOX Castilla-La Mancha','castilla_la_mancha','https://www.rtve.es/contenidos/documentos/elecciones_autonomicas_2023/programas_electorales/castilla_la_mancha_vox.pdf','URL_PRESENTACION','https://www.voxespana.es/parlamentos-autonomicos/vox-cortes-de-castilla-la-mancha','https://www.youtube.com/@vox_cortesclm','https://www.instagram.com/voxclm/','https://x.com/VoxCLM','https://www.facebook.com/VOXCastillaLaMancha/','URL_EXTRA') },
  }},
  comunidad_valenciana:{ name:'C. Valenciana', partidos:{
    PP:         { links: rl('PP C. Valenciana','comunidad_valenciana','https://www.rtve.es/contenidos/documentos/elecciones_autonomicas_2023/programas_electorales/comunidad_valenciana_pp.pdf','URL_PRESENTACION','https://ppcv.com/','https://www.youtube.com/@PartidoPopularCV','https://www.instagram.com/pp_cv/','https://x.com/ppcv','https://www.facebook.com/PartidoPopularCV/?locale=es_ES','URL_EXTRA') },
    PSOE:       { links: rl('PSPV-PSOE Valencia','comunidad_valenciana','https://www.rtve.es/contenidos/documentos/elecciones_autonomicas_2023/programas_electorales/comunidad_valenciana_psoe.pdf','URL_PRESENTACION','https://www.pspvpsoe.es/es/','https://www.youtube.com/@socialistesval','https://www.instagram.com/socialistes_valencians/','https://x.com/SocialistesVal','https://www.facebook.com/socialistesvalencians/?locale=es_ES','URL_EXTRA') },
    COMPROMIS:  { links: rl('Compromís','comunidad_valenciana','https://www.rtve.es/contenidos/documentos/elecciones_autonomicas_2023/programas_electorales/comunidad_valenciana_compromis.pdf','URL_PRESENTACION','https://compromis.net/','https://www.youtube.com/@coaliciocompromis','https://www.instagram.com/compromis/','https://x.com/compromis','https://www.facebook.com/coaliciocompromis/?locale=es_ES','URL_EXTRA') },
    VOX:        { links: rl('VOX C. Valenciana','comunidad_valenciana','https://www.rtve.es/contenidos/documentos/elecciones_autonomicas_2023/programas_electorales/comunidad_valenciana_vox.pdf','URL_PRESENTACION','https://www.voxespana.es/valencia','https://www.youtube.com/@voxcortesvalencianas8750','https://www.instagram.com/voxcortescv/','https://x.com/vox_cv','https://www.facebook.com/VOXCortesValencianas/','URL_EXTRA') },
  }},
  murcia:{ name:'Murcia', partidos:{
    PP:         { links: rl('PP Murcia','murcia','https://www.rtve.es/contenidos/documentos/elecciones_autonomicas_2023/programas_electorales/murcia_pp.pdf','URL_PRESENTACION','https://www.ppregiondemurcia.es/','https://www.youtube.com/@ppregiondemurcia','https://www.instagram.com/ppregiondemurcia/','https://x.com/PPRMurcia','https://www.facebook.com/PPRMurcia/','URL_EXTRA') },
    PSOE:       { links: rl('PSOE Murcia','murcia','https://www.rtve.es/contenidos/documentos/elecciones_autonomicas_2023/programas_electorales/murcia_psoe.pdf','URL_PRESENTACION','https://www.psoe-regiondemurcia.com/','https://www.youtube.com/@psoemurciatelevision','https://www.instagram.com/psoeregiondemurcia/','https://x.com/PSOE_RM','https://www.facebook.com/psrmpsoe/?locale=es_ES','URL_EXTRA') },
    VOX:        { links: rl('VOX Murcia','murcia','https://www.rtve.es/contenidos/documentos/elecciones_autonomicas_2023/programas_electorales/murcia_vox.pdf','URL_PRESENTACION','https://www.voxespana.es/murcia','https://www.youtube.com/@VoxMurciaOficial','https://www.instagram.com/voxmurcia/','https://x.com/Vox_Murcia','https://www.facebook.com/MurciaVOX/','URL_EXTRA') },
    PODEMOS:    { links: rl('PODEMOS Murcia','murcia','https://www.rtve.es/contenidos/documentos/elecciones_autonomicas_2023/programas_electorales/murcia_podemos.pdf','URL_PRESENTACION','https://regiondemurcia.podemos.info/','https://www.youtube.com/@PodemosRegi%C3%B3ndeMurcia','https://www.instagram.com/podemosrmurcia/','https://x.com/podemosmurcia','https://www.facebook.com/podemosmurcia/?locale=es_ES','URL_EXTRA') },
  }},
  andalucia:{ name:'Andalucía', partidos:{
    PP:         { links: rl('PP Andalucía','andalucia','URL_PROGRAMA_ELECTORAL','URL_PRESENTACION','https://ppandalucia.es/','https://www.youtube.com/@ppdeandalucia','https://www.instagram.com/ppandalucia/','https://x.com/ppandaluz','https://www.facebook.com/PPAndalucia/?locale=es_LA','URL_EXTRA') },
    PSOE:       { links: rl('PSOE-A Andalucía','andalucia','URL_PROGRAMA_ELECTORAL','URL_PRESENTACION','https://www.psoeandalucia.es/','https://www.youtube.com/@PSOEAndalucia','https://www.instagram.com/psoedeandalucia/','https://x.com/psoedeandalucia','https://www.facebook.com/PSOE.Andalucia/?locale=es_ES','URL_EXTRA') },
    VOX:        { links: rl('VOX Andalucía','andalucia','URL_PROGRAMA_ELECTORAL','URL_PRESENTACION','https://www.voxespana.es/andalucia','https://www.youtube.com/@voxandalucia','https://www.instagram.com/andalucia_vox/','https://x.com/AndaluciaVox','https://www.facebook.com/VOXParlamentoAndalucia/?locale=es_ES','URL_EXTRA') },
    'POR ANDALUCÍA':  { links: rl('Por Andalucía','andalucia','URL_PROGRAMA_ELECTORAL','URL_PRESENTACION','https://porandalucia.org/','https://www.youtube.com/@PorAndaluc%C3%ADaOrg','https://www.instagram.com/porandaluciaorg/','https://x.com/PorAndaluciaOrg','https://www.facebook.com/AndaluciaPor/','URL_EXTRA') },
    'ADELANTE ANDALUCIA':{ links: rl('Adelante Andalucía','andalucia','URL_PROGRAMA_ELECTORAL','URL_PRESENTACION','https://adelanteandalucia.org/','https://www.youtube.com/@AdelanteAndaluc%C3%ADa','https://www.instagram.com/adelanteandalucia/','https://x.com/AdelanteAND','https://www.facebook.com/AdelanteAndalucia/','URL_EXTRA') },
  }},
};

let recursosInited=false, recursosTipo='generales', recursosSelGeneral=null, recursosSelAut=null;

function recursosInit(){
  if(recursosInited) return;
  recursosInited=true;
  // Build generales buttons
  const btnsEl=document.getElementById('recursos-generales-btns');
  btnsEl.innerHTML=Object.entries(RECURSOS_GENERALES).map(([key,p])=>`
    <button onclick="recursosSelectGeneral('${key}',this)" id="rg-btn-${key}"
      style="${getPartyStyle(key)}padding:9px 18px;border-radius:9px;border:none;font-family:var(--font);font-size:13px;font-weight:700;cursor:pointer;transition:all .2s;opacity:.75;">
      ${p.label}
    </button>`).join('');
}

function recursosSetTipo(tipo, btn){
  recursosTipo=tipo;
  document.getElementById('recursos-btn-generales').style.cssText='flex:1;padding:10px 16px;border-radius:8px;border:none;font-family:var(--font);font-size:13px;font-weight:700;cursor:pointer;transition:all .2s;'+(tipo==='generales'?'background:var(--accent);color:#fff;':'background:transparent;color:var(--text2);');
  document.getElementById('recursos-btn-autonomicas').style.cssText='flex:1;padding:10px 16px;border-radius:8px;border:none;font-family:var(--font);font-size:13px;font-weight:700;cursor:pointer;transition:all .2s;'+(tipo==='autonomicas'?'background:var(--accent);color:#fff;':'background:transparent;color:var(--text2);');
  document.getElementById('recursos-panel-generales').style.display=tipo==='generales'?'block':'none';
  document.getElementById('recursos-panel-autonomicas').style.display=tipo==='autonomicas'?'block':'none';
}

function recursosSelectGeneral(key, btn){
  recursosSelGeneral=key;
  document.querySelectorAll('#recursos-generales-btns button').forEach(b=>{b.style.opacity='.75';b.style.boxShadow='none';b.style.transform='none';});
  btn.style.opacity='1';
  btn.style.boxShadow='0 0 0 3px rgba(255,255,255,.3), 0 4px 16px rgba(0,0,0,.3)';
  btn.style.transform='translateY(-2px)';
  const p=RECURSOS_GENERALES[key];
  document.getElementById('recursos-generales-links').innerHTML=recursosLinksHTML(key, p.label, p.links);
}

function recursosLoadCCAA(ccaa){
  if(!ccaa){
    document.getElementById('recursos-aut-placeholder').style.display='block';
    document.getElementById('recursos-aut-content').style.display='none';
    return;
  }
  const d=RECURSOS_AUTONOMICAS[ccaa]; if(!d) return;
  document.getElementById('recursos-aut-placeholder').style.display='none';
  document.getElementById('recursos-aut-content').style.display='block';
  document.getElementById('recursos-aut-title').textContent=d.name+' — Selecciona un partido';
  document.getElementById('recursos-aut-links').innerHTML='';
  // Build party buttons from object keys
  const partidos=Object.keys(d.partidos);
  const btnsEl=document.getElementById('recursos-aut-btns');
  btnsEl.innerHTML=partidos.map(p=>`
    <button onclick="recursosSelectAut('${p.replace(/'/g,"\\'")}','${ccaa}',this)" id="ra-btn-${p.replace(/[ '!]/g,'_')}"
      style="${getPartyStyle(p)}padding:9px 18px;border-radius:9px;border:none;font-family:var(--font);font-size:13px;font-weight:700;cursor:pointer;transition:all .2s;opacity:.75;">
      ${p}
    </button>`).join('');
  recursosSelAut=null;
}

function recursosSelectAut(partido, ccaa, btn){
  recursosSelAut=partido;
  document.querySelectorAll('#recursos-aut-btns button').forEach(b=>{b.style.opacity='.75';b.style.boxShadow='none';b.style.transform='none';});
  btn.style.opacity='1';
  btn.style.boxShadow='0 0 0 3px rgba(255,255,255,.3), 0 4px 16px rgba(0,0,0,.3)';
  btn.style.transform='translateY(-2px)';
  // Always use the specific ccaa links — each is unique
  const ccaaData=RECURSOS_AUTONOMICAS[ccaa];
  const partidoData=ccaaData&&ccaaData.partidos[partido];
  const links=partidoData?partidoData.links:[];
  document.getElementById('recursos-aut-links').innerHTML=recursosLinksHTML(partido, partido, links);
}

function recursosLinksHTML(key, displayLabel, links){
  const c=RECURSOS_PARTY_COLORS[key]||{bg:'#546e7a',text:'#fff'};
  if(!links||!links.length) return `<div style="text-align:center;padding:30px;color:var(--text3);">No hay enlaces disponibles para este partido</div>`;
  return `<div class="card" style="padding:16px;border-color:${c.bg}33;">
    <div class="stitle" style="margin-bottom:12px;color:${c.bg};">${displayLabel} — Recursos oficiales</div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:8px;">
      ${links.map(l=>{
        const isPlaceholder=l.url==='ENLACE_AQUI';
        return `<a href="${isPlaceholder?'#':l.url}" target="${isPlaceholder?'_self':'_blank'}" rel="noopener"
          onclick="${isPlaceholder?"event.preventDefault();alert('Enlace pendiente de configurar')":''};"
          style="display:flex;align-items:center;gap:10px;padding:11px 14px;background:var(--bg4);border:1px solid ${isPlaceholder?'rgba(255,200,0,.2)':'var(--border)'};border-radius:9px;text-decoration:none;color:${isPlaceholder?'var(--text3)':'var(--text)'};font-size:13px;font-weight:500;transition:all .2s;${isPlaceholder?'opacity:.6;':''}"
          onmouseover="this.style.borderColor='${isPlaceholder?'rgba(255,200,0,.5)':c.bg}';this.style.background='var(--surface2)'"
          onmouseout="this.style.borderColor='${isPlaceholder?'rgba(255,200,0,.2)':'var(--border)'  }';this.style.background='var(--bg4)'">
          <span style="width:8px;height:8px;border-radius:50%;background:${isPlaceholder?'#f5b731':c.bg};flex-shrink:0;"></span>
          ${l.name}
          <span style="margin-left:auto;font-size:10px;color:var(--text3);">${isPlaceholder?'⚙':'↗'}</span>
        </a>`;
      }).join('')}
    </div>
    ${links.some(l=>l.url==='ENLACE_AQUI')?`<div style="margin-top:10px;font-size:11px;color:var(--text3);display:flex;align-items:center;gap:5px;"><span style="color:#f5b731;">⚙</span> Los enlaces marcados con ⚙ están pendientes de configurar</div>`:''}
  </div>`;
}


/* ══════════════════════ TESTS TAB SWITCHER ══════════════════════ */
/* testsSelectTab definida más abajo */

/* ══════════════════════ TEST 2: COORDENADAS POLÍTICAS ══════════════════════ */
/* Slider-based question style inspired by the original */
const NOLAN_QUESTIONS = [
  /* SOCIAL 1-10 */
  {
    id:1, titulo:"Pregunta 1: Libertad de expresión", tipo:"social",
    escenario:"Algunos individuos y medios de comunicación difunden con facilidad opiniones equivocadas con objetivos cuestionables.",
    opciones:[
      {texto:"Debe prohibirse la difusión de opiniones equivocadas cuyo objetivo sea manipular y/o influir en los demás.", valor:0},
      {texto:"Debe prohibirse la realización de apologías de ideologías extremas.", valor:50},
      {texto:"No debe haber censura de opiniones por parte del Estado en ningún caso.", valor:100}
    ]
  },
  {
    id:2, titulo:"Pregunta 2: Religión", tipo:"social",
    escenario:"La Iglesia realiza ciertas labores de carácter social. Por ello...",
    opciones:[
      {texto:"El Estado debe contribuir a la financiación de la Iglesia, y tener en cuenta sus valores a la hora de legislar.", valor:0},
      {texto:"El Estado debe ser aconfesional, aunque puede contribuir a la financiación de la Iglesia para sostener su labor social en colegios concertados, centros de asistencia, etc...", valor:50},
      {texto:"La Iglesia debe autofinanciarse, y estar en igualdad de condiciones con cualquier otra asociación. El Estado debe permanecer laico.", valor:100}
    ]
  },
  {
    id:3, titulo:"Pregunta 3: Servicio Militar", tipo:"social",
    escenario:"La defensa del país corresponde a quienes prestan Servicio Militar en los ejércitos.",
    opciones:[
      {texto:"El Servicio Militar debe ser obligatorio como forma de contribuir al bien común y/o a la formación de los jóvenes.", valor:0},
      {texto:"El Sercicio Militar debe ser voluntario. Es el mejor modo de tener un ejército profesional y preparado para defender nuestros intereses y compromisos en el exterior.", valor:50},
      {texto:"El Servicio Militar debería ser voluntario en caso de existir ejército, y de ser así, su naturaleza debería limitarse a sus funciones más esenciales de defensa.", valor:100}
    ]
  },
  {
    id:4, titulo:"Pregunta 4: Sexo", tipo:"social",
    escenario:"Las relaciones sexuales entre adultos que consienten son un asunto de la esfera privada de las personas. Sin embargo...",
    opciones:[
      {texto:"Conductas como la homosexualidad, la poligamia o la prostitución deben prohibirse o estar fuertemente controladas.", valor:0},
      {texto:"La prostitución debe prohibirse o estar fuertemente controlada.", valor:50},
      {texto:"Las leyes no deben entrometerse en las relaciones sexuales entre adultos que consientan, en ningún caso.", valor:100}
    ]
  },
  {
    id:5, titulo:"Pregunta 5: Drogas", tipo:"social",
    escenario:"Las drogas suponen un drama para muchas familias.",
    opciones:[
      {texto:"El Estado debería combatir el tráfico de drogas con más medios y de un modo más eficaz.", valor:0},
      {texto:"El uso de algunas de las drogas prohibidas actualmente debería ser legal, aunque debería controlarse su distribución.", valor:50},
      {texto:"Deberían legalizarse las drogas, despenalizando su uso y liberalizando su distribución.", valor:100}
    ]
  },
  {
    id:6, titulo:"Pregunta 6: Seguridad", tipo:"social",
    escenario:"La toma de medidas preventivas puede suponer una mejora de la seguridad ciudadana. Sin embargo, en muchos casos éstas chocan con algunos derechos individuales, como el derecho a la intimidad.",
    opciones:[
      {texto:"La seguridad de todos está por encima de los derechos de uno solo; Las fuerzas de seguridad del Estado no deben ver su función entorpecida porque un posible criminal se ampare en sus derechos individuales.", valor:0},
      {texto:"Las leyes y el poder judicial deben establecer en qué casos se puede anteponer el uso de medidas preventivas de seguridad a ciertos derechos individuales y en qué casos no.", valor:50},
      {texto:"El Estado no debe vulnerar ningún derecho individual por motivos de seguridad.", valor:100}
    ]
  },
  {
    id:7, titulo:"Pregunta 7: Discriminación", tipo:"social",
    escenario:"En ciertas instituciones, grupos o profesiones, existe disparidad entre el número de hombres y mujeres, o entre distintas razas o grupos sociales.",
    opciones:[
      {texto:"Las cuotas obligatorias son el mejor instrumento para remediar las situaciones de discriminación histórica.", valor:0},
      {texto:"Las ayudas para la integración o los beneficios fiscales a los grupos menos representados son el mejor instrumento para paliar la discriminación.", valor:50},
      {texto:"Cualquier tipo de imposición o beneficio basado en criterios de sexo, raza o grupo social, viola el principio de igualdad ante la ley, y no debe ser impuesto por el Estado.", valor:100}
    ]
  },
  {
    id:8, titulo:"Pregunta 8: Inmigración", tipo:"social",
    escenario:"Las fronteras se utilizan para controlar la inmigración.",
    opciones:[
      {texto:"Hay que limitar decididamente la entrada de nuevos inmigrantes y/o expulsar a aquellos que no se integren.", valor:0},
      {texto:"El Estado debe regular la inmigración para permitir que los inmigrantes necesarios vengan de un modo legal.", valor:50},
      {texto:"No debe haber diferencias de derechos en función del lugar de nacimiento o nacionalidad.", valor:100}
    ]
  },
  {
    id:9, titulo:"Pregunta 9: Nación", tipo:"social",
    escenario:"El Estado moderno suele ir aparejado al concepto de una nación.",
    opciones:[
      {texto:"El Estado debe promover el sentimiento patriótico y defender la identidad nacional, cultura e idioma que le son propios.", valor:0},
      {texto:"El Estado debe proteger y/o promover la cultura y el idioma que son propios de su nación.", valor:50},
      {texto:"El Estado no debe intervenir en cuestiones tan personales como la identidad o la cultura. Cada ciudadano debe tener la libertad de usar el idioma que considere.", valor:100}
    ]
  },
  {
    id:10, titulo:"Pregunta 10: Medio Ambiente", tipo:"social",
    escenario:"Una de las mayores amenazas para la civilización es el deterioro del Medio Ambiente.",
    opciones:[
      {texto:"Las leyes deben obligar a contaminar menos imponiendo estrictas limitaciones de contaminantes.", valor:0},
      {texto:"Hay que promover las energías limpias mediante incentivos a aquellos que contaminen menos y cargas a los que contaminen más.", valor:50},
      {texto:"Se contaminaría menos si se estableciesen responsabilidades claras y derechos de propiedad bien definidos con respecto a la contaminación.", valor:100}
    ]
  },
  /* ECONOMIC 11-20 */
  {
    id:11, titulo:"Pregunta 11: Globalización", tipo:"economico",
    escenario:"La importación de bienes del extranjero puede ser limitada por el Estado mediante diversos instrumentos, como los aranceles aduaneros, las prohibiciones, o ciertas regulaciones.",
    opciones:[
      {texto:"El Estado debe limitar la entrada de productos de otros países para favorecer a los productores nacionales.", valor:0},
      {texto:"El Estado debe limitar la entrada de productos del tercer mundo, ya que se producen con mano de obra barata.", valor:50},
      {texto:"El Estado no debe limitar el comercio internacional. Éste debe ser libre y los aranceles deben reducirse o eliminarse.", valor:100}
    ]
  },
  {
    id:12, titulo:"Pregunta 12: Impuestos", tipo:"economico",
    escenario:"Los impuestos son necesarios para sufragar los gastos del Estado.",
    opciones:[
      {texto:"Los ricos deberían pagar más impuestos para aumentar las prestaciones y servicios del Estado.", valor:0},
      {texto:"Los impuestos no deberían subir. Deben ser los justos y necesarios para sufragar los gastos del Estado.", valor:50},
      {texto:"Los impuestos deberían reducirse, aunque para ello haya que recortar algunas prestaciones y servicios del Estado.", valor:100}
    ]
  },
  {
    id:13, titulo:"Pregunta 13: Pensiones", tipo:"economico",
    escenario:"Las pensiones para la jubilación garantizan el bienestar cuando se llega a la tercera edad.",
    opciones:[
      {texto:"Las pensiones de jubilación deben ser gestionadas por el Estado con un sistema público de contribuciones obligatorias (Seguridad Social).", valor:0},
      {texto:"Las pensiones de jubilación deben estar garantizadas por el Estado, con algún tipo de modelo mixto que pueda conjugar un sistema público y planes privados.", valor:50},
      {texto:"Las pensiones de jubilación son un asunto de ahorro y planificación individual. El Estado no debe exigir contribuciones obligatorias a un sistema público.", valor:100}
    ]
  },
  {
    id:14, titulo:"Pregunta 14: Solidaridad", tipo:"economico",
    escenario:"Los pobres y necesitados dependen de la solidaridad del resto de la sociedad.",
    opciones:[
      {texto:"El Estado debe encargarse de eliminar o reducir la desigualdad y la pobreza en la sociedad.", valor:0},
      {texto:"El Estado debe gestionar la ayuda y asistencia adecuada a los necesitados, independientemente de que las instituciones privadas de caridad puedan complementarla voluntariamente.", valor:50},
      {texto:"Las instituciones privadas de caridad deben ser las principales canalizadoras de la solidaridad de la sociedad.", valor:100}
    ]
  },
  {
    id:15, titulo:"Pregunta 15: Permisos", tipo:"economico",
    escenario:"Algunas profesiones requieren una cierta cualificación para ejercerlas.",
    opciones:[
      {texto:"Los sectores profesionales tienen que estar regulados por las leyes. El ejercicio de las profesiones cualificadas debe requerir de las oportunas licencias y permisos otorgadas en cada caso por el órgano competente del Estado.", valor:0},
      {texto:"Los sectores profesionales deben estar regulados por organismos independientes, como los colegios profesionales. Los profesionales cualificados deben colegiarse en ellos, ya que su supervisión garantiza la calidad de sus servicios.", valor:50},
      {texto:"Las licencias, permisos y colegios profesionales son trabas innecesarias. El ejercicio de cualquier profesión debe ser libre para cualquier persona cualificada.", valor:100}
    ]
  },
  {
    id:16, titulo:"Pregunta 16: Sindicatos", tipo:"economico",
    escenario:"Los sindicatos representan los intereses de los trabajadores.",
    opciones:[
      {texto:"Los sindicatos son esenciales para proteger los derechos de los trabajadores. El Estado debe proveerles financiación y atribuirles funciones especiales en la legislación laboral.", valor:0},
      {texto:"Los sindicatos, como representantes de los trabajadores, deben contar con ciertas funciones especiales en la legislación laboral, pero no deben ser financiados por el Estado.", valor:50},
      {texto:"Los sindicatos deben regirse por las normas aplicables a cualquier otra asociación, y no recibir financiación pública o atribuírseles funciones especiales.", valor:100}
    ]
  },
  {
    id:17, titulo:"Pregunta 17: Sanidad", tipo:"economico",
    escenario:"La cobertura médica es una necesidad eventual para todas las personas.",
    opciones:[
      {texto:"El Estado debe gestionar centros médicos de carácter público, y financiarlos mediante contribuciones a un seguro médico público de carácter obligatorio (Seguridad Social).", valor:0},
      {texto:"El Estado debe garantizar el acceso universal a la sanidad mediante centros con algún tipo de financiación pública, sean gestionados o no por el Estado.", valor:50},
      {texto:"Gestionar centros médicos no debe ser una función del Estado. Los centros médicos deben ser privados, y los ciudadanos ser libres de contratar el seguro médico que prefieran.", valor:100}
    ]
  },
  {
    id:18, titulo:"Pregunta 18: Bancos", tipo:"economico",
    escenario:"El Banco Central y el sistema bancario, formado por los bancos comerciales, son los que ponen en circulación el dinero de curso legal.",
    opciones:[
      {texto:"Tanto el Banco Central como los bancos comerciales deben ser públicos y atender a las necesidades sociales.", valor:0},
      {texto:"El Banco Central tiene una función esencial regulando la economía, por lo que debe ser independiente y supervisar a los bancos comerciales.", valor:50},
      {texto:"El Banco Central debería reducir sus competencias, y los bancos comerciales ser todos de carácter privado.", valor:100}
    ]
  },
  {
    id:19, titulo:"Pregunta 19: Grandes superficies", tipo:"economico",
    escenario:"Las grandes superficies tienen ciertas ventajas competetitivas frente al pequeño comercio tradicional.",
    opciones:[
      {texto:"Algunas Grandes Superficies tienen prácticas de competencia abusivas. Deberían imponérseles condiciones más restrictivas de funcionamiento, o cerrarse.", valor:0},
      {texto:"Se deben corregir algunas ventajas competitivas de las Grandes Superfies, regulando ciertas materias como sus horarios y días de apertura, o el descuento máximo que pueden aplicar.", valor:50},
      {texto:"Las Grandes Superficies son empresas como cualquier otra. Tienen derecho a competir libremente en el mercado, sin restricciones en sus horarios o precios.", valor:100}
    ]
  },
  {
    id:20, titulo:"Pregunta 20: Mercado laboral", tipo:"economico",
    escenario:"Los contratos laborales vinculan a empresarios y trabajadores en sus obligaciones.",
    opciones:[
      {texto:"La legislación sobre contratos laborales debería restringir más el despido, así como limitar más el empleo precario y garantizar una mayor protección al trabajador.", valor:0},
      {texto:"La legislación sobre contratos laborales debe siempre mantener una protección especial al trabajador, protegiéndole frente al despido y el empleo precario.", valor:50},
      {texto:"Los contratos laborales deben gozar de más libertad de cláusulas entre las partes. La legislación debería interferir menos en materias puramente contractuales, como su duración o causas de rescisión.", valor:100}
    ]
  }
];

/* Parties positioned in Nolan chart: [social%, economic%] */
const NOLAN_PARTIES = [
  { name:"P.P.", badge:"PP", color:"#003f7f", textColor:"#fff", pos:[20, 20] },
  { name:"Vox", badge:"VOX", color:"#63be21", textColor:"#fff", pos:[10, 30] },
  { name:"Ciudadanos", badge:"C's", color:"#f47216", textColor:"#fff", pos:[55, 55] },
  { name:"P.S.O.E.", badge:"PSOE", color:"#e00000", textColor:"#fff", pos:[35, 15] },
  { name:"P-LIB", badge:"PLIB", color:"#3a7aee", textColor:"#fff", pos:[80, 75] },
  { name:"Podemos", badge:"POD", color:"#6b2fa0", textColor:"#fff", pos:[60, 10] }
];

/* ══════════════════════ NOLAN STATE ══════════════════════════════ */
let nolanAnswers = {}; // questionId → option value
let nolanCurrentQ = 0; // index 0-19
let nolanShowParties = false;

function nolanStart(){
  nolanAnswers = {};
  nolanCurrentQ = 0;
  document.getElementById('nolan-start-panel').style.display = 'none';
  document.getElementById('nolan-final-panel').style.display = 'none';
  document.getElementById('nolan-result').style.display = 'none';
  buildNolanQuestions();
  document.getElementById('nolan-questions-area').style.display = 'block';
  nolanGoTo(0);
}

function buildNolanQuestions(){
  const area = document.getElementById('nolan-questions-area');
  area.innerHTML = NOLAN_QUESTIONS.map((q,i) => `
    <div class="nolan-question-block" id="nolan-q-${i}">
      <div class="nolan-q-title">
        ${q.titulo}
      </div>
      <div class="nolan-q-scenario">${q.escenario}</div>
      <div class="nolan-options">
        ${q.opciones.map((o,oi) => `
          <button class="nolan-option-btn" id="nolan-opt-${i}-${oi}" onclick="nolanSelect(${i},${oi},${o.valor})">
            <div class="nolan-radio" id="nolan-radio-${i}-${oi}"></div>
            <span>${o.texto}</span>
          </button>
        `).join('')}
      </div>
      <div style="margin-top:14px;display:flex;gap:10px;align-items:center;">
        ${i>0 ? `<button style="padding:7px 16px;background:var(--bg4);border:1px solid var(--border);border-radius:7px;color:var(--text2);font-family:var(--font);font-size:12px;cursor:pointer;" onclick="nolanGoTo(${i-1})">◀ Anterior</button>` : ''}
        ${i<19 ? `<button style="padding:7px 16px;background:#4f8ef7;border:none;border-radius:7px;color:#fff;font-family:var(--font);font-size:12px;font-weight:600;cursor:pointer;" onclick="nolanGoTo(${i+1})">Siguiente ▶</button>` : ''}
        ${i===19 ? `<button style="padding:7px 16px;background:#4f8ef7;border:none;border-radius:7px;color:#fff;font-family:var(--font);font-size:12px;font-weight:600;cursor:pointer;" onclick="nolanShowFinal()">Ver resumen final ▶</button>` : ''}
      </div>
    </div>
  `).join('');
}

function nolanGoTo(idx){
  document.querySelectorAll('.nolan-question-block').forEach(el=>el.classList.remove('active'));
  const qel = document.getElementById('nolan-q-'+idx);
  if(qel) qel.classList.add('active');
  nolanCurrentQ = idx;
  document.getElementById('nolan-final-panel').style.display = 'none';
  document.getElementById('nolan-questions-area').style.display = 'block';
  nolanUpdateProgress();
  // restore selection visuals
  const q = NOLAN_QUESTIONS[idx];
  q.opciones.forEach((_,oi) => {
    const btn = document.getElementById(`nolan-opt-${idx}-${oi}`);
    const radio = document.getElementById(`nolan-radio-${idx}-${oi}`);
    if(!btn) return;
    const hasAns = nolanAnswers[idx] !== undefined;
    const isSelected = hasAns && nolanAnswers[idx] === q.opciones[oi].valor && nolanAnswers[idx+'_oi'] === oi;
    btn.classList.toggle('selected', isSelected);
  });
}

function nolanSelect(qIdx, oIdx, valor){
  nolanAnswers[qIdx] = valor;
  nolanAnswers[qIdx+'_oi'] = oIdx;
  // update visuals
  const q = NOLAN_QUESTIONS[qIdx];
  q.opciones.forEach((_,i) => {
    document.getElementById(`nolan-opt-${qIdx}-${i}`)?.classList.toggle('selected', i===oIdx);
  });
  nolanUpdateProgress();
  // auto advance after short delay
  if(qIdx < 19){
    setTimeout(() => nolanGoTo(qIdx+1), 280);
  } else {
    setTimeout(() => nolanShowFinal(), 280);
  }
}

function nolanShowFinal(){
  document.querySelectorAll('.nolan-question-block').forEach(el=>el.classList.remove('active'));
  document.getElementById('nolan-questions-area').style.display = 'none';
  document.getElementById('nolan-final-panel').style.display = 'block';
  nolanUpdateProgress();
}

function nolanUpdateProgress(){
  const answered = Object.keys(nolanAnswers).filter(k => !k.includes('_oi')).length;
  const pct = Math.round(answered/20*100);
  document.getElementById('nolan-bar').style.width = pct+'%';
  document.getElementById('nolan-progress-pct').textContent = pct+'%';
}

function nolanSubmit(){ AUTH.requireAuth(_nolanSubmitImpl, 'Inicia sesión para ver tus resultados del test.'); }
function _nolanSubmitImpl(){
  // calc scores
  let socialScores = [], econScores = [];
  NOLAN_QUESTIONS.forEach((q,i) => {
    if(nolanAnswers[i] !== undefined){
      if(q.tipo==='social') socialScores.push(nolanAnswers[i]);
      else econScores.push(nolanAnswers[i]);
    }
  });
  const socialPct = socialScores.length ? Math.round(socialScores.reduce((a,b)=>a+b,0)/socialScores.length) : 50;
  const econPct   = econScores.length   ? Math.round(econScores.reduce((a,b)=>a+b,0)/econScores.length) : 50;

  // Determine ideology
  const {title:ideoTitle, desc:ideoDesc} = nolanIdeology(socialPct, econPct);

  // Show result section
  document.getElementById('nolan-final-panel').style.display = 'none';
  document.getElementById('nolan-questions-area').style.display = 'none';
  document.getElementById('nolan-start-panel').style.display = 'none';

  document.getElementById('nolan-bar-social').style.width = socialPct+'%';
  document.getElementById('nolan-pct-social').textContent = socialPct+'%';
  document.getElementById('nolan-bar-economico').style.width = econPct+'%';
  document.getElementById('nolan-pct-economico').textContent = econPct+'%';
  document.getElementById('nolan-ideo-title').textContent = ideoTitle;
  document.getElementById('nolan-ideo-desc').innerHTML = ideoDesc;

  // Parties sorted by distance
  const partiesSorted = NOLAN_PARTIES.map(p => ({
    ...p,
    dist: Math.round(Math.sqrt(Math.pow(p.pos[0]-socialPct,2)+Math.pow(p.pos[1]-econPct,2)))
  })).sort((a,b)=>a.dist-b.dist);

  document.getElementById('nolan-parties-list').innerHTML = partiesSorted.map(p=>`
    <div class="nolan-party-row">
      <span class="nolan-party-badge" style="background:${p.color};color:${p.textColor};">${p.badge}</span>
      <span class="nolan-party-name">${p.name}</span>
      <span class="nolan-party-dist">(a ${p.dist.toFixed(2)})</span>
    </div>
  `).join('');

  // Answers list
  document.getElementById('nolan-answers-list').innerHTML = NOLAN_QUESTIONS.map((q,i) => {
    if(nolanAnswers[i]===undefined) return '';
    const oIdx = nolanAnswers[i+'_oi'];
    const optText = q.opciones[oIdx]?.texto || '';
    return `<li>${optText}</li>`;
  }).filter(Boolean).join('');

  document.getElementById('nolan-result').style.display = 'block';
  nolanShowParties = false;
  drawNolanDiagram(socialPct, econPct, false);

  // scroll to result
  setTimeout(()=>document.getElementById('nolan-result').scrollIntoView({behavior:'smooth',block:'start'}),100);
}

function nolanIdeology(s, e){
  // s = social freedom (0=autoritarian, 100=libertarian social)
  // e = economic freedom (0=collectivist, 100=liberal)
  if(s>=60 && e>=60) return {
    title:"Liberal",
    desc:"Los liberales defienden tanto la libertad individual en el ámbito personal como en el económico. Valoran la autonomía personal, el libre mercado, la limitación del poder del Estado y los derechos civiles ampliados."
  };
  if(s<40 && e<40) return {
    title:"Totalitario",
    desc:"Esta posición defiende un fuerte control del Estado tanto en lo social como en lo económico. El orden colectivo y la seguridad se priorizan por encima de las libertades individuales."
  };
  if(s>=60 && e<40) return {
    title:"Progresista (izquierda)",
    desc:"Los progresistas defienden amplias libertades personales y sociales, pero favorecen la intervención del Estado en la economía para reducir las desigualdades y garantizar servicios públicos."
  };
  if(s<40 && e>=60) return {
    title:"Conservador (derecha)",
    desc:"Los conservadores favorecen la libertad económica y el libre mercado, pero defienden valores tradicionales y cierto orden social. El Estado debe intervenir poco en la economía pero puede regular la moral pública."
  };
  // center variations
  if(s>=45 && s<60 && e>=45 && e<60) return {
    title:"Centro",
    desc:"Los centristas combinan elementos de distintas ideologías. Buscan un equilibrio entre la intervención del Estado y el libre mercado, así como entre las libertades individuales y el orden social."
  };
  if(e>=50) return {
    title:"Centro-Conservador",
    desc:"Los centristas comparten características con otras ideologías, prefiriendo una combinación equilibrada entre Estado y libertad individual. Los conservadores piensan que el Estado debe garantizar un cierto orden social a la vez que la economía debe disfrutar de poca regulación."
  };
  return {
    title:"Centro-Progresista",
    desc:"Los centristas comparten características con otras ideologías, prefiriendo una combinación equilibrada entre Estado y libertad individual. Los progresistas defienden amplias libertades personales y cierta intervención estatal en economía."
  };
}

function nolanTogglePartiesOnDiagram(){
  nolanShowParties = !nolanShowParties;
  document.getElementById('nolan-toggle-parties-btn').textContent = nolanShowParties ? 'Ocultar partidos «' : 'Mostrar en diagrama »';
  // recalc scores from bars
  const s = parseInt(document.getElementById('nolan-bar-social').style.width)||50;
  const e = parseInt(document.getElementById('nolan-bar-economico').style.width)||50;
  drawNolanDiagram(s, e, nolanShowParties);
}

function drawNolanDiagram(socialPct, econPct, showParties){
  const canvas = document.getElementById('nolan-diagram-canvas');
  const size = canvas.parentElement.offsetWidth || 380;
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  const M = 50; // margin
  const W = size - 2*M;

  ctx.clearRect(0,0,size,size);

  // Background
  ctx.fillStyle = '#161b27';
  ctx.fillRect(0,0,size,size);

  // Draw diamond grid
  const steps = 10;
  ctx.strokeStyle = 'rgba(255,255,255,0.06)';
  ctx.lineWidth = 1;
  for(let i=0; i<=steps; i++){
    const t = i/steps;
    // horizontal lines in diamond space
    const x1 = M + t*W/2;
    const y1 = M + (1-t)*W/2;
    const x2 = M + W/2 + t*W/2;
    const y2 = M + W/2 + t*W/2;
    ctx.beginPath(); ctx.moveTo(x1,y1); ctx.lineTo(x2,y2); ctx.stroke();
    // vertical lines
    const x3 = M + t*W/2;
    const y3 = M + W/2 + t*W/2;
    const x4 = M + W/2 + (1-t)*W/2;
    const y4 = M + (1-t)*W/2;
    // remap to diamond
  }

  // Draw the nolan diamond
  function toCanvas(sx, ey){ // sx=0-100 social(left=0), ey=0-100 economic(bottom=0)
    const nx = sx/100; const ny = ey/100;
    const cx = M + W/2 + (nx - 0.5)*W/2 + (ny - 0.5)*W/2;
    const cy = M + W/2 - (nx - 0.5)*W/2 + (ny - 0.5)*W/2;
    return [cx,cy];
  }

  // Diamond outline
  const corners = [[0,50],[50,100],[100,50],[50,0]];
  ctx.beginPath();
  corners.forEach(([s,e],i)=>{
    const [cx,cy] = toCanvas(s,e);
    i===0 ? ctx.moveTo(cx,cy) : ctx.lineTo(cx,cy);
  });
  ctx.closePath();
  ctx.strokeStyle = 'rgba(255,255,255,0.15)';
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // Quadrant fills
  const quads = [
    {label:"liberal",    s:75, e:75, color:'rgba(79,142,247,0.08)'},
    {label:"totalitario",s:25, e:25, color:'rgba(200,50,50,0.08)'},
    {label:"progresista",s:75, e:25, color:'rgba(200,100,200,0.08)'},
    {label:"conservador",s:25, e:75, color:'rgba(80,200,80,0.08)'},
  ];
  // just labels
  ctx.font = `bold ${Math.round(size*0.028)}px Sora,sans-serif`;
  ctx.fillStyle = 'rgba(255,255,255,0.35)';
  ctx.textAlign='center';
  const labelPos = [
    {label:'liberal', sx:75, ey:75},
    {label:'totalitario', sx:25, ey:25},
    {label:'progresista\n(izquierda)', sx:72, ey:25},
    {label:'conservador\n(derecha)', sx:28, ey:75},
  ];
  labelPos.forEach(lp=>{
    const [cx,cy] = toCanvas(lp.sx, lp.ey);
    lp.label.split('\n').forEach((line,li) => {
      ctx.fillText(line, cx, cy + li*14);
    });
  });

  // Axis labels
  ctx.font = `${Math.round(size*0.022)}px Sora,sans-serif`;
  ctx.fillStyle = 'rgba(255,255,255,0.5)';
  // top
  const [tx,ty] = toCanvas(50,100); ctx.fillText('100%',tx,ty-8);
  // bottom
  const [bx,by] = toCanvas(50,0); ctx.fillText('0% 0%',bx,by+18);
  // left
  const [lx,ly] = toCanvas(0,50); ctx.textAlign='right'; ctx.fillText('100%',lx-8,ly+4);
  ctx.textAlign='left';
  const [rx,ry] = toCanvas(100,50); ctx.fillText('100%',rx+8,ry+4);
  ctx.textAlign='center';

  // Axis names
  ctx.font = `bold ${Math.round(size*0.025)}px Sora,sans-serif`;
  ctx.fillStyle = 'rgba(255,255,255,0.6)';
  const [laX,laY] = toCanvas(15,50); ctx.fillText('Libertad',laX-20,laY-10);
  ctx.font = `${Math.round(size*0.02)}px Sora,sans-serif`;
  ctx.fillText('Personal',laX-20,laY+4);
  const [eaX,eaY] = toCanvas(50,85);
  ctx.font = `bold ${Math.round(size*0.025)}px Sora,sans-serif`;
  ctx.fillText('Libertad',eaX,eaY+20);
  ctx.font = `${Math.round(size*0.02)}px Sora,sans-serif`;
  ctx.fillText('Económica',eaX,eaY+34);

  // Percentages on axes
  const pctPositions = [10,20,30,40,50,60,70,80,90];
  ctx.font = `${Math.round(size*0.018)}px Sora,sans-serif`;
  ctx.fillStyle = 'rgba(255,255,255,0.3)';
  pctPositions.forEach(p=>{
    const [cx1,cy1] = toCanvas(p, 100-p+p*0); // rough
    // just mark on left axis
    const [cx,cy] = toCanvas(0, p);
    ctx.textAlign='right';
    ctx.fillText(p+'%',cx-4,cy+4);
    ctx.textAlign='center';
    const [cx2,cy2] = toCanvas(p, 0);
    ctx.fillText(p+'%',cx2, cy2+16);
  });

  // Show parties
  if(showParties){
    NOLAN_PARTIES.forEach(p=>{
      const [px,py] = toCanvas(p.pos[0], p.pos[1]);
      ctx.beginPath();
      ctx.arc(px,py,10,0,Math.PI*2);
      ctx.fillStyle = p.color;
      ctx.fill();
      ctx.strokeStyle='rgba(255,255,255,0.5)';
      ctx.lineWidth=1.5;
      ctx.stroke();
      ctx.font=`bold ${Math.round(size*0.022)}px Sora,sans-serif`;
      ctx.fillStyle='#fff';
      ctx.textAlign='center';
      ctx.fillText(p.badge,px,py+4);
    });
  }

  // User dot
  const [ux,uy] = toCanvas(socialPct, econPct);
  ctx.beginPath();
  ctx.arc(ux,uy,10,0,Math.PI*2);
  ctx.fillStyle='rgba(255,255,255,0.9)';
  ctx.fill();
  ctx.strokeStyle='#4f8ef7';
  ctx.lineWidth=3;
  ctx.stroke();
  // circle inside
  ctx.beginPath();
  ctx.arc(ux,uy,4,0,Math.PI*2);
  ctx.fillStyle='#4f8ef7';
  ctx.fill();

  // Legend
  ctx.textAlign='left';
  ctx.font=`${Math.round(size*0.02)}px Sora,sans-serif`;
  ctx.fillStyle='rgba(255,255,255,0.5)';
  const [legX,legY] = toCanvas(50, -15);
  ctx.fillText('⊙ = Su ubicación en el diagrama de Nolan', M, size-12);
}

/* ══════════════════════ TEST 2 JS: COORDENADAS POLÍTICAS ══════════════════════ */
// Each question: { texto, eje: 'economico'|'social', direccion: 1|-1 }
// direccion: 1 = de acuerdo→derecha/liberal, -1 = de acuerdo→izquierda/comunitarista
const COORD_QUESTIONS = [
  { texto: "Un buen ejército es mejor que una buena diplomacia para influir políticamente en otros países.", eje:"social", dir:-1 },
  { texto: "Algunos pueblos y religiones son más problemáticos que otros.", eje:"social", dir:-1 },
  { texto: "Un país no debería ir a la guerra sin el apoyo de la comunidad internacional.", eje:"social", dir:1 },
  { texto: "Generalmente, las filtraciones de información clasificada como las provocadas por Edward Snowden y WikiLeaks hacen más daño que bien.", eje:"social", dir:-1 },
  { texto: "Las personas que renuncian a un trabajo no deberían recibir beneficios para desempleados del gobierno.", eje:"economico", dir:-1 },
  { texto: "La prostitución debería ser legal.", eje:"social", dir:1 },
  { texto: "Es legítimo que los países favorezcan su propia religión antes que las de los demás.", eje:"social", dir:-1 },
  { texto: "La igualdad es más importante que el crecimiento económico.", eje:"economico", dir:1 },
  { texto: "El libre comercio es mejor que la ayuda de otros países para el desarrollo de países tercermundistas.", eje:"economico", dir:-1 },
  { texto: "Mi país debería dar más ayuda económica y de desarrollo a los países del tercer mundo.", eje:"economico", dir:1 },
  { texto: "El dinero de los impuestos no debería ser gastado en el arte o en los deportes.", eje:"economico", dir:-1 },
  { texto: "El gobierno debería dar ayuda médica sin costes a sus ciudadanos.", eje:"economico", dir:1 },
  { texto: "La civilización occidental se ha nutrido más del cristianismo que de las ideas de la Antigua Grecia.", eje:"social", dir:-1 },
  { texto: "Hay un conflicto entre el interés de los negocios y el bien de la sociedad.", eje:"economico", dir:1 },
  { texto: "Casi nunca termina bien cuando el gobierno se involucra en los negocios.", eje:"economico", dir:-1 },
  { texto: "La inmigración en mi país debería de ser reducida y estrictamente controlada.", eje:"social", dir:-1 },
  { texto: "Necesitamos aumentar las sanciones a quienes dañan el medio ambiente.", eje:"social", dir:1 },
  { texto: "Algunos países y civilizaciones son enemigos naturales.", eje:"social", dir:-1 },
  { texto: "Si las personas quieren conducir sin cinturón de seguridad, es su decisión.", eje:"social", dir:1 },
  { texto: "El gasto público con la intención de crear trabajos generalmente es una buena idea.", eje:"economico", dir:1 },
  { texto: "En algunos casos, la pena de muerte debería ser una opción.", eje:"social", dir:-1 },
  { texto: "Generalmente, el mercado es mejor en la asignación de recursos que el gobierno.", eje:"economico", dir:-1 },
  { texto: "Los programas de supervisión y antiterroristas han ido demasiado lejos.", eje:"social", dir:1 },
  { texto: "La marihuana debería ser legal.", eje:"social", dir:1 },
  { texto: "El suicidio con ayuda médica debería ser legal.", eje:"social", dir:1 },
  { texto: "Rehabilitar a los criminales es más importante que castigarlos.", eje:"social", dir:1 },
  { texto: "Las parejas homosexuales deberían tener exactamente los mismos derechos que las heterosexuales, incluyendo el derecho de adoptar.", eje:"social", dir:1 },
  { texto: "Los impuestos en los productos importados son una buena manera de proteger el trabajo en mi país.", eje:"economico", dir:1 },
  { texto: "Generalmente, los sindicatos hacen más daño que bien.", eje:"economico", dir:-1 },
  { texto: "Hay demasiados programas de gobierno innecesarios.", eje:"economico", dir:-1 },
  { texto: "Yo opino que está bien si un inmigrante quiere izar la bandera de su país en el mío.", eje:"social", dir:1 },
  { texto: "El gobierno debería redistribuir la riqueza de los ricos entre los pobres.", eje:"economico", dir:1 },
  { texto: "La especulación en la bolsa de valores es menos deseable que otros tipos de actividad económica.", eje:"economico", dir:1 },
  { texto: "La monarquía y la aristocracia deberían ser eliminadas.", eje:"social", dir:1 },
  { texto: "El gobierno debería poner un límite a los salarios de los banqueros y directores ejecutivos.", eje:"economico", dir:1 },
  { texto: "Generalmente, el salario mínimo hace más daño que bien.", eje:"economico", dir:-1 }
];

// Score mapping: segment index 0-4 → value
// 0=En desacuerdo(-2), 1=Algo desacuerdo(-1), 2=Neutral(0), 3=Algo acuerdo(1), 4=De acuerdo(2)
const COORD_SEG_VALUES = [-2, -1, 0, 1, 2];

let coordAnswers = {}; // idx → segment (0-4), null=not answered
let coordCurrentQ = 0;
let coordStarted = false;

function coordInit(){
  const wrap = document.getElementById('test-coordenadas');
  wrap.innerHTML = `
    <div class="coord-intro" id="coord-intro-panel">
      <h2>Test de coordenadas políticas</h2>
      <p>Este test gratuito sobre posiciones políticas te permitirá obtener tu puntuación en las dos principales escalas políticas que se observan en las democracias occidentales. Aunque existen otras pruebas diferentes sobre "coordenadas políticas" y "posiciones políticas", estas han sido comúnmente criticadas por tratar de engañar a los encuestados para que respondan de cierta manera, por ejemplo, dándole un giro a las preguntas o encuadrándolas de tal manera que provoquen reacciones emocionales en el encuestado. Por el contrario, esta prueba trata simplemente de confrontarte con las preguntas sin endulzarlas ni darles ningún giro.</p>
      <button class="coord-start-btn" onclick="coordStart()">COMENZAR EL TEST</button>
    </div>
    <div id="coord-question-panel" style="display:none;">
      <div class="coord-progress-bar"><div class="coord-progress-fill" id="coord-prog-fill" style="width:0%"></div></div>
      <div class="coord-question-wrap" id="coord-q-wrap"></div>
    </div>
    <div id="coord-result-panel" style="display:none;"></div>
  `;
}

function coordStart(){
  coordAnswers = {};
  coordCurrentQ = 0;
  document.getElementById('coord-intro-panel').style.display = 'none';
  document.getElementById('coord-question-panel').style.display = 'block';
  coordRenderQuestion(0);
}

function coordRenderQuestion(idx){
  coordCurrentQ = idx;
  const q = COORD_QUESTIONS[idx];
  const total = COORD_QUESTIONS.length;
  const pct = Math.round(idx/total*100);
  document.getElementById('coord-prog-fill').style.width = pct+'%';

  const sel = coordAnswers[idx] !== undefined ? coordAnswers[idx] : -1;

  document.getElementById('coord-q-wrap').innerHTML = `
    <div class="coord-q-header">Pregunta ${idx+1} de ${total}</div>
    <div class="coord-q-divider"></div>
    <div class="coord-q-text">${q.texto}</div>
    <div class="coord-slider-wrap">
      <div class="coord-slider-labels">
        <span>En desacuerdo</span>
        <span>De acuerdo</span>
      </div>
      <div class="coord-segments" id="coord-segs">
        ${[0,1,2,3,4].map(i=>`<div class="coord-seg${sel===i?' active':''}" onclick="coordSelectSeg(${idx},${i})" title="${['En desacuerdo','Algo en desacuerdo','Neutral','Algo de acuerdo','De acuerdo'][i]}"></div>`).join('')}
      </div>
    </div>
    <div class="coord-nav-row">
      ${idx < total-1
        ? `<button class="coord-btn-continue" onclick="coordGoTo(${idx+1})">CONTINUAR <span>›</span></button>`
        : `<button class="coord-btn-continue" onclick="coordFinish()" style="background:#5a8a3c;color:#fff;border-color:#5a8a3c;">FINALIZAR <span>›</span></button>`
      }
      ${idx > 0 ? `<button class="coord-btn-back" onclick="coordGoTo(${idx-1})">ATRÁS</button>` : ''}
    </div>
  `;
}

function coordSelectSeg(qIdx, segIdx){
  coordAnswers[qIdx] = segIdx;
  // update visuals immediately
  document.querySelectorAll('#coord-segs .coord-seg').forEach((el,i)=>{
    el.classList.toggle('active', i===segIdx);
  });
  // auto-advance after brief delay
  if(qIdx < COORD_QUESTIONS.length-1){
    setTimeout(()=>coordGoTo(qIdx+1), 300);
  }
}

function coordGoTo(idx){
  if(idx >= COORD_QUESTIONS.length){ coordFinish(); return; }
  coordRenderQuestion(idx);
}

function coordFinish(){
  // Calculate scores
  // Economic axis: right(+) vs left(-)
  // Social axis: liberal(+) vs comunitarista/authoritarian(-)
  let econScore = 0, econCount = 0;
  let socialScore = 0, socialCount = 0;

  COORD_QUESTIONS.forEach((q,i)=>{
    if(coordAnswers[i] === undefined) return;
    const rawVal = COORD_SEG_VALUES[coordAnswers[i]]; // -2 to 2
    const weighted = rawVal * q.dir; // adjust direction
    if(q.eje === 'economico'){
      econScore += weighted; econCount++;
    } else {
      socialScore += weighted; socialCount++;
    }
  });

  // Normalize to -100..100 scale
  const econMax = econCount * 2;
  const socialMax = socialCount * 2;
  const econPct = econMax > 0 ? Math.round(econScore/econMax*100) : 0;
  const socialPct = socialMax > 0 ? Math.round(socialScore/socialMax*100) : 0;

  // Axis labels: econPct>0=derecha, <0=izquierda; socialPct>0=liberal, <0=comunitarista
  const econLabel = econPct >= 0 ? `${Math.abs(econPct).toFixed(1)}% de derecha` : `${Math.abs(econPct).toFixed(1)}% de izquierda`;
  const socialLabel = socialPct >= 0 ? `${Math.abs(socialPct).toFixed(1)}% liberal` : `${Math.abs(socialPct).toFixed(1)}% comunitarista`;

  document.getElementById('coord-question-panel').style.display = 'none';
  const resultPanel = document.getElementById('coord-result-panel');
  resultPanel.style.display = 'block';
  resultPanel.innerHTML = `
    <div class="coord-result-wrap">
      <div class="coord-result-title">Test de coordenadas políticas</div>
      <div style="font-size:13px;font-weight:700;color:var(--text2);margin-bottom:6px;">Tus coordenadas políticas son:</div>
      <div class="coord-result-coords">• ${econLabel}, ${socialLabel}</div>

      <div class="coord-charts-row">
        <div class="coord-chart-card">
          <h4>Tu posición</h4>
          <canvas id="coord-canvas1" width="280" height="280"></canvas>
        </div>
        <div class="coord-chart-card">
          <h4>Comparativa con líderes históricos</h4>
          <canvas id="coord-canvas2" width="280" height="280"></canvas>
        </div>
      </div>

      <div class="coord-quadrant-cards">
        <div class="coord-quad-card" style="background:rgba(93,150,70,.15);border:1px solid rgba(93,150,70,.3);">
          <h4 style="color:#7aaa50;">Comunitarismo de izquierda (Democracia social)</h4>
          <p style="color:var(--text2);">Los individuos en este cuadrante tratan de promover soluciones comunales a los problemas sociales y económicos. Tienden a verse a sí mismos como personas que apoyan un modo de gobierno que frene los excesos del capitalismo y disminuya la desigualdad mediante una economía mixta y un estado universal de bienestar.</p>
        </div>
        <div class="coord-quad-card" style="background:rgba(180,80,60,.15);border:1px solid rgba(180,80,60,.3);">
          <h4 style="color:#c46040;">Comunitarismo de derecha (Conservadurismo)</h4>
          <p style="color:var(--text2);">Los individuos en este cuadrante tratan de conservar el orden social y económico tradicional y de defender la soberanía del Estado. Favorecen leyes de inmigración estrictas, valores tradicionales y un sector militar fuerte.</p>
        </div>
        <div class="coord-quad-card" style="background:rgba(80,130,200,.15);border:1px solid rgba(80,130,200,.3);">
          <h4 style="color:#5090d0;">Liberalismo de izquierda (Liberalismo social)</h4>
          <p style="color:var(--text2);">Los individuos en este cuadrante defienden la libertad individual a la vez que imponen gravámenes sobre el mercado para proporcionar beneficios sociales. Apoyan el multiculturalismo, el gobierno secular y la cooperación internacional.</p>
        </div>
        <div class="coord-quad-card" style="background:rgba(200,170,60,.15);border:1px solid rgba(200,170,60,.3);">
          <h4 style="color:#c4a830;">Liberalismo de derecha (Libertarismo)</h4>
          <p style="color:var(--text2);">Los individuos en este cuadrante defienden la libertad como bien político primario en todos los sentidos. Son profundamente escépticos sobre planes colectivos y enfatizan la capacidad del individuo de tomar sus propias decisiones y el orden espontáneo del mercado.</p>
        </div>
      </div>

      <div class="coord-theory-card">
        <h3>Teoría y metodología</h3>
        <h4>El eje horizontal: Izquierda - Derecha</h4>
        <p>En nuestro test, el eje izquierda-derecha se usa como medida de las opiniones económicas del encuestado, donde la izquierda favorece la intervención del Estado y la regulación económica, mientras que la derecha favorece la libertad económica y el "dejar hacer".</p>
        <h4>El eje vertical: Comunitarista - Liberal</h4>
        <p>Todos los liberales parten de la creencia de que defender las libertades individuales es más importante que satisfacer las necesidades de la sociedad. Todos los comunitaristas parten de la creencia de que el bienestar de la comunidad debería estar por encima de los deseos idiosincrásicos de individuos específicos.</p>
      </div>

      <button class="nolan-retry-btn" onclick="coordReset()">↩ Volver a hacer el test</button>
    </div>
  `;

  // Draw both charts
  setTimeout(()=>{
    coordDrawChart('coord-canvas1', econPct, socialPct, false);
    coordDrawChart('coord-canvas2', econPct, socialPct, true);
  }, 100);
}

function coordDrawChart(canvasId, econPct, socialPct, showLeaders){
  const canvas = document.getElementById(canvasId);
  if(!canvas) return;
  const sz = canvas.parentElement.offsetWidth - 32;
  canvas.width = sz; canvas.height = sz;
  const ctx = canvas.getContext('2d');
  const M = 30;
  const W = sz - 2*M;
  const CX = M + W/2;
  const CY = M + W/2;

  // Quadrant colours
  const quads = [
    {x:M,      y:M,      w:W/2, h:W/2, color:'rgba(93,150,70,0.35)'},   // top-left: izq+comunit
    {x:CX,     y:M,      w:W/2, h:W/2, color:'rgba(180,80,60,0.35)'},   // top-right: der+comunit
    {x:M,      y:CY,     w:W/2, h:W/2, color:'rgba(80,130,200,0.35)'},  // bottom-left: izq+liberal
    {x:CX,     y:CY,     w:W/2, h:W/2, color:'rgba(200,170,60,0.35)'},  // bottom-right: der+liberal
  ];
  quads.forEach(q=>{ ctx.fillStyle=q.color; ctx.fillRect(q.x,q.y,q.w,q.h); });

  // Grid lines
  ctx.strokeStyle = 'rgba(255,255,255,0.08)'; ctx.lineWidth = 0.5;
  for(let i=1;i<10;i++){
    const xg = M + i*(W/10);
    ctx.beginPath(); ctx.moveTo(xg,M); ctx.lineTo(xg,M+W); ctx.stroke();
    const yg = M + i*(W/10);
    ctx.beginPath(); ctx.moveTo(M,yg); ctx.lineTo(M+W,yg); ctx.stroke();
  }

  // Axes
  ctx.strokeStyle = 'rgba(255,255,255,0.4)'; ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(CX,M); ctx.lineTo(CX,M+W); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(M,CY); ctx.lineTo(M+W,CY); ctx.stroke();

  // Axis labels
  ctx.fillStyle = 'rgba(255,255,255,0.7)';
  ctx.font = `bold ${Math.round(sz*0.038)}px Sora,sans-serif`;
  ctx.textAlign = 'center';
  ctx.fillText('Comunitarista', CX, M-8);
  ctx.fillText('Liberal', CX, M+W+18);
  ctx.save(); ctx.translate(M-12, CY); ctx.rotate(-Math.PI/2);
  ctx.fillText('Izquierda', 0, 0); ctx.restore();
  ctx.save(); ctx.translate(M+W+12, CY); ctx.rotate(Math.PI/2);
  ctx.fillText('Derecha', 0, 0); ctx.restore();

  // Leaders positions (econPct→x, socialPct→y; +econ=right, +social=liberal=bottom)
  if(showLeaders){
    const leaders = [
      {name:'G.W. Bush',  econ:15,  social:-20, color:'#e04040'},
      {name:'R. Reagan',  econ:30,  social:-35, color:'#d05050'},
      {name:'B. Clinton', econ:5,   social:5,   color:'#8050c0'},
      {name:'B. Obama',   econ:-15, social:15,  color:'#4080d0'},
      {name:'M. Friedman',econ:45,  social:35,  color:'#c09020'},
    ];
    leaders.forEach(l=>{
      // map: econ -100→left(M), +100→right(M+W); social: -100→top(M), +100→bottom(M+W) (comunit=top, liberal=bottom)
      const lx = CX + l.econ/100*(W/2);
      const ly = CY - l.social/100*(W/2); // negative social = comunitarista = up
      ctx.beginPath(); ctx.arc(lx,ly,6,0,Math.PI*2);
      ctx.fillStyle=l.color; ctx.fill();
      ctx.strokeStyle='rgba(255,255,255,0.6)'; ctx.lineWidth=1; ctx.stroke();
      ctx.fillStyle='rgba(255,255,255,0.85)';
      ctx.font=`${Math.round(sz*0.028)}px Sora,sans-serif`;
      ctx.textAlign='left';
      ctx.fillText(l.name, lx+8, ly+4);
    });
  }

  // User dot
  const ux = CX + econPct/100*(W/2);
  const uy = CY - socialPct/100*(W/2);
  ctx.beginPath(); ctx.arc(ux,uy,9,0,Math.PI*2);
  ctx.fillStyle='rgba(255,255,255,0.9)'; ctx.fill();
  ctx.strokeStyle='#5a8a3c'; ctx.lineWidth=3; ctx.stroke();
  ctx.beginPath(); ctx.arc(ux,uy,4,0,Math.PI*2);
  ctx.fillStyle='#5a8a3c'; ctx.fill();
}

function coordReset(){
  coordAnswers = {};
  coordCurrentQ = 0;
  const wrap = document.getElementById('test-coordenadas');
  wrap.innerHTML = '';
  coordInit();
}

// Initialize test tabs on first open
function testsSelectTab(id, btn){
  document.querySelectorAll('.test-selector-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  ['nolan','coordenadas','8valores','espectro','isidewith'].forEach(tid=>{
    const el = document.getElementById('test-'+tid);
    if(el) el.style.display = tid===id ? 'block' : 'none';
  });
  if(id==='coordenadas'){
    const wrap = document.getElementById('test-coordenadas');
    if(!wrap.innerHTML.trim()) coordInit();
  }
  if(id==='8valores'){
    const wrap = document.getElementById('test-8valores');
    if(!wrap.innerHTML.trim()) v8Init();
  }
  if(id==='espectro'){
    const wrap = document.getElementById('test-espectro');
    if(!wrap.innerHTML.trim()) espectroInit();
  }
  if(id==='isidewith'){
    const wrap = document.getElementById('test-isidewith');
    if(!wrap.innerHTML.trim()) isidewithInit();
  }
}

function nolanReset(){
  nolanAnswers = {};
  nolanCurrentQ = 0;
  nolanShowParties = false;
  document.getElementById('nolan-result').style.display = 'none';
  document.getElementById('nolan-questions-area').style.display = 'none';
  document.getElementById('nolan-final-panel').style.display = 'none';
  document.getElementById('nolan-start-panel').style.display = 'block';
  document.getElementById('nolan-bar').style.width = '0%';
  document.getElementById('nolan-progress-pct').textContent = '0%';
}


/* ══════════════════════ TEST 3: 8 VALORES JS ══════════════════════ */
const V8_QUESTIONS = [
  { texto:"El gasto militar es un desperdicio de dinero.", eje:"equality", dir:-1 },
  { texto:"La vigilancia gubernamental es necesaria en el mundo moderno.", eje:"liberty", dir:-1 },
  { texto:"El sacrificio de algunas libertades civiles es necesario para protegernos de los actos de terrorismo.", eje:"liberty", dir:-1 },
  { texto:"Es mejor mantener un presupuesto equilibrado que asegurar el bienestar de todos los ciudadanos.", eje:"equality", dir:-1 },
  { texto:"Los niños deben ser educados en valores religiosos o tradicionales.", eje:"tradition", dir:1 },
  { texto:"La sociedad era mejor hace muchos años que ahora.", eje:"tradition", dir:1 },
  { texto:"La intervención del gobierno es una amenaza para la economía.", eje:"equality", dir:-1 },
  { texto:"La herencia es una forma legítima de riqueza.", eje:"equality", dir:-1 },
  { texto:"Toda autoridad debe ser cuestionada.", eje:"liberty", dir:1 },
  { texto:"Las tradiciones no tienen valor por sí mismas.", eje:"tradition", dir:-1 },
  { texto:"Los valores de nuestra nación deben ser difundidos tanto como sea posible.", eje:"nation", dir:1 },
  { texto:"Los medios de producción deben pertenecer a los trabajadores que los utilizan.", eje:"equality", dir:1 },
  { texto:"Un mundo mejor vendrá de la automatización, la ciencia y la tecnología.", eje:"tradition", dir:-1 },
  { texto:"Las iglesias deben ser gravadas de la misma manera que otras instituciones.", eje:"tradition", dir:-1 },
  { texto:"La ayuda internacional es un desperdicio de dinero.", eje:"nation", dir:1 },
  { texto:"Perseguir el progreso a toda costa es peligroso.", eje:"tradition", dir:1 },
  { texto:"El sexo fuera del matrimonio es inmoral.", eje:"tradition", dir:1 },
  { texto:"La modificación genética es una fuerza para el bien, incluso en los humanos.", eje:"tradition", dir:-1 },
  { texto:"El consumo de drogas debe ser legalizado o despenalizado.", eje:"liberty", dir:1 },
  { texto:"Es importante que mantengamos las tradiciones de nuestro pasado.", eje:"tradition", dir:1 },
  { texto:"Los gobiernos deben rendir cuentas a la comunidad internacional.", eje:"nation", dir:-1 },
  { texto:"La investigación financiada con fondos públicos es más beneficiosa para el pueblo que dejarla en manos del mercado.", eje:"equality", dir:1 },
  { texto:"Independientemente de las opiniones políticas, es importante ponerse del lado de tu país.", eje:"nation", dir:1 },
  { texto:"La población en general toma malas decisiones.", eje:"liberty", dir:-1 },
  { texto:"Los delitos sin víctimas (como el consumo de drogas) no deberían ser delitos en absoluto.", eje:"liberty", dir:1 },
  { texto:"Los gobiernos deben preocuparse tanto por los extranjeros como por sus propios ciudadanos.", eje:"nation", dir:-1 },
  { texto:"El cambio climático es actualmente una de las mayores amenazas a nuestra forma de vida.", eje:"nation", dir:-1 },
  { texto:"Ninguna cultura es superior a las demás.", eje:"nation", dir:-1 },
  { texto:"Las regulaciones ambientales son esenciales.", eje:"equality", dir:1 },
  { texto:"Lo mejor sería que se abolieran los programas sociales en favor de la caridad privada.", eje:"equality", dir:-1 },
  { texto:"La opresión de las empresas es más preocupante que la opresión de los gobiernos.", eje:"equality", dir:1 },
  { texto:"Es importante que el gobierno siga la opinión de la mayoría, aunque esté equivocada.", eje:"liberty", dir:-1 },
  { texto:"Mis valores religiosos deben ser difundidos tanto como sea posible.", eje:"tradition", dir:1 },
  { texto:"Apoyo las uniones regionales, como la Unión Europea.", eje:"nation", dir:-1 },
  { texto:"Es necesario que el gobierno intervenga en la economía para proteger a los consumidores.", eje:"equality", dir:1 },
  { texto:"Es muy importante mantener la ley y el orden.", eje:"liberty", dir:-1 },
  { texto:"Cuanto más fuerte sea el liderazgo, mejor.", eje:"liberty", dir:-1 },
  { texto:"El aborto debería estar prohibido en la mayoría o en todos los casos.", eje:"tradition", dir:1 },
  { texto:"Deberíamos abrir nuestras fronteras a la inmigración.", eje:"nation", dir:-1 },
  { texto:"La educación de calidad es un derecho de todas las personas.", eje:"equality", dir:1 },
  { texto:"Si aceptamos a los migrantes, es importante que se asimilen a nuestra cultura.", eje:"nation", dir:1 },
  { texto:"No es necesario justificar las guerras ante otros países.", eje:"nation", dir:1 },
  { texto:"Un estado jerárquico es lo mejor.", eje:"liberty", dir:-1 },
  { texto:"La existencia misma del estado es una amenaza a nuestra libertad.", eje:"liberty", dir:1 },
  { texto:"La acción militar de nuestra nación es a menudo necesaria para protegerla.", eje:"nation", dir:1 },
  { texto:"La religión debe jugar un papel en el gobierno.", eje:"tradition", dir:1 },
  { texto:"Es más importante mantener relaciones pacíficas que aumentar nuestra fuerza.", eje:"nation", dir:-1 },
  { texto:"Mi nación es grande.", eje:"nation", dir:1 },
  { texto:"Es importante que fomentemos los objetivos de mi grupo por encima de todos los demás.", eje:"nation", dir:1 },
  { texto:"Apoyo la asistencia sanitaria universal de un solo pagador.", eje:"equality", dir:1 },
  { texto:"Es importante mantener nuestra soberanía nacional.", eje:"nation", dir:1 },
  { texto:"La democracia es más que un proceso de toma de decisiones.", eje:"liberty", dir:1 },
  { texto:"Incluso cuando se protesta contra un gobierno autoritario, la violencia no es aceptable.", eje:"liberty", dir:-1 },
  { texto:"La posesión de armas debería estar prohibida para aquellos que no tengan una razón válida.", eje:"liberty", dir:-1 },
  { texto:"La prostitución debería ser ilegal.", eje:"tradition", dir:1 },
  { texto:"El matrimonio entre personas del mismo sexo debería ser legal.", eje:"tradition", dir:-1 },
  { texto:"La razón es más importante que mantener nuestra cultura.", eje:"tradition", dir:-1 },
  { texto:"Mantener los valores familiares es esencial.", eje:"tradition", dir:1 },
  { texto:"La investigación debe realizarse a escala internacional.", eje:"nation", dir:-1 },
  { texto:"Los aranceles sobre el comercio internacional son importantes para fomentar la producción local.", eje:"nation", dir:1 },
  { texto:"Todas las personas, independientemente de factores como la cultura o la sexualidad, deben ser tratadas por igual.", eje:"equality", dir:1 },
  { texto:"Es importante que trabajemos como un mundo unido para combatir el cambio climático.", eje:"nation", dir:-1 },
  { texto:"Los impuestos deben ser incrementados en los ricos para proveer a los pobres.", eje:"equality", dir:1 },
  { texto:"Cuanto más libres sean los mercados, más libre será la gente.", eje:"equality", dir:-1 },
  { texto:"De cada uno según su capacidad, a cada uno según sus necesidades.", eje:"equality", dir:1 },
  { texto:"Un gobierno mundial unido sería beneficioso para la humanidad.", eje:"nation", dir:-1 },
  { texto:"Los servicios básicos como las carreteras y la electricidad deben ser de propiedad pública.", eje:"equality", dir:1 },
  { texto:"Es importante que pensemos a largo plazo, más allá de nuestra vida.", eje:"tradition", dir:-1 },
  { texto:"Aquellos con mayor capacidad de pago deberían recibir una mejor atención médica.", eje:"equality", dir:-1 },
  { texto:"Las Naciones Unidas deben ser abolidas.", eje:"nation", dir:1 }
];

const V8_SEG_VALUES = [-2,-1,0,1,2];
let v8Answers = {}, v8CurrentQ = 0;

const V8_AXIS_COLORS = {
  equality: {left:'#c0392b', right:'#27ae60'},
  nation:   {left:'#e67e22', right:'#2980b9'},
  liberty:  {left:'#f39c12', right:'#8e44ad'},
  tradition:{left:'#27ae60', right:'#9b59b6'}
};
const V8_AXIS_META = {
  equality: {leftLabel:'IGUALDAD', leftIcon:'⚖️', rightLabel:'MERCADOS', rightIcon:'💲', name:'económico'},
  nation:   {leftLabel:'NACIÓN',   leftIcon:'🚩', rightLabel:'MUNDO',    rightIcon:'🌐', name:'diplomático'},
  liberty:  {leftLabel:'LIBERTAD', leftIcon:'🗽', rightLabel:'AUTORIDAD',rightIcon:'🔨', name:'civil'},
  tradition:{leftLabel:'TRADICIÓN',leftIcon:'⏳', rightLabel:'PROGRESO', rightIcon:'🔬', name:'social'}
};

function v8Init(){
  const wrap = document.getElementById('test-8valores');
  if(!wrap) return;
  wrap.innerHTML = `
    <div id="v8-intro-panel" class="v8-intro">
      <h2>Test de los 8 Valores</h2>
      <p>El Test de los 8 Valores es un test desarrollado por la comunidad que busca medir el punto de vista político de una persona según ocho valores políticos centrales.</p>
      <p>Para realizar el test, indica tu nivel de acuerdo o desacuerdo con cada una de las siguientes afirmaciones.</p>
      <button class="v8-start-btn" onclick="v8Start()">COMENZAR EL TEST</button>
    </div>
    <div id="v8-question-panel" style="display:none;">
      <div class="v8-progress-bar"><div class="v8-progress-fill" id="v8-prog-fill" style="width:0%"></div></div>
      <div id="v8-q-content"></div>
    </div>
    <div id="v8-result-panel" style="display:none;"></div>
  `;
}

function v8Start(){
  v8Answers = {}; v8CurrentQ = 0;
  document.getElementById('v8-intro-panel').style.display = 'none';
  document.getElementById('v8-question-panel').style.display = 'block';
  v8ShowQ(0);
}

function v8ShowQ(idx){
  v8CurrentQ = idx;
  const total = V8_QUESTIONS.length;
  document.getElementById('v8-prog-fill').style.width = Math.round(idx/total*100)+'%';
  const q = V8_QUESTIONS[idx];
  const sel = v8Answers[idx];
  const isLast = idx === total - 1;
  document.getElementById('v8-q-content').innerHTML = `
    <div class="v8-question-wrap">
      <div class="v8-q-header">Pregunta ${idx+1} de ${total}</div>
      <div class="v8-q-divider"></div>
      <div class="v8-q-text">${q.texto}</div>
      <div class="v8-slider-wrap">
        <div class="v8-slider-labels"><span>En desacuerdo</span><span>De acuerdo</span></div>
        <div class="v8-segments" id="v8-segs-${idx}">
          ${[0,1,2,3,4].map(si=>`<div class="v8-seg${sel===si?' active':''}" onclick="v8Pick(${idx},${si})"></div>`).join('')}
        </div>
      </div>
      <div class="v8-nav-row">
        <button class="v8-btn-continue" onclick="v8Next(${idx})">${isLast?'FINALIZAR &gt;':'CONTINUAR &gt;'}</button>
        ${idx>0?`<button class="v8-btn-back" onclick="v8ShowQ(${idx-1})">ATRÁS</button>`:''}
      </div>
    </div>`;
}

function v8Pick(idx, si){
  v8Answers[idx] = si;
  document.querySelectorAll('#v8-segs-'+idx+' .v8-seg').forEach((s,i)=>s.classList.toggle('active',i===si));
  if(idx < V8_QUESTIONS.length-1) setTimeout(()=>v8Next(idx), 280);
}

function v8Next(idx){
  if(idx >= V8_QUESTIONS.length-1) v8ShowResult();
  else v8ShowQ(idx+1);
}

function v8ShowResult(){
  document.getElementById('v8-question-panel').style.display='none';
  const scores={equality:0,nation:0,liberty:0,tradition:0};
  const counts={equality:0,nation:0,liberty:0,tradition:0};
  V8_QUESTIONS.forEach((q,i)=>{
    if(v8Answers[i]===undefined) return;
    scores[q.eje] += V8_SEG_VALUES[v8Answers[i]] * q.dir;
    counts[q.eje]++;
  });
  const pcts={};
  for(const eje in scores){
    const maxP = (counts[eje]||1)*2;
    pcts[eje] = Math.max(0,Math.min(100, Math.round((scores[eje]+maxP)/(2*maxP)*100)));
  }
  const axisHTML = Object.keys(V8_AXIS_META).map(eje=>{
    const m = V8_AXIS_META[eje];
    const p = pcts[eje];
    const lp = 100-p, rp = p;
    const col = V8_AXIS_COLORS[eje];
    const label = p<50 ? `Eje ${m.name}: <strong>${m.leftLabel[0]+m.leftLabel.slice(1).toLowerCase()}</strong>` : `Eje ${m.name}: <strong>${m.rightLabel[0]+m.rightLabel.slice(1).toLowerCase()}</strong>`;
    return `<div class="v8-axis-row">
      <div class="v8-axis-title">${label}</div>
      <div class="v8-axis-bar-wrap">
        <div class="v8-axis-left" style="width:${lp}%;background:${col.left};">
          <span class="v8-axis-icon">${m.leftIcon}</span><span>${lp}%</span>
          <span style="font-size:10px;opacity:.8;">${m.leftLabel}</span>
        </div>
        <div class="v8-axis-right" style="width:${rp}%;background:${col.right};">
          <span>${rp}%</span><span class="v8-axis-icon">${m.rightIcon}</span>
          <span style="font-size:10px;opacity:.8;">${m.rightLabel}</span>
        </div>
      </div></div>`;
  }).join('');
  const ideo = v8Ideology(pcts);
  const panel = document.getElementById('v8-result-panel');
  panel.innerHTML = `
    <div>
      <div class="v8-result-title">Test de 8 valores políticos</div>
      <div style="font-size:13px;color:var(--text3);margin-bottom:20px;font-style:italic;">Resultados:</div>
      <div class="v8-axes-list">${axisHTML}</div>
      <div class="v8-ideology-card"><h3>Tu resultado: ${ideo.title}</h3><p>${ideo.desc}</p></div>
      <div class="v8-exp-section">
        <h4>Eje económico: Igualdad vs. Mercados</h4>
        <div class="v8-exp-card" style="background:rgba(192,57,43,.13)"><h5 style="color:#c0392b">Igualdad</h5><p style="font-size:12px;color:var(--text2);line-height:1.7;margin:0">Aquellos con mayor puntuación de igualdad creen que la economía debería distribuir el valor de manera uniforme entre la ciudadanía. Tienden a apoyar los códigos de impuestos progresivos, programas sociales y el socialismo.</p></div>
        <div class="v8-exp-card" style="background:rgba(39,174,96,.13)"><h5 style="color:#27ae60">Mercados</h5><p style="font-size:12px;color:var(--text2);line-height:1.7;margin:0">Aquellos con mayor puntuación en el mercado creen que la economía debería centrarse en el crecimiento rápido. Tienden a apoyar la reducción de impuestos, la privatización, la desregulación y el capitalismo libre.</p></div>
      </div>
      <div class="v8-exp-section">
        <h4>Eje diplomático: Nación vs. Mundo</h4>
        <div class="v8-exp-card" style="background:rgba(230,126,34,.13)"><h5 style="color:#e67e22">Nación</h5><p style="font-size:12px;color:var(--text2);line-height:1.7;margin:0">Aquellos con mayor puntuación de la Nación son patriotas y nacionalistas. A menudo creen en una política exterior agresiva, valorando lo militar, la fuerza, la soberanía y el dominio geopolítico.</p></div>
        <div class="v8-exp-card" style="background:rgba(41,128,185,.13)"><h5 style="color:#2980b9">Mundo</h5><p style="font-size:12px;color:var(--text2);line-height:1.7;margin:0">Aquellos con mayores puntuaciones en el Mundo son cosmopolitas y globalistas. A menudo creen en una política exterior pacífica, haciendo hincapié en la diplomacia, la cooperación, la integración y en un gobierno mundial.</p></div>
      </div>
      <div class="v8-exp-section">
        <h4>Eje civil: Libertad vs. Autoridad</h4>
        <div class="v8-exp-card" style="background:rgba(241,196,15,.13)"><h5 style="color:#d4ac0d">Libertad</h5><p style="font-size:12px;color:var(--text2);line-height:1.7;margin:0">Aquellos con mayor puntuación de Libertad quieren grandes libertades civiles. Tienden a apoyar la democracia y a oponerse a la intervención del estado en la vida personal.</p></div>
        <div class="v8-exp-card" style="background:rgba(142,68,173,.13)"><h5 style="color:#8e44ad">Autoridad</h5><p style="font-size:12px;color:var(--text2);line-height:1.7;margin:0">Aquellos con mayor puntuación de la Autoridad quieren un poder estatal fuerte. Tienden a apoyar la intervención del estado en la vida personal, la vigilancia del gobierno y la censura o la autocracia.</p></div>
      </div>
      <div class="v8-exp-section">
        <h4>Eje social: Tradición vs. Progreso</h4>
        <div class="v8-exp-card" style="background:rgba(39,174,96,.13)"><h5 style="color:#27ae60">Tradición</h5><p style="font-size:12px;color:var(--text2);line-height:1.7;margin:0">Aquellos con mayor puntuación en Tradición creen en los valores tradicionales y en la estricta adherencia a un código moral tradicional. Muchos también son religiosos y ven la edad de oro en el pasado.</p></div>
        <div class="v8-exp-card" style="background:rgba(155,89,182,.13)"><h5 style="color:#9b59b6">Progreso</h5><p style="font-size:12px;color:var(--text2);line-height:1.7;margin:0">Aquellos con mayor puntuación de Progreso creen en el cambio social y en la alteración de las normas tradicionales. Muchos también son ateos y ven la edad de oro en el futuro.</p></div>
      </div>
      <button class="v8-retry-btn" onclick="v8Reset()">↩ Volver a hacer el test</button>
    </div>`;
  panel.style.display='block';
  setTimeout(()=>panel.scrollIntoView({behavior:'smooth',block:'start'}),100);
}

function v8Ideology(pcts){
  const eq = pcts.equality>=50?'m':'i';
  const na = pcts.nation>=50?'n':'w';
  const li = pcts.liberty>=50?'l':'a';
  const tr = pcts.tradition>=50?'p':'t';
  const map = {
    'imlt':{ title:'Socialista Libertario', desc:'Combinas igualdad económica con amplias libertades civiles y visión progresista. Tu posición recuerda al socialismo libertario o anarco-comunismo.' },
    'imat':{ title:'Comunista Autoritario', desc:'Defiendes una economía colectiva gestionada por un Estado fuerte con valores tradicionales. Posición cercana al comunismo de Estado.' },
    'imlp':{ title:'Socialista Progresista', desc:'Combinas igualdad económica, libertades civiles y valores progresistas. Tu perfil se acerca a la izquierda libertaria moderna.' },
    'imap':{ title:'Progresista Autoritario', desc:'Buscas igualdad y progreso social mediante un Estado fuerte. Posición cercana al socialismo de Estado progresista.' },
    'imnt':{ title:'Socialdemócrata', desc:'Combinas igualdad económica con respeto a las tradiciones y cierto orden. Tu posición es cercana a la socialdemocracia clásica.' },
    'imnp':{ title:'Izquierda Globalista', desc:'Defiendes la igualdad, el internacionalismo y el progreso social. Posición cercana a la izquierda cosmopolita.' },
    'imat':{ title:'Izquierda Autoritaria', desc:'Defiendes la igualdad económica con un Estado fuerte. Posición cercana al socialismo autoritario.' },
    'mmlp':{ title:'Libertario de Derecha', desc:'Apoyas el libre mercado con mínima intervención estatal y valores progresistas. Tu posición se acerca al libertarismo.' },
    'mmlt':{ title:'Liberal Conservador', desc:'Apoyas el libre mercado, libertades individuales y valores tradicionales. Posición afín al liberalismo conservador clásico.' },
    'mmat':{ title:'Conservador Autoritario', desc:'Defiendes el libre mercado con un Estado fuerte que mantenga el orden y los valores tradicionales. Posición afín al nacional-conservadurismo.' },
    'mmap':{ title:'Tecnócrata', desc:'Combinas fe en el mercado con un Estado fuerte y visión progresista. Perfil similar al neoconservadurismo moderno.' },
    'mmnt':{ title:'Conservador Nacionalista', desc:'Apoyas la economía de mercado, el nacionalismo y los valores tradicionales. Posición cercana al conservadurismo nacional.' },
    'mmnp':{ title:'Neoliberal Globalista', desc:'Defiendes el libre mercado, el internacionalismo y el progreso social. Posición cercana al neoliberalismo cosmopolita.' },
  };
  const key = eq+na[0]+li+tr;
  return map[key] || { title:'Centrista', desc:'Tus posiciones están equilibradas entre los distintos ejes. Eres pragmático y no te identificas fuertemente con ningún extremo del espectro político.' };
}

function v8Reset(){
  v8Answers={}; v8CurrentQ=0;
  const wrap = document.getElementById('test-8valores');
  wrap.innerHTML='';
  v8Init();
}

/* ══════════════════════ TEST 4: ESPECTRO POLÍTICO JS ══════════════════════ */
const ESPECTRO_CATEGORIES = [
  {
    id:'autoridad', title:'1. Autoridad política',
    opciones:[
      { texto:'El buen funcionamiento de una comunidad política requiere autoridades fuertes capaces de garantizar el orden y la estabilidad social.', ejes:{pol:1} },
      { texto:'Ninguna autoridad política es legítima por sí misma; las relaciones sociales deberían organizarse mediante la libre asociación y el apoyo mutuo.', ejes:{pol:-1} },
      { texto:'La autoridad política es legítima cuando se encuentra limitada por instituciones, controles democráticos y mecanismos de representación.', ejes:{pol:0} }
    ]
  },
  {
    id:'accion', title:'2. Acción política',
    opciones:[
      { texto:'En determinadas circunstancias, el uso de la fuerza puede considerarse un medio legítimo para alcanzar objetivos políticos.', ejes:{pol:1} },
      { texto:'La acción política debería organizarse principalmente mediante iniciativas descentralizadas, resistencia civil y acción directa no institucional.', ejes:{pol:-1} },
      { texto:'La acción política debe desarrollarse dentro del marco institucional, a través del diálogo, la deliberación y los mecanismos democráticos.', ejes:{pol:0} }
    ]
  },
  {
    id:'cambio', title:'3. Cambio social',
    opciones:[
      { texto:'El Estado debería desempeñar un rol activo en orientar el cambio social, promoviendo o limitando transformaciones culturales.', ejes:{pol:1,soc:0} },
      { texto:'El cambio social debería surgir de procesos espontáneos a nivel individual y comunitario.', ejes:{pol:-1,soc:-1} },
      { texto:'El Estado puede influir en ciertos cambios sociales, siempre que estos se encuentren respaldados por procesos y consensos democráticos.', ejes:{pol:0,soc:0} }
    ]
  },
  {
    id:'derecho', title:'4. Derecho y justicia',
    opciones:[
      { texto:'Solo existen normas creadas por el hombre y mediadas por el Estado.', ejes:{pol:1} },
      { texto:'Una ley injusta carece de legitimidad moral y puede ser legítimamente desobedecida.', ejes:{pol:-1} },
      { texto:'Las normas jurídicas se legitiman por medio de la democracia. Solo el diálogo y el consenso tienen un carácter dirimente para resolver las controversias de una sociedad cada vez más plural.', ejes:{pol:0} }
    ]
  },
  {
    id:'seguridad', title:'5. Seguridad',
    opciones:[
      { texto:'La expansión de sistemas de vigilancia es una herramienta legítima para combatir el crimen y preservar el orden.', ejes:{pol:1} },
      { texto:'La vigilancia masiva de la población constituye una violación inaceptable de la privacidad.', ejes:{pol:-1} },
      { texto:'La vigilancia estatal solo es admisible bajo límites legales estrictos y control judicial.', ejes:{pol:0} }
    ]
  },
  {
    id:'inmigracion', title:'6. Inmigración',
    opciones:[
      { texto:'La inmigración debería limitarse estrictamente y supeditarse a criterios de integración cultural y estabilidad social.', ejes:{pol:1,soc:1} },
      { texto:'La libre circulación es una exigencia de justicia que no debe supeditarse a fronteras arbitrarias.', ejes:{pol:-1,soc:-1} },
      { texto:'La inmigración es valiosa en términos humanos, pero requiere marcos institucionales que permitan una integración ordenada y sostenible.', ejes:{pol:0,soc:0} }
    ]
  },
  {
    id:'militar', title:'7. Servicio militar',
    opciones:[
      { texto:'El servicio militar obligatorio fortalece la cohesión social y la capacidad defensiva de la nación.', ejes:{pol:1,soc:1} },
      { texto:'La defensa nacional no debería implicar servicio militar; la seguridad debe basarse en mecanismos civiles y no coercitivos.', ejes:{pol:-1} },
      { texto:'El servicio militar debe ser voluntario, permitiendo contar con fuerzas profesionales sin imponer la conscripción.', ejes:{pol:0} }
    ]
  },
  {
    id:'expresion', title:'8. Libertad de expresión',
    opciones:[
      { texto:'Ninguna autoridad tiene legitimidad para restringir la expresión. La libertad de comunicar es un derecho absoluto.', ejes:{pol:-1,soc:-1} },
      { texto:'El Estado debe regular el discurso público para prevenir la desinformación y proteger la cohesión social frente a mensajes nocivos.', ejes:{pol:1,soc:0} },
      { texto:'La libertad de expresión es fundamental, pero conlleva responsabilidades legales orientadas a proteger la convivencia y los derechos de terceros.', ejes:{pol:0,soc:0} }
    ]
  },
  {
    id:'religion_lib', title:'9. Libertad religiosa',
    opciones:[
      { texto:'El Estado debería promover activamente una cosmovisión o tradición religiosa considerada fundante de la identidad social.', ejes:{pol:1,soc:1} },
      { texto:'El Estado debe mantenerse neutral frente a confesiones religiosas y no promover valores morales particulares.', ejes:{pol:-1,soc:-1} },
      { texto:'El Estado debe garantizar la libertad de culto, aunque puede reconocer una tradición religiosa mayoritaria.', ejes:{pol:0,soc:0} }
    ]
  },
  {
    id:'educacion', title:'10. Educación',
    opciones:[
      { texto:'El Estado debe establecer y supervisar los contenidos educativos en todos los niveles.', ejes:{pol:1,eco:0} },
      { texto:'La educación corresponde primariamente a las familias y comunidades; la intervención estatal debería ser mínima.', ejes:{pol:-1,eco:1} },
      { texto:'Debe existir libertad y diversidad institucional, pero con estándares comunes y control acotado para evitar abusos.', ejes:{pol:0,eco:0} }
    ]
  },
  {
    id:'produccion', title:'11. Modos de producción',
    opciones:[
      { texto:'La propiedad privada y la libre empresa son la base legítima del desarrollo económico.', ejes:{eco:1} },
      { texto:'El modo de producción capitalista debe ser superado mediante una organización económica colectiva.', ejes:{eco:-1} },
      { texto:'Es posible articular mecanismos de mercado con regulación e intervención estatal.', ejes:{eco:0} }
    ]
  },
  {
    id:'mercado', title:'12. Mercado',
    opciones:[
      { texto:'La asignación de recursos debe determinarse exclusivamente mediante el libre mercado.', ejes:{eco:1} },
      { texto:'La asignación de recursos debe estar subordinada a la planificación de la economía.', ejes:{eco:-1} },
      { texto:'La asignación de recursos debe basarse en el mercado, pero con regulaciones estatales para corregir fallas.', ejes:{eco:0} }
    ]
  },
  {
    id:'moneda', title:'13. Dinero y moneda',
    opciones:[
      { texto:'Debe existir competencia entre monedas, sin monopolio estatal ni curso forzoso.', ejes:{eco:1} },
      { texto:'El sistema monetario debe estar subordinado a la planificación estatal para dirigir la inversión y el consumo.', ejes:{eco:-1} },
      { texto:'El Estado debe gestionar una moneda nacional estable mediante reglas orientadas a la estabilidad.', ejes:{eco:0} }
    ]
  },
  {
    id:'impuestos', title:'14. Impuestos',
    opciones:[
      { texto:'Los impuestos deben eliminarse o reducirse al mínimo posible.', ejes:{eco:1} },
      { texto:'Los impuestos deben ser un instrumento central para redistribuir la riqueza y reorganizar la economía.', ejes:{eco:-1} },
      { texto:'Los impuestos deben ser suficientes para financiar servicios públicos y garantizar la estabilidad del Estado.', ejes:{eco:0} }
    ]
  },
  {
    id:'bancos', title:'15. Bancos',
    opciones:[
      { texto:'Debe eliminarse toda intervención estatal sobre el dinero y el crédito, permitiendo la banca libre y privada.', ejes:{eco:1} },
      { texto:'El crédito debe ser un monopolio público, con la banca centralizada en manos del Estado.', ejes:{eco:-1} },
      { texto:'El Estado debe regular la banca privada y el crédito a través de un Banco Central para asegurar la estabilidad monetaria.', ejes:{eco:0} }
    ]
  },
  {
    id:'comercio', title:'16. Comercio exterior',
    opciones:[
      { texto:'El comercio exterior debe ser totalmente libre; los aranceles y las barreras estatales deben eliminarse por completo.', ejes:{eco:1} },
      { texto:'El comercio debe subordinarse a la soberanía económica, priorizando la autosuficiencia y la planificación nacional.', ejes:{eco:-1} },
      { texto:'El libre comercio es beneficioso, pero el Estado debe aplicar regulaciones o aranceles estratégicos para proteger la industria nacional.', ejes:{eco:0} }
    ]
  },
  {
    id:'salarios', title:'17. Salarios',
    opciones:[
      { texto:'Los salarios deben determinarse libremente por el mercado; la única forma legítima de aumentarlos es mediante el incremento de la productividad.', ejes:{eco:1} },
      { texto:'El sistema salarial debe superarse para distribuir la riqueza según las necesidades y no según las leyes del mercado.', ejes:{eco:-1} },
      { texto:'Los salarios se forman en el mercado, pero el Estado debe garantizar un salario mínimo.', ejes:{eco:0} }
    ]
  },
  {
    id:'precios', title:'18. Precios',
    opciones:[
      { texto:'El sistema de precios no debe intervenirse; son señales de información esenciales que solo el mercado libre puede procesar de forma eficiente.', ejes:{eco:1} },
      { texto:'Los precios deben ser fijados por una planificación centralizada para equilibrar oferta y demanda.', ejes:{eco:-1} },
      { texto:'Los precios deben formarse en el mercado, pero el Estado debe regularlos o fijar topes para asegurar el acceso a bienes y servicios básicos.', ejes:{eco:0} }
    ]
  },
  {
    id:'seguridad_soc', title:'19. Seguridad social',
    opciones:[
      { texto:'La previsión y los servicios sociales deben quedar en manos de la libre competencia, permitiendo que cada individuo gestione su propia seguridad.', ejes:{eco:1} },
      { texto:'La seguridad social debe ser estatal, universal y gratuita, financiada mediante una amplia redistribución de la riqueza.', ejes:{eco:-1} },
      { texto:'Debe existir un sistema público de seguridad social complementado por esquemas privados.', ejes:{eco:0} }
    ]
  },
  {
    id:'recursos_nat', title:'20. Recursos naturales',
    opciones:[
      { texto:'Los derechos de propiedad exclusiva sobre los recursos naturales garantizan una gestión más eficiente de los mismos.', ejes:{eco:1} },
      { texto:'Los recursos naturales deben ser de propiedad colectiva y no estar sujetos a apropiación privada.', ejes:{eco:-1} },
      { texto:'Los recursos naturales deben ser gestionados por el Estado o las comunidades para asegurar su uso sostenible.', ejes:{eco:0} }
    ]
  },
  {
    id:'moral', title:'21. Filosofía moral',
    opciones:[
      { texto:'Existen principios morales objetivos y universales fundados en la naturaleza humana.', ejes:{soc:1} },
      { texto:'No existen verdades morales objetivas; los valores dependen del contexto histórico y cultural.', ejes:{soc:-1} },
      { texto:'La moral debe basarse en la evaluación práctica de nuestras acciones, como reducir el sufrimiento o promover el bienestar general.', ejes:{soc:0} }
    ]
  },
  {
    id:'identidad', title:'22. Identidad humana',
    opciones:[
      { texto:'Existe una naturaleza humana y esta puede perfeccionarse orientando la inteligencia y la voluntad hacia su fin último.', ejes:{soc:1} },
      { texto:'No existe una naturaleza humana dada; el ser humano es un proyecto abierto que se construye mediante su propia autodeterminación.', ejes:{soc:-1} },
      { texto:'La naturaleza humana es simplemente el resultado de la evolución biológica y de las interacciones sociales, sin fines trascendentes.', ejes:{soc:0} }
    ]
  },
  {
    id:'tradicion', title:'23. Tradición',
    opciones:[
      { texto:'Debemos resguardar los valores, hábitos y costumbres heredados que constituyen el fundamento de nuestra identidad.', ejes:{soc:1} },
      { texto:'La tradición es una estructura de poder que suele perpetuar injusticias y debe ser transformada para alcanzar el progreso social.', ejes:{soc:-1} },
      { texto:'La tradición tiene un valor cultural histórico, pero no debe poseer autoridad normativa sobre las leyes o la libertad individual.', ejes:{soc:0} }
    ]
  },
  {
    id:'religion', title:'24. Religión',
    opciones:[
      { texto:'La religión es una dimensión constitutiva del ser humano y una fuente esencial de valores morales para la cohesión social.', ejes:{soc:1} },
      { texto:'La religión es una construcción histórica que ha limitado el progreso científico y social.', ejes:{soc:-1} },
      { texto:'La religión pertenece estrictamente al ámbito privado; el Estado debe ser laico y neutral frente a todas las creencias.', ejes:{soc:0} }
    ]
  },
  {
    id:'igualdad', title:'25. Igualitarismo',
    opciones:[
      { texto:'La desigualdad es un hecho natural; el igualitarismo desconoce la diversidad y las diferencias propias de la naturaleza humana.', ejes:{soc:1,eco:1} },
      { texto:'Las desigualdades son producto de circunstancias sociales y es posible y deseable eliminarlas.', ejes:{soc:-1,eco:-1} },
      { texto:'La igualdad reside en la dignidad y los derechos individuales, permitiendo que las diferencias se expresen según el esfuerzo de cada uno.', ejes:{soc:0,eco:0} }
    ]
  },
  {
    id:'familia', title:'26. Familia',
    opciones:[
      { texto:'La familia es la unidad natural y fundamental de la sociedad; una institución previa al Estado que debe ser reconocida como el núcleo de la arquitectura social.', ejes:{soc:1} },
      { texto:'La familia tradicional es una construcción histórica que suele perpetuar estructuras de dominio y debe evolucionar hacia formas de convivencia más libres y diversas.', ejes:{soc:-1} },
      { texto:'La familia es una asociación basada en la voluntad individual; cualquier vínculo afectivo de cuidado y compromiso mutuo posee la misma validez.', ejes:{soc:0} }
    ]
  },
  {
    id:'feminismo', title:'27. Feminismo',
    opciones:[
      { texto:'El feminismo ha desestabilizado la armonía social al negar la complementariedad natural entre los sexos y los roles que dan orden a la comunidad y a la familia.', ejes:{soc:1} },
      { texto:'El feminismo es una herramienta necesaria de emancipación frente a un orden patriarcal que debe ser deconstruido para alcanzar la verdadera igualdad sustantiva.', ejes:{soc:-1} },
      { texto:'El feminismo es legítimo únicamente como búsqueda de igualdad ante la ley y libertad individual, sin que deba aspirar a transformar la cultura o colectivizar la identidad.', ejes:{soc:0} }
    ]
  },
  {
    id:'lgbt', title:'28. Movimiento LGBT+',
    opciones:[
      { texto:'La sexualidad tiene un orden natural orientado al matrimonio y la procreación; las conductas que se apartan de este fin son desordenadas y no deben ser normalizadas socialmente.', ejes:{soc:1} },
      { texto:'La identidad sexual es una diversidad de vivencias internas que deben ser protegidas frente a los prejuicios y la discriminación de la heteronormatividad.', ejes:{soc:-1} },
      { texto:'La inclinación sexual es una preferencia privada y subjetiva que carece de relevancia moral; no debería ser motivo de juicio ni de bandera de identidad colectiva.', ejes:{soc:0} }
    ]
  },
  {
    id:'trans', title:'29. Transhumanismo',
    opciones:[
      { texto:'La naturaleza humana tiene límites que deben respetarse; la biotecnología debe curar, pero no rediseñar nuestra biología ni nuestra esencia.', ejes:{soc:1} },
      { texto:'La biología humana es un límite que puede ser superado; debemos usar la tecnología para trascender nuestras limitaciones biológicas, eliminando el sufrimiento, el envejecimiento y la muerte.', ejes:{soc:-1} },
      { texto:'La transformación tecnológica del cuerpo es una elección subjetiva; cada individuo debe tener la libertad de decidir si desea mejorar o modificar su biología según su propia voluntad.', ejes:{soc:0} }
    ]
  },
  {
    id:'ecologia', title:'30. Animalismo - Ecologismo',
    opciones:[
      { texto:'El ser humano posee una dignidad superior que le otorga el derecho de disponer de la naturaleza. Debemos rechazar la sacralización de la naturaleza, pues suele derivar en una visión misántropa.', ejes:{soc:1} },
      { texto:'La naturaleza y los animales poseen derechos propios e intrínsecos; debemos superar el antropocentrismo que justifica la explotación del planeta y de los seres sintientes.', ejes:{soc:-1} },
      { texto:'La preservación del medio ambiente es una prioridad técnica y racional, no por un valor moral de la naturaleza, sino como condición necesaria para el bienestar y la salud humana.', ejes:{soc:0} }
    ]
  }
];

let espectroAnswers = {};
let espectroCurrentCat = 0;

function espectroInit(){
  espectroAnswers = {};
  espectroCurrentCat = 0;
  const wrap = document.getElementById('test-espectro');
  wrap.innerHTML = `
    <div style="max-width:860px;margin:0 auto;">
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:24px;margin-bottom:20px;">
        <h2 style="font-size:20px;font-weight:800;color:var(--text);margin:0 0 8px;">🧭 Test Espectro Político</h2>
        <p style="color:var(--text2);font-size:13px;line-height:1.7;margin:0 0 8px;">En el sistema del «Nuevo Espectro Político» se proponen tres ejes conceptuales para describir grandes tendencias en el ámbito político, económico y cultural.</p>
        <p style="color:var(--text2);font-size:13px;line-height:1.7;margin:0 0 8px;">La combinación de estos ejes permite delinear un conjunto de posiciones posibles, entre las cuales usted podrá orientarse mediante este test.</p>
        <p style="color:var(--text2);font-size:13px;line-height:1.7;margin:0;">El objetivo no es ofrecer una clasificación definitiva ni exhaustiva, sino brindar una herramienta didáctica que facilite la reflexión personal sobre ciertas disposiciones, intuiciones y preferencias generales.</p>
      </div>
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:24px;">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
          <div id="esp-cat-title" style="font-size:13px;font-weight:700;color:#c9a227;background:rgba(201,162,39,.12);padding:6px 12px;border-radius:6px;"></div>
          <div style="font-size:11px;color:var(--text3);" id="esp-progress-txt"></div>
        </div>
        <div style="background:var(--bg4);border-radius:4px;height:6px;margin-bottom:20px;">
          <div id="esp-bar" style="height:6px;border-radius:4px;background:linear-gradient(90deg,#c9a227,#e8c547);transition:width .3s;" ></div>
        </div>
        <div id="esp-questions-container"></div>
        <div id="esp-result" style="display:none;"></div>
      </div>
    </div>
  `;
  espectroRenderCat(0);
}

function espectroRenderCat(idx){
  if(idx >= ESPECTRO_CATEGORIES.length){ espectroShowResult(); return; }
  const cat = ESPECTRO_CATEGORIES[idx];
  const pct = Math.round((idx/ESPECTRO_CATEGORIES.length)*100);
  document.getElementById('esp-bar').style.width = pct+'%';
  document.getElementById('esp-progress-txt').textContent = (idx+1)+' / '+ESPECTRO_CATEGORIES.length;
  document.getElementById('esp-cat-title').textContent = cat.title;
  const prev = espectroAnswers[cat.id];
  let html = '<div style="display:flex;flex-direction:column;gap:10px;">';
  cat.opciones.forEach((op,i)=>{
    const sel = prev===i ? 'border-color:var(--accent);background:rgba(79,142,247,.10);' : '';
    html += `<div class="esp-option" data-cat="${cat.id}" data-idx="${i}" data-catnum="${idx}" style="padding:14px 16px;border:1.5px solid var(--border);border-radius:10px;cursor:pointer;font-size:13px;color:var(--text2);line-height:1.6;transition:all .18s;${sel}" onclick="espectroSelect('${cat.id}',${i},${idx},this)">${op.texto}</div>`;
  });
  html += '</div>';
  if(idx > 0) html += `<button onclick="espectroBack()" style="margin-top:14px;padding:7px 16px;background:var(--bg4);border:1px solid var(--border);border-radius:7px;color:var(--text2);font-size:12px;cursor:pointer;">← Anterior</button>`;
  document.getElementById('esp-questions-container').innerHTML = html;
}

function espectroSelect(catId, optIdx, catNum, el){
  espectroAnswers[catId] = optIdx;
  document.querySelectorAll('.esp-option').forEach(e=>{
    e.style.borderColor='var(--border)';
    e.style.background='';
  });
  el.style.borderColor='var(--accent)';
  el.style.background='rgba(79,142,247,.10)';
  setTimeout(()=>{ espectroRenderCat(catNum+1); }, 320);
}

function espectroBack(){
  if(espectroCurrentCat > 0) espectroCurrentCat--;
  espectroRenderCat(Object.keys(espectroAnswers).length > 0 ? Math.max(0, Object.keys(espectroAnswers).length-1) : 0);
}

function espectroShowResult(){
  document.getElementById('esp-bar').style.width='100%';
  document.getElementById('esp-progress-txt').textContent='Completado';
  document.getElementById('esp-questions-container').innerHTML='';

  // Compute scores for 3 axes: pol (político), eco (económico), soc (social/cultural)
  let scores = {pol:[], eco:[], soc:[]};
  ESPECTRO_CATEGORIES.forEach(cat=>{
    const ans = espectroAnswers[cat.id];
    if(ans === undefined) return;
    const op = cat.opciones[ans];
    Object.entries(op.ejes).forEach(([eje,val])=>{
      if(scores[eje]) scores[eje].push(val);
    });
  });

  function avg(arr){ return arr.length ? arr.reduce((a,b)=>a+b,0)/arr.length : 0; }
  const polScore = avg(scores.pol); // -1=acracia, 0=centro, 1=autoritarismo
  const ecoScore = avg(scores.eco); // -1=intervencionismo, 0=centro, 1=libre mercado
  const socScore = avg(scores.soc); // -1=progresismo, 0=centro, 1=conservadurismo

  // Normalize to 0–100
  const polPct = Math.round((polScore+1)/2*100);
  const ecoPct = Math.round((ecoScore+1)/2*100);
  const socPct = Math.round((socScore+1)/2*100);

  const ideology = espectroGetIdeology(polScore, ecoScore, socScore);

  const resultDiv = document.getElementById('esp-result');
  resultDiv.style.display='block';
  resultDiv.innerHTML = `
    <div style="text-align:center;margin-bottom:24px;">
      <div style="display:inline-block;background:#c9a227;color:#fff;font-weight:800;font-size:16px;padding:10px 32px;border-radius:8px;letter-spacing:1px;margin-bottom:16px;">RESULTADO</div>
      <div style="font-size:18px;font-weight:800;color:var(--text);margin-bottom:4px;">Tu compás político es:</div>
      <div style="font-size:26px;font-weight:800;color:#c9a227;margin-bottom:8px;">${ideology.title}</div>
      <div style="font-size:13px;color:var(--text2);max-width:600px;margin:0 auto 20px;">${ideology.desc}</div>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px;margin-bottom:24px;">
      ${espectroAxisCard('Eje Político','Autoritarismo','Acracia',polPct,'#4f8ef7')}
      ${espectroAxisCard('Eje Económico','Libre mercado','Intervencionismo',ecoPct,'#e8884f')}
      ${espectroAxisCard('Eje Social','Conservadurismo','Progresismo',socPct,'#5db87a')}
    </div>

    <div style="background:var(--bg3);border:1px solid var(--border);border-radius:10px;padding:16px;margin-bottom:20px;">
      <h3 style="font-size:13px;font-weight:700;color:var(--text);margin:0 0 12px;">Descripción de los ejes</h3>
      <p style="font-size:12px;color:var(--text2);margin:0 0 6px;"><strong style="color:#4f8ef7;">Eje Político:</strong> Mide la posición respecto a la autoridad política, de la acracia (sin autoridad) al autoritarismo (autoridad fuerte).</p>
      <p style="font-size:12px;color:var(--text2);margin:0 0 6px;"><strong style="color:#e8884f;">Eje Económico:</strong> Mide la preferencia económica, del intervencionismo estatal al libre mercado.</p>
      <p style="font-size:12px;color:var(--text2);margin:0;"><strong style="color:#5db87a;">Eje Social:</strong> Mide la orientación cultural, del progresismo al conservadurismo.</p>
    </div>

    <div style="text-align:center;margin-top:8px;">
      <button onclick="espectroReset()" style="padding:10px 28px;background:#c9a227;color:#fff;border:none;border-radius:8px;font-weight:700;font-size:13px;cursor:pointer;letter-spacing:.5px;">↩ Repetir el test</button>
    </div>
  `;
}

function espectroAxisCard(title, labelRight, labelLeft, pct, color){
  return `
    <div style="background:var(--bg3);border:1px solid var(--border);border-radius:10px;padding:14px;">
      <div style="font-size:11px;font-weight:700;color:${color};margin-bottom:10px;">${title}</div>
      <div style="background:var(--bg4);border-radius:4px;height:8px;margin-bottom:6px;position:relative;">
        <div style="position:absolute;left:${pct}%;top:-3px;width:14px;height:14px;border-radius:50%;background:${color};transform:translateX(-50%);border:2px solid var(--surface);"></div>
        <div style="height:8px;border-radius:4px;background:${color};width:${pct}%;"></div>
      </div>
      <div style="display:flex;justify-content:space-between;font-size:10px;color:var(--text3);">
        <span>${labelLeft}</span><span>${labelRight}</span>
      </div>
    </div>
  `;
}

function espectroGetIdeology(pol, eco, soc){
  // pol: -1=acracia, 0=democracia, 1=autoritarismo
  // eco: -1=intervención, 0=mixto, 1=libre mercado
  // soc: -1=progresismo, 0=moderado, 1=conservadurismo
  const polTag = pol < -0.2 ? 'A' : pol > 0.2 ? 'U' : 'D'; // Acracia / aUtoritarismo / Democracia
  const ecoTag = eco < -0.2 ? 'I' : eco > 0.2 ? 'M' : 'X'; // Intervención / Mercado / miXto
  const socTag = soc < -0.2 ? 'P' : soc > 0.2 ? 'C' : 'N'; // Progresismo / Conservadurismo / Neutral

  const map = {
    'AIP': { title:'Anarco-comunismo', desc:'Rechazas toda autoridad política, defiendes la planificación colectiva de la economía y el progreso social. Tu posición se enmarca en el anarco-comunismo o el anarquismo de izquierda.' },
    'AIC': { title:'Nacional bolchevismo (acrático)', desc:'Rechazas la autoridad formal pero defiendes la economía colectiva y los valores tradicionales. Posición heterodoxa próxima al nacionalismo de izquierda radical.' },
    'AIN': { title:'Posanarquismo', desc:'Rechazas la autoridad política, prefieres la economía colectiva y tienes una posición cultural moderada. Posición próxima al posanarquismo.' },
    'AMP': { title:'Izquierda libertaria', desc:'Rechazas la autoridad, apoyas el libre mercado y el progreso social. Posición afín al anarco-capitalismo de izquierda o al libertarismo progresista.' },
    'AMC': { title:'Anarco-capitalismo conservador', desc:'Rechazas toda autoridad estatal, apoyas el libre mercado y los valores tradicionales. Posición radical del liberalismo libertario conservador.' },
    'AMN': { title:'Libertarismo', desc:'Rechazas la autoridad, apoyas el libre mercado y tienes posición cultural moderada. Posición clásica del libertarismo o anarco-capitalismo.' },
    'AXP': { title:'Luxemburgismo', desc:'Rechazas la autoridad, prefieres una economía mixta y valores progresistas. Posición próxima al socialismo libertario moderado.' },
    'AXC': { title:'Anarquismo cristiano', desc:'Rechazas la autoridad política, prefieres una economía mixta y valores conservadores. Posición heterodoxa próxima al anarquismo cristiano o comunitarismo.' },
    'AXN': { title:'Mutualismo', desc:'Rechazas la autoridad, prefieres un mercado regulado y posición cultural neutra. Posición próxima al mutualismo o anarquismo de mercado.' },
    'UIP': { title:'Comunismo progresista', desc:'Apoyas un Estado fuerte, la planificación económica y el progreso social. Posición próxima al comunismo posmarxista o socialismo autoritario progresista.' },
    'UIC': { title:'Nacional bolchevismo', desc:'Apoyas un Estado fuerte, la economía colectiva y los valores tradicionales. Posición afín al nacional-bolchevismo o fascismo de izquierda.' },
    'UIN': { title:'Marxismo-leninismo', desc:'Apoyas un Estado fuerte con planificación económica y posición cultural moderada. Posición clásica del marxismo-leninismo o socialismo de Estado.' },
    'UMP': { title:'Tecnocracia progresista', desc:'Apoyas un Estado fuerte, el libre mercado y el progreso social. Posición próxima a la tecnocracia de mercado o neoliberalismo autoritario.' },
    'UMC': { title:'Neorreacción (NRx)', desc:'Apoyas un Estado fuerte, el libre mercado y los valores conservadores. Posición próxima al neorreaccionismo o paleo-libertarismo autoritario.' },
    'UMN': { title:'Capitalismo iliberal', desc:'Apoyas un Estado fuerte con libre mercado y posición cultural moderada. Posición afín al capitalismo iliberal o autoritarismo de mercado.' },
    'UXP': { title:'Tecnocracia progresista moderada', desc:'Apoyas un Estado fuerte, economía mixta y valores progresistas. Posición próxima al progresismo autoritario o social-autoritarismo.' },
    'UXC': { title:'Fascismo clerical', desc:'Apoyas un Estado fuerte, economía mixta y valores conservadores-religiosos. Posición próxima al fascismo clerical o nacionalcatolicismo.' },
    'UXN': { title:'Jacobinismo', desc:'Apoyas un Estado fuerte, economía mixta y posición cultural neutra. Posición próxima al jacobinismo o republicanismo autoritario.' },
    'DIP': { title:'Socialismo democrático', desc:'Dentro del marco democrático, defiendes la planificación económica y el progreso social. Posición clásica del socialismo democrático o socialdemocracia de izquierda.' },
    'DIC': { title:'Socialismo cristiano', desc:'Dentro del marco democrático, defiendes la economía colectiva y los valores tradicionales. Posición próxima al socialismo cristiano o democracia social conservadora.' },
    'DIN': { title:'Centro Izquierda', desc:'Dentro del marco democrático, prefieres la intervención estatal y posición cultural moderada. Posición del centro-izquierda clásico o socialdemocracia moderada.' },
    'DMP': { title:'Liberalismo clásico progresista', desc:'Dentro del marco democrático, apoyas el libre mercado y el progreso social. Posición afín al liberalismo clásico progresista o libertarismo democrático.' },
    'DMC': { title:'Liberalismo conservador', desc:'Dentro del marco democrático, apoyas el libre mercado y los valores tradicionales. Posición clásica del liberalismo conservador o democracia liberal-conservadora.' },
    'DMN': { title:'Centro Derecha liberal', desc:'Dentro del marco democrático, apoyas el libre mercado y posición cultural moderada. Posición del liberalismo clásico o centro-derecha liberal.' },
    'DXP': { title:'Socioliberalismo', desc:'Dentro del marco democrático, prefieres la economía mixta y los valores progresistas. Posición próxima al socioliberalismo o liberalismo de izquierda.' },
    'DXC': { title:'Democracia cristiana', desc:'Dentro del marco democrático, prefieres la economía mixta y los valores conservadores. Posición clásica de la democracia cristiana o conservadurismo moderado.' },
    'DXN': { title:'Centro', desc:'Dentro del marco democrático, prefieres la economía mixta y posición cultural neutra. Posición centrista pragmática.' },
  };

  const key = polTag+ecoTag+socTag;
  return map[key] || { title:'Centrista pragmático', desc:'Tus posiciones están equilibradas entre los distintos ejes. Eres pragmático y no te identificas fuertemente con ningún extremo del espectro político.' };
}

function espectroReset(){
  espectroAnswers = {};
  espectroCurrentCat = 0;
  const wrap = document.getElementById('test-espectro');
  wrap.innerHTML = '';
  espectroInit();
}


const ISIDEWITH_QUESTIONS = [
  {cat:'Cuestiones de política exterior',q:'¿Apoya la medida del presidente Obama de levantar el embargo comercial y de viajes a Cuba?',a:['Sí','No','No, levantar el embargo de viajes pero no permitir el comercio hasta que Cuba se convierta en una república democrática']},
  {cat:'Cuestiones de política exterior',q:'¿Debería aumentar o disminuir Estados Unidos el gasto militar?',a:['Aumentar','Disminuir','Ninguno, estoy satisfecho con la cantidad actual de gasto','Aumentar, pero solo después de que nuestro déficit se reduzca drásticamente']},
  {cat:'Cuestiones de política exterior',q:'¿Deberían los Estados Unidos proporcionar suministros militares y financiamiento a Ucrania?',a:['Sí','No','Sí, pero con una estricta rendición de cuentas.','Sí, pero solo proporcionar ayuda humanitaria','Sí, y aumentar la cantidad actual de recursos que estamos proporcionando']},
  {cat:'Cuestiones de política exterior',q:'¿Deben concederse derechos constitucionales a los sospechosos de terrorismo extranjeros?',a:['Sí','No','Sí, darles un juicio justo y cerrar la Bahía de Guantánamo','Sí, al igual que los ciudadanos estadounidenses, los terroristas deben tener un juicio justo en los tribunales federales','No, no son ciudadanos estadounidenses y no tienen derechos constitucionales']},
  {cat:'Cuestiones de política exterior',q:'¿Debe Estados Unidos seguir apoyando a Israel?',a:['Sí','No','Sí, y con más ayuda y apoyo','Sí, y aumentar la financiación para trasladar nuestra embajada a Jerusalén','Sí, pero respetando la soberanía de Israel y no dictando cómo debe interactuar con sus vecinos']},
  {cat:'Cuestiones de política exterior',q:'¿Debería Estados Unidos permanecer en la OTAN?',a:['Sí','No','Sí, pero la OTAN debería centrarse más en las estrategias antiterroristas','No, es obsoleta y debe ser abolida','No, no hasta que otros países aumenten sus contribuciones financieras']},
  {cat:'Cuestiones de política exterior',q:'¿Debe permitirse a los militares utilizar técnicas de interrogatorio mejoradas, como el waterboarding, para obtener información de los sospechosos de terrorismo?',a:['Sí','No','Sí, pero sólo como último recurso','terroristas Sí, pero sólo en caso de condena','Sí, debemos utilizar cualquier medio necesario para prevenir el terrorismo']},
  {cat:'Cuestiones de política exterior',q:'¿Estados Unidos debería aumentar o disminuir el gasto en ayuda al extranjero?',a:['Aumentar','Disminuir','Aumentar, pero solo para países que no tengan violaciones de derechos humanos','Disminuir, y no deberíamos dar ayuda exterior a ningún país','Disminuir, hasta que reduzcamos drásticamente nuestro déficit presupuestario nacional']},
  {cat:'Cuestiones de política exterior',q:'¿Debe Estados Unidos permanecer en las Naciones Unidas?',a:['Sí','No','Sí, pero reducir nuestra participación actual','Sí, y usar las fuerzas de paz de la ONU para proteger nuestros intereses','No, y retirar la sede de la ONU de EE.UU.']},
  {cat:'Cuestiones de política exterior',q:'¿Debe el ejército sobrevolar países extranjeros con aviones no tripulados para obtener información y matar a presuntos terroristas?',a:['Sí','No','Sí, pero sólo con el permiso del país en cuestión','Sí, Estados Unidos debe utilizar todos los medios necesarios para combatir el terrorismo','No, sólo para reunir información, no para matar a presuntos terroristas']},
  {cat:'Cuestiones de política exterior',q:'¿Debería Ucrania unirse a la OTAN?',a:['Sí','No','No, y disolver la OTAN','No, hay demasiada corrupción en Ucrania','No, esto debería decidirse después de que termine la guerra actual para evitar una tercera guerra mundial']},
  {cat:'Cuestiones de política exterior',q:'¿Debería exigirse a todos los ciudadanos de 18 años que presten al menos un año de servicio militar?',a:['Sí','No','Sí, y debería ser al menos dos años de servicio','Sí, pero solo para quienes empiezan a tener antecedentes penales','Sí, pero solo para quienes no continúen con estudios o empleo']},
  {cat:'Cuestiones de política exterior',q:'¿Debería Estados Unidos defender a otros países de la OTAN que mantengan presupuestos de defensa militar bajos con respecto al PIB?',a:['Sí','No','Sí, y negarse a defender a otros países de la OTAN sienta un peligroso precedente para el equilibrio del poder mundial','No, y deberíamos retirarnos de la OTAN','No, no deberíamos defender a ningún país de la OTAN que gaste menos del 2% de su PIB en defensa militar']},
  {cat:'Cuestiones de política exterior',q:'¿Debería el ejército usar armas guiadas por inteligencia artificial?',a:['Sí','No']},
  {cat:'Cuestiones de política exterior',q:'¿Debe Estados Unidos seguir vigilando a sus aliados con la NSA?',a:['Sí','No','Sí, la vigilancia de todos los países extranjeros es esencial para rastrear posibles amenazas terroristas','No, y abolir la NSA','No, espiar a nuestros aliados daña gravemente nuestra reputación en el extranjero']},
  {cat:'Cuestiones de política exterior',q:'¿Debe el gobierno cancelar la producción del caza F-35?',a:['Sí','No']},
  {cat:'Cuestiones de política exterior',q:'¿Debe Estados Unidos vender armas militares a la India para contrarrestar la influencia china y rusa?',a:['Sí','No','Sí, la venta de armas militares a países extranjeros ayudará a impulsar la economía','No, esto iniciará una carrera armamentista mundial','No, y no deberíamos vender armas militares a ningún país extranjero']},
  {cat:'Cuestiones de política exterior',q:'¿Debe reconocerse Jerusalén como capital de Israel?',a:['Sí','No','Sí, y los gobiernos extranjeros deberían trasladar allí sus embajadas','Sí, los gobiernos extranjeros deben reconocer a Jerusalén como la capital de Israel','No, Jerusalén es la capital de Palestina']},
  {cat:'Problemas de transporte',q:'¿Debería el gobierno subsidiar los servicios de transporte compartido para personas de bajos ingresos?',a:['Sí','No']},
  {cat:'Problemas de transporte',q:'¿Debería el gobierno imponer estándares más estrictos de eficiencia de combustible en los vehículos?',a:['Sí','No','Sí, y también invertir en trenes de alta velocidad y transporte público','No, y eliminar la EPA','No, proporcionar incentivos en lugar de sanciones para crear alternativas de combustible']},
  {cat:'Problemas de transporte',q:'¿Debería el gobierno exigir que todos los autos nuevos sean eléctricos o híbridos para una fecha determinada?',a:['Sí','No','Sí, y exigir que toda la maquinaria basada en emisiones haga la transición a energía limpia','Sí, pero solo si incluye subsidios para que los ciudadanos de bajos ingresos puedan costear estos vehículos','No, incentive a los consumidores y fabricantes en lugar de obligarlos']},
  {cat:'Problemas de transporte',q:'¿Debería el gobierno implementar normas de emisiones más estrictas para los vehículos diésel?',a:['Sí','No','No, y eliminar la EPA','No, los vehículos diésel ya están fuertemente regulados','No, proporcionar incentivos en lugar de sanciones para crear alternativas de combustible']},
  {cat:'Problemas de transporte',q:'¿Debería el gobierno proporcionar subsidios para el desarrollo de redes de trenes de alta velocidad?',a:['Sí','No']},
  {cat:'Problemas de transporte',q:'¿Debería el gobierno invertir en el desarrollo de infraestructura de transporte inteligente?',a:['Sí','No']},
  {cat:'Problemas de transporte',q:'¿Debería el gobierno aumentar el gasto en transporte público?',a:['Sí','No','Sí, y proporcionar más transporte público gratuito','Sí, pero solo si el gasto se destina a soluciones ecológicas','No, y deberíamos reducir el gasto actual']},
  {cat:'Problemas de transporte',q:'¿Debería el gobierno ofrecer incentivos para el uso de viajes compartidos y servicios de transporte compartido?',a:['Sí','No']},
  {cat:'Problemas de transporte',q:'¿Debería el gobierno promover el uso de bicicletas ampliando los carriles para bicicletas y los programas de bicicletas compartidas?',a:['Sí','No']},
  {cat:'Problemas de transporte',q:'¿Debería el gobierno regular el desarrollo y la implementación de vehículos autónomos?',a:['Sí','No']},
  {cat:'Problemas de transporte',q:'¿Debería el gobierno aumentar las sanciones por conducir distraído?',a:['Sí','No']},
  {cat:'Problemas de transporte',q:'¿Deberían las ciudades implementar la tarificación por congestión para reducir el tráfico en áreas urbanas concurridas?',a:['Sí','No']},
  {cat:'Problemas de transporte',q:'¿Debería el gobierno restringir el uso de tecnología avanzada en los vehículos para mantener el control humano y prevenir la dependencia excesiva de la tecnología?',a:['Sí','No']},
  {cat:'Problemas de transporte',q:'¿Debería el gobierno regular los programas de viajero frecuente de las aerolíneas?',a:['Sí','No']},
  {cat:'Problemas de transporte',q:'¿Deberían las ciudades designar carriles especiales para vehículos autónomos?',a:['Sí','No']},
  {cat:'Problemas de transporte',q:'¿Debería el gobierno eliminar todas las leyes de tráfico y confiar en el cumplimiento voluntario?',a:['Sí','No']},
  {cat:'Problemas de transporte',q:'¿Debería el gobierno imponer el seguimiento obligatorio por GPS en todos los vehículos para monitorear el comportamiento de conducción y mejorar la seguridad vial?',a:['Sí','No']},
  {cat:'Problemas de transporte',q:'¿Debería el gobierno exigir que los sistemas de transporte público sean totalmente accesibles para las personas con discapacidades?',a:['Sí','No']},
  {cat:'Cuestiones electorales',q:'¿Deberían los extranjeros que actualmente residen en los Estados Unidos tener derecho a votar?',a:['Sí','No','Sí, pero solo después de vivir en el país durante 5 años','Sí, pero solo después de vivir en el país durante 10 años','Sí, cualquier persona que pague impuestos debería tener derecho a votar']},
  {cat:'Cuestiones electorales',q:'¿Debe abolirse el colegio electoral?',a:['Sí','No','Sí, y cambiar a un sistema de votación por orden de importancia','Sí, y cambiar a un sistema de democracia representativa (voto popular)','No, pero el balance de votos por población debería actualizarse']},
  {cat:'Cuestiones electorales',q:'¿Debe exigirse un documento de identidad con fotografía para votar?',a:['Sí','No','Sí, así se evitará el fraude electoral','Sí, pero garantiza que cada joven de 18 años reciba uno sin costo alguno','No, y hay pocas pruebas de que exista fraude electoral']},
  {cat:'Cuestiones electorales',q:'¿Debería permitirse que un político que ha sido condenado previamente por un delito se postule para un cargo público?',a:['Sí','No','Sí, siempre y cuando hayan cumplido su condena','Sí, siempre y cuando el delito no haya sido cometido mientras estaba en el cargo','Sí, siempre y cuando no haya sido un delito grave, violento, financiero o sexual']},
  {cat:'Cuestiones electorales',q:'¿Debería cada votante recibir automáticamente una boleta por correo?',a:['Sí','No','Sí, y obligar a votar','Sí, pero agrega requisitos más estrictos de elegibilidad y verificación','No, y agregar requisitos más estrictos de elegibilidad y verificación']},
  {cat:'Cuestiones electorales',q:'¿Debería haber un límite en la cantidad de dinero que un candidato puede recibir de un donante?',a:['Sí','No','Sí, los políticos no deberían ser comprados por donantes adinerados','Sí, y prohibir todas las donaciones políticas y financiar públicamente las elecciones','No, esto es una violación de la libertad de expresión']},
  {cat:'Cuestiones electorales',q:'¿Debería exigirse a los candidatos políticos que hagan públicas sus declaraciones de impuestos recientes?',a:['Sí','No','Sí, y también deberían estar obligados a publicar sus historiales médicos','Sí, y exigir una auditoría pública cada año que estén en el cargo','No, sus ingresos no son asunto nuestro']},
  {cat:'Cuestiones electorales',q:'¿Deberían las corporaciones, sindicatos y organizaciones sin fines de lucro poder donar a los partidos políticos?',a:['Sí','No','Sí, pero limite la cantidad que pueden donar','No, este tipo de donaciones solo se convierten en sobornos','No, pero permitir donaciones de sindicatos y organizaciones sin fines de lucro']},
  {cat:'Cuestiones electorales',q:'¿Debería el gobierno registrar automáticamente a todos los ciudadanos elegibles para votar?',a:['Sí','No','Sí, pero solo si los individuos pueden optar por no participar fácilmente','Sí, y seguir a Australia haciendo que votar sea obligatorio','Sí, eliminen las barreras burocráticas para que cada voz cuente']},
  {cat:'Cuestiones electorales',q:'¿Debería haber una prohibición de 5 años para que los funcionarios de la Casa Blanca y del Congreso se conviertan en lobistas después de dejar el gobierno?',a:['Sí','No','Sí, y que sea una prohibición de por vida','Sí, y que se prohíba toda forma de lobby','No, la actual prohibición de dos años es suficiente']},
  {cat:'Cuestiones electorales',q:'¿Debería ser legal apostar dinero sobre los resultados de las elecciones políticas?',a:['Sí','No','Sí, pero regulándolo como el mercado de valores para evitar el uso de información privilegiada','Sí, los mercados de predicción suelen ser más precisos que las encuestas tradicionales','No, convertir la democracia en un casino incentiva la corrupción']},
  {cat:'Cuestiones electorales',q:'¿Debería el gobierno federal imponer la votación por orden de preferencia para todas las elecciones al Congreso?',a:['Sí','No','Sí, el sistema de \'el ganador se lo lleva todo\' alimenta el extremismo y clasificar fuerza el consenso','Sí, elimina el efecto saboteador para apoyar a terceros partidos sin desperdiciar el voto','No, es demasiado confuso y causa más errores en las papeletas y votos descartados']},
  {cat:'Cuestiones electorales',q:'¿Deberían los políticos mayores de 75 años estar obligados a aprobar una prueba de competencia mental?',a:['Sí','No','Sí, y prohibir que cualquier persona mayor de la edad de jubilación se postule para un cargo','Sí, y los políticos de cualquier edad deberían estar obligados a aprobar una prueba de competencia mental','No, preferiría límites de mandato en su lugar']},
  {cat:'Cuestiones electorales',q:'¿Deberían los grupos de presión extranjeros tener permitido recaudar dinero para las elecciones estadounidenses?',a:['Sí','No','Sí, siempre que todas las donaciones sean de conocimiento público para garantizar que no haya conflicto de intereses','No, los intereses extranjeros no deberían poder comprar la influencia de nuestros políticos']},
  {cat:'Cuestiones electorales',q:'¿Se debería bajar la edad mínima para votar?',a:['Sí','No','Sí, cualquier ciudadano que pague impuestos debería poder votar','No, debería aumentarse','No, y los votantes deberían estar obligados a aprobar una prueba básica que demuestre su comprensión de la política para poder votar']},
  {cat:'Cuestiones electorales',q:'¿Debería ser festivo nacional el día de las elecciones federales?',a:['Sí','No','Sí, pero reemplazando el Día de Colón para evitar pérdidas económicas','Sí, eliminar las barreras laborales que impiden votar a los ciudadanos','Sí, tratar la votación como una celebración fortalece nuestra democracia']},
  {cat:'Cuestiones educativas',q:'¿Debe el gobierno federal pagar las matrículas de las universidades de cuatro años?',a:['Sí','No','Sí, pero sólo para la matrícula parcial','No, pero proporcionar tipos de interés más bajos para los préstamos estudiantiles','No, pero ofrecer más oportunidades de becas a los estudiantes con bajos ingresos']},
  {cat:'Cuestiones educativas',q:'¿Debería enseñarse la teoría crítica de la raza en la educación infantil?',a:['Sí','No','Sí, pero no hasta que sean adolescentes','Sí, y también añadir la Interseccionalidad y el Proyecto 1619 al plan de estudios','Sí, no podemos acabar con el racismo hasta que reconozcamos que nuestras instituciones, leyes e historia son inherentemente racistas']},
  {cat:'Cuestiones educativas',q:'¿Apoya usted el aumento de los impuestos a los ricos para reducir los tipos de interés de los préstamos estudiantiles?',a:['Sí','No','Sí, y aumentar la financiación del gobierno para que todos los estudiantes reciban una educación universitaria gratuita','No, pero deberíamos reducir los tipos de interés de los préstamos estudiantiles','No, y convertir todos los préstamos estudiantiles actuales del gobierno en cuentas de gestión privada']},
  {cat:'Cuestiones educativas',q:'¿Debe el gobierno federal financiar la educación preescolar universal?',a:['Sí','No','Sí, pero la financiación debe provenir de los estados y no del gobierno federal','Sí, siempre que los padres tengan también la opción de enviar a sus hijos a una escuela privada','No, utilizar un sistema de vales en su lugar']},
  {cat:'Cuestiones educativas',q:'¿Apoya los estándares nacionales Common Core?',a:['Sí','No','Sí, apoyo el concepto pero no la implementación actual','Sí, los estándares nacionales ayudarán a mejorar nuestra media nacional y a preparar mejor a los estudiantes para la universidad','Sí, apoyo un estándar básico nacional, pero permito que los estados y los distritos locales personalicen su implementación']},
  {cat:'Cuestiones educativas',q:'¿Debería el gobierno ofrecer a los estudiantes un vale que puedan utilizar para asistir a escuelas privadas?',a:['Sí','No','Sí, pero sólo para las familias de bajos ingresos','Sí, pero preferiría privatizar toda la educación','Sí, pero sólo para estudiantes con logros deportivos, académicos o de servicio excepcionales']},
  {cat:'Cuestiones educativas',q:'¿Deberían las escuelas públicas poder retirar libros de las bibliotecas si los padres los consideran inapropiados?',a:['Sí','No','Sí, pero las prohibiciones deben limitarse estrictamente a la pornografía, no a libros sobre raza o género.','Sí, los padres tienen el derecho fundamental de proteger a sus hijos de contenido sexualmente explícito.','No, los padres pueden controlar lo que lee su propio hijo, pero no dictar lo que acceden otros estudiantes.']},
  {cat:'Cuestiones educativas',q:'¿Debe el gobierno despenalizar el absentismo escolar?',a:['Sí','No']},
  {cat:'Cuestiones educativas',q:'¿Apoya las escuelas concertadas?',a:['Sí','No','Sí, pero sólo si son sin ánimo de lucro','Sí, pero no a expensas de la financiación de las escuelas públicas','Sí, y todo nuestro sistema educativo debería ser privatizado']},
  {cat:'Cuestiones educativas',q:'¿Debería abolirse el Departamento de Educación de los Estados Unidos?',a:['Sí','No','Sí, ha desperdiciado miles de millones sin mejorar el rendimiento estudiantil','Sí, la educación pertenece a los estados y a los padres, no a los burócratas federales','No, pero limitar su poder a gestionar únicamente préstamos y becas estudiantiles']},
  {cat:'Cuestiones educativas',q:'¿Debería prohibirse a las universidades dar preferencia a los solicitantes cuyos padres son ex alumnos?',a:['Sí','No','Sí, las admisiones deben basarse estrictamente en el mérito en lugar de la riqueza familiar o el linaje','Sí, la preferencia heredada es "acción afirmativa para los ricos" que amaña el sistema contra la clase trabajadora','No, las donaciones de ex alumnos son necesarias para financiar becas para estudiantes de bajos ingresos']},
  {cat:'Cuestiones educativas',q:'¿Debería el gobierno federal proporcionar desayuno y almuerzo gratuitos a todos los estudiantes de escuelas públicas, independientemente de sus ingresos?',a:['Sí','No','Sí, pero solo si la comida cumple con estrictos estándares nutricionales','Sí, los niños con hambre no aprenden y la comprobación de ingresos crea "vergüenza del almuerzo"','No, los contribuyentes no deberían subsidiar comidas para familias ricas']},
  {cat:'Problemas de vivienda',q:'¿Debería el gobierno implementar políticas de control de alquileres para limitar la cantidad que los propietarios pueden cobrar por el alquiler?',a:['Sí','No','Sí, pero solo en áreas con escasez de viviendas','Sí, la vivienda es un derecho básico que debería ser asequible para todos','No, los estudios muestran que el control de alquileres no reduce el alquiler']},
  {cat:'Problemas de vivienda',q:'¿Se debería permitir que las personas sin hogar, que han rechazado refugio o vivienda disponible, duerman o acampen en propiedad pública?',a:['Sí','No','Sí, para dormir pero no para acampar','Sí, pero solo en áreas designadas','Sí, y crear más programas sociales para proporcionar comida, ropa y medicinas gratis']},
  {cat:'Problemas de vivienda',q:'¿Debería el gobierno aumentar la financiación para refugios y servicios para personas sin hogar?',a:['Sí','No']},
  {cat:'Problemas de vivienda',q:'¿Debería el gobierno incentivar la construcción de viviendas asequibles?',a:['Sí','No','Sí, la vivienda es un derecho básico que debería ser asequible para todos','No, en su lugar reforme las leyes de zonificación para aumentar la oferta de viviendas','Sí, y también prohíba que inversores corporativos y extranjeros compren bienes raíces residenciales']},
  {cat:'Problemas de vivienda',q:'¿Debería exigirse que los nuevos desarrollos de viviendas incluyan espacios verdes y parques?',a:['Sí','No']},
  {cat:'Problemas de vivienda',q:'¿Debería el gobierno otorgar subsidios a los compradores de vivienda por primera vez?',a:['Sí','No','Sí, pero solo para compradores de vivienda de bajos ingresos','No, esto llevaría a otra burbuja inmobiliaria','No, en su lugar incentivar la construcción de viviendas asequibles']},
  {cat:'Problemas de vivienda',q:'¿Debería el gobierno restringir la compra de propiedades residenciales por parte de inversionistas extranjeros?',a:['Sí','No']},
  {cat:'Problemas de vivienda',q:'¿Se debería permitir a la policía desalojar inmediatamente a los ocupas de una residencia sin una orden judicial?',a:['Sí','No','Sí, la ocupación es un allanamiento criminal y debe tratarse como un delito, no como una disputa civil','Sí, y deberíamos abolir las leyes de "usucapión" que permiten a los ocupas reclamar la propiedad','Sí, los propietarios no deberían tener que esperar meses por una orden judicial para recuperar su propiedad robada']},
  {cat:'Problemas de vivienda',q:'¿Debería el gobierno incentivar la construcción de edificios residenciales de alta densidad?',a:['Sí','No']},
  {cat:'Problemas de vivienda',q:'¿Debería el gobierno proporcionar asistencia a los propietarios de viviendas que enfrentan una ejecución hipotecaria?',a:['Sí','No']},
  {cat:'Problemas de vivienda',q:'¿Debería el gobierno federal abolir el impuesto sobre la renta y reemplazarlo con un impuesto nacional sobre las ventas?',a:['Sí','No','Sí, abolición del inflado IRS; gravar los ingresos castiga el éxito mientras un impuesto al consumo recompensa el ahorro','Sí, pero solo si se eximen las necesidades básicas para que las familias de clase trabajadora no sean aplastadas por el mayor costo de vida','No, un impuesto nacional sobre las ventas es profundamente regresivo y transfiere la carga fiscal de las élites a la clase media']},
  {cat:'Problemas de vivienda',q:'¿Se debería prohibir a los propietarios usar software para coordinar los precios de alquiler?',a:['Sí','No','Sí, este software crea un cártel digital que fija precios ilegalmente.','Sí, pero solo para grandes corporaciones, no para pequeños propietarios independientes.','No, los propietarios tienen derecho a usar datos para determinar el valor de mercado.']},
  {cat:'Cuestiones de seguridad nacional',q:'¿Debería el Presidente poder autorizar la utilización de la fuerza militar contra Al-Qaeda sin la aprobación del Congreso?',a:['Sí','No','Sí, debemos utilizar cualquier medio necesario para evitar otro ataque terrorista','No, el Congreso debe aprobar todos los conflictos militares']},
  {cat:'Cuestiones de seguridad nacional',q:'¿Debe el presidente movilizar a las fuerzas armadas estadounidenses contra los cárteles mexicanos de la droga?',a:['Sí','No','Sí, pero solo con la aprobación del Congreso.','Sí, pero solo si se coordina con el gobierno de México.','Si, pero solo para operaciones dentro de las fronteras de nuestro país']},
  {cat:'Cuestiones de seguridad nacional',q:'¿Debería el gobierno implementar un sistema nacional de identificación para mejorar la seguridad y prevenir el fraude?',a:['Sí','No']},
  {cat:'Cuestiones de seguridad nacional',q:'¿Debería el gobierno utilizar la tecnología de reconocimiento facial para la vigilancia masiva con el fin de mejorar la seguridad pública?',a:['Sí','No','Sí, pero solo si está estrictamente regulado y se utiliza con transparencia','Sí, pero solo enfocándose en zonas de alta criminalidad para proteger a las comunidades vulnerables','No, sería demasiado costoso de implementar']},
  {cat:'Cuestiones de seguridad nacional',q:'Deberíamos los EE.UU. asesinar a sospechosos de terrorismo en el extranjero?',a:['Sí','No','Sí, pero solo si hay pruebas irrefutables de que están planeando atacar nuestro país','Sí, pero solo si hay pruebas irrefutables de que han cometido un ataque contra nuestro país','No, deben ser capturados y recibir un juicio justo']},
  {cat:'Cuestiones de seguridad nacional',q:'¿Debería el gobierno prohibir que entidades extranjeras compren tierras agrícolas estadounidenses?',a:['Sí','No','Sí, pero solo para naciones adversarias como China, Rusia e Irán','Sí, la seguridad alimentaria es seguridad nacional y no podemos permitir el control extranjero','Sí, y el gobierno debería incautar cualquier tierra agrícola que actualmente sea propiedad de entidades extranjeras']},
  {cat:'Cuestiones de seguridad nacional',q:'¿Debería el gobierno exigir a las empresas tecnológicas que proporcionen acceso de puerta trasera a las comunicaciones cifradas por motivos de seguridad nacional?',a:['Sí','No']},
  {cat:'Cuestiones de seguridad nacional',q:'¿Debería el gobierno invertir en inteligencia artificial (IA) para aplicaciones de defensa?',a:['Sí','No','Sí, pero con una supervisión y regulaciones muy estrictas','Sí, pero solo para asistir y no reemplazar la toma de decisiones humana','No, primero necesitamos más pruebas en entornos controlados']},
  {cat:'Cuestiones de seguridad nacional',q:'¿Debería el gobierno publicar todos los registros clasificados sobre OVNIs y Fenómenos Aéreos No Identificados (UAP)?',a:['Sí','No','Sí, y concedan amnistía a los denunciantes que ocultaron esta tecnología.','Sí, pero censurando los datos de sensores militares para proteger nuestras capacidades de defensa nacional.','Sí, terminen con el encubrimiento y dejen que el público enfrente el "choque ontológico" de la verdad.']},
  {cat:'Cuestiones de seguridad nacional',q:'¿Debería el gobierno prohibir a sus ciudadanos el uso de métodos de pago transfronterizos (como las criptomonedas) para enviar dinero a familiares en países sancionados por la OFAC (Palestina, Irán, Cuba, Venezuela, Rusia y Corea del Norte)?',a:['Sí','No']},
  {cat:'Cuestiones de seguridad nacional',q:'¿Debería permitirse al gobierno confiscar propiedad privada sin una condena penal?',a:['Sí','No','Sí, debemos paralizar el poder financiero de las bandas antes de que laven su dinero.','Sí, especialmente para los funcionarios públicos que no pueden explicar el origen de sus bienes de lujo.','No, el estado debe obtener una condena penal antes de incautar cualquier propiedad.']},
  {cat:'Cuestiones de seguridad nacional',q:'¿Debería exigirse a las mujeres de 18 años que se registren para el reclutamiento militar?',a:['Sí','No','Sí, la verdadera igualdad de género significa compartir la responsabilidad de la defensa nacional','Sí, la guerra moderna se basa en la tecnología, no en la fuerza física, lo que hace que el género sea irrelevante','No, las mujeres desempeñan un papel único en la familia que debe protegerse del combate']},
  {cat:'Cuestiones económicas',q:'Deberíamos los EE.UU. aumentar los impuestos a los ricos?',a:['Sí','No','Sí, y aumentar los impuestos en todos los tramos de ingresos','No, pero bajar los impuestos a los pobres','No, mantener la estructura fiscal actual']},
  {cat:'Cuestiones económicas',q:'¿Debería el gobierno aumentar el salario mínimo federal?',a:['Sí','No','Sí, y convertirlo en un salario digno','Sí, y ajustarlo cada año según la inflación','Independientemente, los estándares de salario mínimo deberían ajustarse por grupo de edad']},
  {cat:'Cuestiones económicas',q:'¿Debería EE. UU. aumentar o reducir el tipo impositivo a las corporaciones?',a:['Aumentar','Reducir','Reducir, pero eliminar deducciones y vacíos legales','Mantener la tasa actual','Mantener las tasas actuales pero eliminar deducciones y vacíos legales']},
  {cat:'Cuestiones económicas',q:'¿Apoya usted un programa de ingreso básico universal?',a:['Sí','No','Sí, todos deberían recibir un ingreso para cubrir las necesidades básicas, incluyendo alimentos y vivienda','No, esto alentará a las personas a no trabajar y perjudicará el crecimiento económico']},
  {cat:'Cuestiones económicas',q:'¿Debería ser obligatorio que los empleadores paguen a hombres y mujeres el mismo salario por el mismo trabajo?',a:['Sí','No','Sí, y las empresas deberían estar obligadas a publicar sus rangos salariales para cada puesto','No, esto es irrelevante porque la brecha salarial de género es un mito','No, los requisitos actuales de la Ley de Igualdad Salarial de 1963 ya son suficientes']},
  {cat:'Cuestiones económicas',q:'¿Deberían los beneficiarios de asistencia social ser sometidos a pruebas de drogas?',a:['Sí','No','Sí, pero proporcionar tratamiento a quienes den positivo','Sí, y cancelar inmediatamente los beneficios a cualquiera que dé positivo','Sí, hacer pruebas a cualquier persona que reciba dinero del gobierno, incluidos empleados y políticos']},
  {cat:'Cuestiones económicas',q:'¿Debería el gobierno hacer recortes en el gasto público para reducir la deuda nacional?',a:['Sí','No','Sí, y aumente los impuestos','Sí, y elimine las agencias federales que son inconstitucionales','Sí, pero reduciendo drásticamente los beneficios y salarios de los funcionarios públicos']},
  {cat:'Cuestiones económicas',q:'¿Debe el gobierno aumentar el tipo impositivo sobre los beneficios obtenidos por la venta de acciones, bonos y bienes inmuebles?',a:['Sí','No','Sí, sobre las acciones y los bonos, pero no sobre los bienes inmuebles','Sí, y todos los ingresos deben tributar al mismo tipo','Sí, y aumentar hasta el tipo impositivo medio de Estados Unidos (31,5%)']},
  {cat:'Cuestiones económicas',q:'¿Cree que los sindicatos ayudan o perjudican a la economía?',a:['Perjudican','Ayudan','Perjudican, apoyo algunos sindicatos privados pero estoy totalmente en contra de los sindicatos públicos','Ayudan, pero se debería prohibir su capacidad de hacer donaciones políticas','Ayudan, en teoría, pero recientemente se han vuelto corruptos y deberían limitarse sus poderes']},
  {cat:'Cuestiones económicas',q:'¿Debería el gobierno imponer un límite al salario de los CEO en relación con el salario de sus empleados?',a:['Sí','No']},
  {cat:'Cuestiones económicas',q:'¿Debería haber menos o más restricciones sobre los beneficios sociales actuales?',a:['Más','Menos','Más, y negar beneficios a los inmigrantes','Más, los beneficios actuales deberían tener un límite','Más, pero aumentar los beneficios para los ancianos y discapacitados']},
  {cat:'Cuestiones económicas',q:'¿Debería el gobierno gravar las ganancias no realizadas?',a:['Sí','No']},
  {cat:'Cuestiones económicas',q:'¿Debería reducirse el tipo actual del impuesto sobre el patrimonio?',a:['Sí','No','Sí, y deberíamos eliminarlo','No, estoy satisfecho con la tasa actual','No, y aumentarlo a un ritmo progresivo']},
  {cat:'Cuestiones económicas',q:'¿Debería el gobierno utilizar estímulos económicos para ayudar al país durante tiempos de recesión?',a:['Sí','No','Sí, y colectivizar toda la industria','Sí, pero en forma de reducciones de impuestos para todos los ciudadanos','Sí, el gobierno debería intervenir para impulsar la recuperación']},
  {cat:'Cuestiones económicas',q:'¿Debería Estados Unidos hacer la transición a una semana laboral de cuatro días?',a:['Sí','No','Sí, y exigir el pago de horas extra por trabajo que exceda los cuatro días a la semana']},
  {cat:'Cuestiones económicas',q:'En caso de que el gobierno de exigir a las empresas a pagar los empleados, haciendo hasta $ 46k / año, la hora y media por las horas extras?',a:['Sí','No','Sí, y el gobierno debería hacer más para proteger los derechos de los trabajadores','Sí, y todos los empleados deberían cobrar tiempo y medio por las horas extras, independientemente de su escala salarial','No, y el gobierno está actualmente regulando en exceso a las empresas privadas']},
  {cat:'Cuestiones económicas',q:'¿Debería el gobierno dividir Amazon, Facebook y Google?',a:['Sí','No']},
  {cat:'Cuestiones económicas',q:'¿Deberían los Estados Unidos aumentar los aranceles a los productos importados de China?',a:['Sí','No','Sí, China debería ser penalizada por manipular artificialmente su moneda']},
  {cat:'Cuestiones de salud',q:'¿Debería el gobierno federal aumentar la financiación de la asistencia sanitaria para personas con bajos ingresos (Medicaid)?',a:['Sí','No','Sí, pero sólo aumentaría para los ancianos y los discapacitados','Sí, pero prefiero cambiar a un sistema sanitario de pago único','No, y suprimir Medicaid']},
  {cat:'Cuestiones de salud',q:'¿Debería el gobierno financiar a la Organización Mundial de la Salud?',a:['Sí','No','Sí, pero disminuir la cantidad','Sí, y aumentar la cantidad','Sí, pero solo en relación con la cantidad que aportan otros países']},
  {cat:'Cuestiones de salud',q:'¿Apoya la Ley de Protección al Paciente y Cuidado de la Salud Asequible (Obamacare)?',a:['Sí','No','Sí, apoyo la mayor parte del plan, pero no todos los aspectos','Sí, pero un sistema obligatorio de pago único sería aún mejor','Sí, y permitir a los consumidores elegir proveedores e importar productos farmacéuticos de otros países']},
  {cat:'Cuestiones de salud',q:'¿Debería el gobierno perdonar todas las deudas médicas por procedimientos necesarios y no electivos?',a:['Sí','No','Sí, la atención médica es un derecho humano','Sí, pero sólo para los ciudadanos de bajos ingresos','No, no podemos permitirnos hacer esto.']},
  {cat:'Cuestiones de salud',q:'¿Debería exigirse a las personas que trabajen para recibir Medicaid?',a:['Sí','No','Sí, esto ayudará a los Estados a reducir los costes de Medicaid','Sí, las investigaciones demuestran que las personas que tienen empleo son más saludables que las que están desempleadas','No, es difícil solicitar un trabajo si estás enfermo']},
  {cat:'Cuestiones de salud',q:'¿Apoya un sistema de atención médica de pagador único?',a:['Sí','No','Sí, pero permitir que las personas usen seguro privado','Sí, este sistema garantiza atención médica para todos','Sí, las empresas privadas no deberían poder lucrar con la atención médica']},
  {cat:'Cuestiones de salud',q:'¿Debería el gobierno federal negociar los precios de los medicamentos para Medicare?',a:['Sí','No','No, el gobierno no debería interferir en el libre mercado']},
  {cat:'Cuestiones de salud',q:'¿Debe haber más o menos privatización de la asistencia sanitaria a los veteranos?',a:['Más','Menos','Más, los veteranos deberían poder acudir a cualquier médico de su elección','Más, y sustituir el sistema de asistencia sanitaria de la VA por una cuenta personal de ahorro para la salud','Menos, deberíamos aumentar la financiación para mejorar el sistema actual en su lugar']},
  {cat:'Cuestiones de salud',q:'¿Deben las juntas médicas sancionar a los médicos que dan consejos de salud que contradicen el consenso científico contemporáneo?',a:['Sí','No','Sí, y los médicos también deberían perder su licencia médica','Sí, esto disminuirá la cantidad de desinformación que reciben los pacientes','No, solo cuando se haya demostrado que el consejo perjudicó al paciente']},
  {cat:'Cuestiones de salud',q:'¿Debería el gobierno eliminar los límites de precios en los medicamentos genéricos?',a:['Sí','No']},
  {cat:'Cuestiones de salud',q:'¿Debería Estados Unidos prohibir los ingredientes y colorantes alimentarios que actualmente están prohibidos en Europa?',a:['Sí','No','Sí, deberíamos adoptar los estándares de seguridad preventiva de Europa.','Sí, dejen de permitir que las corporaciones envenenen nuestra comida con químicos vinculados al cáncer y al TDAH.','No, el gobierno no tiene por qué dictar lo que comemos.']},
  {cat:'Cuestiones de salud',q:'¿Debería el gobierno prohibir la promoción de productos que contribuyen a estilos de vida no saludables para los jóvenes, como el vapeo y la comida chatarra?',a:['Sí','No','Sí, excepto la comida chatarra, ya que causaría problemas de asequibilidad','No, no es tarea del gobierno determinar qué es saludable','No, en su lugar financie campañas de concienciación y etiquetas sobre los peligros de estos productos']},
  {cat:'Cuestiones de salud',q:'¿Debería el gobierno federal exigir que Medicare cubra el costo de medicamentos para perder peso como Ozempic?',a:['Sí','No','Sí, la obesidad es una enfermedad crónica y tratarla ahora ahorra miles de millones en costos de atención médica a largo plazo','Sí, el acceso a medicinas que cambian la vida no debería depender de la riqueza y Medicare debe modernizarse para cubrir tratamientos efectivos','No, cubrir estos costosos medicamentos para millones de personas llevaría a la quiebra a todo el sistema de Medicare']},
  {cat:'Cuestiones de salud',q:'¿Debería prohibirse a las firmas de capital privado ser dueñas de hospitales y consultorios médicos?',a:['Sí','No','Sí, el afán de lucro de Wall Street agota los recursos médicos y pone en peligro la atención al paciente','Sí, pero debe eliminarse gradualmente para evitar quiebras abruptas en hospitales rurales vulnerables','No, solo apliquen leyes de transparencia más estrictas para priorizar los resultados de los pacientes sobre los retornos de los accionistas']},
  {cat:'Cuestiones de salud',q:'¿Debería el gobierno federal imponer un impuesto nacional sobre las bebidas y refrigerios azucarados para combatir la epidemia de obesidad?',a:['Sí','No','Sí, y los ingresos fiscales deben usarse exclusivamente para subsidiar productos frescos para familias de bajos ingresos','Sí, tratar el azúcar como el tabaco es la única forma de obligar a los conglomerados alimentarios a cambiar sus recetas tóxicas','Sí, un impuesto nacional es una herramienta de salud pública comprobada para reducir el consumo de azúcar y disminuir los costos de atención médica a largo plazo']},
  {cat:'Cuestiones de salud',q:'¿Debería el gobierno legalizar los psicodélicos, como los hongos mágicos y el MDMA, para uso terapéutico?',a:['Sí','No','Sí, pero solo en entornos médicos supervisados.','Sí, son un tratamiento revolucionario para el TEPT y la depresión.','Sí, los adultos tienen derecho a decidir qué consumen.']},
  {cat:'Cuestiones de salud',q:'¿Debería el gobierno prohibir a las compañías farmacéuticas anunciar medicamentos recetados directamente a los consumidores?',a:['Sí','No','Sí, Estados Unidos y Nueva Zelanda son los únicos países desarrollados que aún permiten que las ganancias corporativas anulen la medicina basada en la evidencia','Sí, estos anuncios manipuladores inflan artificialmente los costos de atención médica al convencer a los pacientes de exigir medicamentos de marca costosos que en realidad no necesitan','No, pero la FDA debe regularlos agresivamente para que los efectos secundarios se expliquen en un lenguaje sencillo en lugar de una jerga legal leída rápidamente']},
  {cat:'Cuestiones de salud',q:'¿Debería el gobierno aumentar la financiación para la investigación y el tratamiento de la salud mental?',a:['Sí','No','Sí, pero solo aumentar la financiación para la atención personalizada en lugar de subsidiar a las compañías farmacéuticas','Sí, nuestro sistema de atención de salud mental necesita más financiación para proporcionar una mayor calidad de atención y servicios','No, y el gobierno no debería involucrarse en la atención médica']},
  {cat:'Cuestiones medioambientales',q:'¿Debería levantar Estados Unidos el moratorio sobre nuevas licencias de exportación de gas natural licuado (GNL)?',a:['Sí','No']},
  {cat:'Cuestiones medioambientales',q:'¿Debería Estados Unidos retirarse del Acuerdo Climático de París?',a:['Sí','No','Sí, hasta que otros países se atengan a las mismas normas','No, y presionar a otros países para que se comprometan con estándares más altos.','No, pero mantener a los países a estándares basados en sus emisiones de carbono.']},
  {cat:'Cuestiones medioambientales',q:'¿Debería el gobierno aumentar las regulaciones ambientales para prevenir el cambio climático?',a:['Sí','No','Sí, y proporcionar más incentivos para la producción de energía alternativa','No, en su lugar grave las emisiones de carbono','No, y el calentamiento global es un hecho natural']},
  {cat:'Cuestiones medioambientales',q:'¿Debe Estados Unidos ampliar las perforaciones petrolíferas en alta mar?',a:['Sí','No','Sí, y desregular el sector energético para dejar que el libre mercado determine las mejores fuentes de energía','No, acabar con todas las perforaciones petrolíferas en alta mar','No, y nacionalizar el sector energético']},
  {cat:'Cuestiones medioambientales',q:'¿Debería permitirse la perforación en el Refugio de Vida Silvestre de Alaska?',a:['Sí','No','Sí, pero con una normativa medioambiental muy estricta','No, no hasta que hayamos agotado todas las demás reservas de petróleo','No, y aumentar las subvenciones a las energías alternativas para eliminar nuestra dependencia de los combustibles fósiles']},
  {cat:'Cuestiones medioambientales',q:'¿Apoya el uso de fracking hidráulico para extraer los recursos de petróleo y gas natural?',a:['Sí','No','Sí, pero aumentar la supervisión','Sí, pero no en áreas densamente pobladas','No, deberíamos buscar recursos energéticos más sostenibles en su lugar']},
  {cat:'Cuestiones medioambientales',q:'¿Debería el gobierno financiar la investigación en geoingeniería como una forma de combatir el cambio climático?',a:['Sí','No']},
  {cat:'Cuestiones medioambientales',q:'¿Debe el gobierno detener la construcción del oleoducto Dakota Access?',a:['Sí','No','Sí, y el gobierno nunca debería estar autorizado a adquirir tierras por dominio eminente','No, pero desviar el oleoducto lejos de las tierras de los nativos americanos','No, pero aumentar drásticamente la cantidad de multas que la empresa debe pagar en caso de un accidente']},
  {cat:'Cuestiones medioambientales',q:'¿Deben prohibirse los productos desechables (como vasos, platos y cubiertos de plástico) que contienen menos del 50% de material biodegradable?',a:['Sí','No','Sí, y prohibir todos los productos desechables que no estén hechos de al menos un 75% de material biodegradable','No, aumentar los incentivos para que los consumidores reciclen estos productos en su lugar','No, pero aumentar los incentivos fiscales para las empresas que fabrican productos biodegradables']},
  {cat:'Cuestiones medioambientales',q:'¿Debe el gobierno conceder créditos fiscales y subvenciones a la industria de la energía eólica?',a:['Sí','No','Sí, la energía eólica es la mejor alternativa al carbón y al gas natural','Sí, el gobierno debería apoyar las tecnologías energéticas más sostenibles','No, acabar con todos los créditos fiscales y las subvenciones a la industria energética']},
  {cat:'Cuestiones medioambientales',q:'¿Debería el gobierno construir una red de estaciones de carga para vehículos eléctricos?',a:['Sí','No','Sí, pero solo si utilizan fuentes de energía renovable','No, y soy escéptico sobre la viabilidad de los vehículos eléctricos','No, y deberíamos centrarnos más en mejorar el transporte público']},
  {cat:'Cuestiones medioambientales',q:'¿Debería el gobierno invertir en programas para reducir el desperdicio de alimentos?',a:['Sí','No']},
  {cat:'Cuestiones medioambientales',q:'¿Debería permitirse a los investigadores usar animales para probar la seguridad de medicamentos, vacunas, dispositivos médicos y cosméticos?',a:['Sí','No','Sí, pero no para cosméticos','Sí, siempre que los animales no sufran ningún dolor o angustia','No, es cruel e ineficaz']},
  {cat:'Cuestiones medioambientales',q:'¿Debería el gobierno proporcionar subsidios a las empresas que desarrollan tecnologías de captura de carbono?',a:['Sí','No','Sí, y también aumentar el gasto en energía renovable y reforestación','No, en su lugar grave las emisiones de carbono','No, en su lugar proporcione subsidios a empresas de energía renovable']},
  {cat:'Cuestiones medioambientales',q:'¿Debería el gobierno federal apoyar la adopción de vehículos eléctricos a través de incentivos y financiamiento de infraestructura?',a:['Sí','No']},
  {cat:'Cuestiones medioambientales',q:'¿Debería el gobierno otorgar subsidios a los contribuyentes que compren un vehículo eléctrico?',a:['Sí','No']},
  {cat:'Cuestiones medioambientales',q:'¿Debería el gobierno federal autorizar la minería en aguas profundas en aguas territoriales de EE. UU. para recolectar minerales para tecnología verde?',a:['Sí','No','Sí, la extracción de estos nódulos minerales es una necesidad absoluta para romper el monopolio de China sobre los materiales críticos de energía verde','Sí, recolectar rocas del fondo del océano tiene un costo humano y ambiental significativamente menor que la minería terrestre tradicional','No, las plumas de sedimentos tóxicos podrían interrumpir la pesca comercial y destruir la capacidad crítica del océano para actuar como sumidero de carbono']},
  {cat:'Cuestiones medioambientales',q:'¿Debería el gobierno federal prohibir las granjas industriales para proteger el bienestar animal y el medio ambiente?',a:['Sí','No','Sí, debemos prohibir inmediatamente todas las CAFO para acabar con la crueldad animal y hacer la transición a un sistema alimentario basado en plantas.','Sí, el grave daño ecológico y la resistencia a los antibióticos generada en las CAFO requiere una eliminación gradual a favor de la agricultura regenerativa.','Sí, pero sólo eliminando los subsidios masivos de los contribuyentes que hacen que la carne industrial sea artificialmente rentable sobre las pequeñas granjas familiares.']},
  {cat:'Cuestiones tecnológicas',q:'¿Deben los artistas estar sujetos a los mismos requisitos de información y divulgación que los fondos de cobertura, fondos mutuos y empresas públicas al vender sus obras de arte?',a:['Sí','No','Sí, pero solo si el precio de venta es lo suficientemente alto como para justificarlo como una inversión','No, el gobierno no debería interferir en un acuerdo entre dos partes privadas']},
  {cat:'Cuestiones tecnológicas',q:'¿Debería el gobierno exigir que las grandes empresas tecnológicas compartan sus algoritmos con los reguladores?',a:['Sí','No','Sí, y todo el software y los algoritmos deberían ser de código abierto','Sí, y también deberían compartir sus algoritmos con sus clientes','No, solo si hay acusaciones graves de daño o mala conducta']},
  {cat:'Cuestiones tecnológicas',q:'¿Debería el gobierno implementar regulaciones más estrictas sobre el uso de criptomonedas?',a:['Sí','No','Sí, y prohibir el uso de criptomonedas','Sí, el gobierno debería examinar las criptomonedas antes de su circulación para asegurar un valor y tasas de cambio legítimos','No, y los ciudadanos deberían poder proteger sus ahorros de políticas fiscales irresponsables o de la subyugación']},
  {cat:'Cuestiones tecnológicas',q:'¿Debería el gobierno imponer regulaciones más estrictas sobre la recopilación y el uso de datos personales por parte de las empresas?',a:['Sí','No']},
  {cat:'Cuestiones tecnológicas',q:'¿Debería el gobierno imponer impuestos a las empresas que reemplazan trabajadores humanos con inteligencia artificial o robots?',a:['Sí','No','Sí, un "impuesto a los robots" es esencial para financiar el Ingreso Básico Universal (UBI) para los trabajadores desplazados permanentemente por la IA','Sí, a las megacorporaciones no se les debe permitir evadir impuestos sobre la nómina y diezmar a la clase trabajadora conectando un algoritmo','No, gravar la eficiencia es un suicidio económico que deslocalizará de inmediato nuestra innovación en IA a China']},
  {cat:'Cuestiones tecnológicas',q:'¿Debería el gobierno regular la inteligencia artificial (IA) para garantizar un uso ético?',a:['Sí','No','Sí, y no se debería permitir que la IA se entrene con material protegido por derechos de autor','Sí, y exigir una divulgación clara para cualquier contenido o servicio creado artificialmente','Sí, pero preferiría que prohibiéramos la inteligencia artificial antes de que destruya la sociedad']},
  {cat:'Cuestiones tecnológicas',q:'¿Debería ser ilegal usar deepfakes generados por IA en anuncios de campañas políticas?',a:['Sí','No','Sí, a menos que el contenido esté claramente etiquetado como generado por IA','Sí, pero solo para video y audio realistas, no para memes o texto','Sí, los deepfakes son una amenaza directa para la democracia y los votantes tienen derecho a la verdad']},
  {cat:'Cuestiones tecnológicas',q:'¿Deberían las empresas de IA estar obligadas a pagar a los creadores por usar sus obras para entrenar modelos?',a:['Sí','No','Sí, pero creando un sistema de licencias estandarizado para que las demandas no frenen la innovación','Sí, usar obras protegidas sin permiso es un robo de alta tecnología que amenaza los medios de vida humanos','No, imponer tarifas llevaría a la quiebra a las startups y entregaría la carrera de la IA a China']},
  {cat:'Cuestiones tecnológicas',q:'¿Debería el gobierno prohibir legalmente a los menores de 16 años el uso de plataformas de redes sociales?',a:['Sí','No','Sí, pero solo bloquee el acceso durante la escuela y tarde en la noche para proteger el sueño y la concentración','Sí, los algoritmos depredadores promueven activamente contenido dañino como trastornos alimentarios y autolesiones','No, vigilar el acceso a internet es un derecho fundamental de los padres, no del Estado niñera']},
  {cat:'Cuestiones tecnológicas',q:'¿Debería el gobierno exigir a las empresas que proporcionen las piezas y manuales necesarios para que los clientes reparen sus propios productos?',a:['Sí','No','Sí, esto evita la obsolescencia programada y reduce la basura electrónica','Sí, si lo compro es mío, y los fabricantes no deberían monopolizar las reparaciones','No, la tecnología moderna es demasiado compleja para reparaciones caseras y plantea riesgos de seguridad']},
  {cat:'Cuestiones tecnológicas',q:'¿Debería el gobierno exigir a los usuarios que verifiquen su verdadera identidad con una identificación gubernamental para usar las plataformas de redes sociales?',a:['Sí','No','Sí, acabar con el anonimato digital reducirá drásticamente la interferencia electoral extranjera, los deepfakes y los depredadores en línea','Sí, obligar a las personas a usar nombres legales es la única forma de evitar que los bots, trolls y ciberacosadores arruinen Internet','No, entregar identificaciones gubernamentales a las grandes tecnológicas crea un honeypot de datos distópico para piratas informáticos y permite un estado de vigilancia masiva']},
  {cat:'Cuestiones tecnológicas',q:'¿Debería el gobierno otorgar a los ciudadanos el derecho legal de obligar a los motores de búsqueda a borrar su información personal pasada?',a:['Sí','No','Sí, la UE ya demostró que esto funciona para proteger a los ciudadanos de daños permanentes a su reputación por errores menores del pasado','Sí, necesitamos un mecanismo legal para recuperar nuestra soberanía digital de los corredores de datos que se benefician de nuestras vidas privadas','Sí, pero solo para ciudadanos privados; las figuras públicas y los políticos deben permanecer exentos para garantizar la responsabilidad democrática']},
  {cat:'Cuestiones tecnológicas',q:'¿Debería permitirse a los ciudadanos asegurar su dinero en carteras digitales autogestionadas que el gobierno puede monitorear pero no controlar?',a:['Sí','No','Sí, y también permitir el uso de una capa de privacidad que impida el monitoreo de fondos y transacciones','No, y prohibir las carteras digitales que no contengan acceso de puerta trasera para agencias gubernamentales']},
  {cat:'Cuestiones sociales',q:'¿Debería protegerse el discurso de odio mediante la primera enmienda?',a:['Sí','No','Sí, siempre que no amenace con violencia','Sí, porque no confío en que el gobierno defina los límites del discurso de odio','No, y aumentar las penas por discurso de odio']},
  {cat:'Cuestiones sociales',q:'¿Deberían los grandes eventos públicos incluir declaraciones de reconocimiento de tierras?',a:['Sí','No']},
  {cat:'Cuestiones sociales',q:'¿Cuál es su postura sobre el aborto?',a:['Provida','Proelección','Provida, y también me opongo al aborto para víctimas de violación e incesto','Provida, pero permitir en casos de violación, incesto o peligro para la madre o el niño','Proelección, pero prohibir después de los primeros tres meses']},
  {cat:'Cuestiones sociales',q:'¿Apoya la legalización del matrimonio entre personas del mismo sexo?',a:['Sí','No','Sí, pero permitir que las iglesias tengan el derecho de rechazar ceremonias entre personas del mismo sexo','No, permitir uniones civiles pero no llamarlo matrimonio','No, el matrimonio debe definirse como entre un hombre y una mujer']},
  {cat:'Cuestiones sociales',q:'¿Debe el gobierno seguir financiando a Planned Parenthood?',a:['Sí','No','Sí, siempre que la financiación no se utilice para procedimientos de aborto','Sí, sus servicios van mucho más allá de los abortos y pueden salvar muchas vidas a través de la detección del cáncer, los servicios prenatales y las derivaciones para la adopción','No, y el gobierno no debería dar fondos a ninguna organización']},
  {cat:'Cuestiones sociales',q:'¿Debe añadirse la “identidad de género” a las leyes contra la discriminación?',a:['Sí','No','Sí, y el gobierno debería hacer más para proteger a las minorías de la discriminación','No, y derogar las leyes antidiscriminatorias para las empresas privadas','No, sólo hay dos géneros que están determinados genéticamente, no psicológicamente']},
  {cat:'Cuestiones sociales',q:'¿Se debería permitir que los atletas transgénero compitan contra atletas que difieren de su sexo asignado al nacer?',a:['Sí','No','Sí, pero solo si sus niveles hormonales son equivalentes a los de la categoría de género en la que compiten','No, crear una categoría separada para que los atletas transgénero compitan entre sí','No, los atletas deben competir según el sexo biológico que figura en su certificado de nacimiento']},
  {cat:'Cuestiones sociales',q:'¿Debería exigirse a los proveedores de seguros médicos que ofrezcan anticonceptivos gratuitos?',a:['Sí','No','Sí, excepto para las organizaciones religiosas y benéficas que se oponen al uso de anticonceptivos','No, debería estar cubierto como cualquier otra prescripción médica','No, el gobierno debería apoyar los programas de abstinencia']},
  {cat:'Cuestiones sociales',q:'¿Deberían las parejas homosexuales tener los mismos derechos de adopción que las parejas heterosexuales?',a:['Sí','No','Sí, siempre y cuando pasen las mismas verificaciones de antecedentes que las parejas heterosexuales','No, y las parejas homosexuales no deberían poder adoptar niños','No, y creo que una estructura familiar de madre y padre es lo mejor para el niño']},
  {cat:'Cuestiones sociales',q:'¿Debe el gobierno federal exigir la formación en sensibilidad racial a los empleados?',a:['Sí','No','Sí, e incluir también los temas LGBTQ+','Sí, y ampliar el requisito a las empresas privadas también','Sí, siempre que cubra todos los grupos protegidos (edad, sexo, raza, discapacidad, orientación sexual, religión) y no se base en la teoría racial crítica']},
  {cat:'Cuestiones sociales',q:'¿Deberían las personas menores de 18 años poder recibir tratamientos de transición de género?',a:['Sí','No','Sí, pero con permiso de los padres','Sí, pero solo si tienen al menos 16 años','Sí, siempre y cuando el tratamiento no sea subvencionado por el gobierno']},
  {cat:'Cuestiones sociales',q:'¿Debería un negocio poder negar el servicio a un cliente si la petición entra en conflicto con las creencias religiosas del propietario?',a:['Sí','No','Sí, pero sólo para las pequeñas empresas','Sí, cualquier negocio debería poder negar el servicio por cualquier motivo','Sí, pero el propietario debe colocar un cartel que indique sus creencias y lo que rechaza']},
  {cat:'Cuestiones sociales',q:'¿Debería el gobierno federal instituir una recompra obligatoria de armas de asalto?',a:['Sí','No','Sí, y también deberíamos desmilitarizar los departamentos de policía locales','Sí, pero empezar con una recompra voluntaria y la prohibición de comprar armas de asalto antes de imponer una recompra obligatoria','No, esto es una violación de la 2ª enmienda']},
  {cat:'Cuestiones sociales',q:'¿Debería el gobierno reconocer oficialmente solo dos sexos biológicos?',a:['Sí','No']},
  {cat:'Cuestiones sociales',q:'¿Deberían eliminarse los programas de DEI de las agencias del gobierno federal?',a:['Sí','No']},
  {cat:'Cuestiones sociales',q:'¿Apoya la pena de muerte?',a:['Sí','No','Sí, pero la familia de la víctima debería decidir el castigo','Sí, pero solo para crímenes horribles con pruebas irrefutables','No, demasiadas personas son condenadas injustamente']},
  {cat:'Cuestiones sociales',q:'¿Deben las universidades ofrecer “avisos de activación” y “espacios seguros” para los estudiantes?',a:['Sí','No','Sí, proporcionar advertencias de activación, pero los estudiantes no necesitan espacios seguros','Sí, proporcionar espacios seguros, pero los estudiantes no necesitan advertencias de activación','No, la universidad está destinada a desafiar los pensamientos y opiniones de los estudiantes para que estén preparados para la vida real']},
  {cat:'Cuestiones sociales',q:'¿Debería el gobierno apoyar la separación de la Iglesia y el Estado eliminando las referencias a Dios en el dinero, los edificios federales y los monumentos nacionales?',a:['Sí','No','Sí, pero no malgastar el dinero eliminando las referencias existentes','Sí, crea un sesgo contra las religiones que no creen en Dios','No, siempre que no haga referencia a una religión específica']},
  {cat:'Cuestiones de inmigración',q:'¿Debería esperarse que los inmigrantes aprendan el idioma oficial de su nuevo país?',a:['Sí','No','Sí, pero el gobierno debería ofrecer cursos gratuitos de aprendizaje de idiomas','Sí, y eliminar las traducciones multilingües de los documentos y servicios gubernamentales','No, deberíamos abrazar la diversidad que los inmigrantes aportan a nuestro país']},
  {cat:'Cuestiones de inmigración',q:'¿Deben los inmigrantes ilegales tener acceso a la asistencia sanitaria subvencionada por el gobierno?',a:['Sí','No','Sí, si pagan impuestos','Sí, y concederles la ciudadanía','Sí, pero deberían ser deportados después del tratamiento']},
  {cat:'Cuestiones de inmigración',q:'¿Debería ofrecerse a los inmigrantes indocumentados una matrícula estatal en las universidades públicas de su estado de residencia?',a:['Sí','No','Sí, siempre que paguen impuestos','Sí, pero negando la posibilidad de recibir ayudas económicas y becas','Sí, y también deberían tener derecho a ayudas económicas y becas']},
  {cat:'Cuestiones de inmigración',q:'¿Debe Estados Unidos construir un muro en la frontera sur?',a:['Sí','No','Sí, y México debería pagarlo','Sí, pero que sea una barrera de vigilancia de alta tecnología en lugar de física','No, esto sería demasiado costoso e ineficaz']},
  {cat:'Cuestiones de inmigración',q:'¿Debería permitirse a las fuerzas del orden locales detener a los inmigrantes ilegales por delitos menores y transferirlos a las autoridades federales de inmigración?',a:['Sí','No','Sí, todos los inmigrantes ilegales deberían ser entregados a las autoridades federales y deportados','No, sólo si son condenados por un delito violento','No, se está deportando a demasiados inmigrantes no violentos']},
  {cat:'Cuestiones de inmigración',q:'¿Debe Estados Unidos aumentar las restricciones de su actual política de seguridad fronteriza?',a:['Sí','No','Sí, y permitir que los estados fronterizos gestionen su propia política de seguridad','No, sólo hay que aplicar la actual política de fronteras','No, y aplicar una política de fronteras abiertas']},
  {cat:'Cuestiones de inmigración',q:'¿Debería prohibirse la entrada al país de inmigrantes provenientes de países de alto riesgo hasta que el gobierno mejore su capacidad para detectar posibles terroristas?',a:['Sí','No','Sí, y deportar a los inmigrantes ilegales de países de alto riesgo','No, esto afectará negativamente a los refugiados y solicitantes de asilo','No, pero aumentar las verificaciones de antecedentes y el control de todos los inmigrantes']},
  {cat:'Cuestiones de inmigración',q:'¿Debería concederse una amnistía temporal a los inmigrantes ilegales que trabajan?',a:['Sí','No','Sí, pero sólo si pagan impuestos','Sí, crear un camino sencillo hacia la ciudadanía para los inmigrantes sin antecedentes penales','No, pero permitir que se queden']},
  {cat:'Cuestiones de inmigración',q:'¿Deben las ciudades santuario recibir financiación federal?',a:['Sí','No','Sí, pero multar a las empresas que emplean inmigrantes ilegales.','No, y toda financiación federal es inconstitucional.','No, y deberíamos prohibir el uso de ciudades santuario']},
  {cat:'Cuestiones de inmigración',q:'¿Debería EE. UU. aumentar o reducir la cantidad de visados de trabajo temporales que se entregan a trabajadores inmigrantes altamente cualificados?',a:['Aumentar','Disminuir','Aumentar, nuestra economía depende de que las empresas contraten a los trabajadores más calificados al menor costo','Disminuir, las empresas actualmente se están aprovechando de este programa para reducir los salarios','Disminuir, y el gobierno debería ofrecer más incentivos para preparar a nuestros ciudadanos para estos trabajos']},
  {cat:'Cuestiones de inmigración',q:'¿Debería concederse la ciudadanía legal a los hijos de inmigrantes ilegales?',a:['Sí','No','Sí, si han nacido aquí','Sí, y abolir todas las fronteras nacionales','Sí, pero no debería conceder la ciudadanía a sus padres']},
  {cat:'Cuestiones de inmigración',q:'¿Deben ser deportados los inmigrantes si cometen un delito grave?',a:['Sí','No','Sí, pero después de que hayan cumplido su condena','Sí, siempre que sea seguro para ellos regresar a su país','No, solo si han entrado al país ilegalmente']},
  {cat:'Cuestiones de inmigración',q:'¿Debería exigirse que los solicitantes de asilo permanezcan en México mientras se procesan sus casos?',a:['Sí','No']},
  {cat:'Cuestiones de inmigración',q:'¿Debería exigirse a los inmigrantes aprobar un examen de ciudadanía para demostrar un conocimiento básico del idioma, la historia y el gobierno de nuestro país?',a:['Sí','No','Sí, pero solo debería cubrir temas muy básicos y sencillos','Sí, y debería evaluar más que solo un nivel básico de comprensión','No, la mayoría de los ciudadanos ni siquiera podría aprobar un examen de ciudadanía']},
  {cat:'Cuestiones de inmigración',q:'¿Deberían obtener la ciudadanía automática los hijos de extranjeros nacidos en este país?',a:['Sí','No','Sí, pero solo si al menos uno de los padres es residente legal.','Sí, cualquier persona nacida en nuestro suelo es ciudadana, sin importar el estatus parental.','No, la ciudadanía debe heredarse por sangre (ius sanguinis), no por geografía.']},
  {cat:'Cuestiones de inmigración',q:'¿Debería el gobierno federal obligar a todos los empleadores a usar E-Verify para comprobar el estatus migratorio de los nuevos empleados?',a:['Sí','No','Sí, eliminar el imán de empleos es la forma más efectiva de detener la inmigración ilegal','Sí, pero debe ir acompañado de un programa ampliado de trabajadores invitados para que la industria agrícola no colapse','No, el gobierno no tiene derecho a dictar a quién pueden contratar voluntariamente las empresas privadas']},
  {cat:'Cuestiones de inmigración',q:'Se debe permitir inmigrantes a los Estados Unidos para mantener el estado de la doble nacionalidad?',a:['Sí','No','Sí, a menos que hayan cometido un delito','Sí, a menos que hayan cometido un acto de terrorismo','Sí, pero no deberían poder reclamar estatus de ciudadanía de más de dos naciones']},
  {cat:'Problemas criminales',q:'¿Debería permitirse a las fuerzas del orden incautar permanentemente dinero y propiedades de sospechosos sin una condena penal?',a:['Sí','No','Sí, es una herramienta vital para paralizar a los cárteles y redes terroristas antes de que puedan lavar su dinero.','Sí, pero restríngalo a empresas criminales a gran escala para que la policía no pueda acosar a los ciudadanos comunes.','No, y prohíban la laguna de "reparto equitativo" que permite a la policía local eludir las leyes estatales para incautar activos.']},
  {cat:'Problemas criminales',q:'¿Se debería redirigir la financiación de los departamentos de policía locales a programas sociales y comunitarios?',a:['Sí','No','Sí, y abolir la policía','Sí, reemplazar a la policía con respondedores comunitarios desarmados para llamadas no violentas','No, aumentar la financiación y la capacitación de los departamentos de policía en comunidades con mayores tasas de criminalidad']},
  {cat:'Problemas criminales',q:'¿Debería permitirse que los departamentos de policía utilicen equipo de grado militar?',a:['Sí','No','Sí, pero solo en respuesta a situaciones extremas','Sí, pero con entrenamiento estricto sobre cómo y cuándo usar el equipo','No, y abolir la policía']},
  {cat:'Problemas criminales',q:'¿Apoya la inmunidad cualificada para los agentes de policía?',a:['Sí','No','Sí, y proporcionar más formación y educación a los agentes de policía','Sí, pero sólo para los agentes que tengan un historial limpio de no quejas','No, y aumentar la responsabilidad personal por mala conducta']},
  {cat:'Problemas criminales',q:'¿Deberían los traficantes de drogas recibir la pena de muerte?',a:['Sí','No','Sí, siempre y cuando reciban un juicio justo','Sí, pero solo si son reincidentes','Sí, pero solo si hay pruebas de que alguien murió por las drogas que traficaron']},
  {cat:'Problemas criminales',q:'¿Apoya las penas mínimas de prisión obligatorias para los acusados de posesión de drogas?',a:['Sí','No','Sí, pero prisión obligatoria para los traficantes y rehabilitación obligatoria para los usuarios.','No, y despenalizar todas las drogas']},
  {cat:'Problemas criminales',q:'¿Deberían los criminales condenados tener derecho a votar?',a:['Sí','No','Sí, todo ciudadano merece el derecho a votar','Sí, excepto para los delincuentes condenados por asesinato o crímenes violentos','Sí, pero solo después de completar sus sentencias y libertad condicional/probatoria']},
  {cat:'Problemas criminales',q:'¿Apoya usted la limitación del poder de negociación colectiva de los sindicatos policiales para los casos de mala conducta?',a:['Sí','No','Sí, y abolir los sindicatos policiales','Sí, y eliminar la negociación colectiva para los sindicatos policiales']},
  {cat:'Problemas criminales',q:'¿Deberían liberarse a los presos no violentos para reducir el hacinamiento en las cárceles?',a:['Sí','No','Sí, pero deben realizar servicio comunitario a diario','Sí, pero colóquelos bajo arresto domiciliario usando una pulsera electrónica','No, deberíamos construir más cárceles']},
  {cat:'Problemas criminales',q:'¿Deben las prisiones prohibir el uso del aislamiento para los menores?',a:['Sí','No','Sí, es gravemente perjudicial desde el punto de vista psicológico para las mentes jóvenes no desarrolladas','Sí, y deberíamos crear más programas sociales para ayudar a prevenir y rehabilitar a los delincuentes','No, pero actualmente se utiliza en exceso']},
  {cat:'Problemas criminales',q:'¿Debería el gobierno implementar programas de justicia restaurativa como alternativa a la encarcelación?',a:['Sí','No','Sí, pero solo si los delitos son no violentos','No, proporcionar programas de justicia restaurativa además de la encarcelación, no como alternativa']},
  {cat:'Problemas criminales',q:'¿Debería permitirse a la policía buscar en bases de datos genealógicas comerciales para resolver crímenes sin una orden judicial?',a:['Sí','No','Sí, capturar asesinos en serie justifica usar datos de ADN que las personas dieron voluntariamente a empresas privadas','Sí, esta revolucionaria herramienta forense prueba definitivamente la inocencia y exonera a los condenados injustamente','Sí, pero limitando estrictamente el acceso a delitos graves como el asesinato para evitar expediciones de pesca en delitos menores']},
  {cat:'Problemas criminales',q:'¿Debería la sanción por infracciones de tráfico depender de los ingresos del conductor?',a:['Sí','No']},
  {cat:'Problemas criminales',q:'¿Deberían los agentes de policía estar obligados a llevar cámaras corporales?',a:['Sí','No','Sí, pero sólo para los agentes de patrulla en zonas de alta criminalidad','Sí, esto protegerá la seguridad y los derechos de los agentes de policía y los ciudadanos','No, debería ser una elección del departamento de policía o del oficial el llevar uno']},
  {cat:'Problemas criminales',q:'¿Debería usarse la inteligencia artificial para tomar decisiones en los sistemas de justicia penal?',a:['Sí','No','Sí, suponiendo que existan controles y equilibrios','No, aún no confío en la precisión de la inteligencia artificial','No, y la inteligencia artificial nunca debería usarse para tomar decisiones que afecten drásticamente vidas']},
  {cat:'Problemas criminales',q:'¿Debería el gobierno contratar empresas privadas para administrar prisiones?',a:['Sí','No','Sí, pero eliminar las cuotas contractuales de ocupación','Sí, pero deberían estar estrictamente reguladas para prevenir la mala gestión y la corrupción','No, las prisiones privadas sacrificarán la calidad del cuidado y los servicios de rehabilitación por obtener ganancias']},
  {cat:'Problemas criminales',q:'¿Debería permitirse a los departamentos de policía locales desplegar robots controlados a distancia equipados con armas letales?',a:['Sí','No','Sí, pero solo en situaciones de tirador activo para proteger vidas de los oficiales','Sí, la tecnología remota es esencial para neutralizar amenazas fuertemente armadas de forma segura','Sí, y equiparlos con asistencia de focalización de IA para minimizar daños colaterales']},
  {cat:'Problemas criminales',q:'¿Deberían las fuerzas del orden poder incautar dinero y propiedades de sospechosos sin una condena penal?',a:['Sí','No','Sí, pero restríngelo a operaciones a gran escala para que la policía no acose a los ciudadanos comunes.','Sí, paralizar el poder financiero de los cárteles y pandillas es necesario para combatir el crimen organizado.','No, el Estado debe obtener una condena penal antes de confiscar permanentemente la propiedad privada.']},
  {cat:'Cuestiones de gobernanza',q:'¿Debería Estados Unidos eliminar el límite de la Cámara de Representantes y agregar más escaños para reflejar el crecimiento de la población?',a:['Sí','No','Sí, el límite de 1929 diluye el poder político de los estados muy poblados y distorsiona el Colegio Electoral','Sí, deberíamos implementar la "Regla de Wyoming" para que cada distrito iguale la población del estado más pequeño','Sí, pero solo si permitimos el voto a distancia o ampliamos el edificio del Capitolio para acomodar la afluencia de legisladores']},
  {cat:'Cuestiones de gobernanza',q:'¿Debería permitirse al presidente despedir fácilmente a los funcionarios federales no políticos?',a:['Sí','No','Sí, el "Estado Profundo" socava la agenda de los líderes electos y debe ser desmantelado.','Sí, pero deberíamos centrarnos en abolir agencias inútiles en lugar de solo despedir personal.','Sí, el poder ejecutivo debe rendir cuentas al presidente, no a una burocracia no electa.']},
  {cat:'Cuestiones de gobernanza',q:'¿Debería el Senado de EE. UU. abolir el filibusterismo para permitir que una mayoría simple apruebe leyes?',a:['Sí','No','Sí, pero solo para derechos de voto o asuntos constitucionales','Sí, la minoría no debería poder tener al gobierno como rehén','No, es un control necesario contra la tiranía de la mayoría']},
  {cat:'Cuestiones de gobernanza',q:'¿Deberían los expresidentes tener inmunidad absoluta frente a procesos penales por actos oficiales realizados durante su mandato?',a:['Sí','No','Sí, el presidente necesita inmunidad absoluta para tomar decisiones difíciles sin temor a cazas de brujas partidistas','Sí, pero estrictamente para deberes oficiales; el Despacho Oval no es una tarjeta de \'salida libre de la cárcel\' para delitos personales','No, nadie está por encima de la ley, y otorgar una inmunidad propia de un rey es una vía directa hacia el autoritarismo']},
  {cat:'Cuestiones de política interna',q:'¿Debería haber más restricciones en el proceso actual de compra de un arma?',a:['Sí','No','Sí, y prohibir todas las armas de uso público','Sí, pero sólo cerrando el vacío legal de las ferias de armas','Sí, exigir una estricta comprobación de antecedentes, pruebas psicológicas y formación']},
  {cat:'Cuestiones de política interna',q:'¿Debería permitirse a las víctimas de la violencia con armas de fuego demandar a los distribuidores y fabricantes de armas de fuego?',a:['Sí','No','Sí, pero sólo los distribuidores','Sí, cualquier empresa debe ser considerada responsable si el uso principal de su producto es para una actividad ilegal','Sí, siempre que la parte perdedora pague todos los gastos legales, es nuestro derecho constitucional demandar a cualquiera por cualquier motivo']},
  {cat:'Cuestiones de política interna',q:'¿Debería permitirse que los maestros lleven armas en la escuela?',a:['Sí','No','Sí, las escuelas deberían requerir que al menos un maestro o guardia de seguridad esté armado','No, en su lugar contrate guardias de seguridad profesionalmente entrenados','No, esto aumentaría el riesgo de disparos accidentales']},
  {cat:'Cuestiones de política interna',q:'¿Apoya los programas de discriminación positiva?',a:['Sí','No','Sí, y aumentar drásticamente la cantidad actual de programas','Sí, y deberíamos crear más programas sociales para hacer frente a la pobreza','No, y los grupos minoritarios no deberían recibir ningún trato de favor']},
  {cat:'Cuestiones de política interna',q:'¿Debería reformarse el Tribunal Supremo para incluir más puestos y limitar los mandatos de los jueces?',a:['Sí','No','Sí, pero sólo la reforma para incluir más escaños','Sí, pero sólo reformar para imponer límites a los mandatos de los jueces','No, y el Tribunal Supremo no debería estar politizado']},
  {cat:'Cuestiones de política interna',q:'¿Debe prohibirse a las personas que figuran en la “lista de exclusión aérea” la compra de armas y municiones?',a:['Sí','No','Sí, y prohibir la venta de armas y municiones a cualquiera','Sí, pero no hasta que el proceso de selección de la lista de exclusión aérea mejore en cuanto a precisión e incluya el debido proceso','Sí, si el gobierno considera que eres demasiado peligroso para subir a un avión no deberías poder comprar un arma']},
  {cat:'Cuestiones de política interna',q:'¿Debería prohibirse a los jueces de la Corte Suprema realizar transacciones financieras con personas que tienen un interés personal en los resultados de la corte?',a:['Sí','No']},
  {cat:'Cuestiones de política interna',q:'¿Debería ser ilegal quemar la bandera de Estados Unidos?',a:['Sí','No','Sí, y debería ser ilegal quemar la bandera de cualquier nación','No, esto es una violación de la libertad de expresión','No, es solo un trozo de tela que no representa lo que debería']},
  {cat:'Cuestiones de política interna',q:'¿Apoya la Ley Patriótica?',a:['Sí','No','Sí, pero limitando el alcance de los poderes del gobierno','Sí, pero los apartados de vigilancia y criminalización son demasiado amplios','No, y aprobar leyes estrictas que prohíban la vigilancia del gobierno sin una causa probable y una orden judicial']},
  {cat:'Cuestiones de política interna',q:'¿Debe permitirse al gobierno confiscar propiedades privadas, con una compensación razonable, para uso público o cívico?',a:['Sí','No','Sí, pero sólo en casos extremos de emergencia nacional','Sí, pero sólo para proyectos públicos y nunca para proyectos privados','Sí, pero sólo si se compensa a los propietarios de las tierras muy por encima del precio justo de mercado']},
  {cat:'Cuestiones de política interna',q:'¿Debería el gobierno regular los sitios de redes sociales como medio para prevenir noticias falsas y desinformación?',a:['Sí','No','Sí, hay demasiadas noticias falsas y desinformación en las redes sociales','Sí, las empresas de redes sociales tienen sesgo político y necesitan ser reguladas','No, el gobierno no debería determinar qué es noticia falsa o real']},
  {cat:'Cuestiones de política interna',q:'¿Debería controlar una comisión independiente y no vinculada a partidos los cambios en los límites de los distritos electorales para el Congreso?',a:['Sí','No','Sí, cambiemos a un sistema de reordenación seleccionado proporcionalmente con múltiples miembros','Sí, la manipulación de las circunscripciones presenta una ventaja injusta al partido en el poder durante la reordenación.','No, no existe una alternativa mejor']},
  {cat:'Cuestiones de política interna',q:'¿Se debe permitir que los miembros del Congreso negocien acciones mientras se desempeñan en el cargo?',a:['Sí','No','Sí, pero con protecciones estrictas contra el tráfico de información privilegiada','Sí, siempre que sus operaciones se informen públicamente en tiempo real.','No, y sus inversiones deben mantenerse en un fideicomiso ciego']},
  {cat:'Cuestiones de política interna',q:'¿Deberían las empresas de redes sociales prohibir la publicidad política?',a:['Sí','No']},
  {cat:'Cuestiones de política interna',q:'¿Debería el gobierno federal garantizar un cuidado infantil universal subsidiado para todas las familias trabajadoras?',a:['Sí','No','Sí, pero solo subsidios sujetos a comprobación de recursos para familias de bajos ingresos que no pueden pagar el cuidado privado','Sí, el cuidado infantil es una infraestructura esencial y la financiación pública es necesaria para mantener a los padres en la fuerza laboral','No, en su lugar se deben expandir los créditos fiscales por hijos para dar a los padres la flexibilidad de elegir su propio cuidado o quedarse en casa']},
  {cat:'Cuestiones de política interna',q:'¿Debería el gobierno de Estados Unidos conceder inmunidad a Edward Snowden?',a:['Sí','No','Sí, investigar a los directores de la CIA y la NSA en su lugar','Sí, debería estar protegido por la Ley de Protección de los Denunciantes','No, pero también hay que investigar a los directores de la CIA y la NSA']},
  {cat:'Cuestiones de política interna',q:'¿Debería el gobierno detener el cambio de hora bianual y hacer permanente el horario de verano?',a:['Sí','No','Sí, atardeceres más tardíos mejoran la salud mental, el ejercicio al aire libre y la economía minorista.','Sí, detengan el cambio; causa privación de sueño, accidentes de auto y ataques cardíacos.','No, cambien al horario estándar permanente; se alinea mejor con la biología del sueño.']},
  {cat:'Cuestiones de política interna',q:'¿Debería Puerto Rico ser admitido como el estado número 51 de los EE. UU.?',a:['Sí','No','Sí, pero solo si un referéndum vinculante muestra que una clara supermayoría lo apoya.','Sí, los impuestos sin representación son antidemocráticos y los puertorriqueños merecen tener voz en el Congreso.','No, el estatus actual de Estado Libre Asociado funciona mejor.']},
  {cat:'Problemas de infraestructura',q:'¿Debería el gobierno prohibir la construcción de nuevos carriles de autopistas y desviar esos fondos al transporte público?',a:['Sí','No','Sí, debemos repensar radicalmente la planificación urbana para priorizar ciudades transitables a pie y trenes de alta velocidad','Sí, la "demanda inducida" demuestra que añadir carriles solo crea más tráfico y aumenta las emisiones','No, pero las nuevas expansiones de autopistas deben incluir carriles exclusivos para autobuses eléctricos y vehículos compartidos']},
  {cat:'Problemas de infraestructura',q:'¿Debería el gobierno federal nacionalizar la red eléctrica para modernizar la infraestructura y evitar apagones regionales?',a:['Sí','No','Sí, una red federal unificada es el requisito previo para distribuir eficientemente la energía renovable por todo el país.','Sí, la energía es un derecho humano y los monopolios corporativos con fines de lucro han demostrado que no pueden mantener una red confiable.','No, una burocracia federal sobrecargada asfixiaría la innovación de la red impulsada por la competencia del libre mercado.']},
  {cat:'Cuestiones científicas',q:'¿Debería el gobierno exigir que los niños sean vacunados contra enfermedades prevenibles?',a:['Sí','No','Sí, pero solo para enfermedades contagiosas mortales','Sí, pero con excepciones para quienes sus creencias religiosas prohíban el uso de vacunas','Sí, son esenciales para proteger a otros niños que son demasiado pequeños para ser vacunados']},
  {cat:'Cuestiones científicas',q:'¿Debería el gobierno permitir la comercialización de carne cultivada en laboratorio?',a:['Sí','No','Sí, siempre que se muestre una advertencia de forma destacada en el empaque y en los menús de los restaurantes','No, necesitamos más estudios a largo plazo para garantizar la seguridad']},
  {cat:'Cuestiones científicas',q:'¿Apoya el uso de la energía nuclear?',a:['Sí','No','Sí, pero con subsidio público','Sí, y nacionalizar la industria','Sí, siempre que no haya subsidio público']},
  {cat:'Cuestiones científicas',q:'¿Debería el gobierno financiar la investigación en ingeniería genética para la prevención y el tratamiento de enfermedades?',a:['Sí','No']},
  {cat:'Cuestiones científicas',q:'¿Debería el gobierno regular el uso de la tecnología CRISPR para modificaciones genéticas humanas?',a:['Sí','No','Sí, solo deberíamos usarla para prevenir enfermedades y trastornos en lugar de alterar las apariencias físicas','Sí, siempre podemos relajar las regulaciones más adelante, pero no podemos deshacer resultados trágicos por el uso imprudente de nuevas tecnologías','No, y el gobierno no debería interferir con el sector privado']},
  {cat:'Cuestiones científicas',q:'¿Debe exigirse a los productores que etiqueten los alimentos modificados genéticamente (OMG)?',a:['Sí','No','Sí, pero preferiría prohibir los OMG','Sí, los consumidores tienen derecho a saber qué contienen sus alimentos','Sí, confío en la ciencia de la ingeniería alimentaria responsable, pero no confío en los motivos de las empresas alimentarias que los venden']},
  {cat:'Cuestiones científicas',q:'¿Debe el gobierno financiar los viajes espaciales?',a:['Sí','No','Sí, y aumentar drásticamente el presupuesto actual de la NASA','No, no hasta que reduzcamos drásticamente nuestro déficit federal','No, y el presupuesto de la NASA debería ser sólo para misiones militares']},
  {cat:'Cuestiones científicas',q:'¿Qué cualidades son más importantes para ti en un candidato?',a:['Add your own stance']},
];
const ISIDEWITH_CATS = ["Cuestiones de política exterior", "Problemas de transporte", "Cuestiones electorales", "Cuestiones educativas", "Problemas de vivienda", "Cuestiones de seguridad nacional", "Cuestiones económicas", "Cuestiones de salud", "Cuestiones medioambientales", "Cuestiones tecnológicas", "Cuestiones sociales", "Cuestiones de inmigración", "Problemas criminales", "Cuestiones de gobernanza", "Cuestiones de política interna", "Problemas de infraestructura", "Cuestiones científicas"];
const ISIDEWITH_CAT_EMOJIS = {"Cuestiones de política exterior": "🌍", "Problemas de transporte": "🚗", "Cuestiones electorales": "🗳️", "Cuestiones educativas": "📚", "Problemas de vivienda": "🏠", "Cuestiones de seguridad nacional": "🔒", "Cuestiones económicas": "💰", "Cuestiones de salud": "🏥", "Cuestiones medioambientales": "🌿", "Cuestiones tecnológicas": "💻", "Cuestiones sociales": "👥", "Cuestiones de inmigración": "✈️", "Problemas criminales": "⚖️", "Cuestiones de gobernanza": "🏛️", "Cuestiones de política interna": "📋", "Problemas de infraestructura": "🏗️", "Cuestiones científicas": "🔬"};

// ═══════════════ TEST 5: iSideWith ═══════════════
let isidewithAnswers = {};    // idx -> answer index
let isidewithCurrentQ = 0;
let isidewithStarted = false;

function isidewithInit(){
  isidewithAnswers = {};
  isidewithCurrentQ = 0;
  isidewithStarted = false;
  const wrap = document.getElementById('test-isidewith');
  wrap.innerHTML = `
    <div style="max-width:860px;margin:0 auto;">
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:24px;margin-bottom:20px;">
        <h2 style="font-size:20px;font-weight:800;color:var(--text);margin:0 0 8px;">🗳️ Test Político iSideWith</h2>
        <p style="color:var(--text2);font-size:13px;line-height:1.7;margin:0 0 8px;">Responde 240 preguntas sobre política real para descubrir en qué porcentaje coincides con las distintas ideologías políticas en 17 áreas temáticas.</p>
        <p style="color:var(--text2);font-size:13px;line-height:1.7;margin:0;">Puedes responder solo las categorías que te interesen o completar el test entero.</p>
      </div>
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:24px;">
        <div id="isw-cat-tabs" style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:20px;"></div>
        <div id="isw-body"></div>
      </div>
    </div>
  `;
  isidewithRenderCatTabs();
  isidewithRenderQuestion(0);
}

function isidewithRenderCatTabs(){
  const el = document.getElementById('isw-cat-tabs');
  const progress = isidewithGetCatProgress();
  let html = '';
  ISIDEWITH_CATS.forEach((cat,i)=>{
    const {done,total} = progress[cat] || {done:0,total:0};
    const pct = total ? Math.round(done/total*100) : 0;
    const active = isidewithCurrentQ < ISIDEWITH_QUESTIONS.length && ISIDEWITH_QUESTIONS[isidewithCurrentQ].cat === cat;
    const bg = active ? 'var(--accent)' : (pct===100 ? '#2a7a4f' : 'var(--surface2)');
    const color = active||pct===100 ? '#fff' : 'var(--text2)';
    const emoji = ISIDEWITH_CAT_EMOJIS[cat] || '📌';
    html += `<button onclick="isidewithJumpToCat('${cat.replace(/'/g,"\\'")}')" style="padding:6px 12px;border:1px solid var(--border);border-radius:8px;cursor:pointer;font-size:11px;font-weight:600;font-family:var(--font);background:${bg};color:${color};transition:all .18s;">${emoji} ${cat}<br><span style="font-weight:400;font-size:10px;opacity:.8;">${done}/${total}</span></button>`;
  });
  el.innerHTML = html;
}

function isidewithGetCatProgress(){
  const prog = {};
  ISIDEWITH_QUESTIONS.forEach((q,i)=>{
    if(!prog[q.cat]) prog[q.cat]={done:0,total:0};
    prog[q.cat].total++;
    if(isidewithAnswers[i]!==undefined) prog[q.cat].done++;
  });
  return prog;
}

function isidewithJumpToCat(cat){
  const idx = ISIDEWITH_QUESTIONS.findIndex(q=>q.cat===cat);
  if(idx>=0){ isidewithCurrentQ=idx; isidewithRenderQuestion(idx); }
}

function isidewithRenderQuestion(idx){
  if(idx >= ISIDEWITH_QUESTIONS.length){ isidewithShowResult(); return; }
  isidewithCurrentQ = idx;
  const q = ISIDEWITH_QUESTIONS[idx];
  const pct = Math.round(idx/ISIDEWITH_QUESTIONS.length*100);
  const answered = Object.keys(isidewithAnswers).length;
  const emoji = ISIDEWITH_CAT_EMOJIS[q.cat] || '📌';

  let optionsHtml = '';
  q.a.forEach((ans,i)=>{
    const sel = isidewithAnswers[idx]===i;
    const border = sel ? 'var(--accent)' : 'var(--border)';
    const bg = sel ? 'rgba(79,142,247,.10)' : '';
    optionsHtml += `<div onclick="isidewithSelect(${idx},${i},this)" style="padding:13px 16px;border:1.5px solid ${border};border-radius:10px;cursor:pointer;font-size:13px;color:var(--text2);line-height:1.5;transition:all .18s;background:${bg};margin-bottom:8px;" class="isw-opt" data-idx="${i}">${ans}</div>`;
  });

  const body = document.getElementById('isw-body');
  body.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
      <div style="font-size:12px;font-weight:700;color:#c9a227;background:rgba(201,162,39,.12);padding:5px 11px;border-radius:6px;">${emoji} ${q.cat}</div>
      <div style="font-size:11px;color:var(--text3);">Pregunta ${idx+1} de ${ISIDEWITH_QUESTIONS.length} · Respondidas: ${answered}</div>
    </div>
    <div style="background:var(--bg4);border-radius:4px;height:5px;margin-bottom:18px;">
      <div style="height:5px;border-radius:4px;background:linear-gradient(90deg,#c9a227,#e8c547);width:${pct}%;transition:width .3s;"></div>
    </div>
    <div style="font-size:16px;font-weight:700;color:var(--text);margin-bottom:18px;line-height:1.5;">${q.q}</div>
    <div id="isw-options">${optionsHtml}</div>
    <div style="display:flex;gap:10px;margin-top:18px;flex-wrap:wrap;">
      ${idx>0?`<button onclick="isidewithRenderQuestion(${idx-1})" style="padding:8px 18px;background:var(--bg4);border:1px solid var(--border);border-radius:8px;color:var(--text2);font-size:12px;cursor:pointer;font-family:var(--font);">← Anterior</button>`:''}
      <button onclick="isidewithSkip(${idx})" style="padding:8px 18px;background:var(--bg4);border:1px solid var(--border);border-radius:8px;color:var(--text3);font-size:12px;cursor:pointer;font-family:var(--font);">Omitir →</button>
      ${answered>0?`<button onclick="isidewithShowResult()" style="padding:8px 18px;background:rgba(79,142,247,.15);border:1px solid rgba(79,142,247,.3);border-radius:8px;color:var(--accent);font-size:12px;cursor:pointer;font-family:var(--font);margin-left:auto;">Ver resultado parcial 📊</button>`:''}
    </div>
  `;
  isidewithRenderCatTabs();
}

function isidewithSelect(qIdx, ansIdx, el){
  isidewithAnswers[qIdx] = ansIdx;
  document.querySelectorAll('.isw-opt').forEach(e=>{
    e.style.borderColor='var(--border)';
    e.style.background='';
  });
  el.style.borderColor='var(--accent)';
  el.style.background='rgba(79,142,247,.10)';
  setTimeout(()=>{ isidewithRenderQuestion(qIdx+1); },280);
}

function isidewithSkip(idx){
  isidewithRenderQuestion(idx+1);
}

function isidewithShowResult(){
  const answered = Object.keys(isidewithAnswers).length;
  if(answered===0){
    alert('Responde al menos una pregunta primero.');
    return;
  }

  // Score per category: for each category, track % of "Sí" (idx=0) vs "No" (idx=1) answers
  // We'll compute a "progressive" score: answer idx 0 = most progressive/left, higher idx = more conservative/right
  // Simple scoring: for binary questions (Sí/No), track yes ratio
  // For scale, assign 0..1 where 0=first answer, 1=last answer

  const catScores = {};
  const catCounts = {};
  ISIDEWITH_CATS.forEach(c=>{ catScores[c]=0; catCounts[c]=0; });

  ISIDEWITH_QUESTIONS.forEach((q,i)=>{
    const ans = isidewithAnswers[i];
    if(ans===undefined) return;
    const cat = q.cat;
    // Normalize: 0 = first option, 1 = last option
    const norm = q.a.length > 1 ? ans/(q.a.length-1) : 0.5;
    catScores[cat] = (catScores[cat]||0) + norm;
    catCounts[cat] = (catCounts[cat]||0) + 1;
  });

  // Overall ideology score: 0=progresista, 1=conservador
  let totalScore=0, totalCount=0;
  ISIDEWITH_CATS.forEach(cat=>{
    if(catCounts[cat]>0){
      totalScore += catScores[cat];
      totalCount += catCounts[cat];
    }
  });
  const overall = totalCount>0 ? totalScore/totalCount : 0.5;

  // Determine ideology label
  function getIdeologyLabel(score){
    if(score<0.15) return {label:'Muy progresista', color:'#e84f4f', emoji:'🔴'};
    if(score<0.30) return {label:'Progresista', color:'#e8884f', emoji:'🟠'};
    if(score<0.42) return {label:'Centro-izquierda', color:'#e8c547', emoji:'🟡'};
    if(score<0.58) return {label:'Centrista', color:'#8e97ad', emoji:'⚪'};
    if(score<0.70) return {label:'Centro-derecha', color:'#5db87a', emoji:'🟢'};
    if(score<0.85) return {label:'Conservador', color:'#4f8ef7', emoji:'🔵'};
    return {label:'Muy conservador', color:'#6a4ff7', emoji:'🟣'};
  }

  const ideo = getIdeologyLabel(overall);

  // Build category cards
  let catCardsHtml = '';
  ISIDEWITH_CATS.forEach(cat=>{
    const cnt = catCounts[cat];
    if(!cnt) return;
    const avg = catScores[cat]/cnt;
    const pct = Math.round(avg*100);
    const catIdeo = getIdeologyLabel(avg);
    const emoji = ISIDEWITH_CAT_EMOJIS[cat]||'📌';
    catCardsHtml += `
      <div style="background:var(--bg3);border:1px solid var(--border);border-radius:10px;padding:14px;">
        <div style="font-size:11px;font-weight:700;color:var(--text2);margin-bottom:8px;">${emoji} ${cat}</div>
        <div style="font-size:10px;color:var(--text3);margin-bottom:6px;">${cnt} respuestas · ${catIdeo.emoji} ${catIdeo.label}</div>
        <div style="background:var(--bg4);border-radius:4px;height:6px;position:relative;">
          <div style="position:absolute;left:${pct}%;top:-3px;width:12px;height:12px;border-radius:50%;background:${catIdeo.color};transform:translateX(-50%);border:2px solid var(--surface);"></div>
          <div style="height:6px;border-radius:4px;background:${catIdeo.color};width:${pct}%;"></div>
        </div>
        <div style="display:flex;justify-content:space-between;font-size:9px;color:var(--text3);margin-top:4px;"><span>Progresista</span><span>Conservador</span></div>
      </div>`;
  });

  // Overall pct
  const overallPct = Math.round(overall*100);

  const wrap = document.getElementById('test-isidewith');
  wrap.innerHTML = `
    <div style="max-width:860px;margin:0 auto;">
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:28px;margin-bottom:20px;text-align:center;">
        <div style="display:inline-block;background:${ideo.color};color:#fff;font-weight:800;font-size:15px;padding:8px 28px;border-radius:8px;letter-spacing:1px;margin-bottom:14px;">RESULTADO iSideWith</div>
        <div style="font-size:18px;font-weight:800;color:var(--text);margin-bottom:6px;">Tu posición ideológica global es:</div>
        <div style="font-size:28px;font-weight:800;color:${ideo.color};margin-bottom:10px;">${ideo.emoji} ${ideo.label}</div>
        <div style="font-size:13px;color:var(--text2);max-width:560px;margin:0 auto 20px;">Basado en ${answered} respuestas de ${ISIDEWITH_QUESTIONS.length} preguntas disponibles</div>

        <div style="background:var(--bg3);border-radius:10px;padding:16px;max-width:500px;margin:0 auto;">
          <div style="font-size:12px;color:var(--text3);margin-bottom:10px;font-weight:600;">ESPECTRO POLÍTICO GLOBAL</div>
          <div style="background:linear-gradient(90deg,#e84f4f,#e8884f,#e8c547,#8e97ad,#5db87a,#4f8ef7,#6a4ff7);border-radius:6px;height:14px;position:relative;margin-bottom:6px;">
            <div style="position:absolute;left:${overallPct}%;top:-5px;width:22px;height:22px;border-radius:50%;background:#fff;transform:translateX(-50%);border:3px solid #333;box-shadow:0 2px 6px rgba(0,0,0,.4);"></div>
          </div>
          <div style="display:flex;justify-content:space-between;font-size:10px;color:var(--text3);"><span>🔴 Progresista</span><span>🔵 Conservador</span></div>
        </div>
      </div>

      <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:24px;margin-bottom:20px;">
        <h3 style="font-size:14px;font-weight:700;color:var(--text);margin:0 0 16px;">Posición por área temática</h3>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px;">
          ${catCardsHtml}
        </div>
      </div>

      <div style="display:flex;gap:12px;flex-wrap:wrap;">
        <button onclick="isidewithReset()" style="padding:11px 24px;background:var(--accent);color:#fff;border:none;border-radius:8px;font-weight:700;font-size:13px;cursor:pointer;font-family:var(--font);">↩ Volver a empezar</button>
        <button onclick="isidewithContinue()" style="padding:11px 24px;background:var(--surface2);color:var(--text2);border:1px solid var(--border);border-radius:8px;font-weight:600;font-size:13px;cursor:pointer;font-family:var(--font);">Continuar respondiendo →</button>
      </div>
    </div>
  `;
}

function isidewithReset(){
  isidewithAnswers={};
  isidewithCurrentQ=0;
  const wrap=document.getElementById('test-isidewith');
  wrap.innerHTML='';
  isidewithInit();
}

function isidewithContinue(){
  // Find first unanswered
  let next=0;
  for(let i=0;i<ISIDEWITH_QUESTIONS.length;i++){
    if(isidewithAnswers[i]===undefined){next=i;break;}
  }
  // Save current answers, re-render UI, restore answers, jump to next unanswered
  const savedAnswers = Object.assign({}, isidewithAnswers);
  const wrap=document.getElementById('test-isidewith');
  wrap.innerHTML='';
  isidewithInit();
  isidewithAnswers = savedAnswers;
  isidewithRenderQuestion(next);
}
// ═══════════════ FIN TEST iSideWith ═══════════════


