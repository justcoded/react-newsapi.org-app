import { connect }        from 'react-redux';
import Menu               from '../components/Menu';
import { setCountry }     from '../actions/news-settings';
import { toggleSideMenu } from '../actions/menu';

const mapStateToProps = (state) => {
  return {
    country: state.settings.country
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCountryChange(country) {
      dispatch(setCountry(country));
    },
    toggleSideBar() {
      dispatch(toggleSideMenu());
    }
  };
};

const MenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);

export default MenuContainer;