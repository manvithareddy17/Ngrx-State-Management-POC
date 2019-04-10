import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SHARED_FEATURE_KEY, SharedState } from './shared.reducer';
import { SharedActionTypes } from './shared.actions';

// Lookup the 'Shared' feature state managed by NgRx
const getSharedState = createFeatureSelector<SharedState>(SHARED_FEATURE_KEY);

const hasLoaded = createSelector(
  getSharedState,
  (state: SharedState) => state.loaded
);
const getApiError = createSelector(
  getSharedState,
  (state: SharedState) => state.apiError
);

const getAllErrors = createSelector(
  getSharedState,
  hasLoaded,
  (state: SharedState,isLoaded) => {
    return isLoaded ? state.errors : [];
    
  }
);
const getError = 
createSelector(
  
  getSharedState,
  (state: SharedState) => {
    if(state.action === SharedActionTypes.GetErrorType && state.loaded) {
      console.log('I am state',state.selected)
      return state.selected;
      
    }
    else{
      return null;
    }
  });
  const isErrortypeUpdated = createSelector(getSharedState,
    (state: SharedState) => 
    state.action === SharedActionTypes.UpdateErrorType
    && state.loaded && !state.apiError);


const hasApiError = createSelector(
  getSharedState,
  (state: SharedState) => state.hasApiError
);
const isErrortypeDeleted = createSelector(getSharedState,
  (state: SharedState) => 
     state.action === SharedActionTypes.DeleteErrorrType
     && state.loaded && !state.apiError);
const getDeleteError = createSelector(getSharedState,
  (state: SharedState) =>{
  return state.action === SharedActionTypes.DeleteErrorrErrorType
  ? state.apiError
  : null;
  });

export const sharedQuery = {
  hasLoaded,
  getApiError,
  getAllErrors,
  hasApiError,
  getError,
  getDeleteError,
  isErrortypeDeleted,
  isErrortypeUpdated
}
 
