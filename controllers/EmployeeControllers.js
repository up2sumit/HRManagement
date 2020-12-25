const Employee = require('../models/Employee')

//show the list of the Employee
const index = (req, res, next) => {
    Employee.find()
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error =>{
        res.json({
            message: "An Error Occured"
        })
    })
}

const show = (req, res, next) =>{
    let employeeID = req.params.employeeID
    Employee.findById(employeeID)
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error =>{
        res.json({
            message: "An error occurred again!"
        })        
    })
}

// Add a new employee

const store = (req,res,next) =>{
    let employee = new Employee({
        name: req.body.name,
        active: req.body.active,
        employment: req.body.employment,
        email:req.body.email,
        personalEmail:req.body.personalEmail,
        jobTitle: req.body.jobTitle,
        lineManager: req.body.lineManager,
        teamName: req.body.teamName,
        startDate:req.body.startDate,
        companyName:req.body.companyName,
        gender: req.body.gender,
        salary: req.body.salary,
        dob: req.body.dob,
        phone:req.body.phone,
        personalPhone:req.body.personalPhone,
        address: req.body.address,
        bankName: req.body.bankName,
        accountNumber: req.body.accountNumber,
        dayAllowed:req.body.dayAllowed,
        dayApproved:req.body.dayApproved,
        sickDay: req.body.sickDay,
        workHome:req.body.workHome,
        dayRemaining:req.body.dayRemaining
    })

    if(req.file){
        employee.avatar = req.file.path
    }

    employee.save()
    .then(response=>{
        res.json({
            message: 'Employee added successfully!'
        })
    })
    .catch(error =>{
        res.json({
            message:'Error occoured during Employee Detail Creation!'
        })
    })
}

//update an employee
const update = (req,res,next)=>{
    let employeeID = req.body.employeeID

    let updateData ={
        name: req.body.name,
        active: req.body.active,
        employment: req.body.employment,
        email:req.body.email,
        personalEmail:req.body.personalEmail,
        jobTitle: req.body.jobTitle,
        lineManager: req.body.lineManager,
        teamName: req.body.teamName,
        startDate:req.body.startDate,
        companyName:req.body.companyName,
        gender: req.body.gender,
        salary: req.body.salary,
        dob: req.body.dob,
        phone:req.body.phone,
        personalPhone:req.body.personalPhone,
        address: req.body.address,
        bankName: req.body.bankName,
        accountNumber: req.body.accountNumber,
        dayAllowed:req.body.dayAllowed,
        dayApproved:req.body.dayApproved,
        sickDay: req.body.sickDay,
        workHome:req.body.workHome,
        dayRemaining:req.body.dayRemaining
    }

    Employee.findByIdAndUpdate(employeeID, {$set: updateData})
    .then(()=>{
        res.json({
            message: 'Employee Detailed Updated!'
        })
    })
    .catch(error=>{
        res.json({
            message : 'Error During Detail Updation!'
        }) 
    })
}

//Delete employee detail

const destroy = (req,res,next) => {
    let employeeID = req.body.employeeID
    Employee.findByIdAndRemove(employeeID)
    .then(()=>{
        res.json({
            message : 'Employee Detail Deleted!'
        })
    })
    .catch(error => {
       res.json({
           message:'Error Occured During Detail Deletion!'
       })
    })
}

module.exports = {
    index,show,store,update,destroy
}
