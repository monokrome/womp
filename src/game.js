(function (THREE, window, undefined) {


class Game {
      constructor(root) {
            this.renderer = this.getRenderer(root);
            this.scene = this.getScene();
      }

      getRenderer(root) {
            const renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth, window.innerHeight);
            root.appendChild(renderer.domElement);
            return renderer;

      }

      getCamera() {
            const camera = new THREE.PerspectiveCamera(
                        75, window.innerWidth / window.innerHeight,
                        0.1, 1000
                  );

            camera.position.z = 5;
            return camera;
      }

      getCube() {
            const geometry = new THREE.BoxGeometry(1, 1, 1),
                  material = new THREE.MeshBasicMaterial({
                        color: 0xff9900,
                  });

            return new THREE.Mesh(geometry, material);
      }

      getScene() {
            const scene = new THREE.Scene();

            this.cube = this.getCube();
            this.camera = this.getCamera();

            scene.add(this.camera);
            scene.add(this.cube);

            return scene;
      }

      start() {
            this.render = this.render.bind(this);
            this.render();
      }

      render() {
            this.cube.rotation.x = this.cube.rotation.y += 0.01;
            this.renderer.render(this.scene, this.camera);
            requestAnimationFrame(this.render);
      }
}

(new Game(document.body)).start();


})(THREE, window);
