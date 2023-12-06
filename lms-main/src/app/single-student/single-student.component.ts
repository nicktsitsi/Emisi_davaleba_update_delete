// single-student.component.ts
import { Component, HostListener, Input, ChangeDetectorRef, OnInit } from "@angular/core";
import { StudentInterface } from "../student.types";
import { StudentsService } from "../students.service";

@Component({
  selector: "app-single-student",
  template: `
    <div class="student" (click)="toggle()">
      <span class="student__name">
        {{ isEditing ? editedStudent.name : student.name }}
      </span>
      <span class="student__age" *ngIf="expanded">
        {{ isEditing ? editedStudent.age : student.age }}
      </span>
      <button (click)="onDelete()">Delete</button>
      <button (click)="onEdit()">Edit</button>

      <app-edit-popup
        *ngIf="isEditing"
        [editedStudent]="editedStudent"
        (update)="onUpdate()"
      ></app-edit-popup>
    </div>
  `,
  styleUrls: ["./single-student.component.css"],
  host: {
    class: "student",
  },
})
export class SingleStudentComponent implements OnInit {
  @Input() student!: StudentInterface;
  expanded = false;
  isEditing = false;
  editedStudent: StudentInterface = { name: '', age: 0 };

  constructor(
    private studentsService: StudentsService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    // Subscribe to the observable to receive updates
    this.studentsService.selectedStudent$.subscribe(updatedStudent => {
      if (updatedStudent && updatedStudent === this.student) {
        this.student = updatedStudent;
        // Manually trigger change detection
        this.cdr.detectChanges();
      }
    });
  }

  @HostListener("click")
  toggle() {
    this.expanded = !this.expanded;
  }

  onDelete() {
    this.studentsService.delete(this.student);
  }

  onEdit() {
    this.isEditing = true;
    this.editedStudent = {
      name: this.student?.name || '',
      age: this.student?.age || 0
    };
  }

  onUpdate() {
    this.studentsService.update(this.editedStudent);
    this.isEditing = false;
  }
}
