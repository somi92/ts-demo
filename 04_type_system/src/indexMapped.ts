function pickProperties<T, K extends keyof T>(obj: T, propNames: K[]): T[K][] {
    return propNames.map(e => obj[e]);
}

console.log(pickProperties({ a: 1, b: 2, c: 3 }, ["a", "c"]));

interface Person {
    name: string;
    age: number;
}

let p: Person;

p = {
    age: 10,
    name: "John"
};

type NullableType<T> = {
    [K in keyof T]?: T[K];
}

type ReadonlyType<T> = {
    readonly [K in keyof T]: T[K];
}

let nPerson: NullableType<Person>;
nPerson = {
    age: 10,
    name: "John"
};

nPerson.age = null;

let rPerson: ReadonlyType<Person>;
rPerson = {
    age: 10,
    name: "John"
};

let partialPerson: Partial<Person>;
let record: Record<"person", Person>;
let picked: Pick<Person, "name">;

function change(currentPerson: Person, personValue: Partial<Person>) {
    return Object.assign({}, currentPerson, personValue); 
}

change(p, { name: "Mike"});