import * as ClassNames from "classnames";
import * as React from "react";

import "./Input.css";

export type IInputProps =
  Partial<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>>;

export default class Input extends React.Component<IInputProps> {

  public static defaultProps: IInputProps = {
    type: "text",
  };

  public render() {

    const classes = ClassNames("hn-input");

    return (
      <input
        {...this.props}
        className={classes}
      />
    );
  }
}

