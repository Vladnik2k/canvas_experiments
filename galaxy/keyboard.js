window.addEventListener('keydown', ($event) => {
    if ($event.code === closeAllKeyCode) {
        isInterfaceClosed = !isInterfaceClosed;
        const ranges = document.getElementsByClassName('range');
        for (let i = 0; i < ranges.length; i++) {
            hideOrShowElement(ranges[i]);
        }
        hideOrShowElement(document.getElementById(statsCanvasId));
        hideOrShowElement(document.getElementsByClassName('hint')[0]);
    }
});

function hideOrShowElement(element) {
    isInterfaceClosed ? element.classList.add('hidden') : element.classList.remove('hidden');
}
