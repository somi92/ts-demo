import * as util from "./util/util";
import repository from "./data/studentRepository";

class Main {

    public generateReport(): string {
        let students = util.sortByName<Student>(repository.getAll());
        return students.map(s => this.formatStudentData(s))
            .reduce((report, current) => report += current, "");
    }

    private formatStudentData(student: Student): string {
        let data = `\n ${student.name} \n`
            + `\t id: ${student.id} \n`
            + `\t average: ${util.calculateAverage(student.grades)} \n`;
        return data;
    }
}

let program = new Main();

let report = program.generateReport();
console.log(report);