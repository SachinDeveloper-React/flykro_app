import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Fragment, useEffect, useRef, useState} from 'react';
import {useFlightSearch} from '../../../hooks';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {theme} from '../../../utils';
import {goBack} from '../../../navigation/NavigationService';
import {AirportType} from '../../../types';
import {initialAirportSearch, onChangeText, onPressSuggestion} from './helper';
import styles from './styles';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../../navigation/types';

type Props = {
  route: RouteProp<RootStackParamList, 'SearchField'>;
};

const SearchField = (props: Props) => {
  const {route} = props;
  const [type, setType] = useState<'from' | 'to'>(route.params.type);
  const {flightSearch, setFlightSearch} = useFlightSearch();
  const [airport, setAirports] = useState<{
    airportsList: AirportType[];
    airportsLoading: boolean;
    airportsError: string | null;
  }>({
    airportsList: [],
    airportsLoading: false,
    airportsError: '',
  });

  const debounceTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    (async () => {
      initialAirportSearch(type, flightSearch, airport, setAirports);
    })();
  }, [type]);

  return (
    <View style={styles.container}>
      <View style={styles.tabs_container}>
        <TouchableOpacity onPress={() => setType('from')} activeOpacity={0.8}>
          <Text
            style={[
              styles.tab_text,
              {
                backgroundColor:
                  type === 'from' ? theme.colors.primary : 'transparent',
                borderColor:
                  type === 'from' ? theme.colors.primary : theme.colors.border,
                color: type === 'from' ? '#fff' : '#000',
              },
            ]}>
            From
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setType('to')} activeOpacity={0.8}>
          <Text
            style={[
              styles.tab_text,
              {
                backgroundColor:
                  type === 'to' ? theme.colors.primary : 'transparent',
                borderColor:
                  type === 'to' ? theme.colors.primary : theme.colors.border,
                color: type === 'to' ? '#fff' : '#000',
              },
            ]}>
            To
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.search_field}>
        <MaterialCommunityIcons
          style={styles.search_field_icon}
          name={type === 'from' ? 'airplane-takeoff' : 'airplane-landing'}
          size={20}
          color="#000"
        />
        <TextInput
          placeholder="Search"
          defaultValue={
            type === 'from'
              ? flightSearch.from.iataCode
              : flightSearch.to.iataCode
          }
          style={styles.flex}
          onChangeText={text =>
            onChangeText(text, debounceTimeout, airport, setAirports)
          }
        />
      </View>
      <ScrollView
        style={styles.flex}
        automaticallyAdjustsScrollIndicatorInsets={true}>
        <Text>
          Suggestions{' '}
          <Text style={{fontWeight: 'bold'}}>
            ({airport.airportsList.length})
          </Text>
        </Text>
        {airport.airportsList.map((_, index) => (
          <Fragment key={index}>
            <TouchableOpacity
              onPress={() =>
                onPressSuggestion(
                  type,
                  setFlightSearch,
                  flightSearch,
                  goBack,
                  _,
                )
              }
              style={{
                marginBottom: 10,
                marginTop: index === 0 ? 10 : 0,
              }}>
              <View style={styles.search_field_suggestion}>
                <MaterialCommunityIcons
                  style={styles.search_field_suggestion_icon}
                  name="airplane-takeoff"
                  size={20}
                  color="#000"
                />

                <View>
                  <Text style={styles.search_field_suggestion_text}>
                    {_.iataCode} -{' '}
                    <Text style={styles.search_field_suggestion_normal}>
                      {_.name}
                    </Text>
                  </Text>
                  <Text
                    style={[
                      styles.search_field_suggestion_normal,
                      {fontSize: 10},
                    ]}>
                    {_.address.countryName}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </Fragment>
        ))}
      </ScrollView>
    </View>
  );
};

export default SearchField;
