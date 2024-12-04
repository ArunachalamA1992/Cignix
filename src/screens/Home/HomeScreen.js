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
import { Iconviewcomponent } from '../../Components/Icontag';
import { Mulish } from '../../Global/FontFamily';
import { Badge } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { scr_height, scr_width } from '../../Components/Dimensions';
import Video, { VideoRef } from 'react-native-video';
import FastImage from 'react-native-fast-image';
import Videoplayercomponent from '../../Components/Videoplayercomponent';

// create a component
const HomeScreen = () => {
    const navigation = useNavigation();
    const [height, setHeight] = useState(undefined);
    const [homeSection] = useState([
        { id: 1, title: 'Profile', data: ['Profile'] },
        { id: 2, title: 'Score', data: ['Score'] },
        { id: 3, title: 'Recommended Videos', data: ['Recommended Videos'] },
        { id: 4, title: 'Upcoming Videos', data: ['Upcoming Videos'] },
    ]);
    const [upComingVideoData, setUpComingVideoData] = useState([
        { id: 1, title: 'Video Title - 2', sub_title: 'Day-2', video_url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
        { id: 2, title: 'Video Title - 3', sub_title: 'Day-3', video_url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
        { id: 3, title: 'Video Title - 4', sub_title: 'Day-4', video_url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
        { id: 4, title: 'Video Title - 5', sub_title: 'Day-5', video_url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    ]);

    const videoRef = useRef(null);
    const background = require('../../assets/Gallery/dummy.mp4');
    const [isPlaying, setIsPlaying] = useState(true); // Video play/pause state
    const [currentTime, setCurrentTime] = useState(0); // Current time in seconds
    const [duration, setDuration] = useState(0); // Total video duration

    // Optional: Define callbacks for buffering and errors.
    const onBuffer = (bufferInfo) => {
        console.log('Video is buffering:', bufferInfo);
    };

    const onError = (error) => {
        console.error('Video playback error:', error);
    };

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    // Callback for video progress
    const onProgress = (data) => {
        setCurrentTime(data.currentTime); // Update current time
    };

    // Callback for video load to get duration
    const onLoad = (data) => {
        setDuration(data.duration); // Set total duration
    };

    // Format time as mm:ss
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                hidden={false} // Hides the status bar
                backgroundColor={'#D9DDF0'} // Matches background color
                translucent={true}
                barStyle={'dark-content'}
            />
            <LinearGradient
                style={{
                    flex: 1, height: scr_height,
                    // justifyContent: 'center',
                    alignItems: 'center',
                }}
                start={{ x: 0, y: 1 }}
                end={{ x: 0, y: 0 }}
                colors={['#ffffff', '#D9DDF0']}>
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, paddingHorizontal: 15, marginVertical: 10 }}>
                    <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 100, backgroundColor: Color.softGrey }}>
                        <Image
                            source={require('../../assets/Gallery/profile.png')}
                            style={{ width: 50, height: 50, resizeMode: 'contain', borderRadius: 100 }}
                        />
                    </TouchableOpacity>
                    <View style={{ flex: 4, justifyContent: 'flex-start', alignItems: 'flex-start', paddingHorizontal: 5 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 3 }}>
                            <Text style={{ textAlign: 'left', fontSize: 15, color: Color.black, fontFamily: Mulish.Bold, }} >Hello,</Text>
                            <Text style={{ textAlign: 'left', fontSize: 15, color: Color.black, fontFamily: Mulish.Bold, paddingHorizontal: 5, letterSpacing: 0.3 }} numberOfLines={1}>Arunachalam Annamalai</Text>
                        </View>
                        <Text style={{ fontSize: 13, color: Color.lightBlack, fontFamily: Mulish.Medium, letterSpacing: 0.2 }} numberOfLines={1}>Here is Your SIM Test Score</Text>
                    </View>
                    <TouchableOpacity
                        style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end' }}
                        onPress={() => navigation.navigate('NotificationsList')}>
                        <View style={{ position: 'absolute', zIndex: 999, top: -5, right: 0 }}>
                            <Badge
                                badgeStyle={{
                                    position: 'absolute',
                                    zIndex: 999,
                                    backgroundColor: Color.notify,
                                    color: Color.white,
                                    // fontFamily: Manrope.Bold,
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
                <View style={{ width: scr_width - 40, height: height, alignItems: 'center' }}>
                    <Animated.SectionList
                        sections={homeSection}
                        scrollEnabled={true}
                        keyExtractor={(item, index) => item + index}
                        showsVerticalScrollIndicator={false}
                        scrollEventThrottle={1}
                        nestedScrollEnabled
                        initialNumToRender={5}
                        renderItem={({ item }) => {
                            switch (item) {
                                case 'Profile':
                                    return (
                                        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                                            <ImageBackground
                                                source={require('../../assets/Gallery/back.png')}
                                                style={{ width: '100%', height: 300, justifyContent: 'center', alignItems: 'center', resizeMode: 'cover' }}
                                            >
                                                <View style={{ flex: 1, position: 'absolute', justifyContent: 'center', alignItems: 'center' }}>
                                                    <Text style={{ fontSize: 36, color: Color.white, fontFamily: Mulish.SemiBold, letterSpacing: 0.5 }}>{`75` + '/' + `100`}</Text>
                                                    <Text style={{ fontSize: 12, color: Color.white, fontFamily: Mulish.Medium, marginTop: 5 }}>updated on November 30, 2024.</Text>

                                                    <TouchableOpacity style={{ padding: 10, paddingHorizontal: 30, backgroundColor: Color.white, borderRadius: 30, marginVertical: 20 }}>
                                                        <Text style={{ fontSize: 14, color: Color.notify, fontFamily: Mulish.SemiBold }}>Low Score</Text>
                                                    </TouchableOpacity>

                                                    <Text style={{ width: '70%', textAlign: 'center', fontSize: 14, color: Color.white, fontFamily: Mulish.SemiBold, lineHeight: 20, letterSpacing: 0.5 }}>* Complete Our Free Video Course To Improve Score</Text>

                                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '70%', height: 50, backgroundColor: '#5F6AA5', borderColor: Color.white, borderWidth: 0.2, borderRadius: 30, shadowOpacity: 0.5, marginVertical: 10 }}>
                                                        <View >
                                                            <Text style={{ paddingStart: 20, fontSize: 16, color: Color.white, fontFamily: Mulish.SemiBold }}>Start Video Course</Text>
                                                        </View>
                                                        <TouchableOpacity style={{ marginHorizontal: 0 }}>
                                                            <Iconviewcomponent
                                                                viewstyle={{ alignItems: 'center', justifyContent: 'center' }}
                                                                Icontag="Ionicons"
                                                                icon_size={50}
                                                                icon_color={Color.white}
                                                                iconname="play-circle"
                                                            />
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                                <TouchableOpacity style={{ position: 'absolute', top: 10, right: 10, marginHorizontal: 5 }}>
                                                    <Iconviewcomponent
                                                        viewstyle={{ alignItems: 'center', justifyContent: 'center' }}
                                                        Icontag="MaterialCommunityIcons"
                                                        icon_size={30}
                                                        icon_color={Color.white}
                                                        iconname="information-outline"
                                                    />
                                                </TouchableOpacity>
                                            </ImageBackground>
                                        </View>
                                    );
                                case 'Score':
                                    return (
                                        <View style={{ width: '100%', alignItems: 'center', marginTop: 20 }}>
                                            <Text style={{ width: '100%', textAlign: 'left', fontSize: 16, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5 }}>Recommended Videos</Text>
                                            <View style={{ width: '100%', height: 200, borderRadius: 10, marginVertical: 10 }}>
                                                <Video
                                                    source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }} // Replace with your video URL
                                                    style={[styles.video, { borderRadius: 50 }]}
                                                    controls={true} // Enables default media controls
                                                    resizeMode="contain" // Ensures the video scales correctly
                                                    onBuffer={(buffer) => console.log('Buffering:', buffer)} // Callback for buffering
                                                    onError={(error) => console.log('Error:', error)} // Callback for errors
                                                    onEnd={(text) => console.log('Video ended! ------------------ :', text)}
                                                />

                                                {/* <FastImage
                                                source={require('../../assets/Gallery/star.gif')}
                                                style={{ width: 200, height: 200 }}
                                            /> */}
                                            </View>
                                        </View>
                                    );
                                case 'Recommended Videos':
                                    return (
                                        <View style={{ width: '100%', alignItems: 'center', marginVertical: 20, }}>
                                            <Text style={{ width: '100%', textAlign: 'left', fontSize: 16, color: Color.black, fontFamily: Mulish.Bold, letterSpacing: 0.5 }}>Upcoming Videos</Text>
                                            <View style={{ width: '100%', height: 180 }}>
                                                <FlatList
                                                    data={upComingVideoData}
                                                    horizontal
                                                    showsHorizontalScrollIndicator={false}
                                                    renderItem={({ item, index }) => {
                                                        return (
                                                            <View key={index} style={{ width: 250, height: 150, borderRadius: 10, margin: 10, backgroundColor: 'red' }}>
                                                                <Video
                                                                    source={{ uri: item.video_url }} // Replace with your video URL
                                                                    style={styles.video}
                                                                    controls={true} // Enables default media controls
                                                                    resizeMode="cover" // Ensures the video scales correctly
                                                                    onBuffer={(buffer) => console.log('Buffering:', buffer)} // Callback for buffering
                                                                    onError={(error) => console.log('Error:', error)} // Callback for errors
                                                                    onEnd={(text) => console.log('Video ended! ------------------ :', text)}
                                                                />
                                                            </View>
                                                        );
                                                    }}
                                                />
                                            </View>
                                        </View>
                                    );
                                case 'Upcoming Videos':
                                    return (
                                        <View style={{ width: '100%', alignItems: 'center', marginVertical: 20 }}>
                                            <Text style={{ fontSize: 16, color: Color.white }}>recent Videos</Text>
                                            <Text style={{ fontSize: 16, color: Color.white }}>recent Videos</Text>
                                            <Text style={{ fontSize: 16, color: Color.white }}>recent Videos</Text>
                                            <Text style={{ fontSize: 16, color: Color.white }}>recent Videos</Text>
                                            <Text style={{ fontSize: 16, color: Color.white }}>recent Videos</Text>
                                        </View>
                                    );


                            }
                        }}
                    />
                </View>
            </LinearGradient >
        </SafeAreaView >
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.white,
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0, borderRadius: 10
    },
    video: {
        width: '100%',
        height: '100%', // Adjust height as needed
        resizeMode: 'contain',
        borderRadius: 60
    },
    controls: {
        marginTop: 20,
        alignItems: 'center',
    },
    button: {
        padding: 10,
        backgroundColor: '#1E90FF',
        borderRadius: 5,
        marginBottom: 10,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    timing: {
        color: '#FFF',
        fontSize: 14,
    },
});


//make this component available to the app
export default HomeScreen;
