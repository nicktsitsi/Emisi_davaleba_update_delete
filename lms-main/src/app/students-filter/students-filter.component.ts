import { Component, inject } from "@angular/core";
import { StudentsService } from "../students.service";

@Component({
  selector: 'app-students-filter',
  template: `
    <form (ngSubmit)="search()" novalidate>
      <label for="studentName">
        Student Name
      </label>
      <input
        type="text"
        name="studentName"
        [(ngModel)]="studentNameQuery"
        placeholder="Type student name"
        id="studentName"
      >
      <button>Search</button>
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
  background-color: #3498db;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #2980b9;
}

.filtersContainer {
  margin-top: 20px;
}

`],

  host: {
    class: 'filtersContainer'
  }
})
export class StudentsFilterComponent {
  studentNameQuery: string = '';
  studentsService = inject(StudentsService);

  search() {
    this.studentsService.search(this.studentNameQuery);
  }
}
