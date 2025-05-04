import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH, theme} from '../../utils';

export const styles = StyleSheet.create({
  safeAreacontainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  beforeloginTopcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: theme.colors.border,
  },
  beforeloginToptext: {
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 1.3,
    marginBottom: 10,
  },
  beforeloginTopButtonTouchable: {
    borderWidth: 1,
    borderColor: theme.colors.primary,
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  beforeloginTopButtonText: {
    fontSize: 12,
    fontWeight: '700',
    color: theme.colors.primary,
  },
  beforeloginImage: {
    alignSelf: 'flex-end',
    width: SCREEN_WIDTH * 0.3,
    aspectRatio: (SCREEN_WIDTH * 0.3) / (SCREEN_WIDTH * 0.3),
    resizeMode: 'contain',
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  touchable: {
    height: 40,
    marginBottom: 10,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: 10,
  },
  title: {
    fontSize: 14,
  },
  subtitle: {
    fontSize: 12,
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    // borderRadius: 10,
  },
  profileImageContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    overflow: 'hidden',
  },
  circularProgress: {
    width: 50,
    height: 50,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: '#F2C94C', // Yellow progress bar
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    zIndex: 999999,
  },
  progressText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
  },
  textContainera: {
    flex: 1,
  },
  greetingText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  emailText: {
    fontSize: 14,
    color: 'white',
    marginTop: 2,
  },
});
