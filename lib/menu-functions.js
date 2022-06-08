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
    db.query('SELECT ', function (err, results) {
        console.log(results);
    });
}

let viewAllEmployees =() =>{
    db.query('SELECT ', function (err, results) {
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