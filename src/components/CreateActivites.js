import React from "react";
import { View, Image, Text, TouchableOpacity, Platform } from "react-native";

import { DownBtn, ThirdStep } from "../assets";
import { content, size } from "../helpers";
import styles from "../assets/style";

const CreateActivites = ({ handleIndexChange }) => {

  return (
    <>
          <View style={[styles.viewCompoent]}>
            <View style={[styles.justifycenter, { flex: 1 }]}>
              <View style={styles.ThreeContainer}>
                <View style={[styles.round, styles.justifycenter, styles.three]}>
                  <Text style={styles.threeFont}>3</Text>
                </View>
              </View>
              <View style={{ paddingBottom: size.xx_tiny, alignItems: "center" }}>
                <Image style={styles.ThirdImag} source={ThirdStep} />
              </View>
              <View style={[styles.paddingLR]}>
                <View style={{ paddingBottom: size.small }}>
                  <Text style={styles.ThirdHead}>{content.stepThree[0].text}</Text>
                </View>
                <View style={[styles.padLR, { paddingBottom: size.xx_tiny }]}>
                  <Text style={styles.ThirdBody}>{content.stepThree[0].body}</Text>
                </View>
              </View>
            </View>
            <View style={{ paddingBottom: Platform.OS === "ios" ? 20 : size.xxx_small, marginTop:50}}>
              <View style={{ paddingBottom: size.xx_small }}>
                <Text style={styles.ThirdBottom}>Set up your profile</Text>
              </View>
              <View style={{ alignItems: "center"}}>
                <TouchableOpacity onPress={() => handleIndexChange(3)}>
                  <Image source={DownBtn} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
    </>
  );
};

export default CreateActivites;
