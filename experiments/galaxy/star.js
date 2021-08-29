class Star {
    position;
    prevPosition;
    speed;

    constructor() {
        this.generateStartValues();
    }

    generateStartValues() {
        this.position = { x: Math.random() * canvas.width, y: Math.random() * canvas.height };
        this.prevPosition = { x: 0, y: 0 };
        this.speed = { x: 0, y: 0 };
    }

    move() {
        if (this.position.x > canvas.width || this.position.x < 0 || this.position.y > canvas.height || this.position.y < 0) {
            this.generateStartValues();
        }

        this.prevPosition = { x: this.position.x, y: this.position.y };
        this.position = { x: this.position.x + this.speed.x, y: this.position.y + this.speed.y };

        const moveVector = { x: (this.position.x - centerCanvas.x) / speedSlowKoef, y: (this.position.y - centerCanvas.y) / speedSlowKoef };
        this.speed = { x: speed / maxSpeed * moveVector.x, y: speed / maxSpeed * moveVector.y };
    }
}
