class Bird {
    color;
    position;
    movement;
    radius;
    points;
    nearestObstacle;

    constructor() {
        this.color = birdColor;
        this.position = { x: leftMargin, y: canvas.height / 2 };
        this.movement = { x: 0, y: -10 };
        this.radius = birdRadius;
        this.points = 0;
        this.nearestObstacle = null;
    }

    move() {
        this.movement.y = Math.min(this.movement.y + gravity, maxFallingSpeed);
        this.position.y += this.movement.y;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }

    jump() {
        this.movement.y = -jumpForce;
    }

    setNearestObstacle(obstacles) {
        const nearestObstacle = obstacles.filter(obstacle => obstacle.positionX + obstacle.width > this.position.x - this.radius)[0];
        if (nearestObstacle !== this.nearestObstacle) {
            this.nearestObstacle ? this.points++ : null;
            this.nearestObstacle = nearestObstacle;
        }
    }

    isHit() {
        if (this.position.x + this.radius < this.nearestObstacle.positionX ||
            this.position.x - this.radius > this.nearestObstacle.positionX + obstacleWidth) { // check x
            return false;
        } else if (this.position.y - this.radius > this.nearestObstacle.windowY &&
            this.position.y + this.radius < this.nearestObstacle.windowY + obstacleWindowHeight) { // check is in window
            return false;
        }

        return true;
    }
}
