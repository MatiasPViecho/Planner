import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../tasks-list/Task';
import { TasksService } from '../tasks.service';


@Component({
  selector: 'app-tasks-done',
  templateUrl: './tasks-done.component.html',
  styleUrls: ['./tasks-done.component.scss']
})
export class TasksDoneComponent {
  tasks$!: Observable<Task[]>;

  
  
  constructor(private tasksService: TasksService) {
      this.tasks$ = tasksService._tasksSubject.asObservable();
  }

  ngOnInit(): void {
    this.tasksService.getAll();  
  }

  details!: string;

  getDetails(details: string): void{
    if(this.details == details)
      this.details = "";
    else
      this.details = details;
    console.log(details);
  }
}
