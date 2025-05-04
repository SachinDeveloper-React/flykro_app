import {Alert, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {tabTypes} from './helper';
import {styles} from './styles';

type Props = {
  setFlightSearch: (value: any) => void;
  flightSearch: {
    tripType: 'oneWay' | 'roundTrip' | 'multiCity';
  };
};

const TripTypTab = (props: Props) => {
  const {setFlightSearch, flightSearch} = props;
  const {colors} = useTheme();
  return (
    <View style={[styles.container, {borderColor: colors.border}]}>
      {tabTypes.map(item => (
        <TouchableOpacity
          key={item.id}
          onPress={() => {
            if (item.value === 'multiCity') {
              Alert.alert('Comming Soon');
            } else {
              setFlightSearch({
                ...flightSearch,
                tripType: item.value as 'oneWay' | 'roundTrip' | 'multiCity',
              });
            }
          }}
          style={[
            styles.tab,
            {
              borderWidth: 1,
              borderColor:
                flightSearch.tripType === item.value
                  ? colors.primary
                  : 'transparent',
            },
          ]}>
          <Text
            style={{
              fontWeight:
                flightSearch.tripType === item.value ? 'bold' : 'normal',
              color:
                flightSearch.tripType === item.value
                  ? colors.primary
                  : colors.text,
            }}>
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TripTypTab;
