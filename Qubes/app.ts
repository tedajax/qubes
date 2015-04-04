class App {
    game: Game;

    constructor() {
        this.game = new Game(640, 360);
    }
}

window.onload = () => {
    var app: App = new App();
};