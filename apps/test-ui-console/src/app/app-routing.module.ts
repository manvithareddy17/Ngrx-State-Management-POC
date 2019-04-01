import { NgModule } from  '@angular/core';
import { Routes, RouterModule } from  '@angular/router';
import { ErrorsListComponent } from './errors-list/errors-list.component';
import { SamErrorsComponent } from '@ngrxsample/sam/feature-shell';
import { ErrorFormComponent } from './error-form/error-form.component';


const  routes:  Routes  = [
    {
    path:  '',
    component:  ErrorsListComponent,
    children: [
    {
    path:  'sam',
    component:  SamErrorsComponent
    },
    {
    path:  'editForm/:id',
    component:  ErrorFormComponent
    }
    ]}
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export  class  AppRoutingModule { }