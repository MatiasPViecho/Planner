import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Task } from '../tasks-list/Task';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit{
  
  mockTask: Task;

  constructor(private tasksService: TasksService ){
    this.mockTask = {
      id: 1,
      title: "Así se verá tu tarea",
      type: "Vida",
      details: "Mock Details",
      level: 2,
      done: true,
    };
  };
 
 
  
  @Input() formTask!: string;

  @Output() formTaskChange: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    // en Timeout para que primero cargue todo correctamente y luego se ejecute la acción
    setTimeout(() => {
      this.formTaskChange.emit(this.mockTask.title);
    }, 0);  //5s

  };

  changeTitle(event): void{
      console.log(event.path[0].value);
      let title: string = event.path[0].value;
      this.formTaskChange.emit(title);
  }

  addTask(formDetails: string, formType: string, formLevel: number): void{
      if(this.formTask != '' &&  formDetails != '' && formType != ''){
        let idNumber = this.tasksService.getNextId();
        let dato: Task = {
          id: idNumber,
          title: this.formTask,
          type: formType,
          details: formDetails,
          level: formLevel,
          done: false,
        }
        console.log(dato.title);
        this.tasksService.addTask(dato);
        this.formTaskChange.emit("");
      }
  }
}
