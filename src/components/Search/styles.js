import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  searchFieldWrapper: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    paddingBottom: 9,
    borderBottomColor: '#000',
    borderBottomWidth: 1
  },
  searchField: {
    width: '90%',
    fontSize: 26,
    paddingLeft: 9
  },
  searchIconWrapper: {
    height: 23,
    width: 25
  },
  searchIcon: {
    height: '100%',
    width: '100%'
  }
});
