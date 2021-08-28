const symbolColor = (speed) => `hsl(125, 50%, ${10 + 40 / 4 * speed}%)`;
const backgroundColor = 'rgba(0,0,0,0.35)';
const allSymbols = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const startYPosition = () => -barWidth;
const randomYPosition = () => Math.random() * (Math.abs(startYPosition()) + canvas.height) - startYPosition();
const maxSpeed = 4;
const minSpeed = 0.75;

const inputRangeNumberName = 'range_number';
const inputRangeWidthName = 'range_size';
const labelNumberName = 'range_number_label';
const labelWidthName = 'range_size_label';

const minNumberOfSymbols = 0;
let numberOfSymbolsInScreen = 1500;
const maxNumberOfSymbols = 5000;

const minBarWidth = 8;
let barWidth = 15;
const maxBarWidth = 20;

interfaceElements = [
    document.getElementById(statsCanvasId),
    document.getElementsByClassName('range')[0],
    document.getElementsByClassName('range')[1],
];
