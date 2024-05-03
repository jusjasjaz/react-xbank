import { ScrollView, View, Text, FlatList,ImageBackground, TouchableOpacity,Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants';
import { icons } from "../../constants"
import { router } from 'expo-router';
import Header from '../../components/Header'
import BottomSheet from '../../components/BottomSheet'

const transactions = [
  {
  id: 0,
  name: 'Bank Account',
  description: 'Trasnfer to bank completed',
  image: images.transactionSuccess,
  amount: '- $ 34.00',
  danger:'#F66165',
  },
  {
  id: 1,
  name: 'Jennifer Young',
  description: 'Kids party',
  image: images.transactionUser,
  amount: '+ $ 154.00',
  
  },
  {
  id: 2,
  name: 'Bank Account',
  description: 'Trasnfer to bank completed',
  image: images.transactionSuccess,
  amount: '- $ 34.00',
  danger:'#F66165',
  },
  {
  id: 3,
  name: 'Jennifer Young',
  description: 'Kids party',
  image: images.transactionUser,
  amount: '+ $ 154.00',
  },
  {
  id: 4,
  name: 'Bank Account',
  description: 'Trasnfer to bank completed',
  image: images.transactionSuccess,
  amount: '- $ 34.00',
  danger:'#F66165',
  },
  {
  id: 5,
  name: 'Jennifer Young',
  description: 'Kids party',
  image: images.transactionUser,
  amount: '+ $ 154.00',
  },
];

const homepage = () => {
  const[status, setStatus] = React.useState(false);
  return (
    <SafeAreaView className="bg-white h-full">
      <Header 
        title="XBank" 
        textStyles="text-4xl font-bcomfortaa"
        leftImage={require('../../assets/images/user-profile.png')}
        handlePressLeft={() => router.push('dashboard/profile')}
        leftImageStyles="w-12	h-12"
        rightImage={require('../../assets/images/icon-settings.png')}
        handlePressRight={() => router.push('dashboard/settings')}
        rightImageStyles="w-12	h-12"
      />
      <ScrollView>
        <View className="w-full h-full px-4 mt-2 mb-6">
          <View style={[{position: 'relative'}, styles.card]}>
            <View style={[{position: 'absolute'}, styles.cardDetails]} className="w-[339]">
              <View style={{ left: '82%' }}>
                <TouchableOpacity activeOpacity={0.8}>
                  <Image source={images.scanButton}/>
                </TouchableOpacity>
              </View>
              <Text style={styles.cardText} className="font-bInter">Michael Collins</Text>
              <Text style={[{fontSize: 36,  fontWeight: 600}, styles.cardText]} className="font-sbInter">786349758</Text>
              <View style={styles.lowerCard} className="flex-row justify-between">
                <Text style={styles.cardText} className="font-sbInter">Player Card ID</Text>
                <Text style={styles.cardText} className="font-sbInter">11 / 2025</Text>
              </View>
            </View>
            <Image source={images.card}/>
          </View>
          <View style={styles.container}>
            <View style={styles.item}>
              <TouchableOpacity activeOpacity={0.8} onPress={() => router.push('cash-in/cash-in-page')}  style={styles.button}>
                <Image source={icons.cashIn}/>
              </TouchableOpacity>
              <View className="flex-row justify-center mt-3">
                <Text className="uppercase font-bInter ">Cash in</Text>
              </View>
            </View>
            <View style={styles.item}>
              <TouchableOpacity activeOpacity={0.8} style={styles.button}>
                <Image source={icons.cashOut}/>
              </TouchableOpacity>
              <View className="flex-row justify-center mt-3">
                <Text className="uppercase font-bInter">Cash out</Text>
              </View>
            </View>
            <View style={styles.item}>
              <TouchableOpacity activeOpacity={0.8} style={styles.button}>
                <Image source={icons.scan}/>
              </TouchableOpacity>
              <View className="flex-row justify-center mt-3">
                <Text className="uppercase font-bInter">Scan</Text>
              </View>
            </View>
            <View style={styles.item}>
              <TouchableOpacity activeOpacity={0.8} style={styles.button}>
                <Image source={icons.more}/>
              </TouchableOpacity>
              <View className="flex-row justify-center mt-3">
                <Text className="uppercase font-bInter">More</Text>
              </View>
            </View>
          </View>
          <View className="border-t border-[#F2F2F2] my-4"></View>
          <View className="flex-row justify-between py-2">
            <Text className="uppercase font-bInter text-[#3B3B3B">Latest Activities</Text>
            <TouchableOpacity onPress={() => setStatus(true)}>
              <Text className="uppercase font-bInter">SEE ALL</Text>
            </TouchableOpacity>
          </View>
          <View>
            {transactions.map((transaction, i) => {
              return (
              <View className="flex-row justify-between py-2" key={i}>
                <View className="flex-row align-center">
                  <Image className="w-10 h-10" source={transaction.image}/>
                  <View className="ml-5">
                    <Text className="font-sbInter">{transaction.name}</Text>
                    <Text className="font-rInter text-[#888888]">{transaction.description}</Text>
                  </View>
                </View>
                <Text className="font-bInter mt-3" style={{ color: transaction.danger || '#4F4F4F' }}>{transaction.amount}</Text>
              </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
      
      {status && <BottomSheet setStatus={ setStatus} /> }
    </SafeAreaView>
  )
}

export default homepage

const styles = StyleSheet.create({
  container: {
    marginTop: 18,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  item: {
    width: '23%',
    marginBottom: 10,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#F1F1F1',
    width: 84,
    height: 84, 
  },

  card: {
    // height: '210px',
    // width: '356px',
    marginRight: 'auto',
    marginLeft:'auto',
    borderRadius: 11,
  },

  cardDetails: {
    zIndex: 5,
    padding: 32,
    // height: '210px',
    // width: '339px',
    bordeRadius: '18px',
    
  },

  cardText: {
    color: '#FFFFFF',
    fontWeight: 700,
    textTransform: 'uppercase'
  },

  lowerCard: {
    flexDirection: 'row', 
    justifyContent: 'space-between' 
  }
});