class Symbol {
    numberOfColumn;
    y;
    speed;
    color;
    symbol;

    constructor(y = startYPosition()) {
        this.generateStartValues(y);
    }

    generateStartValues(y = startYPosition()) {
        this.y = y;
        this.numberOfColumn = Math.floor(Math.random() * (canvas.width / barWidth));
        this.speed = Math.random() * (maxSpeed - minSpeed) + minSpeed;
        this.color = symbolColor(this.speed);
        this.symbol = allSymbols[Math.floor(Math.random() * allSymbols.length)];
    }

    draw() {
        ctx.font = `${barWidth}px serif`;
        ctx.fillStyle = this.color;
        ctx.fillText(this.symbol, this.numberOfColumn * barWidth, this.y);
    }

    move() {
        this.y += this.speed;
    }
}
