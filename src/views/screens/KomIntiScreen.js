import React from 'react'
import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity } from 'react-native';
import {ScrollView} from 'react-native-gesture-handler'
import COLORS from '../../const/colors'
import kintis from '../../const/kinti';

const KomIntiScreen = () => {
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
             KOMPETENSI INTI 3 (PENGETAHUAN)
            </Text>
          </View>
          <View>
          <Text style={{ textAlign:"center",marginTop: 10,lineHeight: 22,fontSize: 16,color: COLORS.dark, }}>
          Memahami, menerapkan, menganalisis, dan mengevaluasi tentang pengetahuan faktual, konseptual, operasional dasar, dan metakognitif sesuai dengan bidang dan lingkup kerja Teknik Komputer dan Jaringan pada tingkat teknis, spesifik, detil, dan kompleks, berkenaan dengan ilmu pengetahuan, teknologi, seni, budaya, dan humaniora dalam konteks pengembangan potensi diri sebagai bagian dari keluarga, sekolah, dunia kerja, warga masyarakat nasional, regional, dan internasional.
          </Text>
        </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop:20
            }}
          >
            <Text
              style={{ fontSize: 25, fontWeight: "bold", color: COLORS.dark, textAlign:'center' }}
            >
             KOMPETENSI INTI 4 (KETERAMPILAN)
            </Text>
          </View>
          {kintis.map((kinti, index) => (  
       <TouchableOpacity key={index}>
          <Text style={styles.detailsText}>
            4.{index+1} {kinti.poin}
          </Text>
        </TouchableOpacity>
          ))}
       </View>
       </ScrollView>
       </SafeAreaView>
  )
}

export default KomIntiScreen

const styles = StyleSheet.create({
  detailsText: {
    // textAlign:"center",
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
    color: COLORS.dark,
  },
})