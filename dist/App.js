import React from "react";
import Menu from "./componenets/Menu/menu";
import MenuItem from "./componenets/Menu/menuItem";
import SubMenu from "./componenets/Menu/subMenu";
var App = function () {
    return React.createElement("div", null,
        React.createElement(Menu, { onSelecte: function (index) { console.log(index); } },
            React.createElement(MenuItem, null, "123"),
            React.createElement(MenuItem, { disabled: true }, "124"),
            React.createElement(MenuItem, null, "125"),
            React.createElement(SubMenu, { title: "sub-menu1" },
                React.createElement(MenuItem, null, "123"),
                React.createElement(MenuItem, { disabled: true }, "123"),
                React.createElement(MenuItem, null, "123"))),
        React.createElement(Menu, { onSelecte: function (index) { console.log(index); }, defauleSelectSubMenus: ["3"], mode: "vertical" },
            React.createElement(MenuItem, null, "123"),
            React.createElement(MenuItem, { disabled: true }, "124"),
            React.createElement(MenuItem, null, "125"),
            React.createElement(SubMenu, { title: "sub-menu1" },
                React.createElement(MenuItem, null, "123"),
                React.createElement(MenuItem, { disabled: true }, "123"),
                React.createElement(MenuItem, null, "123"))));
};
export default App;
