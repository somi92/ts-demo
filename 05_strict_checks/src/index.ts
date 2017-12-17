interface Person {
    name: string;
    age: number;
}

function countAdults(persons?: Person[]): number {
    let counter: number;
    for (const person of persons) {
        if (person.age >= 18)
            counter = counter + 1;
    }
    return counter;
}

let c1 = countAdults([
    { name: "John", age: 15 },
    { name: "Alice", age: 19 },
    { name: "Tom", age: 21 }
]);
// let c2 = countAdults();