import { props, createAction } from '@ngrx/store';
import { createDataAccessAction } from '@ngrx-data-access-action';

const feature = '[DataAccess]';

export const data = createDataAccessAction(
  `${feature} Data`,
  props<{param: string}>(),
  props<{data: object}>(),
);

// same as
export const sameData = {
  load: createAction(`${feature} Data LOAD`, props<{param: string}>()),
  success: createAction(`${feature} Data SUCCESS`, props<{data: object}>()),
  error: createAction(`${feature} Data ERROR`, props<{error: string}>()),
};
