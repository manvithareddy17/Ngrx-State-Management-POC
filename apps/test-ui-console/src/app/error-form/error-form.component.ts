import { Component, OnInit } from '@angular/core';
import { SharedFacade } from '@ngrxsample/shared/data-access';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorType } from 'libs/shared/data-access/src/lib/errorType';

@Component({
  selector: 'ngrxsample-error-form',
  templateUrl: './error-form.component.html',
  styleUrls: ['./error-form.component.scss']
})
export class ErrorFormComponent implements OnInit {
  error: ErrorType;
  errorTypes: FormGroup;
  submitted: boolean = false;
  globalErros$ = this.facade.allErrors$;
  selectedError$= this.facade.selectedError$;

  constructor(private formBuilder: FormBuilder, private router : Router, private facade: SharedFacade) { }
 
  ngOnInit() {
    this.errorTypes = this.formBuilder.group({
      id: ['', Validators.required],
      message: ['', Validators.required],
      type: ['', Validators.required]
    });
  }
  onSave(error: ErrorType){
    this.submitted = true;
    if (this.errorTypes.invalid) {
      return;
    }
    if(this.errorTypes.controls.message.value == '' && this.errorTypes.controls.type.value == 'Error') {
        this.router.navigate(['']);
    }else {
     
      this.facade.updateError(error)
      this.router.navigate(['']);
    }
   
  }

  onBack() {
    this.router.navigate(['']);
  }

}
