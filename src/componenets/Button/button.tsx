import React from 'react'
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

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: React.ReactNode
  href?: string;
}
// 联合类型
// 复用 props 元素值
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
// 将属性值设置为可选类型
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const Button:React.FC<ButtonProps> = (props) => {
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
}

export default Button