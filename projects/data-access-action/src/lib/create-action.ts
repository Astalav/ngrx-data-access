import { Props, NotAllowedCheck } from '@ngrx/store/src/models';
import { createAction, props } from '@ngrx/store';
import { DataAccessAction } from './data-access-action.interface';

type propType<T extends object> = Props<T> & NotAllowedCheck<T>;

export function createDataAccessAction<T extends object, U extends object>(
  actionName: string,
  loadProps: propType<T>,
  successProps: propType<U>,
): DataAccessAction<T, U> {
  return {
    execute: createAction(`${actionName} EXECUTE`, loadProps),
    success: createAction(`${actionName} SUCCESS`, successProps),
    error: createAction(`${actionName} ERROR`, props<{error: string}>()),
  };
}
