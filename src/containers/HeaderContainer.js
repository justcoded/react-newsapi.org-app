import { connect }                     from 'react-redux';
import Header                          from '../components/Header';
import { setCategory }                 from '../actions/news-settings';
import { toggleModal, toggleSideMenu } from '../actions/menu';

const mapStateToProps = (state) => {
  return {
    category: state.settings.category,
    country: state.settings.country,
    isSideBarOpen: state.menu.isSideBarOpen
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCategoryChange(category) {
      dispatch(setCategory(category));
    },
    toggleModal() {
      dispatch(toggleModal());
    },
    toggleSideMenu(isSideBarOpen) {
      dispatch(toggleSideMenu(isSideBarOpen))
    }
  };
};

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default HeaderContainer;