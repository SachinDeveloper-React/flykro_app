import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {navigate} from '../../navigation/NavigationService';
import {styles} from './styles';
import {theme} from '../../utils';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {
  accountServiceList,
  goToEditAccount,
  goToLogin,
  onShare,
} from './helper';
import {useAuth} from '../../hooks';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import {useRoute} from '@react-navigation/native';

type Props = {};

const Account = (props: Props) => {
  const route = useRoute();
  const {isAuthenticated, user} = useAuth();
  const renderItem = ({
    item,
    index,
  }: {
    item: {
      id: number;
      title: string;
      subtitle: string;
      disable: boolean;
      navigate: string;
      icon: {
        name: string;
        size: string;
        color: string;
      };
    };
    index: number;
  }) => (
    <TouchableOpacity
      onPress={() => {
        if (!item.disable) {
          if (item.id === 3) {
            onShare();
          } else {
            navigate(item.navigate as any);
          }
        }
      }}
      disabled={item.disable}
      style={[
        styles.touchable,
        {
          marginTop: index === 0 ? 10 : 0,
        },
      ]}>
      <View style={styles.row}>
        <FontAwesome6
          name={item.icon.name}
          color={theme.colors.primary}
          size={Number(item.icon.size)}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          {item.subtitle && (
            <Text style={[styles.subtitle, {color: theme.colors.gray}]}>
              {item.subtitle}
            </Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );

  console.log('route', route);
  return (
    <SafeAreaView
      style={[
        styles.safeAreacontainer,
        {
          backgroundColor: isAuthenticated
            ? theme.colors.primary
            : theme.colors.background,
        },
      ]}>
      <StatusBar
        backgroundColor={
          isAuthenticated ? theme.colors.primary : theme.colors.background
        }
        barStyle={isAuthenticated ? 'light-content' : 'dark-content'}
        translucent
        animated
      />
      <ScrollView style={styles.container}>
        {isAuthenticated ? (
          <LinearGradient
            colors={[theme.colors.primary, theme.colors.primary]} // Gradient colors
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <TouchableOpacity
              style={[
                styles.cardContainer,
                {
                  marginTop: StatusBar.currentHeight,
                },
              ]}
              activeOpacity={1}
              onPress={goToEditAccount}>
              <View style={styles.profileImageContainer}>
                <View style={styles.circularProgress}>
                  <Image
                    source={{
                      uri: user.avatar,
                      cache: 'force-cache',
                    }}
                    resizeMode="cover"
                    resizeMethod="scale"
                    style={{
                      width: 50,
                      height: 50,
                    }}
                  />
                </View>
              </View>
              <View style={styles.textContainera}>
                <Text style={styles.greetingText}>Hi {user.name}</Text>
                <Text style={styles.emailText}>{user.email}</Text>
              </View>
              <MaterialIcons name="chevron-right" size={24} color="white" />
            </TouchableOpacity>
          </LinearGradient>
        ) : (
          <View style={styles.beforeloginTopcontainer}>
            <View style={{paddingLeft: 20}}>
              <Text style={styles.beforeloginToptext}>Time to Travel</Text>
              <TouchableOpacity
                onPress={goToLogin}
                style={styles.beforeloginTopButtonTouchable}>
                <Text style={styles.beforeloginTopButtonText}>
                  Login to join us
                </Text>
                <AntDesign
                  name="arrowright"
                  color={theme.colors.primary}
                  size={12}
                />
              </TouchableOpacity>
            </View>
            <Image
              source={require('../../assets/images/travel.png')}
              style={styles.beforeloginImage}
            />
          </View>
        )}

        <View>
          <FlatList
            data={accountServiceList}
            keyExtractor={({id}) => id.toString()}
            scrollToOverflowEnabled
            scrollEnabled={false}
            contentContainerStyle={styles.contentContainer}
            renderItem={renderItem}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Account;
