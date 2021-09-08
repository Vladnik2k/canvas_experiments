scene.background = new THREE.Color( 0x000000 );

camera.position.set(200, 200, 200);
camera.lookAt(0, 0, 0);
const points = [
    [-15, -15],
    [-5, -10],
    [0, -5],
    [0, 0],
    [5, 10],
    [20, 5],
    [10, -20],
    [10, -30],
    [0, -45],
    [-30, -35],
    [-35, -25],
    [-30, -20],
    [-25, -20],
    [-15, -15],
];

for (let i = 0; i < points.length; i++) {
    const x = points[i][0] * 10;
    const y = i + 1 === points.length ? points[0].y : Math.random() * 20 - 10 * 10;
    const z = points[i][1] * 10;
    points[i] = new THREE.Vector3(x, y, z);
}
const path = new THREE.CatmullRomCurve3(points);

const segments = 500;
const radius = 10;
const circularDetail = 20;
const geometry = new THREE.TubeGeometry(path, segments, radius, circularDetail, false);
const material = new THREE.MeshLambertMaterial({color: 0xffff00, side: THREE.BackSide, wireframe: true});
const tube = new THREE.Mesh(geometry, material);
scene.add(tube);

let percentage = 0;
const speed = 0.0005;

const light = new THREE.PointLight(0xffffff, 1, 500);
scene.add(light);

function animation() {
    percentage += speed;
    const pointToMove = path.getPointAt(percentage % 1);
    const pointToSee = path.getPointAt((percentage + speed * 50) % 1);

    camera.position.set(pointToMove.x, pointToMove.y, pointToMove.z);
    light.position.set(pointToMove.x, pointToMove.y, pointToMove.z);
    camera.lookAt(pointToSee.x, pointToSee.y, pointToSee.z);

    renderer.render(scene, camera);
    stats.update();
    requestAnimationFrame(animation);
}
animation();
