import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/Header'
import { icons } from "../../constants"
import { router } from 'expo-router';
import React from 'react'
import CustomButton from '../../components/CustomButton';

const cashInOnline = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <Header 
        title="Online" 
        textStyles="font-sbInter text-xl mr-4"
        leftImage={require('../../assets/images/icon-back.png')}
        handlePressLeft={() => router.push('cash-in/cash-in-online')}
        leftImageStyles="w-6 h-6"
      />
      <ScrollView>

      </ScrollView>
      <View>
        <View className="px-4 my-6">
          <CustomButton title="Continue" 
          containerStyles="w-full bg-[#232325]" 
          handlePress={() => router.push('cash-in/cash-in-success')} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default cashInOnline

const styles = StyleSheet.create({})