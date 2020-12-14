import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// 引入组件
import Button, {ButtonType , ButtonSize} from './button';
// 创建组件
const defaultBtn = () => (
  <Button onClick={action("clicked")}>default button</Button>
)

const btnWithSize = () => {
  return (<>
    <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Large</Button>
    <Button btnType={ButtonType.Primary} size={ButtonSize.Normal}>Normal</Button>
    <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>Small</Button>
  </>)
}

const btnWithType = () => {
  return (<>
    <Button btnType={ButtonType.Default}>Default</Button>
    <Button btnType={ButtonType.Primary}>Primary</Button>
    <Button btnType={ButtonType.Danger}>Danger</Button>
    <Button btnType={ButtonType.Link} href="https://www.baidu.com">Link</Button>
  </>)
}

storiesOf('Button', module)
  .add('默认 button', defaultBtn)
  .add('不同尺寸 button', btnWithSize)
  .add('不同类型 button', btnWithType)