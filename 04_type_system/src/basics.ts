// type inference

let val = 3;


// interface have no impact on runtime JS and are open ended

interface Point {
    x: number;
    y: number;
}

let myPoint: Point = {
    x: 1,
    y: 2
};

// type alias

type MyPoint = {
    x: number,
    y: number
}

function getInverse(point: { x: number, y: number }): { x: number, y: number } {
    return { x: -point.x, y: -point.y };
}

let inversedPoint = getInverse({ x: 1, y: 2 });

// types are structural

function iTakePoint(p: Point) { }

const a: MyPoint = { x: 5, y: 7 };

iTakePoint(a);

// values are types (literal types)