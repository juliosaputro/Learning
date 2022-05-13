import React from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ScrollView,
  FlatList,
  TouchableHighlight,
} from "react-native-gesture-handler";
import COLORS from "../../const/colors";
import menu from "../../const/menu";
import MarqueeText from 'react-native-marquee';

const { width } = Dimensions.get("screen");
const cardWidth = width / 2 - 20;

export default function MenuScreen({ navigation }) {
  const Card = ({ menu }) => {
    return (
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => navigation.navigate(menu.page, menu)}
      >
        <View style={styles.card}>
          <View
            style={{
              alignItems: "center",
              top: 0,
              backgroundColor: menu.color,
              padding: 10,
              borderRadius: 15,
            }}
          >
            <Image source={menu.image} style={{ height: 120, width: 120 }} />
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                textTransform: "uppercase",
                color: COLORS.dark,
                marginTop: 2,
                textAlign: "center",
              }}
            >
              {menu.judul}
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
          padding:10,
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
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={menu}
        renderItem={({ item }) => (
          <Card menu={item} />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    height: 180,
    width: cardWidth,
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 15,
  },
});
