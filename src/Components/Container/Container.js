import React from 'react';
import {KeyboardAvoidingView, ScrollView, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Container({style, children}) {
  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <ScrollView style={[styles.container, style]}>{children}</ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: '100%',
    width: '100%',
  },
});
