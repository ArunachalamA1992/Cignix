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
    ImageBackground,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import Color from '../../Global/Color';
import { Iconviewcomponent } from '../../Components/Icontag';
import { Mulish } from '../../Global/FontFamily';

// create a component
const EditProfile = () => {
    const [username, setUsername] = useState("Arunachalam Annalamali");
    const [email, setEmail] = useState("arunachalam@avanexa.com");
    const [phone, setPhone] = useState("8825659803");
    const [dob, setDoB] = useState("12-12-2000");
    const [gender, setGender] = useState("Male");
    const [height, setHeight] = useState(undefined);

    const [isEditable, setIsEditable] = useState(false); // State to toggle edit mode



    const handleEditInfo = () => {
        setIsEditable(true); // Enable editing mode
    };

    const handleUpdateProfile = () => {
        setIsEditable(false); // Save changes and disable editing mode
        // Perform update actions here (e.g., API call)
        console.log("Profile Updated", { username, email, phone, dob, gender });
    };

    return (
        <ScrollView
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false} >
            <View style={styles.container}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: 100, height: 100, padding: 5, justifyContent: 'center', alignItems: 'center', borderRadius: 100, backgroundColor: Color.grey }}>
                        <Image
                            source={require('../../assets/Gallery/profile.png')}
                            style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                        />
                        <View style={{ position: 'absolute', backgroundColor: Color.mediumGrey, padding: 5, borderRadius: 50, bottom: 0, right: 10 }}>
                            <Iconviewcomponent
                                viewstyle={{ alignItems: 'center', justifyContent: 'center' }}
                                Icontag="MaterialCommunityIcons"
                                icon_size={22}
                                icon_color={Color.black}
                                iconname="pencil-outline"
                            />
                        </View>
                    </View>
                </View>
                <View style={{ flex: 3, width: '100%', height: height, justifyContent: 'flex-start', alignItems: 'center' }}>
                    <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10 }}>
                        <View>
                            <Text style={{ fontSize: 16, color: Color.black, fontFamily: Mulish.ExtraBold, letterSpacing: 0.5 }}>Profile Information</Text>
                        </View>
                        <TouchableOpacity onPress={handleEditInfo}>
                            <Text style={{ fontSize: 14, color: Color.primary, fontFamily: Mulish.Bold, letterSpacing: 0.5 }}>Edit Info</Text>
                        </TouchableOpacity>
                    </View>

                    <TextInput
                        label="Full Name"
                        value={username}
                        editable={false} // Make the TextInput non-editable
                        // editable={isEditable} // Toggle edit mode
                        onChangeText={(text) => setUsername(text)}
                        style={{
                            width: '90%',
                            height: 50,
                            paddingHorizontal: 20,
                            backgroundColor: Color.white,
                            marginVertical: 10,
                        }}
                        cursorColor={Color.primary}
                        mode="outlined"
                        theme={{
                            roundness: 30, // Set border radius
                            colors: {
                                primary: Color.primary, // Outline color when focused
                                text: Color.black, // Font color for input text
                                placeholder: Color.grey, // Placeholder color
                                disabled: Color.black, // Text color when disabled
                            },
                        }}
                        inputStyle={{
                            fontSize: 14, // Font size
                            fontFamily: Mulish.Black, // Font family
                        }}
                    />
                    <TextInput
                        label="Email Address"
                        value={email}
                        editable={false} // Make the TextInput non-editable
                        onChangeText={(text) => setEmail(text)}
                        style={{
                            width: '90%',
                            height: 50,
                            paddingHorizontal: 20,
                            backgroundColor: Color.white,
                            marginVertical: 10,
                        }}
                        cursorColor={Color.primary}
                        mode="outlined"
                        theme={{
                            roundness: 30, // Set border radius
                            colors: {
                                primary: Color.primary, // Outline color when focused
                                text: Color.black, // Font color for input text
                                placeholder: Color.grey, // Placeholder color
                                disabled: Color.black, // Text color when disabled
                            },
                        }}
                        inputStyle={{
                            fontSize: 14, // Font size
                            fontFamily: Mulish.Black, // Font family
                        }}
                    />
                    <TextInput
                        label="Phone Number"
                        value={phone}
                        editable={false} // Make the TextInput non-editable
                        onChangeText={(text) => setPhone(text)}
                        style={{
                            width: '90%',
                            height: 50,
                            paddingHorizontal: 20,
                            backgroundColor: Color.white,
                            marginVertical: 10,
                        }}
                        cursorColor={Color.primary}
                        mode="outlined"
                        theme={{
                            roundness: 30, // Set border radius
                            colors: {
                                primary: Color.primary, // Outline color when focused
                                text: Color.black, // Font color for input text
                                placeholder: Color.grey, // Placeholder color
                                disabled: Color.black, // Text color when disabled
                            },
                        }}
                        inputStyle={{
                            fontSize: 14, // Font size
                            fontFamily: Mulish.Black, // Font family
                        }}
                    />
                    <TextInput
                        label="Date of Birth"
                        value={dob}
                        editable={false} // Make the TextInput non-editable
                        onChangeText={(text) => setDoB(text)}
                        style={{
                            width: '90%',
                            height: 50,
                            paddingHorizontal: 20,
                            backgroundColor: Color.white,
                            marginVertical: 10,
                        }}
                        cursorColor={Color.primary}
                        mode="outlined"
                        theme={{
                            roundness: 30, // Set border radius
                            colors: {
                                primary: Color.primary, // Outline color when focused
                                text: Color.black, // Font color for input text
                                placeholder: Color.grey, // Placeholder color
                                disabled: Color.black, // Text color when disabled
                            },
                        }}
                        inputStyle={{
                            fontSize: 14, // Font size
                            fontFamily: Mulish.Black, // Font family
                        }}
                    />

                    <TextInput
                        label="Gender"
                        value={gender}
                        editable={false} // Make the TextInput non-editable
                        onChangeText={(text) => setGender(text)}
                        style={{
                            width: '90%',
                            height: 50,
                            paddingHorizontal: 20,
                            backgroundColor: Color.white,
                            marginVertical: 10,
                        }}
                        cursorColor={Color.primary}
                        mode="outlined"
                        theme={{
                            roundness: 30, // Set border radius
                            colors: {
                                primary: Color.primary, // Outline color when focused
                                text: Color.black, // Font color for input text
                                placeholder: Color.grey, // Placeholder color
                                disabled: Color.black, // Text color when disabled
                            },
                        }}
                        inputStyle={{
                            fontSize: 14, // Font size
                            fontFamily: Mulish.Black, // Font family
                        }}
                    />

                    {/* <TouchableOpacity
                        onPress={handleUpdateProfile}
                        disabled={!isEditable} // Disable button when not in edit mode
                        style={{
                            width: '90%',
                            height: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: isEditable ? Color.primary : Color.grey, // Change color based on edit mode
                            borderRadius: 30,
                            marginVertical: 20,
                        }}
                    >
                        <Text style={{ color: Color.white, fontSize: 16, fontFamily: Mulish.Bold }}>Update Profile</Text>
                    </TouchableOpacity> */}
                </View>

            </View>
        </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Color.white,
    },
    scrollContent: {
        padding: 5,
        justifyContent: 'center',
        backgroundColor: Color.white,
    },
});

//make this component available to the app
export default EditProfile;
