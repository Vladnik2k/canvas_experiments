// init stats

const statsCanvasId = 'stats_canvas';
function createStats() {
    const stats = new Stats();
    stats.setMode(0);

    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0';
    stats.domElement.style.top = '0';
    stats.domElement.id = statsCanvasId;

    return stats;
}

const stats = createStats();
document.body.appendChild(stats.domElement);

// init canvas

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const centerCanvas = { x: 0, y: 0 };

const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    centerCanvas.x = Math.floor(canvas.width / 2);
    centerCanvas.y = Math.floor(canvas.height / 2);
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// mouse

const mouse = { x: 0, y: 0 };

const setMouse = ($event) => {
    mouse.x = $event.x;
    mouse.y = $event.y;
}
window.addEventListener('mousemove', setMouse);
