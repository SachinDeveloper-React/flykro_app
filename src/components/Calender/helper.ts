import {Alert} from 'react-native';
import {SearchFlightsInterface} from '../../types';
import {goBack} from '../../navigation/NavigationService';
import {getDateByRequiredFormat} from '../../utils';

const today = new Date();
export const generateNext12Months = () => {
  const months = [];
  for (let i = 0; i < 12; i++) {
    const date = new Date(today.getFullYear(), today.getMonth() + i, 1);
    months.push({
      month: date.getMonth(),
      year: date.getFullYear(),
      monthName: date.toLocaleString('default', {month: 'long'}),
    });
  }
  return months;
};

export const next12Months = generateNext12Months();

// Generate days for a specific month, aligned to start on the correct weekday
export const generateDays = (month: number, year: number) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate(); // Total days in the month
  const startDay = new Date(year, month, 1).getDay(); // Day of the week the month starts (0 = Sunday, 6 = Saturday)
  const daysArray = Array.from({length: daysInMonth}, (_, i) => i + 1);

  // Prepend empty slots for days before the 1st
  const emptyDays = Array.from(
    {length: startDay === 0 ? 0 : startDay},
    () => null,
  );

  return [...emptyDays, ...daysArray];
};

// Function to divide days into weeks
export const generateWeeks = (days: (number | null)[]) => {
  const weeks = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7)); // Slice the days into 7-day chunks
  }
  return weeks;
};

export const isSelected = (
  day: number,
  month: number,
  year: number,
  selectedDate: {
    departureDate: string;
    returnDate: string;
    tripType: 'oneWay' | 'roundTrip' | 'multiCity';
  },
) => {
  const isSameDate = (date: string) => {
    const d = new Date(date);
    return (
      d.getDate() === day && d.getMonth() === month && d.getFullYear() === year
    );
  };

  if (selectedDate.tripType === 'oneWay') {
    return isSameDate(selectedDate.departureDate);
  } else if (selectedDate.tripType === 'roundTrip') {
    return (
      isSameDate(selectedDate.departureDate) ||
      isSameDate(selectedDate.returnDate)
    );
  }

  return false;
};

export const isSelectedTripDate = (
  selectedDate: {
    departureDate: string;
    returnDate: string;
    tripType: 'oneWay' | 'roundTrip' | 'multiCity';
  },
  setSelectedDate: React.Dispatch<
    React.SetStateAction<{
      departureDate: string;
      returnDate: string;
      tripType: 'oneWay' | 'roundTrip' | 'multiCity';
    }>
  >,
  year: number,
  month: number,
  day: number,
) => {
  const currentselectedDate = new Date(year, month, day);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (currentselectedDate < today) {
    Alert.alert('You cannot select a date in the past');
    return;
  }

  if (selectedDate.tripType === 'oneWay') {
    setSelectedDate({
      departureDate: new Date(year, month, day).toDateString(),
      returnDate: '',
      tripType: selectedDate.tripType,
    });
  } else if (selectedDate.tripType === 'roundTrip') {
    const currentselectedDate = new Date(year, month, day);
    const departureDate = new Date(selectedDate.departureDate);
    const returnDate = new Date(selectedDate.returnDate);
    if (
      selectedDate.departureDate &&
      !selectedDate.returnDate &&
      currentselectedDate <= departureDate
    ) {
      setSelectedDate({
        departureDate: new Date(year, month, day).toDateString(),
        returnDate: '',
        tripType: selectedDate.tripType,
      });
      return;
    }

    if (selectedDate.departureDate && selectedDate.returnDate) {
      setSelectedDate({
        departureDate: new Date(year, month, day).toDateString(),
        returnDate: '',
        tripType: selectedDate.tripType,
      });
    } else {
      setSelectedDate({
        departureDate: selectedDate.departureDate,
        returnDate: new Date(year, month, day).toDateString(),
        tripType: selectedDate.tripType,
      });
    }
  }
};

export const onSubmit = (
  selectedDate: {
    departureDate: string;
    returnDate: string;
    tripType: 'oneWay' | 'roundTrip' | 'multiCity';
  },
  flightSearch: SearchFlightsInterface,
  setFlightSearch: React.Dispatch<React.SetStateAction<SearchFlightsInterface>>,
) => {
  if (selectedDate.tripType === 'oneWay') {
    const departureDate = getDateByRequiredFormat(selectedDate.departureDate);
    setFlightSearch({
      ...flightSearch,
      departureDate: departureDate,
      tripType: selectedDate.tripType,
    });
  } else if (selectedDate.tripType === 'roundTrip') {
    const departureDate = getDateByRequiredFormat(selectedDate.departureDate);
    const returnDate = getDateByRequiredFormat(selectedDate.returnDate);

    setFlightSearch({
      ...flightSearch,
      departureDate: departureDate,
      returnDate: returnDate,
      tripType: selectedDate.tripType,
    });
  }

  goBack();
};
