//import liraries
import React, { useEffect, useState } from 'react';
import {
    View,
    StyleSheet,
    Animated, Text,
    StatusBar, Image,
    SafeAreaView, ImageBackground,
    TouchableOpacity, TextInput, Keyboard, TouchableWithoutFeedback,
    ScrollView,
} from 'react-native';
import Color from '../../Global/Color';
import { scr_height, scr_width } from '../../Components/Dimensions';
import { Mulish } from '../../Global/FontFamily';
import { useDispatch } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';
import common_fn from '../../Components/common_fn';
import { Platform } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

// create a component
const Login = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const routeName = useRoute();
    const [number, setNumber] = useState('');
    const [error, setError] = useState(false);
    const [uniqueId, setUniqueId] = useState(false);
    const [userInfo, setUserInfo] = useState(false);


    const chkNumber = number => {
        // setNumber(number);
        // if (number.length == 10) {
        //     Keyboard.dismiss();
        // }
        const filteredText = number.replace(/[^0-9]/g, '');
        setNumber(filteredText);

        if (filteredText.length === 10) {
            Keyboard.dismiss();
        }
    };

    const chkNumberError = number => {
        // let reg = /^[6-9][0-9]*$/;

        // if (number.length === 0) {
        //     setError('Enter Your Mobile Number');
        // } else if (reg.test(number) === false) {
        //     setError(false);
        //     setError(false);
        // } else if (reg.test(number) === true) {
        //     setError('');
        // }

        let reg = /^[6-9][0-9]*$/; // Starts with 6-9 and contains digits only

        if (number.length === 0) {
            setError('Enter Your Mobile Number');
        } else if (!reg.test(number)) {
            setError('Enter a valid mobile number');
        } else {
            setError(''); // Clear the error if the input is valid
        }

    };

    const login = async () => {
        if (number.length == 10) {
            // const login = await fetchData.login({
            //     mobile_number: number,
            //     device_id: 2,
            // });
            // var { message, user_id } = login;
            // if (user_id) {
            //     if (Platform.OS === 'android') {
            //         common_fn.showToast('OTP Sent Successfully');
            //     } else {
            //         alert("OTP Sent Successfully")
            //     }
            //     navigation.navigate('OTP', { number, user_id });
            // } else {
            //     var msg = message;
            //     setError(msg);
            // }
            navigation.navigate('OTPScreen', { number: number });
        } else {
            if (Platform.OS === 'android') {
                common_fn.showToast('Invalid Phone Number, Please Enter Your 10 Digit Phone Number');
            } else {
                alert("Invalid Phone Number, Please Enter Your 10 Digit Phone Number")
            }
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                keyboardShouldPersistTaps="handled" >

                <StatusBar
                    hidden={false} // Hides the status bar
                    backgroundColor={Color.white} // Matches background color
                    translucent={true}
                    barStyle={'dark-content'}
                />

                <View style={{ width: scr_width, height: scr_height, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}></View>
                    <View style={{ flex: 4, width: '100%', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <View style={{ width: '100%', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                            <Image
                                source={require('../../assets/Logos/cignix_main.png')}
                                style={[styles.image]}
                            />
                        </View>
                        <View style={{ width: '100%', justifyContent: 'flex-start', alignItems: 'flex-start', paddingHorizontal: 20 }}>
                            <Text style={{ fontSize: 26, color: Color.black, fontFamily: Mulish.Bold, paddingVertical: 5 }}>Welcome Back,</Text>
                            <Text style={{ fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium }}>Login with your Mobile Number</Text>

                            <View style={{ marginVertical: 20 }}>
                                <View style={styles.NumberBoxConatiner}>
                                    <View style={{ flexDirection: 'row', padding: 5, justifyContent: 'center', alignItems: 'center' }}>
                                        <Image
                                            source={require('../../assets/Images/india.png')}
                                            style={{ width: 20, height: 20, resizeMode: 'contain' }}
                                        />
                                        <Text style={[styles.numberCountryCode, { paddingHorizontal: 5 }]}>+91</Text>
                                    </View>
                                    <TextInput
                                        placeholder="Mobile Number"
                                        placeholderTextColor={Color.cloudyGrey}
                                        value={number}
                                        keyboardType="numeric"
                                        maxLength={10}
                                        autoFocus={number.length == 10 ? false : true}
                                        onChangeText={number => {
                                            chkNumber(number);
                                            chkNumberError(number);
                                        }}
                                        style={styles.numberTextBox}
                                    />
                                </View>
                                {error && <Text style={styles.invalidLogin}>{error}</Text>}
                            </View>

                            <TouchableOpacity onPress={() => login()} style={{ width: '100%', height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: Color.primary, borderRadius: 30, marginVertical: 10 }}>
                                <Text style={{ fontSize: 16, color: Color.white, fontFamily: Mulish.SemiBold }}>Get OTP</Text>
                            </TouchableOpacity>

                            <View style={{ width: '95%', flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
                                <View style={{ width: '40%', height: 0.5, borderStyle: 'dashed', borderWidth: 0.5, backgroundColor: Color.softGrey, borderRadius: 1 }}></View>
                                <View>
                                    <Text style={{ fontSize: 12, color: Color.cloudyGrey, fontFamily: Mulish.Medium, paddingHorizontal: 5 }}>Or Login With</Text>
                                </View>
                                <View style={{ width: '40%', height: 0.5, borderStyle: 'dashed', borderWidth: 0.5, backgroundColor: Color.softGrey, borderRadius: 1 }}></View>
                            </View>

                            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 20 }}>
                                <TouchableOpacity style={{ flex: 1, height: 50, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 30, borderWidth: 1, borderColor: '#C5C5C5' }}>
                                    <Image
                                        source={require('../../assets/Images/google.png')}
                                        style={{ width: 20, height: 20, resizeMode: 'contain' }}
                                    />
                                    <Text style={{ fontSize: 16, color: Color.cloudyGrey, fontFamily: Mulish.SemiBold, paddingHorizontal: 10 }}>Google</Text>
                                </TouchableOpacity>
                                <View style={{ width: 20, height: '100%', backgroundColor: Color.white }}></View>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate("EmailPassword")}
                                    style={{ flex: 1, height: 50, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 30, borderWidth: 1, borderColor: '#C5C5C5' }}>
                                    <Image
                                        source={require('../../assets/Images/pass.png')}
                                        style={{ width: 20, height: 20, resizeMode: 'contain' }}
                                    />
                                    <Text style={{ fontSize: 16, color: Color.cloudyGrey, fontFamily: Mulish.SemiBold, paddingHorizontal: 10 }}>Password</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}>
                                <Text style={{ fontSize: 16, color: Color.Venus, fontFamily: Mulish.Medium, paddingHorizontal: 5 }}>Don’t have an account? </Text>
                                <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                                    <Text style={{ fontSize: 18, color: Color.primary, fontFamily: Mulish.SemiBold }}>Sign up</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}></View>
                </View>

            </ScrollView>
        </KeyboardAvoidingView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1, width: scr_width,
        alignItems: 'center',
        backgroundColor: Color.white,
    },
    scrollContent: {
        width: scr_width, alignItems: 'center',
        padding: 20,
        justifyContent: 'center',
    },
    image: {
        width: 170, height: 80, resizeMode: 'contain'
    },
    NumberBoxConatiner: {
        width: '100%',
        display: "flex",
        borderColor: Color.grey,
        borderWidth: 1,
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
    },
    numberCountryCode: {
        color: Color.lightBlack,
        fontSize: 12,
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
        marginTop: 5,
    },
    numberTextBox: {
        flex: 1,
        display: 'flex',
        height: 55,
        borderLeftColor: Color.grey,
        borderLeftWidth: 1,
        color: Color.black,
        fontSize: 14,
        padding: 5,
        paddingTop: 5,
        paddingHorizontal: 10,
        fontFamily: Mulish.SemiBold,
        alignItems: 'flex-start',
    },
});

//make this component available to the app
export default Login;
