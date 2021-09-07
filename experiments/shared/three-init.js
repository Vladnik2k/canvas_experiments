const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// const renderer = new THREE.WebGLRenderer({ antialias: window.devicePixelRatio > 1, powerPreference: 'high-performance' });
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();
});

const raycaster = new THREE.Raycaster();

// const axesHelper = new THREE.AxesHelper( 50 );
// scene.add( axesHelper );

// init light

const light = new THREE.PointLight(0xFFFFFF, 2, 1000);
light.position.set(0, 0, 100);
scene.add(light);

