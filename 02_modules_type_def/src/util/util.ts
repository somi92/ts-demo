export function calculateAverage(values: number[]): number {
    return values.reduce((total, current) => total + current) / values.length;
}

export function sortByName<T extends { name: string }>(items: T[]): T[] {
    let copy = items.slice(0);
    return copy.sort((x, y) => {
        return x.name.localeCompare(y.name);
    });
}