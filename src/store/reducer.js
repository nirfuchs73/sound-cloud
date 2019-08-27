import {
  SET_SEARCH,
  SET_HISTORY,
  SET_TRACKS,
  SET_CURRENT_TRACK_ID,
  // SET_PAGE,
} from './constants';

const INITIAL_STATE = {
  search: '',
  history: [],
  tracks: [],
  currentTrackID: 3474914,
  // page: 0,
}

const reducer = (state = INITIAL_STATE, action) => {
  // console.log('reducer running', action);
  switch (action.type) {
    case SET_SEARCH:
      return Object.assign({}, state, { search: action.value });

    case SET_HISTORY:
      var history = [...state.history];
      if (!history.includes(action.value)) {
        if (history.length === 5) history.shift();
        history.push(action.value);
      }
      // return Object.assign({}, state, { history: [...state.history, action.value] });
      return Object.assign({}, state, { history: history });

    case SET_TRACKS:
      return Object.assign({}, state, { tracks: action.value });

    case SET_CURRENT_TRACK_ID:
      return Object.assign({}, state, { currentTrackID: action.value });

    // case SET_PAGE:
    //   return Object.assign({}, state, { page: state.page + 1 });

    default:
      return state;
  }
}

export default reducer;