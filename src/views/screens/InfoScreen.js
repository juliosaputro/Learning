import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
import COLORS from "../../const/colors";

const InfoScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          PENGEMBANGAN MULTIMEDIA INTERAKTIF BERBASIS ANDROID UNTUK MATA
          PELAJARAN SISTEM KOMPUTER KELAS 10
        </Text>
      </View>
      <View
        style={{
          height: 200,
          marginTop: 70,
        }}
      >
        <Image
          style={{
            width: "50%",
            height: 190,
            borderRadius: 300,
            top: 0,
            left: 90,
          }}
          source={require("../../assets/profile.jpg")}
        />
      </View>
      <View style={{ paddingTop: 50 }}>
        <View>
          <Text style={styles.profile}>NAMA : AGUS SETIA AJI</Text>
          <Text style={styles.profile}>NIM : 51703110099</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <View>
          <Text style={styles.profile}>
            PRODI PENDIDIKAN TEKNOLOGI INFORMASI
          </Text>
          <Text style={styles.profile}>
            FAKULTAS HUMANIORA, PENDIDIKAN DAN PARIWISATA UNIVERSITAS TEKNOLOGI
            YOGYAKARTA
          </Text>
          <Text style={styles.profile}>TAHUN 2020</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default InfoScreen;

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    justifyContent: "space-between",
    marginTop: 80,
  },
  titleContainer: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: "space-between",
    paddingTop: 20,
  },
  title: {
    top: 50,
    color: COLORS.dark,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  profile: {
    fontSize: 14,
    color: COLORS.dark,
    textAlign: "center",
    fontWeight: "bold",
  },
});
