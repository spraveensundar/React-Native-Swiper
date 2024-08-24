import React from "react";
import { View, TouchableOpacity, Text } from "react-native";


import { colors, content} from "../helpers";
import styles from "../assets/style";

const SetupProfile = () => {
  return (
    <View style={[styles.justifycenter, { backgroundColor: colors.white, flex: 1 }]}>
      <View style={styles.BottomView}>
        <Text style={styles.BottomText}>{content.stepFour[0].body}</Text>
      </View>
      <View style={styles.BottomPadding}>
        <TouchableOpacity activeOpacity={0.9} style={styles.BottomBtn}>
          <Text style={styles.BottomBtnText}>{content.stepFour[0].text}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SetupProfile;
