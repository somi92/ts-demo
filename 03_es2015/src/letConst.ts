function usingVar() {
    var a = 10;
    var a = 100;

    if (true) {
        var a = 1;
    }

    console.log(a);
}


function usingLet() {
    let a = 10;
    // let a = 100;

    if (true) {
        let a = 1;
    }

    console.log(a);
}

function capturingVar() {
    for (var i = 0; i < 10; i++) {
        setTimeout(function () { console.log(i); }, 100 * i);
    }
}

function capturingLet() {
    for (let i = 0; i < 10; i++) {
        setTimeout(function () { console.log(i); }, 100 * i);
    }
}


usingVar();
usingLet();
capturingVar();
capturingLet();

const foo: number = 123; // block scoped as let
// foo = 300; // error, not allowed

const bar = { a: 10, bar: 20 }; // shallow immutability, works only on reference
// bar = { a: 12, b: 22 }; // error, cannot change reference
bar.a = 15; // props can be changed