import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { IStudent } from "./models";


const STUDENTS_DB : IStudent[] = [
    {
        id:1,
        nombre:'Karina',
        apellido:'Romero',
        email:'karina@test.com',
        curso: 'Angular',
        createdAt: new Date()
      },
      {
        id:2,
        nombre:'Nicolas',
        apellido:'Sanchez',
        email:'neke@test.com',
        curso: 'React',
        createdAt: new Date()
      },
      {
        id:3,
        nombre:'Franco Matias',
        apellido:'Ravera',
        email:'fran@test.com',
        curso: 'React',
        createdAt: new Date()
      }
]

@Injectable({ providedIn:'root'})
export class StudentsService{

  private studentsSubject: BehaviorSubject<IStudent[]> = new BehaviorSubject<IStudent[]>(STUDENTS_DB);

    getStudents(): Observable<IStudent[]>{
        return this.studentsSubject.asObservable();
    }

    addStudents(student: IStudent): Observable<IStudent[]> {
      if (student) {
        student.id = new Date().getTime();
        student.createdAt = new Date();
        const updatedStudents = [...this.studentsSubject.value, student];
        this.studentsSubject.next(updatedStudents);
      }
      return this.getStudents();
    }

    deleteStudent(id:number): Observable<IStudent[]> {
      const updatedStudents = STUDENTS_DB.filter((s)=>s.id != id);
      this.studentsSubject.next(updatedStudents);
      return of(updatedStudents);
    }

    updateStudent(id:number, data:IStudent):Observable<IStudent[]>{
      const updatedStudents  = STUDENTS_DB.map((student)=>student.id===id ? {...student, ...data} : student)
      this.studentsSubject.next(updatedStudents);
      return of(updatedStudents)
    }
  

}