import React from "react";
import { useNavigate } from "react-router-native";
import { StyleSheet, View, Text } from "react-native";
import LGbutton from "../../../Shared/Components/LGbutton/LGbutton";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "95%",
    justifyContent: "space-between",
    paddingHorizontal: "5%",
  },
});

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <View style={{ ...styles.container }}>
      {/* Buffer View */}
      <View />
      {/* Title text */}
      <View style={{ display: "flex", alignItems: "center" }}>
        <Text style={{ fontSize: 50, textAlign: "center" }}>Beanstalk</Text>
      </View>
      {/* Get Started bottom button */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        <View style={{ width: "45%" }}>
          <LGbutton text="LOG IN" inverted onPress={() => navigate("/login")} />
        </View>
        <View style={{ width: "45%" }}>
          <LGbutton text="SIGN UP" onPress={() => navigate("/signup")} />
        </View>
      </View>
    </View>
  );
};

export default Welcome;
