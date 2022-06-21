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
import YoutubePlayer from "react-native-youtube-iframe";
import COLORS from "../../const/colors";
import categories from "../../const/categories";
import materi from "../../const/materi";

const { width } = Dimensions.get("screen");
const cardWidth = width / 2 - 20;

const HomeScreen = ({ navigation }) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  const ListCategories = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesListContainer}
      >
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => navigation.navigate(category.screen)}
          >
            <View
              style={{
                backgroundColor: COLORS.primary,
                ...styles.categoryBtn,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  marginLeft: 10,
                  color: COLORS.white,
                }}
              >
                {category.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  const Card = ({ materi }) => {
    return (
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => navigation.navigate("DetailScreen", materi)}
      >
        <View style={styles.card}>
          <View style={{ alignItems: "center", top: 0 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold", textTransform:'uppercase' }}>
              {materi.bab}
            </Text>
            <View style={{ height: 60, width:60, alignItems:'center', justifyContent:'center',}}>
            <Text style={{ fontSize: 48, fontWeight: "bold", color:COLORS.primary}}>{materi.id}</Text>
            </View>
            {/* <Image source={materi.image} style={{ height: 120, width: 120 }} /> */}
          </View>
          <View style={{ height:90, marginHorizontal: 20, alignItems:'center', justifyContent:'center' }}>
            <Text style={{ fontSize: 14, color: COLORS.grey, marginTop: 2, fontWeight:'bold',textAlign:'center' }}>
              {materi.judul}
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
      <View style={{ align: 'center', padding:10 }}>
         <YoutubePlayer 
         height={200}
        play={true}
        videoId={'eQZzRbAXct8'}/>
        </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={materi}
        renderItem={({ item }) => <Card materi={item} />}
      >
        
      </FlatList>
    </SafeAreaView>
  );
};

export default HomeScreen;

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
