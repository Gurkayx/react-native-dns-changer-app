import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useCallback, useRef, useState } from "react";
import CustomSwitch from "@/components/CustomSwitch";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { router } from "expo-router";

export default function TabOneScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [bottomSheetIndex, setBottomSheetIndex] = useState(0);
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    setBottomSheetIndex(index);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <GestureHandlerRootView style={styles.gestureContainer}>
        <View style={styles.header}>
          <View style={styles.headerLeftArea}>
            <Text style={styles.headerTitle}>Gdns</Text>
            <Text style={styles.headerMutedTitle}>by Gurkay</Text>
          </View>
          <View style={styles.headerRightArea}>
            <TouchableOpacity onPress={() => { router.navigate("/(tabs)/two"); }}>
              <FontAwesome name="bars" size={26} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentTitle}>Gdns</Text>
          <CustomSwitch status={isEnabled} statusChanged={setIsEnabled} />
          <View style={styles.contentTexts}>
            {
              isEnabled ? (
                <Text style={styles.connectionStatusText}>Bağlantınız gizli</Text>
              ):(
                <Text style={styles.connectionStatusText}>Bağlantı kesildi</Text>
              )
            }
            {
              isEnabled ? (
                <Text>İnternetiniz artık gizli.</Text>
              ):(
                <Text>İnternetiniz gizli değil.</Text>
              )
            }
          </View>
        </View>

        <BottomSheet
          ref={bottomSheetRef}
          handleHeight={500}
          handleIndicatorStyle={{ backgroundColor: "red" }}
          snapPoints={["15%", "35%"]} // Snap points eklenmiş
          onChange={handleSheetChanges}
        >
          <BottomSheetView style={styles.contentContainer}>
            <Text style={styles.bottomSheetTitle}>Gdns+</Text>
            {bottomSheetIndex === 0 ? (
              <Text style={styles.bottomSheetSubtitle}>
                Daha iyi bir internet için yükseltin
              </Text>
            ) : (
              <View style={styles.bottomSheetContent}>
                <Text style={styles.bottomSheetTitle2}>
                  Gdns+, isteklerinizi internet trafik sıkışıklıklarından
                  kaçınmak için dikkatli bir şekilde seçilmiş yollar üzerinden
                  gönderir
                </Text>
                <TouchableOpacity style={styles.subscribeButton}>
                  <Text>Abone ol</Text>
                </TouchableOpacity>
              </View>
            )}
          </BottomSheetView>
        </BottomSheet>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
  },
  gestureContainer: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: "900",
    letterSpacing: 3,
    color: "black",
  },
  headerMutedTitle: {
    fontSize: 13,
    fontWeight: "600",
    color: "gray",
  },
  headerLeftArea: {
    flexDirection: "column",
    justifyContent: "center",
  },
  headerRightArea: {
    flexDirection: "row",
    gap: 30,
    alignItems: "center",
  },
  content: {
    alignItems: "center",
    flex: 1, // Bu, içeriğin alt sayfanın üstünde görünmesini sağlar
  },
  contentTitle: {
    fontSize: 90,
    letterSpacing: 3,
    fontFamily: "AntonRegular",
    color: "#E63946",
  },
  contentTexts: {
    marginTop: 50,
    alignItems: "center",
  },
  connectionStatusText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  contentContainer: {
    alignItems: "center",
    flex: 1,
  },
  bottomSheetTitle: {
    fontSize: 30,
    fontWeight: "bold",
  },
  bottomSheetSubtitle: {
    fontSize: 14,
    fontWeight: "600",
  },
  bottomSheetTitle2: {
    fontSize: 15,
    paddingHorizontal: 20,
    marginTop: 30,
  },
  bottomSheetContent: {
    display: "flex",
    alignItems: "center",
  },
  subscribeButton: {
    marginTop: 25,
    borderWidth: 1,
    width: 200,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
