import * as classNames from "classnames";
import * as React from "react";
import "./Button.css";

export interface IButtonProps {
  danger?: boolean;
  disabled?: boolean;
  primary?: boolean;
  size?: "small" | "default" | "large";
  warn?: boolean;
}

export default class Button extends React.Component<IButtonProps, {}> {

  public static defaultProps: IButtonProps = {
    danger: false,
    disabled: false,
    primary: false,
    size: "default",
    warn: false,
  };

  public render() {
    const { danger, disabled, primary, size, warn} = this.props;
    const buttonClasses = classNames(
      "whale-button",
      {
        ["small"]: size === "small",
        ["large"]: size === "large",
        ["disabled"]: disabled,
        ["primary"]: primary,
        ["warn"]: warn,
        ["danger"]: danger,
      },
    );
    return (
      <button className={buttonClasses}>
        {this.props.children}
      </button>
    );
  }

}
