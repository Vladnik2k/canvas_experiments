class Bird {
    position;
    movement;
    size;
    points;
    imageNumber;

    distance;
    nearestObstacle;
    obstacleForPoints;

    brain;

    constructor(brain = null) {
        this.generateStartValues();
        if (brain) {
            this.brain = brain.copy();
        } else if (mashingLearning) {
            this.brain = new NeuralNetwork(3, 8, 2);
        }
    }

    generateStartValues() {
        this.position = { x: leftMargin, y: canvas.height / 2 };
        this.movement = { x: 0, y: -jumpForce };
        this.size = { width: birdWidth, height: birdHeight };
        this.points = 0;
        this.nearestObstacle = null;
        this.imageNumber = 0;
        this.distance = 0;
    }

    move() {
        this.movement.y = Math.min(this.movement.y + gravity, maxFallingSpeed);
        this.position.y += this.movement.y;

        this.distance++;
    }

    draw() {
        ctx.drawImage(images[Math.floor(this.imageNumber) % images.length], this.position.x, this.position.y, this.size.width, this.size.height);
        this.imageNumber += 0.5;
    }

    jump() {
        this.movement.y = -jumpForce;
    }

    setNearestObstacle(obstacles) {
        this.nearestObstacle = obstacles.filter(obstacle => obstacle.positionX + obstacle.width > this.position.x)[0];

        const nearestObstacleForPoints = obstacles.filter(obstacle => obstacle.positionX + obstacle.width / 2 > this.position.x + this.size.width)[0];
        if (nearestObstacleForPoints !== this.obstacleForPoints) {
            this.obstacleForPoints ? this.points++ : null;
            this.obstacleForPoints = nearestObstacleForPoints;

            bestScore = Math.max(bestScore, this.points);
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

    think() {
        const inputs = [
            (this.nearestObstacle.windowY + obstacleWindowHeight / 2 - this.position.y) / canvas.height,
            (this.nearestObstacle.positionX - this.position.x - this.size.width) / obstacleDistanceBetween,
            this.movement.y / maxFallingSpeed,
        ];

        const result = this.brain.predict(inputs);
        result[0] > result[1] ? this.jump() : null;
    }
}
