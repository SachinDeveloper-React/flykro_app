import {Alert, Linking, Platform} from 'react-native';
import {navigate} from '../../../navigation/NavigationService';

export const updateProfilePhoto = async (
  hasPermission: boolean,
  requestPermission: any,
) => {
  if (!hasPermission) {
    const permissionResult = await requestPermission();
    if (permissionResult) {
      navigate('CameraScreen');
    } else {
      showEnableNotificationsAlert();
    }
  } else {
    navigate('CameraScreen');
  }
};

const showEnableNotificationsAlert = () => {
  Alert.alert(
    'Enable Camera',
    'You have previously denied camera. Please enable them in your device settings.',
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

export const OPTIONS: {
  gender: {
    id: number;
    type: string;
    title: string;
    value: string;
  }[];
  maritalStatus: {
    id: number;
    type: string;
    title: string;
    value: string;
  }[];
} = {
  gender: [
    {id: 1, type: 'Header', title: 'Select Gender', value: ''},
    {id: 2, type: 'list', title: 'Male', value: 'Male'},
    {id: 3, type: 'list', title: 'Female', value: 'Female'},
    {id: 4, type: 'list', title: 'Other', value: 'Other'},
  ],

  maritalStatus: [
    {id: 1, type: 'Header', title: 'Select Marital Status', value: ''},
    {id: 2, type: 'list', title: 'Single', value: 'Single'},
    {id: 3, type: 'list', title: 'Married', value: 'Married'},
    {id: 4, type: 'list', title: 'Divorced', value: 'Divorced'},
    {id: 5, type: 'list', title: 'Widowed', value: 'Widowed'},
  ],
};
