//导入Action的包,处理页面跳转
import { Actions } from 'react-native-router-flux';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
export default class Login extends Component {
    render(){
        let admin ='1111'
        return (
            <View>
                <Text onPress={()=>Actions.home({admin})}>
                    我是login
                </Text>
            </View>
        );
    }
};