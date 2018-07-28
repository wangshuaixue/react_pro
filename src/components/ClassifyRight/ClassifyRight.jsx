import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import BScroll from 'better-scroll'
import './ClassifyRight.less'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'


 class ClassifyRight extends Component {
  
  static propTypes = {
    index: PropTypes.number.isRequired
  }
  
  render() {
    const  index=this.props.index
    const detail=this.props.MoreCateList[index]
    return (
      <div>
        <div>
          {
            detail ? <div className="detail-con" v-if="detail.bannerUrl">
              <div className="head-img">
                <img src={detail.bannerUrl} alt=""/>
              </div>
              <div className="cate-list">
                <div className="classify">
              <span className="title">
                <span className="title-left">{detail.name}</span>
                <span className="title-right">分类</span>
              </span>
                </div>
                <ul className="list-con">
                  {
                    detail.subCateList.map((item,index)=>(
                      <li className="item" key={index}>
                        <a href="/" className="inner-wrap">
                          <div className="item-img">
                            <img src={item.wapBannerUrl} alt=""/>
                          </div>
                          <div className="text">{item.name}</div>
                        </a>
                      </li>
                    ))
                  }
                 
                </ul>
              </div>
            </div> :null
          }
          
        
        </div>
      </div>
    )
  }
}

export default connect(
  state=>({MoreCateList:state.MoreCateList})
)(ClassifyRight)