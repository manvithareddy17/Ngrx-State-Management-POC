import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamErrorsComponent } from './sam-errors/sam-errors.component';
import { ErrorTypeFormComponent } from './error-type-form/error-type-form.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SamErrorsComponent, ErrorTypeFormComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SamFeatureShellModule {}
