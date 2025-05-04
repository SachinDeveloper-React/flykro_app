import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../styles';

const WeekDays = () => {
  return (
    <View style={styles.weekDaysContainer}>
      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
        <Text key={day} style={styles.weekDayText}>
          {day}
        </Text>
      ))}
    </View>
  );
};

export default React.memo(WeekDays);
