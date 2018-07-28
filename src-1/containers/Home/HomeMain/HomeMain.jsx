import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import '../../common/less/mixins.less'
import HomeSwiper from '../../../components/Home/HomeSwiper/HomeSwiper'
import HomeProduct from '../../../components/Home/HomeProduct/HomeProduct'
import HomeNewPro from '../../../components/Home/HomeNewPro/HomeNewPro'
import HomeRecommend from '../../../components/Home/HomeRecommend/HomeRecommend'
import HomeLimit from '../../../components/Home/HomeLimit/HomeLimit'
import HomeHandPick from '../../../components/Home/HomeHandPick/HomeHandPick'
import HomeGoodsCart from '../../../components/Home/HomeGoodsCart/HomeGoodsCart'
import {reqNavInfo,reqFocusList} from '../../../api/index'
import './Home.less'



export default class Home extends Component {
  
  state = {
    focusList:[], //轮播
    
    
  }
  
  //初始渲染后
  componentDidMount(){
    this.getFocusList()
  }
  
  async getFocusList (){
    const result=await reqFocusList()
    if(result.code===0){
      const focusList=result.data
      this.setState({
        focusList
      })
    }
  }
  
  render() {
    const {headCateList,focusList}=this.state
    return (
      <div className="home-main">
        <HomeSwiper focusList={focusList}/>
        <HomeProduct/>
        <HomeNewPro/>
        <HomeRecommend/>
        <HomeLimit/>
        <HomeHandPick/>
        <HomeGoodsCart/>
      </div>
    )
  }
}