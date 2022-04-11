import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomeModule { }
