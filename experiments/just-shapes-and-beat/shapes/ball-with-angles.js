class BallWithAngles extends Shape {
    size;

    constructor(position, movementVector, size, degreeSpin = 0, degreeSpinMovement = 0, color = wavesColor) {
        super(position, movementVector, degreeSpin, degreeSpinMovement, color);
        this.size = size;
    }

    draw() {
        if (this.degreeSpinMovement || this.degreeSpin) {
            const center = { x: this.position.x, y: this.position.y };
            this.degreeSpin += this.degreeSpinMovement;

            ctx.save();

            ctx.translate(center.x, center.y);
            ctx.rotate(this.degreeSpin * Math.PI / 180);
            ctx.translate(-center.x, -center.y);

            this.displayShape();

            ctx.restore();
        } else {
            this.displayShape();
        }
    }

    move() {
        this.position.x += this.movementVector.x;
        this.position.y += this.movementVector.y;
    }

    displayShape() {
        ctx.fillStyle = this.color;
        ctx.beginPath();

        drawBall(this.position, this.size);
        drawStar(this.position, 8, this.size * 1.25, this.size * 0.75);

        ctx.fill();
    }
}
