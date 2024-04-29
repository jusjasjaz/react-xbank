import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
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
        handlePressLeft={() => router.push('cash-in/cash-in-page')}
        leftImageStyles="w-6 h-6"
      />
      <ScrollView>
        <View>
          <View className="flex-row justify-between px-4">
            <View className="flex-row align-center items-center">
              <Text className="font-sbInter text-sm uppercase text-[#828282]">Cash in from</Text>
            </View>
            <TouchableOpacity activeOpacity={0.5} onPress={() => router.push('cash-in/cash-in-page')}>
              <View className="flex-row align-center items-center">
                <Image className="w-8 h-8" source={icons.bank}/>
                <Text className="font-sbInter text-[#2E2C33] text-base mx-3">Bank One</Text>
                <Image className="w-4 h-4" source={icons.back}/>
              </View>
            </TouchableOpacity>
          </View>
          <View className="border-t border-[#F2F2F2] my-4"></View>
          <View className="flex-row justify-between px-4">
            <View className="flex-row align-center items-center">
              <Text className="font-sbInter text-sm uppercase text-[#828282]">Cash in to</Text>
            </View>
            <View className="flex-row align-center items-center">
              <Text className="font-sbInter text-[#2E2C33] text-base mx-3">XBANK ********0833</Text>
            </View>
          </View>
          <View className="border-t border-[#F2F2F2] my-4"></View>
          <View className="flex-row justify-between px-4">
            <View className="flex-row align-center items-center">
              <Text className="font-sbInter text-sm uppercase text-[#828282]">Fee</Text>
            </View>
            <View className="flex-row align-center items-center">
              <Text className="font-sbInter text-[#2E2C33] text-base mx-3">PHP 10.00</Text>
            </View>
          </View>
          <View className="border-t border-[#F2F2F2] my-4"></View>
        </View>
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