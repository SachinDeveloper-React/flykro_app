import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {theme} from '../../../utils';

type SelectedDate = {
  departureDate: string;
  returnDate: string;
  tripType: 'oneWay' | 'roundTrip' | 'multiCity';
};

type HeaderProps = {
  selectedDate: SelectedDate;
  setSelectedDate: React.Dispatch<React.SetStateAction<SelectedDate>>;
  departureDateFormatted: {
    day: string;
    month: string;
    year: number;
    date: number;
    dateStringFormat: string;
    dateString: string;
  };
  returnDateFormatted: {
    day: string;
    month: string;
    year: number;
    date: number;
    dateStringFormat: string;
    dateString: string;
  };
};

const Header = ({
  selectedDate,
  setSelectedDate,
  departureDateFormatted,
  returnDateFormatted,
}: HeaderProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        gap: 10,
        paddingHorizontal: 10,
        paddingTop: 10,
      }}>
      <View
        style={{
          flex: 1,
          borderWidth: 1,
          borderColor: theme.colors.primary,
          padding: 10,
          borderRadius: 5,
        }}>
        <Text style={{fontSize: 8, fontWeight: '400'}}>Departure Date</Text>
        <Text style={{fontSize: 10, fontWeight: '600'}}>
          {departureDateFormatted.date} {departureDateFormatted.month}{' '}
          <Text style={{fontSize: 8, fontWeight: '400'}}>
            {departureDateFormatted.day}, {departureDateFormatted.year}
          </Text>
        </Text>
      </View>

      <TouchableOpacity
        onPress={() =>
          setSelectedDate({...selectedDate, tripType: 'roundTrip'})
        }
        style={{
          flex: 1,
          borderWidth: 1,
          borderColor:
            selectedDate.tripType == 'oneWay'
              ? theme.colors.border
              : theme.colors.primary,
          padding: 10,
          borderRadius: 5,
          position: 'relative',
        }}>
        <Text style={{fontSize: 8, fontWeight: '600'}}>
          {selectedDate.tripType == 'oneWay'
            ? '+ Add Return Date'
            : 'Return Date'}
        </Text>
        <Text style={{fontSize: 10, fontWeight: '800'}}>
          {selectedDate.tripType == 'oneWay'
            ? ''
            : selectedDate.returnDate
            ? returnDateFormatted.date + ' ' + returnDateFormatted.month + ' '
            : ''}
          <Text style={{fontSize: 8, fontWeight: '400'}}>
            {selectedDate.tripType == 'oneWay'
              ? 'Save More on round trip'
              : selectedDate.returnDate
              ? returnDateFormatted.day + ', ' + returnDateFormatted.year
              : '-'}
          </Text>
        </Text>
        {selectedDate.tripType === 'roundTrip' && (
          <TouchableOpacity
            onPress={() =>
              setSelectedDate({...selectedDate, tripType: 'oneWay'})
            }
            style={{
              position: 'absolute',
              right: 0,
              top: -10,
              backgroundColor: '#fff',
              width: 20,
              height: 20,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              borderColor: theme.colors.border,
            }}>
            <Text>X</Text>
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(Header);
