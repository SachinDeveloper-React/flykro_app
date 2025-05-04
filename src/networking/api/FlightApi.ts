import {SearchFlightsInterface} from '../../types';
import ApiClient from '../ApiClient';
import {Flight_URL} from '../Urls';

export const FlightApi = {
  airportSearch: async (keyword: string) => {
    const response = await ApiClient.get(
      `${Flight_URL.AIRPORTS}?subType=AIRPORT&keyword=${keyword}`,
    );
    return response.data;
  },

  flightSearch: async (searchRequest: SearchFlightsInterface) => {
    const params = new URLSearchParams();

    // Build the object with key-value pairs
    const queryParams = {
      origin: searchRequest.from.iataCode,
      destination: searchRequest.to.iataCode,
      departureDate: searchRequest.departureDate,
      adults: searchRequest.traveller.adult,
      children: searchRequest.traveller.child,
      infants: searchRequest.traveller.infant,
      travelClass: searchRequest.traveller.class,
      currencyCode: 'INR',
      nonStop: 'false',
      tripType: searchRequest.tripType,
      isDomestic: searchRequest.isDomestic,
      ...(searchRequest.tripType === 'roundTrip' && {
        returnDate: searchRequest.returnDate,
      }),
    };

    // Add each key-value pair to the URLSearchParams object
    Object.entries(queryParams).forEach(([key, value]) => {
      params.append(key, value.toString());
    });

    console.log('searchRequest', searchRequest);
    const response = await ApiClient.get(
      `${Flight_URL.ENGINE}?${params.toString()}`,
    );
    return response.data;
  },

  storeItinerary: async (body: any) => {
    try {
      const response = await ApiClient.post(Flight_URL.STOREITINERARY, body);
      return response.data;
    } catch (error) {}
  },

  getItinerary: async (itineraryID: string | number) => {
    try {
      console.log(
        '${Flight_URL.GETITINERARY}/${itineraryID}',
        `${Flight_URL.GETITINERARY}/${itineraryID}`,
      );
      const response = await ApiClient.get(
        `${Flight_URL.GETITINERARY}/${itineraryID}`,
      );
      return response.data;
    } catch (error) {}
  },

  checkFlightsPrice: async (itinerary: any) => {
    console.log('itinerary', itinerary);
    try {
      const response = await ApiClient.post(Flight_URL.CHECKFLIGHTPRICE, {
        flight: itinerary,
      });

      return response.data;
    } catch (error) {}
  },
};
