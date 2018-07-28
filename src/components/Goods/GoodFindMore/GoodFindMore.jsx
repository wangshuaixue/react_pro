import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import {getFindMore} from '../../../redux/actions'
import {connect} from 'react-redux'
import './GoodFindMore.less'


 class GoodFindMore extends Component {
  
  componentDidMount(){
    this.props.getFindMore()
  }
  
  render() {
    const {findMore} =this.props
    // console.log(findMore)
    return (
      <div>
        <div>
          <div className="find-more">
            <div className="title-find">
              <span className="inner">更多精彩</span>
            </div>
            <div className="content-wrap">
              {
                findMore.map((item,index)=>(
                  <a className="item-cart" key={index}>
                    <div className="wrap-img">
                      <img src={item.itemPicUrl} alt=""/>
                    </div>
                    <div className="text-info">{item.title}</div>
                  </a>
                ))
              }
            
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default connect(
  state=>({findMore:state.FindMore}),
  {getFindMore}
)(GoodFindMore)