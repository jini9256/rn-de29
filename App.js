import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* 플랙스값으로 비융을 조정한다. 이걸로 레이아웃을 만들수있음 */}
      {/* 플랙스값을 줄때는 부모에 먼저 준 후, 자식에게 줘야함 부모를만들고 자식의 비율을 조정한다 */}
      {/* <View style={{ flex: 1, backgroundColor: "orange" }}></View>
      <View style={{ flex: 20, backgroundColor: "teal" }}></View>
      <View style={{ flex: 1, backgroundColor: "tomato" }}></View> */}

      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
      </View>
      <View style={styles.weather}>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.desc}>Sunny</Text>
        </View>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF9E9E",
  },
  city: {
    flex: 1.2,
    // backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    fontSize: 68,
  },
  weather: {
    flex: 3,
    // backgroundColor: "teal",
  },
  day: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red",
  },

  temp: {
    marginTop: 50,
    fontSize: 178,
  },
  desc: {
    marginTop: -30,
    fontSize: 60,
  },
});
