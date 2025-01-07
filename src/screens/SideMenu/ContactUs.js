//import liraries
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import Color from '../../Global/Color';
import { scr_height, scr_width } from '../../Components/Dimensions';
import { Mulish } from '../../Global/FontFamily';
import { Iconviewcomponent } from '../../Components/Icontag';

// create a component
const ContactUs = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.scrollContent}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text
          style={{
            textAlign: 'justify',
            fontSize: 16,
            color: Color.cloudyGrey,
            fontFamily: Mulish.Medium,
            letterSpacing: 0.5, paddingVertical: 5
          }}>
          We’re here to help! There are several ways to reach our customer
          support team:
        </Text>

        <View style={{ width: '100%', marginTop: 20 }}>
          <Text
            style={{
              textAlign: 'left',
              fontSize: 18,
              color: Color.black,
              fontFamily: Mulish.Black,
              letterSpacing: 0.5,
            }}>
            Email Support:
          </Text>
          <Text
            style={{
              textAlign: 'justify',
              fontSize: 14,
              color: Color.cloudyGrey,
              fontFamily: Mulish.Medium,
              letterSpacing: 0.5,
              lineHeight: 22,
              paddingVertical: 10,
            }}>
            For any questions or concerns, feel free to email us{' '}
            <Text
              style={{
                fontSize: 15,
                color: Color.black,
                fontFamily: Mulish.BoldItalic,
                letterSpacing: 0.5,
              }}>
              atquit@cignix.com
            </Text>
            , and we’ll get back to you as soon as possible.
          </Text>
        </View>
        <View style={{ width: '100%', marginTop: 20 }}>
          <Text
            style={{
              textAlign: 'left',
              fontSize: 18,
              color: Color.black,
              fontFamily: Mulish.Black,
              letterSpacing: 0.5,
            }}>
            Phone Support:
          </Text>
          <Text
            style={{
              textAlign: 'justify',
              fontSize: 14,
              color: Color.cloudyGrey,
              fontFamily: Mulish.Medium,
              letterSpacing: 0.5,
              lineHeight: 22,
              paddingVertical: 10,
            }}>
            If you prefer to speak directly with our team, call us at{' '}
            <Text
              style={{
                fontSize: 15,
                color: Color.black,
                fontFamily: Mulish.BoldItalic,
                letterSpacing: 0.5,
              }}>
              9873832002
            </Text>{' '}
            for assistance. Our phone lines are open during our support hours.
          </Text>
        </View>
        <View style={{ width: '100%', marginTop: 20 }}>
          <Text
            style={{
              textAlign: 'left',
              fontSize: 18,
              color: Color.black,
              fontFamily: Mulish.Black,
              letterSpacing: 0.5,
            }}>
            Live Chat:
          </Text>
          <Text
            style={{
              textAlign: 'justify',
              fontSize: 14,
              color: Color.cloudyGrey,
              fontFamily: Mulish.Medium,
              letterSpacing: 0.5,
              lineHeight: 22,
              paddingVertical: 10,
            }}>
            Need immediate help? Our live chat service is available{' '}
            <Text
              style={{
                fontSize: 15,
                color: Color.black,
                fontFamily: Mulish.BoldItalic,
                letterSpacing: 0.5,
              }}>
              24/7{' '}
            </Text>{' '}
            on our website. Connect instantly with a support agent for quick
            resolutions.
          </Text>
        </View>
        <View style={{ width: '100%' }}>
          <Text
            style={{
              textAlign: 'left',
              fontSize: 18,
              color: Color.black,
              fontFamily: Mulish.Black,
              letterSpacing: 0.5,
            }}>
            Customer Support Hours:
          </Text>
          <Text
            style={{
              textAlign: 'justify',
              fontSize: 14,
              color: Color.cloudyGrey,
              fontFamily: Mulish.Medium,
              letterSpacing: 0.5,
              lineHeight: 22,
              paddingVertical: 10,
            }}>
            Our team is dedicated to providing excellent support during the
            following hours:
          </Text>

          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 5,
            }}>
            <Iconviewcomponent
              Icontag={'Entypo'}
              iconname={'dot-single'}
              icon_size={22}
              icon_color={Color.primary}
              iconstyle={{ marginTop: 0 }}
            />
            <Text
              style={{
                width: '100%',
                paddingHorizontal: 10,
                fontSize: 14,
                color: Color.cloudyGrey,
                fontFamily: Mulish.Medium,
                textAlign: 'justify',
                letterSpacing: 0.5,
                lineHeight: 22,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  color: Color.black,
                  fontFamily: Mulish.Bold,
                  letterSpacing: 0.5,
                }}>
                Monday - Friday:
              </Text>{' '}
              10:00 AM - 6:00 PM (IST)
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 5,
            }}>
            <Iconviewcomponent
              Icontag={'Entypo'}
              iconname={'dot-single'}
              icon_size={22}
              icon_color={Color.primary}
              iconstyle={{ marginTop: 0 }}
            />
            <Text
              style={{
                width: '100%',
                paddingHorizontal: 10,
                fontSize: 14,
                color: Color.cloudyGrey,
                fontFamily: Mulish.Medium,
                textAlign: 'justify',
                letterSpacing: 0.5,
                lineHeight: 22,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  color: Color.black,
                  fontFamily: Mulish.Bold,
                  letterSpacing: 0.5,
                }}>
                Saturday & Sunday
              </Text>
              : Closed
            </Text>
          </View>
          <Text
            style={{
              textAlign: 'justify',
              fontSize: 14,
              color: Color.cloudyGrey,
              fontFamily: Mulish.Medium,
              letterSpacing: 0.5,
              lineHeight: 22,
              paddingVertical: 10,
            }}>
            <Text
              style={{
                fontSize: 15,
                color: Color.black,
                fontFamily: Mulish.Bold,
                letterSpacing: 0.5,
              }}>
              Note:
            </Text>{' '}
            If you need help outside of our customer support hours, you can make
            use of the{' '}
            <Text
              style={{
                fontSize: 15,
                color: Color.black,
                fontFamily: Mulish.Bold,
                letterSpacing: 0.5,
              }}>
              Live Chat{' '}
            </Text>
            option on our website.
          </Text>

          <View style={{ width: '100%', marginTop: 10, marginBottom: 10 }}>
            <Text
              style={{
                textAlign: 'left',
                fontSize: 18,
                color: Color.black,
                fontFamily: Mulish.Bold,
                letterSpacing: 0.5,
              }}>
              CONTACT US
            </Text>
            <Text
              style={{
                textAlign: 'justify',
                fontSize: 14,
                color: Color.cloudyGrey,
                fontFamily: Mulish.Medium,
                letterSpacing: 0.5,
                lineHeight: 22,
                paddingVertical: 10,
              }}>
              In order to resolve a complaint regarding the Services or to
              receive further information regarding the use of the Services,
              please contact us at:
            </Text>

            <Text
              style={{
                textAlign: 'left',
                fontSize: 18,
                color: Color.black,
                fontFamily: Mulish.Bold,
                letterSpacing: 0.5,
              }}>
              Cignix
            </Text>
            <Text
              style={{
                textAlign: 'justify',
                fontSize: 15,
                color: Color.black,
                fontFamily: Mulish.Bold,
                letterSpacing: 0.5,
                lineHeight: 22,
                paddingVertical: 5,
              }}>
              Unit No. 105, First Floor,
            </Text>
            <Text
              style={{
                textAlign: 'justify',
                fontSize: 15,
                color: Color.black,
                fontFamily: Mulish.Bold,
                letterSpacing: 0.5,
                lineHeight: 22,
                paddingVertical: 5,
              }}>
              Iris Tech Park, Sector-48,
            </Text>
            <Text
              style={{
                textAlign: 'justify',
                fontSize: 15,
                color: Color.black,
                fontFamily: Mulish.Bold,
                letterSpacing: 0.5,
                lineHeight: 22,
                paddingVertical: 5,
              }}>
              Gurgaon,
            </Text>
            <Text
              style={{
                textAlign: 'justify',
                fontSize: 15,
                color: Color.black,
                fontFamily: Mulish.Bold,
                letterSpacing: 0.5,
                lineHeight: 22,
                paddingVertical: 5,
              }}>
              Haryana 122018,
            </Text>
            <Text
              style={{
                textAlign: 'justify',
                fontSize: 15,
                color: Color.black,
                fontFamily: Mulish.Bold,
                letterSpacing: 0.5,
                lineHeight: 22,
                paddingVertical: 5,
              }}>
              India.
            </Text>
            <Text
              style={{
                textAlign: 'justify',
                fontSize: 15,
                color: Color.black,
                fontFamily: Mulish.Bold,
                letterSpacing: 0.5,
                lineHeight: 22,
                paddingVertical: 5,
              }}>
              Phone:{' '}
              <Text
                style={{
                  fontSize: 15,
                  color: Color.primary,
                  fontFamily: Mulish.Bold,
                }}>
                +91 9873832002
              </Text>
            </Text>
            <Text
              style={{
                textAlign: 'justify',
                fontSize: 15,
                color: Color.primary,
                fontFamily: Mulish.Bold,
                letterSpacing: 0.5,
                lineHeight: 22,
                paddingVertical: 5,
                textDecorationLine: 'underline',
              }}>
              quit@cignix.com
            </Text>
          </View>
          <Text
            style={{
              textAlign: 'justify',
              fontSize: 14,
              color: Color.cloudyGrey,
              fontFamily: Mulish.Medium,
              letterSpacing: 0.5,
              lineHeight: 22,
              paddingVertical: 10,
            }}>
            We’re committed to offering the best possible support, ensuring your
            experience with us is smooth!
          </Text>
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
export default ContactUs;
