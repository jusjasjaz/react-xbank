import { StyleSheet, Text, View } from 'react-native'
import { Slot, Stack } from 'expo-router';
import React from 'react'

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen 
        name="cash-in-page"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  )
}

export default _layout