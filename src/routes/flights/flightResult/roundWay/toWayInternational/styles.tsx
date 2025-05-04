import {StyleSheet} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH, theme} from '../../../../../utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
  },
  flightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 4,
    borderRadius: 8,
    padding: 10,
  },
  priceContainer: {
    // borderRadius: 6,
    // alignItems: 'center',
  },
  priceText: {
    fontWeight: 'bold',
    color: '#333',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: 'gray',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    // alignItems: 'center',
  },
  modalView: {
    height: SCREEN_HEIGHT * 0.7,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  barStyle: {
    height: 4,
    width: SCREEN_WIDTH * 0.1,
    backgroundColor: 'grey',
    alignSelf: 'center',
  },
  separator: {height: 0.5, backgroundColor: theme.colors.border},
  seeMore: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  seeMoreText: {
    color: 'blue',
    fontSize: 10,
  },
});
