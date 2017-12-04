export class Vehicle {
    
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    public drive(distanceInKilometers: number): void {
        console.log(`${this.name} crossed ${distanceInKilometers} kilometers`);
    }
}

class Car extends Vehicle {

    constructor(name: string) {
        super(name);
    }

    public drive(distanceInKilometers: number): void {
        console.log(`Driving a ${this.name} car`);
        super.drive(distanceInKilometers);
    }
}

class Bus extends Vehicle {

    constructor(name: string) {
        super(name);   
    }

    public drive(distanceInKilometers: number): void {
        console.log(`Driving a ${this.name} bus`);
        super.drive(distanceInKilometers);
    }
}

let car = new Car("BMW");
let bus = new Bus("Solaris");

car.drive(15);
bus.drive(12);