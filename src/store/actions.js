import {
  SET_SEARCH,
} from './constants';

export function setSearch(value) {
  return {
    type: SET_SEARCH,
    value
  }
}
