//import liraries
import React, { useEffect, useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
} from 'react-native';
import Color from '../../Global/Color';
import { scr_height, scr_width } from '../../Components/Dimensions';
import { Mulish } from '../../Global/FontFamily';
import { Iconviewcomponent } from '../../Components/Icontag';

// create a component
const FAQs = () => {
    return (
        <ScrollView
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false} >
            <View style={styles.container}>

                <View style={{ width: '100%', alignItems: 'center', marginVertical: 10 }}>
                    <View style={{ width: '100%', padding: 10, paddingVertical: 20, backgroundColor: '#f3f4f6', paddingHorizontal: 10 }}>
                        <Text style={{ fontSize: 18, color: Color.black, fontFamily: Mulish.Bold }}>What is Cignix</Text>
                    </View>
                    <Text style={{ width: '100%', textAlign: 'justify', fontSize: 16, padding: 10, color: Color.cloudyGrey, fontFamily: Mulish.SemiBold, paddingHorizontal: 10, letterSpacing: 0.5, lineHeight: 25 }}>Embark on your journey to quit smoking with Cignix. With our simple resources and dedicated support, you're never alone on this path.</Text>
                </View>
                <View style={{ width: '100%', height: 3, backgroundColor: Color.softGrey, marginVertical: 10 }}></View>
                <View style={{ width: '100%', alignItems: 'center', }}>
                    <View style={{ width: '100%', padding: 10, paddingVertical: 20, backgroundColor: '#f3f4f6', paddingHorizontal: 10 }}>
                        <Text style={{ fontSize: 18, color: Color.black, fontFamily: Mulish.Bold }}>How does Cignix work?</Text>
                    </View>
                    <Text style={{ width: '100%', textAlign: 'justify', fontSize: 16, padding: 10, color: Color.cloudyGrey, fontFamily: Mulish.SemiBold, paddingHorizontal: 10, letterSpacing: 0.5, lineHeight: 25 }}>Cignix provides you with step-by-step guidance through expert videos, personalized dashboards, and tracking tools to support you in quitting smoking. The program is designed to your habits and progress, ensuring a customized experience.</Text>
                </View>
                <View style={{ width: '100%', height: 3, backgroundColor: Color.softGrey, marginVertical: 10 }}></View>
                <View style={{ width: '100%', alignItems: 'center', }}>
                    <View style={{ width: '100%', padding: 10, paddingVertical: 20, backgroundColor: '#f3f4f6', paddingHorizontal: 10 }}>
                        <Text style={{ fontSize: 18, color: Color.black, fontFamily: Mulish.Bold }}>Can I use Cignix on my smartphone?</Text>
                    </View>
                    <Text style={{ width: '100%', textAlign: 'justify', fontSize: 16, padding: 10, color: Color.cloudyGrey, fontFamily: Mulish.SemiBold, paddingHorizontal: 10, letterSpacing: 0.5, lineHeight: 25 }}>Absolutely! Download our app from the App Store or Google Play to access Cignix anytime, anywhere.</Text>
                </View>
                <View style={{ width: '100%', height: 3, backgroundColor: Color.softGrey, marginVertical: 10 }}></View>
                <View style={{ width: '100%', alignItems: 'center', }}>
                    <View style={{ width: '100%', padding: 10, paddingVertical: 20, backgroundColor: '#f3f4f6', paddingHorizontal: 10 }}>
                        <Text style={{ fontSize: 18, color: Color.black, fontFamily: Mulish.Bold }}>Do I need to pay to use Cignix?</Text>
                    </View>
                    <Text style={{ width: '100%', textAlign: 'justify', fontSize: 16, padding: 10, color: Color.cloudyGrey, fontFamily: Mulish.SemiBold, paddingHorizontal: 10, letterSpacing: 0.5, lineHeight: 25 }}>Yes, you need to pay a one-fee of ₹4999 in order to get lifetime access to the videos.</Text>
                </View>
                <View style={{ width: '100%', height: 3, backgroundColor: Color.softGrey, marginVertical: 10 }}></View>
                <View style={{ width: '100%', alignItems: 'center', }}>
                    <View style={{ width: '100%', padding: 10, paddingVertical: 20, backgroundColor: '#f3f4f6', paddingHorizontal: 10 }}>
                        <Text style={{ fontSize: 18, color: Color.black, fontFamily: Mulish.Bold }}>Who can use Cignix?</Text>
                    </View>
                    <Text style={{ width: '100%', textAlign: 'justify', fontSize: 16, padding: 10, color: Color.cloudyGrey, fontFamily: Mulish.SemiBold, paddingHorizontal: 10, letterSpacing: 0.5, lineHeight: 25 }}>Anyone who wants to quit smoking can use Cignix, regardless of how long or how much they’ve been smoking. Individuals above the age of 18 are eligible to use Cignix.</Text>
                </View>
                <View style={{ width: '100%', height: 3, backgroundColor: Color.softGrey, marginVertical: 10 }}></View>
                <View style={{ width: '100%', alignItems: 'center', }}>
                    <View style={{ width: '100%', padding: 10, paddingVertical: 20, backgroundColor: '#f3f4f6', paddingHorizontal: 10 }}>
                        <Text style={{ fontSize: 18, color: Color.black, fontFamily: Mulish.Bold }}>Can I sync my progress across devices?</Text>
                    </View>
                    <Text style={{ width: '100%', textAlign: 'justify', fontSize: 16, padding: 10, color: Color.cloudyGrey, fontFamily: Mulish.SemiBold, paddingHorizontal: 10, letterSpacing: 0.5, lineHeight: 25 }}>Yes, your progress is stored in your account and can be accessed across multiple devices by logging in.</Text>
                </View>
                <View style={{ width: '100%', height: 3, backgroundColor: Color.softGrey, marginVertical: 10 }}></View>
                <View style={{ width: '100%', alignItems: 'center', }}>
                    <View style={{ width: '100%', padding: 10, paddingVertical: 20, backgroundColor: '#f3f4f6', paddingHorizontal: 10 }}>
                        <Text style={{ fontSize: 18, color: Color.black, fontFamily: Mulish.Bold }}>Is my personal data safe with Cignix?</Text>
                    </View>
                    <Text style={{ width: '100%', textAlign: 'justify', fontSize: 16, padding: 10, color: Color.cloudyGrey, fontFamily: Mulish.SemiBold, paddingHorizontal: 10, letterSpacing: 0.5, lineHeight: 25 }}>Absolutely. Cignix values your privacy and ensures that all your data is encrypted and securely stored.</Text>
                </View>

            </View>
        </ScrollView >
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: Color.white,
        marginBottom: 20
    },
    scrollContent: {
        width: '100%',
        // padding: 10,
        alignItems: 'center',
        backgroundColor: Color.white,
    },
});

//make this component available to the app
export default FAQs;
