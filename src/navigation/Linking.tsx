import messaging from '@react-native-firebase/messaging';
import {Linking} from 'react-native';

const NAVIGATION_IDS = ['root', 'flightEngineScreen'];

function buildDeepLinkFromNotificationData(data: any) {
  const navigationId = data?.navigationId;
  if (!NAVIGATION_IDS.includes(navigationId)) {
    // console.warn('Unverified navigationId', navigationId);
    return null;
  }
  if (navigationId === 'root') {
    return 'myapp://root';
  }
  if (navigationId === 'flightEngineScreen') {
    return 'myapp://flightEngineScreen';
  }
  return null;
}

const linkingConfig = {
  prefixes: ['myapp://'],
  config: {
    initialRouteName: 'Root',
    screens: {
      Root: 'root',
      NotificationScreen: 'flightEngineScreen',
    },
  },
  async getInitialURL() {
    const url = await Linking.getInitialURL();
    if (typeof url === 'string') {
      return url;
    }
    //getInitialNotification: When the application is opened from a quit state.
    const message = await messaging().getInitialNotification();
    const deeplinkURL = buildDeepLinkFromNotificationData(message?.data);
    if (typeof deeplinkURL === 'string') {
      return deeplinkURL;
    }
  },
  subscribe(listener: (url: string) => void) {
    const onReceiveURL = ({url}: {url: string}) => listener(url);

    // Listen to incoming links from deep linking
    const linkingSubscription = Linking.addEventListener('url', onReceiveURL);

    //onNotificationOpenedApp: When the application is running, but in the background.
    const unsubscribe = messaging().onNotificationOpenedApp(remoteMessage => {
      const url = buildDeepLinkFromNotificationData(remoteMessage.data);
      if (typeof url === 'string') {
        listener(url);
      }
    });

    return () => {
      linkingSubscription.remove();
      unsubscribe();
    };
  },
};

export default linkingConfig;
