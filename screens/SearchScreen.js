import {
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import React, { useCallback, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { XMarkIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import Loading from "../components/loading";
import { debounce } from "lodash";
import { image185, searchMovies } from "../api/moviedb";

var { width, height } = Dimensions.get("window");

const SearchScreen = () => {
  const navigation = useNavigation();
  const [results, setResults] = useState([]);
  let movieName = "HUETA";
  const [loading, setLoading] = useState(false);
  const handleSearch = (value) => {
    if(value && value.length > 2){
        setLoading(true);
        searchMovies({
            query: value,
            include_adult: false,
            language: "en-US",
            page: 1,
        }).then((data) => {
            setLoading(false);
            console.log("search data", data);
            if(data && data.results) setResults(data.results);
        })
    }else{
        setLoading(false);
        setResults([]);
    }
  }
  const handleTextDebounce = useCallback(debounce(handleSearch, 500), []
  )
  return (
    <SafeAreaView className="flex-1 bg-neutral-900">
      <View className="mx-4 mb-3 flex-row justify-between items-center border border-neutral-500 rounded-full">
        <TextInput
        onChangeText={handleTextDebounce}
          placeholder="Search Movie"
          placeholderTextColor={"lightgray"}
          className="pb-1 pl-6 flex-1 text-base font-semibold text-white tracking-wider"
        />
        <TouchableOpacity
          className="rounded-full p-3 m-1 bg-neutral-500"
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <XMarkIcon size={20} color={"white"} />
        </TouchableOpacity>
      </View>

      {loading ? (
        <Loading />
      ) : results.length > 0 ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 15 }}
          className="space-y-3"
        >
          <Text className="text-white font-semibold ml-1">
            Resuts ({results.length})
          </Text>
          <View className="flex-row flex-wrap justify-between">
            {results.map((item, index) => {
              return (
                <TouchableWithoutFeedback
                  key={index}
                  onPress={() => navigation.push("Movie", item)}
                >
                  <View className="space-y-2 mb-4">
                    <Image
                      className="rounded-3xl"
                      source={{uri:image185(item?.poster_path)}}
                      style={{ width: width * 0.45, height: height * 0.3 }}
                    />
                    <Text className="text-neutral-300 ml-1">
                      {item?.title.length > 22
                        ? item?.title?.slice(0, 22) + "..."
                        : item?.title}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            })}
          </View>
        </ScrollView>
      ) : (
        <View className="flex-1 justify-center items-center">
          <Text className="text-white">No movie found</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default SearchScreen;
