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
  RECEIVE_CATEGORYS
  
} from './action-types'

import {
  reqTagLists,
  reqNewItems,
  reqPopular,
  reqTopicList,
  reqCateList,
  reqColumn,
  reqRecommend,
  reqTenfifteen,
  reqZhenThings,
  reqYxLook,
  reqFindMore,
  reqHeadcatelist
  
} from '../api'

//接收同步action，厂商直销
const reciveTagList = (tagList) => ({type:RECEIVE_TAGLISTS,data:tagList})

//发送异步获取产品
export const getTagLists=()=>{
  return async dispatch=>{
    const result=await reqTagLists()
    if(result.code===0){
      dispatch(reciveTagList(result.data))
    }
  }
}

//同步新品首发
const reciveNewItem = (newItem) => ({type:RECEIVE_NEWITEMLISTS,data:newItem})

//发送异步获取新品
export const getNewItem = () =>{
  return async dispatch=>{
    const result=await reqNewItems()
    if(result.code===0){
      dispatch(reciveNewItem(result.data))
    }
  }
}

//同步人气推荐
const recivePopular = (popularItem) => ({type:RECEIVE_POPULARITEMLISTS,data:popularItem})

//发送异步人气推荐商品
export const getPopularItem = () =>{
  return async dispatch=>{
    const result=await reqPopular()
    if(result.code===0){
      dispatch(recivePopular(result.data))
    }
  }
}

//同步专题精选
const reciveTopic = (TopicItem) => ({type:RECEIVE_TOPICLISTS,data:TopicItem})

//异步获取专题推荐
export const getTopicList = () =>{
  return async dispatch=>{
    const result=await reqTopicList()
    if(result.code===0){
      dispatch(reciveTopic(result.data))
    }
  }
}

//同步专题精选
const reciveCateList = (TopicItem) => ({type:RECEIVE_CATELISTS,data:TopicItem})

//异步获取专题推荐
export const getCateList = () =>{
  return async dispatch=>{
    const result=await reqCateList()
    if(result.code===0){
      dispatch(reciveCateList(result.data))
    }
  }
}

//识物同步
const reciveColumn = (column) => ({type:RECEIVE_COLUMNS,data:column})
//识物异步
export const getColumn = () => {
  return async dispatch=>{
    const result=await reqColumn()
    if(result.code===0){
      dispatch(reciveColumn(result.data))
    }
  }
}

//同步为你推荐
const reciveRecomend = (recomend) => ({type:RECEIVE_RECOMMEND,data:recomend})
//异步为你推荐
export const getRecomend = () =>{
  return async dispatch=>{
    const result=await reqRecommend()
    if(result.code===0){
      dispatch(reciveRecomend(result.data))
    }
  }
}

//同步为你推荐
const reciveTenFive = (msg) => ({type:RECEIVE_TENFIFTEENS,data:msg})
//异步为你推荐
export const getTenFive = () =>{
  return async dispatch=>{
    const result=await reqTenfifteen()
    if(result.code===0){
      dispatch(reciveTenFive(result.data))
    }
  }
}

//同步甄选
const reciveZhenPin = (msg) => ({type:RECEIVE_ZHENPIN,data:msg})
//异步为你推荐
export const getZhenPin = () =>{
  return async dispatch=>{
    const result=await reqZhenThings()
    if(result.code===0){
      dispatch(reciveZhenPin(result.data))
    }
  }
}

//同步LOOK
const reciveLook= (msg) => ({type:RECEIVE_YXLOOK,data:msg})
//异步为你推荐
export const getYxLook = () =>{
  return async dispatch=>{
    const result=await reqYxLook()
    if(result.code===0){
      dispatch(reciveLook(result.data))
    }
  }
}


//更多精彩
const reciveMore= (msg) => ({type:RECEIVE_FINDMORES,data:msg})
//异步为你推荐
export const getFindMore = () =>{
  return async dispatch=>{
    const result=await reqFindMore()
    if(result.code===0){
      dispatch(reciveMore(result.data))
    }
  }
}

//分类列表
const reciveCateListC= (msg) => ({type:RECEIVE_CATEGORYS,data:msg})
//异步分类
export const getCateListClassify = () =>{
  return async dispatch=>{
    const result=await reqHeadcatelist()
    if(result.code===0){
      dispatch(reciveCateListC(result.data))
    }
  }
}