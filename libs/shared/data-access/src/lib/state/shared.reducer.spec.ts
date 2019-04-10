import { AddErrorr, GetErrors, GetErrorsSuccess, GetErrorsError, GetError, GetErrorSuccess, UpdateError, UpdateErrorSuccess, UpdateErrorError, DeleteErrorr, DeleteErrorrError, SharedActionTypes, AddErrorrError } from './shared.actions';
import {
  SharedState,
  initialState,
  sharedReducer,
} from './shared.reducer';
import { ErrorType } from '../errorType';


const MOCK_DATA: ErrorType[] = [
  {
    Id: 1,
    Message: 'Message 1',
    Type: 'Error',
  }, {
    Id: 2,
    Message: 'Message 2',
    Type: 'ApiError',
  }
];
let state: SharedState = {
  errors: [],
  selected: null,
  action: null,
  loaded: false,
  apiError: null,
  hasApiError: false
};



  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = sharedReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
  describe('Load all Errortypes REDUCER', () => {
    it('should reduce the action GetErrorsType', () => {
      const action = new GetErrors();
      const newState = sharedReducer(state, action);
      expect({ ...newState }).toEqual({
        ...state,
        action: SharedActionTypes.GetErrorsType,
        loaded: false
      });
      state = newState;
    });
    it('should reduce the action GetErrorsSuccessType', () => {
      const payload = [...MOCK_DATA];
      const action = new GetErrorsSuccess(payload);
      const newState = sharedReducer(state, action);
      expect({ ...newState }).toEqual({
        ...state,
        errors: payload,
        loaded: true
      });
      state = newState;
    });
    it('should reduce the action GetErrorsErrorType', () => {
      const payload = new Error('Error loading all errors');
      const action = new GetErrorsError(payload);
      const newState = sharedReducer(state, action);
      expect({ ...newState }).toEqual({
        ...state,
        loaded: true,
        apiError: action.payload
      });
    });
  });

  describe('GET ErrorTypes by id REDUCER', () => {
    it('should reduce the action GetErrorType', () => {
      const payload = MOCK_DATA[0].Id;
      const action = new GetError(payload);
      const newState = sharedReducer(state, action);
      expect({ ...newState }).toEqual({
        ...state,
        action: SharedActionTypes.GetErrorType,
        loaded: false
      });
      state = newState;
    });
    it('should reduce the action GetErrorSuccessType', () => {
      const payload = MOCK_DATA[0];
      const action = new GetErrorSuccess(payload);
      const newState = sharedReducer(state, action);
      expect({ ...newState }).toEqual({
        ...state,
        action: SharedActionTypes.GetErrorSuccessType,
        selected: payload,
        loaded: true
      });
      state = { ...state, selected: null, loaded: true };
    });
  });

  describe('Create new Errortype REDUCER', () => {

    it('should reduce the action AddErrorSuccess', () => {
      const payload = {
        Id: 3,
        Message: 'Message 3',
        Type: 'ApiError',
      };
      const action = new AddErrorr(payload);
      const newState = sharedReducer(state, action);
      expect({ ...newState }).toEqual({
        ...state,
        errors: [
          ...state.errors, payload
        ],
        selected: payload,
        action: SharedActionTypes.AddErrorrType,
        loaded: true
      });
      state = { ...state, selected: null, loaded: true };
    });
    it('should reduce the action AddErrorError', () => {
      const payload = new Error('Error creating the ErrorType');
      const action = new AddErrorrError(payload);
      const newState = sharedReducer(state, action);
      expect({ ...newState }).toEqual({
        ...state,
        selected: null,
        loaded: true,
        apiError: payload
      });
    });
  });

  describe('Update existing errortype REDUCER', () => {
    it('should reduce the action update error', () => {
      const payload = { ...MOCK_DATA[0] };
      const action = new UpdateError(payload);
      const newState = sharedReducer(state, action);
      expect({ ...newState }).toEqual({
        ...state,
        selected: payload,
        action: SharedActionTypes.UpdateErrorType,
        loaded: true
      });
      state = newState;
    });
    it('should reduce the action UpdateErrorSuccess', () => {
      const index = 0;
      const errors = [
        ...state.errors.slice(0, index),
        state.selected,
        ...state.errors.slice(index + 1)
      ];
      const action = new UpdateErrorSuccess();
      const newState = sharedReducer(state, action);
      expect({ ...newState }).toEqual(
        { ...state, 
          errors, 
          loaded: true, 
          selected: null, 
          apiError: null });
      state = { ...state, selected: null, loaded: true };
    });
    it('should reduce the action UpdateErrorError', () => {
      const payload = new Error('Error updating the errortype');
      const action = new UpdateErrorError(payload);
      const newState = sharedReducer(state, action);
      expect({ ...newState }).toEqual({ ...state, loaded: true, apiError: payload });
    });
  });

  // describe('Deleting existing errortype REDUCER', () => {
  //   it('should reduce the action DeleteErrorType', () => {
  //     const selected = MOCK_DATA[1];
  //     const payload = selected.Id;
  //    // const errors = state.errors.filter(f => f.Id !== state.selected.Id)
  //     const action = new DeleteErrorr(payload);
  //     const newState = sharedReducer(state, action);

  //     expect({ ...newState }).toEqual({
  //       ...state,
  //       selected,
  //       errors: state.errors.filter(f => f.Id !== state.selected.Id),
  //       action: SharedActionTypes.DeleteErrorrType,
  //       loaded: false
  //     });
  //     state = newState;
  //   });

  // //   it('should reduce the action DELETE_GAME_SUCCESS', () => {
  // //     const payload = MOCK_DATA[1];
  // //     const action = new RemoveGameSuccess(payload);
  // //     const data = state.data.filter(h => h.id !== state.selected.id);
  // //     const newState = reducer(state, action);
  // //     expect({...newState}).toEqual( {...state, data, selected: null, done: true});
  // //     state = {...state, selected: null, done: true};
  // // });

  //   it('should reduce the action DeleteErrorError', () => {
  //     const payload = new Error('Error while deleting the Errortype');
  //     const action = new DeleteErrorrError(payload);
  //     const newState = sharedReducer(state, action);
  //     expect({ ...newState }).toEqual({ ...state, loaded: true, apiError: payload });
  //   });
  // });

