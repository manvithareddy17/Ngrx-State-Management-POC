import { Action } from '@ngrx/store';
import { ErrorType } from './shared.reducer';

export enum SharedActionTypes {
  SharedErrorStateLoad = '[Shared] Load Shared',
  SharedErrorStateLoaded = '[Shared] Shared Loaded',
  SharedErrorStateLoadError = '[Shared] Shared Load Error',
  GetErrors = '[Shared] Get All ErrorTypes from State',
  GetErrorsSuccess='[Shared] Get All ErrorTypes Success',
  GetErrorsError='[Shared] Get All ErrorTypes Error',
  GetError = '[Shared] Get Single Error by ID from State',
  GetErrorSuccess='[Shared] Get Single Error by ID Success',
  AddErrorr ='[Shared] Add Errror to  State',
  DeleteErrorr ='[Shared] Delete Errror from  State',
  DeleteErrorrSuccess='[Shared] Delete Error Success',
  DeleteErrorrError='[Shared] Delete Error Success',
  UpdateError = '[Shared] Update Error from State',
  UpdateErrorSuccess = '[Shared] Updates Error in State on Success',
  UpdateErrorError = '[Shared] Updated Error in Failure'
}

export class SharedErrorStateLoad implements Action {
  readonly type = SharedActionTypes.SharedErrorStateLoad;
}

export class SharedErrorStateLoadError implements Action {
  readonly type = SharedActionTypes.SharedErrorStateLoadError;
  constructor(public payload: any) {}
}

export class SharedErrorStateLoaded implements Action {
  readonly type = SharedActionTypes.SharedErrorStateLoaded;
  constructor(public payload: ErrorType[]) {}
}
//Get All Errors
//Get All Errors
export class GetErrors implements Action {
  readonly type = SharedActionTypes.GetErrors;
  //constructor(public payload: ErrorType[]) {}
}
export class GetErrorsSuccess implements Action {
  readonly type = SharedActionTypes.GetErrorsSuccess;
  constructor(public payload: ErrorType[]) {}
}
export class GetErrorsError implements Action {
  readonly type = SharedActionTypes.GetErrorsError;
  constructor(public payload: Error) {}
}
// Get Error By ID
export class GetError implements Action {
  readonly type = SharedActionTypes.GetError;
  constructor(public payload: number) {}
}

export class GetErrorSuccess implements Action {
  readonly type = SharedActionTypes.GetErrorSuccess;
  constructor(public payload: ErrorType) {}
}
//AddError
export class AddErrorr implements Action {
  readonly type = SharedActionTypes.AddErrorr;
  constructor(public payload: ErrorType) {}
}
//Delete Error by ID
export class DeleteErrorr implements Action {
  readonly type = SharedActionTypes.DeleteErrorr;
  constructor(public payload: ErrorType) {
    console.log(payload, 'I am delete error')
  }
}
export class DeleteErrorrError implements Action {
  readonly type = SharedActionTypes.DeleteErrorrError;
  constructor(public payload: Error) {}
}

//Update Error by ID
export class UpdateError implements Action {
  readonly type = SharedActionTypes.UpdateError;
  constructor(public payload: ErrorType) {}
}
export class UpdateErrorSuccess implements Action {
  readonly type = SharedActionTypes.UpdateErrorSuccess;
  //constructor(public payload: ErrorType) {}
}
export class UpdateErrorError implements Action {
  readonly type = SharedActionTypes.UpdateErrorError;
  constructor(public payload: Error) {}
}

export type SharedAction = SharedErrorStateLoad | SharedErrorStateLoaded | SharedErrorStateLoadError|GetErrors |GetErrorsSuccess | GetErrorsError |GetError| GetErrorSuccess| AddErrorr| DeleteErrorr | DeleteErrorrError| UpdateError| UpdateErrorSuccess| UpdateErrorError;

export const fromSharedActions = {
  SharedErrorStateLoad,
  SharedErrorStateLoadError,
  SharedErrorStateLoaded,
  GetErrors,
  GetErrorsSuccess,
  GetErrorsError,
  GetError,
  GetErrorSuccess,
  AddErrorr,
  UpdateError,
  DeleteErrorr,
  DeleteErrorrError,
  UpdateErrorSuccess,
  UpdateErrorError

};
