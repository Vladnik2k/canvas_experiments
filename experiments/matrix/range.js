const inputRangeNumberName = 'range_number';
const inputRangeWidthName = 'range_size';
const labelNumberName = 'range_number_label';
const labelWidthName = 'range_size_label';

function setBarWidth(number) {
    barWidth = number;

    for (let i = 0; i < allSymbols.length; i++) {
        allSymbols[i].generateStartValues(randomYPosition());
    }
    document.getElementById(labelWidthName).innerText = barWidth;
}

function setNumberOfSymbols(number) {
    numberOfSymbolsInScreen = number;
    symbolsToShow = allSymbols.slice(0, numberOfSymbolsInScreen);
    document.getElementById(labelNumberName).innerText = numberOfSymbolsInScreen;
}

initRange(inputRangeNumberName, minNumberOfSymbols, maxNumberOfSymbols, numberOfSymbolsInScreen, setNumberOfSymbols);
initRange(inputRangeWidthName, minBarWidth, maxBarWidth, barWidth, setBarWidth);
setNumberOfSymbols(+document.getElementById(inputRangeNumberName).value);
setBarWidth(+document.getElementById(inputRangeWidthName).value);
