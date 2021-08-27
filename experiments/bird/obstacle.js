class Obstacle {
    positionX;
    windowY;
    width;
    height;

    constructor(positionX) {
        this.generateStartValues(positionX);
    }

    generateStartValues(positionX) {
        this.positionX = positionX;
        this.width = obstacleWidth;
        this.windowY = Math.random() * (canvas.height - obstacleWindowHeight);
    }

    move() {
        this.positionX -= obstacleSpeed;
    }

    draw() {
        ctx.drawImage(obstacleImage, this.positionX, 0, this.width, this.windowY);
        ctx.drawImage(obstacleImage, this.positionX, this.windowY + obstacleWindowHeight, this.width, canvas.height);
    }
}
