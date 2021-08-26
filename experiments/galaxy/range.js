function setSpeedSlow(number) {
    speed = number;
    document.getElementById(labelSpeedName).innerText = speed;
}

function setNumberOfStars(number) {
    numberOfStars = number;
    stars = stars.slice(0, numberOfStars);

    for (let i = 0; i < numberOfStars; i++) {
        if (!stars[i]) {
            stars[i] = new Star();
        }
    }

    document.getElementById(labelNumberName).innerText = numberOfStars;
}

document.getElementById(inputRangeSpeedName).addEventListener('input', ($event) => {
    setSpeedSlow(+$event.target.value);
});

document.getElementById(inputRangeNumberName).addEventListener('input', ($event) => {
    setNumberOfStars(+$event.target.value);
});

document.getElementById(inputRangeNumberName).min = minNumberOfStars;
document.getElementById(inputRangeNumberName).max = maxNumberOfStars;
document.getElementById(inputRangeNumberName).value = numberOfStars;

document.getElementById(inputRangeSpeedName).min = minSpeed;
document.getElementById(inputRangeSpeedName).max = maxSpeed;
document.getElementById(inputRangeSpeedName).value = speed;

setNumberOfStars(+document.getElementById(inputRangeNumberName).value);
setSpeedSlow(+document.getElementById(inputRangeSpeedName).value);
