
import {Scene} from 'three';
import * as THREE from 'three';
import './style.css';
// import {common} from '../webpack.common.js';

console.log();
const scene=new Scene()



//cube
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial( {color: '#5dccd9'} );
const mesh=new THREE.Mesh(geometry,material)
scene.add(mesh) 
mesh.position.set(0,0,-2)


//Size
const sizes={
    width:800,
    height:600
}
//camera
const camera=new THREE.PerspectiveCamera(75,sizes.width/sizes.height )
camera.position.z=1;
camera.position.x=0;
camera.position.y=0;
scene.add(camera)

//---light
const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light )

const canvas=document.querySelector('.webgl');
console.log(canvas);
//renderer
const renderer=new THREE.WebGLRenderer({
    canvas:canvas
})

renderer.setSize(sizes.width,sizes.height)

renderer.render(scene,camera)