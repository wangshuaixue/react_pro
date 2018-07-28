import React, {Component} from 'react'
import PubSub from 'pubsub-js'
import {connect} from 'react-redux'
import {getCateList} from '../../../redux/actions'
// import {withRouter} from 'react-router-dom'
import '../../../common/less/mixins.less'
//import {reqCateList} from '../../../api/index'

import './HomeDetai.less'


class HomeDetai extends Component {
  
  state={
    CateList:[]
  }

  componentDidMount(){
   /* this.getNavList()
    console.log(this.state.CateList)*/
   this.props.getCateList();
   /* const num=this.props.match.params.id
    console.log(this.props.CateList[this.props.match.params.id])
    this.setState({
      detailInfo:this.props.CateList[this.props.match.params.id]
    })*/
  };
  
/*  componentDidUpdate(){
    /!*this.setState({
      detailInfo:this.props.CateList[this.props.match.params.id]
    })*!/
  };*/
  
  //发布请求
  /*async getNavList (){
    const result=await reqCateList()
    if(result.code===0){
      const CateList=result.data
      console.log(CateList)
      this.setState({
        CateList
      })
    }
  }*/
  

  render() {
    const index=this.props.match.params.id;
    const detailInfo=this.props.CateList[index];
   /* const {detailInfo} = this.state*/
    // const detailInfo=this.state.CateList[index]
    // console.log(detailInfo)
    return (
      <div className="home_list">
        <div className="banner">
          {detailInfo&&
            <img src={detailInfo.bannerUrl} alt=""/>}
        </div>
        <div className="indexFloor" >
          <h3>{detailInfo?detailInfo.name:''}</h3>
          <div className="goodGrid">
            {detailInfo&&
              <ul className="list">
              {detailInfo.itemList.map((item,index)=>(
                    <li key={index}>
                    <img src={item.listPicUrl} alt=""/>
                    <span className="desc">{item.simpleDesc}</span>
                    <div>满额减</div>
                    <span className="good">{item.name}</span>
                    <span className="price">￥{item.retailPrice}</span>
                  </li>
                ))
              }
          </ul>}
    
        </div>
  
      </div>
  </div>
    )
  }
}

export default connect(
  state=>({CateList:state.CateList}),
  {getCateList} //接收异步action函数
)(HomeDetai)