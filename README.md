# LunarLanderJavaScript DAM1

Proyecto basado en el Lunar Lander de Miquel Urbina.
Desarrolado por Joan Socias Ramírez.

## Características:

El proyecto consta de 3 páginas .html, de 2 ficheros .css y de 1 fichero .js:

### index.html: 
Página del juego: la luna, el espacio, la nave, el panel de información (velocidad, fuel y altura) y el menú de opciones. La nave está centrada a un 10% por debajo del top y descendera 80% hasta estar al 10% del suelo (base lunar). El fuel depende de la dificultad y tiene un valor preestablecido de 50 que al usar el motor se vaciará hasta 0, nivel fácil.

### Howtoplay.html: 
Página donde se encuentra la información para jugar y el objetivo.

### about.html: 
Página dónde se encuentra información técnica.

### js.js:
Javascript donde está el funcionamiento de la página y el movimiento de la nave. Este js contiene muchos cambios de la nueva versión, por este orden:

-> Código para la caída automática de la nave.
-> Código para activar y desactivar el motor de la nave pulsando cualquier botón.
-> Dificultad del juego.

### d.css:
Versión de estilos css para escritorios con JQuerry. Acepta dispositivos con pantallas de 961px de ancho mínimo.
### m.css: 
Versión de estilos css para móviles gracias al JQuerry. Acepta dispositivos con pantallas de 960px de ancho máximo.
