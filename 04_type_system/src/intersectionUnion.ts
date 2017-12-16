// intersection types
type Named = {
    name: string
};

interface Loggable {
    log(): void;
}

let obj = {
    name: "Milos",
    log: () => console.log("logging")
};

function logToConsole(obj: Named & Loggable): void {
    console.log(`Logging for ${obj.name}`);
    obj.log();
}

logToConsole(obj);

// union type

function indentLine(line: string, indentation: string | number): string {
    if (typeof indentation == "number")
        return `${Array(indentation).join(" ")}${line}`;
    return `${indentation}${line}`;
}

console.log(indentLine("The sun is shining.", "-----"));
console.log(indentLine("The sun is shining.", 6));

class Employee {
    department: string;
    name: string;
}

class Student {
    university: string;
    name: string;
}

function printData(person: Employee | Student): void {
    if(person instanceof Employee) {
        console.log(`${person.name} from department ${person.department}`);
    } else {
        console.log(`${person.name} from university ${person.university}`);
    }
}

// function isEmployee(person: Employee | Student): person is Employee {
//     return (<Employee>person).department !== undefined;
// }