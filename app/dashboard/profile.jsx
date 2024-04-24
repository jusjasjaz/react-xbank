import { ScrollView, View, Text, ImageBackground, TouchableOpacity,Image, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants';
import { icons } from "../../constants"
import { router } from 'expo-router';
import Header from '../../components/Header'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'

const profile = () => {
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
            handleChangeTExt={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            // keyboardType="email-address"
          />
          <FormField 
            title="LAST NAME"
            // value={form.email}
            placeholder="last name"
            handleChangeTExt={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            // keyboardType="email-address"
          />
          <FormField 
            title="EMAIL ADDRESS"
            // value={form.email}
            placeholder="enter email address"
            handleChangeTExt={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            // keyboardType="email-address"
          />
          <FormField 
            title="MOBILE NUMBER"
            // value={form.email}
            placeholder="enter mobile number"
            handleChangeTExt={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            // keyboardType="email-address"
          />
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

const styles = StyleSheet.create({})