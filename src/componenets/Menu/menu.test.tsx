import React from 'react'
import { render, RenderResult, fireEvent, cleanup } from '@testing-library/react'

import Menu, {MenuProps} from './menu'
import MenuItem from './menuItem'

const testProps: MenuProps = {
  defaultIndex: 0,
  onSelecte: jest.fn(),
  className: 'test'
}

const testVerticalProps: MenuProps = {
  defaultIndex: 0,
  mode: "vertical"
}

const generateMenu = props => {
  return (
    <Menu {...props}>
      <MenuItem>active</MenuItem>
      <MenuItem disabled>disabled</MenuItem>
      <MenuItem>clicked</MenuItem>
    </Menu>
  )
}

let wrapper:RenderResult, menuElement:HTMLElement, activeElement:HTMLElement, disabledElement:HTMLElement

describe('test Menu and MenuItem', () => {

  // 通用函数 beforeEach!!!
  beforeEach(()=>{
    wrapper = render(generateMenu(testProps))
    menuElement = wrapper.getByTestId("test-menu")
    activeElement = wrapper.getByText("active")
    disabledElement = wrapper.getByText("disabled")
  })

  it("case1: checkout Menu and MenuItem deafult props", () => {
    // 节点元素是否上屏
    expect(menuElement).toBeInTheDocument()
    expect(menuElement).toHaveClass("menu test")
    expect(menuElement.getElementsByTagName('li').length).toEqual(3)
    expect(activeElement).toHaveClass('menu-item is-active')

  })
  it("case2: checkout clicke items and exec right callback", () => {
    const thirdElement = wrapper.getByText('clicked')
    fireEvent.click(thirdElement)
    expect(testProps.onSelecte).toHaveBeenCalledWith(2)
    expect(thirdElement).toHaveClass("menu-item is-active")
    fireEvent.click(disabledElement)
    expect(disabledElement).not.toHaveClass('is-active')
    expect(testProps.onSelecte).not.toHaveBeenCalledWith(1)
  })
  it("case3: checkout render vertical mode", () => {
    // 情况
    cleanup()
    const wrapper = render(generateMenu(testVerticalProps))
    const menuElement = wrapper.getByTestId("test-menu")
    expect(menuElement).toHaveClass('menu-vertical')
  })
})