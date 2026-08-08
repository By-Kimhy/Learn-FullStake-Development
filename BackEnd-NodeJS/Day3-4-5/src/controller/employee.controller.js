const connection = require('../config/config');

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
    try {
        const sql = `
      INSERT INTO employee 
        (EmpCode, EmpName, Gender, PositionID, DepartmentID, OfficeID, DivisionID, BranchID, remark) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
        await connection.query(sql, [
            req.body.EmpCode,
            req.body.EmpName,
            req.body.Gender,
            req.body.PositionID,
            req.body.DepartmentID,
            req.body.OfficeID,
            req.body.DivisionID,
            req.body.BranchID,
            req.body.remark
        ]);

        // Fetch the inserted record back
        const [rows] = await connection.query(
            "SELECT * FROM employee WHERE EmpCode = ?",
            [req.body.EmpCode]
        );

        res.json({ employee: rows[0] });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to create employee" });
    }
};



const updateEmployee = async (req, res) => {
    try {
        const sql = `
      UPDATE employee 
      SET EmpName = ?, Gender = ?, PositionID = ?, DepartmentID = ?, 
          OfficeID = ?, DivisionID = ?, BranchID = ?, remark = ?
      WHERE EmpCode = ?
    `;
        const [result] = await connection.query(sql, [
            req.body.EmpName,
            req.body.Gender,
            req.body.PositionID,
            req.body.DepartmentID,
            req.body.OfficeID,
            req.body.DivisionID,
            req.body.BranchID,
            req.body.remark,
            req.params.EmpCode
        ]);

        // Fetch the inserted record back
        const [rows] = await connection.query(
            "SELECT * FROM employee WHERE EmpCode = ?",
            [req.body.EmpCode]
        );

        res.json({ employee: rows[0] });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to create employee" });
    }
};


const deleteEmployee = async (req, res) => {
    try {
        const sql = "DELETE FROM employee WHERE EmpCode = ?";
        const [result] = await connection.query(sql, [req.params.EmpCode]);

        res.status(200).json({ message: "Employee deleted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to create employee" });
    }
};


module.exports = { getEmployee, createEmployee, updateEmployee, deleteEmployee };
