const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(employee_name, id, email, github){
        super(employee_name, id,email)
        this.github= github
    }

    getGithub(){
        return this.github
    }
    getRole(){
        return "Engineer"
    }

}

module.exports = Engineer;