import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Colors from '../../Assets/Themes/Colors';
import CustomeButton from '../../Components/Button/Button';
import Container from '../../Components/Container/Container';
import Input from '../../Components/Input/Input';
import {LOGIN} from '../../Constants/RouteName';

export default function SignUp_Comp({onSubmit, onChange, form, errors}) {
  const {navigate} = useNavigation();
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  // const [userName, setUserName] = useState('');
  // const [first, setFirst] = useState('');
  // const [last, setLast] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');

  const eyePress = () => {
    setShow(!show);
  };
  const eyePressConfirm = () => {
    setShowConfirm(!showConfirm);
  };
  console.log(errors.UserName);
  return (
    <Container>
      <View>
        <Image
          style={styles.LogoImage}
          source={require('../../Assets/Images/LOGO.png')}
          height={150}
          width={150}
        />
        <Text style={styles.WelcomeTitle}>Start-With RN-Contacts</Text>
        <Text style={styles.SubTitle}>Create a FREE Account</Text>

        <Input
          placeholder="Enter User-Name"
          label="User Name"
          keyboardType="email-address"
          autoComplete="name"
          // error="User Id is Required"
          onChangeText={value => {
            onChange({name: 'UserName', value});
          }}
          error={errors.UserName}
        />
        <Input
          placeholder="Enter First-Name"
          label="First Name"
          keyboardType="email-address"
          autoComplete="name"
          // error="User Id is Required"
          onChangeText={value => {
            onChange({name: 'FirstName', value});
          }}
          error={errors.FirstName}
        />
        <Input
          placeholder="Enter Last-Name"
          label="Last Name"
          keyboardType="email-address"
          autoComplete="name"
          // error="User Id is Required"
          onChangeText={value => {
            onChange({name: 'LastName', value});
          }}
          error={errors.LastName}
        />
        <Input
          placeholder="Enter User ID"
          label="Email"
          keyboardType="email-address"
          autoComplete="email"
          // error="User Id is Required"
          onChangeText={value => {
            onChange({name: 'Email', value});
          }}
          error={errors.Email}
        />
        <Input
          placeholder="Enter Your Password"
          label="Password"
          icon={show ? 'HIDE' : 'SHOW'}
          iconPosition="right"
          eyePress={() => eyePress()}
          secureTextEntry={!show}
          autoComplete="password"
          // error="Password is Required"
          onChangeText={value => {
            onChange({name: 'Password', value});
          }}
          error={errors.Password}
        />
        <Input
          placeholder="Confirm Password"
          label="Confirm Password"
          icon={showConfirm ? 'HIDE' : 'SHOW'}
          iconPosition="right"
          eyePress={() => eyePressConfirm()}
          secureTextEntry={!showConfirm}
          autoComplete="password"
          // error="Password is Required"
          onChangeText={value => {
            onChange({name: 'ConfirmPassword', value});
          }}
          error={errors.ConfirmPassword}
        />
      </View>
      <CustomeButton
        title="Sign Up"
        contained
        primary
        // loading
        onPress={() => onSubmit()}
      />
      <Text style={styles.Question}>Already have an Account ?</Text>
      <CustomeButton
        title="Login"
        outline
        danger
        // loading
        onPress={() => navigate(LOGIN)}
      />
      <View style={{marginBottom: 100}} />
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
