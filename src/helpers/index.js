import { colors } from "./color";

import { Dimensions, PixelRatio, Platform } from "react-native";
export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;

export {
    colors,
}

export const normalize = (size) => {
    // const scale = screenWidth / 390;
    // const newSize = size * scale;
    const newSize = size * PixelRatio.getFontScale();
    if (Platform.OS == 'ios') return Math.round(PixelRatio.roundToNearestPixel(newSize));
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
}


export const fonts = {
    montserratRegular: 'Montserrat-Regular',
    montserratSemiBold: 'Montserrat-SemiBold',
    montserratBold: "Montserrat-Bold",
    karlaRegular: 'Karla-Regular',
    karlaBold: 'Karla-Bold',
    karlaMedium: 'Karla-Medium',
    karlaExtraBold: 'Karla-ExtraBold',
    robotoBold: 'Roboto-Bold',
    karlaExtraBold: 'Karla-ExtraBold',
    SFNSDisplayRegular: 'SFNS Display Regular'
}

export const content = {
   
    welcome:[
        {
            text:"Welcome to MyApp",
            body:"Your journey to better productivity starts here!",
        }
    ],
    stepOne:[
        {
            text:"Create an Account",
            body:"Please create an account to get started."
        }
    ],
    setpTwo:[
        {
            text:"Set Up Your Profile",
            body:"Add some details to personalize your experience."
        }
    ],
    stepThree:[
        {
            text:"Create Activities",
            body:"Be curious. Challenge yourself. Think big."
        }
    ],
    stepFour:[
        {
            text:"All Set!",
            body:"You're ready to start using the app"
        }
    ]

}

export const fontWeight = {
    thin: "100",
    extraLight: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semiBold: "600",
    bold: "700",
    extraBold: "800",
    black: "900"
}


export const size = {
    xxxxx_large: normalize(370),
    xxxx_large: normalize(340),
    msginput: normalize(264),
    xxx_large: normalize(250),
    xxx_xlarge: normalize(230),
    xx_large: normalize(215),
    xlarge: normalize(200),
    x_large: normalize(192),
    one_big: normalize(180),
    onex_big: normalize(162),
    largex: normalize(160),
    large: normalize(150),
    xx_one_small: normalize(134),
    x_one_small: normalize(126),
    one_small: normalize(124),
    xxxxx_big: normalize(114),
    size100: normalize(100),
    xxxx_big: normalize(96),
    xxx_big: normalize(80),
    xx_big: normalize(72),
    x_sixty: normalize(68),
    x_big: normalize(64),
    normal_big: normalize(60),
    circle: normalize(58),
    size56: normalize(56),
    size50: normalize(50),
    big: normalize(48),
    bigx: normalize(46),
    xxx_medium: normalize(44),
    mediumxx: normalize(42),
    xx_medium: normalize(40),
    xmedium: normalize(38),
    x_medium: normalize(36),
    xxmedium: normalize(34),
    medium: normalize(32),
    mediumx: normalize(30),
    x_normal: normalize(28),
    normal: normalize(26),
    regular: normalize(24),
    xxxx_small: normalize(22),
    xxx_small: normalize(20),
    xx_small: normalize(18),
    x_small: normalize(16),
    small: normalize(15),
    xxxx_tiny: normalize(14),
    little: normalize(13),
    xxx_tiny: normalize(12),
    xx_tiny: normalize(10),
    x_tiny: normalize(8),
    tiny: normalize(6),
    four: normalize(4),
    two: normalize(2),

}



