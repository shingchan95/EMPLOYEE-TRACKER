const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")


let Manager_profile;
let Intern_profile;
let Engineer_profile;

calling()

function calling(){
    var inquirer = require('inquirer');
    inquirer
     .prompt([
        {name:"role_list",
        type: "list",
        message: "Choose a role to add.",
        choices: ["Manager","Engineer","Intern","END"],
    },
    
]) 
    .then((role_name) => {
        if (role_name.role_list == "Manager"){
            employee_manager(role_name)
                        
        }if (role_name.role_list == "Intern"){
            employee_intern(role_name)            
            
        }if (role_name.role_list == "Engineer"){
            employee_engineer(role_name)            
            
        }if (role_name.role_list == "END"){
            return
        }
    })

    let employee_manager = () => {
        inquirer
        .prompt([
           {name:"employee_name",
           type: "input",
           message: "Enter employee name."
           },
       
           {name:"employee_id",
           type: "input",
           message: "Enter employee id."
           },
    
           {name:"employee_email",
           type: "input",
           message: "Enter employee email."
           },  
     
           {name:"employee_officeNumber",
           type: "input",
           message: "Enter employee officeNumber."
           },
        ]) 
    
        .then ((answers) => {
           Manager_profile = new Manager(answers.employee_name, answers.employee_id, answers.employee_email, answers.employee_officeNumber)
           manager_render()
           calling.call(this)
       })
       
    }
    let employee_intern = () => {
        inquirer
        .prompt([
           {name:"employee_name",
           type: "input",
           message: "Enter employee name."
           },
       
           {name:"employee_id",
           type: "input",
           message: "Enter employee id."
           },
    
           {name:"employee_email",
           type: "input",
           message: "Enter employee email."
           },      
    
           {name:"employee_school",
           type: "input",
           message: "Enter employee school."
           }         
    
       ]) 
       .then ((answers) => {
           Intern_profile = new Intern(answers.employee_name, answers.employee_id, answers.employee_email, answers.employee_school)
           intern_render()
           calling.call(this)
       })
    }
    let employee_engineer = () => {
        inquirer
        .prompt([
           {name:"employee_name",
           type: "input",
           message: "Enter employee name."
           },
       
           {name:"employee_id",
           type: "input",
           message: "Enter employee id."
           },
    
           {name:"employee_email",
           type: "input",
           message: "Enter employee email."
           },  
       
           {name:"employee_github",
           type: "input",
           message: "Enter employee github."
           },
    
        ])
    
        .then ((answers) => {
           Engineer_profile = new Engineer(answers.employee_name, answers.employee_id, answers.employee_email, answers.employee_github)
           engineer_render()
           calling.call(this)
       })
    }
    const manager_render = () => {
       const {employee_name, id, email, officeNumber}=Manager_profile
    
       let html_data = `<div class="team">
        <div class="card">
            <div class="card-header">
            <h2>${employee_name}</h2>
            <p>Employee ID: ${id}</p>
            <p>Email: <a href="mailto:${email}">${email}</a></p>
            <p>Office Number: ${officeNumber}</p>
            </div>
        </div>
    </div>    
    <!--managers-->`
       
       const fs = require('fs');
       fs.readFile("./Develop/dist/team.html",{encoding:'utf8', flag:'r'}, (err, data) =>{
           if (err) {
               return console.log(err);
           }
           var myHtml = data.replace("<!--managers-->", html_data);
    
               fs.writeFile("./Develop/dist/team.html", myHtml, 'utf8', function (err) {
                   if (err) return console.log(err);
               });
           });   
    }
    const intern_render = () => {
       const {employee_name, id, email, school}=Intern_profile
    
       let html_data = `<div class="team">
        <div class="card">
            <div class="card-header">
            <h2>${employee_name}</h2>
            <p>Employee ID: ${id}</p>
            <p>Email: <a href="mailto:${email}">${email}</a></p>
            <p>School: ${school}</p>
            </div>
        </div>
    </div>
    <!--intern-->`
       
       const fs = require('fs');
       fs.readFile("./Develop/dist/team.html",{encoding:'utf8', flag:'r'}, (err, data) =>{
           if (err) {
               return console.log(err);
           }
           var myHtml = data.replace("<!--intern-->", html_data);
    
               fs.writeFile("./Develop/dist/team.html", myHtml, 'utf8', function (err) {
                   if (err) return console.log(err);
               });
           });   
    }
    const engineer_render = () => {
       const {employee_name, id, email, github}=Engineer_profile
    
       let html_data = `<div class="team">
        <div class="card">
            <div class="card-header">
            <h2>${employee_name}</h2>
            <p>Employee ID: ${id}</p>
            <p>Email: <a href="mailto:${email}">${email}</a></p>
            <p>GitHub: <a href="${github}" target="_blank">${github}</a></p>
            </div>
        </div>
    </div>
    <!--engineer-->`
       
       const fs = require('fs');
       fs.readFile("./Develop/dist/team.html",{encoding:'utf8', flag:'r'}, (err, data) =>{
           if (err) {
               return console.log(err);
           }
           var myHtml = data.replace("<!--engineer-->", html_data);
    
               fs.writeFile("./Develop/dist/team.html", myHtml, 'utf8', function (err) {
                   if (err) return console.log(err);
               });
           });   
    }

}    



