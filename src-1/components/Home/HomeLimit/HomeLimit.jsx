import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import './HomeLimit.less'
import o from  './img/limitTime/01.png'
import l from  './img/welfare/01.jpg'


export default class HomeLimit extends Component {
  
  render() {
    return (
      <div>
        <div >
          <div className="time">
            <div className="timeLimit">
              <div className="left">
                <div className="title">严选限时购</div>
                <div className="count">
                  <span className="hours">02</span>
                  <span className="arr">:</span>
                  <span className="mins">36</span>
                  <span className="arr">:</span>
                  <span className="secs">37</span>
                </div>
                <div className="next-time">下一场 22:00 开始</div>
              </div>
              <div className="right">
                <div className="pic">
                  <img src={require('./img/limitTime/01.png')} alt=""/>
                </div>
                <div className="price">
                  <div className="p1">￥22</div>
                  <div className="p2">￥28</div>
                </div>
              </div>
            </div>
          </div>
          <div className="welfare">
            <a href="javascript:;"  className="wel"></a>
          </div>
        </div>
      </div>
    )
  }
}