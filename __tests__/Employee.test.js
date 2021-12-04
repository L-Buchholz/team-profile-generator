const Employee = require("../lib/Employee.class");

//Shortens the Employee object to include all values as a variable
const createEmployee = () => new Employee("name", "id", "email");

describe("Employee", () => {
  //Calling Employee class as a function for a new instance of employee
  it("Should not error when called", () => {
    const employee = createEmployee();
  });
  //Testing the getName function
  it("Should retrieve the user value generated for 'name' when getName is called", () => {
    const employee = createEmployee();
    expect(employee.getName()).toEqual("name");
  });
  //Testing the ID function
  it("Should retrieve the user value generated for 'id' when getId is called", () => {
    const employee = createEmployee();
    expect(employee.getId()).toEqual("id");
  });
  //Testing the email function
  it("Should retrieve the user value generated for 'id' when getEmail is called", () => {
    const employee = createEmployee();
    expect(employee.getEmail()).toEqual("email");
  });
  //Testing the role function
  it("Should generate a value of 'Employee' when getRole is called", () => {
    const employee = createEmployee();
    expect(employee.getRole()).toEqual("Employee");
  });
});
