import {Alert, Linking, PermissionsAndroid, Platform} from 'react-native';
import messaging from '@react-native-firebase/messaging';
export const checkNotificationPermission = async (
  setNotificationPermission: (enabled: boolean) => void,
) => {
  if (Platform.OS === 'ios') {
    const authStatus = await messaging().hasPermission();
    const isEnabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    setNotificationPermission(isEnabled);
  } else if (Platform.OS === 'android') {
    const isEnabled = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );

    setNotificationPermission(isEnabled);
  }
};

export const requestNotificationPermission = async (
  setNotificationPermission: (enabled: boolean) => void,
) => {
  if (Platform.OS === 'ios') {
    const authStatus = await messaging().hasPermission();

    // Check if permission was already denied or not determined
    if (
      authStatus === messaging.AuthorizationStatus.DENIED ||
      authStatus === messaging.AuthorizationStatus.NOT_DETERMINED
    ) {
      // If denied, direct the user to settings
      if (authStatus === messaging.AuthorizationStatus.DENIED) {
        showEnableNotificationsAlert();
      } else {
        // First-time request for permission
        const permission = await messaging().requestPermission();
        const isEnabled =
          permission === messaging.AuthorizationStatus.AUTHORIZED ||
          permission === messaging.AuthorizationStatus.PROVISIONAL;
        setNotificationPermission(isEnabled);

        if (!isEnabled) {
          console.log('User denied notification permissions.');
        }
      }
    } else {
      console.log('Permission already granted.');
    }
  } else if (Platform.OS === 'android') {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Notification permission granted.');
      setNotificationPermission(true);
    } else {
      console.log('Notification permission denied.');
      showEnableNotificationsAlert();
    }
  }
};

const showEnableNotificationsAlert = () => {
  Alert.alert(
    'Enable Notifications',
    'You have previously denied notifications. Please enable them in your device settings.',
    [
      {text: 'Cancel', style: 'cancel'},
      {text: 'Open Settings', onPress: openAppSettings},
    ],
  );
};

const openAppSettings = () => {
  if (Platform.OS === 'ios') {
    Linking.openURL('app-settings:'); // Opens iOS app settings
  } else {
    Linking.openSettings(); // Opens Android app settings
  }
};
