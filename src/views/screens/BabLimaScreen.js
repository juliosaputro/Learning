import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  SafeAreaView,
} from "react-native";
import {
  FlatList,
  ScrollView,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../const/colors";
import materilima from "../../const/materilima";

const { width } = Dimensions.get("screen");
const cardWidth = width / 2 - 20;

const BabLimaScreen = ({ navigation }) => {

  const Card = ({ materilima }) => {
    return (
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => navigation.navigate("DetailScreen", materilima)}
      >
        <View style={styles.card}>
          <View style={{ alignItems: "center", top: 0 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold", textTransform:'uppercase' }}>
              {materilima.bab}
            </Text>
            <View style={{ height: 60, width:60, alignItems:'center', justifyContent:'center',}}>
            <Text style={{ fontSize: 48, fontWeight: "bold", color:COLORS.primary}}>{materilima.id}</Text>
            </View>
            {/* <Image source={materi.image} style={{ height: 120, width: 120 }} /> */}
          </View>
          <View style={{ height:90, marginHorizontal: 20, alignItems:'center', justifyContent:'center' }}>
            <Text style={{ fontSize: 14, color: COLORS.grey, marginTop: 2, fontWeight:'bold',textAlign:'center' }}>
              {materilima.judul}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={styles.header}>
        <View>
          <Text style={{ marginTop: 5, fontSize: 22, color: COLORS.grey }}>
            Kerja Praktik
          </Text>
        </View>
        <Image
          source={require("../../assets/smk.png")}
          style={{ height: 50, width: 50, borderRadius: 25 }}
        />
      </View>
      {/* <View>
        <ListCategories />
      </View> */}
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={materilima}
        renderItem={({ item }) => <Card materilima={item} />}
      />
    </SafeAreaView>
  );
};

export default BabLimaScreen;

const styles = StyleSheet.create({
  header: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: COLORS.light,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  sortBtn: {
    width: 50,
    height: 50,
    marginLeft: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  categoriesListContainer: {
    paddingVertical: 30,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  categoryBtn: {
    height: 45,
    width: 150,
    marginRight: 7,
    borderRadius: 30,
    alignItems: "center",
    paddingHorizontal: 5,
    flexDirection: "row",
  },
  categoryBtnImgCon: {
    height: 35,
    width: 35,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    height: 200,
    paddingTop:10,
    paddingBottom:20,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 10,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,
  },
});
