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
const PricePayments = () => {
    return (
        <ScrollView
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={{ textAlign: 'justify', fontSize: 16, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, paddingTop: 10 }}>At Cignix, we aim to provide unmatched value through our comprehensive subscription plan, making it easy for our customers to access premium resources with a simple, hassle-free payment process</Text>

                <View style={{ width: '100%', marginTop: 20 }}>
                    <Text style={{ textAlign: 'left', fontSize: 18, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5 }}>Subscription Plan</Text>
                    <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>Cignix offers a single subscription plan that is priced at ₹4999. Once you have made the payment, you will be allowed to access the resources for a lifetime.This single investment unlocks unlimited access to a wealth of resources personalised to meet your needs.</Text>
                </View>
                <View style={{ width: '100%', marginTop: 20 }}>
                    <Text style={{ textAlign: 'left', fontSize: 18, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, }}>Payment Methods</Text>
                    <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>Cignix provides different types of payment options and they are listed below.</Text>

                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', paddingVertical: 5, }}>
                        <Iconviewcomponent
                            Icontag={'Entypo'}
                            iconname={'dot-single'}
                            icon_size={22}
                            icon_color={Color.primary}
                            iconstyle={{ marginTop: 0 }}
                        />
                        <Text style={{ width: '100%', paddingHorizontal: 10, fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, textAlign: 'justify', letterSpacing: 0.5, lineHeight: 22, }}>Credit Card (Visa Card/ Master Card)</Text>
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', paddingVertical: 5, }}>
                        <Iconviewcomponent
                            Icontag={'Entypo'}
                            iconname={'dot-single'}
                            icon_size={22}
                            icon_color={Color.primary}
                            iconstyle={{ marginTop: 0 }}
                        />
                        <Text style={{ width: '100%', paddingHorizontal: 10, fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, textAlign: 'justify', letterSpacing: 0.5, lineHeight: 22, }}>Razorpay</Text>
                    </View>
                </View>

                <View style={{ width: '100%', marginTop: 20 }}>
                    <Text style={{ textAlign: 'left', fontSize: 18, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, }}>Lifetime Access: One Payment, Endless Benefits</Text>
                    <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>Make a single payment and enjoy unlimited lifetime access to all resources—no renewals, no extra fees.</Text>
                </View>
                <View style={{ width: '100%', marginTop: 20 }}>
                    <Text style={{ textAlign: 'left', fontSize: 18, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, }}>Comprehensive Benefits</Text>
                    <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>Gain instant access to all current resources and future updates, keeping you equipped with the latest videos.</Text>

                    <Text style={{ textAlign: 'left', fontSize: 18, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, }}>Simple, One-Time Payment</Text>
                    <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>Our one-time payment model eliminates recurring fees, offering a cost-effective solution.</Text>

                    <Text style={{ textAlign: 'left', fontSize: 18, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, }}>Payment Methods</Text>
                    <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>We understand that convenience and security are paramount when it comes to managing your payments. At Cignix, we offer a variety of flexible and secure payment options to ensure a seamless experience for our users.</Text>

                    <Text style={{ textAlign: 'left', fontSize: 18, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, }}>Credit and Debit Cards</Text>
                    <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>Pay easily using your preferred credit or debit card. We support:</Text>
                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', paddingVertical: 5, }}>
                        <Iconviewcomponent
                            Icontag={'Entypo'}
                            iconname={'dot-single'}
                            icon_size={22}
                            icon_color={Color.primary}
                            iconstyle={{ marginTop: 0 }}
                        />
                        <Text style={{ width: '100%', paddingHorizontal: 10, fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, textAlign: 'justify', letterSpacing: 0.5, lineHeight: 22, }}>Visa</Text>
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', paddingVertical: 5, }}>
                        <Iconviewcomponent
                            Icontag={'Entypo'}
                            iconname={'dot-single'}
                            icon_size={22}
                            icon_color={Color.primary}
                            iconstyle={{ marginTop: 0 }}
                        />
                        <Text style={{ width: '100%', paddingHorizontal: 10, fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, textAlign: 'justify', letterSpacing: 0.5, lineHeight: 22, }}>Mastercard</Text>
                    </View>

                    <Text style={{ textAlign: 'left', fontSize: 18, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, }}>Razorpay</Text>
                    <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>Enjoy fast payments personalized to suit your preferences, with Razorpay.</Text>

                    <Text style={{ textAlign: 'left', fontSize: 18, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, }}>Net Banking</Text>
                    <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>Use your bank's online banking services to pay directly from your account. We support a wide range of banks to ensure compatibility.</Text>


                    <Text style={{ textAlign: 'left', fontSize: 18, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, }}>UPI</Text>
                    <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>Simply use your UPI ID or scan a QR code to complete your transaction instantly. We accept payments from leading UPI providers, such as:</Text>
                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', paddingVertical: 5, }}>
                        <Iconviewcomponent
                            Icontag={'Entypo'}
                            iconname={'dot-single'}
                            icon_size={22}
                            icon_color={Color.primary}
                            iconstyle={{ marginTop: 0 }}
                        />
                        <Text style={{ width: '100%', paddingHorizontal: 10, fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, textAlign: 'justify', letterSpacing: 0.5, lineHeight: 22, }}>Google Pay</Text>
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', paddingVertical: 5, }}>
                        <Iconviewcomponent
                            Icontag={'Entypo'}
                            iconname={'dot-single'}
                            icon_size={22}
                            icon_color={Color.primary}
                            iconstyle={{ marginTop: 0 }}
                        />
                        <Text style={{ width: '100%', paddingHorizontal: 10, fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, textAlign: 'justify', letterSpacing: 0.5, lineHeight: 22, }}>PhonePe</Text>
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', paddingVertical: 5, }}>
                        <Iconviewcomponent
                            Icontag={'Entypo'}
                            iconname={'dot-single'}
                            icon_size={22}
                            icon_color={Color.primary}
                            iconstyle={{ marginTop: 0 }}
                        />
                        <Text style={{ width: '100%', paddingHorizontal: 10, fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, textAlign: 'justify', letterSpacing: 0.5, lineHeight: 22, }}>Paytm</Text>
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', paddingVertical: 5, }}>
                        <Iconviewcomponent
                            Icontag={'Entypo'}
                            iconname={'dot-single'}
                            icon_size={22}
                            icon_color={Color.primary}
                            iconstyle={{ marginTop: 0 }}
                        />
                        <Text style={{ width: '100%', paddingHorizontal: 10, fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, textAlign: 'justify', letterSpacing: 0.5, lineHeight: 22, }}>BHIM</Text>
                    </View>

                    <Text style={{ textAlign: 'left', fontSize: 18, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, }}>Cancellation, Return & Refund Policies</Text>
                    <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>At Cignix, we offer a refund option, but it is available only if you request a cancellation within 7 to 10 business days of your purchase or order. Please ensure that your request falls within this window to be eligible for a refund. For any issues or inquiries regarding returns or cancellations, feel free to contact our support team for assistance.</Text>

                    <Text style={{ textAlign: 'left', fontSize: 18, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, }}>How to Subscribe to Cignix?</Text>

                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', paddingVertical: 5, }}>
                        <Text style={{ fontSize: 15, color: Color.black }}>1.</Text>
                        <Text style={{ width: '100%', paddingHorizontal: 10, fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, textAlign: 'justify', letterSpacing: 0.5, lineHeight: 22, }}>Choose Your Plan</Text>
                    </View>
                    <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>Visit the subscription section on our website and select the ₹4,999 Lifetime Plan.</Text>

                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', paddingVertical: 5, }}>
                        <Text style={{ fontSize: 15, color: Color.black }}>2.</Text>
                        <Text style={{ width: '100%', paddingHorizontal: 10, fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, textAlign: 'justify', letterSpacing: 0.5, lineHeight: 22, }}>Enter Payment Details:</Text>
                    </View>
                    <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>Choose your preferred payment method and fill in the required details.</Text>

                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', paddingVertical: 5, }}>
                        <Text style={{ fontSize: 15, color: Color.black }}>3.</Text>
                        <Text style={{ width: '100%', paddingHorizontal: 10, fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, textAlign: 'justify', letterSpacing: 0.5, lineHeight: 22, }}>Complete the Payment:</Text>
                    </View>
                    <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>Follow the secure checkout process to finalize your subscription.</Text>

                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', paddingVertical: 5, }}>
                        <Text style={{ fontSize: 15, color: Color.black }}>4.</Text>
                        <Text style={{ width: '100%', paddingHorizontal: 10, fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, textAlign: 'justify', letterSpacing: 0.5, lineHeight: 22, }}>Enjoy Lifetime Access:</Text>
                    </View>
                    <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>Once the payment is successful, your account will be instantly activated, granting you unlimited access to our videos.</Text>

                    <View style={{ width: '100%', marginBottom: 10 }}>
                        <Text style={{ textAlign: 'left', fontSize: 18, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5 }}>CONTACT US</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>In order to resolve a complaint regarding the Services or to receive further information regarding the use of the Services, please contact us at:</Text>

                        <Text style={{ textAlign: 'left', fontSize: 18, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5 }}>Cignix</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 15, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 5 }}>Unit No. 105, First Floor,</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 15, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 5 }}>Iris Tech Park, Sector-48,</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 15, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 5 }}>Gurgaon,</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 15, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 5 }}>Haryana 122018,</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 15, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 5 }}>India.</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 15, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 5 }}>Phone: <Text style={{ fontSize: 15, color: Color.primary, fontFamily: Mulish.Bold }}>+91 9873832002</Text></Text>
                        <Text style={{ textAlign: 'justify', fontSize: 15, color: Color.primary, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 5, textDecorationLine: 'underline' }}>quit@cignix.com</Text>
                    </View>
                </View>

            </View>
        </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1, width: '95%',
        backgroundColor: Color.white, marginBottom: 20
    },
    scrollContent: {
        width: '100%',
        padding: 10,
        alignItems: 'center', backgroundColor: Color.white,
    },
});

//make this component available to the app
export default PricePayments;
