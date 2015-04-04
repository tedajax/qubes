class Game {
    scene: THREE.Scene;
    camera: THREE.Camera;
    renderer: THREE.WebGLRenderer;

    chunk: TerrainChunk;

    constructor(width: number, height: number) {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75.0, width / height, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(width, height);
        document.body.appendChild(this.renderer.domElement);

        this.setupTempScene();

        this.run();
    }

    setupTempScene() {
        var geometry = new THREE.BoxGeometry(1, 1, 1);
        var material = new THREE.MeshBasicMaterial({ color: 0xFF0000 });
        var cube = new THREE.Mesh(geometry, material);

        this.chunk = new TerrainChunk(25, 25, 25);
        this.chunk.addChunkToScene(this.scene, cube);
    }

    run() {
        requestAnimationFrame(() => { this.run() });

        this.update(1.0);
        this.render();
    }

    update(dt: number) {
        this.camera.position.z += 0.1
    }

    render() {
        this.renderer.render(this.scene, this.camera);
    }
} 