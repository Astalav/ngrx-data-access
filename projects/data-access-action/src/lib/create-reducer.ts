import { DataAccessAction } from './data-access-action.interface';
import { TypedAction } from '@ngrx/store/src/models';
import { on, On } from '@ngrx/store';

export function createDataAccessReducer<stateType, T extends object, U extends object>(
  dataAccessAction: DataAccessAction<T, U>,
  successReducer: (state: stateType, action: U & TypedAction<string>) => stateType,
): On<stateType>[] {
  return [
    on(dataAccessAction.load, (state: stateType) => ({
      ...state,
      loading: true,
      loaded: false
    })),
    on(dataAccessAction.success, (state: stateType, action) => ({
      ...state,
      loading: false,
      loaded: true,
      ...successReducer(state, action),
    })),
    on(dataAccessAction.error, (state: stateType) => ({
      ...state,
      loading: false,
      loaded: false
    })),
  ];
}
