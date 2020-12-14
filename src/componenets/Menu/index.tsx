import { FC } from 'react'
import Menu, { MenuProps } from './menu'
import MenuItem, { MenuItemProps } from './menuItem'
import SubMenu, { SubMenuProps } from './subMenu'

export type IMenuComponents = FC<MenuProps> & {
  Item: FC<MenuItemProps>,
  SubMenu: FC<SubMenuProps>
}

// 类型转换
const TransMenu = Menu as IMenuComponents

TransMenu.Item = MenuItem
TransMenu.SubMenu = SubMenu

export default TransMenu