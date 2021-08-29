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
        this.symbol = allowedSymbols[Math.floor(Math.random() * allowedSymbols.length)];
    }

    move() {
        this.y += this.speed;
    }
}
