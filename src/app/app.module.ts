import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TasksDoneComponent } from './tasks-done/tasks-done.component';
import { TaskOptionsComponent } from './task-options/task-options.component';
import { FormsModule } from '@angular/forms';
import { AddTaskComponent } from './add-task/add-task.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { AllTasksComponent } from './all-tasks/all-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    TasksDoneComponent,
    TaskOptionsComponent,
    AddTaskComponent,
    NotFoundComponent,
    TaskDetailsComponent,
    AllTasksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
