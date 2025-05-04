import {Alert, View} from 'react-native';
import React, {useState} from 'react';
import {SearchWidget} from '../../Components';
import {SearchFlightsInterface} from '../../../../../types';
import {format, theme} from '../../../../../utils';
import {navigate} from '../../../../../navigation/NavigationService';
import {Button, Calender} from '../../../../../components';

type Props = {
  setFlightSearch: (value: any) => void;
  flightSearch: SearchFlightsInterface;
  onPress: () => void;
};

const Engine = (props: Props) => {
  const {setFlightSearch, flightSearch, onPress} = props;
  const {from, to, departureDate, returnDate, traveller, tripType} =
    flightSearch;

  const totalPassengers = traveller.adult + traveller.child + traveller.infant;
  const departureDateFormatted = format(departureDate);
  const returnDateFormatted = format(returnDate);

  return (
    <View style={{marginVertical: 16}}>
      <SearchWidget
        type="from"
        subValue={from.name}
        icon="airplane-takeoff"
        value={from.address.cityName}
        subValueText={from.address.cityCode}
        onPress={() => {
          navigate('SearchField', {type: 'from'});
        }}
      />
      <SearchWidget
        type="to"
        subValue={to.name}
        icon="airplane-landing"
        value={to.address.cityName}
        subValueText={to.address.cityCode}
        onPress={() => {
          navigate('SearchField', {type: 'to'});
        }}
      />
      <View style={{flexDirection: 'row', width: '100%'}}>
        <SearchWidget
          width="50%"
          type="departure"
          icon="calendar-month"
          value={`${
            departureDateFormatted.date
          } ${departureDateFormatted.month.substring(0, 3)}`}
          subValueText={`${departureDateFormatted.day},${departureDateFormatted.year}`}
          onPress={() => {
            navigate('FlightCalender');
          }}
        />
        <SearchWidget
          width="50%"
          type={tripType === 'oneWay' ? '+ return date' : 'return'}
          icon=""
          value={
            tripType === 'oneWay'
              ? ''
              : `${
                  returnDateFormatted.date
                } ${returnDateFormatted.month.substring(0, 3)}`
          }
          subValueText={
            tripType === 'oneWay'
              ? 'round trips!'
              : `${returnDateFormatted.day},${returnDateFormatted.year}`
          }
          onPress={() => {
            tripType === 'oneWay'
              ? setFlightSearch({
                  ...flightSearch,
                  tripType: 'roundTrip',
                })
              : navigate('FlightCalender');
          }}
        />
      </View>
      <SearchWidget
        width="100%"
        type="Passengers & Cabin Class"
        icon="account"
        value={`${totalPassengers},`}
        subValueText={traveller.class}
        onPress={() => {
          navigate('FlightTravellerScreen');
        }}
      />

      <Button
        title="Submit"
        onPress={onPress}
        buttonColor={theme.colors.primary}
        textColor="#FFFFFF"
        loading={false}
        borderRadius={12}
      />
    </View>
  );
};
// .searchWidgetContainer

export default Engine;
