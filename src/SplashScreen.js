//import liraries
import React, { useEffect, useState } from 'react';
import {
    View,
    StyleSheet,
    Animated, Text,
    StatusBar,
    SafeAreaView,
} from 'react-native';
import { useDispatch } from 'react-redux';
import Color from './Global/Color';
import { useNavigation } from '@react-navigation/native';
// import { SvgUri } from 'react-native-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';


// create a component
const SplashScreen = () => {
    const imageScale = new Animated.Value(0.1);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const GetUserdata = async()=>{
        try {
            const ACCESS_TOKEN = await AsyncStorage.getItem('ACCESS_TOKEN');
           if((ACCESS_TOKEN !== null)){
            navigation.replace("Tab")
           }else{
            navigation.replace("OnboardScreen")
           }
       
        } catch (error) {
            console.log('catch in splash_Screen ', error);  
        }
    }
    useEffect(() => {
        try {
            const SplashLoad = setTimeout(() => {
                // getloginData();
                // getUserData();
                // navigation.navigate("OnboardScreen")
                // navigation.navigate("Tab")
                GetUserdata();
                console.log("******************* LOADING ********************");

            }, 3000);
            return () => clearInterval(SplashLoad);
        } catch (error) {
            console.log('catch in splash_Screen ', error);
        }
    }, [loading]);

    Animated.timing(imageScale, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
    }).start();

    return (
        <View style={styles.container}>
            <StatusBar
                hidden={true} // Hides the status bar
            />
            <Animated.Image
                // source={{
                //     uri: 'https://shopeasey.s3.ap-south-1.amazonaws.com/mobile/assets/logos/main.png',
                // }}
                source={require('../src/assets/Logos/cignix_white.png')}
                style={[styles.image, { transform: [{ scale: imageScale }] }]}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0B1215',
    },

    image: {
        width: 180,
        height: 180,
        resizeMode: 'contain',
    },
});

//make this component available to the app
export default SplashScreen;
