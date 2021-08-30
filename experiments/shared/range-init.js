// range

function initRange(id, min, max, value, func) {
    document.getElementById(id).min = min;
    document.getElementById(id).max = max;
    document.getElementById(id).value = value;

    document.getElementById(id).addEventListener('input', ($event) => {
        func(+$event.target.value);
    });
}
