import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import {getRecomend} from '../../../redux/actions'
import {connect} from 'react-redux'
import './GoodsRecom.less'


 class GoodsRecom extends Component {
   componentDidMount(){
     this.props.getRecomend()
   }
  
  render() {
     const {recommend} = this.props
    return (
      <div>
        <div className="recommend-con">
          <div className="recom-item">
            <div className="rec-title">为你推荐</div>
            <div href="/" className="item-wrap">
              <div href="/" className="mainItem" >
                <div className="pic-container">
                  <img src={recommend.recommendBanner ? recommend.recommendBanner.picUrl : null } alt="" />
                  <div className="bg-top">{recommend.recommendBanner ? recommend.recommendBanner.nickname : null}</div>
                </div>
                <div className="pic-info">
                  <div className="pir-text-con">
                    <div className="text">{recommend.recommendBanner ? recommend.recommendBanner.title : null}</div>
                    <div className="price">{recommend.recommendBanner ? recommend.recommendBanner.priceInfo : null}元起</div>
                  </div>
                  <div className="pic-down">{recommend.recommendBanner ? recommend.recommendBanner.subtitle : null}</div>
                </div>
        
              </div>
              {
                recommend.recommends ? recommend.recommends.map((item,index)=>(
                  <div href="/" className="info-list" key={index}>
                    <div className="left-info">
                      <div className="actor">
                        <div className="head-pic"><img src={item.avatar} alt="" /></div>
                        <div className="name">{item.nickname}</div>
                      </div>
                      <div className="text-info">{item.title}</div>
                      <div className="text-info2">{item.subtitle}</div>
                    </div>
                    <div className="right-img">
                      <img src={item.picUrl} alt="" />
                      <div className="bg-top">{item.typeName}</div>
                    </div>
                  </div>
                )) : null
              }
             
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default connect(
  state=>({recommend:state.Recomend}),
  {getRecomend}
)(GoodsRecom)