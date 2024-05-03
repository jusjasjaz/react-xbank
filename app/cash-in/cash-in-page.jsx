import { ScrollView, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router';
import React, {useState} from 'react';
import Header from '../../components/Header'
import { icons } from "../../constants"

const cashInPage = () => {
  const [activeSegment, setActiveSegment] = useState('Online');

  const onSegmentClick = (segment) => {
    setActiveSegment(segment);
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <Header 
        title="Cash in" 
        textStyles="font-sbInter text-xl mr-6"
        leftImage={require('../../assets/images/icon-back.png')}
        handlePressLeft={() => router.push('dashboard/homepage')}
        leftImageStyles="w-6 h-6"
      />
      <ScrollView>
        <View className="w-full h-full mt-2 mb-6">
          <View style={styles.tabsContainer}>
            <TouchableOpacity onPress={() => onSegmentClick('Online')} style={{ ...styles.tabLink, ...(activeSegment === 'Online' ? styles.activeTab : {}) }}>
              <Text className="font-mInter" style={[styles.tabText, { color: activeSegment === 'Online' ? '#000000' : '#828282' }]}>Online</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onSegmentClick('Withdraw-From-Game')} style={{ ...styles.tabLink, ...(activeSegment === 'Withdraw-From-Game' ? styles.activeTab : {}) }}>
              <Text className="font-mInter" style={[styles.tabText, { color: activeSegment === 'Withdraw-From-Game' ? '#000000' : '#828282' }]}>Withdraw from Game</Text>
            </TouchableOpacity>
          </View>
          {activeSegment === 'Online' && (
            <View>
              <TouchableOpacity activeOpacity={0.5} onPress={() => router.push('cash-in/cash-in-online')}>
                <View className="flex-row justify-between mt-4">
                  <View className="flex-row align-center items-center px-4">
                    <Image className="w-8 h-8 mr-4" source={icons.bank}/>
                    <Text className="font-rInter text-base">Bank One</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <View className="border-t border-[#F2F2F2] my-4"></View>
              <TouchableOpacity activeOpacity={0.5}>
                <View className="flex-row justify-between">
                  <View className="flex-row align-center items-center px-4">
                    <Image className="w-8 h-8 mr-4" source={icons.bank}/>
                    <Text className="font-rInter text-base">Bank Two</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <View className="border-t border-[#F2F2F2] my-4"></View>
              <TouchableOpacity activeOpacity={0.5}>
                <View className="flex-row justify-between">
                  <View className="flex-row align-center items-center px-4">
                    <Image className="w-8 h-8 mr-4" source={icons.bank}/>
                    <Text className="font-rInter text-base">Bank Three</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <View className="border-t border-[#F2F2F2] my-4"></View>
              <TouchableOpacity activeOpacity={0.5}>
                <View className="flex-row justify-between">
                  <View className="flex-row align-center items-center px-4">
                    <Image className="w-8 h-8 mr-4" source={icons.bank}/>
                    <Text className="font-rInter text-base">Bank Four</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <View className="border-t border-[#F2F2F2] my-4"></View>
            </View>
          )}
          {activeSegment === 'Withdraw-From-Game' && (
            <View className="px-4">
              <View>
                <Text>Withdraw-From-Game</Text>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default cashInPage

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#F2F6F6',
    // Add other styles as needed
  },
  tabLink: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  activeTab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 2,
    borderColor: '#000000',
  },
  tabText: {
    fontWeight: 'medium',
    textTransform: 'capitalize',
  },
})