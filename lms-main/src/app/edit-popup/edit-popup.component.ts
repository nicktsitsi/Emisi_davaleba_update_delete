// edit-popup.component.ts
import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { StudentInterface } from "../student.types";
import { StudentsService } from "../students.service";

@Component({
  selector: "app-edit-popup",
  template: `
    <div class="edit-popup">
      <label>Name:</label>
      <input [(ngModel)]="editedStudent.name" />
      <label>Age:</label>
      <input [(ngModel)]="editedStudent.age" />
      <button (click)="onUpdate()">Update</button>
    </div>
  `,
  styles: [`
    .edit-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  border: 1px solid #ccc;
}

label {
  display: block;
  margin-bottom: 8px;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
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

  `],
})
export class EditPopupComponent implements OnInit {
  @Input() editedStudent!: StudentInterface;
  @Output() update: EventEmitter<void> = new EventEmitter<void>();

  constructor(private studentsService: StudentsService) { }

  ngOnInit() {
    // Subscribe to the observable to receive updates
    this.studentsService.selectedStudent$.subscribe(updatedStudent => {

    });
  }

  onUpdate() {
    console.log('Updating...');
    this.studentsService.update(this.editedStudent);
    this.update.emit();
  }
}
