import { NgModule } from  '@angular/core';
import { Routes, RouterModule } from  '@angular/router';
import { SamErrorsComponent } from '@ngrxsample/sam/feature-shell';
import { ErrorTypeFormComponent } from './error-type-form/error-type-form.component';



const  routes:  Routes  = [
{
path:  '',
component:  SamErrorsComponent,
children: [
{
path:  'errorForm/:id',
component:  ErrorTypeFormComponent
}
]
}
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export  class  SamFeatureShellRoutingModule { }