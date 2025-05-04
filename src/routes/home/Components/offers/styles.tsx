import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH} from '../../../../utils';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const styles = StyleSheet.create({
  container: {
    // marginVertical: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  headerTextLeft: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  headerTextRight: {
    fontSize: 12,
    fontWeight: '600',
  },
  card: {
    width: SCREEN_WIDTH * 0.6,
    height: 150,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5, // For Android shadow
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
