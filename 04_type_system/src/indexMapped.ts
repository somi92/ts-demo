// getting the info about names and types of props

type Foo = { a: number, b: string, c: boolean };

type FooKeys = keyof Foo;
type FooA = Foo["a"];
type FooProps = Foo[keyof Foo];

//

function getProperty<T, K extends keyof T>(obj: T, prop: K) {
    return obj[prop];
}

function pickProperties<T, K extends keyof T>(obj: T, propNames: K[]): T[K][] {
    return propNames.map(e => obj[e]);
}

const objFoo: Foo = {a: 1, b: "two", c: false};

const props = getProperty(objFoo, "a");
const pickedProps = pickProperties({ a: 1, b: 2, c: "test" }, ["a", "c"]);

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
    return { ...{}, ...currentPerson, ...personValue };
}

change(p, { name: "Mike" });

// 
type Foo1 = "1" | "2" | "3";
type Bar1 = "1" | "two" | "3";

type T1 = Extract<Foo1, Bar1>;
type T2 = Exclude<Foo1, Bar1>;