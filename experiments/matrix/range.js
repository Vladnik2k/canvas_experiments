function setBarWidth(number) {
    barWidth = number;

    for (let i = 0; i < symbols.length; i++) {
        if (symbols[i].numberOfColumn * barWidth > canvas.width) {
            symbols[i].generateStartValues(randomYPosition());
        }
    }
    document.getElementById(labelWidthName).innerText = barWidth;
}

function setNumberOfSymbols(number) {
    numberOfSymbolsInScreen = number;
    symbols = symbols.slice(0, numberOfSymbolsInScreen);

    for (let i = 0; i < numberOfSymbolsInScreen; i++) {
        if (!symbols[i]) {
            symbols[i] = new Symbol(randomYPosition());
        }
    }

    document.getElementById(labelNumberName).innerText = numberOfSymbolsInScreen;
}

document.getElementById(inputRangeWidthName).addEventListener('input', ($event) => {
    setBarWidth(+$event.target.value);
});

document.getElementById(inputRangeNumberName).addEventListener('input', ($event) => {
    setNumberOfSymbols(+$event.target.value);
});

document.getElementById(inputRangeNumberName).min = minNumberOfSymbols;
document.getElementById(inputRangeNumberName).max = maxNumberOfSymbols;
document.getElementById(inputRangeNumberName).value = numberOfSymbolsInScreen;

document.getElementById(inputRangeWidthName).min = minBarWidth;
document.getElementById(inputRangeWidthName).max = maxBarWidth;
document.getElementById(inputRangeWidthName).value = barWidth;

setNumberOfSymbols(+document.getElementById(inputRangeNumberName).value);
setBarWidth(+document.getElementById(inputRangeWidthName).value);
