import React, {Component} from 'react'
import PubSub from 'pubsub-js'
import {connect} from 'react-redux'
import {getCateList} from '../../../redux/actions'
// import {withRouter} from 'react-router-dom'

// import pic from './image/03.png'
import './MsiteDetai.less'


class MsiteDetai extends Component {

  componentDidMount(){
    this.props.getNavTags();
    console.log(this.props.getNavTags);
  };

  render() {
    // console.log(this);
    const index=this.props.match.params.id;
    const detailInfo=this.props.CateList[index];
    return (
      <div className="msitedetai">
        {
          detailInfo &&
          <div className="detail-wrap">
            <div className="f-mb20">
              <img src={detailInfo.bannerUrl} alt=""/>
            </div>
            { detailInfo.subCateList &&
            detailInfo.subCateList.map((subCate,index)=>(
              <div className="wrap" key={index}>
                <div className="title">
                  <div >
                    <span className="name">{subCate.name}</span>
                    <span className="desc">{subCate.frontName}</span>
                  </div>
                </div>
                <div className="item">
                  <ul v-if="navTagList[index]">
                    {
                      detailInfo.subCateList.map((subCate,index)=>(
                        <li key={index}>
                          <img src={subCate.wapBannerUrl} alt=""/>
                          <span className="ellipsis">{subCate.frontDesc}</span>
                          <span>{subCate.frontName}</span>
                          <span>￥ {Math.floor(Math.random()*30+100)}</span>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            ))
            }
          </div>
        }
      </div>
    )
  }
};

export default connect(
  state=>({CateList:state.CateList}), //接收reducer里面的函数的函数返回值
  {getCateList} //接收异步action函数
)(MsiteDetai)