import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import '../../common/less/mixins.less'
import './Classify.less'
import BScroll from 'better-scroll'
import ClassifyRight from '../../components/ClassifyRight/ClassifyRight'
import ClassifyHeader from '../../components/ClassifyHeader/ClassifyHeader'
import {getCateListClassify} from '../../redux/actions'
import {connect} from 'react-redux'


 class Classify extends Component {
  
  state={
    index:1
  }
  
  componentDidMount(){
    this.props.getCateListClassify()
  }
   componentDidUpdate(){
     if(this.scroll){
       this.scroll.destroy()
     }
     this.scroll=new BScroll('.sidebar-wrap', {
       click: true,   //默认是禁止点击的
       scrollY:true
     })
   }
   
   
  render() {
    const  {MoreCateList} =this.props
    // console.log(MoreCateList)
    return (
      <div>
        <ClassifyHeader />
        <div>
          <div className="slideW">
            <div className="sidebar-wrap">
              <ul className="sidebar">
                {
                  MoreCateList.map((item,index)=>(
                    <li className={`item ${index===1 ? 'active' : '' }`}  key={index}
                    onClick={(event)=>{
                      this.setState({index})
                      const liNodes = document.querySelectorAll('.item')
                      for (let i = 0; i < liNodes.length; i++) {
                        liNodes[i].className = 'item'
                      }
                      event.currentTarget.className = 'item active'
                    }}>
                      <a href="javascript:;" className="text">{item.name}</a>
                    </li>
                  ))
                }
            </ul>
          </div>
        </div>
        </div>
        <ClassifyRight index={this.state.index}/>
      </div>
    )
  }
}
export default connect(
  state=>({MoreCateList:state.MoreCateList}),
  {getCateListClassify}
)(Classify)