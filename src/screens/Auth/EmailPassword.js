//import liraries
import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Text,
  StatusBar,
  Image,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import Color from '../../Global/Color';
import { scr_height, scr_width } from '../../Components/Dimensions';
import { Mulish } from '../../Global/FontFamily';
import { useDispatch } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';
import common_fn from '../../Components/common_fn';
import { Iconviewcomponent } from '../../Components/Icontag';
import { Platform } from 'react-native';
import fetchData from '../../Config/fetchData';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RBSheet from 'react-native-raw-bottom-sheet';

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

// create a component
const EmailPassword = () => {
  const navigation = useNavigation();
  const refRBSheet = useRef();
  const dispatch = useDispatch();
  const routeName = useRoute();
  const [number, setNumber] = useState('');
  const [error, setError] = useState(false);
  const [uniqueId, setUniqueId] = useState(false);
  const [userInfo, setUserInfo] = useState(false);
  const [loader, setLoading] = useState(false);
  const [Changepassowrd, setChangepassowrd] = useState('');
  const [Changepassowrdloader, setChangepassowrdloader] = useState(false);

  const [email, setEmail] = useState('');
  const [emailValidError, setEmailValidError] = useState('');
  const [password, setPassword] = useState('');
  const [password_visible, setPasswordvisibility] = useState(false);
  const [minPass, setMinPass] = useState('');

  const handleValidEmail = val => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (val.length === 0) {
      setEmailValidError('Email address must be enter');
    } else if (reg.test(val) === false) {
      setEmailValidError('Enter valid email address');
    } else if (reg.test(val) === true) {
      setEmailValidError('');
    }
  };

  // LOGIN FUNCTION :
  const login = async () => {
    try {
      setLoading(true);
      if (email && password) {
        const value = { email, password };
        const data = {
          email: value?.email,
          password: value?.password,
        };
        const Emailpassword = await fetchData?.User_Login_Email_Password_Verify(
          data,
        );
        if (Emailpassword?.message == 'Login Successfully') {
          await AsyncStorage.setItem('ACCESS_TOKEN', JSON.stringify(Emailpassword?.token));
          await AsyncStorage.setItem(
            'USERDATA',
            JSON.stringify(Emailpassword?.data),
          );
          common_fn.showToast(Emailpassword?.message);
          navigation.reset({
            index: 0,
            routes: [{ name: 'Tab' }],
          });
          setLoading(false);
        } else {
          console.log('====================================');
          console.log(Emailpassword);
          common_fn.showToast(Emailpassword?.message);
          setLoading(false);
        }
      } else {
        console.log('====================================');
        console.log('333333');
        console.log('====================================');
        common_fn.showToast('Please Enter your valid Email and Password');
        setLoading(false);
      }
    } catch (error) {
      console.log('CATCH IN EMAIL AND PASS', error);
      setLoading(false);
    }
  };
  // RESET PASSWORD FUNCTION :
  const Resetpassword = async () => {
    try {
      setChangepassowrdloader(true);
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!Changepassowrd || Changepassowrd.trim() === '') {
        common_fn.showToast('Please enter your email.');
        setChangepassowrdloader(false);
      } else if (!emailRegex.test(Changepassowrd)) {
        common_fn.showToast('Please enter a valid email.');
        setChangepassowrdloader(false);
      } else {
        const data = {
          email: Changepassowrd,
        };
        const EmailApi = await fetchData?.Forgetpassword(data);
        console.log('email', EmailApi);
        if (EmailApi?.success == true) {
          common_fn.showToast('Mail sent successfully');
          setChangepassowrdloader(false);
          refRBSheet.current.close();
          setChangepassowrd('');
        } else {
          common_fn.showToast(EmailApi?.message);
          setChangepassowrdloader(false);
        }
      }
    } catch (error) {
      console.log('Catch in reset password', error);
      setChangepassowrdloader(false);
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <StatusBar
          hidden={false} // Hides the status bar
          backgroundColor={Color.white} // Matches background color
          translucent={true}
          barStyle={'dark-content'}
        />
        <View
          style={{
            height: scr_height / 17,
          }}></View>
        <View style={{ flex: 1, width: scr_width, alignItems: 'center' }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}></View>
          <View
            style={{
              flex: 5,
              width: '100%',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: '100%',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                paddingHorizontal: 20,
              }}>
              <Image
                source={require('../../assets/Logos/cignix.png')}
                style={[styles.image]}
              />
            </View>
            <View
              style={{
                width: '100%',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                paddingHorizontal: 20,
              }}>
              <Text
                style={{
                  fontSize: 30,
                  color: Color.black,
                  fontFamily: Mulish.Bold,
                  paddingVertical: 5,
                }}>
                Welcome Back,
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: Color.cloudyGrey,
                  fontFamily: Mulish.Medium,
                }}>
                Login with your Email and Password
              </Text>

              <View style={{ marginTop: 30 }}>
                <View style={styles.NumberBoxConatiner}>
                  <View
                    style={{
                      flexDirection: 'row',
                      padding: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginHorizontal: 10,
                    }}>
                    <Iconviewcomponent
                      viewstyle={{
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      Icontag="MaterialCommunityIcons"
                      icon_size={25}
                      icon_color={Color.grey}
                      iconname="email-outline"
                    />
                  </View>
                  <TextInput
                    placeholder="Enter Your Email ID"
                    placeholderTextColor={Color.grey}
                    keyboardType="email-address"
                    value={email}
                    onChangeText={value => {
                      setEmail(value);
                      handleValidEmail(value);
                    }}
                    style={styles.numberTextBox}
                  />
                </View>
                {emailValidError ? (
                  <Text
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      fontFamily: Mulish.Medium,
                      paddingVertical: 5,
                      fontSize: 14,
                      color: 'red',
                    }}>
                    {emailValidError}
                  </Text>
                ) : null}
              </View>
              <View style={{ marginVertical: 20 }}>
                <View style={styles.NumberBoxConatiner}>
                  <View
                    style={{
                      flexDirection: 'row',
                      padding: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginHorizontal: 10,
                    }}>
                    <TouchableOpacity
                      onPress={() => setPasswordvisibility(!password_visible)}
                      style={styles.numberCountryCode}>
                      <Iconviewcomponent
                        viewstyle={{
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                        Icontag="MaterialCommunityIcons"
                        icon_size={25}
                        icon_color={Color.grey}
                        iconname={!password_visible ? 'eye-off' : 'eye'}
                      />
                    </TouchableOpacity>
                  </View>
                  <TextInput
                    style={styles.numberTextBox}
                    placeholder="Password"
                    placeholderTextColor={Color.grey}
                    secureTextEntry={!password_visible}
                    value={password}
                    keyboardType="name-phone-pad"
                    onChangeText={password => {
                      if (password.length < 6) {
                        setMinPass('set minimum character as 6');
                        setPassword(password);
                      } else {
                        setPassword(password);
                        setMinPass('');
                      }
                    }}
                  />
                </View>
                {minPass != 'null' ? (
                  <Text
                    style={{
                      width: '95%',
                      fontSize: 14,
                      color: 'red',
                    }}>
                    {minPass}
                  </Text>
                ) : null}
              </View>

              <TouchableOpacity
                onPress={() => login()}
                style={{
                  width: '100%',
                  height: 55,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: Color.primary,
                  borderRadius: 30,
                }}>
                {loader == true ? (
                  <ActivityIndicator size={'small'} color={Color.white} />
                ) : (
                  <Text
                    style={{
                      fontSize: 18,
                      color: Color.white,
                      fontFamily: Mulish.SemiBold,
                    }}>
                    Log in
                  </Text>
                )}
              </TouchableOpacity>

              <View
                style={{
                  width: '95%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 20,
                }}>
                <TouchableOpacity
                  style={{ padding: 5 }}
                  onPress={() => refRBSheet.current.open()}>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#2C83EA',
                      fontFamily: Mulish.Bold,
                      paddingHorizontal: 5,
                      letterSpacing: 0.2,
                    }}>
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  width: scr_width,
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: 20,
                }}>
                <View
                  style={{
                    width: scr_width / 3.3,
                    height: 0.5,
                    borderStyle: 'dashed',
                    borderWidth: 0.5,
                    backgroundColor: Color.softGrey,
                    borderRadius: 1,
                  }}></View>
                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: Color.cloudyGrey,
                      fontFamily: Mulish.Medium,
                      paddingHorizontal: 5,
                    }}>
                    Or Login With
                  </Text>
                </View>
                <View
                  style={{
                    width: scr_width / 3.3,
                    height: 0.5,
                    borderStyle: 'dashed',
                    borderWidth: 0.5,
                    backgroundColor: Color.softGrey,
                    borderRadius: 1,
                  }}></View>
              </View>

              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginVertical: 20,
                }}>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    height: 55,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 30,
                    borderWidth: 1,
                    borderColor: '#C5C5C5',
                  }}>
                  <Image
                    source={require('../../assets/Images/google.png')}
                    style={{ width: 24, height: 24, resizeMode: 'contain' }}
                  />
                  <Text
                    style={{
                      fontSize: 18,
                      color: Color.cloudyGrey,
                      fontFamily: Mulish.SemiBold,
                      paddingHorizontal: 10,
                    }}>
                    Google
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    width: 10,
                    height: '100%',
                    backgroundColor: Color.white,
                  }}></View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Login')}
                  style={{
                    flex: 1,
                    height: 55,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 30,
                    borderWidth: 1,
                    borderColor: '#C5C5C5',
                  }}>
                  <Iconviewcomponent
                    viewstyle={{ alignItems: 'center', justifyContent: 'center' }}
                    Icontag="Ionicons"
                    icon_size={24}
                    icon_color={'#2C83EA'}
                    iconname="call"
                  />
                  <Text
                    style={{
                      fontSize: 18,
                      color: Color.cloudyGrey,
                      fontFamily: Mulish.SemiBold,
                      paddingHorizontal: 10,
                    }}>
                    Phone
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 20,
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    color: Color.Venus,
                    fontFamily: Mulish.Medium,
                    paddingHorizontal: 5,
                  }}>
                  Don’t have an account?{' '}
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('SimTest')}>
                  <Text
                    style={{
                      fontSize: 20,
                      color: Color.primary,
                      fontFamily: Mulish.SemiBold,
                    }}>
                    Sign up
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}></View>
        </View>
      </ScrollView>
      {/* Forgot Password */}
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={350}
        customStyles={{
          wrapper: {
            backgroundColor: '#00000088',
          },
          container: {
            backgroundColor: 'white',
          },
        }}>
        <View style={{ flex: 1, backgroundColor: Color?.white, padding: 20 }}>
          <View style={{ flex: 1 }}>
            <Image
              source={require('../../assets/Logos/cignix.png')}
              style={[styles.image]}
            />
            <Text
              style={{
                fontSize: 30,
                color: Color.black,
                fontFamily: Mulish.Bold,
                paddingVertical: 5,
              }}>
              Welcome Back,
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: Color.cloudyGrey,
                fontFamily: Mulish.Medium,
              }}>
              Reset Password with your Email
            </Text>
            <View style={{ marginTop: scr_height / 50 }}>
              <View style={styles.NumberBoxConatiner}>
                <View
                  style={{
                    flexDirection: 'row',
                    padding: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginHorizontal: 10,
                  }}>
                  <Iconviewcomponent
                    viewstyle={{
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    Icontag="MaterialCommunityIcons"
                    icon_size={25}
                    icon_color={Color.grey}
                    iconname="email-outline"
                  />
                </View>
                <TextInput
                  placeholder="Enter Your Email ID"
                  placeholderTextColor={Color.grey}
                  keyboardType="email-address"
                  value={Changepassowrd}
                  onChangeText={value => {
                    setChangepassowrd(value);
                  }}
                  style={styles.numberTextBox}
                />
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: 20,
              borderRadius: 10,
              backgroundColor: Color.primary,
            }}
            onPress={() => {
              Resetpassword();
            }}>
            {Changepassowrdloader ? (
              <ActivityIndicator size="small" color={Color.white} />
            ) : (
              <Text
                style={{
                  color: Color?.white,
                  fontSize: 16,
                  fontFamily: Mulish?.SemiBold,
                }}>
                Send Password Reset Link
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </RBSheet>
    </KeyboardAvoidingView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: scr_width,
    alignItems: 'center',
    backgroundColor: Color.white,
  },
  scrollContent: {
    width: scr_width,
    alignItems: 'center',
    padding: 20,
    justifyContent: 'center',
  },
  image: {
    width: 160,
    height: 80,
    resizeMode: 'contain',
  },
  NumberBoxConatiner: {
    width: '100%',
    display: 'flex',
    borderColor: Color.grey,
    borderWidth: 1,
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
  },
  numberCountryCode: {
    color: Color.black,
    fontSize: 16,
    fontFamily: Mulish.SemiBold,
    textAlign: 'center',
    alignItems: 'center',
    // padding: 10,
  },
  invalidLogin: {
    fontSize: 12,
    fontFamily: Mulish.Light,
    color: Color.red,
    textAlign: 'left',
    marginTop: 10,
  },
  numberTextBox: {
    flex: 1,
    display: 'flex',
    height: 55,
    // borderLeftColor: Color.grey,
    // borderLeftWidth: 1,
    color: Color.black,
    fontSize: 16,
    padding: 5,
    paddingTop: 5,
    paddingHorizontal: 10,
    fontFamily: Mulish.SemiBold,
    alignItems: 'flex-start',
  },
});

//make this component available to the app
export default EmailPassword;
