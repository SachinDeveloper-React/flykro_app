import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../../../../navigation/types';
import {TwoWayFlightCard} from './components';
import {format, SCREEN_WIDTH, theme} from '../../../../../utils';
import {useFlightSearch} from '../../../../../hooks';
import {Button} from '../../../../../components';
import {
  addDurations,
  calculateLayoverAndStopsForItineraries,
  convertDuration,
} from '../../oneWay/helper';
import {styles} from './styles';
import {flightSearchWithInstance} from '../../helper';
import {FlightOffersResponse} from '../../oneWay/types';
import {goBack} from '../../../../../navigation/NavigationService';

// Props Type
interface Props {
  route: RouteProp<RootStackParamList, 'ToWayDomasticScreen'>;
}

const ToWayDomasticScreen: React.FC<Props> = ({route}) => {
  const {flightSearch} = useFlightSearch();
  const [selected, setSelected] = useState({onWard: 0, return: 0});
  const [flightResult, setFlightResult] = useState<{
    list: FlightOffersResponse | any;
    loading: boolean;
    error: string;
  }>({
    list: {},
    loading: true,
    error: '',
  });

  useEffect(() => {
    (async () => {
      await flightSearchWithInstance({
        setState: setFlightResult as any,
        state: flightResult,
        searchRequest: route.params.searchOption,
      });
    })();
  }, []);

  const departDate = format(flightSearch.departureDate);
  const returnDate = format(flightSearch.returnDate);

  if (flightResult.loading) {
    return (
      <View style={styles.centeredView}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (flightResult.error) {
    return (
      <View style={styles.centeredView}>
        <Text>{flightResult.error}</Text>
      </View>
    );
  }
  if (flightResult.list.data.departure.data.length === 0) {
    return (
      <View style={[styles.centeredView]}>
        <Text style={{fontSize: 16, fontWeight: '600'}}>
          Sorry, Flights Not Found.
        </Text>
        <Text style={{textAlign: 'center', width: SCREEN_WIDTH * 0.8}}>
          We could not find flights for this search. Please go back to make a
          different selection
        </Text>

        <Button onPress={() => goBack()} title="Go Back" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flightContainer}>
        <FlightList
          title="Onward"
          date={departDate.dateString}
          flights={flightResult.list.data.departure.data}
          flightData={flightResult.list.data}
          selectedIndex={selected.onWard}
          onSelect={index => setSelected({...selected, onWard: index})}
        />
        <FlightList
          title="Return"
          date={returnDate.dateString}
          flights={flightResult.list.data.return.data}
          flightData={flightResult.list.data}
          selectedIndex={selected.return}
          onSelect={index => setSelected({...selected, return: index})}
        />
      </View>
      <Footer selected={selected} flightResult={flightResult} />
    </SafeAreaView>
  );
};

const FlightList = ({
  title,
  date,
  flights,
  flightData,
  selectedIndex,
  onSelect,
}: {
  title: string;
  date: string;
  flights: any;
  flightData: any;
  selectedIndex: number;
  onSelect: (index: number) => void;
}) => (
  <View style={styles.flightListContainer}>
    <View style={styles.headerRow}>
      <Text style={styles.headerText}>{title}</Text>
      <Text style={styles.dateText}>{date}</Text>
    </View>
    <FlatList
      data={flights}
      showsVerticalScrollIndicator={false}
      keyExtractor={(_, i) => i.toString()}
      renderItem={({index, item}) => {
        return (
          <TwoWayFlightCard
            selected={index === selectedIndex}
            airlineLogo={`https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/${item.validatingAirlineCodes[0]}.png?v=19`}
            // airlineName={item.validatingAirlineCodes[0]}
            airlineName={
              flightData.departure.dictionaries?.carriers[
                item
                  .validatingAirlineCodes[0] as keyof typeof flightData.departure.dictionaries.carriers
              ]
            }
            departureTime={item.itineraries[0].segments[0].departure.at
              .split('T')[1]
              .slice(0, 5)}
            origin={item.itineraries[0].segments[0].departure.iataCode}
            duration={convertDuration(item.itineraries[0].duration)}
            stops={`${
              calculateLayoverAndStopsForItineraries(item.itineraries)[0].stops
            } stop(s)`}
            layover={addDurations(
              calculateLayoverAndStopsForItineraries(item.itineraries)[0]
                .layovers,
            )}
            arrivalTime={item.itineraries[item.itineraries.length - 1].segments[
              item.itineraries[item.itineraries.length - 1].segments.length - 1
            ].arrival.at
              .split('T')[1]
              .slice(0, 5)}
            destination={
              item.itineraries[item.itineraries.length - 1].segments[
                item.itineraries[item.itineraries.length - 1].segments.length -
                  1
              ].arrival.iataCode
            }
            price={item.price.grandTotal}
            refundable=""
            onPress={() => onSelect(index)}
          />
        );
      }}
      ListEmptyComponent={<Text>No flights available</Text>}
    />
  </View>
);

const Footer = ({
  selected,
  flightResult,
}: {
  selected: {
    onWard: number;
    return: number;
  };
  flightResult: any;
}) => {
  const totalPrice =
    Number(
      flightResult.list.data.departure.data[selected.onWard].price.grandTotal,
    ) +
    Number(
      flightResult.list.data.return.data[selected.return].price.grandTotal,
    );

  return (
    <View style={styles.footer}>
      <Text style={styles.totalPrice}>₹ {totalPrice ?? 0}</Text>
      <Button onPress={() => true} title="Continue" />
    </View>
  );
};

export default ToWayDomasticScreen;
