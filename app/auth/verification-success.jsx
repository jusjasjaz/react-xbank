import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native'
import React,{ useState } from 'react'
import { useRouter, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { images } from '../../constants';
// import { image  } from "../constants";
const verificationSuccess = () => {
  return (
    <SafeAreaView className="bg-white h-full">
       <ScrollView contentContainerStyle={{ height: '100%'}}>
        <View className="w-full justify-center items-center h-full px-4">
          <View className="flex justify-center items-center py-20">
            <Image className="w-32 h-32" source={ images.success}/>
            <Text className="text-center font-sbInter text-xl mt-3">{`Successfully reset\nyour password!`}</Text>
          </View>  
        </View>
      </ScrollView>
      <View>
        <View className="px-4 my-6">
          <CustomButton title="Login" 
          containerStyles="w-full bg-[#232325]" 
          handlePress={() => router.push('auth/sign-in')} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default verificationSuccess