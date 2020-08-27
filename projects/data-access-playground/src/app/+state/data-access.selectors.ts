import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromDataAccess from './data-access.reducer';

export const selectDataAccessState = createFeatureSelector<fromDataAccess.State>(
  fromDataAccess.dataAccessFeatureKey
);
