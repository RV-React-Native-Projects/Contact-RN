import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import SignUp_Comp from '../../Screen_Components/SignUp/SignUp_Comp';

import envs from '../../Config/env';
import AxiosInstance from '../../Helpers/AxiosInterceptor';

const SignUp = () => {
  useEffect(() => {
    AxiosInstance.get('/contacts').catch(err => {
      console.log('error', err.response);
    });
  }, []);

  const [form, setForm] = useState({});
  const [error, setError] = useState({});

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});

    if (value !== '') {
      if (name === 'Password') {
        if (value.length < 6) {
          setError(prev => {
            return {...prev, [name]: 'Minimum 6 Characters Required'};
          });
        } else {
          setError(prev => {
            return {...prev, [name]: null};
          });
        }
      } else {
        setError(prev => {
          return {...prev, [name]: null};
        });
      }
    } else {
      setError(prev => {
        return {...prev, [name]: 'This Field is required'};
      });
    }
  };

  const onSubmit = () => {
    if (!form.UserName) {
      setError(prev => {
        return {...prev, UserName: 'User Name Required'};
      });
    }
    if (!form.FirstName) {
      setError(prev => {
        return {...prev, FirstName: 'First-Name Required'};
      });
    }
    if (!form.LastName) {
      setError(prev => {
        return {...prev, LastName: 'Last Name Required'};
      });
    }
    if (!form.Email) {
      setError(prev => {
        return {...prev, Email: 'Email id Required'};
      });
    }
    if (!form.Password) {
      setError(prev => {
        return {...prev, Password: 'Password Required'};
      });
    }
    if (!form.ConfirmPassword) {
      setError(prev => {
        return {...prev, ConfirmPassword: 'Confirm Password Required'};
      });
    }
  };

  return (
    <SignUp_Comp
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={error}
    />
  );
};

export default SignUp;

const styles = StyleSheet.create({});
