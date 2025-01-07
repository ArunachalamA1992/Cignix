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
    FlatList,
} from 'react-native';
import Color from '../../Global/Color';
import { useNavigation } from '@react-navigation/native';
import { Mulish } from '../../Global/FontFamily';
import { Iconviewcomponent } from '../../Components/Icontag';

const privacyData = [
    {
        id: '0',
        abt_title: 'Terms',
        abt_subText: 'terms and conditions',
    },
];

// create a component
const PrivacyPolicy = () => {

    const navigation = useNavigation();
    const [height, setHeight] = useState(undefined);

    const renderHeaderItem = () => {
        try {
            return (
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <View style={{ width: '100%', marginTop: 5 }}>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>This Privacy Notice for Cignix ('we', 'us', or 'our'), describes how and why we might access, collect, store, use, and/or share ('process') your personal information when you use our services ('Services'), including when you: Visit our website at https://www.cignix.com or any website of ours that links to this Privacy Notice.</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>Use Cignix. Cignix is a dedicated platform designed to help smokers quit and embrace a healthier, smoke-free life. Through interactive quizzes and engaging videos, we assess your level of nicotine dependence, providing you with insights and guidance. Our personalized approach supports you every step of the way, helping you overcome cravings, build healthy habits, and achieve a lasting, smoke-free lifestyle.</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>Engage with us in other related ways, including any sales, marketing, or events Questions or concerns? Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at quit@cignix.com.</Text>
                    </View>
                    <View style={{ width: '100%', marginTop: 10 }}>
                        <Text style={{ textAlign: 'left', fontSize: 18, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5 }}>SUMMARY OF KEY POINTS</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.</Text>

                        <Text style={{ textAlign: 'justify', fontSize: 16, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10, marginTop: 10 }}>Do we process any sensitive personal information? </Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22 }}>Some of the information may be considered 'special' or 'sensitive' in certain jurisdictions, for example, your racial or ethnic origins, sexual orientation, and religious beliefs. We may process sensitive personal information when necessary with your consent or as otherwise permitted by applicable law. Learn more about the sensitive information we process.</Text>

                        <Text style={{ textAlign: 'justify', fontSize: 16, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10, marginTop: 10 }}>What personal information do we process? </Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22 }}>When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about the personal information you disclose to us.</Text>

                        <Text style={{ textAlign: 'justify', fontSize: 16, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10, marginTop: 0 }}>Do we collect any information from third parties? </Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22 }}>We do not collect any information from third parties.</Text>

                        <Text style={{ textAlign: 'justify', fontSize: 16, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10, marginTop: 10 }}>How do we process your information? </Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22 }}>We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Learn more about how we process your information.</Text>

                        <Text style={{ textAlign: 'justify', fontSize: 16, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10, marginTop: 0 }}>In what situations and with which parties do we share personal information? </Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22 }}>We may share information in specific situations and with specific third parties. Learn more about when and with whom we share your personal information.</Text>

                        <Text style={{ textAlign: 'justify', fontSize: 16, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10, marginTop: 10 }}>How do we keep your information safe?</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22 }}>We have adequate organisational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Learn more about how we keep your information safe.</Text>

                        <Text style={{ textAlign: 'justify', fontSize: 16, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10, marginTop: 0 }}>What are your rights? </Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22 }}>Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about your privacy rights</Text>

                        <Text style={{ textAlign: 'justify', fontSize: 16, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10, marginTop: 10 }}>How do you exercise your rights?  </Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22 }}>The easiest way to exercise your rights is by submitting a data subject access request, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.lightBlack, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>Want to learn more about what we do with any information we collect? Review the Privacy Notice in full.</Text>
                    </View>
                    <View style={{ width: '100%', marginTop: 20 }}>
                        <Text style={{ textAlign: 'left', fontSize: 18, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, marginTop: 0 }}>1. WHAT INFORMATION DO WE COLLECT?</Text>

                        <Text style={{ textAlign: 'justify', fontSize: 16, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10, marginTop: 10 }}>Personal information you disclose to us </Text>
                        <Text style={{ textAlign: 'justify', fontSize: 16, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, }}>In Short:</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>We collect personal information that you provide to us. We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services when you participate in activities on the Services, or otherwise when you contact us.</Text>

                        <Text style={{ textAlign: 'justify', fontSize: 16, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 0, marginTop: 0 }}>Personal Information Provided by You:</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:</Text>

                        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', paddingVertical: 5, }}>
                            <Iconviewcomponent
                                Icontag={'AntDesign'}
                                iconname={'checkcircle'}
                                icon_size={22}
                                icon_color={Color.primary}
                                iconstyle={{ marginTop: 0 }}
                            />
                            <Text
                                style={{
                                    width: '100%',
                                    paddingHorizontal: 10,
                                    fontSize: 14,
                                    color: Color.cloudyGrey,
                                    fontFamily: Mulish.Medium,
                                    textAlign: 'justify',
                                    letterSpacing: 0.5,
                                    lineHeight: 22,
                                }}>Names</Text>
                        </View>
                        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', paddingVertical: 5, }}>
                            <Iconviewcomponent
                                Icontag={'AntDesign'}
                                iconname={'checkcircle'}
                                icon_size={22}
                                icon_color={Color.primary}
                                iconstyle={{ marginTop: 0 }}
                            />
                            <Text
                                style={{
                                    width: '100%',
                                    paddingHorizontal: 10,
                                    fontSize: 14,
                                    color: Color.cloudyGrey,
                                    fontFamily: Mulish.Medium,
                                    textAlign: 'justify',
                                    letterSpacing: 0.5,
                                    lineHeight: 22,
                                }}>Phone numbers</Text>
                        </View>
                        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', paddingVertical: 5, }}>
                            <Iconviewcomponent
                                Icontag={'AntDesign'}
                                iconname={'checkcircle'}
                                icon_size={22}
                                icon_color={Color.primary}
                                iconstyle={{ marginTop: 0 }}
                            />
                            <Text
                                style={{
                                    width: '100%',
                                    paddingHorizontal: 10,
                                    fontSize: 14,
                                    color: Color.cloudyGrey,
                                    fontFamily: Mulish.Medium,
                                    textAlign: 'justify',
                                    letterSpacing: 0.5,
                                    lineHeight: 22,
                                }}>Email addresses</Text>
                        </View>
                        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', paddingVertical: 5, }}>
                            <Iconviewcomponent
                                Icontag={'AntDesign'}
                                iconname={'checkcircle'}
                                icon_size={22}
                                icon_color={Color.primary}
                                iconstyle={{ marginTop: 0 }}
                            />
                            <Text
                                style={{
                                    width: '100%',
                                    paddingHorizontal: 10,
                                    fontSize: 14,
                                    color: Color.cloudyGrey,
                                    fontFamily: Mulish.Medium,
                                    textAlign: 'justify',
                                    letterSpacing: 0.5,
                                    lineHeight: 22,
                                }}>Usernames</Text>
                        </View>
                        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', paddingVertical: 5, }}>
                            <Iconviewcomponent
                                Icontag={'AntDesign'}
                                iconname={'checkcircle'}
                                icon_size={22}
                                icon_color={Color.primary}
                                iconstyle={{ marginTop: 0 }}
                            />
                            <Text
                                style={{
                                    width: '100%',
                                    paddingHorizontal: 10,
                                    fontSize: 14,
                                    color: Color.cloudyGrey,
                                    fontFamily: Mulish.Medium,
                                    textAlign: 'justify',
                                    letterSpacing: 0.5,
                                    lineHeight: 22,
                                }}>Passwords</Text>
                        </View>
                        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', paddingVertical: 5, }}>
                            <Iconviewcomponent
                                Icontag={'AntDesign'}
                                iconname={'checkcircle'}
                                icon_size={22}
                                icon_color={Color.primary}
                                iconstyle={{ marginTop: 0 }}
                            />
                            <Text
                                style={{
                                    width: '100%',
                                    paddingHorizontal: 10,
                                    fontSize: 14,
                                    color: Color.cloudyGrey,
                                    fontFamily: Mulish.Medium,
                                    textAlign: 'justify',
                                    letterSpacing: 0.5,
                                    lineHeight: 22,
                                }}>Debit/Credit card numbers</Text>
                        </View>

                        <Text style={{ textAlign: 'justify', fontSize: 16, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10, marginTop: 10 }}>Sensitive Information:</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>When necessary, with your consent or as otherwise permitted by applicable law, we process the following categories of sensitive information: Health Data.</Text>

                        <Text style={{ textAlign: 'justify', fontSize: 16, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10, marginTop: 10 }}>Payment Data:</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, }}>We may collect data necessary to process your payment if you choose to make purchases, such as your payment instrument number, and the security code associated with your payment instrument.</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</Text>

                        <Text style={{ textAlign: 'justify', fontSize: 16, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10, marginTop: 10 }}>Information automatically collected</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 16, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, }}>In Short:</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services and for our internal analytics and reporting purposes.</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>Like many businesses, we also collect information through cookies and similar technologies.</Text>

                        <Text style={{ textAlign: 'justify', fontSize: 16, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10, marginTop: 10 }}>The information we collect includes:</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 16, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, }}>Log and Usage Data: </Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}> Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called 'crash dumps'), and hardware settings).</Text>

                        <Text style={{ textAlign: 'justify', fontSize: 16, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 0, marginTop: 0 }}>Location Data: </Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt-out, you may not be able to use certain aspects of the Services.</Text>

                        <Text style={{ textAlign: 'justify', fontSize: 16, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10, marginTop: 10 }}>Google API:  </Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>Our use of information received from Google APIs will adhere to Google API Services User Data Policy, including the Limited Use requirements.</Text>

                    </View>

                    <View style={{ width: '100%', marginTop: 0 }}>
                        <Text style={{ textAlign: 'left', fontSize: 18, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, marginTop: 0 }}>2. HOW DO WE PROCESS YOUR INFORMATION?</Text>

                        <Text style={{ textAlign: 'justify', fontSize: 16, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10, }}>In Short:</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and comply with the law. We may also process your information for other purposes with your consent.</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</Text>

                        <Text style={{ textAlign: 'justify', fontSize: 16, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10, }}>To facilitate account creation and authentication and otherwise manage user accounts:</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>We may process your information so you can create and log in to your account, as well as keep your account in working order.</Text>

                        <Text style={{ textAlign: 'justify', fontSize: 16, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10, }}>To respond to user inquiries/offer support to users:</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.</Text>

                        <Text style={{ textAlign: 'justify', fontSize: 16, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10, }}>To send administrative information to you:</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>We may process your information to send you details about our products and services, changes to our terms and policies, and other similar information.</Text>

                        <Text style={{ textAlign: 'justify', fontSize: 16, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10, }}>To fulfil and manage your orders:</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>We may process your information to fulfil and manage your orders, payments, returns, and exchanges made through the Services.</Text>

                        <Text style={{ textAlign: 'justify', fontSize: 16, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10, }}>To enable user-to-user communications:</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>We may process your information if you choose to use any of our offerings that allow for communication with another user.</Text>

                        <Text style={{ textAlign: 'justify', fontSize: 16, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10, }}>To request feedback:</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>We may process your information when necessary to request feedback and to contact you about your use of our Services.</Text>

                        <Text style={{ textAlign: 'justify', fontSize: 16, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10, }}>To deliver targeted advertising to you:</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>We may process your information to develop and display personalised content and advertising tailored to your interests, location, and more.</Text>

                        <Text style={{ textAlign: 'justify', fontSize: 16, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10, }}>To post testimonials:</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>We post testimonials on our Services that may contain personal information.</Text>

                        <Text style={{ textAlign: 'justify', fontSize: 16, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10, }}>To protect our Services:</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>We may process your information as part of our efforts to keep our Services safe and secure, including fraud monitoring and prevention.</Text>

                        <Text style={{ textAlign: 'justify', fontSize: 16, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10, }}>To evaluate and improve our Services, products, marketing, and your experience:</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>We may process your information when we believe it is necessary to identify usage trends, determine the effectiveness of our promotional campaigns, and evaluate and improve our Services, products, marketing, and your experience.</Text>
                    </View>

                    <View style={{ width: '100%', marginTop: 0 }}>
                        <Text style={{ textAlign: 'left', fontSize: 18, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, marginTop: 10 }}>3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</Text>

                        <Text style={{ textAlign: 'justify', fontSize: 16, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10, marginTop: 10 }}>In Short:</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>We may share information in specific situations described in this section and/or with the following third parties.</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>We may need to share your personal information in the following situations:</Text>

                        <Text style={{ textAlign: 'justify', fontSize: 16, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10, marginTop: 10 }}>Business Transfers:</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>We may share or transfer your information in connection with or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</Text>

                        <Text style={{ textAlign: 'justify', fontSize: 16, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10, marginTop: 10 }}>When we use Google Maps Platform APIs:</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>We may share your information with certain Google Maps Platform APIs (e.g. Google Maps API, Places API). Google Maps uses GPS, Wi-Fi, and cell towers to estimate your location. GPS is accurate to about 20 meters, while Wi-Fi and cell towers help improve accuracy when GPS signals are weak, like indoors. This data helps Google Maps provide directions, but it is not always perfectly precise. We obtain and store on your device ('cache') your location. You may revoke your consent anytime by contacting us at the contact details provided at the end of this document.</Text>

                        <Text style={{ textAlign: 'justify', fontSize: 16, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10, marginTop: 10 }}>Affiliates:</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>We may share your information with our affiliates, in which case we will require those affiliates to honour this Privacy Notice. Affiliates include our parent company and any subsidiaries, joint venture partners, or other companies that we control or that are under common control with us.</Text>

                        <Text style={{ textAlign: 'justify', fontSize: 16, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10, marginTop: 10 }}>Business Partners:</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>We may share your information with our business partners to offer you certain products, services, or promotions.</Text>
                    </View>

                    <View style={{ width: '100%', marginTop: 0 }}>
                        <Text style={{ textAlign: 'left', fontSize: 18, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, marginTop: 10 }}>4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 16, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10, marginTop: 10 }}>In Short:</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>We may use cookies and other tracking technologies to collect and store your information. We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. Some online tracking technologies help us maintain the security of our Services and your account, prevent crashes, fix bugs, save your preferences, and assist with basic site functions.</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>We also permit third parties and service providers to use online tracking technologies on our Services for analytics and advertising, including to help manage and display advertisements, to tailor advertisements to your interests, or to send abandoned shopping cart reminders (depending on your communication preferences). The third parties and service providers use their technology to provide advertising about products and services tailored to your interests which may appear either on our Services or on other websites.</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.</Text>

                        <Text style={{ textAlign: 'justify', fontSize: 16, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10, marginTop: 10 }}>Google Analytics :</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>We may share your information with Google Analytics to track and analyse the use of the Services. To opt out of being tracked by Google Analytics across the Services, visit https://tools.google.com/dlpage/gaoptout For more information on the privacy practices of Google, please visit the Google Privacy & Terms page.</Text>
                    </View>

                    <View style={{ width: '100%', marginTop: 0 }}>
                        <Text style={{ textAlign: 'left', fontSize: 18, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, marginTop: 10 }}>5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>Our Services offer you the ability to register and log in using your third-party social media account details (like your Facebook or X logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, and profile picture, as well as other information you choose to make public on such a social media platform.</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>We will use the information we receive only for the purposes that are described in this Privacy Policy or that are otherwise made clear to you on the relevant Services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy policy to understand how they collect, use, and share your personal information, and how you can set your privacy preferences on their sites and apps.</Text>
                    </View>

                </View>
            )
        } catch (error) {
            console.log("catch in renderHeaderItem_Privacy : ", error);

        }
    }
    const renderFooterItem = () => {
        try {
            return (
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <View style={{ width: '100%', marginTop: 0 }}>
                        <Text style={{ textAlign: 'left', fontSize: 18, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, marginTop: 10 }}>6. HOW LONG DO WE KEEP YOUR INFORMATION?</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 16, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10, marginTop: 10 }}>In Short:</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>We keep your information for as long as necessary to fulfil the purposes outlined in this Privacy Notice unless otherwise required by law. We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us to keep your personal information for longer than the period of time in which users have an account with us.</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymise such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</Text>
                    </View>

                    <View style={{ width: '100%', marginTop: 0 }}>
                        <Text style={{ textAlign: 'left', fontSize: 18, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, marginTop: 10 }}>7. HOW DO WE KEEP YOUR INFORMATION SAFE?</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>We have implemented appropriate and reasonable technical and organisational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.</Text>
                    </View>

                    <View style={{ width: '100%', marginTop: 0 }}>
                        <Text style={{ textAlign: 'left', fontSize: 18, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, marginTop: 10 }}>8. DO WE COLLECT INFORMATION FROM MINORS?</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 16, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10, marginTop: 10 }}>In Short:</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>We do not knowingly collect data from or market to children under 18 years of age.</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>We do not knowingly collect, solicit data from, or market to children under 18 years of age, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under the age of 18, please contact us at quit@cignix.com.</Text>
                    </View>

                    <View style={{ width: '100%', marginTop: 0 }}>
                        <Text style={{ textAlign: 'left', fontSize: 18, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, marginTop: 10 }}>9. WHAT ARE YOUR PRIVACY RIGHTS?</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 16, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10, marginTop: 10 }}>In Short:</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.</Text>

                        <Text style={{ textAlign: 'justify', fontSize: 16, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10, marginTop: 10 }}>Withdrawing your consent:</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us using the contact details provided in the section <Text style={{ fontSize: 15, color: Color.lightBlack, fontFamily: Mulish.SemiBold, letterSpacing: 0.5 }}>'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?' below.</Text></Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>However, please note that this will not affect the lawfulness of the processing before its withdrawal nor when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.</Text>

                        <Text style={{ textAlign: 'justify', fontSize: 16, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10, marginTop: 10 }}>Account Information</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>If you would at any time like to review or change the information in your account or terminate your account, you can:</Text>
                        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', paddingVertical: 5, }}>
                            <Iconviewcomponent
                                Icontag={'Entypo'}
                                iconname={'dot-single'}
                                icon_size={22}
                                icon_color={Color.primary}
                                iconstyle={{ marginTop: 0 }}
                            />
                            <Text style={{ width: '100%', paddingHorizontal: 10, fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, textAlign: 'justify', letterSpacing: 0.5, lineHeight: 22, }}>Log in to your account settings and update your user account.</Text>
                        </View>
                        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', paddingVertical: 5, }}>
                            <Iconviewcomponent
                                Icontag={'Entypo'}
                                iconname={'dot-single'}
                                icon_size={22}
                                icon_color={Color.primary}
                                iconstyle={{ marginTop: 0 }}
                            />
                            <Text style={{ width: '100%', paddingHorizontal: 10, fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, textAlign: 'justify', letterSpacing: 0.5, lineHeight: 22, }}>Contact us using the contact information provided.</Text>
                        </View>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>Cookies and similar technologies: Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services.</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>If you have questions or comments about your privacy rights, you may email us at <Text style={{ fontSize: 15, color: Color.lightBlack, fontFamily: Mulish.SemiBold, letterSpacing: 0.5 }}>quit@cignix.com</Text>.</Text>
                    </View>

                    <View style={{ width: '100%', marginTop: 0 }}>
                        <Text style={{ textAlign: 'left', fontSize: 18, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, marginTop: 10 }}>10. CONTROLS FOR DO-NOT-TRACK FEATURES</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ('DNT') feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognising and implementing DNT signals has been finalised. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.</Text>
                    </View>

                    <View style={{ width: '100%', marginTop: 10 }}>
                        <Text style={{ textAlign: 'left', fontSize: 18, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, marginTop: 10 }}>11. DO WE MAKE UPDATES TO THIS NOTICE?</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 16, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10, marginTop: 10 }}>In Short:</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>Yes, we will update this notice as necessary to stay compliant with relevant laws.</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>We may update this Privacy Notice from time to time. The updated version will be indicated by an updated 'Revised' date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.</Text>
                    </View>

                    <View style={{ width: '100%', marginTop: 10 }}>
                        <Text style={{ textAlign: 'left', fontSize: 18, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, marginTop: 10 }}>12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>If you have questions or comments about this notice, you may email us at <Text style={{ fontSize: 15, color: Color.lightBlack, fontFamily: Mulish.SemiBold, letterSpacing: 0.5 }}>quit@cignix.com</Text> or contact us by post at:</Text>

                        <Text style={{ textAlign: 'left', fontSize: 18, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5 }}>Cignix</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 16, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 5 }}>Unit No. 105, First Floor,</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 16, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 5 }}>Iris Tech Park, Sector-48,</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 16, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 5 }}>Gurgaon,</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 16, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 5 }}>Haryana 122018,</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 16, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 5 }}>India.</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 16, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 5 }}>Phone: <Text style={{ fontSize: 15, color: Color.primary, fontFamily: Mulish.SemiBold }}>+91 9873832002</Text></Text>
                        <Text style={{ textAlign: 'justify', fontSize: 16, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 5, textDecorationLine: 'underline' }}>quit@cignix.com</Text>
                    </View>

                    <View style={{ width: '100%', marginTop: 10 }}>
                        <Text style={{ textAlign: 'left', fontSize: 18, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5, marginTop: 10 }}>13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, color: Color.cloudyGrey, fontFamily: Mulish.Medium, letterSpacing: 0.5, lineHeight: 22, paddingVertical: 10 }}>Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please fill out and submit a data subject access request.</Text>
                    </View>
                </View>
            )
        } catch (error) {
            console.log("catch in renderHeaderItem_Privacy : ", error);

        }
    }

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={Color.primary}
                barStyle={'light-content'}
                translucent
            />
            <View style={{ width: '95%', height: height, justifyContent: 'center', alignItems: 'center', backgroundColor: Color.white, }}>
                <FlatList
                    data={privacyData}
                    keyExtractor={(item, index) => item + index}
                    ListHeaderComponent={() => renderHeaderItem()}
                    // renderItem={({ item, index }) => renderFreeRentalItem(item, index)}
                    ListFooterComponent={() => renderFooterItem()}
                    style={{ width: '95%' }}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Color.white,
    },
});

//make this component available to the app
export default PrivacyPolicy;
