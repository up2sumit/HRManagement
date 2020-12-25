const mongoose  = require('mongoose')
const Schema   = mongoose.Schema

const employeeSchema    = new Schema({
    name : {
            type: String
    },
    active: {
        type: String
    },
    employment: {
        type: String
    },
    email: {
        type: String
    },
    personalEmail: {
        type: String
    },
    jobTitle : {
        type: String
    },
    lineManager: {
    type: String
    },
    teamName: {
    type: String
    },
    startDate: {
    type: String
    },
    companyName: {
    type: String
    },

    gender : {
            type: String
    },
    salary: {
        type: String
    },
    dob: {
        type: String
    },
    phone: {
        type: String
    },
    personalPhone: {
        type: String
    },
    address : {
        type: String
    },
    bankName: {
        type: String
    },
    accountNumber: {
        type: String
    },
    dayAllowed: {
        type: Number
    },
    dayApproved: {
        type: Number
    },
    sickDay : {
        type: Number
    },
    workHome: {
        type: Number
    },
    dayRemaining: {
        type: Number
    },
    avatar  :   {
        type: String
    }
}, {timestamps: true})


const Employee = mongoose.model('Employee', employeeSchema)
module.exports = Employee