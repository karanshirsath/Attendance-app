const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
  name:{ type: String , required: true },
  studentId:{ type: String , required: true, unique: true },
  address:{ type: String , required: true },
  emailId:{ type: String , required: true },
  classCode:{ type: String , required: true }
})
module.exports = mongoose.model('Student',studentSchema)
