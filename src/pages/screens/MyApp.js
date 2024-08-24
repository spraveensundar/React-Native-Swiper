import React, { useRef } from "react";
import { View, Text, Image, TouchableOpacity, StatusBar } from "react-native";
import Swiper from "react-native-swiper";

import { DownBtn, backImg } from "../../assets";
import styles from "../../assets/style";
import CreateActivites from "../../components/CreateActivites";
import CreateProfiles from "../../components/CreateProfiles";
import SetupProfile from "../../components/SetupProfile";
import YourProfile from "../../components/YourProfile";
import { content, size } from "../../helpers";




const MyApp = () => {

  const swiperRef = useRef(null);

  const goToSlide = (index) => {
    swiperRef.current.scrollTo(index + 1);
  };

  return (
    <>
      <StatusBar translucent={true} backgroundColor={"transparent"} barStyle={"dark-content"}/>
      <View style={[styles.container]}>
        <Swiper
          ref={swiperRef}
          showsButtons={false}
          loop={false}
          showsPagination={false}
          horizontal={false}
          scrollEnabled={true}>
            <View style={{ flex: 1 }}>
              <View style={styles.goldBg}>
                <Image style={styles.bsz} source={backImg} />
              </View>
              <View style={[styles.container]}>
                <View style={{ paddingBottom: size.xx_tiny, paddingTop:size.large}}>
                  <Text style={styles.BronzeText}>MyApp</Text>
                  <Text style={styles.WelBronze}>{content.welcome[0].text}</Text>
                </View>
                <View style={styles.pleft}>
                  <Text style={styles.BronzeContent}>
                    {content.welcome.body}
                  </Text>
                </View>
              </View>
              <View style={styles.blur}>
                <View style={styles.pad}>
                  <Text style={styles.EndText}>
                    Start your programme {"\n"} in 3 easy steps.
                  </Text>
                  <TouchableOpacity style={styles.EndButton} onPress={() => goToSlide(0)}>
                    <Image source={DownBtn} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          <CreateProfiles handleIndexChange={goToSlide} />
          <YourProfile handleIndexChange={goToSlide} />
          <CreateActivites handleIndexChange={goToSlide} />
          <SetupProfile />
        </Swiper>
      </View>
    </>
  );
};

export default MyApp;
