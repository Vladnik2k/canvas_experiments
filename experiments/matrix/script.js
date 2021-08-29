let allSymbols = [];
let symbolsToShow = [];

function generate() {
    for (let i = 0; i < maxNumberOfSymbols; i++) {
        allSymbols.push(new Symbol(randomYPosition()));
    }

    symbolsToShow = allSymbols.slice(0, numberOfSymbolsInScreen);
}

function getMapWithColors() {
    const map = new Map();
    for (let i = 0; i < symbolsToShow.length; i++) {
        const array = map.get(symbolsToShow[i].color) || [];
        array.push(symbolsToShow[i]);
        map.set(symbolsToShow[i].color, array);
    }

    return map;
}

function showSymbolsPerColor(color, symbols) {
    ctx.fillStyle = color;
    for (let i = 0; i < symbols.length; i++) {
        if (symbols[i].y > canvas.height) {
            symbols[i].generateStartValues();
        }

        symbols[i].move();
        ctx.fillText(symbols[i].symbol, symbols[i].numberOfColumn * barWidth, symbols[i].y);
    }
}

function animation() {
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const map = getMapWithColors();

    ctx.font = `${barWidth}px serif`;
    Array.from(map.entries()).forEach(entry => showSymbolsPerColor(entry[0], entry[1]));

    stats.update();
    requestAnimationFrame(animation);
}

generate();
animation();
