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
  Pressable,
} from 'react-native';

import { Switch } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import Color from '../../Global/Color';
import { Mulish } from '../../Global/FontFamily';
import { Iconviewcomponent } from '../../Components/Icontag';
import { scr_width } from '../../Components/Dimensions';
import fetchData from '../../Config/fetchData';
import common_fn from '../../Components/common_fn';

// create a component
const NotificationSettings = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isEmailSwitchOn, setIsEmailSwitchOn] = useState(false);
  const [isSmsSwitchOn, setIsSmsSwitchOn] = useState(false);
  const [isWhatsAppSwitchOn, setIsWhatsAppSwitchOn] = useState(false);
  const [isRemainderSwitchOn, setIsRemainderSwitchOn] = useState(false);
  const [isCommunitySwitchOn, setIsCommunitySwitchOn] = useState(false);
  const [getdata, setgetdata] = useState("");
  useEffect(() => {
    Getnotification();
  }, [])
  // Getnotification : 
  const Getnotification = async () => {
    try {
      const getdata = await fetchData?.Getnotification();
      if (getdata?.success == true) {
        setgetdata(getdata?.data);
        setIsEmailSwitchOn(getdata?.data[1]?.status);
        setIsWhatsAppSwitchOn(getdata?.data[0]?.status);
        setIsRemainderSwitchOn(getdata?.data[4]?.status);
        setIsCommunitySwitchOn(getdata?.data[3]?.status);
        setIsSmsSwitchOn(getdata?.data[2]?.status);
        console.log("data", getdata?.data);
      } else {
        console.log("getdata", getdata);
      }
    } catch (error) {
      console.log("CATCH IN GET NOTIFICATION", error);
    }
  }
  // Email update : 
  const Emailupdate = async (t, id) => {
    try {
      setIsEmailSwitchOn(t);
      const data = {
        status: t
      }
      const update = await fetchData?.UpdateNotification(id, data);
      if (update?.success == true) {
        common_fn.showToast(update?.message);
        Getnotification();
      }
    } catch (error) {
      console.log('CATCH IN EMAIL UPDATE', error);
    }
  }
  // Push Notification update : 
  const PushNotificationupdate = async (t, id) => {
    try {
      setIsSmsSwitchOn(t);
      const data = {
        status: t
      }
      const update = await fetchData?.UpdateNotification(id, data);
      if (update?.success == true) {
        common_fn.showToast(update?.message);
        Getnotification();
      }

    } catch (error) {
      console.log('CATCH IN PUSH NOTIFICATION UPDATE', error);
    }
  }
  // WhatsApp update : 
  const WhatsAppupdate = async (t, id) => {
    try {
      setIsWhatsAppSwitchOn(t);
      const data = {
        status: t
      }
      const update = await fetchData?.UpdateNotification(id, data);
      if (update?.success == true) {
        common_fn.showToast(update?.message);
        Getnotification();
      }

    } catch (error) {
      console.log('CATCH IN WHATSAPP UPDATE', error);
    }
  }
  // Remainder update : 
  const Remainderupdate = async (t, id) => {
    try {
      setIsRemainderSwitchOn(t);
      const data = {
        status: t
      }
      const update = await fetchData?.UpdateNotification(id, data);
      if (update?.success == true) {
        common_fn.showToast(update?.message);
        Getnotification();
      }

    } catch (error) {
      console.log('CATCH IN REMAINDER UPDATE', error);
    }
  }
  // Community update : 
  const Communityupdate = async (t, id) => {
    try {
      setIsCommunitySwitchOn(t);
      const data = {
        status: t
      }
      const update = await fetchData?.UpdateNotification(id, data);
      if (update?.success == true) {
        common_fn.showToast(update?.message);
        Getnotification();
      }
    } catch (error) {
      console.log('CATCH IN COMMUNITY UPDATE', error);

    }
  }
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View
        style={{
          backgroundColor: Color?.white,
          flexDirection: 'row',
          paddingLeft: 5,
          paddingTop: 20,
          paddingBottom: 20,
        }}>
        <Pressable
          style={{ width: scr_width / 5 }}
          onPress={() => {
            navigation?.goBack();
          }}>
          <Iconviewcomponent
            // viewstyle={{ alignItems: 'center', justifyContent: 'center' }}
            Icontag="Ionicons"
            icon_size={25}
            icon_color={'#000'}
            iconname={'chevron-back'}
          />
        </Pressable>
        <View>
          <Text
            style={{ fontFamily: Mulish?.SemiBold, fontSize: 22, color: '#000' }}>
            Notification Settings
          </Text>
        </View>
      </View>
      <Text
        style={{
          width: scr_width,
          padding: 10,
          fontSize: 22,
          color: Color.black,
          fontFamily: Mulish.Bold,
          // letterSpacing: 0.5,
        }}>
        Choose Notification Channels
      </Text>

      <View style={{ padding: 10, gap: 10 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: Mulish?.Medium,
              color: '#333333',
            }}>
            Email Notification
          </Text>
          <View style={styles.switchContainer}>
            <Switch
              value={isEmailSwitchOn}
              onValueChange={(t) => {
                Emailupdate(t, getdata[1]?._id);
              }}
              color={Color.primary}
              thumbColor={isSmsSwitchOn ? Color.primary : '#f5f5f5'}
              trackColor={{ false: '#767577', true: '#81b0ff' }}
            />
          </View>
        </View>
        <View style={{ width: scr_width / 1.4 }}>
          <Text
            style={{
              color: '#666666',
              fontSize: 16,
              fontFamily: Mulish?.Regular,
            }}>
            Receive notification all of the messages, videos, Progress Updates.
          </Text>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          height: 5,
          backgroundColor: '#F9F9F9',
          borderRadius: 10,
          marginVertical: 5,
        }}></View>

      <View style={{ padding: 10, gap: 10 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: Mulish?.Medium,
              color: '#333333',
            }}>
            Push Notification
          </Text>
          <View style={styles.switchContainer}>
            <Switch
              value={isSmsSwitchOn}
              onValueChange={(t) => {
                PushNotificationupdate(t, getdata[2]?._id);
              }}
              color={Color.primary}
              thumbColor={isSmsSwitchOn ? Color.primary : '#f5f5f5'}
              trackColor={{ false: '#767577', true: '#81b0ff' }}
            />
          </View>
        </View>
        <View style={{ width: scr_width / 1.4 }}>
          <Text
            style={{
              color: '#666666',
              fontSize: 16,
              fontFamily: Mulish?.Regular,
            }}>
            Receive notification all of the messages, videos, Progress Updates.
          </Text>
        </View>
      </View>

      <View
        style={{
          width: '100%',
          height: 5,
          backgroundColor: '#F9F9F9',
          borderRadius: 10,
          marginVertical: 5,
        }}></View>
      <View style={{ padding: 10, gap: 10 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: Mulish?.Medium,
              color: '#333333',
            }}>
            Whatsapp Notifaction
          </Text>
          <View style={styles.switchContainer}>
            <Switch
              value={isWhatsAppSwitchOn}
              onValueChange={(t) => {
                WhatsAppupdate(t, getdata[0]?._id);
              }}
              color={Color.primary}
              thumbColor={isSmsSwitchOn ? Color.primary : '#f5f5f5'}
              trackColor={{ false: '#767577', true: '#81b0ff' }}
            />
          </View>
        </View>
        <View style={{ width: scr_width / 1.4 }}>
          <Text
            style={{
              color: '#666666',
              fontSize: 16,
              fontFamily: Mulish?.Regular,
            }}>
            Receive notification all of the messages, videos, Progress Updates.
          </Text>
        </View>
      </View>

      <View
        style={{
          width: '100%',
          height: 5,
          backgroundColor: Color.softGrey,
          borderRadius: 10,
          marginVertical: 10,
        }}></View>

      <Text
        style={{
          width: '100%',
          padding: 10,
          fontSize: 20,
          color: Color.black,
          fontFamily: Mulish.Bold,
          letterSpacing: 0.5,
        }}>
        Types of Notification
      </Text>

      <View
        style={{
          width: scr_width / 1.08,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: Color.white,
          padding: 10,
          marginVertical: 10,
        }}>
        <View
          style={{ flex: 3, justifyContent: 'center', alignItems: 'flex-start' }}>
          <Text
            style={{
              fontSize: 18,
              textAlign: 'justify',
              color: Color.black,
              fontFamily: Mulish.SemiBold,
              letterSpacing: 0.5,
              padding: 3,
            }}>
            Remainders
          </Text>
        </View>
        <View style={styles.switchContainer}>
          <Switch
            value={isRemainderSwitchOn}
            onValueChange={(t) => {
              Remainderupdate(t, getdata[4]?._id);
            }}
            color={Color.primary}
            thumbColor={isRemainderSwitchOn ? Color.primary : '#f5f5f5'}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
          />
        </View>
      </View>
      <View
        style={{
          width: '100%',
          height: 5,
          backgroundColor: '#F9F9F9',
          borderRadius: 10,
          marginVertical: 5,
        }}></View>
      <View
        style={{
          width: scr_width / 1.08,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: Color.white,
          padding: 10,
          marginVertical: 10,
        }}>
        <View
          style={{ flex: 3, justifyContent: 'center', alignItems: 'flex-start' }}>
          <Text
            style={{
              fontSize: 18,
              textAlign: 'justify',
              color: Color.black,
              fontFamily: Mulish.SemiBold,
              letterSpacing: 0.5,
              padding: 3,
            }}>
            Community Updates
          </Text>
        </View>
        <View style={styles.switchContainer}>
          <Switch
            value={isCommunitySwitchOn}
            onValueChange={(t) => {
              Communityupdate(t, getdata[3]?._id);
            }}
            color={Color.primary}
            thumbColor={isCommunitySwitchOn ? Color.primary : '#f5f5f5'}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
          />
        </View>
      </View>
      <View
        style={{
          width: '100%',
          height: 5,
          backgroundColor: '#F9F9F9',
          borderRadius: 10,
          marginVertical: 5,
        }}></View>
      <View style={{ padding: 20, backgroundColor: '#fff' }}></View>
      {/* <TouchableOpacity
        style={{
          backgroundColor: '#4254B6',
          padding: 20,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 100,
        }}>
        <Text style={{color: '#fff', fontSize: 20}}>Update Settings</Text>
      </TouchableOpacity> */}
      <View style={{ padding: 50, backgroundColor: '#fff' }}></View>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    // alignItems: 'center',
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
