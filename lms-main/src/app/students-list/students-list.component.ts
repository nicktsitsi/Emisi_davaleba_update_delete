import { Component, inject } from '@angular/core';
import { StudentsService } from "../students.service";

@Component({
  selector: 'app-students-list',
  template: `
    <app-single-student
      *ngFor="let student of studentsService.students"
      [student]="student"
    >
    </app-single-student>
  `,
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent {
  studentsService = inject(StudentsService);
}
