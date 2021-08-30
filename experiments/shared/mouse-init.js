// mouse

const mouse = { x: -9999, y: -9999 };

const setMouse = ($event) => {
    mouse.x = $event.x;
    mouse.y = $event.y;
}
window.addEventListener('mousemove', setMouse);
