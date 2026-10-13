const connection = require('../config/config');
var { isEmpty } = require('../helper/validate');

const getEmployee = async (req, res) => {
    try {
        var sql = "SELECT * FROM employee";
        const [result] = await connection.query(sql); // use connection, not db

        res.json({
            employees: result
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch employees" });
    }
};

const createEmployee = async (req, res) => {
    var{
        EmpCode,
        EmpName,
        Gender,
        PositionID,
        DepartmentID,
        OfficeID,
        DivisionID,
        BranchID,
        remark
    } = req.body;
    if(isEmpty(EmpCode)){
        return res.send({
            message: "EmpCode is required"
        });
    }

    try {
        // check if employee already exists
        var select = `SELECT * FROM employee WHERE EmpCode = '${EmpCode}'`;
        var [result] = await connection.query(select);
        if(result.length > 0){
            return res.send({
                message: "EmpCode already exists"
            });
        }

        // insert employee data
        var sql = `
        INSERT INTO employee (EmpCode, EmpName, Gender, PositionID, DepartmentID, OfficeID, DivisionID, BranchID, remark)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        var parameters = [EmpCode, EmpName, Gender, PositionID, DepartmentID, OfficeID, DivisionID, BranchID, remark];
        var [result] = await connection.query(sql, parameters);
        if(result.affectedRows === 0){
            return res.send({
                message: "Cannot create employee"
            });
        }
        // get the new employee back
        var [rows] = await connection.query(select);
        res.json({
            employee: rows[0]
        });
    } catch (err) {
        res.send({
            message: err.message
        });
    }
};

const updateEmployee = async (req, res) => {
    // try {
    //     const sql = `
    //   UPDATE employee 
    //   SET EmpName = ?, Gender = ?, PositionID = ?, DepartmentID = ?, 
    //       OfficeID = ?, DivisionID = ?, BranchID = ?, remark = ?
    //   WHERE EmpCode = ?
    // `;
    //     const [result] = await connection.query(sql, [
    //         req.body.EmpName,
    //         req.body.Gender,
    //         req.body.PositionID,
    //         req.body.DepartmentID,
    //         req.body.OfficeID,
    //         req.body.DivisionID,
    //         req.body.BranchID,
    //         req.body.remark,
    //         req.params.EmpCode
    //     ]);

    //     // check if employee is found
    //     if (result.affectedRows === 0) {
    //         return res.status(404).json({ error: "Employee not found" });
    //     }

    //     // Fetch the updated record back (EmpCode comes from the URL)
    //     const [rows] = await connection.query(
    //         "SELECT * FROM employee WHERE EmpCode = ?",
    //         [req.params.EmpCode]
    //     );

    //     res.json({ employee: rows[0] });
    // } catch (err) {
    //     console.error(err);
    //     res.status(500).json({ error: "Failed to update employee" });
    // }

    var EmpCode = req.params.id;
    var select = `SELECT * FROM employee WHERE EmpCode = '${EmpCode}'`;
    var [result] = await connection.query(select);
    if(result.length === 0){
        return res.send({
            message: "Employee not found"
        });
    }else{
        var{EmpName, Gender, PositionID, DepartmentID, OfficeID, DivisionID, BranchID, remark} = req.body;
        var updatesql = `
        UPDATE employee 
        SET EmpName = '${EmpName}', Gender = '${Gender}', PositionID = '${PositionID}', DepartmentID = '${DepartmentID}', OfficeID = '${OfficeID}', DivisionID = '${DivisionID}', BranchID = '${BranchID}', remark = '${remark}' WHERE EmpCode = '${EmpCode}'`;
        var [result] = await connection.query(updatesql);
        res.send({
            message: "Employee updated successfully"
        });
        
    }
};


const deleteEmployee = async (req, res) => {
    try {
        const sql = "DELETE FROM employee WHERE EmpCode = ?";
        const [result] = await connection.query(sql, [req.params.EmpCode]);

        // check if employee is found
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Employee not found" });
        }

        res.status(200).json({ message: "Employee deleted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to delete employee" });
    }
};


module.exports = { getEmployee, createEmployee, updateEmployee, deleteEmployee };
