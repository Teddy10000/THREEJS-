import * as THREE from 'three';

const renderer = new THREE.WebGL1Renderer();

renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement)

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth/window.innerHeight,
    0.1,
    1000

); 
// setting position now we can do all together with the
//camera.position.z = 5
camera.position.set(0,2,5)
//AXES HELPER TO HEP WITH THE AXES
const axesHelper = new THREE.AxesHelper(5)

//addding a geometry mesh element that is a box so the geometry that is the shape and the material

const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({color:0x00FF00});
const box =  new THREE.Mesh(boxGeometry,boxMaterial)
scene.add(box)
scene.add(axesHelper)

//writing the animation function
function animations(){
    box.rotation.x += 0.01;
    box.rotation.y += 0.01;
    renderer.render(scene,camera)
}
renderer.setAnimationLoop(animations);