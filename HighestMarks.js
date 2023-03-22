findHighestMarks = (marks) => {
    let highestMarks = 0;
    let student = "";

    for (let i =0 ; i < marks.length; i++) {
        highestMarks = marks[i] > highestMarks ? marks[i] : highestMarks;
        student = marks[i] === highestMarks ? `student ${i + 1}`:student;
    }

    console.log(`${student} scored the highest marks: ${highestMarks}`);
}

const marks = [80, 95, 70, 86, 99];
findHighestMarks(marks)