import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TasksService } from '../tasks.service';
import { Task } from './Task';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {

  formTask!: string;

  tasks$!: Observable<Task[]>;

  constructor(private tasksService: TasksService) {
      this.tasks$ = tasksService._tasksSubject.asObservable();
  }

  ngOnInit(): void {
    this.tasksService.getAll();  
  }

}
