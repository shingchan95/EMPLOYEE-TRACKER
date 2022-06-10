let all_departments;

const connect_mysql = () =>{
    const mysql = require('mysql2');
    
    db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'employee_tracker'
    },
    console.log(`Connected to the employee_tracker database.`)
    );
    
}

const viewAllDepartments =() =>{
    db.query('SELECT * FROM department ', function (err, results) {
        console.log(results);

});
}

const viewAllRoles =() =>{
    
    db.query('SELECT * FROM employee_role ', function (err, results) {
        console.table(results);
    });
}

const viewAllEmployees =() =>{
    
    db.query('SELECT employee.id, employee.first_name, employee.last_name, employee_role.job_title, department.department_name, employee_role.salary, employee.manager_id AS manager FROM department JOIN employee_role ON department.id = employee_role.department_id JOIN employee ON employee_role.id = employee.employee_role_id', function (err, results) {
        console.table(results);
    });
}

const addDepartment = (answer) =>{
    db.query(`INSERT INTO department (department_name) VALUES (?)`, answer, function (err, results) {
        viewAllDepartments();
    });
}

const addRole =(job_title, salary, department_id  ) =>{
    db.query('INSERT INTO employee_role (job_title, salary, department_id) VALUES (?, ?, ?)',[job_title,salary,department_id], function (err, results) {
        console.log(results);
    });
}

const addEmployee =() =>{
    db.query('SELECT ', function (err, results) {
        console.log(results);
    });
}

const updateEmployeeRole =() =>{
    db.query('SELECT ', function (err, results) {
        console.log(results);
    });
}



module.exports = {connect_mysql, viewAllDepartments, viewAllRoles, viewAllEmployees, addDepartment,addRole, addEmployee, updateEmployeeRole} ;
