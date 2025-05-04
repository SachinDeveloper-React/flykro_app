import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from '../styles';
import {topTabs} from '../helper';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const TopTabs = (props: Props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.topTabsContainer}>
      {topTabs.map(tab => (
        <TouchableOpacity
          key={tab.id}
          style={styles.tabItem}
          onPress={() => navigation.navigate(tab.screen as never)}>
          <Image source={tab.icon} style={styles.tabIcon} />
          <Text style={styles.tabText}>{tab.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TopTabs;
