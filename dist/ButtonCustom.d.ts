import React from 'react';
import { ViewStyle, TextStyle, TouchableOpacityProps } from 'react-native';
interface ButtonCustomProps extends TouchableOpacityProps {
    title?: string;
    onPress?: () => void;
    style?: ViewStyle;
    txtStyle?: TextStyle;
}
declare const ButtonCustom: React.FC<ButtonCustomProps>;
export default ButtonCustom;
