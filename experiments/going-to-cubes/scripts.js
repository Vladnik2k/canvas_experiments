const cubes = [];
let frames = 0;

function createObjects() {
    let isStartWithBlack = true;
    for (let i = -columns; i <= columns; i++) {
        isStartWithBlack = !isStartWithBlack;

        for (let j = -rows, isWhite = isStartWithBlack; j <= rows; j++, isWhite = !isWhite) {
            const cube = new Cube({ x: i * blockSize, y: j * blockSize }, isWhite ? white : black);
            cube.divide();
            scene.add(cube.object);
            cubes.push(cube);
        }
    }
}

function changeObjects() {
    cubes.forEach(cube => cube.revertSmallCubes());
}

function start() {
    changeObjects();
    camera.position.z = cameraZPositionStart;
    camera.position.y = - blockSize / 2;
    frames = 0;
}

function changeCameraPosition() {
    // camera.position.z = (cameraZPositionStart - 3 * frames / speedSlow);
    camera.position.z = (3.15 * Math.exp(- 3 * frames / speedSlow / cameraZPositionStart) - 0.15) * cameraZPositionFinish;
}

function moveCubes() {
    for (let i = 0; i < cubes.length; i++) {
        cubes[i].move(frames);
    }
}

function animation() {
    renderer.render(scene, camera);
    if (camera.position.z <= cameraZPositionFinish) {
        start();
    }

    moveCubes();
    changeCameraPosition();

    frames++;
    stats.update();
    requestAnimationFrame(animation);
}

scene.background = new THREE.Color( white );
createObjects();
start();
animation();
