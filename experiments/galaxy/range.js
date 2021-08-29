const inputRangeNumberName = 'range_number';
const inputRangeSpeedName = 'range_speed';
const labelNumberName = 'range_number_label';
const labelSpeedName = 'range_speed_label';

function setSpeed(number) {
    speed = number;
    document.getElementById(labelSpeedName).innerText = speed;
}

function setNumberOfStars(number) {
    numberOfStars = number;
    showStars = allStars.slice(0, numberOfStars);
    document.getElementById(labelNumberName).innerText = numberOfStars;
}

initRange(inputRangeNumberName, minNumberOfStars, maxNumberOfStars, numberOfStars, setNumberOfStars);
initRange(inputRangeSpeedName, minSpeed, maxSpeed, speed, setSpeed);
setNumberOfStars(+document.getElementById(inputRangeNumberName).value);
setSpeed(+document.getElementById(inputRangeSpeedName).value);
