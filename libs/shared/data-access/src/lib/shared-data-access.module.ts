import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppInMemoryApi } from 'apps/test-ui-console/src/app/app.in-memory.api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ErrorTypeService } from './errorTypeService';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientInMemoryWebApiModule.forRoot(AppInMemoryApi),
    StoreModule.forFeature(SHARED_FEATURE_KEY, sharedReducer, {
     // metaReducers: [clearState],
      initialState: sharedInitialState
    }),
    EffectsModule.forFeature([SharedEffects])
  ],
  providers: [SharedFacade, ErrorTypeService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedDataAccessModule {}
