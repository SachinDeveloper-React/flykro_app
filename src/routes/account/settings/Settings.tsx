import React, {useState, useEffect} from 'react';
import {View, Text, Switch, StyleSheet, TouchableOpacity} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {theme} from '../../../utils';
import {
  checkNotificationPermission,
  requestNotificationPermission,
} from './helper';
import {styles} from './styles';
import {useAuth} from '../../../hooks';

const NotificationSettings = () => {
  const {isAuthenticated} = useAuth();
  const isFocused = useIsFocused();
  const [notificationPermission, setNotificationPermission] = useState<
    boolean | null
  >(null);

  useEffect(() => {
    checkNotificationPermission(setNotificationPermission);
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <View style={[styles.section, {borderBottomColor: theme.colors.gray}]}>
        <View style={styles.sectionContent}>
          <View style={styles.row}>
            <View style={styles.notificationInfo}>
              <Text style={styles.notificationTitle}>
                Marketing Notifications
              </Text>
              <Text
                style={[
                  styles.notificationDescription,
                  {color: theme.colors.gray},
                ]}
                numberOfLines={2}>
                Receive notifications about deals and promotions.
              </Text>
            </View>
            <Switch
              trackColor={{false: '#767577', true: '#a8e3ed'}}
              thumbColor={
                notificationPermission ? theme.colors.primary : '#f4f3f4'
              }
              ios_backgroundColor="#3e3e3e"
              onValueChange={() =>
                requestNotificationPermission(setNotificationPermission)
              }
              value={Boolean(notificationPermission)}
            />
          </View>
        </View>
        {isAuthenticated && (
          <TouchableOpacity style={styles.sectionContent} onPress={() => true}>
            <View style={styles.row}>
              <View style={styles.notificationInfo}>
                <Text>Log out</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.aboutSection}>
        <Text style={[styles.aboutTitle, {color: theme.colors.primary}]}>
          About
        </Text>
        <Text style={styles.aboutItem}>Terms of Service</Text>
        <Text style={styles.aboutItem}>Privacy Policy</Text>
        <View>
          <Text style={styles.aboutItem}>Application Version</Text>
          <Text style={styles.appVersion}>0.0.1</Text>
        </View>
      </View>
    </View>
  );
};

export default NotificationSettings;
