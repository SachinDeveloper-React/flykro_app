import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FlightApi} from '../networking';

type Props = {
  id: string | number;
};

const useFlightBooking = (props: Props) => {
  const {id} = props;
  const [flightObject, setFlightObject] = useState<any>();
  const [flightPriceCheckLoading, setFlightPriceCheckLoading] =
    useState<boolean>(true);
  const [getItineraryLoading, setGetItineraryLoading] = useState<boolean>(true);

  const getItinerary = async () => {
    try {
      setFlightPriceCheckLoading(true);
      setGetItineraryLoading(true);
      const response = await FlightApi.getItinerary(id);

      setFlightObject(response);
      setGetItineraryLoading(false);
      await checkFlightsPrice(response?.data?.itinerary);
    } catch (error) {}
  };
  const checkFlightsPrice = async (itineariry: any) => {
    try {
      const response = await FlightApi.checkFlightsPrice(itineariry);

      setFlightPriceCheckLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    getItinerary();
  }, []);
  return {
    getItinerary,
    flightObject,
    flightPriceCheckLoading,
    getItineraryLoading,
  };
};

export default useFlightBooking;

const styles = StyleSheet.create({});
