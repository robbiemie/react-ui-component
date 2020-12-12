import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Button, {ButtonProps,ButtonType,ButtonSize} from './button'

const defaultProps = {
  onClick: jest.fn() // 模拟函数调用
}


describe("test button component", () => {
  it("测试默认 button", () => {
    const wrapper = render(<Button {...defaultProps}>默认按钮</Button>)
    // 匹配查找dom元素文本
    const element = wrapper.getByText("默认按钮") as HTMLButtonElement
    // js-dom api
    expect(element).toBeInTheDocument()
    // 测试 元素名称
    expect(element.tagName).toEqual("BUTTON")
    // 测试 className
    expect(element).toHaveClass("btn btn-default")
    // 模拟点击事件
    fireEvent.click(element)
    // 调用成功
    expect(defaultProps.onClick).toHaveBeenCalled()
    expect(element.disabled).toBeFalsy()
  })
  const testProps: ButtonProps = {
    btnType: ButtonType.Primary,
    size: ButtonSize.Large,
    className: "robbie"
  }
  it("测试多个 props", () => {
    const wrapper = render(<Button {...testProps}>默认按钮</Button>)
    // 匹配查找dom元素文本
    const element = wrapper.getByText("默认按钮")
    // js-dom api
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass("btn btn-primary btn-lg")
  })
  it("link button", () => {
    const wrapper = render(<Button btnType={ButtonType.Link} href="www.baidu.com">Link</Button>)
    // 匹配查找dom元素文本
    const element = wrapper.getByText("Link")
    // js-dom api
    expect(element).toBeInTheDocument()
    // 测试 元素名称
    expect(element.tagName).toEqual("A")
    // js-dom api
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass("btn btn-link")

  })
  const disabledProps: ButtonProps = {
    btnType: ButtonType.Primary,
    size: ButtonSize.Large,
    className: "robbie",
    disabled: true
  }
  it("disabled button", () => {
    const wrapper = render(<Button {...disabledProps}>禁用按钮</Button>)
    // 匹配查找dom元素文本
    const element = wrapper.getByText("禁用按钮") as HTMLButtonElement
    // js-dom api
    expect(element).toBeInTheDocument()
    expect(element.disabled).toBeTruthy()
  })
})
