import { Action } from '@ngrx/store';
import { ErrorType } from '../errorType';


export enum SharedActionTypes {
  SharedErrorStateLoadType = '[Shared] Load Shared',
  SharedErrorStateLoadedType = '[Shared] Shared Loaded',
  SharedErrorStateLoadErrorType = '[Shared] Shared Load Error',
  GetErrorsType = '[Shared] Get All ErrorTypes from State',
  GetErrorsSuccessType='[Shared] Get All ErrorTypes Success',
  GetErrorsErrorType='[Shared] Get All ErrorTypes Error',
  GetErrorType = '[Shared] Get Single Error by ID from State',
  GetErrorSuccessType='[Shared] Get Single Error by ID Success',
  AddErrorrType ='[Shared] Add Errror to  State',
  AddErrorrErrorType = '[Shared] AddError return Error',
  DeleteErrorrType ='[Shared] Delete Errror from  State',
  DeleteErrorrSuccessType='[Shared] Delete Error Success',
  DeleteErrorrErrorType='[Shared] Delete Error Success',
  UpdateErrorType = '[Shared] Update Error from State',
  UpdateErrorSuccessType = '[Shared] Updates Error in State on Success',
  UpdateErrorErrorType = '[Shared] Updated Error in Failure'
}

export class SharedErrorStateLoad implements Action {
  readonly type = SharedActionTypes.SharedErrorStateLoadType;
}

export class SharedErrorStateLoadError implements Action {
  readonly type = SharedActionTypes.SharedErrorStateLoadErrorType;
  constructor(public payload: any) {}
}

export class SharedErrorStateLoaded implements Action {
  readonly type = SharedActionTypes.SharedErrorStateLoadedType;
  constructor(public payload: ErrorType[]) {}
}
//Get All Errors
//Get All Errors
export class GetErrors implements Action {
  readonly type = SharedActionTypes.GetErrorsType;
  //constructor(public payload: ErrorType[]) {}
}
export class GetErrorsSuccess implements Action {
  readonly type = SharedActionTypes.GetErrorsSuccessType;
  constructor(public payload: ErrorType[]) {}
}
export class GetErrorsError implements Action {
  readonly type = SharedActionTypes.GetErrorsErrorType;
  constructor(public payload: Error) {}
}
// Get Error By ID
export class GetError implements Action {
  readonly type = SharedActionTypes.GetErrorType;
  constructor(public payload: number) {}
}

export class GetErrorSuccess implements Action {
  readonly type = SharedActionTypes.GetErrorSuccessType;
  constructor(public payload: ErrorType) {}
}
//AddError
export class AddErrorr implements Action {
  readonly type = SharedActionTypes.AddErrorrType;
  constructor(public payload: ErrorType) {}
}
export class AddErrorrError implements Action {
  readonly type = SharedActionTypes.AddErrorrErrorType;
  constructor(public payload: Error) {}
}
//Delete Error by ID
export class DeleteErrorr implements Action {
  readonly type = SharedActionTypes.DeleteErrorrType;
  constructor(public payload: ErrorType) {
    console.log(payload, 'I am delete error')
  }
}
export class DeleteErrorrError implements Action {
  readonly type = SharedActionTypes.DeleteErrorrErrorType;
  constructor(public payload: Error) {}
}

//Update Error by ID
export class UpdateError implements Action {
  readonly type = SharedActionTypes.UpdateErrorType;
  constructor(public payload: ErrorType) {}
}
export class UpdateErrorSuccess implements Action {
  readonly type = SharedActionTypes.UpdateErrorSuccessType;
  //constructor(public payload: ErrorType) {}
}
export class UpdateErrorError implements Action {
  readonly type = SharedActionTypes.UpdateErrorErrorType;
  constructor(public payload: Error) {}
}

export type SharedAction = SharedErrorStateLoad | SharedErrorStateLoaded | SharedErrorStateLoadError|GetErrors |GetErrorsSuccess | GetErrorsError |GetError| GetErrorSuccess| AddErrorr|AddErrorrError| DeleteErrorr | DeleteErrorrError| UpdateError| UpdateErrorSuccess| UpdateErrorError;

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
  AddErrorrError,
  UpdateError,
  DeleteErrorr,
  DeleteErrorrError,
  UpdateErrorSuccess,
  UpdateErrorError

};
