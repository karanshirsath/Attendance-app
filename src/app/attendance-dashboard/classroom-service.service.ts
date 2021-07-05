/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassroomServiceService {
  classroomData = new Subject();
  constructor(private http: HttpClient) { }
  saveStudent(students){
    return this.http.post('http://localhost:9000/user/save-students',students);
  }
  saveClassroom(classroom){
    return this.http.post('http://localhost:9000/user/save-classroom',classroom);
  }
  getClassrooms(){
    this.http.get('http://localhost:9000/user/get-classrooms').subscribe(res=>{
      const response: any= res;
      this.classroomData.next(response);
      console.log(this.classroomData)
    });
  }
  deleteClassroom(id){
    this.http.delete('http://localhost:9000/user/delete-classroom/'+ id).subscribe(res=>{
      this.getClassrooms();
    });
  }
}
