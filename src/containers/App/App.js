import React,{Component} from 'react'
import {Route,Switch,withRouter} from 'react-router-dom'
import './css/reset.css'
import './app.less'
import '../../common/less/mixins.less'
import Home from '../Home/Home'
import Cart from '../Cart/Cart'
import Classify from '../Classify/Classify'
import Goods from '../Goods/Goods'
import Personal from '../Personal/Personal'
import FooterBar from '../FooterBar/FooterBar'
import Interlayer from '../Interlayer/Interlayer'
import Login from '../Login/Login'

 class App extends Component {
  render(){
    const isShow=this.props.location.pathname;
    return(
      <div>
        <Switch>
            <Route path='/home' component={Home}></Route>
            <Route path='/cart' component={Cart}></Route>
            <Route path='/classify' component={Classify}></Route>
            <Route path='/goods' component={Goods}></Route>
            <Route path='/personal' component={Personal}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/' component={Interlayer}></Route>
        </Switch>
        {isShow!=='/initLayer'&&isShow!=='/personal'&&isShow!=='/login'&&isShow!=='/'&&<FooterBar/>}
        
      </div>
    );
  }
}

export default withRouter(App)
