import { StyleSheet, Dimensions } from "react-native";
import { colors, size} from "../helpers";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  
  BronzeText: {
    color: "#a50895",
    textAlign: "center",
    fontSize: size.xx_small,
  },
  GoldText:{
    color:colors.white,
    fontSize:size.xxxx_small,
    textAlign:"center"
  },
  WelBronze: {
    color: "#a50895",
    fontSize: size.size50,
    textAlign: "center",
  },
  BronzeContent: {
    color: colors.white,
    textAlign: "center",
    fontSize: size.xx_small,
  },
  SecondJutifyPage: {
    flex: 1,
    justifyContent: "center",
  },
  blur: {
    justifyContent: "center",
    backgroundColor: "rgba(171,219,227,0.8))",
  },
  GoldBlur:{
    justifyContent:"center",
    backgroundColor: colors.GoldBlur,
  },
  SilverBlur:{
    justifyContent:"center",
    backgroundColor:colors.SilverBlur,
  },
  secLeft: {
    paddingLeft: size.x_medium,
    paddingRight: size.x_medium,
  },
  secHead: {
    color: colors.RosyPink,
    textAlign: "center",
    fontSize: size.x_normal,
  },
  secStep: {
    color: colors.GreyGoose,
    fontSize: size.xx_small,
    textAlign: "center",
  },
  secImg: {
    height: size.x_large,
    width: "100%",
    resizeMode: "contain",
  },
  secBody: {
    color: colors.darkBlue,
    textAlign: "center",
    fontSize: size.xx_small,
  },
  SecondJutify: {
    paddingTop: size.x_medium,
    paddingBottom: size.x_medium,
    alignItems: "center",
    justifyContent: "center",
  },
  secPa: {
    paddingBottom: size.xx_tiny,
    alignItems: "center",
  },
  SecondBtnCover: {
    backgroundColor: colors.darkBlue,
    alignItems: "center",
    justifyContent: "center",
  },
  SecondBtnText: {
    color: colors.RosyPink,
    fontSize: size.xxx_medium,
    textAlign: "center",
  },
  pad: {
    paddingTop: size.xx_small,
    paddingBottom: size.xx_small,
  },
  pleft: {
    paddingLeft: size.medium,
    paddingRight: size.medium,
  },
  EndText: {
    color: "#a50895",
    textAlign: "center",
    fontSize: size.xx_small,
  },
  SecondScreen: {
    flex: 1,
    backgroundColor: colors.white,
    width: width,
    height: height,
  },
  EndButton: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: size.little,
  },
  round: {
    height: size.size100,
    width: size.size100,
    borderRadius: size.size50,
  },
  textalignCenter: {
    textAlign: "center",
  },
  secBtn: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: size.little,
  },
  alignitems: {
    alignItems: "center",
  },
  justifycenter: {
    justifyContent: "center",
  },
  textaligncenter: {
    width: "100%",
    alignItems: "center",
  },
  container: {
    flex: 1,
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundblack: {
    backgroundColor: colors.black,
  },
  backgroundwhite: {
    backgroundColor: colors.white,
  },
  closebtn: {
    alignItems: "flex-end",
    paddingTop: size.medium,
    paddingRight: size.xxx_small,
    paddingBottom: size.xx_tiny,
  },
  img: {
    height: size.little,
    width: size.small,
    resizeMode: "contain",
    paddingTop:size.xxx_small,
  },
  logo: {
    alignItems: "center",
    paddingTop: size.xx_tiny,
    paddingBottom: size.xx_tiny,
  },
  imglogo: {
    resizeMode: "contain",
  },
  scrollView:{
    flex:1,
  },
  userimg: {
    height: size.xxx_small,
    width: size.xxx_small,
    resizeMode: "contain",
  },
  backgroundgreen: {
    backgroundColor: colors.Seafoam,
  },
  btntext: {
    alignItems: "center",
    justifyContent: "center",
  },
  padLR: {
    paddingLeft: size.xx_tiny,
    paddingRight: size.xx_tiny,
  },
  paddingLR: {
    paddingLeft: size.small,
    paddingRight: size.small,
  },
  goldBg: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.white,
    padding: size.small,
  },
  imgSize: {
    width: size.x_normal,
    height: size.xmedium,
  },
  welcomeFont: {
    fontSize: size.xxx_small,
    color: colors.SepiaSkin,
    fontWeight: "600",
  },
  sectionContainer: {
    height: size.x_sixty,
    borderRadius: 5,
    justifyContent: "center",
  },
  imageSize: {
    height: size.x_small,
    width: size.x_small,
    resizeMode: "contain",
  },
  ThreeContainer: {
    paddingTop: size.xmedium,
    paddingBottom: size.xx_tiny,
    alignItems: "center",
  },
  three: {
    backgroundColor: colors.RosyPink,
    alignItems: "center",
    justifyContent: "center",
  },
  threeFont: {
    color: colors.darkBlue,
    fontSize: size.xxx_medium,
    textAlign: "center",
  },
  ThirdImag: {
    height: size.x_large,
    width: "100%",
    resizeMode: "contain",
  },
  ThirdHead: {
    color: colors.RosyPink,
    textAlign: "center",
    fontSize: size.x_normal,
  },
  ThirdBody: {
    color:colors.white,
    textAlign: "center",
    fontSize: size.xx_small,
  },
  ThirdBottom: {
    color: colors.GreyGoose,
    fontSize: size.xxx_small,
    textAlign: "center",
  },
  BottomText: {
    color: colors.Gravel,
    textAlign: "center",
    fontSize: size.xx_small,
  },
  BottomPadding: {
    paddingLeft: size.xx_medium,
    paddingRight: size.xx_medium,
    width: "100%",
    paddingBottom: size.xxx_small,
  },
  BottomBtn: {
    borderRadius: size.xxxx_big,
    backgroundColor: colors.RosyPink,
    padding: size.xx_small,
    alignItems: "center",
  },
  BottomBtnText: {
    color: colors.darkBlue,
    fontSize: size.xx_small,
    fontWeight:"600",
  },
  BottomView: {
    paddingTop: size.xx_medium,
    paddingBottom: size.xx_medium,
    paddingLeft: size.size50,
    paddingRight: size.size50,
  },
  bsz: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  ActScreen: {
    flex: 1,
    backgroundColor: colors.RosyPink,
  },
  ActContainer: {
    flex: 1,
    justifyContent: "center",
    paddingBottom: size.normal,
  },
  ActNumContain: {
    paddingTop: size.size50,
    paddingBottom: size.xx_tiny,
    alignItems: "center",
  },
  AckRound: {
    backgroundColor: colors.darkBlue,
    alignItems: "center",
    justifyContent: "center",
  },
  AckNum: {
    color: colors.RosyPink,
    fontSize: size.xxx_medium,
    textAlign: "center",
  },
  AckImgPa: {
    paddingBottom: size.xx_tiny,
    alignItems: "center",
  },
  ackimg: {
    height: size.x_large,
    width: "100%",
    resizeMode: "contain",
  },
  ackhead: {
    color: colors.darkBlue,
    textAlign: "center",
    fontSize: size.x_normal,
  },
  ackContent: {
    color: colors.WispPink,
    textAlign: "center",
    fontSize: size.xx_small,
  },
  ackBody: {
    color: colors.WispPink,
    textAlign: "center",
    fontSize: size.xx_small,
  },
  ackStep:{
    color: colors.GreyGoose,
    fontSize: size.xx_small,
    textAlign: "center",
  },
  ackStepTxt:{
    justifyContent: "center",
    alignItems: "center",
    paddingTop: size.little,
  },
  viewCompoent:{
    flex:1,
    backgroundColor: colors.darkBlue,
  }
});

export default styles;
