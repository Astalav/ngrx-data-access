export interface DataAccessState {
  loaded: boolean;
  loading: boolean;
}

export const initialDataAccessState: DataAccessState = {
  loaded: false,
  loading: false,
};
