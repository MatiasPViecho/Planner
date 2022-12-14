import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from './tasks-list/Task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private _tasks: Task[] = [
    {
      id: 1,
      title: "Finalizar las clases del seminario",
      type: "Facultad",
      details: "Terminar las 8 clases del seminario, además de completar las autoevaluaciones, tomar nota",
      level: 2,
      done: true,
    },
    {
      id: 2,
      title: "Completar entrega Angular",
      type: "Facultad",
      details: "Comenzar el TPE, armar la idea, evaluar lo que se necesita hacer y terminar la entrega",
      level: 4,
      done: true,
    },
    {
      id: 3,
      title: "Lorem",
      type: "Vida",
      details: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, officia ad expedita nam esse voluptatem iusto consequuntur omnis provident possimus adipisci atque! Laudantium debitis autem tempore provident possimus minus nam?",
      level: 1,
      done: true,
    },
    {
      id: 4,
      title: "Lorem",
      type: "Vida",
      details: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, officia ad expedita nam esse voluptatem iusto consequuntur omnis provident possimus adipisci atque! Laudantium debitis autem tempore provident possimus minus nam?",
      level: 1,
      done: true,
    },
    {
      id: 5,
      title: "Lorem",
      type: "Facultad",
      details: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, officia ad expedita nam esse voluptatem iusto consequuntur omnis provident possimus adipisci atque! Laudantium debitis autem tempore provident possimus minus nam?",
      level: 1,
      done: true,
    },
    {
      id: 6,
      title: "Lorem",
      type: "Vida",
      details: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, officia ad expedita nam esse voluptatem iusto consequuntur omnis provident possimus adipisci atque! Laudantium debitis autem tempore provident possimus minus nam?",
      level: 1,
      done: true,
    },
  ];

   _tasksSubject: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]);
  public items: Observable<Task[]> = this._tasksSubject.asObservable();

  constructor() { }

  public getAll(): void{
    this._tasksSubject.next(this._tasks);
  }

  public finishTask(task: Task): void{
    console.log("task service finish task");
    this._tasks.forEach(t => {
      console.log("recorro " + t.title);
        if(t == task){
          console.log(t.done);
          t.done = true;
          console.log(t.title + " TRUE");
          console.log(t.done);
        }
    });
    this._tasksSubject.next(this._tasks);
  }

  public getNextId(): number{
    let lastID: number = this._tasks[this._tasks.length-1].id;
    lastID++;
    return lastID;
  }

  public addTask(task: Task): void{
    this._tasks.push(task);
  }

  public getPorcentajeCompletadas(): number{
    let total: number = this._tasks.length;
    let completadas: number = 0;
    this._tasks.forEach(t => {
        if(t.done == true){
          completadas++;
        }
    });

    return Math.round((completadas/total)*100);
  }

}
