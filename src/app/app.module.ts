import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { HeaderComponent } from './components/header/header.component';
import { ProgrammingLanguagesComponent } from './components/programming-languages/programming-languages.component';
import { TechonologiesComponent } from './components/techonologies/techonologies.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { WorkExperiencesComponent } from './components/work-experiences/work-experiences.component';
import { StrongPointsComponent } from './components/strong-points/strong-points.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FileSaverModule } from 'ngx-filesaver';
import { HttpClientModule } from '@angular/common/http';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProgrammingLanguagesComponent,
    TechonologiesComponent,
    PortfolioComponent,
    WorkExperiencesComponent,
    StrongPointsComponent,
    ContactInfoComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FontAwesomeModule,
    FileSaverModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
