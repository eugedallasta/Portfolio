import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Added by ng @angular/material for browser animations
// TO-DO ponerlo en material.module.ts
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Importacion de modulos
import { AboutModule } from './modules/about/about.module';
import { ContactModule } from './modules/contact/contact.module';
import { ExperienceModule } from './modules/experience/experience.module';
import { HomeModule } from './modules/home/home.module';
import { WorkModule } from './modules/work/work.module';

// Modulo material
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    ContactModule,
    ExperienceModule,
    HomeModule,
    WorkModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
