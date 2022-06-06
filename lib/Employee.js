class Employee {
    constructor(employee_name, id,email) {
        this.employee_name = employee_name
        this.id = id
        this.email = email
    }

        getName() {
            return this.employee_name
        }
        getId() {
            return this.id
        }
        getEmail(){
            return this.email
        }
        getRole(){
            return "employee"
        }
    
}

module.exports = Employee;