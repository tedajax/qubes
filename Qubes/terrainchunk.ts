class TerrainChunk {
    width: number;
    length: number;
    height: number;

    chunkData: number[];

    constructor(w: number, l: number, h: number) {
        this.width = w;
        this.length = l;
        this.height = h;

        var size = w * l * h;

        this.chunkData = [];
        this.chunkData.length = size;

        for (var i = 0; i < 500; ++i) {
            var x = Math.floor(Math.random() * w);
            var y = Math.floor(Math.random() * h);
            var z = Math.floor(Math.random() * l);

            this.chunkData[this.getIndex(x, y, z)] = 1;
        }
    }

    getIndex(x: number, y: number, z: number): number {
        return x + z * this.width + y * this.width * this.length;
    }

    addChunkToScene(scene: THREE.Scene, cube: THREE.Mesh) {
        for (var x = 0; x < this.width; ++x) {
            for (var y = 0; y < this.height; ++y) {
                for (var z = 0; z < this.length; ++z) {
                    var index = this.getIndex(x, y, z);
                    if (this.chunkData[index] > 0) {
                        var block = cube.clone();
                        block.position.x = x;
                        block.position.y = y;
                        block.position.z = z;
                        scene.add(block);
                    }
                }
            }
        }
    }
} 