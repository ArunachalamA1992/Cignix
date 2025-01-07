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
import { scr_height, scr_width } from '../../Components/Dimensions';
import Color from '../../Global/Color';
import { Mulish } from '../../Global/FontFamily';
import { Iconviewcomponent } from '../../Components/Icontag';
import { useNavigation } from '@react-navigation/native';

// create a component
const TechnicalSupport = () => {

    const navigation = useNavigation();
    return (
        <ScrollView
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={{ flex: 1, width: '95%', alignItems: 'center' }}>
                    <View style={{ width: '100%', }}>
                        <Text style={{ textAlign: 'justify', fontSize: 15, color: Color.cloudyGrey, fontFamily: Mulish.Medium, lineHeight: 22, letterSpacing: 0.5, paddingVertical: 0 }}>Cignix is dedicated to providing reliable and efficient technical support to ensure you have a smooth and seamless experience with our services. Our expert team is ready to assist you with any challenges you may face, helping you get back on track quickly and efficiently.</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 15, color: Color.cloudyGrey, fontFamily: Mulish.Medium, lineHeight: 22, letterSpacing: 0.5, paddingVertical: 5 }}>Common issues we solve:</Text>
                    </View>
                    <View style={{ marginVertical: 10 }}>
                        <Text style={{ textAlign: 'justify', fontSize: 18, color: Color.black, fontFamily: Mulish.SemiBold, letterSpacing: 0.5, marginVertical: 5 }}>Login Issues</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 15, color: Color.cloudyGrey, fontFamily: Mulish.Medium, lineHeight: 22, letterSpacing: 0.5, paddingVertical: 5 }}>Struggling to access your account? Whether it’s a forgotten password, account lockout, or a verification problem, our team is here to guide you through the process and ensure you regain access promptly.</Text>
                    </View>
                    <View style={{ marginVertical: 10 }}>
                        <Text style={{ textAlign: 'justify', fontSize: 18, color: Color.black, fontFamily: Mulish.SemiBold, letterSpacing: 0.5, marginVertical: 5 }}>Troubleshooting App Errors</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 15, color: Color.cloudyGrey, fontFamily: Mulish.Medium, lineHeight: 22, letterSpacing: 0.5, paddingVertical: 5 }}>Encountering errors or glitches while using our app or platform? We provide step-by-step assistance to diagnose and resolve technical issues, ensuring optimal performance.</Text>
                    </View>
                    <View style={{ marginVertical: 10 }}>
                        <Text style={{ textAlign: 'justify', fontSize: 18, color: Color.black, fontFamily: Mulish.SemiBold, letterSpacing: 0.5, marginVertical: 5 }}>Syncing Devices</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 15, color: Color.cloudyGrey, fontFamily: Mulish.Medium, lineHeight: 22, letterSpacing: 0.5, paddingVertical: 5 }}>Need help connecting and syncing devices with our platform? We assist with setup, configuration, and troubleshooting to ensure a seamless multi-device experience.</Text>
                    </View>
                    <View style={{ marginVertical: 10 }}>
                        <Text style={{ textAlign: 'justify', fontSize: 18, color: Color.black, fontFamily: Mulish.SemiBold, letterSpacing: 0.5, marginVertical: 5 }}>Restoring Lost Progress</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 15, color: Color.cloudyGrey, fontFamily: Mulish.Medium, lineHeight: 22, letterSpacing: 0.5, paddingVertical: 5 }}>Lost your progress or data? Don’t worry—our support team helps recover your information, so you can continue from where you left off without losing valuable time or effort.</Text>
                    </View>
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
        width: scr_width,
        alignItems: 'center',
        backgroundColor: Color.white,
    },
    scrollContent: {
        height: scr_height,
        width: scr_width,
        alignItems: 'center',
        padding: 20,
        justifyContent: 'center',
        backgroundColor: Color.white,
    },
});

//make this component available to the app
export default TechnicalSupport;
