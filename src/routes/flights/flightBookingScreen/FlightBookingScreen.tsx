import React, {useEffect, Fragment} from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../navigation/types';
import {useFlightBooking} from '../../../hooks';
import {getDateByForHeader} from '../../../utils';

type Props = NativeStackScreenProps<RootStackParamList, 'FlightBookingScreen'>;

const FlightBookingScreen: React.FC<Props> = ({navigation, route}) => {
  const {itineariryID} = route.params;
  const {
    getItinerary,
    flightObject,
    flightPriceCheckLoading,
    getItineraryLoading,
  } = useFlightBooking({id: itineariryID});

  useEffect(() => {
    if (getItineraryLoading) {
      navigation.setOptions({
        headerTitle: () => <ActivityIndicator size="small" />,
      });
    } else {
      navigation.setOptions({
        headerTitleAlign: 'left',
        headerTitle: () => {
          const {flightSearch} = flightObject?.data || {};
          const departureDate = getDateByForHeader(flightSearch?.departureDate);
          const returnDate = getDateByForHeader(flightSearch?.returnDate);

          return (
            <View style={styles.header}>
              <Text style={styles.headerTitle}>
                {flightSearch?.from?.address.cityName} -{' '}
                {flightSearch?.to?.address.cityName}
              </Text>
              <Text style={styles.headerSubtitle}>
                {departureDate}
                {flightSearch?.tripType === 'roundTrip' && ` - ${returnDate}`}
                {' | '}
                {flightSearch?.traveller?.adult +
                  flightSearch?.traveller?.child +
                  flightSearch?.traveller?.infant}{' '}
                Traveller(s)
                {' | '}
                {flightSearch?.traveller?.class}
              </Text>
            </View>
          );
        },
      });
    }
  }, [navigation, getItineraryLoading]);

  const renderSegmentDetails = (segment: any, index: number) => {
    const departureDate = segment.departure.at.split('T')[0];
    const departureTime = segment.departure.at.split('T')[1].slice(0, 5);
    const arrivalDate = segment.arrival.at.split('T')[0];
    const arrivalTime = segment.arrival.at.split('T')[1].slice(0, 5);

    return (
      <Fragment key={index}>
        <View style={styles.segmentHeader}>
          <Image
            source={{
              uri: `https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/${segment.carrierCode}.png?v=19`,
            }}
            style={styles.airlineLogo}
            resizeMode="contain"
          />
          <View>
            <Text style={styles.segmentText}>
              {flightObject?.data?.dictionaries.carriers[segment.carrierCode]} |{' '}
              {segment.number}
            </Text>
            <Text
              style={[
                styles.segmentText,
                {
                  fontSize: 8,
                },
              ]}>
              {flightObject?.data?.dictionaries.aircraft[segment.aircraft.code]}
            </Text>
          </View>
        </View>

        <View style={styles.segmentDetails}>
          <View style={styles.row}>
            <Text style={styles.text}>{departureDate}</Text>
            <Text style={styles.text}>{arrivalDate}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>{departureTime}</Text>
            <Text style={styles.text}>{arrivalTime}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>
              {flightObject?.data?.iataDetails[segment.departure?.iataCode]
                ?.address.cityName || 'N/A'}
            </Text>
            <Text style={styles.text}>
              {flightObject?.data?.iataDetails[segment.arrival?.iataCode]
                ?.address.cityName || 'N/A'}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={[styles.text, styles.flexStart]}>
              {flightObject?.data?.iataDetails[segment.departure?.iataCode]
                ?.name || 'N/A'}
            </Text>
            <Text style={[styles.text, styles.flexEnd]}>
              {flightObject?.data?.iataDetails[segment.arrival?.iataCode]
                ?.name || 'N/A'}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>
              Terminal {segment.departure?.terminal || 'N/A'}
            </Text>
            <Text style={styles.text}>
              Terminal {segment.arrival?.terminal || 'N/A'}
            </Text>
          </View>
        </View>
      </Fragment>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <LinearGradient colors={['#eeaeca', '#94bbe9']} style={styles.gradient}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {flightObject?.data?.itinerary?.itineraries.map(
            (itinerary: any, idx: number) =>
              itinerary.segments.map(renderSegmentDetails),
          )}
        </ScrollView>
      </LinearGradient>
      {flightPriceCheckLoading && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
        </View>
      )}
    </ScrollView>
  );
};

export default FlightBookingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  gradient: {
    // flex: 1,
  },
  scrollContainer: {
    padding: 16,
  },
  header: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  headerTitle: {
    fontSize: 12,
    fontWeight: '700',
  },
  headerSubtitle: {
    fontSize: 10,
    fontWeight: '400',
  },
  segmentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  airlineLogo: {
    width: 30,
    height: 30,
  },
  segmentText: {
    fontSize: 12,
    fontWeight: '500',
  },
  segmentDetails: {
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  text: {
    fontSize: 12,
    color: '#333',
  },
  flexStart: {
    textAlign: 'left',
    flex: 1,
  },
  flexEnd: {
    textAlign: 'right',
    flex: 1,
  },
  loading: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
