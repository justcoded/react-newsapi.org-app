import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5
  },
  text: {
    fontSize: 18,
  },
  imageWrapper: {
    padding: 10
  },
  image: {
    height: 23,
    width: 23,
    borderRadius: 11
  },
  logo: {
    height: 20,
    width: 130
  }
});
