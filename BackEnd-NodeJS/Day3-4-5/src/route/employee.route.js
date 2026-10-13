var {getEmployee,createEmployee,updateEmployee,deleteEmployee} = require('../controller/employee.controller');

function employeeRoute(app) {
    // get all employees
    app.get('/api/v1/employee/getAllEmployee',getEmployee)
    // create a employee
    app.post('/api/v1/employee/createEmployee',createEmployee)
    //update a employee
    app.put('/api/v1/employee/updateEmployee/:id',updateEmployee)
    //delete a employee
    app.delete('/api/v1/employee/deleteEmployee/:id',deleteEmployee)   
}

//export employee route
module.exports = employeeRoute;



