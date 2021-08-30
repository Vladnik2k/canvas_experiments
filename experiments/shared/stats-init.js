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

