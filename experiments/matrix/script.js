let symbols = [];

function generate() {
    for (let i = 0; i < numberOfSymbolsInScreen; i++) {
        symbols.push(new Symbol(randomYPosition()));
    }
}

function animation() {
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    symbols.forEach(symbol => {
        if (symbol.y > canvas.height) {
            symbol.generateStartValues();
        }

        symbol.move();
        symbol.draw();
    });

    stats.update();
    requestAnimationFrame(animation);
}

generate();
animation();
