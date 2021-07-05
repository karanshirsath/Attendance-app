import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttendanceDashboardPage } from './attendance-dashboard.page';
import { CreateClassroomComponent } from './create-classroom/create-classroom.component';

const routes: Routes = [
  {
    path: '',
    component: AttendanceDashboardPage
  },
  { path:'create-classroom',
    component:CreateClassroomComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttendanceDashboardPageRoutingModule {}
