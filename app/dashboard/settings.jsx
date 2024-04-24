import { ScrollView, View, Text, Switch, TouchableOpacity,Image, StyleSheet } from 'react-native'
import React, {useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants';
import { icons } from "../../constants"
import { router } from 'expo-router';
import Header from '../../components/Header'
import ToggleSwitch from 'toggle-switch-react-native'

const settings = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <SafeAreaView className="bg-white h-full">
      <Header 
        title="Settings" 
        textStyles="font-mInter text-xl"
        leftImage={require('../../assets/images/icon-back.png')}
        handlePressLeft={() => router.push('dashboard/homepage')}
        rightImageStyles="w-5 h-5"
      />
      <ScrollView>
        <View className="w-full h-full px-4 my-6">
          <TouchableOpacity activeOpacity={0.5}>
            <View className="flex-row justify-between mt-4">
              <View className="flex-row align-center items-center">
                <Image className="w-8 h-8 mr-2" source={icons.notifications}/>
                <Text className="font-rInter text-base">Notifications</Text>
              </View>
              <Image className="w-8 h-8" source={icons.arrow}/>
            </View>
          </TouchableOpacity>
          <View className="border-t border-[#F2F2F2] my-4"></View>
          <TouchableOpacity activeOpacity={0.5}>
            <View className="flex-row justify-between">
              <View className="flex-row align-center items-center">
                <Image className="w-7 h-7 mr-2" source={icons.receipts}/>
                <Text className="font-rInter text-base">Activity History</Text>
              </View>
              <Image className="w-8 h-8" source={icons.arrow}/>
            </View>
          </TouchableOpacity>
          <View className="border-t border-[#F2F2F2] my-4"></View>
          <TouchableOpacity activeOpacity={0.5}>
            <View className="flex-row justify-between">
              <View className="flex-row align-center items-center">
                <Image className="w-8 h-8 mr-2" source={icons.faceID}/>
                <Text className="font-rInter text-base">Activate Face ID</Text>
              </View>
              <Switch 
                trackColor={{false: '#000ff', true: '#333333'}}
                // thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                // ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </TouchableOpacity>
          <View className="border-t border-[#F2F2F2] my-4"></View>
          <TouchableOpacity activeOpacity={0.5}>
            <View className="flex-row justify-between">
              <View className="flex-row align-center items-center">
                <Image className="w-8 h-8 mr-2" source={icons.notifications}/>
                <Text className="font-rInter text-base">Account Profile</Text>
              </View>
              <Image className="w-8 h-8" source={icons.arrow}/>
            </View>
          </TouchableOpacity>
          <View className="border-t border-[#F2F2F2] my-4"></View>
          <TouchableOpacity activeOpacity={0.5}>
            <View className="flex-row justify-between">
              <View className="flex-row align-center items-center">
                <Image className="w-7 h-7 mr-2" source={icons.receipts}/>
                <Text className="font-rInter text-base">Privacy Policy</Text>
              </View>
              <Image className="w-8 h-8" source={icons.arrow}/>
            </View>
          </TouchableOpacity>
          <View className="border-t border-[#F2F2F2] my-4"></View>
          <TouchableOpacity activeOpacity={0.5}>
            <View className="flex-row justify-between">
              <View className="flex-row align-center items-center">
                <Image className="w-7 h-7 mr-2" source={icons.receipts}/>
                <Text className="font-rInter text-base">Terms & Conditions</Text>
              </View>
              <Image className="w-8 h-8" source={icons.arrow}/>
            </View>
          </TouchableOpacity>
          <View className="border-t border-[#F2F2F2] my-4"></View>
          <TouchableOpacity activeOpacity={0.5}>
            <View className="flex-row justify-between">
              <View className="flex-row align-center items-center">
                <Image className="w-8 h-8 mr-2" source={icons.help}/>
                <Text className="font-rInter text-base">Help</Text>
              </View>
              <Image className="w-8 h-8" source={icons.arrow}/>
            </View>
          </TouchableOpacity>
          <View className="border-t border-[#F2F2F2] my-4"></View>
          <TouchableOpacity activeOpacity={0.5}>
            <View className="flex-row justify-between">
              <View className="flex-row align-center items-center">
                <Image className="w-8 h-8 mr-2" source={icons.logout}/>
                <Text className="font-rInter text-base">Logout</Text>
              </View>
              <Image className="w-8 h-8" source={icons.arrow}/>
            </View>
          </TouchableOpacity>
          <View className="border-t border-[#F2F2F2] my-4"></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default settings

const styles = StyleSheet.create({})