import {StyleSheet} from 'react-native';
import {scaleFont, theme} from '../../../../../../../utils';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: 'transparent',
    padding: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: 12,
  },
  logo: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  airlineName: {
    marginLeft: 8,
    fontSize: 8,
    fontWeight: '500',
  },
  flightDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginBottom: 16,
  },
  right_timeSection: {
    // flex: 1,
    alignItems: 'flex-end',
  },
  left_timeSection: {
    // flex: 1,
    alignItems: 'flex-start',
  },
  time: {
    fontSize: 8,
    fontWeight: '500',
  },
  location: {
    fontSize: 8,
    fontWeight: '500',
    color: '#555',
  },
  subtext: {
    fontSize: 8,
    fontWeight: '500',
    color: '#777',
  },
  middleSection: {
    alignItems: 'center',
  },
  duration: {
    fontSize: 8,
    fontWeight: '500',
  },
  stops: {
    fontSize: 8,
    fontWeight: '500',
    color: '#777',
  },
  layover: {
    fontSize: 8,
    fontWeight: '500',
    color: '#e74c3c',
    marginVertical: 6,
  },
  priceSection: {
    alignItems: 'flex-start',
    marginVertical: 8,
  },
  price: {
    fontSize: 8,
    fontWeight: '700',
    color: '#2ecc71',
  },
  priceLabel: {
    fontSize: 6,
    fontWeight: '500',
    color: '#555',
  },
  discountSection: {
    backgroundColor: '#fff9e6',
    padding: 8,
    borderRadius: 4,
  },
  discountText: {
    color: '#d35400',
    fontSize: scaleFont(10),
  },
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  loginButton: {
    flex: 1,
    backgroundColor: '#dfe6e9',
    padding: 8,
    borderRadius: 4,
    marginRight: 4,
  },
  loginText: {
    fontSize: scaleFont(12),
    textAlign: 'center',
    color: '#0984e3',
  },
  lockPriceButton: {
    flex: 1,
    backgroundColor: '#f6e58d',
    padding: 8,
    borderRadius: 4,
    marginLeft: 4,
  },
  lockText: {
    fontSize: scaleFont(8),
    textAlign: 'center',
    color: '#d35400',
  },
  refundPolicy: {
    fontSize: 8,
    fontWeight: '500',
    color: '#27ae60',
  },
});
