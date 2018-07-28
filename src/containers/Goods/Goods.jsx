import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import '../../common/less/mixins.less'
import './Goods.less'
import GoodsHeader from '../../components/Goods/GoodsHeader/GoodsHeader'
import GoodSwiper from '../../components/Goods/GoodSwiper/GoodSwiper'
import GoodsRecommend from '../../components/Goods/GoodsRecommend/GoodsRecommend'
import GoodsCarve from '../../components/Goods/GoodsCarve/GoodsCarve'
import GoodsRecom from '../../components/Goods/GoodsRecom/GoodsRecom'
import GoodsChoose from '../../components/Goods/GoodsChoose/GoodsChoose'
import GoodLook from '../../components/Goods/GoodLook/GoodLook'
import GoodFindMore from '../../components/Goods/GoodFindMore/GoodFindMore'

export default class Goods extends Component {
  
  render() {
    return (
      <div className="goods-wrap">
        <GoodsHeader/>
        <GoodSwiper/>
        <GoodsRecommend/>
        <GoodsRecom/>
        <GoodsCarve/>
        <GoodsChoose/>
        <GoodLook/>
        <GoodFindMore/>
      </div>
    )
  }
}