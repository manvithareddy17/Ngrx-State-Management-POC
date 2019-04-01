import { AddErrorr, GetErrors, GetErrorsSuccess, GetErrorsError, GetError, GetErrorSuccess, UpdateError, UpdateErrorSuccess, UpdateErrorError, DeleteErrorr, DeleteErrorrError } from './shared.actions';
import {
  SharedState,
  initialState,
  sharedReducer,
  ErrorType
} from './shared.reducer';


const MOCK_DATA: ErrorType[] = [
  {
    Id: '1',
    Message: 'Message 1',
    Type: 'Error',
  }, {
    Id: '2',
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
    it('should reduce the action GetErrors', () => {
      const action = new GetErrors();
      const newState = sharedReducer(state, action);
      expect({ ...newState }).toEqual({
        ...state,
        action: GetErrors,
        loaded: false
      });
      state = newState;
    });
    it('should reduce the action GetErrorsSuccess', () => {
      const payload = [...MOCK_DATA];
      const action = new GetErrorsSuccess(payload);
      const newState = sharedReducer(state, action);
      expect({ ...newState }).toEqual({
        ...state,
        data: payload,
        loaded: true
      });
      state = newState;
    });
    it('should reduce the action GetErrorsError', () => {
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

  describe('GET Errortypes by id REDUCER', () => {
    it('should reduce the action GetError', () => {
      const payload = MOCK_DATA['0'].Id;
      const action = new GetError(payload);
      const newState = sharedReducer(state, action);
      expect({ ...newState }).toEqual({
        ...state,
        action: GetError,
        loaded: false
      });
      state = newState;
    });
    it('should reduce the action GetErrorSuccess', () => {
      const payload = MOCK_DATA[0];
      const action = new GetErrorSuccess(payload);
      const newState = sharedReducer(state, action);
      expect({ ...newState }).toEqual({
        ...state,
        selected: payload,
        loaded: true
      });
      state = { ...state, selected: null, loaded: true };
    });
    // it('should reduce the action GetErrorError', () => {
    //   const payload = new Error('Error loading the Errortype');
    //   const action = new GetErrorError(payload);
    //   const newState = sharedReducer(state, action);
    //   expect({ ...newState }).toEqual({
    //     ...state,
    //     loaded: true,
    //     apiError: action.payload
    //   });
    // });
  });

  describe('Create new Errortype REDUCER', () => {
    it('should reduce the action AddErrorr', () => {
      const payload = {
        Id: 3,
        Message: 'Message 3',
        Type: 'ApiError',
      };
      const action = new AddErrorr(payload);
      const newState = sharedReducer(state, action);
      expect({ ...newState }).toEqual({
        ...state,
        selected: payload,
        action: AddErrorr,
        loaded: false
      });
      state = newState;
    });
    // it('should reduce the action AddErrorSuccess', () => {
    //   const payload = 3;
    //   const action = new AddErrorrSuccess(payload);
    //   const newState = sharedReducer(state, action);
    //   expect({ ...newState }).toEqual({
    //     ...state,
    //     errors: [
    //       ...state.errors,
    //       {
    //         ...state.selected,
    //         id: payload
    //       }
    //     ],
    //     selected: null,
    //     loaded: true
    //   });
    //   state = { ...state, selected: null, loaded: true };
    // });
    // it('should reduce the action AddErrorError', () => {
    //   const payload = new Error('Error creating the ErrorType');
    //   const action = new AddErrorrError(payload);
    //   const newState = sharedReducer(state, action);
    //   expect({ ...newState }).toEqual({
    //     ...state,
    //     selected: null,
    //     loaded: true,
    //     apiError: payload
    //   });
    // });
  });

  describe('Update existing errortype REDUCER', () => {
    it('should reduce the action update error', () => {
      const payload = { ...MOCK_DATA[0], description: 'Descripion of Errortype 1 edited' };
      const action = new UpdateError(payload);
      const newState = sharedReducer(state, action);
      expect({ ...newState }).toEqual({
        ...state,
        selected: payload,
        action: UpdateError,
        loaded: false
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
      expect({ ...newState }).toEqual({ ...state, errors, loaded: true, selected: null, apiError: null });
      state = { ...state, selected: null, loaded: true };
    });
    it('should reduce the action UpdateErrorError', () => {
      const payload = new Error('Error updating the errortype');
      const action = new UpdateErrorError(payload);
      const newState = sharedReducer(state, action);
      expect({ ...newState }).toEqual({ ...state, loaded: true, apiError: payload });
    });
  });

  describe('Deleting existing errortype REDUCER', () => {
    it('should reduce the action DeleteErrorType', () => {
      const selected = MOCK_DATA[1];
      const payload = selected.Id;
      const action = new DeleteErrorr(payload);
      const newState = sharedReducer(state, action);

      expect({ ...newState }).toEqual({
        ...state,
        selected,
        action: DeleteErrorr,
        loaded: false
      });
      state = newState;
    });
    // it('should reduce the action DeleteErrorSuccess', () => {
    //   const payload = MOCK_DATA[1];
    //   const action = new DeleteErrorrSuccess(payload);
    //   const errors = state.errors.filter(h => h.Id !== state.selected.Id);
    //   const newState = sharedReducer(state, action);
    //   expect({ ...newState }).toEqual({ ...state, errors, selected: null, loaded: true });
    //   state = { ...state, selected: null, loaded: true };
    // });
    it('should reduce the action DeleteErrorError', () => {
      const payload = new Error('Error while deleting the Errortype');
      const action = new DeleteErrorrError(payload);
      const newState = sharedReducer(state, action);
      expect({ ...newState }).toEqual({ ...state, loaded: true, apiError: payload });
    });
  });

//   describe('Shared Reducer', () => {
//     const getErrorId = it => it['id'];
//     //let createError;
//     beforeEach(() => {
//       // createError = (id: string, message = '', type: string = ''): Error => ({
//       //   id,
//       //   message: name || `name-${id}`,
//       //   type: type
//       // });
//     });
  
//     // describe('valid Shared actions ', () => {
//     //   it('should return set the list of known Shared', () => {
  
//     //     console.log('Intial state' + JSON.stringify(initialState))
//     //     const action = new AddErrorr(createError('123', 'I am error 123', 'Error'));
//     //     const result: SharedState = sharedReducer(initialState, action);
//     //     const errorId: string = getErrorId(result.errors[0]);
  
//     //     expect(result.loaded).toBe(true);
//     //     expect(result.errors.length).toBe(1);
//     //     expect(errorId).toBe('123');
//     //   });
//     // });
// });