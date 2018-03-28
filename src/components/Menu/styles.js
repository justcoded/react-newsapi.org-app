import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingBottom: 20,
  },
  item: {
    marginLeft: 20,
    marginRight: 20,
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: '800'
  },
  listWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 60
  },
  activeItem: {
    backgroundColor: '#f5f5f5',
  },
  search: {
    marginTop: 60,
    marginLeft: 20,
    marginRight: 20,
  },
  image: {
    width: 20,
    height: 20,
    borderRadius: 10
  }
});