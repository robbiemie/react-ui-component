import React, { createContext, useState } from 'react'
import classNames from 'classnames'
import { MenuItemProps } from './menuItem'

type MenuMode = 'horizontal' | 'vertical'

type MenuSelectCallback = (selectIndex:string) => void

export interface MenuProps {
  defaultIndex?: string;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelecte?: MenuSelectCallback;
  defauleSelectSubMenus?: string[];
}

interface IMenuContext {
  index: string;
  onSelect?: MenuSelectCallback;
  mode?: MenuMode;
  defauleSelectSubMenus?: string[];
}

export const MenuContext = createContext<IMenuContext>({
  index: '0'
})

const Menu: React.FC<MenuProps> = (props) => {
  const {
    className,
    defaultIndex,
    mode,
    style,
    onSelecte,
    defauleSelectSubMenus,
    children
  } = props
  const [currentActive, updateActive] = useState(defaultIndex)

  const handleClick = (index: string) => {
    updateActive(index)
    if(onSelecte) {
      onSelecte(index)
    }
  }

  const passedContext:IMenuContext = {
    index: currentActive || '0',
    onSelect: handleClick,
    defauleSelectSubMenus,
    mode,
  }

  const classes = classNames('menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical',
  })

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement  = child as React.FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type
      if(displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, {
          index: `${index}`
        })
      } else {
        console.error('Warning: Menu has a child which is not a MenuItem Component')
      }
    })
  }

  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: '0',
  className: '',
  mode: 'horizontal',
  defauleSelectSubMenus: []
}

export default Menu