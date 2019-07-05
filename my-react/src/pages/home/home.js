
/*
   Home 主页
*/
import React, { Component } from 'react';
import ReactSwiper from 'reactjs-swiper';
import '../../pageCss/home/home.css'
import {findBannerList,findGardenInfoAll} from '../../api/home/homeApi'
const swiperOptions = {
    preloadImages: true,
    autoplay: 4000,
    autoplayDisableOnInteraction: false
};
class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            bannerList:[],//轮播数据
            newsList:[],//文章列表
        }
    }
    render() {
        return (
            <div id="home-container" style={home}>
                <div style={{width:'100%',height:'100%',overflowY:'auto'}}>
                    <div style={homeBox}>
                        <ReactSwiper swiperOptions={swiperOptions} showPagination items={this.state.bannerList} className="swiper-example" />
                    </div>
                </div>
            </div>
        );
    }
    componentDidMount(){
        let arr = [];
        findBannerList(1).then(res=>{

            arr = res.map((item,index)=>{
                return {image:item.bannerImage,title:item.bannerImage}
            })

            this.setState({
                bannerList:arr
            })
        })
        findGardenInfoAll().then(res=>{
            console.log(res,"bannerList")
            this.setState({
                newsList:res.list
            })
        })
    }
}
const home = {
    width:'100vw',height:'100vh',
    background:"#f2f2f2",overflow:'hidden',
}
const homeBox={
    width:'100%',height:'1.5rem'
}
export default Home;