import axios from 'axios';
import {attachRequestInterceptor} from './RequestInterceptor';
import {attachResponseInterceptor} from './ResponseInterceptor';
import {Platform} from 'react-native';
import {BASE_URL} from './Urls';

// Create Axios instance
const ApiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 60000, // Timeout in milliseconds
  headers: {
    'Content-Type': 'application/json',
  },
});

// Attach interceptors
attachRequestInterceptor(ApiClient);
attachResponseInterceptor(ApiClient);

export default ApiClient;
