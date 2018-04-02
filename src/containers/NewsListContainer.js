import { connect }                   from 'react-redux';
import NewsList                      from '../components/NewsList';
import { clearAllFilters, setQuery } from '../actions/news-settings';

const mapStateToProps = (state) => {
  return {
    country: state.settings.country,
    category: state.settings.category,
    query: state.settings.query,
    clearFilter: state.settings.clearFilter,
    error: state.articles.error,
    articles: state.articles.articles,
    isCached: state.articles.isCached,
    isLoading: state.articles.isLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeQueryFilter() {
      dispatch(setQuery())
    },
    clearAllFilters() {
      dispatch(clearAllFilters())
    }
  };
};

const NewsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsList);

export default NewsListContainer;