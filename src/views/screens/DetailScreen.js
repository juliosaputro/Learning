import React, { useState, useCallback,useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Button,
  Alert
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import COLORS from "../../const/colors";
import Icon from "react-native-vector-icons/MaterialIcons";

const DetailScreen = ({ navigation, route }) => {
  const item = route.params;


  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white }}>
      <View style={styles.header}>
        <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{item.bab}</Text>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.details}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{ fontSize: 25, fontWeight: "bold", color: COLORS.white }}
            >
              {item.judul}
            </Text>
          </View>
          <Image
            source={item.gambar}
            style={{ resizeMode: "contain", width: "100%" }}
          />
          <Text style={styles.detailsText}>
            {item.des1}
            {item.des2}
          </Text>
          <Image
            source={item.tabel}
            style={{ resizeMode: "contain", width: "100%" }}
          />
          <Text style={styles.detailsText}>{item.des3}</Text>
          <Image
            source={item.tabel1}
            style={{ resizeMode: "contain", width: "100%" }}
          />
          <Text style={styles.detailsText}>
            {item.des4}
            {item.des5}
          </Text>
          <Image
            source={item.tabel2}
            style={{ resizeMode: "contain", width: "100%" }}
          />
          <Text style={styles.detailsText}>{item.des6}</Text>
          <Image
            source={item.tabel3}
            style={{ resizeMode: "contain", width: "100%" }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  header: {
    height: 70,
    paddingTop: 25,
    flexDirection: "row",
    alignItems: "center",
  },
  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    marginBottom: 50,
    backgroundColor: COLORS.primary,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  iconContainer: {
    backgroundColor: COLORS.white,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  detailsText: {
    textAlign: "justify",
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
    color: COLORS.white,
  },
  youtube:{
    align:'center',
    if (videos = "") {
      this.display='flex';
    },else:{
    display:'none'
    }
  }
});
