import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  TextInputProps,
} from 'react-native';

interface CustomInputProps extends TextInputProps {
  label?: string;
  value?: string;
  defaultValue?: string;
  onChangeText: (text: string) => void;
  onBlur?: () => void;
  onPressAndroid?: () => void; // Add onPress prop
  errors?: string[];
  isValid?: boolean;
  style?: ViewStyle;
  editable?: boolean; // Allow control of input's editability
}

const CustomInput = ({
  label,
  value,
  defaultValue,
  onChangeText,
  onBlur,
  placeholder,
  keyboardType = 'default',
  secureTextEntry = false,
  errors = [],
  isValid = true,
  style,
  onPressAndroid,
  editable = true,
  ...props
}: CustomInputProps) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TouchableOpacity
        activeOpacity={editable ? 1 : 0.7}
        onPress={!editable ? onPressAndroid : undefined} // Handle onPress when not editable
        style={styles.touchableWrapper}>
        <TextInput
          style={[
            style,
            styles.input,
            !isValid && errors.length > 0 && styles.inputError,
          ]}
          value={value ?? ''}
          defaultValue={defaultValue}
          onChangeText={onChangeText}
          onBlur={onBlur}
          placeholder={placeholder}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          editable={editable} // Control input's editability
          {...props}
        />
      </TouchableOpacity>
      {!isValid && errors.length > 0 && (
        <View style={styles.errorContainer}>
          {errors.map((error, index) => (
            <Text key={index} style={styles.errorText}>
              {error}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 5,
    color: '#333',
  },
  touchableWrapper: {
    flex: 1,
    // backgroundColor: 'red',
    // zIndex: 9999999999,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  inputError: {
    borderColor: 'red',
  },
  errorContainer: {
    marginTop: 5,
  },
  errorText: {
    fontSize: 12,
    color: 'red',
  },
});

export default CustomInput;
