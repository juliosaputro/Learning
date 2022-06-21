import React from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ScrollView,
  FlatList,
  TouchableHighlight,
} from "react-native-gesture-handler";
import COLORS from "../../const/colors";
import bab from "../../const/bab";
import MarqueeText from 'react-native-marquee';
import YoutubePlayer from "react-native-youtube-iframe";

const { width } = Dimensions.get("screen");
const cardWidth = width / 2 - 20;

export default function MenuScreen({ navigation }) {
  const Card = ({ bab }) => {
    return (
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => navigation.navigate(bab.page, bab)}
      >
        <View style={styles.card}>
        <Text style={{ fontSize: 18, fontWeight: "bold", textTransform:'uppercase' }}>
              {bab.pelajaran}
            </Text>
          <View
            style={{
              alignItems: "center",
              top: 0,
              backgroundColor: COLORS.grey,
              padding: 10,
              borderRadius: 15,
            }}
          >
            <Image source={bab.image} style={{ height: 90, width: 90 }} />
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "bold",
                textTransform: "uppercase",
                color: COLORS.dark,
                marginTop: 2,
                textAlign: "center",
              }}
            >
              {bab.judul}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          height: 367,
          padding:30,
          flexDirection:'row',
          flex: 1,
          color: COLORS.dark,
          justifyContent: "center",
          alignItems: "center",
          display:'flex',
        }}
      >
       <Image
          source={require("../../assets/smk.png")}
          style={{ height: 50, width: 50, borderRadius: 25 }}
        />
        <MarqueeText
          style={{
            width:'90%',
            height:50,
            padding:10,
            textTransform: "uppercase",
            fontSize: 24,
            fontWeight: "bold",
          }}
          speed={0.2}
              marqueeOnStart={true}
              loop={true}
              delay={1000}
        >
        Selamat Datang di SMK n 1 pleret 
        </MarqueeText>
      </View>
      {/* <View style={{ align: 'center' }}>
         <YoutubePlayer 
         height={200}
        play={true}
        videoId={'eQZzRbAXct8'}/>
        </View> */}
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={bab}
        renderItem={({ item }) => (
          <Card bab={item} />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    height: 225,
    width: cardWidth,
    marginHorizontal: 10,
    borderRadius: 15,
  },
});
