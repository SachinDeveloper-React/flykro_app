import {FlightApi} from '../../../networking';
import {StateType} from './oneWay/helper';
import {FlightOffersResponse} from './oneWay/types';

type flightSearchWithInstanceProps = {
  searchRequest: any;
  state: {
    list: FlightOffersResponse; // Example: an array of flight objects, define `Flight` type accordingly.
    loading: boolean;
    error?: string;
  };
  setState: React.Dispatch<React.SetStateAction<StateType>>;
};

export const flightSearchWithInstance = async ({
  searchRequest,
  state,
  setState,
}: flightSearchWithInstanceProps) => {
  try {
    setState({
      ...state,
      loading: true,
    });
    const response = await FlightApi.flightSearch(searchRequest);

    setState({
      ...state,
      loading: false,
      list: response,
    });
  } catch (error) {
    setState({
      ...state,
      loading: false,
      error: (error as Error)?.message || 'An error occurred',
    });
    console.error('error', error);
  }
};
