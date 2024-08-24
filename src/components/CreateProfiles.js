import React from "react";
import { View, Image, Text, TouchableOpacity, SafeAreaView } from "react-native";

import { content, size } from "../helpers";
import styles from "../assets/style";
import { DownBtn, FirstStep} from "../assets";

const CreateProfiles = ({ handleIndexChange }) => {
  return (
    <SafeAreaView style={styles.SecondScreen}>
      <View style={styles.SecondJutifyPage}>
        <View style={styles.SecondJutify}>
          <View style={[styles.round, styles.SecondBtnCover]}>
            <Text style={styles.SecondBtnText}>1</Text>
          </View>
        </View>
        <View style={styles.secPa}>
          <Image style={styles.secImg} source={FirstStep} />
        </View>
        <View style={[styles.paddingLR, { paddingBottom: size.xx_tiny }]}>
          <Text style={styles.secHead}>{content.stepOne[0].text}</Text>
        </View>
        <View style={styles.secLeft}>
          <Text style={styles.secBody}>{content.stepOne[0].body}</Text>
        </View>
      </View>
      <View style={{ paddingBottom: size.xxx_small }}>
        <Text style={styles.secStep}>Step 2</Text>
        <TouchableOpacity style={styles.secBtn} onPress={() => handleIndexChange(1)}>
          <Image source={DownBtn} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default CreateProfiles;
