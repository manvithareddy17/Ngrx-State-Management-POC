import { TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { EffectsModule, Actions } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import 'rxjs/internal/Observable/of';
import { NxModule } from '@nrwl/nx';
import { DataPersistence } from '@nrwl/nx';
//import { hot, cold } from '@nrwl/nx/testing';
import {cold, hot, time} from 'jest-marbles';
import { SharedEffects } from './shared.effects';
import { SharedErrorStateLoad, SharedErrorStateLoaded, GetErrors, SharedActionTypes, GetErrorsSuccess } from './shared.actions';
import { ErrorType } from '../errorType';
import { ErrorTypeService } from '../errorTypeService';

jest.mock('rxjs/internal/Observable')
jest.mock('../errorTypeService')

  const MOCK_DATA: ErrorType[] = [
    {
      Id: '1',
      Message: 'Error 1',
      Type: 'API Error'
    }, 
    {
      Id: '2',
      Message: 'Error 2',
      Type: 'Error'
    },
    {
      Id: '3',
      Message: 'Error 3',
      Type: 'Http Error'
    }
  ];

  describe('SharedEffects', () => {
    let service: any;
    let actions: Observable<any>;
    let effects: SharedEffects;
    
    const mockService = new ErrorTypeService(null)
    //const sharedEffects = new SharedEffects()
  beforeEach(() => {
    
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        SharedEffects,
        ErrorTypeService,
        provideMockActions(() => actions)
      ]
    
    });
   
    effects = TestBed.get(SharedEffects);
  });

  describe('getAllErrors', () => {
    const serviceSpy = jest.spyOn(mockService, 'findAll');
    const source = cold('-a-|', {a: {type: SharedActionTypes.GetErrorsType}});
   
    const mockSharedEffects = new SharedEffects(new Actions(source), mockService);
    it('should return GetErrorsSuccess action, with the errorTypes on success', () => {

      serviceSpy.mockReturnValue(Observable.of(MOCK_DATA));
      const expected = hot('-a-|', {a: new GetErrorsSuccess(MOCK_DATA)});

      expect(mockSharedEffects.getAllErrorTypes$).toBeObservable(expected);
    })
  })

});
