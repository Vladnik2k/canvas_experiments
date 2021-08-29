const spaceColor = '#2a2a2a';
const starColor = '#ffcd53';

const minNumberOfStars = 0;
let numberOfStars = 5000;
const maxNumberOfStars = 20000;

const minSpeed = 5;
let speed = 25;
const maxSpeed = 200;

const speedSlowKoef = 25;

interfaceElements = [
    document.getElementsByClassName('range')[0],
    document.getElementsByClassName('range')[1],
    document.getElementById(statsCanvasId),
];
