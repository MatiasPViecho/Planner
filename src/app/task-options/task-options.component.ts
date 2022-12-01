import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../tasks-list/Task';

@Component({
  selector: 'app-task-options',
  templateUrl: './task-options.component.html',
  styleUrls: ['./task-options.component.scss']
})
export class TaskOptionsComponent implements OnInit{
  

  @Input()
  task: boolean;

  @Output()
  taskChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor () {
    this.task = false;
  }

  ngOnInit(): void {
    
  }
  
  finishTask(): void{
    let reverse: boolean = !this.task;
    this.taskChange.emit(reverse);
  }
}
