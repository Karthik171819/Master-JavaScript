const students = [];

function addStudents(name, mark){
    mark = Number(mark);
    mark = mark ?? 0;
    name = name.trim().toUpperCase();
    students.push({name, score})
}