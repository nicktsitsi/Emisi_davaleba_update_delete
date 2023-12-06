import { Component, inject } from "@angular/core";
import { StudentsService } from "./students.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-create-student-page",
  template: `
    <form (ngSubmit)="create()">
      <label for="studentName">
        Student Name
      </label>
      <input type="text" name="studentName" [(ngModel)]="studentName" placeholder="Type student name" id="studentName">
      <label for="studentAge">
        Student Age
      </label>
      <input type="number" name="studentAge" [(ngModel)]="studentAge" placeholder="Type student age" id="studentAge">
      <button>Create</button>
    </form>
  `,
  styles: [`
  form {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: auto;
}

label {
  margin-bottom: 8px;
}

input {
  margin-bottom: 16px;
  padding: 8px;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

`],
})
export class CreateStudentPageComponent {
  studentsService = inject(StudentsService);
  router = inject(Router);
  studentName?: string;
  studentAge?: number;

  create() {
    this.studentsService.create({
      name: this.studentName!,
      age: this.studentAge!,
    });
    this.router.navigate(['/'])
  }
}
