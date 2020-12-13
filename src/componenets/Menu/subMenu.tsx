import React, { useContext, useState } from 'react'
import classNames from 'classnames'
import { MenuContext } from "./menu"

export interface subMenuProps {
  index?: string;
  title: string;
  className?: string;
  style?: React.CSSProperties;
}

const SubMenu: React.FC<subMenuProps> = (props) => {
  const {
    className,
    index,
    title,
    style,
    children
  } = props

  const menuContext = useContext(MenuContext)
  const selectSubMenus = menuContext.defauleSelectSubMenus as string[]
  const isShowVisible = (index && menuContext.mode === 'vertical') ? selectSubMenus.includes(index) : false
  const [ visible, updateVisible ] = useState(isShowVisible)
  const classes = classNames('menu-item submenu-item', className, {
    'is-active': menuContext.index === index
  })
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    updateVisible(!visible)
    console.log('')
  }
  let timer: any;
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer)
    e.preventDefault()
    timer = setTimeout(() => {
      updateVisible(toggle)
    }, 300)
  }
  const clickEvents = menuContext.mode === 'vertical' ? {
    onClick: handleClick
  } : {}
  const hoverEvents = menuContext.mode !== 'vertical' ? {
    onMouseEnter: (e: React.MouseEvent) => {
      handleMouse(e, true)
    },
    onMouseLeave: (e: React.MouseEvent) => {
      handleMouse(e, false)
    }
  } : {}
  const renderChildren = () => {
    const subMenuClasses = classNames("submenu", {
      'menu-open': visible
    })
    const childrenComponenet = React.Children.map(children, (child,index) => {
      const childComponent = child as React.FunctionComponentElement<subMenuProps>
      const { displayName } = childComponent.type
      if(displayName === 'MenuItem') {
        return React.cloneElement(childComponent, {
          index: `sub-${index}`
        })
      } else {
        console.error('Warning: SubMenu has a child which is not a MenuItem Component')
      }
    })
    return (
      <ul className={subMenuClasses}>
        {childrenComponenet}
      </ul>
    )
  }
  return (
    <li className={classes} style={style} key={index} {...hoverEvents}>
      <div className="submenu-title" {...clickEvents}>{title}</div>
      {renderChildren()}
    </li>
  )
}

SubMenu.defaultProps = {
  index: '0',
  className: '',
}

SubMenu.displayName = 'SubMenu'

export default SubMenu