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
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import Color from '../../Global/Color';
import { Mulish } from '../../Global/FontFamily';
import { Iconviewcomponent } from '../../Components/Icontag';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { BottomSheet } from 'react-native-btr';
import common_fn from '../../Components/common_fn';
import { scr_width } from '../../Components/Dimensions';

// create a component
const Register = () => {

    const navigation = useNavigation();
    const [uname, setUname] = useState('');
    const [error, setError] = useState(false);
    const [email, setEmail] = useState('');
    const [emailValidError, setEmailValidError] = useState('');
    const [number, setNumber] = useState('');
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const [selectGender, setSelectGender] = useState('Male');
    const [selectGenderId, setSelectGenderId] = useState('0');
    const [password, setPassword] = useState('');
    const [password_visible, setPasswordvisibility] = useState(false);
    const [minPass, setMinPass] = useState('');
    const [selectGenderbottomSheetVisible, setSelectGenderbottomSheetVisible] = useState(false);
    const [genderData, setGenderData] = useState([
        {
            'id': '0',
            'gender': 'Male',
        },
        {
            'id': '1',
            'gender': 'Female',
        },
        {
            'id': '2',
            'gender': 'Transgender',
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
    const formatDate = (date) => {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };


    const registerClick = () => {
        try {
            // console.log("============= REGISTER ============");

            if (uname && email && number && password) {
                common_fn.showToast('Register Success');
                console.log("Name ============:" + uname + "\n" + "Email =========:" + email + '\n' + "Phone =========:" + number + '\n' +
                    "DOB =========:" + date + '\n' + "Gender ==========:" + selectGender + "\n" + "Password =========:" + password);

            } else {
                common_fn.showToast('Please fill out the required forms to register.');
            }

        } catch (error) {
            console.log("catch in register_Click : ", error);
        }
    }


    function selectGender_toggleBottomView() {
        try {
            setSelectGenderbottomSheetVisible(!selectGenderbottomSheetVisible);
        } catch (error) {
            console.log('catch in Register_toggleBottomView :', error,);
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
                                                    alignItems: 'center', padding: 5,
                                                    backgroundColor: selectGender === item.gender ? Color.primary : Color.white
                                                }}>
                                                <Text
                                                    style={{
                                                        textAlign: 'center',
                                                        fontSize: 16,
                                                        color: selectGender === item.gender ? Color.white : Color.cloudyGrey,
                                                        marginVertical: 5,
                                                        fontFamily: Mulish.SemiBold, padding: 5
                                                    }}>
                                                    {item.gender}
                                                </Text>
                                            </TouchableOpacity>
                                            <View style={{ width: '100%', height: 3, backgroundColor: Color.softGrey, marginVertical: 5 }}></View>
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

    const selectedItem = (item) => {
        try {
            // console.log("Item ======================= :", item);
            setSelectGender(item.gender);
            setSelectGenderId(item.gender.id);
            setSelectGenderbottomSheetVisible(false);
        } catch (error) {
            console.log('catch in Register_selectedItem:', error);
        }
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                keyboardShouldPersistTaps="handled" >
                <View style={{ width: scr_width, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                    <Image
                        source={require('../../assets/Logos/cignix_main.png')}
                        style={[styles.image]}
                    />
                </View>
                <View style={{ width: '100%', paddingHorizontal: 5, marginTop: 10 }}>
                    <Text style={styles.header}>Let’s Get Started</Text>
                    <Text style={{ fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, paddingVertical: 10 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ante sapien.</Text>
                </View>
                <View style={[styles.NumberBoxConatiner, { marginVertical: 10 }]}>
                    <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center', marginHorizontal: 10 }}>
                        <Iconviewcomponent
                            viewstyle={{ alignItems: 'center', justifyContent: 'center' }}
                            Icontag="AntDesign"
                            icon_size={22}
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
                            setUname(text)
                        }}
                        style={styles.numberTextBox}
                    />
                </View>
                {/* {numberError ? <Text style={{ color: 'red', fontSize: 12 }}>{numberError}</Text> : null} */}

                <View style={[styles.NumberBoxConatiner, { marginVertical: 10 }]}>
                    <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center', marginHorizontal: 10 }}>
                        <Iconviewcomponent
                            viewstyle={{ alignItems: 'center', justifyContent: 'center' }}
                            Icontag="MaterialCommunityIcons"
                            icon_size={22}
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
                    <View style={{ flexDirection: 'row', padding: 5, justifyContent: 'center', alignItems: 'center', marginHorizontal: 5 }}>
                        <Image
                            source={require('../../assets/Images/india.png')}
                            style={{ width: 20, height: 20, resizeMode: 'contain' }}
                        />
                        <Text style={[styles.numberCountryCode, { paddingHorizontal: 5 }]}>+91</Text>
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
                        style={[styles.numberTextBox, { paddingHorizontal: 0, }]}
                    />
                </View>
                {/* {error && <Text style={styles.invalidLogin}>{error}</Text>} */}

                <View style={[styles.NumberBoxConatiner, { marginVertical: 10 }]}>
                    <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center', marginHorizontal: 10 }}>
                        <Iconviewcomponent
                            viewstyle={{ alignItems: 'center', justifyContent: 'center' }}
                            Icontag="Fontisto"
                            icon_size={18}
                            icon_color={Color.grey}
                            iconname="date"
                        />
                    </View>
                    <TouchableOpacity onPress={showDatePicker}>
                        <Text style={{ fontSize: 14, color: Color.black, fontFamily: Mulish.SemiBold }}>{formatDate(date)}</Text>
                    </TouchableOpacity>
                </View>

                {show && (
                    <DateTimePicker
                        value={date} // Current selected date
                        mode="date" // Date picker mode
                        display="default" // Style of the picker
                        onChange={onChange} // Handler for date change
                        maximumDate={new Date()} // Prevent selecting future dates
                    />
                )}

                <TouchableOpacity onPress={() => selectGender_toggleBottomView()} style={[styles.NumberBoxConatiner, { marginVertical: 10 }]}>
                    <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center', marginHorizontal: 10 }}>
                        <Image
                            source={require('../../assets/Images/gender.png')}
                            style={{ width: 18, height: 18, resizeMode: 'contain' }}
                        />
                    </View>
                    <View >
                        <Text style={{ fontSize: 14, color: Color.black, fontFamily: Mulish.SemiBold }}>{selectGender}</Text>
                    </View>
                </TouchableOpacity>

                <View style={{ marginVertical: 10 }}>
                    <View style={styles.NumberBoxConatiner}>
                        <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center', marginHorizontal: 10 }}>
                            <TouchableOpacity
                                onPress={() => setPasswordvisibility(!password_visible)}
                                style={styles.numberCountryCode}>
                                <Iconviewcomponent
                                    viewstyle={{ alignItems: 'center', justifyContent: 'center' }}
                                    Icontag="MaterialCommunityIcons"
                                    icon_size={22}
                                    icon_color={Color.grey}
                                    iconname={!password_visible ? 'eye-off' : 'eye'}
                                />
                            </TouchableOpacity>
                        </View>
                        <TextInput
                            style={styles.numberTextBox}
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

                <View style={{ width: '95%', alignItems: 'center', padding: 5 }}>
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Text style={{ textAlign: 'justify', fontSize: 12, color: Color.cloudyGrey, fontFamily: Mulish.Medium }}>By signing up, you agree to our </Text>
                        <TouchableOpacity>
                            <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.black, fontFamily: Mulish.SemiBold }}>Terms & Conditions </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingVertical: 3 }}>
                        <Text style={{ textAlign: 'justify', fontSize: 12, color: Color.cloudyGrey, fontFamily: Mulish.Medium }}> and </Text>
                        <TouchableOpacity>
                            <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.black, fontFamily: Mulish.SemiBold }}> Privacy Policy</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity onPress={() => registerClick()} style={{ width: '100%', height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: Color.primary, borderRadius: 30, marginVertical: 20 }}>
                    <Text style={{ fontSize: 16, color: Color.white, fontFamily: Mulish.SemiBold }}>Get Started</Text>
                </TouchableOpacity>

                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 10 }}>
                    <Text style={{ fontSize: 16, color: Color.Venus, fontFamily: Mulish.Medium, paddingHorizontal: 5 }}>Already have an account?  </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <Text style={{ fontSize: 18, color: Color.primary, fontFamily: Mulish.SemiBold }}>Log in</Text>
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
        width: 180, height: 60, resizeMode: 'cover'
    },
    NumberBoxConatiner: {
        width: '100%',
        display: "flex",
        borderColor: Color.grey,
        borderWidth: 1,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
    },
    numberCountryCode: {
        color: Color.cloudyGrey,
        fontSize: 14,
        fontFamily: Mulish.Medium,
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
        height: 50,
        // borderLeftColor: Color.grey,
        // borderLeftWidth: 1,
        color: Color.black,
        fontSize: 14,
        padding: 5,
        paddingTop: 5,
        paddingHorizontal: 10,
        fontFamily: Mulish.SemiBold,
        alignItems: 'flex-start',
    },

    scrollContent: {
        padding: 20,
        justifyContent: 'center',
    },
    header: {
        fontSize: 22,
        fontWeight: Mulish.SemiBold,
        color: Color.black,
        textAlign: 'left',
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
