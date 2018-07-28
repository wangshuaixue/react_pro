import {combineReducers} from 'redux'
import {
  RECEIVE_TAGLISTS,
  RECEIVE_NEWITEMLISTS,
  RECEIVE_POPULARITEMLISTS,
  RECEIVE_TOPICLISTS,
  RECEIVE_CATELISTS,
  RECEIVE_COLUMNS,
  RECEIVE_RECOMMEND,
  RECEIVE_TENFIFTEENS,
  RECEIVE_ZHENPIN,
  RECEIVE_YXLOOK,
  RECEIVE_FINDMORES,
  RECEIVE_CATEGORYS,
  RECEIVE_GETCODE,
  USER_SUCCESS,
  USER_FAIL
  
} from './action-types'

const initTagList=[]
function tagList(state=initTagList,action) {
  switch (action.type){
    case RECEIVE_TAGLISTS:
      return action.data
    default:
      return state
  }
}

const initNewItem=[]
function NewItemList(state=initNewItem,action) {
  switch (action.type){
    case RECEIVE_NEWITEMLISTS:
      return action.data
    default:
      return state
  }
}

const initPopular=[]
function PopularItem(state=initPopular,action) {
  switch (action.type){
    case RECEIVE_POPULARITEMLISTS:
      return action.data
    default:
      return state
  }
}

const initTopic=[]
function TopicItem(state=initTopic,action) {
  switch (action.type){
    case RECEIVE_TOPICLISTS:
      return action.data
    default:
      return state
  }
}

const initCateList=[]
function CateList(state=initCateList,action) {
  switch (action.type){
    case RECEIVE_CATELISTS:
      return action.data
    default:
      return state
  }
}

const initColumn=[]
function Column(state=initColumn,action) {
  switch (action.type){
    case RECEIVE_COLUMNS:
      return action.data
    default:
      return state
  }
}

const initRecomend={}
function Recomend(state=initRecomend,action) {
  switch (action.type){
    case RECEIVE_RECOMMEND:
      return action.data
    default:
      return state
  }
}

const initTenMsg=[]
function TenMsg(state=initTenMsg,action) {
  switch (action.type){
    case RECEIVE_TENFIFTEENS:
      return action.data
    default:
      return state
  }
}

const initZhenPins={}
function ZhenPins(state=initZhenPins,action) {
  switch (action.type){
    case RECEIVE_ZHENPIN:
      return action.data
    default:
      return state
  }
}

const initYxLook={}
function YxLook(state=initYxLook,action) {
  switch (action.type){
    case RECEIVE_YXLOOK:
      return action.data
    default:
      return state
  }
}

const initMore=[]
function FindMore(state=initMore,action) {
  switch (action.type){
    case RECEIVE_FINDMORES:
      return action.data
    default:
      return state
  }
}

const initMoreCateList=[]
function MoreCateList(state=initMoreCateList,action) {
  switch (action.type){
    case RECEIVE_CATEGORYS:
      return action.data
    default:
      return state
  }
}

const initCode=[]
function PhoneCode(state=initCode,action) {
  switch (action.type){
    case RECEIVE_GETCODE:
      // console.log(action.data)
      return action.data
    default:
      return state
  }
}

const initUser = {
  phone:'',
  code:'',
  msg:''
}
function user(state=initUser,action) {
  switch (action.type){
    case USER_SUCCESS:
      const result=action.data
      console.log(action.data)
      const {phone,code,msg} =result
      return {...initUser,phone:phone,code:code,msg:msg}
    case USER_FAIL:
      return {...initUser,msg:action.msg}
    default:
      return state
  }
}


export default combineReducers({
  tagList,
  NewItemList,
  PopularItem,
  TopicItem,
  CateList,
  Column,
  Recomend,
  TenMsg,
  ZhenPins,
  YxLook,
  FindMore,
  MoreCateList,
  PhoneCode,
  user
})