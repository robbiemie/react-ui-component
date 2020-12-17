import React from 'react';
export interface SubMenuProps {
    index?: string;
    title: string;
    className?: string;
    style?: React.CSSProperties;
}
declare const SubMenu: React.FC<SubMenuProps>;
export default SubMenu;
