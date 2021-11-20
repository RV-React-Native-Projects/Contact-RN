import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Colors from '../../Assets/Themes/Colors';
import CustomeButton from '../../Components/Button/Button';
import Container from '../../Components/Container/Container';
import Input from '../../Components/Input/Input';
import {SIGNUP} from '../../Constants/RouteName';

export default function Login_Comp() {
  const {navigate} = useNavigation();
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const eyePress = () => {
    setShow(!show);
  };
  return (
    <Container>
      <View>
        <Image
          style={styles.LogoImage}
          source={require('../../Assets/Images/LOGO.png')}
          height={150}
          width={150}
        />
        <Text style={styles.WelcomeTitle}>Welcome to RN-Contacts</Text>
        <Text style={styles.SubTitle}>Please login to Start-With-Us</Text>

        <Input
          placeholder="Enter User ID"
          label="Email"
          keyboardType="email-address"
          autoComplete="email"
          autoFocus={true}
          value={email}
          onChangeText={text => setEmail(text)}
          // error="User Id is Required"
        />
        <Input
          placeholder="Enter Your Password"
          label="Password"
          icon={show ? 'HIDE' : 'SHOW'}
          iconPosition="right"
          eyePress={() => eyePress()}
          secureTextEntry={!show}
          autoComplete="password"
          value={password}
          onChangeText={text => setPassword(text)}
          // error="Password is Required"
        />
      </View>
      <CustomeButton
        title="Login"
        contained
        primary
        // loading
        onPress={() => {}}
      />
      <Text style={styles.Question}>Dont have an Account ?</Text>
      <CustomeButton
        title="Sign Up"
        outline
        danger
        // loading
        onPress={() => navigate(SIGNUP)}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  LogoImage: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 30,
    marginTop: 50,
    height: 150,
    width: 150,
  },
  WelcomeTitle: {
    fontWeight: '700',
    fontSize: 25,
    color: Colors.black,
    fontFamily: 'roboto',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  SubTitle: {
    color: Colors.gray,
    fontFamily: 'roboto',
    fontSize: 16,
    marginVertical: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Question: {
    color: Colors.secondary,
    alignSelf: 'center',
  },
});
