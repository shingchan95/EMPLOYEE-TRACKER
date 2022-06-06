const Employee = require("./Employee")

class Intern extends Employee {
    constructor(employee_name, id,email,school){
        super(employee_name, id,email)
        this.school= school
    }

    getSchool(){
        return this.school
    }
    getRole(){
        return "Intern"
    }

}

module.exports = Intern;