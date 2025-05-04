import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './styles';
import {changeNumber, handlePhoneSubmit, resendOtp} from './helper';
import {useAuth} from '../../../hooks';
import {theme} from '../../../utils';

export default function Login() {
  const {login, otpVerify} = useAuth();
  const [form, setForm] = useState<{
    phone: string;
    phoneActive: boolean;
    otp: string;
    otpActive: boolean;
  }>({
    phone: '',
    phoneActive: true,
    otp: '',
    otpActive: false,
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{
    phone: string;
    otp: string;
  }>({phone: '', otp: ''});
  const [otpTimer, setOtpTimer] = useState(60);

  useEffect(() => {
    let timer: any;

    if (form.otpActive && otpTimer > 0) {
      timer = setInterval(() => {
        setOtpTimer(prev => prev - 1);
      }, 1000);
    }

    // Cleanup timer on unmount or when timer reaches 0.
    return () => clearInterval(timer);
  }, [otpTimer, form.otpActive]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={[
          styles.container,
          {
            padding: 0,
          },
        ]}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.title}>Enter your phone</Text>

              <Text style={styles.subtitle}>
                You will receive a 4 digit code to verify your account
              </Text>
            </View>

            <View style={styles.form}>
              <View style={styles.input}>
                <Text style={styles.inputLabel}>+91</Text>

                <TextInput
                  clearButtonMode="while-editing"
                  keyboardType="phone-pad"
                  onChangeText={phone => setForm({...form, phone})}
                  placeholder="Phone number"
                  placeholderTextColor="#505060"
                  returnKeyType="done"
                  style={styles.inputControl}
                  value={form.phone}
                  editable={form.phoneActive}
                  maxLength={15}
                  inputMode="numeric"
                />

                {form.otpActive && (
                  <TouchableOpacity
                    onPress={() => changeNumber(form, setForm, setOtpTimer)}
                    style={{
                      marginTop: 10,
                      alignSelf: 'flex-end',
                    }}>
                    <Text style={{fontSize: 12, color: 'blue'}}>Change?</Text>
                  </TouchableOpacity>
                )}
              </View>

              {errors.phone ? (
                <Text style={styles.errorText}>{errors.phone}</Text>
              ) : null}

              {form.otpActive && (
                <View>
                  <View style={styles.input}>
                    <Text style={styles.inputLabel}>
                      <MaterialCommunityIcons
                        color="#000"
                        name="lock"
                        size={20}
                        style={{marginLeft: 12}}
                      />
                    </Text>

                    <TextInput
                      clearButtonMode="while-editing"
                      keyboardType="phone-pad"
                      onChangeText={otp => setForm({...form, otp})}
                      placeholder="OTP"
                      placeholderTextColor="#505060"
                      returnKeyType="done"
                      style={[
                        styles.inputControl,
                        errors.otp ? styles.inputError : null,
                      ]}
                      value={form.otp}
                      maxLength={6}
                      inputMode="numeric"
                      autoComplete="sms-otp" // android
                      textContentType="oneTimeCode" // ios
                    />
                    {errors.otp ? (
                      <Text style={styles.errorText}>{errors.otp}</Text>
                    ) : null}
                    <View
                      style={{
                        flexDirection: 'row',
                        marginBlock: 10,
                      }}>
                      <Text style={{flex: 1, fontSize: 12}}>
                        Resend OTP on SMS
                      </Text>
                      <TouchableOpacity
                        onPress={() => resendOtp(otpTimer, setOtpTimer)}
                        disabled={otpTimer === 0 ? false : true}>
                        <Text
                          style={{
                            fontSize: 12,
                            color: 'blue',
                          }}>
                          {otpTimer === 0 ? 'Resend OTP' : otpTimer}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              )}

              <View style={styles.formAction}>
                <TouchableOpacity
                  onPress={() =>
                    handlePhoneSubmit(
                      form,
                      setForm,
                      setErrors,
                      errors,
                      login,
                      otpVerify,
                      setLoading,
                    )
                  }>
                  <View style={styles.btn}>
                    <View style={{width: 32}} />

                    {loading ? (
                      <ActivityIndicator
                        size="small"
                        color={theme.colors.primary}
                      />
                    ) : form.otpActive ? (
                      <Text style={styles.btnText}>Submit</Text>
                    ) : (
                      <Text style={styles.btnText}>Continue</Text>
                    )}

                    <MaterialCommunityIcons
                      color="#fff"
                      name="arrow-right"
                      size={20}
                      style={{marginLeft: 12}}
                    />
                  </View>
                </TouchableOpacity>

                <Text style={styles.formActionSpacer}>Or continue with</Text>

                <TouchableOpacity
                  onPress={() => {
                    // handle onPress
                  }}>
                  <View style={styles.btnSecondary}>
                    <MaterialCommunityIcons
                      color="#000"
                      name="email-fast-outline"
                      size={22}
                      style={{marginRight: 12}}
                    />

                    <Text style={styles.btnSecondaryText}>Email</Text>

                    <View style={{width: 34}} />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    // handle onPress
                  }}>
                  <View style={styles.btnSecondary}>
                    <MaterialCommunityIcons
                      color="#000"
                      name="apple"
                      size={22}
                      style={{marginRight: 12}}
                    />

                    <Text style={styles.btnSecondaryText}>Apple</Text>

                    <View style={{width: 34}} />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    // handle onPress
                  }}>
                  <View style={styles.btnSecondary}>
                    <MaterialCommunityIcons
                      color="#000"
                      name="google"
                      size={22}
                      style={{marginRight: 12}}
                    />

                    <Text style={styles.btnSecondaryText}>Google</Text>

                    <View style={{width: 34}} />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    // handle onPress
                  }}>
                  <View style={styles.btnSecondary}>
                    <MaterialCommunityIcons
                      color="#000"
                      name="facebook"
                      size={22}
                      style={{marginRight: 12}}
                    />

                    <Text style={styles.btnSecondaryText}>Facebook</Text>

                    <View style={{width: 34}} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
