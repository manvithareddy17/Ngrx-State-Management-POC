import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { SharedPartialState, ErrorType } from './shared.reducer';
import {
  SharedActionTypes,
  GetErrors,
  GetErrorsError,
  GetErrorsSuccess,
  UpdateError,
  UpdateErrorSuccess,
  UpdateErrorError,
  SharedErrorStateLoad,
  SharedErrorStateLoaded,
  SharedErrorStateLoadError
} from './shared.actions';

@Injectable()
export class SharedEffects {


  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<SharedPartialState>
  ) { }

  @Effect() loadShared$ = this.dataPersistence.fetch(
    SharedActionTypes.SharedErrorStateLoad,
    {
      run: (action: SharedErrorStateLoad, state: SharedPartialState) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return new SharedErrorStateLoaded([
          { "Id": '1', "Message": "Error 1 from api load", "Type": "Error" },
          { "Id": '2', "Message": "Warning 1 from api load", "Type": "Warning" }]);
      },

      onError: (action: SharedErrorStateLoad, error) => {
        console.error('Error', error);
        return new SharedErrorStateLoadError(error);
      }
    }
  );

  // @Effect() getErrors$ = this.dataPersistence.fetch(
  //   SharedActionTypes.GetErrors,
  //   {
  //     run: (action: GetErrors, state: SharedPartialState) => {
  //       // Your custom REST 'load' logic goes here. For now just return an empty list...
  //       return new GetErrorsSuccess([
  //         { "Id": '1', "Message": "Error 1 from api load", "Type": "Error" },
  //         { "Id": '2', "Message": "Warning 1 from api load", "Type": "Warning" }]);
  //     },

  //     onError: (action: GetErrors, error) => {
  //       console.error('Error', error);
  //       return new GetErrorsError(error);
  //     }
  //   }
  // );

  @Effect() updateErrors$ = this.dataPersistence.fetch(
    SharedActionTypes.UpdateError,
    {
      run: (action: UpdateError, state: SharedPartialState) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return new UpdateErrorSuccess()
      },
      
      onError: (action: UpdateError, error) => {
        console.error('Error', error);
        return new UpdateErrorError(error);
      }
    }
  );
  // @Effect()
  // updateGame$ = this.actions$
  //   .ofType(gameActions.UPDATE_GAME)
  //   .map((action: UpdateGame) => action.payload)
  //   .switchMap(game => this.svc.update(game))
  //   .map(() => new UpdateGameSuccess())
  //   .catch((err) => [new UpdateGameError(err)]);

  // @Effect() updateGame$ = this.actions$
  //   .ofType(SharedActionTypes.UpdateError)
  //   .map((action: UpdateError) => action.payload)
  //   .map(() => new UpdateErrorSuccess())
  //   .catch((err) => [new UpdateErrorError(err)]);

  // @Effect() addErrorr$ = this.dataPersistence.fetch(
  //   SharedActionTypes.AddErrorr,
  //   {
  //     run: (action: AddErrorr, state: SharedPartialState) => {
  //       return new AddErrorrSuccess([

  //       ])
  //     }
  //   }
  // )
}
