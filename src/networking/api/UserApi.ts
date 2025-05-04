import ApiClient from '../ApiClient';
import {Urls} from '../Urls';

export const UserApi = {
  getCurrentUser: async () => {
    try {
      const response = await ApiClient.get(Urls.USERS);
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  },
  updateCurrentUser: async (body: {
    phoneNumber?: string;
    name?: string;
    email?: string;
    address?: string;
    gender?: string;
    maritalStatus?: string;
    pincode?: string;
    state?: string;
  }) => {
    try {
      const response = await ApiClient.patch(Urls.UDDATE_USERS_DETAILS, body);
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  },
};
