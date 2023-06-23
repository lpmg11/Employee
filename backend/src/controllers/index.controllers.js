const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'postgres',
    port:'5432'
})

const getEmployees = async(req,res) => {
    const response =await pool.query(
        `SELECT E.code, E.firstname, E.lastname, E.borndate, D.name AS "department"
         FROM employee E INNER JOIN department D ON E.department = D.code`)
    res.status(200).json(response.rows)
}
const createEmployee = async(req,res) => {
    const {firstname, lastname, borndate, department} = req.body
    //create a code employe using format 'EMP-0001'
    const ultiCode = await pool.query( `SELECT code FROM employee ORDER BY code DESC LIMIT 1`)
    const code = 'EMP-' + (parseInt(ultiCode.rows[0].code.split('-')[1]) + 1).toString().padStart(4, '0')

    const response = await pool.query(
        `INSERT INTO employee (code, firstname, lastname, borndate, department)
            VALUES ($1, $2, $3, $4, $5)`, [code, firstname, lastname, borndate, department])
    res.json({
        message: 'Employee Added successfully',
        body: {
            employee: {code, firstname, lastname, borndate, department}
        }
    })
}
const updateEmployeeField = async(req,res)=>{
    const {code, field, value} = req.body
    const response = await pool.query(
        `UPDATE employee SET ${field} = $1 WHERE code = $2`, [value, code])
    res.json({
        message: 'Employee Updated successfully',
        body: {
            employee: {code, field, value}
        }
    })
}
const deleteEmployee = async(req,res)=>{
    const {code} = req.body
    const response = await pool.query(
        `DELETE FROM employee WHERE code = $1`, [code])
    res.json({
        message: 'Employee Deleted successfully',
        body: {
            employee: {code}
        }
    })
}

const getDepartments = async(req,res) => {
    const response =await pool.query(
        `SELECT code, name, description FROM department`)
    res.status(200).json(response.rows)
}
const createDepartment = async(req,res) => {
    const {name, description} = req.body
    //create a code department using format 'DEP-0001'
    const ultiCode = await pool.query( `SELECT code FROM department ORDER BY code DESC LIMIT 1`)
    const code = 'DEP-' + (parseInt(ultiCode.rows[0].code.split('-')[1]) + 1).toString().padStart(4, '0')
    
    const response = await pool.query(
        `INSERT INTO department (code, name, description)
            VALUES ($1, $2, $3)`, [code, name, description])
    res.json({
        message: 'Department Added successfully',
        body: {
            department: {code, name, description}
        }
    })
}
const updateDepartmentField = async(req,res)=>{
    const {code, field, value} = req.body
    const response = await pool.query(
        `UPDATE department SET ${field} = $1 WHERE code = $2`, [value, code])
    res.json({
        message: 'Department Updated successfully',
        body: {
            department: {code, field, value}
        }
    })
}
const deleteDepartment = async(req,res)=>{
    const {code} = req.body
    const response = await pool.query(
        `DELETE FROM department WHERE code = $1`, [code])
    res.json({
        message: 'Department Deleted successfully',
        body: {
            department: {code}
        }
    })
}

const isAlive = (req, res) => {
    res.json({isAlive:true})
    }

module.exports = {
    getEmployees,
    createEmployee,
    updateEmployeeField,
    deleteEmployee,
    getDepartments,
    createDepartment,
    updateDepartmentField,
    deleteDepartment,
    isAlive
}