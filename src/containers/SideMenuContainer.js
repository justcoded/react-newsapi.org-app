import React              from 'react';
import { connect }        from 'react-redux';
import SideMenu           from 'react-native-side-menu';
import MenuContainer      from '../containers/MenuContainer';
import { toggleSideMenu } from '../actions/menu';

const sideMenuWidth = 300;
const menu = <MenuContainer/>;

const mapStateToProps = (state) => {
  return {
    isOpen: state.menu.isSideBarOpen,
    openMenuOffset: sideMenuWidth,
    menu,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (isModalOpen) => {
      dispatch(toggleSideMenu(isModalOpen))
    }
  };
};

const SideMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideMenu);

export default SideMenuContainer;