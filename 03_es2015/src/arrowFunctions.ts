export class Counter {

    private _count: number = 0;

    public get count(): number {
        return this._count;
    }


    public set count(v: number) {
        this._count = v;
    }

    public increment(): void {
        this._count++;
    }
}

let counter = new Counter();
counter.increment();
console.log(counter.count);

setTimeout(counter.increment, 1000);
setTimeout(function () { console.log(counter.count) }, 2000);