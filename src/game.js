const scene = new THREE.Scene(),
      renderer = new THREE.WebGLRenderer(),
      camera = new THREE.PerspectiveCamera(
            75, window.innerWidth / window.innerHeight, 0.1, 1000
      ),

     geometry = new THREE.BoxGeometry(1, 1, 1),
     material = new THREE.MeshBasicMaterial({color: 0xff9900}),
     cube = new THREE.Mesh(geometry, material);


scene.add(camera);
scene.add(cube);


camera.position.z = 5;


renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function render() {
      cube.rotation.x = cube.rotation.y += 0.01;

      renderer.render(scene, camera);
      requestAnimationFrame(render);
}

render();
