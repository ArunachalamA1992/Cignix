//import liraries
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
} from 'react-native';

import { Switch } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import Color from '../../Global/Color';
import { Mulish } from '../../Global/FontFamily';

// create a component
const NotificationSettings = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const [isEmailSwitchOn, setIsEmailSwitchOn] = useState(false);
    const [isSmsSwitchOn, setIsSmsSwitchOn] = useState(false);
    const [isWhatsAppSwitchOn, setIsWhatsAppSwitchOn] = useState(false);

    const [isRemainderSwitchOn, setIsRemainderSwitchOn] = useState(false);
    const [isCommunitySwitchOn, setIsCommunitySwitchOn] = useState(false);

    return (
        <ScrollView
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false} >
            <View style={styles.container}>
                <Text style={{ width: '100%', padding: 10, fontSize: 20, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5 }}>Choose Notification Channels</Text>

                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', backgroundColor: Color.white, padding: 5, marginVertical: 5 }}>
                    <View style={{ flex: 3, justifyContent: 'center', alignItems: 'flex-start', }}>
                        <Text style={{ fontSize: 18, textAlign: 'justify', color: Color.black, fontFamily: Mulish.SemiBold, letterSpacing: 0.5, padding: 3, }}>
                            Email Notification
                        </Text>
                        <Text
                            style={{
                                fontSize: 16,
                                textAlign: 'justify',
                                color: Color.cloudyGrey,
                                fontFamily: Mulish.Medium,
                                letterSpacing: 0.5,
                                lineHeight: 22,
                                padding: 3,
                            }}>
                            Receive notification all of the messages, videos, Progress Updates.
                        </Text>
                    </View>
                    <View style={styles.switchContainer}>
                        <Switch
                            value={isEmailSwitchOn}
                            onValueChange={setIsEmailSwitchOn}
                            color={Color.primary}
                            thumbColor={isEmailSwitchOn ? Color.primary : '#f5f5f5'}
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                        />
                    </View>
                </View>
                <View style={{ width: '100%', height: 5, backgroundColor: "#F9F9F9", borderRadius: 10, marginVertical: 5 }}></View>
                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', backgroundColor: Color.white, padding: 5, marginVertical: 5, }}>
                    <View style={{ flex: 3, justifyContent: 'center', alignItems: 'flex-start', }}>
                        <Text style={{ fontSize: 18, textAlign: 'justify', color: Color.black, fontFamily: Mulish.SemiBold, letterSpacing: 0.5, padding: 3, }}>
                            SMS Notification
                        </Text>
                        <Text
                            style={{
                                fontSize: 16,
                                textAlign: 'justify',
                                color: Color.cloudyGrey,
                                fontFamily: Mulish.Medium,
                                letterSpacing: 0.5,
                                lineHeight: 22,
                                padding: 3,
                            }}>
                            Receive notification all of the messages, videos, Progress Updates.
                        </Text>
                    </View>
                    <View style={styles.switchContainer}>
                        <Switch
                            value={isSmsSwitchOn}
                            onValueChange={setIsSmsSwitchOn}
                            color={Color.primary}
                            thumbColor={isSmsSwitchOn ? Color.primary : '#f5f5f5'}
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                        />
                    </View>
                </View>
                <View style={{ width: '100%', height: 5, backgroundColor: "#F9F9F9", borderRadius: 10, marginVertical: 5 }}></View>
                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', backgroundColor: Color.white, padding: 5, marginVertical: 5, }}>
                    <View style={{ flex: 3, justifyContent: 'center', alignItems: 'flex-start', }}>
                        <Text style={{ fontSize: 18, textAlign: 'justify', color: Color.black, fontFamily: Mulish.SemiBold, letterSpacing: 0.5, padding: 3, }}>
                            Whatsapp Notifaction
                        </Text>
                        <Text
                            style={{
                                fontSize: 16,
                                textAlign: 'justify',
                                color: Color.cloudyGrey,
                                fontFamily: Mulish.Medium,
                                letterSpacing: 0.5,
                                lineHeight: 22,
                                padding: 3,
                            }}>
                            Receive notification all of the messages, videos, Progress Updates.
                        </Text>
                    </View>
                    <View style={styles.switchContainer}>
                        <Switch
                            value={isWhatsAppSwitchOn}
                            onValueChange={setIsWhatsAppSwitchOn}
                            color={Color.primary}
                            thumbColor={isWhatsAppSwitchOn ? Color.primary : '#f5f5f5'}
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                        />
                    </View>
                </View>

                <View style={{ width: '100%', height: 5, backgroundColor: Color.softGrey, borderRadius: 10, marginVertical: 10 }}></View>

                <Text style={{ width: '100%', padding: 10, fontSize: 18, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5 }}>Types of Notification</Text>

                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', backgroundColor: Color.white, padding: 5, marginVertical: 5, }}>
                    <View style={{ flex: 3, justifyContent: 'center', alignItems: 'flex-start', }}>
                        <Text style={{ fontSize: 18, textAlign: 'justify', color: Color.black, fontFamily: Mulish.SemiBold, letterSpacing: 0.5, padding: 3, }}>
                            Remainders
                        </Text>
                    </View>
                    <View style={styles.switchContainer}>
                        <Switch
                            value={isRemainderSwitchOn}
                            onValueChange={setIsRemainderSwitchOn}
                            color={Color.primary}
                            thumbColor={isRemainderSwitchOn ? Color.primary : '#f5f5f5'}
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                        />
                    </View>
                </View>
                <View style={{ width: '100%', height: 5, backgroundColor: "#F9F9F9", borderRadius: 10, marginVertical: 5 }}></View>
                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', backgroundColor: Color.white, padding: 5, marginVertical: 5, }}>
                    <View style={{ flex: 3, justifyContent: 'center', alignItems: 'flex-start', }}>
                        <Text style={{ fontSize: 18, textAlign: 'justify', color: Color.black, fontFamily: Mulish.SemiBold, letterSpacing: 0.5, padding: 3, }}>
                            Community Updates
                        </Text>
                    </View>
                    <View style={styles.switchContainer}>
                        <Switch
                            value={isCommunitySwitchOn}
                            onValueChange={setIsCommunitySwitchOn}
                            color={Color.primary}
                            thumbColor={isCommunitySwitchOn ? Color.primary : '#f5f5f5'}
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                        />
                    </View>
                </View>
                <View style={{ width: '100%', height: 5, backgroundColor: "#F9F9F9", borderRadius: 10, marginVertical: 5 }}></View>

            </View>
        </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1, padding: 10,
        alignItems: 'center',
        backgroundColor: Color.white,
        marginBottom: 80
    },

    scrollContent: {
        padding: 5,
        justifyContent: 'center',
        backgroundColor: Color.white,
    },
    label: {
        fontSize: 16,
        color: '#333',
    },
    switchContainer: {
        transform: [{ scale: 1.2 }], // Increase the size of the switch
    },
});

//make this component available to the app
export default NotificationSettings;
