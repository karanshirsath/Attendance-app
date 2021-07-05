import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateNewUserPageRoutingModule } from './create-new-user-routing.module';

import { CreateNewUserPage } from './create-new-user.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    CreateNewUserPageRoutingModule
  ],
  declarations: [CreateNewUserPage]
})
export class CreateNewUserPageModule {}
