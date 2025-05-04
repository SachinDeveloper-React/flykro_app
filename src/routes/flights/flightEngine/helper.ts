import {navigate} from '../../../navigation/NavigationService';
import {SearchFlightsInterface} from '../../../types';

export const navigateScreenByType = async (
  flightSearch: SearchFlightsInterface,
) => {
  try {
    if (flightSearch.tripType === 'roundTrip' && flightSearch.isDomestic) {
      navigate('ToWayDomasticScreen', {
        searchOption: flightSearch,
      });
    } else if (
      flightSearch.tripType === 'roundTrip' &&
      !flightSearch.isDomestic
    ) {
      navigate('ToWayInternationalScreen', {
        searchOption: flightSearch,
      });
    } else if (flightSearch.tripType === 'oneWay') {
      navigate('FlightResultScreen', {
        searchOption: flightSearch,
      });
    }
  } catch (error) {
    console.log('error', error);
  }
};
