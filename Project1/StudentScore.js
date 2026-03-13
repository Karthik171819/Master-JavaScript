const students = [];

function addStudents(name, mark){
    mark = Number(mark);
    mark = mark ?? 0;
    name = name.trim().toUpperCase();
    students.push({name, score})
}

//Get Grades
function getGrades(){
   return students.map((student) =>{
        let grade = "F";

        if(student.mark >= 90 ) grade = "A";
        else if (student.mark >= 75 ) grade = "B";
        else if (student.mark >= 50 ) grade = "C";
        else if (student.mark >= 35 ) grade = 'D';
        return {...student, grade}
    })
}

//Top Scorers
function getTopScores(){
    students.filter((student) => student.score)

}