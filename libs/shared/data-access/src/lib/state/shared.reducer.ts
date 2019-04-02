import { SharedAction, SharedActionTypes } from './shared.actions';
import { ErrorType } from '../errorType'
export const SHARED_FEATURE_KEY = 'shared';

/**
 * Interface for the 'Shared' data used in
 *  - SharedState, and
 *  - sharedReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */


export interface SharedState {
  errors: ErrorType[]; // list of Shared; analogous to a sql normalized table
  loaded: boolean; // has the Shared list been loaded
  selected: ErrorType,
  action: string,
  apiError: any;
  hasApiError: false;
}

export interface SharedPartialState {
  readonly [SHARED_FEATURE_KEY]: SharedState;
}

export const initialState: SharedState = {
  errors: [],
  loaded: false,
  selected: null,
  action: null,
  hasApiError: false,
  apiError: {}
};

export function sharedReducer(
  state: SharedState = initialState,
  action: SharedAction
): SharedState {


  switch (action.type) {
    case SharedActionTypes.SharedErrorStateLoadedType: {
      state = {
        ...state,
        errors: action.payload,
        loaded: true
      };

      break;
    }

     /*************************
     * GET all errors actions
     ************************/
    case SharedActionTypes.GetErrorsType:
      return {
        ...state,
        action: SharedActionTypes.GetErrorsType,
        loaded: false,
        selected: null,
        apiError: null
      };

    case SharedActionTypes.GetErrorsSuccessType:
      return {
        ...state,
        errors: action.payload,
        loaded: true,
        selected: null,
        apiError: null
      };
    case SharedActionTypes.GetErrorsErrorType:
      return {
        ...state,
        loaded: true,
        selected: null,
        apiError: action.payload
      };

      case SharedActionTypes.GetErrorType:
      return {
        ...state,
        action: SharedActionTypes.GetErrorType,
        loaded: false,
        selected: null,
        apiError: null
      };
    case SharedActionTypes.GetErrorSuccessType:
      return {
        ...state,
        action: SharedActionTypes.GetErrorType,
        selected: action.payload,
        loaded: true,
        apiError: null
      };
      //Add Error
    case SharedActionTypes.AddErrorrType: {

      const errors = [...state.errors, action.payload]
      state = {
        ...state,
        selected: action.payload,
        action: SharedActionTypes.AddErrorrType,
        errors: errors,
        loaded: true
      };
      console.log('Added error  action new state' + JSON.stringify(state));

      break;
    }
    
    case SharedActionTypes.AddErrorrErrorType: {
      return {
        ...state,
        selected: null,
        loaded: true,
        apiError: action.payload
      }
    }
    //Update ErrorType
    case SharedActionTypes.UpdateErrorType: {
      const selected = state.errors.find(f => f.Id === action.payload.Id);

      return {
        ...state,
        selected,
        action: SharedActionTypes.UpdateErrorType,
        loaded: true,
        apiError: null
      };
    }

    case SharedActionTypes.UpdateErrorSuccessType:
      {
        console.log('I am reducer success', state)
        const index = state
          .errors
          .findIndex(selected => selected.Id === state.selected.Id);
        if (index >= 0) {
          const errors = [
            ...state.errors.slice(0, index),
            state.selected,
            ...state.errors.slice(index + 1)
          ];
          console.log('I am selected', state.selected.Message, 'Index NUmber', index)
          return {
            ...state,
            errors,
            loaded: true,
            selected: null,
            apiError: null
          };
        }
        return state;
      }
    case SharedActionTypes.UpdateErrorErrorType:
      return {
        ...state,
        loaded: true,
        selected: null,
        apiError: action.payload
      };

      // Delete Error
    case SharedActionTypes.DeleteErrorrType:{
    let index = state.errors.map(x=>x.Id).indexOf(action.payload.Id)
    let newErrorState = [...state.errors.slice(0, index), ...state.errors.slice(index + 1)];
    delete newErrorState[action.payload.Id]
    state = {
      ...state,
      errors: newErrorState,
      action: SharedActionTypes.DeleteErrorrType,
      loaded: true,
      apiError: null,
    };
    console.log('Delete state'+ JSON.stringify(state));

    break;
      }
    case SharedActionTypes.DeleteErrorrErrorType:
      return {
        ...state,
        selected: null,
        loaded: true,
        apiError: action.payload
      };
    default:
      break;
  }

  return state;
}

