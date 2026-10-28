// Zion Scott | zds@njit.edu | Sept. 16, 2026 |IT302 | Unit03 Node.js Exercise

export default class GradeUtils {
    static calculateAverage(scores) {
        let total = 0;
        for (const score of scores) {
            total += score;
        }
        const avgScore = total / scores.length;
        return avgScore;
    }

    static findHighest(scores) {
        let highestScore = scores[0];
        for (const score of scores) {
            if ( score > highestScore){
                highestScore = score;
                }
            }
            return highestScore;
        }
        
    static getLetterGrade(avgScore) {
        if (avgScore >= 90) {
            return "A";
        } else if (avgScore <= 90 && avgScore >= 80) {
            return "B";
        } else if (avgScore <= 80 && avgScore >= 70) {
            return "C";
        } else if (avgScore <= 70 && avgScore >= 60) {
            return "D";
        } else if (avgScore <= 60) {
            return "F";
        }
    }
}