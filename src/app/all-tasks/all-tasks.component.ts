import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../tasks-list/Task';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.scss']
})
export class AllTasksComponent implements OnInit{
  
  tasks$!: Observable<Task[]>;
  completadasPorcentaje: number
  
  constructor (private tasksService: TasksService) {
    this.tasks$ = tasksService._tasksSubject.asObservable();
    this.completadasPorcentaje = 0;
  }

  

  ngOnInit(): void {
      this.tasksService.getAll();
      this.completadasPorcentaje = this.tasksService.getPorcentajeCompletadas();
  }

}
