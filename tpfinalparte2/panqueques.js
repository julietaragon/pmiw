class Panqueques {

    constructor(width) {
        this.ancho = 80;
        this.alto = 10;
        this.velocidad = 3;
        this.x = 0;
        this.y = 0;
        this.width = width;
        this.tipo = 'NORMAL'; 
        this.color = 0; 
        
        this.reiniciar();
    }
   reiniciar() {
        this.x = random(this.ancho / 2, this.width - this.ancho / 2);
        this.y = -this.alto;
        this.velocidad += 0.05;

        // las probabilidades de q sea rojo
        if (random() < 0.20) {
            this.tipo = 'ROJO'; 
            
            this.color = color(255, 50, 50).toString('#rrggbb');
        } else {
            this.tipo = 'NORMAL';
           this.color = color(random(200, 255), random(100, 150), 50).toString('#rrggbb');
        }
    }
    
    mostrar() {
        noStroke();
        
        fill(this.color); 
        ellipse(this.x, this.y, this.ancho, this.alto);
    }

    manejarCaida() {
        this.y += this.velocidad;
    }

    verificarColision(jugadorX) {
        
        let alturaTorre = estado.pilaPanqueques.length * this.alto;
        let alturaColisionY = jugador.y - jugador.alto / 2 - alturaTorre;

        if (this.y >= alturaColisionY) {
            if (this.x > jugadorX - this.ancho / 2 && this.x < jugadorX + this.ancho / 2) {
                // torre ganador
              if (this.tipo === 'ROJO') { 
            estado.perder();
        } else {
            
            estado.apilar(this.color); 
            this.reiniciar();
        }
        return true;
    
            } else {
             
                this.reiniciar(); 
                return false;
            }
        }
        
        
        if (this.y > height + this.alto) {
            this.reiniciar();
            return false;
        }
        return false;
    }
}
