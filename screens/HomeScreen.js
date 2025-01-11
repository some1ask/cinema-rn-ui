import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function HomeScreen() {
  return (
    <View className="bg-neutral-800 flex-1 justify-center items-center">
      <SafeAreaView>
        <Text>ahalai</Text>
      </SafeAreaView>
    </View>
  )
}