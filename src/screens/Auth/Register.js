//import liraries
import React, { useEffect, useState } from 'react';
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
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from 'react-native';
import Color from '../../Global/Color';
import { Mulish } from '../../Global/FontFamily';
import { Iconviewcomponent } from '../../Components/Icontag';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { BottomSheet } from 'react-native-btr';
import common_fn from '../../Components/common_fn';
import { scr_width } from '../../Components/Dimensions';
import fetchData from '../../Config/fetchData';
import AsyncStorage from '@react-native-async-storage/async-storage';

// create a component
const Register = ({ navigation, route }) => {
  const routedata = route?.params;
  console.log('jnvjnbjvb', routedata);
  const [uname, setUname] = useState('');
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [emailValidError, setEmailValidError] = useState('');
  const [number, setNumber] = useState('');
  const [date, setDate] = useState(null);
  const [show, setShow] = useState(false);

  const [selectGender, setSelectGender] = useState(null);
  const [selectGenderId, setSelectGenderId] = useState('0');
  const [password, setPassword] = useState('');
  const [password_visible, setPasswordvisibility] = useState(false);
  const [loader, setloading] = useState(false);
  const [minPass, setMinPass] = useState('');
  const [selectGenderbottomSheetVisible, setSelectGenderbottomSheetVisible] =
    useState(false);
  const [genderData, setGenderData] = useState([
    {
      id: '0',
      gender: 'male',
    },
    {
      id: '1',
      gender: 'female',
    }
  ]);

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

  const chkNumber = number => {
    setNumber(number);
    if (number.length == 10) {
      Keyboard.dismiss();
    }
  };

  const chkNumberError = number => {
    let reg = /^[6-9][0-9]*$/;

    if (number.length === 0) {
      setError('Enter Your Mobile Number');
    } else if (reg.test(number) === false) {
      setError(false);
      setError(false);
    } else if (reg.test(number) === true) {
      setError('');
    }
  };

  // Open the date picker
  const showDatePicker = () => {
    setShow(true);
  };

  // Handle the date selection
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false); // Hide the picker after selection
    setDate(currentDate);
  };

  // Format the date as dd/mm/yyyy
  const formatDate = date => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  // DATE FUNCTION :
  const datevalue = async (value) => {
    const date = new Date(value);
    date.setDate(date.getDate() + 6);
    const formattedDate = date.toISOString().split('T')[0];
    console.log("formattedDate", formattedDate);
    return formattedDate
  }
  //  REGISTER FUNCTION :
  const registerClick = async () => {
    try {
      setloading(true);
      // console.log("============= REGISTER ============";
      if (uname && email && number && password) {
        const dateee = datevalue(date);
        const Registerdata = {
          name: uname,
          email: email,
          mobile: number,
          dob: dateee?._z,
          gender: selectGender,
          password: password,
          step: 0,
          total_points: routedata?.totalScore
        }

        const Registerapi = await fetchData?.Register(Registerdata);
        if (Registerapi?.success == true) {
          await AsyncStorage.setItem('ACCESS_TOKEN', Registerapi?.token);
          await AsyncStorage.setItem(
            'USERDATA',
            JSON.stringify(Registerapi?.data),
          );
          navigation.navigate('Tab');

          common_fn.showToast(Registerapi?.message);
          setloading(false);
        } else {
          common_fn.showToast(Registerapi?.message);
          setloading(false);
        }

      } else {
        common_fn.showToast('Please fill out the required forms to register.');
        setloading(false);
      }
    } catch (error) {
      console.log('catch in register_Click : ', error);
      setloading(false);
    }
  };

  function selectGender_toggleBottomView() {
    try {
      setSelectGenderbottomSheetVisible(!selectGenderbottomSheetVisible);
    } catch (error) {
      console.log('catch in Register_toggleBottomView :', error);
    }
  }

  function selGender_BottomSheetmenu() {
    try {
      return (
        <View>
          <BottomSheet
            visible={selectGenderbottomSheetVisible}
            onBackButtonPress={selectGender_toggleBottomView}
            onBackdropPress={selectGender_toggleBottomView}>
            <View
              style={{
                backgroundColor: Color.white,
                alignItems: 'center',
                borderTopStartRadius: 30,
                borderTopEndRadius: 30,
              }}>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  padding: 15,
                  paddingStart: 30,
                  backgroundColor: '#FBE9EF',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: Color.lightBlack,
                    fontFamily: Mulish.SemiBold,
                  }}>
                  Select Gender
                </Text>
                <TouchableOpacity
                  onPress={() => setSelectGenderbottomSheetVisible(false)}>
                  <Iconviewcomponent
                    Icontag={'AntDesign'}
                    iconname={'closecircleo'}
                    icon_size={22}
                    iconstyle={{ color: Color.primary, marginRight: 10 }}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ width: '95%' }}>
                {genderData.map((item, index) => {
                  return (
                    <View key={index} style={{ width: '100%' }}>
                      <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => selectedItem(item)}
                        style={{
                          alignItems: 'center',
                          padding: 5,
                          backgroundColor:
                            selectGender === item.gender
                              ? Color.primary
                              : Color.white,
                        }}>
                        <Text
                          style={{
                            textAlign: 'center',
                            fontSize: 16,
                            color:
                              selectGender === item.gender
                                ? Color.white
                                : Color.cloudyGrey,
                            marginVertical: 5,
                            fontFamily: Mulish.SemiBold,
                            padding: 5,
                          }}>
                          {item.gender}
                        </Text>
                      </TouchableOpacity>
                      <View
                        style={{
                          width: '100%',
                          height: 3,
                          backgroundColor: Color.softGrey,
                          marginVertical: 5,
                        }}></View>
                    </View>
                  );
                })}
              </View>
            </View>
          </BottomSheet>
        </View>
      );
    } catch (error) {
      console.log('catch in Register selGender_BottomSheet_menu :', error);
    }
  }

  const selectedItem = item => {
    try {
      // console.log("Item ======================= :", item);
      setSelectGender(item.gender);
      setSelectGenderId(item.gender.id);
      setSelectGenderbottomSheetVisible(false);
    } catch (error) {
      console.log('catch in Register_selectedItem:', error);
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
        <View
          style={{
            width: '100%',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}>
          <Image
            source={require('../../assets/Logos/cignix.png')}
            style={[styles.image]}
          />
        </View>
        <Text style={styles.header}>Let’s Get Started</Text>
        <Text
          style={{
            fontSize: 14,
            color: Color.cloudyGrey,
            fontFamily: Mulish.Light,
            letterSpacing: 0.5,
            paddingVertical: 10,
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ante
          sapien.
        </Text>

        <View style={[styles.NumberBoxConatiner, { marginVertical: 10 }]}>
          <View
            style={{
              flexDirection: 'row',
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 10,
            }}>
            <Iconviewcomponent
              viewstyle={{ alignItems: 'center', justifyContent: 'center' }}
              Icontag="AntDesign"
              icon_size={24}
              icon_color={Color.grey}
              iconname="user"
            />
          </View>
          <TextInput
            placeholder="Enter Your Name *"
            placeholderTextColor={Color.grey}
            keyboardType="name-phone-pad"
            value={uname}
            onChangeText={text => {
              setUname(text);
            }}
            style={styles.numberTextBox}
          />
        </View>
        {/* {numberError ? <Text style={{ color: 'red', fontSize: 12 }}>{numberError}</Text> : null} */}

        <View style={[styles.NumberBoxConatiner, { marginVertical: 10 }]}>
          <View
            style={{
              flexDirection: 'row',
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 10,
            }}>
            <Iconviewcomponent
              viewstyle={{ alignItems: 'center', justifyContent: 'center' }}
              Icontag="MaterialCommunityIcons"
              icon_size={24}
              icon_color={Color.grey}
              iconname="email-outline"
            />
          </View>
          <TextInput
            placeholder="Enter Your Email ID *"
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

        <View style={[styles.NumberBoxConatiner, { marginVertical: 10 }]}>
          <View
            style={{
              flexDirection: 'row',
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 10,
            }}>
            <Image
              source={require('../../assets/Images/india.png')}
              style={{ width: 22, height: 22, resizeMode: 'contain' }}
            />
            <Text style={[styles.numberCountryCode, { paddingStart: 5 }]}>
              +91
            </Text>
          </View>
          <TextInput
            placeholder="Enter Your Mobile Number *"
            placeholderTextColor={Color.grey}
            value={number}
            keyboardType="phone-pad"
            maxLength={10}
            onChangeText={number => {
              chkNumber(number);
              chkNumberError(number);
            }}
            style={[styles.numberTextBox, { right: 10, }]}
          />
        </View>
        {/* {error && <Text style={styles.invalidLogin}>{error}</Text>} */}

        <View style={[styles.NumberBoxConatiner, { marginVertical: 10 }]}>
          <View
            style={{
              flexDirection: 'row',
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 10,
            }}>
            <Iconviewcomponent
              viewstyle={{ alignItems: 'center', justifyContent: 'center' }}
              Icontag="Fontisto"
              icon_size={24}
              icon_color={Color.grey}
              iconname="date"
            />
          </View>
          <TouchableOpacity onPress={showDatePicker} style={{ paddingLeft: 0 }}>
            <Text
              style={{
                fontSize: 16,
                color: date ? Color.black : Color.Venus,
                fontFamily: Mulish.SemiBold,
              }}>
              {date ? formatDate(date) : 'DD/MM/YYYY *'} {/* Show formatted date or placeholder */}
              {/* {formatDate(date)} */}
            </Text>
          </TouchableOpacity>
        </View>

        {show && (
          <DateTimePicker
            value={date || new Date()} // Current selected date
            mode="date" // Date picker mode
            display="default" // Style of the picker
            onChange={onChange} // Handler for date change
            maximumDate={new Date()} // Prevent selecting future dates
          />
        )}

        <TouchableOpacity
          onPress={() => selectGender_toggleBottomView()}
          style={[styles.NumberBoxConatiner, { marginVertical: 10 }]}>
          <View
            style={{
              flexDirection: 'row',
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 10,
            }}>
            <Image
              source={require('../../assets/Images/gender.png')}
              style={{ width: 20, height: 20, resizeMode: 'contain' }}
            />
          </View>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 0 }}>
            <View>
              <Text
                style={{
                  fontSize: 16,
                  color: selectGender ? Color.black : Color.Venus,
                  fontFamily: Mulish.SemiBold,
                }}>
                {selectGender ? selectGender : "Select Gender *"}
              </Text>
            </View>
            <View style={{ paddingHorizontal: 20 }}>
              <Iconviewcomponent
                viewstyle={{ alignItems: 'center', justifyContent: 'center' }}
                Icontag="FontAwesome"
                icon_size={20}
                icon_color={Color.grey}
                iconname={'caret-down'}
              />
            </View>
          </View>
        </TouchableOpacity>

        <View style={{ marginVertical: 10 }}>
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
                  viewstyle={{ alignItems: 'center', justifyContent: 'center' }}
                  Icontag="MaterialCommunityIcons"
                  icon_size={24}
                  icon_color={Color.grey}
                  iconname={!password_visible ? 'eye-off' : 'eye'}
                />
              </TouchableOpacity>
            </View>
            <TextInput
              style={[styles.numberTextBox, { right: 5 }]}
              placeholder="Password *"
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

        {/* <View style={{ width:scr_width/1.1,backgroundColor:'red', alignItems: 'center', padding: 5 }}>
                    <View style={{ width:scr_width/1.1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Text style={{ fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5 }}>By signing up, you agree to our </Text>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 16, color: Color.black, fontFamily: Mulish.SemiBold, letterSpacing: 0.5 }}>Terms & Conditions </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width:scr_width/1.1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingVertical: 3 }}>
                        <Text style={{ fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5 }}> and </Text>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 16, color: Color.black, fontFamily: Mulish.SemiBold, letterSpacing: 0.5 }}> Privacy Policy</Text>
                        </TouchableOpacity>
                    </View>
                </View> */}
        <View>
          <Text style={{ textAlign: 'justify', fontSize: 14, fontFamily: Mulish?.Medium, color: '#666666' }}>
            By signing up, you agree to our <Text style={{ textAlign: 'justify', color: '#000000', fontSize: 15 }} onPress={() => {
              console.log("clicked Terms & Conditions");

            }}>Terms & Conditions</Text> and{' '}
            <Text style={{ textAlign: 'justify', lineHeight: 22, color: '#000000', fontSize: 16 }} onPress={() => {
              console.log("clicked Privacy Policy");
            }}>Privacy Policy</Text>
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => registerClick()}
          style={{
            width: '100%',
            height: 55,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: Color.primary,
            borderRadius: 30,
            marginVertical: 20,
          }}>
          {
            loader == true ?
              (
                <ActivityIndicator size="small" color={Color.white} />
              ) : (
                <Text
                  style={{
                    fontSize: 20,
                    color: Color.white,
                    fontFamily: Mulish.SemiBold,
                  }}>
                  Get Started
                </Text>
              )
          }

        </TouchableOpacity>

        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <Text
            style={{
              fontSize: 18,
              color: Color.Venus,
              fontFamily: Mulish.Medium,
              paddingHorizontal: 5,
            }}>
            Already have an account? {' '}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text
              style={{
                fontSize: 20,
                color: Color.primary,
                fontFamily: Mulish.SemiBold,
              }}>
              Log in
            </Text>
          </TouchableOpacity>
        </View>

        {selGender_BottomSheetmenu()}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
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
    color: Color.cloudyGrey,
    fontSize: 14,
    fontFamily: Mulish.SemiBold,
    textAlign: 'center',
    alignItems: 'center',
    paddingHorizontal: 0
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
    paddingHorizontal: 0,
    fontFamily: Mulish.SemiBold,
    alignItems: 'flex-start',
  },

  scrollContent: {
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontFamily: Mulish.SemiBold,
    color: Color.black,
    textAlign: 'left',
    // paddingHorizontal: 10
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#4CAF50',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

//make this component available to the app
export default Register;
