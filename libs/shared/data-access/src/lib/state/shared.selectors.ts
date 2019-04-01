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
   // console.log('Satate in selector '+JSON.stringify( state));
    return isLoaded ? state.errors : [];
    
  }
);
const getError = 
createSelector(
  
  getSharedState,
  (state: SharedState) => {
    console.log('I am state')
    if(state.action === SharedActionTypes.GetError && state.loaded) {
      console.log('I am state',state.selected)
      return state.selected;
      
    }
    else{
      return null;
    }
  });
  const isErrortypeUpdated = createSelector(getSharedState,
    (state: SharedState) => 
    state.action === SharedActionTypes.UpdateError
    && state.loaded && !state.apiError);


const hasApiError = createSelector(
  getSharedState,
  (state: SharedState) => state.hasApiError
);
const isErrortypeDeleted = createSelector(getSharedState,
  (state: SharedState) => 
     state.action === SharedActionTypes.DeleteErrorr
     && state.loaded && !state.apiError);
const getDeleteError = createSelector(getSharedState,
  (state: SharedState) =>{
  return state.action === SharedActionTypes.DeleteErrorrError
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
 
