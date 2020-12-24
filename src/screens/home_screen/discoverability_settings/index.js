import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native';

import Ripple from 'react-native-material-ripple';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import CountryCodePicker from './country_picker';
import CountryData from './country_code_data';

const AddNumber = () => {
    return (
        <View style={styles.contentContainer}>
            <Text style={styles.heading}>Add your number to your Google profile</Text>
            <Text style={styles.content}>
                Adding your numbers to your Google profile associates your number with your profile across Google. Do you want to add your phone number to your Google profile? If you answer "YES", you will be prompted in the next screen to verify your number. You can make calls and send messages on ChatVia without adding your number to your Google profile. Once your number is verified, it will be added to your profile.
            </Text>
        </View>
    );
}

const VerifyNumber = () => {
    const [countryCode, setCountryCode] = useState();
    const [underlineColor, setUnderLineColor] = useState('#150a70');

    return (
        <KeyboardAvoidingView behavior='position'>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <Text style={styles.heading}>Verify your phone number</Text>
                <Text style={styles.content}>
                    In order to connect your phone number to your Google account, Google must verify your number. To verify your number , Google will send you a one time SMS message. Carrier charges may apply. Once your number is verified, you can also make your phone number visible to people you call on your mobile phone by enabling Caller ID in app Settings.{'\n'}{'\n'}Google will send you a one time SMS message. Carrier charges may apply.
                </Text>
                <View style={styles.numberRow}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.countryText}>Country</Text>
                        <CountryCodePicker
                            data={CountryData}
                            selectedItem={countryCode}
                            onSelectItem={item => setCountryCode(item)}
                            defaultValue='+91'
                        />
                        <View style={styles.countryCodeDivider}></View>
                    </View>
                    <View style={{ flex: 3 }}>
                        <Text style={styles.countryText}>Phone number</Text>
                        <TextInput
                            style={styles.numberInput}
                            caretHidden={true}
                            keyboardType='phone-pad'
                            onFocus={() => setUnderLineColor('#6AE7B1')}
                            underlineColorAndroid={underlineColor}
                        />
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView >
    );
}

const OTPScreen = () => {
    return (
        <View style={styles.contentContainer}>
            <Text style={styles.heading}>Enter the code</Text>
            <Text style={styles.content}>
                SMS delivery can take a minute or more.
            </Text>
            <TextInput
                style={styles.otpText}
                keyboardType='phone-pad'
                maxLength={4}
                underlineColorAndroid='#6AE7B1'
                placeholder="••••"
                placeholderTextColor="#fff"
                textAlign='center'
            />
            <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 20 }}>
                <MaterialCommunityIcons name="reload" size={20} color="#d8d4d4" />
                <Text style={styles.resendText}>Resend code</Text>
            </View>
        </View>
    );
}


const DiscoverabilityScreen = () => {
    const [pageNumber, setPageNumber] = useState(1);

    const DecrementButton = () => {
        if (pageNumber == 1) {
            setPageNumber(1)
        } else {
            setPageNumber((pageNumber) => pageNumber - 1)
        }
    }

    const IncrementButton = () => {
        if (pageNumber == 3) {
            setPageNumber(3)
        } else {
            setPageNumber((pageNumber) => pageNumber + 1)
        }
    }

    return (
        <View>
            <View style={styles.mainContainer}>
                <StatusBar backgroundColor="rgba(0,0,0,0.7)" />
                {pageNumber == 1 ? <AddNumber /> : pageNumber == 2 ? <VerifyNumber /> : <OTPScreen />}
            </View>
            <View style={styles.footerButtonContainer}>
                <Ripple onPress={DecrementButton} style={styles.Button}><Text style={[styles.buttonText, { color: 'rgba(0,0,0,0.6)' }]}>{pageNumber == 1 ? 'No' : 'Back'}</Text></Ripple>
                <Ripple onPress={IncrementButton} style={styles.Button}><Text style={styles.buttonText}>{pageNumber == 1 ? 'Yes' : 'Next'}</Text></Ripple>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        backgroundColor: '#506F74',
    },
    heading: {
        fontSize: 24,
        color: '#fff',
        paddingTop: 50
    },
    content: {
        color: '#fff',
        fontSize: 16,
        marginTop: 15,
        marginBottom: 20
    },
    contentContainer: {
        paddingBottom: 48,
        paddingHorizontal: 45
    },
    numberRow: {
        flexDirection: 'row',
    },
    countryCodeDivider: {
        height: 1,
        backgroundColor: '#150a70',
        width: 48,
        marginTop: 2
    },
    countryText: {
        color: '#fff',
        fontSize: 12,
        marginBottom: 10
    },
    numberInput: {
        fontSize: 24,
        color: '#FFFFFF',
        marginTop: -10,
    },
    footerButtonContainer: {
        flexDirection: 'row',
        position: 'absolute',
        paddingVertical: 3,
        bottom: 0,
        width: '100%',
        height: 48,
        backgroundColor: '#fff',
    },
    Button: {
        flex: 1,
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 4,
    },
    buttonText: {
        textTransform: 'uppercase'
    },
    otpText: {
        fontSize: 40,
        color: '#FFFFFF',
        letterSpacing: 40
    },
    resendText: {
        color: "#d8d4d4",
        textTransform: 'uppercase',
        fontWeight: 'bold',
        marginLeft: 10
    },
})

export default DiscoverabilityScreen;