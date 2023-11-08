import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_SUCCESS,
} from '../action-types/action-types';

const initialStateSearch = {
  searchField: '',
};

export const searchRobots = (state = initialStateSearch, { type, payload }) => {
  switch (type) {
    case CHANGE_SEARCHFIELD:
      return Object.assign({}, state, { searchField: payload });
    default:
      return state;
  }
};

const initialStateRobots = {
  robots: [],
  isPending: true,
};

export const requestRobots = (
  state = initialStateRobots,
  { type, payload }
) => {
  switch (type) {
    case REQUEST_ROBOTS_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_ROBOTS_SUCCESS:
      return Object.assign({}, state, { robots: payload, isPending: false });
    case REQUEST_ROBOTS_FAILED:
      return Object.assign({}, state, { error: payload });
    default:
      return state;
  }
};
