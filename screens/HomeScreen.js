import { View, Text, Platform, TouchableOpacity,ScrollView } from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Bars3CenterLeftIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import TrendingMovies from '../components/trendingMovies'
import MovieList from '../components/movieList'
import { useNavigation } from '@react-navigation/native'
import Loading from '../components/loading'


export default function HomeScreen() {
  const ios = Platform.OS === 'ios';
  const navigation = useNavigation();
  const [trending, setTrending] = useState([1,2,3]);
  const [upcoming, setUpcoming] = useState([1,2,3]);
  const [topRated,setTopRaded]= useState([1,0,2]);
  const [loading,setLoading] = useState(false);
  return (
    <View className="bg-neutral-800 flex-1">
      <SafeAreaView className={ ios ? "-mb-2" : "mb-3"}>
        <StatusBar style='light'></StatusBar>
        <View className="flex-row justify-between items-center mx-4">
        <Bars3CenterLeftIcon size={30} strokeWidth={2} color={'white'}/>
        <Text className="text-white text-3xl font-bold"><Text style={{color:'#03fed3'}}>M</Text>ovies</Text>
        <TouchableOpacity onPress={()=> navigation.push("Search")}>
          <MagnifyingGlassIcon size={30} strokeWidth={2} color={'white'}/>
        </TouchableOpacity>
        </View>
      </SafeAreaView>

    {
      loading? (
        <Loading/>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 10}}>
        <TrendingMovies data={trending}/>
  
        <MovieList title="Upcoming" data={upcoming}/>
        <MovieList title="Top Rated" data={topRated}/>
        </ScrollView>
      )
    }

     
    </View>
  )
}