import * as classNames from "classnames";
import * as React from "react";
import "./Button.css";

export interface IButtonProps {
  disabled?: boolean;
  large?: boolean;
  small?: boolean;
  primary?: boolean;
  border?: boolean;
  danger?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export class Button extends React.Component<IButtonProps, any> {

  public static defaultProps: IButtonProps = {
    border: false,
    danger: false,
    disabled: false,
    large: false,
    primary: false,
    small: false,
  };

  public render() {
    const {
      children,
      disabled,
      danger,
      large,
      small,
      primary,
      border,
      onClick,
    } = this.props;
    const classes = classNames(
      "hn-btn",
      {
        border,
        danger,
        disabled,
        large,
        primary,
        small,
      },
    );
    return (
      <button
        onClick={onClick}
        className={classes}>
        {children}
      </button>
    );
  }

}
