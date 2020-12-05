import React, { useState } from "react"

export const ButtonLike: React.FC = () => {
  // 状态值，更新状态值的方法
  const [ likeInfo, updateLikeInfo ] = useState({
    count: 0,
    isClicked: false
  })
  return (
    <>
      <button onClick={() => {updateLikeInfo({
        count: likeInfo.count,
        isClicked: true
      })}}>{likeInfo.count} 点赞 </button>
    </>
  )
}

export const ButtonLike2: React.FC = () => {
  // 状态值，更新状态值的方法
  const [ like, updateLike ] = useState(0)
  const [ isClicked, updateIsClicked ] = useState(false)
  return (
    <>
      <button onClick={() => {updateLike(like + 1)}}>{like} 点赞 </button>
      <button onClick={() => {updateIsClicked(!isClicked)}}>{isClicked ? 'OFF' : 'ON'}</button>
    </>
  )
}
