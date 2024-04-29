import { Injectable } from "@angular/core";
import { ICourse } from "./models";
import { BehaviorSubject, Observable, of } from "rxjs";

let COURSES_DV : ICourse[] = [
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

    addCourses(data:ICourse){
        if(data){
            const newCourse:ICourse={...data, id: new Date().getTime()}
            COURSES_DV.push(newCourse);
            this.coursesSubject.next([...COURSES_DV]);
        }        
    }

    deleteCourse(id:number){
        COURSES_DV = COURSES_DV.filter((c)=>c.id!=id);
        this.coursesSubject.next([...COURSES_DV])
    }

    updateCourse(id:number,data:ICourse){
        COURSES_DV = COURSES_DV.map((c)=>c.id===id ? {...c,...data} : c);
        this.coursesSubject.next([...COURSES_DV])        
    }
}