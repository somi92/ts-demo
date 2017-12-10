// types are structural

// type MyPoint = {
//     x: number,
//     y: number
// }

function getInverse(point: { x: number, y: number }): { x: number, y: number } {
    return { x: -point.x, y: -point.y };
}

let inversedPoint = getInverse({ x: 1, y: 2 });

// tree