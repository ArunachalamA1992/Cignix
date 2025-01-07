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
const GetStarted = () => {
    return (
        <ScrollView
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled" >
            <View style={styles.container}>
                <Text style={{ textAlign: 'justify', fontSize: 16, color: Color.cloudyGrey, fontFamily: Mulish.SemiBold, letterSpacing: 0.5, lineHeight: 22 }}>Embark on your journey to quit smoking with Cignix. With our simple resources and dedicated support, you're never alone on this path.</Text>

                <View style={{ width: '100%', marginTop: 20 }}>
                    <Text style={{ textAlign: 'left', fontSize: 18, color: Color.black, fontFamily: Mulish.Black, letterSpacing: 0.5 }}>Sign Up</Text>

                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', paddingVertical: 5, }}>
                        <Iconviewcomponent
                            Icontag={'Entypo'}
                            iconname={'dot-single'}
                            icon_size={22}
                            icon_color={Color.primary}
                            iconstyle={{ marginTop: 0 }}
                        />
                        <Text style={{ width: '100%', paddingHorizontal: 10, fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, textAlign: 'justify', letterSpacing: 0.5, lineHeight: 22, }}>Head over to the landing page of Cignix and click on the <Text style={{ fontSize: 15, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5 }}>Sign-in </Text>tab.</Text>
                    </View>

                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', paddingVertical: 5, }}>
                        <Iconviewcomponent
                            Icontag={'Entypo'}
                            iconname={'dot-single'}
                            icon_size={22}
                            icon_color={Color.primary}
                            iconstyle={{ marginTop: 0 }}
                        />
                        <Text style={{ width: '100%', paddingHorizontal: 10, fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, textAlign: 'justify', letterSpacing: 0.5, lineHeight: 22, }}>Then, select the <Text style={{ fontSize: 15, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5 }}>Sign-up </Text>on the next screen.</Text>
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', paddingVertical: 5, }}>
                        <Iconviewcomponent
                            Icontag={'Entypo'}
                            iconname={'dot-single'}
                            icon_size={22}
                            icon_color={Color.primary}
                            iconstyle={{ marginTop: 0 }}
                        />
                        <Text style={{ width: '100%', paddingHorizontal: 10, fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, textAlign: 'justify', letterSpacing: 0.5, lineHeight: 22, }}>Now, fill in the required details, including Name, email ID, mobile number, DOB, and gender.</Text>
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', paddingVertical: 5, }}>
                        <Iconviewcomponent
                            Icontag={'Entypo'}
                            iconname={'dot-single'}
                            icon_size={22}
                            icon_color={Color.primary}
                            iconstyle={{ marginTop: 0 }}
                        />
                        <Text style={{ width: '100%', paddingHorizontal: 10, fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, textAlign: 'justify', letterSpacing: 0.5, lineHeight: 22, }}>Enter a secure password for Cignix’s account.</Text>
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', paddingVertical: 5, }}>
                        <Iconviewcomponent
                            Icontag={'Entypo'}
                            iconname={'dot-single'}
                            icon_size={22}
                            icon_color={Color.primary}
                            iconstyle={{ marginTop: 0 }}
                        />
                        <Text style={{ width: '100%', paddingHorizontal: 10, fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, textAlign: 'justify', letterSpacing: 0.5, lineHeight: 22, }}>Click on the <Text style={{ fontSize: 15, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5 }}>Get Started </Text>Now option and you have to take a <Text style={{ fontSize: 15, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5 }}>SIM test</Text>.</Text>
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', paddingVertical: 5, }}>
                        <Iconviewcomponent
                            Icontag={'Entypo'}
                            iconname={'dot-single'}
                            icon_size={22}
                            icon_color={Color.primary}
                            iconstyle={{ marginTop: 0 }}
                        />
                        <Text style={{ width: '100%', paddingHorizontal: 10, fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, textAlign: 'justify', letterSpacing: 0.5, lineHeight: 22, }}>Then, you can access the free videos available.</Text>
                    </View>
                    <Text style={{ textAlign: 'justify', fontSize: 15, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>Note:</Text>
                    <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, }}>In addition, you can also sign up using your Google account.</Text>
                </View>


                <View style={{ width: '100%', marginTop: 20 }}>
                    <Text style={{ textAlign: 'left', fontSize: 18, color: Color.black, fontFamily: Mulish.Black, letterSpacing: 0.5 }}>Log In</Text>
                    <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>Using Password</Text>

                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', paddingVertical: 5, }}>
                        <Iconviewcomponent
                            Icontag={'Entypo'}
                            iconname={'dot-single'}
                            icon_size={22}
                            icon_color={Color.primary}
                            iconstyle={{ marginTop: 0 }}
                        />
                        <Text style={{ width: '100%', paddingHorizontal: 10, fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, textAlign: 'justify', letterSpacing: 0.5, lineHeight: 22, }}>Once registered, click on the <Text style={{ fontSize: 15, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5 }}>Sign-in </Text>tab on the landing page.</Text>
                    </View>

                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', paddingVertical: 5, }}>
                        <Iconviewcomponent
                            Icontag={'Entypo'}
                            iconname={'dot-single'}
                            icon_size={22}
                            icon_color={Color.primary}
                            iconstyle={{ marginTop: 0 }}
                        />
                        <Text style={{ width: '100%', paddingHorizontal: 10, fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, textAlign: 'justify', letterSpacing: 0.5, lineHeight: 22, }}>Next, enter the registered mobile number or email ID.</Text>
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', paddingVertical: 5, }}>
                        <Iconviewcomponent
                            Icontag={'Entypo'}
                            iconname={'dot-single'}
                            icon_size={22}
                            icon_color={Color.primary}
                            iconstyle={{ marginTop: 0 }}
                        />
                        <Text style={{ width: '100%', paddingHorizontal: 10, fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, textAlign: 'justify', letterSpacing: 0.5, lineHeight: 22, }}>Following that, click on the <Text style={{ fontSize: 15, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5 }}>Password </Text>bar.</Text>
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', paddingVertical: 5, }}>
                        <Iconviewcomponent
                            Icontag={'Entypo'}
                            iconname={'dot-single'}
                            icon_size={22}
                            icon_color={Color.primary}
                            iconstyle={{ marginTop: 0 }}
                        />
                        <Text style={{ width: '100%', paddingHorizontal: 10, fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, textAlign: 'justify', letterSpacing: 0.5, lineHeight: 22, }}>Then, input the appropriate password and click on <Text style={{ fontSize: 15, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5 }}>Continue</Text>.</Text>
                    </View>

                    <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>Using OTP</Text>

                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', paddingVertical: 5, }}>
                        <Iconviewcomponent
                            Icontag={'Entypo'}
                            iconname={'dot-single'}
                            icon_size={22}
                            icon_color={Color.primary}
                            iconstyle={{ marginTop: 0 }}
                        />
                        <Text style={{ width: '100%', paddingHorizontal: 10, fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, textAlign: 'justify', letterSpacing: 0.5, lineHeight: 22, }}>On the landing page, click on the <Text style={{ fontSize: 15, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5 }}> Sign-in </Text> option.</Text>
                    </View>

                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', paddingVertical: 5, }}>
                        <Iconviewcomponent
                            Icontag={'Entypo'}
                            iconname={'dot-single'}
                            icon_size={22}
                            icon_color={Color.primary}
                            iconstyle={{ marginTop: 0 }}
                        />
                        <Text style={{ width: '100%', paddingHorizontal: 10, fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, textAlign: 'justify', letterSpacing: 0.5, lineHeight: 22, }}>Then, input the registered email ID or mobile number.</Text>
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', paddingVertical: 5, }}>
                        <Iconviewcomponent
                            Icontag={'Entypo'}
                            iconname={'dot-single'}
                            icon_size={22}
                            icon_color={Color.primary}
                            iconstyle={{ marginTop: 0 }}
                        />
                        <Text style={{ width: '100%', paddingHorizontal: 10, fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, textAlign: 'justify', letterSpacing: 0.5, lineHeight: 22, }}>Select the OTP bar and you will receive an <Text style={{ fontSize: 15, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5 }}>OTP </Text>via registered email ID or mobile number.</Text>
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', paddingVertical: 5, }}>
                        <Iconviewcomponent
                            Icontag={'Entypo'}
                            iconname={'dot-single'}
                            icon_size={22}
                            icon_color={Color.primary}
                            iconstyle={{ marginTop: 0 }}
                        />
                        <Text style={{ width: '100%', paddingHorizontal: 10, fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, textAlign: 'justify', letterSpacing: 0.5, lineHeight: 22, }}>Enter the OTP and you can further access the videos available on Cignix.</Text>
                    </View>

                    <Text style={{ textAlign: 'justify', fontSize: 15, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>Note:</Text>
                    <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, }}>Alternatively, you can sign in using your Google account or OTP.</Text>
                </View>

                <View style={{ width: '100%', marginTop: 20 }}>
                    <Text style={{ textAlign: 'left', fontSize: 18, color: Color.black, fontFamily: Mulish.Black, letterSpacing: 0.5 }}>Customize Your Profile</Text>
                    <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>To customize your profile on Cignix, you have to take the SIM test.</Text>
                    <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 5 }}>Begin the test to assess your smoking habits and readiness to quit. Simply select a number on the scale that best reflects your agreement, likelihood, or preference.</Text>
                    <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 5 }}>Your responses will help us provide tailored support for your quit-smoking journey.</Text>
                </View>

                <View style={{ width: '100%', marginTop: 20 }}>
                    <Text style={{ textAlign: 'left', fontSize: 18, color: Color.black, fontFamily: Mulish.Black, letterSpacing: 0.5 }}>Begin Your Program</Text>
                    <Text style={{ textAlign: 'justify', fontSize: 15, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>Access your personalized dashboard and start your quit-smoking journey with our expert-guided videos.</Text>
                </View>

            </View>
        </ScrollView >
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1, width: '95%',
        backgroundColor: Color.white, marginVertical: 10
    },
    scrollContent: {
        width: '100%',
        padding: 10,
        alignItems: 'center', backgroundColor: Color.white,
    },
});

//make this component available to the app
export default GetStarted;
