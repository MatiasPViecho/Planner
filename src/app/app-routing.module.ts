import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TasksDoneComponent } from './tasks-done/tasks-done.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'tasks',
    component: TasksListComponent,
  },
  {
    path: 'done',
    component: TasksDoneComponent,
  },
  {
    path: 'list',
    component: AllTasksComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
