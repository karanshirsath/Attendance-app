import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';
import { ClassroomServiceService } from '../classroom-service.service';

@Component({
  selector: 'app-create-classroom',
  templateUrl: './create-classroom.component.html',
  styleUrls: ['./create-classroom.component.scss'],
})
export class CreateClassroomComponent implements OnInit {
  registrationForm: FormGroup;
  file;
  studentData;
  status;
  statusMessage;
  constructor(private fb: FormBuilder,private classService: ClassroomServiceService,private router:Router) { }
  ngOnInit() {
    this.registrationForm = this.fb.group({
      classroomName: ['', [Validators.required]],
      institutionName: ['', [Validators.required]],
      batchNo:['', [Validators.required]],
      batchYear:['', [Validators.required]],
      classTeacher: ['', [Validators.required]],
      classCode: ['', [Validators.required]],
      courseDescription: ['', [Validators.required]]
    });
  }

  navigate(){
    this.classService.getClassrooms();
    this.router.navigate(['/attendance-dashboard']);
  }
  getFileData(e){

    this.file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsBinaryString(this.file);
    fileReader.onload = (event)=>{
    const binaryData = event.target.result;
    const workbook = XLSX.read(binaryData,{type:'binary'});
    workbook.SheetNames.forEach(sheet=>{
      const data =XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
      this.studentData = data;
    });
    };
  }
  submit(){
    let classFormData = this.registrationForm.value;
    this.studentData.map(ele=>{
      ele.classCode = classFormData.classCode;
    });
    let studentIdArray = this.studentData.map((ele)=>ele.studentId);
    classFormData['studentIds']=studentIdArray;
    console.log(classFormData,this.studentData);
    this.classService.saveStudent(this.studentData).subscribe((res)=>{
         this.classService.saveClassroom(classFormData).subscribe((res)=>{
           this.statusMessage = res['message'];
           this.status = res['status'];
         });

    });


  }

}
