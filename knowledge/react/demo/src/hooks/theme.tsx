import React, { useState, useEffect, useRef } from 'react'
// 定义接口
interface IThemeProps {
  [key: string]: {
    color: string;
    backgroundColor: string;
  }
}
// 主题色
const themes:IThemeProps  = {
  light: {
    color: "#000",
    backgroundColor: "#ccc"
  },
  dark: {
    color: "#fff",
    backgroundColor: "#000"
  }
}
// 创建 context
const ThemeContext = React.createContext(themes.light)


export const theme = (url: string, deps: any[] = []) => {
  return (
    <>
      <ThemeContext.Provider value={themes.light}>
        <p>context</p>
      </ThemeContext.Provider>
    </>
  )
}