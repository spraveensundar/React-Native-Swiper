import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native"; 


import { DownBtn, SecondStep } from "../assets";
import styles from "../assets/style";
import { content, size } from "../helpers";



const YourProfile = ({ handleIndexChange }) => {
  return (
    <View style={styles.ActScreen}>
      <View style={styles.ActContainer}>
        <View style={styles.ActNumContain}>
          <View style={[styles.round, styles.AckRound]}>
            <Text style={styles.AckNum}>2</Text>
          </View>
        </View>
        <View style={styles.AckImgPa}>
          <Image style={styles.ackimg} source={SecondStep} />
        </View>
        <View style={[styles.paddingLR]}>
          <View style={{ paddingBottom: size.small }}>
            <Text style={styles.ackhead}>{content.setpTwo[0].text}</Text>
          </View> 
          <View style={[styles.padLR, { paddingBottom: size.xx_tiny }]}>
            <Text style={styles.ackContent}>{content.setpTwo[0].body}</Text>
          </View>
        </View>
      </View>
      <View style={{ paddingBottom: size.xxx_small }}>
        <Text style={styles.ackStep}>Step 3</Text>
        <TouchableOpacity style={styles.ackStepTxt} onPress={() => handleIndexChange(2)}>
          <Image source={DownBtn} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default YourProfile;
