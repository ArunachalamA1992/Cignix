//import liraries
import React, { useState, useEffect, useCallback, useRef } from 'react';
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
import { useNavigation } from '@react-navigation/native';

// create a component
const NotificationsList = () => {

    const navigation = useNavigation();
    const [selectItem, setSelectedItem] = useState('');
    const [notificationData, setNotificationData] = useState([
        {
            'id': '0',
            'notify_Image': require('../../assets/Logos/cignix_white.png'),
            'notify_Title': `You're making progress!`,
            'notify_sub': 'Only 2 more videos to unlock your next SIM Test.',
            'read': false, // New property
        },
        {
            'id': '1',
            'notify_Image': require('../../assets/Logos/cignix_black.png'),
            'notify_Title': `Scores Improved!`,
            'notify_sub': 'Your score improved by 15%! Keep up the good work!',
            'read': false, // New property
        },
        {
            'id': '2',
            'notify_Image': require('../../assets/Logos/cignix_black.png'),
            'notify_Title': `Don't forget !`,
            'notify_sub': 'To watch today’s videoStay on track with your journey.',
            'read': false, // New property
        },
        {
            'id': '3',
            'notify_Image': require('../../assets/Logos/cignix_black.png'),
            'notify_Title': `Scores Improved!`,
            'notify_sub': 'Your score improved by 15%! Keep up the good work!',
            'read': false, // New property
        },
        {
            'id': '4',
            'notify_Image': require('../../assets/Logos/cignix_black.png'),
            'notify_Title': `Don't forget !`,
            'notify_sub': 'To watch today’s videoStay on track with your journey.',
            'read': false, // New property
        },
        {
            'id': '5',
            'notify_Image': require('../../assets/Logos/cignix_black.png'),
            'notify_Title': `Scores Improved!`,
            'notify_sub': 'Your score improved by 15%! Keep up the good work!',
            'read': false, // New property
        },
        {
            'id': '6',
            'notify_Image': require('../../assets/Logos/cignix_black.png'),
            'notify_Title': `Don't forget !`,
            'notify_sub': 'To watch today’s videoStay on track with your journey.',
            'read': false, // New property
        },
        {
            'id': '7',
            'notify_Image': require('../../assets/Logos/cignix_black.png'),
            'notify_Title': `Scores Improved!`,
            'notify_sub': 'Your score improved by 15%! Keep up the good work!',
            'read': false, // New property
        },
        {
            'id': '8',
            'notify_Image': require('../../assets/Logos/cignix_black.png'),
            'notify_Title': `Don't forget !`,
            'notify_sub': 'To watch today’s videoStay on track with your journey.',
            'read': false, // New property
        },
    ]);


    const onSelectedItem = (item) => {
        try {
            setNotificationData((prevData) =>
                prevData.map((notification) =>
                    notification.id === item.id
                        ? { ...notification, read: true } // Mark as read
                        : notification
                )
            );
            setSelectedItem(item.id); // Optional: Keep track of the selected item
        } catch (error) {
            console.log('catch in onSelected_Item :', error);

        }
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={notificationData}
                renderItem={({ item, index }) => (
                    <View key={index} style={{ width: '100%', alignItems: 'center', backgroundColor: Color.white }}>
                        <TouchableOpacity
                            onPress={() => onSelectedItem(item)}
                            style={{
                                width: '97%',
                                flexDirection: 'row',
                                alignItems: 'center',
                                borderRadius: 5,
                                margin: 5,
                                padding: 10,
                                backgroundColor: item.read ? Color.primary : Color.softGrey,
                            }}
                        >
                            <View
                                style={{
                                    flex: 0,
                                    width: 80,
                                    height: 80,
                                    padding: 5,
                                    backgroundColor: Color.grey,
                                    borderRadius: 10,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Image
                                    source={item.notify_Image}
                                    style={{ width: '100%', height: '100%', resizeMode: 'contain', borderRadius: 10 }}
                                />
                            </View>
                            <View style={{ flex: 3, justifyContent: 'center', alignItems: 'flex-start', paddingHorizontal: 10 }}>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        color: item.read ? Color.white : Color.black,
                                        fontFamily: Mulish.Bold,
                                        letterSpacing: 0.5,
                                        paddingVertical: 5,
                                    }}
                                    numberOfLines={1}
                                >
                                    {item.notify_Title}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 14,
                                        color: item.read ? Color.white : Color.cloudyGrey,
                                        fontFamily: Mulish.Medium,
                                        letterSpacing: 0.5,
                                    }}
                                    numberOfLines={2}
                                >
                                    {item.notify_sub}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{ width: '100%', height: 1, backgroundColor: '#F9F9F9', marginVertical: 5 }}></View>
                    </View>
                )}
                style={{ width: '100%' }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1, padding: 10,
        alignItems: 'center',
        backgroundColor: Color.white,
    },
});

//make this component available to the app
export default NotificationsList;
