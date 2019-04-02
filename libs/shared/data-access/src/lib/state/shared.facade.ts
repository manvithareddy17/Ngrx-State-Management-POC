import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { SharedPartialState } from './shared.reducer';
import { sharedQuery } from './shared.selectors';
import { SharedErrorStateLoad, AddErrorr, DeleteErrorr, GetErrorSuccess, UpdateError, UpdateErrorSuccess, GetErrors } from './shared.actions';
import { ErrorType } from '../errorType';

@Injectable()
export class SharedFacade {
  loaded$ = this.store.pipe(select(sharedQuery.hasLoaded));
  allErrors$ = this.store.pipe(select(sharedQuery.getAllErrors));
  allErrorApiExceptions$ = this.store.pipe(select(sharedQuery.getApiError));
  hasApiExceptions$ = this.store.pipe(select(sharedQuery.hasApiError));
  selectedError$ = this.store.pipe(select(sharedQuery.getError));
  constructor(private store: Store<SharedPartialState>) {}

  loadAll() {
    this.store.dispatch(new GetErrors());
  }
  currentSelectedError(error: ErrorType){
    this.store.dispatch(new GetErrorSuccess(error))
    console.log('I am current selected error',error)
  }
  addError(error: ErrorType)
  {
    this.store.dispatch( new AddErrorr(error))
  }
  updateError(error: ErrorType) {
    this.store.dispatch(new UpdateError(error))
    console.log('I am update', error)
    if (error) {
      alert(error.Id + error.Message + error.Type)
      alert('ErrorType updated successfully !!')
    }
  }
  removeError(error: ErrorType) {
    if (confirm('Are you sure do you want to delete this errortype?')) {
      this.store.dispatch(new DeleteErrorr(error));
      if (error != null) {
        alert('Error is deleted successfully !!')
      }
      console.log(error)
    }
  }
}
