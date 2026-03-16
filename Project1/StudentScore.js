const students = [];

function addStudents(name, mark){
    mark = Number(mark);
    mark = mark ?? 0;
    name = name.trim().toUpperCase();
    students.push({name, mark})
}

//adding students data to console log
addStudents("Virat", "99");
addStudents("Dhoni", 82);
addStudents("Anisha", 44);
addStudents("Sana", 29);

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
      return students.filter((student) => student.mark >= 75)
}

//find student
function findStudent(name){
   return students.find((student) => student.name == name)
}

// check failures
function hasFailures() {
    return students.some((student) => student.mark < 35)
}

//display data
function displayAll(){
     const graded = getGrades();
     console.log("Student Data");
     console.log("All Student with Grades");
     console.log("NAME | MARK | GRADE")
     graded.forEach((student) => {
        console.log(`${student.name} | ${student.mark} | ${student.grade}`)
     })
}

displayAll();

//Top Scorer List
console.log("\n TopScores:");
console.log(getTopScores());

//Find student
console.log("\n searching for student")
console.log(findStudent("Virat"));

//check Fail Students
console.log("\n Any Failures")
console.log(hasFailures() ? "Yes Some student failed" : "No failed students")

