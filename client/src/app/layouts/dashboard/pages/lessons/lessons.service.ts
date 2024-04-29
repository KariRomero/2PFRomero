import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { ILesson } from "./models";

let LESSONS_DB : ILesson[] = [
    {
        id:1,
        clase:'Angular Material',
        horario:'12Pm-16Pm'
    },
    {
        id:2,
        clase:'Introduccion a JavaScript',
        horario:'18Pm-22pm'
    },
    {
        id:3,
        clase:'React Native',
        horario:'12Pm-16Pm'
    },
    {
        id:4,
        clase:'Introduccion a Typescript',
        horario:'8Am-12Pm'
    }
]

@Injectable({providedIn:'root'})
export class LessonsService{

    private lessonsSubject : BehaviorSubject<ILesson[]> = new BehaviorSubject<ILesson[]>(LESSONS_DB);

    getLessons():Observable<ILesson[]>{
        return this.lessonsSubject.asObservable();
    }

    addLessons(data:ILesson){
        if (data) {
            const newLesson : ILesson ={...data,id: new Date().getTime()}
            LESSONS_DB.push(newLesson);
            this.lessonsSubject.next([...LESSONS_DB])
          }
    }

    deleteLesson(id:number){
        LESSONS_DB = LESSONS_DB.filter((l)=>l.id!=id);
        this.lessonsSubject.next([...LESSONS_DB]);
    }

    updateLesson(id:number,data:ILesson){
        LESSONS_DB = LESSONS_DB.map((l)=>l.id===id ? {...l,...data} : l);
        this.lessonsSubject.next([...LESSONS_DB]);
    }
}