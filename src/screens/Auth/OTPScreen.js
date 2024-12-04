import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Platform,
    ScrollView,
    TouchableWithoutFeedback,
    Keyboard,
    PermissionsAndroid,
    Modal,
} from 'react-native';
import { Button } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import RNOtpVerify from 'react-native-otp-verify';
import {
    StackActions,
    useFocusEffect,
    useNavigation,
} from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { Media } from '../../Global/Media';
import Color from '../../Global/Color';
import { Mulish } from '../../Global/FontFamily';
import OTPInput from '../../Components/OTPInput';
import common_fn from '../../Components/common_fn';
;;

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

const OTPScreen = ({ route }) => {
    const navigation = useNavigation();
    const [number] = useState(route.params.number);
    const inputRef = useRef();
    const [otpCode, setOTPCode] = useState('');
    const [isPinReady, setIsPinReady] = useState(false);
    const maximumCodeLength = 4;
    const [error, setError] = useState(false);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(30);
    const [loading, setLoading] = useState(false);
    const [token, setToken] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }

            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(interval);
                } else {
                    setSeconds(30);
                    setMinutes(minutes - 1);
                }
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [seconds]);

    const isMobile = input => {
        // const mobileRegex = /^[0-9]{10}$/;
        const mobileRegex = /^[6-9][0-9]{10}$/;
        return mobileRegex.test(input);
    };

    const ResendOTP = async number => {
        setSeconds(30);
        // alert('OTP Sent Successfully');
        // const ResendOtpVerify = await fetchData.login({ mobile_number: number });
        // var { message, user_id } = ResendOtpVerify;
        // if (user_id) {
        //     if (Platform.OS === 'android') {
        //         common_fn.showToast('OTP Sent Successfully');
        //     } else {
        //         alert('OTP Sent Successfully');
        //     }
        // } else {
        //     var msg = 'message';
        //     setError(msg);
        // }
    };

    const chkOTPError = OTP => {
        let reg = /^[6-9][0-9]*$/;

        if (OTP.length === 0) {
            setError('Enter Your OTP Code');
        } else if (reg.test(OTP) === false) {
            setError(false);
            setError(false);
        } else if (reg.test(OTP) === true) {
            setError('');
        }
    };


    const VerifyOTP = async () => {
        setLoading(true);
        console.log("otpCode ============== : ", otpCode);

        if (otpCode.length == 4) {
            console.log("Success ============== : ", otpCode);
            navigation.navigate('TabNavigator');
            // const VerifyOTP = await fetchData.verify_OTP({
            //     mobile_number: number,
            //     otp: otpCode,
            //     token: token,
            // });
            // // var {user_id} = VerifyOTP?.data;
            // console.log('navigation.replace', navigation.replace);
            // if (VerifyOTP?.message == 'Success') {
            //     var { user_id, username, mobile_number, email } = VerifyOTP?.data;
            //     const percentage = profileCompletion(
            //         user_id,
            //         username,
            //         mobile_number,
            //         email,
            //     );
            //     setPercentage(percentage);
            //     const UserLogin = { ...VerifyOTP?.data, };
            //     await AsyncStorage.setItem('user_data', JSON.stringify(VerifyOTP?.data),);
            //     await AsyncStorage.setItem('action_login_type', JSON.stringify({ login_type: 'properties' }),);
            //     // dispatch(setLoginType('properties'));
            //     if (percentage == 100) {
            //         // navigation.replace('TabNavigator', UserLogin);
            //         navigation.dispatch(StackActions.replace('TabNavigator'));
            //     } else {
            //         navigation.dispatch(StackActions.replace('TabNavigator'));
            //     }
            //     if (Platform.OS === 'android') {
            //         common_fn.showToast(`Welcome to Wall360 ${VerifyOTP?.data?.username}`);
            //     } else {
            //         alert(`Welcome to Wall360 ${VerifyOTP?.data?.username}`);
            //     }

            //     setLoading(false);
            // } else {
            //     setOTPCode('');
            //     inputRef.current.focus();
            //     var msg = VerifyOTP?.message;
            //     setError(msg);
            //     setLoading(false);
            // }
        } else {
            if (Platform.OS === 'android') {
                common_fn.showToast('Invalid OTP Code Please Enter Your 4 Digit OTP Code');
            } else {
                alert('Invalid OTP Code Please Enter Your 4 Digit OTP Code');
                setLoading(false);
            }
        }
    };

    // useEffect(() => {
    //     if (Platform.OS === 'android') {
    //         RNOtpVerify.getHash()
    //             .then(hash => console.log('Hash:', hash))
    //             .catch(error => console.error('Error getting hash:', error));

    //         startListeningForOtp();
    //     }
    // }, []);

    // useEffect(() => {
    //     // This block of code will execute whenever OTPCode changes
    //     console.log('OTPCode changed:', otpCode);
    // }, [otpCode]);

    // const otpHandler = message => {
    //     try {
    //         console.log('Received SMS for OTP processing:', message);
    //         const otpMatch = /(\d{4})/g.exec(message)[1];
    //         console.log('otpMatch', otpMatch);
    //         if (otpMatch && otpMatch[1]) {
    //             const otpDigit = otpMatch[1];

    //             // Append the new digit to the existing OTPCode
    //             setOTPCode(prevOTP => prevOTP + otpDigit);

    //             console.log('Updated OTP Code:', otpCode + otpDigit);

    //             // Check if the complete OTP is received
    //             if (otpCode.length + otpDigit.length === 4) {
    //                 console.log('Complete OTP received:', otpCode + otpDigit);
    //                 // Do any further processing or validation here
    //             }
    //         } else {
    //             console.log('No valid OTP found in the message:', message);
    //         }
    //     } catch (e) {
    //         console.error('Error extracting OTP:', e);
    //     }
    // };

    // const startListeningForOtp = () => {
    //     RNOtpVerify.getOtp()
    //         .then(receivedSMS => {
    //             console.log('Received SMS:', receivedSMS);
    //             // setOTPCode('1234');
    //             RNOtpVerify.addListener(otpHandler.bind(this));
    //         })
    //         .catch(error => console.error('Error getting SMS:', error));
    // };
    return (
        <ScrollView
            contentContainerStyle={{ justifyContent: 'center', flex: 1 }}
            keyboardShouldPersistTaps="handled">
            <DismissKeyboard>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: Color.white,
                        padding: 20,
                    }}>

                    <View
                        style={{
                            width: '100%',
                            alignItems: 'center',
                            paddingVertical: 20,
                        }}>
                        <Image
                            source={{ uri: Media.otp }}
                            style={{ width: 200, height: 200, resizeMode: 'contain' }}
                        />
                    </View>
                    <View
                        style={{
                            width: '100%',
                            marginVertical: 20,
                            justifyContent: 'center', alignItems: 'center'
                        }}>
                        <Text
                            style={{
                                fontFamily: Mulish.SemiBold,
                                fontSize: 18,
                                fontWeight: 'bold',
                                textAlign: 'center',
                                color: Color.black,
                                marginRight: 10,
                                marginVertical: 10,
                            }}>
                            Enter OTP
                        </Text>
                        <Text
                            style={{
                                fontSize: 14,
                                color: Color.cloudyGrey,
                                fontFamily: Mulish.Medium,
                                letterSpacing: 0.5,
                                paddingTop: 10,
                                textAlign: 'center',
                            }}>
                            Enter the verification code we sent to your number{' '}
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: Color.lightBlack,
                                    fontFamily: Mulish.SemiBold,
                                    letterSpacing: 0.5,
                                }}>
                                {isMobile(number) && countryCode?.mobile_prefix}
                                {number?.substring(0, 2).concat('*** **') +
                                    number.substring(7, 9) +
                                    number.substring(9)}
                            </Text>
                        </Text>
                        <Text style={styles.invalidLogin}>{error}</Text>
                        <View style={styles.otpInputView}>
                            <OTPInput
                                inputRef={inputRef}
                                code={otpCode}
                                setCode={setOTPCode}
                                maximumLength={4}
                                setIsPinReady={setIsPinReady}
                                chkOTPError={chkOTPError}
                            />
                        </View>
                        {seconds > 0 || minutes > 0 ? (
                            <View style={styles.noReceivecodeView}>
                                <Text style={styles.noReceiveText}>
                                    Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:
                                    {seconds < 10 ? `0${seconds}` : seconds}
                                </Text>
                            </View>
                        ) : (
                            <View style={styles.noReceivecodeView}>
                                <TouchableOpacity onPress={() => ResendOTP(number)}>
                                    <Text style={styles.resendOtp}>Resend OTP</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                        {/* <Button
                            title={'Submit'}
                            titleStyle={{}}
                            buttonStyle={{
                                width: '95%',
                                height: 50,
                                backgroundColor: Color.primary,
                                borderRadius: 10,
                                marginVertical: 10,
                            }}
                            onPress={() => {
                                VerifyOTP();
                            }}
                            loading={loading}
                        /> */}

                        <TouchableOpacity onPress={() => VerifyOTP()} style={{ width: '100%', height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: Color.primary, borderRadius: 30, marginVertical: 20 }}>
                            <Text style={{ fontSize: 16, color: Color.white, fontFamily: Mulish.SemiBold }}>Submit</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </DismissKeyboard>
        </ScrollView>
    );
};

export default OTPScreen;
const styles = StyleSheet.create({
    otpInputView: {
        marginHorizontal: 0,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    noReceivecodeView: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginVertical: 15,
        marginRight: 30,
    },
    noReceiveText: {
        color: Color.black,
        fontSize: 12,
        fontFamily: Mulish.SemiBold,
    },
    resendOtp: {
        color: Color.primary,
        fontSize: 13,
        fontFamily: Mulish.SemiBold,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        textAlign: 'right',
    },
    invalidLogin: {
        fontSize: 14,
        fontFamily: Mulish.SemiBold,
        color: Color.red,
        textAlign: 'center',
    },
});
