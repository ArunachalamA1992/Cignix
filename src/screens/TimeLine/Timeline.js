//import liraries
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
import { Badge } from 'react-native-paper';
import { scr_height, scr_width } from '../../Components/Dimensions';
import StepIndicator from 'react-native-step-indicator';
import moment from 'moment';
import MIcon from 'react-native-vector-icons/Feather';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import MMIcon from 'react-native-vector-icons/MaterialIcons';
import FIcon from 'react-native-vector-icons/Fontisto';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import fetchData from '../../Config/fetchData';
import { useFocusEffect } from '@react-navigation/native';



// create a component
const Timeline = () => {
    const navigation = useNavigation();
    const [currentPosition, setCurrentPosition] = useState(1);

    const customStyles = {
        stepIndicatorSize: 30,
        currentStepIndicatorSize: 40,
        separatorStrokeWidth: 1,
        currentStepStrokeWidth: 0,
        // separatorStrokeUnfinishedWidth:0
        // stepStrokeCurrentColor: Color.red,
        // stepStrokeWidth: 10,
        // stepStrokeFinishedColor: 'red',
        // stepStrokeUnFinishedColor: Color.primary,
        // separatorFinishedColor: '#27AE60',
        // separatorUnFinishedColor: '#aaaaaa',
        // stepIndicatorFinishedColor: '#27AE60',
        // stepIndicatorUnFinishedColor: '#ffffff',
        // stepIndicatorCurrentColor: Color.primary,
        // stepIndicatorLabelFontSize: 13,
        // currentStepIndicatorLabelFontSize: 13,
        // stepIndicatorLabelCurrentColor: '#fe7013',
        // stepIndicatorLabelFinishedColor: '#27AE60',
        // stepIndicatorLabelUnFinishedColor: '#aaaaaa',
        // labelColor: '#999999',
        // labelSize: 13,
    };

    const steps = [
        { label: 'Complete the SIM Test', subtext: 'Description for Step 1', status: 'Completed' },
        { label: 'Watch All 7 Videos', subtext: 'Description for Step 2', status: 'Pending' },
        { label: 'Retake the SIM Test', subtext: 'Description for Step 3', status: 'Pending' },
        { label: 'Upgrade to premium', subtext: 'Description for Step 4', status: 'Pending' },
        // { label: 'Step 5', subtext: 'Description for Step 5', status: 'Pending' },

        // { label: 'Complete the SIM Test', subtext: 'Start by taking the SIM Test to evaluate your smoking habits and readiness to quit.' },
        // { label: 'Watch All 7 Videos', subtext: "Each video is designed to guide you through the quitting process." },
        // { label: 'Retake the SIM Test (SIM Test 2)', subtext: "Each video is designed to guide you through the quitting process." },
        // { label: 'Upgrade to premium', subtext: "Upgrade to Premium for advanced resources, personal coaching to support your smoke-free journey." },

    ];

    const GetSimTest = async () => {
        try {
            const Getcount = await fetchData?.Getuserdata();
            if (Getcount?.success == true) {
                console.log("GET DATA", Getcount?.data);
                if (Getcount?.data?.step == 0) {
                    setCurrentPosition(0);
                } else {
                    const data = Getcount?.data?.step - 1;
                    setCurrentPosition(data);
                }
            }
        } catch (error) {
            console.log("Error", error);
        }
    }
    useFocusEffect(
        React.useCallback(() => {
            GetSimTest();
            return () => {
            };
        }, [])
    );
    //   useEffect(() => {
    //       GetSimTest();
    //   },[])

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                hidden={false} // Hides the status bar
                backgroundColor={Color.white} // Matches background color
                translucent={true}
                barStyle={'dark-content'}
            />
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15, paddingHorizontal: 15 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Iconviewcomponent
                        viewstyle={{ alignItems: 'center', justifyContent: 'center' }}
                        Icontag="Ionicons"
                        icon_size={30}
                        icon_color={Color.black}
                        iconname="chevron-back"
                    />
                </TouchableOpacity>
                <View>
                    <Text style={{ fontSize: 20, color: Color.black, fontFamily: Mulish.Bold }}>Roadmap</Text>
                </View>
                <TouchableOpacity
                    style={{ marginHorizontal: 10 }}
                    onPress={() => navigation.navigate('notification')}>
                    <View style={{ position: 'absolute', zIndex: 999, top: -5, right: -5 }}>
                        <Badge
                            badgeStyle={{
                                position: 'absolute',
                                zIndex: 999,
                                backgroundColor: Color.red,
                                color: Color.white,
                                fontSize: 12,
                            }} maxLength={3} >
                            10
                        </Badge>
                    </View>
                    <Iconviewcomponent
                        viewstyle={{ alignItems: 'center', justifyContent: 'center' }}
                        Icontag="Ionicons"
                        icon_size={30}
                        icon_color={Color.black}
                        iconname="notifications-outline"
                    />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, width: '100%', alignItems: 'center' }}>
                <ScrollView
                    contentContainerStyle={styles.scrollContent}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}>

                    <StepIndicator
                        customStyles={customStyles}
                        currentPosition={currentPosition}
                        labels={steps.map((step, index) => (
                            <View
                                style={{
                                    width: '100%',
                                    justifyContent: 'flex-start',
                                    alignItems: 'flex-start',
                                    padding: 5,
                                    paddingVertical: 20,
                                }}
                                key={index} // Use key for React list rendering
                            >
                                <Text
                                    style={{
                                        textAlign: 'left',
                                        paddingVertical: 5,
                                        fontSize: 18,
                                        color: Color.black,
                                        fontFamily: Mulish.SemiBold,
                                        letterSpacing: 0.5,
                                    }}
                                >
                                    {step.label}
                                </Text>
                                <Text
                                    style={{
                                        textAlign: 'justify',
                                        fontSize: 14,
                                        color: Color.cloudyGrey,
                                        fontFamily: Mulish.Medium,
                                        letterSpacing: 0.5,
                                    }}
                                >
                                    {step.subtext}
                                </Text>
                            </View>
                        ))}
                        stepCount={steps.length}
                        direction="vertical"
                        renderStepIndicator={({ position }) => {
                            const step = steps[position];
                            if (!step) return null;

                            if (step.status === 'Completed') {
                                return (
                                    <View style={styles.completedIndicator}>
                                        <Text style={styles.indicatorText}>✓</Text>
                                    </View>
                                );
                            } else if (step.status === 'In Progress') {
                                return (
                                    <View style={styles.inProgressIndicator}>
                                        <Text style={styles.indicatorText}>{position + 1}</Text>
                                    </View>
                                );
                            } else {
                                return (
                                    <View style={styles.pendingIndicator}>
                                        <Text style={styles.indicatorText}>{position + 1}</Text>
                                    </View>
                                );
                            }
                        }}
                        onPress={(position) => setCurrentPosition(position)} // Optional: Handle step click
                    />

                    <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginVertical: 20, paddingBottom: scr_height / 15 }}>
                        <ImageBackground
                            source={require('../../assets/Gallery/road.png')}
                            style={{ width: scr_width - 50, height: 180, resizeMode: 'contain', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}
                        >
                            <View style={{ flex: 1, width: '100%', position: 'absolute', justifyContent: 'center', alignItems: 'flex-start', borderRadius: 10 }}>
                                <Text style={{ fontSize: 20, color: Color.white, fontFamily: Mulish.SemiBold, marginHorizontal: 20, letterSpacing: 0.5 }}>Go Premium</Text>
                                <Text style={{ fontSize: 20, color: Color.white, fontFamily: Mulish.SemiBold, marginHorizontal: 20, letterSpacing: 0.5 }}>For Extra Benefits!</Text>

                                <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, paddingVertical: 5 }}>
                                    <Text style={{ fontSize: 14, color: '#F5F5F5', fontFamily: Mulish.Medium, letterSpacing: 0.5 }}>Lorem ipsum dolor sit amet</Text>
                                </View>
                                <View style={{ width: '100%', paddingHorizontal: 10, marginTop: 20 }}>
                                    <TouchableOpacity style={{ width: '50%', height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: Color.white, borderRadius: 5 }}>
                                        <Text style={{ fontSize: 18, color: Color.black, fontFamily: Mulish.SemiBold }}>See Plans</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.white
    },
    scrollContent: {
        padding: 10,
        justifyContent: 'center',
    },
    labelContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginLeft: 10,
        marginRight: 20
    },
    label: {
        textAlign: 'justify',
        fontSize: 16,
        color: Color.black,
        fontFamily: Mulish.Bold,
    },
    stepLabel: {
        textAlign: 'justify',
        fontSize: 14,
        color: Color.cloudyGrey,
        fontFamily: Mulish.Medium, paddingVertical: 5
    },

    completedIndicator: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#4AA96C',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inProgressIndicator: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#27AE60',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pendingIndicator: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#D9DDF0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    indicatorText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
});

//make this component available to the app
export default Timeline;
