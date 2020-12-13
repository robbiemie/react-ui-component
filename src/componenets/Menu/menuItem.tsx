import React, { useContext } from 'react'
import classNames from 'classnames'
import { MenuContext } from "./menu"

export interface MenuItemProps {
  index?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const {
    className,
    index,
    disabled,
    style,
    children
  } = props

  const menuContext = useContext(MenuContext)

  const classes = classNames('menu-item', className, {
    'is-disabled': disabled,
    'is-active': menuContext.index === index
  })
  const handleClick = () => {
    if(menuContext.onSelect && !disabled && typeof index === 'string') {
      menuContext.onSelect(index)
    }
  }

  return (
    <li className={classes} style={style} key={index} onClick={handleClick}>
      {children}
    </li>
  )
}

MenuItem.defaultProps = {
  index: '0',
  className: '',
  disabled: false
}

MenuItem.displayName = 'MenuItem'

export default MenuItem