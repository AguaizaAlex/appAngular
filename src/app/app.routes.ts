import { Routes } from '@angular/router';
import { TodoformComponent } from './todoform/todoform.component';
import { TodolistComponent } from './todolist/todolist.component';

export const routes: Routes = [
    {path: '', redirectTo: '/list', pathMatch: 'full'},
    {path: 'list', component: TodolistComponent},
    {path: 'registrar', component: TodoformComponent},
];
