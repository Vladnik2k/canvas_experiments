class Bird {
    position;
    movement;
    size;
    points;
    nearestObstacle;

    imageNumber;

    constructor() {
        this.position = { x: leftMargin, y: canvas.height / 2 };
        this.movement = { x: 0, y: -10 };
        this.size = { width: birdWidth, height: birdHeight };
        this.points = 0;
        this.nearestObstacle = null;
        this.imageNumber = 0;
    }

    move() {
        this.movement.y = Math.min(this.movement.y + gravity, maxFallingSpeed);
        this.position.y += this.movement.y;
    }

    draw() {
        ctx.drawImage(images[Math.floor(this.imageNumber) % images.length], this.position.x, this.position.y, this.size.width, this.size.height);
        this.imageNumber += 0.5;
    }

    jump() {
        this.movement.y = -jumpForce;
    }

    setNearestObstacle(obstacles) {
        const nearestObstacle = obstacles.filter(obstacle => obstacle.positionX + obstacle.width > this.position.x)[0];
        if (nearestObstacle !== this.nearestObstacle) {
            this.nearestObstacle ? this.points++ : null;
            this.nearestObstacle = nearestObstacle;
        }
    }

    isHit() {
        if (this.position.y + this.size.height >= canvas.height || this.position.y <= 0) {
            return true;
        } else if (this.position.x + this.size.width < this.nearestObstacle.positionX ||
            this.position.x > this.nearestObstacle.positionX + obstacleWidth) { // check x
            return false;
        } else if (this.position.y > this.nearestObstacle.windowY &&
            this.position.y + this.size.height < this.nearestObstacle.windowY + obstacleWindowHeight) { // check is in window
            return false;
        }

        return true;
    }
}
