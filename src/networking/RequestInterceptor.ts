import {AxiosInstance} from 'axios';
import * as Keychain from 'react-native-keychain';

export const attachRequestInterceptor = (client: AxiosInstance) => {
  client.interceptors.request.use(
    async config => {
      // Example: Attach Authorization token
      const token = await getToken(); // Replace with your token logic
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    error => {
      // Handle request errors
      console.error('Request Error:', error);
      return Promise.reject(error);
    },
  );
};

// Mock function to simulate token fetching
const getToken = async () => {
  const storedCredentials = await Keychain.getGenericPassword();
  console.log('storedCredentials', storedCredentials);
  if (storedCredentials) {
    const credentials = JSON.parse(storedCredentials.password);
    console.log(
      credentials.type,
      credentials.accessToken,
      credentials.refreshToken,
    );
    return credentials.accessToken; // Replace with actual token fetching logic
  }
  return;
};
