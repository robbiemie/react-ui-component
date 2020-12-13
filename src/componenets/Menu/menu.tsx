import React, { createContext, useState } from 'react'
import classNames from 'classnames'

type MenuMode = 'horizontal' | 'vertical'

type MenuSelectCallback = (selectIndex:number) => void

export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelecte?: MenuSelectCallback;
}

interface IMenuContext {
  index: number;
  onSelect?: MenuSelectCallback;
}

export const MenuContext = createContext<IMenuContext>({
  index: 0
})

const Menu: React.FC<MenuProps> = (props) => {
  const {
    className,
    defaultIndex,
    mode,
    style,
    onSelecte,
    children
  } = props
  const [currentActive, updateActive] = useState(defaultIndex)

  const handleClick = (index: number) => {
    updateActive(index)
    if(onSelecte) {
      onSelecte(index)
    }
  }

  const passedContext:IMenuContext = {
    index: currentActive || 0,
    onSelect: handleClick
  }

  const classes = classNames('menu', className, {
    'menu-vertical': mode === 'vertical',
  })
  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passedContext}>
        {children}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: 0,
  className: '',
  mode: 'vertical'
}

export default Menu