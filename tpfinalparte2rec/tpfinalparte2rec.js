//Aragon Julieta 118959/8 Aylen Bustamante 118978/1 
let juego; 

function setup() {
  createCanvas(600, 400);
  rectMode(CENTER);

  juego = new Juego(); 
}

function draw() {
  
  juego.dibujar();
}

function keyPressed() {
  
  juego.teclaPresionada();
}
