import React, {ButtonHTMLAttributes, AnchorHTMLAttributes, FC} from 'react'
import classNames from 'classnames'

export enum ButtonSize {
  Large = 'lg',
  Small = 'sm',
  Normal = 'normal'
}

export enum ButtonType  {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link'
}

export interface BaseButtonProps {
  className?: string;
  /** 是否禁用 */
  disabled?: boolean;
  /** 设置按钮尺寸 */
  size?: ButtonSize;
  /** 设置按钮类型 */
  btnType?: ButtonType;
  children: React.ReactNode
  /** 跳转链接 */
  href?: string;
}
// 联合类型
// 复用 props 元素值
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
// 将属性值设置为可选类型
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

/**
 * Button 按钮
 * @constructor
 * @param {object} props 按钮参数 
 */
export const Button:FC<ButtonProps> = (props) => {
  const {
    className,
    btnType,
    disabled,
    size,
    children,
    href,
    ...restProps
  } = props
  // btn, btn-lg, btn-primary
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === ButtonType.Link) && disabled
  })

  if(btnType === ButtonType.Link && href) {
    return (
    <a
      className={classes}
      href={href}
      {...restProps}
    >
      {children}
    </a>
    )
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
        {...restProps}
      >
        {children}
      </button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  className: '',
  size: ButtonSize.Normal,
  btnType: ButtonType.Default
};

export default Button;