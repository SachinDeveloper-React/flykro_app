import {StyleSheet} from 'react-native';
import {theme} from '../../utils';

export const styles = StyleSheet.create({
  monthContainer: {
    marginBottom: 20,
    // paddingHorizontal: 10,
  },
  monthName: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
    marginBottom: 10,
    marginLeft: 10,
  },
  weekDaysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  weekDayText: {
    marginBottom: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#888',
  },
  daysContainer: {
    flexDirection: 'column', // Ensure days are in a column structure (with breaks between weeks)
  },
  weekContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // marginBottom: 5, // Add space between weeks
  },
  day: {
    height: 40,
    // margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#f5f5f5',
    // borderRadius: 5,
  },
  dayText: {
    color: '#000',
  },
  selectedDay: {
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
  },
  selectedDayText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  emptyDay: {
    // width: 40,
    height: 40,
    // margin: 5,
  },
});
