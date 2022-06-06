DROP DATABASE IF EXISTS employee_tracker;
CREATE DATABASE employee_tracker;

USE employee_tracker;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE employee_role (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  job_title VARCHAR(30) NOT NULL,
  salary DECIMAL,
  department_id INT NOT NULL,

  FOREIGN KEY (department_id) 
  REFERENCES department(id)
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  employee_role_id INT NOT NULL,
  manager_id INT,
  
  FOREIGN KEY (employee_role_id)
  REFERENCES employee_role(id)
);

