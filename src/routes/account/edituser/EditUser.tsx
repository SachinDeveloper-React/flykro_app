import {
  Alert,
  Animated,
  Image,
  Modal,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {Fragment, useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {SCREEN_WIDTH, theme} from '../../../utils';
import {Button, CustomInput} from '../../../components';
import {useCameraPermission} from 'react-native-vision-camera';
import {OPTIONS, updateProfilePhoto} from './helper';
import {useAuth} from '../../../hooks';
import {styles} from './styles';
import {UserApi} from '../../../networking';
import Toast from 'react-native-root-toast';

type Props = {};

const EditUser = (props: Props) => {
  const {user, getCurrentUser} = useAuth();

  const {hasPermission, requestPermission} = useCameraPermission();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [activeField, setActiveField] = useState<string>('');
  const [fadeAnim] = useState(new Animated.Value(0));
  const [loading, setLoading] = useState(false);

  const [userDetails, setUserDetails] = useState<{
    name: String | null;
    dob: String | null;
    gender: String | null;
    avatar: String | null;
    maritalStatus: String | null;
    pincode: String | null;
    state: String | null;
    email: String | null;
    phoneNumber: String;
  }>({
    name: user?.name || null,
    dob: '' || null,
    gender: user?.gender || null,
    avatar: user?.avatar || null,
    maritalStatus: user?.maritalStatus || null,
    pincode: user?.pincode || null,
    state: user?.state || null,
    email: user?.email || null,
    phoneNumber: user?.phoneNumber || '',
  });

  const initialDetails = {
    name: user?.name || null,
    dob: '' || null,
    gender: user?.gender || null,
    avatar: user?.avatar || null,
    maritalStatus: user?.maritalStatus || null,
    pincode: user?.pincode || null,
    state: user?.state || null,
    email: user?.email || null,
    phoneNumber: user?.phoneNumber || '',
  };

  const isModified = () => {
    return Object.keys(initialDetails).some(
      key =>
        userDetails[key as keyof typeof userDetails] !==
        initialDetails[key as keyof typeof initialDetails],
    );
  };

  const showModal = (field: string) => {
    setActiveField(field);
    Animated.timing(fadeAnim, {
      toValue: 0.8,
      duration: 50,
      useNativeDriver: true,
    }).start(() => setModalVisible(true));
  };

  const hideModal = () => {
    setModalVisible(false);
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 50,
      useNativeDriver: true,
    }).start();
  };

  const handleSelection = (field: string, value: string) => {
    isModified();
    setUserDetails({...userDetails, [field]: value});
    hideModal();
  };

  const handleSubmitEditUserDetails = async () => {
    if (!isModified()) {
      Toast.show('No changes made', {
        duration: Toast.durations.SHORT,
        position: Toast.positions.BOTTOM,
      });
      return;
    }

    try {
      setLoading(true);
      const body = {
        ...(userDetails.name && {name: userDetails.name?.toString()}),
        ...(userDetails.gender && {gender: userDetails.gender?.toString()}),
        ...(userDetails.maritalStatus && {
          maritalStatus: userDetails.maritalStatus?.toString(),
        }),
        ...(userDetails.pincode && {pincode: userDetails.pincode?.toString()}),
        ...(userDetails.state && {state: userDetails.state?.toString()}),
        ...(userDetails.email && {email: userDetails.email?.toString()}),
      };
      const updateUser = await UserApi.updateCurrentUser(body);

      if (updateUser.statusCode === 200) {
        Toast.show('Profile Updated', {
          duration: Toast.durations.LONG,
          position: Toast.positions.BOTTOM,
          shadow: true,
          animation: true,
          hideOnPress: true,
          delay: 0,
          onShow: () => {
            // calls on toast\`s appear animation start
          },
          onShown: () => {
            // calls on toast\`s appear animation end.
          },
          onHide: () => {
            // calls on toast\`s hide animation start.
          },
          onHidden: () => {
            // calls on toast\`s hide animation end.
          },
        });

        await getCurrentUser();
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log('error', error);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.card}}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: theme.colors.card,
          paddingVertical: 10,
        }}>
        {/* Profile Picture */}
        <TouchableOpacity
          onPress={() => updateProfilePhoto(hasPermission, requestPermission)}
          style={[
            styles.profileImageContainer,
            {
              position: 'relative',
              overflow: 'visible',
            },
          ]}>
          {userDetails.avatar ? (
            <View style={styles.profileImageContainer}>
              <Image
                source={{uri: userDetails.avatar?.toString() ?? ''}}
                style={styles.profileImage}
              />
            </View>
          ) : (
            <View
              style={[
                styles.profileImageContainer,
                {
                  backgroundColor: '#fff',
                  overflow: 'visible',
                  alignItems: 'center',
                  justifyContent: 'center',
                  ...Platform.select({
                    ios: {
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,
                    },
                    android: {
                      elevation: 5,
                    },
                  }),
                },
              ]}>
              <View
                style={{
                  backgroundColor: theme.colors.border,
                  width: 95,
                  height: 95,
                  borderRadius: 95,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontWeight: 600,
                    color: theme.colors.gray,
                    fontSize: 18,
                  }}>
                  Flykro
                </Text>
              </View>
            </View>
          )}
          <MaterialIcons
            name="camera"
            size={30}
            color={theme.colors.notification}
            style={styles.cameraIcon}
          />
        </TouchableOpacity>

        {/* General Details */}
        <View style={{padding: 10}}>
          <Text style={styles.sectionHeader}>GENERAL DETAILS</Text>
          <CustomInput
            label="Name"
            value={userDetails?.name?.toString() ?? ''}
            onChangeText={value =>
              setUserDetails({...userDetails, name: value})
            }
            placeholder="Enter your name"
          />
          <View style={styles.row}>
            <CustomInput
              label="Date of Birth"
              value={userDetails.dob?.toString() ?? ''}
              onChangeText={value =>
                setUserDetails({...userDetails, dob: value})
              }
              placeholder="DD/MM/YYYY"
              style={{width: SCREEN_WIDTH / 2 - 20}}
            />
            <CustomInput
              label="Gender"
              value={userDetails.gender?.toString()}
              editable={false}
              onPress={() => showModal('gender')}
              placeholder="Select Gender"
              style={{width: SCREEN_WIDTH / 2 - 20}}
              onChangeText={function (text: string): void {
                throw new Error('Function not implemented.');
              }}
            />
          </View>
          <View style={styles.row}>
            <CustomInput
              label="Marital Status"
              value={userDetails.maritalStatus?.toString() ?? ''}
              editable={false}
              onPress={() => showModal('maritalStatus')}
              placeholder="Select Status"
              style={{width: SCREEN_WIDTH / 2 - 20}}
              onChangeText={function (text: string): void {
                throw new Error('Function not implemented.');
              }}
            />
            <CustomInput
              label="Pincode"
              value={userDetails.pincode?.toString() ?? ''}
              onChangeText={value =>
                setUserDetails({...userDetails, pincode: value})
              }
              placeholder="Enter Pincode"
              style={{width: SCREEN_WIDTH / 2 - 20}}
            />
          </View>
        </View>

        <View style={{padding: 10}}>
          <Text style={styles.sectionHeader}>CONTACT DETAILS</Text>
          <CustomInput
            label="EMAIL"
            value={userDetails.email?.toString() ?? ''}
            onChangeText={value =>
              setUserDetails({...userDetails, email: value})
            }
            placeholder="Enter your email"
          />

          <CustomInput
            label="PHONE NUMBER"
            editable={false}
            value={userDetails.phoneNumber.toString() ?? ''}
            onChangeText={value =>
              setUserDetails({...userDetails, phoneNumber: value})
            }
            placeholder="Enter your phone number"
          />
        </View>

        {/* Modal for Gender/Marital Status */}
        <Modal
          animationType="slide"
          transparent
          visible={modalVisible}
          onRequestClose={hideModal}>
          <TouchableWithoutFeedback onPress={hideModal}>
            <View style={styles.centeredView}>
              <Animated.View style={[styles.overlay, {opacity: fadeAnim}]} />
              <View style={styles.modalView}>
                {OPTIONS[activeField as keyof typeof OPTIONS]?.map(
                  (option: {
                    id: number;
                    type: string;
                    title: string;
                    value: string;
                  }) => (
                    <Fragment key={option.id}>
                      <TouchableOpacity
                        disabled={option.type === 'Header'}
                        onPress={() =>
                          handleSelection(activeField, option.value)
                        }
                        style={styles.option}>
                        {option.type === 'list' && (
                          <View
                            style={[
                              styles.optionCircle,
                              userDetails[
                                activeField as keyof typeof userDetails
                              ] === option.value && styles.optionCircleSelected,
                            ]}
                          />
                        )}
                        <Text
                          style={[
                            styles.optionText,
                            option.type === 'Header' && styles.optionHeaderText,
                          ]}>
                          {option.title}
                        </Text>
                      </TouchableOpacity>
                    </Fragment>
                  ),
                )}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </ScrollView>
      <Button
        title="Save"
        loading={loading}
        disabled={!isModified()}
        borderRadius={0}
        onPress={handleSubmitEditUserDetails}
      />
    </SafeAreaView>
  );
};

export default EditUser;
