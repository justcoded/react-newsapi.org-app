import { CLEAR_FILTERS, SET_CATEGORY, SET_COUNTRY, SET_QUERY } from '../constants/actionTypes';
import { REQUEST_ERROR, REQUEST_START, REQUEST_SUCCESS }       from '../constants/request';

import { searchByTopHeadlines } from '../api/news';

function fetchNewsOnRequest() {
  return {
    type: REQUEST_START,
    isLoading: true
  }
}

function fetchNewsOnSuccess(articles) {
  return {
    type: REQUEST_SUCCESS,
    articles,
    isLoading: false
  }
}

function fetchNewsOnError() {
  return {
    type: REQUEST_ERROR,
    isLoading: false
  }
}

export function setCategory(category) {
  return async (dispatch, getStore) => {
    dispatch({
      type: SET_CATEGORY,
      category
    });
    const settings = getStore().settings;

    await setFilter({
      ...settings,
      category: settings.category
    }, dispatch);
  };
}

export function setCountry(country) {
  return async (dispatch, getStore) => {
    dispatch({
      type: SET_COUNTRY,
      country
    });
    const settings = getStore().settings;

    await setFilter({
      ...settings,
      country: settings.country,
    }, dispatch);
  };
}

export function setQuery(query) {
  return async (dispatch, getStore) => {
    dispatch({
      type: SET_QUERY,
      query
    });
    const settings = getStore().settings;

    await setFilter({
      ...settings,
      q: settings.query
    }, dispatch);
  };
}

export function clearAllFilters() {
  return async (dispatch, getStore) => {
    dispatch({
      type: CLEAR_FILTERS
    });
    const settings = getStore().settings;

    await setFilter({
      ...settings,
      q: undefined
    }, dispatch);
  };
}

async function setFilter(settings, dispatch) {
  dispatch(fetchNewsOnRequest());
  try {
    const response = await searchByTopHeadlines(settings);
    const news = await response.json();
    if (news.status === 'error') {
      return dispatch(fetchNewsOnError(error));
    }
    dispatch(fetchNewsOnSuccess(news.articles));
  } catch (error) {
    dispatch(fetchNewsOnError(error));
  }
}