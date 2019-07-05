import fatch from '../commonJs/axios'
let http ='http://192.168.0.167:4002'
/***
 * 轮播图列表
 * http://192.168.0.105:4888/woodInfoServer/banner/findBannerList
 * */
export function findBannerList(type) {
    return new Promise((resolve,reject)=>{
        fatch({
            method:'GET',
            url:http+'/woodInfoServer/banner/findBannerList?type='+type,
        }).then(res=>{
            if(res.data.status !==false){
                resolve(res.data.data)
            }
        })
    })
}
/***
 * 园区资讯列表
 * http://192.168.0.105:4888/woodInfoServer/gardenInfo/findGardenInfoAll?pageNum=1&pageSize=4&type=1
 * */
export function findGardenInfoAll() {
    return new Promise((resolve,reject)=>{
        fatch({
            method:'GET',
            url:http+'/woodInfoServer/gardenInfo/findGardenInfoAll?pageNum=1&pageSize=4&type=1&searchName=""',
        }).then(res=>{
            if(res.data.status !==false){
                resolve(res.data.data)
            }
        })
    })
}
