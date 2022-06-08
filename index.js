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
            viewAllEmployees()
            calling()
            
        }if (answer.menu == "View All Roles"){        
            viewAllRoles()
            calling()
            
        }if (answer.menu == "View All Department"){
            viewAllDepartments()    
            calling()

        }if (answer.menu == "Add Employee"){
            addEmployee()  
            calling()   

        }if (answer.menu == "Add Role"){
            addRole()
            calling()

        }if (answer.menu == "Add Department"){
            addDepartment()
            calling()

        }if (answer.menu == "Update Employee Role"){
            updateEmployeeRole()
            calling()

        }if (answer.menu == "Quit"){
            return
        }
    })

}