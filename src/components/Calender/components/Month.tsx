import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {styles} from '../styles';
import {
  generateDays,
  generateWeeks,
  isSelected,
  isSelectedTripDate,
} from '../helper';
import {SCREEN_WIDTH} from '../../../utils';

type SelectedDate = {
  departureDate: string;
  returnDate: string;
  tripType: 'oneWay' | 'roundTrip' | 'multiCity';
};

type MonthProps = {
  month: {
    month: number;
    year: number;
    monthName: string;
  };
  selectedDate: SelectedDate;
  setSelectedDate: React.Dispatch<React.SetStateAction<SelectedDate>>;
};

const Month = ({month, selectedDate, setSelectedDate}: MonthProps) => {
  const {month: monthNumber, year, monthName} = month;
  const days = generateDays(monthNumber, year);
  const weeks = generateWeeks(days);

  return (
    <View key={`${monthNumber}-${year}`} style={styles.monthContainer}>
      <Text style={styles.monthName}>
        {monthName} {year}
      </Text>
      <View style={styles.daysContainer}>
        {weeks.map((week, index) => (
          <View key={index} style={[styles.weekContainer, {width: '100%'}]}>
            {week.map((day, subIndex) =>
              day ? (
                <TouchableOpacity
                  key={subIndex}
                  style={[
                    {width: SCREEN_WIDTH / 7},
                    styles.day,
                    isSelected(day, monthNumber, year, selectedDate) &&
                      styles.selectedDay,
                  ]}
                  onPress={() =>
                    isSelectedTripDate(
                      selectedDate,
                      setSelectedDate,
                      year,
                      monthNumber,
                      day,
                    )
                  }>
                  <Text
                    style={[
                      styles.dayText,
                      isSelected(day, monthNumber, year, selectedDate) &&
                        styles.selectedDayText,
                    ]}>
                    {day}
                  </Text>
                </TouchableOpacity>
              ) : (
                <View
                  key={subIndex}
                  style={[styles.emptyDay, {width: SCREEN_WIDTH / 7}]}></View>
              ),
            )}
          </View>
        ))}
      </View>
    </View>
  );
};

export default React.memo(Month);
