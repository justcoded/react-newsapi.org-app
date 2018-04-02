import { REQUEST_ERROR, REQUEST_START, REQUEST_SUCCESS } from '../constants/request';

export default function articles(state = {}, action) {
  switch (action.type) {
    case REQUEST_START:
      return {
        ...state,
        error: false,
        isLoading: action.isLoading
      };

    case REQUEST_SUCCESS:
      return {
        ...state,
        error: false,
        articles: action.articles,
        isCached: action.isCached,
        isLoading: action.isLoading
      };

    case REQUEST_ERROR:
      return {
        ...state,
        error: true,
        articles: [],
        isLoading: action.isLoading
      };

    default:
      return state;
  }
};