const express   = require('express')
const router    = express.Router()

const EmployeeController = require('../controllers/EmployeeControllers')
const Employee = require('../models/Employee')
const upload    = require('../middelware/upload')
const authenticate = require('../middelware/authenticate')

router.get('/', EmployeeController.index)
router.get('/show/:employeeID',EmployeeController.show)
router.post('/store',upload.single('avatar'), EmployeeController.store)
router.post('/update',EmployeeController.update)
router.post('/delete',EmployeeController.destroy)


module.exports = router