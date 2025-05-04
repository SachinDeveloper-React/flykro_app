import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {styles} from './styles';
import {defaultColors, getTextColor} from './helper';

type Props = {};

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Section = ({children, title}: SectionProps) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: getTextColor(isDarkMode, Colors.white, Colors.black),
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: getTextColor(
              isDarkMode,
              defaultColors.light,
              defaultColors.dark,
            ), // Use helper with constants
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

export default Section;
