import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{padding:3,display:"flex",flexDirection:"row",gap:10,marginBottom:20}}>
        <TouchableOpacity onPress={()=>{router.back()}}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.settingtitle}>Ayarlar</Text>
      </View>
      <View>
        <View style={styles.settinglistitem}>
          <Text style={{fontSize:16}}>Profilim</Text>
        </View>
        <View style={styles.settinglistitem}>
          <Text style={{fontSize:16}}>S.S.S</Text>
        </View>
      </View>
      <View style={{display:"flex",flexDirection:"column",alignItems:"center",padding:30,backgroundColor:"#E63946",marginTop:20}}>
        <Text style={{textAlign:"center",fontSize:17,color:"white",fontWeight:"bold"}}>Gdns+'a yükselt</Text>
        <Text style={{textAlign:"center",marginTop:10,color:"white"}}>Gdns'in tüm özelliklerine ve optimize edilmiş daha hızlı interneti deneyin</Text>
      </View>
      <View style={{marginTop:20}}>
        <Text style={{fontSize:13,color:"gray"}}>V1.0</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
  },
  settingtitle:{
    fontSize:20,
    fontWeight:"bold"
  },
  settinglistitem:{
    padding:15,
    borderBottomWidth:1,
    borderColor:"lightgray"
  }
});
