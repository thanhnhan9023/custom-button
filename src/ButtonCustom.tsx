import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle, TouchableOpacityProps } from 'react-native';

interface ButtonCustomProps extends TouchableOpacityProps {
    title?: string;
    onPress?: () => void;
    style?: ViewStyle;
    txtStyle?: TextStyle
}

const ButtonCustom: React.FC<ButtonCustomProps> = (props) => {
    const {
        title,
        onPress,
        style,
        txtStyle,
    } = props
    return (
        <TouchableOpacity style={[style || {
            backgroundColor: "#CADD", height: 40,
            marginHorizontal: 20, alignItems: 'center', justifyContent: 'center',
            borderRadius: 10,
        }]} onPress={onPress}>
            <Text style={[txtStyle || { color: 'red' }]}>{title || "Button"}</Text>
        </TouchableOpacity>
    );
};


export default ButtonCustom;
