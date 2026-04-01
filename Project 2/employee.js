function Employees(id, name, department, salary) {
  this.id = id;
  this.name = name;
  this.department = department;
  this.salary = salary;
}

//create a simple employee database object
const employeeDB = {};

//function to add employee to the database
function addEmployee(id, name, department, salary) {
  const newEmployee = new Employees(id, name, department, salary);
  employeeDB[id] = newEmployee;
  console.log(`Employee  with ID ${id} added successfully.`);
}

//function to get all employees object.values
function getAllEmployees() {
  const employees = Object.values(employeeDB);
  console.log("List of All Employees:");
  employees.forEach((employee) => {
    console.log(
      `ID: ${employee.id}, Name: ${employee.name}, Department: ${employee.department}, Salary: ${employee.salary}`,
    );
  });
}

//Function to get employee details by ID Object.entries
function getEmployeeDetails(id) {
  if (employeeDB[id]) {
    return Object.entries(employeeDB[id]);
  }
  return `Employee with ID ${id} not found.`;
}

//function to update employee details by ID
function updateEmployee(id, updateDetails){
  if(employeeDB[id]){
    Object.assign(employeeDB[id], updateDetails);
  }
  else {
    console.log(`Employee with ID ${id} not found.`);
  }
}

//function to freeze the employee data
function freezeEmployee(id){
  if(employeeDB[id]){
    Object.freeze(employeeDB[id]);
    console.log("Employee data freezed")
  }
  else{
    console.log(`Employee with ID ${id} has been frozen.`);
  }
}

//function to seal employee data
function sealEmployee(id){
  if(employeeDB[id]){
    Object.seal(employeeDB[id]);
    console.log("Employee data sealed")
  }
  else{
    console.log(`Employee with ID ${id} has been sealed.`);
  }
}

//adding employeeinto addemployee function
addEmployee(1, "Lokendra", "IT", 50000);
addEmployee(2, "Anand", "HR", 45000);
addEmployee(3, "Ravi", "Finance", 55000);

//get all employee details
console.log("\n")
getAllEmployees();

//get employee details by ID
console.log("\n")
console.log(getEmployeeDetails(2));