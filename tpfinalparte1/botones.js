function crearBotones() {
    
    //Botón avance
    boton = createButton("▶");
    boton.position(width - 120, height - 60);
    boton.size(100,40);
    boton.style("color", "white");
    boton.style("background-color", "rgba(255, 0, 0, 0.5)");
    boton.mousePressed(avanzarHistoria); 
    boton.show();
    
  botonCreditos = createButton("Créditos");
  botonCreditos.position(width/2 - 280, height - 60);
  botonCreditos.size(100, 40);
  botonCreditos.style("color", "white");
  botonCreditos.style("background-color", "rgba(255, 170, 185, 0.8)");
  botonCreditos.mousePressed(() => {
    estado = 19;
    indice = 19;
    ocultarBotonesEspeciales();
    boton.show();
  });
  botonCreditos.hide(); //lo ocultás hasta que haga falta
    
    //Botón caramelo (En estado 4)
    botonUno = createButton("CARAMELO");
    botonUno.position(width/2 - 100, height - 60);
    botonUno.size(100,40);
    botonUno.style("color", "white");
    botonUno.style("background-color", "rgba(255, 0, 0, 0.5)");
    botonUno.mousePressed(() => {
        //SALTO a la imagen 14 (Ruta Caramelo)
        estado = 14;
        indice = 14;
        ocultarBotonesEspeciales();
        boton.show();
    });
    botonUno.hide();

    //Botón manteca (En estado 4)
    botonDos = createButton("MANTECA");
    botonDos.position(width/2 + 10, height - 60);
    botonDos.size(100,40);
    botonDos.style("color", "white");
    botonDos.style("background-color", "rgba(255, 0, 0, 0.5)");
    botonDos.mousePressed(() => {
        //inicia la rama en la imagen 5
        estado = 5;
        indice = 5;
        ocultarBotonesEspeciales();
        boton.show();
    });
    botonDos.hide();
    
    //Botón harina izquierda (En estado 7)
    botonTres = createButton("HARINA");
    botonTres.position(width/2 - 100, height - 60);
    botonTres.size(100,40);
    botonTres.style("color", "black");
    botonTres.style("background-color", "rgba(204, 163, 61, 0.9)");
    botonTres.mousePressed(() => {
        //a la 8
        estado = 8;
        indice = 8;
        ocultarBotonesEspeciales();
        boton.show();
    });
    botonTres.hide();
    
    //Botón harina derecha (En estado 7)
    botonCuatro = createButton("HARINA");
    botonCuatro.position(width/2 + 10, height - 60);
    botonCuatro.size(100,40);
    botonCuatro.style("color", "white");
    botonCuatro.style("background-color", "rgba(255, 0, 0, 0.5)");
    botonCuatro.mousePressed(() => {
        //a la 8
        estado = 8;
        indice = 8;
        ocultarBotonesEspeciales();
        boton.show();
    });
    botonCuatro.hide();
    
    //Botón dulce izquierda (En estado 10)
    botonCinco = createButton("DULCE");
    botonCinco.position(width/2 - 100, height - 60);
    botonCinco.size(100,40);
    botonCinco.style("color", "white");
    botonCinco.style("background-color", "rgba(204, 163, 61, 0.9)");
    botonCinco.mousePressed(() => {
        //primero voy a 11
        estado = 11;
        indice = 11;
        caminoDulce = 1; //marca que fue el izquierdo
        ocultarBotonesEspeciales();
        boton.show();
    });
    botonCinco.hide();

    //Botón dulce derecha (En estado 10)
    botonSeis = createButton("DULCE");
    botonSeis.position(width/2 + 10, height - 60);
    botonSeis.size(100,40);
    botonSeis.style("color", "white");
    botonSeis.style("background-color", "rgba(235, 0, 0, 0.5)");
    botonSeis.mousePressed(() => {
        //primero voy a 11
        estado = 11;
        indice = 11;
        caminoDulce = 2; // marca que fue el derecho
        ocultarBotonesEspeciales();
        boton.show();
    });
    botonSeis.hide();

  botonSiete = createButton("EXPERIMENTO");
    botonSiete.position(width/2 - 100, height - 60);
    botonSiete.size(106,40);
    botonSiete.style("color", "white");
    botonSiete.style("background-color", "rgba(255, 0, 0, 0.5)"); 
    botonSiete.mousePressed(() => {
        //Salta a la imagen 17
        estado = 17;
        indice = 17;
        ocultarBotonesEspeciales();
        boton.show();
    });
    botonSiete.hide();
}


function ocultarBotonesEspeciales() {
    botonUno.hide();
    botonDos.hide();
    botonTres.hide();
    botonCuatro.hide();
    botonCinco.hide();
    botonSeis.hide();
    botonSiete.hide();
    botonCreditos.hide();
}
