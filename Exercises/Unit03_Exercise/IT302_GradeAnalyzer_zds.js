// Zion Scott | zds@njit.edu | Sept. 16, 2026 |IT302 | Unit03 Node.js Exercise

import GradeUtils from "./IT302_GradeUtils_zds.js"
const student = {
    firstName: "Zion",
    lastName: "Scott",
    scores: [93, 80, 78, 96, 75]
}

const average = GradeUtils.calculateAverage(student.scores);
const highest = GradeUtils.findHighest(student.scores);
const letter = GradeUtils.getLetterGrade(average);

console.log(`Student: ${student.firstName} ${student.lastName}`);
console.log(`Scores: ${student.scores.join(", ")}`);
console.log(`Average: ${average}`);
console.log(`Highest: ${highest}`);
console.log(`Letter Grade: ${letter}`);