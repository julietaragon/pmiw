let imagen = [];
let dialogo;
let estado;
let indice;

// botones
let boton;
let botonUno; //Caramelo
let botonDos; //Manteca
let botonTres; //harina iz
let botonCuatro; //harina der 
let botonCinco; //jarab dulce iz (En estado 10)
let botonSeis; //jarab dulce der (En estado 10)
let botonSiete;//Boton Experimento
let botonCreditos;

let caminoDulce = 0;

// música
let musicaFondo;
let musicaEspecial;
let musicaIniciada = false;

function preload() {
  for (let i = 0; i < 20; i++) {
    imagen[i] = loadImage("data/imagen" + i + ".jpg");
  }
  dialogo = loadStrings("data/panqueques.txt");

  //canciones
  musicaFondo = loadSound("data/musicambiente.mp3");
  musicaEspecial = loadSound("data/panquequesfinalfeliz.mp3");
}

function setup() {
  createCanvas(640, 480);
  estado = 0;
  indice = 0;

  for (let i = 0; i < imagen.length; i++) {
    imagen[i].resize(640, 480);
  }

  crearBotones();
}

function draw() {
  background(200);

  // mostrar imagen correspondiente
  if (estado >= 0 && estado < imagen.length) {
    image(imagen[estado], 0, 0);
  }

  // control de música según estado
  if (musicaIniciada) {
    if (estado === 12) {
      if (!musicaEspecial.isPlaying()) {
        musicaFondo.stop();
        musicaEspecial.loop();
      }
    } else if (estado === 13 || estado === 18) {
      // en 13 y 18 silencio total
      musicaFondo.stop();
      musicaEspecial.stop();
    } else {
      // en todos los demás estados suena la música de fondo
      if (!musicaFondo.isPlaying()) {
        musicaEspecial.stop();
        musicaFondo.loop();
      }
    }
  }

  //textos/botones
  if (estado == 0) {
    
    botonCreditos.show();
  } else if (estado >= 1 && estado <= 3) {
    mostrarTexto(dialogo[indice], width / 2, height - 100);
    
  } else if (estado == 4) {
    mostrarTexto(dialogo[indice], width / 2, height - 100);
    boton.hide();
    botonUno.show(); //CARAMELO
    botonDos.show(); //MANTECA
    
  } else if (estado == 5) {
    
    //ruta manteca
  } else if (estado == 7) {
    mostrarTexto(dialogo[indice], width / 2, height - 100);
    boton.hide();
    botonTres.show();
    botonCuatro.show();
    
  } else if (estado == 6 || estado == 9 || estado == 12) {
    mostrarTexto(dialogo[indice], width / 2, height - 100);
    
  } else if (estado == 13) {
    mostrarTexto(dialogo[indice], width / 2, height - 100);
    botonCreditos.show();
    
  } else if (estado == 10) {
    mostrarTexto(dialogo[indice], width / 2, height - 100);
    boton.hide();
    botonCinco.show();
    botonSeis.show();
    
  } else if (estado == 14) {
    image(imagen[14], 0, 0);
    mostrarTexto(dialogo[indice], width / 2, height - 100);
    
  } else if (estado == 15) {
    image(imagen[15], 0, 0);
    mostrarTexto(dialogo[indice], width / 2, height - 100);
    
  } else if (estado == 16) {
    image(imagen[16], 0, 0);
    mostrarTexto(dialogo[indice], width / 2, height - 100);
    boton.hide(); 
    botonDos.show();   
    botonSiete.show(); 
    
  } else if (estado == 17) {
    image(imagen[17], 0, 0);
    mostrarTexto(dialogo[indice], width / 2, height - 100);
    
  } else if (estado == 18) {
    image(imagen[18], 0, 0);
    mostrarTexto(dialogo[indice], width / 2, height - 100);
    botonCreditos.show();
    
  } else if (estado == 19) {
    image(imagen[19], 0, 0);
    mostrarTexto(dialogo[indice], width / 2, height - 100);
    boton.show();
  }
}

function avanzarHistoria() {
  //arranca la musica 
  if (!musicaIniciada) {
    musicaFondo.loop();
    musicaIniciada = true;
  }

  if (estado === 11 && caminoDulce === 1) {
    estado = 12;
    indice = 12;
    caminoDulce = 0;
    
  } else if (estado === 11 && caminoDulce === 2) {
    estado = 13;
    indice = 13;
    caminoDulce = 0;
    
  } else if (estado === 12 || estado === 13 || estado === 18 || estado === 19) { 
    estado = 0;
    indice = 0;

    //vuelve a sonar la música de fondo
    musicaEspecial.stop();
    if (musicaIniciada && !musicaFondo.isPlaying()) {
      musicaFondo.loop();
    }
  } else {
    estado++;
    indice++;
  }

  if (estado >= imagen.length) estado = 0;
  if (indice >= dialogo.length) indice = 0;

  ocultarBotonesEspeciales();
  boton.show();
}
