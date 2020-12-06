import React, { useState, useEffect } from 'react'
/**
 * 自定义 Hooks
 * 状态复用
 */
export const useMouseTracker = () => {
  const [ position, updatePosition ] = useState({ x: 0, y: 0})

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      updatePosition({
        x: e.clientX,
        y: e.clientY
      })
    }
    // 事件绑定
    document.body.addEventListener("mousemove", handleClick)
    return () => {
      // 回调函数-清除事件绑定
      // 回调执行的是上一次调用的结果
      document.body.removeEventListener("mousemove", handleClick)
    };
  }, [position]);
  return position
}