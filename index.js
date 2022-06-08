const { viewAllDepartments, viewAllRoles, viewAllEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole} = require("./lib/menu-functions")
calling()

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
            viewAllDepartments()    

        }if (answer.menu == "View All Roles"){        
            viewAllRoles()

        }if (answer.menu == "View All Department"){
            viewAllEmployees()

        }if (answer.menu == "Add Employee"){
            addEmployee()     

        }if (answer.menu == "Add Role"){
            addRole()

        }if (answer.menu == "Add Department"){
            addDepartment()

        }if (answer.menu == "Update Employee Role"){
            updateEmployeeRole()

        }if (answer.menu == "Quit"){
            return
        }
    })

}