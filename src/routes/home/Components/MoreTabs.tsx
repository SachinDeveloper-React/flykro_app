import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {gridOptions} from '../helper';
import {styles} from '../styles';
import {SCREEN_WIDTH} from '../../../utils';

type Props = {};

const MoreTabs = (props: Props) => {
  return (
    <View style={styles.gridContainer}>
      {gridOptions.map(option => (
        <TouchableOpacity
          key={option.id}
          style={[
            styles.gridItem,
            {
              width: SCREEN_WIDTH / 4 - 10,
            },
          ]}>
          <Image source={option.icon} style={styles.gridIcon} />
          <Text style={styles.gridText}>{option.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default MoreTabs;
