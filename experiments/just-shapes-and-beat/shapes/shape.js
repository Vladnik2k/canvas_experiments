class Shape {
    position;
    movementVector;
    color;
    degreeSpin;
    degreeSpinMovement;

    constructor(position, movementVector, degreeSpin, degreeSpinMovement, color) {
        this.position = { x: position.x, y: position.y };
        this.movementVector = { x: movementVector.x, y: movementVector.y };
        this.degreeSpin = degreeSpin;
        this.degreeSpinMovement = degreeSpinMovement;
        this.color = color;
    }
}

function drawBall(position, size) {
    ctx.arc(position.x, position.y, size, 0, Math.PI * 2);
}

// http://jsfiddle.net/r9a52Lxw/
function drawStar(center, spikes, outerRadius, innerRadius) {
    let rot = Math.PI / 2 * 3;
    let x = center.x;
    let y = center.y;
    let step = Math.PI / spikes;

    ctx.moveTo(center.x, center.y - outerRadius);

    for (let i = 0; i < spikes; i++) {
        x = center.x + Math.cos(rot) * outerRadius;
        y = center.y + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y)
        rot += step

        x = center.x + Math.cos(rot) * innerRadius;
        y = center.y + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y)
        rot += step
    }

    ctx.lineTo(center.x, center.y - outerRadius);
    ctx.closePath();
}
