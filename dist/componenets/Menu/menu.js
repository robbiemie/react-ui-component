import React, { createContext, useState } from 'react';
import classNames from 'classnames';
export var MenuContext = createContext({
    index: '0'
});
var Menu = function (props) {
    var className = props.className, defaultIndex = props.defaultIndex, mode = props.mode, style = props.style, onSelecte = props.onSelecte, defauleSelectSubMenus = props.defauleSelectSubMenus, children = props.children;
    var _a = useState(defaultIndex), currentActive = _a[0], updateActive = _a[1];
    var handleClick = function (index) {
        updateActive(index);
        if (onSelecte) {
            onSelecte(index);
        }
    };
    var passedContext = {
        index: currentActive || '0',
        onSelect: handleClick,
        defauleSelectSubMenus: defauleSelectSubMenus,
        mode: mode,
    };
    var classes = classNames('menu', className, {
        'menu-vertical': mode === 'vertical',
        'menu-horizontal': mode !== 'vertical',
    });
    var renderChildren = function () {
        return React.Children.map(children, function (child, index) {
            var childElement = child;
            var displayName = childElement.type.displayName;
            if (displayName === 'MenuItem' || displayName === 'SubMenu') {
                return React.cloneElement(childElement, {
                    index: "" + index
                });
            }
            else {
                console.error('Warning: Menu has a child which is not a MenuItem Component');
            }
        });
    };
    return (React.createElement("ul", { className: classes, style: style, "data-testid": "test-menu" },
        React.createElement(MenuContext.Provider, { value: passedContext }, renderChildren())));
};
Menu.defaultProps = {
    defaultIndex: '0',
    className: '',
    mode: 'horizontal',
    defauleSelectSubMenus: []
};
export default Menu;
