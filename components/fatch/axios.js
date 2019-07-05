// /*
// * 还有问题的，有接口才调试 这个页面不一定要
// * **/
// import axios from 'axios'
// import { Alert} from 'react-native';
// import { Actions } from 'react-native-router-flux';
// // 创建axios实例
// const service = axios.create({
//   timeout: 60000 ,                 // 请求超时时间
// });
// // request拦截器
// service.interceptors.request.use(config => {
//   if(Actions.currentScene=='login'){
//     config.headers = { 'Content-Type':'application/json; charset=utf-8' };
//   }else{
//       let token =JSON.parse(localStorage.getItem('token')); //token
//     if(!!token){ //有token所有的设置上token
//       config.headers = { 'Content-Type':'application/json; charset=utf-8', 'Authorization':token};
//     }else{ //登陆的，token没有那就清楚所有的本地存储，刷新页面自动跳到登陆页面
//       config.headers = { 'Content-Type':'application/json; charset=utf-8' };
//     }
//   }
//   return config;
// }, error => {
//   Promise.reject(error);
// });
// // respone拦截器
// service.interceptors.response.use(
//   //response => response,
//   /**
//    * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
//    * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
//    */
//   response =>{
//     const res = response.data;
//     if(response.data.code != 200){
//        if(response.data.code==2016){
//            Alert.alert({
//            message:"token已经失效，即将重新去登录",
//            type: 'error',
//            duration: 2 * 1000,
//            dangerouslyUseHTMLString:true
//          });
//          setTimeout(()=>{
//              Actions.login()
//              return {data:{status:false}}
//          },500)
//
//        }else if(response.data.code==2017){
//            Alert.alert({
//                message:"token已经失效，即将重新去登录",
//                type: 'error',
//                duration: 2 * 1000,
//                dangerouslyUseHTMLString:true
//            });
//            setTimeout(()=>{
//                Actions.login()
//                return {data:{status:false}}
//            },500)
//         }else if(response.data.code==2018){
//            Alert.alert({
//                message:"token已经失效，即将重新去登录",
//                type: 'error',
//                duration: 2 * 1000,
//                dangerouslyUseHTMLString:true
//            });
//            setTimeout(()=>{
//                Actions.login()
//                return {data:{status:false}}
//            },500)
//
//         }else{
//            Alert.alert({
//            message:response.data.msg?response.data.msg:"网络错误",
//            type: 'error',
//            duration: 2 * 1000,
//            dangerouslyUseHTMLString:true
//          });
//          return {data:{status:false}}
//        }
//
//     }else{
//       return response;
//     }
//   },
//   error => {
//     if(error&&error.response){ //有code不是200
//         Alert.alert({
//         message:error.response.data.status+'!'+ error.response.data.error,
//         type: 'error',
//         duration: 2 * 1000
//       });
//     } else{
//         Alert.alert({
//         message:'网络异常，请联系管理员',
//         type: 'error',
//         duration: 2 * 1000
//       });
//     }
//
//     return {data:{status:false}}
//     // return Promise.reject(error);
//   }
// );
// //service.defaults.headers.common['Authorization'] = "bearer "+ Cookies.get('ACCESS_TOKEN');
// export default service;
//
