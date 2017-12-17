abstract class Shape {
    abstract getArea(): number;
}

class Circle extends Shape {

    constructor(public radius: number) {
        super();
    }

    getArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

class Square extends Shape {

    constructor(public size: number) {
        super();
    }

    getArea(): number {
        return this.size ** 2;
    }
}

class Rectangle extends Shape {

    constructor(public width: number, public height: number) {
        super();
    }

    getArea(): number {
        return this.width * this.height;
    }
}

const shape: Shape = new Circle(12);
const area = shape.getArea();

console.log(area);