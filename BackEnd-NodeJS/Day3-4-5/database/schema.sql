-- Create database + tables for this project
-- Run: mysql -u root < database/schema.sql

CREATE DATABASE IF NOT EXISTS backend_nodejs
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE backend_nodejs;

-- product table (fields from src/data/products.js)
CREATE TABLE IF NOT EXISTS product (
    id       INT AUTO_INCREMENT PRIMARY KEY,
    name     VARCHAR(100)  NOT NULL,
    category VARCHAR(50),
    price    DECIMAL(10,2) NOT NULL DEFAULT 0,
    stock    INT           NOT NULL DEFAULT 0
);

-- users table (fields from src/data/users.js)
CREATE TABLE IF NOT EXISTS users (
    id       INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50)  NOT NULL UNIQUE,
    email    VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role     VARCHAR(20)  NOT NULL DEFAULT 'user',
    isActive BOOLEAN      NOT NULL DEFAULT TRUE
);

-- student table (fields from src/data/students.js)
CREATE TABLE IF NOT EXISTS student (
    id        INT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(50)  NOT NULL,
    lastName  VARCHAR(50)  NOT NULL,
    age       INT,
    gender    VARCHAR(10),
    grade     VARCHAR(20),
    major     VARCHAR(100),
    email     VARCHAR(100) UNIQUE
);

-- a student has many courses, so courses go in their own table
CREATE TABLE IF NOT EXISTS student_course (
    student_id  INT         NOT NULL,
    course_code VARCHAR(20) NOT NULL,
    PRIMARY KEY (student_id, course_code),
    FOREIGN KEY (student_id) REFERENCES student(id) ON DELETE CASCADE
);

-- teacher table (fields from src/data/teachers.js)
CREATE TABLE IF NOT EXISTS teacher (
    id               INT AUTO_INCREMENT PRIMARY KEY,
    name             VARCHAR(100) NOT NULL,
    subject          VARCHAR(100),
    experience_years INT,
    email            VARCHAR(100) UNIQUE
);

-- employee table (used by src/controller/employee.controller.js)
CREATE TABLE IF NOT EXISTS employee (
    EmpCode      VARCHAR(20)  NOT NULL PRIMARY KEY,
    EmpName      VARCHAR(100) NOT NULL,
    Gender       VARCHAR(10),
    PositionID   INT,
    DepartmentID INT,
    OfficeID     INT,
    DivisionID   INT,
    BranchID     INT,
    remark       VARCHAR(255)
);

-- sample data
INSERT IGNORE INTO employee
    (EmpCode, EmpName, Gender, PositionID, DepartmentID, OfficeID, DivisionID, BranchID, remark)
VALUES
    ('E001', 'Sok Dara',   'Male',   1, 1, 1, 1, 1, 'Manager'),
    ('E002', 'Chan Sreyneang', 'Female', 2, 1, 1, 1, 1, NULL);

INSERT IGNORE INTO product (id, name, category, price, stock) VALUES
    (1, 'Wireless Mouse',       'Electronics', 19.99, 120),
    (2, 'Bluetooth Headphones', 'Audio',       59.99, 75);

INSERT IGNORE INTO users (id, username, email, password, role, isActive) VALUES
    (1, 'kimhy', 'kimhy@gmail.com', '123456', 'admin', TRUE),
    (2, 'lita',  'lita@gmail.com',  '123456', 'user',  TRUE);

INSERT IGNORE INTO student (id, firstName, lastName, age, gender, grade, major, email) VALUES
    (1, 'Sophea', 'Chan', 20, 'Female', 'Year 2', 'Computer Science',        'sophea.chan@example.com'),
    (2, 'Vannak', 'Kim',  22, 'Male',   'Year 3', 'Business Administration', 'vannak.kim@example.com');

INSERT IGNORE INTO student_course (student_id, course_code) VALUES
    (1, 'CS101'), (1, 'CS201'), (1, 'MATH202'),
    (2, 'BUS301'), (2, 'BUS305'), (2, 'ECON210');

INSERT IGNORE INTO teacher (id, name, subject, experience_years, email) VALUES
    (1, 'Sokha Chan', 'Mathematics',        8,  'sokha.chan@school.edu'),
    (2, 'Linda Phan', 'English Literature', 5,  'linda.phan@school.edu'),
    (3, 'Vuthy Seng', 'Physics',            12, 'vuthy.seng@school.edu');
