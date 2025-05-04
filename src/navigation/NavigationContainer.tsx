import React, {useEffect} from 'react';
import {NavigationContainer, Theme} from '@react-navigation/native';
import linkingConfig from './Linking'; // Import deep linking configuration
import {navigationRef} from './NavigationService'; // Import the navigation ref
import Route from './Route'; // Import your routes
import {flykroTheme} from '../utils';
import {
  getNotificationService,
  getToken,
  requestUserPermission,
} from '../utils/pushNotification';
import {Platform, Text} from 'react-native';

const AppNavigationContainer = () => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      (async () => {
        await requestUserPermission();
        await getToken();
        await getNotificationService();
      })();
    }
  }, []);

  return (
    <NavigationContainer
      linking={linkingConfig as any} // Type assertion to bypass type error
      ref={navigationRef}
      theme={flykroTheme as Theme}
      fallback={<Text>Loading...</Text>}
      onStateChange={state => {
        // console.log('New navigation state:', state);
      }}
      onReady={() => {
        // console.log('Navigation container is ready');
      }}>
      <Route />
    </NavigationContainer>
  );
};

export default AppNavigationContainer;
