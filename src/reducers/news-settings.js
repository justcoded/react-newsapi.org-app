import { CLEAR_FILTERS, SET_CATEGORY, SET_COUNTRY, SET_QUERY } from '../constants/actionTypes';
import { NAVIGATION_ITEMS }                                    from '../constants/view-list';

const DEFAULT_STATE = {
  category: NAVIGATION_ITEMS[0],
  country: {}
};


export default function settings(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        category: action.category,
        query: undefined,
        clearFilter: false
      };

    case SET_COUNTRY:
      return {
        ...state,
        country: action.country,
        query: undefined,
        clearFilter: false
      };

    case SET_QUERY:
      return {
        ...state,
        query: action.query,
        clearFilter: false
      };

    case CLEAR_FILTERS:
      return {
        ...DEFAULT_STATE,
        clearFilter: true,
        oldQuery: state.query
      };

    default:
      return state;
  }
};