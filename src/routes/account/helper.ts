import {Alert, Share} from 'react-native';
import {navigate} from '../../navigation/NavigationService';

export const accountServiceList = [
  {
    id: 1,
    title: 'Notifications',
    subtitle: 'View all your notifications',
    disable: true,
    navigate: 'NotificationScreen',
    icon: {
      name: 'bell',
      size: '16',
      color: '#000',
    },
  },
  {
    id: 2,
    title: 'Customer Service',
    subtitle: 'Get help with your bookings and more',
    navigate: 'CustomerServiceScreen',
    disable: true,
    icon: {
      name: 'phone',
      size: '16',
      color: '#000',
    },
  },
  {
    id: 3,
    title: 'Share App',
    subtitle: 'Share the app with your friends',
    navigate: '',
    disable: false,
    icon: {
      name: 'share',
      size: '16',
      color: '#000',
    },
  },
  {
    id: 4,
    title: 'Rate Us',
    subtitle: 'Like the app Rate us on app store',
    navigate: '',
    disable: true,
    icon: {
      name: 'thumbs-up',
      size: '16',
      color: '#000',
    },
  },
  {
    id: 5,
    title: 'Setting',
    subtitle: 'Set notifications, sign out etc.',
    navigate: 'SettingScreen',
    disable: false,
    icon: {
      name: 'gears',
      size: '16',
      color: '#000',
    },
  },
];

export const goToEditAccount = () => {
  navigate('EditUserScreen');
};

export const onShare = async () => {
  try {
    const result = await Share.share({
      message:
        'React Native | A framework for building native apps using React',
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error: any) {
    Alert.alert(error.message);
  }
};

export const goToLogin = () => {
  navigate('LoginScreen');
};
