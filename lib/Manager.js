const Employee = require("./Employee")

class Manager extends Employee {
    constructor(employee_name, id,email, officeNumber){
        super(employee_name, id,email)
        this.officeNumber= officeNumber
    }

    getOfficeNumber(){
        return this.officeNumber
    }


    getRole(){
        return "Manager"
    }

}

module.exports = Manager;