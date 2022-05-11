import React from 'react'
import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity } from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'
import COLORS from '../../const/colors'
import kdasarkes from '../../const/kdasarkes'
import kdasarps from '../../const/kdasarps'

const KomDasarScreen = () => {
  return (
       <SafeAreaView style={{ flex:1, backgroundColor: COLORS.white }}>
       <ScrollView showsHorizontalScrollIndicator={false}>
       <View style={{ flex:1, padding:20 }}>
       <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{ fontSize: 25, fontWeight: "bold", color: COLORS.dark, textAlign:'center' }}
            >
             KOMPETENSI DASAR 3 (PENGETAHUAN)
            </Text>
          </View>
          {kdasarps.map((kadasarp, index) => (  
       <TouchableOpacity
       key={index}>
          <Text style={styles.detailsText}>
            4.{index+1} {kadasarp.poin}
          </Text>
        </TouchableOpacity>
          ))}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              paddingTop:30
            }}
          >
            <Text
              style={{ fontSize: 25, fontWeight: "bold", color: COLORS.dark, textAlign:'center' }}
            >
             KOMPETENSI DASAR 3 (KETERAMPILAN)
            </Text>
          </View>
          {kdasarkes.map((kdasarke, index) => (  
       <TouchableOpacity 
       key={index}>
          <Text style={styles.detailsText}>
            4.{index+1} {kdasarke.poin}
          </Text>
        </TouchableOpacity>
          ))}
       </View>
       </ScrollView>
       </SafeAreaView>
  )
}

export default KomDasarScreen

const styles = StyleSheet.create({
  details: {
    // paddingHorizontal: 20,
    // paddingTop: 40,
    paddingBottom: 10,
    // backgroundColor: COLORS.primary,
    // borderTopRightRadius: 40,
    // borderTopLeftRadius: 40,
  },
  detailsText: {
    // textAlign:"center",
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
    color: COLORS.dark,
  },
})