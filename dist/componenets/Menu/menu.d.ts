import React from 'react';
declare type MenuMode = 'horizontal' | 'vertical';
declare type MenuSelectCallback = (selectIndex: string) => void;
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
export declare const MenuContext: React.Context<IMenuContext>;
declare const Menu: React.FC<MenuProps>;
export default Menu;
