import React, { useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import { useDispatch, useSelector } from 'react-redux';
import HomeScreen from './screens/Home/HomeScreen';
import AboutUs from './screens/SideMenu/AboutUs';
import ContactUs from './screens/SideMenu/ContactUs';
import TermsandConditions from './screens/SideMenu/TermsandConditions';
import PrivacyPolicy from './screens/SideMenu/PrivacyPolicy';
import Timeline from './screens/TimeLine/Timeline';
import Profile from './screens/ProfileTab/Profile';
import Login from './screens/Auth/Login';
import OTPScreen from './screens/Auth/OTPScreen';
import Color from './Global/Color';
import LinearGradient from 'react-native-linear-gradient';
import { Mulish } from './Global/FontFamily';
import { scr_height, scr_width } from './Components/Dimensions';
import { Iconviewcomponent } from './Components/Icontag';
import EmailPassword from './screens/Auth/EmailPassword';
import Register from './screens/Auth/Register';
import EditProfile from './screens/ProfileTab/EditProfile';
import Membership from './screens/ProfileTab/Membership';
import ChangePassword from './screens/ProfileTab/ChangePassword';
import NotificationSettings from './screens/ProfileTab/NotificationSettings';
import SimTest from './screens/Auth/SimTest';
import SimTestScreen from './screens/Home/SimTestScreen';
import SuccesScreen from './screens/Auth/SuccesScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      // options={({ navigation }) => ({
      //   headerTitle: 'Home Screen',
      //   headerTitleAlign: 'center',
      //   headerTitleStyle: {
      //     color: Color.black,
      //     // fontFamily: Manrope.Bold,
      //     fontSize: 18,
      //   },
      //   headerStyle: { backgroundColor: Color.white },
      //   headerLeft: () => (
      //     <></>
      //   ),
      // })}
      />
      
      <Stack.Screen
        name="AboutUs"
        component={AboutUs}
        options={({ navigation, route }) => ({
          headerTitle: 'About Us',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: Color.black,
            fontSize: 18,
            // fontFamily: Manrope.Bold,
          },
          headerStyle: { backgroundColor: Color.white },
          headerLeft: () => (
            <View style={{ marginHorizontal: 10 }}>
              <Icon
                name="arrow-back"
                size={30}
                color={Color.black}
                onPress={() => navigation.goBack()}
              />
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="ContactUs"
        component={ContactUs}
        options={({ navigation, route }) => ({
          headerTitle: 'Contact Us',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: Color.black,
            fontSize: 18,
            // fontFamily: Manrope.Bold,
          },
          headerStyle: { backgroundColor: Color.white },
          headerLeft: () => (
            <View style={{ marginHorizontal: 10 }}>
              <Icon
                name="arrow-back"
                size={30}
                color={Color.black}
                onPress={() => navigation.goBack()}
              />
            </View>
          ),
        })}
      />

      <Stack.Screen
        name="TermsandConditions"
        component={TermsandConditions}
        options={({ navigation, route }) => ({
          headerTitle: 'Terms & Conditions',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: Color.black,
            fontSize: 18,
            // fontFamily: Manrope.Bold,
          },
          headerStyle: { backgroundColor: Color.white },
          headerLeft: () => (
            <View style={{ marginHorizontal: 10 }}>
              <Icon
                name="arrow-back"
                size={30}
                color={Color.black}
                onPress={() => navigation.goBack()}
              />
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicy}
        options={({ navigation, route }) => ({
          headerTitle: 'Privacy Policy',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: Color.black,
            fontSize: 18,
            // fontFamily: Manrope.Bold,
          },
          headerStyle: { backgroundColor: Color.white },
          headerLeft: () => (
            <View style={{ marginHorizontal: 10 }}>
              <Icon
                name="arrow-back"
                size={30}
                color={Color.black}
                onPress={() => navigation.goBack()}
              />
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export const TimeLineStack = () => {
  return (
    <Stack.Navigator initialRouteName="Timeline">
      <Stack.Screen
        name="Timeline"
        component={Timeline}
        options={{ headerShown: false }}
      // options={({ navigation }) => ({
      //   headerTitle: 'Time Line',
      //   headerTitleAlign: 'center',
      //   headerTitleStyle: {
      //     color: Color.black,
      //     // fontFamily: Manrope.Bold,
      //     fontSize: 18,
      //   },
      //   headerStyle: { backgroundColor: Color.white },
      //   headerLeft: () => (
      //     <View style={{ marginHorizontal: 10 }}>
      //       <Icon
      //         name="arrow-back"
      //         size={30}
      //         color={Color.black}
      //         onPress={() => navigation.goBack()}
      //       />
      //     </View>
      //   ),
      // })}
      />
    </Stack.Navigator>
  );
};

export const ProfileStack = () => {
  const notificationCount = useSelector(
    state => state.UserReducer.notificationCount,
  );
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      // options={({ navigation }) => ({
      //   headerTitle: 'Profile',
      //   headerTitleAlign: 'center',
      //   headerTitleStyle: {
      //     color: Color.black,
      //     fontSize: 18,
      //   },
      //   headerStyle: { backgroundColor: Color.white },
      //   headerLeft: () => (
      //     <View style={{ marginHorizontal: 10 }}>
      //       <Icon
      //         name="arrow-back"
      //         size={30}
      //         color={Color.black}
      //         onPress={() => navigation.goBack()}
      //       />
      //     </View>
      //   )
      // })}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ headerShown: false }}
        // options={({ navigation }) => ({
        //   headerTitle: 'Edit Profile',
        //   headerTitleAlign: 'center',
        //   headerTitleStyle: {
        //     color: Color.black,
        //     fontSize: 22,
        //   },
        //   headerStyle: { backgroundColor: Color.white },
        //   headerLeft: () => (
        //     <View style={{ marginHorizontal: 10 }}>
        //       <Icon
        //         name="arrow-back"
        //         size={30}
        //         color={Color.black}
        //         onPress={() => navigation.goBack()}
        //       />
        //     </View>
        //   )
        // })}
      />

      <Stack.Screen
        name="Membership"
        component={Membership}
        options={{ headerShown: false }}
        // options={({ navigation }) => ({
        //   headerTitle: 'Membership Plan',
        //   headerTitleAlign: 'center',
        //   headerTitleStyle: {
        //     color: Color.black,
        //     fontSize: 22,
        //   },
        //   headerStyle: { backgroundColor: Color.white },
        //   headerLeft: () => (
        //     <View style={{ marginHorizontal: 10 }}>
        //       <Icon
        //         name="arrow-back"
        //         size={30}
        //         color={Color.black}
        //         onPress={() => navigation.goBack()}
        //       />
        //     </View>
        //   )
        // })}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{ headerShown: false }}
        // options={({ navigation }) => ({
        //   headerTitle: 'Change Password',
        //   headerTitleAlign: 'center',
        //   headerTitleStyle: {
        //     color: Color.black,
        //     fontSize: 22,
        //   },
        //   headerStyle: { backgroundColor: Color.white },
        //   headerLeft: () => (
        //     <View style={{ marginHorizontal: 10 }}>
        //       <Icon
        //         name="arrow-back"
        //         size={30}
        //         color={Color.black}
        //         onPress={() => navigation.goBack()}
        //       />
        //     </View>
        //   )
        // })}
      />
      <Stack.Screen
        name="NotificationSettings"
        component={NotificationSettings}
        options={{ headerShown: false }}
        // options={({ navigation }) => ({
        //   headerTitle: 'Notification Settings',
        //   headerTitleAlign: 'center',
        //   headerTitleStyle: {
        //     color: Color.black,
        //     fontSize: 22,
        //   },
        //   headerStyle: { backgroundColor: Color.white },
        //   headerLeft: () => (
        //     <View style={{ marginHorizontal: 10 }}>
        //       <Icon
        //         name="arrow-back"
        //         size={30}
        //         color={Color.black}
        //         onPress={() => navigation.goBack()}
        //       />
        //     </View>
        //   )
        // })}
      />


    </Stack.Navigator>
  );
};

export const Auth = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OTPScreen"
        component={OTPScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EmailPassword"
        component={EmailPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Simtest"
        component={SimTest}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SuccesScreen"
        component={SuccesScreen}
        options={{ headerShown: false }}
      />
       <Stack.Screen
          name="SimTest"    
          component={SimTest}
          options={{ headerShown: false }}
        />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  const dispatch = useDispatch();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        
        tabBarStyle: {
          position: 'absolute',
          marginLeft: scr_width/5.9,
          marginBottom:scr_height/70,
          shadowColor: 'transparent',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.5,
          shadowRadius: 2,
          borderRadius: 100,
          width: scr_width/1.44,
          height:scr_height/12,
          alignItems: 'center', justifyContent: 'center',
          backgroundColor: '#0B1215',
        },
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'HomeTab') {
            return focused ? (
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View
                  style={{
                    backgroundColor: Color.primary,
                    width: 55,
                    height: 55,
                    borderRadius: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    bottom: -30,
                  }}>
                  {/* <Iconviewcomponent
                    viewstyle={{ alignItems: 'center', justifyContent: 'center' }}
                    Icontag="FontAwesome"
                    icon_size={35}
                    icon_color={Color.white}
                    iconname="home"
                  /> */}

                  <Image
                    source={require('../src/assets/Images/home.png')}
                    style={{ width: 35, height: 35, resizeMode: 'contain' }}
                  />

                </View>
              </View>
            ) : (
              <View style={{ flex: 1, bottom: -25, alignItems: 'center', justifyContent: 'center' }}>
                <View
                  style={{
                    backgroundColor: 'transparent',
                    width: 50,
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    bottom: 0,
                  }}>
                  {/* <Iconviewcomponent
                    viewstyle={{ alignItems: 'center', justifyContent: 'center' }}
                    Icontag="FontAwesome"
                    icon_size={30}
                    icon_color={Color.white}
                    iconname="home"
                  /> */}
                  <Image
                    source={require('../src/assets/Images/home.png')}
                    style={{ width: 32, height: 32, resizeMode: 'contain' }}
                  />
                </View>
              </View>
            );
          } else if (route.name === 'TimelineTab') {
            return focused ? (
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View
                  style={{
                    backgroundColor: Color.primary,
                    width: 55,
                    height: 55,
                    borderRadius: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    bottom: -30,
                  }}>
                  {/* <Iconviewcomponent
                    viewstyle={{ alignItems: 'center', justifyContent: 'center' }}
                    Icontag="FontAwesome"
                    icon_size={25}
                    icon_color={Color.white}
                    iconname="home"
                  /> */}
                  <Image
                    source={require('../src/assets/Images/up_arrow.png')}
                    style={{ width: 32, height: 32, resizeMode: 'contain' }}
                  />
                </View>
              </View>
            ) : (
              <View style={{ flex: 1, bottom: -25, alignItems: 'center', justifyContent: 'center' }}>
                <View
                  style={{
                    backgroundColor: 'transparent',
                    width: 50,
                    height: 50,
                    // borderRadius: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    bottom: 0,
                  }}>
                  <Image
                    source={require('../src/assets/Images/up_arrow.png')}
                    style={{ width: 30, height: 30, resizeMode: 'contain' }}
                  />
                </View>
              </View>
            );
          }
          else if (route.name === 'ProfileTab') {
            return focused ? (
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View
                  style={{
                    backgroundColor: Color.primary,
                    width: 55,
                    height: 55,
                    borderRadius: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    bottom: -30,
                  }}>
                  {/* <Iconviewcomponent
                    viewstyle={{ alignItems: 'center', justifyContent: 'center' }}
                    Icontag="AntDesign"
                    icon_size={30}
                    icon_color={Color.white}
                    iconname="user"
                  /> */}
                  <Image
                    source={require('../src/assets/Images/user.png')}
                    style={{ width: 30, height: 30, resizeMode: 'contain' }}
                  />
                </View>
              </View>
            ) : (
              <View style={{ flex: 1, bottom: -25, alignItems: 'center', justifyContent: 'center' }}>
                <View
                  style={{
                    backgroundColor: 'transparent',
                    width: 50,
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    bottom: 0,
                  }}>
                  {/* <Iconviewcomponent
                    viewstyle={{ alignItems: 'center', justifyContent: 'center' }}
                    Icontag="AntDesign"
                    icon_size={25}
                    icon_color={Color.white}
                    iconname="user"
                  /> */}
                  <Image
                    source={require('../src/assets/Images/user.png')}
                    style={{ width: 25, height: 25, resizeMode: 'contain' }}
                  />
                </View>
              </View>
            );
          }
          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="TimelineTab"
        component={TimeLineStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileStack}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
