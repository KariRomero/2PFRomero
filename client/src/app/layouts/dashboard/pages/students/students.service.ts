import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { IStudent } from "./models";


let STUDENTS_DB : IStudent[] = [
    {
        id:1,
        nombre:'Karina',
        apellido:'Romero',
        email:'karina@test.com',
        curso: 'Angular',
        createdAt: new Date(),
        turno:'Mañana'
      },
      {
        id:2,
        nombre:'Nicolas',
        apellido:'Sanchez',
        email:'neke@test.com',
        curso: 'React',
        createdAt: new Date(),
        turno:'Noche'
      },
      {
        id:3,
        nombre:'Franco Matias',
        apellido:'Ravera',
        email:'fran@test.com',
        curso: 'React',
        createdAt: new Date(),
        turno:'Tarde'
      }
]

@Injectable({ providedIn:'root'})
export class StudentsService{

  private studentsSubject: BehaviorSubject<IStudent[]> = new BehaviorSubject<IStudent[]>(STUDENTS_DB);

    getStudents(): Observable<IStudent[]>{
        return this.studentsSubject.asObservable();
    }

    addStudents(data: IStudent) {
      if (data) {
        const newStudent: IStudent = { ...data, id: new Date().getTime(), createdAt: new Date() };
        STUDENTS_DB.push(newStudent);
        this.studentsSubject.next([...STUDENTS_DB]);
      }
    }

    deleteStudent(id: number) {
      STUDENTS_DB = STUDENTS_DB.filter((s) => s.id != id);
      this.studentsSubject.next([...STUDENTS_DB]);
    }

    updateStudent(id: number, data: IStudent) {
      STUDENTS_DB = STUDENTS_DB.map((s) => s.id === id ? { ...s, ...data } : s);
      this.studentsSubject.next([...STUDENTS_DB]);
    }

}