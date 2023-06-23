const { Router }= require('express');
const { isAlive, getEmployees, createEmployee, updateEmployeeField, deleteEmployee } = require('../controllers/index.controllers');
const { getDepartments, createDepartment, updateDepartmentField, deleteDepartment } = require('../controllers/index.controllers');
const router = Router();

router.get('/', isAlive)

router.get('/employees', getEmployees)
router.post('/employees', createEmployee)
router.put('/employees', updateEmployeeField)
router.delete('/employees', deleteEmployee)
router.get('/departments', getDepartments)
router.post('/departments', createDepartment)
router.put('/departments', updateDepartmentField)
router.delete('/departments', deleteDepartment)

module.exports = router