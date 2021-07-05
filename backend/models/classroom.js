const mongoose = require('mongoose')

const classSchema = mongoose.Schema({
  classroomName:{ type: String , required: true },
  institutionName:{ type: String , required: true },
  batchNo:{ type: String , required: true },
  batchYear:{ type: String , required: true },
  classTeacher:{ type: String , required: true },
  classCode:{ type: String , required: true , unique : true},
  courseDescription:{ type: String , required: true },
  studentIds:{ type: Array , required: true },

})
module.exports = mongoose.model('Classroom',classSchema)
