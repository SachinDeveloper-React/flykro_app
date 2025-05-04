import {
ActivityIndicator,
Alert,
FlatList,
SafeAreaView,
ScrollView,
StyleSheet,
Text,
View,
} from 'react-native';
import React, {
Fragment,
useCallback,
useEffect,
useMemo,
useRef,
useState,
} from 'react';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../../navigation/types';
import {FlightCard, FlightDetail} from './components';
import {
addDurations,
calculateLayoverAndStopsForItineraries,
convertDuration,
flightSearchWithInstance,
} from './helper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FlightOffersResponse} from './types';
import BottomSheet, {
BottomSheetView,
BottomSheetVirtualizedList,
} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

type Props = {
route: RouteProp<RootStackParamList, 'FlightResultScreen'>;
};
const FlightResult = (props: Props) => {
const {route} = props;
const bottomSheetRef = useRef<BottomSheet>(null);
const insets = useSafeAreaInsets();
const [isVisible, setIsVisible] = useState(false);
const [flightResult, setFlightResult] = useState<{
list: FlightOffersResponse | any;
loading: boolean;
error: string;
}>({
list: {},
loading: true,
error: '',
});
const [selectedFlightData, setSelectedFlightData] = useState(
flightResult?.list?.data?.flightOffers.data[0] ?? {},
);

const handleSheetChanges = useCallback((index: number) => {
console.log('handleSheetChanges', index);
}, []);

const data = useMemo(
() =>
Array(50)
.fill(0)
.map((\_, index) => `index-${index}`),
[],
);
const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

const renderItem = useCallback(
({item}) => (
<View style={styles.itemContainer}>
<Text>{item}</Text>
</View>
),
[],
);

useEffect(() => {
(async () => {
await flightSearchWithInstance({
setState: setFlightResult,
state: flightResult,
searchRequest: route.params.searchOption,
});
})();
}, []);

if (flightResult.error) {
return <Text>{flightResult.error}</Text>;
}
if (flightResult.loading) {
return <ActivityIndicator size={'large'} />;
}

return (
// <SafeAreaView style={styles.container}>
<GestureHandlerRootView
style={{
        flex: 1,
        paddingTop: 200,
      }}>
<FlatList
data={flightResult.list.data.flightOffers.data}
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
            <>
              <FlightCard
                airlineLogo={`https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/${item.validatingAirlineCodes[0]}.png?v=19`}
                airlineName={
                  flightResult?.list?.data?.flightOffers?.dictionaries
                    ?.carriers[
                    item
                      .validatingAirlineCodes[0] as keyof typeof flightResult.list.data.flightOffers.dictionaries.carriers
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
                refundable="Partially Refundable"
                onLongPress={() => {
                  setSelectedFlightData(item);
                  setIsVisible(true);
                }}
              />
            </>
          );
        }}
      />

      {/* <BottomSheet isVisible={isVisible} onClose={() => setIsVisible(false)}>
        <View>
          <ScrollView
            contentContainerStyle={{
              paddingBottom: insets.bottom + 200, // Ensure enough space at the bottom
            }}
            showsVerticalScrollIndicator={false} // Optional: To hide the scroll bar
            keyboardShouldPersistTaps="handled"
            nestedScrollEnabled={true}>
            {Object.keys(selectedFlightData).length > 0 &&
              selectedFlightData.itineraries[0].segments.map(
                (_: any, i: number) => {
                  const duration = convertDuration(_.duration);
                  const departureTime = _.departure.at
                    .split('T')[1]
                    .slice(0, 5);
                  const arrivalTime = _.arrival.at.split('T')[1].slice(0, 5);

                  const origin = `${
                    flightResult.list.data.airportsDetails[
                      _.departure
                        .iataCode as keyof typeof flightResult.list.data.airportsDetails
                    ].address?.cityName ?? ''
                  } (${
                    flightResult.list.data.airportsDetails[
                      _.departure
                        .iataCode as keyof typeof flightResult.list.data.airportsDetails
                    ].iataCode
                  })`;

                  const destination = `(${
                    flightResult.list.data.airportsDetails[
                      _.arrival
                        .iataCode as keyof typeof flightResult.list.data.airportsDetails
                    ].iataCode
                  }) ${
                    flightResult.list.data.airportsDetails[
                      _.arrival
                        .iataCode as keyof typeof flightResult.list.data.airportsDetails
                    ].address?.cityName ?? ''
                  }`;

                  const stops_lay = calculateLayoverAndStopsForItineraries(
                    selectedFlightData.itineraries,
                  );

                  return (
                    <FlightDetail
                      key={i}
                      number={_.number}
                      airlineLogo={`https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/${_.carrierCode}.png?v=19`}
                      airlineName={`${
                        flightResult.list.data.flightOffers.dictionaries
                          .carriers[
                          _.carrierCode as keyof typeof flightResult.list.data.flightOffers.dictionaries.carriers
                        ]
                      } ${_.carrierCode}`}
                      departureTime={departureTime}
                      origin={origin}
                      duration={duration}
                      layover={
                        stops_lay[0].layovers.length > 0
                          ? stops_lay[0].layovers[i]
                          : ''
                      }
                      arrivalTime={arrivalTime}
                      destination={destination}
                      aircraft_Code={
                        flightResult.list.data.flightOffers.dictionaries
                          .aircraft[
                          _.aircraft
                            .code as keyof typeof flightResult.list.data.flightOffers.dictionaries.aircraft
                        ]
                      }
                      destination_terminal={_.arrival?.terminal ?? ''}
                      origin_terminal={_.departure?.terminal ?? ''}
                    />
                  );
                },
              )}

            <TravelerPricing
              travelerPricings={selectedFlightData.travelerPricings as any}
            />
          </ScrollView>
        </View>
      </BottomSheet> */}

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        enableDynamicSizing={false}
        onChange={handleSheetChanges}>
        <BottomSheetVirtualizedList
          data={data}
          keyExtractor={i => i}
          getItemCount={data => data.length}
          getItem={(data, index) => data[index]}
          renderItem={renderItem}
          contentContainerStyle={styles.contentContainer}
        />
      </BottomSheet>
    </GestureHandlerRootView>
    // </SafeAreaView>

);
};

export default FlightResult;

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
},
contentContainer: {
flex: 1,
padding: 36,
alignItems: 'center',
},
itemContainer: {
padding: 6,
margin: 6,
backgroundColor: '#eee',
},
});
