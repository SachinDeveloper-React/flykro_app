import React, {useState, useMemo, Fragment} from 'react';
import {View, FlatList, SafeAreaView} from 'react-native';
import {useFlightSearch} from '../../hooks';
import {format, theme} from '../../utils';
import {styles} from './styles';
import {next12Months, onSubmit} from './helper';
import Header from './components/Header';
import WeekDays from './components/WeekDays';
import Month from './components/Month';
import CalendarFooter from './components/CalendarFooter';

const CustomCalendar = () => {
  const {flightSearch, setFlightSearch} = useFlightSearch();
  const [selectedDate, setSelectedDate] = useState<{
    departureDate: string;
    returnDate: string;
    tripType: 'oneWay' | 'roundTrip' | 'multiCity';
  }>({
    departureDate: flightSearch.departureDate,
    returnDate:
      flightSearch.tripType === 'oneWay' ? '' : flightSearch.returnDate,
    tripType: flightSearch.tripType,
  });

  const departureDateFormatted = useMemo(
    () => format(selectedDate.departureDate),
    [selectedDate.departureDate],
  );
  const returnDateFormatted = useMemo(
    () => format(selectedDate.returnDate),
    [selectedDate.returnDate],
  );

  const isContinueDisabled = useMemo(() => {
    if (selectedDate.tripType === 'oneWay') {
      return !selectedDate.departureDate;
    }
    if (selectedDate.tripType === 'roundTrip') {
      return !(selectedDate.departureDate && selectedDate.returnDate);
    }
    return false;
  }, [selectedDate]);

  return (
    <Fragment>
      <SafeAreaView style={{flex: 0, backgroundColor: 'transparent'}} />
      <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.primary}}>
        <View style={{flex: 1, position: 'relative', backgroundColor: '#fff'}}>
          <Header
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            departureDateFormatted={departureDateFormatted}
            returnDateFormatted={returnDateFormatted}
          />

          <WeekDays />

          <FlatList
            data={next12Months}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => `${item.month}-${item.year}`}
            renderItem={({item}) => (
              <Month
                month={item}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />
            )}
          />

          <CalendarFooter
            isDisabled={isContinueDisabled}
            onPress={() =>
              onSubmit(selectedDate, flightSearch, setFlightSearch)
            }
          />
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

export default React.memo(CustomCalendar);
