import React, {createContext, useState, useEffect, ReactNode} from 'react';
import {AuthApi, UserApi} from '../networking';
import Toast from 'react-native-root-toast';
import * as Keychain from 'react-native-keychain';

interface AuthContextType {
  user: {
    _id: string;
    name: string;
    email: string;
    phoneNumber: string;
    avatar: string;
    address: string | null;
    gender: string | null;
    maritalStatus: string | null;
    pincode: string | null;
    state: string | null;
    isProfileCompleted: boolean;
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
    __v: number;
  }; // User information
  login: (phoneNumber: string) =>
    | {
        data: {status: string; to: string};
        message: string;
        statusCode: number;
        success: boolean;
      }
    | any;
  otpVerify: (phoneNumber: string, otp: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
  getCurrentUser: () => void;
}

type Props = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export const AuthProvider = (props: Props) => {
  const {children} = props;
  const [user, setUser] = useState<any>(null); // Store user info
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (phoneNumber: string) => {
    try {
      const response = await AuthApi.login(phoneNumber);
      return response;
    } catch (error) {
      let toast = Toast.show((error as Error)?.message, {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
        backgroundColor: 'red',
      });

      // You can manually hide the Toast, or it will automatically disappear after a `duration` ms timeout.
      setTimeout(function hideToast() {
        Toast.hide(toast);
      }, 3000);
    }
  };

  const otpVerify = async (phoneNumber: string, otp: string) => {
    try {
      const response = await AuthApi.otpVerify(phoneNumber, otp);
      console.log('otpVerify response', response);
      const credentials = {
        type: response?.data?.type,
        accessToken: response?.data?.accessToken,
        refreshToken: response?.data?.refreshToken,
      };

      await Keychain.setGenericPassword(
        `${response?.data?.to}`,
        JSON.stringify(credentials),
      );

      setIsAuthenticated(true);
      setUser(response?.data?.user);
      return response;
    } catch (error) {
      let toast = Toast.show('Please Resend Again OTP', {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
        backgroundColor: 'yellow',
      });

      // You can manually hide the Toast, or it will automatically disappear after a `duration` ms timeout.
      setTimeout(function hideToast() {
        Toast.hide(toast);
      }, 3000);
    }
  };
  const logout = async () => {};

  const getCurrentUser = async () => {
    const currentUser = await UserApi.getCurrentUser();

    if (currentUser.statusCode === 200) {
      setIsAuthenticated(true);
      setUser(currentUser.data);
    }
  };

  useEffect(() => {
    (async () => {
      const storedCredentials = await Keychain.getGenericPassword();
      if (storedCredentials) {
        getCurrentUser();
      }
    })();
  }, []);

  return (
    <AuthContext.Provider
      value={{user, login, logout, otpVerify, isAuthenticated, getCurrentUser}}>
      {children}
    </AuthContext.Provider>
  );
};
