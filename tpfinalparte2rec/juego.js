class Juego {
    constructor() {
        
        this.imagenInicio = loadImage("data/inicio.png");
        this.imagenCreditos = loadImage("data/creditos.png");
        this.imagenInstrucciones = loadImage("data/instrucciones.png");
        this.imagenFondo = loadImage("data/fondo.png");
        this.imagenPlato = loadImage("data/plato.png");
        this.imagenPerdiste = loadImage("data/perdiste.png");
        this.imagenGanaste = loadImage("data/ganaste.png");
        this.musica = loadSound("data/musica.mp3");

        
        this.estado = new Estado(10, width, height); 
        this.jugador = new Jugador(width, height, this.imagenPlato);
        this.panqueques = new Panqueques(width);

    
        this.pantalla = new Pantalla(
            width, height, 
            this.imagenInicio, this.imagenCreditos, this.imagenInstrucciones, 
            this.imagenFondo, this.imagenPerdiste, this.imagenGanaste,
            this.estado, this.jugador, this.panqueques, this.musica
        );
        
        // Inicializar el juego
        this.estado.estadoJuego = 'INICIO';
        this.panqueques.reiniciar();
    }
    
    
    dibujar() {
        
        if (this.estado.estadoJuego === 'JUGANDO') {
            this.jugador.Moverplato();
            this.panqueques.manejarCaida();
            
            this.panqueques.verificarColision(this.jugador.x, this.estado, this.jugador);
        }
        
        
        this.pantalla.dibujar(); 
    }

    teclaPresionada() {
        if (this.estado.estadoJuego === 'CREDITOS') {
            this.estado.estadoJuego = 'INICIO';
            this.pantalla.ocultarTodos(); 
        }
    }
}
