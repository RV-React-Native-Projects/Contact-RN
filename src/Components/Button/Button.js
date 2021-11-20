import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Colors from '../../Assets/Themes/Colors';

export default function CustomeButton({
  title,
  onPress,
  disabled,
  primary,
  secondary,
  danger,
  outline,
  contained,
  style,
  TitleStyle,
  loading,
}) {
  const getBgColor = () => {
    if (outline && (primary || secondary || danger)) {
      return null;
    }
    if (primary) {
      return Colors.primary;
    }
    if (secondary) {
      return Colors.secondary;
    }
    if (danger) {
      return Colors.danger;
    } else {
      return Colors.gray;
    }
  };

  const getBorderColor = () => {
    if (contained && (primary || secondary || danger)) {
      return null;
    }
    if (outline && primary) {
      return Colors.primary;
    }
    if (outline && secondary) {
      return Colors.secondary;
    }
    if (outline && danger) {
      return Colors.danger;
    } else {
      return Colors.gray;
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[
        styles.CustomeButton,
        {
          backgroundColor: getBgColor(),
          borderColor: getBorderColor(),
          borderWidth: outline && 1,
        },
        style,
      ]}
      onPress={onPress}
      disabled={disabled}>
      {loading && (
        <ActivityIndicator
          style={[styles.ActivityIndicator]}
          color={outline ? getBorderColor() : Colors.white}
        />
      )}
      <Text
        style={[
          styles.ButtonTitle,
          {color: outline ? getBorderColor() : Colors.white},
          TitleStyle,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  CustomeButton: {
    width: '99%',
    height: 45,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginVertical: 25,
    flexDirection: 'row',
  },
  ButtonTitle: {
    fontWeight: '700',
    fontSize: 18,
  },
  ActivityIndicator: {
    marginRight: 15,
  },
});
