import React, {createContext, useContext, useState} from 'react';
import {SearchFlightsInterface} from '../types';
import {getDateByRequiredFormat} from '../utils';

type FlightSearchContextType = {
  flightSearch: SearchFlightsInterface;
  setFlightSearch: React.Dispatch<React.SetStateAction<SearchFlightsInterface>>;
};

export const FlightSearchContext =
  createContext<FlightSearchContextType | null>(null);
export const FlightSearchProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [flightSearch, setFlightSearch] = useState<SearchFlightsInterface>({
    tripType: 'oneWay',
    from: {
      iataCode: 'DEL',
      name: 'INDIRA GANDHI INTL',
      detailedName: 'DELHI/DL/IN:INDIRA GANDHI INTL',
      address: {
        cityName: 'DELHI',
        cityCode: 'DEL',
        countryName: 'INDIA',
        countryCode: 'IN',
        stateCode: 'DL',
        regionCode: 'ASIA',
      },
    },
    to: {
      iataCode: 'MAA',
      name: 'CHENNAI INTERNATIONAL',
      detailedName: 'CHENNAI/TN/IN:CHENNAI INTERNAT',
      address: {
        cityName: 'CHENNAI',
        cityCode: 'MAA',
        countryName: 'INDIA',
        countryCode: 'IN',
        stateCode: 'TN',
        regionCode: 'ASIA',
      },
    },
    isDomestic: true,
    departureDate: getDateByRequiredFormat(new Date().toISOString()),
    returnDate: getDateByRequiredFormat(
      new Date(new Date().setDate(new Date().getDate() + 7)).toISOString(),
    ),
    traveller: {
      adult: 1,
      child: 0,
      infant: 0,
      class: 'ECONOMY',
    },
  });

  return (
    <FlightSearchContext.Provider value={{flightSearch, setFlightSearch}}>
      {children}
    </FlightSearchContext.Provider>
  );
};
