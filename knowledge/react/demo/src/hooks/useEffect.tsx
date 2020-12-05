import React, { useState, useEffect } from "react"

export const ButtonLike1: React.FC = () => {
  // 状态值，更新状态值的方法
  const [ like, updateLike ] = useState(0)
  const [ isClicked, updateIsClicked ] = useState(false)
  useEffect(()=>{
    // 数据每次变更都会触发此操作
    document.title = `点击了${like}次`
  }, [])
  return (
    <>
      <button onClick={() => {updateLike(like + 1)}}>{like} 点赞 </button>
      <button onClick={() => {updateIsClicked(!isClicked)}}>{isClicked ? 'OFF' : 'ON'}</button>
    </>
  )
}
