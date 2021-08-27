let birds = [];
let killedBirds = [];
let obstacles = [];

window.addEventListener('keypress', () => { birds[0].jump() });

function generateBirds() {
    birds = [];
    for (let i = 0; i < numberOfBirds; i++) {
        birds.push(new Bird());
    }
}

function generateObstacles() {
    obstacles = [];
    for (let i = 0, x = obstacleDistanceFromStart; i < obstacleNumber; i++) {
        obstacles.push(new Obstacle(x));
        x += obstacleWidth + obstacleDistanceBetween;
    }
}

function changeObstacles() {
    for (let i = 0; i < obstacles.length; i++) {
        obstacles[i].move();
        obstacles[i].draw();
    }

    const firstObstacle = obstacles[0];
    if (firstObstacle.positionX + firstObstacle.width <= 0) {
        const obstacle = obstacles.shift();
        obstacle.generateStartValues(obstacles[obstacles.length - 1].positionX + obstacleWidth + obstacleDistanceBetween);
        obstacles.push(obstacle);
    }
}

function showScore() {
    document.getElementById('score').innerText = `${birds[0].points}`;
}

function restart() {
    generateObstacles();
    generateBirds();
    showScore();
}

function animate() {
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    changeObstacles();

    for (let i = 0; i < birds.length; i++) {
        birds[i].move();
        birds[i].draw();
        birds[i].setNearestObstacle(obstacles);
    }

    showScore();

    for (let i = 0; i < birds.length; i++) {
        if (birds[i].isHit()) {
            killedBirds.push(birds[i]);
            birds = birds.filter(bird => bird !== birds[i]);
            i--;
        }
    }

    if (!birds.length) {
        this.restart();
    }
    stats.update();
    requestAnimationFrame(animate);
}

generateObstacles();
generateBirds();
showScore();
animate();
