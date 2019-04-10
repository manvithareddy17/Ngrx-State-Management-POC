import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { SharedPartialState } from './shared.reducer';
import 'rxjs';
import {
  SharedActionTypes,
  UpdateError,
  UpdateErrorSuccess,
  UpdateErrorError,
  GetErrorsSuccess,
  GetErrorsError,
  GetErrors,
  AddErrorr,
  GetErrorSuccess,
  DeleteErrorrError,
  DeleteErrorr,
  GetError,
  AddErrorrError
} from './shared.actions';
import { Action } from '@ngrx/store';
import { ErrorTypeService } from '../errorTypeService';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class SharedEffects {
  constructor(
    private actions$: Actions, private svc: ErrorTypeService,
  ) { }
  //actions$ observable emits new value each time action gets dispatched 


  @Effect()
  getAllErrorTypes$: Observable<Action> = this.actions$.pipe(
    ofType(SharedActionTypes.GetErrorsType),
    switchMap(() => this.svc.findAll()),
    map(heroes => new GetErrorsSuccess(heroes)),
    catchError((err) => [new GetErrorsError(err)])
    //ofType is used to identify this is the right action. It takes one parametric type, which is type of the action 
    //Next specify whatr actiontype we are looking for
  );


  @Effect()
  getErrorTypeById$ = this.actions$.pipe(
    ofType(SharedActionTypes.GetErrorType),
    map((action: GetError) => action.payload),
    switchMap(id => this.svc.findById(id)),
    map(hero => new GetErrorSuccess(hero))
    //catchError((err) => [new GetErrorError(err)])
  );

  @Effect()
  createGame$ = this.actions$.pipe(
    ofType(SharedActionTypes.AddErrorrType),
    map((action: AddErrorr) => action.payload),
    switchMap(newError => this.svc.insert(newError)),
    // map((response) => new AddErrorr(response))
    catchError((err) => [new AddErrorrError(err)])
  );

  @Effect()
  updateGame$ = this.actions$.pipe(
    ofType(SharedActionTypes.UpdateErrorType),
    map((action: UpdateError) => action.payload),
    switchMap(error => this.svc.update(error)),
    map(() => new UpdateErrorSuccess()),
    catchError((err) => [new UpdateErrorError(err)]));

  @Effect()
  removeGame$ = this.actions$.pipe(
    ofType(SharedActionTypes.DeleteErrorrType),
    map((action: DeleteErrorr) => action.payload),
    switchMap(id => this.svc.delete(id)),
    // map((hero: ErrorType) => new DeleteErrorSuccess(hero)),
    catchError((err) => [new DeleteErrorrError(err)]),
   
  );

}