import React from "react"

import Menu from "./componenets/Menu/menu"
import MenuItem from "./componenets/Menu/menuItem"
import SubMenu from "./componenets/Menu/subMenu"

const App = () => {
  return <div>
    <Menu onSelecte={(index)=>{console.log(index)}}>
      <MenuItem>123</MenuItem>
      <MenuItem disabled>124</MenuItem>
      <MenuItem>125</MenuItem>
      <SubMenu title="sub-menu1">
        <MenuItem>123</MenuItem>
        <MenuItem disabled>123</MenuItem>
        <MenuItem>123</MenuItem>
      </SubMenu>
    </Menu>
    <Menu onSelecte={(index)=>{console.log(index)}} defauleSelectSubMenus={["3"]} mode="vertical">
      <MenuItem>123</MenuItem>
      <MenuItem disabled>124</MenuItem>
      <MenuItem>125</MenuItem>
      <SubMenu title="sub-menu1">
        <MenuItem>123</MenuItem>
        <MenuItem disabled>123</MenuItem>
        <MenuItem>123</MenuItem>
      </SubMenu>
    </Menu>
  </div>
}
export default App