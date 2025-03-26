import * as THREE from 'https://unpkg.com/three@0.154.0/build/three.module.js';

const scene = new THREE.Scene(); 
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); 
const renderer = new THREE.WebGLRenderer({ antialias: true }); 
renderer.setSize(window.innerWidth, window.innerHeight); 
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5);
light.castShadow = true;
scene.add(light);

const geometry = new THREE.BoxGeometry(1, 1, 1);

// Materiales para los cubos (verde, azul y rojo)
const materials = [
    new THREE.MeshStandardMaterial({ color: 0x00ff00 }), // Verde
    new THREE.MeshStandardMaterial({ color: 0x0000ff }), // Azul
    new THREE.MeshStandardMaterial({ color: 0xff0000 })  // Rojo
];

// Posiciones moderadas para que no choquen
const positions = [
    { x: -2, y: 0, z: 0 },
    { x: 0, y: 0, z: 0 },
    { x: 2, y: 0, z: 0 }
];

const cubes = [];

for (let i = 0; i < 3; i++) {
    const cube = new THREE.Mesh(geometry, materials[i]);
    cube.position.set(positions[i].x, positions[i].y, positions[i].z);
    cube.castShadow = true;
    cube.receiveShadow = true;
    scene.add(cube);
    cubes.push(cube);
}

camera.position.z = 5;

function animate() {
    // Verde: 0.1, Azul: 0.2, Rojo: 0.4
    cubes[0].rotation.x += 0.01;
    cubes[0].rotation.y += 0.01;
    
    cubes[1].rotation.x += 0.02;
    cubes[1].rotation.y += 0.02;
    
    cubes[2].rotation.x += 0.05;
    cubes[2].rotation.y += 0.05;
    
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
