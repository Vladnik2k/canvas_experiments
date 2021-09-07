const cameraZPositionStart = 300;
const cameraZPositionFinish = cameraZPositionStart / 3;
const speedSlow = 1.8;

const blockSize = 30;
const smallBlockIncreaseSpeed = 0.3 / speedSlow;
const smallBlockKoefDelay = 2 * speedSlow;
const white = 0xffffff;
const black = 0x000000;

const rows = 8;
const columns = 16;

interfaceElements = [
    document.getElementById(statsCanvasId),
];
