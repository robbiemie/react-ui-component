var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import { MenuContext } from "./menu";
var SubMenu = function (props) {
    var className = props.className, index = props.index, title = props.title, style = props.style, children = props.children;
    var menuContext = useContext(MenuContext);
    var selectSubMenus = menuContext.defauleSelectSubMenus;
    var isShowVisible = (index && menuContext.mode === 'vertical') ? selectSubMenus.includes(index) : false;
    var _a = useState(isShowVisible), visible = _a[0], updateVisible = _a[1];
    var classes = classNames('menu-item submenu-item', className, {
        'is-active': menuContext.index === index
    });
    var handleClick = function (e) {
        e.preventDefault();
        updateVisible(!visible);
        console.log('');
    };
    var timer;
    var handleMouse = function (e, toggle) {
        clearTimeout(timer);
        e.preventDefault();
        timer = setTimeout(function () {
            updateVisible(toggle);
        }, 300);
    };
    var clickEvents = menuContext.mode === 'vertical' ? {
        onClick: handleClick
    } : {};
    var hoverEvents = menuContext.mode !== 'vertical' ? {
        onMouseEnter: function (e) {
            handleMouse(e, true);
        },
        onMouseLeave: function (e) {
            handleMouse(e, false);
        }
    } : {};
    var renderChildren = function () {
        var subMenuClasses = classNames("submenu", {
            'menu-open': visible
        });
        var childrenComponenet = React.Children.map(children, function (child, _index) {
            var childComponent = child;
            var displayName = childComponent.type.displayName;
            if (displayName === 'MenuItem') {
                return React.cloneElement(childComponent, {
                    index: index + "-" + _index
                });
            }
            else {
                console.error('Warning: SubMenu has a child which is not a MenuItem Component');
            }
        });
        return (React.createElement("ul", { className: subMenuClasses }, childrenComponenet));
    };
    return (React.createElement("li", __assign({ className: classes, style: style, key: index }, hoverEvents),
        React.createElement("div", __assign({ className: "submenu-title" }, clickEvents), title),
        renderChildren()));
};
SubMenu.defaultProps = {
    index: '0',
    className: '',
};
SubMenu.displayName = 'SubMenu';
export default SubMenu;
