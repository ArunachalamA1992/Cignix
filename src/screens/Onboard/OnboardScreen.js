//import liraries
import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Text,
  StatusBar,
  Image,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { scr_height, scr_width } from '../../Components/Dimensions';
import Color from '../../Global/Color';
import { Mulish } from '../../Global/FontFamily';
import { useNavigation } from '@react-navigation/native';

// create a component
const OnboardScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        hidden={false} // Hides the status bar
        backgroundColor="#0B1215" // Matches background color
        translucent={true}
      />
      <ImageBackground
        source={require('../../assets/Images/onboard_bg.png')}
        style={styles.image}
        resizeMode="cover">
        <View
          style={{
            flex: 1,
            width: scr_width,
            height: scr_height,
            justifyContent: 'flex-end',
            alignItems: 'center',
            bottom: 10,
            backgroundColor: 'transparent',
          }}>
          <View
            style={{
              width: '95%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ width: '95%', textAlign: 'center', fontSize: 36, color: Color.white, fontFamily: Mulish.Bold, letterSpacing: 0.5 }}>Your Smoke-Free Life Begins Now!</Text>
            <Text style={{ width: '95%', textAlign: 'center', fontSize: 16, color: Color.grey, fontFamily: Mulish.Medium, paddingVertical: 15, lineHeight: 22, letterSpacing: 0.5 }}>A cigarette a day takes your life away. Break free from tobacco and start living better today!</Text>


            <TouchableOpacity
              onPress={() =>
                navigation.reset({
                  index: 0,
                  routes: [{ name: 'Auth', params: { screen: 'SimTest' } }],
                })
              }
              style={{
                width: '90%',
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: Color.primary,
                borderRadius: 30,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: Color.white,
                  fontFamily: Mulish.SemiBold,
                }}>
                Get Started
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Auth')}
              style={{
                width: '90%',
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                marginVertical: 30,
                borderColor: Color.white,
                borderRadius: 30,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: Color.white,
                  fontFamily: Mulish.SemiBold,
                }}>
                Already Have an Account?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: scr_width,
    height: scr_height,
  },
});

//make this component available to the app
export default OnboardScreen;
