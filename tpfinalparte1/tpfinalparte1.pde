function preload() {
  for (let i = 0; i < 27; i++) {
    imagen[i] = loadImage("data/imagen" + i + ".jpeg");
    
    function setup() {
  createCanvas(640, 480);
  for (let i = 0; i < 27; i++) {
    imagen[i].resize(640, 480);
  }
  estado = 0;
}

function draw() {
  background(200);
  cargarEstado(estado);

  fill(0, 0, 255); 
  textSize(20); 
  textAlign(LEFT); 
  
  if (estado < Textos.length && Textos[estado]) { 
    mostrarTexto(Textos[estado], width / 2, 120);
  }
}
;
