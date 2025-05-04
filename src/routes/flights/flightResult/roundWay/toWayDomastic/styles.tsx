import {StyleSheet} from 'react-native';
import {theme} from '../../../../../utils';

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: theme.colors.card},
  flightContainer: {flex: 1, flexDirection: 'row'},
  flightListContainer: {flex: 1},
  headerRow: {
    padding: 12,
    borderBottomWidth: 0.2,
    borderColor: theme.colors.border,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {fontSize: 12, fontWeight: '600'},
  dateText: {fontSize: 8, fontWeight: '400'},
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 10,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: -3},
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  totalPrice: {flex: 1, fontSize: 16, fontWeight: '800'},
});
