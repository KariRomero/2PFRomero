import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { ILesson } from "./models";

const LESSONS_DB : ILesson[] = [
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

    addLessons(lesson:ILesson):Observable<ILesson[]>{
        if (lesson) {
            lesson.id = new Date().getTime();
            const updatedLessons = [...this.lessonsSubject.value, lesson];
            this.lessonsSubject.next(updatedLessons);
          }
          return this.getLessons();        
    }

    deleteLesson(id:number):Observable<ILesson[]>{
        const updatedLessons = LESSONS_DB.filter((l)=>l.id != id);
        this.lessonsSubject.next(updatedLessons);
        return of(updatedLessons);
    }

    updateLesson(id:number,data:ILesson):Observable<ILesson[]>{
        const updatedLessons = LESSONS_DB.map((l)=>l.id===id ? {...l,...data} : l);
        this.lessonsSubject.next(updatedLessons);
        return of(updatedLessons);
    }
}