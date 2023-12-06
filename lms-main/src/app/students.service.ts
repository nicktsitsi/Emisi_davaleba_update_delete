import { Injectable } from "@angular/core";
import { StudentInterface } from "./student.types";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class StudentsService {


  originalStudents: StudentInterface[] = [
    {
      name: 'John',
      age: 20
    },
    {
      name: 'Jane',
      age: 21
    },
    {
      name: 'Jack',
      age: 22
    }
  ];

  private studentsSubject = new BehaviorSubject<StudentInterface[]>([...this.originalStudents]);
  students$ = this.studentsSubject.asObservable();

  private selectedStudentSubject = new BehaviorSubject<StudentInterface | null>(null);
  selectedStudent$ = this.selectedStudentSubject.asObservable();


  students = [...this.originalStudents];

  search($event: string) {
    this.students = this.originalStudents.filter(student => student.name.toLowerCase().includes($event.toLowerCase()));
  }

  create(student: StudentInterface) {
    this.originalStudents.push(student);
    this.students = [...this.originalStudents];
  }

  delete(student: StudentInterface) {
    const index = this.originalStudents.findIndex(s => s === student);
    if (index !== -1) {
      this.originalStudents.splice(index, 1);
      this.students = [...this.originalStudents];
    }

  }

  update(editedStudent: StudentInterface) {
    const index = this.originalStudents.findIndex(s => s === this.selectedStudentSubject.value);
    if (index !== -1) {
      this.originalStudents[index] = { ...editedStudent };
      this.studentsSubject.next([...this.originalStudents]);
      this.selectedStudentSubject.next({ ...editedStudent });

    }

  }
  setSelectedStudent(student: StudentInterface | null) {
    this.selectedStudentSubject.next(student);
  }
}
