"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const ButtonCustom = (props) => {
    const { title, onPress, style, txtStyle, } = props;
    return (<react_native_1.TouchableOpacity style={[style || {
                backgroundColor: "#CADD", height: 40,
                marginHorizontal: 20, alignItems: 'center', justifyContent: 'center',
                borderRadius: 10,
            }]} onPress={onPress}>
            <react_native_1.Text style={[txtStyle || { color: 'red' }]}>{title || "Button"}</react_native_1.Text>
        </react_native_1.TouchableOpacity>);
};
exports.default = ButtonCustom;
