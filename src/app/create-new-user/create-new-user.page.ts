import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-create-new-user',
  templateUrl: './create-new-user.page.html',
  styleUrls: ['./create-new-user.page.scss'],
})
export class CreateNewUserPage implements OnInit {
  registrationForm: FormGroup;
 statusMessage = '';
 status;
  constructor(private formBuilder: FormBuilder,private userService: UserServiceService) { }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      designation:['', [Validators.required]],
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    });
  }
  submit(){
    const userObj = {
      firstName: this.registrationForm.value.firstName,
      lastName: this.registrationForm.value.lastName,
      designation:this.registrationForm.value.designation,
      userName: this.registrationForm.value.userName,
      password: this.registrationForm.value.password,
    };
    this.userService.addNewUser(userObj).subscribe((res)=>{
      this.status = res['status'];
      this.statusMessage =res['message'];
    });

  }

}
