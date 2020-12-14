import React from 'react';
import { storiesOf } from '@storybook/react';

// 引入组件

const styles:React.CSSProperties = {
  // textAlign: 'center'
}
// 自定义插件
const generateDecorator = (fn:any) => <div style={styles}>{fn()}</div>


storiesOf('Menu', module)
  .addDecorator(generateDecorator) // 引入自定义插件