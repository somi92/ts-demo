function calculateAverage(s) {
    var result = s.grades.reduse(function (total) {
        return total + current;
    }, 0);
    return result / s.grades.length;
}

var student = {
    name: "Johnny B Goode",
    grades: [4, 5, 1, 2, 3],
};

console.log(calculateAverage(student));