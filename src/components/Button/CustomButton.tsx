import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
} from 'react-native';

type CustomButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  buttonColor?: string;
  textColor?: string;
  loadingColor?: string;
  borderRadius?: number;
};

const CustomButton = ({
  title,
  onPress,
  disabled = false,
  loading = false,
  style,
  textStyle,
  buttonColor = '#007BFF',
  textColor = '#FFFFFF',
  loadingColor = '#FFFFFF',
  borderRadius = 8,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        style,
        {backgroundColor: disabled ? '#B0B0B0' : buttonColor, borderRadius},
      ]}
      onPress={onPress}
      disabled={disabled || loading}>
      {loading ? (
        <ActivityIndicator size="small" color={loadingColor} />
      ) : (
        <Text style={[styles.text, textStyle, {color: textColor}]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    elevation: 2,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomButton;
