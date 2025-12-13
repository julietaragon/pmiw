class Pantalla {
    
   constructor(width, height, imagenInicio, imagenCreditos, imagenInstrucciones, imagenFondo, imagenPerdiste, imagenGanaste, estadoRef, jugadorRef, panquequesRef, musicaRef) {
        this.width = width;
        this.height = height;

        this.imagenInicio = imagenInicio;
        this.imagenCreditos = imagenCreditos;
        this.imagenInstrucciones = imagenInstrucciones;
        this.imagenFondo = imagenFondo;
        this.imagenPerdiste = imagenPerdiste;
        this.imagenGanaste = imagenGanaste;

        this.estado = estadoRef;
        this.jugador = jugadorRef;
        this.panqueques = panquequesRef;
        this.musica = musicaRef;
        
        this.botonJugar = createButton('๋ ࣭ ⭑JUGAR⋆˚꩜｡');
        this.estilizarBoton(this.botonJugar);
        this.botonJugar.mousePressed(() => {
            this.estado.estadoJuego = 'INSTRUCCIONES';
            this.ocultarTodos();
        });
        
        this.botonCreditos = createButton('CRÉDITOS⋆ 𐙚 ̊.');
        this.estilizarBoton(this.botonCreditos);
        this.botonCreditos.mousePressed(() => {
            this.estado.estadoJuego = 'CREDITOS';
            this.ocultarTodos();
        });

        this.botonComenzar = createButton('⚊ • . ˚COMENZAR ᯓ★ ˖ ۫ ִ');
        this.estilizarBoton(this.botonComenzar);
        this.botonComenzar.mousePressed(() => {
            this.estado.estadoJuego = 'JUGANDO';
            this.ocultarTodos();
            if (!this.musica.isPlaying()) {
                this.musica.loop(); 
            }
        });
        
        this.botonVolver = createButton('╰┈➤VOLVER⋆˚꩜｡');
        this.estilizarBoton(this.botonVolver);
        this.botonVolver.mousePressed(() => {
            this.estado.estadoJuego = 'INICIO';
            this.ocultarTodos();
        });
        
        this.botonReiniciar = this.crearBotonReiniciar();
        this.estilizarBoton(this.botonReiniciar);
        
        this.ocultarTodos();
    }
    
    estilizarBoton(boton) {
        boton.style("padding", "1px 10px");
        boton.style("font-size", "16px");
        boton.style("border-radius", "20px");
        boton.style("background", "rgba(255, 0, 0, 0.5)");
        boton.style("color", "white");
        boton.style("border", "2px solid rgba(52, 152, 191, 1)");
        boton.style("font-weight", "bold");
        boton.style("cursor", "pointer");
    }

    ocultarTodos() {
        this.botonJugar.hide();
        this.botonCreditos.hide();
        this.botonComenzar.hide();
        this.botonVolver.hide();
        this.botonReiniciar.hide();
    }

    crearBotonReiniciar() {
        let boton = createButton('── Reiniciar Juego! 𓂃 ࣪˖ ִֶָ');
        boton.position(this.width / 2 - 90, this.height / 2 + 50);
        boton.mousePressed(() => this.resetGame());
        boton.hide();
        return boton;
    }

    resetGame() {
        this.estado.reset();
        this.panqueques.velocidad = 3;
        this.panqueques.reiniciar();
        this.botonReiniciar.hide();
    
        if (!this.musica.isPlaying()) {
            this.musica.loop();
        }
    }

    mostrarPantallaInicio() {
        background(220);
        if (this.imagenInicio) {
            imageMode(CENTER);
            image(this.imagenInicio, this.width / 2, this.height / 2, this.width, this.height);
        }

        this.botonJugar.show();
        this.botonJugar.position(this.width / 2 - 60, this.height / 2 + 60);

        this.botonCreditos.show();
        this.botonCreditos.position(30, this.height - 60);
    }

    mostrarInstrucciones() {
        background(240);
        if (this.imagenInstrucciones) {
            imageMode(CENTER);
            image(this.imagenInstrucciones, this.width / 2, this.height / 2, this.width, this.height);
        }

        this.dibujarCuadroInferior();
        
        fill(255); 
        textSize(16);
        textAlign(CENTER, CENTER);
        
        text(
             "Usá las flechas para mover el plato y atrapá los panqueques\n" +
             "𖦹 Evitá los panqueques rojos",
             this.width / 2, 
             this.height -170
        );

        
        this.botonComenzar.show();
        this.botonComenzar.position(this.width / 2 - 95, this.height - 80);
    }

    mostrarCreditos() {
        background(0);
        imageMode(CENTER);
        if (this.imagenCreditos) {
            image(this.imagenCreditos, this.width / 2, this.height / 2, this.width, this.height);
        }
        
        fill(255);
        textSize(20);
        textAlign(LEFT, TOP);
        text(
             "Hecho con ❤ por:\n" +
             "Aylen Bustamante 118978/1\n"+
             "Aragón Julieta 118959/8",
             this.width / 10, this.height / 10 
        );
        
        this.botonVolver.show();
        this.botonVolver.position(this.width / 2 - 40, this.height - 80);
    }
    
    dibujarCuadroInferior() {
        fill(34, 139, 34);    
        rectMode(CENTER);
        
        let ancho = this.width * 0.80;    
        let alto = 120;
        let x = this.width / 2;
        let y = this.height - 160;
        
        rect(x, y, ancho, alto, 20);
    }

    
    dibujar() {
        if (this.estado.estadoJuego === 'INICIO') {
            this.mostrarPantallaInicio();
            return;
        }

        if (this.estado.estadoJuego === 'INSTRUCCIONES') {
            this.mostrarInstrucciones();
            return;
        }

        if (this.estado.estadoJuego === 'CREDITOS') {
            this.mostrarCreditos();
            return;
        }

      
        if (this.imagenFondo) {
            imageMode(CENTER); 
            image(this.imagenFondo, this.width / 2, this.height / 2, this.width, this.height);
        } 
    
        this.dibujarJugador();
        this.dibujarTorreApilada();
        this.dibujarPanquequeCayendo();
        this.dibujarContador();

        if (this.estado.estadoJuego === 'GANADO') {
            if (this.musica.isPlaying()) this.musica.stop();
            this.PantallaGanaste();
            this.botonReiniciar.show();
        } else if (this.estado.estadoJuego === 'PERDIDO') {
            if (this.musica.isPlaying()) this.musica.stop();
            this.PantallaPerdiste();
            this.botonReiniciar.show();
        } else {
            this.botonReiniciar.hide();
        }
    }
    
dibujarJugador() {
    
    if (this.jugador.imagenPlato) { 
        imageMode(CENTER); 
        image(this.jugador.imagenPlato, this.jugador.x, this.jugador.y, this.jugador.ancho, this.jugador.alto);
   
     }
}

   dibujarTorreApilada() {
    let xPos = this.jugador.x;
    let yBase = this.jugador.y - this.jugador.alto / 2;
    
    let altoPanqueque = this.panqueques.alto; 
    let anchoPanqueque = this.panqueques.ancho;

    for (let i = 0; i < this.estado.pilaPanqueques.length; i++) {
        
        let colorNum = this.estado.pilaPanqueques[i]; 
        let yPosSuperior = yBase - (i * altoPanqueque); 
        
        fill(colorNum); 
        noStroke();
        ellipse(
            xPos, 
            yPosSuperior - altoPanqueque / 2, 
            anchoPanqueque, 
            altoPanqueque
        );
    }
}


    dibujarPanquequeCayendo() {
        if (this.panqueques.color) {
            fill(this.panqueques.color);
            ellipse(this.panqueques.x, this.panqueques.y, this.panqueques.ancho, this.panqueques.alto);
        }
    }

    dibujarContador() {
        fill(255); 
        textStyle(BOLD);
        textSize(24);
        textAlign(LEFT);
        
        stroke(0);
        strokeWeight(3);
        text("Panqueques: " + this.estado.pilaPanqueques.length + " / " + this.estado.MAX_PANQUEQUES, 10, 30);
        
        noStroke();
        textStyle(NORMAL); 
    }

    PantallaGanaste() {
       if (this.imagenGanaste)
       imageMode(CENTER);
            image(this.imagenGanaste, this.width / 2, this.height / 2, this.width, this.height);
        fill(255, 255, 0);
        textSize(20);
        textAlign(CENTER, CENTER);
        text("¡GANASTE! Juntaste todos tus panqueques!", this.width / 2, this.height / 2 - 20);
    }

    PantallaPerdiste() {
         if (this.imagenPerdiste)
         imageMode(CENTER);
            image(this.imagenPerdiste, this.width / 2, this.height / 2, this.width, this.height);
        fill(255, 50, 50);
        textSize(20);
        textAlign(CENTER, CENTER);
        text("¡PERDISTE! q lelo", this.width / 2, this.height / 2 - 20);
    }
}
