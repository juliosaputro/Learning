import React from 'react'
import {StyleSheet, Text, View, Dimensions,Image} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {
  ScrollView, 
  FlatList,
  TouchableHighlight,
} from 'react-native-gesture-handler'
import COLORS from '../../const/colors'
import menu from '../../const/menu'


const { width } = Dimensions.get("screen");
const cardWidth = width / 2 - 20;

export default function MenuScreen({navigation}) {
  const Card = ({ menu }) => {
    return (
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => navigation.navigate(menu.page, menu)}
      >
        <View style={styles.card}>
          <View style={{ alignItems: "center", top: 0 }}>
            <Image source={menu.image} style={{ height: 120, width: 120 }} />
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <Text style={{ fontSize: 14, color: COLORS.grey, marginTop: 2 }}>
              {menu.judul}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  };
  return (
         <SafeAreaView style={{ flex: 1 }}>
         <View style={{ 
        height:367,
        flex:1,
        color:COLORS.dark,
        justifyContent:'center',
          alignItems: 'center',
          backgroundColor: COLORS.secondary,
         }}>
         <Text style={{ 
           textTransform:'uppercase',
           fontSize:24,
           fontWeight:'bold'
          }}>
          Menu Home
          </Text>
         </View>
         <FlatList 
         showsVerticalScrollIndicator={false}
         numColumns={2}
         data={menu}
         renderItem={({item})=> <Card menu={item}/>}
         />
         </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems:'center',
    height: 180,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 10,
    borderRadius: 15,
    // elevation: 13,
    backgroundColor: COLORS.white,
  }
})