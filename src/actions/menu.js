import { TOGGLE_MODAL, TOGGLE_SIDE_MENU } from '../constants/menu';

export function toggleSideMenu(isSideBarOpen) {
  return {
    type: TOGGLE_SIDE_MENU,
    isSideBarOpen
  }
}

export function toggleModal() {
  return {
    type: TOGGLE_MODAL,
  }
}