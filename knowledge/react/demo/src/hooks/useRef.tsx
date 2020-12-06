import React, { useState, useEffect, useRef } from 'react'

export const useRefCom = (url: string, deps: any[] = []) => {
  const [count, updateCount] = useState(0)
  const countRef = useRef(0)
  const domRef = useRef<HTMLInputElement>(null)

  const handleAddCount = () => {
    updateCount(count + 1)
    countRef.current++
  }

  const handleAlert = () => {
    setTimeout(()=> {
      console.log(count)  // output: 2
      console.log(countRef.current) // output: 5
    }, 5000)
  }

  useEffect(() => {
    if(domRef && domRef.current) {
      // 数据变更自动获取焦点
      domRef.current.focus()
    }
  })

  return (
    <>
      <input type="text" ref={domRef}/>
      {/* 每1s点击一次 */}
      <button onClick={handleAddCount}>点击1</button>
      {/* 第2s触发点击 */}
      <button onClick={handleAlert}>点击2</button>
    </>
  )

}