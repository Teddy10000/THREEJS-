import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import * as dat from 'dat.gui'

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

//adding mobility to the camera
const orbit = new OrbitControls(camera,renderer.domElement) 

// setting position now we can do all together with the
//camera.position.z = 5
camera.position.set(0,2,5)
//TO UPDATE THE ORBIT EVERY MOVEMENT
orbit.update()
//AXES HELPER TO HEP WITH THE AXES
const axesHelper = new THREE.AxesHelper(5)

//FOR CHANGING THE COLOR OF THE GUI
const gui = new dat.GUI()
const options = {
  boxColor : '#ffea00'
};
gui.addColor(options,'boxColor').onChange(function(e){
    box.material.color.set(e)
})

//addding a geometry mesh element that is a box so the geometry that is the shape and the material

const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({color:0x00FF00});
const box =  new THREE.Mesh(boxGeometry,boxMaterial)
scene.add(box)
scene.add(axesHelper)

//adding a GRID HELPER TO GRID AND VALUES ADDED TO INCREASE THE SURFACE OF THE GRID AND SECND PARAMETER TO DIVIDE THE GRID
const gridHelper = new THREE.GridHelper(30)
scene.add(gridHelper)

//CREATING ANOTHER GEOMETRY 
const planeGeometry = new THREE.PlaneGeometry(30,30);
const planeMaterial = new THREE.MeshBasicMaterial({color:0xFFFFFF})
const plane = new THREE.Mesh(planeGeometry,planeMaterial) 
plane.rotation.x = -0.5 * Math.PI
scene.add(plane)


//writing the animation function to rotate the element
function animations(time){
    box.rotation.x += 0.01  ;
    box.rotation.y += 0.01  ;
    renderer.render(scene,camera)
}
renderer.setAnimationLoop(animations);