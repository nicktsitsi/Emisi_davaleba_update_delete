import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SingleStudentComponent } from "./single-student/single-student.component";
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentsPageComponent } from "./students-page.component";
import { RouterModule } from "@angular/router";
import { CreateStudentPageComponent } from "./create-student-page.component";
import { FormsModule } from "@angular/forms";
import { StudentsFilterComponent } from "./students-filter/students-filter.component";
import { StudentsService } from "./students.service";
import { EditPopupComponent } from './edit-popup/edit-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleStudentComponent,
    StudentsListComponent,
    StudentsPageComponent,
    CreateStudentPageComponent,
    StudentsFilterComponent,
    EditPopupComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: "",
        component: StudentsPageComponent
      },
      {
        path: "create",
        component: CreateStudentPageComponent
      }
    ]),
    FormsModule
  ],
  providers: [StudentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
