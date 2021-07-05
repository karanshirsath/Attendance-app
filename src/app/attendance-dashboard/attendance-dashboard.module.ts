import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttendanceDashboardPageRoutingModule } from './attendance-dashboard-routing.module';

import { AttendanceDashboardPage } from './attendance-dashboard.page';
import { CreateClassroomComponent } from './create-classroom/create-classroom.component';
import { ClassroomServiceService } from './classroom-service.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttendanceDashboardPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AttendanceDashboardPage,CreateClassroomComponent],
  providers:[ClassroomServiceService]
})
export class AttendanceDashboardPageModule {}
