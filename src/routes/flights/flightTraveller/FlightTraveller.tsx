import React, {useState, useCallback, Fragment} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {SCREEN_WIDTH, theme} from '../../../utils';
import {
  classContext,
  classContext2,
  handleTravellerSelection,
  initialTravellers,
} from './helper';
import {styles} from './styles';
import {useFlightSearch} from '../../../hooks';

const App = () => {
  const {flightSearch, setFlightSearch} = useFlightSearch();

  const [travellers, setTravellers] = useState(
    initialTravellers(flightSearch.traveller),
  );

  const getTotalPassengers = useCallback(() => {
    return (
      flightSearch.traveller.adult +
      flightSearch.traveller.child +
      flightSearch.traveller.infant
    );
  }, [flightSearch]);

  const handleSelect = useCallback(
    (travellerId: number, listId: number) => {
      setTravellers(prevTravellers => {
        return handleTravellerSelection(
          travellerId,
          listId,
          prevTravellers,
          flightSearch.traveller.adult,
          flightSearch.traveller.child,
          flightSearch.traveller.infant,
          classContext2[flightSearch.traveller.class],
          getTotalPassengers,
          ({adult, children, infant, travelclass}) => {
            setFlightSearch({
              ...flightSearch,
              traveller: {
                adult: adult,
                child: children,
                infant: infant,
                class: classContext[travelclass],
              },
            });
          },
        );
      });
    },
    [flightSearch, getTotalPassengers],
  );

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      automaticallyAdjustContentInsets
      style={styles.container}>
      <Text style={styles.total}>Total Passengers: {getTotalPassengers()}</Text>
      <Text>Adults: {flightSearch.traveller.adult}</Text>
      <Text>Children: {flightSearch.traveller.child}</Text>
      <Text>Infants: {flightSearch.traveller.infant}</Text>
      <View style={styles.travellerList}>
        {travellers.map(traveller => (
          <View key={traveller.id} style={styles.group}>
            <Text style={styles.heading}>{traveller.name}</Text>
            <Text style={styles.subHeading}>{traveller.limit}</Text>
            <View style={styles.list}>
              {traveller.list.map(item => (
                <Fragment key={item.id}>
                  <TouchableOpacity
                    onPress={() => handleSelect(traveller.id, item.id)}
                    style={[
                      styles.travellerCounts,
                      {
                        width: traveller.id === 4 ? SCREEN_WIDTH - 40 : 30,
                        alignItems:
                          traveller.id === 4 ? 'flex-start' : 'center',
                        backgroundColor: item.select
                          ? theme.colors.primary
                          : 'transparent',
                      },
                    ]}>
                    <Text
                      style={{
                        fontWeight: item.select ? '700' : '500',
                        fontSize: item.select ? 18 : 14,
                        color: item.select ? theme.colors.background : '#000',
                        paddingLeft: traveller.id === 4 ? 10 : 0,
                      }}>
                      {traveller.id === 4
                        ? classContext[Number(item.number)]
                        : item.number}
                    </Text>
                  </TouchableOpacity>
                </Fragment>
              ))}
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default App;
