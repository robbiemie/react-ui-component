import React, { useContext } from 'react';
import classNames from 'classnames';
import { MenuContext } from "./menu";
var MenuItem = function (props) {
    var className = props.className, index = props.index, disabled = props.disabled, style = props.style, children = props.children;
    var menuContext = useContext(MenuContext);
    var classes = classNames('menu-item', className, {
        'is-disabled': disabled,
        'is-active': menuContext.index === index
    });
    var handleClick = function () {
        if (menuContext.onSelect && !disabled && typeof index === 'string') {
            menuContext.onSelect(index);
        }
    };
    return (React.createElement("li", { className: classes, style: style, key: index, onClick: handleClick }, children));
};
MenuItem.defaultProps = {
    index: '0',
    className: '',
    disabled: false
};
MenuItem.displayName = 'MenuItem';
export default MenuItem;
