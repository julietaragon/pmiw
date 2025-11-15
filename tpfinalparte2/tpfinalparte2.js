//https://youtu.be/E8S2xxmDC94?si=hEvFYp9xABv9zPOA
//Aragon Julieta 118959/8 Aylen Bustamante 118978/1 
let estado;
let jugador;
let panqueques;
let pantalla;
//img
let imagenInicio;
let imagenCreditos;
let imagenInstrucciones;
let imagenFondo;
let imagenPlato;

let musica;

function preload() {
  imagenInicio = loadImage("data/inicio.png");
  imagenCreditos = loadImage("data/creditos.png");
  imagenInstrucciones = loadImage("data/instrucciones.png");
  imagenFondo = loadImage("data/fondo.png");
  imagenPlato = loadImage("data/plato.png");
  imagenPerdiste = loadImage("data/perdiste.png");
  imagenGanaste = loadImage("data/ganaste.png");

  musica = loadSound("data/musica.mp3");
}

function setup() {
  createCanvas(600, 400);
  rectMode(CENTER);

  estado = new Estado(10, width, height);
  estado.estadoJuego = 'INICIO';

  jugador = new Jugador(width, height, imagenPlato);
  panqueques = new Panqueques(width);
  pantalla = new Pantalla(width, height, imagenInicio, imagenCreditos, imagenInstrucciones, imagenFondo, imagenPerdiste, imagenGanaste);



  panqueques.reiniciar();
}

function draw() {
  if (estado.estadoJuego === 'JUGANDO') {
    jugador.Moverplato();
    panqueques.manejarCaida();
    panqueques.verificarColision(jugador.x);
  }

  pantalla.dibujar();
}

function keyPressed() {
  if (estado.estadoJuego === 'CREDITOS') {
    estado.estadoJuego = 'INICIO';
  }
}
