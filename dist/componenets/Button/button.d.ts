import React, { ButtonHTMLAttributes, AnchorHTMLAttributes, FC } from 'react';
export declare enum ButtonSize {
    Large = "lg",
    Small = "sm",
    Normal = "normal"
}
export declare enum ButtonType {
    Primary = "primary",
    Default = "default",
    Danger = "danger",
    Link = "link"
}
export interface BaseButtonProps {
    className?: string;
    /** 是否禁用 */
    disabled?: boolean;
    /** 设置按钮尺寸 */
    size?: ButtonSize;
    /** 设置按钮类型 */
    btnType?: ButtonType;
    children: React.ReactNode;
    /** 跳转链接 */
    href?: string;
}
declare type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
declare type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export declare type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
/**
 * Button 按钮
 * @constructor
 * @param {object} props 按钮参数
 */
export declare const Button: FC<ButtonProps>;
export default Button;
