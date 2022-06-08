const mysql = require('mysql2');
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: '123456',
      database: 'employee_tracker'
    },
    console.log(`Connected to the employee_tracker database.`)
  );

let viewAllDepartments =() =>{
    db.query('SELECT * FROM department ', function (err, results) {
        console.log(results);
    });
}

let viewAllRoles =() =>{
    db.query('SELECT * FROM employee_role ', function (err, results) {
        console.log(results);
    });
}

let viewAllEmployees =() =>{

    db.query('SELECT employee.first_name, employee.last_name, employee_role.job_title, department.department_name, employee_role.salary, employee.manager_id AS manager FROM department JOIN employee_role ON department.id = employee_role.department_id JOIN employee ON employee_role.id = employee.employee_role_id', function (err, results) {
        console.log(results);
    });
}

let addDepartment =() =>{
    db.query('SELECT ', function (err, results) {
        console.log(results);
    });
}

let addRole =() =>{
    db.query('SELECT ', function (err, results) {
        console.log(results);
    });
}

let addEmployee =() =>{
    db.query('SELECT ', function (err, results) {
        console.log(results);
    });
}

let updateEmployeeRole =() =>{
    db.query('SELECT ', function (err, results) {
        console.log(results);
    });
}


module.exports = { viewAllDepartments, viewAllRoles, viewAllEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole};