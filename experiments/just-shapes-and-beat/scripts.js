const audio = document.getElementById('audio');
const fileInput = document.getElementById('file-input');
const startButton = document.getElementById('gameStart');

const audioContext = new AudioContext();
const audioSource = audioContext.createMediaElementSource(audio);
let analyzer = audioContext.createAnalyser();
audioSource.connect(analyzer);
analyzer.connect(audioContext.destination);
const pressedLetters = new Set();
let bufferLength;
let dataArray;
let player;

let dangerousShapes = [];
let warningShapes = [];

startButton.addEventListener('click', function () {
    startButton.style.visibility = 'hidden';
    audioContext.resume();
    audio.play();
    analyzer.fftSize = Math.pow(2, fftSizeMultiplier);
    player = new Player(centerCanvas, 20);

    bufferLength = analyzer.frequencyBinCount;
    dataArray = new Uint8Array(bufferLength);

    dangerousShapes.push(new BallWithAngles(centerCanvas, { x: 0, y: 0 }, 20, 0, 2));

    playerSetMovement();
    animate();
});

function animate() {
    resetCanvas();

    moveWarningShapes();
    moveDangerousShapes();

    movePlayer();
    player.draw();

    stats.update();
    requestAnimationFrame(animate);
}

function resetCanvas() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function playerSetMovement() {
    // ToDo tap W, S and after that D. D won't be in array
    window.addEventListener('keydown', ($event) => {
        if ($event.code === upKey || $event.code === downKey || $event.code === leftKey || $event.code === rightKey) {
            pressedLetters.add($event.code);
        }
    });

    window.addEventListener('keyup', ($event) => {
        pressedLetters.delete($event.code);
    });
}

function movePlayer() {
    pressedLetters.forEach(el => {
        if (el === upKey && !pressedLetters.has(downKey)) {
            player.position.y = Math.max(player.position.y - moveSpeed, 0);
        }

        if (el === downKey && !pressedLetters.has(upKey)) {
            player.position.y = Math.min(player.position.y + moveSpeed, canvas.height - player.height);
        }

        if (el === leftKey && !pressedLetters.has(rightKey)) {
            player.position.x = Math.max(player.position.x - moveSpeed, 0);
        }

        if (el === rightKey && !pressedLetters.has(leftKey)) {
            player.position.x = Math.min(player.position.x + moveSpeed, canvas.width - player.width);
        }
    });
}
function moveWarningShapes() {

}

function moveDangerousShapes() {
    for (let i = 0; i < dangerousShapes.length; i++) {
        dangerousShapes[i].move();
        dangerousShapes[i].draw();
    }
}
