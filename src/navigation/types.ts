// export type RootParamList = {
//   Home: undefined;
//   MyTrip: undefined;
//   Account: undefined;
//   SearchField: {
//     type: 'from' | 'to';
//   };
//   FlightSearch: undefined;
// };

import {NavigatorScreenParams} from '@react-navigation/native';
import {SearchFlightsInterface} from '../types';

// Define the types for Bottom Tab navigation
export type BottomTabParamList = {
  Home: undefined;
  MyTrip: undefined;
  Account: undefined;
};

// Define the types for Root Stack navigation
export type RootStackParamList = {
  Root: NavigatorScreenParams<BottomTabParamList>;
  FlightEngineScreen: undefined;
  SearchField: {
    type: 'from' | 'to';
  };
  FlightCalender: undefined;
  FlightTravellerScreen: undefined;
  FlightResultScreen: {
    searchOption: SearchFlightsInterface;
  };
  ToWayDomasticScreen: {
    searchOption: SearchFlightsInterface;
  };
  ToWayInternationalScreen: {
    searchOption: SearchFlightsInterface;
  };
  LoginScreen: undefined;
  SettingScreen: undefined;
  EditUserScreen: undefined;
  CameraScreen: undefined;
  FlightBookingScreen: {
    itineariryID: string | number;
  };
};

// Extend the global React Navigation types
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
