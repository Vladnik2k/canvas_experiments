window.addEventListener('keydown', ($event) => {
    if ($event.code === closeAllKeyCode) {
        isInterfaceClosed = !isInterfaceClosed;
        hideOrShowElement(document.getElementById(statsCanvasId));
        hideOrShowElement(document.getElementById('audio'));
        hideOrShowElement(document.getElementsByClassName('hint')[0]);
    }
});

function hideOrShowElement(element) {
    isInterfaceClosed ? element.classList.add('hidden') : element.classList.remove('hidden');
}
