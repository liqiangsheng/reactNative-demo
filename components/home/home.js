//导入Action的包,处理页面跳转
import { Actions } from 'react-native-router-flux';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
export default class Home extends Component {
    render(){
    return (
        <View>
            <Text onPress={()=>Actions.login()}>
              我是home + {this.props.admin}
            </Text>
        </View>
        );
        }

};