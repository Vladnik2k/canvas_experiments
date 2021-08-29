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
const ctx = canvas.getContext('2d', { alpha: false });
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

// keyboard

let isInterfaceClosed = false;
const closeAllKeyCode = 'Escape';
let interfaceElements = [];

window.addEventListener('keydown', ($event) => {
    if ($event.code === closeAllKeyCode) {
        isInterfaceClosed = !isInterfaceClosed;
        interfaceElements.forEach(hideOrShowElement);
    }
});

function hideOrShowElement(element) {
    isInterfaceClosed ? element.classList.add('hidden') : element.classList.remove('hidden');
}

// range

function initRange(id, min, max, value, func) {
    document.getElementById(id).min = min;
    document.getElementById(id).max = max;
    document.getElementById(id).value = value;

    document.getElementById(id).addEventListener('input', ($event) => {
        func(+$event.target.value);
    });
}

// tensorflow lib

if ((typeof tf) !== 'undefined') { tf.setBackend('cpu'); }

// p5 lib

if ((typeof p5) !== 'undefined') { new p5(); }
