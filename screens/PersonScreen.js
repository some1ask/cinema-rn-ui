import { View, Text,Platform, ScrollView,Dimensions,TouchableOpacity,Image } from 'react-native'

import {React,useState} from 'react'
import { ChevronLeftIcon,HeartIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MovieList from '../components/movieList';


var {width,height} = Dimensions.get("window");
const ios = Platform.OS === 'ios';
const verticalMargin = ios? '' : ' my-3';

const PersonScreen = () => {
    const navigation = useNavigation();
    const [isFavorite,setIsFavorite] = useState(false);
    const [personMovies,setPersonMovies] = useState([1,2,3,4,5]);
  return (
    <ScrollView className='flex-1 bg-neutral-900' contentContainerStyle={{paddingBottom: 20}}>
      <SafeAreaView className={"w-full z-20 flex-row justify-between items-center px-4 " + verticalMargin}>
            <TouchableOpacity onPress={()=> navigation.goBack()} className="rounded-xl p-1 bg-yellow-400">
                <ChevronLeftIcon size={28} strokeWidth={2.5} color={"white"}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> setIsFavorite(!isFavorite)}>
                <HeartIcon size={35} color={ isFavorite ? "red" :"white"}/>
            </TouchableOpacity>
        </SafeAreaView>

        <View>
            <View className="flex-row justify-center" style={{shadowColor:'gray',shadowOffset:{width:0,height:2},shadowOpacity:1,shadowRadius:40,elevation:5}}>
                <View className="items-center rounded-full overflow-hidden h-72 w-72 border-neutral-500">
                <Image source={require('../assets/icon.png')} style={{height:height*0.43,width:width*0.74}}/>
                </View>
            </View>
            <View className="mt-6">
                <Text className="text-3xl text-white font-bold text-center">
                    Keanu
                </Text>
                <Text className="text-3xl text-neutral-500 text-center">
                    London, UK
                </Text>
            </View>
            <View className="mx-3 p-4 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full">
                <View className="border-r-2 border-neutral-500 px-2 items-center">
                    <Text className="text-white font-semibold">Gender</Text>
                    <Text className="text-neutral-300 text-sm">Male</Text>
                </View>
                <View className="border-r-2 border-neutral-500 px-2 items-center">
                    <Text className="text-white font-semibold">Birthday</Text>
                    <Text className="text-neutral-300 text-sm">2990-2-3</Text>
                </View>
                <View className="border-r-2 border-neutral-500 px-2 items-center">
                    <Text className="text-white font-semibold">Known for</Text>
                    <Text className="text-neutral-300 text-sm">Acting</Text>
                </View>
                <View className="px-2 items-center">
                    <Text className="text-white font-semibold">Popularity</Text>
                    <Text className="text-neutral-300 text-sm">zxc</Text>
                </View>
            </View>
            <View className="my-6 mx-4 space-y-2">
                <Text className="text-white text-lg">Biography</Text>
                <Text className="text-neutral-400 tracking-wide">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
            </View>
        </View>
        <MovieList title="Movies" data={personMovies} hideSeeAll={true}/>

    </ScrollView>
  )
}

export default PersonScreen