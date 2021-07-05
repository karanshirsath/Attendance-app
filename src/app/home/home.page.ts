import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit{
  statusMessage = '';
  status;
  constructor(private formBuilder: FormBuilder , private userService: UserServiceService, private router: Router) {}
// eslint-disable-next-line @typescript-eslint/member-ordering
registrationForm: FormGroup;

ngOnInit(){
  this.registrationForm = this.formBuilder.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });
}

 submit() {
    this.userService.validateLogin(this.registrationForm.value).subscribe(res=>{
      this.statusMessage = res['message'];
      this.status = res['status'];
      if(this.status ==='success'){
        this.router.navigate(['attendance-dashboard']);
      }
    });
  }
}
