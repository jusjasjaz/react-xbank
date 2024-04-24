import { ScrollView, View, Text, KeyboardAvoidingView,
  Platform, TextInput,
  Modal,ImageBackground, TouchableOpacity,Image, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants';
import { icons } from "../../constants"
import { router } from 'expo-router';
import Header from '../../components/Header'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { useState } from "react";
import DatePicker from "react-native-modern-datepicker";
import { getFormatedDate } from "react-native-modern-datepicker";

const profile = () => {
  const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
  const today = new Date();
  const startDate = getFormatedDate(
    today.setDate(today.getDate() + 1),
    "YYYY/MM/DD"
  );
  const [selectedStartDate, setSelectedStartDate] = useState("");
  const [startedDate, setStartedDate] = useState("12/12/2023");

  function handleChangeStartDate(propDate) {
    setStartedDate(propDate);
  }

  const handleOnPressStartDate = () => {
    setOpenStartDatePicker(!openStartDatePicker);
  };
  return (
    <SafeAreaView className="bg-white h-full">
      <Header 
        title="Profile" 
        textStyles="font-sbInter text-xl mr-3"
        leftImage={require('../../assets/images/icon-back.png')}
        handlePressLeft={() => router.push('dashboard/homepage')}
        leftImageStyles="w-6 h-6"
      />
      <ScrollView>
        <View className="w-full h-full px-4 my-6">
          <FormField 
            title="FIRST NAME"
            // value={form.email}
            placeholder="first name"
            handleChangeText={(e) => setForm({ ...form, firstName: e })}
            otherStyles="mt-7"
          />
          <FormField 
            title="LAST NAME"
            // value={form.email}
            placeholder="last name"
            handleChangeText={(e) => setForm({ ...form, lastName: e })}
            otherStyles="mt-7"
          />
          <FormField 
            title="EMAIL ADDRESS"
            // value={form.email}
            placeholder="enter email address"
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField 
            title="MOBILE NUMBER"
            // value={form.email}
            placeholder="enter mobile number"
            handleChangeText={(e) => setForm({ ...form, mobileNumber: e })}
            otherStyles="mt-7"
            keyboardType="number-pad"
            returnKeyType="done"
          />
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : ""}
            style={{ width: "100%", height: "100%", backgroundColor: "#fff" }}>
            <View style={{ flex: 1, alignItems: "center" }}>
              <View style={{ width: "100%" }} className="mt-7">
                <View >
                  <Text className="text-primary font-ebInter text-xs">BIRTHDATE</Text>
                  <TouchableOpacity
                    style={styles.inputBtn}
                    onPress={handleOnPressStartDate}>
                    <View style={styles.inputContainer} className="px-4">
                      <TextInput
                        style={{ color: '#000' }}
                        placeholder="YYYY/MM/DD"
                        editable={false}
                        value={selectedStartDate}
                        placeholderTextColor="#cfcfcf"
                      />
                      <Image
                        source={icons.calendar}
                        className="w-4 h-4"
                        resizeMode="contain"
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Create modal for date picker */}
              <Modal
                animationType="slide"
                transparent={true}
                visible={openStartDatePicker}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <DatePicker
                      mode="calendar"
                      // minimumDate={startDate}
                      minimumDate={null}
                      maximumDate={null}
                      selected={startedDate}
                      onDateChanged={handleChangeStartDate}
                      onSelectedChange={(date) => setSelectedStartDate(date)}
                      options={{
                        backgroundColor: "#fff",
                        textHeaderColor: "#232325",
                        textDefaultColor: "#333333",
                        selectedTextColor: "#FFFFFF",
                        mainColor: "#232325",
                        textSecondaryColor: "#FFFFFF",
                        borderColor: "rgba(122, 146, 165, 0.1)",
                      }}
                    />
                    <TouchableOpacity onPress={handleOnPressStartDate}>
                      <Text style={{ color: "#232325" }} className="font-bInter">Close</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
            </View>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
      <View>
        <View className="px-4 my-6">
          <CustomButton title="Edit Profile" containerStyles="w-full bg-[#232325]"/>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default profile

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 36,
    marginVertical: 60,
    color: "#111",
  },

  textSubHeader: {
    fontSize: 25,
    color: "#111",
  },

  inputBtn: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#cfcfcf",
    height: 54,
    fontSize: 16,
    justifyContent: "center",
    marginTop: 14,
  },

  centeredView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  modalView: {
    margin: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    padding: 20,
    width: "90%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2, },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  inputContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between',
  },
})