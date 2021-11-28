class Player {
    position;
    width;
    height;
    color;

    constructor(position, size) {
        this.position = { x: position.x, y: position.y };
        this.width = size;
        this.height = size;
        this.color = playerColor;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}
