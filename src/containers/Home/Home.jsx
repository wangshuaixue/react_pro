import React, {Component} from 'react';
import {Route, Switch,NavLink} from 'react-router-dom'
import '../../common/less/mixins.less'
import HomeHeaderTop from '../../components/Home/HomeHeaderTop/HomeHeaderTop'
import HomeMain from  './HomeMain/HomeMain'
import HomeDetai from  './HomeDetai/HomeDetai'
import {reqNavInfo} from '../../api/index'
import {connect} from 'react-redux'
import {getCateList} from '../../redux/actions'
import './Home.less'



 class Home extends Component {
  
  state = {
    headCateList:[],
  }
  
  //初始渲染后
  componentDidMount(){
    this.getNavList()
    this.props.getCateList()
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
        <Switch>
          <Route path='/home/main' component={HomeMain}/>
          <Route path='/home/detail/:id' component={HomeDetai}/>
          <Route component={HomeMain}/>
        </Switch>
      </div>
    )
  }
}

export default connect(
  state=>({CateList:state.CateList}), //接收reducer里面的函数的函数返回值
  {getCateList}
)(Home)