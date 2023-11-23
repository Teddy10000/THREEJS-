import * as THREE from 'three'

const canvas  = document.querySelector('canvas.webgl')
const scene = new THREE.Scene();

//A mesh in Three.js is an object that represents a 3D shape that you can display on the web
//Think of it as a clay model that you can sculpt and paint to create your own 3D art.
// A mesh has two main components: a geometry and a material

const geometry = new THREE.BoxGeometry(1,1,1 )

const material = new THREE.MeshBasicMaterial({color:0xff0000})

const cubeMesh = new THREE.Mesh( geometry,material)

//ADDING THE MESH TO THE STAGE 
scene.add(cubeMesh);

const sizes = {
    width:800,
    height:600

}
//ADDING A CAMERA TO SHOW THE POINT OF VIEW OF THE MESH

//USE 45 maximum 
//CAMERA TAKES ASPECT RATIO AND 
const camera = new THREE.PerspectiveCamera(75,sizes.width /sizes.height) 
camera.position.z =4
camera.position.y= 1
camera.position.x = 3

//ADDING TO THE STAGE
scene.add(camera) 

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,    
}) 

renderer.setSize(sizes.width, sizes.height) 

renderer.render(scene, camera)

