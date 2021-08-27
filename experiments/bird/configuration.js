const backgroundColor = '#ffe8b6';

// bird
const gravity = 0.5;
const jumpForce = 10;
const maxFallingSpeed = 10;
const leftMargin = 75;
const birdWidth = 88;
const birdHeight = 50;

const images = [];
for (let i = 0; i < 11; i++) {
    const image = new Image(birdWidth, birdHeight);
    image.src = `./images/bird-animation/skeleton-animation_${i < 10 ? '0' : ''}${i}.png`;
    images.push(image);
}

// obstacle
const obstacleSpeed = 2;
const obstacleNumber = 20;
const obstacleDistanceFromStart = 400;
const obstacleWidth = 75;
const obstacleDistanceBetween = 200;
const obstacleWindowHeight = 200;

const obstacleImage = new Image(birdWidth, birdHeight);
obstacleImage.src = `./images/obstacle.png`;

let numberOfBirds = 1;
