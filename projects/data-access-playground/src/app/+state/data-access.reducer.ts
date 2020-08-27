import { Action, createReducer, on } from '@ngrx/store';
import * as DataAccessActions from './data-access.actions';
import { createDataAccessReducer, DataAccessState, initialDataAccessState } from '@ngrx-data-access-action';

export const dataAccessFeatureKey = 'dataAccess';

export interface State extends DataAccessState {
  randomDataName: object;
}

export const initialState: State = {
  ...initialDataAccessState,
  randomDataName: undefined,
};


export const reducer = createReducer(
  initialState,

  ...createDataAccessReducer(
    DataAccessActions.data,
    (state: State, action) => ({
      ...state,
      randomDataName: action.data,
    }),
  ),

  // // same as:
  // on(DataAccessActions.sameData.load, state => ({
  //   ...state,
  //   loading: true,
  //   loaded: false,
  // })),
  // on(DataAccessActions.sameData.success, (state, action) => ({
  //   ...state,
  //   loading: false,
  //   loaded: true,
  //   randomDataName: action.data,
  // })),
  // on(DataAccessActions.sameData.error, (state) => ({
  //   ...state,
  //   loading: false,
  //   loaded: false,
  // })),

);

