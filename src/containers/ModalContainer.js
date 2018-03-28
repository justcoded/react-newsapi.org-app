import { connect }     from 'react-redux';
import Modal           from '../components/Modal';
import { toggleModal } from '../actions/menu';
import { setQuery }    from '../actions/news-settings';

const mapStateToProps = (state) => {
  return {
    isModalOpen: state.menu.isModalOpen
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleModal() {
      dispatch(toggleModal());
    },
    onSearchPress(query) {
      dispatch(toggleModal());
      dispatch(setQuery(query));
    }
  };
};

const ModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);

export default ModalContainer;