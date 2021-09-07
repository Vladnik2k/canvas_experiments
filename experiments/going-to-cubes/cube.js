class Cube {
    position;
    color;
    object;
    smallCubes = [];

    constructor(position, color) {
        this.position = { x: position.x, y: position.y };
        this.color = color;

        if (this.color === black) {
            this.object = this.createObject();
        }
    }

    createObject(position = this.position, size = blockSize, color = this.color) {
        const objectGeometry = new THREE.PlaneGeometry(size, size);
        const object = new THREE.Mesh(objectGeometry, new THREE.MeshBasicMaterial({color: color, side: THREE.FrontSide}));
        object.position.x = position.x;
        object.position.y = position.y;

        return object;
    }

    divide() {
        this.smallCubes = [];

        const newSize = blockSize / 3;
        const newColor = this.color === white ? black : white;

        const center = this.createObject({ x: this.position.x, y: this.position.y }, 1, newColor);
        const leftBottom = this.createObject({ x: this.position.x - newSize, y: this.position.y - newSize }, 1, newColor);
        const leftTop = this.createObject({ x: this.position.x - newSize, y: this.position.y + newSize }, 1, newColor);
        const rightBottom = this.createObject({ x: this.position.x + newSize, y: this.position.y - newSize }, 1, newColor);
        const rightTop = this.createObject({ x: this.position.x + newSize, y: this.position.y + newSize }, 1, newColor);

        this.fillSmallCubes(center, leftTop, rightTop, rightBottom, leftBottom);
    }

    move(frames) {
        for (let i = 0; i < this.smallCubes.length; i++) {
            if (this.smallCubes[i].startFrames <= frames) {
                if (!this.smallCubes[i].isAdded) {
                    this.smallCubes[i].isAdded = true;
                    scene.add(this.smallCubes[i].object);
                }
                const oldSize = this.smallCubes[i].object.scale.x;
                const newSize = Math.min(blockSize / 3, oldSize + smallBlockIncreaseSpeed);
                this.smallCubes[i].object.scale.set(newSize, newSize, 1);
            }
        }
    }

    revertSmallCubes() {
        for (let i = 0; i < this.smallCubes.length; i++) {
            this.smallCubes[i].object.scale.set(0, 0, 1);
            scene.remove(this.smallCubes[i].object);
            this.smallCubes[i].isAdded = false;
        }
    }

    fillSmallCubes(center, leftTop, rightTop, rightBottom, leftBottom) {
        let order = { first: [], second: [], third: [] };
        let positionFromCenter = Math.max(Math.abs(this.position.x), Math.abs(this.position.y)) / blockSize;
        if (Math.abs(this.position.x) === Math.abs(this.position.y)) {
            if (this.position.x === 0) {
                order = { first: [], second: [center], third: [leftTop, rightTop, rightBottom, leftBottom] };
            } else if (this.position.x < 0 && this.position.y < 0) {
                order = { first: [rightTop], second: [center], third: [leftBottom, leftTop, rightBottom] };
            } else if (this.position.x > 0 && this.position.y > 0) {
                order = { first: [leftBottom], second: [center], third: [rightTop, leftTop, rightBottom] };
            } else if (this.position.x > 0 && this.position.y < 0) {
                order = { first: [leftTop], second: [center], third: [rightBottom, leftBottom, rightTop] };
            } else if (this.position.x < 0 && this.position.y > 0) {
                order = { first: [rightBottom], second: [center], third: [leftTop, leftBottom, rightTop] };
            }
        } else {
            if (Math.abs(this.position.x) < Math.abs(this.position.y) && this.position.y < 0) {
                order = { first: [rightTop, leftTop], second: [center], third: [rightBottom, leftBottom] };
            } else if (Math.abs(this.position.x) < Math.abs(this.position.y) && this.position.y > 0) {
                order = { first: [rightBottom, leftBottom], second: [center], third: [rightTop, leftTop] };
            } else if (Math.abs(this.position.x) > Math.abs(this.position.y) && this.position.x < 0) {
                order = { first: [rightBottom, rightTop], second: [center], third: [leftBottom, leftTop] };
            } else if (Math.abs(this.position.x) > Math.abs(this.position.y) && this.position.x > 0) {
                order = { first: [leftTop, leftBottom], second: [center], third: [rightTop, rightBottom] };
            }
        }
        this.smallCubes = this.smallCubes.concat(order.first.map(el => ({ object: el, startFrames: positionFromCenter * 3 * smallBlockKoefDelay + smallBlockKoefDelay, isAdded: false })));
        this.smallCubes = this.smallCubes.concat(order.second.map(el => ({ object: el, startFrames: positionFromCenter * 3 * smallBlockKoefDelay + 2 * smallBlockKoefDelay, isAdded: false })));
        this.smallCubes = this.smallCubes.concat(order.third.map(el => ({ object: el, startFrames: positionFromCenter * 3 * smallBlockKoefDelay + 3 * smallBlockKoefDelay, isAdded: false })));
    }
}
