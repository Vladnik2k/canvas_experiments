class Obstacle {
    color;
    positionX;
    windowY;
    width;
    height;

    constructor(positionX) {
        this.generateStartValues(positionX);
    }

    generateStartValues(positionX) {
        this.color = obstacleColor;
        this.positionX = positionX;
        this.width = obstacleWidth;
        this.windowY = Math.random() * (canvas.height - obstacleWindowHeight);
    }

    move() {
        this.positionX -= obstacleSpeed;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.positionX, 0, this.width, this.windowY);
        ctx.fillRect(this.positionX, this.windowY + obstacleWindowHeight, this.width, canvas.height);
    }
}
