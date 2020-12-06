import React, { useState, useEffect } from "react"

export const ButtonTracker: React.FC = () => {
  
  const [ position, updatePosition ] = useState({ x: 0, y: 0})

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      updatePosition({
        x: e.clientX,
        y: e.clientY
      })
    }
    // 事件绑定
    document.body.addEventListener("click", handleClick)
    return () => {
      // 回调函数-清除事件绑定
      // 回调执行的是上一次调用的结果
      document.body.removeEventListener("click", handleClick)
    };
  }, [position]);
  
  return (
    <div>positionX: {position.x}, positionY: {position.y} </div>
  )
}