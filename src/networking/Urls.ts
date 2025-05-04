import {Platform} from 'react-native';

export const SERVER_URL =
  Platform.OS === 'ios' ? 'http://localhost:8000' : 'http://192.168.0.166:8000';
export const BASE_URL = `${SERVER_URL}/api/v1`;

export const Urls = {
  USERS: '/auth/current-user',
  UDDATE_USERS_DETAILS: '/auth/update-details',
  LOGIN: '/auth/login',
  OTPVERIFY: 'auth/verify-otp',
};

export const Flight_URL = {
  AIRPORTS: '/search/airport/autosuggest',
  ENGINE: '/shopping/search-flights',
  CHECKFLIGHTPRICE: '/shopping/check-flights-price',
  STOREITINERARY: '/flight/store/itinerary',
  GETITINERARY: '/flight/retrive/itinerary',
};
