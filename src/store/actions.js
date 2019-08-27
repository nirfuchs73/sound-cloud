import {
  SET_SEARCH,
  SET_HISTORY,
  // SET_PAGE,
} from './constants';

export function setSearch(value) {
  return {
    type: SET_SEARCH,
    value
  }
}

export function setHistory(value) {
  return {
    type: SET_HISTORY,
    value
  }
}

// export function setPage() {
//   return {
//     type: SET_PAGE,
//   }
// }
