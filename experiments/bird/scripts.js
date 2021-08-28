let birds = [];
let killedBirds = [];
let obstacles = [];
let bestScore = 0;
let generation = 0;

window.addEventListener('keypress', (event) => {
    if (event.code === jumpKey && !machineLearning) {
        birds[0].jump();
    }
});

if (!machineLearning) {
    document.getElementById('generation-label').classList.add('hidden');
}

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
    document.getElementById('bestScore').innerText = `${bestScore}`;
    if (machineLearning) {
        document.getElementById('generation').innerText = `${generation}`;
    }
}

function nextBirdsGeneration() {
    calculateFitness(killedBirds);

    birds = [];
    for (let i = 0; i < numberOfBirds; i++) {
        birds.push(pickOne(killedBirds));
    }
}

function start() {
    generateObstacles();
    if (killedBirds.length) {
        machineLearning ? nextBirdsGeneration() : generateBirds();
    } else {
        generateBirds();
    }
    generation++;
    showScore();
    killedBirds = [];
}

function animate() {
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    changeObstacles();

    for (let i = 0; i < birds.length; i++) {
        birds[i].move();
        birds[i].draw();
        birds[i].setNearestObstacle(obstacles);

        if (machineLearning) {
            birds[i].think();
        }
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
        this.start();
    }
    stats.update();
    requestAnimationFrame(animate);
}

start();
animate();
