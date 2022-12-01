import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent {

  @Input() text!: string;


  @Input() type!: string;

}
