import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import {Platform} from 'react-native';
import {PermissionsAndroid} from 'react-native';

export async function requestUserPermission() {
  if (Platform.OS === 'ios') {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  } else {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );
  }
}

export const getToken = async () => {
  try {
    const fcmToken = await AsyncStorage.getItem('fcmToken');
    if (!fcmToken) {
      await messaging().registerDeviceForRemoteMessages();
      const token = await messaging().getToken();
      await AsyncStorage.setItem('fcmToken', token);
    }
    console.log('fcmToken', fcmToken);
    return fcmToken;
  } catch (error) {
    console.log('error', error);
  }
};

export const getNotificationService = async () => {
  // const notification = await messaging().getInitialNotification();
  // console.log('notification', notification);
  // Register foreground handler
  messaging().onMessage(async remoteMessage => {
    console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
  });
};
