const express = require('express')
const { error } = require('protractor')
const router = express.Router()
const User = require('../models/user')
const Student = require('../models/student')
const Classroom = require('../models/classroom')

const { isTemplateLiteralTypeNode } = require('typescript')
router.get('/',async(req,res)=>{
  try{
    const users = await User.find()
    res.json(users)
  }catch(err){
     res.send("error:"+err)
  }

})
router.get('/get-students',async(req,res)=>{
  try{
    const students = await Student.find()
    res.json(students)
  }catch(err){
     res.send("error:"+err)
  }

})
router.get('/get-classrooms',async(req,res)=>{
  try{
    const classroom = await Classroom.find()
    res.json(classroom)
  }catch(err){
     res.send("error:"+err)
  }

})

router.post('/',async(req,res)=>{
console.log(req.body)
const userAvailable = await User.findOne({userName : req.body.userName});
console.log(userAvailable)
if(userAvailable){
  res.send({status:"failed",
   message:"User Name already Exist"})
}else{
  const user = new User(req.body)
try{
  const u1 =await user.save()
  res.send({user:u1,status:"success",message:"User created Successfully"})

}catch(err){
  res.send("Error")
}
}

})

router.post('/login',async(req,res)=>{

  try{
    const user = await User.findOne({userName:req.body.userName});
    if(user){
      if(user.password == req.body.password){
        res.send(
          {status:"success",
        message:"Logged in Successfully"}
        )
      }else{
        res.send(  {status:"failed",
        message:"Incorrect Password"}
        );

      }
    }else{
      res.send(
        {status:"failed",
      message:"User does not exist"
    }
      )
    }


  }catch(err){
    res.send(err)
  }
})

router.post('/save-students',async(req,res)=>{
  try{
  const students = await Student.insertMany(req.body)
  // await Student.deleteMany()
  res.send(students);

  }catch(err){
    res.send(err);
  }

})
router.post('/save-classroom',async(req,res)=>{
  const classroomAvailable = await Classroom.findOne({classCode : req.body.classCode});
  if(classroomAvailable){
    res.send({status:"failed",message:"Class code already exist"})
  }else{
    const classroom = Classroom(req.body)
    try{
    const c1 = await classroom.save()
    // const c1 = await Classroom.deleteMany()
    res.send({status:"success",message:"Classroom created successfully"})
    }catch(err){
      res.send(err);
    }
  }


})
router.delete('/delete-classroom/:id',async(req,res)=>{
  console.log(req);
  const c1 = await Classroom.deleteOne({_id :req.params.id});
  res.send(c1);
})
module.exports = router;
