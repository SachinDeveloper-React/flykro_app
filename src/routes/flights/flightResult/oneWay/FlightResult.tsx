import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  View,
  TouchableOpacity,
  Modal,
  Alert,
  Pressable,
  ScrollView,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {RouteProp} from '@react-navigation/native';
import {useFlightSearch} from '../../../../hooks';
import {Button, TravelerPricing} from '../../../../components';
import {FlightCard, FlightDetail} from './components';
import {SCREEN_HEIGHT, SCREEN_WIDTH, theme} from '../../../../utils';
import {
  addDurations,
  calculateLayoverAndStopsForItineraries,
  convertDuration,
  storeInstance,
} from './helper';
import {FlightOffersResponse} from './types';
import {RootStackParamList} from '../../../../navigation/types';
import {flightSearchWithInstance} from '../helper';

type Props = {
  route: RouteProp<RootStackParamList, 'FlightResultScreen'>;
};

const FlightResult = ({route}: Props) => {
  const insets = useSafeAreaInsets();
  const {flightSearch} = useFlightSearch();

  const [flightResult, setFlightResult] = useState<{
    list: FlightOffersResponse | any;
    loading: boolean;
    error: string;
  }>({
    list: {},
    loading: true,
    error: '',
  });
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState({onWard: 0});
  const [modalVisible, setModalVisible] = useState(false);
  const [expanded, setExpanded] = useState({active: false, id: 0});

  useEffect(() => {
    (async () => {
      await flightSearchWithInstance({
        setState: setFlightResult as any,
        state: flightResult,
        searchRequest: route.params.searchOption,
      });
    })();
  }, []);

  if (flightResult.error)
    return (
      <View>
        <Text>{flightResult.error}</Text>
      </View>
    );
  if (flightResult.loading || loading)
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );

  const handleSelectFlight = (index: number) => {
    setSelected({...selected, onWard: index});
    setModalVisible(!modalVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={flightResult.list.data.departure.data}
        keyExtractor={({id}) => id.toString()}
        renderItem={({item, index}) => {
          const origin = item.itineraries[0].segments[0].departure.iataCode;

          const destination =
            item.itineraries[item.itineraries.length - 1].segments[
              item.itineraries[item.itineraries.length - 1].segments.length - 1
            ].arrival.iataCode;

          const departureTime = item.itineraries[0].segments[0].departure.at
            .split('T')[1]
            .slice(0, 5);

          const arrivalTime = item.itineraries[
            item.itineraries.length - 1
          ].segments[
            item.itineraries[item.itineraries.length - 1].segments.length - 1
          ].arrival.at
            .split('T')[1]
            .slice(0, 5);

          const duration = convertDuration(item.itineraries[0].duration);
          const stops_lay = calculateLayoverAndStopsForItineraries(
            item.itineraries,
          );
          const layoverDuration = addDurations(stops_lay[0].layovers);
          return (
            <FlightCard
              selected={index === selected.onWard}
              airlineLogo={`https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/${item.validatingAirlineCodes[0]}.png?v=19`}
              airlineName={
                flightResult?.list?.data?.flightOffers?.dictionaries?.carriers[
                  item
                    .validatingAirlineCodes[0] as keyof typeof flightResult.list.data.departure.dictionaries.carriers
                ]
              }
              departureTime={departureTime}
              origin={origin}
              duration={duration}
              stops={`${stops_lay[0].stops} stop(s)`}
              layover={
                [null, undefined, '', 'null', 'undefined'].includes(
                  stops_lay[0].layovers[0],
                )
                  ? 'No layovers'
                  : `${layoverDuration} layovers`
              }
              arrivalTime={arrivalTime}
              destination={destination}
              price={item?.price?.grandTotal || ''}
              refundable=""
              // onPress={() => {

              // storeInstance(
              //   item,
              //   flightResult.list.data.key,
              //   flightResult.list.data.departure.dictionaries,
              //   flightSearch,
              //   setLoading,
              // );
              // }}
              onPress={() => handleSelectFlight(index)}
            />
          );
        }}
      />

      <FlightDetailModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        flightResult={flightResult}
        selected={selected}
        expanded={expanded}
        setExpanded={setExpanded}
        insets={insets}
      />
    </SafeAreaView>
  );
};

const FlightDetailModal = ({
  visible,
  onClose,
  flightResult,
  selected,
  expanded,
  setExpanded,
  insets,
}: {
  visible: boolean;
  onClose: () => void;
  flightResult: any;
  selected: {
    onWard: number;
  };
  expanded: {active: boolean; id: number};
  setExpanded: Dispatch<SetStateAction<{active: boolean; id: number}>>;
  insets: {
    bottom: number;
    top: number;
  };
}) => (
  <Modal
    animationType="slide"
    transparent
    visible={visible}
    onRequestClose={onClose}>
    <Pressable style={styles.overlay} onPress={onClose} />
    <View style={styles.modalView}>
      <Pressable onPress={onClose} style={styles.barStyle} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
          data={
            flightResult?.list?.data?.departure?.data[selected.onWard]
              ?.itineraries ?? []
          }
          keyExtractor={item => item.id || Math.random().toString()}
          renderItem={({item, index}) => {
            const i = index;
            const segment = item.segments;
            return (
              <View style={styles.flightContainer}>
                <FlatList
                  data={item.segments ?? []}
                  scrollEnabled={false}
                  keyExtractor={seg => seg.id || Math.random().toString()}
                  showsVerticalScrollIndicator={false}
                  renderItem={({item}) => (
                    <View style={{flex: 1}}>
                      <FlightDetail
                        airlineLogo={`https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/${item.carrierCode}.png?v=19`}
                        airlineName={
                          flightResult?.list?.data?.departure?.dictionaries
                            ?.carriers?.[item.carrierCode] ?? 'Unknown Airline'
                        }
                        departureTime={item.departure.at
                          .split('T')[1]
                          .slice(0, 5)}
                        origin={item.departure.iataCode}
                        duration={convertDuration(item.duration)}
                        layover={
                          segment.length !== index + 1
                            ? addDurations(
                                calculateLayoverAndStopsForItineraries(
                                  flightResult?.list?.data?.departure?.data[
                                    selected.onWard
                                  ].itineraries,
                                )[i].layovers,
                              )
                            : ''
                        }
                        arrivalTime={item.arrival.at.split('T')[1].slice(0, 5)}
                        destination={item.arrival.iataCode}
                        origin_terminal={item.departure.terminal}
                        destination_terminal={item.arrival.terminal}
                        aircraft_Code={item?.aircraft.code}
                        number={item?.number}
                      />
                      <TouchableOpacity
                        onPress={() =>
                          setExpanded({active: !expanded.active, id: item.id})
                        }
                        style={styles.seeMore}>
                        <Text style={styles.seeMoreText}>See more details</Text>
                        <MaterialIcons
                          name={
                            expanded.active && expanded.id === item.id
                              ? 'arrow-drop-down'
                              : 'arrow-drop-up'
                          }
                          color="blue"
                          size={14}
                        />
                      </TouchableOpacity>
                      {expanded.active && expanded.id === item.id && (
                        <TravelerPricing
                          travelerPricings={
                            flightResult?.list?.data?.departure?.data[
                              selected.onWard
                            ]?.travelerPricings
                          }
                          index={item.id}
                        />
                      )}
                    </View>
                  )}
                />
              </View>
            );
          }}
        />
      </ScrollView>
      <View style={{paddingBottom: insets.bottom, paddingHorizontal: 10}}>
        <Button title="Continue" onPress={() => {}} />
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  centered: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  overlay: {flex: 1, backgroundColor: 'rgba(0,0,0,.2)'},
  modalView: {
    height: SCREEN_HEIGHT * 0.7,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  barStyle: {
    height: 4,
    width: SCREEN_WIDTH * 0.1,
    backgroundColor: 'grey',
    alignSelf: 'center',
    marginVertical: 10,
  },
  seeMore: {flexDirection: 'row', alignItems: 'center'},
  seeMoreText: {color: 'blue', fontSize: 10},
  flightContainer: {
    gap: 10,
    borderRadius: 8,
    padding: 10,
  },
});

export default FlightResult;
