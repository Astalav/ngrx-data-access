import { TypedAction, ActionCreator } from '@ngrx/store/src/models';

export interface DataAccessAction<LoadPropType, SuccessPropType> {
  execute: ActionCreator<string, (props: LoadPropType) => LoadPropType & TypedAction<string>>;
  success: ActionCreator<string, (props: SuccessPropType) => SuccessPropType & TypedAction<string>>;
  error: ActionCreator<string, (props: {error: string}) => {error: string} & TypedAction<string>>;
}
