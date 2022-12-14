 import { View, Text, SafeAreaView, ScrollView } from 'react-native'
 import React from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import RestaurantItem from '../components/RestaurantItem'
 
 export default function Home() {
   return (
     <SafeAreaView style={{flex:1, backgroundColor: "#eee"}}>
       <View style={{backgroundColor:"white", padding: 15}}>
        <HeaderTabs/>
        <SearchBar />
       </View>
       <ScrollView vertical showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem />
       </ScrollView>
     </SafeAreaView>
   )
 }