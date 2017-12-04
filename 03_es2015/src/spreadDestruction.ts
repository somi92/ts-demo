/**
 * spread operator
 */
let arr = [1, 2, 3];
let newArr = [...arr, 10, 20, 30];
console.log(newArr);

let point2d = { x: 1, y: 2 };
let point3d = { ...point2d, z: 3 };
console.log(point3d);

/**
 * object destructing
 */
export let foo = {
    bar: 100,
    bas: "I'm bas",
    x: 200,
    y: 300
};

let { x, y, bar, bas } = foo;
console.log(x, y, bar, bas);

const { bas: newVal } = foo;
console.log(newVal);

// let { x, y, ...remaining } = foo;
// console.log(x, y, remaining);

let obj = { prop1: { prop11: 100 } };
var { prop1: { prop11 } } = obj;
console.log(prop11);

/**
 * array destructing
 */
var [x1, x2, , ...remaining] = [1, 2, 3, 4, 5, 6, 7];
console.log(x1, x2, remaining);