import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Iconviewcomponent } from '../../Components/Icontag'
import Color from '../../Global/Color'
import { Mulish } from '../../Global/FontFamily'
import { scr_width } from '../../Components/Dimensions'
import FastImage from 'react-native-fast-image'
import { LottieCheck } from '../../Components/Lottie'

const SuccesScreen = ({ navigation, route }) => {
    const { totalScore } = route.params;
    return (
        <View style={{ flex: 1, backgroundColor: '#D8DFE9', padding: 20 }}>
            <View style={{ paddingTop: 30 }}>
                <Iconviewcomponent
                    Icontag="Ionicons"
                    icon_size={24}
                    icon_color={Color.black}
                    iconname="chevron-back"
                />
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View>
                    {/* <FastImage source={require('../../assets/gif/Tickimage.gif')} style={{ width:200, height:200, resizeMode: 'cover' }} /> */}
                    <LottieCheck />
                </View>
                <View style={{ width: scr_width, padding: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 25, fontFamily: Mulish?.Bold, color: '#000' }}>Congratulations on</Text>
                    <Text style={{ fontSize: 30, fontFamily: Mulish?.Bold, color: '#000' }}>Completing the Quiz!</Text>
                </View>
                <View style={{ width: scr_width, paddingLeft: 20, justifyContent: 'center', alignItems: 'center', paddingBottom: 30 }}>
                    <Text style={{ color: '#333333', fontSize: 16, fontFamily: Mulish?.Regular }}>To check your scores and see how you did, </Text>
                    <Text style={{ color: '#333333', fontSize: 16, fontFamily: Mulish?.Regular }}>please sign up or log in!</Text>
                </View>

                <TouchableOpacity style={{ padding: 20, borderRadius: 100, backgroundColor: '#4259B7', justifyContent: 'center', alignItems: 'center', width: scr_width / 1.1 }}
                    onPress={() => {
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'Auth', state: { routes: [{ name: 'Register', params: { totalScore } }] } }],
                        });
                    }}
                >
                    <Text style={{ color: '#fff', fontSize: 16, fontFamily: Mulish?.SemiBold }}>Sign Up to View Scores</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SuccesScreen

const styles = StyleSheet.create({})