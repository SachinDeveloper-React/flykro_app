import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Calender} from '../../../components';

type Props = {};

const FlightCalender = (props: Props) => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Calender />
    </View>
  );
};

export default FlightCalender;

const styles = StyleSheet.create({});
