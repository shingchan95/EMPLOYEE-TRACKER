INSERT INTO department (department_name)
VALUES ("Service"),
       ("Engineer");

  
INSERT INTO employee_role (job_title, salary, department_id)
VALUES ("customer services", 80000,1),
       ("Sales", 20000,1);

       

INSERT INTO employee (first_name, last_name, employee_role_id, manager_id)     
VALUES ("Lee", "Farr", 2, NULL),
       ("Jordan", "Parker", 2, 1),
       ("Sam", "Bailey", 2, 1);
    
       