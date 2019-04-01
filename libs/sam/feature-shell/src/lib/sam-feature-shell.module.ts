import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamErrorsComponent } from './sam-errors/sam-errors.component';
import { ErrorTypeFormComponent } from './error-type-form/error-type-form.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SamErrorsComponent, ErrorTypeFormComponent]
})
export class SamFeatureShellModule {}
