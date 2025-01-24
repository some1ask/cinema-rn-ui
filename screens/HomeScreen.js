import { View, Text, Platform, TouchableOpacity,ScrollView } from 'react-native'
import React,{useEffect, useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Bars3CenterLeftIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import TrendingMovies from '../components/trendingMovies'
import MovieList from '../components/movieList'
import { useNavigation } from '@react-navigation/native'
import Loading from '../components/loading'
import { fetchTopRatedMovies, fetchTrendingMovies, fetchUpcomingMovies } from '../api/moviedb'


export default function HomeScreen() {
  const ios = Platform.OS === 'ios';
  const navigation = useNavigation();
  const [trending, setTrending] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [topRated,setTopRaded]= useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    getTrendingMovies();
    getUpcomingMovies();
    getTopRatedMovies();
  },[])

  const getTrendingMovies = async () => {
    const data = await fetchTrendingMovies();
    if(data && data.results){
      setTrending(data.results);
      setLoading(false);
    }
  }
  const getUpcomingMovies = async () => {
    const data = await fetchUpcomingMovies();
    if(data && data.results){
      setUpcoming(data.results);
      setLoading(false);
    }
  }
  const getTopRatedMovies = async () => {
    const data = await fetchTopRatedMovies();
    if(data && data.results){
      setTopRaded(data.results);
      setLoading(false);
    }
  }

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
        {
          trending.length > 0 && <TrendingMovies data={trending}/>
        }
  
        <MovieList title="Upcoming" data={upcoming}/>
        <MovieList title="Top Rated" data={topRated}/>
        </ScrollView>
      )
    }

     
    </View>
  )
}