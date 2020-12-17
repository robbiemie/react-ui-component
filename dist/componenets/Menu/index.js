import Menu from './menu';
import MenuItem from './menuItem';
import SubMenu from './subMenu';
// 类型转换
var TransMenu = Menu;
TransMenu.Item = MenuItem;
TransMenu.SubMenu = SubMenu;
export default TransMenu;
