import {AxiosInstance} from 'axios';
import Toast from 'react-native-root-toast';
import * as Keychain from 'react-native-keychain';

export const attachResponseInterceptor = (client: AxiosInstance) => {
  client.interceptors.response.use(
    response => {
      // Handle successful responses
      return response;
    },
    error => {
      // Handle errors globally
      if (error.response) {
        const {status, data} = error.response;
        console.error('Response Error:', {status, data});

        console.log('data', error.message);

        let toast = Toast.show('Something error', {
          duration: Toast.durations.LONG,
          position: Toast.positions.BOTTOM,
          backgroundColor: 'red',
        });

        // You can manually hide the Toast, or it will automatically disappear after a `duration` ms timeout.
        setTimeout(function hideToast() {
          Toast.hide(toast);
        }, 3000);

        // Example: Redirect to login on 401
        if (status === 401) {
          console.log('Unauthorized - Redirecting to login...');
          deleteKeychainValue();
        }
      }
      return Promise.reject(error);
    },
  );
};

const deleteKeychainValue = async () => {
  try {
    // Reset the stored credentials
    const result = await Keychain.resetGenericPassword();
    if (result) {
      console.log('Keychain value deleted successfully');
    } else {
      console.log('No keychain value to delete');
    }
  } catch (error) {
    console.error('Error deleting keychain value:', error);
  }
};
