import {
  Alert,
  FlatList,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {FlightOffersResponse} from '../../oneWay/types';
import {domTwoWayInter} from '../../../../../utils/demoTwoWayInter';
import {TwoWayFlightCardInternational} from './components';
import {
  addDurations,
  calculateLayoverAndStopsForItineraries,
  convertDuration,
} from '../../oneWay/helper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Button, TravelerPricing} from '../../../../../components';
import {styles} from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {theme} from '../../../../../utils';

const ToWayInternationalScreen = () => {
  const insets = useSafeAreaInsets();
  const [flightResult, setFlightResult] = useState<{
    list: FlightOffersResponse | any;
    loading: boolean;
    error: string;
  }>({
    list: domTwoWayInter,
    loading: true,
    error: '',
  });
  const [selected, setSelected] = useState({onWard: 0});
  const [modalVisible, setModalVisible] = useState(false);
  const [expanded, setExpanded] = useState({
    active: false,
    id: 0,
  });

  const handleSelectFlight = (index: number) => {
    setSelected({...selected, onWard: index});
    setModalVisible(!modalVisible);
  };

  const renderFlightItem = ({item, index}: {item: any; index: number}) => {
    const grandTotal = item?.price?.grandTotal;
    const selectedFlight = selected.onWard === index;

    return (
      <View
        style={[
          styles.flightContainer,
          {
            backgroundColor: selectedFlight
              ? theme.colors.lightprimary
              : theme.colors.card,
          },
        ]}>
        <FlatList
          style={{
            flex: 1,
          }}
          data={item.itineraries ?? []}
          keyExtractor={itinerary => itinerary.id ?? Math.random().toString()}
          renderItem={({item}) => renderItinerary(item, index)}
        />
        <View style={styles.priceContainer}>
          <Text style={[styles.priceText, {color: theme.colors.primary}]}>
            Total Price
          </Text>
          <Text style={styles.priceText}>₹{grandTotal}</Text>
        </View>
      </View>
    );
  };

  const renderItinerary = (itinerary: any, index: number) => {
    const airlineCode = itinerary.segments[0].carrierCode;
    return (
      <TwoWayFlightCardInternational
        selected={index === selected.onWard}
        airlineLogo={`https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/${airlineCode}.png?v=19`}
        airlineName={
          flightResult?.list?.data?.departure?.dictionaries?.carriers?.[
            airlineCode
          ] ?? 'Unknown Airline'
        }
        departureTime={itinerary.segments[0].departure.at
          .split('T')[1]
          .slice(0, 5)}
        origin={itinerary.segments[0].departure.iataCode}
        duration={convertDuration(itinerary.duration)}
        stops={`${
          calculateLayoverAndStopsForItineraries([itinerary])[0].stops
        } stop(s)`}
        layover={addDurations(
          calculateLayoverAndStopsForItineraries([itinerary])[0].layovers,
        )}
        arrivalTime={itinerary.segments[
          itinerary.segments.length - 1
        ].arrival.at
          .split('T')[1]
          .slice(0, 5)}
        destination={
          itinerary.segments[itinerary.segments.length - 1].arrival.iataCode
        }
        refundable={''}
        onPress={() => handleSelectFlight(index)}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={flightResult?.list?.data?.departure?.data ?? []}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id ?? Math.random().toString()}
        initialNumToRender={10} // Renders first 10 items immediately
        maxToRenderPerBatch={5} // Limits rendering to 5 per batch
        windowSize={5} // Keeps 5 screens worth of content in memory
        removeClippedSubviews={true} // Removes off-screen items
        getItemLayout={(data, index) => ({
          length: 150, // Approximate item height
          offset: 150 * index,
          index,
        })}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No flights available</Text>
        }
        renderItem={renderFlightItem}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <TouchableOpacity
          style={{flex: 1, backgroundColor: 'rgba(0,0,0,.2)'}}
          activeOpacity={1}
          onPress={() => setModalVisible(!modalVisible)}
        />
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              onPress={() => setModalVisible(!modalVisible)}
              style={{marginVertical: 10}}>
              <View style={styles.barStyle} />
            </Pressable>
            <ScrollView showsVerticalScrollIndicator={false}>
              <FlatList
                scrollEnabled={false}
                data={
                  flightResult?.list?.data?.departure?.data[selected.onWard]
                    .itineraries ?? []
                }
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id ?? Math.random().toString()}
                initialNumToRender={10}
                maxToRenderPerBatch={5}
                windowSize={5}
                removeClippedSubviews={true}
                getItemLayout={(data, index) => ({
                  length: 150,
                  offset: 150 * index,
                  index,
                })}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                ListEmptyComponent={
                  <Text style={styles.emptyText}>No flights available</Text>
                }
                renderItem={({item, index}) => {
                  const i = index;
                  const segment = item.segments;
                  return (
                    <View style={[styles.flightContainer]}>
                      {/* Nested FlatList for itineraries */}
                      <View style={{flex: 1}}>
                        <FlatList
                          data={item.segments ?? []}
                          keyExtractor={item =>
                            item.id ?? Math.random().toString()
                          }
                          showsVerticalScrollIndicator={false}
                          initialNumToRender={3}
                          maxToRenderPerBatch={2}
                          windowSize={3}
                          removeClippedSubviews={true}
                          renderItem={({item, index}) => {
                            return (
                              <>
                                <TwoWayFlightCardInternational
                                  selected={index === selected.onWard}
                                  airlineLogo={`https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/${item.carrierCode}.png?v=19`}
                                  airlineName={
                                    flightResult?.list?.data?.departure
                                      ?.dictionaries?.carriers?.[
                                      item.carrierCode
                                    ] ?? 'Unknown Airline'
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
                                            flightResult?.list?.data?.departure
                                              ?.data[selected.onWard]
                                              .itineraries,
                                          )[i].layovers,
                                        )
                                      : ''
                                  }
                                  arrivalTime={item.arrival.at
                                    .split('T')[1]
                                    .slice(0, 5)}
                                  destination={item.arrival.iataCode}
                                  refundable=""
                                />

                                <TouchableOpacity
                                  onPress={() => {
                                    setExpanded({
                                      ...expanded,
                                      active: !expanded.active,
                                      id: item.id,
                                    });
                                  }}
                                  style={styles.seeMore}>
                                  <Text style={styles.seeMoreText}>
                                    See more details
                                  </Text>

                                  <MaterialIcons
                                    name={
                                      expanded.active
                                        ? 'arrow-drop-down'
                                        : 'arrow-drop-up'
                                    }
                                    color={'blue'}
                                    size={14}
                                  />
                                </TouchableOpacity>

                                {expanded.active && expanded.id === item.id && (
                                  <View style={{paddingHorizontal: 10}}>
                                    <TravelerPricing
                                      travelerPricings={
                                        flightResult?.list?.data?.departure
                                          ?.data[selected.onWard]
                                          ?.travelerPricings
                                      }
                                      index={item.id}
                                    />
                                  </View>
                                )}
                              </>
                            );
                          }}
                        />
                      </View>
                    </View>
                  );
                }}
              />
            </ScrollView>
            <View style={{paddingBottom: insets.bottom, paddingHorizontal: 10}}>
              <Button
                title={'Continue'}
                onPress={function (): void {
                  throw new Error('Function not implemented.');
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default ToWayInternationalScreen;
