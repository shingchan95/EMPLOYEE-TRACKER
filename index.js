const {connect_mysql, viewAllDepartments, viewAllRoles, viewAllEmployees, addDepartment,addRole, addEmployee, updateEmployeeRole} = require('./lib/menu-functions'); 

const all_departments=[];



function calling(){
    
    const inquirer = require('inquirer');
    inquirer
     .prompt([
        {name:"menu",
        type: "list",
        message: "What would you like to do?",
        choices: ["View All Employees","View All Roles","View All Department","Add Employee", "Add Role","Add Department","Update Employee Role","Quit"],
    },
    
]) 
    .then((answer) => {
        if (answer.menu == "View All Employees"){
            viewAllEmployees()
            calling()
            
        }if (answer.menu == "View All Roles"){        
            viewAllRoles()
            calling()
            
        }if (answer.menu == "View All Department"){
            viewAllDepartments()    
            calling()

        }if (answer.menu == "Add Employee"){
            addemployee_response()
            calling()   

        }if (answer.menu == "Add Role"){       
            renderAllDepartments()
            addrole_response()
            calling()

            
        }if (answer.menu == "Add Department"){
            adddepartment_response()
            
            
        }if (answer.menu == "Update Employee Role"){
            updateEmployeeRole()
            calling()
            
        }if (answer.menu == "Quit"){
            return;
        }
    })

    
    let adddepartment_response  = () =>{
        inquirer
        .prompt([
            {name:"add_name",
            type: "input",
            message: "What is the name of the department?"
            },
        ]) 
    
        .then ((answers) => {
            addDepartment(answers.add_name)
            calling()
            
        })
    
    }

    let addrole_response  = () =>{
        inquirer
        .prompt([
            {name:"add_name",
            type: "input",
            message: "What is the name of the role?"
            },

            {name:"add_salary",
            type: "input",
            message: "What is the salary of the role?"
            },

            {name:"add_department",
            type: "list",
            message: "Which department does the role belong to?",
            choices: all_departments,
            },
        ]) 
    
        .then ((answers) => {

            console.log(answers.add_department)
            db.query('SELECT * FROM department ', function (err, results) {
                for (i=0; i< results.length; i++){
                if(results[i].department_name == answers.add_department){
                    department_id=results[i].id
                    addRole(answers.add_name, answers.add_salary, department_id)
                    break
                }
                
                }
            });
    
         
            
        })
    }

    let addemployee_response  = () =>{
        inquirer
        .prompt([
            {name:"add_firstname",
            type: "input",
            message: "What is the employee's first name?"
            },

            {name:"add_lastname",
            type: "input",
            message: "What is the employee's last name?"
            },

            {name:"add_employeerole",
            type: "list",
            message: "What is the employee's role?",
            choices: all_departments,
            },
        ]) 
    
        .then ((answers) => {

            console.log(answers.add_department)
            db.query('SELECT * FROM department ', function (err, results) {
                for (i=0; i< results.length; i++){
                if(results[i].department_name == answers.add_department){
                    department_id=results[i].id
                    addRole(answers.add_name, answers.add_salary, department_id)
                    break
                }
                
                }
            });
    
         
            
        })
    }
}

let renderAllDepartments =() =>{
    db.query('SELECT * FROM department ', function (err, results) {
        for (i=0; i< results.length; i++){
        all_departments.push(results[i].department_name)
        }

    });
}


// const renderAllRoles =() =>{
//     db.query('SELECT * FROM employee_role ', function (err, results) {
//         console.table(results);
//     });
// }

// const renderAllEmployees =() =>{
    
//     db.query('SELECT employee.id, employee.first_name, employee.last_name, employee_role.job_title, department.department_name, employee_role.salary, employee.manager_id AS manager FROM department JOIN employee_role ON department.id = employee_role.department_id JOIN employee ON employee_role.id = employee.employee_role_id', function (err, results) {
//         console.table(results);
//     });
// }



connect_mysql()

calling()