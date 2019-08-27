import {
  SET_SEARCH,
  SET_HISTORY,
  SET_TRACKS,
  SET_CURRENT_TRACK_ID,
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

export function setTracks(value) {
  return {
    type: SET_TRACKS,
    value
  }
}

export function setCurrentTrackID(value) {
  return {
    type: SET_CURRENT_TRACK_ID,
    value
  }
}

// export function setPage() {
//   return {
//     type: SET_PAGE,
//   }
// }
