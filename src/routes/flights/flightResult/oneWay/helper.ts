import {Dispatch, SetStateAction} from 'react';
import {navigate} from '../../../../navigation/NavigationService';
import {FlightApi} from '../../../../networking';
import {FlightOffersResponse} from './types';
import {SearchFlightsInterface} from '../../../../types';

export const convertDuration = (isoDuration: string) => {
  // Match the hours and minutes using regex
  const match = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?/);

  if (!match) {
    return 'Invalid duration';
  }

  const hours = match[1] ? parseInt(match[1], 10) : 0;
  const minutes = match[2] ? parseInt(match[2], 10) : 0;

  // Format as "6h 50m"
  return `${hours}h ${minutes}m`;
};

export const calculateLayoverAndStopsForItineraries = (itineraries: any) => {
  return itineraries.map((itinerary: any) => {
    const segments = itinerary.segments;
    const stops = segments.length - 1; // Number of stops is one less than the number of segments.
    const layovers = [];

    for (let i = 0; i < segments.length - 1; i++) {
      const currentSegment = segments[i];
      const nextSegment = segments[i + 1];

      // Convert times to Date objects
      const arrivalTime = new Date(currentSegment.arrival.at) as any;
      const departureTime = new Date(nextSegment.departure.at) as any;

      // Calculate the layover duration in milliseconds
      const layoverDurationMs = departureTime - arrivalTime;

      // Convert milliseconds to hours and minutes
      const hours = Math.floor(layoverDurationMs / (1000 * 60 * 60));
      const minutes = Math.floor(
        (layoverDurationMs % (1000 * 60 * 60)) / (1000 * 60),
      );

      // Format as "Xh Ym"
      layovers.push(`${hours}h ${minutes}m`);
    }

    return {
      itineraryDuration: itinerary.duration, // Total duration of the itinerary
      stops,
      layovers,
    };
  });
};

export const addDurations = (durations: string[]) => {
  let totalMinutes = 0;

  // Convert each duration to total minutes
  durations.forEach(duration => {
    const [hours, minutes] = duration.split(' ').map(part => parseInt(part));
    totalMinutes += hours * 60 + minutes;
  });

  // Convert total minutes back to hours and minutes
  const totalHours = Math.floor(totalMinutes / 60);
  const remainingMinutes = totalMinutes % 60;

  return totalHours === 0 && remainingMinutes === 0
    ? 'No Layover'
    : `${totalHours}h ${remainingMinutes}m`;
};

export type StateType = {
  list: FlightOffersResponse;
  loading: boolean;
  error?: string;
};

export const storeInstance = async (
  item: any,
  key: string,
  dictionaries: {
    aircraft: Object;
    carriers: Object;
    currencies: Object;
    locations: Object;
  },
  flightSearch: SearchFlightsInterface,
  setState: Dispatch<SetStateAction<boolean>>,
) => {
  try {
    setState(true);
    const body = {
      itinerary: item,
      platform: 'Mobile',
      key,
      dictionaries,
      flightSearch,
    };

    const response = await FlightApi.storeItinerary(body);

    if (response.statusCode === 200 && response.success) {
      navigate('FlightBookingScreen', {
        itineariryID: response.data,
      });
      setState(false);
    } else {
      setState(false);
    }
  } catch (error) {
    setState(false);
  }
};
