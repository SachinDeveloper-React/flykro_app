import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {theme} from '../../../../../utils';
import {styles} from './styles';
type Props = {
  width?: '50%' | '100%';
  type:
    | 'from'
    | 'to'
    | 'departure'
    | 'return'
    | 'Passengers & Cabin Class'
    | '+ return date';
  subValue?: string;
  value: string;
  icon: string;
  subValueText: string;
  onPress?: () => void;
};

const SearchWidget = (props: Props) => {
  const {
    width = '100%',
    type,
    subValue,
    icon,
    subValueText,
    value,
    onPress,
  } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.searchWidgetContainer,
        {
          width: width,
        },
      ]}>
      <View style={styles.searchWidgetContent}>
        {icon && (
          <View>
            <Icon name={icon} size={24} color={theme.colors.gray} />
          </View>
        )}

        <View style={styles.searchWidgetTextContent}>
          <Text style={styles.searchWidgetText}>{type}</Text>
          <Text style={styles.searchWidgetTextBold}>
            {value} <Text style={styles.searchWidgetText}>{subValueText}</Text>
          </Text>

          {subValue && (
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={styles.searchWidgetTextSmall}>
              {subValue}
            </Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SearchWidget;
