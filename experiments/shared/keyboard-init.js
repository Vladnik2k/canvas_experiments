// keyboard

let isInterfaceClosed = false;
const closeAllKeyCode = 'Escape';
let interfaceElements = [];

window.addEventListener('keydown', ($event) => {
    if ($event.code === closeAllKeyCode) {
        isInterfaceClosed = !isInterfaceClosed;
        interfaceElements.forEach(hideOrShowElement);
    }
});

function hideOrShowElement(element) {
    isInterfaceClosed ? element.classList.add('hidden') : element.classList.remove('hidden');
}
