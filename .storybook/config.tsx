import React from 'react'
import { configure, addDecorator } from "@storybook/react";
import { withInfo } from '@storybook/addon-info';
import "./../src/styles/index.scss"
const req = require.context("../src", true, /\.stories\.tsx$/);
function loadStories() {
    req.keys().forEach(req);
}
// 增加全局样式
const styles:React.CSSProperties = {
  padding: "20px 40px"
}
const storyWrapper = (storyFn: any) => {
  return (
    <div style={styles}>
      {
        storyFn()
      }
    </div>
  )
}
addDecorator(storyWrapper)
addDecorator((withInfo as any))
configure(loadStories, module);