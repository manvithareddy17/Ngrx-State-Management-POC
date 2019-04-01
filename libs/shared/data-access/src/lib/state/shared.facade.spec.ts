import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst ,readAll} from '@nrwl/nx/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/nx';

import { SharedEffects } from './shared.effects';
import { SharedFacade } from './shared.facade';

import { sharedQuery } from './shared.selectors';

import {
  SharedState,
  ErrorType,
  initialState,
  sharedReducer
} from './shared.reducer';
import { AddErrorr } from './shared.actions';

interface TestSchema {
  shared: SharedState;
}

describe('SharedFacade', () => {
  let facade: SharedFacade;
  let store: Store<TestSchema>;
  let createError;

  beforeEach(() => {
    createError = (Id: string, message = '',type:string =''): ErrorType => ({
      Id,
      Message: message || `name-${Id}`,
      Type : type || 'Error'
    });
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature('shared', sharedReducer, { initialState }),
          EffectsModule.forFeature([SharedEffects])
        ],
        providers: [SharedFacade]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule
        ]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(SharedFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return  list of 2 with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allErrors$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.loadAll();

        list = await readFirst(facade.allErrors$);
        isLoaded = await readFirst(facade.loaded$);

        console.log(JSON.stringify(list))

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `SharedLoaded` to manually submit list for state management
     */
    it('allErrors$ should return the Added errors ; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allErrors$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          new AddErrorr(createError(1,'Test Errro1','Error'))
        );

        list = await readFirst(facade.allErrors$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(1);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    it('allErrors$ should return the  errors  after delted an item; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allErrors$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.addError(createError("1",'Test Error1','Error')) // or u can do store.dispatch adderror
        facade.addError(createError("2",'Test Error2','Error'))
        facade.addError(createError("3",'Test Error3','Error'))
        facade.removeError("2")

        list = await readFirst(facade.allErrors$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
