export interface SearchFlightsInterface {
  tripType: 'oneWay' | 'roundTrip' | 'multiCity';
  isDomestic: boolean;
  from: {
    detailedName: string;
    iataCode: string;
    name: string;
    address: {
      cityName: string;
      cityCode: string;
      countryName: string;
      countryCode: string;
      stateCode: string;
      regionCode: string;
    };
  };
  to: {
    detailedName: string;
    iataCode: string;
    name: string;
    address: {
      cityName: string;
      cityCode: string;
      countryName: string;
      countryCode: string;
      stateCode: string;
      regionCode: string;
    };
  };
  departureDate: string;
  returnDate: string;
  traveller: {
    adult: number;
    child: number;
    infant: number;
    class: 'ECONOMY' | 'BUSINESS' | 'PREMIUM ECONOMY' | 'FIRST';
  };
}

export type AirportType = {
  address: {
    cityCode: string;
    cityName: string;
    countryCode: string;
    countryName: string;
    regionCode: string;
    stateCode: string;
  };
  analytics: {
    travelers: {
      score: number;
    };
  };
  detailedName: string;
  id: string;
  name: string;
  iataCode: string;
  subType: string;
  type: string;
};
