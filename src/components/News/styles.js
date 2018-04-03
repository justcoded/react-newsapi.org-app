import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 34,
    marginRight: 15,
    marginLeft: 15
  },
  content: {
    paddingTop: 13,
    paddingLeft: 12,
    paddingRight: 9,
    paddingBottom: 19
  },
  icon: {
    width: 14,
    height: 14,
    marginRight: 6
  },
  image: {
    width: '100%',
    borderRadius: 10,
    height: 130
  },
  noImage: {
    width: 76,
    height: 76,
    borderRadius: 10,
    margin: 'auto'
  },
  noImageWrapper: {
    backgroundColor: '#d8d8d8',
    height: 130,
    display: 'flex',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  newsDetail: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 12
  },
  newsDetailText: {
    fontSize: 11,
    marginRight: 6
  },
  title: {
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 12
  },
  description: {
    fontSize: 14,
    lineHeight: 22,
    opacity: 0.6,
  },
  bottomBlock: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 19,
  },
  readMore: {
    display: 'flex',
    justifyContent: 'center',
    marginRight: 15,
    width: 65,
    borderRadius: 13,
    height: 28,
    backgroundColor: '#ff4e02',
  },
  readMoreLabel: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 11,
  }
});