 function mostrarTexto(texto, x, y) {
  push();
  fill(0, 0, 0, 150);
  let anchoCuadro = 600;
  let altoCuadro = 120;
  rectMode(CENTER);
  rect(x, altoCuadro/2 + 20, anchoCuadro, altoCuadro, 20);

  fill(255);
  textSize(20);
  textAlign(LEFT, TOP);

  let limiteTexto = 540;
  let margenX = 300;
  let margenY = 20;

  text(
    texto, 
    x - anchoCuadro/2 + margenX, 
    20 + margenY, 
    limiteTexto
  );
  pop();
}
