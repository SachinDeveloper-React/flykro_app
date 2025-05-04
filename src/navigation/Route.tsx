import React from 'react';

import {
  CameraScreen,
  EditUserScreen,
  FlightBookingScreen,
  FlightCalender,
  FlightEngineScreen,
  FlightResultScreen,
  FlightTravellerScreen,
  LoginScreen,
  SearchField,
  SettingScreen,
  ToWayDomasticScreen,
  ToWayInternationalScreen,
} from '../routes';
import {FlykroTabs} from './Tabs';
import {RootStackParamList} from './types';
import {Alert, Text, View} from 'react-native';
import {getDateByForHeader, theme} from '../utils';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useAuth} from '../hooks';
const Stack = createNativeStackNavigator<RootStackParamList>();

const Route = () => {
  const {isAuthenticated} = useAuth();
  return (
    <Stack.Navigator initialRouteName="Root">
      <Stack.Screen
        name="Root"
        options={() => ({
          headerShown: false,
        })}
        component={FlykroTabs}
      />
      <Stack.Screen
        name="FlightEngineScreen"
        options={() => ({
          headerTitle: 'Flight Search',
          headerTitleAlign: 'left',
          headerBackButtonDisplayMode: 'minimal',
          headerShadowVisible: false,
        })}
        component={FlightEngineScreen}
      />
      <Stack.Screen
        name="SearchField"
        options={() => ({
          headerTitle: 'From',
          headerTitleAlign: 'left',
          headerBackButtonDisplayMode: 'minimal',
          // headerShadowVisible: false,
        })}
        component={SearchField}
      />
      <Stack.Screen
        name="FlightCalender"
        options={() => ({
          headerTitle: 'Select Trip Date',
          headerTitleAlign: 'left',
          headerBackButtonDisplayMode: 'minimal',
          headerShadowVisible: false,
        })}
        component={FlightCalender}
      />
      <Stack.Screen
        name="FlightTravellerScreen"
        options={() => ({
          headerTitle: 'Select Traveller',
          headerTitleAlign: 'left',
          headerBackButtonDisplayMode: 'minimal',
        })}
        component={FlightTravellerScreen}
      />
      <Stack.Screen
        name="FlightResultScreen"
        options={({route}) => ({
          headerTitle: () => {
            const departureDate = getDateByForHeader(
              route.params.searchOption.departureDate,
            );
            const resultDate = getDateByForHeader(
              route.params.searchOption.returnDate,
            );
            return (
              <View style={{flex: 1, backgroundColor: 'transparent'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={{fontSize: 12, fontWeight: '700'}}>
                    {route.params.searchOption.from.address.cityName}
                  </Text>
                  <Text style={{marginHorizontal: 3}}>-</Text>
                  <Text style={{fontSize: 12, fontWeight: '700'}}>
                    {route.params.searchOption.to.address.cityName}
                  </Text>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={{fontSize: 8, fontWeight: '400'}}>
                    {departureDate}
                  </Text>
                  {route.params.searchOption.tripType === 'roundTrip' && (
                    <>
                      <Text
                        style={{
                          marginHorizontal: 3,
                          fontSize: 10,
                          fontWeight: '400',
                        }}>
                        -
                      </Text>
                      <Text style={{fontSize: 8, fontWeight: '400'}}>
                        {resultDate}
                      </Text>
                    </>
                  )}
                  <Text
                    style={{
                      marginHorizontal: 3,
                      fontSize: 10,
                      fontWeight: '400',
                    }}>
                    |
                  </Text>
                  <Text style={{fontSize: 8, fontWeight: '400'}}>
                    {route.params.searchOption.traveller.adult +
                      route.params.searchOption.traveller.child +
                      route.params.searchOption.traveller.infant}{' '}
                    Travellor
                  </Text>
                  <Text
                    style={{
                      marginHorizontal: 3,
                      fontSize: 10,
                      fontWeight: '400',
                    }}>
                    |
                  </Text>
                  <Text style={{fontSize: 8, fontWeight: '400'}}>
                    {route.params.searchOption.traveller.class}
                  </Text>
                </View>
              </View>
            );
          },
          headerRight: () => {
            return (
              <AntDesign
                name="edit"
                size={20}
                color={theme.colors.primary}
                onPress={() => Alert.alert('Modify Engine Search')}
              />
            );
          },
          headerTitleAlign: 'left',
          headerBackButtonDisplayMode: 'minimal',
        })}
        component={FlightResultScreen}
      />

      <Stack.Screen
        name="ToWayDomasticScreen"
        component={ToWayDomasticScreen}
        options={({route}) => ({
          headerTitle: () => {
            const departureDate = getDateByForHeader(
              route.params.searchOption.departureDate,
            );
            const resultDate = getDateByForHeader(
              route.params.searchOption.returnDate,
            );
            return (
              <View style={{flex: 1, backgroundColor: 'transparent'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={{fontSize: 12, fontWeight: '700'}}>
                    {route.params.searchOption.from.address.cityName}
                  </Text>
                  <Text style={{marginHorizontal: 3}}>-</Text>
                  <Text style={{fontSize: 12, fontWeight: '700'}}>
                    {route.params.searchOption.to.address.cityName}
                  </Text>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={{fontSize: 8, fontWeight: '400'}}>
                    {departureDate}
                  </Text>
                  {route.params.searchOption.tripType === 'roundTrip' && (
                    <>
                      <Text
                        style={{
                          marginHorizontal: 3,
                          fontSize: 10,
                          fontWeight: '400',
                        }}>
                        -
                      </Text>
                      <Text style={{fontSize: 8, fontWeight: '400'}}>
                        {resultDate}
                      </Text>
                    </>
                  )}
                  <Text
                    style={{
                      marginHorizontal: 3,
                      fontSize: 10,
                      fontWeight: '400',
                    }}>
                    |
                  </Text>
                  <Text style={{fontSize: 8, fontWeight: '400'}}>
                    {route.params.searchOption.traveller.adult +
                      route.params.searchOption.traveller.child +
                      route.params.searchOption.traveller.infant}{' '}
                    Travellor
                  </Text>
                  <Text
                    style={{
                      marginHorizontal: 3,
                      fontSize: 10,
                      fontWeight: '400',
                    }}>
                    |
                  </Text>
                  <Text style={{fontSize: 8, fontWeight: '400'}}>
                    {route.params.searchOption.traveller.class}
                  </Text>
                </View>
              </View>
            );
          },
          headerRight: () => {
            return (
              <AntDesign
                name="edit"
                size={20}
                color={theme.colors.primary}
                onPress={() => Alert.alert('Modify Engine Search')}
              />
            );
          },
          headerTitleAlign: 'left',
          headerBackButtonDisplayMode: 'minimal',
        })}
      />
      <Stack.Screen
        name="ToWayInternationalScreen"
        component={ToWayInternationalScreen}
        options={({route}) => ({
          headerTitle: () => {
            const departureDate = getDateByForHeader(
              route.params.searchOption.departureDate,
            );
            const resultDate = getDateByForHeader(
              route.params.searchOption.returnDate,
            );
            return (
              <View style={{flex: 1, backgroundColor: 'transparent'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={{fontSize: 12, fontWeight: '700'}}>
                    {route.params.searchOption.from.address.cityName}
                  </Text>
                  <Text style={{marginHorizontal: 3}}>-</Text>
                  <Text style={{fontSize: 12, fontWeight: '700'}}>
                    {route.params.searchOption.to.address.cityName}
                  </Text>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={{fontSize: 8, fontWeight: '400'}}>
                    {departureDate}
                  </Text>
                  {route.params.searchOption.tripType === 'roundTrip' && (
                    <>
                      <Text
                        style={{
                          marginHorizontal: 3,
                          fontSize: 10,
                          fontWeight: '400',
                        }}>
                        -
                      </Text>
                      <Text style={{fontSize: 8, fontWeight: '400'}}>
                        {resultDate}
                      </Text>
                    </>
                  )}
                  <Text
                    style={{
                      marginHorizontal: 3,
                      fontSize: 10,
                      fontWeight: '400',
                    }}>
                    |
                  </Text>
                  <Text style={{fontSize: 8, fontWeight: '400'}}>
                    {route.params.searchOption.traveller.adult +
                      route.params.searchOption.traveller.child +
                      route.params.searchOption.traveller.infant}{' '}
                    Travellor
                  </Text>
                  <Text
                    style={{
                      marginHorizontal: 3,
                      fontSize: 10,
                      fontWeight: '400',
                    }}>
                    |
                  </Text>
                  <Text style={{fontSize: 8, fontWeight: '400'}}>
                    {route.params.searchOption.traveller.class}
                  </Text>
                </View>
              </View>
            );
          },
          headerRight: () => {
            return (
              <AntDesign
                name="edit"
                size={20}
                color={theme.colors.primary}
                onPress={() => Alert.alert('Modify Engine Search')}
              />
            );
          },
          headerTitleAlign: 'left',
          headerBackButtonDisplayMode: 'minimal',
        })}
      />

      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        listeners={({navigation}) => ({
          focus: () => {
            if (isAuthenticated) {
              navigation.goBack();
            }
          },
        })}
      />
      <Stack.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={() => ({
          headerTitle: 'Settings',
          headerBackButtonDisplayMode: 'minimal',
          headerTitleAlign: 'center',
        })}
      />
      <Stack.Screen
        name="EditUserScreen"
        component={EditUserScreen}
        options={() => ({
          headerTitle: 'Edit Profile',
          headerBackButtonDisplayMode: 'minimal',
          headerTitleAlign: 'center',
        })}
      />
      <Stack.Screen
        name="CameraScreen"
        component={CameraScreen}
        options={() => ({
          headerTitle: 'Camera',
          headerBackButtonDisplayMode: 'minimal',
          headerTitleAlign: 'center',
          headerShown: false,
        })}
      />

      <Stack.Screen
        name="FlightBookingScreen"
        component={FlightBookingScreen}
      />
    </Stack.Navigator>
  );
};

export default Route;
