import { StyleSheet } from 'react-native';

export const ACTIVITY_INDICATOR_COLOR = '#0000ff';
export const ACTIVITY_SIZE = 'large';

export default StyleSheet.create({
  resultsWrapper: {
    marginTop: 30,
    paddingRight: 15,
    paddingLeft: 15
  },
  results: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  resultsText: {
    fontSize: 14,
    fontWeight: '800'

  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
  closeButton: {
    marginLeft: 10
  },
  flatList: {
    marginBottom: 170
  },
  topNews: {
    marginTop: 34,
    marginBottom: -20,
    fontSize: 14,
    fontWeight: '800',
  }
});