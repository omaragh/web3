import * as THREE from './three.js-master/build/three.module.js'
import {
    GLTFLoader
} from './three.js-master/examples/jsm/loaders/GLTFLoader.js'
import {
    OrbitControls
} from './three.js-master/examples/jsm/controls/OrbitControls.js'

window.onload = () => {
    console.log("running");
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(100, window.innerWidth / innerHeight, 0.1, 1000);
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(500, 500);
    document.getElementById("model").appendChild(renderer.domElement);

    const drop = document.querySelector(".myFile");
    let file;

    drop.addEventListener("dragover", (event) => {
        event.preventDefault();
        drop.classList.add("active");
    });
    drop.addEventListener("dragleave", () => {
        drop.classList.remove("active");
    });
    drop.addEventListener("drop", (event) => {
        event.preventDefault();
        file = event.dataTransfer.files[0];
        let fileReader = new FileReader();

        fileReader.onload =  (glftText) => {
            let fileURL = fileReader.result;
            let loader = new GLTFLoader();
            let obj;
            console.log(fileURL);
            loader.parse(fileURL, '', function(gltf) {
                console.log(glftText);
                obj = gltf.scene;
                scene.add(gltf.scene);
                animate();
            });
        }
        fileReader.readAsArrayBuffer(file);
    });

    let controls = new OrbitControls(camera, renderer.domElement);
    controls.addEventListener('change', renderer);
    let light = new THREE.HemisphereLight(0xffffff, 0x000000, 1);
    scene.add(light);
    camera.position.set(0, 0, 5);

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    } 
}