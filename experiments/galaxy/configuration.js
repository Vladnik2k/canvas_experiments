const spaceColor = '#2a2a2a';
const starColor = '#ffcd53';

const minNumberOfStars = 0;
const maxNumberOfStars = 10000;

const minSpeed = 5;
const maxSpeed = 200;

let numberOfStars = 1000;
let speed = 40;

const inputRangeNumberName = 'range_number';
const inputRangeSpeedName = 'range_speed';
const labelNumberName = 'range_number_label';
const labelSpeedName = 'range_speed_label';

interfaceElements = [
    document.getElementsByClassName('range')[0],
    document.getElementsByClassName('range')[1],
    document.getElementById(statsCanvasId),
    document.getElementsByClassName('hint')[0]
];
