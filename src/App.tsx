import React from "react"
import Button, {
  ButtonSize,
  ButtonType
} from  "./componenets/Button/button"
const App = () => {
  return <div>
    <Button btnType={ButtonType.Primary} onClick={()=>{console.log('test')}}>123</Button>
    <Button btnType={ButtonType.Danger} disabled>123</Button>
    <Button btnType={ButtonType.Default} autoFocus>123</Button>
    <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>123</Button>
    <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>123</Button>
    <Button btnType={ButtonType.Link} href="https://www.baidu.com" target="_blank">123</Button>
    <Button btnType={ButtonType.Link} href="https://www.baidu.com" disabled>123</Button>
  </div>
}
export default App