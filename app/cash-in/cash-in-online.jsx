import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/Header'
import { icons } from "../../constants"
import { router } from 'expo-router';
import React,{ useState } from 'react'
import CustomButton from '../../components/CustomButton';
import FormField from '../../components/FormField'

const cashInOnline = () => {
  const [form, setForm] = useState({
    amount: ''
  })
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
        <View className="w-full my-6">
          <View className="space-y-2 mt-7 mb-10 px-4">
            <Text className="text-primary font-ebInter text-xs">AMOUNT</Text>
            <View className="w-full min-h-[54px] px-4 border-[1px] rounded-md border-black flex-row items-center justify-between">
              <Image source={icons.currency} className="w-6 h-6" resizeMode="contain"/>
              <TextInput
                className="flex-1 ml-2 font-bInter text-2xl text-right"
                placeholder="0.00"
                placeholderTextColor="#cfcfcf"
                keyboardType="number-pad"
                returnKeyType="done"
              />
            </View>
          </View>
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