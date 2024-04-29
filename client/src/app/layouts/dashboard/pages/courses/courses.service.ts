import { Injectable } from "@angular/core";
import { ICourse } from "./models";
import { BehaviorSubject, Observable, of } from "rxjs";

const COURSES_DV : ICourse[] = [
    {
        id:1,
        curso:'Angular',
        turno:'Mañana'
    },
    {
        id:2,
        curso:'JavaScript',
        turno:'Noche'
    },
    {
        id:3,
        curso:'React',
        turno:'Tarde'
    }
]

@Injectable({providedIn:'root'})
export class CoursesService{

    private coursesSubject : BehaviorSubject<ICourse[]> = new BehaviorSubject<ICourse[]>(COURSES_DV);

    getCourses():Observable<ICourse[]>{
        return this.coursesSubject.asObservable();
    }

    addCourses(course:ICourse):Observable<ICourse[]>{
        if(course){
            course.id = new Date().getTime();
            const updatedCourses = [...this.coursesSubject.value, course];
            this.coursesSubject.next(updatedCourses);
        }
        return this.getCourses();
    }

    deleteCourse(id:number):Observable<ICourse[]>{
        const updatedCourses = COURSES_DV.filter((c)=>c.id!=id);
        this.coursesSubject.next(updatedCourses);
        return of(updatedCourses);
    }

    updateCourse(id:number,data:ICourse):Observable<ICourse[]>{
        const updatedCourses = COURSES_DV.map((c)=>c.id===id ? {...c,...data} : c);
        this.coursesSubject.next(updatedCourses);
        return of(updatedCourses);
    }
}