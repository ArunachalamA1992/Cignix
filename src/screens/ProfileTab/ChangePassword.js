//import liraries
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect, useCallback } from 'react';
import {
    StyleSheet,
    Text,
    Animated,
    View,
    ScrollView,
    Image,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    Dimensions,
    LogBox,
    StatusBar,
    FlatList,
    PermissionsAndroid,
    Modal,
    NativeEventEmitter,
    NativeModules,
    TextInput,
    ImageBackground,
    Alert,
    Pressable,
} from 'react-native';
import Color from '../../Global/Color';
import { scr_height, scr_width } from '../../Components/Dimensions';
import { Mulish } from '../../Global/FontFamily';
import { Iconviewcomponent } from '../../Components/Icontag';
import common_fn from '../../Components/common_fn';
import fetchData from '../../Config/fetchData';
import { ActivityIndicator } from 'react-native-paper';
// import { TextInput, Provider as PaperProvider } from 'react-native-paper';

// create a component
const ChangePassword = () => {

    const navigation = useNavigation();
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [loader, setloading] = useState(false);

    const [password_visible, setPasswordvisibility] = useState(false);
    const [newpassword_visible, setNewPasswordvisibility] = useState(false);
    const [confirmnewpassword_visible, setConfirmNewPasswordvisibility] = useState(false);
    // PASSWORD VALIDATION
    const validatePassword = (password) => {
        const regex = {
            length: /.{6,}/, // Minimum 6 characters
            uppercase: /[A-Z]/, // At least one uppercase letter
            lowercase: /[a-z]/, // At least one lowercase letter
            number: /\d/, // At least one number
            specialChar: /[!@#$%^&*(),.?":{}|<>]/, // At least one special character
        };

        const errors = {};
        if (!regex.length.test(password)) {
            errors.length = 'Password must be at least 6 characters.';
        }
        if (!regex.uppercase.test(password)) {
            errors.uppercase = 'Password must include at least one uppercase letter.';
        }
        if (!regex.lowercase.test(password)) {
            errors.lowercase = 'Password must include at least one lowercase letter.';
        }
        if (!regex.number.test(password)) {
            errors.number = 'Password must include at least one number.';
        }
        if (!regex.specialChar.test(password)) {
            errors.specialChar = 'Password must include at least one special character.';
        }

        return errors;
    };
    // PASSWORD CHANGE FUNCTION : 
    const handleSubmit = async () => {
        try {
            setloading(true);
            console.log("value in Changepassowrd", currentPassword, newPassword, confirmPassword);
            if (currentPassword == "" && newPassword == "" && confirmPassword == "") {
                common_fn.showToast("Please fill out the required forms to register.");
                setloading(false);
            } else {
                if (newPassword !== confirmPassword) {

                    common_fn.showToast("New password and confirm password does not match.");
                    setloading(false);
                } else {
                    const passwordvalue = {

                        currentPassword: currentPassword,
                        newPassword: newPassword

                    }
                    const Updatepassword = await fetchData?.ChangePassword(passwordvalue);
                    if (Updatepassword?.success == true) {
                        common_fn.showToast(Updatepassword?.message);
                        navigation.goBack();
                        setloading(false);
                    }
                    else {
                        common_fn.showToast(Updatepassword?.message);
                        setloading(false);
                    }

                }


            }
        } catch (error) {
            console.log("Catch in ChangePassword", error);
        }
    };
    return (
        <ScrollView
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false} style={{ padding: 20, backgroundColor: '#fff' }}>
            <View style={{ backgroundColor: Color?.white, flexDirection: 'row', paddingLeft: 5, marginVertical: 20 }}>
                <Pressable style={{ width: scr_width / 5 }}
                    onPress={() => {
                        navigation?.goBack();
                    }}
                >
                    <Iconviewcomponent
                        // viewstyle={{ alignItems: 'center', justifyContent: 'center' }}
                        Icontag="Ionicons"
                        icon_size={25}
                        icon_color={'#000'}
                        iconname={'chevron-back'}
                    />
                </Pressable>
                <View>
                    <Text style={{ fontFamily: Mulish?.SemiBold, fontSize: 22, color: "#000" }}>Change Password</Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ width: '100%', justifyContent: 'flex-start', alignItems: 'center', marginVertical: 5 }}>
                    <Text style={{ padding: 10, textAlign: 'justify', fontSize: 16, color: Color.cloudyGrey, letterSpacing: 0.5, lineHeight: 25, paddingVertical: 10 }}>A strong password is key for security: use 12-16 characters with a mix of uppercase, lowercase, numbers, and symbols. Avoid common words and personal info.</Text>
                    <View style={{ width: '95%', marginVertical: 10 }}>
                        <View style={styles.NumberBoxConatiner}>
                            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center', marginHorizontal: 10 }}>
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
                                style={[styles.numberTextBox, errors.currentPassword && styles.errorBorder]}
                                placeholder="Enter Current Password"
                                placeholderTextColor={Color.lightgrey}
                                secureTextEntry={!password_visible}
                                value={currentPassword}
                                onChangeText={setCurrentPassword}
                            />
                        </View>
                        {/* {errors.currentPassword && <Text style={styles.errorText}>{errors.currentPassword}</Text>} */}

                        {/* New Password */}
                        <View style={styles.NumberBoxConatiner}>
                            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center', marginHorizontal: 10 }}>
                                <TouchableOpacity
                                    onPress={() => setNewPasswordvisibility(!newpassword_visible)}
                                    style={styles.numberCountryCode}>
                                    <Iconviewcomponent
                                        viewstyle={{ alignItems: 'center', justifyContent: 'center' }}
                                        Icontag="MaterialCommunityIcons"
                                        icon_size={24}
                                        icon_color={Color.grey}
                                        iconname={!newpassword_visible ? 'eye-off' : 'eye'}
                                    />
                                </TouchableOpacity>
                            </View>
                            <TextInput
                                style={[styles.numberTextBox, errors.newPassword && styles.errorBorder]}
                                placeholder="Enter New Password"
                                placeholderTextColor={Color.lightgrey}
                                secureTextEntry={!newpassword_visible}
                                value={newPassword}
                                onChangeText={setNewPassword}
                            />
                        </View>


                        {/* Confirm Password */}
                        <View style={styles.NumberBoxConatiner}>
                            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center', marginHorizontal: 10 }}>
                                <TouchableOpacity
                                    onPress={() => setConfirmNewPasswordvisibility(!confirmnewpassword_visible)}
                                    style={styles.numberCountryCode}>
                                    <Iconviewcomponent
                                        viewstyle={{ alignItems: 'center', justifyContent: 'center' }}
                                        Icontag="MaterialCommunityIcons"
                                        icon_size={24}
                                        icon_color={Color.grey}
                                        iconname={!confirmnewpassword_visible ? 'eye-off' : 'eye'}
                                    />
                                </TouchableOpacity>
                            </View>
                            <TextInput
                                style={[styles.numberTextBox, errors.confirmPassword && styles.errorBorder]}
                                placeholder="Retype New Password"
                                placeholderTextColor={Color.lightgrey}
                                value={confirmPassword}
                                secureTextEntry={!confirmnewpassword_visible}
                                onChangeText={setConfirmPassword}
                            />
                        </View>
                        {/* {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}

                        {Object.values(validatePassword(newPassword)).map((err, index) => (
                            <Text key={index} style={styles.errorText}>
                                {err}
                            </Text>
                        ))} */}
                    </View>
                </View>
                <View style={{ width: '95%', justifyContent: 'center', alignItems: 'center', top: 50 }}>
                    <TouchableOpacity onPress={() => common_fn.showToast("Still Progress")}
                        style={{ width: '100%', height: 55, justifyContent: 'center', alignItems: 'center', backgroundColor: Color.white, borderColor: Color.grey, borderWidth: 1, borderRadius: 30, marginVertical: 20 }}>
                        <Text style={{ fontSize: 18, color: Color.cloudyGrey, fontFamily: Mulish.SemiBold }}>Forget Password</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleSubmit} style={{ width: '100%', height: 55, justifyContent: 'center', alignItems: 'center', backgroundColor: Color.primary, borderRadius: 30, marginVertical: 10 }}>
                        {
                            loader ?
                                (
                                    <ActivityIndicator size="small" color={Color.white} />
                                ) :
                                (
                                    <Text style={{ fontSize: 18, color: Color.white, fontFamily: Mulish.SemiBold }}>Change Password</Text>
                                )
                        }
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: scr_height,
        alignItems: 'center',
        backgroundColor: Color.white,
    },
    NumberBoxConatiner: {
        width: '100%',
        display: "flex",
        borderColor: Color.grey,
        borderWidth: 1,
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5, marginVertical: 10
    },
    numberCountryCode: {
        color: Color.cloudyGrey,
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
    input: {
        width: '95%',
        height: 60,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        // padding: 10,
        // marginBottom: 10,
        backgroundColor: '#fff', marginVertical: 10,
    },
    errorBorder: {
        borderColor: 'red',
    },
    errorText: {
        width: '100%', textAlign: 'left',
        color: 'red',
        fontSize: 12,
        padding: 5,
        paddingHorizontal: 5
    },
    button: {
        backgroundColor: '#6200EE',
        paddingVertical: 12,
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

//make this component available to the app
export default ChangePassword;
