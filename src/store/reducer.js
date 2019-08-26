import {
  SET_SEARCH,
  SET_HISTORY,
} from './constants';

const INITIAL_STATE = {
  search: '',
  history: [],
}

const reducer = (state = INITIAL_STATE, action) => {
  // console.log('reducer running', action);
  switch (action.type) {
    case SET_SEARCH:
      return Object.assign({}, state, { search: action.value });
    case SET_HISTORY:
      var history = state.history;
      if (history.length === 5) history.shift();
      history.push(action.value);
      // return Object.assign({}, state, { history: [...state.history, action.value] });
      return Object.assign({}, state, { history: history });
    default:
      return state;
  }
}

export default reducer;