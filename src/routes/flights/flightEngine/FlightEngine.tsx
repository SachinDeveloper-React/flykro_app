import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {useFlightSearch} from '../../../hooks';
import {TripTypeTab} from './Components';
import {Engine} from './module';
import {OfferSection} from '../../home/Components';
import {navigateScreenByType} from './helper';

type Props = {};

const FlightEngine = (props: Props) => {
  const {flightSearch, setFlightSearch} = useFlightSearch();

  return (
    <ScrollView
      style={{flex: 1, backgroundColor: '#fff', paddingHorizontal: 16}}>
      <TripTypeTab
        setFlightSearch={setFlightSearch}
        flightSearch={flightSearch}
      />
      <Engine
        setFlightSearch={setFlightSearch}
        flightSearch={flightSearch}
        onPress={() => navigateScreenByType(flightSearch)}
      />
      <OfferSection />
    </ScrollView>
  );
};

export default FlightEngine;
