class Estado {
    
   constructor(maxPanqueques, width, height) {
        this.MAX_PANQUEQUES = maxPanqueques;
        this.estadoJuego = 'JUGANDO';
        this.pilaPanqueques = []; // Arreglo de strings (colores)
        this.alturaTotal = 0;
        this.jugadorY = height - 30;
    }

    reset() {
        this.pilaPanqueques = [];
        this.estadoJuego = 'JUGANDO';
        this.alturaTotal = 0;
    }

       apilar(color) {
        this.pilaPanqueques.push(color); 
   
        this.alturaTotal += panqueques.alto;

        if (this.pilaPanqueques.length >= this.MAX_PANQUEQUES) {
            this.estadoJuego = 'GANADO';
        }
    }



    perder() {
        this.estadoJuego = 'PERDIDO';
    }

    ganar() {
        this.estadoJuego = 'GANADO';
    }
}
