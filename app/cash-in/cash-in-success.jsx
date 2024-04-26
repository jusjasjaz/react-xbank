import { ScrollView, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React,{ useState } from 'react'
import { useRouter, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../../components/CustomButton'
import { images } from '../../constants';

const cashInSuccess = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="py-2">
        <Text className="text-center font-bcomfortaa text-3xl">XBank</Text>
      </View>
       <ScrollView contentContainerStyle={{ height: '100%'}}>
        <View className="w-full h-full px-4 mt-24">
          <View className="flex items-center">
            <Image className="w-32 h-32 mb-8" source={ images.success}/>
            <Text className="text-center font-sbInter text-xl my-1">Successfully cash in!</Text>
            <Text className="text-center text-[#828282] font-rInter mt-1 leading-6">{`You will receive an email or SMS\nconfirmation when the transaction is\ncompleted.`}</Text>
          </View>  
        </View>
      </ScrollView>
      <View>
        <View className="px-4 my-6">
          <CustomButton title="Back to main" 
          containerStyles="w-full bg-[#232325]" 
          handlePress={() => router.push('dashboard/homepage')} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default cashInSuccess

const styles = StyleSheet.create({})