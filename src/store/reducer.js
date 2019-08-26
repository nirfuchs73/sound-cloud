import {
  SET_SEARCH,
} from './constants';

const INITIAL_STATE = {
  search: '',
}

const reducer = (state = INITIAL_STATE, action) => {
  // console.log('reducer running', action);
  switch (action.type) {
    case SET_SEARCH:
      return Object.assign({}, state, { search: action.value });
    default:
      return state;
  }
}

export default reducer;