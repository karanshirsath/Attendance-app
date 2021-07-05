import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClassroomServiceService } from './classroom-service.service';

@Component({
  selector: 'app-attendance-dashboard',
  templateUrl: './attendance-dashboard.page.html',
  styleUrls: ['./attendance-dashboard.page.scss'],
})
export class AttendanceDashboardPage implements OnInit {
  classroomData = [];
  constructor(private router: Router, private classService: ClassroomServiceService) { }

  ngOnInit() {
    // this.classService.getClassrooms().subscribe(res=>{

    //   let data = res;
    //   data.map(ele=>ele.toggle = false);
    //   this.classroomData = data;
    //   console.log(this.classroomData);

    // });
    this.classService.getClassrooms();
    this.classService.classroomData.subscribe(res=>{
      console.log(res);

      const data: any = res;
      data.map(ele=>ele.toggle = false);
      this.classroomData = data;
      console.log(this.classroomData);
    });
  }
  createClassroom(){
   this.router.navigate(['attendance-dashboard/create-classroom']);
  }
  deleteClasroom(classroom){
    let class_id = classroom._id;
    // console.log(class_id);
    this.classService.deleteClassroom(class_id);
  }
}
