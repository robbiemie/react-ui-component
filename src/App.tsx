import React from "react"

import Menu from "./componenets/Menu/menu"
import MenuItem from "./componenets/Menu/menuItem"

const App = () => {
  return <div>
    <Menu onSelecte={(index)=>{console.log(index)}}>
      <MenuItem index={0}>123</MenuItem>
      <MenuItem index={1} disabled>124</MenuItem>
      <MenuItem index={2}>125</MenuItem>
    </Menu>
  </div>
}
export default App