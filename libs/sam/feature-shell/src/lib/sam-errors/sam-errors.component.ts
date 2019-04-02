import { Component, OnInit } from '@angular/core';
import { SharedFacade } from '@ngrxsample/shared/data-access'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ErrorType } from 'libs/shared/data-access/src/lib/errorType';
@Component({
  selector: 'ngrxsample-sam-errors',
  templateUrl: './sam-errors.component.html',
  styleUrls: ['./sam-errors.component.scss']
})
export class SamErrorsComponent implements OnInit {

  globalErros$ = this.sharedDataAccessSvc.allErrors$;
  errorListFormGroup: FormGroup;
  formSubmitted = false;
  errorList: ErrorType[];
  
  constructor(private sharedDataAccessSvc: SharedFacade, private formBuilder: FormBuilder, private router: Router, private httpService: HttpClient) { 
   //Loads all the Errors
   this.loadAllErrorTypes();
   
  }

  ngOnInit() {

    this.errorListFormGroup = this.formBuilder.group({
      Id: ['', Validators.required],
      Message: ['', Validators.required],
      Type: ['', Validators.required]
    });
  }
  loadAllErrorTypes() {
    this.formSubmitted = true;
    if (this.errorList !== null) {
      this.sharedDataAccessSvc.loadAll()
    }
  }
  editError(error: ErrorType) {
    if (error.Id != null) {
      this.sharedDataAccessSvc.currentSelectedError(error);
      let id = error.Id
      this.router.navigate(['errorForm' + '/' + id])
    }

  }
  addError() {
    this.sharedDataAccessSvc.addError({ 'Id': Math.floor((Math.random() * 10) + 1).toString(), 'Message': "Praveen has added an error", 'Type': 'Error' })
  }

  removeError(error: ErrorType) {
    this.sharedDataAccessSvc.removeError(error);
  }
  redirectToSam(){
    this.router.navigate(['sam'])
  }
}
