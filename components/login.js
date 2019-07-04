//导入Action的包,处理页面跳转
import { Actions } from 'react-native-router-flux';
import React, { Component } from 'react';
import { Text, View,StyleSheet,Alert,Button,TextInput,Dimensions,Image} from 'react-native';
const {height, width} = Dimensions.get('window');   //注意 height 和 width 的用法
const margin = width * 0.05;
// import axios from 'axios'
export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            password:'',
            headerImg:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562240401220&di=e788c3b6cd75d896cef84677a27f46a0&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F7e9efbb317693219453cbd0c05e56e3740868a3e30932-yC4jeB_fw658'
        }
    }
    render(){
        return (
            <View style={styles.screen}>

                <View style={styles.headBox}>
                    <Image  style={{width: 60, height: 60,borderRadius:30}}
                            source={{uri: this.state.headerImg}}></Image>
                </View>
                {/*---*/}
                <View style={styles.loginBox}>
                    <View style={styles.flex1}>
                        <Text style={styles.lineHeight}>手机号码</Text>
                    </View>
                    <View  style={styles.flex3}>
                        <TextInput style={styles.styleP} value={this.state.name} onChangeText={(text)=>{
                            this.setState({
                                name:text
                            })
                        }}>
                        </TextInput>
                    </View>
                </View>
                {/*----*/}
                <View style={styles.loginBox}>
                    <View style={styles.flex1}>
                        <Text style={styles.lineHeight}>密　　码</Text>
                    </View>
                    <View  style={styles.flex3}>
                        <TextInput style={styles.styleP} value={this.state.password} onChangeText={(text)=>{
                            this.setState({
                                password:text
                            })
                        }}>
                        </TextInput>
                    </View>
                </View>
                {/*--*/}
                <View style={styles.buttonBox}>
                    <Button onPress={()=>{1
                        Alert.alert(this.state.name)
                        // this.login(this.state.name)
                    }} title="登录"></Button>
                </View>
            </View>
        );
    }
    login(name){//登录
        Alert.alert(name)
        // if(!this.state.name) return  Alert.alert(
        //     '错误提示',
        //     '手机号不能为空',
        //     [
        //         {text: '确定', onPress: () => console.log('OK Pressed')},
        //     ],
        //     { cancelable: false }
        //  );
        // if(!this.state.password) return  Alert.alert(
        //     '错误提示',
        //     '手机号不能为空',
        //     [
        //         {text: '确定', onPress: () => console.log('OK Pressed')},
        //     ],
        //     { cancelable: false }
        // );
        // let obj = {
        //     loginPhone:this.state.name,//账号
        //     loginPwd:this.state.password,//密码
        // }
        // axios.get('http://192.168.0.167:6200',obj).then(res=>{
        //     console.log(res,111111111111)
        // })
        // loginAuth(obj).then(res=>{
        //          console.log(res,"9999999999")
        // })
        Alert.alert(
            '错误提示',
            name+'我要登录了',
            [
                {text: '确定', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
        )

    }
};
const styles = StyleSheet.create({
    screen: {
        width,height,
        backgroundColor:'#F2F2F2',
        alignItems:'center'
    },
    headBox:{
        width,
        height:100,
        marginTop:50,
        alignItems:'center'
    },
    loginBox:{
        width,
      height:50,
        marginTop:10,
        flexDirection: 'row',
        paddingLeft:10,
        paddingRight:10,
    },
    flex1:{
     flex:1,
    },
    lineHeight:{
        lineHeight:50,
    },
    flex3:{
      flex:3
    },
    styleP:{
        color:'red',
        fontSize:14,
        borderWidth:1,
        borderColor:'#cccccc',
        height:40,
        marginTop:5
    },
    buttonBox:{
        width:width*0.9,
        marginTop:20,
    }
});