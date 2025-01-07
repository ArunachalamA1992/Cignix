import {
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect } from 'react';
import {Iconviewcomponent} from '../../Components/Icontag';
import Color from '../../Global/Color';
import {scr_width} from '../../Components/Dimensions';
import {Mulish} from '../../Global/FontFamily';
import common_fn from '../../Components/common_fn';
import fetchData from '../../Config/fetchData';

const SimTestScreen = ({navigation}) => {
  const valuewwww = [
    {
      _id: '6738353e9c6fcbba05fe6ef6',
      question: 'Smoking gives me a new energy whenever I feel low',
      question_type: 'radio',
      options: [
        {
          value: '1',
          point: '1',
        },
        {
          value: '2',
          point: '2',
        },
        {
          value: '3',
          point: '3',
        },
        {
          value: '4',
          point: '4',
        },
        {
          value: '5',
          point: '5',
        },
        {
          value: '6',
          point: '6',
        },
        {
          value: '7',
          point: '7',
        },
        {
          value: '8',
          point: '8',
        },
        {
          value: '9',
          point: '9',
        },
        {
          value: '10',
          point: '10',
        },
      ],
      order: 10,
      event: '1',
      createdAt: '2024-11-16T06:01:34.145Z',
      updatedAt: '2024-11-16T06:01:34.145Z',
    },
    {
      _id: '673835499c6fcbba05fe6f0e',
      question: 'Smoking clears my thoughts and gives me new ideas',
      question_type: 'radio',
      options: [
        {
          value: '1',
          point: '1',
        },
        {
          value: '2',
          point: '2',
        },
        {
          value: '3',
          point: '3',
        },
        {
          value: '4',
          point: '4',
        },
        {
          value: '5',
          point: '5',
        },
        {
          value: '6',
          point: '6',
        },
        {
          value: '7',
          point: '7',
        },
        {
          value: '8',
          point: '8',
        },
        {
          value: '9',
          point: '9',
        },
        {
          value: '10',
          point: '10',
        },
      ],
      order: 11,
      event: '1',
      createdAt: '2024-11-16T06:01:45.285Z',
      updatedAt: '2024-11-16T06:01:45.285Z',
    },
    {
      _id: '6738355a9c6fcbba05fe6f18',
      question: " I don't have enough willpower to quit smoking",
      question_type: 'radio',
      options: [
        {
          value: '1',
          point: '1',
        },
        {
          value: '2',
          point: '2',
        },
        {
          value: '3',
          point: '3',
        },
        {
          value: '4',
          point: '4',
        },
        {
          value: '5',
          point: '5',
        },
        {
          value: '6',
          point: '6',
        },
        {
          value: '7',
          point: '7',
        },
        {
          value: '8',
          point: '8',
        },
        {
          value: '9',
          point: '9',
        },
        {
          value: '10',
          point: '10',
        },
      ],
      order: 12,
      event: '1',
      createdAt: '2024-11-16T06:02:02.213Z',
      updatedAt: '2024-11-16T06:02:02.213Z',
    },
    {
      _id: '673835859c6fcbba05fe6f32',
      question:
        'Cigarette is not that bad as Nicotine has medicinal values too',
      question_type: 'radio',
      options: [
        {
          value: '1',
          point: '1',
        },
        {
          value: '2',
          point: '2',
        },
        {
          value: '3',
          point: '3',
        },
        {
          value: '4',
          point: '4',
        },
        {
          value: '5',
          point: '5',
        },
        {
          value: '6',
          point: '6',
        },
        {
          value: '7',
          point: '7',
        },
        {
          value: '8',
          point: '8',
        },
        {
          value: '9',
          point: '9',
        },
        {
          value: '10',
          point: '10',
        },
      ],
      order: 13,
      event: '1',
      createdAt: '2024-11-16T06:02:45.801Z',
      updatedAt: '2024-11-16T06:02:45.801Z',
    },
    {
      _id: '6738359c9c6fcbba05fe6f34',
      question: 'Smoking helps me manage my anger',
      question_type: 'radio',
      options: [
        {
          value: '1',
          point: '1',
        },
        {
          value: '2',
          point: '2',
        },
        {
          value: '3',
          point: '3',
        },
        {
          value: '4',
          point: '4',
        },
        {
          value: '5',
          point: '5',
        },
        {
          value: '6',
          point: '6',
        },
        {
          value: '7',
          point: '7',
        },
        {
          value: '8',
          point: '8',
        },
        {
          value: '9',
          point: '9',
        },
        {
          value: '10',
          point: '10',
        },
      ],
      order: 14,
      event: '1',
      createdAt: '2024-11-16T06:03:08.404Z',
      updatedAt: '2024-11-16T06:03:08.404Z',
    },
    {
      _id: '673835a99c6fcbba05fe6f36',
      question: 'Once a smoker, always a smoker',
      question_type: 'radio',
      options: [
        {
          value: '1',
          point: '1',
        },
        {
          value: '2',
          point: '2',
        },
        {
          value: '3',
          point: '3',
        },
        {
          value: '4',
          point: '4',
        },
        {
          value: '5',
          point: '5',
        },
        {
          value: '6',
          point: '6',
        },
        {
          value: '7',
          point: '7',
        },
        {
          value: '8',
          point: '8',
        },
        {
          value: '9',
          point: '9',
        },
        {
          value: '10',
          point: '10',
        },
      ],
      order: 15,
      event: '1',
      createdAt: '2024-11-16T06:03:21.245Z',
      updatedAt: '2024-11-16T06:03:21.245Z',
    },
    {
      _id: '673835b69c6fcbba05fe6f38',
      question: 'Even if I quit smoking for some days, I will surely relapse',
      question_type: 'radio',
      options: [
        {
          value: '1',
          point: '1',
        },
        {
          value: '2',
          point: '2',
        },
        {
          value: '3',
          point: '3',
        },
        {
          value: '4',
          point: '4',
        },
        {
          value: '5',
          point: '5',
        },
        {
          value: '6',
          point: '6',
        },
        {
          value: '7',
          point: '7',
        },
        {
          value: '8',
          point: '8',
        },
        {
          value: '9',
          point: '9',
        },
        {
          value: '10',
          point: '10',
        },
      ],
      order: 16,
      event: '1',
      createdAt: '2024-11-16T06:03:34.508Z',
      updatedAt: '2024-11-16T06:03:34.508Z',
    },
    {
      _id: '673835c19c6fcbba05fe6f3a',
      question: 'Cigarette is my best friend',
      question_type: 'radio',
      options: [
        {
          value: '1',
          point: '1',
        },
        {
          value: '2',
          point: '2',
        },
        {
          value: '3',
          point: '3',
        },
        {
          value: '4',
          point: '4',
        },
        {
          value: '5',
          point: '5',
        },
        {
          value: '6',
          point: '6',
        },
        {
          value: '7',
          point: '7',
        },
        {
          value: '8',
          point: '8',
        },
        {
          value: '9',
          point: '9',
        },
        {
          value: '10',
          point: '10',
        },
      ],
      order: 17,
      event: '1',
      createdAt: '2024-11-16T06:03:45.943Z',
      updatedAt: '2024-11-16T06:03:45.943Z',
    },
    {
      _id: '673835ce9c6fcbba05fe6f3c',
      question: 'Cigarette helps me cope better with life',
      question_type: 'radio',
      options: [
        {
          value: '1',
          point: '1',
        },
        {
          value: '2',
          point: '2',
        },
        {
          value: '3',
          point: '3',
        },
        {
          value: '4',
          point: '4',
        },
        {
          value: '5',
          point: '5',
        },
        {
          value: '6',
          point: '6',
        },
        {
          value: '7',
          point: '7',
        },
        {
          value: '8',
          point: '8',
        },
        {
          value: '9',
          point: '9',
        },
        {
          value: '10',
          point: '10',
        },
      ],
      order: 18,
      event: '1',
      createdAt: '2024-11-16T06:03:58.661Z',
      updatedAt: '2024-11-16T06:03:58.661Z',
    },
  ];
  const [getQuestion, setgetQuestion] = React.useState([]);
  const [selctedAnswer, setSelctedAnswer] = React.useState([]);
  // const SetAnswer =async(item)=>{
    const [loader, setLoader] = React.useState(false);

  //   try {
  //     console.log("cccccccc",item);
  //   } catch (error) {
  //     console.log("catch in SetAnswer : ", error);
  //   }

  // }
  const GetQustion = async () => {
    try {
      setLoader(true);
      const GetQustion = await fetchData.GetQusetion(1);
      console.log("SSSSSS", GetQustion);
      if (GetQustion?.success == true) {
        setgetQuestion(GetQustion?.data);
        setLoader(false);
      } else {
        setgetQuestion([]);
        setLoader(false);
      }

    } catch (error) {
      console.log("Catch in GetQuestion", error);
      setLoader(false);
    }
  }
  useEffect(() => {
    GetQustion();
  }, [])
  const handleSelectAnswer = (questionId, optionValue) => {
    setSelctedAnswer(prev => ({...prev, [questionId]: optionValue}));
  };
  if(loader)
  {
    return(
      <View style={{flex:1,backgroundColor:'#fff',alignItems:'center',justifyContent:'center'}}>
        <ActivityIndicator size="large" color={'#4254B6'} />
      </View>
    )
  }

  const SIMTEST_UPDATE_SCORE = async val => {
    try {
      const data = {
        total_points: val,
      };
      const SIMTEST_UPDATE_SCORE = await fetchData?.POST_USER_LESSON(data);
      console.log('SIMTEST_UPDATE_SCORE', SIMTEST_UPDATE_SCORE);
      if (SIMTEST_UPDATE_SCORE?.success == true) {
        UserStep();
        common_fn.showToast('Answer Submited Successfully');
      } else {
        console.log('SIMTEST_UPDATE_SCORE', SIMTEST_UPDATE_SCORE);
      }
    } catch (error) {
      console.log('Catch in SIMTEST_UPDATE_SCORE', error);
    }
  };
    const UserStep = async () => {
      try {
        const formData = new FormData();
        formData.append('step', 3);
        const Stepupdate = await fetchData?.UpdateProfile(formData);
        if (Stepupdate?.success == true) {
          console.log('Stepupdate', Stepupdate);
          navigation.navigate('TabNavigator');
          // navigation.goBack();
        } else {
          console.log('Stepupdate', Stepupdate);
        }
      } catch (error) {
        console.log('Catch in UserStep', error);
      }
    };
  const renderItem = ({item, index}) => {
    return (
      <View style={{gap: 20}}>
        <View style={{gap: 10}}>
          <Text
            style={{
              fontSize: 12,
              color: '#4254B6',
              fontFamily: Mulish.Regular,
            }}>
            {`Question ${index + 1} of ${getQuestion?.length}`}
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: Color?.black,
              fontFamily: Mulish.Medium,
            }}>
            {item?.question} ?
          </Text>
        </View>
        <View style={{gap: 25, paddingLeft: 5}}>
          <FlatList
            data={item?.options}
            renderItem={({item: option}) => {
              return (
                <Pressable
                  style={{
                    gap: 10,
                    flexDirection: 'row',
                    width: scr_width,
                    alignItems: 'center',
                    marginBottom: 20,
                  }}
                  onPress={() => {
                    handleSelectAnswer(item._id, option.value);
                  }}>
                  <Iconviewcomponent
                    Icontag="Fontisto"
                    icon_size={24}
                    icon_color={
                      selctedAnswer[item._id] === option.value
                        ? '#4254B6'
                        : 'gray'
                    }
                    iconname={
                      selctedAnswer[item._id] === option.value
                        ? 'radio-btn-active'
                        : 'radio-btn-passive'
                    }
                  />
                  <Text
                    style={{
                      fontSize: 18,
                      color: Color?.black,
                      fontFamily: Mulish.Regular,
                    }}>
                    {option?.value}
                  </Text>
                </Pressable>
              );
            }}
            keyExtractor={(option, idx) => `${item._id}-${idx}`}
          />
          {index + 1 == getQuestion?.length ? null : (
            <View
              style={{
                width: '100%',
                alignItems: 'center',
                height: 5,
                backgroundColor: '#F9F9F9',
              }}
            />
          )}
          {index + 1 == getQuestion?.length && (
            <TouchableOpacity
              style={{
                padding: 20,
                backgroundColor: '#4254B6',
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
                // marginBottom: 70,
              }}
              onPress={()=>{
                if(Object.keys(selctedAnswer)?.length == getQuestion?.length){
                  const total = Object.values(selctedAnswer).reduce(
                    (sum, value) => sum + Number(value),
                    0,
                  );
                  SIMTEST_UPDATE_SCORE(total);                  
                  common_fn.showToast('Answer Submited Successfully');
                }else{
                  console.log("selctedAnswer",selctedAnswer);
                  common_fn.showToast('Please Answer All Questions');
                }
              }}
              >
              <Text style={{fontSize: 20, color: Color?.white,fontFamily:Mulish?.SemiBold}}>
                Discover Your Score
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: '#fff', padding: 25}}>
      <View style={{flexDirection: 'row', paddingBottom: 20}}>
        <Pressable
          style={{
            width: scr_width / 3,
            paddingLeft: 10,
          }}
          onPress={()=>{
            navigation.goBack();
          }}
          >
          <Iconviewcomponent
            Icontag="AntDesign"
            icon_size={25}
            icon_color={Color.black}
            iconname="left"
          />
        </Pressable>
        <Text
          style={{
            fontSize: 22,
            color: Color?.black,
            fontFamily: Mulish.SemiBold,
          }}>
          SIM Test
        </Text>
      </View>
      <FlatList
        data={getQuestion}
        renderItem={renderItem}
        keyExtractor={item => item._id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{gap: 20}}
      />
    </View>
  );
};

export default SimTestScreen;

const styles = StyleSheet.create({});
