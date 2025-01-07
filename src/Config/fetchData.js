import {api} from './api';
import AsyncStorage from '@react-native-async-storage/async-storage';

// const api_name = 'api/';

const AccessToken = async () => {
  try {
    // console.log("1111");
    const ACCESS_TOKEN = await AsyncStorage.getItem('ACCESS_TOKEN');
    if (ACCESS_TOKEN !== null) {
      // console.log("444444444",ACCESS_TOKEN);     
      return ACCESS_TOKEN;
    }
  } catch (e) {
    return e;
  }
};

export default {

// Get_Question :
   GetQusetion: async (event) => {
    let url = `question?event=${event}`;
    return api.getMethod(url);
  },
// LOGIN
  login: async (data) => {
    let url = `auth/user/login`;
    return api.postMethod(url, data);
  },
  // LOGIN OTP VERIFY :
  User_Login_OTP_Verify: async  (data) => {
    console.log('Enter the new fun', data);
    let url = 'auth/user/verify';
    return api.postMethod(url, data?.otp, data?.token);
  },
  // EMAIL PASSWORD VERIFY :
  User_Login_Email_Password_Verify: async  (data) => {
    console.log('Enter the new fun', data);
    let url = 'auth/user/password-login';
    return api.postMethod(url, data);
  },
  Register: async (data) => {
    let url = 'auth/user/register';
    return api.postMethod(url, data);
  },
  // CHANGE PASSWORD
  ChangePassword: async (data) => {
    let url = 'user/profile/password_update';
    console.log("kjbvhvbjhvbjhuv");
    const accessToken = await AccessToken();
    return api.putMethod(url, data,accessToken);
  },
  // LOGOUT : 
  Logout: async () => {
    let url = 'auth/user/logout';
    const accessToken = await AccessToken();
    console.log("accessToken",accessToken);
    return api.getMethod(url, accessToken);
  },
  // GET USER DATA :
  Getuserdata: async () => {
    let url = 'user/profile';
    const accessToken = await AccessToken();
    return api.getMethod(url, accessToken);
  },
  // UPDATE USER DATA :
  UpdateProfile: async (data) => {
    let url = 'user/profile';
    const accessToken = await AccessToken();
    return api.putMethod(url, data, accessToken);
  },
  // GET NOTIFICATION :
  Getnotification : async () => {
    let url = 'user-notification';
    const accessToken = await AccessToken();
    return api.getMethod(url, accessToken);
  },
  // UPDATE NOTIFICATION :
  UpdateNotification : async (id,data) => {
    let url = `user-notification/notification/${id}`;
    const accessToken = await AccessToken();
    return api.putMethod(url, data, accessToken);
  },
  // FORGET PASSWORD : 
  Forgetpassword : async (data) => {
    let url = 'auth/reset-password';
    return api.postMethod(url, data);
  },
  // USER LESSON : 
  UserLesson : async () => {
    let url = 'user-lesson';
    const accessToken = await AccessToken();
    return api.getMethod(url, accessToken);
  },
  // POST_USER_LESSON :
  POST_USER_LESSON : async (data) => {
    let url = 'user-answer';
    const accessToken = await AccessToken();
    return api.postMethod(url, data, accessToken);
  },
  // PUT_END_VIDEO :
  PUT_END_VIDEO : async (data,body) =>{
    let url = `user-lesson/${data}`;
    const accessToken = await AccessToken();
    return api.putMethod(url,body,accessToken);
  },
  // GET SCORE :
  Get_Score : async () => {
    let url = 'user-answer';
    const accessToken = await AccessToken();
    return api.getMethod(url, accessToken);
  },
  // GET_MEMBER_SCREEN :
  Get_Coupon : async(data)=>{
    let url = "coupon/verify";
    const accessToken = await AccessToken();
    return api.postMethod(url,data,accessToken)
  },
  Get_Member_Screen : async () => {
    let url = 'plan';
    const accessToken = await AccessToken();
    return api.getMethod(url, accessToken);
  },
  // GET RAZORPAY OPTION API :
  Get_Razorpay_Option : async (data) => {
    let url ="user-plan";
    const accessToken = await AccessToken();
    return api.postMethod(url,data,accessToken)
  }
  
};
