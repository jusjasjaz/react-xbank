import { ScrollView, View, Text, ImageBackground, TouchableOpacity,Image, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants';
import { icons } from "../../constants"
import { router } from 'expo-router';
import Header from '../../components/Header'

const profile = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <Header 
        title="Profile" 
        textStyles="font-mInter text-xl mr-3"
        leftImage={require('../../assets/images/icon-back.png')}
        handlePressLeft={() => router.push('dashboard/homepage')}
        leftImageStyles="w-5 h-5"
      />
      <ScrollView>
        <View className="w-full h-full px-4 my-6">
          
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default profile

const styles = StyleSheet.create({})