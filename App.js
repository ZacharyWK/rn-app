import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
// import Base64Test from "./testComp"
import * as FileSystem from 'expo-file-system';



export default function App() {

  let ImagePicker = './assets/testfax.jpg'

  let result = await  ImagePicker.launchImageLibraryAsync({
    mediaTypes:await ImagePicker.MediaTypeOptions.All,
    allowsEditing:true,
    aspect:[4,3],
    quality:0.5
  })
  
  const base64 = await FileSystem.readAsStringAsync(result.uri, { encoding: 'base64' });
  

  const [outputText, setOutputText] = useState("This is Just a test!");
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button
        title="CHANGE TEXT"
        onPress={() => setOutputText("The Text Changed")}
      />
      {/* <Button title="BASE 64 TEST" onPress={Base64Test} /> */}
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  screen: { padding: 70 },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
