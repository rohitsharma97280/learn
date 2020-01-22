import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolComponent } from './school/school.component';
import { MainComponent } from './main/main.component';
import { SubmitComponent } from './submit/submit.component';



const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'school', component: SchoolComponent },
  { path: 'submit',component: SubmitComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
