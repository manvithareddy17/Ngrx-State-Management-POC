import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  SHARED_FEATURE_KEY,
  initialState as sharedInitialState,
  sharedReducer
} from './state/shared.reducer';
import { SharedEffects } from './state/shared.effects';
import { SharedFacade } from './state/shared.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(SHARED_FEATURE_KEY, sharedReducer, {
     // metaReducers: [clearState],
      initialState: sharedInitialState
    }),
    EffectsModule.forFeature([SharedEffects])
  ],
  providers: [SharedFacade]
})
export class SharedDataAccessModule {}
