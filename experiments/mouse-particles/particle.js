class Particle {
    position;
    size;
    movement;
    color;

    constructor(position, color) {
        this.position = { x: position.x, y: position.y };
        this.size = Math.random() * maxSize;
        this.movement = { x: Math.random() * maxSpeed - maxSpeed / 2, y: Math.random() * maxSpeed - maxSpeed / 2 };
        this.color = color;
    }

    move() {
        this.position = { x: this.position.x + this.movement.x, y: this.position.y + this.movement.y };
        this.size = Math.max(this.size - 0.1, 0);
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }

}
