import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    margin: 2,
    borderRadius: 8,
    paddingVertical: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: 12,
  },
  logo: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  airlineName: {
    marginLeft: 8,
    fontSize: 10,
    fontWeight: 'bold',
  },
  flightDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginBottom: 16,
  },
  right_timeSection: {
    // flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'column',
    gap: 5,
  },
  left_timeSection: {
    // flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'column',
    gap: 5,
  },
  time: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 8,
    color: '#555',
  },
  subtext: {
    fontSize: 10,
    color: '#777',
  },
  middleSection: {
    alignItems: 'center',
    // flex: 1,
  },
  duration: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  stops: {
    fontSize: 8,
    color: '#777',
  },
  layover: {
    fontSize: 8,
    color: '#e74c3c',
    marginVertical: 6,
  },
  priceSection: {
    alignItems: 'flex-end',
    marginBottom: 12,
  },
  price: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#2ecc71',
  },
  priceLabel: {
    fontSize: 10,
    color: '#555',
  },
  discountSection: {
    backgroundColor: '#fff9e6',
    padding: 8,
    borderRadius: 4,
  },
  discountText: {
    color: '#d35400',
    fontSize: 10,
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
    fontSize: 10,
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
    fontSize: 8,
    textAlign: 'center',
    color: '#d35400',
  },
  refundPolicy: {
    marginTop: 12,
    fontSize: 10,
    color: '#27ae60',
    fontWeight: 'bold',
  },
});
