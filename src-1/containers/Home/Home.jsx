import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import '../../common/less/mixins.less'
import HomeHeaderTop from '../../components/Home/HomeHeaderTop/HomeHeaderTop'
import HomeSwiper from '../../components/Home/HomeSwiper/HomeSwiper'
import HomeProduct from '../../components/Home/HomeProduct/HomeProduct'
import HomeNewPro from '../../components/Home/HomeNewPro/HomeNewPro'
import HomeRecommend from '../../components/Home/HomeRecommend/HomeRecommend'
import HomeLimit from '../../components/Home/HomeLimit/HomeLimit'
import HomeHandPick from '../../components/Home/HomeHandPick/HomeHandPick'
import HomeGoodsCart from '../../components/Home/HomeGoodsCart/HomeGoodsCart'
import {reqNavInfo,reqFocusList} from '../../api/index'
import './Home.less'



export default class Home extends Component {
  
  state = {
    headCateList:[],
  }
  
  //初始渲染后
  componentDidMount(){
    this.getFocusList()
  }
  
  
  
  //发布请求
  async getNavList (){
    const result=await reqNavInfo()
    if(result.code===0){
      const headCateList=result.data
      this.setState({
        headCateList
      })
    }
  }

  
  render() {
    const {headCateList,focusList}=this.state
    return (
      <div className="home-wrap">
        <HomeHeaderTop headCateList={headCateList}/>
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