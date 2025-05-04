import ApiClient from '../ApiClient';
import {Urls} from '../Urls';

export const AuthApi = {
  login: async (phoneNumber: string) => {
    const response = await ApiClient.get(`${Urls.LOGIN}/${phoneNumber}`);
    return response.data;
  },
  otpVerify: async (phoneNumber: string, otp: string) => {
    const response = await ApiClient.post(`${Urls.OTPVERIFY}`, {
      phoneNumber: phoneNumber,
      otp: otp,
    });
    return response.data;
  },
};
