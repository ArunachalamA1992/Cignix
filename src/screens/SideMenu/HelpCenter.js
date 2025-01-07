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
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import { scr_height, scr_width } from '../../Components/Dimensions';
import Color from '../../Global/Color';
import { Mulish } from '../../Global/FontFamily';
import { Iconviewcomponent } from '../../Components/Icontag';
import { useNavigation } from '@react-navigation/native';

// create a component
const HelpCenter = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      contentContainerStyle={styles.scrollContent}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={{ width: '100%' }}>
          <Text
            style={{
              textAlign: 'justify',
              fontSize: 18,
              color: Color.black,
              fontFamily: Mulish.Bold,
              letterSpacing: 0.5, paddingVertical: 5
            }}>
            Welcome to the Cignix Help Center!
          </Text>
          <Text
            style={{
              textAlign: 'justify',
              fontSize: 14,
              color: Color.cloudyGrey,
              fontFamily: Mulish.Medium,
              lineHeight: 22,
              letterSpacing: 0.5,
              paddingVertical: 5,
            }}>
            We're so glad you're here. Quitting smoking is a journey, and you
            don’t have to do it alone. Whether you're looking for guidance,
            helpful tips, or answers to your questions, we’re here to support
            you every step of the way. Browse the sections below to get the help
            you need and take your first step toward a healthier, smoke-free
            life.
          </Text>

          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginVertical: 20,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('GetStarted')}
              style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 2,
                  borderColor: Color.red,
                  borderRadius: 50,
                }}>
                <Iconviewcomponent
                  viewstyle={{ alignItems: 'center', justifyContent: 'center' }}
                  Icontag="MaterialIcons"
                  icon_size={35}
                  icon_color={Color.black}
                  iconname="smoke-free"
                />
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 18,
                  color: Color.black,
                  fontFamily: Mulish.Bold,
                  letterSpacing: 0.5,
                  paddingVertical: 5,
                }}
                numberOfLines={2}>
                Get Started With Cignix
              </Text>
              <Text
                style={{
                  textAlign: 'justify',
                  fontSize: 14,
                  color: Color.cloudyGrey,
                  fontFamily: Mulish.Medium,
                  letterSpacing: 0.5,
                }}
                numberOfLines={2}>
                Embark on your journey to quit smoking with Cignix
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginVertical: 20,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('FAQs')}
              style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 2,
                  borderColor: Color.red,
                  borderRadius: 50,
                }}>
                <Iconviewcomponent
                  viewstyle={{ alignItems: 'center', justifyContent: 'center' }}
                  Icontag="MaterialIcons"
                  icon_size={30}
                  icon_color={Color.black}
                  iconname="question-mark"
                />
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 16,
                  color: Color.black,
                  fontFamily: Mulish.Bold,
                  letterSpacing: 0.5,
                  paddingVertical: 5,
                }}
                numberOfLines={2}>
                Frequently Asked Questions
              </Text>
              <Text
                style={{
                  textAlign: 'justify',
                  fontSize: 14,
                  color: Color.cloudyGrey,
                  fontFamily: Mulish.Medium,
                  letterSpacing: 0.5,
                }}
                numberOfLines={2}>
                Find answers to help you quit smoking with Cignix
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginVertical: 20,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('PricePayments')}
              style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 2,
                  borderColor: Color.red,
                  borderRadius: 50,
                }}>
                <Iconviewcomponent
                  viewstyle={{ alignItems: 'center', justifyContent: 'center' }}
                  Icontag="MaterialCommunityIcons"
                  icon_size={30}
                  icon_color={Color.black}
                  iconname="sack"
                />
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 16,
                  color: Color.black,
                  fontFamily: Mulish.Bold,
                  letterSpacing: 0.5,
                  paddingVertical: 5,
                }}
                numberOfLines={2}>
                Pricing and Payment
              </Text>
              <Text
                style={{
                  textAlign: 'justify',
                  fontSize: 14,
                  color: Color.cloudyGrey,
                  fontFamily: Mulish.Medium,
                  letterSpacing: 0.5,
                }}
                numberOfLines={2}>
                Want to know about plans and payment methods? Lear more here.
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginVertical: 20,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('TechnicalSupport')}
              style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 2,
                  borderColor: Color.red,
                  borderRadius: 50,
                }}>
                <Iconviewcomponent
                  viewstyle={{ alignItems: 'center', justifyContent: 'center' }}
                  Icontag="MaterialCommunityIcons"
                  icon_size={30}
                  icon_color={Color.black}
                  iconname="hammer-screwdriver"
                />
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 16,
                  color: Color.black,
                  fontFamily: Mulish.Bold,
                  letterSpacing: 0.5,
                  paddingVertical: 5,
                }}
                numberOfLines={2}>
                Technical Support
              </Text>
              <Text
                style={{
                  textAlign: 'justify',
                  fontSize: 14,
                  color: Color.cloudyGrey,
                  fontFamily: Mulish.Medium,
                  letterSpacing: 0.5,
                }}
                numberOfLines={2}>
                Get help with login, app errors, syncing, and restoring
                progress.
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginVertical: 20,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ContactUs')}
              style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 2,
                  borderColor: Color.red,
                  borderRadius: 50,
                }}>
                <Iconviewcomponent
                  viewstyle={{ alignItems: 'center', justifyContent: 'center' }}
                  Icontag="Ionicons"
                  icon_size={30}
                  icon_color={Color.black}
                  iconname="call"
                />
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 16,
                  color: Color.black,
                  fontFamily: Mulish.Bold,
                  letterSpacing: 0.5,
                  paddingVertical: 5,
                }}
                numberOfLines={2}>
                Ways to Contact Us
              </Text>
              <Text
                style={{
                  textAlign: 'justify',
                  fontSize: 14,
                  color: Color.cloudyGrey,
                  fontFamily: Mulish.Medium,
                  letterSpacing: 0.5,
                }}
                numberOfLines={2}>
                Discover how to reach us and connect with our support team
              </Text>
            </TouchableOpacity>
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
    width: '95%',
    backgroundColor: Color.white,
    marginBottom: 20,
  },
  scrollContent: {
    width: '100%',
    padding: 10,
    alignItems: 'center',
    backgroundColor: Color.white,
  },
});

//make this component available to the app
export default HelpCenter;
