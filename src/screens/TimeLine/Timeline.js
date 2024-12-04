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


// create a component
const Timeline = () => {
    const navigation = useNavigation();
    const [currentPosition, setCurrentPosition] = useState(0);

    const customStyles = {
        stepIndicatorSize: 30,
        currentStepIndicatorSize: 40,
        separatorStrokeWidth: 2,
        currentStepStrokeWidth: 3,
        stepStrokeCurrentColor: Color.primary,
        stepStrokeWidth: 3,
        stepStrokeFinishedColor: '#27AE60',
        stepStrokeUnFinishedColor: Color.primary,
        separatorFinishedColor: '#27AE60',
        separatorUnFinishedColor: '#aaaaaa',
        stepIndicatorFinishedColor: '#27AE60',
        stepIndicatorUnFinishedColor: '#ffffff',
        stepIndicatorCurrentColor: Color.primary,
        stepIndicatorLabelFontSize: 13,
        currentStepIndicatorLabelFontSize: 13,
        stepIndicatorLabelCurrentColor: '#fe7013',
        stepIndicatorLabelFinishedColor: '#27AE60',
        stepIndicatorLabelUnFinishedColor: '#aaaaaa',
        labelColor: '#999999',
        labelSize: 13,
    };

    const steps = [
        { label: 'Complete the SIM Test', subtext: 'Start by taking the SIM Test to evaluate your smoking habits and readiness to quit.' },
        { label: 'Watch All 7 Videos', subtext: "Each video is designed to guide you through the quitting process." },
        { label: 'Retake the SIM Test (SIM Test 2)', subtext: "Each video is designed to guide you through the quitting process." },
        { label: 'Upgrade to premium', subtext: "Upgrade to Premium for advanced resources, personal coaching to support your smoke-free journey." },
    ];

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
                        icon_size={26}
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
                            1
                        </Badge>
                    </View>
                    <Iconviewcomponent
                        viewstyle={{ alignItems: 'center', justifyContent: 'center' }}
                        Icontag="Ionicons"
                        icon_size={25}
                        icon_color={Color.black}
                        iconname="notifications-outline"
                    />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, width: scr_width, alignItems: 'center' }}>
                <ScrollView
                    contentContainerStyle={styles.scrollContent}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}>

                    <View
                        style={{
                            width: scr_width - 50,
                            // height: scr_height / 2 + 150,
                        }}>

                        <StepIndicator
                            customStyles={customStyles}
                            currentPosition={Math.min(currentPosition, steps.length - 1)} // Ensure currentPosition stays within the valid range
                            labels={steps.map((step, index) => (
                                <View
                                    style={{
                                        width: '95%',
                                        justifyContent: 'flex-start',
                                        alignItems: 'flex-start',
                                        padding: 5,
                                        paddingVertical: 15,
                                    }}
                                    key={index} // Use key for React list rendering
                                >
                                    <Text
                                        style={{
                                            textAlign: 'left',
                                            paddingVertical: 5,
                                            fontSize: 16,
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
                                            fontSize: 13,
                                            color: Color.cloudyGrey,
                                            fontFamily: Mulish.Medium,
                                            letterSpacing: 0.5,
                                        }}
                                    >
                                        {step.subtext}
                                    </Text>
                                </View>
                            ))}
                            stepCount={steps.length} // Limit the indicators to the exact number of steps
                            direction="vertical"
                            onPress={position => setCurrentPosition(position)} // Optional: Handle step click
                            renderStepIndicator={({ position }) => {
                                const step = steps[position]; // Only render if step exists
                                if (!step) return null;
                                // console.log("status step ------------------ :", step.status);
                                if (step.status === 'Completed') {
                                    return (
                                        <View
                                            style={{
                                                width: 30,
                                                height: 30,
                                                borderRadius: 50,
                                                backgroundColor: '#27AE60',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <MIcon
                                                name="check"
                                                size={25}
                                                color={Color.white} // Set the color for the checkmark icon
                                            />
                                        </View>
                                    );
                                } else {
                                    return (
                                        <View
                                            style={{
                                                width: 30,
                                                height: 30,
                                                borderRadius: 50,
                                                backgroundColor:
                                                    position === currentPosition
                                                        ? Color.primary // Active step color
                                                        : Color.cloudyGrey, // Inactive step color
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    color: position === currentPosition ? Color.white : Color.black, // Adjust text color
                                                    fontSize: 16,
                                                    fontFamily: Mulish.Bold,
                                                }}
                                            >
                                                {position + 1}
                                            </Text>
                                        </View>
                                    );
                                }
                            }}
                        />
                    </View>

                    <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginVertical: 10, marginBottom: 100 }}>
                        <ImageBackground
                            source={require('../../assets/Gallery/road.png')}
                            style={{ width: scr_width - 30, height: 180, resizeMode: 'contain', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}
                        >
                            <View style={{ flex: 1, width: '100%', position: 'absolute', justifyContent: 'center', alignItems: 'flex-start', borderRadius: 10 }}>
                                <Text style={{ fontSize: 18, color: Color.white, fontFamily: Mulish.SemiBold, marginHorizontal: 20, letterSpacing: 0.5 }}>Go Premium</Text>
                                <Text style={{ fontSize: 18, color: Color.white, fontFamily: Mulish.SemiBold, marginHorizontal: 20, letterSpacing: 0.5 }}>For Extra Benefits!</Text>

                                <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, paddingVertical: 5 }}>
                                    <Text style={{ fontSize: 12, color: '#F5F5F5', fontFamily: Mulish.Medium, letterSpacing: 0.5 }}>Lorem ipsum dolor sit amet</Text>
                                </View>
                                <View style={{ width: '100%', paddingHorizontal: 10, marginTop: 20 }}>
                                    <TouchableOpacity style={{ width: '50%', height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: Color.white, borderRadius: 5 }}>
                                        <Text style={{ fontSize: 16, color: Color.black, fontFamily: Mulish.SemiBold }}>See Plans</Text>
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
        height: 'auto',
        alignItems: 'center',
        backgroundColor: Color.white,
    },
    scrollContent: {
        height: 'auto',
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
});

//make this component available to the app
export default Timeline;
