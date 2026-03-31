function Employees(id, name, department, salary){
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary;
}

//create a simple employee database object
const employee = {};

//function to add employee to the database
function addEmployee(id, name, department, salary){
    const newEmployee = new Employees(id, name, department, salary);
    employee[id] = newEmployee;
    console.log(`Employee  with ID${id} added successfully.`);
}
