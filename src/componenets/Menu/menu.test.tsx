import React from 'react'
import { render, RenderResult, fireEvent, cleanup, waitFor } from '@testing-library/react'

import Menu, {MenuProps} from './menu'
import MenuItem from './menuItem'
import SubMenu from './subMenu'

const testProps: MenuProps = {
  defaultIndex: '0',
  onSelecte: jest.fn(),
  className: 'test'
}

const testVerticalProps: MenuProps = {
  defaultIndex: '0',
  mode: "vertical"
}

const generateMenu = props => {
  return (
    <Menu {...props}>
      <MenuItem>active</MenuItem>
      <MenuItem disabled>disabled</MenuItem>
      <MenuItem>clicked</MenuItem>
      <SubMenu title="sub-menu1">
        <MenuItem>drop1</MenuItem>
        <MenuItem disabled>drop2</MenuItem>
        <MenuItem>drop3</MenuItem>
      </SubMenu>
    </Menu>
  )
}
// 样式检测
const createStyleFile = () => {
  const cssFile:string = `
    .submenu {
      display: none;
    }
    .submenu.menu-open {
      display: block;
    }
  `
  const style = document.createElement('style')
  style.type = 'text/css'
  style.innerHTML = cssFile
  return style
}

let wrapper:RenderResult, menuElement:HTMLElement, activeElement:HTMLElement, disabledElement:HTMLElement

describe('test Menu and MenuItem', () => {

  // 通用函数 beforeEach!!!
  beforeEach(()=>{
    wrapper = render(generateMenu(testProps))
    // 插入 css 样式文件
    wrapper.container.append(createStyleFile())
    menuElement = wrapper.getByTestId("test-menu")
    activeElement = wrapper.getByText("active")
    disabledElement = wrapper.getByText("disabled")
  })

  it("case1: checkout Menu and MenuItem deafult props", () => {
    // 节点元素是否上屏
    expect(menuElement).toBeInTheDocument()
    expect(menuElement).toHaveClass("menu test")
    expect(menuElement.querySelectorAll(':scope > li').length).toEqual(4)
    expect(activeElement).toHaveClass('menu-item is-active')

  })
  it("case2: checkout clicke items and exec right callback", () => {
    const thirdElement = wrapper.getByText('clicked')
    fireEvent.click(thirdElement)
    expect(testProps.onSelecte).toHaveBeenCalledWith('2')
    expect(thirdElement).toHaveClass("menu-item is-active")
    fireEvent.click(disabledElement)
    expect(disabledElement).not.toHaveClass('is-active')
    expect(testProps.onSelecte).not.toHaveBeenCalledWith('1')
  })
  it("case3: checkout render vertical mode", () => {
    // 重置状态
    cleanup()
    const wrapper = render(generateMenu(testVerticalProps))
    const menuElement = wrapper.getByTestId("test-menu")
    expect(menuElement).toHaveClass('menu-vertical')
  })
  it("case4: checkout dropdown items when hover on subMenu",async () => {
    expect(wrapper.queryByText('drop1')).not.toBeVisible()
    fireEvent.mouseEnter(wrapper.queryByText('sub-menu1'))
    await waitFor(() => {
      expect(wrapper.queryByText('drop1')).toBeVisible()
    })
    fireEvent.click(wrapper.getByText("drop1"))
    expect(testProps.onSelecte).toHaveBeenCalledWith('3-0')
    fireEvent.mouseLeave(wrapper.getByText('sub-menu1'))
    await waitFor(() => {
      expect(wrapper.queryByText('drop1')).not.toBeVisible()
    })
  })
})