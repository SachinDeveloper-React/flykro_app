import {Dispatch, SetStateAction} from 'react';
import {Alert} from 'react-native';
import {goBack} from '../../../navigation/NavigationService';

export const validatePhoneNumber = async (
  input: string,
  setForm: (arg0: (prev: any) => any) => void,
  setErrors: (arg0: {(prev: any): any; (prev: any): any}) => void,
  login: (phoneNumber: string) => {
    data: {status: string; to: string};
    message: string;
    statusCode: number;
    success: boolean;
  },
  setLoading: Dispatch<SetStateAction<boolean>>,
) => {
  const phoneRegex = /^[+]?[0-9]{10,15}$/;
  if (!phoneRegex.test(input)) {
    setErrors((prev: any) => ({...prev, phone: 'Enter a valid phone number.'}));
  } else {
    try {
      setLoading(true);
      const loginCheck = await login(`+91-${input}`);

      if (loginCheck?.statusCode === 200) {
        setErrors((prev: any) => ({...prev, phone: ''}));
        setForm((prev: any) => ({
          ...prev,
          phoneActive: false,
          otpActive: true,
        }));
      }
      setLoading(false);
    } catch (error) {
      console.log('error', error);
      setLoading(false);
    }
  }
};

export const validateOtp = (
  input: string,
  setForm: (arg0: (prev: any) => any) => void,
  setErrors: (arg0: {(prev: any): any; (prev: any): any}) => void,
  errors: {
    phone: string;
    otp: string;
  },
  form: {
    phone: string;
    phoneActive: boolean;
    otp: string;
    otpActive: boolean;
  },
  otpVerify: (phoneNumber: string, otp: string) => void,
  setLoading: Dispatch<SetStateAction<boolean>>,
) => {
  const otpRegex = /^[0-9]{6}$/;
  if (!otpRegex.test(input)) {
    setErrors((prev: any) => ({...prev, otp: 'OTP must be 6 digits.'}));
  } else {
    setForm((prev: any) => ({...prev, otp: input}));
    setErrors((prev: any) => ({...prev, otp: '', phone: ''}));
    handleOtpSubmit(errors, form, otpVerify, setLoading);
  }
};

export const handlePhoneSubmit = (
  form: {phone: string; phoneActive: boolean; otp: string; otpActive: boolean},
  setForm: Dispatch<
    SetStateAction<{
      phone: string;
      phoneActive: boolean;
      otp: string;
      otpActive: boolean;
    }>
  >,
  setErrors: Dispatch<SetStateAction<{phone: string; otp: string}>>,
  errors: {
    phone: string;
    otp: string;
  },
  login: (phoneNumber: string) => {
    data: {status: string; to: string};
    message: string;
    statusCode: number;
    success: boolean;
  },
  otpVerify: (phoneNumber: string, otp: string) => void,
  setLoading: Dispatch<SetStateAction<boolean>>,
) => {
  if (!form.otpActive) {
    validatePhoneNumber(form.phone, setForm, setErrors, login, setLoading);
  } else {
    validateOtp(
      form.otp,
      setForm,
      setErrors,
      errors,
      form,
      otpVerify,
      setLoading,
    );
  }
};

export const handleOtpSubmit = async (
  errors: {
    phone: string;
    otp: string;
  },
  form: {
    phone: string;
    phoneActive: boolean;
    otp: string;
    otpActive: boolean;
  },
  otpVerify: (phoneNumber: string, otp: string) => void,
  setLoading: Dispatch<SetStateAction<boolean>>,
) => {
  if (!errors.otp && form.otp) {
    try {
      setLoading(true);
      const current_phoneNumber = `+91-${form.phone}`;
      await otpVerify(current_phoneNumber, form.otp);
      goBack();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    setLoading(false);
  } else {
    Alert.alert('Please enter a valid OTP.');
  }
};

export const resendOtp = (
  otpTimer: number,
  setOtpTimer: {(value: SetStateAction<number>): void; (arg0: number): void},
) => {
  if (otpTimer === 0) {
    setOtpTimer(60); // Reset the timer to 60 seconds.
    // Logic to resend OTP can be added here.
    console.log('OTP Resent');
  } else {
    console.log('Please wait for the timer to finish.');
  }
};

export const changeNumber = (
  form: {
    phone: string;
    phoneActive: boolean;
    otp: string;
    otpActive: boolean;
  },
  setForm: {
    (
      value: SetStateAction<{
        phone: string;
        phoneActive: boolean;
        otp: string;
        otpActive: boolean;
      }>,
    ): void;
    (arg0: any): void;
  },
  setOtpTimer: {(value: SetStateAction<number>): void; (arg0: number): void},
) => {
  setForm({...form, otpActive: false, phoneActive: true});
  setOtpTimer(60);
};
