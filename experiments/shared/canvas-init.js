const canvas = document.getElementById('canvas');
const ctx = canvas ? canvas.getContext('2d', { alpha: false }) : null;
const centerCanvas = { x: 0, y: 0 };

const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    centerCanvas.x = Math.floor(canvas.width / 2);
    centerCanvas.y = Math.floor(canvas.height / 2);
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();
