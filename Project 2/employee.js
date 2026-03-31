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
  console.log(`Employee  with ID${id} added successfully.`);
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
