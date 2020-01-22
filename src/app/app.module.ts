import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

import { MatMenuModule } from '@angular/material/menu';
import { SchoolComponent } from './school/school.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatLineModule, MatRippleModule, MatOptionModule, MatCommonModule, MatPseudoCheckboxModule } from '@angular/material/core';
import { MainComponent } from './main/main.component';

import {MatButtonModule} from '@angular/material/button';
import { SubmitComponent } from './submit/submit.component';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    SchoolComponent,
    MainComponent,
    SubmitComponent,
    
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, MatToolbarModule, MatCardModule,
    MatMenuModule, MatFormFieldModule, MatOptionModule, MatSelectModule,
    MatRadioModule,MatButtonModule, MatLineModule,MatCommonModule, MatPseudoCheckboxModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
