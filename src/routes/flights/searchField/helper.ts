import Toast from 'react-native-root-toast';
import {FlightApi} from '../../../networking/api/FlightApi';
import {AirportType, SearchFlightsInterface} from '../../../types';

export const onChangeText = (
  text: string,
  debounceTimeout: React.MutableRefObject<ReturnType<typeof setTimeout> | null>,
  airport: {
    airportsList: AirportType[];
    airportsLoading: boolean;
    airportsError: string | null;
  },
  setAirports: React.Dispatch<
    React.SetStateAction<{
      airportsList: AirportType[];
      airportsLoading: boolean;
      airportsError: string | null;
    }>
  >,
) => {
  if (debounceTimeout.current) {
    clearTimeout(debounceTimeout.current); // Clear the previous timeout
  }

  debounceTimeout.current = setTimeout(async () => {
    try {
      if (!text || text.length === 0) {
        return;
      }
      setAirports({...airport, airportsLoading: true});
      const airports = await FlightApi.airportSearch(text);
      if (airports.statusCode === 200) {
        setAirports({
          ...airport,
          airportsList: airports.data.data,
          airportsLoading: false,
        });
      } else {
        setAirports({
          ...airport,
          airportsLoading: false,
          airportsError: airports.message,
        });
      }
    } catch (error: any) {
      console.log(error?.message);
      if (error?.message == 'Network Error') {
        let toast = Toast.show('Network Error', {
          duration: Toast.durations.LONG,
          position: Toast.positions.BOTTOM,
          backgroundColor: 'red',
        });

        // You can manually hide the Toast, or it will automatically disappear after a `duration` ms timeout.
        setTimeout(function hideToast() {
          Toast.hide(toast);
        }, 3000);
      }
      setAirports({
        ...airport,
        airportsLoading: false,
        airportsError: error?.message,
      });
    }
  }, 500); // Adjust debounce time as needed (e.g., 300ms or 500ms)
};

export const initialAirportSearch = async (
  type: 'from' | 'to',
  flightSearch: SearchFlightsInterface,
  airport: {
    airportsList: AirportType[];
    airportsLoading: boolean;
    airportsError: string | null;
  },
  setAirports: React.Dispatch<
    React.SetStateAction<{
      airportsList: AirportType[];
      airportsLoading: boolean;
      airportsError: string | null;
    }>
  >,
) => {
  try {
    const airports = await FlightApi.airportSearch(
      type === 'from' ? flightSearch.from.iataCode : flightSearch.to.iataCode,
    );
    if (airports.statusCode === 200) {
      setAirports({
        ...airport,
        airportsList: airports.data.data,
        airportsLoading: false,
      });
    } else {
      setAirports({
        ...airport,
        airportsLoading: false,
        airportsError: airports.message,
      });
    }
  } catch (error: any) {
    console.log(error?.message);
    if (error?.message == 'Network Error') {
      let toast = Toast.show('Network Error', {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
        backgroundColor: 'red',
      });

      // You can manually hide the Toast, or it will automatically disappear after a `duration` ms timeout.
      setTimeout(function hideToast() {
        Toast.hide(toast);
      }, 3000);
    }
    setAirports({
      ...airport,
      airportsLoading: false,
      airportsError: error?.message,
    });
  }
};

export const onPressSuggestion = (
  type: 'from' | 'to',
  setFlightSearch: React.Dispatch<React.SetStateAction<SearchFlightsInterface>>,
  flightSearch: SearchFlightsInterface,
  goBack: () => void,
  suggestion: AirportType,
) => {
  if (type === 'from') {
    setFlightSearch({
      ...flightSearch,
      isDomestic:
        suggestion.address.countryCode !== 'IN' ||
        flightSearch.to.address.countryCode !== 'IN'
          ? false
          : true,
      from: {
        address: suggestion.address,
        detailedName: suggestion.detailedName,
        iataCode: suggestion.iataCode,
        name: suggestion.name,
      },
    });
    goBack();
  } else {
    setFlightSearch({
      ...flightSearch,
      isDomestic:
        flightSearch.from.address.countryCode !== 'IN' ||
        suggestion.address.countryCode !== 'IN'
          ? false
          : true,
      to: {
        address: suggestion.address,
        detailedName: suggestion.detailedName,
        iataCode: suggestion.iataCode,
        name: suggestion.name,
      },
    });
    goBack();
  }
};
