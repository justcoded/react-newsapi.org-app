import { TOGGLE_MODAL, TOGGLE_SIDE_MENU } from '../constants/menu';

const DEFAULT_STATE = {
  isSideBarOpen: false,
  isModalOpen: false
};

export default function menu(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case TOGGLE_SIDE_MENU:
      return {
        ...state,
        isSideBarOpen: action.isSideBarOpen
      };

    case TOGGLE_MODAL:
      return {
        ...state,
        isModalOpen: !state.isModalOpen
      };

    default:
      return state;
  }
};