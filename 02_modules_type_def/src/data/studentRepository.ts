export default class StudentRepository {

    private static students: Student[] = [
        {
            id: 1,
            name: "John Doe",
            grades: [2, 5, 3, 4, 5, 5]
        },
        {
            id: 2,
            name: "Luke Skywalker",
            grades: [2, 4, 3, 4, 2, 3]
        },
        {
            id: 3,
            name: "Hagar Horrible",
            grades: [5, 5, 3, 4, 5, 5]
        }
    ];

    public static getAll(): Student[] {
        return this.students;
    }

    public static getById(id: number): Student {
        return this.students.filter(s => s.id == id)[0];
    }
}