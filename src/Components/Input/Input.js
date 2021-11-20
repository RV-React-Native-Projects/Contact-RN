import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Colors from '../../Assets/Themes/Colors';

export default function Input({
  onChangeText,
  value,
  style,
  placeholder,
  icon,
  iconPosition,
  secureTextEntry,
  autoCapitalize,
  autoComplete,
  autoFocus,
  keyboardType,
  label,
  eyePress,
  error,
  ...props
}) {
  const [focused, setFocused] = useState(false);

  const getBorderColor = () => {
    if (error) {
      return Colors.danger;
    }
    if (focused) {
      return Colors.primary;
    } else {
      return Colors.gray;
    }
  };

  return (
    <View style={styles.container}>
      {label && (
        <View style={styles.labelContainer}>
          <Text style={styles.Label}>{label}</Text>
        </View>
      )}
      <View style={styles.wrapperContainer}>
        {icon && (
          <View style={styles.iconStyle}>
            <TouchableOpacity onPress={eyePress} activeOpacity={0.5}>
              <Text style={styles.IconText}>{icon}</Text>
            </TouchableOpacity>
          </View>
        )}
        <TextInput
          style={[
            styles.InputContainer,
            style,
            {paddingRight: icon && 40, borderColor: getBorderColor()},
          ]}
          onChangeText={onChangeText}
          value={value}
          secureTextEntry={secureTextEntry || false}
          placeholder={placeholder || null}
          autoCapitalize={autoCapitalize}
          autoComplete={autoComplete}
          autoFocus={autoFocus || false}
          keyboardType={keyboardType || 'default'}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...props}
        />
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {marginTop: 10},
  InputContainer: {
    height: 45,
    borderWidth: 1,
    // borderColor: '#E5DCC3',
    borderRadius: 5,
    marginTop: 2,
    paddingHorizontal: 10,
  },
  labelContainer: {
    marginVertical: 5,
    marginTop: 10,
  },
  Label: {
    color: '#000',
    fontSize: 16,
  },
  iconStyle: {
    position: 'absolute',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    right: 3,
    height: '100%',
    width: '12%',
  },
  wrapperContainer: {
    justifyContent: 'center',
  },
  IconText: {
    color: '#0F00FF',
  },
  errorText: {
    color: Colors.danger,
    fontSize: 14,
    padding: 5,
  },
});
