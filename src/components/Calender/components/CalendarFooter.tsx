import React from 'react';
import {View, Button, Platform} from 'react-native';
import {theme} from '../../../utils';

const CalendarFooter = ({
  isDisabled,
  onPress,
}: {
  isDisabled: boolean;
  onPress: () => void;
}) => (
  <View
    style={{
      paddingHorizontal: 10,
      backgroundColor: theme.colors.primary,
      ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: {width: 0, height: -8},
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        },
        android: {
          elevation: 2,
        },
      }),
    }}>
    <Button
      disabled={isDisabled}
      onPress={onPress}
      title="Continue"
      color={theme.colors.card}
    />
  </View>
);

export default React.memo(CalendarFooter);
