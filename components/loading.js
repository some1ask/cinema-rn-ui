import { View, Text, Dimensions } from 'react-native'
import * as Progress from 'react-native-progress'
import React from 'react'


const {width,height} = Dimensions.get("window");
const Loading = () => {
  return (
    <View style={{height,width}} className=" absolute flex-row justify-center items-center">
      <Progress.CircleSnail thickness={12} size={168} color={'#FFD700'}/>
    </View>
  )
}

export default Loading