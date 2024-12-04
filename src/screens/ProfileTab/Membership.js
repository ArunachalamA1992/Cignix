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
import Color from '../../Global/Color';
import { Mulish } from '../../Global/FontFamily';
import { Iconviewcomponent } from '../../Components/Icontag';
import { scr_width } from '../../Components/Dimensions';

// create a component
const Membership = () => {
    const navigation = useNavigation();
    return (
        <ScrollView
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={{ width: '100%', alignItems: 'center', marginVertical: 10, bottom: 50 }}>
                    <Text style={{ width: '100%', fontSize: 18, color: Color.black, fontFamily: Mulish.Bold, marginTop: 50, paddingHorizontal: 10, letterSpacing: 0.5 }}>Enjoy your free trial</Text>
                    <Text style={{ width: '100%', fontSize: 16, color: Color.cloudyGrey, fontFamily: Mulish.Medium, paddingHorizontal: 10, paddingVertical: 10, letterSpacing: 0.5 }}>Access essential features to help you begin your quit-smoking journey.</Text>

                    <View style={{ width: '100%', paddingHorizontal: 10, paddingVertical: 10, }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 15 }}>
                            <View>
                                <Iconviewcomponent
                                    viewstyle={{ alignItems: 'center', justifyContent: 'center' }}
                                    Icontag="Octicons"
                                    icon_size={25}
                                    icon_color={'#26AD5F'}
                                    iconname={'check-circle-fill'}
                                />
                            </View>
                            <View>
                                <Text style={{ fontSize: 18, color: Color.lightBlack, fontFamily: Mulish.SemiBold, paddingHorizontal: 10, letterSpacing: 0.5 }}>Limited access to videos </Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 15 }}>
                            <View>
                                <Iconviewcomponent
                                    viewstyle={{ alignItems: 'center', justifyContent: 'center' }}
                                    Icontag="Octicons"
                                    icon_size={25}
                                    icon_color={'#26AD5F'}
                                    iconname={'check-circle-fill'}
                                />
                            </View>
                            <View>
                                <Text style={{ fontSize: 18, color: Color.lightBlack, fontFamily: Mulish.SemiBold, paddingHorizontal: 10, letterSpacing: 0.5 }}>Basic progress metrics</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 15 }}>
                            <View>
                                <Iconviewcomponent
                                    viewstyle={{ alignItems: 'center', justifyContent: 'center' }}
                                    Icontag="Octicons"
                                    icon_size={25}
                                    icon_color={'#26AD5F'}
                                    iconname={'check-circle-fill'}
                                />
                            </View>
                            <View>
                                <Text style={{ fontSize: 18, color: Color.lightBlack, fontFamily: Mulish.SemiBold, paddingHorizontal: 10, letterSpacing: 0.5 }}>Daily reminders and notifications </Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ width: '100%', height: 5, backgroundColor: '#F9F9F9', marginVertical: 10 }}></View>

                    <View style={{ width: '100%', alignItems: 'center', paddingVertical: 15 }}>
                        <Text style={{ width: '100%', fontSize: 18, color: Color.black, fontFamily: Mulish.Bold, paddingHorizontal: 10, letterSpacing: 0.5 }}>Unlock Premium Access</Text>
                        <Text style={{ width: '100%', fontSize: 16, color: Color.cloudyGrey, fontFamily: Mulish.Medium, paddingHorizontal: 10, paddingVertical: 10, letterSpacing: 0.5 }}>Upgrade to Premium for full access to exclusive content, personalized insights.</Text>

                        <View style={{ width: '95%', height: 350, marginVertical: 10 }}>
                            <ImageBackground
                                source={require('../../assets/Gallery/member.jpg')}
                                style={{ width: '100%', height: '100%', resizeMode: 'contain', justifyContent: 'center', alignItems: 'center' }}
                            >
                                <View style={{ flex: 1, width: '100%', position: 'absolute', justifyContent: 'center', alignItems: 'flex-start' }}>
                                    <View style={{ padding: 7, paddingHorizontal: 15, backgroundColor: '#E9B82F', borderRadius: 50, marginHorizontal: 20 }}>
                                        <Text style={{ fontFamily: 12, color: Color.white, fontFamily: Mulish.Medium }}>Premium</Text>
                                    </View>
                                    <Text style={{ fontSize: 22, color: Color.white, fontFamily: Mulish.SemiBold, marginHorizontal: 20, paddingVertical: 10 }}>Cignix Prime</Text>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20 }}>
                                        <Text style={{ textAlignVertical: 'top', textAlign: 'auto', fontSize: 28, color: Color.white, fontFamily: Mulish.SemiBold }}>$</Text>
                                        <Text style={{ textAlign: 'center', fontSize: 40, color: Color.white, fontFamily: Mulish.SemiBold }}>180
                                            <Text style={{ textAlign: 'auto', textAlignVertical: 'bottom', fontSize: 14, color: Color.white, fontFamily: Mulish.SemiBold, paddingHorizontal: 5 }}>/ per year</Text></Text>
                                    </View>
                                    <View style={{ width: '100%', alignItems: 'center', paddingHorizontal: 10 }}>
                                        <View style={{ width: '100%', paddingHorizontal: 10, paddingVertical: 10, }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5 }}>
                                                <View>
                                                    <Iconviewcomponent
                                                        viewstyle={{ alignItems: 'center', justifyContent: 'center' }}
                                                        Icontag="Octicons"
                                                        icon_size={22}
                                                        icon_color={'#E9B82F'}
                                                        iconname={'check-circle-fill'}
                                                    />
                                                </View>
                                                <View>
                                                    <Text style={{ fontSize: 16, color: Color.white, fontFamily: Mulish.SemiBold, paddingHorizontal: 10, letterSpacing: 0.5 }}>Limited access to videos </Text>
                                                </View>
                                            </View>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5 }}>
                                                <View>
                                                    <Iconviewcomponent
                                                        viewstyle={{ alignItems: 'center', justifyContent: 'center' }}
                                                        Icontag="Octicons"
                                                        icon_size={22}
                                                        icon_color={'#E9B82F'}
                                                        iconname={'check-circle-fill'}
                                                    />
                                                </View>
                                                <View>
                                                    <Text style={{ fontSize: 16, color: Color.white, fontFamily: Mulish.SemiBold, paddingHorizontal: 10, letterSpacing: 0.5 }}>Basic progress metrics</Text>
                                                </View>
                                            </View>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5 }}>
                                                <View>
                                                    <Iconviewcomponent
                                                        viewstyle={{ alignItems: 'center', justifyContent: 'center' }}
                                                        Icontag="Octicons"
                                                        icon_size={22}
                                                        icon_color={'#E9B82F'}
                                                        iconname={'check-circle-fill'}
                                                    />
                                                </View>
                                                <View>
                                                    <Text style={{ fontSize: 16, color: Color.white, fontFamily: Mulish.SemiBold, paddingHorizontal: 10, letterSpacing: 0.5 }} numberOfLines={2}>Daily reminders and notifications </Text>
                                                </View>
                                            </View>
                                        </View>

                                        <TouchableOpacity style={{ width: '95%', height: 45, justifyContent: 'center', alignItems: 'center', backgroundColor: Color.white, borderRadius: 30, }}>
                                            <Text style={{ fontSize: 16, color: Color.black, fontFamily: Mulish.SemiBold }}>Buy Now</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>
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
        padding: 10,
        alignItems: 'center',
        backgroundColor: Color.white,
    },
});

//make this component available to the app
export default Membership;
